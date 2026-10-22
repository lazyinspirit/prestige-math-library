---
id: lem-integrable-zero-one-domain-boundary-disks-have-dense-injective-points
kind: lemma
title: "Integrable boundary disks with zero-one domains have dense injective points"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-holomorphic-symmetric-product-curves-admit-finite-branched-ordered-lifts, lem-symmetric-product-divisor-intersections-and-point-movement, thm-zero-order-factorization-holomorphic-function, thm-holomorphic-implicit-function-theorem, thm-removable-singularity-characterizations]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Proposition3.14 uses degree-one incidence to obtain injective points; the full bordered incidence-cover and global uniqueness argument under the precise zero-one premise is supplied below"
---

## Statement

Assume Countable Choice. Let $\Sigma$ be a connected closed Riemann surface, let $\gamma_1,\ldots,\gamma_m$, $m\ge1$, be disjoint smooth embedded circles, and put $L=q(\gamma_1\times\cdots\times\gamma_m)\subset\operatorname{Sym}^m(\Sigma)$. Let $u:\overline{\mathbb D}\to\operatorname{Sym}^m(\Sigma)$ be smooth, holomorphic in the interior for the standard complex structure, with boundary on $L$. For a component $R$ of $\Sigma\setminus\bigcup_i\gamma_i$, let $n_R(u)$ be its actual relative divisor-intersection degree, evaluated at any point of $R$.

If $u$ is nonconstant and $n_R(u)\in\{0,1\}$ for every $R$, then the set
$$I(u)=\{z\in\mathbb D:du(z)\ne0,\ u^{-1}(u(z))=\{z\}\text{ in }\overline{\mathbb D}\}$$
is open and dense in $\mathbb D$. In particular this applies to every nonconstant integrable disk whose actual domain is one cut component with coefficient one and zero on the others.

This is an integrable zero-one-domain statement. It neither factors arbitrary disks nor asserts that all index-two disks have such domains, that a perturbed almost complex disk automatically has dense injective points, or that the resulting moduli space is regular or has a specified count.

## Statement references

[[def-countable-choice]]

[[lem-symmetric-product-divisor-intersections-and-point-movement]]

## Facts & Assumptions

**Given:** The actual disjoint circle system, standard complex symmetric product, smooth closed disk and its actual zero-one relative degrees. The boundary torus is disjoint from the repeated-point locus because the circles are disjoint.

[F1] [[lem-holomorphic-symmetric-product-curves-admit-finite-branched-ordered-lifts]] proves the local root continuation and finite monodromy filling by power coordinates and bounded removal. We construct the degree-$m$ bordered incidence cover below, rather than assuming that its degree equals the ordered cover's degree.

[F2] [[lem-symmetric-product-divisor-intersections-and-point-movement]] defines the actual incidence-divisor line and its relative disk degree, identifies it with the sum of positive local holomorphic zero orders when the disk is not contained in that divisor, and proves constancy as its point moves in a circle-complement component.

[F3] [[thm-zero-order-factorization-holomorphic-function]], [[thm-holomorphic-implicit-function-theorem]] and [[thm-removable-singularity-characterizations]] give finite local order, simple-root inversion, local holomorphic power coordinates and bounded puncture filling. Local identity and open mapping for a nonconstant one-variable map follow directly: a nonconstant germ is $z^e$ times a unit, whose holomorphic $e$th root straightens it to a power map.

## Proof

1.1 The boundary tuples have distinct entries and stay a positive distance from the repeated-point locus by compactness. Hence $u$ avoids it on a whole source boundary collar. In the interior the local discriminant is holomorphic. Its zero set is discrete: if a discriminant vanished identically on a neighborhood, analytic continuation in overlapping coefficient charts would make the connected disk lie in the repeated-point locus, contrary to its boundary collar. Thus its preimage is a finite set $B\subset\mathbb D$, since it is closed and lies in a compact interior subdisk. Off $B$ the actual incidence pairs $(z,a)$, with $a$ one of the entries of $u(z)$, form an unbranched degree-$m$ covering, by the simple-root statement of [F3]. At every member of $B$, split the sheet monodromy into finite cycles and fill a cycle of length $e$ by $z-z_b=\zeta^e$; its bounded root extends by [F1]–[F3]. At the physical boundary the roots remain simple. Applying the smooth implicit inverse to their polynomial equations gives smooth root functions up to that boundary, holomorphic in its interior; one may extend the coefficient functions smoothly across the edge first to see the smooth implicit inversion. Thus this construction is a compact possibly disconnected smooth bordered Riemann surface $C$, a degree-$m$ proper branched map $p:C\to\overline{\mathbb D}$ unbranched near the boundary, and a smooth map $f:C\to\Sigma$ holomorphic in the interior. Every fiber is exactly the tuple $u(z)$, with multiplicities, and $f(\partial C)\subset\Gamma:=\bigcup_i\gamma_i$. Each component of $C$ maps onto the disk: continuation of a sheet over the connected complement of the finite branch set gives its positive covering degree there, and its closure supplies the remaining fibers. In particular every component has nonempty boundary. [F1, F3, given, construct]

2.1 We justify the degree bound for the interior map $f$. A constant component has value in $\Gamma$, by its nonempty boundary. For $a\in\Sigma\setminus\Gamma$, the preimage $f^{-1}(a)$ is finite and interior: it misses the boundary and all constant components, and an infinite set would accumulate in the compact surface at an interior point, forcing that component constant by [F3]. For every such preimage $q$ choose a source coordinate with $p(\zeta)-p(q)=\zeta^e$ and write a target coordinate of $f$ minus $a$ as $\zeta^r b(\zeta)$, $r\ge1$, $b(0)\ne0$. Over a nearby base parameter the product of the $e$ root values minus $a$ has order $r$: its leading factor is $\prod_{\zeta^e=w}\zeta^r=((-1)^{e-1}w)^r$, and the remaining product and its reciprocal extend as bounded holomorphic functions, hence as a nonvanishing unit by [F3]. This product is exactly the local incidence section evaluated at $a$, in the coefficient description of [F2]. Multiplying the finite clusters proves $$n_R(u)=\sum_{q\in f^{-1}(a)}\operatorname{ord}_q(f-a)\le1\qquad(a\in R).$$ The use of [F2] is legitimate even if there is a fixed coordinate elsewhere: a fixed coordinate cannot equal this $a$, since its value lies in $\Gamma$. This is an exact multiplicity identity, not just a generic regular-value count. [F2, F3, step 1.1, construct, algebra]

3.1 On the union of the nonconstant components, $f$ has no interior critical point and is injective on all interior points together. If a critical point had order at least two, its local power coordinate in [F3] would give at least two preimages, counted with multiplicity, for every sufficiently near target point other than its value. Choose such a point outside $\Gamma$; this is possible because finitely many embedded circles have empty interior, as their local smooth coordinates are one-dimensional. Step2.1 would contradict those two preimages. If two distinct interior points had the same image, take disjoint neighborhoods of them. Their nonconstant holomorphic maps are open by the power-coordinate argument, so the two images have an open common neighborhood of their common value. A point of it outside $\Gamma$ again has at least two interior preimages, contradicting step2.1. Both arguments apply across different components as well. Thus $f$ is an immersion and globally one-to-one on the union of the active interiors; its boundary may still fold onto proper arcs of the attaching circles. No assertion that its image is exactly a whole cut component or that its boundary covers each full circle is needed. [F3, step 2.1, construct, contradiction]

4.1 At least one component $C_*$ has nonconstant $f$, because otherwise its finitely many constant values make every tuple $u(z)$ the same tuple. The map $p|_{C_*}$ covers the disk by step1.1. Let $O\subset\mathbb D$ be any nonempty open set. Choose $z_0\in O\setminus B$ and one point of $C_*$ above it. On a smaller disk $O'\subset O\setminus B$, its root is a holomorphic branch $a(z)=f(q(z))$. Its derivative is nonzero by step3.1 and the nonzero derivative of the unbranched map $p$. It therefore maps open sets onto open subsets of $\Sigma$. There are points $z\in O'$ with $a(z)\notin\Gamma$, and they form an open set. For every such $z$, if $u(z')=u(z)$ with $z'\in\overline{\mathbb D}$, that tuple contains the entry $a(z)$. It cannot occur at $z'$ on the physical boundary or in a constant component, since those values lie in $\Gamma$. It therefore arises from an active interior point $q'$ with $f(q')=a(z)$. Step3.1 gives $q'=q(z)$ and hence $z'=z$. Moreover $du(z)\ne0$: all roots at $z\notin B$ are distinct, their simple-root coordinates are holomorphic local coordinates for the symmetric product, and the branch just selected has nonzero derivative. Thus every nonempty $O$ meets $I(u)$, proving density. [F3, step 1.1, step 3.1, construct, algebra]

5.1 Finally $I(u)$ is open, not merely a dense collection of isolated good points. At any $z\in I(u)$, a complex coordinate component of $u$ has nonzero derivative. Its one-variable inverse supplied by [F3] makes $u$ an embedding on a small source neighborhood $W$ of $z$. Take a smaller neighborhood whose closure lies in $W$. The image of the compact set $\overline{\mathbb D}\setminus W$ misses $u(z)$ by the defining global uniqueness. In a target coordinate neighborhood choose a smaller neighborhood of $u(z)$ disjoint from that compact image. For $w$ sufficiently close to $z$, $u(w)$ belongs to it, so every preimage lies in $W$ and local injectivity makes it just $w$; the derivative remains nonzero. Therefore a neighborhood of $z$ lies in $I(u)$. Together with step4.1 this proves the exact open dense assertion. All constructions used finite branched sheets and local complex arguments; no disk factorization theorem, index-domain formula, perturbed regularity or degeneration count has been imported. [F3, step 4.1, construct] ∎
