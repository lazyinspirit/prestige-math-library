---
id: "lem-bounded-below-complexes-admit-injective-replacements"
kind: "lemma"
title: "Bounded below complexes admit injective replacements"
deps: ["lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology", "def-a-category-with-enough-projectives-and-with-enough-injectives", "cor-the-pushout-of-a-monomorphism-is-a-monomorphism", "def-dependent-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05T6"
      title: "Lemma 13.15.5, dual to 13.15.4"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $\mathcal A$ has enough injectives and $X^n=0$ for $n<a$, there is a termwise monic quasi-isomorphism $j:X\to I$ with each $I^n$ injective and $I^n=0$ for $n<a$. Assume DC for the successive objectwise choices, or supply the successive injective monomorphisms. If only $H^n(X)=0$ for $n<a$, a quasi-isomorphism to such an $I$ still exists, without the termwise-monic assertion.

## Facts & Assumptions

**Given:** If $\mathcal A$ has enough injectives and $X^n=0$ for $n<a$, there is a termwise monic quasi-isomorphism $j:X\to I$ with each $I^n$ injective and $I^n=0$ for $n<a$. Assume DC for the successive objectwise choices, or supply the successive injective monomorphisms. If only $H^n(X)=0$ for $n<a$, a quasi-isomorphism to such an $I$ still exists, without the termwise-monic assertion.

[F1] Enough injectives means every object embeds in an injective ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[F2] The pushout of a monomorphism in an abelian category is a monomorphism ([[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]]).

[F3] DC supplies successive choices on a nonempty set with an entire extension relation ([[def-dependent-choice]]).

[F4] Lower canonical truncation preserves cohomology at and above the cut and kills lower cohomology ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

## Proof

1.1 Start with $I^j=0$ below $a$. Maintain the complex and monic map through degree $n$, cohomology isomorphisms below $n$, and a monomorphism $\operatorname{coker}d_X^{n-1}\to\operatorname{coker}d_I^{n-1}$. At $n=a-1$ all these data are zero. [given, algebra]

2.1 Form the pushout $E=X^{n+1}\amalg_{\operatorname{coker}d_X^{n-1}}\operatorname{coker}d_I^{n-1}$, using the map to $X^{n+1}$ induced by $d_X^n$. Choose $E\hookrightarrow I^{n+1}$ injective. The component $X^{n+1}\to I^{n+1}$ is monic by pushout stability, and $I^n\to\operatorname{coker}d_I^{n-1}\to I^{n+1}$ is the differential. The square commutes and consecutive differentials compose to zero. [F1, F2, step 1.1]

3.1 The pushout kernel and cokernel identities give a monomorphism on the next cokernels and an isomorphism on $H^n$: explicitly this is the arrow-reversal of the pullback identities for cycles and boundaries, with kernels exchanged for cokernels, epis for monos, and degree $n$ exchanged for $-n$. The pushout identifies the quotient of the new ambient cokernel by the old one with the corresponding quotient for $X$; its kernel identity gives equality of the remaining cohomology subquotients. Thus the maintained conditions hold at $n+1$. [F2, step 2.1, algebra]

4.1 DC produces the ascending sequence of stages, or the supplied embeddings do. If object choices form a definable class, recursively bound ranks of extensions of each node by the least rank admitting one, bound over the set of nodes using Replacement, and take the set of all bounded extensions at the next stage. The union of these stage sets is a set to which DC applies. Every fixed degree then stabilizes and its cohomology comparison is an isomorphism. Finally $X\to\tau^{\geq a}X$ handles a merely cohomological lower bound before this construction. No class-indexed choice of $I_X$ is inferred. [F3, F4, step 3.1] ∎
