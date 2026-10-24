---
id: thm-harnack-convergence-principle
kind: theorem
title: "Harnack convergence principle"
status: published
origin: pipeline
deps: [def-countable-choice, cor-harnack-inequality-on-compact-subsets, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-harnack-convergence-principle). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§11 Theorem 26, p.19"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u_1\le u_2\le\cdots$ be real harmonic functions on $\Omega$. Either $u_j(x)\to+\infty$ for every $x\in\Omega$, or the sequence converges uniformly on each compact subset of $\Omega$ to a harmonic function.

## Facts & Assumptions

**Given:** Countable Choice and the objects and hypotheses in the statement ([[def-countable-choice]]).

[F1] Under Countable Choice, on any nonempty compact subset of a domain, nonnegative harmonic functions have supremum bounded by a fixed constant times their infimum. ([[cor-harnack-inequality-on-compact-subsets]]).

[F2] Under Countable Choice, a locally uniform limit of harmonic functions on an open set is harmonic. ([[thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 If no point has a bounded-above scalar sequence $u_j(x)$, each scalar sequence is increasing and unbounded above, hence tends to $+\infty$. Otherwise fix $a\in\Omega$ at which it is bounded above; there $u_j(a)$ converges to a finite real number. [given]

2.1 For any nonempty compact $K\subset\Omega$, apply compact Harnack on $K\cup\{a\}$ to the harmonic nonnegative difference $u_j-u_i$, $j\ge i$. It yields $\sup_K|u_j-u_i|\le C(u_j(a)-u_i(a))$. The right side tends to zero as $i,j\to\infty$, uniformly in those indices. [F1, step 1.1]

3.1 The real completeness property gives a pointwise limit, and the uniform Cauchy bound proves convergence uniformly on $K$. Empty compact sets impose no condition. Since $K$ was arbitrary, convergence is locally uniform and the harmonic-limit theorem makes the limit harmonic. [F2, step 2.1] ∎
