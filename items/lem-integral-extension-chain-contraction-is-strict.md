---
id: lem-integral-extension-chain-contraction-is-strict
kind: lemma
title: "Strict prime chains contract strictly under integral extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-incomparability-for-integral-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $f:A\to B$ be an integral ring map, and let
$$
\mathfrak q_0\subsetneq\mathfrak q_1\subsetneq\cdots\subsetneq\mathfrak q_n
$$
be a strict chain of prime ideals of $B$. Then
$$
f^{-1}(\mathfrak q_0)\subsetneq f^{-1}(\mathfrak q_1)\subsetneq\cdots\subsetneq f^{-1}(\mathfrak q_n)
$$
is a strict chain of prime ideals of $A$.

## Facts & Assumptions

**Given:** An integral ring map $f:A\to B$ and a strict prime chain $\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_n$ in $B$.

[L1] Under an integral map, comparable primes with the same contraction are equal ([[thm-incomparability-for-integral-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Contraction is inclusion-preserving, so $f^{-1}(\mathfrak q_0)\subseteq\cdots\subseteq f^{-1}(\mathfrak q_n)$. [given]

2.1 Suppose two adjacent contractions were equal: $f^{-1}(\mathfrak q_i)=f^{-1}(\mathfrak q_{i+1})$ for some $i<n$. Then the comparable primes $\mathfrak q_i\subsetneq\mathfrak q_{i+1}$ would have the same contraction, contradicting [L1]. Therefore every adjacent contraction is strict. [L1, step 1.1, given]

3.1 Since every adjacent inclusion is strict, the whole contracted chain is strict. [step 2.1] ∎
