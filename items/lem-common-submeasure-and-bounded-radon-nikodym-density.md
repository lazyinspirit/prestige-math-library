---
id: lem-common-submeasure-and-bounded-radon-nikodym-density
kind: lemma
title: The common submeasure and its bounded density
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-axiom-of-choice
  - def-measure
  - thm-nonnegative-weighted-sums-of-measures
  - def-finite-sigma-finite-and-semifinite-measures
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-extended-real-valued-measurable-function
proof_strategy: direct
axiom_use: "AC is used to invoke the local Radon–Nikodym suppliers and select nonnegative measurable density representatives in steps 1.1 and 3.1; no stronger choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8, printed pp. 75–77"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice (AC). Let $\rho$ and $\sigma$ be finite positive
measures on a measurable space $(E,\mathcal F)$. Put $\lambda=\rho+\sigma$.
Choose nonnegative measurable Radon–Nikodym density representatives
$f=d\rho/d\lambda$ and $g=d\sigma/d\lambda$, modified on a $\lambda$-null set
so that $f+g=1$ everywhere. Then
$$\eta(A):=\int_A\min\{f,g\}\,d\lambda\qquad(A\in\mathcal F)$$
is the greatest measure dominated by both $\rho$ and $\sigma$. The measurable
function
$$a:=\begin{cases}\min\{1,g/f\},&f>0,\\1,&f=0\end{cases}$$
takes values in $[0,1]$ and is a version of $d\eta/d\rho$. Here $\eta\le\rho$
means $\eta(A)\le\rho(A)$ for every $A\in\mathcal F$.

## Facts & Assumptions

**Given:** AC, finite positive measures $\rho,\sigma$ on $(E,\mathcal F)$, and
$\lambda=\rho+\sigma$.

[A1] [[def-axiom-of-choice]]: AC says that every family of nonempty sets has a
choice function.

[F1] [[thm-nonnegative-weighted-sums-of-measures]]: a finite sum of measures
is a measure. [[def-finite-sigma-finite-and-semifinite-measures]]: a finite
measure is sigma-finite, since the whole space is a one-set finite-measure
cover.

[F2] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]],
[[def-radon-nikodym-derivative]], and
[[def-absolutely-continuous-with-respect-to-a-positive-measure]]: under AC,
if $\mu,\nu$ are finite positive measures and $\nu\ll\mu$, there is a
real-valued measurable density whose integral on every measurable set recovers
$\nu$, unique $\mu$-almost everywhere. Indeed, the constant exhaustion
$E_n=E$ meets the theorem's hypotheses, since a positive measure equals its
total variation.

[F3] [[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]:
under AC, if $\mu,\nu$ are sigma-finite positive measures and $\nu\ll\mu$,
the class $d\nu/d\mu$ has a finite-valued nonnegative measurable
representative.

[F4] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] and
[[def-measure]]: if $h\ge0$ is measurable, then
$A\mapsto\int_Ah\,d\lambda$ is a measure.

[F5] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and
[[thm-monotone-convergence-for-the-integral]]: the nonnegative integral is
monotone, and increasing limits pass through it.

[F6] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]
and [[thm-integration-against-a-radon-nikodym-derivative]]: a nonnegative
measurable function is an increasing limit of simple functions; for simple
$s$, $\int s\,d\rho=\int sf\,d\lambda$ when $\rho$ is finite positive and
$f=d\rho/d\lambda$.

[F7] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]
and [[def-extended-real-valued-measurable-function]]: finite sums, scalar
multiplies, pointwise infima, and Borel preimages of measurable functions are
measurable.

[F8] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: on any measure space, the integral of the sum of two nonnegative measurable functions is the sum of their integrals. Applied to indicator-restricted functions, this also holds for integrals over every measurable set.

## Proof

**Given:** AC and the finite positive measures $\rho,\sigma$.

1.1 The measure $\lambda=\rho+\sigma$ is finite, and $\rho,\sigma\ll\lambda$. By [A1], [F1]–[F3], choose finite-valued nonnegative measurable representatives $f=d\rho/d\lambda$ and $g=d\sigma/d\lambda$. For every $B\in\mathcal F$, $$\int_B(f+g)\,d\lambda=\rho(B)+\sigma(B)=\lambda(B)=\int_B1\,d\lambda.$$ Uniqueness in [F2] gives $f+g=1$ $\lambda$-almost everywhere. On the measurable null set where this fails, replace $f$ by $0$ and $g$ by $1$; the modified functions remain representatives and now satisfy $f+g=1$ everywhere. [A1, F1, F2, F3, F7, F8, given, choose]

2.1 The function $h=\min\{f,g\}$ is measurable and nonnegative by [F7]. By [F4], $\eta(A)=\int_Ah\,d\lambda$ defines a measure. Since $h\le f,g$, monotonicity in [F5] and the density identities in step 1.1 give $\eta(A)\le\rho(A)$ and $\eta(A)\le\sigma(A)$ for every $A$. In particular, $\eta(E)\le\rho(E)<\infty$, so $\eta$ is finite. [F4, F5, F7, step 1.1]

3.1 Let $\theta$ be any measure with $\theta\le\rho$ and $\theta\le\sigma$. It is finite because $\theta(E)\le\rho(E)<\infty$, and $\theta\ll\lambda$: if $\lambda(B)=0$, nonnegativity gives $\rho(B)=0$, and hence $\theta(B)=0$. By [A1], [F1]–[F3], choose a finite-valued nonnegative density $k=d\theta/d\lambda$. For each integer $n\ge1$, the measurable set $E_n=\{k\ge f+1/n\}$ satisfies $$\theta(E_n)=\int_{E_n}k\,d\lambda\ge\int_{E_n}f\,d\lambda+\lambda(E_n)/n =\rho(E_n)+\lambda(E_n)/n.$$ Since $\theta(E_n)\le\rho(E_n)<\infty$, this forces $\lambda(E_n)=0$. Thus $\{k>f\}=\bigcup_{n\ge1}E_n$ is null; the same argument using $\theta\le\sigma$ gives $k\le g$ almost everywhere. Therefore $k\le h$ outside a measurable $\lambda$-null set. Integrals on that null set vanish by simple approximation and [F5]–[F6], so monotonicity yields $\theta(A)\le\eta(A)$ for all $A$. Together with step 2.1, this proves that $\eta$ is the greatest common submeasure. [A1, F1, F2, F3, F5, F6, F7, F8, step 1.1, step 2.1, given, choose]

4.1 For each real $c<0$, $\{a>c\}=E$; for $0\le c<1$, $$\{a>c\}=\{f=0\}\cup(\{f>0\}\cap\{g-cf>0\});$$ and for $c\ge1$ the set is empty. By [F7], each such set is measurable, so $a$ is measurable. It lies in $[0,1]$, and $af=\min\{f,g\}$ everywhere: on $\{f>0\}$ this follows by multiplying the ratio by $f$, while on $\{f=0\}$ both sides are zero. For a fixed $A$, approximate $a\mathbf1_A$ increasingly by simple functions. [F6] gives equality of their integrals against $\rho$ and against $f\lambda$; applying [F5] to both limits gives $$\int_Aa\,d\rho=\int_Aaf\,d\lambda=\int_A\min\{f,g\}\,d\lambda=\eta(A).$$ Thus $a$ is a nonnegative measurable representative of $d\eta/d\rho$ with values in $[0,1]$. [F5, F6, F7, step 2.1] ∎
