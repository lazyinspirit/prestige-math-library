---
id: "ex-summable-exceptional-measures-in-the-kolmogorov-induction"
kind: "example"
title: "Summable exceptional measures in the kolmogorov induction"
deps: ["thm-first-borel-cantelli"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: FR-4K exceptional-set leaf
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
generation:
  role: example
---

## Example

If measurable subsets $E_j$ of the normalized torus satisfy $m(E_j)\le2^{-j}$ for every $j\ge1$, then $m(\limsup_jE_j)=0$. Thus almost every point belongs to only finitely many exceptional sets.

## Facts & Assumptions

[F1] A sequence of measurable sets with summable measures has null limsup, without independence [[thm-first-borel-cantelli]].

## Verification

**Given:** The measurable sets and geometric measure bounds in the example.

1.1 Finite geometric cancellation gives $\sum_{j=1}^J2^{-j}=1-2^{-J}$, hence $\sum_{j\ge1}m(E_j)\le1<\infty$. More precisely, the tail satisfies $\sum_{j\ge J}m(E_j)\le2^{1-J}$. [given]

2.1 F1 applies to these measurable sets and the finite sum proved in step 1.1; it gives $m(\bigcap_J\bigcup_{j\ge J}E_j)=0$. Equivalently, outside this null intersection, some J has the point outside every $E_j$ for $j\ge J$, which is the asserted eventual good-set property. The proof of F1 bounds the limsup measure by each tail, here explicitly $2^{1-J}\to0$. No independence or choice assumption on the supplied sequence is needed. [F1, step 1.1] ∎
