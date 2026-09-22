# Final adjudication: item 1

Run: phase-2-remaining-27. Group c. Item: thm-orthogonal-decomposition-by-a-closed-subspace.

Disposition proposed: repaired. Source status: familiar. The nearest-point and orthogonal-decomposition argument and scalar algebra are familiar enough to verify directly; no external verification was needed or claimed. Historical source-reading receipts in the coverage file were inspected as context, not represented as my own source readings.

## Evidence examined

Read CLAUDE.md, README.md, SCHEMA.md and the relevant WORKFLOW.md rules. The rendered step7-bundle-c contains no item blocks, so the actual item and dependencies were used. Read the current full item and all six declared dependencies: thm-projection-onto-a-nonempty-closed-convex-set, thm-hilbert-projection-variational-characterization, def-linear-subspace, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-countable-choice. Inspected the owning A/B pages, batch-1 manifest entry and coverage section, the full item proof contract including risk/boundary records, group-c conventions and concerns, Alpha's item-specific Step-7 report and adjudication, and both Terra rejection rows.

The original rejection (2026-09-19T08:49:33.219Z) concerns an unsupported attribution of sequential closedness to def-metric-topology. Sol removed that unused fact and associated dependencies. This repair is sound: the decomposition proof invokes the nearest-point theorem and never independently takes a limit in M. The final rejudge (2026-09-19T18:51:33.581Z, context 28b48819a85089e56ac44dd980a284bbb53a940c82eb4e5d5410c53d44cf6faf) correctly identifies the remaining use of i over the real field.

## Mathematical basis and repair

The claim retains Countable Choice, arbitrary real or complex Hilbert H, and a closed linear subspace M. M contains zero and is convex by closure under addition and scalar multiplication; the supplied nearest-point theorem therefore gives p in M. The variational theorem applies with C=M. Testing p+u and p-u gives Re<x-p,u>=0 for every u in M. In the real case this is the whole pairing. Only in the complex case use iu in M: conjugate-linearity gives <x-p,iu>=-i<x-p,u>, whose real part is Im<x-p,u>. Thus both components vanish and x-p lies in M-perp. The difference of two decompositions lies in M intersect M-perp and has zero squared norm, so is zero. This proves existence and uniqueness. M={0}, M=H, x=0 and H={0} all satisfy the same argument. No basis selection or extra choice is used; Countable Choice is consumed only through nearest-point existence.

Replaced step 2.1 by this field-specific argument and synchronized its contract derivation and risk record. Removed the two already-unused dependencies from the item's owning manifest entry to match Sol's existing item repair. All current dependencies are same-batch or published; the batch-1 consumer ledger has no cross-batch row for this item, so no row can properly be added. Ran the required frontier ledger refresh; unrelated consumer records were preserved. No supplier was edited, no new lemma was added, and no published-defect ledger entry was required.

## Checks and next action

Focused precheck: 1 checked, 0 failing. Rendercheck: passed. Strict owning proof-contract check: 0 errors, 0 warnings, 1/1 item checked. Global depcheck: exit 0, no cycles or unresolved references, with 277 repository warnings; these do not constitute a whole-library mathematical audit.

Record the exact repaired carrier with step7-terminal-resolution.mjs before starting item 2. No outstanding mathematical obligation for this item. No judge verdict or pass stamp was created.
