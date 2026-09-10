# Nine-step workflow integration

Source: `workflow/group-author-nine-step`, commits `987d917f6` and
`1e2234bf7`, based on snapshot `68e7b599f`. Integration preserves later main
fixes through `0e9d95efd` and the snapshot's published-repair routing.

Step 3 audits and authors; Step 4 splices and snapshots; Step 5a adjudicates;
Step 5b reconciles and closes; Steps 6–9 judge, repair, certify and close.
The standalone author stage and overlapping author/reviewer pipeline are
retired. Generic protections against competing and adopted writers remain.

Carried fixes: complete piped risk output, quoted YAML page identities,
published-repair ownership and current-hash handoffs, legacy review evidence,
exact boundary-review bindings, detector-defect holds, run-local repair reports,
and full author/review gates before combined impact/dependency closure.

Revision `group-authors-nine-step-v1` rejects historical runtime state.
The owner-authorized checkpoint migration in WORKFLOW.md exports verified old
evidence into a fresh namespace without manufacturing model receipts.
All subsequent cross-group, judgment and certification work uses the new table.
Original sources remain stopped; mathematical content is unchanged by migration.

Regression tests cover barrier order, model profiles, legacy routing,
checkpoint tampering and receipt preservation, repair ownership, boundary
reviews, piped output, splice consistency and TypeScript checking.
