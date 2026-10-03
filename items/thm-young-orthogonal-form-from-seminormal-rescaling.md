---
id: thm-young-orthogonal-form-from-seminormal-rescaling
kind: theorem
title: "Young's orthogonal form from the seminormal rescaling"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-young-seminormal-form-from-jucys-murphy-eigenlines, def-invariant-inner-product-on-a-tabloid-module, lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero, def-column-antisymmetrizer-polytabloid-and-specht-module, thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors, def-content-vector-of-a-standard-tableau]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 6, printed pp. 22-24"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer (1978), section 25 (Young's orthogonal form, 25.1-25.5 and Theorem 25.3), printed pp. 114-124"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Rescale each Young vector of the previous item to a unit vector for the
positive-definite invariant inner product on the Specht module induced from
the tabloid form, chosen with positive square roots. Then for $T$ with
$T'=s_iT$ standard and $i,i+1$ in different rows and columns of $T$, in the
phasing of the previous item in which $T'$ is the longer tableau, the matrix
of $s_i$ on the ordered basis $(v_T,v_{T'})$ is the orthogonal symmetric
matrix
$$\begin{pmatrix} r^{-1} & \sqrt{1-r^{-2}}\\ \sqrt{1-r^{-2}} & -r^{-1}\end{pmatrix},\qquad r=c_T(i+1)-c_T(i),$$
while the same-row and same-column cases remain the scalars $+1$ and $-1$. In
particular each $s_i$ acts by a real orthogonal (hence unitary) involution on
each complex Specht module with respect to this inner product, and the
resulting matrices form Young's orthogonal representation of $S_n$.

## Facts & Assumptions

**Given:** The Specht module $S^\lambda_{\mathbb C}=V^\lambda\subseteq M^\lambda$ inside the tabloid module over $\mathbb C$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]), the Hermitian tabloid product, and the seminormal Young basis vectors $v_T$ of the previous item ([[thm-young-seminormal-form-from-jucys-murphy-eigenlines]]).

[F1] The tabloid product $\langle\cdot,\cdot\rangle$ is a Hermitian form on $M^\lambda$ which is positive definite, so $\langle x,x\rangle>0$ for $x\ne0$, and $S_n$-invariant, so each $\sigma\in S_n$ acts unitarily and has adjoint $\sigma^{-1}$ ([[def-invariant-inner-product-on-a-tabloid-module]]).

[F2] $S^\lambda\cap(S^\lambda)^\perp=\{0\}$: the restriction of the tabloid product to $S^\lambda$ is nondegenerate, hence, being the restriction of a positive definite form, positive definite ([[lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero]], [[def-invariant-inner-product-on-a-tabloid-module]]).

[F3] In the seminormal normalization of the previous item, if $T'=s_iT$ is standard with $i,i+1$ in different rows and columns of $T$ and $T'$ the longer tableau, then $r=c_T(i+1)-c_T(i)\notin\{0,\pm1\}$ and $s_iv_T=v_{T'}+r^{-1}v_T$, $s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}$; if $i,i+1$ lie in the same row or column then $s_iv_T=\pm v_T$ ([[thm-young-seminormal-form-from-jucys-murphy-eigenlines]]).

[F4] $s_i^2=1$ in $S_n$; consequently a unitary involution is self-adjoint, $s_i^*=s_i$. [F1, given]

[F5] Distinct Young lines have distinct joint content vectors, and $X_k$ acts on each line by its real node content. ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]], [[def-content-vector-of-a-standard-tableau]])

## Proof

**Proof technique:** direct.

1.1 Let $T$ have $T'=s_iT$ standard with $i,i+1$ in different rows and columns, in the phasing of [F3]. The vectors $v_T,v_{T'}$ are nonzero, so by [F2] their norms $\|v_T\|=\sqrt{\langle v_T,v_T\rangle}$ and $\|v_{T'}\|$ are positive real numbers; define $u_T:=v_T/\|v_T\|$ and $u_{T'}:=v_{T'}/\|v_{T'}\|$. [F1, F2, F3, given, algebra]

2.1 Matrix in the unit basis. Each $X_k$ is self-adjoint by [F1], since it is a sum of transpositions, which are unitary involutions. Distinct Young lines have distinct joint content vectors by [F5], so some self-adjoint $X_k$ has different eigenvalues on them; the identity $\langle X_kv,w\rangle=\langle v,X_kw\rangle$ then makes them orthogonal. Thus all the unit vectors $u_T$ form an orthonormal basis. Write $A$ for the matrix of $s_i$ in $(v_T,v_{T'})$ and $B$ for its matrix in $(u_T,u_{T'})$. Since $u_T=v_T/\|v_T\|$, set $D=\operatorname{diag}(\|v_T\|^{-1},\|v_{T'}\|^{-1})$; then $B=D^{-1}AD$. By [F3], $$A=\begin{pmatrix}r^{-1}&1-r^{-2}\\1&-r^{-1}\end{pmatrix},\qquad B=\begin{pmatrix}r^{-1}&(1-r^{-2})\|v_T\|/\|v_{T'}\|\\ \|v_{T'}\|/\|v_T\|&-r^{-1}\end{pmatrix}.$$ [F1, F3, F5, step 1.1, algebra]

2.2 Same row and same column. If $i,i+1$ lie in the same row or column of a standard tableau, [F3] gives $s_iv_T=\pm v_T$ with the sign $+1$ in the row case and $-1$ in the column case; rescaling by a positive norm does not change these scalars. [F3, step 1.1, algebra]

3.1 Symmetry. By [F4] and [F1] the operator $s_i$ is a unitary involution, hence self-adjoint; in the orthonormal basis $(u_T,u_{T'})$ its matrix $B$ therefore satisfies $B=B^*$, the conjugate transpose of $B$. Since $B_{11}=r^{-1}$ and $B_{22}=-r^{-1}$ are real, this forces $B_{21}=\overline{B_{12}}$ and $|B_{12}|=|B_{21}|$. [F1, F4, step 2.1, algebra]

4.1 The off-diagonal entries are positive and equal. By step 2.1, $B_{21}=\|v_{T'}\|/\|v_T\|>0$, so self-adjointness in step 3.1 makes both off-diagonal entries the same positive real number $c$. The $(1,1)$ entry of $B^2=I$ gives $r^{-2}+c^2=1$, hence $c=\sqrt{1-r^{-2}}$, with $|r|>1$ by [F3]. In particular $\|v_{T'}\|/\|v_T\|=\sqrt{1-r^{-2}}$, and $B$ is the displayed symmetric orthogonal matrix. [F3, step 2.1, step 3.1, algebra]

5.1 Orthogonality. The matrices $B$ of step 4.1 are real, symmetric and satisfy $B^2=I$, hence are orthogonal with determinant $-r^{-2}-(1-r^{-2})=-1$; the unit basis was chosen with positive square roots, and the common phase of the initial vector does not affect these matrices. In particular each $s_i$ acts by a real orthogonal involution on each $V^\lambda$ for the restricted inner product. [step 4.1, F2, algebra]

6.1 Representation. The matrices so obtained are the matrices of the actual elements $s_i\in S_n$ in a basis of $V^\lambda$, so they satisfy the Coxeter relations $s_i^2=1$ and $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ and generate a representation equivalent to $V^\lambda$; this is Young's orthogonal representation. [step 2.2, step 5.1, F3, given, algebra] ∎

## Remarks

- **Positive rescaling.** The off-diagonal entry is fixed by $B_{21}=\|v_{T'}\|/\|v_T\|>0$ and self-adjointness; this gives the source's equation (6.5). A common phase of the initial vector remains harmless.

- **Positivity of the form.** The argument uses positive definiteness of the restricted form, which follows from the published nondegeneracy statement; no appeal to complete reducibility or to a general averaging argument over $\mathbb C$ is made beyond the tabloid product itself.

- **Consistency with the seminormal block.** For $r=2$ the matrix is $\begin{pmatrix}1/2&\sqrt3/2\\ \sqrt3/2&-1/2\end{pmatrix}$, the block computed on the examples page for shape $(2,1)$.
