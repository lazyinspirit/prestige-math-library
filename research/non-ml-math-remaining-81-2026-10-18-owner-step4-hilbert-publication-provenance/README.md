# Hilbert imported-publication provenance repair proposal

Existing mechanisms do not suffice. `hasCommittedPriorPublication` accepts only `COMMIT:items/ID.md`; ordinary repair needs an audit or that root Git carrier. Adoption additionally requires that same root Git history and cannot recover this case. The genuine original was published at `physics/items/ID.md`, copied byte-identically through the existing selected-context importer. Its root copy has no prior audit. Neither a fabricated audit nor a new root publication is appropriate.

The original context validator also pins every current root copy to the import raw hash. Therefore recognizing the historical publication in policy alone would leave a real context failure. Both entries need the same explicit lineage support.

`proposal.patch` and `proposed/` contain the isolated implementation. `guards.json` binds canonical preimages; `before/` archives them. No canonical code, item, claim, native state/evidence or actual repair receipt was written by this agent. Root's current Hilbert source is already the separately accepted correction; the exact pre-edit archive is recorded in actual-provenance-inspection.json. Physics and the immutable import remain original.

## Narrow implementation

* Move existing historical input/closure/source/review/acceptance helpers without changing their checks to `tools/physics-math-context-history.mjs`. The importer and its public API/CLI remain in `physics-math-context-import.mjs`; existing historical creation checks are retained. The new shared leaf never imports or calls the current repair policy. There is no module or verification recursion.
* Add a historical physics-publication authenticator to that leaf. Require explicit `{path, sha256, source_path}` at `prior_publication_context`, alongside `prior_publication_commit`. Match the exact run import filename, item ID, root path, physics source path, original complete raw bytes and import file/ownership row. Authenticate the entire unchanged import context and actual source/review/acceptance evidence. Enforce full commit identity, ancestor, published original bytes, publication no later than import, and import no later than the pre-edit claim. Any error returns false.
* In ordinary recorded repair policy, explicit imported lineage must authenticate even if another publication basis could otherwise pass. It cannot be used with adoption claims. Existing ordinary/audit/root-commit/adoption guards remain intact, including current hash, original archive, unique claim/group, ledger and both actual local checks.
* The public context validator continues to reject arbitrary raw drift. Its sole new successor case requires the exact immutable original pin as the repair before archive, the bound original import reference, and a fully current ordinary policy-valid published root correction. The corrected carrier must remain an eligible mathematical class. The root repair's receipt, before archive, claim and ledger join reached evidence; original physics/import/context/review pins are never refreshed. Frontier capture remains rejected.

The small fixture inventory edits only copy the extracted module and its imports into existing isolated test sandboxes. They do not change acceptance assertions. Tools documentation explains the protocol; the SCHEMA addition links to it. WORKFLOW.md is untouched.

## Actual historical evidence

`actual-provenance-inspection.json` records the genuine full source Git inspection: ancestor `b96c9d6085c3a5fbe88ed025eec5bad7b84dd396`, exact original physics path, and raw SHA-256 `24ef973efec35a5f3a9a538e17ed689ee4bdccda20cee043e4a0a94479ecb62b`. The actual root pre-edit archive has that same raw hash. No current-root-equals-original assertion is made.

`receipt-prior-publication-reference.json` gives only the genuine new receipt reference fields. Root must merge them into its new ordinary repair receipt after actual local checks and ledger evidence. The ordinary pre-edit ownership claim already recorded by root remains unchanged.

## Tests performed

All runs used an isolated temporary overlay containing proposed code, never production canonical files or native gates. The import/context suite passed 30/30, including the current successor path through both direct policy and public context verification, immutable-original preservation, and adversarial reference/path/ID/hash/commit/ancestor/time/owner/before/source/import/review/acceptance/check/ledger/current/adoption defects. The existing published-repair policy suite passed 106/106, preserving ordinary audited/root-publication, adoption and refresh behavior. `test-results.json` records commands and counts, including the initial direct `.mts` launch rejected by Node before tests; the repository TypeScript runner then executed it successfully.

Synthetic fixture checks model receipt mechanics; they do not claim real mathematical audit or item precheck/render results. Root still owes canonical integration/review, its own scoped tests/code commit, actual Hilbert local checks, ordinary receipt/ledger creation and every current native gate.

All five other edited fixture files were also executed together after fixing their copy inventories: 1..37; # tests 37; # suites 0; # pass 37; # fail 0; # cancelled 0; # skipped 0; # todo 0; # duration_ms 3437.266539;  The physics open-problem copy inventory now conditionally adds mathematics dependencies only for mathematics fixtures; frontier fixture inventories are deduplicated. An initial overlay-only missing autopilot/bin dependency was corrected before the successful combined run.
