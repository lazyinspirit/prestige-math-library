# Frontier-22 group b — Step 10 readiness re-attestation, round 2

## Outcomes

| item | outcome | evidence and disposition |
|---|---|---|
| `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` | `confirmed_nonfatal` | Step 2.1 proves one direction explicitly. The reverse is immediate from the same displayed product: if an inclusion-minimal family member `p_i` contained a smaller prime `q` over `I`, primality of `q` and `p_1...p_r subseteq I` would give `p_j subseteq q subsetneq p_i`, contradicting family-minimality. No claim or witness changes. No edit. |
| `ex-embedded-component-varies-but-radical-does-not` | `confirmed_fatal` | The proof used that `k` is a field without declaring it. The Example and Given data now explicitly let `k` be a field before using its ideal structure, Noetherianity, and primality of `(x)`. Ledger `frontier-22-S10R2-b-001`. |
| `ex-primary-localisation-kills-a-component` | `confirmed_fatal` | The proof likewise used an undeclared field hypothesis. The Example and Given data now explicitly let `k` be a field before deriving that `k[x,y]` is Noetherian and localizing at its primes. Ledger `frontier-22-S10R2-b-002`. |
| `lem-localisation-of-a-primary-submodule` | `confirmed_fatal` | The Statement and Given data did not make the primary radical `p` prime, although every application of L1 and the localized-prime argument needs it. Added the prime-ideal hypothesis. Ledger `frontier-22-S10R2-b-003`. |
| `lem-primary-decomposition-combine-equal-radicals` | `confirmed_fatal` | L1 requires a prime common radical, but the decomposition did not supply prime component radicals. The Statement and Given data now require each component to be `p_i`-primary for a prime `p_i`, and combine only a nonempty equal-prime block. Ledger `frontier-22-S10R2-b-004`. |
| `thm-isolated-primary-components-are-unique` | `confirmed_fatal` | Localization and contraction recovered the component only for a fixed prime; uniqueness across decompositions lacked first uniqueness. Added that dependency and used it to show the prime is intrinsic and occurs in every minimal decomposition before comparing the recovered components. Ledger `frontier-22-S10R2-b-005`. |
| `thm-primary-submodule-characterisations` | `confirmed_nonfatal` | Step 1.1 omits L1 from its final tag when saying elements of associated primes are zero divisors. L1 states exactly that the zero divisors are the union of the associated primes, so this is an immediate proof-tag completion and the argument is correct. No edit. |

Outcome totals: 5 `confirmed_fatal`, 2 `confirmed_nonfatal`, 0 `false_positive`.

## Rejudge targets

The supervising session must replay exactly these repaired ids:

- `ex-embedded-component-varies-but-radical-does-not`
- `ex-primary-localisation-kills-a-component`
- `lem-localisation-of-a-primary-submodule`
- `lem-primary-decomposition-combine-equal-radicals`
- `thm-isolated-primary-components-are-unique`

No rejudge was initiated in this dispatch.

## Artifacts and checks

- Appended all seven exact outcomes to `research/frontier-22-judge-adjudications.jsonl` with their pre-edit guard hashes.
- Appended five matching defect rows to `research/defect-ledger.jsonl`; the append interface regenerated `research/DEFECT-LEDGER.md`.
- Synchronized the five repaired contracts and the two downstream exact source quotes in `research/frontier-22-batch-2.proof-contracts.json`, then regenerated `research/frontier-22-proof-contracts.json`.
- Focused precheck passed 5/5 repaired proof-bearing items.
- Focused render check passed 5/5 repaired items.
- Strict focused proof contracts passed 5/5; the full batch-2 contract passed 42/42.
- Batch-2 citation fidelity reported 118 citations, no missing quote, and no widening candidate.
- Batch-2 required risk review passed with no missing review.
- Defect-ledger validation passed for the run.
- `git diff --check` passed.
- All five repaired items remain `status: draft` and carry no stale judge stamp.

## Blockers

None. The five repaired ids await the supervising session's targeted replay.
