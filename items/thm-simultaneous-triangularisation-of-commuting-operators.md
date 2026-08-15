---
id: thm-simultaneous-triangularisation-of-commuting-operators
kind: theorem
title: "A commuting split family is simultaneously triangularisable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-triangularisation-splitting-criterion, prop-characteristic-polynomial-factors-over-an-invariant-subspace, prop-complete-invariant-flags-and-upper-triangular-matrices, prop-induced-quotient-operator-is-well-defined, lem-quotient-basis-lifts-to-an-adapted-basis]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 5C"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 6.4"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be a family of pairwise commuting endomorphisms of a finite-dimensional $F$-vector space $V$. If $\chi_S$ splits over $F$ for every $S\in\mathcal A$, then $\mathcal A$ is simultaneously triangularisable. The family may be empty.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and a pairwise commuting family $\mathcal A\subseteq\operatorname{End}_F(V)$ such that every $\chi_S$ splits over $F$.

[L1] An endomorphism whose characteristic polynomial splits is triangularisable ([[thm-triangularisation-splitting-criterion]]).

[L2] If $W$ is invariant under $S$, then $\chi_S=\chi_{S|_W}\chi_{\bar S}$ ([[prop-characteristic-polynomial-factors-over-an-invariant-subspace]]).

[L3] A basis is upper triangular for an operator exactly when its initial spans form an invariant flag ([[prop-complete-invariant-flags-and-upper-triangular-matrices]]).

[L4] Invariance makes every quotient operator well defined and linear ([[prop-induced-quotient-operator-is-well-defined]]).

[L5] A quotient basis lifts after a basis of the subspace to an adapted basis of the whole space ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

## Proof

**Proof technique:** induction.

1.1 If $\dim V=0$, the empty basis simultaneously triangularises every family. [base]

1.2 Assume $\dim V>0$ and the theorem in smaller dimensions; if $\mathcal A$ is empty or all its members are scalar, any basis works, while otherwise choose a nonscalar $A\in\mathcal A$, use [L1] to obtain a nonzero proper eigenspace $E$, observe that every $S\in\mathcal A$ preserves $E$ because $SA=AS$, and use [L2] plus induction on $E$ to obtain a common eigenvector $v\in E$. [L1, L2, choose, ih]

2.1 Put $W=Fv$; it is invariant under every $S\in\mathcal A$, the induced quotient operators commute by direct evaluation on cosets, and [L2] shows each quotient characteristic polynomial splits, so induction gives a common triangular basis of $V/W$. [step 1.2, L2, L4, ih]

3.1 Lift that quotient basis after $v$ by [L5]; its initial spans are invariant for every $S$ by the quotient construction, so [L3] makes every representing matrix upper triangular in the same basis, and this also covers the empty and all-scalar branches. [step 1.2, step 2.1, L3, L5, discharge-induction] ∎
