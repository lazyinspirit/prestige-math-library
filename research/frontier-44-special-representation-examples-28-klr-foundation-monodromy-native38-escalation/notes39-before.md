# Batch 39 — `projective-hodge-polarization-foundations` (order 1812) / `projective-hodge-polarization-foundations-examples` (order 1816)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`complex-analysis`. Owner direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) read first;
it requires the appended 21 prerequisite pairs to live in this same native run and preserves every
original claim and source obligation. Canonical plan: `research/plan-spec.json` orders 1812/1816 with
the seven-entry `requires` list reproduced verbatim in the manifest. Design: the "Projective Hodge
Polarization Foundations" section of `research/plan-klr-foundation-prerequisites.md` (lines 793-853),
its six carrier drafts under
`research/frontier-44-special-representation-examples-28-klr-foundation-hodge-drafts/`, and the author
packet `research/frontier-44-special-representation-examples-28-klr-foundation-hodge-packet.json`.

Scaffold written: **6 A items + 1 B item = 7 items**, all recorded `ready`. In-run dependency levels
9 (analytification), 11 (Lefschetz sl2 / hard Lefschetz), 3 (new morphism conventions),
4 (orthogonal splitting), 12 (Hodge–Riemann), 13 (projective package), 4 (B example) — computed by
`tools/item-dependency-levels.mjs`. One **new local definition item**
(`def-morphisms-and-polarizability-of-rational-hodge-structures`) was added on the A page before its
consumers. No item was escalated, no page split was needed, both pages are far below the 100-item cap.
Only this batch's manifest, coverage, notes, cross-batch input and Step-1 readiness records were
written; no published content, shared plan, engine state or verdict was edited.

## Design / plan comparison (every conflict recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L659**. That line falls inside the preceding
   "Complex Algebraic Stratified Topology" section; the "Projective Hodge Polarization Foundations"
   section of the current file begins at line **793** and ends before line 855. The section was
   located by title and read in full, together with every linked carrier draft and the packet.
2. **The plan controls.** The plan-spec inventory (5 A items, 1 B item, orders 1812/1816, the same
   seven-entry `requires` list) matches the design's items and declared inputs item for item; no
   claim, source or route was dropped, narrowed or weakened. The plan's within-page order
   (analytification, Lefschetz, splitting, Hodge–Riemann, package) is preserved; the new definition
   item is inserted before its consumer, the splitting lemma. The packet's recorded
   `planning_conflict` (published general-dimensional `dbar`/sheaf suppliers homed at later canonical
   orders than a requested splice) concerns the companion compact-Kähler pair, not this one: batch 39
   reaches those suppliers only through the in-run `compact-kahler-hodge-foundations` page, so the
   conflict binds no item here and was left to central ordering.
3. **Packet warnings preserved.** The packet's `remaining_inputs` boundary ("Weak Lefschetz, Gysin,
   relative/perverse/singular semisimplicity are other owners' inputs, not supplied by this absolute
   package") is carried verbatim in the statement of
   `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`.

## Dependency corrections against the design's declared inputs

All added targets resolve inside the declared `requires` closure (`validate-plan --run` exit 0). Each
change repairs a missing or implicit declaration; none changes a claim.

- **New local definition.**
  `def-morphisms-and-polarizability-of-rational-hodge-structures` (statement `literature-derived`,
  proof `not-applicable`) supplies the morphism, direct-sum, short-exact-sequence, splitting,
  polarizability and simplicity vocabulary used by the splitting lemma and by the package's
  functoriality/splitting clauses. It depends only on the in-run conventions definition. It is
  deliberately *not* routed through `def-rational-mixed-hodge-structure` /
  `lem-morphisms-of-mixed-hodge-structures-are-strict` on the mixed-Hodge page (order 1800): that
  page is outside this page's `requires` closure, so a dependency on it would be an
  undeclared-prereq error. The pure-case definitions mirror Deligne, Théorie de Hodge II,
  (2.1.11)-(2.1.12).
- **Analytification lemma.** Added `def-axiom-of-choice` (the Jacobian criterion, the ample-powers
  embedding, the first-Chern-form comparison and the rational comparison all assume AC),
  `def-complex-manifolds-and-holomorphic-vector-bundles` (in-run batch 31, level 0: the target
  manifold notion), `def-complex-projective-space-and-holomorphic-charts` (published: ℙ^N(ℂ) is a
  compact Hausdorff second-countable complex manifold), and the connection/curvature definitions
  `def-complex-linear-and-compatible-bundle-connections` and
  `def-curvature-of-a-vector-bundle-connection` (published: the local Chern-connection computation).
- **Lefschetz theorem.** Added `def-axiom-of-choice` only; the design's other five inputs are kept.
- **Splitting lemma.** Added the new definition item; the design's single declared input
  (`def-compact-kahler-manifold-and-hodge-polarization-conventions`) is kept as a direct dependency
  because the statement cites its Weil form and polarization clauses.
- **Hodge–Riemann theorem.** Added `def-axiom-of-choice` and
  `thm-choice-implies-dependent-implies-countable-choice` (published batch-2 item of this run): the
  general Stokes theorem consumes only AC_ω, which the item derives from the stated AC. No other
  change. The projective-space and ample-powers citations that had briefly been placed in the
  strategy were removed because the projective instance is already supplied by the declared
  analytification lemma.
- **Projective package.** Added `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`
  (the design's proof route explicitly applies "the compact Kähler Hodge theorem and rational scalar
  comparison to X", but the comparison was absent from its declared inputs) and `def-axiom-of-choice`.
- **B example.** Added `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`
  (published): the carrier's verification computes *e=f, *f=−e with the complementary-basis formula
  in addition to the general primitive-star formula.

## AC bookkeeping

Full AC is stated on the four A items whose arguments consume AC-stated suppliers (analytification,
Lefschetz, Hodge–Riemann, package), each declaring `def-axiom-of-choice`; the Hodge–Riemann item
additionally declares `thm-choice-implies-dependent-implies-countable-choice` for the AC_ω-only
general Stokes theorem. The splitting lemma and the B example are choice-free (finite-dimensional
rational/complex linear algebra on a fixed structure and a single two-plane respectively) and say so
in `axiom_use`; their statements carry no AC sentence. The new definition is choice-free. No
incompatible-axiom branch is created; no Foundations item is reached and
`deferred-set-theory-beyond-choice` is not on any proof or prerequisite path.

## Source work (full text fetched, stamped and inspected)

`source-fetch-check --coverage … --stamp`: **6/6 source instances fetch-verified (6 newly stamped)**;
check mode `6/6 source(s) fetch-verified`, `6/6 resolved (0 documented drops)`. Five distinct
documents. The four documents previously used by batch 35 carry identical hashes to that batch's
record (`schnell class 17` 495589/`96158c7e4223ba2d`, `class 18` 820132/`6d47f864e9b01892`,
`Demailly` 3557990/`d7c7654a7417e832`, `Deligne II` 5404038/`748edefb44fded8a`); Serre's GAGA was
newly fetched (4134102 bytes, sha256_16 `9898f985dd693249`, 43 pp.) and inspected locally with
`mutool`. Two independent treatments per A page are present and include a full monograph (Demailly)
and a complete lecture-note set (Schnell classes 17-18), beside the Serre and Deligne papers.

- **Serre, GAGA** (Numdam full article): §1 n°1-5 and §2 n°5-7, printed pp. 2-12. Proposition 2
  (unique analytic structure, separated, countable at infinity), Corollaire 3 (analytic dimension r),
  Proposition 6 (complete ⇔ compact analytification) → analytification lemma; Lemme 1 (regular maps
  holomorphic, bi-regular maps analytic) → analytification lemma; the analytic-space preliminaries →
  inline. All four headline results disposed `included`.
- **Demailly, Complex Analytic and Differential Geometry** (book): Chapter V §12 (12.2)-(12.8),
  §13.2-13.4, §15.B (15.8), (15.10), printed pp. 268-272 and 279-281; Chapter VI §4.4-(4.6),
  printed pp. 296-297; §5.1-5.3, §6.1, printed pp. 300-306; §8.3 (8.13)-(8.17), printed p. 313.
  The Chern-connection formulas, the Lelong-Poincaré/first-Chern theorem and Θ(𝒪(1)) with the
  generator statement → analytification lemma; the Fubini–Study metric → analytification lemma; the
  submanifold-restriction example → Hodge–Riemann theorem; the primitive decomposition and hard
  Lefschetz theorem → Lefschetz theorem; §9 Jacobian/Picard/Néron-Severi → `out-of-scope` (no
  consumer in this pair).
- **Deligne, Théorie de Hodge II** (Numdam full PDF): (2.1.10)-(2.1.17) printed pp. 26-27, (2.2.1)
  printed p. 27, Lemme (4.2.3) with (4.2.2) and (4.2.4)-(4.2.5) printed p. 44. Morphisms of Hodge
  structures → the new definition; polarizations and Lemme (4.2.3)(i) with its orthogonal-complement
  proof → splitting lemma; Tate twist → Hodge–Riemann theorem (inline); (2.2.1) compact Kähler
  hypercohomology ("par exemple projective lisse") → package; (4.2.4)-(4.2.5) families →
  `out-of-scope` (the geometric-fixed-parts pair of this run owns variations, and no item here uses
  them).
- **Schnell, MAT 545, Class 18** (lecture notes, complete 6 pp.): Corollaries 18.1-18.2, Corollary
  18.4 with Theorem 18.5, the sheaf Ω^p_M with Corollary 18.7 → `inline` in the Lefschetz item;
  Theorem 18.13 with Corollary 18.14 → `included` in the Lefschetz item; Theorem 18.15
  (Hodge–Riemann) → `included` in the Hodge–Riemann item; the ∂∂̄-lemma and the Betti-number
  applications → `out-of-scope` with reasons. This **discharges batch 35's deferral** of the
  cohomological Lefschetz decomposition and hard Lefschetz to this page, and also harvests Theorem
  18.15, which batch 35's class-18 harvest had not listed.
- **Schnell, MAT 545, Class 17** (lecture notes, complete 4 pp.): Proposition 17.3 (Weil's identity)
  with its n=1 two-plane verification and the primitive-star specialization → `included` in the B
  example; the remaining headings → `inline` in the B example's suppliers.
- **Schnell, MAT 545, Class 18** additionally on the B entry: Theorem 18.15 → `inline` in the B
  example's verification route.

Coverage output: **35 harvested results, 0 errors, 0 warnings** (`coverage-checklist
--require-destination`). Scoped `url-sweep --recover --fail-on-dead`: `5/5 live; 0 failed`,
`5 citation decision(s)` (output kept in `/tmp` so the engine's own run-level sweep is not
pre-empted). Scoped `source-backing`: `7 authored result(s) … every one still backed by an openable
source`.

## Cross-batch dependencies

`research/frontier-44-special-representation-examples-28-batch-39.cross-batch-dependencies.json`
has **22 reviewed rows** — one for every cross-batch edge declared by this batch (2 page edges and
20 item edges), each with `status: verified` and an evidence paragraph recording the exact consumed
contract: the page edges to `compact-kahler-hodge-foundations` (batch 35); item edges to
`def-compact-kahler-manifold-and-hodge-polarization-conventions`,
`lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`,
`lem-kahler-commutators-and-laplacian-type-preservation`,
`lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`,
`lem-de-rham-top-integral-is-fundamental-class-evaluation`,
`thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` (batch 35),
`def-complex-manifolds-and-holomorphic-vector-bundles` (batch 31) and the published batch-2 item
`thm-choice-implies-dependent-implies-countable-choice`. The ledger
(`frontier-dependency-ledger.mjs refresh --run …`) lists batch 39 among `reviewed_batches` with all
22 of its consumer edges reviewed. The `--require-reviewed` variant still fails **only** through
unreviewed sibling batches (11, 24, 25, 40-49 at this writing); every batch-39 edge is reviewed.
Supplier-side expectation for the Step-8 reconciler: batches 42 (geometric fixed parts), the
projective-perverse pair and other later pages declare this pair in `requires`; their own writers
own those rows.

## Published defects

None found. Every published `deps` target was read on disk and its statement, hypotheses,
direction and conventions match the use: `thm-jacobian-criterion-smooth-morphism` (standard smooth
presentation with invertible Jacobian minor; AC declared), `thm-ample-powers-very-ample-proper-base`
(Noetherian base, proper finite type, ample ⇒ closed very ample power; AC declared),
`lem-first-chern-form-agrees-with-the-topological-line-class`
(𝑱[−Ω/2πi]=ρ(c₁(L)); AC declared), `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`
(additivity and c₁(L^⊗d)=d c₁(L)), `def-complex-projective-space-and-holomorphic-charts`
(compact Hausdorff second-countable complex manifold, holomorphic maps), `def-complex-linear-and-compatible-bundle-connections`
(Hermitian compatibility convention), `def-curvature-of-a-vector-bundle-connection`,
`thm-holomorphic-implicit-function-theorem`, `thm-holomorphic-inverse-function-theorem-several-variables`,
`thm-general-stokes-theorem` (assumes AC_ω), `thm-choice-implies-dependent-implies-countable-choice`
(AC ⇒ DC ⇒ AC_ω in ZF), `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`
(complementary-basis formula) and `def-axiom-of-choice`. No repair was needed and no defect row is
entered for the canonical ledger.

## Findings belonging to other batches (reported, not repaired here)

- At this writing `tools/step1-decisions.mjs check` reports 668 items, 665 ready, `closed: false`,
  and its work list contains **zero** batch-39 rows. The rows are: 26 `Empty scaffold inventory`
  entries for pending batches (11, 24, 25, 40-49), the owner-held KLR lower-global-basis item, and
  two batch-38 escalations for `logarithmic-hodge-complexes-and-smooth-open-weights`.
- **Cross-page ordering escalation raised by batch 38 (owner decision required; no batch-39 artifact
  is blocked).** The escalated item
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` (order 1811) records that
  the logarithmic construction needs each smooth projective SNC stratum of a compactification to be
  compact Kähler with a rational Kähler class, and that the only library supplier of that fact is
  this batch's `lem-smooth-projective-analytification-has-rational-kahler-polarization` (with
  `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`), homed on order
  1812 — **after** the consumer's page 1811 and absent from its `requires`. Batch 38 proposes adding
  `projective-hodge-polarization-foundations` to its `requires` and swapping the pairs
  (1811↔1812 and 1815↔1816). This batch's direction is the opposite: nothing here consumes the
  logarithmic page, so no batch-39 claim, dependency or readiness record is blocked, and the
  canonical plan (orders 1812/1816) was preserved unchanged, as the plan controls design conflicts.
  If the owner accepts the swap, the order fields of this batch's two pages must be re-synced
  centrally together with every downstream consumer; the batch-38 escalation row carries the exact
  dependency chain and proposed fix. This worker did not edit the shared plan or the engine state.
- `tools/item-dependency-levels.mjs check` reports the same empty inventories and **no** error for
  any batch-39 item (labels 9/11/3/4/12/13/4 equal the computed levels).
- `frontier-dependency-ledger refresh --require-reviewed` remains incomplete through the unreviewed
  sibling batches listed above; batch 39 itself is complete. The two batch-38 escalations are visible
  in the ledger as escalation rows on their own pages, not as batch-39 debt.

## Checks (actual results at this writing)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — `668 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error for any batch-39 item; remaining findings are `empty scaffold
  inventory` for pending sibling batches.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` —
  `668 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/…-batch-39.coverage.json --require-destination` —
  `2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-39.coverage.json --stamp` —
  `6/6 source(s) fetch-verified (6 newly stamped)`; check mode `6/6 source(s) fetch-verified`,
  `6/6 resolved (0 documented drops)`.
- `node tools/url-sweep.mjs --coverage research/…-batch-39.coverage.json --out /tmp/b39-url-liveness.json --recover --fail-on-dead`
  — `5/5 live; 0 failed … 0 blocking`, exit 0 (scoped; the run-level artifact is left to the engine).
- `node tools/source-backing.mjs --coverage research/…-batch-39.coverage.json --liveness /tmp/b39-url-liveness.json`
  — `7 authored result(s) … every one still backed by an openable source`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — exit 0, zero `ERROR` lines; the batch-39 pages appear among the 70 pages with item lists. Only
  pre-existing plan-level `redundant-prereq` advisories on the plan's `requires` edges remain,
  recorded unchanged for the Step-4 reconciler.
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` —
  `98 page(s) owed, 98 in the manifests … no scope drift`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `refreshed and deduplicated`; batch 39 has 22/22 reviewed consumer edges (see above).
- External-reference boundary: at Step 1 the item-mode validators cannot resolve manifest IDs,
  because item files are authored only at Step 3; the scaffold gate therefore runs
  `content-policy --manifest-only`, whose retired-external-record check passed. A direct grep over
  the batch-39 manifest finds **0** occurrences of `proved_here`, `external_refs`,
  `external_dependency`, `forward_refs` or `justified_by`.

## Step-1 decisions

Recorded `ready`, one at a time in prerequisite order, with the examined dependency IDs and the
evidence above:
`def-morphisms-and-polarizability-of-rational-hodge-structures` (hash `8188a14fc1d3ead2`),
`lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` (`1200ae1fcbd8942c`,
re-recorded after the persistence-sentence correction below),
`ex-primitive-one-forms-on-a-hermitian-two-plane` (`fefcd3a2bf449bb3`),
`lem-smooth-projective-analytification-has-rational-kahler-polarization` (`ae4f62eb14822fa1`,
re-recorded after the overlaps-wording correction below),
`thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` (`b2a07e79cfa3bc4a`),
`thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` (`35a3341d307e3485`,
re-recorded after the star-exponent correction below),
`thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` (`ea20328639eb8ee0`,
re-recorded after the citation correction below).
Four records were refreshed after the final read-through: the analytification strategy now says the
charts glue on their overlaps; the splitting strategy states the rational idempotence and
orthogonality identities instead of an inapt `unitriangular matrices` phrase; the Hodge–Riemann
strategy now carries the primitive-star exponent $p-q$, as required for the form $\bar a$ of type
$(q,p)$ (the earlier exponent $q-p$ would have produced $i^{q-p}Q_k(a,\bar a)>0$, contradicting the
item's own statement $i^{p-q}Q_k(a,\bar a)>0$; the statement itself was correct throughout); and the
package strategy now cites the positive closed $(1,1)$-form clause rather than "Step 2" of the
analytification lemma. No dependency, hypothesis or claim changed in any of the four.
Owner/operator reconciliation and the engine's Step-1 gate follow; a readiness record is not
independent mathematical approval (Step 3 provides that review).

## Residual risks for the Step-3 author

- **In-run analytic suppliers.** Four of the six A-page items consume batch-35 scaffolds
  (`thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`,
  `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`,
  `lem-kahler-commutators-and-laplacian-type-preservation`,
  `lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`). The Hodge theorem's own
  closure runs through the batch-31 elliptic/Sobolev chain; that transitive risk is the principal
  analytic residual of this pair and is owed to Steps 3-6. Any interface change in a supplier
  reopens every consumer listed in the cross-batch file.
- **Normalization caveats.** Demailly's Hermitian conventions (h = 2Σdz⊗dz̄, so
  iΣdz∧dz̄ = 2Σe∧f) differ from the library's ω = Σe∧f by a constant factor; the scaffold claims
  existence of a positive form only up to a positive scalar, so the factor is harmless, but the
  authored computation must not mix the two normalizations. Schnell's class-17 two-plane table has
  known typographical slips; the star signs in the B example and the Hodge–Riemann item were
  re-derived from the star characterization, and Step 3 must re-derive rather than copy them.
- **Analytification identification.** The manifold topology on X(ℂ) is constructed chart-wise and
  then identified with the subspace topology of a closed image in ℙ^N(ℂ). The author must write the
  identification explicitly for a closed immersion of smooth ℂ-schemes (full-rank Jacobian along
  X(ℂ) plus the holomorphic implicit function theorem), and keep the ℂ-points scope: non-closed
  points are not part of X^an. Serre GAGA Prop 2/6 is the supporting general construction.
- **Definition routing.** The new pure-Hodge morphism vocabulary duplicates, in purpose only, the
  mixed-Hodge vocabulary of batch 34; the two are routed independently on purpose (that page is
  outside this page's requires closure), and Step-3/5 reviewers should keep their conventions
  consistent rather than merging them without a plan change.
- **Continuity clause scope.** The Hodge–Riemann statement's continuous-variation clause is
  explicitly restricted to degrees 0≤k≤n; for k>n primitive spaces are reached by the hard-Lefschetz
  transport, not by the kernel computation of Step 4.
