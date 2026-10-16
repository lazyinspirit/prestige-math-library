# Batch 36 notes — Amplitude Amplification

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: beta  
Page level: 12; prerequisite batches: 1, 3, 4, 8, 10, 14, 25.

## Scope, plan, and design reconciliation

The assigned inventory is 19 A items on `amplitude-amplification` and two B items on `amplitude-amplification-examples`. The pair-specific design file was not present, as the assignment states. I used the complete QA12 section of `research/quantum-algorithms-planning/sections/qa_r3.md` as the controlling track design. It fixes a supplied measurement-free unitary $A$, an orthogonal good projection, the standard $S$-sign iterate, separate initial preparation and verification charges, direct handling of $a=0,1$, known and unknown success branches, explicit exact-success ancilla/flag capabilities, and Høyer’s phase-matching and phase-error scope. The authored carriers preserve these interfaces and boundaries.

The assigned page identity, order, category, title, companion and eight page requirements match the corresponding `plan-spec.json` record. Its `items` field is empty; the current audited QA12 export supplied the 19 A / 2 B inventory. The plan design contains no Grover-special-case dependency for this pair; the page therefore does not depend on QA11.

The assignment’s scheduling input is `e8b2b1a6437c84045bb9cd37f40383cd3eba27fa0ff5d50ac3fe783facf2b5b2`. During this pass, the shared `batch-dependency-levels.json` hash changed between reads; its final inspected `input_sha256` is `3097ae8fe82fb1fd0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9` (an earlier read in this pass showed `d63e4218fb1ccb60e0ff71096e37391ecc9824c4dcf111b70f219fa5d0642df6`). This hash conflict and concurrent churn are recorded for owner reconciliation; the batch manifest retains the assignment-provided hash and page-level value. The shared scheduling file was not rewritten.

## Inventory and item levels

The manifest lists suppliers before consumers and uses the computed in-run rule $0$ with no in-run supplier, otherwise $1+\max$ supplier level. The levels are:

- Level 10: `def-qa-12-prepared-success-subspace`.
- Level 11: `lem-qa-12-amplification-plane-invariant`.
- Level 17: `alg-qa-12-amplitude-amplification`, `alg-qa-12-unknown-amplitude-search`, `alg-qa-12-arbitrary-phase-amplification`.
- Level 18: `thm-qa-12-amplification-rotation-correctness`, `alg-qa-12-known-amplitude-amplification`, `alg-qa-12-exact-success-amplification`, `thm-qa-12-arbitrary-phase-matching`.
- Level 19: `thm-qa-12-fixed-amplification-query-cost`, `thm-qa-12-known-amplitude-success-bound`, `thm-qa-12-exact-success-guarantee`, `thm-qa-12-unknown-amplitude-success`, `thm-qa-12-phase-mismatch-robustness`, `thm-qa-12-arbitrary-phase-query-cost`, `prop-qa-12-amplitude-access-cost-accounting`, and both B items.
- Level 20: `thm-qa-12-known-amplitude-query-cost`, `thm-qa-12-exact-success-query-cost`, `thm-qa-12-unknown-amplitude-query-cost`.

The direct carrier dependencies and item levels agree with the batch manifest. No in-batch dependency cycle was found. The maximum item level 20 is computed from item dependencies; it is distinct from the page scheduling level 12.

## Mathematical corrections and proof scope

- The known-amplitude recurrence is now $x_0=1$, $x_1=1-2a$, $x_{n+1}=2(1-2a)x_n-x_{n-1}$, and $p_k=(1-x_{2k+1})/2$. The earlier initialization $x_0=1-2a$, $x_1=x_0$ was wrong; for $a=1/4$ it did not produce the $k=1$ peak. The corrected recurrence follows from $x_n=\cos(2n\theta)$ and gives the finite rational check $p_0,p_1,p_2=1/4,1,1/4$.
- The controlling QA12 design and Høyer’s Theorem 3 give the mismatch tolerance with $\phi\sqrt a$ multiplying the constant: $\delta\le\epsilon\sqrt3\,\phi\sqrt a/(2\pi^2(\sqrt3+\pi))$. A stale `proposed-items.json` treatment placed $\phi\sqrt a$ in the denominator. Høyer’s PDF p. 5 was visually inspected; the source has the product. `thm-qa-12-phase-mismatch-robustness` states and proves the product version, including the explicit constant, ceiling bound, and equal-phase corollary.
- `thm-quarter-turn-values-and-shift-formulas` does not supply $\sin(\pi/6)=1/2$. The finite example, counterexample, and phase-robustness proof now derive this value locally from the cofunction/supplementary identities, the double-angle identity, and sine positivity. This avoids claiming an unsupported supplier excerpt.
- The unknown-amplitude expected-cost proof uses $M_\ell\ge\ell$ to bound the threshold round count, gives the geometric sum and survival-weighted cost ratios, and takes the supremum over finite execution prefixes. It does not rely on an unproved logarithmic estimate or an expectation on infinite histories.
- Exact success assumes the explicitly supplied coherent good flag and inverse, clean temporary qubit, exact real arithmetic, and exact rotation access. No finite-bit synthesis or automatic controlled access is claimed. Classical outputs still require the diagonal-predicate and verifier conditions.

## Cross-batch dependencies and readiness

All eight required page bodies are present and inspected; their actual current statuses/excerpts are recorded in `batch-36.cross-batch-dependencies.json`. The page owners are batches 1, 3, 4, 8, 10, 14, and 25, plus the published root page for inner-product orthogonality.

Direct cross-batch item suppliers and transitive in-run item edges, with native excerpts and historical body hashes, are recorded in the same dependency file. The original author inspected batches 8, 10, and 25 as draft interfaces. After native batch 36 drained, the owner focused review reconciled their actual access, phase/order, restoration, normalization, and cost clauses against all 21 local consumers. Draft status remains visible and is not itself a mathematical authoring blocker. This supplies no independent acceptance or publication claim:

- Batch 8: `def-qc-inverse-unitary-access`, `def-qc-reflection`, `thm-qc-reflection-unitary-involution`, `def-qc-controlled-unitary-access`, `def-qc-relative-phase`, `thm-qc-controlled-global-phase-is-relative-phase`, and `thm-qc-unit-vector-projector-is-density`.
- Batch 10: `def-qc-clean-and-dirty-ancillas`.
- Batch 25: `def-qa-quantum-query-algorithm`, `def-qa-quantum-query-complexity`, and `def-qa-expected-query-cost`.

These suppliers control the reflection signs/unitarity, inverse and controlled access, relative phase semantics, finite density/measurement interface, clean workspace, and query/cost model used by this pair. The focused review found matching actual clauses and repaired two QC04 projective-law self-adjointness omissions without changing Statements or dependencies. Evidence is in `research/quantum-computing-algorithms-60-2026-10-15-owner-amplitude-supplier-escalation.json`. The 21 original Step 1 escalations remain immutable historical author records; their draft/in-flight rationale is not retained as an unresolved mathematical gap. Root owns the later single current-graph label pass, stable input binding and authoring-readiness decision. No page or item is independently approved here.

## Source reading and retrieval

The source coverage records seven source occurrences across the A and B pages. `source-fetch-check --stamp` verified all seven using prior full-text stamps; no new retrieval or recovery retry was needed, and no source was dropped. The full local text and PDF paths, hashes, locators, supported item IDs, and dispositions are in `batch-36.source-evidence.json` and `batch-36.coverage.json`.

- BHMT, §2.1, Theorems 2–4, QSearch and the exact-success construction: principal treatment for standard, known/exact and unknown-success amplification.
- Høyer, Theorem 1 and Theorem 3: arbitrary-phase matching and robustness. PDF page 5 was visually checked for the corrected tolerance factor.
- de Wolf, Chapter 7 §7.3, and Childs, Chapter 19 §19.3: independent full lecture-note treatments of general amplitude amplification and the success plane.

Both complete lecture-note sources support the required independent treatment coverage. The source sketches are used as corroboration; the local carriers supply complete proofs for every claimed theorem. There was no retrieval failure, so `source_resolution` drop/escalation records were not applicable.

## Scoped checks

Results are from the final scoped checks after the carriers, pages, manifests and contracts were synchronized:

- `node tools/tsx-run.mjs tools/precheck.mts ...`: all 15 proof-bearing carriers pass; no proposed repairs remain.
- `node tools/proof-layout.mjs items/<21 assigned carriers>`: 21 items, 47 numbered steps, 0 layout defects.
- `node tools/rendercheck.mjs items/<21 assigned carriers> library/quantum-algorithms/amplitude-amplification.md library/quantum-algorithms/amplitude-amplification-examples.md --json`: 23 files checked, 0 errors, 0 warnings.
- Strict proof contracts: 21/21 items checked, 0 errors, 0 warnings. `coverage-checklist`: two pages, 94 harvested entries, 0 errors or warnings.
- `source-fetch-check`: 7/7 source occurrences fetch-verified and resolved; 0 newly stamped. `manifest-deps`: 21 items, no missing dependency arrays. `content-policy`: 21 items, 0 errors or warnings.
- Run-wide `item-dependency-levels.mjs check` reports no level error for this batch, but cannot pass because 16 other scaffold pages still have empty inventories and 12 other items have stale or inconsistent level labels: `thm-qa-11-known-count-random-query-cost`, `thm-qa-16-adversary-composition-lower-bound`, `thm-qa-16-filtered-gamma-adversary-equality`, `def-qa-21-clean-ancilla-postselection`, `thm-qa-21-clean-ancilla-postselection-probability-law`, `cex-qa-21-unknown-input-reflection`, `lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-tang-without-sampling-access`. These out-of-scope manifests and items were left untouched.
- Run-wide `batch-dependency-levels.mjs check` reports stale shared scheduling metadata. The final recorded hash differs from the dispatch hash above; the shared file was not rewritten.
- `step1-decisions.mjs record` created `escalated` records with `owner:false` for all 21 items. The subsequent run-wide `step1-decisions.mjs check` is blocked before it can inspect those records by malformed YAML in the unrelated existing item `items/lem-hh-commutative-or-cocommutative-antipode-is-involutive.md:22` (unterminated single-quoted locator). The 21 owned records were read back directly and all contain the expected `escalated` decision, `owner:false`, dependency list and blocker reason. The unrelated item was not edited.

## Focused owner reconciliation after native drain

The exact native escalations, notes, cross-batch ledger, contracts, manifest, and both page carriers were preserved under `.autopilot/owner-amplitude-preimages/quantum-computing-algorithms-60-2026-10-15/batch36-drained/` before these metadata edits. Actual contract citation quotes were compared with their current supplier text; every quote remains present, so contracts and manifest need no rewrite. Historical hashes and numeric labels remain native observations pending root binding. No source proof, source Remark, readiness record, test, gate, stamp, or control state changed.
