# frontier-26 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `8`, `10`, and `11` in
`research/frontier-26-alpha-groups.json`: the star-expansion and P_5
Erdos-Hajnal pairs, TC-4 / TC-8, and TC-10. I read the current
`research/frontier-26-batch-{8,10,11}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-combinatorics-and-categories.md` and
`research/plan-computability-theory-track.md`, and the live
`research/plan-spec.json`.

All `26` pending scope rows are now resolved in
`research/frontier-26-alpha-d-scope-decisions.json` as `26` `stands`
rows. On Sunday, August 30, 2026,
`node tools/scope-decisions.mjs check --run frontier-26 --group d` passes with
`26 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `star-expansions-and-erdos-hajnal` | 8 | 16 | 5 | **sufficient** | route, source stack, and exact deferrals close on current bytes |
| `iterative-sparsification-and-the-five-vertex-path` | 8 | 22 | 4 | **sufficient** | the two iteration chains and scope cuts align with the live design |
| `regular-expressions-and-kleenes-theorem` | 10 | 16 | 3 | **sufficient** | the TC-4 GNFA/Kleene/quotient/decision bundle is author-ready |
| `context-free-pumping-ogden-and-parsing` | 10 | 16 | 3 | **insufficient** | the pumping-lemma counterexample still lacks a directly read theorem-bearing source |
| `robust-machine-models-and-universal-computation` | 11 | 16 | 3 | **sufficient** | the primary/textbook/note stack closes and TC-11 deferrals are exact |

Machine half: `research/frontier-26-alpha-d-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| D10-1 | `context-free-pumping-ogden-and-parsing` | **blocking** | insufficient: the Bar-Hillel-vs-Ogden counterexample still lacks a directly read source |

## Direct repairs applied

None. The owned manifests already close on prerequisites and page-boundary
routing; the only live defect is a source-sufficiency gap in batch `10` that
would require a new exact coverage carrier rather than a local dependency or
wording repair.

### D10-1 — TC-8 still lacks an author-ready source for its chosen pumping-only counterexample

The route itself is closeable. The controlling design at
`research/plan-computability-theory-track.md:432-458` still wants the ordinary
CFL pumping lemma, Ogden's lemma, the nonclosure/closure bundle, CYK,
CFG emptiness and finiteness, the equivalence/ambiguity seam, and the false
statement `fs-the-cfl-pumping-lemma-characterizes-cfls` with its B-page
counterexample. The current manifest keeps that exact structure.

The blocking defect is narrower and source-side. The A-page false statement at
`research/frontier-26-batch-10.pages.json:379-386` and the B-page
counterexample at `research/frontier-26-batch-10.pages.json:439-446` both use
the pairwise-distinct language
`L = {a^i b^j c^k : i,j,k are pairwise distinct}`. But the current coverage row
for that witness is only the archived StackExchange `reference-work` entry at
`research/frontier-26-batch-10.coverage.json:513-533`, and its receipt is
explicitly `verified_via: search-snippet`, not a directly read theorem-bearing
source. Batch-10's own notes already admit the same limit at
`research/frontier-26-batch-10.notes.md:114-121` and `:164-166`: the runner
could confirm that such examples exist, but the only live text naming this exact
witness was a narrow StackExchange pointer to Wise.

That is not enough to call the pair author-ready as written. The page does have
directly read source support for the general Bar-Hillel theorem, Ogden's lemma,
intersection/complement nonclosure, reversal, CYK, and CFG decision material;
what it still lacks is an exact directly read carrier for the specific witness it
chose to refute `fs-the-cfl-pumping-lemma-characterizes-cfls`. Replacing the
witness would change the current false-statement route, while keeping it without
a direct source would force Step 5 to author beyond the harvested evidence.

**Verdict:** insufficient.

## Page review

### `star-expansions-and-erdos-hajnal`

This pair is sufficient. The A page follows the design route the current
combinatorics plan still calls for at
`research/plan-combinatorics-and-categories.md:3908-3909,3938-3949`: the
star-expansion definition, the rainbow-forest blockade theorem, the blockade
chain through the four-family theorem, the explicit `P_4` specialization and
`C_6/C_7` witnesses, the cycle-plus-forest-complement theorem, and the
hatted-five-cycle theorem. The source stack is also sufficient on current bytes:
three theorem-bearing papers plus Nguyen's lecture notes, with all nine declined
rows landing on exact current pages `409`, `419`, or `441` rather than on
an unhomed future extension.

**Verdict:** sufficient.

### `iterative-sparsification-and-the-five-vertex-path`

This pair is sufficient. The scaffold respects the design warning that the
`P_5` source owns two separate iteration chains: the current A page keeps the
niceness setup, the sparse and semisparse chains, the blockade-to-restricted-set
bridge, the polynomial Rodl endpoint, and the final Erdos-Hajnal theorem in the
order recorded at
`research/plan-combinatorics-and-categories.md:3909,3939-3941` and explained
again in `research/frontier-26-batch-8.notes.md:123-150`. The three
out-of-scope rows are honest non-load-bearing enrichments, and the two deferred
rows land exactly on page `409` and page `417` on current disk.

**Verdict:** sufficient.

### `regular-expressions-and-kleenes-theorem`

This pair is sufficient. The TC-4 design at
`research/plan-computability-theory-track.md:286-318` still asks for the
syntax-versus-denotation seam, Thompson's construction, GNFA state elimination,
Kleene's theorem, homomorphic image and inverse homomorphism, quotient closure,
and the DFA decision bundle; the manifest matches that route exactly. The source
stack is adequate on current bytes: Gallier carries the syntax/denotation and
GNFA route, Watrous carries the decidability packaging, Cunningham independently
backs homomorphism and right quotient, and the only declined row is the honest
transducer-level closure enrichment outside the TC-4 page boundary.

**Verdict:** sufficient.

### `context-free-pumping-ogden-and-parsing`

This pair is insufficient only on D10-1. Apart from the counterexample source
gap, the current scaffold matches the TC-8 route at
`research/plan-computability-theory-track.md:432-466`: the CNF tree bound,
Bar-Hillel pumping lemma, marked-position decomposition, Ogden's lemma,
intersection/complement nonclosure, reversal, CYK, membership, CFG emptiness and
finiteness, the ambiguity/equivalence seam, and the three planned false
statements. The five decline rows are also correct as scope decisions: two exact
deferments back to TC-7's regular-intersection page and three non-load-bearing
out-of-scope rows.

What still fails is the exact source support for the chosen witness to
`fs-the-cfl-pumping-lemma-characterizes-cfls`, so the pair is not yet
author-ready.

**Verdict:** insufficient.

### `robust-machine-models-and-universal-computation`

This pair is sufficient. The TC-10 design at
`research/plan-computability-theory-track.md:508-542` still wants exactly the
current route: a fixed machine encoding before universality, stay-put
elimination before tape-model comparisons, multitape and nondeterministic
robustness, RAM/register equivalence, the universal-machine definition and
interpreter lemma, effective machine enumeration, and the Church-Turing
thesis/remark seam. The source stack is strong on current bytes: Turing 1936 is
present as the primary source, Open Logic supplies the textbook encoding and
universal-machine route, Sipser and Gallier cover the modern variant and RAM
simulations, and the three deferred rows all land exactly on
`decidable-recognizable-and-enumerable-languages` at order `601`.

**Verdict:** sufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-26 --group d` produced
`26` pending rows. They are now resolved in
`research/frontier-26-alpha-d-scope-decisions.json` as:

- `stands`: `26` rows
- `owner-decision`: `0` rows

That outcome is correct on current bytes. Every `deferred` row has an exact
current destination page on disk: the earlier pure-pairs page `409`, the same-
cohort star-expansion / `P_5` pair at `417/419`, the later E-graph/Bird page
`441`, the predecessor PDA page `593`, or the next recognizability page
`601`. The remaining `out-of-scope` rows are honest non-load-bearing
extensions rather than missing authoring prerequisites.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs check --run frontier-26 --group d`
- `node tools/coverage-checklist.mjs research/frontier-26-batch-8.coverage.json research/frontier-26-batch-10.coverage.json research/frontier-26-batch-11.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-8.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-10.coverage.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-8.pages.json research/frontier-26-batch-10.pages.json research/frontier-26-batch-11.pages.json`
- focused local closure audit over the current group-`d` manifests against the full retained manifest set and authored library pages
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/scaffold-verdicts.mjs --run frontier-26`
- `node -e "JSON.parse(...)"` on
  `research/frontier-26-alpha-d-scope-decisions.json` and
  `research/frontier-26-alpha-d-step3-verdicts.json`
- `node tools/prosecheck.mjs research/frontier-26-alpha-d-step3-scaffold-review.md --warnings`
- `git diff --check -- research/frontier-26-alpha-d-scope-decisions.json research/frontier-26-alpha-d-step3-verdicts.json research/frontier-26-alpha-d-step3-scaffold-review.md`

## Final verdicts

Group `d` has four sufficient A pages and one insufficient A page on the
current Sunday, August 30, 2026 bytes. No split is owed: the A-page counts are
`16`, `22`, `16`, `16`, and `16`, all below the Step-3 ceiling.
