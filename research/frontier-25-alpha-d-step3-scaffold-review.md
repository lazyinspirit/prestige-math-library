# frontier-25 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `10` and `11` in
`research/frontier-25-alpha-groups.json`: TC-3 / TC-7 and TC-9. I read the
current `research/frontier-25-batch-{10,11}.{pages.json,coverage.json,notes.md}`
artifacts, the controlling design sections in
`research/plan-computability-theory-track.md`, and the live
`research/plan-spec.json`.

All `13` pending scope rows are now resolved in
`research/frontier-25-alpha-d-scope-decisions.json` as `12` `stands` rows and
`1` `owner-decision` row. On Sunday, August 30, 2026,
`node tools/scope-decisions.mjs check --run frontier-25 --group d` passes with
`13 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `nondeterministic-finite-automata-and-subset-construction` | 10 | 15 | 3 | **sufficient** | route and sources already close on current bytes |
| `pushdown-automata-and-context-free-languages` | 10 | 17 | 3 | **sufficient** | sufficient after direct manifest alignment repair |
| `turing-machines-configurations-and-computation` | 11 | 16 | 3 | **sufficient** | sufficient after direct backward-prerequisite repair |

Machine half: `research/frontier-25-alpha-d-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| D10-1 | `pushdown-automata-and-context-free-languages` | high | repaired in manifest |
| D11-1 | `turing-machines-configurations-and-computation` | high | repaired in manifest |

### D10-1 — repaired: page 593 underdeclared an already-authoritative backward prerequisite

The live design block `TC-7` in
`research/plan-computability-theory-track.md:396-430` still lists only
`context-free-grammars-and-normal-forms` as the prerequisite for
`pushdown-automata-and-context-free-languages`, but the current authoritative
`research/plan-spec.json` already adds the earlier page
`deterministic-finite-automata-and-regular-languages` to page `593`'s
`requires` list. The batch-10 notes incorrectly said there was no
design-versus-spec drift, and the batch manifest still carried only the older
single-page prerequisite.

I repaired `research/frontier-25-batch-10.pages.json` in the smallest coherent
way by adding the missing backward prerequisite
`deterministic-finite-automata-and-regular-languages` to page `593`.

This is an alignment repair, not a page-insufficiency verdict. The repaired
TC-7 item list no longer spends the removed
`intersection with regular languages` result, so the page was mathematically
closed already; the defect was that the manifest did not match the live run
plan that Step 3 is required to review against.

### D11-1 — repaired: page 597 cited directed-path machinery outside its declared closure

The focused local closure audit found one real out-of-closure published
dependency on the current bytes. The item
`lem-acceptance-is-configuration-reachability` depends on
`def-directed-walk-trail-path-cycle-and-strong-connectivity`, whose live home is
the earlier published page `eulerian-and-hamiltonian-graphs` at order `211`,
not `graphs-walks-and-connectivity`.

The batch-11 notes already describe that directed-path item as a published
external dependency, so the issue was the manifest, not the mathematical route.
I repaired `research/frontier-25-batch-11.pages.json` by adding the missing
backward prerequisite `eulerian-and-hamiltonian-graphs` to page `597`.

After that repair, the local closure audit over the current group-d manifests
reports `0` missing prerequisite homes, `0` forward-order deps, and `0` foreign
examples-page deps.

## Page review

### `nondeterministic-finite-automata-and-subset-construction`

This pair is sufficient on the current bytes. The A page matches the TC-3 route
cleanly: NFA definitions with epsilon-moves, epsilon-closure, the extended
transition function, acceptance semantics, DFA embedding, the subset
construction and its invariant, the language-equivalence theorem, explicit
epsilon-elimination, the NFA constructions for union/concatenation/star, the
exponential-state warning, and the two intended false statements. The B page is
substantive and load-bearing rather than decorative: it gives the singleton-DFA
embedding example, the four-state subset-construction witness, and the
existential-acceptance counterexample.

The source form is sufficient on Sunday, August 30, 2026:
`lecture-notes, course-notes, course-notes`. Gallier carries the main NFA and
subset-construction treatment, Watrous Lecture `3` independently backs the NFA
acceptance and equivalence route, and Watrous Lecture `4` supplies the explicit
regular-operation constructions. I found no missing lemma, no source-gap, no
forward edge, and no unresolved scope row on this pair.

**Verdict:** sufficient.

### `pushdown-automata-and-context-free-languages`

This pair is sufficient after D10-1. The repaired TC-7 scaffold keeps the
PDA/CFG equivalence spine intact and narrows the deterministic block honestly:
PDAs, configurations, the two acceptance modes, their equivalence, CFG-to-PDA,
the fragment-variable grammar, PDA-to-CFG, `PDA = CFL`, deterministic PDAs, the
unique-computation lemma, the unambiguity route, complement closure, and the
two repaired false statements. The B page remains real: a CFG-to-PDA witness,
the `a^n b^n` deterministic/unambiguous example, and the naive-complement
counterexample.

The source form is sufficient on the current bytes: `lecture-notes, textbook`.
Gallier backs the PDA core and the unambiguity-preserving fragment grammar, and
Kozen backs the deterministic PDA conventions, complement closure, unique-run
observation, and the exact state-swapping failure mode. The only owner-level
scope row is Gallier's sentence that some CFLs are not DCFLs. The current
scaffold correctly repaired around that claim, and the live plan still names no
exact later page for a specific non-DCFL separation witness, so the row stays
`owner-decision` without making page `593` insufficient.

**Verdict:** sufficient.

### `turing-machines-configurations-and-computation`

This pair is sufficient after D11-1. The TC-9 route is otherwise clean on the
current bytes: deterministic one-tape machines, the finite-support tape
convention, configurations, the one-step relation, unique successors,
initial/accepting/rejecting configurations, halting/divergence, recognized and
decided languages, computed partial functions, multitape and nondeterministic
variants, fixed-machine computation-history decidability, configuration graphs,
acceptance-as-reachability, and the two intended false statements. The B page
gives an explicit accepting-history check, a branching configuration-graph
example, and the immediate-rejection counterexample.

The source form is sufficient on Sunday, August 30, 2026:
`textbook, textbook, course-notes`. Savage is the main source for the base TM
model, language/function semantics, variants, and configuration graphs; Open
Logic supplies the clean one-step/run/halting conventions; Sipser Lecture `10`
backs the history-encoding and local-checking route for
`prop-valid-computation-histories-are-decidable`. Every deferred row on this
page lands exactly on a later live computability page:
`robust-machine-models-and-universal-computation` at order `599` or
`post-correspondence-and-language-undecidability` at order `607`. The remaining
out-of-scope rows are genuine convention choices, not missing current results.

**Verdict:** sufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-25 --group d` produced
`13` pending rows. They are now resolved in
`research/frontier-25-alpha-d-scope-decisions.json` as:

- `stands`: `12` rows
- `owner-decision`: `1` row

The single owner-level row is:

- TC-7 / Gallier sentence that some context-free languages are not deterministic
  context-free languages

That row is a real extension with no exact later home on the current live
computability plan. Everything else closes as `stands`: the TM-model and
multitape rows defer exactly to TC-10, the PCP/ALLCFG rows defer exactly to
TC-14, and the acyclicity, unary-coding, ELBA, and stronger-grammar rows are
honest out-of-scope exclusions rather than missing current authoring seams.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs check --run frontier-25 --group d`
  -> `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-10.coverage.json research/frontier-25-batch-11.coverage.json --require-destination`
  -> `coverage-checklist: 3 page(s), 134 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-10.pages.json research/frontier-25-batch-11.pages.json`
  -> `content-policy: 57 scoped item(s), 0 error(s), 0 warning(s)`
- focused local closure audit over the current group-d manifests
  -> `0` missing prerequisite homes, `0` forward-order deps, `0` foreign examples-page deps
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; the printed `redundant-prereq` notices are repository-wide advisories
     and do not expose a blocking defect inside group `d`

## Final verdicts

Group `d` has three sufficient A pages on the current Sunday, August 30, 2026
bytes. No split is owed: the A-page counts are `15`, `17`, and `16`, all below
the Step-3 ceiling.
