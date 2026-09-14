# phase-2-next-18 — Step 5b cross-batch audit and closure (lead Alpha)

Role: 5b lead (alpha, covers all). Dispatch: `briefs/tasks/alpha-5b-edges.md`
under `briefs/alpha-step5.md`. Artifacts written:

- `research/phase-2-next-18-5b-verdicts.jsonl` — 32 current-hash rows
  (22 edges, 2 forward references, 1 item change, 7 page changes).
- `research/phase-2-next-18-impact.json` — pre-author → post-5a receipt,
  566 changed interfaces, 491 dispositions, reviewer recorded.
- `research/phase-2-next-18-impact-5b.json` — post-5a → current receipt,
  1 changed interface, 0 affected items, reviewer recorded.

Reviewer identity on both receipts: **phase-2-next-18 Step 5b lead Alpha
(root)**.

## 0. Inputs, and what this dispatch had to decide

- Work list (`research/phase-2-next-18-cross-group-edges.json`, written by
  5b-edges at 2026-09-14T05:32:53Z): **22 cross-batch edges** (11 group b,
  5 group c, 6 group d), **2 forward references** (group f), **0 post-5a
  structural changes** at hand-off.
- No `-checkpoint-import.json`, no `-merge-import.json` and no
  `-step7-published-repairs.jsonl` exists for this run, so the migration
  clauses of the task do not apply and no published-repair handoff had to be
  preserved.
- Post-5a carriers: the nine `-step5-hash-<b>-post-5a.json` snapshots and the
  six group decision files. I recomputed the composite carrier (item file +
  contract row + manifest row) for all 566 authored items and compared each
  with the `subject_sha256` sealed by its 5a decision: **566/566 matched at
  hand-off**, so every 5a reading bound the bytes then on disk.
- Because 5a repairs and my own repairs moved carriers, the sealed hashes were
  refreshed with the engine's own `node tools/step5-scope.mjs stamp --run
  phase-2-next-18` (the tool that writes that field); `check --phase
  adjudicate` and `check --phase final` both report 602 obligations and
  **0 errors** afterwards.

## 1. Cross-batch edges — 22/22 verdicted `accurate`

Every edge below was read by me at 5b: the citing item's Facts row and the
proof step that consumes it, against the cited item's current Statement and
hypotheses. Full readings are in the verdict rows of
`research/phase-2-next-18-5b-verdicts.jsonl` (`kind:"edge"`, with the exact
current `from_sha256`/`to_sha256`); `defect_ids` is `[]` throughout because no
edge needed repair.

| # | citing batch → cited batch | edge (consumer → supplier) | reading |
|---|---|---|---|
| 1 | d → d | `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice` → `cor-relative-consistency-of-bpi-without-choice-over-zf` | [F1] uses the supplier's stated Con(ZF) ⇒ Con(ZF+BPI+¬AC) at exactly its strength; the consumer's step 1.1 only replaces finitely many HL instances by their fixed ZF derivations. |
| 2 | d → d | `fs-bpi-well-orders-every-set` → `cor-relative-consistency-of-bpi-without-choice-over-zf` | [F2] needs the same syntactic implication for the conditional non-provability conclusion of step 2.1; supplier states it without transitive-model inference. |
| 3 | d → d | `fs-bpi-well-orders-every-set` → `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` | [F1] uses the supplier's model clause and its infinite Dedekind-finite coordinate set A; step 1.1's least-unused-element recursion uses only the order type of a supposed well-order (no choice). |
| 4 | d → d | `thm-halpern-lauchli-and-the-basic-cohen-bpi-model` → `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` | [F2]/step 1.2 consume the supplier's exact semantic assertion under the same ground/generic hypotheses the consumer repeats; neither item uses the defective parameter-definable-maximal-ideal shortcut. |
| 5 | d → d | `thm-strict-relative-placement-of-bpi-over-zf` → `cor-relative-consistency-of-bpi-without-choice-over-zf` | [F1]/step 1.1 take the second displayed implication verbatim (conditional, as the consumer's Statement is). |
| 6 | d → d | `thm-strict-relative-placement-of-bpi-over-zf` → `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` | [F2]/step 1.2 use only "every ultrafilter on ω is principal" from the supplier's consistency statement; the cofinite-filter argument needs nothing stronger. |
| 7 | c → c | `cor-supercompact-consistency-of-no-s-spaces` → `cor-formal-consistency-of-pfa-from-a-supercompact` | [F1]/step 3.1 use the supplier's PA-verified Con(ZFC+supercompact) ⇒ Con(ZFC+PFA) for fixed presentations; the composition with the no-S-space proof reduction is the consumer's own finite-code argument. |
| 8 | c → c | `thm-pfa-implies-the-simple-ideal-dichotomy` → `def-proper-forcing-axiom` | [F2]/steps 6.1, 11.1 apply the definition verbatim (filter meeting ≤ ω₁ dense sets in a nonempty proper forcing); the consumer exhibits nonempty proper P₁, P₂ first. |
| 9 | c → c | `thm-pfa-implies-the-simple-ideal-dichotomy` → `def-countable-model-generic-master-condition-and-proper-poset` | [F3]/steps 3.2, 6.1 use the master-condition formulation of properness exactly as defined (master below every p ∈ M ∩ P for the all-model formulation). |
| 10 | c → c | `thm-pfa-implies-the-simple-ideal-dichotomy` → `lem-proper-master-condition-characterizations` | [F3]/step 6.1 convert one master for a sufficiently large well-ordered H(κ) model into properness — the club/all-model equivalence the lemma proves. |
| 11 | c → c | `thm-pfa-implies-the-simple-ideal-dichotomy` → `thm-ccc-and-countably-closed-forcings-are-proper` | [F5]/step 11.1 use only the ccc ⇒ proper clause after step 10.1 proves P₂ ccc; no converse and no countable-closure clause. |
| 12 | b → b | `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle` → `def-real-and-complex-topological-vector-bundle` | ambient object only (rank-n bundle, n = 0 and X = ∅ conventions); the metric is added structure, and rank-zero/empty-base clauses of the consumer agree with the supplier. |
| 13 | b → b | `def-thom-diagonal-and-zero-section-collapse` → `def-vector-bundle-map-section-subbundle-and-isomorphism` | zero section as a section in the supplier's sense, shown in bundle charts; no subbundle/exactness clause used. |
| 14 | b → b | `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity` → `def-stiefel-space-grassmannian-and-tautological-bundle` | [F1] uses Gr₁(C^∞) as the weak colimit of the V₁/U(1) line spaces and the tautological bundle as pairs (ℓ, v); numerability is separately attributed to the Milnor-join item. |
| 15 | b → b | `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` → `def-pullback-vector-bundle-and-pullback-section` | [F6]/step 4.1 use the pullback subspace model, its canonical map f*E → E over f, and pulled-back sections. |
| 16 | b → b | `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` → `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism` | [F6]/step 4.1 use the identity and composition comparisons (with naturality/section compatibility) to identify iterated pullbacks along a homotopy inverse. |
| 17 | b → b | `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` → `thm-homotopy-invariance-of-vector-bundle-pullback` | [F6]/step 4.1 meet the supplier's hypotheses (CW/paracompact domain, numerable finite-rank bundle; pullbacks of numerations numerate) and claim only isomorphism, which is what the supplier asserts. |
| 18 | b → b | `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` → `thm-numerable-vector-bundles-admit-bundle-metrics` | [F0]/step 1.1 take the AC-granted metric that makes (D(ξ), S(ξ)) available, and the paracompact-Hausdorff consequence used in the CW-type branch. |
| 19 | b → b | `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` → `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism` | [F4]/step 1.2 use the canonical composition comparisons for the iterated tubular/disk-pair identification behind (s_η ∘ s_ξ)_! = (s_η)_! ∘ (s_ξ)_!. |
| 20 | b → b | `thm-external-product-and-whitney-sum-formulas-for-thom-classes` → `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles` | [F2]/step 3.1 combine the supplier's two clauses — Whitney sum glued by diag(g,h), and every construction commuting with pullback — to identify ξ ⊕ η with the diagonal pullback of the external product. [F2]'s "identifies" compresses those two clauses; both are present, and no hypothesis beyond finite rank and a common refinement is used. |
| 21 | b → b | `thm-naturality-and-uniqueness-of-thom-classes` → `def-pullback-vector-bundle-and-pullback-section` | [F2]/step 1.1 use the pullback bundle, its canonical map and the induced disk/sphere pair map; the target assumes no orientability, matching the consumer's "orientation-preserving pullback square" hypothesis. |
| 22 | b → b | `thm-thom-isomorphism-for-oriented-vector-bundles` → `thm-numerable-vector-bundles-admit-bundle-metrics` | [F1]/step 1.1 take the supplier's metric construction; both items declare AC and the theorem's bases lie in the supplier's scope. |

No edge was struck, repaired or added; `cross-group-edges check` recomputes the
list against disk and confirms every verdict is current (`0 error(s)`).

## 2. The two forward references — resolved (`lemmas-added`)

Both belong to `ex-brownian-finite-dimensional-density` (batch 2, group f,
B page `brownian-motion-construction-and-continuity-examples`, order 288.132):

| target | home page (order) | decision |
|---|---|---|
| `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` ([F6], Borel change of variables under AC_ω) | `euclidean-surface-measure-divergence-and-green-identities` (458.0021) | `lemmas-added` |
| `thm-choice-implies-dependent-implies-countable-choice` ([F8], AC ⇒ DC ⇒ AC_ω) | `weak-choice-principles-and-sierpinskis-theorem` (665) | `lemmas-added` |

Both targets are **already published** (the lemma carries `verification.audited
2026-09-09`), so the load-bearing lemmas exist; what could not survive 5b is the
*declaration*: the engine's forward rule is "resolved, not justified", so the
`forward_refs` entries had to go. The resolution applied (the pattern the
phase-2-next-21 lead used for the same situation):

1. both ids moved from `forward_refs` to `deps` (frontmatter and the batch-2
   manifest item row, re-spliced into `plan-spec.json`);
2. [F6]/[F8] now name the suppliers as *declared suppliers* by ID instead of
   wikilinks, because `tools/fwdcheck.mjs` hard-errors on any body wikilink to
   a later page that is not declared in `forward_refs`, and a target may not be
   in both `deps` and `forward_refs`;
3. a `## Remarks` entry in the item records the reading-order direction, the
   dependency declarations and the whitelist;
4. the examples page now whitelists both target pages under `forwardRefs`
   (manifest **and** `plan-spec.json`), which is `validate-plan`'s sanctioned
   B-page forward-citation route, so the new `deps` edges do not read as
   undeclared prerequisites.

Statement, density computation and all four proof steps are byte-identical
after the repair; `precheck` passes on the edited item, and
`depcheck`/`fwdcheck`/`rendercheck`/`prosecheck`/`depsource` pass repo-wide.
The two `forward` verdict rows carry the current item hash and the defect rows
`p2-next18-5b-fwd-brownian-change-of-variables` and
`p2-next18-5b-fwd-brownian-choice-implications`.

## 3. Post-5a structural changes — 1 item + 7 page carriers

`cross-group-edges` reports the post-5a window from disk; after my edits it
contains exactly the following, each with a current-hash verdict row:

| kind | batch | id | verdict | defect row |
|---|---|---|---|---|
| item | 2 | `ex-brownian-finite-dimensional-density` | repaired | `p2-next18-5b-item-brownian-forward-resolution` |
| page | 2 | `brownian-motion-construction-and-continuity-examples` | repaired | `p2-next18-5b-page-brownian-forwardrefs` |
| page | 4 | `complex-topological-k-theory-and-bott-periodicity` | repaired | `p2-next18-5b-page-requires-bott-periodicity` |
| page | 5 | `semisimple-lie-algebras-cohomology-and-levi-theory` | repaired | `p2-next18-5b-page-requires-semisimple-levi` |
| page | 6 | `suslin-trees-lines-algebras-and-independence` | repaired | `p2-next18-5b-page-requires-suslin-trees` |
| page | 7 | `boolean-prime-ideal-theorem-in-the-basic-cohen-model` | repaired | `p2-next18-5b-page-requires-basic-cohen` |
| page | 8 | `solovays-model-and-regularity-of-all-sets-of-reals` | repaired | `p2-next18-5b-page-requires-solovay` |
| page | 9 | `minimal-walks-oscillation-and-l-and-s-spaces` | repaired | `p2-next18-5b-page-requires-minimal-walks` |

No page was added, removed or reordered, and no item was added or removed —
the owner-blocked structural classes are untouched.

## 4. Dependency-record reconciliation (`requires`, six pages)

`validate-plan` (a 5b-cross gate) reported six `undeclared-prereq` errors: an
item on an A page of this run depends on an item homed on a page outside the
closure of that page's declared `requires`. I verified each dependency against
the citing item's frontmatter and Facts, verified the target page's order is
strictly earlier (so `prereq-order` holds and no reading-order change is
implied), then added the page prerequisite to the batch manifest and
reconciled the plan with the engine's own
`splice-plan --run phase-2-next-18 --batch <b> --update --accept-requires`
(the mode the 5b-cross gate itself uses):

| page (order) | added prerequisite (order) | genuine use |
|---|---|---|
| `complex-topological-k-theory-and-bott-periodicity` (366.031) | `simply-connected-plane-domains` (335) | `cor-winding-number-classifies-loops-in-the-punctured-plane` is cited by `lem-determinant-classifies-loops-in-complex-general-linear-groups` and `lem-linear-clutching-splits-into-eigenbundles` |
| `semisimple-lie-algebras-cohomology-and-levi-theory` (499) | `noetherian-rings-and-hilbert-basis` (111.001) | `thm-hilbert-basis-theorem` is cited by `thm-ado-faithful-representation-with-nilpotent-nilradical-action` |
| `suslin-trees-lines-algebras-and-independence` (687) | `weak-choice-principles-and-sierpinskis-theorem` (665) | `cor-countable-choice-and-omega-one-cofinality` is cited by `lem-suslin-tree-forcing-is-countably-distributive` ([F9]) and `thm-countably-closed-forcing-adds-a-normal-suslin-tree` |
| `boolean-prime-ideal-theorem-in-the-basic-cohen-model` (692.1) | `ramsey-theory` (217) | `thm-finite-ramsey-for-uniform-subsets` is cited by `lem-basic-cohen-search-and-shift-prime-ideal-construction` ([F5]) |
| `solovays-model-and-regularity-of-all-sets-of-reals` (701) | `dependent-choice-and-the-complete-metric-baire-theorem` (664.1) | `def-serial-relation-dependent-choice-principle-over-zf` is cited by `thm-solovay-inner-model-satisfies-dependent-choice` ([F2]) and `thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice` ([F3]) |
| `minimal-walks-oscillation-and-l-and-s-spaces` (711) | `borel-analytic-sets-perfect-sets-and-determinacy` (673) | `lem-cantor-and-baire-sequence-coding` is cited by `thm-ch-implies-an-s-space-exists` ([F1]) |

After the reconciliation `validate-plan` exits 0, `splice-verify` reports that
plan and manifests agree across all 36 pages, and `depcheck`/`depsource`
remain clean. These are dependency-record updates, not reading-order changes.

## 5. Impact windows

### 5.1 pre-author → post-5a (`research/phase-2-next-18-impact.json`)

- Computed: 566 changed interfaces (every authored item of this run; the
  pre-author snapshot has 18,490 items, the post-author tree 19,056) and 491
  affected items. All 491 are itself run-authored content; there is no
  published or foreign consumer of a changed interface in this window.
- Attribution/currency: every affected item's disposition names the exact 5a
  group decision (`obligation`, file, verdict) and quotes the sealed
  `subject_sha256`, which I verified equals the item's current composite
  carrier at hand-off (566/566 match; hashes later refreshed with
  `step5-scope stamp` where 5b moved a carrier). Historical review evidence was
  reused only after that attribution and hash check — no approval was copied
  blindly, and every disposition is `still-licensed` with the changed
  supplier and the channel by which it is consumed.
- Scope statement, recorded in the receipt's `reviewer` field: this is a
  bounded interface-impact reconciliation of run-authored interfaces plus my
  own re-reading of the 22 cross-batch edges and two forward references, not
  an independent re-proof of all 566 items; the mathematical reading of each
  item remains its 5a group adjudication.
- The receipt validates with
  `node tools/impact-audit.mjs --touches research/phase-2-next-18-touches.json
  --from pre-author --to post-5a --receipt research/phase-2-next-18-impact.json`
  (exit 0, 0 errors, 0 warnings).

### 5.2 post-5a → current (`research/phase-2-next-18-impact-5b.json`)

- Computed: **1 changed public interface** — the item repaired in §2 — and
  **0 affected items** (the repaired item has no logical or direct-citation
  consumers). `dispositions` is an empty array, with the reason recorded in
  the note field; the repaired item's own two consumed clauses were re-read
  against their published suppliers as part of the forward resolution.
- Reviewer recorded; receipt validates with
  `node tools/impact-audit.mjs ... --from post-5a --current --receipt
  research/phase-2-next-18-impact-5b.json` (exit 0).

## 6. Runtime repair: `tools/reflow.mts` vs `tools/precheck.mts`

The 5a group-e alpha left one **deferred** workflow row,
`p2-next18-b1-5a-reflow-precheck-convention-clash` (`class: breaking-runtime`,
`location: tool-code`, subject `tools/reflow.mts`). `step5-scope check --phase
final` (the 5b-cross `step5-routing-final` gate) refuses to close the stage
while any 5a/5b row is `open`/`deferred`, so I resolved it rather than
escalating a mechanical repair:

- Defect: the whole corpus is authored in the convention "the step's tags end
  its FIRST physical line, the step continues below"; `reflow` merged whole
  paragraphs, moving the tag off the end and replacing it with a content
  bracket (`bad-tag`) or nothing (`untagged-steps`). Measured: of 40 corpus
  items whose first step line carries its tag, **13 hard-failed precheck after
  an old-tool reflow** (all 40 passed before).
- Repair: a numbered step line that already ends with a bracketed group is
  emitted as its own logical line, and only its continuation is joined
  (`tools/reflow.mts`, header documents both the rule and its purpose). This
  is the first remedy recorded in the row's own `prevention` field; the
  alternative (extending `PROP_TAG` in the app repo) is out of this repo and
  remains an open owner option that does not conflict with this fix.
- Verification on the current tree: the 450 corpus items with a tag-first step
  line give **0 hard failures** after reflow (4 items land in the checker's
  auto-repair/canonical-numbering state instead of the former
  `untagged-steps` failure — an improvement, and each of those 4 hard-failed
  with the old tool); the 566 items of this run give 0 hard failures and 1
  auto-repair state; 200 random other corpus items reflow byte-identically;
  the tool is idempotent; the wrapped-tag case it exists for still merges.
- Ledger: the row's disposition is now `fixed` with `repair_confidence: 1` and
  the measurement evidence, and `research/DEFECT-LEDGER.md` was re-rendered
  (the ledger is append-only for *new* rows; a disposition change is an edit
  of the existing row, which is why it is stated here explicitly).

## 7. Gate battery (local runs on the current tree)

All commands were run from the repo root after the edits above.

| gate | result |
|---|---|
| `cross-group-edges check --reconcile-plan` | 0 errors (22 edges, 2 forwards, all verdicts current, plan reconciled) |
| `step5-scope check --phase final` / `--phase adjudicate` | 602 obligations, 0 errors each |
| `defect-ledger validate --run phase-2-next-18` | 42 rows, 0 errors |
| `validate-plan research/plan-spec.json` | exit 0 |
| `splice-plan --run … --verify` | 36 pages across 9 manifests agree |
| `precheck` (repo) | 15,201 items checked, 0 failing |
| `depcheck --pending-audit-ok`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `depsource`, `pathcheck` | all exit 0 |
| `coverage-checklist` (9 batches) | 2 pages each, 490 harvested results, 0 errors/warnings |
| `content-policy` (item mode) | 566 scoped items, 0 errors/warnings |
| `url-sweep --fail-on-dead` | 60 citation decisions, 2 documented source drops |
| `merge-proof-contracts` + `proof-contract --strict` | 562/562 items, 0 errors |
| `finite-smoke`, `risk-report --require-reviewed`, `boundary-audit`, `citation-fidelity`, `gate-liveness` | exit 0 |
| `impact-audit` both windows | exit 0 (receipts above) |
| `audit-manifest` | 2,621 relationships over 566 items, 0 defects |
| `frontier-dependency-ledger refresh` | refreshed and deduplicated |

Contract sync: my forward resolution changed [F6]/[F8] of the example, so the
batch-2 contract's two citation rows for the former forward targets were
removed (a strict contract citation requires a `[[wikilink]]` in the fact, and
a body wikilink to a later page may not survive 5b), and the item's
`risk_review` note records the 5b change. The merged contract and all contract
gates are clean afterwards.

## 8. Preserved obligations and remaining blockers

- **No published-item defect was found in this dispatch**, so
  `research/published-consumer-supplier-ledger.md` was not touched (and no
  lock was taken). The two published suppliers consumed by the repaired item
  were read against their current text and are sound as used.
- **Batch-8 cross-batch dependency rows remain `open` (12 rows, group d).**
  Their suppliers are drafts of this run and the rows say so; the 5b gate runs
  `frontier-dependency-ledger refresh` without `--require-reviewed`, and the
  brief assigns the reviewed join to Step 8's serial lead. I did not edit
  another group's input rows. The corresponding item-level edges are covered
  by my 5b edge verdicts (§1, rows 1–6).
- **Residual `reflow` limitation (not a blocker).** Reflowing any of
  `def-wu-classes-of-a-closed-manifold`,
  `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares`,
  `lem-wreath-double-power-coefficient-symmetry`,
  `thm-reflexive-approximation-property-implies-metric-approximation-property`
  leads the checker to ask for canonical step renumbering (previously a hard
  `untagged-steps` failure). The items themselves are untouched and pass
  precheck as they stand; the residual is recorded here so a future repair
  lane knows to adopt the checker's canonical numbering rather than re-run
  `reflow` blindly.
- **No page was added, removed or reordered; no claim was dropped, weakened or
  struck.** All 566 authored items remain in scope.

## 9. Exact carrier inventory (post-edit)

- `items/ex-brownian-finite-dimensional-density.md` raw sha256
  `132b523ed875aa0b16d4a852a207fa461859c1a4f221eeb234d430f280fdb742`;
  composite carrier
  `b74e63034883c3dc8de721e3a6e3b8c5d4bc0c57dc11216b8b527d9a49462db6`.
- Page carriers (composite, `cross-group-edges carrier` basis):
  - `brownian-motion-construction-and-continuity-examples`
    `34c2bf95f5a5d04e71969a4cdd0d64b9c7b51421698a5c35b7ec8e158f6f2ad7`
  - `complex-topological-k-theory-and-bott-periodicity`
    `71911dc81991857dabf448a7041c86f5a980ce8999a397b97cb194acb4a4ea83`
  - `semisimple-lie-algebras-cohomology-and-levi-theory`
    `2174008673efc76461b7be61388beee90fc407cefb1d05b2b066d321adc30311`
  - `suslin-trees-lines-algebras-and-independence`
    `ee0d5f68618d47f4e1a8313af56d6ddd4e9ac594f27841343cf6245019854759`
  - `boolean-prime-ideal-theorem-in-the-basic-cohen-model`
    `c797788160005d820b18d7986652c58ebd1e0d5f450715867857bf5a0a984c37`
  - `solovays-model-and-regularity-of-all-sets-of-reals`
    `1141d1d1b89e84f6820304f5c3e87a725b5dd2505ba15f0298a2d6e0dc0ceaff`
  - `minimal-walks-oscillation-and-l-and-s-spaces`
    `43a95bb92557680cc3eea31882a3b55d2c817351b701c828f315deb88f07b788`
- Shared-plan amendments (all re-spliced and verified): the batch-2 manifest
  item row for the example (deps + page `forwardRefs`), and the `requires`
  additions in the batch-4/5/6/7/8/9 manifests listed in §4.
- Ledger rows: ten `5b-cross` rows owned by the verdicts (§3) plus the closed
  5a `reflow` row (§6).
