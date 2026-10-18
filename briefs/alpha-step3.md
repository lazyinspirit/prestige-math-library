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

**Diagram review and repair (Steps 2–5).** Adjudicate every TikZ/tikzcd diagram
in your assigned scope, including commutative diagrams, string diagrams, Young
tableaux, braids, Temperley–Lieb diagrams and other diagram types. Check
mathematical correctness against the text: objects, labels, arrow directions,
compositions, crossings, conventions and claimed identities. Repair incorrect
diagrams and add missing diagrams wherever the exposition requires them, within
your authorized write scope. Read-only roles report defects and needed additions;
escalate changes outside your scope. Keep diagrams compatible with conventions
in the literature, and keep rigorous proofs independent of the diagrams.
