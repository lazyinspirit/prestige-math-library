---
id: thm-chain-conditions-in-short-exact-sequences
kind: theorem
title: "Noetherian and Artinian conditions are each exact in short exact sequences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-module, def-artinian-module, thm-equivalent-characterizations-of-noetherian-modules, thm-equivalent-characterizations-of-artinian-modules, thm-second-isomorphism-theorem-modules, thm-correspondence-theorem-modules, def-exact-and-short-exact-sequences-of-modules]
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
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

In a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

[L2] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

[L3] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

[L4] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

[L5] A short exact sequence is an exact sequence $$0\longrightarrow N\xrightarrow{i}M\xrightarrow{p}Q\longrightarrow0;$$ thus $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$. ([[def-exact-and-short-exact-sequences-of-modules]]).

[L6] A module is Noetherian if and only if every ascending chain of submodules stabilizes. ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L7] A module is Artinian if and only if every descending chain of submodules stabilizes. ([[thm-equivalent-characterizations-of-artinian-modules]]).

## Proof

**Proof technique:** direct.

1.1 Identify $N$ with its image in $M$. A chain in $N$ is a chain in $M$, and the correspondence theorem lifts every chain in $Q=M/N$ to a chain of submodules of $M$ containing $N$; hence both ACC and DCC pass from $M$ to $N$ and $Q$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Conversely, for a chain $(M_i)$ in $M$, the chains $(M_i\cap N)$ and $((M_i+N)/N)$ stabilize when $N$ and $Q$ have the relevant chain condition. If $M_i\subseteq M_j$ are beyond both stabilization indices and $x\in M_j$, equality of the images gives $y\in M_i$ with $x-y\in N$; equality of the intersections then puts $x-y\in M_i$, so $x\in M_i$. The same argument with the inclusions reversed handles descending chains. [step 1.1, given, algebra]

3.1 Thus $M$ has ACC exactly when $N$ and $Q$ do, and it has DCC exactly when $N$ and $Q$ do. Facts [L6] and [L7] convert these chain statements into the asserted Noetherian and Artinian equivalences. [L6, L7, step 1.1, step 2.1] ∎
