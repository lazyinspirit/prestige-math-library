---
id: thm-nufft-gaussian-gridding-error-and-type2-adjoint
kind: theorem
title: Certified type-1 Gaussian gridding error and type-2 adjoint bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 5
proof_strategy: direct
deps:
  - def-nufft-transform-types-and-mode-conventions
  - def-nufft-finite-array-norms
  - def-matrix-product-and-identity-matrix
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-gaussian-periodization-fourier-series
  - lem-nufft-gaussian-grid-alias-identity-and-bound
  - lem-nufft-gaussian-spread-truncation-tail
  - lem-nufft-gaussian-image-tail-bound
  - alg-nufft-certified-gaussian-gridding-type1-type2
  - def-countable-choice
  - thm-na-computed-unitary-radix-two-fft-error-bound
  - thm-finite-parseval-and-plancherel
  - thm-radix-two-fft-arithmetic-complexity
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-real-elementary-range-enclosures
  - def-logarithm-to-a-base
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - def-real-elementary-functions-and-domains
  - lem-nonnegative-square-root-exists-and-unique
  - lem-nufft-finite-euclidean-norm-triangle
  - lem-complex-conjugation-and-modulus-laws
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-of-square-monotone
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is used only through the local Gaussian Poisson-summation alias identity; all finite-dimensional matrix and error-transfer arguments use no additional choice.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and its Applications, Part I, slides 44–69"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Gaussian-window factorization, explicit alias/truncation error derivation, and operation-count summary"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§§2–3, printed pp. 445–448, periodic Gaussian deconvolution and tensor-product gridding"
---

## Statement

Assume Countable Choice and the input hypotheses of [[alg-nufft-certified-gaussian-gridding-type1-type2]]. If $N=0$, the type-1 output is exactly zero and the type-2 output is empty, so their coordinatewise errors are zero. For $N>0$, fix a successful candidate with $P=\prod_rM_r$, exact multipliers $d_k=\prod_r\sqrt{\tau_r}\exp(-\pi\tau_rk_r^2)$, $d_{\min}=\prod_r\sqrt{\tau_r}\exp(-\pi\tau_rK_r^2)>0$, $s_r=\exp(-\pi\tau_rM_r(M_r-2K_r))$, and the exact spread-tail quantity $T_d$ of [[lem-nufft-gaussian-spread-truncation-tail]]. Put
$$\alpha=\prod_{r=1}^d\left(1+\frac{2s_r}{1-s_r}\right)-1,\qquad \epsilon_0=\alpha+\frac{T_d}{P d_{\min}}.$$
The algorithm returns an outward upper bound $\epsilon_{\rm ana}\ge\epsilon_0$.

For a type-1 output center array $\widehat F$ and its returned finite-arithmetic radius $B_{\rm round}$,
$$\|\widehat F-F\|_\infty\le\epsilon_{\rm ana}\|c\|_1+B_{\rm round}.$$
For the type-2 output center array $\widehat g$ and its returned radius $B_{\rm round}^*$,
$$\|\widehat g-A^*f\|_\infty\le\epsilon_{\rm ana}\|f\|_1+B_{\rm round}^*,$$
where $A_{k,j}=e^{-2\pi i k\cdot x_j}$ is the exact type-1 matrix and $A^*$ is its conjugate transpose.
When $N=0$, the type-2 output is empty and its coordinatewise assertion is vacuous; the procedure returns zero radius for this empty-output branch.

For fixed $d$, widths $w_r\le w$, image cutoffs $L_r\le L$, and fixed interval-series controls, one candidate's scalar grid/FFT/deconvolution work is
$$O\!\left(P\log P+N\prod_{r=1}^d(2w_r+1)\sum_{r=1}^d(2L_r+1)+|\mathcal K|\right).$$
Thus for bounded $w,L$ it is $O(P\log P+Nw^d)$, apart from the explicitly counted finite elementary-range evaluation work. No type-3 fast-cost claim follows.

## Facts & Assumptions

**Given:** Countable Choice; finite dyadic input data; a successful type-1 or type-2 algorithm output for an exact positive requested tolerance; the selected operationwise model and its valid unit-roundoff bound $u\le1/16$; positive interval-certified Gaussian deconvolution multipliers; all FFT twiddle certificates verified at $\epsilon_{\rm tw}\le1/4$ using the stated positive phase tolerance, phase precision range and finite recursion cap; no FFT, interval, or range failures; and the same $\tau_r,M_r,w_r,L_r$ used by the procedure.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the Schwartz Poisson-summation supplier used by the alias identity.

[F1] [[def-nufft-transform-types-and-mode-conventions]]: the exact type-1 matrix is $A_{k,j}=e^{-2\pi i k\cdot x_j}$ and type 2 is $A^*f$.

[F2] [[lem-nufft-gaussian-grid-alias-identity-and-bound]]: the full periodized-grid factorization has entrywise alias error at most $\alpha=\prod_r(1+2s_r/(1-s_r))-1$.

[F3] [[lem-nufft-gaussian-spread-truncation-tail]]: for each source column, deleting grid cells outside its product neighborhood removes at most $T_d$ of nonnegative kernel mass.

[F4] [[lem-nufft-gaussian-image-tail-bound]], [[thm-real-elementary-range-enclosures]], and [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: each finite image sum plus its symmetric remainder interval encloses the exact periodized kernel, and every finite interval operation preserves that enclosure.

[F5] [[thm-na-computed-unitary-radix-two-fft-error-bound]]: for a successful length-$2^q$ unitary FFT in the selected operationwise model, with $u\le1/16$ and every returned twiddle certificate checked to be at most $\epsilon_{\rm tw}\le1/4$, its normwise error factor is $\rho_q=(1+10u+\epsilon_{\rm tw})^q-1$; inverse mode has the same bound.

[F6] [[thm-finite-parseval-and-plancherel]]: every exact unitary finite DFT preserves the Euclidean $\ell_2$ norm; coordinate restriction cannot increase that norm.

[F7] [[alg-nufft-certified-gaussian-gridding-type1-type2]]: the type-1 centers are extracted at signed-mode slots $\kappa(k)=(k_r\bmod M_r)_r$ after the checked computed FFT, and their returned coordinate radii are upward sums $r_k=\operatorname{ru}(b_k+R_{\rm FFT})$, where $b_k$ encloses the computed scaling/deconvolution rectangle and $R_{\rm FFT}\ge\rho U/(\sqrt P\,d_{\min}^-)$. These radii enclose the exact deconvolution of that dyadic center grid; the separate grid-center contribution is bounded by $E_{\rm eval}/(\sqrt P\,d_{\min}^-)$.

[F8] [[thm-radix-two-fft-arithmetic-complexity]]: one radix-two transform of length $M_r=2^{q_r}$ uses $O(M_r\log_2M_r)$ arithmetic operations.

[F9] [[alg-nufft-certified-gaussian-gridding-type1-type2]], [[thm-outward-rounded-operations-are-isotone-and-dag-sound]], and [[thm-real-elementary-range-enclosures]]: on a successful candidate the reported $\epsilon_{\rm ana}$ is an outward upper bound for $A+T_d/(P d_{\min})$, and the type-1 $B_{\rm round}$ adds the finite interval/FFT radius to $E_{\rm eval}/(\sqrt P d_{\min}^-)$.

[F10] [[def-nufft-transform-types-and-mode-conventions]]: every $k\in\mathcal K$ satisfies $|k_r|\le K_r$.

[F11] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing and $\log 1=0$.

[F12] [[def-nufft-finite-array-norms]]: the finite-array norms are the displayed sums and maximum, with value zero on the empty index set.

[F13] [[alg-nufft-certified-gaussian-gridding-type1-type2]]: type 2 embeds each signed mode $k$ into the unique slot $\kappa(k)$, applies the checked inverse unitary FFT, and its output intervals enclose the exact finite conjugate-transpose factorization; the returned radius is the maximum coordinate radius.

[F14] [[def-real-elementary-functions-and-domains]]: $\pi=4\int_0^1(1+t^2)^{-1}\,dt\ge2>0$.

[F15] [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], and [[lem-nonnegative-square-root-exists-and-unique]]: for $\tau_r>0$ the factors $\sqrt{\tau_r}$ and $e^{-\pi\tau_rK_r^2}$ are positive, and $k_r^2\le K_r^2$ implies $e^{-\pi\tau_rk_r^2}\ge e^{-\pi\tau_rK_r^2}$; hence $d_k\ge d_{\min}>0$.

[F16] [[def-logarithm-to-a-base]]: $\log_2 x=\log x/\log 2$ for $x>0$.

[F17] [[alg-nufft-certified-gaussian-gridding-type1-type2]]: the empty-source branch returns exact zero type-1 output, empty type-2 output, and zero radii.

[F18] [[lem-nufft-finite-euclidean-norm-triangle]]: the counting Euclidean norm satisfies the triangle inequality.

[F19] [[def-matrix-product-and-identity-matrix]]: products of finite matrices have entries given by finite sums over their shared index set.

[F20] [[def-nufft-periodized-gaussian-gridding-kernel]]: every exact spread matrix entry is real, because the Gaussian kernel is a product of sums of real nonnegative exponential terms.

[F21] [[lem-complex-conjugation-and-modulus-laws]]: complex modulus is nonnegative and is multiplicative and satisfies the triangle inequality.

[F22] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: every grid Fourier phase has modulus one, hence $|Q_{k\ell}|=P^{-1}$.

[F23] [[lem-of-square-monotone]]: for nonnegative reals $a,b$, $a^2\le b^2$ implies $a\le b$.

## Proof

1.1 If $N=0$, [F17] and the finite sums in [F1] give exact zero type-1 output and an empty type-2 output; [F12] assigns zero to empty norms, so both error assertions hold with zero radii. For the remaining proof assume $N>0$. Let $S_\infty$ be the full spread matrix with entries $(S_\infty)_{\ell j}=\Phi_\tau(\ell_1/M_1-x_{j,1},\ldots,\ell_d/M_d-x_{j,d})$, and let $S$ keep only the entries in each source's product neighborhood. Define the mode-by-grid matrix $Q_{k\ell}=P^{-1}e^{-2\pi i\sum_rk_r\ell_r/M_r}$ and the diagonal mode matrix $D_{kk}=d_k$, with $D^{-1}_{kk}=1/d_k$ by the positive-multiplier premise. The products below use the finite matrix multiplication of [F19]. The normalized grid sum in [F2], applied to the unit source vector $e_j$, says that every entry of $D^{-1}QS_\infty-A$ has modulus at most $\alpha$. For each column $j$, [F3] bounds the sum of the nonnegative deleted entries by $T_d$; since $|Q_{k\ell}|=P^{-1}$, it follows that $|(Q(S_\infty-S))_{kj}|\le T_d/P$. By [F10], $|k_r|\le K_r$, and [F14]–[F15], $d_k\ge d_{\min}>0$, so $|(D^{-1}Q(S_\infty-S))_{kj}|\le T_d/(P d_{\min})$. Adding the two matrix differences gives $|(D^{-1}QS-A)_{kj}|\le\epsilon_0$ for every $k,j$. For each row, multiplication by $c$ and the complex modulus laws [F21] give $|((D^{-1}QS-A)c)_k|\le\epsilon_0\sum_j|c_j|$, hence $\|(D^{-1}QS-A)c\|_\infty\le\epsilon_0\|c\|_1$ by [F12]. Finally [F9] gives $\epsilon_0\le\epsilon_{\rm ana}$ for the returned outward bound. [A1, F1, F2, F3, F9, F10, F12, F14, F15, F17, F19, F21, F22, algebra]

2.1 Let $g=Sc$ be the exact truncated spread and $u$ the dyadic center grid computed by the algorithm. The finite image sums and symmetric remainder intervals enclose every exact kernel by [F4]; isotonicity of the outward DAG operations then gives $\|g-u\|_2\le E_{\rm eval}$, with norms as in [F12]. By [F18], the counting Euclidean norm has the triangle inequality. For coordinate axis $r$, regard its $P/M_r$ length-$M_r$ FFTs as one block-diagonal operator. Squaring and summing the linewise supplier bound [F5] gives a normwise error at most $\rho_r$ times the block input norm; the exact block transform is unitary by [F6]. If $x_r$ and $y_r$ are the computed and exact outputs after axes $1,\ldots,r$, the triangle inequality [F18], the local error bound and unitarity give $\|x_r\|_2\le(1+\rho_r)\|x_{r-1}\|_2$ and $\|x_r-y_r\|_2\le\|x_{r-1}-y_{r-1}\|_2+\rho_r\|x_{r-1}\|_2$. Starting with $x_0=y_0=u$ and iterating gives $\|x_d-y_d\|_2\le U\sum_{r=1}^d\rho_r\prod_{s<r}(1+\rho_s)=U(\prod_r(1+\rho_r)-1)=\rho U$. For each extracted coordinate, the FFT discrepancy has modulus at most $\rho U$, since a coordinate modulus is bounded by the Euclidean norm. The exact scaling by $P^{-1/2}$ and exact division by the mode multiplier therefore make its deconvolved discrepancy at most $\rho U/(\sqrt P\,d_k)\le\rho U/(\sqrt P\,d_{\min}^-)$, using [F15] and $0<d_{\min}^-\le d_{\min}\le d_k$. By [F4], the computed scaling/deconvolution rectangle encloses the exact scaling/deconvolution of the computed FFT coordinate, so its distance from the returned lower-left center is at most $b_k$. The algorithm forms $R_{\rm FFT}$ outward from the actual input norm bound and the verified call factors; [F7] and the complex triangle inequality [F21] then give distance at most $b_k+R_{\rm FFT}\le r_k$ from that center to the exact deconvolution of the dyadic center grid. This justifies the full containment claimed in [F7], including the previously omitted computed FFT error. To transfer the grid-center enclosure, define $U_P$ as the exact unitary DFT on the full rectangular grid and $R_\kappa$ as restriction to the slots $\kappa(k)$. Since $M_r>2K_r$, two modes in $[-K_r,K_r]$ with the same residue differ by a multiple of $M_r$ of magnitude less than $M_r$, hence are equal; coordinatewise, $\kappa$ is injective. The grid transform in step 1.1 is $Q=P^{-1/2}R_\kappa U_P$. For any finite array $z$, each $|z_k|^2$ is a nonnegative summand of $\sum_\ell|z_\ell|^2$, so [F12] and [F23] give $\|z\|_\infty\le\|z\|_2$. Parseval and contraction under coordinate restriction in [F6] then yield $\|Q(u-g)\|_\infty\le\|Q(u-g)\|_2\le E_{\rm eval}/\sqrt P$. By [F10], [F14] and [F15], each $d_k\ge d_{\min}$. Thus the additional deconvolution error is at most $E_{\rm eval}/(\sqrt P d_{\min})$. The algorithm defines $B_{\rm round}=\max_k r_k+E_{\rm eval}/(\sqrt P d_{\min}^-)$; using $d_{\min}^-\le d_{\min}$, taking the maximum returned $r_k$ and adding its grid-center term gives the asserted radius. [F4, F5, F6, F7, F9, F10, F12, F14, F15, F18, F21, F23, step 1.1, algebra]

3.1 By [F19], the finite gridding matrix is $\widetilde A=D^{-1}QS$. Step 1.1 bounds its analytic discrepancy by $\epsilon_{\rm ana}\|c\|_1$, and step 2.1 bounds the finite-arithmetic discrepancy from $\widetilde A c$ by $B_{\rm round}$. The coordinatewise complex triangle inequality [F21], followed by taking the finite maximum, gives $\|\widehat F-Ac\|_\infty\le\epsilon_{\rm ana}\|c\|_1+B_{\rm round}$, and [F1] identifies $Ac=F$. [F1, F9, F19, F21, step 1.1, step 2.1, algebra]

3.2 The type-2 exact finite matrix computed by the algorithm is $\widetilde A^*$. By [F19], $(\widetilde A)_{kj}=d_k^{-1}\sum_\ell Q_{k\ell}S_{\ell j}$. Since $d_k$ and $S_{\ell j}$ are real by [F14]–[F15] and [F20], conjugating this entry gives $d_k^{-1}\sum_\ell\overline{Q_{k\ell}}S_{\ell j}$; this is exactly the $(j,k)$ entry of $S^*Q^*D^{-1}$ by the same finite-product formula. In the slot notation of step 2.1, $Q^*=P^{-1/2}U_P^*R_\kappa^*$, where $R_\kappa^*$ embeds a mode vector into the grid slots $\kappa(k)$ and zero-fills every other slot; this is the inverse-FFT construction in step 4. Thus $\widetilde A^*=S^*Q^*D^{-1}$. Step 1.1 gives $|(\widetilde A-A)_{kj}|\le\epsilon_0$ for each entry, so the complex modulus laws [F21] give $|((\widetilde A^*-A^*)f)_j|\le\sum_{k\in\mathcal K}|(\widetilde A-A)_{kj}|\,|f_k|\le\epsilon_0\|f\|_1.$ It remains to bound the finite-arithmetic discrepancy. Let $v=D^{-1}f$ be the exact deconvolved mode vector and $v^c$ the dyadic centers of the component rectangles computed in step 4 of the algorithm. That step defines $E_f,V$ with $\|v-v^c\|_2\le E_f$ and $\|v^c\|_2\le V$ by [F12]–[F13]. The positive-sign computed unitary FFT has axis error factors $\rho_r$ and total $\rho=\prod_r(1+\rho_r)-1$; its bound is the same as the type-1 calculation in step 2.1 because [F5] gives the same factor for the conjugated inverse routine. Thus its computed center differs from the exact transform of the embedded $v^c$ by at most $\rho V$, since zero-fill embedding preserves the Euclidean norm. The exact unitary transform preserves the embedded input uncertainty norm by [F6], so [F18] bounds the computed FFT center's distance from the exact transform of embedded $v$ by $E_f+\rho V$. After scaling by $P^{-1/2}$, each used grid coordinate is therefore within $(E_f+\rho V)/\sqrt P$ of the exact $Q^*v$ coordinate. The algorithm encloses this discrepancy, evaluates every real spread-window coefficient with a finite image interval containing its exact value by [F4] and [F20], and applies only sound outward rectangle operations. Hence the final rectangle at source $j$ contains $(S^*Q^*D^{-1}f)_j=(\widetilde A^*f)_j$; its center has error at most its radius $r_j$. Taking the maximum over the finite output set gives $\|\widehat g-\widetilde A^*f\|_\infty\le B_{\rm round}^*$. Combining this finite bound with the displayed analytic entry estimate proves the type-2 claim, using [F12] for the finite norms. [F1, F4, F5, F6, F12, F13, F14, F15, F18, F19, F20, F21, step 1.1, step 2.1, algebra]

4.1 There are $P/M_r$ length-$M_r$ transforms on axis $r$, so [F8] gives $O(P\log_2M_r)$ work on that axis. Since $1\le M_r\le P$ and $2>1$, [F11] gives $\log2>\log1=0$. Formula [F16] therefore shows that $\log_2$ is increasing on positive arguments, hence $\log_2M_r\le\log_2P$; fixed $d$ gives $O(P\log P)$ over all axes. Each source contributes to at most $\prod_r(2w_r+1)$ retained grid cells. Evaluating its coordinatewise image sums costs at most a constant multiple of $\sum_r(2L_r+1)$ per retained product cell, and the mode deconvolution pass costs $O(|\mathcal K|)$; interval-series evaluator internals are excluded as stated. These counts yield the displayed bound. This analysis covers types 1 and 2 only; the type-3 frequency ranges require separate scaling and work estimates. [given, F8, F11, F16, algebra] ∎
