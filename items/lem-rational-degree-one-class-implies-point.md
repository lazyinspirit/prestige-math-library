---
id: lem-rational-degree-one-class-implies-point
kind: lemma
title: "A rational degree-one Picard-scheme class on a genus-one curve gives a rational point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-picard-group-scheme
  - def-degree-divisor-proper-curve
  - thm-full-riemann-roch-divisor
  - cor-canonical-degree-two-g-minus-two
  - cor-negative-degree-no-sections-rr
  - lem-effective-divisors-sections-mod-scalars
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §5.7.1"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Printed pp. 139–141: rational Picard-scheme points are distinguished from line bundles; degree-one genus-one classes are considered via Riemann–Roch."
verification: {}
---

## Statement

Assume AC. Let $K$ be a number field and $C/K$ a smooth, proper, geometrically connected
curve of genus one. Every Galois-invariant divisor class of degree one on
$C_{\bar K}$ gives a point of $C(K)$. Here the class is fixed in
$\operatorname{Pic}(C_{\bar K})$; the premise does not assert that the class
is represented by a line bundle on $C$ over $K$.

## Statement references

[[def-picard-group-scheme|Picard group of a scheme]]

[[def-degree-divisor-proper-curve|Degree of a divisor on a proper curve]]

[[thm-full-riemann-roch-divisor|Full Riemann–Roch theorem for divisors on curves]]

[[cor-canonical-degree-two-g-minus-two|Degree of a canonical divisor]]

[[cor-negative-degree-no-sections-rr|No sections in negative degree]]

[[lem-effective-divisors-sections-mod-scalars|Effective divisors and sections modulo scalars]]

## Facts & Assumptions

**Given:** AC, a number field $K$, a smooth, proper, geometrically connected
genus-one curve $C/K$, and a Galois-invariant geometric divisor class
$[D]\in\operatorname{Pic}(C_{\bar K})$ of degree one.

[F1] Riemann–Roch gives
$\ell(D)-\ell(K_C-D)=\deg D+1-g$, and a genus-one canonical divisor has
degree zero. ([[thm-full-riemann-roch-divisor]],
[[cor-canonical-degree-two-g-minus-two]])

[F2] A divisor of negative degree has no nonzero section, so
$\ell(K_C-D)=0$ when $g=1$ and $\deg D=1$.
([[cor-negative-degree-no-sections-rr]], [[def-degree-divisor-proper-curve]])

[F3] Nonzero sections of $\mathcal O(D)$ modulo scalars correspond by a
bijection to effective divisors linearly equivalent to $D$.
([[lem-effective-divisors-sections-mod-scalars]],
[[def-picard-group-scheme]])

[A1] AC is inherited through the Riemann–Roch and divisor-section suppliers.
([[def-axiom-of-choice]], [[cor-negative-degree-no-sections-rr]],
[[lem-effective-divisors-sections-mod-scalars]])

## Proof

**Proof technique:** geometric Riemann–Roch and uniqueness of an effective
degree-one divisor.

**Given:** AC and the data above.

1.1 The class $[D]$ has degree one and $K_C$ has degree zero, so
$\deg(K_C-D)=-1$. By [F2], $\ell(K_C-D)=0$; [F1] then gives
$\ell(D)=1$. [A1, F1, F2, given, algebra]

1.2 A nonzero section of $\mathcal O(D)$ gives an effective divisor $E$
linearly equivalent to $D$ by [F3]. Its degree is one, so over the
algebraically closed field $\bar K$ it is a single point of $C_{\bar K}$.
[A1, F3, step 1.1, construct]

2.1 The effective divisor in the class $[D]$ is unique: two effective
divisors in the class correspond by [F3] to nonzero sections in
$H^0(C_{\bar K},\mathcal O(D))$, which is one-dimensional by step 1.1; all
such sections differ by a scalar and yield the same effective divisor.
[A1, F1, F3, step 1.1, step 1.2, algebra]

2.2 Every element of $\operatorname{Gal}(\bar K/K)$ fixes $[D]$ and therefore
permutes its effective representatives; uniqueness forces it to fix the
single point $E$. Since number fields are perfect, a geometric point fixed by
the absolute Galois group is $K$-rational. Hence $C(K)\ne\varnothing$.
[A1, given, step 1.2, step 2.1, algebra] ∎
