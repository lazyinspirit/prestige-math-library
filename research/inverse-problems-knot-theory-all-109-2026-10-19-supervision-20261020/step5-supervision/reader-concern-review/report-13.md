# Concern confirmation: packet 13

Research-only; no item edits, canonical digests, certificates, gates, ledgers, coverage, or admission records written. Current sources were observed during active native 5.1; root must revalidate at the paused/drained hold.

All five original concerns are confirmed. Every proposal preserves the original contract and resolved dependencies. No Statement/Definition delta occurs; consumers receive unchanged predicates. This is not a downstream full-proof review.

## Batch 65, concern 0: thm-twisted-burau-axis-torsion-product

F9 points to nonexistent step 2.3. The full proof has only 2.1 and 2.2 in that block; the relative solid-torus cell cancellation is explicitly in 3.1, which is also used by 4.1. This is a required internal locator correction, with no torsion claim change.

Observed raw SHA256: `68c988be99d46d97d6ec6a97bda430ead9e45cb6b46eb5076abf5d92328996f9`; capture match: True.

Actual supplier/use: F9 imports Conway relative gluing, while the actual local solid-torus comparison computes the (b,q′) and (a,x) unit pairs in Proof 3.1; no external PDF reading is necessary to establish the incorrect local locator.

Proposed replacement (Facts F9 presentation):

```text
In the present proof the solid-torus comparison is additionally computed in step 2.3.
```

Replace with:

```text
In the present proof the solid-torus comparison is additionally computed in step 3.1.
```

## Batch 65, concern 1: ex-knot-kt-10-worked-cases

The union of the two mapping cylinders has three distinct circle vertices and two connecting interval edges. It cannot itself have the asserted one-vertex core-cell structure. The missing maximal-tree quotient matters because this paragraph supplies a based simple-spine certificate, stronger than merely a group presentation. A finite tree contraction before the existing 2-cell slide preserves the full example and its torsion calculation.

Observed raw SHA256: `9dc8ea6b3f0e8beb7478659fbd4a79356846e7e5321b0000733be9357107fe43`; capture match: True.

Actual supplier/use: F7 supplies the exterior boundary mapping-cylinder model with spine X; F2 requires a certified simple spine for torsion. The existing prism collapses concern exterior-to-X only; they do not identify the three vertices inside X. The proposed tree contraction completes that separate comparison.

Proposed replacement (Proof 1.1 missing finite simple comparison):

```text
Choose finite cell structures compatible with this map and the two degree maps, and take the unique vertex of $X$ as basepoint. In the resulting mapping-cylinder CW structure, each prism over a boundary-torus cell $\sigma$ pairs with its unglued face $\sigma\times\{0\}$; removing these pairs in decreasing cell dimension gives a finite sequence of elementary collapses onto $X$, fixing $X$ and its chosen basepoint. Thus this specific exterior-to-$X$ equivalence is simple. Give $X$ its natural finite CW structure with one vertex, core edges $a,b,c$, and $2$-cells $\lambda_2,\lambda_3$ attached by $r_2=a^2c^{-1}$ and $r_3=b^3c^{-1}$. 
```

Replace with:

```text
Choose finite cell structures compatible with this map and the two degree maps, with circle vertices $v_c,v_a,v_b$ and cylinder edges $e_a:v_c\to v_a$, $e_b:v_c\to v_b$; take $v_c$ as basepoint. In the resulting exterior mapping-cylinder CW structure, each prism over a boundary-torus cell $\sigma$ pairs with its unglued face $\sigma\times\{0\}$; removing these pairs in decreasing cell dimension gives a finite sequence of elementary collapses onto $X$, fixing $X$ and $v_c$. Thus this specific exterior-to-$X$ equivalence is simple. The natural CW structure on $X$ has these three vertices, edges $a,b,c,e_a,e_b$, and $2$-cells with based words $e_a a^2e_a^{-1}c^{-1}$ and $e_b b^3e_b^{-1}c^{-1}$. The two connecting edges form a maximal tree. Contract it to obtain a based presentation complex $\overline X$: this contraction is simple, as can be seen by moving the loops and attaching paths at each terminal vertex across its connecting edge by cellular edge slides, then collapsing that edge with the now free terminal vertex. Each cellular slide is realized by an elementary expansion followed by an elementary collapse; the root $v_c$ is fixed. After the two contractions, $\overline X$ has one vertex, edges $a,b,c$, and $2$-cells $\lambda_2,\lambda_3$ attached by $r_2=a^2c^{-1}$ and $r_3=b^3c^{-1}$. Work in $\overline X$ for the following further simple changes. 
```

## Batch 92, concern 0: lem-grid-2x2-unknot-tilde-rank-two

The universal phrase either ordered pair assigns the same diagonal cells to both directions, contradicting the northeast/southwest source-corner convention. Naming the states fixes an actual false intermediate sentence. Every cell still contains a forbidden marking, so the zero differential and rank-two conclusion are preserved.

Observed raw SHA256: `a2dee8be53849e32eebedae83606f19564397be628ed0767088ad259522ac772`; capture match: True.

Actual supplier/use: def-grid-diagram-for-an-oriented-knot defines source states at NE/SW corners; alg-grid-knot-floer-complex tilde mode excludes both O and X. For x={(0,0),(1,1)} the bottom-left and top-right cells have x at NE/SW; for the reverse pair the other two cells do.

Proposed replacement (Verification 1.2 directional wording):

```text
There are exactly two grid states, the two permutations of two columns. For either ordered pair of distinct states, the rectangles from the first state to the second are the bottom-left and top-right cells, each containing one $O$; the reverse rectangles are the bottom-right and top-left cells, each containing one $X$.
```

Replace with:

```text
There are exactly two grid states: $\mathbf x=\{(0,0),(1,1)\}$ and $\mathbf y=\{(0,1),(1,0)\}$, with coordinates read modulo two. The rectangles from $\mathbf x$ to $\mathbf y$ are the bottom-left and top-right cells, each containing one $O$; the rectangles from $\mathbf y$ to $\mathbf x$ are the bottom-right and top-left cells, each containing one $X$.
```

## Batch 92, concern 1: thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant

The named planar supplier requires all inner faces to have distinct disk labels, whereas the cap may contain both faces of one retained disk. Merely saying processed separately does not exhibit legal successive applications. The missing induction uses the supplier only with r=1, where the moving disk and each retained disk have distinct labels. It leaves the general closed-manifold and full-module claims intact.

Observed raw SHA256: `f5d6094dfd72e000c2f0d80212ecaed347965bb5513766f54d592c8e7ea0188c`; capture match: True.

Actual supplier/use: lem-marked-planar-cut-surface-regions-are-realized-by-disk-slides Statement distinctness and Proof 3.1/4.1 implement a band sum and a cut-ball finger retraction fixing retained disks/arcs. A finite tree in the cap orders the face additions; each r=1 region surrounds just the current moving face and the next unused retained face, rather than the entire multiply labelled cap.

Proposed replacement (Proof 2.1 successive legal supplier applications):

```text
[F6]'s planar construction slides $D_i$ across those faces until its outer rim is precisely $\partial D_i'$, followed by the empty-annulus isotopy. Two faces of a repeated other disk are processed separately.
```

Replace with:

```text
Apply [F6]'s planar supplier successively with exactly two inner faces, rather than once to this whole cap. Choose a finite tree of disjoint joining bands in the cap, rooted at its unique $D_i$ face, and process it outward from the root. At each stage the frontier of a small neighborhood of the processed subtree is the moving rim. A thin neighborhood of that moving face, the next unused face and their joining band is a disk with two holes whose interior misses every other current face and z. Its two labels are the current moving disk and a retained $D_j$ with $j\ne i$, so the supplier's distinct-disk hypothesis holds with $r=1$. Its completed slide preserves the cut ball and the retained disks. Use its finger-retraction identification, supported at that face and band, to carry the unprocessed cap and its remaining faces to the new cut-ball boundary; outside that neighborhood the unused faces are unchanged. Thus the next stage has the same description. If both faces of a retained disk occur, the second remains an unused face of that retained disk and is processed by a later two-face application; it is never paired with its other face in one application. A tiny auxiliary trivial arc near z, with second endpoint w, can be fixed before this construction and missed by all these cap neighborhoods, so the supplier's marked arc condition is retained. After finitely many stages the moving rim is the frontier of the whole tree neighborhood, and the remaining empty annulus in the cap gives the isotopy to $\partial D_i'$.
```

## Batch 60, concern 1: lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation

The cited common-refinement Statement assumes subdivisions of one fixed Euclidean complex. F1 only gives a second linear triangulation, so F2 and 2.1 skip a premise. The broader intersection-cell supplier and its compatible-triangulation supplier already prove exactly the needed finite refinement, without weakening the PL conclusion or changing any supplier Statement.

Observed raw SHA256: `49c8dbfd410035bed32eab5b2fe0471110348304788c578f2b283459fa918e47`; capture match: True.

Actual supplier/use: def-pl-embedding-and-subpolyhedron yields T0. The existing narrow refinement lemma proof uses the same two published suppliers: lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex applies to any two finite linear complexes in one Euclidean space with equal realization, and lem-finite-convex-cell-complexes-admit-compatible-triangulations triangulates their finite intersection cells compatibly.

Proposed replacement (metadata-only dependency additions; preserve existing supplier):

```text
  - lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement

```

Replace with:

```text
  - lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement
  - lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations

```

Proposed replacement (Statement references attribution only; no Statement delta):

```text
[[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]] — finite linear triangulations of the same polyhedron have a common refinement.
```

Replace with:

```text
[[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]] — common refinement for subdivisions of a fixed finite Euclidean complex; the intersection-cell construction below handles the two given linear triangulations directly.
```

Proposed replacement (Facts F2 supplier correction):

```text
[F2] [[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]]: two finite linear triangulations of the same polyhedron have a common finite linear refinement.
```

Replace with:

```text
[F2] [[lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex]] forms a finite convex intersection-cell complex from two finite linear simplicial complexes in one Euclidean space with the same underlying polyhedron. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]] gives it a compatible finite linear simplicial triangulation. These are the construction used in the narrower [[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]].
```

Proposed replacement (Proof 2.1 direct finite intersection refinement):

```text
2.1 Apply [F2] to $T$ and $T_0$ to obtain a common finite linear refinement $T'$. It is a subdivision of $T$, and it refines every simplex of the subcomplex representing $f(P)$; therefore the simplices of $T'$ contained in $f(P)$ form a subcomplex by [F3], with realization exactly $f(P)$. [given, F2, F3, step 1.1, construct] ∎
```

Replace with:

```text
2.1 Regard $T$ and $T_0$ as finite linear complexes on the same embedded polyhedron $Q$. Form all nonempty cells $\sigma\cap\tau$ for $\sigma\in T$ and $\tau\in T_0$, together with their faces. By [F2] these form a finite convex cell complex covering $Q$, and a compatible finite simplicial triangulation $T'$ of that cell complex exists. Each simplex of $T'$ lies in a cell contained in a simplex of $T$ and a simplex of $T_0$, so $T'$ is a common linear refinement. In particular it is a subdivision of $T$. Every simplex of the subcomplex representing $f(P)$ is a union of these refined simplices; thus the simplices of $T'$ contained in $f(P)$ have realization exactly $f(P)$ and form a subcomplex by [F3]. [given, F2, F3, step 1.1, construct] ∎
```

## Reading limits

The JSON records the twelve fully read local items and observed raw digests. External PDFs and unrelated supplier closure were not reread. No full consumer reread, historical native byte binding, acceptance, gate success or source correction is claimed. Proposals are bounded local constructions for the original concerns only; root owns guarded integration.
