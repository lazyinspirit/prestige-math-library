# Step-3b Markov proof-contract repairs

Run: `frontier-37-owner-30` · batch 1 · audited 2026-09-30 UTC

## Scope and result

Repaired and re-audited exactly these five assigned items:

- `lem-return-cycle-occupation-measure-and-minimality`
- `thm-kac-return-time-formula-for-a-positive-mass-set`
- `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`
- `thm-markov-chain-ergodic-theorem`
- `cex-a-null-recurrent-chain-has-no-stationary-probability`

Each proof was checked against its declared suppliers. The actual arguments support the promised claims; no fatal mathematical defect or unresolved supplier route remains in these five items. The owner review did not presume a TV defect: with the sup-over-events convention, the countable-state distance is half the \(\ell^1\) sum, and the deterministic two-cycle has distance \(1/2\) at every time.

## Repairs by item

| Item | Exact repair and audited route |
|---|---|
| Return-cycle occupation lemma | The survival-mass display now includes avoidance of `b` through the terminal time, so `alpha_n(b)=0` for `n>=1` follows correctly. The recursion partitions `{T_b^+>n, X_{n+1}=y}` by `X_n` while retaining the survival event. The minimality induction now cites Tonelli where it reassociates countable nonnegative `Q`-matrix sums. The absorbing boundary is split into the finite-path, occupation, and matrix computations at the facts each uses. The pointwise minimality claim remains one-way. |
| Set Kac formula | Rechecked positivity of `pi(A)`, reverse-kernel irreducibility, finite-segment time reversal, reverse-chain hitting, and the nonnegative tail sum. The proof reverses only finite segments; `T_A^+=infinity` is never evaluated as `X_infinity`. AC tags now occur at the AC-qualified positive-recurrence, reversal, and recurrent-class suppliers; local boundary statements are mapped separately. |
| TV convergence | Rechecked uniqueness, product-chain irreducibility and invariant law, recurrence, diagonal hitting, strong-Markov gluing, and finite-subset truncation. The proof now defines the product kernel before use and explicitly derives its n-step factorization by Tonelli and matrix Chapman–Kolmogorov; its direct dependency and exact A-page item row now include `lem-matrix-chapman-kolmogorov-equations`, already present transitively through the eventual-positive-return lemma. It states only the coordinate marginal Markov and stationarity facts it uses; independence is not needed. The TV definition and half-\(\ell^1\) formula agree, and the two-cycle calculation is correct. |
| Markov ergodic theorem | Rechecked iid return blocks, Kac occupation, integrability of signed rewards, the cycle-length/reward SLLN, and the completed-cycle sandwich. The MCT argument now spells out increasing finite-state truncations of the nonnegative occupation reward. Positive/negative and complex reductions remain valid; no aperiodicity is used. |
| Null-recurrent counterexample | The item statement now explicitly assumes AC for the canonical walk law, matching its existing batch manifest row and the AC-qualified recurrence/positive-recurrence routes. In the `c<0` case, `pi(k)->infinity` as `k->-infinity` contradicts `pi(k)<=1`, rather than contradicting nonnegativity. The stationary row computation itself remains choice-free. An item-link scan found no item consumers. |

The exact TV convergence item row in `research/frontier-37-owner-30-batch-1.pages.json` gained the direct CK dependency above; no other manifest row changed. The batch-1 coverage file was unchanged. For the null-recurrence counterexample, before repair its `Statement refuted` paragraph was: “Simple symmetric nearest-neighbor random walk on $\mathbb Z$ ([[def-simple-symmetric-walk-on-zd]]) is recurrent, but it has no invariant probability distribution. Consequently every state is null recurrent ([[def-positive-recurrent-and-null-recurrent-state]]) and $\mathbb E_kT_k^+=+\infty$ for every $k\in\mathbb Z$. Thus positive recurrence is strictly stronger than recurrence, and a recurrent chain need not admit a stationary probability.” After repair, the exact sentence “Assume AC for the canonical walk law.” was prepended; the quoted paragraph is otherwise unchanged. Its B-page row already said “Assume AC for the canonical walk law.” This now agrees with Given/F2/F4 and their actual applications. `rg -n '\[\[cex-a-null-recurrent-chain-has-no-stationary-probability\]\]' items --glob '*.md'` returned no matches, so no item consumes the counterexample. The paired A-page sufficient scope receipt remains current at SHA-256 `868b146b1ebc85fdacdec8b628ae21fc228ff1151342db6415750651cbc8f66d`; the proof/dependency edits did not change its scope hash.

## Proof-contract and local checks

The initial strict diagnostics were exactly the five assigned shotgun-bracket findings: lemma `5.1` cited `6/6` facts with `3` uncited steps; set Kac `6.1` cited `6/8` with `2` uncited steps; TV convergence `9.1` cited `7/9` with `4` uncited steps; ergodic theorem `8.1` cited `4/7` with `3` uncited steps; and the counterexample `5.1` cited `4/7` with `2` uncited steps. The exact step citations and fact uses were repaired; unrelated citations were not moved to silence the findings.

After canonical precheck normalization, all five target contract rows were regenerated with `tools/regen-contract-entries.mjs`; the other 27 rows and the 32-item scope were preserved. Final commands and outputs:

```text
node tools/tsx-run.mjs tools/precheck.mts items/lem-return-cycle-occupation-measure-and-minimality.md items/thm-kac-return-time-formula-for-a-positive-mass-set.md items/thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains.md items/thm-markov-chain-ergodic-theorem.md items/cex-a-null-recurrent-chain-has-no-stationary-probability.md
PASS on all five; 5 checked, 0 failing — all clean

node tools/rendercheck.mjs items/lem-return-cycle-occupation-measure-and-minimality.md items/thm-kac-return-time-formula-for-a-positive-mass-set.md items/thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains.md items/thm-markov-chain-ergodic-theorem.md items/cex-a-null-recurrent-chain-has-no-stationary-probability.md
OK — 5 files; real KaTeX and YAML checks passed

node tools/tsx-run.mjs tools/proof-contract.mjs research/frontier-37-owner-30-batch-1.proof-contracts.json --strict --items lem-return-cycle-occupation-measure-and-minimality,thm-kac-return-time-formula-for-a-positive-mass-set,thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains,thm-markov-chain-ergodic-theorem,cex-a-null-recurrent-chain-has-no-stationary-probability --json
{"ok":true,"errors":[],"warnings":[],"scope":["lem-return-cycle-occupation-measure-and-minimality","thm-kac-return-time-formula-for-a-positive-mass-set","thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains","thm-markov-chain-ergodic-theorem","cex-a-null-recurrent-chain-has-no-stationary-probability"],"checked":["lem-return-cycle-occupation-measure-and-minimality","thm-kac-return-time-formula-for-a-positive-mass-set","thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains","thm-markov-chain-ergodic-theorem","cex-a-null-recurrent-chain-has-no-stationary-probability"]}

node tools/tsx-run.mjs tools/proof-contract.mjs research/frontier-37-owner-30-batch-1.proof-contracts.json --strict --json
Output: `ok=true`, `errors=[]`, `warnings=[]`, 32 batch-1 IDs checked.
```

Post-dependency-row structural checks also passed: batch-1 `manifest-deps` reported 32 items and zero missing/error entries; the dependency-level calculation reported no batch-1 errors and the convergence theorem remained at level 2; `audit-manifest` reported 180 edges, 118 published-backward, 62 same-batch, and zero unresolved. The final read-only Step 3 decision scan at `2026-09-30T12:40:25.479Z` found all five target item decisions `repaired`, confidence 1, current and closed; the paired sufficient scope receipt was current.

The original five non-owner item decisions were refreshed only after the audits, each as `repaired`, `confidence: 1`, with its existing examined dependency list. All five now hash-match and close as non-owner decisions. No `--owner` receipt, baseline, transition, retry, dispatch, commit, shared plan, published item, or engine state was changed.

## Handoff: downstream hashes

At the batch-1 scan at `2026-09-30T12:40:25.479Z`, ten downstream item decisions had stale transitive hashes. All ten were non-owner review receipts (`repaired` or `accept`, confidence 1), with no owner receipt present, whose stored hashes no longer matched current inputs. The shared run is live, so root should recompute before refreshing them. I did not change any of these decisions or items.

| Stale batch-1 decision | Owned proof inputs in its dependency closure |
|---|---|
| `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains` | return-cycle occupation lemma |
| `thm-kac-return-time-formula-for-a-state` | return-cycle occupation lemma |
| `cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain` | return-cycle occupation lemma |
| `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains` | return-cycle occupation lemma; Markov ergodic theorem |
| `cor-stationary-irreducible-markov-shift-is-ergodic` | return-cycle occupation lemma |
| `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages` | return-cycle occupation lemma; TV convergence theorem; Markov ergodic theorem |
| `ex-stationary-law-of-a-two-state-chain` | return-cycle occupation lemma |
| `ex-empirical-state-frequencies-converge-to-stationary-masses` | return-cycle occupation lemma; Markov ergodic theorem |
| `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence` | return-cycle occupation lemma; Markov ergodic theorem |
| `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence` | return-cycle occupation lemma; Markov ergodic theorem |

These are receipt-hash refreshes, not changes to the ten consumer statements. Their current dependency closures contain edited supplier proof/citation inputs: the return-cycle lemma for all ten; the Markov ergodic theorem for `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains`, `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages`, `ex-empirical-state-frequencies-converge-to-stationary-masses`, `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`, and `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`; and the TV convergence theorem for the reminder. The reminder’s transitive input also includes the convergence row’s direct-dependency metadata update. No consumer claim statement or prerequisite claim interface changed. The counterexample’s explicit AC statement matches its pre-existing manifest statement and has no item consumers, so it creates no downstream item-interface refresh. Root should recompute the exact stale list before refreshing receipts because other run work is concurrent.

## Run status and unresolved routes

The latest recomputed autopilot status at `2026-09-30T12:41:22.251Z` showed the run `running`, with Step 3a gates not yet run, Step 3b authoring `16/30` covered, outstanding blockers/artifact gaps in other pairs, and other authors' processes in flight. No run controls were used. Those issues remain with the root owner; this handoff closes only the five assigned Markov proof-contract repairs.

No proof route remains unresolved for these five items. The actual local suppliers were checked, Choice assumptions were matched at their invocation sites, the two-cycle TV boundary was retained as correct, and all five final strict contract rows pass.

## Authorized uniqueness repair, martingale-limit supplier audit, and consumer refresh — 2026-09-30

Root authorized exact repairs to the TV-convergence theorem and stationary-shift ergodicity corollary after the changing-basepoint uniqueness argument was checked and found invalid. In each old step 1.1, a stationary law built from a chosen state `b` depended on `b`; the subsequent inequalities did not compare one fixed probability vector at every coordinate. Both proofs now retain the promised uniqueness conclusion by using the current statewise Kac theorem. Positive recurrence supplies one invariant probability `pi_*`. For an arbitrary invariant probability `rho` and each fixed `y`, Kac applied to both laws gives `pi_*(y) = 1/E_y T_y+ = rho(y)`. Equality at every `y` proves equality of the laws. The convergence theorem cites Kac as new fact `[F10]`; the corollary cites it as `[F11]`. Their Statements are unchanged.

Before the authorized state-Kac correction, its fact `[F4]` attributed both the one-step invariant equation and its `n`-step iteration to the invariant-distribution definition. That definition supplies the one-step matrix equation. `[F4]` now states only that equation; proof step 4.1 independently proves invariance of the defect measure and derives the `n`-step identity using Chapman–Kolmogorov `[F5]` and Tonelli `[F6]`. The Kac Statement and dependency list did not change; only its exact proof-contract entry was regenerated. Its one-item precheck, rendercheck, and exact strict contract check passed, and the subsequently rerun full 32-item strict contract check also passed.

At root's request, I audited the ergodicity proof's bounded martingale limit route against the actual published suppliers. Step 6.1 had invoked bounded convergence without a direct Fact or dependency. Root authorized adding `thm-dominated-convergence`: new `[F12]` records the exact specialization under `P_x` with measurable sequence `h(X_{T_y∧n})`, almost-sure limit `h(y)`, and integrable constant majorant `1`. Step 6.1 now maps that supplier directly. The existing AC assumption remains explicit. I also read the proof route behind the cited Lévy upward theorem: conditional expectations of one fixed `L1` variable form a martingale, are uniformly integrable, and the closed-martingale result obtains the a.s./`L1` limit from UI martingale convergence; the monotone-class step identifies that limit by its event integrals as the conditional expectation on `F_infinity`. This supports exactly the conditional limit used in step 7.1. No further defect was found in the martingale or stopping-time routes.

For the later uniqueness/DCT repairs, the edited carriers were the TV theorem and shift corollary files, their two selected item rows in the batch-1 page manifest, their proof-contract entries, and the five stale ordinary review receipts itemized below; no coverage row changed. The corollary's selected manifest row also gained the published dominated-convergence dependency. The TV theorem and corollary moved from dependency level 2 to 3 due to the in-batch Kac-state prerequisite; the published dominated-convergence edge did not raise the corollary further. The Kac-state F4 correction is proof-only. No dependency cycle was introduced.

Final local command results on the repaired two items:

```text
node tools/tsx-run.mjs tools/precheck.mts items/thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains.md items/cor-stationary-irreducible-markov-shift-is-ergodic.md
2 checked, 0 failing — all clean

node tools/rendercheck.mjs items/thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains.md items/cor-stationary-irreducible-markov-shift-is-ergodic.md
OK — 2 file(s); real KaTeX and YAML checks passed

node tools/proof-contract.mjs research/frontier-37-owner-30-batch-1.proof-contracts.json --strict --items thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains,cor-stationary-irreducible-markov-shift-is-ergodic --json
ok=true; errors=[]; warnings=[]; 2 selected items checked

node tools/proof-contract.mjs research/frontier-37-owner-30-batch-1.proof-contracts.json --strict --json
ok=true; errors=[]; warnings=[]; all 32 batch-1 items checked

node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-1.pages.json
32 items, 0 missing dependencies arrays, 0 errors

node tools/item-dependency-levels.mjs check --run frontier-37-owner-30
812 items across 60 pages checked; maximum level 24; exit 0
```

The initial stale-receipt snapshot at `2026-09-30T12:40:25Z` listed these ten downstream decisions. Each consumer item and actual supplier route was audited, and each ordinary non-owner receipt is now current, confidence `1`:

| Decision | Hash-invalidated inputs | Current review |
|---|---|---|
| `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains` | Return-cycle occupation lemma proof | `accept`, current |
| `thm-kac-return-time-formula-for-a-state` | Return-cycle occupation lemma proof; then the authorized Kac F4 proof correction was also audited | `accept`, current |
| `cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain` | Return-cycle/Kac proof hashes; its proof correctly applies the Kac identity to both laws at each state | `accept`, current |
| `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains` | Return-cycle lemma and Markov-chain ergodic theorem proof hashes | `accept`, current |
| `cor-stationary-irreducible-markov-shift-is-ergodic` | Return-cycle lemma hash and its own authorized uniqueness/DCT proof and dependency edits | `repaired`, current |
| `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages` | Return-cycle, TV-convergence, and Markov-chain ergodic proof/dependency hashes | `accept`, current |
| `ex-stationary-law-of-a-two-state-chain` | Transitive Kac/uniqueness proof hashes | `accept`, current |
| `ex-empirical-state-frequencies-converge-to-stationary-masses` | Return-cycle lemma and Markov-chain ergodic theorem proof hashes | `accept`, current |
| `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence` | Return-cycle lemma and Markov-chain ergodic theorem proof hashes | `accept`, current |
| `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence` | Return-cycle lemma and Markov-chain ergodic theorem proof hashes | `accept`, current |

The Kac-state proof correction additionally invalidated `thm-markov-chain-ergodic-theorem`'s receipt; that unchanged item was reaudited against the current Kac statement/proof and its full return-cycle argument, then refreshed as non-owner `accept`, confidence `1`. The authorized TV-convergence theorem was reaudited and refreshed as non-owner `repaired`, confidence `1`. A read-only batch-1 `itemDecision` scan at `2026-09-30T13:15:37.297Z` found all `32/32` decisions closed and an empty open list.

These hash refreshes do not mask claim-interface changes: the TV-convergence and shift-ergodicity Statements and all downstream consumer Statements/Definitions remain unchanged. The added Kac and dominated-convergence edges make existing proof uses explicit, and the related receipt refreshes were required by changed transitive proof/dependency hashes. The null-recurrence counterexample's `Statement refuted` now explicitly includes AC, matching its existing B-page row; an item-link scan found no item consumers, so this scoped statement-interface clarification has no downstream item review. No additional consumer carrier edit is required. The only proof routes still outside this handoff are root's integration and run-gate obligations; none of the assigned Markov proof routes remains unresolved.
