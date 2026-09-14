---
id: lem-solovay-collapse-localizes-countable-ordinal-data
kind: lemma
title: The Lévy collapse localizes countable ordinal data
status: draft
origin: pipeline
deps:
  - def-solovay-levy-collapse-setup
  - thm-collapse-and-levy-collapse-effects
  - thm-forcing-theorem
  - lem-forcing-monotonicity-density-and-decision
  - thm-forcing-equivalence-and-boolean-completion
  - thm-generic-extension-transitivity-and-rank-bound
  - thm-forcing-preserves-ordinals
  - lem-lc-inaccessible-size-and-rank-bounds
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: forcing-name-support
sources:
  references:
    - title: "Solovay 1970, Part I, Lemma 3.4 and Corollary 3.6"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
---

## Statement

In $V[G]$, $\kappa=\omega_1$; every real and every function
$f:\omega\to\mathrm{Ord}$ belongs to some $V[G_\xi]$, $\xi<\kappa$; and
$\mathbb R^{V[G_\xi]}$ is countable in $V[G]$.

## Facts & Assumptions

**Given:** The Solovay collapse setup and a supplied $V$-generic $G$.

[F1] [[def-solovay-levy-collapse-setup]]: gives $P$, its initial complete suborders, and the ambient ZFC convention.

[F2] [[thm-collapse-and-levy-collapse-effects]]: gives the collapse of every infinite cardinal below $\kappa$ and preservation of $\kappa$.

[F3] [[thm-forcing-theorem]], [[lem-forcing-monotonicity-density-and-decision]], [[thm-forcing-equivalence-and-boolean-completion]], [[thm-generic-extension-transitivity-and-rank-bound]], and [[thm-forcing-preserves-ordinals]] supply the definable forcing relation, density closure, Boolean completion, the name-rank bound, and preservation of ordinals.

[F4] [[lem-lc-inaccessible-size-and-rank-bounds]]: gives $|P_\xi|<\kappa$ and the regularity of $\kappa$.

[F5] [[def-axiom-of-choice]]: ambient AC selects the deciding maximal antichain for each coordinate of a name.

## Proof

1.1 By F2 every $\alpha<\kappa$ is countable after forcing, whereas the $\kappa$-chain condition preserves $\kappa$ and its uncountability. Hence $\kappa=\omega_1^{V[G]}$. [F1, F2]

1.2 First justify the ordinal decisions.  Fix a name $\dot\gamma$ forced to be an ordinal and let $\rho$ exceed its name rank.  By the rank bound and ordinal preservation in F3, every possible value is some ground ordinal below $\rho$.  In the Boolean completion, the join of the set of truth values $\lVert\dot\gamma=\check\alpha\rVert$ for $\alpha<\rho$ is $1$: otherwise a nonzero remainder would force that $\dot\gamma$ is an ordinal below $\rho$ unequal to every such $\alpha$, contradicting the forcing clauses and density closure.  A maximal antichain refining these truth values therefore decides $\dot\gamma$ as a check ordinal.  This proves the needed ordinal-name decision lemma; binary decision density alone was not substituted for it. [F3, F5]

2.1 Apply step 1.2 to $\dot f(n)$ for each $n$. Ambient AC selects a sequence $(A_n)_{n<\omega}$ of deciding maximal antichains. The $\kappa$-cc makes every $A_n$ have size below $\kappa$. Each condition has finite support, so regularity in F4 bounds $\bigcup_{n<\omega}\bigcup_{p\in A_n}\operatorname{supp}(p)$ below some $\xi<\kappa$. Every $A_n\subseteq P_\xi$, and replacing each coefficient by its restriction gives a $P_\xi$-name whose $G_\xi$-value is $\dot f_G$. A real is the special case of an ordinal-valued omega-sequence. [F1, F3, F4, F5, step 1.2]

3.1 In $V$, the collection of nice $P_\xi$-names for reals has cardinal below $\kappa$: each is coded by countably many antichains in the set $P_\xi$, and inaccessibility supplies the required bound. The tail collapse makes that ground set countable. Evaluating an ambient enumeration of its codes gives a surjection from $\omega$ onto $\mathbb R^{V[G_\xi]}$ in $V[G]$. Empty names and the zero real are included; no uniform choice is made inside an inner model. [F2, F4] ∎
