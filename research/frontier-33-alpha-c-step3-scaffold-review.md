# frontier-33 — Alpha group `c` — Step 3 scaffold review

Group `c` covers batches `5`, `6`, and `7`: NT-16
`classical-zero-free-region-and-the-prime-number-theorem`, NT-21
`decomposition-inertia-and-frobenius`, HA-14 `derived-categories`, and CA-18
`regular-local-rings-and-homological-dimension`, together with their companion
pages.

I read the current root and research instructions, the three manifests,
coverage files, and notes, the complete NT-16, NT-21, HA-14, and CA-18 design
sections, and the eight live records in `research/plan-spec.json`. I checked the
claims as written against the relevant complete source sections and exact
dependency statements, including zero and empty cases, low-height analytic
regions, valuation normalization, choice scope, localization smallness,
boundedness conventions, shift signs, infinite projective dimension, and
normal rings with zero divisors.

After the three narrow scaffold repairs recorded below, all four A/B pairs are
sufficient for authoring.

| A page | Batch | A items | B items | Harvest rows | Declines | Verdict |
|---|---:|---:|---:|---:|---:|---|
| `classical-zero-free-region-and-the-prime-number-theorem` | 5 | 20 | 8 | 51 | 6 | `sufficient` |
| `decomposition-inertia-and-frobenius` | 5 | 29 | 7 | 64 | 3 | `sufficient` |
| `derived-categories` | 6 | 60 | 9 | 190 | 14 | `sufficient` |
| `regular-local-rings-and-homological-dimension` | 7 | 60 | 18 | 116 | 6 | `sufficient` |

The machine-readable verdicts are in
`research/frontier-33-alpha-c-step3-verdicts.json`.

## Direct repairs applied

- In batch 6, `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three`
  said “item 48” even though its actual prerequisite is the immediately
  preceding `lem-finite-roof-squares-and-composable-pairs-can-be-cleared`.
  The manifest and matching notes checkpoint now name the finite roof-clearing
  lemma rather than a stale ordinal.
- In batch 6, `thm-the-canonical-pair-is-a-t-structure` said decomposition used
  “item 32”; its declared and actual prerequisite is
  `thm-canonical-truncations-fit-a-distinguished-triangle`. The manifest and
  matching notes checkpoint now name the canonical truncation-triangle theorem.
- Batch 7 represented its established companion page twice, once with the
  finite-regular-base example and once with the other seventeen examples. I
  merged those arrays under the single existing page object, preserving the
  page id, order, title, prerequisites, all eighteen item ids, and their
  encounter order. This removes a duplicate representation; it does not add,
  delete, rename, or reorder an established page.

The affected notes' content-identity hashes were updated. No item id,
mathematical dependency, page prerequisite, reading-order edge, plan record,
published item, or other group's artifact was changed.

## Batch 5 — NT-16 classical zero-free region and PNT

### Route, dependencies, and pair scope

The A page at order `348.015` requires
`perron-inversion-and-the-explicit-formula-examples`; its companion at
`348.016` requires only the A page. The 20-item route runs from the completed
zeta function and Hadamard logarithmic derivative through a local zero sum,
zero counting, the fixed `3 + 4 cos(theta) + cos(2 theta)` positivity argument,
the classical zero-free region and reciprocal/logarithmic-derivative bounds,
the explicit-formula error balance, the PNT for `psi`, `theta`, and `pi`, the
Newman–Zagier Tauberian route, and fixed-modulus PNT in arithmetic progressions.
Every item dependency is earlier or internal to this pair.

The eight companion items supply the requested computations and guardrails:
the classical region's actual strength, numerical zero contributions, the
optimal truncation scale, transfer among prime-counting functions, the
geometric-block density counterexample and its prime analogue, a Tauberian
test case, and the distinction between a zeta region and uniform Dirichlet
`L`-function regions. These are examples, computations, or counterexamples;
none is an unacknowledged theorem prerequisite for the A page.

### Mathematical and source check

Kedlaya's *Analytic Number Theory* chapters on zeta zeros, the PNT, PNT error
bounds, and primes in arithmetic progressions support the principal chain:
the Hadamard logarithmic derivative, Theorem 8.8's zero-free region, Theorem
1.8's bounded-real-function Tauberian theorem, and Theorem 4.12's fixed-modulus
prime asymptotic. Montgomery–Vaughan Chapter 6 supplies the local zero-sum and
classical contour estimates. All eight batch-5 source records currently carry
full-fetch verification.

The scaffold keeps the pole at `s=1` separate from zeros, uses
`log(|t|+2)` to cover low height, gives removable interpretations at the pole,
and makes the real-zero contribution and truncated zero sum explicit. The PNT
transfer retains prime-power and partial-summation errors. The Tauberian
statement keeps boundedness and local integrability, and the arithmetic
progression theorem fixes the modulus and a coprime residue class. The density
counterexamples calculate block endpoints rather than inferring nonexistence
from oscillatory prose. No missing analytic result, source, or backward
prerequisite remains.

**Verdict:** sufficient.

## Batch 5 — NT-21 decomposition, inertia, and Frobenius

### Route, dependencies, and pair scope

The A page at order `365.915` requires
`prime-ideal-decomposition-ramification-and-the-different-examples`; its
companion at `365.916` requires only the A page. The 29-item route supplies the
necessary local-field bridge before using global decomposition theory:
completion, equivalence of finite-dimensional norms, Hensel lifting, extension
of a complete nonarchimedean absolute value, places and completions of number
fields, the completion-product decomposition, local norm and trace, then
decomposition and inertia groups, towers and fixed fields, arithmetic
Frobenius, good reduction, and factorization/cycle type.

The seven companion items cover split/inert/ramified quadratic primes,
cyclotomic Frobenius, factorization in a cubic splitting field, norm/trace
checks, and the normalization warning. The pair stays with finite number-field
extensions and finite residue fields; completed algebraic closures,
infinite-extension decomposition theory, and numerical stabilizer algorithms
are not used.

### Mathematical and source check

Milne, *Algebraic Number Theory*, §§7–8 supports the complete valued extension
theorem, completion product, the decomposition-group/completion isomorphism,
the inertia quotient, tower behavior, Frobenius, and Dedekind cycle type.
Conrad's *Ostrowski for Number Fields* supplies the completion universal
property and the finite-dimensional norm/extension argument without silently
assuming local compactness; Stein supplies the explicit small examples. All
three source records currently carry full-fetch verification.

The normalization is correctly separated: the canonical number-field value
`|x|_P=(NP)^(-ord_P x)` restricts as the `ef`-th power of the normalized value
at `p`, and taking its `1/(ef)` power gives a literal extension when needed.
The general complete-field theorem includes trivial valuations and does not
assume discreteness or separability. A fixed extension `Omega` scopes the
choices of places. The exact sequences preserve their hypotheses, arithmetic
and geometric Frobenius are distinguished, tower exponents use residue
degrees, and the polynomial cycle-type theorem retains monicity, separability,
and `p` not dividing the discriminant. No missing local bridge, source, or
backward prerequisite remains.

**Verdict:** sufficient.

## Batch 6 — HA-14 derived categories

### Route, dependencies, and pair scope

The A page at order `365.063` requires `triangulated-categories-examples`; its
companion at `365.064` requires only the A page. The 60-item route is
self-contained at the needed categorical interfaces: quasi-isomorphisms and
acyclic cones; roofs, equivalence, composition, addition, and finite common
denominators; localization of the homotopy category; the descended
triangulation and Verdier quotient; bounded variants and canonical
truncations; K-projective/K-injective bounded models; Ext and Yoneda products;
the canonical t-structure and heart; total derived functors; derived tensor,
RHom, Tor, and Ext computations.

The nine-item companion tests quasi-isomorphisms that are not homotopy
equivalences, acyclic noncontractible complexes, roof computations, model
independence, the `Z/4` periodic unbounded obstruction, truncations, Ext as
derived Hom, derived tensor, and the failure of `K(A)=D(A)` in general. The
unbounded obstruction is kept as a counterexample and is not used to overstate
the bounded replacement theorems.

### Mathematical and source check

Stacks Project §§13.5, 13.11, 13.18, and 13.19 provide the localization,
derived-category, K-injective, and K-projective load-bearing statements;
Aluffi/Noohi Lecture 3 supplies the canonical t-structure and heart; the
remaining declared Stacks and Weibel/Yekutieli sources cover truncation,
derived functors, tensor, and Hom. All 21 source records currently carry
full-fetch verification.

The definable-class/smallness qualification is explicit before asserting Hom
sets. The proof of triangulation does not use its own conclusion: cone long
exact sequences and the five lemma certify denominators during the TR3
argument, and simultaneous roof clearing precedes TR4. Bounded-above
projectives and bounded-below injectives retain their sided hypotheses. Tensor
totalization uses bounded-above finite diagonals; RHom keeps the declared mixed
bounds. The shift convention is carried into Ext and the t-structure Hom
formula. Zero complexes, acyclic objects, and non-split exact complexes are
distinguished correctly. After replacing the two stale ordinal references,
no missing result, source, or backward prerequisite remains.

**Verdict:** sufficient.

## Batch 7 — CA-18 regular local rings and homological dimension

### Route, dependencies, and pair scope

The A page at order `365.905` requires
`depth-and-cohen-macaulay-modules-examples` and
`tor-flatness-and-global-dimension`; its companion at `365.906` requires only
the A page. The 60-item route covers embedding dimension, regular parameters
and quotients, regular local domains and Cohen–Macaulayness, associated graded
rings, minimal resolutions and Betti numbers, Auslander–Buchsbaum, the
Auslander–Buchsbaum–Serre criterion, local and global dimension, localization
and polynomial extension, completion, and normality through both directions of
Serre's criterion, including the non-domain convention.

The single corrected companion object contains all 18 intended examples:
fields and DVRs, localized polynomial and power-series rings, singular
hypersurfaces and nodes, dual numbers, Koszul/Betti and first-syzygy
computations, completion, rational-point hypersurfaces, regular covers,
regular-flat maps with singular closed fibre, and the finite regular-base
Cohen–Macaulay/freeness criterion.

### Mathematical and source check

Mustaţă Chapter 12 supports the regular quotient, homological-dimension,
Auslander–Buchsbaum–Serre, localization, and example routes. Stacks Project
§§10.106, 10.111, and 10.157 supply maximal Cohen–Macaulay freeness,
Auslander–Buchsbaum, and Serre normality. The additional complete-local and
normality sources supply the stated completion and total-fraction interfaces.
All 13 source records currently carry full-fetch verification.

The zero-dimensional case uses the empty regular system and identifies regular
local rings of dimension zero with fields. Auslander–Buchsbaum keeps `M`
nonzero, finite, and of finite projective dimension, while global-dimension
statements allow infinity. Completion preserves the cotangent space before
regularity is inferred. The normal-ring definition and Serre criterion cover
zero divisors through the finite product of normal domains, rather than
silently using a domain-only statement. Rational-point hypersurface examples
work over arbitrary fields, and the split node and finite-free example remain
valid in characteristic two. Regular-local factoriality is deliberately not
claimed. After merging the duplicated page representation, no missing result,
source, or backward prerequisite remains.

**Verdict:** sufficient.

## Deferred and out-of-scope dispositions

The required refresh produced 29 current decline rows. Each was checked against
the exact source result, the relevant design, the current manifest route, and
the live plan, then resolved in
`research/frontier-33-alpha-c-scope-decisions.json`:

- Batch 5: 9 `stands`, all result-specific out-of-scope rows. The general
  Borel–Carathéodory/nearby-zero alternatives, constant optimization, general
  density implications and variants, infinite local extensions, completed
  algebraic closures, and numerical stabilizer methods are not inputs to the
  selected routes.
- Batch 6: 12 `stands` and 2 `owner-decision`. Three deferred horseshoe or
  composite-derived-functor results have the existing destination
  `grothendieck-spectral-sequences-and-computations`; nine broader partial
  derivability, weak-Serre, or motivational results are not prerequisites.
  The two exact-adjoint results from Stacks §13.7 belong to a future category
  track expansion, but their exact destination remains an owner decision.
- Batch 7: 6 `stands`, all result-specific out-of-scope rows. UFD, fractional
  ideal, full local-classification, determinantal, and Cohen-structure results
  are not used by the regularity/homological-dimension route.

The two owner decisions do not block these pages: neither adjunction result is
used by an assigned claim, while creating or ordering its destination would be
outside this group's authority. Final scope checks report 29 current declines,
0 pending, and 0 errors.

## Validation record

Focused checks on the final reviewed bytes produced:

- `manifest-deps`: batch 5 has 64 items, batch 6 has 69, and batch 7 has 78;
  all report 0 normalizations and 0 errors.
- `content-policy --manifest-only`: 211 assigned items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 421 harvest rows, 0 errors. Batch
  6 retains its informational low-yield warning (`50/190` rows scaffolded);
  the required Alpha review of all 14 decline rows is complete in the checked
  decision file. Batches 5 and 7 have no warnings.
- `source-fetch-check`: batch 5 is `8/8`, batch 6 is `21/21`, and batch 7 is
  `13/13` fetch-verified.
- `validate-plan research/plan-spec.json`: exit 0; the current plan order is
  acyclic and consistent, with no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among its 844 populated pages.
- A nonwriting plan overlay of all eight assigned page objects: exit 0, with
  no unresolved ids, cycles, forward references, B-page dependencies, or
  undeclared prerequisites among 852 populated pages.
- `splice-plan --dry-run`: batch 5 would splice 4 pages/64 items, batch 6 would
  splice 2 pages/69 items, and batch 7 would splice 2 pages/78 items, with no
  refusal and no write.
- `scope-decisions check --run frontier-33 --group c`: 29 current declines, 0
  errors.
- The run-wide `scaffold-verdicts --json` reader recognizes all 24 A-page
  verdicts and reports no shape or coverage error. Closure is false only for
  the independently reported insufficient group-`b` page
  `dual-spaces-adjoint-operators-and-annihilators`; all four group-`c` rows are
  sufficient, and that other group's repair is outside this dispatch.

## Unresolved obligations and next action

There is no group-`c` scaffold blocker. The only unresolved scope obligations
are the two nonblocking owner decisions for the future category-track homes of
Stacks §13.7 Lemmas 13.7.1 and 13.7.2. The engine owns Step-3 closure, the
actual splice, and all later routing. Authoring should preserve the exact
analytic low-height qualifications, valuation normalization, chosen-place
scope, boundedness/smallness conventions, and zero/non-domain cases recorded
above.
