---
id: ex-s4-filter-cost-excludes-training
kind: example
title: The filter-operation bound is not a training-cost bound
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [thm-s4-convolution-filter-complexity, alg-s4-state-space-recurrence-and-convolution]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §3.3 and Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Example

Assume $N,r,L\ge1$ with fixed $r$, $A=\Lambda-PQ^*$ for diagonal $\Lambda\in\mathbb C^{N\times N}$ and $P,Q\in\mathbb C^{N\times r}$, $B,C\in\mathbb C^N$, and $\Delta>0$. Let $G=I-\Delta A/2$ be invertible, let $M$ be the least power of two at least $L$, set $\bar A=G^{-1}(I+\Delta A/2)$ and $\bar B=G^{-1}\Delta B$, and supply $\widetilde C_M=(I-\bar A^M)^*C$. Assume the root-grid diagonal resolvents $R(z)=(a(1-z)/(1+z)I-\Lambda)^{-1}$ and corrections $I_r+Q^*R(z)P$ are invertible for every $M$th root $z\ne-1$, where $a=2/\Delta$; the value at $-1$, when that root occurs, is handled by its finite formula. In the exact complex arithmetic model, each scalar addition, multiplication, division, and zero test has unit cost, and the filter cost counts evaluation from the supplied $\widetilde C_M$, not its formation. A nonzero direct input-to-output term is separate from the kernel.

For numerical evaluation, at each root $z\ne-1$ put $\beta(z)=(1+z)/2$ and $\mathcal D(z)=2R(z)/(1+z)$, and define $x=\widetilde C_M^*\mathcal D B$, $u=\widetilde C_M^*\mathcal D P$, $v=Q^*\mathcal D B$, $T=Q^*\mathcal D P$, and $W=I_r+\beta T$. Matrix infinity norm is maximum absolute row sum, and for a column it is maximum absolute entry. Suppose certified constants $b,w,s\ge1$ bound $|x|,\|u\|_\infty,\|v\|_\infty,\|T\|_\infty$ by $b$ and $\|W^{-1}\|_\infty$ by $w$ over these roots. For every scalar Cauchy sum used for a scaled block, supply a certified pole/root separation $d>0$ and a weight bound $A_{\rm wt}\ge\sum_j|a_j|$ with $A_{\rm wt}/d\le s$; also supply the exact index partition $\lambda_j=-a$ or $\lambda_j\ne-a$ so the exceptional constant terms are selected, and form the finite constants and the $-1$ value separately. Empty Cauchy sums need no separation certificate. Put $\kappa=64r w^2(b+1)^2s$.

For $0<\varepsilon\le1/2$, assume variable-precision scalar arithmetic with unrestricted exponent range, certified input, root and arc-center approximations, certified enclosures sufficient for the geometric routing decisions, and the finite rational-circuit precision certificate. Explicitly, for the selected finite circuit let $T_0$ bound its arithmetic gates, $V_0\ge1$ bound exact intermediate moduli, and $0<D_0\le1$ bound below every exact divisor modulus; with $K_0=64(V_0+1)^2/D_0^2$, choose $u\le\min(1,D_0/2,\varepsilon/2)/(2K_0^{T_0+1})$. Each supplied input/constant approximation and each scalar arithmetic operation has absolute error at most $u$; each scalar operation and word access has unit cost. Precision and word lengths may depend on the input separation, correction conditioning, intermediate magnitudes and target accuracy. The operation and word counts exclude bit cost, computing the supplied certificates, and forming $\widetilde C_M$.

For the stated DPLR data, the length-$L$ kernel is $K_L=(C^*\bar A^j\bar B)_{j=0}^{L-1}$. From the supplied $\widetilde C_M$, the exact filter procedure evaluates it using at most $(r+1)^2$ roots-of-unity Cauchy products, $O((N+L)\log^2(2+N+L))$ exact complex arithmetic operations, and $O(N+L)$ working space. Under the numerical hypotheses above, for $0<\varepsilon\le1/2$ it returns $\widehat K_L$ with $\|\widehat K_L-K_L\|_\infty\le\varepsilon$ using $O((N+L)\log(2+N+L)\log(\kappa/\varepsilon))$ scalar operations and $O(N+L)$ scalar words; bounded-$\kappa$ families have the factor $\log(1/\varepsilon)$. These evaluation counts exclude forming $\widetilde C_M$, computing the supplied certificates, and bit cost. The filter procedure does not compute parameter gradients or optimizer updates, so its count is not a bound for a complete training step. Neither the exact arithmetic count nor the conditional numerical guarantee supplies a fixed-word bound or an empirical long-context accuracy guarantee.

## Example references

[[thm-s4-convolution-filter-complexity]]

[[alg-s4-state-space-recurrence-and-convolution]]

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §3.3 and Appendix C.3](https://arxiv.org/pdf/2111.00396)

## Facts & Assumptions

**Given:** Fixed DPLR parameters, a supplied transformed output vector, and the exact and certified numerical hypotheses in the Example.

[F1] [[thm-s4-convolution-filter-complexity]]: the exact operation and working-space bounds count evaluation of the filter from supplied $\widetilde C_M$; numerical absolute error $\varepsilon$ is proved with explicit separation, correction conditioning and variable precision, and a $\log(\kappa/\varepsilon)$ factor that reduces to $\log(1/\varepsilon)$ on bounded-$\kappa$ families.

[F2] [[alg-s4-state-space-recurrence-and-convolution]]: the filter procedure takes DPLR parameters and $\widetilde C_M$ and returns the first $L$ kernel coefficients after root evaluation and an inverse transform.

## Proof

1.1 The procedure in [F2] receives parameters and returns a kernel. By [F1], the proved exact operation and space bounds count that filter-evaluation procedure with $\widetilde C_M$ supplied. [given, F1, F2]

2.1 The procedure's input/output specification in [F2] contains no parameter-gradient computation or optimizer update. Therefore its operation count does not count a larger computation that additionally performs either operation, including a complete training step. [F2, step 1.1, algebra]

3.1 The exact bound counts arithmetic operations and working space only. The separate numerical guarantee in [F1] specifies its absolute error, conditioning factor and variable-precision scalar model; it requires its own certified hypotheses. Its scalar-operation and word-space counts do not bound bit cost or guarantee a fixed word length, and neither cost theorem asserts empirical long-context accuracy. These additional conclusions therefore do not follow from the filter bounds. [F1, step 1.1, algebra] ∎
