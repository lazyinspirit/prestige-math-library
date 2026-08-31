# Step 8 — group d rejudge adjudication, round 1

Run: `frontier-26`  
Stage: `8-rejudge`  
Owned exact rows handled: 16

## Outcomes

- `confirmed_fatal`: 14
- `confirmed_nonfatal`: 2
- `false_positive`: 0
- repaired items and rejudge targets: 14
- cross-group alerts: 0
- blockers: 0

Every row below was appended to the shared adjudication ledger with its exact
rejudge context and pre-edit guard hash.

| item | outcome | context_sha256 | item_sha256 |
|---|---|---|---|
| `cex-the-cfl-pumping-lemma-characterizes-cfls` | `confirmed_fatal` | `05dff1a5b5f2fa561ee067030f0a33cb89e1893c5fd853f0225a35d5a1ed74ac` | `22be30367c45f23f7c97f4bfab9dbe13e227f7464909ed5ec3d62382124a05e4` |
| `def-effective-encoding-of-turing-machines` | `confirmed_fatal` | `c7ebed78cb0293accc3d7777805f4250a1423401a3f7c394556424c80cf1f437` | `e05561180480b899de8639ecbd3b207ddaca784019d674fe814743d43b8760a2` |
| `def-generalized-nfa` | `confirmed_fatal` | `bdf142144018d8a7f156ae2daa5d781a51235de4f0314ff3b4f527543640bd62` | `6564db2e52f02bb70e51ab171c41770000c94c2c92d3b40986874f340af783f6` |
| `def-universal-turing-machine` | `confirmed_fatal` | `9f657380d5e12eab7a23b851e2dfbbc110eb561a9521d2c13282a1249c911f2a` | `751c6665153bde9d5b7f962d2f9ad8618c7681edb4b2436f92501fad3d7bbbe5` |
| `fs-cfg-equivalence-is-decidable-by-normalization` | `confirmed_fatal` | `0863cd6593d555ad6b9eb0b121ad02b60b90dde5e20f694023c3e6bdbd79874c` | `32477825595978ff3cb83e541c116033f97dc873acd2b6fe3655bca7380782f1` |
| `fs-the-cfl-pumping-lemma-characterizes-cfls` | `confirmed_fatal` | `838500adf2ab599cd2b67b03d8f5d295b0c056b64accb985f85c42dc3d60735a` | `8a931952c84cbb8c192effab09b8049bfa3e03de23998979d2e0959becdd401a` |
| `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` | `confirmed_fatal` | `15790d25a00389c7803e7464eeab56fdd3a4a978722b3e7bd3e3346d62b7fd03` | `1920841af17d7bbc023781bb500b62149cfebe59dcfa65f5b1833208988b0951` |
| `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` | `confirmed_fatal` | `ea9b96d994913ea79b9d87c795d0d5b2678170b83682f40b45a74822c3505459` | `149ac92e5dd37b38928feff153a462b2d5961614a2d54253d370d814710705ed` |
| `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` | `confirmed_fatal` | `473b56e2e36c64114ddce2ecbd80b151dea0bf614ff20edbdb5658363fd9d787` | `4f3683c6a72b5a1cfdf946f8d47179d77fc55d1ba217f25f57289331b74840e3` |
| `lem-step-by-step-interpreter-for-machine-codes` | `confirmed_fatal` | `8ff3f899ee2d06d2751e0e3ab17caeba190e80e85e96abb82e0cd54afb8f9f06` | `4d7b27b17c623148fa10870f7ef9b5bdf3aa10dc7f4660137f213c625389ba0e` |
| `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` | `confirmed_fatal` | `6f6e505ba5f2704a101300af6404e2475b979510d7f13fb93d74cd3017358256` | `dd1160a6ff8daff113bd0086a76c7d6128928e8d1b9a5cee6237a12043b5ad1e` |
| `thm-multitape-machines-have-one-tape-simulations` | `confirmed_fatal` | `7549ee3dbcf241451519f72b6f55046d5a7609dce47304c2dd41fb393715d089` | `97ab7f90612395f99034e2a6deec57daf495cc7c4767136ce29f3ef83af1026f` |
| `thm-one-way-and-two-way-tapes-are-equivalent` | `confirmed_fatal` | `15833584daee31f39bf6979da7dd7d70e033c6e18b50f1b23efc416802511dcf` | `ef70c09265fb691d9c6b7d221e20a33073b013e8714a870fec3cbed8a9089258` |
| `thm-regular-expression-to-epsilon-nfa` | `confirmed_nonfatal` | `af65bc394fec50145fd4a163e41aa84aba7b78642d777652a8a93d64a884d467` | `6024fa9f891d84a7940bd8a6acdbb19e08f5b8b8e7fdb00038ceb61acd682d23` |
| `thm-stay-put-moves-can-be-eliminated` | `confirmed_fatal` | `c932c5f0ed8630f32ef04dcd600849b2794d4f261b64c011304fc8c00e349a78` | `3c93fc0c1af5d0c909ccd80e609c968c13418afdbfd3ac13e513750b1760e6fd` |
| `thm-the-five-vertex-path-has-the-polynomial-rodl-property` | `confirmed_nonfatal` | `12677def1b4b066915dc246d5efdbd9315a592a8e913b01a3baa60744522af85` | `c770adc1d369adb07ae2c8957c5301dd1e869aff2f35a5c72917482f9a96b4c9` |

## Confirmed fatal repairs

| item | repair |
|---|---|
| `cex-the-cfl-pumping-lemma-characterizes-cfls` | Replaced the unsupported literature assertion with an explicit language `L=sK union {s^r q:r!=1}`, a complete pumping-length-three case split, and a PDA-DFA product/homomorphism reduction to the published non-CFL language `K={a^n b^n c^n}`. |
| `fs-the-cfl-pumping-lemma-characterizes-cfls` | Installed the same self-contained counterexample and proof in the false-statement refutation. |
| `def-effective-encoding-of-turing-machines` | Specified the total machine-code decoder, including self-delimiting parsing, canonical numeral checks, arity and transition validation, and a fixed malformed output. |
| `def-generalized-nfa` | Quantified the path length `n>=0` in `P_K(p,q)` and defined the zero-length path as the empty word with `p=q`. |
| `def-universal-turing-machine` | Removed the false partial-function equivalence over all halting pairs and stated explicitly that outputless halting runs impose no universality condition. |
| `fs-cfg-equivalence-is-decidable-by-normalization` | Restored the cited definition's same-alphabet hypothesis. |
| `lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set` | Restored the sparse-subgraph branch of the cited mixed-block dichotomy and split the proof into its two cases. |
| `lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs` | Restored the preceding lemma's sparse complement-P5-free graph, maximal sparse blockade, and large final-block hypotheses. |
| `lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade` | Bound `x,y`, tied `G,A,B` to the full previous-lemma hypotheses and conclusions for those parameters, and added the directly cited hitting-set dependency. |
| `lem-step-by-step-interpreter-for-machine-codes` | Required every parsed configuration block to be a canonical binary numeral, rejecting leading-zero alternatives. |
| `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade` | Restored the small-`x`, sufficiently-large, sparse complement-P5-free hypotheses in `[L3]`. |
| `thm-multitape-machines-have-one-tape-simulations` | Defined recognition, decision, and computation locally for multitape machines by behavior and stopped applying one-tape-only definitions outside their domain. |
| `thm-one-way-and-two-way-tapes-are-equivalent` | Defined the three computational notions uniformly for both tape conventions before comparing behavior. |
| `thm-stay-put-moves-can-be-eliminated` | Defined the same notions uniformly for the two fixed multitape variants before drawing the preservation conclusion. |

Matching defect-ledger rows `frontier-26-S8R1-d-001` through
`frontier-26-S8R1-d-014` were appended through the prescribed interface, with
exact adjudication references and recurrence links where an earlier Step-8 row
already existed for the item.

## Confirmed nonfatal

| item | rationale |
|---|---|
| `thm-regular-expression-to-epsilon-nfa` | The syntax item reached through the denotation well-definedness dependency explicitly defines regular expressions as finite constructor trees. Structural induction is the immediate induction principle for that definition; the objection is a direct-citation gap, not a defective construction. |
| `thm-the-five-vertex-path-has-the-polynomial-rodl-property` | Restrictedness means that a graph or its complement is sparse. Applying the same definition twice shows immediately that a set is restricted in `G` exactly when it is restricted in its complement; no mathematical case is missing. |

Neither nonfatal item received content, contract, impact, or verification
changes.

## Documentary updates

- Regenerated the current citation and derivation contracts for all 11 repaired
  proof-bearing items across batches 8, 10, and 11, then remerged the level
  contract.
- Added a complete risk review for the newly high-risk pumping
  counterexample; existing complete reviews were preserved.
- No judge verdict or stamp was written, and no extra judge cycle was started.

## Rejudge targets

The engine should rejudge exactly the 14 confirmed-fatal items in the repair
table. The two confirmed-nonfatal items are closed on their current bytes.

## Checks

- Focused precheck: all 11 repaired proof-bearing items pass; the other three
  repaired items are definitions.
- Focused render check: all 14 repaired items pass YAML, delimiter, and KaTeX
  validation.
- Strict proof contract on the 11 repaired proof-bearing entries: pass with
  zero errors and zero warnings.
- Reviewed risk report on the repaired proof-bearing set: pass.
- Citation fidelity over batches 8, 10, and 11: 154 citations checked, zero
  quote mismatches and zero widening candidates.
- Group content policy: 104 items, zero errors and zero warnings.
- Step-8 scope check: zero open rejection and zero unresolved cross-group alert
  on current adjudication bytes.
- Judge-only closure with pending rejudge allowed: zero unadjudicated rows and
  zero open fatal; 23 whole-level items need rejudge, including the 14 group-d
  repair targets listed above.
- Step-8 guard: 88 changed items, all licensed, zero errors and zero warnings.
- Frontier-26 defect-ledger exact linkage: 334 rows checked, zero errors.

## Cross-group alerts and blockers

None.

## Step-8 frozen integrity close — round 1

### Gate and assigned ids

Closed the `proof-contract` failure for exactly:

- `lem-state-elimination-preserves-path-language`
- `thm-dfa-to-regular-expression`
- `fs-universality-decides-halting`

The three citation quotes were stale after the licensed repairs to
`def-generalized-nfa` and `def-universal-turing-machine`. Their current facts,
proof steps, and cited source sections were unchanged mathematically and were
regenerated into the owning batch contracts. `live_tuples` was empty.

### Non-item records changed

- `research/frontier-26-batch-10.proof-contracts.json`
- `research/frontier-26-batch-11.proof-contracts.json`
- `research/frontier-26-proof-contracts.json`
- This closure-recovery report

No mathematical item, adjudication, verdict, stamp, impact record, or shared
append-only ledger was changed in this close dispatch.

### Focused checks

- Strict proof contract for the three assigned ids: pass, zero errors and zero
  warnings.
- Citation fidelity for batches 10 and 11: 118 citations checked, zero missing
  quotes and zero widening candidates.
- Whole-level strict proof contract: zero errors; two pre-existing
  `shotgun-bracket` warnings name group-c items and were left to their owner.
- Step-8 scope check: four groups, 441 items, zero open rejection and zero
  unresolved cross-group alert.
- Step-8 guard: 88 changed items, all licensed, zero errors and zero warnings.

### Blocker

None.
