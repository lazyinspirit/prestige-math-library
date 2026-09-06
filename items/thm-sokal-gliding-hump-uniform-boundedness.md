---
id: thm-sokal-gliding-hump-uniform-boundedness
kind: theorem
title: "Sokal's gliding-hump proof of uniform boundedness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-sokal-local-operator-norm-lower-bound, def-banach-space, def-operator-norm, def-countable-choice, def-dependent-choice]
proof_strategy: constructive
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Sokal, A Really Simple Elementary Proof of the Uniform Boundedness Theorem, pp. 1--3", url: "https://staff.fnwi.uva.nl/r.p.stevenson/1005.1585.pdf"}]}
---

## Statement

Assume $\mathrm{AC}_\omega$ and DC. If $X$ is Banach, $Y$ is normed, and a family $\mathcal F$ of bounded linear maps $X\to Y$ is pointwise bounded, then $\sup_{T\in\mathcal F}\|T\|<\infty$.

## Facts & Assumptions

**Given:** The stated choice principles, $X,Y,\mathcal F$, and pointwise boundedness.

## Proof

**Proof technique:** constructive.

1.1 Suppose the norms are unbounded. Countable choice selects $T_n\in\mathcal F$ with $\|T_n\|\ge4^n$ for $n\ge1$. Set $x_0=0$. [given, construct]

2.1 Recursively, apply [[lem-sokal-local-operator-norm-lower-bound]] with centre $x_{n-1}$ and radius $3^{-n}$ to choose $x_n$ with $\|x_n-x_{n-1}\|<3^{-n}$ and $\|T_nx_n\|>(2/3)3^{-n}\|T_n\|$. DC licenses these dependent choices. [step 1.1, construct]

3.1 The sequence $(x_n)$ is Cauchy, since its tails are bounded by a tail of $\sum_{n\ge1}3^{-n}$; completeness gives $x_n\to x\in X$. Moreover $\|x-x_n\|\le\sum_{k>n}3^{-k}=3^{-n}/2$. [step 2.1]

4.1 Hence $$\|T_nx\|\ge\|T_nx_n\|-\|T_n\|\,\|x-x_n\|>\tfrac16\,3^{-n}\|T_n\|\ge\tfrac16(4/3)^n,$$ which contradicts pointwise boundedness at $x$. [step 1.1, step 2.1, step 3.1, algebra, discharge-construct] ∎
