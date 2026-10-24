---
id: thm-mayer-vietoris-sequence-in-singular-homology
kind: theorem
title: "Mayer–Vietoris sequence in singular homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence, thm-cover-small-singular-chains-compute-singular-homology, thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For an open cover $X=U\cup V$, the sequence
$$\cdots\to H_n(U\cap V;G)\to H_n(U;G)\oplus H_n(V;G)\to H_n(X;G)\xrightarrow{\delta}H_{n-1}(U\cap V;G)\to\cdots$$
is exact, with middle map $(u,v)\mapsto u+v$.

## Facts & Assumptions

**Given:** An open cover $X=U\cup V$.

## Proof

**Proof technique:** direct.

1.1 Apply the homological long exact sequence to the short exact sequence of the preceding theorem. [given, construct]

2.1 The cover-small complex has the same homology as $X$, so replacing its homology term identifies that long exact sequence with the displayed one. [step 1.1, algebra] ∎
