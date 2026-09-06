---
id: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact
title: "The augmented fixed-q rows of the tensor double complex are exact"
kind: lemma
status: draft
origin: pipeline
deps: ["def-tensor-double-complex-of-two-projective-resolutions", "lem-projective-modules-are-flat-over-an-arbitrary-ring"]
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

For the same two projective resolutions, every augmented fixed-$q$ row
$Q_\bullet\otimes_RP_q\to N\otimes_RP_q$ is exact.

## Proof

**Given:** a fixed projective left module $P_q$ and the augmented resolution $Q_\bullet\to N$.

1.1 The module $P_q$ is flat as a left module, so $-\otimes_RP_q$ preserves exactness of $Q_\bullet\to N$. [given]

2.1 The resulting degree-$p$ terms are $Q_p\otimes_RP_q$, with augmentation $Q_0\otimes_RP_q\to N\otimes_RP_q$. [step 1.1, algebra]

3.1 Hence every augmented fixed-$q$ row is exact, on the correct right-module/left-module tensor convention. [step 2.1, algebra] ∎
