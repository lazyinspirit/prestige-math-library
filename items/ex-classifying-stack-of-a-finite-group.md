---
id: ex-classifying-stack-of-a-finite-group
kind: example
title: "The classifying stack of a finite group"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-category-fibred-in-groupoids
  - def-fppf-topology-on-schemes
  - def-descent-data-and-stack-in-groupoids
  - def-algebraic-stack-and-inertia
  - def-group-scheme-over-a-field
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - def-etale-morphism-schemes
  - def-faithfully-flat-morphism-schemes
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - def-axiom-of-choice
  - thm-flat-finite-presentation-is-open
  - def-smooth-morphism-schemes
  - thm-effective-fpqc-descent-of-finite-etale-covers
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 94 (Algebraic Stacks), Section 94.12 and Chapter 8 (Stacks)"
      url: "https://stacks.math.columbia.edu/download/algebraic.pdf"
      locator: "Definition 94.12.1 (tag 026N) and the classifying stack of a finite group as a standard Artin stack"
    - title: "The Stacks Project, Examples of Stacks, Section 95.14 (Classifying torsors)"
      url: "https://stacks.math.columbia.edu/tag/036Z"
      locator: "Subsection 95.14.1 and Lemma 95.14.2: the stack of torsors for an fppf sheaf of groups; scheme representability for this finite constant group is proved below using finite-etale descent"
---

## Example

Assume the Axiom of Choice inherited from the descent suppliers below
([[def-axiom-of-choice]]). Let $k$ be a field and let $G$ be a finite group,
viewed as the **constant group scheme** $G_k$ over $k$
([[def-group-scheme-over-a-field]]). Concretely,
$$G_k=\coprod_{g\in G}\operatorname{Spec}k,$$
and the group law $G_k\times_kG_k\to G_k$, inversion and identity are given on
components by the multiplication $G\times G\to G$, inversion $G\to G$ and
identity $\{1\}\to G$ of the finite group $G$; the composite maps are finite
disjoint unions of identities, so $G_k$ is a group scheme of finite type over
$k$, indeed finite étale, and $G_k(T)$ is the set of locally constant maps
$T\to G$ (the group of $G$-points of the constant sheaf). Let $G_k$ act
trivially on $\operatorname{Spec}k$.

Let $BG$ be the category fibred in groupoids over $(\mathit{Sch}/k)_{fppf}$
([[def-category-fibred-in-groupoids]],
[[def-fppf-topology-on-schemes]]) whose fibre category over a $k$-scheme $T$
has as objects the **right $G$-torsors** over $T$ — fppf coverings $P\to T$
with a right $G_k$-action for which
$G_k\times_kP\to P\times_TP$, $(g,p)\mapsto(pg,p)$, is an isomorphism — and
as morphisms the isomorphisms of torsors. Then $BG$ is a stack in groupoids
over $(\mathit{Sch}/k)_{fppf}$
([[def-descent-data-and-stack-in-groupoids]]) and an algebraic stack over $k$
([[def-algebraic-stack-and-inertia]]) with presentation
$\operatorname{Spec}k\to BG$ given by the trivial torsor
$G_k\to\operatorname{Spec}k$.

## Verification

**Given:** A finite group $G$, the constant group scheme $G_k=\coprod_{g\in G}\operatorname{Spec}k$ with its componentwise group law, the fibred category $BG$ of right $G$-torsors, the trivial torsor $G_k\to\operatorname{Spec}k$, and the inherited AC.

[F1] Descent of finite étale covers is effective: an fppf descent datum of finite étale covers (equivalently of finite étale group schemes) is effective, and represented functors are fppf sheaves, so morphisms of schemes and their composition descend uniquely along faithfully flat finitely presented maps ([[thm-effective-fpqc-descent-of-finite-etale-covers]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F2] A right $G$-torsor $P\to T$ is an fppf map with $G_k\times_kP\cong P\times_TP$; it trivializes over its own covering. Flat locally finitely presented maps are open, so over an affine target a finite affine refinement of this cover exists ([[def-faithfully-flat-morphism-schemes]], [[def-etale-morphism-schemes]], [[thm-flat-finite-presentation-is-open]]).

[F3] The algebraic stack conditions are read on presentations: a stack in groupoids is algebraic when its diagonal is representable by algebraic spaces and it admits a smooth surjective representable morphism from a scheme ([[def-algebraic-stack-and-inertia]], [[def-morphism-and-fibre-products-of-algebraic-spaces]]).

1.1 Every torsor is finite etale. The given kernel-pair isomorphism trivializes $P\to T$ over the cover $P\to T$. Over an affine open $T_0\subseteq T$, choose finitely many affine opens in $P_{T_0}$ whose open images cover $T_0$, using [F2]. Their disjoint union $V\to T_0$ is an affine faithfully flat quasi-compact fppf refinement. Over $V$ the torsor is $G_V$, hence finite etale. Its canonical finite-etale descent datum is effective by [F1], giving a finite etale $T_0$-scheme $Q$. The local isomorphism $Q_V\cong P_V$ and its inverse descend as morphisms by [F1], and their composites are identities by uniqueness. Thus $P_{T_0}\cong Q$, and these identifications glue over target opens. Every torsor is therefore finite etale and surjective over any $T$, with no Noetherian hypothesis. Base change preserves its torsor kernel-pair isomorphism, so the stated fibred category exists. [F1, F2, given]

2.1 $BG$ is a stack in groupoids. For a compatible family of torsors on any fppf covering, work over an affine target open and choose a finite affine refinement of that covering by the open-image argument of [F2]. The underlying finite-etale covers descend effectively by [F1] and step 1.1. Their action maps and the inverse of the torsor kernel-pair isomorphism descend by morphism descent in [F1]; their identities hold because they do after pullback. Surjectivity is detected on the cover, so the descended scheme is a torsor. Equivariant morphisms descend uniquely for the same reason, and uniqueness glues these constructions over target affine opens. This proves both effective object descent and the sheaf condition for morphisms, hence $BG$ is a stack. [F1, F2, step 1.1]

3.1 Diagonal and presentation. For two torsors $P,Q$ over $T$, the finite etale surjective cover $P\times_TQ\to T$ trivializes both by step 1.1. The sheaf of equivariant isomorphisms becomes $G$ on this cover, with transitions induced by the two trivializations. Its cocycle is canonical, so [F1] represents this Isom sheaf by a finite etale $T$-scheme; this is precisely the base change of the diagonal of $BG$. The trivial torsor supplies $\operatorname{Spec}k\to BG$. Its base change along a torsor $P/T$ is $P$ itself: an equivariant map $G_{T'}\to P_{T'}$ is uniquely determined by the image of the identity. Thus the base change is finite etale and surjective, hence smooth and surjective. These representable base changes establish a scheme presentation and representable diagonal, so $BG$ is algebraic by [F3]. This checks arbitrary schemes $T$, including schemes with nontrivial torsors, rather than asserting that all global trivializations exist. [F1, F3, step 1.1, step 2.1]

4.1 Automorphisms and inertia. For the trivial torsor $G_T$ over $T$, every automorphism of right torsors is left multiplication by an element of $G$: if $\varphi\colon G_T\to G_T$ satisfies $\varphi(pg)=\varphi(p)g$, then $\varphi(p)=\varphi(1)p$ for a locally constant $\varphi(1)\in G(T)$, and conversely every such left multiplication is an automorphism. Hence the automorphism sheaf of the trivial torsor is $G_T$ by left multiplication. If $G$ is abelian, then also every automorphism of an arbitrary torsor $P$ is right translation by a section of $G_T$: an automorphism is $\varphi(p)=p\cdot g(p)$ with $g(ph)=h^{-1}g(p)h=g(p)$ by commutativity, so $g$ descends along the fppf map $P\to T$ to a section of $G_T$ by [F1]. Consequently, for abelian $G$ the inertia stack satisfies $\mathcal I_{BG}\cong G_k\times_kBG$, and over the trivial torsor in $BG(\operatorname{Spec}k)$ the inertia objects are exactly the pairs $(\text{trivial torsor},g)$ with $g\in G$; for nonabelian $G$ the automorphism sheaf of an arbitrary torsor is only a form of $G$, and the stronger product description is asserted only when $G$ is abelian, as in the trivial-torsor case. [F1, F2, step 3.1] ∎
