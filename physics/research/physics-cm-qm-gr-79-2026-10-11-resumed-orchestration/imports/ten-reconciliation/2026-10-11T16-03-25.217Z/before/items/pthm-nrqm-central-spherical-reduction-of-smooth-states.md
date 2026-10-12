---
id: pthm-nrqm-central-spherical-reduction-of-smooth-states
aliases: [nrqm-central-spherical-reduction-of-smooth-states]
kind: physics-theorem
domain: physics
title: "The declared central-potential model: spherical reduction of smooth compactly supported radial states"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-central-framework-central-potential-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation, pthm-nrqm-kinematics-spin-s-outcome-laws, lem-nrqm-central-free-operator-differential-identification, thm-nrqm-coulomb-angular-radial-unitary-reduction, lem-classical-derivatives-are-weak-derivatives, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-central-potential-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the declared central-potential model of this pair: a smooth reduced function u compactly supported away from the origin, transported to the three-dimensional vector psi = u(r)Y_lm(Omega)/r of the spherical sector (l,m), lies in the model's energy domain, and the model's assigned energy acts on psi by the declared radial differential expression with the effective potential v(r) + hbar^2 l(l+1)/(2 m r^2); consequently the declared radial equation is the eigenvalue equation on that vector and the resulting pure preparation is stationary. The statement is an exact identity for the declared model and the cited mathematics; it asserts no converse, no completeness of any family of radial solutions, no spectral classification, no measured energy and no empirical result, and it excludes the Coulomb potential from its hypotheses, which are treated by the following items of the page."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.2, printed pages 104-110 (separation of the three-dimensional central-potential equation into radial and angular parts, the effective potential and the reduced radial equation (4.21))"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 183-185 (the radial Hamiltonian H_l and the effective potential V_eff(r) for a hydrogen-like ion)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.2, printed pages 222-225 (spherical coordinates and the separation of the Coulomb eigenvalue equation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5, read through the declared
central-potential model of
[[def-nrqm-central-framework-central-potential-model]] with mass parameter
$m>0$, spin label $s=0$, a real bounded measurable central potential
$V(x)=v(|x|)$ and assigned energy operator $H_{V}$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $l\ge0$, $-l\le \bar m\le l$, let
$u\in C_{c}^{\infty}((0,\infty);\mathbb C)$, and define
$$\psi(x):=\frac{u(r)}{r}Y_{l\bar m}(\Omega)\qquad(x=r\Omega,\ r=|x|>0),$$
with $(Y_{lm})$ the complete orthonormal family and $U$ the unitary of
[[thm-nrqm-coulomb-angular-radial-unitary-reduction]]. Then:

(a) $\psi$ lies in $C_{c}^{\infty}(\mathbb R^{3}\setminus\{0\})\subseteq
H^{2}(\mathbb R^{3};\mathbb C)=D(H_{V})$, its image under $U$ is the
finite-support vector whose only nonzero entry is the $(l,\bar m)$-entry $u$,
and its position outcome law is $\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$;

(b) for every $x\in\mathbb R^{3}\setminus\{0\}$,
$$H_{V}\psi(x)=\frac{1}{r}\Bigl[-\frac{\hbar^{2}}{2m}u''(r)+\Bigl(v(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}\Bigr)u(r)\Bigr]Y_{l\bar m}(\Omega),$$
the two sides being equal as $L^{2}(\mathbb R^{3};\mathbb C)$ classes; thus
the model's assigned energy acts on the smooth spherical sector by the
declared radial differential expression with effective potential
$v^{\mathrm{eff}}_{l}(r)=v(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}$;

(c) if $E\in\mathbb R$ and $u$ satisfies the declared radial equation
$$-\frac{\hbar^{2}}{2m}u''(r)+\Bigl(v(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}\Bigr)u(r)=Eu(r)\qquad(0<r<\infty)$$
pointwise on $(0,\infty)$, then $H_{V}\psi=E\psi$, so $\psi$ is a stationary
vector of the model with energy $E$ and the pure preparation $[\psi]$ is
stationary, every assigned sharp observable having a time-independent outcome
law in it;

(d) consequently, for smooth compactly supported reduced functions the
declared radial equation of the model is equivalent to the eigenvalue equation
$H_{V}\psi=E\psi$ on the spherical sector.

The statement is conditional on P1, P2, P4, P5 and the declared model; it
asserts no converse for general reduced functions, no completeness of any
family of radial solutions, no discrete spectrum, and no measured energy, and
it does not apply to the Coulomb potential, whose self-adjointness and spectral
theory are supplied separately.

## Facts & Assumptions

**Given:** The declared central-potential model with parameters $m,\hbar>0$, real bounded measurable central $v$, assigned energy operator $H_{V}$; the unitary $U$ and family $(Y_{lm})$ of the angular-radial theorem; $l\ge0$, $\bar m\in[-l,l]$, $u\in C_{c}^{\infty}((0,\infty);\mathbb C)$ and $\psi=u(r)Y_{l\bar m}(\Omega)/r$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **The model's energy operator.** $D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C)$ and $H_{V}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f+Vf$ for every $f\in D(H_{V})$, where $\Delta_{w}$ is the weak Laplacian; $V(x)=v(|x|)$ on $\mathbb R^{3}\setminus\{0\}$ and $\|V\|_{\infty}=\sup_{r>0}|v(r)|<\infty$ ([[def-nrqm-central-framework-central-potential-model]] clauses (b), (c), [[lem-nrqm-central-free-operator-differential-identification]] clauses (a), (b)).

[F2] **Smooth spherical vectors.** For every $l\ge0$ and every $u\in C_{c}^{\infty}((0,\infty);\mathbb C)$ the function $\psi=u(r)Y_{lm}(\Omega)/r$ lies in $C_{c}^{\infty}(\mathbb R^{3}\setminus\{0\})\subseteq H^{2}(\mathbb R^{3};\mathbb C)$, its image under $U$ is the finite-support vector with $(l,m)$-entry $u$, and $-\Delta\psi=\frac{1}{r}\bigl(-u''(r)+\frac{l(l+1)}{r^{2}}u(r)\bigr)Y_{lm}(\Omega)$ ([[thm-nrqm-coulomb-angular-radial-unitary-reduction]] clauses (a), (d)).

[F3] **Classical derivatives are weak derivatives.** On an open set $\Omega\subseteq\mathbb R^{n}$, if $u$ has real and imaginary parts of class $C^{k}$, then for every multi-index $|\alpha|\le k$ the classical derivative $\partial^{\alpha}u$ is locally integrable and is the weak derivative $D^{\alpha}u$; in particular on $\mathbb R^{3}\setminus\{0\}$, taken as an open subset of $\mathbb R^{3}$, the classical second partial derivatives of a $C^{\infty}$ function are its weak second partial derivatives there ([[lem-classical-derivatives-are-weak-derivatives]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F4] **Position law.** In a unit vector $\psi$ the framework's Born position law is $\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$ for every Borel $B\subseteq\mathbb R^{3}$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)).

[F5] **Stationary preparations.** For an assigned energy observable with spectral measure $E_{H}$ and flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$, a nonzero vector $\psi\in D(H_{\mathrm{op}})$ is an eigenvector with eigenvalue $\lambda$ if and only if the pure preparation $[\psi]$ is stationary, and then every assigned sharp observable has a time-independent outcome law in it ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c), [[def-nrqm-autonomous-dynamics-framework-evolution]]).

## Proof

**Proof technique:** direct; transport the smooth spherical vector into the model's energy domain, identify its weak Laplacian with the classical one away from the origin, and insert the angular-radial identity of the cited theorem.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Regularity, domain and sector] By [F2], $\psi\in C_{c}^{\infty}(\mathbb R^{3}\setminus\{0\})\subseteq H^{2}(\mathbb R^{3};\mathbb C)$, and by [F1] the Sobolev space is exactly $D(H_{V})$; hence $\psi\in D(H_{V})$ and the image of $\psi$ under $U$ is the finite-support vector with entry $u$ at $(l,\bar m)$ and zero elsewhere. The position law is [F4]. This is clause (a). [given, F1, F2, F4]

2.1 [Weak versus classical Laplacian] On the open set $\mathbb R^{3}\setminus\{0\}$ the function $\psi$ is of class $C^{\infty}$ and, by [F3] applied there with $k=2$, its classical second partial derivatives are its weak second partial derivatives on that set. Hence $\Delta_{w}\psi=\Delta\psi$ almost everywhere on $\mathbb R^{3}\setminus\{0\}$, which is conull in $\mathbb R^{3}$; since both sides lie in $L^{2}(\mathbb R^{3};\mathbb C)$ by step 1.1, the two $L^{2}$ classes agree. By [F2], $-\Delta\psi=\frac{1}{r}\bigl(-u''(r)+\frac{l(l+1)}{r^{2}}u(r)\bigr)Y_{l\bar m}(\Omega)$; therefore the class $-\frac{\hbar^{2}}{2m}\Delta_{w}\psi$ equals $\frac{1}{r}\bigl(-\frac{\hbar^{2}}{2m}u''(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}u(r)\bigr)Y_{l\bar m}(\Omega)$. [step 1.1, F2, F3, algebra]

3.1 [Energy action and stationarity] By [F1], $H_{V}\psi=-\frac{\hbar^{2}}{2m}\Delta_{w}\psi+V\psi$; on $\mathbb R^{3}\setminus\{0\}$ one has $V\psi=v(r)\frac{u(r)}{r}Y_{l\bar m}(\Omega)$. Adding the two classes by step 2.1 gives clause (b). If in addition $u$ satisfies the declared radial equation with energy $E$, then the bracket in clause (b) equals $Eu(r)$ pointwise on $(0,\infty)$, and since equality on the conull set $\mathbb R^{3}\setminus\{0\}$ determines the class, $H_{V}\psi=E\psi$; by [F5] the preparation $[\psi]$ is stationary and every assigned sharp observable has a time-independent outcome law in it. This is clause (c), and (d) is its immediate restatement for the declared radial equation of the model. [step 1.1, step 2.1, F1, F5, algebra] ∎

## Remarks

- **Only the sector $(l,\bar m)$.** The statement concerns the one-parameter
  family of smooth vectors whose reduced function is supported away from the
  origin in the single sector $(l,\bar m)$; no assertion is made about a
  general element of $D(H_{V})$, for which the spherical components are only
  $L^{2}$ classes.
- **Why no converse is claimed.** Recovering the radial equation from the
  eigenvector equation for an arbitrary reduced class would require a
  regularity argument on the half-line; the Coulomb case below supplies the
  needed endpoint theory for its own operator, and no general bounded-potential
  converse is used anywhere on this page.
- **Units.** The radial expression carries the dimension of an energy by the
  conventions of [[def-nrqm-framework-quantities-and-units]]: $\hbar^{2}/(2m)$
  times a second derivative in $r$ has dimension $\mu\ell^{2}\tau^{-2}$, and
  the barrier term $\hbar^{2}l(l+1)/(2mr^{2})$ likewise.
