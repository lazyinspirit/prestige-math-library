---
id: cor-finite-random-variable-independence-agreement
kind: corollary
title: "The general rectangle criterion agrees with the published finite random-variable definition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-rectangle-criterion-for-independent-random-elements, def-independence-of-finite-random-variables, lem-finite-random-variables-are-measurable, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(\Omega,w)$ be a finite probability space, regard it as the probability
space $(\Omega,\mathcal P(\Omega),\mathbb P_w)$, and let
$(X_i)_{i\in I}$ be a finite family of finite-valued random variables on
$\Omega$. Then the rectangle criterion of
[[thm-rectangle-criterion-for-independent-random-elements]] is equivalent to
the published attained-value definition
[[def-independence-of-finite-random-variables]].

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$, a finite family
$(X_i)_{i\in I}$ of finite-valued random variables, and the corresponding
full-power-set probability space $(\Omega,\mathcal P(\Omega),\mathbb P_w)$.

[L1] On a finite full-power-set probability space, every finite-valued random
variable is measurable in the measure-theoretic sense.
([[lem-finite-random-variables-are-measurable]])

[L2] Finite probability spaces are exactly finite full-power-set probability
spaces. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

[L3] Independence of random elements is equivalent to the rectangle criterion.
([[thm-rectangle-criterion-for-independent-random-elements]])

[L4] The published finite notion of independence requires factorization of every
joint attained-value event. ([[def-independence-of-finite-random-variables]])

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L1], the variables $X_i$ are genuine random elements on the full-power-set probability space, so [L3] applies to them. [L1, L2, L3]

1.2 Conversely, assume [L4]. For a finite subfamily $(X_i)_{i\in J}$ and measurable sets $B_i\subseteq\mathbb R$, only finitely many values in $B_i\cap X_i(\Omega)$ can occur. The event $\{X_i\in B_i\text{ for all }i\in J\}$ is the disjoint union of the attained-value events $\{X_i=x_i\text{ for all }i\in J\}$ over those finitely many tuples. Summing the factorized singleton probabilities from [L4] gives $$\mathbb P_w(X_i\in B_i\text{ for all }i\in J)=\prod_{i\in J}\mathbb P_w(X_i\in B_i).$$ So the rectangle criterion holds. [L3, L4, algebra]

2.1 If the rectangle criterion holds, apply it to singleton target sets $B_i=\{x_i\}$. This gives $$\mathbb P_w(X_i=x_i\text{ for all }i\in J)=\prod_{i\in J}\mathbb P_w(X_i=x_i)$$ for every finite $J\subseteq I$, which is exactly [L4]. [step 1.1, L4]

3.1 Steps 2.1 and 1.2 prove that the finite published definition and the general rectangle criterion agree exactly on finite-valued variables over a finite probability space. [step 2.1, step 1.2] ∎
