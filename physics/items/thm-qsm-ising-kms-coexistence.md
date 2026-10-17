---
id: thm-qsm-ising-kms-coexistence
kind: theorem
title: Two-dimensional diagonal quantum Ising KMS coexistence
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - thm-qsm-diagonal-kms-dlr-bijection
  - def-qsm-diagonal-ising-interaction
  - lem-qsm-diagonal-ising-specification-consistency
  - def-qsm-local-spin-algebras
  - def-qsm-translation-invariant-spin-interaction
  - def-csm-finite-range-lattice-interaction
  - thm-csm-lattice-van-hove-pressure
  - thm-csm-ising-low-temperature-coexistence
  - thm-csm-ising-coexistence-pressure-cusp
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  thm-qsm-diagonal-kms-dlr-bijection: mathematical-premise
  def-qsm-diagonal-ising-interaction: mathematical-premise
  lem-qsm-diagonal-ising-specification-consistency: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  def-csm-finite-range-lattice-interaction: mathematical-premise
  thm-csm-lattice-van-hove-pressure: mathematical-premise
  thm-csm-ising-low-temperature-coexistence: mathematical-premise
  thm-csm-ising-coexistence-pressure-cusp: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §3.4, printed pp. 74–78, for the full-algebra KMS framework and finite Gibbs states.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 31–43 and 52–55, for DLR measures, the Peierls bound, and coexistence.
---

## Statement

Assume Countable Choice, the finite-matrix C*-identity, $d=2$, uniform nearest-neighbor coupling $J>0$, zero field, $\beta J\geq2$, and $\hbar>0$, in the diagonal spin-$\tfrac12$ model of [[def-qsm-diagonal-ising-interaction]]. Let $\tau_k$ be the spatial translation automorphisms of [[def-qsm-translation-invariant-spin-interaction]]; a state is **translation-invariant** when $\omega(\tau_k(A))=\omega(A)$ for every local $A$ and $k\in\mathbb Z^2$. Then there are two distinct translation-invariant full-algebra $\beta$-KMS states $\omega_+$ and $\omega_-$ with
$$\omega_+(Z_i)\geq m_*>0,\qquad \omega_-(Z_i)\leq-m_*<0\quad(i\in\mathbb Z^2),$$
where one may take $m_*=1-2\delta(\beta J)$, $\delta(K)=\frac43\,\frac{r^4(5-4r)}{(1-r)^2}$, and $r=3e^{-2K}$. This conservative bound does not assert extremality or that $\beta J=2$ is critical.

For the same uniform model with field parameter $h_i=h$, let
$$p_Q(h):=\lim_{n\to\infty}\frac{1}{|\Lambda_n|}\log\operatorname{Tr}_{\Lambda_n}\!\left(e^{-\beta H_{\Lambda_n}(h)}\right),\qquad \Lambda_n=[-n,n]^2,$$
the dimensionless pressure per site along cubic boxes. This limit is the corresponding classical CSM pressure. It is not differentiable at $h=0$; for every $h>0$ its secant slope from zero is at least $\beta m_*$, and for every $h<0$ it is at most $-\beta m_*$. These are exact consequences of the stated diagonal model and the CSM suppliers, not empirical material claims.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix C*-identity, the two-dimensional nearest-neighbor Ising model, $J>0$, zero field for coexistence, $\beta J\geq2$, $\hbar>0$, and the finite-range pressure and KMS–DLR suppliers.

[A1] Countable Choice is the exact assumption of the CSM DLR construction ([[def-countable-choice]]).

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies the local finite-matrix C*-identity used by the QSM KMS dynamics. Its current batch-36 carrier is draft and is used conditionally.

[F1] [[thm-csm-ising-low-temperature-coexistence]] states that for this two-dimensional model and $\beta J\geq2$ there are translation-stationary DLR measures with one-site magnetizations at least $m_*>0$ and at most $-m_*$. Its current batch-27 carrier is draft and authoring-ready; independent proof acceptance is not asserted.

[F2] [[thm-qsm-diagonal-kms-dlr-bijection]] is the affine bijection for the same diagonal model, including its full matrix algebra, under Countable Choice and [A2]. Its current proof is conditional on the inspected draft dependencies in its own Facts & Assumptions.

[F3] [[def-qsm-diagonal-ising-interaction]] defines $H_\Lambda(h)$ as the free-boundary diagonal matrix with one term per internal unordered pair and one field term per site.

[F4] [[def-qsm-local-spin-algebras]] defines the finite spin Hilbert space, local matrix algebra, product basis, and ordinary finite trace used in $p_Q(h)$.

[F5] [[def-csm-finite-range-lattice-interaction]] uses the free-boundary energy from translated finite shapes, each translated term counted once.

[F6] [[thm-csm-lattice-van-hove-pressure]] states that the free-boundary dimensionless pressure along cubes converges to the finite-range CSM pressure per site.

[F7] [[thm-csm-ising-coexistence-pressure-cusp]] states that for the CSM model at $\beta J\geq2$, the pressure $p(h)$ is nondifferentiable at zero and has positive/negative secant slopes bounded below by $\beta m_*$ and above by $-\beta m_*$. Its current batch-27 carrier is draft and authoring-ready.

[F8] [[def-qsm-translation-invariant-spin-interaction]] defines the spatial translation $\tau_k$ on local operators by unitary relabeling of product-basis vectors, proves it is independent of localization and isometric, and extends it to an automorphism of the quasi-local completion. Its current batch-39 carrier is used at that exact interface.

[F9] [[lem-qsm-diagonal-ising-specification-consistency]] states that in the translation-invariant pair-coupling subcase, one singleton field shape and one pair shape for each displacement pair $\{v,-v\}$ reproduce the same conditional and finite-volume energies under the CSM translated-shape convention. Its current batch-42 draft proof is used conditionally.

## Proof

**Proof technique:** Transfer the CSM coexistence measures through the KMS–DLR bijection and identify the diagonal quantum trace with the classical partition sum.

**Given:** [A1]–[A2], [F1]–[F9], $J>0$, $h=0$, $\beta J\geq2$, $\hbar>0$, and the stated finite-range conventions.

1.1 Let $\mu_+,\mu_-$ be the translation-stationary DLR measures from [F1]. By the bijection [F2], each has a unique associated full-algebra $\beta$-KMS state $\omega_{\mu_\pm}$. Since $Z_i e_\sigma=\sigma_i e_\sigma$, the diagonal lift gives $\omega_{\mu_\pm}(Z_i)=\int \sigma_i\,d\mu_\pm=\mu_\pm(\sigma_i)$, so the magnetization bounds hold and the states are distinct. For local $A\in\mathcal A_\Lambda$, the basis relabeling in [F8] gives $\operatorname{diag}(\tau_k(A))(\sigma)=\operatorname{diag}(A)(T_k\sigma)$, where $(T_k\sigma)_i=\sigma_{i+k}$. Stationarity means $(T_k)_*\mu_\pm=\mu_\pm$, so the lift formula gives $\omega_{\mu_\pm}(\tau_k(A))=\omega_{\mu_\pm}(A)$. Density of local observables and continuity of both the state and $\tau_k$ extend the equality to all $A\in\mathcal A$. [A1, A2, F1, F2, F8, given, algebra]

1.2 For a uniform field parameter $h$, the finite matrix $H_{\Lambda_n}(h)$ is diagonal in the joint $Z_i$ eigenbasis. Its eigenvalue on each spin configuration $\sigma_{\Lambda_n}$ is exactly the CSM free-boundary energy $H_{\Lambda_n}^{\rm free}(\sigma_{\Lambda_n})$: [F9] identifies the translation-invariant pair energy with one CSM shape per unordered displacement pair, and [F3] counts each internal pair and site field once, matching [F5]. The ordinary trace is the sum over this product basis by [F4]. Therefore $$\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}(h)})=\sum_{\sigma_{\Lambda_n}\in\{-1,+1\}^{\Lambda_n}}e^{-\beta H_{\Lambda_n}^{\rm free}(\sigma_{\Lambda_n})}$$ for every $n$ and real $h$. By [F6], the limit defining $p_Q(h)$ exists and equals the CSM pressure $p(h)$. [A2, F3, F4, F5, F6, F9, algebra]

2.1 Applying [F7] to the pressure equality from step 1.2 gives the asserted secant-slope bounds and nondifferentiability at $h=0$. The coexistence threshold remains the sufficient $\beta J\geq2$ from [F1]; no critical-point or extremality claim is used. [A1, A2, F1, F7, step 1.2, algebra] ∎

## Remarks

The infinite-volume phase conclusion depends on the full quantum-to-classical DLR correspondence, not on uniqueness of each finite Gibbs matrix. The proof is conditional on the current draft CSM and QSM carriers listed in Facts & Assumptions. It gives no measured transition temperature, material identification, or experimental evidence.

