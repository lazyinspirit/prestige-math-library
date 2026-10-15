---
id: def-qft-free-scalar-model
kind: definition
title: Exact real scalar free model
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 7
deps:
  - post-qft-free-field-model
  - def-qft-framework-units
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - lem-qft-second-quantized-spectrum
  - lem-qft-smeared-free-scalar
dependency_roles:
  post-qft-free-field-model: physical-assumption
  def-qft-framework-units: formulation-prerequisite
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
physical_scope: "One real scalar species in four-dimensional flat Minkowski spacetime, with the adopted bosonic Fock representation, inverse-length parameter μ≥0, and exact vacuum-subtracted Hamiltonian ℏc dΓs(ωμ). This definition supplies no interacting term, regulator, point-field product, or empirical universality claim."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, University of Cambridge Part III lecture notes, Chapter 2, §§2.2–2.4, 2.6.1 and 2.7.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf"
      locator: "Complete 155-page author-hosted lecture notes; printed pp. 23–32 and 35–40."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §3 Canonical Quantization of Scalar Fields"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page book draft; printed pp. 36–42, scalar action, mass-shell measure, mode normalization, canonical commutators and Hamiltonian."
---

## Definition

Assume Countable Choice [[def-countable-choice]], as in the inspected Fock
construction.

Select the real-scalar branch of the QFT-F01 physical adoption
[[post-qft-free-field-model]]: one real spin-zero species with bosonic
statistics and the zero-particle vacuum. For a smooth real classical field
$\phi_{\mathrm n}:\mathbb R^4\to\mathbb R$ of canonical length degree $-1$,
that postulate adopts
$$
\frac{S_\phi}{\hbar}=-\frac12\int_{\mathbb R^4}
\left(\eta^{ab}\partial_a\phi_{\mathrm n}\partial_b\phi_{\mathrm n}
+\mu^2\phi_{\mathrm n}^2\right)\,d^4x.
$$
The species, statistics, state, and action are physical model inputs. The
present item fixes the exact flat-spacetime free Fock model to which the
later deductions apply.

Use the oriented and time-oriented Minkowski spacetime, signature
$\eta=\operatorname{diag}(-1,1,1,1)$, and length coordinates $x^0=ct$ and
$\mathbf x\in\mathbb R^3$ from [[def-qft-framework-units]]. Write
$\Box=-\partial_0^2+\sum_{j=1}^3\partial_j^2$. Choose an inverse-length
parameter $\mu\ge0$. When $\mu>0$, the corresponding SI rest mass is
$m_{\mathrm{rest,SI}}=\hbar\mu/c>0$; $\mu=0$ denotes the massless branch and
assigns no positive rest mass. For $\mathbf k\in\mathbb R^3$, put
$\omega_\mu(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$, with units
$\mathrm m^{-1}$.

Let $H_\mu^+$, $d\nu_\mu$, $H_\mu=L^2(H_\mu^+,d\nu_\mu;\mathbb C)$, and
$K_\mu:\mathcal S(\mathbb R^4)\to H_\mu$ be the future mass shell, measure,
one-particle Hilbert space, and Fourier restriction of
[[def-qft-scalar-mass-shell]]. In the massless case the null apex is omitted;
it has measure zero. The shell measure is
$d\nu_\mu=d^3\mathbf k/((2\pi)^3\,2\omega_\mu(\mathbf k))$.

Use the symmetric bosonic Fock space $\mathcal F_s(H_\mu)$, vacuum
$\Omega=(1,0,0,\ldots)$, and dense finite-particle domain
$\mathcal D_{\mathrm{fin}}$ from
[[def-qft-fock-and-test-spaces]]. The Fock pairing is linear in its second
variable. Creation $a^\dagger(h)$ is linear in $h$, while annihilation $a(h)$
is conjugate-linear in $h$. For $f\in\mathcal S(\mathbb R^4)$ define the
complex-linear smeared scalar field on $\mathcal D_{\mathrm{fin}}$ by

$$
\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f).
$$

For real $f$, this is the symmetric scalar field whose self-adjoint closure
and bounded Weyl functions are constructed in
[[lem-qft-smeared-free-scalar]]. A smeared field is a domain-qualified
operator-valued distribution; the item introduces no pointwise operator
$\Phi_\mu(x)$.

Define $d\Gamma_s(\omega_\mu)$ on the $n$-particle sector as multiplication
by $\sum_{r=1}^n\omega_\mu(\mathbf k_r)$, with value zero on the vacuum
sector. The exact maximal domain is

$$
D(d\Gamma_s(\omega_\mu))=
\left\{\Psi:\sum_{n\ge1}\int_{(H_\mu^+)^n}
\left|\sum_{r=1}^n\omega_\mu(\mathbf k_r)\right|^2
|\Psi_n(\mathbf k_1,\ldots,\mathbf k_n)|^2\,d\nu_\mu^n<\infty\right\}.
$$

The physical Hamiltonian of this selected model is the vacuum-subtracted
self-adjoint operator
$H_\mu^{\mathrm{phys}}=\hbar c\,d\Gamma_s(\omega_\mu)$ on that domain, as
defined by the multiplier construction of
[[lem-qft-second-quantized-spectrum]]. It has units of joules and
$H_\mu^{\mathrm{phys}}\Omega=0$. No infinite zero-point-energy sum is part of
this definition. The canonical scalar engineering dimension is
$\mathrm m^{-1}$; a spacetime test function of unit $\mathrm m^{-3}$ makes the
smeared field dimensionless, consistently with
[[def-qft-framework-units]].
