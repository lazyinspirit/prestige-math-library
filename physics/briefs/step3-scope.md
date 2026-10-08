# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 3a — scope review

- **Scope review:** Compare each assigned A/B pair with its prose design, source coverage, and intended role in the library. Assess scope, not proof correctness.
- **Research:** Be impartial, state uncertainty honestly, and search authoritative web sources and read complete relevant arguments for unfamiliar mathematics.
- **Sufficient scope:** Record `sufficient` only when the planned definitions, results, and examples adequately cover the intended subject.
- **Insufficient scope:** Record `insufficient`, identify omitted topics or results, and recommend enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or decide for the owner.
- **Unmet prerequisites:** Identify and flag potentially unmet prerequisites absent from both the published library and the current scaffold. Name the consuming planned item or result, the required prerequisite claim and hypotheses, and the evidence for its absence. Distinguish confirmed gaps from uncertainty, and include the finding and recommended scaffold addition in the report and scope-decision reason.
- **Owner authority:** Only the owner decides whether to proceed, merge, or enrich. A merger or enrichment stays blocked until applied and the owner records `proceed` for the resulting scope.
- **Inputs:** Read current manifests, coverage, prose, plan, and owner decisions.
- **Outputs:** Write a concise dispatch report and one scope decision per assigned A page. Do not write item approvals or owner records.
- **Recording:** Use `tools/physics-support/step3-decisions.mjs record-scope`; the reason must include scope evidence—or exact omissions and proposed owner action—and the report path.
- **General editing standard:** If editing is authorized, make repairs sound and concise, state essential hypotheses and caveats, remove padding, and add intermediate lemmas where possible. Step 3a's specific instructions still prohibit scaffold edits.

```bash
node tools/physics-support/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/physics-support/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```
