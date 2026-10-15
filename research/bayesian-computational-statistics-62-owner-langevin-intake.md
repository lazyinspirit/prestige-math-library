# BCS38 owner intake and proof architecture

This is research evidence and an authoring proposal, not acceptance, readiness,
an audit or native execution evidence. Live batch-38 carriers are untouched
pending the root's confirmed native-writer drain. The approved BCS-35 claim is
the invariant-law bound, not the additional transient estimate (20) in the
source; its complete current statement can be preserved.

## Confirmed defects and exact consumers

1. `thm-ula-quantitative-invariant-law-weighted-tv-bias` has an explicitly
   unprovided proof. Its established conclusion must receive a local proof,
   rather than an open-problem designation or a weaker replacement. The actual
   formal-generator and Euler-drift suppliers do not prove stochastic
   existence, invariant existence, weighted contraction, or path entropy.
2. The current batch-35 geometric-ergodicity theorem assumes an invariant
   probability and proves ordinary TV convergence with a state-dependent
   envelope. It cannot supply invariant existence or contraction in the
   weighted test-function norm. A specialized elementary weighted contraction
   lemma is the smallest useful supplier, rather than a second general Harris
   recurrence development.
3. MALA's three escalations are the undeclared standard-Borel supplier-page
   edge, not a defect in the inspected accepted-flow specialization. The actual
   batch-6 standard-Borel lemma now has a ready Step-1 record; root owns its
   current-byte readiness and page-requirement reconciliation. Actual MH33
   density-ratio and reversible/invariant theorem statements have the exact
   finite jointly measurable densities, sigma-finiteness, AC and standard-Borel
   assumptions required by MALA. No mathematical MALA rewrite is proposed.

Direct/indirect logical consumer search must accompany final integration. No
existing Statement/Definition is proposed to change: new prerequisite lemmas
and the missing theorem proof suffice. Root owns manifests, contracts, levels,
hashes, readiness and all certifications.

## Full-source reading and correction

The complete 37-page Durmus--Moulines v3 PDF was fetched independently, together
with the full arXiv HTML. The actual Theorem 10, Proposition 2 and its complete
proof, Proposition 7/8, and complete section 4.6 were read. The source imports
Girsanov and weighted ergodicity from other works; those citations cannot serve
as local proofs. Equation (15) prints the entropy direction opposite to the
Euler-path expectation in its next line: the usable local bound is
`D(Euler || diffusion)`, not `D(diffusion || Euler)`. The source's sign error in
Lemma 24 and drift-radius defects were already independently corrected by the
native author. This intake does not claim to have read the imported books.

## Local replacement proof, preserving all hypotheses and the full step range

Write `g=grad U`, `V=exp(U/2)`, `W=exp(U/4)`, and translate the minimizer to
zero only in estimates. The existing radial-coercivity result gives
`U(x)>=c|x-x*|^alpha-C`; hence every polynomial is bounded by a constant times
`V` and `pi_U(V)<infinity` by radial integration. A finite-V measure therefore
has finite second moment and finite gradient-square moment.

### A. Finite-horizon change of drift and entropy

The delegated Girsanov branch proves the bounded-energy exponential,
change-of-measure Brownian property using product Ito and Levy, and removal of
stops by linear-growth target moment and entropy bounds. For an Euler
interpolation started from a finite-second-moment law, it must give

`D(Law(Euler path)||Law(Langevin path)) <= (L^2/4) sum_k
 [gamma^3 E|g(X_k)|^2/3 + d gamma^2]`.

Indeed the conditional Euler increment has mean `-s g(X_k)` and covariance
`2s I`, so `E|Y_(k gamma+s)-X_k|^2=s^2 E|g(X_k)|^2+2ds` exactly.
The theorem only needs this direction. Endpoint entropy follows from the
same local lemma's proved data-processing inequality.

### B. Diffusion density, symmetry, compact minorization and moments

The actual in-run globally Lipschitz SDE theorem provides the unique strong
solution from any deterministic state on every finite horizon. The additive
noise equation is a deterministic integral equation in its initial state and
continuous Brownian input; Picard/Gronwall gives a jointly continuous solution
map and its flow composition law. Brownian independent increments therefore
give a Borel Markov semigroup `P_t`.

For `t>0`, change drift from `x+sqrt(2)B` and apply multidimensional Ito to U.
The density on paths is

`exp((U(x)-U(Y_t))/2 + int_0^t [Delta U(Y_s)/2-|g(Y_s)|^2/4] ds)`.

The resulting transition density is

`p_t(x,y)=h_t(y-x) exp((U(x)-U(y))/2)
 E exp(int_0^t [Delta U(bridge_s)/2-|g(bridge_s)|^2/4] ds)`,

where `h_t(z)=(4 pi t)^(-d/2) exp(-|z|^2/(4t))` and
`bridge_s=x+(s/t)(y-x)+sqrt(2)(B_s-(s/t)B_t)`.

The bridge disintegration is proved, not imported: every finite vector of
centered bridge coordinates is jointly Gaussian and has zero cross covariance
with B_t, hence is independent of B_t. Rational-coordinate generation of the
continuous-path Borel sigma-algebra and the pi-lambda theorem extend this
factorization to bounded Borel path functionals. The finite-dimensional
Gaussian covariance also shows the centered bridge equals its time reversal
in law. Approximation by Riemann sums makes the displayed integral a Borel
path functional. Since `|Delta U|<=dL`, its exponential is bounded above by
`exp(tdL/2)`. Thus every manipulation uses a bounded nonnegative integrand
after the endpoint factor has been separated.

Time reversal of that bridge shows
`exp(-U(x))p_t(x,y)=exp(-U(y))p_t(y,x)`, proving reversibility and invariance
of the normalized target by Tonelli and the Markov mass-one property.

For x,y in `B(x*,R)`, Doob's L2 estimate gives
`E sup_s |sqrt(2)(B_s-(s/t)B_t)|^2<=32dt`. With
`A=sqrt(64dt)`, the event that this supremum is at most A has probability at
least 1/2. On it the whole bridge stays in `B(x*,R+A)`, so its integrand is
bounded below by `-dL/2-L^2(R+A)^2/4`. Both the heat density and endpoint U
factor have strictly positive lower bounds on this compact product. Therefore
`inf_{x,y in B(x*,R)}p_t(x,y)>0`. Restriction to a ball of positive finite
Lebesgue volume supplies a one-step minorization for each compact starting
ball, with a normalized uniform reference measure.

Apply stopped Ito to `exp(a_s t) exp(s U(X_t))`, with the existing formal
generator inequality, then Fatou as the exit radii increase. The stopped
martingale is integrable because all coefficients are bounded on each stop.
This gives `P_t exp(sU)<=exp(-a_s t)exp(sU)+b_s/a_s` for `s=1/4,1/2`.
The weighted-Harris lemma applied to `P_1` and `W` gives
`||mu P_t-nu P_t||_W<=C exp(-v t)||mu-nu||_W` for finite-W probabilities;
the residual interval `[0,1]` is bounded by the same drift estimate.

### C. Euler invariant existence and uniform moments

For each fixed `0<gamma<1/L`, the existing positive Gaussian density and
exponential drift, coercivity and compact-ball minorization meet the new
weighted-Harris lemma with V. Thus a unique invariant probability mu_gamma
exists, has finite V, and converges in V norm. Uniqueness also holds among
invariant probabilities without assumed moments, by pointwise ordinary-TV
convergence and dominated convergence against such a law.

The existing completed-square calculation gives
`R_gamma V <= V exp(d[-log(1-L gamma)]/2-gamma|g|^2/4)`.
For `gamma<=gamma0=1/(2L)`, the logarithmic term is at most `dL gamma`.
Choose R so radial drift implies `|g|^2/4>=dL+1` outside its ball.
Outside, `R_gamma V<=exp(-gamma)V`. Inside, `V<=M` and
`R_gamma V-exp(-gamma)V <= M(exp(dL gamma)-exp(-gamma))<=b gamma`, with
`b=M(dL+1)exp(dL gamma0)`. Invariance therefore gives
`mu_gamma V <= b gamma/(1-exp(-gamma)) <= b exp(gamma0)`, uniformly for
small steps. The integral is legitimate because finite V was established first.

For the remaining steps it suffices to bound mu_gamma W uniformly. The same
Gaussian calculation with `H_s=exp(sU)` gives

`R_gamma H_s/H_s <= (1-2sL gamma)^(-d/2)
 exp(-s gamma[1-s-L gamma/2]|g|^2/(1-2sL gamma))`.

For `s=1/4` and all `gamma<1/L`, the logarithmic term is at most
`dL gamma/2`, and the negative coefficient is at least `gamma/16`.
Choose R' so `|g|^2/16>=dL/2+1` outside. The previous compact-ball estimate
now gives `R_gamma W<=exp(-gamma)W+b' gamma` with b' independent of gamma.
Consequently `sup_{gamma<1/L}mu_gamma W<infinity`.

### D. Fixed physical block and absorption

Choose T0 finite so `C exp(-v T0)<=1/2`, and for a small step let
`m=ceil(T0/gamma)` and `T=m gamma`. Start Euler from mu_gamma; its grid
laws remain mu_gamma. The preceding uniform V bound and gradient-square
bound give, by A, endpoint entropy at time T at most `c gamma`, since
`T<=T0+gamma0`. Euler's endpoint V moment is mu_gamma V and diffusion's
endpoint V moment is at most `mu_gamma V+b_(1/2)/a_(1/2)` by B. The existing
weighted Pinsker inequality with W (whose square is V) thus gives
`||mu_gamma-mu_gamma P_T||_W<=c' sqrt(gamma)`.

Both invariant laws have finite W. Invariance of pi_U and the diffusion
contraction then give

`||mu_gamma-pi_U||_W <= c' sqrt(gamma)
 + (1/2)||mu_gamma-pi_U||_W`.

Absorb the last term. For `gamma>=gamma0`, the uniform W moment from C and
`pi_U W<infinity` bound the weighted distance by a constant, which is at most
a new constant times `sqrt(gamma)` because `sqrt(gamma)>=sqrt(gamma0)`.
This proves the entire approved range with a gamma-independent constant.

This local replacement avoids the unnecessary inhomogeneous full-iterate
block summation. It does not omit any approved invariant-law conclusion.

## Planned source carriers

- `lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts`:
  bounded-energy construction, stopped localization, entropy/data processing.
- `lem-ula-pathwise-kl-error-bound`: exact Euler increment calculation and A.
- `lem-weighted-drift-minorization-gives-contraction-and-invariant-law`:
  one-step weighted coupling, Jordan reduction, Banach limit, all-law uniqueness.
- `lem-langevin-diffusion-density-reversibility-and-compact-minorization`:
  B's strong flow, bridge formula, detailed balance and minorization.
- `thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift`:
  stopped Ito moment bound and weighted-Harris application.
- `lem-ula-uniform-exponential-moments-and-invariant-laws`:
  C's fixed-step existence, sharpened small-step V drift, full-range W drift.
- Existing quantitative theorem: complete D proof, exact unchanged statement.

These are proposals until their proofs and source-exact contracts are actually
authored and checked. No claimed independent audit is attached.
