---
id: thm-qsm-diagonal-kms-dlr-bijection
kind: theorem
title: Full-algebra quantum Ising KMS–DLR correspondence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-diagonal-ising-interaction
  - def-qsm-local-spin-algebras
  - lem-qsm-diagonal-ising-specification-consistency
  - lem-qsm-commuting-local-dynamics
  - lem-qsm-kms-diagonal-reduction
  - def-qsm-kms-state
  - lem-qsm-kms-strip-uniqueness
  - thm-qsm-finite-kms-gibbs-characterization
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-matrix-state-calculus
  - lem-csm-lattice-product-and-measure-compactness
  - def-csm-lattice-gibbs-specification
  - def-countable-choice
  - thm-dynkin-pi-lambda
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-qsm-finite-range-spin-dynamics
dependency_roles:
  def-qsm-diagonal-ising-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-diagonal-ising-specification-consistency: mathematical-premise
  lem-qsm-commuting-local-dynamics: mathematical-premise
  lem-qsm-kms-diagonal-reduction: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  thm-qsm-finite-kms-gibbs-characterization: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-csm-lattice-product-and-measure-compactness: mathematical-premise
  def-csm-lattice-gibbs-specification: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §3.4, printed pp. 74–78, for the KMS strip and finite Gibbs/KMS calculation; §§3.2–3.3 for local algebras and dynamics.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14, for the bounded analytic-strip KMS condition and time-rescaling convention.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 6, PDF pp. 265–289, for finite-alphabet DLR specifications and Ising uniqueness/coexistence context; Appendix, pp. 329–332, for cylinder measure construction.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24 and 31–55, for the Ising transfer matrix, DLR specification, and Peierls coexistence framework.
---

## Statement

Fix $d\geq1$, the inhomogeneous bounded finite-range diagonal spin-$\tfrac12$ Ising interaction of [[def-qsm-diagonal-ising-interaction]], $\beta>0$, $\hbar>0$, Countable Choice, and the finite-matrix C*-identity supplied by [[lem-qsm-finite-matrix-cstar-and-state-duality]]. Let $\mathcal A$ be its norm-completed quasi-local matrix algebra and let $\alpha_t$ be its thermodynamic dynamics. Let $\mathcal D_\beta$ be the set of Borel probability measures on $\{-1,+1\}^{\mathbb Z^d}$ fixed by every finite conditional kernel $\gamma_\Delta$ of the model. Let $\mathcal K_\beta$ be the set of $\beta$-KMS states for $\alpha$ on the full algebra $\mathcal A$, using the physical-time strip width $\beta\hbar$ seconds.

For a local matrix $A\in\mathcal A_\Lambda$, define its diagonal cylinder function by
$$\operatorname{diag}(A)(\sigma):=\langle A e_{\sigma|_\Lambda},e_{\sigma|_\Lambda}\rangle.$$
Then the map
$$\mathcal D_\beta\longrightarrow\mathcal K_\beta,\qquad \mu\longmapsto\omega_\mu,\qquad \omega_\mu(A):=\int\operatorname{diag}(A)(\sigma)\,d\mu(\sigma)\quad(A\in\mathcal A_{\mathrm{loc}}),$$
extends uniquely to an affine bijection from classical DLR measures to $\beta$-KMS states. The KMS conclusion holds on the full matrix algebra, including off-diagonal observables; no translation invariance is assumed for this correspondence.

## Facts & Assumptions

**Given:** The diagonal Ising interaction, its finite-range conditional kernels and dynamics, $\beta>0$, $\hbar>0$, Countable Choice, and the finite-matrix and infinite-product suppliers below. Every current run supplier is a draft carrier; its exact inspected statement and hypotheses are used conditionally, not as independent proof approval.

[A1] Countable Choice: every sequence of nonempty sets has a choice function ([[def-countable-choice]]). It is used only in extending the consistent local cylinder probabilities to a Borel probability and in the CSM uniqueness inputs.

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] states that each nonzero finite local operator algebra with its ordinary norm is a C*-algebra and that its positive functionals have density matrices. It is a current batch-36 draft supplier, used under its finite-dimensional hypotheses.

[A3] [[lem-qsm-matrix-state-calculus]] supplies finite-dimensional Hermitian diagonalization and cyclicity of the ordinary matrix trace. Its current batch-36 carrier is draft and used conditionally.

[F1] [[def-qsm-diagonal-ising-interaction]] fixes the local spin basis, the diagonal finite-range Hamiltonians, the real conditional energies $E_\Delta(\sigma_\Delta\mid\eta)$, the finite kernels $\gamma_\Delta$, and the SI energy convention.

[F2] [[lem-qsm-diagonal-ising-specification-consistency]] proves these finite-range kernels are normalized, proper, measurable, consistent, and therefore a specification, also for position-dependent coefficients.

[F3] [[lem-qsm-commuting-local-dynamics]] gives the exact local finite-matrix formula for $\alpha_t(A)$ and states that local diagonal observables are fixed. Its current batch-42 proof is conditional on the batch-39 draft dynamics supplier.

[F4] [[lem-qsm-kms-diagonal-reduction]] proves every $\beta$-KMS state has zero expectation on each off-diagonal local matrix unit.

[F5] [[def-qsm-kms-state]] defines a KMS correlation as bounded and continuous on the closed strip $0\leq\operatorname{Im}z\leq\beta\hbar$, holomorphic inside, with boundaries $\omega(A\alpha_t(B))$ and $\omega(\alpha_t(B)A)$.

[F6] [[lem-qsm-kms-strip-uniqueness]] gives the three-lines bound on that strip and uniqueness from the lower edge. Its current batch-41 carrier is draft and Step-1 authoring-ready, not independent proof approval.

[F7] [[thm-qsm-finite-kms-gibbs-characterization]] states that under the finite spectral-calculus clause [A3] and finite C*-algebra clause [A2], for every nonzero finite-dimensional Hilbert space and finite self-adjoint $H$, the unique $\beta$-KMS state for $e^{itH/\hbar}(\cdot)e^{-itH/\hbar}$ is $X\mapsto\operatorname{Tr}(e^{-\beta H}X)/\operatorname{Tr}(e^{-\beta H})$; its physical-time strip width is $\beta\hbar$. Its current batch-41 carrier is draft and Step-1 authoring-ready, not independent proof approval.

[F8] [[def-qsm-quasilocal-spin-algebra]] defines $\mathcal A_{\mathrm{loc}}$ as the directed union of the finite local matrix algebras and $\mathcal A$ as its norm completion, so local observables are norm dense.

[F9] [[lem-csm-lattice-product-and-measure-compactness]] states that under Countable Choice, every consistent normalized cylinder probability on a finite-alphabet product over $\mathbb Z^d$ extends uniquely to its cylinder-generated Borel probability measure. Its current batch-27 carrier is draft and Step-1 authoring-ready, not independent proof approval.

[F10] [[thm-dynkin-pi-lambda]] states that every lambda-system containing a pi-system contains the sigma-algebra generated by that pi-system.

[F11] [[thm-weierstrass-convergence-holomorphic-functions]] states that a locally uniform limit of holomorphic functions on an open subset of $\mathbb C$ is holomorphic there.

[F12] [[lem-qsm-quasilocal-completion]] states, under [A1] and [A2], that the local algebra completes to a unital C*-algebra with dense local observables. It is a current batch-38 draft supplier, used conditionally.

[F13] [[def-qsm-local-spin-algebras]] defines the finite spin Hilbert spaces, local matrix algebras, product bases, and ordinary finite traces used in the conditional Gibbs blocks. Its current batch-38 carrier is draft and Step-1 authoring-ready, not independent proof approval.

[F14] [[def-csm-lattice-gibbs-specification]] defines a DLR measure as a Borel probability fixed by every specification kernel: $\mu\gamma_\Delta(f)=\mu(f)$ for every bounded real-valued measurable $f$. Splitting real and imaginary parts gives the same integral identity for complex-valued $f$. Its batch-27 draft carrier is used at that exact definition.

[F15] [[thm-qsm-finite-range-spin-dynamics]] supplies the thermodynamic dynamics as a strongly continuous isometric $*$-automorphism group under Countable Choice and the finite-matrix $C^*$-identity. Its current batch-39 carrier is draft and used conditionally.

## Proof

**Proof technique:** Construct the classical law from KMS cylinder weights, derive its exact conditional probabilities with transition matrix units, and prove the converse by finite conditional Gibbs traces and norm approximation.

**Given:** [A1]–[A3], [F1]–[F15], a $\beta$-KMS state $\omega$ when proving the first direction, or a DLR measure $\mu$ when proving the converse.

1.1 For each finite cylinder assignment $\sigma$ on $\Lambda$, put $\mu_\omega(\sigma|_\Lambda)=\omega(P_\sigma)$, where $P_\sigma$ is the product-basis rank-one projection. Positivity of $\omega$ gives nonnegative weights, $\sum_\sigma P_\sigma=I_\Lambda$ gives normalization, and for $\Lambda\subset\Lambda'$ the identity $P_\sigma=\sum_{\tau|_\Lambda=\sigma}P_\tau$ gives consistency. By [A1] and [F9], these cylinder weights extend uniquely to a Borel probability measure $\mu_\omega$. [A1, F1, F9, F13, algebra]

1.2 Fix a finite $\Delta$, configurations $\sigma,\tau$ on $\Delta$, an assignment $\eta$ on $C_\Delta$, and a cylinder projection $Q_\zeta$ on finitely many sites outside $\Delta\cup C_\Delta$. Let $Q_\eta$ be the product projection for $\eta$ and let $E_{\sigma,\tau}$ be the local matrix unit sending $e_\tau$ to $e_\sigma$. Since every interaction term that meets $\Delta$ has all its exterior sites in $C_\Delta$, changing the $\Delta$ configuration from $\tau$ to $\sigma$ while keeping $\eta$ fixed changes the finite diagonal Hamiltonian by exactly $\Delta E:=E_\Delta(\sigma\mid\eta)-E_\Delta(\tau\mid\eta)$. Terms not meeting $\Delta$ commute with $E_{\sigma,\tau}Q_\eta$, so [F3] yields $\alpha_t(E_{\sigma,\tau}Q_\eta)=e^{it\Delta E/\hbar}E_{\sigma,\tau}Q_\eta$. [A1, A2, F1, F3, algebra]

1.3 For a complex-valued cylinder function, define its integral as the real integral of its real part plus $i$ times the real integral of its imaginary part. For a DLR measure $\mu$, define $\omega_\mu(A)=\int\langle A e_{\sigma|_\Lambda},e_{\sigma|_\Lambda}\rangle\,d\mu(\sigma)$ for $A\in\mathcal A_\Lambda$, using the inner product linear in its first argument from [F13]. The value is independent of enlarging $\Lambda$ because the added factors are identities. It is linear, equals $1$ on the identity, and $\omega_\mu(A^*A)=\int\|Ae_{\sigma|_\Lambda}\|^2d\mu(\sigma)\geq0$; Cauchy–Schwarz gives $|\omega_\mu(A)|\leq\|A\|$. Hence it defines a bounded positive normalized functional on $\mathcal A_{\mathrm{loc}}$. If local $A_n\to A$ in the completion, continuity of product and adjoint from [F12] gives $A_n^*A_n\to A^*A$, while each $\omega_\mu(A_n^*A_n)\geq0$; the continuous extension is therefore positive and normalized and is a state. [A2, F1, F8, F12, F13, given, algebra]

2.1 Apply [F5] to $A=E_{\tau,\sigma}Q_\eta Q_\zeta$ and $B=E_{\sigma,\tau}Q_\eta$. The lower edge is $e^{it\Delta E/\hbar}\omega(P_\tau Q_\eta Q_\zeta)$. The function $g(z)=e^{iz\Delta E/\hbar}\omega(P_\tau Q_\eta Q_\zeta)$ is entire and bounded on the closed strip because $\Delta E$ is real and $0\leq\operatorname{Im}z\leq\beta\hbar$; it has the same lower edge. By [F6], $g$ is the KMS function, and its upper edge equals the reversed product boundary from [F5]. At $t=0$ this gives $$\mu_\omega(P_\sigma Q_\eta Q_\zeta)=e^{-\beta\Delta E}\mu_\omega(P_\tau Q_\eta Q_\zeta).$$ [F5, F6, step 1.2, algebra]

2.2 Let $A,B$ be local and choose finite $\Delta$ containing their supports and every interaction support that meets the support of $B$. For each boundary assignment $\eta$ on $C_\Delta$, let $H_\Delta^\eta$ be the diagonal matrix with eigenvalues $E_\Delta(\sigma\mid\eta)$ and let $\rho_\Delta^\eta=e^{-\beta H_\Delta^\eta}/Z_\Delta^\eta$. For bounded real measurable $f$, the DLR fixed-point equation [F14] gives $\mu(f)=\int\gamma_\Delta(f\mid\xi)d\mu(\xi)$; extend this identity to complex $f$ by real and imaginary parts. If $D$ is exterior-measurable, properness gives $\gamma_\Delta(\mathbf1_D f\mid\xi)=\mathbf1_D(\xi)\gamma_\Delta(f\mid\xi)$. Since the kernel depends on the exterior only through $C_\Delta$, it follows that for every finite-boundary assignment $\eta$, $$\int_{Q_\eta} f\,d\mu=\mu(Q_\eta)\sum_{\sigma_\Delta}\gamma_\Delta(\sigma_\Delta\mid\eta)f(\sigma_\Delta\eta).$$ Apply this identity to the diagonal cylinder function $f=\operatorname{diag}(A e^{itH_\Delta^\eta/\hbar}Be^{-itH_\Delta^\eta/\hbar})$. The finite sum of diagonal entries is the trace against $\rho_\Delta^\eta$, so $$\int_{Q_\eta}\operatorname{diag}\!\left(A e^{itH_\Delta^\eta/\hbar}Be^{-itH_\Delta^\eta/\hbar}\right)d\mu=\mu(Q_\eta)\operatorname{Tr}_\Delta\!\left(\rho_\Delta^\eta A e^{itH_\Delta^\eta/\hbar}Be^{-itH_\Delta^\eta/\hbar}\right).$$ Here the trace identity follows by summing $\gamma_\Delta(\sigma_\Delta\mid\eta)=e^{-\beta E_\Delta(\sigma_\Delta\mid\eta)}/Z_\Delta^\eta$ against the diagonal matrix coefficients. By [F3], on $Q_\eta$ the global local dynamics of $B$ equals conjugation by $H_\Delta^\eta$: terms in the global generator not meeting $\Delta$ commute with $B Q_\eta$, and the terms in $H_\Delta^\eta$ disjoint from the support of $B$ commute with $B$. Summing the displayed identities over the finitely many boundary assignments gives, for real $t$, $$\omega_\mu(A\alpha_t(B))=\sum_{\eta\in\{-1,+1\}^{C_\Delta}}\mu(Q_\eta)\operatorname{Tr}_\Delta\!\left(\rho_\Delta^\eta A e^{itH_\Delta^\eta/\hbar}Be^{-itH_\Delta^\eta/\hbar}\right).$$ [A1, A2, F1, F2, F3, F13, F14, step 1.3, algebra]

3.1 For fixed $\Delta,\eta,\zeta$, step 2.1 implies $e^{\beta E_\Delta(\sigma\mid\eta)}\mu_\omega(P_\sigma Q_\eta Q_\zeta)$ is constant as $\sigma$ varies. Summing over $\sigma$ and using $\sum_\sigma P_\sigma=I_\Delta$ shows that the constant is $\mu_\omega(Q_\eta Q_\zeta)/Z_\Delta^\eta$, including when this numerator is zero. Therefore $$\mu_\omega(P_\sigma Q_\eta Q_\zeta)=\gamma_\Delta(\sigma\mid\eta)\,\mu_\omega(Q_\eta Q_\zeta).$$ [F1, step 2.1, algebra]

3.2 For each $\eta$, define $F^\eta_{A,B}(z)=\operatorname{Tr}_\Delta(\rho_\Delta^\eta A e^{izH_\Delta^\eta/\hbar}Be^{-izH_\Delta^\eta/\hbar})$. By [F7] under [A2]–[A3], this is the finite Gibbs KMS strip function for $H_\Delta^\eta$ and the pair $A,B$; it is bounded and continuous on the closed strip, holomorphic inside, and has lower and upper boundaries given by the finite Gibbs traces in their indicated orders. The finite sum $\sum_\eta\mu(Q_\eta)F^\eta_{A,B}(z)$ has the same regularity and is bounded because the weights are nonnegative and sum to one. Step 2.2 identifies its boundaries with $\omega_\mu(A\alpha_t(B))$ and $\omega_\mu(\alpha_t(B)A)$, proving the KMS condition for local pairs. [A2, A3, F5, F7, step 2.2]

4.1 Every exterior cylinder event is a finite disjoint union of events $Q_\eta Q_\zeta$ after refining it to specify all spins in $C_\Delta$. Summing step 3.1 gives the conditional identity for each interior assignment and every exterior cylinder. Every full cylinder is a finite disjoint union of events $P_\sigma D_\sigma$ with $D_\sigma$ an exterior cylinder; properness in [F2] then gives $(\mu_\omega\gamma_\Delta)(P_\sigma D_\sigma)=\mu_\omega(P_\sigma D_\sigma)$, so the two probability measures agree on all full cylinders. The class of Borel sets on which they agree contains the whole space, is closed under relative complements of nested members, and under disjoint countable unions, so it is a lambda-system. Full cylinders together with $\varnothing$ and $X$ form a pi-system generating the Borel sigma-algebra. [F10] states that every lambda-system containing a pi-system contains its generated sigma-algebra, hence the two measures agree on that sigma-algebra. Thus $\mu_\omega\gamma_\Delta=\mu_\omega$ and $\mu_\omega\in\mathcal D_\beta$. [F2, F10, step 3.1, algebra]

4.2 For arbitrary $A,B\in\mathcal A$, choose local $A_n\to A$ and $B_n\to B$ using [F12], and let $F_n$ be their local-pair KMS functions from step 3.2. On each strip boundary, the difference $F_n-F_m$ is bounded by the state norm and the isometric automorphism property [F15] by quantities tending to zero, for example on the lower edge by $\|A_n-A_m\|\|B_n\|+\|A_m\|\|B_n-B_m\|$; the analogous upper-edge bound has the factors reversed. The three-lines bound [F6] makes $F_n$ uniformly Cauchy on the entire closed strip. Its uniform limit is bounded and continuous there, has the required two boundary values by norm continuity, and is holomorphic inside by [F11]. Thus $\omega_\mu\in\mathcal K_\beta$. [A2, F6, F11, F12, F15, step 3.2, algebra]

5.1 For a KMS state $\omega$, [F4] and [A2] make every local density matrix diagonal, so for local $A$ its value is $\sum_{\sigma|_\Lambda}\omega(P_\sigma)\langle A e_{\sigma|_\Lambda},e_{\sigma|_\Lambda}\rangle=\omega_{\mu_\omega}(A)$; density gives equality on $\mathcal A$. Conversely, $\omega_\mu(P_\sigma)=\mu(P_\sigma)$ for every cylinder, so uniqueness in [F9] makes $\mu\mapsto\omega_\mu$ injective. Steps 4.1 and 4.2 prove that the two maps take values in $\mathcal D_\beta$ and $\mathcal K_\beta$, and these identities show they are inverse affine maps. [A2, F4, F9, step 4.1, step 1.3, step 4.2, algebra] ∎

## Remarks

The correspondence is a mathematical result for this bounded finite-range diagonal model on the full quasi-local matrix algebra. It does not say that generic noncommuting KMS states are diagonal, and it makes no empirical claim about a material. Translation invariance is not needed for the bijection; it is imposed separately in the CSM uniqueness and coexistence specializations below.

