---
id: thm-character-of-a-permutation-representation-counts-fixed-points
kind: theorem
title: "The character of a permutation representation counts fixed points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-character-of-a-complex-representation, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 4.3.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $X$ be a finite left $G$-set and let $\mathbb C^{(X)}$ be the permutation
representation over $\mathbb C$. Then the character of $\mathbb C^{(X)}$ is

$$\chi_{\mathbb C^{(X)}}(g)=\bigl|\{\,x\in X:g\cdot x=x\,\}\bigr|,$$

the number of fixed points of $g$ acting on $X$.

## Facts & Assumptions

**Given:** A finite group $G$, a finite left $G$-set $X$, and $g\in G$.

[F1] The character is $\chi(g)=\operatorname{tr}\rho(g)$ ([[def-character-of-a-complex-representation]]).

[F2] The permutation representation has basis $(e_x)_{x\in X}$ and action $g\cdot e_x=e_{g\cdot x}$ ([[def-trivial-regular-and-permutation-representations]]).

## Proof

**Proof technique:** direct.

1.1 In the basis $(e_x)_{x\in X}$ of [F2], the matrix of $\rho(g)$ is the permutation matrix with a $1$ in row $g\cdot x$, column $x$: its $x$-th diagonal entry is $1$ exactly when $g\cdot x=x$, and $0$ otherwise. [F2, given]

2.1 The trace of that matrix is the sum of its diagonal entries, counting one for each $x\in X$ with $g\cdot x=x$. By [F1] this is $\chi(g)$, which equals the stated number of fixed points. [F1, step 1.1, algebra] ∎
