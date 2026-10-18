---
id: thm-second-factorial-and-reduced-measures-are-locally-finite
kind: theorem
title: "Factorial and reduced factorial moment measures are well-defined and locally finite"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-second-factorial-and-reduced-moment-measures
  - def-stationary-point-process-and-intensity
  - def-random-measure-and-locally-finite-point-process
  - def-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-weighted-sums-of-measures
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 4, §4.2, PDF pp.40–42; Chapter 8, Proposition 8.7 proof, PDF pp.83–84: factorial-measure measurability and bounded-set moment control."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §§2.3–2.4, PDF pp.33–37: factorial moment measures and reduced second moment measures."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC and Countable Choice as inherited through the random-point-process supplier. Let $\eta$ be a locally square-integrable stationary point process. The pathwise second factorial measure $\eta^{(2)}$ is measurable as a random measure; its expectation $\alpha^{(2)}$ and the reduced second factorial moment measure $\alpha^{(2)}_{\rm red}$ of [[def-second-factorial-and-reduced-moment-measures]] are Borel measures, finite on bounded sets.

## Facts & Assumptions

**Given:** AC, Countable Choice, a random locally finite counting measure $\eta$ on $\mathbb R^d$, stationarity, and $\mathbb E[\eta(K)^2]<\infty$ for every compact $K$.

[A1] AC is carried by the transitive point-process supplier dependencies; this proof makes no selection. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the transitive point-process supplier dependencies; this proof makes no selection. ([[def-countable-choice]])

[F1] A point process is a measurable random element into locally finite counting measures; each realization is a finite or countable sum of Dirac masses, with repetitions allowed, and evaluations generate the configuration sigma-algebra. ([[def-random-measure-and-locally-finite-point-process]])

[F2] For sigma-finite measures the product measure exists and has the rectangle formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F3] Parameterized nonnegative integration against an evaluation kernel is measurable. ([[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]])

[F4] A countable nonnegative sum of measures is a measure. ([[thm-nonnegative-weighted-sums-of-measures]])

[F5] Increasing limits pass through nonnegative expectations and integrals; pointwise limits of measurable extended-real functions are measurable. ([[thm-monotone-convergence-for-the-integral]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F6] Local square integrability gives $\mathbb E[\eta(K)^2]<\infty$ for every compact $K$. ([[def-second-factorial-and-reduced-moment-measures]])

## Proof

**Given:** The stated locally square-integrable stationary point process and its occurrence-indexed definitions.

1.1 Fix a realization $\mu=\sum_{i\in J}\delta_{X_i}$. Define $\mu^{(2)}:=\sum_{i,j\in J,\ i\ne j}\delta_{(X_i,X_j)}$ directly as a countable sum of Dirac measures; [F4] makes it a measure, and it is finite on compact subsets of $\mathbb R^{2d}$ because $\mu(K)^2<\infty$ for a compact $K$ containing both coordinate projections. On every bounded Borel $C$, this agrees with $(\mu\otimes\mu)(C)-(\Delta_\#\mu)(C)$, where $\Delta(x)=(x,x)$: both terms are finite there and the second removes exactly the equal-index pairs. Thus no subtraction of infinite values is used. [F1, F2, F4, algebra]

2.1 Let $K_n=[-n,n]^d$. For each Borel $C\subseteq\mathbb R^{2d}$, the evaluations $(\mu\otimes\mu)(C\cap(K_n\times K_n))$ and $\Delta_\#\mu(C\cap(K_n\times K_n))$ are measurable functions of $\mu$: the first is obtained by two successive integrations against the evaluation kernel [F3], and the second is evaluation on the Borel preimage under the continuous diagonal map [F1]. Both are finite; their difference is nonnegative and, by step 1.1, equals $\mu^{(2)}(C\cap(K_n\times K_n))$. These values increase to $\mu^{(2)}(C)$ because $K_n\times K_n$ increases to all of $\mathbb R^{2d}$. Hence [F5] makes $\mu\mapsto\mu^{(2)}(C)$ measurable. [step 1.1, F1, F3, F5]

3.1 For pairwise disjoint Borel $C_j$, countable additivity of each $\eta^{(2)}$ gives $\eta^{(2)}(\bigcup_j C_j)=\sum_j\eta^{(2)}(C_j)$ pointwise; [F5] passes the increasing partial sums through expectation. Thus $\alpha^{(2)}$ is a measure. If $C$ is bounded, choose compact $K$ with $C\subseteq K\times K$; then $\eta^{(2)}(C)\le\eta(K)^2$, so [F6] gives $\alpha^{(2)}(C)<\infty$. [step 2.1, F5, F6]

4.1 For Borel $D\subseteq\mathbb R^d$, $G_D=\{(x,y):x\in Q,\ y-x\in D\}$ is Borel because $(x,y)\mapsto y-x$ is continuous and $Q$ is Borel. The map $D\mapsto\eta^{(2)}(G_D)$ is the pushforward under $(x,y)\mapsto y-x$ of the restriction of $\eta^{(2)}$ to $Q\times\mathbb R^d$, so it is a measure; it is measurable in $\eta$ by step 2.1. Taking expectations and using [F5] shows $\alpha^{(2)}_{\rm red}$ is a measure. If $D$ is bounded, $G_D$ is contained in $K\times K$ for some compact $K$ containing $\overline Q$ and $\overline Q+\overline D$, so $\eta^{(2)}(G_D)\le\eta(K)^2$ and [F6] makes its expectation finite. [step 2.1, step 3.1, F5, F6]

5.1 Steps 1.1–4.1 establish the occurrence-indexed factorial measures, their measurability, and local finiteness. Multiplicity is retained because only equal occurrence indices are removed in step 1.1. The axioms [A1]–[A2] are inherited supplier assumptions and are not used by this construction. [A1, A2, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Sources

Last and Penrose, Chapter 4, §4.2 and Chapter 8, Proposition 8.7 proof; Baddeley, Lecture 2, §§2.3–2.4. The local proof supplies measurability and handles multiplicities explicitly.
