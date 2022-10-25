import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";
import { resolveSoa } from "dns";

export const itemsRouter = express.Router();


itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();

        res.status(200).send(items)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
