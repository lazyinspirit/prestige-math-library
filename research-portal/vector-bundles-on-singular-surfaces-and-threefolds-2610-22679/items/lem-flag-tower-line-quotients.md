---
id: lem-flag-tower-line-quotients
kind: lemma
title: Flag towers with line-bundle quotients
status: published
domain: mathematics
deps:
  - math:thm-projective-bundle-represents-line-quotients
  - lem-surjection-kernel-bundle
  - math:def-relative-projective-space-standard-charts
  - math:lem-projective-space-diagonal-closed
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-pullback-module-ringed-spaces
  - math:def-locally-free-sheaf-finite-rank
  - math:def-affine-morphism-schemes
  - math:thm-affine-fibre-product-tensor-ring
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:cor-affine-scheme-quasi-compact
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:thm-gluing-ringed-and-locally-ringed-spaces
  - math:lem-morphism-schemes-local-on-source-target
  - math:def-projective-bundle-scheme
  - math:thm-gluing-sheaves
  - math:thm-sections-basic-open-affine-scheme
dependency_roles:
  math:thm-projective-bundle-represents-line-quotients: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  math:def-relative-projective-space-standard-charts: mathematical-premise
  math:lem-projective-space-diagonal-closed: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-affine-morphism-schemes: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:thm-gluing-ringed-and-locally-ringed-spaces: mathematical-premise
  math:lem-morphism-schemes-local-on-source-target: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  math:thm-gluing-sheaves: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
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

[F1] For a finite locally free bundle $G$ on a scheme $S$, its projective bundle $\pi:\mathbb P_S(G)\to S$ represents invertible quotients and has a tautological surjection $\pi^*G\twoheadrightarrow\mathcal O(1)$ onto a line bundle. The frames and base-change identifications in the projective-bundle definition identify its restriction over a trivializing open $U$ for $G$ of positive rank $n$ with $\mathbb P^{n-1}_U$. The representing theorem supplies the tautological line quotient; the definition supplies this local identification. Both inherit the Axiom of Choice. [[math:thm-projective-bundle-represents-line-quotients]], [[math:def-projective-bundle-scheme]]

[F2] The kernel of a surjection of finite locally free modules is finite locally free; the surjection splits locally and the kernel rank is the difference of ranks. [[lem-surjection-kernel-bundle]]

[F3] Over an affine base, projective space has finitely many standard affine charts, and its diagonal over the base is a closed immersion. These constructions restrict over open base subschemes. [[math:def-relative-projective-space-standard-charts]], [[math:lem-projective-space-diagonal-closed]]

[F4] The Axiom of Choice supplies the choices inherited from [F1], the affine quasi-compactness and closed-immersion results below, and the selection of trivializing covers. [[math:def-axiom-of-choice]]

[F5] A scheme has affine neighbourhoods at every point. For a finite locally free sheaf, the rank is independent of the chosen local basis and is locally constant; rank zero means the zero sheaf. Pullback along a morphism of schemes is the module sheaf $f^*G=\mathcal O_T\otimes_{f^{-1}\mathcal O_S}f^{-1}G$. On a local free chart it takes the standard basis to the standard basis, and matrices of module maps to their images under the structure ring maps. [[math:def-scheme]], [[math:def-locally-free-sheaf-finite-rank]], [[math:def-pullback-module-ringed-spaces]]

[F6] A morphism is affine if the inverse image of every affine open of the target is affine. A fibre product of affine schemes over an affine scheme is affine, namely $\operatorname{Spec}(B\otimes_A C)$ for ring maps $A\to B,A\to C$. Under AC, closed immersions survive base change, and a closed subscheme of $\operatorname{Spec}A$ is $\operatorname{Spec}(A/I)$ for an ideal $I$. [[math:def-affine-morphism-schemes]], [[math:thm-affine-fibre-product-tensor-ring]], [[math:lem-closed-immersion-affine-quotient-and-base-change]]

[F7] In an affine spectrum, the distinguished opens $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ form a basis, and with their restricted structure sheaves they are affine schemes $\operatorname{Spec}(A_f)$. Under AC, every affine scheme is quasi-compact. Thus the affine neighbourhoods in [F5] can be refined inside any specified open subset. [[math:def-affine-scheme-spectrum]], [[math:lem-spectrum-localization-open-immersion]], [[math:cor-affine-scheme-quasi-compact]] On $\operatorname{Spec}A$, $\Gamma(D(f),\mathcal O)=A_f$, with restriction given by localization; in particular $\Gamma(\operatorname{Spec}A,\mathcal O)=A$ by taking $f=1$. Thus the nonvanishing locus of a section corresponding to $a\in A$ is the distinguished open $D(a)$. [[math:thm-sections-basic-open-affine-scheme]]

[F8] Locally ringed spaces glue along open overlap isomorphisms satisfying identity and cocycle conditions. Applying this with empty overlaps between distinct schemes gives their disjoint union as a locally ringed space; it is a scheme because every point has an affine neighbourhood in its component. Compatible morphisms of schemes on an open cover glue uniquely. [[math:thm-gluing-ringed-and-locally-ringed-spaces]], [[math:lem-morphism-schemes-local-on-source-target]], [[math:def-scheme]] Compatible sheaves of modules on a fixed ringed space glue by the compatible-family construction. For a disjoint open cover the overlap conditions are vacuous; maps between the glued module sheaves are defined on section families componentwise. [[math:thm-gluing-sheaves]]

## Proof

**Proof technique:** Iterate tautological quotients, pull locally split exact sequences to the final stage, and check the topology on affine charts.

1.1 Set $X_0=X$ and $K_0=E$. For $j=1,\ldots,r$, provided $K_{j-1}$ has rank $r-j+1$, put $X_j=\mathbb P_{X_{j-1}}(K_{j-1})$ with projection $p_j$, and define $K_j$ as the kernel of the tautological surjection $p_j^*K_{j-1}\twoheadrightarrow L_j:=\mathcal O_{X_j}(1)$. By [F1], $L_j$ is a line bundle, and by [F2] $K_j$ is a vector bundle of rank $r-j$ and the resulting short exact sequence is locally split. Induction constructs all $r$ stages. The rank-zero bundle $K_r$ is zero. For $r=0$ no stage is taken. [given, F1, F2, F5, construct]

2.1 Put $Y=X_r$ and $q=p_1\circ\cdots\circ p_r$, with the identity map when $r=0$. Pull every sequence of step 1.1 to $Y$ along the composite of the subsequent projections. Refine its splitting neighbourhoods to free charts for kernel and quotient. On such a chart the inclusion and surjection are coordinate inclusion and projection. By [F5], pullback takes these matrices to the same coordinate matrices over the source structure sheaf, so the pulled-back sequence is split exact and its kernel is a locally direct summand. The same matrix rule is compatible with composition of the structure ring maps, identifying iterated pullback with pullback along the composite. Write $\overline K_j$ for the pullback of $K_j$ to $Y$, and $\overline L_j$ for the pullback of $L_j$. Then $\overline K_0=q^*E$, $\overline K_r=0$, and $0\longrightarrow\overline K_j\longrightarrow\overline K_{j-1}\longrightarrow\overline L_j\longrightarrow0$ is locally split, with $\overline L_j$ a line bundle. Set $F_i=\overline K_{r-i}$. This gives the required filtration, with $F_i/F_{i-1}\cong\overline L_{r-i+1}$. Pullback preserves local freeness because it takes a local free basis to a local free basis. [F1, F5, step 1.1, construct]

3.1 We prove the topological assertion for one projective-bundle stage $\pi:P=\mathbb P_S(G)\to S$ with $S$ quasi-compact and quasi-separated and $G$ of positive constant rank. Choose a finite affine cover $U_1,\ldots,U_m$ of $S$ on which $G$ is free: refine a trivializing cover by affine opens and use quasi-compactness. By [F1] and [F3], each $\pi^{-1}(U_i)$ is covered by finitely many standard affine charts, so $P$ is quasi-compact. [F1, F3, F4, F5, F7, construct, step 2.1]

4.1 Let $A$ and $B$ be two of those affine charts, lying over $U_i$ and $U_j$. The intersection $U_i\cap U_j$ is quasi-compact because $S$ is quasi-separated; cover it by finitely many affine opens $W_\nu$. The inverse images of $W_\nu$ in $A$ and $B$ are affine: each chart is affine over its base open, and the inverse image of an affine open under an affine morphism is affine. They are affine opens of $P_{W_\nu}\cong\mathbb P^{n-1}_{W_\nu}$. Their intersection is affine, since the diagonal of this projective space over the affine scheme $W_\nu$ is closed by [F3]: a pair of maps into the two opens maps into that diagonal exactly when its two maps to projective space agree, so its inverse image is the intersection. By [F6] this inverse image is a closed subscheme of the affine fibre product of the two affine opens, and is therefore affine. These finitely many intersections cover $A\cap B$, so $A\cap B$ is quasi-compact. Here every affine open is quasi-compact by [F7]. To check the stated definition of quasi-separatedness, take any two quasi-compact opens and cover each by finitely many principal affine opens lying inside the chosen chart cover, using [F7]. The intersection of a principal open $D_A(f)$ with a principal open $D_B(g)$ is the nonvanishing locus of the product of the restrictions of $f$ and $g$ on $A\cap B$. On a quasi-compact scheme, the nonvanishing locus of any global function is quasi-compact: take a finite affine cover and apply [F7] to its principal opens. Thus each such intersection is quasi-compact; the intersection of the original two opens is a finite union of these intersections, hence quasi-compact. Thus $P$ is quasi-separated. [F1, F3, F6, F7, step 3.1, algebra]

5.1 Applying steps 3.1–4.1 successively to the finitely many stages in step 1.1 shows that $Y$ is quasi-compact and quasi-separated whenever $X$ is. The rank-zero case is immediate because $Y=X$. [step 1.1, step 3.1, step 4.1]

6.1 For a finite family of constant-rank bundles, first construct the tower for the first bundle, then pull the second bundle back to its top and construct its tower, and continue. Pullback of each previously constructed locally split filtration remains a locally split filtration with line-bundle quotients, by the argument of step 2.1. The concatenation is finite, and step 5.1 applies at every stage when the initial scheme is quasi-compact and quasi-separated. [step 2.1, step 5.1, construct]

7.1 For a finite family with locally varying ranks on a quasi-compact quasi-separated $X$, each rank function is well defined and locally constant by [F5]: chart ranks agree on overlaps, and a local free chart has a fixed number of basis elements. Hence every common rank stratum is open, its complement is the union of the other open strata, and it is therefore also closed. The common strata form an open cover of $X$; quasi-compactness makes the set of nonempty strata finite. Each is quasi-compact as a closed subset of $X$ and quasi-separated as an open subscheme: intersections of its quasi-compact opens are intersections in $X$. Apply step 6.1 on each stratum and take the finite disjoint union of the resulting towers. By [F8] this is a scheme, with the component structure sheaves on its disjoint open components, and the component maps to $X$ glue to a morphism $q:Y\to X$. For each bundle $E$ in the family, let $N$ be the maximum of $0$ and its finitely many stratum ranks. On a component where its filtration has length $r$, extend it to indices $0,\ldots,N$ by repeating its final term at indices greater than $r$. For each index these component modules give gluing data on the fixed ringed space $Y$: distinct components have empty overlaps, so compatibility is automatic. By [F8] the modules glue. On an open $V\subseteq Y$, a section of a glued module is a family of sections on $V\cap Y_\alpha$; apply the component filtration maps to this family to define the glued maps, which are linear and commute with restriction. Their composites and inclusions agree with the component maps. The identification of the glued final module with $q^*E$ follows by restricting the pullback formula in [F5] to each component. Local splitting, local freeness and the line-quotient identifications can all be checked on those open components, where they were proved in step 6.1. Discarding the repeated final terms on each component gives exactly the asserted locally varying filtration; no line-bundle claim is made for the zero quotients introduced by padding. The finite disjoint union is quasi-compact and quasi-separated, since intersections between distinct components are empty and the same properties hold within each component. [F5, F8, step 6.1, construct]

8.1 Steps 1.1–2.1 construct the flag tower and its line quotients; steps 5.1 and 6.1–7.1 prove the remaining claims. Only local splittings have been used, so no global direct-sum decomposition is claimed. [step 2.1, step 5.1, step 6.1, step 7.1] ∎
