---
dependency_level: 1
id: lem-berkovich-projective-line-compactness-and-classical-density
kind: lemma
title: "Compactness and classical-point density of the Berkovich projective line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-berkovich-projective-line-by-polynomial-seminorms
  - thm-tychonoff
  - lem-closed-interval-compactness-from-completeness
  - thm-a-compact-hausdorff-space-is-regular-and-normal
  - thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §1 and §2, closed-disc topological model"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. For every complete algebraically closed nontrivially nonarchimedean valued field $L$, the polynomial-seminorm construction of the Berkovich projective line is a nonempty compact Hausdorff space. Each of its two closed-unit-disc charts embeds as a closed subspace. The classical projective line $\mathbb P^1(L)$ is a dense subspace, and its induced topology is its usual absolute-value topology in the two affine coordinates. No countability, metrizability, residue-characteristic, or spherical-completeness hypothesis is imposed.

## Statement references

[[def-axiom-of-choice]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

## Facts & Assumptions

**Given:** The Axiom of Choice and the valued field in the statement. For $f(T)=\sum a_iT^i$ write $\|f\|_G=\max_i|a_i|$, with $\|0\|_G=0$.

[F1] $D_L$ is the space of multiplicative nonarchimedean polynomial seminorms extending the absolute value and satisfying $x(T)\le1$, with the pointwise topology; the projective line is the specified two-chart quotient. ([[def-berkovich-projective-line-by-polynomial-seminorms]])

[F2] Assuming Choice, an arbitrary product of compact spaces is compact; closed bounded real intervals are compact. ([[thm-tychonoff]], [[lem-closed-interval-compactness-from-completeness]])

[F3] A compact Hausdorff space is normal, and compact subsets of a Hausdorff space are closed. ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]])

[A1] Full Choice is used for the polynomial-indexed compact product in step 1.1. ([[def-axiom-of-choice]])

## Proof

1.1 Every $x\in D_L$ has $x(f)\le\|f\|_G$, by applying its strong triangle inequality to the monomials and using $x(T)\le1$. Thus $D_L$ is a subspace of $X=\prod_{f\in L[T]}[0,\|f\|_G]$. The factors with zero endpoint are singletons; the others are compact by [F2], so $X$ is compact by [F2] and [A1]. It is Hausdorff because distinct elements differ at a real coordinate, where disjoint neighborhoods pull back to disjoint product neighborhoods. Every defining equality and inequality of [F1] specifies a closed subset of $X$, since real addition, multiplication and maximum are continuous. Their intersection is exactly $D_L$. A closed subspace of a compact space is compact, by adding its open complement to any covering, and inherits Hausdorffness. Evaluation at $0$ shows nonemptiness. [F1, F2, A1, algebra]

1.2 The circle $E=\{x:x(T)=1\}$ is closed in $D_L$. On it the Laurent extension $x(T^{-m}f)=x(f)$ is well defined: multiplying numerator and denominator by powers of $T$ does not change the value. For a polynomial $f$ of degree $n$, its inverted evaluation is $x(T^nf(T^{-1}))$, a polynomial-coordinate function, so $\iota:E\to E$ is continuous. Inverting twice is the identity, making $\iota$ a homeomorphism. The relation on $Y=D_T\sqcup D_U$ is the union of the diagonal and the two graphs of this homeomorphism. These are closed: $E$ is compact and its graph is a compact subset of the Hausdorff product $Y^2$. Thus the relation is closed in compact Hausdorff $Y$. [F1, F3, step 1.1, algebra]

1.3 For completeness, the quotient by this relation is Hausdorff. For any closed $C\subset Y$, its saturation is the projection of the closed subset of $Y^2$ consisting of related pairs with second coordinate in $C$. This subset is compact and its projection is compact, hence closed by [F3]; projection preserves compactness by pulling back open covers. Distinct equivalence classes are disjoint closed subsets of $Y$ and have disjoint open neighborhoods $V,W$ by [F3]. The saturated open sets $Y\setminus\operatorname{sat}(Y\setminus V)$ and $Y\setminus\operatorname{sat}(Y\setminus W)$ contain the respective classes and remain disjoint. Their quotient images separate the two points. The quotient is compact as a continuous image of compact $Y$. Its restriction to either chart is injective, and a continuous injection from a compact space into a Hausdorff space is a closed embedding, again by [F3]. [F1, F3, step 1.2, algebra]

2.1 Classical points are dense in $D_L$. To see this, fix $x\in D_L$ and finitely many polynomial-coordinate conditions. Factor the nonzero nonconstant polynomials over $L$, and list their finitely many roots. Roots $a$ with $|a|>1$ satisfy $x(T-a)=|a|$, by the strong inequality in both directions, and have the same value at every classical point of the unit disc. If there are no other roots, evaluation at $0$ already matches all the specified values. Otherwise list the remaining roots $a_1,\ldots,a_m$ with $|a_i|\le1$, and set $s_i=x(T-a_i)$. Choose $a_0$ attaining $r=\min_i s_i$. The strong inequality gives
$$s_i=\max(r,|a_i-a_0|).$$
Indeed when $|a_i-a_0|>r$ the two-term strong inequality is an equality; when it is at most $r$, the upper bound is $r$ and minimality supplies the lower bound. [F1, algebra]

2.2 If $r=0$, evaluation at $a_0$ matches all values in step 2.1. If $0<r<1$, the value group of $L$ is dense in $\mathbb R_{>0}$: take a nonunit $b$ with $|b|\ne1$, and all its rational powers using roots in $L$; their logarithms are a nonzero real multiple of $\mathbb Q$. Choose values $\rho>r$ tending to $r$, with $\rho\le1$ and smaller than every one of the finitely many $s_i>r$. For $c$ with $|c|=\rho$, evaluation at $t=a_0+c$ has $|t-a_i|=\rho$ if $s_i=r$, and $|t-a_i|=s_i$ otherwise. These converge to all the required linear values, so products converge to the required polynomial values. [step 2.1, algebra]

2.3 If $r=1$, all the $s_i$ equal $1$. The residue field of $L$ is infinite. In fact it is algebraically closed: lift any monic residue polynomial to an integral monic polynomial over $L$, whose roots are integral because a root of modulus $>1$ would make the leading term strictly dominant; reduce its factorization into linear factors. An algebraically closed field is infinite, since for any finite list $b_1,\ldots,b_m$ the polynomial $1+\prod_i(T-b_i)$ has no root in that list. Hence choose an integral $t$ whose residue differs from every residue of the $a_i$. Then $|t-a_i|=1$ for all $i$, matching all the specified values. Together steps 2.1–2.3 prove that every finite-coordinate neighborhood of $x$ meets the classical unit disc. [step 2.1, algebra]

3.1 The quotient of the two discs therefore has dense classical points: every nonempty quotient-open set has a nonempty open preimage in at least one chart, which meets its classical disc by steps 2.1–2.3. On each classical chart, polynomial evaluation is continuous in the absolute-value topology, and balls $|T-a|<\eta$ are polynomial-coordinate open sets. Globally a ball $|T-a|<\eta<1$ about $|a|=1$ has polynomial-open preimages $x(T-a)<\eta$ and $y(1-aU)<\eta$ in the two charts; these inequalities themselves force the representative to lie on its circle. at infinity use $|U|<\eta<1$. At a finite point of modulus less than $1$, choose a smaller ball contained in that region; the other chart has empty preimage. Thus the induced topology contains the usual projective-line topology. Conversely, each coordinate evaluation is continuous on its classical closed unit disc, and these two discs give a finite closed cover of the usual classical projective line. The piecewise continuous map to the quotient is consequently continuous, because inverse images of closed sets are closed on both pieces and their finite union is closed. This proves equality of the two topologies. [F1, step 1.3, step 2.1, step 2.2, step 2.3, algebra] ∎
