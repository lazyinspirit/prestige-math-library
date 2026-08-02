---
id: cex-peano-unequal-mixed-partials
kind: counterexample
title: "Peano's function has unequal mixed partials at the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ck-and-multi-index-notation-in-several-variables, thm-clairaut-schwarz-mixed-partials]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement refuted

Refuted: existence of both mixed partial derivatives at a point forces them to be equal.

## Facts & Assumptions

**Given:** $f(x,y)=xy(x^2-y^2)/(x^2+y^2)$ away from $(0,0)$ and $f(0,0)=0$.

[L1] Clairaut--Schwarz requires continuous second partial derivatives on a neighbourhood, not merely their existence at one point ([[thm-clairaut-schwarz-mixed-partials]]).

## Counterexample

## Proof

**Proof technique:** direct.

1.1 For $y\ne0$, $f(0,y)=0$, so $f_y(0,0)=0$; for $x\ne0$, $f_y(x,0)=x$, hence $f_{xy}(0,0)=1$. [given, algebra]

1.2 For $x\ne0$, $f(x,0)=0$, so $f_x(0,0)=0$; for $y\ne0$, $f_x(0,y)=-y$, hence $f_{yx}(0,0)=-1$. [given, algebra]

2.1 Thus the two mixed partials exist and differ, while the continuity hypothesis in [L1] fails. [step 1.1, step 1.2, L1] ∎
