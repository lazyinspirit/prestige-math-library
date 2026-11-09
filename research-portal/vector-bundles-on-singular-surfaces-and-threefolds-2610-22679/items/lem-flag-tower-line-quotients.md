---
id: lem-flag-tower-line-quotients
kind: lemma
title: Flag towers with line-bundle quotients
status: draft
domain: mathematics
deps:
  - math:thm-projective-bundle-represents-line-quotients
  - lem-surjection-kernel-bundle
  - math:def-relative-projective-space-standard-charts
  - math:lem-projective-space-diagonal-closed
  - math:def-axiom-of-choice
dependency_roles:
  math:thm-projective-bundle-represents-line-quotients: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  math:def-relative-projective-space-standard-charts: mathematical-premise
  math:lem-projective-space-diagonal-closed: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Assume the Axiom of Choice. Let $X$ be a scheme and $E$ a vector bundle of constant rank $r\geq 0$. There is a finite tower $q:Y\to X$, obtained by successively projectivizing the current positive-rank kernel in the line-quotient convention, such that $q^*E$ has a filtration
$$0=F_0\subset F_1\subset\cdots\subset F_r=q^*E$$
whose successive quotients $F_i/F_{i-1}$ are line bundles. Each inclusion is locally split. For $r=0$ take $Y=X$ and the zero filtration. No global splitting of the extensions is asserted.

If $X$ is quasi-compact and quasi-separated, then $Y$ is also quasi-compact and quasi-separated. For finitely many vector bundles, each of constant rank, their towers can be concatenated to obtain one such $Y$ and a filtration for every pulled-back bundle. More generally, over a quasi-compact and quasi-separated $X$, the same simultaneous conclusion holds for finitely many finite locally free bundles of possibly nonconstant rank, with a locally varying length of filtration: construct the tower separately on the finitely many open-and-closed common rank strata and take their finite disjoint union.

A **vector bundle** is a finite locally free $\mathcal O_X$-module; its rank is the number of basis elements on a local free chart. A **line bundle** is a locally free module of rank one. A filtration is **locally split** when each inclusion is locally the inclusion of a direct summand. A scheme is **quasi-compact** if every open cover has a finite subcover, and **quasi-separated** if the intersection of any two quasi-compact open subsets is quasi-compact. A common rank stratum is the subset on which every bundle in the given finite family has its prescribed rank.

## Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $X$, and the finite locally free bundles specified in the statement.

**Goal:** Construct the tower and locally split line-quotient filtrations, and prove the stated quasi-compactness and quasi-separatedness properties.

[F1] For a finite locally free bundle $G$ on a scheme $S$, its projective bundle $\pi:\mathbb P_S(G)\to S$ represents invertible quotients and has a tautological surjection $\pi^*G\twoheadrightarrow\mathcal O(1)$ onto a line bundle. Over a trivializing open for $G$ of positive rank $n$, it is $\mathbb P^{n-1}$ over that open. This supplier assumes the Axiom of Choice. [[math:thm-projective-bundle-represents-line-quotients]]

[F2] The kernel of a surjection of finite locally free modules is finite locally free; the surjection splits locally and the kernel rank is the difference of ranks. [[lem-surjection-kernel-bundle]]

[F3] Over an affine base, projective space has finitely many standard affine charts, and its diagonal over the base is a closed immersion. These constructions restrict over open base subschemes. [[math:def-relative-projective-space-standard-charts]], [[math:lem-projective-space-diagonal-closed]]

[F4] The Axiom of Choice supplies the choices inherited from [F1] and the selection of trivializing covers. [[math:def-axiom-of-choice]]

## Proof

**Proof technique:** Iterate tautological quotients, pull locally split exact sequences to the final stage, and check the topology on affine charts.

1.1 Set $X_0=X$ and $K_0=E$. For $j=1,\ldots,r$, provided $K_{j-1}$ has rank $r-j+1$, put $X_j=\mathbb P_{X_{j-1}}(K_{j-1})$ with projection $p_j$, and define $K_j$ as the kernel of the tautological surjection $p_j^*K_{j-1}\twoheadrightarrow L_j:=\mathcal O_{X_j}(1)$. By [F1], $L_j$ is a line bundle, and by [F2] $K_j$ is a vector bundle of rank $r-j$ and the resulting short exact sequence is locally split. Induction constructs all $r$ stages. The rank-zero bundle $K_r$ is zero. For $r=0$ no stage is taken. [given, F1, F2, construct]

2.1 Put $Y=X_r$ and $q=p_1\circ\cdots\circ p_r$, with the identity map when $r=0$. Pull every sequence of step 1.1 to $Y$ along the composite of the subsequent projections. A locally split exact sequence remains split after pullback on the inverse images of its splitting neighbourhoods; consequently these pullbacks are exact and their kernels embed as locally direct summands. Write $\overline K_j$ for the pullback of $K_j$ to $Y$, and $\overline L_j$ for the pullback of $L_j$. Then $\overline K_0=q^*E$, $\overline K_r=0$, and $0\longrightarrow\overline K_j\longrightarrow\overline K_{j-1}\longrightarrow\overline L_j\longrightarrow0$ is locally split, with $\overline L_j$ a line bundle. Set $F_i=\overline K_{r-i}$. This gives the required filtration, with $F_i/F_{i-1}\cong\overline L_{r-i+1}$. Pullback preserves local freeness because it takes a local free basis to a local free basis. [F1, step 1.1, construct]

3.1 We prove the topological assertion for one projective-bundle stage $\pi:P=\mathbb P_S(G)\to S$ with $S$ quasi-compact and quasi-separated and $G$ of positive constant rank. Choose a finite affine cover $U_1,\ldots,U_m$ of $S$ on which $G$ is free: refine a trivializing cover by affine opens and use quasi-compactness. By [F1] and [F3], each $\pi^{-1}(U_i)$ is covered by finitely many standard affine charts, so $P$ is quasi-compact. [F1, F3, F4, construct, step 2.1]

4.1 Let $A$ and $B$ be two of those affine charts, lying over $U_i$ and $U_j$. The intersection $U_i\cap U_j$ is quasi-compact because $S$ is quasi-separated; cover it by finitely many affine opens $W_\nu$. The inverse images of $W_\nu$ in $A$ and $B$ are affine: each chart is affine over its base open, and the inverse image of an affine open under an affine morphism is affine. They are affine opens of $P_{W_\nu}\cong\mathbb P^{n-1}_{W_\nu}$. Their intersection is affine, since the diagonal of this projective space over the affine scheme $W_\nu$ is closed by [F3]: the intersection is its inverse image in the affine fibre product of the two affine opens, hence is a closed subscheme of an affine scheme. These finitely many intersections cover $A\cap B$, so $A\cap B$ is quasi-compact. A scheme with a finite affine open cover whose pairwise intersections are quasi-compact is quasi-separated: any quasi-compact open is covered by finitely many principal affine opens inside the cover, and intersections of such opens are quasi-compact as principal opens in the quasi-compact pairwise chart intersections. Thus $P$ is quasi-separated. [F1, F3, step 3.1, algebra]

5.1 Applying steps 3.1–4.1 successively to the finitely many stages in step 1.1 shows that $Y$ is quasi-compact and quasi-separated whenever $X$ is. The rank-zero case is immediate because $Y=X$. [step 1.1, step 3.1, step 4.1]

6.1 For a finite family of constant-rank bundles, first construct the tower for the first bundle, then pull the second bundle back to its top and construct its tower, and continue. Pullback of each previously constructed locally split filtration remains a locally split filtration with line-bundle quotients, by the argument of step 2.1. The concatenation is finite, and step 5.1 applies at every stage when the initial scheme is quasi-compact and quasi-separated. [step 2.1, step 5.1, construct]

7.1 For a finite family with locally varying ranks on a quasi-compact quasi-separated $X$, each rank function is locally constant: a local free chart has a fixed number of basis elements. Hence every common rank stratum is open, its complement is the union of the other open strata, and it is therefore also closed. The common strata form an open cover of $X$; quasi-compactness makes the set of nonempty strata finite. Each is quasi-compact as a closed subset of $X$ and quasi-separated as an open subscheme: intersections of its quasi-compact opens are intersections in $X$. Apply step 6.1 on each stratum and take the finite disjoint union of the resulting towers and maps. The filtrations have constant length on each stratum, and their pullbacks give the claimed locally varying filtrations. The finite disjoint union is quasi-compact and quasi-separated, since intersections between distinct components are empty and the same properties hold within each component. [step 6.1, construct]

8.1 Steps 1.1–2.1 construct the flag tower and its line quotients; steps 5.1 and 6.1–7.1 prove the remaining claims. Only local splittings have been used, so no global direct-sum decomposition is claimed. [step 2.1, step 5.1, step 6.1, step 7.1] ∎
