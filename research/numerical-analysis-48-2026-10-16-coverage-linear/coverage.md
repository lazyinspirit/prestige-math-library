# Linear algebra, transforms, approximation, quadrature and validation coverage audit

Design only for `numerical-analysis-48-2026-10-16`. Proposed **35 additional A/B slots**, **7 precise amendments**, and **126 local prerequisite obligations**. Of the additional slots, **17 extend existing methods with substantive new guarantees/variants** and **18 introduce missing families**. No cap was used. Production inventories/proofs/source recovery remain authoring work.

`proposal.json` is the complete machine-readable contract/proof/source/dependency matrix. Every row specifies A/B slugs, exact promises, proof routes, examples, proposed source URLs, existing canonical IDs, same-frontier prerequisite owners and collision-free candidate stems. Candidate stems are reservations, not a completed item inventory. No canonical plan, source carrier, engine state, commit or test was changed.

## Reuse decisions

| Already covered family | Canonical home | Allowed new delta only |
|---|---|---|
| dense LU/PLU/Cholesky/QR/triangular solves and full-rank QR LS | linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr | NA-02 only computed Cholesky/reflector-gap/refinement numerical guarantees; LIN-SPARSE for sparse graph/pivot methods |
| Arnoldi/GMRES/restarted GMRES/CG/MINRES/Lanczos/preconditioning | linear-algebra/krylov-subspaces-arnoldi-and-gmres, linear-algebra/conjugate-gradients-minres-and-preconditioning | NA-03 CSR; NA-05 costs/extremal Ritz/finite-precision; NA-06 ILU(0). Reuse methods, do not mint new algs for them. |
| power/inverse/RQI/subspace/QR eigenvalue iteration | linear-algebra/eigenvalue-iterations-and-the-qr-algorithm | LIN-SCHUR computed nonsymmetric Francis/nonnormal guarantees; LIN-EIGITER restart/LOBPCG/inexact interior methods, not generic subspace iteration |
| real covariance Durbin-Levinson | statistical-models-and-experiments/linear-prediction-for-dependent-data | LIN-STRUCT only general-RHS/Hermitian extension, FFT Toeplitz/circulant, displacement rank and numerical residual |
| radix-two FFT/DFT/cyclic convolution | fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform | LIN-FFT only computed error, mixed radix/Bluestein, DCT/DST, padded linear convolution; LIN-NUFFT genuinely new |
| B-spline Cox-deBoor basis, natural/smoothing spline existence, local quasiinterpolant Sobolev rate | mathematical-statistics/splines-series-and-approximation-rates | APP-SPLINE only deBoor coefficient evaluation/knot insertion/clamped variant/finite precision and boundary error; APP-SHAPE new limiter |
| normal functional calculus/SVD/EckartYoung/sqrt/polar/minmax/Weyl | linear-algebra/the-spectral-theorem-and-singular-value-decomposition | LIN-SVD computational; LIN-MFUN computation/nonnormal analytic calculus; no repeated existence theorem |

The strongest duplicate trap was B-splines: `def-b-spline-space-and-basis` already defines Cox–de Boor and `thm-spline-polynomial-reproduction` already proves basis, support, nonnegativity and partition of unity. APP-SPLINE adds coefficient evaluation, knot insertion and numerical/error guarantees only. Natural cubic interpolation already includes its tridiagonal formula. Similarly, statistics already owns `alg-durbin-levinson-forecast-recursion`; LIN-STRUCT must use it for covariance prediction rather than reissue it.

## Gap matrix

| Owner | Disposition | A-page | Precise missing family/interface | Local obligations |
|---|---|---|---|---|
| LIN-SPARSE | extend-existing | sparse-direct-elimination-and-ordering | NA-03 only gives CSR/matvec and a fill example; engineering sparse direct methods require actual symbolic/numeric algorithms and ordering-dependent costs. | 3 |
| LIN-STRUCT | extend-existing | toeplitz-circulant-and-displacement-structured-solvers | No structured direct algorithms or qualified stability contracts. | 3 |
| LIN-HIER | extend-existing | hierarchical-low-rank-matrices-and-error-propagation | NA-08 covers randomized dense range finding only; no H/H2/HSS representation or arithmetic. | 3 |
| LIN-FMM | genuinely-new | fast-multipole-expansions-and-error | No fast N-body method with analytic expansion/tolerance proof. | 3 |
| LIN-TT | extend-existing | tensor-train-compression-and-truncation-error | No multidimensional structured lowrank/tensor algorithms; randomized matrix rank does not supply them. | 3 |
| LIN-DMRG | extend-existing | alternating-tensor-optimization-and-effective-eigenproblems | DMRG/MPS used across quantum chemistry and theoretical physics lacks a numerical contract. | 3 |
| LIN-SVD | extend-existing | computed-singular-values-and-rank-revealing-factorizations | NA-02 explicitly excludes a numerical SVD algorithm; numerical rank and robust LS need it. | 4 |
| LIN-SCHUR | extend-existing | computed-schur-decompositions-and-nonnormal-spectra | Published QR is exact/conditional; nonsymmetric computed spectral problems need finite procedures and sensitivity. | 3 |
| LIN-QZ | extend-existing | generalized-eigenvalue-pencils-and-qz-methods | No generalized eigenvalue/pencil algorithms for constrained mechanics, chemistry or DAEs. | 3 |
| LIN-EIGITER | extend-existing | restarted-and-block-eigensolvers | NA-05 only gives extremal single-vector Lanczos rate; large sparse generalized/interior spectra remain absent. | 3 |
| LIN-POLYEIG | genuinely-new | polynomial-eigenproblems-and-linearization | Frequency-dependent dynamics, chemistry response and stability require polynomial/rational eigenproblems. | 2 |
| LIN-MFUN | extend-existing | matrix-functions-and-scaling-squaring | Existing matrix exponential series is a mathematical supplier, not practical dense computation. | 4 |
| LIN-SYL | genuinely-new | sylvester-and-lyapunov-matrix-equations | No matrix-equation solver/conditioning contract; needed by matrix functions, control and covariance dynamics. | 4 |
| LIN-EXPA | extend-existing | matrix-exponential-and-phi-function-actions | Exponential integrators need matrix actions with certified additive error, not dense exp alone. | 4 |
| LIN-FFT | extend-existing | computed-fast-transforms-and-convolution | Published radix-two exact FFT is reused; missing computed stability, arbitrary lengths, DCT/DST and numerical convolution. | 3 |
| LIN-NUFFT | genuinely-new | nonuniform-fast-fourier-transforms | No NUFFT for scattering/MRI/particle/spectral nonuniform data. | 4 |
| APP-SPLINE | extend-existing | spline-evaluation-and-interpolation-algorithms | Published spline existence/rates do not give executable stable evaluation and general knot conventions. | 3 |
| APP-SHAPE | genuinely-new | shape-preserving-piecewise-polynomial-interpolation | No monotonicity/positivity-preserving interpolation for physical concentrations and tabular laws. | 3 |
| APP-RBF | genuinely-new | radial-basis-and-kernel-interpolation | No scattered-data/meshfree interpolation beyond polynomial nodes. | 4 |
| APP-MINIMAX | genuinely-new | minimax-approximation-and-remez-algorithms | NA-11 covers Chebyshev interpolation, not best uniform approximation algorithms. | 3 |
| APP-RATIONAL | genuinely-new | barycentric-rational-and-aaa-approximation | No adaptive rational/pole-aware approximation of response functions. | 3 |
| APP-WAVELET | genuinely-new | wavelet-transforms-and-nonlinear-approximation | No multiresolution/thresholded compression algorithms. | 3 |
| QUAD-EXTRAP | genuinely-new | clenshaw-curtis-and-extrapolation-quadrature | NA-12–14 lacks spectral quadrature/extrapolation contracts. | 3 |
| QUAD-SING | genuinely-new | singular-and-infinite-interval-quadrature | General smooth quadrature does not cover endpoint/infinite/PV/BEM singular integrals. | 4 |
| QUAD-OSC | genuinely-new | oscillatory-integrals-and-filon-levin-methods | Smooth quadrature cannot guarantee cost/error for large frequency. | 4 |
| QUAD-SMOL | genuinely-new | sparse-grid-cubature-and-mixed-regularity | NA-39–42 sampling does not supply deterministic high-dimensional sparse-grid integration. | 3 |
| VAL-INTERVAL | genuinely-new | outward-rounded-interval-and-ball-arithmetic | NA-01 error model does not define sound enclosures or directed-rounded arithmetic. | 3 |
| VAL-LINEAR | extend-existing | verified-linear-systems-and-spectral-enclosures | No rigorous computed nonsingularity/solution/eigenvalue certificates. | 3 |
| VAL-ROOT | genuinely-new | interval-newton-krawczyk-and-polynomial-root-isolation | Local Newton convergence and a small residual do not certify roots or completeness. | 4 |
| GEO-PRED | genuinely-new | certified-geometric-predicates | Floating determinant signs can invalidate meshes/particles/interpolation geometry. | 3 |
| GEO-DEL | genuinely-new | delaunay-triangulations-and-voronoi-computation | No certified geometry algorithm for scattered interpolation/meshes; PDE agent owns mapped-element analysis/refinement. | 5 |
| LIN-SKETCH | extend-existing | sketched-least-squares-and-subspace-embeddings | NA08 Gaussian range finder approximates matrix range; it does not prove sketch-and-solve least-squares or embedding guarantees. | 4 |
| LIN-CUR | extend-existing | interpolative-cur-and-nystrom-decompositions | Neither dense Gaussian range finder nor statistical kernel definition supplies actual column/row skeleton and PSD Nystrom reconstruction algorithms. | 3 |
| LIN-RIC | genuinely-new | numerical-algebraic-riccati-equations-and-stabilizing-branches | No numerical CARE/DARE solver, stabilizing branch theorem or residual/rounding certificate exists. CTRL1 is finite-horizon constrained control and supplies no infinite-horizon ARE theorem; this owner must build every missing algebraic/stability supplier itself. | 11 |
| LIN-SQRTFILTER | extend-existing | square-root-covariance-update-error-and-stability | Published alg-kalman-filter already defines the exact statistical method and canonical Cholesky innovation solve, while explicitly making no rounding claim. Missing numerical delta is orthogonal square-root implementation with PSD covariance and nearby-joint-covariance/forward-error bounds, including singular state/noise covariances. | 5 |

Each B page is the A slug plus `-examples`; it supplies no logical dependencies. Full exact theorem hypotheses and boundary/failure cases are in JSON rather than compressed into this table.

## Existing-pair amendments

- **NA-01**: Add compensated summation (Kahan/Neumaier), pairwise summation and error-free transforms as algorithm definitions, distinct from plain gamma_n dot-product theorem. Prove pairwise depth bound gamma_ceil(log2 n) sum|x_i|, and compensation bound with explicit constant/higher-order term, overflow/range and final-rounding premises. Dot-product/FMA exact-transform assumptions named. Exact cancellation and subnormal counterexamples in B. All two-sum/two-product lemmas owned here; GEO-PRED consumes rather than duplicates. GEO-PRED must consume these error-free transform lemmas rather than reauthor them.
- **NA-02**: Add iterative refinement/mixed precision: residual precision u_r, factor/solve precision u_f, working updates u_w. Prove correction iteration error recurrence ||e_(k+1)|| <= q||e_k||+eta with q<1 established from factor/preconditioner error and kappa(A); derive attainable residual/forward floor. Define finite budget, failure and successful-stagnation statuses. Mixed precision cannot inherit exact refinement convergence. Rank-deficient/minimum-norm LS numerical delta is owned by LIN-SVD; keep NA-02 -> LIN-SVD out of the prerequisite graph because LIN-SVD consumes the stable reflector suppliers in NA-02.
- **NA-05**: Add finite-precision Arnoldi/MGS/reorthogonalization local relation A Vhat=Vhat Hhat+f e_m*+E and quantified orthogonality loss under rank/conditioning hypotheses; true residual recomputation/residual-gap bound. Add finite CG attainable-accuracy/residual-gap contract without exact-grade termination or unconditional monotone true residual. Orthogonalization and rounding lemmas owned NA-05.
- **NA-07**: Promote actual AMG and domain decomposition beyond conditional names: define strength graph, aggregation/prolongation, fixed Galerkin hierarchy and status; prove one concrete 1D Poisson level-uniform approximation+smoothing constants. General AMG stays conditional on the declared constants. Add overlapping additive Schwarz SPD preconditioner and condition bound C_stable C_overlap from fully proved stable decomposition/local energy estimates (or PDE-owned concrete domain-decomposition pair). Coordinate single ownership with PDE agent.
- **NA-08**: Add randomized power/subspace iteration with intermediate orthogonalization, actual deterministic power-error inequality and flop count. Randomized sketch LS/OSE/leverage sampling is explicitly owned LIN-SKETCH and column/row/Nystrom reconstruction LIN-CUR; consume LIN-SVD and LIN-TT for deterministic rank/truncation primitives. Any high-probability estimator needs its own Gaussian/test-vector proof and failure probability. Existing Gaussian moment obligations remain NA-08.
- **NA-13**: Replace node oracle hold by Golub-Welsch executable Jacobi-matrix eigenprocedure and computed node/weight enclosure. Prove three-term recurrence, positive offdiagonals, simple roots/interlacing and weights mu0 |v_1|². Reuse LIN-SCHUR/LIN-EIGITER or symmetric eigensolver with explicit residual and VAL-LINEAR for certified nodes; carry actual weighted-measure moment assumptions. Do not claim root oracle is finite algorithm.
- **NA-14**: Add rigorous adaptive integration mode with interval/Taylor derivative enclosures or Peano-kernel bounds per leaf; global certified error is sum of absolute local bounds plus rounded summation. Simpson difference remains heuristic indicator unless asymptotic hypotheses establish efficiency/reliability. Budget/depth failure returns estimate and certified bound/inconclusive status, never tolerance success.

NA-01 itself is fully covered externally. Its new compensated-summation/error-free-transform delta moves into the earliest retained NA-02 finite-precision extension, as agreed with the integrator. GEO-PRED consumes that single supplier. NA-02 must not depend on LIN-SVD: LIN-SVD consumes NA-02 stable reflectors, and owns rank-deficient LS itself.

## Cross-owner interfaces

- **Time integration:** LIN-EXPA supplies entire `phi_k`, including zero, Arnoldi/Taylor action and a residual-integral error bound with actual semigroup/logarithmic-norm constants. Time owner supplies ODE/exponential-integrator defect propagation and validated tubes; action error is an additional term.
- **PDE/BEM:** QUAD-SING supplies endpoint/infinite/PV quadrature and reference-triangle Duffy weak-singularity estimates. PDE owner supplies curved/surface Jacobians, traces, jumps and operator estimates. LIN-FMM supplies separated-kernel expansions and explicit tails; GEO-PRED/GEO-DEL supply exact predicates and triangulations. PDE owns refinement/quality, mapped-element analysis and solver stability.
- **Statistics/inverse/UQ:** QUAD-SMOL supplies deterministic Smolyak detail/error/work contracts; statistics supplies PCE/sensitivity consumers. LIN-SKETCH owns sketch-LS/OSE/leverage sampling; LIN-CUR owns interpolative/CUR/Nystrom, avoiding an unowned gap.
- **Physics/chemistry:** LIN-TT owns TT/HOSVD/truncation; LIN-DMRG owns finite sweeps, effective eigenproblems, pretruncation energy decrease and quantified posttruncation perturbation. Physics owns Hamiltonian/model and special-function/Boys evaluation. No global DMRG minimum or low-rank-efficiency promise.
- **Biology/CTMC:** LIN-EXPA is general matrix action; biology owns generator-specific uniformization/probability/FSP. APP-RBF is general scattered interpolation/native-space/RBF-FD local consistency; biology owns SPH/PIC/vortex and PDE owner supplies stability.
- **Validated global optimization:** VAL-INTERVAL supplies outward-rounded factorable-function/derivative inclusion; VAL-LINEAR and VAL-ROOT supply certificates. Optimization owns branch-and-bound invariants and lower relaxations.

## Evidence and proof limits

Repository instructions and relevant plan/pages/items were read. The complete `proposal.json` records exact canonical suppliers. New external references are **proposed authoritative reading targets**, not falsely asserted full-text reads or accepted proofs. The bibliography includes Higham, Golub–Van Loan, Davis, Hackbusch, Greengard–Rokhlin, Oseledets, Schollwoeck, Barnett et al., de Boor, Wendland, Trefethen, Nakatsukasa–Sete–Trefethen, Davis–Rabinowitz, Takahasi–Mori, Iserles–Norsett, Bungartz–Griebel, Moore–Kearfott–Cloud, Shewchuk, de Berg et al., Woodruff, and Gittens–Mahoney with URLs and target locators.

Read-only identity inspection found **zero candidate-ID collisions**, **zero repeated candidate stems**, and **zero missing listed canonical IDs**. This was an inventory/name check, not a validator, gate, mathematical review or proof acceptance. All source-uncertain estimates remain explicit local authoring obligations.

## Focused cycle 2: numerical Riccati and square-root filtering

**LIN-RIC** owns the previously missing CARE/DARE family, including every required PBH, stabilizability/detectability, infinite-horizon value/existence, Hamiltonian/symplectic stable graph, Stein and spectral-separation supplier. CTRL1 confirms that its scope is finite-horizon constrained control: LIN-RIC does not depend on CTRL1, while CTRL1 can consume the new stable-branch theorem. Numerical procedures are ordered Hamiltonian Schur, homogeneous symplectic-pencil QZ (singular A permitted), continuous Newton–Kleinman with a supplied stabilizing initial gain, and discrete structure-preserving doubling. Each keeps finite budgets, failure branches and exact conditional convergence hypotheses.

The CARE certificate uses the actual closed-loop Lyapunov inverse bound kappa, residual r, nonlinear coefficient norm g and radius rho satisfying `kappa(r+g*rho^2)<=rho` and `2*kappa*g*rho<1`. A separate positive Lyapunov stability margin must dominate `2*||W||*g*rho`; a small ARE residual alone identifies neither accuracy nor the stabilizing branch. DARE has its own Stein derivative, inverse-bound/Hessian and positive-definite gain-denominator control, plus a separate Schur-stability margin. Ordered Schur/QZ unstructured backward error is not misrepresented as structured Hamiltonian/PSD data backward stability.

**LIN-SQRTFILTER** explicitly reuses published `alg-kalman-filter`, `lem-one-step-kalman-gaussian-conditioning` (already containing Joseph identity), and `thm-kalman-filter-is-exact-posterior`. Its new delta is a numerical QR square-root implementation: prediction factors a stacked matrix; measurement factors the block prearray `[[L_R,H L_minus],[0,L_minus]]`, then reads innovation, gain and posterior factors from its lower triangular Gram factor. Rectangular/singular state and noise factors are allowed; only the innovation block must be nonsingular.

Stable QR yields a nearby **joint covariance** bound `(2*eta+eta^2)||Z||_F^2`; it does not automatically yield a nearby independent-noise statistical model. The represented posterior factor product remains PSD, while separately rounding a formed covariance matrix needs a further factor interpretation. Mean/Schur-complement errors retain innovation conditioning, and finite-horizon error propagation has explicit amplification factors. No unproved uniform-in-time filter stability claim is added. Exact canonical Bayesian assumptions, including inherited choice, remain in the reused statistical theorem.

Cycle-2 sources add Bini–Iannazzo–Meini, Laub, van Dooren and Bierman as proposed full-text reading targets, with explicit locators/URLs in JSON. Their proofs have not been newly read or accepted in this planning audit. Final inventory-name check remains clear: zero candidate collisions, duplicate stems or missing named canonical IDs.
