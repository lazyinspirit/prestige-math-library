# phase-2-next-17 batch 2 — Step 1 construction notes

## Ownership and construction history

This batch owns only `weak-and-weak-star-topologies` and
`distributions-test-functions-and-differentiation`, with their B companions.
No published item, shared plan, engine state, or verdict was edited.

The complete scaffold and coverage were imported from `phase-2-next-15` as
directed by the fresh-run handoff. The 19-A/9-B weak inventory ultimately comes
from the historically reviewed frontier-34 FA prerequisite scaffold; the
48-A/8-B distribution inventory is the complete historical batch-9 inventory
required by the later functional-analysis design amendment. Imported readiness
was not treated as approval: all 84 current item objects, every declared direct
dependency, the relevant transitive suppliers, source dispositions, and proof
routes were rechecked, then fresh Step-1 records and hashes were written for this
run. Existing item order and IDs were preserved. No item was rebuilt or minted.

Owner reconciliation before this dispatch made one mathematical change to the
import: the distribution local-structure theorem now proves its needed
norm-preserving extension directly from `thm-zorn`, and the A page directly
requires `order-zorn-and-the-axiom-of-choice`. Its compact-support and global
structure consumers inherit the explicit full-AC hypothesis. This removes the
former dependency on `norming-and-separation-under-hahn-banach` without changing
the selected pair or inventory.

## Design control and conflicts

For `weak-and-weak-star-topologies`, FA-8 together with the later amendments in
§§14.1 and 14.4 of `research/plan-functional-analysis-track.md` is the controlling
design. The current `research/plan-spec.json` controls page metadata and reading
order for this run.

- The original FA-8 discussion starts from the older FA-4/FA-5/FA-7
  neighborhood. The current plan instead gives the exact direct requirements
  `locally-convex-spaces-and-continuous-separation` and `nets-and-filters`, with
  duality, relative HB, and sequential UBP available only transitively. The
  current plan and §14.1 control this conflict.
- Section 14.4 controls the exact 19-A inventory, forbids duplicating the
  published `def-weak-star-topology` and
  `thm-bipolar-closure-for-linear-subspaces`, and requires genuine nets, the
  `sqrt(n)e_n` closure example, the point-carrying unbounded net, and the bounded
  preadjoint converse. The imported scaffold preserves each requirement.

For `distributions-test-functions-and-differentiation`, the functional-analysis
track controls. FA-24 is the only listed location that specifies this pair's own
scope, conventions, inventory, and proof routes, while §14.4 is its later
inventory amendment. The complex-analysis mention at line 5367 is only a
downstream CA-PT-1 prerequisite row. The Fourier-analysis mention at line 70 is
only a downstream FR-9 prerequisite row and nearby common-spine description.
The functional-analysis mention at line 75 is a summary pointer; the full FA-24
design begins at line 1762 and the later amendments control where they differ.

- Original FA-24 lists 31 A items and broader historical roots. Section 14.4
  requires the complete 48-A inventory, including the cutoff, LF-topology,
  bounded-set, parameter, tensor, primitive, complex-L1, product-density, and
  compact-convolution helpers. The later amendment controls.
- The historical batch-9 page directly required the FA-23 examples companion.
  The current plan instead requires the A page
  `schwartz-space-and-the-plancherel-theorem`; the current plan controls.
- Section 14.1 adds `the-divergence-theorem-and-classical-stokes` for the
  Newtonian-kernel example. Owner reconciliation additionally adds
  `order-zorn-and-the-axiom-of-choice` for the direct-Zorn local structure proof.
  These are the three current direct requirements; the B page requires only its
  A page.
- The bilinear complex distribution pairing (no conjugation), the distinction
  between the LF topology and its sequence criterion, and the requirement that
  at least two factors have compact support in the stated three-factor
  associativity theorem are preserved.

Both selected A pages have empty `items` arrays in the current plan spec, while
the imported batch manifest has the controlling 19/48 inventories. This is a
real representation conflict, not permission to erase the scaffold: the plan is
still in its documented pre-materialization state, and the dispatch import record
and `research/phase-2-next-17-prerequisite-audit.md` explicitly require preserving
the completed inventory. The plan's page IDs, order values, categories, and
`requires` arrays remain authoritative and match the batch manifest.

The Alpha drift report records `no-drift` for both selected pairs. Direct and
transitive closure was independently recomputed from current files; no new page
prerequisite pair and no same-run cross-batch item edge was found. The owned
consumer input therefore remains the reviewed empty array in
`research/phase-2-next-17-batch-2.cross-batch-dependencies.json`.

## Source reading and dispositions

The owned coverage file records exact locators, support, and a disposition for
all 94 harvested results. Full text at all five URLs is backed by current fetch
stamps; `source-fetch-check --stamp` revalidated 5/5 and created no replacement
or dropped-source decision. The relevant statements and complete arguments were
inspected at these ranges:

- Bühler–Salamon, *Functional Analysis* (2017), §§3.1.1–3.1.4, printed
  pp. 118–131, and Exercises 3.60–3.62, pp. 161–162.
- Teschl, *Topics in Real and Functional Analysis* (2017), §4.4,
  pp. 125–128, and §5.3, pp. 146–149.
- Dyatlov, MIT 18.155 notes (2022), complete Chapters 2–4, pp. 27–55;
  §§6.1–6.2, pp. 67–75; §7.1, pp. 77–80; and §§8.1–8.2, pp. 87–92.
- Gelca, *Functional Analysis*, complete Chapter 7 §§7.2–7.7,
  pp. 103–122.
- Knapp, *Advanced Real Analysis*, corrected second edition, IV §7 and
  Lemma 4.27/Propositions 4.28–4.29, printed pp. 136–140 (PDF pp. 166–170),
  and V §§1–3, printed pp. 179–201 (PDF pp. 209–231).

The harvest defers weak compactness/Goldstine results to
`banach-alaoglu-goldstine-and-krein-milman`, Schur/reflexive sequential results
to `reflexivity-and-eberlein-smulian`, and homogeneous/fundamental-solution
results to `fundamental-solutions-newtonian-potentials-and-green-functions`.
Kernel, singular-support, and Weyl-lemma material absent from the plan is marked
out of scope with a specific reason. No harvested result lacks a disposition.

## Dependency, convention, and axiom audit

All 48 distinct direct external dependencies are currently published. Their
relevant statements and proofs were inspected, not merely their page membership,
for hypotheses, implication direction, scalar convention, support and topology
conditions, well-definedness, and axiom strength. Local dependencies are earlier
in manifest order. No circular or forward proof dependency was found.

The inspected external interfaces include the relative-HB norming, bidual, and
geometric-separation chain; AC_omega sequential UBP; complete-metric Baire;
Arzelà–Ascoli; finite-measure RN representation; Fubini; L1 approximate
identities; C1 change of variables; multivariable Taylor–Peano; explicit smooth
cutoffs; Green's second identity; and the real/complex sequence-dual interfaces.

Choice bookkeeping is explicit:

- Weak Hausdorffness, weak convex closure, norm lower semicontinuity, the
  weak-star dual identification, and the preadjoint converse assume relative
  HB. Weakly convergent sequence boundedness assumes HB plus AC_omega;
  AC_omega is used through sequential UBP. Weak non-first-countability assumes
  HB plus AC_omega, with AC_omega choosing finite-coordinate refinements of a
  supplied countable base. Neither sequence theorem uses DC or full AC.
- The sequence-space examples that once relied on a published real-only
  counting-measure duality corollary instead use direct finite phase/power tests.
  The coefficient arguments work over both scalar fields and are choice-free.
  The `sqrt(n)e_n` example separately declares HB and AC_omega through its weak
  boundedness and Hausdorff suppliers.
- Test-function cutoffs and the Euclidean subordinate partition are constructed
  deterministically from rational balls and the published explicit smooth step.
  They do not spend an AC_omega mollifier result.
- The regular-distribution embedding assumes AC_omega because injectivity uses
  the published L1 approximate-identity theorem; its delta counterexample
  propagates this assumption. Pullback itself is choice-free, while compatibility
  with regular distributions is separately stated under the change-of-variables
  supplier's AC_omega hypothesis.
- Uniform finite-order bounds and sequential multiplier convergence assume DC
  exactly through complete-metric Baire. Compactness of closed bounded subsets
  of `D(Omega)` assumes AC_omega and DC through the current Arzelà–Ascoli and
  metric-compactness route.
- Local distribution structure assumes full AC. It derives the exact
  norm-preserving extension directly from `thm-zorn` by chain unions, the
  one-dimensional interval argument, and complex realification; it then uses the
  AC-explicit finite-measure L1 density lemma. It does not consume the relative
  HB package or any published dual-norm-attainment result. The compact-support
  lemma inherits only this explicit AC hypothesis, and the global theorem also
  uses AC to select its countable family of local primitive representations.
- The Newtonian example checks the Green supplier's two-C2 hypothesis on each
  punctured compact region and tracks the inward normal on the inner sphere.

No item consumes a Recorded result to prove its replacement. No owned page is in
Foundations, and the recomputed dependency closure does not reach
`deferred-set-theory-beyond-choice`.

## Published defects found

These publication-contract defects are evidence for the canonical defect ledger.
They were not edited here, and the owned proofs avoid the defective routes.

1. `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` is published but
   omits AC from its statement. Its proof chooses densities via
   `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`,
   whose statement explicitly assumes AC, and then glues the countable family.
   `cor-ell-p-duality-by-counting-measure` inherits the omission and is real-only
   although older consumers treated it as complex. Planned repair: propagate AC,
   or publish a direct choice-free real/complex sequence proof. This batch has no
   actual use of either defective claim and supplies finite phase/power arguments.
2. `thm-dual-norms-every-vector` is published without an HB/AC hypothesis but
   invokes real and complex Hahn–Banach extension. The published
   `lem-transpose-is-bounded-and-has-the-same-norm` inherits that hidden cost.
   Planned repair: use `cor-relative-hahn-banach-dual-norming` under explicit HB,
   or split the choice-free `||T*||<=||T||` estimate from equality. This batch
   uses the direct estimate where sufficient and explicit relative HB only where
   norming is actually needed.
3. `thm-bipolar-closure-for-linear-subspaces` states its primal norm-closure and
   density clauses without HB, but its proof imports
   `cor-annihilator-detects-closure`, whose separation route uses HB. Its
   weak-star double-annihilator core has a valid finite-evaluation proof. Planned
   repair: split the clauses or state HB for the primal consequences. The owned
   annihilator lemma uses only the valid weak-star core, proves kernel closedness
   directly, and invokes `thm-relative-hahn-banach-geometric-separation` under an
   explicit HB hypothesis for its primal clause.

None of these defects is an actual prerequisite on the proof path used by an
owned item, so they do not block the new suppliers.

## Check results

Final owned-batch results after readiness recording:

- `manifest-deps`: 84 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 84 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 94 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --stamp`: 5/5 sources fetch-verified and 5/5 resolved;
  0 new stamps and 0 drops.
- readiness: 84/84 owned records are current and `ready`; none is stale,
  missing, or escalated.
- inventory: weak A/B 19/9; distribution A/B 48/8.
- `frontier-dependency-ledger refresh --require-reviewed`: completed and
  deduplicated; Batch 2 is reviewed and has no cross-batch edge.
- `drift-review-check`: 17 pages reviewed, 0 spec edits, no blocked edges.
- `extcheck`: repository-wide `OK`; its 55 warnings concern pre-existing
  published consequences of recorded-not-proved material, and none is an owned
  item or a dependency path introduced by this batch.
- `validate-plan research/plan-spec.json --repo .`: `OK`; page order is acyclic
  and consistent, with no item cycle, forward reference, B-page dependency, or
  unresolved ID among materialized item lists. Redundant-prerequisite warnings
  are existing plan diagnostics, not owned edits.

The whole-run `manifest-deps` invocation currently reports 455 items and zero
errors. The whole-run manifest-only policy invocation reports eight errors outside
Batch 2: three missing suppliers in the manifold-degree batch and five missing
suppliers in the affine Weyl–Kac batch. The whole-run readiness check remains open
while other batches record decisions and while four plan pages still have empty
scaffolds. These unrelated concurrent-batch findings do not alter any Batch 2
readiness decision.

## Step 3b checkpoint — definition of weak topology

Completed `def-weak-topology-on-a-normed-space`: real/complex scalar-linear
bounded dual; initial topology, including empty intersections and the zero
space; no point-separation or choice assumption. Read full local suppliers
`def-dual-space-of-a-normed-space` and `def-initial-and-final-topology`.
Source consulted: Bühler–Salamon §3.1.1, Lemma 3.6, printed p120/PDF p128
(`/tmp/phase2-weak-buhler-salamon.pdf`). The next lemma will supply the
finite-disk basis and vector-operation estimates, including the complex case.
Rendering and strict contract check passed for this item; definition has no
proof-format obligation. Recorded accept only after writing/checking.
No local supplier added; no open mathematical gap in this definition.
Next: `lem-basic-weak-neighborhoods`, then relative-HB Hausdorffness.
Owner-authoring-direction file was absent at dispatch start. Current engine
status verifies this run is at Step 3b; git head is `79c8c7519`.

Completed `lem-basic-weak-neighborhoods`: disk refinement, empty coordinate
maximum zero, convex/balanced balls, addition epsilon/2 and joint multiplication
bounds. Source: BS printed pp119–121/PDF127–129 read completely for Lemma 3.6.
Only direct dependency is the authored weak-topology definition. Adopted
precheck's n.1 phase numbering; precheck, render and strict contract passed.
Accepted after checks. No gap; next item is HB-relative Hausdorffness.

Completed `thm-weak-topology-is-hausdorff`: HB norming for the fixed difference
x-y, disjoint d/3 disks, singleton case. Read full relative dual-norming proof
and HB definition; source BS Lemma 3.6(iv), p121/PDF129. All three direct
suppliers examined; exact excerpts in contract. Precheck, rendering, strict
contract pass. Accepted. No gap; next weak net/sequence convergence definition.

Completed `def-weak-convergence-of-nets-and-sequences`: nonempty directed
preorders, full scalar convergence quantifiers and both equivalence directions;
finite common upper bounds, not choice; sequences are only the N special case.
Read direct net definitions and BS p121; render/strict contract pass.
The acceptance command was blocked by an unrelated current scope review
requirement for grothendieck-spectral-sequences-and-computations. Decision
recording is pending; do not mistake checked content for a stored acceptance.
Next: basic weak-star neighborhoods; read the published weak-star definition.

The unrelated scope gate cleared; the weak net-convergence definition's
acceptance was successfully recorded on retry.
Completed `lem-basic-weak-star-neighborhoods`: full finite-disk basis proof,
seminorm operation estimates and Hausdorffness by one distinguishing
evaluation, without HB. Read full published weak-star definition; BS
Lemma 3.6 and Example 3.9 are the source interfaces (the complex argument is
written locally). Precheck, render, strict contract pass; accepted.
Next: weak-star convergence definition, then finite-coordinate dual proofs.

Completed `def-weak-star-convergence`: nonempty directed-preorder quantifiers,
finite simultaneous eventual conditions in both directions; specified bounded
limit, uniqueness by function equality. Direct dependencies read; render and
strict contract pass; accepted. No gap. Next: continuous dual of weak topology.

Completed `thm-continuous-dual-of-a-weak-topology`: common-kernel scaling,
factorization through the actual finite-coordinate image, finite basis extension,
explicit finite-sum norm bound and converse. Empty/dependent coordinates treated.
Read BS pp125–127/PDF133–135 (Lemmas 3.13–3.14 and Theorem 3.12) and full
published finite-dimensional boundedness proof. No infinite algebraic-dual
assumption or AC. Precheck/render/strict contract pass; accepted. Next:
`thm-continuous-dual-of-a-weak-star-topology`.

### thm-continuous-dual-of-a-weak-star-topology

Authored finite evaluation-kernel factorization and finite basis extension, giving x=sum c_j x_j. Existence is ZF; uniqueness spends HB only through point separation. Source BS Theorem 3.12/Lemmas 3.13–3.14 pp125–127; exact local supplier passages reread. No open gap. Next: convex closure theorem.

Direct examined dependencies: `lem-basic-weak-star-neighborhoods`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-norm-closed-convex-iff-weakly-closed

Authored closure convexity with both endpoint weights, empty-set case and strict separation of each exterior point by a weak-open real half-space. Full relative geometric separation proof read, exact closed/nonempty/singleton hypotheses checked. BS Lemma 3.15 p127 read. HB propagated; no gap. Next: weak closure of sphere.

Direct examined dependencies: `def-weak-topology-on-a-normed-space`, `thm-relative-hahn-banach-geometric-separation`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball

Complete finite-kernel line argument with explicit T=(2+norm x)/norm v, IVT hypotheses and sphere endpoint checked. Added explicit published thm-intermediate-value dependency, read full canonical bisection proof, refreshed scope and cross-batch ledger. Canonical proof phase dependency adopted. HB only for ball closedness; no gap. Next weak-sequence boundedness.

Direct examined dependencies: `lem-basic-weak-neighborhoods`, `thm-norm-closed-convex-iff-weakly-closed`, `thm-intermediate-value`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-weakly-convergent-sequences-are-norm-bounded

Read full sequential UBP proof (independent countable selection followed by deterministic sign recursion), operator-space completeness and HB bidual isometry. Authored exact Banach-domain applications and finite-head bounds; HB plus AC_omega for primal, only AC_omega for Banach-domain weak-star. No gap. Next: net lower semicontinuity.

Direct examined dependencies: `def-weak-convergence-of-nets-and-sequences`, `cor-relative-hahn-banach-bidual-isometry`, `thm-bounded-operator-space-is-banach`, `thm-sequential-uniform-boundedness-under-countable-choice`, `def-hahn-banach-extension-principle-relative`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### cor-weak-convergence-implies-lower-semicontinuity-of-the-norm

Authored extended-real net liminf via nonempty tail infima, scalar eventual lower estimates and fixed-vector HB norm formula. Infinite liminf, zero limit and zero space checked. Direct suppliers read; no choice beyond explicit HB. No gap; next finite-dimensional topology equivalence.

Direct examined dependencies: `def-weak-convergence-of-nets-and-sequences`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-weak-and-norm-topologies-agree-iff-finite-dimensional

Read full real/complex finite-coordinate isomorphism proof. Authored explicit coordinate-radius bound in finite dimension, zero-dimensional case, and finite-kernel unboundedness obstruction in infinite dimension. Both iff directions choice-free; no gap. Next: first-countability obstruction.

Direct examined dependencies: `lem-basic-weak-neighborhoods`, `thm-coordinate-map-for-a-finite-dimensional-normed-space`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-infinite-dimensional-weak-topology-is-not-first-countable

Read complete ZF no-countably-infinite-Hamel-basis proof including rational coding and deterministic nested balls. Authored countable-choice refinements, full finite-kernel factorization, greedy basis scan, Banach exclusion and HB injection contradiction. Contract cites the dual theorem statement and includes the factorization locally. Exact axiom uses checked; no gap. Next annihilator closedness.

Direct examined dependencies: `thm-continuous-dual-of-a-weak-topology`, `lem-basic-weak-neighborhoods`, `thm-banach-space-no-countably-infinite-hamel-basis`, `thm-bounded-operator-space-is-banach`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-annihilators-are-weak-and-weak-star-closed

Read full published annihilator definition and bipolar proof. Valid weak-star identity uses only finite-evaluation separation; its primal/density assertions hide HB and remain published concerns. Authored kernel intersections and local HB real/complex separation proof of primal identity, avoiding defective clause. No gap. Next bounded transpose continuity.

Direct examined dependencies: `def-annihilator-and-preannihilator`, `lem-basic-weak-neighborhoods`, `lem-basic-weak-star-neighborhoods`, `thm-bipolar-closure-for-linear-subspaces`, `thm-relative-hahn-banach-geometric-separation`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-transpose-is-weak-to-weak-continuous

Full transpose definition read; authored composition bounds and inverse-subbasis continuity for T and T*. Direct transpose contraction avoids the published norm-equality item and its hidden HB. Both fields, zero spaces and arbitrary nets covered; no gap. Next preadjoint theorem.

Direct examined dependencies: `def-transpose-of-a-bounded-operator`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-transpose-is-weak-star-to-weak-star-continuous

Authored direct transpose bound, continuity via evaluations, unique evaluation representatives of S, scalar-linearity and explicit norm bound norm(Tx)<=norm(S)norm(x). HB used for uniqueness/norming; no completeness/reflexivity or transpose norm equality. Direct suppliers read; no gap. Next SOT/WOT definition.

Direct examined dependencies: `thm-continuous-dual-of-a-weak-star-topology`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-strong-and-weak-operator-topologies

Read full bounded-operator-space and initial-topology definitions; authored actual initial topologies, finite neighborhoods, net equivalences and specified bounded limit convention. Both scalar fields and zero spaces covered; no gap. Next implication hierarchy.

Direct examined dependencies: `def-space-of-bounded-linear-operators`, `def-weak-topology-on-a-normed-space`, `def-initial-and-final-topology`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### lem-norm-implies-strong-implies-weak-operator-convergence

Full operator norm definition read. Authored both inequalities and explicit epsilon denominators 1+norm(x), 1+norm(f), preserving zero cases and arbitrary nets. No hidden uniformity or choice; no gap. All 19 A-page items now have authored content. Next weak-topology B examples.

Direct examined dependencies: `def-strong-and-weak-operator-topologies`, `def-operator-norm`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p

Read all declared power, conjugation, finite Holder and sequence norm interfaces in full. Authored explicit finite phase-power tests, zero coefficient branch, q-sum bound, null coefficients and unit norm calculation. Real-only counting-measure remark used only for real moduli; no defective duality or AC. No gap; next ell-one counterexample.

Direct examined dependencies: `def-conjugate-exponents`, `rem-ell-p-is-l-p-of-counting-measure`, `thm-holder-finite-real-exponents`, `thm-real-power-laws`, `lem-complex-conjugation-and-modulus-laws`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one

Authored bounded summation functional F, exact F(e_n)=1 and coordinate tests forcing any limit to zero. Both fields via absolute convergence, choice-free. Direct suppliers read; no gap. Next dual coordinate weak-star example.

Direct examined dependencies: `rem-ell-p-is-l-p-of-counting-measure`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star

Full published complex coefficient proof read; real representation proved locally by bounded coefficients and absolute-series truncation. E_n(x)=x_n tends to zero and E_n(e_n)=1 gives sharp norm. Choice-free; no gap. Next c0-dual topology distinction.

Direct examined dependencies: `thm-complex-dual-of-ell-one-is-ell-infinity`, `rem-ell-p-is-l-p-of-counting-measure`, `def-weak-star-convergence`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-weak-star-and-weak-topologies-on-a-dual-can-differ

Read full real/complex c0-dual coefficient proof. Explicit e_n tests null c0 coordinates but bounded summation on ell-one is constantly one; hence the topologies differ. No choice or Schur theorem. No gap; next genuine sequential-closure counterexample.

Direct examined dependencies: `thm-dual-of-c0-is-ell-one`, `def-weak-star-convergence`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-weak-closure-can-exceed-sequential-weak-closure

Read BS Exercise 3.60 completely, printed p161/PDF169. Authored coefficient-square estimate, harmonic-block contradiction, strictly positive n convention and finite-range sequential closedness under HB+AC_omega. Source only supplies an exercise/hint; complete argument is local. No gap; next shift examples.

Direct examined dependencies: `def-conjugate-exponents`, `rem-ell-p-is-l-p-of-counting-measure`, `thm-holder-finite-real-exponents`, `thm-weakly-convergent-sequences-are-norm-bounded`, `thm-weak-topology-is-hausdorff`, `lem-basic-weak-neighborhoods`, `def-hahn-banach-extension-principle-relative`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-right-shift-powers-converge-in-wot-not-sot

Read full complex Cauchy–Schwarz proof and modulus interfaces. Authored finite conjugate-coefficient test, series representation, shifted tail bound, exact isometry and fixed e0 obstruction. No duality/choice gap. Next left shift.

Direct examined dependencies: `def-strong-and-weak-operator-topologies`, `rem-ell-p-is-l-p-of-counting-measure`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, `lem-complex-conjugation-and-modulus-laws`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-left-shift-powers-converge-in-sot-not-operator-norm

Authored exact squared tail identity and moving unit witness L^n e_n=e0 with zero-based indices. Local dependencies read; no Hilbert adjoint or choice needed. No gap; next incomplete-domain example.

Direct examined dependencies: `def-strong-and-weak-operator-topologies`, `def-operator-norm`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain

Authored T_n(x)=n x_n, exact norm n and pointwise eventual zero; reciprocal truncations provide a Cauchy sequence with no c00 limit. No foreign B-page supplier or choice needed; no gap. Next point-carrying unbounded net.

Direct examined dependencies: `def-operator-norm`, `def-weak-star-convergence`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded

Authored all-point triples, explicit directedness, eventual neighborhood membership and norm divergence along every tail. No selected point per neighborhood; ZF construction uses the verified finite-kernel unboundedness supplier. No gap. All 28 weak-pair items authored; next page composition and distribution scaffolds.

Direct examined dependencies: `lem-basic-weak-neighborhoods`, `thm-weak-and-norm-topologies-agree-iff-finite-dimensional`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-test-function-space-d-of-an-open-set

Read full multi-index/Ck definition and Dyatlov pp27–29. Authored complex componentwise smoothness, actual test functions, compact support inside Omega, smooth zero extension and empty-domain convention. No choice; no gap. Next fixed-support seminorm space.

Direct examined dependencies: `def-ck-and-multi-index-notation-in-several-variables`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-fixed-support-test-function-frechet-space

Authored increasing derivative seminorms, bounded metric series, empty/empty-interior compact cases and deferred completeness obligation. Earlier test definition read. No gap in definition; next genuine locally convex final topology.

Direct examined dependencies: `def-test-function-space-d-of-an-open-set`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-test-function-topology

Authored all fixed-support-continuous seminorms, finite translated balls, locally convex and bounded-set conventions. LF existence/universal-property assertions retained as later proof obligations, not inferred from sequence convergence. No gap in definition; next distribution definition.

Direct examined dependencies: `def-fixed-support-test-function-frechet-space`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-distribution

Authored actual LF-continuous complex-linear dual with bilinear pairing, neighborhood continuity and zero-domain case. Dyatlov p27 comparison read; its estimate definition is reserved for the forthcoming equivalence proof. No gap; next regular functional.

Direct examined dependencies: `def-test-function-topology`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-regular-distribution-from-a-locally-integrable-function

Read full published Rn-local-integrability definition; supplied its necessary open-Omega convention locally with finite-cover equivalence. Authored bilinear integral, compact absolute bound and a.e.-representative independence. Dyatlov pp27–28 read. Continuity/injectivity remain assigned to their theorem; no definition gap. Next convolution candidate.

Direct examined dependencies: `def-test-function-space-d-of-an-open-set`, `def-locally-integrable-function-on-r-n`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-convolution-of-a-distribution-with-a-test-function

Authored bilinear reflected-test pairing, exact maximal safe domain x-supp(phi) subset Omega, compact-margin openness and zero-test case. Only actual test pairing is asserted before the smoothness theorem. No gap; next deterministic Euclidean cutoffs/localization.

Direct examined dependencies: `def-distribution`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### lem-test-function-cutoffs-and-euclidean-localization

Full published explicit smooth-step cutoff proof read. Authored compact finite-product cutoff and deterministic rational-ball shell partition: K_j distance exhaustion, H_j shells, G_j annuli, least finite-list codes, support escape and positive normalization. Subordination does not choose open-cover labels. No choice or mollifier supplier used; no gap. Next fixed-support completeness.

Direct examined dependencies: `def-ck-and-multi-index-notation-in-several-variables`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-fixed-support-test-function-spaces-are-complete

Read full uniform-derivative-limit supplier and Knapp printed pp137–140 (LF propositions, not a substitute completeness proof). Authored uniform limits on zero extensions, real/imaginary coordinate-line differentiation and metric/seminorm estimates; weights normalize the scaffold metric by 1/2 without changing its claim. No choice; no gap. Next LF universal property.

Direct examined dependencies: `def-fixed-support-test-function-frechet-space`, `thm-uniform-derivative-limit-on-a-closed-interval`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-test-function-lf-topology-universal-property

Read Knapp Proposition 4.28 and 4.29 complete (printed pp137–140). Authored the special test-space construction directly via all admissible seminorms, global derivative suprema, scalar continuity and finite-subcover cofinality; no general LF theorem or choice used. No gap; next operations continuity.

Direct examined dependencies: `def-test-function-topology`, `lem-fixed-support-test-function-spaces-are-complete`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-test-function-operations-are-continuous

Read complete chain-rule and mixed-partial symmetry suppliers. Authored coordinate product rule, multi-index induction, explicit multiplier estimate, compact pullback support and finite chain-rule coefficient induction; LF continuity follows only after these estimates. No joint parameter claim or choice; no gap. Next local finite-order criterion.

Direct examined dependencies: `lem-test-function-lf-topology-universal-property`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-chain-rule-for-total-derivatives`, `thm-symmetry-of-higher-mixed-partials`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-continuous-dual-of-a-weak-star-topology

Receipt retry for unchanged completed argument: Authored finite evaluation-kernel factorization and finite basis extension, giving x=sum c_j x_j. Existence is ZF; uniqueness spends HB only through point separation. Source BS Theorem 3.12/Lemmas 3.13–3.14 pp125–127; exact local supplier passages reread. No open gap. Next: convex closure theorem.

Direct examined dependencies: `lem-basic-weak-star-neighborhoods`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball

Receipt retry for unchanged completed argument: Complete finite-kernel line argument with explicit T=(2+norm x)/norm v, IVT hypotheses and sphere endpoint checked. Added explicit published thm-intermediate-value dependency, read full canonical bisection proof, refreshed scope and cross-batch ledger. Canonical proof phase dependency adopted. HB only for ball closedness; no gap. Next weak-sequence boundedness.

Direct examined dependencies: `lem-basic-weak-neighborhoods`, `thm-norm-closed-convex-iff-weakly-closed`, `thm-intermediate-value`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-weakly-convergent-sequences-are-norm-bounded

Receipt retry for unchanged completed argument: Read full sequential UBP proof (independent countable selection followed by deterministic sign recursion), operator-space completeness and HB bidual isometry. Authored exact Banach-domain applications and finite-head bounds; HB plus AC_omega for primal, only AC_omega for Banach-domain weak-star. No gap. Next: net lower semicontinuity.

Direct examined dependencies: `def-weak-convergence-of-nets-and-sequences`, `cor-relative-hahn-banach-bidual-isometry`, `thm-bounded-operator-space-is-banach`, `thm-sequential-uniform-boundedness-under-countable-choice`, `def-hahn-banach-extension-principle-relative`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cor-weak-convergence-implies-lower-semicontinuity-of-the-norm

Receipt retry for unchanged completed argument: Authored extended-real net liminf via nonempty tail infima, scalar eventual lower estimates and fixed-vector HB norm formula. Infinite liminf, zero limit and zero space checked. Direct suppliers read; no choice beyond explicit HB. No gap; next finite-dimensional topology equivalence.

Direct examined dependencies: `def-weak-convergence-of-nets-and-sequences`, `cor-relative-hahn-banach-dual-norming`, `def-hahn-banach-extension-principle-relative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p

Receipt retry for unchanged completed argument: Read all declared power, conjugation, finite Holder and sequence norm interfaces in full. Authored explicit finite phase-power tests, zero coefficient branch, q-sum bound, null coefficients and unit norm calculation. Real-only counting-measure remark used only for real moduli; no defective duality or AC. No gap; next ell-one counterexample.

Direct examined dependencies: `def-conjugate-exponents`, `rem-ell-p-is-l-p-of-counting-measure`, `thm-holder-finite-real-exponents`, `thm-real-power-laws`, `lem-complex-conjugation-and-modulus-laws`, `def-weak-convergence-of-nets-and-sequences`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-test-function-cutoffs-and-euclidean-localization

Receipt retry for unchanged completed argument: Full published explicit smooth-step cutoff proof read. Authored compact finite-product cutoff and deterministic rational-ball shell partition: K_j distance exhaustion, H_j shells, G_j annuli, least finite-list codes, support escape and positive normalization. Subordination does not choose open-cover labels. No choice or mollifier supplier used; no gap. Next fixed-support completeness.

Direct examined dependencies: `def-ck-and-multi-index-notation-in-several-variables`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-fixed-support-test-function-spaces-are-complete

Receipt retry for unchanged completed argument: Read full uniform-derivative-limit supplier and Knapp printed pp137–140 (LF propositions, not a substitute completeness proof). Authored uniform limits on zero extensions, real/imaginary coordinate-line differentiation and metric/seminorm estimates; weights normalize the scaffold metric by 1/2 without changing its claim. No choice; no gap. Next LF universal property.

Direct examined dependencies: `def-fixed-support-test-function-frechet-space`, `thm-uniform-derivative-limit-on-a-closed-interval`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-test-function-lf-topology-universal-property

Receipt retry for unchanged completed argument: Read Knapp Proposition 4.28 and 4.29 complete (printed pp137–140). Authored the special test-space construction directly via all admissible seminorms, global derivative suprema, scalar continuity and finite-subcover cofinality; no general LF theorem or choice used. No gap; next operations continuity.

Direct examined dependencies: `def-test-function-topology`, `lem-fixed-support-test-function-spaces-are-complete`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-local-finite-order-characterization-of-distributions

Authored both directions with explicit neighborhood scaling, zero seminorm and zero constant cases, and per-compact witness quantifiers. Dyatlov Definition 2.1 p27 was read; the LF equivalence is proved locally from the authored universal property. No choice or gap. Next distribution order definition.

Direct examined dependencies: `def-distribution`, `lem-test-function-lf-topology-universal-property`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-order-of-a-distribution-on-a-compact-set

Authored least compactwise order, zero convention and exact global quantifier order with varying constants. Local finite-order theorem reread; no new proof obligation or choice. Next derivative definition.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-distributional-derivative

Authored signed bilinear transpose definition with continuous-composition well-definedness, zero and degree-zero conventions. Dependencies read in full earlier; no choice or gap. Next smooth multiplication.

Direct examined dependencies: `def-distribution`, `thm-test-function-operations-are-continuous`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### def-multiplication-of-a-distribution-by-a-smooth-function

Authored bilinear smooth multiplier action, continuous-composition justification and unit/zero/associativity identities by testing. No product of arbitrary distributions or choice used; no gap. Next Leibniz theorem.

Direct examined dependencies: `def-distribution`, `thm-test-function-operations-are-continuous`.
Checks: rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-leibniz-rule-for-distributions

Authored first-order test calculation, signed composition of derivatives and full multi-index Pascal induction including edge terms. The derivative definition supplies the proved test operations; no later commutation theorem consumed. No choice or gap. Next Dirac definition.

Direct examined dependencies: `def-distributional-derivative`, `def-multiplication-of-a-distribution-by-a-smooth-function`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### def-dirac-delta-and-its-derivatives

Authored Dirac evaluation with direct admissible-seminorm continuity and signed derivative formula, support and empty-domain conventions. Dyatlov Definition 2.4 p28 read. No finite-order criterion silently invoked and no sharpness presumed; next sheaf theorem.

Direct examined dependencies: `def-distribution`, `def-distributional-derivative`.
Checks: rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-distributions-form-a-sheaf

Read Dyatlov Definition 2.11, Proposition 2.12 and full Theorem 2.13 proof, printed pp31–34. Authored restrictions, unlabelled uniquely determined partition summands, finite compactwise bounds and uniqueness. Arbitrary indexed covers do not introduce countable label choices. No gap; next support definition.

Direct examined dependencies: `def-distribution`, `thm-local-finite-order-characterization-of-distributions`, `def-multiplication-of-a-distribution-by-a-smooth-function`, `lem-test-function-cutoffs-and-euclidean-localization`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### def-support-of-a-distribution

Authored largest vanishing open via proved sheaf locality, support-zero equivalence and test locality. Relative versus ambient closedness and compact support are explicit. No choice or gap. Next compact support finite-order bound.

Direct examined dependencies: `thm-distributions-form-a-sheaf`.
Checks: rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-compactly-supported-distributions-have-global-finite-order

Authored cutoff reduction, full finite product expansion and compact-neighborhood estimate valid for every test; explained why restriction to another D_K preserves the exponent. Empty support and m=0 explicit. No choice or gap. Next one-point support classification; Peano Taylor supplier read fully.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `def-support-of-a-distribution`, `lem-test-function-cutoffs-and-euclidean-localization`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-distributions-supported-at-one-point

Read Dyatlov full Theorem 4.19/Lemma 4.22 proof, pp53–54, and full published Peano Taylor proof. Authored shrinking cutoff estimates with uniform little-o control, m=0 separately, finite cutoff-monomial jet factorization, signs, coefficient uniqueness and both support directions. No choice or gap. Next bounded test sets.

Direct examined dependencies: `def-dirac-delta-and-its-derivatives`, `thm-compactly-supported-distributions-have-global-finite-order`, `lem-test-function-cutoffs-and-euclidean-localization`, `cor-multivariable-taylor-formula-with-peano-remainder`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-bounded-test-function-sets-have-common-compact-support

Read Gelca Theorem 7.2.2 and complete proof pp104–105. Replaced its selected escaping witnesses by aggregate shell suprema: global Q0 boundedness ensures finite denominators and piecewise weights need only be locally bounded, not continuous. Authored converse absorption and sequence finite-tail bound. This is a local strategy refinement with unchanged deps/claim; no choice or gap. Next sequence criterion.

Direct examined dependencies: `lem-test-function-lf-topology-universal-property`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-sequential-convergence-in-test-function-space

Authored both sequence directions, proving limit support containment from degree-zero convergence and incorporating initial supports by a finite union. Gelca pp104–105 and local boundedness proof read. No arbitrary-net criterion, choice or gap. Next weak/strong distribution topologies.

Direct examined dependencies: `lem-test-function-lf-topology-universal-property`, `lem-bounded-test-function-sets-have-common-compact-support`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-weak-and-strong-topologies-on-distributions

Authored weak evaluation and strong bounded-set seminorm topologies, finiteness by neighborhood absorption, exact net criteria and Hausdorff separation. No unwarranted weak/strong sequence equivalence or choice. Next regular embedding.

Direct examined dependencies: `def-distribution`, `lem-bounded-test-function-sets-have-common-compact-support`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### thm-locally-integrable-functions-embed-in-distributions

Read full mollifier approximate-identity definition/proposition and Lp convergence proof, plus dominated convergence. Added explicit published approximate-identity supplier and refreshed scope/ledger. Authored local cutoff convolution injection with rational-ball null cover and strong seminorm bound; AC_omega is only needed for the published L1 approximation route. Dyatlov pp27–28 regular embedding proof read earlier. No gap; next strong-to-weak implication.

Direct examined dependencies: `def-regular-distribution-from-a-locally-integrable-function`, `thm-local-finite-order-characterization-of-distributions`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-dominated-convergence`, `lem-test-function-cutoffs-and-euclidean-localization`, `def-weak-and-strong-topologies-on-distributions`, `def-countable-choice`, `prop-mollifier-families-are-l-one-approximate-identities`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-strong-distribution-convergence-implies-weak-convergence

Authored the exact singleton-seminorm proof for arbitrary nets, with no converse asserted. No choice or gap. Next derivative continuity and classical compatibility; audit missing integration suppliers before authoring.

Direct examined dependencies: `def-weak-and-strong-topologies-on-distributions`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-distributional-differentiation-is-continuous-and-commutes

Read full integration-by-parts, Riemann Fubini and Borel box integral comparison proofs. Added their explicit dependencies plus cutoff/regular conventions and AC_omega, refreshed scope and ledger. Authored signed derivative algebra, bounded-image seminorm continuity and localized coordinate integration for Ck compatibility. AC_omega confined to the latter supplier route. No unresolved gap; next smooth parameter pairing.

Direct examined dependencies: `def-distributional-derivative`, `def-weak-and-strong-topologies-on-distributions`, `thm-test-function-operations-are-continuous`, `thm-symmetry-of-higher-mixed-partials`, `def-regular-distribution-from-a-locally-integrable-function`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-integration-by-parts`, `thm-riemann-fubini-on-product-rectangles`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-distribution-pairing-with-smooth-parameter-families

Read full Dyatlov Proposition 6.3 pp68–69 and Proposition 7.4 p80; the latter explicitly notes a circular tensor/mollification route. Read full mean-value inequality and integral bound/linearity suppliers. Authored uniform difference quotients and deterministic cell-measure weighted sums converging in complete D_K, covering arbitrary compact measurable parameter sets without Jordan assumptions or AC. Added actual dependencies and refreshed scope/ledger. No gap; next convolution smoothness.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `thm-test-function-operations-are-continuous`, `lem-fixed-support-test-function-spaces-are-complete`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-mean-value-inequality`, `thm-integral-triangle-inequality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-convolution-with-a-test-function-is-smooth

Authored compact H-supp(phi) support control, parameter smoothness, explicit reflection-sign cancellation and safe-domain restriction for derivative tests. Dyatlov Proposition 6.3 proof pp68–69 read and independently proved locally. No choice or gap; next Baire uniform finite-order bounds, with unrestricted pointwise-net clause requiring scope scrutiny.

Direct examined dependencies: `def-convolution-of-a-distribution-with-a-test-function`, `lem-distribution-pairing-with-smooth-parameter-families`, `def-distributional-derivative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions

Read full Baire supplier and Dyatlov Theorems 4.14/4.16 and Proposition 4.17 pp50–52, plus complete Gelca Theorem 7.4.1 pp107–108. Authored closed-disk Baire proof, explicit 4j/epsilon scaling, pointwise limits from bounded families and the sequence corollary. Clarified the scaffold ambiguous limit clause to match its sequence sources; arbitrary-net pointwise boundedness is not inferred. Scope refreshed; report this qualification for owner reconciliation. No proof gap; next diffeomorphism pullback.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `lem-fixed-support-test-function-spaces-are-complete`, `thm-baire-category-for-complete-metric-spaces`, `def-dependent-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-pullback-of-a-distribution-by-a-diffeomorphism

Read full C1 L1 change-of-variables supplier, including Borel and completion steps. Authored nonvanishing smooth absolute Jacobian, compact test transformation, continuous composition and regular compatibility with local integrability/null-class checks. AC_omega only for that compatibility; no gap. Next tensor candidate definition.

Direct examined dependencies: `def-distribution`, `thm-test-function-operations-are-continuous`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-countable-choice`.
Checks: rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### def-tensor-product-of-distributions

Authored iterated candidate with compact-projection support and actual parameter-lemma well-definedness, product evaluation and linearity. Continuity and reversed pairing remain assigned theorem obligations. No choice or definition gap. Next compact-support extension.

Direct examined dependencies: `lem-distribution-pairing-with-smooth-parameter-families`, `def-distribution`.
Checks: rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-compactly-supported-distributions-extend-to-smooth-functions

Authored cutoff independence and locality, explicit compact derivative bound, and uniqueness from test density proved one finite seminorm neighborhood at a time. This improves the scaffold cutoff-sequence route by avoiding countable selection. No HB or choice; no gap. Next varying multiplier sequences.

Direct examined dependencies: `thm-compactly-supported-distributions-have-global-finite-order`, `def-support-of-a-distribution`, `lem-test-function-cutoffs-and-euclidean-localization`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-sequential-convergence-of-smooth-multipliers-and-distributions

Authored exact two-term error split and 2^m compact product estimate, using only the proved DC common-bound theorem. Source Gelca Theorem 7.4.1 and local uniform theorem read; no net generalization or gap. Next ambient-closed-support extension.

Direct examined dependencies: `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions`, `def-multiplication-of-a-distribution-by-a-smooth-function`, `def-dependent-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-extension-by-zero-for-distributions-with-ambient-closed-support

Authored the exact open cover Omega and Rn minus F, overlap vanishing, support and uniqueness. Ambient closedness and unbounded F cases explicit; no choice or gap. Next translation-invariant operator theorem, then local structure suppliers.

Direct examined dependencies: `thm-distributions-form-a-sheaf`, `def-support-of-a-distribution`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-translation-invariant-test-function-operators-are-convolutions

Read Gelca full Theorem 7.7.3 pp118–119. Authored reflection/evaluation construction and signs, uniqueness, and explicit H-K finite-order seminorm estimate for the converse, avoiding its Frechet closed-graph shortcut. Added direct finite-order dependency and refreshed scope/ledger. No choice or gap; next complex L1 density supplier.

Direct examined dependencies: `thm-convolution-with-a-test-function-is-smooth`, `lem-test-function-lf-topology-universal-property`, `lem-distribution-pairing-with-smooth-parameter-families`, `thm-local-finite-order-characterization-of-distributions`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities

Read full AC-explicit finite real Lp RN representation supplier (only bounded representatives), complex integral definition, DCT and triangle inequality. Authored level-set essential bounds, complex combination and explicit truncation extension to all L1. Added DCT/integral inequality edges and refreshed scope. Bound 2||Lambda|| sufficient; no gap. Next full local structure proof including direct Zorn extension.

Direct examined dependencies: `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-axiom-of-choice`, `thm-dominated-convergence`, `thm-integral-triangle-inequality`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-local-structure-of-distributions-as-derivatives-of-continuous-functions

Read complete Gelca Theorem 7.6.2 proof pp113–115, Zorn proof, real RN density supplier and complex FTC/Fubini suppliers. Authored arbitrary-compact localization, explicit repeated-FTC kernels, direct chain/Zorn/one-dimensional interval extension, norm-controlled complexification, bounded density and Lipschitz lower-orthant primitive with Fubini signs. AC is explicit and supplies its countable integration subcase. Exponent (m+2,...,m+2) preserved. No gap; next support-controlled finite primitive sum.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-zorn`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities`, `def-regular-distribution-from-a-locally-integrable-function`, `def-distributional-derivative`, `def-axiom-of-choice`, `def-multiplication-of-a-distribution-by-a-smooth-function`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-compact-support-continuous-primitive-representation

Read complete Gelca Theorem 7.6.3 pp115–116 and the authored local exponent proof. Authored cutoff localization on its actual compact support, inverse Leibniz identity by binomial cancellation and explicit continuous coefficient functions with beta_i<=m+2. AC only inherited from representation; no gap. Next global locally finite grouping.

Direct examined dependencies: `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions`, `thm-leibniz-rule-for-distributions`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `def-axiom-of-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-global-locally-finite-structure-of-distributions

Read complete Gelca Theorem 7.6.4 pp115–116. Authored explicit locally finite open enlargements (radii <=1/i), AC selection of finite support-controlled representations, locally finite grouping and testwise finite reindexing. Uniform global order gives the fixed finite index box. Added direct localization suppliers and refreshed scope/ledger. No gap; next density of finite sums of product tests.

Direct examined dependencies: `lem-compact-support-continuous-primitive-representation`, `thm-distributions-form-a-sheaf`, `lem-test-function-cutoffs-and-euclidean-localization`, `def-axiom-of-choice`, `thm-compactly-supported-distributions-have-global-finite-order`, `def-multiplication-of-a-distribution-by-a-smooth-function`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-finite-sums-of-product-tests-are-dense-on-product-open-sets

Authored choice-free Riemann product smoothing, uniform derivative tagged-sum errors and a deterministic least-grid diagonal sequence. Read full Riemann compact substitution, integral properties/Fubini and coordinate derivative-limit suppliers. Explicitly distinguish Riemann normalization from the published Lebesgue mollifier definition; only its scaling formula is used. Added direct suppliers and refreshed scope/ledger. No distribution convolution or AC invoked; no gap. Next tensor theorem.

Direct examined dependencies: `lem-test-function-cutoffs-and-euclidean-localization`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `thm-uniform-derivative-limit-on-a-closed-interval`, `cor-change-of-variables-for-compactly-supported-functions`, `thm-multidimensional-integral-properties`, `thm-riemann-fubini-on-product-rectangles`, `thm-sequential-convergence-in-test-function-space`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-tensor-product-distributions-and-iterated-pairings

Read full Dyatlov Theorem 7.1 proof and Proposition 7.3 statement pp77–80 (the latter proofs are left to exercises). Authored mixed-order estimate, two-order uniqueness via product density, both support inclusions, triple associativity via density twice and direct tensor derivative identities needed later. Added support/locality and derivative suppliers; no choice or gap. Next compact-factor convolution candidate.

Direct examined dependencies: `def-tensor-product-of-distributions`, `thm-local-finite-order-characterization-of-distributions`, `lem-distribution-pairing-with-smooth-parameter-families`, `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`, `def-support-of-a-distribution`, `thm-distributions-form-a-sheaf`, `def-distributional-derivative`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-distribution-pairing-with-smooth-parameter-families

Corrected integral clause to assume Countable Choice exactly for complete Lebesgue measure; differential clause remains ZF. Read complete published measure construction and updated consumer exact excerpts. Next compact-factor convolution.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `thm-test-function-operations-are-continuous`, `lem-fixed-support-test-function-spaces-are-complete`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-mean-value-inequality`, `thm-integral-triangle-inequality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-countable-choice`, `thm-lebesgue-measure-is-a-complete-measure`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### def-convolution-of-distributions-when-one-has-compact-support

Read Dyatlov Definition 8.5 and Proposition 8.7 setup pp90–91. Defined compact-factor cutoff candidate, proved compactness by S times (K-S), retained later well-definedness obligation. Next prove cutoff independence and continuity.

Direct examined dependencies: `thm-tensor-product-distributions-and-iterated-pairings`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `def-support-of-a-distribution`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis

Read full Dyatlov Proposition 8.7 proof pp90–91 and 8.10 p92. Authored support-neighborhood cutoff independence, fixed-stage derivative bound, symmetry and choice-free compact-distance proof of closed support sum. No gap. Next mollifier approximation.

Direct examined dependencies: `def-convolution-of-distributions-when-one-has-compact-support`, `thm-tensor-product-distributions-and-iterated-pairings`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-local-finite-order-characterization-of-distributions`, `def-support-of-a-distribution`, `thm-distributions-form-a-sheaf`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### thm-mollifier-approximation-in-distributions

Read complete Dyatlov Lemma 6.8 and Theorem 6.7 pp71–73. Authored local safe-domain reflected-test formula and every-derivative error bound with common compact support. Countable Choice explicitly supplies Lebesgue interfaces; arbitrary unit-mass complex bumps allowed. Next zero-gradient constant theorem.

Direct examined dependencies: `thm-convolution-with-a-test-function-is-smooth`, `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `thm-test-function-operations-are-continuous`, `def-countable-choice`, `lem-distribution-pairing-with-smooth-parameter-families`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `cor-change-of-variables-for-compactly-supported-functions`, `thm-local-finite-order-characterization-of-distributions`, `def-regular-distribution-from-a-locally-integrable-function`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant

Authored zero-gradient mollification, unit-mass determination of local constants, overlap uniqueness and connectedness argument, plus converse and disconnected components. Exact AComega integral inheritance stated; source mollification proof Dyatlov pp71–74 read. No gap. Next global smooth density.

Direct examined dependencies: `def-distributional-derivative`, `thm-convolution-with-a-test-function-is-smooth`, `thm-mollifier-approximation-in-distributions`, `thm-distributions-form-a-sheaf`, `def-countable-choice`, `thm-mean-value-inequality`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-distributional-differentiation-is-continuous-and-commutes`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### cor-smooth-functions-are-weakly-dense-in-distributions

Read complete Dyatlov Theorem 6.10 proof p74. Authored exhaustion cutoff/zero-extension sequence, explicit support-safe radii and eventual disappearance of cutoff on every reflected test. Stronger compactly supported smooth approximation proved. AComega propagated; no gap. Next convolution associativity.

Direct examined dependencies: `thm-mollifier-approximation-in-distributions`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-extension-by-zero-for-distributions-with-ambient-closed-support`, `def-countable-choice`, `def-multiplication-of-a-distribution-by-a-smooth-function`, `thm-convolution-with-a-test-function-is-smooth`, `def-support-of-a-distribution`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-associativity-of-distribution-convolution-under-compact-support

Read Dyatlov Proposition 8.4 complete proof p89 and 8.10 p92. Authored compact tensor identity, K-S-T localization for the third factor, cutoff-derivative cancellation and delta evaluation. Exactly two compact factors, ZF, no pairwise-existence shortcut. Next closed bounded test compactness.

Direct examined dependencies: `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`, `thm-tensor-product-distributions-and-iterated-pairings`, `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `lem-test-function-cutoffs-and-euclidean-localization`, `def-support-of-a-distribution`, `def-multiplication-of-a-distribution-by-a-smooth-function`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### thm-closed-bounded-test-function-sets-are-compact

Read complete published Arzela–Ascoli and metric compactness equivalence proofs and reread fixed-support completeness/boundedness. Authored finite derivative nets plus metric-tail total boundedness, avoiding unnecessary diagonal choice, then closed-stage completeness and compact inclusion. Original AComega+DC assumptions retained. Next companion examples in order.

Direct examined dependencies: `lem-bounded-test-function-sets-have-common-compact-support`, `lem-fixed-support-test-function-spaces-are-complete`, `thm-arzela-ascoli-for-real-ck`, `def-countable-choice`, `def-dependent-choice`, `thm-metric-compactness-equivalences`, `lem-test-function-lf-topology-universal-property`, `thm-mean-value-inequality`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### ex-derivative-of-the-heaviside-function-is-dirac-delta

Computed Heaviside derivative on a finite interval by the fully read complex FTC supplier; positive lower-endpoint sign and null-point convention explicit. AComega propagated. Next locally finite jump formula.

Direct examined dependencies: `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-regular-distribution-from-a-locally-integrable-function`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `def-countable-choice`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas

Authored truncated interval integration by parts, exact dominated endpoint passage and right-minus-left signs, plus local finite-order bound for delta sum. Kept explicit g local integrability and finite one-sided hypotheses; AComega propagated. Next Newtonian kernel.

Direct examined dependencies: `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-regular-distribution-from-a-locally-integrable-function`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-dominated-convergence`, `def-countable-choice`, `thm-local-finite-order-characterization-of-distributions`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-distributional-laplacian-of-the-newtonian-kernel

Read full Green second identity, elementary solid/gluing definitions and ball octant proof. Replaced unproved punctured-solid presentation with explicit smooth radial regularization on the published elementary ball. Computed Laplacian, flux mass, dyadic integrability and delta concentration. Both C2 hypotheses and AComega interface satisfied; no gap. Next principal value.

Direct examined dependencies: `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-regular-distribution-from-a-locally-integrable-function`, `cor-greens-second-identity-for-glued-elementary-solid-regions`, `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`, `thm-dominated-convergence`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `thm-lebesgue-measure-is-a-complete-measure`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-principal-value-distribution-one-over-x

Authored reflected difference quotient with continuous value 2phi prime(0), explicit 4R p1 bound and symmetric cutoff convention. Proper Riemann construction retains ZF; no Lebesgue-measure assumption required. Read continuous Riemann integrability proof. Next nonregular Dirac counterexample.

Direct examined dependencies: `thm-local-finite-order-characterization-of-distributions`, `thm-mean-value-inequality`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-multidimensional-integral-properties`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-not-every-distribution-is-a-locally-integrable-function

Reread full regular embedding proof. Authored explicit Dirac contradiction using injectivity on Rn minus zero, null singleton, and a cutoff pairing to one. AComega and n>=1 exact. Next moving spike counterexample.

Direct examined dependencies: `thm-locally-integrable-functions-embed-in-distributions`, `def-dirac-delta-and-its-derivatives`, `def-countable-choice`, `lem-test-function-cutoffs-and-euclidean-localization`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control

Authored moving support (3/2j,5/2j), checked zero point explicitly, computed unit-mass affine pairing and Dirac limit, and exhibited eventual pairing one. AComega interface explicit; no gap. Next sharp order of Dirac derivatives.

Direct examined dependencies: `def-regular-distribution-from-a-locally-integrable-function`, `def-dirac-delta-and-its-derivatives`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `lem-test-function-cutoffs-and-euclidean-localization`, `cor-change-of-variables-for-compactly-supported-functions`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `def-countable-choice`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### ex-compactly-supported-distributions-have-global-finite-order

Authored explicit constant-one derivative evaluation bound and epsilon^m cutoff-monomial witnesses excluding every q<m; local sharpness requires a neighborhood of a. Order zero and support cases explicit, ZF. Next Sobolev orientation remark.

Direct examined dependencies: `thm-compactly-supported-distributions-have-global-finite-order`, `def-dirac-delta-and-its-derivatives`, `lem-test-function-cutoffs-and-euclidean-localization`, `def-order-of-a-distribution-on-a-compact-set`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: accept recorded.

### rem-sobolev-weak-derivatives-belong-to-pde

Authored signed-transpose/representative distinction and the PDE scope boundary. No forward theorem consumed. All 84 original items authored; next page text and full-batch checks.

Direct examined dependencies: `def-distributional-derivative`.
Checks: rendering and strict item contract passed. Decision: accept recorded.

### ex-distributional-laplacian-of-the-newtonian-kernel

Read full Green second identity, elementary solid/gluing and patch definitions, ball octant proof and disc-content proof. Supplied the complete ball data locally from A definitions, removing the B-example dependency. Used smooth radial regularization instead of an unproved punctured-solid presentation. Computed Laplacian, flux mass, dyadic integrability and delta concentration. Both C2 hypotheses and AComega interface satisfied; no gap. Next principal value.

Direct examined dependencies: `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-regular-distribution-from-a-locally-integrable-function`, `cor-greens-second-identity-for-glued-elementary-solid-regions`, `thm-dominated-convergence`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `thm-lebesgue-measure-is-a-complete-measure`, `def-countable-choice`, `def-elementary-solid-region`, `def-simple-solid-region-in-a-coordinate-direction`, `def-adapted-outward-boundary-presentation-of-a-simple-solid-region`, `def-admissible-regular-parametrized-surface-patch`, `def-finitely-patched-regular-surface-and-integrals`, `cor-disc-jordan-content-is-pi-r-squared`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

### lem-riemann-lebesgue-comparison-for-distribution-test-integrands — new fully authored dispatch addition

Supplied complete Darboux-simple-function squeezing before all test-integral consumers. Read full box-volume and Darboux proofs and the published later comparison proof; this supplier uses only earlier A items. AComega explicit. Precheck, rendering and strict contract passed. No Step3 item receipt created, per the new-addition exception. Next replace the later-page comparison dependency in four baseline consumers and register coverage/page inventory.

### ex-right-shift-powers-converge-in-wot-not-sot

Replaced unneeded complex-L2-page dependency with fully read finite real Cauchy–Schwarz on coordinate moduli and explicit bounded partial-sum/tail passage. This preserves the coefficient proof in both fields while keeping the existing weak-page prerequisite closure. All original WOT/SOT claims unchanged.

Direct examined dependencies: `def-strong-and-weak-operator-topologies`, `rem-ell-p-is-l-p-of-counting-measure`, `thm-cauchy-schwarz-finite`, `lem-complex-conjugation-and-modulus-laws`.
Checks: explicit-path precheck, rendering and strict item contract passed. Decision: recording pending: Step 3a must clear before item auditing

## Final Step 3b checkpoint — group b

All 84 baseline items and four pages authored; new local A lemma `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` fully authored before consumers. Inventory 19/9/49/8. All 84 baseline accept receipts are current; both scope decisions closed. New lemma has no self-review receipt by explicit dispatch exception and awaits engine certification. Final checks: 65 proof prechecks, 89 rendered files, 85 strict contracts, 85-item content policy, 95-row coverage, 18 decline decisions all passed. Plan validator exit zero; four plan inventories remain empty for Step4 splicing. Exact prerequisite-closure comparison found no undeclared external home after removing the later box-comparison and unnecessary complex-L2 edges. Cross-batch input remains empty and ledger refreshed.

Read newly appeared owner direction fully; it addresses only batches5/11, with no group-b obligation. Final report `research/phase-2-next-17-step3b-b.md` contains completed IDs, published findings with exact page/step evidence, assumption qualifications and remaining serial/engine duties. No mathematical gap remains identified in this batch. Next action is engine handoff and Step4 serial reconciliation, not further author self-review of the new lemma.
