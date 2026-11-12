---
id: lem-author-5bfbe3ebf14f-finite-coproduct-sieve-refinement
kind: lemma
title: Finite coproducts and refinement inside a sieve
status: published
domain: mathematics
deps:
  - lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition
  - lem-author-5bfbe3ebf14f-finite-generated-topology-basis
  - def-nisnevich-covering-interface
  - def-cdh-topology-interface
  - math:def-affine-open-subscheme
  - math:def-open-immersion-schemes
  - math:def-closed-immersion-schemes
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
dependency_roles:
  lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition: mathematical-premise
  lem-author-5bfbe3ebf14f-finite-generated-topology-basis: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-cdh-topology-interface: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition
  - lem-author-5bfbe3ebf14f-finite-generated-topology-basis
  - def-nisnevich-covering-interface
  - def-cdh-topology-interface
  - math:def-affine-open-subscheme
  - math:def-open-immersion-schemes
  - math:def-closed-immersion-schemes
  - math:def-etale-morphism-schemes
argument_deps:
  - lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition
  - lem-author-5bfbe3ebf14f-finite-generated-topology-basis
  - def-nisnevich-covering-interface
  - def-cdh-topology-interface
  - math:def-affine-open-subscheme
  - math:def-open-immersion-schemes
  - math:def-closed-immersion-schemes
  - math:ex-localization-etale-open-immersion
  - math:def-etale-morphism-schemes
---

## Statement
Fix a field $k$ and the cdh site of separated schemes of finite type over $k$, with $k$-scheme morphisms. All schemes and maps below, including any supplied refinement and its comparison map, are in this site. Let $S$ be a cdh covering sieve on $X$ and let $\{u_i:U_i\to X\}_{i=1}^m$ be a $B$-family in $S$. Here $B$ consists of finite families obtained by finitely many substitutions of finite Nisnevich families and singleton cdp morphisms, including identities and the empty family over the empty scheme. A covering morphism means a morphism whose singleton family is covering. Its coproduct $u:W=\coprod_iU_i\to X$ is a cdh covering morphism, and admits a finite word factorization into Nisnevich covering morphisms and cdp morphisms. No assertion that $u\in S$ is made. If a two-stage refinement of $u$ is supplied,
$$V\xrightarrow{q}X'\xrightarrow{p}X,\quad h:V\to W,\quad pq=uh,$$
with $q$ Nisnevich and $p$ cdp, then $V_i=h^{-1}(U_i)$, with their open subscheme structures, are finitely many open-and-closed subschemes of $V$, themselves separated of finite type over $k$. The family $\{V_i\to X'\}$ is a finite Nisnevich family, and every composite $V_i\to X$ is in $S$.

## Facts & Assumptions
**Given:** The field, finite-type cdh site, covering sieve and finite $B$-family in the Statement, and only for the last assertion the displayed refinement as an explicit premise in that same site.

**Goal:** Make the cover morphism available for a source refinement theorem while keeping final arrows inside $S$.

[F1] [[lem-author-5bfbe3ebf14f-finite-generated-topology-basis]] supplies the finite generating tree and the criterion that a sieve containing a $B$-family is cdh covering. [[lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition]] supplies identities and the closure rules, including the two finite disjoint-union rules for Nisnevich and cdp morphisms.

[F2] [[def-cdh-topology-interface]] fixes the field, category, cdp condition and cdh covering-sieve conventions, and represents closed subschemes and finite disjoint unions in that category. Its Justification constructs the coproduct with its componentwise structure sheaf and mapping property. Its summands are open and closed and have their original local rings. A sieve is closed under precomposition, not under coproducts.

[F3] An open subscheme has the restricted structure sheaf, and an open immersion identifies its source with such a subscheme. A closed immersion identifies its source with a closed subset and has surjective structure-sheaf map. [[math:def-affine-open-subscheme]] [[math:def-open-immersion-schemes]] [[math:def-closed-immersion-schemes]] Every open immersion is étale, including the empty one. [[math:ex-localization-etale-open-immersion]]

[F4] Étaleness has its smooth-relative-dimension-zero meaning and is unchanged at a point upon restricting the source to an open neighbourhood; in particular an étale map restricted to an open source subscheme is étale. This is the germ property explicitly stated in [[math:def-etale-morphism-schemes]]. Nisnevich families are étale families supplying a residue-field-preserving lift of every target point. [[def-nisnevich-covering-interface]]

## Proof
1.1 Realize the construction of the $B$-family by a finite tree of elementary generating-family substitutions. Start with the frontier $X$. When a leaf $A$ is replaced by a generating family over it, take its source coproduct and leave all other leaves unchanged using their identities. The new frontier coproduct maps to the old one. For a Nisnevich substitution this is a Nisnevich covering morphism; for a cdp substitution it is cdp, by the finite disjoint-union rules in [F1] over the disjoint target components. All frontier schemes are in the site by [F2]. Finitely many substitutions give a finite word with final frontier $W$ and composite $u$. Each $u_i$ factors through $u$, so the sieve generated by $u$ contains the original $B$-family and is cdh covering by [F1]. Thus $u$ is cdh covering without assuming that $S$ is closed under coproducts. Identity substitutions and a tree with no substitutions give identity factors; the empty-family substitution over the empty scheme also gives its identity morphism, so the empty case is included. [given, F1, F2]

2.1 Under the stated refinement, the inverse images of the open-and-closed summands of $W$ give a finite open-and-closed decomposition $V=\coprod_iV_i$, with each $V_i$ carrying the restricted structure sheaf. The restriction of $h$ to $V_i$ factors through $U_i$: restrict its sheaf map to those open subschemes. This gives a morphism $h_i:V_i\to U_i$. The inclusion $V_i\to V$ is also a closed immersion: its image is closed, and on an open $O\subseteq V$ every section on $O\cap V_i$ extends by zero on the disjoint open $O\setminus V_i$, so its structure-sheaf map is surjective. Thus $V_i$ is a closed subscheme of the site object $V$ and belongs to the site by [F2]; in particular it remains separated of finite type over $k$. By the germ property in [F4], each restriction $q|_{V_i}:V_i\to X'$ is étale. Every point of $X'$ has a residue-preserving lift in $V$ by the Nisnevich condition on $q$; the lift lies in a summand $V_i$ with the same local ring and residue field. Hence these restrictions form a finite Nisnevich family. The equation $pq=uh$ gives $p(q|_{V_i})=u_i h_i$, so each composite $V_i\to X$ belongs to $S$ by sieve closure under precomposition. The generally invalid implication $u_i\in S$ for all $i\Rightarrow\coprod u_i\in S$ has not been used. Indeed, for two nonempty site objects $A,C$ and $X=A\amalg C$, the sieve generated by its two summand inclusions does not contain $\mathrm{id}_X$: that identity cannot factor through either proper summand. Their coproduct is $\mathrm{id}_X$, while their family is Nisnevich by [F3] and unchanged residue fields, so their sieve is covering. The split family above is the required refinement inside $S$. If $m=0$, the $B$-family has $X=W=\varnothing$; the supplied site maps force $X'=V=\varnothing$, and the same conclusions are vacuous. [given, F1, F2, F3, F4, step 1.1] ∎
