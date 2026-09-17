# Step 5a adjudication — group `a` (batches 11, 12, 13)

Run `phase-2-remaining-27`. Dispatch label `5a-a`; group letter `a`.
Artifacts: this report and `research/phase-2-remaining-27-alpha-a-5a-decisions.json`
(47 decisions, one per routed obligation).

## Scope and inputs

Batches 11–13, covering pages
`cartan-subalgebras-and-root-space-decompositions(+examples)`,
`root-systems-dynkin-diagrams-and-cartan-killing-classification(+examples)`,
`highest-weight-theory-for-complex-semisimple-lie-algebras(+examples)`,
`compact-lie-groups-maximal-tori-and-peter-weyl-theory(+examples)`,
`real-forms-and-real-semisimple-lie-algebras(+examples)`,
`moment-maps-and-symplectic-reduction(+examples)`.

Read for the adjudication: the three scope files, the reader reports
(`reader-11/12/13.md`), the reader findings (`reader-findings-11/12/13.json`),
the refuter reports (`refute-11/12/13.json`), every carrier named by a routed
obligation (current bytes), every cited dependency needed to test an assigned
claim, the pre/post hash snapshots, the three batch proof contracts, and the
external source cited by the Serre item (Etingof, *Lie Groups and Lie
Algebras I*, 18.745 lecture notes, retrieved from the MIT OCW URL recorded in
the item and read at Lecture 24, Lemma 24.3 and Theorems 24.1–24.2,
printed pp. 129–132); the Knapp host was verified by retrieval.

Obligations decided (see the decisions file for the per-obligation evidence):
25 touched carriers, 1 touched page, 3 reader findings and 18 refuter
findings. Every obligation carries a nonempty evidence string and exactly one
closed defect-ledger row (rows `phase-2-remaining-27-a-5a-01` … `-47`), each
owned at `caught_at_stage: "5a-adjudicate"`.

## Adjudication of the touched carriers (verdicts)

Batch 11. Repairs by `reader-11` were re-read against the current bytes and the
cited dependencies: `def-reduced-crystallographic-euclidean-root-system`,
`lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra`,
`thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras`,
`thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`,
`thm-existence-of-each-classified-root-system`,
`thm-universal-property-of-the-free-lie-algebra` → **accepted_repair** (item
unchanged; only the mandated contract risk-review record moved the carrier
hash, which is recorded in each decision; where that moved the hash off the
reader snapshot the verdict is **amended_repair** with that reason stated — this
applies to the six accepted repairs above plus the twelve batch-12 repairs
listed below).
`thm-rank-two-root-system-classification` → **amended_repair**: the reader's
rewrite of step 6.1 is correct, but the refuter's finding that the disposition
of `(2,2)` invoked an unlicensed descent is itself correct, and I amended that
sentence (see below).

Batch 12. Repairs by `reader-12` re-read and accepted/amended:
`def-weight-and-weight-space-of-a-lie-algebra-representation`,
`ex-the-adjoint-representation-and-the-highest-root`,
`fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t`,
`prop-top-highest-weight-summand-in-a-tensor-product`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`
(accepted; amended_repair for bookkeeping as above);
`ex-verma-modules-for-sl-two` and
`lem-simple-reflections-preserve-weight-multiplicities` and
`lem-simple-root-integrability-bounds-the-dominant-cyclic-module`
→ **amended_repair**: the reader's item repairs are correct and were kept, and
each item received one further mechanical or mathematical amendment (a
duplicated wikilink in [L4]; input tags on the closing step 6.1; the rewritten
step 3.1 of the integrability lemma). Page
`compact-lie-groups-maximal-tori-and-peter-weyl-theory` → **accepted_repair**
(two broken math spans repaired by the reader; page untouched since).

Batch 13. Repairs by `reader-13` re-read and accepted:
`cor-maximal-compact-subgroups-exist-and-are-conjugate-…` (the false midpoint
inequality and the unbounded sublevel sets were replaced by the radius-function
argument; re-derived), `prop-cartan-decomposition-gives-the-invariant-metric-…`,
`prop-classical-real-forms-of-the-classical-complex-lie-algebras` (split forms
and real ranks corrected), `thm-cayley-transforms-…`, `thm-classification-of-real-semisimple-lie-algebras`,
`thm-global-cartan-decomposition-…`, `thm-iwasawa-decomposition-on-the-lie-algebra-level`;
`fs-an-infinitesimal-moment-map-is-automatically-equivariant` → **amended_repair**
(the reader's sign repair kept, and the defect computation amended to the
consistent `{y,-x}=1`).

## Confirmed findings and repairs

Fatal findings (all repaired, `repair_confidence: 1`):

- `refuter:11:1` `def-toral-and-maximal-toral-subalgebra`: the "Equivalently"
  clause was false (on an abelian `t` the restrictions `ad_x|_t` vanish, so the
  first clause collapsed to abelianness; `C·e ⊂ sl_2` is the witness).
  Repaired by defining toral as abelian with `ad_x` semisimple on `g` and
  stating why the restriction condition is automatic.
- `refuter:12:1` `thm-conjugacy-of-maximal-tori`, step 4.1: the displayed
  invariance identity had the wrong sign (sl_2 check: `⟨[h,e],f⟩=8` versus
  `-⟨h,[e,f]⟩=-8`). Repaired to
  `0=⟨[Z,Ad(g_0)X],Y⟩=⟨Z,[Ad(g_0)X,Y]⟩` with the two-step derivation.
- `refuter:13:1` `lem-nonequivariance-defect-…`: the equivalence with `c=0`
  needs connectedness of `G`; the refuter's counterexample
  (`G=R⋊Z/2` on `T*R`, abelian Lie algebra, `μ=(p+c)e*`, `c≠0`) is correct and
  was verified by hand. Repaired by qualifying the Statement and step 4.1 with
  `G^0`-equivariance and the coset condition, exactly as the item's own cited
  supplier states.

Nonfatal findings: `reader:11:1`/`refuter:11:3` (the Dynkin lemma's assertion 5
hand-off — replaced by the explicit multiple-edge label-vector analysis, and
the factor-2 slip in [L2] corrected), `reader:11:2`/`refuter:11:4` (the Serre
item — see the recorded residual below), `refuter:11:2` (the `(2,2)` descent),
`refuter:11:5` (the highest-root descent — replaced by the reflection
argument), `refuter:11:6` (the length-ratio clause — qualified to within
irreducible components), `refuter:12:2` (`⟨[X,H],H'⟩=⟨X,[H,H']⟩=0`), `refuter:12:3`
(citation repaired to steps 2.2 and 3.1), `refuter:12:4` (`M^int` is a
subrepresentation because `U(sl_2^{(j)})(x·w)=X·w` for the finite-dimensional
adjoint submodule `X`), `refuter:12:5`–`12:7` (Knapp host `math.stanford.edu`
→ `www.math.stonybrook.edu`, verified by retrieving the book),
`refuter:13:2` (the θ-stable Cartan invariance paragraph rewritten with the
correct positive-definiteness argument), `refuter:13:3` (step reference
`3.2 to 1.7` → `3.2, 3.3 and 4.1`), `refuter:13:4` ([A1] cited a nonexistent
`[F2]`; now cites the two AC_ω suppliers of [F3]), `refuter:13:5` (ill-typed
`ω_α ⊕ β` → `ω_α ⊕ ω_β`).

Published finding: `reader:11:3` — the published
`thm-additive-jordan-chevalley-decomposition` states AC but omits
`def-axiom-of-choice` from its deps. Published content was left read-only; the
defect, supplier and Phase-3 repair strategy are recorded in
`research/published-consumer-supplier-ledger.md` (new finding section and one
new A-P row), and the decision is `confirmed_nonfatal` with row disposition
`nonfatal-recorded`.

## Repair detail for `thm-serre-presentation-theorem` (recorded residual)

The reader's finding is confirmed against the source. I replaced step 1.1 by
the triangular-decomposition construction of Etingof Lemma 24.3 (the algebra
`a = h' ⋉ FL(f')`, its enveloping algebra identified with
`C⟨f'⟩ ⊗ C[h']`, the explicit actions of `h_i, f_i, e_i`, the verification of
the four relation families — re-derived by hand: `[h,h]`, `[h,f]`, `[h,e]`,
`[e,f]` — and the freeness/independence conclusion). In step 5.1 the displayed
normalisation was inconsistent: invariance forces
`(e_i,f_i) = c(α_i,α_i)` and `(h_i,h_j) = 2c(α_i,α_j)` in this library's
Cartan-matrix convention, so the old `2/(α_i,α_i)` with the asymmetric
`(h_i,h_j) = 2(α_i,α_j)/(α_j,α_j)` cannot come from a symmetric invariant form;
the item now uses `(e_i,f_i) = (α_i,α_i)/2`, `(h_i,h_j) = (α_i,α_j)`.

**Residual, recorded honestly**: the existence of the invariant form on all of
`g(A)` (its invariance and the radical/nondegeneracy argument) is still cited
rather than constructed, and step 4.1's one-dimensionality/Weyl-conjugacy
sentence remains compressed. Etingof's own proof of Theorem 24.2(iv) avoids the
form entirely (it uses local finiteness plus the Dynkin-diagram argument), so a
complete repair is reachable by rewriting steps 4.1 and 5.1 along that route,
but that is a dedicated rewrite of a landmark item beyond this adjudication; it
is recorded as the single nonfatal open defect of this group
(`phase-2-remaining-27-a-5a-16`, disposition `narrowed`) and flagged here for
the 5b lead / owner. The item's statement is the standard Serre theorem and its
downstream consumers use only the statement.

Related instances outside the routed obligations (reported, not edited):
`thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`
step 1.1 contains the same "iterating … inverting the reflections" sentence
pattern that `refuter:11:5` flagged here; the refuter recorded it in its
evidence for `refuter:11:5` but the item is untouched and unflagged, so it owes
no decision. The three "terse but true" batch-12 observations recorded in
`reader-12.md` (finite-generation/realisation/outer-automorphism steps) and the
batch-13 observations (partial locator for the convexity inequality) are also
left as recorded for the 5b lead.

## Risk reviews and checks run

- `node tools/risk-report.mjs research/phase-2-remaining-27-batch-{11,12,13}.proof-contracts.json`
  reports 71 + 102 + 40 = 213 HIGH/CRITICAL items (38/33, 79/23, 30/10
  critical/high). Each received a `risk_review` naming the carrier's statement,
  numbered steps and citations, the routed risk signals, a specific focus of
  the check, and the reader/refuter disposition; the notes are in the three
  batch contracts.
- `node tools/risk-report.mjs … --require-reviewed` on all three contracts:
  **0 errors**.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-{11,12,13}.proof-contracts.json --strict`:
  **0 errors** (batch-11 contract regenerated for 7 entries, batch-12 for 18,
  batch-13 untouched beyond risk reviews; stale quotes of the edited items in
  batch 11/12 contracts were regenerated, and the batch-12 contract errors
  inherited from the reader stage — a citation duplicate in
  `ex-verma-modules-for-sl-two` and a tagless closing step in
  `lem-simple-reflections-preserve-weight-multiplicities` — were repaired).
- `node tools/tsx-run.mjs tools/reflow.mts` + `precheck.mts` on every changed
  item: reflow idempotent/clean, precheck PASS (0 failing) for all proof-bearing
  items and 0 checked for the two definitions.
- `node tools/tsx-run.mjs tools/rendercheck.mjs` on all 21 changed items: OK.
- `node tools/step5-scope.mjs check --run phase-2-remaining-27 --phase adjudicate --batch 11`:
  **0 errors, 115 items routed** (with the decision carrier hashes computed
  locally; the engine's stamp gate re-derives the same values).
- `node tools/step5-scope.mjs check-escalations --run phase-2-remaining-27`:
  no escalations in this group's decisions.
- `node tools/defect-ledger.mjs append --file …`: 47 rows appended and the view
  re-rendered (8,912 rows); `validate --run phase-2-remaining-27` reports 144 rows checked, 0 errors. No proposed withdrawal existed in these batches, so none had to be preserved for the 5b lead.
- Frontier ledger: the one cross-batch record whose supplier interface changed
  (`prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` ←
  `def-toral-and-maximal-toral-subalgebra`) was re-verified against the repaired
  definition and `node tools/frontier-dependency-ledger.mjs refresh --run
  phase-2-remaining-27` re-ran cleanly.

## Cross-group observations (for the engine / other owners)

- Batch-3's contract currently reports 71 `proof-contract --strict` errors for
  `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`
  (functional-analysis batch, not this group). Batch 15's single earlier error
  was resolved by the owning group while this adjudication ran. Neither
  involves an item edited here.
- No declaration changes were made by this group's repairs (no new dependency
  edges), so no other batch's dependency record needs a consumer-side edit from
  this dispatch.

## Blockers / unresolved

1. `thm-serre-presentation-theorem` residual (recorded above; nonfatal, open as
   a recorded defect, with the recommended Etingof route).
2. The published AC-metadata gap on
   `thm-additive-jordan-chevalley-decomposition` (Phase-3 repair, read-only
   here).
3. No escalation was raised: each confirmed defect except the two above was
   repaired locally with a complete, verified repair, and the two exceptions
   are recorded rather than blocking on a missing prerequisite (`def-axiom-of-choice`
   is published; the Serre residual is a rewrite decision for the owner).
