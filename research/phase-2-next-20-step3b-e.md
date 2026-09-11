# Step 3b group e — author checkpoint

## Current handoff — resumed 2026-09-11

The latest explicit owner delegation in `phase-2-next-20-owner-authoring-direction.md`
supersedes the original five-pair write allocation: original e retains HA16
(batch 7) and AT6 (the singular-cohomology pair in batch 8). Fibrations,
smooth comparison and connections belong to their separately named owner
authors. Their merged content and independent records were preserved. The
historical checkpoints below describe earlier states, not current blockers.

**Retained mathematical authoring is complete:** HA16 has 55 items (47 A,
8 B); AT6 has 34 (26 A, 8 B). All 89 currently have closed author decisions,
including the owner-resolved convergence theorem. Fifteen missing/stale AT6
receipts were recorded with `record-item`, repaired/confidence 1, after
rereading the actual arguments and named supplier interfaces and running the
current checks. Each receipt names its examined dependencies and concrete
evidence. No unchanged completed mathematics was reauthored. This is author
reconciliation, not an independent review or a certification of the delegated
three pairs. All content remains draft.

### Checks actually run in this resumed handoff

Commands used each manifest's explicit item paths, and rendercheck additionally
used its actual A/B page paths. Proof contracts used `--strict` on the complete
batch contract, content policy used the actual batch manifest, and coverage used
`--require-destination` on its actual coverage file.

| Batch | Precheck | Rendering | Content policy | Strict contracts | Coverage |
|---|---|---|---|---|---|
| 7 | 43 checked, 0 failing | 57 files, pass | 55 items, 0 errors | 43/43, 0 errors | 2 errors, 1 low-yield warning |
| 8 | 45 checked, 0 failing | 62 files, pass | 58 items, 0 errors | 45/45, 0 errors | 4 errors |
| 9 | 79 checked, 0 failing | 106 files, pass | 102 items, 0 errors | 79/79, 0 errors | 7 errors |

Batch 8 includes the delegated fibration pair and batch 9 consists of delegated
content. These rows are mechanical results only for those pages. Logs are
`/tmp/step3b-e-{7,8,9}-{precheck,render,policy,contracts,coverage}.log`.
`node tools/validate-plan.mjs research/plan-spec.json` exited 0; its warning
correctly says 637 planned pages have no item lists. All ten dispatched page
lists are still empty in the canonical plan. Manifest counts are 47/8, 26/8,
18/6, 31/7 and 52/12, respectively. Every corresponding requires array agrees.
Step 4 must splice these lists; the pre-splice plan pass is not item-inventory
validation. No shared plan/prose was edited here.

The complete local-alternative records already exist in
`phase-2-next-20-batch-7-source-alternatives.json` (55 items) and
`phase-2-next-20-at6-source-alternatives.json` (34 items). Recomputed full-file
SHA256 values match all 89 recorded item hashes. This verifies evidence
freshness, not mathematics or source retrieval. No retry counter, source drop,
fetch stamp or owner source decision was invented.

### Remaining owner and delegated obligations

1. Batch 7 Stacks monograph source resolution is still owner-escalated.
   Batch 8 Hatcher Chapter 3 and Miller notes source resolutions are still
   owner-escalated. Complete alternative arguments are supplied in the two
   records above, but only the authorized source decision can close these
   existing holds. Preserve their precise source-reading and retrieval limits.
2. Three HA16 additional-source scope requests remain at `owner-decision`:
   Weibel Exercise 5.5.4, comparison 5.5.11 without strong-convergence premises,
   and 5.6.1 non-first-quadrant sum/product abutments. Completion of the actual
   convergence theorem does not prove these extra assertions. Their stale
   reasons were updated accordingly. No owner ruling is claimed.
3. Refreshed `phase-2-next-20-alpha-e-scope-decisions.json`: 19 retained-scope
   declines have exact evidence, including the three unresolved owner requests.
   Nine declines on delegated pages remain pending, for their authors/serial
   owner. The whole-group check therefore exits 1 with 18 diagnostics, two for
   each pending row. These were not bulk-approved to close the gate.
4. Batch 9 coverage identifies Park source holds and absent alternative entries
   for `def-smooth-singular-simplex`,
   `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension`,
   `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`, and
   `thm-smooth-singular-chains-compute-singular-homology`. Merry's connections
   source has an explicitly unread/empty harvest. Their delegated authors and
   owner must reconcile those exact obligations; passing contracts do not do so.
5. Batch 7 and batch 8 consumer inputs are correctly empty: re-enumeration of
   the current run's page and item dependency/justification/forward edges found
   no cross-batch supplier for their consumers. Refreshed the unified ledger
   using its tool. Batch 9's three canonical rows still describe AT6 as
   scaffold-only, although AT6 is now authored. Its consumer owner must update
   and audit them, retaining the U-minus-V versus V-minus-U connector sign.
   No concurrent edit was made to that delegated consumer input.
6. The delegated authors/owner must reconcile their current item decisions;
   this handoff does not stamp their mathematics. In particular the numerable
   bundle theorem has a stale owner-held receipt, which original e cannot
   override. The engine remains at Step 3b and owns further transitions.

### Local suppliers retained

HA16 author additions are `lem-countable-tower-six-term-limit-sequence`,
`lem-two-by-two-delta-complex-for-a-double-tower`, and
`lem-boardman-approximate-cycle-obstruction-sequence`. AT6 author additions are
`lem-additive-singular-cohomology-cross-product-is-well-defined` and
`lem-real-projective-space-cellular-homology-and-pinch-map`. All are registered
on the existing A pages, manifests, coverage and contracts, before their
consumers (with the definition/justifier convention for cross product).
The scaffold-added local UCT extension lemma, simplex-model product lemma and
cross-product definition are also fully authored. No original retained ID or
promised claim was dropped; no new pair was added.

### Published concerns for serial ledger reconciliation

Reread the four published HA items below on current disk. Confidence 1 concerns
the specific proof/assumption omissions, not falsity of their classical
conclusions or an exhaustive audit:

- `lem-the-cohomology-universal-coefficient-extension-map`, page
  `universal-coefficients-and-kunneth-theorems`: step 2.1 still asserts descent
  without the required calculation for a restriction of g on cycles. Required
  repair is `(psi+g|B)d-psi d = delta(g pi)` with a proved cycle projection,
  the converse restriction/injectivity argument, and a justified resolution
  interpretation of Ext. Suppliers: published
  `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`,
  `thm-free-modules-are-projective-with-choice-boundary`,
  `def-ext-via-a-projective-resolution-of-the-first-variable`, and
  `def-axiom-of-choice`. The new draft
  `lem-singular-uct-extension-from-cycle-projections` demonstrates the full
  local argument but must not be introduced as a backward prerequisite of HA.
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` and
  `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`, same
  page: both retain the above actual prerequisite and omit direct AC deps
  despite stating AC. Repair that earlier extension proof and assumption
  declarations; retain the explicit cycle-projection section already present.
- `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes`,
  same page: still invokes the AC-bearing general UCT and arbitrary-module
  injectivity without stating AC. Either supply its finite-dimensional local
  extension argument with finite choices or state and declare AC. It does not
  supply unrestricted singular field duality; the new AT6 corollary does.
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`, page
  `cw-complexes-and-cellular-homology`: current step 1.1 still selects a
  countably infinite sequence from an arbitrary infinite collection of met
  cells without a choice contract. Supplier `def-axiom-of-choice` suffices;
  alternatively prove the exact weaker selection or replace the argument.
  Propagate through `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`
  and `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`
  where actually used. The new infinite-wedge example already assumes AC.

The spectral-sequences page is still published with draft contents. Current
YAML parsing finds **44/44** listed items draft, extending the earlier bounded
31-ancestor finding. This is a confirmed publication-state mismatch, not a
finding that 44 proofs are defective. Owner reconciliation must examine prior
reviews and intended publication state, then repair any proof findings
individually. Exact current IDs follow in the inventory appendix below.

The earlier partition-of-unity choice findings remain a delegated connection
audit input: `thm-smooth-partitions-of-unity-exist-on-manifolds`,
`lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`,
and `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`
on `smooth-partitions-of-unity-and-exhaustions`. Their exact point/countable selections and repair
strategy are retained in batch 9 notes. They were not reread or upgraded in
this retained-scope resumption. No published item or canonical published ledger
was edited.

Owned batches: 7, 8, 9. All 208 original IDs and ten A/B pages remain in scope.
Owner scope direction has been read; it does not resolve mathematical holds.
No publication, shared-plan change, judge stamp or owner decision is authorized.

## Entry evidence and remaining workload

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, owner-authoring-direction,
the full batch 8 and 9 notes and batch 7 construction evidence, HA-16 design,
and the frontier dependency instructions. Current manifests are scaffolds;
their strategy text is not proof text. Batch 7 has 52 items, batch 8 has 55,
batch 9 has 101. Initial working-tree changes belong to concurrent workers.

Unresolved inherited obligations remain exactly as detailed in the three batch
notes: HA complete convergence and its approximate-cycle tower suppliers;
AT cellular computations, topological UCT nonnaturality witness, general
relative lifting, numerable-bundle gluing and transport conventions; DG smooth
face extension for boundary targets, countable MV globalization, axiom-sensitive
false statements and published partition choice contracts. Original source
retry histories remain exhausted; no retry reset, source drop or fetch stamp
has been made. These holds are not blanket defects in independent finite or
local constructions.

## Source reading in this dispatch

Stacks https://stacks.math.columbia.edu/tag/0FNB, Definitions 12.18.1 and
12.18.3, read completely through their convention warning and existence
qualification. Source uses commuting cohomological arrows. Local convention
reverses both indices and twists the vertical arrow by (-1)^p. Also inspected
https://stacks.math.columbia.edu/tag/012X, Lemmas 12.25.1–4; the first proof is
omitted and the last omits identification of its edge map. Neither omission
will serve as a supplied argument. No assertion of full-book reading.

## Item checkpoints

Completed `def-homological-double-complex`: explicit indexed axioms, morphism
identities, axes and zero cases. Examined full `def-chain-complex-in-an-abelian-category`
and `def-abelian-category`; Stacks 12.18.1 translated as above. Explicit-path
rendercheck passed. Recorded accept/confidence 1 after writing and checking;
no proof contract required for this definition. Next: commuting convention.

Completed `rem-commuting-versus-anticommuting-double-complex-conventions`:
both mixed signs, square-zero, inverse and morphism checks written explicitly;
zero/characteristic-two cases included. Source Stacks 12.18.1/3; dependency
the preceding authored definition. Rendering passed; accept/confidence 1
recorded. Next: direct-sum totalisation and its chain-condition lemma.

`def-direct-sum-total-complex-of-a-double-complex` written: diagonal coproduct
existence explicit and differential uniquely specified on injections, with
zero/single-support cases. Full products/coproducts definition read. Rendering
passed. Decision waits for its declared `justified_by` lemma, which is next;
this construction alone is not certified as a chain complex yet.

Completed the direct-sum definition and `lem-the-total-differential-squares-to-zero`:
the four-path expansion, cancellations and universal-property conclusion are
now written, with three exact citation contracts and eight boundary cases.
Added the two actually used direct definition deps to the lemma manifest;
frontier refresh passed (still no cross-batch edge). Precheck initially required
canonical phase labels; adopted 1.1, 2.1, 3.1 and reran successfully. Rendering
and strict contract passed. Lemma decision repaired/confidence 1; definition
accept/confidence 1 after its justification was complete. No source gap in
this elementary calculation; global source evidence holds remain. Next:
product totalisation, then finite-diagonal comparison.

Completed `def-product-total-complex-of-a-double-complex`: coordinate universal
property and full indexed calculation of d squared; no finite-support assumption.
Both defining prerequisites reread, rendercheck passed, accept/confidence 1
recorded. Next finite-diagonal comparison; read additive category, biproduct
definition and full associativity/unit proof for the finite interface.

Completed `prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes`:
finite-diagonal existence, comparison, chain commutation and inverse all written.
Direct biproduct/universal-property deps added and frontier refreshed; explicit
precheck, rendering and strict contracts pass. Repaired/confidence 1 recorded.
Next sequence-group supplier: full existing abelian-group model proof read;
it is draft from catchup-24, not claimed published. No defect found in its
specific finite group and categorical constructions during this bounded read.

Completed `lem-countable-sequence-groups-and-tail-filtrations`: product and
coproduct group constructions, binary bijection, diagonal argument, tail quotients,
separation, inverse-limit universal property and completion maps. Choice-free.
Read division theorem and limit definition completely; added their exact deps
and product/coproduct definition. Adopted canonical precheck order (quotients
at 2.2, diagonal argument 3.1, inverse limit 3.2, completion 4.1). Precheck,
rendering and strict contracts passed; repaired/confidence 1 recorded. Next:
infinite-diagonal totalisation counterexample, then the two filtrations.

Completed `cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals`:
binary diagonal witness has zero differentials; cardinality forbids even an
abstract isomorphism. All four dependency arguments used were examined.
Explicit precheck/rendering/strict contract pass; accept/confidence 1 recorded.
Next row/column filtration definition, followed by actual filtered spectral
sequence supplier reading before its consumers.

Completed row spectral sequence theorem: four steps derive E0, E1 and its
actual v differential, E2, then finite image-filtration convergence. Added
explicit differential/local-lifting deps. Precheck, rendering, strict contract
pass; repaired/confidence 1 recorded. Full supplier proof reading recorded below
applies, not just their prior review stamps. Next: column theorem.

Completed column spectral sequence theorem by explicitly transposing C,
checking the sum differential and both filtrations, then applying the authored
row theorem and naturality. Added row dependency in manifest; frontier refresh
passed. All three checks pass; repaired/confidence 1 recorded. Next: differing
early pages and then acyclic assembly.

Completed common-abutment/different-pages proposition: two finite explicit
binary examples separately demonstrate unequal E1 pages and unequal target
filtration jumps. Precheck/rendering/contracts passed; accept/confidence 1
recorded. Next assembly projection; read the edge-map and quasi-isomorphism
definitions fully. A probe `content-policy --help` returned a missing-file error
because that tool treats arguments as manifest paths; this is not a policy check.

Completed acyclic assembly: quotient complex, q=0/1/>1 chain-map checks,
filtered map to the axis complex, page isomorphisms and naturality identify
the actual H(rho); row and fully acyclic cases included. Added naturality
and quasi-isomorphism deps. All three checks passed and repaired/confidence 1
recorded. Next exact couples. Read Stacks tag 011P, full mathematical text
12.21.1–5 including the shift variant/footnote; 12.21.2 and 12.21.4 omit their
proofs, so local derivation and subquotient arguments remain necessary.

Completed `def-exact-couple`: all page-r degrees, three typed exactness
conditions, initial E1 and morphisms written. Local category/homology
definitions and Stacks shift convention read. Rendering passed;
accept/confidence 1 recorded. Next differential definition and its justification.

Associated differential definition written and rendered: d_(p,q)=j_(p-1,q)k_(p,q),
bidegree (-r,r-1), r=1 and zero cases. Decision waits for the following
square-zero justification, rather than assuming it from the construction name.

Completed associated differential and its square-zero lemma: explicit shifted
middle k j composite and final target printed. Added exact-couple direct dep to
lemma; frontier refresh and three local checks pass. Lemma repaired/confidence 1,
definition accept/confidence 1 after justification. Next derived data,
well-definedness and three-vertex exactness.

Derived-couple definition written and rendered with fully typed D', E', i',
j', k' formulas. Added the exactness theorem to justified_by as well as the
well-definedness lemma; its name requires both claims. Frontier refreshed.
Definition decision remains pending until both justifications are complete.

Derived-map lemma now written and locally checked: i restriction; j cycle
factorization and descent through D/ker i; k cycle restriction and boundary
annihilation; exact degree shifts and choice-free epic-lift interpretation.
Precheck/rendering/strict contract pass. Decision will be recorded after the
exactness justification is written, since the definition's justified_by hash
also includes that theorem. Next: all three exactness equalities.

Completed derived definition, map lemma and exactness theorem. Exactness has
both containments at each vertex with all lift indices printed. Both
justifications have full current contracts and pass precheck/rendering/strict
checks; all three decisions recorded repaired/confidence 1. No AC or chosen
section. Next exact-couple spectral sequence and its explicit subquotients.

Completed exact-couple spectral-sequence theorem: typed N-r/B-r, differential
lift independence, kernel/image equality in both directions, and compatibility
with derived D/i/j/k. Six steps contracted; all three checks pass; repaired at
confidence 1. Next filtered-complex couple. Read the LES proof, left/middle
exactness lemmas, cycle-boundary diagram and connecting/preconnecting definitions.
The published module lift formula is module-scoped; it alone cannot justify
an arbitrary-abelian comparison argument.

Completed filtered-complex exact couple: quotient differential and degreewise
exactness, typed LES window, all vertices matched. Actual quotient suppliers
added; precheck/rendering/strict contracts pass; repaired/confidence 1 recorded.
Next comparison. Read the full weaker snake theorem, particularly proof 1.1–2.1
defining delta by delta*pi=q*r with k*r=beta*pi-prime. This licenses the positive
lift-differential formula after epic pullback in an arbitrary abelian category;
the module-only statement is not being extrapolated as its own theorem.

Completed `def-row-and-column-filtrations-of-a-first-quadrant-double-complex`:
cutoffs are split subobjects preserved by h and v, finite bounds and row
transposition explicit. Rendering passed; accept/confidence 1 recorded.
Read full bounded convergence, next-page, differential and local-lifting proofs,
plus image-filtration and r-page definitions, from catchup-24. Their actual
finite-filtration interfaces (including epic local representative descent) are
the route for the next two items; no unbounded convergence claim is consumed.

## Published concerns for serial reconciliation

Inherited findings in batch 7 notes (published spectral-sequences page with
31 draft items), batch 8 notes (UCT extension formula and choice declarations),
and batch 9 notes (partition choice contracts) remain open audit inputs. Their
source proofs have not all been reread in this dispatch; do not upgrade inherited
classifications or infer new whole-closure certification from this report.
The canonical published ledger is owned by the serial reconciler.

Completed mathematical text and checks for `prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree`: epic-local positive connector, numerator lifting, both denominator containments, differential and transition naturality. Explicit precheck/rendering and 14 scoped strict contracts passed. Decision recording attempted after compaction, but refused: global Step 3a is open because `carleson-hunt-time-frequency-theorem` has a stale owner proceed receipt. Owner must refresh that exact external scope; group e cannot override it. This item has no acceptance receipt yet. Continue independent authoring, retaining pending decision obligations. Read Stacks 012K mathematical section 12.24.7–11, including the finite-filtration proof; outgoing regular versus incoming coregular is distinct from our two-sided convention.

Completed `def-regular-spectral-sequence`: exact two incident degrees and quantifiers, distinction from outgoing-only source convention, canonical stationarity and first-quadrant endpoint bounds. Dependencies read fully. Rendering initially caught one multiline display; repaired and passed. Acceptance pending the external owner scope refresh above. Next weak convergence.

Completed `def-weak-convergence-of-a-spectral-sequence`: specified graded identifications, existence of the limiting page, actual-cycle comparison, no inferred topology properties. Both dependency definitions read fully; rendering passed. Decision pending global owner scope refresh. Next strong convergence.

Completed `def-strong-convergence-of-a-spectral-sequence`: all four requirements, inverse-system orientation and universal property, finite constant-tail calculation, decreasing convention. Rendering passed; dependencies read. Decision pending external scope refresh. Next finite-convergence theorem; reread its entire bounded supplier proof and image-filtration definition.

Completed `thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology`: bounded supplier's actual-cycle abutment, finite image endpoints, constant-tail universal property, normalized endpoints. Canonical precheck numbering repair adopted; precheck/rendering and 15 scoped strict contracts pass. Decision remains pending external owner scope. Next countable Delta definition and completion exact sequence; AC must be explicit only where countably many representatives are selected.

Completed `def-lim-one-obstruction-to-completeness`: explicit product operations, additive Delta, kernel universal property, quotient cokernel and precise subgroup-tower application. Added limit-definition dependency, read in full. Rendering passed. Initial frontier refresh used the wrong filename and failed; reran with the prescribed frontier-dependency-ledger.mjs. Decision pending external scope. Next obstruction exact sequence (definition's promised interpretation is not a substitute for its proof).

Completed `lem-countable-tower-completion-obstruction-exact-sequence`: well-defined connecting map, every exactness position, naturality, both completeness implications, zero/constant tower cases. Canonical precheck numbering repair adopted; precheck/rendering and 16 scoped strict contracts pass. Global Step 3a now clears (external receipt refreshed); recorded all seven pending decisions from the comparison proposition through this lemma with confidence 1 and concrete evidence. Next complete-exhaustive convergence criterion, whose inherited Boardman obstruction obligations remain unresolved and require actual source argument reading. No unbounded convergence claim has yet been authored or accepted.

Escalated `thm-complete-exhaustive-filtered-complex-convergence-criterion` at confidence 0, without authoring placeholder proof. Reread browser-extracted Weibel 5.5.7–10 pp137–140; formulas at 5.5.8 and double-tower interchange remain partly garbled. Screenshot requests returned no inspectable image content in this tool channel, so they are not source-reading evidence. Confirmed the proof route explicitly postpones double-tower interchange to 5.8.7/Grothendieck, which is later HA17. Required local suppliers remain the six exact proposed IDs in batch-7.notes.md (Mittag-Leffler, six-term limit, Milnor, two-by-two Delta, Boardman comparison, vanishing obstruction limit), with exact hypotheses and proofs unresolved. Elementary subgroup completeness is insufficient. Owner alone resolves this mathematical escalation; retain both promised claims. No source retry allowance reset or fetch stamp. Independent next item: explicit failure examples.

Completed `prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment`: constant filtration, incomplete S-to-P complex with identity graded differential, and S[0]/P[0] page comparison. Constant-one witnesses and all homology image filtrations calculated. Added page differential/transition/image dependencies; frontier refreshed. Precheck numbering and contract citation-use coverage repaired; precheck/rendering and 17 scoped strict contracts pass. Repaired/confidence 1 recorded. Next filtered-isomorphism lifting; no dependency on the escalated complete-convergence criterion.

Completed `lem-finite-and-complete-filtered-isomorphism-lifting`: short-five chase, finite induction, complete-piece residue limit and compatible inverses. Both supplier texts/proofs examined. Canonical proof ordering adopted with complete-case hypothesis explicitly attached to the moved step. Precheck/rendering and 18 scoped strict contracts pass; accept/confidence 1. Next comparison theorem.

Completed `thm-spectral-sequence-comparison-theorem`: inverse page chain maps, finite induction on pages, pointwise stable comparison and actual graded target conjugation, then filtered lifting. All dependencies examined; precheck/rendering and 19 scoped strict contracts pass; accept/confidence 1 recorded. Next associated-graded quasi-isomorphism corollary.

Completed `cor-quasi-isomorphism-criterion-from-a-filtered-map`: actual E1 maps, actual-cycle abutment compatibility, conditional comparison and arbitrary degreewise finite branch. Scaffold repair adds unrestricted bounded theorem (the existing first-quadrant supplier alone was too narrow), E1 identification and image/strong definitions. Frontier refreshed; precheck numbering repaired; precheck/rendering and 20 scoped strict contracts pass; repaired/confidence 1. Next five-term cohomological theorem, then separately homological directions.

Check correction: the preceding combined shell continued after a strict-contract failure (missing step anchor in choice evidence), so that first receipt prematurely claimed a pass. Added the actual 2.1–3.1 anchor, reran strict contracts separately: 20/20 pass with zero errors/warnings, then refreshed the receipt. The mathematical text was unchanged. Subsequent decisions must follow separately inspected successful checks.

Completed cohomological five-term theorem: all incident degrees enumerated, kernel/cokernel identified with normalized filtration pieces, every exactness position proved. Precheck/rendering and 21 scoped strict contracts pass; accept/confidence 1. Next homological five-term theorem with separate direction calculation.

Completed homological five-term theorem: separate homological endpoint and filtration calculation; initial H2 edge onto kernel, middle cokernel edge into H1, terminal quotient and surjectivity. Precheck/rendering and 22 scoped strict contracts pass; accept/confidence 1. Next projective finite-filtration splitting.

Completed projective finite-filtration splitting: section from projectivity, direct injectivity/surjectivity, finite induction with filtered inverse, limiting-page application, and integer shear showing no automorphism-invariant section. Added group-model witness dependency; frontier refreshed. Precheck canonical numbering adopted; precheck/rendering and 23 scoped strict contracts pass; repaired/confidence 1. Next exact-couple morphisms; reread derived-couple formulas before using them.

Completed exact-couple morphism proposition: image/cycle maps, all derived squares, exact degrees, transition and functoriality. Added direct exact/derived definitions; frontier refreshed. Precheck/rendering and 24 scoped strict contracts pass; repaired/confidence 1. Next strict filtered short exact sequences; read connecting naturality in full.

Completed strict filtered short-exact-sequence proposition: strict piece rows, explicit graded quotient exactness, i/j functorial squares and k connecting naturality, then derivation. Added homology functoriality dependency and refreshed frontier. Precheck canonical ordering adopted; precheck/rendering and 25 scoped strict contracts pass; repaired/confidence 1. Next six A false statements, one at a time, followed by eight B examples.

Completed first A false statement (identical E1 pages): finite horizontal identity witness with row zero/column k at (0,0). Added calculation suppliers; frontier refreshed. Precheck/rendering pass; fixed contract evidence anchor and strict contracts pass 26/26. Repaired/confidence 1. Next sum/product false statement.

Completed sum/product false statement: explicit S/P total objects and cardinality/canonical-map failures. Added direct total/sequence suppliers; frontier refreshed. Precheck/rendering and 27 scoped strict contracts pass; repaired/confidence 1. Next ungraded exact-triangle type failure.

Completed ungraded exact-couple false statement: exact integer triangle, nonzero i(1)=2 versus zero graded target, precise extra-data qualification. Precheck/rendering and 28 scoped strict contracts pass; accept/confidence 1. Next first-quadrant support/extension witness.

Completed `fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration`: two explicit normalized finite abutments to the stationary k,k page, distinct element orders. Added weak definition; frontier refreshed. Precheck/rendering and 29 scoped strict contracts pass. Acceptance attempted but blocked by newly stale owner scope receipt for `quantitative-hyperbolic-geometry-toolkit`, outside group e. Owner must refresh it; no override attempted. The following item's creation was skipped by the failed Python call, and its subsequent missing-file checks failed; those are not validation of that item. Next create `fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets` independently; pending decisions must be recorded after the global scope clears.

Completed limiting-page isomorphism false statement: explicit S[0] to P[0] identity graded/stationary maps, actual target compatibility, constant-one nonsurjectivity and precise incomplete source. Added actual differential/failure suppliers; frontier refreshed. Precheck/rendering and 30 scoped strict contracts pass. Decision pending the external quantitative-hyperbolic owner scope refresh. Next exhaustive-filtration false statement.

Completed exhaustive-filtration false statement: both constant and separated-tail failures, zero quotient limit and explicit nonsurjectivity. Canonical numbering adopted; precheck/rendering and 31 scoped strict contracts pass. Global Step 3a clears again; recorded all three pending false-statement decisions (first-quadrant support, limiting-page target, exhaustive filtration), confidence 1. Current A inventory: 43 fully authored items with decisions and one escalated unauthored complete-convergence theorem. No A page prose yet. Next eight B examples in manifest order, then full batch-7 policy/plan/coverage and page work. Batches 8/9 remain unauthored; retain their inherited obligations.

Completed B two-by-two example: both page sequences, total differential and quotient homology, differing H1 filtration jumps. Precheck/rendering and 32 scoped strict contracts pass; accept/confidence 1. Next exact-column assembly example.

Completed exact-column assembly example: each column acyclic and total sequence explicitly exact at both ends and middle. Added total definition; frontier refreshed. Precheck/rendering and 33 scoped strict contracts pass; repaired/confidence 1. Next initial two-step Z/4 exact couple.

Completed initial two-step Z/4 exact-couple example: every term, inclusion/quotient/zero maps, exactness at p=0,p=1 and tails, non-first-quadrant position. Added exact definition; frontier refreshed. Precheck/rendering and 34 scoped strict contracts pass; repaired/confidence 1. Next derive that exact couple once.

Completed once-derived Z/4 couple: unchanged E, shifted D image terms, j identity/parity with degree (-1,1), i restrictions, zero k and full exactness check. Precheck/rendering and 35 scoped strict contracts pass; accept/confidence 1. Next nonzero cohomological d2 example; read full cohomological construction supplier.

Completed nonzero d2 five-term example: full weight filtration, d0=d1=0, d2 identity, direct H1/H2, all edge maps and exactness positions. Added actual differential formula; full cohomological supplier read. Frontier refreshed; precheck/rendering and 36 scoped strict contracts pass; repaired/confidence 1. Next infinite-diagonal B counterexample.

Completed B infinite-diagonal counterexample: both total and homology groups, constant-one class, diagonal cardinality and support exclusions. Added total definitions; frontier refreshed. Precheck/rendering and 37 scoped strict contracts pass. Decision attempted but global Step 3a again blocks on stale owner proceed for `quantitative-hyperbolic-geometry-toolkit`; no override. Next B wrong-naive-abutment counterexample remains unwritten because its creation followed the rejected receipt in a stopped Python call. Continue independent authoring and retain this pending decision.

Completed B wrong-naive-abutment counterexample: constant k filtration and separated incomplete S-to-P complex, all pages and homology, nonzero constant-one class, every homology image piece computed by prefix deletion. Added direct calculation suppliers; frontier refreshed. Precheck/rendering and 38 scoped strict contracts pass. Decision pending external quantitative-hyperbolic scope refresh. Next final B filtered-projection example.

Completed final B filtered-projection example: actual chain/filtered map, graded identity and acyclic level, finite criterion, direct homology quotient and actual induced map. Precheck/rendering and 39 scoped strict contracts pass. Global scope still open on quantitative-hyperbolic owner receipt; final three B decisions pending (infinite diagonal, wrong naive abutment, filtered projection). Batch 7 has 51 authored item files, one intentionally unauthored escalated complete-convergence theorem; strict contract scope presently covers the 39 completed proof-bearing items only, not the unresolved theorem. Next A/B pages and full explicit-path batch checks, content-policy, coverage and plan audit. Do not label the whole batch complete.

Batch-7 initial full checks: explicit precheck 39 checked/0 failing (the statement-only theorem is skipped, not proved); rendering 54 files passes; content policy initially found 30 missing source-reference metadata blocks, restored inherited references and reran 52 scoped/0 errors. Strict scope widened to all40 proof-bearing items and honestly fails exactly the missing convergence contract (39/40 checked). Coverage actual file alone fails29 source-resolution errors with1 low-yield warning; the documented --manifests invocation mistakenly treats the manifest as a second coverage file and adds a spurious missing-page error. Plan validation passes on the unspliced shared plan; it does not validate this inventory. An attempted rendercheck.mts failed because actual tool is rendercheck.mjs; correct explicit invocation passes. Source retries/history unchanged. Receipt refresh began when global scope cleared but stopped at the column theorem when scope changed again; later receipts still pending/stale. No unchanged mathematics reauthored.

New owner direction points to `phase-2-next-20-topology-owner-delta-alternatives.md`. Read all378 lines and exact r-cycle, r-page, next-page proof, differential proof, limiting-page, filtered-complex, weak/strong and completion interfaces. Candidate has a viable elementary route: six-term Delta sequence, double Delta comparison, approximate-cycle regularity, closed bounded-primitive images and primitive descent. Integrating necessary local suppliers before the existing theorem; its escalation remains owner-held even after a proof is supplied. No Milnor or Mittag–Leffler package needed for this shorter route.

Completed new local `lem-countable-tower-six-term-limit-sequence`: every exactness position, linear and natural connector, AC coordinate lifts/set sections, surjective tower projections, cofinal-tail kernel/cokernel isomorphisms, zero/constant/single-term cases. Registered before the held theorem in manifest/A page/coverage/contracts. Adopted canonical step numbering and repaired contract missing actual step1.1 input; explicit precheck, rendering and scoped strict contract pass. Scope inventory changed; owner must refresh current pair scope before decisions. Next double-tower Delta lemma, then actual approximate-cycle comparison and convergence theorem. The owner alone clears its existing item escalation. Batches8/9 remain not authored.

Completed `lem-two-by-two-delta-complex-for-a-double-tower`: coordinate commutation, closed-pair exact sequence with both kernel directions, endpoint cohomology, AC product-cokernel identifications, signed direction swap and vanishing consequence. Registered on A before theorem, in manifest/coverage/contracts. Canonical numbering adopted; precheck/rendering/scoped strict contract pass. No arbitrary lim interchange is assumed. Current new inventory is54 items. Next approximate-cycle argument, using these two actual suppliers. Current scope needs owner refresh; existing convergence escalation is untouched.

Completed `lem-boardman-approximate-cycle-obstruction-sequence`: complete rectangular A(p,t) towers, exact projected-cycle sequence, vanishing inverse limit of Qp, residue-tail proof of RZp=0, naturality and degenerate cases. Canonical ordering adopted; explicit precheck/rendering/scoped strict contract pass. Registered before the theorem on existing A, manifest, coverage and contract scope. The former separate proposed obstruction-limit lemma is contained fully here; no extra pair or Milnor package is needed. Current inventory55. Next author the existing convergence theorem with outgoing-kernel numerator calculation, actual-cycle quotient, closed fixed-bound primitive images, finite primitive descent, closed total boundaries and homology completeness. Existing escalation remains owner-held.

Completed actual proof of `thm-complete-exhaustive-filtered-complex-convergence-criterion`, preserving both claims. Checked exact projected outgoing kernel in both directions, Q-transition surjectivity and vanishing, actual-boundary union and graded quotient, fixed-bound image closedness by compatible approximate primitives, finite primitive descent, translated closure of all boundaries, exact cycle towers giving completion surjectivity, separatedness and incoming source bounds. AC propagated explicitly. No Milnor/Mittag–Leffler/Grothendieck result consumed. Canonical ordering adopted with B_n defined in Given and second-clause-only steps qualified. Contract has every actual step/input, exact local source sections and boundary evidence. Whole batch now55 fully authored items (original52 plus3 local lemmas), A47/B8; full explicit precheck43/43, rendering57/57, content-policy55/55 and strict contracts43/43 pass. A/B prose updated. Current shared plan remains A0/B0 items, versus47/8 manifest: serial Step4 must splice. validate-plan(research/plan-spec.json) passes but excludes our unspliced item lists. Existing convergence item escalation remains owner-held and must be resolved by owner on the current proof/dependencies; no --owner or acceptance attempted. Changed exact scope also requires current owner receipt. Source-resolution holds and source retry histories remain unchanged. No published content or canonical published ledger edited. Next refresh permitted receipts after owner scope reconciliation, then begin batch8 singular-cochain definition after full assigned design/current-dependency reading.

Began batch8 AT6: read complete AT6 design section957–1014, current first five manifest entries, batch8 notes, canonical prerequisite roots and generated task. Read actual singular-chain, simplex/coefficient, boundary definitions and full boundary-square proof. Browser Hatcher ATch3 printed197–198 (lines980–1030) supplies the cochain definition and positive sign convention; this is reading evidence, not a fetch stamp. Completed `def-singular-cochain-complex-with-coefficients`: arbitrary simplex functions, finite evaluation sums, explicit inverse tensor/Hom maps, boundary compatibility, negative/empty/zero cases, choice-free. Direct suppliers added and frontier refreshed; rendering passes. Next square-zero lemma. Keep all batch8 inherited UCT/cellular/pinch and fibration obligations open.

Completed `lem-the-singular-coboundary-squares-to-zero`: evaluation on every chain, all integer degrees including−1 and0, empty/zero coefficients, unnormalized point case. Rendering and scoped strict contract pass; precheck initially found an untagged split display paragraph, joined the same mathematical step and reran successfully. No AC. First batch8 definition's record-item attempt was refused by pending global scope, so both decisions remain pending. Next singular cohomology quotient definition.

Completed `def-singular-cohomology-with-coefficients`: quotient licensed by the actual preceding square-zero lemma, representative equivalence in both directions, group/module operations, degree0 and negative conventions, empty/zero cases. Rendering passes; decision pending global scope. Read full induced singular-chain map and its boundary-commutation proof before the functoriality proposition. Next actual cochain maps, coefficient maps, quotient descent and composition laws.

Completed cohomology functoriality proposition: actual precomposition map commutes with differential, preserves both quotient subgroups, identity/composition on simplices and cochains, coefficient postcomposition and commuting naturality square. Added direct cochain supplier; frontier refreshed. Precheck/rendering and two current scoped strict contracts pass. Decisions still pending current global scope. Next homotopy invariance by the actual prism formula; reread that supplier in full.

Completed homotopy invariance: explicit K^n=precomposition with P_(n−1), all degree indices, positive deltaK+Kdelta formula, cocycle quotient, degree0/negative and constant-homotopy unnormalized cases; no AC. Added direct definitions, frontier refreshed; precheck/rendering and3 scoped strict contracts pass. Hatcher printed197–201 read through line1342, including complete relative-cochain/LES/connector passage1126–1269 and functorial passage1270–1317; homotopy passage continues past1342, so source reading of that relative clause is not yet complete. Next relative cochain definition, where the relative prism restriction will be supplied after defining its domain. All5 first AT6 items authored, decisions pending scope refresh.

Global scope cleared. Successfully recorded/refreshed59 completed non-held items:54 batch7 items excluding the owner-held convergence theorem, and the first5 AT6 items. No owner record overwritten. Completed sixth AT6 item `def-relative-singular-cochain-complex`: exact quotient-Hom inverse, differential compatibility, complementary simplex basis, relative square-zero, cohomology quotient and A=empty/A=X/zero-degree cases; no AC. Direct cochain supplier added, frontier refreshed, rendering passes; recorded repaired/confidence1 after checks. Next fully explicit pair LES and connector chase.

Completed pair LES: explicit degreewise zero extension and kernel, connector with both representative independences, all three exactness positions in both directions, initial H0 injection and A=empty/A=X cases. Added actual suppliers; frontier refreshed. Canonical ordering and boundary-contract anchors repaired; precheck/rendering and4 scoped strict contracts pass. Repaired/confidence1 recorded. Next pair naturality; preserve the exact positive connector formula and make relative cochain maps explicit.

Completed pair-sequence naturality: relative pullbacks, all inclusion/restriction/connecting squares, coefficient maps and pair functoriality; connector calculation does not require zero-extension naturality. Direct relative definition added; frontier refreshed. Canonical ordering adopted; precheck/rendering and5 scoped strict contracts pass; repaired/confidence1 recorded. Next excision; read full actual cover-small chain homotopy equivalence and its support preservation, not merely a homology-isomorphism statement.

Completed excision: interiors of {A,X−Z} cover X, exact simplex-basis intersection, actual supplier proof's least-depth D=0 and R=identity on all small chains (thus on CA), quotient chain homotopies and positive dual homotopy, both inverse cohomology maps and actual restriction identification. Read complete current cover-small proof and subdivision definitions/homotopy theorem; no defect established in the used clauses. The contract's F1 statement excerpt names the chain equivalence; the stronger D/R property is specifically checked in supplier proof steps2.1–4.1 and rederived in authored step2.1, not pretended to appear in that short statement excerpt. Hatcher201–202 complete homotopy/excision passage1318–1395 read, and203–204 absolute MV passage1522–1562 read. Precheck/rendering and6 scoped strict contracts pass; repaired/confidence1 recorded. Next MV with U-minus-V difference and explicit connector, preserving the sign interface needed by batch9.

Receipt correction: excision record-item was attempted after the successful checks but refused because Step3a reopened concurrently. The preceding phrase “recorded” is incorrect for this item; its repaired/confidence1 decision is pending. No acceptance receipt was written. Continue independent MV authoring.

Completed MV: degreewise exact dual row proved by agreeing simplex values and zero extension, U-minus-V sign, explicit small-to-full cohomology isomorphism from dual homotopies, connector with unique relative differential and both representative independences, all exactness positions, ordered-cover and coefficient naturality through the canonical inclusion, empty/identical cover calculations. Precheck/rendering and7 scoped strict contracts pass. Global scope cleared; excision and MV repaired/confidence1 receipts now successfully recorded. Ten AT6 items authored. Next Kronecker definition and full representative independence, then UCT local extension supplier with exact AC and presentation-independence obligations.

Authored Kronecker evaluation definition: finite chain sum, quotient rule with explicit justified_by on the next representative-independence lemma, negative/empty/zero cases and precise integral versus R-bilinear coefficient convention. Rendering passes; hold its decision until that justifier is actually written and checked. Next justifier uses both replacement calculations, evaluation additivity, actual f# cycle map, and coefficient naturality.

Completed Kronecker representative-independence lemma: both replacement calculations, biadditivity, R-bilinearity, spatial and coefficient naturality, degree-zero and point evaluation. Precheck1/1, rendering2/2, scoped strict contracts8/8 pass. Definition and lemma decisions attempted after checks (see next checkpoint for any refusal). Current owner direction confirms convergence escalation closed at17:55; batch7 source-alternative evidence remains required, without claiming unavailable chapters read. Next local UCT extension lemma and full Miller section27 reading.

Both Kronecker receipts were refused by the reopened global Step3a gate; no acceptance was recorded. UCT local extension proof now fully written: exact delta(g pi) quotient correction, converse restriction/injectivity, unique differential factorization, explicit u q pi surjectivity, natural chain restrictions, projective comparison lifts with f1−g1=h a and canonical cokernel maps. Read Miller section27 lines4064–4172 (printed73–74), including complete theorem proof; its proof does not itself spell out comparison independence, which is supplied locally. No unavailable-source fetch stamp. Precheck canonical numbering adopted and passes; rendering passes. Strict contract first failed an inexact F3 quote; corrected to the actual formula before rerun. Next finish checks/receipt and topological specialization.


OWNER OPERATOR DELEGATION18:17UTC: User explicitly asks finishing remaining145 items with idle authoring agents. Four additional Astra-medium authors are running. e retains AT6 singular-cohomology/coefficient A/B and completed batch7 bookkeeping. The untouched fibrations A/B, batch9 singular/smooth A/B and connections A/B are delegated; do not begin those pages. New authors write disjoint canonical items and isolated manifest/contract fragments for root serial merge. Read research/phase-2-next-20-remaining-author-delegation.json and latest owner-authoring-direction.md. At your completion report AT6/batch7 honestly; root will reconcile their handoffs into the engine original group coverage without forging any author success.

Completed `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`: Absolute and relative free bases verified, exact local UCT applied, actual evaluation identified and pair/coefficient naturality proved; degree zero and empty/equal pairs checked. Precheck, rendering and ten scoped strict contracts pass. Previous three pending Kronecker/extension receipts also successfully recorded at18:18. Decision attempt refused; pending, no acceptance written.

Completed `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`: Explicit linear section, direct-sum map with injectivity and unique inverse, projection-difference calculation and endpoint cases fully authored. Precheck, rendering and eleven scoped strict contracts pass. No nonexistence of a natural splitting inferred merely from choice dependence; that B counterexample remains open. Decision attempt refused; pending, no acceptance written.

Completed `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`: Complete basis-extension argument makes restriction onto, so the local Ext cokernel vanishes; full algebraic dual and canonical natural evaluation distinguished from AC choices. Precheck, rendering and twelve scoped strict contracts pass. Topological UCT and splitting receipts remain pending if global scope is open. Decision recorded repaired/confidence1.

Completed `cor-integral-cohomology-detects-adjacent-homology-torsion`: Finite cyclic Hom and Ext computations use explicit exact free resolutions and finite coordinate sums; torsion characterized in both directions, n=0 and m=1 checked, m=0 separated as free. Precheck, rendering and thirteen scoped strict contracts pass. Decision attempt refused; pending, no acceptance written.

Completed `lem-singular-product-chain-equivalence-by-simplex-models`: Actual affine prism plus point contraction, signed tensor contraction, unique universal generator maps, recursive inverse and both homotopies, scalar extension and no-AC checks complete. Precheck, rendering and fourteen scoped strict contracts pass. Read Miller25 Lemma25.10–Theorem25.13 lines3673–3758; the local proof supplies all induction omitted by the source reference. Expanded six recent contracts to complete exact supporting local sections. Decision recorded repaired/confidence1.

Completed `thm-topological-kunneth-short-exact-sequence-for-homology`: Read corrected PID exactness, tensor kernel/cokernel, Tor quotient and splitting proofs; hypotheses match arbitrary-rank nonnegative singular complexes. Actual cross product and canonical transported Tor map checked at every exactness position and naturality square. Precheck, rendering and fifteen scoped strict contracts pass. Decision attempt refused; pending, no acceptance written.

Completed `prop-the-homology-kunneth-sequence-splits-nonnaturally`: Transported actual cycle-retraction section and verified both inverse direct-sum composites, no splitting of boundary inclusion assumed. Endpoint and zero-end-term cases explicit. Precheck, rendering and sixteen scoped strict contracts pass. Decision attempt refused; pending, no acceptance written.

Completed `cor-field-kunneth-isomorphism-for-homology-of-products`: Arbitrary homology vector spaces have explicit length-zero projective resolutions under AC, so balanced Tor vanishes; supplied AC-to-DC use identified. Actual cross product becomes an isomorphism without dimension restriction. Precheck, rendering and seventeen scoped strict contracts pass. Decision attempt refused; pending, no acceptance written.

Added necessary local `lem-additive-singular-cohomology-cross-product-is-well-defined` immediately after the original definition on AT6 A, before its finite-free Kunneth consumer. Preserved every original ID/claim and pair. Definition and lemma fully authored: two bidegree differential calculation, both signed coboundary changes, inverse comparison K=Tprime L+P T, dual homotopy, bilinearity and naturality. Precheck1/1, rendering2/2 and18 scoped strict contracts pass. Manifest, justified_by, coverage local construction and contract registered. New inventory needs owner current scope refresh; no owner override attempted. Read Miller Construction28.1 lines4224–4288 printed76–77: its signed convention differs; our positive differential calculation is explicit. Next finite-free cohomological Kunneth proof via an actual homology deformation retraction, then axioms and all B examples.

Completed `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`: Explicit deformation retraction dh+hd=1−ell eta, signed tensor/dual homotopies, finite-basis Hom-tensor inverse and finite-diagonal cohomology calculation prove the actual cross product; symmetric factor handled separately. Precheck/rendering pass; strict batch8 contracts21/21 pass including two externally merged fibration contracts, which are not claimed as my audit. Decision recorded repaired/confidence1.

Completed `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms`: Relative prism preserves subspace chains and dualizes on quotients; point differential alternation computed; arbitrary coproduct cohomology uses explicit AC selections of primitives and representatives, finite case choice-free. Precheck/rendering pass and twenty-two scoped contracts pass (including two externally merged fibration contracts). Decision attempt refused; pending, no acceptance written.

Owner delegation read at18:35: original e now retains AT6 A/B and completed batch7 reconciliation only; fibrations, smooth comparison and connections are assigned to named owner authors. Preserve their canonical merges, do not author their pages. Two fibration contracts were externally merged and pass mechanical strict checks but are not my mathematical audit. AT6 original24 A items plus the new cross-product lemma are now fully authored; remaining B8 and necessary local cellular/pinch suppliers remain. Axioms checks passed (precheck/rendering,22 strict contracts including2 external); receipt refused by reopened global scope. Next projective-space cellular calculation and actual pinch map, with no B-to-B dependency.

Completed `lem-real-projective-space-cellular-homology-and-pinch-map`: Full quotient CW construction, local-degree comparison f antipodal=f, explicit integral and mod-two kernels/images, actual top-cell pinch map and natural singular field-duality square authored. Precheck/rendering and23 scoped strict contracts pass. Miller17 complete calculation lines2312–2422 printed42–43 read; local proof supplies quotient topology and pinch details. Added on existing A before four B consumers; current scope refresh required. Decision attempt refused; pending, no acceptance written.

Completed `ex-integral-cohomology-of-real-projective-space-from-uct`: Computed each degree from the actual RP homology supplier and explicit adjacent Hom/Ext values, including j=m+1 and m=0,1,2,3. Precheck/rendering pass; batch8 strict contracts38/38 pass including external fibration additions, not claimed as my audit. Decision attempt refused; pending, no acceptance written.

Completed `ex-cohomology-of-lens-spaces-from-uct`: Actual cyclic quotient and fundamental sector homeomorphism produce the CW structure; circle arcs compute d2=p and d squared zero forces d3=0. All UCT degrees, p=1 and q hypotheses checked. Precheck/rendering and39 scoped strict contracts pass, including external pair entries. Read full Hatcher Example2.43 lines3122–3306 printed144–146; no classification result consumed. Decision recorded repaired/confidence1.

Published concern confirmed on current text: `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`, proof1.1 chooses a countably infinite sequence of points in distinct met cells from an arbitrary infinite family, but statement and deps omit a choice assumption. Confidence1 for this assumption/dependency omission, not a claim the classical theorem is false under AC. Required supplier `def-axiom-of-choice` (or a precisely proved weaker selection principle plus its iteration), propagated to `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`, `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`, and applicable arbitrary-CW comparison consumers. Repair strategy: explicitly assume AC and derive the selected sequence, or replace it with a proved choice-free argument; audit the consumer closure before claiming choice-free comparison. Our infinite-wedge example already declares AC and explicitly allows this compactness use, so this unrelated published bookkeeping debt does not invalidate its current argument. Canonical ledger left to serial reconciler.

The published compactness concern belongs to page `cw-complexes-and-cellular-homology`. Full batch8 strict check during concurrent fibration editing failed15 errors confined to the externally owned fiber-transport/fiber-equivalence/Mobius entries; no edits to those records. Reran strict contracts explicitly scoped to completed AT6 items: proof-contract: 0 error(s), 0 warning(s), 24/24 item(s) checked. This is the relevant check for the just-completed infinite-wedge example, not a claim of a full batch pass.

Completed `ex-field-cohomology-of-an-infinite-wedge-of-circles`: Actual CW endpoint complex, unrestricted sequence-to-functional inverse, binary enumeration of finite supports and diagonal uncountability witness complete. Precheck/rendering and24 AT6-scoped strict contracts pass; full batch check encountered15 transient externally owned fibration errors, reported separately. Published compactness choice omission recorded with exact supplier/page and locally covered by explicit AC. Decision recorded repaired/confidence1.

Completed `ex-homology-of-a-product-of-spheres-by-kunneth`: Four actual cross-product generators, equal-dimension rank two, zero-dimensional boundary cases and free-resolution Tor vanishing fully calculated. Explicit precheck, rendering and item-scoped strict contract pass. Decision attempt refused; pending, no acceptance written.

Completed `ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces`: All tensor and Tor index pairs calculated; explicit multiplication-two resolution and nonzero order-two section lift prove the correction and direct sum. Canonical precheck, rendering and strict item contract pass. Decision recorded repaired/confidence1.

Completed `ex-kronecker-pairing-for-a-cellular-circle-generator`: Oriented endpoint calculation identifies the singular generator; Ext vanishing gives unique dual class and an actual u q pi singular cocycle evaluates all multiples. Precheck, rendering and strict item contract pass. Decision recorded repaired/confidence1.

Completed `cex-the-integral-kronecker-map-need-not-be-an-isomorphism`: Odd multiplication-two presentation class maps injectively to a nonzero RP2 cohomology class; all integral two-cycles are boundaries so evaluation kills it. Precheck, rendering and strict item contract pass. Decision attempt refused; pending, no acceptance written.

Completed `cex-the-uct-splitting-is-not-natural`: Actual RP2 pinch map has nonzero mod-two cohomology pullback and zero integral Hom pullback; the section naturality square explicitly contradicts this. Individual splittings and all coefficient conventions checked. Precheck, rendering and strict item contract pass. Decision attempt refused; pending, no acceptance written.

Resumed receipt checkpoint `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`: Reread complete local extension proof and relative simplex-basis construction: both are nonnegative free PID complexes; evaluation and canonical length-one comparison give the actual natural absolute/pair sequence. Degree zero, equal/empty pair and AC uses match the contract. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`: Reread cycle projection supplier and section u q pi. Verified its evaluation composite, injectivity and unique inverse of the displayed direct-sum map, coefficient compatibility, zero Ext endpoint and absence of any claimed natural space section. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `cor-integral-cohomology-detects-adjacent-homology-torsion`: Checked the written finite cyclic resolutions, Hom and Ext calculations and both containments identifying torsion in the split group; degree zero, m=1 and separate free m=0 case are explicit. AC inherited from the reread UCT and comparison supplier. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `thm-topological-kunneth-short-exact-sequence-for-homology`: Reread canonical PID exactness and kernel/cokernel proof plus full simplex-model equivalence. Verified gamma=beta T_* and every exactness position and naturality square for the actual cross product; nonnegative finite diagonals permit arbitrary ranks under stated AC. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `prop-the-homology-kunneth-sequence-splits-nonnaturally`: Reread the published retraction/section proof. Verified transport by S_* and T_*, all four composites and the inverse direct-sum formula. Only cycle-surjection splittings are used, never boundary-inclusion splittings; endpoints and inherited AC remain explicit. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `cor-field-kunneth-isomorphism-for-homology-of-products`: Verified length-zero projective resolutions for arbitrary homology vector spaces annihilate Tor. Reread the PID tensor supplier exact AC-to-DC argument and actual cross-product sequence. No finite-dimensional hypothesis is introduced; empty and degree-zero cases checked. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `lem-additive-singular-cohomology-cross-product-is-well-defined`: Reread full model equivalence and positive cochain conventions. Checked the two bidegree differential terms, both signed representative changes and K=Tprime L+P T inverse comparison. Naturality and bilinearity descend explicitly, including zero input degrees without AC. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `def-additive-singular-cohomology-cross-product`: Reread balanced functional J, finite diagonal convention and its fully proved quotient justifier. Both representative changes, inverse independence and zero-degree vertex formula are established before consumers; construction uses positive coboundary without extra pq sign or AC. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms`: Reread actual pair sequence, naturality and excision proofs. Verified relative prism descent, unnormalized point differential alternation, simplex decomposition into coproduct summands and both product-cohomology bijectivity directions with AC selections stated; finite choice remains separate. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `lem-real-projective-space-cellular-homology-and-pinch-map`: Reread the actual finite cellular comparison, incidence degree, local degree and antipodal suppliers and field-duality proof. Checked quotient CW attachments, two local degrees 1 and (-1)^j, endpoints, integral/mod2 groups and actual top-disk pinch map; singular q^* follows from natural field duality under AC. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `ex-integral-cohomology-of-real-projective-space-from-uct`: Recomputed each UCT degree from the reread projective-space homology and cyclic Ext supplier: even positive torsion, odd top free group, zero above dimension including m+1; m=0,1,2,3 and AC propagation match the written argument. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `ex-cohomology-of-lens-spaces-from-uct`: Reread complete sector quotient proof and finite cellular suppliers. Verified action freeness, inverse residue, ball homeomorphism, one cell in each degree, p-fold edge map, d2=p and injectivity forcing d3=0. UCT then gives every degree; p=1 is separately S3. No change to prior source reading claims. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `ex-homology-of-a-product-of-spheres-by-kunneth`: Reread sphere homology and actual topological Kunneth sequence. Checked all four nonzero tensor pairs, free Tor vanishing, factor inclusion generators and equal-dimension rank two; S0 cases computed separately and AC inherited. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `cex-the-integral-kronecker-map-need-not-be-an-isomorphism`: Reread RP2 homology, local UCT injection and resolution comparison. Odd value-one Hom class in the multiplication-two resolution survives to a nonzero integral H2 cohomology class, but every integral two-cycle is a boundary; this proves actual evaluation noninjectivity. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

Resumed receipt checkpoint `cex-the-uct-splitting-is-not-natural`: Reread the actual RP2-to-S2 pinch supplier, natural field duality and UCT. Its mod2 cohomology pullback is nonzero whereas the integral-H2 Hom pullback is zero. Verified the incompatible section square on reduction mod2 of 1, with individual splittings and AC distinguished. Recorded repaired/confidence 1 after current explicit-path batch8 checks (45 prechecks, 62 renders, 58 policy items, 45 strict contracts all pass). Examined dependency IDs are in the receipt. Existing mathematical text unchanged; source disposition holds remain. Next: continue the remaining pending receipts in prerequisite order.

## Current retained completion inventory — 2026-09-11

### double-complexes-exact-couples-and-convergence

- `def-homological-double-complex`
- `rem-commuting-versus-anticommuting-double-complex-conventions`
- `def-direct-sum-total-complex-of-a-double-complex`
- `lem-the-total-differential-squares-to-zero`
- `def-product-total-complex-of-a-double-complex`
- `prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes`
- `lem-countable-sequence-groups-and-tail-filtrations`
- `cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals`
- `def-row-and-column-filtrations-of-a-first-quadrant-double-complex`
- `thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex`
- `thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex`
- `prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages`
- `thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex`
- `def-exact-couple`
- `def-differential-associated-to-an-exact-couple`
- `lem-the-exact-couple-differential-squares-to-zero`
- `def-derived-exact-couple`
- `lem-the-derived-couple-maps-are-well-defined`
- `thm-the-derived-couple-is-exact`
- `thm-an-exact-couple-generates-a-spectral-sequence`
- `thm-a-filtered-complex-produces-an-exact-couple`
- `prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree`
- `def-regular-spectral-sequence`
- `def-weak-convergence-of-a-spectral-sequence`
- `def-strong-convergence-of-a-spectral-sequence`
- `thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology`
- `def-lim-one-obstruction-to-completeness`
- `lem-countable-tower-completion-obstruction-exact-sequence`
- `lem-countable-tower-six-term-limit-sequence`
- `lem-two-by-two-delta-complex-for-a-double-tower`
- `lem-boardman-approximate-cycle-obstruction-sequence`
- `thm-complete-exhaustive-filtered-complex-convergence-criterion`
- `prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment`
- `lem-finite-and-complete-filtered-isomorphism-lifting`
- `thm-spectral-sequence-comparison-theorem`
- `cor-quasi-isomorphism-criterion-from-a-filtered-map`
- `thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence`
- `thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence`
- `prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically`
- `prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences`
- `prop-short-exact-sequences-of-filtered-complexes-give-compatible-exact-couples`
- `fs-the-two-spectral-sequences-of-a-double-complex-have-identical-e-one-pages`
- `fs-direct-sum-and-product-totalisations-are-always-isomorphic`
- `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data`
- `fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration`
- `fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets`
- `fs-exhaustive-filtration-implies-separated-and-complete-filtration`

### double-complexes-exact-couples-and-convergence-examples

- `ex-the-two-spectral-sequences-of-a-two-by-two-double-complex`
- `ex-acyclic-assembly-with-exact-columns`
- `ex-the-exact-couple-of-a-two-step-filtration`
- `ex-deriving-an-exact-couple-once`
- `ex-a-first-quadrant-five-term-exact-sequence`
- `cex-sum-and-product-totalisations-on-an-infinite-diagonal`
- `cex-an-exhaustive-nonseparated-filtration-with-the-wrong-naive-abutment`
- `ex-a-filtered-quasi-isomorphism-detected-on-associated-graded-complexes`

### singular-cohomology-and-coefficient-theorems

- `def-singular-cochain-complex-with-coefficients`
- `lem-the-singular-coboundary-squares-to-zero`
- `def-singular-cohomology-with-coefficients`
- `prop-singular-cohomology-is-contravariantly-functorial`
- `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`
- `def-relative-singular-cochain-complex`
- `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`
- `thm-naturality-of-the-singular-cohomology-pair-sequence`
- `thm-excision-for-singular-cohomology`
- `thm-mayer-vietoris-sequence-in-singular-cohomology`
- `def-kronecker-evaluation-pairing`
- `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`
- `lem-singular-uct-extension-from-cycle-projections`
- `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`
- `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`
- `cor-integral-cohomology-detects-adjacent-homology-torsion`
- `lem-singular-product-chain-equivalence-by-simplex-models`
- `thm-topological-kunneth-short-exact-sequence-for-homology`
- `prop-the-homology-kunneth-sequence-splits-nonnaturally`
- `cor-field-kunneth-isomorphism-for-homology-of-products`
- `def-additive-singular-cohomology-cross-product`
- `lem-additive-singular-cohomology-cross-product-is-well-defined`
- `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`
- `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms`
- `lem-real-projective-space-cellular-homology-and-pinch-map`

### singular-cohomology-and-coefficient-theorems-examples

- `ex-integral-cohomology-of-real-projective-space-from-uct`
- `ex-cohomology-of-lens-spaces-from-uct`
- `ex-field-cohomology-of-an-infinite-wedge-of-circles`
- `ex-homology-of-a-product-of-spheres-by-kunneth`
- `ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces`
- `ex-kronecker-pairing-for-a-cellular-circle-generator`
- `cex-the-integral-kronecker-map-need-not-be-an-isomorphism`
- `cex-the-uct-splitting-is-not-natural`

### Published spectral-sequences page: current draft-item census

- `lem-spectral-sequence-subquotient-and-local-lifting-calculus`
- `def-increasing-and-decreasing-filtration-of-an-object`
- `def-exhaustive-separated-bounded-and-finite-filtration`
- `def-associated-graded-object-of-a-filtered-object`
- `lem-associated-graded-quotients-are-well-defined-subquotients`
- `def-filtered-chain-complex`
- `def-filtered-chain-map`
- `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`
- `def-induced-filtration-on-homology`
- `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data`
- `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex`
- `lem-r-boundaries-embed-in-r-cycles`
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`
- `lem-the-filtered-differential-induces-d-r-on-the-r-page`
- `prop-the-rth-differential-has-bidegree-minus-r-r-minus-one`
- `lem-the-rth-differential-squares-to-zero`
- `thm-the-next-page-is-the-homology-of-the-current-page`
- `prop-e-zero-is-the-associated-graded-complex`
- `prop-e-one-is-homology-of-the-associated-graded-complex`
- `def-limiting-cycles-boundaries-and-e-infinity`
- `def-homological-spectral-sequence`
- `def-cohomological-spectral-sequence`
- `def-morphism-of-spectral-sequences`
- `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`
- `def-spectral-sequence-stabilization-at-a-bidegree`
- `def-collapse-at-a-page`
- `prop-degree-reasons-force-stabilization-in-a-bounded-region`
- `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses`
- `def-abutment-to-a-filtered-object`
- `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`
- `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`
- `lem-edge-homomorphisms-are-natural`
- `def-extension-problem-of-a-convergent-spectral-sequence`
- `lem-abelian-group-model-for-spectral-sequence-computations`
- `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`
- `prop-collapse-does-not-in-general-split-the-abutment`
- `thm-the-cohomological-filtered-complex-construction`
- `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence`
- `fs-e-infinity-is-the-abutment-object`
- `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r`
- `fs-a-spectral-sequence-collapses-when-one-differential-is-zero`
- `fs-collapse-solves-all-extension-problems`
- `fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex`
- `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources`
