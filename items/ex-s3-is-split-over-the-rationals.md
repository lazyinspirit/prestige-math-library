---
id: ex-s3-is-split-over-the-rationals
kind: example
title: "$S_3$ is split over the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-finite-symmetric-group-and-permutation-notation, def-sign-representation-and-restriction-of-a-representation, def-trivial-regular-and-permutation-representations, thm-simple-modules-over-semisimple-rings, def-splitting-field-for-a-finite-group]
proof_strategy: computation
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.3"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

The three irreducible complex representations of $S_3$ are already defined over
$\mathbb Q$: the trivial representation, the sign representation, and the
two-dimensional standard representation on
$$W=\{(x_1,x_2,x_3)\in\mathbb Q^3:x_1+x_2+x_3=0\}$$
by permutation of coordinates.  Hence $\mathbb Q$ is a splitting field for
$S_3$.

## Facts & Assumptions

**Given:** The natural coordinate-permutation action of $S_3$ on $\mathbb Q^3$.

[L1] The simple modules of $F\oplus F\oplus M_2(F)$, for any field $F$, are the two one-dimensional factor modules and the two-dimensional column module ([[thm-simple-modules-over-semisimple-rings]]).

[L2] The trivial and sign representations are defined over every field of characteristic zero ([[def-trivial-regular-and-permutation-representations]], [[def-sign-representation-and-restriction-of-a-representation]]).

## Verification

**Proof technique:** computation.

1.1 The line $\mathbb Q(1,1,1)$ is trivial and its invariant complement $W$ has dimension two. With $u=(1,-1,0)$ and $v=(0,1,-1)$ as a basis of $W$, the transposition $s=(12)$ and cycle $r=(123)$ act by $S=\begin{pmatrix}-1&1\\0&1\end{pmatrix}$ and $R=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$. In particular $R$ has no eigenvalue $1$ over $\mathbb C$. [given, L2, algebra]

2.1 Every one-dimensional complex representation of $S_3$ is trivial or sign: conjugate transpositions have one common image $\varepsilon$ with $\varepsilon^2=1$, and every $3$-cycle is a product of two transpositions, so acts as $1$. A proper invariant line in $W_{\mathbb C}$ would therefore be fixed by $r$, contrary to step 1.1. Thus $W_{\mathbb C}$ and $W$ are irreducible. [step 1.1, algebra]

3.1 The two central averages $e_+=\frac16\sum_{g\in S_3}g$ and $e_-=\frac16\sum_{g\in S_3}\operatorname{sgn}(g)g$ act respectively as $(1,0,0)$ and $(0,1,0)$ under the algebra map $\Phi:\mathbb Q[S_3]\to\mathbb Q\oplus\mathbb Q\oplus\operatorname{End}_{\mathbb Q}(W)$ defined by the three displayed representations; they kill $W$ because $W$ has neither a trivial nor a sign line. The four matrices $I,S,R,SR$ are linearly independent over $\mathbb Q$ (their coordinate determinant is $-3$), so the $W$-projection of $\Phi$ is all $M_2(\mathbb Q)$. The central averages separate the scalar factors, making $\Phi$ surjective; both sides have dimension $6$, hence $\Phi$ is an isomorphism. [step 1.1, step 2.1, L2, algebra]

4.1 Tensoring step 3.1 with $\mathbb C$ gives $\mathbb C[S_3]\cong\mathbb C\oplus\mathbb C\oplus M_2(\mathbb C)$. By [L1] over both fields, the three displayed models are all irreducibles over $\mathbb Q$ and $\mathbb C$. Each simple module of $\mathbb Q\oplus\mathbb Q\oplus M_2(\mathbb Q)$ has endomorphism ring $\mathbb Q$: this is immediate for the scalar factors, while an endomorphism of the column module commuting with every matrix unit is scalar. The splitting-field definition therefore makes $\mathbb Q$ a splitting field for $S_3$. [L1, step 3.1, algebra] ∎
