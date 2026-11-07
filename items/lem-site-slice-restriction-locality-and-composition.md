---
id: lem-site-slice-restriction-locality-and-composition
kind: lemma
title: Slice restriction, local cohomology effacement and composition
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-etale-fppf-topology-comparison-and-cohomology-models
- thm-long-exact-sequence-in-cohomology
- def-mapping-cone-of-a-chain-map
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

For a fixed small site with finite fibre products and final object, abelian sheafification is exact. Restriction to an object is exact, has an exact additive left adjoint, and preserves injectives. For each actual supplied resolution model, positive-degree object cohomology is locally zero and the higher direct images for a change to a coarser topology are sheafifications of object cohomology. Finite partial injective comparison and finite Cartan–Eilenberg rectangles prove the actual named-functor acyclic-model lemma and the natural composition spectral sequence for site direct images, with its usual edge maps. Neither a compatible double complex nor a comparison homotopy is assumed as extra data.

## Statement references

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[def-etale-fppf-topology-comparison-and-cohomology-models]] at the hypotheses stated there.

[F2] Short exact cochain complexes have the natural long exact cohomology sequence. [[thm-long-exact-sequence-in-cohomology]]

[F3] Mapping cones and their shifted complexes have the usual explicit cochain differential. [[def-mapping-cone-of-a-chain-map]]

## Proof

**Proof technique:** direct.

1.1 For an abelian presheaf P define P+(V) as the colimit of matching groups over covering sieves R⊂hV, with refinement maps. Covering sieves have finite intersections, so the index is filtered. Matching groups are limits and therefore preserve kernels and finite products. Filtered colimits of abelian groups preserve finite limits by finite representatives and finite relations. Thus plus and double-plus preserve finite limits. [F1, F2, F3, given, construct, algebra]

2.1 P+ is separated: a local equality of two classes is represented by equality on covering refinements, whose composites give a covering refinement over V by the topology's local-transitivity axiom. If P is separated, P+ is a sheaf. To avoid an arbitrary choice of representatives of a matching P+-family, index the refinement by ALL representatives of each given class, together with ALL covering refinements witnessing their overlap equalities. Every required index has a witness by the definition of its class. Taking all such indices gives an actual covering by local transitivity; no function choosing one witness in each fibre is required. On intersections the P-sections agree locally, hence agree because P is separated. They therefore specify a single matching P-family on the composite covering sieve, whose plus class is the required gluing. Uniqueness is separatedness. The same argument makes P++ a sheaf for arbitrary P. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 Every presheaf map P→F to a sheaf sends a matching family to its unique gluing; hence it factors uniquely through P++. Thus aP=P++ is left adjoint to inclusion. Kernels of abelian sheaves are presheaf kernels and cokernels are sheafifications of presheaf cokernels. Preservation of kernels together with the adjunction makes a exact; in particular sheafification preserves monomorphisms. This construction only uses set-indexed collections already in the fixed site universe and all finite-witness refinements, not arbitrary-index choice. [F1, F2, F3, step 2.1, given, construct, algebra]

4.1 Fix U∈C. Let j*:AbSh(C)→AbSh(C/U) be restriction. For F on C/U form the presheaf on C [F1, F2, F3, step 3.1, given, construct, algebra]

5.1 P_F(V)=⊕_(alpha:V→U) F(V,alpha). [F1, F2, F3, step 4.1, given, construct, algebra]

6.1 For beta:W→V the summand at alpha restricts to the summand at alpha beta using F's restriction. Define j!F=aP_F. A map P_F→G is exactly a collection of maps F(V,alpha)→G(V) compatible with every slice arrow; hence sheafification's adjunction gives naturally [F1, F2, F3, step 5.1, given, construct, algebra]

7.1 Hom_C(j!F,G)=Hom_(C/U)(F,j*G). [F1, F2, F3, step 6.1, given, construct, algebra]

8.1 If F→F' is a monomorphism of slice sheaves, its maps on every section group are injective. The direct sums P_F(V)→P_F'(V) are therefore injective, and exact sheafification preserves that monomorphism. Thus j! preserves monomorphisms. As a left adjoint it preserves cokernels; being additive, it is exact. Restriction itself preserves kernels, and it also preserves cokernels: a section locally in the image in C has the same local lifts on the corresponding slice, since every covering of an object V→U is an ambient covering of V and conversely. Thus j* is exact. [F1, F2, F3, step 7.1, given, construct, algebra]

9.1 If I is injective on C and F→F' is a slice monomorphism, the adjunction identifies extension of a map F→j*I with extension of j!F→I across the monomorphism j!F→j!F'. The injectivity of I gives that extension. Hence j*I is injective. A specific injective resolution I• of A therefore restricts to one computing Hq(U,A). [F1, F2, F3, step 8.1, given, construct, algebra]

10.1 A degree q>0 cohomology class on U is represented by a cycle s∈I^q(U). Exactness of the sheaf complex says that its germ in the quotient sheaf ker(dq)/im(d(q−1)) is zero. The definition of the sheaf-image quotient means there is a covering of U on which s has local primitives. The class therefore restricts to zero on that covering. This proves the locality statement without choosing a primitive simultaneously on infinitely many objects: the existence of local primitives is exactly the covering assertion. If a covering with actual representatives is desired, take all pairs consisting of an arrow and a primitive of its restricted cycle. [F1, F2, F3, step 9.1, given, construct, algebra]

11.1 For a morphism of sites whose direct image is restriction to a coarser topology on the same category, apply the given resolution and take cohomology sheaves after that restriction. Kernels remain sectionwise kernels; cokernels are sheafifications of presheaf cokernels. Thus Rq epsilon_* is the coarse sheafification of the presheaf U↦Hq_fine(U,A). In particular it vanishes exactly when each object class vanishes on a coarse covering. The fine sheafification of this higher direct image is always zero for q>0, by the preceding fine-local effacement. [F1, F2, F3, step 10.1, given, construct, algebra]

12.1 Let 0→A→I^0→I^1→… and 0→B→J^0→J^1→… be actual resolutions, with the J^r injective, and let u:A→B be specified. For every fixed N there is a comparison through degree N+1 lifting u. Extend A→B→J^0 across A→I^0 by injectivity of J^0. If the maps f^0,…,f^r have been constructed, d_J f^r kills ker(d_I^r)=im(d_I^(r−1)); hence it defines a map im(d_I^r)→J^(r+1). Extend it to I^(r+1) by injectivity of J^(r+1). Repeating at most N+1 times uses only finitely many extension witnesses. Source terms need not be injective. [F1, F2, F3, step 11.1, given, construct, algebra]

13.1 Two comparisons lifting the same u are homotopic through any fixed degree. In degree0 their difference kills A and therefore factors through im(d_I^0); extend that factor to h^1:I^1→J^0. Inductively, after h^1,…,h^r have been found, the difference f^r−g^r−d_J h^r kills im(d_I^(r−1)); factor it through im(d_I^r) and extend to h^(r+1):I^(r+1)→J^r. Then f−g=d_J h+h d_I in the required degree range. This proves uniqueness on the resulting cohomology groups and compatibility with composition by the same finite argument. It does NOT choose one infinite sequence of lifts or homotopies. A degree-q assertion uses a sufficiently long finite segment; two choices or two longer segments induce the same degree-q map. [F1, F2, F3, step 12.1, given, construct, algebra]

14.1 The dual assertion for supplied projective resolutions follows by lifting a map from P_r through the surjection onto the required cycles, and lifting a difference to construct h_r:P_r→Q_(r+1). Again a fixed finite degree range uses finitely many projective lifting witnesses. In particular one does not need a new compatible choice of the infinitely many terms of a complete real Tate resolution: that resolution and its arrows are fixed data, and only a finite relevant segment is involved in any fixed cohomological degree. [F1, F2, F3, step 13.1, given, construct, algebra]

15.1 Here are the finite constructions behind the spectral sequences, rather than an unexplained 'compatible double complex'. Fix a bounded-below complex K, a total degree N and enough adjacent degrees to compute its cycles and boundaries. There are only finitely many terms K^p, boundaries B^p, cycles Z^p and cohomology objects H^p(K) in this window. Use the actual resolution models for the functors being derived on those objects, and choose only their finite initial segments. For the injective calculation those are injective segments. A finite rectangle, not an infinite family of new choices, suffices. [F1, F2, F3, step 14.1, given, construct, algebra]

16.1 We recall the injective horseshoe explicitly. For 0→B→Z→H→0, take the supplied monomorphisms B→I_B^0 and H→I_H^0. Extend B→I_B^0 across B→Z, then combine it with Z→H→I_H^0. This embeds Z in I_B^0⊕I_H^0. Its cokernel fits into the same short exact sequence of the three cokernels, by a direct kernel/image chase. Repeat finitely for the needed heights. This gives an injective resolution segment of Z with a degreewise SPLIT short exact sequence of resolution segments. Apply the same construction to 0→Z^p→K^p→B^(p+1)→0. The horizontal maps factor through the boundary resolutions; their square is zero since the boundary inclusion followed by the next boundary projection is zero. The vertical maps commute with them by the horseshoe chain maps. These are the actual finite Cartan–Eilenberg rectangles. [F1, F2, F3, step 15.1, given, construct, algebra]

17.1 An additive functor preserves the split row sequences. Filtering the total rectangle first by columns gives E1^{p,q}=R^q Phi(K^p); filtering it by its split cycle/boundary rows gives E2^{p,q}=R^p Phi(H^q(K)), with total abutment H^{p+q}(R Phi K). For the second formula the usual reindexing puts cohomology degree of K in q. In a fixed total degree only finitely many positions occur because K is bounded below and right-derived degrees are nonnegative. Increasing the rectangle by two adjacent diagonals does not change the group or differential in that degree. To check this independently of the chosen resolution segments, compare two finite rectangles using the preceding finite comparison construction on the finitely many boundary/cohomology resolutions and the split horseshoes. Its homotopies give the same cohomology edge maps and successive differentials. An acyclic-cone check is equally explicit: at its first nonzero degree d, d_C^d is injective; a map C^d→J^d extends over d_C^d to h^(d+1) by injectivity. Subtract d h+h d and repeat through N+1. Thus a comparison of the two truncated injective models is unique on the required total cohomology. No infinite branch of comparisons is selected. [F1, F2, F3, step 16.1, given, construct, algebra]

18.1 Consequently these exact couples and their differentials are well defined degree by degree, natural under actual maps of complexes. Equivalently they are the exact couples obtained from the canonical truncation triangles for K and its actual right-derived image. The latter description identifies their abutment and canonical edge maps with the named right-derived functor, not a new functor manufactured by the finite rectangles. This is the needed first-quadrant spectral sequence. There is no assertion that a bare Gamma-acyclic resolution can be spent for some other functor. [F1, F2, F3, step 17.1, given, construct, algebra]

19.1 If K is an exact resolution of A and its terms are Phi-acyclic, the short exact sequences 0→Z^r→K^r→Z^(r+1)→0 and their actual derived long exact sequences give [F1, F2, F3, step 18.1, given, construct, algebra]

20.1 R^j Phi(Z^(r+1))=R^(j+1) Phi(Z^r) for j>0, [F1, F2, F3, step 19.1, given, construct, algebra]

21.1 and coker(Phi(K^r)→Phi(Z^(r+1)))=R^1 Phi(Z^r). [F1, F2, F3, step 20.1, given, construct, algebra]

22.1 Thus H^q(Phi K)=R^q Phi(A), naturally. Only q successive dimension shifts are used. For a bounded-below complex with Phi-acyclic terms, the first filtration of the finite Cartan–Eilenberg construction has no positive q rows. The canonical derived-functor unit Phi K→R Phi K is therefore a quasi-isomorphism. This proves, rather than assumes, the acyclic-model comparison for the NAMED functor. It also makes all actual alternative models of the same right-derived object compatible through that canonical unit. No global selection of a comparison between every pair of complexes is asserted. [F1, F2, F3, step 21.1, given, construct, algebra]

23.1 For left-exact functors F and G, suppose F sends injectives to G-acyclic objects, as separately proved in the application. On an actual injective resolution I of A, RF(A) is represented by F I, whose terms are G-acyclic. The proved acyclic-complex lemma computes RG(RF A) by G F I, which also computes R(GF)A on the SAME actual I. Their comparison is the actual derived-functor unit, a quasi-isomorphism by the lemma, not an assumed composition isomorphism. Applying the finite Cartan–Eilenberg construction to K=F I gives the required composition spectral sequence and its canonical edge maps. If F is a site direct image right adjoint to an exact inverse image, it sends injectives to injectives: extend a map into FJ across a monomorphism by adjunction and injectivity of J. Thus the stronger injective preservation holds for the actual finite direct-image and topology-change functors used here. Slice restriction has the separately proved exact left adjoint, so it likewise preserves injectives. These facts provide the required named-functor/object acyclicity; it is not inferred from global-section acyclicity. [F1, F2, F3, step 22.1, given, construct, algebra]

24.1 For the commuting site maps in topology change, the two un-derived composite direct images agree on underlying presheaves. Apply both composites to ONE actual fine injective resolution. Every intervening direct image preserves injectives by the preceding adjunction argument. Their two composite derived models are therefore literally the same complex, and the composition spectral-sequence identifications above are the actual natural ones. This supplies precisely the derived-composition identity used in Vn/Cn. [F1, F2, F3, step 23.1, given, construct, algebra] ∎


## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
