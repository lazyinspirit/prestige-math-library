---
id: alg-periodic-orbit-pseudoarclength-continuation
kind: algorithm
title: "Finite pseudo-arclength continuation of phase-fixed periodic orbits"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-validated-periodic-orbit-corrector
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - lem-phase-bordered-shooting-jacobian-invertibility
  - thm-pseudo-arclength-local-newton-correction
  - thm-c2-ode-flow-on-common-tube
  - def-validated-periodic-shooting-jet-enclosure
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-augmented-residual-contraction-certificate
  - lem-rational-box-affine-chart-and-dyadic-enclosure
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Definition

Let $f(x,\mu)$ be a $C^2$ one-parameter family in the map convention of [[def-ck-euclidean-maps-and-diffeomorphisms]], and let $G(x,T,\mu)$ be the parameterized phase-bordered shooting map of [[def-validated-periodic-shooting-jet-enclosure]]. Applying [[thm-c2-ode-flow-on-common-tube]] to its static-parameter augmented field $g(x,\mu)=(f(x,\mu),0)$ makes this shooting map $C^2$ on a common compact tube. The branch residual is $F=G:\mathbb R^{d+2}\to\mathbb R^{d+1}$. A finite periodic-orbit continuation request supplies a valid certified Euclidean seed section-root ball, its isolating local curve-chart neighborhood and rank certificate as required by [[alg-pseudo-arclength-continuation-with-certified-local-corrector]], a unit orientation, step size, requested step count, finite continuation/corrector budgets, residual tolerance, angle margin, and the sound flow/jet range provider.

At a certified root, a tangent routine must certify a unit vector in $\ker DF$ and a rank-$d+1$ condition. The predictor is advanced along that tangent. The periodic procedure [[alg-validated-periodic-orbit-corrector]] in section mode supplies an independent Krawczyk box certificate for the square phase/section residual. It may be run as an additional check and its full normalized and physical record may be retained. A Krawczyk box is not substituted for the Euclidean root ball required by [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]. Accepted continuation steps use that generic procedure's actual exact-evaluation or bounded-error branch and its own root-ball tests, with the additional input interface specified below. Forward its complete finite input package: the candidate mode and its required pointwise evaluators if that mode uses them (or choose its enclosure-guided mode), rational initial candidate and validation box, validated-jet step counts and arithmetic caps, preconditioner and exact inverse witness for the corrector's normalized residual, physical minimum Krawczyk box width, and box/update budgets. The corrector retains the rational physical validation box, validates on its affine dyadic unit-box chart, and returns both the normalized certificate and its rational physical image; a degenerate validation box is admitted but validation returns inconclusive. For possibly nonrational tangent/predictor data, forward certified outward rational enclosures of the affine section row and its derivative; unavailable row bounds return inconclusive. The arithmetic evaluator supplies exact or interval-enclosed $F$ and $DF$ from the validated shooting jet. The local inverse and chart interfaces are [[lem-phase-bordered-shooting-jacobian-invertibility]] and [[thm-pseudo-arclength-local-newton-correction]]. Run [[alg-pseudo-arclength-continuation-with-certified-local-corrector]] with the typed evaluator and ball-certificate callbacks below and all its chart, angle, inverse, and finite-budget checks. For the point-evaluation branch, the physical shooting jet gives outward residual and Jacobian intervals in the actual variable order $(x,\theta,\mu)$; append the current affine section row and its certified coefficient enclosures to obtain a square residual $\mathcal G$. Use coordinatewise rational midpoints $\widehat g,\widehat A$ and the sums of the interval radii as certified Euclidean residual and operator-Jacobian errors $\epsilon_g,\epsilon_J$, as proved by [[lem-rational-box-affine-chart-and-dyadic-enclosure]]. The generic branch uses these physical derivatives, not the normalized Krawczyk columns $D\widehat F=DF\,D$. If only normalized columns were retained, undo their known positive diagonal chart exactly and enclose the resulting physical columns before forming these data. An unavailable finite point enclosure returns `root-certificate-inconclusive`.

**Required Euclidean ball certificate.** At every generic candidate $y$, the certificate callback supplies a radius $R>0$, verifies that the whole closed ball $\overline B_2(y,R)$ lies in the declared smooth shooting domain, tube and current isolating chart neighborhood $V_k$, and supplies a sound finite $L\ge0$ with $\|D\mathcal G(u)-D\mathcal G(v)\|_{\rm op}\le L\|u-v\|_2$ for all $u,v$ in that whole ball. This is additional certified input, for example from an independently justified second-derivative bound on a covering tube; it is not inferred from a first-derivative interval, a Krawczyk contraction or the mere existence of a $C^2$ field. The callback also supplies an exact rational inverse witness $V$ for $\widehat A$, checked by both products $V\widehat A=\widehat A V=I$, or a separate sound inverse-bound certificate. With the exact witness one may take $\widehat\beta=\sum_{i,j}|V_{ij}|$ by the same bridge. Missing witness, domain, chart, error or whole-ball Lipschitz data returns `root-certificate-inconclusive`; arithmetic failures propagate without acceptance. Verify exactly the tests of [[thm-augmented-residual-contraction-certificate]]:
$$\widehat\beta\epsilon_J<1,\quad \beta=\frac{\widehat\beta}{1-\widehat\beta\epsilon_J},\quad \rho=\|\widehat g\|_2+\epsilon_g,\quad q=\beta L R<1,\quad \beta\rho\le(1-q)R.$$
A certified upper bound for $\|\widehat g\|_2$ may replace that norm conservatively. The generic algorithm accepts and appends the ball only after these tests and its whole-ball chart inclusion succeed. It retains its original `root-certificate-inconclusive`, `corrector-budget-exhausted`, `tube-exit` and other finite statuses. A small residual, a successful periodic Krawczyk call, or an exhausted Newton budget alone cannot append a continuation ball. If both the ball and a periodic Krawczyk box are reported as certifying the same root, additionally verify inclusion of that entire ball in the Krawczyk-certified physical unique-root box (or supply another checked common-root certificate); otherwise retain the two records without asserting their roots coincide.

When the fixed-parameter phase-bordered $(x,T)$ Jacobian is certified invertible, the full derivative $DF$ has row rank $d+1$: its $(x,T)$ columns already span $\mathbb R^{d+1}$. Thus a fold in the parameter projection does not by itself make the branch singular. Missing tangent/rank evidence, tube exit, failed Krawczyk inclusion, unresolved angle, or exhausted finite budgets returns the corresponding inconclusive status; no global branch-completeness claim is made. Any requested fold certificate is emitted only when the generic continuation algorithm's separate fold checks succeed.

The generic section keeps the supplied previous unit orientation fixed as its normal during each attempt, while the predictor uses the current certified tangent candidate. Forward this previous normal and certify its angle with the current true kernel, along with the generic predictor-offset/chart inequalities. Finite termination is conditional on every invoked flow/jet, tangent, section and fold callback returning in finite time; an outer work budget is not a timeout for a nonreturning callback.
