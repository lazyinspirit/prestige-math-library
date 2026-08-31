# frontier-26 · Beta · batch 4 scaffold notes

Run `frontier-26`, batch `4`, one A/B pair, category `complex-analysis`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:
`research/frontier-26-batch-4.pages.json`,
`research/frontier-26-batch-4.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design location opened:

- `research/plan-complex-analysis-track.md` lines `2619-2712`
- `research/frontier-26-alpha-step0-drift.md` lines `17-19`

Shape after scaffolding:

- `analytic-continuation-and-monodromy` (A): **22 items**
- `analytic-continuation-and-monodromy-examples` (B): **11 items**

The A page stays far below the `60`-item split ceiling, so no split is
proposed.

I kept the design's route literally:

- germs, function elements, admissible continuation chains, chain refinement,
  and chain-independent endpoint germs first;
- uniqueness and the monodromy theorem second, with the single-valued
  simply-connected corollary kept as a distinct downstream item and followed by
  the required CA-7/CA-17 agreement remark;
- the germ-space Riemann-surface construction third, with the local
  biholomorphism theorem separated from the nonautomatic-covering remark exactly
  as the design requires;
- the logarithm and nth-root surfaces next;
- the reflection seam after that;
- the singular-boundary, circle-of-convergence, Pringsheim, and factorial-gap
  natural-boundary tail last.

The B page keeps the design's four required examples, four required false
statements, and the two named counterexamples. I added one local supporting
example,
`ex-the-geometric-series-has-only-one-singular-boundary-point`,
because the design explicitly wants the false statement about "every boundary
point" refuted and the library may not depend on another page's B-homed
geometric-series example.

---

## 2. Design against spec and live seams

### No page-level drift

- The design and `research/plan-spec.json` agree on the A/B orders `341/342`.
- The design and `research/plan-spec.json` agree on title, category, companion,
  and declared page prerequisites.
- The design writes the prerequisites in shorthand as `CA-17`, `CA-6`, and
  `covering-spaces-and-lifting`; the live spec spells those as
  `simply-connected-plane-domains`,
  `the-identity-theorem-and-the-open-mapping-theorem`,
  and `covering-spaces-and-lifting`.
- Per dispatch, I kept the live spec names in the manifest and record the
  shorthand/expanded equivalence here rather than hand-editing plan structure.

### Germ seam on current disk

There is one important non-drift seam on disk:

- order `353` already publishes
  `def-holomorphic-germ-ring-and-its-maximal-ideal`
  on `holomorphic-inverse-and-weierstrass-preparation`;
- that later item is a several-complex-variables local-ring package at the
  origin;
- CA-20 still needs its own earlier one-variable carriers
  `def-holomorphic-germ` and
  `thm-holomorphic-germs-at-a-point-form-a-local-ring`.

I therefore kept the design's early germ items instead of pretending the later
page can already supply them. This is a recorded seam, not a silent duplicate:
the earlier page needs germs at an arbitrary point in one complex variable, and
the live reading order forbids depending on the later several-variables page.

---

## 3. Source stack actually read

Only the A page carries the coverage harvest. The B page is an example leaf.

Recorded harvest sources:

1. Curtis T. McMullen, *Riemann Surfaces*:
   `https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf`
2. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.:
   `https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
3. Henry Wilton, *Riemann Surfaces* lecture notes, recovered through Scribd:
   `https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton`
4. Philippe Flajolet, *Symbolic Enumerative Combinatorics and Complex
   Asymptotic Analysis*:
   `https://algo.inria.fr/seminars/sem00-01/flajolet.html`

### Why these four

- McMullen and Ahlfors are the design-named pair sources and remain the primary
  backbone for the page.
- Wilton supplies the cleanest accessible named treatment for singular boundary
  points, natural boundaries, the gluing picture, the space of germs, and the
  classical monodromy theorem in one place.
- Flajolet supplies an official full-text statement of Pringsheim's theorem on a
  stable INRIA host, which the design inventory needs for the boundary tail.

### Source repair and recovered-URL provenance

Two URLs needed repair under the dispatch's recover-before-replace rule.

#### Ahlfors

- The older Georgia Tech host named in prior library items is
  `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`.
- In this dispatch I reopened the same document successfully at
  `https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`.
- The coverage ledger therefore records the live `mccuan` URL and preserves the
  older host as `original_url`.

#### Wilton

- The canonical lecturer URL is
  `https://www.dpmms.cam.ac.uk/~hjrw2/RS%20lectures.pdf`.
- The current runner did not give me a usable direct fetch for that URL through
  the web reader.
- I therefore reopened the same lecture notes through the Scribd text view at
  `https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton`,
  recorded that live URL in coverage, and preserved the Cambridge lecturer URL
  as `original_url` with an explicit `recovery_note`.

### Receipt handling

- The shell runner in this session is network-restricted, so I did not invent
  byte hashes or content lengths that I could not mechanically obtain.
- For the four recorded exact URLs, I wrote minimal `fetch_verified` blocks that
  say only what I actually verified through the web reader on Sunday, August 30,
  2026: that the linked document's full text was reader-visible there, with PDF
  page counts included where the reader exposed them.
- This matches the repository's existing precedent when exact-url shell stamping
  is unavailable.

---

## 4. Local scaffold decisions

### Decision 1 — keep chain independence and monodromy as separate items

The design's trap is correct. I kept:

- `thm-end-germ-of-path-continuation-is-independent-of-the-chain`
- `thm-monodromy-theorem`

as distinct items in that order. The first is a same-path subdivision theorem;
the second is the homotopy theorem. Conflating them is exactly the scaffold
failure the owner warned about.

### Decision 2 — keep the projection theorem separate from the covering remark

I preserved the design's distinction between:

- `thm-germ-projection-is-a-local-biholomorphism`
- `rem-covering-maps-among-complete-analytic-functions`

The page proves the local chart statement and explicitly refuses to overclaim
that every germ projection is already a covering map.

### Decision 3 — record the CA-7/CA-17 agreement seam explicitly

I inserted
`rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`
immediately after
`cor-single-valued-continuation-on-simply-connected-domains`.

That remark is where the page now records the design-required fact that the
monodromy corollary supplies a second proof of the simply connected logarithm
theorem and agrees with the earlier CA-7 and CA-17 packages already on disk.

### Decision 4 — the earlier germ layer stays local to CA-20

Because the live order places the several-variables germ-ring page at `353`, CA-20
keeps its own one-variable germ definition and local-ring theorem. This is the
honest way to keep the page dependency-closed.

### Decision 5 — the boundary tail stays explicit and elementary

I kept all three boundary items local:

- `thm-circle-of-convergence-contains-a-singular-point`
- `thm-pringsheim-theorem`
- `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary`

The factorial-gap theorem is scaffolded by the explicit root-of-unity argument,
not by an unsupplied Hadamard-gap theorem.

### Decision 6 — the B page carries the exact witnesses the design asks for

The examples page now includes:

- the `log + 2 pi i` continuation witness;
- the sign change of `sqrt z` around `0`;
- the helicoid picture of the logarithm surface;
- the two-sheeted square-root surface;
- the factorial-gap natural-boundary counterexample;
- the `sum z^n / n^2` continuous-boundary-but-singular witness;
- the four false statements from the design.

The only extra witness is the local geometric-series boundary example needed to
refute the last false statement without depending on another page's B-homed
item.

---

## 5. Dependency and proof-route notes

### Path continuation block

- `lem-refinement-of-analytic-continuation-chains` uses the exact design route:
  a Lebesgue number subdivision on `[0,1]`.
- `thm-end-germ-of-path-continuation-is-independent-of-the-chain` then compares
  the two refined chains segmentwise and closes with the identity theorem.
- `thm-uniqueness-of-analytic-continuation` is kept as the explicit corollary of
  chain independence, not merged into it.

### Monodromy and single-valuedness

- `thm-monodromy-theorem` follows the CA-17-style homotopy-square subdivision
  route, not covering-space lifting.
- `cor-single-valued-continuation-on-simply-connected-domains` cites
  `def-simply-connected`, `def-based-loops-and-fundamental-group`, and
  `thm-fundamental-group-laws` so the step-5 proof can explicitly convert two
  same-endpoint paths into a nullhomotopic loop before invoking monodromy.
- `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`
  records the design-required agreement seam with
  `thm-holomorphic-logarithms-homologically-simply-connected-domains` and
  `thm-grand-equivalence-for-simply-connected-plane-domains`.

### Riemann-surface block

- `lem-germ-neighborhoods-form-a-riemann-surface-basis` is the sharpest local
  authoring item. It must discharge basis, Hausdorff, chart-compatibility, and
  second-countability obligations honestly.
- I recorded the rational-disc and polygonal-path atlas route in the strategy so
  step 5 does not silently drop second countability.
- `thm-germ-projection-is-a-local-biholomorphism` is then the clean chart-level
  cash-out of that lemma.

### Log and root surfaces

- `thm-riemann-surface-of-the-logarithm` uses the principal strip/exponential
  model together with continuation and winding-number monodromy, exactly the
  seam the draft `rem-riemann-surface-of-log` says is still missing on disk.
- `thm-riemann-surface-of-an-nth-root` is scaffolded as the finite quotient or
  power-map version of the same mechanism, not as an unrelated construction.

### Boundary block

- `thm-circle-of-convergence-contains-a-singular-point` cites the existing
  complex power-series radius and re-expansion machinery rather than rebuilding
  it.
- `thm-pringsheim-theorem` is sourced from Flajolet for the named theorem and
  scaffolded with the standard positive-coefficient contradiction route.
- `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one`
  is intentionally built from the M-test plus Pringsheim: continuity on the
  boundary is not regularity of the analytic function.

---

## 6. Known limits and step-5 risks

- The germ-atlas lemma is the main step-5 risk, specifically its
  second-countability clause.
- The recovered Wilton source is a same-text repair through Scribd rather than a
  direct lecturer PDF. That is recorded explicitly in coverage and here.
- The false statement about Riemann surfaces and subsets of `C^2` must stay
  focused on the **abstract germ-space definition**. The logarithm surface does
  admit a convenient helicoid model in `C^2`; the false claim is that such a
  model is automatic or definitional.
- I did not open algebraic-function branching or compact-surface machinery just
  to enrich this page. Those are real later topics, and the out-of-scope source
  rows record that boundary honestly.

---

## 7. Validator results

Commands run on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs research/frontier-26-batch-4.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-4.coverage.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/prosecheck.mjs research/frontier-26-batch-4.notes.md --warnings`
- `git diff --check -- research/frontier-26-batch-4.pages.json research/frontier-26-batch-4.coverage.json research/frontier-26-batch-4.notes.md`

Results are recorded after the commands are rerun on the final bytes:

- `node -e "JSON.parse(...pages...); JSON.parse(...coverage...)"`:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 441 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`:
  `source-fetch-check: 4/4 source(s) fetch-verified`.
- `validate-plan` passed. Its output is the standing full-plan receipt plus the
  repository's usual `redundant-prereq` advisory stream, and it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.
  ```

- `prosecheck`:
  `0` errors and `5` heuristic `count-in-prose` warnings at the item-count
  lines and the validator-count receipt lines.
- `git diff --check` was clean.

---

## Step-3 fix pass

- Finding `B4-1`
  Disposition: `applied`.
  Evidence: `research/frontier-26-alpha-c-step3-scaffold-review.md:166-183`
  identified that the manifest depended on
  `def-function-element-and-direct-analytic-continuation` without any exact
  carrier. I re-opened the live Ahlfors PDF and re-read the Ch. 8 continuation
  block: near the end of §1.3 Ahlfors uses a germ determined by a function
  element and a direct analytic continuation of it (web lines `9529-9539` on
  the recovered `mccuan` URL), and §1.4 then continues with continuations along
  arcs (web lines `9768-9773`).
  Changed scaffold record: `research/frontier-26-batch-4.coverage.json` now
  adds the exact Ahlfors row
  `the function-element and direct analytic continuation setup at the end of §1.3 and start of §1.4`
  with disposition `included` for
  `def-function-element-and-direct-analytic-continuation`.

- Finding `B4-2`
  Disposition: `applied`.
  Evidence: `research/plan-complex-analysis-track.md:2668-2672` requires the
  simply connected continuation corollary to be recorded as a second proof that
  a nonvanishing function on a simply connected domain has a logarithm, with an
  agreement remark to CA-7/CA-17. The review logged the omission at
  `research/frontier-26-alpha-c-step3-scaffold-review.md:192-202`, and the
  earlier CA-17 packaging is already on the live spec at
  `research/plan-spec.json:105193-105256`.
  Changed scaffold record: `research/frontier-26-batch-4.pages.json` now
  inserts
  `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`
  immediately after
  `cor-single-valued-continuation-on-simply-connected-domains`, and
  `research/frontier-26-batch-4.coverage.json` now adds its canonical carrier.

## Step-5 authoring

Authored page files:

- `library/complex-analysis/analytic-continuation-and-monodromy.md`
- `library/complex-analysis/analytic-continuation-and-monodromy-examples.md`

Authored A-page items:

- `def-holomorphic-germ`
- `thm-holomorphic-germs-at-a-point-form-a-local-ring`
- `def-function-element-and-direct-analytic-continuation`
- `def-analytic-continuation-along-a-path`
- `lem-refinement-of-analytic-continuation-chains`
- `thm-end-germ-of-path-continuation-is-independent-of-the-chain`
- `thm-uniqueness-of-analytic-continuation`
- `def-complete-analytic-function`
- `thm-monodromy-theorem`
- `cor-single-valued-continuation-on-simply-connected-domains`
- `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`
- `def-riemann-surface-of-a-complete-analytic-function`
- `lem-germ-neighborhoods-form-a-riemann-surface-basis`
- `thm-germ-projection-is-a-local-biholomorphism`
- `rem-covering-maps-among-complete-analytic-functions`
- `thm-riemann-surface-of-the-logarithm`
- `thm-riemann-surface-of-an-nth-root`
- `rem-schwarz-reflection-as-analytic-continuation`
- `def-singular-boundary-point-and-natural-boundary`
- `thm-circle-of-convergence-contains-a-singular-point`
- `thm-pringsheim-theorem`
- `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary`

Authored B-page items:

- `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i`
- `ex-square-root-continuation-around-the-origin-changes-sign`
- `ex-helicoid-model-of-the-logarithm-surface`
- `ex-two-sheeted-model-of-the-square-root-surface`
- `ex-the-geometric-series-has-only-one-singular-boundary-point`
- `cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary`
- `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one`
- `fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary`
- `fs-continuation-along-same-endpoint-paths-always-agrees`
- `fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared`
- `fs-every-boundary-point-of-a-radius-one-power-series-is-singular`

Authored contract artifact:

- `research/frontier-26-batch-4.proof-contracts.json`

Provenance rationale:

- I tagged the core continuation, monodromy, germ-space, logarithm-surface,
  root-surface, and natural-boundary statements as `literature-derived`, since
  the scaffold coverage already named direct carriers in Ahlfors, McMullen,
  Wilton, and Flajolet.
- I tagged the local agreement remarks and the B-page witness packaging as
  `ai-altered`, because they are faithful local formulations or examples built
  from the harvested source route and the published prerequisites rather than
  direct copied theorem statements.
- Every authored proof-bearing item keeps `proof: ai-generated`, and every
  definition or remark keeps `proof: not-applicable`.

Canonical precheck repair applied before the final rerun:

- flattened proof rows so each numbered step carries its tags on the same proof
  paragraph;
- adopted the canonical phase numbering that `precheck` requested for
  `thm-holomorphic-germs-at-a-point-form-a-local-ring`,
  `lem-refinement-of-analytic-continuation-chains`,
  `thm-end-germ-of-path-continuation-is-independent-of-the-chain`,
  `thm-monodromy-theorem`,
  `cor-single-valued-continuation-on-simply-connected-domains`,
  `lem-germ-neighborhoods-form-a-riemann-surface-basis`,
  `thm-riemann-surface-of-the-logarithm`,
  `thm-riemann-surface-of-an-nth-root`,
  `thm-circle-of-convergence-contains-a-singular-point`,
  `thm-pringsheim-theorem`, and
  `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary`;
- set `proof_strategy: contradiction` on the three boundary-singularity theorems
  whose final steps discharge an explicit contradiction.

Narrowed or dropped claims:

- none.

Blockers:

- none in this batch after the Step-3 scaffold fixes.

Checks rerun on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts <batch-4 item list>`:
  `24 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  passed, ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
- `node tools/content-policy.mjs research/frontier-26-batch-4.pages.json`:
  `content-policy: 33 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-26-batch-4.proof-contracts.json --strict`:
  `proof-contract: 0 error(s), 0 warning(s), 24/24 item(s) checked`.
