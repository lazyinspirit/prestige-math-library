---
id: cor-integral-over-a-null-set-vanishes
kind: corollary
title: "A nonnegative integral over a null set vanishes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, thm-simple-indefinite-integral-is-a-measure, def-measure-null-set-and-almost-everywhere, def-nonnegative-lebesgue-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 6.3(4)"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $f:X\to[0,+\infty]$ be measurable and let $E$ be measurable with $\mu(E)=0$.
Then
$$\int_E f\,d\mu=0.$$

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$ and a measurable null set $E$.

[L1] The set function $A\mapsto\int_A s\,d\mu$ is a measure whenever $s$ is nonnegative simple ([[thm-simple-indefinite-integral-is-a-measure]]).

[L2] The integral over a measurable set is defined by $\int_E f\,d\mu=\int f\chi_E\,d\mu$ ([[def-integral-over-a-measurable-set]]).

[L3] The nonnegative integral is the supremum of the integrals of simple minorants ([[def-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 Let $s=\sum_j c_j\chi_{A_j}$ be a simple minorant of $f\chi_E$. If $c_j>0$,[L1, L2, given]
then $A_j\subseteq E$, so $\mu(A_j)=0$. Since $A\mapsto\int_A s\,d\mu$ is a
measure by [L1], every positive-coefficient term contributes $0$, and the
zero-coefficient terms contribute $0$ as well. Hence $\int s\,d\mu=0$.


2.1 Taking the supremum over all such simple minorants in [L3] gives[step 1.1, L2, L3] ∎
$$\int_E f\,d\mu=\int f\chi_E\,d\mu=0.$$

