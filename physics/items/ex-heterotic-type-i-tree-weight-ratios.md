---
id: ex-heterotic-type-i-tree-weight-ratios
kind: example
title: Heterotic And Type I Tree Weight Ratios
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
dependency_roles:
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: physical-assumption
physical_scope: "A symbolic evaluation of the adopted heterotic and Type-I tree-level dilaton multipliers. It is not a solution of either theory, a comparison of fully normalized action coefficients, or evidence for S-duality."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§2.2, printed pp. 11–12, and §2.4, printed pp. 14–16, ten-dimensional N=1 field and gauge-sector context."
      source_key: "R4:R4-SUGRA-13:S1"
    - title: "Mohammad R. Garousi, S-duality in higher-derivative corrections of heterotic supergravity"
      url: "https://arxiv.org/pdf/2502.00357v5"
      locator: "§1, equations (3)–(6), printed pp. 2–3, the separate heterotic and Type-I tree-level dilaton weights."
      source_key: "R4:R4-SUGRA-13:S2"
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

## Example

For the adopted branch weights, set the heterotic dilaton value to $\Phi_H=0$ and the Type-I dilaton value to $\Phi_I=\log 2$. The heterotic closed gravity/dilaton and gauge multipliers are both $1$. The Type-I closed gravity/dilaton multiplier is $1/4$ and its open-string gauge multiplier is $1/2$, so the Type-I open-string gauge multiplier divided by the Type-I closed gravity/dilaton multiplier is $2$. The two field values are evaluated independently; this does not identify heterotic and Type-I dilatons or compare their fully normalized actions.

## Statement references

[Washington Taylor, §§2.2 and 2.4](https://arxiv.org/pdf/1104.2051v2)

[Mohammad R. Garousi, §1](https://arxiv.org/pdf/2502.00357v5)

## Facts & Assumptions

**Given:** Evaluate only the positive dimensionless multiplier functions at $\Phi_H=0$ and $\Phi_I=\log 2$.

[F1] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]]: the heterotic closed and gauge multipliers are $e^{-2\Phi_H}$; the Type-I closed multiplier is $e^{-2\Phi_I}$ and the Type-I open gauge multiplier is $e^{-\Phi_I}$. The postulate treats the branches separately and does not fix common action coefficients.

## Verification

1.1 Substituting $\Phi_H=0$ into both heterotic multiplier functions gives $e^{-2\cdot0}=1$, so their ratio is $1/1=1$. [given, F1, algebra]

1.2 Substituting $\Phi_I=\log2$ gives the Type-I closed multiplier $e^{-2\log2}=2^{-2}=1/4$ and open gauge multiplier $e^{-\log2}=2^{-1}=1/2$. [given, F1, algebra]

2.1 Since $1/4>0$, the Type-I open-string gauge multiplier divided by the Type-I closed gravity/dilaton multiplier is $(1/2)/(1/4)=2$. These are only dilaton multipliers; the calculation makes no statement about unlisted coefficients or a duality map. [step 1.2, algebra] ∎
