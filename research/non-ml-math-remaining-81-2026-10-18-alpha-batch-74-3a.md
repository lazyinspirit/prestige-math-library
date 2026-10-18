# Batch 74 Step 3a adjudication

Run: non-ml-math-remaining-81-2026-10-18. Group: batch-74. Exactly two touched obligations; reader findings and refuter flags are empty; no page obligation.

## Completed level 0: lem-matrix-algebra-is-a-c-star-algebra

Claim: for each integer n>=1, finite matrices on C^n with conjugate transpose and the operator norm form a unital complex C*-algebra. Inner products are linear in the first variable. Reviewed current Proof 1.1–3.1 and every declared supplier, including their actual statements and arguments. The coordinate identities, row estimate, double-supremum adjoint norm argument, both C*-identity inequalities, norm axioms and finite-basis completeness are sound. Zero/rank-deficient matrices and n=1 are included; n=0 is excluded. No choice principle is needed.

Current raw SHA-256 ccda7511dfa16e680a1ff3a0109e4ece11a46f3ee6d68530515e35ff5b8e628c equals the frozen post-reader hash; pre-reader hash is 5c8f7a6e3552049d4f6da9ea046f609d36ae1abc98647aeb7ff54c90e499bcfb. Accept reader coordinate-linearity clarification and locator correction; no item edit. Axler's author PDF https://linear.axler.net/LADR4e.pdf, Section 7F, 7.86, 7.88(c), 7.91 (printed pp.280–283; zero-based PDF pp.293–296) was independently opened and the relevant proofs read. The earlier locator stopped before 7.91. Updated only this item's stale manifest source mirror and completed the specific CRITICAL risk review in the owning contract.

Level-0 review and risk disposition were recorded before completing the level-1 adjudication below.

## Completed level 1: ex-vector-and-tracial-states-on-matrix-algebras

Claim: each coordinate functional is a state whose quotient GNS model is the defining representation; normalized trace gives the normalized Hilbert–Schmidt left multiplication model; trace is non-extreme and reducible for n>=2, and its n=1 representation is irreducible. Checked Verification 1.1–5.1 and every actual direct supplier, with linearity in the first inner-product variable throughout. The quotient maps have the asserted kernels, descend isometrically and surject onto explicit finite-basis spaces; completeness is established before using Hilbert terminology. The bounded left actions preserve unit, products and adjoints, and the unit class is cyclic with the asserted state coefficient. The first-column subspace is closed by the entry bounds, invariant, nonzero and proper for n>=2. The decomposition into omega_1 and the average of the other states is nontrivial, with E11 distinguishing the states. The n=1 branch avoids division by n-1. No arbitrary choice is required. The state definition's general AC-dependent continuity remarks are not invoked: all necessary matrix functional bounds are proved here.

Accept the reader normalization and sesquilinearity expansions and corrected step references. These are elementary proof clarifications, not evidence of false matrix claims. Accept the Axler source-endpoint correction and synchronize all source-reference mirrors from current items to their manifest. Record the two inaccurate locator defects as nm81-b74-matrix-axler-locator and nm81-b74-states-axler-locator; each is closed and referenced by its touched decision with repair_confidence 1. No new item edits or material proof rewrite; neither current carrier has a judge record. CRITICAL risk review is complete.

## Historical comparison and sources

Both exact pre-reader item preimages were found at research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-boundaries-hopf/before/items/<id>.md. Their raw hashes equal the frozen pre hashes; their diffs against current items contain exactly the reader changes above. This removes historical-byte ambiguity. Matrix current raw SHA-256 is ccda7511dfa16e680a1ff3a0109e4ece11a46f3ee6d68530515e35ff5b8e628c; example pre hash is 915b7b4d6ae70d89ebea8b5d30c64ebe4b04864956a4fadf530f1783a41206a1 and current/post hash is 2e6cfa20a0b3aad7c9d5803bced99c96f88d0927ab99f90708c831c5c5341703. Original Statements, deps and provenance are unchanged. Frozen manifests match between pre/post; Alpha only synchronizes their source mirrors. Frozen snapshot files remain untouched.

[Axler, Section 7F](https://linear.axler.net/LADR4e.pdf), printed pp.280–283 / zero-based PDF pp.293–296: read definitions and proofs of 7.86, 7.88(c) and 7.91 under finite-dimensional inner-product hypotheses; they support the norm conventions and corrected locator. The local C*-identity argument is self-contained.

[Putnam, Theorem 1.12.4](https://ncatlab.org/nlab/files/Putnam-CStarAlgebras.pdf), printed pp.54–55 / zero-based PDF pp.53–54: read the full theorem and proof of the unital state quotient, bounded left representation, adjoint identity and unit cyclic vector. The hypotheses are satisfied by the matrix lemma and explicit state bounds. Theorem 1.12.6 is on printed p.56, not p.55 as the reader report says; the current item does not cite that theorem, and the stale manifest extra clause was removed when synchronizing its exact current source mirror. No general converse is needed locally.

[Farah cited PDF](https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf) returned a browser internal error in this review. Its Proposition 1.10.3 was not independently read here; this report does not certify that locator. Putnam's accessible complete construction and the independent finite-dimensional proofs suffice for the actual claims. No mathematical uncertainty remains from the failed redundant source access.

## Dependencies, published findings and remaining work

Reviewed all nine direct lemma suppliers and the example's additional state and Hilbert-space definitions. Exact citation statements and hypotheses match actual uses. No defective published supplier/consumer was established and no published file was edited. Neither Statement nor Definition changed, so there is no interface-triggered consumer repair. The existing page-only gateway supplier record retains its verified owner reconciliation and prior open history; this dispatch adds no page decision or page review coverage. No withdrawal is proposed and no external escalation is required. Local precheck passed both items (2 checked, 0 failing). Both closed locator rows have been appended; final checks are recorded below.

## Final local checks and disposition

- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-74.proof-contracts.json` initially identified both items as CRITICAL (scores 9 and 14). After specific complete reviews, the same command with `--require-reviewed` passed: 0 errors, 2 routed items.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-matrix-algebra-is-a-c-star-algebra.md items/ex-vector-and-tracial-states-on-matrix-algebras.md`: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` on those same two explicit paths: OK, 2 files.
- Final `node tools/proof-layout.mjs` on those same two paths: 2 items, 11 steps, 0 defects. No item edits or formatter occurred during this adjudication.
- Scoped assertions passed for unchanged post-reader raw hashes, manifest deps/provenance/sources, every contract citation quote against its actual source section, exactly two unique owed touched decisions and their two closed ledger references.
- `node tools/defect-ledger.mjs append --file /tmp/prestige-b74-defects.json --no-render` appended the two closed rows successfully. The engine retains generated-ledger refresh and gate ownership.

Final verdicts: accepted_repair for both touched carriers; repair_confidence 1 on each completed repair. No reader/refuter findings or page decisions are owed. Only owned contract risk reviews, stale owned manifest source mirrors, the task report/decisions and required ledger records changed; the example boundary-note step locator was synchronized to 4.2. No published defect established, no blocker, no escalation, no withdrawal, no judge/stamp/dispatch/gate cycle initiated. Farah source access remains the documented evidence limitation, without a missing mathematical prerequisite.
