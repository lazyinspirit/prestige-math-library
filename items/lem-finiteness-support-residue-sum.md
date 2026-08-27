---
id: lem-finiteness-support-residue-sum
kind: lemma
title: "Only finitely many singularities contribute to the residue sum of an admissible cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-cycle-for-residue-theorem,
       cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace,
       thm-poles-meromorphic-function-are-discrete-and-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $f$ be meromorphic on an open set $\Omega$, let $S\subseteq\Omega$ be its pole
set, and let $\Gamma$ be admissible for the residue theorem in $\Omega$. Then

$\{a\in S:n(\Gamma,a)\ne0\}$

is a finite set.

## Facts & Assumptions

**Given:** A meromorphic $f$ on an open set $\Omega$, its pole set $S$, and an admissible cycle $\Gamma$ in $\Omega$.

[L1] The index of a cycle is locally constant off its trace and vanishes sufficiently far from the trace ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L2] The pole set of a meromorphic function is closed and discrete in the ambient open set ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

## Proof

**Proof technique:** direct.

1.1 Let $U:=\{z\in\mathbb C\setminus\Gamma^\ast:n(\Gamma,z)\ne0\}.$ By the local constancy part of [L1], $U$ is open in $\mathbb C\setminus\Gamma^\ast$. The same local constancy also shows that if $z\notin\Gamma^\ast\cup U$, then a whole neighbourhood of $z$ lies outside $U$, so every limit point of $U$ outside the trace already lies in $U$. Therefore $\overline U\subseteq U\cup\Gamma^\ast$. [L1]

2.1 By the far-from-the-trace clause of [L1], the set $U$ is bounded. Since the trace $\Gamma^\ast$ is compact, step 1.1 makes $\overline U$ a bounded closed subset of $\mathbb C$, hence compact. [step 1.1, L1]

3.1 Because $\Gamma$ is admissible, its trace avoids the pole set. Thus [given, step 2.1, L2] ∎ $S\cap\overline U=S\cap U=\{a\in S:n(\Gamma,a)\ne0\}.$ The right-hand set is a closed discrete subset of the compact set $\overline U$ by, and every closed discrete subset of a compact metric space is finite. So only finitely many poles have nonzero index. [L2]
