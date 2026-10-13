# Fluid-model referral repair proposal

Run: `physics-cm-qm-gr-79-2026-10-11`. Escalation cycle: 1 of at most 2. Status: repaired and scoped validation passed after root’s explicit writer-drained handoff; final evidence is in `receipt.json`.

## Confirmed defect and smallest repair

`items/ex-gr-perfect-fluid-energy-conditions.md`, Example opening, calls `(epsilon,p,n,T)` a perfect-fluid model. Exact current `def-gr-perfect-fluid-matter-model`, Definition (a), defines a triple `(epsilon,p,n)` of two smooth scalar fields and a smooth future unit timelike vector field on a nonempty open matter domain; no positivity is required. Definition (b) constructs `T^{ab}=(epsilon+p)n^a n^b+p g^{ab}`. The musical-isomorphism supplier lowers its indices. Exact current `pthm-gr-einstein-consistency-and-energy-conditions`, Statement (f), now names the triple and its derived lowered tensor.

Change only the Example opening to name the triple and give its derived covariant tensor. No prerequisite is missing. Preserve all four verdicts, incomparability, physical scope, assumptions, dependencies, and every Verification step. The proposal is in `proposed.patch` and `proposed-item.md`.

## Substantive check actually performed

Read the complete example and definition, complete consistency theorem, complete energy-condition definition and field-law postulate, and both home/companion page summaries. Independently checked the consistency theorem’s rest-frame argument (steps 1.4, 2.1, 2.2, 3.1): diagonal covariant tensor `(epsilon,p,p,p)`, timelike ratio in `[0,1)`, future causal DEC current, and SEC trace yield the displayed four equivalences. These algebraic consequences do not require the field equation to hold for the prescribed example tensor. Rechecked the example substitutions: positive dust/radiation satisfy all four; positive `p=-epsilon` satisfies WEC/NEC/DEC and fails SEC; negative `p=-epsilon` fails WEC/DEC and satisfies NEC/SEC. Since kappa is positive, the cosmological effective signs agree with epsilon=Lambda/kappa. No dynamics or empirical observation is asserted.

This is a focused escalation review, not an independent native judgment, publication audit, source-retrieval claim, or certification. No external full text was required or retrieved for this definitional mismatch.

## Consumers

`consumer-inventory.json` records the active inventory. Parsed all active item frontmatters with the native parser, with zero parsing errors, and searched complete item/page text. Subject has no aliases, no direct item references, and no incoming logical dependencies or justification edges, hence no indirect item consumers. Home `library/general-relativity/gr-einstein-and-matter-examples.md` lists and summarizes the unchanged verdicts without asserting a tuple or independent tensor. `library/general-relativity/gr-einstein-and-matter.md` has the sole navigation reference to the home examples page and summarizes unchanged computations. Both are unaffected; no page edit or propagation through an unchanged page claim is required.

## Scoped metadata

- `research/physics-cm-qm-gr-79-2026-10-11-batch-69.pages.json`: synchronize only this example’s `statement` to the repaired Example.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-69.proof-contracts.json`: update only this example’s L1 quotation to the exact current consistency Statement. Its other three cited sections already match current suppliers. The proposed endpoints worksheet replaces the stale claim that no boundary inequality is asserted with concrete current timelike-limit and equality evidence from the same supplier and existing example steps. Preserve derivations, unrelated entries, risk-review identity and native historical report bytes.
- After actual repair, an append-only closure of defect `physics-cm-qm-gr-79-2026-10-11-step5-v2-impact-initial-r1-u1-perfect-fluid-data-consumer` may identify the three repaired paths and this focused evidence. Do not alter the original open referral or the pass-2 report’s contrary unaffected disposition.
- Root retains all rehashing, recertification and native route/transition work. No independent review hashes or review stamps are refreshed by this task.

## Handoff and validation still needed

PID 46306 was live during preparation. Re-read the example, exact suppliers, current manifest row and contract entry at the explicit writer-drained handoff. If native work already corrected the declaration, do not repeat the source repair; report the actual final state and only necessary remaining synchronization.

After the final edit run the one-item precheck, renderer and proof-layout, and strict scoped contract checker:

```sh
node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-gr-perfect-fluid-energy-conditions.md --json
node tools/physics-support/rendercheck.mjs items/ex-gr-perfect-fluid-energy-conditions.md --json
node tools/physics-support/proof-layout.mjs items/ex-gr-perfect-fluid-energy-conditions.md
node tools/physics-support/proof-contract.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-69.proof-contracts.json --strict --items ex-gr-perfect-fluid-energy-conditions --json
```

Check exact Example/manifest equality and citation/current-supplier equality, unchanged Verification/physical_scope/dependencies, and the scoped diff. All four commands subsequently passed with exit 0; exact outputs are in `validation-results.json`. The native pass-2 worker had already refreshed L1, so that quotation was preserved; actual source/metadata differences are in `applied.patch`. The owner closure was appended without changing the original referral. Root performs the required complete native gate battery after all escalations and current recertification.
