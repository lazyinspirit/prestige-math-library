---
id: lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications
kind: lemma
title: "Complex algebraic morphisms admit compatible finite smooth stratifications"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-ag-standard-smooth-algebra,
       def-axiom-of-choice,
       def-classical-algebraic-prevariety-regular-maps-and-varieties,
       def-smooth-morphism-classical,
       lem-classical-variety-noetherian-components,
       lem-dimension-nonempty-open-subset,
       lem-smooth-map-tangent-surjectivity-criterion,
       thm-generic-smoothness-characteristic-zero,
       thm-holomorphic-constant-rank-theorem,
       thm-holomorphic-implicit-function-theorem,
       thm-nonempty-regular-locus-reduced-variety-perfect-field,
       thm-regular-equals-smooth-over-perfect-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Theorem 8.10 (algebraic Whitney stratifications and stratified maps)"
---

## Statement

Assume AC. Let $f:X\to Y$ be one morphism of reduced separated complex
algebraic varieties of finite type
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]), and
prescribe finitely many closed algebraic subsets of each. There are finite
partitions of $X$ and $Y$ into irreducible smooth locally closed algebraic
strata such that every prescribed subset is a union of strata, every stratum
closure is a union of strata of no larger dimension with its boundary of
strictly smaller dimension, and each source stratum maps surjectively and
smoothly onto one target stratum. On analytic spaces each such restriction is a
submersion. The source may be empty. This assertion imposes no Whitney
condition, conical control or topological triviality.

## Facts & Assumptions

**Given:** AC, one morphism $f:X\to Y$ of reduced separated complex algebraic
varieties of finite type, and finite lists of closed algebraic subsets of $X$
and of $Y$.

[F1] Classical varieties and their open, closed and locally closed subvarieties have finite affine covers and finitely many irreducible components, and their Zariski topology is Noetherian ([[lem-classical-variety-noetherian-components]]).

[F2] In an irreducible variety, a nonempty open subset is dense and has the same dimension, and every proper closed subvariety has strictly smaller dimension ([[lem-dimension-nonempty-open-subset]]).

[F3] For a reduced finite-type scheme over the perfect field $\mathbb C$ the regular locus is open and meets every irreducible component in a dense open subset; for finite-type $\mathbb C$-schemes regularity is equivalent to smoothness over $\mathbb C$ in the locally standard smooth sense ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[def-smooth-morphism-classical]], [[def-ag-standard-smooth-algebra]]).

[F4] Let $X,Y$ be irreducible classical varieties over an algebraically closed field of characteristic $0$ with $X$ smooth, and let $g:X\to Y$ be a morphism. There is a dense open $U\subseteq Y$ such that $g^{-1}(U)\to U$ is a smooth morphism; and if $g$ is dominant, there is a nonempty open $V\subseteq U$ over whose closed points the fibres of $g$ are nonempty and smooth of pure dimension $\dim X-\dim Y$ ([[thm-generic-smoothness-characteristic-zero]]).

[F5] A morphism of smooth classical complex varieties is smooth at a closed point exactly when its differential is surjective there ([[lem-smooth-map-tangent-surjectivity-criterion]]). A locally standard smooth presentation of a smooth complex variety near a point has defining equations with an invertible Jacobian minor, so the holomorphic implicit function theorem exhibits holomorphic charts of the stratum near the point ([[thm-holomorphic-implicit-function-theorem]], [[def-ag-standard-smooth-algebra]]); a holomorphic map of full rank onto its target has locally constant rank near the point and the holomorphic constant rank theorem exhibits it locally as a linear projection ([[thm-holomorphic-constant-rank-theorem]]).

[A1] AC is inherited from the suppliers above; it is used only through the regular-locus, generic-smoothness and tangent-space suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We record a partition construction. Let $Z$ be a reduced separated complex algebraic variety of finite type and let $\mathcal C$ be a finite list of closed subsets of $Z$. There is a finite partition of $Z$ into irreducible smooth locally closed strata such that every member of $\mathcal C$ is a union of strata and every stratum is open dense in its own irreducible closure. If $Z=\varnothing$ take the empty partition. Otherwise let $Z_1,\ldots,Z_m$ be the irreducible components of $Z$, finitely many by [F1]. Remove from $Z_i$ its nonsmooth locus, the other components $Z_j$, and every $C\cap Z_i$ with $C\in\mathcal C$ and $C\nsupseteq Z_i$. Each removed set is closed, and each is proper in the irreducible $Z_i$; by [F3] and [F2] the nonsmooth locus has smaller dimension, and by [F2] the other removed sets do too, so the result $U_i$ is a nonempty dense open subset of $Z_i$ and is contained in or disjoint from every $C\in\mathcal C$. The $U_i$ are pairwise disjoint and open in $Z$, because their complement is the finite union of the removed closed sets and the sets $Z_j$ with $j\ne i$. The remainder $Z':=Z\setminus\bigcup_iU_i$ is closed and meets each $Z_i$ in a proper closed subset, so $\dim Z'<\dim Z$ by [F2]. Partition $Z'$ by the same construction with $\mathcal C$ replaced by the restrictions of all members of $\mathcal C$ and of all $Z_i$ to $Z'$, and iterate. The dimension of the remainder strictly decreases at every round, so the recursion terminates; because each round respects the restricted lists, every member of $\mathcal C$ is a union of strata and every stratum is open dense in its irreducible closure. [F1, F2, F3, A1, construct]

2.1 Now construct the target strata in rounds on a closed residual subvariety $R\subseteq Y$, starting with $R=Y$; at each stage keep finite lists of prescribed closed subsets of $R$ and of $f^{-1}(R)$, initially the given lists and later those lists enlarged by the restrictions of the closures of all previously emitted strata. Apply step 1.1 to $f^{-1}(R)$ with the maintained source list, obtaining a finite partition into irreducible smooth locally closed strata $Z_\alpha$. Fix an irreducible component $R_i$ of $R$ and remove from it its nonsmooth locus, the other components of $R$, and every maintained target prescribed closed subset not containing $R_i$; by [F1] this leaves a nonempty dense open subset $V_i^0\subseteq R_i$. For each $\alpha$ the image $f(Z_\alpha)$ is irreducible and lies in a component of $R$, so its closure in $R$ is an irreducible closed subset of some component. If that closure is not $R_i$, then its intersection with $R_i$ is a proper closed subset, and we remove it from $V_i^0$; if the closure equals $R_i$, then $f|_{Z_\alpha}$ is dominant, $Z_\alpha$ is smooth and irreducible, and [F4] supplies a dense open subset of $R_i$ over which $Z_\alpha\to R_i$ is smooth, with nonempty fibres over the closed points after shrinking to lie in the image. There are finitely many $\alpha$, so intersecting $V_i^0$ with all these dense opens (and with the images) produces a nonempty dense open $V_i\subseteq R_i$ such that every $Z_\alpha$ whose image closure is not $R_i$ has no point over $V_i$, while every $Z_\alpha$ whose image closure is $R_i$ maps smoothly and onto $V_i$. [F1, F2, F3, F4, step 1.1, construct]

3.1 Emit the target strata $V_i$ of this round and, for every $\alpha$ whose $Z_\alpha$ maps onto $R_i$, the source stratum $S_{\alpha,i}:=Z_\alpha\cap f^{-1}(V_i)$, which is nonempty. It is open in $Z_\alpha$ because $V_i$ is open in $R_i$ and $Z_\alpha\subseteq f^{-1}(R_i)$, hence it is an irreducible smooth locally closed subvariety of $X$, and it maps smoothly and onto $V_i$ as the restriction of the map of step 2.1. Every source point over $V_i$ lies in exactly one such stratum, because the $Z_\alpha$ partition $f^{-1}(R)$ and each $Z_\alpha$ is contained in or disjoint from $f^{-1}(V_i)$. Within the round, closures behave as in step 1.1: the closure of $S_{\alpha,i}$ meets $f^{-1}(V_i)$ in the union of the strata $S_{\beta,i}$ with $Z_\beta\subseteq\overline{Z_\alpha}$, since $f^{-1}(V_i)$ is open in the closed set $f^{-1}(R_i)$. [F1, step 1.1, step 2.1]

4.1 Put $R':=R\setminus\bigcup_iV_i$; it is closed and has $\dim R'<\dim R$ by [F2], since each component of $R$ lost a dense open subset. Enlarge both lists by the closures of the emitted strata, restrict to $R'$ and $f^{-1}(R')$, and repeat steps 2.1 and 3.1. The target dimension strictly decreases each round, so after finitely many rounds the emitted strata partition $Y$ and $X$. Every emitted stratum $S$ is open dense in its irreducible closure: this holds within each round by step 3.1, because the pieces of the frontier partition whose closures contain $S$ are contained in $\overline S$ and dense in it; and the maintained lists, which contain the closure of $S$ in every later round, force every later stratum to be contained in or disjoint from $\overline S$. Consequently $\overline S$ is a union of strata, and every stratum $P\subseteq\overline S\setminus S$ has $\dim P<\dim S$: indeed $\overline P$ is an irreducible closed subset of $\overline S$ with $\dim\overline P\le\dim S$, equality would give $\overline P=\overline S$, and then $P$ and $S$, being dense opens of the irreducible $\overline P=\overline S$, would meet, contradicting disjointness of strata. Thus every stratum closure is a union of strata of no larger dimension and its boundary has strictly smaller dimension. Every prescribed subset is a union of strata by the invariance maintained in steps 1.1 and 2.1, and the empty source contributes no source strata. [F1, F2, step 2.1, step 3.1, construct]

5.1 Finally let $S\to T$ be one emitted restriction onto a target stratum. The stratum $S$ is a smooth complex variety by construction, so by [F3] it is locally standard smooth over $\mathbb C$; the defining equations of a standard smooth presentation near a point have an invertible Jacobian minor, and [F5] turns them into holomorphic charts of $S$ near that point, with holomorphic transition maps. Similarly $T$ carries holomorphic charts. The map $S\to T$ is a morphism of classical varieties, so in these charts its components are restrictions of regular functions on affine charts, hence polynomial in the ambient coordinates and therefore holomorphic in the chart parameters. At every point the differential of $S\to T$ is surjective by the smoothness of the restriction and the criterion of [F5]; since surjectivity onto a target of dimension $n$ is the nonvanishing of some $n\times n$ minor, the rank stays full on a neighbourhood, and the holomorphic constant rank theorem exhibits the map near each point as a linear projection in suitable holomorphic coordinates. Hence the restriction is a submersion of complex manifolds, in particular a submersion of the underlying real smooth manifolds. No properness or topological triviality is used, and AC is inherited exactly through the cited suppliers. [F3, F5, A1, step 3.1, step 4.1] ∎

## Scope note

Whitney regularity is a separate additional input: this lemma only produces
smooth frontier partitions compatible with the prescribed closed subsets and
the morphism. A single stratification reused on repeated objects of a finite
cyclic diagram with prescribed supports may require infinitely many strata, so
the lemma deliberately treats one morphism $f$ and finitely many prescribed
sets, not an unrestricted diagram contract.
