---
id: thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero
kind: theorem
title: "A signed or complex measure that is both absolutely continuous and singular with respect to the same positive measure is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-concentrated-on-a-measurable-set, def-absolutely-continuous-with-respect-to-a-positive-measure, def-mutually-singular-measures]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.34"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Lemma 6.26"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\mu$ be a positive measure and let $\nu$ be a signed measure or a complex measure on the same measurable space. If $\nu\ll\mu$ and $\nu\perp\mu$, then $\nu=0$.

## Facts & Assumptions

**Given:** A positive measure $\mu$ and a signed or complex measure $\nu$ with $\nu\ll\mu$ and $\nu\perp\mu$.

[L1] Mutual singularity provides measurable sets $P,N$ with $P\sqcup N=X$, every measurable subset of $N$ having $\mu$-value $0$, and every measurable subset of $P$ having $\nu$-value $0$. ([[def-mutually-singular-measures]])

[L2] Absolute continuity means that every measurable $\mu$-null set has $\nu$-value $0$. ([[def-absolutely-continuous-with-respect-to-a-positive-measure]])

## Proof

**Proof technique:** direct.

1.1 Choose measurable sets $P,N$ as in [L1]. Then every measurable subset of $P$ has $\nu$-value $0$. [L1, choose]

1.2 Let $A\in\mathcal A$. Because $A\cap N\subseteq N$, [L1] gives $\mu(A\cap N)=0$, so [L2] yields $\nu(A\cap N)=0$; because $A\cap P\subseteq P$, [L1] also gives $\nu(A\cap P)=0$. [L1, L2, given]

2.1 The partition $A=(A\cap P)\sqcup(A\cap N)$ therefore gives $\nu(A)=0$. Since $A$ was arbitrary, $\nu=0$. [step 1.1, step 1.2, algebra] ∎
