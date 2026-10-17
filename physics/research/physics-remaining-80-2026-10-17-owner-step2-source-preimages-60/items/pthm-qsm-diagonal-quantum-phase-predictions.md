---
id: pthm-qsm-diagonal-quantum-phase-predictions
kind: physics-theorem
title: Conditional quantum Ising uniqueness and phase predictions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: >-
  Conditional predictions for the spin-1/2 diagonal longitudinal Ising
  interaction on Z^d at T>0. High-temperature uniqueness, one-dimensional
  uniqueness, and the stated two-dimensional sufficient coexistence regime are
  separate model conclusions; transverse fields and actual material
  identification are excluded.
deps:
  - def-countable-choice
  - def-qsm-diagonal-ising-interaction
  - def-qsm-infinite-spin-physical-quantities
  - def-qsm-kms-state
  - def-qsm-translation-invariant-spin-interaction
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - post-qsm-infinite-spin-equilibrium
  - thm-qsm-chain-kms-uniqueness
  - thm-qsm-ising-high-temperature-kms-uniqueness
  - thm-qsm-ising-kms-coexistence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-diagonal-ising-interaction: mathematical-premise
  def-qsm-infinite-spin-physical-quantities: formulation-prerequisite
  def-qsm-kms-state: mathematical-premise
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  post-qsm-infinite-spin-equilibrium: physical-assumption
  thm-qsm-chain-kms-uniqueness: mathematical-premise
  thm-qsm-ising-high-temperature-kms-uniqueness: mathematical-premise
  thm-qsm-ising-kms-coexistence: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4 and diagonal Ising model discussion, printed pp. 74–78
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, printed pp. 13–14
      url: https://arxiv.org/pdf/math-ph/0107009
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24, 31–43, and 52–55.
empirical_premises: []
verification:
  precheck: pass
---

## Statement

Adopt the model and units of [[def-qsm-infinite-spin-physical-quantities]] and the equilibrium criterion of [[post-qsm-infinite-spin-equilibrium]]. Let $T>0$, $k_B>0$, and $\hbar>0$. Let $Z_i$ be the dimensionless Pauli matrix with eigenvalues $\pm1$ at site $i$, and let the diagonal spin-$\tfrac12$ Ising interaction of [[def-qsm-diagonal-ising-interaction]] have symmetric energy coefficients $J_{ij}=J_{ji}$ and fields $h_i$ in joules, finite range, and a uniform per-site bound. Thus
$$H_\Lambda=-\sum_{i\in\Lambda}h_iZ_i-\sum_{\{i,j\}\subseteq\Lambda}J_{ij}Z_iZ_j,$$
with each unordered internal pair counted once. Here $|i-j|_1:=\sum_{k=1}^d|i_k-j_k|$ is the lattice $\ell^1$ distance, and $\beta=(k_BT)^{-1}$ in $\mathrm{J}^{-1}$.

1. **Sufficient high-temperature uniqueness.** For translation-invariant symmetric pair couplings, a constant finite field $h_i=h$, and
$$\sup_{i\in\mathbb Z^d}\sum_{j\ne i}\tanh\!\left(\frac{|J_{ij}|}{k_BT}\right)<1,$$
the full quasi-local algebra has exactly one $\beta$-KMS state. In the homogeneous nearest-neighbor model this sufficient condition is $2d\tanh(|J|/(k_BT))<1$.

2. **One-dimensional uniqueness.** For $d=1$, uniform nearest-neighbor coupling $J\in\mathbb R$ and constant finite field $h$, every $T>0$ gives exactly one full-algebra $\beta$-KMS state.

3. **Two-dimensional sufficient coexistence.** For $d=2$, uniform nearest-neighbor ferromagnetic coupling $J>0$, zero field, and $T\le J/(2k_B)$, there are at least two distinct spatially translation-invariant full-algebra $\beta$-KMS states $\omega_+$ and $\omega_-$ with opposite nonzero dimensionless magnetizations $\omega_+(Z_i)\ge m_*>0$ and $\omega_-(Z_i)\le-m_*<0$. Here spatial translation invariance means $\omega(\tau_x(A))=\omega(A)$ for every local $A$ and $x\in\mathbb Z^2$, with $\tau_x$ from [[def-qsm-translation-invariant-spin-interaction]]. Put $K=\beta J$, $r=3e^{-2K}$, $\delta(K)=\frac43\frac{r^4(5-4r)}{(1-r)^2}$, and $m_*=1-2\delta(K)$. This is a sufficient coexistence bound; $T=J/(2k_B)$ is not asserted to be the critical temperature, the states are not asserted to be extremal, and no transverse-field result follows.

For the same two-dimensional model with uniform coupling $J$ and variable uniform longitudinal energy coefficient $h$, put
$$H_\Lambda(h)=-J\sum_{\substack{\{i,j\}\subseteq\Lambda\\|i-j|_1=1}}Z_iZ_j-h\sum_{i\in\Lambda}Z_i,$$
where each internal unordered nearest-neighbor pair is counted once. At fixed $\beta$, let $\Lambda_n=[-n,n]^2$ and define the dimensionless log-partition pressure per site
$$p_\beta(h):=\lim_{n\to\infty}\frac{1}{|\Lambda_n|}\log\operatorname{Tr}_{\Lambda_n}\!\left(e^{-\beta H_{\Lambda_n}(h)}\right).$$
Under the stated coexistence condition this limit exists, is not differentiable at $h=0$, and satisfies $(p_\beta(h)-p_\beta(0))/h\ge\beta m_*$ for every $h>0$ and $(p_\beta(h)-p_\beta(0))/h\le-\beta m_*$ for every $h<0$. The $p_\beta$ here is dimensionless per site, not a mechanical pressure in pascals.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix $C^*$-identity and finite-matrix state/density interface, the diagonal Ising interaction, $T>0$, $k_B>0$, $\hbar>0$, and the adopted physical spin-model interpretation.

[A1] Countable Choice, exactly as [[def-countable-choice]] states, is carried by the one-dimensional, high-temperature and coexistence suppliers.

[A2] The finite-matrix $C^*$-identity and positive normalized functional/density-matrix interface of [[lem-qsm-finite-matrix-cstar-and-state-duality]] are used by the full-algebra KMS suppliers at their stated conditional scope. Their current carriers are draft and authoring-ready; no independent proof acceptance is inferred.

[F1] [[def-qsm-diagonal-ising-interaction]]: $H_\Lambda$ has the displayed sign convention, counts each unordered pair once, and has conditional energies including every interaction term meeting the finite region.

[F2] [[def-qsm-infinite-spin-physical-quantities]]: $Z_i$ is dimensionless, $J_{ij}$ and $h_i$ are energy coefficients in joules, and $\beta=1/(k_BT)$.

[F3] [[post-qsm-infinite-spin-equilibrium]]: the model adopts the physical-time $\beta$-KMS criterion and local Born interpretation; it makes no relaxation or material-fit claim.

[F4] [[thm-qsm-ising-high-temperature-kms-uniqueness]]: under Countable Choice, the finite-matrix $C^*$-identity, translation-invariant symmetric finite-range pair coupling, constant finite field, and $\sup_i\sum_{j\ne i}\tanh(\beta|J_{ij}|)<1$, there is exactly one full-algebra $\beta$-KMS state. For homogeneous nearest-neighbor coupling the sufficient row sum is $2d\tanh(\beta|J|)$.

[F5] [[thm-qsm-chain-kms-uniqueness]]: for $d=1$, finite $J,h$, $\beta>0$, and the diagonal nearest-neighbor model, there is exactly one full-algebra $\beta$-KMS state.

[F6] [[thm-qsm-ising-kms-coexistence]]: for $d=2$, uniform nearest-neighbor $J>0$, zero field, $\beta J\ge2$, and its finite-range/choice inputs, there are two distinct translation-invariant full-algebra KMS states with one-site magnetizations at least $m_*$ and at most $-m_*$, where $m_*=1-2\delta(\beta J)$, $\delta(K)=\frac43\frac{r^4(5-4r)}{(1-r)^2}$, and $r=3e^{-2K}$. For uniform variable field $h$, the cubic-box dimensionless pressure limit $p_\beta(h)=\lim_n|\Lambda_n|^{-1}\log\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}(h)})$ is not differentiable at zero and its secant from zero is at least $\beta m_*$ for $h>0$ and at most $-\beta m_*$ for $h<0$. Its proof transfers the matching CSM DLR and pressure results through the full-algebra quantum correspondence.

## Proof

1.1 Since $J_{ij}$ and $h_i$ are energies and $\beta=(k_BT)^{-1}$, $\beta|J_{ij}|=|J_{ij}|/(k_BT)$ and $\beta J=J/(k_BT)$. The $2d$ nearest neighbours in the homogeneous model therefore give the row sum $2d\tanh(|J|/(k_BT))$. The low-temperature hypothesis $\beta J\ge2$ for $J>0$ is equivalent to $T\le J/(2k_B)$. [F1, F2, algebra]

2.1 Under the stated uniform finite-range diagonal model, if the strict row-sum condition holds, [F4] gives uniqueness; if $d=1$ with finite $J,h$ and $T>0$, then $\beta>0$ and [F5] gives uniqueness for every such temperature. These are separate sufficient statements, with no inference for a different interaction. [A1, A2, F1, F4, F5, step 1.1]

3.1 For the $d=2$ homogeneous ferromagnet with $h=0$ and $T\le J/(2k_B)$, step 1.1 gives $\beta J\ge2$, so [F6] supplies the two distinct translation-invariant KMS states and opposite nonzero magnetizations. For the associated pressure, [F6] gives right secants at least $\beta m_*>0$ and left secants at most $-\beta m_*<0$; since these bounds are separated, the derivative at zero cannot exist. The sufficient threshold does not identify a critical temperature or extremal-state classification. [A1, A2, F1, F2, F3, F6, step 1.1, algebra] ∎

## Remarks

These statements are conditional deductions from the adopted spin model and current mathematical supplier interfaces. High-temperature uniqueness is a sufficient influence bound, one-dimensional uniqueness holds at every positive model temperature, and the two-dimensional low-temperature bound only guarantees coexistence in the stated range. No interval of actual material parameters, experimental uncertainty, transverse field, or observed transition is asserted.


## Remarks

The conditional Ising conclusions use the units and interaction definitions from the physical-quantities item, but do not use its separate AC-dependent entropy-density clause. The phase suppliers carry Countable Choice and the stated finite-matrix interfaces; the physical definition records full AC only for the entropy-density construction. No empirical premise is used.
