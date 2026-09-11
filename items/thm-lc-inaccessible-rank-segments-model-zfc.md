---
id: "thm-lc-inaccessible-rank-segments-model-zfc"
kind: "theorem"
title: "An inaccessible rank segment models ZFC"
deps: ["lem-lc-inaccessible-size-and-rank-bounds", "prop-cumulative-hierarchy-transitivity-and-growth", "thm-relativization-and-set-satisfaction", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Theorem 18.16 p.79; local explicit Choice and inaccessibility-absoluteness
        clauses
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, if kappa is inaccessible, $(V_\kappa,\in)$ satisfies every ZFC axiom. For each cardinal $\alpha<\kappa$, inaccessibility of alpha is absolute between $V_\kappa$ and V. No converse from $V_\kappa\models\mathrm{ZFC}$ to inaccessibility of kappa is asserted.

## Facts & Assumptions

**Given:** ZFC. Verified every axiom directly by rank bounds and relativized formulas; AC gives the choice graph and image-size comparison. All functions and full small power sets witnessing inaccessibility tests lie in V_kappa, giving both absoluteness directions.

[F1] [[lem-lc-inaccessible-size-and-rank-bounds]]: Every element of V_kappa has size below kappa and every small subset of V_kappa lies in it; kappa is an uncountable limit cardinal.

[F2] [[prop-cumulative-hierarchy-transitivity-and-growth]]: Hierarchy stages are transitive with the stated ordinal content.

[F3] [[thm-relativization-and-set-satisfaction]]: For fixed formulas, satisfaction is evaluation with all quantifiers restricted to the set carrier.

[F4] [[def-axiom-of-choice]]: Ambient AC supplies a choice function on a set family.

## Proof

1.1 Transitivity transfers Extensionality and Foundation: every actual member of a set in V_kappa lies there, including an ambient Foundation witness. Empty and omega belong to V_kappa, since kappa is uncountable. Pairs, unions and full power sets of sets of rank below kappa again have rank below kappa: each requires only finitely many ordinal successor steps, and kappa is a limit ordinal. These actual operations verify Empty Set, Pairing, Union, Power Set and Infinity internally. [F1, F2]

2.1 For Separation, ambient Separation using the fixed V_kappa-relativized formula gives a subset of a, hence an element of its full power set in V_kappa. For Replacement, ambient Replacement with that fixed relativized functional formula gives an image Y of $a\in V_\kappa$. It is a subset of V_kappa of size at most |a| (AC well-orders a and assigns each image its least preimage). F1 gives |a|<kappa and then Y in V_kappa. F3 identifies these with every internal schema instance. [F1, F3, F4, step 1.1]

3.1 For a family a of nonempty sets in V_kappa, ambient AC gives a choice function g on a. Each ordered pair in its graph uses only sets in a and their members, so its rank is bounded by rank(a) plus a fixed finite ordinal; this remains below kappa. Thus g belongs to V_kappa and is also an internal choice function. Together with steps 1.1 and 2.1 this proves all ZFC axioms. [F4, step 1.1, step 2.1]

4.1 Fix alpha<kappa. All subsets of any ordinal below alpha, all functions between such ordinals (including functions into alpha), and all bijections between their power sets and ordinals below alpha have rank below kappa, by the finite-rank bounds of step 1.1. Thus V_kappa has exactly the witnesses testing cardinalhood and cofinality below alpha, and exactly the full power sets and cardinal comparisons testing $2^\mu<\alpha$ for cardinals mu<alpha. Uncountability is the comparison with the same actual omega. Each of these tests agrees in both directions, so alpha is inaccessible internally iff it is inaccessible externally. [F1, F2, F3, step 1.1, step 3.1] ∎
