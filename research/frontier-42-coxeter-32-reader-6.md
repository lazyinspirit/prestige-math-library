# Reader 6 — batch 6, frontier-42-coxeter-32

## Scope and outcome

Reviewed both assigned pages and all eight authored items independently. Seven assigned draft items, their affected proof contracts, and A-page prose were repaired. The shrinking-edge counterexample and all B-page prose were left unchanged. All claims (including the geodesic subsequence clause, weighted-tree equality criterion, and exact hexagon constants) remain present. No withdrawal is proposed. No uneditable item or page defect remains identified.

The disk status command confirmed the run is active at Step 5a. Every repaired item is draft and carries `pipeline_run: frontier-42-coxeter-32`. This report records local review and mechanical checks; it is not a judge record, acceptance stamp, or engine transition.

## Opened inventory and dependency order

Opened `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the Step-5 portions of `WORKFLOW.md`, `research/frontier-42-coxeter-32-batch-6.pages.json` (item inventory and dependency metadata), and `research/frontier-42-coxeter-32-batch-6.proof-contracts.json` (citation mappings, derivations and boundary obligations). The manifest's long author strategies are not treated as mathematical evidence.

Assigned pages, including frontmatter, summaries and placements:

- `library/coxeter-groups/coxeter-polyhedral-gluings-and-intrinsic-metrics.md` (A).
- `library/coxeter-groups/coxeter-polyhedral-gluings-and-intrinsic-metrics-examples.md` (B).

Assigned item bodies, including statements/constructions, facts, arguments and remarks, were read in this order after the suppliers needed for each:

1. `items/def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric.md`.
2. `items/lem-cg-polyhedral-face-coherence-and-uniform-star-radius.md`.
3. `items/thm-cg-polyhedral-chain-metric-topology-and-properness.md`.
4. `items/lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity.md`.
5. `items/thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics.md`.
6. `items/ex-cg-interval-realized-tree-versus-vertex-graph-metric.md`.
7. `items/cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete.md`.
8. `items/ex-cg-hexagonal-a2-cell-and-graph-distance.md`.

The following supplier files were opened at their definitions/statements and relevant clauses. Complete arguments were also inspected for the finite cell face calculus, compatible triangulation, finite weak topology, compact-realization theorem, Heine–Borel, compactness/completeness transfer, extreme-value theorem, and proper-target Ascoli extraction where these supplied substantive prerequisites. Ordinary order, graph, continuity and inner-product statements were checked at the cited interface; this inventory does not claim an independent audit of every supplier's entire transitive closure.

- `items/def-metric-space.md`.
- `items/def-metric-topology.md`.
- `items/def-finite-convex-cell-complex-and-linear-subdivision.md`.
- `items/def-face-poset-and-order-complex.md`.
- `items/def-partial-order.md`.
- `items/def-isometry-and-metric-embedding.md`.
- `items/def-abstract-simplicial-complex.md`.
- `items/def-geometric-realization-of-an-abstract-simplicial-complex.md`.
- `items/def-simplicial-subcomplex-star-closure-and-link.md`.
- `items/lem-finite-convex-cell-complexes-admit-compatible-triangulations.md`.
- `items/lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex.md`.
- `items/lem-barycentric-face-chains-triangulate-a-geometric-simplex.md`.
- `items/lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology.md`.
- `items/prop-a-finite-simplicial-complex-has-compact-hausdorff-realization.md`.
- `items/thm-heine-borel-rn.md`.
- `items/def-canonical-barycentric-realization-map.md`.
- `items/lem-barycentric-coordinates-are-unique.md`.
- `items/thm-extreme-value-metric.md`.
- `items/def-metric-ball.md`.
- `items/def-metric-compactness.md`.
- `items/def-complete-metric-space.md`.
- `items/def-cauchy-in-metric.md`.
- `items/def-metric-convergence.md`.
- `items/lem-metric-reverse-triangle.md`.
- `items/lem-metric-nonnegativity.md`.
- `items/thm-compact-implies-complete-and-totally-bounded.md`.
- `items/lem-closed-subset-of-a-compact-space-is-compact.md`.
- `items/thm-continuous-bijection-from-a-compact-space-has-continuous-inverse.md`.
- `items/lem-metric-cauchy-with-convergent-subsequence.md`.
- `items/def-upper-bound.md`.
- `items/def-extended-reals.md`.
- `items/lem-extended-reals-complete.md`.
- `items/def-infimum.md`.
- `items/def-topology-of-uniform-convergence.md`.
- `items/def-limsup-and-liminf-of-nonnegative-extended-sequences.md`.
- `items/def-real-limit.md`.
- `items/thm-algebra-of-limits.md`.
- `items/lem-limit-preserves-order.md`.
- `items/cor-archimedean-reciprocal.md`.
- `items/lem-of-add-order.md`.
- `items/def-complete-ordered-field.md`.
- `items/cor-connected-subsets-of-the-line.md`.
- `items/cor-intermediate-value-theorem-topological.md`.
- `items/def-metric-continuity.md`.
- `items/def-equicontinuity.md`.
- `items/cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets.md`.
- `items/def-geodesic-and-geodesic-metric-space.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-metric-bounded-diameter.md`.
- `items/thm-metric-regularity-hierarchy.md`.
- `items/lem-real-line-is-a-metric-space.md`.
- `items/def-interval.md`.
- `items/def-graph-path-metric.md`.
- `items/thm-the-path-metric-of-a-connected-simple-graph-is-a-metric.md`.
- `items/def-cycles-trees-and-forests-in-a-simple-graph.md`.
- `items/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path.md`.
- `items/def-connected-space.md`.
- `items/thm-continuous-image-of-a-connected-space.md`.
- `items/thm-unions-of-connected-sets.md`.
- `items/lem-geometric-sequence-null.md`.
- `items/lem-metrics-on-rn.md`.
- `items/def-convex-subset-of-euclidean-space.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-inner-product-space.md`.
- `items/def-inner-product-norm.md`.
- `items/prop-pythagorean-parallelogram-and-polarisation-identities.md`.
- `items/def-path-connected.md`.
- `items/thm-path-connected-implies-connected.md`.
- `items/thm-triangle-content-and-base-height-formula.md`.
- `items/def-base-and-height-for-plane-figures.md`.
- `items/lem-determinant-base-height-identity-in-r2.md`.
- `items/thm-of-square-roots.md`.
- `items/lem-of-square-monotone.md`.

## Repairs and evidence

### Gluing definition

At the end of **Chains and the chain metric candidate**, the old text said real-valued finiteness was part of the standing hypotheses and was not automatic, immediately after deriving it from connectedness. It is a consequence of (H1) and the data, not an extra assumption. The clopen chain-reachability argument in the topology theorem, step 1.1, proves this without Choice. Corrected this explanation; the definition's actual domain and standing hypotheses are unchanged.

### Star lemma

In Statement (ii) and proof step 3.2, the formula `1/h` ranged over all simplices, including singleton simplices. A singleton has no nonempty opposite affine face, so that height is undefined. Restricted the reciprocal heights to positive-dimensional simplices and gave singleton coordinates slope zero; if there are no positive-dimensional model simplices, take `L=1`. This retains the same uniform-radius conclusion, including `D=0`.

Step 1.1 silently needed attainment of the maximum of an affine function on a cell to descend in dimension and locate vertices. Added the published `thm-extreme-value-metric` to deps and [F8], and verified its hypotheses: the cell is nonempty and compact, and an affine coordinate function is Lipschitz by the displayed coefficient-sum estimate. Explained why the coordinate gradient has norm `1/h` in step 3.2. The compatible coning supplier and the face calculus supply the triangulation, barycentre interior argument, carrier uniqueness and finite-star argument; no cell-metric restriction equality was assumed.

### Metric, topology, properness and completeness theorem

Step 1.2 formerly subdivided a chain-length interval with strict inequalities even for a zero-length chain. It now handles `z=x0` in the starting star and otherwise traverses a positive-length chain after deleting repeats.

The old step 2.3 (now **3.1**) applied a compact-metric result to stars known compact in the weak topology, without stating the transfer. Added the open-cover derivation: by step 2.2, metric-open covers are weakly open on each star, hence have finite subcovers. Finite unions are metric compact by taking a finite subcover on each star. This closes the prerequisite before the compact-metric closed-subset theorem is applied. The omission was short and immediately closable, but it is now explicit. The following topology-comparison step is now **3.2**, and all references were updated.

### Metric length lemma

The Statement and steps 1.1 and 6.1 used lengths on `[u,u]` despite defining paths/partitions only on nondegenerate intervals. Added the singleton convention: one-term partition, empty sum, length zero. Chord and additivity endpoint cases now use that convention rather than asserting an undefined restriction length. In step 1.1, extending a partition by a new endpoint gives a sum **no smaller**, not the same sum, because it adds a nonnegative chord. This preserves the argument for infinite length.

The arclength continuity argument uses a near-maximal partition plus continuity of the original path to bound the length of a short restriction. Its quotient construction is constant on fibres, and the canonical supremum preimage construction in step 6.1 establishes unit-speed length without selecting arbitrary preimages across an infinite family.

### Geodesic theorem

[F10] said the supremum of tail infima was at most every tail infimum. This is false: for a sequence `a_k=1-1/(k+1)`, the limit inferior is 1 while each finite tail infimum is less than 1. Corrected the direction and replaced the inference in step 5.1. For each positive epsilon, eventual bounds `L(gamma_nk)<R+epsilon` place every tail infimum below `R+epsilon`; their supremum is therefore at most `R+epsilon`, and then at most `R`. Together with lower semicontinuity and the endpoint chord bound this proves exact limit length `R`.

Step 2.1 silently assembled one chain for each positive integer, while step 4.1 and the contract claimed Ascoli was the only use of Choice. Added an explicit application of the already-assumed Axiom of Choice to the countable nonempty sets of chains, with common-cell witnesses. Step 7.1 records selection of realizing paths if those witnesses are not already supplied. Removed the false exclusive-use claim. No new assumption was added to the theorem's interface.

In step 7.1, `M=R+sup ell_n` could vanish for an all-zero sequence, producing a closed ball of radius zero forbidden by the opened `def-metric-ball` convention. Use `M=1+sup ell_n>0`. A convergent length sequence is bounded (eventual bound plus finitely many initial terms), so this is finite. Corrected the length-limit references to step 5.1 and explained the same tail-infimum argument for the arbitrary sequence. The stronger subsequence clause is retained.

### Tree example

[F4] cited `def-metric-space` for the claim that absolute difference is the usual real metric and that triangle equality characterizes betweenness. The abstract metric definition supplies neither assertion. Added `lem-real-line-is-a-metric-space` to deps and cited it, then derived the equality criterion directly by the three possible positions of the middle point. This supplies exactly the induction's real-interval input without treating it as unstated background.

The Given data now distinguish vertex, edge and empty-face labels by disjoint tags. Step 1.1's old map `u -> F_u,e` claimed an isomorphism from a poset including the empty element onto the face set, although nonempty face maps are the gluing data. Corrected it to `p -> F_p,e` on `{a,b,e}` onto the nonempty faces. Also stated continuity of each cell inclusion from the weak-open trace criterion before invoking connected-image results.

Checked the leaf-cut induction, deletion of excursions through the attaching vertex, equality with the independently defined smaller-tree chain metric, the interval-characterization injectivity argument, and isometry of the concatenated geodesic across the attaching point. Weighted vertex distances agree with the unweighted metric on all vertex pairs exactly when every edge length is one.

### Hexagon example

The metric and height computations were local, but the Coxeter orbit and Cayley-graph assertions appeared only as literature assertions. Added a local proof, now **step 3.1**, using the two explicit reflection matrices. They square to the identity, their product has order three, every presentation word reduces to one of six words, and those words send the generic point to the six distinct listed vertices. The chamber-wall distances are both one-half. The triangulation proves that the orbit hull is `H`, and right-generator neighbors identify the Cayley graph with its boundary cycle. Specialized the introductory source description to this proved A2 calculation; all four stated example conclusions and the source references remain.

Clarified boundedness/nonemptiness of the inequality-defined cell: the two oblique bounds imply `|x1|<=1`, and the horizontal bounds give `|x2|<=sqrt(3)/2`. Singleton coordinate slopes are now explicitly zero, agreeing with the repaired star lemma. The existing triangle calculation gives heights `1/2`, `sqrt(3)/4`, `sqrt(3)/2`, hence maximum slope `4/sqrt(3)` and radius `sqrt(3)/24`. Checked the coordinate distances `1,sqrt(3),2` and the modulo-six graph lower bound giving `1,2,3`. Adopted canonical phase numbers for the inserted proof and updated all references.

### A-page prose and contracts

Corrected “three further results” to two and replaced the false “exactly once” Choice summary with its actual sequence-selection and Ascoli uses. The concluding Davis-cellulation application now expressly requires (H1)-(H3) and the declared Choice assumption for geodesics, rather than suggesting that the named cellulation automatically has these hypotheses. The Davis-cellulation tower itself was not audited here.

Updated all seven affected contracts: derivation claims and inputs match the final numbered proofs; the star contract includes the extreme-value supplier and corrected singleton boundary; the tree contract cites the real-metric supplier; the geodesic Choice and zero-length obligations are accurate; and all phase-number references follow the final proof. No assigned item had a `verification.judge` record to remove. No judge, audit, verdict or acceptance stamp was added.

## Source evidence

- [Bridson–Haefliger, Metric Spaces of Non-Positive Curvature](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf): I.1.18 and complete I.1.20(1)–(7) with its proof, printed pp. 12–13 (PDF pages 35–36), give metric path length, chord/additivity, continuity of arclength, factorization and lower semicontinuity. I.1.22, printed p. 14, records the geodesic consequence at distance-minimizing length. The item additionally proves its version for arbitrary, possibly discontinuous maps where continuity is unnecessary; I.1.20 calls a path continuous, so that extension is local rather than an exact quotation. I.7.2–I.7.6, printed pp. 98–100, were opened through the complete cell-metric caveat: an edge of length 3 in a triangle with two edges of length 1 illustrates a shortcut outside a cell. I.7.11, printed p. 101, explicitly identifies the shrinking-interval gluing with a half-open interval; I.7.13 and its proof through printed p. 102 establish completeness for finite shapes. These passages resolve the relevant source qualifications; no full reading of I.7.19 is claimed or used as a substitute for this batch's local proof.
- [Davis, The Geometry and Topology of Coxeter Groups](https://people.math.osu.edu/davis.12/davisbook.pdf): complete printed pp. 128–131 were extracted from the downloaded author PDF (PDF pages 144–147). Definition 7.3.1 defines a Coxeter cell as the convex hull of a generic orbit; Examples 7.3.2(ii) qualifies regularity by equal distances to the chamber rays. Proposition 7.3.4 identifies the Davis-cellulation 1-skeleton with its Cayley graph. The new reflection calculation proves the specialized A2 identifications locally. Printed p. 508 (PDF page 524), Definition I.3.3 and Proposition I.3.4, was also opened: it actually prints the alternative “locally finite or finite shapes” completeness claim. The assigned shrinking-ray item correctly refutes its unrestricted local-finiteness alternative; this is a source qualification, not an uneditable repository-item finding. Web-tool retrieval of Davis timed out twice; direct HTTPS download and local PDF extraction succeeded.

## Page verdicts

- **A — `coxeter-polyhedral-gluings-and-intrinsic-metrics`: coherent after the recorded repairs; ready for the independent Step-5b lead.** The metric/topology/properness construction and the Choice-assuming geodesic route are justified by the opened suppliers and local arguments. Summary assumptions and Choice accounting now match the items.
- **B — `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples`: coherent after assigned-item repairs; prose unchanged.** The tree, shrinking-ray and hexagon conclusions agree with the summary. The shrinking ray satisfies connectedness and the stipulated pointwise local finiteness, has infinitely many interval shapes, is isometric to `[0,2)`, and is incomplete and not proper. All placements are the assigned examples; no downstream consumer is introduced on this page.

These are reader verdicts, not self-certification or publication decisions.

## Validation and handoff

Each of the seven changed item paths was run through `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. Reflow reported unchanged; final prechecks passed for all six proof-bearing items, and the definition reported zero checked proofs and zero failures. Two first prechecks requested canonical phase renumbering (properness and hexagon); the proposed numbering was adopted, contract references updated, and both final checks passed.

`node tools/rendercheck.mjs` passed on all seven changed items and the changed A page. After the final source edits and formatter, the explicit batched `node tools/proof-layout.mjs` invocation on all seven changed item paths returned: **7 items, 50 steps, 0 defects**. A local comparison confirmed all seven affected contracts have exactly the current numbered proof claims. An exact rational-plus-square-root arithmetic calculation independently checked both reflection involutions, the order-three product, orthogonality, and the six listed A2 orbit points. An initial optional SymPy attempt could not run because that module is absent; the exact calculation used only Python's standard-library fractions and succeeded.

No uneditable findings, proposed withdrawals, or mathematical blockers remain identified. `research/frontier-42-coxeter-32-reader-findings-6.json` contains an empty findings array. Only the seven assigned draft items, assigned A-page prose, affected batch-6 proof contracts, this report and the requested findings artifact were written.

Coverage limits: supplier interfaces and necessary arguments were checked for this batch, not the entire published transitive library or subsequent Davis/CAT(0) applications. Source reading is limited to the sections above, and mechanical checks do not certify mathematics. No cross-batch defective supplier was identified, so no observed-byte binding is claimed.
