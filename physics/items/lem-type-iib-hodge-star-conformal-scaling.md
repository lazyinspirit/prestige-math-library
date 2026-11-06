---
id: lem-type-iib-hodge-star-conformal-scaling
kind: lemma
title: Conformal Scaling of the Ten-Dimensional Lorentzian Hodge Star
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
deps:
  - def-type-iib-lorentzian-hodge-star
  - thm-type-iib-lorentzian-hodge-star-properties
dependency_roles:
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-type-iib-lorentzian-hodge-star-properties: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 1, equations (1.87)-(1.88), PDF pp. 29-30; the conformal-weight identity is derived locally here."
aliases: []
---

## Statement

Let $g$ be an oriented Lorentzian metric of inertia $(9,1,0)$ on a smooth $10$-manifold, let $\omega$ be a smooth real function, and set $\widehat g=e^{2\omega}g$. For every smooth $p$-form $\beta$, $0\le p\le10$,

$$*_{\widehat g}\beta=e^{(10-2p)\omega}*_g\beta.$$

In particular, the Hodge star on $5$-forms is unchanged by this conformal rescaling.

## Statement references

[[def-type-iib-lorentzian-hodge-star]]

[[thm-type-iib-lorentzian-hodge-star-properties]]

## Facts & Assumptions

**Given:** The data and conformal rescaling in the Statement.

[F1] [[def-type-iib-lorentzian-hodge-star]]: the star is uniquely characterized by $\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$.

[F2] [[thm-type-iib-lorentzian-hodge-star-properties]]: the metric volume form and Hodge star are well-defined and unique.

## Proof

1.1 In a positive coordinate chart, $\widehat g_{\mu\nu}=e^{2\omega}g_{\mu\nu}$, so $\det(\widehat g)=e^{20\omega}\det(g)$ and the positive square root of its absolute value gives $\operatorname{vol}_{\widehat g}=e^{10\omega}\operatorname{vol}_g$. [F1, F2, algebra]

1.2 Raising the $p$ covector indices in the pairing uses $p$ inverse metric factors, each scaled by $e^{-2\omega}$. Hence $\langle\alpha,\beta\rangle_{\widehat g}=e^{-2p\omega}\langle\alpha,\beta\rangle_g$. [F1, given, algebra]

2.1 By [F1] and steps 1.1-1.2, for every $p$-form $\alpha$ we have $\alpha\wedge *_{\widehat g}\beta=e^{(10-2p)\omega}\alpha\wedge *_g\beta=\alpha\wedge\left(e^{(10-2p)\omega}*_g\beta\right)$. The wedge pairing with all $\alpha$ is nondegenerate by the complementary-basis argument in [F2], so the two $(10-p)$-forms paired with $\alpha$ are equal. This proves the formula. For $p=5$ its exponent is zero. [F1, F2, step 1.1, step 1.2, algebra] ∎
