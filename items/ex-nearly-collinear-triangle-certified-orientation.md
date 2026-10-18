---
id: ex-nearly-collinear-triangle-certified-orientation
kind: example
title: A nearly collinear dyadic triangle falls through to the exact sign
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates-examples
dependency_level: 6
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-certified-geometric-predicate-determinants, def-standard-relative-floating-point-model-and-unit-roundoff, def-dyadic-floating-point-format-and-directed-rounding, lem-directed-dyadic-rounding-enclosure-and-error, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-leibniz-determinant-forward-error-bound, alg-floating-filter-for-geometric-determinants, thm-floating-filter-sign-is-exact, alg-certified-dyadic-geometric-predicate, thm-certified-dyadic-geometric-predicate-sound-and-terminates]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.3"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
---

## Example

Let $A=(0,0)$, $B=(1,1)$, and $C=(2,2+\delta)$ with
$\delta=2^{-51}$, using binary64 inputs. The exact orientation determinant is
$\delta>0$. In the 53-bit filter system with $u=2^{-53}$, the outward error
interval includes zero, so the certified predicate uses its exact integer
fallback and returns positive.

## Facts & Assumptions

**Given:** The three listed points, the row convention for orientation, a 53-bit binary64 filter, and the standard relative model with every nonzero operation result normal-range.

[F1] [[def-certified-geometric-predicate-determinants]]: orientation is the sign of the determinant with ordered rows $(p_i,1)$.

[F2] [[def-standard-relative-floating-point-model-and-unit-roundoff]]: the binary64 unit roundoff is $u=2^{-53}$, and its relative error model excludes underflow and overflow.

[F3] [[lem-leibniz-determinant-forward-error-bound]]: for an $s\times s$ matrix, $q=s+s!-2$ and $|\widehat D-\det M|\le\gamma_qS$ when the stated operation hypotheses hold.

[F4] [[def-dyadic-floating-point-format-and-directed-rounding]]: the representable spacing in $[2^e,2^{e+1})$ is $2^{e-p+1}$.

[F5] [[lem-directed-dyadic-rounding-enclosure-and-error]]: downward and upward rounding bracket every finite exact endpoint.

[F6] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every exact value of a finite DAG with finite operation results belongs to its computed interval enclosure.

[F7] [[alg-floating-filter-for-geometric-determinants]]: the filter returns a sign only if $[\widehat D-E,\widehat D+E]$ excludes zero.

[F8] [[alg-certified-dyadic-geometric-predicate]]: an inconclusive filter falls through to the exact integer-clearance determinant sign.

[F9] [[thm-floating-filter-sign-is-exact]]: a nonzero filter sign equals the exact determinant sign.

[F10] [[thm-certified-dyadic-geometric-predicate-sound-and-terminates]]: the certified dyadic procedure returns the exact determinant sign.

[A1] The selected 53-bit filter rounds every exactly representable normal result exactly and has no underflow or overflow on this calculation.

## Verification

1.1 With rows $(A,1),(B,1),(C,1)$, the determinant is $\det\begin{pmatrix}0&0&1\\1&1&1\\2&2+\delta&1\end{pmatrix}=\delta$ by expansion along the first row. Thus the exact sign is positive. [given, F1, algebra]

1.2 In lexicographic Leibniz order the only nonzero signed terms are $+(2+\delta)$ and $-2$. They and their sum $\delta$ are exactly representable normal binary64 values, so by [A1] the filter's approximation is $\widehat D=\delta$. [given, F2, A1, algebra]

1.3 The absolute-term sum is $S=(2+\delta)+2=4+2^{-51}$. Since $4\le S<8$, [F4] gives spacing $2^{-50}$; $S$ is halfway between $4$ and $4+2^{-50}$. Outward upward rounding therefore gives $U=4+2^{-50}$ by [F5], and the outward DAG is sound by [F6]. [F4, F5, F6, algebra]

2.1 Here $s=3$, so $q=7$ and $\gamma_7>7u$. Therefore $E\ge\gamma_7U>28\cdot2^{-53}=7\delta>\delta=\widehat D$. The filter interval contains zero and [F7] forces `inconclusive`. [F2, F3, F7, step 1.3, algebra]

3.1 By [F8] the top-level procedure now uses its exact integer fallback; the determinant in [step 1.1] is $\delta>0$. Its returned sign is positive, as also guaranteed by [F9]–[F10]. [F8, F9, F10, step 1.1, step 2.1] ∎

