---
id: pthm-type-iia-d6-charge-normalization-and-cover-arithmetic
kind: physics-theorem
title: Type Iia D6 Charge Normalization and Cover Arithmetic
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-type-iia-d6-o6-localized-f2-current-and-cover-charge
  - def-supergravity-conventions-and-normalizations
  - def-st-string-tension-alpha-prime
dependency_roles:
  post-type-iia-d6-o6-localized-f2-current-and-cover-charge: physical-assumption
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
physical_scope: "Conditional algebraic normalization and source-specific p=6 cover-charge check only. The localized current equation and the O-minus count are adopted source inputs; no worldvolume action, global tadpole theorem, or other orientifold geometry is derived."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§4.2, Eqs. (4.18)–(4.19), printed pp. 25–26/PDF pp. 26–27."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, Eq. (3.25), PDF p. 30."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Under the source inputs of the adopted localized-current postulate and the category convention $2\kappa_0^2=(2\pi)^7\alpha'^4$, the equality $2\pi\sqrt{\alpha'}=2\kappa_0^2\mu_6$ is equivalent to $\mu_6=(2\pi)^{-6}\alpha'^{-7/2}$. In the specific covering-space convention stated there, an O6-minus charge is $-2$ D6 units, the count is $2^{9-6}=8$, and the total is $-16$ D6 units.

## Theorem references

[[post-type-iia-d6-o6-localized-f2-current-and-cover-charge]]

## Facts & Assumptions

**Given:** The source coefficient, charge ratio, and fixed-plane count adopted in the D6/O6 postulate, together with $\alpha'>0$ and $2\kappa_0^2=(2\pi)^7\alpha'^4$.

[A1] [[post-type-iia-d6-o6-localized-f2-current-and-cover-charge]] adopts $2\pi\sqrt{\alpha\prime}J_3$ as the localized source coefficient, the $p=6$ O-minus charge ratio, and the source-specific $2^{9-p}$ covering-space count. These are source inputs; the proof below checks only the stated coefficient conversion and $p=6$ arithmetic.

[A2] [[def-supergravity-conventions-and-normalizations]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): $2\kappa_0^2=(2\pi)^7\alpha'^4$.

[F1] [[def-st-string-tension-alpha-prime]]: $\alpha'>0$ has dimension length squared.

[F2] [Graña, §4.2, Eq. (4.18)](https://arxiv.org/pdf/hep-th/0509003v3): the source coefficient is $2\pi\sqrt{\alpha'}J_3$.

[F3] [Polchinski–Chaudhuri–Johnson, Lecture III §3.3, Eq. (3.25)](https://arxiv.org/pdf/hep-th/9602052v2): $\mu'_p/\mu_p=-2^{p-5}$ for the stated O-minus choice, with $2^{9-p}$ fixed planes in the cited cover convention.

## Proof

1.1 Since $\alpha'>0$, [A2] gives $2\kappa_0^2=(2\pi)^7\alpha'^4>0$. Divide the scalar equality $2\kappa_0^2\mu_6=2\pi\sqrt{\alpha'}$ by this nonzero number to obtain $\mu_6=(2\pi)^{-6}\alpha'^{-7/2}$. Conversely, multiplying this value by $(2\pi)^7\alpha'^4$ gives $2\pi\sqrt{\alpha'}$. Thus both directions hold even when $J_3=0$; no current is cancelled. By [F1], the dimension is length$^{-7}$. [given, A1, A2, F1, F2, algebra]

1.2 Substituting $p=6$ in [F3] gives $\mu'_6/\mu_6=-2^{6-5}=-2$. Thus each O6-minus plane in this adopted convention carries $-2$ D6 units. [given, F3, algebra]

2.1 The cited count at $p=6$ is $2^{9-6}=2^3=8$. Adding eight identical charges from step 1.2 gives $8(-2)=-16$ units in that covering-space convention. [given, F3, step 1.2, algebra] ∎

## Remarks

This verifies only coefficient algebra and the cited finite charge sum. It does not integrate the sourced Bianchi identity over a global compact cycle or infer a charge count in another quotient.
