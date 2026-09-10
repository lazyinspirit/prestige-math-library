---
id: lem-finite-cw-basepoints-have-explicit-homotopy-extension
kind: lemma
title: Finite cw basepoints have explicit homotopy extension
deps: ["def-cofibration-and-homotopy-extension-property", "lem-pushouts-and-products-preserve-the-cofibrations-used-here", "def-cell-attachment-by-a-characteristic-map"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §4 p.45, applied to finite cell attachments
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If v is a vertex of a finite CW complex X, then $\{v\}\hookrightarrow X$ is an unbased cofibration. This conclusion requires no arbitrary-index choice principle.

## Facts & Assumptions

[F1] Unbased HEP asks for extension of each compatible initial map and vertex homotopy. [[def-cofibration-and-homotopy-extension-property]]

[F2] The disk boundary has an explicit global cylinder retraction, and quotient homotopies glue. [[lem-pushouts-and-products-preserve-the-cofibrations-used-here]]

[F3] A cell attachment is the indicated disk-boundary pushout. [[def-cell-attachment-by-a-characteristic-map]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Given $f:X\to Z$ and a path $h(v,t)$ starting at f(v), define the homotopy on the finite zero-skeleton by h on v and by the constant f-value at every other vertex. Each summand is a point, so the finite disjoint-union topology makes it continuous and it extends the required vertex data. [F1, F3]

2.1 At an attached m-cell pull back f along its characteristic map on $D^m\times\{0\}$ and pull back the already defined homotopy along its attaching map on $S^{m-1}\times I$. The two agree at time zero. Compose this pasted map with the explicit retraction $R(x,t)=(\lambda x,2+\lambda(t-2))$, $\lambda=1/\max(1-t/2,\|x\|)$ supplied and checked in F2. It extends the required data over the whole disk cylinder. Quotient times I is quotient as in F2, so the extension descends with the existing skeleton homotopy. [F2, F3, step 1.1]

3.1 Process the finitely many cells in nondecreasing dimension, applying step 2.1 at each attachment. This yields a continuous homotopy on X with initial value f and the prescribed path at v, proving HEP. A zero-dimensional complex is already treated by step 1.1. Only finitely many cells and the displayed extension formula are used; no choice of infinitely many extensions or arbitrary-CW weak-topology argument occurs. [F1, F2, F3, step 1.1, step 2.1] ∎
