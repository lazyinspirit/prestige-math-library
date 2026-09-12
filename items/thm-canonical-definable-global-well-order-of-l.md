---
id: "thm-canonical-definable-global-well-order-of-l"
kind: "theorem"
title: "The canonical definable global well-order of L"
deps: ["lem-canonical-well-order-of-finite-definition-codes", "def-constructible-hierarchy-and-constructible-rank", "prop-constructible-levels-transitivity-ordinals-and-rank", "lem-def-operation-is-absolute", "thm-constructible-universe-basic-axioms", "thm-separation-in-the-constructible-universe", "thm-internal-power-set-in-the-constructible-universe", "thm-replacement-in-the-constructible-universe", "thm-constructibility-is-absolute-and-l-is-minimal"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.9 proof pp17–18; Marks Theorem 20.9 and Exercise 20.10
        p88
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF there is a parameter-free definable setlike class well-order $<_L$ of $L$. It is the unique coherent recursion that starts with the empty order, retains the old order at a successor stage, places every old member before every new member, orders the new members by their least definition codes from the fixed natural-number formula/arity coding of the preceding lemma, and takes unions at nonzero limits. Each $L_\alpha$ is an initial segment, and its restriction is a set well-order. The same recursion performed internally in $L$ gives the same relation.

## Facts & Assumptions

**Given:** ZF. Explicit recursion retains old levels as initial segments, orders only new sets by least fixed-arity codes, proves limit well-ordering and setlike predecessor bounds, and compares the internal construction stage by stage.

[F1] [[lem-canonical-well-order-of-finite-definition-codes]]: A given well-order on a level canonically well-orders its definition codes and assigns every Def subset a unique least code.

[F2] [[def-constructible-hierarchy-and-constructible-rank]]: Def histories are uniformly given by ordinal-interval recursion; the same set recursion is available for histories augmented by orders.

[F3] [[prop-constructible-levels-transitivity-ordinals-and-rank]]: Levels nest and their union exhausts L.

[F4] [[thm-constructible-universe-basic-axioms]]: The six basic ZF axioms hold in L.

[F5] [[thm-separation-in-the-constructible-universe]]: Every fixed Separation instance holds in L.

[F6] [[thm-internal-power-set-in-the-constructible-universe]]: Internal Power Set holds in L.

[F7] [[thm-replacement-in-the-constructible-universe]]: Every fixed Replacement instance holds in L.

[F8] [[thm-constructibility-is-absolute-and-l-is-minimal]]: L has the same constructible levels as V.

[F9] [[lem-def-operation-is-absolute]]: Def computed in a transitive ZF model agrees with external Def on every set it contains.

## Proof

1.1 Recurse on ordinal intervals, keeping an order $<_\alpha$ on $L_\alpha$. At zero use the empty order. At $\alpha+1$ retain $<_\alpha$ on the old elements, put every old element before every member of $L_{\alpha+1}\setminus L_\alpha$, and order the new elements by their least Def codes over $(L_\alpha,<_\alpha)$ from F1. At nonzero limits take the union of earlier orders. On malformed histories one may return the empty relation, so the recursion rule is total and definable. [F1, F2, F3, construct]

2.1 Induction proves these are coherent well-orders and each earlier level is an initial segment. The successor order is the sum of the old well-order and a subset of the code well-order. At a limit, comparisons of finitely many elements take place in a common earlier level, giving a total transitive strict order. For a nonempty subset S of the limit level, take any $x\in S$ in an earlier level; the least member of the nonempty intersection of S with that level is least in all of S, since the level is an initial segment. This single existential choice proves well-ordering without a choice function. [F1, F3, step 1.1]

3.1 Interval uniqueness gives a uniform formula for all these orders. Their class union defines $<_L$ without set parameters. The same initial-segment argument as step 2.1 gives a least element to every nonempty set subset of L (and to any specified nonempty definable subclass, by Separation in a level). For $x\in L_\alpha$, every predecessor of x lies in $L_\alpha$, so Separation makes its predecessor collection a set. [F2, step 2.1]

4.1 Inside L the construction is licensed by the ZF axioms in F4–F7 and has exactly the same levels by F8. Induct on alpha to compare orders. At successors, F9 identifies internal and external Def on the old level. The previous order is identical, hence code comparison, decoding fibres and their least codes are identical. At limits the unions agree. Thus the two constructions produce the same restrictions and the same class relation. [F1, F4, F5, F6, F7, F8, F9, step 1.1, step 3.1] ∎
