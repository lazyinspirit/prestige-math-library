---
id: lem-local-c-one-volume-distortion
kind: lemma
title: "On a small cube, a $C^1$ diffeomorphism distorts Jordan content by factors arbitrarily close to its linearized absolute determinant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jacobian-determinant-of-a-c-one-map, thm-linear-images-scale-jordan-content-by-absolute-determinant, lem-near-identity-c-one-maps-sandwich-cubes, def-jordan-inner-and-outer-content, thm-mean-value-inequality-for-total-derivatives, thm-euclidean-inverse-function-theorem, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-jordan-boundary-criterion, cor-jordan-content-finite-additivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: reduction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 5.5.6 and Theorem 5.5.7"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $g:U\to\mathbb R^n$ be $C^1$ on an open set, let $a\in U$, and suppose $A=Dg(a)$ is invertible. For every $0<\varepsilon<1$ there is a closed cube $Q$ centred at $a$, of positive radius and contained in $U$, such that every Jordan set $E\subseteq Q$ has Jordan image and
$$|\det Dg(a)|(1-\varepsilon)^n\operatorname{cont}(E)\le \operatorname{cont}(g(E))\le |\det Dg(a)|(1+\varepsilon)^n\operatorname{cont}(E).$$
The cube may be chosen inside any prescribed neighborhood of $a$.

## Facts & Assumptions

**Given:** The $C^1$ map, the point $a$, invertible $A=Dg(a)$, and $0<\varepsilon<1$.

[L1] A linear endomorphism maps Jordan sets to Jordan sets and scales content by its absolute determinant ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L2] A map whose derivative is uniformly close enough to the identity sandwiches each sufficiently small cube between concentric contracted and expanded cubes ([[lem-near-identity-c-one-maps-sandwich-cubes]]).

[L3] Jordan inner and outer content approximate Jordan sets by finite rectangular figures ([[def-jordan-inner-and-outer-content]]).

[L4] A derivative bound on a convex open set gives a Lipschitz bound ([[thm-mean-value-inequality-for-total-derivatives]]); an everywhere-invertible derivative gives local $C^1$ inverses ([[thm-euclidean-inverse-function-theorem]]); Lipschitz self-maps preserve null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]); and bounded sets are Jordan exactly when their boundaries are null ([[thm-jordan-boundary-criterion]]).

[L5] Jordan content is finitely additive across Jordan pieces whose overlaps have content zero ([[cor-jordan-content-finite-additivity]]).

## Proof

**Proof technique:** reduction.

1.1 Normalize at $a$ by the affine map $$H(x)=a+A^{-1}(g(x)-g(a)).$$ Choose $0<q<\varepsilon$ and a slightly larger cube inside $U$ on which $\|D H-I\|_{2\to2}\le q/\sqrt n$. The mean-value bound in [L4] makes $H-I$ a $q$-contraction in the sup norm, so $H$ is injective and bi-Lipschitz there. The derivative bound also makes every $DH$ invertible; the inverse function theorem in [L4] therefore makes $H$ a homeomorphism on a neighborhood of the smaller positive-radius cube $Q$. Here $H(a)=a$ and $DH(a)=I$; continuity of $Dg$ permits the stated choice inside any prescribed neighborhood. [L4, given]

2.1 If $E\subseteq Q$ is Jordan, the homeomorphism in step 1.1 gives $\partial H(E)=H(\partial E)$. Compose $H$ on the larger cube with coordinatewise clamping onto that cube to obtain a global Lipschitz map. Since $\partial E$ is null, [L4] makes $H(\partial E)$ null and hence makes $H(E)$ Jordan. [L4, step 1.1]

3.1 Refine inner and outer figures from [L3] into finite unions of sufficiently small, interior-disjoint cubes $P\subseteq E\subseteq R$ with arbitrarily small content gap. After translating at each cube centre, [L2] sandwiches its $H$-image between cubes with factors $(1-q)^n$ and $(1+q)^n$. Step 2.1 makes those images Jordan, injectivity makes their interiors disjoint, and [L5] adds their contents. Letting the figure gap vanish gives the stronger bounds with $q$; since $q<\varepsilon$, these imply the displayed bounds for $H(E)$. Finally $g(E)=g(a)+A(H(E)-a)$, so [L1] multiplies every content by $|\det A|=|\det Dg(a)|$. [L1, L2, L3, L5, step 1.1, step 2.1] ∎
