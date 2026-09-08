# Batch 3 — BLOCKED, not ready for splice or authoring

Run: `frontier-34-fa-prereqs`. Role: beta. Scope: FA-12 and FA-13 only.
This is an incomplete scaffold audit and a durable blocker handoff, not a
sufficiency verdict. The manifest remains empty. No published content, plan,
shared design, other batch, controller state, or dispatch receipt was changed.

## Work and evidence

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generated beta-3 task,
the dispatch prompt, the batch manifest, scope ledger, step-0 record, relevant
drift evidence, complete FA-12/FA-13 sections, and the design's page/provenance,
choice, seam, and source-acquisition sections. Git HEAD was
`12927d03ad00e82a443e046e6aab4d5da7abb826`.

Wrote this note and the partial `.coverage.json`. The latter records 24
harvest destinations, including one deferred extension. Its `included` rows
name intended design items; none is a certified completed scaffold item.
The coverage check correctly rejects those absent inventory targets.
All 62 original design obligations are retained below; none was discarded.

## Dependency audit: exact limit of assurance

An ad hoc Python traversal started at
`hilbert-space-geometry-and-riesz-representation-examples` and recursively
followed canonical `requires`: 181 distinct pages. It loaded item inventories
from plan-spec, recursively scanned all `research/**/*.pages.json`, and read
item YAML from `items/*.md`, with actual item frontmatter taking precedence.
The resulting declared `deps` reachability scan found 3,710 item IDs and no
unresolved IDs at that snapshot. This is a structural scan, NOT verification
of 3,710 mathematical statements, aliases, conflicting historical inventories,
axiom strengths, or undeclared proof appeals. In particular, it cannot supply
missing interfaces from empty pages. The complete semantic closure audit is
unfinished and remains fatal to readiness.

The concrete page path is FA-13 B -> FA-13 A -> FA-12 B -> FA-12 A -> FA-11 B
-> FA-11 A -> FA-10 B -> FA-10 A -> FA-9 B -> FA-9 A -> FA-8 B -> FA-8 A.
Page arrows here are `requires`, not item-level proof dependencies. No A item
may consume a B-only item. The scalar MT-10, MT-13, MT-14 and MT-16 pages
already occur in the canonical closure through earlier FA/MT pages.

Initially the current manifests for FA-8 through FA-11 were empty. During
this audit batch 2 changed: it now contains IDs including
`thm-reflexive-iff-unit-ball-weakly-compact` and `thm-eberlein-smulian`, but
each is marked `BLOCKED scope reservation; not an approved proof contract`
and has `deps: []`. Read that current manifest fully after detecting the
change. These are resolving names, not adequate mathematical suppliers.

Fatal consumer paths requiring re-audit after real supplier interfaces land:

- `thm-reflexive-spaces-have-rnp` -> FA-10 weak compactness/reflexivity plus a
  proved dentability argument. FA-13 reflexivity is later and unavailable to
  this A item.
- `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` -> FA-10 relative
  weak compactness/Eberlein–Šmulian and FA-9 compactness machinery in the
  proposed proof -> FA-8 weak-topology interfaces. Both implications need
  exact hypotheses, not merely the resolving supplier IDs.
- The whole FA-13 page inherits the incomplete FA-12 and earlier page closure,
  even where an individual Hilbert proof can avoid those results.

Directly read published `def-banach-space` (sequential completeness),
`def-reflexive-banach-space` (surjectivity of the canonical bidual embedding),
`thm-metric-completion-carries-a-unique-banach-space-structure` (Cauchy-class
completion and continuous operations), and `def-orthogonal-projection`
(finite-dimensional domain). Their complete transitive proofs are not all
audited. They must not be treated as blanket semantic closure certification.

The canonical plan validator and extcheck returned exit 0, including the
implemented Foundations bootstrap checks. No new Foundations edges were
written. This does not certify the still-unwritten batch item graph, nor
replace the required semantic audit of justified_by and load-bearing
forward_refs. No catalogue item is proposed as a proof supplier.

## Design/plan and identity findings

1. Canonical FA-12 has the single FA-11 B requirement; its design separately
   lists FA-1, FA-7, FA-9, FA-10 and MT predecessors. Canonical FA-13 has the
   single FA-12 B requirement; its design separately lists FA-1, FA-2, FA-7,
   FA-10 and finite-dimensional geometry. Those design pages are reached
   transitively. This is a direct-edge presentation difference, not proof of
   a missing page edge. Canonical ordering remains controlling.
2. The dispatch's FA-12 line 40 is only a table entry. The complete assigned
   section starts at line 933; FA-13 starts at 994.
3. `def-orthogonal-projection` is ALREADY PUBLISHED and homed on the earlier
   finite-dimensional inner-product page. The proposed FA-13 use would collide
   with it and would inadequately generalize a finite-dimensional definition.
   Use the currently unused `def-hilbert-orthogonal-projection` for the Hilbert
   definition and link the finite-dimensional agreement explicitly. No existing
   item was renamed, edited, or re-homed. Recheck aliases before reservation.
4. The FA-12 Hilbert RNP example explicitly needs the later FA-13 result.
   Keep that result as a declared load-bearing forward reference on the B
   example only. It cannot supply the earlier reflexive-RNP theorem.
5. The design has 21 + 8 FA-12 items and 25 + 8 FA-13 items. These are scope
   inventories, not proof-complete counts. Add prerequisites before consumers;
   split if the final A inventory would reach/exceed the stated below-60 limit.

## Source acquisition and convention findings

The web reader opened full PDFs for Teschl (563 pages), Pisier (242 pages),
Bühler–Salamon (452 pages), and Blackadar–Farah–Karagila (49 pages). Exact
URLs, editions, locators, and partial harvests are in `.coverage.json`.
Only its explicitly named arguments are claimed read; no complete-book read
or completed source-closure review is claimed.

The ETH Bühler–Salamon URL failed in the web reader. Recovered a copy at
`https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf`;
retained the ETH `original_url`. In that edition §§3.6.1–3.6.2 are *Ergodic
Measures* and *Space and Times Averages*, NOT the design's stated Dunford–Pettis
headings. Do not carry those locators over as evidence for FA-12 item 21.
A full replacement treatment of that result still needs reading and harvest.

Teschl §2.2 proves projection using an orthonormal basis. Importing that proof
here would introduce the later FA-14 machinery and a different choice cost.
Use the design's minimizing-sequence route instead. Teschl uses the opposite
complex inner-product convention; translate formulas to first-variable linearity.
Its Theorem 11.33 incorrectly infers diagonal convergence from row convergence:
`s[n,m] = 1` for `m <= n` and `0` otherwise has row limit zero and diagonal
one. Supply a separate strong-measurability closure lemma, then scalar DCT.
Its pointwise Pettis formulation needs the design's explicit a.e./completion
conventions rather than silent substitution.

Blackadar–Farah–Karagila distinguish sigma-completeness from Cauchy
completeness; their ZF closest-vector proof uses the former. Preserve the
library's latter definition and label the minimizing-sequence proof AC_omega.
Riesz inherits projection's cost although its remaining kernel argument adds
no new family choice. Do not infer a canonical complex-linear Riesz map.

Pisier's fully read Theorem 2.3 supports dentability -> RNP through exhaustion
and variation approximation. It does not alone prove the converse. Theorem
2.5's martingale route was only partially read: no approval of that route or
its chapter-1 dependencies is claimed. The Lipschitz characterization and
separable-dual/reflexive positive cases also still need full proof acquisition.
Diestel–Uhl and Albiac–Kalton design citations were not obtained in full in
this dispatch and are not counted as acquired or verified sources.

## Required proof obligations before manifest population

These are obligations, not assertions that their dependency lists are complete.
Keep the mathematics; do not turn the RNP theorems into unproved remarks.

- Simple integration: finite measure for each nonzero cell, common-refinement
  independence, finite-sum norm estimate, null-set invariance.
- Add `lem-bochner-integral-is-independent-of-simple-approximants` before
  the integral's use. Its proof needs the simple norm estimate and Banach
  completeness. Cauchy approximants must approximate the named function;
  a bare Cauchy sequence does not define an integral of arbitrary f.
- Add `lem-strong-measurability-is-closed-under-almost-everywhere-limits`
  before dominated convergence. Prove it using a common exceptional null set,
  separable essential range and measurable distance tests; audit countable
  selections and measure completeness explicitly.
- Add `lem-vector-measure-variation-is-a-measure` after vector-measure
  vocabulary, and `lem-bochner-density-variation-formula` after the density
  construction. The scalar total variation of a norm-countably-additive
  bounded-variation vector measure needs a proof of countable additivity.
- Add `lem-summable-bochner-norm-errors-give-an-integrable-limit` before the
  dentability-to-density approximation proof, formulated for functions without
  introducing a new vector L1 quotient space forbidden by the design.
- Decompose both directions of dentability/RNP, the full arbitrary-finite-
  measure to Lipschitz-interval reduction, the vector differentiation step,
  separable-dual RNP, reflexive RNP, and both Dunford–Pettis implications.
  Exact prerequisite inventories for the hard directions are OPEN. A finite
  partition martingale route cannot cite later probability pages by name.
- Establish RNP invariance under Banach isomorphism before the c0-not-dual
  corollary. Prove the c0 and nonatomic L1 witnesses independently of any
  B-page computation used only to illustrate them.
- For Hilbert geometry: first-variable-linear complex polarization; pairing
  continuity before extension to both Cauchy representatives; a minimizing-
  sequence estimate before nearest-point existence; the real-part inequality
  before orthogonal decomposition; Riesz before abstract adjoints. The early
  projection lemma's self-adjointness can initially be the pairing identity,
  avoiding a forward use of the later adjoint definition.
- State the double-perpendicular formula for a linear subspace M (or use
  closure of span M for arbitrary subsets); the bare closure formula is not
  valid for arbitrary subsets. Verify canonical bidual surjectivity explicitly.
- B examples retain the nonseparable weak-measurability witness with its
  set-theoretic assumptions, scalar versus vector RN distinction, nonatomic
  versus counting measure distinction, positive finite measure for the mean,
  independent Gram vectors, and p >= 1 with p != 2 for the norm example.

No new A/B prerequisite pair has been established as necessary by a completed
proof-route audit. The listed elementary additions can be placed within the
owned A pages; the hard RNP decomposition and resulting size are unresolved.
If that audit requires a new pair, record its full ordered A/B inventory and
placement before requesting materialization. Do not invent a prerequisite
pair merely to hide these open obligations.

## Checks actually run

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; canonical
  graph only, with 589 empty planned pages at that snapshot.
- `node tools/extcheck.mjs --help`: this tool did not display help; it ran
  its normal repository check and returned exit 0 with warnings. Report this
  as that invocation, not as a batch proof check.
- Ad hoc page/item traversal described above: 181 pages, 3,710 reachable item
  IDs, zero unresolved IDs at the initial snapshot. Run manifests changed
  subsequently; this is not a frozen final-graph receipt.
- Design-ID file collision scan: 62 original IDs, one existing file collision,
  `def-orthogonal-projection`. This scan did not establish alias uniqueness.
- `node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-3.coverage.json --require-destination --json`:
  exit 1; 2 pages, 24 harvested rows, 23 coverage-unknown-item errors, no
  warnings. The retained empty manifest is not a completed scaffold.
- `node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-3.coverage.json --stamp --timeout-sec 10`:
  exit 1; 0/5 source entries verified, all failed EAI_AGAIN. No fetch stamps
  were fabricated. A separate curl attempt failed DNS resolution too.
- No precheck, rendercheck, item proof check, full semantic closure pass,
  source-backing pass, or authoring/splice clearance was obtained.

## Resume obligations

Reread current batch 1/2 manifests and notes; replace reservations with actual
proved supplier interfaces before certifying their consumers. Reread this
batch's unchanged manifest, partial coverage, and full design. Resolve the
network-backed fetch gate in the existing authorized environment; no broader
access was requested. Finish full source readings, hard-result decompositions,
all 62 retained obligations, and transitive semantic audit before filling an
approved manifest or marking this batch sufficient. Current blocking facts
are missing certified upstream interfaces, incomplete hard-result source/proof
closure, and failed full-text fetch stamps. Neither pair is publishable.

## Preserved design inventory (not an approved manifest)

### FA-12 — Banach-valued integration and the Radon–Nikodým property
**A page:** `banach-valued-integration-and-the-radon-nikodym-property`
1. `def-banach-valued-simple-function-and-integral` (definition) — require a disjoint measurable representation or prove refinement independence.
2. `lem-banach-valued-simple-integral-is-well-defined` (lemma) — common refinements give the same vector.
3. `def-strongly-measurable-banach-valued-function` (definition) — a.e. pointwise limit of simple functions.
4. `thm-pettis-measurability-criterion-for-strong-measurability` (theorem) — weak measurability plus essentially separably valued, with the exact completeness hypotheses.
5. `def-bochner-integrable-function` (definition) — simple approximants Cauchy in integral norm; no vector $L^1$ space is minted.
6. `thm-bochner-integrability-criterion` (theorem) — strong measurability and $\int\|f\|<\infty$.
7. `lem-bochner-integral-norm-inequality` (lemma) — $\|\int f\|\le\int\|f\|$.
8. `thm-bochner-dominated-convergence` (theorem) — cite scalar DCT for the norm errors.
9. `thm-bounded-linear-maps-commute-with-bochner-integration` (theorem).
10. `def-banach-valued-vector-measure-and-variation` (definition) — countable additivity in norm and scalar total variation.
11. `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` (lemma).
12. `def-radon-nikodym-property` (definition) — every bounded-variation $X$-valued measure absolutely continuous with respect to a finite scalar measure has a Bochner density.
13. `def-dentable-bounded-set-and-slice` (definition).
14. `thm-rnp-dentability-characterization` (theorem) — a Banach space has RNP iff every nonempty bounded closed convex subset is dentable.
15. `thm-rnp-lipschitz-differentiability-characterization` (theorem) — $X$ has RNP iff every Lipschitz $[0,1]\to X$ is a.e. differentiable, with the exact a.e. derivative notion.
16. `thm-reflexive-spaces-have-rnp` (theorem).
17. `thm-separable-dual-spaces-have-rnp` (theorem).
18. `thm-c0-fails-the-radon-nikodym-property` (theorem) — use the sourced nondentability/vector-measure witness, not the false inference “separable implies RNP”.
19. `thm-l-one-of-zero-one-fails-rnp` (theorem) — cite the non-atomic hypothesis and distinguish sequence $\ell^1$, which has RNP.
20. `cor-c0-is-not-isomorphic-to-a-dual-space` (corollary) — if $c_0\cong Y^*$, then the separable dual $Y^*$ has RNP, contradicting item 18.
21. `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` (theorem) — for finite $\mu$, a bounded subset of $L^1(\mu)$ is relatively weakly compact iff it is uniformly integrable in MT-10's exact sense; prove both directions through MT-16's concrete duality and FA-10 weak compactness without redefining uniform integrability.
**B page:** `banach-valued-integration-and-the-radon-nikodym-property-examples`
1. `ex-bochner-integral-of-a-countably-valued-function`.
2. `cex-weakly-measurable-need-not-be-strongly-measurable` — nonseparable-range example with all set-theoretic assumptions stated.
3. `ex-vector-measure-induced-by-an-l-one-function`.
4. `ex-hilbert-spaces-have-rnp` — later cite FA-13 reflexivity.
5. `cex-c0-unit-ball-is-not-dentable` — compute the diameter of every slice in the chosen proof.
6. `rem-l-one-sequence-versus-l-one-nonatomic-rnp` (remark, L/NA) — prevent the common false transfer between $\ell^1$ and $L^1[0,1]$.
7. `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` (remark, L/NA) — explicit seam dictionary to MT-13.
8. `ex-dunford-pettis-uniformly-integrable-and-concentrating-families` — contrast an $L^1$-dominated family with a bounded spike family that is not uniformly integrable and hence not relatively weakly compact.
### FA-13 — Hilbert-space geometry and Riesz representation
**A page:** `hilbert-space-geometry-and-riesz-representation`
1. `def-real-and-complex-inner-product-space` (definition) — positive definite, linear in the first variable, conjugate symmetric and conjugate-linear in the second.
2. `thm-cauchy-schwarz-in-an-inner-product-space` (theorem) — prove the zero-vector case before minimizing the scalar quadratic.
3. `cor-inner-product-induces-a-norm` (corollary).
4. `thm-parallelogram-law` (theorem).
5. `thm-jordan-von-neumann-polarization` (theorem) — a norm comes from an inner product iff it satisfies the parallelogram law; give separate real and complex formulas.
6. `def-hilbert-space` (definition) — an inner-product space complete in its induced norm in the library's existing Cauchy-sequence sense.
7. `thm-completion-of-an-inner-product-space-is-hilbert` (theorem) — FA-1's completion carries the unique inner product extending the original one; define it by limits of pairings, prove independence of both Cauchy representatives, and verify that its norm is the completed norm.
8. `def-orthogonality-and-orthogonal-complement` (definition).
9. `lem-pythagorean-theorem-and-finite-orthogonal-sums` (lemma).
10. `lem-orthogonal-complement-is-closed` (lemma).
11. `lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy` (lemma) — parallelogram identity controls two approximate minimizers.
12. `thm-projection-onto-a-nonempty-closed-convex-set` (theorem) — existence and uniqueness of the nearest point; standard Cauchy-complete form labelled countable choice.
13. `thm-hilbert-projection-variational-characterization` (theorem) — $p=P_Cx$ iff $\operatorname{Re}\langle x-p,y-p\rangle\le0$ for all $y\in C$.
14. `thm-orthogonal-decomposition-by-a-closed-subspace` (theorem) — $H=M\oplus M^\perp$.
15. `def-orthogonal-projection` (definition) — $P_Mx$ is the unique $M$ component.
16. `lem-orthogonal-projection-is-linear-self-adjoint-contractive` (lemma) — linearity is special to subspaces, not convex sets.
17. `thm-double-orthogonal-complement-is-closure` (theorem) — $M^{\perp\perp}=\overline M$.
18. `thm-riesz-representation-for-hilbert-space` (theorem) — every bounded functional is uniquely $x\mapsto\langle x,y\rangle$, isometrically and conjugate-linearly in $y$.
19. `cor-hilbert-spaces-are-reflexive` (corollary) — verify the canonical bidual map, not merely an abstract isomorphism.
20. `def-hilbert-space-adjoint` (definition) — $\langle Tx,y\rangle=\langle x,T^*y\rangle$ via Riesz; distinguish it from FA-7's transpose while proving the dictionary.
21. `thm-hilbert-adjoint-properties` (theorem) — uniqueness, conjugate linearity in the operator, $(ST)^*=T^*S^*$, $T^{**}=T$, and $\|T^*T\|=\|T\|^2$.
22. `def-self-adjoint-positive-unitary-and-normal-operator` (definition).
23. `lem-kernel-range-orthogonality-for-hilbert-adjoints` (lemma) — $(\operatorname{ran}T)^\perp=\ker T^*$ and its closure consequences.
24. `rem-l2-projection-agreement` (remark, L/NA) — MT-23's concrete $L^2$ projection is exactly item 14 in that Hilbert space.
25. `rem-lax-milgram-owned-by-pde` (remark, L/NA) — PDE may cite item 18 and FA-2's bounded-operator vocabulary, then define bounded and coercive sesquilinear forms itself; no Lax–Milgram theorem is stated here.
**B page:** `hilbert-space-geometry-and-riesz-representation-examples`
1. `ex-standard-inner-products-on-kn-ell-two-and-l-two` — $L^2$ is cited from MT-14.
2. `ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix` — prove invertibility and coordinate independence.
3. `ex-projection-onto-constants-is-the-mean`.
4. `ex-distance-to-a-closed-subspace` — $\|x-P_Mx\|$ and the Pythagorean identity.
5. `cex-an-inner-product-space-need-not-be-complete` — $c_{00}$ in the $\ell^2$ norm.
6. `cex-a-norm-need-not-satisfy-the-parallelogram-law` — $\ell^p$ for $p\ne2$.
7. `cex-nearest-point-map-to-a-convex-set-need-not-be-linear`.
8. `ex-adjoints-of-shifts-multiplication-and-integral-operators`.
