# Batch 58 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-58`; covers: `58`.

Completed exactly two routed obligations. Accepted the reader’s restriction-proof clarification and confirmed/repaired the nonfatal TikZ fence defect. No blocker, missing prerequisite, published defect, withdrawal, or out-of-scope repair was found. No judging, stamping, scheduling, or gate battery was performed.

## Decisions and exact historical comparison

| Obligation | Verdict | Closed defect |
|---|---|---|
| `refuter:58:1`, `def-temperley-lieb-link-state-standard-modules` | `confirmed_nonfatal` | `non-ml-math-remaining-81-2026-10-18-58-tikz-fences` |
| `touched:58:lem-temperley-lieb-link-state-restriction-filtration` | `accepted_repair` | `non-ml-math-remaining-81-2026-10-18-58-restriction-eigenvalue-explanation` |

Both completed repairs have `repair_confidence: 1`. Reader findings are empty; no page decision is owed. Decisions are in the task-named `-decisions.json` sibling. Both closed rows are owned at `3a-adjudicate` and reference their exact obligations.

The definition’s pre/post-reader item hash was `ffafd632a2987ab57b23f558b5ce4346945bb68297af85aafebc0588759bae51`. Its Remarks actually contained escaped backticks instead of Markdown fences, exactly as the refuter reported. Changed only the two delimiters to ordinary triple-backtick TikZ fences. The diagram still depicts the stated arc (2,3) and defects 1,4; no mathematical clause, source metadata, provenance, dependency, or manifest interface changed.

Recovered an exact pre-reader restriction carrier at `research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-boundaries-frattini/source-read-snapshots/items/lem-temperley-lieb-link-state-restriction-filtration.md`, raw SHA-256 `0b51ddeb2f3ae9846f0ab209fc358d062e56cb147330516219c1f7fabbfeb272`. Current raw SHA-256 `dfbdf3bd435f7107b0c4bb16c80517aec504e5211de1a5371a6ebae33a9f160c` equals the post-reader snapshot. The exact diff changes only proof step 7.1. It expands the forced crossing factors and terminal loop/through terms, adds the no-defect case, and retains the eigenvalue and hypotheses. This is a nonfatal proof-explanation omission, not a false eigenvalue or statement. Accepted the current repair after independent mathematical review; only the contract’s risk review was additionally enriched. The reader already updated derivation 7.1. No historical uncertainty or owner historical-resolution exception is needed.

## Mathematical review in dependency order

Read the scope, generated order, reader report/findings, refuter report, both hash snapshots, owning manifest/contract and current carriers. Recorded each completed item in this report during the review and its specific risk review in the owning contract before advancing through the order.

- **Definition (level 2):** The quotient by the lower-through subset of the free diagram basis has precisely the surviving indexed basis. No defect lies inside an arc. The construction includes the empty rank-zero state, t=0 and the zero ring under the indexed-family convention. No choice or loop division is needed. Corrected only the illustration fences.
- **Action (level 3):** Each new propagating path uses a distinct old propagating path. The lower-through span is therefore stable, and associativity with left-factor-above stacking gives the stated right action and its identity. The quotient basis and all endpoints follow without extra ring assumptions.
- **Gram form (level 4):** The identity coefficient in End(t) is well defined; reflection preserves loops and reverses multiplication. Both adjointness sides are the identity coefficient of the same composite y a* x*. Lower-through intermediate terms contribute zero. Checked t=0, n=0 and delta=0.
- **Restriction (level 4):** Deleting the rightmost defect identifies the submodule; cutting the arc ending at n identifies the quotient. Checked every generator case, including the exceptional joining of two defects, and n=1,t=1; the t=0 and t=n cases have a zero factor. Exactness works over any stated commutative ring. Independently checked the additional complex splitting proof: braid identities, partial-closure centrality, rank-one operators giving scalar endomorphisms (with rescaling over C), both eigenvalues, and the polynomial retraction. In step 7.1, the forced factor and terminal terms give q^(s+1), and reflection gives q^(-s-1); the s=0 terms give q and q^(-1). The eigenvalue difference is (q-q^(-1))(q^(t+1)-q^(-t-1)), nonzero under the stated condition. No diagonalizability assumption or AC is needed.
- **Zero-form equivalence (level 5):** Positive defects admit a loop-free shifted-pair witness of value 1. With no defects and positive rank, every pairing has a loop and a specified pair has exactly one loop, giving value delta. Both directions remain valid with zero divisors or nilpotents under the explicit nonzero-ring hypothesis. The empty state has value 1.
- **Cellular basis (level 5):** Unique matching halves index the basis; reflection is an exact anti-involution. Fewer through strands means greater label, so the lower-through ideal is the required higher-cell ideal. Expansion of y a gives coefficients independent of x. The middle composite gives precisely the symmetric Gram scalar. No localization is needed over arbitrary R.
- **Counterexample (level 5):** W(2,0) over a field at delta=0 has one basis vector, identity action 1, generator action 0, and zero Gram entry. It is itself simple although its form quotient is zero. This works in characteristic two as well.
- **Classification (level 6):** Finite matching basis makes TL finite-dimensional and unital, satisfying the exact generic cellular theorem over every field. Independently read that published theorem’s entire general-cellular proof and the cell-form calculus: rank-one generation, upward-ideal action, field-extension rank and finite ideal filtration establish the used result. Nonzero means not identically zero; a zero form does not determine the actual module head. Rank zero gives the sole simple F-module.
- **Rank-three example (level 7):** Only arcs (1,2) and (2,3) are allowed, since arc (1,3) would enclose a defect. Traced all four generator images and all Gram entries. At delta=0 the off-diagonal unit pairings force both radical coordinates to vanish, in every characteristic. Read the ballot-path dimension proof and binomial definition; the dimension is 3−1=2.

The actual external suppliers read were `def-temperley-lieb-diagram-category`, `thm-temperley-lieb-diagram-category-laws`, `thm-temperley-lieb-diagram-generators-span`, `lem-temperley-lieb-generators-satisfy-local-relations`, `def-free-module-on-a-set-and-standard-basis`, `def-cellular-algebra-basis-and-cell-module`, `lem-cell-form-is-associative-and-its-radical-is-a-submodule`, `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra`, and `def-binomial-coefficient`. Reviewed exact used claims and arguments; this does not claim an audit of every distant foundational supplier or the published theorem’s unused Hecke specialization.

## Source and dependency evidence

Read [Ridout–Saint-Aubin](https://arxiv.org/pdf/1204.4505), §3 Lemmas 3.1–3.2, Proposition 4.1/Corollary 4.2 (printed pp.17–18), and Appendix A (printed pp.45–47), including the actual A.5–A.11 diagrams. Their arc label p corresponds to t=n−2p; reflected left-action conventions match the local right action. The complete relevant Appendix A argument supports the reader’s expanded coefficient computation. The all-ring sequence is proved locally rather than inferred from the source’s complex setting.

Read [Enyang–Goodman](https://arxiv.org/pdf/1106.5339), §6.4.2, Theorem 6.23 with proof and Corollary 6.24 (printed pp.33–35): matching halves and ballot paths give the diagram cellular basis over Z[delta] and the two restriction factors. The local proof directly establishes the arbitrary-ring case.

Read [Mathas](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf), Chapter 2, Proposition 2.7, Proposition 2.9 and Theorem 2.13 with their relevant arguments (printed pp.10–13). The sentence after Theorem 2.13 incorrectly says nondegenerate; the local published supplier explicitly uses the correct not-identically-zero condition and proves it. No defective published carrier was identified, so the published ledger remains unchanged.

Read both owned page summaries and their two prerequisite-page summaries as route context; no page-only obligation is owed. Updated only batch 58’s dependency input with current supplier/consumer bindings and independent interface evidence, preserving historical records. Refreshed the derived frontier ledger as its instructions require. No Statement or Definition changed, so no mathematical consumer repair or outside escalation was required. Manifest and provenance fields remain applicable unchanged.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-58.proof-contracts.json`: 0 errors; nine HIGH/CRITICAL items and one MODERATE item. All nine required reviews are now specific independent completed reviews.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-temperley-lieb-link-state-standard-modules.md items/lem-temperley-lieb-link-state-restriction-filtration.md`: both unchanged.
- The same explicit pair under `tools/precheck.mts --json`: definition not applicable; restriction proof passed; 1 proof checked, 0 failures.
- `node tools/rendercheck.mjs` on that pair with `--json`: 2 checked, 0 errors, 0 warnings. This checks parsing; it does not claim a compiled visual TikZ screenshot.
- `node tools/defect-ledger.mjs append --file /tmp/math81-b58-defect-rows.json`: appended exactly two closed rows and refreshed the generated view.
- `node tools/frontier-dependency-ledger.mjs refresh --run non-ml-math-remaining-81-2026-10-18`: refreshed and deduplicated.
- Final owning-contract risk report with `--require-reviewed`: 0 errors, 10 items routed.
- After the final item edit and reflow, ran once, batching both paths: `node tools/proof-layout.mjs items/def-temperley-lieb-link-state-standard-modules.md items/lem-temperley-lieb-link-state-restriction-filtration.md`: 2 items, 11 steps, 0 defects.

No unresolved mathematical or workflow blocker remains in this dispatch. Engine-owned decision hashing and subsequent gates remain for the engine.
