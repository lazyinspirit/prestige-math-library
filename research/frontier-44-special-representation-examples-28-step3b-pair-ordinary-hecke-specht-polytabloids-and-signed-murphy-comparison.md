# Step 3b — pair `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` (batch 50)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-1e0edf25627df89c`.
Owned A page: `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
(order 1568.1). Owned B page: `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples`
(order 1568.2), category `special-topics-in-representation-theory`. Batch 50
contains only this pair, so the shared batch files hold no sibling rows.

Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, the owner authoring direction
(`...-owner-authoring-direction.md`, section "Owner necessary Specht comparison
prerequisite — 2026-10-10"), the design `research/plan-symr7p-specht-murphy-prerequisite.md`
and `.../missing-prerequisite-design/proposed-pair.pages.json`, the current
root-integrated batch-50 manifest (byte-identical content to
`native50-round1-proposed.pages.json`), batch-50 notes, coverage and
cross-batch input, the Step 3a review receipt (decision `sufficient`), and the
three owner-native50 proof carriers under
`...-owner-native50-independent-supplier-construction/`
(`integral-constructor/constructive-proof.md`,
`integral-constructor/standalone-murphy-proof.md`,
`pairing-constructor/bridge-proof.md`).

## Entry checkpoint — owned item IDs (authoring order)

- level 0: `def-dj-bridge-row-column-permutation-modules-and-polytabloids`
- level 1: `lem-dj-bridge-row-permutation-module-standard-action`
- level 2: `lem-dj-bridge-permutation-form-invariance-and-restriction`
- level 2: `lem-dj-bridge-sign-automorphism-and-star-dual`
- level 3: `lem-dj-bridge-parabolic-double-coset-annihilation`
- level 4: `lem-dj-bridge-murphy-cellular-basis-and-cell-form`
- level 5: `lem-dj-bridge-integral-murphy-and-polytabloid-straightening`
- level 5: `lem-dj-bridge-theta-transport-of-the-cellular-structure`
- level 6: `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`
- level 7: `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`
- level 8: `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`
- level 9 (B): `cex-dj-bridge-untwisted-conjugation-changes-the-module`
- level 9 (B): `ex-dj-bridge-row-and-column-shapes-at-rank-three`
- level 9 (B): `ex-dj-bridge-singular-two-tableau-shape`

Open obligations at entry: author all 14 item files and both page files
(no item/page file for this pair exists yet); keep the manifest and coverage
consistent with what is actually authored; write
`research/frontier-44-special-representation-examples-28-batch-50.proof-contracts.json`
(strict item contracts); recompute and verify dependency levels after any
dependency change; refresh the batch-50 cross-batch dependency input; record
one `step3-decisions.mjs record-item` decision per item (original scaffold IDs
require ordinary decisions; the five added local suppliers are certified by the
engine and still get ordinary records per dispatch); report completed IDs,
checks run, published concerns and open obligations.

Carried local obligations from the owner construction (to be discharged item by
item, not assumed): the two closed historical sources (Murphy 1995 Theorem 5.2,
Dipper–James 1986 Theorem 5.6) were never read; every claim they are cited for
must be proved by the local constructions in the three carriers above, or the
item stays escalated with the exact gap. The 12 accessible source stamps in the
coverage are unchanged; the two closed sources carry an owner-proposed
`source_resolution: dropped` (proof prerequisite only) whose justification is
the complete independent local proof actually written into the item files.

Checks and results are appended below as each item is completed.

## Item log

1. `def-dj-bridge-row-column-permutation-modules-and-polytabloids` — authored
   (definition + remarks; star anti-involution justified by symmetric
   presentation; `justified_by` the row-module lemma; added published supplier
   `def-weyl-group-and-length-for-finite-gl-n` to deps for the length symbol).
   rendercheck clean; precheck n/a (definition).
2. `lem-dj-bridge-row-permutation-module-standard-action` — authored; proof
   follows Mathas Prop. 3.3/Cor. 3.4 (row-order preservation, additivity,
   transversal, three-case action), independently re-derived in this library's
   right-action convention. precheck PASS (direct), proof-layout 11 steps 0
   defects, rendercheck clean.
3. `lem-dj-bridge-permutation-form-invariance-and-restriction` — authored; the
   contravariance is proved by the T_i-orbit block computation on the
   distinguished basis. precheck PASS, proof-layout 6 steps 0 defects,
   rendercheck clean. Dropped the unread James SLN 682 from this item's source
   list (nothing is taken from it; the two read sources supply the statement).
4. `lem-dj-bridge-sign-automorphism-and-star-dual` — authored; theta well
   defined on generators, involutive; the eigenvector classification is taken
   inside the parabolic subalgebra H_lambda (theta(x_lambda) lies there), and
   the unit q^N is obtained from the longest-word coefficient. precheck PASS,
   proof-layout 7 steps 0 defects, rendercheck clean. Sources: Mathas, KMR
   (3.14 analog only), Kleshchev survey; the stale Hoefsmit citation was not
   used, as the proof is self-contained.
5. `lem-dj-bridge-parabolic-double-coset-annihilation` — authored; the proof
   reduces x_alpha H y_nu to minimal (S_alpha,S_nu)-double-coset
   representatives via the intersection matrix a_ij(d), shows that the
   hypothesis forces a repeated intersection block, and kills each such term
   by the zero product (1+T_i)(1-q^{-1}T_i)=0 after the length-additive
   factorizations of x_alpha and y_nu. precheck PASS, proof-layout 9 steps
   0 defects, rendercheck clean.
6. `lem-dj-bridge-murphy-cellular-basis-and-cell-form` — authored after audit
   repair of the second draft: the trace step now proves tau(T_wT_i)=tau(T_iT_w)
   =q delta_{w,s_i} and obtains tau(T_{u^{-1}}T_v)=delta_{u,v}q^{ell(u)} from
   the unimodular diagonal form B_0 via the 2-element right-s_i orbits (no
   unproved subword coefficient); the Garnir belt step states the alpha blocks
   (j-1, rho_i+1, rho_{i+1}-j) and b-a=rho_i correctly; the Garnir tableau step
   says "fails to be standard" and uses the belt positions (first j of row
   i+1), with the dominance comparison proved by the row-i count function;
   step 4.1 isolates d!=d(g) and h in H x_nu H; the mixed-pairing step reads
   eta <= nu in dominance (the previous >= was a typo against the cited
   annihilation and the triangular shape of Q); and the cell law modulo
   I^{>rho} is now derived from the exact row-module expansion plus
   J^{>lex} cap I^{>=rho} = span{mu : mu >= rho, mu >lex rho} = I^{>rho}
   (the previous "same-shape terms unchanged" deduction was in the wrong
   direction). precheck PASS, proof-layout 15 steps 0 defects, rendercheck
   clean; the step labels adopt the checker's canonical layer numbering.
   Independent polynomial checks (this session): tau(T_wT_i)=tau(T_iT_w)=q
   delta, trace symmetry and tau(T_{u^{-1}}T_v)=delta_{u,v}q^{ell(u)} for all
   w,u,v in S_5; the exact Garnir identity (G), its unique nonstandard
   tableau, the strict dominance of all other belt tableaux and b-a=rho_i for
   all shapes n<=5 and the spot shapes (3,2,1),(4,2),(2,2,2),(5,1) at n=6;
   the support lemma and its intermediate length-additivity for all reduced
   words of length<=4 over all compositions of n<=4; theta(x_lambda)=q^N
   y_lambda for all shapes n<=4; the Murphy family has rank n! for n=4 and the
   mixed matrix Q has full rank n! for n=3,4 at q=2. Manifest row deps
   updated to the item's actual deps (def-generic-type-a-hecke-algebra,
   thm-standard-basis-of-the-generic-type-a-hecke-algebra,
   def-dominance-order-on-partitions added; level stays 4; batch-50
   item-dependency-levels check clean for all 14 owned IDs).

## Attempt 2 entry checkpoint (label `...-2b39ecedbd233354`)

Entry state on disk (rechecked against files, not against attempt-1 claims):
items 1-6 of the authoring order (the definition and the five lemmas through
`lem-dj-bridge-murphy-cellular-basis-and-cell-form`) exist as draft files and
pass `precheck` (5 items; definition n/a) and `proof-layout` (6 items, 48
steps, 0 defects). The remaining 8 item files, both library page files,
`batch-50.proof-contracts.json`, the item decisions and the coverage/manifest
refreshes do not exist yet. Open obligations: complete the authoring order at
levels 5-9 from the current manifest statements and the three owner-native50
construction carriers; keep the previous attempt's log above as history;
record one `step3-decisions.mjs record-item` decision per item; write the two
pages; run the batch gates.


## Attempt 2 completion log — authoring, contracts, checks, decisions

Entry state rechecked against disk: items 1–6 of the authoring order existed as
drafts; the remaining 8 item files, both page files and the batch-50 proof
contracts were absent. All are now written; every item was audited, authored,
checked and receipted in ascending dependency level. Batch 50 has no sibling
pair, and no sibling row was touched.

### Item record (dependency level — decision — contract)

1. `def-dj-bridge-row-column-permutation-modules-and-polytabloids` — L0 —
   accept — definition entry (no steps); 8 boundary dispositions.
2. `lem-dj-bridge-row-permutation-module-standard-action` — L1 — accept —
   11 steps, 6 citation contracts (Mathas, Ryom-Hansen locators unchanged).
3. `lem-dj-bridge-permutation-form-invariance-and-restriction` — L2 — accept —
   6 steps.
4. `lem-dj-bridge-sign-automorphism-and-star-dual` — L2 — accept — 7 steps.
5. `lem-dj-bridge-parabolic-double-coset-annihilation` — L3 — accept —
   9 steps.
6. `lem-dj-bridge-murphy-cellular-basis-and-cell-form` — L4 — **repaired**
   (`proof`) — 15 steps; trace step, Garnir belt and cell-law modulo
   `I^{>rho}` re-derived; independent polynomial checks recorded in the
   attempt-1 log.
7. `lem-dj-bridge-integral-murphy-and-polytabloid-straightening` — L5 —
   accept — 10 steps; clause 4 is the exact Garnir relation with the finite
   coset identity of step 4.1.
8. `lem-dj-bridge-theta-transport-of-the-cellular-structure` — L5 — accept —
   6 steps; the item proves the corrected transport statement (image ideals,
   transported basis/form) with the n=2 subspace warning in step 2.1.
9. `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual` — L6 — accept —
   4 steps; determinant of the pairing matrix a unit.
10. `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` — L7 —
    accept — 4 steps; unit `u_lambda = q^{N-L}` explicit, no unnamed scalar;
    step 1.2 (generic semisimplicity via the trace form and Jacobson
    nilpotence) remains the highest-risk step for Steps 5–7.
11. `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` —
    L8 — accept — 4 steps; conditional Schur dictionary, zero case included.
12. `cex-dj-bridge-untwisted-conjugation-changes-the-module` — L9 — accept —
    3 steps; q=1, n=3 witness.
13. `ex-dj-bridge-row-and-column-shapes-at-rank-three` — L9 — accept —
    4 steps; both units and the q=1 specialization.
14. `ex-dj-bridge-singular-two-tableau-shape` — L9 — accept — 4 steps;
    [2]_q = 0 versus nonsingular form at q = −1.

Both page files are authored:
`library/special-topics-in-representation-theory/ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.md`
(A, order 1568.1) and `...-examples.md` (B, order 1568.2).

### Proof contracts

`research/frontier-44-special-representation-examples-28-batch-50.proof-contracts.json`
(version 1): scope = the 14 owned IDs in manifest order; every proof-bearing
item has an entry (`citations`, one `derivations` entry per numbered step with
its actual inputs, `routine_steps: []`, eight boundary dispositions). The
definition entry carries empty citations/derivations and the eight boundary
dispositions. Citations and derivations were regenerated from the final item
text with `tools/regen-contract-entries.mjs` (quotes are the cited item's own
statement section, uses computed from the step tokens); all 112 boundary
dispositions (14 × 8) were written by hand, each `checked` case naming the
steps that dispose of it (empty/zero/one/degenerate/endpoint examples include
n=0 and the empty partition in step 3.1/6.1/10.1 conventions, q=1 and q=−1
singular parameters, rank-one extreme shapes, and the q=1/char-2 reductions in
the examples) and each `not_applicable` case a specific reason (for example the
one-way implication of the annihilation lemma and the fixed-rank-one
counterexample). Strict checker: 0 errors, 0 warnings, 14/14 items. Batch-scope
coverage of supplied arguments: 13/13 proof-bearing items covered.

### Dependency reconciliation

Six items' Facts cited published suppliers that were absent from their declared
`deps`; the item frontmatter and the manifest rows were extended together:

- `lem-...-row-permutation-module-standard-action`: + `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
  `def-weyl-group-and-length-for-finite-gl-n`,
  `def-young-tableau-standard-tableau-and-shape`;
- `lem-...-permutation-form-invariance-and-restriction`: + `def-generic-type-a-hecke-algebra`;
- `lem-...-sign-automorphism-and-star-dual`: + `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`;
- `lem-...-parabolic-double-coset-annihilation`: + `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`;
- `thm-...-murphy-cell-is-the-same-shape-specht-dual`: + `lem-...-row-permutation-module-standard-action`;
- `thm-...-ordinary-specht-is-the-signed-conjugate-murphy-cell`: + `def-generic-type-a-hecke-algebra`.

`manifest-deps` passes over the batch (14 items, 0 errors). Levels after the
change: 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9 (unchanged; only published
out-of-run suppliers were added). `item-dependency-levels check --run` reports
no owned-ID error (the run's five remaining errors are pre-existing,
unrelated perverse-sheaf items, listed under published concerns). The batch has
no cross-batch item edge; `frontier-dependency-ledger refresh` was re-run and
the owned cross-batch input remains `[]`.

### Checks actually run on the final state

| check | result |
| --- | --- |
| `precheck` (13 proof items, explicit paths) | 13/13 PASS |
| `proof-layout` (all 14 items, one batched run) | 87 steps, 0 defects |
| `rendercheck` (14 items + 2 pages) | OK (no multiline display, all math parses) |
| `fix-multiline-display` | joined one spanned display in `ex-...-singular-two-tableau-shape`; rendercheck re-run clean; proof-layout is the final formatter run |
| `content-policy` (batch manifest + item files) | 14 items, 0 errors, 0 warnings |
| `depcheck --items-file` | OK (selected checks over 875 items / 220 pages) |
| `fwdcheck --items-file` | OK |
| `extcheck --items-file` | 0 recorded-not-proved, 0 resting on them |
| `item-dependency-levels check --run` | no owned-ID error |
| `proof-contract --strict` | 14/14 items, 0 errors, 0 warnings |
| batch-scope proof-contract coverage | 13/13 supplied arguments covered |
| `coverage-checklist --require-destination` | 0 errors, 1 pre-existing low-yield warning |
| `source-fetch-check` (check mode) | 12/14 fetch-verified, 14/14 resolved (2 documented drops), exit 0 |
| `validate-plan research/plan-spec.json --run ...` | exit 1 on two errors **outside this pair** (exact IDs below); owned pages carry only pre-existing redundant-prereq warnings |
| `frontier-dependency-ledger refresh` | refreshed, deduplicated |
| `step3-decisions record-item` | 14 receipts (13 `accept`, 1 `repaired` + `proof`); phase-final check lists no owned item open |

### Handoff

Completed IDs (all 14): `def-dj-bridge-row-column-permutation-modules-and-polytabloids`,
`lem-dj-bridge-row-permutation-module-standard-action`,
`lem-dj-bridge-permutation-form-invariance-and-restriction`,
`lem-dj-bridge-sign-automorphism-and-star-dual`,
`lem-dj-bridge-parabolic-double-coset-annihilation`,
`lem-dj-bridge-murphy-cellular-basis-and-cell-form`,
`lem-dj-bridge-integral-murphy-and-polytabloid-straightening`,
`lem-dj-bridge-theta-transport-of-the-cellular-structure`,
`thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`,
`cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`,
`cex-dj-bridge-untwisted-conjugation-changes-the-module`,
`ex-dj-bridge-row-and-column-shapes-at-rank-three`,
`ex-dj-bridge-singular-two-tableau-shape`.

Added suppliers within this pair (owner-authorized local intermediates, all
registered in the manifest, coverage, contracts and both pages; each is absent
from the nine-item design `missing-prerequisite-design/proposed-pair.pages.json`):
`lem-dj-bridge-row-permutation-module-standard-action`,
`lem-dj-bridge-permutation-form-invariance-and-restriction`,
`lem-dj-bridge-parabolic-double-coset-annihilation`,
`lem-dj-bridge-murphy-cellular-basis-and-cell-form` and
`lem-dj-bridge-theta-transport-of-the-cellular-structure`; the two pages present
all fourteen items in dependency order. The pair
itself now supplies the source-20 consumer rebinding and the two escalated
consumers below; nothing here consumes a Recorded result or an examples-page
dependency.

Published concerns (not this pair; report only):

- `validate-plan` exit 1: page `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
  (batch 44) has items `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`,
  `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition`,
  `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift`
  depending on `def-complex-projective-space-and-holomorphic-charts` (home page
  `divisors-riemann-roch-and-duality`); and page
  `ariki-categorification-and-graded-decomposition-numbers` (batch 25) has
  `def-tableau-domination-order-garnir-tableaux-and-bricks` depending on
  `lem-bruhat-order-basic-properties-for-permutations` (home page
  `kazhdan-lusztig-bases-polynomials-and-cells`), outside the closure of the
  declared `requires`. Confirmed gate failures; remedy is the owner's choice of
  adding the page to `requires` or dropping/replacing the dependency.
- `item-dependency-levels check --run`: five pre-existing mismatches on
  perverse-sheaf items (`lem-perverse-closed-support-splitting-...`,
  `lem-projective-hodge-perverse-package-...`,
  `thm-relative-hard-lefschetz-...`,
  `thm-projective-pushforward-of-smooth-constant-sheaves-...`,
  `ex-projective-perverse-decomposition-...`); none is owned here.
- Whole-run `proof-contract-coverage` cannot run while 18 item files are missing
  from other batches (17 in batch 24, 1 in batch 48); batch-50 scope is fully
  covered as reported above.
- Consumers of this pair still carrying Step-3 escalations for the previously
  unfinished suppliers: `def-type-a-hecke-specht-module-and-cell-form`
  (escalated pending `thm-dj-bridge-murphy-cell-...`, `thm-dj-bridge-ordinary-specht-...`
  and `cor-dj-bridge-specialization-...`) and
  `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
  (flagged consumer of `thm-dj-bridge-ordinary-specht-...` and
  `cor-dj-bridge-specialization-...`, used in its steps 1.1 and 2.1). All three
  suppliers are now authored; the consumer owners must reconcile the actual
  proof uses before closing those records.
- Manifest item statements remain the scaffold record; the authored items
  restate the claims in fuller form. No gate compares them, but the drift is
  reported for Step 4 plan/prose reconciliation; the owned page's
  `redundant-prereq` warnings from `validate-plan` are likewise Step-4 material.

Open obligations:

- The two closed historical sources stay unread and owner-held: Murphy 1995
  Theorem 5.2 and Dipper–James 1986 Theorem 5.6 carry the owner-proposed
  `source_resolution: dropped`; every claim they were cited for is proved
  locally, and the item files state that nothing rests on them. Owner
  resolution of those coverage rows is still owed.
- Independent audit of every owned item is owed in Steps 5–7. Highest-risk
  target: step 1.2 of `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`
  (generic semisimplicity by the regular trace form plus Jacobson nilpotence,
  and the form-proportionality argument).
- The Step-3 decisions recorded here are alpha self-bookkeeping, not
  independent review; the receipts carry the final item hashes.
