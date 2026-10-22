---
id: cex-knot-kt-32-boundary-case
kind: counterexample
title: "The next Jones–Wenzl recursion denominator vanishes at p=6"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - lem-jones-wenzl-idempotents-exist-below-root-order
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the counterexample is a finite calculation in the field of complex numbers."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 2–3"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, §5.3"
      url: "https://arxiv.org/pdf/1502.06845v1"
---

## Statement refuted

For every even $p\ge4$ and every primitive $2p$-th root $A$, the standard Jones–Wenzl recursion for the BHMV Kauffman bracket can be continued to every strand number by cancelling any zero quantum-integer denominator against a zero numerator.

## Statement references

[[def-sl-two-root-of-unity-skein-parameter|BHMV root and quantum-integer conventions]]

[[lem-jones-wenzl-idempotents-exist-below-root-order|The exact boundary of the standard recursion]]

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 2–3](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

## Facts & Assumptions

**Given:** The BHMV conventions at $p=6$, a primitive twelfth root $A$, and the standard recursive formula for Jones–Wenzl projectors.

[F1] [[def-sl-two-root-of-unity-skein-parameter]]: $r=p/2$, $\delta=-A^2-A^{-2}$, and $[1]=1$, $[2]=\delta$, $[3]=\delta[2]-[1]$.

[F2] [[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]: the next projector in the standard recursion uses the inverse of the next quantum integer.

## Counterexample

**Given:** Take $p=6$ and any primitive twelfth root $A$.

1.1 Here $r=3$, $q=-A^2$ has $q^2$ of order three, and $q+q^{-1}=-1$. Thus $\delta=-1$, $[2]=\delta=-1$, and $[3]=\delta[2]-[1]=(-1)(-1)-1=0$. [given, F1, algebra]

2.1 The recursion for $p_3$ requires division by $[3]$. Since $[3]=0$ in $\mathbb C$, no multiplicative inverse exists, so this recursive expression is undefined. In particular, cancellation cannot assign it a value. The calculation refutes the asserted universal continuation; it makes no claim that a projector at rank three cannot be constructed by a different method. [F2, step 1.1, algebra] ∎
