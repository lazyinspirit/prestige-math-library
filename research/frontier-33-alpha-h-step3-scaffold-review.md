# frontier-33 — Alpha group `h` — Step 3 scaffold review

Group `h` covers batches `19` and `20`: SET-1, SET-4, SET-6, and SET-8. I read both batch manifests, both coverage files, both complete batch notes, the corresponding design sections in `research/plan-set-theory-completion-track.md`, the current `research/plan-spec.json`, and the exact published dependency statements needed to audit page closure.

The four A/B pairs are sufficient for authoring after one licensed backward-prerequisite repair. `weak-choice-principles-and-sierpinskis-theorem` now explicitly requires the published page `compactness-in-metric-spaces`, which owns `def-dependent-choice`. No new page, forward edge, reading-order change, published-content edit, or plan edit was made.

| A page | batch | A items | B items | verdict |
|---|---:|---:|---:|---|
| `formal-set-theoretic-syntax-structures-and-satisfaction` | 19 | 19 | 5 | **sufficient** |
| `well-founded-relations-rank-and-the-cumulative-hierarchy` | 19 | 30 | 5 | **sufficient** |
| `weak-choice-principles-and-sierpinskis-theorem` | 20 | 26 | 6 | **sufficient** |
| `club-stationary-sets-and-pressing-down` | 20 | 29 | 7 | **sufficient** |

Machine half: `research/frontier-33-alpha-h-step3-verdicts.json`.

## Finding and repair

### H-1 — repaired: the weak-choice page needed the published home of dependent choice

Four planned items genuinely cite `def-dependent-choice`:

- `def-multiple-and-dependent-multiple-choice`
- `thm-choice-implies-dependent-implies-countable-choice`
- `lem-starting-point-free-dependent-choice`
- `thm-dependent-choice-detects-non-well-orders`

The exact published definition is in `items/def-dependent-choice.md`, whose home is `library/topology/compactness-in-metric-spaces.md`. That page is order `120`; the new weak-choice A page is order `665`. The prior manifest closure contained `cardinal-arithmetic-and-cofinality` and `filters-and-ultrafilters` but did not reach the definition's home page.

This was a missing backward prerequisite, so Step 3 licenses the narrow repair. I added `compactness-in-metric-spaces` to the A-page `requires` list in `research/frontier-33-batch-20.pages.json` and recorded the repair in `research/frontier-33-batch-20.notes.md`. The original two design prerequisites remain explicit. A scratch-only overlay of all four owned pairs into the current plan now passes full plan validation; the added edge creates neither a cycle nor a forward reference. The canonical plan remains untouched for its later splice stage.

## Page review

### `formal-set-theoretic-syntax-structures-and-satisfaction`

The pair is author-ready. Its route is closed from finite strings and structural recursion through terms, formulas, unique readability, capture-avoiding substitution, structures and assignments, set-sized satisfaction, the substitution lemma, relativization, definability, and Tarski's undefinability theorem. The statements preserve the important boundaries: signatures are arbitrary sets rather than tacitly countable, finite strings are finite maps, satisfaction is defined only for set-sized structures, and no uniform truth predicate for the ambient universe is asserted.

The source stack is sufficient for that exact route: Moschovakis, *Logic Notes*, §§1B–1C, Problems x1.1–x1.4, and Appendix app3–app5; Weiss, *Set Theory*, Chapter 1 and the relevant portion of Chapter 11; and Schlicht, *Mathematical Logic*, Definition 1.4.1 and §2.4. Soundness is correctly deferred to `deduction-soundness-completeness-and-compactness` at order `657`, and the Lévy hierarchy is correctly deferred to `reflection-absoluteness-and-elementary-submodels` at order `663`.

**Verdict:** sufficient.

### `well-founded-relations-rank-and-the-cumulative-hierarchy`

The pair is author-ready. The item graph distinguishes set relations from setlike class relations and supplies the predecessor-closure route needed for class recursion. It covers well-founded induction and recursion, accessible pointed graphs and decoration, transitive closure, rank, the cumulative hierarchy, the Foundation equivalences with their choice qualifications, Mostowski collapse, hereditary-size classes, and a carefully limited Grothendieck-universe orientation.

Boundary cases are explicit. The converse from absence of infinite descending sequences uses a supplied choice function; ambient Foundation is not misused to prove well-foundedness of an arbitrary relation. The hierarchy-exhaustion argument uses Foundation on a set-sized bad part of a transitive closure. `H_κ` is defined choice-freely by injection of `TC({x})` into an ordinal below `κ`, and inaccessible-cardinal existence is not smuggled into the local development.

Marks §§6–7 and Weiss Chapter 10 cover the recursion, transitive-closure, rank, hierarchy, Foundation, and collapse spine. Kozen–Ruozzi supplies the accessible-pointed-graph boundary, Shulman the universe orientation, and Moschovakis the Russell-paradox locator. The inaccessible-universe existence and strong-limit characterization rows correctly land on `large-cardinals-measures-and-elementary-embeddings` at order `699`; non-well-founded bisimilarity is honestly out of scope.

**Verdict:** sufficient.

### `weak-choice-principles-and-sierpinskis-theorem`

The pair is author-ready after H-1. It works in ZF, including Foundation, and keeps injection comparison separate from any unlicensed assignment of alephs to arbitrary sets. The route covers choice for pairs and countable finite choice, multiple and dependent multiple choice, the AC/DC/countable-choice implications, prescribed-start DC, the DMC equivalence, finite-character/Tukey choice, Dedekind finiteness, countable unions, Hartogs bounds, the finite-sequence diagonal, local GCH, Specker's theorem, and the passage from global GCH to AC.

The potentially delicate steps have explicit witnesses. The DMC converse orders each selected finite level using countable finite choice and recursively takes an allowed least successor. The Hartogs construction never selects representatives. The finite-sequence diagonal begins with a supplied countable subset and extracts the first coordinate outside it. The Specker chain uses the exact local-CH dichotomy and the proved iterated-power-set bounds rather than assuming arbitrary cardinal comparability.

Jech §§2.1, 2.4, and 9.1 supplies the weak-choice backbone; Morillon and alg-d give the complete DMC routes; Carneiro's full paper and Caicedo lectures 3–5 cover the local-GCH and Specker argument. The seven permutation-model separations remain deferred to `permutation-models-and-transfer-to-zf` at order `689`; the five analysis applications remain deferred to `choice-strength-in-baire-urysohn-stone-and-tychonoff` at order `697`; the Borel row lands at order `673`. The nine genuine out-of-scope rows are stronger side results unused by the selected proof spine.

**Verdict:** sufficient.

### `club-stationary-sets-and-pressing-down`

The pair is author-ready. It consistently assumes ZFC and a regular uncountable `κ`. Closure is imposed at nonzero limit points below `κ`, so neither zero nor the ambient ordinal is accidentally required. The route includes the club filter, fewer-than-`κ` intersections, diagonal intersections, Fodor's lemma, normality, Solovay splitting, cofinality strata, normal-function fixed points, trace and nonreflection, square/club-guessing orientation, and elementary-submodel clubs.

The Solovay proof retains both cases and the corrected domain in Lietz's Claim 5.18. Trace is restricted to ordinals of uncountable cofinality. Fixed-point iteration handles early stabilization. The elementary-club construction works directly with structures on universe `κ` in a finitary language of size below `κ`; it does not import an unbuilt general `H(θ)` or collapse theorem. Filter axioms are stated locally because this page intentionally does not require the filter page.

Lietz §§5.1–5.3 supplies the pressing-down, normality, and splitting spine; Vasey and Williams independently cover club-filter facts and `κ`-completeness; the archived Welch Definition 2.11 through Lemma 2.13 covers normal functions; Kamensky Theorem 1.4.7 covers elementary clubs; Inamdar–Rinot and Rinot support the clearly labelled club-guessing, square, and trace orientation. The club-guessing theorem is deferred to `set-theoretic-trees-delta-systems-and-diamond` at order `671`, the choiceless warning to `symmetric-collapse-and-ultrafilter-free-models` at order `693`, and the saturation orientation to the large-cardinal page at order `699`.

**Verdict:** sufficient.

## Scope decisions

The required refresh initially produced `31` pending rows. I checked every exact row against its source locator, the current manifest item graph, the SET design clause, and the current plan destination, then resolved the durable register as follows:

- `stands`: `31`
- `owner-decision`: `0`
- deferred: `22`
- out of scope: `9`

The deferred destinations all exist in the current plan: orders `657`, `663`, `671`, `673`, `689`, `693`, `697`, and `699`. The batch-20 low-yield warning is therefore reviewed rather than waived: all of its declined rows have exact durable decisions, and none conceals a prerequisite needed by the selected authoring routes.

## Checks run on current bytes

- `node tools/scope-decisions.mjs refresh --run frontier-33 --group h` initially reported `31` declines and `31` pending decisions.
- `node tools/scope-decisions.mjs check --run frontier-33 --group h` now reports `31` current declines and `0` errors.
- `node tools/manifest-deps.mjs` on batches `19` and `20` reports respectively `59` and `68` items, with `0` normalized dependencies and `0` errors.
- `node tools/content-policy.mjs ... --manifest-only` reports `0` errors and `0` warnings for both manifests.
- `node tools/coverage-checklist.mjs ... --require-destination` reports batch `19`: `2` pages, `101` harvested results, `0` errors, `0` warnings; batch `20`: `2` pages, `161` harvested results, `0` errors, and the one reviewed low-yield warning.
- `node tools/source-fetch-check.mjs --coverage ...` reports `8/8` sources fetch-verified for batch `19` and `14/14` for batch `20`.
- `node tools/validate-plan.mjs research/plan-spec.json` passes the current baseline: no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the `844` pages with item lists.
- Scratch-only plan overlay replacing the four current page-level A/B records with the batch manifests exits `0`: no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the resulting `852` pages with item lists. Its only new advisory is that the retained direct `filters-and-ultrafilters` edge is transitively redundant through `compactness-in-metric-spaces`; retaining it preserves the explicit SET-6 design route.

No unresolved authoring obligation or owner decision remains for group `h`. Step 4 may splice the reviewed manifests into the canonical plan.
