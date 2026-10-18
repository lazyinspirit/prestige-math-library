---
id: thm-real-albert-algebra-is-jordan
kind: theorem
title: The real Albert algebra is a Jordan algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 2
deps: [def-hermitian-three-by-three-octonion-matrix-data, def-octonion-algebra-by-cayley-dickson, def-quaternions, lem-octonion-conjugation-is-an-anti-involution, def-jordan-algebra]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8, printed pp. 38–45"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §§6.1, 6.4–6.7"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
    - title: "John C. Baez, The Octonions, PDF pp. 31–35"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

For real octonions $\mathbb O$ with the multiplication in
[[def-octonion-algebra-by-cayley-dickson]], the expression
$X\circ Y:=\frac12(XY+YX)$ maps
$H_3(\mathbb O)\times H_3(\mathbb O)$ into $H_3(\mathbb O)$ and makes it a
unital real Jordan algebra. This is the real Albert algebra in this matrix
realization; no classification or assertion for $H_n(\mathbb O)$ with
$n\ne3$ is included.

## Facts & Assumptions

**Given:** The real octonion pair algebra, its conjugation, and the real vector space $H_3(\mathbb O)$ with the specified binary matrix product.

[F1] For $X,Y\in H_3(\mathbb O)$, the matrix product is $(XY)_{ij}=\sum_{r=1}^3X_{ir}Y_{rj}$, with products in the displayed order, and $m(X,Y)=(XY+YX)/2$ ([[def-hermitian-three-by-three-octonion-matrix-data]]).

[F2] Octonion conjugation reverses products ([[lem-octonion-conjugation-is-an-anti-involution]]); from the pair formula in [[def-octonion-algebra-by-cayley-dickson]] and the quaternion coordinates in [[def-quaternions]], its fixed elements are precisely $(r,0)$ with $r\in\mathbb R$.

[F3] A real Jordan algebra has a commutative bilinear product satisfying $X\circ(Y\circ X^2)=(X\circ Y)\circ X^2$ ([[def-jordan-algebra]]).

[F4] The local exact certificate `research/non-ml-math-remaining-81-2026-10-18-batch-80.sources/albert-jordan-identity-check.mjs` uses the quaternion coordinate product $(ae-bf-cg-dh,\ af+be+ch-dg,\ ag-bh+ce+df,\ ah+bg-cf+de)$ of [[def-quaternions]], then evaluates $(a,b)(c,d)=(ac-\bar d b,\ da+b\bar c)$ from [[def-octonion-algebra-by-cayley-dickson]]. Its matrix loop is exactly the ordered sum in [F1], and its $D$ operation adds the reverse matrix product. Its recorded output is `research/non-ml-math-remaining-81-2026-10-18-batch-80.sources/albert-jordan-identity-check.json`. The certificate uses only `BigInt` arithmetic.

[F5] In quaternion coordinates, every coordinate of multiplication is a sum of signed terms $a_pb_q$, and conjugation is a coordinate sign change ([[def-quaternions]]).

## Proof
1.1 Conjugation of the $(i,j)$ entry of $XY$ gives $\overline{(XY)_{ji}} =\sum_r\overline{X_{jr}Y_{ri}} =\sum_r\overline{Y_{ri}}\,\overline{X_{jr}} =\sum_rY_{ir}X_{rj} =(YX)_{ij}.$ Thus $XY+YX$ is Hermitian off the diagonal. Its $i$th diagonal entry is $\sum_r\bigl(X_{ir}\overline{Y_{ir}}+Y_{ir}\overline{X_{ir}}\bigr).$ Each summand is fixed by conjugation, since its conjugate is the same sum in reverse order; by [F2] the fixed elements are real. Therefore $m(X,Y)$ is in $H_3(\mathbb O)$. For bilinearity, [F5] shows that quaternion multiplication is real-bilinear and quaternion conjugation is real-linear. The pair formula in [[def-octonion-algebra-by-cayley-dickson]] therefore makes octonion multiplication real-bilinear. Each entry of the matrix product in [F1] is a sum of three octonion products, so matrix multiplication is real-bilinear; consequently $D(X,Y)=XY+YX$ and $m(X,Y)=D(X,Y)/2$ are bilinear. The formula for $m$ makes it commutative. The quaternion coordinate formula gives $\hat1 a=a\hat1=a$ and $\bar0=0$, so the pair formula gives $(1,0)(a,b)=(\hat1a-\bar b0,b\hat1+0\bar a)=(a,b)$ and $(a,b)(1,0)=(a\hat1-\bar0b,0a+b\bar{\hat1})=(a,b)$; hence $1_{\mathbb O}=(1,0)$ is a two-sided unit. The identity matrix is in $H_3(\mathbb O)$ and is a two-sided unit for the matrix product, hence $m(I,X)=X$. [given, F1, F2, F5, algebra]

1.2 Let $1,i,j,k,\ell,i\ell,j\ell,k\ell$ be the ordered real basis of $\mathbb O=\mathbb H\times\mathbb H$ specified by the pair formula. The three diagonal matrix units, together with the eight Hermitian matrices having one of these octonions in the $(1,2)$, $(2,3)$, or $(3,1)$ slot and its conjugate in the transposed slot, form a real basis of $H_3(\mathbb O)$: the three real diagonal coordinates and the three independent octonion entries are recovered uniquely from any Hermitian matrix. There are $3+3\cdot8=27$ basis elements. [given, F1, F2, algebra]

2.1 Set $D(X,Y):=XY+YX$. With $m=D/2$, bilinearity gives $8\bigl(m(X,m(Y,m(X,X)))-m(m(X,Y),m(X,X))\bigr) =D(X,D(Y,D(X,X)))-D(D(X,Y),D(X,X)).$ The right side is a polynomial homogeneous of degree three in $X$ and degree one in $Y$, with coefficients in the real basis of $H_3(\mathbb O)$ fixed here. [given, F1, step 1.1, algebra]

3.1 Write $X=\sum_i x_iE_i$ and $Y=\sum_\ell y_\ell E_\ell$ in this basis. The coefficient of $x_ix_jx_ky_\ell$ in the degree-$(3,1)$ expression in step 2.1 is the sum over the distinct permutations $(p,q,r)$ of $(i,j,k)$ of $D(E_r,D(E_\ell,D(E_p,E_q))) -D(D(E_r,E_\ell),D(E_p,E_q)).$ This follows by distributing each bilinear $D$; when indices repeat, distinct permutations count the distinct placements in the cubic monomial exactly once. The script in [F4] computes all $27^2=729$ ordered basis-pair products to encode $D$, rejecting any non-Hermitian result, then checks these coefficients for every sorted triple $0\leq i\leq j\leq k<27$ and every $0\leq\ell<27$. It checks $\binom{29}{3}\cdot27=98{,}658$ monomial coefficients, or $98{,}658\cdot27=2{,}663{,}766$ output coordinates. Its signed integer arithmetic returns zero in every coordinate, with the convention witnesses $ij=k$, $(ij)\ell=k\ell$, and $i(j\ell)=-k\ell$ all true. Since the basis coordinates of the polynomial are exactly the coefficients enumerated, the polynomial vanishes for every $X,Y$. [given, F1, F2, F4, step 2.1, step 1.2]

4.1 step 1.1 and step 3.1 establish closure, commutativity, bilinearity, a unit, and the Jordan identity in [F3]. Hence $H_3(\mathbb O)$ is a unital real Jordan algebra. [step 1.1, step 3.1, F3] ∎

