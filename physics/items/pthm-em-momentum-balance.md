---
id: pthm-em-momentum-balance
kind: physics-theorem
title: "Local and fixed-volume momentum balance for smooth sources"
domain: physics
physical_scope: "The conditional momentum balance of the classical vacuum electromagnetic field: the local identity linking the time derivative of the momentum density and the divergence of the momentum flux tensor to the adopted continuum force density, and its fixed-volume traction form with the boundary stress retained, deduced from the smooth branch of the adopted vacuum Maxwell equations and the adopted continuum coupling. The statement is conditional on those adopted postulates, excludes the weak branch, singular source support and non-integrable products, and includes no self-force, radiation reaction or monopole term. No empirical claim is made."
status: draft
origin: pipeline
dependency_level: 18
proof_strategy: direct
deps: [def-countable-choice, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-em-vacuum-stress-momentum, def-euclidean-inner-product, lem-em-parameter-integrals, lem-em-quadratic-stress-identity, post-em-lorentz-coupling, post-em-vacuum-maxwell, thm-algebra-of-derivatives, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-graphs-of-continuous-functions-have-content-zero, cor-integral-over-a-null-set-vanishes, def-em-vacuum-energy-flux]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-vacuum-stress-momentum: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-em-quadratic-stress-identity: mathematical-premise
  post-em-lorentz-coupling: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.6.1 printed pp. 128-129 (PDF pp. 136-137), eqs. (5.46)-(5.48): momentum density and local force balance; Tong's stress equals our Pi=-sigma. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.2.1-8.2.2 printed pp. 349-353, eqs. (8.19)-(8.21): the stress tensor components, the momentum density eps_0mu_0S and the balance dP/dt = surface traction - force integral; read in the stamped scanned full text"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§32 printed pp. 79-80 (PDF pp. 91-92), eqs. (32.11)-(32.14): generic flux balance; §33 printed pp. 81-83 (PDF pp. 93-95), eqs. (33.3), (33.7): electromagnetic spatial stress and field force exchange, in Gaussian units re-expressed in SI. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
---

## Statement

Assume the smooth branch of [[post-em-vacuum-maxwell]] and clause (ii) of
[[post-em-lorentz-coupling]] on the laboratory region $U\cong I\times\Omega$
of [[def-em-lab-geometry]]: the fields $E,B:\Omega\times I\to\mathbb R^3$ are
jointly $C^1$ of [[def-em-fields]], the source fields $\rho,J$ are continuous
of [[def-em-sources]], the constants are those of [[def-em-si-conventions]],
the force density is
$f:=\rho E+J\times B$ of that clause (ii), in
$\mathrm N\,\mathrm m^{-3}$, and $g,\sigma,\Pi=-\sigma$ are the momentum
density, Maxwell stress and momentum flux of
[[def-em-vacuum-stress-momentum]]. Then:

(a) [Local identity] On $\Omega\times I$, componentwise,

$$\partial_tg-\operatorname{div}\sigma=-f,\qquad\text{equivalently}\qquad\partial_tg+\operatorname{div}\Pi=-f,$$

that is, $\partial_tg_i-\sum_{j=1}^{3}\partial_j\sigma_{ij}=-(\rho E_i+(J\times B)_i)$ for every $i$, with $\partial_t$ the partial derivative at fixed position and $\operatorname{div}$ taken at fixed time.

(b) [Fixed-volume identity] Let $\Omega'\subseteq\Omega$ be open with
$\overline{\Omega'}\subseteq\Omega$ carrying the finite piecewise $C^1$
presentation of
[[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], let
$t_0<t_1$ with $(t_0,t_1)\subseteq I$, assume $\mathrm{AC}_\omega$
([[def-countable-choice]]), and let $n$ be the outward unit normal. Then for
every $t\in(t_0,t_1)$ and every $i$,

$$\frac{d}{dt}\int_{\Omega'}g_i\,dx=\oint_{\partial\Omega'}\Bigl(\sum_{j=1}^{3}\sigma_{ij}n_j\Bigr)dS-\int_{\Omega'}f_i\,dx=-\oint_{\partial\Omega'}\Bigl(\sum_{j=1}^{3}\Pi_{ij}n_j\Bigr)dS-\int_{\Omega'}f_i\,dx,$$

the closed-surface integrals being the finite face sums of that divergence
theorem.

(c) [Scope] The identities are conditional on the two adopted postulates. The
force density $f$ is defined only for the matter model of clause (ii), so no
claim is made about a prescribed current without such a matter model. No
conservation of field-plus-matter momentum follows without explicit matter
balances and their boundary fluxes. The field-momentum rate in (b) is the
boundary traction minus the integrated matter force; these terms can cancel,
and neither may be discarded without justification. The weak branch, singular sources and
non-integrable products are excluded as in
[[def-em-vacuum-energy-flux]]; no self-force, radiation reaction or
magnetic-monopole coupling is included, in accordance with the exclusions of
[[post-em-lorentz-coupling]]. This is not an empirical claim.

## Facts & Assumptions

**Given:** The laboratory region $U\cong I\times\Omega$; the smooth branch of [[post-em-vacuum-maxwell]] with the jointly $C^1$ fields of [[def-em-fields]] and the continuous sources of [[def-em-sources]]; clause (ii) of [[post-em-lorentz-coupling]]; the constants of [[def-em-si-conventions]]; and $g,\sigma,\Pi$ of [[def-em-vacuum-stress-momentum]]. In clause (b) also $\mathrm{AC}_\omega$, the admissible $\Omega'$ and $(t_0,t_1)\subseteq I$.

[F1] The four smooth-branch equations hold pointwise on $\Omega\times I$: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with $\varepsilon_0=(\mu_0c^2)^{-1}$, $c>0$ and $\mu_0>0$ ([[post-em-vacuum-maxwell]], [[def-em-si-conventions]]).

[F2] The fields are jointly $C^1$ on the open $\Omega\times I$: for fixed position the component maps $s\mapsto E_i(x,s)$, $s\mapsto B_i(x,s)$ are differentiable with derivatives $\partial_tE_i$, $\partial_tB_i$; sums, scalar multiples and products of differentiable functions of the time variable obey the usual rules, and components of a cross product are finite sums of component products ([[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[def-cross-product-in-r3]]).

[F3] The objects $g,\sigma,\Pi$ of [[def-em-vacuum-stress-momentum]] are of class $C^1$ on $\Omega\times I$, with $g=\varepsilon_0E\times B$, $\sigma_{ij}=\varepsilon_0(E_iE_j-\tfrac12\delta_{ij}\lvert E\rvert^2)+\mu_0^{-1}(B_iB_j-\tfrac12\delta_{ij}\lvert B\rvert^2)$ symmetric, $\Pi=-\sigma$, and $(\operatorname{div}\sigma)_i=\sum_{j=1}^{3}\partial_j\sigma_{ij}$ at fixed time; the dot and cross products are those of [[def-euclidean-inner-product]] and [[def-cross-product-in-r3]].

[F4] Quadratic stress identity: for a $C^1$ field $F:U\to\mathbb R^3$ on an open $U\subseteq\mathbb R^3$ and $Q_{ij}=F_iF_j-\tfrac12\delta_{ij}\lvert F\rvert^2$, $\operatorname{div}Q=F\operatorname{div}F-F\times\operatorname{curl}F$ pointwise ([[lem-em-quadratic-stress-identity]]).

[F5] Fixed-volume tools: for compact measurable $K$ with finite Lebesgue measure and $f,\partial_tf$ continuous on a neighbourhood of $K\times[a,b]$, $t\mapsto\int_Kf\,d\lambda_n$ is differentiable on $(a,b)$ with derivative $\int_K\partial_tf\,d\lambda_n$ ([[lem-em-parameter-integrals]]); if $\Omega$ carries the finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$ with faces counted once off the edge set, under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]); and the boundary of such an $\Omega$ is Lebesgue-null by the graph-coordinate Fubini and rigid-change-of-variables argument in Proof step 4.1 of that divergence theorem, followed by finite subadditivity over its faces; a nonnegative measurable integral over a null set vanishes ([[cor-integral-over-a-null-set-vanishes]]), so signed integrals over $\Omega$ and over its closure agree.

[F6] The force density is $f=\rho E+J\times B$, a continuous map $\Omega\times I\to\mathbb R^3$ with unit $\mathrm N\,\mathrm m^{-3}$ ([[post-em-lorentz-coupling]], [[def-em-sources]]).

## Proof

**Proof technique:** direct; apply the quadratic stress identity with coefficients $\varepsilon_0$ and $\mu_0^{-1}$, substitute the four smooth Maxwell equations, identify the time derivative of the momentum density by the product rule, and integrate the resulting pointwise identity over an admissible fixed volume with the divergence theorem.

1.1 Divergence of the stress tensor: define $Q^{(E)}_{ij}=E_iE_j-\tfrac12\delta_{ij}\lvert E\rvert^2$ and $Q^{(B)}_{ij}=B_iB_j-\tfrac12\delta_{ij}\lvert B\rvert^2$ at fixed time. Both are $C^1$ on the open $\Omega$, and [F4] applied to $F=E$ and to $F=B$ gives $\operatorname{div}Q^{(E)}=E\operatorname{div}E-E\times\operatorname{curl}E$ and $\operatorname{div}Q^{(B)}=B\operatorname{div}B-B\times\operatorname{curl}B$; since $\sigma=\varepsilon_0Q^{(E)}+\mu_0^{-1}Q^{(B)}$ and $\operatorname{div}$ is linear in its argument, $\operatorname{div}\sigma=\varepsilon_0(E\operatorname{div}E-E\times\operatorname{curl}E)+\mu_0^{-1}(B\operatorname{div}B-B\times\operatorname{curl}B)$ pointwise on $\Omega\times I$. [given, F3, F4, algebra]

1.2 Time derivative of the momentum density: because $g=\varepsilon_0E\times B$ and the components of $E\times B$ are finite sums of products of the component functions, the product rule and linearity [F2] give $\partial_t(E\times B)=\partial_tE\times B+E\times\partial_tB$ componentwise, hence $\partial_tg=\varepsilon_0(\partial_tE\times B+E\times\partial_tB)$ pointwise. [given, F2, F3, algebra]

1.3 Fixed-volume setup: let $\Omega'$, $t_0<t_1$ be as in clause (b), fix $t\in(t_0,t_1)$ and choose $a,b$ with $t_0<a<t<b<t_1$. The closure $\overline{\Omega'}$ is compact and contained in the open $\Omega$, and each $g_i$ together with $\partial_tg_i$ is continuous on a neighbourhood of $\overline{\Omega'}\times[a,b]$ by [F3]; the boundary is Lebesgue-null by the finite piecewise $C^1$ presentation and [F5], so integrals over $\Omega'$ and over its closure agree, and [F5] makes $t\mapsto\int_{\Omega'}g_i(x,t)\,dx$ differentiable at $t$ with derivative $\int_{\Omega'}\partial_tg_i(x,t)\,dx$. [given, F3, F5, algebra]

2.1 Local identity: substitute [F1] into step 1.1: $\operatorname{div}\sigma=\rho E-\varepsilon_0E\times(-\partial_tB)-\mu_0^{-1}B\times(\mu_0J+c^{-2}\partial_tE)=\rho E+\varepsilon_0E\times\partial_tB-B\times J-(\mu_0c^2)^{-1}B\times\partial_tE$. By bilinearity and alternation of the cross product, $-B\times J=J\times B$ and $-(\mu_0c^2)^{-1}B\times\partial_tE=\varepsilon_0\,\partial_tE\times B$; hence $\operatorname{div}\sigma=\rho E+J\times B+\varepsilon_0(E\times\partial_tB+\partial_tE\times B)=f+\partial_tg$ by [F6] and step 1.2. Therefore $\partial_tg-\operatorname{div}\sigma=-f$, equivalently $\partial_tg+\operatorname{div}\Pi=-f$ because $\Pi=-\sigma$; this is clause (a). [step 1.1, step 1.2, F1, F6, algebra]

3.1 Fixed-volume identity: by steps 1.3 and 2.1, for each $i$ we have $\frac{d}{dt}\int_{\Omega'}g_i\,dx=\int_{\Omega'}\partial_tg_i\,dx=\int_{\Omega'}(\operatorname{div}\sigma)_i\,dx-\int_{\Omega'}f_i\,dx$; the fixed-time vector field $x\mapsto(\sigma_{i1},\sigma_{i2},\sigma_{i3})(x,t)$ is $C^1$ on a neighbourhood of $\overline{\Omega'}$ by [F3], so the divergence theorem of [F5] gives $\int_{\Omega'}(\operatorname{div}\sigma)_i\,dx=\oint_{\partial\Omega'}\sum_j\sigma_{ij}n_j\,dS$ as a finite face sum. Substituting $\Pi=-\sigma$ turns this into the two displayed equalities of clause (b) under the stated $\mathrm{AC}_\omega$. [step 1.3, step 2.1, F5, algebra]

4.1 Clause (c) records the postulational status of the two inputs, the model dependence of $f$ and of the boundary term, and the exclusions inherited from the weak branch and from the coupling; the argument used only the adopted postulates, the definitions of $g,\sigma,\Pi$, the quadratic stress identity and the integration interface, and made no empirical claim. [step 2.1, step 3.1, F1, F3, F6] ∎

## Remarks

- **The two coefficient applications.** The identity is applied once with coefficient $\varepsilon_0$ to the electric quadratic form and once with coefficient $\mu_0^{-1}$ to the magnetic one; equivalently one applies it to the pair $(\sqrt{\varepsilon_0}E,\mu_0^{-1/2}B)$, but the displayed form keeps the SI constants in their physical places.
- **Why the magnetic curl term survives.** Unlike the energy balance, the momentum balance does not cancel the magnetic terms: $\operatorname{div}Q^{(B)}=-B\times\operatorname{curl}B$ contributes the Ampere-law current and the displacement term, whose combination with $\partial_tg$ produces the force density $J\times B$.
- **Boundary term and traction.** On a fixed volume the identity reads $dP_{\Omega',i}/dt=\oint_{\partial\Omega'}\sigma_{ij}n_j\,dS-\int_{\Omega'}f_i\,dx$, the first term being the traction of the field on the boundary; the minus sign in $\Pi=-\sigma$ fixes the sign convention of every later material balance.
