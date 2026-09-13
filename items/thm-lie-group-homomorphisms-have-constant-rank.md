---
id: thm-lie-group-homomorphisms-have-constant-rank
kind: theorem
title: Lie-group homomorphisms have constant rank
status: published
origin: pipeline
deps: [def-lie-group-homomorphism-isomorphism-and-automorphism, def-left-and-right-translations-on-a-lie-group, thm-chain-rule-for-differentials-of-smooth-maps]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: First Isomorphism Theorem discussion, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.7 and proof in Section 9.1, printed pages 29 and 53–54
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

If $F:G\to H$ is a smooth Lie-group homomorphism, then

$$\operatorname{rank}(dF_g)=\operatorname{rank}(dF_e)$$

for every $g\in G$. In particular, $F$ is a constant-rank smooth map, with no
connectedness assumption on either group.

## Facts & Assumptions

**Given:** A smooth Lie-group homomorphism $F:G\to H$ and $g\in G$.

[F1] Left translations are diffeomorphisms, so their differentials are
linear isomorphisms. [[def-left-and-right-translations-on-a-lie-group]].

[F2] Differentials satisfy the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 The homomorphism identity is $F\circ L_g=L_{F(g)}\circ F$. Differentiating it at $e$ and using [F2] gives $dF_g\circ d(L_g)_e=d(L_{F(g)})_e\circ dF_e$. [F2, algebra]

2.1 Both translation differentials in step 1.1 are isomorphisms by [F1]. Therefore $dF_g=d(L_{F(g)})_e\circ dF_e\circ d(L_{g^{-1}})_g$, so composing with the two isomorphisms does not change rank. This proves the displayed equality. Dimension zero, disconnected groups, and the zero differential require no separate argument, and no choice principle is used. [F1, step 1.1, algebra] ∎
