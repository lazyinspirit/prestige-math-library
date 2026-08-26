---
id: cor-finitely-generated-nilpotent-groups-have-polynomial-growth
kind: corollary
title: "Finitely generated nilpotent groups have polynomial growth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth, rem-bass-guivarch-growth-degree-formula]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

Every finitely generated nilpotent group has polynomial growth.

## Facts & Assumptions

**Given:** A finitely generated nilpotent group $G$.

[A1] Bass-Guivarch says that $\beta_{G,S}(n) \simeq n^{D(G)}$ for every finite generating set $S$.

[L2] Polynomial growth means that $\beta_G \preccurlyeq n^d$ for some integer $d \ge 0$ ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], the growth function of $G$ is equivalent to the polynomial $n^{D(G)}$. In particular it is bounded above, in the growth-comparison sense, by a polynomial. [A1]

2.1 Therefore [L2] makes $G$ a group of polynomial growth. [L2, step 1.1] ∎
