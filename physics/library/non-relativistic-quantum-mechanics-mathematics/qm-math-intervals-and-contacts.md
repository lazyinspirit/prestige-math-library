---
page: qm-math-intervals-and-contacts
title: Qm Math Intervals And Contacts
status: draft
items:
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-weak-derivative-ac-representative
  - lem-nrqm-intervals-endpoint-trace-and-half-line-decay
  - lem-nrqm-intervals-integration-by-parts
  - thm-nrqm-intervals-sine-on-completeness
  - lem-nrqm-intervals-free-line-resolvent
  - thm-nrqm-intervals-dirichlet-diagonal-domain-identification
  - lem-nrqm-intervals-compact-resolvent-eigenbasis
  - thm-nrqm-intervals-twisted-periodic-momentum-domain
  - thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent
  - thm-nrqm-intervals-regular-ivp-parameter-series
  - thm-nrqm-intervals-prufer-energy-monotonicity
  - thm-nrqm-intervals-dirichlet-nodal-theorem
  - thm-nrqm-intervals-delta-interface-operator
  - thm-nrqm-intervals-delta-rank-one-resolvent
  - thm-nrqm-intervals-delta-unique-bound-state
  - thm-nrqm-intervals-separated-robin-green-resolvent
  - thm-nrqm-intervals-robin-simple-complete-spectrum
  - thm-nrqm-intervals-barrier-transfer-and-thick-limit-error
  - thm-nrqm-intervals-finite-well-root-conditions-and-bound-count
requires:
  - qm-math-oscillator
  - absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus
  - completeness-and-uniform-continuity
  - complex-power-series-and-analytic-functions
  - continuity-ivt-evt-and-uniform-continuity
  - finite-dimensional-normed-spaces-and-riesz-lemma
  - fubini-and-change-of-variables
  - linear-independence-bases-and-dimension
  - picard-lindelof-and-first-order-odes
  - sine-cosine-and-the-definition-of-pi
  - smooth-approximation-and-sobolev-extension
  - smooth-partitions-of-unity-and-exhaustions
  - the-riemann-integral
  - uniform-spaces
  - qm-math-composites
examples: []
---

The interval and interface layer of the non-relativistic quantum mechanics
mathematical prerequisites, all of it mathematics: one-dimensional Sobolev
spaces and their boundary traces, the sine and character bases of $L^2(0,L)$,
the Dirichlet, twisted-periodic and separated Robin realisations of
$-d^2/dx^2+V$, the regular initial value problem and its Prufer angle, the
associated Sturm oscillation theory, and the point-interaction realisation of
the delta interface together with its rank-one resolvent and unique bound
state. Every item carries `domain: mathematics` and depends only on
mathematical suppliers, published or from [[qm-math-oscillator]]; nothing here
asserts a physical interpretation, measurement model or empirical claim, and
the companion page [[qm-math-intervals-and-contacts-examples]] stays
mathematics as well.

[[def-nrqm-intervals-hilbert-sobolev-spaces]] fixes the notation: $H^1(I)$ and
$H^2(I)$ are the classes with one, respectively two, $L^2$ weak derivatives on
an interval, $H^1_0(0,L)$ is the closure of the test functions, and the
Dirichlet form is $q_D[u]=\|Du\|^2$. [[lem-nrqm-intervals-weak-derivative-ac-representative]]
then extracts the unique absolutely continuous representative of an $H^1$
class with the difference formula $u^*(x)-u^*(y)=\int_y^xu'$ and the Holder
modulus $\sqrt{|x-y|}\|u'\|$, and
[[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]] proves the endpoint
bounds $|u^*(x)|\le L^{-1/2}\|u\|+L^{1/2}\|u'\|$, the half-line decay
$u^*(x)\to0$, and the vanishing of the boundary products used for integration
by parts. [[lem-nrqm-intervals-integration-by-parts]] contains the first- and
second-order integration-by-parts identities on bounded intervals, the
half-line and line identities, and the identification
$H^1_0(0,L)=\{u\in H^1:u^*(0)=u^*(L)=0\}$ by a cutoff-and-mollification
argument. [[thm-nrqm-intervals-sine-on-completeness]] proves that the
normalised sines form a complete orthonormal family of $L^2(0,L)$, by odd
extension and transport of the torus completeness theorem.

The spectral layer begins with [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]],
which identifies the diagonal operator of [[qm-math-oscillator]] with
eigenvalues $\lambda_n=(n\pi/L)^2$ with the Dirichlet Laplacian
$A_Du=-D^2u$ on $D(A_D)=\{u\in H^2(0,L):u^*(0)=u^*(L)=0\}$, proves
$A_D\ge\lambda_1$ and the form identity $\langle A_Du,u\rangle=\|Du\|^2$.
[[lem-nrqm-intervals-compact-resolvent-eigenbasis]] abstracts the resulting
structure: a self-adjoint operator with compact resolvent has a complete
orthonormal eigenfamily, finite-dimensional eigenspaces, spectrum equal to the
eigenvalue set and empty essential spectrum. [[thm-nrqm-intervals-twisted-periodic-momentum-domain]]
proves that $P_\theta=-iD$ with the twisted-periodic condition
$u^*(L)=e^{i\theta}u^*(0)$ is self-adjoint, with the complete orthonormal
characters $\varphi_n$ and simple eigenvalues $(2\pi n+\theta)/L$. The
companion example [[ex-nrqm-intervals-contacts-dirichlet-momentum-failure]]
shows that no self-adjoint extension retains both Dirichlet conditions.
[[lem-nrqm-intervals-free-line-resolvent]] supplies the free-line kernel
$G_z(t)=(2k)^{-1}e^{-k|t|}$, its two-sided inverse property and the
distributional identity $(-d^2/dx^2-z)G_z=\delta_0$.
[[thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent]] adds a
real continuous potential by Kato-Rellich, proves the compact resolvent and
the min-max bounds $|E_n-\lambda_n|\le\|V\|_\infty$.

The oscillation layer is [[thm-nrqm-intervals-regular-ivp-parameter-series]],
which solves $-u''+Vu=zu$ with arbitrary initial data, proves the a priori
bound, gives a locally uniform Picard series and entire dependence on the
spectral parameter $z$, and identifies the differentiated equation. Then
[[thm-nrqm-intervals-prufer-energy-monotonicity]] introduces the Prufer angle
$\theta$ with $\theta'=\cos^2\theta+(E-V)\sin^2\theta$ and proves
$\partial_E\theta(L,E)=\int_0^Lu^2/(u^2+u'^2)>0$. The Dirichlet nodal theorem
[[thm-nrqm-intervals-dirichlet-nodal-theorem]] then characterises the
eigenvalues as the unique roots of $\theta(L,E)=k\pi$, proves that they are
simple and increasing with the bounds $(k\pi/L)^2+V_{\min}\le E_k\le
(k\pi/L)^2+V_{\max}$, and shows that the $k$-th eigenfunction has exactly
$k-1$ zeros in $(0,L)$.

The interface layer is [[thm-nrqm-intervals-delta-interface-operator]], the
self-adjoint realisation of $-d^2/dx^2$ with the jump condition
$u'^*(0+)-u'^*(0-)=\alpha u^*(0)$;
[[thm-nrqm-intervals-delta-rank-one-resolvent]] computes its resolvent as
$R_0(z)$ minus the rank-one term
$\alpha\ell_z(f)G_z/(1+\alpha G_z(0))$; and
[[thm-nrqm-intervals-delta-unique-bound-state]] proves that the sole negative
eigenvalue is $-\alpha^2/4$, present exactly for $\alpha<0$, with normalised
eigenfunction $\sqrt{-\alpha/2}\,e^{\alpha|x|/2}$, and records the conditional
scaling $H=(\hbar^2/2m)A_\alpha$, $g=\hbar^2\alpha/(2m)$,
$E_H=-mg^2/(2\hbar^2)$.
[[thm-nrqm-intervals-separated-robin-green-resolvent]] builds the Green kernel
$G_z(x,y)=-u_a(\min)u_b(\max)/W$ for the separated Robin condition
$u'^*(0)=\alpha u^*(0)$, $u'^*(L)=\beta u^*(L)$ and proves self-adjointness
with compact resolvent; [[thm-nrqm-intervals-robin-simple-complete-spectrum]]
adds the complete simple eigenbasis. Finally
[[thm-nrqm-intervals-barrier-transfer-and-thick-limit-error]] computes the
rectangular-barrier transmission coefficient and its controlled
thick-barrier error, and
[[thm-nrqm-intervals-finite-well-root-conditions-and-bound-count]] computes the
finite-well root conditions, the simplicity of each bound state and the exact
count $\lceil2aK/\pi\rceil$. All items are draft mathematics under
construction; physical pages consume them as stated mathematical premises and
add their own postulates and interpretation.

