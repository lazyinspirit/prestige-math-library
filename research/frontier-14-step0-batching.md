# frontier-14 — Step 0: frontier, batching, seams

Owner instruction, 2026-08-16: *"Start building all A/B pairs for complex
analysis, topology, number theory, linear algebra, and category theory"*, then
*"Build autonomously"*, then *"Learn from all mistakes made from past build
cycles and take proactive steps to avoid repetition."*

## The full standing scope, and why this run is nine pairs

Across the five named categories the plan holds **76 unbuilt A/B pairs**:

| category | A pages planned | built | unbuilt |
|---|---|---|---|
| complex-analysis | 27 | 1 | **26** |
| topology | 30 | 22 | **8** |
| number-theory | 27 | 4 | **23** |
| linear-algebra | 13 | 11 | **2** |
| category-theory | 21 | 4 | **17** |

They are not simultaneously buildable. The frontier rule (`LEVELS.md` §Step 0)
admits an unpublished page **all of whose `requires` are published**; computing
that from disk and iterating gives **19 waves**, sizes
`9, 4, 5, 4, 4, 4, 5, 3, 4, 3, 5, 4, 3, 2, 2, 2, 2, 1, 1`.
This run is **wave 1: nine A/B pairs, eighteen pages.**

**Nine pairs are blocked outside these five categories** and will not be reached
by this campaign alone. Eight are the algebraic-number-theory chain
(`number-fields-rings-of-integers-and-discriminants` →
`prime-ideal-decomposition-ramification-and-the-different` →
`decomposition-inertia-and-frobenius` →
`minkowski-theory-and-number-field-class-groups` →
`dirichlets-unit-theorem-regulators-and-s-units` →
`cyclotomic-arithmetic-and-reciprocity-via-frobenius`, plus
`absolute-values-completions-and-p-adic-numbers` and
`hilbert-symbols-and-the-quadratic-local-global-principle`), whose head needs
`regular-local-rings-and-homological-dimension` from **commutative-algebra**.
The ninth is `the-spectral-theorem-and-singular-value-decomposition`, which needs
`the-fundamental-theorem-of-algebra`. Neither is in scope here; both are
recorded so a later campaign can pick them up rather than rediscover them.

## The batches

Six batches, each at or under the two-A-page cap (`content-policy.mjs
--manifest-only` enforces it). Packing is by prerequisite affinity so seams fall
inside a batch; the three singletons have no affinity to anything else in the
wave, and pairing them with an unrelated subject would cost a Beta two
literatures for no seam benefit.

| batch | A pages | why together |
|---|---|---|
| 1 | `complex-power-series-and-analytic-functions` (305), `contour-integration` (307) | both complex-analysis, both rest on `complex-differentiability-and-cauchy-riemann`; Ahlfors and Stein–Shakarchi serve both |
| 2 | `ascoli-arzela` (285), `stone-weierstrass-general` (287) | the same design block (`plan-topology-track.md` T10), same two prerequisites, one function-space literature |
| 3 | `complete-metrizability-and-baire` (277), `covering-spaces-and-lifting` (293) | both topology; disjoint literatures but a single point-set idiom |
| 4 | `triangularisation-and-jordan-canonical-form` (90) | singleton — linear algebra |
| 5 | `quadratic-residues-and-the-legendre-symbol` (57.003) | singleton — number theory |
| 6 | `reflective-subcategories-and-the-adjoint-functor-theorems` (365.003) | singleton — category theory |

## Cross-batch seams

**Not computable yet, and that is the honest answer.** Seams are counted between
item-level `deps`, and every manifest here carries `items: []` until the Betas
scaffold at step 1. Reporting "0 seams" now would be a vacuous gate of exactly
the kind this run is meant to stop.

What *is* mechanical now is the page-level statement: **no pair in this wave lies
inside another in-wave pair's `requires` closure.** Verified over all nine
closures. So no Beta can legally cite another Beta's work, `validate-plan.mjs`
raises `undeclared-prereq` if one tries, and the batches are genuinely
independent. The item-level seam count is computed at step 2, before splice.

## Design-versus-spec `requires` drift — checked, one real

The failure this check exists to catch: a track design names prerequisites the
spec never declared, the Beta scaffolds against the design, and step 4 fails
`undeclared-prereq` when the citation has already been written.

| page | design source | verdict |
|---|---|---|
| `complex-power-series-and-analytic-functions` | CA-2 | matches spec exactly |
| `contour-integration` | CA-3 | matches spec exactly |
| `quadratic-residues-and-the-legendre-symbol` | NT-2 | design names 4 prerequisites; all 4 are in the spec closure |
| `reflective-subcategories-and-the-adjoint-functor-theorems` | MA-2 | design names 4; all 4 in the spec closure |
| **`ascoli-arzela`** | **T10** | **DRIFT — resolved below** |

**The `ascoli-arzela` drift, and the decision.** `plan-topology-track.md` T10
lists among its theorems "ASCOLI-ARZELA in the metric and the general forms",
but the spec gave `ascoli-arzela` only `function-space-topologies` and
`approximation-and-compactness-in-ck`. General topological compactness lives on
`compactness` (order 255), which is **not** in that closure — while its
design-block sibling `stone-weierstrass-general` **does** declare it.

The asymmetry is historical. T10 states the metric-only restriction is "forced,
not stylistic" because "General topological compactness is page 255, unbuilt".
Page 255 has since been built and published. The constraint that forced the
restriction is gone; the spec edge was never updated.

**Decision (orchestrator, step 0): add the backward edge `ascoli-arzela` →
`compactness`.** Order 255 < 285, so it points backward, introduces no cycle and
changes no page's `order` — it is not a reading-order change. Recorded in the
`plan-spec.json` note. Priority (1), mathematical richness, is what settles it:
without the edge the Beta must either drop the general form or smuggle it, and
both are worse than one legal declaration.

**What this does not license.** `function-space-topologies` (283) is *published*
with the metric-only foundation — `def-equicontinuity`, the compact-open
topology and the uniform metric are all developed for a metric domain. So the
general form of Ascoli–Arzelà is only as reachable as that published foundation
supports. Batch 2's Beta decides how much it can close honestly and records the
reasoning in its notes; it does not stretch a metric-domain citation to cover a
general domain. That is the `[F#]`-inflation defect, and it was the single
largest fatal class in `frontier-13`.

## Gate results at step 0

```
content-policy.mjs --manifest-only    6 manifests, 0 errors     (2-A-page cap holds)
validate-plan.mjs research/plan-spec.json   OK, acyclic, no unresolved ids
```

## Proactive measures carried into this run

Recorded in full in `research/frontier-14-PREVENTIONS.md`, and each one traces
to a specific defect that reached disk in an earlier run.
