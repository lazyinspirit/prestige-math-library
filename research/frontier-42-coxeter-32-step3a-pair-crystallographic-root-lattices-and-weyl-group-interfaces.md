# Step 3a scope review — pair `crystallographic-root-lattices-and-weyl-group-interfaces`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-crystallographic-root-lattices-and-weyl-group-interfaces-f50f13472f1c4c3d`
· design label CG-16.

- A page: `crystallographic-root-lattices-and-weyl-group-interfaces` (order 1758, batch 21, kind A).
- B page: `crystallographic-root-lattices-and-weyl-group-interfaces-examples` (order 1759, batch 21, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-crystallographic-root-lattices-and-weyl-group-interfaces.json`.

## Inputs read

`research/frontier-42-coxeter-32-batch-21.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; `library/coxeter-groups/crystallographic-root-lattices-and-weyl-group-interfaces{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-16 (lines 404–416); `research/plan-spec.json`
(orders 1758/1759, `requires`, companion); `research/coxeter-scaffold/inventory.json` (CG-16)
and `definition-justifications.json` (this definition); `research/frontier-42-coxeter-32-owner-authoring-direction.md`;
`research/frontier-42-coxeter-32-owner-scope.json` and `scope-ledger.json`;
`research/frontier-42-coxeter-32-alpha-step1-drift.md` § `crystallographic-root-lattices-and-weyl-group-interfaces`;
the current statements of every in-run supplier item used by the pair (batches 2, 4, 7, 9, 13)
and of the published suppliers cited by its statements; the consumers of the A page
(`affine-reflections-coroot-translations-and-alcoves` batch 24, `affine-coxeter-diagrams-and-semidefinite-classification`
batch 27) and their coverage of the crystallographic facts they consume.

## 1. Prose design versus scaffold (A page)

The native prose names exactly the three ordered supplier contracts of design §CG-16; the
scaffold keeps their ids, kinds and order and fulfils each contract without narrowing it.

| Design contract (plan §CG-16 and native prose) | Scaffolded item | Coverage |
|---|---|---|
| `def-cg-crystallographic-scaling-coroot-and-lattice` — scaled simple roots `a_s=c_se_s`, coroots `a_s∨=2a_s/B(a_s,a_s)`, integrality of `B(a_t,a_s∨)`, root/coroot lattices as integer spans, weight lattice as dual under the pairing; no promise of a scale for H or all I2(m) | `def-cg-crystallographic-scaling-coroot-and-lattice` (scalings, Cartan numbers `a_st=B(a_s,a_t∨)`, crystallographic integrality, `Q,Q∨,P`, scaled root set `Φ_c`, scaled Cartan matrix `A`; explicit abstentions: no existence claim, nothing asserted for H3/H4/I2(m)∉{2,3,4,6}, no root-system/`Q=ZΦ_c`/non-simple-integrality claims) | complete |
| `lem-cg-integer-pairings-and-allowed-dihedral-labels` — compute `a_st a_ts=4cos²(π/m_st)`, integer negativity + positive definiteness force products 0,1,2,3 hence labels 2,3,4,6; tree root-length ratios with integral matrices; `r_s(Q)=Q`, `r_s(Q∨)=Q∨` | same id: (1) product and sign formula for every scaling; (2) label restriction and length ratios c_s²/c_t²∈{1,2,2⁻¹,3,3⁻¹} with the unique multi-edge; (3) forest realization `c_t=2c_scos(π/m)` giving `a_st=-1`, `a_ts∈{-1,-2,-3}`; (4) reflection formulae, `ρ(W)`-stability, `Q=ZΦ_c`, `Q∨=ZΦ_c∨`, `Q⊆P`, one-sign integral coordinates, integrality of all `B(β,γ∨)` | complete, with integrality/one-sign clauses added locally |
| `thm-cg-crystallographic-finite-type-and-lattice-stability` — combine the complete finite diagram list and allowed labels: precisely A,B,D,E,F4,I2(6) with dual B/C choices admit reduced crystallographic realizations; reuse published root-system/base and Weyl-group results only after checking finiteness, spanning, reducedness, integrality | same id: (1) criterion `∃` crystallographic scaling ⇔ labels⊆{3,4,6} ⇔ components in the Weyl-type list, with H3/H4/I2(5)/I2(m≥7) excluded; (2) `Φ_c` is a reduced crystallographic Euclidean root system, `W(Φ_c)=ρ(W)`, `ρ` an isomorphism on generators, plus the converse for Weyl groups of reduced crystallographic systems with a base; (3) lattice stability restated; (4) the two dual length scalings of the unique label-4/6 edge with `A'=Aᵀ` (B_n/C_n, F4, G2 orientations) | complete |

The published root-system inputs are consumed at the interface only after the local
finiteness/spanning/reducedness/integrality checks, as the design requires. Local additions are
clause-level strengthening (integral pairing of all roots, one-sign coordinates, the converse
direction), not scope change; no designed claim is dropped. The definition-justification edge
is recorded in both directions (`justified_by` the theorem; the theorem depends on the
definition), so the justification is not dangling, and the inventory records
`dependency_cycle: false`.

## 2. B companion versus design

Design B task: "Compare B2/C2 lattices and coroots, derive G2 from I2(6), and show that I2(5)
admits no reduced crystallographic root system with those simple reflections. Record the
different root and weight lattices for A2."

| Design B component | B item | Coverage |
|---|---|---|
| B2/C2 lattices and coroots, dual length choices | `ex-cg-b2-c2-dual-realizations-and-lattices` (transposed matrices, scaled root sets, isometry to standard C2/B2, `Q∨(B2)=Q(C2)`, `Q(B2)=Q∨(C2)`, weight-lattice index 2) | complete |
| G2 from I2(6) | `ex-cg-g2-from-i2-six` (tree scaling `(1,√3)`, `A=[[2,-1],[-3,2]]`, twelve roots with two norms, identification with G2, dual orientation) | complete |
| I2(5) obstruction | `cex-cg-i2-five-is-not-crystallographic` (1) `a_st a_ts=4cos²(π/5)∈(2,3)` non-integral; (2) no reduced crystallographic system has base angle 4π/5, via the rank-two product constraint | complete |
| A2 root and weight lattices | `ex-cg-a2-root-and-weight-lattices` (standard coordinates, `Q∨=2Q`, `P/Q≅Z/3=det A`, contrast with index 2 for B2/C2) | complete |

The B page is a consumption leaf exactly as its prose demands: a plan-wide scan of all 32
current manifests and the published item set finds no page `requires` the B page and no item
outside the pair depends on any of its four items.

## 3. Source coverage

`batch-21.coverage.json` carries entries for both pages, with fetch-verified stamps:

1. J. S. Milne, *Lie Algebras, Algebraic Groups, and Lie Groups*, §7 pp. 66–77 (Definition 7.4
   and RS1–RS3; reflections 7.1–7.3; reducedness 7.8; rank-two table and Prop. 7.16 pp. 71–73;
   Theorem 7.18 pp. 74–75; lattices and fundamental weights 7.22–7.25 p. 76). Reading limit
   recorded: §7 omits standard proofs and was used for scope/conventions, not as complete proof
   evidence.
2. A. W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Ch. II §5 (Prop. 2.48(b)(c) and
   its Schwarz proof, pp. 149–162), Ch. II §6 (Weyl group pp. 163–168), Ch. IV §7 (Props. 4.62,
   4.64 pp. 266–268).
3. M. W. Davis, *The Geometry and Topology of Coxeter Groups*, §6.9 + Table 6.1 (pp. 103–104),
   App. C.1 Theorems C.1.2–C.1.4 and the exclusion proof (pp. 433–438).
4. J. Michel, *Lectures on Coxeter groups*, the Weyl-type statement (p. 3), §5 Prop. 5.14, the
   cosine table and Theorem 5.15 with proof (pp. 12–15).

Dispositions: 36 harvested results across the two pages are dispositioned (A page 5/27
scaffolded, which raises the tool's `coverage-low-yield` advisory). At this review the declared
declines were checked against the pair's contracts and are confirmed reasonable: Milne Props.
7.9/7.10/7.11–7.12 (chamber simple transitivity, invariant inner product, generation by simple
reflections) and Knapp Prop. 2.62 are not needed because the pair proves `W(Φ_c)=ρ(W)` by
conjugation and constructs its own base ingredients; Davis Thm C.1.4 (hyperbolic) and the
Michel connexion-index remark make no statement this pair uses. One harvested result is
deferred: Davis Thm C.1.3 (Euclidean classification) to `affine-coxeter-diagrams-and-semidefinite-classification`,
whose batch-27 manifest exists and consumes this pair (live destination, wired both ways).
The source reports' warnings are respected: the crystallographic integrality is a hypothesis
here, not inferred from general Coxeter classification, and the Coxeter diagram is expressly
not allowed to decide the B_n/C_n root-length data.

## 4. Prerequisite availability

- **Item-dependency closure.** A full transitive scan over the current manifests resolves the
  closure of all seven items: 161 nodes = **131 published items** (all with library `status:
  published`) + **30 scaffolded in-run items** in batches 2 (6), 4 (6), 7 (4), 9 (2), 13 (5)
  and 21 (7). **0 missing, no forward references** (every in-run supplier lies in a batch
  earlier than 21, apart from the two intra-21 edges from the lemma to the definition and from
  the theorem and B items to the pair's own suppliers).
- **Page prerequisites.** `requires` closure of the pair: `finite-coxeter-diagrams-and-complete-classification`
  (run batch 13) and `root-systems-dynkin-diagrams-and-cartan-killing-classification` (published,
  `library/lie-theory/`); their own page closure resolves entirely into the published library
  and run batches 1/2/4/7/9.
- **Supplier clauses spot-checked against the current statements:** `def-hh-coxeter-matrix-word-group-and-length`
  (presented group, universal property, length/reduced words); `def-cg-real-coxeter-form-and-reflection`
  (form `B(e_s,e_t)=-cos(π/m)`, reflections `r_a`); `lem-cg-reflection-form-invariance-and-rank-two-orders`
  (rank-two positive definiteness and the rank-two plane); `def-cg-canonical-reflection-homomorphism`
  (`ρ`, root system `Φ`); `thm-cg-root-sign-and-simple-reflection-positivity` (one-sign roots in
  the real cone); `thm-cg-root-length-criterion-and-faithfulness` (`ρ` injective); batch-13
  `def-cg-coxeter-diagram-components-and-finite-type`, `lem-cg-positive-definite-diagram-exclusions`,
  `thm-cg-finite-type-positive-definite-criterion`, `thm-cg-finite-coxeter-classification-including-h-and-dihedral`;
  published `def-reduced-crystallographic-euclidean-root-system`, `def-coroot-and-dual-root-system`,
  `def-weyl-group-of-a-root-system`, `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
  `def-positive-system-and-base-of-simple-roots`, `def-cartan-matrix-of-a-based-root-system`,
  `thm-rank-two-root-system-classification` (i) and (iv), `thm-classification-of-irreducible-reduced-crystallographic-root-systems`,
  `prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types`, `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
  `def-fundamental-weights`, `ex-classical-root-systems-in-euclidean-coordinates`, and the four
  trigonometry items used for the cosine values and monotonicity. Each clause the pair consumes
  is stated by its supplier with the needed hypotheses.
- **Confirmed unmet prerequisites: none.** Residual uncertainty, recorded honestly: this is a
  statement/manifest-level check of the current scaffold; the supplier proofs and this pair's
  own proofs are Step 3b authoring work and are not certified here. Nothing outside the
  published library and the current scaffold is required.
- **Consumers.** The A page is required by `affine-reflections-coroot-translations-and-alcoves`
  (batch 24) and its items are consumed by both affine pairs (batches 24, 27) for the finite
  type list, the scalings and dual orientations, and `Q∨` stability; those planned uses are
  within the supplied clauses. No consumer uses the weight lattice `P` in the degenerate
  (singular `B`) regime.

## 5. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-21.pages.json` | exit 0; 7 items, 0 errors |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-21.coverage.json --require-destination` | exit 0; 2 pages, 36 harvested results, 0 errors, 1 warning (`coverage-low-yield`, reviewed in §3) |
| source stamps | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-21.coverage.json` | exit 0; 7/7 source entries fetch-verified, 0 drops |
| dependency scan | ad-hoc script over all 32 `batch-*.pages.json` + `items/` | 161/161 closure nodes resolve (131 published + 30 in-run); 0 missing; no B-page/B-item consumer; no forward reference |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 1, only run-wide `[frontier-selection]` rows (one per current manifest item, including all seven here) because plan pages of this run carry empty item arrays; no `undeclared-prereq`, cycle or forward-ref finding names a batch-21 item; informational `[redundant-prereq]` rows concern the affine pages only |
| drift review | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift` for this pair; no batch-21 entry in `step1-blockers.json` |

## 6. Non-blocking observations (no scope action)

1. **Definition generality versus the weight-lattice sentence.** The definition states "No
   definiteness or nondegeneracy of $B$ is assumed" and then "P is a lattice because $Q^\vee$
   has an R-basis". With singular `B` (e.g. `S={s,t}, m(s,t)=∞`, `c_s=c_t=1`: the scaling has
   `a_st=a_ts=-2` integral, and `P={λ: λ_s-λ_t∈½Z}` is a union of lines, not a discrete
   subgroup), so the "P is a lattice" justification only holds in the nondegenerate case. This
   is a statement-precision point for the Step 3b author (state the nondegeneracy/positive
   definiteness hypothesis with the lattice declaration, or restrict that sentence to the
   nondegenerate case). It is recorded here as uncertainty for the owner and item review, not as
   a scope gap: the lattice content required by the design and by every current consumer (Q, Q∨,
   their stability and `Q⊆P`) is present and unaffected, and no run item consumes `P` for
   singular `B` (checked across the statements of batches 24 and 27).
2. **Plan metadata.** `plan-spec.json` pages for this run carry empty item arrays (run-wide),
   so `validate-plan --run` reports a `[frontier-selection]` row for each of the 302 manifest
   items; this is a run-level plan-declaration condition, identical for every pair, not a
   batch-21 gap. The Step-1 projection's `undeclared-prereq` pattern pointed through published
   inner-product items to `hilbert-space-geometry-and-riesz-representation`; that page and all
   affected published items exist in the library, so there is no availability gap, only plan
   bookkeeping outside this pair's ownership.
3. This review assessed scope only; statement truth and proof correctness at item level remain
   Step 3b work, and the notes above are handed over as such.

## 7. Decision

**`crystallographic-root-lattices-and-weyl-group-interfaces`: sufficient.** The planned
definitions (crystallographic scalings, coroots, Cartan numbers, root/coroot/weight lattices,
scaled root set), results (product formula, label restriction to {2,3,4,6}, forest
realizations, reflection stability, finite-type criterion, reduced realization with
`W(Φ_c)=ρ(W)` and its converse, dual B/C and F4/G2 length choices) and examples (B2/C2 duality
and lattices, G2 from I2(6), the I2(5) obstruction, A2 root versus weight lattice) adequately
cover the intended subject of CG-16: "which finite Coxeter systems arise as Weyl groups while
preserving the distinction between a Lie root system and an arbitrary real reflection system".
No omitted topic or result within the design or its sources was found, no enrichment or merger
is recommended, no unmet prerequisite was confirmed, and the recorded deferral destination is
live. Owner action: none required for scope; proceed.
