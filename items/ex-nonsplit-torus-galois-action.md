---
id: ex-nonsplit-torus-galois-action
kind: example
title: "A quadratic norm-one torus and its sign action"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-axiom-of-choice", "lem-multiplicative-type-local-hopf-dictionary", "thm-multiplicative-type-groups-and-galois-character-modules", "cor-tori-correspond-to-torsion-free-character-lattices"]
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $k$ have characteristic different from $2$, and let $d\in k^\times$ be a nonsquare. The affine group $T=\operatorname{Spec}k[x,y]/(x^2-dy^2-1)$, with product $(x,y)(x',y')=(xx'+dyy',xy'+yx')$, is a nonsplit torus. Its character module is $\mathbb Z$, on which the nontrivial automorphism of $k(\sqrt d)/k$ acts by $n\mapsto-n$. For $k=\mathbb R$ and $d=-1$, this is the circle group $x^2+y^2=1$, as an algebraic group over $\mathbb R$.

## Facts & Assumptions

[A1] Assume [[def-axiom-of-choice]]; it is used through the general multiplicative-type classification, whose affineness interface uses fpqc submersiveness.

[F1] The local Hopf dictionary is [[lem-multiplicative-type-local-hopf-dictionary]].

[F2] Classification by Galois modules is [[thm-multiplicative-type-groups-and-galois-character-modules]].

[F3] The free-lattice criterion is [[cor-tori-correspond-to-torsion-free-character-lattices]].

## Verification

**Given:** $\operatorname{char}k\ne2$ and nonsquare $d\in k^\times$.

1.1 The displayed multiplication is multiplication of $x+y\sqrt d$; the norm $x^2-dy^2$ multiplies, so it preserves the equation. The identity is $(1,0)$ and the inverse is $(x,-y)$, and associative multiplication follows by direct expansion in the basis $1,\sqrt d$. This gives an affine group by F1. Over $L=k(\sqrt d)$ put $t=x+\sqrt d\,y$. Then $t^{-1}=x-\sqrt d\,y$, and $x=(t+t^{-1})/2$, $y=(t-t^{-1})/(2\sqrt d)$ give inverse algebra maps with $L[t,t^{-1}]$. They preserve multiplication, so $T_L\cong\mathbf G_m$. [F1, algebra]

2.1 The nontrivial $\sigma\in\operatorname{Gal}(L/k)$ sends $t$ to $t^{-1}$, so it sends $t^n$ to $t^{-n}$. F2 gives the sign action on $\mathbb Z$; F3 makes $T$ a torus. It cannot be split: a split rank-one torus has trivial action, and no isomorphism of abelian groups $\mathbb Z\to\mathbb Z$ intertwines the sign action with the trivial action (its nonzero generator would have to equal its negative). For $d=-1$ over $\mathbb R$ the equation and product are exactly those of unit complex numbers. [A1, F2, F3, step 1.1, algebra] ∎
