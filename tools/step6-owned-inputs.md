# Step6 owned-input selection

`step6-owned-inputs.mjs` resolves commit ownership separately from the scientific
prerequisite/context seal. With an exact closeout policy, genuine
`preflightCloseoutScope` validates that policy, its ownership evidence, explicit
shared-fragment and plan-projection authority, current manifests, and Git
inventory before shared ownership is selected.

When every shared carrier is either absent from the selected ownership set or
covered by an explicit validated fragment/plan projection, ownership selection
returns the same sorted set immediately. These are exactly the existing loop's
skip conditions; no scientific projection result could change that set. This
avoids unused repeated whole-context discovery and shared-source projection.
If even one carrier still needs ordinary ownership classification, the original
complete path runs unchanged. Selection without a policy is unchanged.

This is an invocation-local branch, with no persistent cache or retained pass.
`sourceState` and report/readiness still build their actual scientific trees.
Metadata/render preparation still compares independent before/after source
seals. Final native preflight, actual HEAD/index composition, foreign-byte
preservation, current policy/source checks and commit CAS remain required.
The branch neither grants new ownership nor reuses earlier gate results.
