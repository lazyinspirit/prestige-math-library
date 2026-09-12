---
id: prop-short-exact-sequences-of-filtered-complexes-give-compatible-exact-couples
kind: proposition
title: Short exact sequences of filtered complexes give compatible exact couples
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-a-filtered-complex-produces-an-exact-couple", "prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences", "def-filtered-chain-map", "thm-naturality-of-the-homology-connecting-morphism", "lem-spectral-sequence-subquotient-and-local-lifting-calculus", "prop-homology-respects-identities-and-composition"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Let $0\to A\xrightarrow{\alpha}B\xrightarrow{\beta}C\to0$ be a short exact sequence of filtered complexes in an abelian category, whose maps are strict degreewise. Thus, identifying $A_n$ with its image in $B_n$, one has $F_pA_n=A_n\cap F_pB_n$ and $\beta_n(F_pB_n)=F_pC_n$, so
$$0\longrightarrow F_pA_n\longrightarrow F_pB_n\longrightarrow F_pC_n\longrightarrow0$$
is exact for all $p,n$. Then the associated-graded sequences are short exact sequences of complexes. The filtered maps induce morphisms between the three associated exact couples, commuting with $i,j,k$, and hence compatible morphisms of all their derived couples and spectral sequences. This does not assert short exactness of the homology $D$ or $E$ terms.

## Facts & Assumptions

[F1] [[def-filtered-chain-map]] preserves all filtration subcomplexes. [[thm-a-filtered-complex-produces-an-exact-couple]] constructs $D_{p,q}=H_{p+q}(F_p)$ and $E_{p,q}=H_{p+q}(F_p/F_{p-1})$ with inclusion, quotient and connecting maps.

[F2] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] supplies epic local lifts, nested quotients and descent of subobject containments.

[F3] [[thm-naturality-of-the-homology-connecting-morphism]] gives the connecting square for a morphism of short exact sequences of complexes. [[prop-homology-respects-identities-and-composition]] preserves commuting chain-map squares under homology.

[F4] [[prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences]] derives and iterates commuting couple maps.

## Proof

**Given:** The strict filtered short exact sequence. Fix $p,n$ and write $\operatorname{gr}_pX=F_pX/F_{p-1}X$.

1.1 The restriction of $\alpha_n$ to $F_pA_n$ is monic. Its image is $A_n\cap F_pB_n$, exactly the kernel of the restriction of $\beta_n$ to $F_pB_n$. Strict surjectivity makes the latter map epic onto $F_pC_n$. The maps commute with the restricted differentials by [F1], so these are short exact sequences of subcomplexes for every $p$. [F1, F2]

1.2 For either filtered map $f=\alpha$ or $\beta$, there is a commutative ladder from $0\to F_{p-1}X\to F_pX\to\operatorname{gr}_pX\to0$ to the corresponding sequence for its target $Y$. Passing to homology gives the couple's $D$ and $E$ comparison maps. The squares for $i$ and $j$ commute because their chain maps are respectively filtration inclusions and quotient projections and homology preserves compositions. The square for $k:E_{p,q}\to D_{p-1,q}$ is exactly the connecting square in [F3], with homology degree decreasing from $p+q$ to $p+q-1$. Hence all three couple squares commute at their prescribed bidegrees. [F1, F3]

2.1 The induced graded map from $A$ is monic: an element of $F_pA_n$ mapping into $F_{p-1}B_n$ lies in $A_n\cap F_{p-1}B_n=F_{p-1}A_n$. The graded map to $C$ is epic by lifting from $F_pC_n$ to $F_pB_n$ locally. If $b\in F_pB_n$ maps into $F_{p-1}C_n$, lift that image locally to $b'\in F_{p-1}B_n$. Then $b-b'\in\ker\beta_n\cap F_pB_n$ is the image of an element of $F_pA_n$, and has the same graded class as $b$. Conversely a graded class from $A$ maps to zero because $\beta\alpha=0$. This proves both kernel-image containments. The element notation means morphisms after finite epic pullbacks, and all equalities descend by [F2]. Thus the graded sequence is short exact degreewise; its maps commute with differentials by quotient descent. [F1, F2, step 1.1]

3.1 Apply [F4] to both maps from step 1.2 to obtain the derived-couple and spectral maps on all pages. The graded short exactness in step 2.1 is a statement at the chain level; step 1.2 applies homology and yields its natural connecting ladders, not a claim that each induced homology arrow is monic or epic. Zero complexes, equal successive filtration pieces and all integer indices are permitted throughout. Only finite epic lifting and canonical quotient arrows were used, without AC or a choice of splitting. [F4, step 2.1, step 1.2] ∎
