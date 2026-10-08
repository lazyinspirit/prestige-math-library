# Step 3a scope review — pair `coxeter-descents-poincare-polynomials-and-growth`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-coxeter-descents-poincare-polynomials-and-growth-1d403ce0f53952a2` · design label CG-20.

- A page: `coxeter-descents-poincare-polynomials-and-growth` (order 1766, batch 25, kind A, 6 items).
- B page: `coxeter-descents-poincare-polynomials-and-growth-examples` (order 1767, batch 25, kind B, 3 items).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-coxeter-descents-poincare-polynomials-and-growth.json`.
  Re-verify with `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope`.

## Inputs read

`research/frontier-42-coxeter-32-batch-25.pages.json` (all 6 A and 3 B items: statements,
strategies, `deps`, provenance), `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`;
`library/coxeter-groups/coxeter-descents-poincare-polynomials-and-growth{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-20 (lines 465–480); `research/plan-spec.json`
(orders 1766/1767, `requires`); `research/frontier-42-coxeter-32-scope-ledger.json`,
`-owner-scope.json` (pair selected, no pair-specific owner direction), `-owner-authoring-direction.md`
(no CG-20 row), `research/frontier-42-coxeter-32-cross-batch-dependencies.json`;
`research/frontier-42-coxeter-32-alpha-step1-drift.md` §`coxeter-descents-poincare-polynomials-and-growth`;
`research/coxeter-scaffold/inventory.json` (CG-20), `definition-justifications.json`,
`independent-audit.json`, `math-checks/degree-poincare-proof-route.md` and
`math-checks/finite-degree-poincare-certificates.json` + `finite-degree-poincare.py`;
the current statements of every in-run supplier cited (batches 2, 4, 7, 9, 10, 13, 17, 20, 23);
the 36 published supplier items on disk; all 32 batch manifests for the consumer and
forward-dependency scans.

## 1. Prose design versus scaffold (A page)

The design of record is plan §CG-20 (five local supplier contracts) plus the native A-page prose.
All five contracts are present with the designed ids and kinds, in design order, and the scaffold
adds exactly one shared local lemma that the design's own exceptional-certificate contract requires
("the chamber stabilizer theorem identifies its orbit with `W/W_T`, and generator Schreier distance
equals minimal coset length by parabolic factorization"). Plan-spec rows 1766/1767 carry empty
`items` arrays, so the manifest is the item-level source; the batch notes record no plan/design
conflict. Dependency levels: A items 7, 18, 13, 19, 20, 21; B items 20, 22, 22.

| Design contract (plan §CG-20 / native prose) | Scaffolded item | Coverage of the contract |
|---|---|---|
| `def-cg-length-series-descent-generating-polynomial` — `P_A(t)=Σ_{w∈A}t^{ℓ(w)}` as a formal series with finite coefficients (finite `S`); multivariate descent polynomial only for finite `W`; spherical subsets by finite `W_I`; formal inversion needs constant coefficient one, not convergence | same id (definition): (1) `P_A` with fiber-finiteness and unit/inverse conventions, (2) spherical subsets and the descent-class series `D^J_I`, (3) multivariate descent polynomial with the substituting evaluations, (4) explicit list of unasserted properties; justifier recorded | complete |
| `thm-cg-parabolic-growth-factorization-and-rationality` — `P_W=P_{W^I}P_{W_I}`; descent inclusion–exclusion; Steinberg sum with a rigorous rational-function interpretation; every element has finite descent parabolic, established explicitly; the finite sum proves rational growth | same id (theorem): (1) finite descent parabolics and the finite/infinite dichotomy with `D^S_S`, (2) two-sided parabolic factorization and reducible products, (3) descent inclusion–exclusion over all `I⊆J⊆S`, (4) the two-case Steinberg identity with formal inverses, (5) the recursion and the induction proving `P_W∈Q(t)` | complete (form sharpened; see corrections) |
| `lem-cg-classical-type-poincare-products` — construct the A/B/D permutation and signed-permutation models and identify them with the canonical diagrams; quotient distances 0..n for `A_n`, 0..2n−1 for `B_n`, {0..n−2,n..2n−2}∪{n−1 twice} for `D_n`; `D_2=A_1×A_1`, `D_3=A_3`; generator step bound plus attaining words prove minimality; `I_2(m)` path `[m]_t`; parabolic factorization gives the products with no source quotient table | same id (lemma): (1) the four model identifications via the isometry `e_s↦α_s/‖α_s‖`, (2) the orbit, Schreier graph and distance function for each type with explicit attaining words, (3) the product formulas and coincidences, with the `P_{D_3}=P_{A_3}` compatibility check | complete |
| `lem-cg-exceptional-parabolic-orbit-length-certificates` — dual fundamental vector with zero set `T`; orbit `=W/W_T`; Schreier distance = minimal coset length; independent check of all exact coordinates, generator edges, involution reversals, attaining words and distance potentials; the six quotient graphs `E_6/D_5(27)`, `E_7/E_6(56)`, `E_8/E_7(240)`, `F_4/B_3(24)`, `H_3/I_2(5)(12)`, `H_4/H_3(120)`; exact `Q`, `Q(√2)`, `Q(φ)`; coefficientwise product identity with the independently proved degrees | `lem-cg-fundamental-weight-orbit-and-schreier-distance` (the shared orbit/stabilizer/minimal-coset-length/Schreier-distance/quotient-formula lemma) plus `lem-cg-exceptional-parabolic-orbit-length-certificates` (1)–(3) reproducing the six certificates and the degree comparison | complete |
| `thm-cg-finite-poincare-exponent-product-and-reciprocity` — `P_W(t)=∏[d_i]_t=∏(1+⋯+t^{e_i})` including `H_3,H_4`, arbitrary `I_2(m)` and reducible types; degrees independently determined (Molien/Jacobian/regular Coxeter eigenvectors), no circular entry; reducible lengths add and Hilbert products multiply; `t^{|Φ_+|}P_W(t^{-1})=P_W(t)` from the longest-element bijection; neither implication used in the other | same id (theorem): (1) the product over the classification with classical and exceptional cases separated, (2) reciprocity from `w↦w_0w` alone, (3) the independence clause fixing the logical order (degrees → product; reciprocity separate) | complete |

Two scope-preserving corrections of stale design text are recorded in the batch notes §2 and
visible in the scaffold; neither narrows a promised claim:

1. The design displays the finite Steinberg formula literally as a sum over spherical `I` with
   `1/P_W(t^{-1})`. That form is false for infinite `W`: for the `(2,3,\infty)` system the
   spherical-only sum is `1-3+2=0` at `t=0`, while `1/P_W(t^{-1})` has constant term `1`. The
   scaffold states the source-verified
   two-case identity over all `K⊆S` with formal inverses (Björner–Brenti Corollary 7.1.4(i)–(ii),
   Proposition 2.3.2(ii); Davis Corollary 17.1.5(i)–(ii)), retaining the design's finite-case
   display as the equivalent rewritten form. The B companion tests both cases.
2. The design's `D_n` quotient data is realized with the *terminal node* `s_n` deleted; the
   scaffold fixes this explicitly in `lem-cg-classical-type-poincare-products` (2)(c) and in the
   certificate's exact deleted-node data.

## 2. B companion versus design

The B page is a consumption leaf: its prose restricts it to the A page's theory and prerequisite
closure, its only page prerequisite is the A page, and no item of the B page depends on another B
item. All three designed B tasks are realized:

| Design B task (plan §CG-20, B companion) | Scaffolded example |
|---|---|
| derive `[n]_t!` for `S_n`, `∏[2i]_t` for `B_n` and the `D_n` product by explicit insertion | `ex-cg-classical-poincare-products-by-insertion` (letter insertion, sign insertion along the `B_n` path, even-sign `D_n` cycle; bases `S_2,S_3,S_4,B_1,B_2,D_2,D_3,D_4` with coefficient and order checks) |
| test reciprocal identities | `ex-cg-a2-descent-inclusion-exclusion-and-reciprocity` (the whole `A_2=S_3` package: lengths, descent classes, Steinberg identity, degree product, palindromicity) |
| compute infinite dihedral growth `(1+t)/(1−t)` and show why an infinite group has no polynomial longest-element symmetry | `ex-cg-infinite-dihedral-growth` (growth series, infinite Steinberg identity, failure of `t^NP_W(t^{-1})=P_W(t)` for every `N`, rank-one comparison) |

## 3. Source coverage

`batch-25.coverage.json` records three fetch-verified sources for the A page (Björner–Brenti,
*Combinatorics of Coxeter Groups* §7.1 and §2.3/2.4/3.2/8.1–8.2; Davis, *The Geometry and
Topology of Coxeter Groups* Ch. 4.6–4.7 and 17.1; Knapp, *Lie Groups Beyond an Introduction*
Ch. II for the classical coordinate models) and the same three for the B page. I re-ran the
checks: `coverage-checklist` reports 2 pages, 31 harvested results, **0 errors, 1 warning** —
the advisory `coverage-low-yield` (3/25 A-page results take a direct item destination); every
other row is `included` with an item destination, `already-published`, or `out-of-scope` with a
written reason. `source-fetch-check` reports **6/6 fetch-verified, 6/6 resolved** (3 unique URLs).

Declined rows and their reasons: the Möbius/nerve formula (B&B Proposition 7.1.7) is declined
because the run's route computes rationality from Corollary 7.1.4(ii) and the denominator
recursion directly and no item of this pair consumes the nerve; Bott's affine formula and Davis
Chapters 17.2–17.4 (affine and HM growth) are declined because affine enumeration belongs to the
affine-crystallographic pairs of this track. None of these is a promise of the design, so none is
an omission within scope; Alpha should confirm the declines (advisory warning) rather than
treating them as scope gaps.

## 4. Intended role in the library

Plan §CG-20 makes this the track's descents/growth pair: formal length enumeration, parabolic
factorization and descent inclusion–exclusion, and the finite-type product/reciprocity theory.
A consumer scan over all 32 batch manifests finds **no page whose `requires` names the A page
except its own B page**, and **no item outside the pair depends on any of the nine ids**; the
pair's ids appear nowhere in `items/` or `library/` except its own prose page. The pair is a
designed leaf whose only consumer is its companion, and both pages are in the current frontier
gate list. The drift review gives `VERDICT: no-drift` for order 1766 with "No prerequisite gap";
its `Remaining` line ("rational-growth and finite certificate proofs remain draft obligations")
is exactly the Step 3b authoring burden, not a scope defect.

## 5. Prerequisite availability (unmet-prerequisite audit)

All 62 distinct declared dependencies of the nine items resolve with **0 ids absent from both the
published library and the current scaffold**: 6 are same-pair items, 36 are published on-disk
items (all `status: published`, verified), and 20 are in-run scaffold items of batches 2, 4, 7, 9,
10, 13, 17, 20, 23 — every one an earlier batch; the forward-dependency scan is empty. Every
`[[...]]` link in all nine statements and strategies resolves to a declared dep or to the single
same-page forward link (A1→A2, declared). `manifest-deps` reports 9 items, 0 normalized,
0 errors.

Spot-read of the load-bearing supplier clauses confirms the citations exist and are adequate at
the declared-statement level: batch 2 `thm-hh-parabolic-minimal-representatives-and-length-additivity`
(3)(4) (unique minimal coset representatives, length additivity both sides, type-`A` inversion
number); batch 17 `thm-cg-finite-parabolic-longest-element-and-opposition` (1)(ii)–(iii),(2)
(`ℓ(w_0w)=ℓ(w_0)−ℓ(w)`, `|Φ_+|=ℓ(w_0)`, `w_0(I)Iw_0(I)^{-1}=I`); batch 23
`lem-cg-full-descent-element-characterizes-finite-type` (2) and
`thm-cg-weak-order-meet-semilattice-and-finite-lattice` (3)(4); batch 9
`thm-cg-dual-chamber-intersections-and-point-stabilizers` (4) (point stabilizer `=W_{S(f)}`);
batch 10 `def-cg-parabolic-quotient-and-two-sided-minima` (2); batch 4
`lem-cg-reflection-form-invariance-and-rank-two-orders` (2),(3)(iv); batch 7
`thm-cg-root-length-criterion-and-faithfulness` (3); batch 13
`thm-cg-finite-coxeter-classification-including-h-and-dihedral` (1),(2),(4); batch 20
`thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` (2) (complete degree tables for
`A/B/D/I_2(m)` and all six exceptional types, including `D_n: 2,4,…,2n−2,n`) and
`def-cg-coxeter-basic-degrees-and-graded-coinvariants`.

The certificate cited by `lem-cg-exceptional-parabolic-orbit-length-certificates` exists at the
stated path and contains, for each of the six types, the exact field, diagram, deleted node, orbit
size, `27/56/240/24/12/120` states with coordinates + applied words + distances, the generator
edges, the Coxeter matrix and characteristic polynomial, the degree multisets, and seven checks
per case all true. I re-ran `finite-degree-poincare.py`: all six cases PASS. I also recomputed the
six quotient polynomials independently as `P_W/P_{W_T}` from the degree multisets of the batch-20
theorem: they equal the recorded/claimed `[9](1+t^4+t^8)`, `[14](1+t^5)(1+t^9)`,
`[30](1+t^6)(1+t^{10})(1+t^{12})`, `[8](1+t^4+t^8)`, `[6](1+t^5)`, `[30](1+t^6)(1+t^{10})`, with
matching degrees and `t=1` values equal to the orbit sizes. As a rank-4 sanity check I enumerated
the cosets directly: `B_4` deleting the terminal node `s_1` gives `W_T≅B_3`, orbit size 8 and
distances 0..7 once each; `D_4` deleting `s_4` gives `W_T≅D_3`, orbit size 8 and distances
`{0,1,2,3,3,4,5,6}` — both match `lem-cg-classical-type-poincare-products` (2)(b),(c).

**Confirmed unmet prerequisites: none.** Residual uncertainty, stated honestly: every in-run
supplier is still a scaffold (no `items/<id>.md` exists for any of the 20 in-run ids), so this
audit is at the current declared-statement level and the supplier proofs are Step 3b work; the
AC premise of A5/A6 is declared and carried through `def-axiom-of-choice` while A1–A4 and the B
examples declare no choice. Run-wide (not this pair's) condition: the run-scoped
`validate-plan research/plan-spec.json --run frontier-42-coxeter-32` fails at `frontier-selection`
for every current manifest item because the selected plan pages carry empty `items` arrays
(batch-25 items flagged identically to every other batch); the page-level invocation is OK apart
from the advisory `redundant-prereq` note that this A page's `requires` of
`finite-reflection-arrangements-and-spherical-coxeter-complexes` is already reachable transitively
through `finite-coxeter-invariants-and-coinvariant-gradings` → `bipartite-coxeter-elements-and-ordered-root-complexes`
→ `finite-reflection-length-and-orthogonal-moved-spaces`;
the `requires` list is plan-fixed and neither condition is caused by this pair.

## 6. Checks actually run

| Check | Command | Result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-25.pages.json` | 9 items, 0 normalized, 0 errors |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-25.coverage.json` | 2 pages, 31 results, 0 errors, 1 advisory `coverage-low-yield` |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-25.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| plan (page level) | `node tools/validate-plan.mjs research/plan-spec.json` | OK; one advisory `redundant-prereq` on the A page |
| plan (run level) | add `--run frontier-42-coxeter-32` | FAIL at `frontier-selection` for all 302 manifest items (empty plan `items` arrays; run-wide, pre-existing) |
| certificate | `python3 research/coxeter-scaffold/math-checks/finite-degree-poincare.py` | six cases PASS; certificate JSON byte-identical after the run |
| quotient identities | independent recomputation of `P_W/P_{W_T}` from degree multisets | six exact matches (see §5) |
| rank-4 sanity | ad-hoc BFS over signed/even-signed permutations (`/tmp/step3a/check_dn_bn.py`) | `B_4`/`D_4` distance distributions match A4(2)(b),(c) |
| dependency + consumer scan | ad-hoc script over all 32 `batch-*.pages.json`, `items/`, `library/` | 0 unresolved ids; 0 forward deps; no external consumer; only the B page requires the A page |
| drift | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift`; no prerequisite gap |

## 7. Non-blocking notes (no scope action)

1. The `coverage-low-yield` warning is advisory (3/25 A-page results take a direct item
   destination); the declines carry written reasons and per §3 Alpha should confirm them.
2. The design file is stale on the Steinberg infinite case and the `D_n` terminal node (§1);
   the scaffold is source-verified, so the owner may wish to reconcile the design if it is reused.
3. Published suppliers carry no defect found by this review; no `Recorded`/unproved published
   record is used, and all published dependencies are `status: published`.
4. This review assesses scope only; proof correctness of the scaffolded statements is out of role
   and is not asserted.
5. Minor notation point for Step 3b: `lem-cg-classical-type-poincare-products` (3) cites
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (4) for the coincidence
   `D_2=A_1×A_1`; the supplier's clause (4) states `A_1=B_1`, `A_3=D_3` and the extended
   `I_2(2)=A_1×A_1`, so `D_2` is a naming convention rather than a supplier claim. No scope
   impact.

## 8. Decision

**`coxeter-descents-poincare-polynomials-and-growth`: sufficient.** The planned definitions
(length generating series, descent-class series, spherical subsets, multivariate descent
polynomial), results (finite descent parabolics and the finite/infinite dichotomy, two-sided
parabolic factorization, descent inclusion–exclusion, the two-case Steinberg identity, rational
growth, the orbit/Schreier-distance quotient formula, the classical `A/B/D/I_2(m)` products, the
six exact exceptional certificates, the independent-degree Poincaré product and reciprocity) and
examples (insertion products, the `A_2` case, infinite dihedral growth and the failure of
polynomial reciprocity) adequately cover the intended subject of CG-20 and its declared role as a
leaf pair whose only consumer is the B companion. Source coverage is fetch-verified with every
declined row reasoned; no omitted topic within the design or its selected sources was found; no
enrichment or merger is recommended; **no unmet prerequisite was confirmed** (residual: in-run
supplier proofs are Step 3b work). Owner action: none required for scope; proceed.
