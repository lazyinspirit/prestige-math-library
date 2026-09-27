---
id: cor-kunneth-when-one-homology-family-is-flat
title: "Kunneth when one homology family is flat"
kind: corollary
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-axiom-of-choice"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume the Axiom of Choice. Under the free-chain and finite-diagonal Kunneth hypotheses, if every $H_pC$ is flat then cross product is a natural isomorphism.

## Proof

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), free PID-complexes $C,D$ with finite diagonals, and flatness of every $H_pC$.

1.1 Under Choice, the free cycle-boundary presentation $0\to B_qD\to Z_qD\to H_qD\to0$ is a supplied projective resolution by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]]. Choice implies dependent choice: for a serial relation, choose one successor for each state using Choice and iterate that successor by recursion on $\mathbb N$. Thus the cited flatness/Tor criterion applies to this resolution and gives $\operatorname{Tor}_1^R(H_pC,H_qD)=0$ for every pair $(p,q)$. [given]

2.1 The Kunneth sequence in [[thm-kunneth-theorem-for-free-complexes-over-a-pid]] has a finite direct sum of these correction terms in each degree. It is zero by step 1.1, so exactness makes the natural cross-product injection surjective as well. [step 1.1, given] ∎
