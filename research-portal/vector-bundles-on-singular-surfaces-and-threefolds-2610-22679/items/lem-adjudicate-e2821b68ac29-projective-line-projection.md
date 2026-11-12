---
id: lem-adjudicate-e2821b68ac29-projective-line-projection
kind: lemma
title: Projective-line projection dichotomy and endpoint coordinates
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:ex-projective-line-by-gluing-affines
  - math:def-relative-projective-space-standard-charts
  - math:thm-projective-space-proper-over-base
  - math:lem-closed-immersion-proper
  - math:lem-proper-stable-composition
  - math:lem-proper-stable-base-change
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input
  - math:def-scheme-theoretic-fibre
  - math:thm-affine-fibre-product-tensor-ring
  - math:lem-integral-finite-type-scheme-function-field
  - math:lem-projective-line-curve-and-divisor-basics
  - math:cor-polynomial-ring-over-a-domain-is-a-domain
  - math:def-integral-scheme
  - math:lem-morphism-schemes-local-on-source-target
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:thm-prime-spectrum-of-a-localisation-bijection
  - math:thm-universal-property-of-localisation
  - thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:ex-projective-line-by-gluing-affines: mathematical-premise
  math:def-relative-projective-space-standard-charts: mathematical-premise
  math:thm-projective-space-proper-over-base: mathematical-premise
  math:lem-closed-immersion-proper: mathematical-premise
  math:lem-proper-stable-composition: mathematical-premise
  math:lem-proper-stable-base-change: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input: mathematical-premise
  math:def-scheme-theoretic-fibre: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:lem-projective-line-curve-and-divisor-basics: mathematical-premise
  math:cor-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:lem-morphism-schemes-local-on-source-target: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
  math:thm-prime-spectrum-of-a-localisation-bijection: mathematical-premise
  math:thm-universal-property-of-localisation: mathematical-premise
  thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Stacks Project, reduced-source factorization through closed subschemes
      url: https://stacks.math.columbia.edu/tag/0356
      locator: Lemma 26.12.7 (tag 0356), complete statement and displayed proof, live
        text read 2026-11-12
      statement: A morphism from a reduced scheme factors through a closed subscheme
        if its set-theoretic image is contained there.
      hypotheses: Any scheme V, any closed subscheme Z of V, and a reduced source
        scheme S. No Noetherian, separatedness or finiteness condition.
      reading_limits: Read the complete statement and displayed proof on 2026-11-12.
        The cited nilradical-as-intersection-of-primes and closed-immersion
        factorization foundation lemmas were not reconstructed. Applied only to
        reduced integral sources T and W.
dependency_level: 1
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ an integral finite-type $k$-scheme, and $W\subset X\times_k\mathbf A^1$ an integral closed subscheme. Give its closure $T\subset X\times_k\mathbf P^1$ and the image $Y\subset X$ of $T$ their reduced induced closed structures. Then $Y$ is closed and integral and $T\to Y$ is proper and dominant. With $K=k(Y)$, the generic fiber $T\times_Y\operatorname{Spec}K$ is either $\mathbf P^1_K$ or $\operatorname{Spec}L$ for a finite field extension $L/K$. Consequently $\dim Y=\dim W-1$ or $\dim Y=\dim W$, respectively. In the first case $W=Y\times_k\mathbf A^1$ as closed subschemes; in the second case $T\to Y$ is generically finite. No separatedness over $k$ is assumed.

Also the coordinate $t=u/(u-1)$ gives a $k$-isomorphism $\mathbf P^1_u\setminus\{1\}\cong\mathbf A^1_t$, carrying $u=0,\infty$ to $t=0,1$ as scheme-theoretic fibers.

## Facts & Assumptions

**Given:** The Axiom of Choice and $k,X,W$ as stated. Products are over $k$. An integral scheme is nonempty and reduced with irreducible underlying space; $k(Y)$ is its generic stalk. A generic fiber is base change to this field. [[math:def-axiom-of-choice]], [[math:def-integral-scheme]], [[math:lem-integral-finite-type-scheme-function-field]], [[math:def-scheme-theoretic-fibre]]

**Goal:** Supply the proper projection, its generic-fiber alternatives and the endpoint coordinate change.

[F1] The two reciprocal affine charts construct the projective line and agree with relative projective space in dimension one. These charts commute with base change. Its projection over any scheme is proper under AC; closed immersions are proper, and properness survives composition and base change. Closed immersions have affine quotient charts and survive base change. [[math:ex-projective-line-by-gluing-affines]], [[math:def-relative-projective-space-standard-charts]], [[math:thm-projective-space-proper-over-base]], [[math:lem-closed-immersion-proper]], [[math:lem-proper-stable-composition]], [[math:lem-proper-stable-base-change]], [[math:lem-closed-immersion-affine-quotient-and-base-change]]

[F2] Reduced induced closed structures exist uniquely. The reduced-source factorization criterion in External input permits factorization through a closed subscheme containing the set-theoretic image. [[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input]]

[F3] Affine fiber products use tensor products. In particular, for an injective map of domains $A\to B$ and $K=\operatorname{Frac}A$, $B\otimes_A K=(A\setminus\{0\})^{-1}B$ is a domain with fraction field $\operatorname{Frac}B$: the isomorphism sends $b\otimes(a/s)$ to $ab/s$, with inverse $b/s\mapsto b\otimes(1/s)$. Localization's universal property verifies the inverse maps. The prime correspondence identifies the retained generic point. Polynomial rings over domains are domains. [[math:thm-affine-fibre-product-tensor-ring]], [[math:thm-universal-property-of-localisation]], [[math:thm-prime-spectrum-of-a-localisation-bijection]], [[math:cor-polynomial-ring-over-a-domain-is-a-domain]]

[F4] Over every field, the projective line is an integral one-dimensional scheme, and each closed point has finite residue-field degree, with its affine-chart polynomial description. Integral finite-type schemes have dimension equal to function-field transcendence degree, nonempty opens preserve dimension, and proper dominant maps satisfy the dimension formula. Integral closed subschemes satisfy the dimension-difference codimension formula. [[math:lem-projective-line-curve-and-divisor-basics]], [[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input]]

[F5] Ring maps give affine scheme maps, and compatible maps on open covers glue uniquely. These interfaces are used to verify the fractional coordinate map on its charts. [[math:thm-affine-scheme-ring-anti-equivalence]], [[math:lem-morphism-schemes-local-on-source-target]]

## External input
Use the reduced-source factorization criterion of Stacks Lemma 26.12.7: for a reduced scheme $S$, a morphism $S\to V$ factors through a closed subscheme $Z\subset V$ whenever its image lies in $|Z|$. This applies to $T$ and $W$, which are integral and hence reduced. The source statement and displayed proof were read; the cited nilradical and closed-immersion foundations were not reconstructed. Only this premise is imported here; the projection dichotomy and coordinate computation below are local deductions.

## Proof

1.1 The closure of the irreducible set $|W|$ is irreducible; [F2] makes its reduced closed structure $T$ integral, and its restriction to $X\times\mathbf A^1$ is $W$ by uniqueness. By [F1], $T\to X$ is the composite of a proper closed immersion and the proper projective-line projection, hence proper and closed. Its image is a nonempty irreducible closed set, so its reduced structure $Y$ is integral. The factorization criterion of [F2] gives $T\to Y$, and then $T\times_XY\cong T$ because $Y\to X$ is a closed immersion and $T\to X$ factors through it. Thus $T\to Y$ is a base change of $T\to X$, hence proper. It is surjective, in particular dominant. The same criterion factors $W$ as a closed subscheme of $Y\times\mathbf A^1$. [given, F1, F2]

2.1 Put $K=k(Y)$. On nonempty affine charts over a nonempty affine open of $Y$, dominance gives injective maps of domains, so [F3] shows that the generic fiber is reduced. Every such chart contains the generic point of $T$, which survives localization; hence their generic-fiber charts share this point and their union is irreducible. Thus the generic fiber is nonempty and integral, has function field $k(T)=k(W)$ over $K$, and is closed in $\mathbf P^1_K$ by base change of its closed immersion. By [F4], a proper irreducible closed subset of the integral one-dimensional $\mathbf P^1_K$ is a closed point. Its reduced closed structure is $\operatorname{Spec}\kappa(p)$: on an affine chart the defining ideal is the corresponding maximal prime, by the quotient description in [F1]. The residue field is finite over $K$ by [F4]. The remaining possibility is the whole projective line, and uniqueness of reduced closed structures gives the asserted scheme equality. [F1, F2, F3, F4, step 1.1]

3.1 In the two alternatives the function field over $K$ is respectively $K(t)$ or a finite extension, with transcendence degree one or zero. The proper-map formula in [F4] therefore gives $\dim T=\dim Y+1$ or $\dim T=\dim Y$, and $\dim T=\dim W$ because $W$ is a nonempty open of $T$. To check the first case, $Y\times\mathbf A^1$ is integral: its affine charts have domain rings $A[t]$ by [F3], and overlapping nonempty base charts give nonempty overlaps. Its function field is $K(t)$, so [F4] gives dimension $\dim Y+1$. The integral closed subscheme $W$ has that same dimension and hence codimension zero by [F4]; in an irreducible ambient space its support must be the whole space. Both closed structures are reduced, so [F2] gives $W=Y\times\mathbf A^1$. In the other case the finite generic field extension is exactly generic finiteness. [F2, F3, F4, step 1.1, step 2.1]

4.1 On the finite $u$-chart away from $u=1$ put $t=u/(u-1)$; on the infinity chart with $v=u^{-1}$ put $t=1/(1-v)$. These regular functions agree on their overlap and define a map to $\mathbf A^1$ by [F5]. Conversely, on $D(t-1)$ use $u=t/(t-1)$, and on $D(t)$ use $v=(t-1)/t$; these opens cover $\mathbf A^1$ and the formulas satisfy $uv=1$ on their overlap. They glue by [F1] and [F5], and substitution makes the composites identities. At $u=0$, $t=u/(u-1)$ differs from $u$ by a unit; at infinity $t-1=v/(1-v)$ differs from $v$ by a unit. Thus the endpoint fiber ideals, including their multiplicities after any base change, are those claimed. [F1, F5, algebra] ∎
