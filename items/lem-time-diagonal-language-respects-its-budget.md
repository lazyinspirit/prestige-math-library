---
id: lem-time-diagonal-language-respects-its-budget
kind: lemma
title: "The time-diagonal language respects its budget"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, lem-effective-enumeration-of-clocked-machines, def-time-and-space-constructible-function, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $f,g:\mathbb N\to\mathbb N$ be time constructible, eventually at least
$n$, with $f(n)\log f(n)=o(g(n))$. There is a deterministic language
$D\in\mathrm{DTIME}(g)$ with the following property. For every fixed
clocked pair $(M,c)$, all sufficiently long valid padded codes $w$ of that
pair satisfy: $D(w)$ is the complement of the result of simulating $M(w)$
for at most $c f(|w|)$ steps, with inner clock expiry interpreted as rejection.

## Facts & Assumptions

**Given:** the stated $f,g$ and fixed halting constructors for their binary
values. Use the padded pair encoding of [[lem-effective-enumeration-of-clocked-machines]].

## Proof

**Proof technique:** direct.

1.1 Define one fixed multitape procedure $R$ on $w$: decode $(M,c)$, reject malformed codes, construct $c f(n)$ for $n=|w|$, and run the clocked universal simulator on $M$ with simulated input equal to the entire word $w$. If the inner simulation returns, output the opposite of its result. This is a fixed interpreter; its decoding, clock construction, and universal-simulator transitions are all actual transitions of $R$. [given, construct]

2.1 The diagonal decider first computes $g(n)$ and constructs a unary timer of that length. The constructor costs $O(n+g(n))$. Converting its binary output to unary also costs $O(g(n)+\log(g(n)+2))$: repeatedly decrement a least-significant-bit-first counter and emit a mark, charging the traversed carry/borrow runs over the whole countdown. Their total is linear in the initial counter value. Rewind the timer, then execute $R$ with its fixed tapes and one additional timer tape. Each simulated transition of this fixed $R$ advances the timer once; at its end output a default rejection unless $R$ has already returned. The fixed transition table is incorporated directly, so this outer clock adds constant overhead per transition, not another universal-simulation factor. [step 1.1, construct]

3.1 On every input, including malformed descriptions and arbitrarily large encoded multipliers, the outer clock permits at most $g(n)$ transitions of $R$. All input-dependent decoding and inner-clock work are inside that clock. Thus total time is $O(n+g(n))=O(g(n))$, after treating finitely many lengths below the eventual floor separately. [step 2.1, algebra]

4.1 Fix $(M,c)$. On its valid padded codes, decoding and copying the full simulated input cost $O_{M,c}(n)$; constructing the inner clock costs $O_c(n+f(n))$. By [[def-efficient-universal-simulation-with-clock]], simulation costs $O_M(n+c f(n)\log(c f(n)+2))$. For this fixed pair the combined runtime of $R$ is $O_{M,c}(n+f(n)\log(f(n)+2))=o(g(n))$. It therefore finishes before the outer timer on every sufficiently long code of that pair. Arbitrarily long such codes exist by the enumeration, and the returned answer is the required complement. [step 3.1, algebra] ∎
