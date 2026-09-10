---
id: cex-a-version-can-fail-a-pointwise-identity-on-a-null-set
kind: counterexample
title: "A version can fail a pointwise identity on a null set"
status: published
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement refuted

The assertion “every version of $E[0\mid\mathcal F]$ equals zero at every sample point” is false, under the usual AC conditional-class convention.

## Facts & Assumptions

**Given:** The universal pointwise claim in Statement refuted; a witness will be constructed on two atoms.

[F1] A real measurable integrable function with the required event integrals is a version of the class. ([[def-conditional-expectation-as-an-ae-class]])

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\{a,b\}$, $\mathcal F=\mathcal P(\Omega)$ and $P(A)=\mathbf1_{\{b\in A\}}$. This is a probability measure: P(Omega)=1, P(empty)=0, and in a disjoint sequence at most one event contains b, so countable additivity holds. Take $T=\mathbf1_{\{a\}}$. It is F-measurable and $E|T|=1\cdot0+0\cdot1=0$. [given]

2.1 For every A subset Omega, $\int_A T=T(b)\mathbf1_{\{b\in A\}}=0=\int_A0$. Thus [F1] makes T a version of the conditional expectation of zero. But T(a)=1, so the claimed pointwise identity fails at a. The discrepancy set {a} has probability zero, consistent with almost-sure uniqueness. [step 1.1, F1] ∎

## Source notes

Durrett §4.1 uniqueness/version discussion, printed p.206; van der Vaart warning after Lemma 1.10, printed p.4. The two-atom witness is locally constructed.
