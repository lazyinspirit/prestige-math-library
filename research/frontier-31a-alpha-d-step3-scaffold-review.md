# frontier-31a — Alpha group `d` — Step 3 scaffold review

Group `d` covers batch `21` (TC-17 and TC-24) and batch `22` (TC-25). I
reviewed their manifests, coverage, and notes against the controlling design
blocks in `research/plan-computability-theory-track.md:757-790`, `:1018-1050`,
and `:1053-1088`, and against the current `research/plan-spec.json` records at
orders `613`–`614`, `627`–`628`, and `629`–`630`.

| A page | batch | A/B items | verdict |
|---|---:|---:|---|
| `the-arithmetical-hierarchy-and-posts-theorem` | 21 | 18 / 3 | **sufficient** |
| `time-and-space-hierarchy-theorems` | 21 | 15 / 3 | **insufficient** |
| `logarithmic-space-nl-and-reachability` | 22 | 18 / 3 | **insufficient** |

The verdict data is in
`research/frontier-31a-alpha-d-step3-verdicts.json`. The two insufficient rows
are source- and result-specific; they are authoring blockers, not requests for
a new page, a forward edge, or a change to reading order.

## Manifest inventory and dependency closure

- **TC-17 A:** `def-bounded-arithmetic-formula`,
  `def-sigma-n-pi-n-and-delta-n-sets`,
  `lem-bounded-quantifiers-preserve-primitive-recursiveness`,
  `thm-sigma-one-sets-are-exactly-ce-sets`,
  `cor-delta-one-sets-are-exactly-decidable`,
  `lem-prenex-normalization-preserves-level`,
  `def-arithmetical-level-completeness`, `thm-halting-is-sigma-one-complete`,
  `thm-totality-is-pi-two-complete`,
  `def-relative-computability-and-enumerability`,
  `lem-oracle-computation-has-a-finite-query-witness`, `thm-posts-theorem`,
  `lem-diagonal-set-at-each-level`, `thm-arithmetical-hierarchy-is-strict`,
  `def-limit-computable-function`, `thm-shoenfield-limit-lemma`,
  `fs-sigma-n-and-pi-n-are-disjoint`, and
  `fs-limit-computable-has-a-known-stabilization-stage`. Its external IDs are
  `def-primitive-recursive-function`,
  `def-computable-and-partial-computable-function`,
  `def-decidable-and-recognizable-language`, `thm-kleene-normal-form`,
  `def-computable-many-one-reduction`,
  `def-universal-and-acceptable-numbering`,
  `def-kleene-t-predicate-and-output-function`, `thm-smn-parameter-theorem`,
  `def-turing-reduction`, and `thm-halting-is-recognizable-and-undecidable`.
  Its B leaf is `ex-sigma-one-sets-are-exactly-ce-sets`,
  `ex-shoenfield-limit-lemma`, and `cex-sigma-n-and-pi-n-are-disjoint`.
- **TC-24 A:** `def-efficient-universal-simulation-with-clock`,
  `lem-effective-enumeration-of-clocked-machines`,
  `lem-time-diagonal-language-respects-its-budget`,
  `thm-deterministic-time-hierarchy`, `cor-p-is-properly-contained-in-exp`,
  `thm-nondeterministic-time-hierarchy`,
  `lem-space-bounded-universal-simulation`,
  `lem-space-diagonal-machine-halts`, `thm-deterministic-space-hierarchy`,
  `cor-l-is-properly-contained-in-pspace`, `def-language-padding`,
  `lem-padding-transfers-time-bounds`,
  `thm-gap-and-union-theorems-for-complexity-bounds`,
  `prop-hierarchy-theorems-do-not-separate-p-from-np`, and
  `fs-unrestricted-diagonalization-respects-any-bound`. Its external IDs are
  `def-effective-encoding-of-turing-machines`,
  `def-time-and-space-constructible-function`,
  `def-dtime-ntime-dspace-and-nspace`,
  `def-asymptotic-resource-comparison`, `def-p`, `def-exp-and-nexp`,
  `lem-space-bounded-machines-have-exponentially-many-configurations`,
  `def-pspace-and-npspace`,
  `def-computable-and-partial-computable-function`, and `def-np-by-verifiers`.
  Its B leaf is `ex-time-diagonal-language-respects-its-budget`,
  `ex-hierarchy-theorems-do-not-separate-p-from-np`, and
  `cex-unrestricted-diagonalization-respects-any-bound`.
- **TC-25 A:** `def-read-only-input-logspace-machine`, `def-l-and-nl`,
  `lem-logspace-machines-have-polynomially-many-configurations`,
  `def-logspace-many-one-reduction`, `lem-logspace-reductions-compose`,
  `def-directed-st-connectivity`,
  `thm-directed-st-connectivity-is-nl-complete`,
  `thm-nl-is-contained-in-dspace-log-squared-n`,
  `def-inductive-reachable-vertex-count`,
  `lem-reachability-count-is-verifiable-in-nl`,
  `lem-nonreachability-has-an-inductive-counting-certificate`,
  `thm-immerman-szelepcsenyi-nl-equals-conl`,
  `cor-nspace-is-closed-under-complement-above-logspace`,
  `def-logspace-uniform-circuit-family`,
  `def-p-complete-under-logspace-reductions`,
  `lem-polynomial-time-computations-have-logspace-uniform-circuits`,
  `thm-circuit-value-is-p-complete`, and
  `fs-nl-equals-conl-follows-by-state-swapping`. Its external IDs are
  `def-dtime-ntime-dspace-and-nspace`, `def-multigraph-loop-and-digraph`,
  `def-directed-walk-trail-path-cycle-and-strong-connectivity`, and
  `thm-savitchs-theorem`. Its B leaf is `ex-logspace-reductions-compose`,
  `ex-circuit-value-is-p-complete`, and
  `cex-nl-equals-conl-follows-by-state-swapping`.

All manifest edges resolve backwards or locally; none targets a B-only item.
The material defects below concern adequacy of an exact source or convention,
not identifier, route-order, or B-page-edge validity.

## Pair review

### `the-arithmetical-hierarchy-and-posts-theorem` — sufficient

TC-17 has the specified predecessor
`acceptable-numberings-smn-and-the-recursion-theorem`, and every external item
edge in the manifest resolves to an earlier item. Its item spine is coherent:
bounded syntax and closure; the Sigma-1/c.e. and Delta-1/decidable base cases;
level completeness, halting, and totality; relative computation with a finite
oracle-use witness; Post's theorem and strictness; then limit computation and
the two bounded false statements. The B examples are leaves of that A spine.

The conventions needed for authoring are stated: finite jumps are defined
within `thm-posts-theorem`, machine/code/computation/function are kept
distinct, reductions are total, and a limit approximation does not contain a
computable modulus. The direct dependencies supply the needed acceptable
numbering, s-m-n, Kleene normal-form, T-predicate, computable reduction, and
halting interfaces.

The source record is adequate. Patey's course notes, §§4.2–4.7 and §§5.1–5.5,
support the oracle-use, hierarchy, Post, strictness, and limit routes; in
particular, Theorem 5.5 gives the finite-jump characterization and Lemma 7.2
gives the limit lemma. Cenzer–Remmel §II.6 independently supplies the
arithmetical-hierarchy, bounded-quantifier, Post, and limit-lemma interfaces.
Both PDFs have current full-text verification in the coverage record.

### `time-and-space-hierarchy-theorems` — insufficient

The time diagonalization route is viable: its clocked universal simulator,
effective enumeration, budget lemma, the deterministic and nondeterministic
time hypotheses, and the `P`-to-`EXP` specialization all have compatible
earlier interfaces. Arora–Barak Theorems 3.1–3.3 and Terwijn §§2.1–2.3 support
those claims. The local padding and false-statement routes are also bounded and
do not require the omitted material.

Two material gaps prevent authoring the whole A page.

1. `thm-gap-and-union-theorems-for-complexity-bounds` promises both abstract
   results, but the current coverage file records only Terwijn §5.6 and
   Theorem 5.6.1, which are Gap-Theorem support. The batch note says it read
   Hartmanis–Hopcroft Theorems 7 and 16, but that source is absent from the
   canonical coverage record; `source-fetch-check` consequently sees four,
   not five, batch-21 sources. The missing exact result is Hartmanis–Hopcroft
   Theorem 16 (Union Theorem), §6, pp. 466–468,
   <https://users.cs.fiu.edu/~giri/teach/5420/f01/papers/p444-hartmanis.pdf>.
   It must be present with its locator, fetch verification, and a disposition
   for this item before the paired theorem can be sourced honestly.

2. The space-hierarchy/L corollary changes model without a bridge. The current
   resource interface counts cells visited across **all** tapes
   (`items/def-worst-case-time-and-space-complexity.md:30-48`), while the
   proposed `cor-l-is-properly-contained-in-pspace` says it will define `L`
   with a read-only, uncharged input tape. The constructibility interface
   expressly does not make a logarithmic-space claim under the all-tapes
   convention (`items/def-time-and-space-constructible-function.md:46-49`).
   Thus the existing deterministic space-hierarchy dependency cannot as
   written yield the planned `L\subsetneq PSPACE` conclusion. The batch needs
   a local, dependency-closed work-space/read-only-input space-hierarchy result
   and its L-versus-PSPACE specialization, grounded in Arora–Barak §3.2 /
   Theorem 3.2 or Terwijn §2.3 / Theorem 2.3.1. This is an in-scope missing
   result, not a reason to add a page or forward-reference batch 22.

The second finding also alerts the owner of the older prerequisite interface:
`thm-savitchs-theorem` currently quantifies over every `s` and invokes the
all-tapes NSPACE definition. I did not alter that foreign item.

### `logarithmic-space-nl-and-reachability` — insufficient

TC-25 otherwise has a strong route. It keeps the current A/B scope and its
declared predecessors `space-complexity-savitch-and-tqbf` and
`graphs-walks-and-connectivity`; it adds the indispensable local
logspace-uniform-circuit bridge before Circuit Value hardness, so the design's
17-item outline is properly closed by 18 A items. The configuration-count,
virtual-tape-composition, STCON, inductive-counting, Immerman–Szelepcsényi,
uniform-circuit, Circuit Value, and B-example sequence is source-supported by
Arora–Barak §§3.2, 3.4, 6.1, and 6.5.2 and by the Harvard inductive-counting
notes. Both source PDFs have current full-text verification in coverage.

The Savitch step is nevertheless not authorable from its stated dependency.
`def-read-only-input-logspace-machine` deliberately excludes the read-only
input head from its logarithmic work-space bound, whereas the existing
`thm-savitchs-theorem` applies the all-tapes NSPACE convention and relies on
the all-tapes configuration count. Its exact statement therefore does not
bridge a language in the page's `NL` to `DSPACE(log-squared n)` in that local
model. The same mismatch infects the stated general NSPACE/coNSPACE clause.
The missing result is a read-only-input/work-tape Savitch simulation theorem,
with the corresponding qualified complement transfer. Arora–Barak §3.3.1 and
§3.4.2 (including Corollary 3.19) are the identified sources. It can be added
inside this A page before `thm-nl-is-contained-in-dspace-log-squared-n`; it
must not be satisfied by a forward edge to the later page's definitions.

## Scope decisions

I refreshed `research/frontier-31a-alpha-d-scope-decisions.json` and resolved
all seven current decline rows as `stands`; `node tools/scope-decisions.mjs
check --run frontier-31a --group d` reports `7` current rows and `0` errors.

- Patey Exercise 7.5, Definition 7.7(ii), and Cenzer–Remmel's modulus/low/high
  material are not needed by the finite-jump, Post, limit-lemma, or local
  nonuniformity proof. Patey Definition 7.7(i) remains inline where the
  modulus notion is actually required.
- The batch-22 PSPACE-collapse corollary belongs to the earlier required space
  page, and Arora–Barak Theorem 6.26's P=NC/P=L consequences are not claimed
  by the selected Circuit Value route.

## Checks and next action

Focused checks on the reviewed bytes passed:

- `manifest-deps`: `60` items, `0` normalized, `0` errors.
- `content-policy --manifest-only`: `60` scoped items, `0` errors/warnings.
- `coverage-checklist --require-destination`: `3` pages, `84` harvested
  results, `0` errors/warnings.
- `source-fetch-check`: batch 21 `4/4` and batch 22 `2/2` sources
  fetch-verified.
- `validate-plan`: the declared page order and asserted dependency graph are
  acyclic with no unresolved IDs, forward references, or B-page dependencies.

Next action: the owning Beta must add the named source coverage and the two
model-compatible local results, then group `d` should refresh this decision
file and recheck the repaired exact bytes. No owner decision, page creation,
forward edge, reading-order edit, published-content change, or judge artifact
was made here.
