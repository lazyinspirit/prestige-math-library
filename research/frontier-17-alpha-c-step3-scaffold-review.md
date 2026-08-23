# Frontier 17 — Alpha group C step-3 scaffold review

Group C covers batches 1, 6, and 8.  The grouping rationale in
`research/frontier-17-alpha-groups.json` is residual but mathematically harmless:
the two analytic batches share no item edge with the mixed number/group-theory
batch, and the assignment creates no cross-group dependency edge.

I read each owned `.pages.json`, `.notes.md`, and `.coverage.json` together with
the applicable design section, the live `plan-spec.json` entry, and the exact
Definition or Statement of every published dependency used by the manifests.  I
also checked the harvested source ranges against the source text.  The current
coverage files supersede stale source-fetch observations in the notes: all eleven
owned source entries now carry full-text fetch receipts.

The severity labels below describe the defect that would exist without the
recorded disposition.  `resolved-blocking` means the older prose design contained
a false Statement, circular route, illegal dependency, or missing load-bearing
lemma, but the current batch scaffold already contains the repair.  There are no
open blocking findings.

## Severity table

| finding | pair | severity | disposition |
|---|---|---|---|
| B1-1 | `sums-of-two-squares` | resolved-blocking | Accept the focused factorisation and primitive-product/prime-power lemmas already present in the manifest. |
| B1-2 | `sums-of-two-squares` | resolved-substantive | Accept the fuller Hackman harvest, including both clauses of E.II.8 and the distinct collision and Extended-Euclid constructions. |
| B1-3 | `frattini-subgroups-and-the-burnside-basis-theorem` | resolved-blocking | Accept the restricted-bijection formulation of Burnside basis; the older image-set formulation is false. |
| B1-4 | `frattini-subgroups-and-the-burnside-basis-theorem` | resolved-blocking | Reuse the published p-core/Fitting/Frattini items and keep the native finite $\mathbb F_p$ dictionary in place of later linear algebra. |
| B1-5 | `frattini-subgroups-and-the-burnside-basis-theorem` | resolved-substantive | Accept the four Frattini laws, induced automorphism action, Hall--Burnside decomposition, and native unitriangular example. |
| B6-1 | `outer-measure-and-the-caratheodory-extension-theorem` | resolved-blocking | Keep the explicit $\mathrm{AC}_\omega$ hypotheses on covering selection, extension, regular hulls, and completion. |
| B6-2 | `outer-measure-and-the-caratheodory-extension-theorem` | resolved-blocking | Keep the tail-intersection proof of continuity from below; the tempting measurable-hull subtraction is unlicensed. |
| B6-3 | `outer-measure-and-the-caratheodory-extension-theorem` | resolved-substantive | Accept the comparison, algebra-approximation, completion, and nonregularity additions. |
| B6-4 | `outer-measure-and-the-caratheodory-extension-theorem` | report-only | The stale published scope denial in `rem-lebesgue-measure-and-integral` belongs to the lead's later scope-denial sweep and does not make this scaffold insufficient. |
| B8-1 | `the-identity-theorem-and-the-open-mapping-theorem` | resolved-blocking | Keep the nonzero-derivative local-biholomorphism lemma before local normal form, removing the inverse-theorem cycle. |
| B8-2 | `the-identity-theorem-and-the-open-mapping-theorem` | resolved-blocking | Reuse the published zero-order items and retain the self-contained interpolation remark instead of a dangling Riesz--Thorin pointer. |
| B8-3 | `the-identity-theorem-and-the-open-mapping-theorem` | resolved-substantive | Accept the clopen zero-locus lemma and the boundary, infinity-control, minimum, constant-modulus, strip, and three-lines development. |
| B8-4 | `the-identity-theorem-and-the-open-mapping-theorem` | sufficient-boundary | The companion contains concrete witnesses for every principal hypothesis boundary in the design. |

## Batch 1

### `sums-of-two-squares`

**B1-1. Proof route and decomposition.**  The current dependency order closes.
Thue's lemma is proved by a finite maximum and strong pigeonhole argument, with
strict $\sqrt p$ bounds and both nonzero coordinate differences accounted for.
It supports Fermat's theorem without a floor-function or continued-fraction
dependency.  The general integer criterion then separates the local
$q\equiv3\pmod4$ divisibility step from prime-power construction and iterates
the valuation drop all the way to the odd-exponent endpoint.  Prime uniqueness
is decomposed through the source's factorisation lemma.  The primitive theorem
has the two load-bearing lemmas that the older design merely mentioned in prose:
coprime primitive products remain primitive, and powers of primes congruent to
$1$ modulo $4$ have primitive representations.  No substantive theorem lacks a
strategy.

**B1-2. Breadth and harvest.**  Hackman Chapter E §§E.I--E.II and Stein §5.7
are two independent textbook treatments.  The harvest faithfully records
Hackman E.I.1--E.I.5, E.II.1--E.II.8 and the stated exercises, and Stein's
Theorem 5.7.1, primitive definition, Lemmas 5.7.4--5.7.5, product identity, and
continued-fraction route.  The current scaffold retains the named primitive
lemmas and both clauses of Hackman E.II.8.  The continued-fraction proof,
general binary quadratic forms, Pell-type forms, and the $r_2$ formula have
specific later number-theory destinations; the Mordell-type exercise genuinely
belongs to a subject not developed by this elementary pair.  The notes correctly
repair the design's false description of Conrad's complete two-page note; it is
not used as one of the two backing treatments.

The B page is a real examples development, not a token companion: it contains
the collision and Extended-Euclid constructions of $73$, two representations
and factor recovery for $221$, the odd-valuation obstruction, the ordinary
versus primitive boundary, and a bounded squarefree classification.  The A page
has 18 items, below the 60-item split threshold.

**Verdict: sufficient.**  Approve amendments NT4-1 through NT4-6 for later
single-writer propagation; they are already reflected in the current manifest.

### `frattini-subgroups-and-the-burnside-basis-theorem`

**B1-3. False designed Statement repaired.**  The older design said that a
subset is minimally generating precisely when its image *set* is a basis.  That
loses multiplicity: two distinct lifts of one basis vector have the same image
set although one lift is redundant.  The current scaffold correctly requires
the quotient map to restrict to a bijection from the subset onto a basis.  This
is the Statement-level repair the route needs, and amendment GT1-3 should be
propagated exactly in that form.

**B1-4. Reuse and dependency closure.**  The older GT-1 inventory re-minted
p-core, Fitting, Frattini, nongenerator, and maximal-subgroup results that are
now published.  The current scaffold reuses those immutable ids.  It also avoids
illegal load-bearing references to the later vector-space, basis, matrix, and
dual-space pages by developing the finite elementary-abelian
$\mathbb F_p$ dictionary directly: scalar action, native bases, finite basis
extension/extraction, and equality of basis sizes.  From there the largest
elementary-abelian quotient, $\Phi(P)=P'P^p$, and Burnside basis all close from
listed dependencies.

**B1-5. Standard development and harvest.**  Craven §§1.1 and 2.2, Conrad §6,
and van Beek §§3.1 and 4 provide independent full-note treatments.  Their named
Frattini formula, subgroup/quotient/product/square laws, minimal-generator
consequences, Hall--Burnside theorem, and automorphism-kernel theorem are all
present or honestly marked already published.  The Harpaz--Wittenberg extract
is supplemental support only for the native $3\times3$ unitriangular example.
The proof route for Hall--Burnside correctly uses a prime-order automorphism,
fixed representatives in each Frattini coset, a lifted quotient basis, and
Burnside basis; it does not assume fixed generators by fiat.

The B page computes cyclic, elementary-abelian, dihedral, quaternion, and
unitriangular cases; identifies maximal subgroups as quotient hyperplanes; and
exhibits the nonsurjective Frattini-image and nonsolvable Fitting-centralizer
failures.  Its false statements make the intersection/union, surjectivity,
finite-$p$, and solvability boundaries explicit.  The A page has 24 items,
below the split threshold.

**Verdict: sufficient.**  Approve amendments GT1-1 through GT1-5.  The direct
`requires` wording differs from the old design, but the stage-0 drift review has
already verified that both named prerequisite pages lie in the closure of
`sylow-theorems-and-nilpotent-groups-examples`; no plan edit is owed here.

## Batch 6

### `outer-measure-and-the-caratheodory-extension-theorem`

**B6-1. Choice scope.**  The current titles and strategies expose the exact
countable-choice expenditure hidden by the older design.  Countable
subadditivity of a covering infimum needs a near-minimizing cover selected for
each member of a countable family; generated measurable hulls similarly need a
countable family of approximating covers.  Existence is not incorrectly made
dependent on sigma-finiteness, and sigma-finite uniqueness uses its given
exhaustion without spending a new choice.

**B6-2. Regularity route.**  For $E_n\uparrow E$, measurable hulls $H_n$ are
replaced by $G_n=\bigcap_{k\ge n}H_k$.  Then $G_n$ is an increasing measurable
hull of $E_n$ and $E\subseteq\bigcup_nG_n$.  This avoids the false inference
that $H_n\setminus E_n$ is null when $E_n$ is not measurable.  The route is
complete from the listed Carathéodory theorem, continuity for measures, and
$\mathrm{AC}_\omega$.

**B6-3. Breadth, decomposition, and harvest.**  The Folland and Tao ranges are
faithfully harvested.  Carathéodory's theorem is decomposed through the
automatic inequality, algebra closure, finite splitting, countable disjoint
splitting, and null-set measurability.  Extension is decomposed through the
covering-cost theorem, algebra-cover disjointification, exact agreement with the
premeasure, and source-algebra measurability.  Comparison with other extensions,
finite-measure algebra approximation, sigma-finite uniqueness, measurable
hulls modulo null sets, and completion are all retained.  The metric theorem is
split into boundary-layer continuity, closed-set measurability, and the Borel
criterion.  Inner measure is assigned by the track to MT-5, while saturation is
genuinely a separate non-sigma-finite measure-algebra topic; neither decline is
a missing prerequisite for this pair.

The B page computes both universal and sparse Carathéodory domains, a concrete
premeasure construction, metricity, failure of premeasure hypotheses,
nonuniqueness without sigma-finiteness, and failure of regularity.  The A page
has 35 items, below the split threshold.

**B6-4. Later published-prose sweep.**  The note about
`rem-lebesgue-measure-and-integral` is credible: its corpus-wide scope denial is
already stale.  That published remark is not a load-bearing dependency of this
batch and is outside this group step-3 write scope.  It should remain visible to
the lead's step-9 sweep, but it does not weaken the scaffold.

**Verdict: sufficient.**  Approve amendments MT3-1 through MT3-5.  The
stage-0 drift review already verified every older design prerequisite in the
closure of `measures-and-their-basic-properties-examples`.

## Batch 8

### `the-identity-theorem-and-the-open-mapping-theorem`

**B8-1. Circularity removed.**  The design called the coordinate in the local
normal form biholomorphic before establishing the holomorphic inverse theorem.
The current `lem-nonzero-derivative-gives-local-biholomorphism` obtains exactly
that implication from the published Euclidean inverse function theorem and the
complex-linear derivative dictionary.  The local normal form may then use it,
and the later inverse theorem proves the full equivalence using local
multiplicity.  The dependency graph and intended proof order are now honest.

**B8-2. Reuse and unavailable-pointer repair.**  The published zero-order
definition and factorisation are reused rather than duplicated.  Local degree is
the finite positive order of $f-f(a)$ for a nonconstant function on a domain.
The old Riesz--Thorin remark named an item absent from `plan-spec.json`; the
current `rem-three-lines-and-complex-interpolation` states only the sourced
scalar mechanism and creates neither a dangling link nor a load-bearing forward
reference.

**B8-3. Standard development and harvest.**  Lebl, Shabat, and Tropp provide
independent textbook/full-note treatments, and the recorded named results agree
with their stated ranges.  The scaffold includes the identity theorem, isolated
zeros, the holomorphic-function integral-domain consequence, local logarithms
and roots, local normal form and exact nearby multiplicity, open mapping, local
and boundary maximum principles, the real-part and minimum principles,
finite-boundary plus infinity control, the constant-boundary dichotomy, the
bounded-strip regularization, Hadamard three-lines, and the holomorphic inverse
theorem.  Rouché, the argument principle, residues, Schwarz reflection, and
Schwarz's lemma have explicit later destinations, so the chosen local-root route
does not create a cycle.  Shabat's radial-polynomial exercise is a specialized
growth application rather than a missing part of this already complete
identity/open-mapping development; declining it avoids padding.

**B8-4. Boundary page.**  The companion has distinct local models at a branch
point and a regular point, a second proof of the complex Pythagorean identity,
an exact polynomial maximum, boundary-only zero accumulation, the flat smooth
nonextension, a Blaschke factor, and false statements isolating connectedness,
nonvanishing, complex versus real injectivity, and control at infinity.  It is a
substantive B page.  The A page has 25 items, below the split threshold.

**Verdict: sufficient.**  Approve amendments CA6-1 through CA6-7; each is
already reflected in the current manifest.

## Mechanical checks

- `coverage-checklist --require-destination`: 4 A pages, 198 harvested results,
  0 errors, 0 warnings.
- `content-policy --manifest-only`: 140 scoped items, 0 errors, 0 warnings.
- `source-fetch-check` in no-network receipt mode: 11/11 sources verified.
- `validate-plan research/plan-spec.json`: pass on the current unspliced plan.
- `alpha-groups --run frontier-17`: 3 groups over 9 batches and 0 cross-group
  dependency edges; the expected mixed-category warning remains for group C.

No batch scaffold edit was necessary in this review: the current manifests
already contain every repair approved above.  No page exceeds the 60-item hard
ceiling, no pair needs splitting, and no owned pair retains a forward reference,
external fallback, cross-batch dependency, AI-generated dependency target, or
substantive item without a strategy.
