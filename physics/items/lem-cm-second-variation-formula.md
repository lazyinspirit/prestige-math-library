---
id: lem-cm-second-variation-formula
kind: lemma
title: "The second variation of a time-dependent action: twice differentiability of the fixed-endpoint family and the Hessian integral formula"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-second-variation-of-the-action, def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-interval, def-darboux-integral, thm-continuous-implies-integrable, thm-linearity-of-the-integral, def-derivative, def-continuity-real, def-abs-value, thm-heine-borel-rn, thm-heine-cantor-metric, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations]
dependency_roles:
  def-cm-second-variation-of-the-action: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  cor-integrability-of-absolute-values-products-and-lattice-operations: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.1-5.2: the parametric family and the first-variation computation; the second variation is not treated there"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1: the first variation of the action with fixed endpoints, printed pages 11-12"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]] (so $\mathcal L$ is $C^2$ and
$[a,b]\times U\times\mathbb R^n\subseteq O$), let $q:[a,b]\to U$ be a $C^2$ curve and let $\eta$
be a variation of $q$ (a $C^2$ map with $\eta(a)=\eta(b)=0$). Write
$\psi(\varepsilon,t):=\bigl(t,q(t)+\varepsilon\eta(t),q'(t)+\varepsilon\eta'(t)\bigr)$ and, for
$|\varepsilon|<\varepsilon_0$ with $\varepsilon_0$ as in clause 1 below,

$$H(\varepsilon,t):=\sum_{j,k=1}^n\Bigl[\frac{\partial^2\mathcal L}{\partial q_j\partial q_k}\bigl(\psi(\varepsilon,t)\bigr)\eta_j(t)\eta_k(t)+2\frac{\partial^2\mathcal L}{\partial q_j\partial v_k}\bigl(\psi(\varepsilon,t)\bigr)\eta_j(t)\eta_k'(t)+\frac{\partial^2\mathcal L}{\partial v_j\partial v_k}\bigl(\psi(\varepsilon,t)\bigr)\eta_j'(t)\eta_k'(t)\Bigr].$$

Then:

1. there is $\varepsilon_0>0$ such that for every $\varepsilon\in(-\varepsilon_0,\varepsilon_0)$
   the curve $q+\varepsilon\eta$ is a $C^2$ admissible curve with values in $U$, and the map
   $\varepsilon\mapsto S(q+\varepsilon\eta)$ is of class $C^2$ on $(-\varepsilon_0,\varepsilon_0)$;
2. for every $\varepsilon\in(-\varepsilon_0,\varepsilon_0)$,

$$\frac{d^2}{d\varepsilon^2}S(q+\varepsilon\eta)=\int_a^bH(\varepsilon,t)\,dt ;$$

3. in particular the second variation of [[def-cm-second-variation-of-the-action]] is

$$\delta^2S(q)[\eta,\eta]=\int_a^bH(0,t)\,dt,$$

the formula of clause 2 with every second partial of $\mathcal L$ evaluated at
$\bigl(t,q(t),q'(t)\bigr)$.

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$, a $C^2$ curve $q:[a,b]\to U$, a variation $\eta$, the
map $\psi(\varepsilon,t)=\bigl(t,q(t)+\varepsilon\eta(t),q'(t)+\varepsilon\eta'(t)\bigr)$, and the
action $S$ and second variation of [[def-cm-time-dependent-lagrangian-and-action]] and
[[def-cm-second-variation-of-the-action]].

[L1] Admissibility: there is $\varepsilon_0>0$ such that for $|\varepsilon|<\varepsilon_0$ the
curve $q+\varepsilon\eta$ is a $C^2$ admissible curve with values in $U$, hence $\psi$ maps
$(-\varepsilon_0,\varepsilon_0)\times[a,b]$ into $O$ because
$[a,b]\times U\times\mathbb R^n\subseteq O$
([[lem-cm-first-variation-formula]], clause 1).

[L2] Differentiation under the integral sign on a compact rectangle
([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]): if
$g,h:[\alpha,\beta]\times[a,b]\to\mathbb R$ are continuous and for each fixed $t$ the map
$\varepsilon\mapsto g(\varepsilon,t)$ is differentiable on $(\alpha,\beta)$ with derivative
$h(\varepsilon,t)$, then $\varepsilon\mapsto\int_a^bg(\varepsilon,t)\,dt$ is differentiable on
$(\alpha,\beta)$ with derivative $\int_a^bh(\varepsilon,t)\,dt$.

[L3] Chain rule and smoothness of the gradients
([[thm-chain-rule-for-total-derivatives]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-ck-and-multi-index-notation-in-several-variables]], [[def-jacobian-matrix-and-gradient]],
[[def-directional-and-partial-derivatives]], [[def-derivative]]): because $\mathcal L$ is $C^2$ on
the open set $O$, its gradient maps $\mathcal L_q:O\to\mathbb R^n$ and
$\mathcal L_v:O\to\mathbb R^n$ are $C^1$. For fixed $t$ the curve
$\varepsilon\mapsto\psi(\varepsilon,t)$ is affine in $\varepsilon$, with $\varepsilon$-derivative
the constant vector $\bigl(0,\eta(t),\eta'(t)\bigr)$; hence for $|\varepsilon|<\varepsilon_0$ the
chain rule gives the $\varepsilon$-derivatives

$$\frac{\partial}{\partial\varepsilon}\bigl[\mathcal L(\psi)\bigr]=\mathcal L_q(\psi)\cdot\eta(t)+\mathcal L_v(\psi)\cdot\eta'(t),$$

$$\frac{\partial}{\partial\varepsilon}\bigl[\mathcal L_q(\psi)\bigr]_j=\sum_k\frac{\partial^2\mathcal L}{\partial q_j\partial q_k}\bigl(\psi\bigr)\eta_k(t)+\sum_k\frac{\partial^2\mathcal L}{\partial q_j\partial v_k}\bigl(\psi\bigr)\eta_k'(t),$$

$$\frac{\partial}{\partial\varepsilon}\bigl[\mathcal L_v(\psi)\bigr]_j=\sum_k\frac{\partial^2\mathcal L}{\partial v_j\partial q_k}\bigl(\psi\bigr)\eta_k(t)+\sum_k\frac{\partial^2\mathcal L}{\partial v_j\partial v_k}\bigl(\psi\bigr)\eta_k'(t),$$

and each displayed expression is continuous on every rectangle $[-\delta,\delta]\times[a,b]$ with
$0<\delta<\varepsilon_0$, the compositions of the continuous second partials with the continuous
map $\psi$ and the continuous functions $\eta,\eta'$ being continuous.

[L4] Clairaut-Schwarz ([[thm-clairaut-schwarz-mixed-partials]]): the second partials of the $C^2$
function $\mathcal L$ commute on $O$, so
$\partial^2\mathcal L/\partial v_j\partial q_k=\partial^2\mathcal L/\partial q_k\partial v_j$
there.

[L5] Integrals ([[def-darboux-integral]], [[thm-continuous-implies-integrable]],
[[thm-linearity-of-the-integral]], [[def-interval]], [[def-vector-valued-derivative-and-integral]],
[[def-continuity-real]], [[def-abs-value]]): a continuous real function on the compact interval
$[a,b]$ is Darboux integrable, and the integral of a finite sum of integrable functions with real
coefficients is the corresponding sum of integrals.

[L6] Uniform continuity and uniform integral errors ([[thm-heine-borel-rn]],
[[thm-heine-cantor-metric]], [[thm-linearity-of-the-integral]],
[[thm-monotonicity-of-the-integral]],
[[cor-integrability-of-absolute-values-products-and-lattice-operations]]): the closed bounded
rectangle $R=[-\delta,\delta]\times[a,b]$ is compact, a continuous real function on a compact
metric space is uniformly continuous; and if $u,v$ are integrable on $[a,b]$ with
$|u(t)-v(t)|\le\eta$ for every $t\in[a,b]$ and some $\eta\ge0$, then $u-v$ and $|u-v|$ are
integrable and
$$\Bigl|\int_a^bu-\int_a^bv\Bigr|=\Bigl|\int_a^b(u-v)\Bigr|\le\int_a^b|u-v|\le\eta(b-a),$$
by linearity of the integral, the triangle inequality for the integral and the two-sided bound
of monotonicity.

## Proof

**Proof technique:** direct; apply differentiation under the integral sign twice on a compact
rectangle, the first derivative being the first-variation integrand and the second being the
Hessian quadratic form of $\mathcal L$ along the family.

1.1 Fix $0<\delta<\varepsilon_0$ with $\varepsilon_0$ from [L1], put $R:=[-\delta,\delta]\times[a,b]$, and define $g(\varepsilon,t):=\mathcal L(\psi(\varepsilon,t))$ on $R$. By [L1] the values of $\psi$ on $R$ lie in $O$, so $g$ is defined and continuous on $R$; by [L3] the $\varepsilon$-partial $g_1(\varepsilon,t)=\mathcal L_q(\psi)\cdot\eta(t)+\mathcal L_v(\psi)\cdot\eta'(t)$ exists on $R$ and is continuous there. [given, L1, L3]

2.1 By [L2] applied to the continuous pair $(g,g_1)$ on $R$, the map $F(\varepsilon):=S(q+\varepsilon\eta)=\int_a^bg(\varepsilon,t)\,dt$ is differentiable on $(-\delta,\delta)$ with derivative $F'(\varepsilon)=\int_a^bg_1(\varepsilon,t)\,dt$. [L2, L5, step 1.1]

2.2 By [L3] the $\varepsilon$-partial of $g_1$ exists on $R$ and equals the four-term sum $$g_2(\varepsilon,t)=\bigl[\mathcal L_{qq}(\psi)\eta\cdot\eta+\mathcal L_{qv}(\psi)\eta'\cdot\eta\bigr]+\bigl[\mathcal L_{vq}(\psi)\eta\cdot\eta'+\mathcal L_{vv}(\psi)\eta'\cdot\eta'\bigr],$$ written with the block matrices $\mathcal L_{qq},\mathcal L_{qv},\mathcal L_{vq},\mathcal L_{vv}$ of second partials evaluated at $\psi=\psi(\varepsilon,t)$; it is continuous on $R$. Applying [L2] to the pair $(g_1,g_2)$ shows that $\varepsilon\mapsto\int_a^bg_1(\varepsilon,t)\,dt$ is differentiable on $(-\delta,\delta)$ with derivative $\int_a^bg_2(\varepsilon,t)\,dt$. Hence $F$ is twice differentiable on $(-\delta,\delta)$ with $F''(\varepsilon)=\int_a^bg_2(\varepsilon,t)\,dt$, and since every $0<\delta<\varepsilon_0$ is allowed, clause 2 holds for every $\varepsilon\in(-\varepsilon_0,\varepsilon_0)$ once $g_2$ is rewritten in the symmetric form $H$. [L2, L3, L5, step 1.1]

3.1 Continuity of the second derivative: the function $g_2$ is continuous on the compact rectangle $R$, so [L6] makes it uniformly continuous. Given $\tilde\varepsilon>0$ choose $\gamma>0$ such that $|g_2(\varepsilon,t)-g_2(\varepsilon',t)|<\tilde\varepsilon/(b-a)$ for every $t\in[a,b]$ whenever $\varepsilon,\varepsilon'\in(-\delta,\delta)$ satisfy $|\varepsilon-\varepsilon'|<\gamma$. Then for such $\varepsilon,\varepsilon'$, linearity of the integral and [L6] give $$\bigl|F''(\varepsilon)-F''(\varepsilon')\bigr|=\Bigl|\int_a^b\bigl(g_2(\varepsilon,t)-g_2(\varepsilon',t)\bigr)\,dt\Bigr|\le\frac{\tilde\varepsilon}{b-a}\,(b-a)=\tilde\varepsilon,$$ so $F''$ is continuous on $(-\delta,\delta)$; since every $0<\delta<\varepsilon_0$ is allowed, $\varepsilon\mapsto S(q+\varepsilon\eta)$ is of class $C^2$ on $(-\varepsilon_0,\varepsilon_0)$, which is clause 1. [L6, L5, step 2.2]

4.1 Symmetrisation: by [L4], for all $j,k$ one has $\bigl(\mathcal L_{vq}(\psi)\bigr)_{jk}=\partial^2\mathcal L/\partial v_j\partial q_k(\psi) =\partial^2\mathcal L/\partial q_k\partial v_j(\psi)=\bigl(\mathcal L_{qv}(\psi)\bigr)_{kj}$, so $\eta'\cdot\mathcal L_{vq}(\psi)\eta=\eta\cdot\mathcal L_{qv}(\psi)\eta'$ after relabelling the summation indices; therefore $g_2=H$ and clauses 2 and 3 follow, the latter by the definition of $\delta^2S(q)[\eta,\eta]$ and evaluation at $\varepsilon=0$. [L4, step 2.2, given] ∎

## Remarks

- The statement is deliberately integral: the second derivative of the family is identified with
  the integral of the Hessian form, and no pointwise second-order Taylor hypothesis on
  $\mathcal L$ beyond $C^2$ is used.

- Both differentiations are instances of the same compact-rectangle theorem, the first with the
  first-variation integrand of [[lem-cm-first-variation-formula]] and the second with its
  $\varepsilon$-derivative; no second-order chain rule is needed, because the family is affine in
  $\varepsilon$ and the second derivative of $\mathcal L\circ\psi$ is obtained by applying the
  ordinary chain rule to the $C^1$ maps $\mathcal L_q$ and $\mathcal L_v$.
