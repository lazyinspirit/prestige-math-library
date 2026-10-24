---
id: lem-positive-transverse-accessibility-is-a-preorder
kind: lemma
title: "Positive transverse accessibility is a preorder"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-positive-transverse-accessibility-between-leaves, def-preorder, def-equivalence-relation, cor-components-of-open-subsets-of-rn-are-polygonally-connected, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-fundamental-theorem-on-flows, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, def-countable-choice-principle-for-foliation-pair, cor-mean-value-theorem, lem-compactness-of-a-subspace-is-ambient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations, English translation by J. A. Zilber"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Definition 1.4 and Lemma 1.1, printed p. 2; mutual-accessibility component definition immediately following Lemma 1.1"
---

## Statement

Assume $\mathrm{AC}_\omega$ and use [[def-positive-transverse-accessibility-between-leaves]] for a C² cooriented foliation on a smooth manifold without boundary. If a genuine nonempty positive transverse segment joins leaves A to B, then for any x∈A and y∈B there is such a segment from x to y. This endpoint conclusion is not asserted merely from the formal A=B clause. The relation $\succeq_F$ is reflexive and transitive, hence a preorder. The relation $A\sim_F B$ defined by $A\succeq_F B$ and $B\succeq_F A$ is an equivalence relation on the set of leaves.

## Facts & Assumptions

**Given:** A C² cooriented codimension-one foliation $F$ of a smooth manifold without boundary, leaves $A,B,x\in A,y\in B$, and a genuine nonempty positive transverse segment $c:[0,1]\to M$ with $c(0)\in A$, $c(1)\in B$.

[F1] A positive transverse segment is a $C^2$ map whose transverse derivative is strictly positive in every positively signed foliated chart, and $A\succeq_F B$ means that $A=B$ or such a nonempty segment runs from $A$ to $B$ ([[def-positive-transverse-accessibility-between-leaves]]).

[F2] The connected components of an open subset of $\mathbb R^n$ are polygonally connected by finitely many straight segments ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F3] Plaque transport along a finite plaque chain and transverse fences preserve the $C^2$ regularity of the transported curves (the sibling item `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity`); this supplier is an in-run item of the sibling page and the exact use is flagged in step 1.1.

[F4] For a compact set contained in an open set there is a smooth bump equal to one near the compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F5] A smooth vector field has a smooth local flow, with derivative bounds on compact flow domains ([[thm-fundamental-theorem-on-flows]]).

[F6] Compactness of a subspace is equivalent to the finite-subcover property for ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). The additional compactness facts used here follow directly: a compact set in a Hausdorff space is closed, since for an exterior point finitely many separating neighbourhoods covering the compact set have a common neighbourhood of that point disjoint from it. A product of two compact spaces is compact: refine an open cover to rectangles, each fibre over the first factor has a finite rectangle cover, whose first-factor neighbourhoods have an open intersection. The family of all intersections arising this way covers the first factor; a finite subcover yields a finite cover of the product. No simultaneous selection of a rectangle family for every fibre is made. Iterating gives finite products. Near a compact set in a manifold, choose finitely many smaller coordinate balls with compact Euclidean closures inside the specified chart neighbourhoods; these give the compact flow domains used below.

[F7] A $C^1$ function on a segment is Lipschitz with constant the supremum of its derivative, by the mean value theorem ([[cor-mean-value-theorem]]).

[F8] A preorder is a reflexive and transitive relation ([[def-preorder]]), and an equivalence relation is a reflexive, symmetric and transitive relation ([[def-equivalence-relation]]).

[F9] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma_A$ be a $C^2$ leafwise path from $x$ to $c(0)$ inside $A$ and $\gamma_B$ a $C^2$ leafwise path from $c(1)$ to $y$ inside $B$. Such paths exist: cover each leaf by its foliated charts, whose plaques are convex and chartwise polygonally connected, use [F2] finitely many times to reach the target plaque, and smooth the finitely many corners inside plaque charts; the finite plaque transport preserves the $C^2$ regularity of the leafwise curves by [F3]. Only finitely many charts and plaques are selected. [F1, F2, F3, construct]

1.2 Near the compact union of the three curves $\gamma_A,c,\gamma_B$ construct a smooth field $X$ and a $C^1$ form $\omega$ with $\ker\omega=TF$ and $X$ positive transverse: choose finitely many smooth ambient chart bumps over that union by [F4], take in each chart a constant vector that is positive for the continuous cooriented tangent planes on a smaller neighbourhood, and sum the bumped fields; patch the local positively cooriented annihilating forms of the $C^2$ atlas in the same finite way. On a compact flow domain the smoothness of $X$ and $\omega$ gives a uniform bound $\omega(X)\ge b>0$ and, by [F5], a uniform interval $|a|\le a_0$ of the flow $\varphi_a$ on which the derivative $D\varphi_a$ is bounded; [F6] reduces the neighbourhood data to finitely many compact charts. [F4, F5, F6, construct]

2.1 For a $C^2$ leafwise path $\gamma$ near the union and a $C^2$ offset profile $a(s)$, the curve $s\mapsto\varphi_{a(s)}(\gamma(s))$ has transverse derivative $v(s,a(s))+a'(s)\omega(X)$, where $v(s,0)=\omega(\gamma'(s))=0$ because $\gamma'$ is tangent to $F$; hence $|v(s,a)|\le A|a|$ on the compact parameter set for a constant $A$ by [F7] applied to $a\mapsto v(s,a)$. With the profiles $a(s)=\delta(e^{Bs}-1)/B$ on the initial path and $a(s)=-\delta(e^{B(1-s)}-1)/B$ on the terminal path one has $a'=B|a|+\delta$, so choosing $B>A/b$ gives transverse derivative at least $b\delta+(bB-A)|a|>0$; both profiles vanish at the outer endpoints, so $\varphi_{a}\gamma_A$ starts at $x$ and $\varphi_a\gamma_B$ ends at $y$. [F7, given, step 1.2, algebra]

3.1 Along $c$ use a fixed $C^2$ profile scaled by $\delta$ that joins the positive offset at its start to the negative offset at its end; since $\min\omega(c')>0$, its perturbed transverse derivative stays positive for small $\delta$, and the three pieces join into a piecewise $C^2$ positive path from $x$ to $y$. At each of the two internal seams choose one $C^2$ foliated chart; the one-sided transverse-coordinate derivatives have a positive lower bound there, and mollifying the continuous piecewise $C^2$ chart curve with a nonnegative kernel keeps the transverse derivative positive, while the blending correction has derivative tending uniformly to zero and is made smaller than the lower bound; the resulting curve is $C^2$, positive, agrees near the outer endpoint collars and still joins $x$ to $y$. [F3, step 2.1, construct]

4.1 Transitivity: if genuine segments realize $A\succeq_F B$ and $B\succeq_F C$, apply the endpoint adjustment of step 3.1 to the second segment so that it starts at the actual endpoint of the first, concatenate the two, and smooth the single internal seam by the same chartwise mollification; the equality cases are immediate from the definition, so $A\succeq_F C$. [F1, step 3.1]

5.1 Reflexivity holds by the defining equality clause of [F1], and transitivity is step 4.1, so $\succeq_F$ is a preorder in the sense of [F8]; the endpoint conclusion follows from step 3.1 applied to any genuine joining segment, and the formal equality clause alone is never used to produce an actual segment. [F1, F8, step 3.1, step 4.1]

6.1 Mutual accessibility is reflexive and symmetric by definition and transitive by two applications of the transitivity in step 4.1, so it is an equivalence relation in the sense of [F8]; the construction used only finitely many charts, bumps, flow intervals and profiles, hence only the standing countable choice from [F9]. [F8, F9, step 4.1, step 5.1] ∎
