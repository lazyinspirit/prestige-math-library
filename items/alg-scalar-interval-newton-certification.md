---
id: alg-scalar-interval-newton-certification
kind: algorithm
title: Finite-budget scalar interval Newton root certification
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-real-boxes-and-interval-jacobian-enclosures
  - def-intervals-rectangles-and-complex-balls
  - def-continuity-and-derivative-on-real-interval
  - def-outward-rounded-interval-and-ball-operations
  - lem-real-interval-arithmetic-preserves-enclosure
justified_by:
  - thm-scalar-interval-newton-exclusion-and-inclusion
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §6.2"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

Input a $C^1$ function $f:U\to\mathbb R$ on an open interval $U$, a nonempty finite dyadic interval $X_0=[a,b]\subset U$, an integer update budget $N\ge0$, and interval evaluators $E_f(I)$ and $E_{f'}(I)$ for every queried subinterval $I\subseteq U$. Their admissibility condition is $f(I)\subseteq E_f(I)$ and $f'(I)\subseteq E_{f'}(I)$; a non-finite evaluator result is not an enclosure usable for certification.

Set $I=X_0$. At each of at most $N$ interval-Newton updates:

1. If a finite $E_f(I)$ excludes $0$, return "root-free" for $X_0$.
2. If $I=\{x\}$, return "unique-root" when $E_f(I)=\{0\}$, return "root-free" when $0\notin E_f(I)$, and otherwise return "inconclusive".
3. Obtain finite $D=E_{f'}(I)$. If the evaluation is non-finite or $0\in D$, return "inconclusive" with the original box.
4. Let $m$ be the midpoint of $I$ and obtain a finite enclosure $F_m=E_f(\{m\})$. If unavailable, return "inconclusive".
5. Compute the outward interval Newton image $N(I)=m-F_m/D$ and $Y=N(I)\cap I$. A non-finite operation returns "inconclusive". If $Y=\varnothing$, return "root-free". If $N(I)\subset\operatorname{int}I$, return "unique-root". If $Y$ is a strict nonempty subinterval of $I$, replace $I$ by $Y$ and continue; otherwise return "inconclusive".

If the update budget is exhausted, return "inconclusive" with the original box. A returned root-free or unique-root status applies to the original box. A failed derivative test, failed contraction, or exhausted budget proves no negative claim.

