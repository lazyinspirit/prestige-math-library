---
id: prop-thom-space-of-zero-and-trivial-bundles
kind: proposition
title: Thom spaces of zero and trivial bundles
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Trivial Thom spaces, printed pp.194–195"
---

## Statement

Naturally in $B$,
$$\operatorname{Th}(0_B)=B_+;\quad \operatorname{Th}(B\times\mathbb R^n)=B_+\wedge S^n=\Sigma^nB_+,$$
and the trivial disk/sphere pair is
$(B\times D^n,B\times S^{n-1})$.

## Facts & Assumptions

**Given:** A space $B$, the zero bundle, and the product bundle with its
standard Euclidean metric.

[F1] [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]] defines the
disk, sphere, and based quotient, including the empty-sphere convention in
rank zero.

## Proof

**Proof technique:** calculate the defining quotients.

1.1 In rank zero each fiber is the singleton zero vector, so [F1] gives $D(0_B)=B$ and $S(0_B)=\varnothing$.  By the based-quotient convention, $\operatorname{Th}(0_B)=B_+$. [F1]

1.2 For $B\times\mathbb R^n$ with the product metric, the norm depends only on the second coordinate, hence $(D,S)=(B\times D^n,B\times S^{n-1})$.  Collapsing the second subspace gives $(B\times D^n)/(B\times S^{n-1})\cong B_+\wedge(D^n/S^{n-1})=B_+\wedge S^n$. [F1]

2.1 By definition $B_+\wedge S^n=\Sigma^nB_+$.  Every displayed map sends $(b,v)$ by the identity formula and therefore commutes with pullback along a map $B'\to B$.  For $B=\varnothing$ both sides are the one-point based space; for $n=0$, $S^{-1}=\varnothing$ and step 1.2 reduces to step 1.1; for $n=1$ the boundary consists of the two endpoints.  Zero and unit radii and the quotient basepoint are preserved, and no choice is used. [F1, step 1.1, step 1.2] ∎
