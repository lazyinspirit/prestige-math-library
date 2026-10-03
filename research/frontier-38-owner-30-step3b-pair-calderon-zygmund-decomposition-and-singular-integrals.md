# Step 3b authoring record — calderon-zygmund-decomposition-and-singular-integrals

- Run: `frontier-38-owner-30` (batch 5), role `alpha-high`, label
  `step3b-pair-calderon-zygmund-decomposition-and-singular-integrals-7487c28d404f830d`.
- A page: `calderon-zygmund-decomposition-and-singular-integrals`
  (order 458.02605, `fourier-analysis`, 25 items).
- B page: `calderon-zygmund-decomposition-and-singular-integrals-examples`
  (order 458.02606, 6 items). Ownership is limited to this pair.
- Scaffold of record: `research/frontier-38-owner-30-batch-5.pages.json`
  (31 items, sha256 `fab4db3c…` as recorded by the Step 3a review; rechecked at
  entry). Step 3a decision `sufficient` (review receipt
  `research/frontier-38-owner-30-step3a-review-calderon-zygmund-decomposition-and-singular-integrals.json`).
- Read at entry: `CLAUDE.md`, `SCHEMA.md`, `AGENTS.md`,
  `research/frontier-38-owner-30-owner-authoring-direction.md`, the batch-5
  Step-1 notes and coverage, the Step 3a report, the dispatch prompt, the
  chapter FR-8 design of `research/plan-fourier-analysis-track.md`, and the
  published suppliers of the first dependency-level item.

## Owned IDs and entry obligations

All 31 IDs below are present in the immutable pre-author scaffold inventory
(`research/frontier-38-owner-30-step3-auditor-baseline.json`), so every one
needs an ordinary current Step-3 item decision after authoring; none is an
auditor-authored addition. Entry status of each: **open** (no item file yet).

A page (dependency order as dispatched):
`def-calderon-zygmund-kernel-and-principal-value-operator`,
`def-dyadic-cube-in-rn-all-generations`,
`def-maximal-truncated-singular-integral`,
`lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control`,
`lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two`,
`lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`,
`def-standard-holder-calderon-zygmund-kernel`,
`lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`,
`lem-cotlar-inequality-for-maximal-truncations`,
`lem-cz-bad-part-is-integrable-away-from-expanded-cubes`,
`lem-dyadic-cubes-all-generations-partition-and-nesting`,
`lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation`,
`lem-holder-cz-kernels-satisfy-hormander-cancellation`,
`lem-maximal-dyadic-cubes-at-height-lambda`,
`lem-calderon-zygmund-decomposition-at-height-lambda`,
`lem-cz-good-part-has-controlled-ltwo-image`,
`thm-calderon-zygmund-operator-has-weak-type-one-one`,
`thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`,
`cor-hilbert-transform-is-bounded-on-lp`,
`cor-riesz-transforms-are-bounded-on-lp`,
`rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`,
`thm-maximal-truncations-are-weak-one-one-and-strong-lp`,
`thm-mihlin-fourier-multiplier-theorem`,
`cor-principal-value-truncations-converge-almost-everywhere`,
`rem-mihlin-does-not-assert-strong-endpoint-bounds`.

B page: `cex-calderon-zygmund-strong-lone-bound-fails`,
`cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`,
`cex-size-without-cancellation-does-not-give-a-principal-value-operator`,
`ex-calderon-zygmund-decomposition-of-an-interval-indicator`,
`ex-riesz-transform-as-a-standard-calderon-zygmund-operator`,
`ex-second-derivative-newtonian-kernels-fit-the-cz-framework`.

Open obligations at entry: author 31 item files and the two page files; write
`research/frontier-38-owner-30-batch-5.proof-contracts.json` for the batch;
re-run precheck/rendercheck, content policy, strict proof contracts,
dependency-level and plan checks; record 31 item decisions
(`tools/step3-decisions.mjs record-item`); keep the batch-5 cross-batch
dependency input current (`[]` unless a cross-batch use appears); no in-run
supplier is unfinished (the dispatch names none), but any discovery is to be
flagged here with exact ids and consuming step.

## Progress log

_Per-item checkpoints are appended below in authoring order._

### 1. `def-calderon-zygmund-kernel-and-principal-value-operator` (level 0) — written

- Claim kept as scaffolded: annular size condition (1), Hörmander condition (2),
  L²-bounded off-support operator (3), principal-value distribution; no existence
  of a principal value assumed. Added the honest well-definedness clause that the
  integral in (3) is required to converge absolutely a.e. off the support (it is
  automatic for locally square-integrable kernels and is recovered below from
  Hörmander's condition by Tonelli); no promised claim removed.
- Deps unchanged (4 published ids). Sources: Grafakos §5.3.2 (5.3.4), (5.3.12),
  (5.3.7)–(5.3.9) pp. 358–359; Tao notes 4 Defs 2.1, 2.4 pp. 6–7.
- Checks: rendercheck OK; precheck n/a (definition); depcheck names nothing of
  this file; content-policy item mode pending the batch (30 files still absent).

### 2. `def-dyadic-cube-in-rn-all-generations` (level 0) — written

- Claim kept: half-open boxes $Q_{k,m}$ for $k\in\mathbb Z$, side $2^{-k}$,
  volume $2^{-kn}$, $k\ge0$ agrees with the published generation convention,
  recorded that the published $k\ge0$ grid cannot serve the small-height
  stopping time. Links exactly the six scaffold deps.
- Sources: Grafakos §5.3.1 p. 355; Kinnunen §1.2 pp. 9–10.
- Checks: rendercheck OK; depcheck clean for this id.

### 3. `def-maximal-truncated-singular-integral` (level 0) — written

- Claim kept: $T_\varepsilon$, $T^{(\varepsilon,N)}$, $T^*$, $T^{**}$ under the
  pointwise size bound $|k|\le A_1|\cdot|^{-n}$; absolute convergence for
  $f\in L^p$, $1\le p<\infty$, by Hölder with $k\mathbf 1_{|\cdot|>\varepsilon}\in L^{p'}$;
  the comparison $T^*f\le T^{**}f\le2T^*f$ proved (dominated convergence in $N$
  and $T^{(\varepsilon,N)}=T_\varepsilon-T_N$). No truncation limit asserted.
- Deps unchanged (2 published ids). Sources: Grafakos (5.3.15)–(5.3.18)
  pp. 362–364; Williams definitions preceding Thm 3.8 p. 11.
- Checks: rendercheck OK; depcheck clean for this id.

### 4. `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control` (level 0) — written

- Claim kept: the two weighted estimates (1), (2) with
  $A\ge\max\{\|m\|_\infty,\max_{|\alpha|\le n_0}C_\alpha\}$, $\zeta=\chi(\xi)-\chi(2\xi)$,
  $n_0=\lfloor n/2\rfloor+1$. Proof follows Grafakos's (6.2.15)–(6.2.19)
  derivation: telescoping partition of unity; $m_j\in C_c^{n_0}$; the
  Plancherel identity $\|x^\gamma K_j\|_2=(2\pi)^{-|\gamma|}\|\partial^\gamma m_j\|_2$;
  Leibniz + Mihlin giving $\|\partial^\gamma m_j\|_2\le C_{n,\chi}A2^{j(n/2-|\gamma|)}$;
  Cauchy–Schwarz with weight split $2n_0-\tfrac12>n$; the gradient case via
  $\zeta_r(\xi)=\xi_r\zeta(\xi)$.
- Deps: scaffold five plus two added published Fourier inputs actually cited —
  `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`
  and `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`.
  Manifest row to be updated to match; level unchanged (external deps).
- Checks: rendercheck OK; precheck PASS after adopting the canonical
  layer numbering (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1); proof-layout
  `1 items, 7 steps, 0 defects` (run with `PRESTIGE_APP_DIR=/tmp/papp`, a
  symlink shim to the real app checkout, because the container has no
  `worker/node_modules/tsx` and the fallback loader cannot compile the app's
  TSX renderer; recorded as an environment note).
- Next: item 5.

### 5. `def-standard-holder-calderon-zygmund-kernel` (level 1) — written

- Standard δ-Hölder first-difference convention; records that it is sufficient
  for the Hörmander condition (proved by item 6 below) and that no converse,
  L² boundedness or p.v. existence is asserted.

### 6. `lem-holder-cz-kernels-satisfy-hormander-cancellation` (level 2) — written

- Pointwise Hölder ⇒ Hörmander with $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$;
  polar-coordinate evaluation of $\int_{|x|\ge2|y|}|x|^{-n-\delta}dx$.

### 7. `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`
(level 1) — written

- Sharp two-level interpolation for sublinear operators (weak (1,1) + strong
  (2,2) ⇒ $L^q$, $1<q<2$, $C_qA^{2/q-1}B^{2-2/q}$) and the duality transfer to
  $p>2$ via the adjoint; both the $A=0$ and $B=0$ degenerate choices are
  recorded.

### 8. `lem-cotlar-inequality-for-maximal-truncations` (level 1) — written

- $T^*f\le M(Tf)+C_{n,\delta}(A_1+A_2'+A_3)Mf$ for Schwartz $f$ via the
  comparison $T_\varepsilon f=(Tf)*\varphi_\varepsilon+f*R_\varepsilon$ and the
  $\varepsilon^\delta(\varepsilon+|x|)^{-n-\delta}$ error bound.
- Open verification for Steps 5–8: the mixed-term associativity
  $W*(f*\varphi_\varepsilon)=(W*f)*\varphi_\varepsilon$ is justified by
  Tonelli in step 2.2; the cited suppliers may not contain an explicit
  distribution-convolution associativity theorem, so an auditor should confirm
  or a local argument should be added.

### 9. `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` (level 1)
— written

- One-cube off-support estimate $\int_{\mathbb R^n\setminus Q^*}|Tb_Q|\le
  A_2\|b_Q\|_1$ for the $2\sqrt n$-dilate, using mean-zero of $b_Q$, Tonelli and
  the translation-invariant Hörmander condition.

### 10. `lem-dyadic-cubes-all-generations-partition-and-nesting` (level 1)
— written

- Partition at each generation, volume $2^{-kn}$, unique ancestors and
  nested-or-disjoint; half-open endpoint bookkeeping via the unique integer
  $m<t\le m+1$. Added published suppliers `def-countable-choice` and
  `def-integers` (used by the measure identification and the integer-embedding
  steps) to the manifest row.

### 11. `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation`
(level 1) — written

- S'-convergence of the partial sums, a.e. convergence of $\sum_jK_j$ off the
  origin, coincidence with $W=m^\vee$ and the annular/Hörmander bounds
  $\le C_nA$; local fixed output that hidden from the scaffold is the
  H\"older-type estimate $\int|K_j|(1+2^j|x|)^{1/4}\le C_nA$ from item 12.

### 12. `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control`
(level 0) — written

- Grafakos (6.2.15)–(6.2.19) derivation with $n_0=\lfloor n/2\rfloor+1$,
  Leibniz + Mihlin and Cauchy–Schwarz with the weight split
  $2n_0-\tfrac12>n$; added published Fourier suppliers
  `def-fourier-transform-of-a-tempered-distribution`,
  `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`
  and `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms` to the
  manifest row. Precheck PASS after canonical renumbering.

### 13. `lem-maximal-dyadic-cubes-at-height-lambda` (level 2) — written

- Bad cubes, good parents, maximality by the generation stopping time, the
  equality $\bigcup_jQ_j=\{M_df>\lambda\}$ and $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$.

### 14. `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`
(level 0) — written

- $\int g(x-y)\omega(y)dy\le\|\omega\|_1Mg(x)$ for radially nonincreasing
  integrable $\omega$, via superlevel sets and layer cake; added
  `def-countable-choice` and
  `thm-lebesgue-measure-under-dilations-and-reflections` (used in the ball
  scaling) to the manifest row.

### 15. `lem-calderon-zygmund-decomposition-at-height-lambda` (level 3) — written

- $f=g+\sum_jb_j$, $b_j$ mean-zero with $\|b_j\|_1\le2^{n+1}\lambda|Q_j|$,
  $\|g\|_1\le\|f\|_1$, $|g|\le2^n\lambda$, $\|g\|_2^2\le2^n\lambda\|f\|_1$,
  $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$; the a.e. bound on $g$ uses the
  shrinking-nicely differentiation theorem over all generations through a point.

### 16. `lem-cz-good-part-has-controlled-ltwo-image` (level 4) — written

- Chebyshev at level $(\lambda/2)^2$ with $\|Tg\|_2\le B\|g\|_2$ and
  $\|g\|_2^2\le2^n\lambda\|f\|_1$ gives
  $|\{|Tg|>\lambda/2\}|\le4B^22^n\lambda^{-1}\|f\|_1$.

### 17. `thm-calderon-zygmund-operator-has-weak-type-one-one` (level 5)
— written

- Decomposition at height $\gamma\lambda$, $\gamma=2^{-(n+1)}B^{-1}$; good part
  at level $\lambda/2$; $L^2$-convergence of $\sum_jb_j$ via
  $\sum_j\|b_j\|_2^2\le2\|f\|_2^2+2\cdot4^n\gamma\lambda\|f\|_1$ (the earlier
  scaffold bound using $\|b_j\|_\infty$ was replaced because no sup bound on
  $b_j$ is available); dilated cubes at side $2\sqrt n$; extension to all
  $L^1$ by approximation, Cauchy-in-measure and Fatou. Added
  `thm-tonelli-theorem-for-sigma-finite-product-spaces` to the manifest row.

### 18. `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` (level 6)
— written

- Adjoint kernel reflection, sharp two-level interpolation and duality; adopted
  the canonical layer numbering (1.1, 1.2, 2.1, 2.2, 3.1).

### 19. `def-maximal-truncated-singular-integral` (level 0) — written

- $T_\varepsilon$, $T^{(\varepsilon,N)}$, $T^*$, $T^{**}$ under the pointwise
  size bound; absolute convergence for $f\in L^p$, $1\le p<\infty$; the
  comparison $T^*\le T^{**}\le2T^*$ with both inequalities proved.

### 20. `ex-calderon-zygmund-decomposition-of-an-interval-indicator` (level 4,
B page) — written

- Unique maximal bad interval $(0,2]$ with average $2\lambda$, parent $(0,4]$
  good with average exactly $\lambda$; $\int b=0$, $|g|=2\lambda$,
  $\sum|Q|=2\le4$. Step 1.1 was rewritten to derive maximality from the
  nesting/containment argument rather than the parenthetical identification of
  the containing intervals. `## Verification` heading restored after the
  canonical-form adoption (precheck's proposal omits section headings).

### 21. `cor-principal-value-truncations-converge-almost-everywhere` (level 8)
— written

- Oscillation $H_f\le2T^*(f-g)$; weak (1,1) for $p=1$ and Chebyshev plus strong
  $L^p$ for $p>1$ over a dense class $D$; $D=\mathcal S$ is verified for the
  Hilbert and Riesz kernels via the published Schwartz-level principal-value
  formulas (added as suppliers).

### 22. `cor-hilbert-transform-is-bounded-on-lp` (level 7) — written

- $k(x)=1/(\pi x)$ is a standard $1$-Hölder CZ kernel with $A_2'=2/\pi$,
  $A_1=2\log2/\pi$, $A_2=2/\pi$; skew-adjointness plus the Schwartz p.v.
  formula gives the off-support representation; the strict-range theorem gives
  the unique extension with constant $C_p(1+2/\pi)\max(p,(p-1)^{-1})$.
- Added `def-hilbert-space-adjoint` to the manifest row (adjoint identity used
  in the off-support step).

### 23. `cor-riesz-transforms-are-bounded-on-lp` (level 7) — written

- Same architecture with the published Riesz kernel estimates; skew-adjointness
  of $R_j$ derived from Plancherel and the purely imaginary symbol; off-support
  representation for compactly supported $L^2$ inputs; strict-range theorem.
  Added `def-hilbert-space-adjoint` to the manifest row.

### 24. `thm-maximal-truncations-are-weak-one-one-and-strong-lp` (level 7)
— written

- Cotlar extended to $L^2$ inputs by density and a.e. subsequences; bad part:
  J$_1$/J$_2$/J$_3$ splitting with the $5\sqrt n$-dilated cubes, the
  functionals $E_1,E_2$ and their Tonelli bounds $2^{n+1}A_2\|f\|_1$ and
  $A_2\mu^{-1}\|f\|_1$; good part: $T^{**}g\le2M(Tg)+2C_0(A_1+A_2'+A_3)Mg$,
  Chebyshev and the decomposition bound; extension to $L^1$ and the strong
  $L^p$ bounds by Cotlar plus the Hardy–Littlewood and CZ $L^p$ bounds.
- Local repair of the scaffold constant: the proof consumes the Hörmander
  constant $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$, so the constants are
  written $C_{n,\delta}$ and $C_{n,p,\delta}$; the scaffold's
  $C_n(A_1+A_2'+A_3+B)$ cannot be uniform in $\delta$ because
  $2^{-\delta}\delta^{-1}$ is unbounded as $\delta\downarrow0$. Reported to
  Step 4 as a pre-splice statement mismatch (the batch manifest keeps the
  scaffolded statement text).

### 25. `thm-mihlin-fourier-multiplier-theorem` (level 7) — written

- Dyadic pieces sum to a kernel $k=W$ off the origin with
  $A_1,A_2\le C_nA$; $T_m$ is convolution with $W$ on Schwartz inputs; the
  off-support representation for compactly supported $L^2$ inputs follows by
  mollification (approximate identity in $L^2$ and $L^1$) and a compact-cover
  argument; the strict-range theorem gives $m\in M_p$ with
  $C_n\max(p,(p-1)^{-1})(A+\|m\|_\infty)$. Added the published mollifier,
  convolution-product and approximate-identity suppliers to the manifest row.

### 26. `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`
(level 7) — written

- Scope remark: weak (1,1) here, $L^\infty\to\mathrm{BMO}$ later, no strong
  $L^1$ or $L^\infty$ claim; the companion counterexamples refute only the
  compatible strong endpoints.

### 27. `rem-mihlin-does-not-assert-strong-endpoint-bounds` (level 8) — written

- Scope remark: strict-range $L^p$ only; the weak (1,1) bound of the
  maximal-truncation theorem is not upgraded to strong (1,1).

### 28. `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` (level 2
as dispatched; recomputed 3) — written

- Standard $1$-Hölder kernel from the published estimates, $L^2$ bound and
  skew-adjointness from the multiplier, off-support representation, hence a
  standard-kernel CZ operator. Its in-run deps now include
  `lem-holder-cz-kernels-satisfy-hormander-cancellation` (level 2), so the
  recomputed dependency level is 3; the manifest label was updated. The item
  was authored after that supplier in the dispatch order.

### 29. `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` (level 2
as dispatched; recomputed 3) — written

- Hessian $k_{ij}=\omega_{n-1}^{-1}(nx_ix_j|x|^{-n-2}-\delta_{ij}|x|^{-n})$,
  size/gradient bounds, vanishing spherical mean, Fourier symbol
  $\mathcal F(\mathrm{p.v.}k_{ij})=-\xi_i\xi_j/|\xi|^2+\delta_{ij}/n$, and the
  identity $\partial_{ij}\Gamma=\mathrm{p.v.}k_{ij}-(\delta_{ij}/n)\delta_0$.
  Repairs: the `## Example` section was restored after the canonical-form
  adoption; verification 2.3/3.1 wording now distinguishes
  $\mathcal F(\mathrm{p.v.}k_{ij})$ from $\mathcal F(\partial_{ij}\Gamma)$.
  Recalculated level 3 for the same reason as item 28.

### 30. `cex-calderon-zygmund-strong-lone-bound-fails` (level 0) — repaired
and written

- Depcheck `b-leaf-content` defect repaired: the item no longer depends on the
  published B-page example `ex-hilbert-transform-of-an-interval-indicator`.
  The local computation now proves, in item steps, that
  $H_\varepsilon f(x)=q(x)$ exactly for small $\varepsilon$ on both sides of
  $(0,1)$, that $H_\varepsilon f\to Hf$ distributionally via the Schwartz
  principal-value formula and skew-adjointness, and that $q=Hf$ a.e. by
  local domination and dominated convergence; the $L^1$ divergence of $q$ then
  refutes compatible strong type (1,1).

### 31. `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`
(level 1) — repaired and written

- Depcheck `b-leaf-content` defect repaired: $[F1]$ now cites the in-run
  counterexample above (same page) and the truncation definition instead of the
  foreign B-page example; essential unboundedness of
  $q=\pi^{-1}\log|x/(x-1)|$ near $0$ and $1$ refutes every compatible bounded
  $L^\infty$ extension.

### 32. `cex-size-without-cancellation-does-not-give-a-principal-value-operator`
(level 1) — written

- Positive kernel $|x|^{-n}$: $T_\varepsilon f(0)=|S^{n-1}|\log(1/\varepsilon)\to\infty$,
  so pointwise size alone yields no principal value along any sequence and no
  finite maximal truncated operator.

## Pages

### A page — `library/fourier-analysis/calderon-zygmund-decomposition-and-singular-integrals.md`

- Written with 25 item IDs in batch order, `requires` as in the scaffold, and
  `examples: []`; four prose paragraphs summarising the kernel definitions, the
  decomposition, the weak/strong mapping theory with maximal truncations and
  a.e. convergence, and the Mihlin multiplier theorem with its endpoint scope.

### B page — `library/fourier-analysis/calderon-zygmund-decomposition-and-singular-integrals-examples.md`

- Written with the 6 example/counterexample IDs and a three-paragraph
  introduction (interval decomposition, Riesz/Newtonian kernel verifications,
  Hilbert endpoint counterexamples and the size-without-cancellation example).

## Handoff

### Completed IDs (31/31, all with Step 3b `accept` decisions, confidence 1)

A page: `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two`,
`def-calderon-zygmund-kernel-and-principal-value-operator`,
`def-standard-holder-calderon-zygmund-kernel`,
`lem-holder-cz-kernels-satisfy-hormander-cancellation`,
`def-dyadic-cube-in-rn-all-generations`,
`lem-dyadic-cubes-all-generations-partition-and-nesting`,
`lem-maximal-dyadic-cubes-at-height-lambda`,
`lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`,
`lem-calderon-zygmund-decomposition-at-height-lambda`,
`lem-cz-good-part-has-controlled-ltwo-image`,
`lem-cz-bad-part-is-integrable-away-from-expanded-cubes`,
`thm-calderon-zygmund-operator-has-weak-type-one-one`,
`lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`,
`thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`,
`def-maximal-truncated-singular-integral`,
`lem-cotlar-inequality-for-maximal-truncations`,
`thm-maximal-truncations-are-weak-one-one-and-strong-lp`,
`cor-principal-value-truncations-converge-almost-everywhere`,
`cor-hilbert-transform-is-bounded-on-lp`,
`cor-riesz-transforms-are-bounded-on-lp`,
`lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control`,
`lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation`,
`thm-mihlin-fourier-multiplier-theorem`,
`rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`,
`rem-mihlin-does-not-assert-strong-endpoint-bounds`.
B page: `ex-calderon-zygmund-decomposition-of-an-interval-indicator`,
`ex-riesz-transform-as-a-standard-calderon-zygmund-operator`,
`cex-calderon-zygmund-strong-lone-bound-fails`,
`cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`,
`cex-size-without-cancellation-does-not-give-a-principal-value-operator`,
`ex-second-derivative-newtonian-kernels-fit-the-cz-framework`.

### Checks actually run (final state)

- `precheck.mts` on all 31 explicit paths: 25 proof-bearing items PASS, 0
  failing (definitions and remarks are precheck n/a); every REPAIR proposal was
  adopted first, and section headings dropped by the canonical adoption
  (`## Proof`/`## Verification`/`## Counterexample`) were restored.
- `rendercheck.mjs` on all 31: OK (no multiline display, all math parses, all
  frontmatter parses; one pre-existing YAML `\s` escape in
  `lem-cz-bad-part-…` was repaired).
- `tools/proof-layout.mjs` on all 31 changed paths in one command:
  `31 items, 126 steps, 0 defects`.
- `content-policy.mjs research/frontier-38-owner-30-batch-5.pages.json`:
  31 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs …b-5.coverage.json --require-destination`: 2 pages,
  78 harvested results, 0 errors, 0 warnings.
- `manifest-deps.mjs` on the batch manifest: 31 items, 0 errors.
- `item-dependency-levels.mjs check --run frontier-38-owner-30`: 816 items
  across 60 pages, no errors (two B-page examples moved from level 2 to
  recomputed level 3; labels updated in the manifest).
- `proof-contract.mjs research/frontier-38-owner-30-batch-5.proof-contracts.json
  --strict`: 31/31 items, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: OK (no item-level cycles,
  forward references or B-page dependencies; the batch's items are listed).
- `depcheck.mjs`: repo-wide FAIL from other in-flight batches (blowup/curve
  link debt); the two batch-5 `b-leaf-content` defects it found (the two
  Hilbert counterexamples depending on a foreign B-page example) were repaired
  locally and no error line names a batch-5 ID now.
- `fwdcheck.mjs`: repo-wide FAIL from other batches (unplanned blowup links and
  a page cycle in the algebraic-geometry group); no batch-5 ID appears in any
  error line (batch-5 IDs appear only in the informational
  recorded-not-proved inheritance listing).
- `extcheck.mjs`: OK.
- `frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`:
  refreshed; the batch-5 cross-batch input stays `[]` (no dependency reaches
  another batch of this run).
- `step3-decisions.mjs record-item` executed for all 31 IDs with
  `--decision accept --confidence 1` and the examined dependency lists.
- `author-check.mts frontier-38-owner-30 5`: exit 0, no defects.

### Supplied/added dependencies

Rows updated to match the authored files exactly. Published suppliers added
(level unchanged, all external): `def-countable-choice`, `def-integers`
(dyadic cubes); `def-countable-choice`,
`thm-lebesgue-measure-under-dilations-and-reflections` (radial domination);
`thm-tonelli-theorem-for-sigma-finite-product-spaces` (weak (1,1));
eight interpolation/duality suppliers (CZ $L^p$); `def-calderon-…`,
`def-standard-holder-…`,
`def-centered-and-uncentered-hardy-littlewood-maximal-functions`,
`def-maximal-truncated-singular-integral`,
`cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`,
`thm-tonelli-…` (maximal truncations); four Hilbert/Riesz p.v. suppliers
(a.e. convergence); `def-hilbert-space-adjoint` (Hilbert and Riesz $L^p$);
three Fourier/Plancherel suppliers (dyadic Mihlin); eight mollifier and
convolution suppliers (Mihlin theorem); three (Riesz example) and five
(Newtonian example) published suppliers. The two Hilbert counterexamples
lost the foreign B-page dependency and gained the Schwartz p.v., skew-adjoint
and dominated-convergence suppliers.

### Published concerns and Step 4 report items

1. **Pre-splice statement mismatch, `thm-maximal-truncations-…`:** authored
   constants are $C_{n,\delta}$, $C_{n,p,\delta}$ (Hörmander constant
   $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$) instead of the scaffold's
   δ-uniform $C_n$; the manifest statement text was left as scaffolded for
   Step 4 to re-splice. Evidence: the $E_1/E_2$ Hörmander bounds and the
   Cotlar constant both scale like $\delta^{-1}A_2'$.
2. **Dyadic convention (outside scope):** published
   `def-dyadic-cube-in-rn` and its lemmas use $k\ge0$ only, while the
   Grafakos/Kinnunen decomposition needs $k\in\mathbb Z$; the local
   all-generations items record this and own the repair for this page. Suggest
   the canonical ledger generalise the published convention.
3. **Duplicate B leaves (Step 3/5 scope call):** the two Hilbert endpoint
   counterexamples duplicate the published FR-7 examples
   `cex-hilbert-transform-is-not-strong-type-one-one` and
   `cex-hilbert-transform-does-not-map-linfinity-to-linfinity`; they are kept
   as commissioned, now with self-contained local computations.
4. **Published interval convention:** the published transform example is
   stated for $(0,1)$ while the local leaves use $1_{(0,1]}$; the difference is
   the Lebesgue-null set $\{1\}$ and is handled explicitly in the local steps.
5. **Open audit item, `lem-cotlar-…` step 2.2:** the mixed-term associativity
   $W*(f*\varphi_\varepsilon)=(W*f)*\varphi_\varepsilon$ is justified by
   Tonelli; no cited supplier states distribution-convolution associativity
   explicitly, so Steps 5–8 should confirm the step or request a local
   argument.
6. Environment: `tools/proof-layout.mjs` was run with
   `PRESTIGE_APP_DIR=/tmp/papp` (symlink shim) because the container lacks the
   app's `worker/node_modules/tsx`; no mathematical effect.
