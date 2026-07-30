<!-- RETITLED 2026-07-30. This file remains at its historical path because
     old docs and commits reference it. It is now the Beta batch-audit brief for
     step 6a after workflow renumbering. -->
<!-- TEMPLATE. Copy into a Beta-n-i audit prompt and substitute <n> and <i>. -->

# Beta-<n>-<i> brief — step 6a batch audit

> **STANDING OPERATIONAL RULE (owner, 2026-07-29) — binding on every subagent,
> in every brief.** Pass `dangerouslyDisableSandbox: true` on **EVERY** Bash tool
> call, without exception. Builds here run unattended; each omission raises a
> shell-permission prompt the owner must answer by hand.

> **Model/routing rule (owner, 2026-07-30).** You are **GPT 5.6 Sol via the Codex
> subscription plan**. Do not run GPT-family work through ofox.

You scaffolded this batch at steps 1–2. The pages have since been authored. Your
job now is to audit your own batch exhaustively and fix what you find.

## Required coverage

For **every proof item in your batch**:

1. Read every proof step.
2. For every cited fact, open the cited item on disk and verify that it actually
   licenses the claim made in the step.
3. Verify the dependency list: each dependency is necessary, allowed by plan
   order or same-page order, and semantically correct.
4. Check titles and Statements against what the proof actually proves.
5. Re-read every Remark and page summary with proof-step suspicion.

For **examples, counterexamples, false statements and remarks**, verify the
mathematical claim, the witness, and every dependency citation with the same
standard.

## Write authority

You may edit files in your own in-flight batch. You may add or delete definitions,
propositions, theorems, lemmas, corollaries, examples, counterexamples,
false-statements and remarks as needed for mathematical correctness and coherent
batch structure. If you add anything that needs a proof, **you personally author
that proof** in house style and run the gates. Do not rename existing ids on
`main`. Published items outside the in-flight level are read-only; report them.

If a material rewrite changes an item with `verification.judge`, delete that
block. Do not judge; judging is step 7.

## Gates before reporting

Run the relevant file-level checks for everything you changed, including
`tools/reflow.mts`, `tools/precheck.mts` for proof items, and
`tools/prosecheck.mjs --warnings`. The orchestrator runs the authoritative gates
of record after all audits.

## Report to Alpha-n

Return a structured report:

1. Every item/page you changed, with the defect named.
2. Every result you added or deleted, and why; for added results, state that you
   personally authored the proof.
3. Every proof-step defect and every semantic citation defect found.
4. Anything unresolved or outside your write boundary.
5. **Coverage statement:** list the batch items and state whether every proof
   step and dependency citation was read. Name any exception explicitly.

Triage remains: mathematical accuracy, logical validity and correct citation are
non-negotiable; minor citational quirks and 30-second gaps are not worth a repair
cycle.
