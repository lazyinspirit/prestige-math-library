---
id: thm-premeasure-induced-outer-measure-is-regular
kind: theorem
title: "Assuming countable choice, a premeasure-induced outer measure is regular with generated measurable hulls"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-regular-outer-measure-and-measurable-hull, def-outer-measure-induced-by-a-premeasure, thm-caratheodory-extension-theorem, def-generated-sigma-algebra, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercises 18(a) and 20(b) in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. An outer measure induced by a premeasure is regular, and every set has a measurable hull in $\sigma(\mathcal A_0)$.

## Facts & Assumptions

**Given:** Countable choice, a premeasure $\mu_0$ on $\mathcal A_0$, its induced outer measure $\mu^*$, and a subset $E\subseteq X$.

[F1] A **measurable hull** of $E$ is a Carathéodory measurable set $H\supseteq E$ with $\mu^*(H)=\mu^*(E)$; the outer measure is **regular** when every subset has a measurable hull. ([[def-regular-outer-measure-and-measurable-hull]])

[F2] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

[L1] Assuming countable choice, the induced outer measure restricts to a complete measure on its Carathéodory sigma-algebra and to a measure on $\sigma(\mathcal A_0)$ extending $\mu_0$. ([[thm-caratheodory-extension-theorem]])

## Proof

**Proof technique:** direct.

1.1 If $\mu^*(E)=+\infty$, put $H=X$. Otherwise, for each $n\in\mathbb N$, countable choice and [F2] give an algebra cover $(A_{nk})_k$ of $E$ with cost below $\mu^*(E)+1/(n+1)$; put $U_n=\bigcup_kA_{nk}$ and $H=\bigcap_nU_n$. [F2, given, choose, cases]

2.1 In the finite case each $U_n$ and their intersection $H$ lie in $\sigma(\mathcal A_0)$; in the infinite case $H=X$ lies there. Thus [L1] makes $H$ Carathéodory measurable in either case. [step 1.1, L1, algebra]

3.1 One has $E\subseteq H$. In the finite case, monotonicity and each covering bound give $\mu^*(E)\le\mu^*(H)\le\mu^*(U_n)<\mu^*(E)+1/(n+1)$ for every $n$, hence $\mu^*(H)=\mu^*(E)$; in the infinite case both values are $+\infty$. Therefore [F1] makes $H$ a generated measurable hull, and $\mu^*$ is regular. [step 1.1, step 2.1, F1, algebra] ∎
