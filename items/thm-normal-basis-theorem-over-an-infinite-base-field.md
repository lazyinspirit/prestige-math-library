---
id: thm-normal-basis-theorem-over-an-infinite-base-field
kind: theorem
title: "Every finite Galois extension of an infinite field has a normal basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-normal-basis, lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field, lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible, def-determinant-of-a-square-matrix, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-invertible-matrix-and-general-linear-group, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws, def-finite-galois-extension-and-galois-group, def-multivariate-polynomial-ring-by-iteration, thm-universal-property-of-a-polynomial-ring, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 8.25"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Linear Independence of Characters (expository blurb), Theorem 3.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite Galois extension whose base field $F$ is infinite. Then
$K/F$ has a normal basis ([[def-normal-basis]]): there is $\alpha\in K$ such
that $(\sigma_1\alpha,\dots,\sigma_n\alpha)$ is an ordered $F$-basis of $K$,
where $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$.

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$ ([[def-finite-galois-extension-and-galois-group]]) of degree $n$ with $F$ infinite, and $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$ numbered so that $\sigma_1=\mathrm{id}_K$; the matrix $B$ over $K[x_1,\dots,x_n]$ with $B_{ij}:=x_k$ where $k$ is the index determined by $\sigma_i\sigma_j=\sigma_k$; and $D:=\det B$ ([[def-determinant-of-a-square-matrix]]).

[L1] For every nonzero $f\in K[x_1,\dots,x_n]$ there is $\alpha\in K$ with $f(\sigma_1\alpha,\dots,\sigma_n\alpha)\ne0$ ([[lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field]]).

[L2] $(\alpha_1,\dots,\alpha_n)$ is an ordered $F$-basis of $K$ if and only if the matrix $A$ with $A_{ij}=\sigma_i(\alpha_j)$ is invertible ([[lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible]]).

[L3] $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_i a_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]); a matrix over a commutative ring is invertible if and only if its determinant is a unit ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[L4] A matrix $A$ is invertible when some $B$ satisfies $AB=I_n=BA$ ([[def-invertible-matrix-and-general-linear-group]]); matrix products, the identity and the transpose are as in [[def-ring-matrix-product-identity-and-transpose]], and obey the arithmetic laws of [[thm-ring-matrix-arithmetic-laws]].

[L5] $K[x_1,\dots,x_n]$ is an integral domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]], [[def-multivariate-polynomial-ring-by-iteration]]), and for any commutative $K$-algebra $T$ and $t_1,\dots,t_n\in T$ there is a unique $K$-algebra homomorphism $K[x_1,\dots,x_n]\to T$ with $x_i\mapsto t_i$ ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 $B$ is a well-defined $n\times n$ matrix over $K[x_1,\dots,x_n]$: for each pair $(i,j)$ the product $\sigma_i\sigma_j$ lies in the group $\operatorname{Gal}(K/F)$ and so equals $\sigma_k$ for exactly one index $k$. [given]

2.1 Let $\varepsilon\colon K[x_1,\dots,x_n]\to K$ be the $K$-algebra homomorphism with $\varepsilon(x_1)=1$ and $\varepsilon(x_k)=0$ for $k\ne1$, supplied by [L5]. Applying $\varepsilon$ entrywise to $B$ gives the matrix $P\in M_n(K)$ with $P_{ij}=1$ when $\sigma_i\sigma_j=\sigma_1=\mathrm{id}$, that is when $\sigma_j=\sigma_i^{-1}$, and $P_{ij}=0$ otherwise. [step 1.1, L5, given]

3.1 $P$ is invertible, with $P^{\mathsf T}$ as an inverse: the $(i,i')$ entry of $PP^{\mathsf T}$ is $\sum_j P_{ij}P_{i'j}$, and a term is nonzero exactly when $\sigma_j=\sigma_i^{-1}$ and $\sigma_j=\sigma_{i'}^{-1}$, which happens for exactly one $j$ when $i=i'$ and for no $j$ otherwise; so $PP^{\mathsf T}=I_n$, and the same computation on $P^{\mathsf T}P$ gives $I_n$. Hence $\det P$ is a unit of $K$ by [L3], and in particular $\det P\ne0$. [step 2.1, L3, L4]

4.1 Since $\det$ is a polynomial expression in the entries by [L3] and $\varepsilon$ is a ring homomorphism, $\varepsilon(D)=\varepsilon(\det B)=\det P\ne0$; hence $D\ne0$ in $K[x_1,\dots,x_n]$. [step 2.1, step 3.1, L3, L5]

5.1 By [L1] there is $\alpha\in K$ with $D(\sigma_1\alpha,\dots,\sigma_n\alpha)\ne0$. Substituting $x_k\mapsto\sigma_k(\alpha)$ in $B$ replaces the entry $B_{ij}=x_k$, where $\sigma_i\sigma_j=\sigma_k$, by $\sigma_k(\alpha)=\sigma_i(\sigma_j(\alpha))$; since substitution is a ring homomorphism, it carries $D=\det B$ to the determinant of the matrix $A$ with $A_{ij}=\sigma_i(\alpha_j)$ for $\alpha_j:=\sigma_j(\alpha)$. So $\det A\ne0$. [step 4.1, L1, L3, L5]

6.1 A nonzero element of the field $K$ is a unit, so $A$ is invertible by [L3], and [L2] makes $(\alpha_1,\dots,\alpha_n)=(\sigma_1\alpha,\dots,\sigma_n\alpha)$ an ordered $F$-basis of $K$; that is a normal basis. [step 5.1, L2, L3] ∎

## Remarks

- **What the specialisation is for.** The matrix of indeterminates is a device for showing that one determinant polynomial is not the zero polynomial, and the cheapest way to see that is to send it to a permutation matrix. Nothing about the particular substitution $x_1\mapsto1$ survives into the conclusion: the element $\alpha$ produced in step 5.1 has no relation to it.

- **Why $\sigma_1$ is the identity.** Only so that the specialised matrix is the permutation matrix of $\sigma\mapsto\sigma^{-1}$; any other choice of which indeterminate to set to $1$ would give the permutation matrix of a different bijection, with the same conclusion.
