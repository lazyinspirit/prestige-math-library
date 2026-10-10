---
id: lem-em-thin-current-limit
kind: lemma
domain: mathematics
title: "Thin closed current: divergence-free distribution and convergence of its mollified Biot-Savart fields"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-distributional-derivative, def-test-function-space-d-of-an-open-set, def-distribution, thm-local-finite-order-characterization-of-distributions, thm-locally-integrable-functions-embed-in-distributions, def-regular-distribution-from-a-locally-integrable-function, thm-distributional-differentiation-is-continuous-and-commutes, thm-chain-rule-for-total-derivatives, thm-differentiation-under-the-integral-sign, cor-vector-valued-ftc-and-lipschitz-bound, thm-continuous-implies-integrable, def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, thm-minus-laplacian-of-the-fundamental-solution-is-dirac, lem-laplace-fundamental-kernel-is-locally-integrable, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, cor-volume-of-the-unit-n-ball, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integrals-are-invariant-under-measure-preserving-maps, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, def-surface-integral-on-a-compact-c-one-hypersurface, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-is-a-complete-measure, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-r, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, lem-relative-compact-closed-sets-have-a-positive-distance-gap, def-cross-product-in-r3, def-euclidean-inner-product, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-divergence-and-curl-of-a-c1-vector-field, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period]
dependency_roles:
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-distribution: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-countable-choice: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  thm-minus-laplacian-of-the-fundamental-solution-is-dirac: mathematical-premise
  lem-laplace-fundamental-kernel-is-locally-integrable: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-heine-borel-r: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  lem-relative-compact-closed-sets-have-a-positive-distance-gap: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Printed pp. 32-36 (PDF pp. 38-42): normalized fundamental kernel, its first derivatives, local integrability and the distributional point-source interpretation, used through the cited published items. The curve-measure argument, the global distributional identities and the away-from-curve convergence are proved explicitly here and are not claimed as a theorem of this source."
    - title: "David Tong, Electromagnetism (University of Cambridge Part II lecture notes)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Printed pp. 49-51: integral vector potential and the thin-wire Biot-Savart formula. Read as the motivation for the stated field formula; the locally integrable global argument is supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\gamma:\mathbb R\to\mathbb R^3$ be a closed embedded $C^2$ curve parametrized by arc length with period $L>0$: $\gamma(s+L)=\gamma(s)$ and $|\gamma'(s)|=1$ for every $s$, and the induced map $\mathbb R/L\mathbb Z\to\mathbb R^3$ is injective. Let $I\in\mathbb R$ and $\mu_0>0$, and for $\psi\in C_c^\infty(\mathbb R^3;\mathbb C^3)=:\mathcal D(\mathbb R^3;\mathbb C^3)$ ([[def-test-function-space-d-of-an-open-set]]) define

$$j(\psi)=I\int_0^L\gamma'(s)\cdot\psi(\gamma(s))\,ds,$$

Here its scalar component distributions are $j_k(\varphi):=I\int_0^L\gamma_k'(s)\varphi(\gamma(s))ds$ for scalar tests $\varphi$, $k=1,2,3$; for a scalar test the notation $j(\varphi)$ below denotes the vector $(j_1(\varphi),j_2(\varphi),j_3(\varphi))$. In the vector-test formula the pairing is the complex-bilinear Euclidean pairing (no conjugation) of [[def-euclidean-inner-product]]; restricted to real-valued $\psi$ this is the stated real functional. Then $\operatorname{div}j=0$ in the distributional sense ([[def-distributional-derivative]], [[def-distribution]]). For any family $(\eta_\varepsilon)_{\varepsilon>0}$ of nonnegative smooth radial kernels with $\int_{\mathbb R^3}\eta_\varepsilon=1$ and $\operatorname{supp}\eta_\varepsilon\subseteq\overline B_\varepsilon(0)$ — including the rescalings $\eta_\varepsilon(x)=\varepsilon^{-3}\eta(x/\varepsilon)$ of a chosen nonnegative unit-mass radial kernel supported in $\overline B_1(0)$ — the mollified fields $j_\varepsilon$ defined by the distribution pairing $j_\varepsilon(x):=j(\eta_\varepsilon(x-\cdot))=I\int_0^L\gamma'(s)\eta_\varepsilon(x-\gamma(s))\,ds$ are smooth, compactly supported and divergence-free, and their Biot-Savart fields converge, with every derivative uniformly on every nonempty compact $K\subseteq\mathbb R^3$ disjoint from $\gamma$, to

$$B(x)=\frac{\mu_0I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds$$

([[def-cross-product-in-r3]]). In addition, assigning arbitrary finite values on the curve gives a representative $B\in L^1_{\mathrm{loc}}(\mathbb R^3;\mathbb R^3)$, smooth off $\gamma$, with $\operatorname{div}T_B=0$ and $\operatorname{curl}T_B=\mu_0j$ globally; the first identity is tested on scalar $\varphi\in C_c^\infty(\mathbb R^3)$ and the second on vector $\psi\in C_c^\infty(\mathbb R^3;\mathbb C^3)$. If $\gamma([0,L])\subseteq B_a(0)$ for some $a>0$, then $|B(x)|\le\mu_0|I|L/\bigl(4\pi(|x|-a)^2\bigr)$ for $|x|>a$, so $B$ decays at infinity. For the circle $\gamma(s)=a(\cos(s/a),\sin(s/a),0)$ and a point $z e_3$ on its axis the value is $B_z=\mu_0Ia^2/\bigl(2(a^2+z^2)^{3/2}\bigr)$. Nothing is asserted about the divergent line self-energy or about fields on the curve itself.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; a closed embedded $C^2$ arc-length curve $\gamma:\mathbb R\to\mathbb R^3$ with $\gamma(s+L)=\gamma(s)$, $|\gamma'(s)|=1$; constants $I\in\mathbb R$, $\mu_0>0$; the sign-normalized Newtonian kernel $\Phi(z)=1/(4\pi|z|)$ for $z\ne0$ with an arbitrary finite assigned value at $0$; nonnegative smooth radial kernels $\eta_\varepsilon$ with $\int\eta_\varepsilon=1$ and $\operatorname{supp}\eta_\varepsilon\subseteq\overline B_\varepsilon(0)$; and the distribution $j$ of the Statement.

[F1] **Chain rule.** If $g$ is differentiable at $\gamma(s)$ and $\gamma$ is differentiable at $s$, then $s\mapsto g(\gamma(s))$ is differentiable at $s$ with derivative $\nabla g(\gamma(s))\cdot\gamma'(s)$ ([[thm-chain-rule-for-total-derivatives]], [[def-euclidean-inner-product]]); the same holds componentwise for vector-valued $g$.

[F2] **FTC and Lipschitz bounds.** If $f:[a,b]\to\mathbb R^m$ is differentiable at every point of $[a,b]$ with $f'$ integrable, then $\int_a^bf'=f(b)-f(a)$; if moreover $\|f'\|\le M$ on $(a,b)$, then $\|f(t)-f(s)\|\le M|t-s|$ for all $s,t\in[a,b]$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]). A continuous real function on $[a,b]$ is Riemann integrable ([[thm-continuous-implies-integrable]]), so the derivatives of the $C^1$ composites below are integrable.

[F3] **Differentiation under the integral sign.** For an open interval $I$, a measure space $X$ and $h:X\times I\to\mathbb C$ with integrable sections, a.e.-differentiable parameter dependence and an integrable dominating function for $\partial_th$, the function $t\mapsto\int h(x,t)d\mu(x)$ is differentiable with the expected derivative ([[thm-differentiation-under-the-integral-sign]]). It is applied below with the measure space $X=[0,L]$ carrying Lebesgue measure and the parameter running in an open interval, coordinatewise in the parameter; the bounded derivatives of the smooth kernels on compact sets supply the dominating functions.

[F4] **Distributions.** $\mathcal D(\Omega)=C_c^\infty(\Omega;\mathbb C)$ ([[def-test-function-space-d-of-an-open-set]]) and the distributional derivative is $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$ ([[def-distributional-derivative]], [[def-distribution]]). A complex-linear functional $u$ on $\mathcal D(\Omega)$ is a distribution exactly when for every compact $K$ there are $m_K\ge0$, $C_K\ge0$ with $|u(\varphi)|\le C_Kp_{m_K}(\varphi)$ on $\mathcal D_K$ ([[thm-local-finite-order-characterization-of-distributions]]). The regular-functional map embeds $L^1_{\mathrm{loc}}(\Omega)$ modulo a.e. equality into $\mathcal D'(\Omega)$ ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-regular-distribution-from-a-locally-integrable-function]]). Constant-coefficient distributional derivatives commute ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] **Tonelli and Fubini.** Nonnegative measurable integrands may be integrated in either order, and absolutely integrable integrands satisfy the Fubini identity ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); translation is measure preserving, so $\int g(x-c)dx=\int g$ ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F6] **Polar integration and the kernel integrals.** For nonnegative Borel $q$, $\int_{\mathbb R^3}q=\int_0^\infty\int_{S^2}q(r\omega)r^2d\sigma(\omega)dr$ with the chart surface measure equal to the polar measure and $\sigma(S^2)=4\pi$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]). Consequently $\int_{B_R}|\Phi|=R^2/2$, $\int_{B_R}|\nabla\Phi|=R$ and $\int_{B_R}|z|^{-2}dz=4\pi R$ for every $R>0$, where $\Phi$ is the kernel above and $\nabla\Phi(z)=-z/(4\pi|z|^3)$ for $z\ne0$.

[F7] **Fundamental solution.** The kernel $\Phi$ is locally integrable and $-\Delta T_\Phi=\delta_0$, and for every $y$ the translated kernel satisfies $-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-laplace-fundamental-kernel-is-locally-integrable]], [[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F8] **Divergence theorem and surface integrals.** On a bounded piecewise $C^1$ domain with a finite face presentation and outward normals, $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$ for $C^1$ fields on $\overline\Omega$, with the surface integrals of [[def-surface-integral-on-a-compact-c-one-hypersurface]] and finite face areas ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]); the sphere $S_r$ is a compact embedded $C^1$ hypersurface whose outward normal at $z$ is $z/r$ and whose area is $4\pi r^2$.

[F9] **Integral bounds.** $|\int g\,d\mu|\le\int|g|\,d\mu$ for integrable $g$ ([[thm-integral-triangle-inequality]]), and monotonicity and scalar rules hold for the nonnegative integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F10] **Nullity tools.** Finite subadditivity of measures ([[thm-finite-and-countable-subadditivity-of-measures]]), the volume $|B_r|=\tfrac43\pi r^3$ of Euclidean balls ([[cor-volume-of-the-unit-n-ball]]), and completeness of Lebesgue measure, so that arbitrary changes on a null set preserve measurability ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F11] **Compactness and distance.** $[0,L]$ is compact ([[thm-heine-borel-r]]), continuous images of compact sets are compact ([[thm-continuous-image-of-a-compact-space-is-compact]]), compact subsets of $\mathbb R^3$ are closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]), closed bounded subsets of $\mathbb R^3$ are compact ([[thm-heine-borel-rn]]), and disjoint nonempty compact and closed sets in a normed space have a positive distance gap ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

[F12] **Cross product.** $u\times v$ is the real bilinear alternating product of [[def-cross-product-in-r3]], extended complex-bilinearly when pairing with tests. For real $u,v\in\mathbb R^3$, $\|u\times v\|_2^2=\|u\|_2^2\|v\|_2^2-\langle u,v\rangle^2\le\|u\|_2^2\|v\|_2^2$ ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]); the pointwise divergence and curl are those of [[def-divergence-and-curl-of-a-c1-vector-field]].

[F13] **Sine and cosine.** $(\sin)'=\cos$ and $(\cos)'=-\sin$, $\sin0=0$, and $\sin$ and $\cos$ have fundamental period $2\pi$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).



## Proof

**Proof technique:** direct.

1.1 For $\psi\in\mathcal D(\mathbb R^3;\mathbb C^3)$ the bound $|j(\psi)|\le|I|\int_0^L|\psi(\gamma(s))|ds\le|I|L\,p_0(\psi)$ holds, with $p_0$ the supremum seminorm over any compact set containing the bounded set $\gamma([0,L])$; the constant does not depend on the compact set $K$ supporting $\psi$, so [F4] makes $j$ a vector distribution of order $\le0$, supported in $\gamma([0,L])$. [given, F4, F11, algebra]

1.2 Put $A_k(x)=\mu_0I\int_0^L\gamma_k'(s)\Phi(x-\gamma(s))ds$ for $x\notin\gamma$ and $A_k=0$ on $\gamma$. For a compact $Q\subseteq\mathbb R^3$ choose $R$ with $Q-\gamma([0,L])\subseteq B_R(0)$; Tonelli [F5] and [F6] give $\int_Q|A_k|\le\mu_0|I|\int_0^L\int_{B_R}|\Phi|=(\mu_0|I|L R^2)/2$ and $\int_Q|\partial_jA_k|\le\mu_0|I|\int_0^L\int_{B_R}|\nabla\Phi|=\mu_0|I|LR$, so $A_k$ and each first partial derivative $\partial_jA_k$ belong to $L^1_{\mathrm{loc}}(\mathbb R^3)$ and define regular distributions by [F4]. [given, F4, F5, F6, F9, algebra]

1.3 For scalar $\varphi\in\mathcal D(\mathbb R^3)$ with support in $B_R(0)$ and $0<\delta<R$, the divergence theorem [F8] on the annulus $\{\delta<|z|<R\}$, presented by the six signed-maximal-coordinate regular graph faces of each boundary sphere whose seam arcs have zero surface measure, applied to the $C^1$ field $\Phi\varphi\,e_j$ gives $\int_{\delta<|z|<R}\partial_j(\Phi\varphi)=\int_{S_R}\Phi\varphi\frac{z_j}{R}dS-\int_{S_\delta}\Phi\varphi\frac{z_j}{\delta}dS$, where the outer term vanishes and the inner term is bounded by $\|\varphi\|_\infty\frac{4\pi\delta^2}{4\pi\delta}=\|\varphi\|_\infty\delta\to0$; expanding $\partial_j(\Phi\varphi)=\partial_j\Phi\,\varphi+\Phi\,\partial_j\varphi$ and letting $\delta\to0$ with the absolutely integrable limits of [F6] yields $\langle\partial_jT_\Phi,\varphi\rangle=-\int\Phi\partial_j\varphi=\int(\partial_j\Phi)\varphi$, that is $\partial_jT_\Phi=T_{\partial_j\Phi}$ with $\partial_j\Phi(z)=-z_j/(4\pi|z|^3)$. [given, F4, F6, F8, F9, algebra]

2.1 For scalar $\varphi\in\mathcal D(\mathbb R^3)$ one has $\langle\operatorname{div}j,\varphi\rangle=-\sum_kj_k(\partial_k\varphi)=-I\int_0^L\gamma'(s)\cdot\nabla\varphi(\gamma(s))ds$ by [F4]; the chain rule [F1] gives $\gamma'(s)\cdot\nabla\varphi(\gamma(s))=(d/ds)(\varphi\circ\gamma)(s)$, and $s\mapsto(\varphi\circ\gamma)(s)$ is $C^1$ with continuous derivative on $[0,L]$, hence integrable, so the second FTC [F2] and the periodicity $\varphi(\gamma(L))=\varphi(\gamma(0))$ give $\int_0^L(d/ds)(\varphi\circ\gamma)ds=0$. Therefore $\operatorname{div}j=0$. [step 1.1, F1, F2, F4, algebra]

2.2 The pairing $j_\varepsilon(x)=j(\eta_\varepsilon(x-\cdot))$ uses the test function $y\mapsto\eta_\varepsilon(x-y)\in\mathcal D(\mathbb R^3)$, and expanding the definition of $j$ gives $j_\varepsilon(x)=I\int_0^L\gamma'(s)\eta_\varepsilon(x-\gamma(s))ds$ for every $x$; this is the mollified field of the Statement. [step 1.1, given, algebra]

2.3 The translated identity $\partial_jT_{\Phi(\cdot-y)}=T_{\partial_j\Phi(\cdot-y)}$ follows from step 1.3 because the pairing is translation invariant [F5]; applying it under the absolutely integrable $s$-integral of step 1.2 gives $\partial_jT_{A_k}=T_{\mu_0I\int_0^L\gamma_k'(s)\partial_j\Phi(x-\gamma(s))ds}$, and with the componentwise distributional curl $\operatorname{curl}_ku=\sum_{i,j}\varepsilon_{kij}\partial_iu_j$ of [F12] one obtains $\operatorname{curl}T_A=T_B$ for the stated $B$, since $\varepsilon_{kij}\gamma_j'(s)\partial_i\Phi(x-\gamma(s))=\varepsilon_{kij}\gamma_j'(s)\frac{-(x-\gamma(s))_i}{4\pi|x-\gamma(s)|^3}=\frac{(\gamma'(s)\times(x-\gamma(s)))_k}{4\pi|x-\gamma(s)|^3}$ by [F12]. [step 1.2, step 1.3, F4, F5, F12, algebra]

2.4 For scalar $\varphi\in\mathcal D(\mathbb R^3)$ set $H(y)=\int_{\mathbb R^3}\Phi(z)\varphi(z+y)dz$, which is smooth near the compact curve $\gamma([0,L])$ by differentiation under the integral sign [F3] against the locally integrable $\Phi$; then $\langle\operatorname{div}T_A,\varphi\rangle=-\langle T_A,\nabla\varphi\rangle=-\mu_0I\int_0^L\gamma'(s)\cdot\Bigl(\int\Phi(z)\nabla\varphi(z+\gamma(s))dz\Bigr)ds=-\mu_0I\int_0^L\gamma'(s)\cdot\nabla H(\gamma(s))ds$, the interchange being justified by the Tonelli bound of step 1.2, and the chain rule together with the FTC and periodicity of $s\mapsto H(\gamma(s))$ gives $\int_0^L\gamma'(s)\cdot\nabla H(\gamma(s))ds=0$; hence $\operatorname{div}T_A=0$. [step 1.2, F1, F2, F3, F5, algebra]

2.5 Componentwise, [F7] gives $-\Delta T_{A_k}=\mu_0I\int_0^L\gamma_k'(s)\delta_{\gamma(s)}ds$: for a scalar test $\varphi$, Fubini [F5] and the translated fundamental-solution identity of [F7] yield $\langle-\Delta T_{A_k},\varphi\rangle=-\mu_0I\int_0^L\gamma_k'(s)\int\Phi(x-\gamma(s))\Delta\varphi(x)dx\,ds=\mu_0I\int_0^L\gamma_k'(s)\varphi(\gamma(s))ds$; applying this to the components of a vector test $\psi$ gives $\langle-\Delta T_A,\psi\rangle=\mu_0I\int_0^L\gamma'(s)\cdot\psi(\gamma(s))ds=\mu_0j(\psi)$, that is $-\Delta T_A=\mu_0j$. [step 1.2, F5, F7, algebra]

3.1 For every multi-index $\alpha$ the integrand $\gamma'(s)D^\alpha\eta_\varepsilon(x-\gamma(s))$ is smooth in $x$ with $s$-independent bound $\sup|D^\alpha\eta_\varepsilon|$ over the compact parameter interval $[0,L]$, so differentiation under the integral sign [F3] coordinatewise gives $D^\alpha j_\varepsilon(x)=I\int_0^L\gamma'(s)D^\alpha\eta_\varepsilon(x-\gamma(s))ds$ and $j_\varepsilon\in C^\infty(\mathbb R^3;\mathbb C^3)$; the integrand vanishes unless $x\in\gamma([0,L])+\operatorname{supp}\eta_\varepsilon\subseteq\gamma([0,L])+\overline B_\varepsilon(0)$, a closed bounded and hence compact set by [F11], so $\operatorname{supp}j_\varepsilon$ is compact. [step 2.2, F3, F11, algebra]

3.2 Since $T_B=\operatorname{curl}T_A$ by step 2.3 and constant-coefficient distributional derivatives commute [F4], the alternating-symbol cancellations give $\operatorname{div}T_B=\operatorname{div}\operatorname{curl}T_A=0$ and $\operatorname{curl}T_B=\operatorname{curl}\operatorname{curl}T_A=\nabla\operatorname{div}T_A-\Delta T_A=0+\mu_0j=\mu_0j$; this proves the global distributional identities for $T_B$ without any limit through the singular support. [step 2.3, step 2.4, step 2.5, F4, algebra]

3.3 On $\mathbb R^3\setminus\gamma$ the field $B$ is given by the absolutely convergent integral of the Statement, with $|B(x)|\le\frac{\mu_0|I|}{4\pi}\int_0^L|x-\gamma(s)|^{-2}ds$ because $|\gamma'(s)\times(x-\gamma(s))|\le|x-\gamma(s)|$ by [F12]; the same Tonelli computation as step 1.2 gives $\int_Q|B|\le\mu_0|I|LR$ on every compact $Q$, so $B\in L^1_{\mathrm{loc}}(\mathbb R^3;\mathbb R^3)$ and $T_B$ is its regular distribution by [F4]; the curve is Lebesgue-null because for every $h>0$ the Lipschitz bound [F2] with $|\gamma'|=1$ covers $\gamma([0,L])$ by the $\lceil L/h\rceil$ balls of radius $h$ about the equally spaced points $jL/\lceil L/h\rceil$, whose total volume $\lceil L/h\rceil\frac43\pi h^3$ tends to $0$ as $h\to0$ by [F10], and arbitrary finite values assigned on that null set therefore give the same locally integrable class and a measurable representative; on a compact subset of the complement the distance gap of [F11] bounds the kernel and all its $x$-derivatives uniformly, so differentiation under the integral sign [F3] makes $B$ smooth off $\gamma$. [step 2.3, step 1.2, F2, F3, F4, F5, F6, F9, F10, F11, F12, algebra]

4.1 For every fixed $x$ one has $\operatorname{div}j_\varepsilon(x)=I\int_0^L\gamma'(s)\cdot\nabla\eta_\varepsilon(x-\gamma(s))ds=-I\int_0^L(d/ds)\bigl[\eta_\varepsilon(x-\gamma(s))\bigr]ds=0$: the chain rule [F1] identifies the integrand with the negative $s$-derivative, the composite is $C^1$ on $[0,L]$ with integrable derivative [F2], and periodicity gives equal endpoint values. [step 3.1, F1, F2, algebra]

4.2 If $\gamma([0,L])\subseteq B_a(0)$ and $|x|>a$, then $|x-\gamma(s)|\ge|x|-a$ for every $s$, so step 3.3 gives $|B(x)|\le\frac{\mu_0|I|}{4\pi}\frac{L}{(|x|-a)^2}$, the stated decay at infinity. [step 3.3, F12, algebra]

4.3 Let $K$ be nonempty compact with $d=\operatorname{dist}(K,\gamma([0,L]))>0$ by [F11], let $0<\varepsilon<d/2$, and let $A_\varepsilon(x)=\frac{\mu_0}{4\pi}\int\frac{j_\varepsilon(y)}{|x-y|}dy$ be the Newtonian potential of the smooth compactly supported $j_\varepsilon$; differentiating under the integral sign [F3] on $K$, where $|x-y|\ge d/2$ for $y\in\operatorname{supp}j_\varepsilon$ by step 3.1, gives the Biot-Savart field $B_\varepsilon(x)=\operatorname{curl}A_\varepsilon(x)=\frac{\mu_0}{4\pi}\int\frac{j_\varepsilon(y)\times(x-y)}{|x-y|^3}dy$; substituting the formula of step 2.2 for $j_\varepsilon$, applying Fubini [F5] and translating $y=\gamma(s)+u$ with the measure-preserving change of variables [F5] yields $B_\varepsilon(x)=\frac{\mu_0I}{4\pi}\int_0^L\int_{\overline B_\varepsilon(0)}\frac{\gamma'(s)\times(x-\gamma(s)-u)}{|x-\gamma(s)-u|^3}\eta_\varepsilon(u)\,du\,ds$, all integrals absolutely convergent because $|x-\gamma(s)-u|\ge d-\varepsilon>0$. [step 2.2, step 3.1, F3, F5, F11, algebra]

5.1 For every multi-index $\alpha$ and $x\in K$, differentiate the absolutely convergent formulas of steps 3.3 and 4.3 under the integral signs [F3] and write $F_s(w)=\gamma'(s)\times w/|w|^3$: $D^\alpha B_\varepsilon(x)=\frac{\mu_0I}{4\pi}\int_0^L\int D^\alpha F_s(x-\gamma(s)-u)\eta_\varepsilon(u)duds$ and $D^\alpha B(x)=\frac{\mu_0I}{4\pi}\int_0^LD^\alpha F_s(x-\gamma(s))ds$; on the annulus $|w|\ge d/2$ one has $|D_wD^\alpha F_s(w)|\le C_\alpha|w|^{-3-|\alpha|}$ uniformly in $s$ because $|\gamma'(s)|=1$ and the derivatives of $w/|w|^3$ are homogeneous of the corresponding degrees, so the Lipschitz bound [F2] applied along the segment from $x-\gamma(s)$ to $x-\gamma(s)-u$ gives $|D^\alpha F_s(x-\gamma(s)-u)-D^\alpha F_s(x-\gamma(s))|\le C_\alpha(d/2)^{-3-|\alpha|}|u|$; integrating against the unit-mass kernel supported in $\overline B_\varepsilon(0)$ gives $|D^\alpha B_\varepsilon(x)-D^\alpha B(x)|\le\frac{\mu_0|I|L}{4\pi}C_\alpha(d/2)^{-3-|\alpha|}\varepsilon$, which tends to $0$ uniformly over $x\in K$ as $\varepsilon\to0$: the Biot-Savart fields converge with every derivative uniformly on $K$. [step 3.3, step 4.3, F2, F3, F5, F9, algebra]

6.1 For $\gamma(s)=a(\cos(s/a),\sin(s/a),0)$ and $x=z e_3$, step 3.3's formula has numerator $\gamma'(s)\times(x-\gamma(s))=(z\cos(s/a),z\sin(s/a),a)$ and denominator $(a^2+z^2)^{3/2}$, so $B(x)=\frac{\mu_0I}{4\pi(a^2+z^2)^{3/2}}\int_0^{2\pi a}(z\cos(s/a),z\sin(s/a),a)\,ds$; with $ds=a\,d\theta$, the transverse entries integrate to $0$ and the third entry integrates to $2\pi a^2$, because $\int_0^{2\pi}\cos=\int_0^{2\pi}\sin=0$ by the FTC and the fundamental period of [F13]; hence $B_z=\mu_0Ia^2/\bigl(2(a^2+z^2)^{3/2}\bigr)$, while no value of the singular line integral on the curve and no self-energy is asserted. [step 3.3, F2, F13, algebra] ∎
