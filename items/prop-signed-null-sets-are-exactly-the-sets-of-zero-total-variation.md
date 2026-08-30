---
id: prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation
kind: proposition
title: "A set is null for a signed measure exactly when its total variation is zero there"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-positive-negative-and-null-sets-for-a-signed-measure, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 12.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$ and let $E\in\mathcal A$.
Then $E$ is null for $\nu$ if and only if $|\nu|(E)=0$.

## Facts & Assumptions

**Given:** A signed measure $\nu$ and a measurable set $E$.

[L1] A null set for a signed measure means: every measurable subset of it has
signed measure $0$. ([[def-positive-negative-and-null-sets-for-a-signed-measure]])

[L2] The total variation $|\nu|(E)$ is the supremum of the partition sums
$\sum_n |\nu(E_n)|$ over countable measurable partitions of $E$.
([[def-total-variation-of-a-signed-or-complex-measure]])

## Proof

**Proof technique:** direct.

1.1 Assume $E$ is null. If $(E_n)$ is a countable measurable partition of $E$, [L1, L2]
then every $E_n\subseteq E$ has $\nu(E_n)=0$ by [L1], so its partition sum in
[L2] is $0$. Hence every admissible sum is $0$, and therefore $|\nu|(E)=0$.
1.2 Assume instead that $|\nu|(E)=0$. Let $F\subseteq E$ be measurable. Then [L1, L2]
$F$ and $E\setminus F$ form a measurable partition of $E$, so [L2] gives
$$0=|\nu|(E)\ge |\nu(F)|+|\nu(E\setminus F)|\ge |\nu(F)|.$$
Thus $\nu(F)=0$. Since $F\subseteq E$ was arbitrary, [L1] shows that $E$ is
null.
2.1 Steps 1.1 and 1.2 prove both implications. [step 1.1, step 1.2] ∎
