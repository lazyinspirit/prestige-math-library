---
id: lem-probability-measure-basic-identities
kind: lemma
title: "Basic identities for a probability measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-probability-measure, prop-measure-monotonicity, prop-measure-of-a-set-difference, thm-finite-and-countable-subadditivity-of-measures, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, thm-finite-inclusion-exclusion-for-measures]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 1.9"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $A,B\in\mathcal F$,
and let $(A_n)_{n\in\mathbb N}$ be events.

1. $\mathbb P(A^c)=1-\mathbb P(A)$.
2. If $A\subseteq B$, then $\mathbb P(A)\le\mathbb P(B)$.
3. If $A\subseteq B$, then $\mathbb P(B\setminus A)=\mathbb P(B)-\mathbb P(A)$.
4. $\mathbb P(\bigcup_n A_n)\le\sum_{n=0}^\infty \mathbb P(A_n)$, and for every
   natural $m$,
   $$\mathbb P\left(\bigcup_{n<m}A_n\right)\le\sum_{n<m}\mathbb P(A_n).$$
5. $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$.
6. If $A_n\uparrow A$, then
   $$\mathbb P(A)=\sup_n\mathbb P(A_n).$$
   If $A_n\downarrow A$, then
   $$\mathbb P(A)=\inf_n\mathbb P(A_n).$$

## Facts & Assumptions

**Given:** A probability space $(\Omega,\mathcal F,\mathbb P)$, events $A,B$, and
an event sequence $(A_n)$.

[L1] A probability measure is a measure of total mass $1$
([[def-probability-measure]]).

[L2] Measures are monotone, set differences subtract when the smaller set has
finite measure, subadditivity holds, continuity from below holds, continuity
from above holds once one set has finite measure, and finite inclusion-exclusion
holds for finite-measure sets
([[prop-measure-monotonicity]], [[prop-measure-of-a-set-difference]],
[[thm-finite-and-countable-subadditivity-of-measures]],
[[thm-continuity-from-below-for-measures]],
[[thm-continuity-from-above-for-measures]],
[[thm-finite-inclusion-exclusion-for-measures]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathbb P(\Omega)=1$ by [L1] and $A\subseteq\Omega$, [L2] gives $$1=\mathbb P(\Omega)=\mathbb P(A)+\mathbb P(A^c),$$ so $\mathbb P(A^c)=1-\mathbb P(A)$. Monotonicity in [L2] also gives $A\subseteq B\Rightarrow\mathbb P(A)\le\mathbb P(B)$. [L1, L2]

1.2 Since every probability is at most $1$, the finite-measure hypotheses in [L2] apply to $A$, $B$, and $A\cup B$. Thus if $A\subseteq B$, then $$\mathbb P(B\setminus A)=\mathbb P(B)-\mathbb P(A),$$ subadditivity gives the countable and finite union bounds, finite inclusion-exclusion gives $$\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B),$$ and continuity from below and from above give the two monotone-limit formulas, because a decreasing probability sequence always has finite first term. [L1, L2]

2.1 Steps 1.1 and 1.2 are exactly the stated probability identities. [step 1.1, step 1.2] ∎
