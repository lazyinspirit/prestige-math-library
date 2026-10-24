---
id: alg-periodic-orbit-pseudoarclength-continuation
kind: algorithm
title: "Finite pseudo-arclength continuation of phase-fixed periodic orbits"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - thm-augmented-residual-contraction-certificate
  - lem-rational-box-affine-chart-and-dyadic-enclosure
  - alg-validated-periodic-orbit-corrector
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - lem-phase-bordered-shooting-jacobian-invertibility
  - thm-pseudo-arclength-local-newton-correction
  - thm-c2-ode-flow-on-common-tube
  - def-validated-periodic-shooting-jet-enclosure
  - def-ck-euclidean-maps-and-diffeomorphisms
justified_by: []
provenance:
  statement: literature-derived
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

Let $f(x,\mu)$ be a $C^2$ one-parameter family in the map convention of [[def-ck-euclidean-maps-and-diffeomorphisms]], and let $G(x,T,\mu)$ be the parameterized phase-bordered shooting map of [[def-validated-periodic-shooting-jet-enclosure]]. For its static-parameter augmented field $g(x,\mu)=(f(x,\mu),0)$, supply the common-tube hypotheses of [[thm-c2-ode-flow-on-common-tube]] on each continuation neighborhood: an open set of initial states whose solutions exist on an open interval containing the required period range and remain in one compact convex subset of the field domain. That theorem makes the shooting map $C^2$ on the declared neighborhood. The branch residual is $F=G:\mathbb R^{d+2}\to\mathbb R^{d+1}$. If a fold check is requested, additionally supply a verified $C^3$ neighborhood of the shooting map $G$ on the fold subtube, as required by [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]; $C^2$ regularity of $f$ alone is not this evidence. Without it, retain fold status inconclusive and do not invoke the fold callback, while ordinary continuation may proceed without a fold request. A finite periodic-orbit continuation request supplies a valid certified Euclidean seed section-root ball with its isolating curve-chart neighborhood and rank certificate, as required by [[alg-pseudo-arclength-continuation-with-certified-local-corrector]], a unit orientation, step size, requested step count, finite continuation/corrector budgets, residual tolerance, angle margin, and the sound flow/jet range provider.

At a certified root, a tangent routine must certify a unit vector in $\ker DF$ and a rank-$d+1$ condition. The predictor is advanced along that tangent. The periodic procedure [[alg-validated-periodic-orbit-corrector]] in section mode supplies a separate Krawczyk certificate for the square shooting/section residual. Forward its complete finite input package: the candidate mode and any required differentiable pointwise/segment evaluators (or choose its enclosure-guided mode), rational initial candidate, arbitrary rational physical validation box and its open convex shooting domain, nonzero rational phase covector and rational reference point, validated-jet step counts and arithmetic caps, dyadic preconditioner and exact rational inverse witness for its normalized residual, physical minimum box width, and box/update budgets. It uses its affine dyadic unit-box chart for positive side lengths, retains the exact physical box and complete mapped partition, and returns inconclusive for validation on degenerate boxes while retaining their candidate use. For possibly nonrational tangent/predictor data, forward certified outward rational enclosures of the affine section row and its derivative; unavailable bounds return inconclusive. For every jet query reorder physical $(x,T,\mu)$ to the jet's $(x,\mu,T)$ coordinates, and return its Jacobian columns to $(x,T,\mu)$ before appending a section row. Preserve this rule in candidate, Krawczyk and continuation-evaluator calls.

Run [[alg-pseudo-arclength-continuation-with-certified-local-corrector]] using its actual exact-evaluation or bounded-error branch and its own certified Euclidean root balls. A periodic Krawczyk box alone is not its ball certificate. Use the generic exact-evaluation branch only with separately supplied exact physical point-evaluation data; interval jet enclosures alone use the bounded-error branch. The local inverse and chart suppliers remain [[lem-phase-bordered-shooting-jacobian-invertibility]] and [[thm-pseudo-arclength-local-newton-correction]], with every generic tangent, previous-normal, chart-angle, predictor-offset and finite-budget check retained. Supply the following finite-return evaluator and ball-certificate interfaces; an unavailable input returns the generic declared failure rather than an accepted step.

**Physical evaluator bridge.** At each exact queried point $y=(x,T,\mu)$, obtain a certified finite rational box containing $y$ within the shooting domain and the declared physical continuation tube; use its singleton when $y$ is rational. Every augmented range-provider tube inclusion required by the jet is checked separately in its own augmented coordinates. A nonrational query requires supplied certified coordinate enclosures, not substitution of a nearby rational point. Run the validated jet on that physical box with the stated coordinate/column permutation. Its residual and physical Jacobian intervals enclose $F(y)$ and $DF(y)$. Coordinatewise rational midpoints and the sums of the coordinate/entry radii give the generic evaluator's certified Euclidean residual error and operator-Jacobian error by [[lem-rational-box-affine-chart-and-dyadic-enclosure]]. For its current affine section form the square residual $\mathcal G(y)=(F(y),\tau_k^T(y-z_p))$ and its physical Jacobian, appending sound interval enclosures of the affine row and its constant term; include all row uncertainty in the square midpoint/error data $\widehat g,\widehat A,\epsilon_g,\epsilon_J$. These are derivatives in physical coordinates, not the normalized Krawczyk columns $DF\,D$. If only normalized data are retained, undo their known positive diagonal chart exactly and enclose the physical columns before forming these bounds. Missing finite point/row/error enclosures returns `root-certificate-inconclusive`; a certified domain/tube exit keeps the generic `tube-exit` status.

**Required Euclidean ball certificate.** At a generic candidate $y$, the callback supplies $R>0$, verifies that the whole $\overline B_2(y,R)$ lies in the declared smooth shooting domain, physical continuation tube and current isolating chart neighborhood $V_k$, and supplies a sound finite $L\ge0$ with $\|D\mathcal G(u)-D\mathcal G(v)\|_{\rm op}\le L\|u-v\|_2$ throughout that ball. This whole-ball bound is additional certified input, for example from a separately justified second-derivative bound on a covering tube. It is not inferred from first-derivative intervals, Krawczyk inclusion or the mere existence of a $C^2$ field. The callback supplies an exact rational inverse witness $V$ for the rational midpoint matrix $\widehat A$, checked by both products $V\widehat A=\widehat A V=I$, or another sound inverse-bound certificate. For the exact witness take $\widehat\beta=\sum_{i,j}|V_{ij}|$. Verify the actual tests of [[thm-augmented-residual-contraction-certificate]]:
$$\widehat\beta\epsilon_J<1,\qquad \beta=\frac{\widehat\beta}{1-\widehat\beta\epsilon_J},\qquad \rho=\|\widehat g\|_2+\epsilon_g,\qquad q=\beta L R<1,\qquad \beta\rho\le(1-q)R.$$
A certified upper bound for $\|\widehat g\|_2$ may replace the norm conservatively. Only a passing ball with the full chart/angle record can be appended by the generic algorithm. Missing witness, whole-ball Lipschitz, domain, chart or error data returns `root-certificate-inconclusive`; finite arithmetic failures and all generic budget/status distinctions remain explicit. A small residual, an exhausted Newton budget or a successful periodic Krawczyk call alone cannot append a continuation ball. If both a generic ball and a physical Krawczyk box are claimed to represent the same section root, additionally certify inclusion of the entire ball in that Krawczyk unique-root image box, or provide another sound common-root certificate; otherwise retain them as separate records without claiming coincidence.

When the fixed-parameter phase-bordered $(x,T)$ Jacobian is certified invertible, the full derivative $DF$ has row rank $d+1$: its $(x,T)$ columns already span $\mathbb R^{d+1}$. Thus a fold in the parameter projection does not by itself make the branch singular. Missing tangent/rank evidence, tube exit, failed Krawczyk inclusion, unresolved angle, or exhausted finite budgets returns the corresponding inconclusive status; no global branch-completeness claim is made. Any requested fold certificate is emitted only when the generic continuation algorithm's separate fold checks succeed.

The generic section keeps the supplied previous unit orientation fixed as its normal during each attempt, while the predictor uses the current certified tangent candidate. Forward this previous normal and certify its angle with the current true kernel, along with the generic predictor-offset/chart inequalities. Finite termination is conditional on every invoked flow/jet, tangent, section and fold callback returning in finite time; an outer work budget is not a timeout for a nonreturning callback.

## Remarks

The schematic below separates the current tangent from the previous orientation. It depicts the idealized case in which the current ball center equals its branch root and the tangent candidate is exact: $\bar z_k=z_k^*$ and $\widehat t_k=t_k$. Thus $z_p=\bar z_k+h\widehat t_k$ lies along the current tangent, whereas the section through $z_p$ is normal to the fixed previous orientation $\tau_k$. The point $z_{k+1}^*$ denotes the unique local branch intersection selected only after the chart, angle, offset and root-certificate checks in the Definition succeed. This is a planar schematic in the physical $(x,T,\mu)$ space; it does not depict validation-ball sizes or Newton iterates. The algorithm and its certification requirements are independent of the picture.

```tikz
\begin{tikzpicture}[scale=1.4]
\draw[thick] plot[domain=-0.8:3.4,samples=60] (\x,{0.144*\x*\x});
\node at (0.45,1.25) {$F=0$};
\draw[->,thick] (0,0) -- (3,0);
\node at (1.45,-0.3) {$h\widehat t_k$};
\draw[dashed] (1.85,2.07) -- (3.45,-0.81);
\node[anchor=west] at (2.1,2.45) {$\tau_k^T(y-z_p)=0$};
\draw[->,thick] (3,0) -- (4.08,0.6);
\node[anchor=west] at (4.08,0.6) {$\tau_k$};
\fill (0,0) circle (1.5pt);
\node[anchor=north east] at (-0.05,-0.08) {$z_k^*=\bar z_k$};
\draw (3,0) circle (2pt);
\node[anchor=north west] at (3.08,-0.13) {$z_p$};
\fill (2.5,0.9) circle (1.5pt);
\node[anchor=east] at (2.35,0.95) {$z_{k+1}^*$};
\end{tikzpicture}
```
