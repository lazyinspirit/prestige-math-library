---
id: thm-cm-local-momentum-balance
kind: theorem
title: "Local momentum balance: $\\rho D_tu=\\rho b+\\operatorname{div}\\sigma$ from the integral balance on every material subregion"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-material-region-and-density, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-transport-theorem, lem-cm-localization-of-vanishing-integrals, def-cm-traction-and-stress, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-countable-choice, def-integral-over-a-measurable-set, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-half-open-box, def-metric-ball, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-interval]
dependency_roles:
  def-cm-material-region-and-density: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-transport-theorem: mathematical-premise
  lem-cm-localization-of-vanishing-integrals: mathematical-premise
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-half-open-box: mathematical-premise
  def-metric-ball: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 4.4–4.6 (balance of momentum principles and the field equations)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (the stress tensor and the key equation of continuum dynamics, Eq. (7.25))"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as used by the transport and divergence theorems. Let $I\subseteq\mathbb R$ be a nonempty open interval, let $B\subseteq\mathbb R^3$ be a material region, let $\chi$ be a motion of $B$ on $I$ with spatial velocity $u$ and material derivative $D_t$ ([[def-cm-continuum-motion]], [[def-cm-euclidean-spatial-calculus]]), let $J_0\subseteq I$ be an open interval with $\overline{J_0}\subseteq I$, and let $U$ contain the swept region $\Sigma=\{(t,x):t\in\overline{J_0},\ x\in\chi_t(\overline B)\}$.

Let $\rho:U\to(0,\infty)$ be a $C^1$ density field, let $\sigma:U\to M_3(\mathbb R)$ be a $C^1$ field (the stress field of [[def-cm-traction-and-stress]]), and let $b:U\to\mathbb R^3$ be continuous. Suppose:

**(K)** $\rho$ satisfies $\partial_t\rho+\operatorname{div}(\rho u)=0$ on $U$;

**(L)** for every material subregion $B'$ (nonempty bounded open with $\overline{B'}\subseteq B$) and every $t\in J_0$, the set $\chi_t(B')$ is a bounded $C^1$ domain ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]) and

$$\frac{d}{dt}\int_{\chi_t(B')}\rho(t,x)u(t,x)\,dx=\int_{\chi_t(B')}\rho(t,x)b(t,x)\,dx+\int_{\partial\chi_t(B')}\sigma(t,y)\,\nu(y)\,dS(y),$$

where $\nu$ is the outward unit normal and the surface integral is that of [[def-surface-integral-on-a-compact-c-one-hypersurface]].

Define the **row divergence** of $\sigma$ componentwise by

$$g(t,x):=\Bigl(\sum_{j}\partial_j\sigma_{1j},\ \sum_{j}\partial_j\sigma_{2j},\ \sum_{j}\partial_j\sigma_{3j}\Bigr)(t,x).$$

Then for every $(t,x)\in J_0\times\chi_t(B)$,

$$\rho(t,x)\,D_tu(t,x)=\rho(t,x)\,b(t,x)+g(t,x).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the motion $\chi$; $\rho,\sigma,b$ with hypotheses (K) and (L).

[F1] Transport theorem, componentwise: for each component $i$, $\frac{d}{dt}\int_{\chi_t(B')}\rho u_i=\int_{\chi_t(B')}\bigl(\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)\bigr)$, for every material subregion $B'$ and $t\in J_0$ ([[thm-cm-transport-theorem]], [[def-cm-continuum-motion]]). Here $\rho u$ is a $C^1$ vector field on $U$ by [[def-ck-euclidean-maps-and-diffeomorphisms]] and [[thm-algebra-of-derivatives]].

[F2] Divergence theorem on a bounded $C^1$ domain: for $F\in C^1(\overline\Omega;\mathbb R^3)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$, with interior-up-to-boundary regularity ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]). Applied to the rows $F_i:=(\sigma_{i1},\sigma_{i2},\sigma_{i3})$ on $\Omega=\chi_t(B')$, whose closure lies in $U$, it gives $\int_{\partial\chi_t(B')}\sigma\nu\,dS=\int_{\chi_t(B')}g\,dx$ componentwise; the hypothesis (L) provides the surface integral with the outward normal convention of [[def-cm-traction-and-stress]].

[F3] For a $C^1$ vector field $u$ and a $C^1$ scalar $\rho$,

$$\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)-u_i\bigl(\partial_t\rho+\operatorname{div}(\rho u)\bigr)=\rho\,\partial_tu_i+\rho\sum_j u_j\,\partial_ju_i ,$$

as a direct computation from the product rule: $\operatorname{div}(\rho u_iu)=u_i\operatorname{div}(\rho u)+\rho\sum_j u_j\partial_ju_i$ ([[def-cm-euclidean-spatial-calculus]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F4] Localization lemma: if $H$ is continuous on an open $W\subseteq\mathbb R^3$ and $\int_AH\,dx=0$ for every member $A$ of a family of nonempty open subsets of $W$ containing, below every neighbourhood of every point, a member around that point, then $H=0$ on $W$ ([[lem-cm-localization-of-vanishing-integrals]]); the supporting positivity of box volumes and order rule are those cited there ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-half-open-box]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct; insert the continuity equation into the transported momentum integral and use the divergence theorem, then localize.

1.1 Fix a material subregion $B'$ and $t\in J_0$. By [F1] and [F2], hypothesis (L) reads componentwise $$0=\frac{d}{dt}\int_{\chi_t(B')}\rho u_i\,dx-\int_{\chi_t(B')}\rho b_i\,dx-\int_{\chi_t(B')}g_i\,dx=\int_{\chi_t(B')}\Bigl(\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)-\rho b_i-g_i\Bigr)dx .$$ [given, F1, F2, algebra]

2.1 Define the continuous field $H_i:=\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)-\rho b_i-g_i$ on $U$ (continuity by [[thm-algebra-of-derivatives]] and componentwise differentiation of $C^1$ fields). By (K) and [F3], $$H_i=\rho\,\partial_tu_i+\rho\sum_ju_j\partial_ju_i-\rho b_i-g_i=\rho\,(D_tu)_i-\rho b_i-g_i ,$$ the last equality by the definition of $D_tu$ in [[def-cm-euclidean-spatial-calculus]]. [given, F3, step 1.1, algebra]

3.1 Fix $t\in J_0$ and $i\in\{1,2,3\}$. Apply step 1.1 with the family $\mathcal F_t:=\{\chi_t(Q):Q\text{ a nonempty open box with }\overline Q\subseteq B\}$ of nonempty open subsets of the open set $\chi_t(B)$: every member satisfies $\int_{\chi_t(Q)}H_i\,dx=0$, and by continuity of $\chi_t$ the family contains members around every point of $\chi_t(B)$ inside any prescribed neighbourhood ([[def-cm-continuum-motion]]). By [F4] applied to the continuous function $H_i(t,\cdot)$ on $W_t:=\chi_t(B)$, we get $H_i(t,y_0)=0$ for every $y_0\in\chi_t(B)$ and each $i$. [step 1.1, step 2.1, F4, construct]

4.1 By step 2.1, $H_i=\rho(D_tu)_i-\rho b_i-g_i$; step 3.1 therefore gives $\rho(t,y_0)(D_tu)_i(t,y_0)=\rho(t,y_0)b_i(t,y_0)+g_i(t,y_0)$ for $i=1,2,3$ at every $(t,y_0)\in J_0\times\chi_t(B)$, which is the stated vector identity. [step 2.1, step 3.1, algebra] ∎

## Remarks

- The conclusion is conditional on the integral balance (L) and the continuity equation (K); it is a localization theorem, not a derivation of the balance law. Hypothesis (L) also states the boundary regularity that makes the surface integral and the divergence theorem meaningful; without it the surface term is not defined.

- The row divergence convention $g_i=\sum_j\partial_j\sigma_{ij}$ is exactly the vector whose component $i$ appears in the divergence theorem applied to the $i$-th row of $\sigma$; it is the matrix divergence consistent with the traction convention $t(n)=\sigma n$ of [[def-cm-traction-and-stress]]. For a symmetric stress matrix the row and column divergences coincide; their agreement is not assumed here.

- No symmetry of $\sigma$, no constitutive relation and no boundary condition are used or asserted. The equation is local on the current region only.
