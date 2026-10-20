# Batch 41 — Step 1 authoring notes

## Scope and inventory

Pair: momentum-and-accelerated-training (A) and
momentum-and-accelerated-training-examples (B), category
machine-learning.

The batch schedule is dependency level 3 with prerequisite batch 39. The
dispatch task binds scheduling input
29e907d1dc4e4b1883273370ca88d8eea3e56200d4602c30b55ce5dce2b62857.
The current shared dependency-level artifact has input hash
f68f1f3bab78ece4cac4fdfec1dfdf450a3f163bfc54dbe81ba8c99d71bab13f; its
batch-41 row still says level 3 with prerequisite batch 39. This hash mismatch
is recorded in batch-41.dependency-inputs.json; the shared artifact remains
owner-maintained.

The scaffold manifest declares these six items before their carriers are
written:

- alg-heavy-ball-momentum, level 0; dependencies alg-gradient-descent,
  def-jacobian-matrix-and-gradient, and
  def-total-derivative-in-euclidean-space.
- alg-nesterov-accelerated-gradient, level 0; the same three dependencies.
- thm-heavy-ball-rate-on-strongly-convex-quadratics, level 1; dependencies
  alg-heavy-ball-momentum, alg-gradient-descent,
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
  prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases,
  thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
  def-euclidean-inner-product, def-jacobian-matrix-and-gradient,
  prop-gradient-of-a-quadratic-matrix-form, and thm-of-square-roots.
- ex-unstable-heavy-ball-parameters, level 1; dependencies
  alg-heavy-ball-momentum, prop-gradient-of-a-quadratic-matrix-form, and
  thm-of-archimedean.
- ex-stochastic-momentum-experiment, level 1; dependency
  alg-nesterov-accelerated-gradient.
- ex-heavy-ball-optimized-quadratic-spectrum, level 2; dependencies
  thm-heavy-ball-rate-on-strongly-convex-quadratics,
  alg-heavy-ball-momentum, alg-gradient-descent, and
  prop-gradient-of-a-quadratic-matrix-form.

Only the heavy-ball algorithm is an in-run logical supplier to the theorem;
the theorem is the in-run supplier to the optimized-spectrum example. The
two other B examples depend only on level-0 A algorithms plus published
external results. No cycle or additional local definition is needed.

## Plan reconciliation

The task's design locator plan-machine-learning-track.md L356 is stale:
the current L356 is inside ML-37, Automatic Differentiation and
Backpropagation. The assigned pair is the complete ML-40 section at current
lines 373–375. The current track file SHA-256 is
0f469eecbfeb051f1fac59a008f7be02df42ca5738617ac53b6b4644ce0aa017, matching
the refreshed plan-spec.json description. ML-40 and the plan-spec pair row
agree on the page identities, three page requirements, heavy-ball and Nesterov
updates, tuned quadratic parameters, the comparison step for steepest descent,
and the exclusion of a general stochastic-momentum rate.

There is also a source-locator discrepancy in both controlling descriptions:
they cite Bottou et al. §§6.5 and 7.1 for momentum/acceleration. The complete
arXiv PDF labels §6.5 “Methods that Employ Diagonal Scalings” (printed p. 64),
§7.1 “Gradient Methods with Momentum” (printed p. 68), and §7.2 “Accelerated
Gradient Methods” (printed p. 70). The required heavy-ball and Nesterov
updates are in §§7.1 and 7.2, respectively; the source-backed item locators
use those exact sections. This corrects the citation locator only; the plan's
mathematical scope remains controlling and unchanged.

The source's phrase “contraction constants” is treated as a scalar
characteristic-root factor. The authored theorem does not claim a one-step
Euclidean contraction and explicitly handles repeated characteristic roots at
the interval endpoints.

## Prerequisite review

- matrix-differentiation-and-first-order-spectral-perturbation is a published
  required page. Its relevant published supplier
  prop-gradient-of-a-quadratic-matrix-form states and proves the real
  derivative and Hessian of q(x)=1/2||Cx||_2^2. Its two direct differential
  suppliers, prop-matrix-differentials-obey-sum-product-and-adjoint-rules
  and prop-differentials-of-trace-and-frobenius-linear-functionals, were
  inspected with their complete proofs. The real Fréchet and Frobenius
  conventions match the real matrix factorization used here.
- the-spectral-theorem-and-singular-value-decomposition is a published
  required page. Its relevant published supplier
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms states and proves
  an orthonormal eigenbasis for a self-adjoint map on a finite-dimensional
  real inner-product space. The definition, orthonormal-basis matrix
  criterion, and real-normal classification used in that proof were inspected.
  The real-normal proof's complex spectral theorem, Schur triangularisation,
  normal-upper-triangular lemma, splitting criterion, complete-invariant-flag
  proposition, and Gram–Schmidt supplier were also inspected. The chain stays
  finite-dimensional; the standard coordinate basis is explicit, and no
  arbitrary-index choice is used.
- The required in-run page nonconvex-gradient-descent-and-stationarity is
  draft and contains thm-smooth-bounded-below-gd-stationarity. Its complete
  statement, Facts & Assumptions, and proof were inspected. It proves
  fixed-step stationarity under smoothness and an along-iterates lower bound;
  it is not an update definition. The exact fixed-step update is supplied by
  the published alg-gradient-descent, whose full Definition was inspected.
  Batch 41 does not use the stationarity theorem as a logical premise. Its
  historical ready record is dated 2026-10-18 and binds source hash
  955d3a6829188cc54b86426677f268dc45a7397c45990c24c74085f53df30da2; that
  record was not treated as current. The actual current
  `step1-decisions.mjs check --run machine-learning-all-101-2026-10-19`
  evaluated 1,172 items (997 ready; overall run still open), and the supplier
  theorem has a current ready decision. Its page prerequisite is recorded as
  verified in batch-41.cross-batch-dependencies.json. No batch-41 item uses
  the stationarity theorem as a logical premise.
- The quadratic gradient is obtained by factoring the positive-definite
  symmetric matrix through its finite spectral decomposition and applying
  prop-gradient-of-a-quadratic-matrix-form; the required nonnegative square
  roots are supplied by thm-of-square-roots. The scalar unstable example
  uses thm-of-archimedean only to show its explicit iterates are unbounded.
  The matrix-gradient supplier's sum/product/adjoint and trace-functional
  proofs, and the adjoint-matrix and composition suppliers used by the
  self-adjoint criterion, were inspected. No additional axiom is used.

## Source retrieval and reading

The following full texts were retrieved and inspected. The required
source-fetch-check --stamp command on batch-41.source-coverage.json returned
4/4 verified, 4 newly stamped, 0 documented drops, exit code 0.

- Bottou, Curtis, and Nocedal, Optimization Methods for Large-Scale Machine
  Learning, §7.1–7.2, printed pp. 68–70,
  <https://arxiv.org/pdf/1606.04838>. Read the complete heavy-ball and
  Nesterov update discussion, the quadratic factor comparison, the stochastic
  momentum qualification, and the Nesterov look-ahead-gradient distinction.
- Yudong Chen, UW–Madison CS/ISyE/Math/Stat 726, Lecture 9–10,
  §1 and Algorithm 1, PDF pp. 1–2,
  <https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf>.
  Read the heavy-ball/Nesterov distinction and the Nesterov update. The lecture
  gives only a rate pointer for heavy ball; its rate shorthand is not used as a
  proof.
- Trung Vu, Convergence of Heavy-Ball Method and Nesterov’s Accelerated
  Gradient on Quadratic Optimization, §2, lines 56–82 of the retrieved HTML,
  <https://trungvietvu.github.io/notes/2018/Momentum>. Read the full
  heavy-ball coordinate recurrence and its parameter minimization. The local
  theorem independently supplies a complete root-radius argument and treats
  repeated endpoint roots; the note's rho+o(1) norm-rate shorthand is not
  copied. Its separate Nesterov optimization section is not used.
- Sutskever, Martens, Dahl, and Hinton, On the Importance of Initialization
  and Momentum in Deep Learning, §3 and Table 1, PDF pp. 3–4,
  <https://proceedings.mlr.press/v28/sutskever13.pdf>. Read the stated
  autoencoder initialization, update count, minibatch size, momentum schedule,
  learning-rate selection, table values, and the authors' limitation to
  training-error reporting. Only the Curves training-error comparison is
  used in the reported-experiment example.

An initial web-open attempt of the candidate IFT 6085 Lecture 5 PDF returned
HTTP 404. It was a search candidate, not a planned or cited source. Alternative
searches found the full UW–Madison lecture notes and the full author-hosted
heavy-ball note above; those were inspected and fetched successfully. No
required source remains unresolved, and no source was marked dropped.

## Completed-item record

Item-specific claim text, exact dependency uses, proof decisions, current
checks, and remaining obligations are appended here after each carrier is
finished.

### alg-heavy-ball-momentum

The Definition maps a continuously Fréchet differentiable
F:R^d→R with continuous total derivative, initial vector, constant α>0 and
β≥0, and finite horizon T≥1 to the sequence initialized by w0=w1=w_init and updated by
w_(t+1)=w_t−α∇F(w_t)+β(w_t−w_(t−1)). The Definition states the partial-
derivative condition and coordinate-gradient convention. When β=0, each
update is the fixed-step gradient-descent update. A finite prefix is the
output; the item makes no convergence claim.

Dependencies: alg-gradient-descent, def-jacobian-matrix-and-gradient, and
def-total-derivative-in-euclidean-space. Its in-run item level is 0.
The definition is supported by Bottou et al., §7.1, printed p. 68, and the
UW–Madison Lecture 9–10, §1, PDF p. 1. These are the full-text sources
recorded above and in batch-41.source-evidence.json.

Decision: authored as a draft algorithm; no proof or proof contract is
applicable. Definition precheck is n/a. Scoped metadata, dependency, and render
checks pass. No mathematical prerequisite remains unresolved for the update
formula. Native readiness recording is blocked by the batch-71 manifest issue
below. Next item: alg-nesterov-accelerated-gradient.

### alg-nesterov-accelerated-gradient

The Definition maps a continuously Fréchet differentiable
F:R^d→R with continuous total derivative, initial vector, finite horizon T≥1, and prescribed parameters
α_t>0 and β_t∈R to the look-ahead point
tilde w_t=w_t+β_t(w_t−w_(t−1)) followed by
w_(t+1)=tilde w_t−α_t∇F(tilde w_t). The Definition states the partial-
derivative condition and coordinate-gradient convention. When β_t=0, the
update is a fixed-step gradient-descent step at w_t. The parameter sequences
are not assigned a convergence guarantee.

Dependencies: alg-gradient-descent, def-jacobian-matrix-and-gradient, and
def-total-derivative-in-euclidean-space. Its in-run item level is 0.
The definition is supported by Bottou et al., §7.2, printed pp. 70–71, and
the UW–Madison Lecture 9–10 Algorithm 1, PDF p. 2. No Nesterov convergence
claim is imported. Definition precheck is n/a; scoped dependency and render
checks pass. Native readiness recording is blocked by the batch-71 manifest
issue below. Next item: thm-heavy-ball-rate-on-strongly-convex-quadratics.

### thm-heavy-ball-rate-on-strongly-convex-quadratics

The statement fixes a real symmetric positive-definite matrix A with all
eigenvalues in [c,L], c>0, defines the heavy-ball modal characteristic
polynomial, and identifies its tuned interval root factor
q=(sqrt(L)-sqrt(c))/(sqrt(L)+sqrt(c)). It also compares the gradient-descent
modal factor for the specified step gamma=2/(L+c) and proves the tuned heavy-ball
parameters minimize the largest root modulus over the entire interval among
constant alpha>0, beta>=0. It calls out repeated roots at lambda=c and lambda=L
and does not assert a one-step Euclidean contraction.

The proof route is explicit: establish self-adjointness in the standard
orthonormal coordinates; diagonalize A; factor A=C^TC using positive
square-roots; use the inspected matrix quadratic gradient supplier to obtain
grad F=A(w-w*); derive each scalar recurrence; compute the tuned characteristic
roots; compute the gradient-descent multipliers; then lower-bound every
constant heavy-ball pair by evaluating its characteristic polynomial at R and
-R for the endpoint eigenvalues. The endpoint polynomial signs are justified
separately for real roots and conjugate roots. The c=L case is handled
separately. This proof uses no choice axiom.

Dependencies: alg-heavy-ball-momentum, alg-gradient-descent,
cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases,
def-euclidean-inner-product, def-jacobian-matrix-and-gradient,
prop-gradient-of-a-quadratic-matrix-form,
thm-matrix-of-the-adjoint-is-the-conjugate-transpose, and
thm-of-square-roots. Its in-run item level is 1. Sources and locators:
Bottou et al., §7.1, printed pp. 68–69;
UW–Madison Lecture 9–10, §1, PDF p. 1; Trung Vu, §2, lines 56–82 of the
retrieved HTML. The proof contract and scoped proof checks pass. The required
page-level dependency on the batch-39 nonconvex-gradient page was verified
against the last successful live Step-1 snapshot; no batch-39 result is used
as a logical premise. Final native readiness recording is blocked by an
unrelated malformed batch-71 manifest, recorded below. Next items:
ex-unstable-heavy-ball-parameters and ex-stochastic-momentum-experiment.

### ex-unstable-heavy-ball-parameters

The example uses F(x)=x^2/2, alpha=27/8, beta=1/4, and w0=w1=1. The
gradient supplier gives grad F(x)=x. The resulting recurrence has
characteristic polynomial r^2+(17/8)r+1/4=(r+2)(r+1/8), and the explicit
iterate formula is
w_t=-(3/5)(-2)^t+(8/5)(-1/8)^t. The proof verifies the initial values,
recurrence, and unboundedness of every tail, so the iterates do not converge.

Dependencies: alg-heavy-ball-momentum,
prop-gradient-of-a-quadratic-matrix-form, and thm-of-archimedean. Its in-run
item level is 1. No external source is used; this is a constructed scalar
example outside the tuned parameter regime. The verification, strict contract,
precheck, proof-layout, dependency, and render checks pass. No axiom is used.
The batch-39 page is a verified page prerequisite and is not a logical premise
of this example. Native readiness recording is blocked by the batch-71
manifest issue below. Next item: ex-stochastic-momentum-experiment.

### ex-stochastic-momentum-experiment

The example records the Curves, MNIST, and Faces deep-autoencoder experiment
reported by Sutskever et al.: sigmoid networks, sparse initialization, 750,000
updates per trial, minibatches of 200, no regularization, a slowly increasing
momentum schedule capped by mu_max, and a best training learning rate selected
from the listed six-value grid for each schedule. It transcribes the Table 1
Curves training squared errors 0.074 for Nesterov with mu_max=0.999 and 0.48
for zero-momentum SGD. The item says the source reports training errors only
and claims no general stochastic rate or test-risk guarantee.

Dependency: alg-nesterov-accelerated-gradient, an in-run level-0 item; this
example is level 1. Sources: Sutskever et al., §3 and Table 1, PDF pp. 3–4;
Bottou et al., §7.1 stochastic-momentum discussion, printed p. 69. This is a
reported experiment with no mathematical proof section, so provenance records
the proof as not supplied and no proof contract is applicable. Source fetch
and final scoped checks pass. Native readiness recording is blocked by the
batch-71 manifest issue below. Next item: ex-heavy-ball-optimized-quadratic-spectrum.

### ex-heavy-ball-optimized-quadratic-spectrum

The example uses A=diag(1,4,9), F(w)=1/2 w^T A w, and w0=w1=(1,1,1).
It specializes c=1, L=9 to alpha=1/4, beta=1/4, and q=1/2. Direct scalar
polynomials are (r-1/2)^2, r^2-r/4+1/4, and (r+1/2)^2; the middle roots
are 1/8 ± i sqrt(15)/8, all with modulus 1/2. The gradient-descent step
1/5 has modal multipliers 4/5, 1/5, and -4/5, so its largest factor is 4/5.
The repeated endpoint roots are explicitly checked.

Dependencies: alg-heavy-ball-momentum, alg-gradient-descent,
prop-gradient-of-a-quadratic-matrix-form, and
thm-heavy-ball-rate-on-strongly-convex-quadratics. Its in-run item level is 2.
This is a generated finite example with a complete direct verification and no
added axiom. Its strict proof contract, precheck, proof-layout, dependency, and
render checks pass. Next action: native readiness recording, subject to the
batch-71 manifest issue below.

## Scoped checks and readiness

Completed scoped checks:

- The batch-41 `dependencyLevels` calculation passes for all six items with
  levels 0, 0, 1, 1, 1, and 2 matching the manifest. `manifest-deps` passes for
  six items with zero missing arrays or errors.
- Strict proof contracts pass for all three proof-bearing items: zero errors
  and zero warnings. Precheck passes all three proof-bearing items; the two
  algorithm definitions and reported experiment are not applicable.
  Proof-layout passes six changed items and 19 steps with zero defects.
- Focused `depcheck` passes for all six items and both pages with zero errors
  or warnings. Rendercheck passes all eight files. The statement-link audit
  finds no inline statement links; both authored pages contain frontmatter
  only.
- Source-fetch-check verifies all four recorded sources, with zero drops.
- `content-policy --manifest-only` reports six `batch-item-already-exists`
  errors because the authored carriers now exist. This scaffold-only check was
  run after carrier creation; manifest dependency and focused content checks
  pass.

Global checks expose unrelated live-run issues that were left untouched:

- `item-dependency-levels check --run machine-learning-all-101-2026-10-19`
  reports 17 empty scaffold inventories in other batches; the scoped batch-41
  calculation passes as listed above.
- `batch-dependency-levels check --run machine-learning-all-101-2026-10-19`
  reports a stale shared dependency-level artifact. The dispatch input hash is
  `29e907d1dc4e4b1883273370ca88d8eea3e56200d4602c30b55ce5dce2b62857`; the
  current shared artifact input hash is
  `f68f1f3bab78ece4cac4fdfec1dfdf450a3f163bfc54dbe81ba8c99d71bab13f`.
- The last successful live `step1-decisions check` evaluated 1,172 items and
  found 997 ready; its overall run remained open. At that check the batch-39
  stationarity supplier had a current ready decision. A later attempt to use
  `step1-decisions record` for `alg-heavy-ball-momentum` failed before writing
  any decision: `Duplicate item undefined`. The active batch-71 manifest
  `research/machine-learning-all-101-2026-10-19-batch-71.pages.json` contains
  string-form item entries on `foundation-models-transfer-and-scaling-evidence`
  and its examples page; the full-run snapshot loader cannot create the record
  while these entries are present. No decision files were written, and no
  other pair's manifest or carrier was edited. Retry after valid native
  manifest shape is restored; do not bypass the recorder.

No mathematical prerequisite or source remains unresolved for batch 41. Its
content and scoped checks are complete, but the six item decision rows remain
unwritten until the full-run recorder can load a valid snapshot. Run-wide
readiness also remains open on the unrelated empty scaffolds and stale shared
dependency-level artifact. No run-state files, shared plans, published
content, or verdicts were edited.
