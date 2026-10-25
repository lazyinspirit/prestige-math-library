from pathlib import Path
import hashlib,re
p=Path('items/lem-alexander-one-knot-produces-a-good-group-disk-obstruction.md')
s=p.read_text(); assert hashlib.sha256(p.read_bytes()).hexdigest()=='8522df88c2d9079ea7167f1028b416c7a05e460cc7c4c21498ba87e79a80ff4b'
a,b=s.split('## Proof\n',1)
repls=[
('V=[[0,I+U],[U^T,W]]',r'$V=\begin{pmatrix}0&I+U\\U^T&W\end{pmatrix}$'),
('S^T V S = [[0,I+U],[U^T,W+C(I+U)+U^T C]] = [[0,I+U],[U^T,0]]',r'$S^T V S = \begin{pmatrix}0&I+U\\U^T&W+C(I+U)+U^T C\end{pmatrix} = \begin{pmatrix}0&I+U\\U^T&0\end{pmatrix}$'),
('S=[[I,C],[0,I]]',r'$S=\begin{pmatrix}I&C\\0&I\end{pmatrix}$'),
('V=[[0,I+U],[U^T,0]]',r'$V=\begin{pmatrix}0&I+U\\U^T&0\end{pmatrix}$'),
('N(C)=CU+U^T C',r'$N(C)=CU+U^T C$'),('N^(2g−1)=0',r'$N^{2g-1}=0$'),('sum_{r=0}^{2g−2}(−N)^r',r'$\sum_{r=0}^{2g-2}(-N)^r$'),('C=−(I+N)^(−1)W',r'$C=-(I+N)^{-1}W$'),
("ell'_j=ell_j+sum_i s_i C_ij",r"$\ell'_j=\ell_j+\sum_i s_i C_{ij}$"),('−C_ij+C_ji=0',r'$-C_{ij}+C_{ji}=0$'),
('E_ij+E_ji = (e_i+e_j)(e_i+e_j)^T−E_ii−E_jj',r'$E_{ij}+E_{ji}=(e_i+e_j)(e_i+e_j)^T-E_{ii}-E_{jj}$'),
('(theta,r) to (theta+2pi rho(r),r)',r'$(\theta,r)$ to $(\theta+2\pi\rho(r),r)$'),('x to x+(x intersection v)v',r'$x$ to $x+(x\mathbin{\cdot}v)v$'),('vv^T',r'$vv^T$'),
('K times [1,1.5]',r'$K\times[1,1.5]$'),('.9<x<1.1, |y|<epsilon',r'$.9<x<1.1$, $|y|<\epsilon$'),
('m_1 w m_2^−1 w^−1',r'$m_1 w m_2^{-1} w^{-1}$'),('a a^k a^−1 a^−k=1',r'$a a^k a^{-1} a^{-k}=1$'),('pi1(N)=Z',r'$\pi_1(N)=\mathbb Z$'),
('lambda(Delta(s_i),Delta(s_j))=0',r'$\lambda(\Delta(s_i),\Delta(s_j))=0$'),('mu(Delta(s_i))=0',r'$\mu(\Delta(s_i))=0$'),('0=2mu+e',r'$0=2\mu+e$'),('V(s_i,s_j)=0',r'$V(s_i,s_j)=0$'),
('T_i=ell_i times the boundary of the normal rectangle [.8,1.2] times [−2epsilon,2epsilon]',r'$T_i=\ell_i$ times the boundary of the normal rectangle $[.8,1.2]\times[-2\epsilon,2\epsilon]$'),
('lambda(g_i,Delta(s_j))=delta_ij+(1−t)lk(ell_i,s_j-down) =delta_ij+(1−t)(U^T)_ij',r'$\lambda(g_i,\Delta(s_j))=\delta_{ij}+(1-t)\operatorname{lk}(\ell_i,s_j\text{-down})=\delta_{ij}+(1-t)(U^T)_{ij}$'),
('lambda(g_i,g_j)=(1−t)lk(ell_i,ell_j-down)(1−t^−1)=0',r'$\lambda(g_i,g_j)=(1-t)\operatorname{lk}(\ell_i,\ell_j\text{-down})(1-t^{-1})=0$'),
('f_i=g_i−sum_(k<i) T_ik f_k',r'$f_i=g_i-\sum_{k<i}T_{ik}f_k$'),('lambda(f_i,Delta(s_j))=delta_ij',r'$\lambda(f_i,\Delta(s_j))=\delta_{ij}$'),('lambda(Delta(s_i),f_j)=delta_ij',r'$\lambda(\Delta(s_i),f_j)=\delta_{ij}$'),('mu(g_i)=0',r'$\mu(g_i)=0$'),
('Delta(ell_i)',r'$\Delta(\ell_i)$'),('Delta(s_i)',r'$\Delta(s_i)$'),('t^−1',r'$t^{-1}$'),('t^r',r'$t^r$'),('x<=.8',r'$x\le .8$'),('x=.8,y=0',r'$x=.8,y=0$'),('x=.8',r'$x=.8$'),('|y|<epsilon\'',r"$|y|<\epsilon'$"),
('s_i-down',r'$s_i\text{-down}$'),('lambda/mu',r'$\lambda/\mu$'),('delta_ij',r'$\delta_{ij}$'),('T_ij',r'$T_{ij}$'),('j<i',r'$j<i$'),('j=i',r'$j=i$'),('j>i',r'$j>i$'),('g=0',r'$g=0$'),('I+N',r'$I+N$'),('U^T',r'$U^T$'),('g-by-g',r'$g$-by-$g$'),('gth',r'$g$th'),('codimension3>2',r'codimension $3>2$'),('codimension8>6',r'codimension $8>6$')]
# Each successive replacement acts only outside existing math spans.
for old,new in repls:
 parts=re.split(r'(\$[^$]*\$)',b)
 b=''.join(t if i%2 else t.replace(old,new) for i,t in enumerate(parts))
# Standalone indexed symbols and named variables, without touching formulas/tags.
for old,new in [('ell_i',r'\ell_i'),('ell_j',r'\ell_j'),('s_i','s_i'),('s_j','s_j'),('e_i','e_i'),('e_j','e_j'),('T_i','T_i'),('g_i','g_i'),('f_i','f_i'),('Sigma',r'\Sigma'),('epsilon',r'\epsilon'),('rho',r'\rho'),('S3','S^3'),('H1','H_1')]:
 parts=re.split(r'(\$[^$]*\$)',b); b=''.join(t if i%2 else re.sub(r'(?<![\w])'+re.escape(old)+r'(?![\w])',lambda m:'$'+new+'$',t) for i,t in enumerate(parts))
# Literal standalone variables in prose.
parts=re.split(r'(\$[^$]*\$)',b)
b=''.join(t if i%2 else re.sub(r'\b([UVWNCFSKxyuvawte])\b',lambda m:'$'+(r'\mathbb Z' if m[1]=='Z' else m[1])+'$',t) for i,t in enumerate(parts))
p.write_text(a+'## Proof\n'+b)
