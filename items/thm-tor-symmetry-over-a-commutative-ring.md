---
id: thm-tor-symmetry-over-a-commutative-ring
title: "Tor is symmetric over a commutative ring"
kind: theorem
status: draft
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-symmetry-and-associativity-over-a-commutative-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $R$ is commutative and $M,N$ are $R$-modules, then $\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally.

## Proof

**Given:** the commutative-ring swap $M\otimes_RN\cong N\otimes_RM$ and projective resolutions.

1.1 Choose a projective resolution $P_\bullet\to M$. Because $R$ is commutative, it is a resolution by both left and right projective modules. The termwise symmetry maps $P_j\otimes_RN\to N\otimes_RP_j$, $p\otimes n\mapsto n\otimes p$, commute with the single chain differential. [given]

2.1 Thus they give a natural chain isomorphism $P_\bullet\otimes_RN\cong N\otimes_RP_\bullet$. The first complex computes $\operatorname{Tor}^R_i(M,N)$ by resolving its right-module first variable; the second computes $\operatorname{Tor}^R_i(N,M)$ by resolving its left-module second variable. [step 1.1, algebra]

3.1 Taking homology and using change-of-resolution coherence yields the claimed natural Tor symmetry. [step 2.1, algebra] ∎
