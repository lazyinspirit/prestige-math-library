---
id: lem-projective-modules-are-flat-over-an-arbitrary-ring
title: "Projective left and right modules are flat over an arbitrary ring"
kind: lemma
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "thm-projective-module-characterizations", "thm-tensor-products-commute-with-arbitrary-direct-sums"]
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

Every projective left or right module over an arbitrary ring is flat on its appropriate side.

## Proof

**Given:** a projective left $R$-module $P$; the right-module case is symmetric.

1.1 Choose a free module $F$ and a module $P^\prime$ with $F\cong P\oplus P^\prime$. [given]

2.1 For every exact sequence of right modules, tensoring with $F$ is a direct sum of copies of that sequence and is exact; tensoring with $P$ is a direct summand of this exact complex. [step 1.1, algebra]

3.1 A direct summand of an exact complex is exact, so $-\otimes_RP$ is exact and $P$ is flat.  The same direct-summand argument proves the right-handed statement. [step 2.1, algebra] ∎
