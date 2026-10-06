# Frontier-41-ha-dt-29 — alpha step 1a prerequisite drift review

Reviewed all 29 A pages in `research/frontier-41-ha-dt-29-scope-ledger.json`, their batch manifests, page designs in `research/plan-differential-topology-track.md` and `research/plan-homological-algebra-track.md`, and the current `research/plan-spec.json`. The manifests and canonical page entries agree. Every direct dependency between scoped A pages is earlier than its consumer; no ordering change is indicated. No prerequisite edge or plan edit was applied.

The mathematical check follows each design's stated claims and hard-proof boundary against its transitive declared closure. The two nearby candidates not in their page closures are addressed explicitly below: the intersection page's item inventory does not use Chern or Pontryagin classes, and the regular-homotopy page's sphere-eversion proof uses ordinary homotopy of Stiefel manifolds rather than stable stems. Primary-source checks: [Cohen, *Immersions of Manifolds and Homotopy Theory*, §2.1, PDF pp. 6–8](https://math.stanford.edu/~ralph/immersions-final.pdf); [Fuchs–Schaumann–Schweigert, §§2.4 and 3.1, PDF pp. 10–15](https://arxiv.org/pdf/1612.04561). Remaining uncertainty is noted per page; the design's own proof and source obligations remain for the authoring stages.

### characteristic-class-obstructions-to-immersions-and-embeddings

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1419–1447` derives normal-bundle rank tests from DT-16, DT-19, DT-25–27 and the characteristic-class and bundle-classification suppliers, matching the manifest closure. The selected A prerequisites `intersection-pairings-self-intersection-and-euler-classes (order 531)`, `characteristic-numbers-and-cobordism-obstructions (order 553)`, `formal-immersions-and-the-smale-hirsch-theorem (order 565)`, and `isotopy-extension-and-embedding-theory-beyond-whitney (order 569)` all precede this page at order 571. The embedding caveat is explicit: the classes give necessary tests, not a classification. Remaining uncertainty: none about page-level prerequisite closure.

### characteristic-numbers-and-cobordism-obstructions

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1050–1079` requires intersection, cobordism, Thom/PT, cohomology, characteristic-class, Gysin, and stable-homotopy interfaces; each lies in the declared closure. `intersection-pairings-self-intersection-and-euler-classes (order 531)` and `pontryagin-thom-and-framed-cobordism (order 549)` precede this page at order 553. The design limits Pontryagin-number detection to rational oriented bordism and assigns the substantial Thom detection proof to its named suppliers. Remaining uncertainty: none about prerequisite closure; the source's normalization and Thom-theory seams remain authoring obligations.

### codimension-one-foliations-and-secondary-classes

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1541–1577` separates the Godbillon–Vey form calculation from concordance and the three-dimensional Novikov theorem. Differential forms, exterior calculus, Stokes, de Rham theory, characteristic forms, fundamental-group and cohomology interfaces, and foliation constructions are present in the declared closure. The selected edges `foliation-holonomy-and-the-holonomy-groupoid (order 573)` and `reeb-stability-and-global-foliation-constructions (order 575)` precede this page at order 577. The design retains the (C^2), compactness, orientation, coorientation, codimension-one and closed three-manifold hypotheses where needed. Remaining uncertainty: none about prerequisite closure.

### deligne-products-and-categorical-eilenberg-watts

VERDICT: no-drift

Evidence: `plan-homological-algebra-track.md:5860–6046` gives the finite-algebra construction, the right-exact universal property, explicit end/coend maps, and the Nakayama correction. The declared closure contains finite abelian categories, ends/coends, enriched categories, finite module duality, and the Eilenberg–Watts and Morita interfaces used by those constructions. `finite-abelian-categories-and-eilenberg-watts (order 923)` precedes this page at order 925. FSS's finite-category results and finite (co)end argument support this scope; the local design supplies the universal-map details rather than assuming completeness of finite module categories. Remaining uncertainty: none about prerequisite closure; supplied finite models and universal-object data remain explicit hypotheses.

### eilenberg-watts-theorem-and-natural-transformations

VERDICT: no-drift

Evidence: `plan-homological-algebra-track.md:5484–5579` proves the arbitrary-unital-ring statement from the action on (F(A)), the canonical comparison, canonical free presentations, and the transformation classification. Tensor products, free presentations, abelian exactness, limits/colimits, adjunctions, and flatness are all in the declared closure. This page is order 919 and has no selected A prerequisite. The left/right handedness, arbitrary-direct-sum condition, and right-flatness criterion are stated explicitly. Remaining uncertainty: none about prerequisite closure.

### exotic-smooth-structures-and-milnor-spheres

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1588–1631` separates the bundle construction, characteristic-number calculation, homotopy-sphere recognition, h-cobordism argument and homeomorphism step. The manifest closure includes the required Gysin, homotopy, characteristic-class, signature, cobordism and h-cobordism suppliers. The selected dependencies `intersection-pairings-self-intersection-and-euler-classes (order 531)`, `the-hirzebruch-signature-theorem (order 555)`, and `the-smooth-h-cobordism-theorem (order 561)` precede this page at order 579. The design explicitly excludes dimension four and leaves the order-28 classification non-load-bearing. Remaining uncertainty: none about closure; the Pontryagin sign convention must still match the named characteristic-class supplier.

### finite-abelian-categories-and-eilenberg-watts

VERDICT: no-drift

Evidence: `plan-homological-algebra-track.md:5750–5860` proves the finite-projective-generator realization and both right- and left-exact finite Eilenberg–Watts forms. The declared closure contains the finite-category definition, projective-cover results, finite-module duality, and the generator/Morita and tensor-category suppliers. `morita-bicategories-and-projective-generators (order 921)` precedes this page at order 923. The design does not assume arbitrary coproducts or projective covers outside its finite hypotheses. Remaining uncertainty: none about prerequisite closure.

### fixed-point-index-and-the-lefschetz-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:845–878` develops the graph–diagonal index and the alternating trace formula, including the orientation-local-system route for nonorientable manifolds. The closure includes intersection theory, vector-field index, transversality, degree, singular/cohomology operations, Poincaré duality and local coefficients; relative homology is also present transitively. `intersection-pairings-self-intersection-and-euler-classes (order 531)` and `vector-field-index-euler-characteristic-and-poincare-hopf (order 541)` precede this page at order 543. The (I-Df) sign convention and isolated-versus-nondegenerate distinction are explicit. Remaining uncertainty: none about prerequisite closure.

### foliation-holonomy-and-the-holonomy-groupoid

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1457–1487` uses Frobenius charts, transverse transport and flows to prove chart-chain independence, leafwise homotopy invariance and path composition, then defines the holonomy and monodromy groupoids. The declared closure contains the foliation/Frobenius, transversality, flow, quotient, covering-space and fundamental-group foundations named by the design. This page is order 573 and has no selected A prerequisite. Remaining uncertainty: none about prerequisite closure; the non-Hausdorff caveat is retained.

### formal-immersions-and-the-smale-hirsch-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1297–1330` decomposes the theorem into the disk extension, restriction lifting, handle induction and positive-codimension thickening steps. Handle filtrations, bundle monomorphisms, approximation/transversality, obstruction theory and vector-bundle classification lie in the declared closure. `handle-decompositions-duality-and-rearrangement (order 527)` precedes this page at order 565. The design keeps equal dimension to the open-source result and claims weak homotopy equivalence, not homotopy equivalence. Cohen's §2.1 proof uses the derivative map to bundle monomorphisms and derives the sphere-eversion application from the resulting homotopy classification. Remaining uncertainty: none about prerequisite closure.

### graded-eilenberg-watts-and-shift-coherence

VERDICT: no-drift

Evidence: `plan-homological-algebra-track.md:6047–6123` constructs the graded right action from coherent shift comparisons and proves the comparison using homogeneous free presentations; `6125–6233` limits the derived discussion to the existing bounded-complex results. Graded bimodules, bounded bimodule complexes, tensor categories and the ordinary Eilenberg–Watts/Morita constructions are in the declared closure. `eilenberg-watts-theorem-and-natural-transformations (order 919)` and `morita-bicategories-and-projective-generators (order 921)` precede this page at order 927. The exact equivariance condition on transformations is part of the statement. Remaining uncertainty: none about prerequisite closure.

### handle-cancellation-slides-and-elementary-moves

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:560–589` distinguishes geometric cancellation from algebraic matrix reduction and explicitly defers removal of surplus intersections to the Whitney trick. Intersection signs, collars, isotopy/tubes, Morse handles and flow data lie in the declared closure. `handle-decompositions-duality-and-rearrangement (order 527)` precedes this page at order 533. A unit algebraic coefficient is not treated as a geometric single intersection. Remaining uncertainty: none about prerequisite closure.

### handle-decompositions-duality-and-rearrangement

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:520–549` derives relative handles from adapted Morse data and states the collar, trajectory and nonempty-boundary conditions for rearrangement and endpoint-handle elimination. The manifest closure contains Morse functions, gradient-like fields, sublevel deformation, collars/orientations and cellular homology, matching the design. This page is order 527 and has no selected A prerequisite. Remaining uncertainty: none about prerequisite closure; the design's named boundary and connectedness conditions remain essential.

### intersection-pairings-self-intersection-and-euler-classes

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:764–793` uses geometric intersection, cup/cap duality, normal push-offs, Euler zeros and the top Stiefel–Whitney class; these suppliers are in the declared closure. The design's broader `Requires` line also names `chern-and-pontryagin-classes-by-splitting-and-complexification (order 366.039)`, which is not in this page's closure, but none of the listed A claims uses Chern or Pontryagin classes; those occur in later characteristic-number/signature designs. I therefore found no missing prerequisite for this A claim inventory and added no edge. This page is order 531 with no selected A prerequisite. Remaining uncertainty: none for the listed claims; adding characteristic-number claims here would require a fresh closure review.

### isotopy-extension-and-embedding-theory-beyond-whitney

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1378–1409` proves isotopy extension via velocity-field extension, compactly supported flow and the compact-source condition, then separates the embedding upgrade and its stable-range hypotheses. These DG and Whitney prerequisites lie in the declared closure. `the-whitney-trick-and-surgery-below-the-middle-dimension (order 559)` and `formal-immersions-and-the-smale-hirsch-theorem (order 565)` precede this page at order 569. The design does not claim metastable classification or remove knotting/deleted-product obstructions. Remaining uncertainty: none about prerequisite closure.

### morita-bicategories-and-projective-generators

VERDICT: no-drift

Evidence: `plan-homological-algebra-track.md:5580–5749` gives the bicategory coherence check, explicit projective-generator inverse construction, dual-basis isomorphism and invertible-bimodule criterion. Module Eilenberg–Watts, categorical generators, monoidal composition and adjunction data occur in the declared closure. `eilenberg-watts-theorem-and-natural-transformations (order 919)` precedes this page at order 921. The reconstruction uses supplied small projective generators and specified equivalence data, not arbitrary class-wide inverse choices. Remaining uncertainty: none about prerequisite closure.

### morse-homology-continuation-and-comparison

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:680–710` separates compactified continuation, chain-map, homotopy-independence and composition arguments, then uses the handle/cellular comparison and AT singular comparison. The closure contains the trajectory-moduli, smooth-dependence, flow/transversality, singular/relative and cellular-homology suppliers named by the design. `morse-trajectory-moduli-spaces-and-the-morse-differential (order 537)` precedes this page at order 539. Closedness and the noncompact properness caveat are explicit. Remaining uncertainty: none about prerequisite closure.

### morse-inequalities-and-the-handle-chain-complex

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:600–628` obtains the polynomial identity and relative form from finite handle filtrations, exact-sequence dimensions and the cellular/singular comparison. Those homological and chain-complex dependencies are in the declared closure. `handle-decompositions-duality-and-rearrangement (order 527)` and `handle-cancellation-slides-and-elementary-moves (order 533)` precede this page at order 535. The correction polynomial and coefficient-field dependence are stated explicitly. Remaining uncertainty: none about prerequisite closure.

### morse-trajectory-moduli-spaces-and-the-morse-differential

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:639–669` assumes a closed Morse–Smale pair for compactness up to breaking, proves the index-two boundary identification by a separate gluing step, and uses orientation lines rather than ambient orientability for integer signs. Stable/unstable manifolds, gradient-like fields, connections and collars are in the declared closure. This page is order 537 and has no selected A prerequisite. Remaining uncertainty: none about prerequisite closure; the design's compactness and gluing hypotheses remain load-bearing.

### pontryagin-thom-and-framed-cobordism

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:972–1001` supplies both directions of the framed-preimage/collapse correspondence, with fixed-codimension and stable statements distinguished. Cobordism, Thom spaces, regular values/tubes, homotopy groups and stable homotopy are in the declared closure. This page is order 549 and has no selected A prerequisite. The design keeps stable framed bordism as an AT interface and distinguishes actual from stable normal framing. Remaining uncertainty: none about prerequisite closure.

### reeb-stability-and-global-foliation-constructions

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1499–1530` distinguishes compact leaf plus finite holonomy in the local theorem from the stronger compact, connected, cooriented codimension-one global theorem; its proof also uses the foliation holonomy cover and covering theory. These prerequisites are in the declared closure. `foliation-holonomy-and-the-holonomy-groupoid (order 573)` precedes this page at order 575. Remaining uncertainty: none about prerequisite closure; the design records that the general local theorem has a narrower independent source base.

### regular-homotopy-and-sphere-eversion

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1341–1367` classifies the sphere case through Stiefel data and uses π₂(SO(3))=0 for eversion. Its `Requires` line also names `spectra-and-stable-homotopy-groups (order 366.0241)`, absent from this page's closure, but the listed claims use ordinary homotopy of Stiefel manifolds and no stable stems. Cohen, §2.1, PDF pp. 6–8, gives the complete Smale–Hirsch/Stiefel/π₂ argument and does not invoke spectra. `formal-immersions-and-the-smale-hirsch-theorem (order 565)` precedes this page at order 567. Remaining uncertainty: none for the listed claims; adding stable-stem computations would require a fresh closure review.

### smooth-surgery-traces-and-handle-trading

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1130–1160` requires actual framed embedded spheres, identifies the surgery trace as a ((p+1))-handle and separates below-middle connectivity improvement from the middle-dimensional obstruction. The declared closure includes handle theory, intersection, normal data, relative homology/homotopy, fundamental-group and bundle-classification interfaces. The selected prerequisites `handle-decompositions-duality-and-rearrangement (order 527)`, `intersection-pairings-self-intersection-and-euler-classes (order 531)`, and `handle-cancellation-slides-and-elementary-moves (order 533)` precede this page at order 557. The smooth four-dimensional limitation and deferred surgery exact sequence are explicit. Remaining uncertainty: none about prerequisite closure.

### the-hirzebruch-signature-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1089–1119` defines the middle form under the closed oriented (4k)-dimensional hypothesis, proves bordism invariance, and compares rational bordism genera using the characteristic-number spanning family. The declared closure includes cohomology, duality, characteristic classes, intersection theory and the characteristic-number page. `intersection-pairings-self-intersection-and-euler-classes (order 531)` and `characteristic-numbers-and-cobordism-obstructions (order 553)` precede this page at order 555. Pontryagin normalizations remain delegated to their named supplier. Remaining uncertainty: none about prerequisite closure.

### the-hopf-degree-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1012–1039` proves classification through the framed zero-dimensional cobordism count and inverse Pontryagin–Thom, not merely homotopy invariance of degree. PT, degree and homotopy-group foundations are in the declared closure. `pontryagin-thom-and-framed-cobordism (order 549)` precedes this page at order 551. Closedness, connectedness and orientability/mod-two alternatives are stated. Remaining uncertainty: none about prerequisite closure.

### the-smooth-h-cobordism-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1212–1241` lays out the handle normalization, middle-handle matrix, Whitney realization and final flow argument. Relative homology, duality, fundamental group and Whitney/surgery interfaces are present in the declared closure. Its selected A dependencies—`handle-decompositions-duality-and-rearrangement (order 527)`, `handle-cancellation-slides-and-elementary-moves (order 533)`, `morse-inequalities-and-the-handle-chain-complex (order 535)`, `smooth-surgery-traces-and-handle-trading (order 557)`, and `the-whitney-trick-and-surgery-below-the-middle-dimension (order 559)`—all precede this page at order 561. The design states simple connectivity and (n\ge5) at the point they are used. Remaining uncertainty: none about prerequisite closure.

### the-whitney-trick-and-surgery-below-the-middle-dimension

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1171–1201` separates opposite signs, the fundamental-group obstruction, clean embedded Whitney disks, framing extension and dimension range; it also decomposes representative existence from framing existence in surgery. Those homotopy, intersection, transversality and normal-data suppliers are in the declared closure. `handle-cancellation-slides-and-elementary-moves (order 533)` and `smooth-surgery-traces-and-handle-trading (order 557)` precede this page at order 559. Smooth dimension four is explicitly excluded. Remaining uncertainty: none about prerequisite closure.

### vector-field-index-euler-characteristic-and-poincare-hopf

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:803–833` proves local-index invariance, the zero-section intersection comparison, closed and outward-boundary Poincaré–Hopf, and the converse with its obstruction-theory interface. The declared closure contains Morse Euler theory, intersections, vector-field flow, degree, homology, duality and obstruction theory. `intersection-pairings-self-intersection-and-euler-classes (order 531)` and `morse-inequalities-and-the-handle-chain-complex (order 535)` precede this page at order 541. The boundary direction and gradient-sign conventions are explicit. Remaining uncertainty: none about prerequisite closure.

### whitehead-torsion-and-the-s-cobordism-theorem

VERDICT: no-drift

Evidence: `plan-differential-topology-track.md:1252–1286` uses the based universal-cover handle complex, its explicit contraction, Whitehead torsion and group-labelled Whitney realization. The h-cobordism, simple-homotopy/Whitehead-group and local-coefficient suppliers all occur in the declared closure. `the-smooth-h-cobordism-theorem (order 561)` precedes this page at order 563. The design records the unpublished-supplier gate, the opposite-boundary involution, and the (n\ge5) range. Remaining uncertainty: none about prerequisite closure; the listed publication gate remains for later workflow stages.

### `thom-spectra-and-unoriented-bordism-detection`

VERDICT: no-drift

Owner-approved additive scope amendment: add this Algebraic Topology A page at order 548.5 with its B companion at 548.6 in batch 30. Its only declared A-page prerequisite is published `thom-spaces-normal-data-and-collapse-maps` (order 547); its B page requires only its A page. The item-level proof inventory and a full 547-prerequisite-closure audit show no external item dependency outside that published closure. The DT-19 consumer at order 553 receives a backward A-page edge and local item edges to the moved combined MO/MSO prespectrum definition and the proved detection results. DT-9 at order 549 receives no edge. The new pair has no overlap with either external frontier and creates no page-order cycle.

This addendum records the owner-approved scope extension after the original 29-page Alpha review. It does not claim the later DT-19 or foliation proofs are already authored; their Step-1 item readiness is being repaired and must pass the normal gates.
