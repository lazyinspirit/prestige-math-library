# Step 3b authoring record — `interior-and-boundary-sobolev-elliptic-regularity`

- Run: `frontier-39-analysis-30`, batch 12, role alpha-high (Step 3b pair
  auditor and author).
- A page: `interior-and-boundary-sobolev-elliptic-regularity` (order 458.033,
  category `pde`, `requires` = `fredholm-elliptic-problems-and-the-elliptic-spectrum`).
- B page: `interior-and-boundary-sobolev-elliptic-regularity-examples`
  (order 458.034, `requires` = the A page).
- Dispatch: `research/frontier-39-analysis-30-step3b-pair-interior-and-boundary-sobolev-elliptic-regularity-2589c8591a8e578f.task.md`.
- Scope receipt (Step 3a): `research/frontier-39-analysis-30-step3a-review-interior-and-boundary-sobolev-elliptic-regularity.json`
  — `sufficient`; pair report `research/frontier-39-analysis-30-step3a-pair-interior-and-boundary-sobolev-elliptic-regularity.md`.
- Status at entry: **authoring in progress.**

## Owned IDs (39) — dispatch order

Authoring order is the dispatch's dependency-level order (level, page, ID);
levels are the scaffold `dependency_level` values and are recomputed from
actual dependencies before handoff.

| # | level | id | page |
|---|-------|----|------|
| 1 | 0 | `def-first-difference-quotient` | A |
| 2 | 0 | `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates` | A |
| 3 | 1 | `lem-difference-quotient-integration-by-parts` | A |
| 4 | 2 | `def-local-weak-solution-for-a-divergence-form-operator` | A |
| 5 | 2 | `lem-cutoff-difference-quotient-commutator-estimate` | A |
| 6 | 2 | `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative` | A |
| 7 | 3 | `lem-localisation-identity-for-a-divergence-form-weak-solution` | A |
| 8 | 3 | `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts` | A |
| 9 | 3 | `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators` | A |
| 10 | 3 | `thm-caccioppoli-inequality-for-weak-elliptic-solutions` | A |
| 11 | 3 | `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one` | A |
| 12 | 4 | `cor-scaled-caccioppoli-inequality-on-concentric-balls` | A |
| 13 | 4 | `lem-c-two-boundary-flattening-transforms-uniform-ellipticity` | A |
| 14 | 4 | `lem-tangential-difference-quotient-test-function` | A |
| 15 | 4 | `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one` | A |
| 16 | 5 | `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` | A |
| 17 | 5 | `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations` | A |
| 18 | 6 | `thm-interior-h-two-regularity-for-divergence-form-equations` | A |
| 19 | 7 | `lem-nested-domain-induction-for-interior-elliptic-derivatives` | A |
| 20 | 7 | `lem-normal-second-derivative-recovered-from-the-elliptic-equation` | A |
| 21 | 7 | `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity` | B |
| 22 | 7 | `cex-interior-regularity-does-not-imply-boundary-regularity` | B |
| 23 | 7 | `ex-piecewise-smooth-coefficient-produces-limited-regularity` | B |
| 24 | 7 | `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` | B |
| 25 | 8 | `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates` | A |
| 26 | 8 | `thm-interior-h-k-plus-two-elliptic-regularity` | A |
| 27 | 9 | `cor-smooth-data-give-smooth-interior-solutions` | A |
| 28 | 9 | `thm-global-h-two-dirichlet-regularity` | A |
| 29 | 9 | `cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives` | B |
| 30 | 9 | `ex-bootstrapping-a-smooth-poisson-problem` | B |
| 31 | 10 | `thm-higher-order-boundary-regularity-for-dirichlet-problems` | A |
| 32 | 10 | `cex-boundary-h-two-regularity-needs-domain-regularity` | B |
| 33 | 11 | `cor-smooth-weak-dirichlet-solutions-are-classical` | A |
| 34 | 11 | `rem-regularity-estimates-do-not-create-boundary-compatibility` | A |
| 35 | 11 | `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold` | B |
| 36 | 12 | `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth` | A |
| 37 | 12 | `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values` | B |
| 38 | 13 | `cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness` | A |
| 39 | 14 | `cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity` | B |

## Entry obligations

1. **Author all 39 items and both pages**; register them in the batch-12
   manifest rows (already present from Step 1), the pair proof-contract file
   `research/frontier-39-analysis-30-batch-12.proof-contracts.json`, and
   `library/pde/`; record a current item decision for each.
2. **Unfinished in-run suppliers.** Every in-run supplier named by the
   scaffold is currently unauthored on disk (0 of the run's 919 scaffold items
   exist at entry). The load-bearing ones to inspect are the batch-4
   (`sobolev-poincare-and-morrey-inequalities`),
   batch-10 (`lax-milgram-and-weak-elliptic-solutions`) and batch-11
   (`fredholm-elliptic-problems-and-the-elliptic-spectrum`) drafts, plus this
   pair's own items. Exact supplier→consumer→step flags are kept in the
   supplier reconciliation section below; consumers are authored normally and
   their decisions stay escalated only while a supplier file is absent at
   handoff.
3. **Pre-splice findings to recheck.** The 45 item-level edges into
   `lax-milgram-and-weak-elliptic-solutions` and
   `sobolev-poincare-and-morrey-inequalities` licensed only transitively by
   the plan; the choice-label reconciliation for A29/B10 (contextual citation
   of the AC-carrying trace-lifting corollary); the half-space orientation
   convention (`def-bounded-c-k-domain-and-boundary-charts` flattens to
   $t<0$; the half-space model lemmas use $x_n>0$ — the published trace item
   reflects $t\mapsto-t$); A22's "strong solution" qualifier.
4. **Checks to run before handoff**: explicit-path precheck, rendercheck and
   proof-layout for all 39 items; content-policy item mode; strict proof
   contracts; `manifest-deps`; `item-dependency-levels check`; `depcheck`;
   `fwdcheck`/`extcheck`; `validate-plan research/plan-spec.json`;
   coverage-checklist; source-fetch-check. Report actual outputs.
5. **Decisions.** `tools/step3-decisions.mjs record-item` with
   `accept`/`repaired`, confidence 1, examined dependency IDs, concrete
   evidence; `escalate` where a supplier is absent or a defect is unresolved.
   Never `--owner`, never judge/audit stamps.

## Conventions adopted for this pair (binding for every item)

- Ground field: `$\mathbb K\in\{\mathbb R,\mathbb C\}$`. The divergence-form
  weak formulation uses the *Hermitian* pairing of the published PDE-16 items
  (`a(u,v)=\sum\int a^{ij}D_ju\overline{D_iv}+\int b^iu\overline{D_iv}+\int cu\overline v`;
  check the exact published convention before use). Equations `Lu=f` are read
  as the weak identity `a(u,v)=\int f\overline v` for all test `v`.
- Difference quotients: `\delta_h^i u(x)=(u(x+he_i)-u(x))/h` on the shrunken
  domain `\Omega_{i,h}=\{x\in\Omega:x+he_i\in\Omega\}`; translation sign
  follows the published `def-translation-of-a-function-on-rn`
  (`\tau_hu(x)=u(x-h)`), so `u(x+he_i)=(\tau_{-he_i}u)(x)`; every quotient
  identity is an identity of a.e. classes.
- Half-space model lemmas are stated on `H=\{x_n>0\}`; boundary-chart items
  state the reflection explicitly when they pass to the published lower
  half-space convention.
- Choice: the scaffold's statement-level labels are preserved (Countable
  Choice for the Sobolev interfaces; full AC only where an item genuinely
  consumes an AC-carrying supplier, which is tracked in the manifest notes).
  No proof introduces a choice principle its statement does not declare.
- Statements are the scaffold statements: every promised claim is preserved;
  repairs are local (hypotheses, well-definedness, notation, proof gaps) and
  are recorded.

## Checkpoints (item by item)

Appended as items are completed; each entry records: id, level, exact claim
and conventions, source locators, dependencies (examined), decisions, checks
run, open gaps, next action.

### Checkpoint 1 — `def-first-difference-quotient` (level 0)

- **Claim**: difference quotient `\delta_h^iu` on the shrunken domain
  `\Omega_{i,h}`; difference-quotient vector; tangential quotients on the
  upper half-space; warnings (only on the shrunken set; no normal quotient by
  extension across the boundary for `H^1_0` classes).
- **Conventions**: `\tau_{he_i}u(x)=u(x+he_i)` is the translate of the
  published convention; classes read a.e.
- **Suppliers read**: `def-locally-integrable-function-as-a-regular-distribution`,
  `def-translation-of-a-function-on-rn` (sign convention `u(x-h)`),
  `def-euclidean-upper-half-space-and-its-boundary` (published item uses
  `\mathbb H^n=\{x^n\ge0\}`; this pair writes `H=\{x_n>0\}`),
  `def-countable-choice`.
- **Sources**: [H] App. 4.C Definition 4.51, printed p. 124; [Si] Lecture 6
  difference-quotient notation, printed pp. 58–62.
- **Repair (scaffold defect)**: the scaffold wrote
  `\tau_{he_i}u(x):=u(x+he_i)` and simultaneously identified it with the
  published `\tau_hu(x)=u(x-h)`. These are inconsistent; the item fixes the
  published convention `\tau_{-he_i}u(x)=u(x+he_i)` and records it. All later
  items of the pair use this convention; the scaffold's product-rule and
  commutator statements with the opposite sign are repaired in A2/A3.
- **Added deps** (published, well-definedness of the a.e. class reading):
  `def-l-p-space-as-a-quotient-by-null-functions`,
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`.
- **Checks run**: `rendercheck` OK (after fixing a multiline display);
  `precheck` `0 checked, 0 failing`; `proof-layout` `0 steps, 0 defects`.
- **Status**: authored and clean; `dependency_level: 0` recorded in the item
  frontmatter and in the manifest row.

### Checkpoint 2 — `lem-difference-quotient-integration-by-parts` (level 1)

- **Claim**: (i) the exact two-domain integration-by-parts identity
  `\int_{\Omega_{i,h}}\delta_h^iu\,v=-\int_{\Omega_{i,-h}}u\,\delta_{-h}^iv
  +\frac1h(\int_{\Omega_{i,-h}}uv-\int_{\Omega_{i,h}}uv)`, with the
  common-domain corollary (compact support / translation-invariant domain) and
  the `\mathbb R^n`, `L^p`–`L^{p'}` form; (ii) the product rule in both
  correct shifted forms; (iii) commutation of `\delta_h^i` with weak
  derivatives.
- **Repairs (scaffold defects)**: (a) the scaffold's second product-rule
  equality `(\delta_h^iu)v+u(\delta_h^iv)` is algebraically wrong; replaced by
  the two correct forms `(\tau_{-he_i}u)\delta_h^iv+(\delta_h^iu)v
  =u\delta_h^iv+(\delta_h^iu)(\tau_{-he_i}v)`. (b) The scaffold cited
  `[[def-sobolev-conjugate-exponent]]` for the Hölder dual exponent; replaced
  by the published `def-conjugate-exponents`. (c) The scaffold stated the
  identity on `\Omega` without the two shrunken domains; the exact two-domain
  form is now stated, and the common-domain corollary keeps the scaffold's
  compact-support instance.
- **Suppliers read**: `def-first-difference-quotient` (own item),
  `cor-c-one-change-of-variables-for-l-one-functions`,
  `thm-holder-inequality-for-integrals`, `def-weak-derivative-of-a-locally-integrable-function`,
  [H] Proposition 4.52 and its proof (printed pp. 124–125, re-read in
  `/tmp/src/hunter.txt`), [L] (5.6) printed pp. 108–110.
- **Checks run**: `rendercheck` OK; `precheck` clean (after adopting the
  terminal-layer renumbering `4.1`); `proof-layout` `6 steps, 0 defects`.
- **Status**: authored and clean; `dependency_level: 1`.

### Checkpoint 3 — `def-local-weak-solution-for-a-divergence-form-operator` (level 2)

- **Claim**: `u\in H^1(\Omega)` is a local weak solution of `Lu=f` (`f\in
  L^2_{\mathrm{loc}}`) iff `a(u,v)=\int f\bar v` for all
  `v\in C_c^\infty(\Omega)`; equivalently for every bounded
  `\Omega_2\Subset\Omega` and all `v\in H^1_0(\Omega_2)`; when additionally
  `f\in L^2(\Omega)` (e.g. bounded `\Omega`) equivalently for all
  `v\in H^1_0(\Omega)`; locality; no boundary condition.
- **Repair (well-definedness defect)**: the scaffold defined the identity
  against all `v\in H^1_0(\Omega)` while assuming only
  `f\in L^2_{\mathrm{loc}}(\Omega)`. On an unbounded `\Omega` the pairing
  `\int f\bar v` need not converge for `v\in H^1_0(\Omega)`, and the
  “equivalently all `C_c^\infty`” clause was asserted without its continuity
  argument. The item now takes `C_c^\infty` tests as the definition, proves
  the equivalence with `H^1_0(\Omega_2)` tests on bounded `\Omega_2\Subset\Omega`
  by density plus continuity of both sides, and records the `f\in L^2(\Omega)`
  case where the `H^1_0(\Omega)` form is well posed. All downstream uses test
  with compactly supported classes (e.g. `\zeta u`), so content is preserved.
- **Suppliers read**: `def-uniformly-elliptic-divergence-form-operator`
  (on disk, read), `lem-elliptic-form-is-well-defined-and-bounded` (scaffold),
  `def-wkp-zero-as-a-sobolev-closure` (published), `def-hk-and-hk-zero-notation`
  (published), [H] §4.11 (4.34)–(4.37) and Thm 4.27 (printed pp. 110–114),
  [T] §10.3 (printed pp. 240–241).
- **Checks run**: `rendercheck` OK; `precheck` n/a (0 checked);
  `proof-layout` `0 steps, 0 defects`.
- **Status**: authored and clean; `dependency_level: 2`.

### Cross-lane instructions issued after checkpoints 1–3

- All lanes were told the binding translation convention, the two product-rule
  repairs, the Hölder-conjugate repair, the single-line step format (with
  inline `$$...$$`), and the terminal-step layer pinning rule of the precheck.
- Lane B was told to use the A4 definition with its `C_c^\infty` /
  `H^1_0(\Omega_2)` equivalence, and to flag any use that needs the
  `H^1_0(\Omega)` form.

## Supplier reconciliation (updated as supplier files appear)

Every row is *provisional* until the supplier item file exists on disk and
its final statement has been read.

| supplier id | batch | consumer(s) in this pair | consuming step | state |
|-------------|-------|--------------------------|----------------|-------|
| `def-uniformly-elliptic-divergence-form-operator` | 10 | A4 A6 A7 A9 A13 A14 A15 A16 A19 A21 A24 A28 B1 B2 B3 B5 B7 B8 B9 B10 | many | file absent |
| `def-weak-dirichlet-solution-for-a-divergence-form-operator` | 10 | A15 A18 A24 A25 A28 A29 B1 B3 B4 B5 B6 B7 B8 B9 B10 | many | file absent |
| `lem-elliptic-form-is-well-defined-and-bounded` | 10 | A6 A7 A11 A14 A15 A16 A19 A21 A24 A26 | many | file absent |
| `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` | 10 | B1 B6 | verification | file absent |
| `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` | 10 | A29 B10 | statement context | file absent |
| `def-sobolev-conjugate-exponent` | 4 | A2 A3 A5 A7 | many | file absent |
| `thm-higher-order-sobolev-embedding` | 4 | A18 A27 A28 B6 | final steps | file absent |
| `thm-morrey-inequality-for-p-greater-than-n` | 4 | A18 A27 A28 B6 | final steps | file absent |
| `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set` | 11 | A15 | density step | file absent |
| `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems` | 11 | A25 | alternative step | file absent |
| `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` | 11 | A25 | bounded-inverse step | file absent |
| `def-symmetric-elliptic-weak-eigenpair` | 11 | A28 | eigenpair step | file absent |

## Next action

Author `def-first-difference-quotient` (file write + precheck/rendercheck/
proof-layout), then checkpoint 2 in dispatch order.

## Checkpoints — B page (all 10 items authored by the lead) and lead A items

All items below pass `rendercheck`, `precheck` (clean, or not-applicable for
definitions/remarks without proof sections) and `proof-layout` (`0 defects`)
unless stated otherwise. Repairs to the scaffold claim/witness are listed
explicitly; every other statement follows the scaffold claim.

### B1 `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` (level 7)

- Instantiates the interior $H^2$ theorem for $-\Delta$ on a bounded $\Omega$:
  constants $\theta=1$, $M_a=1$, $M_b=M_c=M_1=0$, $f\in L^2(\Omega)$; the
  theorem's estimate is first applied on nested sets
  $\Omega'\Subset\Omega''\Subset\Omega$, then the local $L^2(\Omega'')$
  norms are bounded by the displayed global $L^2(\Omega)$ norms. Choosing
  $\Omega''$ from $\Omega',\Omega$ gives
  $\|u\|_{H^2(\Omega')}\le C(n,\Omega',\Omega)(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)})$.
- **Choice repair**: the scaffold invoked the AC-carrying existence theorem
  without stating AC. The item now states the Axiom of Choice for the
  existence clause and adds `def-axiom-of-choice`; the regularity conclusion
  uses only the solution property. (Batch notes' choice ledger is therefore
  corrected: B1 is also AC-carrying at statement level.)
- Added dep: `def-local-weak-solution-for-a-divergence-form-operator`
  (the weak Dirichlet solution is a local weak solution).

### B2 `ex-piecewise-smooth-coefficient-produces-limited-regularity` (level 7)

- Coefficient $a=2+x$ ($x<0$), $2+2x$ ($x>0$), $u$ the primitive of $1/a$:
  $u\in W^{2,\infty}(-1,1)\subseteq H^2$, $au'\equiv1$, $u$ is the local weak
  solution of $-(au')'=0$, and the difference quotients of $u'$ at $0$ have
  distinct one-sided limits $-1/4$, $-1/2$, so $u\notin C^2$.
- **Dep repair**: the scaffold listed the interior $H^2$ theorem; the direct
  $W^{2,\infty}$ computation makes it unnecessary, and it is now cited only
  in the statement/source notes with the dep kept (statement link). Dropped
  nothing else.

### B3 `cex-interior-regularity-does-not-imply-boundary-regularity` (level 7) — **witness repaired**

- **Confirmed scaffold defect**: the scaffold's witness on the punctured disc
  ($u=\log|x|$) is not in $H^1$, since $\int_{B_1}|\nabla\log|x||^2dx
  =2\pi\int_0^1r^{-1}dr=\infty$; it is therefore not an admissible weak
  solution, and in fact every $H^1$ harmonic function on $B_1\setminus\{0\}$
  extends smoothly (the $\log$ coefficient is forced to vanish), so the
  punctured disc admits no witness at all.
- **Repaired witness**: the slit disc $\Omega=S\cap B_1(0)$,
  $S=\mathbb C\setminus(-\infty,0]$, with $u=\operatorname{Im}R_2$,
  $R_2(z)=\exp(\operatorname{Log}z/2)$ the published slit-plane square-root
  biholomorphism; $u=r^{1/2}\sin(\theta/2)$ is $C^\infty$ and harmonic on
  $\Omega$, lies in $H^1$ ($|\nabla u|^2=r^{-1}/4$), is a local weak solution
  by the published Sobolev integration-by-parts lemma, and
  $\int_\Omega|D^2u|^2\ge\frac{\pi}{16}\int_0^1r^{-2}dr=\infty$. The
  boundary fails the $C^1$ graph condition at the slit tip, so interior
  smoothness still does not imply boundary regularity. The refuted statement
  is unchanged.

### B4 `cex-boundary-h-two-regularity-needs-domain-regularity` (level 10)

- Reentrant sector $S_\omega$, $\omega>\pi$, $\alpha=\pi/\omega$,
  $u=r^\alpha\sin(\alpha\theta)$: polar-Laplacian computation gives
  $\Delta u=0$; $u\in H^1$ and $u$ is a local weak solution (Sobolev IBP);
  $\int_{S_\omega}|u_{rr}|^2=\infty$ because $2\alpha-3\le-1$, so
  $u\notin H^2$. The sector is a bounded Lipschitz domain (a reflex wedge is
  the hypograph of the Lipschitz function $t\mapsto|t|$) but its boundary is
  not $C^1$ at the vertex, so Lipschitz cannot replace $C^2$.

### B5 `cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity` (level 14)

- $\Omega=(0,\pi)$, $Lu=-u''-u$, $u=\sin x$: the weak equation with datum $0$
  is verified by parts, $\|Lu\|_{L^2}=0$ while
  $\|u\|_{H^2}^2=3\pi/2$, and the kernel of the homogeneous problem is
  nontrivial, so the $L^2$ term cannot be removed without injectivity.

### B6 `ex-bootstrapping-a-smooth-poisson-problem` (level 9)

- $f\in C^\infty$, $u$ a local weak solution of $-\Delta u=f$: iterating the
  interior $H^{k+2}$ theorem gives $u\in H^m_{\mathrm{loc}}$ for every $m$;
  the published (AC-carrying) higher-order Sobolev embedding on balls gives a
  $C^\infty$ representative; the a.e. identity of the interior $H^2$ theorem
  upgrades to a pointwise identity for the smooth representative.
- Stated the Axiom of Choice and added `def-axiom-of-choice`; kept the
  scaffold's deps on the AC-carrying embeddings. **Dep repair**: the scaffold
  listed Morrey; the proof uses only the higher-order embedding (on a ball,
  which is an extension domain), and Morrey is no longer cited.

### B7 `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity` (level 7)

- $a=1_{(x>0)}+1$, $u=x$ ($x<0$), $x/2$ ($x>0$): $a$ is bounded measurable
  uniformly elliptic ($\theta=1$, $M_a=2$), $au'\equiv1$, and $u$ is the
  local weak solution of $-(au')'=0$; if $u\in H^2$ then the Heaviside class
  $2(1-u')$ would have a locally integrable weak derivative, contradicting
  the published counterexample, so $u\notin H^2$; the flux $au'$ is
  continuous while $u'$ jumps. The Lipschitz hypothesis of the interior
  theorem is sharp, and $a\notin W^{1,\infty}_{\mathrm{loc}}$ by the same
  reduction.

### B8 `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold` (level 11) — **open obligation, decision to escalate**

- Proved: harmonicity and edge vanishing; for every integer $m$,
  $u\in H^m(S_\omega)\iff m<1+\pi/\omega$ (derivative bounds $|D^ju|\le
  C_jr^{\alpha-j}$ plus the polar integral); in particular
  $u\in H^1\setminus H^2$.
- **Open obligation**: the scaffolded real-order claim
  $u\in H^s\iff s<1+\pi/\omega$ is retained in the statement but is not proved
  in the item; it needs a real-order Sobolev scale on a sector and a
  Slobodeckij two-sided estimate for the homogeneous derivatives, neither of
  which the scaffold's suppliers provide. The item says so explicitly and its
  decision will be recorded as `escalate`.

### B9 `cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives` (level 9)

- $f=x^{k+1/2}$ on $(0,1)$ lies in $H^k\setminus H^{k+1}$; the explicit
  $u=A(x-x^{k+5/2})$ has $u''=-f$, lies in $H^1_0$ (truncation argument) and
  is the weak solution; its derivatives give $u\in H^{k+2}$, while
  $u\in H^{k+3}$ would force $f\in H^{k+1}$, contradiction. The gain of two
  derivatives is optimal.

### B10 `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values` (level 12)

- Square $(0,1)^2$, side data $1$ on the bottom and $0$ on the left/right/top:
  continuity on the closure forces the two limits at $(0,0)$ to agree, so no
  continuous solution exists; an $H^2$ solution would have a continuous
  representative (published AC-carrying higher-order embedding) whose
  boundary restriction is the trace (published trace-consistency lemma), and
  step 1.1 gives the same contradiction.
- **Choice repair**: the item now states the Axiom of Choice and lists
  `def-axiom-of-choice`; the scaffold's contextual citations of the
  AC-carrying lifting corollary are therefore consistent. This resolves
  residual uncertainty 2 of the batch notes for B10 (and A29 remains
  contextual, to be checked against lane C's authored text).

### Lead A items (A1, A2, A4) — see checkpoints 1–3 above

`dependency_level` values recorded in the item frontmatter: A1 $0$, A2 $1$,
A4 $2$.

## Lane A delivery (difference quotients and estimates)

Lane A authored and wrote all eight of its items, each passing rendercheck,
precheck and proof-layout (42 steps, 0 defects total). The lead re-ran all
three checks on the eight files: clean. Recorded repairs and flags:

- `lem-cutoff-difference-quotient-commutator-estimate`: sign repaired to the
  published $\tau_{-he_i}$ convention.
- `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`:
  choice-light duality route; the DC-assuming density supplier replaced by
  Meyers–Serrin plus cutoff and dominated convergence; the wrong
  Hölder-conjugate link replaced by `def-conjugate-exponents`.
- `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one`:
  same conjugate-exponent repair; vector inequality proved directly.
- `thm-caccioppoli-inequality-for-weak-elliptic-solutions` and
  `cor-scaled-caccioppoli-inequality-on-concentric-balls`: gradient-free bump
  supplier dropped, in-item bump gradient bound; lead added the `F1` tag at
  step 2.1 where the boundedness of the form is used.
- `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one`:
  flagged `b-leaf-content` because it depended on a B-page-only published
  counterexample. Lead ruled the item must prove the no-weak-derivative fact
  inline; lane A is re-editing the single file (drop the dep and the link,
  add the bump-sequence verification) and update its contract entry.
- `lem-tangential-difference-quotient-test-function`: uniform-in-$h$
  boundedness claim repaired to the fixed-$h$ bound actually used; coefficient
  commutators displayed explicitly.
- `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates`:
  norm convention and compact-support class made explicit.

Contract gate: the combined strict proof contract for the eleven A items on
disk (lead A1/A2/A4 plus lane A's eight) reports **0 errors, 0 warnings,
11/11 checked** at the time of writing (the `rem` entry must be updated after
lane A's re-edit).

## Decision status at the checkpoint

- `repaired` (10): A1, A2, A4, and lane A's interpolation, cutoff-commutator,
  weak-limit, difference-quotient-characterisation, Caccioppoli, scaled
  Caccioppoli and tangential-test-function items.
- `escalate` (10): B1–B7 and B9–B10 while the lane-B/lane-C/batch-4 suppliers
  are absent from disk (exact supplier→fact→step flags in each receipt), and
  B8 on its own real-order open obligation. These are to be re-recorded as
  `accept`/`repaired` when the suppliers land, except B8, which stays escalated
  for the owner unless the fractional computation is completed.
- Pending: lane A's `rem` item; the sixteen lane-B/lane-C A items.

## Lead integration repairs (after the lane-A checkpoint)

Independent audit findings D1–D6 (`research/frontier-39-analysis-30-interior-regularity-lane-b-audit.md`)
were rechecked against current inputs and are being applied:

- **D1** `def-local-weak-solution-for-a-divergence-form-operator`: the false
  parenthetical "$f\in L^2_{\mathrm{loc}}(\Omega)$ and $\Omega$ bounded
  $\Rightarrow f\in L^2(\Omega)$" is removed; the equivalence remains for
  $v\in H^1_0(\Omega_2)$ with $\Omega_2\Subset\Omega$ and for $f\in L^2(\Omega)$.
- **D2** `ex-bootstrapping-a-smooth-poisson-problem`: added
  `thm-extension-theorem-for-bounded-smooth-domains` and
  `def-sobolev-extension-domain-and-extension-operator` to deps and cited the
  theorem in [F5]; manifest row re-synced.
- **D3** `cex-boundary-h-two-regularity-needs-domain-regularity`: added
  `thm-chain-rule-for-total-derivatives` to deps (it was already cited in
  [F3]); manifest row re-synced.
- **D4** `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values`:
  both extension ids added to deps and cited in [F2].
- **D6** `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`:
  test class tightened to $C_c^\infty(\Omega')$ in steps 1.1–3.1 (lane A).
- **B-page leak** `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity`
  depended on the published B-page cex
  `cex-step-function-has-no-locally-integrable-weak-derivative`
  (`depcheck b-leaf-content`). Replaced by a complete inline shrinking-bump
  argument with published A-page suppliers
  `thm-absolute-continuity-of-the-integral` and
  `lem-smooth-bump-between-concentric-euclidean-balls`; the dep was dropped.
  The same replacement was directed to lane A for
  `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one`.
- **D5** `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold`:
  the promised real-order claim is retained; the item stays escalated for the
  owner. The integer-order proof still needs the matching lower bound
  $\partial_r^mu=c_mr^{\alpha-m}\sin(\alpha\theta)$ (lead action).

Checks after these edits: rendercheck, precheck and proof-layout are clean on
`def-local-weak-solution-for-a-divergence-form-operator`,
`cex-boundary-h-two-regularity-needs-domain-regularity`,
`ex-bootstrapping-a-smooth-poisson-problem`,
`cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values`
and `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity`.
`manifest-deps` on the batch-12 manifest: 39 items, 0 missing, 0 errors; the
run-wide `item-dependency-levels check` reports no batch-12 error (its nine
remaining errors are other batches' items).

## Lane re-dispatch (authoring, in flight)

- **lane A**: apply D6 in the weak-limit item; re-edit the $p=1$ remark
  (drop the B-page dep, inline the bump argument); author
  `lem-normal-second-derivative-recovered-from-the-elliptic-equation`.
- **lane B**: author `lem-localisation-identity-for-a-divergence-form-weak-solution`,
  `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators`,
  `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations`,
  `thm-interior-h-two-regularity-for-divergence-form-equations` (with the
  nested-$\Omega'\Subset\Omega''\Subset\Omega$ statement repair),
  `lem-nested-domain-induction-for-interior-elliptic-derivatives`,
  `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates`,
  `thm-interior-h-k-plus-two-elliptic-regularity`,
  `cor-smooth-data-give-smooth-interior-solutions`.
- **lane C**: author `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts`,
  `lem-c-two-boundary-flattening-transforms-uniform-ellipticity`,
  `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary`,
  `thm-global-h-two-dirichlet-regularity`,
  `thm-higher-order-boundary-regularity-for-dirichlet-problems`,
  `cor-smooth-weak-dirichlet-solutions-are-classical`,
  `rem-regularity-estimates-do-not-create-boundary-compatibility`,
  `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`,
  `cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness`.

Pending on the lead: verify each delivered file independently (statement vs
scaffold, suppliers, proof steps, choice labels), re-sync the batch manifest,
assemble `research/frontier-39-analysis-30-batch-12.proof-contracts.json`,
re-record the affected item decisions, and run the handoff gate battery.

## Final status (handoff)

All 39 owned items are authored on disk, both library pages list them, the
batch-12 manifest rows are synced from the items (deps, statements,
dependency levels), the pair proof-contract file is written, and the
cross-batch review file is refreshed.

**Counts.** 29 A items + 10 B items; 39/39 `items/<id>.md` present.
`library/pde/interior-and-boundary-sobolev-elliptic-regularity.md` lists 29
items and `...-examples.md` lists 10. Item frontmatter and manifest rows
agree; dependency levels are the recomputed values (0,1,2,...,14 per the
actual dependency graph) and the run-wide level check reports **no batch-12
error**.

**Checks actually run (with results).**

- `rendercheck`, `precheck` (`tools/tsx-run.mjs tools/precheck.mts`),
  `proof-layout`: all 39 items pass (0 failing, 0 defects).
- `manifest-deps research/frontier-39-analysis-30-batch-12.pages.json`:
  39 items, 0 missing, 0 errors.
- `item-dependency-levels check --run frontier-39-analysis-30`: no batch-12
  error (pre-existing errors remain in other batches).
- `proof-contract research/frontier-39-analysis-30-batch-12.proof-contracts.json
  --strict`: 39/39 entries checked, **0 errors**, 1 warning (a
  multi-fact/multi-step bracket note in `thm-higher-order-boundary-regularity...`).
- `content-policy` on the batch manifest: 39 scoped items, 0 errors, 0 warnings.
- `coverage-checklist` batch 12: 2 pages, 53 harvested results, 0 errors,
  0 warnings.
- `validate-plan research/plan-spec.json`: OK — page order acyclic and
  consistent; no item cycles, forward references, B-page dependencies or
  unresolved ids among pages with item lists (only unrelated
  `redundant-prereq` notes in other pairs).
- `depcheck` scoped to the 39 items: 0 error lines for batch-12 items/pages.
  The repo-wide run still fails on other pairs' pre-existing `b-leaf-content`
  edges (viscous-scalar / Burgers items) — reported, not ours.
- `fwdcheck` scoped: 0 `forward-undeclared` findings for batch-12 after the
  four half-space forward references were declared in `forward_refs`; the
  remaining repo-wide `stack-cycle` is another pair's.
- `extcheck` scoped: clean for the pair.
- `source-fetch-check --coverage research/frontier-39-analysis-30-batch-12.coverage.json`:
  8/8 sources fetch-verified, 8/8 resolved.
- `frontier-dependency-ledger refresh --run frontier-39-analysis-30`: the
  batch-12 review input was rewritten (52 rows: 37 item edges verified, 15
  plan-level edges recorded as removed because the authored proofs do not use
  them, 1 page edge verified) and the shared ledger refreshed.

**Statement repairs recorded in the items** (all local, promised claims
preserved): the third commutator term in the localisation identity; the
`H^2_loc` hypothesis for the differentiated equation; nested
`Ω'⋐Ω''⋐Ω` statements for the interior `H^{k+2}` family and the global
boundary family; the outer set `Ω_{-1}⋐Ω` in the nested-domain induction;
`W⊆Ω` in the boundary-chart pullback; the radial lower-bound step in the
reentrant-sector example; and the B-page links replaced by prose in the
closing remark.

**Added suppliers.** None: every prerequisite used by the pair already
exists (published or in-run). The pre-splice findings were repaired in
place instead (D1–D4, D6, the B-page leaks, the forward references).

**Owner-held decisions (10).** The engine records a prior reviewer
`escalate` as owner-held; a reviewer may not overwrite it. The nine
consumers whose suppliers have now landed and been reconciled are
`ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives`,
`ex-piecewise-smooth-coefficient-produces-limited-regularity`,
`cex-interior-regularity-does-not-imply-boundary-regularity`,
`cex-boundary-h-two-regularity-needs-domain-regularity`,
`cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity`,
`ex-bootstrapping-a-smooth-poisson-problem`,
`cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity`,
`cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives`
and
`cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values`;
each has been re-read against the authored supplier statements and passes all
mechanical gates, so the owner may record `repaired` for them. The tenth,
`ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold`,
requires an owner disposition: the integer-order threshold is now proved in
full (including the radial lower bound), while the scaffold's real-order
claim `u∈H^s ⇔ s<1+α` is retained but unproved (no real-order Sobolev scale
on a sector is supplied); the item carries the open obligation explicitly.

**Published concerns.**

- Pre-existing repo-wide `depcheck` debt in other pairs (B-page
  dependencies from `thm-viscous-scalar-cauchy-problem...`, Burgers items,
  etc.) — not introduced by this pair.
- Lane B's earlier report of the 833 frontier-38 published items lacking
  `verification.audited/verified` still needs an owner decision.
- The `stack-cycle` reported by `fwdcheck` on
  `matrix-factorizations-and-khovanov-rozansky-link-homology` ↔
  `hochschild-homology-and-triply-graded-link-homology` is another pair's.
- The engine's `3b` gate prepends
  `frontier-dependency-ledger refresh --require-reviewed`; batches 6, 13,
  14, 17, 18, 26 still lack review rows (lane C's monitor report), which
  blocks the run gate even though batch 12 is reviewed.

**Handoff.** Contract file:
`research/frontier-39-analysis-30-batch-12.proof-contracts.json` (strict,
0 errors). Contract assembly sources: `/tmp/b12-make-contracts.mjs`,
`/tmp/b12-contract-lane-{a,b,c,lead,leadb,leadc}.json`. The lane attempts
(A, B, C) produced lane A's eight items and the lane-B audit; lanes B and C
did not execute their re-dispatched authoring turns, so the lead authored the
remaining items directly, which is reflected in this record.


## Final owner audit — Batch 12 proof repairs and cross-batch input (2026-10-05)

All ten owner-held items were re-read against the current supplier statements. The L2-Poisson example uses nested interior domains and the global L2 norms exactly as required by the interior H2 theorem. The piecewise-coefficient witness uses the direct flux computation; the slit-disc witness is in H1 and fails H2 only at the boundary; the reentrant-sector boundary witness is now an H1_0 weak solution with L2 forcing and fails global H2. The kernel-term witness is the one-dimensional sine kernel. The smooth-bootstrap example handles n=1 by absolute-continuity representatives and n>=2 by the higher-order embedding, with compatible continuous derivative representatives. The discontinuous-coefficient witness proves the weak derivative claim directly by integration by parts. The higher-order sharpness example is an interior cusp on (-1,1), so it rules out a stronger local H^{k+3} conclusion; it also records the Laplacian's uniform ellipticity. The corner-value example's datum is smooth on each open side, not globally smooth at the corners, and its contradiction uses continuity of the H2 representative.

The reentrant-sector item preserves the scaffold's real-order threshold by specifying the intrinsic Slobodeckij scale on S_omega. The upper bound sums dyadic-shell contributions C 2^{-j(2 gamma+2-2t)} for homogeneous degree gamma>-1; the lower bound uses scaled pairs where Du differs, giving divergence at and above t=alpha. This proves u in H^s(S_omega) iff s<1+alpha for all real s>=0, with H^s subset H2 for s>=2 under the stated convention.

The ten Batch-12 manifest rows and proof contracts are synchronized to the current item text. The cross-batch file has 55 rows: 39 verified and 16 removed, with no open rows. The B9 ledger has all nine reviewed rows verified. Focused proof-layout passes on all ten Batch-12 items and the changed B4/B9/B15 consumers. The separate Batch-15 edge from cor-minimisers-are-classical-when-elliptic-regularity-applies to cor-smooth-weak-dirichlet-solutions-are-classical remains open for independent re-review; its evidence now describes the repaired smooth-lift proof. No receipts, tests, gates, or Step-3 decisions were run or recorded.
