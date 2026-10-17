---
id: pthm-qsm-infinite-spin-equilibrium-predictions
kind: physics-theorem
title: Conditional interacting spin dynamics and equilibrium predictions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: >-
  Conditional predictions for finite-dimensional on-site spins on Z^d with a
  uniformly bounded finite-range interaction at positive temperature. Pressure
  is asserted only for translation-invariant interactions and van Hove
  sequences; no empirical material identification, thermalization, or
  uniqueness claim is made.
deps:
  - def-countable-choice
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-infinite-spin-physical-quantities
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - def-qsm-translation-invariant-spin-interaction
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - post-qsm-infinite-spin-equilibrium
  - thm-qsm-finite-range-spin-dynamics
  - thm-qsm-infinite-spin-kms-existence
  - thm-qsm-quantum-lattice-pressure
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-infinite-spin-physical-quantities: formulation-prerequisite
  def-qsm-kms-state: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  post-qsm-infinite-spin-equilibrium: physical-assumption
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  thm-qsm-infinite-spin-kms-existence: mathematical-premise
  thm-qsm-quantum-lattice-pressure: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.3–3.4, finite-range dynamics and equilibrium states, printed pp. 64–82
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, printed pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, Theorem 3.1, printed pp. 332–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
empirical_premises: []
verification:
  precheck: pass
---

## Statement

Let $\Gamma=\mathbb Z^d$, $d\ge1$, have finite on-site spin dimension $q\ge1$, local algebras $\mathcal A_\Lambda$, and quasi-local algebra $\mathcal A$ as in [[def-qsm-local-spin-algebras]], [[def-qsm-quasilocal-spin-algebra]]. Adopt the physical spin-model interpretation and equilibrium criterion of [[post-qsm-infinite-spin-equilibrium]]. Let $\Phi$ be a uniformly bounded finite-range interaction as in [[def-qsm-bounded-finite-range-interaction]], with free-boundary $H_\Lambda$ and finite-volume dynamics $\alpha_t^\Lambda(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$. Assume Countable Choice and the finite-matrix C$^*$-identity and state/density-norm interface of [[lem-qsm-finite-matrix-cstar-and-state-duality]], exactly at the stated conditional scope.

Then the thermodynamic dynamics $\alpha_t$ exists as a strongly continuous one-parameter group of isometric $*$-automorphisms of $\mathcal A$. For every fixed $\beta=(k_BT)^{-1}>0$, at least one $\beta$-KMS state for $\alpha_t$ exists. This existence conclusion is a model deduction from the stated mathematical hypotheses; the physical postulate adopts KMS as an equilibrium criterion but the theorem does not imply dynamical relaxation, uniqueness, or a global infinite-volume Gibbs density matrix.

If, in addition, $\Phi$ is translation invariant in the sense of [[def-qsm-translation-invariant-spin-interaction]], then for every sequence of finite nonempty regions $(\Lambda_n)$ satisfying $|\Lambda_n|\to\infty$ and, for each fixed integer $r\ge0$, $|\partial_r\Lambda_n|/|\Lambda_n|\to0$, where $\partial_r\Lambda_n:=\{x\in\Lambda_n:\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda_n)\le r\}$, the dimensionless finite-volume log-partition per site
$$p_{\Lambda_n}(\beta):=|\Lambda_n|^{-1}\log\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}})$$
converges to the same finite $p_\Phi(\beta)$. This is the van Hove condition stated in [[thm-qsm-quantum-lattice-pressure]]. The corresponding model free energy per site $f_\Phi(\beta):=-\beta^{-1}p_\Phi(\beta)=-k_BT p_\Phi(\beta)$ is in joules per site when interaction terms are assigned energy units. The theorem makes no claim about a physical pressure in pascals or the accuracy of a material fit.

## Facts & Assumptions

**Given:** The adopted physical interpretation of [[post-qsm-infinite-spin-equilibrium]], $\Gamma=\mathbb Z^d$, finite $q$, a uniformly bounded finite-range interaction, $\beta>0$, and $\hbar>0$.

[A1] Countable Choice, in the exact indexed-family form of [[def-countable-choice]], is assumed by the finite-range dynamics and KMS-existence suppliers.

[A2] Assume the finite-matrix $C^*$-identity and positive-functional/density-norm interface exactly as stated in [[lem-qsm-finite-matrix-cstar-and-state-duality]]. Its current item is a draft, hash-current, owner-recorded ready input; the dynamics and KMS-existence results use it conditionally. No independent proof approval is inferred.

[F1] [[def-qsm-bounded-finite-range-interaction]]: each term $\Phi(Z)$ is self-adjoint, has finite support cardinality and finite range, and the per-site norm sum is uniformly bounded by $\kappa$; the finite-volume Hamiltonian sums only terms whose complete support is in $\Lambda$.

[F2] [[thm-qsm-finite-range-spin-dynamics]]: under [A1]–[A2], the finite-volume dynamics converge in norm on every local observable, uniformly on compact real-time intervals, to a unique strongly continuous group of $*$-automorphisms of $\mathcal A$.

[F3] [[thm-qsm-infinite-spin-kms-existence]]: under [A1]–[A2], for every $\beta>0$ the finite Gibbs subsequential limits are full-algebra $\beta$-KMS states for the dynamics in [F2]; at least one subsequential limit exists.

[F4] [[thm-qsm-quantum-lattice-pressure]]: for a translation-invariant finite-range interaction and every van Hove sequence with $|\partial_r\Lambda_n|/|\Lambda_n|\to0$ for every fixed $r$, $p_{\Lambda_n}$ converges to the same finite dimensionless limit.

[F5] [[def-qsm-infinite-spin-physical-quantities]]: $\beta=(k_BT)^{-1}$, so the model free energy per site $-\beta^{-1}p_\Phi$ equals $-k_BT p_\Phi$ and has units joules per site.

## Proof

1.1 The hypotheses in [F1] and [A1]–[A2] are exactly those of [F2], so the free-boundary maps $\alpha_t^\Lambda$ have a norm limit on each local observable, independent of the exhausting volumes and uniform on compact time intervals. By [F2] this limit extends to a strongly continuous one-parameter group of isometric $*$-automorphisms of $\mathcal A$. [A1, A2, F1, F2, given]

2.1 For every fixed $\beta>0$, [F3] applies to the same $\Gamma$, finite $q$, interaction and dynamics established in step 1.1. It supplies a pointwise subsequential state limit and proves, conditional on [A1]–[A2], that this limit satisfies the $\beta$-KMS strip condition with width $\beta\hbar$ seconds. Thus at least one full-algebra KMS state exists. This is a deduction within the adopted model, not a claim that a physical system relaxes to that state. [A1, A2, F2, F3, step 1.1]

3.1 Under the additional translation-invariance hypothesis, [F4] applies to the same finite-range interaction and gives the common finite pressure limit along every stated van Hove sequence. By the unit conventions in [[def-qsm-infinite-spin-physical-quantities]], $\beta^{-1}=k_BT$, so the free energy per lattice site is $-\beta^{-1}p_\Phi=-k_BT p_\Phi$ and has units joules per site. This model deduction supplies no pressure in pascals or empirical material fit. [F1, F4, F5, given, algebra] ∎


## Remarks

The physical-quantities definition also records a translation-invariant entropy-density construction under its explicit Countable Choice and full Axiom of Choice hypotheses. This theorem uses only its local model and unit conventions, not that entropy-density clause; the KMS-existence argument retains exactly Countable Choice and the finite-matrix interfaces listed above.
