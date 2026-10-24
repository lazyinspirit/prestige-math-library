---
id: def-symmetrisation-of-a-relator-set
kind: definition
title: "The symmetrisation of a relator set closes under inverses and cyclic conjugates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cyclically-reduced-word, def-group-presentation]
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

Let $G=\langle X \mid R\rangle$ be a presentation in which every relator in
$R$ is cyclically reduced ([[def-cyclically-reduced-word]],
[[def-group-presentation]]). The **symmetrisation** of $R$ is the set
$R^{\operatorname{sym}}$ consisting of all cyclic conjugates of every relator
$r\in R$ and of every inverse word $r^{-1}$.

Thus a reduced word $s$ lies in $R^{\operatorname{sym}}$ exactly when there is
an $r\in R$ such that $s$ is a cyclic conjugate of $r$ or of $r^{-1}$. By
construction $R^{\operatorname{sym}}$ is closed under taking inverses and under
cyclic conjugation.
