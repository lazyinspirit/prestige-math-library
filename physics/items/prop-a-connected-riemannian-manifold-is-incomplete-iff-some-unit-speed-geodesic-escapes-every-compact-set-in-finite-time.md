---
id: "prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time"
kind: "proposition"
title: "Incompleteness is finite-time geodesic escape"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-complete-metric-space","def-geodesically-complete-riemannian-manifold","thm-hopf-rinow","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","prop-affine-reparametrization-of-a-geodesic-is-a-geodesic","lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset","lem-coordinate-balls-form-a-basis-of-a-topological-manifold","def-induced-tangent-bundle-chart","lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric","cor-heine-borel-in-the-product-topology","thm-compactness-under-continuous-maps","thm-closed-subspace-of-a-compact-space-is-compact"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1 and proof, printed pp.106--107
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "normalize a finite maximal geodesic and compactify unit velocities over compact base sets"
---

## Statement

Assume $\mathrm{AC}_\omega$, and let $(M,g)$ be a connected boundaryless
Riemannian manifold. Then the metric space $(M,d_g)$ is incomplete if and only
if there is a unit-speed maximal geodesic
$\gamma:I=(a,b)\to M$ with a finite endpoint which escapes every compact
subset of $M$ toward that endpoint. Precisely, either

- $b<\infty$ and for every compact $K\subseteq M$ there is $t_K<b$ such that
  $\gamma(t)\notin K$ for every $t_K<t<b$, or
- $a> -\infty$ and for every compact $K\subseteq M$ there is $t_K>a$ such that
  $\gamma(t)\notin K$ for every $a<t<t_K$.

The empty connected manifold is allowed: its metric is complete and it has no
such geodesic, so both sides are false.

## Facts & Assumptions

**Given:** The connected boundaryless Riemannian manifold in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention.

[F1] [[def-complete-metric-space]] defines completeness by convergence of every Cauchy sequence. Under [A1], [[thm-hopf-rinow]] identifies metric and geodesic completeness on a nonempty connected boundaryless Riemannian manifold, while [[def-geodesically-complete-riemannian-manifold]] expresses failure of the latter by an initial vector whose maximal geodesic domain is not $\mathbb R$.

[F2] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies the unique maximal open interval for every initial vector. Zero initial velocity has the constant global geodesic.

[F3] [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] makes a geodesic's speed constant, and [[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]] gives the exact speed change under an affine rescaling.

[F4] Under [A1], [[lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset]] says that the velocity lift of a maximal geodesic eventually leaves every compact subset of $TM$ along a tail approaching either finite endpoint.

[F5] [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]] supplies coordinate balls with compact closures. In the induced chart of [[def-induced-tangent-bundle-chart]], [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]] uniformly compares the metric norm and Euclidean fibre norm over a compact coordinate set.

[F6] [[cor-heine-borel-in-the-product-topology]] identifies closed bounded subsets of positive-dimensional Euclidean space as compact; [[thm-compactness-under-continuous-maps]] preserves compactness under chart maps, and [[thm-closed-subspace-of-a-compact-space-is-compact]] supplies both closed-subset compactness and finite-union compactness.

## Proof

**Proof technique:** normalize a finite maximal geodesic and compactify unit velocities over compact base sets.

1.1 Suppose $(M,d_g)$ is incomplete. Then $M$ is nonempty, since the empty metric space has no Cauchy sequence failing to converge by [F1]. By [F1], $M$ is not geodesically complete, so [F2] gives an initial vector whose maximal geodesic $\eta:(\alpha,\beta)\to M$ does not have domain $\mathbb R$. Because this is an open interval containing zero, at least one of $\alpha> -\infty$ and $\beta<\infty$ holds. [F1, F2]

1.2 We next prove the compactness fact needed to turn velocity escape into base escape. For a compact $K\subseteq M$, put $$ S_K=\{v\in TM:\pi(v)\in K,\ |v|_g=1\}. $$ If $K=\varnothing$ or $\dim M=0$, this set is empty and compact. Suppose $K\ne\varnothing$ and $n=\dim M>0$. Cover $K$ by coordinate balls $B$ whose compact closures lie in coordinate domains, using [F5], and take a finite subcover $B_0,\ldots,B_m$. Put $C_j=K\cap\overline{B_j}$. It is a compact subset by [F6], and the $C_j$ cover $K$. [F5, F6]

1.3 Fix $j$. In the induced tangent chart over the coordinate domain containing $C_j$, the part $S_j$ of $S_K$ over $C_j$ is $$ \widetilde x(S_j)= \{(x,u):x\in x(C_j),\ u^TG(x)u=1\}. $$ The set $x(C_j)$ is compact by [F6], hence closed and bounded by Euclidean Heine--Borel. By [F5] there is $c_j>0$ with $u^TG(x)u\ge c_j|u|^2$ over $C_j$, so every displayed $u$ satisfies $|u|\le c_j^{-1/2}$. The displayed set is closed because $x(C_j)$ is closed and $(x,u)\mapsto u^TG(x)u$ is continuous. It is therefore closed and bounded in $\mathbb R^{2n}$ and compact by [F6]. The inverse tangent chart is continuous, so [F6] makes $S_j$ compact in $TM$. [F5, F6]

1.4 Conversely, suppose a unit-speed maximal geodesic with either stated finite endpoint exists. Its maximal interval is not $\mathbb R$, so [F1] and [F2] show that $M$ is not geodesically complete. Its existence makes $M$ nonempty; hence Hopf--Rinow in [F1] gives that $(M,d_g)$ is not complete. The escape condition is stronger than needed for this implication. [F1, F2, given]

2.1 By [F3], $|\eta'|=c$ is constant. It has $c>0$: if $c=0$, its initial velocity is zero and [F2] would make the maximal geodesic constant on $\mathbb R$. Define $$ J=c(\alpha,\beta),\qquad \gamma(s)=\eta(s/c)\quad(s\in J). $$ Then [F3] gives $|\gamma'|=1$. It is maximal, since an extension of $\gamma$ would compose with $t\mapsto ct$ to extend $\eta$; and the corresponding endpoint $c\alpha$ or $c\beta$ is finite. [F2, F3, step 1.1]

2.2 The equality $S_K=S_0\cup\cdots\cup S_m$ and finite-union clause of [F6] now make $S_K$ compact. This proof selected only a finite subcover and finitely many comparison constants, and therefore used no choice axiom. [F6, step 1.2, step 1.3]

3.1 Let $e$ be the finite endpoint of $J$ obtained in step 2.1. By [F4], the velocity lift $z(s)=(\gamma(s),\gamma'(s))$ eventually leaves the compact set $S_K$ along the tail toward $e$. Since $\gamma$ has unit speed, $z(s)\in S_K$ whenever $\gamma(s)\in K$. Therefore $\gamma$ eventually leaves $K$ along that tail. The compact set $K$ was arbitrary, so the required escaping geodesic exists. [F4, step 2.1, step 2.2]

4.1 If $M=\varnothing$, every Cauchy sequence condition is vacuous and no geodesic exists, as stated. A nonempty connected zero-manifold is a point and is complete, so the two failure conditions are again both false. Dimension one is covered by the $n>0$ compactness calculation. The normalization divides only by the proved positive speed; unit speed excludes the zero vector. Both finite endpoint directions are retained rather than silently reversing time, and step 3.1 proves the full eventual-tail quantifier for each compact set, not merely the existence of a sequence leaving it. Assumption [A1] is used exactly through [F1], [F2] and [F4]; steps 1.2, 1.3 and 2.2 are choice-free. [A1, F1, F2, F4, step 2.1, step 1.2, step 1.3, step 2.2, step 3.1, step 1.4] ∎

## Source locator

Andrews, Theorem 11.5.1 and the proof of metric completeness implying global geodesics, printed pp.106--107, supply the finite-endpoint unit-speed normalization context. The compact unit-velocity bundle argument and the exact eventual escape conclusion are proved locally from [F4]--[F6].
