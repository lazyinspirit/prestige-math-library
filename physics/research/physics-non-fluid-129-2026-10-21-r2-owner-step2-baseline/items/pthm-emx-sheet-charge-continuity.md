---
id: pthm-emx-sheet-charge-continuity
kind: physics-theorem
title: "Stationary sheets and charge conservation"
status: draft
origin: pipeline
domain: physics
dependency_level: 2
proof_strategy: direct
deps:
  - def-countable-choice
  - def-distribution
  - def-distributional-derivative
  - def-em-lab-geometry
  - def-em-fields
  - def-em-polarization-magnetization
  - def-em-si-conventions
  - def-em-surface-distribution
  - def-em-weak-sources
  - def-emx-surface-divergence
  - lem-emx-surface-divergence-c1-representation
  - def-test-function-space-d-of-an-open-set
  - lem-em-interface-derivatives
  - lem-em-surface-density-localization
  - prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
  - post-em-distributional-vacuum-maxwell
  - pthm-em-material-stationary-jumps
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-dominated-convergence
  - thm-integration-by-parts
  - thm-locally-integrable-functions-embed-in-distributions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-surface-distribution: mathematical-premise
  def-em-weak-sources: formulation-prerequisite
  def-emx-surface-divergence: mathematical-premise
  lem-emx-surface-divergence-c1-representation: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-em-interface-derivatives: mathematical-premise
  lem-em-surface-density-localization: mathematical-premise
  prop-the-image-of-a-lower-dimensional-c1-manifold-is-null: mathematical-premise
  post-em-distributional-vacuum-maxwell: physical-assumption
  pthm-em-material-stationary-jumps: physical-result
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional stationary-interface result for the distributional macroscopic Maxwell equations with locally integrable volume sources and a C1 free surface-charge/tangential-current sheet. It supplies the four jump laws and the compatible surface charge balance, and identifies the adopted vacuum stationary-sheet model as a special case. The interface is fixed and has no edge; no moving sheets, point-source collisions with the interface, existence theorem, constitutive inference or empirical claim is included."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture notes, 176 pp."
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Section 5.3, printed p. 5.5 (PDF p. 65), equations (5.20)-(5.21): the normal-displacement and tangential-electric interface conditions derived from pillbox and loop tests. The local theorem retains its explicitly stated distributional sheet-source hypotheses."
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Section 2, PDF pp. 2-3: interface conditions for H and D with surface current and charge, followed by PEC and impedance formulations. The side ordering is checked against the library normal convention."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $U=I\times\Omega$ be a laboratory region, where $I\subseteq\mathbb R$ is a nonempty open interval and $\Omega\subseteq\mathbb R^3$ is open. Use the field and SI conventions of [[def-em-fields]], [[def-em-polarization-magnetization]], and [[def-em-si-conventions]]: $E$ is measured in $\mathrm{V\,m^{-1}}$, $B$ in tesla, $D$ in $\mathrm{C\,m^{-2}}$, and $H$ in $\mathrm{A\,m^{-1}}$. Let $S\subset\Omega$ be a fixed compact two-sided embedded $C^2$ hypersurface without manifold boundary, with unit normal $n$ pointing from the minus side $\Omega_-$ to the plus side $\Omega_+$; write $[F]=F_+-F_-$. Let $E,B,D,H$ be locally integrable fields with the joint one-sided spacetime $C^1$ extensions on the two sides used in the stationary-interface theorem. Let the volume charge $\rho_v$ and volume current $J_v$ be locally integrable and $C^1$ on each side with joint one-sided $C^1$ extensions to $S\times I$. Let $\sigma:S\times I\to\mathbb R$ and $K:S\times I\to\mathbb R^3$ be $C^1$, with $K\cdot n=0$. Their SI units are $\mathrm{C\,m^{-3}}$ for $\rho_v$, $\mathrm{A\,m^{-2}}$ for $J_v$, $\mathrm{C\,m^{-2}}$ for $\sigma$, and $\mathrm{A\,m^{-1}}$ for $K$.

Assume the distributional macroscopic equations with the stationary sheet source pair $\rho_f=\rho_v+\sigma\delta_S$, $J_f=J_v+K\delta_S$:

$$\operatorname{div}D=\rho_f,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}H=J_f+\partial_tD$$

on $U$. This is the thin-interface solution assumption of the adopted macroscopic model; it is not inferred from the smooth equations.

Then pointwise on $S\times I$,

$$n\cdot[D]=\sigma,\qquad n\cdot[B]=0,\qquad n\times[E]=0,\qquad n\times[H]=K,$$

and

$$\partial_t\sigma+\operatorname{div}_S K+n\cdot[J_v]=0.$$

Here $\operatorname{Div}_S K$ is the weak surface divergence of [[def-emx-surface-divergence]]. The proof uses [[lem-emx-surface-divergence-c1-representation]] to identify its unique continuous density for the stated $C^1$ current; $\operatorname{div}_S K$ denotes that density. The sign of $n\cdot[J_v]$ uses $[J_v]=J_{v,+}-J_{v,-}$ for the chosen normal. In the stationary-sheet vacuum model, if there is no point-source component in the interface neighbourhood and $D=\varepsilon_0E,\ H=B/\mu_0$, the adopted distributional vacuum Maxwell equations supply the displayed macroscopic equations, so this theorem applies there as well.

## Facts & Assumptions

**Given:** The interface, fields, sources, regularity, units, $\mathrm{AC}_\omega$, and the distributional macroscopic equations of the Statement.

[A1] The four distributional macroscopic equations with volume sources $\rho_v,J_v$ and stationary sheet sources $\sigma\delta_S,K\delta_S$ are the thin-interface solution hypothesis of the stationary macroscopic jump theorem. That theorem assumes this field/source tuple and does not derive it from the smooth equations. [[pthm-em-material-stationary-jumps]]

[A2] For the vacuum specialization only, the adopted distributional vacuum postulate requires $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ in $\mathcal D'(U)$ for the declared stationary-sheet source model. [[post-em-distributional-vacuum-maxwell]]

[F1] The stationary sheet pairings are $\rho_S(\psi)=\int_I\int_S\sigma\psi\,dS\,dt$ and $J_S(\psi)=\int_I\int_SK\psi\,dS\,dt$, with $S$ fixed, $n$ directed from minus to plus, and $K\cdot n=0$. [[def-em-weak-sources]]

[F2] The surface distribution is $\delta_S(\psi)=\int_S\psi\,dS$, and the jump convention is $[F]=F_+-F_-$ for the same normal orientation. [[def-em-surface-distribution]]

[F3] For a piecewise $C^1$ volume current with the stated one-sided traces, its distributional divergence is $\{\operatorname{div}J_v\}+n\cdot[J_v]\delta_S$. [[lem-em-interface-derivatives]]

[F4] The weak surface divergence is defined by $\langle\operatorname{Div}_SK,\phi\rangle=-\int_S K\cdot\nabla_S\phi\,dS$ for $C^1$ scalar tests on $S$; it is a continuous-density divergence only after that representation is proved. [[def-emx-surface-divergence]]

[F11] For every $C^1$ tangential field on the compact $C^2$ surface, the weak surface divergence has a unique continuous density, represented in a chart by $J_X^{-1}\partial_a(J_XK^a)$. [[lem-emx-surface-divergence-c1-representation]]

[F5] If a continuous density on a compact embedded $C^2$ hypersurface pairs to zero against every ambient smooth compactly supported test, then the density is pointwise zero; this statement assumes $\mathrm{AC}_\omega$. [[lem-em-surface-density-localization]]

[F6] Distributional derivatives are linear and commute, and $\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$ for compactly supported smooth tests. [[def-distribution]] [[def-distributional-derivative]] [[thm-distributional-differentiation-is-continuous-and-commutes]]

[F7] The SI constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$, with $\mu_0>0$. [[def-em-si-conventions]]

[F8] A locally integrable function whose regular distribution vanishes is zero almost everywhere; the compact embedded $C^2$ hypersurface $S$ is null for three-dimensional Lebesgue measure because it is the image of a two-dimensional $C^1$ manifold in $\mathbb R^3$. [[thm-locally-integrable-functions-embed-in-distributions]] [[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]

[F9] A compactly supported temporal test permits ordinary integration by parts on $I$ with no endpoint term. [[thm-integration-by-parts]]

[F10] A jointly continuous function on a compact surface times a compact time interval is uniformly bounded there, so dominated convergence makes its surface integral against a fixed continuous test continuous in time. [[thm-dominated-convergence]]

## Proof

**Proof technique:** take the distributional divergence of the macroscopic Ampere equation, expand the volume and sheet divergences with the fixed-interface convention, and identify the continuous surface coefficient. The four field jumps are the exact existing stationary-interface result under the same hypotheses.

1.1 By [A1], $\operatorname{curl}H=J_v+K\delta_S+\partial_tD$ and $\operatorname{div}D=\rho_v+\sigma\delta_S$ hold in distributions. For any vector distribution $H$, the coordinate expression for $\operatorname{div}\operatorname{curl}H$ is $ \partial_1\partial_2H_3-\partial_1\partial_3H_2+\partial_2\partial_3H_1-\partial_2\partial_1H_3+\partial_3\partial_1H_2-\partial_3\partial_2H_1=0, $ because distributional partial derivatives commute by [F6], so the terms cancel in pairs. Taking the divergence of the first equation and substituting the second gives the distributional source-compatibility identity $ \partial_t\rho_v+\partial_t(\sigma\delta_S)+\operatorname{div}J_v+\operatorname{div}(K\delta_S)=0. $ [A1, F6, given, algebra]

1.2 Because $S$ is stationary and $\sigma$ is $C^1$, for every $\psi\in C_c^\infty(U)$, $ \langle\partial_t(\sigma\delta_S),\psi\rangle=-\int_I\int_S\sigma\,\partial_t\psi\,dS\,dt=\int_I\int_S(\partial_t\sigma)\psi\,dS\,dt. $ The last equality is one-dimensional integration by parts in $t$ by [F9]; the test has compact support in the open interval $I$, so its temporal boundary terms vanish. Thus $\partial_t(\sigma\delta_S)=(\partial_t\sigma)\delta_S$, with no transport term because $S$ is fixed. [F1, F2, F6, F9, given, algebra]

1.3 The hypotheses in the Statement coincide with the stationary macroscopic interface hypotheses of [A1]. Applying that result gives $n\cdot[D]=\sigma$, $n\cdot[B]=0$, $n\times[E]=0$, and $n\times[H]=K$ pointwise on $S\times I$, with the same minus-to-plus jump convention. [A1, given]

2.1 The volume-current jump formula [F3] gives $\operatorname{div}J_v=\{\operatorname{div}J_v\}+n\cdot[J_v]\delta_S$. For the sheet current, pair its distributional divergence with a test $\psi$: by the distributional derivative definition and $K\cdot n=0$, $ \langle\operatorname{div}(K\delta_S),\psi\rangle=-\int_I\int_S K\cdot\nabla\psi\,dS\,dt=\int_I\langle\operatorname{Div}_S K,\psi|_S\rangle\,dt. $ The surface divergence here is the functional of [F4]; the identity uses only that $K$ is tangential and the interface has no edge. Substitution into step 1.1 yields $ \{\partial_t\rho_v+\operatorname{div}J_v\}+\bigl(\partial_t\sigma+n\cdot[J_v]\bigr)\delta_S+\operatorname{Div}_S K=0. $ [step 1.1, step 1.2, F1, F2, F3, F4, F6, algebra]

3.1 In every open subset disjoint from $S$, the last two terms of step 2.1 vanish, so the locally integrable volume coefficient $\partial_t\rho_v+\{\operatorname{div}J_v\}$ pairs to zero against every compactly supported test there. By [F8] it vanishes almost everywhere on $U\setminus S$; because [F8] also gives that $S$ is three-dimensionally null, the coefficient vanishes almost everywhere on all of $U$. Removing its regular distribution from step 2.1 leaves $ \bigl(\partial_t\sigma+n\cdot[J_v]\bigr)\delta_S+\operatorname{Div}_S K=0 $ as a surface distribution. [step 2.1, F2, F8, given]

4.1 For each $t\in I$, the field $K(\cdot,t)$ is a $C^1$ tangential field on the compact $C^2$ surface, so [F11] supplies its unique continuous weak-divergence density. In each chart this density is $J_X^{-1}\partial_a(J_XK^a)$; since $K$ is jointly $C^1$ and $J_X$ is positive and $C^1$, the chart formula is jointly continuous in $(x,t)$. Uniqueness makes these local formulas agree on overlaps. Write this joint continuous function as $g(x,t)=\operatorname{div}_S K(x,t)$. The definition [F4], integrated against temporal tests, then identifies the surface functional in step 3.1 with the spacetime distribution $g\delta_S$. [F4, F11, given, algebra]

5.1 Put $q=\partial_t\sigma+n\cdot[J_v]+g$, which is continuous on $S\times I$ by the stated joint $C^1$ regularity and step 4.1. The surface-distribution identity in step 3.1 says that for every ambient spatial test $\eta\in C_c^\infty(\Omega)$ and temporal test $\theta\in C_c^\infty(I)$, $ \int_I\theta(t)\left(\int_Sq(x,t)\eta(x)\,dS(x)\right)dt=0. $ For fixed $\eta$, the inner pairing is continuous in $t$ by [F10]. If it were nonzero at some time, continuity would give an interval on which it has fixed strict sign, and a nonnegative smooth temporal test supported there would make the displayed integral nonzero. Thus the pairing vanishes for every time. Fixing any $t$ and applying [F5] to the continuous density $q(\cdot,t)$ shows $q(x,t)=0$ at every $x\in S$. [step 3.1, step 4.1, F5, F10, given, algebra]

6.1 For the vacuum specialization, put $D=\varepsilon_0E$ and $H=B/\mu_0$. By [A2], $\operatorname{div}D=\varepsilon_0\operatorname{div}E=\rho$, $\operatorname{div}B=0$, and $\operatorname{curl}E=-\partial_tB$; also $ \operatorname{curl}H=\mu_0^{-1}\operatorname{curl}B=J+(\mu_0c^2)^{-1}\partial_tE=J+\partial_tD $ in distributions by [F7]. Thus the adopted vacuum stationary-sheet model supplies [A1] with $\rho_f=\rho$ and $J_f=J$ in the interface neighbourhood, so the preceding steps apply. This is a model specialization, not a derivation of the vacuum postulate. [A2, F7, step 1.1, step 1.3, algebra] ∎

