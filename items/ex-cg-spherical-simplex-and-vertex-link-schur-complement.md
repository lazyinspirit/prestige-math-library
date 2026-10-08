---
id: ex-cg-spherical-simplex-and-vertex-link-schur-complement
kind: example
title: "A spherical simplex from a Gram matrix and its vertex-link Schur complement"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cg-spherical-gram-simplex-and-angular-link, def-cholesky-factorisation-with-positive-diagonal, lem-cg-spherical-simplex-existence-and-link-gram-formula, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, def-principal-inverse-sine-and-cosine, thm-cauchy-schwarz-in-an-inner-product-space, def-metric-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.5.6-5.10, printed pp. 59-62 (cone metric; used only for the angular distance convention)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 505-507 (spherical simplices as links of cones)"
dependency_level: 6
---

## Example

Let $c=\tfrac12$ and let $C$ be the $4\times4$ real symmetric matrix with diagonal entries $1$ and off-diagonal entries $c$. Then:

(i) $C$ is positive definite: for every $x\in\mathbb R^4$, $x^{T}Cx=(1-c)\lVert x\rVert^2+c\bigl(\sum_ix_i\bigr)^2$, which is $>0$ for $x\ne0$ because $1-c=\tfrac12>0$ and $c>0$.

(ii) By [[def-cg-spherical-gram-simplex-and-angular-link]] and [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i), the Cholesky realisation gives four unit vectors $u_0,u_1,u_2,u_3\in\mathbb R^4$ with $u_i\cdot u_j=\tfrac12$ for $i\ne j$; the pairwise angular distances in the spherical simplex $\Sigma(C)$ are all $\arccos\tfrac12$, and the barycentric ray coordinates of every point of $\Sigma(C)$ are unique. The functional with $\varphi(u_i)=1$ is the pairing with the vector $w=\tfrac25(u_0+u_1+u_2+u_3)$ (from $C\cdot 1=\tfrac52\cdot1$), and $\varphi\equiv1$ on $\Delta(C)$; hence $\Sigma(C)$ lies in the open hemisphere $\{\varphi>0\}$.

(iii) The vertex link of $u_0$ computed by the Schur formula of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv) has Gram matrix with off-diagonal entries $\dfrac{c-c^2}{1-c^2}=\dfrac{c}{1+c}=\dfrac13$; explicitly
$$C^{\mathrm{lk}}=\begin{pmatrix}1&\frac13&\frac13\\[2pt]\frac13&1&\frac13\\[2pt]\frac13&\frac13&1\end{pmatrix},\qquad y^{T}C^{\mathrm{lk}}y=\tfrac23\lVert y\rVert^2+\tfrac13\Bigl(\sum_iy_i\Bigr)^2>0\quad(y\ne0),$$
so the link is the spherical triangle with all vertex-to-vertex angular distances $\arccos\tfrac13$, and its positivity is exactly the Schur-complement positivity of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv).

(iv) Iterating the formula once more gives the link of the face spanned by $u_0,u_1$ as the arc of angular length $\arccos\tfrac14$ between the unit directions of the orthogonal projections of $u_2,u_3$ onto $\operatorname{span}(u_0,u_1)^\perp$: the projected squared norms are $\tfrac23$ and the projected inner product is $\tfrac16$, so the projected cosine is $\tfrac14$, the same value that the two-step Schur computation $\tfrac{1/3-(1/3)^2}{1-(1/3)^2}=\tfrac14$ produces; the formula and the positivity check are otherwise the same, so the face-link computation is order-independent for this matrix.

## Facts & Assumptions

**Given:** The real symmetric $4\times4$ matrix $C$ with diagonal entries $1$ and off-diagonal entries $c=\tfrac12$, and its Cholesky realisation $u_0,u_1,u_2,u_3$ of [[def-cg-spherical-gram-simplex-and-angular-link]].

[F1] A real symmetric positive-definite matrix has a unique Cholesky factorisation with lower triangular factor and positive diagonal, and the bijection between positive-definite matrices and their Cholesky data ([[def-cholesky-factorisation-with-positive-diagonal]], [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[F2] In a real inner-product space, $|v|=\sqrt{\langle v,v\rangle}$ is a norm, $|\langle u,v\rangle|\le|u||v|$, orthogonal projections onto finite-dimensional subspaces exist with $|x|^2=|Px|^2+|x-Px|^2$, and for a subspace with basis $b_1,\dots,b_k$ the projection is $Px=\sum_{i,j}g^{ij}\langle x,b_j\rangle b_i$ for the inverse Gram matrix $(g^{ij})$ ([[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[lem-cg-spherical-simplex-existence-and-link-gram-formula]]).

[F3] The Cholesky rows $u_i$ are unit vectors with $u_i\cdot u_j=c_{ij}$; the angular distance is $d_{\mathrm{ang}}(\xi,\eta)=\arccos\langle\xi,\eta\rangle$; the functional $\varphi$ with $\varphi(u_i)=1$ satisfies $\varphi(\sum_i\lambda_iu_i)=\sum_i\lambda_i$ and $\varphi\equiv1$ on $\Delta(C)$; the link of the face spanned by a set of vertices has the Schur-complement Gram matrix of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i), (ii) and (iv) ([[def-cg-spherical-gram-simplex-and-angular-link]], [[def-principal-inverse-sine-and-cosine]]).



## Verification

1.1 The quadratic form. Since $C$ has diagonal $1$ and off-diagonal $c$, expanding gives $x^{T}Cx=\sum_ix_i^2+2c\sum_{i<j}x_ix_j=(1-c)\lVert x\rVert^2+c(\sum_ix_i)^2$; with $c=\tfrac12$ both coefficients are positive, so $x^{T}Cx>0$ for $x\ne0$ and $C$ is positive definite. [given, F1, algebra]

2.1 The Gram realisation. By step 1.1 and [F1] the Cholesky factorisation $C=LL^{T}$ exists with $L$ invertible, and [F3] gives that its rows $u_0,\dots,u_3$ are unit vectors with $u_i\cdot u_j=c_{ij}$; thus $u_i\cdot u_j=\tfrac12$ for $i\ne j$, the pairwise angular distances are $\arccos\tfrac12$, and every point of $\Sigma(C)$ has unique barycentric ray coordinates. [step 1.1, F3]

3.1 The hemisphere functional. Let $w:=\tfrac25(u_0+u_1+u_2+u_3)$ and $\varphi(x):=\langle w,x\rangle$. Since every row of $C$ sums to $1+3c=\tfrac52$, for each fixed $j$ one has $\langle w,u_j\rangle=\tfrac25\sum_i\langle u_i,u_j\rangle=\tfrac25\cdot\tfrac52=1$; hence $\varphi(u_i)=1$ for all $i$, so by [F3] $\varphi(\sum_i\lambda_iu_i)=\sum_i\lambda_i$ and $\varphi\equiv1$ on $\Delta(C)$. Therefore $\Sigma(C)\subseteq\{x:\varphi(x)>0\}$, the open hemisphere. [step 2.1, F3, algebra]

3.2 The vertex link. By [F3] and the Schur formula with $c=\tfrac12$, the link of $u_0$ has Gram matrix $C^{\mathrm{lk}}$ whose diagonal entries are $1$ and whose off-diagonal entries are $\frac{c-c^2}{1-c^2}=\frac{1/2-1/4}{3/4}=\frac13$. Its quadratic form is $y^{T}C^{\mathrm{lk}}y=\frac23\lVert y\rVert^2+\frac13(\sum_iy_i)^2$, which is positive for $y\ne0$; so the link is the spherical triangle whose three angular distances are $\arccos\frac13$. [step 2.1, F3, algebra]

3.3 The face link by projection. Let $G$ be the Gram matrix of $u_0,u_1$, so $G=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$ and $G^{-1}=\frac43\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}$; the orthogonal projection onto $\operatorname{span}(u_0,u_1)$ is $Px=\sum_{i,j}g^{ij}\langle x,u_j\rangle u_i$ by [F2], so $Pu_2=\frac13(u_0+u_1)=Pu_3$ and $|Pu_2|^2=\frac13$; hence $|\operatorname{proj}u_2|^2=|\operatorname{proj}u_3|^2=1-\frac13=\frac23$ and $\langle\operatorname{proj}u_2,\operatorname{proj}u_3\rangle=\langle u_2,u_3\rangle-\langle Pu_2,Pu_3\rangle=\frac12-\frac13=\frac16$, so the projected cosine is $\frac{1/6}{2/3}=\frac14$ and the link of the face is an arc of angular length $\arccos\frac14$. [step 2.1, F2, algebra]

4.1 The two-step Schur value. Iterating the Schur formula of [F3] over the vertices $u_0,u_1$ means applying it first to the Gram matrix of the link of $u_0$, whose off-diagonal entries are $\frac13$ by step 3.2, and then to a $2\times2$ block; the resulting off-diagonal entry is $\frac{1/3-(1/3)^2}{1-(1/3)^2}=\frac{2/9}{8/9}=\frac14$, the same value as the projected cosine of step 3.3. [step 3.2, step 3.3, F3, algebra]

5.1 Order independence and conclusion. By [F3] the link of the face spanned by $u_0,u_1$ equals the Gram matrix of the normalised orthogonal projections of the remaining vertices onto $\operatorname{span}(u_0,u_1)^\perp$, so the projection computation of step 3.3 and the iterated Schur computation of step 4.1 are two descriptions of the same matrix; they agree at the value $\tfrac14$, the face link is an arc of angular length $\arccos\tfrac14$, and the positivity check is the one of step 3.2 applied to this $2\times2$ block, whose determinant $1-\tfrac1{16}$ is positive. [step 3.3, step 4.1, F3] ∎

## Remarks

- **What the example checks.** The example instantiates the definition and the four clauses of the Schur formula: positivity of the Gram matrix by an explicit quadratic form, the Cholesky realisation, the hemisphere functional $\varphi=\langle\tfrac25(u_0+u_1+u_2+u_3),\,\cdot\,\rangle$, the vertex-link Schur complement with value $\tfrac13$, and the iterated two-step computation with value $\tfrac14$ matching an independent projection computation.
- **The hemisphere functional is written with the vertices.** The vector representing $\varphi$ is $\tfrac25(u_0+u_1+u_2+u_3)$, which uses the eigen-identity $C\cdot1=\tfrac52\cdot1$; it is not the vector $\tfrac25(1,1,1,1)$ of ambient coordinates, because the Cholesky rows $u_i$ are not the standard basis.
