# Step 3b authoring report — pair `crystallographic-root-lattices-and-weyl-group-interfaces`

Run `frontier-42-coxeter-32` · role alpha-high · pair label
`step3b-pair-crystallographic-root-lattices-and-weyl-group-interfaces-943e29c0d91293a6`
· design label CG-16 · batch 21 (the batch contains only this pair).

- A page: `crystallographic-root-lattices-and-weyl-group-interfaces` (order 1758).
- B page: `crystallographic-root-lattices-and-weyl-group-interfaces-examples` (order 1759).

## Owned IDs and entry checkpoint

Owned items after recomputing the example dependencies (dependency_level
ascending, then page order):

1. `def-cg-crystallographic-scaling-coroot-and-lattice` (A, level 4)
2. `lem-cg-integer-pairings-and-allowed-dihedral-labels` (A, level 9)
3. `ex-cg-a2-root-and-weight-lattices` (B, level 10)
4. `ex-cg-b2-c2-dual-realizations-and-lattices` (B, level 10)
5. `ex-cg-g2-from-i2-six` (B, level 10)
6. `thm-cg-crystallographic-finite-type-and-lattice-stability` (A, level 15)
7. `cex-cg-i2-five-is-not-crystallographic` (B, level 16)

The dispatch initially placed A2 at level 16 because its scaffold included
later classification and finite-type dependencies. The completed A2 proof uses
the level-9 crystallographic lemma and no later same-pair item, so its computed
level is 10. The B2/C2 scaffold had the same unused level-15/16 dependencies;
its local proof also computes at level 10. G2 likewise needs only the level-9
lemma plus published suppliers, so its actual level is 10. These dependency
repairs were found after authoring the theorem and I2(5) item in the original
dispatch order. Those items do not use A2, B2/C2 or G2; final registration
follows the recomputed order above.

Owned output files: the seven `items/<id>.md` files above, the two
`library/coxeter-groups/<page>.md` files, the batch contract file
`research/frontier-42-coxeter-32-batch-21.proof-contracts.json`, and this
report. The shared manifest `research/frontier-42-coxeter-32-batch-21.pages.json`
and the owned cross-batch input
`research/frontier-42-coxeter-32-batch-21.cross-batch-dependencies.json` are
maintained in place with sibling rows preserved.

**Original report snapshot.** When this report was first created, all seven
owned item files were absent and neither page listed an item. The current
dispatch is resuming from a later state: `def-cg-crystallographic-scaling-coroot-and-lattice`,
`lem-cg-integer-pairings-and-allowed-dihedral-labels`,
`thm-cg-crystallographic-finite-type-and-lattice-stability`, and
`cex-cg-i2-five-is-not-crystallographic` now have item files, as does the A2
example; the B2/C2 and G2 examples were added during this continuation. The A
and B pages now list all seven owned items in the recomputed dependency order.
File presence is not acceptance; checkpoints below record the completed audits
and their remaining gates. The Step 3a review
records the pair `sufficient` (receipt
`research/frontier-42-coxeter-32-step3a-review-crystallographic-root-lattices-and-weyl-group-interfaces.json`)
with one statement-precision observation on the definition's weight-lattice
sentence; the drift review records `no-drift`.

### Dependency rows and current obligations

The pair consumes eleven in-run supplier IDs. The original statement that all
eleven lacked item files was inaccurate: `def-hh-coxeter-matrix-word-group-and-length`,
`def-cg-real-coxeter-form-and-reflection`, and
`def-cg-coxeter-diagram-components-and-finite-type` already had files when the
report was first created. Current dependency rows are in
`research/frontier-42-coxeter-32-batch-21.cross-batch-dependencies.json`
(43 rows). Existing sibling rows are preserved. A2 and B2/C2 each have three
verified direct cross-batch rows and three former rows marked `removed` after
local proof-route repairs. G2 has verified direct rows to the current real-form,
canonical-map and Coxeter-presentation suppliers; its direct reflection-order,
finite-type-criterion and finite-Coxeter-classification rows are marked
`removed` because the final proof computes those facts locally and uses the
published rank-two root-system classification. The level-15 theorem still has
seven verified direct suppliers and its finite-classification row remains open
for the batch-13 proof defect. The I2(5) counterexample's real-form,
rank-two-reflection and finite-type-criterion rows are verified; its
finite-classification row remains open. The
planned supplier → consumer → consuming-clause map is:

| Supplier (batch) | Consumed by | Consuming proof step (authored below) |
|---|---|---|
| `def-hh-coxeter-matrix-word-group-and-length` (2) | def (statement), lem (1), `ex-a2`, `ex-b2c2`, `ex-g2` | lem 1.1/4.6; ex-a2 1.2; ex-b2c2 1.1/1.3/1.4; ex-g2 1.1 |
| `def-cg-real-coxeter-form-and-reflection` (4) | def, lem, thm, all four B items | lem 1.1, 4.1; thm 1.1, 3.x; G2 1.1, 2.1-2.2, 3.1, 4.1; other B items 1.x |
| `lem-cg-reflection-form-invariance-and-rank-two-orders` (4) | def, lem, `cex` | lem 1.1, 4.1; cex 1.1 |
| `def-cg-canonical-reflection-homomorphism` (4) | def, lem, thm, `ex-a2`, `ex-b2c2`, `ex-g2` | lem 1.4/4.3, thm 1.4; ex-a2 1.2; ex-g2 2.2/3.1/5.1 |
| `lem-cg-reflection-representation-descends-and-root-norms` (4) | lem, thm | lem 4.1; thm 1.3, 1.4, 2.3 |
| `thm-cg-root-sign-and-simple-reflection-positivity` (7) | lem | lem 4.7 (one-sign coordinates) |
| `thm-cg-root-length-criterion-and-faithfulness` (7) | thm | thm 6.1 (rho injective) |
| `def-cg-coxeter-diagram-components-and-finite-type` (13) | lem, thm | lem 2.1; thm 1.1, 1.2, 1.6, 2.1, 3.1, 4.2 |
| `lem-cg-positive-definite-diagram-exclusions` (13) | lem, thm | lem 2.4; thm 1.7 (no-cycle and unique-high-edge clauses only) |
| `thm-cg-finite-type-positive-definite-criterion` (13) | thm, `cex` | thm 1.9/1.10, cex 1.1 |
| `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (13) | thm, `cex` | thm 1.2/2.1/3.1/4.2; cex 1.1 |

The initial four supplier rows for the definition are now `verified`; its local
use is reconciled. For later consumers, keep a row `open` until the supplier's
current authored content and the consumer's actual use have both been checked.
If a supplier remains unfinished at its consumer's turn, name the exact supplier,
consumer and clause below and keep that item's decision escalated until the use
is reconciled.

### Checkpoint log

### 1. `def-cg-crystallographic-scaling-coroot-and-lattice` (A, level 4)

- Claim/conventions: for finite Coxeter data and a positive scaling, define the
  scaled simple roots, coroots, Cartan entries, crystallographic condition,
  root/coroot lattices, the weight group dual to the coroot lattice, scaled root
  set and Cartan matrix. No definiteness is assumed for the definitions. The
  local argument proves `Q subset P`, shows `P` is a lattice exactly when `B`
  is nondegenerate, includes the rank-zero case, and records the singular
  `I2(infinity)` counterexample to discreteness.
- Source verification: Milne, *Lie Algebras, Algebraic Groups, and Lie Groups*,
  Chapter I §7, 7.22–7.25 (printed p. 76), and Definition 7.4 (printed p. 67);
  Knapp, *Lie Groups Beyond an Introduction*, Chapter IV §7, Propositions 4.62
  and 4.64 (printed pp. 266–267). The relevant passages were read in full.
  The earlier Milne locator reversed `Q(R) subset P(R)`; the item and manifest
  now state the source's correct inclusion and note that Milne omits proofs in
  this section. Knapp's Lie-group context is scoped explicitly.
- Dependencies examined: `def-hh-coxeter-matrix-word-group-and-length`,
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-coroot-and-dual-root-system`,
  `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
  `def-reduced-crystallographic-euclidean-root-system`, `def-linear-basis`,
  and `thm-rank-nullity`. The four in-run rows are `verified` with exact-use
  evidence; the published definitions and rank-nullity claim are present and
  their hypotheses match. `thm-rank-nullity` was added because the local
  lattice criterion uses finite-dimensional injective-implies-isomorphic.
- Checks actually run: explicit precheck — 0 numbered steps, 0 failures;
  explicit rendercheck — one file, all YAML and math valid; strict proof
  contract for this ID — pass; scoped depcheck for this ID — 0 errors and 0
  warnings (882-item dependency closure). `proof-layout` is reserved for the
  single final batch invocation after all item edits. The full item-mode
  content-policy, run dependency-level check and `validate-plan` remain pending
  until the batch is complete. A pre-authoring `--manifest-only` policy probe
  is not applicable after item files exist; it reported `batch-item-already-exists`
  for the four existing scaffold IDs and was not used as authoring acceptance.
- Decision: no mathematical supplier escalation remains for this item. The
  final Step-3 item decision will be recorded after the full batch checks.
- Open gaps / next action: no local mathematical gap identified. The next
  dispatch item is `thm-cg-crystallographic-finite-type-and-lattice-stability`
  (level 15), after checkpointing the level-9 lemma below.

### 2. `lem-cg-integer-pairings-and-allowed-dihedral-labels` (A, level 9)

- Claim/conventions: four clauses: scaled Cartan products and sign/zero cases;
  finite positive-definite allowed labels and length ratios; explicit positive
  crystallographic scalings on forests with labels 3, 4, 6; and reflection
  stability, root/coroot lattice equalities, one-sign root coordinates and
  integrality of all scaled root-coroot pairings. The proof treats the first,
  tree and lattice clauses without assuming positive definiteness, and applies
  the positive-definite hypothesis only to the label/ratio clause.
- Source verification: Knapp, *Lie Groups Beyond an Introduction*, Chapter II
  §5, Proposition 2.48(b)–(d) (printed pp. 152–153); Milne, *Lie Algebras,
  Algebraic Groups, and Lie Groups*, Chapter I §7, Proposition 7.16 and its
  rank-two table (printed pp. 71–73); Michel, *Lectures on Coxeter groups*,
  §5 cosine table (printed p. 13). The relevant passages were read in full;
  the proof independently derives the Cartan bounds and the exact cosine
  comparisons used here.
- Dependency reconciliation: the current manifest and item now agree on 21
  dependencies. The nine in-run suppliers used here are the prior scaling
  definition, batches 2 and 4 presentation/reflection suppliers, batch-7 root
  sign theorem, and batch-13 diagram/exclusion suppliers. Their exact uses and
  current decisions were checked; all eight cross-batch rows are `verified`.
  The original Step-1 readiness record listed 19 dependencies: it retained two
  unused published root/coroot definitions and omitted the two trigonometric
  and two tree suppliers used in this authored proof. I rechecked all 21 current
  uses and synchronized the owned manifest; the added suppliers are published,
  so the computed in-run dependency level remains 9.
  The first scaling definition is also checked earlier in this report. The
  existing item had an unconditional sentence that the reflection matrices are
  integral; it is repaired so matrix integrality follows only after the
  crystallographic assumption is invoked in step 2.3. Step 2.4 then uses the
  reflection involution to prove equality of lattice images. The statement now
  explicitly defines $\gamma^\vee$ for scaled roots before using the
  pairing $B(\beta,\gamma^\vee)$.
- Checks actually run: explicit precheck — one proof, 0 failures; explicit
  rendercheck — one file, all YAML and math valid; strict proof contract for
  this ID — pass after recording all 28 fact citations, all 15 proof steps and
  the eight standard boundary cases; scoped depcheck — 0 errors and 0 warnings
  (882-item dependency closure); cross-batch dependency-ledger refresh — pass.
  The final proof-layout invocation and full batch content-policy,
  dependency-level and plan checks remain pending until all items and pages are
  complete.
- Supplier concern for the owner (not used by this consumer): the accepted
  sibling supplier `lem-cg-positive-definite-diagram-exclusions` has a confirmed
  arithmetic slip in its proof step 1.4. At $i=2$, the displayed expression
  $i^2-\sum_{k=1}^{i-1}k(k+1)$ equals 2, not the asserted $i(i+1)/2=3$; direct
  expansion gives
  $\sum_{k=1}^{i}k^2-\sum_{k=1}^{i-1}k(k+1)=i^2-\sum_{k=1}^{i-1}k=i(i+1)/2$.
  The resulting chain inequality is repairable by this correction. This
  consumer uses only the supplier's no-cycle clause (2) and unique-large-edge
  clause (4)(ii), whose separate proofs in supplier steps 2.1 and 3.1 were
  rechecked; it does not use the flawed path-inequality argument. Remedy: repair
  supplier step 1.4 in its owning batch-13 item/report; no statement change or
  consumer edit is required for this lemma's actual use.
- Decision: no unresolved mathematical obligation remains in this consumer's
  actual supplier uses. Record the final Step-3 item decision after the full
  batch checks.
- Open gaps / next action: none local to this lemma. Proceed to
  `thm-cg-crystallographic-finite-type-and-lattice-stability` in dependency
  order, and retain the batch-13 proof correction as an owner-facing finding.

### 3. `thm-cg-crystallographic-finite-type-and-lattice-stability` (A, level 15)

- Claim/conventions: under the standing finite-W (equivalently positive-
  definite-B) hypothesis, (1) crystallographic scalings exist exactly on the
  finite Weyl types; (2) every such scaled root set is a reduced
  crystallographic Euclidean root system with Weyl group `rho(W)`, and no other
  finite Coxeter system with a simple-root base has this property; (3) root and
  coroot lattices are stable, with `Q subset P`, one-sign integral root
  coordinates and integral root-coroot pairings; (4) the two length choices at
  the unique 4- or 6-edge transpose the Cartan matrix.
- Mathematical audit and repairs: corrected step 2.5's complement argument to
  say that powers are the identity exactly when their restrictions to the
  rank-two plane are; corrected step 4.1's negative-proportional case, where
  the conclusion is `beta=-gamma`; cited the finite classification in step
  2.4 for the `B_n/C_n`, `F_4`, and `G_2` identifications; and added the exact
  rank-nullity and finite-dimensional orthogonal-decomposition suppliers for
  steps 5.1 and 2.5. Added citations for scale invariance and rho-preserved
  norms. Choice accounting now states that no AC is used; selecting one root
  in each of the finitely many tree components is finite choice by induction.
  Pruned the direct dependency list to sources actually cited and added the
  required published suppliers; the in-run maximum remains level 14, so level
  15 is unchanged.
- Sources checked: Davis, *The Geometry and Topology of Coxeter Groups*,
  §6.9/Table 6.1 and Appendix C.1/C.3, Theorem C.1.2 and its classification
  argument, printed pp. 103–104 and 433–438; Michel, *Lectures on Coxeter
  groups*, Theorem 5.15 and its complete two-part proof, printed pp. 12–15;
  Knapp, *Lie Groups Beyond an Introduction*, Chapter II §5, Propositions
  2.48–2.49 and the simple-root consequences, printed pp. 153–156; Milne,
  Chapter I §7, Theorems 7.18–7.19, printed pp. 74–75. The Coxeter
  classification argument was read in full in Davis and Michel. Knapp's root
  system passages confirm the Cartan-integer bounds and simple-root claims;
  the Chapter IV lattice index result is context only, not a premise in this
  proof, which derives its lattice claims from the preceding assigned lemma.
- Dependencies examined: the same-pair suppliers are the repaired scaling
  definition and crystallographic lemma above. Eight direct cross-batch rows
  are recorded in the batch-21 input file: the real-form and canonical-map
  definitions, the rho-invariance/conjugation lemma, the faithfulness theorem,
  the diagram definition, the finite-type criterion, the positive-definite
  exclusions lemma, and the finite Coxeter classification theorem. Seven
  direct uses were reconciled. The finite classification row remains open for
  the exact reason below. Published dependencies include the root-system,
  coroot/lattice, simple-root, rank-two, Dynkin-duality, definiteness,
  orthogonal-decomposition and rank-nullity suppliers; their cited claims and
  hypotheses match the proof.
- Open supplier obligation: consumer
  `thm-cg-crystallographic-finite-type-and-lattice-stability`, consuming
  steps 1.2, 2.1, 3.1 and 4.2, uses `F5`/`F6` from
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`. That
  supplier's proof step 1.3 takes its classification from
  `lem-cg-positive-definite-diagram-exclusions` clauses (5)(i) and (7); the
  latter uses the exclusion lemma's proof step 1.4. In that step the displayed
  identity `i^2-sum_{k=1}^{i-1} k(k+1)=i(i+1)/2` is false at `i=2` (left side
  2, right side 3). The corrected expansion is
  `sum_{k=1}^{i} k^2-sum_{k=1}^{i-1}k(k+1)=i^2-sum_{k=1}^{i-1}k=i(i+1)/2`.
  The classification statement is independently confirmed by Davis and
  Michel, but the in-run classification supplier chain remains open until the
  owning batch repairs and rechecks the path inequality and its downstream
  use. No sibling file was edited. The direct uses of the exclusion lemma's
  separate no-cycle clause (2.1) and unique-large-edge clause (3.1) in this
  theorem's step 1.7 were checked and do not use the false path calculation.
- Checks actually run: explicit-path precheck — one proof, 0 failures;
  explicit rendercheck — one file, all YAML and math valid; strict proof
  contract — pass for all 40 fact citations, 23 numbered steps and eight
  boundary dispositions; scoped depcheck — 0 errors and warnings; batch
  manifest-deps — 7 items, 0 normalization and 0 errors. Full content policy,
  dependency-level check, `validate-plan`, and the one final batched
  `proof-layout` invocation remain pending until the four examples and pages
  are complete.
- Decision: local proof authoring and checks are complete. The final Step-3
  item decision must be `escalate` until the finite-classification supplier
  chain is repaired and the exact use in steps 1.2, 2.1, 3.1 and 4.2 is
  reconciled.
- Open gaps / next action: keep the classification row escalated and continue
  with `cex-cg-i2-five-is-not-crystallographic` (B, level 16) in dispatch
  order. The B consumer may be authored with the same open classification
  obligation.

### 4. `cex-cg-i2-five-is-not-crystallographic` (B, level 16)

- Claim/conventions: the rank-two matrix with label 5 has a positive-definite
  Coxeter form and a finite Coxeter group, but no scaling has integral Cartan
  entries; no reduced crystallographic root-system base has the normalized
  pairing `-cos(pi/5)`.
- Mathematical audit and repairs: the positive-definiteness calculation now
  cites the exact finite-rank-two form claim directly, without an unproved
  sine nonvanishing step. Added the missing simple-root basis supplier to
  justify that the two roots in a base are nonproportional before applying the
  rank-two Cartan-product bound. The product computation is complete:
  `4 cos^2(pi/5)=2+2 cos(2 pi/5)` and `pi/3<2 pi/5<pi/2` give a strict value
  in `(2,3)`, which cannot be an integer Cartan product. The two refutations
  remain separate, and the item uses no Choice.
- Sources checked: Michel, *Lectures on Coxeter groups*, §5 cosine table and
  Theorem 5.15, printed pp. 12–15; Knapp, *Lie Groups Beyond an Introduction*,
  Proposition 2.48(c) and its proof, printed pp. 153–154; Milne, Chapter I §7,
  Proposition 7.16 and its rank-two statement, printed pp. 71–73. Knapp's
  proof gives the integral Cartan-product bound for nonproportional roots;
  Milne's table gives the possible simple-root Cartan pairs.
- Dependencies examined: the scaled geometry, the integrality/product lemma,
  the rank-two reflection plane, and the positive-definite finiteness
  criterion were checked against their current statements and consuming steps.
  The new simple-root basis dependency is published and its finite-root-system
  hypothesis is met. The cross-batch input rows for these three dependencies
  are `verified`. This item also consumes the level-15 theorem's
  crystallographic-type conclusion in steps 3.1 and 4.1 and the batch-13
  finite-classification result for the `H_2=I_2(5)` naming in step 1.1.
- Open supplier obligation: consumer
  `cex-cg-i2-five-is-not-crystallographic` uses
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral` through fact
  F5 in steps 1.1 and 3.1 (and identifies the consequence in 4.1); that
  supplier's proof step 1.3 depends on
  `lem-cg-positive-definite-diagram-exclusions`, whose step 1.4 has the false
  chain identity detailed in item 3 above. The local no-scaling contradiction
  in step 3.1 and the finiteness proof in step 1.1 do not depend on the path
  calculation, but the classification/H2 citation gate remains open until the
  owning batch repairs that supplier chain. The same-pair dependency on
  `thm-cg-crystallographic-finite-type-and-lattice-stability` also remains
  open through its step-1.2 classification use. No sibling file was edited.
- Checks actually run: explicit-path precheck — one counterexample, 0 failures;
  explicit rendercheck — one file, all YAML and math valid; strict proof
  contract — pass for 20 fact-source citations, six numbered proof steps and
  eight boundary dispositions; scoped depcheck — pass; batch manifest-deps —
  7 items, 0 normalization and 0 errors. Full batch content policy,
  dependency-level check, `validate-plan`, and final batched `proof-layout`
  remain pending.
- Decision: local proof authoring and checks are complete. Record this item as
  `escalate` until the classification supplier chain is repaired and the exact
  use of F5 in steps 1.1 and 3.1 is reconciled.
- Open gaps / next action: the A2 scaffold's excess later dependencies were
  found and removed at its checkpoint; see item 5 below for the recalculated
  level and exact remaining work.

### 5. `ex-cg-a2-root-and-weight-lattices` (B, computed level 10)

- Claim/conventions: the label-3 pair has, up to common positive scale, the
  crystallographic A2 scaling with six-root orbit, root lattice, coroot
  lattice and dual weight lattice stated in the item. In the standard
  sum-zero coordinates the correct weight lattice is
  `P0={(x_i) in (1/3 Z)^3 : sum x_i=0 and x_i-x_j in Z for all i,j}`; the two
  fundamental weights give `P0/Q0 ~= Z/3` and `[P:Q]=det A=3`. Direct B2 and
  C2 coordinate calculations give index two, and the chosen root-reflection
  pairs have product of exact order four.
- Scaffold repairs: the original `P0` allowed all third-integral sum-zero
  vectors, giving an index-nine overgroup instead of the standard index-three
  weight lattice. The item now imposes integral coordinate differences and
  proves that condition from the simple-coroot pairings. The scaffold also
  depended forward on the later B2/C2 example; its index comparison is now a
  complete local coordinate calculation, with no sibling B2 link. Unused
  finite-type, classification, positive-definite-criterion, reflection-form
  and root-system dependencies were pruned. The actual in-run maximum is the
  level-9 crystallographic lemma, so both item and manifest now record level
  10 rather than scaffold level 16.
- Mathematical audit: the six-root orbit is obtained directly from the
  generator-reflection formulas and word generation; the abstract finite-type
  theorem is not used. The A2 simple-root base is checked from its positive
  roots for `v=(1,0,-1)`. The coordinate isometry transports the simple root
  and coroot lattices, and the explicit dual-basis computation proves the
  quotient order. B2/C2 root and coroot spans and both weight lattices are
  computed from their full coordinate root sets. No Choice is used.
- Sources checked: Knapp, *Lie Groups Beyond an Introduction*, Chapter II
  (2.43), (2.50), printed pp. 150 and 155, for the coordinate root sets and
  simple-root conventions; Chapter IV §7, Propositions 4.62 and 4.64, printed
  pp. 266–267, for lattice-index context only. Milne, *Lie Algebras, Algebraic
  Groups, and Lie Groups*, Chapter I §7, 7.22–7.25, printed pp. 75–76, for the
  root/weight-lattice conventions; Milne notes omitted proofs there. The
  B2/C2 and A2 index calculations are given locally, not inferred from those
  index references.
- Dependencies examined: same-pair `def-cg-crystallographic-scaling-coroot-and-lattice`
  and `lem-cg-integer-pairings-and-allowed-dihedral-labels`; cross-batch
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`, and
  `def-hh-coxeter-matrix-word-group-and-length`; published standard coordinate,
  positive-system/base, lattice, coroot and fundamental-weight definitions.
  The three actual cross-batch rows are `verified`. The previous direct rows
  to `thm-cg-finite-type-positive-definite-criterion` and
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral` were removed
  because no proof step uses those claims.
- Checks actually run: strict proof contract — pass for 14 fact-source
  citations, 10 numbered proof steps and all eight boundary dispositions.
  Explicit renderer passed after the statement display blocks were made
  single-line, before the final facts/proof revision; it will be rerun on all
  owned files at batch acceptance. Explicit precheck remains pending until the
  final proof-layout formatter; full content policy, dependency-level check,
  `validate-plan` and final batched `proof-layout` remain pending.
- Decision: no supplier escalation remains for A2. Record `repaired` only after
  the final batch gates pass.
- Open gaps / next action: finalize the repaired level-15 theorem and I2(5)
  decisions as `escalate` while the batch-13 classification proof remains
  unrepaired; B2/C2 is complete at its recomputed level 10. Inspect G2's exact
  suppliers and author it next in the remaining level-16 order.

### 6. `ex-cg-b2-c2-dual-realizations-and-lattices` (B, computed level 10)

- Claim/conventions: the label-4 pair is finite with positive-definite Coxeter
  form. The two tree scalings have transpose Cartan matrices and explicit
  simple-reflection orbits. An isometry identifies them with
  `1/sqrt(2) C2` and `B2`; their root systems are dual up to positive scale and
  both realize the `I2(4)` diagram. The standard B2/C2 root and coroot lattices
  are exchanged; both weight/root indices and Cartan determinants are two.
  The A2 comparison index three is computed locally in this item.
- Scaffold repairs: the source locator for Milne reversed the inclusion
  `Q(R) subset P(R)`; the item now records the correct direction and states
  that the local index calculations do not rely on omitted source proofs. The
  statement also linked forward to the A2 companion without declaring it as a
  dependency. That link is removed, and step 2.4 gives the complete A2
  coordinate calculation. Direct dependencies on the finite-type theorem,
  finite classification, positive-definite criterion, rank-two reflection
  lemma, root-system duality proposition and reduced-root definition were
  pruned; their unused former cross-batch edges are recorded `removed`.
  The actual same-pair maximum is the level-9 crystallographic lemma, so the
  item and manifest now record level 10 rather than scaffold level 16.
- Mathematical audit: finiteness follows from the two-generator presentation's
  eight normal forms, and positive definiteness follows by completing the
  square. Both scaled root orbits are computed directly and checked against
  the full coordinate B2/C2 sets; coroot duality and all three lattice-index
  claims are derived locally. The two coordinate reflection products have
  exact order four. No Choice is used.
- Sources checked: Milne, *Lie Algebras, Algebraic Groups, and Lie Groups*,
  Chapter I §7, 7.22–7.25, printed pp. 75–76, for root/weight-lattice
  conventions; the inclusion is corrected to `Q subset P`, and the local
  proof supplies every index. Knapp, *Lie Groups Beyond an Introduction*,
  Chapter II (2.43), (2.50), printed pp. 150 and 155, for coordinate roots;
  Chapter IV §7, Proposition 4.64, printed p. 267, is context only, not a
  premise. The dual-root identity is checked directly from the coroot formula.
- Dependencies examined: same-pair `def-cg-crystallographic-scaling-coroot-and-lattice`
  and `lem-cg-integer-pairings-and-allowed-dihedral-labels`; cross-batch
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`, and
  `def-hh-coxeter-matrix-word-group-and-length`; published coordinate-root,
  simple-root, lattice and coroot definitions. The three actual cross-batch
  rows are `verified`; the former reflection-order, finite-type-criterion and
  classification rows are `removed` with evidence that their claims are not
  used by the local proof.
- Checks actually run: strict proof contract — pass for 16 fact-source
  citations, 10 numbered proof steps and all eight boundary dispositions;
  explicit rendercheck — pass for A2 and B2/C2 together; scoped depcheck — 0
  errors and warnings for those two items; batch manifest-deps — 7 items, 0
  normalization and 0 errors. Explicit precheck remains pending until the
  final proof-layout formatter; content policy, dependency-level check,
  `validate-plan` and the final batched `proof-layout` are pending.
- Decision: no supplier escalation remains for B2/C2. Record `repaired` only
  after the final batch gates pass.
- Open gaps / next action: keep the level-15 crystallographic theorem and the
  I2(5) counterexample escalated for the batch-13 classification-chain defect;
  G2 is the next item after recomputation and is checkpointed below.

### 7. `ex-cg-g2-from-i2-six` (B, computed level 10)

- Claim/conventions: for the label-6 Coxeter pair, the Coxeter form is positive
  definite, the presented group and canonical reflection image have order 12,
  and the scaling $(c_s,c_t)=(1,\sqrt3)$ has Cartan matrix
  $\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$. The scaled root set is the six
  displayed positive roots and their negatives, with squared norms 1 and 3.
  The proof verifies finiteness, spanning, reflection stability, integrality,
  reducedness, a base, and irreducibility before applying the published
  rank-two root-system classification. It proves $W(\Phi_c)=\rho(W)$ and
  checks $\Phi_{c'}=(\sqrt3/2)\Phi_c^\vee$ for the other scaling.
- Scaffold repair: the supplied sample
  $B(a_t,(3a_s+2a_t)^\vee)=-1$ is false. Direct calculation gives
  $B(a_t,3a_s+2a_t)=3/2$ and $B(3a_s+2a_t,3a_s+2a_t)=3$, hence the displayed
  pairing is $+1$. The corrected negative sample is
  $B(a_t,(3a_s+a_t)^\vee)=-1$. The proof also prunes unused direct dependencies
  on the level-15 theorem, the batch-13 finite-type criterion and Coxeter
  classification, full irreducible classification, the direct rank-two
  reflection lemma, the Cartan-matrix definition and quarter-turn-only
  trigonometry. It uses the published rank-two root-system classification and
  derives the special-angle value and group order locally. The actual maximum
  same-pair dependency is the level-9 lemma, so item and manifest are set to
  level 10.
- Sources checked: Milne, *Lie Algebras, Algebraic Groups, and Lie Groups*,
  Chapter I §7, Proposition 7.16 and the rank-two Dynkin diagrams, printed/PDF
  p. 73, for allowed Cartan pairs and the G2 diagram; Knapp, *Lie Groups Beyond
  an Introduction*, Chapter II §5, Figure 2.2 and Proposition 2.48(c), printed
  pp. 151–153, for the G2 configuration and Cartan integer bounds; Michel,
  *Lectures on Coxeter groups*, printed p. 3 and §5 printed p. 13, for the
  $G_2=I_2(6)$ notation and cosine table. The relevant passages were read; the
  item derives its root orbit, order, and special-angle values rather than
  relying on those classifications as proof.
- Dependencies examined: same-pair scaling definition and crystallographic
  lemma; current accepted in-run Coxeter presentation, real-form definition
  and canonical-map definition; published reduced-root-system, positive-base,
  irreducibility, Weyl-group, rank-two classification and trigonometric
  results. The direct cross-batch rows to `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`, and
  `def-hh-coxeter-matrix-word-group-and-length` are `verified`. Former direct
  rows to `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `thm-cg-finite-type-positive-definite-criterion` and
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral` are
  `removed` because their claims are proved locally or replaced by the
  published rank-two root-system theorem. No unfinished supplier remains in
  G2's actual proof route; the batch-13 classification-chain defect remains
  relevant only to the theorem and I2(5) consumer recorded above.
- Checks actually run on the draft: explicit precheck initially proposed
  canonical phase stratification; `adopt-repair.mjs` could not invoke `npx`
  because the default npm cache is read-only, so the displayed renumbering was
  applied manually. The current explicit precheck passes. Explicit rendercheck
  passes, and the strict proof contract passes for 19 cited excerpts, six
  numbered steps and all eight boundary cases. Scoped depcheck, batch item-mode
  content policy, manifest checks, pair-scoped `validate-plan`, and scoped
  dependency check pass; the level check and runwide plan mismatch are detailed
  below. The `repaired` G2 item decision is recorded at confidence 1.
- Decision: `repaired`, confidence 1. No unresolved supplier remains in G2's
  actual proof route.
- Final proof-layout: one batched invocation on all seven item paths passed —
  7 items, 70 steps, 0 defects.
- Open obligations: the level-15 theorem and I2(5) item remain escalated until
  the owning batch-13 proof defect is repaired and their current supplier uses
  are reconciled. Run-wide Step 4 plan and dependency-level mismatches are
  assigned to their other page owners.

## Final pair registration and gate results

- Page and plan amendments: the A page lists `def-cg-crystallographic-scaling-coroot-and-lattice`, `lem-cg-integer-pairings-and-allowed-dihedral-labels`, and `thm-cg-crystallographic-finite-type-and-lattice-stability`. The B page lists A2, B2/C2, G2, then I2(5) in computed dependency order. The two page summaries were rewritten to remove stale scaffold language. `research/plan-spec.json` now carries matching `{id, kind, title, deps}` rows for these seven IDs; same-pair dependencies and levels are synchronized in the batch manifest.
- Cross-batch input: 43 rows, with the three direct G2 rows verified, three unused G2 rows removed, sibling rows preserved. No new item supplier was created. The unified cross-batch ledger refresh is left to the serial reconciler, as assigned.
- Item decisions recorded with confidence 1 and current direct dependency lists: `repaired` for the scaling definition, integer-pairing lemma, A2, B2/C2 and G2; `escalate` for the finite-type theorem and I2(5) counterexample. The latter two remain open under the batch-13 supplier defect below.
- Pair-scoped checks: explicit precheck — six proofs pass and the definition is not applicable; explicit rendercheck — all seven items and both pages pass; strict proof contracts — 7/7 items, 0 errors/warnings; item-mode content policy — 7 items, 0 errors/warnings; focused depcheck — 908-item dependency closure, 0 errors/warnings; manifest-deps — seven items, 0 errors; and `validate-plan` on the two owned pages — pass. The computed levels for all seven owned IDs match 4, 9, 10, 10, 10, 15 and 16 in the order recorded above.
- A run-wide `item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports nine stale levels outside this pair: `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` 11→10; `thm-cg-compact-local-cat-one-short-circle-criterion` 12→11; `ex-cg-root-versus-coroot-translation-lattices` 3→2; `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` 21→20; `def-cg-recursive-sortable-projection-and-cambrian-congruence` 28→27; `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` 29→28; `thm-cg-sortable-projection-greatest-element-and-interval-fibers` 30→29; `ex-cg-cambrian-quotient-of-s3-and-two-orientations` 31→30; and `ex-cg-a3-sortable-subset-and-a-three-element-fiber` 31→30. None is an owned ID.
- Run-wide `validate-plan --run frontier-42-coxeter-32` still fails with 305 hard errors and 130 redundant-prerequisite warnings: 297 current-manifest item IDs on 62 pages in the other 31 pairs are absent from their `plan-spec.json` item arrays, and these eight page prerequisites are undeclared: `affine-reflections-coroot-translations-and-alcoves-examples`→`minkowski-theory-and-number-field-class-groups`; `coxeter-descents-poincare-polynomials-and-growth`→`weak-order-inversions-and-lattice-operations`, `permutation-statistics-inversions-and-eulerian-numbers`, `braided-and-symmetric-monoidal-categories`, and `fundamental-trigonometric-identities-examples`; `coxeter-descents-poincare-polynomials-and-growth-examples`→`braided-and-symmetric-monoidal-categories`, `formal-power-series-examples`, and `weak-order-inversions-and-lattice-operations`. The 31 affected A/B pairs are `tensor-coherence-and-algebraic-descent`, `parabolic-subgroups-and-double-coset-geometry`, `cat-comparison-link-criteria-and-local-globalization`, `bruhat-subword-order-and-lifting`, `finite-coxeter-diagrams-and-complete-classification`, `coxeter-artin-and-hecke-interfaces`, `short-loop-polygons-and-quantitative-energy-decrease`, `bruhat-interval-labels-shellings-and-mobius-functions`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `finite-reflection-length-and-orthogonal-moved-spaces`, `bipartite-coxeter-elements-and-ordered-root-complexes`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `finite-coxeter-invariants-and-coinvariant-gradings`, `large-spherical-metric-flags-and-the-moussong-girth-theorem`, `weak-order-inversions-and-lattice-operations`, `affine-reflections-coroot-translations-and-alcoves`, `coxeter-descents-poincare-polynomials-and-growth`, `spherical-parabolic-cosets-and-the-davis-complex`, `affine-coxeter-diagrams-and-semidefinite-classification`, `heaps-commutation-classes-and-fully-commutative-elements`, `coxeter-euler-forms-and-sortable-chamber-cones`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `davis-cat-zero-geometry-and-finite-subgroup-fixed-points`, `noncrossing-partition-lattices-and-kreweras-complements`, `sortable-projections-and-finite-cambrian-lattices`, `real-forms-and-reflection-geometry`, `finite-lattice-projections-and-coxeter-chain-labels`, `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `canonical-roots-signs-and-faithful-reflections`, `spherical-simplex-metrics-angular-links-and-cones`, and `tits-cones-chambers-and-parabolic-stabilizers`. Their page owners need to synchronize plan item arrays and prerequisite declarations. The pair-scoped plan check passes.
- An unsupported `depcheck --help` invocation earlier triggered an unscoped whole-library scan; it surfaced legacy `published-unaudited` warnings and two unrelated draft B-leaf edges (`ex-cg-infinite-dihedral-growth`→`ex-formal-geometric-series`; `lem-cg-exceptional-parabolic-orbit-length-certificates`→`ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`). Those items are outside this pair and were not edited. The intended focused depcheck later passed on the assigned closure.
- No published item was edited and no new published-content concern was confirmed. The confirmed classification-path arithmetic defect is in the in-run batch-13 draft and remains owner-held. The single final `proof-layout` invocation passed with 0 defects. The five repaired item decisions are current; the two escalations and run-wide Step 4 mismatches remain open for their owners.
