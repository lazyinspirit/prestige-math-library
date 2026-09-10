# Published prerequisite audit: scalar topology interfaces

Date: 2026-09-11. Scope: the published real/complex field, metric and topology
clauses actually used to make scalar topology explicit in original
`phase-2-next-20` batch 2. Full current target items were read. This is a bounded
local audit, not an independent judgment or transitive closure certification.
No published item was edited.

## Confirmed terminology/interface defect

`def-metric-topology` (current SHA-256
`069190e121cbb367b3afe22d7dd0e280ff94bb582af7bf9c48ebb58b71ac39a2`)
states: “A neighbourhood of a point x is any open set containing x.” The later
canonical `def-neighbourhood-top` instead states that a neighbourhood need not
be open: it is any set containing an open set around the point, and reserves
“open neighbourhood” for the narrower notion. Reading both items in one
dependency interface therefore gives two definitions of the same unqualified
term. This is a wording/interface defect, not a false metric topology.

Repair by changing the metric item to “An open neighbourhood of x is an open
set containing x,” or by stating only that the metric balls form a neighbourhood
base under the later convention. Its family of metric-open sets is a genuine
topology; `thm-metric-open-set-algebra` supplies that fact. The missing
`justified_by` link alone is optional metadata under the canonical rule that a
correct implicit use of an adequate published supplier is clear. The new TVS
scaffold explicitly depends on `def-neighbourhood-top`, so it does not import
the ambiguous clause. No Phase-2 pair is needed. Classification: U-C pending a
complete repair audit.

## Correct implicit uses — bounded clears

The following suggestions were checked against the canonical classification
rule and are not defects.

- `thm-metric-open-set-algebra` (SHA-256
  `5c2f96e32ff210f172af98b89d3d8f5c04ce9c7ea31c22e15c802bd4d3aafc90`)
  selects one witness radius for each member of a finite indexed family in proof
  1.3. Published `lem-finite-choice` supplies this ZF step. The use is correct;
  an explicit edge/citation would be optional cleanup.
- `def-complex-metric-convergence-and-continuity` (SHA-256
  `38317b25b58d3f3730f8de607c81dbd3fcc8273403d4424e33bcfeeb20a82531`)
  mentions the restricted metric on a subset. Published
  `def-isometry-and-metric-embedding` supplies the standard metric-subspace
  construction. The implicit use is correct; no repair debt follows.
- `def-algebraic-dual-and-linear-functional` remains the bounded clear recorded
  in the preceding locally convex prerequisite audit: published
  `lem-restriction-of-scalars`, claim 1, supplies the implicit field-as-vector-
  space structure.

## Other used scalar clauses — bounded clears

- `def-vector-space` (SHA-256
  `e006e78e74dd04ceb48133837b2e1e3161d5d1fec1d4a218d936e18b6cff0702`):
  the five scalar-action axioms and the additive abelian-group structure are
  correctly stated; no topology or choice is built into the definition.
- `lem-real-line-is-a-metric-space` (SHA-256
  `6564a58044cdfacae2cf0cbabc49efba0fdefca5d5ed2ccfd3ccdc105d1afb1c`):
  absolute value gives the real metric and its balls are exactly the displayed
  intervals, supplying the usual real metric topology.
- `def-complex-numbers-and-arithmetic` and
  `thm-complex-numbers-form-a-field` (SHA-256 respectively
  `ce1ecbdb3079fe69fb94ebed9fadc957fa56bc3ec392020baa93f5fee4c1d06d`
  and `3689f8465eabe3a23a3fd3da53731b34bef8e5818d5f537da581fbcf9c385d77`):
  the quotient construction, real embedding, coordinate formulas and inverse
  formula supply the complex field used by the TVS definition.
- `thm-reals-ordered-field` (SHA-256
  `903457a895cc1c9b6dc3725e214909b7ed9cb8fc3a69bf622ed01ec478a69d3a`):
  the Cauchy-real order is representative-independent and compatible with the
  field operations, supplying the real scalar field.
- `def-complex-conjugate-real-imaginary-part-and-modulus` and
  `lem-complex-conjugation-and-modulus-laws` (SHA-256 respectively
  `0c2885685d80a32ec4be2654d62804409ffcd3979c118b5297f13ae4b95b9938`
  and `1c39322a5f76e70d991e68270bd84935cb132cc04452a48af1e4f56e21221d39`):
  the complex modulus is definite, multiplicative and subadditive. These are
  the exact estimates used for joint scalar addition/multiplication; unused
  automorphism terminology is outside this bounded disposition.

The scalar topology itself is obtained from the two metrics through
`def-metric-topology` and the closure proof above. No sequential-continuity or
choice principle is required by the new local operation estimates.
