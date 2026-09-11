---
id: "thm-replacement-in-the-constructible-universe"
kind: "theorem"
title: "Replacement in L"
deps: ["thm-separation-in-the-constructible-universe", "prop-constructible-levels-transitivity-ordinals-and-rank", "lem-finite-reflection-along-constructible-levels"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.7 p15 (local expansion of omitted Replacement case);
        Marks Lemma 20.5 p87
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, fix a formula $\phi(x,y,p)$ and $a,p_1,\ldots,p_n\in L$. If for every $x\in a$ there is exactly one $y\in L$ with $\phi^L(x,y,p)$, its image $\{y\in L:\exists x\in a\ \phi^L(x,y,p)\}$ is an element of $L$. Thus Replacement holds in $L$, as a scheme.

## Facts & Assumptions

**Given:** ZF; a fixed formula internally functional on a constructible set. Ambient Replacement gives the set image and a rank bound, then internal Separation or reflected Def puts that image in L.

[F1] [[thm-separation-in-the-constructible-universe]]: The already proved Separation scheme produces subsets of any set in L using fixed relativized formulas.

[F2] [[prop-constructible-levels-transitivity-ordinals-and-rank]]: Ranks bound a set of constructible elements in a level; each level is in L.

[F3] [[lem-finite-reflection-along-constructible-levels]]: Reflection gives the optional direct Def realization once the image and parameters have been bounded.

## Proof

1.1 The fixed ambient formula $y\in L\land\phi^L(x,y,p)$ is functional on the actual set $a$, since transitivity puts each $x\in a$ in L. Ambient Replacement therefore forms its image Y as a set of constructible elements. Ambient Replacement again forms the set of their constructible ranks. A successor above their supremum and the finitely many parameter ranks gives $\beta$ with $Y\subseteq L_\beta$ and $a,p_i\in L_\beta$. Empty images require no exception to this bound. [F2, given]

2.1 Apply Separation inside L to the set $L_\beta\in L$ with formula $\exists x\in a\ \phi(x,y,p)$. Its relativization singles out exactly Y, because step 1.1 bounded the entire image. Hence $Y\in L$, using neither internal Replacement nor a choice of witnesses. [F1, F2, step 1.1]

3.1 Equivalently, reflect that fixed image-defining formula at a level $L_\gamma$ above $\beta$. All image elements and parameters are in this level. Agreement makes its Def subset precisely Y, so $Y\in L_{\gamma+1}$. This also confirms that the assertion is a scheme for fixed formulas and has no uniform class-truth premise. [F3, step 1.1, step 2.1] ∎
