# Batch 61 notes — Seifert matrices and the Alexander module

Run `inverse-problems-knot-theory-all-109-2026-10-19`; role `beta`; batch `61`.
The active `.autopilot/` status is still at Step 1 scaffold, has no in-flight
worker, and retains owner-held blockers. No engine state or verdict was changed.
At inspection, `HEAD` was `dd17c1fe56`.

## Controlling plan and reconciliations

- `research/plan-knot-theory-track.md` L248 names KT-06; the detailed scope at
  L250–269 controls the claims, conventions, and proof route. Its four named A
  claims and two local helper interfaces are retained. The helpers are
  separated as the cut-open Mayer–Vietoris presentation and its conversion to
  Seifert-matrix coordinates. A cycle-representative lemma and a standalone
  S-equivalence definition were added because the pairing must descend to
  homology and the isotopy lemma uses that technical relation.
- `research/plan-spec.json` registers the same A/B pages, category, order, and
  four page requirements, but has `items: []`; it supplies no competing item
  inventory or item-level claims. The new inventory is recorded in the batch
  scaffold below rather than in the shared plan.
- The exact pairing definition needs its formula to descend from cycle
  representatives to `H_1(F; Z)`. The plan does not name this obligation, so
  `lem-seifert-pairing-well-defined` is added as an A-page prerequisite and is
  the `justified_by` result for the definition.
- The plan's KT-06 paragraph mentions “Conway 2016 v2 §§2–3”, while the
  referenced current `research/knot-theory-planning-2026-10-18/coverage-and-sources.md`
  assigns Conway to KT-09/10 and names Livingston 2002 for KT-06. A targeted
  search did not identify a KT-06 Conway source URL. This source mismatch does
  not leave a proof gap: the complete local arguments use Rolfsen and the
  Cattabriga–Francaviglia notes, with the Calegari cut-and-paste excerpt as a
  convention cross-check. Livingston 2002 was read in full; its concordance
  theorem is context, not evidence for the cut-open presentation.
- In the planned worked case, the specified
  `P = [[1,1],[0,1]]` changes the off-diagonal entries of
  `V = [[1,0],[-1,1]]`, but leaves both diagonal entries equal to 1. The example
  retains this requested computation and adds the determinant-one matrix
  `[[1,1],[2,3]]`, for which direct multiplication gives
  `P^T V P = [[-1,5],[-2,7]]`, changing every entry. The earlier checkpoint's
  value `[[3,5],[4,7]]` was an arithmetic error and is superseded.

## Scheduling and item inventory

The dispatch gives scheduling input
`a01ad0599f0865ce0072a50b1b0f05caedae7edd714cb6f3f6a0efce40ef1d05` and batch
level 2 with prerequisite batches 57, 58, and 59. The current
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`
has a different `input_sha256`
(`a4d8a5927e24864e9eca15619c997095b7225fc2b7a1ff88d0396390851f473f`), but its
current rows agree numerically: batch 57 level 0, batch 58 level 0, batch 59
level 1 requiring 58, batch 61 level 2 requiring 57/58/59. Record the hash
mismatch for owner reconciliation; do not edit the shared dependency-level file.

The scaffold inventory now contains eight A items and two B items. Levels use
the current actual supplier levels and the rule `1 + max(in-run supplier
level)`; the JSON manifest is the source of the explicit `deps` arrays.

| Item | Page | Dependency level | Direct in-run suppliers |
|---|---|---:|---|
| `def-seifert-matrix-s-equivalence` | A | 0 | none |
| `def-knot-seifert-pairing-and-matrix` | A | 5 | `def-oriented-seifert-surface`, `thm-linking-number-equals-signed-intersection` |
| `lem-seifert-pairing-well-defined` | A | 6 | `def-knot-seifert-pairing-and-matrix`, `def-oriented-seifert-surface`, `thm-linking-number-equals-signed-intersection`, `thm-every-oriented-knot-bounds-a-seifert-surface` |
| `lem-seifert-matrix-skew-part-is-surface-intersection` | A | 7 | `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, `def-oriented-seifert-surface`, `thm-linking-number-equals-signed-intersection`, `thm-every-oriented-knot-bounds-a-seifert-surface` |
| `lem-seifert-cut-open-cover-alexander-module-presentation` | A | 7 | `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, `def-oriented-seifert-surface`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `lem-knot-tubular-exterior-and-boundary`, `thm-knot-exterior-homology-and-longitude`, `thm-linking-number-equals-signed-intersection` |
| `lem-seifert-matrix-s-equivalence-under-isotopy` | A | 7 | `def-seifert-matrix-s-equivalence`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, `def-oriented-seifert-surface` |
| `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` | A | 8 | `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `thm-linking-number-equals-signed-intersection` |
| `thm-seifert-matrix-presents-knot-alexander-module` | A | 9 | `def-knot-seifert-pairing-and-matrix`, `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`, `def-oriented-seifert-surface`, `lem-knot-normal-circle-bundle-trivialization`, `lem-knot-tubular-exterior-and-boundary`, `thm-knot-exterior-homology-and-longitude` |
| `cex-knot-kt-06-boundary-case` | B | 6 | `def-knot-seifert-pairing-and-matrix`, `def-oriented-seifert-surface` |
| `ex-knot-kt-06-worked-cases` | B | 10 | `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `thm-seifert-matrix-presents-knot-alexander-module` |

## Supplier interfaces inspected

- `knot-exteriors-and-peripheral-systems` (batch 57): actual draft
  `thm-knot-exterior-homology-and-longitude` assumes full AC and a supplied
  oriented knot/tubular exterior; it proves `H_1(E_K; Z) = Z` generated by the
  positive meridian and identifies the unique degree-one zero-homology
  longitude. Its actual proof, the exterior/meridian definitions, the
  tubular-exterior retraction lemma, and the peripheral-torus lemma were
  inspected. These bodies are present but remain draft, with no acceptance
  claimed.
- `crossing-signs-writhe-and-linking-number` (batch 58): actual draft
  `thm-linking-number-equals-signed-intersection` assumes full AC, disjoint
  oriented smooth circles, a supplied compact oriented spanning surface, and a
  supplied regular diagram. Its statement fixes the positive-meridian
  coefficient, half-sum crossing, and signed-intersection conventions. Its
  complete proof and the crossing-sign definition were inspected; no
  acceptance is claimed.
- `seifert-surfaces-and-knot-genus` (batch 59): actual draft
  `def-oriented-seifert-surface` assumes AC_omega and defines a connected
  compact oriented smooth embedded surface with boundary the oriented knot,
  with `chi(F)=1-2g(F)`. The current normal-form supplier states free rank
  `2g+b-1` and the genus normal form. These statements and the relevant proof
  steps were inspected; no acceptance is claimed. The knot-genus minimum and
  the existence theorem are not used to prove the matrix statement.
- The required `hecke-markov-traces-and-polynomial-link-invariants` page is
  published and was checked in its actual library carrier. It remains a
  page-level route requirement only; none of its Hecke-trace items is a
  logical supplier for this batch.
- Published `def-one-variable-alexander-module-of-an-oriented-link` was read
  with its full body. For one component it defines the cyclic cover by the
  total-linking homomorphism, sends a positive meridian to `1`, and defines the
  module as ordinary integral `H_1` with the corresponding deck action. The
  definition assumes full AC. The new theorem uses this exact convention.

## Source retrieval and argument record

- Dale Rolfsen, *Knots and Links* (book),
  `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf`:
  Chapter 7.B printed pp. 163–165 (cut-and-stack construction and its
  Mayer–Vietoris route); Chapter 8.A printed pp. 200–202 (positive push-off
  Seifert form, basis congruence, and the intersection-form relation); Chapter
  8.B printed pp. 203–205 (presentation matrices as cokernels). These full text
  ranges were inspected. Rolfsen leaves the general skew/intersection formula
  as an exercise and gives only a worked trefoil cover presentation; those
  gaps are supplied by the local proofs.
- Alessia Cattabriga and Stefano Francaviglia, *Knot Theory and Applications:
  Lecture Notes*,
  `https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf`: the complete relevant
  §6.2.3 and Theorem 6.2.9 text, printed pp. 44–46, was inspected. It supplies
  the homological linking pairing, Seifert-form convention, rank, and the
  `tA-A^T` presentation interface; it explicitly sends the proof to Lickorish
  Theorem 6.5. The local proof supplies the omitted cut-and-paste argument.
- Charles Livingston, “Seifert forms and concordance”, *Geometry & Topology*
  6 (2002), 403–408, `https://arxiv.org/pdf/math/0101035`: the complete six-page
  paper was read from the arXiv PDF after the EMIS PDF endpoint returned a
  cache miss. It supports the context that Seifert forms are not complete
  concordance data; it does not prove the Alexander-module presentation.
- A search result for Danny Calegari, *Floer Theory Notes*, Ch. 6 §1.2.2,
  `https://math.uchicago.edu/~dannyc/courses/heegaard_2020/floer_theory_notes.pdf`,
  returned a relevant cut-and-paste excerpt with its `tV-V^T` convention, but
  a direct PDF open timed out. No batch 61 proof depends on this partial source;
  Rolfsen, Cattabriga–Francaviglia, and the complete Kyushu lecture-note
  section provide independent full-text coverage. No source is marked dropped
  or escalated on the basis of this optional cross-check.
- The source in the plan paragraph described as “Conway 2016 v2 §§2–3” was
  not used for KT-06. The current source assignment groups it with KT-09/10,
  and the local proof below does not depend on it. No mathematical result was
  dropped with that source reconciliation.
- No registered finite-smoke check covers Seifert matrices/Alexander modules.
  The trefoil and basis-change arithmetic is therefore verified explicitly in
  the B-item proof and contract; no synthetic finite-smoke name is claimed.

## Authoring checkpoints

- Inventory/dependencies/levels fixed in `batch-61.pages.json`; next: author
  the definition and its well-definedness lemma.
- After each finished item, add its exact claim, convention, citations,
  dependencies, check result, blocker status, and next action below.

### Checkpoint — `def-knot-seifert-pairing-and-matrix`

- Claim and convention: for an oriented knot and a connected compact oriented
  spanning surface $F$, choose a $\mathbb Z$-basis of $H_1(F)$ and define
  $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ using the positive normal fixed by
  $(n,u,v)>0$ in the ambient orientation. The chosen surface/basis are data.
- Dependencies: `def-oriented-seifert-surface`,
  `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`,
  `def-one-variable-alexander-module-of-an-oriented-link`,
  `thm-linking-number-equals-signed-intersection`, and the stated choice
  interfaces; see the exact `deps` and level 5 in `batch-61.pages.json`.
- Sources read: Rolfsen, *Knots and Links*, Ch. 8.A, printed pp. 200–202;
  Cattabriga–Francaviglia, *Knot Theory and Applications*, §6.2.3, printed
  pp. 44–45. Both use a Seifert form represented by linking numbers of push-offs.
- Decisions: the definition records the positive-push convention as requested.
  Its homological well-definedness is assigned to the next local lemma, which
  is its `justified_by` certificate; no ambient-invariant claim is made here.
- Validation: not run yet. Next action: prove representative-independence,
  push-off-independence, and bilinearity in
  `lem-seifert-pairing-well-defined`.

### Checkpoint — `lem-seifert-pairing-well-defined`

- Claim and convention: for finite disjoint-union smooth cycle representatives
  on $F$, the sum of pairwise positive-meridian linking numbers is independent
  of cycle representatives and sufficiently small positive normal sections;
  it is the bilinear extension of the fixed $V_{ij}=\operatorname{lk}(a_i^+,a_j)$.
  Symmetry is proved by choosing spanning surfaces for each component and
  comparing their intersection trace; representative independence then uses
  a pushed homology in the complement of the other cycle.
- Dependencies: the exact manifest `deps` include the definition, the actual
  surface and normal-form suppliers, the Alexander-duality module convention,
  linking/intersection and intersection-orientation suppliers, spanning
  surface existence, relative transversality, one-manifold boundary count,
  and the full-AC-to-countable-choice interfaces; level remains 6.
  The relevant current batch 57/58/59 supplier bodies and proof interfaces
  are present and were inspected. They remain draft where marked draft; no
  acceptance is claimed.
- Sources read: Rolfsen, *Knots and Links*, Ch. 8.A, printed pp. 200–202,
  including his Seifert form definition and the stated intersection-form
  exercises; Cattabriga–Francaviglia, *Knot Theory and Applications*, §6.2.3,
  printed pp. 44–46, including the complete linking-duality discussion and
  Theorem 6.2.9. The proof fills the source omissions locally.
- Decisions: no drawing is used as proof. The intersection drawing and
  cover-stack drawing only explain orientation/gluing conventions. A regular
  diagram is supplied only to satisfy the cited linking theorem's hypothesis;
  the symmetry argument is the textual intersection-trace proof.
  The matrix-change correction above is retained for the later B example.
- Validation: not run until final carrier edits; proof contract and source
  stamp still to be generated. No unavailable supplier currently blocks this
  item. Next action: prove the skew-part/intersection-form identity.

### Checkpoint — `lem-seifert-matrix-skew-part-is-surface-intersection`

- Claim and convention: with the positive normal ordered first in the ambient
  orientation, the product strip from $a_i^-$ to $a_i^+$ intersects $a_j$
  with the surface sign of $a_i\cdot_F a_j$. The strip/spanning-surface
  intersection trace gives the positive-versus-negative linking difference;
  linking symmetry and normal-level translation then give
  $V_{ij}-V_{ji}=a_i\cdot_F a_j$. The normal-form handle basis has
  intersection blocks $\begin{psmallmatrix}0&1\\-1&0\end{psmallmatrix}$;
  every integral basis changes this by unimodular congruence.
- Dependencies: exact list and level 7 are in the scaffold manifest; the
  proof uses the definition, `lem-seifert-pairing-well-defined`, the surface
  normal-form supplier, the spanning-surface existence theorem, relative
  transversality and oriented boundary-count suppliers, and the choice
  interfaces. Actual supplier bodies were inspected; no acceptance is claimed.
- Sources read: Rolfsen, *Knots and Links*, Ch. 8.A, printed pp. 201–202,
  where the Seifert/intersection relation is stated as an exercise; and
  Cattabriga–Francaviglia, §6.2.3, printed pp. 46–47, where the standard
  handle basis and negative-push intersection identity are given. The local
  product-strip orientation proof supplies the complete reasoning.
- Decisions: the local TikZ patch shows the strip and positive normal; the
  text fixes the sign and the proof does not depend on the drawing.
- Validation: not run until final carrier edits; contract and source stamp
  remain outstanding. No supplier is unavailable. Next action: prove the
  cut-open complement and Mayer–Vietoris presentation.

### Checkpoint — `lem-seifert-cut-open-cover-alexander-module-presentation`

- Claim and convention: trim a boundary collar of $F$ in an adapted exterior;
  its degree-one boundary is null in exterior homology and therefore is the
  preferred longitude. The cut complement has $H_1(Y)\cong H^1(F)\cong
  \operatorname{Hom}(H_1(F),\mathbb Z)$ by linking. Stack with
  $S_-(Y_n)=S_+(Y_{n+1})$, so a positive meridian moves $n\mapsto n+1$ and
  Mayer–Vietoris gives $\operatorname{coker}(i_- - t i_+)$.
- Dependencies: exact list and level 7 remain in the scaffold manifest. The
  proof uses the actual batch 57 exterior/longitude interfaces, batch 59
  surface normal form, the published Alexander-duality/UCT/MV/covering
  suppliers, and full AC. The positive-meridian sign is checked in local
  coordinates $(n,k,u)$ with the disk basis $(u,n)$.
- Sources read: Rolfsen, *Knots and Links*, Ch. 7.B, printed pp. 163–165,
  cut-and-stack and Mayer–Vietoris discussion; Ch. 8.B, printed pp. 203–205,
  cokernel presentation convention; Cattabriga–Francaviglia, §6.2.3,
  printed pp. 43–46, complete complement-linking identification and
  Theorem 6.2.9. Rolfsen's trefoil proof is a worked case rather than the
  general presentation proof; Cattabriga–Francaviglia defer Theorem 6.2.9's
  proof to Lickorish, so the carrier supplies both missing arguments locally.
- Decisions: the stack drawing explicitly labels the negative-to-positive
  seam and positive deck shift. The proof establishes the cover and exact
  sequence independently of the figure. AC is used for Alexander duality,
  UCT, and the supplied normal-neighborhood interface.
- Validation: not run until final carrier edits; proof contract/source stamp
  remain outstanding. No unavailable supplier currently blocks the proof.
  Next action: convert the two inclusion maps into Seifert-matrix coordinates.

### Checkpoint — `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`

- Claim and convention: with the cut lemma's seam
  $S_-(Y_n)=S_+(Y_{n+1})$ and $t:Y_n\mapsto Y_{n+1}$, linking-dual
  coordinates give $[i_-]=V$ and $[i_+]=V^T$. Therefore the Mayer–Vietoris
  map is exactly $V-tV^T$.
- Dependencies: exact manifest dependencies and level 8 recorded before
  carrier writing. The proof checks the index of each dual functional rather
  than importing a matrix convention from a source.
- Sources read: Rolfsen, Ch. 8.A–8.B, printed pp. 200–205, and
  Cattabriga–Francaviglia, §6.2.3, printed pp. 44–46. Their source conventions
  differ in push side; the local coordinate calculation fixes ours.
- Decisions: no further topological existence claim is made; the cut-open
  helper supplies the cover, duality, and exact sequence. The diagram is only
  a coordinate square; the proof computes its four maps directly.
- Validation: not run until final edits; contract and source stamp remain
  outstanding. No unavailable supplier currently blocks the item. Next
  action: prove congruence/S-equivalence under an ambient isotopy of pairs.

### Checkpoint — `lem-seifert-matrix-s-equivalence-under-isotopy`

- Claim and convention: an orientation-preserving ambient isotopy of oriented
  knot/surface pairs carries positive normal levels and positive meridians to
  positive ones. Transported bases have the same matrix; an arbitrary target
  basis changes it by $P^TVP$ for $P\in\mathrm{GL}_{2g}(\mathbb Z)$, one of the
  S-equivalence generators. The item states the two elementary enlargement
  conventions but does not claim the different-surface comparison theorem.
- Dependencies: exact manifest dependencies and level 7. Actual carrier
  bodies for the oriented-knot, Seifert-pairing, linking, and homology-functor
  interfaces were inspected; no acceptance is claimed.
- Sources read: Rolfsen, Ch. 8.A, printed pp. 201–202, on basis congruence and
  matrix dependence; Cattabriga–Francaviglia, §6.2.3, printed pp. 44–46, on
  Seifert forms and their basis matrices. The local isotopy argument is
  included in full.
- Decisions: the exact S-equivalence relation is now separately defined in
  `def-seifert-matrix-s-equivalence`, including both rank-two enlargement
  forms and reverses. The isotopy proof uses the congruence generator only.
- Validation: not run until final edits; contract and source stamp remain
  outstanding. No unavailable supplier currently blocks the item. Next
  action: prove the Alexander-module theorem using the matrix presentation.

### Checkpoint — `def-seifert-matrix-s-equivalence`

- Claim and convention: S-equivalence for even-order integral matrices is the
  equivalence relation generated by unimodular congruences, the two explicit
  rank-two elementary enlargement forms, and their reverses. The standalone
  definition is a level-zero A-page supplier for the isotopy lemma.
- Dependencies: none; dependency level 0. It was inserted into the manifest
  and A-page inventory before the isotopy lemma was updated to cite it.
- Sources read: Rolfsen, Ch. 8.B, printed pp. 204–205, on matrix equivalences;
  Cattabriga–Francaviglia, §6.2.3, printed pp. 44–46, on Seifert matrices;
  *Knot Theory Lecture Notes*, Chapter 7, Definition 7.7, printed pp. 79–80,
  which gives the row/column enlargement forms and their reverses. The local
  blocks are written in the old-basis-first ordering used by our proofs.
- Validation: source-fetch stamp and definition precheck remain outstanding.
  Next action: reconcile proof contracts and batch source evidence.

### Checkpoint — `thm-seifert-matrix-presents-knot-alexander-module`

- Claim and convention: for every oriented knot and connected oriented
  spanning surface, choose an adapted tube by expressing the surface collar
  as a graph in the knot normal bundle and applying the inverse function
  theorem uniformly along compact $K$. The resulting cut stack has matrix
  $V-tV^T$; the exterior deformation retract and covering classification
  identify its first homology with the published one-variable Alexander
  module, preserving the positive-meridian deck generator.
- Dependencies: exact manifest list and level 9, including the extra normal
  framing/tubular-neighborhood interfaces needed for the adapted tube. The
  actual batch 57 exterior and meridian/longitude bodies, the module
  definition, and the cover-classification interfaces were inspected; no
  acceptance is claimed.
- Sources read: Rolfsen, Ch. 7.B–8.C, printed pp. 163–165 and 200–211,
  cut-and-stack, matrix cokernel, and Alexander-module discussion;
  Cattabriga–Francaviglia, §6.2.3, printed pp. 44–46. Their presentation
  conventions differ by push side; this item fixes the one proved from the
  positive seam in the local cut-open lemmas.
- Decisions: the tube is an intermediate construction and does not alter the
  module definition. The proof explicitly matches kernels under the
  exterior-to-complement homotopy equivalence and carries the $+1$ deck
  transformation through the cover isomorphism.
- Validation: not run until final edits; proof contract and source stamp
  remain outstanding. No unavailable supplier currently blocks the item.
  Next action: finish the boundary counterexample and worked calculations.

### Checkpoint — `cex-knot-kt-06-boundary-case`

- Refuted claim and witness: “Every Seifert matrix of an oriented knot has
  positive order.” The oriented round unknot bounds a disk with $H_1=0$, so
  the basis is empty and its matrix is $0\times0$.
- Dependencies: exact manifest list and level 6; the carrier explicitly
  carries full AC through both the standard and foliation-pair countable-choice
  interfaces required by the surface normal form.
- Sources read: Rolfsen, *Knots and Links*, Ch. 8.A, printed pp. 200–202;
  Cattabriga–Francaviglia, §§4.3 and 6.2.3, printed pp. 21–23 and 44–46.
- Validation: not run until final edits; proof contract and source stamp
  remain outstanding. The example uses no positive-genus or nonempty-basis
  assumption. Next action: finish the matrix and basis-change calculations.

### Checkpoint — `ex-knot-kt-06-worked-cases`

- Claim and convention: Cattabriga–Francaviglia's $K_1$ example is the
  trefoil and gives $A=[[1,0],[-1,1]]$ for negative-first pairing
  $\alpha(x,y)=\operatorname{lk}(x^-,y)$. Symmetry and simultaneous collar
  translation give positive-first matrix $A^T$ in their basis; swapping basis
  vectors returns $V=[[1,0],[-1,1]]$. Computations give
  $V-V^T=[[0,1],[-1,0]]$ and $\det(V-tV^T)=1-t+t^2$.
- Basis changes: $P_0=[[1,1],[0,1]]$ yields $[[1,1],[0,1]]$ and changes only
  off-diagonal entries. $P_1=[[1,1],[2,3]]$ has determinant 1 and gives
  $P_1^TVP_1=[[-1,5],[-2,7]]$, changing every entry. Both preserve the
  presented module because $V'-tV'^T=P^T(V-tV^T)P$.
- Dependencies: exact manifest list and level 10; actual A-page skew,
  S-equivalence, and Alexander-module carriers were authored and inspected.
- Sources read: Cattabriga–Francaviglia, Example 6.2.11 and Theorem 6.2.9,
  printed pp. 44–46; Rolfsen, Ch. 8.A–8.B, printed pp. 200–205. The complete
  source convention conversion and every matrix product are in the proof.
- Validation: not run until final edits; contract and source stamp remain
  outstanding. Next action: create A/B page frontmatter and batch contracts,
  coverage, and cross-batch evidence.

## Final Step 1 handoff — 2026-10-19

The `Validation: not run` lines above record the status at each authoring
checkpoint; this final section supersedes them. The assigned carriers and
evidence are complete for Step 1 authoring. No independent review, acceptance,
or publication is claimed.

- The final scaffold contains eight A items and two B examples. The A page has
  eight items; the B page lists its two examples. Both pages contain YAML
  frontmatter only, with empty Markdown bodies. A/B page inventories, carrier
  `deps`, `justified_by`, and `dependency_level` values synchronize with the
  manifest. The pairing definition now names
  `lem-seifert-pairing-well-defined` in `justified_by`; that lemma depends on
  the definition through `deps`, as required by `SCHEMA.md`.
- The recomputed in-run dependency levels match the declared levels for every
  assigned item: `def-seifert-matrix-s-equivalence` 0;
  `def-knot-seifert-pairing-and-matrix` 5;
  `lem-seifert-pairing-well-defined` 6;
  `lem-seifert-matrix-skew-part-is-surface-intersection` 7;
  `lem-seifert-cut-open-cover-alexander-module-presentation` 7;
  `lem-seifert-matrix-s-equivalence-under-isotopy` 7;
  `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` 8;
  `thm-seifert-matrix-presents-knot-alexander-module` 9;
  `cex-knot-kt-06-boundary-case` 6; and
  `ex-knot-kt-06-worked-cases` 10.
- `node tools/depcheck.mjs --items-file /tmp/batch61-item-ids.json` passed its
  selected item/page and prerequisite-cycle checks for all ten items. The
  independent page/manifest/carrier synchronization and statement-link scan
  reported zero defects. The statement-link scan found no hyperlink inside a
  complete assigned statement.
- `node tools/proof-layout.mjs` on all ten changed carriers passed: 10 items,
  25 proof steps, zero defects. Strict proof-contract validation passed for
  10/10 items with zero errors and zero warnings. `source-fetch-check` reports
  6/6 sources fetch-verified and 6/6 resolved; no source was dropped.
- The batch cross-batch evidence contains 25/25 expected external page and
  item edges, each marked `verified` on inspected interfaces. This records
  body/interface inspection only. The B page's requirement on its same-batch A
  page is internal and is not a cross-batch edge.
- All ten native Step 1 records are `ready`, were recorded without `--owner`,
  and include the examined `deps` and `justified_by` IDs. The run-wide
  `step1-decisions check` finds no open work for these ten items or their two
  pages; the run remains open outside this batch (258 of 552 items ready and
  408 outstanding work entries at this check).
- At the final run-wide dependency-level check, 154 errors remained elsewhere
  in the run: 114 empty scaffold inventories and 40 declared/computed level
  mismatches. None names a batch-61 item. These cross-batch/run-wide issues
  were not repaired from this assignment.
- The dispatch/current dependency-input hash mismatch and the KT-06
  plan-versus-source assignment discrepancy remain recorded above for owner
  reconciliation. Calegari's optional full-text cross-check timed out after a
  search excerpt; it is not used as proof evidence. The complete local proofs
  rely on the fetch-verified Rolfsen, Cattabriga–Francaviglia, and Kyushu
  treatments instead.
- No mathematical or supplier-availability blocker remains for the ten
  assigned items. Draft suppliers remain drafts; their inspected bodies do not
  constitute acceptance.
