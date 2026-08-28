# frontier-23 batch 7 notes - step 1 scaffold

Owned pairs:

- `conformal-mapping-branches-and-the-schwarz-lemma` (A, order 325) with
  `conformal-mapping-branches-and-the-schwarz-lemma-examples` (B, order 326).
- `infinite-products-and-weierstrass-factorisation` (A, order 337) with
  `infinite-products-and-weierstrass-factorisation-examples` (B, order 338).

Artifacts written in this dispatch:
`research/frontier-23-batch-7.pages.json`,
`research/frontier-23-batch-7.coverage.json`,
and this file. Nothing else in the repo was edited.

## Design against spec

Recorded, not adjudicated here.

- `research/plan-complex-analysis-track.md` and `research/plan-spec.json`
  agree on both page ids, both orders (`325/326`, `337/338`), and the declared
  prerequisites for both pairs.
- CA-12's design source note compresses two Ahlfors locations into one clause:
  it says "Ch. 3 §§3.1--4.3" and also names "The Logarithm", but Ahlfors's own
  table of contents places "The Logarithm" at Ch. 2 §3.4. I recorded the
  actual read locator in the coverage ledger and treated this as a source-note
  clarification rather than a plan conflict.
- CA-18's design source note names Ahlfors Ch. 5 §§1.1--1.3 "for the local
  convergence machinery". Those sections do back the convergence machinery, but
  Ahlfors's own pair-owning infinite-product, Jensen, and Hadamard sections are
  later in the same chapter. The coverage ledger therefore records the exact
  read Ahlfors range actually supporting the scaffolded CA-18 theorems.

## Scope and duplicate-control choices

- I kept the design's 23-item CA-12 A-page spine and 20-item CA-18 A-page
  spine. Neither page is close to the hard 60-item split ceiling.
- On CA-12 I did not re-mint the branch-of-argument or branch-of-logarithm
  vocabulary already published on
  `the-winding-number-and-the-global-cauchy-theorem`. The page starts with a
  dictionary remark and then only mints the genuinely new branch-defined power
  item.
- I moved the Blaschke-factor automorphism theorem earlier than the design's
  table order because both Schwarz-Pick and the Poincare-distance formula spend
  it. This is an intra-page dependency repair, not a scope change.
- I did not duplicate the already-published Cayley-transform example from
  `the-riemann-sphere-and-mobius-transformations-examples`. The CA-12 B page
  instead uses strip-to-disc assembly, branch failures, and automorphism
  computations that actually depend on CA-12's new items.
- On CA-18 I reused the published `def-infinite-product` rather than reminting
  it, exactly as the design warns. The opening remark only records the
  complex-valued conventions that the real-analysis page does not need.
- I also did not re-mint the already-published
  `fs-infinite-product-converges-iff-terms-tend-to-one`. The CA-18 B page keeps
  the more specific signed-product counterexample and the genus/uniqueness false
  statements that genuinely belong to this page.

## Source set actually read

### CA-12 pair

Harvested in the coverage ledger:

1. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
   URL: `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
2. Elias M. Stein and Rami Shakarchi, *Complex Analysis*.
   URL: `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
3. Jiri Lebl, *Guide to Cultivating Complex Analysis*.
   URL: `https://www.jirka.org/ca/ca.pdf`

Additional design-named corroboration read but not carried into the coverage
ledger:

- Russell Howell and John Mathews, *Complex Analysis*, Ch. 9 HTML at
  `https://complexanalysis.org/web/ch_conformal-mapping.html` together with the
  section pages `sec_conformal-mappings.html`,
  `sec_elementary-mappings.html`, and `sec_conformal-trig.html`.

Reason for the omission:

- The batch already had three independent source-backed treatments with exact
  locators and reusable full-text fetch receipts. The live scaffold gate also
  expects `fetch_verified` receipts on every recorded source URL, and I did not
  have an existing exact-url receipt for the current `complexanalysis.org`
  conformal-mapping pages in this runner. I therefore kept Howell as read
  corroboration, not as a fourth ledger source.

### CA-18 pair

Harvested in the coverage ledger:

1. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
   URL: `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
2. Elias M. Stein and Rami Shakarchi, *Complex Analysis*.
   URL: `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
3. Matthias Weber, *Complex Analysis*.
   URL: `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`

These are three independent treatments, two textbooks and one full lecture-note
set, all with exact harvested locators.

## Route and trap compliance

- CA-12 keeps the branch conventions explicit: the negative-axis principal value
  and the holomorphic slit-plane branch stay distinct in the opening remark, so
  the page does not silently identify pointwise principal powers with
  branch-defined holomorphic powers.
- The conformal convention stays orientation-sensitive. The B page carries
  complex conjugation as the explicit counterexample to the weaker
  "angle-magnitude only" notion the design warns against.
- I kept the Poincare metric and Schwarz-Pick block. The coverage ledger uses
  Lebl's exact Schwarz-Pick exercise and hyperbolic-metric remark to support
  that part of the design, rather than pretending Stein's named chapter headings
  alone already contain it.
- CA-18 keeps the Weierstrass elementary-factor estimate as its own lemma,
  again exactly as the design warns.
- Jensen's formula is scaffolded with the radial-limiting extension to radii
  meeting boundary zeros recorded in the strategy text, not with a silently
  strengthened hypothesis.
- Hadamard remains the CA-18 ceiling. The A page is 20 items, so no split is
  needed now.
- No B-page item is used as a dependency target by an A-page item, and no
  forward reference is load-bearing in either pair.

## Item census

- A page `conformal-mapping-branches-and-the-schwarz-lemma`: 23 items.
- B page `conformal-mapping-branches-and-the-schwarz-lemma-examples`: 10 items.
- A page `infinite-products-and-weierstrass-factorisation`: 20 items.
- B page `infinite-products-and-weierstrass-factorisation-examples`: 8 items.

## Known limits and step-5 risks

- CA-12's design named Howell as a pair source. I read it, but I did not record
  it in `frontier-23-batch-7.coverage.json` because I could not honestly attach
  a current exact-url fetch receipt from this runner. If the owner wants every
  design-named source represented in the ledger, a later source pass should
  either stamp those exact URLs or recover a stable same-text mirror and
  re-harvest them.
- The Joukowski theorem is correctly kept rather than dropped, but its proof is
  the most delicate CA-12 construction. At authoring time the inverse square
  root branch on `\\mathbb C \\setminus [-1,1]` needs to be written as an actual
  branch argument, not as a slogan.
- The CA-18 heavy proofs are Jensen and Hadamard. Step 5 should expect both to
  decompose into short lemmas rather than one long proof block.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-7.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/url-sweep.mjs --coverage research/frontier-23-batch-7.coverage.json --out /tmp/frontier-23-batch-7-url-liveness.json --recover --fail-on-dead
```

I also plan one temporary spliced sanity check in `/tmp` so this batch's
manifest can be validated as though Step 4 had already injected it into
`research/plan-spec.json`.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-7.coverage.json`
  passed: `2` page(s), `110` harvested result(s), `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed: `498` scoped item(s), `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-7.coverage.json`
  passed: `6/6` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026. As usual for the current repo, it
  emitted a long existing `redundant-prereq` advisory stream outside this batch,
  but there was no batch-7 cycle, forward-reference, B-leaf, unresolved-id, or
  over-cap failure.
- Temporary spliced sanity check:
  `node tools/validate-plan.mjs /tmp/frontier-23-batch-7-spliced-plan.json`
  also exited `0`, so the batch manifest itself is dependency-order clean when
  injected into the plan.
- Dependency-source check on a transient spliced copy, deleted after the run:
  `node tools/depsource.mjs ... --page conformal-mapping-branches-and-the-schwarz-lemma`
  reported `27` published external dependencies, `0` planned-earlier,
  `0` draft-page, `0` homeless, `0` planned-later, and `0` unresolved.
- The same dependency-source check for
  `infinite-products-and-weierstrass-factorisation`
  reported `11` published external dependencies and `0` in every other class.

Source-side blocker:

- `node tools/url-sweep.mjs --coverage research/frontier-23-batch-7.coverage.json --out /tmp/frontier-23-batch-7-url-liveness.json --recover --fail-on-dead`
  failed `0/4` live on Friday, August 28, 2026:
  every failure was shell-side DNS resolution (`curl: (6) Could not resolve
  host`) for `people.math.gatech.edu`, `zr9558.com`, `scholarworks.iu.edu`, and
  `www.jirka.org`.
  The receipt was still written to
  `/tmp/frontier-23-batch-7-url-liveness.json`.

What this does and does not mean:

- It does not mean the coverage ledger's mathematics is unbacked. I opened the
  Ahlfors, Stein-Shakarchi, Weber, and Lebl sources through the web-research
  channel at the exact locators recorded in
  `research/frontier-23-batch-7.coverage.json`.
- It does mean a fresh shell-side liveness receipt is runner-blocked, so the
  URL sweep remains the one unresolved gate-class for this batch.

## Step-3 fix pass

Run date for this pass: Friday, August 28, 2026. The governing alpha review is
`research/frontier-23-alpha-c-step3-scaffold-review.md`, written against the
Friday, August 28, 2026 scaffold bytes.

- Finding `C6-1` disposition: pushed back as non-applicable to batch `7`.
  Evidence: the alpha group-`c` review records `C6-1` against
  `product-measures-and-the-fubini-tonelli-theorems` in batch `6`, while both
  batch-7 A pages
  (`conformal-mapping-branches-and-the-schwarz-lemma`,
  `infinite-products-and-weierstrass-factorisation`) are explicitly marked
  `sufficient` with no batch-7 finding id raised.
  Changed scaffold record: none in batch `7`; no edit was warranted in
  `research/frontier-23-batch-7.pages.json` or
  `research/frontier-23-batch-7.coverage.json`.

Current validator evidence on the batch-7 scaffold bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-7.coverage.json`
  passed on Friday, August 28, 2026: `2` page(s), `110` harvested result(s),
  `0` error(s), `0` warning(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed on Friday, August 28, 2026: `498` scoped item(s), `0` error(s),
  `0` warning(s).
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-7.coverage.json`
  passed on Friday, August 28, 2026: `6/6` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026. It again emitted only the
  repository's standing out-of-batch `redundant-prereq` advisories, with no
  batch-7 cycle, forward-reference, B-page dependency, unresolved-id, or
  item-cap failure.
