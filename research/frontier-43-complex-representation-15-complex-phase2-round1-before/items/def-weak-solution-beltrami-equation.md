---
id: def-weak-solution-beltrami-equation
kind: definition
title: "Weak solutions of the Beltrami equation"
status: draft
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-wirtinger-derivatives
  - def-complex-domain
  - def-biholomorphic-map
  - lem-weak-derivative-linearity-locality-and-commutation
  - lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
  - lem-c-k-boundary-flattening-preserves-wkp-locally
  - lem-local-postcomposition-chain-rule-for-w-one-two
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-holder-inequality-for-integrals
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-chain-rule-for-total-derivatives
  - def-countable-choice
  - def-riemann-sphere-holomorphic-charts
dependency_level: 1
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through the Sobolev, weak-derivative,
  null-set, and local pre- and postcomposition interfaces used here. No full
  Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14, printed pp. 195–196: the Beltrami equation and its local measurable-coefficient solution; §14.6, printed p. 198: chart expressions of a conformal structure."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes, 164 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §1, printed p. 85: affine complex dilatation; Ch. 3 §6, printed pp. 103–105: weak derivatives and the almost-everywhere Beltrami equation in the convergence-of-dilatations proof."
aliases: []
---

## Definition

Assume Countable Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain and let $\mu$ be a Beltrami coefficient on $\Omega$ ([[def-countable-choice]], [[def-complex-domain]], [[def-measurable-beltrami-coefficient]]).

(a) **Plane weak solution.** A map $f:\Omega\to\mathbb C$ is a **weak solution** of the **Beltrami equation** $f_{\bar z}=\mu f_z$ on $\Omega$ if $f\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathbb C)$ ([[def-sobolev-space-wkp-and-its-norm]]) and its weak Wirtinger derivative classes
$$f_z:=\tfrac12(D_xf-iD_yf),\qquad f_{\bar z}:=\tfrac12(D_xf+iD_yf)$$
([[def-wirtinger-derivatives]], [[def-weak-derivative-of-a-locally-integrable-function]]) satisfy
$$f_{\bar z}(z)=\mu(z)f_z(z)\qquad\text{for almost every }z\in\Omega.$$
Here $D_xf,D_yf$ are the first weak derivatives. On every relatively compact subset, $\mu f_z$ belongs to $L^2$ because $\mu\in L^\infty$ and $f_z\in L^2$.

(b) **Distributional and test-function forms.** The equation in (a) is equivalent to
$$\langle f_{\bar z},\eta\rangle=\langle\mu f_z,\eta\rangle\qquad\text{for every }\eta\in C_c^\infty(\Omega),$$
and, with the bilinear test pairing, to
$$\int_\Omega f\,\eta_{\bar z}\,dA=-\int_\Omega\mu f_z\eta\,dA\qquad\text{for every }\eta\in C_c^\infty(\Omega).$$
The weak-solution condition depends only on the almost-everywhere classes of $f$, $\mu$, $f_z$ and $f_{\bar z}$.

(c) **Biholomorphic coordinate changes.** If $\psi:\Omega'\to\Omega$ is biholomorphic ([[def-biholomorphic-map]]) and $f$ is a weak solution for $\mu$, then $f\circ\psi\in W^{1,2}_{\mathrm{loc}}(\Omega';\mathbb C)$ and is a weak solution for the pullback coefficient $\psi^*\mu$ of [[def-measurable-beltrami-coefficient]](c). On each relatively compact coordinate patch, its weak derivatives satisfy
$$(f\circ\psi)_\zeta=(f_z\circ\psi)\psi',\qquad (f\circ\psi)_{\bar\zeta}=(f_{\bar z}\circ\psi)\overline{\psi'}\quad\text{almost everywhere}.$$
Conversely, a weak solution for $\psi^*\mu$ pulls back by $\psi^{-1}$ to a weak solution for $\mu$.

(d) **The sphere.** Let $\mu$ be a Beltrami coefficient on $\widehat{\mathbb C}$ in the two standard charts of [[def-riemann-sphere-holomorphic-charts]]. For a continuous map $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$, say that $f$ is a **weak solution on the sphere** if each point has a source neighborhood and target chart such that the corresponding plane-coordinate map is a weak solution in the sense of (a) for the source-chart expression of $\mu$. Choose the neighborhoods so the image lies in the target chart. This condition is independent of the source and target charts: source changes are governed by (c), and postcomposition by a holomorphic target-chart change preserves the weak equation by the local Sobolev chain rule [[lem-local-postcomposition-chain-rule-for-w-one-two]], since both Wirtinger derivatives are multiplied by the same holomorphic derivative. In particular, in the finite chart this is exactly the plane-domain definition (a).

## Facts & Assumptions

**Given:** Countable Choice; a complex domain $\Omega$; a Beltrami coefficient $\mu$ on $\Omega$; and a map $f\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathbb C)$ when proving properties of plane weak solutions.

[F1] The coefficient is an almost-everywhere $L^\infty$ class with $\|\mu\|_\infty<1$ ([[def-measurable-beltrami-coefficient]]).

[F2] Weak derivatives are defined by the signed test identity, are almost-everywhere classes, and weak differentiation is complex-linear and local ([[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivative-linearity-locality-and-commutation]]).

[F3] $W^{1,2}_{\mathrm{loc}}$ supplies first weak partial derivatives in $L^2_{\mathrm{loc}}$; their classes are unique almost everywhere ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] A locally integrable function determines a distribution injectively under Countable Choice ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F5] On relatively compact sets, $L^2$ embeds in $L^1$ by Hölder's inequality and finite measure ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] A $C^1$ diffeomorphism and its inverse map Lebesgue-null sets to null sets, so composition preserves almost-everywhere classes ([[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]).

[F7] Local composition with a $C^1$ diffeomorphism preserves $W^{1,2}$ and satisfies the weak chain rule on relatively compact patches ([[lem-c-k-boundary-flattening-preserves-wkp-locally]]).

[F8] The classical Wirtinger operators are $\partial_z=\tfrac12(\partial_x-i\partial_y)$ and $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$ ([[def-wirtinger-derivatives]]); weak differentiation is complex-linear, so the same combinations apply to the weak real partial derivatives ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F9] A biholomorphic map and its inverse are holomorphic ([[def-biholomorphic-map]]), and holomorphic maps are smooth in their real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]); hence they are $C^1$ diffeomorphisms of the corresponding real domains.

[F10] The classical derivative of a composition is the product of the total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F11] The Riemann sphere has the two standard holomorphic charts with transition $z=1/w$ on their overlap ([[def-riemann-sphere-holomorphic-charts]]).

[F12] If $F$ is a continuous $W^{1,2}_{\mathrm{loc}}$ map and $\tau$ is a $C^1$ chart transition on a neighborhood of its local image, then $\tau\circ F$ has weak derivative $D\tau(F)DF$ ([[lem-local-postcomposition-chain-rule-for-w-one-two]]). For holomorphic $\tau$, its real derivative is multiplication by $\tau'$, so both Wirtinger derivatives acquire this same factor.

**Choice use.** Countable Choice is inherited through [F1]–[F7] and the density, subsequence, and weak-derivative interfaces in [F12]. The test identities and coordinate algebra make no selections and use no full Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 On each relatively compact $K\Subset\Omega$, $\|\mu f_z\|_{L^2(K)}\le\|\mu\|_\infty\|f_z\|_{L^2(K)}$, so $h:=f_{\bar z}-\mu f_z\in L^2(K)\subseteq L^1(K)$ by [F5]. If $h=0$ almost everywhere, its regular distribution is zero; conversely, if its regular distribution is zero, [F4] gives $h=0$ almost everywhere. Thus the almost-everywhere and distributional equations in (b) are equivalent. Applying the signed weak-derivative identity to the real partials and combining them as in [F8] gives $\langle f_{\bar z},\eta\rangle=-\int f\eta_{\bar z}\,dA$, which yields the test-function form in (b). [F2, F3, F4, F5, F8, algebra]

1.2 Replacing $f$, $\mu$, or either weak derivative by an almost-everywhere equal representative changes the equation only on the finite union of the corresponding null sets. The weak derivative classes are representative-independent by [F2], and the coefficient class is representative-independent by [F1]. Therefore the plane weak-solution condition is well-defined on these classes. [F1, F2, algebra]

1.3 Let $\psi:\Omega'\to\Omega$ be biholomorphic. For each relatively compact $U_0\Subset\Omega'$, choose $V_0\Subset\Omega$ containing $\psi(\overline U_0)$; the derivatives of $\psi$ and $\psi^{-1}$ are bounded on these compact patches. Applying [F7] with $k=1,p=2$ and using the real chain rule [F10], then rewriting the real derivative matrix by [F8], gives the displayed weak chain-rule formulas on $U_0$. Since $\psi^{-1}$ maps null sets to null sets by [F6], the almost-everywhere equation for $f$ remains valid after composition. [F6, F7, F8, F9, F10, given]

2.1 Substitute $f_{\bar z}=\mu f_z$ into the second identity of step 1.3 and use the pullback formula from [F1]: $$(f\circ\psi)_{\bar\zeta}=(\mu\circ\psi)(f_z\circ\psi)\overline{\psi'}=(\psi^*\mu)(f_z\circ\psi)\psi'=(\psi^*\mu)(f\circ\psi)_\zeta$$ almost everywhere on $U_0$. The patches cover $\Omega'$, so $f\circ\psi$ is a weak solution for $\psi^*\mu$. Applying the same argument to $\psi^{-1}$ proves the converse. [F1, F6, step 1.3, algebra]

3.1 For the sphere clause, continuity of $f$ ensures that near any source point its image lies in a target chart, so the local coordinate maps in (d) are defined on open plane domains. The chart transitions are biholomorphic by [F9] and the sphere atlas is given by [F11]. On overlaps, source-chart changes preserve the equation by steps 1.3 and 2.1. A target-chart change is a local biholomorphism $\tau$; after shrinking the source neighborhood so its compact image lies in the overlap, [F12] gives $(\tau\circ F)_z=(\tau'\circ F)F_z$ and $(\tau\circ F)_{\bar z}=(\tau'\circ F)F_{\bar z}$. Multiplication by $\tau'\circ F$ proves preservation without division. Thus the local definition is independent of both chart choices and agrees with (a) in the finite chart. [F8, F9, F11, F12, step 1.3, step 2.1] ∎
