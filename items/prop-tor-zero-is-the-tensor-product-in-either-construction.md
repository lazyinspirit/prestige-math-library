---
id: prop-tor-zero-is-the-tensor-product-in-either-construction
title: "Degree-zero Tor is the tensor product in either construction"
kind: proposition
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-right-exactness-of-tensor-products"]
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

For a right $R$-module $N$ and a left $R$-module $M$, both resolution constructions give $\operatorname{Tor}^R_0(N,M)\cong N\otimes_RM$.

## Proof

**Given:** a projective resolution $P_\bullet\twoheadrightarrow M$ and a projective resolution $Q_\bullet\twoheadrightarrow N$.

1.1 The augmented complex $P_1\to P_0\to M\to0$ remains right exact after $N\otimes_R-$, so $H_0(N\otimes_RP_\bullet)=\operatorname{coker}(N\otimes P_1\to N\otimes P_0)$. [given]

2.1 That cokernel is $N\otimes_RM$ by the displayed right-exact sequence, so the left-resolved construction has the asserted degree-zero value. [step 1.1, algebra]

3.1 The same calculation for $Q_\bullet\otimes_RM$ gives $\operatorname{coker}(Q_1\otimes M\to Q_0\otimes M)=N\otimes_RM$, proving both identifications. [step 2.1, algebra] ∎
