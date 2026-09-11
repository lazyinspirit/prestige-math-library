---
id: "def-probabilistic-polynomial-time-machine-interface"
kind: "definition"
title: "Probabilistic polynomial time machine interface"
status: published
origin: "pipeline"
deps: ["def-polynomial-time-verifier-and-reduction-interface", "def-independence-of-finite-random-variables"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Arora–Barak §7.1, Definitions 7.1 and 7.4"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
proof_strategy: "direct"
---

## Definition

A probabilistic Turing machine (PTM) is a fixed multitape machine with two total ordinary transition tables. At each nonhalting transition a fresh independent fair bit selects the table. It is polynomial time if one fixed integer polynomial p bounds the number of transitions on every random branch on every input x by $p(|x|)$. This is a worst-case branch bound, using [[def-polynomial-time-verifier-and-reduction-interface]], not an expected-time bound.

For an input of length n, probabilities may be defined on the finite space $\Omega_n=\{0,1\}^{p(n)}$, giving every word mass $2^{-p(n)}$. A deterministic simulator uses bit j for transition j and ignores unused suffix bits after halting. Acceptance probability is the sum of masses of words giving acceptance. Independence has the finite-variable meaning of [[def-independence-of-finite-random-variables]]. The finite probability space is not itself storage charged to the machine.

## Facts & Assumptions

**Given:** A PTM with the displayed all-branch bound p.

[F1] Mutual independence means that every prescribed finite set of coordinate values has joint probability equal to the product of its marginals ([[def-independence-of-finite-random-variables]]).

## Verification

1.1 A fixed prefix of j bits occurs in $2^{p(n)-j}$ words, hence has mass $2^{-j}$. More generally, prescribing any j distinct bit positions leaves $p(n)-j$ free coordinates and has the same count. Each marginal is one half, and the joint probabilities factor, exactly as in F1. The empty prescription has mass one. [F1, given]

2.1 For a fixed supplied word, the simulator and the PTM take the same first table, and agreement through transition j makes them use the same table and configuration at the next transition. Thus they agree up to the halt by induction. A branch halting after j steps corresponds to precisely the words with that consumed prefix, of total mass $2^{-j}$; prefixes for distinct terminal branches are disjoint. Summing their masses proves agreement with fresh fair-bit semantics, even when the stopping time depends on previous bits. Unused suffixes have been counted, not assumed independent of a stopping rule. For p(n)=0 the space is the singleton containing the empty word; in a model with nonhalting start such a bound is impossible on that input, which is consistent with the definition. [step 1.1, given] ∎
