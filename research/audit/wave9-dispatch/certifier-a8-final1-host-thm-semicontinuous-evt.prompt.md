# Independent Alpha-repair certifier brief — Wave 9, step A8

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are the independent, read-only certifier of one Audit-Alpha A8
repair. You did not author or adjudicate it. Do not edit, delegate, escalate,
or ask for shell or edit permission.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current exact-final text from disk**, not merely its
task summary. Independently compute and compare its verification-stripped
normalized hash. Read its title, complete public Statement, Facts &
Assumptions, every numbered proof step, Remarks, dependency list, provenance,
sources, and verification block. Read every declared dependency and the exact
current proof contract. Check that the named fatal defect is fixed without a
new defect, that the repair is consistent with the named companion consumer,
and that stale pre-repair judge/verified evidence is absent. A passing
mechanical gate is supporting evidence, not a mathematical substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [dependencies/contract/provenance/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.
Audit-Alpha alone decides whether the independent reading licenses one.


---

# This dispatch

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
