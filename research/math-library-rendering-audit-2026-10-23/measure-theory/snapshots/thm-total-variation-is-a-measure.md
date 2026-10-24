---
id: thm-total-variation-is-a-measure
kind: theorem
title: "The total variation of a signed or complex measure is a positive measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure, def-total-variation-of-a-signed-or-complex-measure, lem-finite-choice, thm-total-variation-of-a-complex-measure-is-finite, prop-jordan-parts-and-total-variation-formulas-for-signed-measures]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-total-variation-is-a-measure). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Theorem 9.10"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure or a complex measure on $(X,\mathcal A)$. Then
$|\nu|$ is a measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A signed measure or complex measure $\nu$ on $(X,\mathcal A)$.

[L1] The total variation $|\nu|(E)$ is defined by a supremum of nonnegative partition sums over countable measurable partitions of $E$. ([[def-total-variation-of-a-signed-or-complex-measure]])

[L2] A measure is a nonnegative set function with value $0$ at $\varnothing$ and countable additivity on pairwise disjoint measurable families. ([[def-measure]])

[L3] A finite family of nonempty sets has a choice function ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 The set function $|\nu|$ is nonnegative by [L1]. Also $|\nu|(\varnothing)=0$, because every member of any countable measurable partition of $\varnothing$ is empty and its partition sum is $0$. [L1, L2]

1.2 Let $(E_m)$ be pairwise disjoint measurable sets and put $E=\bigcup_m E_m$. Fix $N$ and suppose $|\nu|(E_m)<+\infty$ for $m\le N$. For any $\varepsilon>0$, the definition of each supremum gives a countable partition of $E_m$ whose sum exceeds $|\nu|(E_m)-\varepsilon/(N+1)$. Choose these finitely many partitions using [L3], enumerate all their cells in one countable partition, and append $E\setminus\bigcup_{m\le N}E_m$ as one more cell. This is a countable measurable partition of $E$, so [L1] gives $|\nu|(E)\ge\sum_{m\le N}|\nu|(E_m)-\varepsilon$. Let $\varepsilon\downarrow0$. If some $|\nu|(E_m)=+\infty$, for each finite threshold choose one partition of that $E_m$ with sum above the threshold and append $E\setminus E_m$; then $|\nu|(E)=+\infty$. Hence in all cases $|\nu|(E)\ge\sum_{m\le N}|\nu|(E_m)$ for every $N$, and taking the supremum of finite partial sums gives $|\nu|(E)\ge\sum_m|\nu|(E_m)$. No partitions were chosen across infinitely many $m$. [L1, L3, construct]

1.3 Conversely, let $(B_j)$ be a countable measurable partition of $E$. For each $j$, countable additivity of $\nu$ on $B_j=\bigsqcup_m(B_j\cap E_m)$ and the triangle inequality for finite partial sums and their limits give $|\nu(B_j)|\le\sum_m|\nu(B_j\cap E_m)|$. For each $m$, the cells $(B_j\cap E_m)_j$ partition $E_m$, so $\sum_j|\nu(B_j\cap E_m)|\le|\nu|(E_m)$ by [L1]. Summing the first inequality over $j$ and interchanging two nonnegative series yields $\sum_j|\nu(B_j)|\le\sum_m|\nu|(E_m)$. Taking the supremum over all partitions $(B_j)$ gives $|\nu|(E)\le\sum_m|\nu|(E_m)$. [L1, algebra]

2.1 Steps 1.2 and 1.3 prove countable additivity. Together with step 1.1 and [L2], this shows that $|\nu|$ is a measure. [L2, step 1.1, step 1.2, step 1.3] ∎
