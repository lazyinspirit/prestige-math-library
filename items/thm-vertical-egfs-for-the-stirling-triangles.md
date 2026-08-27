---
id: thm-vertical-egfs-for-the-stirling-triangles
kind: theorem
title: "The two Stirling triangles have the expected vertical exponential generating functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-stirling-second-kind-and-bell-number, def-signed-and-signless-stirling-first-kind, thm-labelled-symbolic-method-rules-for-exponential-generating-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §§3.5-3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

For every fixed $k\in\mathbb{N}$,

$$\sum_{n\geq0}S(n,k)\frac{x^n}{n!}=\frac{(e^x-1)^k}{k!},$$

and

$$\sum_{n\geq0}c(n,k)\frac{x^n}{n!}=\frac{1}{k!}\left(\log\frac{1}{1-x}\right)^k.$$

## Facts & Assumptions

**Given:** The second-kind and first-kind definitions and the labelled symbolic
rules of
[[thm-labelled-symbolic-method-rules-for-exponential-generating-functions]].

## Proof

**Proof technique:** direct.

1.1 A partition of $[n]$ into exactly $k$ blocks is a labelled set of exactly $k$ nonempty labelled sets. The EGF of a nonempty labelled set of atoms is $e^x-1$, and taking an unordered set of exactly $k$ such blocks contributes the factor $1/k!$. Therefore $$\sum_{n\geq0}S(n,k)\frac{x^n}{n!}=\frac{(e^x-1)^k}{k!}.$$ [given]

1.2 A permutation with exactly $k$ cycles is a labelled set of exactly $k$ labelled cycles of atoms. The EGF of one labelled cycle is $\log(1/(1-x))$, so the same labelled-set rule gives $$\sum_{n\geq0}c(n,k)\frac{x^n}{n!} =\frac{1}{k!}\left(\log\frac{1}{1-x}\right)^k.$$ [given]

2.1 Steps 1.1 and 1.2 are exactly the two claimed vertical exponential generating functions. [step 1.1, step 1.2] ∎
