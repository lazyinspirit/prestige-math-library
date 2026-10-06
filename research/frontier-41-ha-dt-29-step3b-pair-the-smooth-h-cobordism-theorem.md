# Step 3b pair report — the-smooth-h-cobordism-theorem

- Run: `frontier-41-ha-dt-29`, role `alpha-high`, label
  `step3b-pair-the-smooth-h-cobordism-theorem-f7c04e609a056eb5`.
- A page: `the-smooth-h-cobordism-theorem` (order 561, differential topology).
- B page: `the-smooth-h-cobordism-theorem-examples` (order 562).
- Batch: 15. Own only this pair; sibling pairs sharing batch 15 (none — batch 15
  is this pair alone) are preserved.

## Entry state (2026-10-06)

Read at entry: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch-15
manifest `research/frontier-41-ha-dt-29-batch-15.pages.json` (20 A + 5 B items,
each with explicit `deps`, `dependency_level`, statement, strategy and sources),
`research/frontier-41-ha-dt-29-batch-15.coverage.json`, the Step-1 notes
`research/frontier-41-ha-dt-29-batch-15.notes.md`, the Step-3a scope report and
its recorded `sufficient` review
`research/frontier-41-ha-dt-29-step3a-review-the-smooth-h-cobordism-theorem.json`,
the 25 Step-1 readiness records `research/frontier-41-ha-dt-29-step1-<id>.json`
(all `decision: ready`), the plan design DT-23
(`research/plan-differential-topology-track.md` lines 1210–1248) and
`research/plan-spec.json`.

State of the pair on entry: all 25 item files `items/<id>.md` are **absent**,
the two page files `library/differential-topology/<page>.md` are absent, and
`research/frontier-41-ha-dt-29-batch-15.proof-contracts.json` is absent. The
scope review is current (`sufficient`), so item authoring may proceed.

## Owned IDs (authoring order = dependency_level, then page order, then ID)

| # | id | kind | level | page |
|---|---|---|---|---|
| 1 | `def-h-cobordism` | definition | 1 | A |
| 2 | `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` | lemma | 2 | A |
| 3 | `cex-a-homology-cobordism-need-not-be-an-h-cobordism` | counterexample | 2 | B |
| 4 | `ex-a-product-cobordism-is-an-h-cobordism` | example | 3 | B |
| 5 | `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` | theorem | 4 | A |
| 6 | `lem-handle-elimination-by-trading-a-pair` | lemma | 6 | A |
| 7 | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | proposition | 6 | A |
| 8 | `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` | example | 6 | B |
| 9 | `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` | lemma | 7 | A |
| 10 | `prop-relative-handle-chain-complex-of-a-cobordism` | proposition | 7 | A |
| 11 | `lem-duality-eliminates-top-and-cotop-handles` | lemma | 8 | A |
| 12 | `lem-homology-lemma-realizes-handle-bases-by-isotopy` | lemma | 8 | A |
| 13 | `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation` | lemma | 8 | A |
| 14 | `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices` | lemma | 9 | A |
| 15 | `def-middle-handle-intersection-matrix-of-an-h-cobordism` | definition | 10 | A |
| 16 | `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` | lemma | 11 | A |
| 17 | `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity` | lemma | 12 | A |
| 18 | `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` | lemma | 13 | A |
| 19 | `ex-the-handle-matrix-of-a-simple-acyclic-presentation` | example | 13 | B |
| 20 | `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` | lemma | 14 | A |
| 21 | `thm-smooth-simply-connected-h-cobordism-theorem` | theorem | 15 | A |
| 22 | `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` | corollary | 16 | A |
| 23 | `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold` | corollary | 16 | A |
| 24 | `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` | remark | 16 | A |
| 25 | `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` | counterexample | 17 | B |

## Open obligations at entry

1. **In-run suppliers may be unauthored.** Batches 1, 3, 4, 13 and 14 are
   sibling frontier-41 pairs still under construction; their `items/<id>.md`
   files were absent at entry. Every consumer below whose proof uses such an
   unfinished supplier is authored anyway and its item decision is escalated
   with the exact supplier ID and consuming step, unless the supplier has been
   authored on disk by the time of the decision. The full list of supplier IDs
   and consuming steps is maintained in the per-item checkpoints.
2. **Four locally added prerequisites** (`prop-relative-handle-chain-complex-of-a-cobordism`,
   `lem-handle-elimination-by-trading-a-pair`,
   `lem-homology-lemma-realizes-handle-bases-by-isotopy`,
   `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation`) are
   authored from scratch here; their source locators are the ones recorded in
   the batch-15 notes (Milnor §§3, 7, 8; Lück Lemmas 1.16, 1.22, 1.23).
3. **Step-3a author note (dimension-four remark).** The reviewed note asks that
   `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` either
   carry an exact Donaldson/Kasprowski–Powell–Ray locator for the simply
   connected strengthening or be aligned with Lück's "in general" wording.
   Resolved during authoring of item 24 and recorded there.
4. **Proof contracts and pages.** `research/frontier-41-ha-dt-29-batch-15.proof-contracts.json`
   and the two `library/differential-topology/` page files must be authored
   before handoff; the batch-15 coverage file, manifest and cross-batch input
   stay as recorded by Step 1 unless a dependency change is unavoidable.
5. **Cross-batch ledger input** `research/frontier-41-ha-dt-29-batch-15.cross-batch-dependencies.json`
   already carries 71 rows from Step 1; rows are updated only where an actual
   proof use or dependency changed, and `frontier-dependency-ledger.mjs refresh`
   is run after any edit.

## Per-item checkpoints

(Filled as each item is audited, authored and checked. Each row records: exact
claim read, source locators, dependencies examined, decision, checks run, open
gaps, next action.)

### 1. `def-h-cobordism` — authored

- Claim: symmetric h-cobordism definition, faces are closed smooth $n$-manifolds,
  both inclusions homotopy equivalences, trivial/product notion, no simple
  connectivity, orientability or dimension restriction beyond $\dim W=n+1\ge2$.
- Suppliers read: `def-smooth-cobordism-triad-for-morse-theory` (batch-1 scaffold:
  title/section text used for the wikilink only), `def-homotopy-equivalence`,
  `def-smooth-embedding`, `def-compact-space` (published, statements read).
- Locators: Milnor Introduction (printed p. 1), Lück Ch. 1 p. 2.
- Decision: `accept` (definition; no supplier file needed for the claim beyond
  the published ones and the batch-1 scaffold reference).
- Checks: precheck `n/a` clean (0 checked), rendercheck OK, proof-layout 0 steps,
  0 defects.

### 2. `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` — authored

- Claim: for any coefficient group $G$, $H_k(W,M_i;G)=0$ for both ends.
- Step route: 1.1 inclusion is a homotopy equivalence ⇒ homology isomorphism;
  2.1 LES of the pair $(W,M_0)$ ⇒ relative groups vanish; 3.1 symmetry for $M_1$
  and $G=\mathbb Z$.
- Deps examined: `def-h-cobordism` (mine),
  `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology`,
  `thm-long-exact-sequence-of-a-pair-in-singular-homology`,
  `def-relative-singular-homology`, `def-homotopy-equivalence` (published,
  statements read).
- Checks: precheck PASS (direct), proof-layout 3 steps 0 defects, rendercheck OK.
- Open gap: none for the lemma; the dependency `def-h-cobordism` is authored.

### 3. `cex-a-homology-cobordism-need-not-be-an-h-cobordism` — authored (scaffold repaired)

- **Repair (scope-visible).** The scaffold statement said "the inclusions of
  the two boundary components are homology isomorphisms but not homotopy
  equivalences". The second half is false for the $S^3$ end: steps 4.1 and 4.2
  show the inclusion $S^3\hookrightarrow W$ induces a homology isomorphism and
  $W$ is simply connected, so by Whitehead's theorem that inclusion *is* a
  homotopy equivalence (and $W\simeq S^3$). The counterexample's claim does not
  need it: the $M$-end inclusion is a homology isomorphism by $H_*(W,M)=0$ and
  fails to be a homotopy equivalence because $\pi_1(M)\neq1=\pi_1(W)$. The
  authored statement now says exactly this.
- **Repair (hypothesis).** The scaffold applied plain Poincaré–Lefschetz
  duality for a split boundary; the library's split-boundary form is
  `thm-fully-relative-poincare-lefschetz-duality`, now an explicit dependency,
  and the orientation of $W$ is printed in the Given (the source's handlebody
  carries the standard orientation; $W$ inherits it). The auxiliary identification
  $H_*(W,S^3)=0$ is proved by the Mayer–Vietoris cover $X=U\cup V$ built from
  the collar of $\partial D$ inside $D$, not by excision, because the naive
  excision hypothesis fails for the literal pair $(X,D^4)$.
- Sources read: Du §4 (fetched, 24 pp.; Mazur $W_k$ is 0-handle + dotted
  1-handle + $k$-framed 2-handle, $W_k\times[0,1]\cong D^5$, $M_k$ a homology
  $3$-sphere, $\pi_1(M_{-3})\cong\langle a,b\mid b^5=a^7,\ b^4=a^2ba^2\rangle$
  infinite nonabelian via the $(2,5,7)$ triangle-group quotient); Milnor §1.
- Deps examined: all 26 listed deps are published, except `def-h-cobordism`
  (mine); statements of the load-bearing ones read
  (`thm-mayer-vietoris-sequence-in-singular-homology`,
  `thm-fully-relative-poincare-lefschetz-duality`,
  `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`,
  `thm-collar-neighborhood-theorem`, `cor-contractible-nonempty-spaces-…`,
  `lem-contractibility-implies-trivial-fundamental-group`, `ex-the-closed-ball-…`,
  `thm-higher-dimensional-spheres-are-simply-connected`,
  `prop-retracts-inject-fundamental-groups`,
  `prop-higher-homotopy-basepoint-transport-and-moving-homotopies`).
- Checks: precheck PASS (direct), proof-layout 10 steps 0 defects, rendercheck OK.
- Open gap: the item's deps list grew well beyond the scaffold's; the manifest
  entry must be updated consistently (planned at handoff). No in-run supplier
  file is used, so its decision is not supplier-blocked.

### 4. `ex-a-product-cobordism-is-an-h-cobordism` — authored

- Claim: $M_0\times[0,1]$ is an h-cobordism; empty presentation; vanishing
  relative homology; the theorem returns the product when $n\ge5$ and $M_0$ is
  simply connected.
- Supplier: `lem-product-cobordisms-have-critical-point-free-presentations`
  (batch 1, **file absent at authoring time**): used in step 1.2 for the empty
  presentation and the vanishing relative homology. Flagged: consumer step 1.2,
  supplier `lem-product-cobordisms-have-critical-point-free-presentations`.
- Other deps: `def-h-cobordism` (mine), `def-retraction-and-deformation-retract`
  (published, read).
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK.

### 5. `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` — authored

- Claim: an empty presentation with $\dim W=n+1$ forces $W\cong M_0\times[0,1]$
  rel $M_0$; equivalently an adapted Morse function without critical points; the
  converse (product ⇒ empty presentation).
- Route: 1.1 the empty handle list gives the collar by the definition of a
  relative presentation and reparametrisation; 1.2 the converse and the Morse
  formulation; 2.1 the regular-interval route gives the same product; 3.1
  conclusion (Milnor Theorem 3.4).
- Suppliers: `def-handle-decomposition-relative-to-the-incoming-boundary`,
  `thm-morse-functions-and-handle-decompositions-correspond`,
  `def-morse-function-adapted-to-a-cobordism`,
  `lem-product-cobordisms-have-critical-point-free-presentations` (batch 1,
  **absent**), and the published regular-interval items
  (`thm-regular-interval-diffeomorphism`,
  `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`,
  `prop-deformation-lemma-for-a-critical-point-free-slab`,
  `cor-regular-sublevels-are-diffeomorphic`), all read.
- Flagged supplier uses: step 1.2 (`lem-product-cobordisms-…`), step 2.1 (the
  regular-interval items are published), step 1.2/2.1
  (`thm-morse-functions-and-handle-decompositions-correspond`, batch 1, absent).
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK.

### 6. `lem-handle-elimination-by-trading-a-pair` — authored (premise tightened at Step 1)

- Claim: under $1\le q\le n-2$, a framed sphere $\alpha$ meeting $e$'s belt
  sphere once and trivial in $\partial_1W_{q+1}$ lets $e$ be traded for a
  $(q+2)$-handle.
- Route: 1.1 attach the cancelling pair in the trivial position and realize the
  hypothesis-(2) isotopy by slides over the existing $(q+1)$-handles and
  isotopies inside $\partial_1W_q$; 2.1 cancel $(e,\psi)$; 3.1 conclusion and
  support.
- Suppliers: `thm-creation-of-a-cancelling-handle-pair`,
  `thm-handle-cancellation`, `def-geometric-cancelling-handle-pair`,
  `lem-attaching-handles-along-isotopic-attaching-embeddings-…`,
  `lem-handle-slides-preserve-the-relative-diffeomorphism-type`,
  `def-handle-slide-of-one-k-handle-over-another`,
  `def-handle-decomposition-relative-to-the-incoming-boundary`
  (batch 3, **all absent**), and the published
  `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  (read: $\mathrm{AC}_\omega$, compact boundaryless source, isotopy constant near
  the ends).
- Flagged supplier uses: step 1.1 (creation, isotopy, slides), step 2.1
  (cancellation). Source cross-check: Lück Lemma 1.16 read at printed pp. 7--9
  (statement and the isotopy-extension mechanism, which cites Wall Ch. 8
  Theorem 1.5); the item's step 1.1 records the slide realization of the
  $\partial_1W_{q+1}$-isotopy. This is the item's most delicate step and is
  flagged for Step-5 audit together with its batch-3 suppliers.
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 7. `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` — authored

- Claim: symmetric adapted ordered handle presentation for every compact
  h-cobordism with $\dim W=n+1$, no simple connectivity, $\mathrm{AC}_\omega$
  consumed through the adapted-field/genericity suppliers.
- Route: 1.1 adapted excellent $(f,X)$; 2.1 rearrangement + self-indexing;
  3.1 correspondence to handles + equal-index attachment; 4.1 conclusion.
- Suppliers: `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms`,
  `thm-morse-rearrangement-by-index`, `thm-self-indexing-morse-function-existence`,
  `thm-morse-functions-and-handle-decompositions-correspond`,
  `lem-handles-of-equal-index-can-be-attached-on-one-level`,
  `def-morse-function-adapted-to-a-cobordism`,
  `def-handle-decomposition-relative-to-the-incoming-boundary` (batch 1, **all
  absent**), `def-countable-choice` (published, read).
- Flagged supplier uses: steps 1.1, 2.1, 3.1.
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK.

### 8. `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` — authored

- Claim: a standard cancelling pair attached to a collar yields the product; the
  two-index matrix is $(\varepsilon)$, $\varepsilon=\pm1$, normalisable to $(1)$.
- Route: 1.1 the pair is geometrically cancelling; 1.2 the matrix entry is
  $\pm1$ and reorientation flips it; 1.3 the configuration is the inverse of a
  trivial insertion; 2.1 cancel to the empty presentation; 3.1 transfer the
  product h-cobordism structure; 4.1 conclusion.
- Suppliers: `def-geometric-cancelling-handle-pair`, `thm-handle-cancellation`,
  `thm-creation-of-a-cancelling-handle-pair`,
  `def-handle-decomposition-relative-to-the-incoming-boundary`,
  `def-attaching-belt-intersection-matrix-of-adjacent-index-handles`,
  `lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix` (batch 3,
  **absent**), `lem-compact-transverse-complementary-intersections-are-finite`
  (published, read), `def-h-cobordism` (mine).
- Flagged supplier uses: steps 1.1, 1.2, 1.3, 2.1.
- Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK.

### 9. `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` — authored

- Claim: elimination of indices $0,1$ with $\dim W=n+1$, $n\ge5$, simple
  connectivity; each $1$-handle traded for a $3$-handle; $n\ge5$ used in the
  metastable embedding of the null-homotopy disk.
- Route: 1.1 self-index and no superfluous $0$-handles; 2.1 core arc plus
  embedded complementary arc and the $\pi_1$-surjectivity argument; 3.1 smooth
  null-homotopy, metastable embedding, trivial normal bundle; 4.1 elimination
  with $q=1$, repeated finitely often.
- Suppliers: `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions`
  (mine), `lem-handle-elimination-by-trading-a-pair` (mine),
  `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`
  (batch 1, absent at first, now landed),
  `lem-metastable-embedding-for-maps-from-a-compact-manifold` (batch 14,
  absent at first, now landed), `lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points`
  (batch 14, landed), `lem-a-handle-decomposition-gives-a-relative-cw-complex`
  (batch 1, landed), and published AT suppliers
  (`lem-high-relative-cells-do-not-change-lower-homotopy`,
  `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map`,
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`,
  `def-k-handle-core-cocore-attaching-region-and-belt-sphere`).
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK,
  content-policy clean.

### 10. `prop-relative-handle-chain-complex-of-a-cobordism` — authored

- Claim: freeness on core classes; $\partial^2=0$; $H_*(C)\cong H_*(W,M_0)$;
  matrix of $\partial_{k+1}$ = attaching-belt matrix; two-index specialisation.
- Route: 1.1 relative CW model; 2.1 relative cell freeness and cellular
  computation; 3.1 triple exactness; 4.1 coefficient lemma and the adjacent-index
  matrix.
- **Repair.** The scaffold's $0,1$–$3$ steps omitted the supplier for
  $\partial^2=0$; the authored dependency list now includes
  `lem-long-exact-sequence-of-a-triple-in-singular-homology` (batch 4), and a
  cross-batch ledger row was added for it. All other in-run deps are batch 1/3/4
  items; the published AT suppliers are the relative-cellular-homology,
  consecutive-skeleta and boundary-definition items, all read.
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK,
  content-policy clean.

### 11. `lem-duality-eliminates-top-and-cotop-handles` — authored

- Claim: no handles of index $n,n+1$; combined presentation with all indices in
  $[2,n-1]$, by running the low-index elimination on $(W;M_1,M_0)$ and dualising.
- Suppliers: `lem-zero-and-one-handles-…` (mine), `def-h-cobordism` (mine),
  `def-smooth-cobordism-triad-for-morse-theory` (batch 1, landed),
  `thm-handle-duality-from-negating-a-morse-function` (batch 1, absent at first,
  now landed), `prop-dual-elimination-of-top-index-handles` (batch 1, landed),
  `def-dual-handle-decomposition` (batch 1, landed).
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 12. `lem-homology-lemma-realizes-handle-bases-by-isotopy` — authored

- Claim: a class $\pm[\varphi]$ is realised by an isotoped sphere meeting the
  belt sphere of $\varphi$ once and no others.
- Route: 1.1 transversality; 2.1 opposite-sign pairs exist within a single belt
  sphere; 3.1 arcs avoiding other points; 4.1 Whitney trick (stable and
  borderline cases); 5.1 iteration and conclusion.
- Suppliers: `prop-relative-handle-chain-complex-of-a-cobordism` (mine),
  `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers`
  (batch 4, landed), `def-attaching-belt-intersection-matrix-…` (batch 3,
  landed), `thm-high-dimensional-whitney-trick` and
  `thm-whitney-trick-in-the-two-dimensional-borderline-case` (batch 14, absent
  at first, landed), `lem-arcs-in-a-connected-submanifold-…` (batch 14, landed).
  Source cross-check: Lück Homology Lemma 1.22 read at printed pp. 14--15.
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK.

### 13. `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation` — authored

- Claim: $[g]=[f]+\sum_jx_j\partial_{q+1}[\varphi_j]$ by an isotopy visible only
  in $\partial_1W_{q+1}$.
- Suppliers: `prop-relative-handle-chain-complex-of-a-cobordism` (mine),
  `lem-handle-boundary-coefficients-…` (batch 4, landed),
  `lem-embedded-bands-joining-two-framed-spheres-exist` (batch 3, landed),
  `def-handle-slide-of-one-k-handle-over-another` (batch 3, landed),
  `lem-attaching-handles-along-isotopic-…` (batch 3, landed). Source
  cross-check: Lück Modification Lemma 1.23 read at printed p. 16.
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 14. `lem-handle-trading-concentrates-…-in-two-adjacent-middle-indices` — authored

- Claim: for every $2\le k\le n-2$ a presentation with $r$ handles of index
  $k$ and $r$ of index $k+1$ and differential an isomorphism.
- Route: 1.1 self-index and eliminate lows; 2.1 surjectivity of
  $\partial_{q+1}$ from acyclicity; 3.1 modification lemma; 4.1 homology lemma
  plus elimination lemma; 5.1 dual elimination from the top; 6.1 two-index
  complex and rank equality.
- Suppliers: `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends`
  (mine), `prop-relative-handle-chain-complex-of-a-cobordism` (mine),
  `lem-handle-elimination-by-trading-a-pair` (mine),
  `lem-homology-lemma-realizes-handle-bases-by-isotopy` (mine),
  `lem-modification-lemma-…` (mine),
  `lem-zero-and-one-handles-…` (mine),
  `lem-duality-eliminates-top-and-cotop-handles` (mine),
  `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` (mine),
  `def-h-cobordism` (mine), and batch-1 `thm-handle-duality-from-negating-a-morse-function`
  and `def-dual-handle-decomposition` (landed).
- Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK.

### 15. `def-middle-handle-intersection-matrix-of-an-h-cobordism` — authored (definition)

- Claim: $M=(I(A_i,B_j))$, mod-two variant, identification with
  $\partial_{k+1}$, presentation-dependence and transverse-isotopy convention.
- Suppliers referenced: concentration lemma, relative handle complex,
  intersection-number definitions, oriented manifold, handle core/belt items
  (published), countable choice.
- Checks: precheck n/a (0 checked), rendercheck OK, proof-layout 0 steps 0
  defects, content-policy clean.

### 16. `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` — authored

- Claim: $M\in\operatorname{GL}_r(\mathbb Z)$, $\det M=\pm1$.
- Route: 1.1 two-index complex; 2.1 acyclicity gives a bijective differential;
  3.1 rank equality and invertibility; 4.1 identification with $M$.
- Suppliers: `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends`
  (mine), `prop-relative-handle-chain-complex-of-a-cobordism` (mine),
  `def-middle-handle-intersection-matrix-…` (mine),
  `lem-one-handle-changes-relative-homology-in-one-degree` (batch 4, landed),
  and published linear-algebra items (`def-determinant-of-a-square-matrix`,
  `cor-operator-determinant-on-the-general-linear-group`,
  `def-invertible-matrix-and-general-linear-group`).
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK.

### 17. `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity` — authored

- Claim: (i) Smith reduction of $\operatorname{GL}_r(\mathbb Z)$ to $I_r$ by the
  three elementary kinds; (ii) geometric realisation by slides, renumbering and
  reorientation.
- Suppliers: `prop-smith-normal-form-algorithm-over-a-euclidean-domain`,
  `thm-smith-normal-form-existence-over-a-pid`,
  `def-matrix-equivalence-and-smith-normal-form-over-a-pid` (published),
  `prop-elementary-matrix-operations-are-realized-by-handle-slides` (batch 3,
  landed), `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains`
  and `lem-handle-slides-preserve-the-relative-diffeomorphism-type` (batch 3,
  landed), and my items 15 and 16.
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 18. `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` — authored

- Claim: matrix $I_r$ upgraded to the geometric single-point configuration.
- Route: 1.1 isolate a pair; 2.1 opposite-sign pairs from the count $+1$;
  3.1 Whitney moves and isotoped attachments; 4.1 all pairs; 5.1 conclusion.
- Suppliers: concentration lemma, middle-handle matrix, slide lemma (mine),
  `thm-high-dimensional-whitney-trick`, `thm-whitney-trick-in-the-two-dimensional-borderline-case`,
  `lem-arcs-in-a-connected-submanifold-…` (batch 14, landed),
  `lem-attaching-handles-along-isotopic-…` (batch 3, landed),
  `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged` and
  `thm-morse-rearrangement-by-index` (batch 1, absent at first, now landed).
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK.

### 19. `ex-the-handle-matrix-of-a-simple-acyclic-presentation` — authored

- Claim: $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ reduced to $I_2$ by the
  displayed elementary operations, each realised geometrically.
- Suppliers: my items 15--17, `prop-elementary-matrix-operations-are-realized-by-handle-slides`
  (batch 3, landed), `prop-smith-normal-form-algorithm-over-a-euclidean-domain`,
  `def-determinant-of-a-square-matrix`, `def-matrix-product-and-identity-matrix`
  (published).
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 20. `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` — authored

- Claim: the single-point configuration deletes all pairs, leaving the empty
  presentation.
- Suppliers: my item 18, `thm-handle-cancellation` (batch 3, landed),
  `def-geometric-cancelling-handle-pair` (batch 3, landed),
  `def-handle-decomposition-relative-to-the-incoming-boundary` (batch 1, landed),
  `def-countable-choice` (published).
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.

### 21. `thm-smooth-simply-connected-h-cobordism-theorem` — authored

- Claim: $\dim W=n+1\ge6$, closed simply connected faces, $W$ connected
  $\Rightarrow W\cong M_0\times[0,1]$ rel $M_0$.
- Route: 1.1 self-index; 2.1 eliminate low and high indices; 3.1 concentrate in
  two adjacent middle indices; 4.1 unimodular matrix, slides to $I_r$, Whitney
  realisation; 5.1 pairs cancel and the empty presentation is the product.
- Suppliers: items 1--7, 9--14, 16--18, 20 of this pair, all authored and
  checked here; the in-run suppliers of those items are batches 1, 3, 4 and 14
  (landing progressively; the residual list is in the handoff section).
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK.

### 22. `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` — authored

- Claim: h-cobordant closed simply connected $n$-manifolds, $n\ge5$, are
  diffeomorphic.
- Route: 1.1 the h-cobordism theorem's diffeomorphism maps the far face onto the
  far face; 2.1 restriction gives $M_1\cong M_0$.
- Checks: precheck PASS, proof-layout 2 steps 0 defects, rendercheck OK.

### 23. `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold` — authored (scaffold repaired)

- **Repair.** The scaffold used plain Poincaré--Lefschetz duality and naive
  excision, and silently assumed that the compact contractible $X$ is
  orientable. The authored proof (i) proves orientability of $X$: contractibility
  gives $H^1(X;\mathbb Z/2)=0$ by the universal coefficient sequence, so
  $w_1(TX)=0$ and the tangent bundle is orientable
  (`prop-first-stiefel-whitney-class-classifies-orientability`); (ii) replaces
  the duality by `thm-fully-relative-poincare-lefschetz-duality` for the split
  boundary $\Sigma\sqcup S^n$; (iii) uses a strictly smaller concentric disk in
  the excision step so that the excision hypothesis really holds, and identifies
  the resulting pair with $(W,S^n)$ through a collar deformation retraction.
- Suppliers: my item 21, published `thm-whitehead-theorem`,
  `thm-relative-hurewicz-theorem`, `thm-excision-for-singular-homology`,
  `thm-long-exact-sequence-of-a-pair-in-singular-homology`,
  `cor-seifert-van-kampen-simply-connected-overlap`,
  `thm-higher-dimensional-spheres-are-simply-connected`,
  `cor-contractible-nonempty-spaces-have-the-homology-of-a-point`,
  `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`,
  `prop-first-stiefel-whitney-class-classifies-orientability`,
  `thm-collar-neighborhood-theorem`, and the definitional items.
- Checks: precheck PASS, proof-layout 7 steps 0 defects, rendercheck OK.

### 24. `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` — authored (scaffold repaired, Step-3a author note addressed)

- Claim: the hypothesis $n\ge5$ cannot be relaxed to $n=4$; (i) the Whitney
  dimension count fails; (ii) the conclusion fails in the smooth category.
- **Repair (as recommended by the Step-3a review).** The scaffold's (ii) claimed
  simply connected smooth counterexamples with only Lück §1.5 as citation,
  which states the failure "in general". The authored remark prints Lück's
  exact statement with the Donaldson locator (J. Differential Geom. 26 (1987)
  141--168) and adds the exact source for the simply connected strengthening:
  Kasprowski--Powell--Ray, EMS Surv. Math. Sci. 9 (2022) 193--249, Example 1.13
  and §5.8 (fetched and read: smoothly s-cobordant, homeomorphic, non-diffeomorphic
  simply connected 4-manifolds). The Freedman good-group topological statement
  is retained with Lück's phrasing.
- Checks: precheck n/a (0 checked), rendercheck OK, proof-layout 0 steps 0
  defects, content-policy clean, prosecheck clean.

### 25. `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` — authored

- Claim: the false statement that the hypothesis $n\ge5$ can be weakened to
  $n=4$; (i) the Whitney step fails at $m=4$ with $a=b=2$; (ii) the conclusion
  fails by the documented simply connected examples (KPR Example 1.13, first
  pair due to Donaldson).
- Suppliers: my items 21 and 24, batch-14
  `rem-the-smooth-whitney-trick-fails-in-dimension-four` (landed), and the
  definitions of h-cobordism and simple connectivity.
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK,
  content-policy clean.

## Final checks and handoff (2026-10-06)

**Scope status.** All 25 owned items are authored on disk (`items/<id>.md`,
`status: draft`, `pipeline_run: frontier-41-ha-dt-29`, explicit
`dependency_level` equal to the level computed by
`item-dependency-levels.mjs`, and frontmatter `deps` equal to the batch-15
manifest entries) and both pages are authored
(`library/differential-topology/the-smooth-h-cobordism-theorem.md` carrying the
20 A items, `...-examples.md` the 5 B items). `step3-decisions.mjs check`
reports the pair's two page scopes as closed (the Step-3a `sufficient` review is
current). Item decisions are recorded as stated in the subsection below.

**Added suppliers (authored in this batch).** Four local prerequisite items
were written from scratch on the A page, each with its source locators in the
per-item checkpoints: `prop-relative-handle-chain-complex-of-a-cobordism`,
`lem-handle-elimination-by-trading-a-pair`,
`lem-homology-lemma-realizes-handle-bases-by-isotopy`,
`lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation`. Two
cross-batch ledger rows were added while authoring:
`prop-relative-handle-chain-complex-of-a-cobordism` →
`lem-long-exact-sequence-of-a-triple-in-singular-homology` (for $\partial^2=0$)
and `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` →
`def-attaching-belt-intersection-matrix-of-adjacent-index-handles`.

### Checks actually run (exact commands, final pass)

- `node tools/proof-layout.mjs <25 explicit item paths>` (one batched command)
  — **25 items, 94 steps, 0 defects**. This is the required pre-handoff run.
- `node tools/tsx-run.mjs tools/precheck.mts <25 explicit item paths>` —
  **22 checked, 0 failing**; the three items without a proof-phase body
  (`def-h-cobordism`, `def-middle-handle-intersection-matrix-of-an-h-cobordism`,
  `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four`) are
  reported `not-applicable`.
- `node tools/rendercheck.mjs <25 items + both pages>` — **OK, 27 files**: no
  wikilink inside math, no unbalanced/nested delimiters, no multiline display
  block, all math parses under the real KaTeX, all frontmatter parses.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-15.pages.json --manifest-only`
  — 25 scoped items, 39 errors, 0 warnings, and **every error is a pre-splice
  structural artifact, not a content finding**: 25 × `batch-item-already-exists`
  (the files exist while `research/plan-spec.json` still carries `items: []` for
  these two pages — Step 4 splice work) and 14 × `batch-dependency-missing` for
  the dependencies on the nine unauthored sibling suppliers listed below.
  Cross-check with all 31 run manifests
  (`... research/frontier-41-ha-dt-29-batch-*.pages.json --manifest-only`): of
  the run-wide findings, the 25 touching batch-15 items are exactly those
  `batch-item-already-exists` rows; **no provenance, generated-statement,
  boundary or content error names any batch-15 item**, and the
  `batch-dependency-missing` rows disappear once the sibling manifests are read
  together with batch 15.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-15.pages.json`
  — **25 items, 0 normalized, 0 errors** (item `deps` agree with the manifest).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` —
  exit 1 for the run solely on sibling pages (morse-trajectory, Lefschetz,
  characteristic-class and Morita off-by-one rows); **no error names a
  batch-15 item**, and all 25 batch-15 levels recompute exactly.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; the 259
  planned pages without item lists include this pair (splice in Step 4), and no
  ordering or id fault involves it.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-15.proof-contracts.json --strict`
  — 25/25 items checked, **14 errors, all of the single class
  `citation-source-missing`** for the nine unauthored suppliers below; zero
  quote mismatches, zero section errors, zero boundary errors. The contracts
  were regenerated against the current item files at handoff (this fixed a
  stale `citation-quote-mismatch` on `cex-a-four-dimensional-boundary-case-…`
  F1 that arose because the batch-14
  `rem-the-smooth-whitney-trick-fails-in-dimension-four` item landed after the
  first generation).
- `node tools/citation-fidelity.mjs --contracts … --fail-on-missing-quote` —
  179 citations over 25 items; no missing quote, no widening candidate; the nine
  referenced items not on disk are reported as skipped, not passed.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`
  — exit 0; nothing contradicted, no template reuse at threshold.
- `node tools/finite-smoke.mjs …` — 0 errors (0 obligations);
  `node tools/risk-report.mjs …` — 0 errors, 25 items routed (report-only).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
  — exit 0 with 73 batch-15 cross-batch rows refreshed; one unrelated warning,
  `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review
  or consumer ownership`, which belongs to another batch and is left to its
  owner and the serial reconciler.

### Supplier reconciliation and open obligations

Nine in-run supplier item files are still unauthored on disk at handoff (they
belong to sibling frontier-41 pairs still being constructed: batch 1
`handle-decompositions-duality-and-rearrangement` and batch 14
`the-whitney-trick-and-surgery-below-the-middle-dimension`). Every consumer
below is fully authored and locally checked; per the dispatch its Step-3b item
decision is escalated, naming the exact supplier and the consuming proof step,
and stays escalated until the completed supplier and its actual proof use are
verified. The steps are the ones recorded in the proof contracts.

| unauthored supplier (batch) | consumer item (this pair) | consuming step(s) |
|---|---|---|
| `thm-morse-functions-and-handle-decompositions-correspond` (1) | `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` | F2 used in 1.2, 2.1, 3.1 |
| `thm-morse-functions-and-handle-decompositions-correspond` (1) | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | F5 used in 3.1, 4.1 |
| `thm-morse-rearrangement-by-index` (1) | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | F3 used in 2.1, 4.1 |
| `thm-morse-rearrangement-by-index` (1) | `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` | F6 used in 1.1 |
| `thm-self-indexing-morse-function-existence` (1) | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | F4 used in 2.1, 4.1 |
| `lem-handles-of-equal-index-can-be-attached-on-one-level` (1) | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | F6 used in 3.1 |
| `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles` (1) | `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` | F2 used in 1.1 |
| `thm-handle-duality-from-negating-a-morse-function` (1) | `lem-duality-eliminates-top-and-cotop-handles` | F3 used in 2.1 |
| `thm-handle-duality-from-negating-a-morse-function` (1) | `lem-handle-trading-concentrates-…` | F6 used in 5.1 |
| `prop-dual-elimination-of-top-index-handles` (1) | `lem-duality-eliminates-top-and-cotop-handles` | F4 used in 2.1 |
| `thm-high-dimensional-whitney-trick` (14) | `lem-homology-lemma-realizes-handle-bases-by-isotopy` | F3 used in 4.1, 5.1 |
| `thm-high-dimensional-whitney-trick` (14) | `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` | F3 used in 3.1, 4.1, 5.1 |
| `thm-whitney-trick-in-the-two-dimensional-borderline-case` (14) | `lem-homology-lemma-realizes-handle-bases-by-isotopy` | F4 used in 4.1, 5.1 |
| `thm-whitney-trick-in-the-two-dimensional-borderline-case` (14) | `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` | F4 used in 3.1, 4.1, 5.1 |

Downstream items of this pair whose transitive closure contains one of these
suppliers (through the consumers above) carry the same escalation with the
supplier and step named. Item-specific escalation reasons are in each recorded
decision. Escalation does not weaken any claim: the consumers are complete
arguments whose only open point is the eventual verification of the supplier's
statement and the recorded use; if a supplier lands with a different statement,
the consumer must be repaired before the Step-3 gate.

Additional flagged obligation for Step 5 (not a supplier gap): step 1.1 of
`lem-handle-elimination-by-trading-a-pair` (realising the
$\partial_1W_{q+1}$-isotopy of hypothesis (2) by slides over the existing
$(q+1)$-handles and isotopies inside $\partial_1W_q$, with the core isotopy
extended by the published ambient-isotopy lemma) is the most delicate step of
the pair and is flagged for independent audit together with its batch-3
suppliers.

### Published concerns

None confirmed. No published item consumed by this pair (intersection theory,
relative homology/excision, cellular homology, duality, homotopy groups,
unoriented/linear algebra, the published handle-attachment page) was found
defective during authoring, and no load-bearing dependency of any item rests on
a B/examples page. Two non-blocking observations: (i) the unrelated batch-19
cross-batch file warning above, reported to its owner via this record; (ii) the
Step-1-recorded in-run observation that the strategy parenthetical of the
(still unauthored) batch-14 `thm-whitney-trick-in-the-two-dimensional-borderline-case`
says $r=1$ is excluded while its stated hypothesis covers $r\le2$ — the item
must be re-read when it lands; the use here needs only $r=2$ with $s\ge3$.

### Item decisions recorded

Recorded with `tools/step3-decisions.mjs record-item` (never `--owner`) on
2026-10-06 between 01:42 and 01:46 (Australia/Sydney), each with its examined
dependency list (the manifest `deps` of the item) and concrete evidence; the
receipts are `research/frontier-41-ha-dt-29-step3b-review-<id>.json`. Result at
the time of writing: **5 items closed (4 `accept`, 1 `repaired`), 20 items
`escalate`**.

| # | item | decision |
|---|---|---|
| 1 | `def-h-cobordism` | accept — definition; no proof obligation; deps all on disk and read; level recomputes |
| 2 | `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` | accept — 3-step proof from published AT suppliers + `def-h-cobordism`; precheck pass |
| 3 | `cex-a-homology-cobordism-need-not-be-an-h-cobordism` | **repaired** — scaffold's false $S^3$-end claim removed, proof route replaced by Mayer–Vietoris + fully relative duality + UCT; 26 deps read |
| 4 | `ex-a-product-cobordism-is-an-h-cobordism` | accept — displayed retractions; batch-1 `lem-product-cobordisms-…` now on disk and read |
| 5 | `thm-critical-point-free-cobordism-…` | escalate — `thm-morse-functions-and-handle-decompositions-correspond` (steps 1.2, 2.1, 3.1) |
| 6 | `lem-handle-elimination-by-trading-a-pair` | escalate — `lem-handles-of-equal-index-…`, `thm-morse-functions-and-handle-decompositions-correspond` (via closure) |
| 7 | `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` | escalate — 4 batch-1 suppliers at steps 2.1–4.1 |
| 8 | `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` | accept — 6-step proof from on-disk batch-3 suppliers; precheck pass |
| 9 | `lem-zero-and-one-handles-can-be-eliminated-…` | escalate — `prop-connected-cobordisms-…` (step 1.1) plus batch-1 closure |
| 10 | `prop-relative-handle-chain-complex-of-a-cobordism` | escalate — batch-1 closure of `def-handle-decomposition-relative-…` |
| 11 | `lem-duality-eliminates-top-and-cotop-handles` | escalate — `prop-dual-elimination-of-top-index-handles`, `thm-handle-duality-from-negating-a-morse-function` (step 2.1) |
| 12 | `lem-homology-lemma-realizes-handle-bases-by-isotopy` | escalate — `thm-high-dimensional-whitney-trick`, `thm-whitney-trick-in-the-two-dimensional-borderline-case` (steps 4.1, 5.1) plus batch-1 closure |
| 13 | `lem-modification-lemma-for-embedded-spheres-…` | escalate — batch-1 closure |
| 14 | `lem-handle-trading-concentrates-…` | escalate — `thm-handle-duality-…` (step 5.1), both Whitney tricks, batch-1 closure |
| 15 | `def-middle-handle-intersection-matrix-of-an-h-cobordism` | escalate — closure through item 14 |
| 16 | `lem-acyclicity-makes-the-…-matrix-unimodular` | escalate — closure through items 2, 10, 15 |
| 17 | `lem-handle-slides-reduce-…-to-the-identity` | escalate — closure through items 15, 16 |
| 18 | `lem-whitney-trick-realizes-algebraic-…-cancellation` | escalate — `thm-high-dimensional-whitney-trick`, both Whitney tricks (steps 3.1–5.1), `thm-morse-rearrangement-by-index` (step 1.1) |
| 19 | `ex-the-handle-matrix-of-a-simple-acyclic-presentation` | escalate — closure through items 15–17 |
| 20 | `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` | escalate — closure through item 18 |
| 21 | `thm-smooth-simply-connected-h-cobordism-theorem` | escalate — closure through items 5–7, 9, 11, 14, 16–18, 20 |
| 22 | `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` | escalate — closure through item 21 |
| 23 | `cor-high-dimensional-smooth-poincare-…` | escalate — closure through item 21 (the item's own repair and orientability argument are complete) |
| 24 | `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` | escalate — closure through item 21 (the Step-3a author note is addressed) |
| 25 | `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` | escalate — closure through items 21, 24 |

Three escalation receipts (items 12, 14, 15) report `changed inputs require a
current owner decision` rather than the recorded reason: sibling batches edited
their manifests during the recording window, so the item hash moved while the
supplier files themselves are still absent. All 20 escalations remain open and
owner-held, exactly as the dispatch requires, and none of the five closed items
claims anything about the missing suppliers.
