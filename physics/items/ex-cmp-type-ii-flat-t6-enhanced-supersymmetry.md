---
id: ex-cmp-type-ii-flat-t6-enhanced-supersymmetry
kind: example
title: Type II on a flat six-torus and enhanced four-dimensional supersymmetry
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 14
domain: physics
library: physics
physical_scope: "The N=8 result is for source-free massless Type IIA or Type IIB supergravity at two-derivative order on Minkowski space times a rectangular flat T6 with periodic spin structure and no projection. The comparison is conditional on a separate compact Ricci-flat six-manifold with exact SU(3) spin holonomy. The Kaluza–Klein formula is conditional on the stated free component wave equation, which includes the minimally coupled scalar sector; it is not the full massive string spectrum."
deps:
  - def-cmp-rectangular-torus-compactification-data
  - def-cmp-four-dimensional-supersymmetry-count
  - pthm-cmp-flat-t6-type-ii-supercharge-count
  - lem-cmp-su3-fixed-chiral-spinor-lines
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
  - pthm-type-iia-bosonic-field-equations
  - def-type-iia-supergravity-killing-spinor-equations
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - pthm-type-iib-field-equations-with-self-duality
  - def-type-iib-supergravity-killing-spinor-equations
  - def-type-iib-spinor-bundle-data
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
dependency_roles:
  def-cmp-rectangular-torus-compactification-data: formulation-prerequisite
  def-cmp-four-dimensional-supersymmetry-count: formulation-prerequisite
  pthm-cmp-flat-t6-type-ii-supercharge-count: physical-result
  lem-cmp-su3-fixed-chiral-spinor-lines: mathematical-premise
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  pthm-type-iia-bosonic-field-equations: physical-result
  def-type-iia-supergravity-killing-spinor-equations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  pthm-type-iib-field-equations-with-self-duality: physical-result
  def-type-iib-supergravity-killing-spinor-equations: formulation-prerequisite
  def-type-iib-spinor-bundle-data: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mariana Graña and Hagen Triendl, String Theory Compactifications (Springer, 2017)"
      url: https://djvu.online/file/qufswWArYbwIP
      locator: "Lecture 3 opening, printed p. 21: toroidal compactification preserves 32 real supercharges, recorded as four-dimensional N=8."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: https://arxiv.org/pdf/1607.00327v3
      locator: "§§3.2–3.6, §6.2 Theorem 6.8, and §7.2 Theorem 7.9: Lorentzian spinors and the Type-II Killing-spinor systems."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $M_4=\mathbb R^{1,3}$ with signature $(-,+,+,+)$, and let
$$T^6_R=\prod_{i=1}^6\mathbb R/(2\pi R_i\mathbb Z),\qquad R_i\in(0,\infty),$$
with angular coordinates $\theta^i\sim\theta^i+2\pi$ and metric $\sum_iR_i^2(d\theta^i)^2$. On the product use the flat ten-dimensional metric, constant dilaton $\Phi_0$, vanishing NS and RR potentials and field strengths, and no localized sources, fluxes, Wilson lines, orbifold action, orientifold projection, or supersymmetry-breaking deformation. Choose the periodic internal spin structure: spinor components in the global orthonormal frame are periodic under every $\theta^i\mapsto\theta^i+2\pi$. Work in the massless source-free Type IIA or Type IIB supergravity model with the two-derivative Hamilton string-frame conventions.

For either theory, the Killing-spinor equations reduce to $\nabla_M\epsilon=0$ because all fluxes and $d\Phi$ vanish. The internal spin connection is flat, and the periodic spin structure admits all constant internal spinors. Thus the unprojected four-dimensional massless theory has 32 independent real supersymmetry parameters, which is $N=8$ under the stated four-dimensional counting convention. This count is a two-derivative supergravity deduction conditional on the named physical and Killing-spinor inputs; it is not a statement about moduli stabilization.

For comparison, let $Y$ be a compact connected complex threefold with a Ricci-flat Riemannian metric whose Levi-Civita holonomy is exactly the standard $SU(3)\subset SO(6)$ and whose chosen spin lift has exactly the corresponding $SU(3)\subset\operatorname{Spin}(6)$ holonomy. This is the full-holonomy Calabi–Yau regime in this example. On $M_4\times Y$, use the same source-free massless Type IIA or Type IIB two-derivative model, constant dilaton, zero NS and RR fields, and no localized sources or projections. The four-dimensional supersymmetry count is then $N=2$. The comparison is conditional on exact $SU(3)$ holonomy; flat tori and lower-holonomy limits are excluded from it.

For any free field component $\Psi$ in a parallel product frame that satisfies $(\Box_4+\Delta_{T^6_R}-m_0^2)\Psi=0$, a Fourier mode $e^{i\sum_i n_i\theta^i}$ has
$$m_{\mathbf n}^2=m_0^2+\sum_{i=1}^6\frac{n_i^2}{R_i^2},\qquad \mathbf n\in\mathbb Z^6.$$
For the minimally coupled scalar sector this is the equation and convention defined on the A page; massless parent components have $m_0=0$. The formula is a free two-derivative Kaluza–Klein contribution and does not give the massive string oscillator or winding spectrum.

## Example references

[[def-cmp-rectangular-torus-compactification-data]]

[[def-cmp-four-dimensional-supersymmetry-count]]

[[lem-cmp-su3-fixed-chiral-spinor-lines]]

[[pthm-cmp-flat-t6-type-ii-supercharge-count]]

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iia-two-derivative-supergravity-action]]

[[pthm-type-iia-bosonic-field-equations]]

[[def-type-iia-supergravity-killing-spinor-equations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[pthm-type-iib-field-equations-with-self-duality]]

[[def-type-iib-supergravity-killing-spinor-equations]]

[[def-type-iib-spinor-bundle-data]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

## Facts & Assumptions

**Given:** The flat product geometry and periodic spin structure; the separate exact-$SU(3)$-holonomy product background; the zero-field configurations; and the exact supplier interfaces below. Any supplier with a current escalated Step-1 record is used only at its inspected conditional statement.

[F1] [[def-cmp-rectangular-torus-compactification-data]]: the internal metric is $\sum_iR_i^2(d\theta^i)^2$, and in the minimally coupled scalar sector the Kaluza–Klein masses are $m_{\mathbf n}^2=m_0^2+\sum_i n_i^2/R_i^2$.

[F2] [[def-cmp-four-dimensional-supersymmetry-count]]: $N$ counts copies of the specified real $\operatorname{Spin}^+(1,3)$-module $S_4^{\mathrm M}$; a parameter space that is a direct sum of $N$ such modules has real dimension $4N$.

[F3] [[pthm-cmp-flat-t6-type-ii-supercharge-count]]: under the periodic spin structure and zero-field source-free background, both unprojected Type-II reductions have 32 real global supersymmetry parameters and $N=8$. Its proof is conditional on the current IIA/IIB equations and Killing-spinor interfaces; its Step-1 record is escalated on the IIB suppliers.

[F4] [[lem-cmp-su3-fixed-chiral-spinor-lines]]: with exact lifted $SU(3)$ holonomy, each internal chiral spinor bundle has one complex line of global parallel sections, and its holonomy-fixed ten-dimensional Majorana–Weyl subspace is a real form of one opposite-Weyl pair. The Clifford intertwiners in [F3], Proof 3.1, identify the actual IIA/IIB modules with these product representations; its ordered chirality calculation allows either internal-parity pairing. The equivariant isomorphism of the invariant real form with the particular $S_4^{\mathrm M}$ in [F2] is constructed in [F3], Proof 5.1, not inferred from dimension alone.

[F5] [[def-supergravity-conventions-and-normalizations]]: Type IIA has two opposite-chirality ten-dimensional Majorana–Weyl parameters and Type IIB has two same-chirality such parameters; each parameter has 16 real components.

[F6] [[pthm-type-iia-bosonic-field-equations]]: the source-free massless IIA equations follow from the adopted two-derivative action, with the displayed potential Bianchi identities. On a Ricci-flat product with constant dilaton and all field strengths zero, every displayed equation reduces to $0=0$. Its current Step-1 record is ready.

[F7] [[pthm-type-iib-field-equations-with-self-duality]]: the current IIB theorem gives the string-frame metric, dilaton, form, Bianchi, and separate five-form equations. On a Ricci-flat product with constant dilaton and every field strength zero, all displayed terms vanish, including $*\widetilde G_5=\widetilde G_5$. Its current Step-1 record is escalated; the consuming comparison remains conditional on this exact interface.

[F8] [[def-type-iia-supergravity-killing-spinor-equations]]: on a source-free IIA bosonic solution, the gravitino and dilatino systems define the supersymmetry condition. When all fluxes and $d\Phi$ vanish, they reduce to $\nabla^S\epsilon=0$ and $0=0$. Its current Step-1 record is ready.

[F9] [[def-type-iib-supergravity-killing-spinor-equations]]: the current IIB doublet equations are imposed on a source-free bosonic solution with the separate five-form constraint. When all fluxes and $d\Phi$ vanish, they reduce to $\nabla^S\epsilon=0$ and $0=0$. Its current Step-1 record is escalated, so the comparison is conditional.

[F10] [[def-type-iib-spinor-bundle-data]]: a supplied ten-dimensional Spin lift defines the positive-chirality Majorana–Weyl spinor bundle $S_+$, and the IIB parameter is a smooth doublet in $S_+\oplus S_+$. The spinor-bundle interface supplies the full Clifford bundle and its chiral subbundles; these are the supplied data used here.

[F11] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]: a spin structure is a principal Spin lift of the oriented frame bundle, and the spinor bundle is associated to the specified Clifford representation.

[F12] [[post-type-iia-two-derivative-supergravity-action]]: the adopted IIA model is the massless source-free leading two-derivative string-frame action with $F_0=0$.

[F13] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: the adopted IIB model is the massless source-free leading two-derivative string-frame pseudoaction; the five-form constraint is imposed separately after variation. Its current Step-1 record is escalated.

[A1] The flat-torus internal spin structure is periodic in all six angular coordinates. All potentials and field strengths vanish, and the dilaton is constant.

[A2] No quotient, orientifold, Wilson line, or other projection acts on the flat-torus spinors or scalar modes.

[A3] The displayed mode formula assumes a free component in a parallel product frame satisfying $(\Box_4+\Delta_{T^6_R}-m_0^2)\Psi=0$, with $\Delta=\operatorname{div}\operatorname{grad}$ nonpositive. For the minimally coupled scalar sector this is the equation in [F1]. No flux, curvature, higher-derivative, loop, string oscillator, or winding contribution is included.

[A4] For the comparison, $Y$ is a compact connected complex threefold with a Ricci-flat Riemannian metric whose Levi-Civita holonomy and chosen spin lift are exactly the standard $SU(3)$ actions specified in the Example.

[A5] On $M_4\times Y$ all NS and RR potentials and field strengths vanish and $\Phi=\Phi_0$ is constant. The external metric is flat Minkowski, and there are no localized sources, fluxes, or projections.

## Proof

**Given:** [F1]–[F13], [A1]–[A5], the positive finite radii $R_i$, and the two source-free product backgrounds in the Example. The current IIB equation and Killing-spinor inputs remain conditional.

1.1 The geometry, periodic spin structure, zero-field background, and absence of projections in [A1]–[A2] satisfy the hypotheses of [F3]. Thus the flat-torus reductions have 32 real global supersymmetry parameters, and [F2] records this as $N=8$. This is a conditional deduction within the adopted two-derivative models [F12]–[F13], not a claim about a full string vacuum. [A1, A2, F2, F3, F12, F13, given]

1.2 On $M_4\times Y$, the product Ricci tensor and scalar curvature vanish because the external metric is flat and $\operatorname{Ric}(g_Y)=0$. Also $d\Phi=0$ and every NS and RR field strength is zero by [A4]–[A5]. Substitution in the current IIA equations [F6] and the current IIB equations [F7] makes every metric, dilaton, form, Bianchi, and five-form equation vanish. Therefore this is an on-shell bosonic background in both models, conditional on the current supplier interfaces. [A4, A5, F6, F7, given]

1.3 For the mode in [A3], the rectangular metric gives $-\Delta_{T^6_R}e^{i\sum_i n_i\theta^i}=\left(\sum_i n_i^2/R_i^2\right)e^{i\sum_i n_i\theta^i}$ by direct differentiation. Substitution into $(\Box_4+\Delta_{T^6_R}-m_0^2)\Psi=0$ gives the external equation $(\Box_4-m_0^2-\sum_i n_i^2/R_i^2)\psi_{\mathbf n}=0$. Thus the mass-squared shift is exactly $\sum_i n_i^2/R_i^2$ for every component satisfying the declared free wave equation. [F1, A3, algebra]

2.1 Substituting [A5] into the IIA systems [F8] and the IIB doublet systems [F9]–[F10] removes every flux and dilaton term, leaving the parallel-spinor equation $\nabla^S\epsilon=0$ and a zero dilatino equation. The product spin connection splits into the flat external connection and the internal spin connection; the global internal parallel-spinor spaces are exactly those covered by [F4]. The no-projection hypothesis in [A5] retains all of them. [A4, A5, F4, F8, F9, F10, F11, step 1.2, algebra]

3.1 By the explicit Clifford identification in [F3] and the two internal-parity cases of [F4], the invariant complex space for either actual ten-dimensional chirality is $U\oplus V$, where $U=S_4^+\otimes L_+$ and $V=S_4^-\otimes L_-$ for one-dimensional internal invariant lines, or with the two internal lines interchanged according to the ordered chirality sign. This interchange does not change the following real-module construction. The ten-dimensional Majorana involution $R$ commutes with internal holonomy, so preserves this fixed space, and is externally Spin-equivariant. By the explicit no-antilinear-self-map calculation in [F3], Proof 5.1, it exchanges $U$ and $V$. Choose a nonzero vector $e$ in the internal invariant line defining $U$. Every real fixed vector is uniquely $z\otimes e+R(z\otimes e)$. The map to $z+Jz\in S_4^{\mathrm M}$, with inverse obtained by its positive-Weyl projection, is a real Spin-equivariant isomorphism by that same construction. Thus either ten-dimensional chirality contributes exactly one copy of the specified module, not merely four real dimensions. By [F5], each of Type IIA and Type IIB has two such ten-dimensional parameters. Therefore each compactification has $2\cdot4=8$ independent real four-dimensional supersymmetry parameters, and [F2] identifies this count as $N=2$. The result is conditional on the source-free two-derivative equations and Killing-spinor systems, particularly the current escalated IIB inputs. [F2, F3, F4, F5, step 2.1, construct, algebra] ∎

## Remarks

The Type-II $N=8$ count is supplied by the local A-page theorem [F3]. The exact-$SU(3)$ comparison is derived conditionally from the local mathematical representation lemma [F4] and the actual IIA/IIB field-equation and Killing-spinor interfaces. The IIB field-equation and Killing-spinor inputs currently have escalated Step-1 records, so this example remains escalated until those exact upstream records are resolved. The Graña–Triendl notes and Hamilton independently support the Type-II toroidal inputs. A Guarino thesis source entry was dropped after the author and university-hosted PDF URLs exhausted fetch attempts; the local proof and lecture notes preserve coverage. The KK statement is conditional on the declared free component wave equation, including the minimally coupled scalar sector; no moduli stabilization or exact full-string spectrum is claimed.
