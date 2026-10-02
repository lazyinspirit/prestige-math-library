# Proof layout gates — implementation validation

Implemented 2026-10-02. Step 9 readiness requires `proof-step-separation`
and `proof-blue-tags`. Both reuse one renderer scan; terminal gates and the
pre-commit command verify current input hashes. There is no added agent stage.
The workflow revision is `batch-step7-rounds-v3-proof-layout`; historical run
receipts are not adopted under this revision.

## Local checks

- `node tools/tsx-run.mjs --test tools/autopilot/test/proof-layout.test.mts tools/autopilot/test/step9-report.test.mts tools/autopilot/test/run-close.test.mts tools/autopilot/test/merged-stages.test.mts`:
  25 passed, 0 failed, approximately 5.3 seconds locally.
- Explicit-path proof-layout scan of the Cartier/Weil and Residues/Serre
  Duality A/B inventories: 105 unique items, 629 numbered steps, 0 defects.
  Legacy QED immediately before trailing tags is recognized for closing notes;
  new authoring instructions use canonical `[tags] ∎`.
- `git diff --check`: passed before commit.

The broader `workflow-transitions.test.mts` suite has two existing failing
assertions: it expects Step 5 adjudication to be outside the reader pipeline,
and expects an obsolete literal phrase in the author brief. Both assertions
were rerun against an untouched HEAD archive and failed there too. These
unrelated workflow/prompt expectations were not changed by this implementation.

Checks are local software/format validation, not a mathematical audit.
