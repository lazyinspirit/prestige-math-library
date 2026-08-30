# Step 8 closure recovery — group d, rejudge round 1

## Scope and outcomes

The authoritative repair envelope assigned five current unadjudicated tuples
owned by group d. All five were read against their current item text and cited
dependencies: three are `confirmed_fatal`, one is `confirmed_nonfatal`, and one
is `false_positive`.

| item | context_sha256 | outcome | basis |
|---|---|---|---|
| `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `f46f8c618a181aec0eda876af7de1cefb950246ffe3119d4f073619fe1ec39b6` | `confirmed_fatal` | Fact L1 dropped the cited definition's context-free language domain and its quantifier over context-free grammars. |
| `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `2065515cab5d1e290ec1def7337c94696e5a0b2f4f6d28257a1024e90fa41205` | `confirmed_fatal` | Fact L1 made the same two domain and quantifier truncations, producing a stronger statement than the cited definition. |
| `thm-chomsky-normal-form` | `79967e960e4323df702e479243ab63d897861e1fbd006ead703da7274de3eb65` | `confirmed_fatal` | Step 1.1 falsely said every variable of the intermediate grammar is useful, which is impossible for the start variable in the empty-language case. |
| `thm-elimination-of-unit-productions` | `1fbbe304f6e553e813169da0ed7d9b8b3d627ff573f3489d98784bf0289877fb` | `confirmed_nonfatal` | Rewrites at distinct variable occurrences commute, so the unit-chain steps can be moved together before compression. This is the immediate standard proof-step closure the theorem uses. |
| `thm-elimination-of-useless-symbols` | `0fade47f84ff925cfd141cc8fbe9948c4a87fa92f1fb30ea3b07a0cf545eca16` | `false_positive` | Fact L1 directly links the exact definition of nullable, generating, reachable, and useful variables. It abbreviates rather than alters those derivability conditions, and each proof use is within the cited CFG domain. |

## Licensed repairs

1. `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`
   now states L1 only for a context-free language and only over context-free
   grammars.
2. `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`
   restores the same two restrictions.
3. `thm-chomsky-normal-form` removes the unused false usefulness conclusion
   from step 1.1 while retaining the nonunit and epsilon-production properties
   required by the remainder of the proof.

These three changed items are the only rejudge targets from this recovery.
Their prior current verdict contexts are stale by construction. The engine owns
any permitted next rejudge cycle.

## Evidence and checks

- Appended five exact adjudication rows carrying the pre-edit guard hashes from
  the five current item states.
- Added three matching rejudge defect rows through
  `tools/defect-ledger.mjs`; the append validator accepted all three and
  regenerated the ledger view.
- Focused precheck passed on all three repaired proof-bearing items.
- Focused render check passed on all three repaired items.
- Strict focused proof-contract validation passed on all three repaired items
  with zero errors and zero warnings.
- Batch-10 citation fidelity checked 53 citations with zero missing quotes and
  zero widening candidates.
- The exact evidence join found all five assigned tuples and their outcomes,
  with no malformed or surplus adjudication rows.
- Focused batch-10 judge closure exited 0 with no errors. The three changed
  items are correctly reported as pending current-text rejudge targets; the two
  unchanged rejection rows are closed by their exact nonfatal outcomes.
- Step-8 scope check exited 0 with 493 items partitioned, zero open rejection
  rows, and zero cross-group alerts.
- The whole-run defect check recognized all three group-d rejudge rows but
  exited 1 because ten confirmed-fatal repairs owned by other groups still lack
  defect rows: `def-permutation-matrix-partial-pivoting-and-pivot-growth`,
  `def-real-and-complex-givens-transformations`,
  `def-velocity-derivation-of-a-smooth-curve`,
  `ex-the-tangent-bundle-of-the-circle-is-a-cylinder`,
  `ex-the-tangent-space-of-the-sphere-from-curve-velocities`,
  `lem-chart-bump-at-a-point-with-prescribed-support`,
  `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors`,
  `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`,
  `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure`, and
  `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`. No
  whole-run defect-check pass is claimed.

## Alerts and blockers

There were no incoming alerts, no outgoing cross-group mathematical finding,
and no published-item repair. Group d has no mathematical, ownership, or access
blocker. Whole-run closure still depends on the out-of-group tuples assigned by
the envelope to their respective owners and on the ten missing out-of-group
defect rows named above; none was modified or adjudicated here.

## Changed artifacts

- `items/cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language.md`
- `items/fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language.md`
- `items/thm-chomsky-normal-form.md`
- `research/frontier-24-judge-adjudications.jsonl` (five appended rows)
- `research/frontier-24-alpha-step8-closure-recovery-d-defect-rows.json`
- `research/defect-ledger.jsonl` and its generated view
- this report
