---
id: "lem-cech-h0-global-sections"
kind: "lemma"
title: "Čech H0 equals global sections"
status: published
origin: pipeline
deps: [def-cech-cohomology-open-cover, def-cech-cochain-complex-open-cover, def-sheaf-on-topological-space, def-global-sections-functor-sheaves, def-section-restriction-and-global-section, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  audited: 2026-09-27
---

## Statement

Let $X$ be a topological space, $\mathcal F$ a sheaf of abelian groups on $X$,
and $\mathcal U=(U_i)_{i\in I}$ an open cover of $X$ indexed by a linearly
ordered set, with fixed-cover Čech cohomology $\check H^\bullet(\mathcal U,
\mathcal F)$ ([[def-cech-cohomology-open-cover]]). Then restriction of global
sections,
$$\Gamma(X,\mathcal F)\longrightarrow\check H^0(\mathcal U,\mathcal F),\qquad s\longmapsto\bigl(s|_{U_i}\bigr)_{i\in I},$$
is an isomorphism, and it is natural in $\mathcal F$: for a morphism
$\varphi:\mathcal F\to\mathcal G$ of abelian sheaves the square
$$\begin{matrix}\Gamma(X,\mathcal F)&\longrightarrow&\check H^0(\mathcal U,\mathcal F)\\ \downarrow\scriptstyle{\Gamma(X,\varphi)}&&\downarrow\scriptstyle{\check H^0(\mathcal U,\varphi)}\\ \Gamma(X,\mathcal G)&\longrightarrow&\check H^0(\mathcal U,\mathcal G)\end{matrix}$$
commutes.

## Facts & Assumptions

[F1] $C^0(\mathcal U,\mathcal F)=\prod_{i\in I}\mathcal F(U_i)$ and $(\delta^0 s)_{ij}=s_j|_{U_i\cap U_j}-s_i|_{U_i\cap U_j}$ for $i<j$ ([[def-cech-cochain-complex-open-cover]]).

[F2] A sheaf satisfies locality: if $s,t\in\mathcal F(X)$ have $s|_{U_i}=t|_{U_i}$ for all $i$ in a cover, then $s=t$; and gluing: compatible sections $s_i\in\mathcal F(U_i)$ with $s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}$ have a section restricting to each $s_i$ ([[def-sheaf-on-topological-space]]).

[F3] $\check H^0(\mathcal U,\mathcal F)=\ker(\delta^0)/\operatorname{im}(\delta^{-1})=\ker(\delta^0)$, since $C^{-1}(\mathcal U,\mathcal F)=0$ ([[def-cech-cohomology-open-cover]]).

[F4] $\Gamma(X,\mathcal F)=\mathcal F(X)$ and $\Gamma(X,\varphi)=\varphi_X$, and a morphism of sheaves commutes with restrictions ([[def-global-sections-functor-sheaves]], [[def-section-restriction-and-global-section]]).

[F5] A section over the empty open set is zero, $\mathcal F(\varnothing)=0$ ([[lem-sheaf-section-over-empty-set-terminal]]); in particular for the empty space and empty cover the product over no indices is the zero group.

## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ and an ordered open cover $\mathcal U$ of $X$.

1.1 Define $\Phi:\Gamma(X,\mathcal F)\to C^0(\mathcal U,\mathcal F)=\prod_{i\in I}\mathcal F(U_i)$ by $\Phi(s):=(s|_{U_i})_{i\in I}$ [F1, F4]. For $s\in\Gamma(X,\mathcal F)$ and $i<j$ one has $(\delta^0\Phi(s))_{ij}=s|_{U_j}|_{U_i\cap U_j}-s|_{U_i}|_{U_i\cap U_j}=s|_{U_i\cap U_j}-s|_{U_i\cap U_j}=0$ by compatibility of restrictions [F1, F4], so $\Phi$ takes values in $\ker(\delta^0)$; it is a group homomorphism because restrictions are homomorphisms. [F1, F4]

2.1 $\Phi$ is injective: if $\Phi(s)=0$ then $s|_{U_i}=0$ for every $i$, and since the $U_i$ cover $X$ the locality half of the sheaf condition [F2] gives $s=0$. [F2, step 1.1]

2.2 $\Phi$ is surjective onto $\ker(\delta^0)$: let $(s_i)_{i\in I}\in\ker(\delta^0)$. For $i<j$ the equation $(\delta^0 s)_{ij}=0$ reads $s_j|_{U_i\cap U_j}=s_i|_{U_i\cap U_j}$ [F1], so the family is compatible on all pairwise intersections and the gluing half of the sheaf condition [F2] produces $s\in\mathcal F(X)$ with $s|_{U_i}=s_i$ for all $i$; then $\Phi(s)=(s_i)$ by [step 1.1] and this section is unique by locality. (If some $U_i$ is empty its component group is $0$ by [F5], so the corresponding entry is forced to be zero and imposes no condition.) [F1, F2, F5, step 1.1] [F1, F2, F5]

3.1 Hence $\Phi$ is an isomorphism of abelian groups from $\Gamma(X,\mathcal F)$ onto $\ker(\delta^0)$, and by [F3] the latter is $\check H^0(\mathcal U,\mathcal F)$; so the displayed restriction map is an isomorphism. For naturality, let $\varphi:\mathcal F\to\mathcal G$ be a morphism of abelian sheaves. Since $\varphi$ commutes with restrictions [F4], for every $s\in\Gamma(X,\mathcal F)$ and every $i$ one has $\varphi_{U_i}(s|_{U_i})=\varphi_X(s)|_{U_i}$, so $\Phi_{\mathcal G}(\varphi_X(s))=C^0(\mathcal U,\varphi)(\Phi_{\mathcal F}(s))$; as $\check H^0(\mathcal U,\varphi)$ is the map induced on $\ker(\delta^0)$ [F1, F3], the square commutes and the isomorphism is natural in $\mathcal F$. [F3, F4, step 2.2] ∎ [F3, F4] ∎
