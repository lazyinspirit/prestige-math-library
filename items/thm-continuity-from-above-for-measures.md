---
id: thm-continuity-from-above-for-measures
kind: theorem
title: "Continuity from above when one set has finite measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-from-below-for-measures, prop-measure-of-a-set-difference, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.60"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then

$$\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$$

## Facts & Assumptions

**Given:** Measurable sets $E_0\supseteq E_1\supseteq\cdots$, an index $n_0$ with $\mu(E_{n_0})<+\infty$, and $E=\bigcap_nE_n$.

[L1] For increasing measurable $A_n$, $\mu(\bigcup_nA_n)=\sup_n\mu(A_n)$ ([[thm-continuity-from-below-for-measures]]).

[L2] If $A\subseteq B$ and $\mu(A)<+\infty$, then $\mu(B)=\mu(A)+\mu(B\setminus A)$, with real subtraction valid when $\mu(B)<+\infty$ ([[prop-measure-of-a-set-difference]]).

[L3] Every subset of $\overline{\mathbb R}$ has an infimum there ([[lem-extended-reals-complete]]).

## Proof

**Proof technique:** direct.

1.1 For $k\in\mathbb N$ put $H_k:=E_{n_0}\setminus E_{n_0+k}$. Then $(H_k)$ increases and $\bigcup_kH_k=E_{n_0}\setminus E$. [given]

1.2 Every $E_{n_0+k}$ and $E$ has finite measure by inclusion in $E_{n_0}$, and [L2] gives $\mu(H_k)=\mu(E_{n_0})-\mu(E_{n_0+k})$ and $\mu(E_{n_0}\setminus E)=\mu(E_{n_0})-\mu(E)$. [given, L2]

2.1 Apply continuity from below to $(H_k)$ and substitute step 1.2: taking the supremum of the left differences is the same as subtracting the infimum of the decreasing finite values, so cancellation of the finite number $\mu(E_{n_0})$ yields $\mu(E)=\inf_k\mu(E_{n_0+k})$. [step 1.1, step 1.2, L1, L3, algebra]

3.1 A decreasing sequence has the same infimum as any of its tails, so step 2.1 gives $\mu(E)=\inf_n\mu(E_n)$; this includes $E=\varnothing$, $\mu(E)=0$, and a sequence that is constant from $n_0$ onward. [step 2.1, L3] ∎

