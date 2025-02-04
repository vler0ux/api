import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()
export const GET = async ()=>{ 
    const body = await prisma.user.findMany()
    return NextResponse.json({"Les users":body});
    
};


export const POST = async (request: NextRequest)=>{ 
    const body = await request.json();
    const newUser = await prisma.user.create({
        data: {
            name: body.data.name
        }
    })
    return NextResponse.json({ user: newUser});
    
};