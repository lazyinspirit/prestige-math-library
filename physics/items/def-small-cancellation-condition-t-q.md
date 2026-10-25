---
id: def-small-cancellation-condition-t-q
kind: definition
title: "The condition T(q) forbids short cycles of pieces in the relator graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetrisation-of-a-relator-set]
verification:
  audited: 2026-09-01
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

## Definition

Let $q\ge 3$ be an integer and let $R^{\operatorname{sym}}$ be a symmetrised
relator set ([[def-symmetrisation-of-a-relator-set]]). The set
$R^{\operatorname{sym}}$ satisfies **$T(q)$** when the following holds:
whenever $r_1,\dots,r_h\in R^{\operatorname{sym}}$ with $3\le h<q$ and no
adjacent cyclic pair $r_i,r_{i+1}$ is inverse to one another, at least one
cyclic product $r_ir_{i+1}$ is freely reduced as written. Here indices are
read modulo $h$: $r_{h+1}:=r_1$, and both clauses range over
$i\in\{1,\dots,h\}$.

So $T(q)$ rules out short cyclic chains of relators in which every neighbour
pair cancels. It is the piece-cycle condition complementary to the metric
$C$-conditions.
