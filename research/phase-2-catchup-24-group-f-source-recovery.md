# Group f source and scaffold reconciliation

Root, 2026-09-09 15:04 UTC. The Step3b-f worker completed its21 individual
mathematical decisions, but its shell sweep had four DNS failures. Root
ran a fresh URL sweep on batch12 and13 coverage with a20-second timeout:
4/4 active URLs live, zero failures/suspects. The existing UNSW source drop
is preserved; no new drop or full-text fetch stamp was written.

Durable evidence: `phase-2-catchup-24-group-f-source-liveness-20260909.json`,
SHA256 `4878cde735b1e7c3c31d843725acfc3fc44da6da745ee2ed8a1782c6dad8ffbe`.
Correct two-file source-backing invocation (comma-separated coverage) passed
17 authored results across2files. An initial space-separated invocation
checked only the first file's5results; it was not taken as group-wide success.
The successful command was:

```
node tools/source-backing.mjs --coverage research/phase-2-catchup-24-batch-12.coverage.json,research/phase-2-catchup-24-batch-13.coverage.json --liveness /tmp/phase2-root-f-liveness-20260909.json --require-verified
```

Root synchronized the completed batch2/12/13 inventories and requirements
into their existing canonical pages. Six pages are now deeply equal to their
live inventories and requirements. This registers the existing4-item
sequential uniform-boundedness pair; it does not add a pair or proof approval.
The Boone semigroup definition's three additional vocabulary dependencies
are retained. Group-theory and functional-analysis prose now state the exact
new dependency interfaces. All current run counts remain24pairs/48pages/
735items. Plan validation passes with975populated/644empty planned pages;
frontier dependency-ledger refresh and git diff whitespace check pass.

The new complex-scalar metadata finding in the published c0 definition
remains U-C in the canonical ledger. The live sequential counterexample
supplies those clauses locally. Root did not alter that published supplier
during other groups' live audits or fabricate replacement decisions.

No controller restart, worker retry, engine acceptance override or owner
scope decision was used for this recovery. The engine must still run its
whole-run final gates after active groups drain.
