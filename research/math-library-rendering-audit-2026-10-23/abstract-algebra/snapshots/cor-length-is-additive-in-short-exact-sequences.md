---
id: cor-length-is-additive-in-short-exact-sequences
kind: corollary
title: "Module length is additive in short exact sequences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-holder-theorem-for-modules, def-composition-series-and-length-of-a-module, thm-correspondence-theorem-modules]
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

For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$ See [[thm-jordan-holder-theorem-for-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

[L2] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L3] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 If $N$ and $Q$ have composition series, lift the series of $Q$ along $M\to Q$ and splice it above the series of $N$. Correspondence identifies all lifted factors, so this is a composition series of $M$ with $\ell_R(N)+\ell_R(Q)$ factors. [L1, L2, L3, given, algebra]

1.2 Conversely, let $0=M_0<\cdots<M_n=M$ be a composition series. Put $N_i=M_i\cap N$ and let $Q_i$ be the image of $M_i$ in $Q$. For each $i$, the simple factor $M_i/M_{i-1}$ has submodule $N_i/N_{i-1}$ and corresponding quotient $Q_i/Q_{i-1}$; exactly one is that simple factor and the other is zero. Deleting repetitions therefore gives composition series of $N$ and $Q$, and their numbers of factors add to $n$. [L2, L3, given, algebra]

2.1 Jordan–Hölder makes all three lengths independent of the chosen series, so steps 1.1 and 1.2 prove both directions and the formula. If $N=0$, $Q=0$, or $M=0$, the relevant series is empty and the same count applies. [L1, L2, step 1.1, step 1.2, given] ∎
