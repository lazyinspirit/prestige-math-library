# Batch 12 notes — `extremal-length-and-planar-quasiconformality`

Run `frontier-43-complex-representation-15`, role beta (Step 1 scaffold), batch 12, attempt 2.

Pair: `extremal-length-and-planar-quasiconformality` (A, order 1618) and
`extremal-length-and-planar-quasiconformality-examples` (B, order 1619), category
`complex-analysis`. Outputs: `research/frontier-43-complex-representation-15-batch-12.pages.json`,
`research/frontier-43-complex-representation-15-batch-12.coverage.json`,
`research/frontier-43-complex-representation-15-batch-12.cross-batch-dependencies.json`
(unchanged empty consumer input), the 23 item-readiness receipts
`research/frontier-43-complex-representation-15-step1-<item>.json`, and this file.

Attempt 1 wrote the manifest and coverage in the 2026-10-07 01:27–05:20 UTC dispatch window but left
no item-readiness receipts, so the stage re-dispatched the unit. This attempt re-read the manifest
item by item against the design, the plan and the published suppliers, repaired the defects listed
below, re-ran every available check, and recorded readiness for all 23 items. A readiness record is
not mathematical approval: Step 3 authors the proofs and Step 5 reviews them.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`.
- Owner direction `research/frontier-43-complex-representation-15-owner-authoring-direction.md`, read
  in full; it is binding. Its Step-1 Beltrami finding concerns batch 13 (CA-QC-2) and adds no
  obligation to this pair beyond the interface note under "Cross-batch record" below; it does state
  the standing rule used here: "Carry the choice assumptions of actual suppliers."
- Design `research/plan-complex-analysis-track.md` §CA-QC-1 (L4109–L4143) and `research/plan-spec.json`
  (orders, ids, titles, `requires`, companions for both pages).
- Drift review `research/frontier-43-complex-representation-15-alpha-step1-drift.md`: verdict
  `no-drift` for this page ("No additional prerequisite is indicated by the assigned claims").
- `research/frontier-43-complex-representation-15-beta-12.task.md`, the batch coverage, the run
  step-1 blockers record, `research/frontier-43-complex-representation-15-beltrami-step1-resolution.md`
  (interface context for the downstream consumer), and the run dependency ledger inputs.

### Design vs plan

No conflict. The design's shorthand `requires` (CA-12, CA-15, CA-PT-1, MT-14, PDE-11, PDE-12, PDE-3)
is concretized by the plan to exactly the seven published pages listed on the A page; `PDE-3 for
Weyl's lemma` is `harmonic-functions-and-mean-values-in-rn` (which carries
`thm-weyl-lemma-for-the-laplacian`) and `CA-PT-1` is
`logarithmic-potential-capacity-and-riesz-decomposition`. All seven are published. The design's A
inventory (11 items) and B companion list (8 entries) are both present in full; the four local
lemmas added on the A page are prerequisites the design's items need (see "Inventory"), not
inventory padding. The design's two conventions warnings are honoured: the page fixes the
extremal-length/modulus convention in `def-extremal-length-and-curve-family-modulus` before any
formula, and the equivalence proof routes use area/change-of-variables and ACL slicing with Weyl
and weak compactness, not assumed classical differentiability.

## Inventory

A page (15 items): the design's 11 items — `def-extremal-length-and-curve-family-modulus`,
`thm-extremal-length-conformal-invariance-and-monotonicity`, `thm-modulus-rectangle-and-annulus`,
`thm-round-annulus-conformal-parameter-is-complete-invariant`,
`def-geometric-quasiconformal-homeomorphism`, `def-acl-sobolev-quasiconformal-homeomorphism`,
`def-beltrami-coefficient-and-maximal-dilatation`,
`thm-geometric-and-analytic-quasiconformality-equivalent`,
`thm-composition-and-inverse-quasiconformal`, `thm-one-quasiconformal-is-conformal`,
`thm-normalized-quasiconformal-compactness` — plus four added prerequisites:

| added item | why it exists |
|---|---|
| `lem-rho-length-and-extremal-length-are-well-defined` | well-definedness justifier of the definition (parameterisation, agreement with the absolute line integral, ambient domain, additivity) |
| `lem-analytic-quasiconformality-implies-modulus-distortion` | the (b)⇒(a) half of the equivalence theorem and the compactness estimates; states the quadrilateral and the annular case |
| `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality` | supplies circular-dilatation/quasisymmetry control, used by the inverse theorem and the equivalence theorem |
| `lem-inverse-of-a-quasiconformal-map-is-quasiconformal` | the inverse half of the composition/inverse theorem and the lower modulus bound |

B page (8 items): one per design companion entry — `ex-extremal-length-of-rectangle-and-annulus`
(rectangle and annulus extremals), `ex-punctured-disc-versus-finite-annulus-modulus` (the
punctured-disc/finite-annulus contrast moved here from CA-12), `ex-affine-quasiconformal-ellipse-map`
(affine ellipses), `ex-radial-stretch-quasiconformal-map` (radial stretch),
`ex-quasiconformal-composition-dilatation-bound` (composition bounds),
`ex-modulus-obstruction-to-quasiconformal-equivalence` (a modulus obstruction),
`ex-beltrami-coefficient-of-an-inverse-map` (inverse coefficient),
`cex-orientation-reversing-homeomorphism-is-quasiconformal` (the orientation-reversing exclusion).

## Repairs made in this attempt (all inside the owned manifest)

1. **Choice strength carried from actual suppliers.** The published
   `thm-acl-characterisation-of-w-one-p` is stated under the Axiom of Choice, and
   `def-acl-sobolev-quasiconformal-homeomorphism` asserts the `W^{1,2}_loc`/ACL identification, so
   every item whose proof uses the analytic class was upgraded from Countable Choice to the Axiom of
   Choice, with `def-axiom-of-choice` added to `deps` and an `axiom_use` naming the use:
   `def-acl-sobolev-quasiconformal-homeomorphism`, `def-beltrami-coefficient-and-maximal-dilatation`,
   `lem-analytic-quasiconformality-implies-modulus-distortion`,
   `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`,
   `lem-inverse-of-a-quasiconformal-map-is-quasiconformal`,
   `thm-geometric-and-analytic-quasiconformality-equivalent`,
   `thm-composition-and-inverse-quasiconformal`, `thm-one-quasiconformal-is-conformal`, and the six
   quasiconformal B-page items. `thm-normalized-quasiconformal-compactness` already carried AC. The
   extremal-length items stay at Countable Choice (their suppliers assume only `AC_ω`/CC);
   `thm-round-annulus-conformal-parameter-is-complete-invariant` and the two extremal-length examples
   now state that assumption explicitly.
2. **`def-acl-sobolev-quasiconformal-homeomorphism`, Cantor clause.** The example
   `(x,y)↦(x+g(x),y)` with `g` the Cantor function has `∂_z̄ f = 0` and `∂_z f = 1` a.e., not
   `∂_z f = 0`; corrected. That is exactly the point: (A2) holds with `k = 0` a.e. while ACL fails.
3. **`lem-analytic-quasiconformality-implies-modulus-distortion`.** Its statement was
   quadrilateral-only, but this page's annulus applications (the compactness estimates and the
   modulus obstruction) need the annular case. Added clause (ii): for a doubly connected
   `Ã ⊆ Ω` with `A = f(Ã)`, `μ(Γ(A)) ≤ K μ(Γ(Ã))` for the end-approach joining families, with the
   round-annulus value `2π/log(R/r)`; sourced to the same length–area method (Bishop Ch. 2 §2;
   Lyubich Lemma 12.1, Proposition 12.3). Deps extended accordingly.
4. **`thm-round-annulus-conformal-parameter-is-complete-invariant`.** Attempt 1 justified (iii)
   (`D*` and `C*` are not conformally equivalent to any round annulus, and `D*` is not equivalent
   to `D` or `C`) with an undefined normalisation "`M(D) = M(C) = 0`". Replaced by sound routes: the
   annular classification is read on the closed winding-one family `Θ` (a biholomorphism induces
   `±1` on the winding-number group, so it carries `Θ` onto the winding-`±1` family; conformal
   invariance and `λ(Θ) = 2π/log(R/r)` give completeness). The same comparison excludes `D*` and
   `C*` from the round annuli: `λ(Θ_{D*}) ≤ 2π/log n → 0` against the finite positive annulus value.
   `D* ≇ C` is Liouville applied to the bounded entire inverse; `D* ≇ D` is the holomorphic-logarithm
   obstruction (the disc is convex, hence homologically simply connected, so a biholomorphism
   `D → D*` would have a logarithm `g`; then `g∘h^{-1}` would be a logarithm of the identity on `D*`
   whose derivative `1/w` would satisfy both `∫_{|w|=1/2} dw/w = 2πi` and `∫ L' = 0`). Six published,
   choice-free complex-analytic items were added to `deps`.
5. **`ex-punctured-disc-versus-finite-annulus-modulus` (c)** rewritten to cite that (iii) clause
   (previously it repeated the undefined `M(D) = 0` normalisation).
6. **`ex-affine-quasiconformal-ellipse-map` (b).** The ellipse's *eccentricity* is `√(4|μ|)/(1+|μ|)`,
   not `K_f`; the correct claim is that the ratio of the semi-axes equals `K_f`. Reworded.
7. **`ex-modulus-obstruction-to-quasiconformal-equivalence`.** The trailing sentence of (a) was
   repaired; (c) was re-proved through the annular distortion clause applied to `h^{-1}`
   (`μ(Γ_{r,R}) ≤ K μ(Γ_{D*}) = 0` contradicts `μ(Γ_{r,R}) > 0`), because "finite vs infinite
   conformal parameter" alone was not a proof; the strategy was aligned.
8. **`ex-quasiconformal-composition-dilatation-bound` (b):** equality case reworded to "`ν μ̄` is a
   nonnegative real" (degenerate cases included), which is the exact equality condition.
9. **Typos and layout:** `Geomctrically → Geometrically` in
   `thm-composition-and-inverse-quasiconformal`; the closing normal-family mis-citation in
   `thm-normalized-quasiconformal-compactness`; the normalisation sentence in
   `ex-extremal-length-of-rectangle-and-annulus` (a); display-math delimiters in
   `thm-modulus-rectangle-and-annulus` and `lem-analytic-quasiconformality-implies-modulus-distortion`(ii);
   and the `dependency_level` labels recomputed for the 13 items downstream of `A5`/`A9`
   (now levels 5–11), verified by `item-dependency-levels check`.
10. **Checked and deliberately unchanged:** `def-geometric-quasiconformal-homeomorphism` stays
    assumption-free (its statement performs no selection and its local-homology suppliers declare no
    AC); the extremal-length well-definedness items keep Countable Choice; no item carries
    `forward_refs` (the design's forward references are non-load-bearing), and no published item is
    referenced as if authored in-run.

## Sources and harvest

Three sources were harvested in full text: Bishop, *Quasiconformal Mappings* (Stony Brook lecture
notes, 164 pp.); Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials* vol. I
(monograph draft, 702 pp.); Ahlfors–Beurling, *Conformal invariants and function-theoretic null-sets*,
Acta Math. 83 (1950). The coverage file records 48 harvested rows: 14 `included`, 22 `inline`, 2
`deferred` to `quasisymmetry-welding-and-conformal-removability` (CA-QC-3: point removal for the
modulus and the extremal-distance/null-set invariance — the natural consumers later in this run), and
10 `out-of-scope` with specific reasons (Bishop Ch. 2 §3 Hölder regularity of normalized maps; Bishop
Ch. 4 §1 Beurling-transform $L^p$ bounds, the route the design declines; Lyubich torus width,
Dirichlet integral, non-crossing principle, annulus coverings, Devil's-staircase, boundary extension
and Banach-space appendix — none used by any item here). Every harvested row carries a disposition.

`coverage-checklist --require-destination` accepts the file with one warning: "14/48 harvested
results scaffolded". That counter sees only `included` rows; the remaining rows are the 22 inline
uses (folded into items), 2 valid deferrals and 10 reasoned declines, so the warning is expected and
is left for the Alpha to confirm.

Full-text evidence: all three sources carry `fetch_verified` stamps (timestamp, bytes, sha256 prefix,
page count) in the coverage file; `source-fetch-check` re-verifies 3/3, `url-sweep` reports 3/3 live
with 0 suspect, and `source-backing` confirms every authored result is backed by an openable source.

## Checks run (actual results)

| check | actual result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | batch-12 labels all match the computed levels; the only errors are `empty scaffold inventory` for the nine pairs other batches have not scaffolded |
| `node tools/manifest-deps.mjs <all 15 manifests>` | `145 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only <all 15 manifests>` | `145 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` | exit 0; two unrelated `redundant-prereq` warnings on the Bergman page and a NOTE that 30 pages elsewhere still carry no item list |
| `node tools/coverage-checklist.mjs research/...-batch-12.coverage.json --require-destination` | 1 page, 48 harvested results, 0 errors, 1 warning (14/48 low yield, explained above) |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-12.coverage.json` | 3/3 source(s) fetch-verified; 3/3 resolved |
| `node tools/url-sweep.mjs --coverage research/...-batch-12.coverage.json --out /tmp/...` | 3/3 live, 0 failed, 0 suspect; 3 citation decisions |
| `node tools/source-backing.mjs --coverage ... --liveness /tmp/...` | every authored result still backed by an openable source |
| `node tools/frontier-item-gate.mjs --run ... --tool extcheck` | FAIL, `focus-item-unknown` for manifest items that have no authored carrier yet (including this batch's ids). This is the documented Step-1 state — the gate note says to run extcheck after authoring — and is re-checked at Step 3 |
| `node tools/frontier-dependency-ledger.mjs refresh --run ... --require-reviewed` | run-level FAIL: "Cross-batch review incomplete" (other batches have no input files and declared edges have no reviews). Batch 12's own consumer input `[]` is valid: it has no cross-batch consumer dependencies |
| `git status` | this attempt modified only `research/frontier-43-complex-representation-15-batch-12.pages.json` (concurrent writers are active elsewhere in the tree); no published content, shared plan or engine file was touched |

## Cross-batch record

- Declared edges involving batch 12 (exactly one): page
  `beltrami-equation-and-measurable-riemann-mapping` (batch 13) **requires**
  `extremal-length-and-planar-quasiconformality` (batch 12). Batch 12 is the supplier; the review row
  belongs to batch 13's consumer input. Batch 12 has no item-level cross-batch dependency: its items
  depend only on published content and on each other.
- Assumption propagation the consumers must carry: after this repair the A-page quasiconformal items
  (`def-acl-sobolev-quasiconformal-homeomorphism`, `def-beltrami-coefficient-and-maximal-dilatation`,
  `lem-analytic-quasiconformality-implies-modulus-distortion`,
  `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`,
  `lem-inverse-of-a-quasiconformal-map-is-quasiconformal`,
  `thm-geometric-and-analytic-quasiconformality-equivalent`,
  `thm-composition-and-inverse-quasiconformal`, `thm-one-quasiconformal-is-conformal`,
  `thm-normalized-quasiconformal-compactness`) and the six quasiconformal B-page items assume the
  Axiom of Choice, inherited from the published ACL characterisation. Batches 13 (CA-QC-2) and 14
  (CA-QC-3) consumers of these items must state the same assumption when they are scaffolded. The
  extremal-length items remain Countable-Choice only and are compatible with length-only consumers.
- Batch 12's consumer input file is `[]`, which the ledger's rules accept for a batch with no
  consumer-side edges; it is refreshed by the run gate, not edited here.

## Published defects / observations (for the canonical ledger)

- No defective published **statement** among the consumed suppliers: every linked supplier exists,
  is published, and carries the hypotheses used (in particular the ACL characterisation under AC and
  the `AC_ω` measure/Sobolev interfaces). Two source-side choices are follow-ups for the consumer
  batches, not defects: the AC on the ACL characterisation (carried above) and the `AC_ω` on the
  completed-product Fubini conventions (carried as Countable Choice).
- Observation, no repair proposed (outside this batch's ownership): the published items
  `lem-coordinate-ball-classes-identify-local-homology-stalks` and
  `def-r-orientation-of-a-topological-manifold` state "No AC is needed"/"No AC" for their own claims,
  but their declared dependency graphs reach `thm-well-ordering-theorem` and `thm-zorn` through
  `cor-the-long-exact-homology-sequence-is-natural` → … →
  `def-cardinality-of-a-small-category-and-kappa-small-diagram` →
  `lem-cardinality-of-a-well-orderable-set`. Evidence: transitive dependency walk over
  `items/*.md` frontmatter. Impact on this batch: none — their statements are explicit, they are used
  only for the AC-free orientation computation of `def-geometric-quasiconformal-homeomorphism`, and
  no strategy of ours invokes the Zorn chain. Recorded so a later choice audit does not
  over-propagate AC into these local-homology uses.

## Unresolved findings and escalations

- None for this pair. No cross-batch change, page split, or new prerequisite pair is required; the
  page has 15 items against a hard cap of 100 and its whole local closure is on one page.
- Owner-relevant, non-blocking: the AC-strength of the quasiconformal half of this page (see the
  cross-batch record) is a factual consequence of the published ACL supplier and should be carried by
  the batch-13 and batch-14 scaffolds; it is not a defect of this page.

## Decisions (23/23 `ready`)

Every item was recorded with `node tools/step1-decisions.mjs record --run frontier-43-complex-representation-15
--item ID --decision ready --dependencies '<manifest deps>' --reason '<strategy + examined suppliers + source stamps>'`.
The per-item reason names the proof strategy, the examined supplier IDs and the fetch stamps in the
coverage file; no item is escalated. The record hashes were computed after the final manifest edit
(2026-10-07, this attempt); any later manifest change invalidates them and must be re-recorded.

Final readiness check (`node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15`,
run after the last record): the run snapshot held 145 items with 119 closed and 44 work rows, of which
**zero belong to this pair** — all 23 batch-12 receipts are closed against the final manifest bytes.
The remaining work rows belong to batches that other workers are still scaffolding (and to their
unscaffolded pages), not to this batch.
