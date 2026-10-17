---
id: "lem-multistep-martingale-characterization"
kind: "lemma"
title: "Multistep martingale characterization"
deps: ["def-martingale-submartingale-and-supermartingale", "thm-tower-property-of-conditional-expectation", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. For an integrable adapted real process $X$, the one-step martingale, submartingale or supermartingale condition is equivalent, respectively, to
$$E[X_n\mid\mathcal F_m]=X_m,\qquad E[X_n\mid\mathcal F_m]\ge X_m,\qquad E[X_n\mid\mathcal F_m]\le X_m\quad\text{a.s. for every }0\le m\le n.$$
The conditions are understood separately as in [[def-martingale-submartingale-and-supermartingale]].

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Conditional expectations on nested sigma-algebras satisfy the tower identity. [[thm-tower-property-of-conditional-expectation]].

[F2] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F3] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F4] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 For $n=m$, adaptedness and integrability give $E[X_m\mid\mathcal F_m]=X_m$. For the submartingale case fix $m$ and induct on $n-m$. If $n>m$, nesting and the tower identity give $E[X_n\mid\mathcal F_m]=E[E[X_n\mid\mathcal F_{n-1}]\mid\mathcal F_m]\ge E[X_{n-1}\mid\mathcal F_m]\ge X_m$. The first inequality uses the one-step hypothesis and conditional order; the second is the induction hypothesis. All conditioned variables are integrable. [given, F1, F2, F3]

2.1 For the supermartingale case the identical tower identity has both inequalities reversed, since conditional order preserves the relation $\le$. For the martingale case the inner conditional expectation equals $X_{n-1}$, so induction gives equality at every pair. Each induction uses only finitely many almost-sure identities. AC here is inherited from the existence of the conditional classes; no representatives at all pairs are selected. [given, F1, F2, F4, step 1.1]

3.1 Conversely, each all-pairs condition evaluated at $(m,n)=(k,k+1)$ is its defining one-step condition. This includes $k=0$, and proves each equivalence. [given, step 1.1, step 2.1] ∎
