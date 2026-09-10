---
id: thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data
kind: theorem
title: "A real L^1 density defines a finite signed measure with its canonical Hahn and Jordan data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, def-integrable-real-and-complex-functions-and-their-integrals, prop-closure-properties-of-measurable-functions-used-by-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, def-signed-measure, def-positive-negative-and-null-sets-for-a-signed-measure, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 12.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, Example 6.15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $f\in L^1(\mu)$ be
real-valued. Define
$$\nu(E):=\int_E f\,d\mu\qquad(E\in\mathcal A).$$
Then $\nu$ is a finite signed measure. Its canonical Hahn sets are
$$P:=\{f>0\},\qquad N:=\{f\le0\},$$
its Jordan parts are
$$\nu^+(E)=\int_E f^+\,d\mu,\qquad \nu^-(E)=\int_E f^-\,d\mu,$$
and its total variation is
$$|\nu|(E)=\int_E |f|\,d\mu.$$

These explicit constructions require no choice axiom. Hahn partitions are
unique only up to signed-null sets; the Jordan measures are unique.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and a real-valued function $f\in L^1(\mu)$.

[L1] A nonnegative measurable density defines a positive measure. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]])

[L2] For a real integrable function, the positive and negative parts satisfy $f=f^+-f^-$ and $|f|=f^++f^-$. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L3] Arithmetic and threshold operations preserve measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L4] Given Hahn decompositions, their positive pieces differ by a signed-null set; given a Hahn partition, its Jordan measures are constructed by restriction and are unique. These are the separately stated choice-free conditional clauses, not the AC-qualified general existence assertions. ([[thm-hahn-decomposition-for-signed-measures]], [[thm-jordan-decomposition-for-signed-measures]])

[L5] The nonnegative integral is additive. ([[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[L6] Signed measures, positive/negative sets and partition-defined total variation have their usual local meanings. ([[def-signed-measure]], [[def-positive-negative-and-null-sets-for-a-signed-measure]], [[def-total-variation-of-a-signed-or-complex-measure]])

## Proof

**Proof technique:** direct.

1.1 Put $\alpha(E)=\int_E f^+\,d\mu$ and $\beta(E)=\int_E f^-\,d\mu$. By [L1]–[L3] these are positive measures, and their total masses are finite because $f$ is integrable. By [L2], $\nu(E)=\alpha(E)-\beta(E)$ is finite. For disjoint measurable $E_n$, the series $\sum_n\alpha(E_n)$ and $\sum_n\beta(E_n)$ have finite sums, so they can be subtracted termwise to obtain countable additivity of $\nu$; moreover $\sum_n|\nu(E_n)|\le\alpha(X)+\beta(X)<\infty$. Also $\nu(\varnothing)=0$. Thus [L6] makes $\nu$ a finite signed measure. [given, L1, L2, L3, L6, algebra]

2.1 By [L3], $P=\{f>0\}$ and $N=\{f\le0\}$ are measurable and partition $X$. The density $f^-$ vanishes on $P$ and $f^+$ vanishes on $N$, so on measurable subsets of $P$ one has $\nu=\alpha\ge0$, and on subsets of $N$ one has $\nu=-\beta\le0$. These signs prove directly that $(P,N)$ is a Hahn partition. Only the conditional comparison in [L4] is needed to say that every other supplied Hahn partition differs by a signed-null set. [L3, L4, L6, step 1.1]

3.1 Since $\alpha$ vanishes on $N$ and $\beta$ vanishes on $P$, the conditional construction in [L4] identifies them with the unique Jordan measures: $\nu(E\cap P)=\alpha(E)$ and $-\nu(E\cap N)=\beta(E)$. No arbitrary Hahn partition is selected. [L4, step 1.1, step 2.1, algebra]

4.1 For any countable measurable partition $E=\bigsqcup_jE_j$, one has $\sum_j|\nu(E_j)|\le\sum_j(\alpha(E_j)+\beta(E_j))=\alpha(E)+\beta(E)$. Conversely, the explicit partition $E\cap P,E\cap N$ (with empty later parts) has variation sum exactly $\alpha(E)+\beta(E)$ by step 2.1. Taking the supremum in [L6] proves $|\nu|(E)=\alpha(E)+\beta(E)=\int_E|f|\,d\mu$ by [L2] and [L5]. Together with steps 1.1–3.1 this proves every assertion without using the general Hahn/Jordan existence clauses. [L2, L5, L6, step 2.1, step 3.1, algebra] ∎
