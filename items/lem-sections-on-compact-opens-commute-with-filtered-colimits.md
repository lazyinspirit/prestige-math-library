---
id: "lem-sections-on-compact-opens-commute-with-filtered-colimits"
kind: "lemma"
title: "Filtered colimits of sheaves and sections over compact opens"
status: published
origin: pipeline
deps: [def-presheaf-plus-construction, def-sheafification, def-separated-presheaf, def-stalk-of-presheaf, lem-first-plus-construction-is-separated, thm-sheafification-preserves-stalks, thm-sheafification-universal-property, cor-left-adjoints-preserve-colimits, def-presheaf-on-topological-space, def-presheaf-of-groups-rings-modules, def-compact-space, def-axiom-of-choice, lem-equality-in-a-filtered-colimit-of-sets-is-eventual, def-filtered-category-and-filtered-colimit, def-noetherian-topological-space, lem-noetherian-subspaces-and-compact-opens, def-sheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal J$ be a small filtered category
([[def-filtered-category-and-filtered-colimit]]) and let $i\mapsto\mathcal F_i$
be a diagram of sheaves of sets on $X$ whose underlying presheaves of sets
([[def-presheaf-on-topological-space]]) are sheaves
([[def-sheaf-on-topological-space]]). Let
$$\mathcal P(U):=\operatorname*{colim}_i\mathcal F_i(U)$$
be the presheaf colimit of the section sets, let $\mathcal F:=a\mathcal P=\mathcal P^{++}$ be
its sheafification, and let $\Phi_i:\mathcal F_i\to\mathcal F$ be the canonical
maps, so that $\mathcal F$ with the maps $\Phi_i$ is the colimit of the diagram
in the category of sheaves of sets on $X$ ([[def-sheafification]],
[[cor-left-adjoints-preserve-colimits]]). For an open subset $U\subseteq X$ let $\Psi_U:\operatorname*{colim}_i\mathcal F_i(U)\to\mathcal F(U)$ be the canonical map induced by the maps $\mathcal F_i(U)\to\mathcal F(U)$ of the colimit cocone. Then:

1. if $U$ is compact ([[def-compact-space]]), then $\Psi_U$ is injective;
2. if $U$ is compact and every open subset of $U$ is compact, then $\Psi_U$ is
   bijective;
3. if $X$ is Noetherian ([[def-noetherian-topological-space]]) then $\Psi_U$ is
   bijective for every open subset $U\subseteq X$;
4. if the diagram is a diagram of sheaves of abelian groups, meaning that all $\mathcal F_i$ are abelian sheaves and every transition map is a group homomorphism on sections over every open set, then $\Psi_U$ is an injective homomorphism in case 1 and an isomorphism of abelian groups in cases 2 and 3, where the source carries
   the abelian-group structure of the filtered colimit of the groups
   $\mathcal F_i(U)$ and the target the abelian-group structure of the sheaf
   $\mathcal F$.

## Facts & Assumptions

[F1] Sheafification is left adjoint to the inclusion of sheaves among presheaves: every morphism of presheaves $\varphi:\mathcal P\to\mathcal G$ into a sheaf factors uniquely as $\varphi=\overline\varphi\circ\eta_{\mathcal P}$ through the sheafification map ([[thm-sheafification-universal-property]]); the unit $\eta$ maps a section to the class of the single-chart presentation ([[def-presheaf-plus-construction]]), and $a\mathcal P=(\mathcal P^+)^+$ ([[def-sheafification]]).

[F2] Left adjoints preserve colimits: applying a left adjoint to a colimiting cocone produces a colimit of the image diagram ([[cor-left-adjoints-preserve-colimits]]).

[F3] Sections of $\mathcal P^+$ are equivalence classes of germ-compatible local presentations, two presentations being equivalent when all their germs agree; the restriction maps are computed on presentations ([[def-presheaf-plus-construction]]).

[F4] For every point $x\in X$ the plus construction induces a bijection on stalks $\eta_x:\mathcal P_x\to(\mathcal P^+)_x$, so $\mathcal P$, $\mathcal P^+$ and $\mathcal P^+$'s twice-plus have the same stalks, and the germ of $\eta(s)$ at $x$ is the image of the germ of $s$ ([[lem-first-plus-construction-is-separated]], [[thm-sheafification-preserves-stalks]]).

[F5] The stalk $\mathcal P_x$ is the filtered colimit of the sets $\mathcal P(W)$ over the open neighbourhoods $W$ of $x$, described concretely as classes of pairs $(W,s)$ where $(W,s)\sim(W',s')$ when $s$ and $s'$ agree on a smaller open neighbourhood of $x$ ([[def-stalk-of-presheaf]]).

[F6] Two elements of a filtered colimit of sets with the same image become equal after transition to a common later stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F7] In a sheaf, sections that agree on the members of an open cover agree on the union; a sheaf of groups is a presheaf of groups whose underlying set-valued presheaf is a sheaf ([[def-sheaf-on-topological-space]], [[def-presheaf-of-groups-rings-modules]]).

[F8] $U$ is compact when every open cover of the space $U$ has a finite subcover ([[def-compact-space]]).

[F9] If $X$ is Noetherian ([[def-noetherian-topological-space]]) then every subspace of $X$ is Noetherian and compact, hence every open subset of $X$ is compact, and intersections of compact open subsets are compact open ([[lem-noetherian-subspaces-and-compact-opens]]).

[F10] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Given:** A topological space $X$, a small filtered category $\mathcal J$, a diagram $i\mapsto\mathcal F_i$ of sheaves of sets on $X$, the presheaf colimit $\mathcal P$, the sheaf $\mathcal F=a\mathcal P=\mathcal P^{++}$ with its canonical maps, and an open subset $U\subseteq X$.

1.1 Objectwise colimits of presheaves are colimits: a cocone from the diagram $i\mapsto\mathcal F_i$ to a presheaf $\mathcal G$ is exactly a compatible family of maps of sets $\mathcal F_i(W)\to\mathcal G(W)$ for each open $W\subseteq X$, natural in $W$, and giving such a family for every $W$ is the same as giving, for each $W$, a map $\mathcal P(W)=\operatorname*{colim}_i\mathcal F_i(W)\to\mathcal G(W)$ by the universal property of the colimit of sets in each degree. Hence $\mathcal P$ is the colimit of the diagram in presheaves, with canonical maps $\mathcal F_i\to\mathcal P$. Now $a$ is left adjoint to the inclusion of sheaves among presheaves by [F1], so by [F2] it carries this colimiting cocone to a colimit of the diagram $i\mapsto a\mathcal F_i=\mathcal F_i$ (the sheafification of a sheaf is that sheaf, by [F1] applied to the identity of $\mathcal F_i$); thus $a\mathcal P=\mathcal F$ with the maps $\Phi_i$ is the colimit of the diagram in sheaves, and the map $\Psi_U$ is the corresponding canonical map of section sets. [F1, F2]

1.2 For $x\in X$ the map of stalks induced by $\eta_{\mathcal P}:\mathcal P\to\mathcal P^+$ is a bijection [F4], and by [F5] the stalk $\mathcal P_x$ is the filtered colimit of the sets $\mathcal P(W)$ over the neighbourhoods $W$ of $x$, so two elements $s,s'\in\mathcal P(U)$ have the same germ at $x\in U$ if and only if they agree in some open neighbourhood $W\subseteq U$ of $x$, that is $s|_W=s'|_W$. Moreover an element of $\mathcal P_x$ is the class of a pair $(W,t)$ with $t\in\mathcal P(W)$, and under the identification of [F4] the germ at $x$ of the image in $\mathcal F(W)=(\mathcal P^+)^+(W)$ of $t$ is the class of $(W,t)$ itself; consequently the germ of the image of $s\in\mathcal P(U)$ in $\mathcal F$ at $x$ is the germ of $s$ at $x$. [F4, F5]

2.1 Suppose $s,s'\in\mathcal P(U)$ have equal images in $\mathcal F(U)$ under the canonical map. By [step 1.2] their germs at every point of $U$ coincide, so for each $x\in U$ there is an open neighbourhood $W_x\subseteq U$ of $x$ with $s|_{W_x}=s'|_{W_x}$ in $\mathcal P(W_x)=\operatorname*{colim}_i\mathcal F_i(W_x)$. By [F6] applied to the filtered diagram of section sets $i\mapsto\mathcal F_i(W_x)$, equality of these classes is witnessed by some index: there are arrows $a:i\to\ell$ and $b:i'\to\ell$ in $\mathcal J$ with equal images in $\mathcal F_\ell(W_x)$. Assume now that $U$ is compact [F8]; then finitely many $W_{x_1},\dots,W_{x_m}$ cover $U$. Since $\mathcal J$ is filtered there is a cocone over the finite diagram consisting of the two original indices, the witnesses $\ell_1,\dots,\ell_m$, and all witnessing arrows (parallel arrows can be equalized by filteredness); thus there are single arrows from the two original indices to its vertex $\ell$, and, the images of $s$ and $s'$ in $\mathcal F_\ell(U)$ agree on each $W_{x_j}$; being sections of the sheaf $\mathcal F_\ell$ they agree on $U$ by [F7]. Hence $s$ and $s'$ have the same image in $\operatorname*{colim}_i\mathcal F_i(U)$, which is exactly the injectivity of $\Psi_U$. [F6, F7, F8, step 1.2]

2.2 Assume that $U$ is compact and that every open subset of $U$ is compact, and let $t\in\mathcal F(U)=(\mathcal P^+)^+(U)$. By [F3] $t$ is the class of a germ-compatible local presentation of $\mathcal P^+$ over $U$: an open cover $U=\bigcup_{a}T_a$ together with elements $t_a\in\mathcal P^+(T_a)$ whose germs agree on the overlaps; and each $t_a$ is in turn the class of a germ-compatible local presentation of $\mathcal P$ over $T_a$, consisting of an open cover $T_a=\bigcup_b W_{ab}$ and elements $s_{ab}\in\mathcal P(W_{ab})$ whose germs agree on the overlaps. The families $(W_{ab})$ cover $U$, and for $x\in W_{ab}\cap W_{a'b'}$ the germs of $s_{ab}$ and $s_{a'b'}$ at $x$ both equal the germ of $t$ at $x$ by [F3] and [step 1.2]; hence $(W_{ab},s_{ab})$ is a germ-compatible local presentation of $\mathcal P$ over $U$ whose image in $\mathcal F(U)=\mathcal P^{++}(U)$ equals $t$, and consequently $\Psi_{W_{ab}}(s_{ab})=t|_{W_{ab}}$ for all $a,b$ by [step 1.2]. Since $U$ is compact, finitely many of the $W_{ab}$ cover $U$ [F8]; enumerate them $U_1,\dots,U_m$ and choose corresponding elements $s_j\in\mathcal P(U_j)$ with $\Psi_{U_j}(s_j)=t|_{U_j}$. By hypothesis each $U_j$ and each intersection $U_j\cap U_{j'}$ is compact. [F3, F8, step 1.2]

3.1 With the data of [step 2.2]: for each pair $j,j'$ the two elements $s_j|_{U_j\cap U_{j'}}$ and $s_{j'}|_{U_j\cap U_{j'}}$ of $\mathcal P(U_j\cap U_{j'})$ have the same image under $\Psi_{U_j\cap U_{j'}}$, namely $t|_{U_j\cap U_{j'}}$, because $\Psi$ is natural with respect to restrictions and agrees with $\Psi_{U_j}$, $\Psi_{U_{j'}}$ there. Since $U_j\cap U_{j'}$ is compact, [step 2.1] shows that these two elements are equal in $\mathcal P(U_j\cap U_{j'})=\operatorname*{colim}_i\mathcal F_i(U_j\cap U_{j'})$; by [F6] there are arrows from the two representing indices to a common later index, and since there are finitely many pairs we may take a cocone over the finite diagram of representing indices, witness indices and witnessing arrows, equalizing parallel arrows by filteredness, with vertex $\ell$. Then the elements $\mathcal F_i\to\mathcal F_\ell$ applied to $s_j$ are sections of the sheaf $\mathcal F_\ell$ over $U_j$ that agree on each overlap $U_j\cap U_{j'}$ by [F6], so they glue by [F7] to a single element $s\in\mathcal F_\ell(U)$; and $\Psi_U(s)$ restricted to $U_j$ equals $\Psi_{U_j}$ of the image of $s_j$, which is $t|_{U_j}$. Since the $U_j$ cover $U$ and $\mathcal F$ is a sheaf, $\Psi_U(s)=t$ by [F7]. Hence $\Psi_U$ is surjective. [F6, F7, step 2.2, step 2.1]

4.1 If $X$ is Noetherian and $U\subseteq X$ is open, then by [F9] the subspace $U$ is Noetherian and compact and every subspace of $U$ is compact; in particular every open subset of $U$ is compact, so [step 3.1] and the compactness of $U$ give the bijectivity of $\Psi_U$. For the group statement of assertion 4: if the diagram consists of abelian sheaves and sectionwise group homomorphisms, then each $\mathcal F_i(U)$ is an abelian group and $\mathcal P(U)=\operatorname*{colim}_i\mathcal F_i(U)$ carries the filtered-colimit group structure: add representatives after mapping them to a common stage, and negate a representative at its stage; filteredness and [F6] make these operations well defined and give the group-colimit universal property; restrictions on $\mathcal P$ are additive since they are induced by additive restrictions at every stage. The group structure extends to $\mathcal P^+$ explicitly: add two local presentations on their common intersection cover, negate their local sections, and use the presentation by the zero section for zero. Equality of germs is compatible with these operations, so they are well defined on the equivalence classes of [F3]; the group laws hold locally, hence on presentation classes, and restrictions and the single-chart unit are additive. Applying the same construction a second time gives the abelian-sheaf structure on $\mathcal F=\mathcal P^{++}$ and its additive unit; and the canonical maps $\Psi_U$ are group homomorphisms because they are induced by the additive transition maps $\varphi_{ii'}$ and by the additive unit of the sheafification. A bijective group homomorphism is an isomorphism of groups, so $\Psi_U$ is an isomorphism of abelian groups in cases 2 and 3, and an injective homomorphism in case 1. [F3, F6, F7, F9, step 1.2, step 3.1]

5.1 Assertion 1 is [step 2.1]; assertion 2 combines [step 2.1] with [step 3.1]; assertion 3 is the first part of [step 4.1]; assertion 4 is the second part of [step 4.1]. The stated AC hypothesis permits the simultaneous selection of local witnesses and presentations in steps 2.1 and 2.2. Filteredness supplies the finite cocones used in steps 2.1 and 3.1; neither the germ equivalence relation nor eventual equality is being asserted to require AC. ∎ [F10, step 2.1, step 3.1, step 4.1]
