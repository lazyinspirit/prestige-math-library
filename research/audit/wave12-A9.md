# Wave 12 — A9 scope-denial and published-claim-decay sweep

Date: 2026-08-10
Role: audit orchestrator (GPT 5.6 Sol, xhigh, 1,000,000-token context; owner-delegated)
Result: complete; eight item repairs and one page repair, no consumer repair

## Exact reread surface

The orchestrator re-read the complete current text of all 39 A6 repair/source
targets in `wave12-rejudge-targets.json` as it stood after A8, not a sample, and
all four Wave 12 page files:

- `library/real-analysis/rn-as-a-normed-space.md`
- `library/real-analysis/rn-as-a-normed-space-examples.md`
- `library/real-analysis/uniform-convergence-of-functions.md`
- `library/real-analysis/uniform-convergence-of-functions-examples.md`

The denial-language sweep covered `neither`, `no item`, `lacks`, `absent from`,
`silent on`, `nowhere`, `not proved anywhere`, `planned page`, `not claimed`,
`does not`, `nothing here`, `never`, and `none`. Every hit was adjudicated from
its complete file and the current repository rather than accepted from the
heuristic warning alone.

After the eight item edits below, the canonical `post-a8` to `post-A9` impact
surface was generated. The orchestrator then read all 144 required consumer
files in full, including every logical and direct-citation consumer; the exact
ids and dispositions are in `wave12-A9-impact-audit.json`. All 144 remain
licensed and none was edited or rejudged. The formal result is 8 changed
interfaces, 144 required reviews, 0 errors, and 0 warnings.

## A9 decisions and execution

Eight item interfaces and one A-page summary required correction.

1. `def-vector-valued-derivative-and-integral`: the title no longer imposes the
   integral's interval domain on the definition's intrinsic derivative half.
2. `thm-norm-inequality-for-the-vector-valued-integral`: the title now
   conditions norm-integrability on `a<b` while retaining the oriented
   inequality at `a<=b`.
3. `rem-rn-conventions-and-scope`: the polynomial curve is correctly described
   as refuting a vector-valued equality generalisation of the scalar mean value
   theorem; `thm-mean-value-inequality` is identified as the surviving
   inequality rather than as a theorem with a refuted equality form.
4. `ex-componentwise-convergence-and-a-vector-valued-integral-computed`: its
   opening and closing now say exactly that it exercises componentwise sequence
   convergence and componentwise integration, not differentiation.
5. `def-the-space-of-summing-directions`: the stale claim that no linear-map
   definition exists was replaced by an exact description of what does exist
   (`def-linear-map`) and what does not yet exist (the dual-space and Euclidean
   representation interfaces); the exact dependency was added.
6. `fs-heine-borel-holds-in-every-normed-space`: a broad absent-theory denial
   was narrowed to the precise unproved classification/converse.
7. `thm-all-norms-on-rn-are-equivalent`: the broad absent-theory denial was
   narrowed to the precise statement that the proof and witnesses make no
   general classification claim.
8. `fs-all-norms-on-any-real-vector-space-are-equivalent`: the broad denial was
   narrowed to the precise absence of a classification of infinite-dimensional
   normed spaces.
9. `library/real-analysis/rn-as-a-normed-space.md`: its summary now mirrors the
   theorem's `a<b` norm-integrability boundary and `a<=b` oriented inequality.

The exact before/after rationale is recorded as entries 18–25 and the A-page
entry in `wave12-published-repairs.md`. The final repair-target receipt now has
43 ids: the prior 39 plus the four A9-only items that had been pure-retag items
before this sweep. No pure retag, unchanged consumer, or page-only prose target
was added to the judge set.

## Structural closure before external reads

- Both Wave 12 proof-contract ledgers are strict-identical modulo their
  top-level level label and pass 48/48 with 0 errors and 0 warnings. Three
  full-section quotes were mechanically refreshed after the linear-map wording
  changed; no contract Fact, use, derivation, or boundary disposition changed.
- The refreshed manifest contains 890 exact relationships: 651
  published-backward, 235 same-batch, and 4 forward. Its only A9 relationship
  delta is the honest `def-the-space-of-summing-directions -> def-linear-map`
  dependency.
- `prosecheck` reports 0 errors and 5 heuristic warnings on the eight items and
  page. The sole library-scope warning is the still-true statement that the
  dual space and its Euclidean representation theorem are not defined/proved;
  the other four are legitimate count/page-local wording.
- The formal impact audit passes 8 interfaces / 144 consumers / 0 errors / 0
  warnings. `git diff --check` passes.

## Independent exact-final closure

Nine independent GPT 5.6 Terra xhigh/1M routes read the exact final text: all
eight edited items plus the repaired A page. All nine returned `CERTIFIED`,
`CURRENT-TEXT: READ`, and `FINDINGS: NONE`. Their normalized item hashes, page
raw hash, prompt/result paths, and result SHA-256 values are bound in
`wave12-A9-certification-receipt.json`. Fresh `verification.verified` stamps
were applied to exactly the eight edited items after those results.

The first eight-item paired sweep was run before the independent verification
metadata was written. Because the targeted-judge receipt deliberately hashes
all verification metadata except the judge block, those otherwise substantive
rows could not attest the stamped files. The same eight ids, and no others,
were therefore paired again after the certification stamps. This was a
metadata-order correction, not a broadened mathematical rejudge. The first and
stamp-current rows are preserved append-only.

On the stamp-current pair DeepSeek returned `keep:true` for all eight. Terra
returned `keep:true` for `def-vector-valued-derivative-and-integral` and
`rem-rn-conventions-and-scope` and rejected six citation-compression issues.
Alpha read each exact tuple from disk and classified all six
`confirmed_nonfatal`: an omitted absolute-value triangle citation, a Fact that
compresses an integrability hypothesis already established before use, a
Remark whose last explanatory sentence cites the preceding
infinite-dimensionality result too tersely, the locally defined infinite-space
basis vectors citing only a finite-space analogue, a compressed ordered-field
trichotomy citation, and a compressed sign/cancellation citation. R1 therefore
forbade any further edit. Across the complete append-only judge history, all 44
unique rejection candidates are adjudicated: 5 confirmed fatal, 38 confirmed
nonfatal, 1 false positive, and 0 unadjudicated.

`wave12-targeted-judge-receipt.json` binds exactly the eight A9 item files to
their stamp-current paired contexts and item hashes. The pass-only stamp tool
honestly wrote paired judge stamps on the two keep/keep items and skipped the
six Terra-rejected items; all eight retain their independent certification
stamps, while the adjudication ledger remains the evidence for the six skips.

The final coverage gate passes 61 items, 48 proof-bearing items, 890 declared
relationships, and 43/43 required repair-target judge pairs. Its warnings are
only the exact adjudicated-nonfatal/false-positive rows; there are no coverage
errors. Both contract ledgers pass 48/48 strict, direct precheck passes 5/5
proof-bearing edited items, the formal impact receipt remains 8/144 with zero
errors or warnings, and `git diff --check` passes.

Wave 12 final text and receipts are frozen for the Wave 13 barrier. No A10
owner-pause action, commit, or push has been performed.
