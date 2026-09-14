# Owner authoring direction — `phase-2-remaining-27`

This file is binding for the fresh 54-page run. The stopped
`phase-2-remaining-26` run and all of its receipts are evidence only: they do
not certify, release, or supply any page in this run. Published Phase-2 content
is read-only except where the workflow separately authorizes a later repair.

Every theorem, lemma, proposition, example, and counterexample must contain a
complete local proof from declared earlier suppliers. A source citation,
catalogue assertion, proof sketch, or future-page pointer is not a proof. If a
contract below cannot be met, fail the relevant gate and escalate the exact
missing lemma or source; do not weaken, omit, reclassify, or silently move the
claim.

## Functional analysis and probability

The binding FA prerequisite and item amendment is
`research/plan-functional-analysis-track.md` §§14.4--14.5. It supersedes stale
FA-13--FA-21 inventories or task locators elsewhere. In particular, FA-16
imports the Hilbert--Schmidt definition, basis independence, compactness, and
kernel theorem from the earlier square-kernel pair, retains the two-sided-ideal
theorem, and leaves Lidskii to the later Fredholm-determinant pair.

The exact square-kernel A inventory is:

1. `def-hilbert-schmidt-operator`;
2. `thm-hilbert-schmidt-norm-is-basis-independent`;
3. `thm-hilbert-schmidt-operators-are-compact`;
4. `lem-product-rectangle-kernels-are-dense-in-product-l-two`;
5. `thm-l-two-kernels-give-hilbert-schmidt-operators`.

Its exact B inventory is:

1. `ex-square-integrable-separable-product-kernel`;
2. `ex-square-integrable-kernel-without-continuous-representative`;
3. `ex-square-integrable-kernel-finite-rank-truncations`;
4. `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two`.

For arbitrary-index Hilbert bases, unordered sums are finite-subset suprema.
The kernel theorem must prove well-definedness, the exact Hilbert--Schmidt norm,
and every separable-support or sigma-finite reduction it uses. Do not prove it
from the later SVD.

FA-20's spectral multiplicity result requires a full proof that intertwiners
preserve the measurable direct-integral multiplicity function. Multiplicity is
fiber dimension, not point-eigenspace dimension at non-atoms. PT-22's
Brownian-filtration martingale representation and its square-integrable
terminal-value corollary require the complete closed-range,
characteristic-function, truncation, and localization argument under the usual
augmented Brownian filtration.

On PT-22, `Lf=(1/2)Delta f` on `C^2` is the Brownian/Itô differential operator,
not a claim that every `C^2` function is in the infinitesimal-generator domain
of the heat semigroup on `C_0`. If semigroup-generator language is used, state
the actual domain and prove the `C_c^infty` core assertion.

## Algebraic topology

AT-17 must define reduced generalized homology and its coefficient groups
before the shared degree-of-a-sphere-map calculation. Construct the homological
AHSS from the skeletal exact couple and state
`d_r:(p,q) -> (p-r,q+r-1)`. Multiplicativity assumes a specified unital,
associative, graded-commutative coherent external product compatible with
suspension and cofiber boundaries; representability by a ring prespectrum is
an example, not an unstated hypothesis. The infinite-CW entry is a limitation
remark, not a counterexample without a witness.

AT-19 must define the degree-one tautological class through the classifying map
of `gamma_E`, prove choice independence and fiber normalization, and only then
invoke Leray--Hirsch and define the Stiefel--Whitney coefficients. For odd rank,
the Euler-class proof uses the orientation-preserving map
`-id:(E,o) -> (E,-o)`, oriented naturality, and the orientation-sign law; no
homotopy of fiberwise `-id` to the identity is available.

AT-20 must define the reduced and odd Chern character through suspension and
Bott periodicity before stating a graded rational result. Prove compatibility
with relative maps and skeletal filtrations and identify the induced rational
map on the AHSS `E_2` page. Rational collapse alone does not identify the
underlying filtered groups.

## Differential geometry and Lie theory

DG-30 contains no restricted-root `BC_n` example. That example belongs only to
DG-34 B. DG-32 derives the two retained `sl_2` character/dimension and
Clebsch--Gordan examples locally from finite weight strings; RL-7 is not a proof
supplier, and the deleted type-`A_2` Kostant-multiplicity leaf must not return.

DG-33 proves the compact Weyl character formula locally. The proof order is the
denominator and triangular anti-invariant orbit-sum lemma, then the Weyl
integration/orthogonality numerator-identification lemma, then the theorem.
Descent uses the finite central covering
`Z(G)^0 x G_der^sc -> G`; prove independence of lifts and continuous extension
from regular to singular elements. Neither `rho` nor the individual half-roots
need lie in the original torus character lattice. DG-32 and RL-7 are
non-load-bearing orientation only.

## Choice, inner models, and set-theoretic topology

The exact DMC/DC status is: DC implies DMC; strictness is known in ZFA; whether
DMC implies DC in ZF is open. Do not assert strictness in ZF. The contrary
published catalogue remark is read-only Phase-3 debt and is not a dependency,
justification, external proof, or supplier for this run.

The Shelah lower bound states that `omega_1` is inaccessible in `L`. Do not
strengthen it to inaccessibility in every `L[r]` unless a separate complete
primary proof is recovered and the owner authorizes that changed claim.

SET-28 must provide complete primary-source proofs for the normal Moore-space
and PMEA interfaces, including the precise normality, collectionwise-normality,
developability, and consistency-strength hypotheses used by each implication.
Named-theorem summaries, consistency slogans, or citations to the recorded
catalogue fail the gate. If the Nyikos or Fleissner proof cannot be reconstructed
in full from authoritative sources, escalate rather than publish.

## Gate discipline

Preserve exact declared IDs and companion ownership. A B page requires only its
A companion. Do not add a new pair or consume either remaining five-cap slot
without owner authorization. Any stale task text conflicts with this direction
and the binding plan amendments must be ignored and reported to the next gate.
