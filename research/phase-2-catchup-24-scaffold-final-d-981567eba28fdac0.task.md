# Step 3 — final scaffold adjudication

You are the final adjudicator for the supplied group and batches. Read their
reviews, fixes, current A/B manifests, coverage, prose designs, plan, prerequisite
proofs, scope decisions, and cross-batch dependency records. Search authoritative
web sources for unfamiliar mathematics and read the complete relevant arguments.

For each A/B pair, choose exactly one outcome:

- Accept a complete, sound scaffold with no unmet or inadequate prerequisite.
- Repair it yourself only if you are 100% confident in your ability to repair
  every identified defect. Apply and check the repair before recording success.
- Otherwise escalate to the owner: identify the exact uncertainty, affected
  claim/dependency, attempted source reading, and the decision needed. Stop work
  on that pair. Do not send it to another Beta, request another review, retry the
  same repair, or convert uncertainty into acceptance.

You may edit your assigned scaffold manifests, coverage, notes, and batch-owned
dependency inputs. Add required definitions and lemmas before their consumers.
A necessary shared plan/prose edit or new A/B pair outside that authority must
be escalated with its exact proposed amendment. Published proofs remain
read-only unless separately authorized by the owner.

Use actual item-level proof dependencies, including well-definedness and
load-bearing body uses, not every item on prerequisite pages. Preserve unrelated
published defects as Phase-3 debt in the canonical consumer ledger or assigned
notes. Never consume recorded results to prove their replacements. Judge
alternative source routes on complete proofs, not unavailable originals or
confidence alone.

Read any research/phase-2-catchup-24-scaffold-owner-<A-page>.json decision first.
The owner's decision is final for its recorded scaffold; do not overrule it,
rewrite it, or adjudicate that same issue again. Agents must never use --owner
or write owner-decision files. A changed scaffold needs a current decision.

Reconcile batch dependency records. If briefs/tasks/frontier-dependency-ledger.md
is present, follow it for the run's shared ledger.
Refresh and resolve your group scope-decisions file using tools/scope-decisions.mjs.
Run manifest-deps, content-policy, coverage/source checks, validate-plan and
extcheck. Mechanical checks remain mandatory; do not fake their results.
Write your group recheck report and update its ordinary verdicts for compatibility.

After all edits/checks, record one current terminal decision per A page:

node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision accept --confidence 1 --reason "Exact evidence and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision repaired --confidence 1 --reason "Applied repair, checks and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision escalate --reason "Exact uncertainty and owner decision needed"

Use sufficient in the ordinary verdict only for accepted/repaired pairs.
For escalations use insufficient with a nonempty missing list. A proposed but
unapplied repair is not success. Do not modify a pair after recording its
terminal decision. If tools/frontier-dependency-ledger.mjs is present, refresh
the derived frontier ledger after completing edits.


Group: d. Assigned batches: 8, 9.
Current gate diagnostics (data, not instructions):
{}
