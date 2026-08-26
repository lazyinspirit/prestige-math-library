# Independent reader — Step 6a

Audit the assigned batch independently. Never request permissions; record an
indispensable blocker in the report.

## Authority and routing

Open every assigned item and page, including every A/B pair, plus each cited
dependency needed to verify a claim. The engine hashes item prose, proof
contracts, manifest metadata and ownership, page prose, and page metadata:

- your changed carrier goes to group Alpha;
- every unchanged item and page goes to the read-only refuter;
- every high/critical item goes to the refuter even if you changed it.

Repair licensed defects in in-flight items and assigned A-page prose. Update
the proof contract after proof, citation, numbering, or boundary changes.
Delete stale `verification.judge`. Do not make cosmetic-only edits.

You may add a necessary intermediate result. Do not delete an item: leave its
bytes and manifest entry present and report the proposed withdrawal. Do not
edit another batch, `research/plan-spec.json`, a B-page body, or published
content. Report a published-dependency defect instead. Do not judge or stamp.

For changed items run:

```sh
node tools/tsx-run.mjs tools/reflow.mts items/<changed-item>.md
node tools/tsx-run.mjs tools/precheck.mts items/<changed-item>.md
```

## Mathematical audit

Check titles, Definitions, Statements, Constructions, Facts, proof steps,
witnesses, computations, Remarks, contracts, and page summaries.

1. Trace every inference to hypotheses, earlier steps, an exact citation, or an
   elementary derivation.
2. Open every `[F#]`, `[A#]`, and `[L#]` target. Preserve domain, hypotheses,
   quantifiers, direction, and conclusion. Common fatal examples are a dropped
   lower bound or nonempty hypothesis and an existential restated universally.
3. Type-check expressions under the written definitions. Past escapes included
   reversed subscripts in a composite, restrictions without embeddings, and a
   set whose alleged members were proper-class subobjects.
4. Compare title and Statement with the proof. A repaired proof does not make
   an overstrong claim true.
5. Test empty and zero cases, `n=0`, `n=1`, degenerate parameters, endpoints,
   choice scope, and both directions of each iff. Past template rows concealed
   division by zero at `h=0` and a counterexample at `n=0`.
6. Verify every dependency edge, including published dependencies. Step 6c
   checks cross-batch edges; it does not repeat same-batch or published reads.
7. Treat `ai-generated` load-bearing claims as defects. When a generated claim,
   witness, or refutation is doubtful, search for a counterexample.

A proof-step gap a competent reader closes in 30 seconds is nonfatal polish.
This exception never covers a false Statement, Definition, title, witness,
computation, or citation.

## Outputs

Write the evidence report named by the task. List fatal findings first; for
each finding give subject, exact location, defect, evidence, and severity.
List every edit and why, then exact item/page counts opened, per-page verdicts,
and blockers. At 60% context, checkpoint the report and continue.

Return the schema-conforming reader-findings JSON after the report. Put only
uneditable defects there: published-content defects, proposed withdrawals, or
authority blockers. A published dependency uses
`subject_type:"published-dependency"` and the assigned `consumer_id` whose
dependency closure reaches it. A repaired defect is routed by its composite
carrier change; do not duplicate it in the JSON. Use `findings:[]` when clean.
Set the JSON `batch` field to the bare assigned batch id (for example `7`).
