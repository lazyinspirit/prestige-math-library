---
id: lem-kh-to-instanton-resolution-spectral-sequence
kind: lemma
title: Filtered instanton complex from the cube of knot resolutions
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
- def-instanton-knot-homology-and-canonical-class
- def-singular-instanton-knot-and-sutured-closure-data
- lem-instanton-knot-complex-asd-analytic-foundations
- def-khovanov-frobenius-algebra-and-cube-of-resolutions
- def-reduced-khovanov-cohomology-of-a-knot
- lem-khovanov-cube-differential-squares-to-zero
- thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
- def-axiom-of-choice
- def-countable-choice
- thm-based-link-earring-complexes-and-resolution-unlink-groups-are-well-defined
- lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds
- thm-admissible-earring-cobordisms-have-finite-oriented-family-counts-and-gluing
- thm-earring-skein-cobordisms-give-integral-exact-triangles
- thm-integral-earring-unlink-saddles-are-the-reduced-frobenius-operations
axiom_use: The finite filtration and its algebraic rank argument are choice-free;
  the singular-instanton construction inherits the declared AC branch.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector,
      §§6–8.7
    url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
  - title: P. B. Kronheimer and T. S. Mrowka, Knot homology groups from instantons,
      §1.2 and §§3.3–3.7
    url: https://people.math.harvard.edu/~kronheim/yaft.pdf
  - title: Hongjian Yang, An Overview of Floer Homologies, §5.7
    url: https://web.stanford.edu/~cm5/286.pdf
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $D$ be a finite based diagram of a smooth knot $K\subset S^3$ with ordered crossings $c_1<\cdots<c_n$. The singular instanton resolution complex admits a finite filtration whose first page, with its first differential, is isomorphic to the reduced Khovanov cube of the reflected based diagram $\overline D$. Its spectral sequence converges to $I^\natural(K;\mathbb Z)$. The cube sign at the edge changing $c_j$ is $(-1)^{\sum_{i<j}v_i}$, and the edge operation is multiplication for a merge or comultiplication for a split. Thus its $E_2$ page is the reduced integral Khovanov cohomology of $\overline D$. The claim includes coherent instanton orientations and the unlink group and saddle-map identifications; it asserts no diagram-invariance of intermediate pages.

## Statement references

[[def-instanton-knot-homology-and-canonical-class|Singular instanton homology]]

[[def-singular-instanton-knot-and-sutured-closure-data|Admissible resolution data]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Integral Frobenius operations and cube signs]]

[[lem-instanton-knot-complex-asd-analytic-foundations|Analytic instanton complex]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§6–8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

[F1] The actual based-link complexes, finite integral critical orientation modules, all-class cylindrical counts and continuation are [[thm-based-link-earring-complexes-and-resolution-unlink-groups-are-well-defined]]. Only its based-link invariant is used here, not a sutured closure or nonvanishing assertion.

[F2] Actual compatible backgrounds are [[lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds]]. Finite all-class oriented parameter counts and exhaustive collars are [[thm-admissible-earring-cobordisms-have-finite-oriented-family-counts-and-gluing]].

[F3] The integral skein maps, null homotopies, degree-one pentagon contribution and mapping-cone quasi-isomorphism, relative to the disjoint parameter families, are [[thm-earring-skein-cobordisms-give-integral-exact-triangles]]. This includes the genuine reducible-cap calculation, rather than assuming an exact triangle from the existence of cylindrical Floer homology.

[F4] The primitive integral unlink bases, their finite planar compatibility and actual merge/split maps are [[thm-integral-earring-unlink-saddles-are-the-reduced-frobenius-operations]]. They use no unproved general split-link excision or arbitrary concordance formula.

[F5] The reduced Frobenius cube convention is [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]] and [[def-reduced-khovanov-cohomology-of-a-knot]]. Its signed differential is checked in [[lem-khovanov-cube-differential-squares-to-zero]]. The finite-filtration spectral sequence is [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]].

## Proof

**Given:** The finite based ordered diagram, full AC and the actual marked analytic data. Every parameter construction below is finite; the analytic suppliers carry their declared AC uses.

1.1 **The multi-saddle parameter spaces and their entire boundary.** Use the resolution labels of the reflected diagram, with an edge increasing one coordinate. Write $C_v$ for the actual based-link complex of that planar resolution. For $v<w$, let $S$ be its set of changed crossings, $k=|S|$. Put one standard saddle at time $\tau_j$ in each of its disjoint crossing balls; collisions of times are allowed, since the spatial balls are disjoint. Divide simultaneous translation out of $\mathbb R^S$, giving a parameter space of dimension $k-1$. Its broken compactification is constructed as follows. A boundary chart is indexed by an ordered partition $S=B_1\sqcup\cdots\sqcup B_l$: retain the centered finite times within each block, and give successive block centers gaps $T_r$, with boundary coordinate $q_r=e^{-T_r}\ge0$. At $q_r=0$ the corresponding cylinder is broken. Refining a block gives the corner charts. On chart overlaps centering changes a gap by a smooth bounded function of the retained block times, so $q_r$ changes by a smooth positive factor; two successive subdivisions give the same ordered gaps. These are manifold-with-corners charts. They cover a compact space: in any sequence normalize one time, pass to a fixed order of the finitely many labels, and select successive gaps which are bounded or diverge to positive infinity. The bounded clusters give finite centered limits after subdivision into their own bounded/divergent clusters, and there are at most $k$ labels. This proves sequential compactness in these finite partition charts; their countable coordinate basis and Hausdorff gap coordinates give compactness. Its facets are exactly the two nonempty ordered blocks. Such a facet is the product of the two smaller saddle parameter spaces, with the intermediate resolution as its cut; higher corners are their ordered iterates. Actual metrics are the fixed saddle metrics translated to these times, with product critical collars between separated blocks. Use their existing product metrics on every boundary chart and extend over the remaining compact interior by a finite partition in the convex cone of positive metrics. Here the background compatibility can be made literal. Put the planar resolution curves and the saddle surfaces in projection-plane times time; a local saddle has graph $t=x^2-y^2$ and normal coordinate $z=0$. The constant viewing-normal vector $\partial_z$ is a nonzero normal section on every such panel and every unchanged planar strand strip. Fix the product normal model on the separate earring annulus. Thus the normal splitting in [F2] uses the SAME section on every cube face, rather than separately chosen graph-spine sections. The sheet cover is cut along the SAME vertical marking arcs, outside all crossing balls. Construct the exterior determinant line by the degree-one angular Thom clutch around the fixed marking rectangle; it is the fixed product line outside the crossing balls and the fixed trivial line inside each ball, since the rectangle misses them. On the normal tube use the explicit common sheet gluing $\rho(v)w=v\bar w$ of [F2], with these normal coordinates. Restriction at an intermediate resolution, and commuting two disjoint saddles, now preserve these very transition functions and their determinant trivializations. Hence all backgrounds and all corner identifications agree as actual gluing data. Relative perturbations from [F2], by induction on $k$, therefore agree on all corners. [F1, F2, given, construct]

2.1 **The total differential and the exact edge signs.** Orient $\mathbb R^S/\mathbb R$ by the ordered crossing coordinates together with the positive simultaneous-translation direction. Retain the parameter orientation line instead of making separate arbitrary signs on its faces. At vertex $v$ tensor $C_v$ with the top exterior line $E_v=\bigwedge^{|v|}\mathbb Z^{\{j:v_j=1\}}$, of parity $|v|$. For an edge increasing $j$, identify the line map with insertion of $e_j$ and reorder into increasing crossing order. Its sign is exactly $(-1)^{\sum_{i<j}v_i}$. For a larger $S$, use the analogous ordered exterior insertion and the parameter orientation line to define the signed zero-dimensional count $D_{wv}$. Include the vertex differential as $D_{vv}$. The relative grading shift makes each total map odd: its unshifted parity is $1-k$, from its $k-1$ parameters and the even local saddle degree, whereas exterior insertion changes parity by $k$. A one-dimensional parameter moduli space has only end-trajectory breaks and the two-block facets of step 1.1; it has no unlisted bubbles or extra class ends by [F2]. Ordered determinant excision identifies each boundary count with its corresponding composition $D_{wu}D_{uv}$. Its sign is precisely the exterior shuffle sign: move the ordered first block past the second in the exact sequence of their time-coordinate spaces, separating the positive gap and translation factors. For one element in each block this is the anticommutation $e_ie_j=-e_je_i$; for general blocks it is its repeated shuffle. Thus the algebraic boundary-zero identity is the coefficient of $D^2$ at every vertex pair. The finite direct sum $T=\bigoplus_v C_v\otimes E_v$ with $D=\sum_{v\le w}D_{wv}$ is an integral complex. Checkerboard boundary orientations of the planar regions orient all the surfaces consistently; their product determinant orientations are those of [F4]. If the skein labels are initially decreasing, reversing all labels contributes the fixed edge factor $(-1)^{j-1}$, removed by the vertex sign $(-1)^{\sum_j(j-1)v_j}$. The displayed increasing edge sign is therefore literal in [F5]'s convention. [F1, F2, F4, F5, step 1.1, construct, algebra]

3.1 **Why this total complex is the original instanton complex.** Leave one crossing unresolved and keep the other resolution parameters. The total complex obtained by resolving that crossing decomposes into its two face totals and their off-diagonal saddle-family map; by step 2.1 this is its actual mapping cone, with the indicated shifts. Use [F3]'s cone comparison on that crossing relative to every already fixed disjoint saddle family. Its components with other crossings changed are the counts over the same disjoint time families, with the local two-saddle homotopy and three-saddle pentagon inserted. Their boundary strata are exactly those already specified in [F3] and step 1.1. The relative perturbations agree on their common faces, and their boundary formulas are exactly the assertion that these components give a filtered chain map from the partially unresolved total to this cone. Filter both by the other crossings. On its associated graded this map is the vertexwise cone quasi-isomorphism of [F3]. A finite filtered comparison with quasi-isomorphic associated graded is itself a quasi-isomorphism: induct on the filtration length, use the short exact sequence of a final filtration piece and its quotient, and chase the long exact sequences in cohomology. No convergence of an infinite filtration is used. Resolve the crossings one at a time. This gives a composite quasi-isomorphism between $T$ and the original complex $C(K)$, including the zero-crossing case, which is the identity. Hence $H(T,D)\cong I^\natural(K;\mathbb Z)$. This is an actual filtered-cone construction, not an inference that matching vertex ranks determines the abutment. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **The first two pages.** Filter $T$ by $F^pT=\bigoplus_{|v|\ge p}C_v\otimes E_v$. Every count increases the number of resolved coordinates, so this is a bounded filtration by subcomplexes. On the associated graded the differential is just the vertex differential, hence $E_1=\bigoplus_v I^\natural(D_v;\mathbb Z)\otimes E_v$. Its first differential is exactly the one-crossing saddle map, with the insertion sign computed in step 2.1; all larger saddle sets increase filtration by at least two. By [F4], the ordered planar unlink groups have the primitive reduced Frobenius bases and every one of these actual saddle maps is multiplication on a merge or comultiplication on a split, with the identity on the remaining factors. The marked circle uses the one-dimensional reduced factor. The local tetrahedral smoothing chart interchanges its two planar pairings when the over- and under-strands are reflected; these are precisely the A- and B-resolutions of the reflected diagram in [F5]. Thus the identified signed first-page complex is the reduced integral Khovanov cube of $\overline D$, not merely a vector space with the same rank. Its cohomology is the stated reduced integral $E_2$ page. [F1, F4, F5, step 2.1, step 3.1, construct]

5.1 **Convergence and exact scope.** The filtration has only $n+1$ nonzero levels and the even and odd total chain groups are finite free abelian. Forget any finer instanton grading. To apply the ordinary integer-graded finite-filtration theorem literally, unroll this parity complex by $\widehat T^{2q+r}=T^r$, $r=0,1$, with the repeated differential, and reverse cohomological indices if using [F5] in its chain convention. Every integer degree has the same finite filtration bounds. The cycles, boundaries and pages are two-periodic, so [F5] applies degreewise and the result folds back to the two parity degrees. The uniform finite filtration length makes every differential with filtration change greater than $n$ vanish. Thus it gives a finite spectral sequence with finite total pages and abutment the associated graded of the induced finite filtration on $H(T,D)$. Step 3.1 identifies this abutment with $I^\natural(K;\mathbb Z)$ in the usual filtered-homology sense. All counts used their actual integral determinant orientations, exhaustive collars and all-class finiteness. Full AC is inherited from their analytic and bundle constructions; once these finite chain groups and maps exist, the filtration, exterior signs and finite exact-sequence arguments introduce no additional choice. The construction is for the fixed finite based diagram; neither an invariance theorem for its intermediate pages nor a sutured/KHI nonvanishing statement has been used or asserted. This proves every claim of the original Statement. [F1, F2, F3, F4, F5, step 2.1, step 3.1, step 4.1, construct] ∎
