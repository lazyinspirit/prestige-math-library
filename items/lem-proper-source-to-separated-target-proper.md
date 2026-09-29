---
id: lem-proper-source-to-separated-target-proper
kind: lemma
title: Morphisms from a proper scheme to a separated one are proper
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-proper-morphism
  - def-separated-morphism-schemes
  - def-graph-morphism-over-base
  - lem-graph-as-pullback-diagonal
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-proper
  - def-base-change-morphism-schemes
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - def-axiom-of-choice
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.8 (tag 01WG) and Lemma 29.42.4"
      url: https://stacks.math.columbia.edu/tag/01WG
    - title: "Vakil, The Rising Sea, Exercise 11.1.18 and Section 11.3, printed p.232"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be proper and let $g:Y\to S$ be
separated. Then every $S$-morphism $h:X\to Y$ is proper. No Noetherian,
reducedness or nonemptiness hypothesis is used, and the empty source is
included.

## Facts & Assumptions

**Given:** The Axiom of Choice, a proper morphism $f:X\to S$, a separated morphism $g:Y\to S$ and an $S$-morphism $h:X\to Y$.

[F1] A morphism is **proper** if and only if it is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F2] A morphism is **separated** exactly when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F3] For an $S$-morphism $u:X\to Y$ the **graph morphism** is $\Gamma_u=(\operatorname{id}_X,u):X\to X\times_SY$; its first projection is the identity and its second projection is $u$, and the definition alone does not assert that its image is closed. ([[def-graph-morphism-over-base]])

[F4] For an $S$-morphism $u:X\to Y$, with $H=(u\operatorname{pr}_X,\operatorname{pr}_Y):X\times_SY\to Y\times_SY$, the square with top arrow $\Gamma_u$, bottom arrow $\Delta_{Y/S}$, left arrow $u$ and right arrow $H$ is Cartesian; thus $\Gamma_u$ is the base change of $\Delta_{Y/S}$ along $H$. ([[lem-graph-as-pullback-diagonal]])

[F5] Assume AC. Every base change of a closed immersion is a closed immersion. ([[lem-closed-immersion-affine-quotient-and-base-change]])

[F6] Assume AC. Every closed immersion is finite, hence proper; the empty closed immersion is included. ([[lem-closed-immersion-proper]])

[F7] For a morphism $S'\to S$ and an $S$-scheme $X\to S$, the base change is $X\times_SS'$ with structure map the second projection. ([[def-base-change-morphism-schemes]])

[F8] Assume AC. Properness survives arbitrary base change. ([[lem-proper-stable-base-change]])

[F9] Assume AC. A composite of proper morphisms is proper. ([[lem-proper-stable-composition]])

[F10] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: the graph of $h$ is the base change of the closed diagonal of the separated target, hence a closed immersion and therefore proper; the second projection of the fibre product is the base change of the proper morphism $f$, hence proper; and $h$ is their composite.

1.1 Since $g$ is separated, [F2] makes the diagonal $\Delta_{Y/S}:Y\to Y\times_SY$ a closed immersion. [F2]

1.2 Let $p:X\times_SY\to Y$ be the second projection. By [F7] the fibre product $X\times_SY$ with its projection $p$ to $Y$ is the base change of $f:X\to S$ along $g:Y\to S$; since $f$ is proper, the AC-qualified [F8] makes $p$ proper. [F7, F8]

2.1 Put $H=(h\operatorname{pr}_X,\operatorname{pr}_Y):X\times_SY\to Y\times_SY$, and let $\Gamma_h:X\to X\times_SY$ be the graph of $h$. By [F4] the square with top arrow $\Gamma_h$, bottom arrow $\Delta_{Y/S}$, left arrow $h$ and right arrow $H$ is Cartesian, so $\Gamma_h$ is the base change of $\Delta_{Y/S}$ along $H$. By step 1.1 the diagonal is a closed immersion, so the AC-qualified [F5] makes $\Gamma_h$ a closed immersion. [F3, F4, F5, step 1.1]

2.2 By [F3] the second projection of the graph $\Gamma_h$ is $h$, so $p\circ\Gamma_h=h$. [F3, step 1.2]

3.1 By the AC-qualified [F6] the closed immersion $\Gamma_h$ is finite, hence proper. [F6, step 2.1]

4.1 Thus $h$ is the composite of the proper morphism $\Gamma_h$ of step 3.1 with the proper morphism $p$ of step 1.2; by the AC-qualified [F9] the $S$-morphism $h$ is proper. [F9, step 3.1, step 1.2, step 2.2]

5.1 The Axiom of Choice [F10] is assumed and is used only through the four AC-qualified suppliers [F5], [F6], [F8] and [F9], in steps 2.1, 3.1, 1.2 and 4.1; the diagonal, graph and pullback identifications of steps 1.1, 2.1 and 2.2 are choice-free. If $X=\varnothing$ then $\Gamma_h$ and $h$ are empty morphisms and the same steps apply, the cited results allowing the empty fibred and zero-ring charts; if $Y=\varnothing$ then $X=\varnothing$ because $h$ maps into $Y$; if $h=\operatorname{id}_X$ then $Y=X$ and $g=f$, so the conclusion is the properness of $f$ itself. No Noetherian, reducedness or nonemptiness hypothesis is used. [F1, F6, F10, step 2.1, step 4.1] ∎
