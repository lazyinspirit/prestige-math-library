---
id: cor-dimension-preserved-by-integral-extensions
kind: corollary
title: "Injective integral extensions preserve Krull dimension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-krull-dimension-of-a-ring, thm-lying-over, cor-integral-extension-lifts-finite-prime-chains, lem-integral-extension-chain-contraction-is-strict]
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
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercises (14.4)-(14.6)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $A\subseteq B$ be an injective integral extension of nonzero commutative rings. Then $\dim A=\dim B$.

## Facts & Assumptions

**Given:** An injective integral extension of nonzero commutative rings $A\subseteq B$.

[L1] The Krull dimension of a nonzero commutative ring is the supremum of the lengths of its strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

[L2] Assuming the Axiom of Choice, every prime of $A$ has a prime above it in $B$ under an integral extension ([[thm-lying-over]]).

[L3] Assuming the Axiom of Choice, every finite prime chain in $A$ lifts to one in $B$ once its first prime has been chosen ([[cor-integral-extension-lifts-finite-prime-chains]]).

[L4] Every strict prime chain in $B$ contracts to a strict chain in $A$ under an integral map ([[lem-integral-extension-chain-contraction-is-strict]]).

## Proof

**Proof technique:** direct.

1.1 Both dimensions in the statement are defined by [L1] because $A$ and $B$ are nonzero. [L1, given]

1.2 Let $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$ be any strict prime chain in $A$. By [L2], choose a prime $\mathfrak q_0$ of $B$ over $\mathfrak p_0$. Then [L3] gives primes $\mathfrak q_0\subseteq\cdots\subseteq\mathfrak q_n$ of $B$ over the whole chain. These inclusions are strict, because $\mathfrak q_i=\mathfrak q_{i+1}$ would force their contractions $\mathfrak p_i$ and $\mathfrak p_{i+1}$ to agree. Hence $B$ has a strict prime chain of length $n$, so $\dim B\ge \dim A$. [L1, L2, L3, given, algebra]

1.3 Conversely, every strict prime chain in $B$ contracts to a strict prime chain of the same length in $A$ by [L4]. Therefore $\dim A\ge \dim B$. [L1, L4, given]

2.1 The two inequalities of steps 1.2 and 1.3 imply $\dim A=\dim B$. [step 1.2, step 1.3] ∎
