---
id: thm-compact-manifolds-have-finite-presentation-complexes-without-choice
kind: theorem
title: Compact manifolds have finite fundamental-group presentation complexes
  without choice
status: published
origin: pipeline
deps:
  - thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice
  - thm-seifert-van-kampen
  - lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Cell-attachment presentations, printed pages50–52; finite domination,
        pages524–529
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Statement

Let $M$ be a compact connected Hausdorff manifold, with boundary allowed, and $o\in M$. Supply any finite list of based loops $\gamma_1,\ldots,\gamma_\ell$. There is a finite connected two-dimensional CW complex $K$ with one vertex $v$, a based map $f:(K,v)\to(M,o)$ inducing an isomorphism on fundamental groups, and marked oriented one-cells which $f$ parametrizes by the specified loops. In particular $\pi_1(M,o)$ is finitely presented without a choice axiom.

For any normal subgroup $N\triangleleft\pi_1(M,o)$ and commutative unital ring $k$, use on $M$ the associated right $k[\pi_1(M)/N]$ normal-cover system and on $K$ its pullback. The actual induced map on $H_1$ with these coefficients is an isomorphism. No finite CW type, triangulation or smoothing of $M$ is asserted.

## Facts & Assumptions

**Given:** The based compact manifold and finite marked loop list.

[F1] A compact Hausdorff manifold is a strict retract $M\xrightarrow{i}L\xrightarrow{r}M$ of a finite geometric polyhedron, with $ri=\mathrm{id}$. [[thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice]]

[F2] Fundamental groups of connected collared open gluings are their actual group pushouts, without an overlap-injectivity assumption or global choice of loop representatives. [[thm-seifert-van-kampen]]

[F3] Normal-cover right local first homology is naturally the abelianized covering subgroup tensored with $k$, for actual based maps and induced coefficient maps, without choice. The supplied contractible-neighborhood-basis scope includes finite polyhedra. [[lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice]]

## Proof

1.1 Use [F1] and retain the component of $L$ containing connected $i(M)$; it is still finite and still retracts onto $M$. Triangulate the finite polyhedron by its given finite geometric structure, choose a spanning tree of its finite one-skeleton, and take one generator for each oriented edge outside the tree. Each two-simplex gives its finite boundary-word relation. These give a finite presentation of $\pi_1(L,i(o))$. Here is the finite van Kampen verification: a tree contracts by successively deleting leaf edges, so the one-skeleton has the free group on the edges outside it. Attaching a two-cell adds the normal relation given by its boundary, by [F2] applied to the cell with a thin based connector strip; the overlap retracts to its boundary circle, and the cell side contracts. Attaching a cell of dimension at least three adds no relation or generator because the same overlap is its simply connected boundary sphere. A sphere of dimension at least two is simply connected by [F2] on its two punctured-coordinate charts: they are Euclidean spaces and contract, and their overlap is path-connected. This verifies the presentation through the finite list of cells. A path from $i(o)$ to a chosen tree vertex changes basepoint and only conjugates these finitely many loops. [F1, F2, given, construct, algebra]

2.1 Put $P=\pi_1(L,i(o))=\langle x_1,\ldots,x_a\mid r_1,\ldots,r_b\rangle$. The based endomorphism $e=i_*r_*$ is idempotent and has image $i_*\pi_1(M,o)$, with $i_*$ injective because $r_*i_*=\mathrm{id}$. Choose a finite word $w_j$ representing $e(x_j)$ for each of the finitely many generators. Consider $$Q=\langle x_1,\ldots,x_a\mid r_1,\ldots,r_b,\ x_1w_1^{-1},\ldots,x_aw_a^{-1}\rangle.$$ The map $e:P\to\operatorname{im}e$ kills these additional relations because $e^2=e$, so descends to $Q$. Conversely include $\operatorname{im}e$ in $P$ and pass to $Q$. This gives inverse maps: on $e(x_j)$ the first composite is $e^2(x_j)=e(x_j)$; on the generating $x_j$ of $Q$ the second is $w_j=x_j$ by its new relation. Hence $Q\cong\operatorname{im}e\cong\pi_1(M,o)$, proving finite presentability by an explicit finite quotient, rather than assuming retracts preserve finite presentation. [F1, step 1.1, construct, algebra]

3.1 Realize the finite presentation $Q$ by a bouquet of its generator circles and one two-cell per relator; the same [F2] calculation gives fundamental group $Q$. Map each generator circle to its based loop in $M$ under the isomorphism in step 2.1. Each relator has trivial based class, so has a based nullhomotopy; choose one for each of the finitely many relators and extend over its two-cell. This gives a based map inducing exactly that isomorphism. For each specified $\gamma_h$, choose one finite word $v_h$ in these generators representing its based class, add a new generator $y_h$ and the relation $y_hv_h^{-1}$, and map $y_h$ exactly by $\gamma_h$. A nullhomotopy of its relation extends this map. The added generator can be eliminated from the presentation, so the induced fundamental-group map is still the same isomorphism. This particular presentation complex has a finite polyhedral model. Triangulate every generator circle by three edges and read each nonempty relator on a subdivided boundary circle, so each boundary edge maps homeomorphically to one graph edge. Insert its mapping cylinder before attaching the disk. Each cylinder rectangle has distinct bottom endpoints in the graph and distinct private top endpoints; triangulate it by a fresh center and its four boundary edges. The private center distinguishes different rectangles even when their bottom edges coincide, and neighboring vertical sides agree, so these are finitely many honest simplices. Cone each top circle to a fresh vertex to attach its disk. The cylinder plus disk is just a disk with an extra annular collar, so this changes no underlying presentation space or graph marking. Empty relators may be omitted without affecting the group; with no generators the point suffices until marked generators are added. Thus $K$ has a finite simplicial triangulation of its underlying space, and its contractible open-star basis, while retaining its original one-vertex CW description. These operations produce the asserted finite two-complex with its actual marked loops. [F2, given, step 2.1, construct, algebra]

4.1 The normal subgroup pulled back along this isomorphism maps isomorphically onto $N$. Apply the explicit normal path-class construction and finite-cycle comparison of [F3] to the map in step 3.1; the finite triangulation in step 3.1 supplies its required contractible-neighborhood basis. Its chain-map naturality identifies the actual map on local $H_1$ with the isomorphism of the covering subgroups' abelianizations tensored with $k$, which is an isomorphism with its explicitly induced inverse. Only the finite polyhedron, its group presentation, individual words and finitely many nullhomotopies were selected. No homotopy equivalence between $M$ and $K$ or finite CW type of $M$ was inferred. This proves precisely the stated choice-free presentation and degree-one comparison. [F1, F2, F3, step 2.1, step 3.1, construct, algebra] ∎
