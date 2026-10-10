---
id: ex-em-dielectric-interface-example
kind: example
title: "Planar dielectric interface with prescribed free surface charge"
status: draft
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-cross-product-in-r3, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-euclidean-inner-product, post-em-material-closure, pthm-em-material-stationary-jumps, def-countable-choice, pthm-em-macroscopic-maxwell, def-distribution, def-distributional-derivative, def-test-function-space-d-of-an-open-set, thm-ftc-second-part, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integration-by-parts, lem-test-function-cutoffs-and-euclidean-localization, thm-dominated-convergence, cor-graph-of-a-measurable-function-is-lebesgue-null, lem-fundamental-lemma-of-the-calculus-of-variations]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  post-em-material-closure: physical-assumption
  pthm-em-material-stationary-jumps: physical-result
  def-countable-choice: mathematical-premise
  pthm-em-macroscopic-maxwell: physical-result
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-graph-of-a-measurable-function-is-lebesgue-null: mathematical-premise
  lem-fundamental-lemma-of-the-calculus-of-variations: mathematical-premise
physical_scope: "The explicit planar dielectric-interface calculation: continuity of the tangential electric field and the normal displacement jump eps2 E_2n - eps1 E_1n = sigma_f (with E_2n=(eps1/eps2)E_1n+sigma_f/eps2) for two homogeneous linear dielectrics at rest, with the magnetic companions n.B=0 and n x H=0 when K_f=0. A local conditional field computation; no global configuration, no existence statement and no empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.3 printed pp. 185-186 (PDF pp. 193-194), equations (7.17)-(7.20): the normal-D, normal-B, tangential-E and tangential-H matching conditions at a dielectric interface. Read in the retained 236-page full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.3.3 printed p. 178 and sec. 7.3.6 printed pp. 331-333, equations (7.59)-(7.64): the boundary conditions at a dielectric interface with free surface charge. Read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: "http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf"
      locator: "sec. 6.3 'Boundary conditions for E and D' printed p. 197, equations (6.13)-(6.15): the pillbox and loop derivation of the electric matching conditions. Read in the fetched complete 364-page course book."
---

## Example

Let the laboratory frame, coordinates $(x,y,z)$ and units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], and let $S=\{z=0\}\cap\Omega$ be a stationary planar interface with unit normal $n=e_z$ pointing from the side $\Omega_-=\Omega\cap\{z<0\}$ to the side $\Omega_+=\Omega\cap\{z>0\}$. Suppose each half-space carries a homogeneous linear dielectric at rest in the laboratory frame in the elementary branch of [[post-em-material-closure]]: constants $\varepsilon_1,\varepsilon_2\in(0,\infty)$ with $D=\varepsilon_1E$ on $\Omega_-$ and $D=\varepsilon_2E$ on $\Omega_+$. Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $E,B,D,H$ be locally integrable, $C^1$ off the plane and jointly one-sided $C^1$ up to it on every compact test cylinder, as in the joint branch of [[pthm-em-material-stationary-jumps]]. Assume locally the four distributional macroscopic equations of [[pthm-em-macroscopic-maxwell]], with volume sources $\rho_v,J_v$ continuous off the plane and locally integrable across it, free charge $\rho_f=\rho_v+\sigma_f\delta_S$ for a constant $\sigma_f\in\mathbb R$ in $\mathrm C\,\mathrm m^{-2}$, and free current $J_f=J_v$ (no free sheet current). Here the plane distribution is defined locally by $\langle\delta_S,\psi\rangle=\int\psi(x,y,0,t)\,dx\,dy\,dt$ for compactly supported tests on the laboratory region; no global compactness of this plane is asserted. These are the local planar counterparts of the compact-interface hypotheses in [[pthm-em-material-stationary-jumps]]. Write $E_{j\,t}$, $E_{j\,n}$ for the tangential and normal parts of the one-sided trace $E_j$ and $D_j$ ($j=1$ on $\Omega_-$, $j=2$ on $\Omega_+$), defined by $E_{jn}:=n\cdot E_j$ and $E_{jt}:=E_j-E_{jn}n$, with the analogous definitions for $D_j$ and $B_j$ ([[def-euclidean-inner-product]]). Then:

**(a) [Tangential field]** $n\times[E]=0$, i.e. $E_{2t}=E_{1t}$: the tangential electric field is continuous across the interface.

**(b) [Normal displacement]** $n\cdot[D]=\sigma_f$, i.e. $\varepsilon_2E_{2n}-\varepsilon_1E_{1n}=\sigma_f$, hence $E_{2n}=\frac{\varepsilon_1}{\varepsilon_2}E_{1n}+\frac{\sigma_f}{\varepsilon_2}$.

**(c) [No free sheet charge]** If $\sigma_f=0$, then $\varepsilon_2E_{2n}=\varepsilon_1E_{1n}$ and $E_{2n}=\frac{\varepsilon_1}{\varepsilon_2}E_{1n}$: the normal component is scaled by the positive ratio $\varepsilon_1/\varepsilon_2$, so $E_{2n}$ and $E_{1n}$ have the same sign (and vanish together). Precisely, $E_{2n}=E_{1n}$ if and only if $(\varepsilon_1-\varepsilon_2)E_{1n}=0$: equality holds when the normal field is zero even for unequal permittivities; if $E_{1n}\ne0$, it holds exactly when $\varepsilon_1=\varepsilon_2$. A free surface charge $\sigma_f\ne0$ modifies the normal condition as displayed and is not silently set to zero.

**(d) [Magnetic companions]** $n\cdot[B]=0$ and, with $K_f=0$, $n\times[H]=0$; for nonmagnetic media with $H=\mu_0^{-1}B$ on both sides this gives $B_{2n}=B_{1n}$ and $B_{2t}=B_{1t}$.

**(e) [Scope]** A local interface computation under the stated model hypotheses: it solves the electric jump relations against the linear constitutive relations on the two sides and asserts no global field configuration, no existence of the fields, no constitutive law beyond the declared branch and no empirical claim.

## Verification

**Proof technique:** local compact-test interface integration by parts on the plane followed by substitution of the constitutive relations.

**Given:** The planar configuration, regularity, sources and assumed local distributional equations of the Example, with $\mathrm{AC}_\omega$; the fields are identified with their regular distributions and the plane functional is $\langle\delta_S,\psi\rangle=\int\psi(x,y,0,t)\,dx\,dy\,dt$ ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]]).

[A1] The constitutive relations: $D=\varepsilon_1E$ on $\Omega_-$ and $D=\varepsilon_2E$ on $\Omega_+$ with constants $\varepsilon_1,\varepsilon_2>0$, the elementary branch of [[post-em-material-closure]].

[A2] The assumed local distributional macroscopic equations with $\rho_f=\rho_v+\sigma_f\delta_S$ and $J_f=J_v$, in the equation forms of [[pthm-em-macroscopic-maxwell]]; this is a hypothesis of the Example, not a conclusion of the item.

[L1] One-dimensional integration by parts: for differentiable $u,v$ on $[a,b]$ with integrable derivatives, $\int_a^bu\,v'=u(b)v(b)-u(a)v(a)-\int_a^bu'\,v$ ([[thm-integration-by-parts]]); the integral of a derivative is the difference of endpoint values ([[thm-ftc-second-part]]).

[L2] For $L^1$ functions on sigma-finite product spaces the iterated and multiple integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[L3] There are smooth compactly supported cutoffs equal to one on a neighbourhood of a compact set ([[lem-test-function-cutoffs-and-euclidean-localization]]), and if $f_n\to f$ almost everywhere with $|f_n|\le g$ for a single integrable $g$, then $\int f_n\to\int f$ ([[thm-dominated-convergence]]).

[L4] The coordinate hyperplane $\{z=0\}$ in $\mathbb R^4$ is Lebesgue-null, being the graph of a measurable function ([[cor-graph-of-a-measurable-function-is-lebesgue-null]]).

[L5] If $g\in L^1_{\mathrm{loc}}$ on an open set satisfies $\int g\varphi=0$ for every test function $\varphi$, then $g=0$ almost everywhere ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

[L6] The Euclidean dot and cross products on $\mathbb R^3$: $\langle x,y\rangle=\sum_kx_ky_k$ ([[def-euclidean-inner-product]]) and the antisymmetric cross product with $e_z\times(F_1,F_2,F_3)=(-F_2,F_1,0)$ ([[def-cross-product-in-r3]]).

1.1 Localize a test by a smooth partition of unity [L3] to finitely many rectangular boxes compactly contained in $U$; for boxes meeting the plane choose the height interval to straddle $z=0$. It suffices to prove the identity for each localized test and sum. Let $F\in\{E,B,D,H\}$ and let $\psi$ be supported in one such box. For fixed $(x,y,t)$ with $z\ne0$ the map $z\mapsto F(x,y,z,t)$ is $C^1$ on each part of that height interval and has the stated one-sided $C^1$ extensions at zero; applying [L1] on the two closed height subintervals and summing gives $\int_{\mathbb R}F\,\partial_z\psi\,dz=-[F](x,y,0,t)\,\psi(x,y,0,t)-\int_{\mathbb R}\{\partial_zF\}\psi\,dz$, because the outer boundary terms vanish by compact support; integrating over $x,y,t$ by [L2], with the plane $\{z=0\}$ null by [L4] so that the split into the two half-spaces is exact, gives $\langle\partial_zF,\psi\rangle=\int_U\{\partial_zF\}\psi+\langle[F]\delta_S,\psi\rangle$ componentwise, i.e. $\operatorname{div}F=\{\operatorname{div}F\}+e_z\cdot[F]\,\delta_S$ and $\operatorname{curl}F=\{\operatorname{curl}F\}+e_z\times[F]\,\delta_S$ by [L6], the tangential derivatives contributing no sheet term. [L1, L2, L3, L4, L6]

1.2 The same per-line integration by parts in $t$, with $\psi$ of compact $t$-support and the plane stationary and null by [L4], gives $\langle\partial_tF,\psi\rangle=\int_U\{\partial_tF\}\psi$ for every test $\psi$: time differentiation at the fixed plane contributes no sheet term, and the piecewise derivatives are locally bounded by the joint one-sided $C^1$ hypothesis. [L1, L2, L4]

2.1 Substituting the spatial identities of step 1.1 and the temporal identity of step 1.2 into the assumed equations [A2] gives four distributional identities of the form $u_g+a\delta_S=0$ on the local region, with locally integrable volume parts $g$: $u_{\{\operatorname{div}D\}-\rho_v}+(n\cdot[D]-\sigma_f)\delta_S=0$, $u_{\{\operatorname{div}B\}}+n\cdot[B]\delta_S=0$, $u_{\{\operatorname{curl}E\}+\{\partial_tB\}}+n\times[E]\delta_S=0$ and $u_{\{\operatorname{curl}H\}-J_v-\{\partial_tD\}}+n\times[H]\delta_S=0$, where the two half-space fields are $C^1$ with locally bounded derivatives and $\rho_v,J_v$ are locally integrable. [A2, step 1.1, step 1.2]

3.1 [Coefficient extraction] Let $b\in C_c^\infty((-1,1))$, extended by zero to $\mathbb R$, with $b(0)=1$, $0\le b\le1$ [L3] and put $\psi_h:=\psi\,b(z/h)$ for a test $\psi$; testing an identity $u_g+a\delta_S=0$ of step 2.1 with $\psi_h$ gives $0=\int_Ug\psi_h+\int_{\{z=0\}}a\psi_h$, whose second term tends to $\int_{\{z=0\}}a\psi$ because $b(z/h)\to b(0)=1$ everywhere on the plane and the integrands are dominated by $|a\psi|$ on the compactly supported part of the plane, while the first term tends to $0$ because $|\int_Ug\psi_h|\le\int_U|g\psi|\mathbf 1_{\{|z|\le h\}}$ with integrands converging to $0$ almost everywhere, dominated by the integrable $|g\psi|$, the exceptional set $\{z=0\}$ being null [L4]. Hence $\int_{\{z=0\}}a\psi=0$ for every test $\psi$; taking $\psi(x,y,z,t)=\eta(x,y,t)\beta(z)$ with $\eta$ supported in the tangential/time part of one of those local boxes and $\beta$ supported in its height interval with $\beta(0)=1$ reduces this to $\int a(x,y,0,t)\eta(x,y,t)\,dx\,dy\,dt=0$ for every $\eta$, so the continuous function $(x,y,t)\mapsto a(x,y,0,t)$ vanishes identically by [L5]. All four coefficients of step 2.1 therefore vanish pointwise on the plane. [step 2.1, L3, L4, L5]

4.1 Applying step 3.1 and the constitutive relations [A1]: (a) $n\times[E]=0$, so the tangential parts agree, $E_{2t}=E_{1t}$; (b) $n\cdot[D]=\sigma_f$ with $D_j=\varepsilon_jE_j$ on the two sides gives $\varepsilon_2E_{2n}-\varepsilon_1E_{1n}=\sigma_f$ and, since $\varepsilon_2>0$, $E_{2n}=(\varepsilon_1/\varepsilon_2)E_{1n}+\sigma_f/\varepsilon_2$; (c) if $\sigma_f=0$ the previous identity reads $\varepsilon_2E_{2n}=\varepsilon_1E_{1n}$, so $E_{2n}=(\varepsilon_1/\varepsilon_2)E_{1n}$ has the same sign as $E_{1n}$ and vanishes with it, and $E_{2n}=E_{1n}$ holds if and only if $(\varepsilon_1-\varepsilon_2)E_{1n}=0$, i.e. when $E_{1n}=0$ or $\varepsilon_1=\varepsilon_2$; (d) $n\cdot[B]=0$ and $n\times[H]=0$, and in the nonmagnetic case $H=\mu_0^{-1}B$ on both sides the two identities give $[B_n]=0$ and $[B_t]=0$, hence $B_{2n}=B_{1n}$ and $B_{2t}=B_{1t}$ by the decomposition of [L6]. The scope (e) holds: the computation uses only the assumed local equations and the declared linear branch, asserts no global configuration, no existence, no further constitutive law and no empirical claim. [step 3.1, A1, L6] ∎
