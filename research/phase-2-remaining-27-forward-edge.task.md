# Step 4 adjudication — forward page edges

Run `phase-2-remaining-27`. `node tools/validate-plan.mjs research/plan-spec.json`
fails with 13 `undeclared-prereq` findings where an earlier page's item depends
on an item of a LATER page (a reading-order violation; a backward edge was
already spliced, a forward edge cannot be added without changing the order):

- `chern-and-pontryagin-classes-by-splitting-and-complexification` →
  `projective-algebraic-sets-projective-morphisms-and-cones` and →
  `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`
- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` →
  `morse-critical-points-hessians-and-indices`
- `gelfand-theory-and-commutative-c-star-algebras` →
  `conformal-mapping-branches-and-the-schwarz-lemma` and →
  `weak-choice-principles-and-sierpinskis-theorem`
- `gelfand-theory-and-commutative-c-star-algebras-examples` →
  `the-fundamental-group-of-the-circle`
- `hilbert-space-geometry-and-riesz-representation`,
  `orthonormal-bases-parseval-and-fourier-series`,
  `the-ito-integral-with-respect-to-brownian-motion` (+ its examples page),
  `itos-formula-and-brownian-martingales` (+ its examples page) →
  `weak-choice-principles-and-sierpinskis-theorem`
- `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` →
  `lie-subgroups-actions-and-homogeneous-spaces-examples`

## What to do

For each pair:

1. Find the offending item(s): read the consumer page's items' frontmatter
   `deps` and identify every dep whose item is homed on the later page
   (`items/<id>.md` front matter plus the `library/**` page manifests give the
   home; `research/plan-spec.json` gives the page orders).
2. Read the consumer item's proof and establish what it actually uses from that
   supplier. Then choose:
   - **Replace** the forward dep with an earlier item that states the same fact
     (for the weak-choice cases, the underlying choice definitions and earlier
     choice-supply items are usually sufficient; search `items/` for the
     earliest suitable supplier and check its page order). When you replace a
     dep, update both the item's frontmatter `deps` and every proof citation
     (Facts line / bracket tags) that names the old supplier, then run
     `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` and
     `node tools/resolve-citations.mjs`-free check
     `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict`
     for the affected item only if cheap; otherwise at least precheck.
   - **Drop** the dep when the proof does not actually use it (state the
     evidence: the step numbers that do the work without it).
   - **Escalate** the pair only if the supplier is genuinely load-bearing and no
     earlier item states the needed fact; report it with exact locators and do
     not edit the proof.
3. Keep the manifest rows in `research/phase-2-remaining-27-batch-<b>.pages.json`
   equal to the authored items' `deps` for every item you touch.
4. Re-splice and verify:
   `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch <b> --update`,
   then `node tools/splice-plan.mjs --run phase-2-remaining-27 --all`, then
   `node tools/validate-plan.mjs research/plan-spec.json` — the
   `undeclared-prereq` count for these 13 pairs must reach zero.

## Rules

- Edit only the items named in the 13 pairs' findings, their manifest rows, and
  the covers of the pages involved. Do not touch other pages, coverage, scope
  decisions or contract boundary rows.
- Do not weaken statements; a replacement supplier must state what the proof
  uses.
- Report to `research/phase-2-remaining-27-forward-edge-report.md`: each pair,
  the items and steps examined, the fix applied (replace/drop/escalate), the new
  supplier id, and the final validate-plan output.
