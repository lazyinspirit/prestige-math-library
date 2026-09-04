# frontier-29 · Beta-3 · batch notes — `henselian-rings-and-equicharacteristic-cohen-structure`

## 1. Scope, controlling design, and spec drift

This dispatch owns the page pair
`henselian-rings-and-equicharacteristic-cohen-structure` /
`henselian-rings-and-equicharacteristic-cohen-structure-examples`
at orders `194.001` and `194.002`.

I read both matched design loci in
`research/plan-commutative-algebra-track.md`:

- lines `1184-1241`, the original CA-14 page brief;
- lines `3626-3668`, the later CA-14 additions block.

I treated the later `3626-3668` block as **controlling for itemization and proof
decomposition**, because it is the explicit later amendment and it refines the
proof route into the load-bearing intermediate lemmas the page will actually
need at authoring time. I still used the earlier `1184-1241` block for the
page-level placement, source policy, and the explicit warning that CA-14 must
not reintroduce formal-series foundations, because those decisions are not
superseded by the later addendum.

The design and `research/plan-spec.json` agree on:

- page id
- companion page
- order
- category
- title

They **do not** agree on prerequisites:

- the design brief says CA-14 requires CA-2, CA-7, CA-10 through CA-13, plus
  the published `formal-power-series` items;
- the plan spec for this run requires only
  `inverse-limits-and-noetherian-completion-examples` and
  `formal-power-series`.

Per the dispatch rules, I did **not** settle that conflict inside the batch. The
manifest keeps the spec prerequisites exactly as written and this note records
the drift for stage-1 adjudication.

Artifacts written by this dispatch:

- `research/frontier-29-batch-3.pages.json`
- `research/frontier-29-batch-3.coverage.json`
- this file

No plan structure, other batch artifacts, workflow state, or published content
was edited.

## 2. Scaffold shape

The A page has **39 items**. The B page has **9 items**. The A page stays well
below the 60-item split threshold, so no split is proposed.

The A page falls into four proof clusters:

- **Henselian pairs and the lifting mechanism (items 1-16).**
  Pair/local definitions, the Jacobson-radical convention, the explicit Bezout
  and correction lemmas, uniqueness, simple-root lifting, idempotent lifting,
  and the summary equivalence theorem.

- **Complete, Artinian, and quotient consequences (items 17-22).**
  Complete pairs, complete local rings, nilpotent pairs, Artinian locals, and
  quotient stability of Henselianity.

- **Coefficient fields and Cohen presentations (items 23-35).**
  Equicharacteristic/coefficient-field definitions, the maximal-subfield
  argument, the separable/transcendental/purely inseparable cases, the formal
  power-series substitution map, and the equicharacteristic Cohen quotient
  theorem.

- **Parameter subrings and the mixed-characteristic boundary (items 36-39).**
  Module finiteness over a parameter power-series subring, injectivity by
  dimension, the finite-over-regular-subring endpoint, and the non-load-bearing
  mixed-characteristic remark.

The B page stays concrete rather than encyclopedic:

- explicit factor-lifting and simple-root-lifting calculations;
- a multiple-root failure example;
- idempotent lifting as an actual product decomposition;
- complete-DVR and Artinian-local positive examples;
- the standard non-Henselian `\mathbb Z_{(p)}` obstruction;
- an explicit Cohen hypersurface quotient;
- nonuniqueness of coefficient fields.

## 3. Itemization choices

I kept the older CA-14 ids that are still useful page-level endpoints and are
not actually replaced by the later addendum:

- `def-henselian-pair-and-henselian-local-ring`
- `prop-uniqueness-of-hensel-factor-lifting`
- `thm-equivalent-elementary-forms-of-hensels-property`
- `def-equicharacteristic-local-ring-and-coefficient-field`
- `rem-mixed-characteristic-cohen-structure-boundary`

I treated the later addendum as the controlling **replacement decomposition**
for the older broad theorem ids that would otherwise duplicate the same
mathematics:

- `thm-hensels-lemma-for-complete-adic-pairs` is represented by
  `cor-complete-separated-adic-pair-henselian` plus the explicit correction and
  convergence lemmas.
- `cor-artinian-local-rings-are-henselian` is represented by
  `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`.
- `thm-henselian-property-passes-to-quotients` is represented by
  `lem-henselian-quotient-factor-lift` plus
  `cor-quotient-of-a-henselian-local-ring-is-henselian`.
- `thm-existence-of-coefficient-fields-equicharacteristic` is represented by
  the maximal-subfield and adjunction lemmas plus
  `cor-equicharacteristic-complete-local-ring-has-coefficient-field`.
- `thm-universal-property-of-multivariable-formal-power-series` is represented
  by `lem-formal-power-series-evaluation-converges` plus
  `lem-formal-power-series-evaluation-unique-continuous-map`.
- `thm-equicharacteristic-cohen-structure-theorem` is represented by
  `cor-equicharacteristic-complete-local-power-series-quotient`.
- `thm-complete-local-domain-finite-over-regular-power-series-subring` is
  represented by the parameter-subring finiteness/injectivity lemmas plus
  `cor-complete-local-domain-finite-over-a-regular-power-series-ring`.

I also kept `cor-henselian-local-simple-root-criterion` from the addendum even
though the summary equivalence theorem also contains that direction, because it
is a cheap and genuinely user-facing endpoint that later proofs and examples can
name directly.

I did **not** add a standalone multivariable formal-power-series definition
item. The earlier CA-14 brief explicitly says this page must not redefine
formal-series foundations, and the live corpus already has a published
one-variable `formal-power-series` page. So the scaffold handles
`k[[X_1, \ldots, X_n]]` only through the source-backed substitution and Cohen
presentation items instead of inventing a second foundational entry point.

## 4. Source choices and locator discipline

The coverage artifact records five source URLs that I actually opened:

1. **Altman-Kleiman, _A Term of Commutative Algebra_, 13th ed.**
   This is the batch's textbook backing for complete Nakayama, the multivariable
   formal-series universal property, the Cohen quotient theorem, and the
   regular-local power-series model.

2. **Mel Hochster, _The structure theory of complete local rings_.**
   This matches the later addendum's proof decomposition most closely: Hensel's
   lemma, coefficient fields, the power-series map, and the parameter-subring
   finiteness theorem all appear in one compact route.

3. **Stacks 15.11, Henselian pairs.**
   This is the exact pair-level source the page needs for the adopted
   definition, the complete-pair theorem, idempotent lifting, and quotient
   stability via integral maps.

4. **Stacks 10.153, Henselian local rings.**
   This supplies the local simple-root criterion together with the complete
   local and Artinian local consequences.

5. **Stacks 10.160, The Cohen structure theorem.**
   This supplies the equicharacteristic definition, the mixed-characteristic
   Cohen-ring boundary, the main Cohen structure theorem, and the domain-finite
   power-series subring theorem.

### Altman locator drift

The design brief's Altman locators `(22.54)--(22.81)` do **not** match the live
MIT-hosted 13th-edition PDF I could actually read. On the live source, the
relevant results are numbered `Exercise (22.28)`, `Example (22.31)`,
`Theorem (22.32)`, and `Theorem (22.33)` on the cited pages.

I preserved the design's source choice, but I recorded the **live numbering and
live pages faithfully** in the coverage file rather than fabricating the older
locator scheme.

## 5. Dependency rationale and known seams

Two places on this page need explicit proof decomposition rather than a single
source theorem citation:

- **Hensel lifting.**
  The later addendum wants the actual correction machinery authored, not just a
  one-line citation to "Hensel's lemma". So the scaffold breaks the source proof
  into the Bezout lift, one-stage correction, Cauchy convergence, limit, and
  uniqueness pieces.

- **Coefficient fields.**
  The later addendum wants the maximal-subfield proof written honestly, with the
  separable, transcendental, and purely inseparable branches visible. The
  coverage therefore harvests the larger source theorems, while this note makes
  clear why the manifest carries smaller authorable lemmas.

Other scope decisions:

- **Quotient stability** is sourced from the Henselian-pair route in Stacks:
  integral maps preserve Henselian pairs, and quotient maps are integral. I
  specialized that to the local-ring corollary instead of pretending a stronger
  new theorem had already been authored elsewhere in the corpus.

- **Choice principles are explicit.**
  The page still spends choice exactly where the design says: the Hensel
  correction recursion is elementary once the residue data are fixed; the
  maximal-subfield argument uses AC/Zorn; and the purely inseparable completion
  step is where the full completeness hypothesis is genuinely spent.

- **The published formal-power-series prerequisite is still one-variable.**
  I recorded that seam instead of hiding it. CA-14 uses the published
  formal-series page only as background for formal-series operations and then
  carries the multivariable ring through source-backed UMP/presentation items on
  this page.

- **Mixed characteristic remains non-load-bearing.**
  The page records the full theorem only as a boundary remark, exactly as the
  design instructs. No later A-page or B-page item depends on that remark.

## 6. Validator targets

The scoped validator set for this scaffold pass is:

- `node tools/coverage-checklist.mjs research/frontier-29-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-3.coverage.json --stamp`

I append the actual results below after running them.

## 7. Actual results

Actual validator results for this dispatch:

- `node tools/coverage-checklist.mjs research/frontier-29-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 28 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json`
  -> `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — no positional claim contradicts the spec.`
  A second filtered run of the same validator ended
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward`
  after printing only the standing repository-wide `redundant-prereq` advisories.
  No CA-14-specific plan error was reported.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-3.coverage.json --stamp`
  -> **failed mechanically**
  with
  `source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED`
  and `EAI_AGAIN` for every recorded URL:
  `https://web.mit.edu/18.705/www/13Ed.pdf`,
  `https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf`,
  `https://stacks.math.columbia.edu/tag/09XD`,
  `https://stacks.math.columbia.edu/tag/04GE`,
  and
  `https://stacks.math.columbia.edu/tag/0323`.

- `node tools/prosecheck.mjs research/frontier-29-batch-3.notes.md --warnings`
  -> `1 file(s) checked. 0 error(s), 3 warning(s).`
  The warnings are only the repository's count-in-prose style warnings for
  `14 page`, `39 items`, and `9 items`.

### Interpretation of the fetch failure

I did **not** replace any source URL after the failed stamp pass, because this
was not source-specific evidence that a document had died or moved. The failure
mode was sandbox DNS resolution (`EAI_AGAIN`) on all five hosts before any
content comparison. During the same dispatch I opened the exact recorded URLs
through the web tool and harvested from those live documents.

So the current batch state is:

- the scaffold manifest is structurally green;
- the harvest is structurally green;
- the notes are structurally green apart from count-style warnings;
- the only red gate is the missing local fetch stamps, caused by transport
  failure rather than by a dead or mismatched source.

If the DNS issue clears, the next action is to rerun exactly the stamped fetch
command above on the current bytes.

## 8. Step 3 alpha repair

On Tuesday, September 1, 2026, Step 3 Alpha found that the current B-page
manifest still depended on two published example-page leaves:

- `ex-artinian-local-ring-henselian` cited
  `ex-artinian-truncated-polynomial-ring`
- `ex-localised-integers-not-henselian` cited
  `ex-the-local-ring-z-at-p-and-its-residue-field`

That was a real scaffold defect on the live bytes, not a harmless note-level
drift. After splicing the batch manifest into the current `research/plan-spec.json`,
`validate-plan` reported:

- two `[b-leaf]` violations for the foreign B-page dependencies
- one `[undeclared-prereq]` on
  `the-field-of-fractions-and-localisation-examples`

I repaired the batch in-scope by rewriting those example dependencies onto
local/published A-page support only:

- the Artinian witness now works directly in `k[x]/(x^n)` via
  `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`,
  `def-polynomial-ring-over-a-commutative-ring`, and `def-quotient-ring`
- the non-Henselian localization witness is now fixed explicitly at
  `\mathbb Z_{(7)}` with `T^2-2`, using
  `thm-localisation-at-a-prime-is-local`,
  `cor-residue-field-of-a-localisation-at-a-prime`, and
  `thm-z-mod-p-is-a-field`

This did not add a page, change reading order, or alter source routing.
It only removed forbidden example-page dependencies from the current batch
manifest.

### Step 3 recheck results

After the repair, the focused recheck commands were:

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json`
- `node tools/validate-plan.mjs /tmp/frontier-29-alpha-b-spliced-plan.json`

The current results are:

- `content-policy`: `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`
- the spliced-plan validation no longer reports any CA-14-specific
  `[b-leaf]` or `[undeclared-prereq]` failure

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-3 scaffold bytes and the stable review in
`research/frontier-29-alpha-b-step3-scaffold-review.md`.

- Finding id: none issued for batch `3`.
  Disposition: accepted as an already-applied manifest repair on current
  bytes; no further dependency or harvest rewrite was needed in this fix pass.
  Evidence: the stable group-`b` review says CA-14 had one direct Step-3
  scaffold defect, namely the two forbidden foreign B-page dependencies from
  `ex-artinian-local-ring-henselian` and
  `ex-localised-integers-not-henselian`. The current
  `research/frontier-29-batch-3.pages.json` already carries the repaired local
  support only:
  `ex-artinian-local-ring-henselian` now depends on
  `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`,
  `def-polynomial-ring-over-a-commutative-ring`, and `def-quotient-ring`;
  `ex-localised-integers-not-henselian` now depends on
  `cor-henselian-local-simple-root-criterion`,
  `thm-localisation-at-a-prime-is-local`,
  `cor-residue-field-of-a-localisation-at-a-prime`, and
  `thm-z-mod-p-is-a-field`.
  Changed scaffold record: `research/frontier-29-batch-3.notes.md` only in
  this pass. The repaired dependency carrier remains
  `research/frontier-29-batch-3.pages.json`; the coverage harvest in
  `research/frontier-29-batch-3.coverage.json` was re-read unchanged.

Current validator and fetch-verification evidence on Wednesday, September 2,
2026:

- `node tools/coverage-checklist.mjs research/frontier-29-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 28 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-3.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- Re-opened all five recorded batch-3 source URLs in the web reader on
  Wednesday, September 2, 2026: the Altman-Kleiman MIT PDF, the Hochster
  Structure PDF, and the Stacks tags `09XD`, `04GE`, and `0323`. Every URL
  remained live at the recorded location, so no URL recovery, source
  replacement, locator rewrite, or harvest-disposition change was required.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0` and ended in `OK`; it emitted only the repository's standing
  out-of-batch `redundant-prereq` advisories
- spliced-plan validation:
  `node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-29-batch-3.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-29-batch-3-spliced-plan.json", JSON.stringify(plan, null, 2) + "\\n");'`
  then `node tools/validate-plan.mjs /tmp/frontier-29-batch-3-spliced-plan.json`
  also exited `0` and ended in `OK`, with no batch-3-specific
  `[b-leaf]`, `[undeclared-prereq]`, cycle, forward-reference, B-page
  dependency, or unresolved-id defect

## Step-5 authoring

Authored pages:

- `library/commutative-algebra/henselian-rings-and-equicharacteristic-cohen-structure.md`
- `library/commutative-algebra/henselian-rings-and-equicharacteristic-cohen-structure-examples.md`

Authored A-page item ids:

- `def-henselian-pair-and-henselian-local-ring`
- `lem-henselian-pair-ideal-in-jacobson-radical`
- `lem-coprime-factor-bezout-lift`
- `lem-hensel-factor-lift-leading-coefficient-normalisation`
- `lem-hensel-factor-correction-one-stage`
- `lem-hensel-factor-corrections-form-cauchy-sequences`
- `lem-hensel-factor-limit-multiplies-to-original`
- `lem-hensel-factor-lift-uniqueness-induction`
- `prop-uniqueness-of-hensel-factor-lifting`
- `lem-simple-root-to-coprime-factorisation`
- `cor-factor-hensel-implies-simple-root-hensel`
- `cor-idempotents-lift-uniquely-in-a-henselian-pair`
- `lem-simple-root-hensel-lifts-idempotents`
- `lem-simple-root-form-recovers-factor-lifting`
- `cor-henselian-local-simple-root-criterion`
- `thm-equivalent-elementary-forms-of-hensels-property`
- `cor-complete-separated-adic-pair-henselian`
- `cor-complete-local-rings-are-henselian`
- `cor-nilpotent-ideal-pair-is-henselian`
- `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`
- `lem-henselian-quotient-factor-lift`
- `cor-quotient-of-a-henselian-local-ring-is-henselian`
- `def-equicharacteristic-local-ring-and-coefficient-field`
- `lem-coefficient-field-maps-isomorphically-to-residue-field`
- `lem-equicharacteristic-prime-field-lifts`
- `lem-maximal-residue-injective-subfield`
- `lem-coefficient-field-separable-adjunction-step`
- `lem-coefficient-field-transcendental-adjunction-step`
- `lem-coefficient-field-purely-inseparable-complete-step`
- `cor-equicharacteristic-complete-local-ring-has-coefficient-field`
- `lem-formal-power-series-evaluation-converges`
- `lem-formal-power-series-evaluation-unique-continuous-map`
- `lem-cohen-presentation-surjective-mod-maximal-square`
- `lem-cohen-presentation-surjective-by-completeness`
- `cor-equicharacteristic-complete-local-power-series-quotient`
- `lem-parameter-power-series-subring-makes-ring-finite`
- `lem-parameter-power-series-map-injective-by-dimension`
- `cor-complete-local-domain-finite-over-a-regular-power-series-ring`
- `rem-mixed-characteristic-cohen-structure-boundary`

Authored B-page item ids:

- `ex-hensel-factor-correction-mod-three-powers`
- `ex-simple-root-and-factor-hensel-same-lift`
- `ex-multiple-residue-root-does-not-lift-uniquely`
- `ex-idempotent-lifting-and-product-decomposition`
- `ex-complete-discrete-valuation-ring-henselian`
- `ex-artinian-local-ring-henselian`
- `ex-localised-integers-not-henselian`
- `ex-cohen-presentation-singular-hypersurface`
- `ex-coefficient-field-noncanonical-choice`

Proof-contract artifact authored:

- `research/frontier-29-batch-3.proof-contracts.json`

Provenance and authoring rationale:

- All batch-3 items and both page files remain `status: draft`.
- Statements are recorded as `literature-derived` throughout the page pair.
- Proofs are marked `ai-generated` where the written argument is elementary from
  on-disk prerequisites and `ai-altered` where the written proof is a
  source-backed reworking of the harvested route.
- The mixed-characteristic boundary stays `proved_here: false` with the required
  `external_dependency` record; it was not promoted into a false proved-here
  theorem.
- I normalized formal-power-series notation from `[[...]]` to
  `\\llbracket ... \\rrbracket` in the authored batch files so the repo's
  wikilink parser would not misread formal-series notation as item citations.

Narrowed or dropped claims:

- No planned item id was dropped.
- I tightened four over-strong hypotheses by removing unnecessary uses of the
  Axiom of Choice from:
  `lem-cohen-presentation-surjective-mod-maximal-square`,
  `lem-cohen-presentation-surjective-by-completeness`,
  `lem-parameter-power-series-subring-makes-ring-finite`, and
  `lem-parameter-power-series-map-injective-by-dimension`.
- The purely inseparable coefficient-field step remains a source-backed
  completeness argument at the same planned claim, rather than being widened
  into a stronger unsourced statement.

Blockers:

- None inside batch `3`.

Checks run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts $(node - <<'NODE'
const fs=require('fs');
const arr=JSON.parse(fs.readFileSync('research/frontier-29-batch-3.pages.json','utf8'));
for(const p of arr) for(const it of p.items||[]) process.stdout.write('items/'+it.id+'.md ');
NODE
)`
  -> `45 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-29-batch-3.pages.json`
  -> `content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0`; ended in `OK — declared page order is acyclic and consistent...`
  with only the repository's standing out-of-batch `redundant-prereq`
  advisories
- `node tools/proof-contract.mjs research/frontier-29-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 45/45 item(s) checked`
- `git diff --check -- items library/commutative-algebra research/frontier-29-batch-3.proof-contracts.json research/frontier-29-batch-3.notes.md`
  -> exited `0` with no output

Extra diagnostic, not counted as a Step-5 gate:

- Re-running scaffold-only `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json`
  after authoring now reports `batch-item-already-exists` on all `48` scoped
  items, which is expected because `--manifest-only` is the pre-authoring
  scaffold mode rather than the post-authoring item mode.
