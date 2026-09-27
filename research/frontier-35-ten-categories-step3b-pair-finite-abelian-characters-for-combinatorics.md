# Step 3b dispatch report — pair `finite-abelian-characters-for-combinatorics`

Run `frontier-35-ten-categories`; batch 1 (shared with the sibling pair
441/442 `erdos-hajnal-for-the-e-graph-and-bird`, owned by another group — its
rows in every shared batch file were left untouched). Role `alpha-high`,
label `step3b-pair-finite-abelian-characters-for-combinatorics-e0e6e80cde0f2c48`.
A page 222.1, B page 222.2. This dispatch owns only this pair.

Binding design: `research/plan-combinatorics-and-categories.md` §III.6
(lines 10255–10290), which mints exactly three A items and one B example at
222.1/222.2 and names the three published input items. Step-3a scope receipt
`research/frontier-35-ten-categories-step3a-review-finite-abelian-characters-for-combinatorics.json`
(`decision: sufficient`, sha256 `c3487ef4…`, reason records coverage defects
F1/F2 reported for correction) is still current: the scope hash binds only
manifest id/kind/title/statement, none of which changed.

## Completed IDs

Items (all four were already in the pre-author manifest inventory; see
"Certification route" below):

- `def-additive-character-of-a-finite-abelian-group` — definition, no proof
  target. Additive character of a finite abelian group written additively as a
  homomorphism `G -> C^times`, `chi(0)=1`, `chi(-x)=chi(x)^{-1}` from the
  published homomorphism laws, an explicit separation from the trace character
  of a representation, and a well-definedness paragraph recording that the
  definition selects no decomposition, enumeration or isomorphism `G ~= G-hat`.
- `lem-additive-characters-are-one-dimensional-complex-representations` — the
  five-clause dictionary: (1) `rho_chi(g)z = chi(g)z` is a one-dimensional
  complex representation with trace character `chi`; (2) conversely every
  one-dimensional representation yields an additive character, basis-free;
  (3) every irreducible complex representation of the finite abelian `G` arises
  this way up to equivalence; (4) `|chi(g)| = 1`; (5) distinct additive
  characters give inequivalent irreducible representations.
- `lem-additive-character-orthogonality-from-representation-orthogonality` —
  row orthogonality `(1/|G|) sum_g chi(g) conj(psi(g)) = delta_{chi,psi}` plus
  the zero-sum clause for a nontrivial character, with the linear-first
  convention of the published class-function inner product.
- `ex-characters-of-z-mod-five-and-their-orthogonality` — B example:
  `zeta = exp(2 pi i/5)`, `chi_r([s]) = zeta^{rs}`, well-defined, multiplicative,
  the five are distinct and exhaustive, the 5x5 table rows, and orthogonality
  quoted from the A-page lemma and cross-checked by the vanishing sum of the
  fifth roots of unity.

Pages: `library/combinatorics/finite-abelian-characters-for-combinatorics.md`
(A, items = the three above, `examples: []`) and
`library/combinatorics/finite-abelian-characters-for-combinatorics-examples.md`
(B, `requires` only its A companion, `examples: [ex-characters-of-z-mod-five-and-their-orthogonality]`).

Records refreshed for this pair only: `research/frontier-35-ten-categories-batch-1.pages.json`
(deps synced to scaffold ∪ item-file unions; item 3 `strategy` refreshed to the
actual proved route), `…-batch-1.coverage.json` (F1/F2 repairs below),
`…-batch-1.proof-contracts.json` (created; scope = the three proof-bearing
items, 19/9/13 citations, 8 item-specific boundary dispositions each), and four
item receipts `research/frontier-35-ten-categories-step3b-review-<id>.json`.

## Certification route (why ordinary item receipts are required)

All four ids are in `research/frontier-35-ten-categories-step3-auditor-baseline.json`
`items` (written at 2026-09-24T03:45:01Z, before this dispatch), so
`tools/step3-auditor-items.mjs certify` explicitly refuses to certify them as
created items ("cannot certify an item that already existed in the scaffold").
The engine's created-item bypass therefore cannot close this pair. All four item
files and both page files were absent from the pre-author touch snapshot
(`research/frontier-35-ten-categories-touches.json`, label `pre-author`), i.e.
this dispatch wrote all delivered content from the scaffold strategies. Closure
is by the four ordinary receipts below, which is the only available route.

Recorded decisions (`node tools/tsx-run.mjs tools/step3-decisions.mjs record-item …`,
`confidence 1`, examined dependencies = the item's declared dependency union, no
`--owner`, no judge/audit stamps):

| item | decision | receipt sha256 |
|---|---|---|
| `def-additive-character-of-a-finite-abelian-group` | accept | `267210b528199edebe517757dc35142d3bdeeca53b92555ff0c80b7ff0ba719a` |
| `lem-additive-characters-are-one-dimensional-complex-representations` | repaired | `8616a06a6585f32a81092878da70379d4ede650da21a4e7f6c224541ca322d82` |
| `lem-additive-character-orthogonality-from-representation-orthogonality` | repaired | `b2b2968e014c51788dab492b2824db88677c01447e1a65909ff32ab8d3066e66` |
| `ex-characters-of-z-mod-five-and-their-orthogonality` | repaired | `db221c14e8388c3f56726dd05810c33e2405a0eb50f2081850933ea63ba6e34c` |

Each reason states the actual completed argument, the checks run and the
scaffold change made. `node tools/tsx-run.mjs tools/step3-decisions.mjs check
--run frontier-35-ten-categories --phase final` shows no work row for any id of
this pair (both pages and all four items closed).

## Scaffold audit and repairs

- Statements/titles/kinds/ids were kept byte-identical to the manifest; no pair
  was added, no promised result dropped, no Recorded result consumed, and no
  published content edited.
- Item 3 route decision: the scaffold offered an optional independent finite-sum
  route. It is **not** used, because pulling a scalar out of a `C`-valued finite
  sum is not published as a standalone linearity statement (it would need a
  local supplier). The representation route is proved and cited; the manifest
  `strategy` was refreshed to record the route actually taken, and the
  alternative route is described in the item's Remarks. This is the only
  mathematical scaffold repair.
- Deps: each item's manifest `deps` was synced to the union of scaffold and
  item-file declarations (item 1: 8; item 2: 20; item 3: 10; item 4: 14). Every
  dependency exists, is `status: published` and is earlier (external pages
  20/38/147/189 < 222.1) or is an in-pair earlier item; no unpublished or
  forward-edge supplier is used.
- Coverage repairs (F1, F2 below) and the new proof-contract file. All other
  batch-1 rows (sibling pair 441/442) were preserved verbatim.

## Local suppliers added

**None.** No item required an unpublished prerequisite, so no definition or
lemma was added to the A page. The one place the scaffold hinted at a supplier
need (item 3's alternative finite-sum route) was resolved by using the published
representation route instead of minting a local linearity lemma.

## Checks actually run (current state, after all edits)

| command | result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <items 2,3,4>` | PASS 3/3 — "3 checked, 0 failing — all clean". Item 1 is a definition with no proof body; precheck has no phase target for it. |
| `node tools/rendercheck.mjs <4 items + 2 pages>` | OK — 6 files: no wikilink inside math, no unbalanced/nested delimiters, no multiline display block, every math span parses under KaTeX, every frontmatter block parses. |
| `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-1.proof-contracts.json --strict --items <items 2,3,4>` | 0 errors, 0 warnings, 3/3 checked. |
| `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-1.pages.json` | 8 errors, all `scope-item-missing` for the sibling Erdos–Hajnal items (files not yet written by the concurrent sibling author). My pair contributes 0. |
| `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-1.coverage.json --require-destination` | 0 errors, 2 low-yield warnings (mine 2/9 scaffolded; sibling 6/16). The declines are justified in-row (`inline`/`out-of-scope`, each with an exact reason) and the pair's Step-3a review receipt is `sufficient` for the current scope; the warning text asks for Alpha confirmation at the §III.6 design level, which this dispatch does not itself perform. |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic page order, no item-level cycles/forward references/B-page dependencies/unresolved ids; only pre-existing unrelated warnings; 431 planned pages still carry no item list (includes 222.1/222.2 — see Open obligations). |
| `node tools/source-fetch-check.mjs --coverage research/frontier-35-ten-categories-batch-1.coverage.json` | 4/4 sources fetch-verified, 4/4 resolved, 0 documented drops. |
| `node tools/depcheck.mjs --quiet` | FAIL overall, all diagnostics pre-existing and unrelated (`published-unaudited`, `multi-home`, `cited-not-in-deps`, Brauer page cycle, other pairs' `b-leaf-content`); a grep of the full output names none of my items or pages. |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` | Refreshed, 21 edges, 0 touching this pair, all batches reviewed, 0 orphaned reviews. |
| `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final` | No work row for either page or any of the four items of this pair. |
| `node tools/fix-multiline-display.mjs <4 items>` | Run before the above; display math joined to one source line in the four items. |

Source re-verification performed in this dispatch (independent of the scaffold
notes): Webb `/tmp/repbook.pdf` sha256_16 `3053d04310d37984`, Chapter 3
Theorem 3.2.3 (printed p. 30, PDF p. 37) read directly — row orthogonality
`<chi_V, chi_W> = 1` iff `V ~= W` else `0`; Section 4.1 Proposition 4.1.1,
Theorem 4.1.2, Example 4.1.3, Corollary 4.1.4 (printed pp. 50–52, PDF
pp. 57–59) read directly. Etingof `/tmp/replect.pdf` sha256_16 `7008168dd9222197`,
§3.3 Example 1 (PDF p. 35) and §3.5 inner product/Theorem 3.8 (PDF p. 37) read
directly — "all irreducible representations over C of commutative groups are
one-dimensional", `(f1,f2) = (1/|G|) sum f1 conj(f2)` with linear-first
convention, and the orthonormality of irreducible characters.

## Cross-batch dependency ledger

`research/frontier-35-ten-categories-batch-1.cross-batch-dependencies.json` is
`[]`, which is correct (an empty input is valid only with no declared
cross-batch edges): this pair is a leaf in this run. No consumer in another
batch of this run depends on it, and none of its dependencies lives in another
batch. The sibling pair's rows were not touched. The unified ledger
`research/frontier-35-ten-categories-cross-batch-dependencies.json` was
refreshed after the edits. The design's later consumers (CB-14c, CB-31, CB-27)
are future frontiers, not batches of this run, and are out of this input's
scope; nothing here depends on their state.

## Published concerns (owner-visible)

Reported with exact evidence; none is a defect in a published item's
mathematics.

1. **F1 — confirmed coverage mapping error (fixed here).** The scaffold coverage
   row for Webb Example 4.1.3 (character table of `C2 x C2`) was disposed
   `already-published` → `ex-the-character-table-of-a-four`. That item is the
   character table of `A_4` (`items/ex-the-character-table-of-a-four.md`,
   page 148 `characters-and-the-orthogonality-relations-examples`), a different
   group of order 12 — the mapping was false. Disposition corrected to
   `out-of-scope` with a ≥40-character reason. Confidence: high (the published
   item's statement was read).

2. **F2 — confirmed over-claim (fixed here).** The coverage row for Etingof
   §3.3 Example 1 was marked `included` under the dictionary lemma, but that
   example also asserts the dual-group clauses (`G*` is a group, `Z_n* = Z_n`,
   `(prod G_i)* = prod G_i*`, `G* ~= G` noncanonically); the scaffolded lemma
   states none of them. The row was split: the dictionary clause stays
   `included`, the dual-group/product/order clauses are a separate
   `out-of-scope` row with an exact reason. Confidence: high (source PDF p. 35
   read directly; item statement checked).

3. **F3 — no citable published supplier for Webb Theorem 4.1.2/Corollary 4.1.4
   at this order.** The external direct-product classification ("simple complex
   characters of `G1 x G2` are products", tensor-product character tables) has
   no published library item earlier than 222.1. The nearest published item,
   `thm-characters-of-direct-sums-tensor-products-and-duals` (page 147), is
   about `chi_{V+W}`, `chi_{V⊗W}`, `chi_{V*}` for a **single** group `G`, not
   about irreducibles of an external product. No page of this run declares the
   external-product classification either (checked in all frontier-35 batch
   manifests), and the later representation-theory track is later than 222.1 in
   any case. Consequence recorded in coverage: Webb Theorem 4.1.2 and Example
   4.1.3 are `out-of-scope`, and no item leans on them. Confidence: high;
   classification as a coverage/sourcing decision, not a defect claim against
   any published item.

4. **F4 — page `requires` edge not consumed by any item (not a defect).**
   `finite-abelian-characters-for-combinatorics` requires
   `cyclic-groups-and-direct-products` and `finite-counting-and-binomial-coefficients`
   (page orders 38 and 20), but no item of the pair cites them; the design
   §III.6 mandates this exact `requires` list (background vocabulary: abelian
   groups as direct products, the exponential/root-of-unity and modular
   arithmetic inputs are consumed through other items). The manifest
   `requires` matches the plan-spec entry verbatim, so Step 4's splice has no
   `requires` disagreement. Confidence: high. No action requested.

No other published item read or cited in this dispatch was found defective at
the point of use: the exact statements of the two published suppliers actually
used for orthogonality (`thm-first-orthogonality-relation-for-irreducible-complex-characters`,
`def-standard-inner-product-on-complex-class-functions`) and of the
splitting-field chain (`thm-fundamental-theorem-of-algebra-minimum-modulus-proof`,
`cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`,
`def-splitting-field-for-a-finite-group`,
`thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`,
`thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group`)
match the hypotheses used, including the definition's explicit gloss of
`End_G(V)=k` as "every `G`-endomorphism is scalar".

## AC / choice

No form of the axiom of choice is used anywhere in this pair. The argument is
finite throughout: finite groups, finite-dimensional complex representations,
finite sums over `G`, and finite lists of roots of unity; no element or basis is
selected from a family of merely nonempty sets. Both incompatible-axiom
branches are irrelevant here (no AC-dependent supplier is consumed). This is
asserted in the item Remarks and in the recorded decisions.

## Open obligations (none blocking this pair)

1. **Pre-splice plan mismatch (expected, for Step 4).** `research/plan-spec.json`
   entries 222.1/222.2 still carry `items: []`; the four item ids exist in the
   manifest in splice order. The `requires` lists already agree, so the splice
   should be a pure id insertion; any refusal is a real finding, not pending
   work.
2. **Sibling pair mid-authoring.** Batch 1's other pair (441/442) is being
   authored concurrently; batch-1 `content-policy` currently reports 8
   `scope-item-missing` errors for its items and `coverage-checklist` a 6/16
   low-yield warning for its page. Those are the sibling's obligations; my
   pair's rows are clean. The sibling must add its contract entries to the
   shared `…-batch-1.proof-contracts.json` without disturbing the three entries
   already there.
3. **Contract scope excludes the definition item.** Matching the batch-11 and
   frontier-10 precedent (definitions have no proof body and would produce a
   `scope-missing-contract` error under `--strict`), the batch-1 contract scope
   is the three proof-bearing items only. If Step 4/5 expects every manifest
   item in a contract scope, this is the point to revisit; the definition is
   otherwise fully recorded in manifest, coverage, and item file.
4. **No escalation is open** for this pair: no unmet prerequisite, no source
   uncertainty, no required cross-group change. `--owner` was never used and no
   judge/audit stamp was added.

## Step-4 serial reconciliation notes

- Manifest strategy refresh for
  `lem-additive-character-orthogonality-from-representation-orthogonality`
  (route statement: representation route only; finite-sum route deliberately
  unused for lack of a published linearity supplier) is the only prose-level
  change made outside item text; propagate it if a plan-level strategy field is
  derived.
- Coverage dispositions F1/F2 as described above.
- Nothing here amends `research/published-consumer-supplier-ledger.md`; the
  serial reconciler owns it.

## Next action

None for this dispatch: all four items and both pages are authored, checked,
and closed by item receipts. Step 4 splices ids; independent Step-5 review
follows the engine's own schedule.
