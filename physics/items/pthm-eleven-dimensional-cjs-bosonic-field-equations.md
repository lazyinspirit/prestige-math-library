---
id: pthm-eleven-dimensional-cjs-bosonic-field-equations
kind: physics-theorem
title: Source-Free Eleven-Dimensional CJS Bosonic Field Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-eleven-dimensional-cjs-supergravity-action
- def-eleven-dimensional-lorentzian-geometry
- thm-eleven-dimensional-levi-civita-existence-and-uniqueness
- lem-supergravity-compact-metric-variation
- lem-cm-determinant-derivative-along-a-matrix-curve
- lem-supergravity-compact-test-coefficient-vanishing
- cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
- def-exterior-derivative-by-the-invariant-vector-field-formula
- thm-local-coordinate-formula-for-the-exterior-derivative
- thm-the-exterior-derivative-is-a-graded-derivation
- thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-eleven-dimensional-cjs-supergravity-action: physical-assumption
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  thm-eleven-dimensional-levi-civita-existence-and-uniqueness: mathematical-premise
  lem-supergravity-compact-metric-variation: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  lem-supergravity-compact-test-coefficient-vanishing: mathematical-premise
  cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
aliases: []
proof_strategy: direct
physical_scope: Conditional classical Euler-Lagrange equations of the adopted source-free two-derivative bosonic CJS action.
  No source currents, boundaries, higher-derivative terms, quantum corrections, or empirical claims are included.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §5.1, Theorem 5.3 and its complete metric and C3 variation proof; CJS conventions of Definition 5.1.
  - title: Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3
    url: https://arxiv.org/pdf/hep-th/0212008
    locator: §2, equation (2.2), for the independent component-form field equations and signature conventions.
  - title: Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions, arXiv:1104.2051v2
    url: https://arxiv.org/pdf/1104.2051v2
    locator: §1.4, equation (9), for the 11D action context; it is not used in place of the variation derivation.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M$ be an oriented, boundaryless Lorentzian eleven-manifold, let $g$ be its smooth metric, let $C_3\in\Omega^3(M)$ be the global potential of [[post-eleven-dimensional-cjs-supergravity-action]], and set $F_4=dC_3$. Interpret variations locally, with compact support, so the action difference is finite even when the unvaried total action is not. Metric variations are smooth one-parameter variations that remain Lorentzian for sufficiently small parameter. A stationary configuration of the source-free two-derivative action under all such compactly supported variations of $C_3$ and the inverse metric $g^{MN}$ satisfies

$$d *_g F_4+\frac12F_4\wedge F_4=0,\qquad dF_4=0,$$

and

$$R_{MN}=\frac1{12}\left(F_{MABC}F_N{}^{ABC}-\frac1{12}g_{MN}F_{ABCD}F^{ABCD}\right).$$

Here $R_{MN}$ and $R=g^{MN}R_{MN}$ use the curvature convention $R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ}$, $R_{QN}=R^P{}_{QPN}$, from the adopted CJS convention. The signed form norm is $|F_4|_g^2=(1/4!)F_{ABCD}F^{ABCD}$. These are conditional classical deductions from the adopted action, not empirical laws or claims about source-bearing or corrected theories.

## Facts & Assumptions

**Given:** The adopted action, a smooth field configuration, and stationarity under every compactly supported variation of $C_3$ and $g^{MN}$.

[A1] [[post-eleven-dimensional-cjs-supergravity-action]]: $S=(2\kappa_{11}^2)^{-1}\int(R\,\operatorname{vol}_g-\frac12F_4\wedge *_gF_4-\frac16C_3\wedge F_4\wedge F_4)$, $F_4=dC_3$; it is the source-free two-derivative bosonic truncation, with compactly supported variations and no boundary terms.

[F1] [[def-supergravity-conventions-and-normalizations]]: the current carrier fixes signature $(-+\cdots+)$, $|F_p|^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$, and the named CJS convention. Its current Step 1 record is ready at hash $41d207e61dbef5573f48b5cf2e70c2c19a136ec755a3c8047c832905c0b550$; the proof uses only these inspected conventions.

[F2] [[def-eleven-dimensional-lorentzian-geometry]] defines the oriented Lorentzian Hodge star and signed form pairing.

[F3] [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]] gives the unique connection used for the scalar curvature and metric variation.

[F4] [[lem-supergravity-compact-metric-variation]]: for $n\ge2$, a Lorentzian metric in a chart, and compactly supported inverse-metric variation $q^{MN}$, the compactly supported variation of $\int \sqrt{|\det g|}\,R\,d^nx$ has coefficient $R_{MN}-\frac12g_{MN}R$ against $q^{MN}$. Its complete current proof derives the formula in the general $n$-dimensional chart case; here $n=11$.

[F5] [[lem-cm-determinant-derivative-along-a-matrix-curve]]: for a differentiable invertible matrix curve $A(s)$, $(\det A)'=\det A\,\mathrm{tr}(A^{-1}A')$.

[F6] [[lem-supergravity-compact-test-coefficient-vanishing]]: if a continuous coefficient $A_i$ on an open coordinate domain pairs to zero against every smooth compactly supported component test with positive continuous density $w$, then $A_i$ vanishes pointwise. Its complete current proof uses a bump supported where a nonzero coefficient has fixed sign.

[F7] [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]: on an oriented boundaryless manifold, the integral of the exterior derivative of a compactly supported primitive vanishes.

[F8] [[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[thm-local-coordinate-formula-for-the-exterior-derivative]], [[thm-the-exterior-derivative-is-a-graded-derivation]], [[thm-clairaut-schwarz-mixed-partials]]: for a smooth form, $d$ has the alternating coordinate-derivative formula and graded product rule; smooth mixed partials commute.

## Proof
**Proof technique:** vary the potential and metric independently, integrate compactly supported exact terms, and solve the resulting tensor equation.

1.1 With $g$ fixed and $C_3$ varied by a compactly supported $\delta C_3$, $\delta F_4=d\delta C_3$. Also $dF_4=d^2C_3=0$: in coordinates each component of $d^2C_3$ is an alternating sum of second partial derivatives, and terms cancel in pairs after exchanging the two derivative indices by [F8]. [A1, F8, given, algebra]

1.2 Now vary $g^{MN}$ with $C_3$, hence $F_4$, fixed. The Einstein–Hilbert contribution is $(R_{MN}-\frac12g_{MN}R)\delta g^{MN}\operatorname{vol}_g$ by [F4], using the Levi-Civita curvature convention of [F3]. Differentiating the four inverse metrics in $|F_4|_g^2=(1/4!)F_{ABCD}F^{ABCD}$ gives
$$\delta |F_4|_g^2=\frac1{3!}F_{MABC}F_N{}^{ABC}\,\delta g^{MN}.$$
Indeed, each of the four differentiated inverse-metric factors gives the same contraction after relabeling the antisymmetric indices, so the factor is $4/4!=1/3!$. Differentiating $g^{MA}g_{AN}=\delta^M{}_N$ gives $\delta g_{MN}=-g_{MA}g_{NB}\delta g^{AB}$. The determinant derivative in [F5] then yields $\delta\operatorname{vol}_g=\frac12g^{MN}\delta g_{MN}\operatorname{vol}_g=-\frac12g_{AB}\delta g^{AB}\operatorname{vol}_g$. Therefore
$$\delta\left(-\frac12|F_4|_g^2\operatorname{vol}_g\right)=\left(-\frac1{12}F_{MABC}F_N{}^{ABC}+\frac14g_{MN}|F_4|_g^2\right)\delta g^{MN}\operatorname{vol}_g.$$
[A1, F1, F2, F3, F4, F5, algebra]

2.1 Since $g$ is fixed, the Hodge star is fixed. By symmetry of the metric-induced pairing in [F2], $\delta(F_4\wedge *_gF_4)=2\,d\delta C_3\wedge *_gF_4$, so the kinetic variation is $-d\delta C_3\wedge *_gF_4$. The product rule in [F8] gives $d(\delta C_3\wedge *_gF_4)=d\delta C_3\wedge *_gF_4-\delta C_3\wedge d *_gF_4$. Its primitive is compactly supported, so [F7] yields $\int_M d\delta C_3\wedge *_gF_4=\int_M\delta C_3\wedge d *_gF_4$. [A1, F2, F7, F8, step 1.1, algebra]

2.2 The Chern–Simons variation is
$$-\frac16\int_M\left(\delta C_3\wedge F_4\wedge F_4+C_3\wedge d\delta C_3\wedge F_4+C_3\wedge F_4\wedge d\delta C_3\right).$$
The two last terms agree because both $F_4$ and $d\delta C_3$ have degree $4$. By $dF_4=0$ and the product rule,
$$d(C_3\wedge\delta C_3\wedge F_4)=F_4\wedge\delta C_3\wedge F_4-C_3\wedge d\delta C_3\wedge F_4.$$
Since $F_4$ commutes past $\delta C_3$ with sign $(-1)^{12}=1$, the product rule in [F8] gives the displayed derivative identity, and the primitive $C_3\wedge\delta C_3\wedge F_4$ has compact support. Thus [F7] gives $\int_M C_3\wedge d\delta C_3\wedge F_4=\int_M\delta C_3\wedge F_4\wedge F_4$. The Chern–Simons contribution is $-\frac12\int_M\delta C_3\wedge F_4\wedge F_4$. [A1, F7, F8, step 1.1, algebra]

2.3 The Chern–Simons 11-form $C_3\wedge F_4\wedge F_4$ contains no metric, inverse metric, Hodge star, or metric volume form, so its metric variation is zero. Adding the two metric-dependent contributions from step 1.2, stationarity gives $$\int_M E_{MN}q^{MN}\operatorname{vol}_g=0$$ for every admissible compactly supported symmetric inverse-metric variation $q$, where $E_{MN}:=R_{MN}-\frac12g_{MN}R-\frac1{12}F_{MABC}F_N{}^{ABC}+\frac14g_{MN}|F_4|_g^2$. First, $E_{MN}$ is symmetric: the Christoffel formula and [F5] give $\Gamma^P{}_{PM}=\frac12g^{PQ}\partial_Mg_{PQ}=\partial_M\log\sqrt{|\det g|}$, and the curvature convention yields $$R_{MN}-R_{NM}=-\partial_N\partial_M\log\sqrt{|\det g|}+\partial_M\partial_N\log\sqrt{|\det g|}-\Gamma^P{}_{NR}\Gamma^R{}_{PM}+\Gamma^P{}_{MR}\Gamma^R{}_{PN}=0.$$ The partial derivatives commute by [F8], and relabeling $P,R$ and using symmetry of the lower Christoffel indices makes the two quadratic sums equal; the flux contraction is symmetric as well. We now verify that every smooth compactly supported symmetric $q$ is admissible. On its compact support $K$, at each point the inverse metric has a positive ten-dimensional subspace and a negative one-dimensional subspace. In a local trivialization, continuity preserves strict positivity on that fixed ten-plane and strict negativity on that line in a neighborhood of the point, and sufficiently small perturbations preserve both inequalities. These dimensions sum to $11$, so the perturbed form remains nondegenerate with inertia $(10,1,0)$. Compactness of $K$ gives a finite such cover and a uniform $\varepsilon>0$; hence $g_t^{-1}=g^{-1}+tq$ is Lorentzian for $|t|<\varepsilon$ and equals $g^{-1}$ off $K$. Its inverse is a smooth metric, so this is an admissible variation. For a coordinate test function $\psi$ with compact support, take $q^{ii}=\psi$ and all other components zero to test $E_{ii}$; for $i<j$ take $q^{ij}=q^{ji}=\psi$ and all other components zero, which tests $2E_{ij}$. Since $E$ is continuous, [F6] applied with the positive coordinate density makes every component of $E$ vanish pointwise. [A1, F2, F5, F6, F8, step 1.2, algebra]

3.1 Combining steps 2.1 and 2.2 gives
$$\delta_{C_3}S=-\frac1{2\kappa_{11}^2}\int_M\delta C_3\wedge\left(d *_gF_4+\frac12F_4\wedge F_4\right).$$
In any chart, choose $\delta C_3$ with one arbitrary compactly supported component at a time. The positive coordinate density $\sqrt{|\det g|}$ and [F6] imply every component of the 8-form coefficient vanishes. This is the first field equation. [A1, F2, F6, step 2.1, step 2.2, algebra]

3.2 Contract $E_{MN}=0$ with $g^{MN}$. Since $g^{MN}R_{MN}=R$, $g^{MN}g_{MN}=11$, and $g^{MN}F_{MABC}F_N{}^{ABC}=F_{ABCD}F^{ABCD}=24|F_4|_g^2$, the trace is
$$-\frac92R+\left(-2+\frac{11}{4}\right)|F_4|_g^2=0,$$
so $R=\frac16|F_4|_g^2$. Substituting this value back into $E_{MN}=0$ yields
$$R_{MN}=\frac1{12}F_{MABC}F_N{}^{ABC}-\frac16g_{MN}|F_4|_g^2=\frac1{12}\left(F_{MABC}F_N{}^{ABC}-\frac1{12}g_{MN}F_{ABCD}F^{ABCD}\right).$$
[F1, step 2.3, algebra]

4.1 Step 1.1 gives $dF_4=0$, step 3.1 gives the four-form equation, and step 3.2 gives the Einstein equation. Each is conditional on stationarity of the specified source-free bosonic action and the stated compact-support hypotheses; no source or higher-derivative equation follows. [A1, step 1.1, step 3.1, step 3.2] ∎

## Remarks

The normalization $|F_4|^2=F_{ABCD}F^{ABCD}/4!$ is essential to the displayed Einstein coefficient. The independent Gauntlett–Pakis component equation in §2, equation (2.2), matches the result after this normalization. Their supersymmetry formula is treated separately in [[def-eleven-dimensional-supergravity-supersymmetric-background]].
