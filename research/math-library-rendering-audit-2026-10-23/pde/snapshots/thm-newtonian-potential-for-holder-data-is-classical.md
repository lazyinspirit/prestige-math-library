---
id: thm-newtonian-potential-for-holder-data-is-classical
kind: theorem
title: Hölder data give a classical Newtonian solution
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-mean-value-theorem
  - cor-regular-level-set-local-graph-theorem
  - cor-volume-of-the-unit-n-ball
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-countable-choice
  - def-directional-and-partial-derivatives
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-newtonian-potential
  - def-real-power
  - def-regular-critical-points-values-and-level-sets
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-derivative-of-a-power
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data
  - lem-smooth-bump-between-concentric-euclidean-balls
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-differentiation-under-the-integral-sign
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
  - thm-newtonian-potential-solves-poisson-distributionally
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-real-gamma-functional-equation
  - thm-real-power-continuity-and-derivatives
  - thm-symmetry-of-higher-mixed-partials
  - thm-uniform-derivative-limit-on-a-closed-interval
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7 Theorem 2.26, Corollary 2.27 and Theorem 2.28, printed pp.37–43"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.3 Theorem 5.19, printed pp.119–121"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.11 regularity theorem (II) and proof, printed pp.74–77"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice, let $n\ge2$, and let $\alpha\in\mathbb R$ satisfy
$0<\alpha<1$. Let $f:\mathbb R^n\to\mathbb C$ be continuous and compactly
supported, with finite global Hölder seminorm
$$[f]_{\alpha;\mathbb R^n}:=\sup_{x\ne y}\frac{|f(x)-f(y)|}{|x-y|^\alpha}<\infty.$$
This is the convention for $f\in C_c^{0,\alpha}(\mathbb R^n)$ here; the
positive-base real power is as in [[def-real-power]]. Put
$\|f\|_{C^{0,\alpha}}:=\sup_{\mathbb R^n}|f|+[f]_{\alpha;\mathbb R^n}$.
Then the Newtonian integral from [[def-newtonian-potential]] is absolutely
finite for every $x$, belongs to $C^2(\mathbb R^n)$, and its second derivatives
are locally $\alpha$-Hölder continuous. In particular
$Nf\in C^{2,\alpha}_{\rm loc}(\mathbb R^n)$, where this notation means that
$Nf$ is $C^2$ and each second partial derivative has finite $\alpha$-Hölder
seminorm on every compact set. Moreover,
$$-\Delta Nf(x)=f(x)\qquad(x\in\mathbb R^n).$$
For every $x\in\mathbb R^n$ and every $r>0$ with
$\operatorname{supp}f\subset B_r(x)$, the absolutely convergent cancellation
formula is
$$\partial_i\partial_jNf(x)=\int_{B_r(x)}\partial_i\partial_j\Phi(x-y)\bigl(f(y)-f(x)\bigr)\,dy-\frac{\delta_{ij}}{n}f(x),\qquad 0\le i,j<n.$$
For each compact $K\subset\mathbb R^n$, a constant depending only on $n$, $\alpha$
and bounds for $K$ and $\operatorname{supp}f$ satisfies
$$\max_{|\beta|\le2}\sup_{x\in K}|\partial^\beta Nf(x)|+\max_{|\beta|=2}[\partial^\beta Nf]_{\alpha;K}\le C\,\|f\|_{C^{0,\alpha}}.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, $0<\alpha<1$, and the continuous, compactly supported datum $f$ with finite global seminorm specified above.

[A1] The only choice assumption is Countable Choice, $\mathrm{AC}_\omega$. It enters through the choice-qualified hypotheses of the kernel, polar and surface integration, divergence, compact-data potential, and distribution interfaces used below; no full Axiom of Choice is assumed or used. ([[def-countable-choice]])

[F1] For $n\ge3$ the kernel profile is $q_n(s)=s^{2-n}/((n-2)\omega_{n-1})$, and for $n=2$ it is $q_2(s)=-(2\pi)^{-1}\log s$; the kernel is locally integrable and its value at the pole is immaterial. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]])

[F2] For every real $\gamma$, $(s^\gamma)'=\gamma s^{\gamma-1}$ on $s>0$; $\log'(s)=1/s$ there; and $\log s/s^\gamma\to0$ as $s\to\infty$ for $\gamma>0$. ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-logarithm-slower-than-every-positive-power]])

[F3] The chart sphere measure agrees with polar measure, is invariant under orthogonal maps, and scales by $R^{n-1}$ on radius-$R$ spheres. Polar integration uses $r^{n-1}dr\,d\sigma$. In dimension two, $|B_1|=\pi$ and $\omega_1=2\pi$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]])

[F4] A smooth function equal to one on $\overline B_1(0)$ and supported in $B_2(0)$ exists; its rescalings give smooth cutoffs vanishing on $\overline B_\varepsilon(0)$ and equal to one outside $B_{2\varepsilon}(0)$, with first and second derivative bounds $C\varepsilon^{-1}$ and $C\varepsilon^{-2}$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F5] Differentiation under an integral is valid when the parameter derivative has a common integrable majorant. A uniform limit of one-variable derivatives, together with convergence at one point, identifies the derivative of the function limit; continuous partial derivatives give a continuously differentiable map. ([[thm-differentiation-under-the-integral-sign]], [[thm-uniform-derivative-limit-on-a-closed-interval]], [[thm-continuous-partial-derivatives-imply-total-differentiability]])

[F6] The divergence theorem applies to bounded $C^1$ Euclidean domains under $\mathrm{AC}_\omega$. A sphere $S(a,r)$ is a compact embedded $C^1$ hypersurface and its surface integral is the chart surface integral: $S(a,r)=F^{-1}(r^2)$ for $F(z)=\langle z-a,z-a\rangle$, whose continuous coordinate partials give the total derivative $DF(z)h=2\langle z-a,h\rangle$ with $DF(z)(z-a)=2r^2\ne0$ on the sphere, so $r^2$ is a regular value and the regular-level graph theorem supplies the local $C^1$ charts. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-euclidean-spheres-and-closed-balls]], [[cor-regular-level-set-local-graph-theorem]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]], [[def-surface-integral-on-a-compact-c-one-hypersurface]])

[F7] A compactly supported continuous function is bounded. The nonnegative integral is monotone, and the absolute value of an integrable signed integral is bounded by the integral of the absolute value. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]])

[F8] For the defining integral $Nf(x)=\int\Phi(x-y)f(y)dy$, under $\mathrm{AC}_\omega$ the Newtonian potential of compactly supported bounded data is everywhere absolutely finite and locally bounded. For compactly supported $L^1$ data its regular distribution solves $-\Delta T_{Nf}=T_f$. ([[def-newtonian-potential]], [[lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data]], [[thm-newtonian-potential-solves-poisson-distributionally]])

[F9] For $C^2$ functions, classical derivatives agree with distributional derivatives under $\mathrm{AC}_\omega$. The map from $L^1_{\rm loc}$ classes to distributions is injective. A nonempty Euclidean ball has positive Lebesgue measure. ([[thm-distributional-differentiation-is-continuous-and-commutes]], [[thm-locally-integrable-functions-embed-in-distributions]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F10] The Laplacian of a $C^2$ function is the sum of its pure second partial derivatives; continuous mixed partials commute. ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-symmetry-of-higher-mixed-partials]])

[F11] The chain and product rules apply to the smooth radial kernel and its cutoff products. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]])

[F12] For a differentiable scalar function on a real interval, the mean value theorem bounds its increment by its derivative bound times the interval length. ([[cor-mean-value-theorem]])

## Proof

**Proof technique:** direct.

1.1 Put $r=|z|$. Differentiating the two profiles in [F1] using [F2] and [F11] gives, for every $z\ne0$ and all $i,j$, $$\partial_i\Phi(z)=-\frac{z_i}{\omega_{n-1}r^n},\qquad K_{ij}(z):=\partial_i\partial_j\Phi(z)= \frac{n z_i z_j r^{-n-2}-\delta_{ij}r^{-n}}{\omega_{n-1}}.$$ A further differentiation and the displayed formulas give $|D\Phi(z)|\le C_n r^{1-n}$, $|K_{ij}(z)|\le C_n r^{-n}$, and $|DK_{ij}(z)|\le C_n r^{-n-1}$. The trace of the Hessian formula is zero away from $0$. Thus the same estimates hold in the logarithmic and power cases; in $n=2$ [F3] gives the needed $\omega_1=2\pi$. [A1, F1, F2, F3, algebra]

1.2 By continuity and compact support, [F7] gives $\|f\|_\infty<\infty$. The bounded-data potential lemma [F8] makes the integral for $Nf(x)$ absolutely finite at every point and locally bounded, including when $f=0$ or its support is empty. [A1, F7, F8, given, cases]

1.3 Choose the smooth bump $\rho$ from [F4] and set $\eta_\varepsilon(z)=1-\rho(z/\varepsilon)$ and $q_\varepsilon(z)=\Phi(z)\eta_\varepsilon(z)$, assigning $q_\varepsilon(0)=0$. Then $q_\varepsilon$ is smooth: it is zero near $0$ and equals the smooth kernel off $B_{2\varepsilon}$. Its derivatives of orders one and two in the transition annulus are bounded by the product rule and [F4]. Define $$u_\varepsilon(x)=\int q_\varepsilon(x-y)f(y)\,dy.$$ Differentiation under the integral sign [F5] applies on every compact $x$-set: the support of $f$ is compact and, for fixed $\varepsilon$, the kernel derivatives are bounded on the corresponding difference set. [F4, F5, F11, given]

2.1 Orthogonal invariance in [F3] gives $\int_{S^{n-1}}\theta_i\theta_j\,d\sigma=0$ for $i\ne j$ by coordinate reflection. Coordinate permutations make all diagonal integrals equal, and $\sum_i\theta_i^2=1$ makes each equal $\omega_{n-1}/n$. Therefore, on the sphere centered at $x$, $$\int_{\partial B_R(x)}\partial_i\Phi(x-y)\nu_j(y)\,dS(y)=\frac{\delta_{ij}}n,$$ where $\nu(y)=(y-x)/R$ is its outward normal. This follows by substituting $y=x+R\theta$ and the first formula of step 1.1. The same calculation in the variable $z$ gives $\int_{\partial B_R(0)}\partial_i\Phi(z)z_j/R\,dS(z)=-\delta_{ij}/n$. [A1, F3, F6, step 1.1]

2.2 The difference $u_\varepsilon-Nf$ is supported in the kernel variable $|x-y|<2\varepsilon$, so [F7] and polar integration [F3] give a uniform-in-$x$ bound $\|f\|_\infty\int_{B_{2\varepsilon}}|\Phi(z)|dz$, which tends to zero like $O(\varepsilon^2)$ for $n\ge3$ and $O(\varepsilon^2(1+|\log\varepsilon|))$ for $n=2$. Also $$G_i(x):=\int\partial_i\Phi(x-y)f(y)\,dy$$ is absolutely finite, since $D\Phi$ is locally integrable by step 1.1 and $f$ is bounded with compact support. From the product rule, the difference $\partial_i u_\varepsilon-G_i$ is bounded uniformly in $x$ by $$C_n\|f\|_\infty\left(\int_{B_{2\varepsilon}}|z|^{1-n}dz+ \varepsilon^{-1}\int_{B_{2\varepsilon}}|\Phi(z)|dz\right),$$ which tends to zero (the second term is $O(\varepsilon(1+|\log\varepsilon|))$ when $n=2$). Thus $u_\varepsilon\to Nf$ and $\partial_i u_\varepsilon\to G_i$ uniformly on compact sets. The limit $G_i$ is continuous as a locally uniform limit of continuous functions. [A1, F3, F5, F7, F11, step 1.1, step 1.3, algebra]

3.1 Fix a sequence $\varepsilon_k\downarrow0$, for example $\varepsilon_k=2^{-k}$. Restrict to any closed coordinate segment inside an open box. For each real and imaginary component, [F5] and step 2.2 give convergence of the smooth restrictions at one point and uniform convergence of their derivatives in the chosen coordinate. Hence the uniform derivative limit theorem [F5], applied separately to both components, shows that the corresponding partial derivative of $Nf$ exists and equals $G_i$. The continuous-partials theorem [F5], applied to the real two-component map $(\operatorname{Re}Nf,\operatorname{Im}Nf)$, makes $Nf\in C^1$ with $\partial_iNf=G_i$. [F5, step 2.2]

3.2 Fix a compact box $Q$ and choose $R>0$ so that $\operatorname{supp}f\subset B_R(x)$ for every $x\in Q$, with a positive margin. For $\varepsilon<R/2$, differentiating $G_{i,\varepsilon}:=\partial_i u_\varepsilon$ and using $f=0$ off its support gives $$\partial_jG_{i,\varepsilon}(x)= \int_{B_R(x)}\partial_i\partial_jq_\varepsilon(x-y)(f(y)-f(x))dy+ f(x)\int_{B_R(x)}\partial_i\partial_jq_\varepsilon(x-y)dy.$$ The second integral equals $-\delta_{ij}/n$: change variables $z=x-y$, apply the divergence theorem [F6] to the smooth field $\partial_iq_\varepsilon(z)e_j$ on $B_R(0)$, and use the last sphere integral in step 2.1, since $q_\varepsilon=\Phi$ near that boundary. [A1, F5, F6, F11, step 2.1, algebra]

4.1 Set $$H_{ij}(x):=\int_{B_R(x)}K_{ij}(x-y)(f(y)-f(x))dy-\frac{\delta_{ij}}n f(x).$$ The singular integral is absolutely convergent: its absolute integrand is at most $C_n[f]_{\alpha;\mathbb R^n}|x-y|^{\alpha-n}$, whose polar radial integral at zero is a constant times $\int_0^Rr^{\alpha-1}dr<\infty$. In the omitted inner ball $|z|<\varepsilon$, $D^2q_\varepsilon=0$, so the error from replacing it by $K_{ij}$ after multiplication by $|f(x-z)-f(x)|$ is at most $$C_{n,\alpha}[f]_{\alpha;\mathbb R^n}\int_0^\varepsilon r^{\alpha-1}\,dr\le C_{n,\alpha}[f]_{\alpha;\mathbb R^n}\varepsilon^\alpha.$$ On the transition annulus $\varepsilon<|z|<2\varepsilon$, the product rule, [F4], and the kernel estimates of step 1.1 bound the same error by $$C_{n,\alpha}[f]_{\alpha;\mathbb R^n} \bigl(\varepsilon^\alpha+\varepsilon^\alpha(1+|\log\varepsilon|)\mathbf1_{\{n=2\}}\bigr).$$ Outside $B_{2\varepsilon}$ the kernels agree. The total error tends to zero by [F2], uniformly for $x\in Q$. Therefore $\partial_jG_{i,\varepsilon}\to H_{ij}$ uniformly on $Q$. Each $H_{ij}$ is continuous as this uniform limit. [A1, F2, F3, F4, F5, F11, step 1.1, step 3.2, algebra]

5.1 Use the same sequence $\varepsilon_k$ from step 3.1 and apply [F5]'s uniform derivative limit theorem separately to the real and imaginary components on coordinate segments in $Q$, now for $G_{i,\varepsilon}$ and their $j$-derivatives. Steps 2.2 and 4.1 supply the function and derivative limits, so $\partial_jG_i=H_{ij}$. Apply the continuous-partials theorem [F5] to the real two-component map as in step 3.1 to obtain $Nf\in C^2$ on the box and $\partial_i\partial_jNf=H_{ij}$ there; use mixed partial symmetry on the same two real components as in [[thm-symmetry-of-higher-mixed-partials]]. Since every point lies in such a box, this holds throughout $\mathbb R^n$. The radius $R$ was any sufficiently large containing radius. Comparing the expression for two such radii shows independence: their difference is the integral of $K_{ij}$ over an annulus against the constant $-f(x)$, and the divergence theorem turns it into the difference of the two outer sphere fluxes, both $-\delta_{ij}/n$ in the $z=x-y$ orientation. Thus the formula in the Statement holds for every $r>0$ whose centered ball contains the support. [A1, F5, F6, F10, step 2.1, step 2.2, step 4.1]

5.2 We prove the local Hölder estimate. Take distinct $x,x'$ in a compact box $Q$; the case $x=x'$ is trivial. Put $m=(x+x')/2$ and $d=|x-x'|>0$. Choose one radius $R$ so large that for every pair in $Q$, $\operatorname{supp}f\subset B_R(m)$, the ball $B_R(m)$ has positive distance from both poles to its boundary, and $R\ge2d$. For any bounded $C^1$ domain $\Omega$ with $\operatorname{supp}f\cup\{x\}\subset\Omega$, choose $\varepsilon$ so small that $B_{2\varepsilon}(x)\subset\Omega$ and $q_\varepsilon=\Phi$ near $\partial\Omega$. Since $f$ vanishes outside $\Omega$ and $u_\varepsilon$ is defined by convolution, $$\partial_j\partial_i u_\varepsilon(x)=\int_\Omega\partial_j\partial_iq_\varepsilon(x-y)f(y)dy=\int_\Omega\partial_j\partial_iq_\varepsilon(x-y)(f(y)-f(x))dy-f(x)\int_{\partial\Omega}\partial_iq_\varepsilon(x-y)\nu_j(y)dS(y),$$ where the last equality is the divergence theorem in $y$ and uses $\partial_{y_j}\partial_iq_\varepsilon(x-y)=-\partial_{x_j}\partial_iq_\varepsilon(x-y)$. By the inner-ball and transition-annulus estimates of step 4.1, the first integral tends to $\int_\Omega K_{ij}(x-y)(f(y)-f(x))dy$; the boundary integral equals $g_\Omega(x)$ for these small $\varepsilon$. The left side tends to $H_{ij}(x)$ by steps 3.2 and 4.1. Thus $$H_{ij}(x)=\int_\Omega K_{ij}(x-y)(f(y)-f(x))dy-f(x)g_\Omega(x),\quad g_\Omega(x)=\int_{\partial\Omega}\partial_i\Phi(x-y)\nu_j(y)dS(y).$$ We use this formula with the fixed domain $\Omega=B_R(m)$ for both $x$ and $x'$. Splitting the integral difference into $B_d(m)$ and its complement, the inner part is at most $$C_{n,\alpha}[f]_{\alpha;\mathbb R^n} \int_{B_d(m)}(|x-y|^{\alpha-n}+|x'-y|^{\alpha-n})dy \le C_{n,\alpha}[f]_{\alpha;\mathbb R^n}d^\alpha.$$ On $\Omega\setminus B_d(m)$ write the integrand difference as $$[K_{ij}(x-y)-K_{ij}(x'-y)](f(y)-f(x)) -(f(x)-f(x'))K_{ij}(x'-y).$$ The mean-value theorem [F12] and $|DK_{ij}(z)|\le C_n|z|^{-n-1}$ bound the first term by $C_n[f]_{\alpha}d|y-m|^{\alpha-n-1}$. Its integral is bounded by $C_{n,\alpha}[f]_{\alpha}d^\alpha$, because $d\int_d^\infty r^{\alpha-2}dr=d^\alpha/(1-\alpha)$. For the second term, apply the divergence theorem to the annulus $B_R(m)\setminus\overline B_d(m)$; the two boundary fluxes of $D\Phi$ are bounded by $C_n$ using $|D\Phi(z)|\le C_n|z|^{1-n}$ and $R\ge2d$. Its contribution is at most $C_n[f]_{\alpha}d^\alpha$. Finally, reflection through $m$ and the oddness of $D\Phi$ show $g_\Omega(x)=g_\Omega(x')$, while the same outer-sphere bound gives $|g_\Omega(x)|\le C_n$. Hence $|f(x)g_\Omega(x)-f(x')g_\Omega(x')|\le C_n[f]_{\alpha}d^\alpha$. Together these bounds give $$[H_{ij}]_{\alpha;Q}\le C_{n,\alpha}[f]_{\alpha;\mathbb R^n}.$$ The estimates use the real exponent strictly below $1$ in the convergent outer radial integral. [A1, F2, F3, F5, F6, F11, F12, step 1.1, step 3.2, step 4.1]

6.1 On a compact $K$, choose $R_0$ so $\operatorname{supp}f$ and $K$ lie in a fixed bounded ball. Then for all $x\in K$, the integrals for $Nf$ and $DNf$ are bounded by $\|f\|_\infty$ times the integrals of $|\Phi|$ and $|D\Phi|$ over a fixed ball, which are finite by polar integration [F3]. The formula of step 4.1 bounds $|D^2Nf(x)|$ by $$C_{n,\alpha,R_0}[f]_{\alpha;\mathbb R^n}+n^{-1}\|f\|_\infty.$$ Together with step 5.2 this is the displayed local $C^{2,\alpha}$ estimate. [A1, F3, F7, step 1.2, step 2.2, step 4.1, step 5.2]

6.2 By compact support and continuity, $f$ is integrable, so [F8] applies and gives $-\Delta T_{Nf}=T_f$. Since $Nf\in C^2$, classical/distributional compatibility [F9] and the Laplacian convention [F10] give $T_{-\Delta Nf-f}=0$. Injectivity in [F9] makes this continuous difference zero almost everywhere. If it were nonzero at a point, continuity would make its modulus bounded below by a positive number on some nonempty ball, which has positive measure by [F9], a contradiction. Hence $-\Delta Nf=f$ pointwise. [A1, F8, F9, F10, step 1.2, step 5.1, cases]

7.1 If $f=0$ or $\operatorname{supp}f=\varnothing$, the integral and every term in the cancellation formula vanish. The proof covers $n=2$ by the logarithmic profile and $n\ge3$ by the power profile. Dimensions $n=1$ and $n=0$ are outside the theorem's explicit range; the estimates and Green normalization used here are stated for $n\ge2$. The strict endpoint restrictions $0<\alpha<1$ are used in local integrability of $r^{\alpha-1}$ and convergence of $\int_d^\infty r^{\alpha-2}dr$. All radii and boxes are chosen individually from bounded sets; the only stated choice axiom is $\mathrm{AC}_\omega$ in [A1]. The result is one-way and asserts no converse. [A1, F1, F2, F3, step 1.1, step 1.2, step 4.1, step 5.2, step 6.2, cases] $\square$

## Source notes

Hunter, *Notes on Partial Differential Equations*, §2.7 Theorem 2.26 and Corollary 2.27, printed pp.37–39, prove the cancellation identity for smooth compactly supported data; Theorem 2.28, printed pp.40–43, proves the Hessian Hölder estimate for smooth data and says a density extension is available. I read the full proofs. The density sentence does not itself prove the present pointwise regularity claim for arbitrary Hölder data, so the cutoff and uniform-limit steps above are supplied here.

Teschl, *Partial Differential Equations: From Classical to Modern*, §5.3 Theorem 5.19, printed pp.119–121, gives the same regularity strategy. Its proof says the two-dimensional adaptation is left as an exercise; I derived the logarithmic cutoff bounds explicitly in steps 2.2 and 3.2.

Schmidt, *Partial Differential Equations I* (2026), §2.11 regularity theorem (II), printed pp.74–77, states the $C^{2,\alpha}$ conclusion and proves the cutoff, cancellation, and split-region seminorm estimates. I read the complete argument. Schmidt uses $\Delta F=\delta_0$ and $F=-\Phi$ in the present convention; this reverses both the correction sign and equation, giving $-\Delta Nf=f$ and $-\delta_{ij}f(x)/n$ here. The displayed proof derives those signs from the local kernel and the centered-sphere boundary orientation, not by copying the opposite-sign formula.
