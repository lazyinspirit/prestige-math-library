---
id: alg-floating-filter-for-geometric-determinants
kind: algorithm
title: Outward-bounded floating determinant filter
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 2
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-certified-geometric-predicate-determinants, lem-leibniz-determinant-forward-error-bound, def-standard-relative-floating-point-model-and-unit-roundoff, def-dyadic-floating-point-format-and-directed-rounding, def-abs-value, lem-directed-dyadic-rounding-enclosure-and-error, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-floating-filter-sign-is-exact]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Definition

Input: a finite exact dyadic square matrix $M$ of size $s\ge2$, a selected
floating-point system with known dyadic unit-roundoff bound $u$, and a finite
range certificate listing each exact product or sum in the fixed
left-to-right Leibniz schedule. Verify by exact dyadic comparison that every
entry of $M$ is representable and each listed operation result is either zero
or normal-range. The system must satisfy the standard relative model in
[[def-standard-relative-floating-point-model-and-unit-roundoff]]. Set
$q=s+s!-2$ and $\gamma_q=qu/(1-qu)$; if $qu\ge1$, or if the certificate or
model hypotheses are unavailable, return `inconclusive` without using a
floating result.

1. Enumerate permutations in lexicographic tuple order. Form each signed
   product left-to-right, applying its sign by exact sign change. Initialize the sum
   with the first term; add each later term left-to-right using the selected
   floating-point system. Call the result $\widehat D$.
2. Enumerate permutations in the same lexicographic tuple order. For each
   permutation, start with $[1,1]$ and multiply the singleton intervals
   $[|M_{i,\pi(i)}|,|M_{i,\pi(i)}|]$ from row $0$ through row $s-1$, from
   left to right, using the real absolute value [[def-abs-value]] and the
   outward interval operations of
   [[def-outward-rounded-interval-and-ball-operations]]. Add these
   nonnegative terms from left to right, starting with the first term, to
   obtain the interval enclosure of the Leibniz absolute-term sum. Its
   expression DAG is finite; let $U$ be the upper endpoint of the resulting
   finite interval. If any operation is nonfinite, return `inconclusive`.
3. Compute $E=\operatorname{ru}(\gamma_q U)$ by the directed rounding of
   [[def-dyadic-floating-point-format-and-directed-rounding]]. If this
   overflows, return `inconclusive`.
4. Compare exact dyadic rationals. Return `positive` if $\widehat D-E>0$;
   return `negative` if $\widehat D+E<0$; otherwise return `inconclusive`.

The computation of $U$ uses outward arithmetic, so the exact nonnegative sum
$S$ in [[lem-leibniz-determinant-forward-error-bound]] satisfies $S\le U$
whenever a finite $U$ is returned, by
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]].

