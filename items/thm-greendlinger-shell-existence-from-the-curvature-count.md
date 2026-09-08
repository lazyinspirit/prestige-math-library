---
id: thm-greendlinger-shell-existence-from-the-curvature-count
kind: theorem
title: "Greendlinger shell existence from the curvature count"
status: draft
origin: pipeline
deps: [lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, lem-boundary-spur-or-at-most-three-shell-from-curvature, lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces]
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan Corollary 3.5.8, with singular-diagram obligation carried from the preceding lemma"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Statement

Let $w$ be a nonempty freely reduced null word over a symmetrised $C'(1/6)$ presentation. The original linear word $w$ contains a contiguous subword $s$ that is an initial segment of a symmetrised defining relator $r$, with $|s|>|r|/2$.

## Facts & Assumptions

**Given:** Such a word $w$ and a minimum-area diagram for it.

[F1] A non-point reduced diagram has a spur or a shell with at most three internal arcs, with its exterior arc contiguous in the full walk; zero-shells are allowed ([[lem-boundary-spur-or-at-most-three-shell-from-curvature]]).

[F2] An internal arc in a reduced diagram has length less than $|r|/6$ on each adjacent relator $r$ ([[lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces]]).

[F3] Every null word has a minimum-area diagram, and every such diagram is reduced ([[lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction]]).

## Proof

1.1 The diagram exists and is reduced by [F3]. Root its finite block tree at the boundary basepoint (or the block containing that point). A terminal bridge away from the root gives a spur excursion wholly inside the linear word, hence consecutive inverse letters, impossible since $w$ is freely reduced. If there are no faces, the diagram is a tree; any nontrivial finite rooted tree has such a terminal spur away from the root. Since $w$ is nonempty, the diagram is not a point. There is therefore a terminal disc block, with no attachments away from its parent attachment. When the root block is the only block, it is a disc and the chosen basepoint is the sole point to avoid inside the exterior arc. [given, F1, F3]

2.1 For a multi-face terminal block, choose one of the two shells supplied by [F1] whose exterior arc does not contain the attachment in its interior. If this is the root disc, avoid the basepoint instead. At most one of the two distinct exterior arcs can contain that specified point internally. The chosen arc therefore appears contiguously in the original outer boundary walk. For a one-face terminal block, the entire face boundary is a contiguous excursion from the attachment back to itself; when it is the root disc, start the full face reading at the given basepoint, so it is the original linear word. This also handles conjugating bridges leading from the basepoint to a single disc. [step 1.1, F1]

3.1 For a shell with $i\in\{1,2,3\}$ internal arcs, their total length $t$ satisfies $t<i|r|/6\le|r|/2$ by [F2]. Its exterior arc has length $|r|-t>|r|/2$. For a zero-shell it has length $|r|>|r|/2$, since relators are nonempty. Step 2.1 places this segment in the original linear word. Choose the orientation and cyclic conjugate of the face relator that starts with this segment; symmetrisation ensures that this is again a defining relator. This proves the stated initial-segment conclusion. [step 2.1, F2, algebra] ∎
