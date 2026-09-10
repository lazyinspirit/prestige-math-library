---
id: thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition
kind: theorem
title: "Every finite Borel measure on R has a unique absolutely continuous, discrete, and singular-continuous decomposition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-atom-of-a-measure-on-r, thm-finite-borel-measure-on-r-is-atomic-plus-atomless, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures, thm-lebesgue-measure-of-a-box-of-every-kind]
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
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Example 2.37 and §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a finite Borel measure on $\mathbb R$. Then there exist unique finite Borel measures $\mu_{\mathrm{ac}},\mu_{\mathrm{d}},\mu_{\mathrm{sc}}$ such that
$$\mu=\mu_{\mathrm{ac}}+\mu_{\mathrm{d}}+\mu_{\mathrm{sc}},$$
where $\mu_{\mathrm{ac}}\ll\lambda$, $\mu_{\mathrm{d}}$ is discrete, and $\mu_{\mathrm{sc}}$ is atomless and singular with respect to Lebesgue measure $\lambda$.

## Facts & Assumptions

**Given:** AC and a finite Borel measure $\mu$ on $\mathbb R$.

[L1] Under countable choice a finite Borel measure splits as $\mu_d(E)=\mu(E\cap A)$ and $\eta(E)=\mu(E\setminus A)$, where $A=\{x:\mu(\{x\})>0\}$ is countable and $\eta$ is atomless. ([[thm-finite-borel-measure-on-r-is-atomic-plus-atomless]], [[def-atom-of-a-measure-on-r]])

[L2] Lebesgue measure has $\lambda([-n,n])=2n$ and $\lambda(\{x\})=0$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L3] Under AC, common-finite-exhaustion Lebesgue decomposition exists, with positive components dominated by the original measure in the positive case. Given two decompositions, their components are unique without any choice hypothesis. ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]], [[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]])

[L4] AC supplies [L3] and implies the countable choice required by [L1] and [L2]. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to write $\mu=\mu_d+\eta$. The measure $\mu_d$ is discrete, meaning concentrated on a countable set, and $\eta$ is atomless. These measures are finite positive Borel measures. [L1, L4, given]

2.1 On $X_n=[-n,n]$ both $\lambda$ and $\eta$ are finite by [L2] and finiteness of $\eta$. Under AC, [L3] decomposes $\eta=\mu_{ac}+\mu_{sc}$ with positive finite components, $\mu_{ac}\ll\lambda$ and $\mu_{sc}\perp\lambda$. Since $\eta(\{x\})=0$, positivity gives $\mu_{ac}(\{x\})=\mu_{sc}(\{x\})=0$ for every $x$. Thus $\mu_{sc}$ is atomless, proving existence of the claimed three parts. [L2, L3, L4, step 1.1, construct]

3.1 For uniqueness, consider any such three-part decomposition. The absolutely continuous part has zero mass on singletons by [L2], and the singular-continuous part does by atomlessness. Thus the discrete part has singleton mass $\mu(\{x\})$ at every $x$. A measure concentrated on a countable set is determined by these masses through countable additivity, so this discrete part equals $\mu_d$ from step 1.1. The other two parts therefore sum to the same finite remainder $\eta$. The uniqueness clause of [L3] identifies them with $\mu_{ac}$ and $\mu_{sc}$. [L2, L3, step 1.1, step 2.1, algebra] ∎
