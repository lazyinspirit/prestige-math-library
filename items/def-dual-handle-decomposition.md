---
id: def-dual-handle-decomposition
kind: definition
title: "Dual handle decomposition"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-handle-decomposition-relative-to-the-incoming-boundary, def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "definition"
---

## Definition

Let $(W;M_0,M_1)$ be a smooth cobordism triad and let a finite handle
decomposition of $W$ relative to $M_0$ be given, with handles of indices
$k_1,\dots,k_r$ in that order and handle bodies
$D^{k_i}\times D^{n-k_i}$
([[def-handle-decomposition-relative-to-the-incoming-boundary]],
[[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]). The **dual
decomposition** is the following handle presentation of the reversed triad
$(W;M_1,M_0)$ relative to $M_1$: its handle bodies are the same products, read
with the two disk factors exchanged as $D^{n-k_i}\times D^{k_i}$, and they are
attached in the reverse order, the $(r+1-i)$-th handle of the dual presentation
being the $i$-th handle of the original one with the factors exchanged.

Under this reading a $k$-handle becomes an $(n-k)$-handle, the attaching region
$S^{k-1}\times D^{n-k}$ of the original handle is the outgoing region
$D^{n-k}\times S^{k-1}$ of the dual handle, and the attaching sphere
$S^{k-1}\times\{0\}$ of the original handle is the belt sphere
$\{0\}\times S^{k-1}$ of the dual handle; conversely the belt sphere of the
original handle becomes the attaching sphere of the dual handle. In particular
the attaching sphere of a dual handle is the belt sphere of the original
handle, and conversely.

Endpoint cases are included: a $0$-handle of the original presentation becomes
an $n$-handle of the dual presentation and conversely, and an $n$-handle
becomes a $0$-handle. The dual decomposition is a presentation of the same
manifold $W$; the assertion that it is the decomposition induced by negating a
Morse function adapted to the original triad is a theorem, not part of this
definition.
