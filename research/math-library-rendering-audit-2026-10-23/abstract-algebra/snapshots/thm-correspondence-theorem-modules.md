---
id: thm-correspondence-theorem-modules
kind: theorem
title: "Correspondence theorem for submodules of a quotient module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-module, thm-quotient-module-universal-property, thm-third-isomorphism-theorem-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. See [[def-quotient-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

[L2] Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy $N\subseteq\ker f$. There is a unique module homomorphism $$\bar f:M/N\longrightarrow P$$ such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$. ([[thm-quotient-module-universal-property]]).

[L3] If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$ ([[thm-third-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 Inverse image and quotient give mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. [L1, L2, L3, given, algebra]

2.1 If $P\le M/N$, then $\pi(\pi^{-1}P)=P$ by surjectivity of $\pi$; if $L\le M$ contains $N$, then $\pi^{-1}(L/N)=L$. Direct calculation with inverse images gives preservation of sums and intersections, while [L3] identifies successive quotients. This proves the stated claim. [L3, step 1.1, given, algebra] ∎
