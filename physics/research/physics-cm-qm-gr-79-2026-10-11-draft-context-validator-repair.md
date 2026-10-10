# Draft supplier context classification repair

The batch-7 notes identified 34 `audit-manifest` unresolved relationships in completed GR batches 65 and 66. A focused native diagnostic reproduced all 34. Each target exists as a draft mathematics item on the draft `special-relativity/sr-spacetime-primitives` page, outside this run's manifests. The existing run owner direction explicitly permits existing draft EM/SR suppliers at their inspected actual scope. The validator incorrectly required outside suppliers to be published even under that direction.

The six targets are `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`, `lem-timelike-cone-has-two-convex-components`, `lem-lorentz-form-has-orthonormal-basis`, and `def-lorentz-orthogonality-and-orthogonal-complement`. Their actual definitions, statements, complete current carrier text and declared prerequisite lists were read for this diagnosis. This repair does not provide an independent mathematical audit, source retrieval or proof acceptance.

The existing owner-direction frontmatter now names these exact canonical IDs in `external_draft_context`. The physics validator uses that list only for a single identified run, existing draft carriers with a declared mathematics/physics domain, and actual EM/SR page placements. It reports those edges as `external-draft-context`, retaining `target_status: draft`, the owner-direction path and `requires_semantic_audit: true`. Other drafts and missing targets still fail. Published/backward, in-run and forward-reference classifications retain their ordinary behavior. No supplier joins the manifest subject inventory, and no production item, page or manifest changes.

The existing gate input mechanism binds the owner direction when `audit-manifest` belongs to a battery. Existing prerequisite closure already binds the actual supplier carriers; this adds the permission input without extending the review frontier or creating a receipt/stage.

Focused actual-run diagnostic, from the repository root:

```bash
node tools/physics-support/audit-manifest.mjs physics/research/physics-cm-qm-gr-79-2026-10-11-batch-{65,66}.pages.json --json
```

Before: exit 1, 34 unresolved relationships. After: exit 0, 34 draft-context relationships and zero defects. The same 324 relationships cover the same 45 owned items in the same two batches. All 34 context edges retain draft status and semantic-review duties. Counts in the other classifications remain 142 published/backward, 120 same-batch and 28 cross-batch.

A focused disposable diagnostic invoked the normal CLI on one source with an authorized existing draft target, an unapproved existing SR draft target and a missing target explicitly named in the permission list. It returned exit 1 with one context edge and two unresolved edges, demonstrating that permission neither authorizes unlisted drafts nor creates missing carriers. The temporary diagnostic directory was removed. Syntax and `git diff --check` passed. No unit tests, controller restart, gate attempt, content edits or commits were performed.
