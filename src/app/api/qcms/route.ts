import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()
export const GET = async ()=>{ 
    const body = await prisma.qcm.findMany()
    return NextResponse.json({"The title":body});
    
};

export const POST = async (request: NextRequest)=>{ 
    const body = await request.json();
    const newTitle = await prisma.qcm.create({
        data: {
            title: body.data.title
        }
    })
    return NextResponse.json({ title: newTitle});
    
};