---
id: thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
kind: theorem
title: "The Lebesgue decomposition of a sigma-finite signed measure is unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-concentrated-on-a-measurable-set, def-absolutely-continuous-with-respect-to-a-positive-measure, def-mutually-singular-measures]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.5"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.35"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\mu$ be a positive measure and let $\nu$ be a signed measure on the same measurable space. No choice or sigma-finiteness assumption is needed for uniqueness. If
$$\nu=\nu_a+\nu_s=\widetilde\nu_a+\widetilde\nu_s,$$
with $\nu_a,\widetilde\nu_a\ll\mu$ and $\nu_s,\widetilde\nu_s\perp\mu$, then
$$\nu_a=\widetilde\nu_a,\qquad \nu_s=\widetilde\nu_s.$$

## Facts & Assumptions

**Given:** Two Lebesgue decompositions of the same signed measure $\nu$ relative to a positive measure $\mu$.

[L1] Singularity provides a measurable $\mu$-null carrier; concentration means vanishing on every measurable subset of its complement. ([[def-mutually-singular-measures]], [[def-measure-concentrated-on-a-measurable-set]])

[L2] An absolutely continuous measure vanishes on every measurable $\mu$-null set. ([[def-absolutely-continuous-with-respect-to-a-positive-measure]])

## Proof

**Proof technique:** direct.

1.1 Choose measurable $\mu$-null carriers $N_1,N_2$ for $\nu_s,\widetilde\nu_s$, respectively. These are just two existential witnesses, so no choice axiom is needed. Let $N=N_1\cup N_2$, again measurable and $\mu$-null. Both singular parts vanish on every measurable subset of $X\setminus N$, and both absolutely continuous parts vanish on every measurable subset of $N$. [L1, L2, given, choose]

2.1 For every measurable $E$, evaluate each given decomposition on $E\setminus N$. It gives $\nu(E\setminus N)=\nu_a(E\setminus N)=\widetilde\nu_a(E\setminus N)$. As both absolutely continuous parts vanish on $E\cap N$, additivity yields $\nu_a(E)=\nu(E\setminus N)=\widetilde\nu_a(E)$. No difference of infinite values occurs. [step 1.1, given, algebra]

3.1 Similarly, evaluating on $E\cap N$ gives $\nu(E\cap N)=\nu_s(E\cap N)=\widetilde\nu_s(E\cap N)$. Both singular parts vanish on $E\setminus N$, so $\nu_s(E)=\nu(E\cap N)=\widetilde\nu_s(E)$. Since $E$ was arbitrary, both components are unique. [step 1.1, given, algebra] ∎
