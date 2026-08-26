# frontier-19 — group Alpha `a`, step-3 scaffold review

Group `a` covers batches `1` and `9`. I read only those batches, their notes
and coverage ledgers, the controlling design sections, the live `plan-spec.json`
closure, the current published dependencies on disk, and the stated source
ranges. The assignment rationale in `research/frontier-19-alpha-groups.json`
holds up on the mathematics: the batch-1 action/orbit conventions and the
batch-9 orbit-category and induction/coinduction examples are genuinely the same
machinery thread, not a loose theme.

## Verdicts

| A page | verdict | controlling findings |
|---|---|---|
| `blocks-primitivity-and-multiple-transitivity` | sufficient | B1-1 approved |
| `geometric-actions-svarc-milnor-and-growth` | sufficient | B1-2, B1-3 |
| `kan-extensions-density-and-the-free-cocompletion` | sufficient | B9-1, B9-2 |

## Severity and disposition

| finding | pair | severity | disposition |
|---|---|---|---|
| B1-1 | blocks / primitivity | high | approved scaffold repair already present |
| B1-2 | geometric actions / growth | moderate | accepted drop; no reopen |
| B1-3 | geometric actions / growth | moderate | owner-decision stands |
| B9-1 | Kan extensions / density | high | approved scaffold repair already present |
| B9-2 | Kan extensions / density | moderate | declines accepted |

## Batch 1

### `blocks-primitivity-and-multiple-transitivity`

The standard elementary development is present and honestly decomposed. The page
has the block definition, the translate-partition lemma, the equivalence-relation
correspondence, primitive/imprimitive actions, the subgroup-block
correspondence, maximality of a point stabilizer, prime-degree primitivity,
normal subgroups in primitive actions, regular abelian normal subgroups,
`k`-transitivity and `k`-homogeneity, suborbits and rank, sharply transitive
counting, the imprimitive wreath-product embedding, and Iwasawa's criterion.
That is the right chapter at this order: it stops before Burnside/CFSG terrain
but it does not stop short of the load-bearing permutation-group structure.

The B page is real. It has six substantive examples, one genuine counterexample,
and five false statements that mark the main boundary lines of the page. The
prime/composite dihedral split, the affine `F_7` witness against
`2`-homogeneous `=>` `2`-transitive, and the projective-linear Iwasawa example
are exactly the kind of boundary material the page needs.

The source harvest is honest. Milne, Conrad, and Cameron are independent
treatments; at least one is a full textbook and another a full lecture-note set.
The two deferred source rows are real later-page material, not thin harvest:
Burnside's doubly transitive prime-degree theorem lands naturally on the planned
`socles-and-the-onan-scott-landscape` page, and the broader `PSL_n` /
classical-group applications belong to the later finite-simple-groups landscape.

**Verdict: sufficient.**

#### B1-1 — the batch correctly repaired the design's false finite-block statement

`plan-group-theory-track.md` §GT-3 still says
`prop-primitive-actions-have-equal-sized-blocks`, but the manifest has already
repaired this to
`prop-blocks-in-a-finite-transitive-action-have-equal-size`. That repair is
mathematically necessary: equal block sizes come from finite transitivity, not
from primitivity. The downstream prime-degree corollary now closes honestly from
the repaired proposition, and no additional step-3 work remains.

### `geometric-actions-svarc-milnor-and-growth`

The page is mathematically sufficient at this stage. The Svarc-Milnor route is
present as a real proof plan rather than a single slogan: metric properness,
geometric actions, coarse-Lipschitz orbit maps, finite generating sets from a
cobounded proper geodesic action, the Svarc-Milnor theorem itself, and the
shared-space quasi-isometry corollary. The growth half then fixes growth
functions and growth comparison, proves generating-set independence and
quasi-isometry invariance, gives the free-group exponential-growth theorem, and
states the Bass-Guivarch and Gromov boundaries honestly as `rem-`-level external
records. The nilpotent and Grigorchuk consequences are then exactly the right
boundary examples.

The B page is real: six examples, one counterexample, and five false statements.
The examples hit the intended boundaries: `Z`, `Z^n`, free groups on trees,
proper-not-cobounded, free-abelian growth, Heisenberg degree four, and the
bounded-geometry failure witness. Nothing here is token padding.

The source depth is adequate. Löh gives the full chapter-level lecture-note
treatment for Svarc-Milnor and the growth backbone, and Drutu-Kapovich provides
independent monograph control for Milnor-Schwarz, finite-index/finite-quotient
quasi-isometry, and the nilpotent/Gromov context.

**Verdict: sufficient.**

#### B1-2 — the design's `finite and virtually cyclic growth types` proposition is dropped, but the page still closes

`plan-group-theory-track.md` §GT-11 names
`prop-finite-and-virtually-cyclic-growth-types`; the current scaffold has no
such item and no explicit decline row for it. I do not fail the page for that
drop. Nothing else on the page depends on a separate proposition here, the
linear-growth half is already visible through `ex-growth-of-free-abelian-groups`
at `n = 1`, and the virtually-cyclic extension is recoverable when needed from
the existing growth/quasi-isometry backbone together with the already-published
finite-index/finite-quotient quasi-isometry result. This is a recording defect,
not a closure defect.

#### B1-3 — `uniform exponential growth` is a real owner-level scope decision

The deferral of uniform exponential growth is correct as `owner-decision`, not
as an ordinary `stands` decline. The current group-theory plan has no page
dedicated to uniform exponential growth or Lehmer-type lower bounds, so keeping
that material would require a new destination or a reading-order decision beyond
this pair's present closure. The batch notes were also right on August 25, 2026
to drop the unstable “growth gap and open problems” remark entirely rather than
ship time-sensitive prose into a page that does not use it.

## Batch 9

### `kan-extensions-density-and-the-free-cocompletion`

The standard development is present and well-shaped. The page distinguishes local
from global Kan extensions; proves uniqueness; gives the restriction adjunctions;
states the comma-category formulae two-sidedly; defines pointwise extensions in
both the comma-category and representable-preservation forms; proves those
notions agree; records absolute Kan extensions; proves the fully faithful
extension theorem; gives the co/end formulae; recasts limits, colimits,
adjunctions, and evaluation as Kan extensions; then carries the density theorem,
Yoneda self-density, free cocompletion, the codensity monad, and the
finite-sets-to-ultrafilter example. That is the right page and it is not thin.

The B page is also real. The full-inclusion, free-functor, induction/coinduction,
orbit-category, density, nonpointwise, and rational-to-real examples all do real
work and test different parts of the A-page spine.

The source harvest is deep and honest. Riehl and Richter are full treatments;
Mac Lane, Leinster, Loregian, and Leinster's codensity paper are genuine
independent controls. The batch also handled provenance correctly: the nearby
published `ex-the-ultrafilter-monad-on-a-finite-set` has
`provenance.statement: ai-generated`, and the scaffold correctly refuses to use
it as a load-bearing dependency.

**Verdict: sufficient.**

#### B9-1 — the batch correctly repaired item 6 into a genuinely two-sided theorem

The design's old item 6 named only the left-Kan colimit formula while relying
later on the right-Kan half as well. The current scaffold's replacement,
`thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions`, is
the correct repair. It removes an otherwise certain citation defect from the
codensity half of the page, and the paired rename of item 7 makes the pointwise
definition truthfully cite the theorem it uses.

#### B9-2 — the out-of-scope declines are real subject boundaries

Riehl §6.4 on derived functors as Kan extensions is genuinely homotopical and
unused by any manifest item on this page or its companion. Leinster's skipped
§4 and §§7-8 move to integration, double dualisation, and ultraproducts, again
outside the ordinary-category closure the page actually builds. These are real
subject-boundary declines, not missing prerequisites hidden inside the chosen
scope.

## Declines, provenance, and mechanical checks

Every published dependency I opened from disk is `status: published`, and every
one used here has `provenance.statement` either `literature-derived` or
`ai-altered`; none has `ai-generated` statement provenance. The only
AI-generated planned Statements in this group are checkable non-load-bearing
examples on the Kan-extension page. The batch-9 notes also record the resulting
truth-risk obligations explicitly.

The scope declines are now all adjudicated: two `owner-decision` rows stand
(`uniform exponential growth`, in both canonical and source form), four
group-theory source/canonical deferments or exclusions stand, and the two
category-theory out-of-scope rows stand. The destination pages named in those
`stands` decisions are live in `plan-spec.json` and strictly later than the
current pages.

Mechanical checks on the exact reviewed artifacts:

- `node tools/coverage-checklist.mjs research/frontier-19-batch-1.coverage.json research/frontier-19-batch-9.coverage.json` — pass, 3 pages, 115 harvested rows, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-1.pages.json research/frontier-19-batch-9.pages.json` — pass, 103 scoped items, 0 errors, 0 warnings.

No A page in this group approaches the 60-item split ceiling. No B page is thin.
No forward reference or published-dependency repair is opened by these batches.
