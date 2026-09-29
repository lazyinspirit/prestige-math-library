---
id: lem-filtered-colimit-fp-scheme-stage
kind: lemma
title: "Finite-stage descent of finitely presented schemes and their morphisms"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-finitely-presented-module-and-algebra
  - def-locally-finite-presentation-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - thm-gluing-affine-schemes
  - thm-affine-fibre-product-tensor-ring
  - lem-base-change-quasi-compact-morphisms
  - lem-base-change-locally-finite-type-presentation
  - lem-distinguished-open-refinement-at-a-point
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
    - title: "The Stacks Project, Limits of Schemes, Lemma 32.10.1 (Tag 01ZM)"
      url: "https://stacks.math.columbia.edu/tag/01ZM"
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.22.1 and Lemma 29.22.2 (Tags 01TP and 01TQ)"
      url: "https://stacks.math.columbia.edu/tag/01TQ"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(A_i)_{i\in I}$ be a
directed system of commutative rings ([[def-filtered-category-and-filtered-colimit]]),
put $A=\varinjlim_iA_i$, $S_i=\operatorname{Spec}A_i$, and
$S=\operatorname{Spec}A$. Then:

1. Every morphism $X\to S$ of finite presentation is the base change of a
   morphism $X_i\to S_i$ of finite presentation for some $i$.
2. Given $i$, schemes $X_i,Y_i$ of finite presentation over $S_i$, and an
   $S$-morphism $g:X_i\times_{S_i}S\to Y_i\times_{S_i}S$, there are $j\ge i$
   and an $S_j$-morphism between their base changes whose base change to $S$
   is $g$.
3. Two morphisms between fixed finite-presentation stage schemes that become
   equal after base change to $S$ become equal after base change to some later
   $S_j$.

Here **finite presentation** includes quasi-compactness and
quasi-separatedness in addition to local finite presentation. The transition
ring maps need not be injective or flat. Empty schemes are included.

## Facts & Assumptions

**Given:** The directed system of rings and, in the respective clauses, the
finite-presentation schemes and morphisms.

[F1] A finite family of elements and equations in a filtered colimit occurs
and holds at a common finite stage: an element represented at one stage is
zero in the colimit if and only if it becomes zero at a later stage
([[def-filtered-category-and-filtered-colimit]],
[[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F2] A finitely presented algebra admits finitely many polynomial generators
and relations ([[def-finitely-presented-module-and-algebra]]). Local finite
presentation can be checked on affine charts
([[def-locally-finite-presentation-morphism]]).

[F3] A finite union of affine opens is quasi-compact; in a quasi-separated
scheme, intersections of affine opens are quasi-compact
([[def-quasi-compact-and-quasi-separated-scheme]],
[[def-quasi-compact-and-quasi-separated-morphism]]). Every point of an open
subset of an affine scheme has a distinguished-open neighbourhood contained
in that subset ([[lem-distinguished-open-refinement-at-a-point]]).

[F4] Compatible affine schemes glue along open isomorphisms; affine fibre
products are given by tensor products; quasi-compactness is preserved by base
change; and local finite presentation persists under base change
([[thm-gluing-affine-schemes]], [[thm-affine-fibre-product-tensor-ring]],
[[lem-base-change-quasi-compact-morphisms]],
[[lem-base-change-locally-finite-type-presentation]]).

## Proof

**Proof technique:** descend finite polynomial data, finite principal-open
covers, and finite gluing equations, then use the same finite-data argument for
morphisms and their equality.

1.1 **Finite algebra maps.** Write a finitely presented $A$-algebra as $B=A[x_1,\ldots,x_n]/(r_1,\ldots,r_m)$. Choose one stage containing the finitely many coefficients of the $r_k$; the same presentation over $A_i$ defines $B_i$ with $B_i\otimes_{A_i}A\cong B$. A map from $B$ into the base change $C$ of a stage algebra is determined by the images of the $n$ generators, subject to the $m$ relations. Lift those images to one stage and, by [F1], enlarge until the finitely many relation values vanish. Thus the map descends. If two such maps become equal over $A$, their finitely many generator images become equal at one later stage. Lift the inverse of an isomorphism and then its two inverse identities to descend the isomorphism. The same arguments work after localization at finitely many elements because each fraction and equation has finite numerator and denominator data. [F1, F2]

1.2 **Affine-chart locality of finite presentation.** If $\operatorname{Spec}B\to\operatorname{Spec}A$ is locally of finite presentation, then $B$ is finitely presented over $A$. First, local finite type gives for each prime of $B$ a principal neighbourhood $D(g)$ and a principal affine base neighbourhood $D(h)$ with $B_g$ finite type over $A_h$, hence over $A$. Choose finitely many such $D(g_l)$ covering $\operatorname{Spec}B$, finite generators of $B_{g_l}$ represented by $b_{lq}/g_l^{e_{lq}}$, and a finite identity $1=\sum_lc_lg_l$ in $B$. The $A$-subalgebra $B_0$ generated by all $g_l,b_{lq},c_l$ satisfies $(B_0)_{g_l}=B_{g_l}$ and $(g_l)B_0=B_0$. For any $b\in B$, equality of $b/1$ with a fraction from $(B_0)_{g_l}$ gives $g_l^{N_l}b\in B_0$ for some $N_l$; since the powers $g_l^{N_l}$ generate the unit ideal in $B_0$, we get $b\in B_0$. Thus $B=A[x_1,\ldots,x_n]/I$ for a finite polynomial algebra $P=A[x_1,\ldots,x_n]$. At a prime of $P$ outside $V(I)$, some element of $I$ is invertible and $I$ is locally generated by $1$. At a prime in $V(I)$, local finite presentation gives a principal $D(g)\subseteq\operatorname{Spec}B$ whose ring $B_g$ is finitely presented over $A$: if it is initially presented over $A_h$, the composite $A\to A_h\to B_g$ is finitely presented because $A_h=A[t]/(ht-1)$. Lift $g$ to $G\in P$. Both $P_G$ and $B_g=P_G/I_G$ are finitely presented $A$-algebras. To prove that the **kernel** $I_G$ is finitely generated, write $P_G=A[x_1,\ldots,x_u]/(r)$ and $B_g=A[y_1,\ldots,y_v]/(s)$. Represent the images of the $x_a$ by polynomials $Q_a(y)$; surjectivity lets us choose lifts $\widetilde y_b\in P_G$ of every $y_b$. The finite elements $s_c(\widetilde y)$ and $x_a-Q_a(\widetilde y)$ lie in $I_G$. If $F(x)\in I_G$, then $F(Q(y))$ lies in the ideal $(s)$ of $A[y]$, so $F(Q(\widetilde y))$ lies in $(s_c(\widetilde y))$ in $P_G$; the polynomial identity $F(x)-F(Q(\widetilde y))\in(x_a-Q_a(\widetilde y))$ gives $F(x)$ in the ideal generated by those finite elements. Thus $I_G$ is finitely generated. A finite principal cover of $\operatorname{Spec}P$ by these neighbourhoods exists. Clear the denominators of finitely many local generators of $I$ on this cover; their numerators generate a finite ideal $J\subseteq I$ with $(I/J)$ zero on every cover member, hence $I=J$. Thus $B$ is finitely presented over $A$. [F1, F2, F3]

2.1 **Quasi-compact opens.** Any quasi-compact open $U$ of $\operatorname{Spec}B$ is $D(f_1)\cup\cdots\cup D(f_r)$ for finitely many $f_a\in B$ by [F3]. Lift the $f_a$ to a stage ring and use the same union there; its base change is $U$. If two stage quasi-compact opens $\bigcup_aD(f_a)$ and $\bigcup_bD(g_b)$ become equal over $B$, the inclusion $D(f_a)\subseteq\bigcup_bD(g_b)$ is equivalent to $f_a\in\sqrt{(g_1,\ldots,g_s)B}$. Thus some finite equation $f_a^{N_a}=\sum_bc_{ab}g_b$ holds in $B$. Lift this equation and its reverse inclusions to a common later stage by [F1]; the stage opens are then equal. Taking $f=1$ shows that a stage quasi-compact open whose pullback is all of $\operatorname{Spec}B$ becomes the whole stage affine scheme later. The empty open is the empty union and descends unchanged. [F1, F3, step 1.1]

3.1 **Maps of quasi-compact opens.** Let $U=\bigcup_aD(f_a)\subseteq\operatorname{Spec}B$ and let $C$ be a finitely presented $A$-algebra. A morphism $U\to\operatorname{Spec}C$ is a collection of compatible ring maps $C\to B_{f_a}$. Step 1.1 descends the maps; equality on the finitely many $D(f_af_b)$ holds after a further stage, so the maps glue. Equality of two such morphisms is likewise eventual. If the limit image lies in a quasi-compact open $V=\bigcup_bD(g_b)$ of $\operatorname{Spec}C$, then for each source chart $D(f_a)$ the images of the $g_b$ generate the unit ideal in $B_{f_a}$. Lift these finitely many unit equations; the stage map then lands in the stage $V$. Therefore an isomorphism between quasi-compact opens of two affine finite-presentation schemes descends: lift it and its inverse as maps to the affine ambients, force both images into the chosen opens, then force both composites to equal the identities on the finite principal covers. [step 1.1, step 2.1]

4.1 **Schemes.** Let $X\to S$ be of finite presentation. Choose a finite affine cover $X=\bigcup_{a=1}^mU_a$ with $U_a=\operatorname{Spec}B_a$; step 1.2 makes every $B_a$ finitely presented over $A$. Since $X$ is quasi-separated, each $W_{ab}=U_a\cap U_b$ is quasi-compact. Inside each of $U_a,U_b$, it is a finite union of principal opens. Descend the $B_a$ and both descriptions of every $W_{ab}$ by steps 1.1 and 2.1. Their identity isomorphism over $A$ descends by step 3.1. On each triple overlap, the two transition composites agree over $A$; its finite principal cover lets step 3.1 make all cocycle, inverse and identity equations hold at one common stage. Glue the affine stages using [F4]. Their base change recovers $X$. The finite affine stage cover makes $X_i$ quasi-compact; pairwise overlaps are finite principal unions, so $X_i$ is quasi-separated; and its affine chart algebras are finitely presented. Hence $X_i\to S_i$ is of finite presentation. [F2, F3, F4, step 1.1, step 2.1, step 3.1, step 1.2]

5.1 **Morphism descent.** Let $X_i,Y_i$ be fixed finite-presentation stage schemes and $g:X\to Y$ a limit morphism. Cover them by finitely many affine opens $U_a,V_b$. Since $Y_i$ is quasi-separated, each affine immersion $V_b\hookrightarrow Y_i$ is quasi-compact; its base change $g^{-1}(V_b)\hookrightarrow X$ is quasi-compact by [F4]. As $X$ is quasi-compact, every $g^{-1}(V_b)$ is quasi-compact. Cover each of its intersections with the finitely many $U_a$ by finitely many principal opens of $U_a$; these form a finite cover of $X$. Lift them by step 2.1. On each $U_{a,j}$ their limit union is all of $U_a$, so the unit-ideal test of step 2.1 makes the lifted opens cover the **entire stage $X_j$** after one common enlargement. On each principal piece the map goes to one affine $V_b$; lift its ring map by step 1.1. On pieces assigned the same target affine, impose equality on overlaps by step 3.1. If two pieces are assigned the stage affines $V_b,V_c\subseteq Y_i$, their common limit image lies in the base change of the stage overlap $W_i=V_b\cap V_c$. This overlap is quasi-compact. Cover it by finitely many principal opens $P_l$ inside $V_b$, and refine each $P_l$ by finitely many principal opens $Q_{lk}$ inside $V_c$ contained in $P_l$. These are already stage opens covering **all of $W_i$**; equivalently, if their finite defining elements and their finite-principal descriptions in $V_b$ are chosen at the limit, steps 1.2 and 2.1 lift them, make the two descriptions equal, and make their union cover the stage overlap after enlargement. Each $Q_{lk}$ is affine and is also a quasi-compact open of $V_b$ because $Y_i$ is quasi-separated. Refine the quasi-compact source overlap by their inverse images and then by finitely many source principal opens. On each, the image-containment unit tests of step 3.1 force both lifted maps to land in the same affine stage target $Q_{lk}$; its coordinate algebra is finitely presented by step 1.2, so step 1.1 makes the two maps equal. A common finite stage handles every refinement and equality, so the maps glue to $g_j:X_j\to Y_j$. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 **Equality.** If two stage morphisms have equal limit pullbacks, their preimages of every target affine become the same quasi-compact open of $X$. Step 2.1 makes these preimages equal at a later stage on every source affine. On a finite principal refinement both maps then land in the same target affine; equality of their generator images is eventual by step 1.1. One common stage handles the finite cover and gives equality of the two stage morphisms. [step 1.1, step 2.1, step 3.1, step 5.1]

7.1 Steps 4.1, 5.1 and 6.1 prove the three clauses. If $X$ is empty, take the empty stage scheme. All selections are finite once the initial chart cover is chosen; the declared AC supports that selection and no flatness of the transition maps was assumed. Stacks Tag 01ZM is source evidence for this finite-data proof, not a proof premise. [F1, step 4.1, step 5.1, step 6.1] ∎
