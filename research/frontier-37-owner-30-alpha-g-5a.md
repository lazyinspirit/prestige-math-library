# Step 5a adjudication — group g

Run `frontier-37-owner-30`; batches 5, 15, 23. Current carrier evidence is authoritative; the reader and refuter reports and the pre/post hash snapshots were read as historical evidence. This report is an in-progress checkpoint until the decisions file and risk reviews are complete.

## Sources checked

- James, *The Representation Theory of the Symmetric Groups*, §10.3 and Lemma 10.4 with Corollaries 10.5–10.6, PDF pp. 41–42 / printed pp. 37–38: [author-hosted scan](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf). The scanned argument states the factorial divisibility bounds, counts common row-reversal tabloids, and uses the integral standard basis. The local proof must still justify the common-support count with the repository's labelled-row convention.
- Stacks Project, [Definition 31.14.1 and Lemma 31.14.2](https://stacks.math.columbia.edu/tag/01WQ): an effective Cartier divisor is a closed subscheme with invertible ideal and is locally cut out by a nonzerodivisor, including the empty complement case. The current closed-immersion item has this local condition.

## Completed focused findings

- `lem-specht-gram-gcd-detects-p-regularity` (batch 23, level 2): The refuter's first finding is correct: the old row relabelling formula was a right action. The current proof now writes `T\star\pi` and verifies the right-action identity. The second finding is also correct: equality of row sets alone does not imply the two column permutations agree. New step 1.4 proves that a common tabloid's rows use labels from original rows of the same length by descending through the two column orders, then uses the unique entry per column in each target row to deduce equality. Step 1.5 also repairs an undefined `u` to `t`. The Statement and Definition are unchanged. The batch-23 proof contract derivations 1.1, 1.4 and 2.1 were updated. Reflow and precheck passed after the proof edits.
- `ex-isotypic-projections-for-a-finite-group-as-a-compact-group` (batch 15, level 5): The refuter correctly identified a missing closedness argument. The trivial-type fixed space equals the intersection of kernels of the bounded maps `π(g)-I`, hence is closed; its span of fixed lines equals the fixed space. Proof step 6.1 and the batch-15 derivation were updated. The Example claim is unchanged. Reflow and precheck passed.
- Batch-5 B-page prose now explicitly says AC and a normal proper integral curve. This is later than the reader post snapshot. The reader and refuter identified the same earlier overstrong summary; the present page repairs it. The A-page summary retains DC for the cycle map and AC for injectivity and the locally factorial isomorphism.
- `thm-effective-cartier-divisor-closed-immersion`: the current file contains [F8] with the affine-neighbourhood fact and has no dangling [F8] references. Its current item hash differs from the reader post snapshot, consistent with a later repair. The reader's affine-overlap and datum-independence repairs remain present. The theorem's local content agrees with Stacks Project Lemma 31.14.2; a final risk review remains due.

## Remaining work

Read the other routed carriers and cited dependencies in group item order; finish the per-item HIGH/CRITICAL risk reviews; classify all touched, page, reader and refuter obligations; add closed defect-ledger rows; write the decisions JSON; then run the batch risk reports with `--require-reviewed` and focused checks. The B-page and [F8] findings were already repaired in the current carriers, so any decision must distinguish observed historical hashes from current carrier hashes.

## Level 0 review checkpoint

The fifteen level-0 carriers in the generated order have current HIGH/CRITICAL risk reviews in their owning contracts. The divisor definitions keep their Noetherian, normal, AC and finite-support boundaries; the compact-group definitions distinguish scalar and weak operator integration, with AC/Countable Choice where needed; the integral Specht definition proves a split lattice before arbitrary-ring base change. The two touched compact-operator lemmas are mathematically sound in their reader-post form: the convolution kernel is obtained by an $L^2$ isometry and the finite-rank orbit is a finite sum of rank-one orbits. The integral Specht carrier itself is unchanged between pre and post; its contract has an audit correction identifying [F7] as the triangular leading-coefficient input. Source and dependency details appear in the contracts and reader reports. Next is level 1.

## Later source and hypothesis checks

- [Stacks Project Lemma 31.28.6, tag 0BE8](https://stacks.math.columbia.edu/tag/0BE8): for a locally Noetherian integral normal scheme, the Picard-to-class-group map is injective. Its proof uses the height-one local intersection to turn a zero cycle into a unit equation; this is the exact role of `lem-cartier-to-weil-injective-normal` under its local AC assumptions.
- [Stacks Project Lemma 31.16.7, tag 0AGA](https://stacks.math.columbia.edu/tag/0AGA): a codimension-one integral closed subscheme is effective Cartier when the local rings along it are UFDs. [Lemma 31.28.7, tag 0BE9](https://stacks.math.columbia.edu/tag/0BE9) concludes that Picard and class groups agree when all local rings are UFDs. The authored theorem proves the prime-ideal spreading step and states the extra AC/DC conventions of this library.
- [Kowalski, Theorem 5.2.11(1), PDF pp. 224–225](https://people.math.ethz.ch/~kowalski/representation-theory.pdf): a continuous finite-dimensional representation of a compact group is unitarizable by Haar averaging, with positivity from a nonzero continuous value at identity; this matches the assigned averaging and complete-reducibility route. The same notes, Example 5.2.4(1), PDF p. 218, gives normalized finite-group Haar mass $1/|F|$.
- [Stacks Project §53.17, tag 0C1Y](https://stacks.math.columbia.edu/tag/0C1Y): for a smooth projective positive-genus curve over an algebraically closed field, degree-zero Picard classes can be nontrivial (the section computes nonzero torsion in `Pic^0`). Thus the earlier claim that principal divisors exhaust the degree kernel was false. The corollary's theorem and proof needed no change; its final remark was narrowed.

## Additional risk-review repairs

- `lem-global-section-effective-divisor`: a regular section can vanish at points; injectivity of `O_X → L` only prevents it from being identically zero on a nonempty open. The final remark now says exactly that. The Statement and proof already allow a nonzerodivisor equation vanishing at a closed point.
- `cor-degree-descends-picard-curve`: principal divisors have degree zero, but the kernel of degree can contain nonprincipal divisors. The final remark no longer identifies those two groups; the descent proof is unchanged.
- `thm-cartier-divisors-mod-principal-to-picard`: proof 1.3 and its contract now identify `a ↦ af^{-1}` as multiplication by `f^{-1}`.
- `lem-compact-convolution-operators-are-hilbert-schmidt`: its A1 use is now explicit at proof 4.1, citation quotes and use lists match current suppliers, and the contract boundary no longer describes the older almost-everywhere subsequence argument.

## Decision inventory

The JSON decision file covers all 17 obligations routed by the three scope files. Two additional mathematical defects found during mandatory risk reviews are recorded through the tool's supplemental `gate:` route so their closed 5a ledger rows have matching decisions; neither came from a mechanical gate diagnostic. The decisions carry one row per reader/refuter finding, with the duplicate B-page reader/refuter finding sharing its one row. The table records verdicts; exact evidence and defect IDs are in the decisions JSON.

| Obligation | Verdict |
| --- | --- |
| `touched:5:thm-effective-cartier-divisor-closed-immersion` | `amended_repair` |
| `touched:5:cex-pullback-weil-divisor-undefined` | `accepted_repair` |
| `touched:5:ex-divisor-cusp-normalization-pullback` | `amended_repair` |
| `touched:5:lem-cartier-to-weil-injective-normal` | `accepted_repair` |
| `touched:5:thm-cartier-divisors-mod-principal-to-picard` | `amended_repair` |
| `touched:5:thm-cartier-weil-isomorphism-locally-factorial` | `accepted_repair` |
| `touched:5:ex-effective-divisor-thickened-points-curve` | `accepted_repair` |
| `page:5:cartier-and-weil-divisors-line-bundles-and-picard-groups` | `accepted_repair` |
| `reader:5:1` | `confirmed_nonfatal` |
| `refuter:5:1` | `confirmed_nonfatal` |
| `refuter:5:2` | `confirmed_fatal` |
| `touched:15:lem-compact-convolution-operators-are-hilbert-schmidt` | `reviewed_no_defect` |
| `touched:15:lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous` | `reviewed_no_defect` |
| `refuter:15:1` | `confirmed_nonfatal` |
| `touched:23:def-integral-specht-lattice-and-base-change` | `amended_repair` |
| `refuter:23:1` | `confirmed_nonfatal` |
| `refuter:23:2` | `confirmed_fatal` |
| `gate:frontier-37-owner-30-5a-g-regular-section-vanishes` | `confirmed_nonfatal` |
| `gate:frontier-37-owner-30-5a-g-degree-kernel` | `confirmed_nonfatal` |

## Checks and remaining ownership

- `risk-report.mjs` ran on batch contracts 5, 15 and 23 both before reviews and with `--require-reviewed` after them: 42/42, 18/18 and 18/18 HIGH/CRITICAL items have complete item-specific reviews; each final run exited 0 with no errors.
- Strict proof-contract checks: batch 5 passed 46/46 with no errors or warnings; batch 15 passed 18/18 with no errors or warnings after citation and boundary reconciliation; batch 23 passed 18/18 with no errors and one existing `shotgun-bracket` warning on the James submodule theorem. No mathematical issue was inferred from that warning.
- Reflow and precheck of fourteen touched or newly edited items: all fourteen prechecks passed. Targeted rendercheck of seven edited items and both divisor pages passed. Direct finite enumeration of the row-reversal common supports for every partition of `n ≤ 6` agreed with `U_λ` and uniqueness of the two column permutations; the proof itself is the descending-column argument in item step 1.4.
- `step5-scope.mjs check --phase adjudicate --batch 5` reported only nineteen missing `subject_sha256` stamps, one for each decision. The dispatch forbids Alpha from stamping; the engine owns that step. No gate or judge was run.
- `defect-ledger.mjs append` validated and appended the seventeen group-g closed defect rows, then regenerated the ledger view. A run-wide `defect-ledger.mjs validate --run frontier-37-owner-30` currently reports two schema errors in another group's row `frontier-37-owner-30-5a-a-kronecker-power-conjugates` (invalid location enum and evidence entry without a path). That row is outside this dispatch; none of the seventeen group-g rows was reported invalid.
- The three owned cross-batch dependency inputs remain empty arrays; no Statement or Definition was changed by this adjudication, so no consumer propagation was required. No defective published carrier was found in the cited dependencies opened for this group, so the published-consumer ledger was left unchanged. No owner escalation or proposed withdrawal arose from this group's mathematics.
