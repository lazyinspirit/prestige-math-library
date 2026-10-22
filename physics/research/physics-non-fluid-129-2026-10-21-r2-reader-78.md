# Step 3a reader report — batch 78

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `78`

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-finite-group-bf.md` (A)
- `library/quantum-field-theory-mathematics/qftx-finite-group-bf-examples.md` (B)

Assigned items, reviewed in dependency order:

- `def-qftx-finite-groupoid-integration`
- `def-qftx-finite-homotopy-pullback`
- `def-qftx-finite-flat-connection-groupoid`
- `lem-qftx-finite-groupoid-push-pull-fubini`
- `thm-qftx-finite-bf-topological-invariance`
- `def-qftx-finite-bordism-state-span`
- `lem-qftx-finite-groupoid-gluing-descent`
- `thm-qftx-finite-groupoid-gluing`
- `ex-qftx-finite-bf-three-torus`

Read the batch-78 page manifest and proof contracts. Relevant prerequisite
context opened included:

- In-run draft supplier from batch `42`: `thm-qftx-cw-fundamental-group-presentation`
  (raw source SHA-256 observed: `ad85c4e40b0c1c75055fa06d2d3e34105e7491beca5dd0e83060f5dc61a7a4b6`).
- Mathematical suppliers: `def-based-loops-and-fundamental-group`,
  `thm-fundamental-group-laws`, `thm-induced-fundamental-group-map-functoriality`,
  `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`,
  `thm-fundamental-group-of-finite-wedge-of-circles`,
  `thm-fundamental-group-of-the-circle`, `thm-seifert-van-kampen`,
  `def-pushout-of-group-homomorphisms`, and
  `thm-group-pushout-as-an-amalgamated-quotient`.
- Page prerequisites: `qftx-two-dimensional-sewing`,
  `gr-fx14-holonomy-and-discrete-geometric-interface`, `the-fundamental-group`,
  `hurewicz-whitehead-freudenthal-and-cw-approximation`,
  `the-seifert-van-kampen-theorem`, and `the-fundamental-group-of-the-circle`.
- Relevant import records in `research/math-imports.json` were checked for
  `def-based-loops-and-fundamental-group` and
  `thm-induced-fundamental-group-map-functoriality`.

## Review and evidence

The groupoid-cardinality and homotopy-fiber definitions give finite sums under
the stated finiteness hypotheses. The homotopy-pullback arrow equation is
preserved by identities, composition, and inverses. The push-pull lemma's
iterated-fiber equivalence, orbit-stabilizer weighting, span composition, and
weighted-adjoint calculation check with the stated conventions.

For finite flat assignments, reversing an edge inverts its label; vertex gauge
transformations preserve the face flatness equations and form the stated action.
The orbit-stabilizer calculation gives the groupoid cardinality, including
nontrivial stabilizers. The topological-invariance proof's tree normalization,
inverse path-holonomy convention, representation conjugation, restriction
naturality, and connected/disconnected normalization are consistent. The
in-run CW-presentation supplier supplies the needed generators, relators, and
higher-cell invariance; its proof and its listed published prerequisites were
opened and checked for these uses.

The bordism state-space definition supplies finite groupoids, restriction
functors, and weighted push-pull maps under its stated finite triangulation and
boundary data. The gluing-descent argument correctly retains the boundary
isomorphism in the homotopy pullback; its one-object `BG` check gives the stated
stabilizer distinction. The gluing theorem's composition, cylinder, disjoint
union, orientation-reversal, and closed connected amplitude calculations follow
from the cited suppliers and its explicit conventions. The S3 and T3 example
computations give `1/|G|` and `|G|^2` for finite abelian `G`.

Source checks: Hatcher, *Algebraic Topology*, Proposition 1.26 (PDF pp. 49–51)
and Proposition 1A.2 (PDF pp. 83–85), directly state the cell-attachment and
maximal-tree results used by the CW presentation. Freed–Quinn, *Chern-Simons
Theory with Finite Gauge Group*, §2 (PDF pp. 7–11), supplies the finite bundle
groupoid, automorphism-weighted measure, and cutting/gluing measure statements.
Dijkgraaf–Witten, *Topological Gauge Theories and Group Cohomology*, §6 (PDF
pp. 22–23 and 30–32), gives the representation description and 3-torus sum;
the example uses its trivial-cocycle case. Baez, *An Introduction to Spin Foam
Models of BF Theory and Quantum Gravity*, §7, Remark 2 (PDF pp. 29–30), states
the finite-group convergence and triangulation-independence qualification.

The only TikZCD diagrams in the assigned items are in
`lem-qftx-finite-groupoid-gluing-descent` and
`thm-qftx-finite-groupoid-gluing`. Both show the text's equivalence to the
homotopy pullback, restriction to the indicated piece, and boundary restriction;
the arrows and labels are consistent. The proofs do not rely on the diagrams.

## Edits and unresolved defects

No item or page prose was edited. No confirmed defect remains in the assigned
carriers or in the reviewed dependency uses. No defect outside the authorized
scope was found, and there is no blocker.

## Page verdicts

- `qftx-finite-group-bf`: accepted. The draft A-page inventory and mathematics
  classification agree with the assigned item inventory; the fresh-build page
  is frontmatter-only as required.
- `qftx-finite-group-bf-examples`: accepted. The draft B-page correctly places
  `ex-qftx-finite-bf-three-torus` as its example and requires its A-page
  companion.

## Coverage note

All assigned items and pages, the batch proof contracts, the listed page
prerequisites, and the mathematical suppliers needed for the reviewed claims
were opened. The Moore–Saxena arXiv PDF is 39 MB and the browser could not fetch
the complete file; the indexed excerpts for §§12–13 and §§23.2–23.3 were read.
The checked mathematical claims were independently supported by the directly
opened Hatcher, Freed–Quinn, and Dijkgraaf–Witten sections and by the local
proofs. No unreviewed source argument is needed to close an assigned proof gap.
