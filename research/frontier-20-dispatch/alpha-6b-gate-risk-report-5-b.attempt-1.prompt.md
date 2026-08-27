# Step-6 Alpha

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: frontier-20
role: alpha
label: 6b-gate-risk-report-5-b

# Step 6b repair — risk-report

This file is the authority for repair cycle 5.
Primary gate: `risk-report`
Reason: 13 high/critical item(s) in Alpha group b lack complete risk_review records
Owning Alpha group: `b`
Live item ids: `lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined`, `thm-harmonic-majorant-characterization-of-plane-subharmonicity`, `thm-c-two-characterization-of-plane-subharmonicity`, `thm-plane-subharmonic-functions-are-locally-integrable`, `thm-log-modulus-of-a-holomorphic-function-is-subharmonic`, `thm-decreasing-limit-theorem-for-plane-subharmonic-functions`, `thm-upper-envelope-theorem-for-plane-subharmonic-functions`, `thm-poisson-modification-preserves-subharmonicity-and-majorizes`, `thm-perron-envelope-is-harmonic`, `thm-barrier-characterization-of-regular-boundary-points`, `thm-perron-solves-dirichlet-on-regular-plane-domains`, `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`, `thm-conformal-transport-of-plane-dirichlet-solutions`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
HIGH 6 [lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-harmonic-majorant-characterization-of-plane-subharmonicity] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [thm-c-two-characterization-of-plane-subharmonicity] 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 5 [thm-plane-subharmonic-functions-are-locally-integrable] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-log-modulus-of-a-holomorphic-function-is-subharmonic] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-decreasing-limit-theorem-for-plane-subharmonic-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [thm-upper-envelope-theorem-for-plane-subharmonic-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 10 [thm-poisson-modification-preserves-subharmonicity-and-majorizes] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-perron-envelope-is-harmonic] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-barrier-characterization-of-regular-boundary-points] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 7 [thm-perron-solves-dirichlet-on-regular-plane-domains] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [lem-boundary-point-whose-complementary-component-contains-another-point-is-regular] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
HIGH 7 [thm-conformal-transport-of-plane-dirichlet-solutions] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
risk-report: 64 error(s), 393 item(s) routed
ERROR risk-review-missing [lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]: lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-harmonic-majorant-characterization-of-plane-subharmonicity]: thm-harmonic-majorant-characterization-of-plane-subharmonicity is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-c-two-characterization-of-plane-subharmonicity]: thm-c-two-characterization-of-plane-subharmonicity is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-plane-subharmonic-functions-are-locally-integrable]: thm-plane-subharmonic-functions-are-locally-integrable is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-log-modulus-of-a-holomorphic-function-is-subharmonic]: thm-log-modulus-of-a-holomorphic-function-is-subharmonic is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-decreasing-limit-theorem-for-plane-subharmonic-functions]: thm-decreasing-limit-theorem-for-plane-subharmonic-functions is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-upper-envelope-theorem-for-plane-subharmonic-functions]: thm-upper-envelope-theorem-for-plane-subharmonic-functions is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-poisson-modification-preserves-subharmonicity-and-majorizes]: thm-poisson-modification-preserves-subharmonicity-and-majorizes is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-perron-envelope-is-harmonic]: thm-perron-envelope-is-harmonic is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-barrier-characterization-of-regular-boundary-points]: thm-barrier-characterization-of-regular-boundary-points is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-perron-solves-dirichlet-on-regular-plane-domains]: thm-perron-solves-dirichlet-on-regular-plane-domains is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-boundary-point-whose-complementary-component-contains-another-point-is-regular]: lem-boundary-point-whose-complementary-component-contains-another-point-is-regular is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-conformal-transport-of-plane-dirichlet-solutions]: thm-conformal-transport-of-plane-dirichlet-solutions is high risk and lacks a complete Alpha risk_review
```

## Advisory failures

```json
[
  {
    "stage": "6b-adjudicate",
    "gate": "step6-routing-adjudicate",
    "why": "ERROR decision-not-applied: [ex-a-step-function-generates-a-finite-atomic-measure] accepted_repair no longer matches the reader result"
  }
]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/frontier-20-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

