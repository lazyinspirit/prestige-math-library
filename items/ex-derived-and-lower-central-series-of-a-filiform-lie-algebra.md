---
id: ex-derived-and-lower-central-series-of-a-filiform-lie-algebra
kind: example
title: Series of a standard filiform Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra, def-nilpotency-class-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, solvable and nilpotent series"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "Definitions 5.22, 5.25, and 5.27, printed pp. 76–77"
---

## Example

Let $n\geq3$. On the vector space with basis $e_1,\ldots,e_n$, prescribe

$$[e_1,e_i]=e_{i+1}\quad(2\leq i<n)$$

and let every other bracket of basis vectors be zero, apart from the values
forced by skew-symmetry. This defines a Lie algebra $\mathfrak f_n$. Its lower
central series is

$$\gamma_r(\mathfrak f_n)=\operatorname{span}(e_{r+1},\ldots,e_n)\quad(2\leq r\leq n-1),$$

so $\mathfrak f_n$ has nilpotency class $n-1$. Its derived length is two.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq3$, and the displayed alternating
bilinear bracket on the $k$-space with basis $e_1,\ldots,e_n$.

[L1] The derived series and solvability convention are those of
[[def-derived-series-and-solvable-lie-algebra]].

[L2] The lower central series is defined recursively by
$\gamma_{r+1}=[\mathfrak f_n,\gamma_r]$
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L3] Nilpotency class is the least $c$ for which $\gamma_{c+1}=0$
([[def-nilpotency-class-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Put $U=\operatorname{span}(e_2,\ldots,e_n)$. Then $[U,U]=0$ and $[e_1,U]\subseteq U$. For a Jacobi triple entirely in $U$ every term is zero. For a triple containing exactly one copy of $e_1$, each possibly nonzero inner bracket lies in $U$ and is then bracketed with an element of $U$, so every term is zero. If a triple contains at least two copies of $e_1$, the two possibly nonzero terms cancel by bilinearity and the alternating law. Thus Jacobi holds, including in characteristic two, and the displayed rule defines a Lie algebra. [given, algebra]

2.1 Every nonzero basis bracket is one of $e_3,\ldots,e_n$, and all of these occur. Hence $\mathfrak f_n^{(1)}=\operatorname{span}(e_3,\ldots,e_n)$. This subspace lies in the abelian space $U$, so $\mathfrak f_n^{(2)}=0$. Since $e_3\neq0$ for $n\geq3$, the least vanishing derived index is two by [L1]. [L1, step 1.1, algebra]

2.2 The first bracket span gives $\gamma_2=\operatorname{span}(e_3,\ldots,e_n)$. If $2\leq r\leq n-2$ and $\gamma_r=\operatorname{span}(e_{r+1},\ldots,e_n)$, then only bracketing with $e_1$ contributes, and the displayed rule gives $\gamma_{r+1}=\operatorname{span}(e_{r+2},\ldots,e_n)$. Induction proves the promised formula through $\gamma_{n-1}=ke_n\neq0$; finally $[\mathfrak f_n,ke_n]=0$, so $\gamma_n=0$. By [L2] and [L3], the class is exactly $n-1$. [L2, L3, step 1.1, induction]

3.1 When $n=3$, the calculation reads $\gamma_2=ke_3\neq0$ and $\gamma_3=0$, so the smallest permitted dimension has class two and derived length two. For every $n\geq3$, steps 2.1 and 2.2 establish both exact endpoints using only the displayed finite basis; no choice principle is used. [step 2.1, step 2.2] ∎
