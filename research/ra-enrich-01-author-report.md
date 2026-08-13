# `ra-enrich-01` phase 1b author report

Date: 2026-08-14  
Role: author  
Scope: build only

## Outcome

Six of the seven approved items were authorable from their declared
dependencies and have been written as drafts. The sixth item in dependency
order, `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, was not
authorable from its declared dependencies. In accordance with the dispatch, I
stopped on that item, recorded the blocker below, and continued with the seventh
item. I did not alter the blocked statement, add undeclared dependencies, or
write an incomplete theorem file.

All seven proposed statements are literature-derived: they are the standard
definitions or results identified in the approved Trench, Hunter, Lebl,
OpenStax, and MIT sources. No source hypothesis, domain, endpoint, direction, or
conclusion was changed. The two definitions have `proof: not-applicable` under
the item schema. The four proof-bearing drafts have `proof: ai-altered` because
their arguments were recast around the library's published interfaces rather
than copied from the source exposition.

No plan statement was adjusted. The sole authorability defect concerns the
declared dependency set of item 6, not the truth of its statement.

## 1. `def-taylor-and-maclaurin-series`

- **Provenance rationale.** Trench §4.5, Hunter §§10.7.1–10.7.2, and MIT
  18.100C Lecture 23 give the standard derivative-coefficient definition and
  distinguish the Taylor series at a general centre from the Maclaurin series
  at zero. The plan's warning that the definition itself asserts neither
  convergence nor representation is retained verbatim in substance.
- **Route and adaptation.** This is a definition, so there is no separate
  proof. Its body identifies the finite partial sums with the already-published
  Taylor polynomials and explicitly separates the formal series from any
  convergence or equality assertion.
- **Boundary pass.** The centre is required to lie in the open interval; the
  Maclaurin name is used only when the permitted centre is $0$; the $n=0$ term
  is included. No convergence radius, endpoint, or equality with $f$ is
  inferred.
- **Adjustment.** None.

## 2. `thm-taylor-series-representation-by-remainder`

- **Provenance rationale.** Trench §4.5, pp. 265–266 and Hunter §10.7.1 give
  the equality-via-remainder criterion and the standard uniform remainder
  estimate. The plan's compact interval and the index $M_{n+1}$ are both
  retained explicitly.
- **Proof route and source adaptation.** The pointwise equivalence is proved in
  both directions from the exact identity
  $R_{n,a}f=f-T_{n,a}f$. The uniform part uses the published extreme-value
  theorem to justify each maximum $M_{n+1}$, then applies the published Taylor
  remainder bound pointwise and the published epsilon definition of uniform
  convergence. This replaces the source's surrounding Taylor-theorem
  development with the library's existing finite-remainder interfaces.
- **Boundary pass.** Both directions of the iff are separate steps. The radius
  satisfies $r>0$; the whole compact interval $[a-r,a+r]$ must lie in $I$;
  the maximum is taken on that same nonempty compact interval; endpoints
  $a-r$ and $a+r$ are included in the uniform estimate; $n=0$ is allowed. No
  global derivative bound is introduced.
- **Adjustment.** None.

## 3. `cex-smooth-function-not-equal-to-its-maclaurin-series`

- **Provenance rationale.** Hunter Example 10.31 and Corollary 10.30 and the
  flat-function discussion in Trench §4.5 give the canonical
  $e^{-1/x^2}$ example, all derivatives zero at the origin, and the resulting
  zero Taylor series.
- **Proof route and source adaptation.** Rather than repeat the exponential
  domination estimates already proved in the library, the proof writes
  $\psi(x)=\phi(x^2)$ using the published one-sided flat function $\phi$.
  Repeated chain and product rules show that every derivative is a finite sum
  of polynomial multiples of $\phi^{(j)}(x^2)$; the published flatness of
  $\phi$ then forces every derivative at zero to vanish. This is why the proof
  is `ai-altered`.
- **Boundary pass.** At $x=0$, the defined value and every derivative are zero.
  For both signs of nonzero $x$, $x^2>0$, so $\psi(x)>0$. The zero Maclaurin
  series includes its constant term, converges for every real input, agrees
  with the function only at zero, and disagrees at every nonzero input.
- **Placement control.** The draft declares no later item through
  `justified_by`, and item 7 does not depend on it. It remains a B-page leaf.
- **Adjustment.** None.

## 4. `thm-euler-mascheroni-constant-and-harmonic-asymptotic`

- **Provenance rationale.** Trench Exercise 4.3.14 supplies the Euler constant
  sequence; the standard integral comparison on successive unit intervals
  supplies the monotonicity and lower bound recorded by the plan.
- **Proof route and source adaptation.** The proof writes the successive
  difference as
  $1/(n+1)-\int_n^{n+1}dt/t$ and obtains strict negativity by splitting the
  interval. A second unit-interval comparison gives the precise lower bound
  $1-\log2$. The published monotone-convergence theorem then defines
  $\gamma$. A dyadic integral estimate proves $\log n\to\infty$ from the
  declared integral dependencies, so the final ratio asymptotic does not hide
  an undeclared logarithm-growth theorem.
- **Boundary pass.** The sequence starts at $n=1$. The comparison sum for
  $n=2$ is explicitly allowed to be empty, and $n=1$ is handled separately.
  A split integral proves $1-\log2>0$. Strict decrease gives the strict upper
  bound $\gamma<1$. The quotient conclusion is a limit statement and is used
  only for sufficiently large $n$, where $\log n>0$.
- **Adjustment.** None.

## 5. `def-radian-angle-by-unit-circle-arc-length`

- **Provenance rationale.** Lebl §11.4.3 and OpenStax §7.3 identify radian
  measure with unit-circle arc length. The approved statement's calibration of
  the analytic parameter is preserved.
- **Route and adaptation.** This is a definition, so there is no separate
  proof. The calculation embedded in the definition uses the published sine
  and cosine derivatives and Pythagorean identity to obtain unit speed, then
  invokes the published speed-integral formula for arc length. This adapts the
  geometric source presentation to the library's analytic construction of
  sine and cosine.
- **Boundary pass.** The parameter is restricted to $0\le t\le2\pi$. At
  $t=0$ the restricted path is a singleton and has length zero. At $t=2\pi$
  the path completes one full turn, whose unit-circle length is $2\pi$.
- **Adjustment.** None.

## 6. `thm-analytic-sine-cosine-agree-with-right-triangle-ratios` — blocker

- **Provenance rationale.** The planned acute-angle statement is standard and
  is backed by Lebl §11.4.3 and OpenStax §§7.2–7.3. I found no reason to regard
  the statement itself as false.
- **Exact obstruction.** For $A,O>0$, the declared square-root and
  Pythagorean dependencies show that $(A/H,O/H)$ is a first-quadrant point of
  the unit circle. To prove the claimed existence and uniqueness of
  $\theta\in(0,\pi/2)$, however, one must know that the restriction of the
  analytic parametrisation
  $\theta\mapsto(\cos\theta,\sin\theta)$ to that interval has exactly the
  first-quadrant arc as its image. The exact published statement of
  `thm-sine-cosine-signs-monotonicity-and-ranges` supplies monotonicity on the
  named intervals and only the global ranges $[-1,1]$. It does not state the
  quarter-turn endpoint values, continuity, the intermediate value theorem, or
  the restricted principal-interval images. Global range plus monotonicity does
  not imply the required restricted surjectivity.
- **Why no draft was written.** Supplying the missing argument would require
  undeclared interfaces such as `thm-quarter-turn-values-and-shift-formulas`,
  `thm-sine-and-cosine-derivatives`,
  `cor-differentiable-implies-continuous`, and `thm-intermediate-value`, or a
  previously proved equivalent principal-branch parametrisation. Adding them
  would change the approved dependency contract. The dispatch instead requires
  an author to stop and record an item that does not close from its declared
  dependencies.
- **Boundary pass available after repair.** The hypotheses $A,O>0$ make
  $H>0$ and force both normalized coordinates strictly between $0$ and $1$,
  so the angle is acute. Cases $A=0$ or $O=0$ are deliberately outside the
  theorem: they give axis or quadrantal unit-circle values, not a
  nondegenerate right triangle with both legs positive. No undefined
  side-ratio convention should be added.
- **Adjustment.** None. No file was created for this id.

## 7. `thm-standard-maclaurin-expansions`

- **Provenance rationale.** Trench §4.5, pp. 265–267 and MIT 18.100C Lecture
  23 give the standard expansions, while the five non-binomial families are
  already present as published library statements. The generalized-binomial
  assertion is retained only for $|x|<1$.
- **Proof route and source adaptation.** The proof imports the exact published
  identities and uses repeated termwise differentiation at zero to identify
  their coefficients as Maclaurin coefficients. For the only new family, the
  recursive coefficients are treated separately when $\alpha$ is a
  nonnegative integer and otherwise by the ratio test. Termwise
  differentiation gives $(1+x)B'=\alpha B$; multiplying by
  $(1+x)^{-\alpha}$ and applying the published zero-derivative theorem yields
  $B=(1+x)^\alpha$. This differential-equation comparison is tailored to the
  declared library dependencies.
- **Boundary pass.** The geometric and generalized-binomial series make no
  claim outside $|x|<1$. In particular, no generalized-binomial endpoint
  behaviour is claimed. The ratio-test step separately handles $x=0$ and the
  terminating case $\alpha\in\{0,1,2,\ldots\}$, so it never divides by a zero
  term. The logarithmic endpoint $x=1$ and divergence at $x=-1$ remain exactly
  as published; the inverse-tangent endpoint claim is only $x=1$, with value
  $\pi/4$. The exponential, sine, and cosine claims remain global on
  $\mathbb R$.
- **Adjustment.** None.

## Precheck record and scope stop

The mandated command was run separately on every file that was authored:

- `def-taylor-and-maclaurin-series`: clean exit; no proof body to stratify.
- `thm-taylor-series-representation-by-remainder`: pass after adopting the
  canonical phase order.
- `cex-smooth-function-not-equal-to-its-maclaurin-series`: pass.
- `thm-euler-mascheroni-constant-and-harmonic-asymptotic`: pass.
- `def-radian-angle-by-unit-circle-arc-length`: clean exit; no proof body to
  stratify.
- `thm-standard-maclaurin-expansions`: pass.

No precheck was possible for item 6 because its dependency blocker prevented an
honest item file. No judge, audit, publication, page edit, plan-spec edit,
dependency gate, plan-validation gate, or level-build gate was performed.

## Item 6 amendment — authored on the amended dependency contract

### `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`

- **Outcome.** The amended dependency set closes the earlier gap, and the item
  has now been authored as a draft without changing the approved statement.
- **Provenance rationale.** The statement is `literature-derived`: Lebl
  §11.4.3 identifies the analytic unit-circle parametrisation with radian arc
  length and the standard geometric sine and cosine, while OpenStax §§7.2–7.3
  give the acute right-triangle ratios and their unit-circle coordinate form.
  The proof is `ai-altered` because it replaces those sources' geometric
  presentation with a proof through the library's exact continuity,
  intermediate-value, first-positive-zero, monotonicity, square-root, norm,
  Pythagorean, and radian interfaces.
- **Proof route.** Continuity and the sign change from
  $\cos0=1$ to $\cos2<0$ first produce a positive zero below $2$; minimality
  of $\pi/2$ then gives $\pi/2<2$ and the explicit containment
  $[0,\pi/2]\subset[0,2)$. The intermediate value theorem gives an angle with
  cosine $A/H$, strict decrease gives uniqueness, and positivity of sine on
  $(0,2)$ selects the positive square root in the Pythagorean identity. The
  radian definition then identifies the arc measure, and Euclidean side
  lengths identify the two ratios in the coordinate triangle.
- **Boundary pass.** The hypotheses $A,O>0$ give $H>0$ and put both normalized
  coordinates strictly between $0$ and $1$, so the IVT witness cannot be an
  endpoint. The preliminary IVT use and the angle construction each require
  only one existential witness; strict monotonicity makes the latter unique.
  The containment needed for the $(0,2)$ positivity and monotonicity lemma is
  proved explicitly. Axis and quadrantal cases are excluded: if a leg is zero,
  the unit-circle value remains meaningful but the coordinate configuration is
  degenerate, so no acute-triangle side-ratio convention is imposed.
- **Adjustment.** None. The title, hypotheses, open angle interval, uniqueness,
  arc assertion, and right-triangle conclusions match the approved statement.
- **Disk-state note.** The dispatch describes every amended interface as
  published, but `def-radian-angle-by-unit-circle-arc-length` remains a draft on
  disk. It is the approved earlier same-run dependency and was left untouched;
  this theorem is likewise draft and unplaced pending the owner's publication
  stage.
- **Precheck.** The prescribed item-only precheck passed cleanly on the first
  run; no stratification repair was required.
