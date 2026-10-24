---
id: cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable
kind: corollary
title: "If two commuting endomorphisms are diagonalisable, then every finite linear combination of products of their powers is diagonalisable; in particular, their sum and product are diagonalisable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Corollary 5.5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

Let $S,T$ be commuting diagonalisable endomorphisms. Every endomorphism of the form

$$\sum_{j<m}c_jS^{a_j}T^{b_j}$$

with $m,a_j,b_j\in\mathbb N$ and $c_j\in F$ is diagonalisable. In particular, $S+T$ and $ST$ are diagonalisable.

## Facts & Assumptions

**Given:** Commuting diagonalisable endomorphisms $S,T$ and the displayed finite polynomial expression.

[L1] A pairwise commuting family of diagonalisable endomorphisms has a common eigenbasis ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a basis in which both $S$ and $T$ are diagonal. Every power, product of powers, and finite linear combination in the Statement remains diagonal in that same basis. [L1, algebra]

2.1 Thus every displayed expression is diagonalisable. Taking the expressions $S+T$ and $ST$ gives the stated special cases; the empty sum and zero space cause no exception. [step 1.1] ∎
