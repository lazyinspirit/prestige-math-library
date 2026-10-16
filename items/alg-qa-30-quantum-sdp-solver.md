---
id: alg-qa-30-quantum-sdp-solver
kind: algorithm
title: "Sparse-oracle quantum SDP algorithm"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - def-qa-30-sdp-primal-dual-pair
  - def-qa-30-sdp-sparse-oracle-model
  - def-qa-30-sdp-reference-state-access
  - alg-qa-30-sdp-gibbs-purification
  - lem-qa-30-spectral-minimum-shift
  - thm-qa-30-smooth-fourier-approximation
  - thm-qa-30-flagged-trace-error-and-cost
  - alg-qa-relative-probability-estimation
  - alg-qa-30-capped-generalized-minimum
  - thm-qa-30-generalized-minimum-guarantee
  - lem-qa-30-two-sparse-estimated-oracle
  - lem-qa-30-mmw-to-sdp-feasibility
  - thm-qa-30-sdp-binary-search-correctness
  - lem-qa-25-sorted-xor-sparse-access-isometries
  - lem-qa-25-clean-subspace-unitary-hybrid
justified_by: [thm-qa-30-quantum-sdp-solver-guarantee, thm-qa-30-quantum-sdp-solver-cost]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1809.00643v4"
      url: "https://arxiv.org/pdf/1809.00643"
    - title: "https://arxiv.org/pdf/1504.06987v3"
      url: "https://arxiv.org/pdf/1504.06987v3"
verification:
  precheck: n/a
---

## Definition

Input finite binary Hermitian matrices $A_1,\ldots,A_m,C$ and rational $b,R,r,\varepsilon$, with $\varepsilon>0$, $m\ge1$, $A_1=I$, $b_1=R\ge0$, $\|A_j\|,\|C\|\le1$, a nonempty primal, and an attained optimal dual of $\ell_1$ norm at most $r\ge1$. Supply the total finite sparse XOR location/value interfaces of [[def-qa-30-sdp-sparse-oracle-model]], the costed reference preparation $\Phi_n$, and declared finite reversible arithmetic, controlled evolution, inverses, reflections and synthesis budgets. The output is a classical sparse dual list or explicit `FAIL`; the confidence target is rational $0<\delta<1$ (use $\delta=1/3$). Every memory, QRAM, reference, arithmetic and output cost is recorded. The separate resource theorem substitutes actual sparse-evolution implementations; no matrix function or sparse-sum oracle is implicit.

**Boundary branches.** In dimension zero return the zero dual vector. For $R=0$ or $\varepsilon\ge2R$ return $e_1$. These branches precede all divisions by $R$. Otherwise put $e=\varepsilon/8$, $L=\lceil\log_2(16R/\varepsilon)\rceil+2$, $w=r+1$, and
$$\ell=\ln(\max(2,n)),\quad \theta=e/(24Rr),\quad T=\lceil36w^2R^2\ell/e^2\rceil,\quad\eta=\sqrt{\ell/T}.$$
Computable-real constants such as $\eta$ are not exact value-oracle outputs: choose certified finite rational enclosures and round common scalar coefficients to the precision allocated to each decoded Hermitian sum and its simulated evolutions. Integer cutoffs use certified upper enclosures, so a conservative larger $T$ is allowed with the same $\eta=\sqrt{\ell/T}$. No equality comparison with a transcendental number is required. The ideal densities and regret argument use the displayed real parameters; every decoded-matrix error is included in the finite block-error and whole-circuit hybrid budgets below.

**Derived sparse access.** At round $t$, store the previous two-sparse rational lists and form $S_{t-1}=\sum_{u<t}M_u$, $M_u=(\sum_jy_{u,j}A_j-C)/w$. To answer a row query, enumerate all constituent support lists and the identity column, sort their finite column labels, merge duplicates and retain every distinct union column, including columns whose combined value is zero. Pad with distinct labels. Never test a real sum for exact zero. Round common real scalar coefficients with certified total norm error and compute exact finite decoded entry sums; this preserves Hermiticity and transposed support lists. The sorted-support construction of [[lem-qa-25-sorted-xor-sparse-access-isometries]] allows these listed zeros and constructs the clean block access. Actual row scanning, sorting, value arithmetic and inverse/control calls are charged. Allocate decoded-matrix error before each evolution so its Duhamel error $|u|\|H-\widetilde H\|$ and all simulation errors meet the allocated circuit slot budget. The clean-subspace hybrid in [[lem-qa-25-clean-subspace-unitary-hybrid]] applies to the actual finite implementations. A QRAM profile supplies its address/memory unitary and its construction/update costs explicitly.

**Frozen round factory.** At the start of each round, choose the exact finite Hermitian decoded $\widehat L_t$ with $\|\widehat L_t-\eta S_{t-1}\|\le\delta_t\le\min(1/8,e_f/100)$. Run the finite ShiftMin construction of [[lem-qa-30-spectral-minimum-shift]] on $\widehat L_t$ with its certified norm bound, measure its rational lower shift once and freeze both $\widehat G=\widehat L_t-(\widetilde\lambda-3/2)I$ and the target $G=\eta S_{t-1}-(\widetilde\lambda-3/2)I$, their norm bounds, Fourier lists, normalization and all precisions. The minimum-eigenvalue variational bound transfers the shift margin to the target: both minima lie in $[1,2]$. Implement the decoded block, including its at-most-$e_f/200$ positive-exponential perturbation against the target in the final block-error budget. Execute steps 2–3 of [[alg-qa-30-sdp-gibbs-purification]] with these frozen matrices and shift to build the unmeasured Gibbs block; do not repeat its shift-measurement step. For each observable $A$, build the finite Fourier block for $F_A=\frac12\sqrt{I+A/2}$ with $x_0=0,r=1,\Delta=1/2,B=1$ and coefficients $a_k=\frac12\binom{1/2}{k}2^{-k}$. Use $e_f\le\min(1/2,\theta/(100000n))$ and the SAME $B_A^+=B_G^+=1+e_f/8$ in numerator and baseline. The baseline block is $I/(2B_A^+)$.

**Trace label.** Compose the frozen Gibbs block and observable block on the first half of $\Phi_n$, with distinct work registers. Estimate the two actual all-zero probabilities with [[alg-qa-relative-probability-estimation]], floor $1/(1024n)$ and relative tolerance $\theta/36$. Return $2(\widehat q_A/\widehat q_0-1)$ rounded with error at most $\theta/4$ and clipped to $[-1,1]$; a zero denominator on a bad path returns the fixed label zero. Use its finite worst-case cap and the supplied `efficient-grid` fixed-precision rounding mode. For an indexed trace sampler preserve the uniform index, all AE/QPE targets, comparison bits, stop flags, coins, rounded values and history; defer internal measurements and pad stopped branches by identities. Its inverse is the reverse of this entire circuit. No inverse of a normalized postselected state is used. All coherent division, comparison, rounding and history are quantum gates and work, separately charged. [[thm-qa-30-flagged-trace-error-and-cost]] supplies the conditional accuracy and probability floors.

**Diagonal mode.** When every input is diagonal, the caller may select the scalar flag implementation instead of Fourier evolution. Evaluate the finite decoded round energy $\widehat L_t(i)$ using the stored sum of at most $2t+1$ diagonal values. Round to absolute error at most $1/8$, retain the uniform index, run the same capped robust minimum, measure its label $s$ once, and freeze $\widehat g_i=\widehat L_t(i)-s+3/2$. Its confidence uses the round's shift budget. Set the common coefficient approximation error $\delta_t\le\min(1/8,\mu/100)$, $\mu\le\theta/(100000n)$. On the shift good event target and decoded minima are in $[1,2]$. For observable entry $a_i$, prepare a scalar flag with probability within $\mu$ of $(1+a_i/2)e^{-g_i}/4$, using the finite decoded energy; the baseline uses $a_i=0$ and the same shift. Compute the exponential as follows. Put $B=\lceil\log_2(32/\mu)\rceil$ by rational doubling comparisons. For $\widehat g_i\ge B$ use zero. Otherwise double an integer $h$ from two until $3^B B^h/h!\le\mu/64$, then evaluate its exact rational Taylor polynomial through degree $h-1$ and round once. Clip to $[0,1]$. To implement the flag, bisect an angle interval $[0,\pi/2]$ using fixed absolute-$\mu/32$ Taylor enclosures of its midpoint $\sin^2$; stop on comparison overlap or after the fixed $O(\log(1/\mu))$ width cap, then implement the finite encoded angle by binary-controlled rotations with its allocated synthesis error. Retain/uncompute all arithmetic as stipulated for the full inverse. The factorial test passes by $h=O(\log^2(1/\mu))$; the cost theorem proves this schedule and its ratio/error budget. Use the same RelProb floor, relative tolerance, coherent history, score oracle and outer loop as in general mode. This diagonal factory replaces the spectral/Fourier factory; its arithmetic costs remain explicitly charged.

**Two-sparse round oracle.** First measure a scalar trace label $\widetilde c$ for $C$. Put $c'=\widetilde c-w\theta$. Execute the explicit rational region, membership, determinant-based angular order, interpolation and scale recovery in the proof of [[lem-qa-30-two-sparse-estimated-oracle]]. If $\alpha\ge0,c'\le0$, return zero. Otherwise run [[alg-qa-30-capped-generalized-minimum]] twice with $N=m$ on the two score orders of that lemma. Both orders assign score zero to every point inside its region; outside points use the oppositely oriented angular orders, compared by rational half-plane and determinant tests. No arctangent equality test or preliminary search miss is needed. If either selected point lies in the region, return its scaled one-coordinate vector. Otherwise intersect its selected pair's segment with the closed rational halfspaces and recover its positive scale by the lemma's explicit formulas. If the segment interval is empty return `EMPTY`. If successful return its rational weights, merging repeated indices. `EMPTY` is a bounded-error complete-oracle response: on the joint good event it implies $\alpha<\mathrm{OPT}$. A low-level failure with no proved contract returns `FAIL` instead.

**Threshold$(\alpha,e,\delta_{call})$.** Initialize $S_0=0$. Set $\beta=\delta_{call}/(10T)$. For $t=1,\ldots,T$:

1. Build the frozen round factory with shift failure at most $\beta$ and scalar $C$ trace failure at most $\beta$.
2. Let $Q_{min}$ be the deterministic sampler-call cap of one generalized minimum at confidence $\beta/2$. Give each indexed trace label bad probability at most $\nu\le(\beta/(16Q_{min}))^2$, by allocating its relative-estimation and implementation errors accordingly. Retain its history and fixed-index access as above. Allocate any remaining whole-minimum implementation hybrid error within its $\beta$ failure budget. Run both minima at total failure at most $\beta$ each. These are the good-label/cleaning hypotheses of [[thm-qa-30-generalized-minimum-guarantee]], rather than a union bound over unmeasured labels.
3. On `EMPTY` return `HIGHER`. On a successful weight list store $y_t$, compute $M_t$, and update its sparse list. An absent access certificate or other unsupported numerical failure returns `FAIL`.

After $T$ successful rounds return `LOWER` with the exact rational sparse list $\bar y=(e/R)e_1+T^{-1}\sum_ty_t$. Retain its finite rational coefficients; no feasibility-preserving rounding is inferred. The oracle's conditional bad probability is at most $\delta_{call}$ by the adaptive union bound. Its `HIGHER` implication and `LOWER` reserve margin are [[lem-qa-30-mmw-to-sdp-feasibility]].

**Outer search.** Set $lo=-R$, $hi=R$, $\delta_{call}=\delta/(L+1)$. Call Threshold at $R+e$ and store its `LOWER` vector; any other outcome returns `FAIL`. For at most $L$ midpoint calls, stop when $hi-lo\le\varepsilon/2$. At $\alpha=(lo+hi)/2$, on `LOWER` store its vector and put $hi=\min(hi,\alpha+e)$; on `HIGHER` put $lo=\max(lo,\alpha-e)$; on `FAIL` return `FAIL`. Return the stored vector, or `FAIL` if the fixed cap is exhausted before the stopping test. The invariant and finite cap are proved in [[thm-qa-30-sdp-binary-search-correctness]]; no tolerance refinement is needed on a good path. Check finite rational nonnegativity and objective arithmetic before output; PSD feasibility is supplied by the proved MMW reserve, without a free dense spectral checker.

Confidence budgets are predictable functions of finite prior histories. The first-bad-call union bound covers the adaptive search. Capped search/statistical errors belong to their proved bad events; unproved access or arithmetic failures do not certify infeasibility. Output contains at most $2T+1$ nonzero coordinates after merging, and no dense primal matrix is produced.
