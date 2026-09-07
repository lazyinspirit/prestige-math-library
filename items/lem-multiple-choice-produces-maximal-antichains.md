---
id: lem-multiple-choice-produces-maximal-antichains
kind: lemma
title: "Multiple choice produces maximal antichains"
status: draft
origin: pipeline
deps: ["def-multiple-and-dependent-multiple-choice", "thm-transfinite-recursion", "thm-hartogs"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 9.1(a), pp.133–134"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF, MC implies that every partially ordered set has an inclusion-maximal antichain, where an antichain consists of pairwise incomparable distinct elements.

## Facts & Assumptions

[F1] [[def-multiple-and-dependent-multiple-choice]]: MC selects nonempty finite subsets of all nonempty subsets of a given set.

[F2] [[thm-transfinite-recursion]]: A specified class rule recurses along any set well-order.

[F3] [[thm-hartogs]]: There is a least ordinal $h(A)$ that does not inject into $A$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If $P=\varnothing$, its empty subset is maximal. Otherwise use MC to fix $s(U)$ finite nonempty in every nonempty $U\subseteq P$. The minimal elements $m(U)$ of $s(U)$ form a nonempty finite antichain: descent in a finite strict poset terminates, and two minimal points cannot be comparable. [F1]

2.1 Recurse for $\xi<h(\mathcal P(P))$. Given earlier antichains, let $U_\xi$ be the points outside their union incomparable with every point in that union. Set $A_\xi=m(U_\xi)$ if it is nonempty, and $A_\xi=\varnothing$ otherwise. Earlier and later nonempty stages are disjoint and mutually incomparable. [F2, step 1.1]

3.1 If every stage were nonempty, $\xi\mapsto A_\xi$ would inject $h(\mathcal P(P))$ into $\mathcal P(P)$ because the stages are disjoint. Thus some $U_\xi$ is empty. The union of the stages before the first such index is an antichain to which no point can be added. [F3, step 2.1] ∎
