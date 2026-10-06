# Step 3b — pair authoring: hecke-markov-traces-and-polynomial-link-invariants

- Run `frontier-40-geometry-braids-rep-27`, role `alpha-high`, label
  `step3b-pair-hecke-markov-traces-and-polynomial-link-invariants-d4aa4eeff01c57a4`.
- Owned pages: A `hecke-markov-traces-and-polynomial-link-invariants` (order 751,
  category `braid-groups`, 23 items) and B
  `hecke-markov-traces-and-polynomial-link-invariants-examples` (order 752, 4 items).
- Shared files: `research/frontier-40-geometry-braids-rep-27-batch-6.pages.json`
  (this pair only), `...-batch-6.coverage.json`, `...-batch-6.cross-batch-dependencies.json`,
  `...-batch-6.proof-contracts.json` (created here), plus the two library pages.
- Ownership: this pair only; sibling pairs in other batches are untouched.

## Owned items in assigned dependency order

Level 0: `def-elementary-ideals-of-a-finitely-presented-module`,
`def-exponent-sum-of-a-braid`,
`lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`.
Level 1: `def-markov-trace-on-the-type-a-hecke-tower`,
`def-one-variable-alexander-module-of-an-oriented-link`,
`lem-elementary-ideals-are-independent-of-the-presentation`.
Level 2: `def-the-homflypt-coefficient-ring`,
`lem-the-hecke-tower-is-free-over-the-previous-level`,
`lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain`.
Level 3: `lem-the-alexander-module-of-a-link-complement-is-finitely-presented`,
`thm-the-ocneanu-markov-trace-exists-and-is-unique`.
Level 4: `def-alexander-polynomial-from-the-first-elementary-ideal`,
`lem-the-markov-trace-of-an-inverse-hecke-generator`.
Level 5: `def-coloured-reduced-burau-matrix`,
`lem-the-deficiency-one-fox-calculus-determinant-rule`,
`lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units`,
`thm-the-alexander-polynomial-is-an-oriented-link-invariant`.
Level 6: `def-homflypt-polynomial-from-the-hecke-markov-trace`,
`thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis`.
Level 7: `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid`,
`thm-the-hecke-trace-construction-is-an-oriented-link-invariant`,
`cex-an-unnormalized-hecke-trace-is-not-markov-invariant` (B).
Level 8: `thm-the-homflypt-skein-relation`,
`ex-the-burau-determinant-for-a-two-strand-torus-link` (B).
Level 9: `def-temperley-lieb-quotient-and-jones-specialization`.
Level 10: `ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid` (B).
Level 11: `ex-the-jones-specialization-of-a-two-strand-closure` (B).

The list above is the dispatch's assigned order, which fixed the audit/authoring
sequence. Final computed levels (after the authored dependency sets landed) were
recomputed and synced to `...-batch-6.pages.json` and the item metadata; the run-wide
`item-dependency-levels` check passes with them. Levels changed for:
`def-markov-trace-on-the-type-a-hecke-tower` 1→2,
`lem-the-hecke-tower-is-free-over-the-previous-level` 2→3,
`thm-the-ocneanu-markov-trace-exists-and-is-unique` 3→4,
`lem-the-markov-trace-of-an-inverse-hecke-generator` 4→5,
`lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units` 5→6,
`def-homflypt-polynomial-from-the-hecke-markov-trace` 6→7,
`thm-the-hecke-trace-construction-is-an-oriented-link-invariant` 7→8,
`thm-the-homflypt-skein-relation` 8→9,
`def-temperley-lieb-quotient-and-jones-specialization` 9→10,
`def-coloured-reduced-burau-matrix` 5→6,
`thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis` 6→7,
`prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid` 7→10,
`cex-an-unnormalized-hecke-trace-is-not-markov-invariant` 7→9,
`ex-the-burau-determinant-for-a-two-strand-torus-link` 8→11,
`ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid` 10→11.

## Open obligations at entry

1. **Unfinished in-run suppliers (batches 2 and 5).** At entry, no item of
   `principal-series-representations-of-gl-n-over-a-finite-field` (batch 2) or
   `the-burau-representations` (batch 5) exists in `items/`. Consumed supplier IDs:
   batch 2 — `def-generic-type-a-hecke-algebra`,
   `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
   `def-the-laurent-polynomial-ring`,
   `lem-units-and-powers-of-the-laurent-polynomial-ring`,
   `def-algebra-over-a-commutative-ring`,
   `def-polynomial-ring-over-a-commutative-ring`; batch 5 —
   `def-reduced-burau-representation`, `def-unreduced-burau-matrices`.
   Consumers and the exact consuming steps are recorded per item below; those
   item decisions stay `escalate` until the suppliers land and their statements
   and proof uses are reconciled.
2. **Step 3a findings rechecked here** (see per-item checkpoints): the TL
   rescaling/non-descent witnesses and the coefficient-ring unit clause needed
   statement repairs; the Stacks cross-index and Conway locator are corrected;
   the split-union multiplicativity gap (Step 3a finding 1) is reported again
   below as a cross-pair escalation, not silently added.
3. **Cross-pair prerequisite gap (escalated, owner-held).** No item in this run
   or the published library supplies the split-union rule
   `P(L_1\sqcup L_2)=\alpha P(L_1)P(L_2)` used by batch-10
   `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial` and
   batch-11 `cor-the-graded-euler-characteristic-of-hhh-is-homflypt`. Owner
   authorization for a scaffold addition on this A page was recommended at Step
   3a and is still required; see the escalation section at the end.

## Checkpoints

(one line per completed item, appended in authoring order; the level tag is the
final computed dependency level, synced to the item metadata and the batch
manifest. The dispatch's assigned order fixed the audit/authoring sequence; a
tag marked "after recomputation" or "after dep sync" moved when a repair
introduced batch-5 dependencies. The run-wide `item-dependency-levels` check
passes with these labels.)

- **def-elementary-ideals-of-a-finitely-presented-module** (L0) — authored; repaired the
  Stacks cross-index to `E_k = Fit_k` (Tag 07Z6, Lemma 15.8.2/Def 15.8.3, read this
  session); conventions `E_k=R` for `k>=n`, `0` for `k<n-m`. precheck n/a (definition).
- **def-exponent-sum-of-a-braid** (L0) — authored; replaced the scaffold's "homogeneous
  of degree 2 and 3" justification by the correct relator-exponent-sum-zero check; proved
  well-definedness (von Dyck), word formula, inverses, surjectivity. precheck PASS.
- **lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold** (L0) —
  authored. Repairs: the scaffold's "compact manifolds admit finite CW structures" step was
  replaced by an explicit chain (compact exterior `M_0`, Moise finite triangulation as a
  quoted literature input, locator in sources) and the connectedness argument now uses
  Alexander duality + `H^2(L;Z)=0`. **AC is now used** (Alexander duality): statement,
  [A1], and deps carry `def-axiom-of-choice`; recorded as a deviation from the scaffold's
  "choice-free" strategy. Open obligation: the finite-CW clause is a quoted literature
  input (Moise), flagged here for Steps 5-8. precheck PASS.
- **lem-the-deficiency-one-fox-calculus-determinant-rule** (L5) — authored as a
  literature-input lemma (provenance statement+proof `literature-derived`; Morton §2
  pp. 4-5, Conway Thm 3.15 pp. 16-17, Crowell-Fox chs. VII-VIII as locators). Repaired
  the scaffold's `φ(x)=1` simplification: the general rule divides by `1-φ(c)` for the
  deleted generator `c` with `φ(c)≠1`, with `φ(c)=1` as the vacuous-division special
  case; this is the form the Burau theorem consumes (axis meridian `x`, division by
  `1-x`). Open obligation: no local Fox-calculus development; quoted input flagged for
  Steps 5-8. precheck PASS (literature-input).
- **thm-the-alexander-polynomial-is-an-oriented-link-invariant** (L5) — authored. Proof:
  isotopy extension gives an orientation-preserving homeomorphism `h:S^3→S^3` with
  `h(L)=L'`; `h_*` intertwines the total linking homomorphisms (via the Alexander-duality
  definition and orientation-induced generators), so the covers match and
  `A_L ≅ A_{L'}` as Λ-modules; elementary ideals are module invariants; gcds in the UFD
  Λ give `Δ_{L'} = ±t^k Δ_L`. AC declared; precheck PASS.
- **def-coloured-reduced-burau-matrix** (L6 after recomputation) — **repaired** while authoring its consumers.
  The scaffold/previous draft defined `C̄_i(a)` by the 2×2 block `[[a,-a],[1,0]]` at
  rows/cols `i,i+1` with a nonsense `(n,n-1)` clause, and claimed the equal-label matrix
  matches the reduced Burau only after `t↦-t`. Morton's actual matrix (verified against the
  arXiv source `multiburau.tex`, §2.1, and the proof of Theorem 1 on pp. 5-6) has, instead,
  row `i` with entries `a,-a,1` at columns `i-1,i,i+1`, truncated at the boundary; `det=-a`.
  Equal labels give `R_i = P C̄_i(t) P^{-1}` for the fixed `P=I-S` (subdiagonal shift),
  verified symbolically/numerically for `n≤7` (`/tmp/hmt/conj.py`); the conjugation is now
  proved on generators in `prop-burau-determinant-recovers-...` step 1.2, and the `t↦-t`
  clause was deleted. rendercheck PASS, precheck n/a (definition).
- **def-homflypt-polynomial-from-the-hecke-markov-trace** (L7 after recomputation) — authored:
  `P(β̂)=u^{e(β)}α^{n-1}tr_n(π_n(β))`, `α=(uz)^{-1}`, with the `(l,m)` identities
  `α=(l^{-1}-l)/m`, `u=ls^{-1}` and the well-formedness/uniqueness-of-representative
  caveats. precheck PASS, rendercheck PASS.
- **thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis** (L7 after recomputation) — authored.
  Steps: Morton's presentation of `π_1` of the complement (literature input quoted),
  Fox Jacobian `= B̃_β - x^{-1}I_n` with `det = (1-x^{-1})det(B̄_β-x^{-1}I)`, Fox rule
  with deleted axis meridian dividing by `1-x` ⇒ `Δ_{β̂∪A} ≐ det(I-xB̄_β)`; Torres-Fox
  deletion `D_{β̂} = det(I-B̄_β)/(1-t_1⋯t_n)` ⇒ equal-label and knot formulas. The two
  literature inputs (presentation; deletion) are flagged. precheck PASS, rendercheck PASS.
- **prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid** (L10 after
  recomputation) — authored. Steps: explicit generator matrices
  `R_i` of the reduced action in the batch-5 basis `{ε_j-ε_n}` (from
  `def-unreduced-burau-matrices`, `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module`,
  `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one`,
  `thm-topological-and-matrix-burau-representations-agree`), then the block verification
  `R_i = P C̄_i(t) P^{-1}` (`P=I-S`), giving `det(I-B_β(t)) = det(I-ρ̄_n(β))`; then the
  Alexander formula and the `n=2`, `m=3` trefoil check. **Five batch-5 sibling suppliers are
  consumed** (`def-reduced-burau-representation`, `def-unreduced-burau-matrices`,
  `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module`,
  `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one`,
  `thm-topological-and-matrix-burau-representations-agree`). All five are authored with
  their item decisions recorded (at the time of this checkpoint the pair was still being
  authored, hence the earlier escalation); the edges remain `open` in the cross-batch file
  for the Step-3 gate to reconcile against the final batch-5 statements. precheck PASS,
  rendercheck PASS.
- **thm-the-hecke-trace-construction-is-an-oriented-link-invariant** (L8) — authored:
  conjugation invariance, both stabilizations with the factors `uαz=1` and `u^{-1}αz_-=1`
  (from `u²=z_-/z`), and Markov's theorem give the oriented-link invariant with
  `P(unknot)=1`. precheck PASS, rendercheck PASS.
- **cex-an-unnormalized-hecke-trace-is-not-markov-invariant** (B, L9) — authored as a
  counterexample item (`## Statement refuted` / `## Facts & Assumptions` /
  `## Counterexample`): raw trace stabilization factors `z` and `z_-` with `z ≠ z_-`;
  normalized factors `uαz` and `u^{-1}αz_-` are both 1 exactly under the two coefficient-ring
  relations; explicit witness `u=1, α=z^{-1}` gives `F(σ_1)=1`, `F(σ_1^{-1})=z_-/z ≠ 1` on
  the unknot. precheck PASS, rendercheck PASS.
- **thm-the-homflypt-skein-relation** (L9) — authored: `T_i=vT_i^{-1}+(v-1)` gives
  `u^{-1}P_+-vuP_-=(v-1)P_0`, and dividing by `s` gives
  `l^{-1}P_+-lP_-=mP_0`; `P(unknot)=1`. precheck PASS, rendercheck PASS.
- **def-temperley-lieb-quotient-and-jones-specialization** (L10) — **repaired**: the
  scaffold's rescaled TL clause and its false non-descent caveat are gone. Proved:
  `e_i²=e_i`, `(v+1)³e_ie_{i+1}e_i = E^{(i)}_n + v(T_i+1)` (exact expansion; in the
  quotient `e_ie_{i+1}e_i=λe_i`, `λ=v/(v+1)²`), and the correct rescaled generators
  `f_i=λ^{-1/2}e_i` with `δ=λ^{-1/2}=s+s^{-1}`. The Jones specialization is defined as
  the ring homomorphism `φ:R→T=Z[v^{±1},(v+1)^{-1},s]/(s²-v)`, `z↦-1/(v+1)`, `u↦s`;
  `V` inherits invariance, `V(unknot)=1`, and the Jones skein relation. The item now
  states the provable Markov normalization `tr(xe_n)=((z+1)/(v+1))tr(x)` (equal to `λ`
  at `z_0`) and makes **no descent claim**; the general descent of the specialized trace
  to `TL(n)` remains unasserted (exact evidence for `n≤4` is in the Step-3a review and
  `/tmp/hmt/run4.mjs`). The Jones-polynomial identification quotes the standard
  skein-theoretic characterization (flagged literature input). precheck PASS, rendercheck PASS.
- **ex-the-burau-determinant-for-a-two-strand-torus-link** (B, L11 after dep sync) —
  authored: `ρ̄_2(σ_1^m)=(-t)^m`; values `m=1` unknot `1`, `m=3` trefoil `t²-t+1`,
  `m=-3` mirror `t^{-2}-t^{-1}+1`, `m=2` Hopf link `1-t`; even `m` handled by the
  component count and the classical formula. precheck PASS, rendercheck PASS.
- **ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid** (B, L11) —
  authored: `tr_3(T_1T_2T_1)=z²(v-1)+zv`, `P=u³α²(z²(v-1)+zv)`; skein triple with
  `B=(1-v^{-1})z²+(3-v-v^{-1})z+(1-v)`, `C=(v-1)z+v` and the identity `A-vB=(v-1)C`
  (`=(v-1)²z+v(v-1)`); closure is the Hopf link (conjugation + destabilization), Jones
  value `-s⁵-s=-t^{1/2}(t²+1)` equal to the value on `σ_1²`. precheck PASS, rendercheck PASS.
- **ex-the-jones-specialization-of-a-two-strand-closure** (B, L11) — authored:
  `tr_2(T_1³)=(v²-v+1)z+v(v-1)`, `V=-s⁸+s⁶+s²=-t⁴+t³+t`, mirror caveat, skein relation;
  the Hopf-link cross-check `-s⁵-s` is now computed inline (it was moved off the
  ai-generated sibling example so the item no longer depends on an `ai-generated`
  statement). precheck PASS, rendercheck PASS.

## Step-3b repairs to already-authored scaffold items

- **`def-coloured-reduced-burau-matrix`** (level 6 after recomputation): matrix definition
  replaced by Morton's true `C̄_i(a)` (row `i`: `(i,i-1)=a`, `(i,i)=-a`, `(i,i+1)=1`,
  truncated at the boundary; `det=-a`); the `t↦-t` claim deleted. The equal-label
  conjugation `R_i=P C̄_i(t)P^{-1}` (`P=I-S`) is proved on generators in the proposition.
- **Burau–Alexander normalizations** (dispatch-order items 19–20, 24): Morton's multivariable deletion
  and BB (15) are now the two quoted inputs; the one-variable formula is stated as
  `Δ_{β̂}(t) ≐ (1-t)det(I-B_β(t))/(1-t^n)` for every link, with the library's
  `D=Δ/(1-t)` only for knots and `D=Δ` for `k>1`. This removes the scaffold's false
  multi-component reading of `D=det(I-B)/(1-t^n)` (the Hopf-link check `D=1-t` versus
  Morton's `D^{mv}=1` is recorded in the item caveats).
- **`lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`**:
  dropped the load-bearing dependency on the B-page example
  `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic` (b-leaf-content);
  the standard CW structures on the circle are now a local sentence. The AC-bearing
  Alexander-duality supplier is unchanged.

## Final checks actually run (all on the current content)

### Checkpoints for the items authored before this session (recorded on takeover)

- **lem-elementary-ideals-are-independent-of-the-presentation** (L1) — reduction to the
  published `lem-fitting-ideals-presentation-independent` with the `E_k=Fit_k` convention;
  no new proof of the presentation-independence theorem is attempted. precheck PASS.
- **def-one-variable-alexander-module-of-an-oriented-link** (L1) — total linking via
  Alexander duality, cover classified by `ker φ`, deck action `t`, AC declared in `[A1]`
  and deps. precheck PASS.
- **def-alexander-polynomial-from-the-first-elementary-ideal** (L4) — `Δ` a gcd of
  `E_1(A_L)` (unit ambiguity `±t^k`), `D=Δ` for `k>1`, `D=Δ/(1-t)` for knots; `Δ(1)=±1`
  and square-presentation clauses recorded as a flagged Milnor literature input;
  `def-axiom-of-choice` added to deps on takeover for AC propagation. precheck PASS.
- **lem-the-alexander-module-of-a-link-complement-is-finitely-presented** (L3) — finite
  generation from the finite CW model, finite presentation over the Noetherian `Λ`; the
  knot-torsion clause is a flagged Milnor literature input, not used by the Burau
  comparison; AC declared. precheck PASS.
- **lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain** (L2)
  — `Λ=Z[t^{±1}]` Noetherian (localisation of `Z[t]`), UFD, units `±t^k`; choice-free.
  precheck PASS.
- **def-markov-trace-on-the-type-a-hecke-tower** (L2) — tower `H(n)=Λ⊗_A H_v(n)` over
  `Λ=Z[v^{±1},z]`, injective `ι_n`, conditions (M1)–(M4), two-sided form of (M4);
  well-formedness and the equivalence of the two (M1) forms proved; level synced to the
  computed 2. precheck PASS.
- **lem-the-hecke-tower-is-free-over-the-previous-level** (L3) — parts (1)–(2) from the
  standard basis and the coset decomposition; part (3) bimodule isomorphism quoted from
  Johnson-Freyd Lemma 2.1 (flagged literature input). precheck PASS.
- **thm-the-ocneanu-markov-trace-exists-and-is-unique** (L4) — uniqueness from the
  free-basis lemma, existence by recursion plus the four-case cyclicity induction
  (Johnson-Freyd Thm 2.2); clauses (a)–(c). precheck PASS.
- **lem-the-markov-trace-of-an-inverse-hecke-generator** (L5) — `T_i^{-1}=v^{-1}T_i+
  (v^{-1}-1)`, `z_-=v^{-1}(z+1-v)`, `z-z_-=(1-v^{-1})(z+1)≠0`. precheck PASS.
- **lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units** (L6) — units,
  von Dyck gives `π_n:B_n→H(n)^×`, word formula and compatibility with `ι_n`. precheck PASS.
- **def-the-homflypt-coefficient-ring** (L2) — repaired universal property (`u` inverted;
  units `v,z,u,s`; relations `s²=v`, `vzu²=z+1-v`), `l=us`, `m=s-s^{-1}`,
  `l^{-1}-l=m(uz)^{-1}`. precheck PASS.

| Check | Command | Result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts` on all 27 item paths | **25 checked, 0 failing** (2 fact-less definitions are `n/a`) |
| rendering | `node tools/rendercheck.mjs` on all 27 item paths | **OK — 27 file(s)**, no multiline display, KaTeX and YAML clean |
| proof layout | `node tools/proof-layout.mjs <all 27 item paths>` (one command) | **27 items, 91 steps, 0 defects** |
| manifest deps | `node tools/manifest-deps.mjs ...-batch-6.pages.json` | **27 items, 0 errors** |
| dependency levels | `node tools/item-dependency-levels.mjs check --run ...` | **no batch-6 error** (all 27 labels equal the computed levels) |
| depcheck | `node tools/depcheck.mjs` | my items: no error; only `cited-not-in-deps` warnings for forward prose links in Remarks |
| fwdcheck | `node tools/fwdcheck.mjs` | my items: clean (the two forward example links are declared in `forward_refs`) |
| extcheck | `node tools/extcheck.mjs` | my items: clean |
| content policy (items) | `node tools/content-policy.mjs <all 27 batch manifests>` | **895 scoped items, 0 errors, 0 warnings** (run-wide, after the batch-6 dependency repair) |
| coverage checklist | `node tools/coverage-checklist.mjs ...-batch-6.coverage.json --require-destination` | **1 page, 44 harvested, 0 errors, 0 warnings** |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 |
| merge contracts | `node tools/merge-proof-contracts.mjs --level ... <my batch file>` | wrote 27 scoped items (shape valid) |
| strict proof contracts | `node tools/proof-contract.mjs ...-batch-6.proof-contracts.json --strict` | **0 errors, 0 warnings, 27/27 items checked** |
| boundary audit | `node tools/boundary-audit.mjs <file> --fail-on-contradicted --fail-on-template --json` | **contradicted 0, templates 0** |
| citation fidelity | `node tools/citation-fidelity.mjs <file> --fail-on-missing-quote` | **quote not found: none** (203 citations; 1 widening candidate, no verdict) |
| finite smoke | `node tools/finite-smoke.mjs <file>` | 0 errors (no item declares a finite-smoke obligation) |
| gate liveness | `node tools/gate-liveness.mjs --run ... --contracts <file> --checklists ...coverage.json --min-checks 1` | proof-contract 27 items, coverage 44 results, precheck 19558 items — live |
| item decisions | `node tools/step3-decisions.mjs record-item` for all 27 | **27 recorded** (13 `accept`, 14 `repaired`, confidence 1); `check --phase final` shows **no open batch-6 item** |

## Escalations, open obligations and handoff

1. **Split-union multiplicativity (owner-held, unchanged).** No item of this run or
   the published library supplies `P(L_1\sqcup L_2)=αP(L_1)P(L_2)` used by the batch-10
   and batch-11 consumers. It is not added here (out of the authorized scaffold scope);
   the owner authorization recommended at Step 3a is still required. Exact IDs:
   consumers `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`
   (batch 10) and `cor-the-graded-euler-characteristic-of-hhh-is-homflypt` (batch 11);
   the supplier would be a clause on
   `thm-the-hecke-trace-construction-is-an-oriented-link-invariant` or a new lemma on
   this A page.
2. **Batch-5/Batch-2 supplier reconciliation (cross-pair, open but not blocking authoring).**
   `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid` consumes
   `def-reduced-burau-representation`, `def-unreduced-burau-matrices`,
   `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module`,
   `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` and
   `thm-topological-and-matrix-burau-representations-agree`; the matrix conventions were
   reconciled numerically (`/tmp/hmt/conj.py`, `n≤7`) and are proved on generators in
   step 1.2 of the proposition. The edges are recorded `open` in
   `...-batch-6.cross-batch-dependencies.json` (32 edges) for the Step-3 gate to reconcile
   against the final batch-5 statements. All the named suppliers are authored and their
   item decisions are recorded; no consumer is left unjustified.
3. **Quoted literature inputs to re-check in Steps 5–8** (each flagged in its item):
   Moise finite triangulation (complement lemma), Morton/Conway/Crowell–Fox Fox rule
   (deficiency-one lemma), Johnson-Freyd Lemma 2.1 part (3) (Hecke-tower freeness),
   Milnor Theorem 2 knot torsion (Alexander-module finite presentation), the standard
   skein-theoretic characterization of the Jones polynomial (TL/Jones item). Each is
   recorded with exact locators; none is used without its locator.
4. **Descent question left unasserted.** The TL/Jones item states neither descent nor
   non-descent of the Ocneanu trace to `TL(n)`; the exact computations for `n≤4`
   (vanishing of `tr(hE)` at `z_0`) are recorded in the Step-3a review and in the batch
   notes' Step-3b correction. A general proof of descent is the classical statement that
   the specialized trace is the TL Markov trace; if a later step wants it, it should be
   supplied as a separate item with its own proof.
5. **Locator corrections carried into authoring.** Conway's twisted Burau–Alexander
   computation is Theorem **3.15** (pp. 16–17), not 3.19; the item references and the
   report use 3.15. The Jones mirror convention (`V` equals the table value under
   `t↦t^{-1}` in the mirror-normalised case) is stated in every consumer.
6. **Added local suppliers on this A page** (new IDs absent from the pre-author
   inventory are certified by the engine after dispatch; the rest are original scaffold
   IDs with current decisions): none beyond the 23 A + 4 B scaffold inventory — all 27
   IDs were scaffold IDs, so every item has an ordinary current decision (13 `accept`,
   14 `repaired`).
7. **Published concerns.** No published item consumed by this pair was found defective.
   The published suppliers were read at statement level and are cited in the contracts;
   the only published-content repairs made were the two dependency cleanups on this
   pair's own items (the B-page example dependency of the complement lemma) and the
   normalization repairs listed above.
8. **Step-4 pre-splice state.** `validate-plan` exits 0. The canonical plan still has
   empty item lists for pages 751/752 (the Step-1 scaffold left them empty by design);
   the spliced inventory is the 23 A + 4 B items recorded in
   `research/frontier-40-geometry-braids-rep-27-batch-6.pages.json` and in the two
   library pages, together with the dependency levels recomputed above. No new A/B pair,
   no page split and no plan amendment is requested.
