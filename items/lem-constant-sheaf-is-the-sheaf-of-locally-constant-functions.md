---
id: "lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions"
kind: "lemma"
title: "The constant sheaf is the sheaf of locally constant functions"
status: draft
origin: pipeline
deps: [def-topological-space, def-presheaf-on-topological-space, def-morphism-of-presheaves, def-sheaf-on-topological-space, def-presheaf-of-groups-rings-modules, def-sheafification, def-presheaf-plus-construction, thm-sheafification-universal-property, thm-sheafification-preserves-stalks, def-stalk-of-presheaf, lem-locally-constant-functions-form-a-sheaf, thm-sheaf-morphism-isomorphism-stalkwise, def-limit-and-colimit-of-a-diagram, def-filtered-category-and-filtered-colimit, thm-abelian-sheaves-form-abelian-category, def-germ-of-section]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
---

## Statement

Let $X$ be a topological space ([[def-topological-space]]) and let $A$ be a
set. A function $f:U\to A$ on an open subset $U\subseteq X$ is **locally
constant** when every $x\in U$ has an open neighbourhood $V\subseteq U$ with
$x\in V$ on which $f$ is constant. Let $A_{\mathrm{pt}}$ be the **constant
presheaf** with value $A$, $A_{\mathrm{pt}}(U)=A$ for every open $U$ with all
restriction maps the identity ([[def-presheaf-on-topological-space]]), and let
$$A_X:=aA_{\mathrm{pt}}$$
be its sheafification ([[def-sheafification]]), the **constant sheaf** with
value $A$ on $X$. Then:

1. the assignment $\underline A_{\mathrm{loc}}(U):=\{f:U\to A\text{ locally
   constant}\}$, with the usual restriction maps, is a sheaf of sets on $X$, and
   for every $x\in X$ evaluation at $x$ is a canonical bijection
   $\underline A_{\mathrm{loc},x}\cong A$
   ([[lem-locally-constant-functions-form-a-sheaf]]);
2. there is a canonical isomorphism of sheaves of sets
   $$\theta:A_X\longrightarrow\underline A_{\mathrm{loc}}$$
   such that for every open $U\subseteq X$ and every $a\in A$ the section
   $\theta_U(\eta_{U}(a))$ is the constant function with value $a$, where
   $\eta:A_{\mathrm{pt}}\to A_X$ is the sheafification map;
3. if $A$ is an abelian group, then $A_{\mathrm{pt}}$ with its group operation is
   a presheaf of abelian groups ([[def-presheaf-of-groups-rings-modules]]) and
   $\underline A_{\mathrm{loc}}$ with pointwise addition is a sheaf of abelian
   groups ([[thm-abelian-sheaves-form-abelian-category]]); the maps
   $a\mapsto\text{the constant function with value }a$ are group homomorphisms,
   and the group structures transported along the bijections $\theta_U$ make
   $A_X$ a sheaf of abelian groups for which every $\eta_U$ and every $\theta_U$
   is a group homomorphism.

## Facts & Assumptions

[F1] A morphism of presheaves is a family of maps commuting with restriction: $\varphi_V(s|_V)=\varphi_U(s)|_V$ for all $s\in\mathcal F(U)$ and $V\subseteq U$ ([[def-morphism-of-presheaves]]).

[F2] The locally constant $A$-valued functions form a sheaf of sets $\underline A_{\mathrm{loc}}$ on $X$, and for every $x\in X$ evaluation at $x$ induces a canonical bijection $\underline A_{\mathrm{loc},x}\cong A$ ([[lem-locally-constant-functions-form-a-sheaf]]).

[F3] Sheafification is the double plus construction $a\mathcal F=\mathcal F^{++}$ with canonical map $\eta_{\mathcal F}$, and every presheaf morphism from $\mathcal F$ into a sheaf factors uniquely through $\eta_{\mathcal F}$ ([[def-sheafification]], [[thm-sheafification-universal-property]]).

[F4] For every presheaf $\mathcal F$ the sheafification map induces a bijection on stalks, $\eta_{\mathcal F,x}:\mathcal F_x\to(a\mathcal F)_x$ ([[thm-sheafification-preserves-stalks]]).

[F5] The stalk at $x$ is the filtered colimit of the section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]], [[def-filtered-category-and-filtered-colimit]]).

[F6] A colimit of a diagram is an initial cocone: for every cocone $(X,\xi)$ there is a unique morphism out of it compatible with the structure maps ([[def-limit-and-colimit-of-a-diagram]]).

[F7] A morphism of sheaves of sets is an isomorphism if and only if all of its induced maps on stalks are bijections ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F8] For an abelian group $A$ the constant presheaf is a presheaf of abelian groups with the group operation of $A$ at every open, and the category of sheaves of abelian groups on $X$ is abelian ([[def-presheaf-of-groups-rings-modules]], [[thm-abelian-sheaves-form-abelian-category]]).

## Proof

**Given:** A topological space $X$, a set $A$, the constant presheaf $A_{\mathrm{pt}}$ with value $A$, its sheafification $A_X=aA_{\mathrm{pt}}$ with sheafification map $\eta$, and the sheaf $\underline A_{\mathrm{loc}}$ of locally constant functions.

1.1 Define a presheaf map $\varphi:A_{\mathrm{pt}}\to\underline A_{\mathrm{loc}}$ by $\varphi_U(a):=(x\mapsto a)$, the constant function with value $a$ on $U$. This is a morphism of presheaves in the sense of [F1]: for $V\subseteq U$ and $a\in A$ the restriction of the constant function with value $a$ on $U$ to $V$ is again the constant function with value $a$, and $\varphi_V(a)$ is that same function, so $\varphi_V(a|_V)=\varphi_U(a)|_V$, both sides being constant with value $a$; here $a|_V=a$ because all restriction maps of $A_{\mathrm{pt}}$ are the identity. [F1, F2]

1.2 The stalk of the constant presheaf at $x\in X$ is $A$: by [F5] it is the colimit of the diagram which is constant with value $A$ on the filtered category of open neighbourhoods of $x$, and a cocone from that diagram to a set $S$ is the same thing as a single map $A\to S$ (all the structure maps of $A_{\mathrm{pt}}$ are identities, so the compatibility conditions are automatic); by the explicit description of a colimit [F6] the identity of $A$ exhibits $A$ as a colimit, so the canonical map $A\to(A_{\mathrm{pt}})_x$, $a\mapsto$ the class of the constant section $a$ over $X$, is a bijection. [F5, F6]

2.1 By [F2] the presheaf $\underline A_{\mathrm{loc}}$ is a sheaf of sets, so by the universal property [F3] the morphism $\varphi$ factors uniquely through the sheafification map $\eta:A_{\mathrm{pt}}\to A_X$: there is exactly one morphism of sheaves of sets $\theta:A_X\to\underline A_{\mathrm{loc}}$ with $\theta\circ\eta=\varphi$. In particular $\theta_U(\eta_U(a))=\varphi_U(a)$ is the constant function with value $a$, which is the compatibility asserted in clause 2. [F3, step 1.1]

2.2 Under the identifications of [step 1.2] and of the evaluation bijection of [F2], the induced map $\varphi_x:(A_{\mathrm{pt}})_x\to\underline A_{\mathrm{loc},x}$ is the identity of $A$: the element $a$ corresponds to the class of the constant section with value $a$ over $X$, its image under $\varphi$ is the germ of the constant function with value $a$, and evaluation at $x$ returns $a$. Hence $\varphi_x$ is a bijection for every $x\in X$. [F2, step 1.1, step 1.2]

3.1 For every $x\in X$ the map $\eta_x:(A_{\mathrm{pt}})_x\to(A_X)_x$ is a bijection by [F4], and $\varphi_x=\theta_x\circ\eta_x$ by [step 2.1]; since $\varphi_x$ is a bijection by [step 2.2], the map $\theta_x$ is a bijection as well, being the composite of the inverse of $\eta_x$ with $\varphi_x$. [F4, step 2.1, step 2.2]

4.1 By [step 3.1] every induced map of $\theta$ on stalks is a bijection, so $\theta:A_X\to\underline A_{\mathrm{loc}}$ is an isomorphism of sheaves of sets by [F7]. Together with [step 2.1] this is clauses 1 and 2 of the statement. [F7, step 2.1, step 3.1]

5.1 Suppose now that $A$ is an abelian group. Pointwise addition makes $A_{\mathrm{pt}}$ a presheaf of abelian groups, all of whose restriction maps are the identity, and makes $\underline A_{\mathrm{loc}}$ a sheaf of abelian groups: the sum and the negative of locally constant functions are locally constant, since on a neighbourhood where each summand is constant the sum is constant, and restrictions are the corresponding group homomorphisms [F8]. Each $\varphi_U$ is a group homomorphism because constant functions add pointwise. Transport the group operation of $\underline A_{\mathrm{loc}}(U)$ to $A_X(U)$ along the bijection $\theta_U$ of [step 4.1], declaring $s+t:=\theta_U^{-1}(\theta_U(s)+\theta_U(t))$ for $s,t\in A_X(U)$: this makes every $\theta_U$ a group isomorphism, and the restriction maps of $A_X$ are group homomorphisms because they are conjugate through $\theta$ to the restriction maps of $\underline A_{\mathrm{loc}}$, which are homomorphisms, so $A_X$ is a sheaf of abelian groups; moreover $\eta_U=\theta_U^{-1}\circ\varphi_U$ is then a group homomorphism, since it is a composite of group homomorphisms and the inverse of one. This is clause 3, and the proof is complete. ∎ [F8, step 2.1, step 4.1]
