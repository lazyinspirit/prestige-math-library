---
id: thm-v-equals-l-implies-diamond
kind: theorem
title: V equals L implies diamond
status: draft
origin: pipeline
deps: [lem-finite-stage-l-history-and-limit-level-absoluteness, lem-canonical-small-skolem-hulls-in-l, thm-condensation-for-constructible-levels, lem-collapse-fixes-transitive-parts-and-orders-ordinals, thm-canonical-definable-global-well-order-of-l, thm-transfinite-recursion, def-diamond-on-omega-one, def-club-subsets-of-ordinals, def-club-filter-and-nonstationary-ideal]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lietz, Set Theory, Theorem 7.20 and Proposition 7.21, pp.60–61"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Kunen, Set Theory, Chapter VI Theorem 5.2, pp.177–179"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
justified_by: []
forward_refs: []
---

## Statement

ZF proves that $V=L$ implies $\diamondsuit$ on $\omega_1$. Thus for every $A\subseteq\omega_1$, the set of correct guesses is stationary, not merely unbounded.

## Facts & Assumptions

**Given:** Ambient ZF together with $V=L$. Clubs and stationarity are the notions on $\omega_1$ in the cited definitions.

[F1] [[lem-finite-stage-l-history-and-limit-level-absoluteness]] supplies a formula $\chi$ defining the actual canonical order $<_L$ and agreeing with its restriction in every nonzero limit $L$-level; the stage-by-stage order makes each $L_\gamma$ an initial segment.

[F2] [[thm-canonical-definable-global-well-order-of-l]] says that $<_L$ well-orders all of $L$ by least definition codes.

[F3] [[lem-canonical-small-skolem-hulls-in-l]] supplies a canonical countably infinite elementary hull of a finite seed in a nonzero limit $L$-level, without ambient Choice.

[F4] [[thm-condensation-for-constructible-levels]] identifies the transitive collapse of such a hull with an actual $L_\gamma$.

[F5] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]] gives $\pi(\omega_1)=X\cap\omega_1$ when that intersection is transitive, and fixes transitive parts pointwise.

[F6] [[thm-transfinite-recursion]] realizes the deterministic recursive guessing rule.

[F7] [[def-diamond-on-omega-one]], [[def-club-subsets-of-ordinals]], and [[def-club-filter-and-nonstationary-ideal]] give the required subset, club, and stationary clauses.

## Proof

1.1 Define $(S_\alpha)_{\alpha<\omega_1}$ by F6. Having defined the earlier guesses, call $(B,D)$ bad at $\alpha$ when $B\subseteq\alpha$, $D\subseteq\alpha$ is club in $\alpha$, and $S_\xi\ne B\cap\xi$ for every $\xi\in D$. If a bad pair exists, take the $\chi$-least ordered pair and set $S_\alpha=B$; otherwise set $S_\alpha=\varnothing$. F2 makes the choice unique and F1 makes this one fixed first-order recursion; $S_0=\varnothing$, and always $S_\alpha\subseteq\alpha$. [F1, F2, F6, F7, given]

2.1 Assume for contradiction that this sequence is not diamond. By F7 there are $A\subseteq\omega_1$ and a club $C\subseteq\omega_1$ such that $S_\alpha\ne A\cap\alpha$ for every $\alpha\in C$. Among all such global failure pairs choose the $\chi$-least $(A,C)$, possible because $V=L$ and F2 well-orders $L$. [F2, F7, assume-contra, step 1.1]

3.1 Choose a nonzero limit $\theta$ such that $L_\theta$ contains $S,A,C,\omega_1$. Because $L_\theta$ is a $<_L$-initial segment and the badness predicate has only bounded quantifiers once these parameters are fixed, it sees that $(A,C)$ is the least failure pair. Let $X$ be the canonical hull of this finite seed. F3 gives $X\prec L_\theta$ and makes $X$ countably infinite. Put $\delta=X\cap\omega_1$. Elementarity makes $X\cap\omega_1$ an ordinal, hence transitive, and countability gives $\delta<\omega_1$. For every $\xi<\delta$, elementarity applied to the unbounded set $C$ produces $c\in C\cap X$ above $\xi$; hence $C\cap\delta$ is unbounded in $\delta$. It follows that $\delta$ is a nonzero countable limit, and closure of $C$ gives $\delta\in C$. [F1, F3, F7, step 2.1]

4.1 Collapse $X$ by $\pi$ to $M=L_\gamma$ using F4. By F5, $\pi(\omega_1)=\delta$. Since every $\xi<\delta$ lies in $X$, evaluation of the function $S\in X$ puts $S_\xi\in X$; as $S_\xi\subseteq\xi$, F5 fixes it. The collapse equations therefore give $\pi(S)=S\restriction\delta$, $\pi(A)=A\cap\delta$, and $\pi(C)=C\cap\delta$. [F4, F5, step 3.1]

5.1 By elementarity and isomorphism, $M$ regards $(A\cap\delta,C\cap\delta)$ as its $\chi$-least failure pair for the sequence $S\restriction\delta$ on its first uncountable ordinal $\delta$. The predicates “subset of $\delta$,” “club in $\delta$,” and “fails at every member” are bounded here and are absolute between the transitive $M$ and the universe for these fixed parameters. F1 says that $M$ and the universe use the same $\chi$-order on $M$, and that $M=L_\gamma$ is an initial segment of that order. Therefore no ambient bad pair at $\delta$ can precede $(A\cap\delta,C\cap\delta)$: any preceding pair would belong to $M$ and contradict internal leastness. Thus step 1.1 sets $S_\delta=A\cap\delta$. [F1, F4, F7, step 1.1, step 2.1, step 4.1]

6.1 But step 3.1 gives $\delta\in C$, while step 2.1 says $S_\delta\ne A\cap\delta$ at every member of $C$. This contradicts step 5.1. Hence the sequence is diamond, and its correct-guess set meets every club for every target subset of $\omega_1$. [F7, discharge-contradiction, step 2.1, step 3.1, step 5.1] ∎
