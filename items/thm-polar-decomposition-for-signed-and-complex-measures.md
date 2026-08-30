---
id: thm-polar-decomposition-for-signed-and-complex-measures
kind: theorem
title: "Every finite signed or complex measure has a polar decomposition against its total variation"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-radon-nikodym-derivative, def-total-variation-of-a-signed-or-complex-measure, thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-total-variation-of-a-complex-measure-is-finite, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.41"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.7"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $\nu$ be a finite signed measure or a finite complex measure on $(X,\mathcal A)$. Then there exists a measurable function $h$ such that
$$\nu(E)=\int_E h\,d|\nu|\qquad(E\in\mathcal A),\qquad |h|=1\quad|\nu|\text{-almost everywhere.}$$
If $\nu$ is signed, then $h$ may be chosen real-valued, and for a Hahn decomposition $X=P\sqcup N$ one may take
$$h=\chi_P-\chi_N\qquad|\nu|\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** A finite signed or finite complex measure $\nu$.

[L1] For every measurable set $E$, one has $|\nu(E)|\le|\nu|(E)$, so $\nu\ll|\nu|$; finite signed measures therefore admit Radon-Nikodym densities with respect to $|\nu|$ by the signed theorem, and finite complex measures do so by the complex corollary. ([[def-total-variation-of-a-signed-or-complex-measure]], [[def-radon-nikodym-derivative]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]])

[L2] For an absolutely continuous finite signed or finite complex measure, the total variation has density equal to the modulus of the Radon-Nikodym derivative. ([[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]])

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[L4] In the signed case, a Hahn decomposition $X=P\sqcup N$ exists, and on
its positive and negative pieces the Jordan and total-variation formulas give
$\nu=|\nu|$ and $\nu=-|\nu|$, respectively
([[thm-hahn-decomposition-for-signed-measures]],
[[thm-jordan-decomposition-for-signed-measures]],
[[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]).

## Proof

**Proof technique:** direct.

1.1 Because $|\nu(E)|\le|\nu|(E)$ for every measurable $E$, the measure $\nu$ is absolutely continuous with respect to $|\nu|$. Thus [L1] gives a density $h=d\nu/d|\nu|$ with $$\nu(E)=\int_E h\,d|\nu|\qquad(E\in\mathcal A).$$ [L1, given]

2.1 Apply [L2] with $\mu:=|\nu|$. Then $$ |\nu|(E)=\int_E|h|\,d|\nu|\qquad(E\in\mathcal A). $$ Let $A:=\{|h|>1\}$. Using the displayed identity on $A$ gives $$ 0=\int_A|h|\,d|\nu|-|\nu|(A)=\int_A(|h|-1)\,d|\nu|. $$ Because $|h|-1\ge0$ on $A$, [L3] yields $|\nu|(A)=0$. Now let $B:=\{|h|<1\}$. Since $A$ is $|\nu|$-null, $$ 0=|\nu|(B)-\int_B|h|\,d|\nu|=\int_B(1-|h|)\,d|\nu|. $$ Again the integrand is nonnegative, so [L3] gives $|\nu|(B)=0$. Therefore $|h|=1$ $|\nu|$-almost everywhere. [step 1.1, L2, L3, algebra]

3.1 If $\nu$ is signed, let $X=P\sqcup N$ be a Hahn decomposition from [L4]. Then $\chi_P-\chi_N$ is real-valued and has modulus $1$ everywhere. For every measurable $E$, additivity and the Jordan formulas give $$\nu(E)=\nu(E\cap P)+\nu(E\cap N)=|\nu|(E\cap P)-|\nu|(E\cap N)=\int_E(\chi_P-\chi_N)\,d|\nu|.$$ Hence the signed case may be represented by $h=\chi_P-\chi_N$. [L4, step 2.1, algebra]

4.1 Steps 1.1, 2.1, and 3.1 prove the general polar decomposition and the signed specialization. [step 1.1, step 2.1, step 3.1] ∎
