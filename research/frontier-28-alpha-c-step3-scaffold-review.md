# frontier-28 — Alpha group `c` — Step 3 scaffold review

Group `c` covers batches `4`, `5`, and `6` in
`research/frontier-28-alpha-groups.json`: MT-16
`the-duality-of-lp-and-lq`, FA-2
`bounded-linear-operators-and-quotient-spaces`, and NT-11
`chebyshev-bounds-and-mertens-theorems`.

I read the current:

- `research/frontier-28-batch-{4,5,6}.pages.json`
- `research/frontier-28-batch-{4,5,6}.coverage.json`
- `research/frontier-28-batch-{4,5,6}.notes.md`
- `research/plan-spec.json`
- `research/plan-measure-theory-track.md:3200-3275`
- `research/plan-functional-analysis-track.md:360-411`, `:525-620`, and
  `:1248-1277`
- `research/plan-number-theory-track.md:1072-1155`
- `research/plan-complex-analysis-track.md:2857-2991`
- `research/frontier-28-alpha-step0-drift.md:25-27` and `:45-51`

I refreshed `research/frontier-28-alpha-c-scope-decisions.json`, resolved all
`13` current decline rows, and then checked the resulting file. The current
focused closure audit over the three owned A-page manifests reports `0`
unresolved deps, `0` out-of-closure deps, and `0` foreign B-page deps.

| A page | batch | A items | B items | exact-carrier audit | verdict | notes |
|---|---:|---:|---:|---|---|---|
| `the-duality-of-lp-and-lq` | 4 | 15 | 6 | 6 uncovered ids, all local split/definition layer | **sufficient** | MT-16 route, source stack, and endpoint discipline close on current bytes |
| `bounded-linear-operators-and-quotient-spaces` | 5 | 26 | 8 | 8 uncovered ids, all local split/definition layer | **sufficient** | FA-2 route closes without forward or foreign-B-page dependencies |
| `chebyshev-bounds-and-mertens-theorems` | 6 | 18 | 7 | 0 uncovered ids | **sufficient** | NT-11 route is author-ready; one deferred Tao row needs owner scope direction but does not block authoring |

Machine half: `research/frontier-28-alpha-c-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| C6-1 | `chebyshev-bounds-and-mertens-theorems` | scope | owner-decision: Tao's `Proposition 2` deferment currently points to NT-12, but the live plan assigns the zeta pole/continuation to CA-22 |

## Direct repairs applied

None. The current group-`c` scaffolds are authorable on current bytes, and the
one live defect is a scope-destination ambiguity that belongs in the decision
register rather than in a local manifest or coverage rewrite.

## Pair review

### `the-duality-of-lp-and-lq` — `sufficient`

This pair is author-ready on the current 2026-09-01 bytes: `15` A-page items
and `6` B-page items, so no split is owed.

The route is coherent and source-backed. MT-16 still requires the concrete
bounded-functional definition, the easy `g -> Lambda_g` direction, the norm
identity with the explicit `q = infinity` semifiniteness clause, the
finite-measure Radon-Nikodym carrier, the separate arbitrary-measure
`1 < p < infinity` extension, the counting-measure specialization, and the
recorded `p = infinity` boundary at
`research/plan-measure-theory-track.md:3210-3253`. The current scaffold keeps
that exact five-cluster shape in the notes at
`research/frontier-28-batch-4.notes.md:72-97` and preserves the design's
endpoint discipline at `:123-149` and `:227-240`. The live plan still treats
the page as `no-drift` because the single spec prerequisite closes over the
named MT-12/13/14/15/2 suppliers at
`research/frontier-28-alpha-step0-drift.md:45-47`.

The exact-carrier audit leaves six uncovered ids on current bytes:
`def-bounded-linear-functional-on-l-p-and-its-operator-norm`,
`thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`,
`prop-semifinite-measures-make-l-q-representatives-unique`,
`lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p`,
`lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu`,
and `cor-ell-p-duality-by-counting-measure`. Those six do not expose a missing
source or route blocker. The bounded-functional definition and easy direction
are spelled out directly in the controlling design at
`research/plan-measure-theory-track.md:3210-3219`; uniqueness is the explicit
semifinite consequence at `:3222-3224`; the finite-measure bridge is already
the four-lemma carrier at `:3228-3237`; and the counting-measure consequence is
explicit at `:3248-3253`. The notes also make the new sigma-finite-support lemma
and its role explicit at `research/frontier-28-batch-4.notes.md:144-149` and
`:205-219`. The current coverage file already carries the theorem-bearing
source rows that these local splits sit around: Folland `6.14`/`6.15`, Bass
`15.10`/`15.11`, and Hunter `7.13`/`7.14` at
`research/frontier-28-batch-4.coverage.json:50-67`, `:105-127`, and `:160-197`.
No new source, new page, or backward prerequisite is needed to author from the
current scaffold.

**Verdict:** sufficient.

### `bounded-linear-operators-and-quotient-spaces` — `sufficient`

This pair is author-ready on the current 2026-09-01 bytes: `26` A-page items
and `8` B-page items, so no split is owed.

The current scaffold still matches the FA-2 design. The page keeps the operator
definition/norm package, dense extension, bounded bilinear maps, quotient norm
and completeness, the normed quotient universal property, complemented
subspaces, and the one-sided inverse criteria in the order fixed at
`research/plan-functional-analysis-track.md:376-401`. The key local repairs in
the notes are the right ones and are already on disk: item `23` is narrowed to
the Banach-to-Banach form at `research/frontier-28-batch-5.notes.md:55-75`,
its converse is kept dependency-closed through the published Baire theorem at
`:77-92`, the quotient proofs keep the epsilon-minimizer route at `:94-103`,
and finite-dimensional complementation is still withheld for FA-5 at `:104-113`.
The current Step-0 drift receipt remains `no-drift` at
`research/frontier-28-alpha-step0-drift.md:25-27`.

The exact-carrier audit leaves eight uncovered ids on current bytes:
`def-topological-isomorphism-of-normed-spaces`,
`def-bounded-bilinear-map`,
`thm-bounded-bilinear-map-equivalences`,
`lem-quotient-seminorm-is-representative-independent`,
`lem-quotient-seminorm-triangle-inequality`,
`thm-quotient-map-is-open`,
`thm-bounded-below-iff-injective-with-closed-range`, and
`def-bounded-left-and-right-inverses`. On current bytes, those are all the
local split/definition layer around already fixed source-backed carriers, not
missing authoring prerequisites. The topological-isomorphism and inverse rows
are plain FA-2 definitions at
`research/plan-functional-analysis-track.md:384-399`. The quotient
representative-independence, triangle-inequality, and quotient-ball items are
exactly the proof obligations the design singles out at `:389-394`, and the
current notes preserve that route at `research/frontier-28-batch-5.notes.md:94-103`,
with the surrounding Teschl/Buhler/MIT quotient carriers already harvested at
`research/frontier-28-batch-5.coverage.json:35-52`, `:137-160`, and `:206-209`.
The bounded-below theorem is the one nontrivial uncovered theorem, but its
current statement and dependency-closed proof route are now explicit in the
notes at `research/frontier-28-batch-5.notes.md:55-92`, and the current
manifest uses that repaired local route at
`research/frontier-28-batch-5.pages.json:236-279`. The bilinear-map package is
also explicit in FA-2 at `research/plan-functional-analysis-track.md:385-386`
and remains within elementary normed-space calculus; the separate-continuity
corollary is still correctly deferred to FA-6 at
`research/plan-functional-analysis-track.md:602-603`.

Because the current scaffold has no unresolved deps, no foreign B-page deps,
and no missing source or route that would force new research before authoring,
the page is author-ready.

**Verdict:** sufficient.

### `chebyshev-bounds-and-mertens-theorems` — `sufficient`

This pair is author-ready on the current 2026-09-01 bytes: `18` A-page items
and `7` B-page items, so no split is owed.

The current manifest matches the NT-11 design exactly where it matters. The
Chebyshev block, Abel-summation transfer, Bertrand finite-range check, and the
three distinct Mertens theorems are all still the intended route at
`research/plan-number-theory-track.md:1076-1143`, and the batch notes preserve
the same proof-shape decisions at `research/frontier-28-batch-6.notes.md:21-48`.
The exact-carrier audit on the current bytes reports `missing_count = 0` for
the A page, so unlike the other two pages there is no uncovered manifest item
left to interpret. The source stack is also sufficient on current bytes:
Shoup, Crisman, Goldmakher, Tao, and MIT all have live harvested rows in
`research/frontier-28-batch-6.coverage.json:39-258`, and the notes correctly
record the only real risk as proof density around the exact third-Mertens
constant, not an unresolved scope or dependency blocker, at
`research/frontier-28-batch-6.notes.md:73-83`.

One scope row does require owner review, but it does not block authoring of
NT-11 itself. The current Tao `Proposition 2` row defers the zeta pole
asymptotic to `dirichlet-series-and-euler-products` at
`research/frontier-28-batch-6.coverage.json:210-213`, while the live plan puts
the pole/continuation on CA-22 `the-riemann-zeta-function` at
`research/plan-complex-analysis-track.md:2871-2877` and `:2984-2986`; NT-12
requires only the initial zeta definition and Euler product at
`research/plan-number-theory-track.md:1147-1152`. That is a real destination
ambiguity, so I resolved the scope row as `owner-decision`. But NT-11 itself
remains closed because the current page only uses Tao as part of the exact
third-theorem constant support and does not depend on the deferred pole item.

**Verdict:** sufficient.

## Scope decisions

`research/frontier-28-alpha-c-scope-decisions.json` is now current. The `13`
current decline rows resolve as:

- `stands`: `12`
- `owner-decision`: `1`

The `12` `stands` rows are stable on current bytes:

- MT-16 still keeps Folland's extra `L^1` endpoint exceptions out of scope
  because MT-2 already supplies the chosen non-semifinite witness.
- FA-2 still defers finite-dimensional complementation to FA-5, source-backed
  uncomplemented examples to the FA-5 B page, and the open
  mapping/bounded-inverse/closed-graph package to FA-6.
- NT-11 still keeps Crisman's prime-indicator notation out of scope and Tao's
  Fourier-smoothing proposition out of scope.

The `owner-decision` row is Tao's `Proposition 2, the simple pole asymptotic
for zeta(s) near s = 1`. Its current destination in the coverage file is
`dirichlet-series-and-euler-products`, but the live plan currently assigns that
pole/continuation material to CA-22 `the-riemann-zeta-function`. That routing
question is outside the licensed Step-3 local repairs, so I recorded it in the
scope register instead of rewriting the coverage file.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group c`
- `node tools/scope-decisions.mjs check --run frontier-28 --group c`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-4.coverage.json research/frontier-28-batch-5.coverage.json research/frontier-28-batch-6.coverage.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- focused local closure audit over the current group-`c` A-page manifests
- focused manifest-to-coverage exact-carrier audit over the three owned A pages

## Outcome

All three owned A pages are sufficient for authoring on the current
2026-09-01 bytes:

- `the-duality-of-lp-and-lq`
- `bounded-linear-operators-and-quotient-spaces`
- `chebyshev-bounds-and-mertens-theorems`

`research/frontier-28-alpha-c-step3-verdicts.json` records all three pages as
`sufficient`. No group-`c` Beta fix is owed from current author-readiness, but
one owner-level scope destination decision remains open in the decision register.
