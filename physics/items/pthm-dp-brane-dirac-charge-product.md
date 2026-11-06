---
id: pthm-dp-brane-dirac-charge-product
kind: physics-theorem
title: Dp Brane Dirac Charge Product
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - def-supergravity-conventions-and-normalizations
  - post-dp-rr-dirac-pairing
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-dp-rr-dirac-pairing: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Arithmetic charge-unit identity for complementary electric/magnetic Type II Dp and D(6-p) branes in the stated source normalization; the Dirac lattice is a separate postulate, global RR flux quantization is not derived, and p=3 requires a self-dual-field treatment."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture IV §4.1, equations (4.1)–(4.2), PDF pp. 31–32; electric/magnetic RR Dirac quantization and brane charge units."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 2–4; RR charge normalization and Dirac quantization."
verification:
  precheck: pending
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

For each integer $p$ with $0\le p\le6$, the source-normalized charge units satisfy the arithmetic identity
$$ \mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1},\qquad 2\kappa_0^2=(2\pi)^7\alpha'^4, $$
and hence $2\kappa_0^2\mu_p\mu_{6-p}=2\pi$. For $p\ne3$, the adopted RR Dirac lattice makes this the minimal nonzero pairing $n=1$ for mutually electric and magnetic Dp and D$(6-p)$ charges. At $p=3$ this remains an arithmetic identity only: the adopted lattice postulate expressly excludes the self-dual Type IIB D3 case, whose physical charge interpretation needs a separate self-dual-field framework.

## Statement References

[Polchinski, Chaudhuri, and Johnson, Lecture IV §4.1](https://arxiv.org/pdf/hep-th/9602052v2)

## Facts & Assumptions

**Given:** The charge and gravitational-coupling normalizations for an integer $0\le p\le6$; when $p\ne3$, also assume a mutually electric/magnetic complementary RR pair and the adopted Dirac lattice.

[F1] [[post-type-ii-dp-brane-dbi-wz-action]]: $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$ is the Dp RR charge unit used in the adopted action. This arithmetic use depends only on the explicit charge normalization.

[F2] [[def-supergravity-conventions-and-normalizations]]: $2\kappa_0^2=(2\pi)^7\alpha'^4$.

[A1] [[post-dp-rr-dirac-pairing]]: for source-normalized complementary Dp and D$(6-p)$ units with $0\le p\le6$ and $p\ne3$, $\mu_p\mu_{6-p}/\alpha_p=2\pi n$, with $\alpha_p=(2\kappa_0^2)^{-1}$ and $n\in\mathbb Z$; the self-dual $p=3$ case is excluded from this adopted lattice.

## Proof

1.1 Apply [F1] to $p$ and $6-p$. Their product is $\mu_p\mu_{6-p}=(2\pi)^{-p-(6-p)}\alpha'^{-((p+1)+(7-p))/2}=(2\pi)^{-6}\alpha'^{-4}$ because the two exponents add to $8$. [given, F1, algebra]

2.1 Multiplying step 1.1 by [F2] gives $2\kappa_0^2\mu_p\mu_{6-p}=(2\pi)^7\alpha'^4(2\pi)^{-6}\alpha'^{-4}=2\pi$. If $p\ne3$, [A1] applies and this realizes $n=1$, the minimal nonzero integer pairing. If $p=3$, [A1] supplies no lattice premise, so only the arithmetic identity follows. The computation is dimensionless and does not derive a Dirac lattice or global RR flux quantization. [given, F2, A1, step 1.1, algebra] ∎
