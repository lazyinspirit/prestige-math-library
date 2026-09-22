# Final adjudication: item 4

Run phase-2-remaining-27; group c. Proposed disposition repaired; source status familiar. Finite refinement, simple integration and the orthogonal-sum norm calculation are familiar elementary arguments, checked directly without external verification.

Read the full item and its previously read suppliers, and newly read def-integral-of-a-simple-function-against-a-pvm, def-simple-integral-against-a-signed-or-complex-measure and def-complex-simple-function. Reused the actual adjoint, operator-norm and total-variation definitions already read. Inspected the owning batch-5 manifest and full derivation/boundary/risk contract and citation interfaces. A/B context and coverage were read for item 3: complex Hilbert spaces, Countable Choice, first-variable linearity, arbitrary measurable spaces and zero-coefficient complements. Read Sol's specific report and adjudication and both Terra verdicts.

Sol's regrouping of the scalar pairing into canonical level sets correctly fixes its original citation problem. The final rejection (context 7e9467e2d034bcf7abb06d5b36d341f5da42321849d4ba23b8e4009c4bc44577) is valid: coefficients on empty cells need not be values of s, and max|s| was undefined on the empty domain. The repair defines M_s=max({0} union {|s(t)|:t in X}), agreeing with the old bound whenever X is nonempty, and equal to zero otherwise. No case is dropped.

Finite strong additivity is obtained by padding with empty sets. Intersection refinement proves independence because coefficients agree on nonempty intersections and empty projection values vanish. Scalar pairings are regrouped by actual values of s, with zero-level terms omitted. All scalar integrals satisfy the supplier's finite-variation hypotheses: a partition of a subset extends to one of X, so its variation is bounded by the already-proved total variation. The squared-norm expansion moves each projection through the pairing using the adjoint definition; disjointness kills cross terms. A separate regrouping by values of |s|² identifies the diagonal sum with its scalar integral. Each nonempty cell has |a_j|≤M_s and empty cells contribute zero, proving the uniform bound. The unit-ball supremum then gives the operator-norm bound, including H={0}. For X empty every projection value is zero, so both the integral and M_s vanish.

Updated the item, its owning contract and manifest. Replaced the unnecessary adjoint-identities citation by the defining adjoint identity, and declared the operator-norm and total-variation definitions actually used. Updated this consumer's batch-5 dependency rows (old edge removed, correct adjoint-definition edge verified), then refreshed the frontier ledger after dependency edits. Published dependencies need no same-frontier row. No existing supplier, page or other item was edited.

Final focused precheck passed (1 checked, 0 failing); strict contract passed (0 errors, 0 warnings); rendering passed. Canonical phase numbering adopted and risk/boundary records synchronized. No new lemma, judge verdict or pass stamp. Next: record exact bytes before item 5. No remaining mathematical obligation for item 4.

## Escalation: terminal recording conflict

The recorder rejected item 4 with exit 1:

> ERROR lem-simple-pvm-integral-is-representation-independent: queue item lem-scalar-and-complex-measures-from-a-pvm at position 3 must remain current before this item

There is no terminal acceptance record for item 4. Its mathematical repair and passing focused checks remain on disk. Stop here; item 5 and later items have not been substantively reviewed.

Read-only hash inspection confirms that item 3's own bytes are unchanged: both its recorded and current item hashes are `e9afccaf8860b74a57b33930aa969c11b13f6de547b0d49929dd341abefee4b3`. Its recorded context is `293e4ffd6b79c9f8819292e60c138ab11f51e22af02c5fe09f50dec5942456b2`, while its current context is `45a551c45fcf022a7009c262564271bc29f15acd3568d4d0bf91e536ad2eace0`. Items 1 and 2 retain current receipts.

The context builder in tools/judge.mts lines 155–162 includes every other A/B-page item interface, so repairing item 4's statement changes the already-recorded item 3's sibling interface context. The terminal recorder checks both item and context hashes (tools/step7-terminal-resolution.mjs lines 195–199) and refuses a stale predecessor (lines 516–521). Thus the required empty-domain statement correction encounters an exact-context conflict with the queue's immutable earlier resolution. No engine code, frozen queue, receipt or earlier item was edited to bypass this.

Owner/operator resolution of this recording conflict is required before continuation. Under the dispatch's prohibition on reopening settled items and WORKFLOW's requirement for explicit operator recovery of queue/hash conflicts, I have not resealed item 3, run another judge, or advanced to item 5. The published-defect ledger is unchanged; this is run evidence only. Incidental manifest reindentation was removed, retaining only owned entry changes. Final outcome of this dispatch: escalation at item 4, with items 1–2 current, item 3 recorded but context-stale, and item 4 repaired/checked but unrecorded.
