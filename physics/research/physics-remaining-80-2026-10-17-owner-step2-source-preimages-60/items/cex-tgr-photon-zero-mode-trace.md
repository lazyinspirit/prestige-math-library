---
id: cex-tgr-photon-zero-mode-trace
kind: counterexample
title: Zero-energy photon-mode trace obstruction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-trace-class-operator
  - lem-qsm-fock-occupation-basis-and-car-relations
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-tgr-photon-planck-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  thm-tgr-photon-planck-flux: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
proof_strategy: direct
---

## Statement refuted

For a periodic bosonic box, deleting the zero wavevector only in the continuum
mode integral is sufficient to leave the actual finite-box Gibbs trace finite
even if the zero-energy mode remains in the discrete occupation space.

## Facts & Assumptions

**Given:** Assume Countable Choice [[def-countable-choice]] for the Fock basis and Lebesgue-null singleton suppliers. Use the positive-temperature diagonal occupation-space convention of [[thm-tgr-photon-planck-flux]], extended by one bosonic mode of exactly zero energy and with no zero-point term.

[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]], Statement: for a specified enumerated mode set, finite-support bosonic occupation configurations give an orthonormal basis of the bosonic Fock space. The current batch 45 evidence records this draft carrier as Step-1-ready; that is not independent review or proof acceptance, so the use remains conditional on its inspected interface.

[F2] [[def-trace-class-operator]], Definition: a trace-class operator is compact and its singular values have finite sum; compactness is part of the definition.

[F3] [[thm-tgr-photon-planck-flux]], Statement: the base model has nonzero wavevectors only and its corresponding diagonal Gibbs trace is finite under the explicitly stated summability conditions.

[F4] [[def-countable-choice]]: the Fock-basis supplier assumes $\mathrm{AC}_\omega$.

[F5] [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]], Statement: assuming $\mathrm{AC}_\omega$, every proper linear subspace of $\mathbb R^3$ is Lebesgue measurable and null; in particular, $\{0\}$ is null.

## Counterexample

**Given:** $L,\beta,\hbar,c>0$ and the base mode set of [F3], augmented by one label $0$ with energy $\epsilon_0=0$.

1.1 Start with the base nonzero mode set of [F3] and adjoin the zero-energy label. For each integer $r\ge0$, let $m^{(r)}$ have zero-mode occupation $r$ and occupation zero in every other mode. These are distinct finite-support configurations, so [F1] makes $|m^{(r)}\rangle$ an orthonormal sequence. [given, F1, F3, F4]

2.1 The diagonal Gibbs multiplier $G_\beta=e^{-\beta H}$ satisfies $E(m^{(r)})=r\epsilon_0=0$, hence $G_\beta|m^{(r)}\rangle=|m^{(r)}\rangle$. Its image sequence is orthonormal and has no convergent subsequence, so $G_\beta$ is not compact and by [F2] is not trace class. Equivalently, its diagonal partition sum contains $\sum_{r=0}^\infty e^{-\beta r\epsilon_0}=\sum_{r=0}^\infty1=\infty$. The continuum zero-mode set $\{0\}\subset\mathbb R^3$ has Lebesgue measure zero by [F5], but that fact does not remove the infinitely many discrete zero-mode occupation states. [given, F2, F5, step 1.1, algebra] ∎
