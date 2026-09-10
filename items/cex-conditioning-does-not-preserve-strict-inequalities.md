---
id: cex-conditioning-does-not-preserve-strict-inequalities
kind: counterexample
title: "Conditioning does not preserve strict inequalities"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
verification:
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

Even when $X(\omega)<Y(\omega)$ at every point, arbitrary versions of their conditional expectations need not satisfy that strict inequality at every point. This is a pointwise-version counterexample; strict almost-sure inequalities are preserved.

## Facts & Assumptions

**Given:** The claim that pointwise strict input order must hold for every pair of conditional versions at every point; a two-atom witness will be constructed.

[F1] The class is specified by event integrals, not by fixed values at null points. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Strict almost-sure order is preserved by conditional expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

## Counterexample

**Proof technique:** direct.

1.1 On $\Omega=\{a,b\}$ take the full sigma-algebra $\mathcal G=\mathcal F$ and $P(A)=\mathbf1_{\{b\in A\}}$. Countable additivity holds because at most one member of a disjoint sequence contains b, and total mass is one. Let X=0 and Y=1 everywhere. Then X<Y at both points. Set S(a)=2,S(b)=0 and T=1 everywhere; these are measurable and integrable. [given]

2.1 For every A, $\int_A S=0=\int_A X$ and $\int_A T=P(A)=\int_A Y$, so [F1] makes S,T conditional versions. At a, however, S(a)=2 is larger than T(a)=1. At the mass-one point b, S(b)=0<T(b)=1. Hence the failed strict pointwise inequality is fully consistent with the strict almost-sure order theorem [F2]. [step 1.1, F1, F2] ∎

## Source notes

Durrett §4.1 version convention, printed p.206. The local basic-properties theorem proves strict almost-sure preservation. The stable requested ID retains the Step-3-approved pointwise interpretation.
