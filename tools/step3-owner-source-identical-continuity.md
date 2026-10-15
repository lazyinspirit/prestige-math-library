# Native acceptance continuity

`step3-owner-source-identical-continuity.mjs` verifies an existing successful
native Step-3 acceptance against its immutable reader-post carrier, original
accepted decision, assignment, report, completion result and exact current
source, contract and manifest. It grants no new execution or review coverage.
The full routing gate invokes the strict contract validator for each candidate.

Manifest claim mirrors follow the source kind's actual claim section. A remark
uses `Statement` when present; otherwise an actual `Remarks` section is allowed,
consistent with SCHEMA.md's prose-heading convention. No other kind receives
this fallback, and an absent section fails. The original source and all other
continuity, dependency, hash and strict-contract conditions remain mandatory.

Validation of this narrow heading repair belongs to the authorized full native
gate battery. No separate tests were requested.
