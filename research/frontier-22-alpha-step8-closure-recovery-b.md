# Frontier-22 group b — Step-8 rejudge adjudication recovery

## Rows handled

| item | context | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `cor-dominated-convergence-is-a-vitali-corollary` | `32d16d277d33e43066d7f5e3a2b024b4f072c4ef38e6b31de6a76828e44e8812` | `58fd126b5af0b6423cc5052eba5d8594647a12e752048ddb5479f09ad651e811` | `confirmed_fatal` | Step 2.2 asserted a false equality: the superlevel set of the tail-supported function also intersects `X\setminus X_m`. Replaced it by the exact intersection identity. Ledger `frontier-22-S8R1-b-001`. |
| `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` | `33328bbbf66ddbd92689abbbc3c3d76877ff0b653018bd23a9787e5594f944af` | `5ec861f564b62954b282dad5ef1e5d2d517635d8b2273149bd6c3b99d6e986e2` | `confirmed_nonfatal` | The closedness sentence omits the elementary observation `F=[0,1]\cap(\mathbb R\setminus U)`, an intersection of two closed sets. The claim and construction are correct, and a competent reader closes the step immediately. No edit. |
| `ex-redundant-primary-component-deletion` | `4398256c6a4a627d2e0cc0cbb69aff5414f8c0a1e655a99e3dcd50d7cd96af86` | `a8a3e06e7d6e7b80e6b1f1242a065fd2f6f7bf9e344f3b1ca23957b43b2d5d3a` | `confirmed_fatal` | Fact L2 stated the cited equal-radical lemma without its Noetherian-ring and finitely-generated-module hypotheses. Restored both hypotheses. Ledger `frontier-22-S8R1-b-002`. |
| `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | `97822e44048f55f36e410280a79f0e758eb9c19ca30846086a22a171f14412d9` | `14b3194c9557a007bc1d63f5fd3af4cf996065d867c939a2889b03eeb3183214` | `confirmed_nonfatal` | Step 2.2 treats `0<\varepsilon<1`; for `\varepsilon\ge1` the bad set is empty because each function is indicator-valued. This is an immediate boundary completion and changes no claim or witness. No edit. |
| `fs-convergence-in-measure-implies-almost-everywhere-convergence` | `001d2cad733cb586e16b3f944ad3405f10a260d76964afcbb820c5ea0a492fe0` | `35c028fdba9100af61cea41885fb4a7b1a958e70417db38e12dc6de367026382` | `confirmed_nonfatal` | The same indicator-valued `\varepsilon\ge1` case is omitted and closes immediately because the bad set is empty. The counterexample remains valid. No edit. |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence` | `7a2e5ff21195734e733b02cdde43e2bd393073a44a59d0d3bc09e2035186726d` | `e6f1c57053a346ad117750314293f65539b5f5484e22705f6ea1697cad39aa00` | `confirmed_nonfatal` | The table's typewriter witness is correct; its companion proof omits only the immediate indicator-valued `\varepsilon\ge1` case. No item-level claim is false. No edit. |
| `thm-lasker-noether-primary-decomposition` | `adc871af5a08fd4077c21d2534641fb256c2aa8678b96ae1a19d03f5d53ee052` | `99069dbac24ec628866b993522c8de0ace7b565476a37f720ed2bebb523c9b54` | `confirmed_fatal` | Fact L5 stated the cited equal-radical lemma without its Noetherian-ring and finitely-generated-module hypotheses. Restored both hypotheses. Ledger `frontier-22-S8R1-b-003`. |

## Licensed repairs and rejudge targets

The three `confirmed_fatal` rows license exactly these repairs and rejudge targets:

- `cor-dominated-convergence-is-a-vitali-corollary`
- `ex-redundant-primary-component-deletion`
- `thm-lasker-noether-primary-decomposition`

The repairs are minimal. The batch-5 and merged proof-contract rows for the changed dominated-convergence step were synchronized. The two citation repairs do not alter proof-step text or source quotes, so their existing contracts remain current. These items now require the engine's next targeted rejudge; no judge sweep or stage transition was initiated here.

## Cross-group alerts

None. Every mathematical dependency opened for these decisions was either published or owned by group b, and no other-group mathematical defect was found.

## Changed files

- `items/cor-dominated-convergence-is-a-vitali-corollary.md`
- `items/ex-redundant-primary-component-deletion.md`
- `items/thm-lasker-noether-primary-decomposition.md`
- `research/frontier-22-batch-5.proof-contracts.json`
- `research/frontier-22-proof-contracts.json`
- `research/frontier-22-judge-adjudications.jsonl`
- `research/defect-ledger.jsonl`
- `research/DEFECT-LEDGER.md`
- `research/frontier-22-alpha-step8-closure-recovery-b.md`

## Checks

- Focused precheck: 3/3 repaired proof-bearing items passed.
- Focused render check: 3/3 repaired items passed.
- Strict proof contract: 2/2 affected batch-2 items and 1/1 affected batch-5 item passed.
- Citation fidelity over batches 2 and 5: 225 citations, no missing quote and no widening candidate.
- Dependency check: passed with pre-existing warnings only.
- Defect-ledger validation for `frontier-22`: 310 rows checked, 0 errors.
- Exact group-b closure audit: all seven live tuples have exactly one adjudication; no owned live tuple remains unadjudicated; all three fatal tuples have matching defect-ledger rows.
- Step-8 guard: 56/56 current Step-8 item changes licensed; passed.
- The whole-run defect-ledger coverage check was also attempted but currently reports three missing ledger rows for fatal adjudications owned by group a. Those rows are outside this dispatch and were left untouched; no whole-run defect-coverage pass is claimed.

## Blockers

None within group b. The three repaired items are pending the engine-owned targeted rejudge.
