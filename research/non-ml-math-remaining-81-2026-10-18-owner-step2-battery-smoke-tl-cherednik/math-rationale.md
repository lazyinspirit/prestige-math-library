# TL and Cherednik finite-smoke proposal

This proposal preserves all fourteen assigned obligations. No canonical source,
contract, registry, runtime state, or gate receipt was changed. Root owns registry
installation, guarded row integration, recertification and the full native battery.

The module exports `frontier81TLCherednikChecks`, a name-to-function map whose
functions accept the authored smoke row and return `{ok, summary}`. It has no
imports or side effects and can be copied to `tools/` unchanged. Integrate with an
import and a spread in `makeChecks()` after checking name collisions.

All fourteen original `asserts` strings are paraphrases absent from their current
source. `row-patches.json` records the exact old per-item `finite_smoke` projection,
its replacement and the actual source raw SHA-256 guard. Compare both guards at
integration, and replace only that item's `finite_smoke`; preserve all other
contract fields. All new excerpts were checked against the real source bytes.
The build helper reproduces these proposals, but is evidence-only and does not
write canonical contracts.

## Independent computations and bounds

| Check family | Finite computation | Actual bounded invariant |
| --- | --- | --- |
| Catalan diagrams | Enumerate every perfect matching of 0,2,4,6 cyclic endpoints; discard interlacing pairs. Separately enumerate all binary words of lengths 0,2,4,6 with balanced nonnegative prefixes. | Stack pairing and earlier-endpoint bracket map are mutually inverse; counts 1,1,2,5. |
| Jones candidates | Recursively enumerate all strictly increasing block maxima and endpoints with `1 <= k <= j < n`, for n=0,1,2,3. Evaluate words by diagram graph composition. | Counts agree with independently enumerated balanced words; evaluated candidates are distinct and loop-free. Rank-three triples stack to their single generators. |
| Rank-three product table | For each of 25 pairs of the five source basis words, glue the matching graphs and count closed connected components. | Output pairing and symbolic loop exponent agree with the displayed table, including delta multiples. The table is the asserted expected value, not the computational implementation. |
| Zero-loop rank-two generator | Enumerate both planar pairings, distinguish identity and cap-cup, and stack cap-cup with itself. | Generator is a distinct nonzero standard basis coordinate over Z; its square produces one loop and is zero after delta=0 specialization. |
| Three form boundaries | Compose each state with the reflection of the other as a (t,t) matching and count loops/propagating strands. | Empty entry 1; (2,0) entry delta; shifted (3,1) entry 1. |
| Rank-two zero cell form | Compute identity/generator actions and self-pairing by graph composition. At delta=0 enumerate every subset of F2 and retain linear invariant subspaces. | Only submodules 0/full occur in the nonzero one-dimensional module, while the form and its quotient are zero. This is a genuine finite field witness, not an assertion about exhaustive fields. |
| Rank-three module | Compute all four generator actions and four reflected pairings by graph composition. | Gram matrix has loop exponents [[1,0],[0,1]], hence matrix [[delta,1],[1,delta]]; zero-loop determinant -1. Additionally exhaust all projective lines over F2,F3,F5 and find no invariant line. |
| Rank-one recurrence | Implement reflection on coefficient vectors, subtract, divide exactly by x and differentiate. Independently sum the commutator coefficients `1-2c(-1)^k`. | For c=1/2, degrees 0..3 give 0,0,2x,2x^2. |
| Weyl relation | Coefficient-vector differentiation and multiplication on x^m, m=0,1,2. | Their operator commutator is the identity. |
| Dunkl formula | Reflection/differentiation/divided-difference, compared against the independently summed commutator recurrence. | At c=1/2 the degree 1,2 values are 0 and 2x. |
| Extension obstruction | Ordinary exact integer 2x2 matrix multiplication of T=[[1,1],[0,1]] at mu=2. | N^2=0, invariant subspace/quotient both have eigenvalue 1, but (T-I)(T-2I)=-N is nonzero. |
| Repeated Hecke root | In the cited definition, e=2, zeta=-1, c=1/2 give r_j=c(1-(-1)^j). Compute mu_j by exact integral parity of j-r_j. | r=(0,1), mu=(1,1), and multiplying the root factors gives T^2-2T+1. |
| PBW ordering specialization | On polynomial degrees 0..4 and t=-2,0,1,3, evaluate x as multiplication and y=t*d/dx directly, without a rewrite rule. | Sixty evaluations check the three ordered identities yx=xy+t, yx^2=x^2y+2tx, y^2x=xy^2+2ty. Here max_degree=2 denotes the largest exponent in each tested generator word. |

The KZ factorization proof now correctly uses generalized standards and a
generating quotient. Its old contract pointed to a removed proof step, but the
same independent extension obstruction is still an appropriate bounded witness
to the actual final sentence rejecting an inference from composition factors.
The patch quotes that current sentence and updates `checked_in` accordingly.
It does not claim that this arbitrary matrix is itself KZ monodromy.

The KZ standard proof now invokes the exact meridian polynomial at every
parameter. Its old numeric repeated-root example is not literal source text.
The replacement quotes the current assertion covering resonant parameters, then
computes the same original e=2,c=1/2 fixture from its actual cited definition.
Endpoint identification is retained; omitting its character factor changes the
result and is detected by the mutation test.

No mathematical counterexample or source repair was found in these assigned
finite invariants. These computations do not prove general Catalan bijections,
normal-form spanning/independence, arbitrary-ring cellularity, all-field
simplicity, general PBW, or KZ factorization.

## Isolated verification

Executed only:

`node research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-smoke-tl-cherednik/isolated-tests.mjs`

Actual results are in `isolated-test-results.json`: fourteen positive authored-row
cases pass, eleven invalid fixture selectors fail, and six mathematical mutations
are detected (loop exponent, table entry, Dunkl sign, derivative normalization,
meridian endpoint factor, commutator sign). Exact source excerpt membership is
also checked for every replacement. These are isolated function tests, not a
production gate or whole-registry self-test. No native battery was attempted.
