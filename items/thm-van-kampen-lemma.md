---
id: thm-van-kampen-lemma
kind: theorem
title: "A word is trivial in a presented group exactly when it bounds a finite van Kampen diagram"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group, prop-normal-closure-is-products-of-conjugates, def-van-kampen-diagram-boundary-label-and-area, def-alphabet-words-and-reduction, thm-reduced-words-form-the-free-group]
proof_strategy: "direct"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (thm-van-kampen-lemma). No independent judge or whole-closure certification.
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
---

## Statement

Let $G=\langle X\mid R\rangle$ and let $w$ be a word on $X^{\pm1}$. Then $w$
represents the identity in $G$ if and only if $w$ is the boundary label of a
finite van Kampen diagram over $\langle X\mid R\rangle$.

## Facts & Assumptions

**Given:** A presentation $G=\langle X\mid R\rangle$ and a word $w$ on $X^{\pm1}$.

[L1] The boundary label of every van Kampen diagram is trivial in the presented group ([[lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]]).

[F1] A word lies in the normal closure of $R$ exactly when it is a finite product of conjugates of relators and their inverses ([[prop-normal-closure-is-products-of-conjugates]]).

[F2] The diagram definition reads the literal outer walk, including both traversals of a bridge, and permits a one-vertex zero-face diagram ([[def-van-kampen-diagram-boundary-label-and-area]]). Elementary free cancellations and their reverse insertions generate equality of words in the free group ([[def-alphabet-words-and-reduction]], [[thm-reduced-words-form-the-free-group]]).

## Proof

**Proof technique:** direct.

1.1 If $w$ is the boundary label of a finite van Kampen diagram, then [L1] says that $w$ represents the identity in $G$. [L1, given]

1.2 Conversely, suppose that $w$ represents the identity in $G$. Then its free-group element lies in the normal closure of $R$, so [F1] gives an equality **in the free group** $$[w]=\prod_{k=1}^m [u_k r_k^{\varepsilon_k} u_k^{-1}]$$ with $r_k\in R$ and $\varepsilon_k\in\{\pm1\}$. Choose finite word representatives $u_k$; let $v$ be the literal concatenation of the displayed conjugate words. Thus $v$ and $w$ are freely equivalent by [F2], but need not be identical strings. Factors whose specified relator word is empty, or freely trivial, may be omitted without changing the free-group product. [F1, F2, given]

1.3 We record the elementary boundary surgery that converts one free cancellation without creating a face. Suppose the literal outer word contains consecutive inverse letters, read on boundary edge occurrences $e:A\to B$ then $f:B\to C$. If these are the two traversals of one edge, they bound an exterior spur; erase it. Otherwise the edges are distinct. In a narrow collar of the exterior sector at $B$, fold $e$ against $f$, matching their labels and identifying $A$ with $C$. The face sides adjacent to these edges now lie on opposite sides of the folded edge. If $A$ and $C$ were distinct vertices, the collar surgery identifies two adjacent boundary sides of a planar disc neighbourhood of the complex; cutting open along the folded edge recovers that disc, so the surviving complex remains embedded, connected and simply connected. If $A=C$, the pair cuts off a closed planar petal (possibly pinched at $A$); its face-filled part becomes a sealed sphere under the fold. Delete that sealed part before drawing the surviving complex in the plane. Any outside component meets the petal only at $A$, since the sector between $e$ and $f$ at $B$ was exterior; hence deletion leaves the other outer-boundary edge occurrences and their order intact. This can lower, but cannot raise, the number of faces. In both cases the new literal outer word is the old one with exactly these adjacent letters deleted. If no edge remains, retain a base vertex. Conversely, to insert an inverse pair at a specified position, attach a new pendant edge in that exterior sector; its outward and return traversals insert precisely the two letters and no face. This also covers the two orientations of a cancellation and cut vertices. [F2, construct]


2.1 For each remaining factor take one polygonal face with the specified boundary word $r_k^{\varepsilon_k}$ and attach to a chosen face vertex a path labelled by the literal word $u_k$, from a common basepoint. Put these face-and-path complexes in disjoint planar sectors meeting only at that basepoint, in the order of the factors. Each path is a bridge traversed outward and back by the outer walk, so the resulting finite connected simply connected planar complex has literal boundary word $v$ and exactly $m$ faces. If $m=0$, use the one-vertex diagram with empty boundary word. A relator of length one gives a monogon; omitted empty or freely trivial relators need no face. [F2, step 1.2, construct]

3.1 By [F2] there is a finite sequence of free cancellations and reverse insertions carrying $v$ to the specified literal word $w$. Apply step 1.3 to each word in that sequence. The result is a finite van Kampen diagram with boundary label exactly $w$ and at most $m$ faces. This also covers a freely trivial $w$: start at the one-vertex diagram and insert the required exterior spurs. [F2, step 2.1, step 1.3]


4.1 Steps 1.1 and 3.1 prove both directions of the equivalence, for arbitrary specified relator words and the literal boundary-label convention. [step 1.1, step 3.1] ∎
