# Independent joint-spectrum repair — frontier-38-owner-30

2026-10-03. Owned: `thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors`, its one necessary new local scalar lemma, and exact batch19 manifest/contracts/coverage/notes plus the authorized A-page registration. No other mathematical item or batch was edited.

## Defects and complete replacement

The original F1 character formula was false: it used binom(m,2)·zν/fν, where trace gives dim(Sν)·zν/binom(m,2). For ν=(3), the old formula gives9 whereas the trivial character is1. The central scalar zν itself was true, but its source-only seminormal justification was circular with the downstream seminormal theorem being constructed from these weights.

Added `lem-transposition-class-sum-acts-on-a-specht-module-by-total-content`, proved independently through the earlier polytabloid Specht realization. This avoids assuming a Young-symmetrizer left-ideal isomorphism absent from the original dependency interface. Centrality gives an intertwiner on the finite-dimensional irreducible Specht module; the earlier scalar-endomorphism corollary is applied only in that finite-dimensional setting. The coefficient of {t} in e_t is1. A term τγ in T_m e_t contributes exactly when τγ lies in the row stabilizer. Writing τ=rγ^{-1}, each fixed entry outside the two-point support forces r and γ^{-1} to fix it by the unique row-column intersection. Their restrictions to the remaining two entries are therefore identity/transposition, so precisely one is the transposition. The count is row pairs minus column pairs, with the column sign negative. Summing c−1 and r−1 over diagram nodes identifies this difference with total content and n(ν′)−n(ν). Taking traces gives the correct normalized character formula. The lemma includes m=0,1, with no character denominator used there.

The existing Specht realization, irreducibility, scalar-endomorphism, row/column/tabloid and character/trace suppliers were read as actual operative definitions/statements/proofs. The scalar-endomorphism supplier's unrestricted written Statement omits a finite-dimensional qualifier present in its proof; this repair uses it exclusively on finite-dimensional Specht modules, satisfying that operative hypothesis. No infinite-dimensional claim is imported here or silently repaired elsewhere.

The target's original Statement is byte-for-byte unchanged, including all three content-vector conditions and bijection/one-dimensionality. Its complete proof was rewritten coherently. Along the branching chain, T_k−T_{k−1} gives the added node's content; k=1 is separate. Standardness gives conditions(1),(2) and the two neighbouring diagonal witnesses for(3). For sufficiency, a direct criterion replaces the interleaved induction:

- If content t is absent and t>0, the top row has length at mostt; occurrence of t−1 is equivalent to length exactlyt, giving the next top-row node. For t<0, the transposed first-column argument gives the new bottom node. Since the diagram is nonempty, t=0 is not absent.
- If content t is present, let(r,c) be its final diagonal node. The only possible new node of that content is(r+1,c+1). It is addable precisely when(r,c+1) and(r+1,c) already exist. Their entries then follow the last t-entry. If either neighbour is missing, every node of its neighbouring content is strictly northwest of(r,c), so none occurs after that last entry. This proves both directions of the criterion, for every positive/negative/zero content and boundary row/column.
- Conditions(2),(3) supply exactly this criterion at each prefix. Distinct addable contents force a unique node and therefore a unique standard tableau. Together with the previously constructed Young eigenbasis, distinct content vectors make each joint eigenspace exactly one line.

The comparison applies in the Young-basis representation of the original item, not a newly asserted rank-one regular-representation statement. No full Statement or mathematical hypothesis was weakened.

## Complete source reading

Reused and independently hashed the existing complete53-page Garsia PDF at `/tmp/garsia.pdf`, rawSHA256 `5942dfd8e4b03118511e66d41a84cb8b740b42db5d2ccda67a707b8af1d0d20b`. Read the entire Theorem3.2 proof and Remark3.1, printedpp19–21, from its full extracted text. Its coefficient count supports the scalar and its displayed trace normalization confirms the original item's inversion error. Its seminormal-unit reduction is replaced locally by the independent polytabloid argument. Historical authoritative snapshot/certificate recovery evidence in coverage is retained; no new Garsia fetch or cover-to-cover reading is claimed.

Freshly fetched the full40-page Chan notes from `https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf`, rawSHA256 `8a3cac907770c66d1c8e32e83f3690f89eb3da2d359f6f6a5e747dcf9758a6f6`. Used PyMuPDF to extract the complete document. Actual reading: polytabloid definition, covariance proof and Specht realization, printedpp12–14; complete Theorem4.4 text/proofs, pp15–16; complete Theorem9.4 submodule dichotomy proof, pp31–32. Source and existing local irreducibility arguments were checked for their exact finite-dimensional characteristic-zero use. No source's claim or bibliographic title replaced a missing local proof.

## Registration, closure and checks

The evidence JSON records both items' exact raw/canonical hashes, every reachable supplier hash in dependency order, source reads, changed carrier hashes and preservation comparisons. New lemma closure:457 nodes, with only the new lemma draft; all456 suppliers published. It reaches neither the target nor the seminormal theorem. Target closure:799 nodes, zero missing target/cycle. This graph/hash receipt is not a new complete audit of every foundational proof. The actual needed interfaces and noncircular mathematics were checked as above.

Batch inventory is19 A/4 B (23 total). Actual A page insertion precedes the target, and the page prose names the independent scalar calculation. New lemma run level0 and target level2 match the recomputed whole-run levels; all declared run labels currently agree. All21 unrelated original manifest entries and all21 unrelated contracts are unchanged. Own coverage corrections retarget the scalar to its lemma, synchronize the target alternative/deps and record the newly read Chan source. No other source's mathematics or historical attempts were erased.

Executed after final item edits:

- Explicit two-path precheck: exit0,2 checked,0 failed.
- Explicit two-path rendercheck: exit0,2 checked,0 errors/warnings.
- Explicit two-path proof-layout: exit0,2 items,10 steps,0 defects.
- Strict proof-contract check: exit0,all23 batch entries,0 errors/warnings (restricted two-item check also passes).
- Batch19 content policy: exit0,23 items,0 errors/warnings.
- Batch19 source-fetch-check: exit0,6/6 resolved;5 fetch-verified,1 historical documented drop.
- `depcheck --items-file /tmp/jm-repair-items.json --json`: exit0,0 errors,0 target warnings, complete global page/cycle checks.
- Whole-run `dependencyLevels(runPages(...))`: zero label/dependency errors.

No test suite or engine gate ran. No verification stamp was added. The proof check initially proposed phase renumbering for the target; it was adopted before final checks. A contract boundary anchor omission was corrected before the final strict pass.

## Stable handoff

| Item | Raw SHA-256 | Canonical content SHA-256 |
|---|---|---|
| New scalar lemma | `cb5dcfb2fa1b158cd5b58cd302cfad7fad4fb5f74c1f57da4cfcd27a8d2b65d7` | `6ea50e6ff134ad36e98f754c8ce72d0e386afc482b91b1bc699f9c0e0eee07d7` |
| Joint-spectrum theorem | `493656479684563e5334dac2972291032ee97c4a96059adec3dd8b3835d56f14` | `3a7476345b401568367666a69923275d8f1bb99feaeb6c675ff1a5563cb30d4d` |

No unresolved mathematical defect or blocked prerequisite was identified. Parent owns ordinary new-local-item registration/addition certification and the final dependency-ordered decision/evidence refresh. The existing target decision is invalidated by its proof/dependency edit; the unchanged downstream Statements need no mathematical interface propagation. The target and new lemma are draft. All lane item writes are stopped.

Final ambient clarification, requested by parent: Given and step5.1 now explicitly take the Young lines in each irreducible, or collectively in the multiplicity-free direct sum of the irreducibles. The Remarks record that repeated copies in another representation can enlarge the eigenspaces. This makes the preceding diagonal-algebra construction precise without changing the Statement. After this last item edit, both explicit precheck/rendercheck and proof-layout ran again successfully; strict full23-item contracts also passed. The hash table above and evidence JSON contain these final bytes.
