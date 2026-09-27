---
id: thm-diagram-area-agrees-with-algebraic-relator-area
kind: theorem
title: "Minimal van Kampen area agrees with minimal algebraic relator area"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-van-kampen-lemma, def-van-kampen-diagram-boundary-label-and-area, lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group, def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, lem-minimal-algebraic-relator-area-exists]
proof_strategy: "direct"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (thm-diagram-area-agrees-with-algebraic-relator-area). No independent judge or whole-closure certification.
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

For a null word in a finite presentation, the minimal area of a van Kampen
diagram equals its minimal algebraic relator area.

## Facts & Assumptions

**Given:** A finite presentation and a word $w$ representing the identity.

[L1] Van Kampen diagrams exist exactly for null words in the presented group ([[thm-van-kampen-lemma]]). Its converse constructs a diagram from an $m$-factor expression with at most $m$ faces and the specified literal boundary word.

[L2] A diagram is a finite connected simply connected planar complex whose literal outer walk counts bridges twice ([[def-van-kampen-diagram-boundary-label-and-area]]); the free-edge face collapse in [[lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]] removes one face and its unique boundary edge while preserving connectedness and simple connectedness.

[F1] Algebraic relator area is the minimum number of conjugates of defining relators needed to express the word, when such a minimum exists ([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]], [[lem-minimal-algebraic-relator-area-exists]]).

## Proof

**Proof technique:** direct.

1.1 Let $D$ be any van Kampen diagram for $w$ with $m$ faces. We show by induction on $m$ that $[w]$ is a product of at most $m$ conjugates of defining relators or their inverses in the free group. For $m=0$, $D$ is a tree by the graph argument in [L2]'s cited proof; its outer walk freely reduces to the empty word, including the one-vertex case. [L2, F1, given]

1.2 Conversely, let $$[w]=\prod_{k=1}^m [u_k r_k^{\varepsilon_k} u_k^{-1}]$$ be an algebraic expression with $m$ minimal as in [F1]. The converse construction in [L1] produces a diagram whose **literal** boundary word is $w$ and whose face count is at most $m$. Therefore the minimal diagram area is at most the algebraic relator area. [F1, L1, construct]

2.1 Suppose $m>0$. A generic ray from an interior point of the finite union of face closures to infinity crosses edge interiors and avoids vertices. At its last exit from that union it crosses an edge $e$ with one face on its inner side and the unbounded complementary region on its other side, so $e$ occurs once in the outer walk. Collapse that face across $e$ as in [L2], obtaining a planar simply connected diagram $D'$ with $m-1$ faces. Write the old outer word from the fixed basepoint as $aeb$, with $e$ denoting its oriented label, and let $p$ be the complementary face-boundary walk joining the same edge endpoints. The new outer walk reads $apb$ (including any bridge traversals). Consequently $[aeb][apb]^{-1}=[aep^{-1}a^{-1}]$, a conjugate of the cyclic face label, hence of a defining relator or its inverse. By induction $[apb]$ needs at most $m-1$ factors, so $[w]$ needs at most $m$. Thus the algebraic area is at most every diagram area. [L2, F1, step 1.1, construct]

3.1 Steps 1.1 and 2.1 give one inequality between the two minima and step 1.2 gives the reverse inequality. Therefore the two minimal areas are equal. [step 1.1, step 2.1, step 1.2] ∎
