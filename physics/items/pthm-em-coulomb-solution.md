---
id: pthm-em-coulomb-solution
kind: physics-theorem
title: The localized Newtonian potential and the ideal point-charge Coulomb field
domain: physics
physical_scope: "Classical electrostatics in vacuum for a compactly supported charge density (smooth $C^1$ or merely $L^1$), with the localised Newtonian potential $\\varphi=\\varepsilon_0^{-1}N\\rho$ and its field $E=-\\nabla\\varphi$; in the smooth case the field is the continuous Coulomb integral, the potential is the unique decaying $C^2$ solution of $-\\Delta\\varphi=\\rho/\\varepsilon_0$, and $(E,0,\\rho,0)$ realises the pure electrostatic regime. The point-charge clause states the distributional identities for the idealised singular source $q\\delta_{x_0}$ in the framework's SI conventions, with no uniqueness, self-force, reaction or empirical claim."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-em-electrostatic-regime", "def-em-weak-sources", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-em-lab-geometry", "lem-em-newtonian-far-field-gradient", "lem-em-distributional-gradient-smooth-off-a-point", "thm-newtonian-potential-for-holder-data-is-classical", "thm-newtonian-potential-solves-poisson-distributionally", "thm-minus-laplacian-of-the-fundamental-solution-is-dirac", "thm-decay-of-the-newtonian-potential-of-compactly-supported-data", "thm-weak-maximum-principle-for-the-laplacian", "cor-volume-of-the-unit-n-ball", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "lem-laplace-fundamental-solution-is-harmonic-off-its-pole", "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "def-newtonian-potential", "def-laplacian-of-a-c2-function", "def-divergence-and-curl-of-a-c1-vector-field", "def-directional-and-partial-derivatives", "thm-the-curl-of-a-gradient-vanishes", "thm-distributional-differentiation-is-continuous-and-commutes", "thm-clairaut-schwarz-mixed-partials", "thm-algebra-of-derivatives", "thm-chain-rule-for-total-derivatives", "thm-real-power-continuity-and-derivatives", "lem-derivative-of-a-power", "def-ck-euclidean-maps-and-diffeomorphisms", "def-euclidean-inner-product", "def-metric-ball", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "cor-mean-value-theorem", "thm-extreme-value-metric", "def-dirac-delta-and-its-derivatives", "def-distribution", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-test-function-space-d-of-an-open-set", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "cor-continuous-functions-are-borel-measurable", "def-measure-null-set-and-almost-everywhere", "cor-integral-over-a-null-set-vanishes", "def-countable-choice", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-polar-surface-measure-on-the-unit-sphere", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "thm-differentiation-under-the-integral-sign", "cor-c-one-change-of-variables-for-l-one-functions", "def-radial-mollifier-family-in-rn", "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign", "thm-dominated-convergence"]
dependency_roles:
  def-radial-mollifier-family-in-rn: mathematical-premise
  thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  lem-em-newtonian-far-field-gradient: mathematical-premise
  lem-em-distributional-gradient-smooth-off-a-point: mathematical-premise
  thm-newtonian-potential-for-holder-data-is-classical: mathematical-premise
  thm-newtonian-potential-solves-poisson-distributionally: mathematical-premise
  thm-minus-laplacian-of-the-fundamental-solution-is-dirac: mathematical-premise
  thm-decay-of-the-newtonian-potential-of-compactly-supported-data: mathematical-premise
  thm-weak-maximum-principle-for-the-laplacian: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  def-newtonian-potential: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 1.5.3 printed pp. 50-52 (the three-dimensional delta function and 1/r) and Sections 2.1.2, 2.2.2-2.2.4, 2.3.1-2.3.4 printed pp. 59-60, 69-77, 77-87 (Coulomb's law, Gauss's law, div E = rho/epsilon_0, curl E = 0, the potential and Poisson's equation). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Sections 2.1.1, 2.1.3, 2.2, 2.2.1 printed pp. 9-13, 16-19 (the Coulomb force and point charge, line charges, the potential, Poisson's equation (2.12), rho = Q delta_3 and its potential). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (the static equations (36.1)-(36.2), E = -grad phi, the Poisson equation (36.4), the Coulomb law (36.6)-(36.9) and superposition); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 1.3.1-1.3.2 printed pp. 8-9 (Coulomb's law and the electric field) and Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation (3.3.9), the point-charge solution (3.3.14) and the static Green's function (3.3.16)). Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited Lebesgue, polar, Newtonian and distribution interfaces ([[def-countable-choice]]).
Work in $\mathbb R^3$ with its Euclidean structure ([[def-euclidean-inner-product]], [[def-metric-ball]]) and the constants of [[def-em-si-conventions]], $\varepsilon_0=(\mu_0c^2)^{-1}>0$.
Use one-based labels $v_i:=v(i-1)$ for vectors $v\in\mathbb R^3$, $i=1,2,3$; $\partial_i$ means the derivative in that coordinate (the supplier's $\partial_{i-1}$), and $e_i$ below is the standard unit vector in that direction. Divergence, curl and gradient are the cited operators with these labels, so relabelling does not change them.
Let $\Phi$ be the $n=3$ fundamental solution of $-\Delta$ of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], normalised by $-\Delta T_\Phi=\delta_0$; then $\omega_2=4\pi$ and
$$\Phi(z)=\frac{1}{4\pi|z|}\qquad(z\ne0)$$
([[cor-volume-of-the-unit-n-ball]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).
Let $Nf$ be the Newtonian potential of [[def-newtonian-potential]].

(a) [Smooth compact sources] Let $\rho:\mathbb R^3\to\mathbb R$ be of class $C^1$ with compact support contained in $\overline B_R$, $R>0$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-metric-ball]]), put $\varphi:=\varepsilon_0^{-1}N\rho$ and $E:=-\nabla\varphi$.
Then $\varphi\in C^2(\mathbb R^3)$ ([[thm-newtonian-potential-for-holder-data-is-classical]]), and pointwise on $\mathbb R^3$
$$-\Delta\varphi=\frac{\rho}{\varepsilon_0},\qquad \operatorname{div}E=\frac{\rho}{\varepsilon_0},\qquad \operatorname{curl}E=0$$
with the operators of [[def-laplacian-of-a-c2-function]] and [[def-divergence-and-curl-of-a-c1-vector-field]].
Moreover, with $Q:=\int\rho\,d\lambda_3$, for every $x\in\mathbb R^3$ the absolutely convergent Coulomb integral representation holds, and its far-field bound holds for $|x|>2R$,
$$E(x)=\frac{1}{4\pi\varepsilon_0}\int_{\mathbb R^3}\frac{x-y}{|x-y|^3}\rho(y)\,d\lambda_3(y)\quad(x\in\mathbb R^3),\qquad |E(x)|\le\frac{\| \rho\|_1}{\pi\varepsilon_0|x|^2}\quad(|x|>2R),$$
and for $|x|>2R$ the potential obeys the decay bound $|\varphi(x)|\le |Q|/(4\pi\varepsilon_0|x|)+R\|\rho\|_1/(\pi\varepsilon_0|x|^2)$ ([[lem-em-newtonian-far-field-gradient]], [[thm-decay-of-the-newtonian-potential-of-compactly-supported-data]]).
The pair $(E,0,\rho,0)$ therefore realises the pure electrostatic regime of [[def-em-electrostatic-regime]] with source $\rho$, and $E$ is the field of the localised Newtonian potential.

(b) [Uniqueness with vanishing at infinity] If $\psi\in C^2(\mathbb R^3)$ satisfies $-\Delta\psi=\rho/\varepsilon_0$ pointwise on $\mathbb R^3$ and $\lim_{|x|\to\infty}\psi(x)=0$, then $\psi=\varphi$ ([[thm-weak-maximum-principle-for-the-laplacian]]).
In particular, among $C^2$ solutions of the Poisson equation of a compactly supported $C^1$ source decaying at infinity, the localised Newtonian potential is the unique one.

(c) [Compactly supported $L^1$ sources] If instead $\rho\in L^1(\mathbb R^3)$ is real, measurable and compactly supported, then $N\rho$ is finite $\lambda_3$-almost everywhere, belongs to $L^1_{\mathrm{loc}}(\mathbb R^3)$, is $C^\infty$ and harmonic off the support of $\rho$, and its regular distribution satisfies
$$-\Delta T_{\varepsilon_0^{-1}N\rho}=T_{\rho/\varepsilon_0}\qquad\text{in }\mathcal D'(\mathbb R^3)$$
([[thm-newtonian-potential-solves-poisson-distributionally]], scaled by $\varepsilon_0^{-1}$; [[def-regular-distribution-from-a-locally-integrable-function]], [[def-distributional-derivative]]).

(d) [Point charge] Let $q\in\mathbb R$ and $x_0\in\mathbb R^3$ and define, with arbitrary values at $x_0$,
$$\varphi_q(x):=\frac{q}{4\pi\varepsilon_0|x-x_0|},\qquad E_q(x):=\frac{q\,(x-x_0)}{4\pi\varepsilon_0|x-x_0|^3}\qquad(x\ne x_0).$$
Then $\varphi_q\in L^1_{\mathrm{loc}}(\mathbb R^3)$, $E_q$ is locally integrable and $C^\infty$ off $x_0$, $E_q=-\nabla\varphi_q$ on $\mathbb R^3\setminus\{x_0\}$, and, with $T_{\varphi_q}$ the regular distribution of $\varphi_q$ and $\operatorname{div}E_q:=\sum_i\partial_iT_{E_{q,i}}$, $\operatorname{curl}E_q:=(\partial_2T_{E_{q,3}}-\partial_3T_{E_{q,2}},\ \partial_3T_{E_{q,1}}-\partial_1T_{E_{q,3}},\ \partial_1T_{E_{q,2}}-\partial_2T_{E_{q,1}})$,
$$-\Delta T_{\varphi_q}=\frac{q}{\varepsilon_0}\delta_{x_0},\qquad \operatorname{div}E_q=\frac{q}{\varepsilon_0}\delta_{x_0},\qquad \operatorname{curl}E_q=0\qquad\text{in }\mathcal D'(\mathbb R^3)$$
([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]] for the first identity, [[lem-em-distributional-gradient-smooth-off-a-point]] for the passage from the potential to the field, [[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).
The distribution $q\delta_{x_0}$ is the fixed-time reading of the stationary point charge of [[def-em-weak-sources]](b) with charge parameter $q$ and constant trajectory $z\equiv x_0$ ([[def-em-electrostatic-regime]](e)); so the pair $(E_q,0)$ satisfies the distributional pure electrostatic equations with that point source.
This is an idealised point-source model: no claim of uniqueness for the point source, no self-force and no statement about the field at $x_0$ itself is made.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the $n=3$ kernel $\Phi$ with $\Phi(z)=1/(4\pi|z|)$ off the origin and $-\Delta T_\Phi=\delta_0$, the SI constant $\varepsilon_0=(\mu_0c^2)^{-1}>0$, and the compactly supported data and point data of clauses (a)-(d).

[F1] The $n=3$ kernel is $\Phi(z)=|z|^{-1}/\omega_2$ with $\omega_2=4\pi$, since the chart/polar sphere measure satisfies $|S^{n-1}|=n|B_1|$ and the unit ball in dimension three has volume $4\pi/3$; the kernel is locally integrable, smooth off the pole and harmonic there, and $-\Delta T_\Phi=\delta_0$, with the same identity for every translate ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]], [[def-polar-surface-measure-on-the-unit-sphere]], [[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F2] The Newtonian potential is $Nf(x)=\int\Phi(x-y)f(y)\,d\lambda_3(y)$, defined where the integral is absolutely finite; for continuous compactly supported $f$ with finite global Hölder seminorm of exponent $\alpha\in(0,1)$ it is $C^2$ on all of $\mathbb R^3$ with $-\Delta Nf=f$ pointwise; for compactly supported $f\in L^1$ it is finite almost everywhere, locally integrable, $C^\infty$ and harmonic off the support, and satisfies $-\Delta T_{Nf}=T_f$ in $\mathcal D'$ ([[def-newtonian-potential]], [[thm-newtonian-potential-for-holder-data-is-classical]], [[thm-newtonian-potential-solves-poisson-distributionally]]).

[F3] On the far field the gradient representation and the decay of the potential hold: for compactly supported $L^1$ data $f$ and $|x|>2R$ one has $\nabla(Nf)(x)=\int\nabla\Phi(x-y)f(y)\,d\lambda_3(y)$, $|\nabla(Nf)(x)|\le2^{n-1}\|f\|_1/(\omega_{n-1}|x|^{n-1})$, and for $n=3$, $|Nf(x)-Q/(4\pi|x|)|\le R\|f\|_1/(\pi|x|^2)$ whenever $f$ vanishes off the open ball $B_R$, with $Q=\int f$ and $f$ real ([[lem-em-newtonian-far-field-gradient]], [[thm-decay-of-the-newtonian-potential-of-compactly-supported-data]]).

[F4] The Laplacian and the divergence and curl are the classical operators of [[def-laplacian-of-a-c2-function]] and [[def-divergence-and-curl-of-a-c1-vector-field]]; the curl of a gradient of a $C^2$ function vanishes, divergence is linear in the field with coordinate partial derivatives of [[def-directional-and-partial-derivatives]], and the algebra and chain rules for derivatives apply to real powers ([[thm-the-curl-of-a-gradient-vanishes]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] A $C^1$ compactly supported function on $\mathbb R^3$ is bounded and Lipschitz: the continuous gradient norm attains its maximum on a nonempty compact closed ball containing the support, and the gradient vanishes outside that ball, and the mean value theorem bounds increments; consequently it has finite global $\alpha$-Hölder seminorm for every $\alpha\in(0,1]$ ([[thm-extreme-value-metric]], [[cor-mean-value-theorem]], [[def-metric-ball]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-inner-product]]).

[F6] Differentiation under the integral sign and $C^1$ change of variables for $L^1$ functions are available: a continuously differentiable family of integrable sections with one integrable majorant may be differentiated under the integral, and integrals are invariant under translations and reflections of bounded measurable sets ([[thm-differentiation-under-the-integral-sign]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[F7] Locally integrable functions are identified with their regular distributions; distributional derivatives satisfy $\langle\partial^\alpha T,\varphi\rangle=(-1)^{|\alpha|}\langle T,\partial^\alpha\varphi\rangle$, commute with one another and with constant multiples, and agree with classical derivatives for $C^k$ functions; the regular pairing depends only on the almost-everywhere class, and a singleton is Lebesgue null ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distribution]], [[def-distributional-derivative]], [[thm-distributional-differentiation-is-continuous-and-commutes]], [[thm-clairaut-schwarz-mixed-partials]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]], [[def-measure-null-set-and-almost-everywhere]]).

[F8] The Dirac distribution is $\delta_{x_0}(\varphi)=\varphi(x_0)$; test functions are smooth with compact support, and the polar formula computes radial integrals: $\int_{|z|<b}|z|^{-1}\,d\lambda_3=2\pi b^2$ and $\int_{|z|<b}|z|^{-2}\,d\lambda_3=4\pi b$ for $b>0$ ([[def-dirac-delta-and-its-derivatives]], [[def-test-function-space-d-of-an-open-set]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] The pure electrostatic regime and its fixed-time reading are those of [[def-em-electrostatic-regime]], the field and source conventions are those of [[def-em-fields]] and [[def-em-sources]], the laboratory region is that of [[def-em-lab-geometry]], the units are those of [[def-em-si-conventions]], and the weak solution predicate and stationary point source are those of [[def-em-weak-sources]](b),(e).

[F10] The weak maximum principle: for nonempty bounded open $\Omega$ and $u\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u\ge0$, $\max_{\overline\Omega}u=\max_{\partial\Omega}u$ ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F11] For a nonnegative unit-mass smooth radial mollifier supported in $B_\delta(0)$ ([[def-radial-mollifier-family-in-rn]]), $h_\delta=h*\eta_\delta$ is smooth for locally integrable $h$ ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]). For $h\in C_c^1$, $h_\delta$ has support in a fixed compact set for $0<\delta\le1$, and $h_\delta\to h$, $\partial_i h_\delta\to\partial_i h$ uniformly: differentiating $h_\delta(z)=\int\eta_\delta(w)h(z-w)dw$ gives $\partial_i h_\delta=\eta_\delta*\partial_i h$ by [F6], and each uniform error is at most the corresponding uniform-continuity modulus at $\delta$. Dominated convergence passes these uniformly bounded, compactly supported approximants through integrals against the locally integrable kernels $\Phi$ and $\partial_i\Phi$ ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\omega_2=|S^2|=4\pi$ and $\Phi(z)=1/(4\pi|z|)$ for $z\ne0$, so $\nabla\Phi(z)=-z/(4\pi|z|^3)$ and $|\nabla\Phi(z)|=1/(4\pi|z|^2)$ by the chain and power rules ([F4]); $\Phi$ and $\nabla\Phi$ are locally integrable on $\mathbb R^3$, since $\int_{|z|<b}|z|^{-k}d\lambda_3=4\pi b^{3-k}/(3-k)$ is finite for $k=1,2$, while away from the pole the kernels are continuous and hence bounded on compacta ([F8]). Let $\rho\in C^1_c$ with support in $\overline B_R$; by [F5] it is bounded, Lipschitz and has finite global $\alpha$-Hölder seminorm for $\alpha=1/2$, and it vanishes off the open ball $B_R$ because it is continuous and zero on and beyond $S_R$. [given, F1, F4, F5, F8]

2.1 The Hölder theorem [F2] applied with $\alpha=1/2$ gives $N\rho\in C^2(\mathbb R^3)$ with $-\Delta (N\rho)=\rho$ pointwise; scaling $\varphi=\varepsilon_0^{-1}N\rho$ and using linearity of the second coordinate derivatives gives $-\Delta\varphi=\rho/\varepsilon_0$ pointwise, because $\varepsilon_0>0$ is a constant ([F4]). With $E:=-\nabla\varphi$ one has $\operatorname{div}E=-\operatorname{div}\nabla\varphi=-\Delta\varphi=\rho/\varepsilon_0$ on $\mathbb R^3$ and $\operatorname{curl}E=-\operatorname{curl}\nabla\varphi=0$ by [F4], since $\varphi$ is $C^2$. [step 1.1, F2, F4, F9]

3.1 Coulomb representation: since Lebesgue measure is translation invariant, $N\rho(x)=\int\Phi(x-y)\rho(y)\,d\lambda_3(y)=\int\Phi(z)\rho(x-z)\,d\lambda_3(z)$ ([F6]); fix $i\in\{1,2,3\}$, $x_0\in\mathbb R^3$, $\delta>0$ and the interval $J=(-\delta,\delta)$ of coordinate increments, so $x_0+se_i\in B(x_0,\delta)$ for $s\in J$. For such $x$ the integrand $\Phi(z)\rho(x-z)$ is supported in the compact ball $K:=\overline B_{|x_0|+\delta+R}(0)$, and its $s$-derivative $\Phi(z)\partial_i\rho(x-z)$ is dominated on $J$ by $\|\nabla\rho\|_\infty|\Phi(z)|\mathbf 1_K(z)$, which is integrable ([F5], [F8]); differentiation under the integral sign [F6] therefore gives $\partial_iN\rho(x)=\int\Phi(z)\partial_i\rho(x-z)\,d\lambda_3(z)$. For fixed $x$ put $h(z):=\rho(x-z)$, a $C^1$ compactly supported function; then $\partial_i\rho(x-z)=-\partial_{z_i}h(z)$, so $$\partial_iN\rho(x)=-\int\Phi(z)\partial_{z_i}h(z)\,d\lambda_3(z).$$ The kernel $\Phi$ is locally integrable, continuous and smooth off the single point $0$, its classical partials are locally integrable, so [[lem-em-distributional-gradient-smooth-off-a-point]] applies with $u=\Phi$ and gives $\partial_iT_\Phi=T_{\partial_i\Phi}$; This identity is initially paired only with smooth tests: for $h_\delta$ of [F11], $\int\Phi\partial_i h_\delta=-\int\partial_i\Phi\,h_\delta$ by [F7]. Since $h\in C_c^1$, [F11] supplies uniform convergence of both $h_\delta$ and $\partial_i h_\delta$ on a fixed compact support; the two locally integrable kernels therefore allow the limit $\int\Phi\partial_i h=-\int\partial_i\Phi\,h$, without pairing any distribution against a nonsmooth test. Substituting back and translating gives $$\partial_iN\rho(x)=\int\partial_i\Phi(x-y)\rho(y)\,d\lambda_3(y)=-\frac{1}{4\pi}\int\frac{x_i-y_i}{|x-y|^3}\rho(y)\,d\lambda_3(y)$$ for every $x\in\mathbb R^3$, the integral being absolutely convergent because $\operatorname{supp}\rho\subseteq\overline B_R$ lies in the ball $B(x,|x|+2R)$ and $\int_{B(x,|x|+2R)}|x-y|^{-2}d\lambda_3(y)=4\pi(|x|+2R)<\infty$, while $|\rho|\le\|\rho\|_\infty$ on the support ([F1], [F5], [F8]). Multiplying by $-\varepsilon_0^{-1}$ gives exactly the displayed Coulomb representation of $E=-\nabla\varphi$. [step 2.1, F1, F5, F6, F7, F8, F11]

4.1 Bounds and regime reading: for $|x|>2R$ the far-field lemma [F3] with $n=3$, $\omega_2=4\pi$ gives $|\nabla N\rho(x)|\le4\|\rho\|_1/(4\pi|x|^2)=\|\rho\|_1/(\pi|x|^2)$, hence $|E(x)|=\varepsilon_0^{-1}|\nabla N\rho(x)|\le\|\rho\|_1/(\pi\varepsilon_0|x|^2)$. Since $\rho$ is continuous, compactly supported in $\overline B_R$ and zero off $B_R$, the decay theorem [F3] gives $|N\rho(x)-Q/(4\pi|x|)|\le R\|\rho\|_1/(\pi|x|^2)$ for $|x|>2R$, so for $|x|>2R$ we get $|\varphi(x)|\le |Q|/(4\pi\varepsilon_0|x|)+R\|\rho\|_1/(\pi\varepsilon_0|x|^2)$ by the triangle inequality, as claimed. Both terms have units V: $Q$ and $\|\rho\|_1$ carry C, $R$ and $|x|$ carry m, and $\varepsilon_0$ carries F m$^{-1}$; the bound also gives $\varphi(x)\to0$ as $|x|\to\infty$. Finally the fields and density are time independent, and the pointwise identities of step 2.1 are exactly the reduced equations of the pure electrostatic regime, so $(E,0,\rho,0)$ realises that regime with source $\rho$ in the sense of the fixed-time reading ([F9]). [step 3.1, F3, F9]

5.1 Uniqueness (b): let $\psi\in C^2(\mathbb R^3)$ with $-\Delta\psi=\rho/\varepsilon_0$ pointwise and $\psi(x)\to0$ as $|x|\to\infty$, and put $h:=\psi-\varphi$, where $\varphi$ is the potential of clause (a). Then $h\in C^2(\mathbb R^3)$, $\Delta h=\Delta\psi-\Delta\varphi=-\rho/\varepsilon_0+\rho/\varepsilon_0=0$ and $h(x)\to0$ ([F4]). Given $\varepsilon>0$ choose $R_\varepsilon$ with $|h(x)|\le\varepsilon$ for $|x|\ge R_\varepsilon$; for $R>R_\varepsilon$ the weak maximum principle [F10] applied on the bounded open ball $B_R$ to the harmonic $h$ gives $\max_{\overline B_R}h=\max_{\partial B_R}h\le\varepsilon$, and applied to the harmonic $-h$ gives $\min_{\overline B_R}h\ge-\varepsilon$; hence $|h|\le\varepsilon$ on $\overline B_R$. Every point of $\mathbb R^3$ lies in $B_R$ for large $R$, so $|h(x)|\le\varepsilon$ for all $x$ and all $\varepsilon>0$, whence $h=0$ and $\psi=\varphi$ ([F4]). [step 4.1, F4, F10]

6.1 Clause (c): let $\rho\in L^1(\mathbb R^3)$ be real, measurable and compactly supported. The distributional Poisson theorem [F2] gives that $N\rho$ is finite almost everywhere, belongs to $L^1_{\mathrm{loc}}$, is $C^\infty$ and harmonic off the support of $\rho$, and satisfies $-\Delta T_{N\rho}=T_\rho$ in $\mathcal D'(\mathbb R^3)$. Multiplying the regular distribution by the positive constant $\varepsilon_0^{-1}$ and using linearity of distributional differentiation, $-\Delta T_{\varepsilon_0^{-1}N\rho}=\varepsilon_0^{-1}(-\Delta T_{N\rho})=T_{\rho/\varepsilon_0}$ ([F7]); this is the displayed identity, with the same smoothness and harmonicity assertions carried over. [step 5.1, F2, F7]

7.1 Clause (d), first part: $\varphi_q=(q/\varepsilon_0)\Phi(\cdot-x_0)$, so $\varphi_q\in L^1_{\mathrm{loc}}(\mathbb R^3)$ and its classical partials $\partial_i\varphi_q$ are locally integrable, by the local integrability of $|z|^{-1}$ and $|z|^{-2}$ in dimension three ([F1], [F8]); the value at $x_0$ is arbitrary and immaterial ([F7]). By [F1] the translated kernel satisfies $-\Delta_xT_{\Phi(\cdot-x_0)}=\delta_{x_0}$; multiplying by $q/\varepsilon_0$ and using linearity of distributional differentiation gives $-\Delta T_{\varphi_q}=(q/\varepsilon_0)\delta_{x_0}$ ([F7]). Moreover $E_q=-\nabla\varphi_q$ on $\mathbb R^3\setminus\{x_0\}$: differentiating $\varphi_q(x)=q/(4\pi\varepsilon_0|x-x_0|)$ by the chain and power rules gives $\nabla\varphi_q(x)=-\frac{q(x-x_0)}{4\pi\varepsilon_0|x-x_0|^3}$ for $x\ne x_0$ ([F4]). [step 6.1, F1, F4, F7, F8]

8.1 Clause (d), field identities and reading: by [[lem-em-distributional-gradient-smooth-off-a-point]] applied to $u=\varphi_q$ (locally integrable, continuous and smooth off the single point $x_0$, classical partials locally integrable), $\partial_iT_{\varphi_q}=T_{\partial_i\varphi_q}$ ([F7]). Since $E_{q,i}=-\partial_i\varphi_q$ off $x_0$ and a singleton is null, the two functions agree almost everywhere, hence $T_{E_{q,i}}=-T_{\partial_i\varphi_q}=-\partial_iT_{\varphi_q}$ ([F7]); taking one more distributional derivative and summing over $i$ gives $$\operatorname{div}E_q=\sum_i\partial_iT_{E_{q,i}}=-\sum_i\partial_i\partial_iT_{\varphi_q}=-\Delta T_{\varphi_q}=\frac{q}{\varepsilon_0}\delta_{x_0},$$ and the curl components vanish because distributional partial derivatives commute: $$\partial_2T_{E_{q,3}}-\partial_3T_{E_{q,2}}=-(\partial_2\partial_3-\partial_3\partial_2)T_{\varphi_q}=0,$$ and likewise for the other two components ([F7]). By [F9] the distribution $q\delta_{x_0}$ is the fixed-time reading of the stationary point source with charge $q$ at $x_0$, so $(E_q,0)$ satisfies the distributional pure electrostatic equations with that source. No product of distributions was formed, no value of the field at $x_0$ was used, and no uniqueness, self-force, reaction or empirical claim is made; this is exactly the scope stated. [step 7.1, F7, F8, F9] ∎
