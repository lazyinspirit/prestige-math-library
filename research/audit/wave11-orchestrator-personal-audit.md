# Wave 11 orchestrator personal audit

Date: 2026-08-10. Reviewer: the audit orchestrator (`/root`).

`node tools/touchlog.mjs report research/audit/wave11-touches.json --min 2`
identified nine items with two content-hash transitions between the canonical
stage snapshots. Under `AUDIT-WORKFLOW.md` §9, I personally read the complete
current text of all nine, the A4/A6 repair ledger, their exact-final Terra
certification receipts, the relevant DeepSeek refuter result, and their direct
page/item consumers. This is the required twice-touched escalation audit; it is
not delegated.

## Decisions

### `cex-a-function-with-a-primitive-that-is-not-integrable`

- Fault history: A4 added audited component provenance; A6 found that the
  classical bump witness was incorrectly left load-bearing as an unsourced
  generated statement. A6 added the Olmsted counterexample source and narrowed
  the classification to source-backed `ai-altered`/`semantic-source`.
- Personal finding: **KEEP; no further edit.** The polynomial-bump construction
  is internally complete: disjointness, endpoint gluing, differentiability at
  zero, and unboundedness of the derivative are each proved explicitly. The
  final exact-hash Terra certificate and DeepSeek refutation are clean.
- Ramification of dropping: it would break the declared dependency and the
  intended counterexample behind
  `fs-integration-by-parts-needs-no-integrability-hypothesis`, remove a named
  failure mode from the FTC scope ledger, and leave several forward references
  dangling. The source repair is the correct disposition.

### `cor-taylor-remainder-bound`

- Fault history: the A4 provenance application exposed a dead Iowa source; A6
  briefly changed sources while the first certifier was running, then replaced
  it with an exact live statement of the Lagrange error bound and re-certified
  the final hash.
- Personal finding: **KEEP; no further edit.** The proof is the one-line valid
  consequence of the Lagrange form, including the `x=a` branch and positivity
  of the factorial.
- Ramification of dropping: it would remove the published uniform-error bridge
  used by `ex-geometric-function-taylor-remainder` and leave that example and
  its page without the advertised bound. Source replacement, not deletion, is
  appropriate.

### `ex-two-root-x-and-its-unbounded-derivative`

- Fault history: A4 applied provenance; A6 replaced an invalid-TLS Hawaii
  endpoint with live exact derivative support and live improper-integral
  context.
- Personal finding: **KEEP; no further edit.** The inverse-function derivation
  of `(2 sqrt(x))' = 1/sqrt(x)`, the Archimedean unboundedness witness, the
  failure of differentiability at zero, and the Darboux boundedness obstruction
  are all explicit and correct. Exact-final certification is clean.
- Ramification of dropping: no theorem logically depends on the example, but
  the companion page would lose its concrete boundary case distinguishing an
  ordinary Riemann integral from the later improper integral. The source-only
  repair has no mathematical downside.

### `fs-substitution-holds-for-every-integrable-integrand`

- Fault history: A4 applied the A3 exact-source override; A6 added the
  university-hosted Pugh full text that exposes Chapter 3, Exercise 35
  verbatim, beside the publisher record.
- Personal finding: **KEEP; no further edit.** I checked the full final
  Smith-Volterra-Cantor construction. The distance function produces a strictly
  increasing primitive that quadratically compresses the fat Cantor set to a
  null set; the indicator is integrable before composition and nonintegrable
  after composition. The Remark correctly limits what is refuted. Final Terra
  certification and the exact-final refuter are clean.
- Ramification of dropping: it would remove the page's sharp warning about the
  continuity hypothesis in substitution and the reverse orientation link from
  `thm-substitution`. The exact-source addition closes the attribution issue
  without changing the mathematics.

### `rem-darboux-lhopital-taylor-scope`

- Fault history: A4 tagged the scope Remark; A6 refutation found its derivative
  continuity sentence used the published corollary without declaring or citing
  it. A6 added exactly
  `cor-injective-or-monotone-derivative-is-continuous` to the dependency list
  and sentence, creating one honest same-batch edge.
- Personal finding: **KEEP; no further edit.** The final sentence now says only
  what that corollary proves and no longer presents an undeclared relationship.
  Exact-final certification/refutation are clean.
- Ramification of dropping: the Darboux/L'Hopital/Taylor page would lose its
  endpoint, factorial, derivative-continuity, and excluded-remainder scope
  ledger. The narrow citation repair is preferable to deleting the ledger.

### `rem-integral-conventions-and-scope`

- Fault history: A4 corrected the containing page's stale Taylor-integral-
  remainder sentence; the first page certifier then showed that this named
  scope ledger still assigned the remainder to a page that expressly excludes
  it. A6 removed that false destination and re-certified both ledger and page.
- Personal finding: **KEEP; no further mathematical edit.** The final reading-
  order statement accurately says the integral remainder is absent and assigns
  no nonexistent destination. DeepSeek's residual note that the introductory
  phrase says “cited by nothing” despite a closing-Remark link is nonfatal
  bookkeeping prose, not a false mathematical or dependency claim under the
  30-second rule.
- Ramification of dropping: the page would lose its single consolidated ledger
  for oriented integrals, choice cost, index conventions, and deferred topics;
  several forward references and the primitive counterexample's scope link
  would also disappear. Keeping the corrected ledger is materially clearer.

### `thm-first-mean-value-theorem-for-integrals`

- Fault history: A4 removed an unused oriented-integral Fact; A6's first
  certifier correctly rejected `literature-derived`/`exact-source`, because the
  item is a narrower nonnegative-weight specialization of the cited general
  form. A6 retagged it `ai-altered`/`semantic-source` and re-certified.
- Personal finding: **KEEP; no further edit.** The zero-integral branch avoids
  division, the positive branch traps the weighted average between the extrema,
  and the interval-image theorem supplies the point. The restricted Statement
  and the open-interval caveat in the Remarks are consistent.
- Ramification of dropping: it would break `thm-ftc-first-part`'s declared
  route, remove the companion sign-changing counterexample's target, and leave
  the integral page without a landmark theorem. The provenance correction is
  exact.

### `thm-integration-by-parts`

- Fault history: A4 removed an unused oriented-integral Fact; A6 found that the
  CMU source states the target's exact integrable-derivatives theorem, so the
  prior semantic-source rationale was false. A6 upgraded the statement to
  `literature-derived`/`exact-source` and re-certified.
- Personal finding: **KEEP; no further edit.** The proof establishes
  integrability of both products before applying FTC to `uv`, then rearranges
  the exact identity. No hypothesis is silently dropped.
- Ramification of dropping: it would remove a landmark theorem, break the
  false-statement companion target, and undermine the Taylor-integral-remainder
  orientation in the scope ledger. Exact attribution is the right repair.

### `thm-taylor-peano-remainder`

- Fault history: A4 provenance used a dead Iowa URL; A6 rejected an
  invalid-TLS intermediate and installed a live Taylor source. The source gives
  the Peano conclusion under weaker pointwise differentiability, so the
  stronger-neighbourhood item is correctly classified as
  `ai-altered`/`semantic-source`, not exact-source.
- Personal finding: **KEEP; no further edit.** The induction is valid: the base
  is the derivative definition; differentiation of the remainder reduces the
  order; Cauchy's quotient lemma gives the normalized remainder at an
  intermediate point; and the neighbourhood hypothesis makes the induction on
  `f'` legitimate. Final exact-hash certification and refutation are clean.
- Ramification of dropping: it would break `thm-first-nonzero-derivative-test`,
  remove a central Taylor form from the page, and make the scope ledger's
  explicit Peano convention false. The final source/provenance narrowing is
  correct.

## Post-A7 refutation escalation

A7 produced ten rejection rows on eight unique targets. I personally read the
complete two additional targets not already in the twice-touched set,
`ex-integral-test-applied-to-the-p-series` and
`thm-linearity-of-the-integral`, and rechecked the six overlapping targets
against the exact rejection text and cited clauses. The union of the repair and
refutation escalation sets is therefore 11/11 personally audited items.

### `ex-integral-test-applied-to-the-p-series`

- Fault named: Terra correctly observed that Fact L8 states the second FTC
  without its strict-endpoint hypothesis, while step 2.3 quantifies over all
  naturals and therefore includes `N=0`.
- Personal adjudication: **confirmed nonfatal; no edit.** At `N=0`, the oriented
  integral definition gives both sides as zero; at `N>=1`, the cited FTC
  applies exactly. This is a seconds-long case split and changes no conclusion.
- Ramification of dropping: the page would lose its only fully internal
  integral-test application before logarithms and its explicit rational-
  exponent/index-shift seam. The example remains mathematically correct.

### `thm-linearity-of-the-integral`

- Faults named: Terra correctly found that L5's compact wording omits the
  finite-sum monotonicity clause used at step 2.2. DeepSeek separately claimed
  L9's “smaller than every positive eta” argument needs Archimedean order.
- Personal adjudication: **one confirmed nonfatal, one false positive; no
  edit.** The same declared finite-sum dependency states monotonicity verbatim,
  so positive weighting and summation close step 2.2 immediately. DeepSeek's
  objection is false: if `|x|` were positive, choosing `eta=|x|` contradicts
  `|x|<eta`; no Archimedean theorem is involved.
- Ramification of dropping: linearity is a landmark dependency for much of the
  integral page, including integration by parts and mean-value arguments.
  Dropping it would invalidate a broad consumer surface for two nonfatal
  citation observations.

### Remaining six A7-rejected targets

- `cor-taylor-remainder-bound`: **confirmed nonfatal.** L1 names rather than
  reproduces the exact Lagrange formula; the linked Statement and contract
  quote supply it directly. Dropping would break the geometric-remainder
  example.
- `thm-taylor-peano-remainder`: **two confirmed nonfatal rows.** The declared
  induction dependency and exact derivative/Cauchy-quotient Statements close
  the compact citations immediately. Dropping would break the first-nonzero-
  derivative test and the Taylor page.
- `ex-two-root-x-and-its-unbounded-derivative`: **confirmed nonfatal.** The
  declared algebra-of-continuous-functions theorem supplies continuity of
  `2g`. Dropping would remove the page's improper-integral boundary example.
- `fs-substitution-holds-for-every-integrable-integrand`: **confirmed
  nonfatal.** L7 compresses the cited `p<q` hypothesis, but every application
  is explicitly forward-oriented. Dropping would remove the substitution-
  hypothesis counterexample.
- `cex-a-function-with-a-primitive-that-is-not-integrable`: **confirmed
  nonfatal.** L1 plus L2 and the declared power/algebra rules give the affine
  inner derivative before the chain rule. Dropping would break the load-bearing
  false-statement and FTC scope edges.
- `rem-integral-conventions-and-scope`: **confirmed fatal and repaired.** The
  pre-A8 text falsely made a single endpoint identity characterize absolute
  continuity. I read the final correction: it now states existence of the
  derivative almost everywhere, `L^1` integrability, and the representation
  `G(x)=G(a)+integral_a^x G'` for every `x`. That is the exact cited claim. Its
  sole direct consumer was reread and remains licensed. Dropping the ledger
  would erase the page's conventions; the narrow correction is correct.

## Closure

All 11 items in the combined repair/refutation escalation set remain published.
None needs deletion, renaming, or reading-order restructuring. The one fatal A7
finding received the sole A8 edit; all nonfatal and false-positive findings
left content untouched, as required.
