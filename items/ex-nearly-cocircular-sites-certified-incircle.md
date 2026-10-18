---
id: ex-nearly-cocircular-sites-certified-incircle
kind: example
title: A nearly cocircular quadruple has a certified lifted sign
status: draft
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
deps: [def-certified-geometric-predicate-determinants, lem-lifted-determinant-sign-matches-sphere-side, def-standard-relative-floating-point-model-and-unit-roundoff, def-dyadic-floating-point-format-and-directed-rounding, lem-directed-dyadic-rounding-enclosure-and-error, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-leibniz-determinant-forward-error-bound, alg-floating-filter-for-geometric-determinants, thm-floating-filter-sign-is-exact, alg-certified-dyadic-geometric-predicate, thm-certified-dyadic-geometric-predicate-sound-and-terminates]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
---

## Example

Let $A=(0,0)$, $B=(1,0)$, $C=(0,1)$, and
$D=(1,1+\delta)$ with $\delta=2^{-52}$. Their raw lifted determinant with
rows $(x,y,x^2+y^2,1)$ is $-(\delta+\delta^2)$. In a 113-bit filter format
with $u=2^{-113}$ and a normal range covering the displayed operations, every
lifted entry is exactly representable. The filter error radius is less than
$\delta/4$, so it certifies the negative lifted sign; since the base
orientation is positive, the last site is outside the circle through $A,B,C$.

## Facts & Assumptions

**Given:** The four dyadic sites, the ordered lifted-matrix convention, a 113-bit filter system with unit roundoff $u=2^{-113}$, and normal-range operation results.

[F1] [[def-certified-geometric-predicate-determinants]]: the base orientation uses rows $(p_i,1)$ and the lifted determinant uses rows $(p_i,\sum_jp_{i,j}^2,1)$.

[F2] [[lem-lifted-determinant-sign-matches-sphere-side]]: for a nondegenerate base simplex, $L_d=-O_d(\|q-c\|^2-r^2)$, so positive $O_dL_d$ means inside and negative means outside.

[F3] [[def-standard-relative-floating-point-model-and-unit-roundoff]]: the relative model bounds every allowed operation error by the stated unit roundoff and requires normal-range exact results.

[F4] [[lem-leibniz-determinant-forward-error-bound]]: for size $s$, the computed determinant error is at most $\gamma_{s+s!-2}S$ under the model hypotheses.

[F5] [[alg-floating-filter-for-geometric-determinants]]: the error radius is rounded upward and the filter returns a sign only when its error interval excludes zero.

[F6] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: outward interval evaluation encloses the exact absolute-term sum when finite.

[F7] [[def-dyadic-floating-point-format-and-directed-rounding]]: binary formats have a finite normal range and represent dyadic values by the stated precision and exponent parameters.

[F8] [[thm-certified-dyadic-geometric-predicate-sound-and-terminates]]: the top-level predicate returns the exact raw determinant sign.

[F9] [[lem-directed-dyadic-rounding-enclosure-and-error]]: upward directed rounding returns the least representable value not below a finite exact input.

[A1] The selected 113-bit format represents all displayed matrix entries and has normal range containing every exact intermediate and the final error radius.

## Verification

1.1 The orientation determinant of $A,B,C$ is $\det\begin{pmatrix}0&0&1\\1&0&1\\0&1&1\end{pmatrix}=1$. The lifted matrix has rows $(0,0,0,1)$, $(1,0,1,1)$, $(0,1,1,1)$, and $(1,1+\delta,2+2\delta+\delta^2,1)$. Expanding its determinant leaves $-(\delta+\delta^2)$. [given, F1, algebra]

1.2 The largest lifted entry $2+2\delta+\delta^2$ has no nonzero binary place below $2^{-104}$, so it needs at most 107 significant bits; the 113-bit format represents it and all other matrix entries exactly. The absolute-term sum is $S=4+3\delta+\delta^2<5$, also exactly representable. By [F6] its outward upper endpoint is $U=S$. [F6, F7, algebra]

2.1 The base circle has center $(1/2,1/2)$ and squared radius $1/2$. The last point's squared distance is $1/4+(1/2+\delta)^2=1/2+\delta+\delta^2$, so it is outside; [F2] agrees with the negative product of the positive orientation and negative lifted determinant. [F1, F2, step 1.1, algebra]

2.2 Here $s=4$, $q=26$, and $26u<1/2$, so $\gamma_{26}<52u$. Hence $\gamma_{26}U<260\cdot2^{-113}<2^{-104}$. Since $2^{-104}$ is representable, upward rounding gives $E\le2^{-104}<\delta/4$ by [F9], and the exact determinant bound [F4] gives $|\widehat D-L_2|\le E$. [F3, F4, F9, step 1.2, algebra]

3.1 Since $L_2=-(\delta+\delta^2)<-\delta$ and $E<\delta/4$, $\widehat D+E\le L_2+2E<0$. The filter therefore returns negative by [F5]; the exactness of this sign also follows from [F8]. The positive base orientation makes the normalized side sign negative, so $D$ is outside. [F1, F5, F8, step 1.1, step 2.2, algebra] ∎

