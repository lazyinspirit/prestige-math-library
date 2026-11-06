---
id: post-mtheory-curvature-corrected-m2-gauss-law
kind: postulate
title: Curvature-corrected M2 Gauss law
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
- post-eleven-dimensional-cjs-supergravity-action
- def-m2-brane-worldvolume-action
- post-mtheory-shifted-g4-quantization
- pthm-m2-m5-dirac-tension-relation
- def-axiom-of-choice
- def-pontryagin-classes-by-complexification
- def-countable-choice
- def-compactly-supported-differential-form
- def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
- def-singular-cohomology-ring
- def-singular-cohomology-with-coefficients
- def-singular-chain-complex-and-singular-homology
- def-rationals
- def-fundamental-class-of-a-compact-oriented-manifold
- def-kronecker-evaluation-pairing
- lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
- def-smooth-differential-k-form
- def-wedge-product-of-differential-forms
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
  def-m2-brane-worldvolume-action: formulation-prerequisite
  post-mtheory-shifted-g4-quantization: formulation-prerequisite
  pthm-m2-m5-dirac-tension-relation: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-pontryagin-classes-by-complexification: mathematical-premise
  def-countable-choice: mathematical-premise
  def-compactly-supported-differential-form: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-singular-chain-complex-and-singular-homology: mathematical-premise
  def-rationals: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Adopted integrated charge-balance premise on a finite-dimensional Hausdorff second-countable smooth compact
  oriented boundaryless spin eight-manifold, componentwise path-connected of CW type, under AC and its countable-choice
  consequence; the fluxed local normalization crosswalk and sourced field equation remain unresolved, and no full
  higher-derivative or nonperturbative theory is asserted.
sources:
  references:
  - title: Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2
    url: https://arxiv.org/pdf/hep-th/9609122v2
    locator: §§2–3, PDF pp. 5–9; shifted flux and curvature-only tadpole, including the smooth CY4 specialization.
  - title: Katrin Becker and Melanie Becker, M-Theory on Eight-Manifolds, arXiv:hep-th/9605053v1
    url: https://arxiv.org/pdf/hep-th/9605053v1
    locator: Eqs. (2.6)–(2.8), PDF pp. 3–4, and Eqs. (2.57)–(2.59), PDF p. 12; local anomaly-corrected equation in the
      hatted beta/X8 convention.
  - title: Eric Bergshoeff, Ergin Sezgin, and Paul K. Townsend, Supermembranes and Eleven-Dimensional Supergravity, Physics
      Letters B 189 (1987), 75–78
    url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
    locator: §2, Eqs. (3)–(20), printed pp. 76–77; M2 Wess–Zumino source and superspace assumptions.
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Assume full AC: every family of nonempty sets has a choice function. Its countable subcase $\mathrm{AC}_\omega$, which asserts the same for every at-most-countable family, is used by the global top-form integration below. Let $X$ be a finite-dimensional Hausdorff second-countable smooth, compact, oriented, boundaryless spin eight-manifold, with each connected component path connected and of CW type (homotopy equivalent to a CW complex). Give $X$ a specified integral orientation and its fundamental class $[X]_{\mathbb Z}\in H_8(X;\mathbb Z)$. Let $G_{4,M}\in\Omega^4(X)$ be a smooth, global, closed M2-charge-normalized four-form, with local potential $C_{3,M}=T_{\mathrm{M2}}C_{3,\mathrm{CJS}}$ so the membrane Wess–Zumino coupling has unit coefficient, and put $\widehat G_4=G_{4,M}/(2\pi)$. Let $N_{\mathrm{M2}}\in\mathbb Z$ be the signed localized membrane charge. Let $\lambda\in H^4(X;\mathbb Z)$ be the source-reported spin class with $2\lambda=p_1(TX)$, and use the singular cup product and Kronecker pairing to define
$$J_W(X):=\frac{\langle\lambda\smile\lambda,[X]_{\mathbb Z}\rangle-\langle p_2(TX),[X]_{\mathbb Z}\rangle}{48}\in\mathbb Q.$$
This is the integrated characteristic number denoted by $\int_X I_8^W$ in the source shorthand $I_8^W=(\lambda^2-p_2)/48$. Adopt the proposed integrated physical Gauss-law premise
$$N_{\mathrm{M2}}+\frac12\int_X\widehat G_4\wedge\widehat G_4 =-J_W(X).$$
The wedge is the pointwise exterior product of smooth forms, so $\widehat G_4\wedge\widehat G_4\in\Omega^8(X)$. Since $X$ is compact this form has compact support; its integral is the oriented-manifold integral of a compactly supported top form, defined under $\mathrm{AC}_\omega$.
In the zero-flux case, Witten source-reports $N_{\mathrm{M2}}=-J_W(X)$; for a smooth Calabi–Yau fourfold this is $\chi(X)/24$. The separate arithmetic normalization inputs give the local M2 source coefficient. In R4 physical CJS units,
$$2\kappa_{11}^{\,2}T_{\mathrm{M2}}=(2\pi)^6\ell_p^6.$$
The one-loop $C_{3,M}\wedge I_8^{W}$ term is an additional physical effective-action premise, absent from the source-free classical CJS action. The fluxed equation is recorded as a source-qualified postulate assembled from distinct formulations; no local coefficient match among Witten, Becker–Becker, CJS, and the localized M2 source is claimed.

## Statement References

[Witten, §§2–3](https://arxiv.org/pdf/hep-th/9609122v2)

[Becker–Becker, Eqs. (2.6)–(2.8)](https://arxiv.org/pdf/hep-th/9605053v1)

[Bergshoeff–Sezgin–Townsend, §2](https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf)

## Facts & Assumptions

**Given:** The stated finite-dimensional Hausdorff second-countable smooth compact oriented boundaryless spin eight-manifold $X$ and its componentwise path-connected CW-type condition, the specified integral orientation and fundamental class, the adopted AC and $\mathrm{AC}_\omega$ background, the smooth global closed normalized curvature form, the signed localized charge, and the adopted integrated field-law premise.

[F1] The R4 CJS carrier gives $2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9$ in the source-free local convention ([[post-eleven-dimensional-cjs-supergravity-action]]).

[F2] The M2 action carrier adopts $S=-T_{\mathrm{M2}}\int_{\Sigma_3}\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}X^*C_3$ with the $+C_3$ Wess–Zumino sign and an independent positive tension ([[def-m2-brane-worldvolume-action]]). This fixes the local membrane coupling used to define $C_{3,M}$; it does not by itself reconcile the source conventions in the integrated curvature equation.

[F3] The shifted-flux postulate gives the free-period condition and explicitly leaves torsion/differential refinements unresolved ([[post-mtheory-shifted-g4-quantization]]).

[F4] The normalization theorem proves $2\kappa_{11}^{\,2}T_{\mathrm{M2}}=(2\pi)^6\ell_p^6$ by exact multiplication ([[pthm-m2-m5-dirac-tension-relation]]).

[F5] Pontryagin classes are integral characteristic classes and the cup product multiplies their singular cohomology classes ([[def-pontryagin-classes-by-complexification]], [[def-singular-cohomology-ring]]).

[F6] The specified integral orientation determines $[X]_{\mathbb Z}$ ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F7] The evaluation pairing on singular cohomology and homology is defined on quotient classes and independent of representatives; its ring-coefficient version uses rational cochains and rational chains ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]], [[def-singular-cohomology-with-coefficients]], [[def-singular-chain-complex-and-singular-homology]]).

[F8] The denominator $48$ defines a rational scalar, and the singular characteristic pairing in [F7] is integer-valued before division ([[def-rationals]]).

[F9] A smooth differential $k$-form is a smooth section of the $k$th exterior-power bundle of the cotangent bundle ([[def-smooth-differential-k-form]]).

[F10] The Pontryagin-class definition assumes full AC and, for a real rank-$n$ bundle, defines $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$, with $p_i(E)=0$ when $2i>n$. Its base is path-connected CW (or CW type); since $TX$ has rank $8$, $p_2(TX)=c_4(TX_{\mathbb C})$ is defined componentwise under the stated hypotheses ([[def-pontryagin-classes-by-complexification]]).

[F11] The wedge of smooth forms is their pointwise exterior product, and its smoothness is supplied by the wedge-product definition and its well-definedness result ([[def-wedge-product-of-differential-forms]]).

[F12] A form has compact support when the closure of its nonzero locus is compact; every smooth form on compact $X$ therefore has compact support ([[def-compactly-supported-differential-form]]).

[F13] Under $\mathrm{AC}_\omega$, the integral of a compactly supported top form on an oriented smooth manifold is defined by a chart-subordinate partition-of-unity sum with only finitely many nonzero terms near the compact support; independence of the choices is supplied by the integration theorem ([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]).

[A1] The fluxed Gauss law, localized source sign, and one-loop coefficient are adopted physical premises; their crosswalk is not derived from [F1]–[F4].

[A2] Full AC is an adopted mathematical background axiom used by the Pontryagin-class definition. Applied to the range of an at-most-countable family, it gives the stated $\mathrm{AC}_\omega$ hypothesis of [F13] ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Remarks

Witten's directly source-reported result is the curvature-only tadpole and its CY4 value. Becker–Becker use hatted fields and a five-brane-tension parameter; Bergshoeff–Sezgin–Townsend give the local M2 Wess–Zumino source. Their distinct conventions are not silently identified. The Witten/Becker–Becker/CJS/localized-M2 local sign and $(2\pi)$ normalization crosswalk remains open. This is an adopted source-qualified premise and is not ready for use as a derived local field equation.
