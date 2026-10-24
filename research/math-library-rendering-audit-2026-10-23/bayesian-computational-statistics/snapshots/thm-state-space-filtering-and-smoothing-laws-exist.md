---
id: thm-state-space-filtering-and-smoothing-laws-exist
kind: theorem
title: Filtering and finite-horizon smoothing laws exist
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - def-standard-borel-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - def-conditional-law-given-a-random-element
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
proof_strategy: direct
axiom_use: "Assume AC. It is used through the finite-horizon path-law theorem and the RCD existence and factorization theorems. The finite-product standard-Borel closure result itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§2.1–2.3"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume AC and a finite-horizon state-space model by standard-Borel state and
observation spaces, an initial probability measure, and transition and
observation probability kernels, as in
[[def-general-state-space-model-by-kernels]]. Let $P_T$ be its finite-horizon
path law. The initial filtering kernel is $\pi_0=\mu_0$ on the singleton
empty-history space. For each $1\le t\le T$, data-indexed filtering and
predictive kernels from [[def-state-space-filtering-laws]] exist. A
data-indexed finite-horizon smoothing kernel for the full state path also
exists, including when $T=0$. The claim is existence of conditional versions
only; it asserts no density, filtering recursion, uniqueness on null
observation histories, or numerical approximation.

## Facts & Assumptions

**Given:** AC, a finite horizon $T\ge0$, standard-Borel state spaces
$(E_t,\mathcal E_t)$ and observation spaces $(F_t,\mathcal F_t)$, an initial
probability measure and probability kernels as in the Statement.

[A1] AC states that every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] A finite-horizon model supplies standard-Borel state and observation
spaces, an initial law, transition kernels, and observation kernels.
[[def-general-state-space-model-by-kernels]]

[F2] Under AC these data determine a unique probability law on the interleaved
finite path space with the stated iterated-kernel formula.
[[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F3] Every finite product of standard-Borel spaces, with its finite-product
sigma-algebra, is standard Borel.
[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[F4] Under AC, a random element with standard-Borel target has a regular
conditional distribution given any sub-sigma-algebra.
[[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]

[F5] Under AC, an RCD given $\sigma(Y)$ factors through a standard-Borel
random element $Y$ as a probability kernel on its observation space.
[[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]

[F6] A data-indexed conditional law is a probability kernel whose composition
with the conditioning random element is an RCD.
[[def-conditional-law-given-a-random-element]]

[F7] An RCD is an everywhere probability kernel satisfying all conditional
event identities. [[def-regular-conditional-distribution]]

[F8] Filtering, predictive, and smoothing kernels have the definitions and
conditioning sigma-algebras stated above.
[[def-state-space-filtering-laws]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $T=0$ put $\Omega_T:=E_0$; otherwise put $\Omega_T:=E_0\times E_1\times F_1\times\cdots\times E_T\times F_T$. Let $\mathcal Z_T$ be its finite-product sigma-algebra. By [F1] and [A1], [F2] supplies a probability measure $P_T$ on $(\Omega_T,\mathcal Z_T)$ with the stated iterated-kernel law; the coordinate maps $X_t,Y_t$ and history maps $Y_{1:t}$ are measurable projections. [A1, F1, F2, given, construct]

2.1 The initial probability makes $E_0$ nonempty; recursively, probability-kernel sections on each nonempty state space force the next state and observation spaces to be nonempty. By [F1] each factor is standard Borel, so [F3] makes $E_0\times\cdots\times E_T$, every $E_t$, and each history target $\mathsf F_{1:t}$ standard Borel, including the empty-history singleton. [F1, F3, step 1.1]

3.1 For each $1\le t\le T$, apply [F4] under [A1] to $X_t$ given $\sigma(Y_{1:t})$ and given $\sigma(Y_{1:t-1})$; their state targets and history targets are standard Borel by step 2.1. The path law [F2] has $X_0$-marginal $\mu_0$, so the constant kernel $\pi_0((),\cdot)=\mu_0$ satisfies the conditional identities for the trivial empty history. Apply [F4] under [A1] to $(X_0,\ldots,X_T)$ given $\sigma(Y_{1:T})$; its target is standard Borel by step 2.1. [A1, F2, F4, step 1.1, step 2.1]

4.1 Each nonempty observation-history target is standard Borel by step 2.1, so [F5] under [A1] factors the RCDs from step 3.1 through their history maps; [F6]–[F8] identify the resulting probability kernels as the required conditional laws. The initial kernel was checked directly in step 3.1. AC is used only through [F2], [F4], and [F5]. No density or pointwise uniqueness on null histories is inferred. [A1, F2, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1] ∎
