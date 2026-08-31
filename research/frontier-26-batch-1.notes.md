# frontier-26 batch 1 notes — scaffold

Owned pair:
`dedekind-domains-and-ideal-classes` (A, order `111.017`) with
`dedekind-domains-and-ideal-classes-examples` (B, order `111.018`).

Artifacts written by this dispatch:
`research/frontier-26-batch-1.pages.json`,
`research/frontier-26-batch-1.coverage.json`,
and this file.

Session date: Sunday, August 30, 2026.

## Design against spec

Recorded here, not adjudicated here.

- The controlling design block is
  `research/plan-commutative-algebra-track.md:818-908` (`CA-9`). It is the
  only source among the matched design locations that actually specifies this
  page's mathematical inventory, proof route, well-definedness obligations, and
  choice boundary.

- The other matched design location,
  `research/plan-algebraic-geometry-track.md:64`, is only a seam statement:
  AV cites this page for one-dimensional normal-domain ideal theory. I treated
  it as a downstream consumer constraint, not as the page's controlling
  scaffold, because it does not define the page's own item list.

- The live `research/plan-spec.json` agrees with the task on page id, order
  `111.017`, companion id, and page-level prerequisite
  `valuation-rings-and-discrete-valuation-rings-examples`. The CA-9 design
  states prerequisites only at the coarser seam level (`CA-1` through `CA-3`,
  `CA-6`, `CA-8`, fraction-field / ideal / projective / PID-UFD / tensor
  infrastructure), and `research/frontier-26-alpha-step0-drift.md:14-15`
  already records that the current closure through the spec prerequisite
  contains that whole package. I therefore kept the spec's single page-level
  `requires` unchanged.

- The same commutative-algebra track later contains a refinement block at
  `research/plan-commutative-algebra-track.md:3402-3439` under the stale page
  label `dedekind-domains-fractional-ideals-and-class-group`. I treated that
  later block as a proof-granularity amendment, not a page-id amendment:
  it usefully motivates extra support lemmas such as
  `lem-rank-one-projective-embedded-as-a-fractional-ideal`, but the live spec
  and the direct `CA-9` inventory control the actual page id and title.

## Current scaffold shape

- A page `dedekind-domains-and-ideal-classes`: **33 items**.
- B page `dedekind-domains-and-ideal-classes-examples`: **9 items**.

The A page stays well below the 60-item split ceiling, so no split is owed.

## Source set actually read

The coverage ledger records six verified live sources:

1. J. P. May, *Notes on Dedekind Rings*:
   `https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Mircea Mustata, *Introduction to Commutative Algebra*:
   `https://websites.umich.edu/~mmustata/CAnotes.pdf`
4. The Stacks Project, Section 10.78 `Finite projective modules`:
   `https://stacks.math.columbia.edu/tag/00NV`
5. The Stacks Project, Lemma 15.22.11:
   `https://stacks.math.columbia.edu/tag/0AUW`
6. The Stacks Project, Section 10.109 `Rings of finite global dimension`:
   `https://stacks.math.columbia.edu/tag/00O2`

Notes on source choice:

- The design's primary backing names Altman-Kleiman as the leading source, but
  this batch had to satisfy live full-text verification. I therefore grounded
  the scaffold in the three openly readable sources I actually re-opened and
  read: May, Milne, and Mustata.

- May, not Milne, is what made the later proof-granularity amendment usable:
  its compact sections 1, 6, and 7 directly support the fractional-ideal,
  class-group, and Steinitz branches without importing arithmetic number-field
  examples.

- The arbitrary-rank tail of
  `thm-submodules-of-projectives-over-dedekind-domains` is the one place where
  the page needs Stacks beyond the three PDF treatments: `0AUW` supplies the
  Dedekind torsion-free/flat criterion and `00O2` supplies the devissage
  pattern the design alludes to for hereditary behavior.

- I re-opened all six recorded URLs in the web channel on Sunday, August 30,
  2026 before writing the harvest rows. Shell-network stamping is restricted in
  this sandbox, so the new source entries record `verified_via: web-open`
  rather than pretending to have local byte hashes that were never fetched in
  this shell.

## Source-backed scope decisions

- I kept the page centered on the abstract Dedekind package the design asked
  for: local characterization, separable integral closure, fractional ideals,
  invertibility, ideal factorization, class groups, Picard comparison, and the
  finite torsion-free Steinitz theorem.

- I added one explicit boundary remark,
  `rem-separability-is-essential-for-finite-integral-closure`, because the
  design's later source-routing notes flag the inseparable branch as a real
  theorem boundary. That is not padding; it protects the exact statement the
  page will author.

- I did not add a full invariant-factor theorem for finitely generated modules
  over Dedekind domains. Both the design and the source-routing notes reject
  that move here: Milne suppresses the proof, and this batch harvested no
  second full treatment that would make the broader module-classification page
  honest.

- I also did not add arithmetic class-number finiteness, rings of integers,
  prime splitting, ramification, or binary-quadratic-form examples. Those are
  number-theory pages, not abstract commutative-algebra consequences.

## Dependency rationale

- The page is layered in five blocks:
  local Dedekind characterizations;
  separable integral closure;
  fractional ideals and invertibility;
  prime-ideal valuations, factorization, and class groups;
  rank-one projectives, Picard comparison, and finite torsion-free modules.

- The extra support lemmas beyond the direct `CA-9` inventory are exactly the
  ones that the later May-style amendment makes load-bearing:
  global normality from local DVRs,
  global dimension-one from local DVRs,
  fractional-ideal operations,
  rank-one projectives inside the fraction field,
  finite torsion-free modules are projective,
  and splitting off a rank-one summand.

- `thm-submodules-of-projectives-over-dedekind-domains` is deliberately last.
  The finite Steinitz theory and the earlier published projective/flat tools
  must already be in place before the Stacks hereditary devissage is even
  stateable honestly.

## Known limits

- The live scaffold for `thm-submodules-of-projectives-over-dedekind-domains`
  is source-grounded but still the least local part of the page. The finite
  branch is explicit on current sources; the arbitrary-rank projective-union
  upgrade is supported by the Stacks devissage route rather than by a compact
  textbook theorem stated in one line.

- The later `CA-9 additions` block suggests even finer decomposition of the
  valuation and projective-module arguments than I kept. I did not import that
  entire expansion because the direct `CA-9` inventory remains authorable
  without breaking the 60-item cap, and the owner forbids padding by minting
  statements merely because the source happens to contain them.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-1.coverage.json`
  passed on Sunday, August 30, 2026:
  `1` page(s), `52` harvested result(s), `0` error(s), `0` warning(s).

- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-1.pages.json`
  passed on Sunday, August 30, 2026:
  `42` scoped item(s), `0` error(s), `0` warning(s).

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-1.coverage.json`
  passed on Sunday, August 30, 2026:
  `6/6` source(s) fetch-verified.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. This batch changes no global plan
  structure beyond its own manifest, so the meaningful batch-local check here is
  simply that the live run-wide plan remains mechanically valid on current
  bytes.

- `node tools/prosecheck.mjs research/frontier-26-batch-1.notes.md`
  passed on Sunday, August 30, 2026:
  `0` error(s), `2` heuristic warnings.

## Outcome

Batch 1 is now source-harvested, spec-aligned, and no longer a skeletal
placeholder. The owned pair is ready for step-3 scaffold review on current
bytes.

## Step-3 fix pass

Session date: Sunday, August 30, 2026.

- Finding id: `research/frontier-26-alpha-a-step3-scaffold-review.md:25-40`.
  Disposition: `stands` with no pushback and no new scaffold-byte repair required in this pass.
  Evidence: the review's batch-1 finding says `research/frontier-26-batch-1.coverage.json` had omitted direct carriers for eleven current A-page items. On current disk, `pages[0].canonical` already contains carriers for all eleven named ids: `lem-local-dvr-condition-implies-global-normality`, `lem-local-dvr-condition-implies-dimension-one`, `lem-trace-pairing-for-a-finite-separable-extension`, `lem-finite-support-of-ideal-valuations`, `def-ideal-class-group-of-a-domain`, `lem-ideal-class-group-well-defined`, `def-divisor-group-of-a-dedekind-domain`, `lem-rank-one-projective-embedded-as-a-fractional-ideal`, `thm-invertible-ideals-and-rank-one-projective-modules`, `thm-ideal-class-group-is-the-picard-group`, and `lem-rank-one-summand-of-a-finite-projective-dedekind-module`. A manifest-to-coverage audit over `research/frontier-26-batch-1.pages.json` reports `33/33` current A-page items carrier-covered and `0` missing. `node tools/coverage-checklist.mjs research/frontier-26-batch-1.coverage.json --require-destination` returns `coverage-checklist: 1 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
  Changed scaffold record: no additional edit to `research/frontier-26-batch-1.pages.json` or `research/frontier-26-batch-1.coverage.json`; verified the existing batch-1 carrier rows in `research/frontier-26-batch-1.coverage.json` `pages[0].canonical`.

- Source verification: re-opened the six recorded batch-1 sources and re-read the controlling design material at `research/plan-commutative-algebra-track.md:818-908` plus the later proof-granularity amendment at `research/plan-commutative-algebra-track.md:3402-3439`. `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-1.coverage.json` returns `source-fetch-check: 6/6 source(s) fetch-verified`.

- Whole-run manifest-only content policy: `node tools/content-policy.mjs research/frontier-26-batch-*.pages.json --manifest-only` returns `content-policy: 440 scoped item(s), 0 error(s), 0 warning(s)`.

- Plan validation: `node tools/validate-plan.mjs research/plan-spec.json` exits `0` on current bytes and reports the declared page order acyclic and consistent, with no item-level cycles, unresolved ids, forward references, or B-page dependency violations among the page manifests currently carrying item lists.

## Step-5 authoring

Session date: Sunday, August 30, 2026.

- Authored page files:
  `library/commutative-algebra/dedekind-domains-and-ideal-classes.md` and
  `library/commutative-algebra/dedekind-domains-and-ideal-classes-examples.md`,
  both kept at `status: draft`.

- Authored A-page ids:
  `def-dedekind-domain`,
  `lem-dedekind-localisation-at-nonzero-prime-is-dvr`,
  `lem-local-dvr-condition-implies-global-normality`,
  `lem-local-dvr-condition-implies-dimension-one`,
  `thm-local-characterisation-of-dedekind-domains`,
  `thm-localisation-of-a-dedekind-domain`,
  `lem-trace-pairing-for-a-finite-separable-extension`,
  `thm-finite-integral-closure-in-a-finite-separable-extension`,
  `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension`,
  `rem-separability-is-essential-for-finite-integral-closure`,
  `def-fractional-ideal`,
  `def-product-and-colon-of-fractional-ideals`,
  `lem-fractional-ideal-operations-well-defined`,
  `def-invertible-fractional-ideal`,
  `thm-invertible-ideal-characterisations`,
  `thm-nonzero-ideals-in-dedekind-domains-are-invertible`,
  `def-prime-ideal-valuations-on-fractional-ideals`,
  `lem-finite-support-of-ideal-valuations`,
  `thm-unique-factorisation-of-ideals-in-dedekind-domains`,
  `cor-ideal-divisibility-reverses-inclusion-dedekind`,
  `cor-ideals-in-a-dedekind-domain-are-two-generated`,
  `def-ideal-class-group-of-a-domain`,
  `lem-ideal-class-group-well-defined`,
  `def-divisor-group-of-a-dedekind-domain`,
  `thm-principal-divisor-exact-sequence`,
  `thm-dedekind-pid-class-group-characterisation`,
  `lem-rank-one-projective-embedded-as-a-fractional-ideal`,
  `thm-invertible-ideals-and-rank-one-projective-modules`,
  `thm-ideal-class-group-is-the-picard-group`,
  `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective`,
  `lem-rank-one-summand-of-a-finite-projective-dedekind-module`,
  `thm-finite-torsionfree-modules-over-dedekind-domains`,
  `thm-submodules-of-projectives-over-dedekind-domains`.

- Authored B-page ids:
  `ex-pid-as-dedekind-domain`,
  `ex-semilocal-dedekind-domain-is-a-pid`,
  `ex-fractional-ideal-in-the-integers`,
  `ex-ideal-inverse-computation`,
  `ex-steinitz-class-rank-two-module`,
  `ex-dedekind-localisation-is-dvr`,
  `ex-two-generators-for-a-dedekind-ideal`,
  `ex-divisor-of-a-fractional-ideal`,
  `ex-nondedekind-ideal-not-invertible`.

- Proof-contract artifact:
  `research/frontier-26-batch-1.proof-contracts.json` now scopes all 34 proof-bearing authored items, with regenerated citation and derivation entries plus completed boundary dispositions.

- Provenance rationale:
  I kept the core Dedekind, localisation, factorisation, class-group, and rank-one-projective statements `literature-derived`, because they are direct harvests from the May, Milne, Mustaţă, and Stacks routes already recorded in batch coverage. The local proofs are mostly `ai-altered`, because the written arguments were rebuilt to respect the library’s dependency graph and proof-row format rather than copied from any one source. The two module-tail theorems that were honestly narrowed on current proof bytes are tagged `ai-altered` at the statement level for the same reason.

- Narrowed claims:
  `thm-finite-torsionfree-modules-over-dedekind-domains` was narrowed from the scaffold’s full Steinitz normal form to the proved decomposition into finitely many invertible ideal summands, with an explicit remark that the stronger `R^{r-1} \oplus I` normal form and uniqueness of the final class are not claimed here.
  `thm-submodules-of-projectives-over-dedekind-domains` was narrowed from the scaffold’s arbitrary-rank hereditary statement to the finitely generated submodule form actually proved from the current dependency budget, with the arbitrary-rank upgrade left explicitly outside this draft.

- Dropped claims:
  none beyond the two stated narrowings above.

- Blockers:
  none. The batch is authored at draft status and the required checks below pass on current bytes.

- Checks run after authoring:
  `node tools/tsx-run.mjs tools/precheck.mts $(node -e "const j=require('./research/frontier-26-batch-1.proof-contracts.json'); console.log(j.scope.map(id=>'items/'+id+'.md').join(' '))")`
  Result: `34 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-26-batch-1.pages.json`
  Result: `content-policy: 42 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; trailing output confirms declared page order consistency and no unresolved ids, forward references, or B-page violations among pages with item lists.
  `node tools/proof-contract.mjs research/frontier-26-batch-1.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 34/34 item(s) checked`.
  `git diff --check -- items library/commutative-algebra research/frontier-26-batch-1.proof-contracts.json research/frontier-26-batch-1.notes.md`
  Result: clean.
