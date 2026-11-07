---
id: lem-nagata-simultaneous-boundary-closure-separation
kind: lemma
title: Simultaneously separate boundary closures in proper models
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-nagata-quasi-domination-after-admissible-blowup
  - lem-nagata-boundary-containment-after-admissible-blowup
  - lem-nagata-intersection-blowup-separates-strict-transforms
  - lem-nagata-admissible-blowups-compose
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - lem-nagata-product-blowup-dominates-factor-blowups
  - def-separated-morphism-schemes
  - def-proper-morphism
proof_strategy: direct
axiom_use: No choice principle is assumed. A finite product closure, coherent scheme closures, one intersection-center blowup and finitely many boundary-containment blowups give the separation.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Lemma3.2, setup and full proof, internal pp.25–28, read in full.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Lemma0.5, printed pp.663–664, read in full.
---

## Statement

Let $S$ be Noetherian, let $X\to S$ be separated of finite type, and let $U$ be a common dense open of $X$ and of finitely many proper $S$-schemes $P_i$, $1\leq i\leq m$, $m\geq1$. Let $V_i\subseteq P_i$ be open containing $U$, and let $q_i:V_i\to X$ be proper $S$-morphisms restricting to the identity on $U$. Let $Y_i\subseteq V_i$ be closed subschemes. Write $P$ for the scheme-theoretic closure of $U$ in $\prod_SP_i$ and $\pi_i:P\to P_i$ for its projections. Suppose $\bigcap_i\pi_i^{-1}(Y_i)=\varnothing$.

There are coherent-ideal blowups $P_i'\to P_i$, unit on all of $V_i$, such that, writing $P'$ for the scheme-theoretic closure of the unchanged $U$ in $\prod_SP_i'$ and $\overline{Y_i'}$ for the scheme-theoretic closure of $Y_i\subseteq V_i\subseteq P_i'$,
$$\bigcap_i(\pi_i')^{-1}(\overline{Y_i'})=\varnothing.$$
All these blowups are proper and preserve the actual $V_i$ and their maps $q_i$. Empty schemes and empty $Y_i$ are included; no reducedness or schematic-density assumption on the original proper models is added.

## Statement references

[Conrad, Lemma3.2, internal pp.25–28](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** Exactly the proper-model diagram, common dense open, closed subschemes and empty intersection in the Statement.

[F1] A morphism on a dense open with graph closed over its protected open extends to a quasi-domination after a coherent-ideal blowup preserving that protected open. [[lem-nagata-quasi-domination-after-admissible-blowup]]

[F2] In the Noetherian boundary-containment diagram, a protected-open blowup of the base makes the inverse image of the boundary closure, intersected with the closure of the common open upstairs, lie in a specified closed upstairs subset, provided the original boundary inverse image already lies there. [[lem-nagata-boundary-containment-after-admissible-blowup]]

[F3] Blowing up the scheme intersection of finitely many closed subschemes makes their strict transforms have empty intersection. [[lem-nagata-intersection-blowup-separates-strict-transforms]]

[F4] Coherent-ideal blowups are proper, universal for invertible image ideals and preserve unchanged schematically dense opens; finite composites compress to one preserving every common protected open. [[lem-nagata-admissible-blowup-universal-property-and-properness]] [[lem-nagata-product-blowup-dominates-factor-blowups]] [[lem-nagata-admissible-blowups-compose]]

[F5] Separated targets have closed diagonals. Proper maps are universally closed and stable under base change and composition. [[def-separated-morphism-schemes]] [[def-proper-morphism]]


## Proof

1.1 First arrange that each given $q_i$ has graph closed in the full $P_i\times_SX$. Apply [F1] to the dense open $V_i\subseteq P_i$, with domain and protected open both $V_i$, and target $X$. It supplies a blowup preserving $V_i$ and an extension on an open $T_i$ containing $V_i$, with full closed graph. The inclusion $V_i\hookrightarrow T_i$ is proper: $V_i\to X$ is proper by hypothesis, $T_i\to X$ is separated, and the closed-graph factorization makes the inclusion proper. Its image is closed and contains the dense unchanged $U$, so it is all of $T_i$. Thus $T_i=V_i$, giving the desired graph without enlarging the actual map. These preliminary blowups may be absorbed into the final ones by [F4]. Under any such protected-open modifications, the new product closure maps properly to the old one, extends the identity on $U$ and is surjective because its closed image contains dense $U$. The original empty intersection persists by pullback. Hence replace the models by these modified models and retain the notation. [F1, F4, F5, given, construct, algebra]

2.1 In $P\times_SX$ pull back the closed graph of $q_i$ along $\pi_i\times1_X$. It is a closed subscheme $\Gamma_i$ projecting isomorphically to $W_i=\pi_i^{-1}(V_i)\subseteq P$. The common $U$ is open and schematically dense in $P$ by its closure definition, and therefore in $W_i$. Each $\Gamma_i$ is consequently the scheme-theoretic closure of the SAME diagonal copy of $U$ in $P\times_SX$: its ideal is exactly the kernel of restriction to that copy, since $U$ is schematically dense in $\Gamma_i$. Thus all $\Gamma_i$ agree. Their isomorphic projection domains $W_i$ are the same open $W$, and the maps $q_i\pi_i$ agree there. Put $D_i=\pi_i^{-1}(Y_i)$, closed in $W$, and let $Z_i$ be its scheme-theoretic closure in $P$. Over $W$, $Z_i$ restricts to $D_i$. Thus $\bigcap Z_i$ is disjoint from $W$, because $\bigcap D_i$ is empty by hypothesis. In particular it is disjoint from each $D_i$ and from $U$. These closures are coherent on the Noetherian $P$, using their finite affine kernel descriptions. [F4, F5, step 1.1, construct, algebra]

3.1 Blow up the scheme intersection $Z=\bigcap_iZ_i$ in $P$, writing $a:P^*\to P$. Its center is disjoint from all of $W$, hence from $U$, by step 2.1. Let $T_i\subseteq P^*$ be the strict transforms of $Z_i$. By [F3], $\bigcap_iT_i=\varnothing$. Put $p_i=\pi_i a:P^*\to P_i$. Since $a$ is unchanged over $W$, $p_i^{-1}(Y_i)=a^{-1}(D_i)$ is unchanged and is contained in $T_i$. Give $\overline{Y_i}\subseteq P_i$ its coherent scheme-theoretic closure, so $\overline{Y_i}\cap V_i=Y_i$. Apply [F2] with base $P_i$, protected open $V_i$, upstairs $P^*$, closed base boundary $\overline{Y_i}$ and specified closed upstairs subset $T_i$. The common unchanged open is $U$. This gives a $V_i$-admissible blowup $b_i:P_i'\to P_i$ such that, in $P^*\times_{P_i}P_i'$, the inverse image of $\overline{Y_i'}$, intersected with the closure $H_i$ of $U$, is contained in the inverse image of $T_i$. All hypotheses hold by the containment just proved; $p_i$ is separated, since $P^*$ and $P_i$ are separated over $S$. [F2, F3, F4, step 2.1, construct, algebra]

4.1 Form $P'$ as in the Statement and let $c:P'\to P$ be its proper map, extending the identity on $U$. Let $R$ be the blowup of $P'$ along the image of the center ideal of $a$. That ideal is unit on $U$. By [F4], $U$ is schematically dense in $R$, and the invertible image ideal gives a map $r:R\to P^*$ over $P$. Write $f:R\to P'$ for its blowup map and $f_i=\pi_i'f:R\to P_i'$. The maps $(r,f_i)$ land in $P^*\times_{P_i}P_i'$. Their images are contained in $H_i$: pull back the ideal of that closure; it vanishes on the schematically dense $U$ and is therefore zero on $R$. Pulling the containment in step 3.1 back along these maps gives $f_i^{-1}(\overline{Y_i'})\subseteq r^{-1}(T_i)$ as sets. Their intersection is empty because $\bigcap T_i$ is empty. [F2, F4, step 3.1, construct, algebra]

5.1 The map $f:R\to P'$ is proper and has closed image containing dense $U$, hence is surjective. Since $f_i=\pi_i'f$, the empty intersection from step 4.1 therefore implies $\bigcap_i(\pi_i')^{-1}(\overline{Y_i'})=\varnothing$. Finally compress each preliminary model blowup from step 1.1 with its $b_i$ by [F4], preserving all of $V_i$ and every $q_i$. This gives the exact single-blowup assertion for the original models. No nilpotent thickening based only on a set containment was used. [F4, F5, step 1.1, step 4.1, algebra]

6.1 If $U$ is empty, density makes all the proper models and $X$ empty, and the conclusion is immediate. Empty $Y_i$ has empty closure and already forces the desired intersection empty. Unit center ideals produce identity blowups, which the construction permits at every stage. All products and index lists are finite, and the original maps are unchanged on their full protected domains. [F4, step 5.1, algebra] ∎
