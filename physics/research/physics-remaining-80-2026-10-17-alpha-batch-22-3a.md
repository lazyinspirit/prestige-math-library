# Batch 22 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-22`.

Scope: three touched obligations, no reader/refuter findings or page obligations. All 15 carriers require risk review. Engine scheduling, hashes, gates and acceptance remain engine-owned.

## Completed review in dispatched order

- `def-emg-xs-ingoing-rn`: all component, regularity and orientation claims checked against the four exact dependencies; risk review complete. The determinant remains -1 at roots; N has norm -2, including zero parameters. Interior static time orientation is explicitly reversed.
- `prop-emg-xs-rn-local-gauges`: current octahedral cycle construction, Hodge signs, pole smoothness and both exactness directions are sound. Risk review complete. Current bytes match the frozen post-reader item hash. Historical pre-reader source recovery is in progress; no historical repair verdict yet.

No item edits made. Next: resolve historical preimages and review the level-2 carriers.

- `prop-emg-xs-rn-horizon-data`: positive-root, null-level and signed surface-gravity calculations checked, including the inner and double roots.
- `ex-emg-xs-superextremal-rn`: the single integral path has tangent `(2/f)n` and reaches all finite radii; its escape set is the full model. Both level-2 risk reviews are complete.

### Exact historical preimage: `prop-emg-xs-rn-local-gauges`

Reverse application of the retained unified diff at reader log line 24300 to the frozen post-reader bytes reproduces SHA-256 `9bbbe94f3cc994f1817d5ef873feb9581e240cd1e43cef10cd577df57f25608c`, exactly the immutable pre-reader snapshot. The complete authenticated preimage follows for durable review evidence.

```markdown
---
id: prop-emg-xs-rn-local-gauges
kind: proposition
title: Dyonic RN gauges and global exactness obstruction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-xs-rn-data
  - lem-emg-lorentz-hodge-calculus
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113): RN metric, dyonic field and charge flux."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.1)-(2.2): RN seed field and gauge context; the patch and Stokes arguments are given here."
---

## Statement

Let $J\subset(0,\infty)$ be nonempty and open, and suppose
$f(r)=1-2M/r+(q_e^2+q_m^2)/r^2\ne0$ on $J$. On the static dyonic RN
product $\mathbb R_t\times J\times S^2$, orient by $dt\wedge dr\wedge\omega$
and use the field $\mathcal F=-q_e r^{-2}dt\wedge dr+q_m\omega$. For every
sphere $S_r$,
$$\int_{S_r}\mathcal F=4\pi q_m,\qquad \int_{S_r}\star_g\mathcal F=4\pi q_e.$$
On the north and south patches it has smooth potentials
$$\mathcal A_N=-\frac{q_e}{r}dt+q_m(1-\cos\theta)d\phi,\qquad \mathcal A_S=-\frac{q_e}{r}dt-q_m(1+\cos\theta)d\phi,$$
with $d\mathcal A_N=d\mathcal A_S=\mathcal F$ and
$\mathcal A_S-\mathcal A_N=-2q_m d\phi$ on the overlap. A global smooth
real one-form potential on this sphere-containing product exists exactly
when $q_m=0$. No circle-bundle normalization or charge quantization is
imposed.

## Facts & Assumptions

**Given:** The static RN metric, field, orientation and sphere patches.

[F1] [[def-emg-xs-rn-data]]: on $f\ne0$,
$g=-fdt^2+f^{-1}dr^2+r^2\gamma$ and
$\mathcal F=-q_e r^{-2}dt\wedge dr+q_m\omega$, where
$\omega=\sin\theta\,d\theta\wedge d\phi$ is the outward unit-sphere area
form.

[F2] [[lem-emg-lorentz-hodge-calculus]]: the Hodge map is defined by the
metric, orientation and inverse metric and is smooth on the stated
nondegenerate Lorentzian chart.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth
singular chain $c$ and smooth form $\eta$,
$\int_c d\eta=\int_{\partial c}\eta$.

[A1] $J$ is nonempty; $q_e,q_m,M$ are real length parameters. In a polar chart,
$x=r\sin\theta\cos\phi$, $y=r\sin\theta\sin\phi$,
$z=r\cos\theta$. The oriented sphere is a finite smooth singular
2-cycle. Potentials are used only on their named patches; $J$ contains only
radii with $f\ne0$. The coordinates $t,r,x,y,z$ have length units and
angles are dimensionless.

## Proof

1.1 Pulling [F1]'s $\mathcal F$ back to $S_r$ removes the electric term and
leaves $q_m\omega$. Since
$$\int_{S^2}\omega=\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi,$$
the first flux is $4\pi q_m$. The inverse static metric has
$g^{tt}=-1/f$, $g^{rr}=f$, and the oriented volume form is
$r^2\sin\theta\,dt\wedge dr\wedge d\theta\wedge d\phi$. In the component
formula of [F2],
$(dt\wedge dr)^{tr}=g^{tt}g^{rr}=-1$ and
$\omega^{\theta\phi}=1/(r^4\sin\theta)$. The oriented volume component is
$\epsilon_{\theta\phi tr}=r^2\sin\theta$, so that formula gives
$$\star_g(dt\wedge dr)=-r^2\omega,\qquad \star_g\omega=r^{-2}dt\wedge dr,$$
for either sign of $f$. Therefore
$\star_g\mathcal F=q_e\omega+q_m r^{-2}dt\wedge dr$; its sphere pullback
integrates to $4\pi q_e$. [F1, F2, A1, algebra]

1.2 On $U_N=\{r+z>0\}$ and $U_S=\{r-z>0\}$, respectively,
$$ (1-\cos\theta)d\phi=\frac{x\,dy-y\,dx}{r(r+z)},\qquad (1+\cos\theta)d\phi=\frac{x\,dy-y\,dx}{r(r-z)}.$$
The denominators are nonzero on the indicated patches, so both one-forms
are smooth there. Differentiation gives
$d[(1-\cos\theta)d\phi]=d[-(1+\cos\theta)d\phi]=\omega$ and
$d(-q_e r^{-1}dt)=-q_e r^{-2}dt\wedge dr$. Thus both potentials
differentiate to [F1]. Subtracting them gives
$\mathcal A_S-\mathcal A_N=-2q_m d\phi$ on the overlap.
[F1, A1, algebra]

2.1 If a global smooth one-form $\mathcal A$ with $d\mathcal A=\mathcal F$
existed and $q_m\ne0$, apply [F3] to the oriented sphere cycle $S_r$:
$$4\pi q_m=\int_{S_r}\mathcal F=\int_{S_r}d\mathcal A =\int_{\partial S_r}\mathcal A=0,$$
since $\partial S_r=0$. This contradiction rules out a global potential
when $q_m\ne0$. [F1, F3, step 1.1, A1, algebra]

3.1 If $q_m=0$, the one-form $\mathcal A=-q_e r^{-1}dt$ is smooth and
global on $\mathbb R_t\times J\times S^2$, and its exterior derivative is
$\mathcal F$. This proves the exact criterion. [F1, A1, algebra] ∎
## Remarks

The two-form is globally defined even when its local potentials do not
combine into one global real one-form. No regular source at $r=0$ or
quantization condition follows.
```

### Exact historical preimage: `ex-emg-xs-topological-charge`

Reverse application of the retained unified diff at reader log line 24227 to the frozen post-reader bytes reproduces SHA-256 `07e586e0d7a026bf0b8f68d9a2c8bfffc094fcf016fed795090e611cd7f67328`, exactly the immutable pre-reader snapshot. The complete authenticated preimage follows for durable review evidence.

```markdown
---
id: ex-emg-xs-topological-charge
kind: example
title: Nonbounding sphere carries source-free charge flux
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - prop-emg-xs-rn-local-gauges
  - prop-emg-xs-kn-dyonic-flux
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  prop-emg-xs-rn-local-gauges: mathematical-premise
  prop-emg-xs-kn-dyonic-flux: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113): global dyonic RN field, flux and exterior domain."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1: RN/KN charged-field context; finite-chain Stokes deductions are given here."
---

## Example

On a sphere-containing dyonic RN domain with $q_m\ne0$, the global closed
field has nonzero flux through each sphere $S_r$. Each such sphere is a
nonbounding finite smooth singular cycle in the field domain; local
north/south potentials exist but no global real one-form potential does.
On a finite full-sphere KN exterior annulus, the same conclusion holds
conditionally for a constant dual rotation with $q\sin\beta\ne0$, under
the exact current batch-21 draft interface. Neither statement gives a
magnetic source, charge quantization, or an empirical observation.

## Facts & Assumptions

**Given:** The RN sphere product and its nonzero magnetic parameter; for the
KN comparison, the current batch-21 dyonic-flux interface on a specified
finite exterior annulus.

[F1] [[prop-emg-xs-rn-local-gauges]]: the current A-page item proves
$\int_{S_r}\mathcal F=4\pi q_m$ and gives smooth local north/south
potentials. Its proof is directly supplied using RN data, Hodge calculus
and finite-chain Stokes.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: for finite smooth
singular chains $c$ and smooth $\eta$,
$\int_c d\eta=\int_{\partial c}\eta$.

[L1] [[prop-emg-xs-kn-dyonic-flux]] is a batch-21 draft, not an accepted
proof. Its exact current statement uses a full-sphere exterior annulus
$R_0<r_1<r_2$ with $R_0>4|M|$ and $\Delta>0$; for
$\mathcal F_\beta=\cos\beta\,\mathcal F+\sin\beta\,\star\mathcal F$ it
states $q_e=q\cos\beta$, $q_m=q\sin\beta$, closedness, and equality of
finite homologous sphere fluxes. Its current proof constructs a finite
exterior shell and applies Stokes directly to the closed dual field; it
does not assume the divergence equation through a sourced-current supplier.
The KN use remains conditional on that exact draft interface and its proof status.

[A1] Each $S_r$ is oriented outward and represents a finite smooth singular
2-cycle with $\partial S_r=0$. The RN domain avoids $r=0$. In the KN case
use the stated finite exterior annulus and choose a constant $\beta$ with
$q\sin\beta\ne0$.

## Verification

1.1 In RN, [F1] gives
$\int_{S_r}\mathcal F=4\pi q_m\ne0$. If $S_r=\partial c$ for a finite
smooth singular 3-chain in the field domain, then $d\mathcal F=0$ by the
local potential identities in [F1] and $d^2=0$. Applying [F2] would give
$$4\pi q_m=\int_{S_r}\mathcal F=\int_c d\mathcal F=0,$$
a contradiction. Thus $S_r$ is nonbounding. [F1, F2, A1, algebra]

1.2 Under the exact conditional interface [L1], the chosen $\beta$ gives
$\int_{S_r}\mathcal F_\beta=4\pi q\sin\beta\ne0$ and
$d\mathcal F_\beta=0$ on the annulus. If a sphere there bounded a finite
smooth singular 3-chain, [F2] would force its flux to be zero; if it had a
global potential, the closed-cycle Stokes identity would likewise force
zero flux. Both contradict [L1]. Hence the KN sphere is nonbounding and has
no global potential, conditional on that draft interface.
[L1, F2, A1, algebra]

2.1 If a global smooth potential $\mathcal A$ existed, then [F2] and
$\partial S_r=0$ would give
$$4\pi q_m=\int_{S_r}d\mathcal A=\int_{\partial S_r}\mathcal A=0,$$
contradicting step 1.1's nonzero flux. The smooth patch potentials in [F1]
show that the obstruction is global exactness, not local existence.
[F1, F2, step 1.1, A1, algebra]

3.1 The RN conclusion follows from the current RN local-gauge proof and
finite-chain Stokes. The KN conclusion remains conditional on the exact
batch-21 dyonic-flux interface and upstream draft proofs. Neither yields a
regular magnetic source or a quantization condition. [F1, F2, L1, step 1.1, step 2.1] ∎
## Remarks

The field is a globally defined closed two-form even when it is not globally
exact. The excluded center is not filled in by this argument.
```

- `prop-emg-xs-charged-ring-obstruction`: divergence versus continuity proves the approached C2 obstruction conditional on the explicitly unaccepted Ricci-square supplier. The q=0 exception and a=0 ring exception are preserved; risk review complete.

Historical preimage recovery succeeded for both missing sources by reversing the retained reader diffs; recovered bytes exactly match the frozen pre-reader hashes. No historical uncertainty waiver is needed.

- `thm-emg-xs-kn-extension`: global sphere coefficients, both kinds of apparent coordinate singularity, signature and orientation checked. Electrovac continuation remains conditional on the exact draft verification.
- `thm-emg-xs-rn-crossing`: removable-pole factorization, inverse chart, both tensor transformations, Hausdorff gluing and four-quadrant continuation checked; extremality is excluded only from the simple-root construction. Both level-7 risk reviews are complete.

- `lem-emg-xs-null-barrier`: Checked all four steps against both exact metric formulas and every cited gradient, temporal, cone, tetrad, root/IFT, compactness, Cauchy-Schwarz, MVT and AC_omega interface. RN norm f-2 is negative at the outer root; KN numerator a^2*sin(theta)^2-2R is uniformly negative, including both axes and the double-root case. Future null normals make dr(Z)<=0 at the root for every future causal vector, not just principal rays. A finite cover of the compact sphere supplies tetrads; projection and finite Gram-Schmidt give smooth screens. The d_tau=1 cone section is parametrized by a closed unit ball with positive denominator sqrt(u). On compact radial/coordinate/ball products, partial_r G is bounded, and v-translation invariance makes the bound uniform in noncompact v. MVT then proves the one-sided radial estimate; multiplication by d_tau(Z)>0 recovers all vectors. Only the stated inherited AC_omega background is used.

- `prop-emg-xs-kn-ergoregion`: Checked all three proof steps against the smooth KN metric, exact stationary/ergoregion definitions, nonnegative-root convention and Killing/geodesic theorem clauses (a)-(b). The norm quadratic has the stated roots, with any zero lower root excluded by r>0. Uniform large-radius negativity supplies stationarity. For nonzero a away from the axis, (u-w)(u+w)=a^2*sin(theta)^2>0 proves strict outer-root separation, including the extremal case; the roots coincide on the axis. Both global fields preserve the metric. Their affine-geodesic contractions are constant by metric compatibility and the Killing equation; no causal character, completeness or empirical energy assumption is silently added.

- `prop-emg-xs-kn-horizon-data`: Checked all four proof steps using exact global KN metric/potential and all Killing, root, future-cone and horizon/area definition suppliers. Positive a^2+q^2 and M>0 give positive inner and outer roots. At either root chi_flat=(Sigma_H/R_H)dr is a positive multiple, chi has v component one and negative pairing with N, proving the full future null normal and nonempty dense generator conditions also at axes. Differentiation uses a fixed Omega_H, not an r-varying coefficient; the second square and its first derivative vanish on the horizon, giving signed kappa=Delta_prime/(2R_H), zero at coincidence. The induced sphere metric is positive, area density integrates to 4*pi*R_H, and the potential contraction is q*r_H/R_H in the specified gauge. Intrinsic density integration retains the vocabulary supplier AC_omega assumption; no gauge-invariant absolute potential or maximal horizon is inferred.

- `ex-emg-xs-extremal-horizon`: Checked all three verification steps against the exact ingoing model, RN root data and regular-crossing theorem. M>0 makes Q^2=M^2 positive and r_H=M stays inside r>0. The explicit square gives a double root and zero signed kappa; determinant -1 and positive M^2 sphere block give nondegeneracy. The failure of the kappa>0 hypothesis only excludes use of that particular chart construction, without claiming impossibility of every other extension.

- `ex-emg-xs-topological-charge`: Checked all four verification steps against the RN local-gauge proof, exact finite-chain Stokes theorem and current KN dyonic-flux Statement/Proof 1.1-3.1. RN now obtains its actual finite sphere cycle from the explicit octahedral construction rather than assuming it. The KN supplier supplies full-sphere smoothness, finite sphere and shell chains, closed dual field and nonzero flux q*sin(beta), all used conditionally on its unaccepted draft proof. A bounding 3-chain would give zero integral of the closed form; a global potential would give zero integral over the cycle. Both contradictions need nonzero magnetic flux, and q=0 cannot satisfy the chosen KN angle condition. The finite exterior annulus is retained, the excluded centre is not filled, and no quantization, material source or empirical statement follows.

All level-8 risk reviews are complete. The exact RN cycle construction and the KN conditional chain/flux interface justify accepting the reader topological-charge clarification. No carrier interface was changed.

- `thm-emg-xs-kn-escape`: Checked all four steps against every exact cited supplier. The displayed null vector contraction cancels using Sigma=R-a^2*sin(theta)^2 and g(n,N)=-(Delta/Sigma+1+f0^2)/2<0 outside the outer root; replacement of partial_psi by the smooth global rotation field covers the axes. The full angular cone barrier, not a two-ray decomposition, supplies the nonescape direction. On each finite compact path partition the integrating factors are differentiable, and the elementary nonnegative-derivative monotonicity argument patches by continuity. A last smaller-collar crossing exists by compactness/continuity; a first positive excursion from a root contradicts its zero starting value. For r0>r_plus, both radial integrals are smooth on every finite interval and the sphere rotation gives one future null path with tangent (2*Sigma/Delta)n for all r>=r0. Both inclusions and the relative product-topology boundary follow, including extremality and a=0. No conformal-infinity or maximal-extension inference is made.

- `thm-emg-xs-rn-escape`: Checked three proof steps and every cited metric, full-cone barrier, exponential, chain-rule, FTC, root and escape-path interface. On a compact collar segment w=r_H-r satisfies (exp(C*tau)*w)_prime>=0 below the root; above a root starting point exp(-C*tau)*(r-r_H) has nonpositive derivative. Piecewise-C1 regularity and finite subdivisions permit elementary monotonicity on each piece and continuity across joins. Compactness of the tested parameter segment supplies a last lower-collar crossing before first root contact. This excludes both finite crossing from below and a positive excursion from a root, including double roots. Outside, f>0 and the integral curve has tangent (2/f)n, remains defined at every finite radius and gives a single admissible unbounded-radius path. Both escape-set inclusions and its relative boundary are proved without a maximal extension.

- `cex-emg-xs-ergo-is-not-horizon`: Checked all three counterexample steps against both exact KN propositions and the root convention. The reader selects M=2 m, a=1 m, q=0 at the equator, so M^2-a^2-q^2=3 m^2>0, r_E=4 m and r_H=(2+sqrt(3)) m. Thus strict separation has an actual admissible witness. The algebraic family argument also works for every originally allowed rotating subextremal tuple; its nonempty family was already sound, so adding a concrete tuple is audit enrichment, not evidence of a false historical theorem. At the horizon T has positive norm off-axis; on-axis coincidence does not repair universal equality. No event-horizon or empirical assertion is used.

All 15 risk reviews are complete. The two escape arguments use the complete compact cone-section bound, including angular directions and double roots. No current content defect requiring an item edit was identified.

## Routed verdicts

- RN local gauges: `accepted_repair`, confidence 1; one nonfatal prerequisite-justification defect closed by the explicit cycle construction.
- Topological charge: `reviewed_no_defect`, `audit_enrichment`; its true cycle premise now points to the exact construction. No separate false consumer claim was found.
- Ergosurface counterexample: `reviewed_no_defect`, `audit_enrichment`; the prior nonempty rotating family was already a sound refutation, and the numerical tuple makes it concrete.

The decisions file contains exactly these three touched obligations; the scope has no finding or page decisions. All current carrier bytes match the frozen post-reader snapshot; the pre/post manifest fingerprints are unchanged. No Statement/Definition or other public interface changed, so no new consumer propagation is required. No item, page, manifest, provenance or verification stamp was edited during adjudication.

## Sources and scope limits

Read the exact cited supplier Definition/Statement sections; where used, checked current supplier proofs for RN gauges, finite-chain Stokes, KN flux, Ricci invariants and causal vocabulary. Every contract citation supplier was opened. Local proof deductions were checked independently, including angular cone directions and all four Kruskal quadrants. This review does not certify the outside draft verification/rational-calculus chains: equation continuation, charged curvature identity and KN dual flux retain their explicit conditional status. All owned carriers are mathematical models with purely mathematical prerequisites; measured input and statistical inference are absent.

Retrieved [Carroll, Lecture Notes](https://arxiv.org/pdf/gr-qc/9712019), printed pp. 201-202 (PDF pages 208-209), equations (7.106)-(7.113): inspected RN metric, negative electric sign, dyonic field and discriminant. Retrieved [Adamo-Newman v2](https://arxiv.org/pdf/1410.6626), section 3.3, printed pp. 17-18 (PDF pages 18-19), equations (3.18)-(3.23): checked advanced coefficients and radial/stationary-limit roots, accounting for the source opposite signature. These are source checks, not imported global event-horizon or censorship proofs. In particular, the owned full-screen cone proof does not use the source prose shortcut expressing arbitrary null rays as combinations of only two principal rays.

No defective published supplier was identified in the exact uses inspected; no published ledger edit or withdrawal was needed. No escalation is open. Final local validation is recorded below; the engine owns hashes and the gate battery.

## Local checks and metadata corrections

Initial strict proof-contract check: failed with nine metadata diagnostics (seven L1 vocabulary quotations stale against the current Definition; two topological-charge source_section values combining Statement and Proof, which is not an accepted section label). These diagnostics did not expose a mathematical defect. Corrected only the owning contract citations: precise current Definition clauses (b)/(c)/(d)/(e), RN Statement for F1, and exact KN Statement for L1; the finite-chain construction is separately reviewed at supplier Proof 1.1 and 2.1 above. The actual supplier uses were already independently checked above. No item or public interface was changed and no defect-ledger row was created for the mechanical failures.

Initial and final risk-report commands select only batch 22. The final --require-reviewed run reports 15 routed items and zero errors. Precheck of the three touched items reports 3 checked, 0 failing. The renderer reports 3 files with valid YAML and KaTeX, and no delimiter or link defects. The final strict contract and proof-layout results are recorded below.

The intermediate strict rerun rejected `Proof` itself as a source_section; it was corrected to the exact supplier Statement. Proof locators remain in the scientific review rather than the machine citation-section field.

Final focused checks (all exit 0):

- `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-22.proof-contracts.json --strict`: 15/15 items, 0 errors, 0 warnings after citation metadata correction.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/prop-emg-xs-rn-local-gauges.md items/ex-emg-xs-topological-charge.md items/cex-emg-xs-ergo-is-not-horizon.md`: 3 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` on the same three explicit paths: valid YAML and KaTeX, no delimiter defects.
- `node tools/physics-support/proof-layout.mjs` on the same three explicit paths, after the final metadata correction: 3 items, 11 steps, 0 defects. No item edits or formatter followed it.

The defect ledger append command added exactly one closed nonfatal row, `physics-remaining-80-2026-10-17-3a-batch-22-sphere-cycle`, at `3a-adjudicate`, referenced by the accepted RN repair. The other two decisions are audit enrichment with empty defect IDs. Contract citation normalization is mechanical maintenance and closes no separate defect. The frontier dependency ledger records the owned conditional supplier uses and completed local review. No judge, stamp, source certification, dispatch, publication, commit or engine gate was run. No blocker remains for this local handoff; outside draft suppliers retain their explicitly recorded proof status.
