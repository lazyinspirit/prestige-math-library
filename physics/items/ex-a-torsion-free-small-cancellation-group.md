---
id: ex-a-torsion-free-small-cancellation-group
kind: example
title: "A strict C prime(1/6) presentation that is a free group of rank six"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-small-cancellation-conditions-c-lambda-and-c-prime-lambda, def-piece-in-a-symmetrised-presentation, def-symmetrisation-of-a-relator-set, def-tietze-transformations, prop-tietze-transformations-preserve-presented-groups, def-group-presentation, thm-free-groups-are-torsion-free]
proof_strategy: "direct"
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Local author repair by explicit Tietze elimination and published free-group theorem; no independent judge or whole-closure certification."
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

## Example

The presentation

$$ G=\langle x_1,\dots,x_7 \mid x_1x_2x_3x_4x_5x_6x_7\rangle $$

is a strict $C'(1/6)$ presentation with no proper-power relator. In fact
$G$ is isomorphic to the free group on $x_1,\ldots,x_6$, and is torsion-free.

## Facts & Assumptions

**Given:** The displayed one-relator presentation.

[L1] Symmetrisation includes cyclic conjugates and inverse cyclic conjugates; a piece is a nonempty common prefix of distinct symmetrised relators; strict $C'(1/6)$ bounds every piece by one sixth of its relator length ([[def-symmetrisation-of-a-relator-set]], [[def-piece-in-a-symmetrised-presentation]], [[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

[L2] Redundant-relator moves and legal dictionary-generator deletions preserve the presented group ([[def-tietze-transformations]], [[prop-tietze-transformations-preserve-presented-groups]]). A presentation with no relators is the free group on its generators ([[def-group-presentation]]).

[L3] Free groups are torsion-free ([[thm-free-groups-are-torsion-free]]).

## Verification

**Proof technique:** direct.

1.1 Write $r=x_1\cdots x_7$. Its seven positive cyclic conjugates have distinct first letters, as do its seven negative inverse conjugates; no positive first letter equals a negative one. Thus no distinct symmetrised relators share a nonempty prefix, so there are no pieces and strict $C'(1/6)$ holds vacuously. The cyclic word is not a proper power: each generator occurs exactly once, whereas a repetition at least twice would repeat each occurring letter. [given, L1]

2.1 Add the inverse relator $r^{-1}$ as a redundant relator and delete $r$, since each is a consequence of the other. Now $r^{-1}=x_7^{-1}w$ with $w=(x_1\cdots x_6)^{-1}$, which contains no $x_7$. There are no other relators, so the legal inverse dictionary move deletes $x_7$ and $r^{-1}$. The resulting presentation is $\langle x_1,\ldots,x_6\mid\varnothing\rangle$. Hence [L2] identifies $G$ with the free group on these six generators. [L2, step 1.1]

3.1 By [L3] that free group has no nonidentity element of finite order. An isomorphism preserves powers and the identity, so $G$ is torsion-free. [L3, step 2.1] ∎
