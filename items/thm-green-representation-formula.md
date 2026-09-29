---
id: thm-green-representation-formula
kind: theorem
title: Green representation for classical Poisson data
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 Lemma 5.22, equations (5.35)–(5.37), printed pp.125–127; the printed derivation is explicitly heuristic and Lemma 5.22 supplies the rigorous statement"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.8 Green-function representation theorem and proof, printed pp.45–46; Schmidt uses ΔF=δ₀ and a nonpositive Green function, so Φ=−F and G_here=−G_Schmidt"
proof_strategy: direct
deps:
  - cor-mean-value-theorem
  - cor-regular-level-set-local-graph-theorem
  - cor-second-green-identity-on-a-bounded-c-one-domain
  - cor-weak-minimum-principle-for-the-laplacian
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-countable-choice
  - def-directional-and-partial-derivatives
  - def-dirichlet-green-function-for-minus-laplacian
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-locally-integrable-function-on-r-n
  - def-metric-ball
  - def-poisson-kernel-from-a-green-function
  - def-regular-critical-points-values-and-level-sets
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-derivative-of-a-power
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - prop-countable-subsets-of-rn-are-lebesgue-null
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-algebra-of-derivatives
  - thm-borel-sets-are-lebesgue-measurable
  - thm-chain-rule-for-total-derivatives
  - thm-compact-subset-is-closed-and-bounded
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-dominated-convergence
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-green-function-symmetry
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-logarithm-slower-than-every-positive-power
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-total-derivative-computes-directional-and-partial-derivatives
---

## Statement

Assume Countable Choice, let $n\ge2$, and let $\Omega\subset\mathbb R^n$ be a
bounded $C^1$ domain carrying a Dirichlet Green function $G_\Omega$ for
$-\Delta$ whose designated correctors satisfy $H_y\in C^2(\overline\Omega)$ for
every pole $y$; let $P_\Omega(x,y)=-\partial_{\nu_y}G_\Omega(x,y)$ be the
Poisson kernel. Then for every real $u\in C^2(\overline\Omega)$ and every
$x\in\Omega$,
$$u(x)=\int_\Omega G_\Omega(x,y)\bigl(-\Delta u(y)\bigr)dy+\int_{\partial\Omega}P_\Omega(x,y)u(y)\,dS(y).$$
Both integrals are absolutely finite. Moreover $P_\Omega\ge0$ on
$\Omega\times\partial\Omega$, and
$$\int_{\partial\Omega}P_\Omega(x,y)\,dS(y)=1\qquad(x\in\Omega).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, the bounded $C^1$ domain $\Omega$, its Dirichlet Green function with correctors $H_y\in C^2(\overline\Omega)$, the real datum $u\in C^2(\overline\Omega)$, and a point $x\in\Omega$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function ([[def-countable-choice]]). The Green, Poisson-kernel, surface and Green-identity conventions used below all carry this assumption, and no full Axiom of Choice is invoked.

[F1] The Green function satisfies $G_\Omega(z,y)=\Phi(z-y)-H_y(z)$ for $z\ne y$, is harmonic in $z$ away from its pole, extends continuously to $\overline\Omega\setminus\{y\}$ with zero boundary trace, and its existence is conditional on the correctors ([[def-dirichlet-green-function-for-minus-laplacian]]).

[F2] Under the stated hypothesis $H_y\in C^2(\overline\Omega)$ for every pole, the Green function is symmetric: $G_\Omega(z,y)=G_\Omega(y,z)$ for all distinct $z,y\in\Omega$ ([[thm-green-function-symmetry]]).

[F3] The kernel is $\Phi(w)=|w|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $\Phi(w)=-(2\pi)^{-1}\log|w|$ for $n=2$, off its pole; it is smooth and harmonic off the pole, and its value at the pole may be assigned arbitrarily ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F4] On every bounded nonempty open set $D\subset\mathbb R^n$, a real $v\in C^2(D)\cap C(\overline D)$ with $\Delta v\le0$ has its minimum on $\partial D$ ([[cor-weak-minimum-principle-for-the-laplacian]]). Connectedness is not required.

[F5] The Poisson kernel is defined by $P_\Omega(x,y)=-\partial_{\nu_y}G_\Omega(x,y)$, where the boundary-slot normal derivative is the trace of $D_z\bigl(\Phi(z-x)-H_x(z)\bigr)\cdot\nu_\Omega(y)$ as $z\to y$ from inside ([[def-poisson-kernel-from-a-green-function]]).

[F6] For a bounded $C^1$ domain with real $U,V\in C^2(\overline\Omega)$, $\int_\Omega(V\Delta U-U\Delta V)\,dz=\int_{\partial\Omega}(V\partial_\nu U-U\partial_\nu V)\,dS$, all normals outward, including normals on holes ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F7] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally, after a rigid change of coordinates, the graph $z=h(y)$ of a $C^1$ function with the domain locally exactly the subgraph $z<h(y)$; the outward unit normal is the transported $(-Dh,1)/\sqrt{1+|Dh|^2}$, and $F\in C^2(\overline\Omega)$ means $F$ and its derivatives through order two extend continuously to the closure ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F8] A positive-radius Euclidean sphere $S(x,\varepsilon)$ is a compact regular level set of $F(z)=\langle z-x,z-x\rangle$: the coordinate partials $\partial_iF(z)=2(z_i-x_i)$ are continuous, the total derivative is $DF(z)h=2\langle z-x,h\rangle$, and $DF(z)(z-x)=2\varepsilon^2\ne0$ at every $z\in S(x,\varepsilon)$, so $\varepsilon^2$ is a regular value and the sphere is locally a $C^1$ graph by the regular-level graph theorem ([[def-euclidean-spheres-and-closed-balls]], [[cor-regular-level-set-local-graph-theorem]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]]).

[F9] Chart surface measure on $S^{n-1}$ equals the polar measure and satisfies $|S^{n-1}|=n|B_1|=\omega_{n-1}$; the chart surface measure of $S(x,\varepsilon)$ is $\omega_{n-1}\varepsilon^{n-1}$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F10] On a compact embedded $C^1$ hypersurface the surface integral is defined by chart integration, constants have finite integral equal to the constant times the surface measure, and signed integrands with finite absolute integral are integrated through positive and negative parts ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F11] For $u\in C^1(\overline\Omega)$ the classical normal derivative is $\partial_\nu u(z)=Du(z)\cdot\nu(z)$ on $\partial\Omega$, with $Du$ the continuous interior gradient extension ([[def-classical-normal-derivative]]); directional derivatives are $D_vf(a)=\frac{d}{dt}\big|_{t=0}f(a+tv)$ ([[def-directional-and-partial-derivatives]]).

[F12] The chain rule and the partial-derivative formula compute derivatives of compositions; the derivative of $|\cdot|$ and of the two kernel profiles are obtained from these and the real-power and logarithm derivative rules ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]]).

[F13] The normalized kernel is locally integrable on $\mathbb R^n$: its absolute integral over every Euclidean ball is finite ([[lem-laplace-fundamental-kernel-is-locally-integrable]], [[def-locally-integrable-function-on-r-n]]); $\varepsilon|\log\varepsilon|\to0$ as $\varepsilon\downarrow0$ ([[thm-logarithm-slower-than-every-positive-power]]).

[F14] Compact subsets of $\mathbb R^n$ are closed and bounded, and continuous real functions on nonempty compact Euclidean sets are bounded ([[thm-compact-subset-is-closed-and-bounded]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]); the absolute value of an integrable integral is bounded by the integral of the absolute value, the nonnegative integral is monotone, and the Lebesgue integral is linear on $L^1$ ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F15] A continuous function on a closed interval that is differentiable inside has $f(b)-f(a)=f'(c)(b-a)$ for some interior $c$ ([[cor-mean-value-theorem]]).

[F16] Dominated convergence applies to measurable functions converging almost everywhere under one integrable dominating function ([[thm-dominated-convergence]]); under $\mathrm{AC}_\omega$ singletons in $\mathbb R^n$ are Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F17] Continuous maps pull back Borel sets to Borel sets; products, sums and absolute values of measurable functions are measurable; and every Borel subset of $\mathbb R^n$ is Lebesgue measurable ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F18] The Laplacian is $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]).

[F19] $B(x,\varepsilon)=\{z:|z-x|<\varepsilon\}$ for $\varepsilon>0$ ([[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\Omega$ and choose $\varepsilon_0>0$ with $B(x,\varepsilon_0)\subset\Omega$; for $0<\varepsilon<\varepsilon_0$ put $D_\varepsilon:=\Omega\setminus\overline B(x,\varepsilon)$. Since $\overline B(x,\varepsilon)\subset B(x,\varepsilon_0)\subset\Omega$, the set $D_\varepsilon$ is open, bounded, contained in $\Omega$, and nonempty (any point at distance $(\varepsilon+\varepsilon_0)/2$ from $x$ lies in it), and its boundary is the disjoint union of $\partial\Omega$ and $S(x,\varepsilon)$: every point of $S(x,\varepsilon)$ lies in the open set $\Omega$, so near such a point $D_\varepsilon$ coincides with a ball minus the closed Euclidean ball, whose boundary is the regular level set $S(x,\varepsilon)$ of [F8], and near a point of $\partial\Omega$ it coincides with $\Omega$ because the removed ball is at positive distance from that point. Hence $D_\varepsilon$ is a bounded $C^1$ domain in the sense of [F7], with outward normal $\nu_\Omega$ on $\partial\Omega$ and outward normal $\sigma(y):=-(y-x)/|y-x|$ on $S(x,\varepsilon)$, since moving from $y\in S(x,\varepsilon)$ in direction $\sigma$ enters the excluded ball while moving in direction $-\sigma$ leaves it. [given, F7, F8, F19, algebra]

1.2 Estimating on the small sphere: differentiating the two profiles of [F3] gives $D\Phi(w)=-\frac{w}{\omega_{n-1}|w|^n}$ for $w\ne0$, in both the power and the logarithmic case, because the radial profile $q$ with $\Phi(w)=q(|w|)$ has $q'(s)=-\frac{1}{\omega_{n-1}s^{n-1}}$ for $s>0$, and $\nabla|\cdot|(w)=w/|w|$ [F12]; consequently $D\Phi(w)\cdot\sigma(w)=\frac{1}{\omega_{n-1}|w|^{n-1}}$ for $w\ne0$. On $S(x,\varepsilon)$ this gives $D\Phi(y-x)\cdot\sigma(y)=\frac{1}{\omega_{n-1}\varepsilon^{n-1}}$, while $\Phi(y-x)$ has modulus $\frac{\varepsilon^{2-n}}{(n-2)\omega_{n-1}}$ for $n\ge3$ and $\frac{|\log\varepsilon|}{2\pi}$ for $n=2$ [F3]; and $|DH_x(y)|\le b_x$ for $y\in\overline\Omega$ with $b_x:=\|DH_x\|_{C(\overline\Omega)}<\infty$ by [F14]. The sphere has surface measure $\omega_{n-1}\varepsilon^{n-1}$ by [F9], and $\|Du\|_{C(\overline\Omega)}<\infty$ by [F14]. [given, F3, F9, F12, F14, algebra]

1.3 Absolute finiteness and measurability. The volume integrand $y\mapsto G_\Omega(x,y)\Delta u(y)$ is defined for $y\ne x$ and bounded in modulus by $\bigl(|\Phi(y-x)|+\|H_x\|_{C(\overline\Omega)}\bigr)\|\Delta u\|_{C(\overline\Omega)}$, and $\Phi(\cdot-x)$ is locally integrable on the bounded set $\Omega$ by [F13]; hence an integrable dominating function exists, and the integrand is Borel by [F1, F17] and $\Delta u\in C(\overline\Omega)$. The boundary integrand $u(y)P_\Omega(x,y)$ is bounded in modulus by $\|u\|_\infty\bigl(\sup_{\partial\Omega}|D\Phi(\cdot-x)|+b_x\bigr)$, a finite bound because $\partial\Omega$ is compact and at positive distance from $x$ [F3, F14]; the boundary has finite surface measure [F10], so the boundary integral is absolutely finite as well. [given, F1, F3, F10, F13, F14, F17]

2.1 Nonnegativity of the Poisson kernel. First fix $x\in\Omega$. By [F2], for $y\ne x$ we have $G_\Omega(x,y)=\Phi(y-x)-H_x(y)$. The corrector $H_x$ is bounded on $\overline\Omega$ by [F14], whereas $\Phi(y-x)$ tends to $+\infty$ as $y\to x$ by [F3]. Thus, for every sufficiently small $\varepsilon>0$ as in step 1.1, $G_\Omega(x,\cdot)>0$ on the inner sphere $S(x,\varepsilon)$ and is zero on $\partial\Omega$ by [F1]. It is harmonic on $D_\varepsilon$ and continuous on $\overline{D_\varepsilon}$ by [F1]–[F3]. The weak minimum principle [F4], applicable to the bounded nonempty open set $D_\varepsilon$ without a connectedness hypothesis, gives $G_\Omega(x,y)\ge0$ for every $y\in D_\varepsilon$. Given any $y\in\Omega\setminus\{x\}$, choose such an $\varepsilon<|y-x|$; hence $G_\Omega(x,y)\ge0$ throughout $\Omega\setminus\{x\}$. Now fix $y_0\in\partial\Omega$ and, for small $t>0$, put $y_t:=y_0-t\nu_\Omega(y_0)$. By the local subgraph property in [F7], $y_t\in\Omega$ for all sufficiently small $t>0$, and $y_t\ne x$ for those $t$; define $g(t):=G_\Omega(x,y_t)$ for such $t$ and $g(0):=G_\Omega(x,y_0)=0$. Symmetry and the corrector regularity give a $C^2$ expression for $G_\Omega(x,y)$ near $y_0$ by [F2, F3, F7]; the chain rule with the classical normal derivative [F5, F11, F12] gives $g'(0^+)=P_\Omega(x,y_0)$. Since $g(t)\ge0$, its one-sided difference quotients $g(t)/t$ are nonnegative, and so $P_\Omega(x,y_0)\ge0$. [given, F1, F2, F3, F4, F5, F7, F11, F12, F14, step 1.1, algebra]

2.2 Apply the second Green identity [F6] on the bounded $C^1$ domain $D_\varepsilon$ of step 1.1 to the real functions $U:=u$ and $V:=G_\Omega(x,\cdot)$, the latter being $C^2$ on $\overline{D_\varepsilon}$ by [F2, F3, F7] and harmonic on $D_\varepsilon$ by [F1, F3, F18]. Both volume integrals are finite because $D_\varepsilon\subset\Omega$ and both functions are bounded on $\overline{D_\varepsilon}$ [F14], so $$\int_{D_\varepsilon}G_\Omega(x,y)\Delta u(y)\,dy=\int_{\partial D_\varepsilon}G_\Omega(x,y)\partial_\nu u(y)\,dS(y)-\int_{\partial D_\varepsilon}u(y)\partial_\nu G_\Omega(x,\cdot)(y)\,dS(y).$$ On $\partial\Omega$ the trace $G_\Omega(x,\cdot)=0$ by [F1], and the outward normal of $D_\varepsilon$ there is $\nu_\Omega$ by step 1.1, so the first boundary term vanishes and the second equals $-\int_{\partial\Omega}u(y)\,\partial_{\nu_\Omega(y)}G_\Omega(x,y)\,dS(y)=\int_{\partial\Omega}u(y)P_\Omega(x,y)\,dS(y)$ by [F5]. On $S(x,\varepsilon)$ the outward normal is $\sigma$ by step 1.1, so the two boundary terms are $\int_{S(x,\varepsilon)}G_\Omega(x,y)\partial_\sigma u(y)\,dS(y)$ and $-\int_{S(x,\varepsilon)}u(y)\partial_\sigma G_\Omega(x,\cdot)(y)\,dS(y)$. [given, A1, F1, F2, F3, F5, F6, F7, F14, F18, step 1.1, algebra]

2.3 Limits on the small sphere. First term: by steps 1.1 and 1.2, $\bigl|G_\Omega(x,y)\bigr|\le|\Phi(y-x)|+\|H_x\|_{C(\overline\Omega)}$ and $|\partial_\sigma u(y)|\le\|Du\|_{C(\overline\Omega)}$ on $S(x,\varepsilon)$, so the triangle inequality for integrals [F14] and the surface measure $\omega_{n-1}\varepsilon^{n-1}$ of [F9] bound this term by $$\|Du\|_{C(\overline\Omega)}\Bigl(\frac{\varepsilon^{2-n}}{(n-2)\omega_{n-1}}+\|H_x\|_{C(\overline\Omega)}\Bigr)\omega_{n-1}\varepsilon^{n-1}=\|Du\|_{C(\overline\Omega)}\Bigl(\frac{\varepsilon}{n-2}+\|H_x\|_{C(\overline\Omega)}\omega_{n-1}\varepsilon^{n-1}\Bigr)$$ for $n\ge3$, and by $\|Du\|_{C(\overline\Omega)}\bigl(\frac{|\log\varepsilon|}{2\pi}+\|H_x\|_{C(\overline\Omega)}\bigr)2\pi\varepsilon$ for $n=2$; both tend to $0$ as $\varepsilon\downarrow0$, using $\varepsilon|\log\varepsilon|\to0$ from [F13]. Second term: by steps 1.1 and 1.2, $\partial_\sigma G_\Omega(x,\cdot)(y)=D\Phi(y-x)\cdot\sigma(y)-DH_x(y)\cdot\sigma(y)=\frac{1}{\omega_{n-1}\varepsilon^{n-1}}-DH_x(y)\cdot\sigma(y)$ on $S(x,\varepsilon)$, so $\int_{S(x,\varepsilon)}\partial_\sigma G_\Omega(x,\cdot)\,dS=1+R_\varepsilon$ with $|R_\varepsilon|\le b_x\omega_{n-1}\varepsilon^{n-1}\to0$; hence $-u(x)\int_{S(x,\varepsilon)}\partial_\sigma G_\Omega(x,\cdot)\,dS\to-u(x)$. For the remaining piece, the mean value theorem [F15] applied along segments from $x$ to $y\in S(x,\varepsilon)$ gives $|u(y)-u(x)|\le\|Du\|_{C(\overline\Omega)}\,\varepsilon$, so $$\Bigl|\int_{S(x,\varepsilon)}\bigl(u(y)-u(x)\bigr)\partial_\sigma G_\Omega(x,\cdot)(y)\,dS(y)\Bigr|\le\|Du\|_{C(\overline\Omega)}\,\varepsilon\Bigl(\frac{1}{\omega_{n-1}\varepsilon^{n-1}}+b_x\Bigr)\omega_{n-1}\varepsilon^{n-1}\longrightarrow0.$$ [given, A1, F9, F13, F14, F15, step 1.1, step 1.2, algebra]

2.4 The volume term converges. For each $y\in\Omega\setminus\{x\}$ one has $y\in D_\varepsilon$ as soon as $0<\varepsilon<|y-x|$, so $\mathbf 1_{D_\varepsilon}(y)G_\Omega(x,y)\Delta u(y)\to G_\Omega(x,y)\Delta u(y)$ pointwise on $\Omega\setminus\{x\}$, a set of full measure by [F16]; the dominating function $M(y):=\bigl(|\Phi(y-x)|+\|H_x\|_{C(\overline\Omega)}\bigr)\|\Delta u\|_{C(\overline\Omega)}$ is integrable by [F13, F14] and bounds every term. Step 1.3 supplies measurability, so [F16] gives $\int_{D_\varepsilon}G_\Omega(x,y)\Delta u(y)\,dy\to\int_\Omega G_\Omega(x,y)\Delta u(y)\,dy$; the integral on the right is absolutely finite by step 1.3 and [F14]. [given, A1, F13, F14, F16, step 1.1, step 1.3]

3.1 Passing to the limit. Take a sequence $\varepsilon_k\downarrow0$ with $0<\varepsilon_k<\varepsilon_0$ and use the identity of step 2.2 for each $k$. Step 2.4 gives the limit of the left side, the boundary integral over $\partial\Omega$ is independent of $k$, the first sphere term tends to $0$ and the second to $-u(x)$ by step 2.3. Therefore $$\int_\Omega G_\Omega(x,y)\Delta u(y)\,dy=\int_{\partial\Omega}u(y)P_\Omega(x,y)\,dS(y)-u(x).$$ Rearranging and using $\Delta u=-(-\Delta u)$ yields the displayed representation formula, with both integrals absolutely finite by step 1.3. Since $x\in\Omega$ was arbitrary, the formula holds for every $x\in\Omega$. [given, step 1.3, step 2.2, step 2.3, step 2.4, algebra]

4.1 Substituting the constant function $u\equiv1$, which lies in $C^2(\overline\Omega)$ with $\Delta u=0$ by [F18], the formula of step 3.1 collapses to $1=\int_{\partial\Omega}P_\Omega(x,y)\,dS(y)$, which is the asserted normalization; combined with step 2.1 this proves $P_\Omega\ge0$ and unit boundary mass. The theorem makes no existence claim for Green functions, only uses the one supplied; the dimension $n=1$ is excluded by [F3] and no case of [F1] is left out. Countable Choice is inherited from the Green, Poisson-kernel, surface and Green-identity conventions cited in [F1], [F5], [F6] and [F9]; the excision, chain rule, mean value and limiting arguments above invoke no further choice. Complex-valued $u$ are handled by applying the real result to $\mathrm{Re}\,u$ and $\mathrm{Im}\,u$; the statement is formulated for real $u$. [given, A1, F1, F3, F5, F6, F9, F18, step 2.1, step 3.1, cases] ∎

## Source notes

Teschl §5.4, equations (5.35)–(5.37) and Lemma 5.22, printed pp.125–127, states $u(x)=-\int_U G\,\Delta u+\int_{\partial U}Ku\,dS$ with $K=-\partial G/\partial\nu$ and treats the formal derivation as heuristic until the lemma, which assumes $u\in C^2(U)$ and applies the Gauss–Green theorem with $u,v\in C^2(U)$; the present statement uses the stricter classical hypothesis $u\in C^2(\overline\Omega)$, which is exactly the case in which the traces and normal derivatives used in steps 2.1, 2.2 and 2.3 exist. Schmidt §2.8, printed pp.45–46, proves the representation theorem by the same punctured-domain argument under its own regularity hypotheses; Schmidt normalizes $\Delta F=\delta_0$ and uses a nonpositive Green function, so the translation is $\Phi=-F$ and $G_\Omega=-G_{\mathrm{Schmidt}}$, under which the two weight signs agree. The $O(\varepsilon)$ and $\varepsilon|\log\varepsilon|$ bounds of step 2.3, the sign of the hole normal, the positivity argument of step 2.1 and the unit-mass conclusion of step 4.1 are proved here rather than quoted.
