---
id: cex-a-subspace-stable-under-one-generator-but-not-a-subrepresentation
kind: counterexample
title: Stability under one generator is not enough
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-subrepresentation-quotient-representation-and-intertwiner]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, standard sl_2 representation in §11.4, printed pp. 65–69"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement refuted

A subspace stable under one Lie-algebra element is automatically a
subrepresentation.

## Facts & Assumptions

**Given:** The standard two-dimensional $\mathfrak{sl}_2$-module over a
characteristic-zero field, with basis $v_+,v_-$ satisfying
$ev_+=0$ and $fv_+=v_-$.

[L1] A subrepresentation must be stable under every element of the Lie algebra
([[def-subrepresentation-quotient-representation-and-intertwiner]]).

## Counterexample

**Proof technique:** direct.

1.1 The line $kv_+$ is stable under $e$, since $ev_+=0\in kv_+$. [given, algebra]

2.1 It is not stable under $f$, because $fv_+=v_-$ and $v_-$ is linearly independent from $v_+$. By [L1], $kv_+$ is therefore not a subrepresentation. [step 1.1, L1, algebra]

3.1 This line is stable under one named generator but not under the whole Lie algebra, refuting the statement. [step 2.1] ∎
