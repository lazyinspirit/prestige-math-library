---
id: post-nrqm-approximations-static-finite-level-dipole-coupling
aliases: [nrqm-approximations-static-finite-level-dipole-coupling]
kind: postulate
domain: physics
title: "Static finite-level electric-dipole coupling: compressed dipole of the declared two-body Coulomb model in a uniform field"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  thm-nrqm-coulomb-atomic-dipole-matrix-element-domain: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The static finite-level electric-dipole coupling model of the declared two-body Coulomb pair: the relative-coordinate dipole operator with components -q Q_j on their maximal L^2 domains, a declared finite-dimensional subspace of the relative-coordinate space, the compressed Hermitian dipole matrix, the uniform static field value and the bounded interaction H_S = -E . D on the subspace. The postulate is a model assumption for the declared finite-level truncation; it asserts no Maxwell equation or source model, no propagation, no derivation of the truncation or of the field, no treatment of the uncompressed linear potential (whose energy form is unbounded below and is explicitly excluded), no transition rate and no measured shift."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.1 printed pages 205-206 (PDF pages 213-214): the energy change delta E = e(Phi(xp)-Phi(xe)) of the atom in an external field, the long-wavelength reduction delta E = er.E (9.13) and the perturbing term Delta = eEz (9.14)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Section 5 'Ammonia molecule in an electric field' printed and PDF pages 11-16: the energy E = -mu.E of a dipole in an electric field (5.1), the two-state ammonia Hamiltonian H = E0 I - Delta sigma1 + muE sigma3 (5.2) and the exact eigenvalues E0 +/- sqrt(mu^2 E^2 + Delta^2) (5.3)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as a physical assumption of the pair, additional to P1, P2 and P4 and
valid only for the declared finite-level model of this clause, the following
static electric-dipole coupling. Assume the Axiom of Countable Choice and the
Axiom of Choice as the choice hypotheses of the cited mathematical suppliers
([[def-countable-choice]], [[def-axiom-of-choice]]).

**(i) Declared charged pair and relative coordinate.** Take the declared
two-body Coulomb model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (d): two
distinguishable spinless particles with mass parameters $m_{1},m_{2}>0$ and
opposite charges $-q$ and $+q$, $q>0$ (coulombs), with the relative coordinate
$r=x_{1}-x_{2}$ and the centre-of-mass/relative unitary
$U_{\Phi}$. Work in the relative-coordinate factor $L^{2}(\mathbb
R^{3};\mathbb C)$ of that reading, with Coulomb mass parameter $m=\mu:=m_{1}m_{2}/(m_{1}+m_{2})$, and with units as in
[[def-nrqm-framework-quantities-and-units]].

**(ii) Dipole operator.** Let $Q_{j}$, $j=1,2,3$, be the coordinate
multiplication operators on $L^{2}(\mathbb R^{3};\mathbb C)$ with maximal
domains $D(Q_{j})=\{\psi:\xi_{j}\psi\in L^{2}\}$ of
[[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clause (a); they are
self-adjoint and proper densely defined. The model's **dipole operator** is
the triple
$$D_{j}:=-q\,Q_{j}\qquad(j=1,2,3),$$
because the dipole of charges $-q$ at $x_{1}$ and $+q$ at $x_{2}$ is
$-qx_{1}+qx_{2}=-qr$: it points from the negative to the positive charge,
opposite to the declared relative coordinate $r=x_{1}-x_{2}$. Each $D_{j}$ is
self-adjoint on $D(Q_{j})$ and has unit $\mathrm{C\,m}$. This is the dipole of
the declared pair in its relative-coordinate reading; no multipole expansion,
no field equation and no coupling to the centre-of-mass motion is assumed.

**(iii) Finite-level truncation.** Fix, as part of the model specification, a
**declared finite-dimensional subspace** $W\subseteq D(Q_{1})\cap D(Q_{2})\cap
D(Q_{3})$ of the relative-coordinate space with $\dim W=d<\infty$, together
with an orthonormal basis of $W$. The model declares the **compressed dipole
matrix** on $W$,
$$D^{W}_{j}:=\Pi_{W}D_{j}\big|_{W},$$
where $\Pi_{W}$ is the orthogonal projection onto $W$ and the restriction to
$W$ is read in the declared orthonormal basis; $D^{W}_{j}$ is the finite
Hermitian $d\times d$ matrix of the dipole component, with unit
$\mathrm{C\,m}$, and it is bounded with norm at most $\sup_{\psi\in
W,\|\psi\|=1}\|D_{j}\psi\|$. The truncation and the basis are model
assumptions: they are not derived from the Coulomb model, and they replace
the unbounded operator $D_{j}$ by its compression throughout this pair.

**(iv) Static uniform field and interaction operator.** The external datum is
a **uniform static electric field value** $\mathbf E_{\rm ext}\in\mathbb
R^{3}$, read in $\mathrm{V\,m^{-1}}$; it is prescribed, and no Maxwell
equation, source model, propagation or back-reaction is assumed. The
**finite-level static Stark model** is the finite-dimensional operator on $W$
$$H_{S}(\mathbf E_{\rm ext}):=\Pi_{W}H_{\kappa}\big|_{W} -\sum_{j=1}^{3}E_{{\rm ext},j}\,D^{W}_{j},$$
where $H_{\kappa}=C_{\mu}$ is the one-centre Coulomb energy operator with
mass parameter $m=\mu$ of the declared model, read on the relative-coordinate
factor through the angular/radial
identification used by the pair. The interaction term has unit
$\mathrm{C\,m\cdot V\,m^{-1}}=\mathrm J$ and is bounded Hermitian on $W$, so
$H_{S}(\mathbf E_{\rm ext})$ is a bounded Hermitian $d\times d$ matrix and
the Kato-Rellich and perturbation statements of the pair apply to it with a
bounded perturbation; this identification of the matrix with the model's
energy on the truncated subspace is a model assumption.

**(v) Scope and explicit exclusion.** Clauses (i)-(iv) are adopted model
assumptions. They assert nothing about a laboratory atom, field or apparatus;
no measured Stark shift is claimed; no transition, absorption or emission
rate is defined; and no time dependence of the field is assumed. In
particular the postulate deliberately does **not** treat the uncompressed
linear potential $-\mathbf E_{\rm ext}\cdot\mathbf D$ as a bounded
perturbation of $H_{\kappa}$: the uncompressed term is an unbounded
multiplication operator, and the energy form of $H_{\kappa}$ plus that term
has no lower bound for a nonzero field, so the uncompressed static-field model
is outside the scope of every statement of this pair. Only the compressed
finite-level operator of clause (iv) is used.
