# Step 3a reader report — batch 5

Run: numerical-optimization-dynamics-2026-10-16  
Batch: 5  
Scope: A/B pair linear-scheme-stability-and-lax-equivalence

## Review inventory

Reviewed the batch manifest, batch-5 authoring notes, proof-contract file,
cross-batch dependency list, and selected source-coverage records as evidence,
not as verdicts. The live Autopilot status was in Step 3a read; batch 5 had no
cross-batch prerequisites.

Opened both assigned pages:

- library/numerical-pdes-and-spatial-discretization/linear-scheme-stability-and-lax-equivalence.md
- library/numerical-pdes-and-spatial-discretization/linear-scheme-stability-and-lax-equivalence-examples.md

Opened all eight assigned items, in supplier order within the batch:

- def-common-space-linear-scheme-interface
- thm-diagonal-heat-semigroup-on-c-zero
- def-finite-grid-common-space-lift
- thm-lax-equivalence-for-common-banach-space-schemes
- lem-grid-stability-transfers-under-uniform-norm-comparison
- ex-stable-explicit-grid-heat-step
- ex-consistent-unstable-explicit-grid-heat-step
- ex-mesh-grid-norm-hides-common-space-instability

Read the 18 unique published suppliers directly named by the original assigned
items: cor-exponential-reciprocal-and-positivity,
def-axiom-schema-of-replacement, def-axiom-schema-of-separation,
def-bounded-linear-operator, def-c-zero-and-ell-infinity,
def-cartesian-product, def-dependent-choice, def-natural-numbers,
def-operator-norm, def-real-exponential-function-and-e,
def-strongly-continuous-semigroup,
lem-finite-truncations-are-dense-in-c0-and-ell-one,
lem-real-and-complex-c-zero-are-banach, thm-derivative-of-exponential,
thm-exponential-addition-formula, thm-exponential-is-strictly-increasing,
thm-induction-principle, and thm-uniform-boundedness-principle. Also opened
thm-recursion and def-space-of-bounded-linear-operators for the repair, and
thm-baire-category-for-complete-metric-spaces, def-peano-system,
def-complete-metric-space, and cor-archimedean-reciprocal to check the
recursion and DC-qualified uniform-boundedness arguments.

The transitive dependency graph has 571 item carriers. I did not independently
re-audit every carrier in that closure; I checked the assigned proofs against
their exact cited suppliers and inspected the additional supplier arguments
needed for the recursion and DC/UBP uses.

## Mathematical review and edit

The common-space interface consistently uses one Banach-space norm for local
consistency, finite-time power stability, and convergence. Its dense invariant
core is exactly what the Duhamel estimate and density extension require. The
stated finite-time semigroup bound is explicit, so the proof does not silently
invoke local boundedness of a strongly continuous semigroup.

**Repair — def-common-space-linear-scheme-interface, Definition, former lines
47–48.** The item defined S_nu^n recursively but did not establish that the
recursion produced a unique family. I added thm-recursion and
def-space-of-bounded-linear-operators to its dependencies and stated that the
recursion theorem applies on B(X): the identity is bounded, and left
composition by a bounded linear operator preserves boundedness and linearity.
The corresponding empty-space boundary evidence in
research/numerical-optimization-dynamics-2026-10-16-batch-5.proof-contracts.json
now records this well-definedness check. The item had no verification.judge
record to remove.

Validation after the final edit: reflow completed with no change; precheck
reported 0 checked, 0 failing; proof-layout reported 1 item, 0 steps, 0
defects.

The diagonal heat-semigroup proof establishes mapping into c_0, contraction,
the semigroup identities, and strong continuity by a finite-head/tail
argument. The finite-grid lift is bounded from the declared factor bounds;
P_nu R_nu = I and kernel invariance supply the decomposition needed by the
transfer lemma. That lemma derives the power formula on the grid range and
kernel, then proves both norm-bound implications with the stated uniform
constants.

The Lax proof’s telescoping identity is correct. Stability and local consistency
bound the Duhamel sum on the dense core; the finite-time solution bound and
density extend convergence to all of X. Conversely, locally uniform
convergence gives pointwise boundedness of all admissible powers, including the
finitely many early mesh indices. The proof forms the index set with
Separation, its operator family with Replacement, and applies the cited
uniform-boundedness theorem under the explicit DC assumption. The UBP supplier
states DC, and its Baire supplier also states and uses DC. No extra choice
principle is assumed in the assigned proof.

The three examples check their claimed behavior directly. For
ex-stable-explicit-grid-heat-step, the m^-2 steps give coordinate multipliers
in [0,1], while the finite-coordinate local defect tends to zero; the Lax
theorem then gives convergence under DC. For
ex-consistent-unstable-explicit-grid-heat-step, the finite-coordinate defect
still tends to zero, while the highest-mode one-step multiplier is
3 - m - 1/m, whose magnitude is unbounded for admissible grid times. In
ex-mesh-grid-norm-hides-common-space-instability, the weighted grid norm makes
Q_m idempotent with powers bounded by 2, while the lifted high-mode image has
common-space norm m; the required uniform norm comparisons fail as claimed.

## Source check

The cited [Trefethen text](https://people.maths.ox.ac.uk/trefethen/4all.pdf)
contains Chapter 4, §4.2, Theorem 4.1 (printed pp. 153–158; PDF pp. 8–13).
It states the consistency/stability/convergence equivalence, discusses the
dense-subspace and norm caveats, and explicitly marks the proof unwritten. The
assigned theorem supplies its own local proof, so the citation is not presented
as a proof source.

The cited [LeVeque AMath 585–6 notes mirror](https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf)
contains Chapter 12, §12.5, equation (12.18) and its uniform power-bound
stability condition (printed p. 161; PDF p. 167), followed by §12.5.1 on
PDE-versus-ODE stability. These source references support the context claimed
on the pages; the local proofs establish the specific common-space and
spectral-grid results.

## Page verdicts and remaining issues

| Page | Verdict |
|---|---|
| linear-scheme-stability-and-lax-equivalence (A) | Sound after the interface well-definedness repair. Its summary accurately describes the same-norm Lax result, DC use, and norm-comparison caveat. |
| linear-scheme-stability-and-lax-equivalence-examples (B) | Sound. Its summary accurately describes the stable, unstable, and mesh-norm examples and their direct checks. |

No uneditable defects found. No blocker. The repair is recorded in this report
and the working-tree diff; the final findings list is empty.
