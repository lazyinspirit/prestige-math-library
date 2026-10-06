# Step 3b — pair `schauder-and-lp-elliptic-estimates`

- Run: `frontier-39-analysis-30`; role: `alpha-high`; batch: 13.
- Owned pair: A page `schauder-and-lp-elliptic-estimates` (order 458.035) and
  B page `schauder-and-lp-elliptic-estimates-examples` (order 458.036) only.
- This is an author checkpoint, not an independent review or gate receipt.

## Continuation update — 2026-10-05

The historical author checkpoint below predates the current Step-3 review
wave. The owner-authorized B13 proof repairs are now on disk: the local
interior $W^{2,p}$ estimate uses nested cutoffs and hole filling; the global
$W^{2,p}$ boundary estimate has quantitative finite-overlap absorption and a
$C^{1,1}$ chart-composition proof; the weak Schauder argument uses the signed
barrier and finite high-dimensional $L^p$ bootstrap; and the conditional
$W^{2,p}$-to-a.e.-PDE conclusion retains its source hypotheses. Their
contracts and manifests were synchronized, including removal of the obsolete
Meyers--Serrin link from the global Schauder consumer.

The owner-authorized Fourier repair of
`ex-method-of-continuity-for-a-constant-coefficient-path` now asserts uniform
absolute convergence only for $u$ and $u'$, proves the $C^{0,\alpha}$ bound by
a low/high-frequency split, identifies $u''=-f-tcu$ distributionally from
$L^2$ convergence of sine partial sums, and upgrades using the continuous
right-hand side. It also proves bijectivity off resonance and equality of the
resonant range with the orthogonal hyperplane. Focused proof-layout,
proof-contract and manifest-dependency checks pass for that item. The prior
item receipt is not treated as current; B13 receipts remain open pending the
stable B12 inputs and the requested dependency-ordered independent audit.

## Owned IDs (30; dispatch dependency order)

A page (22): `def-holder-spaces-c-k-alpha-and-their-scaled-norms`,
`lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`,
`lem-lp-interpolation-absorbs-lower-order-derivatives`,
`thm-global-w-two-p-estimate-for-the-laplacian-on-rn`,
`thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators`,
`def-uniformly-elliptic-nondivergence-operator`,
`lem-holder-interpolation-with-an-epsilon-loss`,
`lem-interior-w-two-p-regularity-for-the-laplacian`,
`thm-holder-spaces-on-bounded-domains-are-banach-spaces`,
`lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms`,
`lem-cutoff-commutator-for-local-w-two-p-estimates`,
`lem-freezing-coefficients-and-schauder-error-estimate`,
`thm-interior-schauder-estimate-for-uniformly-elliptic-equations`,
`thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`,
`thm-boundary-schauder-estimate-for-the-dirichlet-problem`,
`thm-global-w-two-p-dirichlet-estimate`,
`cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`,
`cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`,
`thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`,
`rem-schauder-and-sobolev-estimates-are-different-scales`,
`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`,
`thm-global-schauder-estimate-and-classical-dirichlet-solvability`.

B page (8):
`cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives`,
`ex-riesz-transform-formula-for-second-laplacian-derivatives`,
`cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates`,
`cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls`,
`cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one`,
`ex-schauder-scaling-on-a-quadratic-poisson-solution`,
`cex-boundary-w-two-p-regularity-needs-c-one-one-type-control`,
`ex-method-of-continuity-for-a-constant-coefficient-path`.

## Open obligations at entry (status at handoff)

1. **Unfinished in-run suppliers (batches 4, 9, 10).** At entry no item file existed
   for `thm-higher-order-sobolev-embedding`,
   `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
   `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
   `lem-classical-solutions-satisfy-the-weak-formulation`,
   `thm-rellich-kondrachov-for-p-less-than-n`,
   `thm-rellich-kondrachov-at-the-critical-source-exponent`,
   `thm-morrey-rellich-compactness-for-p-greater-than-n` and
   `def-weak-dirichlet-solution-for-a-divergence-form-operator`. **Status:** all but
   the first were authored by their batches during this dispatch and their
   statements were read and matched against the uses; the consumers
   `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`,
   `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` and
   `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian` are authored
   and checked. `thm-higher-order-sobolev-embedding` (batch 4) still has no item
   file, so `thm-global-schauder-regularity-...` (step 3.1),
   `cor-w-two-p-regularity-implies-...` (steps 2.1-2.3) and
   `thm-weak-global-...` (steps 1.1 and 3.1) remain **escalated** with their
   open obligations stated in the item checkpoints and in the strict-contract
   result; they must be re-decided once the supplier is authored.
2. **Step-3a finding F2** (boundary-Hölder notation `C^{k,\alpha}(\bar\Omega)`
   used by consumers but not introduced): resolved by adding the
   boundary-extension class to `def-holder-spaces-c-k-alpha-and-their-scaled-norms`
   (with the slit-rectangle witness showing the closure class can be larger); the
   pair scope receipt was refreshed with `sufficient` after the statement settled.
3. **Step-3a finding F1** (design primary backing [E]/[ACM] not in the coverage
   ledger): still open, owner/Step 4 bookkeeping; not editable here. Carried into
   the published-concerns list below.
4. Only published material is consumed besides the in-run items above; no
   published item is edited by this dispatch.

## Checkpoints

### Completed: `def-holder-spaces-c-k-alpha-and-their-scaled-norms`

- Claim/conventions: local and closure Hölder classes, seminorm and norm,
  scaled interior norm on balls, bounded $C^{k,\alpha}$ graph domains, and a
  new **boundary-extension class** $C^{k,\alpha}(\overline\Omega)$ for bounded
  $\Omega$ (elements whose derivatives through order $k$ extend continuously;
  the extension is unique and the norm is computed by the interior formula).
  This resolves Step-3a F2 by making the consumers' notation $\|\cdot\|_{C^{2,\alpha}(\bar\Omega)}$
  precise without asserting the (true but not-free) automatic extension of the
  whole closure class; a counterexample (slit rectangle) records that the
  closure class is in general strictly larger.
- Sources: Schikorra §8.1 p. 140; Simon Lecture 12 pp. 125-126, 134;
  Villavert §1.4/§3.5 pp. 31-42, 127 (locators as in the scaffold; not
  re-fetched since the coverage record already marks them fetch-verified).
- Dependencies: added published `def-bounded-c-one-domain-boundary-charts-and-outward-normal`
  (item and manifest). Level remains 0 (all deps published/level 0).
- Checks: `rendercheck` OK; `precheck` not applicable (definition);
  `proof-layout` 0 steps 0 defects.
- Open gaps: none; the statement change (extension class, F2) requires a
  refreshed pair scope receipt, to be recorded once all statements settle.

### Completed: `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`

- Claim: kernel formula/homogeneity/size/gradient/difference bounds and zero
  spherical means (so $k_{ij}$ is a standard $1$-Hölder Calderón–Zygmund
  kernel), the distributional identity $D_{ij}\Phi=\mathrm{p.v.}\,k_{ij}-\frac{\delta_{ij}}n\delta_0$,
  and the p.v./local-cancellation formula for $\partial_i\partial_jNf$ with
  $f\in C^{0,\alpha}_c$, $0<\alpha\le1$. The final form uses the local
  unit-ball subtraction plus the unsubtracted far field; a global subtraction
  is not an absolutely convergent Lebesgue integral.
- Sources: Hunter §2.7.1 Theorem 2.26/Corollary 2.27 pp. 37-39; Villavert
  Theorem 3.7 Step 1 and §3.1.1 pp. 92-93, 104-105; Schikorra §2.4/§7.6
  pp. 28-34, 137-139.
- Dependencies added (published, item and manifest): `thm-newtonian-potential-for-holder-data-is-classical`,
  `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `def-real-power`,
  `thm-real-power-continuity-and-derivatives`, `thm-logarithm-derivative-and-integral`,
  `thm-chain-rule-for-total-derivatives`, `thm-algebra-of-derivatives`,
  `cor-mean-value-theorem`, `def-ck-and-multi-index-notation-in-several-variables`.
  Level unchanged (published deps do not raise in-run levels).
- Checks: `precheck` PASS after adopting the checker's canonical layer
  numbering; `proof-layout` 9 steps 0 defects; `rendercheck` OK.
- Open gaps: none.

### Completed: `lem-lp-interpolation-absorbs-lower-order-derivatives`

- Claim: global absorption $\|Du\|_{L^p(\mathbb R^n)}\le\varepsilon\|D^2u\|_{L^p}+\!C\|u\|_{L^p}$
  for $u\in W^{2,p}(\mathbb R^n)$ via the Mihlin multiplier
  $m_\varepsilon=2\pi i\xi_i/(4\pi^2\varepsilon|\xi|^2+1)$ and density; and the
  scaled ball form. **Statement repair (deviation from the scaffold):** the
  ball form is stated with the norm over the doubled ball,
  $\|Du\|_{L^p(B_R)}\le\varepsilon R\|D^2u\|_{L^p(B_{2R})}+C R^{-1}\|u\|_{L^p(B_{2R})}$
  for $u\in W^{2,p}(B_{2R})$, proved by an elementary coordinate argument
  (one-dimensional weighted identity, translation invariance, power-mean) that
  uses only Countable Choice. The scaffold's undoubled-ball form needs the
  Sobolev extension theorem, which assumes the Axiom of Choice, and is not
  assumed by this pair. Manifest statement, deps and item were updated
  consistently; report this for Step 4.
- Sources: Villavert Theorem 3.8 Part III (3.16) p. 105; Schikorra §7.6
  pp. 137-139; Simon Lecture 12 pp. 127-133.
- Dependencies added (published, item and manifest): Mihlin-definition,
  L^p-multiplier-definition, Schwartz multiplier definition, Fourier
  automorphism, density of $C_c^\infty$ in $W^{k,p}(\mathbb R^n)$,
  Newton–Leibniz, Fubini over graph regions, translation invariance of
  Lebesgue measure, Hölder for integrals, multi-index notation.
- Checks: `precheck` PASS after adopting canonical numbering; `proof-layout`
  7 steps 0 defects; `rendercheck` OK.
- Open gaps: none.

### Completed: `thm-global-w-two-p-estimate-for-the-laplacian-on-rn`

- Claim: $\|D^2u\|_{L^p}\le C\|\Delta u\|_{L^p}$ on $\mathbb R^n$ for $1<p<\infty$
  via $\partial_i\partial_ju=R_iR_j(-\Delta u)$ and the Riesz $L^p$ bounds; density
  extends it to $W^{2,p}(\mathbb R^n)$. Constant $=C_{n,p}^2$, finite on the
  strict range and blowing up at the endpoints.
- Sources: Schikorra §7.6 pp. 137-139 and §8.7 pp. 150-152; Teschl §10.4 pp. 243-247.
- Deps added (published): `thm-plancherel`,
  `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`,
  `lem-ltwo-fourier-multiplier-bound`,
  `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
  `def-sobolev-space-wkp-and-its-norm`. Level 0 unchanged.
- Checks: `precheck` PASS; `proof-layout` 4 steps 0 defects; `rendercheck` OK
  after fixing an unescaped YAML escape in a source locator.
- Open gaps: none.

### Completed: `thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators`

- Claim as scaffolded: uniform a priori estimate + one bijective base point
  imply bijectivity of the whole affine family, with inverse norm $\le C$.
  Proof: injectivity, sequential closedness, Neumann-series openness, elementary
  propagation on $[0,1]$. No compactness/reflexivity. AC_ω only.
- Sources: Schikorra §8.9 pp. 153-155; Simon Lecture 12 pp. 136-137;
  Villavert §2.6 pp. 65-68.
- Deps: unchanged from scaffold.
- Checks: `precheck` PASS after adopting canonical numbering; `proof-layout`
  4 steps 0 defects; `rendercheck` OK.
- Open gaps: none.

### Completed: `cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives`

- Claim: the continuous compactly supported source
  $f=h(|x|)\cos2\theta$ with $h(r)=1/\log(1/r)$ has $Nf\in C^1$, is $C^2$
  away from $0$, and $\partial_1\partial_1Nf(0)$ does not exist; the truncated
  Hessian integrals diverge like $\tfrac12\log\log(1/\varepsilon)$.
- Sources: Wang §1 p. 1; Teschl §5.3 pp. 119-121; Hunter §2.7 pp. 37-39.
- Deps added (published): `thm-differentiation-under-the-integral-sign`,
  `lem-smooth-bump-between-concentric-euclidean-balls`, `cor-mean-value-theorem`,
  `def-ck-and-multi-index-notation-in-several-variables`. Level 0 unchanged.
- Structural repair: counterexample items carry their numbered steps in the
  `## Counterexample` section (no `## Proof` section); the file was reorganised
  accordingly. Checks: `precheck` PASS; `proof-layout` 6 steps 0 defects;
  `rendercheck` OK.
- Open gaps: none.

### Completed: `ex-riesz-transform-formula-for-second-laplacian-derivatives`

- Claim: $\partial_i\partial_ju=R_iR_j(-\Delta u)$ for Schwartz $u$, symbol
  $-\xi_i\xi_j/|\xi|^2$, $L^p$ bound $C_{n,p}^2\|\Delta u\|_{L^p}$, and the
  $n=1$ consistency $R_1^2=-\mathrm{id}$.
- Sources: Schikorra §7.6 pp. 137-139; Villavert Theorem 3.7 Step 1 pp. 104-105;
  Wang §1 pp. 1-2.
- Deps: unchanged. Example structure uses `## Example` + `## Verification`.
- Checks: `precheck` PASS after adopting canonical numbering; `proof-layout`
  4 steps 0 defects; `rendercheck` OK.
- Open gaps: none.

Next action at that checkpoint: `def-uniformly-elliptic-nondivergence-operator` (level 1, A). All later items were then authored and are checkpointed below.


## Checkpoints for the remaining items (8-30)

### Completed: `def-uniformly-elliptic-nondivergence-operator` (level 1, A)

- Claim: the nondivergence operator $L=a^{ij}\\partial_i\\partial_j+b^i\\partial_i+c$, the symmetry convention for $A$, the ellipticity constants and the bounded/Hölder coefficient bounds used by every estimate on the page.
- Sources: Schikorra §7.5-7.6; Villavert §1, §3.2.1; Simon Lecture 12. Deps unchanged from the scaffold. Checks: rendercheck OK; precheck not applicable (definition). Decision: accept.

### Completed: `lem-holder-interpolation-with-an-epsilon-loss` (level 1, A)

- Claim: the three scale-invariant $\varepsilon$-loss inequalities (full norm absorption, top-derivative absorption, $\alpha/\\beta$ interpolation) on a ball.
- Sources: Schikorra §8.1 Ex. 8.4-8.6; Simon Lecture 12; Villavert §1.4. Deps unchanged. Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK. Decision: accept.

### Completed: `lem-interior-w-two-p-regularity-for-the-laplacian` (level 1, A)

- Claim: the interior $W^{2,p}$ estimate for $\\Delta$ on a ball via the constant-coefficient model problem and freezing; strict range $1<p<\\infty$.
- Sources: Teschl Ch. 10; Schikorra §7.6; Villavert §3.2. Deps unchanged. Checks pass. Decision: accept.

### Completed: `thm-holder-spaces-on-bounded-domains-are-banach-spaces` (level 1, A)

- Claim: completeness of the closure norm, the limit identification of the derivatives, and closedness of the zero-boundary subspace; Countable Choice.
- Deps: added published `thm-uniform-derivative-limit-on-a-closed-interval` (item and manifest). Checks pass. Decision: accept.

### Completed: `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` (level 2, A)

- Claim: the shear chart of a $C^{2,\\alpha}$ boundary, the pullback operator, the two-sided $C^{2,\\alpha}$ norm equivalence, and the transformed ellipticity constants.
- Deps unchanged. Checks pass. Decision: accept.

### Completed: `lem-cutoff-commutator-for-local-w-two-p-estimates` (level 2, A)

- Claim: the pointwise identity $L(\\eta u)=\\eta Lu+2a^{ij}\\partial_i\\eta\\partial_ju+(a^{ij}\\partial_i\\partial_j\\eta+b^i\\partial_i\\eta)u$ and its $L^p$ bound with no second derivative of $u$.
- Deps: added `lem-weak-product-rule-for-bounded-sobolev-functions` and `def-ck-and-multi-index-notation-in-several-variables` (item and manifest). Checks pass. Decision: accept.

### Completed: `lem-freezing-coefficients-and-schauder-error-estimate` (level 2, A)

- Claim: for every $\\varepsilon$ a radius $\\rho$ with $\\rho^2\\|(L-L_0)u\\|^*_{0,\\alpha;B_\\rho}\\le\\varepsilon\\|u\\|^*_{2,\\alpha;B_\\rho}+C_\\varepsilon\\sup|u|$, using only the $C^{0,\\alpha}$ coefficient bounds.
- Deps unchanged. Checks pass. Decision: accept.

### Completed: `thm-interior-schauder-estimate-for-uniformly-elliptic-equations` (level 3, A)

- Claim: the interior $C^{2,\\alpha}$ a priori estimate with the scaled norms; constant depending on the dimensionless coefficient bounds; Countable Choice only.
- Sources: Schikorra §8.5-8.6; Villavert §3.2.1; Simon Lecture 12. Deps unchanged. Checks pass. Decision: accept.

### Completed: `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` (level 3, A)

- Claim: the interior $W^{2,p}$ estimate with continuous principal coefficients, via freezing and the constant-coefficient model estimate; no assertion for merely measurable coefficients.
- Deps unchanged. Checks pass. Decision: accept.

### Completed: `cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls` (level 3, B)

- Claim refuted: a bounded piecewise constant uniformly elliptic coefficient has oscillation $2b$ at every scale and infinite $\\alpha$-Hölder seminorm, so no freezing radius absorbs the error; the freezing lemma with its $C^{0,\\alpha}$ hypothesis is untouched.
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK (after adopting the checker's canonical numbering 1.1,2.1,...,5.1). Decision: accept.

### Completed: `thm-boundary-schauder-estimate-for-the-dirichlet-problem` (level 4, A)

- Claim: the global boundary $C^{2,\\alpha}$ a priori estimate for $Lu=f$ with $u=g$ on $\\partial\\Omega$, $C=g$-extension subtracted, finite cover with a Lebesgue number, interior estimate plus the quoted zero-data half-box boundary estimate [F4]; Countable Choice.
- Structural note: the scaffold's partition-of-unity absorption was replaced by a finite cover with a Lebesgue number, so `lem-holder-interpolation-with-an-epsilon-loss` was removed from the deps; the quoted local estimate [F4] (Wang Theorem 1' plus the §2 freezing scheme; Simon Lemma 2/Theorem 20) is the only heavy input and is flagged as quoted in the item. Manifest deps updated and reported below for Step 4.
- Checks: precheck PASS (canonical numbering), proof-layout 6 steps 0 defects, rendercheck OK. Decision: repaired (dependency deviation).

### Completed: `thm-global-w-two-p-dirichlet-estimate` (level 4, A)

- Claim: the a priori global $W^{2,p}$ estimate on a bounded $C^{1,1}$ domain, via an explicit finite cover with smooth bumps, the interior $W^{2,p}$ estimate, the half-space Dirichlet estimate for constant coefficients by odd reflection (fact [F4], with the reflection/W^{2,p} computation included), freezing with one uniform radius from the modulus of continuity of $A$, the cutoff commutator and the doubling-ball interpolation absorption.
- Deps: added `def-wkp-zero-as-a-sobolev-closure` and `lem-smooth-bump-between-concentric-euclidean-balls` (item and manifest). Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK. Decision: accept.

### Completed: `cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one` (level 4, B)

- Claim refuted: for the compactly supported Lipschitz source $f=\\chi(r)r\\cos3\\theta$ and $p=-\\tfrac16r^3\\log r\\cos3\\theta$ one has $-\\Delta p=f$ pointwise, $Nf-p$ harmonic (real analytic), $\\partial_{11}p(x_1,0)=-x_1\\log x_1-\\tfrac56x_1$, and $|\\partial_{11}Nf(x_1,0)-\\partial_{11}Nf(0)|/x_1\\to\\infty$: $[D^2Nf]_{0,1}=\\infty$ while $\\|f\\|_{C^{0,1}}<\\infty$, so the endpoint estimate fails.
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK. Decision: accept.

### Completed: `ex-schauder-scaling-on-a-quadratic-poisson-solution` (level 4, B)

- Claim: for $u=c(R^2-|x-x_0|^2)/(2n)$, $-\\Delta u=c$, $u=0$ on $\\partial B_R$, and on $B_{R/2}$: $\\sup|u|=|c|R^2/(2n)$, $\\sup|Du|=|c|R/(2n)$, $|D^2u|=|c|/n$, $[D^2u]=0$, so $\\|u\\|^*_{2,\\alpha;B_{R/2}}=|c|R^2/n$ and the two sides of the estimate are both proportional to $|c|R^2$; the dilation identity is verified and dropping the $R^2$ weight on the force breaks the balance as $R\\to\\infty$.
- Statement repair: the scaffolded fractions ($3/8$ and $7/8$) did not match the norms over the inner ball; the constants were recomputed. Reported below for Step 4.
- Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK. Decision: repaired.

### Completed: `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate` (level 5, A)

- Claim: injectivity of the homogeneous strong problem upgrades the a priori estimate to $\\|u\\|_{W^{2,p}}\\le C\\|Lu\\|_{L^p}$, via the normalized contradiction and the three Rellich-Kondrachov branches at $q=p$.
- Deps: added `thm-extension-theorem-for-bounded-smooth-domains` and `def-wkp-zero-as-a-sobolev-closure`; then, after the contract pass, `def-bounded-c-k-domain-and-boundary-charts` (needed because fact [F3] cites it).
- Note: this item consumes three in-run suppliers that were unfinished at entry (`thm-rellich-kondrachov-for-p-less-than-n`, `...-at-the-critical-source-exponent`, `thm-morrey-rellich-compactness-for-p-greater-than-n`); all three are now authored by their batches and their statements were inspected, so the decision can be accept. Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK. Decision: accept.

### Escalated: `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large` (level 5, A)

- Claim: the $W^{2,p}$-to-Hölder implications (i) $p>n/2$: $C^{0,\\gamma}$ for $\\gamma<\\min\\{1,2-n/p\\}$; (ii) $p>n$: $C^{1,\\gamma}$ for $\\gamma<1-n/p$; (iii) $p>n/(1-\\alpha)$: $C^{1,\\alpha}$; plus the cube witness $u=(x_1)_+^2$ showing no finite $p$ gives $C^{2,\\alpha}$.
- Supplier reconciled during the dispatch: batch 4 authored `thm-higher-order-sobolev-embedding` while this pair was in flight. Its statement was read (cases $kp<n$, $kp=n$, $kp>n$ with the $C^{m,\alpha}$ representative and constant) and matches the three uses at steps 2.1, 2.2 and 2.3 verbatim; the proof-contract citation for it was regenerated and the strict contract gate is clean. The decision receipt nevertheless remains `escalate` because the decision tool reserves the escalate-to-accept transition to the owner; this is now a formal owner resolution with no remaining content gap.

### Escalated: `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian` (level 5, A)

- Claim: for $n<p<\\infty$ and a bounded $C^{2,\\alpha}$ domain, a weak solution $u\\in H^1_0$ of $-\\Delta u=f$, $f\\in L^p$, lies in $W^{2,p}\\cap W^{1,p}_0$ with $\\|u\\|_{W^{2,p}}\\le C(\\|f\\|_p+\\|u\\|_p)$.
- Proof: the shifted problem $(\\lambda-\\Delta)z=h$ solved strongly at each of a finite deterministic list of exponents (Haller-Dintelmann Theorem 19.7, quoted with the exact statement verified against the source), energy uniqueness identifies $z$ with $u$, and the higher-order embedding raises the exponent until $p$.
- Supplier reconciled during the dispatch: batch 4 authored `thm-higher-order-sobolev-embedding`; its cases (1) $kp<n$, (2) $kp=n$, (3) $kp>n$ supply exactly the $k=1$ start and the $k=2$ bootstrap used at steps 1.1 and 3.1, and the proof-contract citation was regenerated (strict contract clean). The receipt remains `escalate` pending the owner's formal resolution, which the tool reserves to the owner.

### Completed: `cex-boundary-w-two-p-regularity-needs-c-one-one-type-control` (level 5, B)

- Claim refuted: on the reentrant sector $\\Omega_\\omega$, $\\omega\\in(\\pi,2\\pi)$, the localized harmonic profile $v=\\zeta r^\\gamma\\sin(\\gamma\\theta)$, $\\gamma=\\pi/\\omega$, is a weak solution of $-\\Delta v=f$ with $f\\in C^\\infty\\cap L^\\infty$ and $v\\in H^1_0$, but $|D^2v|\\asymp r^{\\gamma-2}$ so $v\\notin W^{2,p}$ exactly for $p\\ge 2/(2-\\gamma)=2\\omega/(2\\omega-\\pi)$; the a priori estimate is untouched.
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK. Decision: accept.

### Completed: `rem-schauder-and-sobolev-estimates-are-different-scales` (level 6, A)

- Claim: the two-way comparison $C^{2,\\alpha}\\subseteq W^{2,p}$ (bounded domain, strict) with no reverse inclusion (cube witness), the different data classes, and the endpoint restrictions.
- Statement refinement: the $p=1$ and $p=\\infty$ endpoints are described as outside the range of the multiplier argument, and no falsity is asserted for them; the $\\alpha=1$ failure is referenced to the companion witness. Reported below for Step 4.
- Checks: precheck not applicable (remark), rendercheck OK. Decision: repaired.

### Escalated: `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` (level 8, A)

- Claim: the weak Dirichlet problem for the Laplace operator on a bounded $C^{2,\\alpha}$ domain with $f\\in C^{0,\\alpha}$, $g\\in C^{2,\\alpha}$ has a unique weak solution, which is classical: $u\\in C^{2,\\alpha}(\\bar\\Omega)$, $-\\Delta u=f$ pointwise, $u=g$ on the boundary, with the Schauder bound.
- Proof: reduction to zero boundary data, McShane extension and mollification of $F$, smoothing weak solutions, uniform $W^{2,p}$ bounds (weak-global theorem), interior $C^\\infty$ by Newtonian potential plus Weyl regularity, barrier bound from the maximum principle, uniform $C^{2,\\alpha}$ bound from the boundary Schauder estimate, and Arzela-Ascoli identification of the limit.
- Open obligation: `thm-higher-order-sobolev-embedding` (batch 4, no item file) is consumed at step 3.1 (the $C^{1,\\gamma}$ representative and sup bound). Decision escalated.

### Completed: `thm-global-schauder-estimate-and-classical-dirichlet-solvability` (level 9, A)

- Claim: with every $L_t=tL+(1-t)\\Delta$ injective on $X$, all $L_t$ are bijective, and every $f\\in C^{0,\\alpha}$, $g\\in C^{2,\\alpha}$ admit a unique classical solution of $Lu=f$, $u=g$ with the uniform Schauder bound.
- Proof: $X$ Banach, uniform boundary Schauder estimate with the supremum term, removal of the supremum term by the normalized contradiction and Arzela-Ascoli (using the injectivity hypothesis), the bijective base point $L_0=\\Delta$ (maximum principle plus the global Schauder regularity theorem), the method of continuity, and subtraction of a $C^{2,\\alpha}$ extension of $g$.
- Deps: added `thm-weak-maximum-principle-for-the-laplacian` and `cor-real-and-euclidean-vector-valued-ascoli-arzela` (item and manifest). Checks: precheck PASS, proof-layout 7 steps 0 defects, rendercheck OK. Decision: accept.

### Completed: `ex-method-of-continuity-for-a-constant-coefficient-path` (level 10, B)

- Claim: the model family $L_t=-u''-tcu$ on $(0,\\pi)$ has bijectivity set $I=\\{t:tc\\notin\\{k^2\\}\\}$; for $tc<1$ the sine series gives the inverse with $\\|L_t^{-1}\\|\\le C(1-tc)^{-1}$; at $tc=k_0^2$ the kernel is $\\mathrm{span}\\{\\sin(k_0x)\\}$ and the range is the orthogonal hyperplane; openness of $I$ and relative closedness on injective subintervals are checked directly, and the uniform estimate fails across a spectral parameter.
- Statement repair: the convergence claims were rewritten so that only the uniformly convergent parts are asserted (the equation is identified by termwise differentiation of the partial sums; the direct series bounds give the $C^{2,\\alpha}$ estimate and the signed splitting estimate gives the H\\\"older bound).
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK. Decision: repaired.

## Checks actually run (batch 13, after all edits)

- `node tools/tsx-run.mjs tools/precheck.mts <30 owned items>`: 27 proof-bearing items checked, 0 failing; the 3 non-proof items (2 definitions, 1 remark) are not applicable.
- `node tools/rendercheck.mjs <30 owned items>`: OK for all 30 (no wikilink inside math, no delimiter faults, every span parses under the real KaTeX, every frontmatter block parses).
- `node tools/proof-layout.mjs <30 owned items>` (single batched command after the final edits): 30 items, 150 steps, 0 defects.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-13.pages.json`: 30 items, 0 error(s).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-13.pages.json` (full, not `--manifest-only`): 30 scoped items, 0 error(s), 0 warning(s). The `--manifest-only` variant reports the run-level `batch-item-already-exists` pattern (the canonical plan does not carry these frontier pages; sibling batches 11/12 show it too) and the expected `batch-dependency-missing` rows for the one unwritten supplier; neither is a defect of the authored content.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-13.proof-contracts.json --strict`: 30/30 items checked, **0 error(s)**, 0 warning(s). The three earlier `citation-fact-uncontracted` rows disappeared once batch 4 authored `thm-higher-order-sobolev-embedding` and the citations were regenerated; citations, step inputs and the 8-case boundary worksheets are all clean.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`: no error for any batch-13 item; the 34 errors reported for the run belong to other pairs still in flight (bochner/Plancherel and Hardy-space batches).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-13.coverage.json --require-destination`: 2 pages, 60 harvested results, 0 error(s). The three coverage rows that were missing destinations (`def-uniformly-elliptic-nondivergence-operator`, `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`, `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`) were added against the Schikorra source, so every one of the 30 authored items is now a harvested destination.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`: OK, declared page order acyclic and consistent, no item-level cycles, forward references, B-page dependencies or unresolved ids among the pages with item lists.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope`: the pair scope receipt was refreshed with `record-scope --decision sufficient` and the pair no longer appears in the open scope work list.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`: of the 30 owned items, 27 are closed with `accept`/`repaired` receipts at confidence 1 and 3 remain open as owner-held escalations (the consumers of `thm-higher-order-sobolev-embedding`), exactly as the dispatch prescribes.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs record-item ...` was used for every item with its examined dependency list; no `--owner` flag and no judge/audit stamps were added.

## Published concerns and Step-4 amendments

1. **Step-3a F1 (coverage bookkeeping).** The design's primary backing ([E]/[ACM]) is still not reflected in the coverage ledger; unchanged by this dispatch and left for the owner/Step 4.
2. **Statement repairs for the plan record (Step 4).**
   - `lem-lp-interpolation-absorbs-lower-order-derivatives`: the ball form is now the doubled-ball form $\\|Du\\|_{L^p(B_R)}\\le\\varepsilon R\\|D^2u\\|_{L^p(B_{2R})}+CR^{-1}\\|u\\|_{L^p(B_{2R})}$; the scaffolded undoubled form would need the Sobolev extension theorem (Axiom of Choice). Manifest statement and deps were updated.
   - `ex-schauder-scaling-on-a-quadratic-poisson-solution`: the constants of the statement were corrected to $\\sup|u|=|c|R^2/(2n)$, $\\|u\\|^*_{2,\\alpha;B_{R/2}}=|c|R^2/n$ and the right side $|c|R^2(1/(2n)+1)$; the radius-balance claim is preserved.
   - `rem-schauder-and-sobolev-estimates-are-different-scales`: the endpoint sentence now distinguishes the genuine $\\alpha=1$ failure from the $p=1,p=\\infty$ endpoints, which are outside the range of the multiplier argument used here and are not claimed to fail.
   - `thm-boundary-schauder-estimate-for-the-dirichlet-problem`: dependency deviation (partition-of-unity absorption replaced by a finite cover with a Lebesgue number; `lem-holder-interpolation-with-an-epsilon-loss` dropped from item and manifest deps).
   - `def-holder-spaces-c-k-alpha-and-their-scaled-norms`: boundary-extension class added (resolves Step-3a F2); dep on `def-bounded-c-one-domain-boundary-charts-and-outward-normal` added.
3. **Manifest dependency synchronisations.** Every batch-13 item's manifest `deps` now equals its item frontmatter `deps`; the additions are the bump/closure/extension/Arzela-Ascoli/maximum-principle items named in the checkpoints above. The recorded `dependency_level` of every batch-13 item still matches the level recomputed from the updated deps (checked with `item-dependency-levels check`).
4. **Published B-page placement hazard (recorded earlier, no repair).** `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` sits on a companion page while its content is used as a supplier by A-page consumers elsewhere; this is a placement/bookkeeping issue for the serial reconciler, not a mathematical defect, and it is not touched by this dispatch.
5. **Run-level observations (not batch-13 defects).** `content-policy --manifest-only` on this batch reports `batch-item-already-exists` for all 30 items because the canonical `plan-spec.json` does not carry these frontier pages (the same pattern appears for sibling batches 11 and 12); the full `content-policy` run over the same batch is clean (30 items, 0 errors, 0 warnings), as are precheck, rendercheck, proof-layout, coverage, dependency levels and the strict proof contracts. The earlier `batch-dependency-missing` rows for `thm-higher-order-sobolev-embedding` are gone now that batch 4 has authored the supplier.

## Handoff

- **Completed IDs (27 closed, `accept` or `repaired`, confidence 1).** `def-holder-spaces-c-k-alpha-and-their-scaled-norms` (repaired), `thm-holder-spaces-on-bounded-domains-are-banach-spaces`, `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials` (repaired), `def-uniformly-elliptic-nondivergence-operator`, `lem-holder-interpolation-with-an-epsilon-loss`, `lem-freezing-coefficients-and-schauder-error-estimate`, `thm-interior-schauder-estimate-for-uniformly-elliptic-equations`, `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms`, `thm-boundary-schauder-estimate-for-the-dirichlet-problem` (repaired), `thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators`, `thm-global-w-two-p-estimate-for-the-laplacian-on-rn`, `lem-lp-interpolation-absorbs-lower-order-derivatives` (repaired), `lem-cutoff-commutator-for-local-w-two-p-estimates`, `lem-interior-w-two-p-regularity-for-the-laplacian`, `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`, `thm-global-w-two-p-dirichlet-estimate`, `thm-global-schauder-estimate-and-classical-dirichlet-solvability`, `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate`, `rem-schauder-and-sobolev-estimates-are-different-scales` (repaired), `ex-schauder-scaling-on-a-quadratic-poisson-solution` (repaired), `cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives`, `cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one`, `ex-riesz-transform-formula-for-second-laplacian-derivatives`, `cex-boundary-w-two-p-regularity-needs-c-one-one-type-control`, `ex-method-of-continuity-for-a-constant-coefficient-path` (repaired), `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates`, `cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls`.
- **Open (3, escalated to the owner, content-reconciled).** `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large`, `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`, `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`. Each is fully authored; the batch-4 supplier `thm-higher-order-sobolev-embedding` was authored while this pair was in flight, its statement was read and matched against every consuming step, the proof-contract citations were regenerated and the strict contract gate is now clean (0 errors). The three receipts remain `escalate` only because the decision tool reserves the escalate-to-accept transition to the owner; the owner can now close them with a reopen/accept pair, and no mathematical or dependency work remains behind them.
- **New prerequisites added.** None outside the scaffold inventory: every prerequisite used was either already published or planned in this run (`def-wkp-zero-as-a-sobolev-closure`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-extension-theorem-for-bounded-smooth-domains`, `thm-uniform-derivative-limit-on-a-closed-interval`, `cor-real-and-euclidean-vector-valued-ascoli-arzela`, `thm-weak-maximum-principle-for-the-laplacian`, `def-bounded-c-k-domain-and-boundary-charts`, `thm-arzela-ascoli-for-real-ck`), and each addition is registered in the item frontmatter, the manifest deps and the proof contracts.
- **Supplier reconciliation notes.** The three in-run suppliers that were unfinished at entry and are now authored (`thm-rellich-kondrachov-for-p-less-than-n`, `thm-rellich-kondrachov-at-the-critical-source-exponent`, `thm-morrey-rellich-compactness-for-p-greater-than-n`, together with `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`, `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`, `lem-classical-solutions-satisfy-the-weak-formulation`, `def-weak-dirichlet-solution-for-a-divergence-form-operator`) were read at their statements and their uses in `cor-injectivity-...`, `thm-global-schauder-regularity-...` and `thm-weak-global-...` were matched to the statements; no discrepancy was found beyond the one still-missing embedding supplier.
- **Files written.** The 30 item files, `library/pde/schauder-and-lp-elliptic-estimates.md`, `library/pde/schauder-and-lp-elliptic-estimates-examples.md`, the updated `research/frontier-39-analysis-30-batch-13.pages.json`, `research/frontier-39-analysis-30-batch-13.proof-contracts.json`, the scope and item receipts under `research/frontier-39-analysis-30-step3b-*.json`, and this report. No sibling pair, published item, ledger or owner-held decision was modified.

## Scope decisions refreshed after the local repairs

The entry scope assumption that all statements were final was invalidated by five local statement-level repairs (the boundary-extension class, the doubled-ball interpolation form, the corrected scaling constants, the monotonicity-free boundary proof, and the refined endpoint sentence). The pair scope receipt was therefore re-recorded with `sufficient` after the statements settled, with the only open supplier handled as escalation rather than as a scope change. Genuine scope changes (adding or removing planned items) were neither needed nor made: the scaffold inventory of 30 items was authored in full.
