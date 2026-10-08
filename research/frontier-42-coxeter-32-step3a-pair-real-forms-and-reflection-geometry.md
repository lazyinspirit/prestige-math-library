# Step 3a scope review — A/B pair `real-forms-and-reflection-geometry`

Run: `frontier-42-coxeter-32` · role: alpha · batch 4 · design label CG-01 · orders 1724/1725
A page: `real-forms-and-reflection-geometry` · B page: `real-forms-and-reflection-geometry-examples`

**Decision: `sufficient`** — scope only. No item approval, no owner record, no scaffold edit.

## Inputs read

- Manifests/batch evidence: `research/frontier-42-coxeter-32-batch-4.pages.json` (both pages, all 9 items: statements, strategies, deps, sources), `...-batch-4.coverage.json`, `...-batch-4.notes.md`, `...-batch-4.cross-batch-dependencies.json`, `...-url-liveness.json`.
- Design: `research/plan-coxeter-groups-track.md` §CG-01 (L133–149); `research/coxeter-scaffold/inventory.json` (CG-01); `research/coxeter-scaffold/definition-justifications.json` (the three CG-01 definitions); `research/coxeter-scaffold/independent-audit.md`; `research/coxeter-scaffold/geometric-source-report.md` §"Canonical representation and Tits cone".
- Plan/owner: `research/plan-spec.json` pages 1724/1725; `research/frontier-42-coxeter-32-owner-scope.json`; `...-owner-authoring-direction.md`; `...-scope-ledger.json` (batch 4); `...-planning-notes.md`; `...-alpha-step1-drift.md` (VERDICT no-drift for this page).
- Library role: `library/coxeter-groups/real-forms-and-reflection-geometry{,-examples}.md` (draft prose scaffold targets); published supplier items under `items/`; the three `requires` pages; consumer contracts in the inventory (CG-04, CG-05, CG-19).
- Sources (full text, same editions as the coverage stamps — verified sha256-16 + byte size): Davis, *The Geometry and Topology of Coxeter Groups*, <https://people.math.osu.edu/davis.12/davisbook.pdf> (stamp `ccefbb950fdcfce9`, 4 220 570 B): §6.12 (6.32)–(6.33), Lemma 6.12.3 + proof, Corollary 6.12.4 (printed pp. 116–117); Appendix D.1, Lemma D.1.5 + proof Cases 1–2, Example D.2.1(i) (printed pp. 440–442). Björner–Brenti, *Combinatorics of Coxeter Groups*, <https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf> (stamp `ad1e7d9260127bb2`, 4 320 702 B): §4.2 (4.9)–(4.14), Proposition 4.2.1 + proof, Theorem 4.2.2 (printed pp. 93–94). Lusztig, *Hecke Algebras with Unequal Parameters*, <https://arxiv.org/pdf/math/0208154> (stamp `6329366ceac9317c`, 1 096 504 B): Proposition 1.3 + proof (printed pp. 11), §1.11 (printed p. 14).

## Scope reconciliation (design ↔ inventory ↔ manifest)

Manifest and `plan-spec.json` agree exactly on order (1724/1725), category `coxeter-groups`, companion pointers and the A page's four `requires` (`coxeter-presentations-exchange-and-reduced-word-theorems`, `dual-spaces-bilinear-forms-and-inertia`, `sine-cosine-and-the-definition-of-pi`, `group-homomorphisms-and-the-isomorphism-theorems`). The A manifest carries the design's six CG-01 supplier contracts unchanged (IDs identical to `coxeter-scaffold/inventory.json` CG-01); the B manifest carries the three examples promised by the design's companion paragraph. Nothing added, nothing dropped; 9 items total (100-item cap not approached).

Claim/convention ledger (scaffold statements; proofs are Step-3 authoring work, so correctness is not assessed here):

- A1 `def-cg-real-coxeter-form-and-reflection`: finite S, `m(s,s)=1`, `m(s,t)∈{2,3,…}∪{∞}`, `V=R^S`, `c(s,t)=cos(π/m)`, `B(e_s,e_t)=-c(s,t)` (diagonal 1), radical and `B`-preserving map defined, `r_a(v)=v-2B(v,a)a/B(a,a)` only for `B(a,a)≠0`; definiteness/nondegeneracy explicitly not presumed.
- A2 `lem-cg-reflection-form-invariance-and-rank-two-orders`: well-definedness of `B`; `r_a` linear, involutive, `B`-preserving, fixed hyperplane `ker B(-,a)`; rank-two Gram `[[1,-c],[-c,1]]` positive definite for finite `m` (square-sum identity) and positive semidefinite with radical `R(e_s+e_t)` for `m=∞`; product matrix `[[4c²-1,-2c],[2c,-1]]`, det 1; finite exact order `m` (trace `2cos(2π/m)`); `m=∞` unipotent `A=id+N`, `N²=0`, `N≠0`.
- A3 `def-cg-canonical-reflection-homomorphism`: `ρ:W→GL(V)` named, existence/uniqueness delegated to its recorded justifier; roots `Φ=W{e_s}`, reflections `T={wsw^{-1}}`, positive/negative cones; no positivity, faithfulness, discreteness or nondegeneracy asserted.
- A4 `lem-cg-reflection-representation-descends-and-root-norms`: relators `s²`, `(st)^{m(s,t)}` sent to the identity; unique `ρ`; `B`-preservation by all `ρ(w)`; unit root norms; `gr_ag^{-1}=r_{ga}` and `ρ(wsw^{-1})=r_{ρ(w)e_s}`.
- A5 `def-cg-dual-chambers-and-reflection-hyperplanes`: `V*`, action `(w·f)(v)=f(ρ(w)^{-1}v)`, closed chamber `C`, interior `C°`, faces `C_I` (vanishing exactly on `I`), root hyperplanes `H_α`; no `V≅V*` identification through a possibly degenerate `B`.
- A6 `lem-cg-dual-action-and-chamber-faces-exist`: action axioms and linearity; explicit nonempty `f_I` and `C_S={0}`; rank-two dual generators `(y_s,y_t)↦(-y_s,2cy_s+y_t)` and `↦(y_s+2cy_t,-y_t)`; finite `m<∞`: `2m` sectors, disjoint interiors, union `P*`, simple transitivity, separating root hyperplanes; `m=∞`: disjoint interiors, union the closed half-plane `{f(e_s+e_t)≥0}`, separating root hyperplanes, wall traces exactly the integers in `y_s` on `{f(e_s+e_t)=1}`.
- B1/B2/B3: three explicit `2×2` computations — positive/Lorentzian/radical reflection matrices with inertia `(2,0,0)/(1,1,0)/(1,0,1)` (B1); no reflection with null normal by the displayed formula, two instantiations (B2); finite `A` of exact order `m` (`m=3`, `m=2`) versus infinite unipotent product (B3).

The beta notes' scaffold reconciliations are consistent with the design and with what I read: blanket inventory `depends_on` lists trimmed to the actual use set in the manifest; the finite rotation realized by the explicit `2×2` matrix route (equivalent to the design's diagonalization, see the matching Lusztig Proposition 1.3 characteristic polynomial `X²-2cos(2π/m)X+1`); the `m=∞` chamber case stated as the half-plane union exactly as Davis Example D.2.1(i) and Lemma D.1.5 Case 1; three definitions each carry a recorded later justifier (`lem-cg-reflection-form-invariance-and-rank-two-orders`, `lem-cg-reflection-representation-descends-and-root-norms`, `lem-cg-dual-action-and-chamber-faces-exist`).

## Source coverage

- `frontier-42-coxeter-32-batch-4.coverage.json`: 26 harvested rows — 16 `included`, 3 `inline`, 5 `deferred` with in-run destinations (`canonical-roots-signs-and-faithful-reflections`, `tits-cones-chambers-and-parabolic-stabilizers`, `coxeter-presentations-exchange-and-reduced-word-theorems`), 2 `out-of-scope` with reasons (Davis Cor. 6.12.6, Prop. 6.12.7). Every one of the 9 items has at least one backing row; `coverage-checklist` 0 errors/0 warnings; `source-backing` 9/9 backed; `url-sweep` 10/10 live; the three PDFs are fetch-verified with the stamps above.
- Independent spot reading of the load-bearing passages confirmed the stated conventions and claims: Davis Lemma 6.12.3 gives exact order `m_{ij}`, the `m=∞` computation `(ρ_iρ_j)^n(e_i)=2nu+e_i` with `u=e_i+e_j`, positive definiteness of the rank-two Gram matrix `det=sin²(π/m)>0`, and the orthogonal decomposition; Davis Lemma D.1.5 Case 1 reproduces the displayed dual generators (`s·ξ=-ξ+2φ`, `t·φ=2ξ-φ`) and the affine-line action `x↦-x`, `x↦2-x`, and Example D.2.1(i) gives `U` = half-plane `x_1+x_2≥0`; Björner–Brenti Prop. 4.2.1/Thm. 4.2.2 give `σ_s²=id`, exact dihedral orders, unique homomorphism extension; Lusztig Prop. 1.3/§1.11 give the same matrix, exact orders, and the invariant form `(e_s,e_{s'})=-cos(π/m_{s,s'})`.

## Prerequisites and role

- All 45 distinct item deps resolve: 39 published items (`status: published` under `items/`) and 6 in-run scaffold items (this pair's own). **Zero deps are absent from both the published library and the current scaffold.** Every dep's home page lies in the transitive closure of the pair pages' declared `requires` (checked over `plan-spec.json`/library page graph; closures 82/83 pages).
- The A page's `requires` resolve to three published pages plus `coxeter-presentations-exchange-and-reduced-word-theorems` (batch-2 scaffold of this run, not yet authored). This is a known conditional, not a scope gap: the seven `open` cross-batch rows in `...-batch-4.cross-batch-dependencies.json` name `def-hh-coxeter-matrix-word-group-and-length` as the single in-run supplier, and its proof is scheduled Step-3 work.
- Intended role: CG-01 is the reflection-geometry foundation of the run; later pages CG-04 (5 items), CG-05 (4 items) and CG-19 (5 items) consume `lem-cg-dual-action-and-chamber-faces-exist`. No consumer names a CG-01 claim that the manifest does not plan, and the pair is placed in the `coxeter-groups` pathway part "Reflection and Metric Foundations".

## Findings

1. **Sufficient scope.** All planned definitions, results and examples cover the intended subject (design contracts A1–A6 and the full B companion paragraph are realized item-for-item; conventions, hypotheses and abstentions are stated).
2. **No unmet prerequisite absent from both the published library and the current scaffold** (evidence in the previous section; distinguished from uncertainty below).
3. Advisories (non-blocking; no scaffold edits made): four `redundant-prereq` warnings on the page `requires` retained under plan authority; two modelling risks recorded by beta for Step-3 authoring (derivation of the finite rank-two tiling details; conditional readiness on the batch-2 supplier).
4. Honest uncertainty: item proofs do not exist yet, so this review is a scope assessment only; the rank-two half-space strength that CG-04's induction will consume from A6 is a Step-3/5 obligation, and no scope-level shortfall is identified. No owner scope action is required.

## Decision and next action

- Recorded via `node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32 --page real-forms-and-reflection-geometry --decision sufficient`.
- Next action: Step 3b authors the six A items and three B examples; batch 2 must author `def-hh-coxeter-matrix-word-group-and-length` before this pair's items are usable (ledger rows `open`).
