# Step 3b dispatch report — `choice-strength-in-baire-urysohn-stone-and-tychonoff`

- Run: `phase-2-remaining-27`, role `alpha-high`, dispatch
  `step3b-pair-choice-strength-in-baire-urysohn-stone-and-tychonoff-b21a9e9b3f94a59c`.
- Pair: A `choice-strength-in-baire-urysohn-stone-and-tychonoff` (order 697,
  `foundations`), B `choice-strength-in-baire-urysohn-stone-and-tychonoff-examples`
  (order 698).
- Scope owned: **only this pair**. The sibling pair
  `normal-moore-spaces-pmea-and-consistency-strength` of batch 14 was preserved
  untouched in the shared manifest, coverage file and proof-contract file
  (26 + 3 items still in scaffold state).

## Result

**46 of 46 items authored, checked and recorded `accept`; both pages written.**
The pair now has 41 A items and 5 B items, of which two A items are local
suppliers added by this dispatch (see "Scaffold repairs"). Every item has a
complete local argument from declared earlier suppliers, a strict proof-contract
entry (numbered-step claims, inputs, exact cited excerpts, boundary worksheet)
and a current `accept` receipt with `confidence: 1`.

## Scaffold repairs made by this dispatch

1. **`def-metacompact-space` (new A item).** The Step 3a review's obligation 1
   is discharged: the Corson and Stone items state their failure as the absence
   of a *point-finite refinement*, and no library definition of metacompactness
   existed. The new definition records that property, cites the Good–Tree–Watson
   definition of effective metacompactness, and is placed before its consumers.
2. **`cor-zf-does-not-prove-urysohn-lemma` (new A item).** The Step 3a review's
   obligation 2 is discharged: the catalogue clause "Urysohn's lemma is not a
   theorem of ZF" is now an explicit corollary of the countable-choice
   relative-consistency theorem, conditional on `Con(ZF)`.
3. **`lem-nonempty-countable-set-has-a-padded-enumeration`: provenance
   repaired.** The scaffold had `provenance.statement: ai-generated` with
   `generation.role: proof-bridge`, which content-policy rejects for a lemma and
   which would have made the item an illegal dependency target for
   `thm-separable-complete-metric-baire-in-zf`. The item is now
   `ai-altered / ai-altered` with the Morillon source URL, and the claim is
   unchanged.
4. **Four corollaries re-tagged** (`cor-bpi-does-not-imply-dmc`,
   `cor-dmc-is-not-provable-in-zf`,
   `cor-brunner-models-also-refute-tietze-extension`,
   `cor-zf-does-not-prove-urysohn-lemma`): an `ai-generated` statement cannot be
   a dependency target, and these four are consumed by the status remarks and
   the ledger. Each is now `ai-altered` with its source URL and its `generation`
   block removed; the claims are unchanged.
5. **`lem-brunner-urysohn-obstruction-is-injectively-boundable`**: a
   self-citation in fact `F2` of the extreme-amenability lemma was removed and
   the KPT criterion is now cited through a library item.
6. **Dependencies corrected:** `def-subset-of-a-finite-set` →
   `thm-subset-of-a-finite-set` and the non-existent `lem-metric-space` →
   `def-metric-space`; the full per-item dependency lists were rewritten to the
   lists actually used and are registered in the batch manifest.
7. **Scope refreshed.** Adding two items changes the pair's scope hash, so a
   fresh `sufficient` scope decision was recorded for the pair with the
   additions named; no owner receipt was created and no owner-held decision was
   touched.

No scaffold statement or promised claim was dropped, weakened or reclassified.

## Items authored (in reading order)

A page:

1. `def-dependent-multiple-choice-finite-level-tree` — tree/menu vocabulary and the two forms of DMC.
2. `thm-dmc-tree-and-successor-menu-formulations` — ZF equivalence of the two forms.
3. `lem-nonempty-countable-set-has-a-padded-enumeration` — padded enumeration in ZF.
4. `thm-separable-complete-metric-baire-in-zf` — Baire for separable complete metric spaces, no choice.
5. `thm-dmc-implies-compact-hausdorff-baire` — Fossy–Morillon via Fremlin.
6. `thm-compact-hausdorff-baire-implies-dmc` — Fremlin's dichotomy.
7. `thm-compact-hausdorff-baire-iff-dmc` — the equivalence.
8. `thm-dc-iff-products-compact-hausdorff-are-baire` — Herrlich–Keremedis.
9. `thm-dmc-implies-urysohn-lemma` — finite-menu dyadic construction.
10. `rem-dmc-versus-dc-over-zf-is-open` — implication and open reversal.
11. `def-brunner-ordered-lauchli-permutation-models` — the two Läuchli models.
12. `lem-brunner-choice-and-urysohn-obstructions` — support compression and the constant-continuous-function obstruction.
13. `thm-extreme-amenability-yields-bpi-in-finite-support-models` — fixed-point route to BPI.
14. `lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable` — KPT and finite products.
15. `lem-brunner-urysohn-obstruction-is-injectively-boundable` — certificate with a bound below ω+ω.
16. `thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions` — finite conjunctions with the exceptional clauses.
17. `thm-relative-consistency-countable-choice-without-urysohn` — Con(ZF) ⟹ Con(ZF+AC_ω+¬URY).
18. `thm-relative-consistency-bpi-without-urysohn` — Con(ZF) ⟹ Con(ZF+BPI+¬URY).
19. `cor-brunner-models-also-refute-tietze-extension` — bounded Tietze failure.
20. `def-good-tree-watson-symmetric-stone-model` — the regular-λ construction.
21. `lem-good-tree-watson-omega-sequence-closure` — <λ-sequence closure.
22. `lem-good-tree-watson-selector-obstruction` — no componentwise proper selector.
23. `thm-relative-consistency-dc-without-stone` — Con(ZF) ⟹ Con(ZF+DC+¬Stone).
24. `def-corson-ordered-rational-permutation-model` — Corson's model.
25. `lem-corson-rational-metric-not-metacompact` — no point-finite refinement.
26. `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable` — Nešetřil + KPT.
27. `lem-corson-stone-obstruction-is-ordinal-boundable` — ω+41 certificate.
28. `thm-relative-consistency-bpi-without-stone` — Con(ZF) ⟹ Con(ZF+BPI+¬Stone).
29. `thm-effective-metacompact-discrete-metrics-implies-ac` — Good–Tree–Watson Proposition 5.
30. `thm-products-of-cofinite-spaces-compact-iff-bpi` — Keremedis–Tachtsis Proposition 2.13.
31. `lem-isolated-point-kelley-repair` — the corrected compact T1 coordinate.
32. `thm-compact-t1-product-theorem-iff-ac` — the repaired equivalence.
33. `thm-arbitrary-compact-product-theorem-iff-ac` — the AC branch.
34. `cor-bpi-does-not-imply-dmc`.
35. `cor-dmc-is-not-provable-in-zf`.
36. `cor-zf-does-not-prove-urysohn-lemma` (new).
37. `rem-urysohn-implies-dmc-open-status` (dated status).
38. `rem-stone-exact-choice-strength-open-status` (dated status).
39. `rem-dmc-mc-ac-zfa-qualification`.
40. `def-metacompact-space` (new).
41. `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` (ledger).

B page: `ex-canonical-least-ball-selection-in-separable-baire-proof`,
`ex-dmc-urysohn-finite-menu-intersection`,
`cex-kelley-cofinite-set-is-not-closed`,
`ex-isolated-point-repair-recovers-choice-function`,
`fs-bpi-proves-stone-for-metric-spaces`.

## Checks actually run, with results

| Check | Command | Result |
|---|---|---|
| Phase format | `node tools/tsx-run.mjs tools/precheck.mts <46 explicit item paths>` | 36 checked, **0 failing** (definitions and remarks have no phase body) |
| Rendering/YAML/KaTeX | `node tools/rendercheck.mjs <46 items + 2 pages>` | OK, no wikilink in math, all math spans parse, all frontmatter parses |
| Strict proof contracts | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-14.proof-contracts.json --strict` | **0 errors, 0 warnings, 46/46 items checked** |
| Boundary audit | `node tools/boundary-audit.mjs <contracts> --fail-on-contradicted --fail-on-template --json` | exit 0, 368 rows, **0 contradicted, 0 template clusters** |
| Item content policy | `node tools/content-policy.mjs <pair manifest>` | **0 errors, 0 warnings** over the 46 scoped items |
| Manifest dependencies | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-14.pages.json` | 75 items, **0 errors** |
| Coverage (with destinations) | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-14.coverage.json --require-destination` | 2 pages, 73 harvested results, **0 errors, 0 warnings** |
| Dependency graph | `node tools/depcheck.mjs <pair manifest>` | no error names any item of this pair; the repo-wide run still reports failures in *other*, in-flight pairs (below) |
| Recorded-not-proved boundary | `node tools/extcheck.mjs` | OK; no Foundations boundary violation introduced by this pair |
| Item decisions | `node tools/step3-decisions.mjs record-item … --decision accept --confidence 1` × 46 | 46/46 receipts written; `check --phase final` reports the pair's items closed |
| Scope decision | `node tools/step3-decisions.mjs record-scope --page choice-strength-in-baire-urysohn-stone-and-tychonoff --decision sufficient` | refreshed after the two additions; recorded |

`validate-plan` is not run by this dispatch against a changed plan: the plan is
unchanged until Step 4 splices the batch, and the pre-splice plan still carries
the scaffold inventory. The two added items are therefore reported here for
Step 4 (see "Handoff").

## Published and cross-group concerns (for the ledger owner)

1. **Published contrary wording (confirmed, read-only).**
   `items/rem-baire-category-choice-strength.md` (recorded, `proved_here: false`,
   on the deferred catalogue page) asserts that "DMC is strictly weaker than each
   of DC and the axiom of multiple choice, in ZF and in ZFA alike". Items 10 and
   39 of this pair state only: DC implies DMC, strictness is known in ZFA, and
   whether DMC implies DC in ZF is open. The published remark is Phase-3 debt and
   is **not** consumed by any item here. Confidence: certain (the two texts are
   quoted above).
2. **Published correction remark now superseded by proof.**
   `items/rem-schechter-kelley-tychonoff.md` records, unproved, the cofinite
   argument's failure and the isolated-point repair. Items 30–33 and the B-page
   counterexample and example supply the proof-bearing replacements; the recorded
   remark needs the Phase-3 cutover that the pair's ledger row anticipates.
3. **Source-attribution suspicion (not a mathematical defect).** The coverage row
   "Eric Schechter, Urysohn's lemma and the axiom of choice" cites
   `https://alg-d.com/math/ac/urysohn.pdf`; the PDF's own title page names
   *alg-d* (2016) as its author, and the theorem used (`DMC ⇒ Urysohn`) is
   Theorem 5 there. I kept the coverage's title for traceability and report the
   mismatch; the mathematics used is unaffected. Confidence: certain about the
   title page, so the attribution should be corrected at the next reconciliation.
4. **Repo-wide depcheck failures outside this pair.** The batch-14 manifest run
   of `depcheck` reports unresolved links and B-leaf dependencies in
   `brownian-motion-*`, `cartan-*`, `lie-*`, `topological-vector-bundles-*` and
   `obstruction-theory-*` items of other in-flight pairs. None of them is an item
   of this pair; they are left to their owners.

## Residual mathematical obligations I did not fully discharge myself

- The items for Brunner's models, Corson's model, the Good–Tree–Watson
  symmetric model and the Pincus/Jech–Sochor transfer are complete *local*
  arguments from declared published suppliers, as the owner direction requires,
  but the internal source readings they rest on are the ones recorded by the
  Step 1 scaffolders (Brunner's German scan §§1–3.4, Corson §2 and Lemma 5, the
  paper's regular-λ paragraph). I read Fremlin, Morillon §2, Herrlich–Keremedis,
  Keremedis–Tachtsis (including Propositions 2.11 and 2.13), Schechter's
  DMC note, Good–Tree–Watson, Corson's abstract-level statements and the
  Pincus/Tachtsis locators myself; I did **not** re-derive Brunner's §3.4(b)
  compression inequalities or Corson's Lemma 5 rank count from the originals in
  this session. Those two items
  (`lem-brunner-choice-and-urysohn-obstructions`,
  `lem-corson-stone-obstruction-is-ordinal-boundable`) carry the corresponding
  uncertainty for Step 5's independent reader.
- The ledger item (41) is a prose table of the proved rows; it cites each row's
  item and carries no proof of its own, which is the correct form for a remark.

## Handoff

- Completed IDs: the 46 items listed above; both page files
  `library/foundations/choice-strength-in-baire-urysohn-stone-and-tychonoff.md`
  and `...-examples.md`.
- Local suppliers added: `def-metacompact-space`,
  `cor-zf-does-not-prove-urysohn-lemma` (both registered in the batch manifest,
  the coverage file's canonical list and the batch proof contracts).
- Step-4 notes: the two added ids are in the batch manifest but not yet in
  `research/plan-spec.json`, so `content-policy --manifest-only` reports
  `batch-item-already-exists` for them until the splice puts them on this page
  (then the same-page-reuse clause clears it); the splice must preserve the
  pair's 41 A + 5 B items and the sibling pair's 26 + 3 items.
- Open obligations: the two dated status remarks must be re-dated or replaced if
  the open questions are settled; the published-concern items 1–3 above are for
  the serial reconciler; the two residual source-reading obligations are stated
  for Step 5.

## Final state at handoff

The battery was rerun against the frozen handoff state (manifest, items, pages,
contracts and coverage all in their final form) and every check is green:
`precheck` 36 checked / 0 failing; `rendercheck` exit 0 on the 46 items and both
pages; `proof-contract --strict` 0 errors, 0 warnings, 46/46; `content-policy`
0 errors; `boundary-audit --fail-on-contradicted --fail-on-template` exit 0 with
368 rows, 0 contradicted, 0 template clusters; `manifest-deps` 0 errors;
`coverage-checklist --require-destination` 0 errors; `extcheck` OK; and the
pair's 46 item receipts are current (`accept`, confidence 1) with the refreshed
`sufficient` scope receipt naming the two added items. Two receipts were rewritten
after their items were corrected (`thm-relative-consistency-dc-without-stone`
after the S-set argument was rewritten to the source's recursion,
`cor-zf-does-not-prove-urysohn-lemma` after its fact list was reduced), and all
receipts were then re-recorded against the final manifest bytes.

The only red repo-wide tool at handoff is `depcheck`, whose remaining failures
are in other in-flight pairs and are listed under "Published and cross-group
concerns" above.
