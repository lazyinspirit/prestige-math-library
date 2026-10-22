---
id: thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
kind: theorem
title: "Invariance of the multipointed Heegaard Floer complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-oriented-seifert-surface-and-knot-genus
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-countable-choice
  - lem-pointed-diagram-isomorphism-identifies-filtered-complexes
  - thm-balanced-multipointed-knot-heegaard-moves-generate-diagram-equivalence
  - lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
  - thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
  - thm-balanced-knot-full-minus-auxiliary-continuations-are-filtered-equivalences
  - thm-balanced-knot-attaching-moves-have-full-minus-inverse-maps
  - lem-same-handlebody-model-top-counts-have-no-positive-marked-terms
  - thm-balanced-knot-ordinary-stabilization-has-full-minus-inverse-maps
  - thm-balanced-knot-marked-pair-stabilization-is-the-full-minus-variable-cone
  - lem-pointed-basepoint-cone-and-variable-collapse
  - lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension
  - lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
  - thm-doubly-pointed-s-three-moves-preserve-the-seifert-normalized-filtration
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
  - lem-standard-unknot-hat-diagram-rank-one
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§§3.3–3.8 and §4.1; generic regularity, energy compactness, and index-two boundary analysis underlying Heegaard Floer invariance"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, Proposition 2.3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Proposition 2.3 and equations (5)–(9), printed pp.7–10; independence of the collapsed filtered complex from the number of basepoint pairs and the stable V factor in the fully collapsed complex"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3, Proposition 3.5 and Theorem 3.1 with proof, printed pp.14–17; marked-knot Heegaard move generation and filtered chain homotopy invariance"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §§3.3–3.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.12–14; pointed Heegaard complexes and their invariance"
---

## Statement

Assume countable choice. Let $K$ be an oriented knot in $S^3$, let $F$ be a compact connected oriented embedded surface with boundary $K$, and let $\mathcal H_0,\mathcal H_1$ be admissible multipointed Heegaard diagrams for $K$. For $i=0,1$, the diagram $\mathcal H_i$ has a closed genus-$h_i$ Heegaard surface and $m_i=h_i+k_i-1$ curves in each attaching system, with $k_i$ ordered $w$-points and $k_i$ ordered $z$-points; each component of either attaching-system complement contains one point of each type, and the connecting arcs represent $K$. A curve isotopy is an isotopy of one attaching curve through embedded curves in its attaching system, disjoint from the other attaching curves and all marked points. A handleslide replaces one attaching curve by its band sum with another curve in the same attaching system, along an embedded arc disjoint from the other attaching curves and the marked points. A Heegaard stabilization forms connected sum with the genus-one splitting of $S^3$ in a disk disjoint from all curves, marked points, and knot arcs; it raises the genus by one and leaves $k$ fixed. A basepoint-pair (index-zero/three) stabilization keeps the genus fixed and adds one curve to each system and one $w,z$ pair along the represented knot. Its inverse removes the following elementary configuration, after relabeling the cyclic pairs: curves $\alpha_0,\beta_0$ bound disks $A_0,B_0$ on the surface, are disjoint from every opposite-system curve except each other, and intersect transversely in two points; $A_0\cap B_0$ is a bigon containing just $w_0$, while $A_0\setminus B_0$ contains just $z_0$ and $B_0\setminus A_0$ contains the next $z$-point along the cyclic pairing. Remove $\alpha_0,\beta_0,w_0,z_0$ and concatenate the adjacent trivial knot arcs. The surviving marked points stay fixed. Thus the move inserts a pair along an existing knot arc rather than adjoining an isolated marked component in an empty disk. Both descriptions include the simultaneous boundary-parallel arc systems and require the stated one-$w$, one-$z$ condition in each attaching complement. Destabilizations are the respective inverse moves. Comparisons may apply the orientation-preserving diagram isomorphisms of the pointed-data definition, carrying the ordered marked points, attaching systems and simultaneous boundary-parallel arcs, before or after the listed geometric moves. Their complex identifications are induced by pushforward of generators, disk classes and almost complex data, rather than by assuming an isotopy acts as the identity. Comparisons also allow the fixed-splitting arc normalizations in that definition before or after the listed moves, retaining the simultaneous bridge witnesses and all ordered marks. They leave the surface attaching and analytic data fixed, so their identification of the actual count operators is the identity; they do not assert a diffeomorphism of a tangential and transverse surface-knot pair. With these identifications, any two such diagrams are related by a finite sequence of the listed moves through admissible multipointed diagrams, preserving the represented oriented knot.

For a diagram with $j$ basepoint pairs, regard its full filtered minus complex as a complex over $\mathbb F_2[U]$ by restriction of scalars along $U\mapsto U_i$ for any one chosen basepoint variable. The resulting complexes of $\mathcal H_0$ and $\mathcal H_1$ are filtered chain homotopy equivalent over $\mathbb F_2[U]$, preserving relative Maslov grading and Alexander filtration, even when the diagrams have different numbers of basepoint pairs. The choice of the single variable action does not affect this type. Restriction retains the independent variables in the chain module; it is different from quotienting by $U_1=\cdots=U_j$. The latter ordinary quotient is the fully collapsed complex and has filtered chain homotopy type $CFK^-(K)\otimes V^{\otimes(j-1)}$, where $V$ has zero differential and bidegrees $(0,0)$ and $(-1,-1)$. Equivalently, a basepoint stabilization before quotienting is modeled by the cone of $U_{j+1}+U_i$ on the polynomial extension of the old complex; after the simultaneous quotient this is a zero-map cone and contributes the displayed extra factor.

For an admissible doubly-pointed diagram $\mathcal H_1$ for $(K,F)$, define $\widehat{HFK}(K)$ to be the homology of the Alexander-associated-graded complex obtained from its full filtered minus complex by quotienting by its sole variable $U$. For a generator $\mathbf x$ use the Alexander grading
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the relative $\operatorname{Spin}^c$ structure assigned by the pointed Heegaard construction from the gradient trajectories through $\mathbf x$ and the chosen basepoint pair, and $\widehat F$ is obtained by removing a tubular neighborhood of $K$ from $F$ and capping the resulting longitude with the meridian disk of the solid torus attached so that this longitude bounds it (zero-framed surgery). The vector-field representative is extended across small balls around the critical points, and its first Chern class is the Chern class of the orthogonal oriented plane field. Use the absolute Maslov normalization in which the unique generator of $\widehat{HF}(S^3)$ has degree zero.

For a diagram $\mathcal H$ with $j$ basepoint pairs, let $\widetilde C(\mathcal H)$ be the Alexander-associated-graded complex over $\mathbb F_2$ obtained from its full filtered minus complex by setting every $U_i=0$; its differential therefore counts only classes with all $n_{w_i}=n_{z_i}=0$. Its homology is $\widehat{HFK}(K)\otimes V^{\otimes(j-1)}$, where $V=\mathbb F_2\langle v_0,v_1\rangle$ has bidegrees $(M,A)(v_0)=(0,0)$ and $(M,A)(v_1)=(-1,-1)$.
## Statement references

[[def-admissible-pointed-heegaard-floer-data|Pointed Heegaard diagrams and their multipointed complexes]]

[[def-countable-choice|Countable choice]]

[[lem-pointed-diagram-isomorphism-identifies-filtered-complexes|Actual generator and disk-count transport under diagram isomorphisms]]

[[def-oriented-seifert-surface-and-knot-genus|Oriented Seifert surfaces and the minimum-genus convention]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” Proposition 2.3](https://arxiv.org/pdf/math/0607691)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*](https://arxiv.org/pdf/math/0101206)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, Proposition 3.5 and Theorem 3.1](https://arxiv.org/pdf/math/0209056)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.4](https://arxiv.org/pdf/math/0209056)

[Manolescu, *An Introduction to Knot Floer Homology*, §§3.3–3.5](https://web.stanford.edu/~cm5/hfk.pdf)


## Facts & Assumptions

**Given:** The two actual balanced diagrams, their ordered marks and simultaneous bridge data, the oriented knot identification, the surface F, and Countable Choice. Restriction of scalars and ordinary quotient have the different meanings in the Statement.

[F1] The actual balanced knot geometric word includes the stated elementary marked-pair operation, fixed-splitting arc normalizations and carried diagram isomorphisms. Broad smooth witnesses are prepared without discarding tangential knot inputs. Every balanced S3 diagram in that word is admissible by its actual periodic-domain calculation. ([[thm-balanced-multipointed-knot-heegaard-moves-generate-diagram-equivalence]], [[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]])

[F2] Actual finite full-marked square-zero count data exist, with no nonconstant nonpositive-index strips, regular indices one/two and all positive w,z multiplicities included. Their separate V-weighted matrix has the actual boundary-curvature identity. Relative M,A differences are defined on the actual connected generator set. ([[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]], [[thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts]], [[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]])

[F3] Actual full-minus auxiliary and attaching-move comparisons have finite polynomial filtered inverse maps and inverse homotopies, including all tangency-pair cancellations, not only a zero-z specialization. Their same-handlebody top cycle and top product have actual zero marked degree. ([[thm-balanced-knot-full-minus-auxiliary-continuations-are-filtered-equivalences]], [[thm-balanced-knot-attaching-moves-have-full-minus-inverse-maps]], [[lem-same-handlebody-model-top-counts-have-no-positive-marked-terms]])

[F4] Ordinary stabilization has actual full-minus inverse maps at every permitted knot-disjoint location. Its changed-target torus matching solves the mean obstructions, proves regularity and exhausts all rigid counts; it is not inferred from the hat separator count. ([[thm-balanced-knot-ordinary-stabilization-has-full-minus-inverse-maps]])

[F5] The actual marked-pair operation is the polynomial cone of U_new+U_i with shifted source copy (-1,-1), including its old singly pointed horizontal component. Actual divided-difference cone retractions, the general variable-dependent differential variant, and the triangular conjugation for a nullhomotopic cone map are finite and filtered. ([[thm-balanced-knot-marked-pair-stabilization-is-the-full-minus-variable-cone]], [[lem-pointed-basepoint-cone-and-variable-collapse]])

[F6] Carried diagram isomorphisms identify the actual generator, class, section and count data. The permitted fixed-splitting arc normalization keeps the surface and analytic count problem fixed. ([[lem-pointed-diagram-isomorphism-identifies-filtered-complexes]], [[def-admissible-pointed-heegaard-floer-data]])

[F7] The actual negative selected-Morse field and zero-relative-Euler filling construct the Seifert-cap Alexander origin. Its difference is n_z-n_w. The finite trajectory/cap calculation preserves that origin under the actual doubly pointed move word, and the total-hat normalization fixes the Maslov shift. ([[lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension]], [[lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization]], [[thm-doubly-pointed-s-three-moves-preserve-the-seifert-normalized-filtration]])

[F8] The actual zero-w closed hat theory is invariant for S3 and its genus-zero point model has one-dimensional homology. Its arbitrary independent auxiliary data comparison is included. ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]], [[lem-standard-unknot-hat-diagram-rank-one]])

## Proof

1.1 Use [F1]'s actual finite word for the represented oriented knot. It includes precisely the move configurations and identifications in the Statement. Its witness preparation retains the broad smooth inputs; it does not assume initially neat crossings or bridge interiors missing the compression faces. Each intermediate diagram is still balanced, so [F1]'s S3 periodic calculation gives admissibility at every vertex. Choose actual good analytic data there by [F2]. There are finitely many vertices and operations; Countable Choice is more than sufficient for these choices. For isomorphisms use [F6]'s pushforward; for the allowed fixed-splitting arc normalizations use the identical surface count problem. Neither operation is silently treated as an isotopy acting trivially on unrelated generators. [F1, F2, F6, given, construct, algebra]

1.2 Prove that the chosen variable does not matter on a FIXED diagram. For k>=2 retain [F2]'s finite polynomial matrix D(U,V). At V=1 put L_j=(partial D/partial V_j)|_(V=1). Differentiating the finite curvature identity gives dL_j+L_jd=U_j+U_(j-1), with indices cyclic. Each L_j has Maslov degree -1 and filtration degree at most -1: its terms have at least one z multiplicity and derivative removes one formal V factor, while their actual weighted outputs have filtration loss at least one. Sums of consecutive L_j therefore give the same homotopy for any U_i+U_l. These are actual finite count matrices; no multiplication action on homology is substituted for a chain homotopy. For k=1 no comparison is needed. [F2, construct, algebra]

2.1 For an attaching isotopy or handleslide apply [F3], and for an ordinary genus change apply [F4] or its inverse. They are equivalences over the unchanged independent polynomial ring, before restriction or collapse. All positive z terms remain in their finite matrices. Their inverse identities are actual polynomial identities and their homotopies are Alexander filtered of Maslov degree plus one. Choose the local count data supplied by each operation and use [F3]'s auxiliary comparisons at its two ends to connect to the vertex data chosen in step 1.1. This includes independently chosen background structures, area forms, full boundary tensors and generator charts. In the ordinary operation the arbitrary-location comparison uses the knot-preserving same-splitting disk word in [F4], not a zero-w neck separator at an arbitrary region point. [F3, F4, step 1.1, construct, algebra]

2.2 At a marked-pair insertion use [F5]'s actual cone over R[U_new]. Its source copy has shift (-1,-1), and its matrix is the old d on each diagonal, U_new+U_i on the indicated off-diagonal and zero on the reverse diagonal after V=1. In particular the reverse full positive-z bigons cancel; they have not been omitted. Restrict to any old chosen variable. The monic-variable retraction evaluates U_new=U_i and gives the old complex, retaining its OTHER independent variables. If the selected variable is the new one, divide instead in the old U_i and apply the general polynomial-differential retraction; its quotient is the old complex with this action renamed. These retractions and their inverse homotopies are filtered, with finite divided differences. Their assertion is restriction of scalars, not the ordinary quotient before taking this cone. The inverse removal has the reverse equivalence. [F3, F5, step 1.1, construct, algebra]

2.3 Here is the actual chosen-action equivalence, including its infinite-rank restricted module. Introduce a polynomial variable T of degrees (-2,-1) and put E=C[T]. The two cones of T+U_i and T+U_l are filtered chain isomorphic by the triangular map (a,b) to (a,b+L a), where dL+Ld=U_i+U_l from step 1.2; its own inverse has the same formula. Regard the first cone over the ring containing T and all old variables EXCEPT U_i. The general monic-variable retraction in [F5], dividing U_i, retracts it onto C with U_i replaced by T. Restricting to F_2[T] is exactly the old U_i action, not the simultaneous collapse of the remaining variables. The second cone similarly retracts to the U_l action. Compose these finite identities to obtain an F_2[T]-linear filtered homotopy equivalence. The proof is valid even though the restricted module is not finite over F_2[T]; each polynomial and each image remains finite. Renaming T as U proves independence of the chosen action. [F5, step 1.2, construct, algebra]

3.1 Choose an action along the finite word, using step 2.3 whenever the label must change. Steps 2.1–3.1 supply an equivalence at every operation over that single-variable ring. Compose the forward maps and the inverse maps in reverse order. Expanding the finite chain-homotopy identities gives inverse homotopies for the composites. Their degrees and filtration bounds survive composition. This proves the full single-action comparison even when k changes, with independent variables retained throughout. It proves no equality between that module and its ordinary collapsed quotient. [F3, F4, F5, step 1.1, step 2.1, step 2.2, step 2.3, construct, algebra]

4.1 To compute the ordinary collapsed quotient, keep one selected U and impose the other relations U_j+U=0 successively. After any earlier quotient the underlying module is still free on the generator basis over the remaining polynomial variables, and the identities in step 1.2 specialize literally. The filtered triangular cone isomorphism and general divided-difference retraction in [F5] therefore give C/(U_j+U) equivalent to C tensor V over the surviving ring at that stage. Iterate to get C_coll equivalent, over the chosen F_2[U], to C_restricted tensor V^(k-1). Step 3.1 identifies C_restricted with an admissible doubly pointed complex, denoted CFK^-(K). The factors V have exactly the source-copy shift (-1,-1) in [F5]. No flatness assertion or commutation of homology with tensor product is required: each quotient is applied to actual finite chain and homotopy identities. [F5, step 1.2, step 3.1, construct, algebra]

4.2 Fix the absolute doubly pointed origin by [F7]. It is the actual relative Spin-c field with the zero-framed Seifert cap stated here, and gives the displayed half-Chern evaluation and relative n_z-n_w law. For two doubly pointed diagrams use the k=1 word in [F1]; it needs no marked-pair equalization. [F7]'s finite exterior trajectory/meridian-cap calculation fixes zero affine shift for the actual attaching maps, while its cancelling-ball calculation fixes zero for ordinary stabilization at any allowed location. Thus this word's full filtered maps preserve A_F, not just an arbitrarily shifted relative grading. Every differential term has A(U^a y)=A(x)-n_z, including n_z>0. The total U=0 complex is the closed zero-w hat complex, with the z point merely protected; [F8] gives its one-dimensional total homology. [F7]'s Maslov normalization places that class in degree zero and forces each homogeneous equivalence to have degree zero. Its inverse homotopies have degree plus one. This supplies the original absolute normalization without claiming a general rational cobordism grading theorem or absolute multipointed cone centering. [F1, F7, F8, step 2.1, step 3.1, construct, algebra]

5.1 Fix the multipointed origins explicitly before reading the displayed bidegrees. Start with an [F7]-normalized doubly pointed model and transport its origins along a chosen actual move word of step 3.1, using the actual smooth comparison references in [F3, F4] and the specified (-1,-1) source shift at each cone. The connected-generator relative grading in [F2] shows that any two such transported choices differ by ONE common pair of integer shifts. Specialize step 4.1 by U=0. Its left side sets EVERY independent U_i to zero; its right side is the doubly pointed total hat complex tensor V^(k-1). The maps and homotopies remain filtered identities because identities of maps are specialized, without any flatness assertion about homology. Passing to the Alexander associated graded preserves those identities. Its differential counts precisely the classes with n_w=n_z=0, by positivity and the relative formula in [F2]. This is a FINITE complex with bounded finite filtration. Its associated-graded homology is nonzero: if it vanished, a total cycle's leading filtration term would be a boundary in its graded piece; subtract that boundary and repeat down the finite filtration to make every total cycle a boundary. This contradicts the nonzero total homology $\widehat{HF}(S^3)\otimes V^{\otimes(k-1)}$ from [F8] and the preceding actual equivalence. This is the elementary finite-filtration spectral-sequence argument. Compare two transported choices using the normalized doubly pointed comparison in step 4.2 and their actual quotient/associated-graded equivalences. They give an isomorphism of the same finite nonzero bigraded homology with itself shifted by their common (M,A) difference. Its support is a finite nonempty subset of $\mathbb Z^2$. Such a subset cannot equal a nonzero translate: maximizing or minimizing a coordinate with nonzero translation component gives a contradiction. Hence both shifts are zero. The multipointed origins and the resulting bidegrees are therefore independent of the move word; no new absolute multipointed Spin-c theorem was used. The doubly pointed associated-graded homology is the stated $\widehat{HFK}(K)$, with step 4.2's normalization. Tensoring over $\mathbb F_2$ with zero-differential V is an actual direct sum of its degree shifts. Its homology is thus $\widehat{HFK}(K)\otimes V^{\otimes(k-1)}$ with the displayed bidegrees. This proves the tilde assertion, the claimed independence, and its distinction from chosen-action restriction. [F2, F3, F4, F5, F7, F8, step 3.1, step 4.1, step 4.2, construct, algebra] ∎
