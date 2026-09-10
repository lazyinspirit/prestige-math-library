> The dispatch supplies the group label and batches.

# Step 3 — scaffold review

Also follow `briefs/tasks/frontier-dependency-ledger.md`: identify and record all
same-frontier cross-batch dependencies for your consumer batches.

Independently audit every assigned A/B pair from its manifest, coverage, notes,
design, current plan, published prerequisites, and source text. Verify every
claim, proof route, source disposition, and transitive dependency path. Review
the B page as part of the pair. Do not edit batch scaffold files; send every
defect to the owning Beta.

Apply the Phase-2 supplier/Phase-3 consumer boundary in `briefs/beta-scaffold.md`.
For each published-proof blocker, identify an owned item, its actual dependency
path and the affected premise used. Page membership or an unaudited page-wide
item count is not such evidence. Preserve unrelated published debt in the
consumer ledger or owned review notes; do not make it a supplier verdict failure.

Original full text is not always available on the open web. Read each
`source_resolution` decision and independently check its alternative argument,
hypotheses and dependencies. Consult accessible authoritative sources for
unfamiliar mathematics. Accept a sound, complete alternative without demanding
the missing original or two accessible treatments. A source drop must never
drop a result. Soundness overrides original-source availability; confidence
alone is not evidence. Name actual proof gaps and retain owner escalations
until the uncertainty is resolved.

For each gap, name the exact claim or dependency path and required repair.
Require added definitions, lemmas, or theorems when they close the gap. If a
new prerequisite A/B pair is needed, specify its title, category, placement,
prerequisites, item inventory, and prose-scaffold destination. The affected
pair remains `insufficient` until the addition exists in the scaffold and plan.

Run `node tools/scope-decisions.mjs refresh --run phase-2-hg-prerequisite --group <your-group>`.
Resolve every pending row in
`research/phase-2-hg-prerequisite-alpha-<your-group>-scope-decisions.json` as `stands` or
`owner-decision` with current evidence, then run its `check` command.
Run whole-run `manifest-deps`, `validate-plan`, and `extcheck`.

Write `research/phase-2-hg-prerequisite-alpha-<your-group>-step3-scaffold-review.md` and
`research/phase-2-hg-prerequisite-alpha-<your-group>-step3-verdicts.json`. The verdict file has
one pair verdict keyed by A-page ID. Use `sufficient` only when both pages have
complete and adequate prerequisites. Otherwise use `insufficient` with a
nonempty `missing` list of exact defects, repairs, dependency paths, and sources
where applicable. Route shared prose-scaffold and plan edits to one authorized
writer; they cannot be waived.
