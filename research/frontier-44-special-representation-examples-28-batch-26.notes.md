# Batch 26 — `kronecker-coefficients-and-internal-products` (SYMR-13)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair.
Owner authoring direction (`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`)
read first; it preserves every planned claim of this pair and forbids scope growth.
Design: `research/plan-symmetric-group-representations-track.md` L48 (SYMR-13 row) with the
proposed inventory in `research/symmetric-group-planning/proposed-inventory.md` §SYMR-13.
Canonical plan: `research/plan-spec.json` orders 1582/1583, category
`special-topics-in-representation-theory`, `requires` unchanged (three published pages).

Scaffold written: 12 A items + 3 B items = 15, all recorded `ready`, all in-run dependency levels
computed from actual in-run `deps` (maximum level 5). No item was escalated; no page split was
needed; both pages are far below the 100-item cap. No published content, shared plan, engine state
or verdict was edited. Only this batch's manifest, coverage, notes, cross-batch dependency input and
Step-1 readiness records were written.

## Design / plan comparison (conflicts recorded)

1. **No plan-vs-design conflict.** `plan-spec.json` agrees with the batch task on both page IDs,
   orders, titles, category, companion and `requires`; the drift review returned `no-drift` for this
   pair. The proposed inventory's 10 A items and 3 B items are preserved, and two local suppliers
   were added to close the stability route (below). The page's scope ("internal tensor products,
   exact character formulas and open boundary") is unchanged.
2. **Padding convention.** The design's paraphrase of Pak–Panova Theorem 4.1 says
   "simultaneous addition of `(t^k)` to all three partitions". The source (Bounds, Theorem 1.1,
   and the printed proof of Theorem 4.1) actually adds `(t^k)` to `lambda` and `mu` and the
   single-row partition `(tk)` of size `t k` to `nu`; only then the reduction parameter
   `s' = (n+tk) - gamma_1 = n - nu_1` equals `s`, which is what the printed proof uses. The
   scaffold states the source's exact operation and records the paraphrase here; no claim was
   weakened (for `k = 1` the two readings coincide, and `(t) = (t*1)` is the usual first-row
   padding, so the design's `k=1` and counterexample claims are unchanged).
3. **Design dependency lists were corrected where inadequate or unused.**
   - `thm-row-gap-reduction-and-conditional-k-stability` deps now include the new local
     `lem-kronecker-reduction-lemma` (the engine of the printed proof) and the S3-symmetry
     corollary used for relabeling; the design's two deps alone were inadequate.
   - `prop-power-sums-diagonalize-the-internal-product`: the design's dep
     `cor-power-sums-are-orthogonal-for-the-hall-inner-product` was dropped — the diagonalization
     uses only `ch(1_rho) = p_rho/z_rho` and pointwise multiplication of class functions.
   - `lem-complex-specht-modules-are-self-dual`: the design's dep
     `thm-complex-specht-modules-are-irreducible` was dropped (the nondegenerate invariant form
     already gives the isomorphism to the dual); it is not used.
4. **Two new local suppliers (added for mathematical closure, same A page).**
   - `lem-littlewood-internal-product-outer-compatibility` — Littlewood's identity
     `s_lambda * (s_tau s_theta) = sum c^lambda_{alpha,beta} (s_alpha*s_tau)(s_beta*s_theta)`,
     used by the reduction lemma. Complete local route: outer LR rule + Frobenius reciprocity for
     the restriction multiplicities, Frobenius' induced-character formula, and the characteristic
     map; all suppliers are published.
   - `lem-kronecker-reduction-lemma` — Pak–Panova/PP3 Lemma 5.1 with its full statement and the
     printed proof route (Littlewood's identity, horizontal Pieri expansion, Jacobi–Trudi
     expansion of `s_nu`, the explicit reduction map `phi` and its `r <= 2 s l^2` bound).
     Suppliers: `thm-littlewood-richardson-schur-product-expansion` (choice-free at the
     symmetric-function level), `def-littlewood-richardson-tableau-and-coefficient`,
     `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`,
     `thm-schur-functions-form-an-orthonormal-integral-basis` — all published.
   The design's single stability item is preserved; no claim below its scope was added.
5. **Monotonicity is not claimed**, exactly as the design's own wording states ("without it only
   eventual k-stability is claimed"). Pak–Panova obtain monotonicity of `G_k` from Manivel's
   inequality, whose published proof is the geometric no-zero-divisor argument for the covariant
   algebra (`Manivel, On the asymptotics of Kronecker coefficients, J. Alg. Comb. 42 (2015)`,
   and the follow-up note B75d). That geometric input is outside this pair, so item (ii) states
   the eventual-constancy consequence only, proved here through Theorem 4.1 and the reduction
   lemma; no monotonicity, boundedness-for-all-`t`, or limit-formula claim is made.

## Source work

Read in full or in the exact cited ranges (text extraction inspected, not snippets):

- Pak–Panova, *On the complexity of computing Kronecker coefficients*, arXiv:1404.0653v3:
  §§2.2–2.3, §2.4, §5.1 (complete proof of Lemma 5.1, equations (3), (6), (7)), §8.9
  (Corollary 8.3). The reduction lemma's proof and the `(t)` vs `(t^k)` bookkeeping were checked
  line by line against the Bounds paper.
- Pak–Panova, *Bounds on the Kronecker coefficients*, arXiv:1406.2988v2: §1 (Theorems 1.1–1.3),
  §2.1–2.3 (conventions, symmetry (2.3), Theorem 2.2 Manivel), §4.1–4.2 (Theorem 4.1, Corollary
  4.2, Reduction Lemma 4.3, Example 4.4, printed proofs), §7.2–7.3. The printed notation `(t^k)`
  (superscript `k`, k parts of `t`) versus `(tk)` (single part of size `t k`) was verified glyph
  by glyph in the PDF, since the notation carries the theorem's meaning.
- Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed.: Chapter I §7, (7.10)–(7.13)
  and Examples 1–3 with Exercises 20–23 — `s_lambda*s_mu = sum gamma s_nu`,
  `p_rho*p_sigma = delta z_rho p_rho`, `f*g = ch(uv)`. Confirmed against the cached full text.
- Church–Ellenberg–Farb (arXiv:1204.4533) and Briand–Orellana–Rosas (arXiv:0907.4652):
  padding threshold and reduced-coefficient conventions for the two padding items (the stability
  and threshold theorems themselves are left to the planned SYMR-15 pair).
- Chan (lecture notes), Webb (textbook) and Craven (lecture notes) supply the form/self-duality,
  character-orthogonality, induction and LR interfaces; their locators are those recorded and
  audited by the published items on `specht-modules-and-the-irreducibles-of-the-symmetric-group`
  and by `thm-character-inner-product-computes-intertwiner-dimension`. Full-text fetchability of
  every coverage URL was checked with `source-fetch-check --stamp` (see checks below).
- Manivel, *On the asymptotics of Kronecker coefficients* (arXiv:1411.3498), §2.2: read only to
  confirm that the monotonicity input is the geometric no-zero-divisor statement quoted above;
  it is deliberately not used as a supplier (see conflict 5).

Every harvested heading received a disposition in `...-batch-26.coverage.json`. No source drop
was needed and no source-resolution record was created.

## Cross-batch dependencies

My consumers have no in-run supplier: every item dependency in batch 26 resolves to published
items, so this batch's ledger input is `[]` (refreshed into the unified ledger). In the other
direction, the designs make batch 26 a supplier for two sibling batches, which own those ledger
rows: `def-first-row-padding-of-a-partition` is consumed by
`character-polynomials-fi-modules-and-representation-stability` (batch 27), and
`def-padded-kronecker-coefficient-sequence` plus
`def-kronecker-coefficient-and-internal-tensor-product` are consumed by
`murnaghan-stability-via-fi-modules` (batch 28). These same-page-batch-26 items keep their
inventory IDs and statements; if a sibling scaffold renames its consumer, the reconciler should
treat the union-ledger orphan row as that sibling's bookkeeping, not as a change here.

## Published defects and residual risks

- No published defect was found in the three prerequisite pages. All supplier statements,
  hypotheses and directions used here were read on disk and match the uses.
- Source caveat (not a library defect): the published HTML/PDF of Pak–Panova *Bounds* prints
  `nu + (tk)` in the definition of `G_k(t)` while `lambda,mu` receive `(t^k)`; the scaffold
  follows the printed proof (which is consistent only with `(tk)` = one-row partition of size
  `t k`) and records the design's paraphrase in conflict 1 above.
- Residual authoring risk: `lem-kronecker-reduction-lemma` is a long technical argument
  (part (ii)). Its printed proof was read in full and every ingredient has a published local
  supplier, but the Step-3 author must reproduce the reduction-map combinatorics
  (`phi` preserves the connected components of the skew shapes and hence the LR coefficients)
  exactly, including the `r <= 2 s l^2` bound.
- The Axiom of Choice is not intended anywhere in this batch; all cited suppliers either state
  choice-free proofs or do not mention choice. The authoring stage must re-verify each supplier's
  AC status (in particular any GL/Schur-module route, which the library states with AC in
  `cor-horizontal-pieri-rule`). This batch deliberately avoids `cor-horizontal-pieri-rule` and
  derives the horizontal Pieri expansion from the choice-free LR product expansion instead.

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — the only errors are `empty scaffold inventory` for sibling batches not yet scaffolded at this
  writing; zero errors for batch 26 (no label mismatch, no cycle, no malformed deps).
- `node tools/manifest-deps.mjs research/...-batch-*.pages.json` (whole run) —
  `manifest-deps: 158 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json` (whole run) —
  `content-policy: 158 scoped item(s), 0 error(s), 0 warning(s)`; single-batch run also clean.
- `node tools/coverage-checklist.mjs research/...-batch-26.coverage.json --require-destination` —
  `coverage-checklist: 2 page(s), 60 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-26.coverage.json --stamp` —
  `12/12 source(s) fetch-verified (12 newly stamped)`; re-run in check mode:
  `12/12 source(s) fetch-verified`, `12/12 source(s) resolved`.
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` — refreshed; batch 26 is a
  reviewed batch (`[]` input). The two page edges from batches 27/28 to this A page are their
  consumer rows; four orphaned rows at this writing belong to batches 2/4 and do not involve
  batch 26.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` — passes (exit 0):
  "no item-level cycles, forward references, B-page dependencies, or unresolved ids among the
  12 page(s) with item lists". Advisory only, inherited from `plan-spec.json` (not introduced
  here): the three declared `requires` of this A page are mutually redundant — the page already
  reaches `frobenius-characteristic-...` and `specht-modules-...` through
  `outer-products-skew-specht-modules-and-littlewood-richardson`. The plan, the batch task and
  the plan-spec agree on the full three-element `requires`, so they were preserved unchanged;
  recorded for the Step-4 reconciler.
- `node tools/frontier-item-gate.mjs --run ... --tool step1-readiness` — whole-run check:
  158 items, 126 ready, not closed because sibling batches still lack inventories; **zero open
  rows for batch 26**, i.e. all 15 readiness records are current.
- `extcheck`/`fwdcheck` in item mode FAIL at this boundary with `[focus-item-unknown]` for every
  scaffold ID of the run, including the 15 registered here. This is the documented Step-1 state
  ("Item validators resolve manifest IDs through authored item files. At Step 1 those files are
  deliberately absent"); the scaffold gate excludes them and the authoring stage re-runs the
  external-reference check once the item files exist. No external-reference or
  retirement-policy finding is hidden in this batch; the manifest declares no `forward_refs`,
  `proved_here`, `external_refs` or `external_dependency` fields.

## Step-1 decisions

All 15 items were recorded `ready` one at a time in prerequisite order, with the examined
dependency IDs and the evidence above; the record files are
`research/frontier-44-special-representation-examples-28-step1-<item>.json`.
Owner/operator reconciliation and the engine's Step-1 gate follow; a readiness record is not
independent mathematical approval (Step 3 provides that review).

## Owner Step-1 correction and review

The native scaffold completion remains historical evidence. Owner review found and repaired four exact local issues before readiness refresh: the internal product has degreewise units h_n=s_(n), not the ordinary degree-zero unit as a global unit; the Hermitian-to-bilinear identity is b(x,y)=H(conj(x),y); the reduction map now uses PP3's sentinel l+1 and block-rank ind_I (missing in the older Bounds formula); and row-padding of nu means padding its tail, not padding nu itself. The corrected map comes from the complete PP3 §5.1 proof, actually read on disk at /tmp/pp3/pp3.txt, backed by /tmp/pp3/pp3.pdf, SHA-256 6357e3384ef015402114ea317e5075d7874e15edaaa62fbe8485fd743ff83d0c. PP3 itself overstates a global inverse-map claim; the scaffold now uses only the near-rho nonzero LR terms, where translations preserve the component shapes in both directions. The size estimate is included explicitly.

Direct consumers of the internal-product Definition are power-sum diagonalization, Littlewood compatibility, the reduction lemma and the open-problem remark, all in batch26. None uses a global unit; reduction uses only s_alpha*s_(n-s)=s_alpha, precisely the degreewise unit. Their Statements do not need changes. The reduction lemma's sole current direct consumer is the row-gap theorem; its strategy now explicitly compares two triple-dependent corrected maps using the shared I and ind_I. The row-gap theorem's unchanged stability conclusion survives; its padding parenthesis was corrected. Its actual direct consumers use eventual constancy or the separation hypothesis, not that parenthesis. No active sibling content was edited.

The source retrieval stamps and native successful dispatch receipt are unchanged. Current Step-1 readiness remains pending until all supplier and sibling writers drain and the supervisor authorizes a stable pass. A fresh hash will certify scaffold readiness only, not a completed authored proof or independent mathematical audit.

## Owner Step-3 focused correction (2026-10-10)

The earlier scaffold and author evidence above remains historical. The printed block map fails even when its outputs are partitions: the focused reviewer verified the witness (14,10,2),(13,8,5),(23,3), with coefficients1 and0 before and after that map. The corrected authored lemma uses a2s row shear with explicit inverse on all small-skew indices, preserving the full unconditional bounded reduction and size bound. The sharp s-gap theorem now has its own single-cut LR argument and an ordering-free eventual-constancy threshold; no monotonicity was added. The example's finite values remain unchanged. Proposals, source retrieval and reviewer evidence are in the run-local owner-step3-kronecker-boundary-round1 directory. Canonical scoped precheck, renderer and proof-layout passed; these are local checks, not an independent audit. Same-reviewer actual consumer binding and normal owner bookkeeping remain required before gate closure.
