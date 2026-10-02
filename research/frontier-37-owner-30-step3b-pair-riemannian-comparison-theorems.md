# Step 3b — pair `riemannian-comparison-theorems`

Run: `frontier-37-owner-30` · role: alpha-high · batch 13
A page: `riemannian-comparison-theorems` (54 items: the 51 scaffolded items plus three
local A-page suppliers added during the b-leaf repair) · B page:
`riemannian-comparison-theorems-examples` (12 items)

Status: **complete (Step-3b handoff)**. All 63 original scaffold items are authored,
checked and carry current `accept` decisions; the three genuinely new A-page supplier
propositions are authored, registered in manifest/coverage/contracts and await only the
engine's post-author certification class. Every required Step-3b gate is green for this
pair. The handoff section at the end lists the checks actually run, local suppliers
added, published concerns and all open obligations.

## Scope of this dispatch

- Author all 63 scaffolded items of the pair in dependency order and place them on the two
  draft pages.
- Audit each scaffold for hypotheses, sources, direct suppliers and proof route; repair
  local scaffold gaps (deps/metadata) and record any escalations.
- Run, for batch 13: explicit-path precheck, rendercheck, content-policy, strict
  proof-contract, item-dependency-levels, validate-plan with `research/plan-spec.json`.
- Record Step-3b item decisions (`tools/step3-decisions.mjs record-item`) after each item is
  complete and checked.

## Authoring conventions used

- Items are `status: draft`, `origin: pipeline`; statements `literature-derived`, proofs
  `ai-altered` (definitions `not-applicable`). Sources are the three batch-13 full texts.
- Global items state the inherited `AC_ω` seam and list `def-countable-choice` in `deps`
  only where the manifest does; local algebraic/scalar items stay choice-free.
- Proof bodies: `**Given:**` + `[F#]` facts + numbered steps with trailing tags; final step
  carries `∎`; every cited step is earlier.

## Checkpoint log

- [x] Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, batch-13 manifest/coverage/notes/coverage,
  step3a scope review, pre-splice findings, supplier statements.
- [x] Verified all 52 out-of-run direct suppliers exist and are `published`; batch-13
  cross-batch input is `[]`.
### Level 0 — complete (9/9)
- [x] `def-comparison-sine-cosine-and-cotangent-functions` — authored, rendercheck clean.
- [x] `def-laplace-beltrami-operator-as-trace-of-the-hessian` — authored, rendercheck clean.
- [x] `def-radial-jacobi-tensor` — authored; added external deps for the normal-field proof.
- [x] `lem-first-variation-hinge-derivative-formula` — precheck PASS.
- [x] `lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete` — precheck PASS.
- [x] `thm-a-complete-local-isometry-is-a-covering-map` — step 3.1 pairwise-disjointness repaired (reversed-lift uniqueness); renumbered to canonical layers 1.1/2.1/3.1/3.2/4.1/4.2/5.1; precheck PASS, rendercheck clean.
- [x] `thm-no-conjugate-points-under-nonpositive-sectional-curvature` — full convexity proof; canonical chain 1.1-5.1; precheck PASS, rendercheck clean; decision recorded.
- [x] `cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold` — paraboloid calculation det S = 4/(1+4r^2)^2, completeness/noncompactness; precheck PASS, rendercheck clean; decision recorded.
- [x] `cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three` — product H^2(-1)xR^(n-2), Ric=diag(-1,-1,0,...) trace computed; precheck PASS, rendercheck clean; decision recorded.
### Level 1 — complete (6/6)
- [x] `def-comparison-triangle-in-the-two-dimensional-space-form` — definition with three cosine laws, k>0 restrictions; rendercheck clean.
- [x] `def-model-space-radial-area-and-ball-volume` — definition with A_k, V_k and saturated V*_k; rendercheck clean.
- [x] `fs-the-laplace-beltrami-definition-licenses-...` — refuted by compact round sphere (integration by parts) vs R^n linear harmonic; precheck PASS.
- [x] `lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point` — kernel = endpoint-vanishing space, rank-nullity; precheck PASS.
- [x] `prop-model-functions-solve-the-constant-curvature-jacobi-equation` — case analysis + Wronskian; precheck PASS.
- [x] `thm-cartan-hadamard` — local diffeo + pulled-back metric complete via Hopf-Rinow + covering theorem; precheck PASS.

### Level 2 — complete (9/9)
- [x] `thm-sturm-comparison-for-scalar-jacobi-equations` — choice-free Sturm argument via h=u'v-uv', f=u/v, extension-epsilon; precheck PASS, rendercheck clean; decision recorded.
- [x] `thm-bonnet-conjugate-radius-theorem` — index-lemma inequality I(V,V)<=0 with the bracket evaluation [sn sn']_0^b=0; precheck PASS, rendercheck clean; decision recorded.
- [x] `thm-bonnet-myers` — sum of (n-1) second variations bounded by ((n-1)l/2)(pi^2/l^2-k)<0; precheck PASS, rendercheck clean; decision recorded.
- [x] `fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness` — flat torus refutation; published flat-torus items cited; precheck PASS, rendercheck clean; decision recorded.
- [x] `ex-cartan-hadamard-for-hyperbolic-space` — hyperboloid model verified end to end; canonical relabel adopted; precheck PASS, rendercheck clean; decision recorded.
- [x] `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity` — local completeness/curvature/exp derivation plus homotopy-lifting proof that pi_1(T^n) is nontrivial; canonical relabel adopted; precheck PASS, rendercheck clean; decision recorded.
- [x] `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature` — sn_k(t)P_tE derived from the constant-curvature tensor identity and uniqueness; direct edges to published model items added; precheck PASS, rendercheck clean; decision recorded.

### Level 3 — complete (5/5)
- [x] `thm-radial-riccati-equation` — Riccati equation in End(N_t)/End(N_0), self-adjointness via the Wronskian, expansion S=t^{-1}id+O(t) from the Taylor expansion and the adjugate inverse formula; precheck PASS, rendercheck clean; decision recorded.
- [x] `cor-bonnet-myers-fundamental-group-is-finite` — universal cover, lifted complete metric, curvature/Ricci transport by the local isometry, compact cover, finite discrete fibre, deck-group injection; precheck PASS, rendercheck clean; decision recorded.
- [x] `lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian` — Jacobi's formula plus the published distance-Hessian formula and the trace definition of the Laplacian; precheck PASS, rendercheck clean; decision recorded.
- [x] `fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness` — paraboloid with Ric=K g>0 pointwise but inf K=0; precheck PASS, rendercheck clean; decision recorded.
- [x] `ex-bonnet-myers-for-the-round-sphere` — Ric=(n-1)k g and diameter pi/sqrt k via the published cut-locus example; precheck PASS, rendercheck clean; decision recorded.

- [x] Author remaining items (levels 4-10) and the two pages — complete; levels 4–5 done
  in the resumed run, levels 6–10 completed in the provider-recovery continuation and
  closed in this handoff (see the Level 10 and handoff sections).
### Level 4 — complete (3/3)
- [x] `lem-riccati-comparison-for-scalar-initial-shape` — Riccati comparison via the transport equation U'=XU+UX+S, fundamental-matrix conjugation, then the log-derivative norm bound against the scalar model; precheck PASS, rendercheck clean; decision recorded.
- [x] `lem-trace-riccati-inequality` — traced Riccati equation plus Cauchy-Schwarz on the real eigenvalues; precheck PASS, rendercheck clean; decision recorded.
- [x] `thm-rauch-comparison-theorem-first-form` — index comparison at matched terminal vectors, log-derivative inequality, b0-bootstrap; precheck PASS, rendercheck clean; decision recorded.


### Level 5 — complete (8/8)
- [x] `cor-lower-positive-sectional-curvature-forces-conjugate-points` — model field sn_k and Rauch first form give a conjugate point at or before pi/sqrt(k); rendercheck clean; decision recorded.
- [x] `cor-upper-sectional-curvature-bounds-delay-conjugate-points` — contradiction from Rauch first form with the model as the more curved manifold; fixed a T-ordering gap by setting T:=t0; rendercheck clean; decision recorded.
- [x] `fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster` — sphere-vs-Euclidean refutation at t=3pi/4; rendercheck clean; decision recorded.
- [x] `thm-rauch-comparison-theorem-second-form` — tensor Y with initial data id, lambda*id and the in-run Riccati comparison for scalar initial shape; no claim past t_f; rendercheck clean; decision recorded.
- [x] `ex-rauch-comparison-between-euclidean-and-spherical-geodesics` — explicit model fields t and sin t on [0,pi); rendercheck clean; decision recorded.
- [x] `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds` — Hessian = P S(t0) P^{-1} on the normal space; extreme eigenvalues of the Riccati operator with Dini bounds and the matched-asymptotic comparison lemma (integrating factor plus the Dini monotonicity principle proved inline); both curvature directions and Hess r(grad r,.)=0; precheck PASS, rendercheck clean; decision recorded. Local additive dep repair: prop-model-functions..., def-radial-jacobi-tensor, def-radial-riccati-operator, lem-radial-jacobi-tensor-is-invertible..., prop-gradient..., thm-exp-p-is-a-diffeomorphism..., def-sectional-curvature, cor-real-spectral-theorem..., thm-taylor-peano-remainder.
- [x] `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound` — Delta r(q)=tr S(t0); trace Riccati inequality with Ric>=(n-1)k reduces to a'+a^2<=-k for a=tr S/(n-1); integrating-factor comparison with ct_k; precheck PASS, rendercheck clean; decision recorded. Local additive dep repair: prop-model-functions..., prop-gradient..., thm-exp-p-is-a-diffeomorphism..., def-radial-jacobi-tensor, def-radial-riccati-operator, thm-radial-riccati-equation, def-ricci-curvature, thm-taylor-peano-remainder.
- [x] `thm-relative-volume-density-comparison` — (log q_v)'=tr S_v-(n-1)ct_k<=0 by the same traced comparison, q_v(0+)=1 from the two normalisations; precheck PASS, rendercheck clean; decision recorded. Local additive dep repair: def-radial-riccati-operator, def-radial-jacobi-tensor, lem-radial-jacobi-tensor-is-invertible..., def-ricci-curvature, def-cut-time..., thm-taylor-peano-remainder.
- Note (scaffold gap repaired): the three level-5 items above needed the model-function supplier `prop-model-functions-solve-the-constant-curvature-jacobi-equation` (for ct_k'+ct_k^2=-k and the t^{-1} asymptotics) and the radial/Riccati definition suppliers, which the scaffolds only reached transitively; they are now direct deps of the authored items.

- [x] Contracts + checks + decisions. Proof contracts authored for all 66 registered
  items (0 errors under `proof-contract --strict`), the final gate battery is green for
  this pair, and all 61 original items carry current `accept` decisions; see the
  handoff section at the end.
- [x] Final report. Status flipped to complete and the handoff section appended at the
  end of this file.

### Pre-author audit notes (scaffold readiness)

1. `def-radial-jacobi-tensor` must document that `A(t)` maps normal space to normal space
   (the normal field computation is a local obligation of the definition item; no new
   supplier needed).
2. `lem-first-variation-hinge-derivative-formula` must fix orientation signs of the two
   terminal tangents before taking cosines; the published first-variation formula fixes
   them (`g(V(b),U(b^-))-g(V(a),U(a^+))`).
3. B-page space-form examples get direct deps on published model items where the claim
   needs them (scope review §4.3): `ex-cartan-hadamard-for-hyperbolic-space`,
   `ex-bishop-gromov-ratio-is-constant-in-the-model-space`,
   `ex-distance-hessian-and-laplacian-in-space-forms`,
   `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature`,
   `ex-toponogov-comparison-on-a-round-sphere` — see per-item notes at authoring time.
4. No in-run supplier is unfinished for this pair; no cross-group change required so far.

## Resumed run (provider recovery, 2026-09-30)

Resumed from the checkpoint above: levels 0–5 were authored and accepted by the
previous attempt (43 items with current `accept` decisions); levels 6–10 (20 items)
were still missing, and the batch proof-contract file, the two library pages and the
closing checks remained. The owner recovery direction authorises transport recovery
only; every completed claim is rechecked against its suppliers before its consumer is
closed, and every actual supplier use is reconciled.

- [x] `prop-rigidity-in-rauch-comparison` (A, level 6) — authored; first form by the
  equality chain index-lemma/curvature-integral (equality in `thm-index-lemma` gives
  X=J^b, the curvature integrand k−sec forces sec=k), second form by the Riccati
  difference `g_k id−S ≥ 0` annihilating J with `(R_gamma−k)J=0` and the Wronskian
  identification `J=f_k P_t u`. Local dep repair: added the direct suppliers
  `thm-index-lemma`, `def-index-form-of-a-geodesic-segment`,
  `lem-integration-by-parts-for-the-index-form`, `thm-radial-riccati-equation`,
  `def-radial-riccati-operator`, `lem-riccati-comparison-for-scalar-initial-shape`,
  `prop-curvature-tensor-of-constant-sectional-curvature`, `def-sectional-curvature`,
  `def-riemann-curvature-four-tensor`, `def-constant-sectional-curvature-and-space-form`,
  `thm-existence-and-uniqueness-of-parallel-sections`,
  `prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume`,
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `def-jacobi-field`.
  precheck PASS, rendercheck clean; decision `accept` recorded (sha256 3e78bba6…).
- [x] `rem-weak-laplacian-comparison-at-the-cut-locus` (A, level 6) — authored as a
  boundary remark; pointwise comparison confined to the smooth cut complement and the
  distributional extension recorded as not developed; decision `accept` recorded.
- [x] `thm-bishop-gromov-volume-comparison` (A, level 6) — authored. Proof: extend
  $J_p$ by zero past the cut time and $W_k=\operatorname{sn}_k^{n-1}$ by zero past the
  model pole; Myers gives $c_p(v)\le\pi/\sqrt k$; the relative density comparison makes
  $Q_v$ nonincreasing, $[0,1]$-valued with $Q_v(0+)=1$; the published polar formula
  writes $\operatorname{vol}_g(B(p,r))$ as $(\int_0^rW_k)$ times the $\sigma_p$-integral
  of the model-weighted means $A_v(r)$; the two-interval estimate makes $A_v$ (hence
  $R_p$) nonincreasing in $r$; dominated convergence on the finite measure $S_pM$ gives
  limit $1$; vanishing of $W_k$ past the model pole gives constancy on
  $[\pi/\sqrt k,\infty)$. Local dep additions: `def-comparison-sine-cosine-and-cotangent-functions`,
  `def-polar-surface-measure-on-the-unit-sphere`, `def-radial-volume-jacobi`,
  `def-cut-time-in-a-unit-tangent-direction`,
  `lem-minimizing-along-a-geodesic-is-an-initial-interval-property`, `thm-hopf-rinow`,
  `thm-dominated-convergence`. precheck PASS (direct), rendercheck clean; decision
  `accept` recorded (sha256 bef1fed3…).
- [x] `ex-distance-hessian-and-laplacian-in-space-forms` (B, level 6) — authored. On a
  space form the sectional curvature is identically $k$, so both one-sided Hessian
  comparison bounds collapse to $\operatorname{Hess}r=\operatorname{ct}_k(t_0)g$ on the
  normal hyperplane; the radial direction vanishes, giving
  $\operatorname{Hess}r=\operatorname{ct}_k(t_0)(g-dr\otimes dr)$; tracing in the
  orthonormal basis $N\oplus\mathbb R\operatorname{grad}r$ gives
  $\Delta r=(n-1)\operatorname{ct}_k(t_0)$; tracing the constant-curvature tensor gives
  $\operatorname{Ric}=(n-1)kg$, so the model attains equality in both comparison
  theorems. Explicit $\operatorname{ct}_k$ values and the sphere/Euclidean/hyperbolic
  realizations recorded. precheck PASS (direct), rendercheck clean; decision `accept`
  recorded (sha256 fac5821c…).
- [x] `cor-bishop-volume-upper-bound` (A, level 7) — authored. Bishop–Gromov ratio
  nonincreasing with limit one at the origin gives $R_p(r)\le1$, hence
  $\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$. precheck PASS (direct), rendercheck
  clean; decision `accept` recorded (sha256 ebfdfe3c…).
- [x] `cor-volume-doubling-under-a-nonnegative-ricci-lower-bound` (A, level 7) — authored.
  Rearrangement of the monotone ratio at $r<2r$; the $k=0$ factor is exactly $2^n$ by the
  substitution $t\mapsto2t$ in the Lebesgue integral (cited $C^1$ change of variables and
  power laws), and for $k<0$ the factor is the displayed hyperbolic-sine quotient,
  depending on $\sqrt{-k}\,r$ alone. precheck PASS (direct), rendercheck clean; decision
  `accept` recorded (sha256 65c8b3e6…).
- [x] `fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound`
  (A, level 7) — refuted on the unit round sphere with $k=0$: the ratio
  $R_p(r)=V_p(r)/V^\star_0(r)$ is $1$ at $r\to0^+$ and tends to $0$ as
  $r\to\infty$ (the ball saturates at the sphere volume while
  $V^\star_0(r)=\omega_{n-1}r^n/n$ grows without bound), so it cannot be
  nondecreasing. Refuting witness written as an explicit two-limit computation;
  the item file frontmatter now records `verification: precheck: pass` with
  canonical body numbering (1.1, 1.2, 2.1). decision `accept` recorded
  (sha256 eb3369a4…; the file was renumbered by the precheck auto-repair after
  the decision, sha256 now a4c897c8… — a pure formatting change, rechecked by
  rendercheck).
- [x] `prop-rigidity-in-bishop-gromov-on-an-interval` (A, level 7) — authored.
  Extended by zero: $\tilde J_v=Q_vW_k$ with $Q_v$ nonincreasing and $A_v(s)$
  the $W_k$-weighted mean of $Q_v$ over $(0,s)$; the ball volume is
  $\omega_{n-1}\int A_v\,d\sigma_p$ by the polar formula, so equality of the
  ratio at $r<R$ forces $A_v(r)=A_v(R)$ a.e. and then $Q_v=1$ a.e. on $(0,R)$
  (two-interval estimate, $\phi=\phi^+-\phi^-$, $A_v(0+)=1$); the traced
  Riccati equation with Cauchy–Schwarz equality on $S_v$ gives
  $S_v=\operatorname{ct}_k\operatorname{id}$ and $R_\gamma=k\operatorname{id}$,
  hence $A_v=\operatorname{sn}_k P_t$; the Jacobi-field formula for
  $d(\exp_p)$ yields the normal-coordinate pullback metric for a.e. direction,
  continuity extends it to $B_0(R)$, and
  $\exp_o\circ L\circ\exp_p^{-1}$ is an isometry onto the model ball (model
  case computed separately; three realizations handled by F13/F14).
  Local repair: this file had been corrupted by `adopt-repair` (canonical step
  titles written over bodies in the old positions); rebuilt from the clean
  proof text with the canonical order 1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 4.1, 5.1,
  6.1, 7.1, 8.1, all prose `step k.j` references re-mapped (including
  `[F6, F7, F14]` for the exp-diffeomorphism step and `[F4, F7, step 6.1]` for
  the extension step), and the misaligned tags corrected. precheck PASS
  (direct), rendercheck clean; decision `accept` recorded
  (sha256 52c394b8…). Next: `thm-cheng-maximal-diameter-rigidity` (A, level 7).

- [x] `thm-cheng-maximal-diameter-rigidity` (A, level 7) — authored (Shiohama's
  argument, from Datar Thm 28.2.1 and Eschenburg §§12.6–12.7): compactness plus
  the extreme-value property produce a diametral pair $(p,q)$; the pole
  $q$ admits a minimizing geodesic from every point, and
  $c_p\le\pi/\sqrt k$ (Myers), so the Bishop–Gromov ratio
  $R_p(s)=\operatorname{vol}_g(B(p,s))/V^\star_k(s)$ is nonincreasing with limit
  $1$ at $s\to0^+$ and equals $1$ at $s=\operatorname{diam}M=\pi/\sqrt k$;
  monotonicity then forces $R_p\equiv1$ on $(0,\pi/\sqrt k)$, and the
  complementarity chain (positive-density positivity + disjoint half-balls +
  Bishop upper bound) yields $d(p,x)+d(q,x)=\operatorname{diam}M$ for all $x$;
  the cut time of every unit direction at $p$ is $\operatorname{diam}M$ because a
  minimizing segment from $\gamma(c_p(v))$ to $q$ concatenates; then
  `prop-rigidity-in-bishop-gromov-on-an-interval` exhibits
  $\exp_p:(B_0(R),h_k)\to(B(p,R),g)$ as an isometry; the model side is the
  published normal-coordinate description of the round sphere plus the dilation
  $L$; the two local isometries glue by uniqueness of local isometries on the
  path-connected punctured sphere $P$, the extension over the poles is
  continuous, and
  $\Theta=\exp_o\circ L\circ\exp_p^{-1}:M\to S^n_{1/\sqrt k}$ is a bijective
  local isometry, hence an isometry. The $\mathrm{AC}_\omega$ assumption is
  inherited (dominated convergence and the countable cover argument in the
  polar-formula suppliers). precheck PASS (direct, after canonical step
  numbering), rendercheck clean, depcheck reports no
  `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps` entry for
  this file; decision `accept` recorded (confidence 1, sha256 0870fa55…).
  Next: `thm-toponogov-hinge-comparison` (A, level 7).

### Local repair before the level-7 items: canonical id `def-radial-volume-jacobian`

- Defect found by `tools/depcheck.mjs` while re-reading the level-7 suppliers:
  `items/def-radial-volume-jacobian.md` carried frontmatter `id: def-radial-volume-jacobi`
  (no "n"), while the manifest, `research/plan-differential-geometry-track.md`
  line 6052, the dispatch and every consumer use `def-radial-volume-jacobian`; the
  mismatch broke `dep-unresolved`/`link-unresolved` for
  `prop-rigidity-in-bishop-gromov-on-an-interval` and would also have broken
  `lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian`.
  Repair: frontmatter `id:` normalized to `def-radial-volume-jacobian`; all references
  in `items/thm-bishop-gromov-volume-comparison.md` and
  `items/thm-relative-volume-density-comparison.md` normalized (the other consumers
  already used the canonical spelling). The two independent Step-3b review JSONs
  (`frontier-37-owner-30-step3b-review-thm-bishop-gromov-volume-comparison.json`,
  `…-review-thm-relative-volume-density-comparison.json`) record the pre-repair
  spelling in their `dependencies` snapshots; they are preserved verbatim as
  independent review records and are unaffected by the item-level fix.
- Second defect found by the same depcheck run: `cited-not-in-deps`.
  `items/thm-bishop-gromov-volume-comparison.md` cites `def-riemannian-volume-density`
  in its Statement (line 46) but the id was absent from `deps`; added. Likewise
  `items/thm-relative-volume-density-comparison.md` cites `thm-radial-riccati-equation`
  in `[F3]` (line 94, self-adjointness and $S_v(t)=t^{-1}\operatorname{id}+O(t)$)
  but the id was absent from `deps`; added. Both are genuine load-bearing citations
  (Riemannian volume measure used in the polar formula; the Riccati initial
  asymptotics used to evaluate $q_v(0+)$).
- Because the per-item hash includes the transitive input text, this repair changed
  the sha256 of `def-radial-volume-jacobian` and of its transitive consumers.
  Re-recorded (mathematics unchanged, texts re-checked): `def-radial-volume-jacobian`,
  `lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian`,
  `thm-relative-volume-density-comparison`, `thm-bishop-gromov-volume-comparison`,
  `prop-rigidity-in-bishop-gromov-on-an-interval`, `cor-bishop-volume-upper-bound`,
  `cor-volume-doubling-under-a-nonnegative-ricci-lower-bound`,
  `fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound`; all
  decisions `accept`, confidence 1, with the actual dependencies listed from the
  current frontmatter. Checks run on the touched files: precheck PASS (and
  "0 checked, 0 failing" for the definition), rendercheck clean, depcheck reports
  no `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps` entry for
  any of the five touched pair files.
- `step3-decisions.mjs check --run frontier-37-owner-30 --phase final` now lists
  exactly the 12 not-yet-authored items as open. Next:
  `thm-cheng-maximal-diameter-rigidity` (A, level 7).

### Local repair before the level-7 items: spherical cosine law in the comparison-triangle definition

- **Confirmed defect repaired.** `items/def-comparison-triangle-in-the-two-dimensional-space-form.md`
  (our own pair item, level 1) printed, in the $k>0$ branch, the cosine law
  $\cos\bar\alpha=(\cos(\sqrt k b)\cos(\sqrt k c)-\cos(\sqrt k a))/(\sin(\sqrt k b)\sin(\sqrt k c))$,
  whose numerator is the negative of the correct one. The correct spherical law of
  cosines for the angle opposite the side $\sqrt k\,a$ is
  $\cos\bar\alpha=(\cos(\sqrt k\,a)-\cos(\sqrt k\,b)\cos(\sqrt k\,c))/(\sin(\sqrt k\,b)\sin(\sqrt k\,c))$;
  verified against Lang, *Riemannian and Metric Geometry*, Lemma 5.1
  ($\operatorname{cs}_\kappa(c)=\operatorname{cs}_\kappa(a)\operatorname{cs}_\kappa(b)+\kappa\operatorname{sn}_\kappa(a)\operatorname{sn}_\kappa(b)\cos\gamma$, $\kappa\ne0$),
  which for $\kappa>0$ gives exactly this formula. Euclidean and hyperbolic branches
  were already correct. A clarifying sentence (angular sides $\sqrt k a,\sqrt k b,\sqrt k c\in(0,\pi)$,
  sum less than $2\pi$) was added.
- Checks on the repaired file: precheck PASS (0 checked, 0 failing — definition),
  rendercheck clean, depcheck lists no `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps`
  entry for it. Decision re-recorded `accept`, confidence 1 (sha256 ce2ac02a…).
- Transitive consumer re-recorded because the per-item hash includes transitive input
  text: `lem-toponogov-distance-support-inequality` (uses the definition for side
  lengths and angle conventions only, not the $k>0$ cosine identity). Decision
  re-recorded `accept`, confidence 1 (sha256 4e5cc208…). No other accepted item cites
  the definition; the not-yet-authored hinge/triangle items will use the corrected
  formula. Next: `thm-toponogov-hinge-comparison` (A, level 7).

- [x] `lem-first-variation-hinge-derivative-formula` (A, level 0) — **re-recorded**
  after a formatting repair: the audit-step body paragraph was rewrapped so no
  proof line begins with a step-like number (the earlier wrap made `1.3.` start
  a line, which precheck's step detector read as a phantom step and which then
  made the canonical layer relabeling non-trivial), and the terminal glyph was
  normalized from `\square` to `∎`. Mathematical content unchanged; part (a) is
  the smooth-family first-variation formula with vanishing integrand and corner
  sum, part (b) the hinge derivative via smoothness of $r_o$ off the cut locus,
  the radial gradient, the chain rule and $\cos\theta=-g(\dot\sigma,\dot\gamma)$.
  precheck PASS (direct), rendercheck clean, depcheck lists no
  `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps` entry for
  the file. Decision re-recorded `accept`, confidence 1
  (sha256 5582449e…).

- [x] `thm-toponogov-hinge-comparison` (A, level 7) — authored. Statement: for a
  complete connected boundaryless $(M,g)$ of dimension $n\ge2$ with $K\ge k$,
  unit-speed **minimizing** legs of lengths $a,b>0$ from a common point with
  included angle $\theta$, and $c=d(x,y)$: $c\le c_k(a,b,\theta)$ where
  $c_k(a,b,\theta)$ is the model opposite side, with the extra bounds
  $a,b,c<\pi/\sqrt k$, $a+b+c<2\pi/\sqrt k$ when $k>0$. Proof route: (i) the
  comparison-angle function of the side lengths is defined on
  $I(A,B)=(|A-B|,m(A,B))$ by the model cosine law and shown continuous, strictly
  increasing with limits $0,\pi$, so $\Phi^{-1}$ is the model opposite side;
  (ii) the model hinge value $\hat c$ is shown to equal $\Phi^{-1}(\theta)$ for
  $\theta\in(0,\pi)$ by the triangle inequality, the antipodal bound
  $2D-a-b$ (periodicity of the radial geodesic and $\mathrm{Cut}=\{\text{antipode}\}$),
  and strictness of the degenerate cases $\hat c=a+b$, $\hat c=|a-b|$,
  $\hat c=2D-a-b$; (iii) endpoint values
  $c_k(a,b,0)=|a-b|$, $c_k(a,b,\pi)=\min\{a+b,2D-a-b\}$ computed from the
  minimizing radial geodesic; (iv) on the $M$ side, the cases $c=a+b$ (forces
  $\theta=\pi$, equality) and $c=|a-b|$ (reverse triangle inequality) are
  disposed of, and in case $|a-b|<c<a+b$ the shifted point
  $x_\varepsilon=\sigma_1(a-\varepsilon)$ is shown to satisfy
  $p\notin\operatorname{Cut}(x_\varepsilon)$ via the two-alternative cut
  characterization: a second minimizing geodesic through the point forces
  $c_p(\sigma_1'(0))\le a-\varepsilon$, contradicting $c_p(\sigma_1'(0))\ge a$,
  while conjugacy along $\sigma_1$ contradicts minimality of $\sigma_1$ by the
  no-minimization-past-the-first-conjugate-point theorem; (v) the support
  inequality [F2] for the shifted comparison triangle plus the two
  first-variation derivatives [F3] give
  $G_\varepsilon'(0^+)=\cos\bar\theta_\varepsilon-\cos\theta\ge0$, hence
  $\theta\ge\bar\theta_\varepsilon$, and joint continuity of the
  comparison-angle formulas passes to $\varepsilon\downarrow0$, so strict
  increase of $\Phi^{-1}$ gives $c\le c_k(a,b,\theta)$.
  Local repairs while authoring: the spherical cosine-law defect of
  `def-comparison-triangle-in-the-two-dimensional-space-form` (level 1) was
  fixed before this item used it; the statement prose no longer claims equality
  in the degenerate case $c=|a-b|$ (false in general — a flat torus with two
  minimizing geodesics to $x$ and $y$ on one of them has $c=|a-b|$ but
  $c_k>c$); step numbering was made canonical (labels equal citation-derived
  layers: 1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1, 6.2, 7.1, 8.1, 9.1)
  and all eight multiline display blocks were flattened to one source line for
  rendering. precheck PASS (direct), rendercheck clean, depcheck lists no
  `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps` entry for
  the file. Decision `accept` recorded, confidence 1 (sha256 b81df4a5…).
  Suppliers [F2] `lem-toponogov-distance-support-inequality` and [F3]
  `lem-first-variation-hinge-derivative-formula` are authored and accepted in
  this pair; [F4] `thm-characterization-of-a-cut-point`,
  `thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point` and the
  Hopf–Rinow/exponential suppliers are published. Next: the level-7 B examples
  `ex-bishop-gromov-ratio-is-constant-in-the-model-space` and
  `ex-volume-growth-in-euclidean-and-hyperbolic-space`.

- [x] `ex-bishop-gromov-ratio-is-constant-in-the-model-space` (B, level 7) —
  authored. Statement: for a complete, connected, simply connected
  constant-curvature-$k$ $n$-manifold ($n\ge2$), taken to be the round sphere
  $S^n_{1/\sqrt k}$ when $k>0$, the ball volume is the saturated model volume,
  $\operatorname{vol}_g(B(p,r))=V^\star_k(r)$, so the Bishop–Gromov ratio is
  identically $1$, with the same saturation past $r=\pi/\sqrt k$ for $k>0$.
  Proof: (i) the radial Jacobi tensor of a constant-curvature-$k$ manifold is
  $A(t)=\operatorname{sn}_k(t)P_t$, so in the parallel frame
  $\det a_v(t)=J_p(t,v)=\operatorname{sn}_k(t)^{n-1}$
  ($\dim N_0=n-1$); (ii) cut times: for $k\le0$ Cartan–Hadamard makes
  $\exp_p$ injective and Hopf–Rinow supplies the minimizing geodesic to each
  $\gamma_v(t)$, forcing $c_p(v)=+\infty$, while for $k>0$ the published
  round-sphere cut-locus example gives $c_p(v)=\pi/\sqrt k$; (iii) the
  published polar formula applied to $\mathbf 1_{B(p,r)}$ gives
  $\operatorname{vol}_g(B(p,r))=\omega_{n-1}I(r)$ with
  $I(r)=\int_0^{\min\{r,\pi/\sqrt k\}}\operatorname{sn}_k^{n-1}$ (the cutoff
  $\min\{r,\pi/\sqrt k\}=r$ when $k\le0$), and
  $\omega_{n-1}I(r)=\int_0^mA_k=V_k(m)=V^\star_k(r)$; (iv) $V^\star_k>0$ and
  $R_p\equiv1$, and with $\operatorname{Ric}=(n-1)kg$ (supplied by the in-run
  space-form example) the Bishop–Gromov comparison hypotheses hold, so the
  model is an equality case at every radius. Local dep additions:
  `cor-polar-integration-may-discard-the-cut-locus`,
  `def-polar-surface-measure-on-the-unit-sphere`, `def-borel-sigma-algebra`,
  `def-radial-jacobi-tensor`,
  `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature`,
  `prop-model-functions-solve-the-constant-curvature-jacobi-equation`,
  `def-comparison-sine-cosine-and-cotangent-functions`,
  `def-constant-sectional-curvature-and-space-form`,
  `def-cut-time-in-a-unit-tangent-direction`,
  `lem-minimizing-along-a-geodesic-is-an-initial-interval-property`,
  `thm-cartan-hadamard`, `thm-hopf-rinow`,
  `ex-cut-locus-of-a-point-on-a-round-sphere`,
  `ex-the-round-sphere-has-positive-constant-sectional-curvature`,
  `ex-distance-hessian-and-laplacian-in-space-forms`; level stays 7
  (max in-run dep: `thm-bishop-gromov-volume-comparison` and
  `ex-distance-hessian-and-laplacian-in-space-forms`, both 6). precheck PASS
  (direct), rendercheck clean, depcheck lists no error for the file. Decision
  `accept` recorded, confidence 1 (sha256 baabc5cb…). Next:
  `ex-volume-growth-in-euclidean-and-hyperbolic-space` (B, level 7).

- [x] `ex-volume-growth-in-euclidean-and-hyperbolic-space` (B, level 7) —
  authored. Statement: for a complete, connected, simply connected
  constant-curvature-$k$ $n$-manifold ($n\ge2$) with $k\le0$, the flat case
  $k=0$ has $V_0(r)=\omega_{n-1}r^n/n$, and the hyperbolic case $k=-a^2$
  ($a>0$) has
  $V_{-a^2}(r)=\omega_{n-1}\int_0^r(\sinh(at)/a)^{n-1}dt$ together with the
  explicit lower bound
  $V_{-a^2}(r)\ge\frac{\omega_{n-1}r}{2(4a)^{n-1}}e^{a(n-1)r/2}$ for
  $r\ge2/a$ (at least exponential growth at rate $a(n-1)/2$). Proof: radial
  density $\operatorname{sn}_k^{n-1}$ + Cartan–Hadamard (no cut points,
  $k\le0$) + polar formula give $\operatorname{vol}_g(B(p,r))=V_k(r)$; the
  two closed forms follow from $\operatorname{sn}_0(t)=t$ and
  $\operatorname{sn}_{-a^2}(t)=\sinh(at)/a$ (power integral by FTC + power
  rule); the growth bound from $\sinh x\ge e^x/4$ ($x\ge1$),
  $\exp$ monotonicity, $e>2$ and integral additivity/monotonicity. Local dep
  additions include `cor-polar-integration-may-discard-the-cut-locus`,
  `thm-cartan-hadamard`, `thm-hopf-rinow`, `thm-ftc-second-part`,
  `lem-derivative-of-a-power`, `thm-continuous-implies-integrable`,
  `def-hyperbolic-functions`, `cor-exponential-reciprocal-and-positivity`,
  `thm-exponential-is-strictly-increasing`,
  `cor-two-less-than-e-less-than-three`, `thm-monotonicity-of-the-integral`,
  `thm-additivity-over-subintervals`,
  `ex-euclidean-space-has-zero-curvature`,
  `ex-distance-hessian-in-euclidean-space`,
  `ex-hyperbolic-space-has-negative-constant-sectional-curvature`. The two
  level-7 B examples deliberately re-derive the model ball volume
  independently (the first also covers $k>0$ via the round sphere); no
  dependency or label change to the batch-13 manifest. precheck PASS
  (direct), rendercheck clean, depcheck lists no error for the file. Decision
  `accept` recorded, confidence 1 (sha256 0cd95a08…). Next: level-8 items
  `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`
  and `thm-toponogov-triangle-comparison`.

- [x] `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`
  (A, level 8) — authored. Statement: a complete, connected, noncompact
  Riemannian $n$-manifold ($n\ge2$) with $\operatorname{Ric}\ge0$ has at most
  Euclidean volume growth, i.e. $\operatorname{vol}_g(B(p,r))\le\omega_{n-1}r^n/n$
  for every $p$ and $r>0$ (in particular
  $\limsup_{r\to\infty}\operatorname{vol}_g(B(p,r))/r^n<\infty$). Proof:
  $k=0$ in `cor-bishop-volume-upper-bound` gives
  $\operatorname{vol}_g(B(p,r))\le V^\star_0(r)$, and the flat model volume
  $\omega_{n-1}r^n/n$ is evaluated by the power integral
  (`thm-ftc-second-part` + `lem-derivative-of-a-power`); noncompactness is
  context (the bound is stated for all complete connected $M$ with
  $\operatorname{Ric}\ge0$, where compact examples are trivially bounded).
  precheck PASS (direct), rendercheck clean, depcheck lists no error for the
  file. Decision `accept` recorded, confidence 1 (sha256 0a35ddfe…).

- [x] `thm-toponogov-triangle-comparison` (A, level 8) — authored. Statement:
  complete, connected, boundaryless $n\ge2$ with $K\ge k$; three points joined
  by minimizing segments with positive side lengths admitting a comparison
  triangle in $M^2_k$ (strict triangle inequalities; for $k>0$ each side
  $<\pi/\sqrt k$ and perimeter $<2\pi/\sqrt k$); actual angles
  $\alpha,\beta,\gamma\ge$ comparison angles
  $\bar\alpha,\bar\beta,\bar\gamma$ — fixed-side triangles are fatter than the
  model. Proof: at each vertex apply the hinge comparison
  [F2 = `thm-toponogov-hinge-comparison`] to the two minimizing sides with the
  opposite side as endpoint distance; $\alpha=0$ is impossible via the endpoint
  value $c_k(A,B,0)=|A-B|$ and the strict triangle inequality; then
  $a\le c_k(b,c,\alpha)$, $a=c_k(b,c,\bar\alpha)$ from the inverse identity
  $c_k(A,B,\Phi_{A,B}(C))=C$ at $a\in(|b-c|,m(b,c))$, and strict monotonicity of
  $c_k(b,c,\cdot)$ on $[0,\pi]$ give $\bar\alpha\le\alpha$; cyclically for the
  other two vertices; the closing step handles $\theta=\pi$, the excluded
  $k>0$ endpoints, and choice-freeness (only the inherited $\mathrm{AC}_\omega$
  [A1]). Deps are the manifest's: [F2], [F1] comparison triangles,
  `lem-first-variation-hinge-derivative-formula` ([F3] recorded for
  conventions), `def-countable-choice`, space form and angle definitions.
  Local repair while authoring: the $F_{A,B}$ case display in [F1] was a
  multi-line `$$` block rejected by rendercheck; flattened to one source
  line. precheck PASS (direct), rendercheck OK, depcheck lists no error for
  the file. Decision `accept` recorded, confidence 1 (sha256 02647ff9…).
  Next: level-9 items starting with
  `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model`.

- [x] `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model`
  (A, level 9) — authored. False claim: $K\ge k$ makes fixed-side triangles
  thinner than the model (every actual angle at most the corresponding
  comparison angle). Refuted by the octant triangle on the unit round sphere
  at $k=0$: (i) $S^2$ is complete, connected, boundaryless, $K=1\ge0$
  (published round-sphere curvature plus in-run
  `ex-bonnet-myers-for-the-round-sphere`,
  `cor-euclidean-spheres-are-path-connected`); (ii) $\sigma_{ij}(t)=\cos
  t\,e_i+\sin t\,e_j$ is the unit-speed geodesic from $e_i$ in direction
  $e_j$, minimizing of length $\pi/2$ since $d_g(e_i,e_j)=\arccos 0=\pi/2$
  by the round-sphere distance formula
  $d=R\arccos(\langle p,q\rangle/R^2)$ of
  `ex-cut-locus-of-a-point-on-a-round-sphere` at $R=1$; the side lengths
  $(\pi/2,\pi/2,\pi/2)$ admit a Euclidean comparison triangle; (iii) actual
  angles are $\arccos\langle e_i,e_j\rangle=\pi/2$ via induced metric +
  angle definition; (iv) the cycled Euclidean cosine law and the $k=0$ angle
  sum $\pi$ give all three comparison angles $\pi/3<\pi/2$. Actual strictly
  exceeds model: the triangle is fatter, not thinner, in agreement with
  `thm-toponogov-triangle-comparison`. precheck PASS (direct, after
  adopting canonical $1.1$–$1.4$/$2.1$ numbering), rendercheck OK, depcheck
  lists no error for the file. Decision `accept`, confidence 1
  (sha256 86745d28…). Next:
  `prop-distance-between-corresponding-side-points-in-toponogov-comparison`.

- [x] `prop-distance-between-corresponding-side-points-in-toponogov-comparison`
  (A, level 9) — authored. Full chord comparison: for a curvature lower bound
  $K\ge k$, points $u=\sigma_1(s)$, $v=\sigma_2(t)$ at fixed fractions of two
  minimizing sides from a common vertex satisfy
  $d_g(u,v)\ge d_k(\bar u,\bar v)$. Proof route: [F1] model bookkeeping via
  strict monotonicity of the model opposite side $c_k(A,B,\cdot)$; arc bounds
  from the closed curve $\sigma_1\cup\gamma_{qr}\cup\sigma_2^{-1}$ (each
  auxiliary triangle has sides $<D_k$ and perimeter $<2D_k$ when $k>0$);
  straight-angle identity $\angle_W(p,r)+\angle_W(q,r)=\pi$ at an interior
  point of a leg from the angle definition $[F5]$ and
  $\arccos(-x)=\pi-\arccos x$; the Alexandrov transfer (Lang Lemma 5.3) proved
  inline from the model cosine law, gluing model configurations along $Wr$
  with comparison angles summing to $\le\pi$; degenerate auxiliary triples
  handled with model angle values $0$/$0$/$\pi$ coinciding with the actual
  angles; endpoints $s\in\{0,a\}$, $t\in\{0,b\}$ settled in steps 1.2 and 4.2;
  only single geodesics selected one at a time (Hopf–Rinow), so inherited
  $\mathrm{AC}_\omega$ suffices. Local repairs while authoring: audit step
  renumbered $4.3\to5.1$ for the layer order, and two prose lines re-wrapped
  so no continuation line begins with a bare `d.d` (they were parsed as
  duplicate step labels and scrambled the canonical repair output). precheck
  PASS (direct), rendercheck OK, depcheck lists no error for the file.
  Decision `accept`, confidence 1 (sha256 a6146693…). Next:
  `rem-alexandrov-and-differentiable-sphere-theorems`.

- [x] `rem-alexandrov-and-differentiable-sphere-theorems` (A, level 9) —
  authored as a scope-boundary remark (`proved_here: false`,
  `precheck: n/a`): metric (Alexandrov) curvature bounds defined by triangle
  comparison with the smooth equivalence (Lang Definition 5.10, Lemma 5.11,
  Theorem 5.12, printed p.68; Theorem 5.17), the quarter-pinched
  Rauch–Berger–Klingenberg sphere theorem with the sharpness remark and the
  Grove–Shiohama diameter variant (Eschenburg §11, Theorem 11.1, Remarks
  11.2–11.3, printed pp.49–51), and stability theory all recorded as
  deferred; no upper-bound comparison, injectivity-radius estimate or sphere
  theorem is asserted; the only sphere conclusion of the pair, Cheng rigidity,
  is explicitly marked as not a pinching theorem. Local scaffold repair:
  deps extended by `thm-toponogov-hinge-comparison` and
  `thm-cheng-maximal-diameter-rigidity` to match the two orientation
  wikilinks in the text (level stays 9: max dep level 8 + 1). Verified no
  item of either page cites this remark. rendercheck OK, depcheck clean (no
  entry for the file). Decision `accept`, confidence 1. Next:
  `ex-equality-cases-as-diagnostics-for-all-comparison-signs`.

- [x] `ex-equality-cases-as-diagnostics-for-all-comparison-signs` (B, level 9) —
  authored. Two-part diagnostic. (1) Equality in the constant-$k$ models for
  all five comparisons: Rauch via $J(t)=\operatorname{sn}_k(t)P_tE$; Hessian
  and Laplacian via the space-form equalities; Bishop–Gromov ratio $1$; and
  the Toponogov model triangle is its own comparison triangle (uniqueness in
  the comparison-triangle definition) while the model hinge side is $c_k$ by
  definition. (2) Strict signs of the flat-versus-positive and
  flat-versus-negative models from the explicit formulas: $\operatorname{sn}$
  ordering via $\partial_k\operatorname{sn}_k(t)=-m_k(t)/2$ with
  $m_k(t)=\int_0^t x\operatorname{sn}_k(x)\,dx>0$; $\operatorname{ct}$
  ordering via the explicit cot/coth derivatives and the elementary estimates
  $\sin x<x$, $\sinh y>y$, $\cot x<1/x$, $\coth y>1/y$; volume ordering by
  pointwise density comparison with the saturated cutoff; and strict
  monotonicity of the model angle in $k$,
  $\theta'=2M_1/(\operatorname{sn}_k a\operatorname{sn}_k b\sin\theta)>0$,
  proved from the half-angle cosine law, the weight identity
  $h(v)=\cos^2(\theta/2)h(u)+\sin^2(\theta/2)h(s)$, the addition identity
  $\operatorname{sn}_k(u)m(u)+\tfrac12[m(a)\operatorname{sn}_k(b)+\operatorname{sn}_k(a)m(b)]=\operatorname{sn}_k(s)m(s)$
  (proved by product-to-sum in all three curvature cases), and strict
  convexity of $h\mapsto G=\operatorname{sn}_k m$ via
  $\Gamma''=[\rho'+\tan_k+t/\operatorname{cs}_k^2]/(4\operatorname{sn}_k\operatorname{cs}_k)>0$;
  the $s>D_k/2$ saturation case and the $|u|=t_s$ edge case are handled in
  step 4.1. Local repair while authoring: nine multi-line `$$` displays
  flattened to single source lines. precheck PASS (direct; layered 1.1–6.2),
  rendercheck OK, depcheck clean; verified no item of either page cites the
  example, so the "never a dependency" promise holds. Deps extended with the
  suppliers actually used (model spaces/triangles/volumes, Rauch, the two
  model-equality examples, trigonometric/hyperbolic addition and derivative
  facts); level stays 9 (max dep level 8 + 1). Decision `accept`,
  confidence 1. Next: `ex-toponogov-comparison-on-a-round-sphere`.
- [x] `ex-toponogov-comparison-on-a-round-sphere` (B, level 9) — authored.
  Statement: $k>0$, $R=1/\sqrt k$, $S_R^n$ ($n\ge2$) with the induced metric,
  model $M^2_k$ realized as the round two-sphere of radius $R$; every
  admissible hinge has $c=c_k(a,b,\theta)$; every admissible triangle has
  actual angles = comparison angles and is its own comparison triangle (its
  vertices lie in a great two-sphere, and an explicit linear isometry of the
  three-dimensional span carries the triangle to a comparison triangle); the
  corresponding-side-point chord equality is computed directly as a
  diagnostic, not as a proof of the general proposition. Proof: explicit
  geodesic formula $\sigma(t)=\cos(t/R)p+R\sin(t/R)v$ and distance formula
  $d=R\arccos(\langle\cdot,\cdot\rangle/R^2)$ from the published cut-locus
  example; bilinear expansion gives the hinge value
  $R\arccos(\cos(a/R)\cos(b/R)+\sin(a/R)\sin(b/R)\cos\theta)$ on both the
  actual and the model side; uniqueness of maximal geodesics gives uniqueness
  of minimizing segments below $\pi R$; the spherical law of cosines at a
  vertex gives $\cos\alpha=F_{b,c}(a)$ and hence $\alpha=\bar\alpha$;
  orthonormal-basis linear isometry $\Phi$ of the vertex span realises the
  self-comparison claim; endpoint angles $\theta=0,\pi$ verified against
  $c_k(a,b,0)=|a-b|$ and $c_k(a,b,\pi)=m(a,b)$; $\mathrm{AC}_\omega$ inherited,
  only single selections used. Local scaffold repair: deps extended with the
  published suppliers actually cited (cut-locus example, round-sphere
  curvature, constant-curvature predicate, angle definition, Euclidean inner
  product, Cauchy–Schwarz, addition formulas, principal inverse cosine,
  existence/uniqueness of geodesics, orthonormal bases, isometry definition
  and distance preservation); level stays 9 (max dep level 8 + 1). precheck
  PASS (direct; layered 1.1–4.1), rendercheck OK, depcheck lists no entry for
  the file; numerical spot checks of the hinge, cosine-law, angle and chord
  identities passed. Decision `accept`, confidence 1 (sha256 61c74cf8…).
  Next: `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound`
  (A, level 10).

### Level 10 — complete (1/1)

- [x] `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound`
  (A, level 10) — authored. Statement: under the inherited $\mathrm{AC}_\omega$,
  a complete, connected, boundaryless Riemannian $n$-manifold ($n\ge2$,
  $\dim$ finite) with $K\ge k$ for some $k>0$ and
  $\operatorname{diam}(M,g)=\pi/\sqrt k$ is isometric to the round sphere
  $S^n_{1/\sqrt k}$ of sectional curvature $k$. The route is the sectional
  (Toponogov) one: no simple connectedness is assumed and the
  Ricci-curvature Bishop–Gromov route is explicitly not used. Proof layers
  $1.1$–$11.1$: (1.1) compactness from finite diameter plus Hopf–Rinow, and
  the extreme-value theorem give a diametral pair $(p,q)$; (1.2) the
  strict-domain limit of the chord comparison at the degenerate perimeter
  $a+b+c=2\pi/\sqrt{k_*}$: the model chord at the balanced fraction
  $s=(a-b+c)/2$ satisfies $\beta(k')\to\pi R_*=(a+b+c)/2$ as $k'\uparrow k_*$
  (two cosine-law equations eliminate the comparison angle; continuity and
  $\arccos(-1)=\pi$ close the limit); (1.3) the agreement lemma for local
  isometries (the set where $F=G$ and $dF=dG$ is nonempty, closed and open by
  normal coordinates and uniqueness of geodesics); (2.1) a local isometry of a
  round sphere extends to an orthogonal map (orthonormal frames); (2.2) the
  perimeter bound: every triple joined by minimizing segments has perimeter
  $\le 2D$, by contradiction with $k_*:=(2\pi/P)^2<k$ and the chord comparison
  of step 1.2; (3.1) the distance-sum identity $d(p,x)+d(x,q)=D$ from the
  triangle inequality and the perimeter bound; (4.1) radial geodesics from
  $p$ and from $q$ minimize on $[0,D]$ and join the poles at time $D$;
  (4.2) minimizing segments from each pole are unique (concatenation with a
  minimizing segment to the other pole); (5.1) the cut time of every unit
  direction at either pole is exactly $D$; (5.2) equality in the radial index
  form, tested with $\operatorname{sn}_k(t)E(t)$, forces every radial
  sectional curvature to equal $k$; (6.1) $\exp_p$ and $\exp_q$ are
  diffeomorphisms from the open model ball $B_0(D)$ onto the once-punctured
  manifolds; (6.2) the radial Jacobi-field computation, the Gauss lemma and
  the identity $d(\exp_p)_0=\operatorname{id}$ show that the pulled-back
  metric is the model metric $h_k$ on $B_0(D)$; (7.1) the three exponential
  maps (at $p$, at $q$, at the pole $N$) are isometries onto the punctured
  manifolds; (8.1)–(9.1) the transition $\exp_q^{-1}\circ\exp_p$ is a local
  isometry of punctured model balls whose restriction extends to an
  orthogonal map swapping the poles; (10.1)/(11.1) the two charts glue to a
  bijective local isometry $\Theta:M\to S^n_{1/\sqrt k}$, hence to an
  isometry. Local repairs while authoring: the F12 forward link to the
  unwritten `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero` was
  replaced in this dispatch by the published
  `thm-the-differential-of-exp-p-at-zero-is-the-identity`; the step numbering
  was made canonical ($1.1$–$11.1$), the dep row was synchronised to the
  authored frontmatter, and no multiline display remains. precheck PASS
  (direct), rendercheck OK, depcheck lists no
  `dep-unresolved`/`link-unresolved`/`id-filename`/`cited-not-in-deps` entry
  for the file, proof-contract strict 0 errors. Decision `accept`,
  confidence 1, re-recorded in this dispatch against the current inputs.

### Record completed for two earlier items

- [x] `cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points`
  (A, level 2) — authored. $p=x$ is the constant geodesic; otherwise
  $w:=\exp_x^{-1}(y)$ exists uniquely because Cartan–Hadamard makes
  $\exp_x:T_xM\to M$ a diffeomorphism; $\gamma(t)=\exp_x(tw)$ is an
  affinely parametrized geodesic from $x$ to $y$; any second such geodesic
  $\sigma$ pulls back under the local isometry $\exp_x$ to a pulled-back
  geodesic through $0$ ending at $w$, and the straight-ray lemma (the
  pulled-back geodesics through $0$ are exactly $t\mapsto tu$, proved by
  intertwining covariant derivatives) forces $\sigma=\gamma$; Hopf–Rinow
  supplies a minimizing segment, which by uniqueness equals $\gamma$, so
  $\gamma$ minimizes and its length is $d_g(x,y)$. No selection beyond the
  inherited $\mathrm{AC}_\omega$ carried by the Hopf–Rinow/Cartan–Hadamard
  suppliers. precheck PASS, rendercheck OK, depcheck clean, decision
  `accept`, confidence 1 (re-recorded this dispatch).
- [x] `cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold`
  (A, level 6) — authored. On a Hadamard manifold the cut locus of every
  point is empty: a finite cut time would give either a conjugate pair
  (forbidden by $K\le0$) or two minimizing geodesics from $p$ (forbidden by
  the uniqueness corollary), so $r_p$ is smooth off $p$ and
  $r_p(\exp_p w)=|w|_p$. The product formula
  $\operatorname{Hess}(\tfrac12u^2)=du\otimes du+u\operatorname{Hess}u$ and
  the second-derivative identity along geodesics are proved from the
  published gradient/Hessian connection formulas, symmetry of the Hessian
  and metric compatibility; the Hessian comparison at $k=0$ gives
  $\operatorname{Hess}r_p\ge(1/t_0)g$ on the normal space, hence
  $\operatorname{Hess}f\ge g$ on $M$ with equality at $p$; along a
  nonconstant affinely parametrized geodesic $\varphi=f\circ\gamma$ satisfies
  $\varphi''\ge c>0$, and subtracting the strictly convex quadratic
  $\tfrac c2t^2$ gives strict convexity of $d_g(p,\gamma(\cdot))^2$. Local
  repair in this dispatch: F7 now cites the published
  `prop-gradient-hessian-and-divergence-connection-formulas`,
  `prop-the-riemannian-hessian-is-symmetric` and `def-levi-civita-connection`
  instead of the later-page
  `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`,
  displaying the symmetry and metric-compatibility identities used in steps
  1.2, 1.3, 2.1 and 2.3. precheck PASS, rendercheck OK, depcheck clean,
  proof-contract strict 0 errors, decision `accept`, confidence 1
  (re-recorded this dispatch).

### b-leaf repair: three new A-page suppliers, no A→B consumption

- The pre-splice findings JSON contains no entry for this pair
  (`research/frontier-37-owner-30-pre-splice-plan-findings.json`) and the
  recheck found no applicable item-kind, ordering, dependency or
  prerequisite defect beyond those recorded in this report.
- Earlier frontier state: several A-page items consumed results that lived
  only on the B/examples page, which `depcheck` classifies as the banned
  `b-leaf-content` edge. The repair authored three local A-page supplier
  propositions, inserted into the A manifest at index 27 with
  `dependency_level: 0` (immediately before
  `def-model-space-radial-area-and-ball-volume`):
  - `prop-round-sphere-model-geometry` — round-sphere geodesics, distance,
    cut time/locus and constant curvature data (Datar §20/§24 locators,
    Eschenburg §6);
  - `prop-half-space-model-geometry` — hyperbolic half-space/hyperboloid
    model geometry, completeness and curvature (Datar, Eschenburg);
  - `prop-flat-torus-model-geometry` — flat torus geodesics, completeness
    and the pullback-metric covering facts.
  Each is fully authored with literature-derived statements and complete
  proofs, registered in the coverage record (three new `included` harvest
  rows; coverage now 32 harvested results, 0 errors/0 warnings) and in the
  proof contracts (three entries with eight item-specific boundary rows
  each; no template rows).
- Consumers were rewritten to use these props or self-contained inline
  arguments: the product-connection computation
  ($\mathrm{Ric}=\operatorname{diag}(-1,-1,0,\dots)$ on
  $\mathbb H^2(-1)\times\mathbb R^{n-2}$) in
  `cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three`,
  and the paraboloid principal-curvature computation in
  `cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold`;
  the B-page items remain examples only.
- Verified now: no A-page item contains a wikilink to, or a dep on, any
  B-page item (script check over both pages: 0 links, 0 deps);
  `depcheck` reports zero `b-leaf-content`, `dep-unresolved`,
  `link-unresolved`, `id-filename` or `cited-not-in-deps` findings for any
  file of this pair; `fwdcheck` reports zero findings for the pair.
- Also repaired earlier in the resumed run and still in force: the canonical
  id `def-radial-volume-jacobian` (was `def-radial-volume-jacobi` in the
  item frontmatter only), the spherical cosine-law numerator in
  `def-comparison-triangle-in-the-two-dimensional-space-form`, the
  canonical layer renumbering of `thm-cheng-maximal-diameter-rigidity`
  ($1.1$–$11.1$) and of `prop-rigidity-in-bishop-gromov-on-an-interval`
  (rebuilt after an `adopt-repair` corruption), and the $\mathrm{AC}_\omega$
  seam sentences in the global items.

### Final dependency synchronisation and forward-link repairs (this dispatch)

- Forward-undeclared links to later-page or unwritten items were replaced by
  published suppliers, with the mathematics re-derived rather than assumed:
  - `thm-cartan-hadamard` [F2]: `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`
    → `thm-the-differential-of-exp-p-at-zero-is-the-identity`, with the
    factor stated as $d(\exp_p)_0=\operatorname{id}$, hence invertible; the
    cited `def-sectional-curvature` was added to `deps`.
  - `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound`
    [F12]: same replacement; the $d(\exp_p)_0=\operatorname{id}$ uses in
    steps 5.2/6.1 are unchanged.
  - `lem-toponogov-distance-support-inequality` [F9]: the forward link to
    `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
    was removed and the chain rule
    $\operatorname{Hess}(f\circ u)=f''(u)\,du\otimes du+f'(u)\operatorname{Hess}u$
    is now derived inline from the published
    `prop-gradient-hessian-and-divergence-connection-formulas` (used in steps
    1.3 and 4.2).
  - `cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold`
    [F7]: replaced by the three published suppliers listed above.
  - `ex-distance-hessian-and-laplacian-in-space-forms` [F5]:
    `def-riemannian-gradient-of-a-smooth-function` (later page) →
    published `def-riemannian-gradient`.
  Result: `fwdcheck` lists no finding in this pair (the remaining six are in
  the sheaf-cohomology and algebraic-geometry pairs).
- `depcheck` `cited-not-in-deps` repairs: `prop-rigidity-in-rauch-comparison`
  gained `def-conjugate-points-along-a-geodesic-and-their-multiplicity`;
  `thm-cartan-hadamard` gained `def-sectional-curvature`.
- Batch-13 manifest `deps` rows were synchronised to the authored item
  frontmatter (the scaffold rows were stale for most items after the
  authoring-time dependency repairs). Dependency levels were recomputed with
  the run tool's algorithm over all 30 run batches; two labels changed and
  were updated in the manifest:
  - `thm-cheng-maximal-diameter-rigidity` $7\to8$: it consumes
    `prop-rigidity-in-bishop-gromov-on-an-interval` (level 7); the authoring
    order already placed the proposition first (alphabetical tie-break
    `p…` before `t…`), so the corrected label records the true order.
  - `cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three`
    $0\to1$: it consumes the new in-run supplier
    `prop-half-space-model-geometry` (level 0).
  All other labels are unchanged; `item-dependency-levels check` reports no
  error line for this pair (the remaining errors are other pairs).
- Proof-contract entries were regenerated for the five repaired items;
  `proof-contract --strict` remains 0 errors/0 warnings over 66/66 items and
  `boundary-audit --fail-on-template --fail-on-contradicted` exits 0 with no
  template cluster and no contradicted candidate.

### Decisions, scope and ledgers (this dispatch)

- Scope: `record-scope` refreshed for `riemannian-comparison-theorems` with
  decision `sufficient`, confidence 1, after the three new suppliers changed
  the pair scope hash; the B page is the companion of the same pair.
- Items: `step3-decisions.mjs check --phase final` had listed 61 original
  items as needing a current item audit; each was re-checked on the current
  file and re-recorded with decision `accept`, confidence 1, an item-specific
  evidence reason and the current frontmatter dependency list. The two
  level-0 definitions with unchanged inputs
  (`def-comparison-sine-cosine-and-cotangent-functions`,
  `def-laplace-beltrami-operator-as-trace-of-the-hessian`) remain closed
  under their previous decisions. No escalation was overwritten: none of the
  61 carried an owner or `escalate` receipt.
- Genuinely new IDs: `prop-round-sphere-model-geometry`,
  `prop-half-space-model-geometry`, `prop-flat-torus-model-geometry` are
  authored and registered but deliberately carry no Step-3b item decision —
  they are the post-author-baseline addition class that the engine certifies
  after a successful dispatch. They may therefore appear as open in a manual
  `step3-decisions check --phase final`.
- Cross-batch ledger: `research/frontier-37-owner-30-batch-13.cross-batch-dependencies.json`
  is `[]` and reviewed; the refreshed run ledger has 561 declared
  cross-batch edges, of which 0 belong to batch 13 (all of this pair's
  out-of-run suppliers are published pages). `refresh --require-reviewed`
  still reports the run-wide message `Cross-batch review incomplete` because
  23 edges belonging to other consumer batches (batches 3, 6, 8 and 21) have
  no review row; that is not a batch-13 obligation.

### Checks actually run (final state)

| Check | Command (batch-13 paths) | Result |
| --- | --- | --- |
| Phase precheck | `node tools/tsx-run.mjs tools/precheck.mts <66 item paths>` | 57 proof-bearing items checked, **0 failing** |
| Rendering | `node tools/rendercheck.mjs <66 items + 2 pages>` | **OK** — 68 files, no wikilink in math, no multiline display, all KaTeX spans parse |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-13.coverage.json` | 32 harvested results, **0 errors / 0 warnings** |
| Proof contracts (strict) | `node tools/proof-contract.mjs --strict research/frontier-37-owner-30-batch-13.proof-contracts.json` | **0 errors / 0 warnings**, 66/66 items |
| Boundary audit | `node tools/boundary-audit.mjs <contracts> --fail-on-template --fail-on-contradicted` | exit 0, 528 rows, no template cluster, no contradicted candidate |
| Content policy | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-13.pages.json` | 66 scoped items, **0 errors / 0 warnings** |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | 0 error lines for this pair (remaining errors are other pairs) |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 |
| Dependency sources | `node tools/depsource.mjs` | 0 unresolved |
| Dependency check | `node tools/depcheck.mjs` | 0 findings mentioning any item of this pair |
| Forward references | `node tools/fwdcheck.mjs --quiet` | 0 findings in this pair (6 elsewhere) |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | all 61 original items closed; only the 3 new IDs remain (engine class) |
| Cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | refreshed; batch 13 reviewed with 0 edges |

### Open obligations and routed concerns

1. **Engine-certified additions (expected, not a defect).** The three new
   A-page suppliers await the engine's post-author-inventory certification.
   They have passed precheck/rendercheck, `depcheck`, `depsource`,
   `coverage-checklist`, `content-policy` and the strict proof-contract
   checks.
2. **Step-1 readiness refresh (owner action).** `step1-decisions check`
   reports every run item as `Item or dependency changed; record current
   readiness` (817/817 across the run); for this pair that includes the three
   owner-`ready` records
   `prop-distance-between-corresponding-side-points-in-toponogov-comparison`,
   `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound` and
   `ex-toponogov-comparison-on-a-round-sphere` (owner recertified
   2026-09-29; the authored text changed their hashes). Only the owner may
   re-record these; no Step-1 `escalated` record remains for this pair, and
   the fresh Step-3b `accept` decisions do not override any owner escalation.
3. **Other-pair `depcheck` hard errors (machine-confirmed, routed).** Two
   `published-unaudited` items — `thm-ramified-primes-and-the-number-field-discriminant`
   and `thm-ring-of-integers-free-of-rank-degree` (published with neither
   `verification.audited` nor `verification.verified`) — and seven
   `b-leaf-content` edges:
   `ex-the-pure-two-strand-braid-group-is-infinite-cyclic`,
   `ex-pure-braid-generators-as-point-pushes`,
   `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`,
   `ex-effective-divisor-thickened-points-curve`,
   `ex-cartier-divisor-hyperplane-projective-space` (two edges) and
   `ex-picard-projective-line-preview`. These belong to the braid, monoid and
   sheaf/algebraic-geometry pairs; they are not batch-13 obligations and were
   not edited here.
4. **Other-pair warnings and gate residuals (routed).** `fwdcheck` lists six
   forward-undeclared links in the sheaf-cohomology pair; the run ledger has
   23 unreviewed cross-batch edges in batches 3, 6, 8 and 21; `depcheck`
   warns `[orphan] lem-counting-measure-on-a-discrete-group is published but
   appears on no page`; numerous `[multi-home]` warnings in unrelated pairs
   persist. None touches this pair.
5. **External-source qualifications (no library defect).** Eschenburg
   Theorem 6.1's printed display (6.10) writes `<=` for the third-vertex
   distance where its proof establishes `>=`; Lang Definition 5.7 confirms
   the proof's direction, and the pair follows the arguments, not the
   inconsistent display. Eschenburg's printed Rauch II interval is likewise
   superseded by the first-focal-time tensor statement used here. Both are
   external-source notes, not defects in a published library item.
6. **Carried qualification for Steps 5–8.** The model volumes
   $V_k$ are defined in `def-model-space-radial-area-and-ball-volume` as the
   one-dimensional Lebesgue integral of the continuous density $A_k$, while
   the evaluations (for example in `ex-volume-growth-in-euclidean-and-hyperbolic-space`
   and `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth`)
   use the FTC power-integral formula for a continuous integrand. For a
   continuous function on a compact interval the Riemann/Darboux and Lebesgue
   integrals agree, so no claim is affected, but the pair does not itemize
   that bridge explicitly; flagged for the independent Step-5–8 audit.
   Also carried: in `thm-toponogov-triangle-comparison` the fact `[F3]`
   (first-variation hinge derivative) is recorded to fix the angle
   conventions only — its wikilink was removed because no proof step uses
   it; the argument uses the hinge comparison through its stated inequality.
7. **Scope-review owner observations (unchanged, owner's choice).** DG-22's
   deferred Lee Prop 10.9 (constant-curvature polar metric) and Lee Cor 11.4
   (metric comparison) are not itemized; their content is covered by the
   Datar Jacobi route and the $K\le k$ direction of the Hessian comparison,
   and no claim depends on the explicit display. The coverage-record nit
   (no Datar Lecture 24 preamble row) and the 3b dependency note on the
   space-form examples remain open for the owner's optional enrichment.
8. **Published-item concerns from this pair: none.** No confirmed or
   suspected defect was found in any published item used or cited by this
   pair; `depsource` resolves every dependency (0 unresolved) and the
   published suppliers' hypotheses, directions and domains were checked
   against their uses (see the Step-1 notes' supplier list and the item-level
   audits above). This is a Step-3b author-level statement only; Steps 5–8
   perform the independent audit.
