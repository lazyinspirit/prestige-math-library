---
id: "cex-zero-lefschetz-number-does-not-imply-no-fixed-points"
kind: "counterexample"
title: "Zero Lefschetz number does not imply absence of fixed points"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-lefschetz-number-of-a-finite-cw-self-map","cor-homology-of-spheres"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §2.C
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

The identity $f=\mathrm{id}_{S^1}$ has $L(f)=0$, but every point of $S^1$ is fixed. Thus $L(f)=0$ does not imply that $f$ has no fixed point. This example requires no AC.

## Facts & Assumptions

[F1] [[def-lefschetz-number-of-a-finite-cw-self-map]] defines $L(f)$ as the finite alternating sum of rational homology traces.

[F2] [[cor-homology-of-spheres]] gives $H_0(S^1;\mathbb Q)=H_1(S^1;\mathbb Q)=\mathbb Q$ and zero homology in every higher degree.

## Proof

**Given:** The unit circle $S^1\subset\mathbb R^2$ and its identity map $f$; the circle has the finite CW structure with one vertex and one edge attached at both endpoints to that vertex.

1.1 The map $f$ is continuous, since the inverse image of every open set is itself. Its map on every singular chain is the identity: composing a singular simplex with $f$ changes nothing. Consequently its map on each homology group is the identity. By [F2], the only nonzero rational homology groups are the two one-dimensional groups in degrees zero and one. Their identity matrices are each $(1)$, with trace $1$. All other homology endomorphisms are on zero spaces and have trace zero. [F2, given]

2.1 Substitution into [F1] gives $$L(f)=(-1)^0\cdot1+(-1)^1\cdot1=1-1=0.$$ On the other hand $f(x)=x$ for every $x\in S^1$, and $(1,0)\in S^1$ is an explicit fixed point. Thus the premise of the proposed implication holds and its conclusion fails. The fixed-point set is the whole circle. [F1, step 1.1]

3.1 The witness is nonempty and connected, so the failure is not due to an empty space or a disconnected-component convention. The zero value in step 2.1 is cancellation of two traces equal to one, not the vanishing of the homology groups. The sole one-cell's two endpoints are attached to the same vertex, giving a valid nonregular CW structure; the calculation uses singular homology and includes degenerate singular simplices. No limiting, relative, orientation or homotopy-endpoint choice is involved, and no AC is used. The fixed-point theorem asserts the different implication from nonzero Lefschetz number to a fixed point, so this example does not contradict it. [F1, F2, step 1.1, step 2.1] ∎
