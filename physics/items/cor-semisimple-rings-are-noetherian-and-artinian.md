---
id: cor-semisimple-rings-are-noetherian-and-artinian
kind: corollary
title: "Semisimple rings are left and right Noetherian and Artinian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules, thm-composition-series-iff-noetherian-and-artinian, cor-left-and-right-semisimplicity-agree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

Every semisimple ring is left and right Noetherian and left and right Artinian. See [[def-semisimple-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

[L2] Every finitely generated semisimple module is a finite direct sum of simple modules. ([[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]).

[L3] A module with a composition series is both Noetherian and Artinian. The zero module has the empty composition series. ([[thm-composition-series-iff-noetherian-and-artinian]]).

[L4] A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module. ([[cor-left-and-right-semisimplicity-agree]]).

## Proof

**Proof technique:** direct.

1.1 The left regular module is cyclic and semisimple, hence a finite direct sum of simples and therefore has finite length. [L1, L2, L3, L4, given, algebra]

2.1 The finite simple-factor chain in step 1.1 is a composition series, so [L3] gives left Noetherian and Artinian. [L3, step 1.1, given]

3.1 By [L4], the right regular module is also semisimple; repeating steps 1.1–2.1 for right modules gives right Noetherian and Artinian. The zero ring is covered by its zero regular modules. [L1, L2, L3, L4, step 1.1, step 2.1, given] ∎
