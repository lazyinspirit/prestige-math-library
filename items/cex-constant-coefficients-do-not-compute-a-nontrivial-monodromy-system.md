---
id: cex-constant-coefficients-do-not-compute-a-nontrivial-monodromy-system
kind: counterexample
title: Constant coefficients miss monodromy
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cellular-chains-compute-homology-with-local-coefficients]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, Exercise 1, p.336
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

The rank-one integral local system on $S^1$ with monodromy $-1$ has $H_1=0$ and $H_0\cong\mathbb Z/2$, whereas the constant integral system has $H_1\cong H_0\cong\mathbb Z$. Thus replacing a nontrivial local system by its abstract stalk as a constant coefficient group does not compute its homology.

## Facts & Assumptions

**Given:** The two integral local systems on $S^1$, with monodromy $T=-1$ and $T=1$.

[F1] [[thm-cellular-chains-compute-homology-with-local-coefficients]] computes
local homology from the lifted cellular incidence matrix.

## Proof

**Proof technique:** direct.

1.1 Give $S^1$ one vertex and one oriented edge. If $g$ denotes the positive loop, a lift of the edge has boundary $g\widetilde v-\widetilde v$. Under the published right-chain convention this is $\widetilde v\cdot(g^{-1}-1)$, while the corresponding left fiber action of $g^{-1}$ is the specified monodromy $T$. Thus [F1] gives the two-term complex $0\to\mathbb Z\xrightarrow{T-1}\mathbb Z\to0$. For $T=-1$, its differential is $-2$, with zero kernel and cokernel $\mathbb Z/2$. For $T=1$, its differential is zero, so both degree-one and degree-zero groups are $\mathbb Z$. [F1]

2.1 The two systems have isomorphic stalk $\mathbb Z$ at every point but different loop transport and different homology. Hence stalk data without monodromy cannot replace a local system. The sign of the differential could be $+2$ after reversing the chosen cell, with the same kernel and cokernel. No other degrees occur and no AC is used. [F1, step 1.1] ∎
