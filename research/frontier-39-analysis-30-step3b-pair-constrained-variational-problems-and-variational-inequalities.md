# Step 3b pair authoring — `constrained-variational-problems-and-variational-inequalities`

- Run: `frontier-39-analysis-30`, stage `3b-author`, role `alpha-high`
- Dispatch label:
  `step3b-pair-constrained-variational-problems-and-variational-inequalities-b7688445bc11e3b8`
- A page: `constrained-variational-problems-and-variational-inequalities` (batch 16,
  order 458.041, category `pde`)
- B page: `constrained-variational-problems-and-variational-inequalities-examples`
  (batch 16, order 458.042)
- Owned artifacts: the two pages in `library/pde/`, the 34 item files listed
  below, `research/frontier-39-analysis-30-batch-16.pages.json` (pair rows only),
  `research/frontier-39-analysis-30-batch-16.proof-contracts.json`, the batch-16
  cross-batch review rows, and this report.
- Design inputs read: PDE-22 of `research/plan-pde-track.md` (current anchors
  L1986–L2044, additions table L3746–L3766), the Step 3a review and the owner
  scope decision `research/frontier-39-analysis-30-step3a-owner-constrained-variational-problems-and-variational-inequalities.json`
  (`proceed`, after adding `lem-one-dimensional-trace-truncation-compatibility`
  and updating its five consumers), `research/frontier-39-analysis-30-batch-16.notes.md`,
  the batch-16 coverage record and the batch-16 manifest.
- Direct in-run prerequisite pair to inspect: `the-direct-method-and-euler-lagrange-equations`
  (batch 15, still unauthored at entry — flagged below).

## Owned items (authoring order as dispatched)

A page (26 items):
`lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family` (0),
`lem-hilbert-projection-characterisation-by-a-variational-inequality` (0),
`lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions` (0),
`lem-one-dimensional-trace-truncation-compatibility` (0),
`thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` (0),
`lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive` (1),
`lem-regular-banach-constraint-directions-are-realised-by-level-set-curves` (1),
`lem-strong-ltwo-compactness-preserves-unit-normalisation` (2),
`lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative` (2),
`thm-stampacchia-variational-inequality` (2),
`lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` (3),
`thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` (3),
`thm-direct-method-on-a-weakly-closed-constraint-set` (4),
`thm-finite-regular-constraint-lagrange-multiplier-rule` (4),
`thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` (4),
`lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent` (5),
`def-closed-convex-obstacle-set-and-variational-inequality` (6),
`lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation` (6),
`lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` (7),
`thm-existence-and-uniqueness-for-the-obstacle-problem` (8),
`cor-obstacle-complementarity-in-distribution-form` (9),
`cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity` (10),
`rem-pointwise-and-integral-constraints-have-different-regularity-tests` (10),
`thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class` (10),
`thm-first-dirichlet-eigenfunction-by-constrained-minimisation` (13),
`thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` (14).

B page (8 items):
`cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space` (3),
`ex-isoperimetric-integral-constraint-and-its-multiplier` (5),
`cex-dependent-equality-constraints-have-nonunique-multiplier-vectors` (6),
`cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible` (7),
`cex-obstacle-complementarity-product-needs-extra-regularity` (10),
`ex-one-dimensional-obstacle-problem-and-contact-set` (10),
`ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set` (11),
`ex-rayleigh-quotient-on-an-interval` (14).

## Open obligations at entry

1. **Unfinished in-run suppliers.** At entry, the batch-16 dependencies into
   batches 4, 9, 10, 11, 14 and 15 point at scaffold items that have no
   `items/<id>.md` file yet (only `def-bounded-coercive-and-symmetric-sesquilinear-forms`
   exists). Each consuming item below records the exact supplier IDs and the
   consuming proof step; those item decisions stay `escalate` until the
   supplier is authored and the proof use is reconciled, per the dispatch.
   Provisional statements are read from the supplier batch manifests.
2. **Direct prerequisite pair** `the-direct-method-and-euler-lagrange-equations`
   (batch 15) is unauthored; `thm-direct-method-on-a-weakly-closed-constraint-set`
   consumes `thm-direct-method-in-a-reflexive-banach-space`,
   `lem-norm-closed-convex-sets-are-weakly-closed`,
   `lem-weak-closedness-keeps-the-direct-method-limit-admissible` and
   `def-proper-coercive-and-weakly-lower-semicontinuous-functional` from it.
3. **Cross-batch review rows.** All 48 batch-16 consumer rows in
   `research/frontier-39-analysis-30-batch-16.cross-batch-dependencies.json` are
   `open`; they are reviewed here as the consumers are authored, and rows are
   updated (with the ledger refreshed afterwards) where the actual proof use is
   confirmed or removed.
4. **Rayleigh example edge.** The owner moved `ex-rayleigh-quotient-on-an-interval`
   from the batch-14 truncation supplier to the batch-10 supplier
   `lem-sharp-dirichlet-poincare-inequality-on-an-interval`; that new edge is
   reviewed with the item.

## Item checkpoints

Checkpoints are appended in authoring order: exact claim/conventions, source
locators, dependencies (authored or provisional), decisions, checks, open gaps,
next action.

### 1. `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family` (A, level 0) — authored

- Claim kept: for independent $\psi_1,\dots,\psi_m$ on a real vector space with
  $\bigcap\ker\psi_i\subseteq\ker\varphi$, $\varphi$ is a unique combination
  $\sum\lambda_i\psi_i$; $m=1$ instance stated.
- Repair: the scaffold wrote $X^*$ with the *topological* dual link on a bare
  vector space; the item now links the algebraic dual and uses the induction
  proof (base case $m=1$, restrictions to $\ker\psi_m$ stay independent, then
  the $m=1$ case absorbs the remainder) instead of the scaffold's
  finite-selection route. No choice principle used.
- Deps: all published (`def-algebraic-dual-and-linear-functional`,
  `def-kernel-and-image-of-a-linear-map`, `def-linear-independence`,
  `def-linear-map`, `def-vector-space`, `def-vector-space-of-linear-maps`,
  `thm-linear-kernel-image-and-injectivity`).
- Checks: precheck PASS (induction), rendercheck OK, proof-layout 6 steps /
  0 defects. No open gap.

### 2. `lem-hilbert-projection-characterisation-by-a-variational-inequality` (A, level 0) — authored

- Claim kept: $u=P_Kx$ iff $\langle u-x,v-u\rangle\ge0$ for all $v\in K$, real
  Hilbert space, $K$ nonempty closed convex, Countable Choice.
- Route: the published `thm-hilbert-projection-variational-characterization`
  supplies both implications with the conjugate sign; the items converts the
  real sign and ties $P_Kx$ to the unique nearest point of
  `thm-projection-onto-a-nonempty-closed-convex-set`. Added the published
  variational-characterisation theorem to `deps` (it is cited).
- Checks: precheck PASS, rendercheck OK, proof-layout 3 steps / 0 defects.
- Open: none. (Batch-16 cross-batch row for this item's published suppliers is
  not required; the batch input rows for the item are reviewed at handoff.)

### 3. `lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions` (A, level 0) — authored

- Claim kept: nonnegative pairings against nonnegative test functions force
  $\zeta\ge0$ a.e., and vanishing against all tests on an open $O$ forces
  $\zeta=0$ a.e. on $O$; $\Omega$ open, $\zeta\in L^2(\Omega)$, Countable
  Choice.
- Route (repaired from the scaffold's heuristic): mollify $\zeta^-\eta$ with a
  nonnegative unit-mass bump (`lem-complex-translation-and-approximate-identity-interfaces`,
  `prop-mollifier-families-are-l-one-approximate-identities`, explicit cutoff
  from `lem-schwartz-cutoffs-from-the-standard-smooth-step`), pass to the
  limit by Hölder, obtain $\int(\zeta^-)^2\eta=0$ for every nonnegative test
  $\eta$ on every open subset; localise with the choice-free
  `lem-test-function-cutoffs-and-euclidean-localization` and the explicit
  compact exhaustion, then remove the localisation by
  `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`.
- Choice: Countable Choice is declared and used exactly in the
  approximate-identity interface and the null-union step (step 5.1 records
  both).
- Replaces the scaffold's `thm-lebesgue-inner-regularity` route; deps updated
  to the suppliers actually cited.
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 6 steps /
  0 defects (one precheck auto-repair adopted: the layer numbering of the
  localisation steps).

### 4. `lem-one-dimensional-trace-truncation-compatibility` (A, level 0) — authored

- Owner-mandated prerequisite added by the scope repair; claim kept: for
  $I=(a,b)$ finite, $1\le p<\infty$, $T$ the endpoint pair of the unique AC
  representative is well defined, linear, bounded, $\ker T=W_0^{1,p}(I)$, and
  $(u-k)^+$ has trace $(Tu-k)^+$, with $(u-k)^+\in W_0^{1,p}$ iff
  $Tu\le(k,k)$.
- Route: representative corollary; endpoint estimate for boundedness;
  $\ker T=W_0^{1,p}$ by the explicit interior cutoffs built from the fixed bump
  `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`, the
  endpoint decay estimate from the AC formula and Hölder, zero extension plus
  smooth density plus a fixed multiplier; then the truncation calculus and the
  uniqueness of continuous representatives.
- All deps published (`cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`,
  `lem-one-dimensional-sobolev-endpoint-estimate`,
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
  `def-wkp-zero-as-a-sobolev-closure`,
  `lem-compact-support-zero-extension-in-wkp`,
  `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
  `lem-weak-leibniz-rule-with-a-smooth-factor`,
  `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces`,
  `lem-test-function-cutoffs-and-euclidean-localization`,
  `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`,
  `thm-holder-inequality-for-integrals`, `thm-dominated-convergence`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-chain-rule`,
  `thm-algebra-of-derivatives`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`).
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 12 steps /
  0 defects. No open supplier.

### 5. `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` (A, level 0) — authored

- Claim kept from the scaffold. Route: finite choice of preimages of the
  standard unit vectors, $Y=\operatorname{span}\{u_i\}$, the bounded projection
  $P=(DG(u)|_Y)^{-1}\circ DG(u)$, then the published Banach-space implicit
  function theorem applied to $F(a,y)=G(u+a+y)-G(u)$ on
  $\ker DG(u)\times Y$, and $D\varphi(0)=0$ by the chain rule.
- All suppliers published (`thm-implicit-function-theorem-for-banach-spaces`
  and the finite-dimensional/complemented-subspace vocabulary).
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 6 steps /
  0 defects.

### 6. `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive` (A, level 1) — authored, scaffold statement repaired

- **Repair (flagged to the owner):** the scaffold's second displayed inequality
  $\langle(x-P_Kx)-(y-P_Ky),P_Kx-P_Ky\rangle\ge\|P_Kx-P_Ky\|^2$ is false in
  general (e.g. $H=\mathbb R$, $K=[0,\infty)$, $x=1$, $y=2$ gives $0\ge1$).
  The item states the two correct equivalent forms
  $\langle P_Kx-P_Ky,x-y\rangle\ge\|P_Kx-P_Ky\|^2$ and
  $\langle(x-P_Kx)-(y-P_Ky),P_Kx-P_Ky\rangle\ge0$. The promised nonexpansiveness
  and the use in the Stampacchia fixed-point map are unaffected.
- Route: the two variational inequalities added, Cauchy–Schwarz. Deps:
  `lem-hilbert-projection-characterisation-by-a-variational-inequality` (in-run
  level 0, consistent with the manifest label), the projection theorem and
  Cauchy–Schwarz.
- Checks: precheck PASS, rendercheck OK, proof-layout 4 steps / 0 defects.

### 7. `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves` (A, level 1) — authored

- Claim kept: every $h\in\ker DG(u)$ is $c'(0)$ for a $C^1$ level-set curve
  $c(t)=u+th+\varphi(th)$.
- Supplier: `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative`
  (authored here, level 0), plus the Banach chain rule.
- Checks: precheck PASS, rendercheck OK, proof-layout 4 steps / 0 defects.

### 8. `lem-strong-ltwo-compactness-preserves-unit-normalisation` (A, level 2) — authored, supplier flagged

- Claim kept: for a bounded open `\Omega`, norm-bounded `(u_j)\subseteq H^1_0` with
  `u_j\rightharpoonup u` and `\|u_j\|_{L^2}=1`, one has `u\in H^1_0`,
  `\|u\|_{L^2}=1` and a subsequence converging to `u` in `L^2`.
- **Flagged unfinished supplier:** `thm-rellich-compactness-from-w-one-p-zero-to-lp`
  (batch 9, no `items/` file at authoring time), consumed in step 1.1 of this
  item. Provisional statement read from
  `research/frontier-39-analysis-30-batch-9.pages.json` (compact embedding,
  bounded open set, no boundary regularity). Decision escalated until the
  supplier is authored and step 1.1 reconciled.
- Route: Rellich subsequence; identify the L² limit with the weak limit via the
  functional `v\mapsto\int v\varphi` (bounded on `H^1_0` since the `W^{1,2}` norm
  dominates `L^2`) and the second clause of the authored
  `lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions`;
  norm continuity by reverse triangle. Choice: AC ⇒ DC ⇒ CC
  (`thm-choice-implies-dependent-implies-countable-choice`).
- Checks: precheck PASS, rendercheck OK, proof-layout 4 steps / 0 defects.

### 9. `lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative` (A, level 2) — authored

- Claim kept: the derivatives at `0` of `C^1` curves in the level set with
  `\gamma(0)=u` are exactly `\ker DG(u)`.
- Route: chain rule for the inclusion, authored realisation lemma for the
  converse. Deps in-run: `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves`
  (authored, level 1).
- Checks: precheck PASS, rendercheck OK, proof-layout 3 steps / 0 defects.

### 10. `thm-stampacchia-variational-inequality` (A, level 2) — authored, supplier flagged

- Claim kept: exactly one `u\in K` with `a(u,v-u)\ge F(v-u)` for all `v\in K`,
  `a` bounded coercive bilinear (no symmetry), `K` nonempty closed convex,
  Countable Choice.
- **Flagged unfinished supplier:** `lem-form-to-bounded-operator-by-hilbert-riesz`
  (batch 10, no `items/` file at authoring time), consumed in step 1.1
  (representation `a(u,v)=\langle Au,v\rangle` with `\|A\|\le M` and the
  coercivity translation). Provisional statement read from
  `research/frontier-39-analysis-30-batch-10.pages.json`. Decision escalated
  until authored and reconciled. (The companion
  `def-bounded-coercive-and-symmetric-sesquilinear-forms` of batch 10 does exist
  and was read on disk.)
- Route: Riesz for `F`; Lions–Stampacchia fixed point
  `T(w)=P_K(w-\rho(Aw-f))` with contraction constant
  `q=(1-2\rho\alpha+\rho^2M^2)^{1/2}<1` for `0<\rho<2\alpha/M^2`; Banach fixed
  point on the complete set `K`; the projection characterisation rewrites the
  fixed point as the inequality; subtract-and-coercivity uniqueness (no
  symmetry). Degenerate `M=0` case handled (`H=\{0\}`, `K=\{0\}`).
- Checks: precheck PASS, rendercheck OK, proof-layout 5 steps / 0 defects.

### 14–18. Levels 4–5 — authored

- `thm-direct-method-on-a-weakly-closed-constraint-set` (14): citation of the
  batch-15 direct-method theorem plus the convex-norm-closed weak-closure lemma;
  the batch-15 supplier is now **authored and reconciled** (statement identical
  to the provisional reading). 3 steps, 0 defects.
- `thm-finite-regular-constraint-lagrange-multiplier-rule` (15): extremum lemma
  + independence of the constraint gradients (finite choice of preimages) +
  the authored finite-duality lemma. 3 steps, 0 defects.
- `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` (16):
  the same two suppliers in the $m=1$ form. 3 steps, 0 defects.
- `lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent`
  (17): subtraction + evaluation on preimages, plus the equivalent injectivity
  of the transpose. 3 steps, 0 defects.
- `ex-isoperimetric-integral-constraint-and-its-multiplier` (18): $u_0=6Ax(1-x)$
  is admissible via the authored 1-D trace lemma; $DJ(u_0)=24A\,DG(u_0)$ by
  weak-derivative integration by parts with the AC representative; minimality
  and uniqueness by the exact energy expansion. The example is proved with a
  complete local argument and does **not** depend on the batch-15
  Euler–Lagrange/dominated-differentiation suppliers (recorded as a local
  replacement of those two scaffold edges). 5 steps, 0 defects.

### 19–21. Level 6 — authored

- `def-closed-convex-obstacle-set-and-variational-inequality` (19): the trace
  convention split ($n=1$ interval trace, $n\ge2$ published trace), the
  equivalence $T\psi\le0\iff\psi^+\in H^1_0$ (via the authored interval lemma
  and the now-authored batch-14 lemma), the a.e. admissible set $K$, the
  variational inequality, the energy and the reaction distribution. Definition;
  no proof section.
- `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`
  (20): truncation calculus gives $D|u|=\operatorname{sgn}(u)Du$; membership in
  $H^1_0$ from the trace/truncation lemmas in both dimensions; equality of norms
  and energies. 6 steps, 0 defects.
- `cex-dependent-equality-constraints-have-nonunique-multiplier-vectors` (21):
  explicit $\mathbb R^2$ computation, the multiplier line
  $\lambda_1+2\lambda_2=0$. 4 steps, 0 defects.

### 22–25. Levels 7–9 — authored

- `lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` (22):
  nonemptiness from $\psi^+\in H^1_0$, convexity, norm closedness via the a.e.
  subsequence lemma, weak closedness from the norm-closed-convex criterion.
  4 steps, 0 defects.
- `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`
  (23): $\psi\equiv1$ on $(-1,1)$; the AC representative of any $v\in K$ would
  have to be $\ge1$ everywhere yet vanish at both endpoints. 3 steps,
  0 defects.
- `thm-existence-and-uniqueness-for-the-obstacle-problem` (24): Stampacchia
  gives the unique variational solution $u^*$; the exact energy identity
  $J(v)-J(u)=a(u,v-u)-F(v-u)+\tfrac12a(v-u,v-u)$ proves both directions of the
  equivalence; the coercivity gives strictness and uniqueness. 4 steps,
  0 defects.
- `cor-obstacle-complementarity-in-distribution-form` (25): reaction
  nonnegativity by testing $v=u+\varphi$; two-sided testing on
  $O=\{u>\psi\}$ (small multiples of a test function stay admissible) gives the
  vanishing; the a.e. sign transfer and the fundamental lemma give
  $\zeta\ge0$, $\zeta=0$ on $O$ and $(u-\psi)\zeta=0$ a.e. 6 steps,
  0 defects. The $L^2$-representation and continuity hypotheses are used
  exactly as stated; no distribution product is formed.

### Supplier reconciliation (update after the concurrent authors landed)

All previously flagged in-run suppliers are now authored on disk and were
reconciled against the provisional statements used in this report: batches 9
(`thm-rellich-compactness-from-w-one-p-zero-to-lp`), 10
(`lem-form-to-bounded-operator-by-hilbert-riesz`,
`def-h-minus-one-as-the-dual-of-h-one-zero`,
`def-uniformly-elliptic-divergence-form-operator`, the form lemmas), 11 (the
spectral/eigenpair vocabulary) and 14
(`lem-positive-part-of-a-zero-trace-function-has-zero-trace`) — statements
agree with the readings recorded above; no consumer proof step requires a
change. The only in-run supplier still unauthored is batch 4's
`thm-poincare-inequality-for-w-one-p-zero`, consumed by the two eigenvalue
theorems and the one-dimensional obstacle example (flagged again below).

### 11. `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` (A, level 3) — authored

- Claim kept: at a constrained local extremum with `DG(u)` onto and `I` Fréchet
  differentiable, `DI(u)` vanishes on `\ker DG(u)`.
- Route: authored tangent-space lemma realises `h` by a level-set curve; the
  pullback `t\mapsto I(\gamma(t))` has a local extremum and Fermat's theorem
  gives `DI(u)h=0`. In-run supplier: `lem-tangent-space-...` (authored,
  level 2).
- Checks: precheck PASS, rendercheck OK, proof-layout 4 steps / 0 defects.

### 12. `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` (A, level 3) — authored

- Claim kept: `\alpha\|u_1-u_2\|\le\|F_1-F_2\|_*` for the two solutions.
- Route: test each inequality at the other solution, add, coercivity, dual-norm
  estimate. In-run supplier: `thm-stampacchia-variational-inequality` (authored,
  level 2).
- Checks: precheck PASS, rendercheck OK, proof-layout 3 steps / 0 defects.

### 13. `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space` (B, level 3) — authored

- Claim kept: in an infinite-dimensional real Hilbert space the unit sphere is
  norm closed and norm bounded but not weakly sequentially closed; an
  orthonormal sequence converges weakly to `0`.
- Route: maximal orthonormal family (complete) is infinite; Countable Choice
  extracts a countable orthonormal sequence; Bessel gives weak convergence to
  `0`; the weak closure is the closed unit ball (HB available from AC). The
  forward link to the later first-eigenfunction item of the same page is kept as
  plain prose (not a wikilink) to avoid an undeclared forward dependency; the
  statement keeps every scaffolded claim.
- In-run supplier: `lem-strong-ltwo-compactness-preserves-unit-normalisation`
  (authored, level 2).
- Checks: precheck PASS, rendercheck OK, proof-layout 5 steps / 0 defects.

### 26. `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity` (A, level 10) — authored

- Claim kept: in the obstacle setting, if the reaction agrees on $C_c^\infty$
  with a nonnegative Radon measure $\mu$ and $u,\psi$ have continuous
  representatives, then $\mu(\{u>\psi\})=0$, $\mu$ is concentrated on the
  contact set $\{u=\psi\}$ and $\int(u-\psi)d\mu=0$.
- Route: the two-sided test at $u\pm\varepsilon\chi$ (same mechanism as the
  authored complementarity corollary, re-derived for the measure pairing)
  gives $\Lambda_u(\chi)=0$ on test functions supported in $O=\{u>\psi\}$;
  a ZF cutoff from `lem-test-function-cutoffs-and-euclidean-localization`
  turns this into $\mu(K_0)=0$ for compact $K_0\subseteq O$ via
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`; inner regularity
  of the authored Radon-measure definition gives $\mu(O)=0$; the open
  Lebesgue-null set $\{u<\psi\}$ is empty by
  `lem-euclidean-balls-have-positive-finite-lebesgue-measure`; finally
  `cor-integral-over-a-null-set-vanishes` handles both parts of $u-\psi$.
  The scaffold's "sum of finitely many bumps" route was replaced by the
  published ZF cutoff lemma; deps updated accordingly (added
  `cor-integral-over-a-null-set-vanishes`, `lem-euclidean-balls-...`,
  `lem-test-function-cutoffs-...`, `prop-measure-monotonicity`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `def-measure-null-set-and-almost-everywhere`; removed
  `ex-smooth-compactly-supported-bump`,
  `def-locally-integrable-function-as-a-regular-distribution`).
- Choice: both assumptions are inherited with the setting (AC through the trace
  conventions of the obstacle definition, CC through the existence theorem and
  the Euclidean measure lemma); the corollary's own argument adds none. This is
  stated in the final step.
- Note: the statement is kept verbatim from the scaffold; the proof establishes
  the literal reading "$\mu$ is concentrated on $\{u=\psi\}$" by also showing
  $\mu(\{u<\psi\})=0$ (from openness plus a.e. nonnegativity).
- Checks: precheck PASS (direct; canonical dependency-layered numbering
  1.1/2.1/3.1/4.1/5.1 adopted), rendercheck OK, proof-layout 5 steps /
  0 defects. No open supplier; decision `repaired`.

### 27. `rem-pointwise-and-integral-constraints-have-different-regularity-tests` (A, level 10) — authored

- Claim kept: equality-constraint multiplier rules need surjectivity of the
  constraint derivative and fail otherwise (published
  `cex-lagrange-multiplier-rule-needs-a-regular-constraint`), while the
  obstacle constraint has no differentiable multiplier field, its first-order
  information being the variational inequality, with the reaction's regularity
  an additional hypothesis (both complementarity corollaries).
- Remark, no proof section; provenance `literature-derived` /
  `not-applicable`; two URLs with locators. Deps are the five scaffold entries
  plus nothing new. All links resolve (the two authored multiplier rules and
  both authored complementarity items are on disk).
- Checks: precheck n/a (0 checked), rendercheck OK, proof-layout 0 steps /
  0 defects.

### 28. `thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class` (A, level 10) — authored

- Claim kept: with $\Omega$ bounded, $L$ real symmetric uniformly elliptic with
  bounded measurable coefficients, $f\in L^2$, $\psi\in H^2\cap H^1_0$ with
  $L\psi\in L^2$ and $h=L\psi-f$, the reaction of the obstacle solution obeys
  $0\le\Lambda_u\le h^+$ in the sense of distributions.
- Route (owner-resolved strategy realized in full): $w=u-\psi\ge0$;
  positivity $\Lambda(q)\ge0$ for $q\ge0$; $\Lambda(w)=0$ by testing at $\psi$
  and at $u+w$; truncations $\theta_\delta=(1-w/\delta)^+$, $m_\delta=1-\theta_\delta$
  with the ACL truncation calculus; the two tests $\varphi m_\delta$ and
  $(\|\varphi\|_\infty/\delta)w-\varphi m_\delta$ give $\Lambda(\varphi m_\delta)=0$
  and $\Lambda(\varphi)=\Lambda(\varphi\theta_\delta)$; expansion of
  $\Lambda(\varphi\theta_\delta)$ into five terms; the singular principal term
  is nonpositive by ellipticity, the cross/drift/potential terms vanish in the
  limit by dominated convergence using $Dw=0$ a.e. on $\{w=0\}$ and
  $w\theta_\delta\le\delta/4$, the source term tends to $\int_Eh\varphi$; this
  gives $0\le\Lambda(\varphi)\le\int_Eh\varphi$; the L² sign lemma gives
  $h\ge0$ a.e. on $E$; then $\int_Eh\varphi\le\int h^+\varphi$.
- Statement: the scaffold text is kept, with the inherited choice declaration
  added ("Assume Countable Choice and the Axiom of Choice", as in the sibling
  items) and the domain made precise as the two-kind setting of the obstacle
  definition; all promised claims preserved. The final step records the exact
  choice uses (CC: existence, density, sign lemma; AC: ACL truncation
  calculus).
- New dep edges relative to scaffold: `def-countable-choice`,
  `def-axiom-of-choice`, `def-test-function-space-d-of-an-open-set`,
  `def-hk-and-hk-zero-notation`, `thm-holder-inequality-for-integrals`
  (density of test functions, $L^1$ domination); scaffold's `def-distribution`
  retained for the distributional reading.
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 9 steps /
  0 defects. No open supplier; decision `repaired`.

### 29. `ex-one-dimensional-obstacle-problem-and-contact-set` (B, level 10) — authored, Poincaré edge removed

- Claim kept: for $\psi=\varepsilon-\tfrac12x^2$ with $0<\varepsilon<1/2$ on
  $(-1,1)$ the obstacle solution is the parabola on $[-t,t]$ and
  $t(1-|x|)$ outside, with $t=1-\sqrt{1-2\varepsilon}$, contact set $[-t,t]$
  and matching slopes at the free boundary.
- Route: local $C^1$ construction ($u-\psi=(|x|-t)^2/2$ off the contact set);
  $u\in H^1_0$ by the interval trace lemma; energy expansion
  $J(v)-J(u)=\tfrac12\int|q'|^2+\int_{-t}^t(v-\psi)$ via one integration by
  parts against $u'$ (absolutely continuous); uniqueness by the trace
  characterisation of $H^1_0$ (a constant with zero trace is zero). **The
  scaffold's `thm-poincare-inequality-for-w-one-p-zero` edge is not used**:
  boundedness of the minimising sequence comes from $\|u\|_{L^2}=1$, and
  strictness of the minimiser from the trace, so the edge was removed and
  replaced by a complete local argument (the batch-4 supplier was authored
  concurrently but is not needed here).
- Statement: scaffold text kept; the choice declaration records AC and the
  CC/DC it supplies; the closing clause is made checkable as
  $u'(\pm t)=\psi'(\pm t)=\mp t$.
- Checks: precheck PASS (direct; canonical 1.1/2.1/3.1/4.1/5.1/6.1 numbering),
  rendercheck OK, proof-layout 7 steps / 0 defects. Decision `repaired`.

### 30. `cex-obstacle-complementarity-product-needs-extra-regularity` (B, level 10) — authored

- Claim kept: $u=\log\log(1/|x|)$ on the punctured plane piece, $H^1$ but
  without continuous representative, so the pairing with $\delta_0$ depends on
  the representative and $u\cdot\mu$ is not a well-defined distribution.
- Route: complete polar-coordinate computation
  ($\int u^2<\infty$ by $(\log t)^2e^{-2t}\le t^{-2}$ eventually,
  $\int|Du|^2=\sigma(S^1)/\log 4$); ACL characterisation gives
  $u\in H^1$; boundedness on the compact ball contradicts a continuous
  representative; the two representatives $w_1,w_2$ give pairings $0$ and
  $\varphi(0)$.
- B-leaf repair: `ex-dirac-integral-is-evaluation-at-a-point` (B-page only)
  was replaced by the A-page `def-dirac-measure`,
  `prop-dirac-measure-is-a-probability-measure` plus a local computation of
  $\int f\,d\delta_0=f(0)$ via `cor-integral-over-a-null-set-vanishes`; deps
  updated.
- Checks: precheck PASS (direct; canonical 1.1/2.1/3.1/4.1/5.1/6.1/7.1),
  rendercheck OK, proof-layout 7 steps / 0 defects. Decision `repaired`.

### 31. `ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set` (B, level 11) — authored

- Claim kept: $u\in H^2(-1,1)$ with $u''=-1$ on the contact interval and $0$
  outside; the reaction equals the density $\mathbf 1_{[-t,t]}$, has mass $2t$
  and no atom at $\pm t$.
- Route: $u'$ continuous and piecewise $C^1$ hence AC, so $u\in H^2$ with
  $u''$ the a.e. derivative; one integration by parts gives
  $\Lambda(\varphi)=-\int u''\varphi=\int_{-t}^t\varphi$; the density is
  nonnegative in $L^\infty$, has mass $2t$, and the two-point free boundary
  set is Lebesgue-null, so no atom.
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 4 steps /
  0 defects. Decision `accepted`.

### 32. `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` (A, level 13) — authored, Poincaré supplier now on disk

- Claim kept: $S$ nonempty, $E$ attains $\lambda_1$ on $S$, every minimiser is
  a weak eigenpair with $\lambda_1=E(u_0)>0$, a nonnegative minimiser exists,
  and $\lambda_1$ is the first listed Dirichlet eigenvalue with minimisers
  $S\cap E_{\lambda_1}$.
- Route: minimising sequence bounded through $\|u_j\|_{L^2}=1$; weak
  subsequence by reflexivity of $H^1_0$; normalisation survives by the
  authored strong-$L^2$ compactness lemma; weak lower semicontinuity gives
  attainment; the multiplier rule (finite-constraint form, $m=1$) gives
  $\int Du_0\cdot Dh=\lambda_1\int u_0h$ with $\lambda_1=E(u_0)$; positivity
  from Poincaré; $|u_0|$ is again a minimiser; the Rayleigh principle
  identifies the value and the minimiser set.
- Supplier reconciliation: `thm-poincare-inequality-for-w-one-p-zero` (batch
  4) is now authored on disk with the scaffolded statement (bounded in one
  direction), and `lem-coercivity-of-the-principal-dirichlet-form` consumes it;
  the flagged escalation for this item is therefore resolved. The statement
  adds "nonempty" for $\Omega$ and the ultrafilter lemma/DC/HB package used by
  the weak-compactness suppliers.
- Checks: precheck PASS (direct; canonical 1.1/2.1/3.1/4.1/5.1/5.2/6.1/7.1),
  rendercheck OK, proof-layout 8 steps / 0 defects. Decision `repaired`.

### 33. `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` (A, level 14) — authored

- Claim kept: $S_k$ nonempty, $E$ attains $\mu_k$ on $S_k$, every minimiser is
  a weak eigenpair with $\mu_k=\lambda_k$, and minimisers lie in
  $E_{\lambda_k}$ and are orthogonal to $e_1,\dots,e_{k-1}$.
- Route: $e_k\in S_k$; bounded minimising sequence (again $\|u_j\|_{L^2}=1$,
  no Poincaré needed); weak limit stays in $S_k$ by strong $L^2$ compactness
  plus continuity of the finitely many pairings; attainment by weak lower
  semicontinuity; the vector-valued multiplier rule with the $k$ independent
  constraints $\|u\|^2-1,(u,e_1),\dots,(u,e_{k-1})$ gives the eigenpair
  equation and vanishing of the orthogonality multipliers; $\mu_k=\lambda_k$
  follows by excluding $\mu_k<\lambda_k$ with the distinct-eigenvalue
  orthogonality corollary and completeness of the basis.
- Checks: precheck PASS (direct), rendercheck OK, proof-layout 9 steps /
  0 defects. Decision `accepted`.

### 34. `ex-rayleigh-quotient-on-an-interval` (B, level 14) — authored

- Claim kept: $u_0=\sqrt2\sin(\pi x)$ minimises $E$ on the $L^2$-unit sphere
  of $H^1_0(0,1)$, $\lambda_1=\pi^2$, and $-u_0''=\pi^2u_0$ holds weakly with
  zero boundary values.
- Route: $C^1$ membership and trace; normalisation and energy by the
  power-reduction identities and FTC; minimality from the sharp interval
  Poincaré inequality; the weak eigenvalue identity is the lemma's displayed
  identity scaled by $\sqrt2$.
- Checks: precheck PASS (direct; canonical 1.1/2.1/3.1/4.1/5.1), rendercheck
  OK, proof-layout 5 steps / 0 defects. Decision `repaired` (statement's
  choice declaration aligned with the ambient theorem and the sharp-interval
  supplier).

## Page files, contracts and gates

- Pages written: `library/pde/constrained-variational-problems-and-variational-inequalities.md`
  (26 items) and `...-examples.md` (8 examples), both draft, both rendercheck
  OK.
- Contracts written: `research/frontier-39-analysis-30-batch-16.proof-contracts.json`
  (version 1, level `frontier-39-analysis-30`, scope = the 32 proof-bearing
  items, 304 exact-quote citations, 144 step derivations, 256 boundary rows).
  `proof-contract.mjs --strict`: 0 errors / 0 warnings, 32/32 items;
  `citation-fidelity.mjs --fail-on-missing-quote`: every quote found (one
  widening candidate on the sign-lemma restatement in
  `lem-strong-ltwo-compactness-preserves-unit-normalisation`, read and judged
  faithful: the fact states the lemma's second clause with $O=\Omega$);
  `boundary-audit.mjs --fail-on-template --fail-on-contradicted`: no template
  clusters and no contradicted dispositions.
- B-leaf repairs (depcheck `b-leaf-content`): removed B-page-only deps
  `ex-polynomial-integrals-by-the-ftc` (replaced by a local FTC computation in
  `ex-isoperimetric-integral-constraint-and-its-multiplier`),
  `ex-standard-basis-of-ell-two` (the maximal-family argument is
  self-contained), `ex-dirac-integral-is-evaluation-at-a-point` (local Dirac
  evaluation, see item 30), and `cex-lagrange-multiplier-rule-needs-a-regular-constraint`
  from the remark's deps (the remark is a pointer, not a dependency; the link
  stays as prose). A scoped depcheck over the four repaired items now reports
  no error or warning naming them.

## Cross-batch review, ledger and decisions (close-out, 2026-10-05)

### Cross-batch rows

`research/frontier-39-analysis-30-batch-16.cross-batch-dependencies.json` now
holds 53 rows (the 49 scaffold rows plus 4 declared edges that the scaffold
matrix omitted: the two `lem-w-one-p-is-reflexive` uses and the
`def-convex-and-strictly-convex-functionals-on-a-banach-space` /
`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`
uses of `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`).
Every declared cross-batch edge of this pair has a review row:

- **42 rows `verified`.** Each names the required claim, the consuming step,
  the supplier batch, and the clause of the on-disk supplier statement that
  matches the use (all suppliers of batches 4, 9, 10, 11, 14 and 15 are
  authored drafts of this run; none is published content). The four added rows
  were verified against the same files.
- **11 rows `removed`,** each with the replacement route: the interval
  counterexample's `lem-positive-part-of-a-zero-trace-function-has-zero-trace`
  edge (n>=2 supplier inadequate for the n=1 use), the definition's
  `def-uniformly-elliptic-divergence-form-operator` edge (the definition takes
  an abstract form), the isoperimetric example's two batch-15
  Euler-Lagrange/dominated-differentiation edges (replaced by a complete local
  argument), the one-dimensional obstacle example's Poincare edge (local
  energy argument), the Rayleigh example's discrete-spectrum edge (the sharp
  interval inequality supplies everything), and the four unused
  higher-eigenvalue edges (`lem-coercivity-of-the-principal-dirichlet-form`,
  `lem-eigenbasis-expansion-in-the-form-norm`,
  `thm-courant-fischer-minimax-for-elliptic-eigenvalues`,
  `thm-poincare-inequality-for-w-one-p-zero`) plus the first-eigenfunction
  theorem's `def-proper-coercive-and-weakly-lower-semicontinuous-functional`
  edge. All 11 have no remaining declaration in the item or the manifest
  (`declarations: []` in the refreshed ledger).
- **Ledger.** `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-39-analysis-30` succeeds and reports 53 batch-16 consumer edges,
  none without a review. `--require-reviewed` fails **run-wide** on 52
  unreviewed declared edges owned by other batches (12: 6, 13: 1, 14: 29,
  17: 2, 18: 12, 22: 1, 26: 1) — reported, not hidden; no batch-16 edge is
  among them.

### Item decisions

All 34 items carry current `step3b-review` receipts (owner false, confidence
1, sorted dependency lists; `node tools/step3-decisions.mjs check --phase
final` lists none of them as work). 16 are `repaired` relative to the
scaffold (statement, route, dependency or forward-reference repair) and 18 are
`accept`; the per-item reasons record the exact change and the examined
dependency IDs. The `--phase scope` check reports this pair closed against the
owner receipt `eb4daa74...`.

**Staleness episode (reported for transparency).** The first recording went
stale for 14 items before the final check because `itemHash` covers the whole
transitive closure and concurrent sibling authors rewrote their own batch
manifests (batches 4 and 12; e.g. the batch-12 row of
`def-local-weak-solution-for-a-divergence-form-operator`, which is in the
obstacle items' closure). No item of this pair changed; the 14 receipts were
re-recorded against the new closure state, and the final check then lists zero
batch-16 items as work. The engine's Step-3 final re-audit lane owns any
further refresh caused by sibling writers.

### Final gate battery (all run on 2026-10-05, after the last item edit)

| gate | command | result |
| --- | --- | --- |
| precheck (explicit paths, 34 files) | `tools/tsx-run.mjs tools/precheck.mts items/<id>.md ...` | 32 checked, 0 failing (the definition and the remark are non-proof-bearing) |
| rendering | `rendercheck.mjs` on 34 items + 2 pages | OK, 36 files |
| proof layout (batched, one command) | `proof-layout.mjs items/<all 34>` | 34 items, 163 steps, 0 defects |
| content policy (item mode) | `content-policy.mjs batch-16.pages.json` | 34 scoped items, 0 errors, 0 warnings |
| manifest deps | `manifest-deps.mjs batch-16.pages.json` | 34 items, 0 errors |
| proof contracts (strict) | `proof-contract.mjs batch-16.proof-contracts.json --strict` | 0 errors, 0 warnings, 32/32 |
| citation fidelity | `citation-fidelity.mjs ... --fail-on-missing-quote` | every quote found; 1 widening candidate, read and judged faithful (sign-lemma restatement) |
| boundary audit | `boundary-audit.mjs ... --fail-on-template --fail-on-contradicted` | no template clusters, no contradicted dispositions |
| dependency levels | `item-dependency-levels.mjs check --run ...` | 0 errors naming any of the 34; 9 run-wide errors in the Hardy-space group (other batches) |
| plan validation | `validate-plan.mjs research/plan-spec.json` | OK (no cycles, forward references, B-leaf or unresolved ids among pages carrying item lists) |
| depcheck (scoped to the 34 ids) | `depcheck.mjs <34 ids>` | 898 run-wide errors, **0 naming any of the 34** (sibling batches mid-authoring) |
| fwdcheck | `fwdcheck.mjs --quiet` | after the forward-reference repair below, 0 findings naming any of the 34 (93 run-wide, other batches) |
| coverage checklist | `coverage-checklist.mjs batch-16.coverage.json --require-destination` | 2 pages, 64 harvested results, 0 errors |
| source fetch | `source-fetch-check.mjs --coverage batch-16.coverage.json` | 14/14 fetch-verified, 14/14 resolved |
| scope decisions | `step3-decisions.mjs check --phase scope` | this pair closed; 3 pairs run-wide still need a scope record |

### Repairs made after the item-level checkpoints

- `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space`
  used the published fact `thm-countable-choice-gives-countable-subsets` at
  step 3.1; that item lives on the later page
  `weak-choice-principles-and-sierpinskis-theorem` (#665), so `fwdcheck`
  flagged the link as `forward-undeclared`. A load-bearing forward reference is
  allowed on a counterexample, and the fact is genuinely used, so the entry was
  moved out of `deps` into `forward_refs` in both the item and its manifest row
  (the same pattern as `rem-regularity-estimates-do-not-create-boundary-compatibility`
  in batch 12). The item now links the fact visibly and passes fwdcheck; its
  decision was re-recorded.

## Handoff close-out

**Completed IDs (34/34).** A page (26):
`lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family`,
`lem-hilbert-projection-characterisation-by-a-variational-inequality`,
`lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions`,
`lem-one-dimensional-trace-truncation-compatibility`,
`thm-banach-implicit-function-theorem-for-a-split-surjective-derivative`,
`lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`,
`lem-regular-banach-constraint-directions-are-realised-by-level-set-curves`,
`lem-strong-ltwo-compactness-preserves-unit-normalisation`,
`lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative`,
`thm-stampacchia-variational-inequality`,
`lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum`,
`thm-lipschitz-stability-of-strongly-monotone-variational-inequalities`,
`thm-direct-method-on-a-weakly-closed-constraint-set`,
`thm-finite-regular-constraint-lagrange-multiplier-rule`,
`thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint`,
`lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent`,
`def-closed-convex-obstacle-set-and-variational-inequality`,
`lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`,
`lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed`,
`thm-existence-and-uniqueness-for-the-obstacle-problem`,
`cor-obstacle-complementarity-in-distribution-form`,
`cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity`,
`rem-pointwise-and-integral-constraints-have-different-regularity-tests`,
`thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class`,
`thm-first-dirichlet-eigenfunction-by-constrained-minimisation`,
`thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`.
B page (8):
`cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space`,
`ex-isoperimetric-integral-constraint-and-its-multiplier`,
`cex-dependent-equality-constraints-have-nonunique-multiplier-vectors`,
`cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`,
`cex-obstacle-complementarity-product-needs-extra-regularity`,
`ex-one-dimensional-obstacle-problem-and-contact-set`,
`ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set`,
`ex-rayleigh-quotient-on-an-interval`.
Both pages are written (`library/pde/`), both manifests, the coverage record,
the 32-item proof-contract file and this report are on disk.

**Added suppliers.** One owner-mandated prerequisite was added and fully
authored on the A page: `lem-one-dimensional-trace-truncation-compatibility`
(present in the pre-author scaffold inventory, so it carries an ordinary item
decision). It has no open obligation. No other ID was added.

**Supplier escalation ledger.** At entry, four supplier escalations were open
(batches 9, 10 and 4, and the batch-15 direct-method pair). Every one is
resolved: the supplier is on disk, was read, and matches the use at the
recorded step; the consuming decisions are `accept`/`repaired`, not
`escalate`. Exact IDs and steps are in the item checkpoints (items 8, 10, 14,
32) and in the `verified` cross-batch rows.

**Published concerns.** None confirmed in published content. The one
reading-order concern — a link from the B counterexample to the published
`thm-countable-choice-gives-countable-subsets` on a later page — is handled by
the `forward_refs` declaration above, with no defect in the published item.

**Open obligations (owner / later stages).**

1. **Owner scope refresh for `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`.**
   The scaffold (and therefore the manifest statement row and the owner
   scope promise `eb4daa74...`) displays the false "firm nonexpansiveness"
   inequality; the item states the two correct equivalent forms. Updating the
   manifest statement changes `scopeHash`, so only the owner can refresh the
   scope proceed receipt; the item decision would then need re-recording
   because `itemHash` includes the manifest row. Until then the scope and item
   records are internally consistent but the promised scaffold claim is the
   false one.
2. **Step 4 splice.** `plan-spec.json` still has empty item lists for both
   pages; the ids, `requires` and item order are consistent with the manifests
   and `validate-plan` is clean, so the mechanical splice has nothing to
   resolve from this pair.
3. **Run-wide gates owned by other batches** (reported, not blocking this
   pair): 52 unreviewed cross-batch edges (batches 12/13/14/17/18/22/26), 9
   `item-dependency-levels` errors (Hardy-space group), 898 `depcheck` errors
   and 93 `fwdcheck` findings in sibling mid-authoring batches, and the
   remaining Step-3 final work (531/927 items accepted at the close of this
   dispatch).
4. **Independent re-audit.** Steps 5–8 own the thorough review of these
   items; nothing here pre-empts it.
