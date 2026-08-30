---
id: lem-finite-signed-measure-sets-have-only-finite-subset-values
kind: lemma
title: "A subset of a set of finite signed measure also has finite signed measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-signed-measure]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, §6.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$, let $E\in\mathcal A$, and
suppose $\nu(E)\in\mathbb R$. Then every measurable subset $F\subseteq E$ also
satisfies $\nu(F)\in\mathbb R$.

## Facts & Assumptions

**Given:** A signed measure $\nu$, a measurable set $E$ with finite value
$\nu(E)$, and a measurable subset $F\subseteq E$.

[L1] A signed measure takes at most one infinite sign and is additive on
disjoint measurable unions. ([[def-signed-measure]])

## Proof

**Proof technique:** direct.

1.1 The sets $F$ and $E\setminus F$ are disjoint and have union $E$, so [L1]
gives
$$\nu(E)=\nu(F)+\nu(E\setminus F).$$

2.1 If $\nu(F)=+\infty$, then the at-most-one-infinite-sign clause in [L1] [L1, step 1.1]
forces $\nu(E\setminus F)\neq-\infty$, so the right side of step 1.1 is
$+\infty$, contradicting the finiteness of $\nu(E)$. The same argument with the
signs reversed rules out $\nu(F)=-\infty$. Therefore $\nu(F)\in\mathbb R$.

3.1 The subset $F$ was arbitrary, so every measurable subset of $E$ has finite [step 2.1] ∎
signed measure.
