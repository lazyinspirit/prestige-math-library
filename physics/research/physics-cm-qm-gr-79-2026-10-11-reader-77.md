# Reader report — batch 77

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: assigned batch `77` only, plus read-only dependency and consumer review.

## Opened inventory

Opened both assigned pages and all 42 listed items, in dependency order.

- A page `gr-gr13-convex-normal-neighborhoods` (`library/general-relativity/gr-gr13-convex-normal-neighborhoods.md`): `lem-gr-maximal-flow-escape`, `lem-gr-lipschitz-family-limit-subsequence`, `lem-gr-finite-smooth-volume-density`, `lem-gr-dominating-cone-bounds`, `thm-gr-auxiliary-complete-riemannian-metric`, `def-gr-future-and-past-sets`, `lem-gr-strong-causality-compact-length-bound`, `lem-gr-strong-causality-escape-sequence`, `lem-gr-joint-exponential-diffeomorphism`, `lem-gr-coordinate-ball-geodesic-convexity`, `lem-gr-contained-geodesic-velocity-bound`, `def-gr-normal-neighborhoods-and-position-vectors`, `thm-gr-convex-normal-neighborhoods`, `lem-gr-position-vector-differential`, `lem-gr-normal-neighborhood-length-monotonicity`, `lem-gr-causal-curve-initial-cone-step`, `thm-gr-normal-neighborhood-causal-cone`, `lem-gr-null-position-vector-forces-null-velocity`, `thm-gr-length-upper-semicontinuity`, `lem-gr-convex-normal-causality`, `lem-gr-causal-curve-conventions`, `lem-gr-chronology-openness`, `lem-gr-basic-limit-curve`, `lem-gr-achronal-boundaries-lipschitz-graphs`, `lem-gr-push-up-rule`, `lem-gr-cauchy-set-topology-and-graph`, `thm-gr-limit-curve-two-endpoints`, `thm-gr-cauchy-surface-implies-globally-hyperbolic`, `lem-gr-globally-hyperbolic-causal-structure`, `lem-gr-chronological-volume-continuity`, `lem-gr-local-cauchy-neighborhood`, `thm-gr-volume-time-function`, `lem-gr-compact-future-cone-intersections`, `lem-gr-cone-bump-functions`, `lem-gr-locally-finite-shell-sum`, `lem-gr-strip-weak-steps`, `thm-gr-smooth-cauchy-temporal-splitting`, `rem-gr-convex-normal-neighborhoods-scope`.
- B page `gr-gr13-convex-normal-neighborhoods-examples` (`library/general-relativity/gr-gr13-convex-normal-neighborhoods-examples.md`): `ex-gr-null-legs-corner-push-up`, `ex-gr-flat-cone-bump-explicit`, `ex-gr-flat-slab-explicit-splitting`, `cex-gr-flat-slab-coordinate-time-flow-incomplete`.

Additional suppliers opened as needed included `def-gr-causal-curves-and-reachability`, `lem-gr-causal-curve-calculus`, `def-gr-timelike-worldline-and-proper-time`, `def-riemannian-distance-on-a-connected-manifold`, `def-riemannian-speed-and-length`, `lem-gr-chronology-openness`, `lem-gr-push-up-rule`, and `thm-gr-local-geodesics-and-exponential-map`.

For the causal-curve length and reparametrization convention, I checked E. Minguzzi, *Limit curve theorems in Lorentzian geometry*, arXiv:0712.3942v2, §2 “Some preliminary results,” printed p. 3: continuous causal curves are locally Lipschitz, their Lorentzian and Riemannian lengths are given by the corresponding almost-everywhere integral, and the Riemannian length parameter is invertible (lines 128–152 of the PDF text). The edited limit-curve statements now also have a local proof of the required arclength reparametrization, rather than relying on that cited convention for the proof. Source: <https://arxiv.org/pdf/0712.3942>.

## Repairs and evidence

| Item | Repair and evidence |
|---|---|
| `thm-gr-auxiliary-complete-riemannian-metric` | Step 4.1 now intersects the proper compact sublevel with the closed component containing the Cauchy sequence before extracting a convergent subsequence. Step 3.1 approximates the distance using the supplier’s piecewise-`C^1` curves. Statement length convention and Step 1.2 define locally absolutely continuous Riemannian length and prove `d_H ≤ ℓ_H` by coordinate metric comparison. Added `def-riemannian-speed-and-length` as the piecewise-smooth length supplier. |
| `def-gr-future-and-past-sets` | Replaced the false boundary argument that treated a boundary point as belonging to `F`: chronology openness in the first endpoint gives `V ⊂ I^-(q)`, then `V ∩ F` contradicts `q ∈ ∂F`. The well-definedness remarks now cite push-up for `J^±`, chronology openness for closures, and a short past timelike geodesic for `F=I^+(F)` when `F` is open. Updated dependency roles accordingly. |
| `lem-gr-joint-exponential-diffeomorphism` | Steps 2.1 and 3.1 choose an exact product neighborhood inside the inverse-function neighborhood and then a closed product inside its image; the prior intersection did not establish the claimed product form. |
| `def-gr-normal-neighborhoods-and-position-vectors` | Clause (c) now derives the radial segment from the star-shaped exponential domain, rather than attributing it to strict convexity. |
| `lem-gr-position-vector-differential` | The statement identifies the reversed curve as a restriction of the maximal geodesic. Proof Step 2.1 only uses inverse-exponential identities when the relevant point lies in a normal neighborhood and the position vector is defined. |
| `lem-gr-null-position-vector-forces-null-velocity` | The statement defines `u^0(q)=-g_p(exp_p^{-1}(q),n_p)` for a normalized future timelike `n_p`; Fact L1 obtains `u^0≥0` directly from the future-cone pairing, without assuming the coordinate is temporal on all of `C`. Removed the unused temporal-function prerequisite. |
| `lem-gr-normal-neighborhood-length-monotonicity` | The statement now explicitly defines finite Lebesgue Lorentzian length for locally absolutely continuous future causal curves and records agreement with the piecewise-`C^1` timelike length. Fact L1 and the comparison clause use that definition. |
| `thm-gr-normal-neighborhood-causal-cone` | Fact L6 now points to the local absolutely continuous causal-length definition. Proof tags were placed at step ends and layout checked. |
| `thm-gr-length-upper-semicontinuity` | The length convention is tied to the local definition, and clause (b) requires the limit curve to belong to the causal curve class so `L_g(α)` is defined. The displayed equations in proof steps were inlined so the proof reflow keeps each step’s closing tags with that step. |
| `lem-gr-convex-normal-causality` | Explicitly defines both `J_B(x)` (including its reflexive vertex `{x}`) and `I_B(x)` by their in-ball curve classes, matching the cone characterization while retaining the nonconstant causal-curve convention. |
| `lem-gr-causal-curve-conventions` | Clause (b) separates nonconstant restrictions, for which a piecewise-smooth causal representative is constructed, from constant restrictions, for which the relation follows by reflexivity. Step 1.1 omits constant geodesic pieces and allocates positive parameter intervals to the remaining pieces. |
| `lem-gr-achronal-boundaries-lipschitz-graphs` | Statement (b) fixes the minorant coefficient at `c=16`; Fact L3 now uses `η_16`. Fact L1 proves achronality using openness in the first endpoint and `F=I^+(F)`. |
| `thm-gr-limit-curve-two-endpoints` | Separates `b=0` from the positive bounded case and calls its limit the constant map, not a future causal curve. The unbounded closure clause now uses spacetime event pairs `u_k,v_k∈M` with `u_k≤v_k`, not real parameters. Proof Step 2.1 establishes exactly that relation. |
| `thm-gr-cauchy-surface-implies-globally-hyperbolic` | Fact L3 records the corrected event-pair conclusion and the constant-map zero-length case. Step 4.2 uses the actual initial points `x_k→p`; for large `k` they lie in the half-radius ball, giving first-exit distance at least `r_0/2` and the corresponding lower length bound. |
| `lem-gr-chronological-volume-continuity` | Step 5.1 now maps clauses (a)–(d) to Steps 2.1, 3.1, 3.2, and 4.1, removing the self-reference to Step 5.1. |
| `lem-gr-basic-limit-curve` | Adds an arclength-reparametrization assertion with a proof in Step 1.2: the cumulative speed is strictly increasing, its inverse is absolutely continuous, and the reparametrized curve has unit `h`-speed. Fact L1 cites the auxiliary-metric theorem for `d_h≤ℓ_h` rather than misstating the definition of Riemannian distance. |
| `lem-gr-globally-hyperbolic-causal-structure` | Fact L3 now states that finite causal curves can be put in `h`-arclength parameter and correctly distinguishes the positive bounded limit from `b=0`. |
| `lem-gr-compact-future-cone-intersections` | Fact L3 now supplies the same proved finite-curve arclength reparametrization before applying the half-line limit theorem. |
| A page summary | The prose now states the equivalence between global hyperbolicity and existence of a Cauchy set under the page’s curve and choice conventions, and credits the reverse direction to the volume-time construction. |

No `verification.judge` entry was present on the changed items. Regenerated all 16 affected batch proof-contract entries, including a final refresh of `lem-gr-convex-normal-causality`; no entry was skipped.

## Consumer review

Reviewed direct cross-batch uses of the edited interfaces. In `lem-gr-time-separation-maximizers` (batch 79), the bounded limit used for length semicontinuity is explicitly future causal on the common domain; the positive endpoint case has `b≥d_h(r,q)>0`, and its zero-length branch is excluded before applying the length theorem. Its local exponential uses remain within convex normal domains. In `lem-gr-corresponding-set-smooth-extension` and `lem-gr-isometric-immersion-rigidity` (batch 79), the normal-coordinate arguments use star-shaped exponential domains and unique radial segments. `lem-gr-compact-past-above-cauchy-set` (batch 79) uses clause (d) of the causal-curve conventions, unchanged by the clause (b) clarification, and the added arclength fact only supplies an explicit proof for its existing use. `lem-gr-partial-cauchy-development` (batch 79) already assumes arclength-parametrized curves in its limit-curve use; the added finite-curve reparametrization result makes that convention explicit without narrowing the limit theorem. `lem-gr-universal-development` and `lem-gr-development-quotient-dense-set` (batch 79) use the unchanged contained-timelike-chord conclusion of `lem-gr-convex-normal-causality`; their uses do not depend on the reflexive vertex clarification. `thm-gr-dust-subsidiary-and-residual-vanishing` (batch 78) uses the existing one-sided limit-curve result; the added reparametrization clause supplies an explicit arclength justification. No outside-scope defect was found in these reviewed uses.

## Unedited defects and page verdicts

- No confirmed or suspected defect remains that I could not edit within the assigned batch.
- **A page `gr-gr13-convex-normal-neighborhoods`:** repairs listed above are in the assigned A-page prose/items; no further defect found in the page summary or item set.
- **B page `gr-gr13-convex-normal-neighborhoods-examples`:** all four assigned examples were reviewed; no defect found and no edit made.
- **Blocker:** none.

## Validation

- Reflow and precheck were run on all 18 changed items. Both nonproof definitions were not applicable to proof checking; all 16 proof-bearing changed items passed precheck.
- Final proof-layout command covered all 18 changed items: `18 items, 108 steps, 0 defects`.
- No known coverage limitation: all assigned pages and listed items were opened, as were the dependencies used to verify the repairs and the direct outside-batch consumers listed above.
