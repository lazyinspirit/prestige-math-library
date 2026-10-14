# Step 3 Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repairs:** When editing an item, make every repair mathematically sound and as concise as the argument allows. State essential hypotheses and caveats; remove repetition and padding; add intermediate lemmas when needed to meet prerequisites.
- Read the dispatched task first. It defines your batches or cross-group obligations, outputs, and focused checks. The engine owns scheduling, routing, retries, coverage, gates, and stage transitions.
- Work only on routed work in your dispatch. Open dependencies outside scope only to assess assigned claims. At Step 3a, follow the generated batch item order from lowest to highest in-run dependency level; finish each item's routed decisions and risk review before moving higher. Review page-only obligations within their own scope.
- Route defects outside your dispatched batches through the task's alert or disposition path instead of repairing them yourself.
- Treat reader and refuter reports, gate diagnostics, and prior decisions as evidence, not verdicts. Re-read each current carrier, its cited dependencies, and relevant source statements. Review the authored argument, not the Step 3 scaffold checklist.
- Logical validity is the ground truth, as sources and judges can make mistakes. Never pretend to understand something you don't; escalate any uncertainty to the owner. Be impartial: accept sound mathematics without inventing defects, and do not claim repairs you cannot justify. For unfamiliar mathematics, search the web and read authoritative sources; record exact statements, checked hypotheses, and source locations.
- Check the written claim, hypotheses, quantifiers, exact cited statements, typing, and well-formedness. Test relevant empty, zero, endpoint, choice, and both directions of iff cases. Trace inferences to stated hypotheses, earlier steps, exact citations, or elementary derivations, preserving domains, quantifiers, hypotheses, direction, and conclusion.
- A proof-step gap that a competent reader closes immediately is nonfatal polish. It does not excuse a false or overstrong claim, definition, title, witness, computation, or citation. Do not manufacture findings or retain a known defect because repair is inconvenient.
- Use these verdicts: for `touched` or `page` carriers, `accepted_repair`, `amended_repair`, `reverted_change`, or `reviewed_no_defect`; for `reader` or `flagged` findings, `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. A `false_positive` needs evidence and no unnecessary edits.
- Use `escalated` when a substantial unmet prerequisite blocks a sound local repair. Name the missing result, attempted closure, sources consulted, and required owner decision; leave the defect and risk review open. Never clear an escalation without owner resolution.
- For a known metadata normalization or audit enrichment, use `reviewed_no_defect`, set `change_kind` to `metadata` or `audit_enrichment`, and use `defect_ids: []`. This cannot close a reader, refuter, gate, or open ledger defect.
- An owner-authorized current-content resolution may address a missing historical preimage only after complete mathematical review of the current carrier and its actual prerequisites. Record `reviewed_no_defect`, `change_kind: "current_content_review"`, `historical_delta_unknown: true`, a nonempty `owner_resolution` of at least 40 characters explaining explicit owner authorization and durable evidence, and `defect_ids: []`. Preserve the prior escalation and historical uncertainty in the report; complete the current risk review. This cannot close a reader, refuter, gate, or open ledger defect, and current hash checks still apply.
- Repair a confirmed defect only when the repair is complete and justified. Make the smallest coherent correction and preserve the content contract. Set `repair_confidence: 1`; update every affected contract, manifest, provenance, risk review, and decision record; reflow and precheck every changed item. A material rewrite invalidates its prior `verification.judge` record.
- If an item's Statement or Definition changes, check every direct dependency and reference consumer's actual use. Make only necessary, surgical consumer repairs within your dispatched batches; escalate affected consumers outside those batches to the owner for supplier-first repair. Continue another hop only when a necessary repair changes that consumer's own Statement or Definition. Do not edit a sound consumer merely because it cites the supplier.
- Append one closed defect-ledger row per confirmed defect, owned at `caught_at_stage: "3a-adjudicate"` and referenced by its decision. Never create a defect row for a mechanical failure.
- Fully author necessary definitions and lemmas only in assigned existing A pages: prove each lemma, declare dependencies and exact AC uses, order suppliers before consumers, and update the manifest and contract. Do not add pairs or pages.
- For every HIGH or CRITICAL item, run `node tools/risk-report.mjs` on its owning batch contract without `--require-reviewed`; read the current proof and reader/refuter and citation evidence; record a specific, complete `risk_review`; then rerun with `--require-reviewed`.
- Keep published content read-only. Record each defective published item in `research/published-consumer-supplier-ledger.md` with exact IDs, evidence, suppliers, status, and repair strategy; maintain its deduplicated classification index. Serialize edits by creating `research/.published-consumer-ledger.lock`, rereading and merging after acquiring it, then releasing only your own lock.
- Maintain `briefs/tasks/frontier-dependency-ledger.md` records for owned consumers. Preserve stable item IDs and keep proposed withdrawals present for the owner to disposition.
- Write exactly the task-named report and decisions file, with one decision per owed obligation and an empty `decisions` array when none are owed. Never judge, stamp, self-certify, dispatch agents, or initiate a judge cycle; report local checks honestly. The engine stamps decision hashes and runs the gate battery after the dispatch.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: mathematical-statistics-foundations-37
role: alpha
label: 3a-batch-17
covers: 17
output: research/mathematical-statistics-foundations-37-alpha-batch-17-3a.md

# Step 3a adjudication — adjudicator G, run `mathematical-statistics-foundations-37`

- Set `G` to the suffix of your dispatch label: `3a-batch-13` means `G` is `batch-13`; a retained legacy dispatch `3a-b` means `G` is `b`. Use that suffix in every path and in the decisions file's `group` field below. The scope file's original assignment group stays unchanged.
- Work only on your `covers:` batches. New dispatches cover exactly one batch. For each batch, read `research/mathematical-statistics-foundations-37-step3-scope-17.json`, its reader report and findings, refuter report, current carriers, and every cited dependency.
- Follow `research/mathematical-statistics-foundations-37-alpha-G-3a-order.task.md` within your dispatched batches. Adjudicate routed items from lowest to highest in-run dependency level, complete each item's risk review before moving higher, and keep all findings for one item together. Page-only obligations retain their own scope. Escalate affected consumers outside your dispatched batches to the owner for supplier-first repair rather than editing another adjudicator's files.
- Decide exactly the routed obligations: `touched:BATCH:ID` and `page:BATCH:ID` for a changed carrier; `reader:BATCH:K` and `refuter:BATCH:K` for the K-th finding in that batch's reader or refuter artifact. `BATCH` is the batch ID, `ID` the carrier ID, and `K` a 1-based position. An untouched, unflagged item owes no decision.
- Apply `briefs/alpha-step3.md` for review, verdict, repair, risk, ledger, and evidence rules.
- Compare current carriers with `research/mathematical-statistics-foundations-37-step3-hash-17-pre.json` and `research/mathematical-statistics-foundations-37-step3-hash-17-post.json` to decide whether reader repairs were accepted, amended, or reverted.
- Write `research/mathematical-statistics-foundations-37-alpha-G-3a.md` with evidence, verdicts, repairs, sources, published findings, checks, and blockers.
- Write `research/mathematical-statistics-foundations-37-alpha-G-3a-decisions.json` as `{version:1,run,group,decisions}`. Include one entry per owed obligation with `obligation`, `id`, `route`, `verdict`, nonempty `evidence`, and `defect_ids`. Write both files even when `decisions` is empty.
- Set `repair_confidence: 1` on every completed repair. Each `reader` and `flagged` decision must reference exactly one closed defect-ledger row.
- An `in-run-dependency` finding retains its original consumer-batch obligation and exact `producer_batch`, `consumer_id`, dependency path, immutable producer pre-reader fingerprint and producer carrier at routing. Open and independently review the current producer proof, contract and manifest; retain `producer_batch` and `consumer_id` in your decision. The producer is outside your edit scope. A current unresolved producer defect must be escalated for its owning batch; source file presence, owner approval of a proposed correction or a pre-reader inventory does not certify the repaired proof.
- Distinguish the original finding from the current source. `observation_basis: "unbound"` means no exact original observed-byte binding is available: keep `historical_delta_unknown: true` and a concrete `owner_resolution` of at least 40 characters explaining the authorized historical disposition, available source evidence and missing-byte limit. Still decide the finding with the normal verdict and exact closed ledger row after independent current proof review. Never mark a true historical finding false-positive merely because the current source was repaired, and never claim that the historical counterexample refutes the corrected current bytes.
- Keep a proposed withdrawal present for the owner; do not delete it.
- Before closing, run `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-17.proof-contracts.json` for each owned batch. Record a complete `risk_review` for every HIGH or CRITICAL item it reports, then rerun each owned contract with `--require-reviewed`.
- If a substantial unmet prerequisite blocks sound local repair, use `verdict: "escalated"`. Evidence must name the missing result, attempted local closure, sources consulted, and required owner decision.
- Do not judge, stamp, or self-certify. The engine stamps decision hashes and runs the gate battery after this dispatch.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.


---

# Owner-authorized focused continuation of native Alpha17

This continuation retains the complete original dispatched task above, its batch17 scope, all six original routed obligations, dependency order, current risk-review duties, outputs and native controls. The original successful Alpha17 attempt1 output/report/decisions/result and prompt are immutable historical evidence archived by root before dispatch. Do not falsify or silently overwrite that archived history. Write the current task-named report and decisions with genuine current verdicts under the ordinary task above. This is a fresh native continuation, not an owner-written judgment.

The original Alpha17 `touched:17:lem-gaussian-location-kl-formula` verdict `reviewed_no_defect`/`audit_enrichment` described item bytes identical to the frozen reader-post carrier and contract-only KL enrichment. That is historical evidence for that earlier carrier. A later independent Alpha18 review confirmed a true nonfatal source-citation defect. Do not retain the old raw-identical/current-sound explanation after editing the source, classify the known defect as false-positive, or claim the earlier verdict independently accepted newly edited bytes. There is an exact source preimage, so no missing-history or current-content-review exception is needed.

## Exact confirmed outside finding to resolve at its owner

Read `research/mathematical-statistics-foundations-37-reader-findings-18.json` finding2 and the actual Alpha18 report/decisions. Original Alpha18 obligations `reader:18:2` and `refuter:18:1` remain owned by batch18; do not add them to your six batch17 decisions or alter their genuine historical findings, immutable routing fingerprints, observed source, report or ledger history. Their producer is batch17 and the confirmed defect is `msf37-b18-3a-gaussian-kl-log-citation`. Alpha18's actual evidence is:

> Independently checked all three current KL proof steps, its batch-17 contract and exact manifest entry, and every used supplier interface. For tau>0 the positive densities give their Radon–Nikodym ratio, whose log is affine and integrable; expectation gives (a-b)^2/(2tau^2), including a=b. F6 only cites log inversion, so the quotient-law attribution is a true nonfatal citation defect. thm-natural-logarithm-laws supplies exactly log(x/y)=log x-log y for positive x,y. Batch 17/owner must add this citation and dependency/contract mirror; current source remains unedited. Closed nonfatal-recorded ledger disposition preserves that pending outside maintenance.

The actual in-run producer is `items/lem-gaussian-location-kl-formula.md`. Its Proof1.2 uses the logarithm quotient of two strictly positive Gaussian densities. Existing F6 cited only `def-natural-logarithm`, which supplies log(exp y)=y but not the quotient law. The exact available supplier `thm-natural-logarithm-laws` Statement gives log(u/v)=log u−log v for positive u,v. The common positive prefactor cancels algebraically. Independently inspect the current whole producer proof and actual supplier interfaces, then perform the smallest sound citation repair.

## Concrete minimal source and mirror integration

Read `research/mathematical-statistics-foundations-37-owner-step3-gaussian-kl-log-law-proposal.json`, which retains complete actual before/proposed-after source, and `research/mathematical-statistics-foundations-37-owner-step3-gaussian-kl-log-law-integration-plan.json`, which gives exact manifest/contract deltas. Confirm current source against the staged actual preimage; if it changed, inspect that delta and adapt the focused repair rather than overwriting current work blindly. This is an in-run draft repair within your assigned batch. Do not edit published suppliers. Root has authorized the following minimal source changes, subject to your independent verification:

Before:

```text
  - def-natural-logarithm

```

After:

```text
  - def-natural-logarithm
  - thm-natural-logarithm-laws

```

Before:

```text
[F6] [[def-natural-logarithm]]: the natural logarithm is the inverse of the real exponential, so $\log(\exp y)=y$.
```

After:

```text
[F6] [[def-natural-logarithm]]: the natural logarithm is the inverse of the real exponential, so $\log(\exp y)=y$. For positive $u,v$, $\log(u/v)=\log u-\log v$ ([[thm-natural-logarithm-laws]]).
```

Before:

```text
For every $x$, direct subtraction of the exponents and [F6] give
```

After:

```text
For every $x$, cancel the common positive prefactor of $p_a$ and $p_b$ and apply the quotient law and inverse identity in [F6] to obtain
```

Keep the original Gaussian KL Statement, every constant, all hypotheses, density construction, affine log-ratio and a=b case unchanged. Existing F6 proof tag is retained because F6 now explicitly includes both supplier statements; no proof renumbering is needed.

Mirror only the actual resulting changes in `research/mathematical-statistics-foundations-37-batch-17.pages.json` and `research/mathematical-statistics-foundations-37-batch-17.proof-contracts.json`: add `thm-natural-logarithm-laws` to this item's deps; retain the existing F6/def-natural-logarithm citation; add F6/thm-natural-logarithm-laws citing its exact Statement with uses `["1.2"]`; update the exact Proof1.2 derivation claim. Preserve other contract rows except changes actually necessary under your original assignment, and record the actual current risk review. No change to this item's mathematical Statement or Definition is authorized or needed, so no consumer source repair is expected; report any unexpected issue to root. Root owns later aggregate metadata projections, hashing, recertification and native gating.

Your current `touched:17:lem-gaussian-location-kl-formula` decision must genuinely describe the owner-native source citation repair and current carrier review using the ordinary original verdict rules (an amended source repair, not raw-identical audit enrichment). Preserve the original six obligations and their true history; do not manufacture an extra native reader/refuter finding. Link the actual Alpha18 confirmed defect and repair evidence. Maintain the original task's defect-ledger and consumer-ledger requirements without rewriting the original batch18 finding or pretending its earlier pending-maintenance record already described the new bytes. Escalate any unresolved routing/schema blocker to root.

Finish the original required focused checks, including final explicit changed-path proof-layout after the final source edit, and report genuine results. Do not run gates or stamp acceptance hashes. Root will archive and collect through the native same-label attempt2 machinery.
