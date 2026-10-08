# Step 3b report — SL(2,R) principal and complementary series

Run: `frontier-43-complex-representation-15`  
Pair: `sl2-r-principal-and-complementary-series` (A) and
`sl2-r-principal-and-complementary-series-examples` (B)  
Dispatch: `step3b-pair-sl2-r-principal-and-complementary-series-53a5d4127531038f`

## Owned IDs

`def-iwasawa-and-minimal-parabolic-data-for-sl2-r`,
`def-normalized-principal-series-i-epsilon-nu`,
`thm-iwasawa-decomposition-for-sl2-r`,
`thm-compact-picture-of-the-sl2-principal-series`,
`ex-iwasawa-coordinates-and-haar-density-on-sl2-r`,
`lem-k-type-decomposition-of-the-sl2-principal-series`,
`def-standard-intertwining-operator-for-sl2-r`,
`lem-dual-pairing-between-opposite-principal-series-parameters`,
`lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`,
`lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces`,
`lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`,
`ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu`,
`thm-generic-irreducibility-and-the-exceptional-parameter-lattice`,
`thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`,
`thm-unitarity-of-the-sl2-unitary-principal-series`,
`thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu`,
`thm-unitarity-of-the-sl2-complementary-series`,
`cor-complementary-series-converge-to-the-trivial-representation`,
`cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval`,
`ex-intertwiner-eigenvalues-in-the-spherical-complementary-range`.

## Entry checkpoint

The pair's Step-1 records list all 20 IDs as ready and the declared in-run
consumer input as empty. These are scaffold assertions, not authoring approval.
Readiness, exact published suppliers, source arguments, current item contents,
and page/manifest consistency remain to be rechecked in dispatch dependency
order. No item has yet been accepted in this report.

## Open obligations

- Audit and author every owned item in the dispatch order; verify exact
  hypotheses, suppliers, parity and parameter conventions, source locators, and
  proofs independently.
- Reconcile actual proof uses in the Step-3 contracts, coverage and manifests;
  preserve both pages and every promised claim.
- Run and record the explicit-path format/render checks, content policy, strict
  contracts, dependency-level checks, and `validate-plan` for batch 3.
- Record current item decisions only after full authoring and checks; any
  unresolved mathematical or source issue remains escalated for the owner.
- Run `node tools/proof-layout.mjs` once after the final edits/formatting, with
  every changed item path in a single command.

## Item checkpoints

### Level 0 — `def-iwasawa-and-minimal-parabolic-data-for-sl2-r`

- **Claim/conventions:** Fixes $G=\mathrm{SL}_2(\mathbb R)$, the clockwise-coordinate
  $k_\theta$, $A:a_t=\mathrm{diag}(e^{t/2},e^{-t/2})$, $N:n_x$, $M=\{\pm I\}$,
  $P=MAN$, $\delta_P(a_t)=e^t$, and the repository convention
  $\Delta_P=\delta_P^{-1}$. It fixes $\sigma_\varepsilon$, $e^\nu(a_t)=e^{\nu t/2}$,
  and the single normalized half-modular factor $|\alpha(a_t)|^{1+\nu}$.
- **Dependencies examined:**
  `ex-general-and-special-linear-lie-groups`,
  `ex-orthogonal-and-special-orthogonal-lie-groups`, `def-lie-group`,
  `def-real-and-complex-lie-groups`, `def-exponential-map-of-a-lie-group`,
  `def-one-parameter-subgroup-of-a-lie-group`,
  `thm-one-parameter-subgroups-are-exactly-exponentials`,
  `def-countable-choice`, `cor-normalized-haar-measure-on-a-compact-lie-group`,
  `def-the-one-dimensional-torus-and-normalized-haar-integral`,
  `def-modular-function-of-a-locally-compact-group`,
  `def-special-linear-lie-algebra-sl-two`, and `def-axiom-of-choice`; all are
  current published suppliers. The direct dependency on `def-countable-choice`
  was added because the exponential interfaces require $\mathrm{AC}_\omega$.
- **Source evidence:** Kerr, §2 printed pp. 6–7 (positive triangular factor,
  $M=P\cap K$, parabolic modular character, and Definition 2.1); Kowalski,
  §7.4 Lemma 7.4.4 (unique triangular-times-$K$ coordinates). The needed matrix,
  center, component, radical, adjoint, and modular-function claims were checked
  directly from the displayed matrices; Knapp's Chapter VI §4 locator remains
  relevant to the next Iwasawa theorem.
- **Repair and checks:** Added the explicit unique $MAN$ factors
  $m=\operatorname{sgn}(u)I$, $t=2\log|u|$, $x=b/u$, and direct arguments that
  $Z(G)=M$, that $N$ is exactly the unipotent set of $P$, and that the $u>0$
  component is $AN$; made the real
  Lie-algebra supplier explicit; and documented the restriction of AC to
  countable families. Item/manifest dependency and statement mirrors agree;
  dependency level remains 0. Explicit-path precheck: not applicable (0 checked,
  0 failing). Explicit-path rendercheck: 1 file passed. Current item decision:
  `repaired`, confidence 1, with all 13 direct dependency IDs examined; receipt
  `frontier-43-complex-representation-15-step3b-review-def-iwasawa-and-minimal-parabolic-data-for-sl2-r.json`.
- **Open gaps / next action:** None for this Definition. Continue with the next
  level-1 item, `def-normalized-principal-series-i-epsilon-nu`.

### Level 1 — `def-normalized-principal-series-i-epsilon-nu`

- **Claim/conventions:** Defines the smooth model by
  $\varphi(pg)=\chi_{\varepsilon,\nu}(p)\varphi(g)$ and
  $(\Pi_\nu(g_0)\varphi)(g)=\varphi(gg_0)$, with
  $\chi_{\varepsilon,\nu}=\delta_P^{1/2}\sigma_\varepsilon e^\nu$.
  It distinguishes the smooth $G$-representation from its $K$-finite
  $(\mathfrak{sl}_2(\mathbb C),K)$-module, states unitarity of the inducing
  character exactly on $i\mathbb R$, and defines
  $\mathcal W_0=2\mathbb Z+1$, $\mathcal W_1=2\mathbb Z$ for later reducibility
  statements.
- **Dependencies examined:** `def-iwasawa-and-minimal-parabolic-data-for-sl2-r`
  (completed at level 0) and `def-axiom-of-choice` (published). AC enters through
  the Iwasawa Haar and exponential interfaces; no additional choice is made.
- **Source evidence:** Kerr, §2 Definition 2.1 and Remark 2.2, printed pp. 6–7:
  normalized covariance, right translations, and the distinction between the
  $K$-finite Harish-Chandra module and its smooth $G$-globalization; Kowalski,
  §7.4, printed pp. 293–295: the $\chi\delta$ covariance model, the $H_\chi$
  space and right action; Etingof, §9.2, printed p. 50: the right-covariant
  $V^\varepsilon(s)$ model and left action. The inversion formula gives
  $F(gb)=|t(b)|^{-1-\nu}\operatorname{sgn}(t(b))^\varepsilon F(g)$, so the
  source parameter is $s=-\nu$.
- **Repair and checks:** Defined $B=P$ and $t(b)$ as the signed top-left
  diagonal entry, derived the covariance under inversion and its left action,
  and wrote the covariance/action-law and unitarity calculations directly.
  Reworded the parity lattice as the set used by later results, avoiding an
  unproved reducibility assertion in the Definition. Dependency level remains
  1; its two dependency and statement mirrors agree. Explicit-path precheck:
  not applicable (0 checked, 0 failing). Explicit-path rendercheck: 1 file
  passed. Current item decision: `repaired`, confidence 1, with both direct
  dependency IDs examined; receipt
  `frontier-43-complex-representation-15-step3b-review-def-normalized-principal-series-i-epsilon-nu.json`.
- **Open gaps / next action:** None. Continue with the remaining level-1 item,
  `thm-iwasawa-decomposition-for-sl2-r`.

### Level 1 — `thm-iwasawa-decomposition-for-sl2-r`

- **Claim/conventions:** Multiplication $K\times A\times N\to G$ is a
  diffeomorphism with explicit QR inverse coordinates. The left Haar density in
  KAN coordinates is $e^t,dk\,dt\,dx$; in NAK coordinates it is
  $e^{-t}\,dk\,dt\,dx$. The direct adjoint calculation proves unimodularity.
- **Dependencies examined:** The completed level-0 Iwasawa data, AC and
  $\mathrm{AC}_\omega$, QR factorization, smooth/diffeomorphism definitions,
  Lebesgue/change-of-variables interfaces, left Haar and unimodularity
  definitions, normalized Haar on compact Lie groups and on the circle, the
  positive-smooth-density Radon and integration results, and the
  measure-preserving integral theorem plus $L^1$ linearity. These are all
  current published suppliers. New direct dependencies were added for the
  normalized $dk=d\theta/(2\pi)$ formula, AC$_\omega$ density hypotheses,
  Radon regularity, Borel-density integration, and transfer of measure
  invariance to the Haar functional. Dependency level remains 1 because its
  only in-run supplier is the level-0 Definition.
- **Source evidence:** Kowalski, §7.4 Lemma 7.4.4 (explicit coordinates),
  Exercise 7.4.6 (the $y^{-2}dx\,dy\,d\theta$ Haar density), and Lemma 7.4.7
  (the circle-coordinate Jacobian), printed pp. 293–296; Kerr, §2 Exercise
  2.3(iii), printed p. 8; Knapp, Chapter VI §4 Theorem 6.46, printed pp.
  374–375. The proof was rederived from the QR formulas and the explicit
  left-translation and adjoint matrices; the source passages confirm the
  conventions.
- **Repair and checks:** Reconciled the normalized circle Haar formula and the
  AC-to-AC$_\omega$ use; added the exact Radon/density-integral and
  measure-preserving functional inputs. Replaced the absolute-angle-Jacobian
  claim with the signed calculation $\theta_1'=e^{-u}>0$, so the oriented
  change-of-variables supplier applies. Expanded the adjoint actions on
  $H,e,f,J,S$ and derived the right-translation density factor and inversion
  step explicitly. The corrected N-coordinate is
  $x+e^{-t}v(\theta)$, matching the applicable Step-3a observation. Explicit
  path precheck: 1 checked, 0 failing. Explicit-path rendercheck: 1 file
  passed. Strict proof-contract check on this item: 1/1 checked, 0 errors,
  0 warnings. Item/manifest statement and dependency mirrors agree. Current
  item decision: `repaired`, confidence 1, with all 17 direct dependency IDs
  examined; receipt
  `frontier-43-complex-representation-15-step3b-review-thm-iwasawa-decomposition-for-sl2-r.json`.
- **Open gaps / next action:** None. Continue with the level-2 A-page item
  `thm-compact-picture-of-the-sl2-principal-series`, followed by the level-2
  B-page example `ex-iwasawa-coordinates-and-haar-density-on-sl2-r`.

### Level 2 — `thm-compact-picture-of-the-sl2-principal-series`

- **Claim/conventions:** Restriction identifies the left-$P$-covariant smooth
  principal-series model with parity-$\varepsilon$ functions on $K$; on the
  unitary axis the rho half-density after inversion identifies it with the
  library's right-$P$-covariant induction model using $\tau_\nu=\sigma_\varepsilon
  e^\nu$, with parameter unchanged. The general $PK$ formula retains
  $\sigma_\varepsilon(m_p)$; the unique positive-diagonal $ANK$ representative
  has $m_p=I$.
- **Dependencies examined:** All 21 direct suppliers are recorded in the
  current item receipt. They include the completed Iwasawa data and Haar
  theorem, normalized principal-series model, rho and Weil quotient interfaces,
  unitary induction/cocycle, compact Haar inversion invariance, the Riesz
  representation interface, quotient topology/averaging, and the Fourier
  density and AC$_\omega$ inputs. Added direct dependencies on
  `thm-lebesgue-measure-is-a-radon-measure-on-rn` for the constructed subgroup
  Haar measure's Radon property and
  `cor-normalized-haar-measure-on-a-compact-lie-group` for inversion and
  translation invariance. No supplier is unfinished.
- **Source evidence:** Kowalski, §7.4 Lemma 7.4.4(2) and its proof, printed
  pp. 294–295, gives the parity restriction/extension and compact norm;
  Lemma 7.4.7, printed pp. 295–296, gives the compact Jacobian identity.
  Kerr, §2 Definition 2.1, Remark 2.2 and Exercise 2.3(ii), printed pp. 7–9,
  confirms the half-modular normalization, smooth globalization, parity, and
  imaginary-parameter unitary picture. Etingof, §9.2, printed p. 50, writes
  the right-covariant $V^\pm(s)$ model; its exponent $s-1$ matches the present
  $-1-\nu$ under $s=-\nu$, including the sign factor for odd parity. These
  passages were reread in full for the cited claims.
- **Repair and checks:** Constructed $\rho(ka_tn_x)=e^{-t}$, verified its
  covariance under $P$, and identified the Weil quotient measure with the
  pushforward of normalized $dk$ by evaluating the Weil integral against the
  KAN Haar density. Derived the compact norm through $G/P$ directly, avoiding
  an unsupported $K/M$ quotient-measure identification. Computed the
  inversion/rho half-density covariance and left-action cocycle, and checked
  that $-I$ fixes the Iwasawa $AN$ coordinates while sending $\kappa$ to
  $-\kappa$; the action therefore preserves parity and the general $PK$
  expression is independent of the $M$ choice. This rechecks and repairs the
  applicable Step-3a parity-factor observation. The item and page-manifest
  dependency arrays agree at 21 entries; dependency level remains 2. Explicit
  precheck: 1 checked, 0 failing. Explicit rendercheck: 1 file passed. Strict
  proof contract: 1/1 checked, 0 errors, 0 warnings. Batch-3 content policy:
  20 scoped items, 0 errors, 0 warnings. Batch manifest-deps: 20 items, 0
  errors. `item-dependency-levels check --run frontier-43-complex-representation-15`
  checked 378 items across 30 pages, maximum level 27, with no errors; this
  item's assigned level remains 2. Current item decision: `repaired`, confidence
  1, with all 21 direct
  dependencies examined; receipt
  `frontier-43-complex-representation-15-step3b-review-thm-compact-picture-of-the-sl2-principal-series.json`.
- **Plan findings / open obligations:** `validate-plan research/plan-spec.json
  --run frontier-43-complex-representation-15` exits 1. Across the run it
  reports 201 findings: 148 redundant-prerequisite warnings and 53 errors
  (40 undeclared page prerequisites, 9 B-leaf edges, 2 unresolved prerequisites,
  and 2 intra-page order findings). On this A page the two undeclared page
  prerequisites are specific: `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner`
  uses `def-euler-beta-function`, `def-euler-gamma-function`,
  `thm-beta-gamma-identity`, `cor-gamma-one-half-value`,
  `thm-gamma-meromorphic-continuation`, and `cor-gamma-function-has-no-zeros`
  from page `the-gamma-function`; and
  `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` uses
  `thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions`
  from page `analytic-semigroups-and-linear-evolution-equations`. The current
  A-page `requires` closure omits both pages. Leave this shared plan amendment
  for Step 4: add the two required pages or provide an already-declared path
  that contains these suppliers. No mathematical gap remains in this item.
  Continue with the level-2 B-page item
  `ex-iwasawa-coordinates-and-haar-density-on-sl2-r`.

### Level 2 — `ex-iwasawa-coordinates-and-haar-density-on-sl2-r`

- **Claim/conventions:** For $g=\begin{psmallmatrix}p&r\\q&s\end{psmallmatrix}$,
  the example names $a=\sqrt{p^2+q^2}$, $t=2\log a$,
  $k=a^{-1}\begin{psmallmatrix}p&-q\\q&p\end{psmallmatrix}$,
  $x=(pr+qs)/a^2$, and $n=n_x$. Haar measure is the KAN density
  $e^t\,dk\,dt\,dx$. It checks left multiplication by $a_u$ and $k_\phi$.
- **Dependencies examined:** The completed Iwasawa data and Haar theorem;
  the normalized torus measure and compact-group Haar uniqueness used to
  identify $dk$ with $dm_{\mathbb T}$; Countable Choice for the torus-measure
  supplier under the stated AC; and the continuous compact-support change of
  variables lemma for the integral check. These four missing direct proof
  inputs were added to the item and manifest: `def-the-one-dimensional-torus-and-normalized-haar-integral`,
  `cor-normalized-haar-probability-on-a-compact-group`, `def-countable-choice`,
  and `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands`.
- **Source evidence:** Kowalski, §7.4 Lemma 7.4.4(1) and its proof, printed
  pp. 293–294, gives the explicit triangular-times-$K$ coordinates; Exercise
  7.4.6, printed p. 295, gives the $y^{-2}dx\,dy\,d\theta$ Haar density and
  asks for its invariance check. This source uses $NAK$ coordinates; the
  repository theorem supplies the equivalent $KAN$ density $e^t$. The relevant
  source passage was reopened and read in full. The matrix, cocycle, Jacobian,
  and integral calculations below were checked directly.
- **Repair and checks:** Named all three factors $k(g),a(g),n(g)$ and verified
  both columns of their product using $ps-qr=1$. Computed the signed angle
  derivative $d\theta_1/d\theta=e^{-u_1(\theta)}>0$. Rechecked the Step-3a
  corrected $N$-component by deriving the full left-translation map
  $(\theta,t,x)\mapsto(\theta_1,t+u_1,x+e^{-t}v_u)$. Identified the normalized
  circle measure through the quotient coordinate and evaluated the tent
  integral as $2\eta(\cosh\eta-1)$. The item and page manifest agree at seven
  direct dependencies; dependency level remains 2. Explicit precheck: 1
  checked, 0 failing. Explicit rendercheck: 1 file passed. Strict proof
  contract: 1/1 checked, 0 errors, 0 warnings. Batch-3 content policy: 20
  scoped items, 0 errors, 0 warnings. Batch manifest-deps: 20 items, 0 errors.
  The run-wide dependency-level check passed: 380 items on 30 pages, maximum
  level 27. Current item decision: `repaired`, confidence 1, with all seven
  direct dependencies examined; receipt
  `frontier-43-complex-representation-15-step3b-review-ex-iwasawa-coordinates-and-haar-density-on-sl2-r.json`.
- **Plan findings / open obligations:** The latest
  `validate-plan research/plan-spec.json --run frontier-43-complex-representation-15`
  exits 1 with 195 findings: 148 redundant-prerequisite warnings and 47 errors
  (35 undeclared page prerequisites, 7 B-leaf edges, 3 unresolved prerequisites,
  and 2 intra-page order findings). This B page adds no new plan finding. The
  two previously reported undeclared prerequisites remain on the A page in
  `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` and
  `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu`; Step 4
  must add the `the-gamma-function` and
  `analytic-semigroups-and-linear-evolution-equations` requirement paths (or
  another declared path containing the exact suppliers). Other run-wide plan
  errors remain outside this pair's ownership. Continue with the level-3
  A-page item `lem-k-type-decomposition-of-the-sl2-principal-series`.

### Level 3 — `lem-k-type-decomposition-of-the-sl2-principal-series`

- **Claim/conventions:** Under $k_\theta\leftrightarrow[\theta/(2\pi)]$, the
  modes $f_n(k_\theta)=e^{in\theta}$ form an orthonormal basis of the parity
  subspace exactly for $n\equiv\varepsilon\pmod2$. Each mode is a distinct
  one-dimensional right-$K$ character. In this item, $K$-finite is defined
  explicitly as finite-dimensional span of the right $K$-orbit.
- **Dependencies examined:** The completed compact-picture theorem; Fourier
  coefficients/characters, completeness and mean-square convergence on the
  torus; the normalized torus measure; Countable Choice for the Fourier
  suppliers under AC; and the published result that finite-dimensional
  subspaces of normed spaces are closed. Added direct dependencies on
  `def-countable-choice` and
  `cor-finite-dimensional-subspaces-are-closed` to supply the exact AC$_\omega$
  transfer and the orbit-span closedness used in the converse K-finite claim.
- **Supplier-order note:** The draft
  `def-k-finite-and-smooth-vectors-for-sl2-r` is on the later batch-5 page
  `sl2-r-discrete-series-and-unitary-dual` (order 1240). It cannot justify this
  earlier consumer. The item therefore states the orbit-span meaning of
  $K$-finite locally and proves the assertion from that definition in step 4.1;
  it has no dependency on the unfinished draft and no supplier obligation is
  open.
- **Source evidence:** Kerr, §2, printed p. 8, lists $f_n=e^{in\theta}$ with
  the parity condition and gives $k_\phi f_n=e^{in\phi}f_n$. Etingof, §9.2,
  printed p. 50, identifies the two compact parity spaces $F(-z)=\pm F(z)$;
  §9.1, printed pp. 48–49, gives the weight decomposition convention. These
  passages were reread. The completeness, closed-subspace projection, and
  finite-orbit characterizations are proved locally from the Fourier suppliers.
- **Repair and checks:** Made the parity Fourier proof explicit via the
  half-turn on the coefficient integral. Replaced the unsupported Bochner
  projection claim with finite cyclic averages: geometric sums isolate a mode
  on a symmetric Fourier partial sum, and their operator norms are at most one,
  so the averages converge to the desired coefficient vector without a
  vector-valued integration prerequisite. Used the closed-subspace supplier
  for the finite-dimensional orbit span. Updated item and page-manifest
  dependency and statement mirrors; added the local $K$-finite definition
  without a later-page edge. Dependency level remains 3. Explicit precheck:
  1 checked, 0 failing. Explicit rendercheck: 1 file passed. Strict proof
  contract: 1/1 checked, 0 errors, 0 warnings. Batch-3 content policy: 20
  scoped items, 0 errors, 0 warnings. Batch manifest-deps: 20 items, 0 errors.
  The batch-3 dependency-level check reports 20 items, 0 errors, maximum level
  9; this item's declared and computed level is 3. The run-wide level check
  also reports the external mismatch `ex-extremal-length-of-rectangle-and-annulus`:
  declared level 4, computed level 5. Current scope was refreshed as
  `sufficient` after the local terminology clarification. Current item
  decision: `repaired`, confidence 1, with all eight direct dependencies
  examined; receipt
  `frontier-43-complex-representation-15-step3b-review-lem-k-type-decomposition-of-the-sl2-principal-series.json`.
- **Plan findings / open obligations:** The latest run-wide
  `validate-plan` exits 1 with 197 findings: 148 redundant-prerequisite
  warnings and 49 errors (36 undeclared page prerequisites, 8 B-leaf edges,
  2 unresolved prerequisites, 2 intra-page order findings, and 1 page-cycle
  finding). The two undeclared prerequisites on this pair's A page are the
  already recorded the-gamma-function and
  analytic-semigroups-and-linear-evolution-equations edges described in the
  level-2 checkpoint; this item adds no third page path. Those shared plan
  amendments and the unrelated run-wide findings remain open for Step 4 and
  their owning pairs. Continue with the level-4 A-page item
  `def-standard-intertwining-operator-for-sl2-r`.

### Level 4 — `def-standard-intertwining-operator-for-sl2-r`

- **Claim/conventions:** For $\operatorname{Re}\nu>0$, define
  $(A(\nu)\varphi)(g)=\int_{\mathbb R}\varphi(w n_u g)\,du$ with
  $w=k_{-\pi/2}=\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}$ and the
  repository's left-$P$-covariant, right-translation model
  $I_{\varepsilon,\nu}$. The local proof establishes absolute convergence,
  linearity, smooth target $I_{\varepsilon,-\nu}$, right intertwining,
  preservation of K-finiteness, and diagonal action on every allowed
  one-dimensional K-type. The scalar $c_0$ is an eigenvalue only for
  $\varepsilon=0$; for $\varepsilon=1$ it is the formal even-base scalar.
  For $\varepsilon=0$, $c_0(\nu)=B(1/2,\nu/2)$ and is positive for real
  $\nu>0$. Positive-real-base complex powers use the real logarithm.
- **Dependencies examined:** All 27 direct dependency IDs were read and
  reconciled: def-iwasawa-and-minimal-parabolic-data-for-sl2-r,
  def-normalized-principal-series-i-epsilon-nu,
  thm-compact-picture-of-the-sl2-principal-series,
  lem-k-type-decomposition-of-the-sl2-principal-series,
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra,
  def-integrable-real-and-complex-functions-and-their-integrals,
  prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-real-power-continuity-and-derivatives,
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line,
  cor-c-one-change-of-variables-for-l-one-functions,
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
  cor-additivity-of-the-nonnegative-lebesgue-integral,
  cor-integral-over-a-null-set-vanishes,
  thm-lebesgue-measure-of-a-box-of-every-kind,
  thm-linearity-of-the-lebesgue-integral-on-l-one,
  thm-differentiation-under-the-integral-sign, thm-dominated-convergence,
  cor-continuous-functions-are-borel-measurable, thm-extreme-value-metric,
  def-lie-group, def-c-r-and-smooth-maps-between-smooth-manifolds,
  thm-chain-rule-for-total-derivatives,
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
  def-euler-beta-function, thm-beta-gamma-identity,
  def-countable-choice, and def-axiom-of-choice.
  The prior oriented-manifold change-of-variables edge was removed: that
  supplier covers compactly supported top forms, not these noncompact
  Lebesgue integrals. Added the exact nonnegative and complex $L^1$ C1
  change-of-variables suppliers, complex-exponential modulus, smooth-chain,
  and Beta inputs. Item and manifest direct-dependency lists agree at 27.
- **Choice:** AC supplies the normalized compact-group Haar inputs of the
  compact-picture/K-type suppliers and implies AC$_\omega$ for the improper
  half-line and Lebesgue change-of-variables suppliers. No vector or
  representative is selected in the proof.
- **Source evidence and convention check:** Kerr, §2, Exercise 2.8(i)–(iii),
  printed p. 12, states the right-intertwining and target claims as exercises;
  it supplies no proof or meromorphic continuation. Kerr's displayed
  $w_K=\begin{psmallmatrix}0&1\\-1&0\end{psmallmatrix}$ equals $-w$, so his
  integral differs by $\sigma_\varepsilon(-I)=(-1)^\varepsilon$; the item
  fixes the sign from its own matrix convention and proves its formulas
  locally. Kowalski, Proposition 7.4.3(3), printed pp. 293–294, gives the
  equivalence classification; Exercise 7.4.12, printed p. 301, leaves the
  inverse-character intertwiner construction to the reader. Etingof, §9.1,
  printed pp. 48–49, gives $P^\pm(s)\cong P^\pm(-s)$ in the irreducible
  regime; §9.2, printed p. 50, fixes the right-$P$ model and $s=-\nu$.
  These passages motivate the claim but do not replace the local integral
  proof. No unrecoverable source uncertainty remains for the initial
  half-plane claims.
- **Authoring and checks:** Replaced the scaffold's unproved pointwise tail
  estimate with a compact-$g$ determinant bound, then applied it uniformly
  to every coordinate derivative. The explicit changes $u\mapsto u+x$ and
  $u\mapsto e^{-s}u$ give N/A covariance with the correct factor
  $e^{(1-\nu)s/2}$; centrality gives M covariance. Direct right-translation
  commutation and the one-dimensional K-character lines prove the target,
  K-finite preservation, and diagonalization without using the later
  recurrence proof. The C1 substitution gives the Beta value and the
  positive-real $c_0$ bound. Explicit-path precheck: 1 checked, 0 failing.
  Explicit rendercheck: 1 file passed. Strict item proof contract: 1/1,
  0 errors and 0 warnings. Batch-3 content policy: 20 items, 0 errors,
  0 warnings. Batch manifest-deps: 20 items, 0 errors. After the Definition statement mirror was synchronized, the pair scope
  receipt was refreshed against the current A/B manifest; the current scope
  check no longer lists this pair.
- **Forward justifications / item decision:** The level-5 recurrence is now
  complete. Its Step 3.1 proves the formal $c_0$ Gamma continuation for
  $\varepsilon=1$, and the scalar formulas and K-type eigenvalue identities
  reconcile the Definition's actual initial-half-plane use. The separate
  full-operator-family continuation remains an open clause of this Definition;
  its named supplier is the assigned level-6 item
  thm-meromorphic-continuation-and-intertwining-identity-for-a-nu. This
  continuation is not used by the recurrence consumer. The Definition's
  current item decision remains escalated for owner resolution until that
  theorem and its actual use are verified. The recurrence consumer has a
  repaired decision after its own proofs and checks.

- **Run-wide gates:** `item-dependency-levels check --run
  frontier-43-complex-representation-15` exits 1 only on the external
  sibling mismatch `ex-extremal-length-of-rectangle-and-annulus` (declared
  level 4, computed 5); this item remains level 4. Current
  `validate-plan research/plan-spec.json --run
  frontier-43-complex-representation-15` exits 1 with 148 redundant
  prerequisite warnings and 52 errors (39 undeclared page prerequisites,
  8 B-leaf edges, 2 unresolved items, 2 intra-page order findings, and
  1 page cycle). On this A page the two undeclared requirement paths are
  the-gamma-function (used by the recurrence supplier and by this item's
  Beta inputs def-euler-beta-function /
  thm-beta-gamma-identity) and
  analytic-semigroups-and-linear-evolution-equations (used by the
  continuation theorem's Cauchy estimates). Leave the shared plan
  amendments to Step 4; all other plan findings belong to their owning
  pairs. The current run-wide Step-3 scope gate also lists seven other
  pages needing scope review or an owner-held proceed; this pair's scope
  remains closed. Continue with the level-4 A-page item
  `lem-dual-pairing-between-opposite-principal-series-parameters`.

### Level 4 — `lem-dual-pairing-between-opposite-principal-series-parameters`

- **Claim/conventions:** For every $\nu\in\mathbb C$, the normalized compact
  picture $L^2$ pairing $\langle f,h\rangle=\int_K f\overline h\,dk$ is
  invariant between parameters $-\bar\nu$ and $\nu$. For real $\nu$ this is
  the pairing between $I_{\varepsilon,-\nu}$ and $I_{\varepsilon,\nu}$; the
  parity K-modes are orthonormal.
- **Dependencies examined:** All 17 direct suppliers were read and reconciled:
  `def-iwasawa-and-minimal-parabolic-data-for-sl2-r`,
  `def-normalized-principal-series-i-epsilon-nu`,
  `thm-iwasawa-decomposition-for-sl2-r`,
  `thm-compact-picture-of-the-sl2-principal-series`,
  `lem-k-type-decomposition-of-the-sl2-principal-series`,
  `thm-change-of-variables-for-oriented-manifold-diffeomorphisms`,
  `def-the-one-dimensional-torus-and-normalized-haar-integral`,
  `cor-normalized-haar-measure-on-a-compact-lie-group`,
  `thm-complex-exponential-addition-and-real-extension`,
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `thm-algebra-of-derivatives`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
  `thm-extreme-value-metric`,
  `def-countable-choice`, and `def-axiom-of-choice`. The newly
  explicit inputs fix the identification $dk=d\theta/(2\pi)$, supply the
  smooth ANK coordinates and complex-conjugation law, and justify extending
  real top-form change of variables to the complex pairing by real and
  imaginary parts. Item and manifest dependency lists agree at 17.
- **Choice:** AC supplies the normalized Haar probability on compact $K$
  through the compact-Haar supplier and implies AC$_\omega$ for the torus
  measure. The local Jacobian argument makes no other choice.
- **Source evidence:** Kowalski, §7.4 Lemma 7.4.7 and its proof, printed
  pp. 295–296, gives the exact weighted compact-Jacobian identity
  $\int_K F(k)\,dk=\int_K\delta(\beta(k))^2F(\kappa(k))\,dk$; with
  $\delta(\beta)=|\alpha|$, it matches the repository factor $|\alpha|^2$.
  Proposition 7.4.3(1), printed pp. 293–294, motivates the compact $L^2$
  model, but is stated for unitary inducing characters. Kerr, §2 Exercise
  2.3(ii), printed p. 9, asks for invariant unitarity on the imaginary axis;
  it does not prove the present all-complex opposite-parameter pairing.
  The proof independently derives the circle Jacobian and parameter
  cancellation, so no source uncertainty remains.
- **Authoring and checks:** Added normalized-Haar angular coordinates and
  countable choice as explicit direct dependencies, and made the complex
  top-form change-of-variables reduction explicit. The determinant
  calculation gives $\psi'=e^t=|\alpha|^2>0$; the inverse map is
  $\kappa(\cdot,g^{-1})$. The opposite-parameter cocycles multiply to that
  Jacobian for every complex $\nu$. Removed the scaffold proof's extra
  nondegeneracy sentence, which was not claimed in the Statement. Explicit
  precheck: 1 checked, 0 failing. Explicit rendercheck: 1 file passed.
  Strict proof contract: 1/1, 0 errors and 0 warnings. Batch-3 content
  policy: 20 items, 0 errors, 0 warnings. Batch manifest-deps: 20 items,
  0 errors. No unfinished direct supplier or local obligation remains;
  record this original scaffold item as `repaired`, confidence 1, after
  the final proof-layout pass and hash-current checks.
- **Run-wide findings:** The run-wide dependency-level check continues to
  report three external mismatches:
  `ex-extremal-length-of-rectangle-and-annulus` (declared 4, computed 5),
  `ex-affine-quasiconformal-ellipse-map` (declared 9, computed 6), and
  `cex-orientation-reversing-homeomorphism-is-quasiconformal` (declared
  10, computed 3). This item remains computed/declarative level 4. The
  current `validate-plan` exits 1 with 148 redundant-prerequisite warnings
  and 54 errors (40 undeclared page prerequisites, 9 B-leaf edges,
  2 unresolved items, 2 intra-page order findings, and 1 page cycle). The
  only undeclared paths on this A page remain `the-gamma-function` and
  `analytic-semigroups-and-linear-evolution-equations`; this item adds no
  new page path. Shared plan repair remains for Step 4. Continue with the
  level-4 A-page item
`lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`.

### Level 4 — `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`

- **Claim and conventions:** For the real matrix directions
  $J,H,S$ and their stated complex-linear combinations
  $W=-iJ$, $E_\pm=(H\pm iS)/2$, the compact-picture derived action has
  $L_Wf_n=nf_n$ and $L_{E_\pm}f_n=(1+\nu\pm n)f_{n\pm2}/2$; it satisfies
  the three displayed Lie brackets, preserves smooth and $K$-finite vectors,
  and has the two stated exact zero loci. Only real $X$ is exponentiated in
  $L_X$; complex directions are defined by complex-linear extension.
- **Dependencies examined:** The 17 direct IDs are
  `def-iwasawa-and-minimal-parabolic-data-for-sl2-r`,
  `thm-iwasawa-decomposition-for-sl2-r`,
  `def-normalized-principal-series-i-epsilon-nu`,
  `thm-compact-picture-of-the-sl2-principal-series`,
  `lem-k-type-decomposition-of-the-sl2-principal-series`,
  `def-special-linear-lie-algebra-sl-two`,
  `def-one-parameter-subgroup-of-a-lie-group`,
  `thm-one-parameter-subgroups-are-exactly-exponentials`,
  `def-exponential-map-of-a-lie-group`, `thm-algebra-of-derivatives`,
  `thm-chain-rule`, `thm-logarithm-derivative-and-integral`,
  `thm-complex-exponential-is-entire-with-derivative-itself`,
  `thm-sine-and-cosine-addition-formulas`,
  `thm-sine-and-cosine-derivatives`, `def-countable-choice`, and
  `def-axiom-of-choice`. Item and manifest lists agree at 17; the level
  remains 4.
- **Choice:** The Statement assumes AC. It supplies the normalized compact
  Haar inputs of the compact-picture and K-type results; AC implies
  AC$_\omega$ through `def-countable-choice` for the one-parameter subgroup
  and exponential results. No vector or representative is chosen in this
  proof.
- **Source evidence and convention audit:** Kerr, §2, printed pp. 8–10,
  specifies the same right-translation convention, $W,E_\pm$ matrices and
  formulas (2.5)–(2.6), but leaves their derivation to the reader. The local
  proof independently differentiates the cocycle using the bottom-row norm
  and angle. Kowalski, §7.4, Lemma 7.4.9 and proof, printed p. 297, computes
  one real derived direction and leaves the others; this proof computes
  $J,H,S$. Etingof, §9.1, formulas (4)–(5), printed pp. 48–49, uses a
  separately normalized weight basis. In the matching $h=W,e=E_+,f=E_-$
  convention, the local formulas give $fe+(h+1)^2/4=\nu^2/4$, which matches
  the source's $s^2/4$ central scalar for $s=\pm\nu$; this is only a
  central-character check, not coefficient-by-coefficient agreement.
- **Authoring and checks:** Replaced the scaffold's underspecified full
  coordinate calculation with a bottom-row calculation in smooth $ANK$
  coordinates; the computed pairs $((\log|\alpha|)',\phi')$ for $J,H,S$
  are $(0,1)$, $(\cos2\theta,\sin2\theta)$, and
  $(\sin2\theta,-\cos2\theta)$. Added the missing direct logarithm-derivative
  supplier used to differentiate the positive-base complex covariance
  factor, and removed a repeated `def-countable-choice` citation from A1.
  Direct operator products verify both brackets and the two directions of
  each zero equivalence. Explicit-path precheck: 1 checked, 0 failing;
  explicit rendercheck: 1 passed; strict contract: 1/1, 0 errors and
  0 warnings; batch-3 content policy: 20 items, 0 errors/warnings;
  batch manifest-deps: 20 items, 0 missing/error. No direct supplier is
  unfinished and no local obligation remains. Record the original scaffold
  item as `repaired`, confidence 1, after the final proof-layout pass and
  hash-current checks.
- **Run-wide gates:** The dependency-level check exits 1 on six external
  items only: `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`
  (declared 14, computed 0),
  `ex-extremal-length-of-rectangle-and-annulus` (4 vs 5),
  `ex-affine-quasiconformal-ellipse-map` (9 vs 6),
  `ex-radial-stretch-quasiconformal-map` (10 vs 6),
  `ex-quasiconformal-composition-dilatation-bound` (11 vs 10), and
  `cex-orientation-reversing-homeomorphism-is-quasiconformal` (10 vs 3).
  This item is level 4 in its item file and manifest. The refreshed plan check
  exits 1 with 148 redundant-prerequisite warnings and 56 errors: 42
  undeclared page prerequisites, 9 B-leaf edges, 2 unresolved items, 2
  intra-page order findings, and 1 page cycle. The only undeclared paths on
  this A page remain `the-gamma-function` and
  `analytic-semigroups-and-linear-evolution-equations`; keep those shared
  plan amendments for Step 4. The current scope gate lists seven other pages
  requiring review plus an owner-held proceed on
  `kazhdan-lusztig-bases-polynomials-and-cells`; this pair's scope is closed.
### Level 5 — lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner

- **Claim and conventions:** For each allowed parity $r$, the initial-half-plane
  eigenvalue has the displayed integral density and cross-multiplied recurrence,
  with division only when $r+1+\nu\ne0$. The integral-defined even and odd
  base scalars are $b_0$ and $b_1$; only $c_0=b_0$ for even parity and
  $c_1=b_1$ for odd parity are base eigenvalues. The Gamma quotient gives each
  scalar's meromorphic continuation. At $\nu=0$, the even scalars have a
  simple pole and the odd scalars have a finite nonzero value. At each positive
  parity-compatible $m$, the exact zeros are $|r|\ge m+1$ at $\nu=m$ and
  $|r|\le m-1$ at $\nu=-m$, with the stated nearest nonzero boundary values.
- **Direct dependencies examined:** All 22 are recorded in the current item
  receipt: def-standard-intertwining-operator-for-sl2-r,
  def-normalized-principal-series-i-epsilon-nu,
  thm-compact-picture-of-the-sl2-principal-series,
  lem-k-type-decomposition-of-the-sl2-principal-series,
  lem-sl2-raising-and-lowering-formulas-in-the-compact-picture,
  the Lebesgue and complex $L^1$ setup, measurable restrictions and integral
  linearity/null facts, the $C^1$ $L^1$ change-of-variables result, Beta/Gamma
  definitions and identities, Gamma continuation/no-zeros, def-countable-choice,
  and def-axiom-of-choice. Item and manifest dependencies agree at 22; its
  computed and declared dependency level is 5.
- **Choice:** The item states AC. It derives AC$_\omega$ from AC through
  def-countable-choice for the Lebesgue change-of-variables and singleton-null
  suppliers. The parity, reflection, recurrence and Gamma calculations use no
  additional choice.
- **Source evidence and repairs:** Kerr, §2 formula (2.6), printed p. 10,
  matches the ladder normalization; Exercise 2.8(i)–(iii), printed p. 12,
  asks for intertwiner properties/eigenvalues but gives no solution. Kerr's
  Weyl matrix is $-w$ relative to this Definition, producing the odd-parity
  factor $(-1)^\varepsilon$. Etingof, §9.1 formulas (4)–(5), pp. 48–49,
  and §9.2 right-$P$ model, p. 50, cross-check the abstract ladder and the
  inversion dictionary $s=-\nu$; neither source supplies the actual integral
  constants. Replaced the old negative-index symmetry argument, which divided
  by a recurrence factor that can vanish, by the direct identity
  $q_{-r}(u)=(-1)^r q_r(-u)$ and $L^1$ reflection. The exact zeros at negative
  parameters include the required one-pole/one-zero cancellation outside the
  central vanishing interval.
- **Checks and decision:** Explicit-path precheck: 1 checked, 0 failing;
  explicit-path rendercheck: 1 passed; strict item contract: 1/1, 0 errors,
  0 warnings; batch content policy: 20 items, 0 errors, 0 warnings;
  batch manifest dependencies: 20 items, 0 errors; run dependency-level check:
  382 items across 30 pages, maximum level 27, exit 0. The current Step-3a
  sufficient scope receipt was refreshed after manifest statement sync. Item
  decision: repaired, confidence 1, all 22 direct dependency IDs examined.
  The direct operator Definition remains escalated separately for its
  unconsumed full-family continuation clause; the recurrence does not assume it.
- **Run-wide plan findings / open obligations:** Current
  validate-plan research/plan-spec.json --run
  frontier-43-complex-representation-15 exits 1 with 154 warnings and 36
  errors. On this A page, the two undeclared requirement paths are
  the-gamma-function for the Beta/Gamma suppliers used here and
  analytic-semigroups-and-linear-evolution-equations for the level-6
  continuation theorem's Banach-valued Cauchy estimates. Record these shared
  plan amendments for Step 4; other run-wide errors belong to their owning
  pairs. This scope's refreshed sufficient receipt is current. Continue with
  the level-5 B-page item ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu.

### Level 5 — ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu

- **Claim and conventions:** The example tabulates all parity-allowed $K$-types
  in $-3\le n\le3$ for both $\varepsilon=0$ and $\varepsilon=1$, and evaluates
  $L_W,L_{E_+},L_{E_-}$ on each. It verifies the exceptional boundary arrows
  for every $\nu\in\mathcal W_\varepsilon$, including the $\varepsilon=1$,
  $\nu=0$ case where the positive and negative parameter checks coincide.
- **Direct dependencies examined:** All four are
  def-normalized-principal-series-i-epsilon-nu,
  lem-k-type-decomposition-of-the-sl2-principal-series,
  lem-sl2-raising-and-lowering-formulas-in-the-compact-picture, and
  def-axiom-of-choice. The Example declares level 5, matching its highest
  in-run supplier at level 4.
- **Choice:** AC is stated and declared. It is inherited from the model,
  K-type and ladder suppliers; the finite table makes no additional choices.
- **Source evidence and repair:** Kerr, §2 formula (2.6), printed p. 10,
  provides the exact local ladder coefficients. Etingof, §9.1 formulas (4)–(5),
  pp. 48–49, uses a separately normalized abstract basis; §9.2, p. 50,
  supplies the right-$P$ convention dictionary. The remarks distinguish this
  convention check from the source of the literal table coefficients. Auditing
  the boundary claim exposed that $0\in\mathcal W_1$; expanded the exceptional
  check to $m\ge0$ and verified the coincident odd-parity arrows at $\nu=0$.
  Corrected the Example headings to the SCHEMA-mandated Example/Verification
  pair and made the source locator precise.
- **Checks and decision:** Explicit-path precheck: 1 checked, 0 failing;
  explicit-path rendercheck: 1 passed; strict proof contract: 1/1, 0 errors,
  0 warnings; batch content policy: 20 items, 0 errors, 0 warnings;
  batch manifest dependencies: 20 items, 0 errors; run dependency-level check:
  382 items across 30 pages, maximum level 27, exit 0. The item and manifest
  agree at four direct dependencies and level 5. Decision: repaired,
  confidence 1, all four direct dependencies examined.
- **Run-wide plan findings / open obligations:** The current plan check still
  exits 1 with 154 warnings and 36 errors. This A/B pair has the same two
  undeclared requirement paths, the-gamma-function and
  analytic-semigroups-and-linear-evolution-equations, recorded above for
  Step 4; this example adds no page prerequisite. The A-page definition
  def-standard-intertwining-operator-for-sl2-r remains escalated for the
  unconsumed full-family continuation claim until its level-6 theorem supplier
  is reconciled by the owner. Continue with the level-6 A-page item
  thm-generic-irreducibility-and-the-exceptional-parameter-lattice.


### Level 6 — thm-generic-irreducibility-and-the-exceptional-parameter-lattice

- **Claim and conventions:** For \(\varepsilon\in\{0,1\}\), the parity-compatible lattice is \(\mathcal W_\varepsilon=\{\nu\in\mathbb Z:\nu\equiv\varepsilon+1\pmod2\}\). Off it, the K-finite module, compact-picture Hilbert representation, and smooth globalization are irreducible in their respective categories. At \(\nu=\pm n\), \(n\ge1\) in the lattice, the three factors are \(L_{n-1}\) and the positive/negative one-sided strings with first weights \(\pm(n+1)\); the finite factor is the quotient at \(+n\), the submodule at \(-n\). Odd \(\varepsilon=1,\nu=0\) splits into the two limit chains. The Killing-normalized Casimir is \((\nu^2-1)/8\), and its central character identifies precisely \(\nu\) and \(-\nu\).

- **Direct dependencies examined (34, all in the item receipt):** def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; lem-sl2-raising-and-lowering-formulas-in-the-compact-picture; lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces; def-special-linear-lie-algebra-sl-two; def-killing-form-of-a-finite-dimensional-lie-algebra; def-killing-form-of-a-semisimple-lie-algebra; def-quadratic-casimir-element; prop-the-quadratic-casimir-element-is-central; def-harish-chandra-projection; thm-harish-chandra-isomorphism-for-the-center; def-central-character-of-a-lie-algebra-module; thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights; def-iwasawa-and-minimal-parabolic-data-for-sl2-r; def-the-one-dimensional-torus-and-normalized-haar-integral; cor-normalized-haar-measure-on-a-compact-lie-group; def-period-one-fourier-coefficients-partial-sums-and-convolution; def-cesaro-and-abel-means-of-a-fourier-series; thm-fejer-uniform-convergence-for-continuous-periodic-functions; thm-integration-by-parts; thm-continuous-implies-integrable; thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral; thm-heine-borel-rn; thm-heine-cantor-metric; thm-cartans-semisimplicity-criterion; def-cartan-subalgebra-of-a-lie-algebra; def-root-and-root-space-relative-to-a-cartan-subalgebra; thm-the-root-set-is-a-reduced-crystallographic-root-system; def-killing-dual-vector-attached-to-a-root; def-root-reflections-and-the-weyl-group-action; def-fundamental-weights-for-a-chosen-simple-root-system; def-countable-choice; def-axiom-of-choice. The highest in-run supplier is the level-5 K-finite lemma, so the declared level 6 is correct.

- **Choice:** AC provides normalized Haar measure, the K-finite detection input, the root-system and Killing-dual constructions, and the Harish-Chandra isomorphism; AC implies AC\(_\omega\) for the period-one Fourier/Fejér inputs. The finite-mode interpolation and ladder arguments make no further selections.

- **Authoring and source evidence:** Replaced the scaffold’s duplicate circle-Jacobian proof of the Hilbert extension with the completed K-finite detection supplier. Proved smooth-topology irreducibility using explicit compact Fourier projections and Fejér means, and put the Killing, Cartan, rank-one root, coroot, and dominant-weight calculations before the classification steps. The operator basis and ladder convention are Kerr §2 formula (2.6), printed p. 10; Kerr Examples 2.6–2.7, printed pp. 10–11, cross-check the zero split and factor orientations. Etingof §9.1 formulas (4)–(5) and short exact sequences, printed pp. 48–49, cross-check the lattice and factors under s=-nu; §9.2, printed p. 50, supplies the inversion/model convention. Kowalski §7.4 Proposition 7.4.3(2), printed p. 297, is only a unitary-character cross-check, not the proof for complex nu.

- **Source concern, not an owned library claim:** Etingof §9.1 Exercise 9.2, printed p. 49, asks readers to compute the Jordan–Hölder series of the singular modules defined by formulas (4)–(5) and show they are uniserial. At s=1 in the even module, those formulas reduce to $e w_m=-(m/2)w_{m+2}$ and $f w_m=(m/2)w_{m-2}$. Both spans of $\{w_0,w_2,w_4,\ldots\}$ and $\{w_0,w_{-2},w_{-4},\ldots\}$ are invariant proper submodules, and neither contains the other. This contradicts the exercise's requested unique-filtration conclusion; confidence high. No owned item claims or uses uniseriality. The Etingof four-family classification row and Exercise 9.2 row are marked out-of-scope in batch-3 coverage with this reason; no library repair or new supplier is implied.

- **Registration and pages:** Synced the current 34-dependency list, statement, source locators, provenance and level 6 into the batch-3 manifest; regenerated the theorem’s citation/derivation contract and checked all standard boundaries. Created the assigned A and B page files with the manifest item inventories and the RG-28 design summary. The batch-3 cross-batch consumer input remains empty: no other batch supplies this pair, and no new cross-batch edge was added.

- **Checks and decision:** Explicit-path precheck passed (1/1); rendercheck passed on this item and both new pages (3 files); strict item contract passed (1/1, 0 errors/warnings); batch content-policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 errors); coverage passed (2 pages, 41 harvested results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30, no scope drift). The item-level dependency computation is 6. Item decision: repaired, confidence 1, all 34 direct dependencies examined. The pair’s sufficient scope receipt was refreshed against the current claim inventory.

- **Open plan/workflow obligations:** Current validate-plan exits 1 with 154 warnings and 40 errors. Four undeclared page prerequisites on this A page are dirichlet-kernel-localisation-and-pointwise-fourier-convergence and fejer-and-poisson-summability-of-fourier-series (the Fourier/Fejér inputs used in steps 1.3 and 3.2), the-gamma-function (the level-5 recurrence’s Beta/Gamma dependencies), and analytic-semigroups-and-linear-evolution-equations (the level-6 continuation theorem’s Banach-valued Cauchy estimates). Record these shared requires amendments for Step 4; the remaining errors belong to other pairs. The run dependency-level gate still reports seven mismatches on other Beltrami-pair items: thm-measurable-riemann-mapping-sphere, cor-local-integrability-beltrami-structures, thm-holder-regularity-beltrami-solutions, ex-constant-coefficients-and-affine-solutions, ex-normalization-by-mobius-maps, ex-pullback-of-a-measurable-ellipse-field, and cex-uniqueness-of-beltrami-solutions-without-normalization. This theorem itself computes at level 6. The run-wide scope check remains open on five other pairs and two owner-held proceeds; this pair is current and sufficient. The earlier def-standard-intertwining-operator-for-sl2-r item decision remains owner-escalated on full operator-family continuation; reconcile its actual use after the next theorem, thm-meromorphic-continuation-and-intertwining-identity-for-a-nu, is authored. Continue in order with that level-6 A item.

### Level 6 — thm-meromorphic-continuation-and-intertwining-identity-for-a-nu

- **Claim and conventions:** For the same $\varepsilon$-parity K-types and $\nu\in\mathbb C$, every Gamma multiplier $c_r(\nu)$ is meromorphic, has no zero outside $\mathcal W_\varepsilon$, and has at most a simple pole on $P_\varepsilon=\{-m:m\in\mathbb N_0,\ m\equiv\varepsilon\pmod2\}$. The operator family has a unique local smooth-topology meromorphic continuation. At every regular parameter it intertwines the smooth compact-picture $G$-actions. Off $\mathcal W_\varepsilon$, when both $A(\nu)$ and $A(-\nu)$ are regular, their composite is $c_{n_0}(\nu)c_{n_0}(-\nu)$ times the identity, where $n_0=0$ for $\varepsilon=0$ and $n_0=1$ for $\varepsilon=1$; the base-normalized operators are inverse there. Regularity is required because the common scalar poles at $P_\varepsilon$ lie outside $\mathcal W_\varepsilon$.

- **Direct dependencies examined (27):** def-standard-intertwining-operator-for-sl2-r; def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; lem-sl2-raising-and-lowering-formulas-in-the-compact-picture; lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner; def-axiom-of-choice; lem-ac-supplies-countable-and-dependent-choice-for-banach-integration; thm-iwasawa-decomposition-for-sl2-r; def-iwasawa-and-minimal-parabolic-data-for-sl2-r; thm-algebra-of-derivatives; thm-chain-rule; lem-complex-integration-by-parts-on-intervals-and-decaying-lines; thm-weierstrass-m-test-for-complex-function-series; thm-uniform-derivative-limit-on-a-closed-interval; thm-p-series-rational; thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions; rem-real-and-complex-normed-space-convention; lem-complex-conjugation-and-modulus-laws; def-complex-metric-convergence-and-continuity; def-the-one-dimensional-torus-and-normalized-haar-integral; thm-extreme-value-metric; cor-complex-differentiability-implies-continuity; thm-complex-plane-is-complete; def-banach-space; thm-identity-theorem-holomorphic-functions; cor-zero-derivative-implies-constant. Highest in-run supplier is the level-5 recurrence lemma; dependency level 6 is correct.

- **Choice:** AC is stated and declared. It supplies normalized Haar measure on $K$ through the Iwasawa data and implies the Countable Choice premises of complex integration by parts and Cauchy estimates. No further selection is made.

- **Authoring and source evidence:** The scaffold divided by $c_r$ in its recurrence bound, although a coefficient can vanish; replaced that with the cross-multiplied recurrence and a uniform estimate that divides only by the scalar $r+1+\nu$, bounded away from zero for sufficiently large positive $r$. Used rapid Fourier decay to construct the multiplier family in every $C^q$ seminorm, uniformly on bounded input sets, and showed it agrees with the original integral by the uniform compact-kernel majorant on $\operatorname{Re}\nu>0$. Derived the $E_\pm,W$ identities from the recurrence on each K-type, extended by $C^\infty$ density, then integrated only along the real one-parameter subgroups generated by $J$, $H/2$, and $(S+J)/2$; Iwasawa gives the full $KAN$ group identity. Tightened the composition statement to regular pairs of parameters, since scalar poles at $P_\varepsilon$ can occur outside $\mathcal W_\varepsilon$. The complex Cauchy estimate input is instantiated with $\mathbb C$ as a complex Banach space; the Fourier angle integral uses $dk=d\theta/(2\pi)$.

  Etingof, §9.1 formulas (4)–(5), short exact sequences and Proposition 9.1, printed pp. 48–49, gives the algebraic principal-series conventions, reducibility lattice and $s\leftrightarrow-s$ equivalence; §9.2, printed p. 50, gives the smooth circle realization with $s=-\nu$. It does not establish the integral-family continuation proved here. Kerr, §2 formulas (2.5)–(2.6), printed p. 10, supplies the ladder normalization; Exercise 2.8(i)–(iii), printed p. 12, asks for intertwining and nonvanishing but provides no proof. Kowalski, §7.4 Proposition 7.4.3(3) proof and Exercise 7.4.12, printed pp. 300–301, identifies inverse-character equivalence and leaves construction of its intertwiner as an exercise. These passages check conventions and scope; the continuation, smooth-topology estimates, and group integration argument are local.

- **Flagged supplier reconciliation:** The exact supplier was def-standard-intertwining-operator-for-sl2-r, the consumer is this theorem, and the consuming proof step is 4.2 (with initial-half-plane hypotheses in F1). Step 4.2 uses only the Definition's proved integral for $\operatorname{Re}\nu>0$; this theorem proves the full-family continuation locally and does not assume it from the Definition. The actual supplier claim and use are now mathematically reconciled. Its earlier item decision receipt remains owner-escalated; only the owner can resolve that receipt.

- **Registration and scope:** Synced the theorem's statement, all 27 dependencies, sources and level 6 to the batch-3 manifest; regenerated exact citation/derivation contracts and checked the empty, zero, one, degenerate, endpoint, Choice and iff boundaries. The eight additional dependencies are already published items (complex norm convention/modulus, complex metric/completeness/Banach data, torus Haar normalization, extreme value and continuity); no item ID, page, or cross-batch edge was added. The pair's current sufficient Step-3a scope receipt was refreshed after the statement and dependency updates.

- **Checks and decision:** Explicit-path precheck passed (1/1); explicit-path rendercheck passed (1/1); strict proof contract passed (1/1, 0 errors, 0 warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 errors); coverage checklist passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); current run dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all 27 dependencies examined. The single required proof-layout run for all changed items remains for final handoff.

- **Open plan/workflow obligations:** Current validate-plan exits 1 with 154 warnings and 41 errors. Four errors are on this A page: undeclared page prerequisites dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations. Record these shared requires amendments for Step 4. The other 37 errors are on other pairs: B-leaf dependencies, a page cycle, and undeclared prerequisites on direct-integral decomposition, periods/Jacobians, extremal length, Beltrami, quasisymmetry and Bergman/Szegő pages. The previously reported seven Beltrami dependency-level mismatches no longer reproduce; the current run-wide dependency-level gate passes.
  
Continue in order with the level-7 A-page item thm-unitarity-of-the-sl2-unitary-principal-series.

### Level 7 — thm-unitarity-of-the-sl2-unitary-principal-series

- **Claim and conventions:** For both parity values and every imaginary $\nu$, the compact-picture action on $L^2_\varepsilon(K)$ is a strongly continuous unitary representation with the one-dimensional K-types $f_n$ of parity $\varepsilon$. At $\nu=0$, the spherical case is irreducible. In odd parity the algebraic K-finite core is $M^-_1\oplus M^+_{-1}$; its Hilbert realization is the orthogonal sum of the two irreducible unitary completions. This separates the Harish-Chandra module statement from its Hilbert completion.

- **Direct dependencies examined (10):** def-iwasawa-and-minimal-parabolic-data-for-sl2-r; def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces; thm-generic-irreducibility-and-the-exceptional-parameter-lattice; thm-geometric-series; lem-complex-conjugation-and-modulus-laws; def-strongly-continuous-unitary-representation; def-axiom-of-choice. The highest in-run supplier is the level-6 generic irreducibility theorem, so level 7 is correct.

- **Choice:** AC is stated and declared. It supplies normalized Haar on $K$ through the Iwasawa data and the K-finite detection supplier. The local disk-coordinate and Fourier arguments make no other selections.

- **Authoring and source evidence:** Transferred the imaginary-axis unitarity and strong continuity from the exact compact-picture theorem. At $\nu=0$, used the generic irreducibility theorem for the even case. For odd parity, identified the positive and negative odd K-type closures as $e^{i\theta}F(-e^{2i\theta})$ and its conjugate. Conjugating $g^T$ into $SU(1,1)$ gives the disk Möbius map; the bottom-row determinant proves its boundary angle map is orientation preserving with Jacobian $|\alpha|^2$. The multiplier is a constant-sign multiple of $e^{i\theta}(\bar b z+\bar a)^{-1}F(\Phi_g(z))$. The complex geometric-series estimate, with the published complex modulus laws, approximates each reciprocal denominator power uniformly by polynomials with nonnegative powers. Thus both closures are invariant; K-finite detection and the algebraic chain irreducibility prove each closure irreducible.

  Kerr, §2 Exercise 2.3(ii), printed p. 9, asks for invariance of the circle pairing at imaginary parameter but leaves the proof as an exercise. Etingof, §§9.2–9.3, printed pp. 50–52, gives the circle realization, the odd $P_-(0)$ splitting and the unitary completion range; this checks the parameter convention, not the local disk-invariance calculation. Kowalski, §7.4 Proposition 7.4.3(1) and Lemma 7.4.7, printed pp. 293–296, gives the right-covariant Hilbert model and Jacobian unitarity argument, while explicitly leaving strong continuity as an exercise. The compact-picture theorem supplies strong continuity here.

- **Registration and scope:** Synced the clarified category statement, ten direct dependencies, source locators and level 7 into batch 3; regenerated exact proof contracts and boundary dispositions. Added only the published complex modulus-law supplier for the uniform disk bound. No item ID, page, or cross-batch edge was added. The sufficient scope receipt was refreshed against the updated statement; all other owned claims remain unchanged.

- **Checks and decision:** Explicit-path precheck passed (1/1); rendercheck passed (1/1); strict proof contract passed (1/1, 0 errors/warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 errors); coverage passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); current dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all ten direct dependencies examined. The single required proof-layout run for all changed items remains for final handoff.

- **Open plan/workflow obligations:** Current validate-plan remains at 154 warnings and 41 errors. The same four undeclared requirements are on this A page: dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations; record them for Step 4. The other 37 errors belong to other pairs. The upstream def-standard-intertwining-operator-for-sl2-r receipt remains owner-escalated even though this batch's continuation theorem proves its deferred claim and its actual initial-integral use is reconciled. Continue in order with the level-8 A-page item thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu.

### Level 8 — thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu

- **Claim and conventions:** For every nonexceptional parameter, the base-normalized meromorphic intertwiner extends through the common scalar poles and gives a continuous inverse pair between the smooth compact pictures. On the imaginary axis away from the exceptional lattice, all normalized K-type multipliers have modulus one, giving unitary equivalence; conjugation supplies an anti-unitary intertwiner. At every nonzero exceptional $\nu=\pm n$, the unnormalized operator is regular but has the exact recurrence kernel. The positive module has a simple positive-tail submodule, proved locally from the ladder coefficients, while the opposite negative module has the finite-dimensional $L_{n-1}$ as its unique irreducible submodule; disjoint K-type supports rule out isomorphism. At odd $\nu=0$ the two parameters coincide and the K-finite module splits into the two limit chains. Thus the smooth representations at $\nu$ and $-\nu$ are equivalent exactly when $\nu\notin\mathcal W_\varepsilon\setminus\{0\}$.

- **Direct dependencies examined (11):** def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; thm-generic-irreducibility-and-the-exceptional-parameter-lattice; def-standard-intertwining-operator-for-sl2-r; thm-meromorphic-continuation-and-intertwining-identity-for-a-nu; lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner; thm-unitarity-of-the-sl2-unitary-principal-series; lem-sl2-raising-and-lowering-formulas-in-the-compact-picture; def-strongly-continuous-unitary-representation; def-axiom-of-choice. Highest in-run supplier is the level-7 unitary-principal-series theorem, so level 8 is correct.

- **Choice:** AC is stated and declared. A1 records its use for normalized Haar probability on $K$ and the Hilbert compact-picture realization. The local proof makes no additional choices.

- **Authoring and source evidence:** Repaired the scaffold’s false assertion that every regular unnormalized $A(\nu)$ is an isomorphism: at nonzero exceptional parameters it can be regular and noninjective, and at negative exceptions the base scalar can vanish. Restricted that assertion to nonexceptional parameters and explicitly handled odd $\nu=0$. At a common scalar pole, the Gamma formula shows that all allowed multipliers, including the parity base multiplier, have the same simple pole with nonzero residue; the meromorphic smooth-operator family therefore gives a removable quotient. The recurrence proves the normalized inverse identity including those poles. The positive exceptional tail is shown simple by isolating a K-type in any nonzero submodule and using the nonzero ladder arrows; this avoids assuming more from the classification statement than it states. The K-finite module obstruction then also rules out a continuous smooth G-equivalence by differentiating it.

  Etingof, §9.1 formulas (4)–(5), short exact sequences and Proposition 9.1, printed pp. 48–49, cross-check the generic $P^\pm(s)\cong P^\pm(-s)$ relation and the opposite finite-dimensional submodule/quotient positions; §9.2, printed p. 50, fixes the circle-model convention $s=-\nu$. The source’s algebraic classification is a convention and factor-orientation check; the operator-family pole normalization and smooth-topology inverse are proved locally. Kowalski, §7.4 Proposition 7.4.3(3) proof, printed pp. 300–301, derives the necessary inverse-character condition for its unitary-character model and explicitly leaves existence to Exercise 7.4.12. Kerr, §2 Exercise 2.8(iii), printed p. 12, asks for the nonzero-isomorphism conclusion away from the lattice but supplies no proof. Neither exercise is treated as proof evidence.

- **Registration and scope:** Synced the corrected full statement, unchanged 11 direct dependencies, provenance and dependency level 8 into the batch-3 manifest; regenerated exact statement excerpts and derivation contracts and recorded all eight boundary dispositions, including both directions of the equivalence iff. No item, page, or cross-batch supplier was added. Refreshed the pair’s sufficient scope receipt; no scope expansion occurred.

- **Checks and decision:** Explicit-path precheck passed (1/1); explicit-path rendercheck passed (1/1); strict proof contract passed (1/1, 0 errors/warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 normalized/errors); coverage checklist passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); run dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all 11 direct dependencies examined. The single proof-layout command over all 20 changed items remains for final handoff.

- **Open plan/workflow obligations:** The latest validate-plan check exits 1 with 154 warnings and 43 errors. Four errors are on this A page: undeclared requirements dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations; retain these as shared `requires` amendments for Step 4. The other 39 errors belong to other pairs (B-leaf edges, the Beltrami/quasisymmetry page cycle, and undeclared requirements on direct-integral, periods/Jacobians, extremal length, Beltrami, quasisymmetry and Bergman/Szegő pages). The owner-held escalation for def-standard-intertwining-operator-for-sl2-r remains unresolved; its initial-integral use here is proved, and the separate continuation supplier now proves the deferred family claim, but only the owner can clear that receipt. Continue with the next level-8 A-page item thm-unitarity-of-the-sl2-complementary-series.

### Level 8 — thm-unitarity-of-the-sl2-complementary-series

- **Claim and conventions:** In spherical parity, $a_0=1$ and $a_{\pm2j}=\prod_{l=1}^j(2l-1-\nu)/(2l-1+\nu)$. Except at negative odd scalar poles, these define a finite continuous G-invariant Hermitian form by normalizing the standard intertwiner and pairing opposite parameters. The full spherical K-finite module has a positive-definite invariant Hermitian form exactly for $|\nu|<1$; the corresponding smooth Fourier form completes to the irreducible strongly continuous complementary series when $0<|\nu|<1$, and at $\nu=0$ is the usual L2 spherical principal series. The regular $\nu=1$ form has radical all zero-average functions and detects the trivial quotient; the rescaled limit at $\nu=-1$ has coefficients $q_0=0$, $q_{\pm2j}=2j$ and radical $\mathbb C f_0$, the trivial submodule. In odd parity the adjacent-weight adjoint recurrence rules out positive definiteness for every real nonzero parameter; at zero the two limit chains are unitary, and at nonzero even parameters every invariant form is degenerate.

- **Direct dependencies examined (19):** def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; def-fourier-coefficients-and-trigonometric-polynomials; lem-dual-pairing-between-opposite-principal-series-parameters; def-standard-intertwining-operator-for-sl2-r; thm-meromorphic-continuation-and-intertwining-identity-for-a-nu; lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner; thm-generic-irreducibility-and-the-exceptional-parameter-lattice; thm-unitarity-of-the-sl2-unitary-principal-series; def-strongly-continuous-unitary-representation; def-axiom-of-choice; lem-ac-supplies-countable-and-dependent-choice-for-banach-integration; lem-sl2-raising-and-lowering-formulas-in-the-compact-picture; thm-algebra-of-derivatives; thm-chain-rule; lem-complex-integration-by-parts-on-intervals-and-decaying-lines; thm-p-series-rational; thm-extreme-value-metric. Highest in-run supplier is the level-7 unitary-principal-series theorem; the additional extreme-value input is already published, so the computed level remains 8.

- **Choice:** AC is stated and declared. A1 records normalized Haar probability on $K$ and the implication AC$\Rightarrow$AC$_\omega$ used for Fourier integration by parts. No other selections occur.

- **Authoring and source evidence:** Repaired the statement to distinguish the K-finite invariant-form criterion from the continuous smooth Fourier form. The Gamma formula and recurrence produce the full normalized weight sequence at all real parameters, including positive reducibility points; the only bare normalized-weight poles are at negative odd integers. At each nonpositive even common scalar pole, the Gamma formula gives the same simple pole for all even K-types and the base scalar; the continuous K-diagonal Laurent family then has no higher operator pole, so the quotient extends smoothly. The opposite-parameter pairing proves G-invariance. The $f_0,f_2$ adjoint identity rules out $|\nu|\ge1$, while positivity of all weights and the explicit weighted-Hilbert completion prove the complementary range. Finite averages of K rotations isolate a K-type in any nonzero closed invariant subspace; nonzero ladder arrows then prove irreducibility. At $\nu=-1$, the rescaled limit is justified by a uniform-in-parameter Fourier-decay bound from compactness and the extreme-value supplier.

  Etingof, §9.3, printed pp. 51–52, derives the invariant-Hermitian-form positivity criterion and lists the complementary modules in Theorem 9.3; this is a range and convention cross-check, not a construction of the present smooth weighted form. Kowalski, §7.4 Lemma 7.4.20 and Proposition 7.4.21, printed pp. 310–312, gives the necessary range and the positive-parameter construction sketch. Its check of infinitesimal skew-adjointness is left as an exercise, the irreducibility argument is only sketched, and for negative parameter the form is initially defined only on a dense subspace; Exercise 7.4.22, printed p. 312, asks for the no-odd-series proof. These gaps are supplied locally here. Kerr, §2 printed p. 12, lists the spherical complementary series but explicitly says its construction is not treated.

- **Registration and scope:** Added the existing published thm-extreme-value-metric supplier to the item’s 19-dependency list, refreshed the statement, source qualification, strategy and level 8 in the batch-3 manifest, regenerated citation/derivation contracts, and checked all eight boundary cases, including both positivity iff directions. No item or page was added. The current sufficient scope receipt was refreshed; the added input does not expand the claim inventory.

- **Checks and decision:** Explicit-path precheck passed (1/1); rendercheck passed (1/1); strict item contract passed (1/1, 0 errors/warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 normalized/errors); coverage checklist passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); run dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all 19 direct dependencies examined. The single proof-layout command for all 20 changed items remains for final handoff.

- **Open plan/workflow obligations:** The latest validate-plan check exits 1 with 154 warnings and 45 errors. Four errors are on this A page: undeclared requirements dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations; keep them as shared `requires` amendments for Step 4. The other 41 errors belong to other pairs, including B-leaf dependencies, the Beltrami/quasisymmetry page cycle, and undeclared requirements on direct-integral, periods/Jacobians, extremal length, Beltrami, quasisymmetry and Bergman/Szegő pages. The owner-held def-standard-intertwining-operator-for-sl2-r item receipt remains unresolved; the continuation theorem proves the deferred family claim and the current uses are reconciled, but only the owner can clear that receipt. Continue with the level-9 A-page item cor-complementary-series-converge-to-the-trivial-representation.

### Level 9 — cor-complementary-series-converge-to-the-trivial-representation

- **Claim and conventions:** For $0<\nu<1$, the normalized spherical matrix coefficient is
  $\varphi_\nu(g)=\int_K|\alpha(p(k,g))|^{1-\nu}\,dk$; it converges to $1$ uniformly on each compact $Q\subseteq G$. Thus $[I_{0,\nu}]\to[1_G]$ in the Fell topology as $\nu\uparrow1$, and the same limit holds for $|\nu|\uparrow1$ by a unitary equivalence between opposite real parameters. For every prescribed sequence $0<\nu_j\uparrow1$, $1_G$ is weakly contained in $\widehat\bigoplus_j I_{0,\nu_j}$ via the K-fixed unit vectors. No weak-containment claim is made for an individual summand.

- **Direct dependencies examined (17):** def-iwasawa-and-minimal-parabolic-data-for-sl2-r; thm-finite-products-of-compact-spaces; def-normalized-principal-series-i-epsilon-nu; thm-compact-picture-of-the-sl2-principal-series; lem-k-type-decomposition-of-the-sl2-principal-series; lem-dual-pairing-between-opposite-principal-series-parameters; def-standard-intertwining-operator-for-sl2-r; thm-meromorphic-continuation-and-intertwining-identity-for-a-nu; thm-unitarity-of-the-sl2-complementary-series; thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu; def-matrix-coefficient-of-a-unitary-representation; def-weak-containment-of-unitary-representations; def-fell-topology-on-the-unitary-dual; def-unitary-dual-of-a-locally-compact-group; def-hilbert-direct-sum-of-unitary-representations; lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors; def-axiom-of-choice. Highest in-run supplier is the level-8 complementary-series theorem; computed level 9 is correct.

- **Choice:** AC is stated and propagated. It supplies normalized Haar probability through the compact-picture model and is the declared assumption of the unitary completion, Fell and weak-containment interfaces. The sequence is prescribed and its K-fixed vectors are explicit; no further choice is made.

- **Authoring and source evidence:** The coefficient formula uses the opposite-parameter invariant pairing and the normalized intertwiner's fixed $f_0$ eigenvalue $1$, which changes the compact-picture exponent from $1+\nu$ to $1-\nu$. For compact $Q$, Iwasawa data make $d(k,g)=|\alpha(p(k,g))|$ positive and continuous on $K\times Q$. The finite-product compactness supplier makes this product compact; finite subcovers bound $d$ above and away from zero. A uniform mean-value estimate for $d^{1-\nu}$ proves the compact-uniform limit. Basic Fell neighborhoods test finitely many nonnegative constant coefficients of $1_G$; scaling $f_0$ gives matching coefficients $c_i\varphi_\nu$, proving class convergence. For any fixed sequence approaching $1$, the unit vector $f_0$ in the $j$th direct-sum summand is compact-uniform almost invariant, so the stated weak containment follows. Each summand remains nontrivial and irreducible, so the direct sum has no invariant vector; no single-summand conclusion is inferred.

  Etingof, §9.3 printed pp. 51–52, derives the positivity criterion and lists the complementary range and trivial representation in Theorem 9.3; it gives no coefficient-limit or Fell-convergence proof. Kowalski, §7.4 Lemma 7.4.20 and Proposition 7.4.21, printed pp. 310–312, gives a necessity argument and a construction sketch, with the opposite-parameter equivalence discussed after the positive and negative forms; it likewise gives no boundary coefficient limit or weak-containment argument. The no-odd-series point is posed as Exercise 7.4.22, not supplied as proof. The limit and topology steps here are local.

- **Registration and scope:** Added the published finite-product compactness supplier, synced the 17 dependencies, statement, strategy, source qualification and level 9 into the batch-3 manifest, and regenerated the contract with exact supplier excerpts and all eight boundary dispositions. No item or page was added. Refreshed the sufficient scope receipt; the claim inventory is unchanged.

- **Checks and decision:** Explicit-path precheck passed (1/1); rendercheck passed (1/1); strict item contract passed (1/1, 0 errors/warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 normalized/errors); coverage checklist passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); run dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all 17 direct dependencies examined. The single proof-layout command for all 20 changed items remains for final handoff.

- **Open plan/workflow obligations:** Latest validate-plan exits 1 with 154 warnings and 43 errors. Four errors are on this A page: dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations; retain them as shared `requires` amendments for Step 4. The other 39 errors belong to other pairs; the newly added finite-product dependency causes no additional page prerequisite. The owner-held def-standard-intertwining-operator-for-sl2-r receipt remains unresolved; its actual initial-integral and continuation uses are reconciled in this pair, but only the owner can clear it. Continue with the level-9 B-page item cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval.

### Level 9 — cex-the-complementary-form-loses-positivity-beyond-the-unitary-interval

- **Claim and witnesses:** Refutes the assertion that the normalized spherical invariant form $B_\nu$ is positive definite for every real $\nu\ge1$. At the regular reducibility parameter $\nu=3$, the K-type recurrence gives $a_0=1$ and $4a_2=-2a_0$, hence $B_3(f_0,f_0)=1$ and $B_3(f_2,f_2)=-1/2$. At the boundary $\nu=1$, $a_0=1$ and every nonzero even weight vanishes, so the normalized form is nonzero and degenerate.

- **Direct dependencies examined (4):** lem-k-type-decomposition-of-the-sl2-principal-series; lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner; thm-unitarity-of-the-sl2-complementary-series; def-axiom-of-choice. All are already authored and accepted in this pair or published; there are no unfinished suppliers. Dependency level 9 is correct.

- **Choice:** AC is stated and declared, as inherited by the K-type recurrence and invariant-form construction. A1 makes explicit that the two finite evaluations use no further selections.

- **Source evidence and repairs:** Etingof, §9.3, printed pp. 51–52, derives the invariant-form positivity criterion and lists the spherical complementary range; it is a range cross-check, not the explicit reducible-parameter witness at $\nu=3$. Kerr, §2 unitarity list, printed p. 12, lists $I_{+,\lambda}$ for $0<|\lambda|<1$ and says its construction is not treated; it supplies no outside-range coefficient witness. The direct recurrence and Fourier weights prove the counterexample locally. Repaired the scaffold to use schema-required `Statement refuted` and `Counterexample` headings, YAML-safe source locators, and checker-canonical phase numbering; the proof contract records the actual supplier excerpts, each step's cited inputs, and empty/zero/one/degenerate/endpoint/Choice/iff dispositions.

- **Checks and decision:** Explicit-path precheck passed (1/1); rendercheck passed (1/1); strict item contract passed (1/1, 0 errors/warnings); batch content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 normalized/errors); coverage checklist passed (2 pages, 41 results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30 pages, no scope drift); run dependency-level check passed (382 items across 30 pages, maximum level 27). Item decision: repaired, confidence 1, all four direct dependencies examined. The final proof-layout command over all 20 changed items remains for handoff.

- **Open plan/workflow obligations:** Latest validate-plan exits 1 with 154 warnings and 43 errors. Four errors remain on this A page: undeclared requirement paths for dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fejer-and-poisson-summability-of-fourier-series, the-gamma-function, and analytic-semigroups-and-linear-evolution-equations; report these shared plan amendments for Step 4. The other 39 errors are outside this pair. No supplier is unfinished for this counterexample. The separate owner-held def-standard-intertwining-operator-for-sl2-r item receipt remains open; only the owner may clear it. Continue with the level-9 B-page item ex-intertwiner-eigenvalues-in-the-spherical-complementary-range.

### Level 9 — ex-intertwiner-eigenvalues-in-the-spherical-complementary-range

- **Claim and conventions:** In spherical parity, the normalized multipliers are $\widehat c_0=1$, $\widehat c_{\pm2}=(1-\nu)/(1+\nu)$ and $\widehat c_{\pm4}=(1-\nu)(3-\nu)/((1+\nu)(3+\nu))$, with the regular normalized continuation used at $\nu=0$. These displayed weights are positive for $|\nu|<1$, and every fixed even K-type weight is positive there. Also $\widehat c_2(2)=-1/3\ne0$, while $\widehat c_2$ is positive on $(-1,1)$, zero at $1$, and negative throughout $(1,3)$.

- **Direct dependencies examined (4):** def-standard-intertwining-operator-for-sl2-r; lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner; thm-unitarity-of-the-sl2-complementary-series; def-axiom-of-choice. Dependency level 9 is correct. No item, page, or cross-batch dependency was added.

- **Choice:** AC supplies normalized Haar on $K$ and, via AC$\Rightarrow$AC$_\omega$, the countable-choice hypotheses used in the recurrence and Fourier-form suppliers. The finite sign calculation makes no additional selections; this is declared in A1 and its step-2.1 proof-contract use.

- **Source evidence and repairs:** Etingof, §9.3, printed pp. 51–52, derives the invariant-Hermitian-form positivity criterion and Theorem 9.3 lists the spherical complementary range; it supplies no first normalized intertwiner multipliers. Kerr, §2 Exercise 2.8(iii) and the unitarity list, printed p. 12, poses a generic intertwiner computation without its solution, lists the complementary range, and explicitly defers its construction. These sources check range and context only; the finite products and signs are proved directly from the assigned recurrence and complementary-form theorem. Replaced the scaffold's `Statement`/`Proof` headings with schema-required `Example`/`Verification`, clarified the meromorphic normalization at $\nu=0$, and synced the exact Example statement, source locators, and proof contract.

- **Supplier reconciliation:** The earlier owner-held supplier is def-standard-intertwining-operator-for-sl2-r; this Example is a direct consumer at step 1.1, where it identifies the base-normalized scalar for the standard operator. The step uses the Definition on its initial positive-real domain and uses the recurrence lemma for the scalar meromorphic continuation; at $\nu\le0$ it relies on the separately proved normalized weights in the complementary-form theorem. It does not assume the Definition's deferred full smooth-operator continuation outside its initial domain. The actual use is reconciled, but the supplier's decision receipt remains owner-held and only the owner may clear it.

- **Checks and decision:** The single explicit proof-layout invocation passed on all 20 owned items (110 steps, 0 defects). Batch explicit-path precheck passed (18 applicable items, 0 failures); explicit rendercheck passed (20 files); strict proof contracts passed (20/20, 0 errors/warnings); content policy passed (20 items, 0 errors/warnings); manifest-deps passed (20 items, 0 normalized/errors); coverage passed (2 pages, 41 harvested results, 0 errors/warnings); source-fetch passed (7/7); manifest-integrity passed (30/30, no scope drift); dependency-level check passed (382 items across 30 pages, max level 27). Item decision: repaired, confidence 1, all four direct dependency IDs examined. The pair's sufficient scope receipt was refreshed.

- **Open plan/workflow obligations:** Final validate-plan exits 1 with 154 warnings and 43 errors. Four A-page errors remain for Step 4: page `sl2-r-principal-and-complementary-series` uses suppliers on `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` and `fejer-and-poisson-summability-of-fourier-series` through `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` (its Fourier/Fejér inputs); the level-5 `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` uses Beta/Gamma items on `the-gamma-function`; and the level-6 `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` uses Banach-valued Cauchy estimates on `analytic-semigroups-and-linear-evolution-equations`. Step 4 should add these four pages to the A-page `requires` closure or provide an already-declared path to each exact supplier. The other 39 plan errors are outside this pair. The owner-held intertwiner receipt remains open as described above. All 20 owned IDs are now complete in dispatch order; proceed to handoff.

## Batch handoff checkpoint

- **Owned work:** All 20 dispatched IDs were audited and authored in the prescribed order. Both assigned draft pages remain scoped to the same 16 A items and 4 B examples; page inventories, manifests, contracts and coverage agree. No new item ID, page ID or cross-batch dependency was added.
- **Supplier delta from immutable Step-1 records:** The final direct-dependency lists add 143 edges to 95 distinct suppliers and remove 33 obsolete scaffold edges. Of the added suppliers, 7 are earlier completed items within this assigned pair and 88 are already-published library items; no unfinished sibling supplier is present. The exact per-item dependency lists are in the item frontmatter and batch-3 manifest. Newly needed analytic/compactness inputs include thm-extreme-value-metric and thm-finite-products-of-compact-spaces.
- **Decisions and scope:** The pair has a refreshed sufficient scope receipt. Nineteen authored item receipts are `repaired` at confidence 1; def-standard-intertwining-operator-for-sl2-r remains `escalate` under its owner-held full-operator-family clause. Its actual initial-integral and continuation uses are reconciled above; only the owner can clear the receipt.
- **Final checks:** Proof-layout passed once on 20 item paths (110 numbered steps, 0 defects). Explicit-path precheck passed on all 18 proof-bearing items; rendercheck passed on all 20 items and both assigned pages; strict contracts passed 20/20; content policy passed 20/20; manifest-deps passed 20/20; coverage passed 2 pages / 41 results; source fetch passed 7/7; manifest integrity passed 30/30 with no scope drift; dependency levels passed 382 items / 30 pages (maximum 27). No tests were added or run.
- **Plan amendment for Step 4:** `validate-plan research/plan-spec.json --run frontier-43-complex-representation-15` exits 1 with 154 warnings and 43 errors. Four errors belong to this pair's A page: `thm-generic-irreducibility-and-the-exceptional-parameter-lattice` uses Fourier/Fejér suppliers on pages `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` and `fejer-and-poisson-summability-of-fourier-series`; `lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner` uses Beta/Gamma suppliers on `the-gamma-function`; `thm-meromorphic-continuation-and-intertwining-identity-for-a-nu` uses Banach-valued Cauchy estimates on `analytic-semigroups-and-linear-evolution-equations`. Add these four page paths to the A page's `requires` closure or declare existing paths that reach each exact supplier. The remaining 39 errors concern other pairs.
- **Published/source concern:** No owned published library item is identified as defective. Etingof §9.1 Exercise 9.2, printed p. 49, asks readers to prove its singular even module at $s=1$ uniserial; formulas (4)–(5) instead give two incomparable proper invariant spans generated by $w_0,w_2,w_4,\ldots$ and $w_0,w_{-2},w_{-4},\ldots$. Confidence is high. The exercise's requested claim is not imported into or used by the assigned library items, so no new supplier is required; any source correction or later claim import belongs to the owner.
