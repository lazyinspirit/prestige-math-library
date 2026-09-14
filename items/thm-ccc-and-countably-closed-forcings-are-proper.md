---
id: thm-ccc-and-countably-closed-forcings-are-proper
kind: theorem
title: "Ccc and countably closed forcings are proper"
status: draft
origin: pipeline
deps: [lem-proper-master-condition-characterizations, def-poset-ccc-and-knaster-property, def-kappa-closure-distributivity-and-chain-condition, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Propositions 8.5 and 8.7 with complete proofs, printed p. 39"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZFC, every ccc forcing preorder and every countably closed forcing preorder
is proper. No converse is asserted.

## Facts & Assumptions

**Given:** A nonempty forcing preorder $P$ and a sufficiently large well-ordered $H_\theta$ structure containing it.

[F1] Properness may be checked by producing an $(M,P)$-master below each $p\in P\cap M$. [[lem-proper-master-condition-characterizations]]

[F2] Ccc means that every antichain is countable. [[def-poset-ccc-and-knaster-property]]

[F3] Countable closure means that every countable descending chain has a common lower bound. [[def-kappa-closure-distributivity-and-chain-condition]]

[A1] AC supplies maximal antichains, enumerations of the countable family of dense sets in $M$, and the recursive choices in the closed case. [[def-axiom-of-choice]]

## Proof

1.1 Suppose first that $P$ is ccc, let $M$ be a relevant countable elementary model, and fix $p\in P\cap M$. For each dense $D\in M$, elementarity and A1 give a maximal antichain $A\in M$ with $A\subseteq D$. By F2, $A$ is externally countable. Any externally countable set $A\in M$ is a subset of $M$: elementarity supplies in $M$ a surjection from $\omega$ onto $A$, and every natural number belongs to $M$. Hence $A\subseteq D\cap M$ is predense below every condition, so $p$ itself is $(M,P)$-generic and is a master below $p$. F1 proves that $P$ is proper. [F1, F2, A1, Given]

1.2 Suppose instead that $P$ is countably closed. Enumerate all dense subsets of $P$ belonging to $M$ as $\langle D_n:n<\omega\rangle$, repeating one if the family is finite. Starting with $p_0=p$, use elementarity and A1 to choose $p_{n+1}\in D_n\cap M$ with $p_{n+1}\leq p_n$; every $p_n$ stays in $M$. By F3 there is $q\leq p_n$ for all $n$. For every $D_n$, the condition $p_{n+1}\in D_n\cap M$ lies above $q$, so $D_n\cap M$ is predense below $q$. Thus $q$ is an $(M,P)$-master below $p$, and F1 again makes $P$ proper. [F1, F3, A1, Given]

2.1 The two arguments cover the ccc and countably closed hypotheses independently and use no converse. AC is spent exactly in the maximal-antichain and enumeration/recursive-choice operations identified in steps 1.1 and 1.2. Therefore every forcing in either class is proper. [A1, step 1.1, step 1.2] ∎
