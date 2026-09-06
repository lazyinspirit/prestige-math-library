---
id: prop-tor-dimension-shifting
title: "Tor admits dimension shifting in either variable"
kind: proposition
status: published
origin: pipeline
deps: ["thm-long-exact-tor-sequence-in-the-left-module-variable", "thm-long-exact-tor-sequence-in-the-right-module-variable", "prop-positive-tor-vanishes-when-the-resolved-variable-is-projective"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
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

If $0\to K\to P\to M\to0$ is exact with $P$ projective, then for $i\ge1$, $\operatorname{Tor}_{i+1}^R(N,M)\cong\operatorname{Tor}_i^R(N,K)$; similarly in the right variable.

## Proof

**Given:** the displayed short exact sequence and a right module $N$.

1.1 The long exact Tor sequence contains $\operatorname{Tor}_{i+1}(N,P)\to\operatorname{Tor}_{i+1}(N,M)\to\operatorname{Tor}_i(N,K)\to\operatorname{Tor}_i(N,P)$. [given]

2.1 Both outside terms vanish because $P$ is projective and $i\ge1$. [step 1.1, algebra]

3.1 Exactness therefore makes the middle arrow an isomorphism.  Resolving a right module instead proves the other-variable form. [step 2.1, algebra] ∎
