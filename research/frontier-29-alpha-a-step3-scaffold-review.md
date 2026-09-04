# frontier-29 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1`, `2`, and `10`: GT-9, GT-17, GT-18, GT-21, and
MA-16. I read the current
`research/frontier-29-batch-{1,2,10}.{pages.json,coverage.json,notes.md}`
artifacts against the controlling design sections in
`research/plan-group-theory-track.md`,
`research/plan-category-theory-track.md`, and the live
`research/plan-spec.json`.

All five owned A pages are **sufficient** for authoring on the current
Wednesday, September 2, 2026 bytes. No in-scope scaffold repair was required.
`node tools/scope-decisions.mjs refresh --run frontier-29 --group a` produced
12 pending decline rows; they now resolve in
`research/frontier-29-alpha-a-scope-decisions.json` as **12** `stands` rows
and **0** `owner-decision` rows.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `group-extensions-complements-and-schur-zassenhaus` | 1 | 23 | 6 | **sufficient** | published split-extension seam is reused honestly |
| `crossed-homomorphisms-complements-and-first-cohomology` | 1 | 22 | 6 | **sufficient** | degree-one bridge uses acceptable canonical carriers |
| `modular-representations-and-projective-covers` | 2 | 33 | 6 | **sufficient** | Cartan data is deferred exactly to GT-19 |
| `pro-p-groups-and-the-p-adic-integers` | 2 | 25 | 7 | **sufficient** | digit-expansion material is deferred exactly to the B page |
| `duality-and-rigidity-in-monoidal-categories` | 10 | 37 | 7 | **sufficient** | MA-16 ceiling on traced/tensor-category enrichments is enforced |

## Page review

### `group-extensions-complements-and-schur-zassenhaus`

GT-9 is sufficient on the current bytes. The page keeps the intended route
through extension equivalence, complements/retractions, outer actions,
Schur-Zassenhaus, and complete kernels, while reusing already-published
split-extension and nonsplitting witnesses instead of silently reminting
duplicates. The narrow live `requires`
`small-cancellation-and-dehn-algorithms-examples` is a real design/spec
mismatch, but it is not an authoring blocker: the current transitive closure
already reaches `semidirect-products-and-automorphism-groups` and
`sylow-theorems-and-nilpotent-groups`, and the focused closure audit found no
missing prerequisite homes or out-of-closure deps.

The source form is sufficient: Milne plus Craven provide the open course-note
backbone, and the Eilenberg-Mac Lane paper cleanly bounds the
`proved_here: false` obstruction remark. The pair's examples page is also
closure-clean on current bytes despite the deliberate reuse of older published
split/nonsplit witnesses.

**Verdict:** sufficient.

### `crossed-homomorphisms-complements-and-first-cohomology`

GT-21 is sufficient. The current A page has the abelian crossed-homomorphism
route, the complement graph dictionary, the nonabelian pointed-set version, and
the degree-one inflation-restriction exact sequence. Its design/spec mismatch on
direct `requires` is recorded in the notes but not blocking: the live closure of
`grothendieck-spectral-sequences-and-computations-examples` already reaches
`group-cohomology-as-a-derived-functor`.

The subtle point here is the canonical coverage. The current coverage uses
canonical carriers for the inhomogeneous-one-cocycle comparison and the
nonabelian `H^1` packaging, but that is acceptable on the current bytes because
the harvested Craven and Columbia rows already supply the explicit cocycle,
complement, and inflation-restriction formulas from which those page-local
bridge statements are to be authored directly. No missing result or source gap
remains.

**Verdict:** sufficient.

### `modular-representations-and-projective-covers`

GT-18 is sufficient. The scaffold keeps the designed route through
`p`-modular systems, OG-lattices, finite-dimensional radicals, Nakayama,
projective covers, the `kG` local criterion, relative projectivity, and the
Green vertex/source package. The added augmentation-ideal lemma is real closure
work, not padding, and the page remains well below the split ceiling.

The direct `requires` line is narrower than the design prose, but the current
plan closure already reaches the module and semisimplicity pages through
`induced-representations-and-frobenius-reciprocity-examples`; the closure audit
again found no missing prerequisite homes or illegal example-page dependencies.
The one deferred row is exact and sufficient: Webb `7.4 The Cartan matrix`
lands on the live GT-19 page `brauer-characters-and-decomposition-matrices`,
while the out-of-scope finite-representation-type row is a genuine later branch.

**Verdict:** sufficient.

### `pro-p-groups-and-the-p-adic-integers`

GT-17 is sufficient. The page defines `\mathbb Z_p` via compatible residues,
proves the topology/metric agreement, reaches the pro-`p` completion of
`\mathbb Z`, and keeps the Frattini/Burnside tail on the A page exactly as the
design wants. The live direct prerequisite
`inverse-systems-profinite-groups-and-completion-examples` is narrower than the
track prose, but its transitive closure already reaches the finite Frattini and
cyclic-group suppliers named in the design.

The only deferred row, Bell's digit-expansion theorem, is an honest B-page
deferral rather than a hidden A-page gap: the current A route works with the
inverse-limit definition, and the B page is the exact live destination for the
coordinate expansion examples. Source form is also sufficient on current bytes:
lecture-note/course-note backing plus Lubotzky's paper covers the page's two
main spines.

**Verdict:** sufficient.

### `duality-and-rigidity-in-monoidal-categories`

MA-16 is sufficient. The current scaffold keeps the design's sharp hypothesis
ladder intact: left/right dual data, rigidity, the double-dual functor, the
Drinfeld morphism, categorical trace, pivotal and spherical structures, then
twist/ribbon structure with the explicit warning that braiding alone does not
define trace. The direct `requires` line is again narrower than the design
block, but the live closure of
`braided-and-symmetric-monoidal-categories-examples` already reaches
`strictification-and-mac-lanes-coherence-theorem`,
`adjunctions-units-and-counits`, `abelian-categories`, and
`dual-spaces-bilinear-forms-and-inertia`.

The decline rows are also honest on current bytes. `Corollary 4.7.13` is
deferred to the exact live page `tensor-and-fusion-categories`; the remaining
rows are non-load-bearing Grothendieck-ring, traced-category, symmetric-case,
and quantum-example enrichments that MA-16's controlling design explicitly keeps
out of scope. The pair has the required independent source form:
`textbook, lecture-notes, paper`.

**Verdict:** sufficient.

## Scope decisions

`research/frontier-29-alpha-a-scope-decisions.json` is current after refresh on
Wednesday, September 2, 2026. All 12 current decline rows now resolve as
`stands`.

That breakdown is exact on the current bytes:

- GT-18: 1 deferred row to `brauer-characters-and-decomposition-matrices`, 1
  out-of-scope row.
- GT-17: 1 deferred row to
  `pro-p-groups-and-the-p-adic-integers-examples`.
- MA-16: 1 deferred row to `tensor-and-fusion-categories`, 8 out-of-scope
  rows.

No row requires `owner-decision`: every deferred destination is an exact live
`plan-spec` page id, and every out-of-scope exclusion matches the controlling
page design rather than hiding a missing prerequisite.

## Checks run on the written bytes

- `node tools/scope-decisions.mjs check --run frontier-29 --group a`
  -> `scope-decisions: 12 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-1.coverage.json research/frontier-29-batch-2.coverage.json research/frontier-29-batch-10.coverage.json --require-destination`
  -> `coverage-checklist: 5 page(s), 180 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-1.pages.json research/frontier-29-batch-2.pages.json research/frontier-29-batch-10.pages.json`
  -> `content-policy: 172 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-1.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-10.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- focused local closure audit over all group-`a` manifests
  -> `0` missing prerequisite homes, `0` deps outside the transitive `requires`
  closure, `0` foreign examples-page deps
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passes with the standard terminal `OK` line and only the repository's
  standing `redundant-prereq` advisories elsewhere
