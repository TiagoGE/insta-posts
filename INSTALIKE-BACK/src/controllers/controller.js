import fs from 'fs';
import path from 'path';
import { getAllPosts, createPost, updatenewPost, /*deleteAllPosts*/ } from '../Models/model.js'
import generateDescriptionAI from '../services/geminiService.js';
import { error } from 'console';

export async function getPosts(req, res) {

    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function addPosts(req, res) {

    const newPost = req.body;

    try {

        const createdPost = await createPost(newPost);
        res.status(201).json(createdPost);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Server can't handle request" })
    }
}

export async function uploadImage(req, res) {
    const novoPost = {
        description: "",
        url: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await createPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function updatePost(req, res) {
    const id = req.params.id;
    // Determine the URL dynamically
    // const baseUrl = req.protocol + '://' + req.get('host');
    // console.log(baseUrl);
    const baseUrl = `https://backend-api-246822425102.us-west1.run.app`;
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const description = await generateDescriptionAI(imgBuffer)

        const post = {
            url: `${baseUrl}/${id}.png`,
            // url: baseUrl,
            description: description,
            alt: req.body.alt
        }

        const postCriado = await updatenewPost(id, post);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

// export async function deleteAll(req, res) {
//     try {
//         await deleteAllPosts(); // Call the model function to delete all posts
//         res.status(200).json({ message: "All posts deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting posts", error });
//     }
// }