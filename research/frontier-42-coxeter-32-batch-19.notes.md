# Batch 19 Step 1 scaffold — Bipartite Coxeter Elements and Ordered Root Complexes

Run: `frontier-42-coxeter-32` · pair `bipartite-coxeter-elements-and-ordered-root-complexes`
(A order 1754, B order 1755, `coxeter-groups`, design label CG-25). Outputs:
`research/frontier-42-coxeter-32-batch-19.pages.json` (6 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-19.coverage.json` (4 sources, 52 harvested rows),
`research/frontier-42-coxeter-32-batch-19.cross-batch-dependencies.json` (86 reviewed
consumer edges: 84 item + 2 page) and nine item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`. Dispatch attempt 3.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding), the design `research/plan-coxeter-groups-track.md` §CG-25, the
  machine inventory `research/coxeter-scaffold/inventory.json` (CG-25), the definition
  bindings `research/coxeter-scaffold/definition-justifications.json` (the two definitions'
  justifiers are exactly `lem-cg-steinberg-bipartite-root-enumeration` and
  `thm-cg-root-complex-convex-cones-and-facet-induction`), the independent audit
  `research/coxeter-scaffold/independent-audit.md` (its CG-25 line records the repaired
  facet-normal transport and separating-root argument that the manifest expands), the
  native A/B prose at `library/coxeter-groups/bipartite-coxeter-elements-and-ordered-root-complexes{,-examples}.md`,
  and the source report `research/coxeter-scaffold/combinatorial-source-report.md`.
- **Preserved contracts.** The six designed local supplier contracts keep their exact ids,
  kinds and order: `def-cg-bipartite-coxeter-element-and-root-recursion`,
  `lem-cg-steinberg-bipartite-root-enumeration`,
  `lem-cg-ordered-root-pairings-and-simple-systems`,
  `def-cg-brady-watt-ordered-spherical-root-complex`,
  `lem-cg-ordered-root-complex-is-geometric-simplicial`,
  `thm-cg-root-complex-convex-cones-and-facet-induction`. The B companion carries the three
  designed checks as `ex-cg-ordered-roots-and-mu-matrix-in-i2-5`,
  `ex-cg-ordered-roots-and-mu-matrix-in-a3` and
  `ex-cg-cone-intersection-versus-moved-space-meet-in-a3`.
- **Attempt history.** Attempt 2 left the page manifest on disk (timestamped 12:47 local) but
  no coverage record, no notes, no cross-batch input and no readiness record; its content was
  nonetheless complete enough to be verified item by item rather than rebuilt. This attempt
  preserved every already-correct statement, applied the mathematical corrections below, and
  completed the missing artifacts.

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` lists both pages with orders 1754/1755, category `coxeter-groups`,
the companion ids and the A page's `requires` (`finite-reflection-length-and-orthogonal-moved-spaces`,
`finite-lattice-projections-and-coxeter-chain-labels`), with empty item arrays exactly as for
every new page of this run. No item-level plan text can conflict; the design's local supplier
contracts are the item-level authority. **No design-versus-plan conflict exists.**

The run's `validate-plan` gate (run-scoped) passes. It reports two advisory
`[redundant-prereq]` notes bearing on this pair: the A page reaches
`finite-lattice-projections-and-coxeter-chain-labels` both directly and through
`finite-reflection-length-and-orthogonal-moved-spaces`. The direct edge is the declared
reading order in the task and the design; it is retained (advisory only), and no plan text
was edited.

## Mathematical corrections applied to the inherited manifest

Every correction below was checked against the fetched full texts of Brady–Watt
(arXiv:math/0501502) and the A3/I2(5) computations re-derived independently in the page's own
bipartite labelling.

1. `lem-cg-ordered-root-pairings-and-simple-systems` (4)(iv) asserted
   `{delta_1,...,delta_k} = {theta_1,...,theta_k}` as sets. This is false: Brady–Watt
   Example 6.13 exhibits `Delta = {tau_1,tau_7,tau_9}` while the epsilon's are
   `{tau_1,tau_2,tau_4}`. Replaced by the source's actual statement (Corollary 6.12): the
   reordered roots `<theta_1,...,theta_k>` form the lexicographically first top-dimensional
   simplex of `X(sigma)`.
2. The same item (4)(v) asserted `tau_i · tau_j <= 0` for all distinct `i<j` in `P_sigma` when
   `l_T(sigma) = 2`. Counterexample: in `I_2(5)` with `sigma = c` one has `P_c = {rho_1,...,rho_5}`
   and `rho_1 · rho_2 = phi/2 > 0`. Replaced by the source's correct rank-two facts
   (Theorem 5.4 and the proof of Lemma 5.6): `tau_1 · tau_t <= 0` and `tau_i · tau_{i+1} >= 0`;
   the dual Lemma 5.6 clause was already stated correctly.
3. `ex-cg-ordered-roots-and-mu-matrix-in-i2-5` (ii) stated `mu_4 = mu_2 - 2 alpha_2`. The
   recursion `mu_{i+n} = mu_i - 2 rho_i` gives `mu_4 = mu_2 - 2 rho_2 = mu_2 - 2(alpha_2 + phi alpha_1)`;
   the erroneous form fails `mu_4 · rho_4 = 1`. Corrected. (The displayed 5x5 matrix was already
   correct and is unchanged; it was re-derived entry by entry.)
4. The same item (i) wrote `c rho_i = rho_{i+2}` "(indices modulo 5)", which would force
   `rho_6 = rho_1`; in fact `rho_{i+5} = -rho_i` and `c rho_4 = -rho_1`. Restated as
   `c rho_i = rho_{i+2}` for all `i >= 1`, with `rho_{i+5} = -rho_i`.
5. The same item (iii)'s "each row is the previous row shifted by one position" is not exactly
   true of the 5x5 block (the wrap-around entry `mu_3 · rho_1 = -1 = mu_1 · rho_9 = -mu_1 · rho_4`
   carries the negative-root sign). Replaced by the exact `c`-cyclicity
   `mu_{i+2} · rho_{j+2} = mu_i · rho_j` with the boundary convention made explicit.
6. `ex-cg-ordered-roots-and-mu-matrix-in-a3` (i) wrote `c = s_1s_2s_3 = (1 2 3 4)`. With the
   item's own bipartite ordering `s_1=(1 2), s_2=(3 4), s_3=(2 3)` the product is
   `(1 2 4 3)` (right-to-left composition), and that is the element whose `rho`-recursion and
   `mu`-matrix the example correctly computes (`c^2 = (1 4)(2 3) = w_0` confirms it).
   Corrected in statement and strategy.
7. The same item (ii) claimed the entries "one to three steps below the diagonal" vanish;
   for `n = 3` the vanishing identity covers `1 <= t <= n-1 = 2` steps only, and indeed
   `mu_4 · rho_1 = -1`. Corrected to one and two steps, citing (2)(c).
8. The same item (iv) and its strategy wrote `R(rho_1)R(rho_2)c = (2 4)`. Direct computation
   in the item's model gives `s_1s_2 c = s_3 = (2 3)`. Corrected. The item's (iv) also cited
   the factorization criterion as (4) of the pairings lemma; the criterion is stated in
   `lem-cg-ordered-root-complex-is-geometric-simplicial` (1), and that dependency was added
   (level recomputed, see below).
9. `ex-cg-cone-intersection-versus-moved-space-meet-in-a3` used Brady–Watt's A3 pair
   `alpha = (1 3)gamma`, `beta = (2 4)gamma` of the *interleaved* Coxeter element
   `gamma = (1 2 3 4)`, but this page fixes the bipartite `c = (1 2 4 3)`: for that `c` one has
   `beta c = c^{-1}`, so `beta !<=_T c` and the example collapses. Replaced by the conjugate
   pair `alpha = (1 2)(3 4) = (1 4)c = R(rho_3)c` and `beta = (1 3)(2 4) = (2 3)c = R(rho_6)c`,
   which is exactly the image of Brady–Watt's pair under the relabelling `(3 4)`; all four
   claims were recomputed: `P_alpha = {rho_1,rho_2}`, `P_beta = {rho_4,rho_5}` disjoint,
   `M(alpha) ∩ M(beta) = R(e_1-e_2-e_3+e_4)` (no root, norm 2 against root norm `sqrt 2`), and
   `c = (1 4)alpha = beta(1 4)`. Statement, strategy and title were kept consistent.
10. `lem-cg-steinberg-bipartite-root-enumeration` strategy: the sentence attributing the
    sector count to the `c`-orbit of the sector was corrected to the faithful `2h`-element
    dihedral orbit whose sectors tile `P`, which is what forces `2h theta = 2 pi`, i.e.
    `theta = pi/h` (Casselman Theorem 3.11 / Steinberg Theorem 4.2 route).

No statement was weakened: the corrections replace false clauses by the exact true source
statements, and no contracted claim was dropped.

## Dependency levels (in-run only)

Recomputed with `tools/item-dependency-levels.mjs` after the A3-example dependency was added:

| level | item |
|---|---|
| 14 | `def-cg-bipartite-coxeter-element-and-root-recursion` |
| 17 | `lem-cg-steinberg-bipartite-root-enumeration` |
| 18 | `lem-cg-ordered-root-pairings-and-simple-systems` |
| 19 | `def-cg-brady-watt-ordered-spherical-root-complex` |
| 20 | `lem-cg-ordered-root-complex-is-geometric-simplicial` |
| 21 | `thm-cg-root-complex-convex-cones-and-facet-induction` |
| 19 | `ex-cg-ordered-roots-and-mu-matrix-in-i2-5` |
| 21 | `ex-cg-ordered-roots-and-mu-matrix-in-a3` |
| 22 | `ex-cg-cone-intersection-versus-moved-space-meet-in-a3` |

`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports no error
naming any batch-19 item; the errors it prints are `empty scaffold inventory` for the still-empty
pairs of batches 20, 25, 27, 30, 31 and 32, outside this batch's scope (sibling workers are
completing other batches concurrently — batch 29's inventory appeared during this verification). No item of this pair depends
on a later item of this page or of another page; the two definitions' `justified_by` targets
are their own consumers and are part of their audit closure by design.

## Dependency verification (examined, not assumed)

- All 48 declared supplier ids resolve: published items on disk, or in-run items of batches
  2, 4, 7, 8, 13, 17, 18 (all complete and stable). `tools/manifest-deps.mjs` over the 32
  manifests reports **0 normalized, 0 errors** at every run of this verification (248 items
  when the batch's own checks began, 255 after sibling workers added their new items).
- The critical interfaces were read in the supplier manifests: `def-cg-geometric-inversion-set`
  and `thm-cg-root-inversion-formulas-and-strong-exchange` (prefix roots of a reduced word are
  `N(w^{-1})`, hence the enumerated `rho_1,...,rho_{nh/2}` are the prefix roots of the displayed
  word for `w_0`), `lem-cg-orthogonal-wall-form-and-subspace-restriction` (Wall form `chi_A`,
  restriction `A_U`, order isomorphism onto the interval below `A`), `thm-cg-carter-reflection-length-and-absolute-order`
  (`l_T = dim M` and the absolute order), `thm-cg-finite-chamber-tiling-and-coset-face-identification`
  (point stabilisers and the chamber tiling), `thm-cg-finite-parabolic-longest-element-and-opposition`
  (`l(w_0) = |Phi_+|`), the spherical-simplex suppliers of batch 8, and the batch-13 diagram
  and positivity suppliers. Hypotheses, directions, conventions and choice strength agree with
  the batch-19 uses; no missing, circular, forward or inadequate dependency was found.
- Every wikilink appearing in a batch-19 statement or strategy is declared in that item's
  `deps` or `justified_by` (checked mechanically over the manifest).
- **Choice audit.** No item or proof route of this pair uses the Axiom of Choice: `S`, `W`,
  `Phi`, `T` are finite, the bipartition is constructed by distance from a fixed vertex, the
  compactness input is for a finite-dimensional sphere, all induction is on finite ranks/indices,
  and every item ends "No Choice is used". No item reaches `deferred-set-theory-beyond-choice`.

## Sources and coverage

Four sources were fetched in full and stamped by `tools/source-fetch-check.mjs --stamp`
(4/4 fetch-verified, 0 drops):

| source | kind | stamp |
|---|---|---|
| Brady–Watt, Lattices in finite real reflection groups, arXiv:math/0501502 (pp. 2–25 read; §8 only at introduction level) | paper | pdf, 29 pages, 532448 bytes |
| Steinberg, Finite reflection groups, Trans. AMS 91 (1959) 493–504 (§§2–5, pp. 495–499 read) | paper | pdf, 12 pages, 1118068 bytes |
| Casselman, Coxeter elements in finite Coxeter groups (§§1, 3.1–3.11, 4 to Prop. 4.1 read) | lecture-notes | pdf, 12 pages, 184077 bytes |
| Fomin–Reading, Root systems and generalized associahedra, arXiv:math/0505518 (§2.5, pp. 22–24 read) | lecture-notes | pdf, 69 pages, 709742 bytes |

The harvest lists 52 named results with dispositions: 25 `included`, 15 `inline`, 1 `deferred`
(Brady–Watt Theorem 7.8, the lattice property, deferred to the planned page
`noncrossing-partition-lattices-and-kreweras-complements`, which the plan places later in this
run and which consumes the convexity supplied here), and 11 `out-of-scope` with individual
reasons (Petrie-polygon packaging, associahedron comparison, the survey's alternative routes,
examples in other labellings, sections outside the pair's scope). Brady–Watt is the primary
treatment and the other three are independent treatments of the bipartition, Coxeter-plane and
the rank-two computations, satisfying the two-independent-treatments requirement (two
lecture-note sets, two papers).

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-19.cross-batch-dependencies.json` reviews every one of
the batch's 86 cross-batch edges (84 item + 2 page: the A page's two plan prerequisites
`finite-lattice-projections-and-coxeter-chain-labels` (batch 5) and
`finite-reflection-length-and-orthogonal-moved-spaces` (batch 18)). All 86 are `open`
(Step-3 proof work in the supplier batches); no `removed` or `verified` edge was claimed, since
no supplier interface changed and no consumer use was withdrawn. `frontier-dependency-ledger.mjs`
collect accepts all 86 rows with zero orphaned reviews. The whole-run
`step1-dependency-ledger` gate additionally waits for the review inputs of batches 20, 25, 27,
30, 31 and 32, which are outside this dispatch's scope (as of the final read of the ledger, 13
edges elsewhere still await reviews; batch 29 supplied its input during this verification). This batch's input is maintained
under `briefs/tasks/frontier-dependency-ledger.md`: that brief assigns one JSON array per owned
consumer batch (written here) and reserves its prose sections for the later Step-5a reviews,
which are not this dispatch's role.

## Published defects

No published defect was identified in the course of this batch. The published suppliers used
here (`def-abstract-simplicial-complex`, `def-geometric-realization-of-an-abstract-simplicial-complex`,
`def-dual-family-associated-to-a-basis`, `thm-dual-family-is-a-basis-in-finite-dimension`,
`def-linear-basis`, `def-generated-subgroup`, `def-bipartite-graph`, `thm-bipartite-iff-no-odd-cycle`,
`def-linear-isomorphism-and-invertible-linear-map`, `def-linear-map`, `def-real-and-complex-inner-product-space`,
`cor-inner-product-induces-a-norm`, `def-definiteness-inertia-and-signature-data-over-the-reals`,
`def-linear-isometry-and-orthogonal-or-unitary-operator`, `cor-euclidean-closed-balls-and-spheres-are-compact`,
`thm-compactness-under-continuous-maps`, `cor-double-orthogonal-complement-and-dimension`) were used
through their declared interfaces only; no consumer debt or unsound use was found. No entry for the
canonical ledger is required from this batch.

## Checks run (actual results)

| check | command | result |
|---|---|---|
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error naming a batch-19 item; remaining errors are other batches' empty inventories |
| manifest dependencies | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 255 items, 0 errors (final run) |
| scaffold policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 255 scoped items, 0 errors, 0 warnings (final run) |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 present, no scope drift |
| plan | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0; advisory redundant-prereq notes only |
| drift review | `node tools/drift-review-check.mjs --run frontier-42-coxeter-32` | 32 pages reviewed, no blocked edges, all owed pages above 95% published-or-earlier-in-run |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-19.coverage.json --require-destination` | 1 page, 52 harvested results, 0 errors, 0 warnings |
| fetch stamps | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-19.coverage.json` | 4/4 sources fetch-verified, 0 drops |
| citation liveness (scoped) | `node tools/url-sweep.mjs --coverage ... --out /tmp/b19-url-liveness.json` | 4/4 live, 0 failed |
| source backing (scoped) | `node tools/source-backing.mjs --coverage ... --liveness /tmp/b19-url-liveness.json --reharvest-plan /tmp/b19-reharvest.json` | 6 authored results, all backed |
| cross-batch ledger input | `frontier-dependency-ledger.collect` (read-only) | all 86 batch-19 edges reviewed, 0 orphaned |
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | batch-19 items closed; 248/248 run items ready, run still open only on the 12 empty page shells of batches 20, 25, 27, 30, 31 and 32 |

The run-wide `url-liveness` and `source-backing` gates are computed over every batch's coverage
file and therefore also wait for the batches above that have no coverage record yet; this batch's
scoped runs of both tools pass as recorded.

## Outcome

All nine items are recorded `ready`: each has a complete, source-checked proof strategy, its
prerequisites are scaffolded and their interfaces verified, and the corrections above were
applied before the records were written. No escalation is open from this batch. Owner/operator
reconciliation and the full engine gate follow construction; neither a worker exit nor a
readiness record is independent mathematical approval, and Step 3 provides that review.
