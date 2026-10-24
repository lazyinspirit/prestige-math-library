---
id: "lem-addition-of-roofs-makes-an-additive-localization"
kind: "lemma"
title: "Addition of roofs makes an additive localization"
deps: ["thm-the-calculus-of-fractions-constructs-the-localization", "def-additive-category"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.11, p. 383"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an additive category $\mathcal C$ with a two-sided multiplicative system and the standing localization size data, addition of left roofs by a common denominator makes $S^{-1}\mathcal C$ additive. Composition is bilinear, and $Q$ preserves zero objects and finite biproducts.

## Facts & Assumptions

**Given:** For an additive category $\mathcal C$ with a two-sided multiplicative system and the standing localization size data, addition of left roofs by a common denominator makes $S^{-1}\mathcal C$ additive. Composition is bilinear, and $Q$ preserves zero objects and finite biproducts.

[F1] Roof localization is a category, and equality of ordinary arrows is detected by a denominator ([[thm-the-calculus-of-fractions-constructs-the-localization]]).

[F2] An additive category is preadditive and has finite biproducts ([[def-additive-category]]).

## Proof

1.1 For $(s,f),(t,g):X\to Y$, choose $a\in S,b$ with $sa=tb=r\in S$ and define their sum as $(r,fa+gb)$. If roofs already have denominator $r$, they agree exactly when their numerators agree after some further refinement $e$ with $re\in S$: one implication is immediate; for the other, cancel $r$ between the two refinement legs and then precompose by the resulting denominator. [F1, F2, algebra]

2.1 For two choices of common denominator, refine those denominators once more. Equality of each of the two summands can then be witnessed at that denominator by the previous criterion; applying cancellation successively makes both numerator equalities simultaneous. Their sums are equal there by additivity. This proves choice and representative independence. At a common denominator, associativity, commutativity, zero and negation are precisely the abelian-group laws in $\mathcal C(U,Y)$. [F1, F2, step 1.1, algebra]

3.1 Postcomposition by an ordinary arrow is additive since it acts on numerators. Precomposition by an ordinary arrow is additive: use one Ore square with the common denominator of both summands. Composition with $Q(s)^{-1}$ is the inverse of the additive composition bijection for $Q(s)$, and is therefore additive. Every localized arrow is a product of ordinary arrows and inverse denominators, proving bilinearity. [F1, F2, step 2.1, algebra]

4.1 The image of $1_0=0$ shows $Q(0)$ is a zero object: every arrow to or from it is zero by bilinearity and the identity law. For $B=X\oplus Y$, the equations $p_Xi_X=1$, $p_Yi_Y=1$, $p_Xi_Y=p_Yi_X=0$ and $i_Xp_X+i_Yp_Y=1_B$ survive under the additive $Q$. They supply unique tuples of incoming and outgoing arrows, hence make $Q(B)$ a biproduct. The empty biproduct is $Q(0)$, and binary ones iterate to finite ones. [F2, step 3.1, algebra] ∎
