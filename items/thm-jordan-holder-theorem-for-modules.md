---
id: thm-jordan-holder-theorem-for-modules
kind: theorem
title: "Jordan–Hölder theorem for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-second-isomorphism-theorem-modules, thm-third-isomorphism-theorem-modules, thm-correspondence-theorem-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

[L3] If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$. ([[thm-third-isomorphism-theorem-modules]]).

[L4] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 Fix a composition series $0=M_0<\cdots<M_n=M$ and prove by induction on $n$ that it has the asserted comparison with every other composition series of $M$. We use simultaneously the elementary consequence that, for any $C\le M$, intersecting the fixed series with $C$ and deleting repetitions gives a composition series of $C$: each remaining factor embeds in the corresponding simple factor $M_i/M_{i-1}$ and is therefore simple. [L1, L2, L3, L4, given, algebra]

2.1 The case $n=0$ is $M=0$. For $n>0$, let $A=M_{n-1}$ and let $B$ be the penultimate term of a second series. If $A=B$, the induction hypothesis applied in $A$ matches all lower factors, and the common top factor finishes. [step 1.1, given]

3.1 Suppose $A\ne B$. Since $A$ and $B$ are maximal proper submodules, $A+B=M$. Put $C=A\cap B$. The second isomorphism theorem gives $$A/C\cong M/B,\qquad B/C\cong M/A,$$ so both quotients are simple. [L2, step 1.1, step 2.1, given, algebra]

4.1 By step 1.1, $C$ has a composition series. Appending $A$ gives a composition series of $A$ ending in $A/C$. Compare it with $0=M_0<\cdots<M_{n-1}=A$ using the induction hypothesis, whose fixed first series has length $n-1$. It follows that the series of $C$ has length $n-2$ and that its factors together with $A/C$ are exactly the factors below $M/A$ in the fixed series. [L3, L4, step 1.1, step 3.1, given]

5.1 Appending $B$ to the same series of $C$ gives a composition series of $B$ of length $n-1$. Using this as the fixed first series, the induction hypothesis compares it with the lower part of the second series. The isomorphisms in step 3.1 exchange the two top simple factors $A/C$ and $M/A$ with $M/B$ and $B/C$. Hence the two original series have length $n$ and the same factors up to permutation. This also covers $n=1$, when $C=0$. [step 2.1, step 3.1, step 4.1, given] ∎
