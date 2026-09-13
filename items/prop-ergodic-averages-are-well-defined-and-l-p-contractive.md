---
id: prop-ergodic-averages-are-well-defined-and-l-p-contractive
kind: proposition
title: Ergodic averages are measurable, representative independent, and Lp contractive
status: draft
origin: pipeline
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, thm-integrals-are-invariant-under-measure-preserving-maps, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-minkowski-inequality-for-integrals, def-essential-supremum-with-respect-to-a-measure, def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§9.6, printed pp. 86–87; §10.5, printed pp. 93–94"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.1, printed pp. 35–36"
proof_strategy: direct
---

## Statement

Let $T$ preserve $\mu$.  For every $1\leq p\leq\infty$, composition

$$U_T[f]:=[f\circ T]$$

is a well-defined linear isometry on real $L^p(\mu)$ and on complex
$L^p(\mu;\mathbb C)$.  Consequently $S_n$ and $A_n$ define measurable
$L^p$ classes and

$$\lVert A_nf\rVert_p\leq\lVert f\rVert_p\qquad(n\geq1).$$

No invertibility of $T$ is assumed.

## Facts & Assumptions

**Given:** A measure-preserving system, $1\leq p\leq\infty$, an $L^p$ class $[f]$, and an integer $n\geq1$.

[F1] A measure-preserving map is measurable, preserves inverse-image measures, and leaves nonnegative and integrable integrals invariant ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F2] The real $L^p$ norms descend to a.e. classes and satisfy the norm axioms ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-minkowski-inequality-for-integrals]]).

[F3] Complex measurable functions, their a.e. quotient, and their modulus norms are fixed by [[def-complex-lp-and-euclidean-test-function-conventions]]; the complex quotient norm and Minkowski inequality are supplied by [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F4] The essential supremum is the infimum of the essential bounds ([[def-essential-supremum-with-respect-to-a-measure]]).

## Proof

**Proof technique:** direct.

1.1 Measurability of $T$ makes $f\circ T$ measurable.  If $f=g$ off the measurable null set $N$, then $f\circ T=g\circ T$ off $T^{-1}N$, and $\mu(T^{-1}N)=\mu(N)=0$.  Thus $U_T$ is representative independent.  Pointwise composition distributes over addition and scalar multiplication, so the descended map is linear over either scalar field. [F1]

1.2 For $1\leq p<\infty$, integral invariance applied to the nonnegative measurable function $|f|^p$ gives $$\lVert f\circ T\rVert_p^p=\int |f|^p\circ T\,d\mu=\int|f|^p\,d\mu=\lVert f\rVert_p^p.$$ Taking the nonnegative $p$th root proves equality of the norms. [F1, F2, F3]

1.3 For $p=\infty$ and every finite $M\geq0$, the exceptional set for $|f\circ T|\leq M$ is $T^{-1}\{|f|>M\}$.  Its measure equals that of $\{|f|>M\}$.  Hence $M$ is an essential bound for $f\circ T$ exactly when it is one for $f$, and their infima are equal. [F1, F4]

2.1 Iterating step 1.1 shows that every $U_T^k[f]=[f\circ T^k]$ is well defined and has norm $\lVert f\rVert_p$.  Finite linear combinations therefore make $S_nf$ and $A_nf$ well-defined measurable classes. [step 1.1, step 1.2, step 1.3]

3.1 The real or complex Minkowski inequality and positive homogeneity now give $$\lVert A_nf\rVert_p\leq\frac1n\sum_{k=0}^{n-1}\lVert U_T^kf\rVert_p=\lVert f\rVert_p.$$ This includes $n=1$ and $p=\infty$, and no inverse of $T$ was used. [F2, F3, step 2.1] ∎
