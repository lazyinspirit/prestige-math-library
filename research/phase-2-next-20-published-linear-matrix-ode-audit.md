# Published linear matrix ODE audit — 2026-09-11

This bounded audit follows the connection author's use of
`lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`.
It covers that complete published lemma, its global-extension and Gronwall
branches, the exact first-order-IVP dimension convention, the complete
compact-interior extension lemma and its gluing and integral-estimate
interfaces. It also checks every direct published consumer for the clause at
issue. It does not certify the whole ODE stack, and no published item was
edited.

## Deduplication and artifacts

The canonical ledger was searched by both exact item IDs, titles, aliases,
matrix-ODE/global-continuation mechanisms, Picard dimension restrictions and
supplier IDs. Neither target had a classification row or an alias. No matching
historical defect mechanism was found, so these are two new bounded census
dispositions rather than extensions of existing rows.

Current SHA-256 values include:

- `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`:
  `993f0404d772f05ad036d289e7f40d605fe3f9cd0160605558ce0c2ebbe7b1b0`;
- `lem-ode-extension-from-a-compact-interior-region`:
  `ba0e88b72961a3bb160eec98d3d5435f4c60550ba8ab697f9ab895e8043708a4`;
- `thm-picard-lindelof-local-existence-and-uniqueness`:
  `c5929085a3cde39dfb9bdeb634760148a8c1d52009f1a5a64da56d778265ae28`;
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`:
  `92d7ac988d207b5629b75343aee3e81200d3e4508d57c0234c38d8a52c0e8acd`;
- `lem-vector-valued-continuous-curve-space-is-complete`:
  `aaa68274e854ac4ce2c3fd1aef658298a626f614c17065c390280f12ee7c0d5b`;
- `thm-gronwall-integral-inequality`:
  `b9a6c05b686dfbb36a8aae3e399e80772db097135341dcbbdf7d8e8f36db3a00`;
- `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`:
  `08abb86eedc6ffa36be99f162e23042955241796c88628bf31fe33cfc57c181f`;
- `thm-norm-inequality-for-the-vector-valued-integral`:
  `18a4db36b495d646d77af4256b1e7dbbcc3e3ee9c58294cde69b4a4f6d290641`.

## Global linear matrix equation

The matrix lemma's short Statement does not separately bind `n`, which raised
a provisional zero-rank concern. The complete declared interface resolves it:
the item explicitly treats the equation as a first-order IVP and declares
`def-first-order-ode-initial-value-problem-and-solution`, whose Definition fixes
state dimension at least one. Equivalently, the Picard/Volterra and continuous-
curve suppliers used by proof 1.1 apply to `n^2>=1`. The active parallel-
section draft correspondingly invokes this supplier only for positive bundle
rank and handles rank zero by the unique empty coefficient vector. Repeating
`n>=1` in the matrix lemma's displayed Statement would improve exposition; it
is not missing mathematics under the exact published convention.

On that positive-dimensional scope, proofs 1.1--4.1 are sound. Constant endpoint
extension makes the coefficient continuous on an open time interval. The
operator-norm estimate gives a global state Lipschitz constant on compact time
subintervals. Forward and time-reflected Volterra inequalities plus Gronwall
bound every maximal solution on the prescribed compact interval. If either
maximal endpoint ended inside that interval, its graph would approach the
compact interior cylinder and the extension lemma would contradict maximality.
Local uniqueness then gives uniqueness on the entire interval.

Its four published direct consumers create no affected zero-dimensional path.
The explicit example is two-dimensional. The fundamental-matrix proposition
and the two initial-data regularity theorems use the variational-equation/
first-order-system convention, which again has positive state dimension. The
active draft consumer treats rank zero separately.

## Compact-interior extension

The complete compact-interior extension lemma is also sound in its used clause.
A sequence of graph points in one compact subset of the open Euclidean ODE
domain has a subsequence converging to an interior endpoint state. A compact
cylinder around it bounds the vector field. Starting sufficiently late, the
integral norm estimate and a first-exit argument keep the whole tail in that
cylinder and make the solution converge to the endpoint state. Picard--Lindelöf
starts the endpoint solution, and published local uniqueness/gluing joins it to
the old solution. Reflection supplies the left-endpoint clause. The sequence
is part of the hypothesis; no choice sequence is constructed by the proof.

## Disposition

Both published lemmas receive bounded no-repair-needed dispositions in these
exact scopes. There is no live connection-author blocker and no additional
Phase-2 pair. This does not assert that every ODE supplier or consumer has been
audited.
