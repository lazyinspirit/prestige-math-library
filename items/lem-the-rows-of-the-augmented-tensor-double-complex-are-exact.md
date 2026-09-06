---
id: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact
title: "The augmented rows of the tensor double complex are exact"
kind: lemma
status: published
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
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $Q_\bullet\twoheadrightarrow N$ and $P_\bullet\twoheadrightarrow M$ are projective resolutions, every augmented row $Q_p\otimes_RP_\bullet\to Q_p\otimes_RM$ is exact.

## Proof

**Given:** a fixed projective right module $Q_p$ and the augmented resolution $P_\bullet\to M$.

1.1 The module $Q_p$ is flat as a right module, so $Q_p\otimes_R-$ preserves the exact augmented complex $P_\bullet\to M$. [given]

2.1 Its degree-$q$ terms are exactly $Q_p\otimes_RP_q$, and its augmentation is $Q_p\otimes_RP_0\to Q_p\otimes_RM$. [step 1.1, algebra]

3.1 Thus the row indexed by $p$ is exact, including the augmentation; this is the claimed augmented-row condition. [step 2.1, algebra] ∎
