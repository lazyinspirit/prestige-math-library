---
id: thm-monotone-convergence-for-the-integral
kind: theorem
title: "Monotone convergence for the integral"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, thm-simple-indefinite-integral-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-continuity-from-below-for-measures, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-basic-properties-of-the-nonnegative-simple-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (thm-monotone-convergence-for-the-integral). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 7.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Theorem 4.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.14"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** A nondecreasing sequence $(f_n)$ of nonnegative measurable functions with pointwise limit $f$.

[L1] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] For a nonnegative simple function $s$, the set function $A\mapsto\int_A s\,d\mu$ is a measure ([[thm-simple-indefinite-integral-is-a-measure]]).

[L3] Measures are continuous from below on increasing measurable sets ([[thm-continuity-from-below-for-measures]]).

[L4] The nonnegative integral agrees with the simple integral on simple functions, and the latter is homogeneous on nonnegative simple functions ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[prop-basic-properties-of-the-nonnegative-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the integrals $\int f_n\,d\mu$ increase and are bounded above by $\int f\,d\mu$. Write $L=\sup_n\int f_n\,d\mu$, so $L\le\int f\,d\mu$ in $[0,+\infty]$. [given, L1]

1.2 Fix a finite-valued nonnegative simple function $s\le f$ and $0<c<1$. Set $A_n=\{f_n\ge cs\}$. The sets $A_n$ increase to $X$: where $s=0$ membership is automatic, and where $s>0$, the limit $f\ge s>cs$ eventually forces $f_n\ge cs$. Since $A\mapsto\int_A s\,d\mu$ is a measure [L2], continuity from below [L3] gives $\int_{A_n}s\,d\mu\uparrow\int s\,d\mu$. [given, L2, L3]

2.1 On $A_n$, $cs\le f_n$, hence $cs\chi_{A_n}\le f_n$ everywhere. By monotonicity [L1] and simple-integral agreement and homogeneity [L4], $c\int_{A_n}s\,d\mu\le\int f_n\,d\mu\le L$. Letting $n\to\infty$ in step 1.2 yields $c\int s\,d\mu\le L$. Letting a fixed sequence $c_m\uparrow1$ shows $\int s\,d\mu\le L$, also when the simple integral is infinite. [step 1.2, L1, L4, algebra]

3.1 The inequality from step 2.1 holds for every admissible simple minorant $s\le f$. Taking their supremum, as in [[def-nonnegative-lebesgue-integral]], gives $\int f\,d\mu\le L$. Combine this with step 1.1 to obtain $\int f_n\,d\mu\uparrow\int f\,d\mu$. [step 1.1, step 2.1] ∎
