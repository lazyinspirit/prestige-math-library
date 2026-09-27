---
id: thm-simple-indefinite-integral-is-a-measure
kind: theorem
title: "The indefinite integral of a nonnegative simple function is a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, prop-basic-properties-of-the-nonnegative-simple-integral, lem-well-definedness-of-the-simple-integral, def-measure]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-simple-indefinite-integral-is-a-measure). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, ch. 7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, §4.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $s$ be a nonnegative simple measurable function on $(X,\mathcal A,\mu)$ and
define
$$\nu_s(A):=\int_A s\,d\mu \qquad (A\in\mathcal A).$$
Then $\nu_s$ is a measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A nonnegative simple measurable function $s$ on $(X,\mathcal A,\mu)$.

[L1] For measurable $A$, the set function $A\mapsto\int_A s\,d\mu$ is defined as $A\mapsto\int s\chi_A\,d\mu$ ([[def-integral-over-a-measurable-set]]).

[L2] The simple integral is additive and homogeneous on nonnegative simple functions ([[prop-basic-properties-of-the-nonnegative-simple-integral]]).

[L4] The integral is independent of the chosen finite measurable representation, so a disjoint partition including the zero-valued complement may be used ([[lem-well-definedness-of-the-simple-integral]]).

[L3] A measure is a set function with value $0$ at the empty set and countable additivity on pairwise disjoint measurable families ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], choose a finite measurable partition $X=\bigsqcup_{j=0}^m E_j$ on which $s=c_j\ge0$, including its zero-valued complement. For every measurable $A$, the sets $A\cap E_j$ partition $A$, so [L1] and [L2] give $\nu_s(A)=\sum_{j=0}^m c_j\mu(A\cap E_j)$. A term with $c_j=0$ is defined to be zero even when $\mu(A\cap E_j)=+\infty$. [L1, L2, L4, given, algebra]


2.1 Step 1.1 gives $\nu_s(\varnothing)=0$. If $(A_n)$ is pairwise disjoint, then for each fixed $j$, the sets $(A_n\cap E_j)$ are pairwise disjoint. Countable additivity of $\mu$ and interchange of one finite sum with a nonnegative series give $\nu_s(\bigcup_n A_n)=\sum_{j=0}^m c_j\sum_n\mu(A_n\cap E_j)=\sum_n\sum_{j=0}^m c_j\mu(A_n\cap E_j)=\sum_n\nu_s(A_n)$. Zero-coefficient terms remain zero by the simple-integral convention. [step 1.1, L2, L3, algebra]


3.1 Therefore $\nu_s$ satisfies the two conditions in [L3], so it is a measure. [step 2.1, L3] ∎
