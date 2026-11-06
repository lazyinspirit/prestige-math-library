---
id: ex-cmp4-kklt-exact-parameter-point
kind: example
title: Exact parameter point in the one-modulus KKLT EFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 16
domain: physics
library: physics
category: string-theory
deps:
  - pthm-cmp4-kklt-susy-ads-critical-point
  - def-real-exponential-function-and-e
  - def-series
  - lem-limit-preserves-order
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  pthm-cmp4-kklt-susy-ads-critical-point: physical-result
  def-real-exponential-function-and-e: mathematical-premise
  def-series: mathematical-premise
  lem-limit-preserves-order: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
physical_scope: "A single exact parameter substitution in the conditional one-modulus, two-derivative four-dimensional N=1 Einstein-frame EFT in Planck units. It is not a flux choice, measured value, or full string compactification."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

In the one-modulus EFT of the cited theorem, take $a=A=1$ and $W_0=-5/(3e)$, with $M_P=1$ and the real axion branch $\theta=0$. These parameters give the exact supersymmetric point $\tau=1$, $W=-2/(3e)$, and $V=-1/(6e^2)$. This is a parameter example within the stipulated EFT only; it asserts no flux realization, instanton or condensate sector, or controlled string vacuum.

## Statement references

[[pthm-cmp4-kklt-susy-ads-critical-point]]

## Facts & Assumptions

**Given:** The model and conventions of [[pthm-cmp4-kklt-susy-ads-critical-point]], the real exponential $e=\exp(1)$, and the exact parameter assignments in the Example.

[F1] [[pthm-cmp4-kklt-susy-ads-critical-point]] gives the unique-branch criterion $0<-W_0/A<1$ and the formulas for $W$ and $V$ at its supersymmetric point; its statement and proof remain conditional on the upstream readiness record described there.

[F2] [[def-real-exponential-function-and-e]] defines $e=\exp(1)$ by the real exponential series.

[F3] [[def-series]] defines the sum of a convergent series as the limit of its partial sums.

[F4] [[lem-limit-preserves-order]] states that an eventual non-strict inequality between convergent real sequences is preserved by their limits.

[F5] [[cor-exponential-reciprocal-and-positivity]] gives $e>0$ and $e^{-1}=1/e$.

[A1] The values $a=A=1$ and $W_0=-5/(3e)$ are stipulated EFT parameters, not inferred from flux quantization or an instanton determinant.

## Verification

1.1 At $x=1$, the first two terms of the positive series for $e$ have partial sum $1+1=2$, so [F2]–[F4] give $e\ge2>0$. Hence $0<5/(3e)\le5/6<1$, and the assigned $W_0$ satisfies the theorem's strict ratio condition. [given, F2, F3, F4, F5, A1, algebra]

2.1 With $a=1$, $A=1$, and $\tau=1$, the defining equation becomes $-W_0/A=5/(3e)=e^{-1}(1+2/3)=e^{-a\tau}(1+2a\tau/3)$. Thus $D_TW=0$ at $\tau=1$; by [F1] it is the unique point on the stated branch. [given, F1, A1, step 1.1, algebra]

3.1 Substituting $a=A=\tau=1$ into [F1] gives $W=-2/(3e)$ and $V=-1/(6e^2)<0$. This is the exact conditional EFT value for the selected parameter point. [given, F1, F5, A1, step 2.1, algebra] ∎

## Unresolved supplier

The verification uses the current KKLT theorem conditionally. That theorem remains escalated on its declared physical supplier readiness inputs, as detailed in its own unresolved-supplier section.
