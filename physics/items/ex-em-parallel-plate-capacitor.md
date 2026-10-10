---
id: ex-em-parallel-plate-capacitor
kind: example
title: "The ideal infinite parallel-plate capacitor"
status: draft
origin: session
dependency_level: 21
domain: physics
deps: [cor-continuous-functions-are-borel-measurable, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-directional-and-partial-derivatives, def-distribution, def-distributional-derivative, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-em-weak-sources, def-euclidean-inner-product, def-integral-over-a-measurable-set, def-regular-distribution-from-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, post-em-electrostatic-conductor-model, prop-order-and-scalar-rules-for-the-nonnegative-integral, pthm-em-capacitance-energy, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-integration-by-parts, thm-locally-integrable-functions-embed-in-distributions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-ftc-second-part, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-lebesgue-measure-is-a-complete-measure, thm-local-finite-order-characterization-of-distributions]
dependency_roles:
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  post-em-electrostatic-conductor-model: formulation-prerequisite
  pthm-em-capacitance-energy: physical-result
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-weak-sources: formulation-prerequisite
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Example 2.10 printed pp. 104-105: parallel plates of area A separated by d with surface charge sigma = Q/A, field (1/epsilon_0)Q/A, V = Qd/(A epsilon_0) and C = epsilon_0 A/d, Eq. (2.54); Section 2.5.4 printed pp. 103-106 for C = Q/V and the charging energy."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.1 printed pp. 32-33: the parallel-plate capacitor in the infinite-plate approximation, E = sigma/epsilon_0 z-hat, V = Qd/(A epsilon_0), C = A epsilon_0/d and U = Q^2/2C, with the explicit statement that edge effects are neglected when d is small compared with sqrt(A)."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: "Section 3.4 printed pp. 37-38: the parallel-plate boundary value problem (uniform field between the plates with prescribed potentials V and 0); Section 24.4 printed p. 263 (Q = CV)."
physical_scope: "The ideal two-infinite-plane capacitor model in a named inertial frame: uniform field between the plates, zero field outside, plane charge densities +/- sigma, potential difference V = sigma d/epsilon_0, and the ideal-model charge-voltage and energy relations Q = (epsilon_0 A/d) V and U = Q^2/(2C) = CV^2/2 for a chosen area A. The infinite planes and unbounded field are declared idealizations outside the compact-conductor and declared-sheet-source hypotheses; the item asserts no fringe computation, no finite-geometry approximation theorem, no material or transient effect and no measurement."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the integral and distribution interfaces ([[def-countable-choice]]). **Declare the ideal parallel-plate model** of two infinite parallel charged planes in vacuo, read as equipotential ideal conductor surfaces of the same equilibrium structure as [[post-em-electrostatic-conductor-model]] (the pure electrostatic regime [[def-em-electrostatic-regime]] with fields [[def-em-fields]]): for a separation parameter $d>0$, half-separation $h=d/2$, a surface-density parameter $\sigma>0$ (C m$^{-2}$) and the framework constants of [[def-em-si-conventions]], the model consists of the field
$$E(x):=\begin{cases}-\dfrac{\sigma}{\varepsilon_0}e_3,&|x_3|<h,\\[2pt]0,&|x_3|>h,\end{cases}\qquad x=(x_1,x_2,x_3),$$
where $e_3:=(0,0,1)$, the coordinates and $d,h$ carry metres, and arbitrary zero values are assigned to $E$ on the two planes for its locally integrable representative; together with the plane densities $+\sigma$ on $\Pi_+:=\{x_3=h\}$ and $-\sigma$ on $\Pi_-:=\{x_3=-h\}$, and with the piecewise potential $\varphi(x):=+\dfrac{\sigma}{\varepsilon_0}x_3$ for $|x_3|\le h$, $\varphi:=+\dfrac{\sigma h}{\varepsilon_0}$ for $x_3\ge h$ and $\varphi:=-\dfrac{\sigma h}{\varepsilon_0}$ for $x_3\le-h$. Then:
(a) [Direct distributional verification] $E$ and $\varphi$ are locally integrable and $C^\infty$ off $\Pi_+\cup\Pi_-$ with $E=-\nabla\varphi$ there, $\varphi$ is continuous on $\mathbb R^3$ and constant on each plane with the values $\varphi|_{\Pi_+}=+\sigma h/\varepsilon_0$, $\varphi|_{\Pi_-}=-\sigma h/\varepsilon_0$; and in $\mathcal D'(\mathbb R^3)$
$$\operatorname{div}E=\frac{\sigma}{\varepsilon_0}\bigl(\delta_{\Pi_+}-\delta_{\Pi_-}\bigr),\qquad \operatorname{curl}E=0,$$
where $\delta_{\Pi_\pm}(\psi):=\int_{\mathbb R^2}\psi(x_1,x_2,\pm h)\,dx_1\,dx_2$ for compactly supported smooth $\psi$ are the plane distributions defined by the iterated Lebesgue integrals. Equivalently, the model realises the static electrostatic equations with the declared pair of plane densities and no other source, and the potential differences read off $\varphi$ are $\varphi(h)-\varphi(-h)=2\sigma h/\varepsilon_0=\sigma d/\varepsilon_0$.
(b) [Uniform field and voltage] the field between the planes has constant magnitude $|E|=\sigma/\varepsilon_0$ and is normal to the planes, and the potential difference between the plates is $V:=\varphi|_{\Pi_+}-\varphi|_{\Pi_-}=\sigma d/\varepsilon_0$.
(c) [Charge, capacitance and energy of the ideal model] for any Lebesgue-measurable region $P\subseteq\mathbb R^2$ with finite positive area $A=\lambda_2(P)>0$ the charge on the portion of area $A$ of the positive plate is $Q:=\sigma A$, so $Q=(\varepsilon_0A/d)V$ with the geometric ratio
$$C:=\frac QV=\frac{\varepsilon_0A}{d}>0,$$
independent of $\sigma$ and $V$; and the field energy contained in the slab of area $A$ between the plates is
$$U=\frac{\varepsilon_0}{2}\int_{\text{slab of area }A}|E|^2\,d\lambda_3=\frac{\sigma^2Ad}{2\varepsilon_0}=\frac12QV=\frac{Q^2}{2C}=\frac12CV^2 .$$
(d) [Relation to the bounded-conductor theorem and scope] the linearity $Q=CV$, the positivity $C>0$ and the energy identities $U=\frac12QV=\frac{Q^2}{2C}=\frac12CV^2$ have the same scalar form as the conclusions of [[pthm-em-capacitance-energy]](d) for its bounded conductor geometry with only conductor $1$ driven, every other conductor and the outer boundary grounded, and zero volume source, taking $C=C_{11}$, $Q=Q_1$ and $V=V_1$ in that theorem; this example verifies them directly for the ideal model because the infinite planes and the unbounded declared field are outside that theorem's hypotheses (compact conductors in a bounded vacuum region) and outside the declared stationary-sheet source type of [[def-em-weak-sources]], exactly as the ideal line source lies outside the compact-source types of the electrostatic page. No approximation theorem from finite plates to the infinite model is asserted; for a finite real plate pair the uniform-field model neglects the fringing field near the edges, which is not computed here, and the idealisation also omits the finite-thickness, material, transient and measurement content of any real capacitor.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; the parameters $d>0$, $h=d/2$, $\sigma>0$ and $\varepsilon_0>0$; the declared field $E$, plane densities $\pm\sigma$ on $\Pi_\pm$, and potential $\varphi$ of the statement; and the plane distributions $\delta_{\Pi_\pm}$.

[F1] The model data and elementary regularity: $E$ is bounded, equal to $-(\sigma/\varepsilon_0)e_3$ on the open slab $\{|x_3|<h\}$ and to $0$ outside it, hence locally integrable; $\varphi$ is bounded, affine on the closed slab, constant on the two open half-spaces, and continuous on $\mathbb R^3$ with equal one-sided values on each plane: $\varphi|_{\Pi_+}=\sigma h/\varepsilon_0$, $\varphi|_{\Pi_-}=-\sigma h/\varepsilon_0$; on each of the three open regions $\{|x_3|<h\}$, $\{x_3>h\}$, $\{x_3<-h\}$ the maps are $C^\infty$ (affine or constant), and $E=-\nabla\varphi$ there by the classical gradient of affine functions; on the slab $|E|=\sigma/\varepsilon_0$ and $E$ is normal to the planes, outside it $E=0$; the plane functionals $\delta_{\Pi_\pm}$ satisfy $|\delta_{\Pi_\pm}(\psi)|\le A_K\sup_K|\psi|$ for tests supported in a compact $K$, where $A_K<\infty$ is the area of a bounded planar box containing the horizontal projection of $K$, hence are distributions by [[thm-local-finite-order-characterization-of-distributions]] ([[def-regular-distribution-from-a-locally-integrable-function]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-em-fields]], [[def-em-electrostatic-regime]], [[def-em-si-conventions]], [[post-em-electrostatic-conductor-model]]).

[F2] Distributional calculus and integration: a locally integrable function represents a regular distribution, its distributional partial derivatives act by $\langle\partial_iT_F,\psi\rangle=-\int F\,\partial_i\psi\,d\lambda_3$, and differentiability distinguishes the constant slab-indicator part; test functions are smooth and compactly supported, sums and scalar multiples of L¹ functions are L¹, and the iterated integrals over $\mathbb R^2\times(-h,h)$ may be computed by Fubini, with the one-dimensional fundamental theorem giving $\int_{-h}^h\partial_3\psi(x_1,x_2,s)\,ds=\psi(x_1,x_2,h)-\psi(x_1,x_2,-h)$ for smooth compactly supported $\psi$, the comparison of Riemann and Lebesgue integrands being available throughout ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[thm-integration-by-parts]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-ftc-second-part]]).

[F3] Slab measure for measurable bases: for a Lebesgue-measurable $P\subseteq\mathbb R^2$ with $A=\lambda_2(P)$, choosing a Borel set $P_0$ equal to $P$ off a Borel $\lambda_2$-null set, the product $P_0\times(-h,h)$ is Borel with $\lambda_3(P_0\times(-h,h))=\lambda_2(P_0)\cdot2h=A\cdot2h$ by the product-measure identification and Tonelli, while $(P\triangle P_0)\times(-h,h)$ is contained in the null set $N\times(-h,h)$; completeness of Lebesgue measure then gives $\lambda_3(P\times(-h,h))=A\cdot2h$, and the same argument applies to any nonnegative integrand constant on the slab ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-continuous-functions-are-borel-measurable]]).

[F4] The bounded-conductor comparison: under its declared Axiom of Choice, bounded smooth ambient domain, connected vacuum region, grounded outer boundary, zero volume source and smooth unit-Dirichlet solutions, [[pthm-em-capacitance-energy]](a)-(c) gives $\mathbf q=\mathsf C\mathbf v$ and $U=\frac12\mathbf v^{T}\mathsf C\mathbf v=\frac12\sum_jv_jq_j$, where $\mathbf v,\mathbf q\in\mathbb R^m$ are the conductor-potential and charge vectors and $\mathsf C=(C_{jk})$ is its symmetric positive definite capacitance matrix. Its scalar identities in (d) concern only one driven conductor with $v_j=0$ for $j\ne1$: $q_1=C_{11}v_1$, $C_{11}>0$ and $U=\frac12q_1v_1=q_1^2/(2C_{11})=\frac12C_{11}v_1^2$. These are a conditional comparison, not an application to the infinite planes, which are outside its compact conductor geometry and the compact stationary-sheet source type of [[def-em-weak-sources]](c) ([[post-em-electrostatic-conductor-model]]).

## Verification

**Proof technique:** direct.

1.1 Local integrability, classical relations and continuity: $E$ is bounded by $\sigma/\varepsilon_0$ and continuous off the two planes, so for every compactly supported smooth test the product $E\cdot\nabla\psi$ is compactly supported and the integral is finite; $\varphi$ is bounded by $\sigma h/\varepsilon_0$, hence locally integrable, and continuous because the slab formula, the two constants and the plane values match at $x_3=\pm h$. On each of the three open regions $E=-\nabla\varphi$ classically, with $|E|=\sigma/\varepsilon_0$ and normal direction inside the slab and $E=0$ outside; this is the regularity asserted in (a) and the uniform-field statement of (b). [F1, given]

1.2 Distributional divergence: for $\psi\in\mathcal D(\mathbb R^3)$, the definition of the distributional derivative gives $\langle\operatorname{div}E,\psi\rangle=-\int_{\mathbb R^3}E\cdot\nabla\psi\,d\lambda_3$, and since $E$ vanishes off the slab and equals $-(\sigma/\varepsilon_0)e_3$ on it, this is $\frac{\sigma}{\varepsilon_0}\int_{\mathbb R^3}\mathbf 1_{\{|x_3|<h\}}\partial_3\psi\,d\lambda_3$. Fubini writes the integral as the iterated integral $\int_{\mathbb R^2}\bigl(\int_{-h}^{h}\partial_3\psi(x_1,x_2,s)\,ds\bigr)dx_1dx_2$, and the inner integral equals $\psi(x_1,x_2,h)-\psi(x_1,x_2,-h)$ by the fundamental theorem; hence $\langle\operatorname{div}E,\psi\rangle=\frac{\sigma}{\varepsilon_0}(\delta_{\Pi_+}-\delta_{\Pi_-})(\psi)$ for every test $\psi$, i.e. $\operatorname{div}E=\frac{\sigma}{\varepsilon_0}(\delta_{\Pi_+}-\delta_{\Pi_-})$ in $\mathcal D'(\mathbb R^3)$, with no other source. [F2, given]

1.3 Distributional curl: $E_1=E_2=0$ are the zero distribution; $E_3=-(\sigma/\varepsilon_0)\mathbf 1_{\{|x_3|<h\}}$ is a function of $x_3$ alone, so pairing its distributional $\partial_1$- and $\partial_2$-derivatives against a test gives integrals of $\partial_1\psi$ and $\partial_2\psi$ over the slab, and each inner one-dimensional integral over $\mathbb R$ of a compactly supported derivative vanishes by the fundamental theorem; hence $\partial_1E_3=\partial_2E_3=0$ in $\mathcal D'(\mathbb R^3)$, while $\partial_3E_1=\partial_3E_2=0$ because $E_1,E_2$ vanish identically. All three components of $\operatorname{curl}E=(\partial_2E_3-\partial_3E_2,\ \partial_3E_1-\partial_1E_3,\ \partial_1E_2-\partial_2E_1)$ therefore vanish: $\operatorname{curl}E=0$. Together with the divergence identity above this is the asserted static electrostatic realization of (a) with the declared plane sources, and no other source. [F2, given]

1.4 Potential difference and voltage (b): the trace values of [F1] give $\varphi|_{\Pi_+}-\varphi|_{\Pi_-}=\sigma h/\varepsilon_0-(-\sigma h/\varepsilon_0)=2\sigma h/\varepsilon_0=\sigma d/\varepsilon_0$ because $d=2h$; combined with the constant normal field of magnitude $\sigma/\varepsilon_0$ between the planes and the zero field outside, this is (b), and it also exhibits the potential difference of (a). [F1, given]

2.1 Charge, capacitance and energy (c): fix a Lebesgue-measurable $P\subseteq\mathbb R^2$ with finite positive area $A=\lambda_2(P)$. The positive plate carries the constant density $+\sigma$, so the charge on the portion over $P$ is $Q=\sigma\lambda_2(P)=\sigma A$. The slab of area $A$ between the plates is $P\times(-h,h)$, and on it $|E|^2=\sigma^2/\varepsilon_0^2$ is constant; by [F3] the slab has $\lambda_3$-measure $A\cdot2h=Ad$, so Tonelli gives $\int_{P\times(-h,h)}|E|^2\,d\lambda_3=(\sigma^2/\varepsilon_0^2)Ad$ and $U=\frac{\varepsilon_0}{2}\cdot\frac{\sigma^2}{\varepsilon_0^2}Ad=\frac{\sigma^2Ad}{2\varepsilon_0}$. With $V=\sigma d/\varepsilon_0$ from [step 1.4], the ratio $C:=Q/V=(\sigma A)/(\sigma d/\varepsilon_0)=\varepsilon_0A/d$ is positive and independent of $\sigma$ and $V$; and the four displayed energies agree: $\frac12QV=\frac12\sigma A\cdot\frac{\sigma d}{\varepsilon_0}=\frac{\sigma^2Ad}{2\varepsilon_0}$, $Q^2/(2C)=(\sigma A)^2\cdot\frac{d}{2\varepsilon_0A}=\frac{\sigma^2Ad}{2\varepsilon_0}$ and $\frac12CV^2=\frac12\cdot\frac{\varepsilon_0A}{d}\cdot\frac{\sigma^2d^2}{\varepsilon_0^2}=\frac{\sigma^2Ad}{2\varepsilon_0}$. This is (c). [F1, F3, given, step 1.4]

3.1 Relation to the bounded-conductor theorem and scope (d): the relations $Q=CV$, $C>0$ and $U=\frac12QV=\frac{Q^2}{2C}=\frac12CV^2$ verified in [step 2.1] have the same scalar form as [[pthm-em-capacitance-energy]](d), under that theorem's hypotheses with only conductor $1$ driven and every other conductor and the outer boundary grounded, taking $C=C_{11}$, $Q=Q_1$ and $V=V_1$ [F4]. For general conductor-potential data its conclusions instead use the matrix relation $\mathbf q=\mathsf C\mathbf v$ and the energy $U=\frac12\sum_jv_jq_j$; the present verification is direct, from the explicitly declared piecewise model, because the infinite planes, the unbounded field and the plane densities are outside that theorem's compact-conductor and declared sheet-source hypotheses, and no approximation theorem from finite plates to the infinite model is asserted. The uniform-field idealization neglects the fringing field near finite edges, which is not computed, and omits finite thickness, material, transient and measurement content; the direct argument retains only $\mathrm{AC}_\omega$ as declared, and no empirical claim is made. This is (d). [F4, given, step 2.1] ∎
