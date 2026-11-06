---
id: pthm-dp-brane-ns-two-form-gauge-invariance
kind: physics-theorem
title: Dp Brane NS Two Form Gauge Invariance Of The Invariant Field
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - def-dp-brane-worldvolume-fields
  - thm-the-exterior-derivative-commutes-with-pullback
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  def-dp-brane-worldvolume-fields: formulation-prerequisite
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local Abelian worldvolume NS two-form gauge shift on a smooth Dp probe; proves invariance of the DBI combination and the WZ exponential with RR potentials held fixed, not the full RR-potential gauge crosswalk."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15; the invariant gauge-field and pulled-back B-field combination."
    - title: "M. B. Green, C. M. Hull, and P. K. Townsend, D-brane Wess–Zumino actions, T-duality and the cosmological constant, arXiv:hep-th/9604119v1"
      url: "https://arxiv.org/pdf/hep-th/9604119v1"
      locator: "§2, NS two-form gauge shift, compensating worldvolume gauge transformation, and WZ exponential."
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
---

## Statement

Under the adopted shift $\delta B_2=d\zeta_1$, $\delta A=\iota^*\zeta_1/(2\pi\alpha')$ on a single Abelian Dp-brane, $\mathcal F=2\pi\alpha'F_A-\iota^*B_2$ is invariant. Consequently the DBI determinant and the WZ exponential are unchanged when the RR potential polyform $C$ is held fixed. This does not establish invariance under the simultaneous R4 RR-potential gauge transformations.

## Statement References

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.5](https://arxiv.org/pdf/hep-th/9602052v2)

## Facts & Assumptions

**Given:** A smooth Abelian connection $A$, a smooth one-form gauge parameter $\zeta_1$ on the target, and the adopted NS shift on a fixed smooth embedding.

[F1] [[post-type-ii-dp-brane-dbi-wz-action]]: $\mathcal F=2\pi\alpha'F_A-\iota^*B_2$, $F_A=dA$, $\delta B_2=d\zeta_1$, and $\delta A=\iota^*\zeta_1/(2\pi\alpha')$. This use is restricted to the explicit NS clause with the RR polyform held fixed; it does not use the separate RR gauge-transformation clause.

[F2] [[def-dp-brane-worldvolume-fields]]: for a single brane, $A$ is an Abelian connection and its curvature is $F_A=dA$.

[F3] [[thm-the-exterior-derivative-commutes-with-pullback]]: for every smooth map $\iota$ and form $\zeta$, $d(\iota^*\zeta)=\iota^*(d\zeta)$.

## Proof

1.1 By [F1]–[F3], $\delta F_A=d(\delta A)=d(\iota^*\zeta_1)/(2\pi\alpha')=\iota^*(d\zeta_1)/(2\pi\alpha')$. [given, F1, F2, F3]

2.1 Substituting step 1.1 and [F1] gives $\delta\mathcal F=2\pi\alpha'\,\delta F_A-\iota^*(\delta B_2)=\iota^*(d\zeta_1)-\iota^*(d\zeta_1)=0$. Thus both the determinant input and $e^{\mathcal F}$ are unchanged; holding $C$ fixed makes the displayed WZ integrand unchanged. The proof makes no claim about the separate RR transformation terms. [given, F1, step 1.1, algebra] ∎
