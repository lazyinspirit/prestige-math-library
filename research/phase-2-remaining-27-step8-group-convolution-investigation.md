# Step-8 investigation: Williams Example 3.10

Date: 2026-09-22. Read-only mathematical/scope investigation; no item, shared
scope, ledger, plan, engine or certification edits. Engine status confirmed
`phase-2-remaining-27` paused at `8-scope`, with Step 7 frozen; Git HEAD
`449fd8efc`. Read CLAUDE.md and README.md fully, the Step-8 task and workflow
rules, frontier-dependency instructions and binding owner-authoring direction.

## Recommendation

Defer the general **locally compact abelian (LCA)** result. It is neither
already supplied nor a small missing lemma. Correct the scope explanation:
Haar existence is already published; the missing prerequisites are the LCA
convolution algebra and its character-space identification, with topology.
The source does not request general noncommutative group Fourier theory.
Recommend `bochner-inversion-and-plancherel-on-lca-groups` (FR-16) as the
destination for this deferred example, with explicit missing local foundations
and FR-15 prerequisites. RG-19 remains the owner of the more general
noncommutative group-algebra package; its later order prevents treating it as
an available prerequisite for FR-16. No new page or reading-order change is
proposed. A destination records future debt, not current mathematical closure.

Exact declined row: group `b`, batch `4`, page
`gelfand-theory-and-commutative-c-star-algebras`, decline ID
`42240b1dab4420160374124d937ccb5c8981db76a1e51db3622d1bd37d6504c6`.
The source coverage row is in
`research/phase-2-remaining-27-batch-4.coverage.json:481`; current owning decision
is `research/phase-2-remaining-27-alpha-b-scope-decisions.json:71`.

## Source evidence and exact selected mathematics

Read Williams, *Lecture Notes on the Spectral Theorem*, printed p.9,
Example 3.10, from cached full-text extraction
`/tmp/prestige-batch5-sources/williams.txt:716` through line 762. The associated
PDF `/tmp/prestige-batch5-sources/williams.pdf` has SHA-256
`12aa6e2ceb0a4f8c7bab0c70d6de959295209af96d1258a3f05a4b8882da9e56`,
matching the recorded full-text retrieval hash prefix in batch-4 coverage.
The separate `/tmp/prestige-fa17-fa18-sources/williams.pdf` has the same hash.
Reused this successful retrieval; made no new network retrieval and did not
claim to have read the full 39-page document. Source URL:
<https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf>.

The example starts “Let G be a locally compact abelian group with Haar measure”.
Its claims are: convolution and conjugate-reflection make L1(G) a commutative
Banach star algebra; it is unital exactly when G is discrete; for nondiscrete G
the sum-norm unitization B = C + L1(G) is a unital Banach star algebra; all
characters of B are Fourier integration against continuous unitary characters
of G, extended by the scalar coordinate, or the quotient character; and the
spectrum of B is the one-point compactification of the compact-open dual group.
The source explicitly says classification “requires some work”; it provides
no complete proof there. The extraction loses some conjugation glyphs, so it
is not evidence for omitting conjugation. The Fourier sign convention can be
changed by replacing a unitary character with its conjugate.

## Current supplier interfaces actually read

- `items/ex-gelfand-transform-of-ell-one-of-z.md` (draft, this run): full
  verification of the unital discrete Z algebra and its circle of characters.
  Its finite-truncation/delta-generator argument does not classify characters
  for arbitrary LCA groups and supplies no nondiscrete approximate identity.
- `items/def-left-haar-integral-and-left-haar-measure.md` and
  `items/cor-existence-of-left-and-right-haar-measures.md` (published): arbitrary
  LCH groups, no countability restriction; AC supplies Haar existence and
  inversion pushes left Haar to right Haar. Thus absent Haar existence is not
  the blocker. This is interface inspection, not whole-closure recertification.
- `items/lem-compactly-supported-kernels-admit-commuting-radon-integrals.md`
  (published): commuting iterated integrals for continuous compactly supported
  kernels on LCH products under AC. It does not directly give all L1
  convolution, representative independence or translation continuity.
- `items/thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound.md`
  and `items/thm-fourier-transform-converts-convolution-to-products.md`
  (published): their statements explicitly concern R^n. Their sigma-finite
  product/Borel arguments cannot simply be cited for arbitrary LCA groups.
  Haar need not be sigma-finite (uncountable discrete groups are an example),
  and general product-Borel identification also needs care.
- `items/thm-character-space-of-the-unitization-is-one-point-compactification.md`
  (draft, this run): explicitly assumes a commutative C*-algebra and uses
  C*-Gelfand–Naimark to prove density of the complement of the quotient
  character. The sum-norm L1 group algebra is generally not a C*-algebra.
  This theorem cannot supply the Example-3.10 conclusion as stated.
  `def-algebraic-unitization-of-a-star-algebra` supplies algebraic unitization,
  not the missing LCA spectral identification.

The substantial missing chain is: general LCA C_c/L1 approximation and
translation continuity; well-defined bounded associative convolution and
involution; approximate identities and unit iff discrete; the compact-open
dual and its local compactness; classification of every nonzero L1 character
as Fourier integration; agreement of character and compact-open topologies;
and the Banach-algebra unitization/compactification conclusion. One may build
convolution on C_c and extend by density, avoiding an unjustified global
sigma-finite Fubini assertion, but that still requires a genuine module.

## Destination and minimal planning correction

`research/plan-spec.json` has empty inventories for FR-15
`character-groups-and-elementary-lca-duals` (510.06501), FR-16
`bochner-inversion-and-plancherel-on-lca-groups` (510.06503), FR-17
`pontryagin-duality-for-locally-compact-abelian-groups` (510.06505), and RG-19
`the-modular-function-and-l1-group-algebras` (510.067). None is selected for
this run. The proposed FR-15 dual definition and FR-16 convolution-transform
lemma have no matching item files. RG-19's prose inventory in
`research/plan-representation-theory-groups-track.md:1460` names
`def-convolution-on-cc-and-l1-of-a-group`, `lem-l1-convolution-norm-inequality`,
`thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` and
`thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity`;
these are future planned IDs, not current suppliers. FR-15/16 should not gain
a forward dependency on later RG-19.

There is a real planning contradiction worth correcting now without authoring
mathematics. In `research/plan-fourier-analysis-track.md`, FR-16's prerequisite
paragraph at line 1045 calls for “FA-17 A Banach-algebra character theorem”;
item 3 at line 1055 invokes “the FA-17 character-space identification”; item 5
at line 1057 invokes “the FR-15/FA-17 identification of all characters of
L1(G)”. Neither the current FA-17 page nor FR-15 supplies that identification;
FA-18's explicit example is only Z.

Minimal proposed correction: retain FA-17 for its actual general Banach-algebra
foundations, replace those two false identification attributions with an
explicit **unbuilt FR-16-local LCA convolution/character-space prerequisite**,
and record the whole Williams example there as deferred debt, to be authored
before FR-16 items 3 and 5. State that it requires the LCA algebra, all-character
classification and compact-open topology agreement, plus the unitization
endpoint; cite this report and Williams p.9. Do not label that missing result
proved, silently weaken FR-16, assign fabricated existing IDs, or import
later RG-19. Separate the arbitrary-group modular/involution module on RG-19
from this abelian specialization.

For the coverage reason, suggested replacement: “Williams Example 3.10 is the
general LCA L1 convolution/Fourier–Gelfand example, including character
classification and unitization topology. Haar existence is published, but
these LCA interfaces remain unbuilt. Only ell1(Z) is worked here; defer the
full example to FR-16 with its FR-15/local foundational obligations.”

No published defect established by this review, and no mathematical repair
or Step-7 reopening proposed. The next authorized action is serial lead
scope/plan reconciliation and engine-owned validation; any future proof
authoring remains separate deferred work.
