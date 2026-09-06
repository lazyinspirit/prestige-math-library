---
id: cor-kunneth-when-one-homology-family-is-flat
title: "Kunneth when one homology family is flat"
kind: corollary
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Under the free-chain and finite-diagonal Kunneth hypotheses, if every $H_pC$ is flat then cross product is a natural isomorphism.

## Proof

**Given:** the Kunneth exact sequence and flatness of every $H_pC$.

1.1 Flatness gives $\operatorname{Tor}_1^R(H_pC,H_qD)=0$ for every pair $(p,q)$. [given]

2.1 Thus the finite direct sum of correction terms is zero, and exactness makes the cross-product injection surjective as well. [step 1.1] ∎
