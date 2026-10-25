---
id: thm-third-isomorphism-theorem-modules
kind: theorem
title: "Third isomorphism theorem for modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-isomorphism-theorem-modules, def-quotient-module, thm-quotient-module-universal-property]
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

If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$ See [[thm-first-isomorphism-theorem-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every module homomorphism $f:M\to N$, there is a module isomorphism $$M/\ker f\ \cong\ \operatorname{im}f,$$ given by $m+\ker f\mapsto f(m)$. ([[thm-first-isomorphism-theorem-modules]]).

[L2] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

[L3] Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy $N\subseteq\ker f$. There is a unique module homomorphism $$\bar f:M/N\longrightarrow P$$ such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$. ([[thm-quotient-module-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 For $N\le L\le M$, send $m+N$ to $m+L$. [L1, L2, L3, given, algebra]

2.1 If $m+N=m'+N$, then $m-m'\in N\le L$, so the images modulo $L$ agree. The map is surjective, and its kernel consists exactly of the cosets $m+N$ with $m\in L$, namely $L/N$; the first isomorphism theorem gives the displayed isomorphism. [step 1.1, given, algebra]

3.1 The two coincident cases are admitted by $N\le L\le M$ and hold. For $N=L$ the submodule $L/N$ is zero and the isomorphism reads $(M/N)/0\cong M/N=M/L$; for $L=M$ it is $L/N=M/N$ and the isomorphism reads $(M/N)/(M/N)=0\cong M/M=0$. This proves the stated claim. [step 2.1, given, algebra] ∎
