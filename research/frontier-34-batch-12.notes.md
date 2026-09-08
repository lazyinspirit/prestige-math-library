# frontier-34 · beta · batch-12

**Verdict: BLOCKED / NOT READY FOR AUTHORING OR PUBLICATION.** The four owned scaffold pages are populated, but the scaffold contract's proof-closure and source-fetch requirements are not satisfied. Passing structural gates below is not a mathematical certificate.

## Scope and controlling instructions

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the general frontier-34 beta task, current plan, and owned scaffold. The live state read from `.autopilot/frontier-34/state.json` identified frontier-34 at stage1-scaffold; the inspected git head was `4501527a0`. No concluded RESUME file was treated as a live controller. The build driver owns transitions; this dispatch did not advance it.

Only these repository files were written:

- `research/frontier-34-batch-12.pages.json`
- `research/frontier-34-batch-12.coverage.json`
- `research/frontier-34-batch-12.notes.md`

Temporary audit scripts and gate outputs were written under `/tmp`. Published files, the plan, and designs were not edited.

The controlling mathematical design is `research/plan-differential-geometry-track.md`, DG-15 (the complete section beginning around line 3759, through its proof warnings) and DG-18 (line 4504 through its concluding choice/forward-reference warnings). The line-414 mention is the dependency table, not the de Rham section. The complete relevant predecessor-interface section of `research/plan-differential-topology-track.md`, including its line-122 mention, was also read: it consumes these DG results and explicitly avoids reconstructing their supply. Consequently it does not override DG-15's inventory or proof route.

`research/plan-spec.json` controls run identities, orders, categories and page requires. Conflicts retained/documented:

1. DG design calls the B pages `de-rham-cohomology-computations` and `riemannian-metric-and-volume-examples`; the plan names both with their A slug plus `-examples`. The manifest uses the plan names at orders 472 and 478, with A orders 471 and 477.
2. DG-15 lists direct DG interfaces and a homotopy/smoothing seam; the plan reaches most through `integration-of-forms-and-the-general-stokes-theorem-examples` and supplies three explicit HA pages. The plan's requires arrays were preserved exactly. Its A-to-earlier-B Stokes edge conflicts with the design's general B-leaf policy; this dispatch cannot change that edge.
3. The design's warning that the HA supplier may be unauthored is stale. The cochain, homotopy and cohomology-LES items are published. Their exact conventions still require checking, rather than treating publication as proof of adequacy.
4. DG-18's measurable volume remark expects a chartwise Lebesgue/Radon interface. The published DG-14 remark expressly supplies no such theorem. Its result has been retained as a blocked obligation, not silently reduced to compact smooth integration.
5. The design informally switches between piecewise smooth and piecewise C1 competitors. This scaffold consistently defines the length distance using continuous piecewise C1 curves; finite smooth coordinate polygonal curves establish nonemptiness. No unproved smoothing-of-length lemma is used to identify two different infima.

## Inventory and changes

Counts are 39 A + 12 B for de Rham and 50 A + 12 B for Riemannian geometry, all 113 design IDs retained with explicit `deps` arrays. Both A pages remain below the plan limit of 60. No item was removed to pass a gate. The Riemannian path-reachability lemma now precedes the distance definition it supports. The manifest contains statements, proof strategies, provenance, and source references for harvested support.

Concrete changes to the mathematical scaffold:

- Cochains are zero outside degrees 0 through dimension. Degree-zero cohomology is locally constant functions, a product over all components; the direct-sum result is explicitly finite. Empty and zero-dimensional cases are distinguished. Poincare/local exactness excludes degree zero.
- Wedge descent checks exact-times-closed and closed-times-exact, including the sign in the latter primitive. Pullback reverses arrows and composition and preserves the algebra structure.
- The intrinsic interval contraction is integrated coefficientwise. Smoothness uses repeated local applications of the compact-rectangle differentiation theorem, not a tacit global improper integral. The decomposition is `alpha_t + dt wedge beta_t`, giving `i1* - i0* = dK + Kd`.
- Mayer–Vietoris uses `s(alpha,beta)=beta-alpha`. Lifts of an overlap form are `(-rho_V eta, rho_U eta)`. The extensions by zero are justified by support closed in the ambient manifold and contained in the assigned open set; eta need not have compact support. The connector is represented by `-d rho_V wedge eta` on U and `d rho_U wedge eta` on V. Cover-preserving naturality retains this sign and the contravariant direction.
- Sphere proofs use the two punctured-sphere opens, the disconnected overlap for the circle base case, and higher-dimensional induction. They do not use the later de Rham comparison theorem or Kunneth. The angular generator has period one after division by 2pi. The top generator uses compactness, positivity and Stokes.
- Pullback positivity is equivalent to immersion. Local isometry explicitly requires equal dimensions. Norms use a square root; angles of nonzero vectors lie in [0,pi]. Smooth inverse matrices supply musical isomorphisms. Exterior inner products use the determinant normalization; they are not the unnormalized restriction of the tensor pairing.
- Length uses finite subdivisions and monotone Riemann substitution, including flat intervals. Local comparison requires compact K inside a single chart, not merely an arbitrary chart relatively compact in M; empty K and dimension zero are handled. The metric/topology proof uses nested coordinate balls, first exit, and straight segments. It imports neither geodesics nor Hopf–Rinow.
- Cross-component distance is +infinity. Distance to a nonempty subset is finite and 1-Lipschitz on an appropriate connected component; empty-set distance is +infinity.
- Volume density is primary and uses the absolute Jacobian; the signed volume form requires orientation. Divergence inherits the earlier volume-form theorem. Its boundary flux calculation constructs the outward normal from an inward-positive boundary defining function and checks the outward-first sign; the statement specifies dimension at least one and compact support.
- Hodge star is constructed in a smooth oriented orthonormal coframe; its square is `(-1)^(k(n-k))`. Finite Gram–Schmidt supplies the coframes with smooth positive denominators. Constant metric rescaling gives `star_(t²g)=t^(n-2k)star_g`. The codifferential formula is orientation only; no analytic adjoint or Hodge decomposition is asserted.
- All B entries now give concrete objects and calculations. Examples include circle distance via finite angular-chart continuation, torus metric gluing in periodic charts, polar density/divergence, conformal scaling and radial model lengths. The shortest-curve false statement includes punctured-plane nonattainment and circle nonuniqueness. The MV false statement concerns the invalid inference from restriction/gluing alone; locally constant functions on a two-open circle cover refute that inference, while smooth forms obtain surjectivity from partitions.

## Dependency audit and unresolved findings

The plan-only transitive `requires` closure has **190 pages**. A conservative structural scan read the plan, **376 historical/current `.pages.json` manifests**, and published item frontmatter. It followed requires, deps, justified_by and all forward_refs as a deliberately overinclusive screen. It reached 5,305 nodes, found one historical unresolved ID and numerous metadata cycles. This screen is not a proof graph: some forward references are orientation only and some definition `justified_by` edges point to their subsequent verification.

A second scan restricted manifests to the **19 frontier-34 batch files** then on disk, included published library item membership, and followed requires/deps/justified_by. It reached **5,206 nodes**, with zero unresolved targets, zero owned same-page forward edges and no catalogue reach through those fields. Its 125 cycles include ordinary definition/verification metadata cycles. With just requires/deps, the mixed plan/published graph has **one** cycle, described below. Counts are a snapshot of a live run, not an assertion that other batches will remain unchanged.

**F1 — published smoothing proof does not discharge its stated relative hypothesis (fatal).**

Path: `the-de-rham-complex-homotopy-and-mayer-vietoris` → `cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds` → `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` → `thm-relative-whitney-approximation-for-manifold-valued-maps`.

The entire two published theorem texts were read. Step 1.1 of the homotopy theorem reparametrizes an arbitrary continuous H using lambda constant on `t≤1/3` and `t≥2/3`, then says Hhat is smooth on a neighbourhood of those same closed regions. Constancy on a closed region does not give smoothness on a neighbourhood of its outer boundary. The relative Whitney theorem explicitly requires that neighbourhood hypothesis. The statement is standard and repairable: retain the plateau at thirds but take smaller fixed closed regions `t≤1/4` and `t≥3/4`; their neighbourhoods lie in the constant plateaus. Alternatively explicitly choose wider plateaus. This is a proof repair, not a counterexample to homotopy smoothing. The consumer retains its full continuous-invariance claim and is blocked until the published proof/interface is repaired by its owner. Smooth-homotopy invariance itself does not have this defect.

**F2 — measurable volume supplier missing (fatal).**

Path: `riemannian-metrics-length-distance-and-volume` → `rem-riemannian-volume-measure` → `rem-lebesgue-extension-of-manifold-density-integration`.

The last item is a scope disclaimer: it explicitly excludes measurable nonnegative densities, L1 densities and Radon measures and asserts no extension theorem. Compact smooth Riemann density integration cannot serve as the cited measurable chartwise construction. Existing Euclidean Lebesgue change-of-variables and Radon results were located and read, but the manifold gluing/regularity interface and its page dependency are absent. The required new pair is specified below. Do not use the retained remark as a supplier until it is installed and proved.

**F3 — mixed plan/published exactness cycle (fatal reconciliation finding).**

Path to the interface: de Rham A → `chain-complexes-and-homology` → `exactness-and-the-member-calculus` → `def-exactness-at-a-node`.

The plan records `def-exactness-at-a-node.deps` containing `thm-the-subobject-inequalities-underlying-exactness`; the published theorem's deps contain the definition. Thus reading both as supplier declarations yields a cycle. The published definition instead puts the theorem in `justified_by`. Both published texts were read: the theorem's proof uses image factorization, subobject order and kernel universality and does not actually need the named exactness definition. This is a reconcilable metadata/proof-order mismatch, not evidence that the elementary theorem is false. The plan is not writable here. A supplier owner must reconcile the definition/theorem inventory and directions; the canonical validator's success does not cover this mixed graph.

**F4 — complete mathematical closure audit not certified (fatal).**

The structural scans above do not verify every exact statement, hypothesis, axiom cost and proof in all 5,206 reachable nodes. Direct load-bearing interfaces were inspected, including cochain reindexing, cohomology LES direction/naturality, relative smoothing, bundle-metric existence, compact-rectangle differentiation, half-space extension, Riemann substitution, extremum theorem, manifold conventions, Gram–Schmidt and the missing measure seam. A full statement-by-statement transitive audit remains open; in particular load-bearing status of every historical/published forward_ref was not adjudicated. No statement of complete closure, no absence-of-all-forward-dependencies certificate, and no unconditional Foundations catalogue-clean certificate is issued.

Historical findings must not be promoted to current violations without reconciliation:

- The all-manifest screen finds `riemannian-metrics-length-distance-and-volume → compactness → filters-and-ultrafilters → deferred-set-theory-beyond-choice`. Current plan `filters-and-ultrafilters.requires` is only `order-zorn-and-the-axiom-of-choice`, and the published filters page has no catalogue supplier edge. The historical edge remains evidence to reconcile, not a valid source. The current requires/deps/justified_by screen finds no catalogue path. All potentially load-bearing forward references still require the F4 audit. Any actual Foundations supplier path to the catalogue or its items is fatal and must be replaced by earlier proved machinery.
- Historical `research/frontier-2-batch-2.pages.json` refers to `lem-closed-subspace-of-a-compact-space-is-compact`. The published locally compact Hausdorff base lemma correctly uses `thm-closed-subspace-of-a-compact-space-is-compact`; its complete proof was read. There are no missing IDs in the current supplier screen. Do not recreate the obsolete lemma spelling.

Axiom/convention review: pointwise linear algebra, finite chart arguments and finite extrema use ZF-level finite constructions. Global metric existence explicitly inherits AC_omega from the published bundle-metric corollary. Partitions, smoothing and global smooth density integration inherit their supplier hypotheses rather than becoming unconditional. The planned measurable extension must state its inherited countable-choice assumptions. No stronger set-theory catalogue result is used as a replacement.

## Required prerequisite pair (proposal only; fatal until installed)

The contract authorizes a missing prerequisite A/B pair, but neither the prose design nor plan is writable for this dispatch. Proposed title: **Measurable Densities and Radon Volume on Manifolds**; category `differential-geometry`; A slug `measurable-densities-and-radon-volume-on-manifolds`, B slug with `-examples`; proposed orders **476.1 / 476.2**, before Riemannian A at 477. Neither page need depend on de Rham comparison merely because it sits after order 476.

Proposed page prerequisites: `integration-of-forms-and-the-general-stokes-theorem`, `smooth-partitions-of-unity-and-exhaustions`, `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lebesgue-and-riemann-integrals-compared`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, and `product-measures-and-the-fubini-tonelli-theorems` (owner of `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; audit its full closure before installation). The Riemannian page must then require this A page. The proposal is not a claim that these preliminary supplier audits are complete.

A inventory in proof order (all new IDs must be rechecked for global collisions when installed):

1. `def-borel-and-completed-measurable-densities-on-a-manifold`: chartwise measurable coefficient and absolute-Jacobian convention; zero-dimensional convention separately.
2. `lem-measurable-density-chart-integrals-agree-on-overlaps`: Lebesgue substitution for diffeomorphisms, including completion/null-set preservation.
3. `def-countable-chart-gluing-of-a-nonnegative-density-measure`: disjoint Borel refinement of a countable atlas, or a precisely specified partition formula.
4. `thm-chart-gluing-defines-a-countably-additive-borel-density-measure`: nonnegative sums, countable additivity and overlap compatibility.
5. `thm-density-measure-is-independent-of-the-chart-gluing`: common refinement and nonnegative interchange justify independence.
6. `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure`: compact chart bounds, finite subcovers and Euclidean inner/outer regularity; state the all-Borel inner regularity convention and choice strength.
7. `thm-density-measure-integration-agrees-with-smooth-density-integration`: compactly supported smooth/Riemann versus Lebesgue agreement.
8. `cor-positive-density-measures-assign-volume-to-open-metric-balls`: any metric known to induce the manifold topology has Borel balls; no Riemannian-distance supplier required here.
9. `fs-local-finiteness-means-finite-total-density-measure`: Euclidean noncompact witness.
10. `fs-orientation-is-required-for-a-density-measure`: absolute-Jacobian compatibility supplies the refutation.

B inventory: `ex-chart-gluing-recovers-euclidean-lebesgue-measure`, `ex-positive-weighted-volume-on-an-open-interval`, `ex-density-measure-in-two-overlapping-circle-charts`, `ex-density-measure-on-a-nonorientable-manifold`, `ex-zero-dimensional-density-measure-is-weighted-counting`, `cex-a-smooth-density-can-have-infinite-total-mass`, `ex-borel-ball-volume-before-any-comparison-theorem`.

These are useful mathematical prerequisites, not padding. Their future manifest needs explicit dependency arrays and independent full-text source harvests. No proposal ID is currently used as if it already resolves in this batch.

## Sources, complete ranges and corrections

The coverage file contains **88 source-anchored dispositions** across two independent full treatments for de Rham and three for Riemannian geometry. Every row names its result/range and an included/inline item, existing supplier, valid deferred page, or a specific out-of-scope reason. Deferred destinations describe obligations, not existing proof suppliers.

Texts actually opened through the web reader:

- Hitchin, *Differentiable Manifolds*, C3.3b 2014: `https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf`, 94 PDF pages. Complete relevant range §6.6, printed pp.50–56, including sphere proof; §9.1, printed pp.76–79, including volume-form existence proof. Exact sublocators are in coverage.
- Nicolaescu, *Lectures on the Geometry of Manifolds*, author-hosted 702-page PDF: `https://academicweb.nd.edu/~lnicolae/Lectures.pdf`. Original `https://www3.nd.edu/~lnicolae/Lectures.pdf` retained in `original_url`; its redirect was not openable through the initial web URL. Read §§7.1.1–7.1.5, printed pp.245–263, stopping before §7.1.6; and Definition 2.2.66 through Exercise 2.2.73, printed pp.65–66. This is the retrieved edition's pagination, not uncritically copied third-edition locators.
- Datar, *Lectures on Riemannian Geometry*, dated September 11, 2025: `https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf`, 290 PDF pages. Read §§8.1–8.2 pp.45–50; §9.1 Definition 9.1.1 through Theorem 9.1.5 pp.51–52; §§9.3–9.4 main construction pp.56–58 before the appendix; §19.1 definition and Propositions 19.1.1–19.1.2 pp.139–140. The filename contains `typesett` with two t's. Truncated parallel outputs were reopened before treating the selected ranges as read.

The design's Lee book remains a design citation, not claimed as fetched/read evidence here. Hitchin and Nicolaescu are independently read replacement treatments with their own inventories and locators; Datar supplies the second metric treatment. They are not relabelled as alternate copies of Lee.

Source discrepancies checked rather than imported:

- Nicolaescu's Poincare statement needs positive degree; its radial-flow calculation is not copied as the proof. The scaffold uses the finite-interval identity verified against Hitchin and local FTC.
- Nicolaescu's degree-zero dimension formula must not be read as a cardinal equality for infinitely many components; use the product of constants. Its DGA discussion does not replace the exact-times-closed ideal calculation.
- Nicolaescu's printed explicit MV connector paragraph has the opposite sign to the differential of its own displayed lifts for the chosen difference map. The scaffold follows the published HA lift-differentiate convention and records both local representatives.
- Datar's metric norm line omits a square root and its angle interval excludes collinear endpoints. The scaffold corrects both. Datar's distance proof uses later geodesic/Gauss-lemma machinery; only its metric/topology statements are cross-checks. The local comparison/first-exit proof is written separately.
- Datar's hyperbolic-model isometry proposition is only sketched; it is not approved as an imported theorem. Model comparisons/warped completion and Myers–Steenrod have explicit later destinations. Hitchin's infinitesimal isometry discussion is also deferred.
- Nicolaescu's Hodge definition is used with two k-forms in the pairing and a degree-(n-k) output, determinant normalization, positive-definite metric and supplied orientation. No indefinite-sign convention is imported.

**F5 — source fetch verification failed (fatal).** The web reader exposed complete relevant PDF text, but local byte fetching failed with DNS errors. A shell curl attempt for Hitchin returned code 6. `source-fetch-check --stamp` returned `EAI_AGAIN` for all five page/source entries and stamped none. URL sweep likewise returned curl code 6 for all three distinct hosts. There are no fabricated hashes or `fetch_verified` fields. Network failure in this environment does not prove that the author URLs are dead globally; it does mean the required fetch-verification gate has not passed. The mathematical inventory was retained.

## Checks actually run

| Check | Result and limit |
|---|---|
| Custom ID/ordering audit | All 113 owned IDs retained; explicit deps; no owned same-page forward edge. Current structural target screen has no unresolved ID. |
| `node tools/coverage-checklist.mjs research/frontier-34-batch-12.coverage.json --require-destination` | Passed: 2 A pages, 88 harvested results, zero errors/warnings. Re-run after destination edits. |
| `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json` | Passed at run snapshot: 770 items, zero normalized, zero errors. This gate only checks explicit arrays. |
| `node tools/content-policy.mjs research/frontier-34-batch-12.pages.json --manifest-only` | Passed: 113 scoped items, zero errors/warnings. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; 1,476 pages, 892 with item lists, 579 without; substantial redundant-prerequisite warnings. Canonical plan does not contain this batch's new item lists. |
| `node tools/validate-plan.mjs /tmp/frontier-34-b12-overlay-plan.json` | Exit 0 with four owned pages overlaid on a temporary plan copy; no canonical plan mutation. Does not replace mixed-source closure audit. |
| `node tools/extcheck.mjs --quiet` | Exit 0 with 63 existing warnings, including inherited unproved-material warnings on manifold conventions/metrizability. This is not a full source or proof certificate. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-12.coverage.json --stamp --timeout-sec 10` | Exit 1: 0/5 fetch-verified, zero newly stamped, five `EAI_AGAIN` failures. |
| `node tools/url-sweep.mjs --coverage research/frontier-34-batch-12.coverage.json --out /tmp/frontier-34-b12-url-liveness.json --timeout-ms 5000 --fail-on-dead` | Exit 1: 0/3 live, three DNS failures, zero suspect. |
| `node tools/source-backing.mjs --coverage research/frontier-34-batch-12.coverage.json --liveness /tmp/frontier-34-b12-url-liveness.json --require-verified` | Exit 1: 44 harvested authored results have no source accepted by this local liveness evidence. Full text read by a different tool does not forge this gate's success. |

No publication, content generation, test suite, or driver transition was run. Before authoring, resolve F1–F5, install and prove the measure prerequisite pair, reconcile current versus historical dependency evidence, rerun source fetch/backing, and complete the statement-level transitive audit. A handoff must reread the current scaffold, supplier proofs, source ranges and these open obligations.
