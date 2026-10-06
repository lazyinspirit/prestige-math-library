# Batch 19 construction note — frontier-39-analysis-30 (Hamilton–Jacobi Equations and Viscosity Solutions)

## Scope and readiness

The commissioned A/B pair was scaffolded from design PDE-25
(`research/plan-pde-track.md` L2159–L2244) together with its additions table
`#### PDE-25 additions` at L3791–L3805. A page:
`hamilton-jacobi-equations-and-viscosity-solutions` (order 458.047, `pde`);
B page: `hamilton-jacobi-equations-and-viscosity-solutions-examples` (458.048).

Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-19.pages.json` (42 items: 32 on A,
10 on B; the 100-item page cap is respected), the coverage record
`research/frontier-39-analysis-30-batch-19.coverage.json` (2 pages, 85
harvested headings, 6 fetch-stamped source rows), the cross-batch input
`research/frontier-39-analysis-30-batch-19.cross-batch-dependencies.json`
(1 page row), the 42 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction and again before recording), so the binding
materials are the run plan, the design section and the Alpha drift verdict for
this page: **drift-applied** (`hamilton-jacobi-equations-and-viscosity-solutions`,
page source `convex-and-semicontinuous-functions-on-rn`, order 288.00005,
`research/frontier-39-analysis-30-alpha-step1-drift.md`). The drift's correction
was followed: the finite-valued convex biconjugacy claim is a local lemma of
this page, immediately after the Legendre-transform definition and before the
Hopf–Lax operator.

**Step-1 outcome: 38 items `ready`, 4 items `escalated`.** The escalated items
are `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
`cor-finite-speed-of-dependence-for-lipschitz-hamiltonians`,
`ex-hopf-lax-solution-with-a-forming-corner` and
`ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution`; the exact
blockers and required repairs are in the escalation section below. All 23
A-page design items and all seven A additions are present, and all B-page
design items and all three B additions are present; two further local
prerequisites were minted earlier in the dispatch (below).

## Design, plan and published-content reconciliation

1. **Plan requires versus the design prose.** `research/plan-spec.json`
   (order 458.047) declares exactly two A-page prerequisites:
   `analytic-semigroups-and-linear-evolution-equations` (in-run draft, batch
   18) and `convex-and-semicontinuous-functions-on-rn` (published). The design
   prose instead names PDE-2, PDE-7–PDE-8, MT-8, MT-11, FA-1–FA-2, "the
   published compactness and semicontinuity items", and the convex page. The
   plan controls; every additional input is consumed at item level and every
   item-level dependency resolves to published content. The page-level edge to
   the batch-18 page is a reading-order declaration of the plan rather than an
   item-level proof dependency; it is recorded as an open cross-batch row.
   **Conflict recorded.**

2. **Local prerequisites minted beyond the design inventory.**
   - `lem-envelopes-are-the-least-semicontinuous-majorants` — the design's
     item 2 asks the definition item to "prove that they are the least upper
     and greatest lower semicontinuous envelopes"; the definition item carries
     the definition and the proof is split into a lemma immediately after it,
     because a definition item has no proof component in this schema.
   - `def-half-relaxed-limits` — the design's item 9 and the
     vanishing-viscosity theorem use half-relaxed limits, but no item on the
     page defined them; the definition is minted before its first consumer.

3. **Choice ledger.** The biconjugacy lemma is proved by a **choice-free
   attained-Moreau-minimiser argument** rather than by the design's
   supporting-gradient route, which would consume
   `thm-convex-functions-have-subgradients-at-interior-points` and with it the
   Axiom of Choice and Countable Choice. With
   $e_\lambda H(p)=\inf_q\{H(q)+|p-q|^2/(2\lambda)\}$, continuity and
   coercivity give an attained minimiser $q_*$; the two-point convexity
   inequality at $q_*$ yields the supporting inequality
   $H(q)\ge H(q_*)+v_*\cdot(q-q_*)$, whence
   $L^*(p)\ge e_\lambda H(p)$; and $e_\lambda H\downarrow H$ by continuity at
   $p$ and convexity along rays. No item of this page consumes any choice
   principle; the vanishing-viscosity theorem uses half-relaxed limits,
   stability and comparison and deliberately does not assert existence of the
   viscous family or extract a subsequence. The two escalated items are
   blocked by missing comparison machinery, not by choice obligations, and no
   choice claim is attached to their open parts.

4. **Normalisation inside the doubling argument (corrected in this dispatch).**
   The initial scaffold used a shared-time doubling and asserted that the
   penalty gradients $(p_\alpha,0)$ and $(q_\alpha,0)$ are first-order jets.
   That assertion is false: at a maximiser of
   $u(x,t)-v(y,t)-\frac{\alpha}{2}|x-y|^2$, fixing $y=y_\alpha$ leaves the
   uncontrolled term $v(y_\alpha,t)-v(y_\alpha,t_\alpha)$, so no o-slack
   contact for $u$ follows. Explicit counterexample: $n=T=1$,
   $u(x,t)=\sqrt{|t-t_0|}$, $v(y,t)=\sqrt{|t-t_0|}+\min(y^2,1)$ has maximisers
   $(x_\alpha,y_\alpha,t_\alpha)=(0,0,t_0)$ with $p_\alpha=0$, while
   $D^+u(0,t_0)=\varnothing$ because $u(0,t)-u(0,t_0)=\sqrt{|t-t_0|}$ is not
   $o(|t-t_0|)$. The same version's claims $|p_\alpha-q_\alpha|\to0$ and the
   weight bound with $\sup(u-v)$ were also false. The repaired
   `lem-doubling-variables-maximum-localisation` uses **separate times**
   ($t$ for $u$, $s$ for $v$) with
   $\frac{\alpha}{2}|x-y|^2+\frac{\alpha}{2}|t-s|^2$ and
   $-\rho(|x|^2+|y|^2)$; fixing $(y_\alpha,s_\alpha)$ then gives genuine $C^1$
   contacts with $p_\alpha=\alpha(x_\alpha-y_\alpha)+2\rho x_\alpha$,
   $q_\alpha=\alpha(x_\alpha-y_\alpha)-2\rho y_\alpha$,
   $p^0_\alpha=\alpha(t_\alpha-s_\alpha)$, and the correct bounds
   $\alpha(|x_\alpha-y_\alpha|^2+|t_\alpha-s_\alpha|^2)\to0$,
   $(1+|p_\alpha|)(|x_\alpha-y_\alpha|+|t_\alpha-s_\alpha|)\to0$,
   $|q_\alpha-p_\alpha|=2\rho|x_\alpha+y_\alpha|$ controlled by the weight, and
   $\frac{\alpha}{2}(|x_\alpha-y_\alpha|^2+|t_\alpha-s_\alpha|^2)+\rho(|x_\alpha|^2+|y_\alpha|^2)\le\sup u-\inf v-M_{\alpha,\rho}$.
   The momentum gap $q_\alpha-p_\alpha$ disappears only in the
   $\rho\downarrow0$ limit, not in the $\alpha\to\infty$ limit.

5. **Comparison settings (corrected in this dispatch).**
   `thm-comparison-for-first-order-hamilton-jacobi-equations` case (a) is on
   $\mathbb R^n$ for bounded upper/lower semicontinuous solutions with the
   pointwise initial inequality, under the two Lipschitz conditions on $H$.
   The proof penalises both functions in time
   ($\tilde u_\eta=u-\eta/(T-t)$, $\tilde v_{\eta'}=v+\eta'/(T-t)$), so that
   the two strict contact inequalities subtract to
   $(\eta+\eta')/T^2\le H(y_\alpha,s_\alpha,q_\alpha)-H(x_\alpha,t_\alpha,p_\alpha)$,
   and then lets $\alpha\to\infty$ and $\rho\downarrow0$; the initial faces are
   excluded by upper/lower semicontinuity together with the pointwise initial
   inequality, and the terminal faces by the two blow-ups. Case (b) on a
   compact cylinder now requires $H$ to be uniformly continuous in $(x,t)$
   uniformly on bounded $p$-sets, i.e. a modulus
   $\omega(0+)=0$ with
   $|H(x,t,p)-H(y,s,p)|\le\omega((1+|p|)(|x-y|+|t-s|))$. Mere continuity is
   not enough and the earlier "no growth condition beyond continuity" claim was
   false; counterexample: $O=(0,1)$, $H(p)=|p|^{1/2}$, $u(x,t)=-t^2/(C+4x)$
   ($C>0$) and $v\equiv0$ are continuous solutions with $u\le v$ on the
   parabolic boundary but $u<v$ inside. With the modulus condition the compact
   case follows with trivial weight, where $p_\alpha=q_\alpha$ exactly.

6. **Domain corrections.** `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions`,
   `thm-perron-method-for-hamilton-jacobi-equations` and
   `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations` are now
   stated on $O=\mathbb R^n$, matching comparison case (a). Uniqueness on a
   bounded domain without boundary data is false, as the companion
   counterexample `cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class`
   shows; the vanishing-viscosity theorem also now assumes the family is
   bounded (not merely locally bounded) and concludes uniqueness in the bounded
   class.

7. **Hopf–Lax supersolution route (corrected in this dispatch).** The earlier
   supersolution sketch used the time-$t_0$ minimiser $y$ and the false
   inequality $u(x_0,t_0)\ge u(y,t_0-h)+hL((x_0-y)/h)$ (its right side is
   $+1/(2h)$-large for $H=p^2/2$, $u_0=-|y|$). The repaired text uses the
   segment point $z_h=y+\frac{t_0-h}{t_0}(x_0-y)$, so that
   $(z_h-y)/(t_0-h)=(x_0-y)/t_0=:v$; the competitor $y$ at $(z_h,t_0-h)$ gives
   $u(z_h,t_0-h)+hL(v)\le u(x_0,t_0)$, the local-minimum contact applies at the
   nearby point $z_h\to x_0$, and the difference quotient gives
   $\phi_t+\langle D\phi,v\rangle\ge L(v)$, hence the supersolution
   inequality.

8. **Other repairs.** `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate`
   strategy rewritten (point 3 above);
   `ex-eikonal-equation-as-a-viscosity-equation` corrected: at the tip of
   $|x|$ there is **no** upper contact (a linear form cannot dominate $|x|$),
   so the subsolution test is vacuous, while $\phi=\varepsilon x_1$ with
   $\varepsilon<1$ is a genuine lower contact at which the supersolution test
   fails; `lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump`
   now justifies the bump by uniform continuity of $H$ on a compact set rather
   than by an unassumed Lipschitz bound; `ex-quadratic-hopf-lax-formula-and-moreau-envelope`
   and `cex-hopf-lax-without-convex-superlinear-coercivity` no longer declare
   the escalated Hopf–Lax formula theorem as a dependency, since their
   arguments are self-contained (levels recomputed; no cycles; maximum level 8).

## Escalations (exact blockers, required repairs)

1. `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` — claims (1),
   (2), (4) (the formula is a viscosity solution, the initial trace, the
   semigroup) are supported by the corrected routes; claim (3), uniqueness of
   the bounded viscosity solution for convex superlinear $H$, has no adequate
   local prerequisite. Comparison part (a) needs a global momentum-Lipschitz
   constant, which fails for $H(p)=|p|^2/2$, and the shared-time semijet
   conclusion needed for an autonomous convex comparison is not available on
   this page. Required repair: add a comparison theorem for autonomous convex
   superlinear Hamiltonians (for instance via the maximum principle for
   semicontinuous functions / parabolic semijet theorem, [CIL] Theorem 8.3 and
   [TR] Chapter 2 around (2.18)), or add a global Lipschitz hypothesis and
   restrict the claim accordingly.
2. `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians` — the recorded
   reduction of $w=u-v$ to a viscosity subsolution of $w_t-L|Dw|=0$ uses the
   removed jet claims and the false $|p_\alpha-q_\alpha|\to0$. A dedicated
   reduction (two-sided time penalisation, the corrected $C^1$ contacts, the
   momentum-Lipschitz bound and the iterated $\alpha\to\infty$, $\rho\downarrow0$
   limit) or the comparison-on-cones argument on a truncated cone is required.
3. `ex-hopf-lax-solution-with-a-forming-corner` — the crossing computation is
   complete, but the final uniqueness/identification sentence depends on the
   escalated claim (3) above.
4. `ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution` — the explicit
   viscous family is verified, but its identification as "the" Hamilton–Jacobi
   solution invokes `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations`
   for $H(p)=\frac12p^2$, which does not satisfy that theorem's global
   momentum-Lipschitz hypothesis, and needs the same autonomous-convex
   comparison prerequisite.

None of the four is blocked by a source problem: the full texts were fetched
and read; the blockers are missing mathematical prerequisites/repairs inside
this pair. No escalation was overwritten and no `--owner` flag was used.

## Sources

Three independently fetched full texts back the pair, exceeding the two-source
norm and including a book-level treatment:

| key | treatment | full text | read |
|---|---|---|---|
| [TR] | Tran, *Hamilton–Jacobi Equations: Theory and Applications*, 2020 preliminary manuscript of AMS GSM 213 | `https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf` (289 pages, stamped) | Chapters 1–2, printed pp. 9–84; Appendix pp. 246–247 |
| [BHJ] | Bressan, *Viscosity Solutions of Hamilton–Jacobi Equations and Optimal Control Problems*, complete author notes | `https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf` (64 pages, stamped) | §§1–5, printed pp. 2–20; §§9–10 read for the value-function orientation |
| [CIL] | Crandall–Ishii–Lions, *User's guide to viscosity solutions*, Bull. AMS 27 (1992) 1–67 | `https://arxiv.org/pdf/math/9207212` (69 pages, stamped) | §§1–4 and 6, printed pp. 1–40; §8, printed pp. 49–52 |

The design's [E] Evans, Ch. 10 §§10.1–10.3, is a convention cross-check only;
the plan says the AMS page is the authoritative bibliographic source and does
not represent it as an open-access download, so it is not a coverage backing
source. All harvested headings receive a disposition (included / inline /
out-of-scope / deferred): 72 rows on the A page and 13 on the B page, every
decline carrying its own reason and every deferral a resolvable destination.

## Published defects

No defect was found among the examined published suppliers. The AC+CC
declarations on the convex page are explicit hypotheses of those items, not
contradictions; the one deliberate non-consumption (the subgradient theorem) is
recorded in point 3 above. No published item was edited. The two verified
published suppliers used by the repaired arguments are
`thm-convex-functions-on-open-convex-sets-are-locally-lipschitz` (for the
(now escalated) convex comparison route) and
`cor-convex-functions-on-open-convex-sets-are-continuous`,
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` and
`thm-heine-borel-rn`/`thm-semicontinuous-evt` for the repaired doubling and
biconjugacy arguments.

## Cross-batch dependencies and run-level findings

The batch input contains exactly one row: the page-level edge from the A page to
`analytic-semigroups-and-linear-evolution-equations` (supplier batch 18), status
`open`, with the reading-order/design-conflict evidence. There is no item-level
in-run dependency on other batches, because every item-level target is published
content.

Run-wide refresh findings (outside this batch's write scope, recorded for owner
reconciliation):

- `frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  succeeds and deduplicates; `--require-reviewed` fails with "Cross-batch review
  incomplete: supply every batch input and review every declared edge", because
  at least batch 20 still has no cross-batch input file and some declared edges
  have no review row. This is not caused by batch 19.
- `tools/extcheck.mjs` reports one run-wide error at the time of the final
  re-run: `items/def-g-linearization-of-an-invertible-sheaf.md` names
  `rem-linearization-existence-outside-this-pair` in `external_refs`, and that
  ID does not exist. The affected item is outside batch 19 and no batch-19
  artifact references it; an earlier run of the same tool in this dispatch
  exited 0, so the state changed during the dispatch, presumably through
  concurrent work on another batch. Recorded for owner/operator reconciliation.

## Checks actually run (all from the repository root, after the final edits)

| check | command | result |
|---|---|---|
| batch manifest deps | `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-19.pages.json` | 42 items, 0 missing, 0 errors |
| whole-run manifest deps | `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json` | 854 items, 0 missing, 0 errors |
| scaffold content policy | `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json` | 854 scoped items, 0 errors, 0 warnings |
| coverage checklist | `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-19.coverage.json --require-destination` | 2 pages, 85 harvested results, 0 errors, 0 warnings |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-19.coverage.json` (with and without `--stamp`) | 6/6 sources fetch-verified (289/64/69 pages), 6/6 resolved |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` | no error inside batch 19; the only errors are batch 20's two empty page shells |
| Step-1 readiness | `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` | 854 items, 850 ready; the only batch-19 work rows are the four escalations above; the only other work rows are batch 20's two empty page shells |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (the usual note about later pages with empty item lists) |
| external references | `node tools/extcheck.mjs` | exit 1, run-wide finding on `def-g-linearization-of-an-invertible-sheaf` (not batch 19, see above) |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` / `--require-reviewed` | refresh succeeds; `--require-reviewed` fails run-wide as described above |

Unresolved findings: the four batch-19 escalations with their required repairs;
batch 20's empty scaffold shells (its dispatch is not this batch); the run-wide
external-reference dangling ID and ledger gaps listed above.

## Step-3b page-edge audit (2026-10-05)

The earlier plan-spec edge from the Hamilton–Jacobi page to analytic semigroups was a surplus ordering edge. The authoritative `research/plan-pde-track.md` §PDE-25 requires PDE-2 and PDE-7–PDE-8 plus the named published measure, functional-analysis, compactness and semicontinuity inputs; its design graph gives PDE-2 + comparison ideas → PDE-25. It explicitly retains the published convexity page needed for convexity and existence of subgradients. No HJ page/item proof uses the B18 analytic-semigroups page. The analytic-semigroups requirement was removed from the plan-spec and batch-19 manifest; the convexity requirement remains. The B19 cross-batch review row for B18 now records `removed` with this evidence. All 33 A and 10 B item statements, proofs, dependencies and levels are unchanged. PDE-26 still requires this page, so downstream scope is unchanged.
