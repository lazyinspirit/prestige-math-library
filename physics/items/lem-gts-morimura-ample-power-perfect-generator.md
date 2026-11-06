---
id: lem-gts-morimura-ample-power-perfect-generator
kind: lemma
title: A finite sum of ample powers generates perfect complexes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - thm-ample-powers-very-ample-proper-base
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - def-axiom-of-choice
dependency_roles:
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Derived Categories of Schemes, An example generator
      url: https://stacks.math.columbia.edu/tag/0A9V
      locator: Lemmas 36.16.1–36.16.3, tags 0BQR, 0BQS, 0A9V; the coordinate Koszul proof is applied directly to the projective embedding below.
    - title: Bondal and Van den Bergh, Generators and representability of functors in commutative and noncommutative geometry
      url: https://arxiv.org/pdf/math/0204218
      locator: Theorem 2.1.2 and Proposition 2.2.4, PDF pp. 3–5; the compactness-to-finite-generation passage is proved below using dg modules.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $X$ be a scheme projective over a Noetherian commutative ring $A$, let $M$ be an invertible sheaf, and fix a closed immersion $i:X\hookrightarrow\mathbb P^r_A$ with $i^*\mathcal O(1)\cong M$. Then
$$E=\bigoplus_{j=0}^r M^{\otimes(-j)}$$
is a perfect compact generator of $D_{\mathrm{qc}}(X)$, the derived category of complexes with quasi-coherent cohomology. Here compact means that derived Hom out of $E$ commutes with arbitrary coproducts, and generator means that $\mathbf R\operatorname{Hom}_X(E,K)=0$ implies $K=0$. Every perfect complex on $X$ lies in the closure of $E$ under finite sums, shifts, cones, and retracts. In particular, a sufficiently high positive power of any ample line bundle supplies such a generator. No smoothness or Calabi–Yau hypothesis is needed for this statement.

## Statement references

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $A$, $X$, $M$, $i$, $r$, and the Axiom of Choice.

[F1] [[thm-ample-powers-very-ample-proper-base]] gives a closed projective embedding by a positive power of an ample line bundle on a projective scheme.

[F2] [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]] computes quasi-coherent sheaf cohomology on a finite affine cover with affine intersections.

[F3] [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] fixes the cohomological and finite stable retract-closure conventions over a field. For the arbitrary base ring $A$ of this lemma, use the following definitions locally, without asserting that $X$ has a field structure. A perfect complex on $X$ is a complex of $\mathcal O_X$-modules locally quasi-isomorphic to a bounded complex of finite-rank locally free modules; $D_{\mathrm{qc}}(X)$ is the full subcategory of the derived category of $\mathcal O_X$-modules with quasi-coherent cohomology. A thick closure means closure under finite sums, shifts, cones and retracts. A cohomological dg $A$-algebra $B$ is a graded associative unital $A$-algebra with an $A$-linear degree-one square-zero differential satisfying $d(bb')=d(b)b'+(-1)^{|b|}b\,d(b')$. A right dg $B$-module $N$ has a degree-one square-zero differential with $d(nb)=d(n)b+(-1)^{|n|}n\,d(b)$; $D(B)$ is its localization at quasi-isomorphisms. These ring-linear definitions need no field hypothesis. The resolutions, adjunction and finite-cell assertion used for them are constructed in steps 3.1–4.1, rather than imported from a field-linear existence theorem.

[A1] [[def-axiom-of-choice]] permits module and sheaf resolutions.

## Proof

**Given:** [F1]–[F3], [A1], and the specified embedding.

1.1 Pull back the homogeneous coordinate sections to sections $s_0,\ldots,s_r$ of $M$. They have no common zero and their nonvanishing loci $U_a$ are affine, with affine intersections, because they are intersections of $X$ with standard affine charts of projective space. The Koszul complex of the map $\mathcal O_X^{r+1}\to M$ is exact and locally split: where $s_a$ is a unit, contraction with its inverse gives a contracting homotopy for the augmented Koszul complex. Twisting yields for every integer $b$ an exact complex with terms $M^{\otimes b},M^{\otimes(b+1)},\ldots,M^{\otimes(b+r+1)}$, with the binomial multiplicities. Thus if $r+1$ consecutive powers lie in a thick subcategory, the next power on either side lies there too, by expressing the endpoint as the shifted cone of the remaining finite complex. Starting with exponents $-r,\ldots,0$ proves that every integral power of $M$ belongs to the finite stable retract closure of $E$. [F3, construct, algebra]

1.2 The finite affine Čech complex computes derived sections for unbounded quasi-coherent complexes as well. Indeed on each affine intersection the sections functor on quasi-coherent modules is exact, hence sends acyclic complexes to acyclic complexes. The augmented Čech complex is a resolution on stalks, with the usual contraction obtained by inserting an index of an open set containing the point. Its bounded Čech direction preserves quasi-isomorphisms after totalization, with only finitely many terms in each Čech degree. This extends [F2] to complexes and to objects with quasi-coherent cohomology by quasi-coherent resolutions. Those resolutions may be obtained on the same finite affine cover by resolving on its intersections and the augmented Čech construction. All subsequent Čech computations use this bounded direction, so no convergence assumption on the cohomological amplitude is required. [F2, A1, construct]

2.1 Suppose $\mathbf R\operatorname{Hom}(E,K)=0$. Step 1.1 gives $\mathbf R\Gamma(X,K\otimes M^{\otimes n})=0$ for every integer $n$. Fix $a$ and take the filtered colimit of these complexes for $n\ge0$, with transition maps multiplication by $s_a$. On a chart trivializing $M$, this is ordinary localization by the function representing $s_a$, since $\varinjlim(V\xrightarrow{s_a}V\xrightarrow{s_a}\cdots)=V[s_a^{-1}]$ for every module $V$. Hence it restricts to the complex on $U_a$. Using the finite Čech cover of step 1.2 shows $$\varinjlim_{n\ge0}\mathbf R\Gamma(X,K\otimes M^{\otimes n})\simeq\mathbf R\Gamma(U_a,K|_{U_a}).$$ Filtered colimits of modules are exact, and commute with the finite Čech totalization. The left side is zero, so the complex of sections on the affine $U_a$ is acyclic. Sections on an affine scheme detect quasi-coherent cohomology, since its quasi-coherent modules are sheaves of modules over its coordinate ring. Thus $K|_{U_a}=0$ for all $a$, and $K=0$. [F2, step 1.1, step 1.2, algebra]

2.2 Every perfect complex $P$ is compact. Its derived Hom into $K$ is $\mathbf R\Gamma(X,P^\vee\otimes^{\mathbf L}K)$. This identity is checked on a cover where $P$ is a bounded finite locally free complex, where it is the ordinary finite dual tensor identity, and the evaluations agree on overlaps. Such a tensor commutes with coproducts. Derived sections commute with coproducts by the finite affine Čech computation of step 1.2. Therefore derived Hom from $P$ commutes with coproducts. In particular $E$ is compact. [F2, F3, step 1.2, algebra]

3.1 Choose a dg resolution representing $E$ and put $B=\mathbf R\operatorname{Hom}_X(E,E)$. Derived tensor and Hom give an adjunction $F=-\otimes_B^{\mathbf L}E:D(B)\rightleftarrows D_{\mathrm{qc}}(X):G=\mathbf R\operatorname{Hom}_X(E,-)$. It can be constructed on semifree $B$-modules: tensor free generators with shifts of a resolution of $E$, attach the specified differentials, and take the sequential union; the tensor–Hom identity on free modules extends through this construction. Its image has quasi-coherent cohomology, since shifts, coproducts and cones preserve that condition. Step 2.2 shows that $G$ preserves coproducts. The unit is an equivalence on $B$ and hence on every semifree module, by shifts, coproducts, cones, and sequential homotopy colimits, the latter being the cone of $1-\mathrm{shift}$ on a coproduct. Every module admits such a resolution: attach generators representing all cohomology classes, then attach generators killing kernel cycles, and repeat. The union is a quasi-isomorphism because each kernel cycle is killed at a later finite stage. Thus the unit is an equivalence everywhere. Applying $G$ to the counit and using the triangular identities shows that its cone is killed by $G$; step 2.1 makes that cone zero. This proves $D(B)\simeq D_{\mathrm{qc}}(X)$. [F3, A1, step 2.1, step 2.2, construct]

4.1 Compact dg $B$-modules lie in the finite stable retract closure of $B$. To see this without a generation assumption, resolve a module by a semifree resolution with attachment stages indexed by nonnegative integers as in step 3.1. Each generator's differential uses finitely many generators from strictly earlier stages. Every finite set of generators therefore lies in a finite cell submodule: recursively add the finite set of generators appearing in their differentials, a recursion of finite depth because attachment stages strictly decrease. The finite cell submodules form a filtered system whose union is the full resolution, and its homotopy colimit is that union. A compact module commutes under derived Hom with this filtered homotopy colimit. One verification uses the simplicial replacement of a filtered diagram: each degree is a coproduct; its skeletal realization is a sequential homotopy colimit of finite cofibers. Exactness and coproduct preservation of derived Hom from a compact object preserve these constructions, and filtered colimits of homotopy groups are exact. The identity of a compact module consequently factors through a finite cell submodule of its resolution, so the module is a retract of it in the derived category. Conversely finite cells and their retracts are compact, since $B$ is. [F3, A1, step 3.1, construct]

5.1 If $P$ is perfect on $X$, step 2.2 makes it compact. The equivalence of step 3.1 preserves coproducts in both directions, so it transports $P$ to a compact $B$-module. By step 4.1 that module is obtained from $B$ by finite sums, shifts, cones and retracts. Transporting back gives $P$ from $E$ by those operations. This proves the asserted finite generation. Finally apply [F1] to any ample line bundle to obtain the required embedding by a positive power and the generator already constructed. [F1, F3, step 2.2, step 3.1, step 4.1] ∎
