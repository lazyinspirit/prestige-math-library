---
id: prop-semisimple-rings-have-vanishing-positive-tor-and-ext
title: "Semisimple rings have vanishing positive Tor and Ext"
kind: proposition
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-equivalent-characterizations-of-semisimple-rings", "def-balanced-ext-bifunctor"]
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

If $R$ is semisimple, then $\operatorname{Tor}^R_i(N,M)=0$ and $\operatorname{Ext}^i_R(M,X)=0$ for every $i>0$.

## Proof

**Given:** a semisimple ring, so every left and right module is projective and injective.

1.1 A module may be resolved by the length-zero projective resolution concentrated in degree $0$. [given]

2.1 Tensoring such a resolution has no positive homology, giving vanishing positive Tor. [step 1.1, algebra]

3.1 Likewise an injective (or projective) resolution concentrated in degree $0$ has no positive cohomology, giving vanishing positive Ext. [step 2.1, algebra] ∎
