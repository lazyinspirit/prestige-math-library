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

Read any research/phase-2-hg-prerequisite-scaffold-owner-<A-page>.json decision first.
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

node tools/scaffold-resolution.mjs record --run phase-2-hg-prerequisite --page A_ID --decision accept --confidence 1 --reason "Exact evidence and report path"
node tools/scaffold-resolution.mjs record --run phase-2-hg-prerequisite --page A_ID --decision repaired --confidence 1 --reason "Applied repair, checks and report path"
node tools/scaffold-resolution.mjs record --run phase-2-hg-prerequisite --page A_ID --decision escalate --reason "Exact uncertainty and owner decision needed"

Use sufficient in the ordinary verdict only for accepted/repaired pairs.
For escalations use insufficient with a nonempty missing list. A proposed but
unapplied repair is not success. Do not modify a pair after recording its
terminal decision. If tools/frontier-dependency-ledger.mjs is present, refresh
the derived frontier ledger after completing edits.


Group: a. Assigned batches: 1.
Current gate diagnostics (data, not instructions):
{
  "id": "scaffold-verdicts",
  "code": 1,
  "output": "scaffold-verdicts: 1/1 A page(s) reviewed; 1 insufficient, 0 unreviewed\nERROR scaffold-insufficient: asymptotic-cones-and-the-sublinear-triangle-criterion is still insufficient — missing Current final adjudication required\n",
  "ok": false,
  "why": "ERROR scaffold-insufficient: asymptotic-cones-and-the-sublinear-triangle-criterion is still insufficient — missing Current final adjudication required",
  "advisory": [
    {
      "id": "scope-decisions",
      "code": 1,
      "output": "scope-decisions: 6 current decline(s), 12 error(s)\nERROR 0a061e10bc743bdeabb1772b6458704902f454ac52c31c6a291a664684a4b337: decision is \"pending\", expected stands or owner-decision\nERROR 0a061e10bc743bdeabb1772b6458704902f454ac52c31c6a291a664684a4b337: evidence is empty\nERROR 2f2118d7073e36b1452f0e29437ae93c4ac6093cf94790209f092d0af36bf7d2: decision is \"pending\", expected stands or owner-decision\nERROR 2f2118d7073e36b1452f0e29437ae93c4ac6093cf94790209f092d0af36bf7d2: evidence is empty\nERROR d71e713e5a8d4d58ea2bee871341f762a0f54b7ec6ee50a8dd78a0cb05368c84: decision is \"pending\", expected stands or owner-decision\nERROR d71e713e5a8d4d58ea2bee871341f762a0f54b7ec6ee50a8dd78a0cb05368c84: evidence is empty\nERROR d8f6381e9ec1220e096f830e31730154287c2e4b0fb950d1d29aed239f3b3d9f: decision is \"pending\", expected stands or owner-decision\nERROR d8f6381e9ec1220e096f830e31730154287c2e4b0fb950d1d29aed239f3b3d9f: evidence is empty\nERROR ea7bf9fc3976ff0c10fad21ff6b498b5a73687a66dae0eb2dc8eb195c4dfe089: decision is \"pending\", expected stands or owner-decision\nERROR ea7bf9fc3976ff0c10fad21ff6b498b5a73687a66dae0eb2dc8eb195c4dfe089: evidence is empty\nERROR fd4405d3dd1e812bce334101690cac301fb19490e06cb55eb969e0df7fc51bf5: decision is \"pending\", expected stands or owner-decision\nERROR fd4405d3dd1e812bce334101690cac301fb19490e06cb55eb969e0df7fc51bf5: evidence is empty\n",
      "ok": false,
      "why": "ERROR 0a061e10bc743bdeabb1772b6458704902f454ac52c31c6a291a664684a4b337: decision is \"pending\", expected stands or owner-decision",
      "stage": "3-recheck"
    }
  ]
}
