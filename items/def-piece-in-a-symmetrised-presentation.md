---
id: def-piece-in-a-symmetrised-presentation
kind: definition
title: "A piece is a common initial segment occurring in two distinct places of a symmetrised relator set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetrisation-of-a-relator-set, def-cyclically-reduced-word]
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

Let $R^{\operatorname{sym}}$ be a symmetrised set of cyclically reduced words
([[def-symmetrisation-of-a-relator-set]], [[def-cyclically-reduced-word]]). A
nonempty reduced word $p$ is a **piece** when there are decompositions

$$
r=pu, \qquad s=pv,
$$

with $r,s\in R^{\operatorname{sym}}$, such that the two occurrences are
**distinct**: the ordered pairs $(r,u)$ and $(s,v)$ are not equal.

Equivalently, $p$ is an initial segment shared by two distinct symmetrised
occurrences of relators. The empty word is not counted as a piece on this page.
