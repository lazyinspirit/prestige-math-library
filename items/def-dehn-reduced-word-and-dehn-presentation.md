---
id: def-dehn-reduced-word-and-dehn-presentation
kind: definition
title: "Dehn-reduced words and Dehn presentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetrisation-of-a-relator-set, def-cyclically-reduced-word]
verification:
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

Let $R^{\operatorname{sym}}$ be a symmetrised relator set
([[def-symmetrisation-of-a-relator-set]], [[def-cyclically-reduced-word]]).
A freely reduced word $w$ is **Dehn-reduced** when no factorisation

$$
r=uv
$$

with $r\in R^{\operatorname{sym}}$ has $u$ appearing as a subword of $w$ and
$|u|>|v|$.

A finite presentation is a **Dehn presentation** when every nonempty freely
reduced word representing the identity fails to be Dehn-reduced. Equivalently,
every such word contains a relator subword longer than half of the relator.
