# Risk report output repair

Resolves workflow finding `p2c24-6b-e10-risk-json-pipe-truncation` without changing
mathematical scores, required-review policy, or worker models.

The original large-output regression exited zero with an unterminated JSON
string at byte146176. Immediate `process.exit()` discarded buffered stdout.
`finish()` now sets `process.exitCode`; `main()` returns after early errors,
so output drains without falling through into invalid contract data.
Routing descriptions now name the actual direct6B reviewer, not retired readers.

Evidence: `tools/autopilot/test/risk-report-output.test.mts` fails before the fix
and passes afterward. It checks a2.4MB review string, exact round-trip content,
out-of-scope selection, missing input and invalid shape, including error exit1.
Batch10's actual piped JSON parses with59 findings and zero errors (exit0).
Source: https://nodejs.org/api/process.html#processexitcode.

The original append-only nonfatal finding remains historical; this is its
applied repair receipt, not another defect or an independent mathematical audit.
No controller restart is needed: risk-report is an external tool freshly loaded
by each gate. Live authors/reviewers were not interrupted. Full-frontier gates
and Step6D closure remain pending.
