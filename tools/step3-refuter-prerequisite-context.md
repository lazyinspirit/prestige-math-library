# Optional prerequisite context in native Step 3 refuter reports

`step3-scope.mjs` keeps `refuter_scope` as the required read and flag scope.
Every required carrier must still be opened; duplicates, overlapping coverage
arrays, missing reads and any `not_opened` entry fail as before.

A native report may additionally list unflagged prerequisite reads in `opened`.
Each extra must be reachable from an actual required scoped subject through the
existing `publishedDependencies` or `inRunDependencies` traversal, with their
ordinary published/current-run ownership and declared-edge checks. Unknown
extras fail. Extra reads do not expand the allowed flag set: a foreign finding
still needs the existing explicit finding route and required-scope treatment.
The registered downstream29 route remains required coverage under its own policy.

Collection preserves the complete reported `opened` set in the derived scope
and records its extra portion separately as `refuter_context_opened`. It leaves
the original report, fields, findings, obligations and computed `refuter_scope`
unchanged. Later checks reconcile the original report and recompute current
context eligibility, enforce the exact required-plus-context coverage union,
and retain all ordinary finding/current-carrier and ledger rules. Old reports
without extra reads need no new field or authority.

Optional context records a genuine read only. It creates no proof acceptance,
new review obligation, source-edit permission, or owner registry. Native dispatch
authenticity and evidence preservation retain their existing checks.
