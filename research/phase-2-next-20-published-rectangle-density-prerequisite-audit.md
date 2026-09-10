# Published prerequisite audit: complex L2 rectangle density

Date: 2026-09-11

## Scope and deduplication

This bounded batch reads the published statements and proofs on the active
complex-L2 rectangle-density path:

- finite disjoint rectangle unions generate the product sigma-algebra;
- finite-measure sets are approximable by a generating algebra;
- completion-measurable functions have base-measurable representatives;
- real and complex finite-simple density; and
- the complex quotient norm, L2 pairing, and their exact integral inequalities.

The canonical ledger was searched before disposition by exact IDs, aliases,
the Boolean-atom/completion/representative mechanisms, and the supplier IDs.
Four targets had one U-P row each. Ten targets were outside the classification
index. None has a listed alias. Existing prose mentions were not classification
rows and are retained as history. No target was already classified in another
row.

This audit does not certify unused transitive closures or the draft consumer.
Published files were read only.

## Exact proof findings

### Rectangle algebra and approximation

`lem-finite-rectangle-unions-form-a-generating-algebra` (SHA-256
`268dd98141a7f3f992b60a88bf8f1d6c61bc54f88e929fccc9a06770cff438dc`)
is sound. Intersections of rectangles remain rectangles. For any finite list,
the measurable Boolean atoms in each factor yield a finite disjoint product
partition, and each original rectangle is a union of product atoms. The same
joint atom partition therefore disjointifies unions, intersections,
complements and differences. Proof step 2.1 abbreviates the complement/difference
closure, but its explicit A2 atom construction supplies it. This is a correct
implicit use of the written argument, not repair debt.

`lem-finite-measure-sets-are-approximable-by-a-generating-algebra` (SHA-256
`b1a65e5f0e9ccde4492cdeff7ef2766ebeb23d545eea71edc3170aaf2e4a116e`)
is sound. The approximable family contains the algebra, is complement-closed,
and is closed under countable unions by first taking a finite initial union and
then choosing only finitely many approximants. Continuity from below and finite
subadditivity give the symmetric-difference estimate. Finite choice here is a
correct implicit use of an adequate published foundation.

### Completion representatives and simple approximation

`thm-completion-measurable-functions-have-base-measurable-representatives`
(SHA-256
`5a12399bc45e5fd0d2b8a1087da114534ac82f062eb727d2120547f97df78b93`)
states countable choice explicitly. A sequence of real simple approximants is
replaced, on its countably many finite level-set families, by base-measurable
cores. CC licenses those simultaneous representations and the union of their
null errors remains null. The base-measurable limsup then equals the original
extended-real function off that set.

The approximation closure is coherent in the clauses actually used:

| Published item | SHA-256 | Bounded proof receipt |
|---|---|---|
| `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations` | `84e098533444bd827bee660ef7bc11b7eac8855444e9ae1132bd858e03f87e9c` | The explicit dyadic truncations are measurable, increase, stay below the function, converge also at positive infinity, and have the stated uniform finite-range error. |
| `cor-measurable-functions-admit-dominated-simple-approximations` | `b43056496d5e8a5e205eedfb63304814e9cc50cb1539801c42797c316a6d128c` | Positive and negative parts never coexist at a point; their explicit nonnegative approximants therefore give finite real simple functions dominated by the modulus and converging also at either infinity. |
| `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` | `79b06417aecc481eb7dc334cc85d92da3efe347c8ca22b0e601828f718d513b4` | The supplied dominated simple sequence, cut off on `{|u| >= 1/m}`, has finite-measure support by the integral bound and converges under the integrable majorant `(2|u|)^p`. |
| `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p` | `70f774fd1a1f6e8d35c876663ff51b72fe16f309289e36f88990fd1776e1a702` | In the used arbitrary-measure-space clause, separately approximate the two real components and recombine them; the union of two finite-measure nonzero sets has finite measure and the component norm bounds give the requested error. |

### Complex norm and pairing interfaces

`thm-complex-holder-minkowski-and-the-quotient-norm` (SHA-256
`1d67c1c241d1c1561d47b2e1df1ed199e6c41447eed71eccdc3b381ce139b095`)
correctly reduces Holder and finite-p Minkowski to the real modulus inequalities,
handles both infinity endpoints with essential bounds, and proves representative
independence and definiteness on the a.e. quotient.

`thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz` (SHA-256
`b16e0f2890412648580e6826b9eac18732e6fc07905bf980ba404c10068c85bd`)
correctly obtains representative independence from a.e. equality, verifies the
linear-first-variable convention, and expands `||f-cg||_2^2` with
`c=<f,g>/||g||_2^2`. The zero case and the finite-tuple common-scalar equality
case are explicit. These are the exact norm and orthogonality clauses used by
the live rectangle-density consequence.

The immediate real integral inputs were also read in full:

| Published item | SHA-256 | Bounded proof receipt |
|---|---|---|
| `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` | `c78d28611462a43a216a8ab1f1145b0212f48ebce6c81f046da20eec4a8791bf` | Threshold sets prove the forward direction; every simple minorant is supported on a supplied measurable null set in the reverse direction. |
| `thm-holder-inequality-for-integrals` | `810a5feb0c4d749cbf0e9d3d819033e6ad02641d8461f35aa9236d884bc5779d` | Zero norms are separated before normalization; Young's inequality proves the strict-exponent case, and essential bounds prove both endpoint cases. |
| `thm-minkowski-inequality-for-integrals` | `e6d0a55bbe5c95dbfbdb3b4fd0e88724bd31fd127a7f76a022650081dd7655eb` | The proof first establishes finite p-integrability, separates the zero norm before division, applies Holder to the standard factor, and treats one and infinity directly. |
| `thm-integral-triangle-inequality` | `d92eec0a9caa63080772603781ca3df51787f8137f9ebe89f451a3937b9f1e6d` | The real order bound and the phase `conj(I)/|I|` give the real and complex inequalities without a zero denominator. |
| `thm-the-lebesgue-integral-respects-almost-everywhere-equality` | `9cfad244d14ddc25c1dfb1cd5cb45d41a5615865b65193b1f598f49e3a711354` | Null support gives equality of all indefinite integrals; testing positive and negative sets of each component proves the converse. |

## Reconciliation and live impact

The four prior U-P items move to bounded clear. Ten fully read items enter the
bounded-clear census. No finding is duplicated and no published edit or new
Phase-2 pair is needed. The active rectangle-density draft assumes full Choice,
uses the completion theorem only through AC implies CC, and supplies the
finite-complex representative construction explicitly. This path has no
uncovered published mathematical prerequisite in the audited scope.
