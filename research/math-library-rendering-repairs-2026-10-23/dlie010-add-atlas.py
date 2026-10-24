from pathlib import Path
import hashlib
p=Path('items/thm-existence-of-each-classified-root-system.md')
b=p.read_bytes()
assert hashlib.sha256(b).hexdigest()=='7d2d2db0a8f859547f0a8dee7a9d062bac67adfedcb16ae28ec822d5cc5a5b06'
s=r'''
## Remarks

The atlas below shows the classical diagrams at ranks $4,4,4,5$ and the five exceptional diagrams. A vertex labelled $i$ denotes $\alpha_i$. In general $A_n,B_n,C_n$ have the chain $1-2-\cdots-n$ (a single vertex for $A_1$); only the last edge is doubled in $B_n,C_n$. For $D_n$ the chain $1-\cdots-(n-2)$ has the two additional leaves $n-1,n$ at $n-2$. Thus the pictured classical rows extend to every rank in the statement, including $B_2,C_3,D_4$. An arrow points toward the shorter root; parallel strokes are separate edges.

For the classical rows use the simple roots of steps 1.1–1.3, in the order given there. For $G_2$ use $\alpha_1=\alpha$, $\alpha_2=\beta$ of step 1.4, with squared lengths $6,2$ and Cartan matrix $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$. For $F_4$ a compatible base in the set of step 2.1 is $\alpha_1=e_2-e_3$, $\alpha_2=e_3-e_4$, $\alpha_3=e_4$, $\alpha_4=(e_1-e_2-e_3-e_4)/2$, with squared lengths $2,2,1,1$.

For $E_r$, $r=6,7,8$, use the first $r$ vectors of $\alpha_1=(e_1+e_8-e_2-e_3-e_4-e_5-e_6-e_7)/2$, $\alpha_2=e_1+e_2$, and $\alpha_j=e_{j-1}-e_{j-2}$ for $3\le j\le8$. These are roots of the sets constructed in steps 2.2 and 3.1 and have squared length $2$. Their nonzero off-diagonal inner products are $-1$, precisely on the pictured edges. In particular the exceptional branch is at vertex $4$, with arms of lengths $2,1,r-4$. The diagrams illustrate the outcomes of the proof; the proof is independent of this atlas.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (-1,0) {$A_4$};
\draw (0,0)--(1.2,0)--(2.4,0)--(3.6,0);
\foreach \x/\i in {0/1,1.2/2,2.4/3,3.6/4} {\fill (\x,0) circle (2pt); \node[below] at (\x,0) {$\i$};}
\node at (-1,-1.1) {$B_4$};
\draw (0,-1.1)--(1.2,-1.1)--(2.4,-1.1);
\draw (2.4,-1.04)--(3.6,-1.04); \draw (2.4,-1.16)--(3.6,-1.16);
\draw (2.88,-0.91)--(3.12,-1.1)--(2.88,-1.29);
\foreach \x/\i in {0/1,1.2/2,2.4/3,3.6/4} {\fill (\x,-1.1) circle (2pt); \node[below] at (\x,-1.1) {$\i$};}
\node at (-1,-2.2) {$C_4$};
\draw (0,-2.2)--(1.2,-2.2)--(2.4,-2.2);
\draw (2.4,-2.14)--(3.6,-2.14); \draw (2.4,-2.26)--(3.6,-2.26);
\draw (3.12,-2.01)--(2.88,-2.2)--(3.12,-2.39);
\foreach \x/\i in {0/1,1.2/2,2.4/3,3.6/4} {\fill (\x,-2.2) circle (2pt); \node[below] at (\x,-2.2) {$\i$};}
\node at (-1,-3.5) {$D_5$};
\draw (0,-3.5)--(1.2,-3.5)--(2.4,-3.5)--(3.6,-2.95);
\draw (2.4,-3.5)--(3.6,-4.05);
\foreach \x/\y/\i in {0/-3.5/1,1.2/-3.5/2,2.4/-3.5/3,3.6/-2.95/4,3.6/-4.05/5} {\fill (\x,\y) circle (2pt); \node[below] at (\x,\y) {$\i$};}
\node at (-1,-5.2) {$E_6$};
\draw (0,-5.2)--(1.2,-5.2)--(2.4,-5.2)--(3.6,-5.2)--(4.8,-5.2);
\draw (2.4,-5.2)--(2.4,-4.5);
\foreach \x/\i in {0/1,1.2/3,2.4/4,3.6/5,4.8/6} {\fill (\x,-5.2) circle (2pt); \node[below] at (\x,-5.2) {$\i$};}
\fill (2.4,-4.5) circle (2pt); \node[above] at (2.4,-4.5) {$2$};
\node at (-1,-6.7) {$E_7$};
\draw (0,-6.7)--(1.2,-6.7)--(2.4,-6.7)--(3.6,-6.7)--(4.8,-6.7)--(6,-6.7);
\draw (2.4,-6.7)--(2.4,-6);
\foreach \x/\i in {0/1,1.2/3,2.4/4,3.6/5,4.8/6,6/7} {\fill (\x,-6.7) circle (2pt); \node[below] at (\x,-6.7) {$\i$};}
\fill (2.4,-6) circle (2pt); \node[above] at (2.4,-6) {$2$};
\node at (-1,-8.2) {$E_8$};
\draw (0,-8.2)--(1.2,-8.2)--(2.4,-8.2)--(3.6,-8.2)--(4.8,-8.2)--(6,-8.2)--(7.2,-8.2);
\draw (2.4,-8.2)--(2.4,-7.5);
\foreach \x/\i in {0/1,1.2/3,2.4/4,3.6/5,4.8/6,6/7,7.2/8} {\fill (\x,-8.2) circle (2pt); \node[below] at (\x,-8.2) {$\i$};}
\fill (2.4,-7.5) circle (2pt); \node[above] at (2.4,-7.5) {$2$};
\node at (-1,-9.4) {$F_4$};
\draw (0,-9.4)--(1.2,-9.4); \draw (2.4,-9.4)--(3.6,-9.4);
\draw (1.2,-9.34)--(2.4,-9.34); \draw (1.2,-9.46)--(2.4,-9.46);
\draw (1.68,-9.21)--(1.92,-9.4)--(1.68,-9.59);
\foreach \x/\i in {0/1,1.2/2,2.4/3,3.6/4} {\fill (\x,-9.4) circle (2pt); \node[below] at (\x,-9.4) {$\i$};}
\node at (-1,-10.5) {$G_2$};
\draw (0,-10.5)--(1.2,-10.5); \draw (0,-10.4)--(1.2,-10.4); \draw (0,-10.6)--(1.2,-10.6);
\draw (0.48,-10.27)--(0.72,-10.5)--(0.48,-10.73);
\foreach \x/\i in {0/1,1.2/2} {\fill (\x,-10.5) circle (2pt); \node[below] at (\x,-10.5) {$\i$};}
\end{tikzpicture}
```
'''
p.write_bytes(b+s.encode())
