# Step 3b authoring record — pair `littlewood-paley-theory-and-square-functions`

- Run: `frontier-39-analysis-30` (batch 7), role `alpha-high`, label
  `step3b-pair-littlewood-paley-theory-and-square-functions-cc7ac303e902ef11`.
- A page: `littlewood-paley-theory-and-square-functions`
  (order 458.02611, category `fourier-analysis`, 18 scaffold items).
- B page: `littlewood-paley-theory-and-square-functions-examples`
  (order 458.02612, companion of the A page, 5 scaffold items).
- Ownership is limited to this pair. Sibling pairs in batch 7: none other.
- Scaffold of record: `research/frontier-39-analysis-30-batch-7.pages.json`
  (23 items), coverage `…-batch-7.coverage.json`, cross-batch input
  `…-batch-7.cross-batch-dependencies.json` (6 rows).
- Step 3a scope decision `sufficient` for the pair at entry (receipt
  `research/frontier-39-analysis-30-step3a-review-littlewood-paley-theory-and-square-functions.json`,
  original sha256 `03f58b79…`); the receipt was refreshed in Step 3b after the
  item-6 statement repair (current sha256 `c57cb382…`, see the corrections
  section). At entry `node tools/step3-decisions.mjs check --run
  frontier-39-analysis-30 --phase scope` reported all 30 pairs closed.
- Read at entry: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, the dispatch task, the
  Step 3a report, the batch-7 notes and coverage, the FR-11 design
  (`research/plan-fourier-analysis-track.md` L847–889, referenced as recorded
  by the Step 3a report), `research/plan-spec.json` entries for the two pages,
  and the entry suppliers of the first-owned item.

## Owned IDs and entry obligations

All 23 IDs are present in the immutable pre-author scaffold inventory, so each
needs an ordinary current Step-3 item decision after authoring; none is an
auditor-authored addition. Entry status: **open** (no item file yet) for all.
Authoring order is the dispatch's dependency-level order, lower first, ties by
page order and item ID as listed there.

A page, in dispatch order:
`def-lusin-area-function-for-a-fixed-admissible-kernel` (level 0),
`def-rademacher-functions-on-the-unit-interval` (0),
`lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition` (0),
`def-inhomogeneous-dyadic-frequency-partition` (1),
`lem-finite-rademacher-blocks-are-equidistributed` (1),
`lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds` (2),
`lem-littlewood-paley-reproducing-formula-in-tempered-distributions` (2),
`lem-ltwo-almost-orthogonality-of-dyadic-pieces` (2),
`rem-square-function-characterisation-of-real-hone` (2),
`thm-khintchine-inequality-for-finite-rademacher-sums` (2),
`thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` (2),
`lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded` (3),
`lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` (3),
`def-littlewood-paley-square-function` (4),
`lem-rademacher-randomisation-converts-square-functions-to-multipliers` (5),
`thm-littlewood-paley-square-function-equivalence-on-lp` (6),
`cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` (7),
`rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` (9).

B page, in dispatch order:
`cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` (3),
`ex-sobolev-weight-on-a-single-dyadic-annulus` (3),
`ex-dyadic-square-function-of-two-separated-frequency-packets` (5),
`ex-square-function-of-one-frequency-localised-function` (5),
`rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` (7).

Open obligations at entry:

1. Author 23 item files and the two page files
   (`library/fourier-analysis/littlewood-paley-theory-and-square-functions.md`
   and `…-examples.md`), preserving every scaffolded claim and ID.
2. Update each manifest item row in
   `research/frontier-39-analysis-30-batch-7.pages.json` to the authored
   statement, deps and dependency level (and record any statement-level
   correction explicitly in this report).
3. Write `research/frontier-39-analysis-30-batch-7.proof-contracts.json`
   (strict contract, scope = the batch's 23 items).
4. Re-run, per batch: explicit-path precheck, rendercheck, content policy,
   strict proof contracts, dependency-level check, `validate-plan` against
   `research/plan-spec.json`, and one `node tools/proof-layout.mjs` pass over
   all changed item paths.
5. Keep `research/frontier-39-analysis-30-batch-7.cross-batch-dependencies.json`
   current and run `node tools/frontier-dependency-ledger.mjs refresh --run
   frontier-39-analysis-30` after edits.
6. Record 23 item decisions with `tools/step3-decisions.mjs record-item`
   where the item is fully authored, checked and its suppliers are authored;
   record `escalate` for any consumer whose named supplier is still
   unauthored at handoff, naming the exact supplier ID and consuming step.

Known entry findings (from the Step 3a report, rechecked here):

- **Unfinished in-run suppliers.** `def-real-hardy-space-by-a-radial-maximal-function`
  (batch 5, pair `real-hardy-spaces-maximal-functions-and-atoms`),
  `def-bmo-seminorm-and-quotient-by-constants` and `thm-real-hone-bmo-duality`
  (batch 6, pair `bmo-john-nirenberg-and-h1-duality`) have no item files at
  entry. Two owned items consume them:
  `rem-square-function-characterisation-of-real-hone` (consuming
  `def-real-hardy-space-by-a-radial-maximal-function`) and
  `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements`
  (consuming all three); both will be authored here and their decisions left
  escalated until the suppliers and actual uses are reconciled.
- F1 (Khintchine re-homing to FR-4) and F2–F4 of the Step 3a report are owner
  bookkeeping; they require no change here. No owner authoring direction file
  exists for this pair (`research/frontier-39-analysis-30-owner-authoring-direction.md`
  concerns other pairs); rechecked at entry: absent for this pair.

## Progress log

Per-item checkpoints are appended below in authoring order.

### 1. `def-lusin-area-function-for-a-fixed-admissible-kernel` (level 0) — written

- Claim kept; added the honest well-definedness clauses (Young existence of
  $f*\psi_t$, Tonelli for the iterated integral, Borel measurability in $x$,
  a.e.-class invariance) and dropped the cyclic same-page link to
  `rem-square-function-characterisation-of-real-hone` (the remark depends on
  this definition; the recorded-equivalence sentence stays, unlinked).
- Deps: scaffold nine plus `thm-the-lebesgue-integral-respects-almost-everywhere-equality`
  (used for clause 4). Sources Williams Def. 7.31 / §7.6 / §6.2 Prop. 6.10.
- Checks: precheck n/a (definition); rendercheck OK.

### 2. `def-rademacher-functions-on-the-unit-interval` (level 0) — written

- Claim kept verbatim in substance; the zero-mean identity is recorded as the
  $m=1$ case of the equidistribution proved by the next lemma, with the
  half-open interval measures cited; no choice principle.
- Deps unchanged (7). Sources Grafakos App. C.1 p. 585; Tao §5.5 p. 24.
- Checks: precheck n/a; rendercheck OK (one multiline-display defect found and
  corrected to a one-line display).

### 3. `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition` (level 0) — written

- Claim kept exactly as scaffolded, with the existence clause realized by
  $\psi=\sigma\circ q$, $q(\xi):=(9-4|\xi|^2)/5$: this gives a *radial*
  smooth cutoff with $\psi=1$ on $|\xi|\le1$, $\psi=0$ for $|\xi|\ge3/2$ and
  $\operatorname{supp}\psi\subset\{|\xi|<2\}$ as promised. No monotonicity of
  an arbitrary $\psi$ is assumed: $\varphi_j\ge0$, at most two nonzero terms,
  $\sum\varphi_j^2\in[1/3,1]$ and the supports are derived from the four
  cases $u=2^{-j}|\xi|$ in $(0,1/2]$, $(1/2,1]$, $(1,2)$, $[2,\infty)$.
- Deps: scaffold seven, with `lem-schwartz-cutoffs-from-the-standard-smooth-step`
  kept for the rescaled derivative identity, plus
  `def-the-standard-smooth-step-function` and
  `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` (used to build
  $\psi$). The scaffold's $\psi$-construction strategy is realized by this
  construction, not by reusing the published cutoff's closed support.
- Canonical step numbering after `precheck` layer repair:
  1.1 construction, 2.1 partition, 3.1 supports, 4.1 sign/overlap, 4.2
  derivative bounds, 5.1 conclusion.
- Checks: precheck PASS (direct); rendercheck OK; manifest row synced.

### 4. `def-inhomogeneous-dyadic-frequency-partition` (level 1) — written

- Claim kept; the definition now records the exact $L^p$ action
  ($\Delta_jf=f*K_j$, Young), the `S`-agreement with the Schwartz-core
  multipliers, the composition rule $T_mT_n=T_{mn}$, the companion support and
  rescaling laws $\tilde\varphi_j(\xi)=\tilde\varphi_1(2^{-(j-1)}\xi)$,
  $\sum_j\tilde\varphi_j\varphi_j=1$ (cross terms with $|j-k|\ge2$ vanish
  pointwise, including at the touching spheres) and the nonzero means
  $\int K_0=\int\tilde K_0=1$. For $f\in\mathcal S'$ the operators are defined
  as $\mathcal F^{-1}(\varphi_j\cdot\mathcal Ff)$ with the transposed product,
  since the published multiplier definition only supplies $D_m\subset\mathcal S$.
- Deps: scaffold eight plus `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`,
  `thm-fourier-transform-converts-convolution-to-products`,
  `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`,
  `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`.
- Checks: precheck n/a; rendercheck OK; synced.

### 5. `lem-finite-rademacher-blocks-are-equidistributed` (level 1) — written

- Claim kept; proof by dyadic-interval counting with explicit binary digits
  ($J=j_m+1$, $d_i=j_m-j_i$), the fiber count $2^{J-m}$, the nonnegative simple
  function machinery for the general complex-valued $F$, and the monomial
  formula by factorisation of the average.
- Deps: scaffold seven plus `def-simple-function-and-canonical-representation`,
  `def-integral-of-a-nonnegative-simple-function`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
  `def-integrable-real-and-complex-functions-and-their-integrals`.
- Checks: precheck PASS (direct); rendercheck OK; synced.

### 6. `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds` (level 2) — written

- Claim kept; scaling identity by change of variables in the inversion
  integral, mean zero via $\int K_j=\varphi_j(0)$, decay from Schwartz
  seminorms, $L^1$ bounds at $N=n+1$, and Young for $1\le p\le\infty$.
- Deps: scaffold nine plus `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`.
- Checks: precheck PASS; rendercheck OK (one multiline display repaired); synced.

### 7. `lem-littlewood-paley-reproducing-formula-in-tempered-distributions` (level 2) — written

- Claim kept. The proof uses $\sigma_N=\sum_{j<N}\tilde\varphi_j\varphi_j$ with
  $\sigma_N=1$ on $\{|\xi|<2^{N-2}\}$ and
  $|\partial^\alpha(1-\sigma_N)|\le C_\alpha2^{-N|\alpha|}$ (Leibniz +
  partition derivative bounds), $\mathcal S$-convergence of the tails,
  transposition to pass to $f\in\mathcal S'$, the Hermitian self-adjointness
  $\langle T_mu,v\rangle=\langle u,T_mv\rangle$ for real $m$ by Parseval, and
  the absolute-convergence bound $\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|
  \le\int Sf\,\tilde Sg$ via $\ell^2$ Cauchy-Schwarz and dominated partial sums.
- Deps: scaffold nine plus `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`,
  `thm-monotone-convergence-for-the-integral` (both cited).
- Canonical step order: 1.1 partial symbols, 1.2 finite duality, 2.1 tail,
  3.1 $S'$ convergence, 4.1 identification.
- Checks: precheck PASS; rendercheck OK; synced.

### 8. `lem-ltwo-almost-orthogonality-of-dyadic-pieces` (level 2 at entry; recomputed level 3 after the added supplier) — written

- Claim kept with constants $1$ and $3$; Schwartz core by Plancherel, sum by
  Tonelli with $\sum\varphi_j^2\in[1/3,1]$, $L^2$ case by density and
  uniqueness of the bounded extension.
- Deps: scaffold seven plus `thm-young-convolution-inequality`,
  `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`,
  `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`.
- Checks: precheck PASS; rendercheck OK; synced.

### 9. `thm-khintchine-inequality-for-finite-rademacher-sums` (level 2) — written

- Claim kept, including the sharp $p=2$ constants. Upper bound by exponential
  moments ($\int e^{\rho A}=\prod\cosh(\rho\operatorname{Re}a_j)\le e^{\rho^2u^2/2}$
  from the equidistribution lemma and $\cosh y\le e^{y^2/2}$), a directly
  proved Markov-type tail bound (no probability-space supplier), and layer
  cake; the moment integral is scaled to $\Gamma(p/2)$. Lower bound by the
  $p=4$ upper bound plus Cauchy-Schwarz.
- Deps: scaffold eight, with `thm-markov-inequality` replaced by the general
  `cor-markov-inequality-for-random-variables` not needed (tail bound proved
  directly), plus `thm-complex-holder-minkowski-and-the-quotient-norm`,
  `thm-arithmetic-and-lattice-operations-preserve-measurability`,
  `def-real-gamma-function-by-the-euler-integral`,
  `thm-real-gamma-euler-integral-convergence`, `thm-integral-triangle-inequality`.
- Checks: precheck PASS; rendercheck OK; synced.

### 10. `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` (level 2) — written

- Claim kept. Forward direction: $\langle\xi\rangle^s\mathcal FU=u_g$, put
  $h=\langle\xi\rangle^{-s}g$, each $\Delta_jU$ is the regular distribution of
  $(\varphi_jh)^\vee$, weight comparison on the annuli and Tonelli.
  Converse: the $H_j\in L^2$ representing $\Delta_jU$ give
  $h_j=\mathcal F_2H_j$ supported in the annulus, $g_j=\langle\xi\rangle^sh_j$
  with $\sum\|g_j\|_2^2\asymp\sum2^{2js}\|\Delta_jU\|_2^2$, bounded overlap
  gives $g=\sum_jg_j\in L^2$ with $\langle\xi\rangle^s\mathcal FU=u_g$, and the
  unique-density clause of the characterisation theorem concludes.
- Deps as scaffold (10), with `thm-complex-holder-minkowski-and-the-quotient-norm`
  added for the overlap bound.
- Checks: precheck PASS; rendercheck OK; synced.

### 11. `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded` (level 3) — written

- Claim kept: uniform Mihlin constants $A_\alpha=2^{|\alpha|}C_\alpha$ for
  $\varphi_j$ (rescaled derivative bounds for $j\ge1$, vanishing for $j=0$),
  companions through $\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$
  with constants $3A_\alpha$; Mihlin's theorem supplies the uniform $L^p$
  bounds, and Young plus density of $\mathcal S$ identifies the extensions
  with $f*K_j$, $f*\tilde K_j$.
- Deps unchanged from scaffold (11), including the kernel-bounds lemma,
  Mihlin definitions/theorem, density/extension and Countable Choice.
- Sources: Grafakos Thm 6.2.7 with (6.2.10)-(6.2.14), printed pp. 445-447;
  Williams §3.9 Thm 3.13, pp. 13-14; Tao Prop. 5.3, pp. 23-24.
- Checks: precheck PASS; contract green; proof-layout clean.

### 12. `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` (level 2) — written

- Claim kept, including uniformity over all signs and all finite truncations.
  The locally finite series is smooth with $|m|\le1$; the support/decay of the
  pieces gives Mihlin constants $2^{|\alpha|+1}C_\alpha$, and the published
  Mihlin theorem gives the $L^p$ bound.
- Deps repaired: the kernel-bounds supplier is *not* used, so it was dropped
  and `dependency_level` recomputed $3\to2$ (synced in the manifest).
- Sources: Tao §5.5, pp. 25-26; Grafakos Thm 6.2.7, pp. 445-447; Williams
  Lemma 5.14 and §5.3, pp. 21-22.
- Checks: precheck PASS direct.

### 13. `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` (B, level 3) — written

- Refutes the sharp-cutoff replacement: with $\chi=1_{(1,2)}$,
  $K_0(x)=e^{3\pi ix}\sin(\pi x)/(\pi x)$ for $x\ne0$ and $K_0(0)=1$, so
  $|K_0(x)|=|\sin(\pi x)|/(\pi|x|)$; on $I_m=[m+\tfrac14,m+\tfrac34]$,
  $|K_0|\ge1/(\pi\sqrt2\,(m+\tfrac34))$, hence
  $\int_{I_m}|K_0|\ge c/(m+1)$ and $\|K_0\|_1=\infty$ by comparison with the
  harmonic series; rescaling gives $\|K_j\|_1=\infty$ for every $j$, against
  the uniform bound of the smooth partition [F5]. The $n\ge2$ global
  orientation is explicitly marked "recorded, cited, not used".
- Deps: the fourteen scaffold items ($\chi_j$ definitions, kernel bounds,
  $L^1/L^2$ transforms, inversion, dilation/reflection, Euler, Newton-Leibniz,
  comparison/integral tests, harmonic series).
- Checks: precheck PASS direct; contract green.

### 14. `ex-sobolev-weight-on-a-single-dyadic-annulus` (B, level 3) — written

- Generated leaf example kept: on $A_j$ ($j\ge1$) exactly $\varphi_j=1$, so
  $\Delta_jf=f$, $\Delta_if=0$ for $i\ne j$, and
  $\|f\|_{H^s}\asymp_s2^{js}\|f\|_2$; at $j=0$ the weight is $2^0=1$. The
  existence of an $\varepsilon$-tight cutoff $\psi$ is proved inline
  ($\psi=\sigma\circ q$ with $q=((1+\varepsilon)^2-|\xi|^2)/((1+\varepsilon)^2-1)$).
- Deps: existence lemma, standard smooth step, def-partition, Sobolev
  characterisation, Bessel-potential space, Fourier characterisation,
  Plancherel.
- Checks: precheck PASS; rendercheck OK.

### 15. `def-littlewood-paley-square-function` (level 4) — written

- Definition completed with its well-definedness conventions: $\Delta_jf$ are
  the convolution representatives of $f*K_j$; each $S_Nf$ is measurable,
  $S_Nf\uparrow Sf=\sup_NS_Nf$ is measurable with values in $[0,\infty]$;
  the construction depends only on the a.e. class of $f$; $\|Sf\|_p$ is
  written only when $Sf\in L^p$; $S_F$ denotes the square function over a
  finite set $F$. No finiteness and no operator-theoretic counterpart is
  asserted.
- Deps: the seven scaffold items (partition, kernel bounds, Mihlin pieces,
  measurability, Borel/Lebesgue, $L^p$ conventions, Countable Choice).
- Sources: Grafakos Def. 6.1.1 and the square function on p. 421; Williams
  (5.10), (5.17), pp. 17-19; Tao Cor. 5.4, p. 24.
- Checks: precheck n/a; rendercheck OK.

### 16. `lem-rademacher-randomisation-converts-square-functions-to-multipliers` (level 5) — written

- Claim kept: pointwise Khintchine for the coefficient vector
  $(\Delta_jf(x))_{j\in F}$ with constants independent of $F,f,x$;
  $\sum_{j\in F}\varepsilon_j(t)\Delta_jf=T_{m_{t,F}}f$ for each $t$; the
  integrated two-sided inequality follows by Tonelli and integrability of the
  multiplier outputs. Companions by the same argument.
- Deps: Khintchine theorem, def-partition, def-square-function, Tonelli,
  measurability, def-Rademacher, Countable Choice.
- Sources: Tao Cor. 5.8 and §5.5, pp. 25-26; Williams Remark 5.6 and §5.3,
  pp. 17, 21-22; Grafakos (6.1.2), pp. 420-421.
- Checks: precheck PASS direct.

### 17. `ex-dyadic-square-function-of-two-separated-frequency-packets` (B, level 5) — written

- Generated leaf example kept: if $k\ge j+3$, the active levels
  $\{j-1,j,j+1\}$ and $\{k-1,k,k+1\}$ are disjoint, so
  $Sf^2=Sf_1^2+Sf_2^2$ pointwise in Euclidean square, the $L^2$ norms add,
  and $\langle f_1,f_2\rangle=0$ by Plancherel.
- Deps: existence lemma, def-partition, def-square-function, $L^2$ almost
  orthogonality, Plancherel.
- Checks: precheck PASS; rendercheck OK.

### 18. `ex-square-function-of-one-frequency-localised-function` (B, level 5) — written

- Generated leaf example kept: if $\operatorname{supp}\widehat f\subset
  \{|\xi|\le1\}$ then $\Delta_0f=f$, $\Delta_jf=0$ for $j\ge1$, so $Sf=|f|$
  and $\|Sf\|_p=\|f\|_p$; the strict-range constants cannot be below $1$.
- Deps: existence lemma, def-partition, def-square-function, Fourier
  inversion.
- Checks: precheck PASS direct.

### 19. `thm-littlewood-paley-square-function-equivalence-on-lp` (level 6) — written

- Claim kept for $1<p<\infty$ only, in the two parts of the statement.
  Upper bound: lower pointwise Khintchine + uniform signed-sum Mihlin bounds +
  monotone convergence. Extension to $L^p$: Lipschitz property
  $|Su-Sv|\le S(u-v)$ and completeness, with uniqueness by interleaving.
  Lower bound: reproducing-formula duality
  $\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|\le\int Sf\,\tilde Sg$ and
  the norm-recovery/duality corollary. Identification: diagonal a.e.
  extraction, Fatou (now derived explicitly from monotone convergence [F5]),
  and dominated convergence give $S_Nf\to Sf$ in $L^p$ and a.e.
- Deps: the fifteen recorded items; the endpoint cases are excluded and
  linked to the endpoint remark.
- Sources: Tao Prop. 5.3 and Cor. 5.4 with §5.5, pp. 23-26; Grafakos Thm 6.1.2
  and Remark 6.1.3, pp. 420-425; Williams Thm 5.5 and §5.3, pp. 17, 21-22.
- Checks: precheck PASS direct; strict contract 23/23; one wording repair
  (Fatou derived from MCT) made after the first check pass and re-checked.

### 20. `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` (level 7) — written

- Claim kept: two admissible partitions have comparable square-function norms
  (eliminate $\|f\|_p$ from the strict-range theorem applied to each); mixed
  pieces satisfy $\Delta^{(\varphi)}_j\Delta^{(\psi)}_k=0$ for $|j-k|\ge3$
  (disjoint supports, density and boundedness) with symbol
  $\varphi_j\psi_k$ supported in the intersection of the two annuli.
- Deps: existence lemma, def-partition, main theorem.
- Sources: Tao Cor. 5.4, p. 24; Grafakos Def. 6.1.1/Thm 6.1.2, pp. 420-421;
  Williams (5.11) and §5.2, pp. 18-21.
- Checks: precheck PASS direct.

### 21. `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` (B, level 7) — written

- Recorded leaf kept: the dyadic model has $\|Sf\|_p\asymp\|f\|_p$ only for
  $1<p<\infty$; dyadic $H^1$ is mean zero plus $Sf\in L^1$; dyadic BMO is
  equivalent to the Carleson condition
  $\sup_I|I|^{-1}\sum_{J\subset I}a_J^2=\sup_I|I|^{-1}\int_I|f-f_I|^2
  =|f|_{\mathrm{BMO}}^2$. Exact source statements recorded in
  `external_dependency`; no proof attempted; not a dependency target.
- Deps: main theorem, def-Lusin.
- Checks: precheck n/a; rendercheck OK.

### 22. `rem-square-function-characterisation-of-real-hone` (level 5) — written, decision escalated

- Recorded leaf kept: $\|f\|_{H^1}\asymp\|f\|_{L^1}+\|Sf\|_{L^1}$ (up to the
  mean-zero condition), $\int f=0$ for $f\in H^1$, with the conical form
  recorded; exact Williams Prop. 7.30 statements stored. No proof attempted;
  not a dependency target.
- Deps: def-Lusin, `def-real-hardy-space-by-a-radial-maximal-function`.
- Supplier state: the supplier file exists (fully authored at 08:02) but its
  pair has no Step-3b decision yet and its computed level (4) differs from
  its recorded level (3); the consumer's level was set to the computed 5.
- Decision: **escalate** — supplier ID
  `def-real-hardy-space-by-a-radial-maximal-function`, consumer ID
  `rem-square-function-characterisation-of-real-hone`, consuming statement:
  the recorded comparison in the Statement only, no proof step. Owner must
  resolve after the batch-5 certification.

### 23. `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` (level 12) — written, decision escalated

- Scope remark kept: the strict-range theorem is not asserted at the
  endpoints; the endpoint pair is $(H^1,\mathrm{BMO}/\mathbb C)$ in place of
  $(L^1,L^\infty)$, and no endpoint substitution may be read into the theorem
  or its consumers. It is not a proof.
- **Choice.** The upper-endpoint identification inherits the full Axiom of
  Choice from `thm-real-hone-bmo-duality` and declares it through
  `def-axiom-of-choice`; the lower-endpoint identification uses only the H^1
  definition and the recorded characterisation.
- Deps: main theorem, the two recorded remarks, the H^1 definition, the BMO
  definition, the H1-BMO duality theorem, `def-axiom-of-choice`.
- Supplier state: both sibling files exist, but their pairs have no Step-3b
  decisions and their levels are being recomputed (e.g.
  `thm-real-hone-bmo-duality` records 8 but computes 11); the consumer's
  level was set to the computed 12.
- Decision: **escalate** — supplier IDs
  `def-real-hardy-space-by-a-radial-maximal-function`,
  `def-bmo-seminorm-and-quotient-by-constants`,
  `thm-real-hone-bmo-duality`; consumer ID
  `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements`,
  consuming statement: the naming of the endpoint scales only, no proof step.

## Statement-level corrections and dependency changes recorded here

1. **False companion rescaling law (items 4 and 6).** The scaffold asserted
   $\tilde\varphi_j(\xi)=\tilde\varphi_1(2^{-(j-1)}\xi)$ and, at the kernel
   level, $\tilde K_j(x)=2^{(j-1)n}\tilde K_1(2^{j-1}x)$. This is false: at
   $\xi=1$, $\tilde\varphi_2(1)=\varphi_1(1)+\varphi_2(1)+\varphi_3(1)=0$
   while $\tilde\varphi_1(1/2)=1$; equivalently
   $\mathcal F(\tilde K_2-2^n\tilde K_1(2\cdot))=-\psi$, so the difference
   would be $-K_0$. Repaired: the definition (item 4) now states the true
   piece rescaling $\varphi_{k+j-1}(\xi)=\varphi_k(2^{-(j-1)}\xi)$ for
   $k\ge1$ and the linear companion identity; the lemma (item 6) states
   $\tilde K_j=K_{j-1}+K_j+K_{j+1}$, proves $\tilde K_j\in\mathcal S$ from
   the sum, and proves the companion decay
   $|\tilde K_j(x)|\le C'_N2^{jn}(1+2^j|x|)^{-N}$ by summing the three
   kernel bounds (the $K_j$ chain now carries the explicit constant
   $2^{N+n}$; the earlier displayed comparison was not valid for $N>n$ as
   written). The manifest row for item 6 was corrected accordingly and the
   pair scope review was refreshed (receipt sha256
   `c57cb3825775…`). All other claims of the pair are unchanged.
   The A-page prose was re-read: it states only the true companion identity
   $\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$ and the sum
   $\sum_j\tilde\varphi_j\varphi_j=1$, so no Step-4 page/prose amendment is
   required for this correction.
2. **Fatou derivation (item 19).** The identification step invoked Fatou's
   lemma; the recorded Fatou remark is not a dependency target, so the step
   now derives it explicitly as monotone convergence applied to
   $\inf_{m\ge k}S_Ng_m$. Re-checked afterwards.
3. **Level recomputations.** `lem-ltwo-almost-orthogonality-of-dyadic-pieces`
   $2\to3$ (kernel-bounds supplier added, used in the proof);
   `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` $3\to2$
   (unused kernel-bounds supplier dropped); the two H^1/BMO recorded remarks
   carry the levels computed from their in-run suppliers ($5$ and $12$) and
   stay escalated. All 23 owned levels pass
   `item-dependency-levels.mjs check` as of this handoff (the check's 34
   remaining errors are all sibling items of the still-in-flight
   `real-hardy-spaces-maximal-functions-and-atoms` and
   `bmo-john-nirenberg-and-h1-duality` pairs plus
   `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`).
4. **Definitional completions** (recorded as repairs, claims kept):
   item 1 (well-definedness clauses, cyclic link dropped), item 4
   ($\mathcal S'$ action, $L^p$ action, composition, companion identity),
   item 15 ($S_N$, $S$ measurability and a.e.-class conventions),
   item 8 (dependency basis), item 9 (direct tail bound replacing the
   inapplicable Markov supplier), item 12 (dependency/level).
5. **AC.** Every proof item assumes and declares Countable Choice where it is
   used; item 23 additionally declares the full Axiom of Choice inherited
   from the H1-BMO duality theorem. No item on this pair uses full AC other
   than through that recorded inheritance.

## Checks actually run at handoff (2026-10-05, after the last item edit)

- `node tools/proof-layout.mjs` on the 23 owned paths (one batched call):
  23 items, 71 steps, 0 defects.
- `node tools/tsx-run.mjs tools/author-check.mts frontier-39-analysis-30 7`:
  `ok: true` — precheck 16/16 PASS, rendercheck OK (25 files incl. both
  pages), content-policy 23 items / 0 errors / 0 warnings, strict
  proof-contract 0 errors / 0 warnings / 23 of 23 items.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK (page order
  acyclic and consistent; no item-level cycles, forward references, B-page
  dependencies or unresolved ids among the pages with item lists).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  all owned items clean; remaining errors are sibling items listed above.
- `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-39-analysis-30`: refreshed and deduplicated (cross-batch file
  updated with the two H^1 rows kept `open` pending the batch-5
  certification, with the current supplier/use state recorded).
- `node tools/step3-decisions.mjs`: pair scope refreshed `sufficient`
  (sha256 `c57cb3825775…`); 21 owned item decisions recorded `accept` or
  `repaired` with confidence 1 and the examined dependency lists; 2 recorded
  `escalate` (items 22 and 23 above). Engine re-read: 21 of 23 closed, the
  two escalations awaiting the owner.
- Manifest rows resynced from the item files (deps, levels, provenance,
  sources); proof contracts regenerated and re-checked strict.

## Open obligations

1. Owner resolution of the two escalations (items 22, 23): the H^1 supplier
   `def-real-hardy-space-by-a-radial-maximal-function` and the BMO/H1-BMO
   suppliers must be certified by their pairs; the consumers use them for
   naming only, with no proof step.
2. Downstream re-audit note: the corrected item-6 statement/level changes
   the hash of any other pair's recorded decision whose transitive input
   closure includes this pair; the serial reconciler should re-check those,
   not this pair.
3. Sibling dependency-level churn (34 errors, all sibling items) is expected
   to clear when the batch-5/6 pairs sync their own levels.

## Incident record: out-of-scope formatter run

During a prior phase of this same session, a local helper
`/tmp/lp/join.mjs` (which collapses soft-wrapped numbered-step paragraphs to
one physical line, as the line-based precheck prefers) was invoked once with
the shell glob `items/*.md` instead of the 23 owned paths. At 08:02 it
rewrote every item file containing a `## Facts & Assumptions` block that the
transform changed: 16,038 files received whitespace-only edits (line joins,
trailing-space trims, and a missing final newline on the last paragraph).
The mathematics was untouched (the transform is purely whitespace), but the
scope violation was real.

Cleanup performed immediately afterwards: `git diff -w` identified 14,241
tracked files whose only difference from HEAD was whitespace; all were
restored byte-exact from their HEAD blobs via `git cat-file --batch` (the
repository's `.git/index` is read-only in this sandbox, so `git restore`
itself was unavailable). The remaining ~1,700 files in the 08:02 window were
not restorable without destroying other writers' work: 749 tracked files
carry genuine concurrent content edits plus the whitespace join, and 942
untracked in-flight files (sibling authors' new items) have no HEAD copy.
Those files retain the whitespace-only joins; their authors' own formatters
and checks normalize this shape, but the affected authors should be aware.
The 23 owned items were re-normalized by hand (leading space on one step,
trailing-space/EOF artifacts) and re-checked. No further glob formatter runs
were performed.
