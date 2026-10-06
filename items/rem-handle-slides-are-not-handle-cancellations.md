---
id: rem-handle-slides-are-not-handle-cancellations
kind: remark
title: "Handle slides are not handle cancellations"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-geometric-cancelling-handle-pair, thm-handle-cancellation, def-handle-slide-of-one-k-handle-over-another, lem-handle-slides-preserve-the-relative-diffeomorphism-type, lem-handle-slides-act-by-elementary-basis-change-on-handle-chains, cor-relative-homology-of-a-single-handle-pair, lem-a-handle-decomposition-gives-a-relative-cw-complex, thm-relative-cellular-homology-computes-relative-singular-homology]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (cancellation, creation and handle addition as distinct modifications)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Ch. 1 §1.1, printed pp. 6-7 (Euler-characteristic remark after the Cancellation Lemma)"
verification:
  precheck: pass
---

## Remark

A handle slide changes the attaching data of one handle and the handle-chain basis by an elementary operation, but it changes the number of handles of no index; a handle cancellation removes two handles of consecutive indices and decreases the handle counts in those two indices by one each. In particular a slide is not a cancellation, the algebraic effect of a slide (an elementary row or column operation on the intersection matrix) is not the removal of a unit entry from that matrix, and the two moves serve different purposes: slides perform basis changes, cancellation reduces the number of handles. Handles can never be removed one at a time, because the Euler characteristic of the pair is independent of the presentation.

For the numerical obstruction, the relative CW model of [[lem-a-handle-decomposition-gives-a-relative-cw-complex]] has one cell per handle. Its finite relative rational cellular complex computes relative homology by [[thm-relative-cellular-homology-computes-relative-singular-homology]]. Write each chain dimension as the sum of the incoming boundary rank, the homology dimension, and the outgoing boundary rank; in the alternating sum the boundary ranks cancel. Thus $\chi(W,\partial_0W)=\sum_q(-1)^q p_q$ is independent of the presentation. Removing just one handle changes this integer by $\pm1$. Balancing that count is a necessary numerical condition, not a geometric cancellation criterion. A slide leaves every $p_q$ unchanged.
