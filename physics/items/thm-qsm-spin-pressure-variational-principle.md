---
id: thm-qsm-spin-pressure-variational-principle
kind: theorem
title: Stationary quantum variational pressure maximum
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 10
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-translation-invariant-spin-interaction
  - def-qsm-infinite-algebraic-state
  - lem-qsm-quasilocal-completion
  - lem-qsm-matrix-state-calculus
  - def-countable-choice
  - def-axiom-of-choice
  - thm-qsm-quantum-lattice-pressure
  - lem-qsm-stationary-spin-entropy-density
  - thm-qsm-finite-gibbs-variational
  - thm-qsm-finite-entropy-composition
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-consistent-local-states
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-qsm-quantum-lattice-pressure: mathematical-premise
  lem-qsm-stationary-spin-entropy-density: mathematical-premise
  thm-qsm-finite-gibbs-variational: mathematical-premise
  thm-qsm-finite-entropy-composition: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qc-partial-trace-positive-and-trace-preserving: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.4.12–3.4.16, pp. 78–82
      url: https://arxiv.org/pdf/1311.2717
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, Theorem 3.1, pp. 332–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Statement

Use the finite-range translation-invariant model of [[def-qsm-translation-invariant-spin-interaction]] at fixed $\beta>0$ and $k_B>0$, where $k_B$ is a positive normalization constant (the Boltzmann constant in energy/temperature bookkeeping). Let $\mathcal S_{\mathrm{inv}}$ be its translation-invariant algebraic states, where an algebraic state has the exact boundedness, normalization, and positivity definition in [[def-qsm-infinite-algebraic-state]], and translation invariance means $\omega\circ\tau_x=\omega$ for every $x\in\mathbb Z^d$. Assume Countable Choice and the Axiom of Choice [A1]–[A2], together with the finite Gibbs, entropy, and consistent-state interfaces [L1]–[L3] at their stated scopes. Then, with the pressure $p_\Phi(\beta)$, dimensionless entropy density $s(\omega)$, and energy density $u_\Phi(\omega)$ defined in [[thm-qsm-quantum-lattice-pressure]] and [[lem-qsm-stationary-spin-entropy-density]],
$$
p_\Phi(\beta)=\max_{\omega\in\mathcal S_{\mathrm{inv}}}\bigl(s(\omega)-\beta u_\Phi(\omega)\bigr).
$$
At least one maximizing state exists. Both sides are dimensionless per lattice site when $\beta$ is inverse joules and $\Phi$ is in joules. This variational claim does not identify maximizers with KMS states.

## Facts & Assumptions

**Given:** The model of [[def-qsm-translation-invariant-spin-interaction]], $\beta>0$, and the exact notions of state and translation invariance in the Statement.

[A1] Countable Choice as defined in [[def-countable-choice]], needed for the norm completion in [[lem-qsm-consistent-local-states]] and the conditional entropy-density and compactness input [F2].

[A2] Assume the full Axiom of Choice [[def-axiom-of-choice]] for the finite-entropy dependency chain [L2]. The block and partial-trace constructions below make no additional arbitrary-index selections.

[F1] [[thm-qsm-quantum-lattice-pressure]]: the finite-volume log partition function per site converges to the same finite pressure along cubes and every van Hove sequence.

[F2] [[lem-qsm-stationary-spin-entropy-density]]: under its explicit conditions, invariant states have entropy density $s$, energy density $u_\Phi$, an upper-semicontinuous entropy functional, continuous energy functional, and a sequentially compact invariant state space.

[L1] [[thm-qsm-finite-gibbs-variational]]: for finite-dimensional Hermitian $H$, $\beta>0$, $k_B>0$, $T=(k_B\beta)^{-1}$, and $Z=\operatorname{Tr}(e^{-\beta H})$, every density satisfies $\operatorname{Tr}(\rho H)-T S_{\rm phys}(\rho)\ge-\beta^{-1}\log Z$, where $S_{\rm phys}(\rho)=k_Bs(\rho)$ and $s(\rho)=-\operatorname{Tr}(\rho\log\rho)$. The current proof also establishes equality at the Gibbs density.

[L2] [[thm-qsm-finite-entropy-composition]]: the physical entropy $S_{\rm phys}=k_Bs$ is concave under finite mixtures, additive for product densities, and subadditive across tensor factors. Since $k_B>0$, division by $k_B$ gives these same properties for the dimensionless entropy $s$.

[L3] [[lem-qsm-consistent-local-states]]: a consistent family of positive trace-one local density matrices extends uniquely to an algebraic state on the norm-completed local algebra.

[F3] [[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]], and [[thm-qc-partial-trace-positive-and-trace-preserving]]: finite partial traces are characterized by their trace pairing, are positive and trace-preserving, and have the displayed coordinate formula. The nested partial-trace identity used below follows by reordering the finite coordinate sums.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: each finite-dimensional self-adjoint local matrix has an orthonormal eigenbasis with real eigenvalues.

[F5] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: every nonzero finite local matrix algebra with its ordinary operator norm is a complete C*-algebra, and each positive normalized functional has a unique positive trace-one density matrix with functional norm one. Its finite-dimensional proof includes dimension one and makes no infinite-dimensional density claim.

[F6] [[def-qsm-translation-invariant-spin-interaction]]: the spatial translations satisfy $\tau_0=\mathrm{id}$ and $\tau_{x+y}=\tau_x\circ\tau_y$.

[F7] [[def-qsm-translation-invariant-spin-interaction]]: translation covariance gives $\tau_x(\Phi(S))=\Phi(S+x)$.

[F8] [[def-qsm-translation-invariant-spin-interaction]]: each anchored representative contains $0$. [[def-qsm-bounded-finite-range-interaction]]: the interaction has finite range $R$ and $\sum_{Z\ni0}\|\Phi(Z)\|\le\kappa$ by the per-site norm bound.

## Proof

**Proof technique:** finite Gibbs upper bound and a stationary block-Gibbs recovery sequence.

**Given:** [A1]–[A2], [F1]–[F8], [L1]–[L3], $\beta>0$, $k_B>0$, and the finite-range model.

1.1 For any $\omega\in\mathcal S_{\mathrm{inv}}$, [F5] represents its restriction to $Q_L$ by a trace-one density matrix, and [L1] applies to that density. Writing $S_{Q_L}=-\operatorname{Tr}(\rho_{Q_L}\log\rho_{Q_L})$ (dimensionless), the supplier's physical entropy is $k_{\mathrm B}S_{Q_L}$ and $T=(k_{\mathrm B}\beta)^{-1}$, so its inequality rearranges to $S_{Q_L}-\beta\omega(H_{Q_L})\le\log Z_{Q_L}(\beta)$. Divide by $L^d$ and use [F1]–[F2] to obtain $s(\omega)-\beta u_\Phi(\omega)\le p_\Phi(\beta)$. This is conditional on the stated finite-dimensional inequality [L1]. [F1, F2, F5, L1, algebra]

1.2 For each positive integer $\ell$, let $Q_\ell$ be one block, $H_\ell=H_{Q_\ell}$, and $\rho_\ell=e^{-\beta H_\ell}/Z_{Q_\ell}(\beta)$. Tile $\mathbb Z^d$ by blocks $B_k=\ell k+\{0,\ldots,\ell-1\}^d$, $k\in\mathbb Z^d$. For a finite region $\Lambda$, set $\rho_\Lambda=\bigotimes_{k:B_k\cap\Lambda\ne\varnothing}\operatorname{Tr}_{B_k\setminus\Lambda}(\rho_\ell^{(k)})$, where $\rho_\ell^{(k)}$ is the translated copy on $B_k$. This is a finite product; for $\Lambda=\varnothing$ the empty tensor product is the scalar unit density. Each nonempty block marginal is positive trace-one by [F3]–[F5]. [F1, F3, F4, F5, F6, F7, construct]

2.1 If $\Lambda\subseteq\Lambda'$, then within each block the partial trace of $\operatorname{Tr}_{B_k\setminus\Lambda'}\rho_\ell^{(k)}$ over $(B_k\cap\Lambda')\setminus\Lambda$ equals $\operatorname{Tr}_{B_k\setminus\Lambda}\rho_\ell^{(k)}$: the coordinate formula in [F3] sums the same finite indices in either order. A block meeting $\Lambda'$ but not $\Lambda$ is traced over completely and contributes $\operatorname{Tr}(\rho_\ell^{(k)})=1$. The partial trace of a tensor product factors by the same finite sums, so $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'})=\rho_\Lambda$. Thus the local density family is consistent, and [L3] extends it to a state $\eta_\ell$ on $\mathcal A$. [A1, F3, L3, step 1.2, algebra]

3.1 The state $\eta_\ell$ is invariant under shifts in $\ell\mathbb Z^d$ because these shifts permute identical block factors, using the covariance and action law [F6]–[F7]. Average its $\ell^d$ translates over residues $r\in\{0,\ldots,\ell-1\}^d$ to obtain $\omega_\ell=\ell^{-d}\sum_r\eta_\ell\circ\tau_r$. The group law in [F6] makes each lattice translation permute the residue classes modulo $\ell$, so $\omega_\ell\in\mathcal S_{\mathrm{inv}}$. [A1, F1, F2, F6, F7, step 2.1, construct]

4.1 For each fixed phase $r$, the restriction of $\eta_\ell\circ\tau_r$ to $Q_L$ is a tensor product of full block densities and partial-block marginals. In each coordinate, $Q_L$ contains $L/\ell+O(1)$ full intervals of length $\ell$, so the number of full blocks is $L^d/\ell^d+O_\ell(L^{d-1})$. Entropy additivity in [L2] gives the full-block contribution, while every partial marginal has nonnegative entropy by the opening finite-density spectral calculation in the proof of [F2]; hence $\liminf_{L\to\infty}S_{Q_L}(\eta_\ell\circ\tau_r)/L^d\ge s(\rho_\ell)/\ell^d$. At each finite $L$, concavity in [L2] gives $S_{Q_L}(\omega_\ell)\ge\ell^{-d}\sum_r S_{Q_L}(\eta_\ell\circ\tau_r)$. Divide by $L^d$, take the limit on the invariant left side using [F2], and use the finite number of phases to obtain $s(\omega_\ell)\ge s(\rho_\ell)/\ell^d$. [A2, L2, F2, F5, step 3.1, algebra]

5.1 Put $r=\lceil R\rceil$. By the phase average and translation covariance [F7], $u_\Phi(\omega_\ell)=\ell^{-d}\sum_{x\in Q_\ell}\sum_{S\in\mathscr S_\Phi}\eta_\ell(\Phi(S+x))$. Because each anchored shape contains $0$, the terms with $S+x\subseteq Q_\ell$ sum exactly to $\operatorname{Tr}(\rho_\ell H_\ell)$. Every remaining pair $(S,x)$ has $x\in D_{\ell,r}:=\{y\in Q_\ell:\operatorname{dist}_\infty(y,\mathbb Z^d\setminus Q_\ell)\le r\}$, since the support contains $x$ and has diameter at most $R$. If $r=0$, no support crosses a block face and $D_{\ell,0}=\varnothing$. If $r\ge1$, a union bound over the $2d$ faces gives $|D_{\ell,r}|\le2dr\ell^{d-1}$. Terms anchored in these layers may use partial block marginals of $\eta_\ell$; those marginals are positive trace-one by steps 1.2–3.1, and [F5] gives $|\eta_\ell(A)|\le\|A\|$ for each local term. At each anchor the sum of term norms is at most $J_\Phi\le\kappa$ by [F8]. Hence $|u_\Phi(\omega_\ell)-\operatorname{Tr}(\rho_\ell H_\ell)/\ell^d|\le2dr\kappa/\ell$. By the equality case of [L1], $s(\rho_\ell)-\beta\operatorname{Tr}(\rho_\ell H_\ell)=\log Z_{Q_\ell}(\beta)$. Hence $s(\omega_\ell)-\beta u_\Phi(\omega_\ell)\ge p_{Q_\ell}(\beta)-2\beta dr\kappa/\ell$. [F1, F5, F7, F8, L1, step 1.2, step 2.1, step 3.1, step 4.1, algebra]

6.1 Take any sequence of positive integers $\ell_j\to\infty$. By [F2], a subsequence of $\omega_{\ell_j}$ converges pointwise to some invariant algebraic state $\omega_*$. The right side of step 5.1 tends to $p_\Phi(\beta)$ by [F1], while step 1.1 bounds every variational value above by $p_\Phi(\beta)$. Thus the sequence of variational values converges to $p_\Phi(\beta)$. Upper semicontinuity of $s$ and continuity of $u_\Phi$ from [F2] imply $s(\omega_*)-\beta u_\Phi(\omega_*)\ge p_\Phi(\beta)$; step 1.1 gives the reverse inequality. Therefore equality is attained, proving the maximum formula. [A1, A2, F1, F2, L2, step 1.1, step 5.1, algebra] ∎
