# Step 5a reader report — batch 9

Run: `frontier-37-owner-30`  
Dispatch run: `frontier-37-owner-30`  
Batch: `9`  
Role: reader

## Opened inventory

Opened both assigned pages:

- A — `library/pde/poisson-problems-and-interior-harmonic-estimates.md`
- B — `library/pde/poisson-problems-and-interior-harmonic-estimates-examples.md`

Opened all 21 A-page items:

- `def-local-holder-and-c-two-alpha-norms-on-euclidean-balls`
- `lem-euclidean-balls-are-bounded-c-one-domains`
- `lem-kelvin-inversion-and-the-laplace-operator`
- `lem-reflection-green-function-for-the-half-space`
- `thm-green-function-for-a-ball-in-rn`
- `thm-poisson-kernel-for-a-ball-in-rn`
- `lem-ball-poisson-kernel-is-positive-and-normalised`
- `lem-poisson-kernel-boundary-cap-and-complement-estimate`
- `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral`
- `cor-uniform-boundary-convergence-of-ball-poisson-integrals`
- `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space`
- `thm-interior-derivative-estimates-for-harmonic-functions`
- `cor-harmonic-cauchy-estimates-in-supremum-norm`
- `thm-interior-estimate-for-poisson-equation-with-holder-data`
- `lem-interior-oscillation-controls-harmonic-gradient`
- `cor-entire-harmonic-function-of-sublinear-growth-is-constant`
- `thm-locally-uniform-harmonic-convergence-is-c-infinity-local`
- `thm-harmonic-functions-are-real-analytic`
- `cor-interior-laplacian-gradient-estimate`
- `rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated`
- `cor-unique-continuation-for-harmonic-functions`

Opened all nine B-page examples and counterexamples:

- `ex-poisson-extension-of-a-coordinate-function-on-a-ball`
- `ex-poisson-kernel-concentrates-at-a-boundary-point`
- `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump`
- `ex-half-space-poisson-extension-of-a-plane-wave`
- `cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control`
- `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control`
- `cex-interior-estimates-cannot-use-distance-zero-to-the-boundary`
- `ex-harmonic-taylor-series-on-a-ball`
- `cex-smooth-does-not-imply-real-analytic-for-general-pde`

Opened local dependencies needed for the non-elementary checks, including the Green representation formula, the Green and Poisson kernel definitions and symmetry result, the fundamental-solution distribution identity and harmonicity, the Newtonian potential Hölder theorem, the smooth-sphere harmonic replacement lemma, the disc Poisson kernel and continuous-data Dirichlet theorem, Fourier transform of plane waves, Liouville and maximum principles, harmonic mean-value and smoothness results, and convergence of harmonic functions. Also opened the assigned consumer statements before relying on them.

## Repairs made

1. **A-page summary.** The summary called the Poisson-equation result an interior $C^{1,\beta}$ estimate and grouped it with consequences of differentiating the harmonic Poisson representation. The assigned theorem is an interior $C^{2,\alpha}$ estimate proved by a Newtonian-potential decomposition. I changed the summary to state that distinction. I also changed the closing sentence from saying every estimate has a dimension-only $C_n$ constant to saying constants have the dependencies shown in their subscripts; several estimates depend on a Hölder exponent or derivative order.

2. **`cex-interior-estimates-cannot-use-distance-zero-to-the-boundary`.** The statement gave the derivative formula for $k\ge1$, where $k=1$ makes the displayed factor $(1-1/k)^{k-1}$ the undefined expression $0^0$. I restricted the example to integers $k\ge2$, as its facts and proof already did. Updated its batch-9 proof contract. No `verification.judge` record existed on this item. Reflow reported unchanged; precheck passed (1 checked, 0 failing).

3. **`thm-harmonic-functions-are-real-analytic`.** Its $n\ge2$ statement used a Poisson representation fact that covered only $n\ge3$. For $n=2$, I added the ball-mean-value regularity and smooth-sphere replacement dependencies, then stated the separate planar route: harmonic regularity gives smooth trace data, to which the smooth-data replacement formula applies. I also repaired the kernel Taylor-bound argument: the binomial expansion now has an explicit convergence neighborhood; the coefficient count accounts for the $2n$ linear and quadratic monomials; positive derivative orders use the factorial kernel bound, while order zero is bounded directly by $M$. The Taylor-series argument now explicitly gives a polydisc within the convergence ball. Updated the batch-9 proof contract. No `verification.judge` record existed on this item. Reflow completed; precheck passed (1 checked, 0 failing).

4. **`rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated`.** The remark said planar Poisson theory was used only through the cited full disc theorem. The analytic and derivative items also use the distinct smooth-data sphere replacement lemma. I clarified that the full continuous-data disc theorem remains cited from its home page and described the limited smooth-data use; I also replaced “dimension-independent as written” with the actual separate planar routes. The Hunter source locator incorrectly assigned “dimension-independent interior estimates” to §2.6. Hunter’s table of contents identifies §2.2 as “Derivative estimates and analyticity” (printed p. 23) and §2.6 as “Fundamental solution” (printed p. 33); I corrected the locator accordingly. Updated the proof contract. No `verification.judge` record existed on this item. Reflow reported unchanged; precheck reported 0 checked, 0 failing.

## Remaining uneditable defect

The B-page summary, line 9, says the zero half-space trace has the “nonzero bounded harmonic solution $t$.” This is false: the assigned counterexample item correctly shows $u(x',t)=t$ is harmonic, has zero trace, and is unbounded, since $u(0,t)=t\to\infty$. B-page prose is not editable in this dispatch. It is reported in `research/frontier-37-owner-30-reader-findings-9.json` for the 5b lead.

## Page verdicts

- **A page:** Pass after the summary corrections above. Its remaining summary claims agree with the opened statements and arguments.
- **B page:** Fail. The line-9 boundedness claim above is false and remains uneditable here. The other example summaries match their opened items.

## Source checks and coverage limit

I checked Schmidt’s *Partial Differential Equations I*, §2.8, Main Theorem (Poisson integral formula), printed pp. 47–49; it gives the ball Poisson representation and kernel. I also checked §2.11, Theorem “regularity and solution properties of the Newton potential,” part (II), which states the $C^{2,\alpha}$ conclusion and estimate, and its proof’s Hölder estimate (PDF pp. 73–77). Hunter’s *Notes on Partial Differential Equations*, §2.2, Theorems 2.7 and 2.9, printed pp. 23–25, gives the dimension-independent interior derivative estimates and factorial bound; its table of contents is the evidence for the corrected §2.6 locator. URLs: [Schmidt](https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf), [Hunter](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf).

All assigned items and pages were opened, but I did not independently audit every transitive calculus, measure, and distribution dependency or every bibliography locator. The Schikorra PDF did not load in the browser. No unresolved mathematical uncertainty remains in the repaired claims; the B-page false claim is the only finding left for the next lane.

Blocker: none.
