# phase-2-next-15 batch 2 — Step 1 construction notes

## Ownership and construction history

This batch owns only `weak-and-weak-star-topologies` and
`distributions-test-functions-and-differentiation`, with their B companions.
No published item, shared plan, engine state, or verdict was edited.

Per the dispatch handoff, the weak/weak-star 19-A/9-B inventory was imported
mechanically from `research/frontier-34-fa-prereqs-batch-1.pages.json`; its old
run receipts were not reused as approval. Its retained full-text source
evidence was rechecked against current suppliers and fresh Step-1 decisions
are recorded for this run. The distribution pair had no handed-off scaffold.
The later controlling design explicitly says to use the complete historical
batch-9 inventory, so its 48-A/8-B inventory was reconstructed from
`research/frontier-34-fa-prereqs-batch-9.pages.json`, then mathematically
reaudited and adapted to the current prerequisite closure. This is inventory
reuse, not imported readiness.

Items are in prerequisite order and every local definition/helper precedes
its consumers. No item ID was minted outside the controlling inventories.

## Design control and conflicts

For `weak-and-weak-star-topologies`, the controlling text is FA-8 together
with the later amendments in §§14.1 and 14.4 of
`research/plan-functional-analysis-track.md`. The current
`research/plan-spec.json` is authoritative for this run.

- The original FA-8 design begins from the older FA-4/FA-5/FA-7 neighborhood.
  The current plan instead gives the exact direct requirements
  `locally-convex-spaces-and-continuous-separation` and `nets-and-filters`,
  with duality, relative HB, and sequential UBP only transitively. The current
  plan and §14.1 control.
- Section 14.4 controls the exact 19-A inventory, forbids duplicating the
  published `def-weak-star-topology` and
  `thm-bipolar-closure-for-linear-subspaces`, and requires genuine nets, the
  `sqrt(n)e_n` closure counterexample, the point-carrying unbounded net, and
  the bounded preadjoint converse. All are preserved.

For `distributions-test-functions-and-differentiation`, the functional-analysis
track controls. Its FA-24 section is the only listed location giving this
page's own scope, conventions, inventory, and proof routes; §14.4 is the later
amendment and therefore controls the expanded 48-A/8-B batch-9 inventory. The
complex-analysis line 5367 is a downstream prerequisite row for CA-PT-1, not a
competing distribution design. The Fourier-analysis line 70 is a downstream
FR-9 prerequisite row, and its nearby prose treats this page as part of the
common Fourier/distribution spine; it is likewise not a competing design.
The functional-analysis line 75 is only the track summary, with the complete
FA-24 section at lines 1762ff and amendments at §§14.1/14.4.

- The original FA-24 section has 31 A items and broader historical roots. The
  later §14.4 amendment requires the complete 48-A inventory with its cutoff,
  LF-topology, bounded-set, parameter, tensor, primitive, complex-L1, product
  density, and compact-convolution helpers. The later amendment controls.
- The historical batch-9 page directly required the FA-23 examples companion.
  The current plan requires the A page
  `schwartz-space-and-the-plancherel-theorem`; the current plan controls.
- Section 14.1 adds
  `the-divergence-theorem-and-classical-stokes` to the A page for the
  Newtonian-kernel example, while the B page still requires only its own A
  page. The current plan matches this amendment.
- The bilinear complex distribution pairing (no conjugation), the distinction
  between LF topology and sequential convergence, and the condition that at
  least two factors have compact support in the stated three-factor
  associativity result are preserved exactly.

The Alpha drift evidence reports `no-drift` for both selected pairs. Direct
and transitive closure was nevertheless recomputed from current files; no new
page prerequisite pair and no same-run cross-batch item edge was required.
The owned consumer input is consequently the reviewed empty array in
`research/phase-2-next-15-batch-2.cross-batch-dependencies.json`.

## Source reading and dispositions

The exact result-by-result harvest, locator, support, and disposition for all
94 harvested results is in the owned coverage file. All five source records
have inspected full text and `source-fetch-check` stamps; no source was dropped
and no retry budget was exhausted.

- Weak/weak-star source 1: Bühler–Salamon, *Functional Analysis* (2017),
  §§3.1.1–3.1.4, pp. 118–131, and Exercises 3.60–3.62, pp. 161–162.
- Weak/weak-star source 2: Teschl, *Topics in Real and Functional Analysis*
  (2017), §4.4 pp. 125–128 and §5.3 pp. 146–149.
- Distribution source 1: Dyatlov, MIT 18.155 notes (2022), complete Chapters
  2–4, §§6.1–6.2, §7.1, and §§8.1–8.2 (printed pp. 27–92 at the exact ranges
  recorded in coverage).
- Distribution source 2: Gelca, *Functional Analysis*, complete Chapter 7
  §§7.2–7.7, printed pp. 103–122.
- Distribution source 3: Knapp, *Advanced Real Analysis*, corrected second
  edition, IV §7 and V §§1–3, printed pp. 136–140 and 179–201 (PDF pp.
  166–170 and 209–231).

The harvest defers weak compactness/Goldstine material to
`banach-alaoglu-goldstine-and-krein-milman`, Schur/reflexive sequential
material to `reflexivity-and-eberlein-smulian`, and homogeneous/fundamental
solution material to
`fundamental-solutions-newtonian-potentials-and-green-functions`. Kernel,
singular-support, and Weyl-lemma material absent from the plan is marked out
of scope with specific reasons. No harvested result lacks a disposition.

## Dependency, convention, and axiom audit

All declared local and external dependencies were resolved to current items,
and their relevant statements/proofs were inspected for hypotheses,
direction, scalar convention, support conditions, well-definedness, and axiom
strength. This includes the relative-HB norming/bidual/separation chain, the
AC_omega sequential UBP theorem, complete-metric Baire, Arzelà–Ascoli,
finite-measure RN representation, Fubini/Tonelli, L1 approximate identities,
C1 change of variables, multivariable Taylor–Peano, explicit smooth cutoffs,
Green's second identity, and the real/complex sequence-dual interfaces.

Choice bookkeeping is explicit:

- Weak Hausdorffness, weak convex closure, norm lower semicontinuity, the
  weak-star dual identification, and the preadjoint converse assume relative
  HB. Weakly convergent sequence boundedness assumes HB plus AC_omega;
  AC_omega is spent only in sequential UBP. Weak non-first-countability
  assumes HB plus AC_omega; AC_omega chooses finite-coordinate refinements of
  a supplied countable base. Neither sequence theorem uses DC or full AC.
- The three sequence-space examples formerly using the published real-only
  counting-measure duality corollary now use direct finite phase/power tests.
  Their coefficient arguments work over both scalar fields and are
  choice-free. The `sqrt(n)e_n` closure example separately declares the HB
  and AC_omega used through its weak boundedness/Hausdorff suppliers.
- Test-function cutoffs and the Euclidean subordinate partition are built
  deterministically from rational balls and the published explicit smooth
  step; they are ZF and do not call an AC_omega mollifier theorem.
- The regular-distribution embedding assumes AC_omega because injectivity uses
  the published L1 approximate-identity theorem. Its delta counterexample
  propagates that assumption. Pullback existence/continuity is choice-free;
  compatibility with regular distributions is stated separately under
  AC_omega, exactly the change-of-variables supplier's hypothesis.
- Uniform finite-order bounds and sequential multiplier convergence assume
  DC, exactly through complete-metric Baire. Closed bounded subsets of
  `D(Omega)` assume AC_omega and DC, exactly through the current
  Arzelà–Ascoli/metric-compactness supplier.
- The local and global continuous-primitive structure theorems assume HB and
  full AC. HB extends the derivative-image functional; AC enters through the
  finite-measure RN representation, and globally also selects countably many
  local primitive representations. The complex L1 helper proves essential
  boundedness by level-set tests rather than attributing it to the L1-density
  supplier.
- The Newtonian example checks the Green supplier's two-C2 hypothesis on each
  punctured compact region and tracks the inward normal on the inner sphere.

No item consumes a Recorded result as proof of its replacement. No owned page
is in Foundations, and no owned dependency path reaches
`deferred-set-theory-beyond-choice`.

## Published defects found

These publication-contract defects are recorded for the canonical ledger and
were not edited here.

1. `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` is published but
   its statement omits AC. Its proof chooses densities through
   `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`,
   whose statement explicitly assumes AC, then glues the countable family.
   `cor-ell-p-duality-by-counting-measure` inherits this omission and is
   real-only although old consumers treated it as complex. Repair: propagate
   AC, or publish a direct choice-free real/complex sequence proof. This batch
   removed every actual use and supplies the needed direct proofs inline.
2. `thm-dual-norms-every-vector` is published without an HB/AC hypothesis but
   invokes real and complex Hahn–Banach extension. The published
   `lem-transpose-is-bounded-and-has-the-same-norm` inherits that hidden cost.
   Repair: use `cor-relative-hahn-banach-dual-norming` under explicit HB, or
   split the choice-free `||T*||<=||T||` bound from equality. This batch removed
   the equality dependency and uses the direct bound plus relative HB.
3. `thm-bipolar-closure-for-linear-subspaces` publishes its primal
   norm-closure formula and density consequence without HB, but imports
   `cor-annihilator-detects-closure`, whose separation route uses HB. Its
   weak-star double-annihilator core has a valid finite-evaluation proof.
   Repair: state HB for the primal/density clauses or split them, using
   `thm-relative-hahn-banach-geometric-separation`. The owned annihilator item
   separates ZF kernel closedness and the weak-star core, and explicitly adds
   HB plus relative geometric separation for the primal clause; it does not
   use the defective unstated-HB route.

## Check results

Final owned-batch checks after readiness recording:

- `manifest-deps`: 84 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 84 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 94 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --stamp`: 5/5 sources fetch-verified and 5/5 resolved;
  0 drops.
- readiness: 84/84 current records are `ready`; none is missing or escalated.
- inventory counts: weak A/B 19/9; distribution A/B 48/8.
- `frontier-dependency-ledger refresh`: completed and deduplicated; Batch 2 is
  listed as reviewed with no edge.
- `extcheck`: global result `OK`; its 55 warnings concern existing unrelated
  published items, and none names an owned item or dependency introduced here.
- `validate-plan research/plan-spec.json --repo .`: `OK`; declared page order
  is acyclic and consistent, with no item cycle, forward reference, B-page
  dependency, or unresolved ID among pages with item lists. Its redundant-page-
  prerequisite warnings are pre-existing plan diagnostics, not owned edits.

The required whole-run manifest/policy invocation currently reports eight
errors outside Batch 2: three undeclared suppliers used by
`thm-regular-value-formula-for-degree`, three used by
`prop-affine-denominator-separates-real-and-imaginary-root-factors`, and two
used by `ex-first-weight-layers-of-the-basic-affine-sl2-character`. The owned
Batch 2 invocation is clean, and these unrelated concurrent-batch findings do
not alter this batch's readiness records.
