function drawTicTacToeBoard(){
    glColor3f(255, 255, 255);
    glBegin(GL_POLYGON);
        glVertex3f(20, 45, cubeVertexZ[2] + 1);
        glVertex3f(24, 45, cubeVertexZ[3] + 1);
        glVertex3f(20, -45, cubeVertexZ[7] + 1);
        glVertex3f(24, -45, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(-20,  45, cubeVertexZ[2] + 1);
        glVertex3f(-24,  45, cubeVertexZ[3] + 1);
        glVertex3f(-20, -45, cubeVertexZ[7] + 1);
        glVertex3f(-24, -45, cubeVertexZ[6] + 1);
    glEnd();
    
    glBegin(GL_POLYGON);
        glVertex3f(45,  18, cubeVertexZ[2] + 1);
        glVertex3f(45,  22, cubeVertexZ[3] + 1);
        glVertex3f(-45, 18, cubeVertexZ[7] + 1);
        glVertex3f(-45, 22, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f( 45, -18, cubeVertexZ[2] + 1);
        glVertex3f( 45, -22, cubeVertexZ[3] + 1);
        glVertex3f(-45, -18, cubeVertexZ[7] + 1);
        glVertex3f(-45, -22, cubeVertexZ[6] + 1);
    glEnd();
}

function drawXGamePiece(){
    glBegin(GL_POLYGON);
        glVertex3f( -10,   8, cubeVertexZ[2] + 1);
        glVertex3f( -10,  12, cubeVertexZ[3] + 1);
        glVertex3f(  10,  -8, cubeVertexZ[7] + 1);
        glVertex3f(  10, -12, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(  10,  8, cubeVertexZ[7] + 1);
        glVertex3f(  10, 12, cubeVertexZ[6] + 1);
        glVertex3f( -10, -8, cubeVertexZ[2] + 1);
        glVertex3f( -10,-12, cubeVertexZ[3] + 1);
    glEnd();
}

function drawOGamePiece(){
    let i = 50;

    let circle_points=100;
    let cx=50+i, cy=50+x, r=50;
    let pi = 3.14159;

    glColor3f(1, 1, 1);
    glBegin(GL_LINE_LOOP);

    for(i=0;i<circle_points;i++)
    {
        let theta=(2*pi*i)/circle_points;
        glVertex2f(cx+r*cos(theta),cy+r*sin(theta));
    }
    glEnd();
}