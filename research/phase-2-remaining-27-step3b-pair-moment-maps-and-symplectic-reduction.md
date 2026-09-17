# Step 3b — scaffold audit, repair and authoring: `moment-maps-and-symplectic-reduction`

Run `phase-2-remaining-27`, batch 13, pair DG-37 (A page
`moment-maps-and-symplectic-reduction`, B page
`moment-maps-and-symplectic-reduction-examples`). The sibling pair DG-34 in the
shared batch files was not edited by this dispatch.

## Outcome

All 40 scaffolded A items and all 12 B items are authored as draft items with
complete local proofs, verifications or refutations, both pages are written,
and the pair carries a fresh `sufficient` Step-3a scope receipt plus 52 Step-3b
item receipts (`accept`, confidence 1). One definition was added locally and is
registered in the manifest, coverage, page and proof-contract file:

| Class | Count | Notes |
|---|---|---|
| A items (scaffolded) | 40 | every original ID and promised claim retained |
| A item added by this dispatch | 1 | `def-coadjoint-representation-of-a-lie-group` |
| B items | 12 | the design's B inventory verbatim |

The added item carries no Step-3 item receipt by design: the engine compares
the post-author inventory with its pre-author baseline and issues the
auditor-created certification for additions.

## Repairs made to the scaffold (all documented, none silent)

1. **Missing coadjoint definition supplied.** The scaffold's
   `def-symplectic-and-hamiltonian-lie-group-action` used the coadjoint action
   and coadjoint equivariance, and the library had no coadjoint item: only the
   adjoint representation. The new definition supplies the left action
   $g\cdot\alpha=\alpha\circ\operatorname{Ad}_{g^{-1}}$, proves the action law,
   joint smoothness and the fundamental-field formula
   $\xi_{\mathfrak g^*}(\alpha)(\eta)=\alpha([\xi,\eta])$, and introduces
   coadjoint orbits and stabilizers through
   `def-orbit-stabilizer-and-orbit-map-of-a-smooth-action`. It is inserted first
   on the A page and added to the deps of every consumer that needs it.
2. **Dependency arrays refreshed to the suppliers actually used.** For all 53
   items the manifest `deps` rows were synchronised with the item files. Facts
   whose suppliers were missing from `deps` were given the missing suppliers
   (`def-fundamental-vector-field-of-a-left-action`,
   `def-poisson-bracket-on-a-symplectic-manifold`, `def-smooth-left-action-of-a-lie-group`,
   `def-symplectic-and-hamiltonian-lie-group-action`,
   `def-symplectic-form-and-symplectic-manifold`, the cocycle lemma,
   `thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology`,
   `cor-a-nonzero-period-obstructs-exactness-and-bounding`,
   `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`,
   and the su/so comparison example). Two scaffold facts that the completed
   proofs do not use were deleted rather than left uncontracted
   (`F2` of the differential-of-the-moment-map lemma, `F6` of the
   reduction-in-stages theorem).
3. **The design's `thm-maurer-cartan-structure-equation` dependency for the KKS
   theorem was dropped.** The completed closedness proof uses Meinrenken's
   argument (Theorem 7.25): the form is $G$-invariant, its contraction with
   every fundamental field is exact, and the fundamental fields span each
   tangent space; no Maurer--Cartan or Chevalley--Eilenberg input is needed.
   The Chevalley--Eilenberg differential is retained only where the cocycle
   lemma genuinely uses it.
4. **B-page sign repaired.** The B scaffold asked for the moment map
   "$|z|^2/2$" of the scalar circle action. With the library's negative
   fundamental field the correct quadratic is $-|z|^2/2+c$; the item now
   computes the sign and records that the positive quadratic belongs to the
   opposite generator convention. The downstream projective-space example was
   rewritten around the resulting sphere level.
5. **Item 5 sharpened but not weakened.** The promised equivalence under
   connected $G$ and $M$ is proved; the item records that the converse uses
   only connectedness of $G$ (the defect curve solves a linear ODE along
   exponentials) while connectedness of $M$ is used only to deduce the bracket
   identity from a single-point check via the defect lemma.
6. **False statements supplied with witnesses.** $T^2$ translation for
   "every symplectic action is Hamiltonian"; $\mathbb R^2$ translations with
   $\mu(x,y)=(y,-x)$ and defect $-1$ for "infinitesimal moments are
   equivariant"; translation-lifted $T^*\mathbb R$ with $\mu=p$ and its
   translates for non-uniqueness; the same model with $+p(\xi_Q)=-p$ for the
   cotangent sign; the hyperbolic $\mathbb R$-action $t\cdot(x,y)=(e^tx,e^{-t}y)$
   with $\mu=xy$, whose level $\{xy=0\}$ has a five-point non-discrete quotient,
   for "every value reduces smoothly"; and the cotangent-lift $SO(3)$ action on
   $T^*\mathbb R^3$ at a nonzero value with circle stabilizer, where
   $\dim M_\alpha=2\ne0=\dim M-2\dim G$, for the dimension claim.
7. **Presentation repairs for the renderer and contracts.** Display formulas
   were collapsed onto single source lines, the only wikilink-shaped bracket
   string in math was rewritten with `\lbrack`/`\rbrack`, a double subscript in
   the product-moment identity was fixed, and the two counterexample items were
   given the standard `Facts & Assumptions` layout so that their labelled facts
   and steps parse for both precheck and the proof-contract checker.

## Axiom-of-choice bookkeeping

* Every A-page item and every B-page item declares `def-countable-choice` and
  states that $\mathrm{AC}_\omega$ is inherited through the published
  fundamental-vector-field, exponential and cotangent suppliers. No item infers
  arbitrary-index choice from finite choice, and no choice-free argument was
  rerouted through a choice-bearing supplier.
* The two compact-averaging propositions
  (`prop-compact-group-symplectic-actions-admit-an-invariant-compatible-almost-complex-structure`,
  `prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes`)
  additionally declare `def-axiom-of-choice`, because the normalized Haar
  measure and the background Riemannian metric come from AC; both items say so
  and identify the exact use (the average and the descent of the averaged
  metric). Nothing downstream of the reduction theorem uses these two items.
* `rem-convexity-and-toric-classification-for-hamiltonian-torus-actions` has
  `deps: []`, since it asserts nothing and consumes no result.

## Open qualifications and escalations

1. **Singular and orbifold reduction are boundaries, not results.** The page
   proves only the regular free proper theorem. `rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds`
   and the two examples/counterexamples record the orbifold, weighted
   projective and nonfree phenomena; no smoothness or stratification theorem is
   asserted, and no singular-reduction machinery is consumed.
2. **Convexity, Delzant, localization and equivariant cohomology are withheld**
   (`rem-convexity-and-toric-classification-for-hamiltonian-torus-actions`), as
   the design requires. No example on the B page classifies a moment polytope.
3. **The Grassmannian example rests on standard matrix-group facts.** Its
   equivariant moment map $\mu(A)=-\frac i2AA^*+\lambda iI$ is verified on the
   page (component equations, equivariance, level, freeness, dimension), but
   the identification of $U(k)$ as a compact Lie group with Lie algebra
   $\mathfrak u(k)$ is carried by the source locators rather than by an
   A-homed library item; see the published-item concern 2 below. Confidence in
   the computation itself: high. The example is a leaf and no A-page item
   consumes it.
4. **The reduction-in-stages item requires the explicit hypotheses** stated in
   its claim: $0$ regular for $\mu_H$, $H$ free and proper on its level, $0$
   regular for the residual map, $G/H$ free and proper, and the one-stage
   hypotheses. The proof of the properness equivalence between the two pictures
   is not attempted; properness is a hypothesis on both sides.

## Published-item concerns for the canonical ledger

These are reported for the serial reconciler; none of them was used as a
supplier on this page unless stated.

1. **B-homed standard examples cannot serve as dependencies** (confirmed
   structural friction, not a mathematical defect). `ex-the-standard-symplectic-vector-space`,
   `ex-orthogonal-and-special-orthogonal-lie-groups`,
   `ex-unitary-and-special-unitary-lie-groups` and
   `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` are published
   but homed only on examples pages, so depcheck rejects any A-page item that
   declares them as a dependency. This pair needed their content: the standard
   symplectic form on $\mathbb R^{2n}$ (rerouted to the A-homed
   `thm-the-canonical-cotangent-two-form-is-symplectic` and a coordinate
   computation), the non-exactness of $dy$ on $T^2$ (rerouted to the A-homed
   cohomology theorem plus the period corollary), and the classical matrix
   groups $SO(3)$/$U(k)$ (rerouted to the A-co-homed
   `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`
   for $SO(3)$, and to the source locators plus
   `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`
   for $U(k)$). Proposed repair: owner decision on publishing A-page twins of
   these standard facts, or an explicit policy note that foundational examples
   may be co-homed on the corresponding A page. Confidence: high that the
   restriction exists as described.
2. **`ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` is a
   B-leaf**, so the concrete torus witness used by the false statement
   `fs-every-symplectic-action-is-hamiltonian` had to be rebuilt from A-homed
   items (the cohomology theorem plus the period corollary); the torus item
   `def-two-dimensional-torus` is A-homed and is cited directly. No defect in
   the example itself was found; its content is correct.
3. **Published `def-fundamental-vector-field-of-a-left-action` carries a
   countable-choice assumption** that propagates to every item of this pair;
   the pair declares it. No metadata defect found.
4. **Run-level observation (outside this pair).** The engine's 3b blocker list
   includes a duplicate-item error for
   `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`,
   which appears both in `research/phase-2-remaining-27-batch-12.pages.json`
   and as an item file, and a stalemate for
   `normal-moore-spaces-pmea-and-consistency-strength`. Both belong to other
   groups; reported here only for the owner's awareness.

## Checks actually run (this dispatch)

`step3-decisions.mjs check --phase scope` reports `closed: true` with no work
item, and `check --phase final` reports no work item for this pair.

* `precheck.mts` on the explicit paths of all 53 items: 82 checks (A and B
  lists overlapped), 0 failing (direct strategy).
* `rendercheck.mjs` on all 53 items and both pages: OK — no wikilink inside
  math, no unbalanced or multiline display blocks, every math span parses under
  KaTeX, every frontmatter block parses.
* `proof-contract.mjs research/phase-2-remaining-27-batch-13.proof-contracts.json --strict`:
  0 errors, 0 warnings, 47/47 proof-bearing items checked (the two remarks and
  four definitions of the pair carry no proof contract by construction).
* `depcheck.mjs --quiet`: OK — no cycles, all references resolve, no draft items
  on published pages (the b-leaf violations found earlier were repaired by the
  rerouting described above).
* `content-policy.mjs research/phase-2-remaining-27-batch-13.pages.json`: 0 errors,
  0 warnings over the whole batch at the final run (the sibling DG-34 pair was
  still being authored during intermediate runs; none of its transient findings
  ever named an item of this pair).
* `manifest-deps.mjs` over all batch manifests: 1 030 items, 0 errors.
* `coverage-checklist.mjs … --require-destination`: 2 pages, 29 harvested
  results, 0 errors.
* `validate-plan.mjs research/plan-spec.json`: exit 0; no item cycles, forward
  references, B-page dependencies or unresolved IDs at page level.
* `frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`:
  refreshed and deduplicated; the two compact-Lie item edges of this pair are
  recorded as `verified` in the batch-13 input together with the existing page
  edge.
* `step3-decisions.mjs record-scope` (fresh `sufficient` receipt after the local
  addition) and `record-item` (52 receipts, accept, confidence 1); the final
  `check --phase final` reports no work item for this pair.

## Source evidence

Cannas da Silva, *Lectures on Symplectic Geometry* (1 127 912 bytes, 225 pp.;
printed page = PDF page − 8): Lectures 21 (adjoint/coadjoint conventions,
§21.5), 22 (Definitions 22.1–22.3, §§22.1–22.4), 23 (Theorem 23.1 and the
proof ingredients), 24 (§§24.1–24.5, Noether, reduction at other levels,
orbifolds), 26 (Theorems 26.1–26.5, existence and uniqueness of moment maps).
Meinrenken, *Symplectic Geometry* (2 031 350 bytes, 142 pp.): §§7.1–7.5
(Definition 7.12, Remark 7.13, Lemma 7.14, Proposition 7.15, Remark 7.16,
Theorem 7.25) and §§8.1–8.4 (Propositions 8.1 and 8.6, Theorems 8.2 and 8.3,
reduced Hamiltonians and reduction in stages). Both files were fetched whole
during this dispatch and read in bounded chunks; the locators in the items name
sections and printed pages that were checked against the extracted text.
