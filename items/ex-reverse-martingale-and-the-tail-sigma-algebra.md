---
id: ex-reverse-martingale-and-the-tail-sigma-algebra
kind: example
title: A reverse martingale and the tail sigma-algebra
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [thm-levy-downward-convergence-of-conditional-expectations, thm-tower-property-of-conditional-expectation, def-tail-sigma-algebra-of-a-sequence, cor-kolmogorov-zero-one-law-from-reverse-martingales, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Example 2.28 and Exercise 2.31, pp. 17–18", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $Z_0,Z_1,\ldots$ be integrable random variables, $\mathcal G_n=\sigma(Z_n,Z_{n+1},\ldots)$, and $X\in L^1$. The process $Y_n=\mathbb E[X\mid\mathcal G_n]$ is a reverse martingale with respect to the decreasing filtration $(\mathcal G_n)$. Moreover,
$$\mathbb E[X\mid\mathcal G_n]\longrightarrow\mathbb E[X\mid\mathcal T]$$
almost surely and in $L^1$, where $\mathcal T=\bigcap_n\mathcal G_n$ is the tail $\sigma$-algebra.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-tail-sigma-algebra-of-a-sequence]] identifies the intersection as $\mathcal T$.

[F2] [[thm-levy-downward-convergence-of-conditional-expectations]] gives the asserted convergence.

[F3] [[cor-kolmogorov-zero-one-law-from-reverse-martingales]] treats the independent case.

[F4] [[def-axiom-of-choice]] is inherited from conditional expectation.

[F5] [[thm-tower-property-of-conditional-expectation]] gives $\mathbb E[\mathbb E[X\mid\mathcal G_n]\mid\mathcal G_{n+1}]=\mathbb E[X\mid\mathcal G_{n+1}]$ almost surely.

## Proof

1.1 Deleting the first generator gives $\mathcal G_{n+1}\subseteq\mathcal G_n$, and F1 gives $\bigcap_n\mathcal G_n=\mathcal T$. Each $Y_n$ is integrable and $\mathcal G_n$-measurable by the conditional-expectation interface in F5. The tower identity in F5 gives $\mathbb E[Y_n\mid\mathcal G_{n+1}]=Y_{n+1}$ almost surely, which is the reverse-martingale identity. F2 now applies directly to $X$, proving both modes of convergence. [F1, F2, F5]

2.1 If the $Z_n$ are independent and $A\in\mathcal T$, take $X=1_A$. F3 gives $\mathbb P(A)\in\{0,1\}$, so $1_A$ and therefore $\mathbb E[1_A\mid\mathcal T]$ is almost surely constant. This extra conclusion is asserted only under independence. AC has exactly the inherited role in F4. [F3, F4] ∎
