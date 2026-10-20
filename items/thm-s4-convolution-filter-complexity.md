---
id: thm-s4-convolution-filter-complexity
kind: theorem
title: S4 convolution-filter arithmetic and numerical cost
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-s4-dplr-parameterization, alg-s4-state-space-recurrence-and-convolution, thm-hippo-leg-matrices-have-low-rank-structure, lem-roots-of-unity-fft-complexity, thm-cauchy-matvec-at-roots-of-unity-exact-cost, thm-cauchy-root-grid-matvec-numerical-cost, lem-s4-convolution-root-of-unity-reduction]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Theorem 3 and Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §§3.3, 6.1–6.4, 7.1"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Statement

Let $N,r,L\ge1$, let $r$ be fixed, and let $A=\Lambda-PQ^*$ with diagonal $\Lambda\in\mathbb C^{N\times N}$, $P,Q\in\mathbb C^{N\times r}$, and $B,C\in\mathbb C^N$, where $^*$ denotes conjugate transpose. Let $\Delta>0$, assume $I-\Delta A/2$ is invertible, and choose $M$ to be the least power of two with $M\ge L$. For the length-$M$ filter procedure, take the transformed output vector $\widetilde C_M=(I-\bar A^M)^*C$ as supplied input, where $\bar A=(I-\Delta A/2)^{-1}(I+\Delta A/2)$. Assume that every root-grid diagonal resolvent and low-rank correction used by the procedure is invertible. In the exact complex arithmetic model, each scalar addition, multiplication, division, and zero test has unit cost. The length-$L$ filter is $K_L=(C^*\bar A^j\bar B)_{j=0}^{L-1}$. The procedure returns the first $L$ coefficients of this filter using at most $(r+1)^2$ roots-of-unity Cauchy products, $O((N+L)\log^2(2+N+L))$ operations, and $O(N+L)$ working space. The operation count is for filter evaluation from $\widetilde C_M$; it does not include forming that vector from $C$. This bound applies in particular when the fixed matrices $G^S,G^T,G^L$ of the HiPPO low-rank theorem are used as time-independent state matrices, in their specified equivalent DPLR coordinates and subject to the same invertibility hypotheses. For LegS this means using the constant coefficient matrix $G^S$; it does not assert a convolution representation for the original time-dependent LegS dynamics with coefficient $G^S/t$.

For numerical evaluation, put $a=2/\Delta$, $\beta(z)=(1+z)/2$, and $D(z)=2R(z)/(1+z)$ at roots $z\ne-1$, where $R(z)=(a(1-z)/(1+z)I-\Lambda)^{-1}$. Define the scaled blocks $x=\widetilde C_M^*DB$, $u=\widetilde C_M^*DP$, $v=Q^*DB$, $T=Q^*DP$, and $W=I_r+\beta T$. Matrix infinity norm means maximum absolute row sum; for a column it is maximum absolute entry. Suppose certified constants $b,w,s\ge1$ bound, over these roots, $|x|,\|u\|_\infty,\|v\|_\infty,\|T\|_\infty$ by $b$, and $\|W^{-1}\|_\infty$ by $w$. For each scalar scaled-block Cauchy sum, require a certified pole/root separation $d>0$ and a weight bound $A\ge\sum_j|a_j|$ with $A/d\le s$; the finite constant contributions from $\lambda_j=-a$ and the direct value at $-1$ are formed separately. Empty sums need no separation certificate. Set $\kappa=64r w^2(b+1)^2s$.

For $0<\varepsilon\le1/2$, a numerical implementation returns $\widehat K_L$ with $\|\widehat K_L-K_L\|_\infty\le\varepsilon$ using $O((N+L)\log(2+N+L)\log(\kappa/\varepsilon))$ scalar operations and $O(N+L)$ scalar words. On families with bounded $\kappa$, this is $O((N+L)\log(2+N+L)\log(1/\varepsilon))$. The numerical model uses variable-precision scalar operations, unrestricted exponent range and supplied certified input/root approximations; each operation and word access has unit cost. Word lengths and sufficient precision depend on separation, correction conditioning, intermediate magnitudes and accuracy. The finite circuit precision certificate in the proof is required; these counts exclude bit cost, computing certificates, and forming $\widetilde C_M$. They imply no complete training-cost or long-context-accuracy bound.

The numerical procedure also receives the exact index partition $\{j:\lambda_j=-a\}$ and $\{j:\lambda_j\ne-a\}$, where $a=2/\Delta$, so it can select the exceptional constant terms without a finite-precision equality test.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Theorem 3 and Appendix C.3](https://arxiv.org/pdf/2111.00396)

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §§3.3, 6.1–6.4, 7.1](https://arxiv.org/pdf/1506.02285)

[[thm-hippo-leg-matrices-have-low-rank-structure]]

[[lem-s4-convolution-root-of-unity-reduction]]

[[thm-cauchy-matvec-at-roots-of-unity-exact-cost]]

[[thm-cauchy-root-grid-matvec-numerical-cost]]

[[lem-roots-of-unity-fft-complexity]]

## Facts & Assumptions

**Given:** The finite DPLR parameters, fixed rank, $L\ge1$, $M$ the least power of two at least $L$, the supplied transformed output vector, and the bilinear and root-grid invertibility hypotheses and, for the numerical procedure, the supplied exact partition of diagonal entries equal to $-2/\Delta$ and those unequal to it.

[F1] [[alg-s4-state-space-recurrence-and-convolution]]: with supplied $\widetilde C_M$, the filter procedure evaluates the truncated generating function at the $M$th roots, handles $z=-1$ by its finite value, applies the inverse radix-two transform, and returns the first $L$ coefficients.

[F2] [[lem-s4-convolution-root-of-unity-reduction]]: each root value is given by the DPLR resolvent formula, the $z=-1$ value is $(\Delta/2)\widetilde C_M^*B$, and the four matrix-vector families reduce to $(r+1)^2$ scalar Cauchy products.

[F3] [[thm-cauchy-matvec-at-roots-of-unity-exact-cost]]: for $n\ge1$ poles and an $M$-root grid with no collisions, the exact Cauchy product costs $O((n+M)\log^2(2+n+M))$ operations and $O(n+M)$ space.

[F4] [[lem-roots-of-unity-fft-complexity]]: the radix-two DFT and inverse cost $O(M\log(2+M))$ operations and $O(M)$ space, and inverse transformation recovers the polynomial coefficients exactly.

[F5] [[thm-hippo-leg-matrices-have-low-rank-structure]]: the fixed LegS coefficient matrix and the LegT and LagT generators, after the specified state-coordinate changes, admit DPLR form with rank at most two. The original LegS coefficient ODE has the additional time-dependent factor $1/t$.

[F6] [[thm-cauchy-root-grid-matvec-numerical-cost]]: a root-grid Cauchy sum with certified scale $s$ has absolute error $\delta$ in $O((N+M)\log(2+M)\log(s/\delta))$ scalar operations and linear word space. Its arc-tree truncation and variable-precision circuit estimates are proved locally, including root/input approximation errors and certified routing.



## Proof

1.1 By [F5], each fixed matrix $G^S,G^T,G^L$ admits equivalent DPLR coordinates of bounded rank. When such a matrix is used as a constant state matrix and satisfies the stated invertibility hypotheses, it is an admissible input here. This does not identify the original time-dependent LegS ODE with a constant-matrix model. The operation argument applies to any supplied DPLR matrices of the same dimensions. By [F2], each required root value has the stated Cauchy-product expression, including the direct value at $-1$. Under the noncollision and correction-invertibility assumptions, the filter procedure in [F1] therefore computes all $M$ generating values exactly. [given, F1, F2, F5]

1.2 For $z\ne-1$, $R=\beta D$. Substitution in [F2] gives $H_M(z)=x-\beta u(I_r+\beta T)^{-1}v$ and $W=I_r+\beta T$. Also $|\beta|\le1$. The pole mapping in [F2] expresses each entry of $D$ as $-2/(a+\lambda_j)(z-\mu_j)^{-1}$ for $\lambda_j\ne-a$, and as the constant $\Delta/2$ otherwise. Thus the weights in [F6] are exactly $-2\overline{f_j}g_j/(a+\lambda_j)$ for the applicable vector pair $f,g$. Their preparation and the exceptional constant sums cost $O(N)$ for fixed $r$. At $-1$, retain the direct value $(\Delta/2)\widetilde C_M^*B$ from [F2], without a resolvent division. [given, F2, F6, algebra]

2.1 Each scalar product has at most $N$ poles and is evaluated on $M$ roots. If it has at least one pole, [F3] bounds its cost by $O((N+M)\log^2(2+N+M))$ operations and $O(N+M)$ space; if it has no poles, its constant value is formed by a single finite sum in $O(N+M)$ operations and space. There are at most $(r+1)^2$ such products by [F2], a constant number because $r$ is fixed. The per-root correction matrix products and inversions cost $O(M(r+1)^3)$ operations by finite-dimensional elimination, which is $O(M)$ for fixed $r$. [given, F2, F3, step 1.1, algebra]

2.2 The generating values are the DFT of the $M$ coefficients $C^*\bar A^j\bar B$ for $0\le j<M$. By [F4], the inverse radix-two transform recovers these coefficients exactly; [F1] then returns their first $L$ entries, which are precisely the length-$L$ filter. [F1, F4, step 1.1, algebra]

2.3 Let $\delta=\varepsilon/[32r w^2(b+1)^2]$ and first consider exact arithmetic on truncated Cauchy sums having scalar entry errors at most $\delta$, with finite constant sums exact. Denote the resulting blocks by $\widehat x,\widehat u,\widehat v,\widehat T$. Each of their infinity-norm errors is at most $e=r\delta$, since each row has at most $r$ entries and $r\ge1$. Hence $\|\widehat W-W\|_\infty\le e$, $we<1/2$ and $e\le1$. Writing $E=W^{-1}(\widehat W-W)$, the geometric series $\sum_{j\ge0}(-E)^j$ converges in infinity norm because $\|E\|_\infty\le we<1/2$, is the inverse of $I+E$ by finite geometric identities and passage to the norm limit, and has norm at most $2$. Therefore $\|\widehat W^{-1}\|_\infty\le2w$. The identity $\widehat W^{-1}-W^{-1}=-W^{-1}(\widehat W-W)\widehat W^{-1}$ gives $\|\widehat W^{-1}-W^{-1}\|_\infty\le2w^2e$. [given, step 1.2, algebra]

3.1 Since $M$ is the least power of two at least $L$, $M<2L$ for every integer $L\ge1$. Combining the Cauchy products, per-root corrections, and inverse transform gives $O((N+L)\log^2(2+N+L))$ exact complex arithmetic operations. Processing the Cauchy products sequentially uses $O(N)$ product-tree workspace; their $(r+1)^2$ root-value arrays, the correction matrices, and the inverse transform use $O(M(r+1)^2)$ additional space. Fixed $r$ and $M<2L$ give total $O(N+L)$ working space. The proof counts the supplied $\widetilde C_M$ as input and does not count its formation from $C$. [given, F1, F2, F3, F4, step 2.1, step 2.2, algebra]

3.2 Expanding the difference of the two triple products as $(\widehat u-u)\widehat W^{-1}\widehat v+u(\widehat W^{-1}-W^{-1})\widehat v+uW^{-1}(\widehat v-v)$ and using step 2.3 bounds its modulus by $2we(b+1)+2bw^2e(b+1)+bwe$. Adding the error in $x$ and using $|\beta|\le1$ bounds each generating-value error by $e[1+2w(b+1)+2bw^2(b+1)+bw]\le9w^2(b+1)^2e\le9\varepsilon/32$. The direct $-1$ value has no truncation error. The exact inverse DFT averages $M$ unit-modulus multiples in each output coordinate, so its infinity operator norm is at most one; consequently the exact inverse transform of these approximations has coefficient error at most $9\varepsilon/32$. [given, F4, step 1.2, step 2.3, algebra]

4.1 Apply [F6] with absolute tolerance $\delta$ to each scalar sum; its exact truncated circuit has error at most $\delta$, as required above. Although [F6] is stated on $\zeta_j=e^{2\pi i j/M}$, the filter grid is $z_k=e^{-2\pi i k/M}=\zeta_{(-k\bmod M)}$; run each numerical Cauchy product on the positive grid and permute its outputs to the filter order, in $O(M)$ operations and words, preserving the maximum error and pole/root separation bounds. It uses $p=O(\log(s/\delta))=O(\log(\kappa/\varepsilon))$ terms. There are at most $(r+1)^2$ sums, processed sequentially; their arrays and the fixed-size blocks use $O(N+M)$ words. The per-root inverses can be computed by the adjugate/determinant formula, which is constant work for fixed $r$ and has nonzero determinants by step 2.3. Add the radix-two inverse transform and finite sums: the scalar count is $O((N+M)\log(2+N+M)\log(\kappa/\varepsilon))$. The replacement $M<2L$ gives the stated count and space. [given, F2, F4, F6, step 3.1, step 2.3, algebra]

5.1 To include every rounding error, regard the entire selected computation, from supplied DPLR parameters, transformed vector and root/arc constants through weight formation, Cauchy sums, finite constants, adjugate inverses and inverse FFT, as one finite rational circuit. Include conjugations as exact sign changes. Require certified $T_0,V_0,D_0$ with $T_0$ an upper bound on its gates, $V_0\ge1$ an upper bound on exact intermediate moduli, and $0<D_0\le1$ a lower bound on every exact divisor modulus. Such bounds exist for each input because step 2.3 proves all truncated correction inverses exist and all other divisions are nonzero by the hypotheses. Put $K_0=64(V_0+1)^2/D_0^2$ and select input and gate accuracy $u\le\min(1,D_0/2,\varepsilon/2)/(2K_0^{T_0+1})$, also sufficient for the certified overlapping routing tests of [F6]. The gate recurrence proved in [F6] then gives final additional error at most $\varepsilon/2$, including errors in supplied parameters, roots, weights, $\beta$, correction inverses and twiddle factors. Together with step 3.2 this is less than $\varepsilon$. No precision selection changes the scalar count or scalar-word count, although their bit cost can grow. Bounded $\kappa$ gives $\log(\kappa/\varepsilon)=O(\log(1/\varepsilon))$; arbitrary conditioning retains the explicit $\kappa$ term. [given, F6, step 2.3, step 3.2, step 4.1, algebra] ∎

## Remarks

S4 Appendix C.3, Proposition 5 reports $O((N+L)\log(N+L)\log(1/\varepsilon))$ numerical operations and linear space, without specifying the accuracy norm, word length or conditioning margins. The theorem above preserves that numerical asymptotic on explicitly bounded-conditioning families and gives an absolute-error bound with the conditioning factor exposed for general certified inputs. It does not assert a uniform fixed-precision or bit-complexity interpretation of the reported claim. Arbitrarily near pole/root collisions require growing input precision; nearly singular Woodbury corrections amplify block errors. Neither qualification concerns training or empirical long-context performance.
