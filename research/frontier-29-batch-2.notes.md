# frontier-29 batch 2 notes - beta scaffold

Owned pairs:

- `modular-representations-and-projective-covers` / `modular-representations-and-projective-covers-examples`
- `pro-p-groups-and-the-p-adic-integers` / `pro-p-groups-and-the-p-adic-integers-examples`

Artifacts written in this dispatch:

- `research/frontier-29-batch-2.pages.json`
- `research/frontier-29-batch-2.coverage.json`
- this file

Session date: Wednesday, September 2, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-29-beta-batch.task.md`,
`research/frontier-29-dispatch/beta-batch-2.prompt.md`,
`research/plan-spec.json`,
`research/frontier-29-alpha-step0-drift.md`,
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:2209),
and [research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:2316).

### GT-18 -- `modular-representations-and-projective-covers`

The generated task listed two design hits at lines 2316 and 2401. After opening
both, I treated the block beginning at
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:2316)
as the controlling design source:

- line 2316 is the start of the GT-18 scaffold block;
- line 2401 is only the B-page heading inside that same block, not a second
  amendment or competing design note.

The direct page-level `requires` do not match literally:

- the design block names `induced-representations-and-frobenius-reciprocity`,
  `modules-and-module-homomorphisms`,
  `chain-conditions-and-semisimple-modules`,
  `valuation-rings-and-discrete-valuation-rings`, and
  `inverse-limits-and-noetherian-completion`;
- the live `research/plan-spec.json` page entry keeps only
  `["induced-representations-and-frobenius-reciprocity-examples","valuation-rings-and-discrete-valuation-rings","inverse-limits-and-noetherian-completion"]`.

I followed the live spec exactly at the manifest page level and recorded the
difference here rather than mutating the run plan. The important nuance is that
the transitive closure of the spec already reaches the broader module and
semisimplicity pages through the induction pathway, and
`research/frontier-29-alpha-step0-drift.md` records `VERDICT: no-drift` for
this page. I therefore kept the direct `requires` from the spec while allowing
item dependencies into the already-reached transitive closure.

### GT-17 -- `pro-p-groups-and-the-p-adic-integers`

The generated task listed two design hits at lines 2209 and 2279. After opening
both, I treated the block beginning at
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:2209)
as the controlling design source:

- line 2209 is the start of the GT-17 scaffold block;
- line 2279 is only the B-page heading inside that same block, not a second
  amendment or competing route note.

The direct page-level `requires` again do not match literally:

- the design block names `inverse-systems-profinite-groups-and-completion`,
  `frattini-subgroups-and-the-burnside-basis-theorem`, and
  `cyclic-groups-and-direct-products`;
- the live `research/plan-spec.json` page entry keeps only
  `["inverse-systems-profinite-groups-and-completion-examples"]`.

I again kept the manifest page-level `requires` at the live spec value. Here
too the transitive closure already reaches the broader design suppliers,
including the finite Frattini and cyclic-group pages, and
`research/frontier-29-alpha-step0-drift.md` records `VERDICT: no-drift` for
this page.

## Item census and split check

- A page `modular-representations-and-projective-covers`: `33` items
- B page `modular-representations-and-projective-covers-examples`: `6` items
- A page `pro-p-groups-and-the-p-adic-integers`: `25` items
- B page `pro-p-groups-and-the-p-adic-integers-examples`: `7` items

Both A pages remain well below the `60`-item split ceiling, so no split is
needed.

## Route choices

### GT-18

I kept the designer's route, with two explicit scaffold decisions.

1. The page starts with the splitting `p`-modular system and lattice reduction,
   then moves to finite-dimensional radicals and Nakayama before any projective
   cover statement.
2. The projective-cover spine stays separate from the relative-projectivity and
   vertex/source spine, exactly as the design intended.

Additional choices:

- I added `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent`.
  That lemma is not padding. It is the clean intermediate result the locality
  theorem for `kG` genuinely wants.
- I kept `thm-krull-schmidt-for-finite-dimensional-kg-modules` as a page-local
  scaffolded item because no published `items/` entry presently owns a
  Krull-Schmidt theorem for modules under that name, even though the design
  expected to cite one conceptually.
- I did not record Benson, Thevenaz, or Green as harvested sources in this
  scaffold. They are named in the design, but I did not obtain directly
  verified full-text access to them inside this session, so leaving them out of
  the coverage file is the honest choice.

### GT-17

I kept the designer's route from inverse limits to `Z_p`, then to pro-`p`
Frattini theory.

1. `Z_p` is defined as compatible residue classes, not as digit strings with a
   representative-choice ambiguity.
2. The inverse-limit topology and the `p`-adic metric topology are separated as
   distinct items, because the rest of the page uses that identification more
   than once.
3. The Frattini tail stays on the A page, including the topological Burnside
   basis theorem, rather than being pushed to the examples page.

Additional choices:

- I kept the profinite-completion product statement on this page because the
  design explicitly wants `\widehat{\mathbb Z} \cong \prod_p \mathbb Z_p`.
- I titled `thm-frattini-subgroup-commutes-with-surjective-inverse-limits` in
  the pro-`p` surjective-limit form directly supported by the accessible
  Lubotzky text I actually opened. The broader Wilkes phrasing from the design
  should be rechecked at authoring time if the Cambridge notes become directly
  readable.
- I did not record the design's Wilkes lecture notes as a harvested source in
  this scaffold because the Cambridge PDF was not directly readable in the web
  tool during this session. The source ledger therefore records only the URLs I
  could actually open and read.

## Source set actually read

I reopened every URL recorded in `research/frontier-29-batch-2.coverage.json`
in the web reader on Wednesday, September 2, 2026 before writing the harvest
rows.

### GT-18

1. Peter Webb, *A Course in Finite Group Representation Theory*:
   `https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf`
2. J. MacQuarrie, *Modular Representations of Profinite Groups*:
   `https://www.researchgate.net/publication/222396692_Modular_Representations_of_Profinite_Groups`

How they are used:

- Webb is the actual backbone for the page: projective covers, radicals,
  symmetric group algebras, relative projectivity, and the vertex/source
  package.
- MacQuarrie is the independent control for the relative-projectivity and
  vertex/source tail only. It is not a substitute for Webb's finite-dimensional
  algebra chapters.

### GT-17

1. Jordan Bell, *The profinite completion of the integers, the p-adic integers,
   and Prufer p-groups*:
   `https://jordanbell.info/LaTeX/mathematics/profinite/`
2. Brian Osserman, *Inverse limits and profinite groups*:
   `https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf`
3. A. Lubotzky, *Combinatorial group theory for pro-p groups*:
   `https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups`

How they are used:

- Bell is the direct source for the `Z_p` construction, the metric/topology
  identification, and the product decomposition of the profinite completion of
  the integers.
- Osserman is the independent course-note source for inverse limits, profinite
  groups, and the profinite background that the pro-`p` specialization uses.
- Lubotzky is the direct source for the pro-`p` Frattini, topological
  generation, and surjectivity-mod-Frattini tail.

## URL verification and source handling

All URLs recorded in the coverage file were opened successfully in the web
reader on Wednesday, September 2, 2026.

The shell runner here is network-restricted, so I used the same manual
`fetch_verified` pattern already present elsewhere in the repository:

- `at`
- `kind`
- `pages` when the opened source was a PDF and I could verify the count
- `verified_via: "web-open"`
- a short note explaining that the receipt is a manual web-open confirmation

I intentionally did **not** record inaccessible design sources just to mirror
the plan prose. The coverage file names only sources I actually opened. Where
the accessible source used a different public artifact than the design's print
citation, I rewrote the locator to the artifact actually read instead of
copying the stale locator.

## Validation checklist

I ran the scaffold-stage checks relevant to this batch:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-2.coverage.json --out /tmp/frontier-29-batch-2-url-liveness.json --recover --fail-on-dead
node tools/source-backing.mjs --coverage research/frontier-29-batch-2.coverage.json --liveness /tmp/frontier-29-batch-2-url-liveness.json --require-verified
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json
node tools/validate-plan.mjs /tmp/frontier-29-batch-2-spliced-plan.json
git diff --check
```

## Validation results

Passed on Wednesday, September 2, 2026:

- `coverage-checklist`: `2` pages, `53` harvested results, `0` errors, `0`
  warnings
- `content-policy --manifest-only`: `409` scoped items, `0` errors, `0`
  warnings
- `source-fetch-check`: `5/5` recorded sources carry fetch-verification stamps
- `validate-plan` on `/tmp/frontier-29-batch-2-spliced-plan.json`: passed; the
  printed warnings are the repository's existing global `redundant-prereq`
  warnings outside this batch, not batch-local plan failures
- `git diff --check`: passed with no output

Blocked in this shell environment:

- `url-sweep` failed with `0/5 live` because the shell runner could not resolve
  any external hostname at all. The exact failure on every URL was
  `curl: (6) Could not resolve host: ...`, and the sweep wrote
  `/tmp/frontier-29-batch-2-url-liveness.json`.
- `source-backing` then failed downstream with `28` `backing-lost` items,
  because the liveness artifact marked every external source as dead. Given the
  shared DNS-resolution failure across all five unrelated hosts, this is an
  environment blocker, not a source-selection judgment against this batch's
  coverage rows.

Under this runner, the batch is therefore structurally green but not fully gate
green: the shell-side liveness and source-backing checks cannot clear without
working outbound DNS.

## Reharvest-1 repair on Wednesday, September 2, 2026

This beta reharvest consumed the nine batch-2 work rows in
`research/frontier-29-reharvest-plan.json`.

### Dead source, recovery, and unresolved search

- MacQuarrie dead source as named by the merged liveness artifact and the
  reharvest plan:
  `https://www.researchgate.net/publication/222396692_Modular_Representations_of_Profinite_Groups`
- Verified same-document replacement now recorded in coverage:
  `https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf`

## Step-5 authoring

Authored page files:

- `library/group-theory/pro-p-groups-and-the-p-adic-integers.md`
- `library/group-theory/pro-p-groups-and-the-p-adic-integers-examples.md`
- `library/group-theory/modular-representations-and-projective-covers.md`
- `library/group-theory/modular-representations-and-projective-covers-examples.md`

Authored item ids for `pro-p-groups-and-the-p-adic-integers` / companion:

- `def-pro-p-group`
- `def-pro-p-completion-of-an-abstract-group`
- `thm-topological-characterisation-of-pro-p-groups`
- `def-p-adic-integers-as-compatible-residue-classes`
- `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group`
- `def-p-adic-metric-on-zp`
- `thm-inverse-limit-topology-equals-the-p-adic-metric-topology`
- `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete`
- `def-canonical-map-from-the-integers-to-zp`
- `thm-the-integers-map-injectively-and-densely-into-zp`
- `prop-additive-group-of-zp-is-torsion-free`
- `prop-zp-is-topologically-generated-by-one`
- `thm-zp-is-the-pro-p-completion-of-the-integers`
- `prop-profinite-completion-of-z-is-the-product-of-all-zp`
- `def-frattini-subgroup-of-a-profinite-group`
- `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open`
- `thm-frattini-subgroup-commutes-with-surjective-inverse-limits`
- `thm-frattini-formula-for-finitely-generated-pro-p-groups`
- `thm-topological-burnside-basis-theorem`
- `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini`
- `fs-zp-is-the-profinite-completion-of-z`
- `fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite`
- `fs-zp-is-cyclic-as-an-abstract-group`
- `thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups`
- `fs-every-profinite-group-is-pro-p-for-some-prime`
- `ex-compatible-p-adic-digit-sequences`
- `ex-convergence-of-partial-p-adic-expansions`
- `ex-a-cauchy-sequence-in-the-additive-p-adic-metric`
- `ex-pro-p-completion-of-a-finite-p-group`
- `ex-frattini-quotient-of-zp`
- `ex-topological-generation-in-zp-squared`
- `cex-an-abstractly-dense-proper-subgroup-of-zp`

Authored item ids for `modular-representations-and-projective-covers` / companion:

- `def-p-modular-system`
- `def-splitting-p-modular-system-for-a-finite-group`
- `def-og-lattice-and-reduction-modulo-the-maximal-ideal`
- `lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module`
- `rem-maschke-failure-in-defining-characteristic`
- `def-jacobson-radical-of-a-finite-dimensional-algebra`
- `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple`
- `thm-module-radical-is-jacobson-radical-times-the-module`
- `thm-nakayama-lemma-for-finite-dimensional-algebras`
- `lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent`
- `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra`
- `cor-finitely-generated-projective-kg-modules-are-injective-and-conversely`
- `def-module-radical-socle-head-and-loewy-series`
- `lem-radical-of-a-finite-length-module-is-superfluous`
- `def-essential-epimorphism-and-projective-cover`
- `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`
- `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules`
- `thm-krull-schmidt-for-finite-dimensional-kg-modules`
- `cor-the-regular-module-decomposes-into-projective-indecomposables`
- `thm-kg-is-local-iff-g-is-a-p-group`
- `cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p`
- `prop-normal-p-subgroups-act-trivially-on-simple-modules`
- `prop-restriction-and-induction-preserve-projectives`
- `def-relative-projectivity`
- `thm-higman-criterion-for-relative-projectivity`
- `def-vertex-and-source-of-an-indecomposable-module`
- `thm-green-vertex-source-existence-and-conjugacy`
- `cor-projective-indecomposable-modules-have-trivial-vertex`
- `fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order`
- `fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible`
- `fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes`
- `fs-a-vertex-is-a-vertex-of-the-cayley-graph`
- `fs-projective-and-injective-modules-coincide-over-every-ring`
- `ex-the-regular-module-of-cp-in-characteristic-p`
- `ex-the-augmentation-ideal-and-loewy-series-for-kcp`
- `ex-projective-cover-of-the-trivial-module-for-a-p-group`
- `ex-reducing-an-integral-lattice-for-s-three`
- `ex-relative-projectivity-detected-by-higmans-criterion`
- `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction`

Proof-contract output written:

- `research/frontier-29-batch-2.proof-contracts.json`

Provenance rationale:

- I kept statement provenance `literature-derived` for sourced structural items and `ai-altered` only where the batch uses a sourced example/false-statement pattern in the library's house phrasing.
- Proof provenance is `ai-generated` for straightforward local derivations and `ai-altered` where the sourced route had to be reorganized to close on already-authored library dependencies rather than quote a source proof verbatim.

Narrowed or dropped claims:

- None. I kept the planned item inventory intact.
- I did keep the GT-17 direct-residue convention and removed applied `\iota` notation to satisfy the batch policy's chosen coordinate style.
- I kept GT-18's projective-cover uniqueness at the planned "up to isomorphism over the target" strength and did not strengthen it to canonical equality.

Blockers:

- None on the authored batch bytes.

Checks actually run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-2 item files...` -> `56 checked, 0 failing — all clean`
- `node tools/rendercheck.mjs ...batch-2 item files...` -> `OK — 71 file(s) ... every math span parses ...`
- `node tools/proof-contract.mjs research/frontier-29-batch-2.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 56/56 item(s) checked`
- `node tools/content-policy.mjs research/frontier-29-batch-2.pages.json` -> `71 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> `OK`; only the standing repository-wide `redundant-prereq` warnings outside this batch were printed
- `git diff --check` -> passed with no output
- Provenance action:
  the dead ResearchGate URL is preserved as `original_url` in
  `research/frontier-29-batch-2.coverage.json`.

This is a true same-document URL recovery. I reopened the Manchester ePrints PDF,
verified the Abstract plus sections `4 Relative Projectivity`, `5 Vertices`, and
`6 Sources`, and rewrote the locator and contents rows against the PDF actually
read rather than the dead ResearchGate HTML route.

- Lubotzky dead source as named by the merged liveness artifact and the
  reharvest plan:
  `https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups`
- Same-document recovery checks actually attempted before considering a
  different treatment:
  `research/frontier-29-url-liveness.json` already records the dead
  ResearchGate URL with `status: 429` and `recovered: null`; a title/DOI search
  found the ScienceDirect article page
  `https://www.sciencedirect.com/science/article/pii/002240498290086X`, but in
  this session I did not obtain a readable full-text open from that route; Alex
  Lubotzky's current publications page lists the article but provides no PDF
  link; and the design's Wilkes lecture-notes fallback was still not directly
  readable from the Cambridge lecture-notes PDF in this session.
- Result:
  I did **not** record a replacement coverage row for the six GT-17 Frattini
  results backed only by the dead Lubotzky source, because I did not verify a
  same-document live copy or a different treatment carrying all six results.
  Those six results therefore remain in scope for later adjudication rather than
  being silently weakened or dropped.

### Affected results

- The MacQuarrie recovery closes the orphaned GT-18 rows for:
  `def-relative-projectivity`,
  `def-vertex-and-source-of-an-indecomposable-module`, and
  `cor-projective-indecomposable-modules-have-trivial-vertex`.
- The unresolved GT-17 rows are still:
  `def-frattini-subgroup-of-a-profinite-group`,
  `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open`,
  `thm-topological-burnside-basis-theorem`,
  `thm-frattini-subgroup-commutes-with-surjective-inverse-limits`,
  `thm-frattini-formula-for-finitely-generated-pro-p-groups`, and
  `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini`.

### Claim constraints changed

- None. No item id, dependency, page split, destination, or page-scope decision
  changed in this reharvest. The only substantive artifact edit is the verified
  MacQuarrie source recovery plus its rewritten locator and harvest rows.

### Reharvest validator checklist

```bash
node tools/coverage-checklist.mjs research/frontier-29-batch-2.coverage.json --require-destination
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json --stamp
node tools/source-backing.mjs --coverage research/frontier-29-batch-2.coverage.json --liveness research/frontier-29-url-liveness.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-2.coverage.json --out /tmp/frontier-29-batch-2-url-liveness.reharvest-1-b2.json --recover --fail-on-dead
node tools/source-backing.mjs --coverage research/frontier-29-batch-2.coverage.json --liveness /tmp/frontier-29-batch-2-url-liveness.reharvest-1-b2.json --require-verified
git diff --check
```

### Post-reharvest validator results

- `node tools/coverage-checklist.mjs research/frontier-29-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 53 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json --stamp`
  -> `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`

- `node tools/source-backing.mjs --coverage research/frontier-29-batch-2.coverage.json --liveness research/frontier-29-url-liveness.json`
  -> **still fails, but now only on the unresolved Lubotzky cluster**:
  `source-backing: 6 authored result(s) have no openable source left`

  The six remaining `backing-lost` rows are exactly:
  `def-frattini-subgroup-of-a-profinite-group`,
  `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open`,
  `thm-topological-burnside-basis-theorem`,
  `thm-frattini-subgroup-commutes-with-surjective-inverse-limits`,
  `thm-frattini-formula-for-finitely-generated-pro-p-groups`, and
  `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini`.

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-2.coverage.json --out /tmp/frontier-29-batch-2-url-liveness.reharvest-1-b2.json --recover --fail-on-dead`
  -> **still fails mechanically in this runner**:

  ```text
  url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-29-batch-2-url-liveness.reharvest-1-b2.json
  FAIL 0 https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf — curl: (6) Could not resolve host: eprints.maths.manchester.ac.uk
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://jordanbell.info/LaTeX/mathematics/profinite/ — curl: (6) Could not resolve host: jordanbell.info
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf — curl: (6) Could not resolve host: people.math.osu.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups — curl: (6) Could not resolve host: www.researchgate.net
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `node tools/source-backing.mjs --coverage research/frontier-29-batch-2.coverage.json --liveness /tmp/frontier-29-batch-2-url-liveness.reharvest-1-b2.json --require-verified`
  -> **fails mechanically after the fresh sweep**:
  `source-backing: 28 authored result(s) have no openable source left`

  This is not new mathematics-specific scout evidence beyond the six unresolved
  Lubotzky rows above. It is the expected consequence of the fresh sweep marking
  every external batch source dead because this runner could not resolve any
  external hostname at all.

- `git diff --check`
  -> passed with no output

## Owner intervention: Lubotzky source recovery

The reharvest agent could not resolve external hosts and therefore left the six
GT-17 Frattini results backed only by the gate-blocked ResearchGate page. The
owner monitor replaced that row with Gareth Wilkes's Cambridge lecture notes:
`https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf`. The original ResearchGate
URL remains on the source as `original_url`.

This is a different treatment of the same six results, read directly in Chapter
4, section 4.1, printed pp. 54-55. Definition 4.1.8 and Propositions 4.1.9-4.1.10
give the profinite Frattini definition, openness of maximal proper closed
subgroups, and generation modulo the Frattini subgroup. Propositions 4.1.12 and
4.1.13 give compatibility with surjective inverse limits and
`Phi(G) = closure([G,G]G^p)` for topologically finitely generated pro-`p`
groups. Corollary 4.1.14 gives the surjectivity criterion modulo Frattini.

No item id, claim, dependency, page split, destination, or disposition changed.

## Step-3 fix pass

- Finding id: `none issued` in `research/frontier-29-alpha-a-step3-scaffold-review.md`.
  Disposition: accepted the Alpha `sufficient` verdict for both batch-2 A pages, but applied a batch-local GT-17 coverage repair after directly rereading the live source URLs on Wednesday, September 2, 2026.
  Evidence: the Alpha review still marks both `modular-representations-and-projective-covers` and `pro-p-groups-and-the-p-adic-integers` as `sufficient`, and issued no numbered `B2-*` defect. On the current source bytes, however, the GT-17 harvest had drifted from the documents actually openable in the web reader: the Bell `profinite/` HTML exposes sections `3`, `4`, `5`, and `Theorem 2`, not the stale `Theorem 4.6` / `Theorem 4.8` / `Definition 4.10` / `Theorem 4.11` numbering previously recorded; the Osserman PDF currently opens as a 6-page document rather than the recorded 11-page count; the Wilkes lecture notes now provide the direct chapter-2 carriers for `def-p-adic-metric-on-zp`, `thm-inverse-limit-topology-equals-the-p-adic-metric-topology`, `thm-zp-is-the-pro-p-completion-of-the-integers`, `def-pro-p-group`, `def-pro-p-completion-of-an-abstract-group`, `prop-additive-group-of-zp-is-torsion-free`, and `prop-profinite-completion-of-z-is-the-product-of-all-zp`; the Lubotzky ResearchGate full-text is currently openable again and therefore restores an eligible primary treatment for the Frattini/Burnside tail; and the explicit digit-sequence deferral is now backed honestly by Jordan Bell's `padicfield/` note rather than by the stale Bell `Theorem 4.6` row.
  Changed scaffold record: `research/frontier-29-batch-2.coverage.json` and this notes file. No change was made to `research/frontier-29-batch-2.pages.json`.

- Scope-ledger pushback for this fix pass: `research/frontier-29-alpha-a-scope-decisions.json` still names the GT-17 deferred row as Bell `Theorem 4.6` on `https://jordanbell.info/LaTeX/mathematics/profinite/`. I did not edit that file because this dispatch authorizes only the batch-2 scaffold artifacts. The batch-local repair instead records the honest current source support in `research/frontier-29-batch-2.coverage.json`: the deferred B-page digit-expansion source now comes from `https://jordanbell.info/LaTeX/mathematics/padicfield/`, while the live Bell `profinite/` note is narrowed to the results it actually exposes.

- Source verification for this fix pass: I re-opened the five previously recorded batch-2 source URLs in the web reader on Wednesday, September 2, 2026, and added two newly read GT-17 sources after the reread: `https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups` and `https://jordanbell.info/LaTeX/mathematics/padicfield/`. No same-text archive recovery or re-sourcing was needed for the still-recorded Webb, MacQuarrie, Bell `profinite/`, Osserman, or Wilkes URLs on the current bytes.

- `node tools/coverage-checklist.mjs research/frontier-29-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 65 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json`
  -> `source-fetch-check: 7/7 source(s) fetch-verified`

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended with `OK`; only the repository's standing out-of-batch `redundant-prereq` advisories remain

- `git diff --check -- research/frontier-29-batch-2.coverage.json research/frontier-29-batch-2.notes.md`
  -> passed with no output
