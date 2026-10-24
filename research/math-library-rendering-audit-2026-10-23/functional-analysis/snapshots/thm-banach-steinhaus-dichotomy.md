---
id: thm-banach-steinhaus-dichotomy
kind: theorem
title: "Baire dichotomy for a pointwise-defined family of bounded linear operators"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-operator-norm, thm-baire-category-for-complete-metric-spaces, thm-uniform-boundedness-principle]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Teschl, Topics in Real and Functional Analysis, Theorem 4.3"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume DC. Let $X$ be Banach, $Y$ normed, and $\mathcal F\subseteq\mathcal B(X,Y)$ ([[def-bounded-linear-operator]]). Either $\sup_{T\in\mathcal F}\|T\|<\infty$ ([[def-operator-norm]]), or

$$S:=\{x\in X:\sup_{T\in\mathcal F}\|Tx\|=\infty\}$$

is a dense $G_\delta$ subset of $X$.

## Facts & Assumptions

**Given:** DC and $X,Y,\mathcal F$ as in the statement.

## Proof

**Proof technique:** direct.

1.1 Let $E_n=\{x:\sup_T\|Tx\|\le n\}$. These sets are closed, and $X\setminus S=\bigcup_nE_n$. [given]

2.1 If some $E_n$ has nonempty interior, the translation-and-rescaling argument of [[thm-uniform-boundedness-principle]] gives a common operator-norm bound. [step 1.1]

2.2 Otherwise every $E_n$ is closed with empty interior. Its complement is open dense, so $S=\bigcap_n(X\setminus E_n)$ is $G_\delta$ and dense by [[thm-baire-category-for-complete-metric-spaces]]. [step 1.1]

3.1 The two alternatives exhaust the cases from step 2.1, proving the dichotomy. [step 2.1, step 2.2] ∎
