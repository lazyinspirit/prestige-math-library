# frontier-29 — Alpha group `f` — Step 3 scaffold review

Group `f` covers batches `8`, `9`, and `15` in
`research/frontier-29-alpha-groups.json`: NT-17
`absolute-values-completions-and-p-adic-numbers`, NT-12
`dirichlet-series-and-euler-products`, CA-22
`the-riemann-zeta-function`, and the combinatorics page
`generalized-niceness-and-reduction-outcomes`.

I read the current:

- `research/frontier-29-batch-{8,9,15}.pages.json`
- `research/frontier-29-batch-{8,9,15}.coverage.json`
- `research/frontier-29-batch-{8,9,15}.notes.md`
- `research/plan-number-theory-track.md:1145-1265` and `:1496-1564`
- `research/plan-complex-analysis-track.md:2850-2994`
- `research/plan-combinatorics-and-categories.md:3912-3991`
- the live `research/plan-spec.json`

I refreshed `research/frontier-29-alpha-f-scope-decisions.json`, resolved all
`7` current decline rows, and then checked the resulting file. The current
closure audit over the owned A-page manifests against the full `frontier-29`
scaffold set reports `0` unresolved deps, `0` deps outside the transitive
`requires` closure, and `0` foreign B-page deps.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `absolute-values-completions-and-p-adic-numbers` | 8 | 22 | 8 | **sufficient** | route, source stack, and page-level closure are author-ready |
| `dirichlet-series-and-euler-products` | 8 | 15 | 7 | **sufficient** | initial-zeta route is explicit; line-one zeta material stays deferred to CA-22 |
| `the-riemann-zeta-function` | 9 | 22 | 12 | **sufficient** | the local theta item closes the earlier FA seam without changing the design route |
| `generalized-niceness-and-reduction-outcomes` | 15 | 10 | 3 | **sufficient** | the three missing bridge variants are now local and the bounded-VC extras remain honest exclusions |

Machine half: `research/frontier-29-alpha-f-step3-verdicts.json`.

## Direct repair applied

### F8-1 — repaired: batch-8 notes had stale current-disk visibility claims

`research/frontier-29-batch-8.notes.md` had become stale on current bytes. It
said the exact GT-17 and CA-22 supplier ids were not yet present on current
disk, but `research/frontier-29-batch-2.pages.json` and
`research/frontier-29-batch-9.pages.json` now already carry those item
inventories. The real live limitation is narrower: `research/plan-spec.json`
still exposes those pages only as page-level placeholders.

I repaired the notes in the smallest coherent way at
`research/frontier-29-batch-8.notes.md:69-74`, `:87-91`, and `:267-275`.
No manifest, coverage, or plan change was needed.

## Page review

### `absolute-values-completions-and-p-adic-numbers` — `sufficient`

NT-17 is author-ready on the current scaffold. The page keeps the design's
intended order from absolute values through Ostrowski, places and weak
approximation, metric completion, the comparison with `Z_p`, digit expansions,
local compactness, Hensel/Newton lifting, and the two square criteria. The
current batch-8 notes keep the models distinct until the comparison theorem,
which is exactly the design constraint: `research/frontier-29-batch-8.notes.md:69-74`
and `:276-289`.

The prerequisite situation is now honest and closed. The live plan still lists
only the page-level prerequisites, but the exact `Z_p` supplier ids are already
present in `research/frontier-29-batch-2.pages.json`, and the current closure
audit finds no unresolved or out-of-closure dep. That means the scaffold no
longer depends on an imagined future page stub; it depends only on the still
unspliced supplier inventory, which Step 5 can re-audit against exact ids once
the splice stage lands them into the live plan.

The source set is also sufficient for the page actually being built: Milne,
Sutherland Lectures `5`, `8`, and `10`, and Conrad's Hensel notes cover the
classification, completion, valuation-ring, digit-expansion, lifting, Newton,
and square-criterion material recorded in
`research/frontier-29-batch-8.coverage.json`.

**Verdict:** sufficient.

### `dirichlet-series-and-euler-products` — `sufficient`

NT-12 is author-ready on the current scaffold. The design still says this page
needs only the initial zeta definition and Euler product, not zeta continuation:
`research/plan-number-theory-track.md:1147-1153`. The current batch-8 manifest
matches that route: abscissae, half-plane convergence and holomorphy, the
abscissa gap, uniqueness of coefficients, Abel summation, multiplication and
Euler products, Landau's theorem, and the standard arithmetic-function
identities.

The only scope decline on this page is Tomczak `Corollary 3.8`, and that
deferment is still exact rather than a hidden prerequisite. The row at
`research/frontier-29-batch-8.coverage.json:357-360` sends the line-one zeta
statement to the earlier page `the-riemann-zeta-function`, while batch 9 now
supplies the needed zeta boundary/continuation scaffold locally. The repaired
batch-8 notes also now say the exact zeta supplier ids already exist on current
disk at `research/frontier-29-batch-8.notes.md:87-91` and `:267-275`.

Kedlaya, Tomczak/Boase, and Evertse remain a sufficient source stack for the
page as scoped. No extra continuation, PNT, or log-derivative machinery is
needed before authoring.

**Verdict:** sufficient.

### `the-riemann-zeta-function` — `sufficient`

CA-22 is author-ready on the current scaffold. The key closure difference from
the earlier insufficient zeta scaffold is now explicit in the current notes:
the FA-23/FA-25 Poisson-summation interface is still absent as item-level
suppliers on the live plan, so batch 9 keeps `thm-jacobi-theta-transformation`
as a local scaffold item while preserving the design's theta/Mellin route:
`research/frontier-29-batch-9.notes.md:45-49,170-172`. That removes the former
authoring blocker without widening the page beyond the design inventory.

The rest of the route is also coherent: initial Dirichlet-series definition and
Euler product, zero-freeness on `Re s > 1`, continuation to `Re s > 0`,
eta representation, theta and Mellin, full meromorphic continuation, both
functional equations, xi and Hadamard product, the zero-free line, the trivial
zeros and critical strip, and the Bernoulli special values. The source repair
from Romik to Chandrasekharan is deliberate and documented, not accidental:
`research/frontier-29-batch-9.notes.md:64-79,173-178`.

One scope row remains owner-level, but it does not block authoring of CA-22
itself: the design wants an RH `proved_here: false` remark on
`open-problems-and-research-frontier`, and no such published item currently
exists on disk. That is a published-content scope question, not a missing local
zeta theorem.

**Verdict:** sufficient.

### `generalized-niceness-and-reduction-outcomes` — `sufficient`

Page `427` is author-ready on the current scaffold. The design still fixes this
pair to generalized niceness and source Lemmas `3.1-3.3`, decomposed by outcome
and scale: `research/plan-combinatorics-and-categories.md:3913-3916,3956-3959`.
The current manifest follows that route literally and adds the three bridge
items the library was missing on current disk: the source Lemma `2.6`
thinning step, the anti-complete variant after Lemma `2.8`, and the restricted
analogue of Lemma `2.9`.

Those local bridges are enough to keep the page self-contained. The current
coverage file records direct support from Huang-Ju-Zhou, the `P_5` paper, and
Nguyen's lecture notes; the notes explain why the page stops at the Section `3`
trichotomy and does not mint the later Erdős-Hajnal consequences owned by the
next pairs: `research/frontier-29-batch-15.notes.md:43-45,70-80,108-124`.

The bounded-VC rows from Nguyen's notes are therefore honest exclusions rather
than missing prerequisites. They do not expose a hidden hole in the page `427`
route.

**Verdict:** sufficient.

## Scope decisions

`research/frontier-29-alpha-f-scope-decisions.json` is now current. The `7`
current decline rows resolve as:

- `stands`: `6`
- `owner-decision`: `1`

The `6` `stands` rows are:

- NT-12 / Tomczak `Corollary 3.8` deferred to `the-riemann-zeta-function`
- CA-22 / Stein-Shakarchi `Proposition 2.7` deferred to
  `classical-zero-free-region-and-the-prime-number-theorem`
- CA-22 / Chandrasekharan `Theorem 4(v)` deferred to
  `classical-zero-free-region-and-the-prime-number-theorem`
- GT-427 / Nguyen `Theorem 5.1` out of scope
- GT-427 / Nguyen `Theorem 5.2` out of scope
- GT-427 / Nguyen `Lemma 5.4` out of scope

The one `owner-decision` row is the Riemann-hypothesis seam. The destination
page `open-problems-and-research-frontier` exists, but the exact published RH
remark the design wants is not on current disk:
`research/plan-complex-analysis-track.md:2928-2930`,
`research/frontier-29-batch-9.notes.md:176-178`, and
`library/not-proved-here/open-problems-and-research-frontier.md:5-13`. Adding
that item would modify published out-of-scope content, so I recorded it in the
scope register rather than treating it as a local Step-3 repair.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group f`
  -> `scope-decisions: f: 7 decline(s), 7 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group f`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-8.coverage.json research/frontier-29-batch-9.coverage.json research/frontier-29-batch-15.coverage.json --require-destination`
  -> `coverage-checklist: 4 page(s), 132 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-8.pages.json research/frontier-29-batch-9.pages.json research/frontier-29-batch-15.pages.json`
  -> `content-policy: 99 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-8.coverage.json`
  -> `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-9.coverage.json`
  -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-15.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs /tmp/frontier-29-alpha-f-spliced-plan.json`
  -> pass; only the standing repo-wide `redundant-prereq` advisories print ahead
     of the final `OK`
- focused closure audit over the owned A-page manifests against the full
  `frontier-29` scaffold set
  -> `0` unresolved deps, `0` deps outside the transitive `requires` closure,
     `0` foreign B-page deps
- `node tools/prosecheck.mjs research/frontier-29-batch-8.notes.md --warnings`
- `git diff --check -- research/frontier-29-batch-8.notes.md research/frontier-29-alpha-f-scope-decisions.json research/frontier-29-alpha-f-step3-scaffold-review.md research/frontier-29-alpha-f-step3-verdicts.json`

## Outcome

All four owned A pages are sufficient for authoring on the current bytes:

- `absolute-values-completions-and-p-adic-numbers`
- `dirichlet-series-and-euler-products`
- `the-riemann-zeta-function`
- `generalized-niceness-and-reduction-outcomes`

`research/frontier-29-alpha-f-step3-verdicts.json` records all four pages as
`sufficient`. No split is owed: the A-page counts are `22`, `15`, `22`, and
`10`.
