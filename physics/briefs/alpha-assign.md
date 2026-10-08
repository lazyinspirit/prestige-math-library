# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Assign batches to group Alphas

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

This dispatch produces only `research/<run>-alpha-groups.json`. It assigns the
run's existing batches to Alpha groups; it cannot create, split, merge, or
renumber batches. Step 0 creates batches, and Step 1 fills their item lists.
Do not review content, author mathematics, or drive a workflow transition.

Read the current facts before choosing a partition:

```sh
node tools/physics-support/alpha-groups.mjs --run <run> --facts
```

Write a JSON array of objects with `label`, `covers`, and `rationale` fields.
The validator requires a single lowercase-letter label, a nonempty batch list,
and a concrete rationale of at least 20 characters.

The partition must cover every actual batch exactly once, use at most ten
groups, and give no group more than three batches. Keep a category together
whenever all of its batches fit in one group; the validator enforces this.

Use the `items` count for every batch in `--facts` to balance authoring load.
For each proposed group, sum the item counts of its covered batches and compare
the group totals. Prefer a partition with similar group totals: avoid combining
several large batches in one group while other groups have much less to author.
Within the category and capacity constraints, reduce the largest group total
and the spread between group totals before optimizing cross-group dependency
edges or residual mathematical affinity. Do not pretend an indivisible large
batch can be balanced by Step 2; report that limit explicitly. Include each
group's item total and the load/coherence tradeoff in its rationale. Do not
rely on batch-number order.

Validate the finished artifact before returning:

```sh
node tools/physics-support/alpha-groups.mjs --run <run>
```

No permission prompts. Record a genuine blocker in the artifact's rationale or
your final report rather than broadening the scope.
