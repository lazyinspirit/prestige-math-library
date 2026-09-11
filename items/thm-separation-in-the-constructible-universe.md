---
id: "thm-separation-in-the-constructible-universe"
kind: "theorem"
title: "Separation in the constructible universe"
deps: ["lem-finite-reflection-along-constructible-levels", "def-definable-subsets-of-a-membership-structure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.7 p15; Marks Lemma 20.5 p87
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for each fixed membership formula $\phi(x,p)$ and $a,p_1,\ldots,p_n\in L$, the set $\{x\in a:\phi^L(x,p)\}$ belongs to $L$. Thus every instance of Separation holds in $L$.

## Facts & Assumptions

**Given:** ZF; fixed formula, constructible set and finitely many constructible parameters. Reflection on a parameter-containing level makes the desired subset an actual Def subset.

[F1] [[lem-finite-reflection-along-constructible-levels]]: Above any bound a transitive level reflects the fixed formula for all its parameter tuples.

[F2] [[def-definable-subsets-of-a-membership-structure]]: Every subset defined over a nonempty set level with its parameters belongs to Def of that level.

## Proof

1.1 Choose an ordinal bound large enough that one level contains $a$ and every $p_i$. Reflect $\phi$ above this bound, obtaining a nonempty transitive $L_\beta$ containing those parameters. For every $x\in a$, transitivity puts $x$ in $L_\beta$, so $\phi^L(x,p)$ agrees with satisfaction of $\phi(x,p)$ in $L_\beta$. [F1, given]

2.1 Over $L_\beta$ the formula $x\in a\land\phi(x,p)$ defines exactly the desired subset: the first conjunct uses actual membership and the second agrees by step 1.1. F2 puts this subset in $\operatorname{Def}(L_\beta)=L_{\beta+1}\subseteq L$. An empty a or a formula with no satisfying elements gives the empty subset by the same definition. The argument uses only this fixed formula and ambient ZF. [F2, step 1.1] ∎
