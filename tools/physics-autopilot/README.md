# Physics workflow engine

Use `physics/WORKFLOW.md` for the six-step stage table, run controls, owner holds and evidence procedures.

The rebuild plan is `physics/research/workflow-rebuild-plan.md`. Step 1 performs complete initial authoring; Step 2 is the bounded Luna-max whole-batch scope/prerequisite loop. Planning generates group metadata; accepted plan synchronization is part of the Step-2 mechanical handoff. There are no separate assignment or splice stages.

Step-1 authoring fills the shared 30-worker budget from the entire pending queue,
prioritizing lower dependency levels. Cross-pair prerequisites never block an
author's start or remaining work. Slot refill is triggered by worker completion;
current supplier readiness remains a requirement of the drained Step-1 gates.

Current revision: `physics-six-step-v1-construction-scope`. Use fresh run state. The engine owns all transitions and enforces the shared 30-agent cap. See `package.json` for typechecking and focused test commands.

Run the scope-review controls from `physics/` through its `tools` symlink. The CLI resolves the symlink before dispatching `check` or `owner-resolve`; missing current batch acceptance fails with a nonzero exit code.
Scope repairers use the existing cognitive `authoring` job classification, so dispatch preflight permits their substantive proof and prerequisite repairs. Their batch ownership and bounded review history still apply.

Step 3 ends after independent batch readers, refuters and routed adjudicators, the exact post-3a baseline, and mechanical `3a-close` history freeze. The original adjudication gate battery remains the review boundary. There is no cross-batch review, unfinished-review continuation or impact-audit duty after that boundary; dependency levels prioritize initial authoring while independent review retains its own prerequisites. Historical Step-3b receipts remain historical evidence.

Within the Step-3 pipeline, ready downstream work gets available slots before
upstream work: adjudicators, collection tools, refuters, split tools, then readers.
Each batch still requires its predecessor receipts and artifacts, with no live
predecessor writer. Stage, role, and global caps include workers adopted after a
controller restart; the full group gate barrier remains in place.

One owner-authorized fresh Step-3 refutation per unit can be enabled with the same
hash-bound protocol documented in `../autopilot/REFUTER-COVERAGE-CONTINUATIONS.md`.
The new native refuter performs all scoped reads independently; original
coverage assertions are not accepted as proof of reading. The original report
and receipt remain archived, and normal collection and closure checks apply.
The Step-3 owner gate snapshot binds the continuation authority, original native
receipt/report/final-message evidence, and exact correction task. Dispatch-time
subject hashes remain historical; the snapshot separately binds live sources.
For same-finding comparison, an optional exact `items/SUBJECT.md — ` locator
prefix is ignored only for that same subject. Interior locations, defect labels,
severity/verdict compatibility and explicit sharing evidence remain required;
original locations and observed source fingerprints are never rewritten.

If an independently running producer changes a source after a reader observed
its current bytes, the private split helper can authenticate that historical
observation through `research/RUN-step3-observed-current-history-BATCH.json`.
This requires explicit Root authority, exact original finding objects, immutable
raw-source/report/receipt/attempt-log/final-message bindings, a native logged
source digest and source excerpts, and the ordinary live producer/reachability
route. Every evidence binding also appears in its `inputs` map, which the native
owner gate snapshot follows. The archived split-current source must equal the live source at split.
The original `observed_source` remains unchanged; the old raw-source-only
fingerprint is kept separate from the current producer/contract fingerprints.
The complete native receipt tail must authenticate the original report; clipped
tails are not supported by this bounded route. Ordinary current refutation,
adjudication, evidence bindings and gates remain required; this grants no source
edit permission or mathematical acceptance. Immutable evidence is rechecked
after split, while legitimate later repairs may change the live source.
`recoverLoggedSource` is a pure recovery aid for numbered native source output:
it accepts a proposed unchanged prefix only when the complete recovered bytes
reproduce the exact native logged raw SHA256. It writes no archive or authority.

Freshly planned namespaces now use `physics-six-step-v1-statement-first` through the composed
`mathlib.statement-first.mts` table. Every item class presents uninterrupted
statements/descriptions and separate following reference lines. Existing runs
keep their original revision and table. See [the editorial policy](../STATEMENT-FIRST.md).

A Root-reviewed cross-group causal-repair receipt may consolidate duplicate
producer/consumer defect records into one append-only successor. The fatal-repair
route requires an exact producer touched decision, two frozen consumer findings,
both original row archives, all reports/pre/post snapshots, current supplier
carrier, complete references and substantive final repair evidence. The bounded
Fluid Dynamics historical-readiness route separately authenticates producer3 and
reader4 against the archived false sentence and exact dated ready record; it
retains any unbound-history limitation and permits only that repaired nonfatal
record. The private checker authenticates receipt and decision cores; ordinary
route, severity, observation and current-carrier checks still apply. Stamp current
decisions before binding the primary file, then add consumer receipt pointers.
The owner gate snapshot follows the authority's exact evidence input map.

The existing outside-context receipt can retain a genuinely unfixed published
maintenance finding through an append-only `nonfatal-recorded` to `deferred`
successor. That transition requires an explicit Root review, the exact canonical
prior-row digest, unchanged finding identity and exact adjudication references.
It applies only inside the authenticated supersession chain; ordinary open and
deferred handling and all source, consumer, premise and receipt checks remain
required. Acceptance covers the exact owned consumer use, while outside
maintenance stays deferred and its original history remains intact.
