# Lane B — independent audit of `interior-and-boundary-sobolev-elliptic-regularity`

- Run: `frontier-39-analysis-30`, batch 12, pair `interior-and-boundary-sobolev-elliptic-regularity` (39 items).
- Auditor: `lane_b_interior_regularity` (owner-spawned, read-only while the pair author writes).
- Rule applied: nothing is edited while an engine writer is active; findings are held and
  applied, in dependency order, only after the pair author's artifact lands. No gate,
  decision, manifest, contract or engine state is touched by this file.

## State

- Engine status at audit start: `3b-author`, 30 pair dispatches in flight; batch-12 author
  writing items in the dispatch's dependency-level order.
- Items present at 2026-10-04T20:50Z: 10 of 39 (see table). Audit continues as items land.

## Findings

### D1 — `def-local-weak-solution-for-a-divergence-form-operator` (moderate)

Location: "Equivalences and well-definedness", final sentence:

> If in addition $f\in L^2(\Omega)$ — in particular if $f\in L^2_{\mathrm{loc}}(\Omega)$
> and $\Omega$ is bounded — then the defining identity is equivalent to
> $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in H^1_0(\Omega)$.

The parenthetical is false: local square-integrability plus a bounded domain does not give
$f\in L^2(\Omega)$. Counterexamples exist on $\Omega=(0,1)$ (e.g. $f=1/x$: every compact
subinterval carries $f\in L^2$, but $\int_0^1 f^2=\infty$), and for such an $f$ the map
$v\mapsto\int_\Omega f\overline v$ need not even be finite on $H^1_0(\Omega)$. The
equivalence sentence before it (bounded $\Omega_2\Subset\Omega$ with $v\in H^1_0(\Omega_2)$)
is correct, because $f\in L^2(\Omega_2)$ there. The definition itself is unaffected.

Fix (to apply after the author drains): drop the parenthetical, keeping
"If in addition $f\in L^2(\Omega)$ …". No hypothesis of the definition or of any consumer
changes; then re-run `proof-layout` on the file.

### D2 — `ex-bootstrapping-a-smooth-poisson-problem` (mechanical + supplier citation)

`[F5]` asserts "every open ball is a bounded extension domain" and cites
`[[def-sobolev-extension-domain-and-extension-operator]]` in Facts, but that id is absent
from `deps` (`depcheck`: `cited-not-in-deps`); the substantive supplier of the assertion is
the published `thm-extension-theorem-for-bounded-smooth-domains` (bounded $C^k$ domains are
$W^{k,p}$-extension domains, $k\ge1$, $1\le p\le\infty$), which the item does not cite at
all. Fix: add both ids to `deps`, cite the theorem in `[F5]`, and sync the batch-12 manifest
row and contract entry.

### D4 — `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values` (supplier citation)

`[F2]` asserts "the square is a bounded extension domain" citing only
`[[thm-higher-order-sobolev-embedding]]`. The supplier is the published
`thm-extension-theorem-for-bounded-smooth-domains` (with the square's bounded-$C^2$
property recorded in `[F4]`), together with
`def-sobolev-extension-domain-and-extension-operator`; neither is cited or declared. Fix in
the same way as D2 after the author drains.

### D5 — `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold` (claim scope + proof gap)

The scaffold statement (batch-12 manifest, binding) is: for every **real** $s$,
$u\in H^s(S_\omega)\iff s<1+\alpha$. The item's Statement narrows this to integer
$m\ge0$, while the closing "Open obligation" paragraph says the real-order claim "is retained
in the statement for the owner's disposition" — it is not retained. So the file is internally
inconsistent and drops a promised claim without owner resolution. The author's escalation of
the item decision is correct in substance (the real-order scale on a sector is not supplied),
but the resolution must be owner-authorized: either keep the promised real-$s$ statement and
mark the unproved part as an open obligation, or record an owner scope decision narrowing it;
then reconcile the manifest and contract.

Separately, the integer-$\iff$ proof needs the matching lower bound: the text shows only
$|D^ju|\le C_jr^{\alpha-j}$, which gives membership for $j<\alpha+1$ but not non-membership at
$j=\alpha+1$. The radial derivative $\partial_r^m u=c_mr^{\alpha-m}\sin(\alpha\theta)$ with
$c_m\ne0$ supplies $\int|D^mu|^2=+\infty$ for $m\ge\alpha+1$ and closes the gap in one line.

### D3 — `cex-boundary-h-two-regularity-needs-domain-regularity` (mechanical)

`[F3]` cites `[[thm-chain-rule-for-total-derivatives]]` in Facts but the id is absent from
`deps` (`cited-not-in-deps`). Fix: add the id to `deps` and sync the manifest/contract rows.

## Audited items (proof read end to end)

| # | id | verdict |
|---|----|---------|
| 1 | `def-first-difference-quotient` | sound (shrunken-domain, class, half-space normal/tangential cases checked) |
| 2 | `lem-difference-quotient-integration-by-parts` | sound (two-domain identity, product rule, weak-derivative commutation checked) |
| 3 | `def-local-weak-solution-for-a-divergence-form-operator` | D1 |
| 4 | `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` | sound |
| 5 | `ex-piecewise-smooth-coefficient-produces-limited-regularity` | sound (one-sided derivative limits recomputed) |
| 6 | `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity` | sound |
| 7 | `cex-interior-regularity-does-not-imply-boundary-regularity` | sound ($H^1$/$H^2$ divergences recomputed) |
| 8 | `cex-boundary-h-two-regularity-needs-domain-regularity` | sound; D3 |
| 9 | `cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity` | sound ($\sin x$ kernel and norms recomputed) |
| 10 | `ex-bootstrapping-a-smooth-poisson-problem` | sound; D2 |
| 11 | `cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives` | sound (power datum $x^{k+1/2}$, explicit solution and both divergences recomputed) |
| 12 | `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values` | sound (corner-limit contradiction checked); D4 |
| 13 | `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold` | integer threshold true but D5 (narrowed promised claim, missing lower bound) |
| 14 | `lem-cutoff-difference-quotient-commutator-estimate` | sound (identity, $M_\eta$ bound and companion identity checked) |
| 15 | `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates` | sound; N1 below (expository only) |
| 16 | `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative` | main argument sound; D6 (test-function class in steps 1.1–3.1) |
| 17 | `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one` | sound (parts (1) and (2) checked, including the $h<0$ averages) |
| 18 | `thm-caccioppoli-inequality-for-weak-elliptic-solutions` | sound (cutoff gradient bound, $\eta^2u$ test, the four Young terms and $\delta$ choice recomputed) |
| 19 | `cor-scaled-caccioppoli-inequality-on-concentric-balls` | sound (notation only) |
| 20 | `lem-tangential-difference-quotient-test-function` | sound; (iii)'s error $R$ is described qualitatively — see N2 |
| 21 | `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one` | sound (witness and $L^1$ norms recomputed) |

### D6 — `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative` (proof rigor)

Steps 1.1–3.1 fix a general $\varphi\in C_c^\infty(\Omega)$, but step 3.1's estimate
$|\int_\Omega\delta_h^iu\,\varphi|\le\|\delta_h^iu\|_{L^p(\Omega')}\|\varphi\|_{L^{p'}(\Omega')}$
is only valid when $\operatorname{supp}\varphi\subseteq\Omega'$; the hypothesis bounds
$\delta_h^iu$ on $\Omega'$ only, while the integral runs over the support of $\varphi$. The
argument and its conclusion (weak convergence in $L^p(\Omega')$) only need
$\varphi\in C_c^\infty(\Omega')$, and step 6.1 already uses that class. Fix: state the test
class as $C_c^\infty(\Omega')$ in steps 1.1–3.1 (the density step 1.2 is already on
$\Omega'$); no statement or hypothesis changes.

### N1 — `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates` (expository nit)

Step 3.1 justifies
$\big(\varepsilon A+\frac{N_mB}{4\varepsilon}\big)^2\ge N_mAB$ by "the cross term
$\ge N_mAB/2$ and the nonnegativity of the remaining terms"; the remaining terms
$\varepsilon^2A^2+\frac{N_m^2B^2}{16\varepsilon^2}$ are in fact $\ge N_mAB/2$ by AM-GM, which is
what closes the step (the cited Young inequality, [F4], does the same job). The estimate and
everything downstream are correct; fixing the sentence is optional and left to the author's
discretion.

### N2 — `lem-tangential-difference-quotient-test-function` (soft observation)

Part (iii) describes the error $R$ structurally (finite sum of products of two $L^2$ factors,
each with at most one weak derivative of $u$, one carrying a coefficient/cutoff quotient)
rather than as an explicit list with an explicit bound shape. The proof's expansion is
correct and the description is honest, but the consumer that absorbs $R$ (the interior
second-derivative estimate) will need the explicit terms. Confirm during the consumer's
review that every term it absorbs is named there; no change requested now.

## Open items ahead (dependency order)

Levels 0–5 suppliers not yet on disk include `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates`,
the Caccioppoli and difference-quotient-characterisation items, and the localisation/commutator
lemmas; then the interior $H^2$ theorem (`thm-interior-h-two-regularity-for-divergence-form-equations`),
the $H^{k+2}$ induction, and the boundary chain. The audit order is the dispatch's
dependency-level order, suppliers before consumers.

## Global blocker observed (outside this lane's write scope)

Repo-wide `depcheck` exits 1 with 833 `published-unaudited` errors, all of them the
frontier-38 items published by owner commit `06d5701c0` without mathematical audit. This
will fail the repo-wide gate battery of BOTH live runs. Reported upward; no content was
changed by this lane.
