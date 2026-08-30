---
id: thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition
kind: theorem
title: "Every finite Borel measure on R has a unique absolutely continuous, discrete, and singular-continuous decomposition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures, cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity, def-cantor-measure, prop-cantor-measure-is-a-singular-atomless-probability-measure, thm-finite-borel-measure-on-r-is-atomic-plus-atomless]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Example 2.37 and §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be a finite Borel measure on $\mathbb R$. Then there exist unique finite Borel measures $\mu_{\mathrm{ac}},\mu_{\mathrm{d}},\mu_{\mathrm{sc}}$ such that
$$\mu=\mu_{\mathrm{ac}}+\mu_{\mathrm{d}}+\mu_{\mathrm{sc}},$$
where $\mu_{\mathrm{ac}}\ll\lambda$, $\mu_{\mathrm{d}}$ is discrete, and $\mu_{\mathrm{sc}}$ is atomless and singular with respect to Lebesgue measure $\lambda$.

## Facts & Assumptions

**Given:** Countable choice and a finite Borel measure $\mu$ on $\mathbb R$.

[L1] Every finite Borel measure on $\mathbb R$ splits uniquely as an atomic part plus an atomless part. ([[thm-finite-borel-measure-on-r-is-atomic-plus-atomless]])

[L2] Lebesgue measure is the Lebesgue-Stieltjes measure of the identity function on $\mathbb R$. ([[cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity]])

[L3] The Lebesgue decomposition exists and is unique when the measure and the
positive reference measure admit a common finite exhaustion
([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]],
[[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]]).

[L4] The Cantor measure is a singular atomless probability measure, so the singular-continuous part is a genuine phenomenon. ([[def-cantor-measure]], [[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

## Proof

**Proof technique:** direct.

1.1 By [L1], write $\mu=\mu_{\mathrm d}+\eta$, where $\mu_{\mathrm d}$ is discrete and $\eta$ is atomless. [L1, choose]

2.1 Choose an increasing exhaustion $(X_n)$ of $\mathbb R$ with $\lambda(X_n)<\infty$. Since $\eta$ is finite, also $\eta(X_n)<\infty$, so [L3] applies to $\eta$ relative to Lebesgue measure $\lambda$ from [L2]. This gives $\eta=\mu_{\mathrm{ac}}+\mu_{\mathrm{sc}}$ with $\mu_{\mathrm{ac}}\ll\lambda$ and $\mu_{\mathrm{sc}}\perp\lambda$. Because $\eta$ is atomless and both summands are positive, $\mu_{\mathrm{ac}}(\{x\})+\mu_{\mathrm{sc}}(\{x\})=\eta(\{x\})=0$ forces $\mu_{\mathrm{ac}}(\{x\})=\mu_{\mathrm{sc}}(\{x\})=0$ for every $x$, so $\mu_{\mathrm{sc}}$ is atomless as well. [L2, L3, step 1.1, construct]

3.1 Combining steps 1.1 and 2.1 gives the required decomposition $\mu=\mu_{\mathrm{ac}}+\mu_{\mathrm d}+\mu_{\mathrm{sc}}$. Uniqueness follows because [L1] uniquely determines the discrete part and atomless remainder, while [L3] uniquely decomposes that atomless remainder into its absolutely continuous and singular pieces. The singular-continuous part is nonvacuous by [L4], which provides an atomless singular finite Borel measure. [L1, L3, L4, step 1.1, step 2.1] ∎
