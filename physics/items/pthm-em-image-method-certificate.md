---
id: pthm-em-image-method-certificate
kind: physics-theorem
title: "The image-method certificate for a point charge above a grounded plane"
status: published
origin: session
dependency_level: 17
domain: physics
deps: [pthm-em-coulomb-solution, post-em-electrostatic-conductor-model, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-em-weak-sources, def-em-lab-geometry, lem-em-half-space-harmonic-uniqueness-with-decay, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, thm-integration-by-parts, cor-mean-value-theorem, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, def-test-function-space-d-of-an-open-set, def-dirac-delta-and-its-derivatives, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-continuous-functions-are-borel-measurable, def-integral-over-a-measurable-set, def-countable-choice, thm-distributional-differentiation-is-continuous-and-commutes, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, cor-volume-of-the-unit-n-ball, thm-ftc-second-part, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-monotone-convergence-for-the-integral, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, post-em-distributional-vacuum-maxwell, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-local-finite-order-characterization-of-distributions]
dependency_roles:
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  pthm-em-coulomb-solution: physical-result
  post-em-electrostatic-conductor-model: physical-assumption
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-weak-sources: operational-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  post-em-distributional-vacuum-maxwell: operational-prerequisite
  lem-em-half-space-harmonic-uniqueness-with-decay: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
physical_scope: "The ideal electrostatic problem of a point charge held above an infinite grounded conducting plane, read in the framework's SI conventions: on the vacuum half-space the image potential is harmonic off the source, has the point-charge distributional source, vanishes on the plane, decays like |x|^-2, and is unique in the stated continuous-boundary and decay class; the plane's induced density is the idealization's bookkeeping normal-derivative reading. The item asserts no finite-plane edge effects, no conductor thickness, no dynamics, no self-force and no measurement, and the half-space conductor and noncompact sheet are explicitly outside the bounded-conductor model and the declared source types. The induced density is explicitly smooth on the whole plane, has absolutely convergent total charge $-q$, and the full-space point-plus-plane divergence identity is verified with local tests as a separate mathematical idealization. Matching singularities allow any remainder of order $o(|x-p|^{-1})$."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Sections 3.2.1-3.2.2 printed pp. 121-123 (the classic image problem, potential (3.9), induced surface charge (3.10) and total induced charge -q (3.11))."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.3 printed pp. 35-36 (method of images: potential (2.33), induced charge and total -q)."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: "Sections 32.1-32.2.1 printed pp. 351-354 (image theory for a flat conductor surface: tangential static field zero, opposite-sign image charge)."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) inherited from the Newtonian, polar and distribution interfaces ([[def-countable-choice]]). Let

$$H:=\{x\in\mathbb R^3:x_3>0\},\qquad \Pi:=\{x_3=0\},\qquad p:=a e_3\ (a>0),$$

Here $e_3:=(0,0,1)$ is the third coordinate unit vector, $a$ carries metres, and the coordinates are SI numerical readings in the named frame. Let $q\in\mathbb R$ be a charge parameter (coulombs) and $\varepsilon_0>0$ the framework constant ([[def-em-si-conventions]]). Define, with arbitrary values on the exceptional sets,

$$\varphi_I(x):=\frac{q}{4\pi\varepsilon_0}\left(\frac1{|x-p|}-\frac1{|x+ae_3|}\right)\quad(x\in H\setminus\{p\}),\qquad E_I:=-\nabla\varphi_I.$$

The map $E_I$ is a spatial field of [[def-em-fields]] in the fixed-time reading, with the units of [[def-em-si-conventions]]. Then:

(a) [Candidate field] $\varphi_I\in C^\infty(H\setminus\{p\})$ and $\Delta\varphi_I=0$ pointwise on $H\setminus\{p\}$: the first term is the Coulomb potential of $p$, whose $n=3$ fundamental solution is harmonic off its pole ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[pthm-em-coulomb-solution]](d)), and the second term is $C^\infty$ and harmonic on the whole of $H$ because its pole $-ae_3$ lies outside $H$; $E_I$ is $C^\infty$ on $H\setminus\{p\}$.

(b) [Distributional point source] $\varphi_I\in L^1_{\mathrm{loc}}(H)$ and

$$-\Delta T_{\varphi_I}=\frac{q}{\varepsilon_0}\,\delta_p\qquad\text{in }\mathcal D'(H),$$

where $T_{\varphi_I}$ is the regular distribution of $\varphi_I$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]) and $\delta_p$ the Dirac distribution at $p$ ([[def-dirac-delta-and-its-derivatives]]); moreover the field satisfies $\operatorname{div}E_I=(q/\varepsilon_0)\delta_p$ and $\operatorname{curl}E_I=0$ in $\mathcal D'(H)$, where the divergence and curl of $E_I$ are the distributional derivatives of its components ([[def-distributional-derivative]]). Thus $(E_I,0)$ is a pure electrostatic model on $H$ with the fixed-time point source $q\delta_p$, the static reading of the stationary point charge of [[def-em-weak-sources]](b) ([[def-em-electrostatic-regime]](e)).

(c) [Boundary trace and decay] $\varphi_I$ extends continuously to $\overline H\setminus\{p\}$ with $\varphi_I=0$ on $\Pi$ (the two denominators are equal there), and for $|x|\ge2a$ the cancellation bound holds:

$$|\varphi_I(x)|\le\frac{2|q|\,a}{\pi\varepsilon_0|x|^2}.$$

The bound follows by applying the mean value theorem along the segment from $-ae_3$ to $ae_3$ to the function $y\mapsto|x-y|^{-1}$, whose gradient is bounded by $(|x|-a)^{-2}$ there ([[cor-mean-value-theorem]], [[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[def-euclidean-inner-product]]). In particular $\varphi_I(x)\to0$ as $|x|\to\infty$ in $H$.

(d) [Uniqueness in the declared class] let $\psi:H\setminus\{p\}\to\mathbb R$ be $C^2$ and harmonic on $H\setminus\{p\}$, continuous on $\overline H\setminus\{p\}$, with $\psi=0$ on $\Pi$, $|x-p|(\psi(x)-\varphi_I(x))\to0$ as $x\to p$ and $\psi(x)\to0$ as $|x|\to\infty$ in $H$. Then $\psi=\varphi_I$ on $H\setminus\{p\}$. Equivalently, the Dirichlet problem $\Delta\psi=0$ on $H\setminus\{p\}$, $\psi=0$ on $\Pi$, with the leading singularity of the point charge at $p$ and decay at infinity, has exactly one solution in the stated class.

(e) [Physics reading: ideal grounded plane in the fixed-time reading of [[def-em-lab-geometry]]] the ideal grounded conducting half-space $\{x_3<0\}$ with the field $E_I$ on $H$, $E\equiv0$ below $\Pi$ and the induced density $\sigma:=\varepsilon_0\,n\cdot E_+|_\Pi=-\varepsilon_0\,\partial_3\varphi_I|_\Pi$ (using the normal $n=e_3$ from the conductor into the vacuum; $\sigma\in C^\infty(\Pi)$) is a model of the same equilibrium structure as [[post-em-electrostatic-conductor-model]]: it is a pure electrostatic field on $H$ with the point source at $p$ and the equipotential boundary condition $\varphi_I=0$ on $\Pi$; the pair $(E_I,0)$ satisfies the static electrostatic equations with source $q\delta_p$ on $H$, and the induced density is explicitly $\sigma(x_1,x_2)=-qa/[2\pi(x_1^2+x_2^2+a^2)^{3/2}]$, is absolutely integrable over the plane, and has total charge $\int_\Pi\sigma\,dS=-q$. However, the half-space conductor is not a compact conductor body: the plane is not a compact embedded hypersurface, $\Pi$ and $\{x_3<0\}$ are not among the geometric objects of [[post-em-electrostatic-conductor-model]], the density $\sigma$ is not a declared stationary-sheet source of [[def-em-weak-sources]](c), and the noncompact plane pairing is not an adopted compact-sheet source of that definition. As a separately specified mathematical idealization, extending $E_I$ by zero below the plane gives $\operatorname{div}\widetilde E=(q\delta_p+\sigma\delta_\Pi)/\varepsilon_0$ and $\operatorname{curl}\widetilde E=0$ on $\mathbb R^3$, where $(\sigma\delta_\Pi)(\eta)=\int_{\mathbb R^2}\sigma(x')\eta(x',0)dx'$. This verified identity does not extend the framework postulate to arbitrary noncompact sheets. The clause is the explicitly declared idealization whose exact mathematical content is (a)-(d).

(f) [Scope] the statement concerns the ideal point charge above an ideal grounded plane in the declared decay class; it excludes finite-plane edge effects, conductor thickness, transients, moving charges, radiation, self-force and any measurement; no uniqueness is asserted outside the class of (d), and the point-source singularity is never evaluated.

## Facts & Assumptions


**Given:** The half-space $H$, the plane $\Pi$, the point $p=ae_3$, $a>0$, the charge parameter $q$, the constant $\varepsilon_0>0$, and the candidate $\varphi_I$ and field $E_I$ of the statement.

[F1] The $n=3$ fundamental solution is $\Phi(z)=1/(4\pi|z|)$, smooth and harmonic on $\mathbb R^3\setminus\{0\}$; the Coulomb point-charge branch of [[pthm-em-coulomb-solution]](d) identifies the point-charge potential $\varphi_q^p=(q/\varepsilon_0)\Phi(\cdot-p)$ as locally integrable with distributional Laplacian $-\Delta T_{\varphi_q^p}=(q/\varepsilon_0)\delta_p$ on $\mathbb R^3$ and field $E_q^p=-\nabla\varphi_q^p$ satisfying $\operatorname{div}E_q^p=(q/\varepsilon_0)\delta_p$, $\operatorname{curl}E_q^p=0$ in $\mathcal D'(\mathbb R^3)$ ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[pthm-em-coulomb-solution]], [[def-laplacian-of-a-c2-function]], [[def-dirac-delta-and-its-derivatives]]).

[F2] A $C^1$ function on an open set represents its regular distribution and its distributional first derivatives are the regular distributions of its classical derivatives; distributional differentiation is linear and the Laplacian of a classical harmonic function therefore represents the zero distribution ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-distributional-derivative]], [[def-distribution]], [[thm-local-finite-order-characterization-of-distributions]], [[thm-integration-by-parts]], [[thm-distributional-differentiation-is-continuous-and-commutes]], [[def-test-function-space-d-of-an-open-set]]).

[F3] Local integrability in dimension three: the radial integral of $|z|^{-1}$ over a ball is finite by polar coordinates, finite sums and scalar multiples of locally integrable measurable functions are locally integrable, as are their products with locally bounded measurable functions, and continuous functions are Borel measurable ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-continuous-functions-are-borel-measurable]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]).

[F4] Mean value theorem and derivative calculus: for $g(y):=|x-y|^{-1}$ with $x$ fixed, $g$ is $C^\infty$ off $x$ and $\nabla_y g(y)=(x-y)/|x-y|^3$, so $|\nabla_y g(y)|=|x-y|^{-2}$; differentiation with respect to $x$ instead gives $\nabla_x|x-y|^{-1}=-(x-y)/|x-y|^3$; the mean value theorem bounds $|g(p)-g(-p)|$ by $|p-(-p)|\sup|\nabla g|$ on the segment ([[cor-mean-value-theorem]], [[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] The half-space uniqueness lemma: a function continuous on $\overline H\setminus\{p\}$, $C^2$ and harmonic on $H\setminus\{p\}$, zero on $\Pi$, sub-Coulomb at $p$ and vanishing at infinity in $H$ is identically zero ([[lem-em-half-space-harmonic-uniqueness-with-decay]]).

[F6] The polar/Fubini calculus on the plane: integrals over $\mathbb R^2$ may be computed in polar coordinates, the product and Euclidean measures agree on Borel sets, the plane is Lebesgue null in $\mathbb R^3$, and the one-dimensional fundamental theorem computes the radial primitive ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[thm-ftc-second-part]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-monotone-convergence-for-the-integral]]).

[F7] Framework readings: the fixed-time reading of the pure electrostatic regime identifies the static fields and the stationary point charge of [[def-em-weak-sources]](b) with $q\delta_p$; the units are those of [[def-em-si-conventions]]; and the adopted distributional equations are those of [[post-em-distributional-vacuum-maxwell]] ([[def-em-electrostatic-regime]](e), [[def-em-fields]], [[def-em-lab-geometry]], [[def-em-weak-sources]]).

[F8] For $0<r<R$ there is a smooth function $\chi:\mathbb R^3\to[0,1]$ equal to one on $\overline B_r(p)$ and supported strictly inside $B_R(p)$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

## Proof

**Proof technique:** direct.

1.1 Clause (a). Write $\varphi_I=(q/\varepsilon_0)\Phi(\cdot-p)-(q/\varepsilon_0)\Phi(\cdot+ae_3)$ [F1]. The first term is smooth and harmonic off its pole $p$; the second has its pole at $-ae_3$, which lies outside the closed half-space $\overline H$, so it is $C^\infty$ on $H$ and harmonic there by [F1] and linearity of the Laplacian [F2]; hence $\varphi_I\in C^\infty(H\setminus\{p\})$, $\Delta\varphi_I=0$ there, and $E_I=-\nabla\varphi_I$ is $C^\infty$ on $H\setminus\{p\}$. [F1, F2]

1.2 Local integrability and distributional identities. $\varphi_I$ is locally integrable on $H$: $|x-p|^{-1}$ is locally integrable in dimension three and $|x+ae_3|^{-1}$ is continuous on $H$, and sums and scalar multiples of locally integrable measurable functions are locally integrable [F3]. Its regular distribution is $T_{\varphi_I}=(q/\varepsilon_0)T_{\Phi(\cdot-p)}-(q/\varepsilon_0)T_{\Phi(\cdot+ae_3)}$ [F2, F3]. On $H$ the second term is $C^\infty$ with classically vanishing Laplacian, so its distributional Laplacian is the regular distribution of the zero function [F2]; the first term has $-\Delta T=(q/\varepsilon_0)\delta_p$ on $\mathbb R^3$, hence on the open subset $H$ [F1]. Summing gives $-\Delta T_{\varphi_I}=(q/\varepsilon_0)\delta_p$ in $\mathcal D'(H)$. For the field, $E_I=E_q^p-E_q^{-p}$ where $E_q^{-p}:=-\nabla((q/\varepsilon_0)\Phi(\cdot+ae_3))$ is smooth on $H$ with $\operatorname{div}E_q^{-p}=0$, $\operatorname{curl}E_q^{-p}=0$ there [F2]; componentwise $T_{E_{I,i}}=-\partial_iT_{\varphi_I}$ on $H$ by the same representation and [F2], so the distributional divergence and curl of $E_I$ are those of the sum, giving $\operatorname{div}E_I=(q/\varepsilon_0)\delta_p$ and $\operatorname{curl}E_I=0$ in $\mathcal D'(H)$ [F1, F2]. This is (b); taking it together with [F7] reads $(E_I,0)$ as the pure electrostatic model on $H$ with the fixed-time point source $q\delta_p$, as asserted. [F1, F2, F3, F7]

1.3 Clause (c). On $\Pi$ one has $|x-p|=|x+ae_3|$ for every $x$ with $x_3=0$, so the bracket in $\varphi_I$ vanishes and $\varphi_I$ extends continuously (indeed $C^\infty$ away from $x=p\notin\Pi$) with value $0$ on $\Pi$. For the decay, fix $x$ with $|x|\ge2a$ and apply the mean value theorem to $g(y):=|x-y|^{-1}$ on the segment from $-ae_3$ to $ae_3$: since every point $y$ of that segment satisfies $|x-y|\ge|x|-a\ge a>0$, one has $|\nabla g(y)|=|x-y|^{-2}\le(|x|-a)^{-2}$ and therefore $|g(p)-g(-p)|\le 2a(|x|-a)^{-2}$ [F4]. Multiplying by $|q|/(4\pi\varepsilon_0)$ gives $|\varphi_I(x)|\le |q|a/(2\pi\varepsilon_0(|x|-a)^2)\le 2|q|a/(\pi\varepsilon_0|x|^2)$ because $|x|\le 2(|x|-a)$ for $|x|\ge2a$. This is (c). [F4]

2.1 Clause (d). Let $\psi$ be as in the statement and put $w:=\psi-\varphi_I$ on $H\setminus\{p\}$. Then $w$ is $C^2$ and harmonic on $H\setminus\{p\}$ and continuous on $\overline H\setminus\{p\}$ by (a) [step 1.1]; $w=0$ on $\Pi$ because both functions vanish there [step 1.3]; $|x-p|w(x)\to0$ as $x\to p$ by the assumed leading-singularity condition; and $w(x)\to0$ as $|x|\to\infty$ in $H$ because both $\psi$ and $\varphi_I$ do. By [F5] applied to $w$, $w=0$ on $H\setminus\{p\}$, so $\psi=\varphi_I$. This is (d). [F5, step 1.1, step 1.3]

2.2 Clause (e), first part. On the plane, $n=e_3$ and $\sigma=-\varepsilon_0\partial_3\varphi_I|_\Pi$; differentiating the two Coulomb terms, whose gradients are $-(x\mp p)/|x\mp p|^3$ [F4], at $x_3=0$ gives $\partial_3|x-p|^{-1}=a/(x_1^2+x_2^2+a^2)^{3/2}$ and $\partial_3|x+ae_3|^{-1}=-a/(x_1^2+x_2^2+a^2)^{3/2}$, so $\partial_3\varphi_I=qa/[2\pi\varepsilon_0(x_1^2+x_2^2+a^2)^{3/2}]$ and hence $\sigma(x_1,x_2)=-qa/[2\pi(x_1^2+x_2^2+a^2)^{3/2}]$, a smooth bounded function; the boundary condition $\varphi_I=0$ on $\Pi$ is the equipotential (zero) trace of the ideal grounded plane, and $(E_I,0)$ satisfies the static equations with source $q\delta_p$ on $H$ by (b) [step 1.2]. The total induced charge is
$$\int_{\mathbb R^2}\sigma\,d\lambda_2=-\frac{qa}{2\pi}\int_0^\infty\frac{2\pi r\,dr}{(r^2+a^2)^{3/2}}=-qa\Bigl[-\frac1{\sqrt{r^2+a^2}}\Bigr]_{r=0}^{\infty}=-q,$$
with the polar-coordinate computation and the improper radial primitive justified by [F6]; the identical polar computation with $|q|$ in place of $-q$ gives $\int_{\mathbb R^2}|\sigma|\,d\lambda_2=|q|<\infty$, including $q=0$. [F4, F6, step 1.2]

3.1 Clause (e), extension identity. Extend $E_I$ by zero to $\{x_3\le0\}$, obtaining $\widetilde E\in L^1_{\mathrm{loc}}(\mathbb R^3)$ by the point-field integrability in [F1] and smoothness away from $p$. The plane pairing is a distribution: on tests supported in a compact box its absolute value is bounded by $\sup|\sigma|$ times the finite area of the box's planar section times $\sup|\eta|$. Choose $0<r<R<a$ and $\chi$ from [F8], so $\chi=1$ near $p$ and its support lies in $H$. Split an arbitrary scalar test as $\eta_1=\chi\eta$, $\eta_2=(1-\chi)\eta$. For $\eta_1$ the half-space identities of step 1.2 give the divergence pairing $(q/\varepsilon_0)\eta(p)$ and zero curl pairing; its plane trace is zero. For $\eta_2$, all field/test products are smooth away from the pole and absolutely integrable on a compact box. Fubini and one-dimensional integration by parts [F2, F6] therefore give, for every $i,j$, $-\int_H E_{I,j}\partial_i\eta_2=\int_H(\partial_iE_{I,j})\eta_2+\mathbf1_{\{i=3\}}\int_{\mathbb R^2}E_{I,j}(x',0)\eta_2(x',0)dx'$. Horizontal boundary terms vanish by compact support; the vertical integral over $(0,\infty)$ has precisely the displayed lower-end term. Summing $i=j$ gives only $\int_\Pi E_{I,3}\eta_2=\varepsilon_0^{-1}\int_\Pi\sigma\eta$, since $\operatorname{div}E_I=0$ away from $p$. Taking the antisymmetric derivative combinations gives the sheet term $e_3\times E_+=0$, because the smooth zero plane trace of $\varphi_I$ has zero horizontal derivatives; the classical curl also vanishes away from $p$ by step 1.2. Adding the two test pieces gives $\operatorname{div}\widetilde E=(q\delta_p+\sigma\delta_\Pi)/\varepsilon_0$ and $\operatorname{curl}\widetilde E=0$ in $\mathcal D'(\mathbb R^3)$. No limit at infinity or unproved divergence theorem on a cornered truncation is used. [F1, F2, F6, F8, step 1.2, step 1.3, step 2.2]

4.1 Scope. The computations above concern exactly the ideal point charge above the ideal grounded plane in the declared class: the plane is not a compact embedded hypersurface and $\Pi$, $\{x_3<0\}$ and the plane pairing are not among the declared conductor or compact stationary-sheet objects of [[post-em-electrostatic-conductor-model]] and [[def-em-weak-sources]](c) [F7]; the extension identity of [step 3.1] is a verified statement about the idealization and does not extend the framework postulate to arbitrary noncompact sheets. No finite-plane edge effect, conductor thickness, transient, moving charge, radiation, self-force or measurement is asserted, the singularity at $p$ is never evaluated, and uniqueness is claimed only in the class of (d) [step 2.1]. This is (f). [F7, step 2.1, step 3.1] ∎
