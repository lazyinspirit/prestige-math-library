---
id: thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data
kind: theorem
title: "For signed and complex measures, absolute continuity is equivalent for the measure, its Jordan or real-imaginary parts, and its total variation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-absolutely-continuous-with-respect-to-a-positive-measure, def-total-variation-of-a-signed-or-complex-measure, prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures, thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-total-variation-is-a-measure]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.9"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Exercise 10 and Exercise 11"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\mu$ be a positive measure on $(X,\mathcal A)$.

1. If $\nu$ is a signed measure with Jordan decomposition $\nu=\nu^+-\nu^-$, then
   $$\nu\ll\mu\qquad\Longleftrightarrow\qquad \nu^+\ll\mu\text{ and }\nu^-\ll\mu\qquad\Longleftrightarrow\qquad |\nu|\ll\mu.$$
2. If $\nu$ is a complex measure, then
   $$\nu\ll\mu\qquad\Longleftrightarrow\qquad \operatorname{Re}\nu\ll\mu\text{ and }\operatorname{Im}\nu\ll\mu\qquad\Longleftrightarrow\qquad |\nu|\ll\mu.$$

## Facts & Assumptions

**Given:** A positive measure $\mu$ and either a signed or a complex measure $\nu$ on $(X,\mathcal A)$.

[L1] For a signed measure, $|\nu|(E)=\nu^+(E)+\nu^-(E)$ and $\nu^+(E)=\sup\{\nu(F):F\subseteq E,\ F\in\mathcal A\}$, $\nu^-(E)=-\inf\{\nu(F):F\subseteq E,\ F\in\mathcal A\}$. ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]])

[L2] The total variation $|\nu|(E)$ is the supremum of $\sum_j|\nu(E_j)|$ over measurable partitions of $E$, so in particular $|\nu(E)|\le|\nu|(E)$. ([[def-total-variation-of-a-signed-or-complex-measure]])

[L3] If $\nu$ is a complex measure, then $\operatorname{Re}\nu$ and $\operatorname{Im}\nu$ are finite signed measures and $\nu(E)=\operatorname{Re}\nu(E)+i\,\operatorname{Im}\nu(E)$. ([[prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\nu$ is signed. If $\nu\ll\mu$ and $\mu(E)=0$, then every measurable $F\subseteq E$ is $\mu$-null, hence $\nu(F)=0$; [L1] therefore gives $\nu^+(E)=0$ and $\nu^-(E)=0$. Conversely, if $\nu^+\ll\mu$ and $\nu^-\ll\mu$, then $\nu(E)=\nu^+(E)-\nu^-(E)=0$ on every $\mu$-null set, so $\nu\ll\mu$. Thus $\nu\ll\mu$ iff $\nu^+\ll\mu$ and $\nu^-\ll\mu$. [L1, given]

1.2 Suppose now that $\nu$ is complex. If $\nu\ll\mu$ and $\mu(E)=0$, then $\nu(E)=0$, so both $\operatorname{Re}\nu(E)$ and $\operatorname{Im}\nu(E)$ vanish; hence $\operatorname{Re}\nu\ll\mu$ and $\operatorname{Im}\nu\ll\mu$. Conversely, if both real and imaginary parts are absolutely continuous, then [L3] gives $\nu(E)=0$ on every $\mu$-null set, so $\nu\ll\mu$. [L3, given]

2.1 Still in the signed case, if $\nu\ll\mu$, then step 1.1 and [L1] give $|\nu|(E)=\nu^+(E)+\nu^-(E)=0$ on every $\mu$-null set, so $|\nu|\ll\mu$. Conversely, if $|\nu|\ll\mu$, then [L2] gives $|\nu(E)|\le|\nu|(E)=0$ on every $\mu$-null set, hence $\nu\ll\mu$. This completes clause 1. [L1, L2, step 1.1]

2.2 For a complex measure, $\nu\ll\mu$ implies $|\nu|\ll\mu$ because if $\mu(E)=0$, then every piece of every measurable partition of $E$ is $\mu$-null, so every partition sum in [L2] is $0$ and therefore $|\nu|(E)=0$. Conversely, if $|\nu|\ll\mu$, then [L2] again gives $|\nu(E)|\le|\nu|(E)=0$ on every $\mu$-null set, hence $\nu\ll\mu$. Together with step 1.2 this proves clause 2. [L2, L3, given]

3.1 Steps 1.1 and 2.1 prove clause 1, and steps 1.2 and 2.2 prove clause 2. [step 1.1, step 2.1, step 1.2, step 2.2] ∎
