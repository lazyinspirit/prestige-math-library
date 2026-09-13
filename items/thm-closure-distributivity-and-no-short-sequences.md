---
id: thm-closure-distributivity-and-no-short-sequences
kind: theorem
title: Closure, distributivity, and absence of new short sequences
status: draft
origin: pipeline
deps: [def-kappa-closure-distributivity-and-chain-condition, thm-forcing-theorem, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 4.16 and Corollary 4.17", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, for an infinite regular $\kappa$ and a separative forcing order $P$, $\kappa$-distributivity of $P$ is equivalent to $P$ adding no new sequences of ground-model elements of length below $\kappa$. For an arbitrary forcing preorder, the equivalence applies to its separative quotient. Every $\kappa$-closed $P$ is $\kappa$-distributive. Hence $\kappa$-closed forcing adds no new subsets of any ordinal $\gamma<\kappa$ and preserves all ground-model cofinalities and cardinals at most $\kappa$.

## Facts & Assumptions

**Given:** AC, a regular infinite $\kappa$, and a forcing preorder $P$; in the equivalence, $P$ is separative, meaning that $q\nleq p$ has an extension incompatible with $p$.

[F1] [[def-kappa-closure-distributivity-and-chain-condition]] fixes the strict length bounds and order orientation.

[F2] [[thm-forcing-theorem]] supplies deciding extensions and the truth lemma.

[F3] [[thm-transfinite-recursion]] constructs sequences of decisions of length below $\kappa$.

## Proof

1.1 Suppose $P$ is $\kappa$-closed. Given $p$ and dense open $D_\xi$ for $\xi<\gamma<\kappa$, recursively choose $p_{\xi+1}\le p_\xi$ in $D_\xi$ and at each limit take a lower bound. Regularity keeps every stage below $\kappa$; a final lower bound belongs to every $D_\xi$. Thus $P$ is $\kappa$-distributive. AC is used for the recursive choices. [F1, F3]

1.2 Suppose $P$ is $\kappa$-distributive and $p\Vdash\dot f:\check\gamma\to\check V$ for $\gamma<\kappa$. For each $\xi<\gamma$, the set of conditions deciding $\dot f(\xi)$ is dense open. A common extension $q$ decides every coordinate, say as $x_\xi\in V$. Replacement forms $f=\langle x_\xi:\xi<\gamma\rangle$ in the ground model and $q\Vdash\dot f=\check f$. Conversely, assume that separative $P$ adds no such sequence. Given maximal antichains $A_\xi$ for $\xi<\gamma$, let $\dot f(\xi)$ be the unique member of $A_\xi$ met by the generic. This is a name for a $\gamma$-sequence of ground-model conditions, hence conditions deciding its whole ground-model value are dense. If $q$ decides that value as $f_q$, then $q\le f_q(\xi)$ for every $\xi$: otherwise separativity gives $r\le q$ incompatible with $f_q(\xi)$, while a generic through $r$ must both realize the decision and meet $A_\xi$, a contradiction. A maximal antichain of such $q$ therefore refines every $A_\xi$. Replacing each dense open set by a maximal antichain contained in it proves that the intersection of the original family is dense. AC is used to choose the maximal antichains. [F1, F2]

2.1 A subset of $\gamma<\kappa$ is a $2$-valued sequence of length $\gamma$, so closure adds none. A new cofinal map into a ground-model ordinal of cofinality at most $\kappa$, or a collapse of a cardinal at most $\kappa$, would yield after restricting to a cofinal domain a new sequence of ground-model ordinals of length below $\kappa$. Hence those cofinalities and cardinals are preserved. [step 1.1, step 1.2] ∎
