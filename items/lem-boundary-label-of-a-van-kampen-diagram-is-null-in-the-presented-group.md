---
id: lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group
kind: lemma
title: "The boundary label of a van Kampen diagram is trivial in the presented group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-van-kampen-diagram-boundary-label-and-area, def-normal-closure, def-group-presentation]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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

Let $D$ be a van Kampen diagram over a presentation $\langle X\mid R\rangle$.
Then the boundary label of $D$ represents the identity in the presented group.

## Facts & Assumptions

**Given:** A van Kampen diagram $D$ over $\langle X\mid R\rangle$.

[F1] The presented group is the quotient of the free group on $X$ by the normal closure of $R$ ([[def-group-presentation]], [[def-normal-closure]]).

[L1] A van Kampen diagram is either the degenerate one-vertex diagram or a
finite planar disc complex whose 2-cells are labelled by cyclic conjugates of
relators and their inverses
([[def-van-kampen-diagram-boundary-label-and-area]]).

## Proof

**Proof technique:** direct.

1.1 If $D$ has area $0$, then [L1] forces $D$ to be the degenerate one-vertex diagram. Its boundary label is the empty word, so it represents the identity in the free group and therefore in the quotient group of [F1]. [F1, L1, given]

1.2 Assume that $D$ has positive area. Choose a base vertex on the outer boundary, a spanning tree in the $1$-skeleton, and a spanning tree in the dual graph rooted at the exterior face. Reading the 2-cells in an order compatible with the rooted dual tree gives the standard disc-shelling identity $$\operatorname{Lab}(\partial D)=\prod_{k=1}^m u_k r_k^{\varepsilon_k}u_k^{-1}$$ in the free group, where each $r_k\in R$, each $\varepsilon_k\in\{\pm1\}$, and the words $u_k$ are labels of paths from the base vertex to the corresponding cells. Interior edges cancel in opposite orientations, leaving exactly the outer boundary label. [L1, given, construct]

2.1 Every factor in step 1.2 lies in the normal closure of $R$. Hence the boundary label lies in that normal closure and represents the identity in the quotient group of [F1]. Together with step 1.1 this proves the claim in all cases. [F1, step 1.1, step 1.2] ∎
