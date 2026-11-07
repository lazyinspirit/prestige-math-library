---
id: thm-abelian-sheaves-on-a-site-have-enough-injectives
kind: theorem
title: "Abelian sheaves on a set-sized site have enough injectives"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-grothendieck-category
  - cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC, as in the site and resolution interfaces used by this run. The cited site theorem itself is valid for every set-sized site; AC is not used in the mapping-cone definition that consumes this result."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Modules on Sites, Section 18.3, Lemma 18.3.1"
      url: "https://stacks.math.columbia.edu/tag/03CM"
    - title: "The Stacks Project, Injectives, Sections 19.6–19.7, Proposition 19.6.1 and Theorem 19.7.4"
      url: "https://stacks.math.columbia.edu/tag/01DL"
    - title: "The Stacks Project, Cohomology, Section 59.14, Theorem 59.14.1"
      url: "https://stacks.math.columbia.edu/tag/03NT"
verification: {}
---

## Statement

Assume the Axiom of Choice and fix a set-sized site $\mathcal C$. The category of abelian sheaves on $\mathcal C$ is abelian and has
enough injectives, and every object admits an injective resolution. If
$\mathcal C$ has a terminal object $e$, then for $\Gamma(F):=F(e)$ and any abelian sheaf $F$, the
right-derived sections groups $H^r(\mathcal C,F)=R^r\Gamma(F)$ are therefore
defined by an injective resolution of $F$.

## Statement references

[The Stacks Project, Lemma 18.3.1](https://stacks.math.columbia.edu/tag/03CM)

[The Stacks Project, Theorem 19.7.4](https://stacks.math.columbia.edu/tag/01DL)

[The Stacks Project, Theorem 59.14.1](https://stacks.math.columbia.edu/tag/03NT)

## Facts & Assumptions

**Given:** the small site in the Statement (with terminal object $e$ only for the terminal-evaluation clause), a larger universe for its sheaf category, and AC as the library's stated injective-resolution convention.

[A1] The Axiom of Choice is assumed for the injective-resolution supplier. [[def-axiom-of-choice]]

[F1] A Grothendieck category is an abelian category satisfying AB5 and possessing a generator. [[def-grothendieck-category]]

[F2] Under AC, every locally small Grothendieck category has enough injectives and every object admits an injective resolution. [[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]]

## Proof

1.1 Write $\mathcal P$ for abelian presheaves on the small category. Limits, colimits, kernels and cokernels in $\mathcal P$ are computed objectwise. For a covering sieve $R\subset h_U$, let $M_R(P)$ be the group of matching families of sections of $P$ on its arrows: a family $s_f\in P(V)$ for $f:V\to U$ in $R$, with $P(g)s_f=s_{fg}$. Define $P^+(U)$ as the colimit of $M_R(P)$ over covering sieves, ordered by refinement. This index is filtered, since the intersection of finitely many covering sieves is covering. The site pullback axiom defines restriction. Two classes are equal precisely when their families agree on a covering refinement. Thus a class that is zero locally is zero: choose covering refinements witnessing local zero and use the local-transitivity axiom to obtain one covering sieve of $U$. This proves that $P^+$ is separated. If $P$ is separated, a matching family of $P^+$-classes on a covering sieve can be represented by $P$-families on covering refinements of its arrows; compatibility on overlaps is equality of actual $P$-sections because $P$ is separated. Composing those refinements gives a matching $P$-family on a covering sieve of $U$, whose class glues the original family uniquely. Hence $aP:=P^{++}$ is a sheaf. Sending a matching family to its gluing in a sheaf $F$ gives, uniquely, $\operatorname{Hom}(aP,F)=\operatorname{Hom}(P,F)$. This constructs sheafification and its adjunction on the given site, without assuming points exist. [given, construct, algebra]

2.1 Each functor $M_R$ preserves limits, since matching families are an equalizer of products of groups. Filtered colimits of abelian groups commute with finite limits: an element or a relation in a finite product or a kernel involves finitely many representatives, and filteredness places them and all required equalities at one later stage. The same representative argument shows filtered colimits of groups preserve exact sequences. Consequently $P\mapsto P^+$, and hence $a$, preserves finite limits. By its adjunction, $a$ preserves colimits into the sheaf category. Kernels of sheaf maps are presheaf kernels and cokernels are sheafified presheaf cokernels. The canonical presheaf coimage-to-image isomorphism therefore becomes the sheaf coimage-to-image isomorphism after applying $a$, using its preservation of kernels and cokernels. Thus abelian sheaves form an abelian category and $a$ is exact. All small sheaf colimits exist and are the sheafifications of presheaf colimits. [step 1.1, algebra]

3.1 For a small filtered diagram of sheaves, its colimit is the composite of inclusion into $\mathcal P$, objectwise filtered colimit, and $a$. Inclusion preserves finite limits, objectwise filtered colimit preserves finite limits by step 2.1, and $a$ preserves finite limits by that same step. The sheaf colimit functor is therefore left exact. It is also a left adjoint to the constant-diagram functor, so it preserves cokernels and is right exact. Hence it is exact. This proves AB5 without the false assertion that a sheaf epimorphism is surjective on sections. [step 1.1, step 2.1, algebra]

4.1 For each object $U$ let $G_U=a(\mathbb Z[h_U])$, the sheafification of the free abelian presheaf on $h_U$. The free-presheaf property, Yoneda evaluation and the adjunction give $\operatorname{Hom}(G_U,F)=F(U)$. The set-indexed sum $G=\bigoplus_U G_U$ exists by step 2.1. Distinct maps $v,w:F\to F'$ differ on a section over some object $U$; its map $G_U\to F$ extends by zero on the other summands to a map $G\to F$ distinguishing $v$ and $w$. Thus $G$ is a generator. The category is locally small because natural transformations form a subset of the product of the sectionwise Hom sets indexed by the small object set. With steps 2.1 and 3.1 this verifies every hypothesis of [F1]. If the site category is empty its sheaf category is the zero category and the empty coproduct is the required generator. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Apply [F2] under [A1] to the locally small Grothendieck category just obtained. Every abelian sheaf has an injective resolution. For the final clause, assume a terminal object $e$ is supplied. The global-sections functor is then $F\mapsto F(e)$. Kernels of sheaves are sectionwise kernels by step 2.1, so this functor is left exact. Its right-derived functors are therefore defined by injective resolutions. The argument applies to every small site, including a small presentation of the crystalline site; no enough-points assertion or cohomological finiteness assertion is needed. [A1, F2, step 4.1, algebra] ∎
