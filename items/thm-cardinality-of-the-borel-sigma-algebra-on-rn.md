---
id: thm-cardinality-of-the-borel-sigma-algebra-on-rn
kind: theorem
title: "Assuming the Axiom of Choice, the Borel sigma-algebra on R^n has cardinality continuum for n at least one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cardinality-bound-for-generated-sigma-algebras, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-rationals-countable, lem-cardinal-operations-are-well-defined, thm-schroder-bernstein, def-axiom-of-choice, thm-well-ordering-theorem, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, thm-hessenberg]
aliases: []
landmark: true
short: "$|\\mathcal B(\\mathbb R^n)|=\\mathfrak c$"
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
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.16"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "D. H. Fremlin, Measure Theory, Chapter 56, Section 561A and result 567E(b)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. For every $n\in\mathbb N$ with $n\ge1$,

$$|\mathcal B(\mathbb R^n)|=\mathfrak c:=|\mathcal P(\mathbb N)|.$$

## Facts & Assumptions

**Given:** The Axiom of Choice and a natural number $n\ge1$.

[L1] The rationals are countably infinite: $\mathbb Q\approx\mathbb N$ ([[thm-rationals-countable]]).

[L2] Rational open boxes generate $\mathcal B(\mathbb R^n)$, and closed subsets of $\mathbb R^n$ are Borel ([[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]).

[L3] An infinite family of cardinality $\kappa$ generates at most $\kappa^{\aleph_0}$ sets under the Axiom of Choice ([[thm-cardinality-bound-for-generated-sigma-algebras]]).

[L4] Equinumerous sets have equinumerous power sets, and function spaces are transported by bijections ([[lem-cardinal-operations-are-well-defined]]).

[L5] If each of two sets injects into the other, then they are equinumerous ([[thm-schroder-bernstein]]).

[L6] Under the Axiom of Choice, $2^{\aleph_0}=|\mathcal P(\mathbb N)|=\mathfrak c$ ([[thm-cardinal-power-set-and-cantor]]).

[L7] Under the Axiom of Choice every set can be well ordered, so the cardinalities needed here and the exponent $\aleph_0^{\aleph_0}$ are defined ([[thm-well-ordering-theorem]], [[def-cardinal-arithmetic]]).

[L8] The product of the countably infinite cardinal with itself satisfies $\aleph_0\otimes\aleph_0=\aleph_0$ ([[thm-hessenberg]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and repeated use of the product identity in [L8], endpoint tuples show that the rational open boxes form an at most countable family. It is infinite because $q\mapsto(q,q+1)^n$ injects $\mathbb Q$ into that family when $n\ge1$. Thus it is countably infinite, and [L2] and [L3] give $|\mathcal B(\mathbb R^n)|\le\aleph_0^{\aleph_0}$. [L1, L2, L3, L8, construct]

1.2 Characteristic functions inject $\mathcal P(\mathbb N)$ into $\mathbb N^{\mathbb N}$. Conversely, the graph map injects $\mathbb N^{\mathbb N}$ into $\mathcal P(\mathbb N\times\mathbb N)$, which is equinumerous with $\mathcal P(\mathbb N)$ by [L4] and [L8]. Hence [L5] and [L6] give $\aleph_0^{\aleph_0}=\mathfrak c$. [L4, L5, L6, L7, L8]

1.3 For $S\subseteq\mathbb N$, let $E_k(S)$ be the singleton $\{(k,0,\ldots,0)\}$ when $k\in S$ and the empty set otherwise. The point is defined because $n\ge1$, each $E_k(S)$ is closed and hence Borel by [L2], and $\Psi(S):=\bigcup_{k\in\mathbb N}E_k(S)$ is Borel. Distinct subsets give distinct unions, so $\Psi$ injects $\mathcal P(\mathbb N)$ into $\mathcal B(\mathbb R^n)$. [L2, construct]

2.1 Steps 1.1 and 1.2 give an injection $\mathcal B(\mathbb R^n)\to\mathcal P(\mathbb N)$, while step 1.3 gives the reverse injection. Applying [L5] proves equality with $\mathfrak c$. [step 1.1, step 1.2, step 1.3, L5] ∎
