---
id: alg-nufft-certified-gaussian-gridding-type1-type2
kind: algorithm
title: Certified Gaussian gridding for type 1 and type 2
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 4
deps:
  - def-nufft-transform-types-and-mode-conventions
  - def-nufft-finite-array-norms
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-gaussian-periodization-fourier-series
  - lem-nufft-gaussian-grid-alias-identity-and-bound
  - lem-nufft-gaussian-spread-truncation-tail
  - lem-nufft-gaussian-image-tail-bound
  - def-countable-choice
  - alg-na-computed-unitary-radix-two-fft
  - thm-na-computed-unitary-radix-two-fft-error-bound
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - alg-certified-elementary-range-evaluation
  - thm-real-elementary-range-enclosures
  - thm-na-interval-pi-matches-canonical-fourier-pi
  - def-real-elementary-functions-and-domains
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited through the local Gaussian Poisson-summation alias identity; all candidate searches and arithmetic loops are finite.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and its Applications, Part I, slides 44–69"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Gaussian gridding factorization, truncation/alias analysis, multivariate extension, and operation-count summary"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§§2–3, printed pp. 445–448, Gaussian smoothing, deconvolution, fast gridding, and tensor-product implementation"
---

## Definition

Fix a dimension $d\ge1$, finite mode bounds $K_r\ge0$, a finite type-1 source list $(x_j,c_j)_{j<N}$ or type-2 data $(x_j)_{j<N},(f_k)_{k\in\mathcal K}$ as in [[def-nufft-transform-types-and-mode-conventions]], and a nonempty finite ordered list of candidate tuples
$$\mathcal C=\bigl((\tau_r,M_r,w_r,L_r)_{r=1}^d\bigr)_{\nu=1}^C,$$
an interval-arithmetic format $(p,e_{\min},e_{\max})$ with integers $p\ge2$ and $e_{\min}\le e_{\max}$, and one operationwise arithmetic model from [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] with the same binary precision $p$ and normal exponent limits $j_{\min}=e_{\min}$ and $j_{\max}=e_{\max}$. Let $u$ be a valid unit-roundoff bound for this selected model instance; it is not a separate free control, and require $u\le1/16$. Use this same model instance for every computed FFT operation. Let $J\ge1$ be the finite elementary-series truncation index, $0\le\epsilon_{\rm tw}\le1/4$ an exact rational maximum allowed twiddle certificate, $0<\delta_{\phi}\le1/4$ an exact rational phase-evaluation tolerance, integers $2\le p_{\phi,0}\le p_{\phi,\max}$ giving the initial and maximum phase precisions, and a finite recursion-depth cap $d_{\rm FFT}\ge0$. The phase evaluator uses exponent limits $e_{\min},e_{\max}$ and truncation index $J$. Also supply an exact positive dyadic requested absolute tolerance $\varepsilon_{\rm req}>0$. Source coordinates and coefficients are finite dyadics interpreted as exact real and complex inputs. Each candidate must have rational $\tau_r>0$, a power-of-two grid length $M_r=2^{q_r}$ with integer $q_r\ge0$, $M_r>2K_r$, integer width $w_r\ge1$ with $M_r\ge2w_r+1$, and integer image cutoff $L_r\ge1$. A malformed global control or structurally invalid candidate returns `invalid-input` before arithmetic. Type 3 is not an input mode for this algorithm.

After validating the global controls and candidate shapes, if $N=0$ return status certified immediately: type 1 returns the exact zero output array and zero radii, and type 2 returns the empty output array and zero radius. For $N>0$, process the candidates in supplied order; the first candidate that produces a complete interval certificate meeting $\varepsilon_{\rm req}$ is returned.

1. For each coordinate compute outward enclosures for
$$a_r=\frac{\pi}{\tau_rM_r^2},\quad s_r=\exp\!\bigl(-\pi\tau_rM_r(M_r-2K_r)\bigr),\quad d_r=\sqrt{\tau_r}\exp(-\pi\tau_rK_r^2),$$
$$S_r=\frac2{1-\exp(-a_r)},\quad T_r=2\exp(-a_rw_r^2)\left(1+\frac{1}{2a_rw_r}\right),\quad R_r=\frac{2\exp(-\pi L_r^2/\tau_r)}{1-\exp(-\pi L_r/\tau_r)}.$$
Use [[alg-certified-elementary-range-evaluation]] for every real exponential and square-root node in the procedure, including the finite norms, normalization and complex moduli; use format $(p,e_{\min},e_{\max})$ and truncation index $N=J$ on every such call. Form every Machin enclosure of $\pi$ with this same format and index. Use the outward interval operations for the rational DAGs. Set
$$A=\prod_{r=1}^d\left(1+\frac{2s_r}{1-s_r}\right)-1,\qquad T_d=\sum_{r=1}^dT_r\prod_{s\ne r}S_s,\qquad d_{\min}=\prod_{r=1}^d d_r.$$
Store outward upper bounds $A^+,T_d^+$ and $R_r^+$, where $R_r^+$ bounds the exact image-tail constant $R_r$, and a lower bound $d_{\min}^-$. If any required enclosure is non-finite, if a required denominator interval in $A,S_r,T_r,R_r$ contains zero, if some $s_r$ enclosure is not strictly below $1$, or if $d_{\min}^-\le0$, reject this candidate as inconclusive; no division by an unverified multiplier is performed.

2. For every source define its periodic nearest-point set by
$$W_j=\prod_{r=1}^d\left\{\ell_r\in\{0,\ldots,M_r-1\}: \min_{n\in\mathbb Z}|\ell_r/M_r-x_{j,r}-n|\le w_r/M_r\right\},$$
using the selected candidate. For type 1 only, for each $\ell\in W_j$ reduce each exact dyadic displacement $\ell_r/M_r-x_{j,r}$ modulo one to $z_r\in[0,1)$. Enclose the one-dimensional kernel by evaluating the finite image sum
$$\sum_{n=-L_r}^{L_r}\exp\!\left(-\pi(z_r+n)^2/\tau_r\right)$$
with [[alg-certified-elementary-range-evaluation]] using $N=J$, then add the symmetric interval $[-R_r^+,R_r^+]$ from step 1. All kernel and coefficient products and sums use outward interval arithmetic. For each grid cell $\ell$, this gives a complex rectangle enclosing its exact truncated-spread value $g_\ell$. Choose its lower-left corner $u_\ell$ as a dyadic center and an upward dyadic radius $e_\ell$ large enough to enclose $g_\ell-u_\ell$. Let $E_{\rm eval}$ be an outward upper bound for $(\sum_\ell e_\ell^2)^{1/2}$ and let $U$ be an outward upper bound for $\|u\|_2=(\sum_\ell|u_\ell|^2)^{1/2}$. Before a type-1 FFT call, require every real and imaginary coordinate of every $u_\ell$ to belong to the representable set $\mathbb F$ of the selected operationwise model; otherwise reject this candidate with a range-failure status before calling the FFT. Type 2 skips this spreading-grid construction; its source-window intervals are evaluated in step 4 using the sets $W_j$ just defined.

3. For each mode $k\in\mathcal K$, define its grid slot by $\kappa(k)=(k_r\bmod M_r)_{r=1}^d$, using least nonnegative residues; $M_r>2K_r$ makes this map injective. Put $\eta=10u+\epsilon_{\rm tw}$, $\rho_r=(1+\eta)^{q_r}-1$ for each axis, and $\rho=\prod_r(1+\rho_r)-1$. For type 1, run [[alg-na-computed-unitary-radix-two-fft]] on each length-$M_r$ grid line along axes $1,\ldots,d$ in a fixed lexicographic line order, with direction `forward`, the selected operationwise model, phase tolerance $\delta_{\phi}$, exponent limits $e_{\min},e_{\max}$, phase precisions $p_{\phi,0},p_{\phi,\max}$, series cap $J$, and recursion cap $d_{\rm FFT}$. The supplier passes the exact rational phase argument $q=-2m/M_r$ for its twiddle indexed by $m$ and returns a certificate $\epsilon_\ell$ for each twiddle it uses. Reject this candidate with the returned status if an FFT call is non-finite or inconclusive; otherwise verify for every returned twiddle certificate that $\epsilon_\ell\le\epsilon_{\rm tw}$. If any certificate exceeds $\epsilon_{\rm tw}$, reject this candidate with status `twiddle-bound-not-met` and do not use that FFT output. This check applies literally when $\epsilon_{\rm tw}=0$, so every used twiddle must then have certificate zero. After all checks pass, extract the unitary Fourier coordinates at slots $\kappa(k)$ for $k\in\mathcal K$ and scale by $P^{-1/2}$, where $P=\prod_rM_r$. Use the range evaluator with format $(p,e_{\min},e_{\max})$ and $N=J$ for every real elementary node, including this scaling and the mode multipliers; use the same $J$ Machin enclosure of $\pi$. For each required mode evaluate the multiplier interval $d_k=\prod_r\sqrt{\tau_r}\exp(-\pi\tau_rk_r^2)$; if its lower endpoint is $\le0$, reject this candidate as inconclusive before division. Otherwise divide by that certified positive interval. Use outward complex-rectangle arithmetic. For each $k\in\mathcal K$, return the lower-left corner $z_k$ and an outward radius $r_k$ containing the resulting rectangle. Set
$$\epsilon_{\rm ana}=A^++\frac{T_d^+}{P\,d_{\min}^-},\qquad B_{\rm round}=\max_{k\in\mathcal K}r_k+ \frac{E_{\rm eval}}{\sqrt{P}\,d_{\min}^-}.$$
The returned error certificate is $\epsilon_{\rm ana}$ and $B_{\rm round}$.

4. For type 2, form the conjugate-transpose finite gridding factorization. For each input mode $k$, evaluate its multiplier interval using the same format and truncation setting $N=J$; if its lower endpoint is $\le0$, reject the candidate as inconclusive before division. Otherwise divide by that certified positive interval. For the resulting mode rectangles choose lower-left dyadic centers $v_k$ and radii $e_k$ enclosing their deviations. Set $E_f$ to an outward upper bound for $(\sum_ke_k^2)^{1/2}$ and $V$ to an outward upper bound for $\|v\|_2$. Require every real and imaginary coordinate of the $v_k$ to belong to $\mathbb F$; otherwise reject this candidate with a range-failure status before calling the FFT. Embed each $v_k$ at grid slot $\kappa(k)$, zero-fill all unused grid modes with zero centers and zero radii, and apply [[alg-na-computed-unitary-radix-two-fft]] in direction `inverse` on the same axes and in the same lexicographic line order, passing the same operationwise model and phase controls as in type 1. Reject a non-finite or inconclusive FFT call; for a finite return verify every returned twiddle certificate $\epsilon_\ell\le\epsilon_{\rm tw}$, with the same literal zero-bound rule. Enlarge the unitary-grid output by radius $E_f+\rho V$ and scale by $P^{-1/2}$. For each source $x_j$, use exactly the grid cells $\ell\in W_j$ from step 2; reduce each coordinate displacement $\ell_r/M_r-x_{j,r}$ modulo one to $z_r\in[0,1)$, enclose $\sum_{n=-L_r}^{L_r}\exp(-\pi(z_r+n)^2/\tau_r)$ by range-evaluator calls with format $(p,e_{\min},e_{\max})$ and $N=J$, and add $[-R_r^+,R_r^+]$. Multiply the coordinate window intervals, conjugate the resulting real window (which leaves it unchanged), and multiply and sum against the scaled grid rectangles using outward complex-rectangle arithmetic at every operation. Return the lower-left corner $z_j$ and an outward radius $r_j$ containing each resulting rectangle; the type-2 rounding certificate is $B_{\rm round}^*=\max_jr_j$. Its analytic certificate is the same $\epsilon_{\rm ana}$ from step 3.

5. Enclose $\|c\|_1$ or $\|f\|_1$ from above by outward modulus and addition intervals. For each candidate whose operations succeed, compare the outward upper bound $\epsilon_{\rm ana}\|c\|_1+B_{\rm round}$ (type 1), or $\epsilon_{\rm ana}\|f\|_1+B_{\rm round}^*$ (type 2), exactly with $\varepsilon_{\rm req}$. If it is at most $\varepsilon_{\rm req}$, return the centers and their certificates with status certified. Otherwise record this candidate's first non-success reason as `requested-tolerance-not-met` together with its finite bound, then continue to the next candidate. For any candidate rejected by a range, interval, denominator, mode-positivity, FFT, or twiddle check, record its first failure status and location, then continue to the next candidate. If the finite candidate list is exhausted without a certified return, return status inconclusive with the first recorded non-success record in candidate order. In particular, if every candidate had finite valid bounds above $\varepsilon_{\rm req}$, return `inconclusive(requested-tolerance-not-met)` with the first such bound; no approximation is returned as certified on this branch.

The analytic term consists only of the exact infinite-grid alias contribution and the omitted finite-spread tail. The reported rounding radius contains the finite image-series enclosure, outward arithmetic, and computed FFT error. The signed-mode slot map $\kappa$ is used for both type-1 extraction and type-2 embedding. The transform and FFT axes are fixed; a different normalization or sign convention is a different procedure.

## Remarks

The unitary radix-two FFT error theorem is used only on successful axes with the stated $u$ and twiddle bounds; range, interval, or denominator failures return inconclusive. The global lower bound $d_{\min}^->0$ does not replace checking each separately evaluated mode interval before division. The finite candidate list is part of the input; if none meets the requested tolerance the returned status is inconclusive. This procedure handles types 1 and 2 only. Type 3 requires its own frequency-space scale/product and complexity analysis.

## Facts & Assumptions

**Given:** Finite exact dyadic type-1 or type-2 data, a finite nonempty candidate list satisfying the displayed integer/rational hypotheses, the selected operationwise model and its valid unit-roundoff bound $u$, positive requested tolerance $\varepsilon_{\rm req}$, phase controls $\delta_\phi,p_{\phi,0},p_{\phi,\max},d_{\rm FFT},\epsilon_{\rm tw}$, common range truncation index $J$, and the interval and FFT routines named in the Definition.

[F1] [[def-nufft-transform-types-and-mode-conventions]]: the source, mode and output lists are finite, and the type-1/type-2 formulas use the stated mode set.

[F2] [[alg-certified-elementary-range-evaluation]]: each elementary range call uses a finite truncation index $N$ and format, and returns either a finite enclosure or a named failure status; the Definition fixes these to $N=J$ and $(p,e_{\min},e_{\max})$.

[F3] [[alg-na-computed-unitary-radix-two-fft]] and [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each FFT call requires input coordinates in its selected model's representable set, uses a positive phase tolerance, finite phase-precision range and recursion cap, and returns a certificate for every used twiddle or a failure status; $u$ is a valid bound for that same model instance.

[F4] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite interval operation encloses its exact range; invalid or unbounded operations return a non-finite status.

[F5] [[def-nufft-finite-array-norms]]: the finite $\ell_2$ norms used for grid and mode error radii are defined by finite sums, with value zero on an empty array.

## Proof

1.1 Every loop in a candidate is finite: the dimension, source and mode lists, grid-cell lists, image ranges $[-L_r,L_r]$, expression DAGs, range truncation index $J$, phase precision interval $[p_{\phi,0},p_{\phi,\max}]$, and recursion cap $d_{\rm FFT}$ are finite by [F1]–[F3], while every FFT length is a finite power of two by [F3]. The finite norm sums used in the radius construction are defined by [F5]. Thus a candidate either returns a result or reaches one of its explicitly named failure branches after finitely many operations. [given, F1, F2, F3, F5, algebra]

1.2 Every division in step 1 is preceded by the denominator, $s_r<1$, and $d_{\min}^->0$ checks; every type-1 or type-2 mode division is preceded by its own positive-lower-endpoint test in steps 3–4. Hence all performed divisions have divisor intervals excluding zero. The FFT is called only on inputs in its model's representable set; its statuses are checked and no FFT output is used unless every returned twiddle certificate is at most $\epsilon_{\rm tw}$. A failed interval, range, FFT, denominator, mode-positivity or twiddle check rejects the candidate. Sound containment of every returned finite interval follows from [F2] and [F4]. [given, F2, F3, F4, algebra]

2.1 The ordered candidate list is finite, and processing terminates for each candidate by step 1.1. The procedure returns the first successful candidate whose outward absolute-error bound meets $\varepsilon_{\rm req}$; if none does so, it returns inconclusive with the first recorded non-success reason, including `requested-tolerance-not-met` when all computed bounds exceed tolerance. Therefore every certified return has passed its finite checks, and the inconclusive branch returns no approximation certified to the requested tolerance. [given, F1, step 1.1, step 1.2, algebra] ∎
