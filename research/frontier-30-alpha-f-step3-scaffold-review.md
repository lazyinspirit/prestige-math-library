# frontier-30 — Alpha group `f` — Step 3 scaffold review

Group `f` covers batches `8`, `19`, and `20` in
`research/frontier-30-alpha-groups.json`: NT-13 / NT-18, TC-14 / TC-16, and
TC-22. I read the current
`research/frontier-30-batch-{8,19,20}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-number-theory-track.md:1212-1665` and
`research/plan-computability-theory-track.md:652-1015`, and the live
`research/plan-spec.json`.

I refreshed `research/frontier-30-alpha-f-scope-decisions.json`, resolved all
`23` current decline rows, and then checked the resulting file on Saturday,
September 5, 2026. One in-scope scaffold repair was applied in batch `19`.
After that repair, the focused closure audit over the owned A-page manifests
reports `0` unresolved deps, `0` deps outside the transitive `requires`
closure, and `0` illegal foreign B-page deps. One same-page forward dependency
remains on TC-14, so the group closes with **four sufficient A pages and one
insufficient A page**.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `dirichlet-characters-l-functions-and-primes-in-progressions` | 8 | 24 | 8 | **sufficient** | primitive/conductor and PNT-in-progressions rows land on exact later pages |
| `hilbert-symbols-and-the-quadratic-local-global-principle` | 8 | 17 | 9 | **sufficient** | local-global route and source stack are closed |
| `post-correspondence-and-language-undecidability` | 19 | 15 | 3 | **insufficient** | one repaired backward prerequisite; one forward item dependency remains |
| `acceptable-numberings-smn-and-the-recursion-theorem` | 19 | 16 | 3 | **sufficient** | numbering / `s-m-n` / recursion route is closed |
| `classical-np-completeness-reductions` | 20 | 19 | 3 | **sufficient** | the local closure repairs already recorded by Beta are enough |

Machine half: `research/frontier-30-alpha-f-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B19-1 | `post-correspondence-and-language-undecidability` | high | repaired in manifest |
| B19-2 | `post-correspondence-and-language-undecidability` | **blocking** | insufficient: `thm-cfg-equivalence-is-undecidable` still depends on the later `thm-cfg-universality-is-undecidable` |

### B19-1 — repaired: TC-14 needed the earlier regular-language pumping page in its declared closure

The item `thm-proper-inclusions-in-the-chomsky-hierarchy` currently depends on
`thm-pumping-lemma-for-regular-languages`, whose published home page is
`myhill-nerode-theory-and-dfa-minimization` at order `589`. The live batch-19
manifest had not declared that earlier page in the TC-14 `requires` list, so
the page depended outside its transitive prerequisite closure on current bytes.

This was a real missing backward prerequisite and is repairable inside Step 3.
I updated `research/frontier-30-batch-19.pages.json` to add
`myhill-nerode-theory-and-dfa-minimization` to the A-page `requires`, and I
updated `research/frontier-30-batch-19.notes.md` so the artifact now records
that Step-3 closure repair honestly.

After that edit, the local closure audit over the owned A-page manifests reports
zero unresolved deps, zero out-of-closure deps, and zero illegal foreign
examples-page deps.

### B19-2 — TC-14 still has one owner-level forward item dependency

The current manifest still orders
`thm-cfg-equivalence-is-undecidable` before
`thm-cfg-universality-is-undecidable`, even though the equivalence theorem's
declared strategy is exactly "Reduce universality to equivalence" and its
`deps` list names the later universality theorem directly. That is a real
forward edge inside the same A page.

The Step-3 brief classifies forward edges and reading-order changes as owner
decisions. I therefore did not reorder the page or invent a different proof
route. The exact missing earlier result is an earlier carrier for
`thm-cfg-universality-is-undecidable`, sourced from the current TC-14 source
stack's computation-history route (MIT OCW Lecture 10 and Watrous, as recorded
in `research/frontier-30-batch-19.notes.md`). Until that result moves earlier
or the page order is owner-authorized to change, TC-14 is not author-ready.

**Verdict:** insufficient.

## Page review

### `dirichlet-characters-l-functions-and-primes-in-progressions`

NT-13 is sufficient on current bytes. The manifest keeps the designed route
from modulus-fixed Dirichlet characters and extension by zero through
orthogonality, Euler products, the split line-one nonvanishing argument,
Dirichlet density, the Mertens progression sum, and Dirichlet's theorem. The
source stack is broad enough for that exact page: Kedlaya Chapters `3` and `4`,
Sutherland Lecture `18`, and Tomczak Chapter `4`.

All `16` current scope declines on this page stand. Twelve primitive /
conductor / Gauss-sum rows still land on the exact later page
`primitive-dirichlet-l-functions-and-functional-equations` at order
`348.011`; two PNT-in-progressions rows still land on
`classical-zero-free-region-and-the-prime-number-theorem` at order `348.015`;
and the remaining two Sutherland rows are true out-of-scope refinements rather
than hidden prerequisites.

**Verdict:** sufficient.

### `hilbert-symbols-and-the-quadratic-local-global-principle`

NT-18 is sufficient on current bytes. The page keeps the route from rational
local fields and the Hilbert symbol through the real / odd-`p` / `2`-adic
formulas, reciprocity, local ternary isotropy, global square-class
approximation, and the full Hasse-Minkowski theorem over `Q`. The batch-8 notes
and current manifest keep the Dirichlet-theorem dependency explicit inside the
dimension-four patching step, which closes the earlier design seam honestly.

The source stack is also sufficient for the exact page being built:
Sutherland Lectures `10` and `11` plus Raskin and Conrad cover the local
formulae, reciprocity, local-global route, and the Selmer cubic boundary
counterexample.

**Verdict:** sufficient.

### `post-correspondence-and-language-undecidability`

After B19-1, TC-14 is otherwise strong. The current page cleanly separates
modified PCP, ordinary PCP, CFG intersection-emptiness, CFG universality, CFG
ambiguity, and the Chomsky-hierarchy packaging, and the source form is
sufficient for those targets: Watrous, MIT OCW Lecture `10`, and Baldwin.

What still blocks authoring is exactly B19-2. The current same-page forward
edge from `thm-cfg-equivalence-is-undecidable` to the later
`thm-cfg-universality-is-undecidable` is not repairable here by a backward
prerequisite edit, and the Step-3 brief reserves reading-order changes to the
owner path.

**Verdict:** insufficient.

### `acceptable-numberings-smn-and-the-recursion-theorem`

TC-16 is sufficient on current bytes. The manifest keeps the designed route
from numberings and acceptable numberings through `s-m-n`, effective program
specialization, the self-reference lemma, Kleene's recursion theorem with
parameters, productive and creative sets, Myhill, and acceptable-numbering
intertranslation. No out-of-closure dep, foreign B-page dep, or pending scope
decision remains on this pair.

The source stack is sufficient for the exact page: Soare gives the textbook
backbone, Moss gives an independent theorem-by-theorem route for `s-m-n` and
recursion, and Open Logic supplies a third numbering treatment.

**Verdict:** sufficient.

### `classical-np-completeness-reductions`

TC-22 is sufficient on current bytes. Beta's local closure repairs already make
the page self-contained where the declared page closure did not carry the
published graph-problem and Hamiltonian-problem definitions. The current route
then closes cleanly through `3SAT -> CLIQUE`, the combined clique /
independent-set / vertex-cover interreduction theorem, the directed and
undirected Hamiltonian results, subset sum and partition, set cover, and
three-colourability.

All five current scope declines on TC-22 stand. The two 3SAT rows are correctly
deferred back to the exact prerequisite page `the-cook-levin-theorem`, and the
three remaining rows are honest out-of-scope alternatives or incomplete source
headings rather than missing retained theorems. Arora-Barak, Trevisan NP2/NP3,
Savage, and MIT give a sufficient source stack for the chosen route.

**Verdict:** sufficient.

## Scope decisions

`research/frontier-30-alpha-f-scope-decisions.json` is now current on disk. The
`23` current decline rows resolve as:

- `stands`: `23`
- `owner-decision`: `0`

The NT-13 later-page destinations are still exact on current disk:

- `primitive-dirichlet-l-functions-and-functional-equations` — order `348.011`
- `classical-zero-free-region-and-the-prime-number-theorem` — order `348.015`

The TC-22 earlier-page destination is also exact on current disk:

- `the-cook-levin-theorem` — order `621`

The remaining out-of-scope rows are true exclusions rather than missing live
destinations.

## Checks run on the current bytes

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group f`
  -> `scope-decisions: f: 23 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group f`
  -> `scope-decisions: 23 current decline(s), 0 error(s)`
- `node -e '...JSON.parse(...)...'`
  -> `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-8.coverage.json research/frontier-30-batch-19.coverage.json research/frontier-30-batch-20.coverage.json`
  -> `coverage-checklist: 5 page(s), 181 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-8.pages.json research/frontier-30-batch-19.pages.json research/frontier-30-batch-20.pages.json`
  -> `content-policy: 117 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-8.coverage.json`
  -> `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-19.coverage.json`
  -> `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-20.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-f-spliced-plan.json`
  -> fails only on the current blocker:
     `[intra-order] post-correspondence-and-language-undecidability: thm-cfg-equivalence-is-undecidable depends on thm-cfg-universality-is-undecidable, which appears LATER on the same page`
     plus the repository's standing non-blocking `redundant-prereq` advisories
- focused closure audit over the owned A-page manifests against the full
  `frontier-30` scaffold set
  -> `closure-audit: owned A pages 5; unresolved 0; outside-closure 0; foreign-B 0`
- same-page forward-dependency audit over the owned A-page manifests
  -> exactly `1` forward item dep:
     `post-correspondence-and-language-undecidability: thm-cfg-equivalence-is-undecidable -> thm-cfg-universality-is-undecidable`
- `node tools/prosecheck.mjs research/frontier-30-alpha-f-step3-scaffold-review.md --warnings`
  -> `1 file(s) checked. 0 error(s), 2 warning(s).`
     warnings: heuristic `count-in-prose` on the quoted
     `coverage-checklist: 5 page(s), ...` and
     `closure-audit: owned A pages 5; ...` lines
- `git diff --check -- research/frontier-30-batch-19.pages.json research/frontier-30-batch-19.notes.md research/frontier-30-alpha-f-scope-decisions.json research/frontier-30-alpha-f-step3-scaffold-review.md research/frontier-30-alpha-f-step3-verdicts.json`
  -> clean
