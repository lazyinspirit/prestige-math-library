---
id: lem-the-hom-cochain-differential-squares-to-zero
title: "The Hom cochain differential squares to zero"
kind: lemma
status: draft
origin: pipeline
deps: ["def-cochain-complex-hom-from-a-chain-complex"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
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

If $C$ is a chain complex and $G$ a module, then the differential $\delta^n(f)=f\circ d_{n+1}$ on $\operatorname{Hom}_R(C_n,G)$ satisfies $\delta^{n+1}\delta^n=0$.

## Proof

**Given:** $f:C_n\to G$ and the chain differential $d$.

1.1 By definition, $\delta^{n+1}(\delta^n f)= (f\circ d_{n+1})\circ d_{n+2}=f\circ(d_{n+1}d_{n+2})$. [given]

2.1 The chain-complex identity $d_{n+1}d_{n+2}=0$ makes this composite zero, so the Hom groups form a cochain complex. [step 1.1, algebra] ∎
