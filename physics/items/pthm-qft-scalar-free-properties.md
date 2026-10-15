---
id: pthm-qft-scalar-free-properties
kind: physics-theorem
title: Scalar distribution, covariance, locality and spectrum
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 8
deps:
  - post-qft-free-field-model
  - def-qft-free-scalar-model
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
  - lem-qft-second-quantized-spectrum
  - lem-qft-scalar-local-weyl-algebra
dependency_roles:
  post-qft-free-field-model: physical-assumption
  def-qft-free-scalar-model: formulation-prerequisite
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  lem-qft-scalar-local-weyl-algebra: mathematical-premise
physical_scope: "Conditional properties of the selected four-dimensional real scalar free Fock model: the smeared Klein–Gordon field, proper orthochronous Poincare covariance, vacuum and forward-cone spectrum, exact mass gap, and isotony and spacelike commutativity of bounded local Weyl algebras."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
      locator: "Complete Chapter 2 HTML; §§2.2–2.4 on free scalar modes, vacuum and Fock states; §2.6.1 on spacelike commutativity; §2.7 on the free scalar vacuum two-point function, including printed pp. 23–32, 35–40, and 56–58."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §3 Canonical Quantization of Scalar Fields"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page book draft; printed pp. 36–42, scalar action, mass-shell measure, mode normalization, canonical commutators and Hamiltonian."
---

## Statement

Assume the scalar model adoption planned in
[[post-qft-free-field-model]] and Countable Choice
[[def-countable-choice]]. Let $\mu\ge0$ and use the model, shell, field,
vacuum, and units of [[def-qft-free-scalar-model]] and
[[def-qft-scalar-mass-shell]]. These are conditional model deductions, with no
empirical premise.

For every Schwartz test $f$, $\Phi_\mu(f)$ is defined on
$\mathcal D_{\mathrm{fin}}$; for real $f$ it is symmetric and essentially
self-adjoint there. Distributionally,
$\Phi_\mu((\Box-\mu^2)f)=0$. The Fock lift of the proper orthochronous
Poincare action is unitary, leaves $\Omega$ invariant, and implements
covariance of the smeared field. For real Schwartz tests the vacuum
two-point form is $\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle=\langle K_\mu f,K_\mu g\rangle_2$, and it is nonnegative when $g=f$. The
joint spectrum of spacetime translations is contained in the closed forward
cone.

For real compactly supported smooth tests with pairwise spacelike-separated
supports, the smeared fields commute on $\mathcal D_{\mathrm{fin}}$. The
bounded local Weyl algebras are isotonic and algebras for spacelike-separated
regions commute. The physical Hamiltonian is self-adjoint on the exact
multiplier domain in [[def-qft-free-scalar-model]], is nonnegative, and has
zero-energy eigenspace $\ker H_\mu^{\mathrm{phys}}=\mathbb C\Omega$.
Thus its normalized zero-energy vectors are $e^{i\theta}\Omega$ for
$\theta\in\mathbb R$. If $\mu>0$, the infimum of its
positive spectrum is $\hbar c\mu=m_{\mathrm{rest,SI}}c^2$. If $\mu=0$, its
positive spectrum has no gap above zero.

## Facts & Assumptions

**Given:** The QFT-F01 scalar model adoption and Countable Choice, with the
exact inspected mathematical interfaces below.

[A1] [[post-qft-free-field-model]]: the selected real spin-zero scalar branch
adopts the canonical scalar action, bosonic symmetric-Fock representation,
and zero-particle vacuum. This physical premise is conditional and its current
carrier remains draft. Its current Step 1 record says `ready` for authoring;
that is not independent review, gate acceptance, empirical validation, or
publication. The postulate's stated action-to-equation supplier is not used
here; step 1.2 derives the field equation directly from the mass-shell
construction.

[A2] [[def-countable-choice]]: Countable Choice is the choice strength used by
the inspected Fock and Fourier suppliers.

[F1] [[def-qft-free-scalar-model]]: for $f\in\mathcal S(\mathbb R^4)$,
the complex-linear scalar field is defined on $\mathcal D_{\mathrm{fin}}$ by
$\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f)$.

[F2] [[def-qft-free-scalar-model]]: the physical Hamiltonian is
$H_\mu^{\mathrm{phys}}=\hbar c\,d\Gamma_s(\omega_\mu)$ on the stated exact
maximal multiplier domain.

[F3] [[lem-qft-smeared-free-scalar]]: for real $f$, the field is symmetric
and essentially self-adjoint on $\mathcal D_{\mathrm{fin}}$; its
self-adjoint closure is the closed Segal-field generator at
$\sqrt2K_\mu f$, and the field on $\mathcal D_{\mathrm{fin}}$ is its
restriction.

[F4] [[lem-qft-smeared-free-scalar]]: the vacuum two-point function is
$\langle K_\mu\overline f,K_\mu g\rangle_2$. For complex $f$,
conjugating the first test gives the nonnegative value
$\langle\Omega,\Phi_\mu(\overline f)\Phi_\mu(f)\Omega\rangle=\|K_\mu f\|_2^2$;
for real $f$ the ordinary diagonal $g=f$ has this same nonnegative value.

[F5] [[lem-qft-smeared-free-scalar]]: the Fock lift implements the affine
Poincare covariance of the smeared field and bounded Weyl operators.

[F6] [[lem-qft-smeared-free-scalar]]: the translation spectral measure has
one-particle vector $(\omega_\mu(\mathbf k),-\mathbf k)$ and support in the
closed forward cone.

[F7] [[lem-qft-scalar-causal-commutator]]: the commutator distribution has
support in the closed causal cone and
$[\Phi_\mu(f),\Phi_\mu(g)]=-i\Delta_\mu(f,g)I$ on
$\mathcal D_{\mathrm{fin}}$.

[F8] [[lem-qft-second-quantized-spectrum]]: real measurable one-particle
multipliers induce self-adjoint second-quantized multipliers on their exact
square-integrability domains, with the sector-sum joint spectral measure.

[F9] [[lem-qft-scalar-local-weyl-algebra]]: local algebras are the norm-closed
unital algebras generated by bounded Weyl operators of real compact tests;
they are isotonic and commute for spacelike-separated regions.

[F10] [[def-qft-scalar-mass-shell]]: $\omega_\mu(\mathbf k)^2=
|\mathbf k|^2+\mu^2$ and
$d\nu_\mu=d^3\mathbf k/((2\pi)^3\,2\omega_\mu(\mathbf k))$, with the
massless apex omitted as a null set.

## Proof

**Given:** [A1]–[A2] and [F1]–[F10].

1.1 The adopted real scalar branch and the field map on
$\mathcal D_{\mathrm{fin}}$ are exactly those of [A1] and [F1]. The field is
complex-linear in $f$: conjugation of $f$ followed by the conjugate-linear
annihilator makes the first term linear, and $K_\mu$ and creation are linear
in the second term. The field exists on the common dense finite-particle
domain by the inspected mathematical construction [F3]. [A1, A2, F1, F3, given]

1.2 For a Schwartz test, integration by parts transfers $\Box-\mu^2$ from
$f$ to the shell exponential in $K_\mu((\Box-\mu^2)f)$. Schwartz decay
annuls every boundary term. On the shell,
$(\Box-\mu^2)e^{i(\omega_\mu x^0-\mathbf k\cdot\mathbf x)}
=(\omega_\mu^2-|\mathbf k|^2-\mu^2)e^{i(\omega_\mu x^0-\mathbf k\cdot\mathbf x)}
=0$ by [F10]. The operator also has real coefficients, so the same equality
holds for $\overline f$; both creation and annihilation coefficients in
$\Phi_\mu((\Box-\mu^2)f)$ vanish. [F1, F10, algebra]

1.3 The vacuum two-point formula and positivity are [F4]. The proper
orthochronous Poincare covariance and invariant vacuum follow from the Fock
lift in [F5]. Both use the same shell and pairing conventions as [F1], so
no additional transformation convention is introduced. [F1, F4, F5, given]

1.4 By [F7], the commutator of real smeared fields is the causal
commutator pairing; its value is zero when every support difference is
spacelike. [F9] then gives commutation of the bounded Weyl generators for
the two regions. Finite sums and products preserve cross-commutation, and
operator-norm limits preserve it because multiplication of bounded operators
is norm-continuous. Isotony follows from inclusion of the real compact-test
generator sets, also as stated in [F9]. [F7, F9, given, algebra]

1.5 Apply [F8] on each symmetric sector with multiplier
$\hbar c\sum_{r=1}^n\omega_\mu(\mathbf k_r)$ and zero vacuum multiplier.
This gives the exact self-adjoint domain stated in [F2]. Every multiplier is
nonnegative. The translation-spectrum conclusion in [F6] places the joint
spectrum in the closed forward cone. [F2, F6, F8, given]

2.1 On every sector $n\ge1$, the energy multiplier is positive almost
everywhere: for $\mu>0$ each $\omega_\mu\ge\mu$, while for $\mu=0$ its only
zero is the omitted shell apex. Thus the zero-energy eigenspace is exactly
the vacuum sector $\mathbb C\Omega$; its unit vectors are precisely
$e^{i\theta}\Omega$, $\theta\in\mathbb R$. If $\mu>0$, all positive-sector multipliers are at least
$\hbar c\mu$. For any $\epsilon>0$, choose $r>0$ with
$\hbar c(\sqrt{\mu^2+r^2}-\mu)<\epsilon$. The ball $|\mathbf k|<r$ has
finite positive $d\nu_\mu$ measure by [F10]; its normalized indicator is a
one-particle vector with energy in
$[\hbar c\mu,\hbar c\sqrt{\mu^2+r^2}]$. Hence the positive spectral infimum
is $\hbar c\mu$. For $\mu=0$, every annulus
$r/2<|\mathbf k|<r$ has finite positive $d\nu_0$ measure. Its normalized
indicator has energy in $(0,\hbar c r)$, so positive spectral values occur
arbitrarily close to zero. For $\mu>0$, the unit conversion in the model
definition gives $\hbar c\mu=m_{\mathrm{rest,SI}}c^2$. [F2, F8, F10, step 1.5, construct, algebra] ∎
