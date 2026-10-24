---
id: ex-orthogonal-and-symplectic-tangent-matrices
kind: example
title: "Classical bilinear-form equations linearize to matrix spaces"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-tangent-vectors-as-dual-number-points
  - def-dual-numbers-scheme
  - def-scheme-over-base
  - thm-affine-scheme-ring-anti-equivalence
  - thm-universal-property-of-a-polynomial-ring-on-a-family
  - thm-quotient-ring-universal-property
  - def-matrices-over-a-commutative-ring
  - def-ring-matrix-product-identity-and-transpose
  - def-trace-of-a-square-matrix-over-a-commutative-ring
  - def-determinant-of-a-square-matrix
  - cor-dimensions-of-matrix-and-linear-map-spaces
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §4j Example 4.48, Exercise 4-6, and official solution 4-6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Let $k$ be a field and $n\geq1$. If $\operatorname{char}k\ne2$, let
$O_n$ be the affine $k$-scheme cut out in $M_n$ by $A^{\mathsf T}A=I_n$,
and let $SO_n$ be cut out by these equations together with $\det A=1$. At
their identity matrix $I_n$,
$$T_{I_n}O_n=T_{I_n}SO_n=\{B\in M_n(k):B^{\mathsf T}+B=0\},$$
the space of skew-symmetric matrices.

Over any field and in every characteristic, put
$$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}$$
and let $Sp_n$ be the affine $k$-scheme cut out in $M_{2n}$ by
$A^{\mathsf T}JA=J$ and $\det A=1$. Its tangent matrices at the identity
are exactly
$$B=\begin{pmatrix}P&Q\\R&-P^{\mathsf T}\end{pmatrix},\qquad Q^{\mathsf T}=Q,\quad R^{\mathsf T}=R,$$
and this tangent vector space has dimension $n(2n+1)$. These are tangent-space
computations only; they do not assert the global dimension or smoothness of the
group schemes.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq1$, the dual-number ring
$D=k[\epsilon]/(\epsilon^2)$, and the identity matrices of the groups above.

[F1] [[lem-tangent-vectors-as-dual-number-points]]: $T_xX$ is naturally isomorphic as a $k$-vector space to the fibre over $x$ of based dual-number maps.

[F2] [[def-dual-numbers-scheme]]: $D=k[\epsilon]/(\epsilon^2)$, so every element has unique form $c+\epsilon d$ and $\epsilon^2=0$.

[F3] [[def-scheme-over-base]]: a $k$-morphism commutes with the structure maps to $\operatorname{Spec}k$.

[F4] [[thm-affine-scheme-ring-anti-equivalence]]: ring maps between coordinate rings correspond contravariantly to morphisms of affine schemes; with [F3], the maps here are $k$-algebra maps.

[F5] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: the images of all polynomial variables determine a unique ring homomorphism from the polynomial ring.

[F6] [[thm-quotient-ring-universal-property]]: a ring map that kills the defining ideal factors uniquely through the quotient coordinate ring.

[F7] [[def-ring-matrix-product-identity-and-transpose]]: matrix addition and scalar multiplication are entrywise, and products have entries $(AB)_{ik}=\sum_{j<n}a_{ij}b_{jk}$.

[F8] [[def-trace-of-a-square-matrix-over-a-commutative-ring]]: the trace is the sum of the diagonal entries, including the empty sum when the size is zero.

[F9] [[def-determinant-of-a-square-matrix]]: determinant over a commutative ring is the finite signed Leibniz sum over permutations.

[F10] [[def-matrices-over-a-commutative-ring]]: an $m\times n$ matrix over $k$ is a function on the index set $m\times n$, with value $a_{ij}$ at $(i,j)$.

[F11] [[cor-dimensions-of-matrix-and-linear-map-spaces]]: for a field $F$ and finite $m,n$, $\dim_FM_{m\times n}(F)=mn$.

[F12] [[def-ring-matrix-product-identity-and-transpose]]: $I_n$ has ones on the diagonal, and transpose is given by $(A^{\mathsf T})_{ji}=a_{ij}$.

## Proof

**Proof technique:** direct.

1.1 By [F1], each tangent vector at the identity is a based $k$-morphism $\operatorname{Spec}D\to X$. The coordinate-ring correspondence [F3, F4], polynomial universal property [F5], and quotient property [F6] identify these with matrices over $D$ satisfying the defining equations and reducing to identity. By [F2], every such matrix has unique form $A=I+\epsilon B$ for a matrix $B$ over $k$. [F1, F2, F3, F4, F5, F6, F12, given, algebra]

2.1 For $O_n$, substitution from step 1.1 gives $(I+\epsilon B)^{\mathsf T}(I+\epsilon B)=I+\epsilon(B^{\mathsf T}+B)$, so preservation of $I_n$ is equivalent to $B^{\mathsf T}+B=0$. In characteristic not two, the diagonal equations give $2b_{ii}=0$ and hence $b_{ii}=0$; the off-diagonal equations give $b_{ji}=-b_{ij}$. In the Leibniz expansion of $\det(I+\epsilon B)$, the identity permutation contributes $\prod_i(1+\epsilon b_{ii})=1+\epsilon\sum_i b_{ii}$; any nonidentity permutation moves at least two indices, so every nonzero term has at least two $\epsilon$ factors and vanishes. Thus [F8, F9] give $\det(I+\epsilon B)=1+\epsilon\operatorname{tr}(B)$. Every skew matrix here has trace zero, so it satisfies the additional $SO_n$ determinant equation, in both directions, and the two tangent spaces coincide. The entries $b_{ij}$ for $i<j$ are free, giving the skew-matrix dimension $n(n-1)/2$. [F2, F7, F8, F9, F10, F12, step 1.1, given, algebra]

3.1 For the symplectic scheme, step 1.1 gives $(I+\epsilon B)^{\mathsf T}J(I+\epsilon B)=J+\epsilon(B^{\mathsf T}J+JB)$, so preservation of $J$ is equivalent to $B^{\mathsf T}J+JB=0$. Write $B=\begin{pmatrix}P&Q\\R&S\end{pmatrix}$ in $n\times n$ blocks. By [F7], $B^{\mathsf T}J+JB=\begin{pmatrix}R-R^{\mathsf T}&P^{\mathsf T}+S\\-S^{\mathsf T}-P&Q^{\mathsf T}-Q\end{pmatrix}$. This vanishes exactly when $R^{\mathsf T}=R$, $S=-P^{\mathsf T}$, and $Q^{\mathsf T}=Q$; the lower-left equation follows from $S=-P^{\mathsf T}$. For every characteristic, $\operatorname{tr}B=\operatorname{tr}P-\operatorname{tr}(P^{\mathsf T})=0$, so by the determinant calculation in step 2.1 the equation $\det A=1$ adds no first-order condition. This proves both inclusions in the asserted tangent-space description. [F2, F7, F8, F9, F12, step 1.1, step 2.1, algebra]

4.1 The block $P$ ranges over $M_n(k)$ and contributes $n^2$ dimensions by [F11]. For a symmetric block, the map from $k^{n(n+1)/2}$ that fills the diagonal and upper-triangular entries freely and copies each off-diagonal entry into its transposed position is a linear bijection, using the entrywise vector-space operations in [F7]: symmetry forces exactly those copied entries and leaves the chosen coordinates arbitrary. Thus each of $Q$ and $R$ contributes $n+n(n-1)/2=n(n+1)/2$ dimensions. Therefore the symplectic tangent dimension is $n^2+2\cdot n(n+1)/2=2n^2+n=n(2n+1)$. For $n=1$, this is the three-parameter family $\begin{pmatrix}p&q\\r&-p\end{pmatrix}$. [F7, F10, F11, step 3.1, algebra]

5.1 All three schemes contain the identity, so none is empty; the zero tangent vector is $B=0$. For $n=1$ and $\operatorname{char}k\ne2$, the orthogonal tangent space is zero, while the symplectic tangent space has dimension $3$. The orthogonal characteristic restriction is necessary: in characteristic $2$, for $n=1$, $(1+\epsilon b)^2=1$ for every $b$, so $T_1O_1=k$, whereas $\det(1+\epsilon b)=1$ forces $b=0$ for $SO_1$. The symplectic block and determinant calculations in step 3.1 remain valid in characteristic $2$. The identity corresponds to $B=0$, both tangent descriptions are equation equivalences, and the proof uses only finite entrywise calculations, with no basis choices or AC/DC. The counts are tangent-space dimensions only; no global group dimension or smoothness follows. [F1, F2, F8, F9, step 1.1, step 2.1, step 3.1, step 4.1, given, algebra] ∎
