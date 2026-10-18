---
id: thm-first-companion-pencil-is-strong-linearization
kind: theorem
title: "The first Frobenius companion pencil preserves the finite and infinite polynomial spectrum"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-first-frobenius-companion-pencil
  - def-matrix-polynomial-and-homogeneous-eigenpairs
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. Steven Mackey, Niloufer Mackey, and Françoise Tisseur, Polynomial Eigenvalue Problems: Theory, Computation, and Structure, §3"
      url: "https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §§3.1 and 3.4"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Statement

Let $P$ be a regular $n\times n$ grade-$m$ matrix polynomial with $m\ge1$, and let $L(\lambda)=A_c-\lambda B_c$ be the pencil of [[def-first-frobenius-companion-pencil]]. A square matrix polynomial is **unimodular** when its determinant is a nonzero constant. The pencil $L$ is a **strong linearization** of $P$ if there are unimodular polynomial matrices $U,V$ with $ULV=\operatorname{diag}(P,I_{(m-1)n})$ and unimodular polynomial matrices $\widetilde U,\widetilde V$ with $\widetilde U(\mu)(\mu A_c-B_c)\widetilde V(\mu)=\operatorname{diag}(P^{\rm rev}_m,I_{(m-1)n})$. Such matrices exist. In particular, $\det(A_c-\lambda B_c)=\det P(\lambda)$; finite eigenvectors correspond by $x\mapsto z(\lambda,x)$; and the infinite eigenspaces correspond by $x\mapsto(x,0,\ldots,0)^T$ from $\ker A_m$ to $\ker(-B_c)$. The algebraic multiplicity of infinity in both problems is $mn-\deg\det P$. Thus if $A_m$ is invertible there are no infinite eigenvalues; if $A_m$ is singular there is at least one, with geometric multiplicity $\dim\ker A_m$, which need not equal its algebraic multiplicity.

## Facts & Assumptions

**Given:** A regular square matrix polynomial $P(\lambda)=\sum_{j=0}^{m}A_j\lambda^j$ of grade $m\ge1$ over $\mathbb C$.

[F1] [[def-matrix-polynomial-and-homogeneous-eigenpairs]]: $P_h(\alpha,\beta)=\sum_{j=0}^{m}A_j\alpha^j\beta^{m-j}$; finite multiplicities are zero orders of $\det P$, while the multiplicity at infinity is the zero order of $\det P^{\rm rev}_m$ at $0$.

[F2] [[def-first-frobenius-companion-pencil]]: $L(\lambda)=A_c-\lambda B_c$ has top block row $(\lambda A_m+A_{m-1},A_{m-2},\ldots,A_0)$, lower rows $(-I_n,\lambda I_n)$ on adjacent blocks, and $z(\lambda,x)=(\lambda^{m-1}x,\ldots,x)^T$.

## Proof

**Proof technique:** direct block elimination.

1.1 For $m\ge2$, partition the columns of $L$ as $u=(z_1,\ldots,z_{m-1})$ and $x=z_m$, and the rows as the top block row and the lower $m-1$ block rows; write the resulting blocks as $L=\begin{bmatrix}C&E\\D&G\end{bmatrix}$. The lower-left block $D(\lambda)$ is upper block-bidiagonal with $-I_n$ on its diagonal and $\lambda I_n$ on its superdiagonal. Thus $D=-(I-\lambda S)$ for the nilpotent upper block shift $S$, so $D^{-1}=-(I+\lambda S+\cdots+\lambda^{m-2}S^{m-2})$ is polynomial and $\det D=(-1)^{n(m-1)}$. The lower equations with zero right-hand side are $Du+Gx=0$; solving them gives $z_j=\lambda^{m-j}x$. Substitution into the top row shows that the Schur complement is $E-CD^{-1}G=P(\lambda)$. To compute the determinant, swap the top and lower row groups, with sign $(-1)^{n^2(m-1)}$, obtaining $\begin{bmatrix}D&G\\C&E\end{bmatrix}$. Left multiplication by $\begin{bmatrix}I&0\\-CD^{-1}&I\end{bmatrix}$ has determinant one and gives $\begin{bmatrix}D&G\\0&P\end{bmatrix}$, whose determinant is $\det D\det P$. Since $\det D=(-1)^{n(m-1)}$, the total sign is $(-1)^{n^2(m-1)+n(m-1)}=(-1)^{n(n+1)(m-1)}=1$, so $\det L=\det P$. For $m=1$, $L=P$ directly. [given, F2, algebra]

2.1 For the partition in step 1.1, left multiplication by $\begin{bmatrix}I&-CD^{-1}\\0&I\end{bmatrix}$ clears the top-left block and leaves $P$ in the top-right block, since $E-CD^{-1}G=P$. Left multiplication of the lower rows by $D^{-1}$ makes the lower-left block $I$ and the lower-right block $H:=D^{-1}G$. Right multiplication by $\begin{bmatrix}I&-H\\0&I\end{bmatrix}$ clears that lower-right block; a block-column permutation then gives $\operatorname{diag}(P,I_{(m-1)n})$. Each operation and its inverse has polynomial entries and determinant a nonzero constant, so their products are unimodular. [F2, step 1.1, algebra]

2.2 Put $L_h(\alpha,\beta):=\beta A_c-\alpha B_c$. If $\beta\ne0$, then $L_h=\beta L(\alpha/\beta)$, so step 1.1 gives $\det L_h=\beta^{mn}\det P(\alpha/\beta)=\det P_h(\alpha,\beta)$. Both sides are polynomials in $(\alpha,\beta)$. Fix any $\beta\ne0$; the identity holds for every $\alpha$, so their coefficients in powers of $\alpha$ agree. Each such coefficient is a polynomial in $\beta$ and agrees for every $\beta\ne0$; as univariate polynomials with infinitely many common values they are identical, so the identity holds also at $\beta=0$. For finite $\lambda$, the lower rows of $L(\lambda)z=0$ force $z_j=\lambda^{m-j}z_m$; if $z\ne0$ then $z_m\ne0$, and the top row is $P(\lambda)z_m=0$. Conversely, for each nonzero $x$ with $P(\lambda)x=0$, the lift in [F2] is nonzero and the lower rows vanish while the top row is $P(\lambda)x$. At infinity, $L_h(1,0)=-B_c=\operatorname{diag}(A_m,I_n,\ldots,I_n)$, so its kernel consists exactly of $(x,0,\ldots,0)^T$ with $A_mx=0$. [F1, F2, step 1.1, algebra]

3.1 For the reversal pencil $\mu A_c-B_c$, reorder the block columns as $(z_2,\ldots,z_m,z_1)$. Its lower equations are $z_i-\mu z_{i-1}=0$; on the first $m-1$ reordered block columns their coefficient matrix is lower block-bidiagonal with $I_n$ on its diagonal and $-\mu I_n$ on its subdiagonal, so its determinant is $1$ and its inverse is polynomial by the finite nilpotent-shift expansion. Solving these equations gives $z_i=\mu^{i-1}z_1$; substitution into the top row gives $\sum_{j=0}^{m}A_{m-j}\mu^j=P^{\rm rev}_m(\mu)$. The same row elimination, normalization by this polynomial inverse, column clearing, and block permutation used in step 2.1 therefore give $\operatorname{diag}(P^{\rm rev}_m,I_{(m-1)n})$ by unimodular polynomial matrices. For $m=1$ the reversal pencil equals $P^{\rm rev}_1$ directly. [F1, F2, step 2.1, algebra]

4.1 The reversal determinant identity is $\det P^{\rm rev}_m(\mu)=\mu^{mn}\det P(1/\mu)$. If $d=\deg\det P$, write $\det P(\lambda)=c_d\lambda^d+\cdots+c_0$ with $c_d\ne0$; then $\det P^{\rm rev}_m(\mu)=c_d\mu^{mn-d}+\cdots+c_0\mu^{mn}$, whose zero order at $0$ is exactly $mn-d$. Step 3.1 shows the reversal pencil has the same zero order, and step 2.2 identifies the homogeneous companion spectrum and eigenspaces. In the permutation expansion of $\det P(\lambda)$, every product has $n$ factors of degree at most $m$; degree $mn$ can occur only by taking the $\lambda^m$ coefficient from each factor, so its coefficient is $\det A_m$. Thus invertibility of $A_m$ is equivalent to $d=mn$ and no infinity eigenvalue; singularity gives $d<mn$ and positive multiplicity at infinity. The geometric multiplicity is $\dim\ker A_m$ by step 2.2 and is not used to infer the zero order. [F1, step 3.1, step 2.2, algebra] ∎
