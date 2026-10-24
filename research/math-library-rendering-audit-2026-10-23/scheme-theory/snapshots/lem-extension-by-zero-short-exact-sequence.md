---
id: "lem-extension-by-zero-short-exact-sequence"
kind: "lemma"
title: "Extension by zero and the closed complement: a short exact sequence"
status: published
origin: pipeline
deps: [def-extension-by-zero-abelian-sheaf, thm-extension-by-zero-adjunction-exactness, def-restriction-sheaf-open-subspace, def-direct-image-sheaf, lem-direct-image-is-sheaf, def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category, def-exact-sequence-sheaves, thm-exactness-of-sheaves-stalkwise, def-stalk-of-presheaf, lem-equality-in-a-filtered-colimit-of-sets-is-eventual, lem-sheaf-section-over-empty-set-terminal, def-subspace-topology-top, thm-inverse-direct-image-adjunction, lem-stalk-inverse-image-sheaf, def-sheafification, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-topological-space, def-presheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
verification:
  audited: 2026-09-27
---

## Statement

Let $j:U\hookrightarrow X$ be the inclusion of an open subspace
([[def-topological-space]]) with closed complement $Z=X\setminus U$, let
$i:Z\hookrightarrow X$ be the inclusion of the subspace
([[def-subspace-topology-top]]), and let $\mathcal F$ be a sheaf of abelian groups
on $X$ ([[def-sheaf-on-topological-space]], [[thm-abelian-sheaves-form-abelian-category]]).
Write $\mathcal F|_U:=j^{-1}\mathcal F$ and $\mathcal F|_Z:=i^{-1}\mathcal F$ for
the restrictions ([[def-restriction-sheaf-open-subspace]]). Then:

1. the adjoint transpose of the identity of $\mathcal F|_U$ under the adjunction
   of [[thm-extension-by-zero-adjunction-exactness]] and the unit of the
   adjunction ([[thm-inverse-direct-image-adjunction]]) fit into a short exact
   sequence of sheaves of abelian groups on $X$
   $$0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0,$$
   where $j_!$ is extension by zero ([[def-extension-by-zero-abelian-sheaf]]) and
   $i_*$ is the direct image ([[def-direct-image-sheaf]],
   [[lem-direct-image-is-sheaf]]); exactness is that of
   [[def-exact-sequence-sheaves]];
2. if $\mathcal F=\mathbb Z_X$ is the constant sheaf with value $\mathbb Z$ on
   $X$, then $\mathcal F|_U$ is canonically isomorphic to the constant sheaf
   $\mathbb Z_U$ on $U$, so the sequence of clause 1 reads
   $0\to j_!(\mathbb Z_U)\to\mathbb Z_X\to i_*(\mathcal F|_Z)\to0$ up to that
   canonical isomorphism.

## Facts & Assumptions

[F1] For open $V\subseteq U$ one has $(j_!\mathcal G)(V)=\mathcal G(V)$, the support condition being vacuous; equivalently a section $s$ lies in $(j_!\mathcal G)(V)$ for an open $V\subseteq X$ exactly when for every $x\in V\setminus U$ there is an open $W_x\subseteq V$ with $x\in W_x$ and $s|_{W_x\cap U}=0$ ([[def-extension-by-zero-abelian-sheaf]]).

[F2] For $W\subseteq U$ open, $(\mathcal F|_U)(W)$ is identified with $\mathcal F(W)$, because $W$ is open in $X$ and is itself a neighbourhood of $j(W)=W$ in the colimit defining $j^{-1}\mathcal F$ ([[def-restriction-sheaf-open-subspace]]).

[F3] The stalk of a presheaf at $x$ is the filtered colimit of its section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F4] Two elements of a filtered colimit of sets are equal if and only if they have equal images in a common later stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F5] Direct image is $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$ on open $V\subseteq Y$ ([[def-direct-image-sheaf]]), and it sends sheaves to sheaves ([[lem-direct-image-is-sheaf]]).

[F6] For a sheaf $\mathcal F$ of sets, $\mathcal F(\varnothing)$ is a singleton ([[lem-sheaf-section-over-empty-set-terminal]]).

[F7] Open subsets of the subspace $S\subseteq X$ are exactly the traces $U\cap S$ of open subsets of $X$ ([[def-subspace-topology-top]]).

[F8] Inverse image is left adjoint to direct image: $\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$ ([[thm-inverse-direct-image-adjunction]]).

[F9] The stalk of an inverse image is the stalk at the image point, $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F10] A sequence of sheaves of abelian groups is exact if and only if all its stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]); a sequence $0\to\mathcal A\to\mathcal B\to\mathcal C\to0$ is short exact when it is exact at all three terms ([[def-exact-sequence-sheaves]]).

[F11] The constant sheaf $A_X$ is canonically isomorphic to the sheaf of locally constant $A$-valued functions, the section of the latter corresponding to a class in the constant presheaf being the constant function with that value ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

## Proof

**Given:** An open inclusion $j:U\hookrightarrow X$ with closed complement $Z=X\setminus U$, the closed inclusion $i:Z\hookrightarrow X$, a sheaf of abelian groups $\mathcal F$ on $X$, and the sheaves $j_!(\mathcal F|_U)$ and $i_*(\mathcal F|_Z)$.

1.1 Let $\mathcal G:=j_!(\mathcal F|_U)$. For $x\in U$ the open neighbourhoods $V$ of $x$ with $V\subseteq U$ are cofinal among all open neighbourhoods of $x$, and on them $(j_!(\mathcal F|_U))(V)=(\mathcal F|_U)(V)=\mathcal F(V)$ by [F1] and [F2]; hence $\mathcal G_x=\operatorname*{colim}_{x\in V\subseteq U}\mathcal F(V)=\mathcal F_x$ by [F3], the colimit over the cofinal subdiagram agreeing with the stalk of $\mathcal F$. [F1, F2, F3]

1.2 Let $x\in X\setminus U$ and let $s\in\mathcal G(V)$ be a section over an open neighbourhood $V$ of $x$. Since $x\in V\setminus U$, the local description of [F1] provides an open $W_x\subseteq V$ with $x\in W_x$ and $s|_{W_x\cap U}=0$, and the restriction of $s$ to $W_x$ is the zero element of $\mathcal G(W_x)$; by [F4] applied to the filtered diagram of section groups over the neighbourhoods of $x$ [F3], the image of $s$ in $\mathcal G_x$ is zero. Every element of $\mathcal G_x$ has such a representative, so $\mathcal G_x=0$ for every $x\notin U$. [F1, F3, F4]

1.3 Let $\mathcal H:=i_*(\mathcal F|_Z)$, a sheaf of abelian groups on $X$ by [F5]. For $z\in Z$ the traces $V\cap Z$ of the open neighbourhoods $V$ of $z$ in $X$ are cofinally the open neighbourhoods of $z$ in $Z$ [F7], so by [F5] and [F3] the stalk is $\mathcal H_z\cong(\mathcal F|_Z)_z\cong\mathcal F_z$ by [F9]. For $x\notin Z$ the open set $X\setminus Z$ contains $x$, and $(V\cap(X\setminus Z))\cap Z=\varnothing$ for every open $V\ni x$, so the colimit of [F3] is computed by the subdiagram of neighbourhoods meeting $Z$ in the empty set, where $\mathcal H$ has the constant value $(\mathcal F|_Z)(\varnothing)$, a singleton by [F6] and hence the zero group; thus $\mathcal H_x=0$ for every $x\notin Z$. [F3, F5, F6, F7, F9]

2.1 I record how the two maps of the displayed sequence act on stalks. The map $j_!(\mathcal F|_U)\to\mathcal F$ is the adjoint transpose of the identity of $\mathcal F|_U$; on a section over $V\subseteq U$ it is the identity of $\mathcal F(V)$ under the identifications of [F1] and [F2], so for $x\in U$ its stalk is the identification $\mathcal G_x=\mathcal F_x$ of [step 1.1]. The map $\mathcal F\to i_*(\mathcal F|_Z)$ is the unit of the adjunction [F8]; its stalk at $z\in Z$ is the canonical identification $\mathcal F_z\cong(\mathcal F|_Z)_z\cong\mathcal H_z$ of [step 1.3] and [F9], because the unit is adjunct to the identity of $i^{-1}\mathcal F$, and for $x\notin Z$ the target stalk $\mathcal H_x$ vanishes by [step 1.3], so that stalk map is $\mathcal F_x\to0$. [F1, F2, F8, F9, step 1.1, step 1.2, step 1.3]

3.1 At a point $x\in U$ the stalk sequence of the displayed sequence is $0\to\mathcal G_x=\mathcal F_x\to\mathcal F_x\to\mathcal H_x=0\to0$, the first map being the identity by [step 2.1] and the last the zero map, so it is exact; at a point $z\in Z$ it is $0\to\mathcal G_z=0\to\mathcal F_z\to\mathcal H_z\cong\mathcal F_z\to0$, the last map being an isomorphism by [step 2.1], so it is exact as well. By [F10] the displayed sequence of sheaves is exact at $j_!(\mathcal F|_U)$, at $\mathcal F$ and at $i_*(\mathcal F|_Z)$, that is, it is a short exact sequence; this proves clause 1. [F10, step 2.1, step 1.1, step 1.2, step 1.3]

4.1 Let $\mathcal F=\mathbb Z_X$ be the constant sheaf of [F11]. For $W\subseteq U$ open, the definition of the restriction gives $(\mathbb Z_X|_U)(W)=\mathbb Z_X(W)$ [F2], and $\mathbb Z_X(W)$ is identified with the group of locally constant $\mathbb Z$-valued functions $W\to\mathbb Z$ by [F11]; the same group is $\mathbb Z_U(W)$, and the identifications are those of the canonical isomorphisms of [F11] for the spaces $X$ and $U$, so they are compatible with restrictions in $W$. Hence $\mathbb Z_X|_U$ is canonically isomorphic to $\mathbb Z_U$, and the sequence of clause 1 takes the form $0\to j_!(\mathbb Z_U)\to\mathbb Z_X\to i_*(\mathcal F|_Z)\to0$ up to this isomorphism, which proves clause 2. ∎ [F2, F11]
