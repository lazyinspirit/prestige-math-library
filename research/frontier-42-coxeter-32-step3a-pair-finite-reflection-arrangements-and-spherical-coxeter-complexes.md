# Step 3a scope review — `finite-reflection-arrangements-and-spherical-coxeter-complexes`

- Run: `frontier-42-coxeter-32` (role alpha, label
  `step3a-pair-finite-reflection-arrangements-and-spherical-coxeter-complexes-6104ffac882ccfe9`).
- Pair: A `finite-reflection-arrangements-and-spherical-coxeter-complexes`
  (order 1750, batch 17, category `coxeter-groups`, design label CG-14; 3 items)
  + B `finite-reflection-arrangements-and-spherical-coxeter-complexes-examples`
  (order 1751; 3 items). B is a dependency leaf: its only `requires` is the A
  page, and no page or item anywhere in the run manifests (batches 1–32
  checked) depends on a B item — 0 consumer hits.
- Design inputs: `research/plan-coxeter-groups-track.md` §CG-14 (L341–353);
  `research/coxeter-scaffold/inventory.json` CG-14; the definition's binding
  justifier in `research/coxeter-scaffold/definition-justifications.json`
  (`thm-cg-finite-chamber-tiling-and-coset-face-identification`); owner
  direction `research/frontier-42-coxeter-32-owner-authoring-direction.md`;
  step-1 drift review §`finite-reflection-arrangements-and-spherical-coxeter-complexes`
  (VERDICT: no-drift).
- Inputs read: batch-17 manifest, batch-17 step-1 note, batch-17 coverage,
  batch-17 cross-batch input (61 rows), native prose for both pages, plan-spec
  CG-14 entry, scope ledger, owner scope, the six step-1 readiness records (as
  summarised in the note), the consumer scaffolds in batches 18/19/20/23/25/26/29/32,
  and the published/in-run suppliers consumed.
- **Decision: `sufficient`** (receipt:
  `research/frontier-42-coxeter-32-step3a-review-finite-reflection-arrangements-and-spherical-coxeter-complexes.json`).
  No omitted topic, result or example of the intended subject was found; no
  unmet prerequisite is confirmed; the notes in §4 are non-blocking and change
  no scope. No item approval is made here.

## 1. Scope inventory and design mapping

All three planned A contracts are kept with identical ids, kinds and order, on
the design's proof routes; all three promised B companion tasks are realized as
items:

| Design clause (CG-14) | Manifest item |
|---|---|
| Using positive B identify V and V* only now; finite central arrangement, chamber components, spherical chamber closures on the unit sphere, coset face poset {wW_I : I⊊S} in reverse inclusion | `def-cg-finite-reflection-arrangement-and-spherical-chambers` |
| Tits-cone criterion to show U=V*; reflection into C; orbit uniqueness and face stabilizers exclude overlapping interiors; dual basis gives simplicial chamber vertices; coset-face realization is a triangulation of S^(|S|-1) via explicit face maps and finite continuous-bijection compactness | `thm-cg-finite-chamber-tiling-and-coset-face-identification` |
| Unique w0 with N(w0)=Φ_+ from the unique opposite chamber; ℓ(w0)=|Φ_+|, ℓ(w0w)=ℓ(w0)−ℓ(w), w0²=1, conjugation permutes S; every finite W_I has its own longest element with bounded weak-order/growth arguments and no circular dependence | `thm-cg-finite-parabolic-longest-element-and-opposition` |
| Triangulate the circle for I2(5) | `ex-cg-circle-coxeter-complex-of-i2-5` |
| Triangulate the sphere for A3 and display a face residue of a proper parabolic | `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue` |
| Compare the spherical Coxeter complex with the Davis complex for infinite W | `ex-cg-infinite-dihedral-degeneration-versus-davis-complex` (negative degeneration proved locally; Davis-complex construction/comparison deferred to order 1768) |

Plan-spec agrees exactly on ids, orders 1750/1751, category, companion and
`requires` = [`finite-coxeter-diagrams-and-complete-classification`,
`finite-lattice-projections-and-coxeter-chain-labels`]; its item arrays are
empty as for every new page of this run, so the CG-14 contracts are the
item-level authority and no plan text conflicts. The definition is a
conventions item with explicit abstentions (clause (4): no tiling, no
face/triangulation identification asserted), and its `justified_by` target
matches the binding justifications file. Conventions carried: the
identification V≅V* by `b(v)=B(v,·)` is made only on this page; the
positive-definite hypothesis is used exactly where W is finite; the unit-sphere
exponent is notation for the sphere of (V,B); `w_0(I)` is stated with the
hypothesis `W_I` finite placed where used (automatic when W is finite).

## 2. Source coverage — checked, with the residual uncertainty stated

- Davis, *The Geometry and Topology of Coxeter Groups* (author manuscript PDF,
  600 pp), `https://people.math.osu.edu/davis.12/davisbook.pdf` —
  `fetch_verified` 2026-10-07: 4,220,570 bytes, sha256_16 `ccefbb950fdcfce9`.
  Read: §4.6 (Lemmas 4.6.1–4.6.2), Example 5.2.7 and §5.3, Theorems 6.4.3,
  6.6.3 (with Lemmas 6.6.4–6.6.6), §6.8, Theorem 6.12.9, Appendix D.1–D.2.
- Michel, *Lectures on Coxeter groups* (15 pp),
  `https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf` — `fetch_verified`
  2026-10-07: 268,299 bytes, sha256_16 `94731c97ae760919`. Read: §4
  (Proposition 4.6), §5 (Lemmas 5.1–5.2, Propositions 5.4, 5.8), §§5.10–5.12.
- Harvest: 17 rows with per-row dispositions — 12 `included`, 2 `inline`, 3
  `out-of-scope` with reasons and present homes (Tits' Theorem D.1.1 and
  Michel §§5.10–5.12 geometric-representation/Tits material: past batches;
  Michel §§6–7 classification: the finite-diagrams pair). Re-ran
  `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-17.coverage.json --require-destination`:
  1 page, 17 harvested results, 0 errors, 0 warnings.
- Liveness re-checked this session: both URLs HTTP 200; the Davis
  `Content-Length` is 4220570, equal to the recorded fetch size.
- Recorded source erratum (non-blocking, already noted in the batch note and
  coverage): Davis Appendix D.2 Example D.2.1(i)'s “$U$ is the half-plane
  $x_1+x_2\ge0$” contradicts the same appendix's Lemma D.2.3/Corollary D.2.4
  and the direct computation; the scaffold cites the correct clauses and the
  B example proves the correct statement locally.
- Independent spot-checks (honesty statement): the live Davis chapter-4 text
  (Lemma 4.6.1: maximal and unique w0 with ℓ(w0w)=ℓ(w0)−ℓ(w), w0sw0∈S;
  Lemma 4.6.2: an all-descents element forces finiteness and is longest) was
  read via search, confirming the longest-element clauses and the intended use
  against the classification-free finite criterion; and the published
  description of Coxeter complexes (emis.de/ft/51685, “Coxeter-like
  complexes”) — “the poset of faces … the poset of cosets of parabolic
  subgroups ordered by reverse inclusion” and “Δ(W,S) triangulates the sphere
  S^{dim V−1} … the simplicial decomposition of the unit sphere … by the
  reflecting hyperplanes” — confirming the pair's face dictionary and
  triangulation claims and the reverse-inclusion convention. I did not
  re-download the two PDFs; their printed-page locators rest on the recorded
  fetch stamps.

## 3. Dependency, interface and mechanical checks

- Transitive upstream closure of the six items: 145 distinct dependency ids;
  every one is a published item on disk or an in-run scaffold contract, 0
  unresolved; no `deferred-*` and no `proved_here:false` node.
- Clause presence for the load-bearing suppliers: batch-9
  `thm-cg-tits-cone-finite-negativity-and-convexity` (1) `f∈U ⇔ Neg(f)`
  finite (⇒ U=V* in finite type) and (5); batch-9
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` (3)–(6);
  batch-2 `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (1)–(4); batch-4 `lem-cg-dual-action-and-chamber-faces-exist` (2) and
  `lem-cg-reflection-form-invariance-and-rank-two-orders` (3)(iv); batch-7
  root/inversion dictionary (1)–(2) and root-length criterion (3). All exist
  with the hypotheses consumed.
- Consumer interface: pages in batches 18, 19, 20, 23, 25, 26, 29 and 32 cite
  the three items; the recorded cross-batch rows map each need onto stated
  clauses and report no mismatch (e.g. batch 18 uses (1)+(3) tiling and
  stabilizers; batches 23/25 use (1)(i),(iii)+(2); batch 26 uses (1)–(4);
  batch 32 uses w0, its length formulas, the opposition `w↦ww0` and parabolic
  longest elements). No consumer waits on B (0 hits).
- Re-run this session: `manifest-deps` over all 32 manifests — 302 items,
  0 errors; `content-policy --manifest-only` over all 32 manifests — 302
  scoped items, 0 errors, 0 warnings; `item-dependency-levels check` — 302
  items / 64 pages, no cycle or label error. (A single-batch invocation of
  `content-policy` reports spurious `batch-dependency-missing` rows; the
  all-manifest invocation above is the intended usage and is clean.)
- Choice: all six items assert “No Choice is used”; the triangulation is
  finite; no Choice hypothesis is stated or needed, matching the owner
  direction.
- Deferral with live destination: B item (iv) defers the Davis-complex
  construction and comparison to `spherical-parabolic-cosets-and-the-davis-complex`
  (batch 26, order 1768), which `requires` this page; the negative local
  content (U ≠ V*, no antipodal chamber, Φ infinite, ℓ unbounded, chamber
  subdivision infinite) is proved in the item. Structurally a full comparison
  cannot precede the Davis complex, so this is the design's B bullet partially
  discharged here with a resolvable destination, not a scope loss.

## 4. Findings for the owner and Step 3b (non-blocking; scope unchanged)

1. **Flagged supplier defect, outside this pair.**
   `lem-cg-dual-action-and-chamber-faces-exist` (batch 4) clause (3)(ii) for
   m(s,t)=∞ claims the chambers' union is the closed half-plane
   {Δ≥0}. Direct computation gives {Δ>0}∪{0}: the chambers are cones over the
   unit intervals [k,k+1] of the affine line {Δ=1}, whose endpoints are never
   on {Δ=0}; evidence in the item's own strategy, batch-9
   `ex-cg-tits-cone-of-infinite-dihedral-type` (ii), and this pair's B item
   (ii). This pair consumes only clause (2) of that lemma (faces nonempty), so
   it is not blocked; the batch-17 note routes the repair to the owner, but as
   of this session the finding is not yet in `research/DEFECT-LEDGER.md` or
   `research/defect-ledger.jsonl` (both checked).
2. **Consumer citation wording (record only).** Batch-29
   `lem-cg-finite-dihedral-subsystems-and-canonical-roots` says the
   extreme-ray characterization “match[es] the minimality criterion of
   [[thm-cg-finite-parabolic-longest-element-and-opposition]] (2)”. Clause (2)
   supplies the parabolic longest-element properties; the extreme-ray
   characterization is that consumer's own clause (2)/(3) and is derived
   there. Not an unmet prerequisite — flagged for the consumer's Step-3b
   review only.

## 5. Uncertainty

- Step 3a certifies scope only. All six items remain proof contracts; the
  drift review's standing draft obligations (chamber-face triangulation and
  longest-element proofs) are Step-3b work, and no proof-correctness claim is
  made here.
- The only scope evidence not personally re-verified in this session is the
  two sources' printed-page locators; their fetch stamps are machine-recorded
  and two load-bearing facts were independently confirmed as in §2.
- No confirmed omission of the intended subject and no confirmed unmet
  prerequisite; the notes in §4 are non-blocking.

## 6. Decision and receipt

`sufficient` — the three A items and three B items cover every CG-14 clause and
every promised companion task (with the Davis-comparison bullet deferred to
its live later-page home); source coverage is complete with per-row
dispositions and zero checker findings; the dependency closure resolves inside
the declared requires with no unmet prerequisite and no Choice obligation.
Recorded with `node tools/step3-decisions.mjs record-scope --run
frontier-42-coxeter-32 --page
finite-reflection-arrangements-and-spherical-coxeter-complexes --decision
sufficient`.
