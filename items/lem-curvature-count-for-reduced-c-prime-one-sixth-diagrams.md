---
id: lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams
kind: lemma
title: "Reduced C prime(1/6) diagrams satisfy the standard combinatorial curvature count"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-small-cancellation-conditions-c-lambda-and-c-prime-lambda,
       def-reduced-van-kampen-diagram,
       def-van-kampen-diagram-boundary-label-and-area,
       def-sc-toolkit-symmetrised-relators-and-pieces,
       def-sc-toolkit-labelled-planar-disc-diagram,
       def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram,
       lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction,
       lem-boundary-spur-or-at-most-three-shell-from-curvature]
proof_strategy: "direct"
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: locally-repaired
    date: 2026-09-10
    scope: "Replaced the external shell-existence premise with the earlier published arbitrary-diagram curvature theorem after checking its full proof and exact conventions. Local checks only; no independent judgment or whole-closure certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
    - title: "Adrien Abgrall and Zachary Munro, On residual finiteness of graphs of free groups with cyclic edge groups, Lemma 2.12"
      url: "https://arxiv.org/pdf/2410.10152"
---

## Statement

Let $D$ be a reduced van Kampen diagram with at least one $2$-cell over a
symmetrised $C'(1/6)$ presentation, and assume its outer boundary word is freely
reduced and nontrivial. Then some boundary face of $D$ is a shell whose inner
boundary is a concatenation of at most three maximal internal arcs.

## Facts & Assumptions

**Given:** A reduced van Kampen diagram $D$ with at least one $2$-cell over a symmetrised $C'(1/6)$ presentation, with freely reduced nontrivial outer boundary word.

[L0] A van Kampen diagram is a finite connected simply connected planar combinatorial $2$-complex. It need not be a closed disc: maximal disc subdiagrams may be joined at cut vertices or by graph parts ([[def-van-kampen-diagram-boundary-label-and-area]]).

[F1] The relator set satisfies the strict metric condition $C'(1/6)$ ([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

[L1] The diagram is reduced in the sense that no cancellable adjacent face pair occurs ([[def-reduced-van-kampen-diagram]]).

[F2] The published toolkit uses the same finite planar, connected, simply connected diagrams and occurrence-counted boundary walks. Its pieces are common nonempty initial segments of distinct full symmetrised words; equal rotations are not distinct words. ([[def-sc-toolkit-labelled-planar-disc-diagram]], [[def-sc-toolkit-symmetrised-relators-and-pieces]])

[F3] Arc reduction suppresses degree-two vertices while retaining literal word lengths and incidence multiplicities; a whole circle retains one marked vertex. ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]])

[F4] Every non-point reduced $C'(1/6)$ diagram has a boundary spur or an exposed face with one exterior arc and at most three internal arcs. A one-face disc is a zero-shell. A nonsingular multi-face disc has at least two distinct such shells, allowing a choice whose exterior arc avoids any prescribed boundary point internally. For an end disc block use its attachment vertex, so the arc is contiguous in the full outer walk. This is the arbitrary-given-diagram conclusion proved by the local curvature argument, not merely existence of another diagram for the same word. ([[lem-boundary-spur-or-at-most-three-shell-from-curvature]])

[F5] The disc and bridge blocks of a diagram form a finite tree. An end bridge has a spur tip; an end disc meets the remainder at only its attachment vertex. ([[lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction]])

## Proof

**Proof technique:** direct.

1.1 Interpret $D$ with the toolkit conventions. For a fixed prefix $p$, a literal word has a unique suffix after $p$, so the distinct pairs $(r,u)$ and $(s,v)$ in the original piece definition are distinct exactly when $r\ne s$. Thus the piece conditions agree. Reversing one face orientation across a shared edge also identifies the two definitions of a cancellable face pair. The diagrams and their outer walks are identical, not replacements by minimum-area diagrams. If the symmetrised set contains the empty word, discard it: it labels no polygonal face and contains no nonempty piece, so this changes none of the hypotheses on $D$. [F1, F2, L0, L1]

2.1 Choose an end disc block using [F5]. If the block tree has just one block, it is a disc because $D$ has a face. Otherwise a finite tree has at least two ends, as seen from the endpoints of a longest simple path. An end bridge gives a spur, whose incoming and outgoing boundary occurrences are inverse. Freely reducedness excludes such a pair unless it straddles the chosen start of the literal boundary word. Only the spur at that starting vertex can do this, so there is at most one end bridge. Some other end is therefore a disc block. This argument permits a whisker at the starting vertex; freely reduced does not mean cyclically reduced. [given, F5, step 1.1]

3.1 Apply [F3] and [F4] to this block, keeping the original word lengths. The block has the same face words and cancellation condition as in $D$, hence the same strict piece bounds. A one-face block is a zero-shell. For a multi-face block, [F4] supplies a shell with at most three internal arcs whose exterior arc avoids its attachment vertex internally. If the block is all of $D$, mark the boundary word's starting vertex instead and use the same two-shell argument. No minimum-area replacement is made. [F1, F3, F4, F5, step 1.1, step 2.1]

4.1 Expand the suppressed vertices. The selected face remains the same face of $D$; its exterior arc is contiguous in the full outer walk by the attachment qualification in [F4]. Other blocks attach only at the selected block's attachment vertex, not along an edge, so its internal arcs remain internal arcs of $D$. That vertex is not internal to any such arc. Expansion therefore gives at most three maximal internal arcs of $D$, as required. In the zero-shell case the full face circuit is the contiguous excursion at the attachment. [F3, F4, F5, step 3.1] ∎
