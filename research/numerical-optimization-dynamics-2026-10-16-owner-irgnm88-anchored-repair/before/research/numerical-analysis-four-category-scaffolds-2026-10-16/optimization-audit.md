# Optimization category audit and controlling contract appendix

Date: 2026-10-16. Scope: all 35 A/B pairs in
[`optimization-inventory.json`](optimization-inventory.json), the prose in
[`plan-numerical-optimization-track.md`](../plan-numerical-optimization-track.md),
and optimization-specific supplier evidence only. The pair index and each
plan entry link here by exact key. This appendix controls the definitions,
procedure branches, theorem hypotheses and proof obligations summarized
below. It is design prose, not an executable frontier, source-reading receipt,
mathematical acceptance, or proof-completion claim.

## Findings and repairs

Coverage is 35/35. Each original design, amendment, example family and
dependency appears in the inventory; no pair was removed or narrowed. The
plan repair corrected generated labels that had called internal pair keys
“existing library suppliers.” `partition.json` now controls each key's
owner. Non-key prerequisite names are described as current-library A-page
navigation targets; only exact item statements supply mathematics. The
generic owner-snapshot blocks were replaced by references to the concrete
pair-by-pair closure below; the verbatim snapshots remain in the inventory
as provenance rather than closure evidence. Pair-level cross-category edges
are bound to [`cross-category-interfaces.json`](cross-category-interfaces.json).

Actual bodies of named current canonical items were inspected. The limits
below are binding for reuse:

| Optimization use | Canonical bodies inspected | Literal interface limit retained |
| --- | --- | --- |
| NA-09 / OPT0 | `alg-gradient-descent`, `alg-damped-newton`, `lem-armijo-backtracking-terminates-for-strict-descent-directions`, `thm-gradient-descent-rate-under-strong-convexity-and-smoothness`, `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`, `thm-hessian-characterises-convexity`, `thm-banach-fixed-point`, `cor-banach-error-estimates`, `lem-newton-contraction-near-an-invertible-derivative`, `thm-multivariable-taylor-formula-with-lagrange-remainder` | Gradient rate is fixed step $1/L$ on globally smooth strongly convex objectives. Damped Newton requires positive-definite objective Hessian and is local. The frozen-map lemma uses $T_y(x)=x+Df(a)^{-1}(y-f(x))$ with a fixed inverse; it is not ordinary variable-Jacobian Newton. |
| OPT5 | `thm-lagrange-multipliers-for-regular-level-set-constraints`, `thm-locally-convex-strict-separation` | The multiplier result is equality-only; separation is a theorem with its stated locally convex/Hahn–Banach hypotheses. Inequality cones, Farkas, Slater and second order conditions remain local. |
| RARE1 | `alg-importance-sampling`, `thm-ordinary-importance-sampling-is-unbiased`, `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment`, `def-feynman-kac-path-targets-and-normalizers`, `lem-feynman-kac-path-measures-satisfy-forward-recursion`, `alg-sequential-importance-resampling`, `thm-sequential-particle-estimator-is-unbiased`, `lem-smc-finite-horizon-empirical-law`, `lem-smc-multinomial-variance-unrolls`, `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts` | IS requires support/integrability and its variance theorem requires a weighted second moment. SMC gives unbiased unnormalized estimates under finite positive prefix normalizers, not uniform-in-rarity efficiency or finite-particle variance bounds. |
| OPT8 / OPT10 / OPT15 | `def-subgradient-and-subdifferential`, `cor-subgradient-zero-characterises-global-minima`, `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`, `def-lasso-estimator`, `lem-lasso-objective-has-minimizer`, `thm-lasso-basic-inequality`, `ex-orthogonal-design-lasso-is-soft-thresholding` | These define subgradients/projection and Lasso statistics/example. They do not define prox, FISTA, coordinate descent, or its convergence. The example is contextual, never a logical supplier. |
| NA-44 / INV1 | `prop-tikhonov-regularisation-has-singular-filter-factors`, `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution` | Both are finite-matrix statements; they do not supply compact-operator noise/source rates or parameter-choice convergence. |
| STO2 | `thm-control-variate-unbiasedness-and-optimal-coefficient` | This is a fixed-integral estimator theorem, not a variance-reduced optimizer theorem. |
| STO1 | `def-martingale-submartingale-and-supermartingale`, `thm-doob-submartingale-convergence` | Doob convergence applies to a submartingale with bounded positive-part expectations; the Robbins–Siegmund almost-supermartingale lemma is not itself present and must be proved locally from the actual supermartingale convergence hypotheses. |
| DIF2 / DIF3 | `thm-chain-rule-for-total-derivatives`, `thm-euclidean-implicit-function-theorem`, `alg-four-dimensional-variational-assimilation` | Chain rule/IFT supply only their literal finite-dimensional hypotheses; the 4DVAR algorithm is finite descent, not a sensitivity theorem. |
| OPT11 | `def-riemannian-gradient`, `lem-riemannian-gradient-vanishes-exactly-at-critical-points` | These define a gradient and critical-point test, not retractions or optimization algorithms. |
| DIF3 | `alg-four-dimensional-variational-assimilation` | This is a finite-budget gradient-descent procedure and expressly makes no minimizer or sensitivity-convergence guarantee. |
| INV3 | `def-approximate-linear-model-design-and-optimality-criteria`, `lem-log-determinant-concavity-on-positive-definite-matrices`, `thm-d-optimality-equivalence-theorem` | These cover finite-candidate approximate linear designs; nonlinear identifiability, computed-sensitivity error and exact integer allocation remain separate. |
| UQ2 | `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `lem-b-adic-anova-parseval` | Conditional expectation is an $L^2$ projection; b-adic ANOVA completeness/Parseval is for the uniform cube, not arbitrary product laws. |

## Cross-category interface ledger

The linear auditor supplied the following exact A-page mappings and
limitations; pair-key edges remain in the root's directed interface file.

| Key | A-page / current contract | Optimization consumers and retained limit |
| --- | --- | --- |
| NA-02 | `finite-precision-direct-factorizations` | DIF2, NA-44, OPT13, OPT7, OPT2, OPT11, OPT4, OPT6. Relative floating model with explicit square-root/complex/range branches; Cholesky failure is legal. Householder stability needs the local reflector-action bound. Computed least squares includes applying $Q^*$ and solving the triangular system. Refinement only when its proved recurrence has $q<1$. |
| NA-03 | `sparse-matrix-models-and-kernel-costs` | OPT13, OPT9. Exact CSR/matrix-free access and declared operation/storage counts only; no runtime or bandwidth theorem. |
| NA-05 | `krylov-methods-and-lanczos-convergence` | OPT1, OPT9, OPT14, OPT3, OPT11, INV2. Exact-arithmetic Krylov identities and operation counts under the declared orthogonalization; Lanczos convergence needs its spectral interval/gap and nonzero start-angle component. No floating-point convergence transfer. |
| NA-06 | `preconditioner-algorithms-and-residual-metrics` | INV2. Fixed-order/pattern ILU(0), zero-pivot status and exact left/right residual maps only; no flexible GMRES or generic preconditioner-improvement claim. |
| NA-10 | `polynomial-interpolation-and-remainder` | DIF1. Distinct-node polynomial/barycentric interpolation and the $C^{n+1}$ Rolle remainder, not spline or complex-step guarantees. |
| NA-13 | `gaussian-quadrature` | UQ1. Gauss exactness/positive weights for a positive measure with sufficient moments; error estimates remain derivative/measure specific. |
| QUAD-SMOL | `sparse-grid-cubature-and-mixed-regularity` | UQ1. Error needs absolute summability of tensor details and proved mixed-detail decay for the selected rule; adaptive surplus is only an indicator without a tail certificate. |
| VAL-INTERVAL | `outward-rounded-interval-and-ball-arithmetic` | OPT12. Outward enclosures need proved dyadic range reduction/tail methods. Division by an interval containing zero and exhausted budget are inconclusive, not certificates. |

The corresponding A-page body work is recorded in
[`linear-audit.md`](linear-audit.md). Exact incoming dynamics and spatial
interfaces reported by those category auditors are binding here:

| Pair key → A-page | Optimization consumer | Imported statement and boundary |
| --- | --- | --- |
| NA-15 → `runge-kutta-methods-and-order` | DIF3, CTRL1 | Explicit Runge–Kutta stage/tableau recursion and only the local/global error conditions proved for the selected tableau. SSPRK33 preserves a convex invariant only if every forward-Euler map preserves it at the same forward-Euler step bound. RKC contraction applies only to self-adjoint nonpositive matrices. |
| NA-18 → `adaptive-ode-solvers-and-error-estimation` | CTRL1 | Embedded-pair scaled error estimate; accept iff its declared scaled norm is at most one, otherwise reject without advancing, then clip the step-size update and return retry-budget failure if exhausted. The embedded difference is a controller heuristic, not a certified error bound. The residual theorem requires an absolutely continuous reconstruction in a common tube, one-sided Lipschitz bound and explicit residual; validation additionally needs interval residual/interpolation/roundoff enclosures and inward tube invariance. |
| NA-21 → `nonlinear-boundary-value-solvers` | DIF3, CTRL1 | Shooting/multiple-shooting/collocation procedures. Shooting sensitivity is proved locally from difference quotients on a common tube; continuous dependence alone is not differentiability. Midpoint collocation error requires a bounded inverse of the continuous linearized BVP and a discrete inverse perturbation bound. Branch existence under mesh refinement is not imported. |
| T01 → `implicit-stiff-time-stepping-and-algebraic-error` | DIF3 | The exact implicit stage map is differentiable only on a selected stage branch with nonsingular stage Jacobian; for residual $R(Y,u,\theta)=0$, stage sensitivity is $Y_\theta=-R_Y^{-1}R_\theta$, and a solved residual $\rho$ contributes at most $\|R_Y^{-1}\|\rho$. Branch existence is supplied only by T01's stated contraction or dissipative/strong-monotonicity hypotheses. A stopped Newton stage solver is a different finite map. |
| P-NUM-ODE-02 → `global-ode-and-density-error` | DIF3, CTRL1 | Conditional discrete recurrence only: if defects are at most $Ch^{p+1}$, one-step stability at most $1+Lh$, initial error at most $C_0h^p$, and the tube remains valid, then $\max e_j\le[C_0e^{LT}+C(e^{LT}-1)/L]h^p$ (use $C_0+CT$ for $L=0$). Log-density is a separate augmented error; this is not an adjoint or parameter-sensitivity estimate. |
| NA-28 → `finite-element-meshes-and-interpolation` | UQ1, CTRL2 | Affine shape-regular simplex geometry, fixed reference cell/degrees of freedom, interpolation, trace, Green, inverse and scaling estimates. Point evaluation on $H^s$ requires $s>d/2$. The bounded-$C^1$ trace/Green supplier assumes the Axiom of Choice (AC), and Poincaré assumes Countable Choice (CC); neither supplies simplex, polyhedral, $H(\mathrm{div})$ or $H(\mathrm{curl})$ traces, which remain local to NA-28. |
| NA-29 → `ceas-lemma-and-aubin-nitsche-error-estimates` | DIF3, UQ1, CTRL2 | Conforming coercive Galerkin orthogonality/Céa; duality only under the declared primal/adjoint regularity and interpolation estimates. The imported $H^2$ Dirichlet result requires bounded $C^2$ domain, $W^{1,\infty}$ coefficients and Countable Choice, and retains its $L^2(u)$ term. |
| NA-30 → `variational-crimes-and-strang-lemmas` | DIF3, CTRL2 | Bounded/coercive exact form plus explicit quadrature, geometry and consistency defects. No silent exact-integration or uniform-stability claim; NA-12/13 are consumed only under their exact grid and derivative hypotheses. |
| NA-36 → `parabolic-finite-element-methods` | DIF3, CTRL2 | Evolution-triple energy identity for $W=\{u\in L^2(V):u'\in L^2(V^*)\}$, measurable bounded coercive forms/data and the initial trace. A time-dependent Ritz map contributes $(\partial_tR_h)u$. Aubin–Lions compactness is not supplied (PE12 owns it). |
| NA-37 → `finite-element-eigenvalue-approximation` | PC-VAR | Symmetric elliptic compact-resolvent conforming min–max upper bound and eigenspace-gap approximation, with Axiom of Choice and Countable Choice for imported spectrum/min–max. Nonsymmetric extensions remain local and conditional. |
| NA-38 → `spectral-collocation-and-galerkin-methods` | UQ1 | Exact chosen Chebyshev nodes/norms/interpolation/aliasing branch and coefficient regularity, with NA-10/11/12/13 literal results. No generic complex Runge theorem, arbitrary weighted rule or collocation-equals-Galerkin claim. |

For optimization's outgoing interfaces, NA-09 supplies only finite-budget exact
Newton correction with `root`, singular-solve, invalid-domain/stencil and
budget statuses, under $F\in C^2$, an invertible root Jacobian, and a smaller
invariant ball with Lipschitz Jacobian/uniform inverse bounds. It gives no
finite-difference or damped-Newton rate without a separate perturbation proof.
NA-21, PC-CONT, PC-PER, T01, T02 and T06 own residual/bracket, branch, event,
stage and DAE existence arguments; PE01 owns its bracket and local small-data
Riemann solver, while PE27 owns coarse inverse and mesh-uniformity. OPT5
contributes only finite-dimensional normal-cone/KKT and inequality
variational-inequality facts to T11; OPT8 contributes proximal-map existence
and uniqueness (including indicator functions). T11 still owns projection
time stepping, contact and impact convergence proofs. DIF3 contributes only
the matching continuous/discrete adjoint sensitivity interface to T10; T10
owns reset, saltation, event-detection and missed-event proofs. The
optimization→linear VAL-ROOT edge uses NA-09 only for local correction;
interval existence/uniqueness enclosures belong to VAL-ROOT. These keys are
future same-frontier pairs, not current published items. Categories are
thematic partitions: pair-level edges, not category-wide closure, determine
future supplier readiness. A cross-category edge never widens a supplier's
theorem.

## Source and acceptance status

The cited books and papers in the inventory remain acquisition targets unless
their actual reading is documented in a separate source record. This audit
does not claim that a cited theorem was read, that any proposed local proof
was authored or accepted, or that the four-category DAG is mathematically
closed. Every missing established result below is assigned to its named pair
inside the unified design; no “owner will supply it later” is used as a proof.

## Controlling pair-by-pair mathematical contracts

<a id="contract-na-09"></a>

### Contract NA-09

For open $U\subseteq\mathbb R^n$ and $F:U\to\mathbb R^n$, finite-budget
Newton takes $x_0$, residual tolerance, budget, and exact-Jacobian or
nonzero finite-difference increments with all samples in $U$. Return `root`
when $\|F(x_k)\|\le\varepsilon$; otherwise solve
$DF(x_k)s=-F(x_k)$ and update $x_{k+1}=x_k+s$. Singular solve, invalid
stencil/trial, and exhausted budget return distinct statuses. For $F\in C^2$,
$F(x^*)=0$, invertible $DF(x^*)$, and a ball with Lipschitz Jacobian $L$
and inverse bound $K$, Taylor gives $\|e_{k+1}\|\le KL\|e_k\|^2/2$;
choose a smaller invariant ball for local quadratic convergence. Damping
proves only its accepted merit decrease. FD and damped variants get no
quadratic rate without a separate perturbation argument. PE01/PE27 consume
only this local root correction; bracket preservation, coarse derivative
invertibility and mesh-uniformity are their own obligations.

The published page `numerical-optimization-for-statistical-computation`
supplies the canonical gradient/descent and objective-Newton algorithms.
When $F=\nabla f$, identify $DF=\nabla^2f$ and reuse
`alg-damped-newton` only on its $C^2$ objective, positive-definite Hessian
branch with $0<\alpha<1/2$, $0<\beta<1$ and positive decrement tolerance.
Its stationary/decrement/unavailable-solve statuses and pre-update stopping
order are retained. Its local quadratic theorem requires a positive-definite
critical Hessian and Lipschitz Hessian in a ball and bounds only attempted
updates. Neither algorithm covers an arbitrary vector root or an indefinite
nonsingular gradient-root Hessian. A vector-root merit function needs its
own differentiability and strict-descent proof before invoking an Armijo
argument; no objective-globalization theorem is silently transferred.

<a id="contract-opt5"></a>

### Contract OPT5

For $C^2$ $f,h,g$ on open $U$, consider $\min f$ subject to $h=0,g\le0$,
and write $C=\{x\in U:h(x)=0,\ g(x)\le0\}$. At feasible $x$, active
indices are $I(x)=\{i:g_i(x)=0\}$. Define the
Bouligand tangent cone by
$T_C(x)=\{d:\exists t_k\downarrow0,\ d_k\to d,\ x+t_kd_k\in C\}$.
The linearized cone has $Dh(x)d=0$, $Dg_i(x)d\le0$ for $i\in I(x)$.
LICQ is linear
independence of equality and active inequality gradients. MFCQ is full row
rank of $Dh$ plus a kernel direction strictly decreasing every active
inequality (vacuous if none is active). Prove finite-dimensional Farkas by
separating a point from a closed finitely generated cone with its nearest
Euclidean projection; this is the only separation input and does not silently
import locally convex/Hahn–Banach separation. Under MFCQ, prove equality of
the linearized and Bouligand tangent cones and KKT multiplier existence at a
local minimizer; under LICQ, prove uniqueness. With
$L=f+\nu^Th+\lambda^Tg$, KKT comprises stationarity,
feasibility, $\lambda\ge0$, and $\lambda_i g_i=0$. For a multiplier pair,
the critical cone is the linearized cone intersected with
$\{d:\nabla f(x)^Td=0\}$; equivalently, active directions also satisfy
$Dg_i(x)d=0$ whenever $\lambda_i>0$. For closed convex $C$, define the
normal cone
$N_C(x)=\{v:\langle v,y-x\rangle\le0\ \forall y\in C\}$, dual
$q(\lambda,\nu)=\inf_xL(x,\lambda,\nu)$ for $\lambda\ge0$, and scaled
residual
$$r_{KKT}=\|\nabla f+Dh^T\nu+Dg^T\lambda\|+\|h\|+
\|[g]_+\|+\|[-\lambda]_+\|+\|\lambda\circ g\|.$$
Other residual scalings must be stated. Convex sufficiency follows from the
subgradient inequality. Slater zero gap and dual attainment require proper
closed convex objective/inequality functions, affine equalities $Ax=b$ with
dependent rows removed, and a point
$x_s\in\operatorname{ri}(\operatorname{dom}f)\cap_i
\operatorname{ri}(\operatorname{dom}g_i)$ satisfying $Ax_s=b$ and
$g_i(x_s)<0$ for every nontrivial inequality; assume finite primal value
and primal attainment for dual attainment. For $C^2$ data, prove second-order
necessity by a feasible-curve Taylor expansion on the critical cone under the
stated constraint qualification. Under LICQ and KKT, strict positivity of
$d^T\nabla^2_{xx}L(x,\nu,\lambda)d$ for every nonzero critical direction
proves a strict local minimum; positivity is vacuous when the critical cone
is $\{0\}$. No inequality-cone theorem is imported from the published
equality-multiplier item.

<a id="contract-rare1"></a>

### Contract RARE1

For $p=P(A)>0$, ordinary IS returns
$\hat p=n^{-1}\sum_i1_A(X_i)dP/dQ(X_i)$ from IID $Q$ draws; use canonical
unbiasedness only under its support and integrability hypotheses. Relative
error is $\sqrt{\operatorname{Var}_Q(Z)}/p$; bounded relative error means
this remains $O(1)$ as $p\downarrow0$, while logarithmic efficiency means
$\log E_QZ^2/\log p^2\to1$. Compare both variance and work. The zero-variance
proposal is the measure $Q^*(dx)=1_A(x)P(dx)/p$, a benchmark only. For
$P=N(0,1)$, $A=[a,\infty)$, $a\to\infty$, and $Q=N(a,1)$, the likelihood
ratio $Z=1_A dP/dQ$ satisfies
$E_QZ^2=e^{a^2}\bar\Phi(2a)$; Mills' ratio gives logarithmic efficiency,
while relative error grows like $\sqrt a$.

Cross-entropy takes a finite pilot from a declared $q_{\theta_0}$, maximizes
$\sum_j1_A(X_j)\log q_\theta(X_j)$ over a declared parameter set using
lexicographic tie-breaking (invalid log densities have value $-\infty$),
freezes the selected $\hat\theta$, then draws an independent production
sample. No hit/no maximizer returns failure. Conditional production
unbiasedness requires $P\ll q_{\hat\theta}$ on $A$ and a finite first
moment; variance/log-efficiency and total work need separate bounds.

For fixed nested events $A_0\supset\cdots\supset A_L=A$, assume exact
independent sampling from $\pi_{\ell-1}=P(\cdot\mid A_{\ell-1})$ at every
level and $p_\ell=P(A_\ell\mid A_{\ell-1})>0$. Draw $N$ IID states
$X_{\ell i}\sim\pi_{\ell-1}$ independently across levels, set
$\hat p_\ell=N^{-1}\sum_i1_{A_\ell}(X_{\ell i})$, and return
$\hat p=\prod_\ell\hat p_\ell$. An unavailable conditional sampler or zero
prefix returns failure. Independence gives
$$E\hat p=p,\quad
\operatorname{Var}(\hat p)=p^2\left(\prod_{\ell=1}^L
[1+(1-p_\ell)/(Np_\ell)]-1\right).$$
Expanding the product and using $p_\ell(1-p_\ell)\le1/4$ yields
$\operatorname{Var}(\hat p)\le(1+1/(4N))^L-1=O(L/N)$ for fixed $L$.
This is an absolute-error bound and gives no uniform relative-efficiency
claim.

For the particle branch use the canonical full-resampling SIR estimator with
indicator potentials $G_\ell=1_{A_\ell}$ and mutation kernels supported on
$A_\ell$ and invariant for $\pi_\ell$. Zero survivors returns estimate zero
and status `zero-particle-prefix`; canonical unbiasedness requires its exact
positive finite-prefix/full-resampling hypotheses. Define
$Q_{p,L}1(x_p)=E[\prod_{j=p+1}^LG_j(X_j)\mid X_p=x_p]$,
$Z_p=E\prod_{j=1}^pG_j(X_j)>0$, $\eta_p$ the normalized level-$p$ law,
and $h_{p,L}=Q_{p,L}1/(Z_L/Z_p)$. Under the explicit local stability
condition $E_{\eta_p}h_{p,L}^2\le B$ for every $p<L$, the same-frontier
conditional-variance recursion must prove
$$E[(\hat Z_L-Z_L)^2]\le Z_L^2[(1+(B-1)/N)^L-1].$$
This is absolute $O(L/N)$ for fixed $L,B$ because $Z_L\le1$; $B$ may depend
badly on rarity. A stopped-level extension additionally needs a specified
exact hitting/stopped transition kernel (or exact-hitting oracle), cemetery
state convention and proof its Feynman–Kac normalizer equals $P(A)$. That
kernel/event identity is a precise RARE1 authoring hold, not a canonical SIR
result. If approximate kernels have total-variation errors $\epsilon_\ell$,
telescoping bounded potentials gives bias at most $\sum_\ell\epsilon_\ell$;
adaptive levels need a separate conditional/martingale proof.

<a id="contract-dif1"></a>

### Contract DIF1

For stencil points in an open domain, define forward
$D_h^+f=(f(x+h)-f(x))/h$ and central
$D_h^0f=(f(x+h)-f(x-h))/(2h)$. Bounds $|f''|\le M_2$ and
$|f'''|\le M_3$ yield errors $M_2h/2$ and $M_3h^2/6$ respectively;
evaluation error $\delta$ adds $2\delta/h$. Richardson
$(4D^0_{h/2}-D_h^0)/3$ assumes
$|D_h^0f-f'(x)-c_2h^2|\le Mh^4$; then the $c_2$ terms cancel and error
is at most $5Mh^4/12$. Complex-step $\operatorname{Im}f(x+ih)/h$ is second-order only
for holomorphic $f$ real on the real axis; evaluation error is divided by
$h$. For declared sparse row supports, color the column interference graph
so no row contains two columns of one color; a simultaneous color perturbation
then recovers each nonzero. Collision or unknown sparsity invalidates it.
JVP/HVP and random evaluation errors retain their Taylor/error terms.

<a id="contract-dif2"></a>

### Contract DIF2

A finite DAG has constant-arity $C^1$ primitives
$z_j=\phi_j(z_{\mathrm{pa}(j)})$ and one scalar output. Store primal values;
forward mode propagates $\dot z_j=D\phi_j\dot z_{\mathrm{pa}(j)}$ in
topological order; reverse mode seeds output cotangent $1$ and accumulates
$\bar z_i\mathrel{+}=D_i\phi_j^*\bar z_j$ in reverse order. It returns
the derivative of the real-arithmetic graph; nondifferentiable branch or
primitive failure is explicit. Topological induction proves chain-rule
correctness. Bounded-arity constant-cost primitives give reverse work a fixed
multiple of primal work and $O(T)$ tape storage for $T$ nodes. For a piecewise
$C^1$ primitive, use the active-branch derivative only when its branch
inequalities are strict; at a switch return `nondifferentiable` unless a
separate generalized derivative is supplied. Floating execution evaluates a
rounded program; the returned AD derivative is of the corresponding exact
real-arithmetic graph, and NA-02 must bound any derivative discrepancy.
For direction $v$, forward-over-reverse HVP propagates
$\dot z_j=D\phi_j\dot z_{pa}$, then
$\dot{\bar z}_i\mathrel{+}=D_i\phi_j^*\dot{\bar z}_j+
(D^2_{i,pa}\phi_j[\dot z_{pa}])^*\bar z_j$ in reverse order and returns
$H v$. Checkpoint replay must preserve deterministic
primal state and the exact primitive inputs. A fully specified finite-memory
fallback schedule is: for $T$ steps and $m\ge1$ saved-state slots, set
$q=\lceil T/m\rceil$ and save during the original forward pass the states
$x_{jq}$ for $j=0,\ldots,\lceil T/q\rceil-1$ that are below $T$. This uses
at most $m$ slots because $T/q\le m$. For each resulting block $[a,b]$ in
reverse order, and each step index $j=b,b-1,\ldots,a+1$, restore $x_a$,
replay the forward maps through $x_{j-1}$, apply that step's reverse rule,
and discard the workspace state. A block of length $r$ uses exactly
$r(r-1)/2$ extra forward evaluations; total replay is the sum of these
block costs, at most $m q(q-1)/2$, with $O(m)$ saved states and constant
workspace beyond the ordinary adjoint/tape. Replay invariance follows by
induction on the deterministic forward maps. This is an exact schedule and
cost bound, but it is not the promised binomial/Revolve bound or a claim of
optimality. The earlier unverified recurrence omitted the competition for
checkpoints saved during the original forward pass and is withdrawn. DIF2
still owns the precise binomial schedule recurrence and its proof as a
separate authoring hold; no consumer may rely on its cost until that is
written. For $R(z,\theta)=0$, implicit AD requires square nonsingular
$R_z$ and returns $z_\theta=-R_z^{-1}R_\theta$; a scalar objective uses
$R_z^T\lambda=J_z^T$ and gradient $J_\theta-\lambda^TR_\theta$.
Differentiating a stopped iteration instead targets its finite composed map.

<a id="contract-na-44"></a>

### Contract NA-44

For bounded compact Hilbert-space $A:X\to Y$, put $y=Ax^\dagger$ and
$R_\lambda=(A^*A+\lambda I)^{-1}A^*$. For noise
$\|y_\delta-y\|\le\delta$, the ordered chain
$$x^\dagger,\quad R_\lambda y,\quad R_\lambda y_\delta,\quad
R_{\lambda,h}y_\delta,\quad\tilde x$$
gives respectively bias, data-noise, operator/discretization, and solve/
roundoff differences, each counted once. Spectral calculus gives
$\|R_\lambda\|\le1/(2\sqrt\lambda)$ and data error at most
$\delta/(2\sqrt\lambda)$. If $R_{\lambda,h}$ solves a discrete normal
equation with positive regularization $\lambda$, residual $r$ gives
$\|\tilde x-R_{\lambda,h}y_\delta\|\le\|r\|/\lambda$ by inverse norm.
The discretization difference needs a separate operator perturbation bound;
no exact-integration or stability claim is implicit. Triangle inequality is
pathwise, Minkowski gives $L^2$, and a squared root-sum-square requires
orthogonality/covariance terms to vanish. Finite-matrix SVD/Tikhonov does not
prove compact-operator rates.

<a id="contract-opt13"></a>

### Contract OPT13

For full-row-rank $A\in\mathbb R^{m\times n}$, solve
$\min c^Tx$ subject to $Ax=b,x\ge0$. An ordered basis $B$ is an invertible
$m$-column submatrix; set $x_B=B^{-1}b$, $x_N=0$, and
$y=B^{-T}c_B$, so $\bar c_j=c_j-a_j^Ty$. A primal-simplex iteration enters
the least-index nonbasic $j$ with $\bar c_j<0$, solves $Bd=a_j$, and if no
$d_i>0$ returns ray $r_j=1,r_B=-d\ge0$ with $c^Tr=\bar c_j<0$. Otherwise
set $\theta=\min_{d_i>0}x_{B_i}/d_i$, update
$x_B^+=x_B-\theta d$, $x_j^+=\theta$, and leave the least-index basic
variable among minimizing rows. The objective change is
$\theta\bar c_j\le0$, strictly negative only when $\theta>0$. If no reduced cost is negative, return
the primal basic solution and dual $y$; exact feasibility and complementary
slackness prove optimality.

Dual simplex starts from a basis with all $\bar c_j\ge0$. If the basic
solution has a negative component, choose the least-index row $i$ with
$x_{B_i}<0$. For nonbasic $j$ with
$d_{ij}=(B^{-1}a_j)_i<0$, enter one minimizing
$\bar c_j/(-d_{ij})$, with least-index tie, then pivot; this preserves dual
feasibility. If no such $j$ exists, return
$y=B^{-T}e_i$: then $A^Ty\ge0$ and $b^Ty=x_{B_i}<0$, the Farkas
infeasibility certificate. A finite wrapper caps pivots and reports the
current basis and residual status.

Phase I multiplies rows with $b_i<0$ by $-1$, adds identity artificial
columns and minimizes their sum from the feasible artificial basis. Positive
optimum yields a dual Farkas certificate. At zero optimum, pivot each
zero-valued artificial basic variable out using any original nonbasic column
with nonzero coefficient in its transformed row, choosing least index; if
none exists, remove that redundant equation. This produces an original
feasible basis or reports an exact row-rank inconsistency. Prove basis
existence by the pointed polyhedron/extreme-point argument, Phase I extraction
by these pivots, and Bland's finite termination by contradiction on a
repeated basis and lexicographic perturbation. Finite precision supplies
residual/gap bounds only under explicit NA-02 roundoff scales; a near-zero
Phase-I objective is not an exact infeasibility certificate.

<a id="contract-opt8"></a>

### Contract OPT8

For proper lsc convex $g$, define
$\operatorname{prox}_{tg}(v)=\arg\min_u g(u)+\|u-v\|^2/(2t)$.
First prove an affine-minorant lemma for proper lsc convex functions on
finite-dimensional space, using a supporting hyperplane to the epigraph at a
relative-interior domain point. Then $g(u)+\|u-v\|^2/(2t)$ tends to
$+\infty$ as $\|u\|\to\infty$; it is lsc, so compact sublevels and
Weierstrass give a minimizer. The positive quadratic makes it strictly
convex, hence unique; convex Fermat gives $v-u\in t\partial g(u)$.
For finite convex $L$-smooth $f$ with $L>0$ and a minimizer of $f+g$,
proximal gradient is
$x_{k+1}=\operatorname{prox}_{g/L}(x_k-\nabla f(x_k)/L)$; the three-point
inequality gives
$F(x_k)-F^*\le L\|x_0-x^*\|^2/(2k)$. FISTA initializes
$a_0=1$, $y_0=x_0$, and for $k\ge0$ sets
$$x_{k+1}=\operatorname{prox}_{g/L}(y_k-\nabla f(y_k)/L),\quad
a_{k+1}=\frac{1+\sqrt{1+4a_k^2}}2,\quad
y_{k+1}=x_{k+1}+\frac{a_k-1}{a_{k+1}}(x_{k+1}-x_k).$$
The estimate-sequence proof gives
$F(x_k)-F^*\le2L\|x_0-x^*\|^2/(k+1)^2$. Strongly convex and
inexact-prox rates need separate stated recurrences; they are not implied by
the convex FISTA update.

<a id="contract-inv1"></a>

### Contract INV1

For compact $A:X\to Y$, $x^\dagger\perp\ker A$, and noise
$\|y_\delta-Ax^\dagger\|\le\delta$, define
$x_\lambda^\delta=(A^*A+\lambda I)^{-1}A^*y_\delta$. Noise is bounded
by $\delta/(2\sqrt\lambda)$. Under
$x^\dagger=(A^*A)^\nu w$, $0<\nu\le1$, $\|w\|\le R$, bias is
$C_\nu R\lambda^\nu$; balance at
$\lambda\asymp(\delta/R)^{2/(2\nu+1)}$ for rate
$R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)}$. For Morozov set
$r(\lambda)=\|Ax_\lambda^\delta-y_\delta\|$, which is continuous and
nondecreasing; if
$\operatorname{dist}(y_\delta,\overline{\operatorname{Ran}A})<\tau\delta<
\|y_\delta\|$, $\tau>1$, a crossing exists. A finite search doubles an
initial $\lambda$ until a bracket $(\lambda_-,\lambda_+)$ with
$r(\lambda_-)\le\tau\delta\le r(\lambda_+)$ is found, then bisects a
declared number of times and returns the bracket; no crossing within budget
returns failure. For a finite matrix $A\in\mathbb R^{m\times n}$, GCV uses
$H_\lambda=A(A^TA+\lambda I)^{-1}A^T$ and
$GCV(\lambda)=\|(I-H_\lambda)y_\delta\|^2/[m(1-\operatorname{tr}H_\lambda/m)^2]$;
select the least-index minimizer on an input finite grid. The L-curve rule
likewise selects discrete maximum curvature on an input log-residual/log-norm
grid, with ties/failure declared. These finite rules have no
universal-optimality theorem.

<a id="contract-opt0"></a>

### Contract OPT0

Assume $C^2$ strongly convex $f$, attained interior minimizer, compact
initial sublevel in open convex domain, and $mI\preceq H\preceq MI$ on
trial segments. Exact line search minimizes $f(x-tg)$ over feasible $t\ge0$;
compactness gives attainment and Taylor yields gap factor $1-m/M$. Armijo
reduces $t=1$ by $b$ until $f(x-tg)\le f(x)-at\|g\|^2$; accepted
$t\ge\min(1,2b(1-a)/M)$ and gap factor
$1-2am\min(1,2b(1-a)/M)$. If computed gradient error $\le\delta$ and
computed residual $\le\eta$, strong monotonicity gives
$\|x-x^*\|\le(\eta+\delta)/\mu$. Software flags establish neither
bound. These differ from published fixed-step gradient rate.

Reuse `alg-gradient-descent`, `alg-damped-newton` and
`lem-armijo-backtracking-terminates-for-strict-descent-directions` from
`numerical-optimization-for-statistical-computation`, with their exact
open-domain and stopping interfaces. The published fixed-step theorem uses
$1/L$ and global strong convexity/smoothness; it does not prove the new
exact-search/Armijo rate. For Newton's global damped phase retain uniform
$mI\preceq H\preceq MI$ on trial segments and compact sublevel, then prove
a uniform positive accepted-step/decrease bound away from the local basin.
Lipschitz Hessian and the published local theorem yield unit attempted steps
and quadratic updates in that basin; a positive decrement tolerance may
stop the algorithm earlier, so eventual-unit-step language is conditional on
continued updates. No post-stop infinite sequence is asserted.

<a id="contract-opt10"></a>

### Contract OPT10

Projected subgradient takes nonempty closed convex $C$, convex $G$-Lipschitz
$f$, $x_0\in C$, positive steps $\alpha_k$ and budget $N$. At each step
choose any $g_k\in\partial f(x_k)$, set
$x_{k+1}=P_C(x_k-\alpha_kg_k)$, and return
$\bar x=\sum_k\alpha_kx_k/\sum_k\alpha_k$ or the declared best iterate.
If $\|x_0-x^*\|\le R$ for a minimizer $x^*$ and $\|g_k\|\le G$, the
projection inequality telescopes to
$f(\bar x)-f^*\le[R^2+G^2\sum_k\alpha_k^2]/(2\sum_k\alpha_k)$;
$\alpha_k=R/(G\sqrt N)$ gives $RG/\sqrt N$.

The proximal bundle procedure additionally assumes a finite convex function
$f$ on $C$ with a selectable subgradient at every visited point, stabilizer
$t>0$, serious fraction $m_s\in(0,1)$ and finite
budget. Store cuts $\ell_i(x)=f(x_i)+g_i^T(x-x_i)$ with
$g_i\in\partial f(x_i)$ and model $M_k=\max_i\ell_i$. The subproblem
$z_k=\arg\min_{x\in C}\{M_k(x)+\|x-x_k\|^2/(2t)\}$ has a unique minimizer:
$M_k$ is bounded below by any stored affine cut, the quadratic dominates at
infinity, and lsc/closedness gives attainment; strict convexity gives
uniqueness. Set
$P_k=f(x_k)-M_k(z_k)$. If $P_k\le0$, return `stationary-or-model-failure`
with the model residual; otherwise evaluate $f(z_k)$ and declare a serious
step exactly when $f(x_k)-f(z_k)\ge m_sP_k$. A serious step sets the center
to $z_k$; a null step retains $x_k$. Both append the evaluated cut. With
finite budget keep all cuts, which defines this finite procedure. Any memory
cap needs a specified deletion rule and a new aggregate-model convergence
proof; none is imported here.

Direct search input is an unconstrained open domain, $x_0$, finite
positive-spanning set $D$, mesh
$\Delta_0$, forcing function $\rho(\Delta)>0$ with
$\rho(\Delta)/\Delta\to0$, factors $0<\gamma_{dec}<1<\gamma_{inc}$,
max mesh, and finite budget. Poll all in-domain $x_k+\Delta_kd$ in index
order; accept the first satisfying $f(x_k+\Delta_kd)<f(x_k)-\rho(\Delta_k)$,
and set $\Delta_{k+1}=\min(\gamma_{inc}\Delta_k,\Delta_{max})$. If none
improves, keep $x_k$ and set $\Delta_{k+1}=\gamma_{dec}\Delta_k$. Return
best point, mesh and budget/status. For the asymptotic statement, assume
$f\in C^1$ and its gradient is $L$-Lipschitz on a neighborhood of the
compact sublevel set $K\subset U$ containing the iterates and poll points;
compactness gives a positive distance from $K$ to $U^c$, so all directions
in the finite poll set are in-domain for sufficiently small meshes. Define
$D_{\max}=\max_{d\in D}\|d\|$ and the positive-spanning constant
$\kappa_D=\min_{\|v\|=1}\max_{d\in D}(-v^Td)>0$. At an unsuccessful poll,
$f(x+\Delta d)\ge f(x)-\rho(\Delta)$ for every in-domain poll direction.
The descent lemma therefore gives the actual directional bound
$$\nabla f(x)^Td\ge-\frac{\rho(\Delta)}{\Delta}
-\frac{L\Delta}{2}\|d\|^2.$$
Consequently, for any sequence of unsuccessful poll points with
$\Delta\to0$ and $x\to\bar x$, the positive-spanning direction opposing
$\nabla f(x)$ yields
$$\kappa_D\|\nabla f(x)\|\le
\frac{\rho(\Delta)}{\Delta}+\frac{L\Delta}{2}D_{\max}^2\to0$$
when $\rho(\Delta)/\Delta\to0$. Continuity of the gradient then proves
$\nabla f(\bar x)=0$. This conclusion concerns accumulation points of such
unsuccessful-poll subsequences; a finite budget returns its explicit
budget/status and does not itself certify stationarity.
Constrained stationarity is not claimed unless poll directions positively
span the feasible tangent cone at every accumulation point; discarding
infeasible polls alone is insufficient.

Nelder–Mead takes a nondegenerate $n$-simplex, objective-call budget and
diameter and objective-spread tolerances; stop only when both meet tolerance.
Diameter is $\max_{i,j}\|x_i-x_j\|$ and spread is
$\max_i|f(x_i)-f(x_1)|$. Order vertices by $(f(x_i),i)$ from best $x_1$ to
worst $x_{n+1}$ and let $c$ be the centroid of the best n. With
$\alpha=1,\gamma=2,\rho=\sigma=1/2$, reflect
$x_r=c+\alpha(c-x_{n+1})$. If better than best, compare expansion
$x_e=c+\gamma(x_r-c)$ and choose expansion iff $f(x_e)<f(x_r)$ (otherwise
reflection, including ties). If $f(x_1)\le f(x_r)<f(x_n)$,
accept reflection. If $f(x_n)\le f(x_r)<f(x_{n+1})$, evaluate outside
contraction $x_{oc}=c+\rho(x_r-c)$ and accept iff $f(x_{oc})\le f(x_r)$.
If $f(x_r)\ge f(x_{n+1})$, evaluate inside contraction
$x_{ic}=c-\rho(c-x_{n+1})$ and accept iff $f(x_{ic})<f(x_{n+1})$. On failed
contraction, shrink each nonbest vertex to $x_1+\sigma(x_i-x_1)$ and
reevaluate. Ties follow these weak/strict comparisons and the vertex-index
ordering. Degenerate simplex, nonfinite objective or exhausted budget
returns a distinct status. No generic convergence theorem is asserted.

<a id="contract-opt15"></a>

### Contract OPT15

Let $F(x)=f(x)+\sum_{i=1}^n g_i(x_{B_i})$ with a disjoint block partition,
convex differentiable $f$, and proper closed convex separable $g_i$. If
$\nabla_i f$ is $L_i$-Lipschitz in block $i$, with fixed positive
majorizers $L_i>0$, the randomized proximal update
samples $I_k$ independently and uniformly and sets
$$x_{B_i}^{k+1}=\arg\min_u\{\langle\nabla_i f(x^k),u-x_{B_i}^k\rangle+
\tfrac{L_i}{2}\|u-x_{B_i}^k\|^2+g_i(u)\},\qquad i=I_k,$$
leaving other blocks fixed; the OPT8 proximal-minimizer lemma gives existence
and uniqueness. A finite inner oracle may instead return a point within
$\epsilon_k$ of this subproblem minimum and its certified gap; a larger gap
returns inner-solve failure. The displayed rates are for $\epsilon_k=0$;
inexact rates require their explicit accumulated error term. For $g_i=0$ this is the
gradient step of size $1/L_i$. For the smooth branch $g_i=0$, retain its separately proved convex radius-dependent rate. For a general separable composite, no penalty-independent $R$-only convex rate is inferred from that smooth branch. If $F=f+g$ itself is $\mu$-strongly convex, the same-pair composite-curvature theorem proves unique attainment and the factor $q_c=1-\mu/[n(L_{max}+\mu)]$ using common majorizer $L_{max}$ and uniform independent sampling. If the smooth $f$ itself is $\mu$-strongly convex, preserve the sharper $q_f=1-\mu/(nL_{max})$. Both finite-horizon bounds retain the deterministic certified model-error convolution $\sum_{j<k}q^{k-1-j}\epsilon_j$ and assume accepted calls at every history through the stated horizon; neither conditions the block law on successful calls. The counterexample to $q_f$ from composite-only curvature is retained. Nonuniform sampling requires its own
probability/step relation and theorem. A finite wrapper stops on a declared
proximal-gradient mapping tolerance or budget and returns the current point,
gap estimate if available, and status; these asymptotic rates do not certify
an uncomputed finite residual.

Cyclic exact block descent visits blocks $1,\ldots,n$ in order and replaces
each block by the unique global minimizer of $F$ with other coordinates
fixed; an unattained block minimum returns failure. Under compact sublevels,
continuous unique block-minimizer maps, convex $f$ and separable $g$, every
accumulation point is block-stationary. The product subdifferential rule
then gives $0\in\nabla f+\partial g$, hence global optimality; if the global
minimizer is unique, compactness implies the iterates converge to it. No
stationary theorem is asserted for nonconvex or nonseparable nonsmooth
updates. For Lasso objective
$\|y-X\theta\|^2/(2n)+\tau\|\theta\|_1$, residual excluding coordinate
$j$ is $r_j=y-\sum_{\ell\ne j}X_\ell\theta_\ell$ and the exact cyclic
update is
$\theta_j=S_{n\tau}(X_j^Tr_j)/\|X_j\|^2$ for nonzero column, with
$S_a(t)=\operatorname{sgn}(t)(|t|-a)_+$; use $0$ for a zero column.
The scalar two-half-line minimization and the subgradient interval at zero
prove this formula. Existing Lasso examples do not define the algorithm.
<a id="contract-opt1"></a>

### Contract OPT1

For $g=\nabla f(x)$ and a descent direction $p$, define
$\phi(t)=f(x+tp)$, $\phi'(t)=\nabla f(x+tp)^Tp$. Wolfe accepts only if
$\phi(t)\le\phi(0)+c_1t\phi'(0)$ and $\phi'(t)\ge c_2\phi'(0)$;
strong Wolfe replaces the second inequality by
$|\phi'(t)|\le c_2|\phi'(0)|$, where $0<c_1<c_2<1/2$. A deterministic
bracketing/zoom search starts at $t=1$, doubles until a bracket forms, and
then bisects the bracket: an Armijo failure or nondecrease replaces the
upper endpoint; otherwise return if the curvature test passes, reverse the
bracket if the derivative points out of the interval, and move the lower
endpoint to the trial. Domain exit, a step cap or a finite evaluation budget
returns `line-search-failure`; it never returns an unverified step.

Inexact Newton sets $H=\nabla^2f(x)$ and asks a declared linear solver for
$p$ with $\|(H+\lambda I)p+g\|\le\eta_k\|g\|$, initially $\lambda=0$.
If the solve fails or $g^Tp> -\sigma\|g\|\|p\|$ for fixed $\sigma>0$,
retry with $H+\lambda I$, multiplying $\lambda$ by a fixed factor
$\gamma>1$ until
descent, regularization cap or budget; then use $p=-g$ only if it is a valid
descent direction. Apply the line search above; return distinct solve,
domain and budget statuses. For $F=\nabla f$ with Lipschitz Jacobian and
invertible $DF(x^*)$, the local branch uses $\lambda=0$; Taylor and the
relative residual imply
$\|e_{k+1}\|\le C(\eta_k+\|e_k\|)\|e_k\|$ in an invariant neighborhood:
fixed $\eta_k\le\bar\eta<1$ gives linear convergence, $\eta_k\to0$ gives
superlinear convergence, and $\eta_k=O(\|g_k\|)$ gives quadratic convergence.
For bounded-below $f$ with Lipschitz gradient on all trial segments, Wolfe
search yields the Zoutendijk sum
$\sum_k\cos^2\theta_k\|g_k\|^2<\infty$; a uniform angle then implies
$\|g_k\|\to0$. The solver must actually satisfy its residual bound; a
stopping flag does not prove it.

<a id="contract-opt7"></a>

### Contract OPT7

For strictly feasible $Ax=b,Gx<s$, barrier is
$tc^Tx-\sum_i\log(s_i-G_ix)$. An exact central point has
$\lambda_i=1/(t(s_i-G_ix))$ and gap $m/t$. The finite LP primal-dual
procedure inputs $0<\sigma<1$, fraction $0<\eta<1$, residual/gap
tolerances, and inner/outer caps. Each primal-dual step forms
primal/dual/complementarity residuals, solves Newton equations and takes a
fraction-to-boundary step. For LP, write primal $Ax=b,x>0$ and dual
$A^Ty+s=c,s>0$. At each iteration compute
$r_p=Ax-b$, $r_d=A^Ty+s-c$, $r_c=Xs-\sigma\mu\mathbf1$ with
$\mu=x^Ts/n$, and solve
$A\Delta x=-r_p$, $A^T\Delta y+\Delta s=-r_d$,
$S\Delta x+X\Delta s=-r_c$. Set
$\alpha=\min\{1,\eta\min_{\Delta x_i<0}(-x_i/\Delta x_i),
\eta\min_{\Delta s_i<0}(-s_i/\Delta s_i)\}$ with empty minima $+\infty$,
$0<\eta<1$, then update $(x,y,s)+=\alpha(\Delta x,\Delta y,\Delta s)$.
Return residuals on tolerance, and separate singular-system, lost-range,
nonpositive-gap and finite-budget statuses. Primal/dual feasible points
certify a gap. For self-dual Lorentz or PSD cones, use slack $s=h-Gx$,
dual $z$, residuals $Ax-b$, $A^Ty-G^Tz-c$, and complementarity
$s\circ z-\sigma\mu e$; solve the derivative system with
$\Delta s=-G\Delta x$, then choose the largest fraction-to-boundary step
times $\eta$ keeping both cone variables interior. The Lorentz Jordan
product is $(t,u)\circ(q,v)=(tq+u^Tv,tv+qu)$; the PSD product is
$X\circ S=(XS+SX)/2$. SDP uses $-\log\det X$ on
$X\succ0$, gradient $-X^{-1}$ and Hessian pairing
$\operatorname{tr}(X^{-1}UX^{-1}V)$; prove PSD self-duality and parameter
$n$. SOCP uses the Lorentz barrier $-\log(t^2-\|u\|^2)$ and parameter 2
per cone factor; the orthant barrier has parameter equal to its dimension.
The separate short-step algorithm takes a $C^3$ barrier $F$ on the cone
interior satisfying
$|D^3F(x)[h,h,h]|\le2(h^T\nabla^2F(x)h)^{3/2}$,
$|DF(x)[h]|\le\sqrt\nu(h^T\nabla^2F(x)h)^{1/2}$, boundary blow-up, and
$F(tx)=F(x)-\nu\log t$. It starts at a strict feasible
point with centrality decrement at most $1/4$, and minimizes
$t c^Tx+F(x)$ over $Ax=b$. Its local norm is
$\|d\|_x=(d^T\nabla^2F(x)d)^{1/2}$ on $\ker A$; the Newton decrement is
$\lambda_t(x)=\|\nabla(t c^Tx+F(x))\|_{x,*}$ after restriction to $\ker A$.
At each path step set $t^+=t(1+1/(8\sqrt\nu))$, repeatedly solve
$$\begin{bmatrix}\nabla^2F(x)&A^T\\A&0\end{bmatrix}
\begin{bmatrix}d\\w\end{bmatrix}
=-\begin{bmatrix}t^+c+\nabla F(x)\\0\end{bmatrix},$$
stop recentering when
$\lambda_{t^+}(x)\le1/4$, and otherwise take the damped step
$x\leftarrow x+d/(1+\lambda_{t^+}(x))$. A finite Newton cap returns
`centering-failure`. Prove the central-neighborhood invariant and a uniform
bound on correction steps per path update from the self-concordance
inequalities; $\nabla F(x)^Tx=-\nu$ gives gap $\nu/t$. The resulting path
updates are $O(\sqrt\nu\log(\nu/(\epsilon t_0)))$ to gap $\epsilon$.
This complexity theorem requires the local norm/decrement inequalities,
strict start and centrality invariant proved in the same pair; it does not
follow from the fixed-centering residual loop above.
Failure to find strict feasibility is not an infeasibility proof; weakly
infeasible SDP instances need not have a strict-feasibility certificate.

The conic primal/dual forms are also explicit. For
$Ax=b$, $h-Gx\in K$, the dual is
$\max b^Ty-h^Tz$ subject to $A^Ty-G^Tz=c$, $z\in K^*$; feasible pairs
have gap $c^Tx-b^Ty+h^Tz=\langle z,h-Gx\rangle\ge0$. SOCP primal is
$\min c^Tx$ subject to $Ax=b$ and
$\|F_jx+f_j\|_2\le g_j^Tx+h_j$, equivalently
$(g_j^Tx+h_j,F_jx+f_j)$ lies in the Lorentz cone. Lorentz cones are
self-dual. SDP primal is
$\min C\bullet X$ subject to $\mathcal A(X)=b$, $X\succeq0$; dual is
$\max b^Ty$ subject to $\mathcal A^*y+S=C$, $S\succeq0$. For feasible
primal/dual points the gap is $C\bullet X-b^Ty=X\bullet S\ge0$.

<a id="contract-opt9"></a>

### Contract OPT9

For $\min f(x)+g(z)$ subject to $Kx+Lz=c$, with proper closed convex
$f,g$, fixed $\rho>0$, and scaled dual $u^0$, two-block ADMM chooses an
attained minimizer (least norm to break ties)
$$x^{k+1}\in\arg\min_x\{f(x)+\tfrac\rho2\|Kx+Lz^k-c+u^k\|^2\},$$
then an attained minimizer
$$z^{k+1}\in\arg\min_z\{g(z)+\tfrac\rho2\|Kx^{k+1}+Lz-c+u^k\|^2\},$$
and sets $u^{k+1}=u^k+Kx^{k+1}+Lz^{k+1}-c$. Each subproblem has its own
finite inner cap and failure status; the outer wrapper reports primal
residual, objective, dual residual and budget status. A saddle point,
finite-dimensional spaces and exact attained subproblems are hypotheses for
the two-block theorem: primal residual tends to zero, objective tends to
the optimum and the dual sequence converges under the theorem's stated
existence assumptions. Douglas–Rachford on the two resolvents
$J_{\rho A}=(I+\rho A)^{-1}$ and $J_{\rho B}=(I+\rho B)^{-1}$ is the
operator proof route; the resolvent is single-valued/nonexpansive for
maximal monotone $A,B$, proved locally from monotonicity and maximality.

For $\min_x f(x)+g(Kx)$ with proper closed convex $f,g$ and a saddle point,
PDHG uses
$y^{k+1}=\operatorname{prox}_{\sigma g^*}(y^k+\sigma K\bar x^k)$,
$x^{k+1}=\operatorname{prox}_{\tau f}(x^k-\tau K^Ty^{k+1})$,
$\bar x^{k+1}=x^{k+1}+(x^{k+1}-x^k)$, with
$\tau\sigma\|K\|^2<1$, with $\bar x^0=x^0$. Here
$g^*(y)=\sup_z(\langle y,z\rangle-g(z))$. Define
$\bar x_N=N^{-1}\sum_{k=0}^{N-1}x^{k+1}$ and
$\bar y_N=N^{-1}\sum_{k=0}^{N-1}y^{k+1}$. The energy telescope proves for
every bounded test pair $(x,y)$ the ergodic saddle gap
$$f(\bar x_N)+\langle K\bar x_N,y\rangle-g^*(y)-
f(x)-\langle Kx,\bar y_N\rangle+g^*(\bar y_N)
\le\frac{\|x-x^0\|^2}{2\tau N}+
\frac{\|y-y^0\|^2}{2\sigma N}$$
under the stated step condition; pointwise objective convergence is not
implied. No multi-block or nonconvex theorem is claimed.

<a id="contract-sto1"></a>

### Contract STO1

Let $C\subset\mathbb R^d$ be nonempty, closed and convex, $x_k$ be
$\mathcal F_k$-measurable, and $G_k$ be $\mathcal F_{k+1}$-measurable.
Projected SGD is $x_{k+1}=P_C(x_k-\alpha_kG_k)$; require
$E[G_k\mid\mathcal F_k]=\nabla f(x_k)$ and state the conditional second
moment each theorem uses. The locally proved Robbins–Siegmund lemma is:
assume AC. Let nonnegative adapted integrable $X_k$ obey
$E[X_{k+1}\mid\mathcal F_k]\le(1+a_k)X_k-b_k+c_k$,
where $a_k,c_k$ are deterministic nonnegative summable sequences and $b_k$
is nonnegative, $\mathcal F_k$-measurable and integrable (deterministic
$b_k$ is included). Set $A_0=1$, $A_{k+1}=A_k(1+a_k)$ and
$Z_k=X_k/A_k+\sum_{j=k}^{\infty}c_j/A_{j+1}$.
Then $Z_k$ is adapted, nonnegative and integrable and
$E[Z_{k+1}\mid\mathcal F_k]\le Z_k-b_k/A_{k+1}$.
Thus $-Z_k$ is an integrable adapted submartingale with
$\sup_k E[(-Z_k)^+]=0$; the exact published
`thm-doob-submartingale-convergence` on
`martingale-inequalities-and-convergence` applies, assuming AC.
To obtain the decrement sum, set
$W_k=Z_k+\sum_{j<k}b_j/A_{j+1}$. Each finite sum is integrable;
$W_k$ is also a nonnegative supermartingale, so Doob applied to $-W_k$
gives a finite almost-sure limit. Since the partial sum is at most $W_k$,
$\sum_k b_k/A_{k+1}<\infty$ almost surely. Finally
$1\le A_k\le\exp(\sum_j a_j)$, $A_k$ tends to a finite positive
limit, and the deterministic tail tends to zero. Hence $X_k$ converges
almost surely and $\sum_k b_k<\infty$ almost surely. This proves the
stated local lemma from the literal supplier, without confusing a
supermartingale with a submartingale or deriving finite decrements from
convergence alone. Every instantiation must exhibit its filtration,
nonnegative integrable adapted Lyapunov quantity, predictable decrement and
the two deterministic summable error sequences; the strongly convex and
biased-noise branches retain their stability and moment assumptions.

For $\mu$-strongly convex $f$ on $C$, a minimizer $x^*$, steps
$0<\alpha_k\le1/(2\mu)$, unbiased gradients and
$E[\|G_k\|^2\mid\mathcal F_k]\le M^2$, projection nonexpansiveness and
strong convexity give
$E[V_{k+1}\mid\mathcal F_k]\le V_k-2\mu\alpha_k V_k+M^2\alpha_k^2$,
$V_k=\|x_k-x^*\|^2$. The lemma with $b_k=2\mu\alpha_kV_k$ proves
$V_k\to0$ a.s. when $\sum\alpha_k=\infty$ and $\sum\alpha_k^2<\infty$.
No separate coercivity assumption is needed in this projected theorem. For
unconstrained $L$-smooth $\mu$-strongly convex $f$ with $\nabla f(x^*)=0$,
uniform second moment $M^2$, and $\alpha_k=1/(\mu(k+1))$ for $k\ge1$, the
same recurrence gives
$E\|x_k-x^*\|^2\le M^2/(\mu^2 k)$ and hence
$E[f(x_k)-f^*]\le LM^2/(2\mu^2 k)$.
For convex $f$ on a set of diameter at most $D$, unbiased gradients with
conditional second moment at most $G^2$, and constant step
$\alpha=D/(G\sqrt N)$, the projected-distance telescope gives for
$\bar x_N=N^{-1}\sum_{k=0}^{N-1}x_k$ the bound
$E[f(\bar x_N)-f^*]\le DG/\sqrt N$ (the zero-$D$ or zero-$G$ cases return
the already optimal point). For nonconvex $L$-smooth $f$ bounded below, an
unconstrained update with conditional variance at most $\sigma^2$ satisfies
$E f(x_{k+1})\le E f(x_k)-\alpha(1-L\alpha/2)E\|\nabla f(x_k)\|^2
+L\alpha^2\sigma^2/2$. For $\alpha\le1/L$, choose $R$ uniformly from
$0,\ldots,N-1$; then
$E\|\nabla f(x_R)\|^2\le2(f(x_0)-f_{\inf})/(\alpha N)+L\alpha\sigma^2$.
Choosing $\alpha$ proportional to $N^{-1/2}$ gives the stated
$O(N^{-1/2})$ stationarity bound. If
$E[G_k\mid\mathcal F_k]=\nabla f(x_k)+b_k$, $\|b_k\|\le\beta$, and
$\operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma^2$, then for
$\alpha\le1/(4L)$ the same smoothness calculation gives
$$E f(x_{k+1})\le E f(x_k)-\tfrac\alpha2E\|\nabla f(x_k)\|^2+
\alpha\beta^2+L\alpha^2\beta^2+\tfrac12L\alpha^2\sigma^2.$$
Thus a constant step has an explicit $O(\beta^2+\alpha\sigma^2)$ average
stationarity floor; decreasing steps require the corresponding weighted
bias/noise sums. These are optimization guarantees, not a CLT or inferential
claim.

<a id="contract-opt12"></a>

### Contract OPT12

Let feasible $C\subseteq D_0=\prod_j[a_j,b_j]$ and continuous objective $f$.
Input a certified oracle returning either a feasible point with verified
objective upper bound, a proof that $B\cap C=\emptyset$, or a lower bound
$\ell(B)\le\inf_{B\cap C}f$; also input $\varepsilon>0$, node budget,
and tie rules. Initialize the leaf set with $D_0$ and incumbent $U=+\infty$.
At each node update the incumbent from certified feasible points and mark
certified-empty boxes discarded. Keep every remaining terminal box with its
lower bound. Split the nonempty leaf of least lower bound along its longest
side at midpoint (least coordinate ties); update the leaves with both
children. A box can be closed when $\ell(B)\ge U-\varepsilon$, but its lower
bound remains in the global ledger. If $U$ is finite and
$U-L\le\varepsilon$, with $L$ the least lower bound among all nonempty
terminal leaves, return the feasible incumbent and epsilon-global
certificate. If every box is certified empty, return infeasible. Budget
exhaustion returns $U,L$, all terminal bounds and no certificate. When
splitting, choose only an unclosed live box; if none remains, the ledger's
minimum lower bound decides the certificate. Eventual
termination requires exhaustive subdivision and lower bounds consistent as
diameter tends to zero; constrained pruning requires a certified empty-box
proof, not a numerical infeasibility guess.

For bilinear $w=xy$ on $x\in[l_x,u_x],y\in[l_y,u_y]$, the McCormick
envelope is the four inequalities
$$w\ge l_xy+l_yx-l_xl_y,\quad
w\ge u_xy+u_yx-u_xu_y,\quad
w\le u_xy+l_yx-u_xl_y,\quad
w\le l_xy+u_yx-l_xu_y.$$
Factorable relaxations compose these enclosures; finite-precision use must
carry outward-rounding errors from VAL-INTERVAL. Integer variables with
finite bounds are handled by the same tree with deterministic integer
branching; finite enumeration is the fallback and no polynomial-time claim
is made.

For finite-candidate Bayesian search, input a nonempty finite ordered set
$X$, finite budget, real mean $m$, symmetric PSD kernel $k$ on $X$, noise
variance $\sigma^2\ge0$, finite nonnegative acquisition coefficients $b_t$,
and an initial finite observation list (repetitions allowed). Assume AC and
$f\sim GP(m,k)$ with observation errors independent of the entire process
and of one another, each $N(0,\sigma^2)$. The zero-mean formula is the
special case $m=0$; a deterministic objective may use the same surrogate
rule but receives no assertion that its actual law is this GP posterior.
At $t=0$ use the prior $\mu_0=m$, $s_0^2(x)=k(x,x)$ without an inverse.
For $t\ge1$ form $C_t=K_t+\sigma^2I$ and require $C_t\succ0$.
Indeed for every nonzero $v$, PSD gives
$v^TC_tv=v^TK_tv+\sigma^2\|v\|^2>0$ if $\sigma^2>0$.
Thus positive noise permits singular prior blocks and repeated sites.
Zero noise is also admissible whenever $K_t\succ0$; do not require strict
positive definiteness of the kernel on every possible repeated list.
If positive definiteness or the required solve is unavailable, return
`posterior-solve-unavailable` with the last valid data/state, and no posterior
or next acquisition for that stage. Invalid kernel/noise/model inputs return
`inadmissible-model`; neither branch substitutes a singular conditional or
pseudoinverse formula.

Reuse `thm-finite-gaussian-process-posterior-and-predictive-laws` on
`gaussian-process-priors-and-posterior-laws`: solve the SPD systems using
Cholesky/triangular solves and set
$$\mu_t(x)=m(x)+k_t(x)^TC_t^{-1}(y-m_{X_t}),\qquad
s_t^2(x)=k(x,x)-k_t(x)^TC_t^{-1}k_t(x).$$
The theorem proves the variance is nonnegative and permits it to be zero;
set $s_t=\sqrt{s_t^2}$. No unqualified floating negative variance is clipped
to claim exact validity. Choose the least maximizer of
$\mu_t(x)+b_ts_t(x)$, observe $y_{t+1}=f(x_{t+1})+\xi_{t+1}$, append and
repeat to the finite cap. For a fixed observation list the supplier gives
an all-$y$ conditional-kernel version. For adaptive sites the local proof
must induct over histories: the next site is a measurable deterministic
function of the finite history (finite ordered argmax), its selection adds
no information beyond that history, and independent fresh Gaussian noise
permits the next Gaussian conditioning update. This supplies the sequential
posterior claim; a mere substitution of random indices into the fixed-list
theorem does not. All published singular prior/predictive cases with
$C_t\succ0$ remain supported. This acquisition rule has no generic
regret/global certificate. GP-UCB needs its separate RKHS norm,
conditionally sub-Gaussian noise, confidence-sequence/information-gain
proof and acquisition-error hypotheses; the deterministic branch-and-bound
certificate above is unaffected.

<a id="contract-opt14"></a>

### Contract OPT14

Use $d_0=-g_0$, $d_{k+1}=-g_{k+1}+\beta_kd_k$, with FR
$\beta=\|g_{k+1}\|^2/\|g_k\|^2$ or PR+
$\max(0,g_{k+1}^T(g_{k+1}-g_k)/\|g_k\|^2)$. Stop at zero gradient.
Safeguarded PR+ restarts if $g^Td>-\sigma\|g\|^2$ or
$\|d\|>C\|g\|$, then strong-Wolfe searches and returns failure if budget
expires. The angle bound $\sigma/C$ and OPT1 summability give gradient
convergence. FR's contract is only liminf gradient zero. Linear-CG
equivalence is restricted to SPD quadratics with exact line search.

<a id="contract-opt2"></a>

### Contract OPT2

For $s=x^+-x$, $y=g^+-g$, $s^Ty>0$, inverse BFGS uses
$\rho=(s^Ty)^{-1}$ and
$H^+=(I-\rho sy^T)H(I-\rho ys^T)+\rho ss^T$. Start SPD; choose $-Hg$,
reset to a declared positive scalar multiple of $I$ if descent fails,
Wolfe-search, and update only if curvature is positive. Powell damping uses
$B=H^{-1}$ and, when $s^Ty<0.2s^TBs$, sets
$\theta=0.8s^TBs/(s^TBs-s^Ty)$,
$\tilde y=\theta y+(1-\theta)Bs$; otherwise $\tilde y=y$. Apply the inverse
update with $\tilde y$ only when $s^T\tilde y>0$; on failed linear algebra,
skip the update and report its status. Direct algebra proves secant,
symmetry and SPD preservation. L-BFGS stores at most $m$ pairs
$(s_i,y_i)$, $\rho_i=(s_i^Ty_i)^{-1}$ and, given $g$, performs the reverse
loop $q\leftarrow g$, $\alpha_i\leftarrow\rho_i s_i^Tq$,
$q\leftarrow q-\alpha_i y_i$; sets
$r\leftarrow(s_{last}^Ty_{last})/(y_{last}^Ty_{last})q$; then in forward
order sets $\beta_i=\rho_i y_i^Tr$,
$r\leftarrow r+s_i(\alpha_i-\beta_i)$ and returns $-r$. Invalid curvature
clears or skips the affected pair. This uses $O(mn)$ work and storage.
Full-memory and fixed-memory convergence are separate results with their
convexity, Wolfe, scaling and Dennis–Moré or uniform-spectrum hypotheses.

<a id="contract-opt3"></a>

### Contract OPT3

At $x_k$, let $g_k=\nabla f(x_k)$, symmetric $B_k$, and
$m_k(p)=f(x_k)+g_k^Tp+p^TB_kp/2$; the trust-region subproblem is the global
minimizer of $m_k$ on the compact ball $\|p\|\le\Delta_k$ (or a declared
approximate solve meeting the Cauchy-decrease bound below).
Input $0<\eta_1<\eta_2<1$, $0<\gamma_{dec}<1<\gamma_{inc}$ and
$\Delta_{max}$. A global trust-region minimizer satisfies, for some
$\lambda\ge0$,
$(B_k+\lambda I)p_k=-g_k$, $B_k+\lambda I\succeq0$ and
$\lambda(\Delta_k-\|p_k\|)=0$; the hard case is included when $g_k$
is orthogonal to the minimum-eigenvalue eigenspace and the boundary component
is needed. The Cauchy step is $p_C=-\tau g_k$, where
$\tau=\min\{\|g_k\|^2/(g_k^TB_kg_k),\Delta_k/\|g_k\|\}$ if
$g_k^TB_kg_k>0$, and $\tau=\Delta_k/\|g_k\|$ otherwise; $g_k=0$ returns
stationary. Direct substitution gives
$m_k(0)-m_k(p_C)\ge\frac12\|g_k\|
\min\{\Delta_k,\|g_k\|/\|B_k\|\}$ (with the negative-curvature case
stronger). Compute
$\rho_k=[f(x_k)-f(x_k+p_k)]/[m_k(0)-m_k(p_k)]$ only for positive
predicted decrease. If $\rho_k<\eta_1$, reject and set
$\Delta^+=\gamma_{dec}\Delta$; if $\eta_1\le\rho<\eta_2$, accept and
keep radius; if $\rho\ge\eta_2$ and $\|p\|=\Delta$, accept and set
$\Delta^+=\min(\gamma_{inc}\Delta,\Delta_{max})$; otherwise accept and
keep radius. If predicted decrease is nonpositive, use a proved Cauchy step
or report failure. Retain the best feasible point.
Dogleg is admitted only for SPD $B$: compute $p_N=-B^{-1}g$ and $p_C$;
choose $p_N$ if $\|p_N\|\le\Delta$, choose $p_C$ if $\|p_C\|=\Delta$,
otherwise choose the boundary intersection on the segment from $p_C$ to
$p_N$. Truncated CG starts $p=0,r=g,d=-r$; at each step solve
$\|p+\tau d\|=\Delta$ for its positive boundary root. If $d^TBd\le0$ or
$\alpha=\|r\|^2/(d^TBd)\ge\tau$, set $p\leftarrow p+\tau d$ and stop at
the boundary. Otherwise set $p\leftarrow p+\alpha d$, $r^+=r+\alpha Bd$;
stop if $\|r^+\|$ meets tolerance, else set
$d\leftarrow-r^++(\|r^+\|^2/\|r\|^2)d$, $r\leftarrow r^+$ and continue
to the iteration cap.
ARC minimizes
$m_k(p)=f_k+g_k^Tp+\tfrac12p^TB_kp+\sigma_k\|p\|^3/3$ and computes the
same actual/model ratio. Reject below $\eta_1$ and increase $\sigma$ by
$\gamma_{inc}$; decrease it by $\gamma_{dec}$ only after a high-ratio step
and $\|p\|\ge\kappa\|g_k\|/\sigma_k$ for an input $0<\kappa<1$;
otherwise keep it. A capped inner solve, nonpositive
model decrease or exhausted outer budget returns status. The $O(\epsilon^{-2})$
trust-region and $O(\epsilon^{-3/2})$ ARC claims require their separate
Lipschitz, model-decrease, radius/regularization and failed-iteration counting
lemmas; the finite procedures alone imply no complexity bound.
Complexity needs Lipschitz Hessian, sufficient model decrease, and counted
failed iterations.

<a id="contract-sto2"></a>

### Contract STO2

Assume AC for the conditional-expectation classes inherited through STO1.
The SVRG/SAGA finite-expectation Lyapunov arguments below require integrable
iterates/tables (finite deterministic initialization and smooth finite-sum
gradients give finite moments at each finite step); they do not invoke
Doob or claim almost-sure convergence. Any added almost-sure conclusion must
instantiate STO1's compensated-supermartingale hypotheses separately.

For $F(x)=n^{-1}\sum_{i=1}^nf_i(x)$, SVRG takes a snapshot $\tilde x$,
computes $\nabla F(\tilde x)$, sets $x_0=\tilde x$, then for each inner
iteration samples $i$ uniformly and independently and sets
$v=\nabla f_i(x)-\nabla f_i(\tilde x)+\nabla F(\tilde x)$,
$x^+=x-\eta v$. Return one inner iterate selected uniformly from
$x_0,\ldots,x_{m-1}$ as the next snapshot; each epoch costs $n+2m$ component-gradient
evaluations for $m$ inner steps and $O(d)$ working memory. SAGA initializes
$\alpha_i=\nabla f_i(x_0)$ and $\bar\alpha=n^{-1}\sum_i\alpha_i$; each
uniform independent sample $i$ forms
$v=\nabla f_i(x)-\alpha_i+\bar\alpha$, updates $x^+=x-\eta v$, then
sets $\bar\alpha^+=\bar\alpha+(\nabla f_i(x)-\alpha_i)/n$ and
$\alpha_i^+=\nabla f_i(x)$. Its memory is $O(nd)$ and each step uses one
new component gradient. Conditioning on the current iterate/table proves
$E[v\mid\mathcal F]=\nabla F(x)$; the variance identity is local and must
include the strong-convexity/smoothness assumptions used by its Lyapunov
bound. One explicit SVRG guarantee is: every $f_i$ is convex and has
$L$-Lipschitz gradient, $F$ is $\mu$-strongly convex, $n\ge10L/\mu$,
$\eta=1/(10L)$, $m=2n$, and each epoch output is chosen uniformly from
$x_0,\ldots,x_{m-1}$. The local variance/Lyapunov proof gives contraction
factor
$q=[\mu\eta(1-2L\eta)m]^{-1}+2L\eta/(1-2L\eta)\le7/8$.
For SAGA, assume additionally unconstrained optimization,
$\nabla F(x^*)=0$, and $F$ is $\mu$-strongly convex. Set
$S_k=n^{-1}\sum_i\|\alpha_i^k-\nabla f_i(x^*)\|^2$ and
$V_k=\|x_k-x^*\|^2$. Co-coercivity gives
$n^{-1}\sum_i\|\nabla f_i(x_k)-\nabla f_i(x^*)\|^2\le2L(F(x_k)-F^*)$;
the three-vector norm bound gives
$E[\|v_k\|^2\mid\mathcal F_k]\le6L(F(x_k)-F^*)+6S_k$, and table replacement
gives $E[S_{k+1}\mid\mathcal F_k]\le(1-1/n)S_k+2L(F(x_k)-F^*)/n$.
Use the stronger gap-retaining inequality $\langle\nabla F(x),x-x^*\rangle\ge F(x)-F^*+(\mu/2)\|x-x^*\|^2$. Combining the iterate and table bounds for $\mathcal L_k=V_k+7\eta^2nS_k$ gives
$$E[\mathcal L_{k+1}\mid\mathcal F_k]\le(1-\mu\eta)V_k+(-2\eta+20L\eta^2)(F(x_k)-F^*)+(7n-1)\eta^2S_k.$$
Thus every constant $0<\eta\le1/(10L)$ gives factor $q=1-\min\{\mu\eta,1/(7n)\}$ and $E[F(x_k)-F^*]\le(L/2)q^k\mathcal L_0$. The faster factor $1-\mu\eta$ additionally requires $\mu\eta\le1/(7n)$. Retain the separate already-proved sufficient branch $\eta\le\min\{1/(3L),\mu/(13L^2),1/(7\mu n)\}$ and the counterexample to removing its memory restriction. These local results preserve an $n$-independent $O(1/L)$ step without asserting the refuted faster factor. Counts concern $n$ initialization and one subsequent component-gradient evaluation per update, with maintained-mean vector arithmetic and $O(nd)$ storage, not the oracle's total runtime. The SVRG/SAGA
claims do not transfer to nonconvex components, without-replacement sampling
or arbitrary epoch outputs.

For online convex losses $\ell_t$ on a nonempty closed convex set $C$, let
$g_t\in\partial\ell_t(x_t)$. Diagonal AdaGrad uses
$s_{t,j}=\sqrt{\epsilon^2+\sum_{k=1}^t g_{k,j}^2}$,
$A_t=\operatorname{diag}(s_{t,j})$, and
$x_{t+1}=\arg\min_{x\in C}\{\eta g_t^Tx+\tfrac12\|x-x_t\|_{A_t}^2\}$.
For every comparator $u\in C$, weighted projection gives
$$\sum_{t=1}^T g_t^T(x_t-u)\le\frac{1}{2\eta}\|x_1-u\|_{A_1}^2+
\frac{1}{2\eta}\sum_{t=2}^T\|x_t-u\|_{A_t-A_{t-1}}^2+
\frac{\eta}{2}\sum_{t=1}^T\|g_t\|_{A_t^{-1}}^2.$$
If $C$ has coordinate diameters $D_j$, the right side is at most
$\sum_j(D_j^2/(2\eta)+\eta)s_{T,j}$: metric increments telescope and
$g_{t,j}^2/s_{t,j}\le2(s_{t,j}-s_{t-1,j})$. Convexity converts this to loss
regret. This fixes the geometry and proof bound, rather than borrowing an
unspecified adaptive-regret theorem. Adam is explicitly defined by
$m_t=\beta_1m_{t-1}+(1-\beta_1)g_t$,
$v_t=\beta_2v_{t-1}+(1-\beta_2)g_t\odot g_t$, bias corrections
$\hat m_t=m_t/(1-\beta_1^t)$,
$\hat v_t=v_t/(1-\beta_2^t)$, and
$x_{t+1}=x_t-\eta\hat m_t/(\sqrt{\hat v_t}+\epsilon)$ elementwise.
AMSGrad uses coordinatewise
$\hat v_t=v_t/(1-\beta_2^t)$,
$\hat v_t^{max}=\max(\hat v_{t-1}^{max},\hat v_t)$,
$\hat v_0^{max}=0$, and update
$x_{t+1}=x_t-\eta\hat m_t/(\sqrt{\hat v_t^{max}}+\epsilon)$.
Require $0\le\beta_1,\beta_2<1$, $\epsilon>0$ for both recurrences. No Adam
or AMSGrad convergence theorem is claimed. The
promised explicit Adam divergence example remains an authoring hold until
its finite loss sequence, hyperparameters, iterates and divergence
calculation are stated. No convergence theorem transfers from AdaGrad or
SVRG. Independent mini-batches reduce conditional variance by the batch
size; without-replacement sampling needs its own covariance derivation.

<a id="contract-opt11"></a>

### Contract OPT11

On $\mathrm{St}(n,r)=\{X:X^TX=I\}$, tangent is $X^TZ+Z^TX=0$ and
Euclidean-metric projected gradient is $G-X\operatorname{sym}(X^TG)$.
Given tangent $\eta$, set $Y=X+\eta$; QR retraction is the Q factor of
$Y=QR$ with positive diagonal in $R$, and polar retraction is
$R_X(\eta)=Y(Y^TY)^{-1/2}$. Both require full column rank and satisfy
$R_X(0)=X$, $DR_X(0)=I$. Grassmann tangent is represented by horizontal vectors
$X^TZ=0$, with horizontal gradient $G-X(X^TG)$; its objective must be
right-orthogonally invariant. Vector transport projects the old ambient
vector $Z$ at $Y=R_X(\eta)$ by $Z-Y\operatorname{sym}(Y^TZ)$ for Stiefel
or $Z-Y(Y^TZ)$ followed by horizontal projection for Grassmann.
Retraction descent tests
$f(R_X(-t\operatorname{grad}f(X)))\le f(X)-at\|\operatorname{grad}f(X)\|^2$
with $0<a<1/2$, $t=1,\beta,\beta^2,\ldots$ for input $0<\beta<1$, and a
finite search cap; no accepted step returns failure. If pullbacks have
gradient-Lipschitz constant $L_R$ on unit tangent balls, Taylor gives
acceptance for $t\le\min(1,2(1-a)/L_R)$ and hence accepted steps are bounded
below by $\underline t=\beta\min(1,2(1-a)/L_R)$ when the cap is not hit.
If $f$ is bounded below, telescoping yields
$\min_{k<N}\|\operatorname{grad}f(X_k)\|^2\le
(f(X_0)-f_{inf})/(a\underline tN)$, or $O(\epsilon^{-2})$ steps to
gradient norm $\epsilon$. The trust-region
variant forms pullback $m_X(\eta)=f(X)+\langle\operatorname{grad}f(X),\eta\rangle+
\tfrac12\langle\eta,B_X\eta\rangle$, minimizes it on $\|\eta\|\le\Delta$,
and uses actual/predicted ratio and OPT3 radius branches. Compact Stiefel
and uniform pullback smoothness give the scoped best-point rate; second-order
claims need bounded pullback Hessian and second-order retraction. Published
gradient definitions do not define these algorithms.

<a id="contract-opt4"></a>

### Contract OPT4

For $r:\mathbb R^n\to\mathbb R^m$ of class $C^2$,
$\phi=\|r\|^2/2$, $J=Dr$, $\nabla\phi=J^Tr$, and
$\nabla^2\phi=J^TJ+\sum_i r_i\nabla^2r_i$. Gauss–Newton solves
$J^TJp=-J^Tr$ only for full-column-rank $J$; QR/SVD uses the NA-02
least-squares interface rather than normal equations. LM fixes a nonsingular
scaling matrix $D$ and solves
$(J^TJ+\lambda D^TD)p=-J^Tr$, $\lambda>0$; this matrix is positive
definite, and failure/range loss is an explicit branch. Its linearized
least-squares model is $m_0(p)=\|r+Jp\|^2/2$; the regularized subproblem
minimizes $m_0(p)+\lambda\|Dp\|^2/2$. A finite trust-ratio loop computes
$\rho=(\phi(x)-\phi(x+p))/(m_0(0)-m_0(p))$. For
$0<\eta_1<\eta_2<1$, reject/increase lambda if $\rho<\eta_1$; accept and
decrease lambda if $\rho\ge\eta_2$ with a boundary step; otherwise accept
and keep lambda. Use $\lambda^+=\gamma_{inc}\lambda$ on rejection and
$\lambda^+=\lambda/\gamma_{inc}$ on a high-ratio boundary step, with
$\gamma_{inc}>1$; otherwise preserve $\lambda$. Nonpositive predicted
decrease, failed solve or exhausted backtracking budget returns a distinct
status, never a ratio computed with a nonpositive denominator. Local linear
rate requires full rank and a sufficiently small controlled residual; zero
residual gives quadratic convergence only under the stated Lipschitz
Jacobian/$C^2$ hypotheses. Global stationarity requires compact sublevels,
bounded Jacobian, successful sufficient-decrease steps and a finite
failure-count argument; these are local theorem obligations, not a property
of the finite loop alone.

<a id="contract-opt6"></a>

### Contract OPT6

SQP for $h(x)=0,g(x)\le0$ uses a symmetric positive-definite $B_k$ and
solves the strictly convex QP
$$\min_p\ \nabla f(x_k)^Tp+\tfrac12p^TB_kp,
\quad h(x_k)+Dh(x_k)p=0,\quad g(x_k)+Dg(x_k)p\le0.$$
An exact finite active-set solve first removes dependent equality rows, then
enumerates inequality subsets $J$ whose gradients are independent together
with the equality gradients, in lexicographic order. It solves the KKT
system for equalities and $J$, discards singular or infeasible candidates
and those with a negative active
multiplier, and selects the feasible KKT candidate of least QP objective
(least-index tie). If none exists, return QP-infeasible/numerical-failure;
the exhaustive definition is finite and avoids an unspecified pivot rule.
Its convex KKT sufficiency gives the QP minimizer. Use exact-penalty merit
$\psi_\rho=f+\rho(\|h\|_1+\|[g]_+\|_1)$ and predicted decrease
$$D_k=-\left[\nabla f^Tp+\rho(\|h+Dh\,p\|_1-\|h\|_1+
\|[g+Dg\,p]_+\|_1-\|[g]_+\|_1)\right].$$
If $D_k\le0$, increase $\rho$ by a fixed factor and resolve up to a finite
cap; otherwise halve $t=1,1/2,\ldots$ until
$\psi_\rho(x_k+tp)\le\psi_\rho(x_k)-c tD_k$ for fixed $0<c<1$. On
acceptance set $x_{k+1}=x_k+tp$ and take QP multipliers; domain exit, no
accepted step and budget exhaustion are separate statuses. Under active-set
identification, LICQ, strict complementarity, SOSC and Lipschitz KKT
Jacobian, the identified active KKT system
$$\begin{bmatrix}\nabla^2_{xx}L&A_{act}^T\\A_{act}&0\end{bmatrix}
\begin{bmatrix}p\\\delta\lambda\end{bmatrix}
=-\begin{bmatrix}\nabla_xL\\c_{act}\end{bmatrix}$$
is nonsingular; solving it with $B_k=\nabla^2_{xx}L$ is local Newton and
quadratically convergent. Here $A_{act}$ stacks equality and active
constraint gradients and $c_{act}$ their residuals. A BFGS reduced-space
variant is superlinear only if
$\|(B_k-\nabla^2_{xx}L^*)p_k\|/\|p_k\|\to0$ on the tangent space (the
Dennis–Moré condition).

For equality augmented Lagrangian use
$\mathcal L_\rho(x,\nu)=f(x)+\nu^Th(x)+\rho\|h(x)\|^2/2$; compute an
inner minimizer to declared residual $\epsilon_k$, then set
$\nu^+=\nu+\rho h(x^+)$. For inequalities use
$$\mathcal L_\rho(x,\lambda)=f(x)+
\frac{\|[\lambda+\rho g(x)]_+\|^2-\|\lambda\|^2}{2\rho},\qquad
\lambda^+=[\lambda+\rho g(x^+)]_+.$$
The exact local multiplier method needs the stated SOSC/penalty size, inner
error summability and active-set regularity. Finite inner/outer caps report
residuals and failure; no universal finite termination is claimed. Active
set identification/finite termination requires its own nondegeneracy and
anti-cycling proof.

<a id="contract-inv2"></a>

### Contract INV2

Landweber takes compact $A$, $x_0=0$ and
$0<\omega<2/\|A\|^2$, and updates
$x_{k+1}=x_k+\omega A^*(y_\delta-Ax_k)$. Its filter is
$g_k(\lambda)=\omega\sum_{j=0}^{k-1}(1-\omega\lambda)^j$; for
$x^\dagger=(A^*A)^\nu w$, $0<\nu\le1$, it gives exact-data bias
$O(k^{-\nu})$, while noise amplification is at most $C\delta\sqrt{k}$.
Balance these bounds. Discrepancy stopping chooses the first $k$ with
$\|Ax_k-y_\delta\|\le\tau\delta$, $\tau>1$; return its index or a
finite-cap no-crossing status, and prove convergence only under the stated
source/noise assumptions. CGLS/LSQR
uses Golub–Kahan: initialize $\beta_1=\|r_0\|$, $u_1=r_0/\beta_1$,
$r_0=y_\delta-Ax_0$. If $r_0=0$, return $x_0$; if
$\alpha_1=\|A^*u_1\|=0$ with nonzero residual, return
`stationary-nonzero-residual`. Otherwise set $v_1=A^*u_1/\alpha_1$; then
$\beta_{j+1}u_{j+1}=Av_j-\alpha_ju_j$,
$\alpha_{j+1}v_{j+1}=A^*u_{j+1}-\beta_{j+1}v_j$. A zero divisor is
a breakdown/status branch. LSQR applies Givens rotations to the bidiagonal
least-squares problem; exact arithmetic minimizes residual over
$x_0+\mathcal K_k(A^*A,A^*r_0)$. Regularization requires an explicit stop.
For nonlinear $F:X\to Y$, iteratively regularized Gauss–Newton solves
$(F'(x_k)^*F'(x_k)+\alpha_k I)s_k=F'(x_k)^*(y_\delta-F(x_k))$,
sets $x_{k+1}=x_k+s_k$, $\alpha_k=\alpha_0q^k$ for $0<q<1$, and stops at
the first discrepancy index $\|F(x_k)-y_\delta\|\le\tau\delta$ or finite
budget. Its local theorem assumes on an invariant ball
$$\|F(x)-F(z)-F'(z)(x-z)\|\le\eta\|F(x)-F(z)\|,\quad \eta<1/2,$$
$F'$ is $L$-Lipschitz, and
$x^\dagger-x_0=(F'(x^\dagger)^*F'(x^\dagger))^\nu w$ for
$0<\nu\le1/2$ and bounded $w$. It must derive the regularization/noise
error recurrence and ensure discrepancy crossing; no nonlinear rate is
imported from the linear filter proof.

<a id="contract-pc-path"></a>

### Contract PC-PATH

For $V\in C^4$ on a collision-free tube and a regular curve
$R:[0,1]\to\mathbb R^d$ with fixed endpoints and $R'(s)\ne0$, write
$t=R'/\|R'\|$. A minimum-energy path solves
$(I-tt^T)\nabla V(R)=0$. A finite string with $M+1$ images starts from
$R_0=a,R_M=b$; for each interior image form the normalized centered chord
$t_i=(R_{i+1}-R_{i-1})/\|R_{i+1}-R_{i-1}\|$ and
$F_i^\perp=-(I-t_it_i^T)\nabla V(R_i)$, update
$Y_i=R_i+\eta F_i^\perp$, and keep endpoints fixed. Compute cumulative
polyline lengths of $Y_0=a,Y_1,\ldots,Y_M=b$, then linearly interpolate the
polyline at equally spaced cumulative-length targets to obtain the next
images. Zero total length, repeated target segment, zero chord or nonfinite
force returns geometry failure. Stop only at the declared projected-force
and spacing tolerances or finite iteration budget.

For NEB set $\Delta_i^+=R_{i+1}-R_i$, $\Delta_i^-=R_i-R_{i-1}$ and
$\Delta V_i^\pm=V(R_{i\pm1})-V(R_i)$. Select the improved tangent
$\tau_i=\Delta_i^+$ if $V_{i+1}>V_i>V_{i-1}$,
$\tau_i=\Delta_i^-$ if $V_{i+1}<V_i<V_{i-1}$. At a local extremum put
$w_{max}=\max(|\Delta V_i^+|,|\Delta V_i^-|)$,
$w_{min}=\min(|\Delta V_i^+|,|\Delta V_i^-|)$; if $V_{i+1}>V_{i-1}$ set
$\tau_i=w_{max}\Delta_i^+ + w_{min}\Delta_i^-$, otherwise set
$\tau_i=w_{min}\Delta_i^+ + w_{max}\Delta_i^-$. If neighbor energies tie,
use $\tau_i=\Delta_i^++\Delta_i^-$. Normalize
$t_i=\tau_i/\|\tau_i\|$ or return tangent failure. The ordinary NEB force is
$$F_i^{NEB}=-(I-t_it_i^T)\nabla V(R_i)+
k(\|\Delta_i^+\|-\|\Delta_i^-\|)t_i.$$
After a declared number of ordinary steps, choose the least-index highest
interior-energy image $i_*$ and replace its force by the climbing force
$F_{i_*}^{CI}=-\nabla V(R_{i_*})+2(\nabla V(R_{i_*})^Tt_{i_*})t_{i_*}$,
omitting the spring. The finite method updates every nonendpoint by
$R_i^{k+1}=R_i^k+\eta F_i^k$ with fixed positive $\eta$, a declared
climbing-switch iteration and a finite cap; zero tangent or nonfinite force
is failure. Return force residual/status; a small discrete force alone does
not certify a continuum path.

For equal arc-length samples with spacing $h$ and nonzero tangent, Taylor
expansion gives centered-chord unit-tangent error $O(h^2)$. For unequal
steps $h_-,h_+$ use the derivative proxy
$$\tau_i=\frac{h_+}{h_-(h_-+h_+)}(R_i-R_{i-1})+
\frac{h_-}{h_+(h_-+h_+)}(R_{i+1}-R_i),$$
whose remainder is bounded by the stated $C^3$ derivative bounds; do not
apply the symmetric formula off-grid. The projected-force consistency
remainder follows by Lipschitz continuity of $\nabla V$ and the tangent
error. A residual-to-path theorem is conditional: after fixing translation/
parameterization gauge, if $DG(R_0)$ is invertible with inverse norm $\beta$,
$DG$ is $L$-Lipschitz on radius $2\beta\|G(R_0)\|$, that ball stays in the
tube, and $\beta L\|G(R_0)\|\le1/2$, Newton–Kantorovich contraction gives
a unique nearby zero within $2\beta\|G(R_0)\|$. Uniform continuum convergence
requires the separately proved stable interpolation/comparison theorem for
the isolated smooth path class; no general NEB/string convergence is claimed.

For a unit dimer direction $v$, estimate $H(x)v$ by
$D_\epsilon(x,v)=[\nabla V(x+\epsilon v)-\nabla V(x-\epsilon v)]/(2\epsilon)$.
Taylor gives $O(\epsilon^2)$ bias for $C^4$ $V$; gradient evaluation error
at most $\delta$ adds $O(\delta/\epsilon)$. The finite rotational step is
$v^+=\operatorname{normalize}(v-\alpha(I-vv^T)D_\epsilon(x,v))$ for fixed
$\alpha>0$; zero norm returns rotation failure. With rotation cap $J$ stop
when $\|(I-vv^T)D_\epsilon\|\le\epsilon_{rot}$ or report cap; then the
translation loop sets
$x^+=x+\eta[-\nabla V(x)+2(\nabla V(x)^Tv)v]$ and returns force tolerance,
mode-gap or finite-budget status. Eigenvector following computes the Hessian
eigendecomposition in ascending order, requires $\lambda_1\le-\gamma$ and
$\lambda_j\ge\gamma$ for $j\ge2$, and forms
$p=-\sum_j(q_j^T\nabla V/\lambda_j)q_j$. Accept the full step only when it
stays in the declared local radius; otherwise return `outside-local-basin`.
Local quadratic convergence is the nonsingular-root theorem for $\nabla V$.
For a symmetric approximate Hessian with operator error $\delta_H\le\gamma/2$,
the selected eigenvector error is at most $2\delta_H/\gamma$ by the proved
Davis–Kahan perturbation estimate. An index-one certificate requires
validated enclosures proving one eigenvalue below $-\varepsilon$ and all
remaining eigenvalues above $\varepsilon$; uncertified residual or gap
failure is inconclusive.

<a id="contract-pc-var"></a>

### Contract PC-VAR

For overlap matrix $S=S^*\succ0$, transform by $S^{-1/2}$ and optimize on
$\mathcal P_r=\{P=P^*:P^2=P,\operatorname{tr}P=r\}$. Given Hermitian $h$,
self-adjoint real-linear $G$, and real $C^2$ functional $E_{xc}$, define
$E(P)=\operatorname{tr}(hP)+\tfrac12\operatorname{tr}(PG(P))+E_{xc}(P)$
and its Hermitian Frobenius gradient
$F(P)=h+G(P)+\nabla E_{xc}(P)$. The projector set is closed and bounded,
hence compact, so a minimizer exists. Every tangent is $[K,P]$ for
skew-Hermitian $K$; differentiating $e^{tK}Pe^{-tK}$ yields necessary
stationarity $[F(P),P]=0$. A positive Hessian on tangent directions modulo
orbital gauge gives a strict isolated local minimum; commutation alone does
not. $E_{xc}=0$ is the conditional finite-basis HF model; other functionals
need their stated differentiability/model assumptions.

At finite temperature optimize over $0\preceq D\preceq I$,
$\operatorname{tr}D=r$, adding entropy
$\beta^{-1}\operatorname{tr}(D\log D+(I-D)\log(I-D))$ with continuous
endpoint convention $0\log0=0$. Compactness gives a minimizer. For fixed
Hermitian $F$ and $0<r<n$, the scalar occupations
$d_j=(1+e^{\beta(\lambda_j(F)-\mu)})^{-1}$ have a unique chemical potential
$\mu$ enforcing the trace because the trace is strictly increasing in $\mu$
from $0$ to $n$. This does not prove a unique self-consistent density.
Nested finite-basis infima decrease; equality with a continuum infimum
requires density in the energy topology and matching lower-semicontinuity.
For normalized Ritz vector $u$, Rayleigh value $\mu_u$, and residual
$r=(A-\mu_u)u$, spectral expansion proves
$\operatorname{dist}(\mu_u,\sigma(A))\le\|r\|$; eigenvector angle needs an
identified isolated eigenvalue gap and is at most $\|r\|/\delta$ under that
gap. A residual alone cannot identify the lowest eigenvalue.

<a id="contract-dif3"></a>

### Contract DIF3

For a finite differentiable step graph
$u_{k+1}=\Psi_k(u_k,\theta)$ and objective
$J(\theta)=\phi(u_N,\theta)+\sum_{k=0}^{N-1}\ell_k(u_k,\theta)$, set
$S_0=D_\theta u_0$ and
$S_{k+1}=\Psi_{k,u}S_k+\Psi_{k,\theta}$. Reverse mode sets
$p_N=\phi_u(u_N,\theta)$,
$p_k=\ell_{k,u}(u_k,\theta)+\Psi_{k,u}^Tp_{k+1}$, and returns
$$\nabla_\theta J=\phi_\theta+S_0^Tp_0+
\sum_{k=0}^{N-1}(\ell_{k,\theta}+\Psi_{k,\theta}^Tp_{k+1}).$$
Topological differentiation and backward substitution prove exactness in
real arithmetic; floating evaluation has separate NA-02 bounds. A stopped
iteration differentiates this finite map, not an exact implicit solution.

For $\dot u=f(t,u,\theta)$ on a common compact tube with $f$ continuously
differentiable and bounded derivatives, tangent solves
$\dot S=f_uS+f_\theta$, $S(0)=D_\theta u_0$. For
$J=\phi(u(T),\theta)+\int_0^T\ell(t,u,\theta)dt$, the adjoint solves
$-\dot p=f_u^Tp+\ell_u^T$, $p(T)=\phi_u^T$, and integration by parts gives
$$\nabla_\theta J=\phi_\theta+p(0)^TD_\theta u_0+
\int_0^T(\ell_\theta+p^Tf_\theta)dt.$$
Prove flow differentiability by difference quotients and the variational
integral equation; ordinary continuous dependence alone does not prove it.
For an implicit algebraic state $R(u,\theta)=0$, require invertible
$R_u$ and use $u_\theta=-R_u^{-1}R_\theta$; adjoints move $R_u^{-T}$ to the
cotangent. Discrete/continuous gradient error $O(h^p)$ requires the
augmented state-and-tangent/adjoint method to have order $p$, stable
propagation, uniform derivative bounds on the tube, and consistent
quadrature; a state error alone is insufficient. P-NUM-ODE-02 controls only
the state recurrence unless its hypotheses are separately instantiated for
these augmented variables. NA-21 shooting sensitivity and collocation use
its common-tube and inverse-bound limits.

For coercive elliptic state $a_\theta(u,v)=\ell_\theta(v)$, assume uniform
bounded coercivity and operator-norm $C^1$ data. The derivative satisfies
$a_\theta(u_\theta,v)=\ell_\theta'(v)-a_\theta'(u,v)$. If adjoint $p$
satisfies $a_\theta(v,p)=J_u(u,\theta)[v]$, the reduced gradient is
$J_\theta+\ell_\theta'(p)-a_\theta'(u,p)$. FE gradient error needs matching
primal/adjoint energy estimates and every quadrature/geometry defect from
NA-29/30; parabolic claims use NA-36 and include time-dependent Ritz terms.

For finite-time tangent-volume growth, propagate full-rank columns through
maps $A_k$ and compute thin QR
$A_kQ_{k-1}=Q_kR_k$ with positive diagonal; then
$\sum_k\log (R_k)_{ii}$ (summed over $i$) equals the log volume change,
since determinants telescope. Rank loss returns failure; numerical log error
requires smallest singular values bounded away from zero and stated
conditioning. This is finite-time volume growth only, not an infinite-time
Lyapunov or shadowing claim. Reverse accumulation/checkpointing follows
DIF2's exact fallback schedule; the stronger binomial work bound remains
that pair's authoring hold. T10 alone owns reset/saltation/event sensitivity.
Published 4DVAR supplies a finite descent algorithm only.

<a id="contract-pc-scf"></a>

### Contract PC-SCF

Let $F$ map Hermitian matrices to Hermitian matrices with ordered eigenvalues
$\lambda_1\le\cdots\le\lambda_n$. On a declared neighborhood where
$\lambda_{r+1}(F(P))-\lambda_r(F(P))\ge g>0$, define $\Phi(P)$ as the
orthogonal projector onto the lowest $r$ eigenvectors. Undamped SCF is
$P_{k+1}=\Phi(P_k)$. For density mixing use
$\mathcal D=\{D=D^*:0\preceq D\preceq I,\operatorname{tr}D=r\}$ and
$D_{k+1}=(1-\alpha)D_k+\alpha\Phi(D_k)$; it remains in $\mathcal D$ but
need not be a projector.
For DIIS, set $R_i=[F(P_i),P_i]$, solve
$\min_c\|\sum c_iR_i\|_F^2$ subject to $\sum c_i=1$ and
$\|c\|_1\le C$ ($C\ge1$), break ties by minimum Euclidean norm, form
$F_{mix}=\sum c_iF(P_i)$, and take its lowest-r spectral projector if a gap
is certified. A singular least-squares solve or failed gap falls back to the
baseline SCF update. The coefficient feasible set is compact, so the
least-squares minimum exists; minimum Euclidean norm breaks minimizer ties.
Inputs include admissible $P_0$, $\alpha$, gap/residual tolerances, memory
cap $m$, coefficient cap $C$ and finite iteration cap. Return when certified
fixed-point residual meets tolerance; report gap loss, eigensolve failure,
or budget exhaustion separately. Accept a DIIS candidate only if certified
iterates remain in a complete invariant neighborhood where the gap holds
and a proved Lipschitz bound $\|\Phi(P)-\Phi(Q)\|\le q\|P-Q\|$, $q<1$,
applies; otherwise take the baseline SCF update. A selected level shift uses
$F_s(P)=F(P)+s(I-P)$ and preserves a fixed occupied projector only when it
commutes with $F(P)$ and the occupied/unoccupied ordering remains separated
after the shift; otherwise the map changes. Prove block-projector derivative
from
$\Phi(F)=(2\pi i)^{-1}\oint_\Gamma(zI-F)^{-1}dz$ and
$D\Phi(F)[E]=(2\pi i)^{-1}\oint_\Gamma(zI-F)^{-1}E(zI-F)^{-1}dz$; the
uniform gap bounds the resolvents and derivative. Banach gives
$\|P_k-P^*\|\le q^k\|P_0-P^*\|$ and residual error
$\|P-\Phi(P)\|/(1-q)$. Inexact updates obey
$e_k\le q^ke_0+\sum_{j<k}q^{k-1-j}\eta_j$.
Bare damping/DIIS has no universal theorem. Complex-Hermitian Weyl extension
is local because named Weyl/min–max suppliers are real-space.

<a id="contract-uq1"></a>

### Contract UQ1

For a finite number d of independent factors with product law
$\rho=\otimes_{j=1}^d\rho_j$, choose finite-degree univariate polynomial
families and a finite index set $\Lambda\subset\mathbb N_0^d$ (total-degree
or hyperbolic-cross selection is explicit input). Require moments through
twice the maximal degree and positive
definite monomial Gram matrices; otherwise report basis unavailable (a
finite-support law can make them singular). Gram–Schmidt then gives
orthonormal polynomials, and tensor products are orthonormal by independence.
Completeness requires law-specific polynomial-density proof. Orthogonal
projection gives coefficients/Pythagoras; for quadrature rule $Q$ define
$\hat c_\alpha=Q[u\psi_\alpha]$. Then
$$\|u-\sum_{\alpha\in\Lambda}\hat c_\alpha\psi_\alpha\|_{L^2}
\le\|u-P_\Lambda u\|_{L^2}+
\left(\sum_{\alpha\in\Lambda}|E[u\psi_\alpha]-Q[u\psi_\alpha]|^2\right)^{1/2}.$$
Weighted least squares samples $M$ independent points from density
$K_\Lambda/|\Lambda|$ relative to $\rho$, where
$K_\Lambda(x)=\sum_{\alpha\in\Lambda}|\psi_\alpha(x)|^2$, and minimizes
$M^{-1}\sum_{j=1}^M(|\Lambda|/K_\Lambda(X_j))|u(X_j)-p_c(X_j)|^2$.
Return coefficients only if the weighted empirical Gram matrix has eigenvalues
in $[1/2,3/2]$; otherwise return `unstable-sample`. Since the leverage
weighted summand has norm at most $|\Lambda|$, a matrix-Chernoff bound gives
failure probability at most $\delta$ when
$M\ge12|\Lambda|\log(2|\Lambda|/\delta)$; the proof of this concentration
bound is local. For bounded random inputs $y$ and affine diffusion
$a(x,y)=a_0(x)+\sum_j y_ja_j(x)$ with
$0<a_*\le a(x,y)\le a^*$, define the Bochner weak problem on
$L^2_\rho(H_0^1(\Omega))$ by
$E[\int_\Omega a(x,Y)\nabla u\cdot\nabla v]=E[\ell(Y;v)]$.
Uniform bounds give coercivity and continuity, so conforming projection onto
$V_h\otimes\operatorname{span}\{\psi_\alpha:\alpha\in\Lambda\}$ obeys
Céa in the Bochner energy norm. Rates need mixed-derivative/analyticity
bounds. Measurability, integrability and Bochner density are local
prerequisites.

<a id="contract-ctrl1"></a>

### Contract CTRL1

On $[0,T]$, take $A,B\in L^\infty$, initial $x_0$, measurable controls
$u(t)\in U_c$ for a nonempty compact convex $U_c$, and linear dynamics
$\dot x=A(t)x+B(t)u$. Let the objective be
$$J(u)=\tfrac12\int_0^T((x-x_d)^TQ(x-x_d)+u^TRu)\,dt+
\tfrac12(x(T)-x_T)^TP(x(T)-x_T),$$
where $Q,P\succeq0$, $R$ is measurable and bounded with $R(t)\succeq rI$
for $r>0$, and include only path/terminal constraints whose admissible set is nonempty, convex and weakly
closed. The state is the unique integral-equation solution. Weak compactness
of the bounded control set, uniform state bounds/equicontinuity, affine state
dependence and weak lower semicontinuity give an optimizer; strict convexity
from $R\succ0$ gives uniqueness. The adjoint solves
$-\dot p=A^Tp+Q(x-x_d)$, $p(T)=P(x(T)-x_T)$, and optimality is the pointwise
variational inequality
$\langle B^Tp+Ru,v-u\rangle\ge0$ for every $v\in U_c$ a.e.

For mesh $0=t_0<\cdots<t_N=T$, the piecewise-constant control is $u_j$ on
$[t_j,t_{j+1})$. A multiple-shooting transcription adds independent node
states $x_j$ and defects $x_{j+1}-\Psi_{h_j}(t_j,x_j,u_j)=0$; single shooting
eliminates these states by the same recurrence. An explicit RK tableau
$(a_{i\ell},b_i,c_i)$ uses stages
$K_i=f(t_j+c_ih_j,X_{ji},u_j)$,
$X_{ji}=x_j+h_j\sum_{\ell<i}a_{i\ell}K_\ell$, and
$x_{j+1}=x_j+h_j\sum_i b_iK_i$; implicit tableaux solve all stage residuals
and return nonlinear-solve status. The quadrature objective is
$\sum_{j,i}h_jb_iL(t_j+c_ih_j,X_{ji},u_j)$ plus the terminal term.
Return decision variables, defect/constraint/KKT residuals, objective and
distinct NLP, IVP, quadrature, mesh and budget statuses. Discrete minimizer
convergence requires uniform consistency plus a recovery sequence for every
continuous admissible control; compactness gives subsequential convergence,
and the unique LQR minimizer gives full convergence. A quantitative rate
additionally needs uniform state/quadrature error and strong convexity. For
nonlinear transcription, local KKT convergence alone requires LICQ, SOSC,
consistent constraints and a specified local solver; it is not global
existence. NA-15/P-NUM-ODE-02 provide only matching method/error interfaces,
and NA-18's embedded controller is not a certificate.

<a id="contract-ctrl2"></a>

### Contract CTRL2

Let $V=H_0^1(\Omega)$, $H=L^2(\Omega)$, $a:V\times V\to\mathbb R$ be
bounded and coercive, and $B:L^2(\Omega_c)\to V^*$ bounded. For
$q\in Q_{ad}=\{q\in L^2:q_a\le q\le q_b\}$, define $u(q)\in V$ by
$a(u(q),v)=\langle f+Bq,v\rangle$ for every $v\in V$. Minimize
$J(q)=\tfrac12\|u(q)-u_d\|_H^2+\tfrac\alpha2\|q\|_{L^2}^2$, $\alpha>0$.
The control box is nonempty, closed and convex; boundedness of the linear
state map gives weak continuity, the norm terms are weakly lower
semicontinuous, and $\alpha>0$ gives coercivity and strict convexity, hence
existence and uniqueness. The adjoint $p\in V$ solves
$a(v,p)=(u-u_d,v)_H$; reduced gradient is $B^*p+\alpha q$, and the exact
optimality condition is
$\langle B^*p+\alpha q,v-q\rangle\ge0$ for every $v\in Q_{ad}$, equivalently
$q=P_{Q_{ad}}(-B^*p/\alpha)$ with pointwise clipping to $[q_a,q_b]$.

For shape-regular affine simplicial meshes, piecewise-constant control
projection obeys $\|q-\Pi_hq\|_{L^2}\le Ch\|q\|_{H^1}$ for $q\in H^1$;
combining this with matching state/adjoint FE estimates yields the stated
$O(h)$ control error under the full coercivity and regularity assumptions.
Variational discretization's $O(h^2)$ requires the actual primal/adjoint
$H^2$ estimates and bounded-domain/coefficient assumptions; it is not
inferred from Céa alone. The parabolic extension uses NA-36's evolution-space
energy identity and explicitly retains any time-dependent Ritz derivative
$({\partial_tR_h})u$. Boundary controls are a distinct trace-space problem,
not covered by this $L^2$ control theorem. Let $S q=u(q)-u(0)$ be the linear
part of the state map. The reduced Hessian norm is at most
$L_J=\|S\|^2+\alpha$; a finite reduced-gradient loop fixes $\eta=1/L_J$
and updates
$q^+=P_{Q_{ad}}(q-\eta(B^*p+\alpha q))$, and stops when
$\|q-P_{Q_{ad}}(q-\eta(B^*p+\alpha q))\|\le\epsilon$ or the iteration cap is
reached. Exact state/adjoint solves are the theorem branch; inexact solves
must carry residual-to-gradient bounds or return an uncertified status. An
SQP variant inherits only OPT6's stated local conditions.

<a id="contract-inv3"></a>

### Contract INV3

For smooth $F(\theta,d)$, local identifiability means no other nearby theta
gives same output. Full-column-rank Jacobian selects an invertible square
row minor; IFT proves local identifiability. Rank deficiency only shows
first-order failure. A lower singular-value bound plus Lipschitz-Jacobian
remainder gives local parameter perturbation. If $\|J_h-J\|\le\eta$,
Weyl bounds singular-value error by eta and information perturbation by
$\|W\|(2\|J\|\eta+\eta^2)$; logdet also needs positive eigenvalue lower
bound. Approximate design is simplex weights; multiplicative update
$\xi_x^+=\xi_x f(x)^TM^{-1}f(x)/p$ requires nonsingular M. Finite output
includes equivalence violation; exact integer allocation is separate.

<a id="contract-sto3"></a>

### Contract STO3

For $J(\theta)=E[\ell(X,\theta)]$, pathwise differentiation via
$X=T(\theta,Z)$ needs a common integrable derivative envelope. Score method
$\ell\nabla_\theta\log p_\theta$ needs fixed support/dominating measure or
boundary correction. Coupled differences reuse random seed. SPSA draws
symmetric independent $\Delta_i$ with reciprocal moments and uses two calls
$\hat g_i=[J(\theta+c\Delta)-J(\theta-c\Delta)]/(2c\Delta_i)$.
Bounded third derivatives give bias $O(c^2)$; weighted second moments give
variance $O(c^{-2})$. STO1 requires both bias/noise summability and
stability. Weak SDE payoff convergence does not imply stochastic-adjoint
interchange.

Whenever SPSA/biased simulation gradients invoke STO1's almost-sure
convergence theorem, assume AC and specify the history filtration, adapted
iterates, fresh conditionally independent perturbation/noise sampling and
integrable nonnegative Lyapunov process. Prove the conditional bias and
second-moment estimates for that actual estimator, stability and the
weighted bias/noise summability making STO1's deterministic error bounds
summable. This carries the repaired Doob interface to the actual consumer;
finite-difference bias order or a weak-payoff limit alone proves none of it.

<a id="contract-uq2"></a>

### Contract UQ2

For independent $X=(X_1,\ldots,X_d)$ and $f\in L^2$, put
$f_\emptyset=Ef$ and, for nonempty $u\subseteq[d]$,
$f_u(x_u)=\sum_{v\subseteq u}(-1)^{|u|-|v|}E[f(X)\mid X_v=x_v]$.
Independence and conditional-expectation projection prove
$f=\sum_{u\subseteq[d]}f_u$ in $L^2$, $Ef_u=0$ and pairwise orthogonality.
Let $V_u=Ef_u^2$ and $V=\operatorname{Var}f=\sum_{u\ne\emptyset}V_u$.
Only if $V>0$ define $S_i=V_{\{i\}}/V$ and
$S_{T_i}=\sum_{u\ni i}V_u/V$. With independent copies, first-order
pick-freeze uses $X^{(i)}=(X_i,X'_{-i})$, sharing only $X_i$, and has
unbiased numerator $E[(f(X)-\mu)(f(X^{(i)})-\mu)]=V_{\{i\}}$; total-effect
pick-freeze uses $X_{-i}^{(i)}=(X_{-i},X_i')$ and numerator
$\tfrac12E[(f(X)-f(X_{-i}^{(i)}))^2]=\sum_{u\ni i}V_u$.
These are unbiased for known $\mu=Ef$; replacing $\mu,V$ by sample estimates
usually biases the ratio. Finite fourth moment and independent replicates
give the joint numerator/denominator CLT and delta-method MCSE only when
$V>0$.

If UQ1's orthonormal tensor expansion $f=\sum_\alpha c_\alpha\psi_\alpha$
is complete, then $V=\sum_{\alpha\ne0}c_\alpha^2$,
$S_i=\sum_{\operatorname{supp}\alpha=\{i\}}c_\alpha^2/V$ and
$S_{T_i}=\sum_{i\in\operatorname{supp}\alpha}c_\alpha^2/V$.
For differentiable $f$ with $\partial_i f\in L^2$ and product-coordinate
Poincaré constants $C_i$, conditional Poincaré plus ANOVA gives
$S_{T_i}\le C_iE|\partial_i f|^2/V$; constants must match the law, such as
$C_i=\sigma_i^2$ for Gaussian or $(b_i-a_i)^2/\pi^2$ for uniform
$[a_i,b_i]$ under the standard variance Poincaré inequality.

For dependent inputs, do not use the independent Sobol decomposition. One
declared Shapley convention defines
$v(S)=\operatorname{Var}(E[f\mid X_S])$ and
$\phi_i=V^{-1}E_\pi[v(P_i^\pi\cup\{i\})-v(P_i^\pi)]$, where $\pi$ is
uniform over permutations and $P_i^\pi$ is the set preceding $i$. The exact
finite procedure enumerates all $d!$ permutations and conditional
expectations; a Monte Carlo procedure samples a declared number of
independent permutations and reports sample mean and standard error.
Telescoping each permutation proves $\sum_i\phi_i=1$; monotonicity of
conditional-projection variances gives nonnegative increments. Conditional
samplers or their error bounds are extra hypotheses. B-adic Parseval applies
only to its uniform-cube basis. For noisy simulator output $Y=f(X)+\epsilon$,
define sensitivity for $E[Y\mid X]=f(X)$ to exclude intrinsic noise, or
include its variance as a separate term.


