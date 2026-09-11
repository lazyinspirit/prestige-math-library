---
id: "lem-finite-reflection-along-constructible-levels"
kind: "lemma"
title: "Finite reflection along constructible levels"
deps: ["prop-constructible-levels-transitivity-ordinals-and-rank", "thm-montague-levy-finite-reflection"]
sources:
  references:
    - title: Geschke Lemma 5.3 and proof of Theorem 5.7 pp14–15; published finite-reflection
        general clause
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for each fixed finite family $\Phi$ of membership formulas and ordinal $\alpha$, there is a nonzero limit $\beta>\alpha$ such that, for every $\phi\in\Phi$ and tuple $a$ from $L_\beta$, $(L_\beta,\in)\models\phi[a]$ iff $\phi^L(a)$. This is a scheme for fixed formulas; it does not assume that $L$ satisfies ZF.

## Facts & Assumptions

**Given:** ZF; fixed finite formula family. The general-class clause of published reflection is applicable before L models ZF; its full proof was read and its limit-stage and choice-free witness-bound construction checked.

[F1] [[prop-constructible-levels-transitivity-ordinals-and-rank]]: The L levels are increasing transitive sets, continuous at nonzero limits; their definable union is the nonempty class L.

[F2] [[thm-montague-levy-finite-reflection]]: General definable-class reflection applies without assuming internal ZF in W; its proof produces beta as a strictly increasing omega-sequence supremum.

## Proof

1.1 Use $W_\gamma=L_\gamma$ and $W=L$. The recursive definition supplies uniform definability, the limit definition supplies continuity, and F1 supplies monotonicity and nonemptiness. Every element of $W$ belongs to a level by definition. These are precisely the general-class hypotheses of F2. [F1, F2]

2.1 Apply the construction in F2 to the finite subformula closure of $\Phi$, starting above $\alpha$ and above zero. It bounds the least witness stages for tuples in each set level using ambient Replacement, iterates that definable bound through omega, and takes the supremum $\beta$. Strict increase makes $\beta$ a nonzero limit. Each finite tuple lies in a stage of this sequence, so every true existential in the closed family has a witness before $\beta$; the witness criterion in F2 gives agreement in both directions. All these are ambient ZF operations, and no internal Replacement or satisfaction predicate for the whole class L is presumed. [F2, step 1.1] ∎
