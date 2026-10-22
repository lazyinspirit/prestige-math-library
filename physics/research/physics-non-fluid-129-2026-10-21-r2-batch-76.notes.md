# Batch 76 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `76`  
Pair: `qftx-two-dimensional-sewing` / `qftx-two-dimensional-sewing-examples`

## Scope and plan reconciliation

The assigned design section at `research/plan-quantum-field-theory-frontier-expansion-track.md` § “Frobenius sewing and exact two-dimensional topological amplitudes” and the matching `research/plan-spec.json` page records agree on page IDs, order, category, requirements, and scope. The plan-spec’s empty item arrays are pre-authoring placeholders; the design assigns the four items now inventoried in the batch manifest. No plan/design conflict was found.

The pair remains limited to closed oriented two-dimensional TQFTs with no free boundary. It makes no open/closed, Cardy, fully extended, positivity, or experimental claim. The A page has three items and the B page one, within the 100-item cap. The page-level external prerequisite is `frobenius-algebras-and-two-dimensional-sewing`; the B page also requires the A page. The item suppliers are recorded exactly in the manifest and item frontmatter.

The run dependency-level record assigns batch 76 level 0 with no in-run batch prerequisites. Recomputed levels on this batch’s final manifest are: `def-qftx-frobenius-semisimple-model` 0, `prop-qftx-frobenius-genus-amplitude` 1, `prop-qftx-frobenius-positive-reflection` 1, and `ex-qftx-dual-number-topological-model` 0; there are no local cycles. The B example has no in-run item supplier, so its level is 0 even though its page cites the A page. The cross-batch dependency file is `[]`, as no consumer in this batch has a supplier in another assigned run batch. Downstream batch 78 uses the A page as a prerequisite; that provider-side observation is recorded here rather than as a row whose consumer would be outside this batch.

A run-wide dependency-level recomputation was attempted read-only, but `computeRunBatchDependencyLevels` cannot load another unfinished run manifest containing a bare string item entry (`Duplicate item undefined`). No shared run-level dependency file was changed. The recorded batch-76 level and the scoped item levels above were checked directly.

## Mathematical and import audit

The current imported copy of `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` matches its root original at SHA-256 `04b09ab9ba7757b618b51e7f2f9ca3d08bbc947be550be6a1c5b2a0ef8cf15fd`. Its complete current statement and proof, the cited surface-normal-form suppliers, and their exact import pins were inspected. Its closed classification interface supports the conditional uses in the definition and dual-number example. The explicit finite-dimensional algebra calculations are proved locally.

The current local import of `thm-invertible-matrix-theorem` is stale in the transitive supplier closure of the classification. Local imported SHA-256: `844a25666aedae99689109d9762f83891c50fbb6f82296b099464d3b8d4fc11e`; current root original SHA-256: `1286785cdca44b1faf70f2c24d971d1510c06a1ff97c98f2a2849af423a49d51`. The current root theorem explicitly adds the hypotheses that `F` is a field and `n ≥ 0`; its proof is unchanged. The inspected immediate use in `lem-matrix-rank-detected-by-nonzero-minors` applies it to real `r × r` matrices with `1 ≤ r ≤ min(m,n)`, which meets those current hypotheses. Thus the use appears compatible, but the imported snapshot is not current.

The inspected transitive chain is:

`def-qftx-frobenius-semisimple-model` → `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` → `lem-boundary-relative-two-dimensional-surface-normal-form` → `lem-relative-surface-collars-and-elementary-decomposition` → `thm-parametric-transversality` → `thm-transverse-preimage-theorem` → `thm-a-regular-level-set-is-an-embedded-submanifold` → `cor-local-normal-form-for-submersions` → `cor-the-immersion-and-submersion-loci-are-open` → `thm-differential-rank-is-lower-semicontinuous` → `lem-matrix-rank-detected-by-nonzero-minors` → `thm-invertible-matrix-theorem`.

The current scoped command `node tools/physics-support/physics-check.mjs --plan /tmp/physics-batch76-plan.json --pages-file /tmp/physics-batch76-page-ids.json --json` fails with: `physics-content: mathematics import changed: items/thm-invertible-matrix-theorem.md; reconcile and re-import before a new run`. Re-importing or editing root mathematics is outside this batch and the active run. This is the exact readiness blocker; no unresolved mathematical argument was identified in the inspected use.

Historical supplier/source notes that identify the older imported theorem hash or draft status are not current evidence. The current root theorem is published and its current hash matches this workspace’s stored pin; the separate transitive import above does not. Before escalation, `loadStep1Record` and `step1Decision` were checked for all four assigned IDs and for `thm-invertible-matrix-theorem`: no current Step 1 records existed. Missing records or independent approval alone were not treated as proof gaps.

## Source reading and retrieval evidence

The A page’s coverage record contains three inspected full-text treatments:

- Joachim Kock, complete 48-page short-version lecture notes, §§1.3.5–1.3.20, §§2.2/2.4, and §§3.1.12–3.1.13. The downloaded nLab mirror is byte-identical to the author-hosted PDF inspected earlier (SHA-256 `6d8c10a381551cf7292316ed3aac4c324f95318c4792cd51a3582961c95c9db9`). The author host later returned `ECONNREFUSED`; the original URL and recovery history remain recorded.
- Joachim Kock, complete 10-page Cambridge University Press book excerpt, relevant pp. 1–7. Its classification argument is explicitly treated as a proof sketch, not as the full book proof.
- Aaron D. Lauda and Hendryk Pfeiffer, complete 47-page v3 paper, §§3.3–3.7 and §4, including Corollary 4.6 and the normal-form and termination arguments.

All 15 harvested results have item-level dispositions and support limits in the coverage record. The two full treatments provide independent closed-sector classification routes; source material does not supply the local finite weight sums, dual-number identities, or reflection-form positivity, which are proved directly. `source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-76.coverage.json --stamp` reports 3/3 sources fetch-verified and resolved, with no dropped sources. `coverage-checklist` reports 1 A page, 15 harvested results, 0 errors, and 0 warnings.

The Kock source was recovered from a byte-identical mirror, so the source remains included and is not marked dropped. Its failed URL attempts, searches, recovery, and per-item dispositions are preserved in `coverage.json`; no `source_resolution` dropped-source record was added, since that would falsely classify the recovered treatment as dropped.

## Scoped final checks

- Batch-local dependency levels: four items checked, levels as listed above, no cycles or label errors.
- `content-policy`: 4 items, 0 errors, 0 warnings.
- `depcheck --items-file /tmp/physics-batch76-item-ids.json`: 4 selected items and both pages checked; prerequisite closure 1,057 items / 210 pages; 0 errors, 0 warnings.
- `rendercheck`: four item files and both page files checked; 0 errors, 0 warnings.
- `proof-contract --strict`: all 4 items covered; 0 errors, 0 warnings.
- `proof-layout`: 4 items, 16 numbered steps, 0 defects.
- `precheck`: 4/4 items pass.
- `source-fetch-check`: 3/3 sources fetch-verified and resolved.
- `coverage-checklist`: 1 page, 15 harvested results, 0 errors, 0 warnings.
- Scoped `physics-check`: blocked only by the stale imported `thm-invertible-matrix-theorem` recorded above.

All four Step 1 records are therefore `escalated` for the stale transitive import. Resolving that import requires owner reconciliation outside this active run; the records do not claim independent proof approval.

The `def-qftx-frobenius-semisimple-model` readiness row’s stored reason is the truncated text `Escalated: current scoped physics-check reports mathematics`. A shell-quoting error occurred after the row was written; the record was not overwritten because the dispatch instruction forbids overwriting an escalation. Its dependency list includes both the direct classification theorem and the stale transitive matrix theorem. The exact checker message, both hashes, and complete inspected dependency chain are recorded in this note. The other three readiness rows contain the full blocker and hash evidence in their reason fields.
