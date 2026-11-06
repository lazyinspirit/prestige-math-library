---
id: post-type-iia-d6-o6-localized-f2-current-and-cover-charge
kind: postulate
title: Type Iia D6 O6 Localized F2 Current and Cover Charge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
physical_scope: "Adopted localized degree-three current source equation and O6-minus charge/count in the specific T^3/Z2 covering convention discussed by the cited sources. The coefficient conversion is checked algebraically. No universal orientifold count, quotient-to-cover conversion, global cancellation theorem, or D6 action is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.2, Eqs. (4.18)–(4.19), printed pp. 25–26/PDF pp. 26–27; localized RR source coefficient and integrated D6/O6 equation."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III, §3.3, Eq. (3.25), PDF p. 30; O-minus charge ratio and fixed-plane count."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt directly the degree-three sourced identity of Graña, §4.2, Eq. (4.18), with constant $F_0\in\mathbb R$ and smooth closed $H_3\in\Omega^3(M^{10})$ on an oriented smooth ten-dimensional manifold $M^{10}$ without boundary. No higher-degree RR equation or truncated-polyform identity is adopted here.

For $0\leq k\leq10$, a degree-$k$ current $T$ is a continuous real-linear functional on $\Omega_c^{10-k}(M^{10})$, the smooth compactly supported test forms with their usual test-function topology (on each fixed compact support, all coordinate derivatives converge uniformly). Use the test-first convention: a smooth $k$-form $A$ represents $T_A(\eta)=\int_{M^{10}}\eta\wedge A$, and define $(dT)(\eta)=(-1)^{10-k}T(d\eta)$ for $\eta\in\Omega_c^{9-k}(M^{10})$. This sign agrees with exterior differentiation of smooth forms by integration by parts.

Let each $\iota_a:W_a\hookrightarrow M^{10}$ be a proper smooth embedding of an oriented seven-dimensional submanifold without boundary; the chosen orientation determines the sign of the integration current below. Proper means that inverse images of compact sets are compact. Require local finiteness: each compact subset of $M^{10}$ meets only finitely many $W_a$. The source set $S=\bigcup_a\iota_a(W_a)$ is then closed. Define the degree-three integration current by
$$\delta_3(W_a)(\omega_7):=\int_{W_a}\iota_a^*\omega_7,\qquad \omega_7\in\Omega_c^7(M^{10}),$$
and put $J_3=\sum_aq_a\delta_3(W_a)$. Properness makes every displayed integral finite; local finiteness makes the sum finite on each compact test support. In submanifold charts integration over a compact support is bounded by finitely many sup norms, so these are continuous functionals.

Take $F_2$ to be a degree-two current on all of $M^{10}$ whose restriction to $M^{10}\setminus S$ is represented by a smooth two-form: $F_2(\eta)=\int\eta\wedge F_2^{\mathrm{reg}}$ for tests supported there. Adopt the current equation
$$dF_2-F_0T_{H_3}=2\pi\sqrt{\alpha'}\,J_3=2\kappa_0^2\mu_6J_3,\qquad 2\kappa_0^2=(2\pi)^7\alpha'^4,\qquad \mu_6=(2\pi)^{-6}\alpha'^{-7/2}.$$
Explicitly, for every $\omega_7\in\Omega_c^7(M^{10})$, it means
$$F_2(d\omega_7)-F_0\int_{M^{10}}\omega_7\wedge H_3=2\pi\sqrt{\alpha'}\sum_aq_a\int_{W_a}\iota_a^*\omega_7.$$
Its source-free restriction is $dF_2^{\mathrm{reg}}=F_0H_3$. Existence of a global $F_2$ satisfying this equation is an adopted condition, not a theorem for arbitrary source and flux data.
Set $q_a=+1$ for a D6 and $q_a=-2$ for an O6-minus plane in the cited source convention. In the specific $T^3/\mathbb Z_2$ covering-space example of Polchinski, Chaudhuri, and Johnson, there are $2^{9-p}=8$ fixed planes for $p=6$, giving total covering-space charge $-16$ D6 units.

In the natural-unit convention, target coordinates have length dimension, $F_0,H_3,F_2^{\mathrm{reg}}$ have coordinate components of dimension length$^{-1}$, the D6 tension $\mu_6$ has dimension length$^{-7}$, and the transverse current has coordinate components of dimension length$^{-3}$. Thus $2\pi\sqrt{\alpha'}J_3$ and $dF_2-F_0H_3$ both have components of dimension length$^{-2}$. The stated O6 count is only in the cited covering-space convention.

## Postulate references

[Graña, §4.2, Eqs. (4.18)–(4.19)](https://arxiv.org/pdf/hep-th/0509003v3)

[Polchinski, Chaudhuri, and Johnson, Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)


## Remarks

The stated units and normalization use the conventions definition. The degree-three source equation is adopted directly from Graña Eq. (4.18), independently of any claim about a truncated RR polyform. No global tadpole or other quotient count is inferred.
