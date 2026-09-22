# Step 7 consumer policy verification — 2026-09-22

The owner's final clarification is authoritative: frontier membership determines
Step 7 scope. Published items inside the frozen frontier remain subject to its
repair, adjudication, Terra rejudge and gates. Outside consumers do not.

## Implemented behavior

| Required condition | Verification |
|---|---|
| Statement/Definition changes propagate, published or not | Direct-hop unit and integration tests cover frontier → outside → outside and outside → frontier. Explicit missing-edge discoveries require actual-use evidence. |
| Proof-only changes do not propagate | Tests cover section fingerprints, initial/gate repairs, parallel reviews and separate published maintenance. |
| Published consumer edits are strictly necessary and minimal | Prompts prohibit unrelated/cosmetic changes. Separate maintenance requires affected-use, invalidated-claim and minimality explanations plus exact surgical edits. Unlisted changes, changed sound consumers, missing explanations and uncertainty are rejected. |
| Outside consumers stay outside Step 7 loops | Separate queue/tasks/reports; no outside owner assignments, Terra calls, renewed adjudication or item gate obligations. Published frontier items remain included. |

Mechanical tests enforce scope and evidence, **not mathematical truth**.
No claim is made that this code run audited every historical published edit
for necessity or minimality. Workers must genuinely justify those judgments.

## Focused tests

```bash
node tools/tsx-run.mjs --test --test-reporter=spec \
  tools/autopilot/test/step7-workflow.test.mts \
  tools/autopilot/test/step7-rounds.test.mts \
  tools/step7-statement.test.mjs \
  tools/step7-frontier-gate.test.mjs \
  tools/autopilot/test/step7-frontier-gates.test.mts \
  tools/autopilot/test/step7-stages-v2.test.mts \
  tools/step7-impact-recovery.test.mjs \
  tools/consumer-maintenance.test.mjs \
  tools/step7-gate-diagnostics.test.mjs \
  tools/autopilot/test/step7-guard-certification.test.mts
npx --no-install tsc -p tools/autopilot/tsconfig.json --noEmit
```

Latest completed focused run: **122 passed, zero failed/skipped/TODO**.
TypeScript checking passed. Recovery and final edits are rerun before deployment.

Tests additionally cover stable certification barriers, three parallel disjoint
maintenance lanes, ordered frontier/maintenance handoffs, source uncertainty,
event deduplication, immutable evidence, restart idempotence, recovery guards,
outside-only/mixed gate findings and preserved global integrity failures.

## Historical evidence and deployment

The earlier report recorded 91/93 passing tests: published-source propagation
was broken, and a test required publication-status exclusion even inside the
frontier. Propagation is now fixed. The second test was changed to match the
owner's explicit clarification, not to hide a remaining defect.

No production mathematical items or historical reports/certifications were
edited by these build tests. The stopped broad gate-pass-5 must still be
superseded through guarded recovery, preserving original evidence. Historical
packs without section snapshots are not assigned invented before-statement
hashes. Missing historical maintenance evidence requires explicit reconciliation,
not fabricated completion.
