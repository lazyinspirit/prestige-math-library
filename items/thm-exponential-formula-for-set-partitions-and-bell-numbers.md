---
id: thm-exponential-formula-for-set-partitions-and-bell-numbers
kind: theorem
title: "The exponential formula gives the Bell-number generating function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-stirling-second-kind-and-bell-number, thm-labelled-symbolic-method-rules-for-exponential-generating-functions]
aliases: []
landmark: true
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
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.4"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

Let $u$ be a second formal indeterminate. In
$\mathbb Q[u]\llbracket x\rrbracket$, the block-count-refined exponential
generating function of set partitions is

$$\sum_{n\geq0}\sum_{k=0}^{n}S(n,k)u^k\frac{x^n}{n!}=\exp\!\bigl(u(e^x-1)\bigr).$$

In particular,

$$\sum_{n\geq0}B_n\frac{x^n}{n!}=\exp(e^x-1).$$

## Facts & Assumptions

**Given:** The second-kind definition of
[[def-stirling-second-kind-and-bell-number]] and the labelled symbolic rules of
[[thm-labelled-symbolic-method-rules-for-exponential-generating-functions]].

## Proof

**Proof technique:** direct.

1.1 A set partition is a labelled set of nonempty labelled sets. Marking each block by a factor of $u$ replaces the basic block EGF $e^x-1$ by $u(e^x-1)$. Applying the labelled-set rule therefore gives $$\sum_{n\geq0}\sum_{k=0}^{n}S(n,k)u^k\frac{x^n}{n!} =\exp\!\bigl(u(e^x-1)\bigr).$$ [given]

2.1 Setting $u=1$ sums over all block counts and therefore replaces $\sum_{k=0}^{n}S(n,k)$ by $B_n$. This yields $\sum_{n\geq0}B_nx^n/n!=\exp(e^x-1)$. [step 1.1, given]

3.1 Steps 1.1 and 2.1 prove the refined formula and its Bell-number specialization. [step 1.1, step 2.1] ∎
