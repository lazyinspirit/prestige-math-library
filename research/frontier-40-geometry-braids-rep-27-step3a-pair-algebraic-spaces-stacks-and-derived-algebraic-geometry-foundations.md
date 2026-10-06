# Step 3a scope report — algebraic spaces, stacks and derived AG foundations

- Run: `frontier-40-geometry-braids-rep-27`
- Pair: A `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`
  (order 907) / B `...-examples` (order 908), batch 23
- Reviewer role: alpha, scope review only (no item approvals, no owner records,
  no scaffold edits)
- Decision recorded: `sufficient` (non-owner scope receipt written by
  `tools/step3-decisions.mjs record-scope`)

## Scope determination and evidence

The pair adequately covers the designed subject. Every design element of
AG-SPACE-1 (`research/plan-algebraic-geometry-expansion-track.md` L274) is
present with its exact ID:

| Design A item | Manifest |
|---|---|
| `def-algebraic-space-as-fppf-sheaf` | batch 23 A page, level 3 |
| `thm-algebraic-space-from-etale-equivalence-relation` | level 9 |
| `def-algebraic-stack-and-inertia` | level 6 |
| `def-derived-scheme-and-cotangent-complex` | level 10 |
| B `ex-scheme-as-algebraic-space`; `ex-classifying-stack-of-a-finite-group`; `cex-quotient-stack-need-not-be-a-scheme` | B page, levels 5/7/8 |

Inventory is 50 A + 3 B = 53 items (21 definitions, 25 lemmas, 4 theorems,
2 examples, 1 counterexample), well under the per-page cap. Checked at
statement level:

- The design instruction "select one precise level; do not conflate sheaf
  quotients with representable spaces/stacks" is honoured: the algebraic-space
  definition is the Stacks 65.6.1 fppf-sheaf level, the quotient sheaf is kept
  separate (`def-quotient-fppf-sheaf-of-a-pre-relation`), the stack definition
  is stated for stacks in groupoids, and the B counterexample records where the
  three levels diverge.
- "Commission its cotangent-complex portion before AG-DEF-1" is satisfied; the
  downstream batch-24 page (`deformation-theory-of-schemes-and-obstruction-spaces`,
  order 909) consumes the batch-23 cotangent items, in particular
  `def-cotangent-complex-of-a-ring-map`,
  `lem-cotangent-complex-resolution-independence`,
  `lem-cotangent-complex-h0-and-polynomial-case`,
  `def-standard-resolution-of-a-ring-map` and
  `def-derived-scheme-and-cotangent-complex`.
- Manifest metadata matches the plan exactly for both pages (title, kind,
  category `scheme-theory`, companion, orders 907/908, `requires`; no missing
  statement/strategy/deps/level fields).

## Dependency and prerequisite resolution

- Declared dependency edges: 386 edges, 112 distinct suppliers. 63 suppliers
  are published library items (`status: published`, strict check); 49 are
  current-run scaffold items, of which 48 are on this own pair and exactly one
  is outside it: `def-quotient-sheaf-and-representable-quotient` (batch 15),
  used only by `cex-quotient-stack-need-not-be-a-scheme`. **0 dependency
  targets are absent from both the published library and the current
  scaffold.**
- Every `[[wikilink]]` in every statement is present in that item's `deps`
  (0 mismatches; 202 deps carry no inline link, which is normal).
- All six plan page requirements are available: five published pages
  (`fibre-products-base-change-and-scheme-theoretic-fibres`,
  `finite-proper-and-projective-morphisms`,
  `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`,
  `flat-smooth-and-etale-morphisms`, `derived-categories`) plus the in-run
  batch-15 page `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`,
  whose scope review is current and `sufficient`. The batch-15 supplier
  statement (field-level quotient-sheaf convention with explicit AC) supplies
  exactly the comparison the counterexample uses, so the recorded open
  cross-batch rows are reconciliation items, not missing prerequisites.
- Fresh checks (all read-only): `item-dependency-levels.mjs check --run` exit 0
  (892 items, 54 pages, max level 39); `coverage-checklist.mjs` 0 errors/0
  warnings; `manifest-deps.mjs` 0 errors; `source-fetch-check.mjs` 24/24
  resolved; `step1-decisions.mjs check --run` 892/892 ready, `closed: true`;
  `step3-decisions.mjs check --phase scope` currently lists this pair among the
  seven still-open pairs, which this receipt closes.

Source coverage: 24 fetch-verified sources (Stacks chapters 4, 8, 14, 21 §39,
34, 35, 37, 65, 92, 94; Vistoli; Toën; HAG II; Goerss–Schemmerhorn;
Hovey; HA; HTT; DHI; Beke; Dugger–Isaksen), 123 harvested results disposed
73 included / 28 inline / 19 out-of-scope / 3 deferred. The independent-text
requirement is met for the space/stack foundations by Vistoli; the derived
portion follows the owner-authorized exact-authoritative-theorem route
(Stacks 92 plus Hovey/HA/HTT applications), and the deferred presheaf-model
sources are not load-bearing on that route.

## Flagged unmet-prerequisite candidates (findings, not scope failure)

These are absent from both the published library and the current scaffold, so
they are recorded here and in the decision reason. Under the owner direction
"required local helper items may be supplied under the ordinary workflow
rules", the step-3b author can create them on this A page and place them before
their consumers; nothing below changes the selected pair scope.

1. **Constant group scheme `G_k` for finite `G` is never constructed.**
   Consumed by both B items (`ex-classifying-stack-of-a-finite-group`,
   `cex-quotient-stack-need-not-be-a-scheme`), which say "viewed as the
   constant group scheme $G_k$ over $k$" and cite only
   `def-group-scheme-over-a-field` — that published definition introduces
   group schemes of finite type over a field but does not build
   $\coprod_{g\in G}\operatorname{Spec}k$ with its group law (nor its finite
   étale structure, used for the torsor argument). Evidence of absence: no item
   file or library page contains "constant group scheme"; the phrase occurs in
   this run only at use sites (batches 18, 19, 23, 27). Required claim for a
   helper: for finite `G` and field `k`, the coproduct `G_k` is a group scheme
   of finite type (indeed finite étale) over `k` with `G_k(T)` the locally
   constant `G`-valued maps, built from the published coproduct of schemes and
   `def-group-scheme-over-a-field`. Recommendation: add a helper definition on
   the A page (e.g. `def-constant-group-scheme-over-a-field`) before the two B
   items, or construct it explicitly inside them.

2. **Derived (locally) ringed spaces and their homotopical category are never
   defined.** Consumed by `def-derived-scheme-and-cotangent-complex`, whose
   statement says morphisms "are taken in the homotopical category of derived
   locally ringed spaces", calls $\pi_i\mathcal O_X$ quasi-coherent modules,
   and calls $L_{X/Y}$ a quasi-coherent derived $\mathcal O_X$-module.
   Evidence of absence: searches over `items/`, `library/` and all 892 run
   scaffold items find no occurrence of "derived locally ringed", "derived
   ringed space", "simplicial ringed space", "homotopical category" or
   "quasi-coherent derived module" outside this consumer's own statement; no
   published item defines derived schemes at all. Uncertainty: the owner's
   final review (`owner-group-actions/derived-final-review.md`) states the
   item's proof route "compose[s] to the commissioned derived locally
   ringed-space interface", i.e. the interface may be intended as
   item-internal content rather than a separate definition. Recommendation:
   owner or step-3b either adds a helper definition (derived ringed/locally
   ringed spaces, weak equivalences, derived modules) placed before this item,
   or records that the item-internal construction is the intended convention;
   the downstream batch-24 consumer `def-cotangent-complex-of-a-scheme-morphism`
   then inherits whichever is chosen.

3. **Minor: "pretopology"/"site" is used as vocabulary without a general
   definition** (`def-fppf-topology-on-schemes`, `def-category-fibred-in-groupoids`,
   `def-descent-data-and-stack-in-groupoids`). The fppf site is effectively
   defined operationally (category of `S`-schemes plus covering families with
   the stated base-change/composition axioms), and every consumer quantifies
   only over the fppf site, so this is self-contained in practice; a one-line
   helper or an explicit inline definition would remove the dangling term.

4. **Coverage-ledger gaps (evidence bookkeeping, not mathematical gaps).**
   Five of the 53 items have no `contents` mapping: `lem-fppf-sheafification-exists`
   (strategy cites Stacks Sites and Sheaves 7.10.10/7.10.11/7.10.12, tags
   00WB/00WG/00WH — that chapter is not among the 24 fetched sources; Vistoli
   §2.3.7 is fetched but not mapped to this item), `def-representable-morphism-of-presheaves`
   (strategy cites tags 02W9/025V = Stacks 65.3.1/65.5.1, while the recorded
   Chapter-65 locator covers only 65.6–65.10), `def-quotient-fppf-sheaf-of-a-pre-relation`
   (locally scaffolded definition; only cross-referenced), and the two B items
   (the affine-line example is a special case of a mapped lemma; the quotient
   counterexample is locally proved). Recommendation for step 3b/4: extend
   coverage locators/mappings (or add the Sites and Sheaves chapter to
   coverage) so the ledger reflects the sources the strategies actually use.

5. **Optional enrichment (for the owner only; not a design omission).** The B
   page demonstrates scheme ⊆ algebraic space and stack ⊄ scheme, but no
   example of an algebraic space that is not a scheme; the natural source
   (Stacks 65.14, tag 02Z0, free actions and non-scheme algebraic spaces) is
   explicitly marked out-of-scope in the coverage. The design's B inventory is
   exactly the three present items, so this is recorded only as a possible
   owner enrichment, not as insufficient scope.

## Not in scope of this review

Proof correctness was not assessed. The historical owner holds on
`lem-cotangent-complex-resolution-independence` and
`def-derived-scheme-and-cotangent-complex` are recorded as resolved in the
current state (step-1 readiness 892/892), but that closure rests on the owner's
authorized authoritative-theorem route and remains subject to native authoring
and later independent reviews; finding 2 above is the scope-level residue a
reader of the final definition will meet.

## Decision

`sufficient` — the planned definitions, results and examples cover the designed
subject at the chosen level, all dependencies resolve inside the published
library plus the current scaffold, and the page requirements are available; the
findings above are prerequisite/coverage observations handed to step 3b/owner,
and none of them requires a pair merger or a change to the selected pair scope.

Report path (also in the decision reason):
`research/frontier-40-geometry-braids-rep-27-step3a-pair-algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations.md`
