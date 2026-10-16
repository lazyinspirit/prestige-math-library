---
id: thm-qc-trace-norm-duality-and-norm-properties
kind: theorem
title: Trace Norm Duality And Norm Properties
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-linear-map
  - def-qc-trace-norm
  - def-singular-values-of-an-endomorphism
  - thm-singular-value-decomposition
  - def-trace-of-an-endomorphism
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-real-and-complex-inner-product-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - prop-singular-values-are-well-defined
  - thm-bessel-inequality-and-finite-parseval-identity
  - lem-complex-conjugation-and-modulus-laws
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite SVD bases, orthonormal-basis expansions, diagonal-sum traces, and finite-dimensional adjoints.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §1.1.3, Eqs. (1.173)–(1.174)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.3, A.5 and A.7"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $A:H\to K$ be a linear map ([[def-linear-map]]) between finite-dimensional complex
inner-product spaces. Then

$$\|A\|_1=\max\{\,|\operatorname{tr}_H(B^*A)|: B:H\to K\text{ linear and }\|B\|\le1\,\}.$$

Consequently, on the vector space of linear maps $H\to K$, the trace norm is
nonnegative, absolutely homogeneous, definite, and satisfies the triangle
inequality.

## Facts & Assumptions
**Given:** Finite-dimensional complex inner-product spaces $H,K$ and linear maps $A,D:H\to K$; where quantified, $B:H\to K$ is also a map $H\to K$.

[F1] The trace norm is the sum of the singular values, including zeros ([[def-qc-trace-norm]]).

[F2] A finite map has an SVD $Az=\sum_{i<r}s_i\langle z,e_i\rangle f_i$, with orthonormal bases in its domain and codomain and positive singular values $s_i$ ([[thm-singular-value-decomposition]], [[def-singular-values-of-an-endomorphism]], [[prop-singular-values-are-well-defined]]).

[F3] The adjoint is characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$, and finite-dimensional adjoints exist uniquely ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[F4] In an ordered basis, the trace of an endomorphism is the sum of its diagonal entries; it is basis-independent and is $0$ on the zero space ([[def-trace-of-an-endomorphism]]).

[F5] The operator norm is $0$ on the zero domain and otherwise is defined as the maximum of $\|Cz\|$ over unit vectors $z$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F6] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] An orthonormal basis gives finite vector expansions, including the empty basis case ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F8] Complex modulus is nonnegative, multiplicative, and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F9] In a fixed ordered basis, a linear map's $j$-th matrix column is the coordinate column of the image of the $j$-th basis vector ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[F10] The root pairing is linear in its first argument and conjugate-symmetric ([[def-real-and-complex-inner-product-space]]).

## Proof


1.1 Fix an ordered basis of $H$. For endomorphisms $R,S$ of $H$ and a scalar $\alpha$, [F9] shows that the diagonal entries of $\alpha R+S$ are $\alpha R_{jj}+S_{jj}$: the $j$-th coordinate column is obtained from $(\alpha R+S)e_j=\alpha Re_j+Se_j$. Summing these entries by [F4] gives $\operatorname{tr}_H(\alpha R+S)=\alpha\operatorname{tr}_H(R)+ \operatorname{tr}_H(S)$. Thus trace homogeneity and additivity used below follow from the diagonal-sum definition. The same calculation covers $H=0$ by empty sums. [F4, F9, algebra]

1.2 Let $C:H\to K$ be any finite-dimensional linear map. If $H=0$, its operator norm is $0$ by [F5]. If $H\ne0$, choose an SVD as in [F2] with positive singular values $t_1\ge\cdots\ge t_q>0$ and orthonormal domain vectors $u_1,\ldots,u_{\dim H}$. If $q>0$, Bessel's inequality [F7] gives, for every unit vector $z$, $\|Cz\|^2=\sum_{j\le q}t_j^2|\langle z,u_j\rangle|^2\le t_1^2$, with equality at $z=u_1$. If $q=0$, the SVD says $C=0$, so every unit vector attains the value $0$. Thus the maximum in [F5] exists for every map used below, including the zero-rank case. [F2, F5, F7, algebra]

1.3 Choose an SVD as in [F2], with $r$ positive singular values. Then $\|A\|_1=\sum_{i<r}s_i$ by [F1]. If $r=0$, [F2] gives $A=0$ and this sum is empty. [given, F1, F2, choose]

1.4 Write the SVD domain basis as $(e_j)_{j<n}$ and its positive singular values as $s_i$ for $i<r$. By [F4], [F7], and the fact that the $j$-th diagonal entry is the $e_j$-coordinate of the image of $e_j$, $$\operatorname{tr}_H(B^*A)=\sum_{j<n}\langle B^*Ae_j,e_j\rangle_H=\sum_{i<r}s_i\langle B^*f_i,e_i\rangle_H=\sum_{i<r}s_i\langle f_i,Be_i\rangle_K.$$ For the last equality, [F3] gives $\langle Be_i,f_i\rangle_K=\langle e_i,B^*f_i\rangle_H$, and conjugate symmetry [F10] gives the displayed order. This is a direct endomorphism-trace calculation and uses no cyclic trace identity for maps. [F2, F3, F4, F7, F10, algebra]

2.1 Suppose $r>0$ and define $B_0:H\to K$ by $B_0z=\sum_{i<r}\langle z,e_i\rangle f_i$. By [F10], this is linear; it sends $e_i$ to $f_i$ for $i<r$ and sends the remaining basis vectors to $0$. By [F7], $\|B_0z\|^2=\sum_{i<r}|\langle z,e_i\rangle|^2\le\|z\|^2$, with equality at $z=e_0$. The maximum property established in step 1.2 therefore gives $\|B_0\|=1$. Define $Cw=\sum_{i<r}\langle w,f_i\rangle e_i$. Expanding in the finite orthonormal bases using [F7] verifies $\langle B_0z,w\rangle_K=\langle z,Cw\rangle_H$, so [F3] gives $C=B_0^*$. Hence $B_0^*Ae_i=s_ie_i$ for $i<r$ and $B_0^*Ae_j=0$ for $j\ge r$. If $r=0$, set $B_0=0$. [F2, F3, F7, F10, step 1.2, construct]

2.2 Let $B:H\to K$ satisfy $\|B\|\le1$. By [F5] and the maximum property established in step 1.2, $\|Be_i\|\le1$ for every unit vector $e_i$; [F6] then gives $|\langle f_i,Be_i\rangle|\le1$. Applying [F8] to the sum in step 1.4 yields $|\operatorname{tr}_H(B^*A)|\le\sum_{i<r}s_i=\|A\|_1$. The same bound is immediate when $r=0$. [F5, F6, F8, step 1.2, step 1.3, step 1.4, algebra]

3.1 By [F4], [F7], and step 1.3, $\operatorname{tr}_H(B_0^*A)=\sum_{i<r}s_i=\|A\|_1$; when $r=0$, both sides are $0$. Together with step 2.2 this proves the stated maximum, including zero-dimensional spaces. [F1, F2, F4, F7, step 1.3, step 2.2, step 2.1]

4.1 For any scalar $\alpha$, apply the maximum formula to $\alpha A$. By step 1.1, $\operatorname{tr}_H(B^*(\alpha A))=\alpha\operatorname{tr}_H(B^*A)$, so taking absolute values and maxima gives $\|\alpha A\|_1=|\alpha|\|A\|_1$. The definition and [F2] give $\|A\|_1\ge0$, with equality exactly when all singular values vanish, which by the SVD is exactly $A=0$. [F1, F2, F8, step 1.1, step 3.1, algebra]

5.1 For maps $A,D:H\to K$, every contraction $B$ satisfies $$|\operatorname{tr}_H(B^*(A+D))|\le|\operatorname{tr}_H(B^*A)|+|\operatorname{tr}_H(B^*D)|\le\|A\|_1+\|D\|_1$$ by the additivity from step 1.1, [F8], and step 3.1. Taking the maximum over $B$ proves $\|A+D\|_1\le\|A\|_1+\|D\|_1$. Thus the trace norm has all stated norm properties. [F8, step 1.1, step 3.1, algebra] ∎

