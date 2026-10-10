# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Separate consumer maintenance

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Read CLAUDE.md, README.md, the generated task and its frozen assignment fully.
The generated task is authoritative for exact identities, supplier events,
assigned existing items, output path and report schema. You are one of three
disjoint maintenance lanes. Empty lanes return honest empty decisions.

Edit only assigned items outside the immutable frontier. Published frontier
items belong to ordinary Step 5 and are not your maintenance targets. No new
items, unrelated edits, cosmetic improvements or weaker replacement claims.
This assignment is separate from Step-5 repair, judgment, adjudication and gates.
Do not launch workers, write judgments or certificates, or claim independent
review of your own repair.

Examine the exact mathematical use of every changed supplier listed in the
assignment. A candidate is not automatically defective. Leave a sound consumer
byte-for-byte unchanged. Repair only an actual invalidated claim or use, with
the smallest logically sufficient edit. Understand the statements, proof and
prerequisites; logical validity is the ground truth. Sources and earlier reviews
can be mistaken. When unsure, read authoritative arguments and check their
hypotheses. Record actual understanding, sources read and uncertainty honestly.
Unresolved uncertainty blocks completion; never invent evidence or confidence.

Keep item ownership disjoint. For necessary shared metadata work, acquire
`node tools/physics-support/step5-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`,
reread the current file, make and check the minimum change, then promptly use
`release`. Exit 2 means busy: continue independent work and retry before edits.
Never hold the lock during research or waiting, or remove another owner's lock.
Record exact shared-file changes in run evidence and the task's integration
handoff. The maintenance collector currently verifies item carriers only; do
not claim it has verified shared metadata. Keep operational history out of the
canonical published-defect ledger.

Return `{run,pack,lane,input_sha256,decisions:[...]}` at the task's output path.
Copy identity and `input_sha256` exactly; the controller generates content
hashes. Each assigned item needs one decision with these fields:

- `id`, `disposition` (`sound` or `repaired`) and a specific `reason`.
- `understanding:{basis:"familiarity"|"sources",evidence,uncertainty:false,sources:[{url,read:true,evidence}]}`.
- `event_uses:[{event_key,affected_use,reason}]`, covering every exact supplier
  event assigned to that consumer.
- `affected_use`, `invalidated_claim`, `minimality` and
  `edits:[{before,after,necessity}]` for a repaired decision.

Every explanation must contain at least 40 characters of specific evidence.
Use `basis:"sources"` when source reading supports your understanding, with
nonempty actually read URLs and exact supporting evidence. Never claim
familiarity to evade required reading. For unresolved mathematics, report
`disposition:"escalated"` or `uncertainty:true`; collection must remain blocked.

Every declared edit needs its own precise necessary-repair explanation. Each
`before` snippet must occur uniquely at its sequential position in the frozen
input; `after` is its exact replacement. Account for every changed item byte.
Sound decisions use `edits:[]` and explain why every supplier event leaves the
consumer valid. Exact reconstruction checks accounting; it does not prove
mathematical necessity or minimality. You remain responsible for the argument.

The controller handles each supplier-interface event and outside consumer once;
gates or unrelated context changes do not reopen it. A necessary change to this
consumer's Statement/Definition creates another direct-consumer event. Proof-
only, citation, dependency and metadata edits do not propagate. Do not expand
a transitive closure or edit unassigned discoveries. The engine routes further
outside work to maintenance and returning frontier targets to ordinary owners.
Report unfinished work clearly. Central certification waits for required
frontier repair and maintenance closure after every writer drains.
