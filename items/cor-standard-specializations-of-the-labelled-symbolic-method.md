---
id: cor-standard-specializations-of-the-labelled-symbolic-method
kind: corollary
title: "Standard labelled specializations give involutions, ordered Bell numbers, and partitions without singletons"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-labelled-symbolic-method-rules-for-exponential-generating-functions, thm-exponential-formula-for-set-partitions-and-bell-numbers, thm-vertical-egfs-for-the-stirling-triangles]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.8"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
pipeline_run: null
---

## Statement

Let $I_n$ be the number of involutions of $[n]$, let $F_n$ be the number of
ordered set partitions of $[n]$, and let $N_n$ be the number of set partitions
of $[n]$ having no singleton block. The labelled symbolic method gives the
following exponential generating functions:

1. involutions:
   $$\sum_{n\geq0}I_n\frac{x^n}{n!}=\exp\!\left(x+\frac{x^2}{2}\right);$$
2. ordered Bell numbers:
   $$\sum_{n\geq0}F_n\frac{x^n}{n!}=\frac{1}{2-e^x};$$
3. set partitions with no singleton blocks:
   $$\sum_{n\geq0}N_n\frac{x^n}{n!}=\exp(e^x-1-x).$$

## Facts & Assumptions

**Given:** The labelled symbolic rules and the set-partition formulas already
proved on this page.

## Proof

**Proof technique:** direct.

1.1 An involution is a labelled set of fixed points and transpositions, so its EGF is $\exp(x+x^2/2)$. [given]

1.2 An ordered Bell structure is a sequence of nonempty labelled sets. The EGF of one nonempty labelled set is $e^x-1$, so the sequence rule gives $1/(1-(e^x-1))=1/(2-e^x)$. [given]

1.3 A partition with no singleton blocks is a labelled set of blocks of size at least $2$. Subtracting the singleton contribution $x$ from the basic block EGF $e^x-1$ leaves $e^x-1-x$, and the set rule gives $\exp(e^x-1-x)$. [given]

2.1 These are exactly the three claimed specializations. [step 1.1, step 1.2, step 1.3] ∎
