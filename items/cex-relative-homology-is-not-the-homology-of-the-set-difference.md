---
id: cex-relative-homology-is-not-the-homology-of-the-set-difference
kind: counterexample
title: "Relative homology is not homology of the set difference"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-relative-homology-of-a-disk-and-its-boundary, prop-singular-homology-is-invariant-under-deformation-retracts]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1 exercises"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement refuted

Relative homology is not, in general, the homology of a set difference. With
$G=\mathbb Z$ and $n\ge2$, compare $(D^n,S^{n-1})$ with
$D^n\setminus S^{n-1}$.

## Counterexample

**Given:** $n\ge2$ and the indicated disk-boundary pair.

**Proof technique:** direct.

1.1 The relative disk computation gives $H_n(D^n,S^{n-1};\mathbb Z)\cong\mathbb Z$. [given, construct]

2.1 The set difference is the open ball, which is contractible, so its $n$th homology is zero. These unequal groups disprove the proposed identification. [step 1.1, algebra] ∎
