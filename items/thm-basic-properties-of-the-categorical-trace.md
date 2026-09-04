---
id: thm-basic-properties-of-the-categorical-trace
kind: theorem
title: "Basic properties of the categorical trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-left-duality-is-a-contravariant-antimonoidal-functor, def-additive-category]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 4.7.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $a:X\to X^{\vee\vee}$ and $b:Y\to Y^{\vee\vee}$.

1. $\operatorname{Tr}_L(a)=\operatorname{Tr}_R(a^\vee)$.
2. If the category is additive, then
   $\operatorname{Tr}_L(a\oplus b)=\operatorname{Tr}_L(a)+\operatorname{Tr}_L(b)$.
3. $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(a)\operatorname{Tr}_L(b)$.
4. For every endomorphism $c:X\to X$,
   $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$.

The corresponding right-trace statements hold by the same formulas with left
and right exchanged.

## Facts & Assumptions

**Given:** A rigid monoidal category, morphisms $a:X\to X^{\vee\vee}$ and
$b:Y\to Y^{\vee\vee}$, and when needed an additive structure.

[F1] EGNO Proposition 4.7.3 proves exactly the four displayed properties, with
the additive clause explicitly restricted to additive categories.

[L1] The duality functor is contravariant and antimonoidal
([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

[L2] The traces are the ones from
[[def-the-categorical-trace-of-a-morphism-into-the-double-dual]].

## Proof

**Proof technique:** direct.

1.1 The formula in [L2] for $\operatorname{Tr}_L(a)$ is obtained by inserting $a$ between one coevaluation and one evaluation. Dualizing that composite and using the contravariant antimonoidality from [L1] reverses the order and turns it into the defining formula for $\operatorname{Tr}_R(a^\vee)$, which is the first clause recorded in [F1]. [given, F1, L1, L2]

1.2 The same proposition [F1] states that direct sums split the trace additively in additive categories, tensor products split it multiplicatively, and composing with an endomorphism may be cycled across the trace at the cost of a double dual: $$\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a).$$ [F1]

2.1 Therefore all four displayed identities hold, and the right-trace versions follow by applying the same argument to the mirrored formulas in [L2]. [step 1.1, step 1.2] ∎
