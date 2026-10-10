# Owner scope and authoring direction

Read `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` before working. It is binding and overrides stale task or design text.

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

> The dispatch supplies batch `<i>`.

# Post-recheck scaffold repair — batch `<i>`, `physics-em-sr-40-2026-10-08`

Read `research/physics-em-sr-40-2026-10-08-scaffold-closure.json` and take only `work[]` entries
whose pages belong to batch `<i>`. Resolve each finding in this batch's
manifest, coverage, and notes, or rebut it with exact mathematical and source
evidence. Add every missing definition, lemma, theorem, and backward dependency.

Apply `briefs/beta-scaffold.md`'s Phase-2 boundary. Rebut page-only published
debt with the actual proof-dependency evidence and retain it for the consumer
ledger. Do not repeatedly rewrite a scaffold to fix unrelated published items.
Actual inadequate suppliers still need a local replacement or authorized repair.

If closure requires a new A/B pair, specify it completely and keep the consumer
blocked until the authorized plan writer adds it to the prose scaffold and
plan. Every added item needs a coverage disposition and either a verified
source/locator or a complete alternative under the documented source-drop
contract in `briefs/beta-scaffold.md`.

Append `## Scaffold-fix round` to the batch notes with each finding ID,
disposition, evidence, change, and remaining blocker. Run the batch coverage
checklist, whole-run `manifest-deps`, manifest-only content policy,
`validate-plan`, `extcheck`, and affected source checks. Do not edit shared plan
files, items, published pages, or another batch.
