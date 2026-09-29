---
id: lem-filtered-colimit-fp-sheaf-stage
kind: lemma
title: "Finite-stage descent of finitely presented quasi-coherent sheaves"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-finitely-presented-module-and-algebra
  - def-finite-type-finite-presentation-module-sheaf
  - thm-affine-quasi-coherent-equivalence
  - thm-gluing-sheaves
  - thm-localisation-of-modules-is-exact
  - lem-filtered-colimit-fp-scheme-stage
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Limits of Schemes, Lemma 32.10.2 (Tag 01ZR)"
      url: "https://stacks.math.columbia.edu/tag/01ZR"
    - title: "The Stacks Project, Algebra, Lemma 10.127.6, finite-presentation module maps under filtered colimits"
      url: "https://stacks.math.columbia.edu/tag/05N7"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(A_i)_{i\in I}$ be
a directed system of commutative rings with $A=\varinjlim_i A_i$
([[def-filtered-category-and-filtered-colimit]]). Fix a scheme $X_i$ of finite
presentation over $S_i=\operatorname{Spec}A_i$. For $j\ge i$ put
$X_j=X_i\times_{S_i}\operatorname{Spec}A_j$, and put
$X=X_i\times_{S_i}\operatorname{Spec}A$. Then:

1. Every finitely presented quasi-coherent $\mathcal O_X$-module
   $\mathcal F$ is the pullback of a finitely presented quasi-coherent
   $\mathcal O_{X_j}$-module $\mathcal F_j$ for some $j\ge i$.
2. A morphism between pullbacks of two fixed finitely presented stage modules
   descends to a morphism after a later stage. Two stage morphisms whose
   pullbacks become equal over $X$ become equal after a later stage.

The ring maps need not be flat. The empty scheme and zero sheaf are included.

## Facts & Assumptions

**Given:** The directed system, a finite-presentation stage scheme, and the
stated finitely presented quasi-coherent sheaves and maps.

[F1] Finitely presented modules admit finite matrix presentations, and finite
presentation of quasi-coherent sheaves is affine-local
([[def-finitely-presented-module-and-algebra]],
[[def-finite-type-finite-presentation-module-sheaf]]).

[F2] On an affine scheme, quasi-coherent sheaves correspond to modules, and
pullback to an affine base change tensors the corresponding module
([[thm-affine-quasi-coherent-equivalence]]). Localizing modules is exact and
commutes with the finite presentations used below
([[thm-localisation-of-modules-is-exact]]).

[F3] A finite family of module elements and equalities in a filtered colimit
occurs at a common stage ([[def-filtered-category-and-filtered-colimit]],
[[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F4] Finite-presentation stage schemes are quasi-compact and quasi-separated;
their finite affine covers and quasi-compact overlaps survive base change.
Finite affine-stage data and its eventual equalities are supplied by
[[lem-filtered-colimit-fp-scheme-stage]]. Compatible sheaves and their maps
glue on an open cover ([[thm-gluing-sheaves]]).

## Proof

**Proof technique:** descend finite presentation matrices on a finite affine
cover, then descend the finitely many overlap maps, inverses, and cocycles.

1.1 **Affine Hom lemma.** Let $B_i$ be a filtered system of rings with $B=\varinjlim B_i$, let $M_i$ be a finitely presented $B_i$-module and $N_i$ any $B_i$-module, and write $M_j,N_j,M,N$ for their base changes. The natural map $$\varinjlim_{j\ge i}\operatorname{Hom}_{B_j}(M_j,N_j)\longrightarrow\operatorname{Hom}_B(M,N)$$ is bijective. Indeed, choose a presentation $B_i^r\xrightarrow{D}B_i^s\to M_i\to0$. A homomorphism $M\to N$ is a tuple of $s$ elements of $N$ annihilating the $r$ relations given by $D$. Lift the tuple to one $N_j$ and then, by [F3], enlarge until its finitely many relation values vanish. This produces a stage map. If two stage maps become equal over $B$, their values on the $s$ generators become equal at one later stage by [F3]. Localization at one element preserves the presentation and the same argument. In particular, an isomorphism and its inverse descend as maps, and their two inverse identities become true after a common stage. [F1, F2, F3]

2.1 **Affine presentations.** Choose a finite affine cover $X_i=\bigcup_{a=1}^mU_{a,i}$ with $U_{a,i}=\operatorname{Spec}B_{a,i}$. On $U_a=U_{a,i}\times_{S_i}S$, [F1] and [F2] identify $\mathcal F|_{U_a}$ with a finitely presented $B_a$-module $M_a$. Choose a finite matrix presentation $B_a^{r_a}\to B_a^{s_a}\to M_a\to0$. All matrix entries occur at a common stage by [F3]. Their stage cokernels $M_{a,j}$ are finitely presented and pull back to $M_a$, since tensoring preserves cokernels. Take one stage for the finitely many charts. [F1, F2, F3, F4, step 1.1]

3.1 **Overlap isomorphisms.** For every pair $a,b$, the stage overlap $W_{ab,j}=U_{a,j}\cap U_{b,j}$ is quasi-compact by [F4]; choose a finite principal affine cover of it inside $U_{a,j}$. Its base change covers the limit overlap. The two stage sheaves defined by $M_{a,j},M_{b,j}$ restrict to finitely presented modules on every one of these principal affines by [F1] and [F2]. Their limit restrictions are canonically isomorphic, since both represent $\mathcal F$ there. Apply step 1.1 on each principal affine to descend the isomorphism and its inverse. On pairwise intersections of these principal affines, step 1.1 makes the local maps agree at a later stage; thus they glue to an overlap isomorphism. Impose both inverse equations by the same eventual-equality argument. There are finitely many overlaps, so one stage handles them all. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 On every triple overlap $U_a\cap U_b\cap U_c$, the two composites of the overlap isomorphisms agree because they are both the identity identification through $\mathcal F$. A triple overlap is quasi-compact by [F4]; cover it by finitely many principal affines inside $U_a$ and use the equality part of step 1.1 to impose every triple cocycle equation at one later stage. The stage modules therefore glue to a quasi-coherent sheaf $\mathcal F_k$ by [F4]. It is finitely presented, since this is affine-local and its restrictions to the finite affine cover are the modules $M_{a,k}$. Its pullback is $\mathcal F$ with the chosen chart identifications. [F1, F2, F4, step 1.1, step 2.1, step 3.1]

4.2 **Morphisms and equality.** Let $\mathcal F_i,\mathcal G_i$ be fixed finitely presented stage sheaves. A map of their pullbacks is, on the finite affine cover, a map of finitely presented modules. Step 1.1 descends all the chart maps. Their agreements on the finitely many quasi-compact pairwise overlaps are equalities on finite principal covers, so step 1.1 makes them hold at a common stage. The chart maps glue to the desired stage sheaf map. If two stage maps become equal over $X$, their restrictions to every affine chart become equal at a common stage by step 1.1, hence the sheaf maps are equal there. [F1, F2, F3, F4, step 1.1, step 3.1]

5.1 The empty source has its unique empty sheaf at every stage. The zero sheaf is presented by the zero matrix data and is carried by zero stage modules. All enlargements above are finite in number, so directedness gives one common stage. The declared AC supports the finite chart and presentation selections; no flatness of the ring maps was used. Stacks Tag 01ZR is source evidence for the argument and is not a proof premise. [F3, step 2.1, step 4.1, step 4.2] ∎

