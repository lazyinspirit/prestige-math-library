# Step 3b — pair authoring: `parabolic-subgroups-and-double-coset-geometry`

- Run: `frontier-42-coxeter-32`; role `alpha-high`; label
  `step3b-pair-parabolic-subgroups-and-double-coset-geometry-4b4dd81eedfda252`.
- Owned pair: A `parabolic-subgroups-and-double-coset-geometry` (batch 10, order
  1736) / B `parabolic-subgroups-and-double-coset-geometry-examples` (batch 10,
  order 1737). Batch 10 contains no other pair, so no sibling rows are at risk
  in its shared files.
- This report is the durable checkpoint for the pair. This is the third and
  final authoring pass (attempts `56c0aa6c` and `b7bb707b` wrote the item and
  page files, then were superseded before recording decisions or the batch
  proof contract). This pass re-audited all eight items against their current
  suppliers, repaired four mathematical defects plus one stale bookkeeping
  record, created the missing batch-10 proof
  contract, re-ran the checks and recorded all eight item decisions. The item
  files, the batch manifest, the coverage file, the page files and the batch
  notes are the mathematical record; this report is the navigation and
  handoff record.

## Owned items, levels and decisions

| item | kind | level | decision (receipt) |
|---|---|---|---|
| `def-cg-parabolic-quotient-and-two-sided-minima` | definition | 6 | accept |
| `lem-cg-double-coset-descent-reduction-and-minimality` | lemma | 7 | accept |
| `ex-cg-reflection-subgroups-parabolic-and-not` | example | 7 | repaired |
| `thm-cg-parabolic-intersections-and-coset-factorization` | theorem | 12 | accept |
| `lem-cg-double-coset-intersection-parabolic` | lemma | 13 | repaired |
| `thm-cg-double-coset-unique-minimum-and-normal-form` | theorem | 14 | repaired |
| `ex-cg-infinite-dihedral-parabolic-double-cosets` | example | 15 | accept |
| `ex-cg-s4-coset-minima-and-double-coset-decomposition` | example | 15 | repaired |

Every receipt is `research/frontier-42-coxeter-32-step3b-review-<id>.json`,
confidence `1`, with the examined dependency IDs recorded. The recomputed
levels equal the labels in the item frontmatter and in
`research/frontier-42-coxeter-32-batch-10.pages.json`; they are unchanged from
the scaffold labels (no dependency was added or removed in this pass).
`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports no error naming a batch-10 item (the single remaining level error,
`ex-cg-reducible-semidefinite-forms-are-factorwise` 15 vs computed 16, belongs
to another pair; see "Flags outside the owned pair").

## Audit of the scaffolds and local repairs

All eight statements were re-read against the batch-10 manifest and the seven
covered sources; all proofs were re-derived step by step. Four mathematical
defects plus one stale bookkeeping record were found and repaired (nothing in
the item statements was weakened; no claim was dropped):

1. `ex-cg-s4-coset-minima-and-double-coset-decomposition`, steps 1.2 and 1.3:
   the stated criterion for `${}^IW$` was false. Right multiplication by $s_i$
   swaps positions and gives $w\in W^J\iff w(2)<w(3),\ w(3)<w(4)$; left
   multiplication swaps the *values* $i,i+1$, so $w\in{}^IW\iff
   w^{-1}(1)<w^{-1}(2)<w^{-1}(3)$. The old text "$w(1)<w(2)$ and
   $w(2)<w(3)$" wrongly admits, e.g., $2341$ (which has $\ell(s_1w)<\ell(w)$)
   and wrongly rejects $1423$ (which is in ${}^IW$). The listed sets were
   already correct; the two criteria now match them. Re-verified by exhaustive
   enumeration in $S_4$ (all descent criteria, the sets
   $W^J=\{1234,2134,3124,4123\}$, ${}^IW=\{1234,1243,1423,4123\}$,
   ${}^IW^J$ of sizes 2 and 7, the double-coset sizes 18/6 and
   $4,4,4,4,4,2,2$, the $K$ values, the explicit sets
   $W_I3412W_J=\{3412,3421\}$, $W_I4123W_J=\{4123,4132,4213,4231\}$, and
   $2143=2134\cdot1234\cdot1243$ with additive lengths).
2. `ex-cg-reflection-subgroups-parabolic-and-not`, step 1.1: the product
   computation read "$(1\,3)(2\,4)\colon1\mapsto4\mapsto3$"; applying the right
   factor first gives $1\mapsto3$. The value $3412$ and the order-4 list were
   correct; only the displayed intermediate step is fixed.
3. `lem-cg-double-coset-intersection-parabolic`: the empty case was implicit.
   Step 1.2 now assumes $p\ge1$ before using the first letter $s_1$, and step
   3.1 disposes of $p=0$ ($y=1\in W_K$) before the iterative argument. Nothing
   else changed.
4. `thm-cg-double-coset-unique-minimum-and-normal-form`, fact [F1]: extended
   with the mirrored left-coset additivity clause (for the minimal
   representative $d$ of a left coset $W_Ja$, $\ell(ud)=\ell(u)+\ell(d)$ for
   all $u\in W_J$). Step 2.1 uses exactly this clause of HH-11 (3), which the
   original summary omitted while stating only its right-coset mirror.
5. `research/frontier-42-coxeter-32-batch-10.notes.md`: corrected the stale
   disposition tally (now 12 included / 16 inline / 13 out-of-scope /
   2 deferred, matching the coverage file; the 3a review had flagged it).

Key mathematics re-checked during the audit (all choice-free):

- `def…`: the quoted clauses are exactly HH-11 (1)–(3); the two factorizations
  are on the correct sides (`w=ud` with $u\in W_I$, $d\in{}^IW$; `w=dv` with
  $d\in W^I$, $v\in W_I$); $W^I=({}^IW)^{-1}$; no double-coset claim is made.
- `lem…descent-reduction…`: descent reduction terminates in
  $\Omega(d)\cap{}^IW^J$; the middle-block Tits-deletion argument (deletion
  removes a *pair of positions*, not equal letters); minima have no descents;
  every $d\in{}^IW^J$ is the minimum of its own double coset; the additive
  factorization and equality case.
- `ex…reflection-subgroups…`: $H=s_2W_{\{s_1,s_3\}}s_2$ is parabolic but not
  standard (checked against the complete list of the eight standard
  parabolics); $H'=\langle s,tst\rangle=\langle s,u^2\rangle$ is the index-2
  kernel of $s\mapsto0,t\mapsto1$ and is not parabolic.
- `thm…intersections…`: $W_I\cap W_J=W_{I\cap J}$; $\Phi_I=\Phi\cap V_I$ by
  the Qi induction (using only $B(\alpha,\alpha)=1$, never invertibility of
  $B$); global minimality and uniqueness of coset minima.
- `lem…intersection-parabolic`: strong exchange at the first letter of a
  reduced expression of $y$ either deletes a letter of the middle
  representative $d$ (impossible by minimality of $d$ in $W_IdW_J$) or exhibits
  $d^{-1}s_1d$ as a conjugate in $W_J$ of a letter of $J$; length one forces
  membership in $J$; the conjugated positive root is then *simple* — never a
  non-simple positive combination such as $e_j+e_{j'}$.
- `thm…unique-minimum…`: uniqueness of the $udv$ normal form with
  $u\in W_I^K$, $v\in W_J$; the equality chain giving
  $\ell(u_0dv)=\ell(u_0)+\ell(d)+\ell(v)$; the size formulas
  $|W_IdW_J|=|W_I^K||W_J|=|W_I||W_J|/|W_K|$ (finite $W_I$); the necessity of
  the $W_I^K$ restriction (clause (4)).
- `ex…infinite-dihedral…`: normal form $W=\{u^m\}\cup\{u^ms\}$; the lists of
  ${}^IW$, $W^J$, ${}^IW^J=(ts)^{\mathbb N}$; the four-element blocks
  $\{u^{-k},u^ks,u^{-(k+1)}s,u^{k+1}\}$ of lengths $2k,2k+1,2k+1,2k+2$;
  $K=\emptyset$ for every $k$; the blocks partition $W$.
- `ex…s4…`: everything re-verified by exhaustive enumeration, including the
  corrected descent criteria (repair 1 above).

## Supplier reconciliation (no unfinished supplier)

All 22 distinct dependency IDs of the eight items exist on disk and resolve
(15 in-run batches 2/4/7, 7 published). Each supplier used for a nontrivial
claim was opened and its used clauses checked against the current statement and
authored proof:

- batch 2: `def-hh-coxeter-matrix-word-group-and-length` (length/universal
  property), `lem-hh-dihedral-root-recurrence-and-root-sign` (clauses (3)(c),
  (4), (7)), `thm-hh-coxeter-exchange-deletion-and-faithfulness` ((1), (3)),
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` ((1)–(3));
- batch 4: `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`;
- batch 7: `lem-cg-reflection-representation-descends-and-root-norms`,
  `thm-cg-root-sign-and-simple-reflection-positivity`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`;
- published: `def-generated-subgroup`, `def-coset`, `def-group`,
  `def-natural-numbers`, `thm-well-ordering-principle`,
  `def-linear-combination-and-span`, `def-group-homomorphism`.

No supplier is unauthored, so no consumer ID or proof step needed escalation
for an unfinished supplier. The five in-run supplier items of batch 2, 4 and 7
consumed here are themselves authored with `verification.precheck: pass`; the
exact uses are recorded in the batch-10 proof contract
(`research/frontier-42-coxeter-32-batch-10.proof-contracts.json`, 57 citation
contracts with verbatim quotes from the supplier statements).

Supplier churn handled while recording receipts: at 21:04–21:08 the owning
batch edited `lem-hh-dihedral-root-recurrence-and-root-sign` and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (cosmetic
notation only: HH-11 clause 3 now writes $W_Ja:=\{ua:u\in W_J\}$ and
$aW_J:=\{au:u\in W_J\}$, and clause 4 adds the letter-identification
parenthetical for the type-$A$ matrix; the dihedral statement clauses (3)(c),
(4), (7) are unchanged). The consumed clauses were re-read against the new
text, the three affected contract quotes were refreshed, every contract gate
re-passed, and all eight item receipts were re-recorded against the new
transitive byte-closure. Any further sibling edit invalidates the affected
receipts again; the engine's gate pass detects that and re-dispatches the
recording step, which is by design. Because every
Step 3b receipt binds the transitive byte-closure of its dependencies, any
later sibling repair to one of these suppliers invalidates the affected batch-10
receipt and requires re-recording by the repair owner's serial pass; this is
noted for the engine, not an open mathematical gap.

## Sources

The seven sources of `research/frontier-42-coxeter-32-batch-10.coverage.json`
are unchanged and all fetch-verified (7/7 resolved, 7/7 live). The distinctive
claims rest on the locators recorded in the batch notes: Björner–Brenti §2.4
and Exercise 15; Davis §4.3 (Lemma 4.3.1 with proof); Lusztig 9.15–9.16; Qi
Lemma 3.1 with its complete proof; BKPS §2.1–2.2. No new source was needed and
no source disposition changed. The one deferred Michel row and the two deferred
Qi rows retain live destinations in batches 7 and 9.

## Checks actually run (batch 10)

| check | command | actual result |
|---|---|---|
| precheck (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts <8 item paths>` | `7 checked, 0 failing`; the definition item is correctly `not-applicable` (no phase body) |
| rendering (explicit paths) | `node tools/rendercheck.mjs <8 items + 2 pages>` | `OK — 10 file(s)`, KaTeX parses every span, no wikilink in math |
| proof layout | `node tools/proof-layout.mjs <8 item paths>` (one batched call) | `8 items, 42 steps, 0 defects` |
| content policy (items) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-10.pages.json` | `8 scoped item(s), 0 error(s), 0 warning(s)` |
| proof contracts (strict) | `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-10.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 8/8 item(s) checked` (file created in this pass) |
| boundary audit | `node tools/boundary-audit.mjs <batch-10 contracts> --fail-on-contradicted --fail-on-template --json` | 64 boundary rows, 0 template clusters, 0 contradicted candidates |
| citation fidelity | `node tools/citation-fidelity.mjs <batch-10 contracts> --fail-on-missing-quote` | 57 citations; every recorded quote appears in its cited item; no widening candidates |
| finite smoke | `node tools/finite-smoke.mjs <batch-10 contracts>` | `0 error(s), 0 check(s)` — the pair's contracts select no finite-smoke obligation (honest; run-wide the same holds) |
| risk report | `node tools/risk-report.mjs <batch-10 contracts>` | `0 error(s), 8 item(s) routed` |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error names a batch-10 item; one sibling level error (see flags) |
| plan | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | 0 errors for this pair; one `redundant-prereq` warning on the A page (see flags); run-level FAIL from 17 sibling `undeclared-prereq` errors |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-10.pages.json` | `8 item(s), 0 normalized, 0 error(s)` |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-10.coverage.json --require-destination` | `0 error(s), 1 warning(s)` (`coverage-low-yield`, 12/43 — pre-existing and honest) |
| sources | `node tools/source-fetch-check.mjs --coverage …batch-10.coverage.json` | `7/7 fetch-verified`, `7/7 resolved` |
| URL liveness | `node tools/url-sweep.mjs --coverage …batch-10.coverage.json --out …-batch-10-url-liveness.json --recover --fail-on-dead` | `7/7 live; 0 failed` |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refresh OK, `orphaned_reviews: []`; all 38 declared edges with a batch-10 consumer now have a review row (one missing row was added in this pass) |
| prose | `node tools/prosecheck.mjs <8 items + 2 pages>` | `10 file(s), 0 error(s), 0 warning(s)` |
| pathways | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool pathcheck` | `2 pathway files checked, 0 errors, 0 warnings` |
| frontier dep/forward/ext/depsource | `frontier-item-gate … --tool depcheck/fwdcheck/extcheck/depsource` | no finding names a batch-10 item or page; the run-level failures are sibling items (list below) |
| decisions | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase final` | all eight batch-10 items closed; filter of the work list is empty for this pair |

## Flags outside the owned pair (for the serial reconciler / Step 4; no edit made)

1. Pre-splice plan mismatch for Step 4: `research/plan-spec.json` entries
   1736/1737 still carry empty item arrays while the batch-10 manifest declares
   5 A items and 3 B items. `node tools/splice-plan.mjs --run
   frontier-42-coxeter-32 --verify` lists both pages (`manifest 5 vs plan 0`,
   `manifest 3 vs plan 0`) together with the other in-flight batches; Step 4
   applies the licensed `splice-plan --run <run> --batch 10 --update`. No other
   plan/manifest disagreement exists for this pair (`requires`, category,
   companion and orders agree).
2. `validate-plan` run-level FAIL: 17 `undeclared-prereq` errors in sibling
   pairs — `generic-coxeter-hecke-algebras-and-the-standard-basis-examples`
   (1), `tits-cones-chambers-and-parabolic-stabilizers` (2),
   `finite-reflection-length-and-orthogonal-moved-spaces` (2) and its examples
   page (4), `coxeter-descents-poincare-polynomials-and-growth` (4) and its
   examples page (4). None involves this pair; the A page's only plan note is a
   `redundant-prereq` warning (it requires
   `coxeter-presentations-exchange-and-reduced-word-theorems` directly and also
   reaches it through `canonical-roots-signs-and-faithful-reflections`), which
   is a `requires`-transitive-reduction hygiene note for the serial pass.
3. `item-dependency-levels`: `ex-cg-reducible-semidefinite-forms-are-factorwise`
   has `dependency_level 15` but the tool computes 16 (another pair's item).
4. `depcheck`/`fwdcheck`/`extcheck` frontier findings in sibling items only,
   e.g. unresolved links and unplanned targets in
   `thm-cg-large-metric-flag-short-loop-radial-contradiction`
   (`[[thm-cg-compact-local-cat-one-short-circle-criterion]]`,
   `[[lem-cg-bowditch-quantitative-short-loop-control]]`), a misspelled link
   `[[thm-hh-coexeter-exchange-deletion-and-faithfulness]]` and other
   unresolved links in `ex-cg-infinite-dihedral-growth`, a `b-leaf-content`
   dependency of `ex-cg-infinite-dihedral-growth` on the B-page item
   `ex-formal-geometric-series`, and of
   `lem-cg-exceptional-parabolic-orbit-length-certificates` on the B-page item
   `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`.
   One of these concerns a consumer of this page: `depcheck` reports
   `items/ex-cg-a2-descent-inclusion-exclusion-and-reciprocity.md` cites
   `def-cg-parabolic-quotient-and-two-sided-minima` in Statement/Facts without
   declaring it in `deps` — the owning pair should add the declaration (or drop
   the citation); this item's owner was not edited here.
5. Dependency-ledger rows owed by consumer batches: three declared edges with
   supplier `def-cg-parabolic-quotient-and-two-sided-minima` still lack review
   rows, all owned by their consumer batches: batch 23
   `lem-cg-weak-order-is-a-graded-partial-order`, batch 26
   `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` and batch 26
   `thm-cg-davis-complex-cell-incidence-and-stabilizers`. Per the ledger brief
   only those consumers' owners may write their inputs; this pair's own 38
   declared consumer edges are all reviewed.
6. Rechecked pre-splice finding on a sibling pair: the 3a observation on
   `lem-cg-spherical-coset-inclusion-and-intersection` (batches 26,
   spherical-parabolic-cosets pair) is resolved in the current text — clause
   (3) now uses the correct criterion $w^{-1}w'\in W_TW_{T'}$ and the false
   "if and only if" sentence is gone. No action owed to this pair.
7. Batch bookkeeping completed here: created
   `research/frontier-42-coxeter-32-batch-10.proof-contracts.json` (required
   pairAuthor artifact), added the one missing review row to the batch-10
   cross-batch input, and corrected the stale disposition tally in the batch-10
   notes. `research/frontier-42-coxeter-32-batch-10.pages.json` and the coverage
   file are unchanged (their content already matched the authored items).
8. Scope-decline decisions: `research/frontier-42-coxeter-32-alpha-f-scope-decisions.json`
   (group `f` = batches 10/12/16) now carries `stands` decisions with concrete
   evidence for all 15 `parabolic-subgroups-and-double-coset-geometry` declines
   from `…-batch-10.coverage.json` (each reviewed against the current items and
   the pair's scope; e.g. Prop. 9.15(e) and Prop. 2.7(c): the pair asserts only
   minima, not maximal elements or Bruhat intervals; Lemma 5.11 and Thm. 2.3(a)-(b):
   deferred to their live destinations in batches 7 and 9). `node
   tools/scope-decisions.mjs check --run frontier-42-coxeter-32 --group f`
   reports no error naming this pair; the 19 remaining pending rows in that
   shared group file are batches 12 and 16 declines and belong to those pairs'
   owners.

## Open obligations

None for this pair. All eight items are authored, contracted, checked and
carry current `accept`/`repaired` decisions; both pages list exactly the
manifest items; the batch proof contract exists and passes strict validation.
The only open items are the outside flags above, which by the ledger and
ownership rules belong to their consumer/owner batches, not to this pair.
