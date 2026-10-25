---
id: cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial
kind: corollary
title: "Dimensions of finitely generated FI-modules are eventually polynomial"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-finitely-generated-fi-modules-have-eventual-character-polynomials,
       def-character-polynomial-in-cycle-counts,
       def-trace-of-a-square-matrix,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-weight-of-a-characteristic-zero-fi-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Theorem 1.5 with its proof from Theorem 3.3.4, printed pp. 3–4 and 23–24: the dimensions of a finitely generated FI-module over a field of characteristic $0$ are eventually polynomial of degree at most $\\operatorname{weight}(V)$"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Theorem B, printed p. 1 (the dimension relationship in the Noetherian-rings context)"
---

## Statement

Let $k$ be a field of characteristic $0$ and let $V$ be a finitely generated
FI-module over $k$ with finite-dimensional values, weight
$d=\operatorname{weight}(V)$ and stability degree
$s=\operatorname{stab-deg}(V)$, with character polynomial $P_V$ as in
[[thm-finitely-generated-fi-modules-have-eventual-character-polynomials]]
([[def-weight-of-a-characteristic-zero-fi-module]],
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]). Then

$$\dim_kV_n=P_V(n,0,0,\dots)$$

for every $n\ge s+d$, the rational value on the right being read in $k$
through the prime field $\mathbb Q\subseteq k$; in particular $\dim_kV_n$ is
given by a polynomial in $n$ of degree at most $d$ for all sufficiently large
$n$ ([[def-character-polynomial-in-cycle-counts]]). No choice principle is
used.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and a finitely generated FI-module $V$ over $k$ with finite-dimensional values, weight $d<\infty$, stability degree $s<\infty$ and character polynomial $P_V\in\mathbb Q[X_1,X_2,\dots]$ of weighted degree $\le d$ satisfying $\chi_{V_n}(\sigma)=P_V(X_1(\sigma),X_2(\sigma),\dots)$ for all $n\ge s+d$ and all $\sigma\in S_n$ ([[thm-finitely-generated-fi-modules-have-eventual-character-polynomials]]).

[F1] For a finite-dimensional $kS_n$-module the character value at the identity is the dimension: $\chi_{V_n}(\mathrm{id}_n)=\operatorname{tr}(\mathrm{id}_n;V_n)=\dim_kV_n$ ([[def-trace-of-a-square-matrix]]).

[F2] The identity permutation of $S_n$ has $X_1(\mathrm{id}_n)=n$ fixed points and $X_i(\mathrm{id}_n)=0$ for every $i\ge2$ ([[def-character-polynomial-in-cycle-counts]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] Evaluating a character polynomial $P\in\mathbb Q[X_1,X_2,\dots]$ of weighted degree $\le d$ at $(n,0,0,\dots)$ gives a polynomial in $n$ over $\mathbb Q$ of degree at most $d$: substitution is a ring homomorphism, and the surviving monomials are $X_1^{a_1}$ with $a_1\le d$ ([[def-character-polynomial-in-cycle-counts]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge s+d$. By the character identity of [[thm-finitely-generated-fi-modules-have-eventual-character-polynomials]] applied to $\sigma=\mathrm{id}_n$, and by [F1] and [F2], $\dim_kV_n=\chi_{V_n}(\mathrm{id}_n)=P_V(X_1(\mathrm{id}_n),X_2(\mathrm{id}_n),\dots)=P_V(n,0,0,\dots)$. [F1, F2, given]

2.1 By [F3] the function $n\mapsto P_V(n,0,0,\dots)$ is a polynomial over $\mathbb Q$ of degree at most $d$; hence step 1.1 exhibits a polynomial of degree at most $d$ agreeing with $\dim_kV_n$ for every $n\ge s+d$. This proves the claim. [F3, step 1.1] ∎
