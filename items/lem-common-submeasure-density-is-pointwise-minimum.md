---
id: lem-common-submeasure-density-is-pointwise-minimum
kind: lemma
title: The common submeasure of two finite densities
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - cor-integral-over-a-null-set-vanishes
proof_strategy: direct
axiom_use: "AC is used in step 2.1 to obtain a Radon–Nikodym density for an arbitrary finite common submeasure; no further choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8, printed pp. 75–77"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice (AC). Let $\lambda$ be a sigma-finite positive
measure on $(E,\mathcal F)$, and let $\rho$ and $\sigma$ be finite positive
measures absolutely continuous with respect to $\lambda$. Suppose finite-valued
nonnegative measurable functions $f,g:E\to[0,\infty)$ satisfy
$$\rho(A)=\int_A f\,d\lambda,\qquad \sigma(A)=\int_A g\,d\lambda\qquad(A\in\mathcal F).$$
Then
$$\eta(A):=\int_A\min\{f,g\}\,d\lambda$$
is the greatest measure dominated by both $\rho$ and $\sigma$, where
domination means inequality on every measurable set.

## Facts & Assumptions

**Given:** AC, a sigma-finite positive measure $\lambda$, finite positive
measures $\rho,\sigma\ll\lambda$, and finite-valued nonnegative measurable
densities $f,g$ satisfying the displayed integral identities.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a
choice function.

[F1] [[def-measure]] and
[[def-finite-sigma-finite-and-semifinite-measures]]: $\rho,\sigma$ are
countably additive and finite, while $\lambda$ has a countable measurable
cover by finite-$\lambda$ sets.

[F2] [[def-absolutely-continuous-with-respect-to-a-positive-measure]],
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]],
[[def-radon-nikodym-derivative]], and
[[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]:
a finite positive measure absolutely continuous with respect to the
sigma-finite $\lambda$ has, under AC, a finite-valued nonnegative measurable
density whose integrals recover it on every measurable set.

[F3] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: for
nonnegative measurable $h$, $A\mapsto\int_Ah\,d\lambda$ is a measure.

[F4] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and
[[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative
integral is monotone and homogeneous by nonnegative scalars, and it is
additive for sums of nonnegative measurable functions.

[F5] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite
measurable sums, scalar multiples, and pointwise minima are measurable.

[F6] [[cor-integral-over-a-null-set-vanishes]]: a nonnegative measurable
function has integral zero over a $\lambda$-null set.

## Proof

**Given:** The hypotheses in the statement.

1.1 Put $h=\min\{f,g\}$. It is measurable and nonnegative by [F5]. Thus $\eta(A)=\int_Ah\,d\lambda$ is a measure by [F3]. Since $h\le f,g$, monotonicity [F4] gives $\eta(A)\le\rho(A)$ and $\eta(A)\le\sigma(A)$ for every $A$. In particular $\eta(E)\le\rho(E)<\infty$, so $\eta$ is finite. [F1, F3, F4, F5, given]

1.2 Let $\theta$ be any measure with $\theta\le\rho$ and $\theta\le\sigma$. Then $\theta(E)\le\rho(E)<\infty$, so $\theta$ is finite. If $\lambda(B)=0$, then $\rho(B)=\int_Bf\,d\lambda=0$; hence $\theta(B)\le\rho(B)=0$. Therefore $\theta\ll\lambda$. It is sigma-finite because it is finite [F1]. By [A1] and [F2], choose a finite-valued nonnegative measurable density $k$ with $\theta(A)=\int_Ak\,d\lambda$ for every $A$. [A1, F1, F2, given, choose]

2.1 For each integer $n\ge1$, set $E_n=\{k\ge f+1/n\}$. This set is measurable by [F5]. Monotonicity, additivity, and homogeneity [F4] give $$\theta(E_n)=\int_{E_n}k\,d\lambda\ge\int_{E_n}f\,d\lambda+ \frac{\lambda(E_n)}n=\rho(E_n)+\frac{\lambda(E_n)}n.$$ But $\theta(E_n)\le\rho(E_n)<\infty$, so $\lambda(E_n)=0$. The same argument with $g$ and $\sigma$ shows that each $G_n=\{k\ge g+1/n\}$ is $\lambda$-null. Hence $$N:=\bigcup_{n\ge1}(E_n\cup G_n)$$ is $\lambda$-null, and $k\le f$ and $k\le g$, thus $k\le h$, on $E\setminus N$. [F1, F4, F5, step 1.2]

3.1 Absolute continuity gives $\theta(A)=\theta(A\setminus N)$ for every $A$, and [F6] gives $\eta(A)=\eta(A\setminus N)$. On $A\setminus N$, $k\le h$, so monotonicity [F4] yields $$\theta(A)=\int_{A\setminus N}k\,d\lambda\le \int_{A\setminus N}h\,d\lambda=\eta(A).$$ Thus every common lower measure is dominated by $\eta$. [F2, F4, F6, step 1.1, step 2.1]

4.1 Step 1.1 shows that $\eta$ is dominated by both $\rho$ and $\sigma$; step 3.1 shows every measure dominated by both is itself dominated by $\eta$. Therefore $\eta$ is the greatest common submeasure. [step 1.1, step 3.1] ∎
