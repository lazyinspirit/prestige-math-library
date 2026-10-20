# Batch 5 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-5`; covers: 5.

Scope routes exactly `touched:5:thm-rademacher-contraction-inequality`; reader findings and refuter flagged arrays are empty. Current runtime state read from `.autopilot/machine-learning-all-101-2026-10-19/state.json`: stage `3a-read`, unpaused. Recent git HEAD: `603500781c`. No scheduling or state transition is performed.

## Completed level 0 reviews

`def-rademacher-complexity`: checked full Definition and five direct supplier interfaces. Nonempty class, m>=1, finite sign average, nonabsolute 1/m convention, measurable-supremum qualification, singleton/constant cases and bounds [0,1] are sound. No AC. Complete risk review recorded.

`thm-rademacher-contraction-inequality`: accepted reader citation repair, confidence 1. The archived preimage at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/thm-rademacher-contraction-inequality.md` has native pre-reader raw hash `b8bfcb6df47f5213d9cdea86456f06b8a77c227fd1a9f2f776630fe4eed7c77f`; the sole diff changes the Mohri reference annotation from claiming a complete proof to stating the inequality. Post-reader hash: `1499d7eef5c9073a4e33c99305c7e4fa7999a74a7ebccac9f4a788913f2055b3`. Statement, facts, proof, dependencies and manifest remain unchanged. Independently checked all two steps and complete published supplier proof: coordinate-pair swapping, finite/countable limits, and the two exact H0 determining conditions validate the result, including L=0 and singleton cases. No consumer propagation is triggered.

Sources read: official author page https://cs.nyu.edu/~mohri/mlbook/; its official second-edition PDF locally available at `/tmp/mohri-book-reader5.pdf`, SHA256 `1a986e004028786686d51730693f200429d31424e687c5e18d19e28511852904` matching the existing source-fetch evidence. Read printed pp.30-33 and 93-94 directly through PyMuPDF. The web PDF endpoint returned an internal error; local full PDF supplied actual source content. Mohri p.94 uses multiplicative (1-epsilon)sup approximation, invalid for negative intermediate suprema (e.g. constant value -1); the local supplier uses a valid pair-supremum argument. JMLR official PDF https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf, Definition2 p.464 and Theorem12(4) p.469, confirms the distinct absolute 2/m convention and zero-at-zero/factor2L comparison.

## Obligation disposition

The sole touched obligation is `accepted_repair`, `repair_confidence: 1`, with closed nonfatal citation defect `ml101-2026-10-19-b5-contraction-source-proof-annotation` in `research/defect-ledger.jsonl`. No reader/refuter/page obligation is invented for risk-only reviews. Exactly one decision is written. All six required risk reviews are complete in the owning proof contract; no item or page was edited by this adjudicator.

## Completed level 1 reviews

Symmetrization: full three-step proof, exact dependency statements and citation/derivation rows checked. Bounded product-measurable suprema justify Fubini; pointwise supremum domination needs no maximizer choice. Product-law uniqueness supports pair swaps. Subadditivity and sign symmetry give factor2 with the adopted normalization, including singleton and m=1 cases.

Clipped example: full three-step Verification and all supplier statements checked. The signwise supremum is T_+, E T_+=E|T|/2, E T²=m; endpoints ±B determine both raw and clipped suprema for every sign vector. The finite determining subclass meets contraction exactly, and all clipping branches are 1-Lipschitz. B=1, m=1 and T=0 are sound. Both risk reviews complete; no edits. Next: level2 uniform bounds, then level3 ERM.

## Completed level 2 review

Uniform bounds: read all six steps and exact eight supplier interfaces, including the complete McDiarmid proof. Bounded measurable statistics on P^m have oscillation 1/m; AC is explicitly inherited from that supplier. Complementation preserves empirical complexity and reverses deviation. Verified all four separate guarantees and delta/2 union allocations, giving log(1/delta), log(2/delta), log(2/delta) and log(4/delta) respectively, with coefficient3 only in empirical-complexity forms. Nonempty/singleton/constant classes, m=1 and excluded confidence endpoints checked. Risk review complete; no edit. Next: ERM and final checks.

## Completed level 3 review

ERM: all four proof steps, nine direct suppliers and exact citation/derivation rows checked. Batch2 current supervised/risk/ERM Definitions and complete measurability lemma support the actual use. Loss boundedness makes infima finite; the rule, samplewise membership and selected-risk measurability are hypotheses. Infimum comparison needs neither an attained population minimum nor an existence theorem for a selector. Each uniform event gives 2d+eta, hence the displayed 4/2 and 4/6 constants. Checked eta=0 under rule existence, positive eta with nonattained infimum, m=1 and singleton losses. Risk review complete; no repair.

## Source-locator alert for owner disposition

The three risk-only carriers `thm-rademacher-symmetrization-bound`, `thm-rademacher-uniform-generalization` and `cor-erm-excess-risk-from-uniform-deviation` cite Bartlett–Mendelson Theorem 8 with a printed range ending at p.467. The official PDF places the theorem and first proof portion on p.467 and the remaining ghost-sample/sign proof on p.468 (PDF pages5–6). Thus the annotations should include p.468; their assertions of a complete proof within pp.466–467 are imprecise. Theorem5 itself is on p.465, its AppendixB proof on p.480. These are nonfatal locator concerns; the actual local arguments and cited mathematical statements are sound. They are reported through this task report for owner routing, without adding unowed touched decisions or altering risk-only source carriers. No missing prerequisite or mathematical escalation results.

## Consumer and published review

Existing batch5 cross-batch records remain present with stable IDs. Current batch2 supervised-prediction, risk, ERM and measurable-risk interfaces were independently checked at the actual ERM uses: bounded loss, explicitly existing jointly measurable rule, class membership and separately assumed measurable selected risk meet every prerequisite. No in-run supplier defect or necessary consumer repair was found. The changed contraction annotation changes neither Statement nor Definition; no interface propagation is owed. All read published suppliers remain read-only; no defective published mathematical supplier was established. No withdrawal is proposed or removed. The published ledger therefore needs no new entry.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-5.proof-contracts.json`: 0 errors, eight items routed, six HIGH/CRITICAL.
- Same command with `--require-reviewed` after the six reviews: 0 errors, eight items routed; all required records complete.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rademacher-contraction-inequality.md`: pass, one checked, zero failing.
- `node tools/proof-layout.mjs items/thm-rademacher-contraction-inequality.md`: one item, two steps, zero defects. No subsequent item edits or formatter occurred.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-5.proof-contracts.json --strict`: zero errors, zero warnings, 8/8 items checked.
- Exact decision coverage comparison against the generated scope: exactly one decision, no missing or extra obligation.
- Exact raw SHA comparison: all eight current items match native reader-post hashes; only the contraction annotation differs from native reader-pre. The actual archived preimage matches its native pre hash. Historical delta is known.
- Defect-ledger serialized append succeeded, with the generated view refreshed by the ledger tool. One closed nonfatal source-annotation row, no mechanical-failure defect.

No judge, stamp, self-certification or gate battery was run. The engine owns current decision hashes and remaining gates/transitions. Mathematical review is complete with no substantial blocker; the source-locator metadata alert above awaits owner disposition.
