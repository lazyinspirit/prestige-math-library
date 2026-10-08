# Step 3a dispatch report — `extremal-length-and-planar-quasiconformality`

- Run: `frontier-43-complex-representation-15` (batch 12, orders 1618/1619, `complex-analysis`).
- Pair: A `extremal-length-and-planar-quasiconformality` (15 items) / B
  `extremal-length-and-planar-quasiconformality-examples` (8 items). Batch 12 is the only pair in
  its batch files.
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the pair's promised scope (all design ids present id-for-id,
  source coverage adequate and independently re-verified, no unmet prerequisite found).
  Scope hash at review: `3a68c62b8f2f7814020f6124296d7f06223a9608c848f5f4af8b90393b6eb233`.
  Non-blocking owner observations are in §5.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-12.pages.json` (both pages, all
  23 items with statements, strategies, kinds, deps, justification fields),
  `...-batch-12.coverage.json` (3 sources, 48 harvest rows with dispositions),
  `...-batch-12.notes.md` (Step-1 design reconciliation, inventory rationale, seven repairs),
  `...-batch-12.cross-batch-dependencies.json` (`[]` for this pair),
  `...-scope-ledger.json` (both pages owed, batch 12),
  `...-cross-batch-dependencies.json` (run ledger, 63 edges with supplier batch 12).
- Design/prose: `research/plan-complex-analysis-track.md` §CA-QC-1 (A inventory of 11 rows in proof
  order, prose companion list, source/proof-strategy paragraph, source mapping at the Lyubich and
  Ahlfors–Beurling ranges, M.2 companion inventory listing the 8 B ids by name, order table row
  CA-QC-1 = 859/860); `research/plan-spec.json` rows 1618/1619 (ids, kinds, titles, companions,
  `requires`; both `items` arrays empty, so the scaffold inventory displaces nothing).
- Run records: `...-alpha-step1-drift.md` (this page: VERDICT `no-drift`, "No additional
  prerequisite is indicated by the assigned claims");
  `...-owner-authoring-direction.md` (no batch-12 provision; only the standing rule to carry the
  choice assumptions of actual suppliers); the 23 step-1 readiness receipts
  `...-step1-<item>.json`; `...-frontier-gate-pages.json`; `...-alpha-groups.json` (lane `e`
  covers batches 12–14, the quasiconformal chain).
- Sibling availability (role audit): batch-13 and batch-14 manifests, whose consumer items are
  listed in §4.
- Sources (§3): the three documents re-fetched live and the cited regions read in the extracted
  text.

## 2. Design ∶ scaffold comparison (scope only)

Every design id is present with the same id and kind, in the design's proof order:

| design row (CA-QC-1, in plan order) | batch-12 item |
|---|---|
| 1. extremal length / curve-family modulus definition, convention fixed | `def-extremal-length-and-curve-family-modulus` (definition) |
| — added prerequisite | `lem-rho-length-and-extremal-length-are-well-defined` (lemma) |
| 2. conformal invariance, monotonicity, series/parallel laws | `thm-extremal-length-conformal-invariance-and-monotonicity` (theorem) |
| 3. rectangle and round-annulus computations | `thm-modulus-rectangle-and-annulus` (theorem) |
| 4. annulus conformal parameter is a complete invariant | `thm-round-annulus-conformal-parameter-is-complete-invariant` (theorem) |
| 5. geometric definition | `def-geometric-quasiconformal-homeomorphism` (definition) |
| 6. ACL/Sobolev analytic definition | `def-acl-sobolev-quasiconformal-homeomorphism` (definition) |
| 7. Beltrami coefficient and maximal dilatation | `def-beltrami-coefficient-and-maximal-dilatation` (definition) |
| — added prerequisite | `lem-analytic-quasiconformality-implies-modulus-distortion` (lemma) |
| — added prerequisite | `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality` (lemma) |
| — added prerequisite | `lem-inverse-of-a-quasiconformal-map-is-quasiconformal` (lemma) |
| 8. geometric ⇔ analytic equivalence, same sharp constant | `thm-geometric-and-analytic-quasiconformality-equivalent` (theorem) |
| 9. composition and inverse, Beltrami transformation, $K_1K_2$ bound | `thm-composition-and-inverse-quasiconformal` (theorem) |
| 10. $1$-quasiconformal ⇒ conformal | `thm-one-quasiconformal-is-conformal` (theorem) |
| 11. normalized compactness on the sphere | `thm-normalized-quasiconformal-compactness` (theorem) |

The four added lemmas are the proof prerequisites of the design's own rows, not new scope: the
well-definedness justifier of the definition; the (b)⇒(a) modulus-distortion half of the
equivalence theorem and of the compactness estimates (with an annular clause the page's
applications need); the circular-dilatation/quasisymmetry control used by the inverse and
equivalence theorems; and the inverse half of the composition/inverse theorem. This matches the
batch-12 notes' inventory table; I read the statements and found no promised claim dropped,
weakened, or replaced by an assumption. Statement-level checks: the equivalence theorem states
equality of the two $K$'s and the minimal-constant clause; the compactness theorem is the
normalized sphere statement with equicontinuity, subsequence compactness and closure/lower
semicontinuity; the annulus classification asserts (i) equivalence iff $M$ agrees, (ii)
$M(D^\ast)=+\infty$, (iii) the punctured-disc/punctured-plane exclusions.

The 8 B items are exactly the M.2 companion inventory, one id per entry: rectangle and annulus
extremals; the punctured-disc/finite-annulus contrast (the entry the design moves here from
CA-12); affine ellipses; radial stretch; composition bounds; a modulus obstruction; inverse
coefficient; the orientation-reversing exclusion (`cex-...`).

Page metadata equals `plan-spec.json` exactly (orders, ids, kinds, titles, category, companions,
`requires`), and the design's shorthand requirements CA-12, CA-15, CA-PT-1, MT-14, PDE-11, PDE-12,
PDE-3 are concretized to exactly the seven named pages, all of which are published library pages
(§4). Format conventions are fixed before the formulas they govern: the definition prints the
supremum convention and cross-translates the three sources; I verified the translations against
the sources (Bishop's $\operatorname{Mod}=\inf_\rho\int\rho^2$ over $\ell_\rho\ge1$ equals the
library $\mu$ and its $\lambda=1/\operatorname{Mod}$ equals the library $\lambda$; Lyubich's
$L=\sup\ell_\rho^2/m_\rho$ and $W=L^{-1}$ give $L(\Gamma_{r,R})=\frac1{2\pi}\log\frac Rr$ and
$L(\Theta_{r,R})=\frac{2\pi}{\log(R/r)}$, matching the page's two families and the B-page identity
$\lambda(\Gamma)\lambda(\Theta)=1$; Ahlfors–Beurling's $\lambda\{\gamma\}$ conventions match
Lemmas 4–5).

## 3. Source coverage

Three A-page source rows, all stamped fetch-verified. I re-fetched all three on 2026-10-07 and
reproduced the stamps byte-for-byte:

- Bishop, *Quasiconformal Mappings* (Stony Brook Math 627), 1 616 042 B, sha256_16
  `a28bc4e2e00841a1`, 164 pp. Read: Ch. 1 §1 pp. 1–7 — modulus/extremal-length definition and
  convention, Lemmas 1.1–1.5 (conformal invariance, monotonicity, Grötzsch, parallel, series),
  Lemma 1.6 ($a/b$ rectangle), Lemma 1.7 ($2\pi/\log(R/r)$ annulus), Lemma 1.8 (point removal,
  the deferred row), Lemma 1.9 (symmetry, the out-of-scope row); Ch. 2 §2 pp. 51–53 — geometric
  definition and Lemma 2.1/Corollary 2.2; Ch. 2 §3 p. 53 — Lemma 3.1; Ch. 3 §4 pp. 91–95 —
  Theorems 4.1–4.2, Corollary 4.3, Lemma 4.4 (area estimates).
- Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials* I, 35 507 640 B, sha256_16
  `291912b9e5206cf2`, 702 pp. Read: §6.1 extremal length/width definition; §6.3.1 Proposition 6.6
  and Exercise 6.8; §6.3.3 Lemma 6.10 + Corollaries 6.11–6.12; §11.3 QC1/QC2; §11.4 Proposition
  11.14 (a qc map's inverse is AC and $m(h(X))=\int_X\operatorname{Jac}$ — the change-of-variables
  statement this pair needs); §12.1 Lemma 12.1 and Proposition 12.3; §12.2 Lemma 12.6 and
  Proposition 12.7; §12.3 Lemma 12.11/Proposition 12.13; §12.4 Proposition 12.14; §12.5 QC1–QC3,
  Proposition 12.15, Corollary 12.16; §13.1 Weyl's lemma; §13.2 Devil's staircase; §13.4
  Theorem 13.2 including the weak-$L^2$ passage (13.2) of the derivatives and of the a.e.
  dilatation bound to the limit.
- Ahlfors–Beurling, *Conformal invariants and function-theoretic null-sets*, Acta 83 (1950),
  1 205 017 B, sha256_16 `b864621d732f59f0`, 29 pp. Read: §4 pp. 114–115 — extremal-length
  definition, conformal invariance, and Lemmas 1–5 (overflow, series, parallel/harmonic-sum,
  rectangle $b/a$, separating family $2\pi/\log(R/r)$).

All load-bearing coverage claims match the source text at the stated locators, including the
quantitative constants and the direction conventions. Dispositions: 48 harvest rows — 14
`included`, 22 `inline`, 2 `deferred`, 10 `out-of-scope`; every decline carries a written reason.
I confirm the declines for this pair's scope: the deferred rows (Bishop Lemma 1.8 point removal;
Ahlfors–Beurling §5 Theorems 8–9) are removability inputs consumed by
`quasisymmetry-welding-and-conformal-removability` (batch 14, in-run, whose manifest contains the
matching removability items `ex-single-point-conformal-removability` and
`thm-zero-length-sets-and-quasicircles-are-conformally-removable`), and no item of this pair uses
them; the out-of-scope rows (Bishop symmetry rule, Bishop Ch. 2 §3 Hölder regularity, Bishop Ch. 4
§1 Beurling-transform bounds; Lyubich torus width, Dirichlet integral, non-crossing, covering
widths, measurable conformal structures, Devil's staircase, quasi-isometries/boundary extension;
Ahlfors–Beurling invariant taxonomy) are either owned by a different in-run pair (Beltrami
pair owns measurable conformal structures; periods/Jacobians owns the torus; welding pair owns
boundary extension) or are proof tools no item here consumes. `tools/coverage-checklist.mjs`
reports 0 errors and one warning (14/48 scaffolded) whose "confirm the declines with Alpha" action
is exactly the confirmation above.

## 4. Prerequisites and dependency records

- Direct declarations: the 23 items' `deps`/`justified_by` name 90 distinct ids — 73 published
  (`items/<id>.md` present) and 17 items of this same pair; 0 absent. Every one of the 84 distinct
  `[[...]]` wikilink targets in statements and strategies resolves to a published item or to an
  item of this pair.
- Transitive closure over published frontmatter and in-run declarations: 1887 distinct ids = 1864
  published + 23 in-pair (the pair's 15 A + 8 B items); 0 missing, 0 dependencies on other in-run
  pairs. This pair is self-contained given the published library — consistent with its role as the
  base of the quasiconformal chain.
- Page `requires`: 7 pages, all published — `conformal-mapping-branches-and-the-schwarz-lemma`,
  `normal-families-and-montels-theorem`, `complex-lp-spaces-and-test-function-conventions`,
  `weak-derivatives-and-sobolev-spaces`, `smooth-approximation-and-sobolev-extension`,
  `harmonic-functions-and-mean-values-in-rn` (carrying `thm-weyl-lemma-for-the-laplacian`), and
  `logarithmic-potential-capacity-and-riesz-decomposition`.
- Step-1 readiness: all 23 `...-step1-<item>.json` receipts are decision `ready` and hash-current
  against the live item content (23/23 recomputed with the same closure the engine uses; 0 stale).
- Consumers: the run ledger carries 63 declared edges with supplier batch 12 — 30 to
  `beltrami-equation-and-measurable-riemann-mapping` (batch 13) and 33 to
  `quasisymmetry-welding-and-conformal-removability` (batch 14). All 63 carry review rows (status
  open pending this pair's authoring, as expected at Step 3a), and the consumer items' targets are
  present in this pair's manifest: batch 13 uses the analytic/Beltrami/geometric definitions, the
  equivalence, composition/inverse, one-quasiconformal and compactness theorems, and
  `lem-circular-dilatation-...`; batch 14 additionally uses
  `lem-analytic-quasiconformality-implies-modulus-distortion`,
  `thm-modulus-rectangle-and-annulus` and
  `thm-extremal-length-conformal-invariance-and-monotonicity`. Batch 13's A page also requires
  this A page at page level, and this pair's B page requires its A page.

### Unmet prerequisites

None confirmed. Three candidate obligations were checked and are supplied inside the pair's own
items or their mapped source rows, so no scaffold addition is required:

1. Change of variables / Lusin-$N$ for quasiconformal homeomorphisms, needed by
   `lem-analytic-quasiconformality-implies-modulus-distortion`,
   `thm-composition-and-inverse-quasiconformal` and the inverse lemma: supplied by Lyubich
   Proposition 11.14 (mapped inline into `thm-geometric-and-analytic-quasiconformality-equivalent`)
   and by the item's own smooth-approximation route.
2. Weak-limit derivative identification and passage of the a.e. dilatation bound to the limit in
   `thm-normalized-quasiconformal-compactness`: assigned inline by the coverage row "Ch. 2 §13.4 …
   including the weak-$L^2$ passage of the dilatation bound to the limit"; the needed argument is a
   short computation from the published weak-derivative definition plus the elementary fact that
   weak limits of a.e. nonnegative functions are a.e. nonnegative. Uncertainty noted only in that
   no dedicated published item states the order-passage lemma; it does not need to become one.
3. Annulus-geometry modulus bound used by
   `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`(i) and the equicontinuity
   argument: Lyubich Lemma 6.10 (mapped inline) with Corollaries 6.11–6.12.

## 5. Non-blocking owner observations

- **Coverage bookkeeping (Lyubich §13.3).** Lyubich §13.3 "Quasiconformal removability and
  gluing" (pp. 190–191) lies inside the declared read range §§11.1–11.5/12.1–12.5/13.1–13.7 but
  has no disposition row (the rows jump §13.2 → §13.4 → §§13.5–13.7). Its content belongs to the
  batch-14 removability items and is not needed here, so this does not affect this pair's scope;
  if the owner wants a fully gapless harvest, batch 12's coverage could gain one `out-of-scope`
  row naming the batch-14 destination.
- **Bishop Ch. 2 §3 decline wording.** That row bundles Lemma 3.1 (the annulus-geometry bound)
  with the Hölder-regularity results, and the written reason addresses only the Hölder content.
  The geometric bound's content is duplicated by Lyubich Lemma 6.10, which is mapped inline, so
  nothing needed is lost; the owner may still prefer the reason to separate the two.
- **Item-level decisions remain Step 3b work.** This review certifies scope only; proof-strategy
  adequacy (e.g. the inline order-passage and approximation steps above), the sharp constants, and
  the ACL-choice interfaces are for the Step-3 authors and the Step-5 reviewers.

## 6. Verification performed

- `node tools/coverage-checklist.mjs research/frontier-43-complex-representation-15-batch-12.coverage.json --json`
  → 48 harvested, 0 errors, 1 warning (declines confirmed in §3).
- `loadStep3` + `scopeHash` on the pair → `3a68c62b…b6eb233` (no concurrent writer visible; the
  receipt is recorded against this hash).
- `itemHash` recomputation for all 23 step-1 receipts → 23/23 current, 0 stale.
- Direct-dep, wikilink and transitive-closure resolution scripts against `items/` and the run
  manifests → 0 missing, 0 external in-run dependencies.
- Live re-fetch and hash reproduction of the three sources (§3) plus text extraction and reading
  of the load-bearing loci.

## 7. Decision and recording

`node tools/step3-decisions.mjs record-scope --run frontier-43-complex-representation-15
--page extremal-length-and-planar-quasiconformality --decision sufficient --reason "…"`
with the reason summarizing the evidence above and this report's path. No item approvals, owner
records, or scaffold edits are written by this dispatch.
