---
id: lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible
kind: lemma
title: "For a finite Galois extension, $(\\alpha_j)$ is a base-field basis exactly when the matrix $(\\sigma_i\\alpha_j)$ is invertible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dedekind-linear-independence-of-characters, def-finite-galois-extension-and-galois-group, thm-finite-galois-extension-characterizations, def-relative-field-automorphism-group, def-linear-basis, def-matrices-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, def-invertible-matrix-and-general-linear-group, thm-invertible-matrices-correspond-to-linear-isomorphisms, thm-rank-nullity, cor-square-matrix-invertible-iff-determinant-is-a-unit, thm-determinant-of-transpose, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "P. L. Clark, Field Theory (course notes/monograph), Lemma 8.23"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 5.16"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite Galois extension of degree $n$, list its Galois group as
$\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$, and let
$\alpha_1,\dots,\alpha_n\in K$. Let $A\in M_n(K)$ be the matrix with entries

$$A_{ij}=\sigma_i(\alpha_j)\qquad(1\le i,j\le n).$$

Then $(\alpha_1,\dots,\alpha_n)$ is an ordered basis of $K$ as an $F$-vector
space ([[def-linear-basis]]) if and only if $A$ is invertible over $K$
([[def-invertible-matrix-and-general-linear-group]]).

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$ of degree $n$ with $\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\}$; elements $\alpha_1,\dots,\alpha_n\in K$; the matrix $A\in M_n(K)$ with $A_{ij}=\sigma_i(\alpha_j)$ ([[def-matrices-over-a-commutative-ring]]); and the $F$-linear map $\Phi\colon F^{n}\to K$ given by $\Phi(a)=\sum_{j}a_j\alpha_j$. Each $\sigma_i$ is an $F$-automorphism of $K$ ([[def-relative-field-automorphism-group]]), hence additive and $F$-linear.

[L1] For a finite Galois extension $K/F$ with $G=\operatorname{Gal}(K/F)$ one has $|G|=[K:F]$ ([[thm-finite-galois-extension-characterizations]], [[def-finite-galois-extension-and-galois-group]]); so $\dim_FK=n$ ([[def-extension-degree-and-finite-extension]]).

[L2] Let $G$ be a group and $K$ a field. Every finite family of distinct group homomorphisms $G\to K^{\times}$ is linearly independent over $K$ as a family of functions ([[thm-dedekind-linear-independence-of-characters]]).

[L3] For a linear map $T:V\to W$ of $F$-vector spaces with $V$ finite-dimensional, $\dim_FV=\dim_F(\ker T)+\dim_F(\operatorname{im}T)$ ([[thm-rank-nullity]]).

[L4] For $A\in M_n(F)$ and $L_A(x)=Ax$ on $M_{n\times1}(F)$: $A$ is invertible if and only if $L_A$ is a linear isomorphism ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L5] Let $R$ be a commutative ring, $n\ge1$, $A\in M_n(R)$. Then $A$ is invertible if and only if $\det(A)$ is a unit of $R$ ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[L6] $\det(A^{\mathsf T})=\det(A)$ for every $A\in M_n(R)$ over a commutative ring ([[thm-determinant-of-transpose]]); the transpose is $(A^{\mathsf T})_{ji}=A_{ij}$ ([[def-ring-matrix-product-identity-and-transpose]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the $F$-vector space $K$ has dimension $n$, and $\Phi$ is a map between $F$-vector spaces of dimension $n$; so by [L3] it is injective if and only if it is surjective, and $(\alpha_1,\dots,\alpha_n)$ is an ordered basis of $K$ over $F$ exactly when $\Phi$ is bijective. [L1, L3]

1.2 For the implication that a basis has an invertible matrix, suppose $(\alpha_1,\dots,\alpha_n)$ is an ordered basis, and let $c\in K^{n}$ satisfy $A^{\mathsf T}c=0$, that is $\sum_i c_i\sigma_i(\alpha_j)=0$ for every $j$. The map $\theta\colon K\to K$, $\theta(x)=\sum_i c_i\sigma_i(x)$, is $F$-linear because each $\sigma_i$ is, and it vanishes at every $\alpha_j$, hence on their $F$-span, which is $K$. [given]

2.1 For the implication that a non-basis has a singular matrix, suppose $(\alpha_1,\dots,\alpha_n)$ is not an ordered basis. By step 1.1 the map $\Phi$ is not injective, so there is $a\in F^{n}$ with $a\ne0$ and $\sum_j a_j\alpha_j=0$. Applying $\sigma_i$ and using $\sigma_i(a_j)=a_j$ for $a_j\in F$ gives $\sum_j\sigma_i(\alpha_j)a_j=0$ for every $i$, that is $Aa=0$ with $a\ne0$ in $K^{n}$. Were $A$ invertible with inverse $B$, this would force $a=B(Aa)=0$; so $A$ is not invertible. [step 1.1, given]

2.2 So $\sum_i c_i\sigma_i$ is the zero function on $K$, in particular on $K^{\times}$. The restrictions $\sigma_i|_{K^{\times}}\colon K^{\times}\to K^{\times}$ are group homomorphisms and are pairwise distinct, since two automorphisms of $K$ agreeing on $K^{\times}$ agree on $K$; so [L2] forces $c_i=0$ for every $i$. [step 1.2, L2]

3.1 Hence the $K$-linear map $x\mapsto A^{\mathsf T}x$ on $K^{n}$ has zero kernel, so by [L3] over $K$ it is also surjective and therefore a linear isomorphism; by [L4] the matrix $A^{\mathsf T}$ is invertible, so $\det(A^{\mathsf T})$ is a unit of $K$ by [L5], and $\det(A)=\det(A^{\mathsf T})$ by [L6] is a unit, whence $A$ is invertible by [L5]. [step 2.2, L3, L4, L5, L6]

4.1 Step 2.1 gives one implication, that a list which is not a basis has a matrix that is not invertible, and step 3.1 gives the other, that a list which is a basis has an invertible matrix; together they are the stated equivalence. [step 2.1, step 3.1] ∎

## Remarks

- **Why the transpose appears.** The dependence relation among the $\alpha_j$ produces a null vector on the right of $A$, while the Dedekind relation among the $\sigma_i$ produces one on the right of $A^{\mathsf T}$. Only the determinant sees both, which is why the two halves are joined through [[thm-determinant-of-transpose]] rather than by a single rank computation.

- **Where the Galois hypothesis is used.** Twice: to know that the group has exactly $n=[K:F]$ elements, so that $A$ is square, and to know that the $\sigma_i$ are $F$-linear, which is what lets step 2.1 pull the scalars $a_j$ through.
