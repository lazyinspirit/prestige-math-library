# frontier-33 batch 9 scaffold checkpoint

Authorized outputs: this file, frontier-33-batch-9.pages.json, and frontier-33-batch-9.coverage.json. No content, plan, workflow, or other batch edits.

The manifest and plan agree on orders 366.049/366.05 and the preceding products examples prerequisite. Design AV-5 names AV-1–AV-4, height, normalization, transcendence-degree interfaces instead of the spec's transitive reduction; retain spec and leave adjudication to drift. Design source pagination is inaccurate for the retrieved Milne v6.10: §5j begins printed p.115, §6p p.156, §9a p.198.

Conventions: fixed algebraically closed k, classical separated varieties admitting finite affine covers; irreducibility is explicit. Empty dimension is minus infinity. Fibre means reduced classical closed-point fibre. The image/generic-fibre formula requires irreducible source, or a separate maximum over source components; no global formula for arbitrary reducible source. Local rings here are at closed points.

Source reading in progress: browser fetch verified complete indexed PDFs at https://www.jmilne.org/math/CourseNotes/AG.pdf (231 pages, v6.10), https://www.math.purdue.edu/~arapura/preprints/algeom.pdf (41 pages), https://math.mit.edu/classes/18.721/ag-jul20.pdf (189 pages). Shell curl cannot resolve hosts. Do not fabricate a byte/hash fetch stamp. Browser passages, not old run evidence, are the mathematical reading evidence.

Read Arapura Chapter 4 §§4.1–4.3 (printed pp.30–33); qualification: 4.1.6–7 need equidimensionality/irreducibility, and §4.3 must exclude zero eigenvectors and justify irreducibility before a fibre calculation. Milne §§5j, 6p and 9a–b read in bounded passages; remaining source gaps must be reread before claiming full harvest. Milne 9.9(c) is not a safe general target-semicontinuity supplier; preserve only the projective conclusion, using linear avoidance and closed projection. Vakil https://math.stanford.edu/~vakil/0708-216/216class38.pdf, proof of 3.1 and Exercise 3.B, pp.4–5, verifies that route. Need scaffold closed projection if absent from published suppliers.

Verified algebra suppliers: thm-affine-domain-dimension-transcendence-degree; cor-height-plus-quotient-dimension-affine-domain. Product supplier thm-affine-variety-product-coordinate-ring proves the domain assertion for irreducible affine factors. General classical variety definition exists as def-classical-algebraic-prevariety-regular-maps-and-varieties. The affine finite-component item is draft: do not call it already-published.

Next: complete source passages, enumerate harvest with exact result dispositions, scaffold geometric lemmas (finite open cover dimension, zero-dimensional finiteness, equation bounds, local parameters, generic affine normalization bridge, projective cone/avoidance/closed projection), check dependency contracts and id collisions, then run all task validators. No readiness claim yet.

## def-dimension-noetherian-topological-space

Claim/conventions: For a Noetherian space T, dim T is the supremum of lengths of strict chains of nonempty irreducible closed subsets; dim empty = -infinity. A chain of one subset has length zero. Infinite dimension remains possible.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l Definition 3.39 and §2m Definition 2.48.

Dependencies: def-noetherian-topological-space, def-irreducible-topological-space-and-subset.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-dimension-finite-union-components

Claim/conventions: For T a finite union of closed subsets T_i, dim T=max_i dim T_i; the empty union has dimension -infinity.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115, finite-component dimension convention.

Dependencies: def-dimension-noetherian-topological-space.

Route/rationale: Every irreducible closed subset lies in one member of a finite closed cover; apply to the largest term of a chain.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-chain-dimension-open-cover

Claim/conventions: For any open cover T=union U_i, dim T=sup_i dim U_i. This includes finite covers and the empty space.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l chain interpretation; §5j p.115.

Dependencies: def-dimension-noetherian-topological-space.

Route/rationale: A chain meets any open meeting its smallest member in a strict chain: nonempty opens of an irreducible space are dense. Conversely take closures of chains in an open; closure intersected with the open recovers each member.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-classical-variety-noetherian-components

Claim/conventions: Every classical variety is Noetherian and has finitely many irreducible components; each closed or open subvariety again admits a finite affine cover.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115.

Dependencies: def-classical-algebraic-prevariety-regular-maps-and-varieties, def-noetherian-topological-space, lem-algebraic-set-finite-irreducible-components.

Route/rationale: Restrict descending closed chains to a finite affine cover; use the affine component decompositions and take closures. Noetherian spaces have quasi-compact open subsets, proved by ascending-open stabilization.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-dimension-classical-variety

Claim/conventions: Define dim X by chain dimension and dim_x X as the maximum dimensions of irreducible components containing the closed point x. Pure dimension d means every component has dimension d.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115; §3c Note 3.13 p.63, with the AV-5 local-dimension convention.

Dependencies: def-dimension-noetherian-topological-space, lem-dimension-finite-union-components, lem-classical-variety-noetherian-components.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-affine-variety-dimension-coordinate-ring

Claim/conventions: For an affine algebraic set X, topological dim X equals Krull dim k[X] if X is nonempty. For X empty both are interpreted here as -infinity; state the zero-ring convention explicitly rather than overwrite a supplier.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Definition 3.39 and chain/prime dictionary §3l.

Dependencies: def-dimension-classical-variety, thm-affine-nullstellensatz-correspondence, def-krull-dimension-of-a-ring.

Route/rationale: The Nullstellensatz reverses chains between irreducible closed subsets and prime ideals of k[X]. Handle the zero ring separately.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-general-variety-function-field-charts

Claim/conventions: For irreducible classical X, fraction fields of all nonempty affine charts identify canonically, defining k(X). For dominant f:X to Y between irreducible classical varieties, affine restrictions induce k(Y) into k(X); dominance means dense image.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §§5j–k pp.115–116.

Dependencies: lem-classical-variety-noetherian-components, thm-function-field-independent-affine-open, lem-dominant-map-pullback-function-fields.

Route/rationale: Any two affine charts meet; inside their intersection choose a nonempty affine chart using a principal-open basis. Use the affine field comparison and cocycle compatibility. Restrict a dominant map to nonempty affine charts; density follows by continuity and density of the source chart.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-dimension-equals-transcendence-degree

Claim/conventions: For every irreducible classical variety X, dim X=trdeg_k k(X).

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115; Arapura §4.1.

Dependencies: thm-affine-variety-dimension-coordinate-ring, lem-general-variety-function-field-charts, lem-chain-dimension-open-cover, thm-affine-domain-dimension-transcendence-degree.

Route/rationale: Every affine chart has the same fraction field; invoke the established algebraic dimension theorem and the open-cover chain lemma. No new algebraic normalization proof.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-dimension-nonempty-open-subset

Claim/conventions: A nonempty open U of an irreducible classical variety X has dim U=dim X. A proper closed subvariety has strictly smaller dimension.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115.

Dependencies: thm-dimension-equals-transcendence-degree, lem-general-variety-function-field-charts, def-dimension-classical-variety.

Route/rationale: Use identical function fields for open invariance; a chain in a proper irreducible closed subset extends by X, then use finite components.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-dimension-affine-and-projective-space

Claim/conventions: For every n>=0, dim A^n=dim P^n=n.

Source: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Example 4.1.1.

Dependencies: thm-dimension-equals-transcendence-degree, lem-chain-dimension-open-cover, lem-standard-projective-opens-are-affine-spaces.

Route/rationale: Polynomial fraction field has transcendence basis the coordinates; standard projective affine cover gives the second assertion.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-dimension-birational-invariant

Claim/conventions: Irreducible classical varieties with isomorphic nonempty open subvarieties have equal dimension; equivalently birational varieties do.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5l, Corollary 5.39.

Dependencies: lem-dimension-nonempty-open-subset, thm-birational-equivalence-function-fields, lem-general-variety-function-field-charts.

Route/rationale: Apply open invariance to common isomorphic opens. The affine birational theorem applies after restricting both sides to affine charts.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-dimension-product-varieties

Claim/conventions: Products of nonempty classical varieties exist and dim(X times Y)=dim X+dim Y; products of irreducible factors are irreducible.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 5.35, §5j.

Dependencies: thm-dimension-equals-transcendence-degree, lem-classical-variety-noetherian-components, lem-dimension-finite-union-components, lem-chain-dimension-open-cover, thm-affine-variety-product-coordinate-ring, def-product-varieties-universal-property.

Route/rationale: Glue products of affine charts on their open overlaps by the universal property; separatedness follows from equalizers on product charts. Irreducible affine products have domain coordinate rings. Tensor two normalization polynomial subalgebras; their tensor injects over k and the full tensor is finite over it. Use trdeg and pass to component products.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-codimension-irreducible-subvariety

Claim/conventions: For nonempty irreducible closed Z in irreducible X define codim_X Z=dim X-dim Z. For a reducible ambient space any global dimension difference must be distinguished from local prime height.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l and §5j.

Dependencies: def-dimension-classical-variety.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-principal-subvariety-codimension-one

Claim/conventions: If X is irreducible affine and f in k[X] is nonzero and not a unit, V(f) is nonempty and every component has dimension dim X-1.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 3.42; Arapura Theorem 4.1.6 with irreducible hypothesis.

Dependencies: thm-affine-variety-dimension-coordinate-ring, def-codimension-irreducible-subvariety, thm-krull-principal-ideal-theorem, cor-height-plus-quotient-dimension-affine-domain, thm-affine-nullstellensatz-correspondence.

Route/rationale: Minimal primes over (f) have height <=1 by PIT and >0 since the ring is a domain. Height-plus-quotient gives the exact dimension; a proper ideal lies in a maximal ideal.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-variety-equations-dimension-bound

Claim/conventions: In irreducible classical X of dimension n, every nonempty component of the common zero set of r regular functions has dimension >=n-r, including r=0.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 3.45.

Dependencies: thm-affine-variety-dimension-coordinate-ring, lem-dimension-nonempty-open-subset, thm-krull-height-theorem, cor-height-plus-quotient-dimension-affine-domain.

Route/rationale: Choose an affine chart meeting the component away from the other components, apply height and the affine dimension formula; r=0 is immediate.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-dimension-local-ring-codimension-closure

Claim/conventions: For irreducible classical X and closed point x, dim O_X,x=dim X=codim_X {x}. This is a closed-point assertion, not a scheme generic-point convention.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l, chain-height interpretation.

Dependencies: thm-dimension-equals-transcendence-degree, def-codimension-irreducible-subvariety, thm-local-ring-affine-variety-localization, cor-height-plus-quotient-dimension-affine-domain, def-height-of-a-prime-ideal.

Route/rationale: Choose an affine chart at x; quotient by its maximal ideal is k and has dimension zero. Apply the height formula and the local-ring identification. Inherit Choice where used by suppliers.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-classical-point-cut-out-by-dimension-many-functions

Claim/conventions: For irreducible X of dimension n and closed point x there is an affine neighborhood U and n regular functions whose common zero set in U is {x}.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 3.47 specialized to a point.

Dependencies: lem-dimension-local-ring-codimension-closure, thm-krull-height-theorem-converse, lem-classical-variety-noetherian-components.

Route/rationale: Choose local parameters using the algebra supplier, clear denominators, then remove finitely many unwanted components of the zero set. Each unwanted component avoids x because x is already a minimal component.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-zero-dimensional-classical-variety-finite

Claim/conventions: A classical variety has dim <=0 exactly when its underlying set is finite, including the empty set. A nonempty irreducible zero-dimensional variety is one point.

Source: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura §4.1 opening; Milne §9b.

Dependencies: def-dimension-classical-variety, lem-classical-variety-noetherian-components, thm-affine-variety-dimension-coordinate-ring, thm-affine-nullstellensatz-correspondence.

Route/rationale: A zero-dimensional irreducible chart has no proper irreducible closed subset; each closed point must be the whole component. Conversely finite T1 spaces have only singleton irreducible subsets.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-constructible-subset-variety

Claim/conventions: A locally closed subset is U intersect Z with U open and Z closed. A constructible subset is a finite union of locally closed subsets; the empty union is allowed.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9a p.200.

Dependencies: lem-classical-variety-noetherian-components.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-constructible-boolean-operations

Claim/conventions: Constructible subsets are closed under finite unions, intersections, complements, restriction to a subspace, and extension from a locally closed subspace.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9a p.200, paragraph preceding Proposition 9.6.

Dependencies: def-constructible-subset-variety.

Route/rationale: Distribute finite unions and intersections; complement of U intersect Z is (X minus U) union (X minus Z). Do not copy the displayed complement formula in the PDF literally.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-constructible-dense-contains-open

Claim/conventions: If a constructible subset C has nonempty irreducible closure, C contains a nonempty open subset of that closure.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 9.6.

Dependencies: def-constructible-subset-variety.

Route/rationale: Use the finite locally closed decomposition; irreducibility forces one closed factor to contain the closure, and its open factor meets it.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-dominant-affine-map-normalization-over-open

Claim/conventions: For a dominant map X to Y of irreducible affine varieties, let r=trdeg_{k(Y)} k(X). There exists nonzero a in k[Y] and t_1,...,t_r in k[X]_a, algebraically independent over k[Y]_a, with k[X]_a module-finite over k[Y]_a[t_1,...,t_r]. This is a geometric application of the earlier normalization theorem.

Source: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf — Vakil Theorem 12.4.1 proof, pp.354–356 (July 27 2024).

Dependencies: lem-general-variety-function-field-charts, cor-noether-normalisation-module-finiteness, thm-coordinate-ring-principal-open.

Route/rationale: Apply the algebra supplier to k[X] tensor_k[Y] k(Y); clear denominators of the normalization elements and monic equations of the finite set of algebra generators. Finitely many denominators suffice. Algebraic normalization itself remains owned by the algebra page.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-dominant-affine-image-contains-principal-open

Claim/conventions: The image of a dominant map of irreducible affine varieties contains a nonempty principal open of the target.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.1; Vakil proof of 12.4.1.

Dependencies: lem-dominant-affine-map-normalization-over-open, thm-lying-over, thm-affine-nullstellensatz-correspondence.

Route/rationale: Above y in D(a), choose a maximal ideal (m_y,t_1,...,t_r) of the polynomial subalgebra. Lying over gives a prime upstairs; the integral residue domain over k is a field equal to k. Thus it represents a classical point over y.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-chevalley-constructible-image-varieties

Claim/conventions: Every regular morphism of classical varieties maps every constructible subset to a constructible subset. In particular its image is constructible.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.7.

Dependencies: def-constructible-subset-variety, lem-constructible-boolean-operations, lem-constructible-dense-contains-open, lem-dominant-affine-image-contains-principal-open, lem-classical-variety-noetherian-components.

Route/rationale: Reduce to locally closed irreducible source pieces and affine charts. Find a nonempty open in the image closure using the affine open-image lemma; remove its inverse image and use Noetherian induction on proper closed subsets. Finite unions finish.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-dominant-morphism-image-contains-open

Claim/conventions: For a dominant morphism X to irreducible Y of classical varieties, f(X) contains a nonempty open of Y.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.1 and Proposition 9.6.

Dependencies: thm-chevalley-constructible-image-varieties, lem-constructible-dense-contains-open, lem-general-variety-function-field-charts.

Route/rationale: Combine constructibility of the image and the dense-constructible lemma.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-fibre-dimension-at-point-classical

Claim/conventions: For a classical morphism f:X to Y and closed point y define X_y=f^{-1}(y) with its reduced closed-subvariety structure, and dim X_y with empty value -infinity. On affine charts this is the zero set of m_y k[X], with coordinate ring modulo its radical.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Arapura §4.2; Milne §9b.

Dependencies: def-dimension-classical-variety, def-morphism-classical-varieties, thm-affine-nullstellensatz-correspondence.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-fibre-dimension-lower-bound

Claim/conventions: For dominant f:X to Y between irreducible classical varieties, every nonempty irreducible component of X_y has dimension at least dim X-dim Y. No lower bound is asserted for an empty fibre.

Source: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Theorem 4.2.1; Milne Theorem 9.9(b).

Dependencies: def-fibre-dimension-at-point-classical, lem-classical-point-cut-out-by-dimension-many-functions, lem-variety-equations-dimension-bound, lem-dimension-nonempty-open-subset, lem-general-variety-function-field-charts.

Route/rationale: Cut y out locally by dim Y functions, pull back and apply the equation bound on affine source charts meeting the chosen fibre component.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-generic-fibre-dimension

Claim/conventions: For dominant f:X to Y between irreducible classical varieties there exists a nonempty open U contained in f(X) such that every fibre over U is nonempty of pure dimension dim X-dim Y.

Source: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf — Vakil Theorem 12.4.1 and Corollary 12.4.2, pp.354–356; Arapura 4.2.1.

Dependencies: thm-fibre-dimension-lower-bound, lem-dominant-affine-map-normalization-over-open, lem-dominant-affine-image-contains-principal-open, lem-classical-variety-noetherian-components, lem-chain-dimension-open-cover, cor-transcendence-degree-tower-additivity, thm-affine-domain-dimension-transcendence-degree.

Route/rationale: Cover the inverse image of an affine target chart by finitely many nonempty affine source charts, each still dominant. Normalize each over a principal open and intersect these base opens. Fibre component coordinate rings are integral over quotients of polynomial rings in r variables, so their transcendence degrees are <=r. The lower bound makes every component exactly r; affine chart coverage handles the whole fibre.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-dimension-of-image-plus-generic-fibre

Claim/conventions: For irreducible X and arbitrary f:X to Y, Z=closure f(X) is irreducible and dim X=dim Z+r where r is the common fibre dimension on a nonempty open of Z. For reducible X use dim X=max_i(dim closure f(X_i)+r_i), with a separately chosen generic open for each component.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9b opening and Theorem 9.9.

Dependencies: thm-generic-fibre-dimension, lem-dimension-finite-union-components, lem-classical-variety-noetherian-components.

Route/rationale: Apply the dominant theorem to X to Z; for reducible source apply it component by component. Do not use a single generic fibre over the full image for a reducible source.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-quasi-finite-morphism-classical

Claim/conventions: A regular morphism of classical varieties is quasi-finite when every closed-point fibre is finite, including empty fibres. Such morphisms are of finite type: on affine charts finite k-generation also gives finite generation over the target coordinate ring.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §8c Quasi-finite maps p.185; Arapura Corollary 4.2.2.

Dependencies: def-fibre-dimension-at-point-classical.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-dominant-equal-dimension-generically-finite

Claim/conventions: For dominant maps of irreducible varieties, equal dimension is equivalent to a finite function-field extension and to quasi-finiteness over some nonempty target open.

Source: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Lemma 4.1.3 and Corollary 4.2.2.

Dependencies: thm-generic-fibre-dimension, lem-zero-dimensional-classical-variety-finite, def-quasi-finite-morphism-classical, lem-general-variety-function-field-charts, cor-transcendence-degree-tower-additivity.

Route/rationale: A finitely generated algebraic field extension is finite; generic dimension zero is equivalent to finite fibres. State inseparable extensions are allowed and do not identify geometric fibre cardinality with degree.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-affine-intersection-dimension-bound

Claim/conventions: For irreducible closed X,Y in A^n, every nonempty component Z of X intersect Y has dim Z>=dim X+dim Y-n.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 5.36.

Dependencies: thm-dimension-product-varieties, lem-variety-equations-dimension-bound, lem-diagonal-affine-variety-cut-out-by-coordinate-differences.

Route/rationale: Identify intersection with the locus of n coordinate differences on irreducible X times Y; apply the equation bound.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-affine-cone-dimension-projective-variety

Claim/conventions: For nonempty projective algebraic set X, dim C(X)=dim X+1. Over each nonempty standard projective chart the punctured cone is its product with G_m; if X is irreducible so is C(X).

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §6p proof of Theorem 6.43 and Corollary 6.47.

Dependencies: thm-dimension-product-varieties, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset, lem-dimension-finite-union-components, def-affine-cone-projective-set, lem-projective-variety-cone-irreducible.

Route/rationale: Use (point,nonzero scaling) as inverse chart coordinates; then take components, whose cones contain the vertex in their closure.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-projective-hypersurface-dimension-drop

Claim/conventions: If X is irreducible projective of positive dimension and homogeneous f of positive degree does not vanish identically on X, X intersect V(f) is nonempty of pure dimension dim X-1.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 6.43, printed p.156.

Dependencies: lem-affine-cone-dimension-projective-variety, thm-principal-subvariety-codimension-one, lem-dimension-nonempty-open-subset.

Route/rationale: Apply the affine principal result to the cone. A positive-degree homogeneous element is not a unit in the cone ring; dimension >=1 of the intersection rules out only the vertex. Transfer purity on punctured-cone charts.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-dimension-theorem-intersection-projective

Claim/conventions: For irreducible closed X,Y in P^n, every nonempty component Z of X intersect Y has dim Z>=dim X+dim Y-n. If dim X+dim Y>=n, the intersection is nonempty.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 6.47.

Dependencies: lem-affine-cone-dimension-projective-variety, lem-affine-intersection-dimension-bound.

Route/rationale: Use affine cones in A^(n+1); their intersection contains the vertex and has dimension at least dim X+dim Y-n+1. This is positive under the nonemptiness hypothesis. Use cone charts for the component bound.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-projective-dimension-linear-avoidance

Claim/conventions: For closed Z in P^N and 0<=r<=N, dim Z<r iff some linear subspace of dimension N-r avoids Z. Include r=0, where this means Z is empty.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 6.48 and Lemma 6.49.

Dependencies: lem-projective-hypersurface-dimension-drop, thm-dimension-theorem-intersection-projective, lem-dimension-finite-union-components, cor-dimension-affine-and-projective-space.

Route/rationale: Over infinite k choose hyperplanes avoiding the finitely many components and lower dimension successively. The union of finitely many proper dual linear subspaces cannot be the full dual: their defining linear forms have nonzero product. The converse is the intersection theorem.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## lem-relative-projective-homogeneous-equations

Claim/conventions: For classical Y the product Y times P^N exists by gluing its standard affine charts. If Y is affine with coordinate ring A, closed subsets are exactly zero loci of finitely generated homogeneous ideals in A[T_0,...,T_N]. A fibre is empty iff its specialized ideal contains every monomial of some degree.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §6q Lemma 6.51(a,b), p.158.

Dependencies: thm-dimension-product-varieties, thm-hilbert-basis-theorem, thm-affine-nullstellensatz-correspondence, lem-standard-projective-opens-are-affine-spaces.

Route/rationale: Homogenize equations on each standard chart and multiply by suitable powers of its distinguished coordinate to extend the vanishing to other charts; finite generation follows from Hilbert basis. For empty fibres use affine Nullstellensatz on the cone to obtain powers of all T_i, hence all monomials of sufficiently high degree.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-classical-projective-projection-closed

Claim/conventions: For every classical Y, the projection Y times P^N to Y is a closed map.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 7.22, pp.164–165.

Dependencies: lem-relative-projective-homogeneous-equations, thm-nakayama-lemma.

Route/rationale: Work over affine Y. For a fibre outside the image choose degree d with all monomials in the specialized ideal. The degree-d quotient is a finite A-module M with M/m_y M=0. Local Nakayama gives M_m_y=0; finite generators yield a neighborhood where M vanishes. All higher degrees vanish there, so all its fibres are empty. No proper-morphism theorem is imported.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-projective-morphism-classical

Claim/conventions: A morphism f:X to Y is projective here if it factors as a closed immersion X into Y times P^N followed by projection for some finite N. Closed immersion means an isomorphism onto a reduced closed subvariety.

Source: https://math.stanford.edu/~vakil/0708-216/216class38.pdf — Vakil Class 38 §3, proof of Theorem 3.1.

Dependencies: lem-relative-projective-homogeneous-equations, def-morphism-classical-varieties.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## thm-upper-semicontinuity-fibre-dimension-projective

Claim/conventions: For a projective morphism of classical varieties, with no irreducibility or surjectivity assumption, the set of y with dim X_y>=r is closed for every integer r.

Source: https://math.stanford.edu/~vakil/0708-216/216class38.pdf — Vakil Class 38 Exercise 3.B and its preceding proof, pp.4–5.

Dependencies: def-projective-morphism-classical, def-fibre-dimension-at-point-classical, thm-classical-projective-projection-closed, lem-projective-dimension-linear-avoidance.

Route/rationale: For r<=0 this is the closed image. For 1<=r<=N, if dim X_y<r choose an (N-r)-plane avoiding that fibre. Its intersection with X has closed projection missing y, and over the complementary neighborhood every fibre still avoids the plane and has dimension <r. For r>N the locus is empty.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-closed-family-irreducible-equal-dimensional-fibres

Claim/conventions: If f:X to irreducible Y is closed and surjective and every fibre is irreducible of fixed dimension r, then X is irreducible of dimension dim Y+r.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 9.11.

Dependencies: thm-generic-fibre-dimension, thm-fibre-dimension-lower-bound, lem-classical-variety-noetherian-components, lem-dimension-finite-union-components.

Route/rationale: A component dominating Y has dimension <=dim Y+r by generic fibres. At least one such component has equality since otherwise on a common nonempty open all component intersections have smaller dimension than the irreducible fibre. Its fibre intersections have dimension >=r everywhere by the lower bound, so contain every fibre, forcing that component to be X.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## def-module-finite-affine-classical-map

Claim/conventions: For affine classical X,Y a regular map is module-finite if k[X] is finite as a k[Y]-module. This is the affine criterion only; the global finite-morphism interface is left to its owning later page.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Definition 2.39 and Lemma 8.19.

Dependencies: thm-affine-morphisms-coordinate-ring-anti-equivalence.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## rem-equidimensionality-hypotheses

Claim/conventions: All base fields are algebraically closed. Lower and pure-generic fibre bounds use irreducible source and target; image formulas for reducible source are componentwise. Projective target-semicontinuity applies to all components and empty fibres. Local dimensions at closed points differ from dimensions of residue fields and from generic-point conventions. Generic finiteness allows inseparability.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §§5j, 9b; Arapura Chapter 4.

Dependencies: thm-fibre-dimension-lower-bound, thm-generic-fibre-dimension, thm-upper-semicontinuity-fibre-dimension-projective, cor-dimension-of-image-plus-generic-fibre, lem-dimension-local-ring-codimension-closure, thm-dominant-equal-dimension-generically-finite.

Route/rationale: Definition; subsequent items discharge claimed properties.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## ex-dimensions-coordinate-cross-components

Claim/conventions: V(xy) in A^2 has two affine-line components, global dimension one and local dimension one at every closed point.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Arapura §4.1 hypersurface dimensions.

Dependencies: lem-dimension-finite-union-components, def-dimension-classical-variety, cor-dimension-affine-and-projective-space.

Route/rationale: Factor xy; compute both components and use finite-union dimension.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## ex-fibres-hyperbola-projection

Claim/conventions: Compare xy=1 projected to x (one point for x nonzero, empty at zero) with A^2 projected to x (affine-line fibres everywhere).

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Elementary specialization of fibre definition and affine dimensions.

Dependencies: def-fibre-dimension-at-point-classical, cor-dimension-affine-and-projective-space.

Route/rationale: Solve the equations and exhibit explicit affine-coordinate inverses.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## ex-family-hyperbolas-degenerate-fibre

Claim/conventions: For projection from V(xy-t) in A^3 to A^1_t, fibres at t nonzero are G_m and the fibre at zero is the coordinate cross; every fibre has pure dimension one.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Elementary polynomial family governed by the principal-section theorem.

Dependencies: thm-principal-subvariety-codimension-one, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset, lem-dimension-finite-union-components, def-fibre-dimension-at-point-classical.

Route/rationale: Eliminate t; for nonzero t solve y=t/x, and for zero factor xy.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## ex-fibre-dimension-jump

Claim/conventions: The image is D(u) union {(0,0)}; fibres are one point for u nonzero, A^1 at (0,0), and empty at (0,v) with v nonzero. Image is constructible but not locally closed.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Chapter 9 opening p.198; Arapura Example 4.2.4.

Dependencies: def-fibre-dimension-at-point-classical, def-constructible-subset-variety, cor-dimension-affine-and-projective-space.

Route/rationale: Solve u=x and v=xy; the image is dense but contains no neighborhood of the origin, so is not locally closed.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cex-image-morphism-not-closed

Claim/conventions: Refute that every regular morphism has closed image: project xy=1 to x, obtaining D(x) in A^1.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Example 7.2.

Dependencies: def-constructible-subset-variety, def-fibre-dimension-at-point-classical.

Route/rationale: Coordinate solution gives image D(x); a nonzero polynomial cannot vanish on this infinite set without vanishing everywhere.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cex-finite-fibres-not-finite-morphism

Claim/conventions: The affine open immersion G_m into A^1 has finite fibres but k[t,t^-1] is not finite over k[t].

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §8c Quasi-finite maps; affine open immersion comparison.

Dependencies: def-quasi-finite-morphism-classical, def-module-finite-affine-classical-map, def-fibre-dimension-at-point-classical.

Route/rationale: A finite list of Laurent polynomials has bounded negative exponents; its k[t]-span cannot contain all t^-m. Equivalently t^-1 is not integral over k[t].

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## ex-intersection-two-projective-curves

Claim/conventions: Two distinct lines in P^2 meet in a point. The curves V(XY) and V(XZ) share the line X=0 and also meet at [1:0:0]. Compare with irreducible distinct plane curves, whose intersection is nonempty finite.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Concrete consequence of projective intersection bound.

Dependencies: thm-dimension-theorem-intersection-projective, lem-dimension-finite-union-components, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset.

Route/rationale: Compute the two displayed equations; for irreducible distinct curves any positive-dimensional component would equal both curves.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cex-dimension-empty-set-minus-infinity-needed

Claim/conventions: Refute dim empty=0 with the assertion that dim T>=0 iff T is nonempty, using an empty hyperbola fibre. The -infinity convention also makes max over an empty family literal. Other conventions exist; no uniqueness claim.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Boundary calculation from the declared dimension convention.

Dependencies: def-dimension-noetherian-topological-space, def-fibre-dimension-at-point-classical.

Route/rationale: Compare the absent chain in the empty set with the length-zero chain at a point.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cex-affine-intersection-bound-singular-ambient

Claim/conventions: In the three-dimensional cone X1 X4-X2 X3=0, the two planes X2=X4=0 and X1=X3=0 meet only at the vertex, violating a naive ambient-dimension-three intersection bound.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Remark 5.37(b).

Dependencies: thm-principal-subvariety-codimension-one, cor-dimension-affine-and-projective-space, lem-affine-intersection-dimension-bound.

Route/rationale: Compute the plane intersection and ambient hypersurface dimension; 0<2+2-3.

Status: scaffold recorded and harvested. Final validation and remaining blockers are recorded at the end of this file.

## cor-maximal-chains-irreducible-variety-dimension

Claim/conventions: For irreducible classical X, every maximal proper irreducible closed Z has codimension one. Every maximal chain of nonempty irreducible closed subsets of X has length dim X.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollaries 3.43–3.44, pp.76–77

Dependencies: thm-principal-subvariety-codimension-one, lem-dimension-nonempty-open-subset, lem-classical-variety-noetherian-components, lem-zero-dimensional-classical-variety-finite, def-codimension-irreducible-subvariety

Route: On an affine chart meeting Z choose a nonzero function vanishing on Z. Maximality forces Z to be a component of its zero set after taking closure. Apply the principal theorem. Successive maximal inclusions drop dimension by one, and a minimal member is a closed point.

Status: scaffold complete; included in final gate run below.

## cor-projective-equations-dimension-bound

Claim/conventions: For irreducible projective X of dimension d and r homogeneous polynomials of positive degree, every nonempty component of their common zero set in X has dimension at least d-r. If d>=r the common zero set is nonempty, including r=0.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 6.44, p.156

Dependencies: lem-projective-hypersurface-dimension-drop, lem-variety-equations-dimension-bound, lem-affine-cone-dimension-projective-variety, lem-dimension-finite-union-components

Route: Apply the affine equations bound on the cone and subtract one on nonvertex components. If d>=r, all cone components have positive dimension, so cannot be just the vertex.

Status: scaffold complete; included in final gate run below.

## cor-module-finite-affine-map-quasi-finite

Claim/conventions: Every module-finite map between affine classical varieties is quasi-finite.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 8.28 and Lemma 8.29, p.185

Dependencies: def-module-finite-affine-classical-map, def-quasi-finite-morphism-classical, def-fibre-dimension-at-point-classical, thm-affine-nullstellensatz-correspondence

Route: Each fibre has coordinate ring a quotient of a finite-dimensional k-algebra. Distinct maximal ideals are pairwise comaximal; the elementary Chinese remainder construction makes the number of them at most the vector-space dimension. Include that finite-ideal CRT argument inline.

Status: scaffold complete; included in final gate run below.

## ex-linear-system-fibre-dimension-rank-loci

Claim/conventions: Let A(y) be an m by n matrix of regular functions on a classical variety Y and W={(y,x):A(y)x=0}. Each fibre has dimension n-rank A(y); the locus dim W_y>=r is cut out by the minors of size n-r+1 (with the evident all/empty boundary conventions). No irreducibility of W or global dimension formula is asserted.

Source: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Example 9.10, pp.201–202

Dependencies: def-fibre-dimension-at-point-classical, cor-dimension-affine-and-projective-space, lem-relative-projective-homogeneous-equations

Route: At a fixed y row elimination identifies the kernel with affine space of dimension n-rank. The rank bound is equivalent to vanishing minors; prove that equivalence using a largest invertible minor and elimination. Equations define W in affine charts of Y times A^n.

Status: scaffold complete; included in final gate run below.

## Final scaffold checkpoint — 2026-09-07

46 A items and 10 B items, all with explicit deps. No split: A remains below 60. The B items are dependency leaves. All changed repository artifacts are the three task-authorized batch files. This is a scaffold, not authored or published mathematics.

Source reading is complete for the exact selected ranges enumerated in coverage.json: 86 heading/result entries, four PDF source entries representing three independent authors (Milne, Arapura, Vakil). Milne and Arapura are independent full lecture-note treatments with their tables of contents read. Vakil supplies a complete generic normalization proof and the projective semicontinuity argument. Artin was fetch-located only, not read as mathematical evidence, and is not included in the coverage or backing count. No replacement URL or original_url is needed: the four recorded URLs serve readable full PDFs through the browser. Milne 9c and 6n–o are not claimed as read; flatness is owned by the algebra supplier, while Grassmannian geometry is already on the preceding pair. The design’s page intervals are navigation hints superseded by the retrieved edition’s exact headings.

Final refinements: the product theorem explicitly uses cor-noether-normalisation-module-finiteness and explains reducible affine chart products; the normalization bridge writes trdeg_{k(Y)} k(X); the closed-family proof first removes nondominating component images. The finite-map definition cites Milne 8.17’s affine case. The linear-system example uses thm-dimension-product-varieties instead of the unnecessary relative-projective-equations lemma. The local-dimension definition is the prescribed AV-5 convention, explained by Milne Note 3.13; the earlier §4h locator was corrected. Three cheap corollaries (maximal chains, several projective equations, finite affine maps have finite fibres) have full claims, supplier IDs, sources and proof routes recorded above. No source result was removed to clear a source gate.

Gate receipts at the final scaffold snapshot:

- coverage-checklist with --require-destination: PASS, 86 entries, no errors or warnings (rerun after the final locator correction).
- content-policy --manifest-only for batch 9: PASS, 56 items, no errors or warnings.
- whole-run content-policy --manifest-only research/frontier-33-batch-*.pages.json: FAIL at the snapshot with 787 scoped items, two missing dependencies in another batch: thm-kernel-range-annihilator-identities depends on def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces. Concurrent owners may subsequently change these; no edits here.
- validate-plan research/plan-spec.json: PASS; 511 pages have empty item lists, so this does not certify the proposed item graph.
- validate-plan on a temporary copy overlaying all current frontier-33 manifests: FAIL, 12 errors at that snapshot. Two concern this batch: the A page’s declared requires closure lacks zariski-topology-on-prime-spectra (supplies def-noetherian-topological-space and def-irreducible-topological-space-and-subset) and schemes-subschemes-and-morphisms-locally-of-finite-type (supplies def-classical-algebraic-prevariety-regular-maps-and-varieties). These are valid established dependencies, retained. The drift stage must adjudicate the plan edges; this task forbids changing requires or plan structure. Remaining overlay failures concern other owners, not batch-9 items.
- url-sweep --coverage research/frontier-33-batch-9.coverage.json --out /tmp/frontier33-b9/url-liveness.json --recover --fail-on-dead: FAIL, 0/4 command-line live, all curl error 6 (DNS resolution), zero recovered archives. The recovery tool’s 'no archived snapshot' text is not evidence archives are absent: the network could not resolve hosts. Browser fetches of the same texts succeeded; changing citations to unrelated sources would not repair this execution-environment failure.
- source-fetch-check --coverage research/frontier-33-batch-9.coverage.json --stamp: FAIL, 0/4 stamps; EAI_AGAIN for every source. No fabricated fetch_verified byte count or hash was written.

Exact failed command-line URLs: https://www.jmilne.org/math/CourseNotes/AG.pdf ; https://www.math.purdue.edu/~arapura/preprints/algeom.pdf ; https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf ; https://math.stanford.edu/~vakil/0708-216/216class38.pdf . Full text was browser-read, but mechanical URL and full-body fetch gates remain unresolved.

Next authorized stage action: drift owner resolves the two prerequisite-closure omissions; rerun URL recovery and full-body stamping where DNS is available, then rerun whole-run overlay validation after other batches settle. Batch 9 is NOT marked ready while these gates fail. No plan/workflow transitions, publication, or independent-review gates were changed.

## Step-3 fix pass

- Finding `alpha-e-step3:batch-9:def-projective-morphism-classical-source-link` — **applied**. The review's direct-repair finding requires `def-projective-morphism-classical` to cite Vakil Class 38 §3 rather than Milne. The live manifest still carried the two URLs transposed: that record named Vakil but linked Milne, while `def-dimension-noetherian-topological-space` named Milne §§2m/3l but linked Vakil. Corrected both manifest references, preserving their statements, `deps` arrays, provenance, item ids, and proof routes. Changed scaffold records: `def-projective-morphism-classical`; `def-dimension-noetherian-topological-space` (the latter is the paired stale link, not a new mathematical finding).
- Evidence: the coverage ledger assigns Milne §2m Definition 2.48 and §3l Definition 3.39 to `def-dimension-noetherian-topological-space`, and assigns Vakil Class 38 §3, proof of Theorem 3.1 and Exercise 3.B to the projective route. Direct full-PDF inspection on 2026-09-07 confirms Milne Definition 2.48 (PDF p.54/indexed p.53) defines dimension by chains of irreducible closed subsets, while Vakil Class 38 pp.3–4 uses the projective factorization into $\mathbf P^n_Y$ and gives Exercise 3.B on projective fibre-dimension semicontinuity. The four coverage URLs carry full-PDF `fetch_verified` receipts; `source-fetch-check` reports 4/4.
- Validation after this source-link-only repair: `coverage-checklist --require-destination` passes (1 page, 86 harvest rows); whole-run `content-policy --manifest-only research/frontier-33-batch-*.pages.json` passes (923 scoped items); `manifest-deps` passes (923 items, 0 normalizations/errors); `source-fetch-check` passes (4/4); and `validate-plan research/plan-spec.json --repo . --max-items 60` passes (844 pages with item lists, no cycle, forward-reference, B-page-dependency, or unresolved-id error). The updated manifest parses as JSON and its item-kind/dependency audit remains 56 items with every explicit `deps` array and no schema-prefix mismatch.
- Receipt refresh/recovery: a forced 2026-09-07 `source-fetch-check --stamp --force` retried all four exact URLs but the sandbox Node resolver returned `EAI_AGAIN` for each. It wrote no replacement receipt and left the existing 2026-09-06 full-PDF stamps intact. Direct browser opens of those exact URLs succeed in this session, including the 231-page Milne PDF, 41-page Arapura PDF, 850-page *Rising Sea*, and 5-page Class 38 PDF, so this is a command-environment DNS failure rather than a dead source URL; no alternate or archive substitution is warranted. The ordinary stamp gate still reports 4/4 fetch-verified.
- Unresolved obligations/next action: no batch-9 finding from this review remains. The historical failed whole-run overlay and DNS records above describe the prior scaffold snapshot and are not modified; this fix pass neither changes plan structure nor makes an engine-stage transition. No finding was pushed back, and no coverage heading/disposition, coverage source entry, page split, plan edge, or mathematical claim changed.

## Scaffold-fix round

- Finding `frontier-33-scaffold-closure:dimension-constructible-images-and-dimensions-of-fibres:lem-dimension-finite-union-components-source-reference` — **applied**. This is the sole `work[]` entry for a batch-9 page; the separate `dual-spaces-adjoint-operators-and-annihilators` finding belongs to batch 2 and was not touched.
- Evidence and source verification: J. S. Milne, *Algebraic Geometry*, v6.10, [§2m “Dimension,” 2.49, printed p.54](https://www.jmilne.org/math/CourseNotes/AG.pdf) was opened as the live 231-page PDF on 2026-09-07. Immediately after Definition 2.48, 2.49 states that the dimension of a variety is the maximum of the dimensions of its irreducible components. This is the exact harvested heading already marked `included` for `lem-dimension-finite-union-components`; the locator is also retained in the Milne coverage source record. The lemma's finite-closed-cover wording is carried by its recorded direct proof route: an irreducible closed subset of a finite closed union lies in one cover member. No unfamiliar replacement claim or proof dependency was introduced.
- Change: in `frontier-33-batch-9.pages.json`, `lem-dimension-finite-union-components` now cites Milne §2m 2.49 p.54 at the Milne PDF rather than mislabelling that result while linking Vakil Class 38. In coverage, the existing 2.49 harvest row retains its `included` disposition and item id and now records the precise support bridge. Item id, kind, statement, explicit `deps` array, provenance, proof strategy, page split, and plan edges are unchanged.
- Validation after repair: JSON parsing passed; `node tools/coverage-checklist.mjs research/frontier-33-batch-9.coverage.json --require-destination` passed (1 page, 86 harvested results, 0 errors/warnings); whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` passed (923 scoped items, 0 errors/warnings); `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` passed (no item-level cycle, forward-reference, B-page-dependency, or unresolved-id error); and `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-9.coverage.json` passed (4/4 sources fetch-verified). The direct browser fetch above separately rechecked the changed Milne URL and exact locator.

## Owner-authorized order repair

The owner instructed the active Frontier 33 supervisor to resolve workflow
blockers autonomously under `CLAUDE.md`. The batch-9 closure failure could not
be repaired by adding the requested scheme prerequisite at order `366.049`:
`schemes-subschemes-and-morphisms-locally-of-finite-type` was at `366.063`, so
that would have created a forward prerequisite.

The supervisor therefore applied the smallest acyclic block reorder validated
against the fully populated plan. The adjacent sheaf/scheme block formerly at
orders `366.057`–`366.064` now occupies `366.049`–`366.056`; the adjacent
dimension-through-plane-curves block formerly at `366.049`–`366.056` now
occupies `366.057`–`366.064`. Internal order in both blocks is unchanged.
`presheaves-sheaves-stalks-and-sheafification` now follows the preceding
products/Grassmannians examples page, and this batch's A page now declares the
earlier scheme examples page plus `zariski-topology-on-prime-spectra` as its
exact backward prerequisites. No item ID, item dependency, statement, proof,
or source changed.

## Step-5 authoring

Authoring uses the current manifest at orders 366.057/366.058 and its owner-repaired prerequisites; the generated task/design order is stale. The independent review and verdict files are preserved. Exact current supplier statements were read, including affine-only conventions and Choice. Sources were opened through the browser at all four exact coverage URLs; shell curl returned DNS error 6 and supplies no new fetch receipt. No historical run is used as mathematical evidence. Contracts are evidence of local proofs, not review verdicts.

### Authored `def-dimension-noetherian-topological-space`

Claim and conventions: For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l Definition 3.39 and §2m Definition 2.48

Dependencies: def-noetherian-topological-space, def-irreducible-topological-space-and-subset.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-dimension-finite-union-components`

Claim and conventions: If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §2m 2.49 p.54: maximum over irreducible components

Dependencies: def-dimension-noetherian-topological-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-chain-dimension-open-cover`

Claim and conventions: For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l chain interpretation; §5j p.115

Dependencies: def-dimension-noetherian-topological-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-classical-variety-noetherian-components`

Claim and conventions: Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115

Dependencies: def-classical-algebraic-prevariety-regular-maps-and-varieties, def-noetherian-topological-space, lem-algebraic-set-finite-irreducible-components, thm-hilbert-basis-theorem.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-dimension-classical-variety`

Claim and conventions: For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115 and §3c Note 3.13 p.63; local-dimension convention prescribed by AV-5 design

Dependencies: def-dimension-noetherian-topological-space, lem-dimension-finite-union-components, lem-classical-variety-noetherian-components.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-affine-variety-dimension-coordinate-ring`

Claim and conventions: For a nonempty affine algebraic set $X$, $\dim X=\dim k[X]$, where the right side is Krull dimension. For this comparison only, extend ring dimension to the zero ring by $\dim(0)=-\infty$; then the equality also holds for $X=\varnothing$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Definition 3.39 and chain/prime dictionary §3l

Dependencies: def-dimension-classical-variety, thm-affine-nullstellensatz-correspondence, def-krull-dimension-of-a-ring.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-general-variety-function-field-charts`

Claim and conventions: For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §§5j–k pp.115–116

Dependencies: lem-classical-variety-noetherian-components, thm-function-field-independent-affine-open, lem-dominant-map-pullback-function-fields.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-dimension-equals-transcendence-degree`

Claim and conventions: If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115; Arapura §4.1

Dependencies: thm-affine-variety-dimension-coordinate-ring, lem-general-variety-function-field-charts, lem-chain-dimension-open-cover, thm-affine-domain-dimension-transcendence-degree.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-dimension-nonempty-open-subset`

Claim and conventions: If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5j p.115

Dependencies: thm-dimension-equals-transcendence-degree, lem-general-variety-function-field-charts, def-dimension-classical-variety.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-dimension-affine-and-projective-space`

Claim and conventions: For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$.

Sources: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Example 4.1.1

Dependencies: thm-dimension-equals-transcendence-degree, lem-chain-dimension-open-cover, lem-standard-projective-opens-are-affine-spaces.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-dimension-birational-invariant`

Claim and conventions: Birational irreducible classical varieties have equal dimension. In particular, if $U\subseteq X$ and $V\subseteq Y$ are nonempty open subvarieties and $U\cong V$, then $\dim X=\dim Y$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §5l, Corollary 5.39

Dependencies: lem-dimension-nonempty-open-subset, thm-birational-equivalence-function-fields, lem-general-variety-function-field-charts.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-dimension-product-varieties`

Claim and conventions: Products of nonempty classical varieties exist in the category of classical varieties, and $\dim(X\times_kY)=\dim X+\dim Y$. If both factors are irreducible, their product is irreducible.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 5.35, §5j

Dependencies: thm-dimension-equals-transcendence-degree, lem-classical-variety-noetherian-components, lem-dimension-finite-union-components, lem-chain-dimension-open-cover, thm-affine-variety-product-coordinate-ring, def-product-varieties-universal-property, cor-noether-normalisation-module-finiteness.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-codimension-irreducible-subvariety`

Claim and conventions: For a nonempty irreducible closed subvariety $Z$ of an irreducible classical variety $X$, define $\operatorname{codim}_X Z=\dim X-\dim Z$. These are finite integers. In a reducible ambient variety a difference of global dimensions must not be substituted for the height of a local prime; the containing component matters.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l and §5j

Dependencies: def-dimension-classical-variety.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-principal-subvariety-codimension-one`

Claim and conventions: Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 3.42; Arapura Theorem 4.1.6 with irreducible hypothesis

Dependencies: thm-affine-variety-dimension-coordinate-ring, def-codimension-irreducible-subvariety, thm-krull-principal-ideal-theorem, cor-height-plus-quotient-dimension-affine-domain, thm-affine-nullstellensatz-correspondence.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-variety-equations-dimension-bound`

Claim and conventions: Let $X$ be an irreducible classical variety of dimension $n$, and let $f_1,\ldots,f_r$ be global regular functions, with $r\ge0$. Every nonempty irreducible component $Z$ of their common zero set has $\dim Z\ge n-r$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 3.45

Dependencies: thm-affine-variety-dimension-coordinate-ring, lem-dimension-nonempty-open-subset, thm-krull-height-theorem, cor-height-plus-quotient-dimension-affine-domain.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-dimension-local-ring-codimension-closure`

Claim and conventions: If $X$ is an irreducible classical variety and $x$ is a closed point, then $\dim\mathcal O_{X,x}=\dim X=\operatorname{codim}_X\{x\}$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §3l, chain-height interpretation

Dependencies: thm-dimension-equals-transcendence-degree, def-codimension-irreducible-subvariety, thm-local-ring-affine-variety-localization, cor-height-plus-quotient-dimension-affine-domain, def-height-of-a-prime-ideal.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-classical-point-cut-out-by-dimension-many-functions`

Claim and conventions: If $X$ is irreducible of dimension $n$ and $x\in X$ is a closed point, there are an affine neighborhood $U$ of $x$ and $n$ regular functions on $U$ whose common zero set is exactly $\{x\}$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 3.47 specialized to a point

Dependencies: lem-dimension-local-ring-codimension-closure, thm-krull-height-theorem-converse, lem-classical-variety-noetherian-components.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-zero-dimensional-classical-variety-finite`

Claim and conventions: A classical variety $X$ has $\dim X\le0$ if and only if its underlying set is finite. The empty set is included. A nonempty irreducible variety of dimension zero is one point.

Sources: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura §4.1 opening; Milne §9b

Dependencies: def-dimension-classical-variety, lem-classical-variety-noetherian-components, thm-affine-variety-dimension-coordinate-ring, thm-affine-nullstellensatz-correspondence.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-maximal-chains-irreducible-variety-dimension`

Claim and conventions: In an irreducible classical variety $X$, a maximal proper nonempty irreducible closed subset $Z$ has codimension one. Every maximal chain of nonempty irreducible closed subsets has length $\dim X$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollaries 3.43–3.44, pp.76–77

Dependencies: thm-principal-subvariety-codimension-one, lem-dimension-nonempty-open-subset, lem-classical-variety-noetherian-components, lem-zero-dimensional-classical-variety-finite, def-codimension-irreducible-subvariety.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-constructible-subset-variety`

Claim and conventions: A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9a p.200

Dependencies: lem-classical-variety-noetherian-components.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-constructible-boolean-operations`

Claim and conventions: Constructible subsets are closed under finite unions, finite intersections and complements. If $C$ is constructible in $X$ and $S\subseteq X$ is any subspace, $C\cap S$ is constructible in $S$. If $S$ is locally closed and $C$ is constructible in $S$, then $C$ is constructible in $X$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9a p.200, paragraph preceding Proposition 9.6

Dependencies: def-constructible-subset-variety.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-constructible-dense-contains-open`

Claim and conventions: If a constructible subset $C\subseteq X$ has nonempty irreducible closure $Z$, then $C$ contains a nonempty open subset of $Z$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 9.6

Dependencies: def-constructible-subset-variety.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-dominant-affine-map-normalization-over-open`

Claim and conventions: Let $f:X\to Y$ be dominant between irreducible affine varieties, put $A=k[Y]\subseteq B=k[X]$, and let $r=\operatorname{trdeg}_{k(Y)}k(X)$. There are $0\ne a\in A$ and elements $t_1,\ldots,t_r\in B_a$, algebraically independent over $A_a$, such that $B_a$ is module-finite over $A_a[t_1,\ldots,t_r]$.

Sources: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf — Vakil Theorem 12.4.1 proof, pp.354–356 (July 27 2024)

Dependencies: lem-general-variety-function-field-charts, cor-noether-normalisation-module-finiteness, thm-coordinate-ring-principal-open.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-dominant-affine-image-contains-principal-open`

Claim and conventions: The image of a dominant morphism $f:X\to Y$ between irreducible affine varieties contains a nonempty principal open subset of $Y$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.1; Vakil proof of 12.4.1

Dependencies: lem-dominant-affine-map-normalization-over-open, thm-lying-over, thm-affine-nullstellensatz-correspondence.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-chevalley-constructible-image-varieties`

Claim and conventions: Every morphism $f:X\to Y$ of classical varieties sends every constructible subset of $X$ to a constructible subset of $Y$. In particular $f(X)$ is constructible.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.7

Dependencies: def-constructible-subset-variety, lem-constructible-boolean-operations, lem-constructible-dense-contains-open, lem-dominant-affine-image-contains-principal-open, lem-classical-variety-noetherian-components.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-dominant-morphism-image-contains-open`

Claim and conventions: If $f:X\to Y$ is a dominant morphism of classical varieties and $Y$ is irreducible, then $f(X)$ contains a nonempty open subset of $Y$. The source need not be irreducible.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 9.1 and Proposition 9.6

Dependencies: thm-chevalley-constructible-image-varieties, lem-constructible-dense-contains-open, lem-general-variety-function-field-charts.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-fibre-dimension-at-point-classical`

Claim and conventions: For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Arapura §4.2; Milne §9b

Dependencies: def-dimension-classical-variety, def-morphism-classical-varieties, thm-affine-nullstellensatz-correspondence, def-classical-algebraic-prevariety-regular-maps-and-varieties.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-fibre-dimension-lower-bound`

Claim and conventions: For a dominant morphism $f:X\to Y$ between irreducible classical varieties and every closed point $y\in Y$, each nonempty irreducible component $Z$ of $X_y$ satisfies $\dim Z\ge\dim X-\dim Y$. No bound is asserted for an empty fibre.

Sources: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Theorem 4.2.1; Milne Theorem 9.9(b)

Dependencies: def-fibre-dimension-at-point-classical, lem-classical-point-cut-out-by-dimension-many-functions, lem-variety-equations-dimension-bound, lem-dimension-nonempty-open-subset, lem-general-variety-function-field-charts.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-generic-fibre-dimension`

Claim and conventions: For a dominant morphism $f:X\to Y$ between irreducible classical varieties, there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every $X_y$ with $y\in U$ is nonempty and has pure dimension $r=\dim X-\dim Y$.

Sources: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf — Vakil Theorem 12.4.1 and Corollary 12.4.2, pp.354–356; Arapura 4.2.1

Dependencies: thm-fibre-dimension-lower-bound, lem-dominant-affine-map-normalization-over-open, lem-dominant-affine-image-contains-principal-open, lem-classical-variety-noetherian-components, lem-chain-dimension-open-cover, cor-transcendence-degree-tower-additivity, thm-affine-domain-dimension-transcendence-degree.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-dimension-of-image-plus-generic-fibre`

Claim and conventions: For an irreducible classical variety $X$ and morphism $f:X\to Y$, the reduced closure $Z=\overline{f(X)}$ is irreducible and $\dim X=\dim Z+r$, where $r$ is the common dimension of the nonempty fibres on a nonempty open of $Z$. For arbitrary nonempty $X$ with components $X_i$, $\dim X=\max_i(\dim\overline{f(X_i)}+r_i)$, with a separately chosen generic open and relative dimension $r_i$ for each $X_i$. For empty $X$ use the empty maximum $-\infty$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §9b opening and Theorem 9.9

Dependencies: thm-generic-fibre-dimension, lem-dimension-finite-union-components, lem-classical-variety-noetherian-components.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-quasi-finite-morphism-classical`

Claim and conventions: A morphism $f:X\to Y$ of classical varieties is quasi-finite if every closed-point fibre $X_y$ is a finite set; empty fibres are allowed. Classical morphisms here are of finite type: for an affine target chart and an affine source chart above it, any finite set of $k$-algebra generators of the source ring also generates it over the target ring. The inverse image has a finite affine cover because it is an open of a Noetherian variety.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §8c Quasi-finite maps p.185; Arapura Corollary 4.2.2

Dependencies: def-fibre-dimension-at-point-classical.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-dominant-equal-dimension-generically-finite`

Claim and conventions: For a dominant morphism $f:X\to Y$ of irreducible classical varieties, the following are equivalent: $\dim X=\dim Y$; the extension $k(Y)\subseteq k(X)$ is finite; and $f^{-1}(U)\to U$ is quasi-finite for some nonempty target open $U$. Inseparable extensions are allowed.

Sources: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — Arapura Lemma 4.1.3 and Corollary 4.2.2

Dependencies: thm-generic-fibre-dimension, lem-zero-dimensional-classical-variety-finite, def-quasi-finite-morphism-classical, lem-general-variety-function-field-charts, cor-transcendence-degree-tower-additivity.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-affine-intersection-dimension-bound`

Claim and conventions: For irreducible closed $X,Y\subseteq\mathbf A_k^n$, every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 5.36

Dependencies: thm-dimension-product-varieties, lem-variety-equations-dimension-bound, lem-diagonal-affine-variety-cut-out-by-coordinate-differences.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-affine-cone-dimension-projective-variety`

Claim and conventions: If $X\subseteq\mathbf P_k^N$ is a nonempty projective algebraic set, then $\dim C(X)=\dim X+1$. Over $X_i=X\cap D_+(T_i)$, the locus $C(X)\cap D(T_i)$ is isomorphic to $X_i\times\mathbf G_m$. If $X$ is irreducible, so is $C(X)$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §6p proof of Theorem 6.43 and Corollary 6.47

Dependencies: thm-dimension-product-varieties, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset, lem-dimension-finite-union-components, def-affine-cone-projective-set, lem-projective-variety-cone-irreducible.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-projective-hypersurface-dimension-drop`

Claim and conventions: Let $X\subseteq\mathbf P_k^N$ be irreducible of dimension $d\ge1$. If $f$ is homogeneous of positive degree and does not vanish identically on $X$, then $X\cap V_+(f)$ is nonempty and every irreducible component has dimension $d-1$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 6.43, printed p.156

Dependencies: lem-affine-cone-dimension-projective-variety, thm-principal-subvariety-codimension-one, lem-dimension-nonempty-open-subset.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-projective-equations-dimension-bound`

Claim and conventions: Let $X\subseteq\mathbf P_k^N$ be irreducible of dimension $d$, and let $f_1,\ldots,f_r$ be homogeneous polynomials of positive degree, with $r\ge0$. Every nonempty component of $X\cap V_+(f_1,\ldots,f_r)$ has dimension at least $d-r$. If $d\ge r$, this common zero set is nonempty.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 6.44, p.156

Dependencies: lem-projective-hypersurface-dimension-drop, lem-variety-equations-dimension-bound, lem-affine-cone-dimension-projective-variety, lem-dimension-finite-union-components.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-dimension-theorem-intersection-projective`

Claim and conventions: Let $X,Y\subseteq\mathbf P_k^n$ be irreducible closed subvarieties. Every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. If $\dim X+\dim Y\ge n$, then $X\cap Y\ne\varnothing$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Corollary 6.47

Dependencies: lem-affine-cone-dimension-projective-variety, lem-affine-intersection-dimension-bound.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-projective-dimension-linear-avoidance`

Claim and conventions: For a closed subset $Z\subseteq\mathbf P_k^N$ and integer $0\le r\le N$, $\dim Z<r$ if and only if some projective linear subspace of dimension $N-r$ is disjoint from $Z$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 6.48 and Lemma 6.49

Dependencies: lem-projective-hypersurface-dimension-drop, thm-dimension-theorem-intersection-projective, lem-dimension-finite-union-components, cor-dimension-affine-and-projective-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `lem-relative-projective-homogeneous-equations`

Claim and conventions: For a classical variety $Y$ and $N\ge0$, $Y\times\mathbf P_k^N$ exists with its standard product charts. If $Y$ is affine with $A=k[Y]$, its closed subsets are precisely the zero loci of finitely generated homogeneous ideals of $A[T_0,\ldots,T_N]$. For such an ideal $I$ and $y\in Y$, the fibre is empty if and only if the specialized ideal $I(y)\subseteq k[T_0,\ldots,T_N]$ contains every monomial of some positive degree $d$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §6q Lemma 6.51(a,b), p.158

Dependencies: thm-dimension-product-varieties, thm-hilbert-basis-theorem, thm-affine-nullstellensatz-correspondence, lem-standard-projective-opens-are-affine-spaces.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-classical-projective-projection-closed`

Claim and conventions: For every classical variety $Y$ and $N\ge0$, the projection $p:Y\times\mathbf P_k^N\to Y$ is a closed map.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Theorem 7.22, pp.164–165

Dependencies: lem-relative-projective-homogeneous-equations, thm-nakayama-lemma.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-projective-morphism-classical`

Claim and conventions: A morphism $f:X\to Y$ of classical varieties is projective here if there is an integer $N\ge0$ and a factorization $X\hookrightarrow Y\times\mathbf P_k^N\to Y$ in which the first map is a closed immersion and the second is projection. A closed immersion in this classical setting is an isomorphism onto a reduced closed subvariety. Morphisms have the general locally ringed-space meaning, checked on affine charts.

Sources: https://math.stanford.edu/~vakil/0708-216/216class38.pdf — Vakil Class 38 §3, proof of Theorem 3.1

Dependencies: lem-relative-projective-homogeneous-equations, def-morphism-classical-varieties, def-classical-algebraic-prevariety-regular-maps-and-varieties.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `thm-upper-semicontinuity-fibre-dimension-projective`

Claim and conventions: For a projective morphism $f:X\to Y$ of classical varieties, the set $E_r=\{y\in Y:\dim X_y\ge r\}$ is closed for every integer $r$. Neither irreducibility nor surjectivity is required, and empty fibres have dimension $-\infty$.

Sources: https://math.stanford.edu/~vakil/0708-216/216class38.pdf — Vakil Class 38 Exercise 3.B and its preceding proof, pp.4–5

Dependencies: def-projective-morphism-classical, def-fibre-dimension-at-point-classical, thm-classical-projective-projection-closed, lem-projective-dimension-linear-avoidance.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-closed-family-irreducible-equal-dimensional-fibres`

Claim and conventions: Let $f:X\to Y$ be a closed surjective morphism of classical varieties with $Y$ irreducible. If every fibre is irreducible of one fixed dimension $r$, then $X$ is irreducible and $\dim X=\dim Y+r$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 9.11

Dependencies: thm-generic-fibre-dimension, thm-fibre-dimension-lower-bound, lem-classical-variety-noetherian-components, lem-dimension-finite-union-components.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `def-module-finite-affine-classical-map`

Claim and conventions: For affine classical algebraic sets $X,Y$, call a morphism $f:X\to Y$ module-finite if $k[X]$, via pullback, is a finitely generated $k[Y]$-module. This is the affine module criterion. Empty affine sets are allowed, with zero coordinate ring; the definition does not assert a global affine-preimage criterion for arbitrary varieties.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §8c Definition 8.17, affine case, p.181

Dependencies: thm-affine-morphisms-coordinate-ring-anti-equivalence.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cor-module-finite-affine-map-quasi-finite`

Claim and conventions: Every module-finite morphism between affine classical algebraic sets is quasi-finite.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Proposition 8.28 and Lemma 8.29, p.185

Dependencies: def-module-finite-affine-classical-map, def-quasi-finite-morphism-classical, def-fibre-dimension-at-point-classical, thm-affine-nullstellensatz-correspondence.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `rem-equidimensionality-hypotheses`

Claim and conventions: All varieties in this page are classical varieties over algebraically closed $k$, under Choice. The lower fibre bound and the pure generic fibre theorem require irreducible source and target. For reducible sources the image-dimension formula is a maximum over components, with separate image closures and generic dimensions. Projective upper semicontinuity permits reducible sources, reducible targets and empty fibres. It is not asserted here for arbitrary morphisms. Local dimension at a closed point counts dimensions of components through that point; it is not the dimension of its residue field, nor the dimension of a local ring at a generic scheme point. A generically finite map may induce an inseparable field extension; the number of reduced fibre points need not equal that field degree.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §§5j, 9b; Arapura Chapter 4

Dependencies: thm-fibre-dimension-lower-bound, thm-generic-fibre-dimension, thm-upper-semicontinuity-fibre-dimension-projective, cor-dimension-of-image-plus-generic-fibre, lem-dimension-local-ring-codimension-closure, thm-dominant-equal-dimension-generically-finite.

Evidence: Definition/convention written; no proof claimed. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-dimensions-coordinate-cross-components`

Claim and conventions: The coordinate cross $C=V(xy)\subseteq\mathbf A_k^2$ has two irreducible components, both affine lines. Its global dimension is one, and $\dim_p C=1$ at every closed point, including the origin.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Arapura §4.1 hypersurface dimensions

Dependencies: lem-dimension-finite-union-components, def-dimension-classical-variety, cor-dimension-affine-and-projective-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-fibres-hyperbola-projection`

Claim and conventions: For $H=V(xy-1)\subseteq\mathbf A_k^2$, projection $H\to\mathbf A_k^1$ onto $x$ has fibre $\{(a,a^{-1})\}$ when $a\ne0$ and empty fibre at $a=0$. Their dimensions are zero and $-\infty$ respectively. By contrast, every fibre of $\mathbf A^2\to\mathbf A^1$, $(x,y)\mapsto x$, is an affine line of dimension one.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Elementary specialization of fibre definition and affine dimensions

Dependencies: def-fibre-dimension-at-point-classical, cor-dimension-affine-and-projective-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-family-hyperbolas-degenerate-fibre`

Claim and conventions: For the morphism $V(xy-t)\subseteq\mathbf A_k^3\to\mathbf A_k^1$, $(x,y,t)\mapsto t$, the fibre at $a\ne0$ is $\mathbf G_m$, whereas the fibre at zero is the coordinate cross. Every fibre is nonempty of pure dimension one.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Elementary polynomial family governed by the principal-section theorem

Dependencies: thm-principal-subvariety-codimension-one, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset, lem-dimension-finite-union-components, def-fibre-dimension-at-point-classical.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-fibre-dimension-jump`

Claim and conventions: The morphism $f:\mathbf A_k^2\to\mathbf A_k^2$, $(x,y)\mapsto(u,v)=(x,xy)$, has image $D(u)\cup\{(0,0)\}$. Its fibres are one point when $u\ne0$, an affine line over $(0,0)$, and empty over $(0,v)$ with $v\ne0$. The image is constructible and is not locally closed.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Chapter 9 opening p.198; Arapura Example 4.2.4

Dependencies: def-fibre-dimension-at-point-classical, def-constructible-subset-variety, cor-dimension-affine-and-projective-space.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cex-image-morphism-not-closed`

Claim and conventions: False claim: every regular morphism of classical varieties has closed image.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Example 7.2

Dependencies: def-constructible-subset-variety, def-fibre-dimension-at-point-classical.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cex-finite-fibres-not-finite-morphism`

Claim and conventions: False claim: a morphism of affine classical varieties with finite fibres must be module-finite.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne §8c Quasi-finite maps; affine open immersion comparison

Dependencies: def-quasi-finite-morphism-classical, def-module-finite-affine-classical-map, def-fibre-dimension-at-point-classical.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-intersection-two-projective-curves`

Claim and conventions: Two distinct lines in $\mathbf P_k^2$ intersect in one point. The reducible curves $V_+(XY)$ and $V_+(XZ)$ intersect in the line $X=0$ together with the point $[1:0:0]$. In contrast, two distinct irreducible projective plane curves have a nonempty finite intersection.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Concrete consequence of projective intersection bound

Dependencies: thm-dimension-theorem-intersection-projective, lem-dimension-finite-union-components, cor-dimension-affine-and-projective-space, lem-dimension-nonempty-open-subset.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cex-dimension-empty-set-minus-infinity-needed`

Claim and conventions: Incompatibility to refute: adopt $\dim\varnothing=0$ while retaining the assertion $\dim T\ge0$ if and only if $T\ne\varnothing$. The convention $\dim\varnothing=-\infty$ makes that assertion, and the empty maximum, literal; no uniqueness among all possible dimension conventions is claimed.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Boundary calculation from the declared dimension convention

Dependencies: def-dimension-noetherian-topological-space, def-fibre-dimension-at-point-classical.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `cex-affine-intersection-bound-singular-ambient`

Claim and conventions: False claim: for irreducible closed subsets $P,Q$ of any irreducible classical ambient variety $W$, every nonempty component of $P\cap Q$ has dimension at least $\dim P+\dim Q-\dim W$.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Remark 5.37(b)

Dependencies: thm-principal-subvariety-codimension-one, cor-dimension-affine-and-projective-space, lem-affine-intersection-dimension-bound.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authored `ex-linear-system-fibre-dimension-rank-loci`

Claim and conventions: Let $A(y)$ be an $m\times n$ matrix of regular functions on a classical variety $Y$, with $m,n\ge0$, and $W=\{(y,x)\in Y\times\mathbf A^n:A(y)x=0\}$. Then $\dim W_y=n-\operatorname{rank}A(y)$. For every integer $r$, the locus $\{y:\dim W_y\ge r\}$ is closed: it is all of $Y$ for $r\le0$, empty for $r>n$, and otherwise is cut out by the minors of size $n-r+1$, with an absent family of minors imposing no conditions. No irreducibility or global dimension formula for $W$ is asserted.

Sources: https://www.jmilne.org/math/CourseNotes/AG.pdf — Milne Example 9.10, pp.201–202

Dependencies: def-fibre-dimension-at-point-classical, cor-dimension-affine-and-projective-space, thm-dimension-product-varieties.

Evidence: Local proof and item-specific boundary/citation contract written; focused validators pending. All content remains draft; provenance follows the manifest, with the locally rewritten argument marked accordingly. Next action: finish the remaining batch items, then run the required focused checks.

### Authoring refinements before focused repair

Added Hilbert basis explicitly to classical Noetherianity; added the existing general classical-variety interface to the fibre and projective definitions, whose old morphism supplier is affine-only. Added direct chart-field, transcendence-degree and nonempty-open invariance citations at their actual uses in generic fibre, generic finiteness and projective component comparisons. These are established backward dependencies or earlier items on this page. No item, page, or mathematical claim was dropped; the zero-ring convention remains local, and the cone of an empty projective set is never conflated with a vertex-only affine equation locus. All 56 planned items and both planned pages are now drafted. First check pass: content-policy passes after canonical block-YAML source formatting; strict contracts initially pass 47/47; precheck requests canonical phase renumbering on all 47 proof bodies. The bare validate-plan invocation prints usage (exit 2); rerunning with research/plan-spec.json passes with repository-wide warnings. Canonical repair and final checks follow.

### Final claim and provenance synchronization

The manifest now records the exact authored claims instead of scaffold shorthand. Multi-author reference labels were split into exact author/URL entries, the coordinate-cross Arapura URL was corrected, and Milne 5.39 is identified as a Proposition. The five generated example/counterexample verifications (coordinate cross, elementary projections, xy=t, explicit projective curves, empty-convention compatibility) are original calculations and now have proof provenance ai-generated; their generation roles and statement provenance remain intact. Source-derived proofs retain ai-altered. No judge or publication records were created. The principal-section zero-dimensional boundary is justified directly by the height-one prime obtained in its proof, without relying on the later zero-dimensional finiteness item.

### Final Step-5 check receipts

Completed the 56 item IDs listed in the per-item authoring checkpoints above (46 A-page items and 10 B-page items), both planned pages under `library/algebraic-geometry/`, the synchronized batch manifest, and 47 item-specific proof contracts. The nine definitions/remark have no proof-bearing contract obligation. All authored items and pages remain draft.

Final checks, after canonical precheck repair and the provenance/bibliography refinements:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 56 explicit `items/ID.md` arguments from this manifest: exit 0, **47 checked, 0 failing**. Canonical phase repairs were applied before this rerun; contract proof-step references were synchronized, including the reordered relative-homogeneous-equations proof.
- `node tools/validate-plan.mjs`: the initial bare invocation returned usage, exit 2. The required input-bearing invocation, `node tools/validate-plan.mjs research/plan-spec.json`, then passed; the final rerun also exited 0. The declared order and item graph pass for 892 pages with item lists. Repository-wide advisory warnings remain, and the tool reports 463 planned pages without item lists. No plan or prerequisite structure was edited by this authoring step.
- `node tools/content-policy.mjs research/frontier-33-batch-9.pages.json`: exit 0, **56 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/frontier-33-batch-9.proof-contracts.json --strict`: exit 0, **47/47 items checked, 0 errors, 0 warnings**.
- Additional `node tools/rendercheck.mjs` with the same 56 item paths and both page paths: exit 0, **58 files pass**, including real KaTeX and YAML parsing.
- Focused `git diff --check` on the assigned output paths: exit 0. A direct text audit also checked the new files for trailing whitespace and confirmed all 58 item/page files remain draft.

Provenance rationale and exact source locators are recorded above and in each item's sources. Source-derived arguments are rewritten and marked ai-altered; the five generated calculations retain generation data and now truthfully use ai-generated proof provenance. The browser source review preserves the qualifications of each result: Milne's unrestricted fibre semicontinuity assertions are not used; the authored semicontinuity theorem is projective, backed by linear avoidance and closed projection. The linear-system example proves the pointwise rank formula and closed rank loci, without importing an unjustified global dimension formula.

Narrowed/dropped claims: no planned item was removed. Explicit conventions and restrictions in the scaffold were maintained: nonempty irreducible varieties, empty dimension minus infinity, componentwise intersection bounds, projective semicontinuity, and the stated empty-convention compatibility claim. No finite-smoke check was run or offered as proof. Blockers for this authoring step: none. The generated task/design ordering discrepancy is recorded above; the current owner-repaired manifest/spec was followed. No publication, judging, verification stamp, workflow transition, or independent review record was changed. Next action: the build driver owns subsequent transitions; Step-5 authoring and its focused checks are complete.
