import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()
export const GET = async ()=>{ 
    await prisma.user.findMany

    return NextResponse.json({message: "Hello World"});
    
};

export const POST = async (request: NextRequest)=>{ 
    const body = await request.json();
    return NextResponse.json({message: `Hello World, ${body.data.name}`});
    
};