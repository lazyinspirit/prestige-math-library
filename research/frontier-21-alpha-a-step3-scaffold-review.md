# frontier-21 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1`, `5`, and `9`: GT-5, GT-13, RT-1, and MA-8. I
read the current `research/frontier-21-batch-{1,5,9}.pages.json`,
`.coverage.json`, and `.notes.md` artifacts against the controlling design
sections in `research/plan-group-theory-track.md`,
`research/plan-algebra-track-expansion.md`,
`research/plan-category-theory-track.md`, and the live
`research/plan-spec.json`.

All four A pages are now **sufficient** for authoring on the current bytes.
Two in-scope scaffold defects were repaired during this review. The refreshed
scope ledger produced 29 pending declines; those now resolve as **28**
`stands` rows and **1** `owner-decision` row.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `subgroups-of-free-groups-and-schreier-rewriting` | 1 | 21 | **sufficient** | GT-5 route closes after B1-1 repair |
| `amenable-groups-and-folner-criteria` | 1 | 29 | **sufficient** | GT-13 route closes; one owner-level scope row remains honest |
| `the-group-algebra-and-representations` | 5 | 24 | **sufficient** | RT-1 route and scope boundaries hold as written |
| `abelian-categories` | 9 | 55 | **sufficient** | MA-8 route closes after B9-1 repair |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B1-1 | `subgroups-of-free-groups-and-schreier-rewriting` | high | repaired in manifest |
| B1-2 | `amenable-groups-and-folner-criteria` | moderate | `owner-decision` stands |
| B9-1 | `abelian-categories` | high | repaired in manifest |

### B1-1 — repaired: GT-5 carried one illegal later-page dependency and one hidden choice boundary

`lem-spanning-trees-and-schreier-systems-correspond` depended on
`def-spanning-tree`, whose home page `trees-forests-and-spanning-trees` is at
order `209`, far later than GT-5 at order `71.009`. That is a real forward
prerequisite, not a harmless naming preference. The same manifest also had
`thm-nielsen-schreier-with-an-explicit-basis` titled as an unconditional theorem
even though GT-5's design explicitly says the arbitrary-rank clause is under
AC and the finite/countable clauses carry weaker choice boundaries.

I repaired `research/frontier-21-batch-1.pages.json` in the smallest coherent
way: item 4 now treats the rooted spanning-tree notion locally in its strategy
instead of depending on the later graph-theory definition, and item 11 now uses
an explicit choice-boundary title plus `def-axiom-of-choice` /
`def-countable-choice` dependencies. After that edit, the local closure audit
reports zero missing prerequisite homes in the group-a manifests.

### B1-2 — GT-13's stronger subgroup Følner-sequence theorem is a real owner-level scope decision

The only pending GT-13 decline is Druțu-Kapovich Proposition 16.76 on extracting
subgroup Følner sequences from ambient ones. The current amenability page does
not need it: the live scaffold already proves subgroup amenability, proves the
ordinary countable Følner-sequence theorem, and marks the uncountable sequence
formulation false. I found no exact later page id in the current
`plan-spec.json` for this stronger quantitative refinement, so this row is not
a normal later-page `stands` defer. It correctly remains `owner-decision`.

### B9-1 — repaired: MA-8 underdeclared earlier prerequisites

The MA-8 notes recorded the design-vs-spec drift but kept the manifest
`requires` at the single spec edge
`preadditive-and-additive-categories-and-biproducts-examples`. On the actual
current bytes that was not enough. The page and its B companion spend published
results homed on earlier pages outside that closure:

- `prop-abelian-groups-are-z-modules` on `modules-over-a-pid-and-canonical-forms`
  (order `110`)
- `thm-localisation-of-modules-is-exact` on
  `localisation-of-modules-and-support` (order `111.003`)
- `def-topological-group` on `uniform-spaces` (order `279`)

I repaired `research/frontier-21-batch-9.pages.json` by adding the minimal
earlier `requires` needed for the local closure to hold:
`localisation-of-modules-and-support` and `uniform-spaces`. With the local A/B
overlay, the group-a closure audit now reports zero missing prerequisite homes.
This is an in-scope backward-prerequisite repair, not a routing or reading-order
change.

## Page review

### `subgroups-of-free-groups-and-schreier-rewriting`

The GT-5 page is otherwise well-shaped and source-grounded. The Schreier-graph,
transversal, generator, rewriting, Nielsen-Schreier, rank-formula,
Reidemeister-Schreier, finite-presentability, Marshall Hall, and boundary
false-statement spine is present and honest. The design-promised duplicate
finite-generation corollary was correctly omitted in favor of the already
published item on disk, and the two deferred rows both have exact later homes:
the tree-action proof on `simplicial-trees-and-group-actions` and subgroup
separability on `inverse-systems-profinite-groups-and-completion`.

After B1-1, no closure defect remains.

**Verdict: sufficient.**

### `amenable-groups-and-folner-criteria`

The GT-13 route closes as designed. The page has means, permanence, the locally
finite definition and directed-union lemma needed for the solvable/locally
finite corollary, the Følner criterion with explicit choice bookkeeping, the
countable Følner-sequence theorem, subexponential growth, paradoxical
decompositions, Tarski, nonamenability of `F_2`, quasi-isometry invariance, and
the intended boundary examples and false statements. The notes' two local
additions are real closure work, not padding.

The only scope pressure is Proposition 16.76, and that is now explicitly
recorded as `owner-decision` because the live plan still names no exact later
page for it.

**Verdict: sufficient.**

### `the-group-algebra-and-representations`

RT-1 is structurally clean. The arbitrary-commutative-ring group-ring and
`G`-module seam is present before the field-valued representation language, the
dictionary theorem is load-bearing and explicit, Schur is split correctly into
the always-valid and splitting-field / algebraically-closed consequences, the
finite-abelian one-dimensionality theorem is stated over a splitting field, and
the B page witnesses are the right low-cost examples. The notes' route change
away from trigonometric roots of unity is correct, and no load-bearing forward
reference is added.

All 21 scope declines on RT-1 are honest: 14 land on RT-2's Maschke /
semisimplicity / Wedderburn page, 3 land on RT-4's induction page, and 4 are
real out-of-scope exclusions. None hides a missing prerequisite for the current
page.

**Verdict: sufficient.**

### `abelian-categories`

After B9-1, the MA-8 route is sufficient. The page constructs image and
coimage before stating AB2, keeps the Freyd axioms as a theorem block rather
than the working definition, includes the pullback-of-an-epimorphism theorem as
the intended load-bearing bridge to MA-10, and carries the correct source mix
for AB1/AB2, Freyd/Mitchell, exact functors, module examples, and the
Freyd-Mitchell remark. The contingent quiver A-theorem was correctly dropped,
and the B page's quiver example now depends only on the local functor-category
theorem plus abelian groups.

The five scope declines are also honest on the current plan: Stacks
Lemmas 12.5.15, 12.5.16, and 12.5.17 have exact later homes on MA-10 / MA-11;
Tan's intermediate Theorem 7.15 is genuinely out of scope; and Grothendieck's
quotient-category section remains outside MA-8.

One nonblocking caution remains exactly as the design states it: the false
statement `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks`
still needs either a verified counterexample from published material or a
remark-level downgrade at authoring. I do **not** fail the scaffold on that
point because the fallback is explicit in the controlling MA-8 design and the
item has no outgoing dependencies.

**Verdict: sufficient.**

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-21 --group a` produced
29 pending rows. They are now resolved in
`research/frontier-21-alpha-a-scope-decisions.json` as:

- `stands`: 28 rows
- `owner-decision`: 1 row (`amenable-groups-and-folner-criteria` /
  Proposition 16.76)

The later-page `stands` destinations are current and exact on disk:

- `maschkes-theorem-and-complete-reducibility` — order `145`
- `induced-representations-and-frobenius-reciprocity` — order `149`
- `simplicial-trees-and-group-actions` — order `302.009`
- `inverse-systems-profinite-groups-and-completion` — order `302.013`
- `exactness-and-the-member-calculus` — order `365.019`
- `the-diagram-lemmas-in-an-abelian-category` — order `365.021`

## Mechanical checks on the current bytes

- `node tools/scope-decisions.mjs check --run frontier-21 --group a`
  — `scope-decisions: 29 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-21-batch-1.coverage.json research/frontier-21-batch-5.coverage.json research/frontier-21-batch-9.coverage.json --require-destination`
  — `coverage-checklist: 4 page(s), 150 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-9.pages.json`
  — `content-policy: 163 scoped item(s), 0 error(s), 0 warning(s)`.
- Local prerequisite-closure audit over the current group-a manifests
  — `local-closure-audit: 0 missing prerequisite homes across group-a manifests`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — passes on the live plan; only the repository's standing
  `redundant-prereq` advisories remain.
- `git diff --check -- research/frontier-21-batch-1.pages.json research/frontier-21-batch-9.pages.json`
  — clean.
