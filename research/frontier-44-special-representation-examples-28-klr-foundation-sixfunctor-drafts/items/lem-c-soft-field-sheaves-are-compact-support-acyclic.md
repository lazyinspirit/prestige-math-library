---
id: lem-c-soft-field-sheaves-are-compact-support-acyclic
kind: lemma
title: Compact-support acyclicity of c-soft field sheaves
status: draft
origin: pipeline
deps:
- lem-sections-near-a-compact-set-are-sections-on-that-set
- lem-ringed-space-module-sheaves-enough-injectives
- thm-extension-by-zero-adjunction-exactness
- thm-exactness-of-sheaves-stalkwise
- lem-extension-by-zero-short-exact-sequence
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC. On a locally compact Hausdorff space call $F$ c-soft if every section on a compact subset extends globally. Such extensions can be chosen with compact support inside a prescribed neighbourhood. Injective $k$-sheaves are c-soft; c-soft sheaves are $\Gamma_c$-acyclic. Open and closed restrictions, open extension by zero and direct sums preserve c-softness. A short exact sequence with c-soft kernel has neighbourhood lifts on compact sets; if the middle term is also c-soft, its quotient is c-soft and the sequence is exact under $\Gamma_c$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-sections-near-a-compact-set-are-sections-on-that-set]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-ringed-space-module-sheaves-enough-injectives]] is used with its stated hypotheses.

[F3] The exact supplier [[thm-extension-by-zero-adjunction-exactness]] is used with its stated hypotheses.

[F4] The exact supplier [[thm-exactness-of-sheaves-stalkwise]] is used with its stated hypotheses.

[F5] The exact supplier [[lem-extension-by-zero-short-exact-sequence]] is used with its stated hypotheses.

[F6] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

## Proof

1.1 A sheaf F is c-soft when Γ(X,F)→Γ(K,F|K) is onto for every compact K. In a locally compact Hausdorff space this is equivalent to extension with compact support: put K inside an open W with compact closure, choose a smaller neighbourhood W_0 of K with closure inside W, prescribe the given section near K and zero on the compact collar closure(W)\W_0, extend that section on the disjoint compact subsets by c-softness, restrict to W and glue zero across the exterior. The result is compactly supported and has the prescribed germs on K. The same argument gives an extension supported in any prescribed neighbourhood of K. [given, construct, algebra]

1.2 **Given:** 0→F→G→H→0 and F c-soft. Every section of H on a compact K lifts to a section of G on some neighbourhood of K. Choose finitely many local lifts over a compact shrinking C_1,…,C_m of K. Inductively patch the lift on the previous compact union with the next lift: their difference lies in F on a neighbourhood of the compact intersection. Extend its restriction on that compact intersection to a section of F over the new domain, using the support-controlled c-soft extension. Correct the new lift by that section. They then agree on a neighbourhood of the compact intersection. The finite neighbourhood shrinking of B1 makes their domains meet only where they agree, so they glue. This produces the claimed neighbourhood lift. If G is also c-soft, its extension gives a global lift; consequently H is c-soft. [given, construct, algebra]

1.3 For a compactly supported section s of H, choose a relatively compact W containing its support and perform the same finite patching including the zero lift on a compact collar near ∂W. The errors on overlaps lie in F and are corrected by extensions supported in the corresponding neighbourhoods. The lift is zero near the collar and can be glued to zero outside W. Thus Γ_c(G)→Γ_c(H) is onto when F and G are c-soft. Injectivity at Γ_c(F) and exactness at Γ_c(G) follow by support and sheaf kernels. This proves compact-support exactness on short exact sequences of c-soft sheaves. [given, construct, algebra]

2.1 An injective k-sheaf I is flasque: j_U!k_U→j_V!k_V is monic for U⊂V, and injectivity extends a morphism corresponding to a section on U. B1 extends any section on compact K to a neighbourhood, and flasqueness extends that section to X, so I is c-soft. Resolve a c-soft F by k-linear injectives. The successive quotients remain c-soft by the preceding patching lemma. Applying Γ_c gives an exact positive-degree complex. Hence R^qΓ_c(F)=0 for q>0. This argument also proves acyclicity for Γ on compact spaces, where Γ_c=Γ. Restriction of a c-soft sheaf to an open set is c-soft by support-controlled extension. Restriction to a closed subset is c-soft, since any compact subset is also compact in X and B1 lifts its section to the ambient restriction. Extension by zero of a c-soft sheaf on an open subset is c-soft: a section on a compact set has zero germs near its compact boundary part, leaving a compact support set in the open subset, to which the preceding support-controlled extension applies. Direct sums preserve c-softness: a section on a compact set has, locally, only finitely many nonzero summands; a finite cover produces a finite global set of summands, each extended separately. In particular tensor with a constant vector space preserves c-softness after choosing a basis. AC is declared for that last basis and for injectives. [given, construct, algebra] ∎

