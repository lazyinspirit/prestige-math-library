# frontier-28 · Beta · batch notes — `the-duality-of-lp-and-lq`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair `the-duality-of-lp-and-lq` /
`the-duality-of-lp-and-lq-examples` at orders `288.031` and `288.032`.

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/plan-spec.json`, the
generated dispatch, the live drift material, the full MT-16 design block in
`research/plan-measure-theory-track.md`, the functional-analysis predecessor
table in `research/plan-functional-analysis-track.md`, and the live upstream
MT-12 / MT-13 / MT-14 / MT-15 pages and items that the design route actually
needs.

Artifacts written by this dispatch:

- `research/frontier-28-batch-4.pages.json`
- `research/frontier-28-batch-4.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch's
artifact was edited. I did not create a `proof-contracts` file here; that is a
step-5 authoring artifact, not a step-2 scaffold artifact in the current run.

## 2. Design control and drift

I treated `research/plan-measure-theory-track.md:3200-3281` as the controlling
design block. It is the only full MT-16 page design. The
`research/plan-functional-analysis-track.md:210-220` mention is only the
predecessor reservation table, so it constrains downstream wording but does not
replace MT-16's page-local theorem route.

I also checked for later plan-file amendments by searching `research/plan-*.md`
for `the-duality-of-lp-and-lq`, `MT-16`, `rem-dual-of-l-infinity`, and related
endpoint phrases. Nothing later than the MT-16 block materially re-scopes this
page, so the measure-theory track remains controlling.

There is one design/spec prerequisite mismatch, and I kept the spec exactly as
the dispatch requires. The MT-16 block says
`requires: MT-14, MT-15, MT-13, MT-12, MT-2`, while
`research/plan-spec.json` and the batch manifest keep the single page-level edge
`density-separability-and-convolution-in-lp-examples`. I recorded the mismatch
but did not adjudicate it locally. This matches
`research/frontier-28-alpha-step0-drift.md` and
`research/frontier-28-drift-evidence.json`, which already marked this page
`no-drift` because the spec edge's closure reaches the named upstream pages.

There is also an internal design conflict at the `p = 1` endpoint:

- `research/plan-measure-theory-track.md:295` says the MT-16 page proves the
  `p = 1` clause under a `sigma`-finiteness hypothesis.
- `research/plan-measure-theory-track.md:3238-3241` later says the theorem
  holds on every semifinite measure.

The source reread does not justify silently choosing the stronger sentence.
Bass's accessible theorem at `15.11`, Hunter's `Theorem 7.14`, and Folland's
`Theorem 6.15` all safely back the `sigma`-finite theorem. A further primary
check of Fremlin's chapter-24 contents page
`https://www1.essex.ac.uk/maths/people/fremlin/cont24.htm` and chapter-36 PDF
`https://www1.essex.ac.uk/maths/people/fremlin/chap36.pdf` flags a stronger
localizability boundary when one wants the full `L^infty = (L^1)^*`
identification outside the `sigma`-finite setting. So the scaffold keeps the
headline `p = 1` theorem at the safe `sigma`-finite level, records the
non-semifinite uniqueness failure on the B page, and does not scaffold a theorem
claiming full semifinite sufficiency.

## 3. Scaffold shape

The A page has **15 items**. The B page has **6 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page breaks into five proof clusters:

- **Concrete functional vocabulary.**
  A bounded linear functional on `L^p` and its operator norm, then the easy
  direction `g -> Lambda_g`.

- **Exact norm and uniqueness.**
  The norm identity `||Lambda_g|| = ||g||_q`, with the `q = infinity`
  semifiniteness clause explicit, followed by uniqueness of representing
  `L^q` functions on semifinite measures.

- **Finite-measure carrier.**
  The induced signed-or-complex measure, absolute continuity with respect to
  `mu`, identification with the Radon-Nikodym density, and the proof that this
  density actually lies in `L^q`.

- **Global representation.**
  A sigma-finite theorem for all `1 <= p < infinity`, then the separate
  arbitrary-measure extension for `1 < p < infinity`, using the added
  sigma-finite-support lemma rather than hiding that reduction inside the main
  theorem.

- **Consequences and boundaries.**
  Norm recovery by unit `L^q` pairings, the counting-measure specialization to
  `ell^p`, the recorded `p = infinity` boundary, and the final orientation-only
  dual-space remark.

The B page keeps only the concrete leaves the design explicitly named:

- a power-function norming example on `(0,1]`
- the half-interval functional on `L^p[0,1]`
- the concrete `ell^2` instance
- the quotient warning that point evaluation is not well defined on `L^p`
- the non-semifinite `p = 1` boundary witness
- the citation-only `L^infty[0,1]` boundary remark

I did **not** add extra abstract false statements such as "linearity implies
boundedness" or "every `L^infty` functional is integral against `L^1`". Those
would only restate endpoint failures already carried more concretely by the
designed B-page witnesses.

## 4. Design decisions preserved

### The theorem stays concrete, not dual-space first

The A page defines bounded functionals and their norm concretely, proves the
representation theorem concretely, and leaves dual-space notation to the final
orientation-only remark `rem-duality-as-a-dual-space-statement`. That matches
the MT-16 seam ruling and avoids importing functional-analysis vocabulary too
early.

### The `p = infinity` failure is recorded, not reconstructed

The scaffold includes `rem-the-p-equals-infinity-case-is-recorded-not-proved-here`
on the A page and the citation-only B-page boundary remark, but no local
Banach-limit or Hahn-Banach construction. This exactly preserves the design's
"do not fake the witness" trap.

### The finite-measure proof is decomposed where the real work lives

I kept the four-step carrier the design asked for:

- induced finite signed-or-complex measure
- absolute continuity with respect to `mu`
- recovery of `Lambda` from the Radon-Nikodym density
- proof that the density belongs to `L^q`

That prevents countable additivity and the `L^q` norm estimate from being waved
through inside one oversized theorem.

### The arbitrary-measure `1 < p < infinity` extension is its own theorem

Hunter and Folland both isolate an extra step past the sigma-finite theorem:
every `L^p` test function has sigma-finite essential support, so one can choose
the right local representative and then stop enlarging. The scaffold therefore
adds the support lemma and a separate theorem
`thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` instead of
hiding that reduction inside the sigma-finite statement.

## 5. Source stack and URL discipline

I used three independent full-text treatments in the coverage artifact:

1. **Gerald B. Folland, _Real Analysis_, 2nd ed.**
   `https://djvu.online/file/NPF4BEtSuqdFA`
   This is the controlling source for the arbitrary-measure `1 < p < infinity`
   theorem, the `6.14` density-to-`L^q` lemma, and the honest exceptional-case
   discussion after `6.15`.

2. **Richard F. Bass, _Real Analysis for Graduate Students_, Version 2.1**
   `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf`
   This is the cleanest accessible textbook proof of the finite / sigma-finite
   representation theorem through a Radon-Nikodym argument. The dispatch design
   cites Bass Version `5.0`; I used Version `2.1` because the exact full-text
   WUSTL PDF opens cleanly and is already fetch-stamped on disk. The section and
   proof route are the same, but the local numbering is `Corollary 15.9`,
   `Proposition 15.10`, `Theorem 15.11` rather than the Version `5.0` labels in
   the track-harvest notes.

3. **John K. Hunter, _Measure Theory_**
   `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
   This is the compact lecture-note treatment that explicitly carries the
   finite, sigma-finite, and arbitrary-measure stages in one place and also
   records the `p = 1` sigma-finite endpoint and the `p = infinity` failure.

### Fetch verification and exact stamps

The shell is network-restricted, so I reused only exact-URL `fetch_verified`
stamps already on disk:

- Folland from `research/frontier-22-batch-5.coverage.json`
- Bass (WUSTL Version 2.1) from `research/frontier-25-batch-3.coverage.json`
- Hunter from `research/frontier-27-batch-3.coverage.json`

I separately re-opened each exact URL in the web-reading channel at the recorded
locators. No URL recovery or re-sourcing was needed for the three recorded
coverage sources.

### One extra source check that affected scope

I also re-opened Fremlin's chapter-24 contents page and chapter-36 PDF to check
the `p = 1` endpoint conflict. I did **not** add Fremlin to the coverage ledger
because the scaffolded page does not cite measure-algebra localizability as a
load-bearing theorem. I used it only to avoid overclaiming a stronger endpoint
than the accessible MT-16 backing safely proves.

## 6. Dependency rationale

The manifest's page-level prerequisite remains exactly the spec's
`density-separability-and-convolution-in-lp-examples`.

Key local dependency choices:

- `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p` is new
  because the arbitrary-measure theorem uses it explicitly and no published item
  on disk already states it in MT-16's needed form.

- `prop-semifinite-measures-make-l-q-representatives-unique` is separated from
  the main theorem because both the sigma-finite patching argument and the
  B-page `p = 1` counterexample use exactly that uniqueness boundary.

- `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`
  depends on MT-15's simple-function density theorem rather than re-minting a
  second local density statement for `L^p`.

- `cor-ell-p-duality-by-counting-measure` depends only on the sigma-finite
  theorem plus the already-published `ell^p = L^p(#)` remark. It does not
  import Hilbert-space Riesz language from a later track.

- The B-page remark
  `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one`
  is intentionally citation-only. The design is right that reconstructing that
  witness locally would only smuggle Hahn-Banach back onto a page whose point is
  to avoid it.

## 7. Known limits for Alpha

- The scaffold intentionally does **not** claim a theorem saying the full
  `p = 1` duality holds on every semifinite measure space. The design file
  itself conflicts on this point, and the extra primary-source check points to a
  sharper localizability seam.

- The page still records the honest endpoint facts the design requires:
  sigma-finite `p = 1`, non-semifinite uniqueness failure, and the recorded
  `p = infinity` boundary.

- If Alpha wants a stronger `p = 1` endpoint later, that needs an explicit
  decision about whether MT-16 is allowed to grow a localizability measure-space
  seam, or whether that refinement belongs to a later functional-analysis or
  measure-algebra page instead.

## Step-3 fix pass

I re-read `research/frontier-28-alpha-c-step3-scaffold-review.md` for the
stable Step-3 findings that apply to batch `4`. That review records
`the-duality-of-lp-and-lq` as **sufficient** and assigns no batch-4 finding id
to repair or push back on inside the owned scaffold artifacts; the only group
`c` finding id is `C6-1`, and it belongs to batch `6`, not this batch.

- Finding id: none for batch `4`
- Disposition: no scaffold change
- Evidence: the Alpha group `c` review marks MT-16 sufficient without a
  batch-local repair row; the current batch-4 scope decision for Folland's
  post-`Theorem 6.15` `L^1` exceptions still resolves as `stands` in
  `research/frontier-28-alpha-c-scope-decisions.json`; and on Tuesday,
  September 1, 2026 I re-opened the three recorded MT-16 source URLs at their
  stored locators: Folland `§6.2`, `Theorem 6.14`, `Theorem 6.15`, and the
  exceptional-cases paragraph after `Theorem 6.15`; Bass `Corollary 15.9`,
  `Proposition 15.10`, and `Theorem 15.11`; and Hunter `Theorem 7.14` together
  with its printed `p = 1` `sigma`-finite note
- Changed scaffold record: `research/frontier-28-batch-4.notes.md` only; this
  Step-3 fix-pass receipt was appended, and
  `research/frontier-28-batch-4.pages.json` plus
  `research/frontier-28-batch-4.coverage.json` remain unchanged on this fix
  pass

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-4.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed on the current bytes, ending with the standard `OK` line and only
  the standing repository-wide `redundant-prereq` advisories

I also ran `node tools/url-sweep.mjs --coverage
research/frontier-28-batch-4.coverage.json --out
/tmp/frontier-28-batch-4-url-liveness.json --recover --fail-on-dead` from the
shell. It failed on local DNS resolution for all three hosts (`curl: (6) Could
not resolve host`), so I treated that shell-only liveness failure as an
environment artifact rather than as a batch-4 source defect after confirming
the same exact URLs were reader-openable in the web-reading channel on Tuesday,
September 1, 2026 at the stored locators.

## Step-5 authoring

Authored on Tuesday, September 1, 2026:

- A-page file `library/measure-theory/the-duality-of-lp-and-lq.md`
- B-page file `library/measure-theory/the-duality-of-lp-and-lq-examples.md`
- A-page items `def-bounded-linear-functional-on-l-p-and-its-operator-norm`, `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`, `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`, `prop-semifinite-measures-make-l-q-representatives-unique`, `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p`, `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures`, `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu`, `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`, `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q`, `thm-sigma-finite-duality-for-bounded-functionals-on-l-p`, `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`, `cor-l-p-norm-recovery-by-unit-l-q-pairings`, `cor-ell-p-duality-by-counting-measure`, `rem-the-p-equals-infinity-case-is-recorded-not-proved-here`, `rem-duality-as-a-dual-space-statement`
- B-page items `ex-a-power-function-realises-the-duality-norm-on-unit-interval`, `ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q`, `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing`, `cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval`, `cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality`, `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one`
- Batch contract report `research/frontier-28-batch-4.proof-contracts.json`

Provenance rationale:

- The main A-page theorems, lemmas, and the two concrete boundary remarks are `literature-derived` at the statement level because they follow the Folland / Bass / Hunter MT-16 route recorded in the batch coverage.
- The three worked B-page examples and the two B-page counterexamples are `ai-generated` statements with the schema-required generation roles, because they are local computed witnesses built from the page theorem rather than harvested theorem statements.
- Proof provenance is `ai-generated` on the proof-bearing draft items, `not-applicable` on ordinary remarks and the definition, and `not-supplied` on the two recorded-not-proved remarks.

Narrowed or adjusted claims:

- `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities` is written truthfully as a bounded-representative representation lemma. The full extension to all of $L^p$ is completed only after `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q` proves the Radon-Nikodym density lies in $L^q`.
- I removed the one attempted forward reference from `rem-duality-as-a-dual-space-statement`: the later FA-7 item is named in the design notes, but it is not itemized in the current `research/plan-spec.json`, so `forward_refs` would not have been resolvable under the schema.

Checks run on the authored batch on Tuesday, September 1, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-4 item files...`
  Result: `17 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-28-batch-4.pages.json`
  Result: `content-policy: 21 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass on current bytes, ending with `OK` and only the standing repository-wide `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-28-batch-4.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 17/17 item(s) checked`

Additional local audit notes:

- `node tools/extcheck.mjs --quiet` still exits `0`; its warnings are the standing repository-wide published items that rest on recorded-not-proved material, not a batch-4 defect.
- `node tools/fwdcheck.mjs --quiet` still exits nonzero on pre-existing repository errors in `items/ex-completion-of-a-domain-not-a-domain.md`; after the authoring pass, batch 4 no longer contributes a new forward-reference error there.

Blockers:

- None for the owned batch artifacts.
