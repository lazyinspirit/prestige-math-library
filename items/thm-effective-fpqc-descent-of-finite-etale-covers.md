---
id: thm-effective-fpqc-descent-of-finite-etale-covers
kind: theorem
title: "Finite étale covers descend effectively along fpqc covers"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-fpqc-morphism-schemes
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-faithfully-flat-descent-of-flatness
  - lem-differentials-base-change
  - thm-affine-scheme-ring-anti-equivalence
  - lem-relative-spec-glues-affine-algebras
  - lem-flatness-affine-local-source-target
  - thm-faithfully-flat-ring-map-characterisations
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé VIII §§1–2; Exposé V §§3–5"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Descent §§4–7 and Fundamental Groups §§3, 5–6"
      url: https://stacks.math.columbia.edu/download/descent.pdf
---

## Statement

Assume AC. Let $p:S'\to S$ be faithfully flat and quasi-compact. Pullback gives an equivalence between finite étale $S$-schemes and finite étale $S'$-schemes equipped with an isomorphism of their two pullbacks to $S'\times_SS'$ satisfying the cocycle identity over $S'\times_SS'\times_SS'$. Morphisms in the latter category must commute with these isomorphisms. This includes effectiveness, uniqueness up to unique compatible isomorphism, and descent of morphisms. The base schemes need not be Noetherian.

## Facts & Assumptions

**Given:** AC, the fpqc map $p$, and a finite étale cover upstairs with its cocycle datum.

[F1] Effective descent for modules and algebras is the invariant/equalizer construction for a faithfully flat affine ring map ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

[F2] A module-finite algebra is finite étale exactly when its module is finitely presented and flat and its differentials vanish ([[lem-finite-etale-algebra-module-presentation-and-rank]]). Flatness descends faithfully flatly and differentials commute with base change ([[thm-faithfully-flat-descent-of-flatness]], [[lem-differentials-base-change]]).

[F3] Affine spectra represent algebras and their maps; affine-local algebra sheaves glue their relative spectra ([[thm-affine-scheme-ring-anti-equivalence]], [[lem-relative-spec-glues-affine-algebras]]). Flatness is affine local and a flat affine map surjective on spectra is faithfully flat ([[lem-flatness-affine-local-source-target]], [[thm-faithfully-flat-ring-map-characterisations]]).

[F4] The meaning of fpqc is faithfully flat and quasi-compact ([[def-fpqc-morphism-schemes]]). AC is assumed ([[def-axiom-of-choice]]) through the finite-étale suppliers of [F2] and the affine-chart suppliers; finite refinements below use only finite choices once an affine cover is fixed.

## Proof

1.1 For an affine faithfully flat map $A\to B$, let $N$ be the upstairs finite étale $B$-algebra and let $D$ be its invariant algebra. By [F1], $D\otimes_A B\cong N$. To descend finite generation, express finitely many $B$-module generators of $N$ as finite sums of tensors $d\otimes b$. The finitely many occurring $d$ generate a submodule $D_0$ whose base change surjects onto $N$. Thus $(D/D_0)\otimes_A B=0$, and faithful flatness gives $D=D_0$. [F1, construct]

2.1 Choose a finite free surjection $A^r\to D$ with kernel $K$. Flatness of $B/A$ identifies $K\otimes_A B$ with the kernel of $B^r\to N$. This kernel is finitely generated because $N$ is finitely presented as a $B$-module by [F2]; the assertion for an arbitrary finite free surjection follows by comparing it with a fixed finite presentation and eliminating finitely many auxiliary generators. Applying the same finite-tensor-generator argument as step 1.1 to $K$ proves that $K$ is finitely generated. Hence $D$ is finitely presented as an $A$-module. It is flat by [F2]. Since $\Omega_{D/A}\otimes_A B\cong\Omega_{N/B}=0$, faithful flatness gives $\Omega_{D/A}=0$. Therefore $D$ is finite étale by [F2]. Maps descend with their algebra structures by [F1], proving the entire assertion for affine faithfully flat maps. [F1, F2, step 1.1, algebra]

3.1 Now restrict the target to an affine open $U=\operatorname{Spec}A\subseteq S$. By [F4], $S'_U$ is quasi-compact, so choose finitely many affine opens $V_j=\operatorname{Spec}B_j$ covering it. Their disjoint union is affine, with ring $B=\prod_jB_j$. The map $A\to B$ is flat and surjective on spectra, hence faithfully flat by [F3]. Pull the upstairs cover and cocycle back to this disjoint union, and use steps 1.1 and 2.1 to construct a finite étale cover of $U$. Its pullback is canonically the given cover on each $V_j$; the isomorphisms agree on intersections because their restrictions to $V_j\times_UV_k$ are precisely the original descent datum. Thus they glue to identify its pullback over all of $S'_U$ with the original cover and datum. [F3, F4, step 2.1, construct]

4.1 On the intersections of two affine opens of $S$, cover the intersection by affine opens and repeat step 3.1. Full faithfulness in step 2.1 makes the resulting comparison isomorphisms unique after requiring compatibility upstairs; uniqueness makes them agree on further overlaps and satisfy the cocycle identity. The algebras and then their relative spectra glue by [F3]. Finiteness and étaleness are affine local, so the glued cover has both properties. A compatible upstairs morphism descends on these affine opens by [F1] and its unique local descents agree, hence glue. This proves the claimed equivalence, including effectiveness and uniqueness, over arbitrary base schemes. AC is used through the suppliers recorded in [F4]. [F1, F3, F4, step 2.1, step 3.1] ∎
