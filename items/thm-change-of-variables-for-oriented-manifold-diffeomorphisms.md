---
id: thm-change-of-variables-for-oriented-manifold-diffeomorphisms
title: "Change of variables on oriented manifolds"
kind: theorem
status: published
origin: pipeline
deps: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement", "prop-reversing-orientation-negates-the-integral", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.6(d), pp.407–408"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

## Facts & Assumptions

[F1] [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

[F2] [[prop-reversing-orientation-negates-the-integral]]: Let $-M$ have the opposite orientation on every component of an oriented smooth manifold $M$. For every compactly supported top form, $\int_{-M}\omega=-\int_M\omega$, in all dimensions.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The support of $F^*\omega$ is $F^{-1}(\operatorname{supp}\omega)$ because the tangent maps are isomorphisms. It is compact, being the continuous image of the compact support under the inverse homeomorphism. Pull back the target partition and use the charts $\phi_i\circ F$; these remain subordinate and locally finite. [F3, given]

2.1 If orientation is preserved, the corresponding source and target charts have the same sign and the same localized coefficient: $(\phi_iF)^{-1}=F^{-1}\phi_i^{-1}$ and functoriality cancels the pullbacks. Thus their finite chart sums agree. Choice independence makes this the asserted intrinsic equality. [F1, F3, step 1.1]

3.1 For global reversal, reverse the source orientation to apply the preceding equality and then negate its integral. More generally the sign is locally constant because a continuous nonzero determinant has constant sign on each connected component; apply that argument componentwise. In dimension zero the diffeomorphism is a bijection of finite supports with the corresponding point signs; empty support and zero forms give zero. [F2, step 2.1] ∎
