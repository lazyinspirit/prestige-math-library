---
id: pthm-em-poynting-balance
kind: physics-theorem
title: "Local and fixed-volume electromagnetic energy balance"
domain: physics
physical_scope: "The conditional energy balance of the classical vacuum electromagnetic field: the local identity linking the time derivative of the energy density and the divergence of the Poynting vector to the work density J.E, and its fixed-volume form with the boundary energy flux retained, both deduced from the smooth branch of the adopted vacuum Maxwell equations and the adopted continuum coupling. The statement is conditional on those adopted postulates, excludes the weak branch, singular source support and non-integrable products, and asserts no conservation without the boundary term. No empirical claim is made."
status: draft
origin: pipeline
dependency_level: 18
proof_strategy: direct
deps: [def-countable-choice, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-em-vacuum-energy-flux, def-euclidean-inner-product, lem-em-parameter-integrals, lem-the-divergence-and-curl-of-a-cross-product, post-em-lorentz-coupling, post-em-vacuum-maxwell, thm-algebra-of-derivatives, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-graphs-of-continuous-functions-have-content-zero, cor-integral-over-a-null-set-vanishes]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  post-em-lorentz-coupling: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 printed pp. 92-94 (PDF pp. 100-102), eq. (4.20) and the displayed local continuity equation: the Poynting theorem, the local energy balance with the work term and the plane-wave energy flux; §5.6.1 printed pp. 127-128 (PDF pp. 135-136), eq. (5.45): the local energy identity used in the momentum discussion; read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.1.2 printed pp. 346-348 (PDF pp. 362-364), eqs. (8.5)-(8.11), (8.13)-(8.14): field energy density, Poynting vector, field work/flux balance, and the combined mechanical-plus-field version. Eq. (8.7) supplies the local field-only identity. The open-surface interpretation caveat appears in the footnote on printed p. 347. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§31 printed pp. 75-76 (the energy density and the energy flux vector, eqs. (31.2)-(31.5) in Gaussian units, re-expressed in SI); read in the stamped 387-page full text"
---

## Statement

Assume the smooth branch of the vacuum Maxwell postulate
[[post-em-vacuum-maxwell]] on the laboratory region $U\cong I\times\Omega$ of
[[def-em-lab-geometry]]: the fields $E,B:\Omega\times I\to\mathbb R^3$ are
jointly $C^1$ of [[def-em-fields]] and satisfy, with the continuous source
fields $\rho,J$ of [[def-em-sources]] and the constants of
[[def-em-si-conventions]],

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad\operatorname{div}B=0,\qquad\operatorname{curl}E=-\partial_tB,\qquad\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$$

pointwise on $\Omega\times I$, with $\operatorname{div}$ and
$\operatorname{curl}$ of [[def-divergence-and-curl-of-a-c1-vector-field]]
applied at fixed times and $\partial_t$ the partial derivative at fixed
position of [[def-directional-and-partial-derivatives]]. Let $u$ and $S$ be
the energy density and Poynting vector of [[def-em-vacuum-energy-flux]]. Then:

(a) [Local identity] On $\Omega\times I$,

$$\partial_tu+\operatorname{div}S=-J\cdot E,$$

where $\operatorname{div}S$ is taken at fixed time and $J\cdot E$ is the
Euclidean inner product of [[def-euclidean-inner-product]].

(b) [Fixed-volume identity] Let $\Omega'\subseteq\Omega$ be open with
$\overline{\Omega'}\subseteq\Omega$ carrying the finite piecewise $C^1$
presentation of
[[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], let
$t_0<t_1$ with $(t_0,t_1)\subseteq I$, and let $n$ be the outward unit normal
of $\partial\Omega'$. Assume the Axiom of Countable Choice
$\mathrm{AC}_\omega$ ([[def-countable-choice]]), the hypothesis under which
that divergence theorem is stated. Then for every $t\in(t_0,t_1)$,

$$\frac{d}{dt}\int_{\Omega'}u(x,t)\,dx=-\int_{\Omega'}J\cdot E\,dx-\oint_{\partial\Omega'}S\cdot n\,dS,$$

the closed-surface integral being the finite face sum of that divergence
theorem and the derivative being the derivative of the one-variable function
$t\mapsto\int_{\Omega'}u(x,t)\,dx$ on $(t_0,t_1)$.

(c) [Interpretation and scope] Under clause (ii) of
[[post-em-lorentz-coupling]], $J\cdot E$ is the power density supplied to the
matter model of that coupling, so (a) and (b) read as a local, respectively
fixed-volume, energy balance of the field and that matter model. Nothing is
claimed for a prescribed current without such a matter model, for the weak
branch of the Maxwell postulate, for singular sources, or at field points
where the products defining $u$ or $S$ are not locally integrable; the
fixed-volume identity retains both the work term and the boundary flux. The
field-energy rate can vanish by cancellation of these two terms; vanishing
boundary flux alone does not eliminate exchange with matter. A conservation
claim for field plus matter additionally requires an explicit matter balance. This is a
conditional consequence of the adopted postulates, not an empirical claim.

## Facts & Assumptions

**Given:** The laboratory region $U\cong I\times\Omega$; the smooth branch of [[post-em-vacuum-maxwell]] with the jointly $C^1$ fields of [[def-em-fields]] and the continuous sources of [[def-em-sources]]; the constants of [[def-em-si-conventions]]; and the energy density $u$ and Poynting vector $S$ of [[def-em-vacuum-energy-flux]]. In clause (b) also $\mathrm{AC}_\omega$, the admissible $\Omega'$ and the interval $(t_0,t_1)\subseteq I$.

[F1] The four smooth-branch equations hold pointwise on $\Omega\times I$ as displayed in the Statement, with $\varepsilon_0=(\mu_0c^2)^{-1}$, $c>0$ and $\mu_0>0$ ([[post-em-vacuum-maxwell]], [[def-em-si-conventions]]).

[F2] The fields are jointly $C^1$ on the open set $\Omega\times I$; at fixed time they are $C^1$ spatial fields of [[def-em-fields]], and for fixed position the maps $s\mapsto E_i(x,s)$ and $s\mapsto B_i(x,s)$ are defined on the open interval $I$ and have derivative $\partial_tE_i(x,s)$, respectively $\partial_tB_i(x,s)$, by the definition of the partial derivative ([[def-directional-and-partial-derivatives]]). For differentiable real functions on an interval, sums and scalar multiples have the expected derivatives and the product rule $(fg)'=f'g+fg'$ holds ([[thm-algebra-of-derivatives]]).

[F3] The energy density and Poynting vector are $u=\tfrac{\varepsilon_0}{2}\langle E,E\rangle+\tfrac{1}{2\mu_0}\langle B,B\rangle$ and $S=\mu_0^{-1}E\times B$, of class $C^1$ on $\Omega\times I$; the Euclidean inner product $\langle\cdot,\cdot\rangle$ is bilinear and symmetric; and $\operatorname{div}$ of a $C^1$ field is the sum of the coordinate partial derivatives ([[def-em-vacuum-energy-flux]], [[def-euclidean-inner-product]], [[def-divergence-and-curl-of-a-c1-vector-field]]).

[F4] For $C^1$ fields $F,G$ on an open set of $\mathbb R^3$, $\operatorname{div}(F\times G)=\langle\operatorname{curl}F,G\rangle-\langle F,\operatorname{curl}G\rangle$ pointwise ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F5] Fixed-volume tools: if $K\subseteq\mathbb R^n$ is compact and measurable with $\lambda_n(K)<\infty$ and $f,\partial_tf$ are continuous on an open neighbourhood of $K\times[a,b]$, then $t\mapsto\int_Kf(x,t)\,d\lambda_n(x)$ has derivative $\int_K\partial_tf(x,t)\,d\lambda_n(x)$ at every interior $t\in(a,b)$ ([[lem-em-parameter-integrals]]); if $\Omega$ carries the finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$ with faces counted once off the edge set, under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[F6] Boundary nullity: the graph of a continuous function on a closed nondegenerate rectangle in $\mathbb R^m$ has content zero in $\mathbb R^{m+1}$ ([[thm-graphs-of-continuous-functions-have-content-zero]]), and a nonnegative measurable integral over a Lebesgue-null set vanishes ([[cor-integral-over-a-null-set-vanishes]]); in a finite piecewise $C^1$ presentation each face is a compact Borel subset of a regular $C^1$ hypersurface patch. Proof step 4.1 of [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] establishes ambient Lebesgue-nullity of each such face by graph-coordinate Fubini and rigid change of variables. The finitely many faces cover $\partial\Omega'$, so $\lambda_3(\partial\Omega')\le\sum_j\lambda_3(S_j)=0$.

[F7] The source and coupling conventions: $\rho,J$ are the continuous frame densities of [[def-em-sources]] on $\Omega\times I$, so $J\cdot E$ is continuous; and clause (ii) of [[post-em-lorentz-coupling]] adopts $J\cdot E$ as the power density of an explicitly stated matter model on the laboratory region of [[def-em-lab-geometry]].

## Proof

**Proof technique:** direct; differentiate the quadratic energy density along time, expand the divergence of the Poynting vector by the cross-product identity, cancel the magnetic terms with the two curl equations, and integrate the local identity over an admissible fixed volume with the divergence theorem and compact-parameter differentiation.

1.1 Time derivative of the energy density: fix $(x,t)\in\Omega\times I$. The maps $s\mapsto E_i(x,s)$ and $s\mapsto B_i(x,s)$ are differentiable at $t$ with derivatives $\partial_tE_i(x,t)$ and $\partial_tB_i(x,t)$ by [F2], so the product rule gives $\partial_t\langle E,E\rangle=2\sum_iE_i\,\partial_tE_i=2\langle E,\partial_tE\rangle$ and likewise for $B$; hence $\partial_tu=\varepsilon_0\langle E,\partial_tE\rangle+\mu_0^{-1}\langle B,\partial_tB\rangle$ at $(x,t)$, and the right-hand side is continuous in $(x,t)$. [given, F2, F3, algebra]

1.2 Divergence of the Poynting vector: at each fixed time the fields $E(\cdot,t),B(\cdot,t)$ are $C^1$ on the open set $\Omega$, so [F4] applies and $\operatorname{div}S=\mu_0^{-1}\operatorname{div}(E\times B)=\mu_0^{-1}\bigl(\langle\operatorname{curl}E,B\rangle-\langle E,\operatorname{curl}B\rangle\bigr)$ pointwise on $\Omega\times I$. [given, F3, F4, algebra]

1.3 Fixed-volume setup: let $\Omega'$, $t_0<t_1$ be as in clause (b) and fix $t\in(t_0,t_1)$; choose reals $a,b$ with $t_0<a<t<b<t_1$. The set $\overline{\Omega'}$ is compact and contained in the open $\Omega$, and $u$ and its partial derivative $\partial_tu$ are continuous on a neighbourhood of $\overline{\Omega'}\times[a,b]$ by [F3]; the boundary $\partial\Omega'$ is Lebesgue-null by the finite piecewise $C^1$ presentation and [F6], so the integrals of $u$ and of $\partial_tu$ over $\Omega'$ and over $\overline{\Omega'}$ agree, the signed case following by applying the vanishing statement to the positive and negative parts. By [F5] the function $t\mapsto\int_{\Omega'}u(x,t)\,dx$ is therefore differentiable at $t$ with derivative $\int_{\Omega'}\partial_tu(x,t)\,dx$. [given, F3, F5, F6, algebra]

2.1 Local identity: substitute [F1] into steps 1.1 and 1.2. Since $\operatorname{curl}E=-\partial_tB$ and $\langle\cdot,\cdot\rangle$ is symmetric, $\mu_0^{-1}\langle B,\partial_tB\rangle+\mu_0^{-1}\langle\operatorname{curl}E,B\rangle=\mu_0^{-1}\langle B,\partial_tB\rangle-\mu_0^{-1}\langle\partial_tB,B\rangle=0$; hence $\partial_tu+\operatorname{div}S=\varepsilon_0\langle E,\partial_tE\rangle-\mu_0^{-1}\langle E,\mu_0J+c^{-2}\partial_tE\rangle=-J\cdot E+(\varepsilon_0-(\mu_0c^2)^{-1})\langle E,\partial_tE\rangle=-J\cdot E$, which is clause (a). [step 1.1, step 1.2, F1, algebra]

3.1 Fixed-volume identity: by step 1.3 and clause (a) just proved, $\frac{d}{dt}\int_{\Omega'}u\,dx=\int_{\Omega'}\partial_tu\,dx=-\int_{\Omega'}J\cdot E\,dx-\int_{\Omega'}\operatorname{div}S(\cdot,t)\,dx$. The field $S(\cdot,t)$ is $C^1$ on a neighbourhood of $\overline{\Omega'}$ by [F3] and step 1.1, so the divergence theorem of [F5] applies to it and $\int_{\Omega'}\operatorname{div}S(\cdot,t)\,dx=\oint_{\partial\Omega'}S\cdot n\,dS$ as a finite face sum; substituting gives clause (b), under the stated $\mathrm{AC}_\omega$. [step 1.2, step 1.3, step 2.1, F5, algebra]

4.1 Clause (c) records the interpretation of $J\cdot E$ through clause (ii) of [F7], the exclusions already visible in [F1] and [F3] (weak branch, singular support, non-integrable products), and the retention of the boundary term in clause (b); the argument used only the two adopted postulates, the definitions of the field quantities, the cross-product divergence identity and the integration interface, and made no empirical claim. [step 2.1, step 3.1, F1, F3, F7] ∎

## Remarks

- **Where the two canceling terms come from.** The magnetic pair $\mu_0^{-1}\langle B,\partial_tB\rangle$ and $\mu_0^{-1}\langle\operatorname{curl}E,B\rangle$ cancels exactly because Faraday's law carries the minus sign; the electric residual vanishes because $\varepsilon_0\mu_0c^2=1$ is the defining relation of [[def-em-si-conventions]]. Neither cancellation assumes $\partial_tu$ or $\operatorname{div}S$ to be separately conserved.
- **The boundary term is not optional.** On a fixed volume the balance reads $dE_{\Omega'}/dt=-\int_{\Omega'}J\cdot E-\oint_{\partial\Omega'}S\cdot n$; dropping the surface term requires either a vanishing normal flux or its inclusion in an enlarged system, which is exactly the qualification recorded in clause (c).
- **Regularity.** The argument uses only first derivatives of $E$ and $B$; the additional smoothness demanded by other branches of the framework is not needed for this balance, and no assumption is made at points of singular source support.
