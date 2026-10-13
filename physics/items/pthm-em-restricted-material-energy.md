---
id: pthm-em-restricted-material-energy
kind: physics-theorem
title: "Energy balance and Ohmic dissipation for the constant nondispersive linear model"
status: published
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-em-sources, def-euclidean-inner-product, lem-em-parameter-integrals, lem-the-divergence-and-curl-of-a-cross-product, post-em-material-closure, post-em-vacuum-maxwell, pthm-em-macroscopic-maxwell, thm-algebra-of-derivatives, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, prop-the-image-of-a-lower-dimensional-c1-manifold-is-null, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  post-em-material-closure: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  pthm-em-macroscopic-maxwell: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  prop-the-image-of-a-lower-dimensional-c1-manifold-is-null: mathematical-premise
  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions: mathematical-premise
physical_scope: "The local and fixed-volume energy balance d_t u + div(E x H) = -J_f.E with u=(E.D+B.H)/2 and the Ohmic dissipation reading E.sigma E>=0 for the constant symmetric nondispersive linear model with symmetric positive-semidefinite sigma, under AC_omega for the fixed-volume form. Restricted to this model: no stored-energy claim for dispersive, nonlocal, nonlinear or hysteretic media; boundary term retained; no conservation assertion and no empirical claim."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 8.1.1-8.1.2 printed pp. 345-348 (Poynting's theorem and the energy density of the electromagnetic field); sec. 7.1.1 printed p. 285, equation (7.3) (restricted Ohmic law; dissipation follows by dotting with E). Read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: "http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf"
      locator: "sec. 8.2 'Energy conservation', printed pp. 242-246: the vacuum balance (8.17), density (8.18) and flux (8.19) on p. 244; the restricted linear-material balance, density and flux (8.24)-(8.26) on pp. 245-246. Read in the fetched complete 364-page course book."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 4.4 printed pp. 92-94 (PDF pp. 100-102), equation (4.20): the vacuum Poynting balance, retaining volume work and outward flux; sec. 7.3 printed pp. 183-184 (PDF pp. 191-192): macroscopic equations and linear closure. These sections were independently read during the batch-29 review; the weighted material-energy identity is proved locally below."
---

## Statement

Assume the elementary inertial-rest branch of [[post-em-material-closure]]: constant symmetric positive-definite matrices $\varepsilon,\mu\in\mathbb R^{3\times3}$ (isotropic scalar case included) with $D=\varepsilon E$ and $B=\mu H$, and the conduction relation $J_f=\sigma E+J_{\mathrm{ext}}$ with $\sigma$ symmetric positive semidefinite and a declared external free current $J_{\mathrm{ext}}$. Assume the smooth branch of [[post-em-vacuum-maxwell]] with the regularity hypotheses of [[pthm-em-macroscopic-maxwell]], so that its macroscopic equations hold on $\Omega\times I$. Define the stored-energy density and the energy-flux vector

$$u:=\tfrac12\bigl(E\cdot D+B\cdot H\bigr),\qquad S:=E\times H,$$

with the Euclidean inner product of [[def-euclidean-inner-product]] and the cross product of [[def-cross-product-in-r3]]; $u$ carries $\mathrm J\,\mathrm m^{-3}=\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-2}$ and $S$ carries $\mathrm W\,\mathrm m^{-2}$. Then:

**(a) [Local balance and positivity]** On $\Omega\times I$,

$$\partial_tu+\operatorname{div}S=-J_f\cdot E.$$

Moreover $u=\tfrac12(E\cdot\varepsilon E+H\cdot\mu H)\ge0$, with $u(x,t)>0$ whenever $(E(x,t),H(x,t))\ne(0,0)$.

**(b) [Dissipation reading]** With $J_f=\sigma E+J_{\mathrm{ext}}$ and $\sigma$ symmetric positive semidefinite, $E\cdot\sigma E\ge0$ and the balance reads

$$\partial_tu+\operatorname{div}S+E\cdot\sigma E=-J_{\mathrm{ext}}\cdot E;$$

the nonnegative term $E\cdot\sigma E$ is the Ohmic dissipation density of the model.

**(c) [Fixed-volume balance]** Let $\Omega'\subseteq\Omega$ be open with $\overline{\Omega'}\subseteq\Omega$ carrying the finite piecewise $C^1$ presentation of [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], let $t_0<t_1$ with $(t_0,t_1)\subseteq I$, assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) as in that divergence theorem, and let $n$ be the outward unit normal of $\partial\Omega'$. Then for every $t\in(t_0,t_1)$,

$$\frac{d}{dt}\int_{\Omega'}u(x,t)\,dx=-\int_{\Omega'}J_f\cdot E\,dx-\oint_{\partial\Omega'}S\cdot n\,dS.$$

**(d) [Scope]** The density $u=\tfrac12(E\cdot D+B\cdot H)$ is a stored-energy density only for this constant symmetric nondispersive model; for general dispersive, nonlocal, nonlinear or hysteretic response no instantaneous stored-energy density is defined or claimed by this item, and the general dispersive work balance is not supplied. The identities hold only where the fields and sources have the stated regularity, the fixed-volume form keeps its boundary term, and conservation of $\int_{\Omega\prime}u$ requires the sum of outward flux and volume work on the right of (c) to vanish, not merely zero boundary flux. No empirical claim is made.

## Facts & Assumptions

**Given:** The laboratory region and units of the Statement, the smooth-branch data of the declared constant model with symmetric positive-definite $\varepsilon,\mu$ and symmetric positive-semidefinite $\sigma$ of [A2], and the regularity of [A1]; the operators are the divergence, curl and partial derivatives of the named definitions, with the Euclidean inner and cross products of the Statement.

[A1] Under the smooth branch of the vacuum postulate with the regularity hypotheses of the macroscopic theorem, the macroscopic equations hold on $\Omega\times I$: $\operatorname{div}D=\rho_f$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}H=J_f+\partial_tD$ ([[pthm-em-macroscopic-maxwell]], clauses (a)-(b); [[post-em-vacuum-maxwell]], smooth branch).

[A2] The elementary inertial-rest branch: $D=\varepsilon E$, $B=\mu H$ with constant symmetric positive-definite matrices $\varepsilon,\mu$, and $J_f=\sigma E+J_{\mathrm{ext}}$ with $\sigma$ symmetric positive semidefinite ([[post-em-material-closure]], clause (b)).

[L1] $\operatorname{div}(E\times H)=H\cdot\operatorname{curl}E-E\cdot\operatorname{curl}H$ for $C^1$ fields ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[L2] For a symmetric real matrix $\varepsilon$, $E\cdot\varepsilon E$ is differentiable in $t$ with $\frac{d}{dt}(E\cdot\varepsilon E)=2\,\partial_tE\cdot\varepsilon E$ when $E$ is $C^1$, by the product rule ([[thm-algebra-of-derivatives]]); and $E\cdot\varepsilon E\ge0$ with equality only for $E=0$ when $\varepsilon$ is positive definite, and likewise for $\mu$ and $H$ ([[def-euclidean-inner-product]]).

[L3] If $K\subseteq\mathbb R^n$ is compact, measurable and of finite Lebesgue measure, $f$ and $\partial_tf$ are continuous on a neighbourhood of $K\times[a,b]$, then $\frac{d}{dt}\int_Kf=\int_K\partial_tf$ on $[a,b]$ ([[lem-em-parameter-integrals]]).

[L4] For a bounded piecewise $C^1$ domain, the divergence theorem holds: $\int_{\Omega'}\operatorname{div}F\,dx=\oint_{\partial\Omega'}F\cdot n\,dS$ for the outward unit normal, under the stated finite piecewise $C^1$ presentation and Countable Choice ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[L5] The image of a $C^1$ map from a lower-dimensional smooth manifold to $\mathbb R^3$ is Lebesgue-null under Countable Choice ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]), and finite unions and subsets of null sets are null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

## Proof

**Proof technique:** dot the macroscopic curl equations with the complementary fields and use the cross-product divergence identity, then integrate over a fixed volume.

1.1 By [A1] the two curl equations $E\cdot\operatorname{curl}H=E\cdot J_f+E\cdot\partial_tD$ and $H\cdot\operatorname{curl}E=-H\cdot\partial_tB$ hold on $\Omega\times I$ after taking the Euclidean inner product with the complementary field. [A1, given]

1.2 The identity $u=\tfrac12(E\cdot\varepsilon E+H\cdot\mu H)$ follows from [A2], and both quadratic forms are nonnegative by [L2], with equality in both simultaneously only when $E=H=0$; hence $u\ge0$, and $u(x,t)>0$ whenever $(E(x,t),H(x,t))\ne(0,0)$. [A2, L2]

1.3 By [A2], $J_f\cdot E=E\cdot\sigma E+J_{\mathrm{ext}}\cdot E$, and $E\cdot\sigma E\ge0$ because $\sigma$ is symmetric positive semidefinite; the term is the Ohmic dissipation density of the model. [A2, L2]

2.1 By [L1], $\operatorname{div}S=\operatorname{div}(E\times H)=H\cdot\operatorname{curl}E-E\cdot\operatorname{curl}H$, so the two scalar identities of step 1.1 give $\operatorname{div}S=-(E\cdot J_f+E\cdot\partial_tD+H\cdot\partial_tB)$; differentiating $u$ in time and using the symmetry of $\varepsilon$ and $\mu$ with the product rule of [L2] gives $\partial_tu=\tfrac12\partial_t(E\cdot\varepsilon E)+\tfrac12\partial_t(H\cdot\mu H)=\partial_tE\cdot\varepsilon E+\partial_tH\cdot\mu H=E\cdot\partial_tD+H\cdot\partial_tB$ by [A2]; adding the two identities yields $\partial_tu+\operatorname{div}S=-J_f\cdot E$ on $\Omega\times I$, proving (a). [step 1.1, A2, L1, L2]

3.1 For (c), fix $t\in(t_0,t_1)$. Each face in the finite presentation of $\partial\Omega\prime$ lies in a regular $C^1$ parametrized patch and is volume-null by [L5]. The finite union $\partial\Omega\prime$ is therefore volume-null. Hence the compact finite-measure set $K=\overline{\Omega\prime}$ and $\Omega\prime$ have the same integrals for the continuous functions used here. Apply [L3] to $K$ and $f=u$: $\frac{d}{dt}\int_{\Omega'}u\,dx=\int_{\Omega'}\partial_tu\,dx$, where the regularity hypotheses on the fields supply the continuous $\partial_tu$ on a neighbourhood of $\overline{\Omega'}\times[a,b]$ for a compact interval $[a,b]\subset I$ containing $t$ in its interior; substituting the local balance of step 2.1 and applying the divergence theorem [L4] to $F=S$ gives $\frac{d}{dt}\int_{\Omega'}u=-\int_{\Omega'}J_f\cdot E-\int_{\Omega'}\operatorname{div}S=-\int_{\Omega'}J_f\cdot E-\oint_{\partial\Omega'}S\cdot n\,dS$, under the $\mathrm{AC}_\omega$ hypothesis carried by [L4]. Thus (a)-(c) hold; the reading (b) is step 1.3 substituted into the balance, and (d) is the scope: $u$ is a stored-energy density only for this constant symmetric nondispersive model, no instantaneous stored energy is claimed for dispersive, nonlocal, nonlinear or hysteretic response, the boundary term is retained, and no conservation of $\int_{\Omega'}u$ or empirical statement is asserted. [step 1.3, step 2.1, L3, L4, L5] ∎
