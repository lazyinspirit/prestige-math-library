---
id: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective
title: "Positive Tor vanishes when the resolved variable is projective"
kind: proposition
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module"]
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

If the variable being resolved is projective, its resolution-defined $\operatorname{Tor}^R_i$ vanishes for every $i>0$.

## Proof

**Given:** a projective left module $M$ (or, symmetrically, a projective right module $N$).

1.1 Use the length-zero projective resolution $0\to M\xrightarrow{1}M\to0$, concentrated in degree $0$. [given]

2.1 After tensoring with $N$, the resulting complex is concentrated in degree $0$ with term $N\otimes_RM$. [step 1.1, algebra]

3.1 Its homology in positive degrees is zero.  Resolving a projective right module instead gives the symmetric conclusion. [step 2.1, algebra] ∎
