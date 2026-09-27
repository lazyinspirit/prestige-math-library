---
id: "lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces"
kind: "lemma"
title: "Filtered colimits and sheaf cohomology on Noetherian spaces"
status: draft
origin: pipeline
deps: [lem-sections-on-compact-opens-commute-with-filtered-colimits, lem-noetherian-subspaces-and-compact-opens, thm-abelian-sheaves-have-enough-injectives, thm-long-exact-sequence-sheaf-cohomology, def-sheaf-cohomology-derived-global-sections, def-axiom-of-choice, thm-set-has-all-small-colimits, def-flasque-sheaf, lem-injective-sheaves-flasque, thm-flasque-sheaves-acyclic, lem-abelian-sheaves-form-a-grothendieck-category, thm-ab5-is-equivalent-to-exactness-of-filtered-colimits, lem-filtered-colimits-of-abelian-groups-are-exact, def-kernel-cokernel-image-sheaves, def-filtered-category-and-filtered-colimit, def-noetherian-topological-space, thm-zero-sheaf-cohomology-global-sections, def-presheaf-plus-construction, def-sheafification, def-exact-functor-between-abelian-categories, thm-abelian-sheaves-form-abelian-category, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
Noetherian topological space ([[def-noetherian-topological-space]]), let
$\mathcal J$ be a small filtered category
([[def-filtered-category-and-filtered-colimit]]) and let $i\mapsto\mathcal F_i$
be a diagram of sheaves of abelian groups on $X$. Let
$$\mathcal P(U):=\operatorname*{colim}_i\mathcal F_i(U)$$
be the presheaf colimit of the section groups and let
$\mathcal F:=a\mathcal P=\mathcal P^{++}$ be its sheafification
([[def-sheafification]]), with canonical maps $\Phi_i:\mathcal F_i\to\mathcal F$.
Then:

1. $\mathcal F$ with the maps $\Phi_i$ is the colimit of the diagram in
   $\mathrm{Ab}(X)$, and for every open subset $U\subseteq X$ the canonical map
   $\Psi_U:\operatorname*{colim}_i\mathcal F_i(U)\to\mathcal F(U)$ induced by the
   maps $\mathcal F_i(U)\to\mathcal F(U)$ of the colimit cocone is an
   isomorphism of abelian groups;
2. for every $q\ge0$ the canonical map
   $$\operatorname*{colim}_iH^q(X,\mathcal F_i)\longrightarrow H^q(X,\mathcal F),$$
   induced by the maps $H^q(X,\Phi_i)$, is an isomorphism; equivalently, the
   canonical map $\operatorname*{colim}_iH^q(X,\mathcal F_i)\to
   H^q(X,\operatorname*{colim}_i\mathcal F_i)$ is an isomorphism for every
   $q\ge0$, where $\operatorname*{colim}_i\mathcal F_i:=\mathcal F$ denotes the
   colimit of the diagram in $\mathrm{Ab}(X)$.

## Facts & Assumptions

[F1] For a diagram of sheaves of sets, $\mathcal F=a\mathcal P=\mathcal P^{++}$ with the maps $\Phi_i$ is the colimit of the diagram in the category of sheaves of sets on $X$ ([[lem-sections-on-compact-opens-commute-with-filtered-colimits]]).

[F2] For an open $U\subseteq X$ the map $\Psi_U$ is the canonical map of section sets induced by the maps $\mathcal F_i(U)\to\mathcal F(U)$ of the colimit cocone ([[lem-sections-on-compact-opens-commute-with-filtered-colimits]]).

[F3] If $X$ is Noetherian then $\Psi_U$ is bijective for every open subset $U\subseteq X$, and in particular for the case in which the $\mathcal F_i$ are sheaves of abelian groups it is an isomorphism of abelian groups, the source carrying the group structure of the filtered colimit of the groups $\mathcal F_i(U)$ and the target the group structure of the sheaf $\mathcal F$ ([[lem-sections-on-compact-opens-commute-with-filtered-colimits]]).

[F4] Elements of the colimit of a small diagram of sets are classes of the quotient of the tagged union $\{(j,x):x\in D(j)\}$, so every element of a filtered colimit is the image of an element of some stage ([[thm-set-has-all-small-colimits]]).

[F5] A small filtered category is nonempty and any two objects admit arrows to a common object: for every $j,k$ there are an object $\ell$ and arrows $j\to\ell\leftarrow k$ ([[def-filtered-category-and-filtered-colimit]]).

[F6] Under AC the embeddings of [[thm-abelian-sheaves-have-enough-injectives]] supply one injective resolution datum on the whole category $\mathrm{Ab}(X)$, assigning to every abelian sheaf one specific injective resolution built functorially from it with no further selection.

[F7] $\mathrm{Ab}(X)$ is cocomplete, satisfies AB5 and has a generator ([[lem-abelian-sheaves-form-a-grothendieck-category]]), and a cocomplete abelian category satisfies AB5 exactly when every small filtered colimit functor on it is exact ([[thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]]); an exact functor preserves kernels, cokernels and images ([[def-exact-functor-between-abelian-categories]]).

[F8] A sheaf $\mathcal F$ of abelian groups is flasque when each restriction map $\rho^V_U:\mathcal F(V)\to\mathcal F(U)$ for open $U\subseteq V\subseteq X$ is surjective ([[def-flasque-sheaf]]), and every injective object of $\mathrm{Ab}(X)$ is flasque ([[lem-injective-sheaves-flasque]]).

[F9] A flasque sheaf of abelian groups on $X$ satisfies $H^q(U,\mathcal F|_U)=0$ for every open subspace $U\subseteq X$ and every integer $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F10] A short exact sequence of abelian sheaves induces a natural long exact sequence of sheaf cohomology groups, natural in the short exact sequence ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F11] For a filtered diagram of exact complexes of abelian groups the colimit complex is exact in every degree, and more generally the canonical maps $\operatorname*{colim}_jH^p(K_j^\bullet)\to H^p(\operatorname*{colim}_jK_j^\bullet)$ are isomorphisms ([[lem-filtered-colimits-of-abelian-groups-are-exact]]).

[F12] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)=\mathcal F(X)$, naturally in $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F13] The cokernel sheaf $\operatorname{coker}(\varphi)$ of a morphism of abelian sheaves is the sheafification of the objectwise cokernel presheaf ([[def-kernel-cokernel-image-sheaves]]).

[F14] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Given:** A Noetherian topological space $X$, a small filtered category $\mathcal J$, a diagram $i\mapsto\mathcal F_i$ of sheaves of abelian groups on $X$, the presheaf colimit $\mathcal P$ of the section groups, the sheafification $\mathcal F=a\mathcal P$ with its canonical maps $\Phi_i$, and the identifications of assertion 1.

1.1 Let $U\subseteq X$ be open. By [F3], $X$ being Noetherian makes $\Psi_U$ an isomorphism of abelian groups, the source carrying the group structure of the filtered colimit of the groups $\mathcal F_i(U)$ and the target the group structure of the sheaf $\mathcal F$. Since $\Psi_U$ is by [F2] the map induced by the cocone maps $\mathcal F_i(U)\to\mathcal F(U)$, the component $\Phi_i(U)$ equals $\Psi_U\circ c_i$, where $c_i:\mathcal F_i(U)\to\operatorname*{colim}_i\mathcal F_i(U)$ is the structure map of the colimit of groups; hence each $\Phi_i(U)$ is a group homomorphism, and so each $\Phi_i$ is a morphism of sheaves of abelian groups. [F2, F3]

1.2 For open subsets $V\subseteq U$ of $X$, under the identifications $\Psi_U$ and $\Psi_V$ of assertion 1 the restriction map $\mathcal F(U)\to\mathcal F(V)$ is the map of filtered colimits induced by the restriction maps $\mathcal F_i(U)\to\mathcal F_i(V)$ with the transition maps: the maps $\Phi_i$ are morphisms of sheaves, hence commute with restrictions, and $\Psi_U$ and $\Psi_V$ are given by the cocone maps [F2]. [F2, F3]

2.1 $\mathcal F$ with the maps $\Phi_i$ is the colimit of the diagram in $\mathrm{Ab}(X)$. Let $\mathcal H$ be a sheaf of abelian groups and let $\psi_i:\mathcal F_i\to\mathcal H$ be morphisms of abelian sheaves compatible with the transition maps; they form a cocone in the category of sheaves of sets, so [F1] gives a unique morphism of sheaves of sets $\psi:\mathcal F\to\mathcal H$ with $\psi\circ\Phi_i=\psi_i$. We show that $\psi$ is additive; uniqueness among morphisms of abelian sheaves then follows from uniqueness among morphisms of sheaves of sets. Let $U\subseteq X$ be open and $s,t\in\mathcal F(U)$. By [F3] the map $\Psi_U$ is a bijection from the colimit of the sets $\mathcal F_i(U)$, whose elements are by [F4] images of tagged elements of the stages; hence $s=\Psi_U(c_i(s_i))=\Phi_i(U)(s_i)$ and $t=\Psi_U(c_j(t_j))=\Phi_j(U)(t_j)$ for some indices $i,j$ and elements $s_i\in\mathcal F_i(U)$, $t_j\in\mathcal F_j(U)$. By [F5] there are a common later index $\ell$ and arrows $i\to\ell$, $j\to\ell$; the $\Phi$'s form a cocone, so $s=\Phi_\ell(U)(\varphi_{i\ell}(s_i))$ and $t=\Phi_\ell(U)(\varphi_{j\ell}(t_j))$. By [step 1.1] the map $\Phi_\ell(U)$ is a group homomorphism, so $s+t=\Phi_\ell(U)(\varphi_{i\ell}(s_i)+\varphi_{j\ell}(t_j))$, and therefore $\psi(s+t)=\psi_\ell(\varphi_{i\ell}(s_i)+\varphi_{j\ell}(t_j))=\psi_\ell(\varphi_{i\ell}(s_i))+\psi_\ell(\varphi_{j\ell}(t_j))=\psi(s)+\psi(t)$, using $\psi\circ\Phi_\ell=\psi_\ell$ and the additivity of $\psi_\ell$; so $\psi$ is a morphism of abelian sheaves and $\mathcal F$ is the colimit in $\mathrm{Ab}(X)$. [F1, F4, F5, step 1.1]

3.1 Let $i\mapsto\mathcal J_i$ be a diagram of injective abelian sheaves on $X$ and let $\mathcal G:=\operatorname*{colim}_i\mathcal J_i$ be its colimit in $\mathrm{Ab}(X)$, formed as in [step 2.1]. Then $\mathcal G$ is flasque and $H^q(X,\mathcal G)=0$ for every $q>0$. Indeed, let $V\subseteq U$ be open and let $y\in\mathcal G(V)$. By [F3, F4] there are an index $i$ and $y_i\in\mathcal J_i(V)$ with $\Phi_i(V)(y_i)=y$. Since $\mathcal J_i$ is injective it is flasque [F8], so $y_i$ extends to some $x_i\in\mathcal J_i(U)$; put $x:=\Phi_i(U)(x_i)\in\mathcal G(U)$. By [step 1.2] the restriction of $x$ to $V$ is $\Phi_i(V)(x_i|_V)=\Phi_i(V)(y_i)=y$, so the restriction $\mathcal G(U)\to\mathcal G(V)$ is surjective and $\mathcal G$ is flasque by [F8]. Hence $H^q(X,\mathcal G)=0$ for every $q>0$ by [F9]. [F4, F8, F9, step 2.1, step 1.2]

3.2 Now let $i\mapsto\mathcal F_i$ be a diagram of abelian sheaves as in the statement. By [F6] each $\mathcal F_i$ carries the supplied injective resolution $0\to\mathcal F_i\to I^0_i\to I^1_i\to\cdots$, and the assignment is functorial, so the transition maps of the diagram induce cochain maps $I^\bullet_i\to I^\bullet_j$ of the deleted resolutions that commute with the coaugmentations and with composition. Hence for each $q\ge0$ the assignment $i\mapsto I^q_i$ is a diagram of abelian sheaves, and so is $i\mapsto Q_i$ with $Q_i:=\operatorname{coker}(\mathcal F_i\to I^0_i)$ [F13], with transition maps induced by the cochain maps. The diagrams $0\to\mathcal F_i\to I^0_i\to Q_i\to 0$ are pointwise short exact, and the filtered colimit functor on $\mathrm{Ab}(X)$ is exact by [F7]; an exact functor preserves exactness, so the colimit diagram $0\to\mathcal F\to\mathcal G^0\to\mathcal Q\to 0$ is short exact, where $\mathcal G^0:=\operatorname*{colim}_iI^0_i$ and $\mathcal Q:=\operatorname*{colim}_iQ_i$ are the colimits of these diagrams in $\mathrm{Ab}(X)$ formed as in [step 2.1]. [F6, F7, F13, step 2.1]

4.1 Fix $q_0\ge0$ and assume the statement $P(q_0)$: for every small filtered category and every diagram $i\mapsto\mathcal G_i$ of abelian sheaves on $X$ with colimit $\mathcal G$ in $\mathrm{Ab}(X)$ formed as in [step 2.1], the canonical map $\operatorname*{colim}_iH^q(X,\mathcal G_i)\to H^q(X,\mathcal G)$ is an isomorphism for every $0\le q\le q_0$. We prove $P(q_0+1)$. For each $i$ the short exact sequence $0\to\mathcal F_i\to I^0_i\to Q_i\to 0$ of [step 3.2] has, by [F10], a natural long exact sequence whose portion $H^{q_0}(X,I^0_i)\to H^{q_0}(X,Q_i)\to H^{q_0+1}(X,\mathcal F_i)\to H^{q_0+1}(X,I^0_i)$ is exact, the last group being zero because $I^0_i$ is injective, hence flasque [F8], hence acyclic [F9]. These sequences form a diagram of exact complexes of abelian groups, so by [F11] their colimit is exact: $\operatorname*{colim}_iH^{q_0}(X,I^0_i)\to\operatorname*{colim}_iH^{q_0}(X,Q_i)\to\operatorname*{colim}_iH^{q_0+1}(X,\mathcal F_i)\to0$. Likewise the long exact sequence of $0\to\mathcal F\to\mathcal G^0\to\mathcal Q\to 0$ contains the exact portion $H^{q_0}(X,\mathcal G^0)\to H^{q_0}(X,\mathcal Q)\to H^{q_0+1}(X,\mathcal F)\to H^{q_0+1}(X,\mathcal G^0)$ with $H^{q_0+1}(X,\mathcal G^0)=0$ by [step 3.1], since $\mathcal G^0$ is a filtered colimit of the injective sheaves $I^0_i$. By the naturality of the long exact sequence in the short exact sequence [F10] the cocone maps $\mathcal F_i\to\mathcal F$, $I^0_i\to\mathcal G^0$ and $Q_i\to\mathcal Q$ make these two exact sequences into a commutative ladder whose vertical maps are the canonical maps of the two diagrams. [F9, F10, F11, step 3.1, step 3.2]

5.1 Write the ladder of [step 4.1] as two exact rows $A_1\to A_2\xrightarrow{d}A_3\to0$ and $B_1\to B_2\xrightarrow{e}B_3\to0$, with vertical maps $\beta:A_1\to B_1$, $\gamma:A_2\to B_2$ and $\alpha:A_3\to B_3$ satisfying $\alpha\circ d=e\circ\gamma$. Here $A_3=\operatorname*{colim}_iH^{q_0+1}(X,\mathcal F_i)$ and $B_3=H^{q_0+1}(X,\mathcal F)$, while $\beta$ and $\gamma$ are the canonical maps of the diagrams $i\mapsto I^0_i$ and $i\mapsto Q_i$, whose colimits in $\mathrm{Ab}(X)$ are $\mathcal G^0$ and $\mathcal Q$ by [step 3.2]; by $P(q_0)$ they are isomorphisms. Then $\alpha$ is surjective: given $b\in B_3$, exactness at $B_3$ gives $b_2\in B_2$ with $e(b_2)=b$, surjectivity of $\gamma$ gives $a_2\in A_2$ with $\gamma(a_2)=b_2$, and $\alpha(d(a_2))=e(\gamma(a_2))=b$. And $\alpha$ is injective: if $a\in A_3$ has $\alpha(a)=0$, write $a=d(a_2)$; then $e(\gamma(a_2))=\alpha(a)=0$, so by exactness at $B_2$ there is $b_1\in B_1$ with $\gamma(a_2)=i_B(b_1)$, surjectivity of $\beta$ gives $b_1=\beta(a_1)$ for some $a_1\in A_1$, and the element $a_2-i_A(a_1)$ has $\gamma$-image $\gamma(a_2)-i_B(\beta(a_1))=0$, hence vanishes because $\gamma$ is injective; then $a=d(a_2)=d(i_A(a_1))=0$ by exactness at $A_2$. So $\alpha$ is an isomorphism and $P(q_0+1)$ holds. [step 4.1]

6.1 $P(0)$ holds: by [F12] the groups $H^0(X,\mathcal G)$ are identified naturally with $\mathcal G(X)$, so the canonical map of $P(0)$ is $\operatorname*{colim}_i\mathcal G_i(X)\to\mathcal G(X)$, which is the isomorphism $\Psi_X$ of assertion 1. Hence $P(q_0)$ implies $P(q_0+1)$ by [step 5.1], and induction gives $P(q)$ for every $q\ge0$; applying $P(q)$ to the given diagram $i\mapsto\mathcal F_i$ yields the isomorphism of assertion 2 for every $q\ge0$. The Axiom of Choice [F14] is used only through the functorial injective resolution datum of [F6] and the long exact sequence built from it; no further selection is made. ∎ [F12, F14, step 5.1]
