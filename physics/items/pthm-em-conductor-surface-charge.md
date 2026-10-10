---
id: pthm-em-conductor-surface-charge
kind: physics-theorem
title: "Surface charge and normal field on an ideal conductor"
status: draft
origin: session
dependency_level: 17
domain: physics
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-classical-normal-derivative, def-connected-component-and-quasicomponent, def-countable-choice, def-cross-product-in-r3, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-em-surface-distribution, def-em-weak-sources, def-euclidean-inner-product, def-surface-integral-on-a-compact-c-one-hypersurface, lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface, lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain, post-em-distributional-vacuum-maxwell, post-em-electrostatic-conductor-model, pthm-em-fixed-vacuum-jumps]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-classical-normal-derivative: mathematical-premise
  def-connected-component-and-quasicomponent: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface: mathematical-premise
  lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-surface-distribution: operational-prerequisite
  def-em-weak-sources: operational-prerequisite
  post-em-distributional-vacuum-maxwell: operational-prerequisite
  post-em-electrostatic-conductor-model: physical-assumption
  pthm-em-fixed-vacuum-jumps: physical-result
physical_scope: "The ideal-conductor boundary conditions of classical electrostatics in a named inertial frame: for a stationary smooth conductor surface in the pure electrostatic regime and fields with the stated one-sided regularity, the surface charge density equals epsilon_0 times the normal vacuum-side field, the vacuum-side field is normal to the surface, the potential trace is constant on each connected piece of the conductor surface with the model's component value, and the total component charges are the outward flux integrals of the vacuum field. The statement is conditional and pointwise; it excludes moving or nonsmooth surfaces, magnetic and current sources, forces, energy, material response and any empirical claim."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Section 2.5.3 printed pp. 102-103, Eqs. (2.48)-(2.49) (surface charge sigma/epsilon_0 just outside a conductor and the normal-derivative form sigma = -epsilon_0 dV/dn)."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4 printed pp. 30-31, Eq. (2.31) (outside field sigma/epsilon_0 n-hat and the constant-potential surface); Section 2.4.2 printed pp. 33-35 (grounded and fixed-potential conductor data)."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: "Sections 4.3-4.3.4 printed pp. 43-48 (boundary and jump conditions n-hat . [E] = sigma/epsilon_0)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) inherited from the surface and distribution interfaces ([[def-countable-choice]]). Let $(\Omega;D_1,\dots,D_m;\Omega_v;E;\rho_v;\sigma;V_j)$ be a model of [[post-em-electrostatic-conductor-model]] with surface $S:=\partial D$ and vacuum region $\Omega_v$, with the fields of [[def-em-fields]], the constants and units of [[def-em-si-conventions]] and the pure electrostatic regime of [[def-em-electrostatic-regime]] carried by the model, and suppose additionally that the field $E$ satisfies the joint one-sided $C^1$ regularity hypothesis of [[pthm-em-fixed-vacuum-jumps]] across $S$: around every $x_0\in S$ each side of $S$ is the restriction of a $C^1$ field on an open neighbourhood of the corresponding closed side of a smaller graph chart. Let $n$ denote the unit normal on $S$ pointing from the conductor side into the vacuum side (equivalently: $n$ is the inward normal of $\Omega_v$ and the outward normal of $D$ on $S$, by the local exterior conductor chart; in the bounded smooth ambient branch this is the sign convention of [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]](c)), and let $E_+$ denote the vacuum-side trace of $E$ (the field is zero on the conductor side, so $[E]=E_+$). Then, pointwise on $S$:

(a) [Normal sheet charge] $n\cdot E_+=\sigma/\varepsilon_0$ and $n\times E_+=0$; equivalently $\sigma=\varepsilon_0\,n\cdot E_+$ and the tangential part of the vacuum-side field vanishes: $E_+$ has no component tangent to $S$. In particular a conductor surface with $\sigma=0$ at a point has $E_+=0$ there (both traces vanish), and the sign of $\sigma$ is the sign of the outward normal field component.

(b) [Normal derivative of the potential] with $\varphi$ the model's potential and $\partial\varphi/\partial n:=\nabla\varphi_+\cdot n$ the one-sided normal derivative in the direction $n$ from the conductor into the vacuum ([[def-classical-normal-derivative]]), one has

$$\frac{\partial\varphi}{\partial n}=-\frac{\sigma}{\varepsilon_0},\qquad\text{equivalently}\qquad \sigma=-\varepsilon_0\,\frac{\partial\varphi}{\partial n}.$$

(c) [Equipotential boundary traces] the trace $\varphi_+$ of $\varphi$ on $S$ is constant on each connected component of $S$, with value $V_j$ on every connected component contained in $\partial D_j$; consequently the boundary value problem in the vacuum region is a Dirichlet problem whose data are the constants $V_j$ on the conductor surfaces.

(d) [Total charges] the total charge of conductor $j$ is

$$Q_j=\int_{\partial D_j}\sigma\,dS=\varepsilon_0\int_{\partial D_j}n\cdot E_+\,dS=\varepsilon_0\int_{\partial D_j}\frac{\partial\varphi}{\partial\nu}\,dS,$$

where $\nu$ is the local outward normal of the vacuum along the smooth conductor interface $S$, without asserting regularity of a general ambient outer boundary (so $\nu=-n$ on $\partial D$ and the last equality uses $\partial\varphi/\partial\nu=-\partial\varphi/\partial n$); the surface integrals exist as integrals of continuous functions over the compact embedded hypersurfaces $\partial D_j$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]]).

(e) [Data reading] the two data types of the model are related through (d): if the component potentials and ambient data are fixed and the equilibrium solution is given, the total charges are determined by (d); prescribing the total charges instead determines the potentials only through the (separate) equilibrium problem, and this theorem asserts no existence or uniqueness for charge data.

(f) [Scope] The statement is pointwise and stationary: it assumes the one-sided joint regularity above, a $C^\infty$ conductor surface, and the pure electrostatic regime; it excludes moving surface charge, normal sheet currents, magnetic sheet sources, nonsmooth or cornered conductors, fields without one-sided traces, forces, energy and any measurement; no self-force or material response is asserted.

## Facts & Assumptions

**Given:** A model of [[post-em-electrostatic-conductor-model]] with conductor surface $S=\partial D=\partial D_1\cup\cdots\cup\partial D_m$, vacuum region $\Omega_v$, field $E$ with $E\equiv0$ on $D$, continuous stationary surface density $\sigma$ on $S$, potential $\varphi\in C^0(\Omega)\cap C^2(\Omega_v)$ with $E=-\nabla\varphi$ on $\Omega_v$ and $\varphi\equiv V_j$ on $D_j$, and the joint one-sided $C^1$ regularity of the statement across $S$.

[F1] The conductor model: $E\equiv0$ on $D$; the pair $(E,0)$ with the source pair $(\rho_v+\sigma\delta_S,0)$, $K=0$, satisfies the adopted distributional vacuum Maxwell equations [[post-em-distributional-vacuum-maxwell]]; $\sigma$ is the stationary-sheet source of [[def-em-weak-sources]](c) under [[def-em-surface-distribution]]; $\varphi$ is continuous on $\Omega$ and $C^2$ on $\Omega_v$ with $E=-\nabla\varphi$ there, constant on each $D_j$ with value $V_j$ ([[post-em-electrostatic-conductor-model]], [[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-si-conventions]]).

[F2] The fixed-vacuum-jump theorem: under $\mathrm{AC}_\omega$, the stationary compact embedded $C^2$ interface hypotheses, the joint one-sided $C^1$ field regularity and the weak Maxwell equations with the stationary-sheet source of [F1], one has pointwise on $S$ $n\cdot[E]=\sigma/\varepsilon_0$, $n\times[E]=0$, $n\cdot[B]=0$, $n\times[B]=\mu_0K$, with $[F]=F_+-F_-$ and $n$ pointing from the $\Omega_-$ side to the $\Omega_+$ side ([[pthm-em-fixed-vacuum-jumps]], [[def-em-surface-distribution]]).

[F3] For a bounded $C^\infty$ conductor surface the outward normal of the vacuum region on $\partial D_j$ is $n_j=-n$ (the negative of the conductor's outward normal) whenever the bounded smooth ambient hypothesis of [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]](c) is in force; the local exterior conductor chart of the model identifies the vacuum-side normal with the conductor's outward normal in general ([[post-em-electrostatic-conductor-model]](a), [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]](c)).

[F4] Classical one-sided normal derivative: for the vacuum side, $\partial\varphi/\partial n:=\nabla\varphi_+\cdot n$ is the normal derivative of the $C^1$ vacuum-side restriction $\varphi$ in the direction $n$, where $\varphi$ is $C^2$ on the vacuum side and its gradient has the continuous trace $-E_+$ ([[def-classical-normal-derivative]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] $\partial D$ is a finite disjoint union of compact embedded smooth hypersurfaces carrying a finite surface measure on which continuous functions are integrable ([[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F6] Euclidean vector decomposition: a vector $v$ with $n\cdot v=0$ and $n\times v=0$ for the unit vector $n$ is $v=0$, since $v=(n\cdot v)n+n\times(v\times n)$ for orthonormal triples ([[def-em-fields]], [[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).



**Proof technique:** direct.

## Proof

1.1 By [F2] with the conductor side as $\Omega_-$ and the vacuum side as $\Omega_+$ (the normal $n$ of the statement points from the conductor into the vacuum, matching [F2]), the jump identities $n\cdot[E]=\sigma/\varepsilon_0$ and $n\times[E]=0$ hold pointwise on $S$; the conductor-side trace vanishes because $E\equiv0$ on $D$ [F1], so $[E]=E_+-0=E_+$. This gives $n\cdot E_+=\sigma/\varepsilon_0$ and $\sigma=\varepsilon_0\,n\cdot E_+$, and $n\times E_+=0$, which is (a); if $\sigma=0$ at a point then $n\cdot E_+=0$ and $n\times E_+=0$ there, so $E_+=0$ by [F6], and the sign of $\sigma$ is the sign of $n\cdot E_+$ since $\varepsilon_0>0$. [F1, F2, F6, given]

1.2 Equipotential boundary traces. For $x\in\partial D_j$, the boundary definition supplies points of $D_j$ arbitrarily close to $x$. Since $\varphi$ is continuous on $\Omega$ and $\varphi|_{D_j}=V_j$ [F1], its value and vacuum trace at $x$ equal $V_j$. Thus the trace is constant on all of $\partial D_j$, and in particular on every connected component contained there. The separated boundary pieces partition $S$ [F5], so this proves (c) directly from the model's continuous equipotential convention. [F1, F5, given]

2.1 On the vacuum side $E=-\nabla\varphi$ [F1], so $\nabla\varphi_+=-E_+$ [F4] and $\partial\varphi/\partial n=\nabla\varphi_+\cdot n=-E_+\cdot n=-\sigma/\varepsilon_0$ by [step 1.1]; this is (b). [F1, F4, step 1.1]

3.1 Total charges. The surface integrals in $Q_j=\int_{\partial D_j}\sigma\,dS$ exist as integrals of the continuous density $\sigma$ over the compact embedded hypersurface $\partial D_j$ with finite surface measure [F5]. Substituting $\sigma=\varepsilon_0\,n\cdot E_+$ from [step 1.1] gives the middle expression. For the last expression, on $\partial D_j$ the local outward normal of the vacuum is $\nu=-n$ [F3], so $\partial\varphi/\partial\nu=\nabla\varphi_+\cdot\nu=-\nabla\varphi_+\cdot n=-\partial\varphi/\partial n=\sigma/\varepsilon_0$ by [step 2.1]; integrating over $\partial D_j$ gives $Q_j=\varepsilon_0\int_{\partial D_j}\partial\varphi/\partial\nu\,dS$. This is (d). [F3, F4, F5, step 1.1, step 2.1]

4.1 Data reading and scope. Clause (e) follows from the definitions in (d): the total charges are determined by the equilibrium solution through the displayed identities, while charge data enter only through a separate equilibrium problem, for which this theorem proves neither existence nor uniqueness [given]. The statement is pointwise on $S$ and stationary: no moving charge, normal sheet current, magnetic sheet source, corner or field without one-sided traces is considered, no product of distributions and no corner equation is formed, and no force, energy, radiation, self-force, material response or measurement is asserted [F1, F2]; the surface integrals exist but no regularity of a general ambient outer boundary is claimed [F5]. [F1, F2, F5, given, step 3.1] ∎
