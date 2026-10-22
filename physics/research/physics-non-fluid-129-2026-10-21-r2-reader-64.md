# Step 3a reader report — batch 64

Run: physics-non-fluid-129-2026-10-21-r2

## Scope and inventory

Reviewed the assigned pages qftx-heavy-field-eft and
qftx-heavy-field-eft-examples, and their manifest-listed page prerequisites:
qft-ir02, qftx-analytic-prerequisites,
mixed-effects-and-longitudinal-models, and qm-math-fock-and-equilibrium.
The two assigned pages are in the quantum-field-theory-mathematics category;
the mixed-model and quantum-mechanics prerequisites are in their corresponding
category directories.

Reviewed all six assigned items in supplier-first order:

1. lem-qftx-finite-heavy-gaussian-square
2. def-qftx-heavy-gaussian-data
3. thm-qftx-heavy-derivative-bound
4. def-qftx-finite-gaussian-shell-transform
5. prop-qftx-finite-gaussian-shell-semigroup
6. cex-qftx-eft-outside-band

Opened the batch-64 manifest, cross-batch dependency record, notes, and all six
proof-contract entries. Read the 22 unique direct item suppliers used by the
assigned items:

- def-axiom-of-choice, def-hilbert-space,
  def-l-p-space-as-a-quotient-by-null-functions,
  def-measure-preserving-transformation-and-system,
  def-multivariate-normal-law, def-natural-logarithm,
  def-real-and-complex-inner-product-space
- lem-ac-supplies-sequential-choices-for-probability-constructions,
  lem-characteristic-function-of-a-multivariate-normal-law,
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space,
  lem-nrqm-observables-l2-multiplication-spectral-measure,
  lem-unbounded-adjoint-is-well-defined-and-closed
- thm-cauchy-schwarz-in-an-inner-product-space,
  thm-exponential-is-strictly-increasing,
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
  thm-integrals-are-invariant-under-measure-preserving-maps,
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
  thm-nondegenerate-multivariate-normal-law-has-density,
  thm-pvm-integral-is-a-star-homomorphism,
  thm-qftx-positive-unbounded-spectral-calculus,
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique,
  thm-tonelli-theorem-for-sigma-finite-product-spaces

Also opened def-adjoint-of-a-densely-defined-unbounded-operator to check the
adjoint-criterion use in the current batch-59 supplier. Page bodies for the two
assigned pages are empty as required by the active compact statement-first
workflow. No TikZ or tikzcd diagrams occur in the assigned files.

## Review and page verdicts

qftx-heavy-field-eft: page identity, title, category, placement, and declared
page prerequisites match the assigned manifest. Its five assigned mathematical
items state finite-dimensional or operator-theoretic claims with explicit
domains and hypotheses. The Gaussian square, band-limited remainder, shell
transform, and shell-composition arguments are valid under their stated
suppliers. **Page verdict: hold on its batch-59 spectral-calculus dependency;
no page-local defect found.**

qftx-heavy-field-eft-examples: page identity, companion relation, category,
placement, and prerequisites match the manifest. Its sole counterexample
correctly constructs a compactly supported unit vector outside the low-energy
spectral band and proves the proposed full-spectrum bound fails for every
N >= 0 when E < M. It does not contradict the band-limited estimate.
**Page verdict: hold on the inherited batch-59 dependency; no page-local defect
found.**

The proof arguments of lem-qftx-finite-heavy-gaussian-square,
prop-qftx-finite-gaussian-shell-semigroup, and cex-qftx-eft-outside-band
close with their stated hypotheses and suppliers. The definition and theorem
consumers of the positive spectral calculus are otherwise mathematically
coherent, but their dependency closure is not acceptance-ready until the
in-run supplier finding below is resolved.

## Edit

In def-qftx-finite-gaussian-shell-transform, clarified the unit convention:
the coordinates x,z carry field-coordinate units and covariance C has their
squared units; V(x) is dimensionless in exp(-V(x)), and a physical action
interpretation is conditional on normalization by hbar. The old sentence
grouped V with the coordinate convention without specifying the dimensionless
exponent. Reviewed its sole assigned consumer,
prop-qftx-finite-gaussian-shell-semigroup; its mathematical interface and
proof use are unchanged.

Updated that item's proof-contract risk note to record the wording repair.
The item had no verification.judge record to remove; its existing
verification.precheck: pending remains untouched. Scoped checks:

- reflow.mts: unchanged.
- precheck.mts: PASS, direct, 1 item checked.
- proof-layout.mjs: 1 item, 3 steps, 0 defects.

## Uneditable finding and blocker

thm-qftx-positive-unbounded-spectral-calculus is assigned to current-run
batch 59 and is a direct supplier of def-qftx-heavy-gaussian-data and
thm-qftx-heavy-derivative-bound; the B-page counterexample reaches it through
the latter. In Proof 1.1, the supplier invokes “the defining criterion for the
adjoint” to infer that a graph limit lies in D(A*). Its Statement identifies
self-adjointness with equality to the Hilbert-space adjoint but does not define
the adjoint, and its own dependency list does not include
def-adjoint-of-a-densely-defined-unbounded-operator. The exact available
definition gives the criterion the proof needs. The batch-64 consumer's own
closed-adjoint lemma dependency does not declare this missing input for the
batch-59 supplier. Add and cite the exact adjoint definition in the supplier
(or state it locally) and retain the stated domain-equality hypothesis.

I read the current supplier bytes and checked their raw SHA-256 against the
immutable batch-59 pre-reader snapshot; they match at
890c5345ada34e98fca108ec0c782b8d64d004f2e8a25dc096881423e43b63a6.
The finding is returned as in-run-dependency, bound to that pre snapshot,
with def-qftx-heavy-gaussian-data as the assigned consumer.

**Blocker:** mathematical acceptance of the affected batch-64 dependency chain
should wait for the batch-59 supplier to add the adjoint definition
prerequisite. No edit to batch 59 was made.

## Coverage limitation

All assigned pages/items, all 22 unique direct item suppliers, and the exact
additional adjoint definition needed to assess the reported issue were opened.
I did not independently re-audit the full transitive proof closures of the
published mathematical suppliers. The finding's source bytes are bound to the
immutable pre-reader snapshot; no claim is made about later producer edits.
