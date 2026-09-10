---
id: thm-polar-decomposition-for-signed-and-complex-measures
kind: theorem
title: "Every finite signed or complex measure has a polar decomposition against its total variation"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-total-variation-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-radon-nikodym-derivative, def-total-variation-of-a-signed-or-complex-measure, thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-total-variation-of-a-complex-measure-is-finite, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]
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
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.41"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.7"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\nu$ be a finite signed measure or a finite complex measure on $(X,\mathcal A)$. Then there exists a measurable function $h$ such that
$$\nu(E)=\int_E h\,d|\nu|\qquad(E\in\mathcal A),\qquad |h|=1\quad|\nu|\text{-almost everywhere.}$$
If $\nu$ is signed, then $h$ may be chosen real-valued, and for a Hahn decomposition $X=P\sqcup N$ one may take
$$h=\chi_P-\chi_N\qquad|\nu|\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** AC and a finite signed or finite complex measure $\nu$.

[L1] For every measurable set $E$, one has $|\nu(E)|\le|\nu|(E)$, so $\nu\ll|\nu|$; finite signed measures therefore admit Radon-Nikodym densities with respect to $|\nu|$ by the signed theorem, and finite complex measures do so by the complex corollary. ([[def-total-variation-of-a-signed-or-complex-measure]], [[def-radon-nikodym-derivative]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]])

[L2] For any complex L1 density $h$ on a measure space, the measure defined by its set integrals has total variation $\int_E|h|$. This also applies when $h$ is real-valued. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[L4] In the signed case, a Hahn decomposition $X=P\sqcup N$ exists, and on
its positive and negative pieces the Jordan and total-variation formulas give
$\nu=|\nu|$ and $\nu=-|\nu|$, respectively
([[thm-hahn-decomposition-for-signed-measures]],
[[thm-jordan-decomposition-for-signed-measures]],
[[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]).

[L5] Total variation is a positive measure, finite for complex measures and for finite signed measures by their finite Hahn/Jordan masses. AC covers its partition selections and the RN/Hahn constructions. ([[thm-total-variation-is-a-measure]], [[thm-total-variation-of-a-complex-measure-is-finite]], [[def-axiom-of-choice]])

[L6] Finite L1 integrals may be subtracted and added linearly. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 Because $|\nu(E)|\le|\nu|(E)$ for every measurable $E$, the measure $\nu$ is absolutely continuous with respect to $|\nu|$. By [L5], $|\nu|$ is a finite positive measure, so the constant exhaustion is common and finite. Under AC, [L1] gives an L1 density $h=d\nu/d|\nu|$ with $$\nu(E)=\int_E h\,d|\nu|\qquad(E\in\mathcal A).$$ [L1, L5, given]

2.1 Apply [L2] to this L1 function on the finite measure space with reference $|\nu|$. Its defined measure is exactly $\nu$ by step 1.1. All integrals below are finite by step 1.1 and [L5], so [L6] licenses the displayed subtractions. Then $$ |\nu|(E)=\int_E|h|\,d|\nu|\qquad(E\in\mathcal A). $$ Let $A:=\{|h|>1\}$. Using the displayed identity on $A$ gives $$ 0=\int_A|h|\,d|\nu|-|\nu|(A)=\int_A(|h|-1)\,d|\nu|. $$ Because $|h|-1\ge0$ on $A$, [L3] yields $|\nu|(A)=0$. Now let $B:=\{|h|<1\}$. Since $A$ is $|\nu|$-null, $$ 0=|\nu|(B)-\int_B|h|\,d|\nu|=\int_B(1-|h|)\,d|\nu|. $$ Again the integrand is nonnegative, so [L3] gives $|\nu|(B)=0$. Therefore $|h|=1$ $|\nu|$-almost everywhere. [step 1.1, L2, L3, L5, L6, algebra]

3.1 If $\nu$ is signed, let $X=P\sqcup N$ be a Hahn decomposition from [L4]. Then $\chi_P-\chi_N$ is real-valued and has modulus $1$ everywhere. For every measurable $E$, additivity and the Jordan formulas give $$\nu(E)=\nu(E\cap P)+\nu(E\cap N)=|\nu|(E\cap P)-|\nu|(E\cap N)=\int_E(\chi_P-\chi_N)\,d|\nu|.$$ Hence the signed case may be represented by $h=\chi_P-\chi_N$. [L4, step 2.1, algebra]

4.1 Steps 1.1, 2.1, and 3.1 prove the general polar decomposition and the signed specialization. [step 1.1, step 2.1, step 3.1] ∎
