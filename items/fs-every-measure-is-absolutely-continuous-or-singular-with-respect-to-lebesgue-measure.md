---
id: fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure
kind: false-statement
title: "FALSE: every measure is absolutely continuous or singular with respect to Lebesgue measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-cantor-measure-is-a-singular-atomless-probability-measure,
       cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity,
       thm-existence-of-the-lebesgue-stieltjes-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37 and §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim:** Every finite Borel measure on $\mathbb R$ is either absolutely continuous with respect to Lebesgue measure or singular with respect to Lebesgue measure.

## Facts & Assumptions

**Given:** The measure $\nu:=\lambda\!\restriction_{[0,1]}+\mu_c$.

[L1] The Cantor measure $\mu_c$ is singular with respect to Lebesgue measure, and it is concentrated on the Cantor set $C$ with $\mu_c(C)=1$. ([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

[L2] Lebesgue measure is the Lebesgue--Stieltjes measure of the identity
([[cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity]]).

[L3] The Lebesgue--Stieltjes measure of a nondecreasing right-continuous
function $F$ assigns $(a,b]$ the increment $F(b)-F(a)$
([[thm-existence-of-the-lebesgue-stieltjes-measure]]).

## Refutation

**Proof technique:** direct.

1.1 The measure $\nu$ is not absolutely continuous with respect to $\lambda$: the Cantor set $C$ is Lebesgue null by [L1], but $$\nu(C)=\lambda(C)+\mu_c(C)=1.$$ [L1, given, algebra]

2.1 By [L2] and [L3], $\lambda((0,1])=1$, so a Lebesgue-null set $N$ satisfies $\lambda((0,1]\setminus N)=1$. The measure $\nu$ is therefore not singular with respect to $\lambda$: if it were concentrated on $N$, then $$0<\lambda((0,1]\setminus N)\le\nu((0,1]\setminus N),$$ contradicting concentration on $N$. Thus $\nu$ is neither absolutely continuous nor singular. [step 1.1, L2, L3, contradiction: concentration on a null set, discharge-contradiction] ∎
