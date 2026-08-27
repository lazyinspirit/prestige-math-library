---
id: thm-simple-indefinite-integral-is-a-measure
kind: theorem
title: "The indefinite integral of a nonnegative simple function is a measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, prop-basic-properties-of-the-nonnegative-simple-integral, def-measure]
proof_strategy: direct
verification:
  precheck: pass
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

[L3] A measure is a set function with value $0$ at the empty set and countable additivity on pairwise disjoint measurable families ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 Write $s=\sum_{j=1}^m c_j\chi_{E_j}$. Then for every measurable $A$,[L1, L2, given, algebra]
$$\nu_s(A)=\int_A s\,d\mu=\sum_{j=1}^m c_j\mu(A\cap E_j).$$


2.1 Step 1.1 gives $\nu_s(\varnothing)=0$. If $(A_n)$ is a pairwise disjoint[step 1.1, L2, L3, algebra]
measurable sequence, then each $(A_n\cap E_j)$ is pairwise disjoint, so
$$\nu_s\!\left(\bigcup_n A_n\right)=\sum_{j=1}^m c_j\mu\!\left(\bigcup_n(A_n\cap E_j)\right) =\sum_{j=1}^m c_j\sum_n\mu(A_n\cap E_j)=\sum_n\nu_s(A_n).$$


3.1 Therefore $\nu_s$ satisfies the two conditions in [L3], so it is a [step 2.1, L3] ∎
measure.
