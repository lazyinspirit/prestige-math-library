---
id: def-small-cancellation-conditions-c-lambda-and-c-prime-lambda
kind: definition
title: "The small-cancellation conditions C(lambda) and C prime(lambda)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-piece-in-a-symmetrised-presentation]
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

Fix a real number $\lambda$ with $0<\lambda\le 1$, and let
$R^{\operatorname{sym}}$ be a symmetrised relator set.

The set $R^{\operatorname{sym}}$ satisfies **$C'(\lambda)$** when every piece
$p$ occurring in a relator $r\in R^{\operatorname{sym}}$ satisfies

$$
|p|<\lambda |r|.
$$

It satisfies **$C(\lambda)$** when, whenever a relator $r\in
R^{\operatorname{sym}}$ is written as a concatenation of pieces
$r=p_1\cdots p_n$, one has

$$
n>\frac1\lambda.
$$

Here piece means the notion fixed in
[[def-piece-in-a-symmetrised-presentation]]. The strict inequality in
$C'(\lambda)$ is part of the convention used on this page.
