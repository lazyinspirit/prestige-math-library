# Step 3b pair authoring — fredholm-elliptic-problems-and-the-elliptic-spectrum

- Run: `frontier-39-analysis-30` (batch 11), role `alpha-high`, label
  `step3b-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum-7f8708cf88b6f43f`.
- A page: `fredholm-elliptic-problems-and-the-elliptic-spectrum` (29 items).
  B page: `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples`
  (10 items). Owned: exactly these 39 IDs, both item files and both page files,
  the batch-11 manifest/coverage/contracts records and this report. Siblings'
  rows in shared files are preserved.

## Owned IDs (authoring order, dependency level first)

L0 `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`;
L1 `cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis`,
`ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues`;
L2 `thm-garding-inequality-for-a-divergence-form-elliptic-operator`;
L3 `cor-a-sufficiently-large-shift-is-coercive`;
L4 `def-formal-adjoint-and-adjoint-weak-dirichlet-problem`;
L5 `thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation`;
L6 `def-shifted-elliptic-solution-operator`,
`rem-neumann-spectrum-and-the-constant-zero-mode`;
L7 `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`,
`lem-shifted-elliptic-solution-operator-is-compact-on-ltwo`,
`ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue`;
L8 `def-symmetric-elliptic-weak-eigenpair`,
`lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem`,
`lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`,
`lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation`;
L9 `cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal`,
`lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality`,
`lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint`,
`thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`;
L10 `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`,
`thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`;
L11 `cor-elliptic-kernel-and-cokernel-are-finite-dimensional`,
`lem-eigenbasis-expansion-in-the-form-norm`,
`rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`;
L12 `cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case`,
`cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`,
`thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`;
L13 `cor-poincare-constant-and-first-dirichlet-eigenvalue`,
`lem-elliptic-resolvent-identity`,
`thm-courant-fischer-minimax-for-elliptic-eigenvalues`,
`thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem`,
`ex-dirichlet-laplacian-eigenpairs-on-an-interval`,
`ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue`;
L14 `thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion`,
`cex-elliptic-eigenvalues-need-not-be-simple`,
`cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue`,
`ex-neumann-laplacian-has-a-zero-constant-mode`,
`ex-shift-removes-a-negative-zero-order-obstruction`.

## Entry audit (scaffold readiness)

- Step 3a scope decision: **sufficient** for the pair at the current scope hash
  (`research/frontier-39-analysis-30-step3a-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum.md`);
  no `owner-authoring-direction.md` exists for this run. The 39 Step-1
  readiness records are `ready`. Owner repairs in
  `.autopilot/frontier-39-analysis-30/owner-repairs/batch11-*.json` were read and
  match the current manifest statements.
- Scaffolds carry statement, deps, strategy, provenance and sources; every
  statement is literature-derived with a fetch-verified source and a locator.
  No item needed a statement change at entry. Two local additions
  (`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`,
  `lem-eigenbasis-expansion-in-the-form-norm`) are already on the A page with
  `dependency_level` values 0 and 11 and are consumed below.
- In-run supplier pairs read at entry: `lax-milgram-and-weak-elliptic-solutions`
  (batch 10: `thm-lax-milgram`, `def-uniformly-elliptic-divergence-form-operator`,
  `lem-elliptic-form-is-well-defined-and-bounded`,
  `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
  `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
  `def-bounded-coercive-and-symmetric-sesquilinear-forms`,
  `def-h-minus-one-as-the-dual-of-h-one-zero`),
  `rellich-kondrachov-and-sobolev-compactness` (batch 9:
  `thm-rellich-compactness-from-w-one-p-zero-to-lp`,
  `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`,
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains`,
  `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo`) and
  `sobolev-poincare-and-morrey-inequalities` (batch 4:
  `thm-poincare-inequality-for-w-one-p-zero`).

## Open obligations at entry

1. In-run suppliers not yet authored at start of authoring (flagged, consumers
   authored anyway and their decisions held): `thm-lax-milgram`,
   `lem-elliptic-form-is-well-defined-and-bounded`,
   `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
   `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
   `def-bounded-coercive-and-symmetric-sesquilinear-forms`,
   `def-h-minus-one-as-the-dual-of-h-one-zero` (batch 10);
   `thm-rellich-compactness-from-w-one-p-zero-to-lp`,
   `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`,
   `thm-poincare-wirtinger-on-bounded-connected-extension-domains`,
   `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo`
   (batch 9); `thm-poincare-inequality-for-w-one-p-zero` (batch 4).
   Exact consumers and steps are recorded in
   `research/frontier-39-analysis-30-batch-11.cross-batch-dependencies.json`
   and in the item decisions.
2. Cross-batch row `lem-shifted-elliptic-solution-operator-is-compact-on-ltwo`
   ⇐ `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo`
   was `open` at entry (new batch-9 supplier); it stays open until the supplier
   is authored and the actual use is re-verified.
3. Step-4 record repair recommended by Step 3a: add the Simon source row to the
   B-page coverage record; page `requires` edges A→PDE-14/PDE-15 and B→PDE-15/PDE-16
   for item-level inputs in unbuilt pages (splice finding, recorded for Step 4).

## Item checkpoints

Checkpoints are appended after each item is authored, checked and recorded;
each states the exact claim/conventions, source locators, dependencies,
decisions, checks, open gaps and next action.

### L0–L5 checkpoint (7 items authored)

- L0 `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`
  (A). Claim: $C_c^\infty(\Omega)$ dense in $L^2(\Omega)$ for arbitrary open
  $\Omega$, hence $H^1_0$ dense and $h\perp H^1_0\Rightarrow h=0$. Proof:
  canonical exhaustion $K_m$, zero extension, cutoff bump, shrinking-radius
  compactness argument, interior mollification and approximate-identity
  convergence; Countable Choice only. Sources: Hunter §4.2 pp. 91–95, Laugesen
  §3.2/§3.5 pp. 51–60 (locators in item). Local repair: added published deps
  `def-radial-mollifier-family-in-rn`, `lem-distance-to-set-is-lipschitz`,
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `lem-mollification-commutes-with-weak-derivatives-in-the-interior`,
  `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-heine-borel-rn` (manifest
  update pending). Checks: precheck pass, rendercheck OK.
- L1 `cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis`
  and `ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues` (B).
  Claims refuted/verified: $M=\begin{pmatrix}2&2\\0&1\end{pmatrix}$ coercive with
  $\alpha=(3-\sqrt5)/2$ but eigenspaces $\mathbb K(1,0)$, $\mathbb K(2,-1)$
  non-orthogonal; and $M=\begin{pmatrix}1&\beta\\-\beta&1\end{pmatrix}$
  coercive with constant $1$ with spectrum $1\pm i\beta$ and no real weak
  eigenpair. Sources [L] §4.1/§4.4 pp. 83–86/98–100, [LS] Ch. 4 pp. 26–28.
  Added published deps `thm-cauchy-schwarz-in-an-inner-product-space`,
  `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial` (manifest
  update pending). Checks: precheck pass, rendercheck OK.
- L2 `thm-garding-inequality-for-a-divergence-form-elliptic-operator` (A).
  Claim: $\operatorname{Re}a(u,u)\ge\frac\theta2\|Du\|^2-(\frac{nM_b^2}{2\theta}+M_c)\|u\|^2$
  and $\ge\alpha\|u\|_{H^1}^2-\beta\|u\|^2$ with $\alpha=\theta/2$,
  $\beta=\theta/2+nM_b^2/(2\theta)+M_c$; no Poincaré, boundedness or symmetry.
  Sources [H] Thm 4.21/(4.23) pp. 104–105, [T] (10.44)–(10.47), [Si] Lect. 7.
  Added published dep `def-l-p-space-as-a-quotient-by-null-functions`.
  In-run suppliers (batch 10): `def-uniformly-elliptic-divergence-form-operator`,
  `lem-elliptic-form-is-well-defined-and-bounded` — authored consumer, decision
  escalated while unfinished. Checks: precheck pass, rendercheck OK.
- L3 `cor-a-sufficiently-large-shift-is-coercive` (A). Claim: for
  $\mu\ge\beta$, $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$ is bounded on $H^1$ and
  $\operatorname{Re}a_\mu(u,u)\ge\frac\theta2\|u\|_{H^1}^2$, on $H^1$ and
  $H^1_0$. Sources [H] Thm 4.22 p. 105, [T] Thm 10.10 pp. 235–236. Added
  published dep `thm-cauchy-schwarz-in-an-inner-product-space`. Checks:
  precheck pass.
- L4 `def-formal-adjoint-and-adjoint-weak-dirichlet-problem` (A). Definition
  only ($a^*$, $L^*$, adjoint weak problem; no proof section, precheck n/a).
  Sources [H] §4.9 p. 107, [L] §4.4 pp. 98–100, [Si] Lect. 10 p. 101. Checks:
  rendercheck OK.
- L5 `thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation`
  (A). Claim: on a nonempty bounded connected extension domain, $\mu_1=\inf_V
  a(u,u)/\|u\|_2^2>0$, attained exactly on the $\mu_1$-eigenspace,
  $\mu_1=1/\|S\|$ for the compact self-adjoint positive solution operator
  $S:L^2_0\to V$, no mean-zero eigenvalue in $(0,\mu_1)$, identity extends to
  $H^1(\Omega)$. Proof route: Poincaré–Wirtinger coercivity on $V$, Lax–Milgram,
  Rellich compactness, compact self-adjoint spectral theorem, orthogonal
  decomposition and the form-norm expansion computed directly (norm-convergent
  projection sum, $a$-Cauchy sequence, coercivity). Sources [L] Cor. 4.9
  pp. 95–98, [LS] Ch. 6 pp. 42–43, [B] Remark 30 p. 312. Added published deps
  `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`,
  `lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign`,
  `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
  `thm-cauchy-schwarz-in-an-inner-product-space`,
  `thm-orthogonal-decomposition-by-a-closed-subspace`,
  `lem-classical-derivatives-are-weak-derivatives`; and the in-run supplier
  `lem-elliptic-form-is-well-defined-and-bounded` (batch 10) enters for the
  boundedness of $a$ — a new cross-batch row to add. Checks: precheck pass,
  rendercheck OK. Open: batch-9/10 suppliers unauthored at this point; the
  decision stays escalated until they are authored and the uses rechecked.

Next action: author L6 `def-shifted-elliptic-solution-operator` and
`rem-neumann-spectrum-and-the-constant-zero-mode`.

### L6–L8 checkpoint (13 items authored)

- L6 `def-shifted-elliptic-solution-operator` (A). Definition of $K_\mu$ for
  the fixed shift $\mu\ge\beta$ with well-definedness recorded: $a_\mu$ bounded
  and coercive with $\alpha=\theta/2$, datum $F_f$ conjugate-linear and bounded
  by $\|f\|_{L^2}$, uniqueness via [[thm-lax-milgram]] and
  $\|K_\mu f\|_{H^1_0}\le\|f\|_{L^2}/\alpha$ via
  [[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]]. Sources [H]
  §4.6–4.7 pp. 102–106, [L] §4.1 pp. 83–86. Checks: rendercheck OK (no proof
  body). No boundedness or boundary regularity used; shift never silently
  changed.
- L6 `rem-neumann-spectrum-and-the-constant-zero-mode` (A). $a(u,u)\ge
  \theta\|Du\|_2^2\ge0$ with equality exactly for componentwise constants;
  zero eigenspace is the $m$-dimensional componentwise-constant space; no
  positive first Neumann eigenvalue on all of $H^1(\Omega)$; mean-zero
  refinement only for connected Sobolev extension domains. Sources [LS]
  pp. 42–43, [L] Cor. 4.9 pp. 95–98, [H] pp. 97–99. Repair 2026-10-05: two
  boundary rows (`iff-forward`, `iff-reverse`) rewritten from templated
  `not_applicable` to `checked` with the forward/reverse clauses of step 1.1,
  clearing two boundary-audit contradiction candidates. Checks: precheck pass,
  rendercheck OK.
- L7 `def-ltwo-operator-associated-with-a-symmetric-elliptic-form` (A).
  $D(L)=\{u\in H^1_0:\exists f\in L^2,\ a(u,v)=(f,v)\ \forall v\}$, $Lu=f$;
  well-definedness via the local density lemma; symmetry by conjugating the
  integrand; $\operatorname{ran}K_\mu\subseteq D(L)$; no closedness,
  self-adjointness or $C_c^\infty\subseteq D(L)$ claimed. Sources [H] §4.6–4.9
  pp. 102–107, [L] §4.1–4.4 pp. 83–100. Checks: rendercheck OK.
- L7 `lem-shifted-elliptic-solution-operator-is-compact-on-ltwo` (A).
  $K_\mu:L^2\to H^1_0$ bounded with norm $\le\alpha^{-1}$;
  $\iota:H^1_0\hookrightarrow L^2$ compact on bounded $\Omega$ (batch 9
  Rellich, AC); composite $\iota\circ K_\mu$ compact. The scaffold note had
  planned the batch-9 corollary `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo`
  as the supplier; the finished proof instead uses
  `thm-rellich-compactness-from-w-one-p-zero-to-lp` at $p=2$ directly, and the
  cross-batch rows were reconciled to that actual use against the authored
  supplier statement. Checks: precheck pass, rendercheck OK.
- L7 `ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue` (B).
  $\Omega=B_1\cup B_2$: $\mathbf 1_{B_1},\mathbf 1_{B_2}$ are independent
  classes with $a(u,u)=0$; $g=|B_2|\mathbf 1_{B_1}-|B_1|\mathbf 1_{B_2}$ has
  global mean zero and zero form value, so no global-mean Poincaré–Wirtinger
  inequality with positive constant holds; the connected-domain hypothesis is
  stressed. Sources [LS] pp. 42–43, [L] pp. 95–98. Checks: precheck pass,
  rendercheck OK.
- L8 `def-symmetric-elliptic-weak-eigenpair` (A). Weak eigenpair
  $a(u,v)=\lambda(u,v)_2$, $E_\lambda$ closed, equivalence with operator
  eigenpairs, reality of $\lambda$, multiplicity; no regularity or canonical
  representative claimed. Checks: rendercheck OK.
- L8 `lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem`
  (A). $K^*_\mu$ solving $a^*_\mu(v,w)=(g,w)_2$; $\|K^*_\mu\|\le\alpha^{-1}$;
  adjoint identity $(K_\mu f,g)_2=(f,K^*_\mu g)_2$; compactness for bounded
  $\Omega$; kernel description at $\mu$. Checks: precheck pass, rendercheck
  OK.
- L8 `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`
  (A). Density of $D(L)$ from density of $\operatorname{ran}K_\mu$; symmetry
  $(Lu,v)_2=a(u,v)$; lower bound $Lu\cdot u\ge-\beta\|u\|_2^2$. Checks:
  precheck pass, rendercheck OK.
- L8 `lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation`
  (A). $a(u,v)=(f,v)_2\ \forall v$ iff $(I-\mu K_\mu)u=K_\mu f$, with both
  sides located in $H^1_0$; compact case for bounded $\Omega$ and AC. Checks:
  precheck pass, rendercheck OK.

### L9–L10 checkpoint (6 items authored)

- L9 `cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal`
  (A). $\lambda\ne\mu\Rightarrow(u,v)_2=0$; real-coefficient clause. Checks:
  precheck pass, rendercheck OK.
- L9 `lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality`
  (A). $K_\mu f=g\iff f-\mu g\perp\ker(I-\mu K^*_\mu)$, via the Fredholm
  alternative for $I-\mu K_\mu$ and Riesz representation. Checks: precheck
  pass, rendercheck OK.
- L9 `lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint`
  (A). $K_\mu$ symmetric, positive ($(K_\mu f,f)_2=a_\mu(K_\mu f,K_\mu f)$)
  and injective on $L^2$. Checks: precheck pass, rendercheck OK.
- L9 `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`
  (A). $L$ self-adjoint with compact resolvent; complex branch via
  $\operatorname{ran}(L+\mu\pm i)=L^2$ and the range criterion, real branch
  via the symmetric full-range argument; $(L-\lambda)^{-1}
  =[I-(\lambda+\mu)K_\mu]^{-1}K_\mu$ compact. Added published dep and the
  cross-batch row `def-bounded-coercive-and-symmetric-sesquilinear-forms`
  (batch 10; used in F4/step 1.2) after the proof audit. Checks: precheck pass,
  rendercheck OK.
- L10 `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` (A).
  Real eigenvalues of finite multiplicity, $\nu^{-1}-\mu$ translation
  bijecting the $K_\mu$-spectrum onto the weak eigenvalues, nondecreasing
  enumeration $\lambda_j\to+\infty$ with an orthonormal $L^2$ eigenbasis of
  $H^1_0$; Countable Choice selects bases of finite-dimensional eigenspaces,
  full AC is *not* consumed for a basis of $\ker K_\mu$ ($K_\mu$ injective).
  Checks: precheck pass, rendercheck OK.
- L10 `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems` (A).
  For bounded open $\Omega$ and $f\in L^2$ exactly one of: unique solvability
  for every datum / nontrivial finite-dimensional homogeneous solution space
  with a solvability condition. Scope qualification recorded: $H^{-1}$ data
  deliberately not claimed (the $L^2\hookrightarrow H^{-1}$ map is not
  surjective). Checks: precheck pass, rendercheck OK.

### L11–L14 checkpoint (13 items authored)

- L11 `cor-elliptic-kernel-and-cokernel-are-finite-dimensional` (A); L11
  `lem-eigenbasis-expansion-in-the-form-norm` (A, local addition:
  $a_\mu(u,u)=\sum_j(\lambda_j+\mu)|(u,e_j)_2|^2$ with form-norm convergence);
  L11 `rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis` (B).
- L12 `cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case`
  (A); L12 `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`
  (A); L12 `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue` (A).
- L13 `cor-poincare-constant-and-first-dirichlet-eigenvalue` (A, **escalated**,
  see open obligations); L13 `lem-elliptic-resolvent-identity` (A); L13
  `thm-courant-fischer-minimax-for-elliptic-eigenvalues` (A); L13
  `thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem`
  (A); L13 `ex-dirichlet-laplacian-eigenpairs-on-an-interval` (B); L13
  `ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue`
  (B).
- L14 `thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion` (A);
  L14 `cex-elliptic-eigenvalues-need-not-be-simple` (B); L14
  `cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue` (B); L14
  `ex-neumann-laplacian-has-a-zero-constant-mode` (B); L14
  `ex-shift-removes-a-negative-zero-order-obstruction` (B).

Conventions held throughout: eigenvalues repeated according to finite
multiplicity, eigenfunctions are $L^2$ classes with no canonical vector in a
multiple eigenspace, the shift $\mu\ge\beta$ is fixed, and the Rayleigh /
Courant–Fischer / spectral-series statements use the form-norm expansion of
`lem-eigenbasis-expansion-in-the-form-norm`, not a strong-operator diagonal
form.

## Post-authoring repairs and recomputation (2026-10-05)

1. **Manifest/level reconciliation.** Manifest `deps` were synced to the final
   item frontmatter for `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`
   (adds `def-bounded-coercive-and-symmetric-sesquilinear-forms`),
   `thm-courant-fischer-minimax-for-elliptic-eigenvalues` (drops the unused
   `def-l-p-space-as-a-quotient-by-null-functions` and
   `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`, keeps
   `thm-rank-nullity`) and `cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue`
   (adds `def-symmetric-elliptic-weak-eigenpair`). Recomputing the run-wide
   labels from the corrected declarations lowers three of our labels:
   `thm-courant-fischer-minimax-for-elliptic-eigenvalues` 13→12,
   `thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion` 14→13,
   `cex-elliptic-eigenvalues-need-not-be-simple` 14→13. Item metadata and
   manifest entries now agree with `item-dependency-levels`; no batch-11 error
   remains.
2. **Cross-batch review input** now has 57 rows (56 `verified`, 1 `open`),
   exactly matching the declared cross-batch edges of the pair (no missing and
   no orphaned rows). The new row is the
   `def-bounded-coercive-and-symmetric-sesquilinear-forms` edge above.
3. **Boundary worksheet repair** for `rem-neumann-spectrum-and-the-constant-zero-mode`
   (two `iff` rows), after which `boundary-audit --fail-on-template` reports
   0 template clusters, 0 contradicted candidates, 93 remaining
   `not_applicable` rows.
4. **Coverage record repair** (the Step-3a recommendation): added the Leon
   Simon source row to the B-page coverage record with the two item mappings
   (`rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`,
   `ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue`).
   `coverage-checklist --require-destination` now reports 2 pages, 79 harvested
   results, 0 errors, 1 warning (the known B-page `coverage-low-yield`, whose
   declines Step 3a confirmed); `source-fetch-check --stamp` reports 11/11
   fetch-verified (1 newly stamped), and check mode agrees.

## Checks actually run (final pass, 2026-10-05)

- `node tools/proof-layout.mjs items/<all 39>.md` (one batched explicit-path
  invocation, after the last item edit): 39 items, 127 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/<all 39>.md`: 34 checked,
  0 failing (5 definitions/remarks have no proof body).
- `node tools/rendercheck.mjs items/<all 39>.md`: 39 files OK.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-11.pages.json`:
  39 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-11.coverage.json --require-destination`:
  2 pages, 79 harvested results, 0 errors, 1 warning (known low-yield);
  `node tools/source-fetch-check.mjs --coverage ...` and `... --stamp`:
  11/11 fetch-verified.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-11.proof-contracts.json --strict`:
  0 errors, 0 warnings, 39/39 items.
- `node tools/boundary-audit.mjs ... --fail-on-template --json`: 312 boundary
  rows, 0 template clusters, 0 contradicted candidates.
- `node tools/citation-fidelity.mjs research/frontier-39-analysis-30-batch-11.proof-contracts.json`:
  365 citations checked, 0 `quote_not_found`, 0 widening candidates.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  no batch-11 error or cycle. Run-wide the check still fails on two *other*
  items: `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
  (5 vs 6, batch 17) and
  `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`
  (14 vs 13, batch 16 `constrained-variational-problems-and-variational-inequalities`,
  whose item file does not exist yet). The latter is the downstream effect
  of our recomputation (its manifest lists
  `thm-courant-fischer-minimax-for-elliptic-eigenvalues`, now level 12):
  that owner must relabel it to 13 or keep a real level-13 dependency; this is
  a cross-group bookkeeping change outside our ownership.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  succeeded at 08:09 (+1100); unified ledger reports 30 reviewed batches,
  0 unreviewed batches, 57 batch-11 edges, 0 batch-11 edges without a review,
  0 orphaned batch-11 reviews (56 `verified`, 1 `open` for the escalated
  Poincaré consumer).
- `node tools/step3-decisions.mjs record-item` for all 39 owned IDs: 38 `accept`
  with confidence 1 and their examined dependency lists, 1 `escalate`
  (`cor-poincare-constant-and-first-dirichlet-eigenvalue`). Re-check with
  `itemDecision` reports 38/39 closed and the escalation owner-held.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 — page order
  acyclic and consistent, no item-level cycles, forward references, B-page
  dependencies or unresolved ids.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --batch 11 --dry-run`:
  2 pages spliced, 0 reused, 39 new items, 0 reused.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`
  (non-mutating, run-wide): exit 1 with 106 pages reported. For our pair:
  (a) both pages show "manifest 29/10 vs plan 0 items" — expected, the plan
  does not carry our item lists until Step 4 splices them; (b) one undeclared
  immediate prerequisite: `cor-poincare-constant-and-first-dirichlet-eigenvalue`
  deps `thm-poincare-inequality-for-w-one-p-zero` on unbuilt page
  `sobolev-poincare-and-morrey-inequalities` (PDE-14,
  order 458.025), which is in neither the manifest nor the plan `requires` of
  our A page.
- Supplier spot-check (read-only, provisional): all 13 in-run supplier IDs in
  the batch input now have item files; 12 render, and all but
  `thm-poincare-inequality-for-w-one-p-zero` pass explicit-path precheck. That
  one currently fails `untagged-steps`; see open obligations.

## Additions beyond the scaffold inventory

The two local A-page prerequisites registered at Step 1 are the only additions
and are both fully authored on the A page, before their consumers:
`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`
(level 0) and `lem-eigenbasis-expansion-in-the-form-norm` (level 11). Both are
consumed only by later-level items on the same pair; manifests, coverage and
contracts carry them, and the splice dry-run reports them as new items.

## Cross-batch Poincare supplier — reverified

- **Consumer** `cor-poincare-constant-and-first-dirichlet-eigenvalue`
  (batch 11 A), **supplier** `thm-poincare-inequality-for-w-one-p-zero`
  (batch 4, page `sobolev-poincare-and-morrey-inequalities`, dependency level
  0). **Consuming steps**: fact [F2], used in steps 1.1 and 3.1
  ($\lambda_1\ge C_P^{-2}>0$ and $C_P\ge\lambda_1^{-1/2}$ for every admissible
  $C_P$; the consumer's bounded-open hypothesis implies the supplier's
  slab hypothesis). The final batch-4 proof now writes
  $x=x_\perp+x_ne$ and $g(s)=\varphi(x_\perp+se)$, so its support and
  integration interval are consistent; at $p=2$ it gives a finite constant
  $C_P$ on the slab. I re-read the current supplier and the consumer's exact
  uses. The consumer's inequality use is valid for $\lambda_1>0$ and for the
  contradiction $\|De_1\|_2=0\Rightarrow\|e_1\|_2=0$; it needs no connectedness.
  Batch-11 input row 8 is now `verified`. Current supplier SHA256 is
  `466b2a567bb64aaeec2b9ea7b8fd0d60513b77ed0722e3f7f2fef7aecd9b4d43`; the
  consumer SHA256 is
  `f64682cf5b206a53d5aa4d046ffcff15c413054f30ead1fc846b40c076782bc6`.
  The consumer was corrected to treat $u=0$ as the trivial
  equality case and to rule out $\|De_1\|_2=0$ directly from Poincare, without
  assuming connectedness. Its direct consumers
  `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` and
  `ex-analytic-dirichlet-heat-semigroup` use only $\lambda_1>0$ and the
  Rayleigh minimum; their uses remain valid and need no content edit. The
  owner receipt remains for the owner to record after this stable-input review.

## Empty-domain repair for the discrete-spectrum supplier

The statement of `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`
now requires nonempty bounded open $\Omega$. The old universal bounded-open
scope included $\Omega=\varnothing$, where $L^2(\Omega)=\{0\}$ and an infinite
eigenbasis with $\lambda_j\to+\infty$ is false. The proof now uses a box inside
nonempty $\Omega$ to exhibit infinitely many pairwise orthogonal indicators in
$L^2(\Omega)$; this justifies that the compact spectral theorem yields an
infinite eigenvalue list. The matching Batch-11 manifest, proof contract and
this report are synchronized.

Direct consumers were audited. The following were updated to state nonempty
bounded $\Omega$: `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`,
`lem-eigenbasis-expansion-in-the-form-norm`,
`thm-courant-fischer-minimax-for-elliptic-eigenvalues`,
`cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case`,
`thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem`,
and `rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`. The other
direct consumers already require a nonempty domain, specify a nonempty model
domain, or assume a nonzero weak eigenpair, which itself excludes the empty
domain. No other consumer change was needed.

## Cross-group items observed (not ours to edit)

1. `items/cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting.md`
   (batch 10 B, `lax-milgram-and-weak-elliptic-solutions-examples`),
   frontmatter line 34: a double-quoted `locator` contains
   `the trace class is a strict subspace of $L^p(\Gamma)$`; the `\G` is an
   invalid YAML escape, so the frontmatter does not parse. This blocked
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
   for the interval in which it was observed (four attempts between 08:05 and
   08:08 +1100) and would also fail rendercheck for that file. Remedy:
   single-quote the locator (or escape the backslash). **Resolved during this
   session** — the file parses now and the refresh completed at 08:09 (+1100):
   30 reviewed batches, 0 unreviewed batches, 57 batch-11 edges with none
   lacking a review, and 0 orphaned batch-11 reviews.
2. `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`
   (batch 16) needs a label update to 13 (or a genuine level-13 dependency)
   after our recomputation; see the checks section.
3. Step-4 splice work for this pair: add the direct `requires` edge from
   `fredholm-elliptic-problems-and-the-elliptic-spectrum` to
   `sobolev-poincare-and-morrey-inequalities` (the reverse-direction edges
   A→PDE-15/PDE-16 recorded in the Step-1 note are now licensed because those
   pages are declared requirements or sit on published pages; the current
   verifier flags only the PDE-14 edge). Also splice both pages' item lists
   into the plan. (The Simon coverage-record repair recommended at Step 3a is
   already done here, see repair 4.)

## Published concerns

None found. No published item was edited; every page in the `requires` list
is consumed as-is, and the only published-behaviour suspicion recorded is the
`thm-urysohn-lemma` note already carried by `extcheck` in the run-wide output
(pre-existing, unrelated to this pair).

## Open obligations and next action

- The Poincare cross-batch input is now reverified; the owner-held B11 consumer
  receipt still awaits owner recording. The spectral-supplier scope correction
  and direct-consumer metadata updates are local repairs, not new receipts.
- The unified ledger refresh succeeded after the batch-10 B-page YAML defect
  was repaired upstream; no batch-11 input change is pending.
- At the Step-3 pre-gate recertification, rehash our receipts after all writers
  drain: any later change to a supplier item in the transitive closure
  (batches 4/9/10 or a published dep) invalidates the corresponding acceptance
  and must be re-verified before the gate.
