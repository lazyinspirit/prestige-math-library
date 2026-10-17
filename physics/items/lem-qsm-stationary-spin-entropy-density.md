---
id: lem-qsm-stationary-spin-entropy-density
kind: lemma
title: Stationary quantum spin entropy and energy densities
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 9
deps:
  - def-qsm-translation-invariant-spin-interaction
  - def-qsm-infinite-algebraic-state
  - lem-qsm-quasilocal-completion
  - lem-qsm-matrix-state-calculus
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - def-countable-choice
  - def-axiom-of-choice
  - thm-qsm-finite-entropy-composition
  - lem-qsm-spin-state-compactness
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_roles:
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-qsm-finite-entropy-composition: mathematical-premise
  lem-qsm-spin-state-compactness: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Proposition 3.4.14–3.4.15 and surrounding text, pp. 78–81
      url: https://arxiv.org/pdf/1311.2717
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, pp. 332–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Statement

Use the finite-range model and translations of [[def-qsm-translation-invariant-spin-interaction]]. An algebraic state means a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ with $\omega(I)=1$ and $\omega(A^*A)\ge0$, as in [[def-qsm-infinite-algebraic-state]]. It is translation invariant if $\omega(\tau_x(A))=\omega(A)$ for every $x\in\mathbb Z^d$ and $A\in\mathcal A$. Fix the positive entropy-normalization constant $k_B>0$ used by [[thm-qsm-finite-entropy-composition]]; only division by this positive constant is needed to pass from that supplier's physical entropy to the dimensionless entropy here. Assume Countable Choice and the Axiom of Choice [A1]–[A2], and use the finite-entropy and state-compactness results [L1]–[L2] at their stated scopes.

For each positive integer $L$, let $Q_L=\{0,\ldots,L-1\}^d$, let $\rho_{Q_L}$ be the local density matrix of $\omega$, and set $S_{Q_L}(\omega)=-\operatorname{Tr}(\rho_{Q_L}\log\rho_{Q_L})$, with $0\log0=0$. Then
$$
s(\omega):=\lim_{L\to\infty}\frac{S_{Q_L}(\omega)}{L^d}=\inf_{\ell\in\mathbb N_{>0}}\frac{S_{Q_\ell}(\omega)}{\ell^d}
$$
exists. The energy density $u_\Phi(\omega):=\sum_{S\in\mathscr S_\Phi}\omega(\Phi(S))$ is finite and satisfies $\omega(H_{Q_L})/L^d\to u_\Phi(\omega)$. The translation-invariant state space is sequentially compact for pointwise convergence, $s$ is upper semicontinuous there, and $u_\Phi$ is continuous there. Entropy and energy density are dimensionless per site and joules per site, respectively, when $\Phi$ is an energy interaction.

## Facts & Assumptions

**Given:** $k_B>0$, the model of [[def-qsm-translation-invariant-spin-interaction]], the algebraic-state definition of [[def-qsm-infinite-algebraic-state]], and a translation-invariant algebraic state $\omega$.

[A1] Countable Choice as defined in [[def-countable-choice]], required by [[lem-qsm-quasilocal-completion]] and the pointwise compactness input [L2].

[A2] Assume the full Axiom of Choice [[def-axiom-of-choice]] for the finite-entropy input chain [L1]. The local finite-dimensional estimates below make no additional arbitrary-index selections.

[F1] [[def-qsm-translation-invariant-spin-interaction]]: each finite-volume Hamiltonian sums the translated finite shapes wholly contained in the volume, and the translations act isometrically on the norm completion.

[F2] [[def-qsm-infinite-algebraic-state]]: an algebraic state is a bounded normalized positive functional; under [A1], each finite restriction has a unique density matrix.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite positive matrices have an orthonormal eigenbasis with nonnegative eigenvalues.

[F4] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: on every nonzero finite matrix algebra, the ordinary operator norm satisfies $\|T^*T\|=\|T\|^2$, and each positive normalized linear functional has a unique positive trace-one density matrix whose trace-pairing functional has norm one. Its finite-dimensional proof makes no infinite-dimensional density representation claim.

[L1] [[thm-qsm-finite-entropy-composition]]: finite entropy is additive on tensor products, concave under finite mixing, and subadditive across disjoint tensor factors. Step 1.1 proves the nonnegativity bound needed below. Its current proof establishes these finite-dimensional properties using its listed finite partial-trace and trace-cross-log suppliers. The source entropy is $k_B$ times the dimensionless entropy used here; division by $k_B>0$ preserves the three stated inequalities.

[L2] [[lem-qsm-spin-state-compactness]]: under Countable Choice and its finite density/state interface, every sequence of algebraic states has a pointwise-convergent subsequence. Its current proof constructs the limit in the pointwise topology from consistent local densities.

## Proof

**Proof technique:** cube tiling, finite entropy subadditivity, and finite-range boundary counts.

**Given:** [A1]–[A2], [F1]–[F4], [L1]–[L2], and a translation-invariant algebraic state $\omega$.

1.1 Diagonalize a local density matrix $\rho$ on a region of $m$ sites using [F3], with eigenvalues $\lambda_j\ge0$ summing to one and matrix dimension $D=q^m$, as supplied by [F4]. Then $S(\rho)=-\sum_{\lambda_j>0}\lambda_j\log\lambda_j\ge0$. For each positive $\lambda_j$, the scalar inequality $-\log x\ge1-x$ at $x=(D\lambda_j)^{-1}$ gives $\lambda_j\log(D\lambda_j)\ge\lambda_j-D^{-1}$. Summing over the positive eigenvalues yields $\log D-S(\rho)\ge1-r/D\ge0$, where $r$ is the rank. Thus $0\le S(\rho)\le m\log q$. [F3, F4, algebra]

1.2 For each $S\in\mathscr S_\Phi$, let $N_S(L)$ count translations $x$ with $S+x\subseteq Q_L$. With $r=\lceil R\rceil$, $(L-2r)^d\le N_S(L)\le L^d$ for $L>2r$: every anchor at least $r$ sites from each face contains the whole support, and the anchor of every included term lies in $Q_L$. Translation invariance gives $\omega(\Phi(S+x))=\omega(\Phi(S))$. Therefore $\omega(H_{Q_L})/L^d=\sum_{S\in\mathscr S_\Phi}(N_S(L)/L^d)\omega(\Phi(S))\to\sum_{S\in\mathscr S_\Phi}\omega(\Phi(S))=u_\Phi(\omega)$. [F1, construct, algebra]

2.1 Fix $\ell\ge1$ and tile $Q_L$ by $N=\lfloor L/\ell\rfloor^d$ disjoint $\ell$-cubes and residual sites $E_L$, where $|E_L|\le d\ell L^{d-1}$. Repeated use of [L1] subadditivity gives $S_{Q_L}(\omega)\le N S_{Q_\ell}(\omega)+S_{E_L}(\omega)$. By step 1.1 the last term is at most $|E_L|\log q$; if $E_L=\varnothing$, its scalar local density has entropy zero. Dividing by $L^d$ and taking the upper limit gives $\limsup_L S_{Q_L}(\omega)/L^d\le S_{Q_\ell}(\omega)/\ell^d$. Every ratio is at least their infimum over $\ell$, so the limit exists and equals that infimum. [A2, F1, L1, step 1.1, algebra]

3.1 On a fixed finite region, pointwise convergence of algebraic states gives convergence of all matrix coefficients of their density matrices by [F2] and [F4], hence convergence in operator norm. Ordered eigenvalues are continuous in that norm: the finite-dimensional min-max formula follows from an ordered orthonormal eigenbasis, since any $k$-dimensional subspace meets the span of the last $D-k+1$ eigenvectors, while the span of the first $k$ realizes the reverse bound; each Rayleigh quotient changes by at most the operator norm of the matrix difference. The function $-x\log x$, extended by $0$ at $x=0$, is continuous on $[0,1]$, so each $S_{Q_\ell}(\omega)$ is continuous under pointwise convergence. By step 2.1, $s(\omega)$ is the infimum of these continuous normalized local entropies and is upper semicontinuous. The energy density is a finite sum of local state evaluations by [F1], so it is continuous. [F1, F2, F3, F4, step 2.1, algebra]

4.1 If a sequence of translation-invariant algebraic states converges pointwise to $\omega$, then for each fixed $x,A$ the equalities $\omega_n(\tau_x(A))=\omega_n(A)$ pass to the limit, so the invariant state set is closed. By [L2] every sequence in the full state space has a pointwise-convergent subsequence; the closed invariant subset is therefore sequentially compact. [A1, F1, F2, L2, algebra] ∎
