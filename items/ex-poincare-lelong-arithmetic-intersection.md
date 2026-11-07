---
id: ex-poincare-lelong-arithmetic-intersection
kind: example
title: "Poincaré–Lelong contribution to an arithmetic intersection"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-axiom-of-choice
  - def-arithmetic-chow-group-with-green-currents
  - def-arithmetic-variety-over-the-integers
  - def-discrete-valuation-ring
  - def-number-field
  - def-prime
  - def-ring-of-integers-of-a-number-field
  - lem-number-ring-is-regular-projective-arithmetic-curve
  - lem-order-function-one-dimensional-local-domain
  - thm-equivalent-characterisations-of-a-dvr
  - thm-arithmetic-degree-of-zero-cycle
  - thm-poincare-lelong-for-arithmetic-cycle-relations
  - thm-z-mod-p-is-a-field
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§3.3.3 and §3.4.3, printed pp. 127 and 130–132"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§§2.1.2–2.1.3, printed pp. 22–24"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice. On the regular arithmetic curve $X=\operatorname{Spec}\mathbb Z$, the principal arithmetic relation $(\operatorname{div}_X(2),-G_2)=([2],-\log|2|^2)$ has arithmetic degree zero: its finite contribution is $\log 2$, and its archimedean Green contribution is $-\frac12\log 4=-\log 2$.

## Example references

[Gillet–Soulé, §§3.3.3–3.4.3](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, §§2.1.2–2.1.3](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $K=\mathbb Q$, $\mathcal O_K=\mathbb Z$, and the rational function $2\in K^\times$.

[A1] The Axiom of Choice is used through the arithmetic-curve regularity, Poincaré–Lelong, and arithmetic-degree suppliers ([[def-axiom-of-choice]], [[lem-number-ring-is-regular-projective-arithmetic-curve]]).

[F1] The arithmetic Chow group uses the principal relation $(\operatorname{div}_W f,-G_f)$, and a Green current satisfies $dd^c g+\delta_Z=\omega$ ([[def-arithmetic-chow-group-with-green-currents]]).

[F2] The Poincaré–Lelong identity makes the principal pair a Green cycle ([[thm-poincare-lelong-for-arithmetic-cycle-relations]]).

[F3] The degree of a codimension-one arithmetic cycle on $\operatorname{Spec}\mathbb Z$ is its finite logarithmic contribution plus one half of its archimedean current integral ([[thm-arithmetic-degree-of-zero-cycle]]).

[F4] $\operatorname{Spec}\mathbb Z$ is the regular projective arithmetic curve for $K=\mathbb Q$ ([[def-number-field]], [[lem-number-ring-is-regular-projective-arithmetic-curve]]).

[F5] The principal divisor of $2$ on $\operatorname{Spec}\mathbb Z$ is the point $[(2)]$ with coefficient one: $2$ is prime because its only positive divisors are $1$ and $2$, so $(2)$ is maximal since $\mathbb Z/(2)$ is a field. The ring $\mathbb Z$ is Dedekind; hence $\mathbb Z_{(2)}$ is a one-dimensional Noetherian local integrally closed domain and is a discrete valuation ring, in which $2$ generates the maximal ideal and has order one. At every other prime, $2$ is a unit ([[def-prime]], [[thm-z-mod-p-is-a-field]], [[cor-ring-of-integers-is-a-dedekind-domain]], [[thm-equivalent-characterisations-of-a-dvr]], [[def-discrete-valuation-ring]], [[lem-order-function-one-dimensional-local-domain]]).

## Verification

**Given:** The arithmetic curve and principal arithmetic divisor of the Example.

1.1 By [F5], $\operatorname{div}_X(2)=[(2)]$. This vertical divisor has empty complexification, so $\delta_{[(2)]}=0$ on $X_\infty$. The unique archimedean component is a point and $-\log|2|^2=-\log4$ is constant there, so $dd^c(-\log4)=0$; it is the Green current in the principal relation of [F1], as also ensured by [F2]. [A1, F1, F2, F4, F5, given]

1.2 The finite contribution is $\log\#(\mathbb Z/2\mathbb Z)=\log2$. The archimedean integral is the value $-\log4$ at the single point, so [F3] gives $\log2+\frac12(-\log4)=0$. This is the claimed Poincaré–Lelong contribution to the arithmetic degree. [F3, F4, F5, step 1.1, algebra] ∎
