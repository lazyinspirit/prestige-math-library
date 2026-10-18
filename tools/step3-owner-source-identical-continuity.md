# Native acceptance continuity

`step3-owner-source-identical-continuity.mjs` verifies an existing successful
native Step-3 acceptance against its immutable reader-post carrier, original
accepted decision, assignment, report, completion result and exact current
source, contract and manifest. It grants no new execution or review coverage.
The full routing gate invokes the strict contract validator for each candidate.

Manifest claim mirrors follow the source kind's actual claim section. An example
uses its actual `Example` section, or its explicit `Statement` when that is the
existing claim heading. A remark
uses `Statement` when present; otherwise an actual `Remarks` section is allowed,
consistent with SCHEMA.md's prose-heading convention. No other kind receives
the Remarks fallback, and an absent section fails. The original source and all other
continuity, dependency, hash and strict-contract conditions remain mandatory.

A counterexample prefers an explicit `Statement refuted` heading, including
when that heading is empty (an empty claim must still fail). If that heading is
absent, the existing positive-claim form `Statement` plus a nonempty `Proof`
is also supported. This matches the shared citable-section grammar in
`facts-block.mjs`, which permits `Statement`, and its numbered argument grammar,
which reads `Proof` independently of item kind. `precheck.mts` likewise reads
`Proof` as a proof-like section. SCHEMA.md's `Statement refuted`/`Counterexample`
pair is an authoring convention rather than a type check. There is no fallback
to arbitrary prose, and a missing Statement or Proof cannot enter this legacy
branch. The manifest must still mirror the exact selected claim, the source
must retain its authenticated continuity, and the actual strict contract check
remains mandatory; no item-specific exception or new native coverage is added.

Validation of this narrow heading repair belongs to the authorized full native
gate battery. No separate tests were requested.
