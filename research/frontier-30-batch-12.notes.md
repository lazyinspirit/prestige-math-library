# frontier-30 · Beta · batch-12 notes — `morphisms-local-rings-and-rational-maps-of-affine-varieties`

Run `frontier-30`, batch `12`, one A/B pair, category `algebraic-geometry`.
Author: Beta. Dispatch date: Friday, September 4, 2026. The source URLs were
re-opened in the web reader on Saturday, September 5, 2026 in
Australia/Sydney local time.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-12.pages.json`
- `research/frontier-30-batch-12.coverage.json`
- this file

Per the batch brief, I edited only those three scaffold artifacts.

---

## 1. Control files and live-run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-30-beta-12.task.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-12.prompt.md`, the seed manifest
`research/frontier-30-batch-12.pages.json`, the controlling design block
`research/plan-algebraic-geometry-track.md:152-258`, the live plan entry in
`research/plan-spec.json`, the published prerequisite pages
`library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings.md`,
`library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings-examples.md`,
and the published commutative-algebra interface page
`library/abstract-algebra/the-field-of-fractions-and-localisation.md`.

I also checked the live controller from disk with:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`

On current disk, that reports live run `frontier-23` in stage `5-author`.
That state is recorded here only as context. This batch is not allowed to
repair `.autopilot/`.

## 2. Design against spec

There is real design-vs-spec prerequisite drift, and I did not adjudicate it
locally.

- The design text says this pair requires `AV-1` plus the localization and
  fraction-field interfaces from commutative algebra.
- The live spec and the seed manifest name only
  `affine-algebraic-sets-and-coordinate-rings-examples`.

Per the dispatch, I followed the spec and recorded the conflict here for the
run-wide drift machinery.

The order, ids, category, and A/B pairing agree on current disk:

- `366.043` / `366.044`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`
- `algebraic-geometry`

## 3. Scaffold shape

- `morphisms-local-rings-and-rational-maps-of-affine-varieties` (A): **23 items**
- `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` (B): **7 items**

The A page stays far below the hard `60`-item split ceiling, so no split is
proposed.

## 4. Closure repairs and normalization choices

### Graph row moved exactly where the design allows

The design note under AV-2 explicitly says the graph item is held until AV-4
supplies the classical product, and that the builder may move the row to AV-4
without changing its id. I therefore did **not** scaffold
`lem-graph-of-affine-variety-morphism-is-closed` on this page, because keeping
it here would force a forward dependency on
`products-segre-and-veronese-embeddings-and-grassmannians`.

Instead:

- the A-page manifest remains backward-clean
- the coverage harvest records the graph propositions from Arapura as
  `deferred` to `products-segre-and-veronese-embeddings-and-grassmannians`
- the notes record that this is a design-authorized move, not a dropped result

### Added the missing affine-open definition

Removing the graph row would have dropped the A-page count to `22`, but more
importantly the current route would still have used the phrase "affine open"
without any local item defining it. The Artin and Milne function-field route
uses affine opens essentially, so I added
`def-affine-open-subset-classical-variety`.

This is not padding. It closes a real missing term that the function-field and
rational-map package depends on.

### Reordered the global-regular-functions theorem ahead of the morphism theorem

The design table lists the affine morphism anti-equivalence early and the
global-regular-functions theorem last. On the actual dependency graph, the
morphism theorem needs the global-regular-functions result to land pullbacks in
the coordinate ring. I therefore placed
`thm-global-regular-functions-affine-variety-coordinate-ring` before
`thm-affine-morphisms-coordinate-ring-anti-equivalence` in the manifest.

That is the same kind of dependency-order normalization already needed on AV-1.

### Kept the rational-map package honestly affine

The page title is about affine varieties, and the abstract sheaf/ringed-space
machinery later in the track has not yet been built. So the current scaffold
keeps the rational-map, dominant-map, local-ring, and birational package on
**irreducible classical affine varieties**.

This is the honest current scope:

- no closed points of `Spec`
- no arbitrary nonseparated targets
- no projective-space examples that would pull AV-3 forward

### Normalized two B-page examples to the current prerequisite closure

The design's example list included projective-space witnesses. Those would have
forced future dependencies into this pair, so I normalized them as follows:

- `cex-rational-map-with-indeterminacy` now uses the affine-plane rational map
  `(x,y) mapsto y/x`, undefined along `x = 0`
- `ex-rational-parametrization-circle-conic` keeps the intended explicit
  birational-parameterization role, but uses the affine circle with the honest
  hypothesis `char(k) != 2`

### Geometric specialization of an existing abstract-algebra example

`ex-local-ring-affine-line-at-origin` is intentionally the geometric
specialization of the published abstract-algebra computation of `k[t]_(t)`.
I did **not** make it depend on that published B-page item, because B pages must
remain leaves; instead it depends only on the new A-page localization theorem.

## 5. Sources actually recorded

I recorded three verified full-text treatments:

1. J.S. Milne, *Algebraic Geometry*:
   `https://www.jmilne.org/math/CourseNotes/AG.pdf`
2. Donu Arapura, *Notes on Basic Algebraic Geometry*:
   `https://www.math.purdue.edu/~arapura/preprints/algeom.pdf`
3. Michael Artin, *Notes for a Course in Algebraic Geometry* (preliminary draft):
   `https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf`

This satisfies the standing source rule:

- at least two independent treatments
- all three are full course-note treatments with harvestable tables of contents
- the coverage file records exact URLs, exact locators, source-side headings,
  and a disposition for every harvested heading/result

### Source-role notes

- **Milne** is the main carrier for the concrete sheaf statement, the local
  ring as localization, the affine morphism anti-equivalence, dense-open
  uniqueness, dominant maps, rational maps, and birational equivalence.
- **Arapura** is the independent second treatment for affine morphisms,
  rational functions, rational maps, and the graph seam now deferred to AV-4.
- **Artin** supplies the missing affine-open definition, the open-localization
  viewpoint, the function-field and rational-function-at-a-point language, and
  a second treatment of the local ring at a point.

### Design-source normalization notes

Two source-side mismatches mattered and are recorded here.

1. On the current Arapura PDF actually read from
   `https://www.math.purdue.edu/~arapura/preprints/algeom.pdf`, Chapter `1.7`
   is **`Nilpotent matrices`**, not a morphism/local-ring section. I therefore
   harvested `§1.5`, `§1.6`, and `§3.1-§3.3`, which are the pages that
   genuinely carry the AV-2 mathematics.

2. The design names Artin by book chapter and page, but the accessible full text
   I could actually fetch and read in the web reader was the public MIT course
   notes draft at
   `https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf`. I used that
   as the verified Artin treatment and did not pretend to have read inaccessible
   AMS-book pages.

## 6. Validator results

Commands run after the scaffold edit:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-12.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-batch-12.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-12.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-12.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-12.coverage.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-12.coverage.json --stamp
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-12.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-12-spliced-plan.json", JSON.stringify(plan, null, 2)+"\n");'
node tools/validate-plan.mjs /tmp/frontier-30-batch-12-spliced-plan.json
node tools/url-sweep.mjs --coverage research/frontier-30-batch-12.coverage.json --out /tmp/frontier-30-batch-12-url-liveness.json --recover --fail-on-dead
git diff --check -- research/frontier-30-batch-12.pages.json research/frontier-30-batch-12.coverage.json research/frontier-30-batch-12.notes.md
```

Validation results:

- JSON parse:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 30 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`:
  `source-fetch-check: 3/3 source(s) fetch-verified`.
- `source-fetch-check --stamp`:
  `source-fetch-check: 3/3 source(s) fetch-verified (0 newly stamped)`.
- temp-spliced `validate-plan`:
  exited `0`. Its final lines were:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.
  NOTE: 593 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

  The long preceding output was the repository's standing run-wide
  `redundant-prereq` advisory stream outside this batch.
- `url-sweep`:
  **FAIL** — `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-12-url-liveness.json`.

  Exact shell-side failures:

  ```text
  FAIL 0 https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf — curl: (6) Could not resolve host: math.mit.edu
  FAIL 0 https://www.jmilne.org/math/CourseNotes/AG.pdf — curl: (6) Could not resolve host: www.jmilne.org
  FAIL 0 https://www.math.purdue.edu/~arapura/preprints/algeom.pdf — curl: (6) Could not resolve host: www.math.purdue.edu
  ```

- `git diff --check`:
  clean.

## 7. URL-liveness note

The `url-sweep` failures are runner-local DNS failures, not evidence that the
three recorded URLs are actually dead:

- all three full texts were successfully re-opened in the web reader on
  Saturday, September 5, 2026 in Australia/Sydney local time
- the coverage file therefore carries honest `fetch_verified` receipts for the
  exact URLs actually read
- I did **not** replace live, design-appropriate URLs merely because this shell
  runner could not resolve their hosts during `curl`

If a later batch needs shell-side byte stamps, it will have to run on a worker
with live DNS. The current scaffold is source-verified and validator-clean on
the contractually relevant gates.

## Step-3 fix pass

The stable batch-12 finding ids summarized in
`research/frontier-30-alpha-b-step3-scaffold-review.md` are the eleven
batch-12 `decline_id` rows in
`research/frontier-30-alpha-b-scope-decisions.json`, which the review marks
as `stands`. No further scaffold repair was needed before authoring.

## Step-5 authoring

Authored on Saturday, September 5, 2026 (Australia/Sydney local time):

- A-page items:
  `def-regular-function-classical-variety`,
  `lem-regular-functions-form-sheaf-classical`,
  `thm-global-regular-functions-affine-variety-coordinate-ring`,
  `def-morphism-classical-varieties`,
  `def-regular-map-image-and-fibre-classical`,
  `thm-affine-morphisms-coordinate-ring-anti-equivalence`,
  `cor-affine-algebraic-set-coordinate-duality-complete`,
  `lem-morphism-equality-on-dense-open`,
  `def-germ-and-local-ring-classical-variety`,
  `thm-local-ring-affine-variety-localization`,
  `def-residue-field-classical-point`,
  `def-affine-open-subset-classical-variety`,
  `def-function-field-variety`,
  `thm-function-field-independent-affine-open`,
  `def-rational-function-regular-at-point`,
  `def-rational-map-varieties`,
  `lem-rational-map-equivalence-transitive`,
  `def-domain-of-definition-rational-map`,
  `def-dominant-morphism-and-rational-map`,
  `lem-dominant-map-pullback-function-fields`,
  `thm-rational-maps-to-affine-variety-function-field`,
  `def-birational-equivalence-varieties`,
  `thm-birational-equivalence-function-fields`
- B-page items:
  `ex-polynomial-map-coordinate-pullback`,
  `ex-hyperbola-is-multiplicative-group-variety`,
  `ex-rational-parametrization-circle-conic`,
  `cex-rational-map-with-indeterminacy`,
  `cex-birational-does-not-imply-isomorphic`,
  `ex-local-ring-affine-line-at-origin`,
  `cex-regular-bijection-not-isomorphism-cusp`
- Page files:
  `library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties.md`
  and
  `library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties-examples.md`
- Proof-contract report:
  `research/frontier-30-batch-12.proof-contracts.json`

Provenance rationale:

- The theorem/lemma/corollary statements and the standard local-ring,
  dominant-map, and birational dictionary stay literature-derived, with
  proof provenance marked `ai-altered` where I rewrote the proofs into the
  repository's phase format.
- `def-affine-open-subset-classical-variety`,
  `def-rational-map-varieties`, and
  `def-domain-of-definition-rational-map` carry `statement: ai-altered`
  because this page stays in the classical affine register and phrases those
  interfaces in the narrower batch-local form actually proved here.
- `ex-polynomial-map-coordinate-pullback` is the only
  `statement: ai-generated` item in this batch and carries the required
  `generation.role: example`.
- The B-page items were written as direct example/counterexample prose rather
  than phase-format proofs, so the proof-contract scope truthfully covers the
  11 proof-bearing A-page items only.

Narrowed or dropped claims:

- Narrowed locally, not dropped:
  `def-affine-open-subset-classical-variety` explicitly fixes "affine open" to
  principal opens on this page. This keeps the function-field comparison honest
  without pulling later scheme-theoretic generality into AV-2.
- No batch-manifest item id was dropped.
- The graph row remains deferred exactly as recorded in Step 3 and was not
  reintroduced during authoring.

Checks run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-12 proof-bearing items...`
  -> `11 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-30-batch-12.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 11/11 item(s) checked`
- `node tools/content-policy.mjs research/frontier-30-batch-12.pages.json`
  -> `content-policy: 30 scoped item(s), 0 error(s), 0 warning(s)`
- spliced-plan `validate-plan`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `git diff --check -- items library/algebraic-geometry research/frontier-30-batch-12.proof-contracts.json research/frontier-30-batch-12.notes.md`
  -> clean

Blockers:

- none
current. I re-checked those rows against the current batch-12 manifest,
coverage ledger, design block, and validator state before deciding whether any
local scaffold repair was still required.

No batch-12 manifest or coverage edit was required on Saturday, September 5,
2026. Every stable finding still stands on current bytes, so the only changed
scaffold record in this fix pass is this notes receipt.

- `1cb285b8a7ea6c7985c6c02931842bb30136414c81921aa80f2f4450c59f4025` — disposition: `stands`. Evidence: Arapura `Proposition 3.3.1` is still deferred in `research/frontier-30-batch-12.coverage.json` to `products-segre-and-veronese-embeddings-and-grassmannians`, and the AV-2 design still authorizes holding the graph theorem until AV-4 supplies products. Changed scaffold record: none.
- `2054ccae120efee3547ce96b087a45905ef6fd1e19a3d421ef5fb0620964779c` — disposition: `stands`. Evidence: Milne `Example 3.29(a)` is still exact companion-page material, and the current B-page scaffold still carries the cusp witness as `cex-regular-bijection-not-isomorphism-cusp`. Changed scaffold record: none.
- `27522063cec84050550325cd947ae523b4fb13057eccc90cf04b6dbb7f811641` — disposition: `stands`. Evidence: Arapura `Lemma 3.1.2` is still a quasi-projective affine-cover statement beyond the retained affine-only AV-2 route, and the deferred destination `projective-algebraic-sets-projective-morphisms-and-cones` remains later in plan order. Changed scaffold record: none.
- `3a0273c7df0800d4d9d1208253ffb7d604cf3bbfd9606e81d418f7db845addce` — disposition: `stands`. Evidence: Artin `Example 2.5.7` is still the same cusp parametrization already represented on the companion B page, so the A-page harvest correctly leaves it deferred rather than duplicating that witness. Changed scaffold record: none.
- `3a942cf67be66b8149e17fc1ed23c281ff7b57469b71de1e1dfa073d9e7af69c` — disposition: `stands`. Evidence: Arapura `Example 3.1.1` is still the projective function-field computation `k(P^n)=k(A^n)`, while the retained A-page scaffold stops at the affine function-field package before AV-3. Changed scaffold record: none.
- `5e353fbbaf838e7f1ede5bf1c924ba776de036bf8f370cc2cac686703233658a` — disposition: `stands`. Evidence: Milne `Definition 5.7` is still broader separatedness machinery for general prevarieties, and the live AV-2 scaffold still uses only the dense-open uniqueness consequence needed for affine targets. Changed scaffold record: none.
- `68e41ec9729990e31568327a97c5b28d07836457c840c67bd817e682a61026da` — disposition: `stands`. Evidence: Milne `Example 3.30` remains a positive-characteristic Frobenius pathology outside the retained classical affine morphism/local-ring/rational-map dictionary. Changed scaffold record: none.
- `7d5f5d6566d4703bc7e8e8b7f916c3524f805c8dac6faf4bf6af530fa99528ca` — disposition: `stands`. Evidence: Arapura `Exercise 3.3.2` is still the closed-graph converse that depends on the deferred graph seam; the current pair already has the intended indeterminacy and cusp counterexamples without adding that extra branch. Changed scaffold record: none.
- `a8d903dfac2528a69fbfb8ff7d109e7c3e35b2c6a538eb83fa72b6ca44f21357` — disposition: `stands`. Evidence: Milne `Example 5.9` remains the doubled-origin nonseparated warning, and the current page still deliberately avoids asserting maximal domains for arbitrary nonseparated targets. Changed scaffold record: none.
- `e99a4c8502b56dbd3fa029e96a3c8f099eef2924e61b428aecf11790f2e3e889` — disposition: `stands`. Evidence: Arapura `Lemma 1.5.4` is still already covered by the prerequisite AV-1 domain criterion for coordinate rings, so re-minting it on AV-2 would duplicate an earlier published dependency. Changed scaffold record: none.
- `f633eb8ff29357309e659a43969dfd97ec06ecb2b54a67225ba3c6e31ceadced` — disposition: `stands`. Evidence: Arapura `1.5 Affine Varieties` is still prerequisite AV-1 material, not a missing AV-2 item; the current page reuses that context without re-scaffolding the basic definition. Changed scaffold record: none.

Validator rerun on Saturday, September 5, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-12.coverage.json` -> `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-12.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with the standing repository-wide `redundant-prereq` advisories, ending in the standard `OK` line for `698` page(s) with item lists.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-12-spliced-plan.json` -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.`
