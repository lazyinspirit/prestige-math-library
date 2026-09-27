---
id: thm-change-of-variables-for-oriented-manifold-diffeomorphisms
title: "Change of variables on oriented manifolds"
kind: theorem
status: published
origin: pipeline
deps: ["lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (thm-change-of-variables-for-oriented-manifold-diffeomorphisms). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee Proposition 16.6(d), pp.407–408"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and
$\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere,
$\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere,
$\int_MF^*\omega=-\int_N\omega$. If the sign varies between components,
apply the appropriate signed equality on each component and add. The
compact-support integrals are the choice-free finite-chart values, equal to
the global partition integrals whenever those are available.

## Facts & Assumptions

[F1] [[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]] constructs the finite-chart compact-support integral in every dimension, including genuine boundary; proves signed diffeomorphism change of variables componentwise; and identifies its value with the global partition integral under countable choice.

[F2] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The support of $F^*\omega$ is $F^{-1}(\operatorname{supp}\omega)$ because the tangent maps are isomorphisms. It is compact, being the continuous image of the compact support under the inverse homeomorphism. Take the finite target localization from [F1] and pull its weights and charts back through $F$. [F1, F2, given]

2.1 If orientation is preserved, the corresponding source and target charts have the same sign and the same localized coefficient: $(\phi_iF)^{-1}=F^{-1}\phi_i^{-1}$ and functoriality cancels the pullbacks. The finite sums therefore agree and [F1] makes both intrinsic. [F1, F2, step 1.1]

3.1 For global reversal the chart signs are opposite, giving the negative finite sum. More generally the sign is locally constant because a continuous nonzero determinant has constant sign on each connected component; compact support meets finitely many components, so add their signed equalities. In dimension zero the diffeomorphism is a bijection of finite supports with the corresponding point signs; empty support and zero forms give zero. [F1, step 2.1] ∎
