---
id: lem-the-effacement-extension-commutes-with-connecting-morphisms
kind: lemma
title: "The effacement extension commutes with connecting morphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-extend-a-degree-zero-transformation-through-one-dimension-shift, lem-the-effacement-extension-is-independent-of-the-effacing-morphism, lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle, lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Statement

The next-degree components supplied by
[[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]] can be
chosen so that they commute with the connecting morphisms of every short exact
sequence. Equivalently, once the lower-degree components form a partial
morphism of delta functors, the one-step extension may be chosen to preserve
that compatibility in the next degree as well.
## Facts & Assumptions

**Given:** A short exact sequence and lower-degree components already
compatible with its connecting maps.

[L1] Item 19 defines the next-degree components from chosen effacements and
proves naturality when the chosen effacement sequences fit into a ladder
([[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]]).

[L2] Item 20 makes those next-degree components independent of which effacing
morphisms are used
([[lem-the-effacement-extension-is-independent-of-the-effacing-morphism]]).

[L3] The dimension-shift lemmas give the monicity or epicity used to define
the one-step components from the connecting morphisms of the chosen
effacement sequences
([[lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle]],
[[lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]]).

## Proof

**Proof technique:** direct.

1.1 In the homological case, write the given sequence as $0\to A'\to A\to A''\to0$ and choose the projective effacement $0\to K\to P\xrightarrow{p}A''\to0$ used by [L1] to define $u_n(A'')$. Projectivity of $P$ lifts $p$ through the epimorphism $A\to A''$; the lift restricts to a map $k:K\to A'$, producing a morphism from the effacement sequence to the given sequence. By [L2], using this ladder-compatible effacement does not change $u_n(A'')$. Naturality of the two connecting morphisms, the defining equation from [L1], and naturality of the already constructed $u_{n-1}$ give $\partial^{T}_{\mathrm{given}}u_n(A'')=T_{n-1}(k)\partial^{T}_{\mathrm{eff}}u_n(A'')=T_{n-1}(k)u_{n-1}(K)\partial^{S}_{\mathrm{eff}}=u_{n-1}(A')\partial^{S}_{\mathrm{given}}$. This is the required homological connecting square. [L1, L2, L3, given, construct]

1.2 In the cohomological case, choose the injective effacement $0\to A'\xrightarrow{e}I\to C\to0$ used by [L1] to define $u^{n+1}(A')$. Injectivity of $I$ extends $e$ across the monomorphism $A'\to A$ and induces a map $A''\to C$, producing a morphism from the given sequence to the effacement sequence. Again [L2] permits this compatible choice. Naturality of the connectors, the defining cokernel equation from [L1], and naturality of $u^n$ then give $u^{n+1}(A')\partial^{S}_{\mathrm{given}}=u^{n+1}(A')\partial^{S}_{\mathrm{eff}}S^n(A''\to C)=\partial^{T}_{\mathrm{eff}}T^n(A''\to C)u^n(A'')=\partial^{T}_{\mathrm{given}}u^n(A'')$. This is the required cohomological connecting square. [L1, L2, L3, given, construct]

2.1 The two cases show that the one-step extension preserves every connecting morphism, independently of the effacement choices by [L2]. [step 1.1, step 1.2] ∎
