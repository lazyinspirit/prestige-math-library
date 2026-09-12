---
id: ex-sl2-kostant-harmonic-decomposition
kind: example
title: Sl2 kostant harmonic decomposition
status: "published"
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, §§11–13; local proof and exact reading limits in the group report
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
proof_strategy: direct
---

## Example

For $\mathfrak{sl}_2(\mathbb C)$, choose complex coordinates in which the normalized Killing quadratic is $q=x^2+y^2+z^2$, and put $\Delta=\partial_x^2+\partial_y^2+\partial_z^2$. Multiplication gives an isomorphism of graded vector spaces
$$\mathbb C[q]\otimes_{\mathbb C}\ker\Delta\ \xrightarrow{\sim}\ \mathbb C[x,y,z].$$
The invariant ring is $\mathbb C[q]$, so $\ker\Delta$ is precisely the common kernel of the positive-degree invariant constant-coefficient operators. Its homogeneous degree-$n$ component has dimension $2n+1$ for every $n\geq0$.

## Facts & Assumptions

**Given:** Use matrices $h=\operatorname{diag}(1,-1)$, $e=E_{12}$, $f=E_{21}$, with commutator bracket. Polynomial adjoint invariance means that the derivations with vector fields $X\mapsto[u,X]$ kill the polynomial for $u=h,e,f$; the opposite pullback sign gives the same kernels.

The Killing form here is defined by $B(u,v)=\operatorname{tr}(\operatorname{ad}_u\operatorname{ad}_v)$ on this three-dimensional matrix algebra.

## Verification

1.1 Matrix multiplication gives $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$. The matrices of these adjoint maps on $(h,e,f)$ give $B(h,h)=8$, $B(e,f)=B(f,e)=4$, and all other basis pairings zero. For example $\operatorname{ad}_h$ has diagonal $(0,2,-2)$; $\operatorname{ad}_e\operatorname{ad}_f$ maps $h\mapsto2h$, $e\mapsto2e$, $f\mapsto0$, so its trace is four. The squares of $\operatorname{ad}_e,\operatorname{ad}_f$ and mixed products with $\operatorname{ad}_h$ have zero trace. Thus for $X=ah+be+cf$, $B(X,X)=8(a^2+bc)$. Put $x=a$, $y=(b+c)/2$, $z=(b-c)/(2i)$; then $a^2+bc=x^2+y^2+z^2=q$. These are orthonormal coordinates for $B/8$, and $B$ is nondegenerate by this explicit diagonal matrix. [given]

2.1 The $h$-derivation on $\mathbb C[a,b,c]$ is $2b\partial_b-2c\partial_c$. Its kernel consists of sums of monomials with equal $b,c$ exponents, hence polynomials $F(a,u)$ with $u=bc$. The $e$-derivation is $c\partial_a-2a\partial_b$, which on such a polynomial is $c(F_a-2aF_u)$. Since the polynomial ring is a domain, its vanishing is equivalent to $F_a-2aF_u=0$. In the invertible polynomial change $v=a^2+u$, write $G(a,v)=F(a,v-a^2)$. The equation is $\partial_aG=0$, so characteristic zero gives $G=P(v)$. Hence every invariant is a polynomial in $q$. Conversely the displayed $h,e$ derivations kill $q$, and the $f$-derivation $-b\partial_a+2a\partial_c$ also kills $q$. Therefore the invariant ring is exactly $\mathbb C[q]$. [step 1.1]

3.1 In the orthonormal coordinates for $B/8$, replacement of a linear coordinate by its corresponding directional derivative sends $q$ to $\Delta$ and $q^k$ to $\Delta^k$. Replacing $B/8$ by $B$ scales the identification on each degree by a nonzero scalar, so the kernels do not change. Positive-degree elements of $\mathbb C[q]$ are finite linear combinations of $q^k$ with $k\geq1$. Thus their common differential kernel is exactly $\ker\Delta$: necessity uses $q$, and sufficiency uses every power of $\Delta$. [step 1.1, step 2.1]

4.1 For a homogeneous harmonic polynomial $u$ of degree $m$, the product rule and the monomial Euler identity $x\partial_xu+y\partial_yu+z\partial_zu=mu$ give $\Delta(q^k u)=2k(2m+2k+1)q^{k-1}u$ for $k\geq1$. Indeed $\partial_jq^k=2kx_jq^{k-1}$ and $\Delta q^k=2k(2k+1)q^{k-1}$ in three variables; the cross term contributes $4kmq^{k-1}u$ and $q^k\Delta u=0$. Every displayed coefficient is nonzero when $k\geq1,m\geq0$. For $k=0$ the Laplacian vanishes by harmonicity. [step 3.1]

5.1 Write $S_n$ for homogeneous polynomials of degree $n$, and $H_n=\ker(\Delta\vert S_n)$. We prove $S_n=\bigoplus_{k=0}^{\lfloor n/2\rfloor}q^kH_{n-2k}$ by induction on $n$. For $n=0,1$, differentiation twice gives zero, so $S_n=H_n$. For $n\geq2$, the induction decomposition of $S_{n-2}$ shows that the map $\Delta:qS_{n-2}\to S_{n-2}$ is an isomorphism: on each summand $q^{k+1}H_m$ it is multiplication by the nonzero scalar in 4.1 onto $q^kH_m$, and multiplication by the nonzero polynomial $q$ is injective. For any $p\in S_n$, there is therefore a unique $v\in qS_{n-2}$ with $\Delta v=\Delta p$; then $p-v\in H_n$. The same injectivity shows $H_n\cap qS_{n-2}=0$. This proves the inductive direct decomposition. [step 4.1]

6.1 Summing the finite decompositions of 5.1 over degrees proves that multiplication $\mathbb C[q]\otimes\ker\Delta\to S$ is surjective and injective: each tensor has finite support in the powers of $q$, and the degreewise decomposition makes all its harmonic coefficients unique. Counting the monomials $x^ay^bz^c$ with $a+b+c=n$ gives $\dim S_n=(n+1)(n+2)/2$. For $n\geq2$, 5.1 gives $\dim H_n=\dim S_n-\dim S_{n-2}=2n+1$; for $n=0,1$ the dimensions are directly $1,3$. Constants and all linear polynomials are harmonic, zero is allowed throughout, and the nonzero coefficients in 4.1 cover every higher step. The inverse decomposition is uniquely specified by finite calculations in each degree; no AC, general Chevalley restriction or general Kostant theorem is used. [step 3.1, step 4.1, step 5.1] ∎
