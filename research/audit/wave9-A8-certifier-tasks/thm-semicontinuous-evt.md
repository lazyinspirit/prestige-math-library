# Wave 9 A8 exact-final certification target

## Assigned repaired item — `thm-semicontinuous-evt`

Item path: `items/thm-semicontinuous-evt.md`.

Verification-stripped exact-final normalized SHA-256 at dispatch:
`2c41870f7473c660ab787bedf0da90b98661325380944cc20ffdc44e999ef685`.

Named fatal repair: the public Statement formerly claimed that an upper
semicontinuous function on a compact set need be neither bounded below nor
attain its infimum. Its named companion example is bounded below by zero, so
that first clause was false and unsupported. Alpha removed only the false
bounded-below clause. The exact-final Statement now says only that upper
semicontinuity does not force attainment of an infimum.

Read and certify the exact current item from disk. Independently compute the
normalized hash and compare it with the value above. Read every one of these
13 current declared dependencies in full:

- `def-semicontinuity`
- `thm-semicontinuity-level-set-characterisation`
- `def-open-cover-r`
- `def-max-min`
- `def-bounded-set`
- `lem-sup-epsilon`
- `def-complete-ordered-field`
- `cor-archimedean-reciprocal`
- `def-open-and-closed-in-r`
- `lem-finite-set-has-max`
- `thm-of-archimedean`
- `def-canonical-natural`
- `lem-of-naturals-positive`

Also read the complete current companion consumer
`items/cex-upper-semicontinuous-need-not-attain-its-infimum.md`, and the exact
current contract object `contracts["thm-semicontinuous-evt"]` plus the
consumer's L5 citation in
`research/audit/wave9-proof-contracts.json`. Confirm the namespaced contract
at `research/audit/wave9-real-analysis.proof-contracts.json` agrees.

The target must carry `verification.precheck: pass` but no `verification.judge`
or `verification.verified` block at certification time. Provenance and sources
are intentionally unchanged unless you identify a concrete mismatch.
