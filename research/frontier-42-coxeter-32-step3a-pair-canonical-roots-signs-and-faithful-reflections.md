# Step 3a scope review — pair `canonical-roots-signs-and-faithful-reflections`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-canonical-roots-signs-and-faithful-reflections-dcc63b6f032445fa` · design label CG-04.

- A page: `canonical-roots-signs-and-faithful-reflections` (order 1730, batch 7, kind A).
- B page: `canonical-roots-signs-and-faithful-reflections-examples` (order 1731, batch 7, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-canonical-roots-signs-and-faithful-reflections.json`.

## Inputs read

`research/frontier-42-coxeter-32-batch-7.pages.json` (5 A + 3 B items, full statements and
strategies), `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`;
`library/coxeter-groups/canonical-roots-signs-and-faithful-reflections{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-04 (lines 181–199); `research/plan-spec.json`
(orders 1730/1731, `requires`); `research/frontier-42-coxeter-32-scope-ledger.json`;
`research/frontier-42-coxeter-32-owner-scope.json` and `-owner-authoring-direction.md`;
`research/frontier-42-coxeter-32-alpha-step1-drift.md` § `canonical-roots-signs-and-faithful-reflections`;
`research/coxeter-scaffold/inventory.json` (CG-04), `classical-source-report.md` §"Roots, chamber
half-spaces and faithfulness", `independent-audit.md`;
the current statements of every cross-batch supplier used (batches 2 and 4), the published
suppliers, all 32 batch manifests for the consumer scan, and the deferral destinations
(batches 9, 13); `/tmp/b25src/davis.txt` §4.8 and Appendix D for a spot re-read of source
statements. Sibling receipt `…-step3a-review-bruhat-subword-order-and-lifting.json` (a consumer
page) was read as context.

## 1. Prose design versus scaffold (A page)

The plan §CG-04 names five local supplier contracts; the native prose page names the same five
in the same order, and the scaffold keeps all five ids and kinds with the designed proof routes
(dependency levels 7, 8, 9, 10, 11 — a prerequisite order).

| Design contract (plan §CG-04 / native prose) | Scaffolded item | Coverage of the contract |
|---|---|---|
| `lem-cg-rank-two-prefix-and-chamber-length-induction` — factor `w=ud` via the HH-11 parabolic theorem; Davis 4.8.3 simultaneous `(Pₙ)`/`(Qₙ)` with both implications from the explicit rank-two half-space alternatives; finite dihedral prefix `u_m` is the only double-descent element, none in infinite type | same id (lemma): (1) rank-two half-space alternative and all alternating-word order/length facts, (2) the induction `(P₀)`–`(Qₙ)` with the two implication proofs stated as part of the claim, (3) canonical factorisation, (4) chamber-descent equivalence | complete |
| `thm-cg-root-sign-and-simple-reflection-positivity` — every root in `V₊∖{0}` or `−V₊∖{0}`, exclusive; `r_s` permutes `Φ₊∖{e_s}` and sends `e_s` to `−e_s`; no crystallographic or root-system axiom substituted | same id (theorem): (1) cone sign criterion, (2) root sign partition with the `w⁻¹C°` criterion, (3) simple-reflection action | complete |
| `thm-cg-root-length-criterion-and-faithfulness` — `ℓ(ws)>ℓ(w) ⇔ ρ(w)e_s∈Φ₊`; injectivity of `ρ` for every finite-rank Coxeter matrix, indefinite or degenerate `B` included | same id (theorem): (1) two-sided length criterion, (2) disjoint chambers / `C°` prefundamental, (3) faithfulness of `ρ` and of the dual action plus the last-letter negative root clause | complete (stronger: dual action faithfulness stated) |
| `def-cg-geometric-inversion-set` — `N(w)=Φ₊∩ρ(w)⁻¹Φ₋`; explicit left/right convention (suffix roots for `N(w)`, prefix roots for `N(w⁻¹)`), no finiteness asserted in the definition | same id (definition): (1) definition, (2) elementary identities and step recursion, (3) reduced-word convention with the finiteness/independence explicitly deferred to the justifier | complete; justification bound to `thm-cg-root-inversion-formulas-and-strong-exchange` as `definition-justifications.json` requires |
| `thm-cg-root-inversion-formulas-and-strong-exchange` — `|N(w)|=ℓ(w)`, suffix/prefix root lists without repeats, `±α ↔ r_α` dictionary via faithfulness, strong exchange for `t∈T` with deletion of one letter | same id (theorem): (1) root-reflection dictionary `t_α` (independence, `ρ(t_α)=r_α`, conjugation, `t_{−α}=t_α`, bijections `{±α}→T` and `Φ₊→T`), (2) inversion formula and suffix/prefix lists, (3) strong exchange with uniqueness of the deleted index and `t=r_i` | complete |

No item of the pair claims content the coverage defers elsewhere: the Tits cone and its strata
(Davis App. D.2), chamber-point stabilisers (B&B Lemma 4.5.1) and discreteness (D.1.3/D.1.4)
are explicitly not asserted here. Provenance is recorded per item (`ai-altered` statements for
four, `literature-derived` for the length-criterion theorem and the definition; proofs
`ai-altered`, definition `not-applicable`).

## 2. B companion versus design

Design B tasks (plan §CG-04 and the native example page): roots/inversions/chamber images in
I₂(5), A₂ and infinite dihedral type; indefinite form does not invalidate faithfulness;
arbitrary vectors need not have one sign. One item per task, nothing else; each states its
hypotheses and verifies its computation:

| Design B component | Scaffolded example |
|---|---|
| roots, inversion roots, chamber images in I₂(5), A₂ and infinite dihedral type | `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` (`m∈{3,5,∞}`, explicit `Φ₊`, `N`-sets, wall separation) |
| indefinite form does not invalidate faithfulness | `ex-cg-indefinite-form-admits-faithful-reflection-representation` (rank-three `(2,1)` indefinite `B`, degenerate rank-two comparison) |
| arbitrary vectors need not have one sign | `ex-cg-mixed-sign-vector-is-not-a-root` (`e_s−e_t` fails sign and norm tests; `m=3,∞` instances) |

The B page is a consumption leaf as its prose requires: no page's `requires` names it and no
item outside the pair depends on any B id; all its items' declared deps point backwards (batch
7 A items, batch 2/4 scaffolds, published items), and none of the three examples depends on
another B item.

## 3. Source coverage

`batch-7.coverage.json` records one page (the A page) with two fetch-verified sources — Davis,
*The Geometry and Topology of Coxeter Groups* (§4.2 pp. 45–47, §4.8 pp. 54–57, §4.9 pp. 57–59,
App. D.1 pp. 439–442, App. D.2 pp. 442–443; sha256_16 `ccefbb950fdcfce9`, 600 pp.) and
Björner–Brenti, *Combinatorics of Coxeter Groups* (§1.3–1.4 pp. 11–18, §4.2 pp. 93–97, §4.4
pp. 101–105, §4.5 p. 105 statement only; sha256_16 `ad1e7d9260127bb2`, 370 pp.). The full-text
bodies are marked read, figures/exercises excluded. I re-ran the fetch check: 2/2 fetch-verified
and 2/2 resolved. A spot re-read of `/tmp/b25src/davis.txt` §4.8 (definition of
"prefundamental", Property (P), Remark 4.8.1, Lemma 4.8.3 with `(Pₙ)`/`(Qₙ)` and both
implication proofs) and Appendix D (Theorem D.1.1, Lemma D.1.5, the `w C°∩C°≠∅⇒w=1` route)
matches the scaffold's item 1/2/3 claims.

35 harvested results are dispositioned 18 `included`, 5 `inline`, 9 `deferred` and 3
`out-of-scope` (tally consistent with the batch note). Each `included` result maps to an item
of this pair that states it; the 5 `inline` results (B&B Lemma 4.2.2, Lemma 4.2.4, Prop 1.4.2,
Cor 4.2.6, the `n/η` machinery) are used inside items 1–3/5 without being separately claimed.
All 9 deferrals name live destinations in this run: Tits cone, interior/local finiteness and
chamber stabilisers → `tits-cones-chambers-and-parabolic-stabilizers` (its three items claim
exactly these); discreteness of `ρ(W)`/`ρ*(W)` → `finite-coxeter-diagrams-and-complete-classification`
(`thm-cg-finite-type-positive-definite-criterion` (3)); the signed action, descent letters,
deletion/support and parabolic decomposition → `coxeter-presentations-exchange-and-reduced-word-theorems`
(`thm-hh-…(1),(2),(3),(4)` and `thm-hh-parabolic-…`); the representation descent and rank-two
orders → `real-forms-and-reflection-geometry` (items 3–4 of batch 4). Corollary D.1.4's virtual
torsion-freeness (Selberg) is recorded as consumed by no planned item; that is an explicit
coverage note, not an orphaned claim of this pair. The three `out-of-scope` results (Cayley-graph
wall counting; the pre-Coxeter warning; reflection subgroups) each carry a reason tied to this
pair's contracts and none is consumed by an item here.

## 4. Intended role in the library

The pair is a core geometric supplier. Four pages declare it in their `requires`:
`tits-cones-chambers-and-parabolic-stabilizers` (1734), `parabolic-subgroups-and-double-coset-geometry`
(1736), `bruhat-subword-order-and-lifting` (1740) and `coxeter-artin-and-hecke-interfaces` (1744).
At item level, outside this pair: the root-sign theorem is consumed in 12 further pages, the
root-length criterion in 19 further pages, the inversion-formula/strong-exchange theorem in 12
further pages and the inversion-set definition in 10 further pages (e.g. finite chamber tiling;
weak-order and Bruhat items; finite-type criterion; invariant gradings; affine classification;
sortable/Cambrian items). I verified the load-bearing uses against the current statements of
those consumers where they cite supplier clauses directly —
`lem-cg-bruhat-right-exchange-and-augmentation` derives its right-handed strong exchange from
item 5(3); `thm-cg-finite-type-positive-definite-criterion` uses item 3(3) for the isolation of
identity; `lem-cg-finite-rank-two-inversion-set-recognition` uses item 4(2) and item 3(1); the
tits-cones and parabolic items use the sign partition and inversion formula as stated. Every
used clause (parity/`ℓ(ws)=ℓ(w)±1`, minimal coset representatives and length additivity,
ambient dihedral reducedness, root-reflection dictionary, `|N(w)|=ℓ(w)`) is stated by the
scaffolded supplier the consumer cites.

## 5. Prerequisite availability

- Page prerequisites: `coxeter-presentations-exchange-and-reduced-word-theorems` (batch 2,
  order 1708) and `real-forms-and-reflection-geometry` (batch 4, order 1724) are both current
  in-run scaffolds with 6 items each; the pair's order 1730 is after both. The drift review
  gives `no-drift` ("No prerequisite gap").
- Dependency resolution: every declared dep of the 8 items resolves — to in-run scaffold items
  of batches 2 and 4 (12 distinct supplier ids outside the pair: 6 in batch 2, 6 in batch 4;
  none in a later batch), to this pair's own earlier items, or to published on-disk items (all
  reported `status: published`). A transitive scan over the full declared closure found **0**
  ids absent from both the published library and the current scaffold.
- The exact claims this pair consumes from the two prerequisite scaffolds were read in their
  current statements: batch 2 — presented group/universal property/length/reduced words and
  parabolics; the dihedral recurrence with exact orders, ambient reducedness of alternating
  words and the `η`/prefix-reflection machinery (clauses 3,4,6,7); exchange/deletion/parity and
  signed-action faithfulness (clauses 1–4); parabolic intrinsic length, minimal coset
  representatives with length additivity and `ℓ(w⁻¹)=ℓ(w)` (clauses 2–3). Batch 4 — the
  Coxeter form and reflection formula; reflection involution/`B`-invariance, `P^⊥` fixity and
  (finite `m`) `V=P⊕P^⊥`, rank-two `A=r_sr_t` matrix/orders; the canonical homomorphism and
  root system; unit root norms and conjugation; the dual action, chambers/faces/hyperplanes;
  dual-basis functionals, face non-emptiness and the full rank-two dual tiling including the
  infinite affine-line picture.
- **Confirmed unmet prerequisites: none.** Residual uncertainty, recorded honestly: this
  verification is at the current scaffold-statement level; no `items/<id>.md` exists yet for
  any of the 17 in-run ids involved (this pair's 5 items plus the 12 suppliers), so they are
  "scaffolded, proofs pending Step 3b", not certified. Nothing outside the published library
  and the current scaffold is required.

## 6. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-7.pages.json` | exit 0; 8 item(s), 0 normalized, 0 error(s) |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-7.coverage.json --require-destination` | exit 0; 1 page, 35 results, 0 error(s), 0 warning(s) |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-7.coverage.json` | exit 0; 2/2 fetch-verified, 2/2 resolved |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; order acyclic/consistent; for this page only the informational `[redundant-prereq]` note (the presentations pair is also reached through the real-forms page) |
| dependency + consumer scan | ad-hoc script over all 32 `batch-*.pages.json` and `items/` | 0 unresolved ids; no page requires the B page; no item outside the pair depends on a B item; no dep points to a later batch |
| drift | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift`; no batch-7 entry in `step1-blockers.json` |

## 7. Non-blocking notes (documentation, no scope action)

1. The independent audit's earlier, explicitly indicative recommendation section
   (`classical-source-report.md` §"Concrete A/B extension recommendations", item 1) mentions
   further B components (a verified false statement that every Coxeter root system is
   crystallographic; an indefinite rank-three matrix) and "wall stabilizers" on the A side. The
   audited design of record (inventory/native prose/plan §CG-04) fixes three B examples and
   defers wall stabilisers to the Tits-cones pair; the scaffold matches it, the indefinite
   rank-three witness is present, and the non-crystallographic theme is carried by the I₂(5)
   example and by the crystallographic pair. Recorded for the owner; no omission was found
   inside the design of record.
2. Item 2's strategy writes "the `f_r` and `f_r ≥ 0`" as shorthand for the batch-4 supplier's
   dual-basis functionals, which satisfy `f_r(e_s)=δ_{rs}≥0`, i.e. lie in `C`. Faithful in
   content, loose in notation.
3. The batch-7 notes carry a typo `thm-hh-coexeter-exchange-deletion-and-faithfulness`; the
   manifest id is correct.
4. This review assessed scope only; proof correctness is out of role and is not asserted.

## 8. Decision

**`canonical-roots-signs-and-faithful-reflections`: sufficient.** The planned definitions (the
geometric inversion set `N(w)` with an explicit justifier), results (rank-two half-space
alternative with the `(Pₙ)`/`(Qₙ)` chamber-length induction; root sign coherence and
`r_s`-positivity; the root-length criterion with faithfulness of `ρ` and of the dual action;
the inversion formula `|N(w)|=ℓ(w)` with the `±α ↔ r_α` dictionary and strong exchange) and
examples (I₂(5)/A₂/infinite-dihedral computations; indefinite form; mixed-sign non-root)
adequately cover the intended subject of CG-04 and serve its declared consumers. Source
coverage is fetch-verified with all deferral destinations live, no omitted topic within the
design or its sources was found, no enrichment or merger is recommended, and no unmet
prerequisite was confirmed (residual: supplier proofs pending Step 3b). Owner action: none
required for scope; proceed.
