---
id: thm-finite-borel-measure-on-r-is-atomic-plus-atomless
kind: theorem
title: "Every finite Borel measure on $\\mathbb{R}$ splits as an atomic part plus an atomless part"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-atom-of-a-measure-on-r, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-lebesgue-stieltjes-correspondence-with-distribution-functions, thm-nonnegative-weighted-sums-of-measures, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be a finite Borel measure on
$\mathbb{R}$. Then there are a countable
set $A \subseteq \mathbb{R}$ and a finite atomless Borel measure $\nu$ such that

$$\mu = \sum_{a \in A} \mu(\{a\})\,\delta_a + \nu.$$

The set $A$ is exactly the set of atoms of $\mu$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a finite Borel measure $\mu$ on
$\mathbb{R}$.

[L1] Assuming Countable Choice, finite-on-compacts Borel measures correspond
to increasing right-continuous distribution functions, and the resulting
Lebesgue-Stieltjes measure is the original measure.
([[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]])

[L2] For a Lebesgue-Stieltjes measure, atoms are exactly positive jumps, and there are at most countably many of them. ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

[L3] Every Dirac measure is a probability measure, and countable nonnegative weighted sums of measures are measures. ([[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]])

## Proof

**Proof technique:** direct.

1.1 Let $F_\mu$ be the distribution function of $\mu$. By [L1], one has $\mu = \mu_{F_\mu}$. Therefore [L2] shows that the atom set. [L1, L2, choose]

$$A := \{\, x \in \mathbb{R} : \mu(\{x\}) > 0 \,\}$$

is at most countable. If $A=\varnothing$, then $\mu(\{x\})=0$ for every $x \in \mathbb{R}$, so $\mu$ is already atomless; taking $\nu:=\mu$ proves the theorem. Otherwise choose an injective enumeration $A=\{a_i : i \in I\}$, where $I=\{1,\dots,m\}$ if $A$ is finite and $I=\mathbb{N}$ if $A$ is infinite.

2.1 By [L3], the weighted Dirac sum [step 1.1, L3, algebra]

$$\mu_{\mathrm{at}} := \sum_{i \in I} \mu(\{a_i\})\,\delta_{a_i}$$

is a Borel measure. For every Borel set $E$,

$$\mu_{\mathrm{at}}(E) = \sum_{a_i \in E} \mu(\{a_i\}) = \mu(E \cap A),$$

because the singletons $\{a_i\}$ are pairwise disjoint and countable additivity of $\mu$ applies to their union. [step 1.1, L3, algebra]

3.1 Define [step 2.1, given, algebra]

$$\nu(E) := \mu(E \setminus A) \qquad (E \in \mathcal{B}(\mathbb{R})).$$

Because $(E_n \setminus A)$ remains pairwise disjoint whenever $(E_n)$ is, the same countable additivity as for $\mu$ shows that $\nu$ is a finite Borel measure. [step 2.1, given, algebra]

4.1 For every Borel set $E$, the disjoint decomposition $E = (E \cap A) \sqcup (E \setminus A)$ gives. [step 2.1, step 3.1, algebra]

$$\mu(E) = \mu(E \cap A) + \mu(E \setminus A) = \mu_{\mathrm{at}}(E) + \nu(E).$$

If $x \in A$, then $\nu(\{x\}) = \mu(\varnothing)=0$; if $x \notin A$, then $\mu(\{x\})=0$ by definition of $A$, so also $\nu(\{x\})=0$. Hence $\nu$ is atomless. [step 2.1, step 3.1, algebra]

5.1 If $A=\varnothing$, step 1.1 already gives the claimed decomposition. Otherwise step 4.1 is exactly that decomposition, and step 1.1 identifies $A$ as the atom set of $\mu$. [step 1.1, step 4.1] ∎
