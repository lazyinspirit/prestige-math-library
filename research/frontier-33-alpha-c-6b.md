# frontier-33 — Step 6b group c adjudication

Dispatch: `6b-c`. Owned batches: `5`, `6`, `7`. This report records group
Alpha's mathematical adjudication; it is not a judge verdict or stage
transition.

## Evidence and scope

Read each owned `frontier-33-step6-scope-<i>.json`, reader report and findings
JSON, refuter report, post-reader and pre-6b hash snapshot, current item/page
carrier, proof contract, and the cited dependencies needed to test the claims.
The reader/refuter artifacts still match their frozen scope hashes. I also read
the pre-6b repair rationale in `frontier-33-alpha-contract-audit.md` and checked
the complete current proofs rather than treating that report as a verdict.

The exact queue contains 184 obligations:

- batch 5: 53 stabilized items, two stabilized pages, and `reader:5:1`;
- batch 6: 53 stabilized items, three ordinary reader-touched items, and
  `reader:6:1`;
- batch 7: 67 stabilized items, three ordinary reader-touched items, and
  `refuter:7:1`.

`frontier-33-alpha-c-6b-decisions.json` contains exactly one decision for each
obligation, with current carrier hashes and one uniquely owned closed defect
row apiece. The totals are 52 `accepted_repair`, 129 `amended_repair`, and
three `confirmed_fatal`; there are no reverted changes or unresolved
obligations. Most amendments differ from the pre-6b composite carrier only
because this adjudication added the required item-specific mathematical
`risk_review` to the contract.

## Finding dispositions and repairs

- `reader:5:1` — `ex-from-psi-to-the-logarithmic-integral`:
  `confirmed_fatal`. The reader-observed proof cited only a result about
  `pi(x)-Li(x)` while using quantitative estimates for `psi(x)-x` and
  `psi(x)-theta(x)`. The current repair instead cites
  `thm-chebyshev-psi-prime-number-theorem-error`,
  `lem-chebyshev-functions-prime-power-comparison`,
  `lem-prime-counting-chebyshev-partial-summation`, and
  `def-logarithmic-integral`. It absorbs the square-root prime-power error after
  decreasing the exponential constant, bounds the split error integral, and
  verifies the empty-integral endpoint `x=2` exactly.

- `reader:6:1` —
  `def-tensor-product-total-complex-of-chain-complexes`:
  `confirmed_fatal`. The published definition quantified over arbitrary chain
  complexes but called the degree diagonal finite, which is false for two
  unbounded complexes. Under the published-content claim, the definition now
  gives the standard direct-sum totalization over the whole diagonal with the
  Koszul differential, without asserting finiteness. The consumer
  `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms` now
  derives finite diagonals from its own bounded-above hypotheses. Its exact
  contract was regenerated. The repair keeps the item and its containing page
  `tor-flatness-and-global-dimension` in draft pending independent
  certification, removes stale item verification, and is bound by the
  append-only claim and published-repair receipt. Source retained: Weibel,
  *An Introduction to Homological Algebra*, chapter 3 PDF at
  `https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf`; the consumer
  retains the chapter 10, sections 10.6.1–10.6.4 locator.

- `refuter:7:1` — `thm-completion-preserves-regular-local-rings`:
  `confirmed_fatal`. The observed F1 had the malformed expression
  `widehat(m)^{,2}` instead of the square of the completed maximal ideal. The
  current F1 exactly matches
  `lem-completion-preserves-embedding-dimension`, namely
  `m/m^2` is canonically isomorphic to `widehat(m)/widehat(m)^2`. Together with
  preservation of Krull dimension this proves both directions of regularity,
  including the zero-dimensional case.

The ordinary batch-6 repair to
`def-derived-tensor-product-in-the-bounded-above-setting` correctly requires
both complexes to be bounded above; its two contract consumers quote that
hypothesis exactly. The three batch-7 touched carriers correctly synchronize
completion citations and current contracts. Independent review of every other
stabilized carrier found no further defective statement, hypothesis,
quantifier, citation, witness, computation, typing, empty/zero/endpoint/choice,
or iff case.

## Risk review

Current no-`--require-reviewed` reports classify 41 batch-5 items, 29 batch-6
items, and 62 batch-7 items as HIGH or CRITICAL. I read every one of those 132
current proofs and its relevant citations, derivations, reader/refuter evidence,
and boundary dispositions. Each owning contract now records a specific
`risk_review` with reviewer `group-alpha-c`, the actual structural risk, and why
it is resolved. The extra batch-5 item relative to the frozen routing list is
`ex-from-psi-to-the-logarithmic-integral`: its repair added the exact
quantitative dependencies that make the current carrier CRITICAL. No further
mathematical defect was confirmed. All three reports pass with
`--require-reviewed`.

## Validation

- Reflow reports both materially edited items unchanged; focused precheck
  passes the proof-bearing consumer (`1 checked, 0 failing`).
- Focused render, forward-reference, external-proof, and prose checks pass for
  the edited items; render also passes for the containing page returned to
  draft.
- Owned content policy passes for 211 scoped items. Manifest integrity reports
  all 48 owed pages present with no scope drift. Dependency integrity reports
  no cycles, unresolved references, or draft items on published pages.
- Strict proof-contract checks pass for batches 5, 6, and 7 (57/57, 55/55,
  71/71). Their finite-smoke, hard boundary-audit, and exact citation-fidelity
  checks pass; batch 6 retains one nonfatal shotgun-citation warning unrelated
  to this repair.
- Defect-ledger validation passes. Exactly 184 `f33-c6b-*` rows were appended
  through `tools/defect-ledger.mjs`, and its generated view was refreshed.
- `tools/step6-scope.mjs check --phase adjudicate` passes independently for
  batches 5, 6, and 7 with zero errors after the final stamp. The published
  claim/receipt hashes are therefore exact for the current repaired item.

Group c has no named blocker and no remaining action in this dispatch.
