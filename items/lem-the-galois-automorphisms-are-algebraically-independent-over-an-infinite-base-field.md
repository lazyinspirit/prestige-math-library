---
id: lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field
kind: lemma
title: "Over an infinite base field, no nonzero polynomial vanishes at the conjugate tuple of every element"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring, lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible, def-finite-galois-extension-and-galois-group, def-linear-basis, def-multivariate-polynomial-ring-by-iteration, def-invertible-matrix-and-general-linear-group, def-ring-matrix-product-identity-and-transpose, thm-universal-property-of-a-polynomial-ring, thm-finite-galois-extension-characterizations, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: contrapositive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 8.24"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 5.19 and the normal basis theorem"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite Galois extension of degree $n$ whose base field $F$ is
infinite, and list $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$. Then
for every nonzero $f\in K[x_1,\dots,x_n]$
([[def-multivariate-polynomial-ring-by-iteration]]) there exists $\alpha\in K$
with

$$f\bigl(\sigma_1\alpha,\dots,\sigma_n\alpha\bigr)\ne0 .$$

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$ of degree $n$ with $F$ infinite and $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$; by [L4] the $F$-vector space $K$ has dimension $n$, so an ordered $F$-basis $(\alpha_1,\dots,\alpha_n)$ of $K$ exists ([[def-linear-basis]]).

[L1] Let $S$ be an integral domain and $R\subseteq S$ an infinite subring. If $g\in S[x_1,\dots,x_m]$ satisfies $g(a_1,\dots,a_m)=0$ for all $a_1,\dots,a_m\in R$, then $g=0$ ([[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]).

[L2] For a finite Galois extension $K/F$ of degree $n$ with $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$ and $\alpha_1,\dots,\alpha_n\in K$, the list $(\alpha_1,\dots,\alpha_n)$ is an ordered $F$-basis of $K$ if and only if the matrix $A$ with $A_{ij}=\sigma_i(\alpha_j)$ is invertible ([[lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible]]).

[L3] For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$ and $s\in S$, there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ on constants and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]). Iterating this along [[def-multivariate-polynomial-ring-by-iteration]] gives, for any commutative $K$-algebra $T$ and any $t_1,\dots,t_n\in T$, a unique $K$-algebra homomorphism $K[x_1,\dots,x_n]\to T$ sending $x_i$ to $t_i$.

[L4] For a finite Galois extension $K/F$ with $G=\operatorname{Gal}(K/F)$ one has $|G|=[K:F]$ ([[thm-finite-galois-extension-characterizations]], [[def-finite-galois-extension-and-galois-group]], [[def-extension-degree-and-finite-extension]]).

[L5] $A\in M_n(K)$ is invertible when some $B\in M_n(K)$ satisfies $AB=I_n=BA$; such a $B$ is unique and written $A^{-1}$ ([[def-invertible-matrix-and-general-linear-group]], [[def-ring-matrix-product-identity-and-transpose]]).

## Proof

**Proof technique:** contrapositive.

1.1 It suffices to prove the contrapositive: if $f\in K[x_1,\dots,x_n]$ satisfies $f(\sigma_1\alpha,\dots,\sigma_n\alpha)=0$ for every $\alpha\in K$, then $f=0$. Assume that hypothesis on $f$. [contrapositive-reduce, assume-hyp]

1.2 Fix an ordered $F$-basis $(\alpha_1,\dots,\alpha_n)$ of $K$ and put $A_{ij}=\sigma_i(\alpha_j)$; by [L2] the matrix $A$ is invertible, with inverse $A^{-1}$ as in [L5]. [L2, L4, L5, given]

2.1 For $c\in F^{n}$ write $\alpha(c):=\sum_j c_j\alpha_j$; then $c\mapsto\alpha(c)$ is a bijection $F^{n}\to K$ because the $\alpha_j$ form a basis, and $\sigma_i(\alpha(c))=\sum_j c_j\sigma_i(\alpha_j)=(Ac)_i$ since each $\sigma_i$ fixes $F$ pointwise and is additive. [step 1.2, given]

2.2 Let $\psi\colon K[x_1,\dots,x_n]\to K[x_1,\dots,x_n]$ be the unique $K$-algebra homomorphism with $\psi(x_i)=\sum_j A_{ij}x_j$, and $\psi'$ the unique one with $\psi'(x_i)=\sum_j (A^{-1})_{ij}x_j$; both exist by [L3]. [step 1.2, L3]

3.1 For $c\in F^{n}$, the evaluation homomorphism $K[x_1,\dots,x_n]\to K$ at $c$ composed with $\psi$ sends $x_i$ to $\sum_j A_{ij}c_j=(Ac)_i$, so by the uniqueness clause of [L3] it is evaluation at $Ac$; hence $\psi(f)$ evaluated at $c$ equals $f(Ac)=f(\sigma_1\alpha(c),\dots,\sigma_n\alpha(c))$, which is $0$ by the hypothesis of step 1.1. [step 1.1, step 2.1, step 2.2, L3]

4.1 So $\psi(f)$ vanishes at every tuple from the infinite subring $F$ of the integral domain $K$, and [L1] gives $\psi(f)=0$. [step 3.1, L1, given]

5.1 The composite $\psi'\circ\psi$ is a $K$-algebra endomorphism sending $x_i$ to $\sum_j A_{ij}\sum_k (A^{-1})_{jk}x_k=\sum_k (AA^{-1})_{ik}x_k=x_i$, so it is the identity by the uniqueness clause of [L3]; applying $\psi'$ to step 4.1 therefore gives $f=\psi'(\psi(f))=\psi'(0)=0$, which is the contrapositive. [step 2.2, step 4.1, L3, L5, discharge-contrapositive] ∎

## Remarks

- **Where infiniteness of $F$ enters.** Only in step 4.1, through [L1]. Over a finite base field the conclusion is false: with $|F|=q$ and $n=[K:F]$, the nonzero polynomial $x_1^{q^{n}}-x_1$ vanishes at every conjugate tuple, since every element of $K$ satisfies $x^{q^{n}}=x$. The finite case of the normal basis theorem is therefore proved by a different argument ([[thm-normal-basis-theorem-for-a-cyclic-extension]]).
