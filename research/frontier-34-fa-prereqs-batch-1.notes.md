# Batch 1 scaffold — BLOCKED, not ready for authoring

Run: `frontier-34-fa-prereqs`. Role: beta. Owned scope: the four pages at orders 288.061–288.064 only. Evidence baseline: scope ledger pins `12927d03ad00e82a443e046e6aab4d5da7abb826`. The controller, not this agent, owns transitions. No published item, library page, canonical plan, design, controller state, or other batch was edited by this dispatch.

## Deliverables and plan reconciliation

The owned `.pages.json` now contains 19/9/16/7 items (51 total), statements, explicit dependency arrays, proof outlines, and component provenance. The owned `.coverage.json` contains two independently authored main treatments for each A page and supplementary primary sources for Bauer and Milman, with 68 result dispositions. These are proposed scaffolds, not proofs or readiness certificates.

Current plan orders, companions, categories, and page requirements agree with the generated task and are preserved. Design FA-8's informal FA-5–FA-7 requirements are represented by the predecessor chain; FA-9's longer informal requirements are also inherited through that chain. Exact mathematical sufficiency of those paths remains a separate obligation.

Two design inventory entries already have published homes on `dual-spaces-adjoint-operators-and-annihilators`: `def-weak-star-topology` and `thm-bipolar-closure-for-linear-subspaces`. Both complete texts were read. They remain dependencies at their canonical predecessor home, not duplicate new items. This accounts for the difference between FA-8's 21 design entries and its 19 new A entries. FA-9 adds `def-absolute-polar-in-a-normed-dual-pair` immediately before the polar theorem. The A-page limit is 60; neither A needs splitting. No useful design conclusion was deleted to clear a check.

Other design/evidence conflicts:

- The design calls the published Sokal route countable-choice-only; its exact theorem and proof explicitly require DC as well. Fatal F1 below.
- The design treats the earlier geometric separation machinery as enough for general locally convex spaces. Its published closed/compact separation proof uses a norm metric. Fatal F2 below.
- Intended relative HB costs differ from the actual published chain ending in the AC-hypothesized dominated-extension theorem. Fatal F3 below.
- The Rossi source is by **Stefano Rossi**, titled *The Banach–Alaoglu theorem is equivalent to the Tychonoff theorem for compact Hausdorff spaces*, arXiv:0911.0332. Incorrect author/title metadata in the source design must not propagate.
- The counting-measure ell-p duality corollary is explicitly real-valued. Complex claims are retained; proof outlines specify restriction of real/imaginary parts to real sequences and reconstruction by complex linearity. A real theorem is not silently relabeled complex.

## Fatal prerequisite findings

The contract allows recording missing prerequisite pairs when the prose scaffold and plan are not writable. This dispatch owns only the assigned pairs; the global design and plan are outside that write scope. Consequently the following pairs are specified here, but are **not added to the canonical plan**. All consumers remain blocked. Proposed fractional positions must be checked again against the live plan when inserted. Item inventories below are proposals, not resolving suppliers or approved proofs.

### F1 — Sequential uniform boundedness with countable choice

Title: **Sequential Uniform Boundedness with Countable Choice**. Category: `functional-analysis`. Proposed A/B: `sequential-uniform-boundedness-with-countable-choice` / `sequential-uniform-boundedness-with-countable-choice-examples`, orders 288.0602 / 288.0603, after duality B and before weak topologies. Requires: `dual-spaces-adjoint-operators-and-annihilators-examples` (which inherits the Baire-principles pair). Weak topologies must require the new B when it exists.

A inventory, in proof order:

1. `lem-two-signs-detect-an-operator-increment`: for a bounded scalar-linear T and x,u, max(||T(x+u)||,||T(x-u)||) >= ||Tu||. Deps: `def-bounded-linear-operator`, `def-operator-norm`; triangle inequality, no choice.
2. `thm-sequential-uniform-boundedness-under-countable-choice`: assuming AC_omega, a pointwise bounded sequence of bounded maps from Banach X into normed Y is norm bounded. Deps: previous lemma, `def-banach-space`, `def-countable-choice`, `def-operator-norm`. From an unbounded operator sequence take least indices with norm >=4^n. AC_omega chooses independently near-norming unit vectors u_n with ||T_n u_n||>(2/3)||T_n||. At each stage deterministically choose the better sign of 3^(-n)u_n, breaking ties by +. The resulting Cauchy sequence has tail norm <=3^(-n)/2. Its limit has ||T_n x||>(1/6)(4/3)^n, contradiction. No dependent selection of vectors is needed after the independent choices.

B inventory:

1. `ex-sequential-uniform-boundedness-for-coordinate-partial-sums`: explicitly bounded partial-sum functionals on ell1, using the absolute-sum bound and e_1 to compute the norm.
2. `cex-sequential-uniform-boundedness-needs-a-complete-domain`: c00 with sup norm and T_n x=n x_n; each orbit eventually zero, norms unbounded, incompleteness by truncating (1/k).

Evidence: Alan D. Sokal, [full five-page primary paper](https://arxiv.org/pdf/1005.1585), p2 Lemma, equation (2), and the full following gliding-hump proof; p3 Remarks 1–7 read. The independent-vector/deterministic-sign refinement is a local adaptation of equation (2), not an axiom-strength claim attributed to Sokal. A second complete treatment and full prerequisite audit are still required before approving this new pair. Quantitatively sharp plank results and general nonmetrizable uniform-boundedness extensions in Sokal's remarks are out of scope for this sequential supplier: neither is needed to obtain the divergent orbit contradiction.

Exact inadequate path: `thm-weakly-convergent-sequences-are-norm-bounded` would use `thm-sokal-gliding-hump-uniform-boundedness` -> `def-dependent-choice`. The supplier statement begins “Assume AC_omega and DC”; its proof step 2.1 explicitly licenses dependent choices by DC. The new manifest instead exposes the missing intended supplier ID. Even after F1 is added, the separate bidual-norming choice problem F3 must close.

### F2 — Locally convex spaces and continuous separation

Title: **Locally Convex Spaces and Continuous Separation**. Category: `functional-analysis`. Proposed A/B: `locally-convex-spaces-and-continuous-separation` / `locally-convex-spaces-and-continuous-separation-examples`, orders 288.0604 / 288.0605. Requires: `dual-spaces-adjoint-operators-and-annihilators-examples`, `subspaces-products-and-quotients` (confirmed canonical home of `def-initial-and-final-topology`). Also require the relative-HB pair F3 if claiming only HB. Place before FA-8, or before FA-9 with explicit requirement edges and appropriate unoccupied orders.

A inventory:

1. `def-topological-vector-space-for-local-convexity`: real/complex vector space with jointly continuous addition and scalar multiplication; explicitly state whether Hausdorffness is separate. Deps: topology and product-topology definitions.
2. `def-locally-convex-topological-vector-space`: a TVS with a base of convex zero-neighborhoods; its continuous scalar-linear dual; real convexity over complex scalars. Deps: previous definition and convex-set definition.
3. `lem-balanced-convex-zero-neighborhood-refinement`: translations, small symmetric/balanced convex refinements, and a closed convex refinement inside a prescribed neighborhood. Deps: the two definitions; prove the finite topological-group refinements.
4. `lem-continuous-gauge-of-an-open-convex-zero-neighborhood`: the absorbing gauge, sublinearity, and the open gauge sublevel; balanced case gives a seminorm. Deps: refinement and the earlier algebraic gauge construction.
5. `thm-locally-convex-open-convex-separation`: continuous geometric HB, stated under the relative HB hypothesis or honestly under AC. Deps: gauge lemma and the exact HB supplier.
6. `thm-locally-convex-continuous-dual-separates-points`: for Hausdorff LCS, distinct points are separated by a continuous real functional (or real part of a complex-linear one). Deps: open-convex separation and Hausdorffness.
7. `thm-locally-convex-strict-separation`: disjoint nonempty closed convex C and compact convex K admit a continuous real separating functional with a strict uniform gap. Deps: open separation, compactness, neighborhood refinements. The singleton compact case suffices for the KM hull proof; retain the useful general result.
8. `lem-locally-convex-closures-and-finite-compact-convex-hulls`: closure of a convex set is convex; the convex hull of finitely many nonempty compact convex sets is compact. Deps: TVS continuity, finite products, scalar simplex compactness, continuous compact image, Hausdorff closedness.

B inventory:

1. `ex-product-scalar-topology-is-locally-convex`: finite-coordinate seminorm neighborhoods and separating coordinates.
2. `ex-locally-convex-separation-by-a-coordinate`: separate a point from a coordinate half-space, with real parts for complex scalars.
3. `cex-convex-maximum-set-need-not-be-a-face`: x^2 on [-1,1] has maximum set {-1,1}, which is extremal but not convex.

Evidence: Teschl §5.1, Theorems 5.2–5.3 and Corollaries 5.4–5.6, printed pp137–141; Bühler–Salamon §3.1.1–3.1.2, pp118–126; Hanche-Olsen Theorems 21–22 pp12–14 for the finite compact-hull use. Complete local edge mapping, full harvest for the new pair, and the norm-free compact-versus-closed proof are still required.

Exact inadequate path: `thm-krein-milman-closed-convex-hull-form` -> general continuous strict separation. Existing `thm-strong-separation-of-closed-and-compact-convex-sets` -> `lem-distance-to-set-is-lipschitz`, `thm-extreme-value-metric`, `def-metric-compactness`. Its proof takes a positive norm distance and adds B(0,r), so it supplies normed separation, not general LCS separation. The manifest exposes missing LCS IDs for the existence, hull, Bauer, and Milman consumers.

### F3 — Relative Hahn–Banach consequences

Title: **Norming and Separation Under the Hahn–Banach Principle**. Category: `functional-analysis`. Proposed A/B: `norming-and-separation-under-hahn-banach` / `norming-and-separation-under-hahn-banach-examples`, proposed orders 288.06002 / 288.06003, between the duality B and F1; recheck availability at insertion. Requires the published duality B and the earlier dominated-extension definition/gauge machinery. F1's application to bidual norming and F2 should inherit these relative results when weaker choice costs are claimed.

A inventory:

1. `def-hahn-banach-extension-principle-relative`: explicitly formulate HB as an additional hypothesis over the base set theory, not as AC or as an external recorded theorem. Deps: scalar-linear functional and sublinear-functional definitions.
2. `thm-relative-hahn-banach-norming-and-separation`: under HB, norm-preserving extension from subspaces, norming functionals, and separating dual. Split into individual lemmas at authoring if needed to make dependencies exact; do not hide multiple unproved consequences in a label.
3. `cor-relative-hahn-banach-bidual-isometry`: canonical J is isometric under HB. Deps: the relative norming result and canonical J definition.
4. `thm-relative-hahn-banach-geometric-separation`: normed convex separation under HB, including realification for complex spaces. Deps: relative extension principle and explicit gauge argument.

B inventory:

1. `ex-relative-norming-in-a-finite-dimensional-space`: explicit norming on the scalar field without invoking choice.
2. `ex-relative-separation-of-a-ball-and-an-exterior-point`: derive a separating functional from the relative norming theorem with quantitative gap.

Exact path: dual norm recovery / bidual isometry and normed separation -> norm-preserving HB consequences -> `thm-hahn-banach-dominated-extension` -> `thm-zorn`. The complete dominated-extension text explicitly assumes AC. Thus an implemented dependency on this result does not certify an HB-only theorem. Relative consequences must actually be re-proved from HB as a hypothesis; a URL or source attribution cannot discharge this obligation. Teschl's geometric HB proofs support the mathematical route, but this new pair is not yet fully harvested or approved.

## Proof-route safeguards and remaining mathematical work

- Weak neighborhoods use finite scalar tests. Weak-star continuous functionals factor through their finite coordinate image and become evaluation at one vector; no unrestricted algebraic duality is used.
- First countability uses AC_omega to refine a supplied countable local base, then finite-coordinate factorization, the Banach property of X*, and the no-countably-infinite-Hamel-basis supplier. Its transitive axiom audit is not complete.
- The weak closure/sequential closure witness is sqrt(n)e_n in real ell2. Finite tests plus harmonic divergence put zero in its weak closure; bounded weakly convergent sequences in this set have finite range. The sphere is not substituted.
- The unbounded weakly null net carries its point as a third index coordinate. Directed preorders are explicitly allowed by the published net definition; no simultaneous choice of points for all neighborhoods is hidden.
- Alaoglu uses closed linearity equations inside compact Hausdorff scalar disks. Bounded-ball metrizability does not assert metrizability of the entire dual. Compact-metric subsequence extraction uses nested closed tails and least indices, so adds no countable choice.
- Goldstine retains finite-dimensional separation and consumes no compactness theorem. Banach–Dieudonné retains the Banach hypothesis, compact finite-intersection step, recursive finite tests, c0/ell1 separation, and convergent series back in X. The complete recursive estimates and all their local suppliers still need authoring/audit.
- Bauer requires compact extremal subsets, not convex faces of its maximum set. The proof outline includes the Zorn refinement separately. Milman assumes compact K=closure(co(A)); it never assumes arbitrary compact generating sets have compact closed convex hulls.
- Probability measures mean regular Borel probabilities on compact Hausdorff K. The complete RMK prerequisite chain, preservation of regularity under restriction, and the support-to-Dirac argument have not yet been audited. They remain blockers, not tacit applications of a metric-only measure theorem.
- Source references on items are broad pointers to the owned coverage. Some canonical constructions (operator shifts, preadjoint converse, first countability, regular-measure extreme points) still need more precise source-specific harvest/support rows. The 68-row structural coverage pass does not close those backing obligations.

## Dependency audit evidence and limits

A read-only inventory traversal loaded the current plan, all 367 top-level `research/*-batch-*.pages.json` manifests present at traversal time, and the published item frontmatter. Canonical plan ownership took precedence over historical manifest duplicates; published item metadata supplied current actual dependency edges. The two A-root page-requirement closure contained 172 pages. Seeding with all planned items on those pages and traversing `deps`, `justified_by`, and all `forward_refs` reached 3798 item IDs and no unresolved old IDs. This deliberately overapproximates load-bearing forwards and includes predecessor B inventories.

**This is graph discovery, not the required complete mathematical audit.** All 3798 full statements/proofs have NOT been read and checked for hypotheses, direction, conventions, choice strength, and load-bearing use. It would be false to certify closure from the ID count. New batch dependencies have been mechanically checked separately; the four new supplier IDs produce six missing-edge errors.

The overapproximation reached 15 recorded remarks, including `rem-baire-category-choice-strength`, `rem-halpern-levy-bpi-not-ac`, `rem-hahn-banach-hamel-basis-open`, and the p=infinity representation warning. Merely encountering an orientation remark in this superset is not evidence of a forbidden Foundations proof path. Conversely the graph scan is not a waiver of the boundary. The original plan validator reported no Foundations boundary error; the final overlay reported only the six missing supplier edges. Full classification of recorded edges and load-bearing forwards remains required. No item from `deferred-set-theory-beyond-choice` was added as a supplier by this batch. Do not retire the open audit based on either validator pass.

## Source retrieval and open source blockers

Bühler–Salamon: the ETH original returned HTTP 403; a university-hosted copy of the same 2017 book was recovered and read. Coverage retains `original_url`. Teschl: the 2017 university PDF was available through the web reader and a complete local extracted text; this is the cited edition with printed page numbers in the harvest. A newer author URL returning 404 was not substituted silently. The two books are independent treatments, not two copies of one source.

Ball's full six-page primary paper was read for Bauer, and Hanche-Olsen's full relevant Theorems 21–22 were read through the end of Theorem 22's proof. Their exact URLs and locators appear in coverage. Sokal's full primary proof was read for F1 and is linked above; its axiom refinement is explicitly our adaptation.

Bell's full text at `https://publish.uwo.ca/~jbell/acbook.pdf` repeatedly timed out in the web reader. The design's historical assertion KM+BPI=>AC is retained as an **unverified source obligation**, not an approved recorded theorem and not a dependency. Knapp was recovered but its complete selected-range harvest is unfinished; Conway's named cross-check was not recovered. Teschl/BS source sections read more broadly than the selected harvest still require a final omission reconciliation (including auxiliary exercises and applications); a partial named-result harvest must not be represented as a completed whole-section harvest.

Local `source-fetch-check --stamp` failed every one of the six coverage source entries with `EAI_AGAIN`. The web reader recovered the main texts, but that does not generate the tool's byte/hash stamps. **No stamp was forged or borrowed.** Missing stamps and missing full text remain fatal source closure failures. No request for wider network or filesystem access is made.

## Checks actually run

- `node tools/validate-plan.mjs research/plan-spec.json`: pre-scaffold current-plan inventory check reported OK (892 populated pages, 589 empty); warnings retained. This did not validate the new batch.
- `node tools/manifest-deps.mjs research/frontier-34-fa-prereqs-batch-1.pages.json`: passed, 51 items, zero normalizations/errors.
- `node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-1.coverage.json --require-destination`: passed structurally, 2 A pages, 68 harvested results, zero errors/warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-34-fa-prereqs-batch-1.pages.json`: initial run found eight missing edges, including two accidental `def-net` spellings. Those were corrected to the read published `def-directed-set-and-net` and `def-net-convergence-and-cluster-point`. Final run: **6 errors**, all missing F1/F2 suppliers; zero warnings.
- `node tools/validate-plan.mjs /tmp/fa-batch1/overlay-plan.json`: the temporary overlay replaced only the four owned page entries. **FAIL, six errors**, the missing supplier edges. No canonical plan write. This check includes ordering, item identity, B-home restrictions, and the plan's Foundations boundary rules; it does not establish proof sufficiency.
- `node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-1.coverage.json --stamp --timeout-sec 8`: **FAIL, 0/6 fetch-verified, all EAI_AGAIN, zero newly stamped**.

No authored-item precheck, rendering, judge, publication, or full mathematical-closure pass was run or claimed. Unrelated working-tree changes were present from other work and were left alone.

## Handoff

Keep both pairs and all consumers blocked. Before resuming, reread these artifacts, the live plan and scope, exact supplier proofs, source texts, and open obligations. Insert and fully scaffold the missing prerequisite pairs through the owning plan/prose workflow; complete the transitive proof/axiom and Foundations boundary audit; finish exact source harvesting and recover Bell/other required full texts; obtain real fetch stamps; then rerun the batch checks. Do not weaken the mathematics, replace a missing supplier by a catalogue remark, or interpret the structural coverage pass as readiness.
