### the-galois-correspondence

I read `research/plan-algebra-track.md` §II.2.1 and §GA-2.  GA-2 states that
the page requires `algebraic-closure-embeddings-and-separability` and
`symmetric-polynomials`; the discriminant argument expressly uses the
fundamental theorem of symmetric polynomials.  The first page is already in
the declared closure through
`algebraic-closure-embeddings-and-separability-examples`, but
`symmetric-polynomials` was not.  I added that backward edge to the page's
`requires` array.

VERDICT: drift-applied — added symmetric-polynomials (order 58)

### modules-over-a-pid-and-canonical-forms

I read `research/plan-algebra-track-expansion.md` §MOD-5 and §II.6.  The
original direct list names `chain-conditions-and-semisimple-modules`,
`euclidean-domains-pids-and-unique-factorisation`,
`triangularisation-and-jordan-canonical-form`, and
`the-structure-of-finite-abelian-groups`, all already in the closure.  The
later normative enrichment additionally says that MOD-5 uses
`the-field-of-fractions-and-localisation` for rank.  That load-bearing page was
outside the closure, so I added the backward edge to the page's `requires`
array.

VERDICT: drift-applied — added the-field-of-fractions-and-localisation (order 53.2)

### monadicity-and-becks-theorem

I read `research/plan-category-theory-track.md` §5.1 and §MA-4.  MA-4 states
the prerequisites as `monads-comonads-and-their-algebras`,
`nets-and-filters`, `separation-axioms`, and
`compactness-in-metric-spaces`, with the three topology pages used only by the
compact-Hausdorff block.  All four are in the declared closure through
`monads-comonads-and-their-algebras-examples`; the other nearby page ids are
the companion or later category-theory pages.

VERDICT: no-drift

### the-identity-theorem-and-the-open-mapping-theorem

I read `research/plan-complex-analysis-track.md` §CA-6 and the reconciled
existing-band inventory.  CA-6 declares CA-5
(`analyticity-liouville-and-morera`) and uses lower CA-3/CA-4, continuity,
Euclidean compactness, and integral-domain material already in that closure.
The Riesz--Thorin and Banach open-mapping mentions are disambiguating ownership
remarks, not proof premises; the section explicitly records no load-bearing
forward references.

VERDICT: no-drift

### frattini-subgroups-and-the-burnside-basis-theorem

I read `research/plan-group-theory-track.md` §3 and §GT-1.  The design states
the prerequisites as `sylow-theorems-and-nilpotent-groups` and
`composition-series-and-solvable-groups`.  Both are in the declared closure
through `sylow-theorems-and-nilpotent-groups-examples`; the Fitting,
normalizer-condition, and elementary-abelian facts cited by the item route are
owned inside that lower material.

VERDICT: no-drift

### outer-measure-and-the-caratheodory-extension-theorem

I read `research/plan-measure-theory-track.md` §MT-3.  It states MT-1, MT-2,
`series-and-nonnegative-tests`, `suprema-and-infima`, and `metric-spaces` as
the prerequisites for the Carathéodory and extension-theorem route.  All are
in the declared closure through `measures-and-their-basic-properties-examples`;
the nearby later measure-theory pages are consumers, not prerequisites.

VERDICT: no-drift

### sums-of-two-squares

I read `research/plan-number-theory-track.md` §NT-4, including its proof
strategy.  The design requires NT-2--NT-3 together with the published integer
factorisation, congruence, finite counting, strong pigeonhole, and real
square-root results.  Every named supplier is already in the closure through
`quadratic-reciprocity-and-the-jacobi-symbol-examples`; NT-5 is a later
consumer.

VERDICT: no-drift

### constant-rank-submersions-and-regular-level-sets

I read `research/plan-realanalysis-completion-track.md` §RC-2 and the
partial-delivery amendment in `research/plan-realanalysis-pages.md` §RA-36.
RC-2 states RC-1, `the-topology-of-euclidean-space`, and
`linear-maps-rank-nullity-and-quotient-spaces` as its prerequisites.  The
spec declares RC-1 and the linear-map page directly, and the Euclidean
topology page is already in their closure.  The differential-geometry mention
is a later consumer of RC-2.

VERDICT: no-drift

### volumes-of-elementary-solids-and-solids-of-revolution

I read `research/plan-realanalysis-completion-track.md` §RC-5 and the
partial-delivery amendment in `research/plan-realanalysis-pages.md` §RA-38.
RC-5 states RC-4 (`areas-of-elementary-plane-figures`) and
`the-topology-of-euclidean-space`; both are declared directly, and RC-4 brings
the Fubini/change-of-variables machinery into the closure.  The reference to a
closed form via RC-7 is an orientation to the later page: §RC-7 says it closes
RC-5's recursion, so RC-7 is not a premise of RC-5.

VERDICT: no-drift

### the-real-gamma-and-beta-functions

I read `research/plan-realanalysis-completion-track.md` §RC-7 and §5.8, plus
the §RA-38 partial-delivery amendment in
`research/plan-realanalysis-pages.md`.  RC-7 directly states RC-6
(`improper-and-parameter-dependent-multiple-integrals`),
`the-logarithm-and-general-powers`, and `convexity`, all already in the
closure.  Its theorem list also says that the closed form for the unit-ball
volume closes RC-5's recursion; `volumes-of-elementary-solids-and-solids-of-revolution`
was outside the closure.  I added that backward edge to the page's `requires`
array.

VERDICT: drift-applied — added volumes-of-elementary-solids-and-solids-of-revolution (order 288.00009)

### trigonometric-and-oscillatory-examples-in-several-variables

I read `research/plan-realanalysis-completion-track.md` §RC-13 and §5.3,
together with scope denial 6 and D-TRIG in
`research/plan-realanalysis-pages.md`.  The stated base prerequisites are
RC-12, RC-1, `mixed-partials-taylor-and-extrema`, and
`fubini-and-change-of-variables`; those are already in the closure.  The
section additionally specifies a sine-generated surface of revolution whose
volume and area come from RC-5 and RC-8.  Those two load-bearing pages were
outside the closure.  I added the legal RC-5 edge,
`volumes-of-elementary-solids-and-solids-of-revolution` (order 288.00009), to
the page's `requires` array.  RC-8 is lower-order, but it is neither published
nor built by frontier-17, so adding it would make this page and its downstream
consumers unbuildable; that scope/reading-order repair belongs to the owner.

VERDICT: drift-blocked — trigonometric-and-oscillatory-examples-in-several-variables requires regular-surfaces-and-surface-integrals (order 288.00015), but the target is neither published nor built by frontier-17 and cannot be added as a satisfiable edge

### applications-of-the-fundamental-group

I read `research/plan-topology-set-theory-track.md` §HT-7 and the seam and
direct-requirement discussions in `research/plan-algebraic-topology-track.md`.
HT-7 states `the-seifert-van-kampen-theorem` and
`classification-of-covering-spaces` as prerequisites, exactly matching the
spec.  The algebraic FTA and winding-number mentions are agreement/orientation
remarks, while later algebraic-topology and group-theory pages list this page
as their own prerequisite; none adds a premise to HT-7.

VERDICT: no-drift
