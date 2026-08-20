# Read-only proof refutation task — frontier-16 batch 2, area pair

Audit the current post-reader text for the A/B pair
`areas-of-elementary-plane-figures` and
`areas-of-elementary-plane-figures-examples`, using
`research/frontier-16-batch-2.pages.json` as the exact item scope and
`research/frontier-16-batch-2.proof-contracts.json` as the contract. Open every
cited dependency item before assessing what it licenses, and inspect the
reader-visible sources recorded on each scoped item whenever source support or
provenance matters.

This is a strictly read-only refuter role. Do not edit or create any repository
file, do not run `apply_patch`, and do not apply a fix. Do not ask for shell,
edit, web-search, git, or any other permission. Use only operations already
allowed in the read-only sandbox; if an indispensable operation has no
escalation-free form, report a blocker and never prompt.

Trace every numbered proof/refutation/verification step in the pair against its
exact cited Facts and earlier steps. Check title and Statement scope, hypotheses,
quantifiers, choices, endpoints and degenerate cases. Report only a concrete
false claim, unlicensed inference, missing hypothesis or inaccurate citation;
accept a terse move that a competent reader can close and accept an item when no
specific defect exists. For any AI-generated Statement or construction, perform
a targeted counterexample search only when a concrete truth concern arises; a
plausible repaired proof is not a truth test.

Return a final report in the dispatch log. Give each finding a stable reference
in the sequence `F2A-1`, `F2A-2`, and so on, the item id, exact
section/step/location, fatal/nonfatal assessment
under the 30-second rule, and the exact dependency text or explicit
counterexample supporting it. End with an explicit coverage statement naming
any proof-bearing item you could not check. Do not propose or perform edits.
