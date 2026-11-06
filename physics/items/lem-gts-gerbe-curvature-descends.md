---
id: lem-gts-gerbe-curvature-descends
kind: lemma
title: Bundle-gerbe three-curvature descends and is closed
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
proof_strategy: direct
deps:
  - def-gts-u-1-bundle-gerbe-with-connection-and-curving
  - lem-gts-basic-forms-descend-along-surjective-submersions
dependency_roles:
  def-gts-u-1-bundle-gerbe-with-connection-and-curving: mathematical-premise
  lem-gts-basic-forms-descend-along-surjective-submersions: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: M. K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Sections 7–9, PDF pp. 11–15, curvature and curving equations.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, Deligne curvature diagram, PDF pp. 36–41.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For a bundle gerbe with product-compatible connection and curving $B$ satisfying $\operatorname{pr}_2^*B-\operatorname{pr}_1^*B=F_\nabla/(2\pi i)$, the form $dB$ is the pullback of a unique closed three-form $H$ on the base.

## Statement references

[[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]

[[lem-gts-basic-forms-descend-along-surjective-submersions]]

## Facts & Assumptions

**Given:** A surjective submersion $\pi:Y\to M$, a bundle-gerbe connection $\nabla$ preserving the product, and a curving $B$ with the stated normalized curvature equation.

[F1] [[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]: on $Y^{[2]}$, $\delta B=\operatorname{pr}_2^*B-\operatorname{pr}_1^*B=F_\nabla/(2\pi i)$; the product connection makes curvature additive on $Y^{[3]}$. For a unitary line connection, a local unit frame has connection form $A\in i\Omega^1$ and curvature $F_\nabla=dA$.

[F2] [[lem-gts-basic-forms-descend-along-surjective-submersions]]: an equalizer form on $Y\times_M Y$ descends uniquely to $M$.

## Proof

1.1 On $Y^{[3]}$, compatibility of the connection with the gerbe product gives $\operatorname{pr}_{13}^*F_\nabla=\operatorname{pr}_{12}^*F_\nabla+\operatorname{pr}_{23}^*F_\nabla$, so $\delta F_\nabla=0$. In each local unit frame of the line bundle, $F_\nabla=dA$ by [F1], hence $dF_\nabla=d^2A=0$; these local equalities agree on overlaps because curvature is globally defined. Therefore $d(\delta B)=dF_\nabla/(2\pi i)=0$. Since pullback commutes with $d$, $\delta(dB)=d(\delta B)=0$, so the two pullbacks of $dB$ to $Y^{[2]}$ agree. [F1, given, algebra]

2.1 Apply [F2] to $\alpha=dB$ to obtain a unique $H\in\Omega^3(M)$ with $\pi^*H=dB$. Then $\pi^*(dH)=d(\pi^*H)=d^2B=0$. Pullback by a surjective submersion is injective on forms because local sections recover the form, so $dH=0$. [F2, step 1.1, algebra] ∎
