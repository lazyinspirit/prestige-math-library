---
id: thm-valid-code-reconstructs-the-declared-link-diagram
kind: theorem
title: "Valid codes reconstruct the declared link diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-planar-diagram-code-realizability-and-face-validation
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
  - alg-enumerate-diagrams-up-to-crossing-bound
  - thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-fundamental-theorem-on-flows
  - def-countable-choice
  - def-planar-isotopy-of-link-diagrams
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), section 1"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1 Introduction, finite link-diagram representation, web text lines 102–121"
---

## Statement

Assume the Axiom of Countable Choice. For every valid connected one-component
oriented code with a selected outer face, the reconstruction procedure
produces a regular oriented diagram representing that code. Any two such
diagrams with the same code differ only by crossing and edge relabeling and
are planar isotopic. The normalized planar-diagram code of a diagram with $c$
crossings appears among the candidates enumerated at bound $c$. This statement
concerns diagrams and their finite codes; it does not identify distinct codes
that may represent the same knot type. The finite realization and enumeration
claims are choice-free; $\mathrm{AC}_\omega$ is assumed only for the smooth
ambient-isotopy uniqueness clause.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]] — code formats, normalization, and crossing data.

[[lem-planar-diagram-code-realizability-and-face-validation]] — finite spherical realization from the face count.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — correctness of the reconstruction procedure.

[[alg-enumerate-diagrams-up-to-crossing-bound]] — bounded normalized-code enumeration.

[[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]] — exact enumeration of accepted one-component codes.

[[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]] — smooth disk extension with prescribed boundary collars and an interior diffeomorphism germ.

[[def-planar-isotopy-of-link-diagrams]] — smooth orientation-preserving ambient isotopy of the plane.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation systems encode plane embeddings up to orientation-preserving homeomorphism; lines 49–61 also identify equivalence with a continuous family of embeddings.

[Hass–Lagarias–Pippenger, §1](https://arxiv.org/pdf/math/9807016) — finite crossing-graph data for regular link diagrams.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a valid connected one-component oriented code with $c$ crossings and a selected outer face.

[A1] [[def-countable-choice]]: Countable Choice is the axiom that every countable family of nonempty sets has a choice function.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: the code specifies a finite crossing set, paired darts, crossing rotations, oriented opposite strands, over/under data, signs, and a face selector; its normalized PD form fixes crossing labels, edge labels, and the face identifier, while the crossingless form carries one of two orientation markers.

[F2] [[lem-planar-diagram-code-realizability-and-face-validation]]: for a nonempty connected code with the prescribed local crossing data, the Euler face condition $V-E+F=2$ gives a spherical realization, and a selected face gives the plane model.

[F3] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: the validator terminates and reconstructs a diagram exactly for codes satisfying the stated syntax, incidence, crossing, component, connectedness, face, and outer-face conditions.

[F4] [[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]: at every nonnegative crossing bound, the enumerator returns every normalized connected one-component code of at most that size that passes validation.

[F5] [[def-planar-isotopy-of-link-diagrams]]: planar isotopy is a jointly smooth orientation-preserving ambient isotopy of $\mathbb R^2$ carrying the diagram image, strand orientations, and over/under data.

[F6] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: independent differentials give smooth local coordinates.

[F7] [[thm-fundamental-theorem-on-flows]]: a smooth vector field has a unique smooth local flow on an open time-state domain.

[L1] [[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]]: under Countable Choice, a smooth embedded circle bounds a smooth disk, and an orientation-preserving boundary diffeomorphism extends across such disks with any prescribed matching boundary collars and any prescribed positive interior diffeomorphism germ.

## Proof

1.1 By validity, the code passes every finite check in [F3]. If $c=0$, [F1] gives the one-component crossingless code and its `cw` or `ccw` orientation; [F2] realizes that oriented code as the standard circle with the `outside` face selector. If $c>0$, its one component satisfies the knot-code condition, and the face-count hypothesis in [F2] yields a spherical crossing graph with the prescribed rotations and edge pairings; deleting a point in the selected face gives its plane model. Replace each crossing disk by the prescribed smooth transverse crossing, choosing the ports and collars so the edge-band centerlines join their crossing strands tangentially. Away from the crossing disks, round the finitely many polygonal bends in pairwise disjoint neighborhoods that meet no other edge portion. On each over-strand set the height to $+1$ and on each under-strand set it to $-1$ near every crossing; along each edge interval interpolate smoothly between its prescribed endpoint heights, constant near those endpoints. The resulting projection is a smooth immersion with exactly the prescribed finite transverse double points and no triple points. Its only repeated projected points are crossing pairs, and those pairs have distinct heights, so the lift is a smooth embedded link in $S^3$. Thus the procedure's plane model is a regular oriented diagram by [F3] representing the input code. [given, F1, F2, F3, construct]

1.2 Suppose $c>0$. At each double point the two branches are smooth and transverse. Smooth local defining functions for them have independent differentials, so together form coordinates in which the branches are the coordinate axes. Corresponding oriented branch germs and cyclic orders give orientation-preserving matching crossing charts. Take disjoint small crossing disks in these charts. Each edge left after truncation is a compact embedded interval; a strip coordinate along it can be chosen to agree with the crossing coordinates near both ends. Explicitly extend the end longitudinal parameters increasingly along the interval, and extend their transverse coordinate vector fields by finitely many convex combinations of fields pointing to the same side; these combinations stay transverse. Short flows give the strip, and compactness supplies a common width. Shrink the finitely many widths to avoid all other truncated edges and crossing disks except their assigned end collars. This construction treats different endpoint germs separately, so it applies to loops and parallel edges as well. Using the same abstract disk-and-band model in the two drawings gives a smooth diffeomorphism of their graph neighborhoods $N_0,N_1$ carrying vertices, edges, strand orientations, and crossing decorations as prescribed. Round corresponding boundary corners in the same model; the map is then smooth across all joins and carries their smooth boundary circles to the matching circles. These circles correspond to the same face cycles, even when a facial walk repeats a cut vertex. [F1, F6, F7, L1, construct]

2.1 Relabel the finite crossing set in increasing order and assign edge labels by the canonical scan in [F1]. The selected face is represented by the least dart of its face cycle. These are exactly the normalization rules used by the bounded enumerator. The resulting code has $c$ crossings, so it occurs in the enumerator's finite loops at bound $c$; [F4] then guarantees that its reconstruction is returned. [given, F1, F4, step 1.1]

2.2 Regard the drawings and neighborhoods as subsets of the oriented sphere. Every complementary component of a connected neighborhood $N_i$ is a smooth disk. Indeed [L1] gives its bounded disk in a stereographic chart; choosing a second stereographic chart with its removed point inside that disk presents the other side as a bounded smooth Jordan region, also a disk by [L1]. The connected set $N_i$ lies on its collar side, so the other disk misses $N_i$; it contains no other boundary component, since that component's neighborhood collar would put $N_i$ on the other side. Thus it is a whole complementary component, and all components arise this way. Extend the neighborhood diffeomorphism over each pair of matching disks by [L1], using collars induced by its smooth extension across their boundary germs. Such a germ extension exists in the local smooth boundary charts, and has positive normal derivative; finitely many charts and a smaller collar retain smoothness and invertibility. Hence the extended maps agree on actual collars, and the finite gluing is a smooth orientation-preserving sphere diffeomorphism. The selected outer face matches the disks containing infinity. When extending this pair, also prescribe the identity germ at infinity using the interior clause of [L1]. To apply that lemma, view each complementary disk in a stereographic chart whose removed point lies in its own neighborhood $N_i$; for the outer pair, the prescribed coordinate germ is the expression of the sphere's identity near infinity in these two charts. The resulting sphere diffeomorphism fixes a neighborhood of infinity. Its plane restriction $H$ is therefore an orientation-preserving smooth diffeomorphism carrying the two decorated diagrams. [F1, L1, step 1.2, construct]

3.1 If $c=0$, the two diagrams are smooth embedded circles with the same `cw` or `ccw` orientation marker. Choose an orientation-preserving diffeomorphism of their bounded disks using [L1]; its boundary map carries the circle orientations because these markers agree. Extend across the exterior disks on the sphere by [L1], matching the induced boundary collars and prescribing the identity germ at infinity as in step 2.2. This again produces an orientation-preserving plane diffeomorphism $H$ carrying the oriented diagram and its selected exterior face. [F1, L1, step 2.2, construct]

4.1 Finally every orientation-preserving smooth plane diffeomorphism $H$ is joined to the identity by a jointly smooth path of plane diffeomorphisms. Write $b=H(0)$ and $A=DH(0)$, and set $J_t(x)=(H(tx)-b)/t$ for $t>0$, $J_0(x)=Ax$. The identity $J_t(x)=\int_0^1 DH(stx)x\,ds$ proves joint smoothness at $t=0$. For $t>0$ the map is a composition of diffeomorphisms, and $J_0$ is the invertible positive linear map $A$. Join the identity to $A$ by polar decomposition: the positive definite factor is joined linearly to the identity, and the rotation factor by interpolating its angle. Follow that path by $J_t$ from $A$ to $H-b$, then by translations from $H-b$ to $H$. Smooth time reparametrizations constant near all joins give a jointly smooth ambient isotopy starting at the identity and ending at $H$. By steps 2.2 and 3.1 its terminal map transports the strand orientations and over/under data, so it is a planar isotopy in [F5]. Together with reconstruction and enumeration in steps 1.1 and 2.1 this proves every clause. Countable Choice is used only through [L1] for the smooth uniqueness construction; finite realization and enumeration retain their choice-free proofs. [A1, F5, L1, step 1.1, step 2.1, step 2.2, step 3.1] ∎
