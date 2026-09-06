---
id: thm-rmk-open-sets-are-caratheodory-measurable
kind: theorem
title: "Open sets are Caratheodory measurable for the RMK outer measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-functional-outer-content-is-an-outer-measure, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-caratheodory-outer-measure-theorem]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Every open subset of $X$ is Caratheodory measurable for the RMK outer measure $\mu^*$. Consequently the Caratheodory measurable sets form a complete sigma-algebra containing the Borel sigma-algebra, and the restriction $\mu=\mu^*|_{\mathcal B(X)}$ is a Borel measure.

## Facts & Assumptions

**Given:** The RMK outer measure $\mu^*$.

[L1] The Caratheodory theorem turns the measurable sets of an outer measure into a complete measure space. ([[thm-caratheodory-outer-measure-theorem]])

## Proof

**Proof technique:** direct.

1.1 Fix open $G,V$ and $f\prec V\cap G$. Put [given]
$K=\operatorname{supp}f$. For any $g\prec V\setminus K$, the supports of
$f$ and $g$ are disjoint, so $f+g\prec V$. Hence
$\rho(V)\ge\Lambda(f)+\rho(V\setminus K)$. Since
$V\setminus G\subseteq V\setminus K$,
$\rho(V\setminus K)\ge\mu^*(V\setminus G)$. Taking the supremum over
$f\prec V\cap G$ therefore gives
$$\rho(V)\ge\rho(V\cap G)+\mu^*(V\setminus G)=\mu^*(V\cap G)+\mu^*(V\setminus G).$$ [given]

2.1 For arbitrary $E$ and open $V\supseteq E$, monotonicity and step 1.1 [step 1.1]
give
$$\rho(V)\ge\mu^*(E\cap G)+\mu^*(E\setminus G).$$
Infimizing over $V$ gives the hard Caratheodory inequality; outer
subadditivity gives the reverse inequality. [step 1.1]

3.1 Therefore every open $G$ is Caratheodory measurable. By [L1], the measurable sets form a complete sigma-algebra; since they contain all opens, they contain $\mathcal B(X)$, and the restriction is a Borel measure. [step 2.1, L1] ∎
