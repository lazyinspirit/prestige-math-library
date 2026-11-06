---
id: ex-cft-r5-liouville-four-point-admissible-charges
kind: example
title: An explicit Liouville four-point charge tuple in the strict domain
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Set $\gamma=1$, $\mu=1$, $z=1/2$, and $\alpha_1=\alpha_2=\alpha_3=\alpha_4=13/10$ in the probabilistic Liouville sphere convention. Then $Q=5/2$, each charge is below $Q$, each pair sum is above $Q$, and $0<\gamma<\sqrt2$. The insertion points $(0,1/2,1,\infty)$ are distinct. This is an exact example of parameters in the strict source domain; it gives no value for the four-point function and proves no bootstrap identity.

## Example references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

## Facts & Assumptions

**Given:** The rational parameters displayed in the Example.

[F1] [[def-cft-r5-liouville-probabilistic-sphere-model]]: $Q=2/\gamma+\gamma/2$, $\Delta_\alpha=\frac{\alpha}{2}(Q-\frac{\alpha}{2})$, and the real-charge Seiberg domain is $\alpha_i<Q$ and $\sum_i\alpha_i>2Q$.

## Verification

**Proof technique:** direct exact arithmetic.

1.1 Substituting $\gamma=1$ gives $Q=2+\frac12=\frac52$ and $\Delta_{13/10}=\frac{13}{20}(\frac52-\frac{13}{20})=\frac{481}{400}$. The associated central charge is $1+6Q^2=77/2$. [F1, given, algebra]

2.1 Each $\alpha_i=\frac{13}{10}<\frac{25}{10}=Q$, and each pair sum is $\frac{26}{10}>\frac{25}{10}=Q$; the total is $\frac{52}{10}>\frac{50}{10}=2Q$. Also $1<\sqrt2$ since both sides are positive and $1<2$. [F1, given, step 1.1, algebra]

3.1 The four points $0,1/2,1,\infty$ are pairwise distinct and $0<|1/2|<1$. Thus every displayed parameter and insertion inequality is strict. [given, algebra] ∎

This verifies parameter membership only; it does not use the escalated four-point theorem as a premise.
