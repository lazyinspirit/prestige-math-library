---
id: "thm-perfect-complex-k-zero-agrees-with-projective-k-zero"
kind: "theorem"
title: "Triangle K0 of perfect complexes equals split K0 of finite projectives"
deps: [def-perfect-complex-over-a-ring, lem-perfect-complexes-form-a-triangulated-subcategory, def-triangulated-grothendieck-group, lem-triangulated-k-zero-shifts-and-exact-functors, lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant, def-split-grothendieck-group-of-an-additive-category, def-brutal-truncation-of-a-complex, thm-canonical-truncations-fit-a-distinguished-triangle, thm-grothendieck-group-universal-properties-and-functoriality, def-free-abelian-group, thm-quotient-group-universal-property, def-zero-and-stalk-complex]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Lemma 15.121.2"
      url: "https://stacks.math.columbia.edu/tag/0FJG"
    - title: "Weibel, The K-book, Chapter II, Example 9.7.5 and Lemma 9.2.4"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

For any unital associative ring $A$, degree-zero inclusion $P\mapsto P[0]$
induces an isomorphism
$K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$.
Its inverse sends a perfect object represented by a bounded finite-projective
complex $P$ to $\sum_n(-1)^n[P^n]$. The same comparison holds for finite
graded projectives and graded perfect complexes with degree-zero maps. No
finite global-dimension or Noetherian hypothesis is required.

## Facts & Assumptions

**Given:** A unital associative ring $A$, its essentially small additive
category $\operatorname{Proj}_{\mathrm{fg}}(A)$ of finitely generated
projective left modules, and the derived category of left $A$-modules; in the
graded clause a unital graded $k$-algebra $A$ with
$\operatorname{GrMod}_0(A)$.

[F1] $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ is the free abelian group on
$\operatorname{Iso}(D_{\mathrm{perf}}(A))$ modulo the relations
$[Y]=[X]+[Z]$ for distinguished triangles of perfect objects
([[def-triangulated-grothendieck-group]],
[[def-perfect-complex-over-a-ring]]).

[F2] $D_{\mathrm{perf}}(A)$ is an essentially small strictly full triangulated
subcategory of $D(A\text{-}\mathrm{Mod})$; a distinguished triangle of
$D(A\text{-}\mathrm{Mod})$ all of whose objects are perfect is therefore a
distinguished triangle of $D_{\mathrm{perf}}(A)$, and bounded complexes of
finitely generated projectives are its objects. The graded analogue holds in
$D(\operatorname{GrMod}_0(A))$
([[lem-perfect-complexes-form-a-triangulated-subcategory]]).

[F3] $K_0^{\mathrm{split}}(\mathcal D)$ of an essentially small additive
category is the free abelian group on $\operatorname{Iso}(\mathcal D)$ modulo
$[X\oplus Y]=[X]+[Y]$, and a class function additive on biproducts factors
uniquely through it
([[def-split-grothendieck-group-of-an-additive-category]],
[[thm-grothendieck-group-universal-properties-and-functoriality]]).

[F4] For a bounded complex $P$ of finitely generated projective left modules,
$\chi(P)=\sum_n(-1)^n[P^n]$ is well defined in $K_0^{\mathrm{split}}$, is
unchanged by quasi-isomorphism and homotopy equivalence, depends only on the
represented perfect object, and is additive on distinguished triangles of
perfect objects; the graded finite-projective analogue holds with degree-zero
differentials and the graded split group
([[lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant]]).

[F5] In $K_0^{\mathrm{tri}}$, $[0]=0$ and $[X[n]]=(-1)^n[X]$ for every integer
$n$ ([[lem-triangulated-k-zero-shifts-and-exact-functors]]).

[F6] Every short exact sequence $0\to A\to B\to C\to0$ of cochain complexes
gives a distinguished triangle $A\to B\to C\to A[1]$ in $D(\mathcal A)$
([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

[F7] For a cochain complex $X$, the brutal truncation $\sigma^{\geq n}X$ has
$(\sigma^{\geq n}X)^i=X^i$ for $i\geq n$ and zero otherwise, with the retained
differentials and the inclusion $\sigma^{\geq n}X\hookrightarrow X$ as a map of
complexes; a degree-zero stalk complex has a single nonzero term
([[def-brutal-truncation-of-a-complex]], [[def-zero-and-stalk-complex]]).

[F8] A class function from a set to an abelian group extends uniquely to the
free abelian group on that set, and a homomorphism killing a subgroup factors
uniquely through the quotient ([[def-free-abelian-group]],
[[thm-quotient-group-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 For finitely generated projective left modules $P,Q$ the degreewise split sequence of complexes $0\to P[0]\to(P\oplus Q)[0]\to Q[0]\to0$ (the biproduct sequence in degree zero, zero in every other degree) is short exact, and all three complexes are bounded with finitely generated projective terms; by [F2] they are perfect objects of $D_{\mathrm{perf}}(A)$, and [F6] gives a distinguished triangle $P[0]\to(P\oplus Q)[0]\to Q[0]\to P[1]$ of $D(A\text{-}\mathrm{Mod})$, hence of $D_{\mathrm{perf}}(A)$ by [F2]. Its relation $[(P\oplus Q)[0]]=[P[0]]+[Q[0]]$ holds in $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ by [F1]. Thus the class function $[P]\mapsto[P[0]]$ on $\operatorname{Iso}(\operatorname{Proj}_{\mathrm{fg}}(A))$ is additive on biproducts, and [F3] gives a unique homomorphism $\iota_*:K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ with $\iota_*([P])=[P[0]]$. [F1, F2, F3, F6, construct, algebra]

1.2 By [F4] the assignment $\chi(X):=\sum_n(-1)^n[P^n]$, for any bounded finite-projective complex $P$ representing the perfect object $X$, is a well-defined class function on $\operatorname{Iso}(D_{\mathrm{perf}}(A))$ with values in $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$, is additive on distinguished triangles of perfect objects, and is independent of the representative. Extending $\chi$ over the free abelian group on $\operatorname{Iso}(D_{\mathrm{perf}}(A))$ and applying the quotient universal property of [F8] in the pattern of the functor-induced class functions of [F4] and [F1] produces a unique homomorphism $\overline\chi:K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))\to K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$ with $\overline\chi([X])=\sum_n(-1)^n[P^n]$. [F1, F4, F8, construct, algebra]

2.1 The composite $\overline\chi\circ\iota_*$ is the identity of $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$: for a finitely generated projective $P$, $\overline\chi(\iota_*([P]))=\chi(P[0])=[P]$ because the degree-zero stalk complex has the single term $P$ in degree $0$ by [F7], and the two homomorphisms agree on every generator of $K_0^{\mathrm{split}}$ [F3], with $\iota_*$ and $\overline\chi$ as constructed in steps 1.1 and 1.2. [F3, F7, step 1.1, step 1.2, algebra]

2.2 The composite $\iota_*\circ\overline\chi$ is the identity of $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$. Let $P$ be a bounded finite-projective complex with $P^i=0$ for $i<a$ and $i>b$, representing $X$. For every integer $n$ the inclusion $\sigma^{\geq n}P\hookrightarrow\sigma^{\geq n-1}P$ of [F7] is a degreewise split short exact sequence of complexes with cokernel the degree-$(n-1)$ stalk complex $P^{n-1}[-(n-1)]$, all terms bounded finite projective; by [F6] and [F2] it gives a distinguished triangle of $D_{\mathrm{perf}}(A)$, so [F1] and [F5] give $[\sigma^{\geq n-1}P]=[\sigma^{\geq n}P]+(-1)^{n-1}[P^{n-1}[0]]$. Since $\sigma^{\geq b+1}P=0$ and $[\sigma^{\geq b+1}P]=0$ by [F5], summing these relations for $n=a+1,\dots,b+1$ telescopes to $[\sigma^{\geq a}P]=\sum_{j=a}^{b}(-1)^j[P^j[0]]$; and $\sigma^{\geq a}P=P$ by [F7]. Hence $[X]=[P]=\sum_j(-1)^j[P^j[0]]=\sum_j(-1)^j\iota_*([P^j])=\iota_*(\overline\chi([X]))$, using $\iota_*([P^j])=[P^j[0]]$ from step 1.1 and the definition of $\overline\chi$ from step 1.2. The classes $[X]$ generate $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$ [F1], so $\iota_*\circ\overline\chi$ is the identity; the zero complex, where the range $a\leq j\leq b$ is empty, satisfies $[0]=0$ by [F5]. [F1, F2, F5, F6, F7, step 1.1, step 1.2, induction, algebra]

3.1 Steps 2.1 and 2.2 exhibit $\overline\chi$ as a two-sided inverse of $\iota_*$, so degree-zero inclusion induces the asserted isomorphism $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))\to K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$, with inverse sending the class of an object represented by $P$ to $\sum_n(-1)^n[P^n]$; no finite global-dimension or Noetherian hypothesis was used. The graded comparison is the same argument run in the abelian category $\operatorname{GrMod}_0(A)$ of graded modules with degree-zero maps, where finite graded projectives replace finite projectives, the graded Euler lemma and graded closure clause of [F2, F4] replace their ungraded counterparts, internal shifts $\{1\}$ are left untouched, and the biproduct and brutal-truncation sequences are formed degreewise. [F1, F2, F3, F4, step 2.1, step 2.2, algebra] ∎
