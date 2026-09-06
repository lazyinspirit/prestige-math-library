---
id: lem-the-universal-coefficient-edge-map-for-homology-is-well-defined
title: "The homological universal-coefficient edge map is well defined"
kind: lemma
status: published
origin: pipeline
deps: ["def-chain-complex-with-coefficients-by-tensoring", "def-homology-object-of-a-chain-complex"]
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

For a right $R$-complex $C$ and a left $R$-module $G$, the formula $[z]\otimes g\mapsto[z\otimes g]$ defines an $R$-balanced map $H_n(C)\otimes_RG\to H_n(C\otimes_RG)$.

## Proof

**Given:** $z\in Z_nC$, $g\in G$, and the tensor-complex differential.

1.1 Since $d z=0$, $d(z\otimes g)=d z\otimes g=0$, so $z\otimes g$ represents a homology class. [given]

2.1 Replacing $z$ by $z+d w$ changes $z\otimes g$ by $d(w\otimes g)$, and $(zr)\otimes g=z\otimes(rg)$; hence the formula descends through both quotients. [step 1.1, algebra] ∎
