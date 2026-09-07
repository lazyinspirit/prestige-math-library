---
id: thm-multiple-choice-equivalent-to-choice-in-zf
kind: theorem
title: "Multiple choice is equivalent to AC in ZF"
status: published
origin: pipeline
deps: ["lem-antichains-well-order-linearly-ordered-sets", "lem-bounded-hierarchy-for-the-multiple-choice-argument", "thm-hartogs", "thm-transfinite-recursion", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 9.1, pp.133–134"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "Caicedo, Some choiceless results (5), powersets-of-ordinals theorem, complete hierarchy proof"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

In ZF, if $\mathcal P(\alpha)$ is well-orderable for every ordinal $\alpha$, then AC holds. In particular $\mathrm{MC}\Longleftrightarrow\mathrm{AC}$. Foundation is part of the ambient theory.

## Facts & Assumptions

[F1] [[lem-bounded-hierarchy-for-the-multiple-choice-argument]]: Every set is included in an increasing bounded hierarchy stage with limit index.

[F2] [[thm-hartogs]]: No ordinal at least $h(B)$ can inject into $B$.

[F3] [[thm-transfinite-recursion]]: Specified class rules recurse along set ordinals.

[F4] [[lem-antichains-well-order-linearly-ordered-sets]]: MC makes the power set of every ordinal well-orderable.

[F5] [[def-axiom-of-choice]]: AC selects one point from each member of a nonempty-set family.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix $A\subseteq V_\theta$ with $\theta$ limit and let $k=h(V_\theta)$. By the hypothesis fix a single well-order $W$ of $\mathcal P(k)$. No sequence of arbitrary well-orders is chosen. [F1, F2]

2.1 Define well-orders $W_\beta$ of $V_\beta$ for $\beta<\theta$ recursively. At zero use the empty order. Given $W_\beta$, its unique order isomorphism $e_\beta:V_\beta\to\eta_\beta$ has $\eta_\beta<k$, since $V_\beta\subseteq V_\theta$. Order $V_{\beta+1}=\mathcal P(V_\beta)$ by transporting the restriction of $W$ along $u\mapsto e_\beta[u]\in\mathcal P(k)$. [F2, F3, step 1.1]

3.1 At a limit $\lambda\le\theta$, order elements first by their least stage of appearance below $\lambda$, then within the same stage by its already constructed order. Every nonempty subset has a least appearance index and a least element at that index, so this is a well-order. This defines the limit rule and also the final order on $V_\theta$. Restrict it to $A$. [F3, step 2.1]

4.1 For any family of nonempty sets apply the result to its union and select the least member of each set. The empty family uses the empty function. This proves AC from the powerset hypothesis; MC supplies that hypothesis. Conversely AC supplies a point in each nonempty set, whose singleton is a multiple selection. [F4, F5, step 3.1] ∎
