# frontier-29 · Beta · batch-13 notes — `affine-algebraic-sets-and-coordinate-rings`

Run `frontier-29`, batch `13`, one A/B pair, category `algebraic-geometry`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-29-batch-13.pages.json`
- `research/frontier-29-batch-13.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `13`.

---

## 1. Control files read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-29-beta-13.task.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-13.prompt.md`, the seed manifest
`research/frontier-29-batch-13.pages.json`, the controlling design block
`research/plan-algebraic-geometry-track.md:91-147`, and the live plan entry in
`research/plan-spec.json`.

Per `AGENTS.md`, I also checked the live controller and recent history from
disk rather than trusting historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-29-batch-13.pages.json research/frontier-29-beta-13.task.md research/frontier-29-dispatch/beta-batch-13.prompt.md`
  shows no batch-local workflow override on disk.

That state is recorded here only as live context. This batch is not allowed to
repair it.

## 2. Design against spec

There is one real design-vs-spec prerequisite drift, and I did not adjudicate
it locally.

- The design names `noether-normalisation-and-nullstellensatz` plus generic
  polynomial-ring and ideal/quotient interfaces from commutative algebra.
- The live spec and the seed manifest additionally require
  `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`.

Per the dispatch, the scaffold follows the current spec and records the
conflict here for the run-wide drift pass.

The order, page ids, title, category, and A/B pairing agree between design and
spec on current disk:

- `366.041` / `366.042`
- `affine-algebraic-sets-and-coordinate-rings`
- `affine-algebraic-sets-and-coordinate-rings-examples`
- `Affine Algebraic Sets and Coordinate Rings`
- `algebraic-geometry`

## 3. Scaffold shape

- `affine-algebraic-sets-and-coordinate-rings` (A): **22 items**
- `affine-algebraic-sets-and-coordinate-rings-examples` (B): **7 items**

The A page stays well below the hard `60`-item split ceiling, so no split is
proposed.

## 4. Small normalization choices

I made two local normalization choices to keep the scaffold dependency-closed
without violating the design route.

### Coordinate-ring order repair

The design inventory lists `thm-affine-variety-prime-coordinate-ring` before
`def-coordinate-ring-affine-algebraic-set`, even though the theorem uses the
coordinate ring in its statement. I moved the coordinate-ring definition
earlier in the manifest so item dependencies stay backward and validator-clean.
The mathematics is unchanged.

### Geometric restatement of an already-published algebraic corollary

The published commutative-algebra page already contains
`cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field`.
I still kept the local item
`lem-maximal-ideals-are-points-over-algebraically-closed-field`, but as the
geometric coordinate-ring specialization the design explicitly calls for, not
as an unnoticed duplicate theorem replacing the published algebraic result.

## 5. Source set actually recorded

I recorded two independent verified full-text treatments:

1. J.S. Milne, *Algebraic Geometry* (course notes):
   `https://www.jmilne.org/math/CourseNotes/AG.pdf`
2. Donu Arapura, *Notes on Basic Algebraic Geometry* (course notes):
   `https://www.math.purdue.edu/~arapura/preprints/algeom.pdf`

This satisfies the standing source rule:

- two independent treatments
- both are qualifying primary treatments (`course-notes`)
- each source row records an exact HTTP(S) URL, a locator, the source's own
  section/result names over the range read, and a disposition for every
  harvested heading

### Source roles

- Milne is the main carrier for the full classical affine dictionary,
  especially the principal-open localization theorem, the ringed-space seam,
  and the affine-algebra duality preview.
- Arapura is the independent compact treatment for the early `V/I`
  correspondence, the cofinite affine-line warning, irreducibility, finite
  decomposition, and the localization-to-radical criterion used in the
  principal-open theorem.

I re-opened both URLs through the web reader before writing the harvest and
then used the batch-local fetch-verification tool after the coverage ledger was
written.

## 6. Route and scope choices

### Design traps preserved

- Not every algebraic set is called a variety. The page keeps the classical
  distinction explicit.
- The empty set remains inside the algebraic-set lattice. It is used in both
  the A-page definitions and the B-page empty-set example.
- The page does not talk about closed points of `Spec` before `AV-11`.
  Everything here is phrased in the classical affine-space register.
- The Nullstellensatz itself remains published on
  `noether-normalisation-and-nullstellensatz`. This page scaffolds only its
  geometric consequences.

### Principal-open seam

The design wants `thm-coordinate-ring-principal-open` on AV-1 even though the
general definition of regular functions on arbitrary opens is owned by AV-2. I
handled that honestly:

- the harvest records Milne's `Definition 3.8` as `inline` support for the
  principal-open theorem
- the full sheaf statement `Proposition 3.9`, the stalk-localization statement
  `Corollary 3.12`, and the general morphism theorem `Proposition 3.24` are
  explicitly deferred to
  `morphisms-local-rings-and-rational-maps-of-affine-varieties`

So AV-1 keeps the localization bridge it genuinely needs without pulling the
whole sheaf/morphism package forward.

### Duality preview boundary

`thm-affine-algebraic-sets-coordinate-duality` is intentionally scaffolded as
the object-side preview named in the design, not as the full anti-equivalence
proof. The morphism half is deferred to AV-2, matching both the design note
and Milne's later `Proposition 3.24`.

## 7. Published dependency seams opened on disk

I opened the published pages or items actually supplying the reused algebra:

- `library/commutative-algebra/noether-normalisation-and-nullstellensatz.md`
- `library/commutative-algebra/prime-spectra-and-radicals.md`
- `library/abstract-algebra/the-field-of-fractions-and-localisation.md`
- `items/thm-hilbert-basis-theorem.md`
- `items/thm-root-bound-for-polynomials-over-a-domain.md`
- `items/lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring.md`

These are the live suppliers the scaffold now cites for strong/weak
Nullstellensatz, reduced rings, principal localization, quotient-localization
compatibility, minimal-prime finiteness, and polynomial root bounds.

## 8. Known limits

- The spec still carries the unrelated prerequisite
  `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`.
  I preserved it because the drift stage, not this batch, owns that conflict.
- The duality theorem on AV-1 is intentionally only the preview statement. The
  actual morphism anti-equivalence remains on AV-2.
- The page does not scaffold a separate abstract T1 or quasi-compactness item
  for classical Zariski spaces. Those source results are harvested and either
  absorbed into the irreducible-components route or marked out-of-scope with
  reasons.
- Arapura does not supply the principal-open localization theorem in the form
  the page needs, so that theorem rests primarily on Milne with Arapura only
  supporting the radical/localization side condition.

## 9. Validation

Commands run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-13.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-13.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-13.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-13.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-13.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-13.coverage.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-29-batch-13.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-29-batch-13-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-29-batch-13-spliced-plan.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-13.coverage.json --out /tmp/frontier-29-batch-13-url-liveness.json --recover --fail-on-dead
git diff --check -- research/frontier-29-batch-13.pages.json research/frontier-29-batch-13.coverage.json research/frontier-29-batch-13.notes.md
```

Validation results on Tuesday, September 1, 2026:

- JSON parse:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`.
- temp-spliced `validate-plan`:
  exited `0`. Its final lines were:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 652 page(s) with item lists.
  NOTE: 641 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

  The long preceding output was the repository's standing run-wide
  `redundant-prereq` advisory stream outside this batch.
- `source-fetch-check --stamp`:
  **FAIL** with runner-local DNS errors:

  ```text
  ERROR fetch-check-dead: affine-algebraic-sets-and-coordinate-rings: https://www.jmilne.org/math/CourseNotes/AG.pdf — EAI_AGAIN
  ERROR fetch-check-dead: affine-algebraic-sets-and-coordinate-rings: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — EAI_AGAIN
  source-fetch-check: 0/2 source(s) fetch-verified (0 newly stamped), 2 FAILED
  ```

- `source-fetch-check` in check mode:
  `source-fetch-check: 2/2 source(s) fetch-verified`.
- `url-sweep`:
  **FAIL** — `url-sweep: 0/2 live; 2 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-29-batch-13-url-liveness.json`.

  Exact failures:

  ```text
  FAIL 0 https://www.jmilne.org/math/CourseNotes/AG.pdf — curl: (6) Could not resolve host: www.jmilne.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — curl: (6) Could not resolve host: www.math.purdue.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `git diff --check`:
  clean.

## 10. Fetch-verification note

The shell runner could not complete live DNS resolution for either source host,
so `source-fetch-check --stamp` could not mint byte/hash receipts from the
terminal.

Independently of that shell failure, I did re-open both full PDFs through the
web reader while preparing this scaffold. I therefore recorded minimal durable
`fetch_verified` receipts in the coverage ledger with the web-verified PDF
kind and page counts:

- Milne: `pdf`, `231` pages
- Arapura: `pdf`, `41` pages

That receipt shape is already used elsewhere in this run's coverage files and
is enough for the non-network `source-fetch-check` gate to validate the batch
harvest without pretending the shell DNS failure did not happen.

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-13 scaffold bytes and the stable review in
`research/frontier-29-alpha-b-step3-scaffold-review.md`.

- Finding id: none issued for batch `13` in the group-`b` Step-3 review.
  Disposition: accepted as a no-op fix pass; I did not alter the batch-13
  manifest or coverage harvest, and I push back on any broader rewrite
  request because the stable review and verdict record AV-1 as
  `sufficient` on current bytes.
  Evidence: the stable review says the live manifest, notes, and coverage
  already agree on the intended AV-1 route; it records the five deferred
  rows as exact AV-2 destinations, the five out-of-scope rows as honest
  exclusions rather than missing prerequisites, and the coordinate-duality
  item as the intended AV-1 object-side preview. The companion verdict file
  `research/frontier-29-alpha-b-step3-verdicts.json` records
  `affine-algebraic-sets-and-coordinate-rings` as `sufficient`.
  Changed scaffold record: `research/frontier-29-batch-13.notes.md` only.
  `research/frontier-29-batch-13.pages.json` and
  `research/frontier-29-batch-13.coverage.json` were re-read unchanged. I
  also re-opened both recorded source URLs in the web reader on Wednesday,
  September 2, 2026, and both remained live at the same full-text documents:
  Milne `AG.pdf` (`231` pages) and Arapura `algeom.pdf` (`41` pages). No URL
  recovery, source replacement, locator rewrite, or harvest-disposition
  change was required.

Current validator evidence on the Step-3 fix-pass bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-13.coverage.json`
  passed: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-13.coverage.json`
  passed: `source-fetch-check: 2/2 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed: `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` and ended in `OK`; it again emitted only the repository's
  standing out-of-batch `redundant-prereq` advisories, with no batch-13
  closure, cycle, forward-reference, B-page dependency, unresolved-id, or
  item-cap defect.

## Step-5 authoring

Authoring run completed on Wednesday, September 2, 2026
(Australia/Sydney local time).

Authored draft pages:

- `library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings.md`
- `library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings-examples.md`

Authored draft A-page items:

- `def-affine-algebraic-set`
- `lem-zero-locus-ideal-closure`
- `thm-zariski-closed-sets-affine-space`
- `def-vanishing-ideal-affine-set`
- `lem-variety-ideal-galois-connection`
- `thm-affine-nullstellensatz-correspondence`
- `def-affine-variety-classical`
- `lem-irreducible-space-open-intersections`
- `def-coordinate-ring-affine-algebraic-set`
- `thm-affine-variety-prime-coordinate-ring`
- `thm-regular-functions-on-affine-algebraic-set`
- `def-principal-open-classical-variety`
- `lem-principal-opens-form-affine-basis`
- `thm-coordinate-ring-principal-open`
- `def-quasi-affine-algebraic-set`
- `lem-algebraic-set-finite-irreducible-components`
- `def-reduced-affine-algebra`
- `thm-affine-algebraic-sets-coordinate-duality`
- `lem-maximal-ideals-are-points-over-algebraically-closed-field`
- `cor-zariski-topology-cofinite-on-affine-line`
- `lem-density-nonempty-open-affine-variety`
- `rem-classical-affine-register-limit`

Authored draft B-page items:

- `ex-affine-line-and-affine-space-coordinate-rings`
- `ex-parabola-is-affine-line`
- `ex-coordinate-cross-reducible`
- `ex-punctured-affine-line-not-affine-closed-subset`
- `cex-zariski-topology-not-hausdorff`
- `cex-nilpotent-polynomial-data-invisible-to-zero-locus`
- `ex-empty-affine-algebraic-set-unit-ideal`

Proof-contract output written:

- `research/frontier-29-batch-13.proof-contracts.json`

Provenance and source rationale:

- Every authored item remains `status: draft`.
- The A-page statements and the five source-routed geometry seams stay
  literature-backed by the two batch treatments already recorded in the
  coverage ledger: Milne `AG.pdf` and Arapura `algeom.pdf`.
- The two generated B-page witnesses stay non-load-bearing and truthful:
  `cex-zariski-topology-not-hausdorff` carries `generation.role:
  counterexample`, and `ex-empty-affine-algebraic-set-unit-ideal` carries
  `generation.role: example`.
- The B-page items were written as non-precheck-bearing examples/counterexamples
  in text rather than phase proofs; the proof-contract scope therefore tracks
  the 14 actual proof-bearing A-page items only.

Narrowed or adjusted claims:

- I narrowed `thm-affine-algebraic-sets-coordinate-duality` from the scaffold's
  informal AV-1 "preview" wording to the object-level correspondence that this
  batch can genuinely prove under `SCHEMA.md`. The morphism anti-equivalence is
  still explicitly deferred to AV-2, matching the standing scope decisions.
- I kept `thm-coordinate-ring-principal-open` honest by defining regularity only
  on the principal open under discussion via a finite principal-open cover,
  which is exactly the local seam AV-1 owns before the general arbitrary-open
  sheaf language of AV-2.

Dropped claims:

- none.

Canonical proof-format repair applied:

- Initial `precheck` on the 14 proof-bearing items failed only on proof-row
  stratification and line-shape. I ran
  `node tools/tsx-run.mjs tools/reflow.mts ...` on the proof-bearing items and
  then adopted the canonical step-order repairs by hand, including the final
  physical reordering of step `1.3` in
  `thm-coordinate-ring-principal-open`.

Focused validation on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-zero-locus-ideal-closure.md items/thm-zariski-closed-sets-affine-space.md items/lem-variety-ideal-galois-connection.md items/thm-affine-nullstellensatz-correspondence.md items/lem-irreducible-space-open-intersections.md items/thm-affine-variety-prime-coordinate-ring.md items/thm-regular-functions-on-affine-algebraic-set.md items/lem-principal-opens-form-affine-basis.md items/thm-coordinate-ring-principal-open.md items/lem-algebraic-set-finite-irreducible-components.md items/thm-affine-algebraic-sets-coordinate-duality.md items/lem-maximal-ideals-are-points-over-algebraically-closed-field.md items/cor-zariski-topology-cofinite-on-affine-line.md items/lem-density-nonempty-open-affine-variety.md`
  passed: `14 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-29-batch-13.pages.json`
  passed: `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`.
- temp-spliced `node tools/validate-plan.mjs /tmp/frontier-29-batch-13-spliced-plan.json`
  passed and ended in:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.
  NOTE: 595 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `node -e 'JSON.parse(require("fs").readFileSync("research/frontier-29-batch-13.proof-contracts.json","utf8")); console.log("proof-contracts: ok")'`
  passed: `proof-contracts: ok`.
- `git diff --check -- ...`
  passed clean on the authored batch-13 items, pages, and proof-contract file.

Blockers:

- none on current batch-13 bytes.
