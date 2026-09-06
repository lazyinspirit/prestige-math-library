# Frontier-32 reader report — batch 18

## Scope opened

- A page: `library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality.md`.
- B page: `library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality-examples.md`.
- All 25 assigned in-flight items: the 20 A-page items and five B-page examples/counterexamples listed in `frontier-32-batch-18.pages.json`.
- Direct published dependencies opened: the trajectory, stable/unstable-manifold, gradient-like-field, flow, regular-level, transverse-fibre-product, Sard, parametric-transversality, Baire, finite-critical-point, metric/Hessian, and noncompact-flow items named by those items.  Their further elementary dependency closure was not treated as a substitute for the opened statements.
- Design and operational records opened: `research/plan-differential-topology-track.md` at the dispatched section, the batch manifest, coverage, proof contracts, and batch notes.

## Source checks

- Audin--Damian, §2.2.b--c: the Smale condition is all stable/unstable pairs transverse; Theorem 2.2.5 fixes only the selected critical Morse charts, assumes distinct critical values, and its band induction is localized by critical-value bands.
- Abbondandolo--Majer, §2.12: Theorem 2.20 works with finite-$C^h$ metric perturbations which vanish on the zero set of a function $\theta$; it requires that every nontransverse orbit meet the positive-$\theta$ region.  Lemmas 2.23--2.25 give the universal-section and finite-$C^h$ residual conclusion.  It does not provide the report item's asserted arbitrary closed protected region or its $C^\infty$ Baire pullback.
- Smale, §1: the Sard--Smale conclusion is residual, with a countable-base/local reduction.  A null critical-value set alone does not imply it is meagre.

## Repair made

- `items/cex-an-index-one-moduli-space-can-be-infinite-without-compactness.md`: corrected the malformed inline TeX `$mathbb R_n$` to `$\mathbb R_n$`.  This is a non-material typography repair; no proof-contract or judge record changed.
- `node tools/tsx-run.mjs tools/reflow.mts` reported the item unchanged after the normalized edit; focused `precheck` passed.  `node tools/manifest-deps.mjs research/frontier-32-batch-18.pages.json` passed (25 items, 0 errors).

## Confirmed unrepaired defects

1. `def-parametrized-morse-trajectory-space` and the downstream A-chain use the published definition of a Morse trajectory, which is explicitly a trajectory of $-\operatorname{grad}_g f$, but `prop-parametrized-morse-trajectory-space-is-a-manifold`, the quotient theorem, the empty-space corollary, and the dimension propositions quantify over an arbitrary gradient-like field $(f,X)$.  No definition identifies their $\widetilde{\mathcal M}(p,q)$ with $X$-orbits.  This is a fatal convention/type mismatch, not a harmless notation change.
2. `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` does not define the claimed weighted Sobolev completion or its weights, and its displayed covariant derivatives are not supplied by the cited cotangent-connection definition.  Its asserted cokernel *identification* is also a quotient rather than the naturally dual obstruction.  The cited source uses an explicitly defined decaying $C^1_0\to C^0_0$ setup.  The current statement/proof is ill-formed at the advertised level of rigor.
3. `thm-sard-smale-residual-regular-values-for-fredholm-maps` infers residuality from a null finite-dimensional critical-value set without establishing meagreness (e.g. via a countable compact exhaustion).  `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics` then calls the finite-stage residual sets “open dense” and pulls them back to the smooth topology without a valid bridge.  The resulting fixed-$f$ smooth-metric residual theorem is therefore not proved by its declared chain.
4. `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` overstates its source: an arbitrary closed protected region is insufficient.  The source requires a zero set that is the closure of an open set and requires every nontransverse orbit to meet the permitted perturbation region; Audin--Damian additionally states a distinct-critical-values hypothesis.  Neither condition appears in the theorem or proof.

## Page verdicts and blockers

- `stable-unstable-manifolds-and-morse-smale-transversality` — **blocked** by defects 1--4, all fatal for current mathematical verification.
- `stable-unstable-manifolds-and-morse-smale-transversality-examples` — **blocked** because its noncompact moduli counterexample inherits defect 1 when it calls $X$-orbit classes `\mathcal M(p_n,q_n)`; the circle and symmetric-torus calculations otherwise checked.
- Focused validation blocker: repository-wide `node tools/depcheck.mjs --quiet` fails on pre-existing, unrelated YAML-escape and unresolved-link errors outside batch 18 (and emits extensive unrelated warnings).  The assigned manifest check and changed-item precheck passed.

## Next action

Choose one convention and carry it through the A chain: either restrict the trajectory/moduli results to metric pairs, or introduce and prove the corresponding $X$-trajectory theory.  Then replace the analytic genericity and relative-perturbation proofs with source-faithful hypotheses and a valid finite-regularity-to-smooth argument; update the affected proof contracts and remove any stale judge records before rechecking.
