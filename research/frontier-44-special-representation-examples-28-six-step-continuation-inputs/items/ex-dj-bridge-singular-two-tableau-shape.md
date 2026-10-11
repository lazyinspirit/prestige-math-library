---
id: ex-dj-bridge-singular-two-tableau-shape
kind: example
title: "The two-tableau pairing at a singular parameter"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary,
       thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual, def-generic-type-a-hecke-algebra,
       lem-dj-bridge-row-permutation-module-standard-action,
       def-dj-bridge-row-column-permutation-modules-and-polytabloids,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 27-36): the row module, the Specht module and the Murphy cell of the shape (2,1) with their forms, in the normalization used here."
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978; author-hosted scan"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "The ordinary rank-two Specht module of the shape (2,1) and its Gram matrix, the q=1 specialization of this example."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the standard elements and the cell form whose normalization is used for the Murphy quotient matrices."
---

## Example

For $\lambda=(2,1)$ put $x=1+T_1$ and $b_0=x$, $b_1=xT_2$, $b_2=xT_2T_1$ in the row permutation module. Its form is $\operatorname{diag}(1,q,q^2)$ and its generator action matrices, with coordinate row vectors, are $R_1=\left(\begin{smallmatrix}q&0&0\\0&0&1\\0&q&q-1\end{smallmatrix}\right)$, $R_2=\left(\begin{smallmatrix}0&1&0\\q&q-1&0\\0&0&q\end{smallmatrix}\right)$. The ordinary polytabloid basis is $p_0=z=xT_2(1-q^{-1}T_1)=b_1-q^{-1}b_2$ and $p_1=zT_2=qb_0+(q-1)b_1-b_2$. Their embedding has unit determinant on its $b_0,b_2$ coordinates, and their form is $$B=\begin{pmatrix}q+1&q^2\\q^2&q^3+q\end{pmatrix}.$$ In the Murphy quotient let $c_0=x$, $c_1=xT_2$ modulo the higher shape $(3)$. Its form and generator action matrices, with coordinate row vectors, are $$G=\begin{pmatrix}q+1&-1\\-1&q^2+1\end{pmatrix},\quad M_1=\begin{pmatrix}q&0\\-1&-1\end{pmatrix},\quad M_2=\begin{pmatrix}0&1\\q&q-1\end{pmatrix}.$$ On the ordinary basis the matrices are $P_1=\left(\begin{smallmatrix}-1&0\\-q^2&q\end{smallmatrix}\right)$ and $P_2=M_2$. The map $\Phi(p_0)=c_0$, $\Phi(p_1)=(q-1)c_0-c_1$ has matrix $A=\left(\begin{smallmatrix}1&0\\q-1&-1\end{smallmatrix}\right)$; it satisfies $P_iA=A((q-1)I-M_i)$ and $AGA^{\mathsf T}=B$. The same-shape perfect cross-pairing on the bases $(c_0,c_1)$ and $(p_0,p_1)$ has matrix $Q=\left(\begin{smallmatrix}0&q\\q&q(q-1)\end{smallmatrix}\right)$ with determinant $-q^2$, a unit; its entries are the row-form coefficients before quotienting. Thus the exact self-form multiplier is $1$. Both Gram determinants equal $q(1+q+q^2)$. At $q=-1$ over characteristic zero these forms are nonsingular with determinant $-1$, even though $[2]_q=0$; at $q=1$ in characteristic $2$ both reduce to $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ and have radical $0$. This distinguishes a singular algebra parameter from degeneracy of this particular module form. No choice principle is used.

## Facts & Assumptions

**Given:** The Hecke algebra $H=H_{R,q}(S_3)$ over a commutative ring $R$ with $q\in R^\times$, the shape $\lambda=(2,1)=\lambda'$, the row module $M(\lambda)$ with $x=x_\lambda=1+T_1$ and the distinguished basis $\{b_0,b_1,b_2\}$, the polytabloid module $P(\lambda)=z_\lambda H$ with $z_\lambda=xT_2(1-q^{-1}T_1)$, the permutation form $\beta$ and the Murphy cell $C_{\mathrm M}(\lambda)$ with classes $c_0,c_1$ and form $G$, together with the comparison theorem and the perfect cross-pairing of [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]] and [[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]].

[F1] $H$ has generators $T_1,T_2$ with $(T_i-q)(T_i+1)=0$, braid relation $T_1T_2T_1=T_2T_1T_2$ and standard basis $\{T_w\}$; $xT_1=q\,x$ ([[def-generic-type-a-hecke-algebra]], [[lem-dj-bridge-row-permutation-module-standard-action]]).

[F2] The distinguished basis $\{b_0,b_1,b_2\}=\{x,xT_{s_2},xT_{s_2s_1}\}$ of $M(\lambda)$ satisfies $\beta(b_i,b_j)=\delta_{ij}q^{i}$ and is the row basis of $D_\lambda=\{1,s_2,s_2s_1\}$ ([[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], [[lem-dj-bridge-row-permutation-module-standard-action]]).

[F3] $C_{\mathrm M}(\lambda)=M(\lambda)/(M(\lambda)\cap I^{\rhd\lambda})$ has basis $c_t=xT_{d(t)}$ for the standard tableaux $t$, and its form satisfies $m_{us}m_{tv}\equiv G(c_s,c_t)m_{uv}\pmod{I^{\rhd\lambda}}$; the ideal $I^{\rhd\lambda}$ contains $x_{(3)}=b_0+b_1+b_2$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] $\Phi\colon P(\lambda)\to C_{\mathrm M}(\lambda)^\theta$ is an isomorphism with $\Phi(z)=c_0$ and unit $u_\lambda(q)=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}=q^{1-1}=1$ for $\lambda=(2,1)$; the pairing $B_\lambda(m_s,p)=\beta(xT_{d(s)},p)$ is perfect with the explicit entries $B_\lambda(c_s,e_t)=q^{\ell(d(s))}a_{d(s),t}$ ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]], [[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]]).



## Verification

**Proof technique:** direct.

1.1 **Row module.** From [F1], $b_0T_1=xT_1=qx=q\,b_0$, $b_1T_1=xT_2T_1=b_2$ and $b_2T_1=xT_2T_1^2=xT_2((q-1)T_1+q)=(q-1)b_2+q\,b_1$; also $b_0T_2=b_1$, $b_1T_2=xT_2^2=x((q-1)T_2+q)=(q-1)b_1+q\,b_0$ and $b_2T_2=xT_2T_1T_2=xT_1T_2T_1=q\,xT_2T_1=q\,b_2$, using the braid relation. In the basis $(b_0,b_1,b_2)$ with coordinate row vectors these are exactly the matrices $R_1$ and $R_2$ of the statement, and $\beta(b_i,b_i)=q^{i}$ by [F2] because $\ell(1)=0$, $\ell(s_2)=1$, $\ell(s_2s_1)=2$. [F1, F2, algebra]

2.1 **Polytabloids and their form.** Since $z_\lambda=xT_2(1-q^{-1}T_1)$ by [F4] and $y_{\lambda'}=1-q^{-1}T_1$, the displayed expressions $p_0=b_1-q^{-1}b_2$ and $p_1=zT_2=b_1T_2-q^{-1}b_2T_2=qb_0+(q-1)b_1-b_2$ follow from step 1.1. Their coordinates on $(b_0,b_2)$ give the matrix $\left(\begin{smallmatrix}0&-q^{-1}\\q&-1\end{smallmatrix}\right)$ with determinant $q\cdot q^{-1}=1$, a unit over every $R$; hence the two polytabloids span a free rank-two split submodule. The row action gives $p_0T_1=-p_0$, $p_1T_1=-q^2p_0+qp_1$, $p_0T_2=p_1$ and $p_1T_2=qp_0+(q-1)p_1$. Thus their span is stable, has precisely the displayed matrices $P_1,P_2$, and equals $zH$ because it contains $z=p_0$ and $zT_2=p_1$. Weighted inner products against the diagonal form of [F2] give $B=\left(\begin{smallmatrix}q+1&q^2\\q^2&q^3+q\end{smallmatrix}\right)$: explicitly $B_{00}=q+q^{-2}\cdot q^2=q+1$, $B_{01}=q(q-1)+(-q^{-1})(-1)q^2=q(q-1)+q=q^2$, and $B_{11}=q^2+(q-1)^2q+q^2=q^3+q$. Its determinant is $q(q^2+q+1)$. [step 1.1, F2, F4, algebra]

2.2 **The Murphy quotient.** In $C_{\mathrm M}(\lambda)$ the higher vector $x_{(3)}=b_0+b_1+b_2$ vanishes by [F3], so $b_2=-c_0-c_1$ and $c_1=xT_2=b_1$. Then $c_0T_1=qx=q\,c_0$ and $c_1T_1=b_2=-c_0-c_1$, giving $M_1$; also $c_0T_2=c_1$ and $c_1T_2=(q-1)b_1+qb_0=(q-1)c_1+qc_0$, giving $M_2$. The defining products of [F3] give $x^2=(q+1)x$ and $xT_2x=b_1+b_2=x_{(3)}-x\equiv-x$. Also $xT_2^2x=(q-1)xT_2x+qx^2\equiv(q^2+1)x$. Reading the coefficient of $m_{t_0t_0}=x$ therefore gives $G(c_0,c_0)=q+1$, $G(c_0,c_1)=-1$ and $G(c_1,c_1)=q^2+1$; equivalently $G=\left(\begin{smallmatrix}q+1&-1\\-1&q^2+1\end{smallmatrix}\right)$ with determinant $q^3+q^2+q$. [step 1.1, F3, algebra]

3.1 **Comparison, cross-pairing and specializations.** The comparison theorem of [F4] gives $\Phi(z)=c_0$, hence $\Phi(p_1)=\Phi(zT_2)=c_0\theta(T_2)=(q-1)c_0-c_1$ and $A=\left(\begin{smallmatrix}1&0\\q-1&-1\end{smallmatrix}\right)$; direct matrix multiplication verifies $P_iA=A((q-1)I-M_i)$ for $i=1,2$ and $AGA^{\mathsf T}=B$, the latter being the form identity with the unit $u_\lambda=1$. The cross-pairing entries $B_\lambda(c_s,p_t)=\beta(b_{d(s)},p_t)$ on the standard bases give $Q=\left(\begin{smallmatrix}0&q\\q&q(q-1)\end{smallmatrix}\right)$ with $\det Q=-q^2\in A^\times$, so the pairing is perfect as in [F4]. The two Gram determinants agree with $q(1+q+q^2)$. At $q=-1$ in characteristic zero, $B=\left(\begin{smallmatrix}0&1\\1&-2\end{smallmatrix}\right)$ and $G=\left(\begin{smallmatrix}0&-1\\-1&2\end{smallmatrix}\right)$ have determinant $-1$, although $[2]_q=1+q=0$; at $q=1$ in characteristic $2$, both reduce to $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ with determinant $1$, hence with zero radical. All identities are Laurent-polynomial identities, so they specialize to every $R$; no choice principle is used. [step 2.1, step 2.2, F4, algebra] ∎

