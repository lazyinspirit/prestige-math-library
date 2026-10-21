---
id: thm-leo-local-equivalence-group-and-concordance-map
kind: theorem
title: LEO local-equivalence group and concordance map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-khovanov-and-barnatan-localization-foundations
  - def-smooth-knot-concordance
  - thm-knot-concordance-is-an-abelian-group
  - def-countable-choice
  - lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes
  - lem-based-planar-diagrams-admit-spherical-long-endpoint-presentations
  - lem-marked-knot-isotopies-admit-protected-reidemeister-movies
  - lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark
  - lem-based-odd-barnatan-movie-maps-and-localized-concordances
  - lem-pointed-odd-barnatan-tensor-product-over-marked-rings
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is needed for the smooth concordance group and finite
  movies; the algebraic LEO group argument is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Nathan Dunfield, Robert Lipshitz, and Dirk Schütz, Local equivalence and
        refinements of Rasmussen's s-invariant, arXiv:2312.09114v3
      url: https://arxiv.org/pdf/2312.09114v3
      locator: §§3.1–3.4, printed pp. 9–14
    - title: Krzysztof K. Putyra, A 2-category of chronological cobordisms and odd
        Khovanov homology, arXiv:1310.1895
      url: https://arxiv.org/pdf/1310.1895
      locator: §§2–3
---

## Statement

Assume the Axiom of Countable Choice. Local-equivalence classes of LEO triples form an abelian group under the shifted tensor product
$$
(C,D,f)\otimes(C',D',f')=(C\otimes_{\mathbb A}C'\{-1\},\ D\otimes_{\mathbb R}D'\{-1\},\ f\otimes f'),
$$
with identity the unknot triple and inverse the shifted graded dual. The assignment sending a smooth oriented knot to its odd/Bar–Natan LEO triple is a well-defined homomorphism from the smooth knot concordance group to this abelian group.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|LEO triple, local map and local equivalence]]

[[lem-odd-khovanov-and-barnatan-localization-foundations|Knot triples, concordance maps and connected-sum tensor product]]

[[def-smooth-knot-concordance|Smooth knot concordance]]

[Dunfield–Lipshitz–Schütz, *Local equivalence and refinements of Rasmussen's s-invariant* (2023), §§3.1–3.4](https://arxiv.org/pdf/2312.09114v3)

[Putyra, *A 2-category of chronological cobordisms and odd Khovanov homology* (2013), §§2–3](https://arxiv.org/pdf/1310.1895)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the class of LEO triples from the Definition.

[F1] A local map consists of compatible module chain maps on the odd and Bar–Natan complexes, with the Bar–Natan map becoming a homotopy equivalence after inverting $h$ ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F2] The LEO conditions include finite freeness and a localized rank-one Bar–Natan complex ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F3] The full based knot assignment has the integral marked movie maps, compatible reductions, localized concordance equivalence, arbitrary based-diagram comparison and connected-sum tensor identifications ([[lem-odd-khovanov-and-barnatan-localization-foundations]]).

[F4] Smooth oriented knot concordance classes form a group under connected sum, with the stated reverse-mirror inverse ([[thm-knot-concordance-is-an-abelian-group]]); this item uses only the supplier's proved smooth-category clause.

[A1] The Axiom of Countable Choice is used by the smooth concordance-group and finite-movie inputs; the abstract algebraic group proof below is choice-free ([[def-countable-choice]]).

[F5] The new integral odd/BN spherical chart comparison is [[lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes]]. Its inverse maps are marked-module linear and have exact common mod-two squares.

[F6] Arbitrary endpoint normalization and R-only comparison are [[lem-based-planar-diagrams-admit-spherical-long-endpoint-presentations]] and [[lem-marked-knot-isotopies-admit-protected-reidemeister-movies]]. Their common endpoint-coordinate construction is used explicitly in the full foundations proof.

[F7] [[lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark]] provides the actual protected annulus movie; [[lem-based-odd-barnatan-movie-maps-and-localized-concordances]] provides its module-linear maps and the localized equivalence of the connected composite.

[F8] [[lem-pointed-odd-barnatan-tensor-product-over-marked-rings]] proves the shifted connected-sum identifications and their common reduction; the full foundations proof transfers them to arbitrary based representatives.

## Proof

**Given:** LEO triples and their local maps.

1.1 Local equivalence is reflexive because each triple has its identity local map, symmetric by its definition as maps in both directions, and transitive because the composites of local maps remain module chain maps, their localized Bar–Natan maps are composites of homotopy equivalences, and the two mod-$(2,h)$ squares compose up to the sum of their module-linear homotopies. Thus local equivalence is an equivalence relation. [F1, given, algebra]

2.1 The tensor product of two LEO triples is again a LEO triple: tensoring finite free complexes preserves finite freeness, tensoring the reductions gives the homotopy equivalence $f\otimes f'$, and tensoring the localized rank-one equivalences gives a rank-one equivalence over the localized coefficient algebra. Tensor products of local maps are local maps because tensor products preserve chain homotopies and homotopy equivalences between these free localized complexes. Hence the shifted tensor product is associative and respects local-equivalence classes. The graded symmetry $u\otimes v\mapsto(-1)^{|u||v|}v\otimes u$ gives commutativity, and the unknot triple is the unit because its complexes are $\mathbb A\{1\}$ and $\mathbb R\{1\}$. [F1, F2, step 1.1, algebra]

3.1 For $T=(C,D,f)$ define $T^*=(\operatorname{Hom}_{\mathbb A}(C,\mathbb A)\{2\},\operatorname{Hom}_{\mathbb R}(D,\mathbb R)\{2\},f^*)$, where $f^*$ is the transpose induced by a homotopy inverse $g$ to the reduced equivalence $f$. Finite freeness lets dualization commute with reduction and localization; it preserves chain homotopies and chain homotopy equivalences. Thus $T^*$ satisfies the LEO conditions, and dualizing both maps and the module-linear homotopy in a local-map square gives a local map in the reverse direction. The finite-free tensor-Hom isomorphisms identify $T\otimes T^*$ with $(\operatorname{Hom}_{\mathbb A}(C,C)\{1\},\operatorname{Hom}_{\mathbb R}(D,D)\{1\},F)$, where on reductions $F(\eta)=f\eta g$. The coevaluation maps from the unknot triple send $1$ to $\mathrm{id}_C$ and $\mathrm{id}_D$. The reduced square commutes up to the module-linear homotopy $H$ from $fg\simeq\mathrm{id}_D$, since $F(\mathrm{id}_C)=fg$. After inverting $h$, the BN coevaluation map $\mathbb R[h^{-1}]\to\operatorname{Hom}_{\mathbb R[h^{-1}]}(D[h^{-1}],D[h^{-1}])$ sends $1$ to $\mathrm{id}_D$; under a chosen homotopy equivalence $D[h^{-1}]\simeq\mathbb R[h^{-1}]$ it is homotopic to the identity map of the rank-one endomorphism complex, so it is a homotopy equivalence by [F2]. The reverse evaluation maps are the graded evaluations $\phi\otimes c\mapsto\phi(c)$ on the finite-free tensor-Hom identifications, with the standard Hom differential $d\phi=-(-1)^{|\phi|}\phi d$. They are chain maps because the two terms in $d(\phi\otimes c)$ evaluate to $-(-1)^{|\phi|}\phi(dc)$ and $+(-1)^{|\phi|}\phi(dc)$. For the reduced evaluation square choose a separate module-linear homotopy $\ell$ on $\bar C=C\otimes\mathbb F_2$ satisfying $gf-\mathrm{id}_{\bar C}=d\ell+\ell d$; the homotopy $H$ above acts on $\bar D$ and is not used here. Under the graded flip to the dual-first tensor order, the two reduced evaluation composites are $\phi\otimes c\mapsto\phi(c)$ and $\phi\otimes c\mapsto\phi(gf(c))$, so the reduced square commutes up to $\phi\otimes c\mapsto\phi(\ell(c))$ (over $\mathbb F_2$ the Koszul signs are one), and after localization evaluation identifies with $\operatorname{Hom}_{\mathbb R[h^{-1}]}(\mathbb R[h^{-1}],\mathbb R[h^{-1}])\to\mathbb R[h^{-1}]$, an isomorphism. Hence the two evaluation maps are local maps in both directions, proving $T\otimes T^*$ locally equivalent to the unknot triple and $T^*$ is an inverse. Finite tensor-Hom associativity, the graded flip, and the unknot's identity endomorphism give associativity, commutativity and the unit, so local-equivalence classes form an abelian group. [F1, F2, step 2.1, algebra, construct]

4.1 By [F4] the domain is the smooth concordance group. By [F3], [F5] and [F6], every prescribed based knot diagram has its LEO triple, and arbitrary based presentations of the same oriented knot are related by marked odd and BN chain homotopy equivalences with compatible reduced squares. In particular those pairs are local maps in both directions, so they define the same local-equivalence class. The full foundations proof constructs the finite common endpoint model before using the protected R-only comparison; no assertion that a planar move can pass a mark through a crossing is assumed. Thus the assignment is independent of the diagram and basepoint presentation. [F3, F4, F5, F6, step 3.1, construct]

5.1 Let two knots be smoothly concordant. Their arbitrary prescribed based endpoint diagrams are first normalized by [F6], with the spherical marked isomorphisms of [F5]. The annulus has a proper marked arc joining the boundary marks. The relative annulus movie of [F7], with the common endpoint-strip comparison proved in the foundations argument, supplies a protected finite movie. The integral odd map is right $\mathbb A$-linear; the BN map is right $\mathbb R$-linear. Their reductions agree under the statewise comparison, and the BN composite becomes a marked-ring chain homotopy equivalence after inverting $h$. The annulus has Euler characteristic zero, so these maps preserve both gradings. Compose them with the actual endpoint isomorphisms to obtain a local map between the original triples; the reverse annulus yields a local map in the other direction. Hence concordant knots have the same local-equivalence class. Individual Morse maps need not be localized equivalences; [F7] proves the required assertion for the entire connected concordance composite. No odd movie-independence theorem is used. [F1, F3, F5, F6, F7, A1, step 4.1, construct]

6.1 The connected-sum chain identifications of [F8] carry the knot triple of $K\#K'$ to the shifted tensor product of the two knot triples, and their reduced comparison is the tensor of the statewise comparisons. The odd signs are balanced for the marked right actions, and the BN vertex sign accounts for the normalized cochain tensor differential, as computed in that supplier. The arbitrary representative comparison from step 4.1 permits these identifications to be made in convenient planar pointed-sum presentations without restricting the original endpoints. Thus the class of $K\#K'$ is the product of the classes of $K$ and $K'$. The unknot goes to the unit triple of step 2.1. By [F4] the reverse mirror is the inverse of $K$ in the smooth concordance group, so the just-proved tensor identity and concordance invariance send it to the inverse class in the target group of step 3.1. Consequently the assignment is a well-defined homomorphism with the entire asserted scope. [F3, F4, F8, step 2.1, step 3.1, step 4.1, step 5.1, algebra, construct] ∎
