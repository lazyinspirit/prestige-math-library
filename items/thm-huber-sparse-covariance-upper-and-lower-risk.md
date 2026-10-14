---
id: thm-huber-sparse-covariance-upper-and-lower-risk
kind: theorem
title: "Single-block sparse Gaussian Huber covariance: high-probability upper and low-ratio lower bounds"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-block-sparse-covariance-class
  - def-matrix-depth-covariance-estimator
  - lem-measurable-matrix-depth-maximizer-selection
  - lem-huber-matrix-depth-estimator-operator-error
  - lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound
  - lem-huber-covariance-contamination-modulus-lower-bound
  - lem-huber-covariance-ambient-action-tail-lower-bound
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-binomial-coefficient
  - thm-binomial-closed-formula
  - def-factorial-and-falling-factorial
  - def-canonical-natural
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - def-finite-sum
  - lem-finite-sum-laws
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - thm-ftc-second-part
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - def-integer-power
  - lem-power-laws
  - lem-finite-set-has-max
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the Gaussian covariance model, Fano packing in the clean lower bound, and Huber mixture equalization in the ambient-action lower bound; the local comparison and block reduction add no choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Theorems 3.6, 3.7 and 5.1"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 7
---




## Statement

Assume AC. Fix $M>0$ and an integer $1\le s\le p/2$. Let $X_1,\ldots,X_n$ be
independent with common law $P_{\epsilon,\Sigma,Q}$ from
[[def-huber-covariance-model]], where $\Sigma\in\mathcal F_{p,s}(M)$ and
$Q$ is arbitrary. If $0\le\epsilon<1/5$, $0<\delta<1/2$, and
$$C_1\frac{s\log(ep/s)+\log(1/\delta)}n<1$$
for sufficiently large universal $C_1$, then every Borel measurable restricted matrix-depth estimator, from either the global single-block correspondence or the bounded-class correspondence,
$\widehat\Sigma=\widehat\Gamma/\beta$ satisfies
$$\|\widehat\Sigma-\Sigma\|_{\rm op}^2 \le C_M\left[\left(\frac{s\log(ep/s)}n\vee\epsilon^2\right) +\frac{\log(1/\delta)}n\right]$$
with probability at least $1-2\delta$, uniformly over $Q$ and
$\Sigma\in\mathcal F_{p,s}(M)$.

Such Borel maximizing selectors exist by [[lem-measurable-matrix-depth-maximizer-selection]].

There are constants $c_M,c_M',c_1>0$ such that whenever
$s\log(ep/s)/n\le c_1$, for every $0\le\epsilon\le1$,
$$\inf_{\widetilde\Sigma}\sup_{\Sigma\in\mathcal F_{p,s}(M)}\sup_Q P_{\epsilon,\Sigma,Q}^{\otimes n}\!\left\{ \|\widetilde\Sigma-\Sigma\|_{\rm op}^2 \ge c_M\left(\frac{s\log(ep/s)}n\vee\epsilon^2\right)\right\}\ge c_M'.$$
The constants may depend on $M$. The class is one common correlated block,
not a row-sparsity class. The infimum is over all Borel maps
$(\mathbb R^p)^n\to\mathbb R^{p\times p}$.

## Facts & Assumptions

**Given:** AC, $1\le s\le p/2$, $\Sigma\in\mathcal F_{p,s}(M)$, the Gaussian Huber model, and the stated confidence and sample-size restrictions.

[F1] [[lem-huber-matrix-depth-estimator-operator-error]] gives the directional error bound over a union of coordinate spheres, for a Borel statistic satisfying the empirical-depth comparison.

[F2] [[lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound]] gives, under AC, the clean tail-risk lower bound of order $s\log(ep/s)/n$ when its sample-size condition holds.

[F3] [[lem-huber-covariance-contamination-modulus-lower-bound]] gives $\omega(\epsilon,\mathcal F_{p,s}(M))\ge d_M\epsilon^2$.

[F4] [[lem-huber-covariance-ambient-action-tail-lower-bound]]: under AC, a clean tail-risk lower bound for all matrix-valued estimators and a finite contamination modulus give the Huber lower bound at threshold $\frac1{16}(M_0\vee\omega)$, for the same unrestricted action space.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: for real symmetric $A$, $\|A\|_{\rm op}=\sup_{\|u\|_2=1}|u^TAu|$.

[F6] [[def-block-sparse-covariance-class]]: off-diagonal support lies in one common coordinate block of size at most $s$, and the operator norm is bounded by $M$.

[F8] [[def-binomial-coefficient]], [[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: identifying naturals with their real embeddings, for integers $1\le k\le p$, $\binom pk=p^{\underline k}/k!$ and $p^{\underline k}=p(p-1)\cdots(p-k+1)$.

[F9] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-algebra-of-derivatives]], [[thm-ftc-second-part]], [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[def-integer-power]], and [[lem-power-laws]]: $\log$ is increasing, $\log e=1$, and the integral of $\log x$ on $[1,k]$ is $k\log k-k+1$ by the antiderivative $x\log x-x$.

[F10] [[lem-finite-set-has-max]]: a nonempty finite set of real numbers has a maximum; applying this to the absolute diagonal entries gives a coordinate attaining their largest absolute value.

[F7] [[lem-measurable-matrix-depth-maximizer-selection]] supplies Borel maximizers for the global and bounded-class correspondences. A global maximizer dominates $\beta\Sigma$ in depth; in the bounded case $\beta\Sigma$ belongs to the search class by the target spectrum bound.

## Proof

1.1 By [F7], Borel maximizers exist in both versions and satisfy [F1]'s empirical-depth comparison. Put $k=2s$ and $m=\binom pk$. By [F8], $m\le p^k/k!$. Since $\log x\le\log j$ for $x\in[j-1,j]$ and $2\le j\le k$, summing over these intervals and using [F9] gives $\log k!=\sum_{j=2}^k\log j\ge\int_1^k\log x\,dx=k\log k-k+1\ge k\log k-k$. Exponentiating with [F9] yields $k!\ge(k/e)^k$, hence $m\le(ep/k)^k$ and $\log m\le2s\log(ep/(2s))\le2s\log(ep/s)$. Enumerate the coordinate sets of size $2s$ and take $U=U_s$, $r=2s$ in [F1]. If $A=\widehat\Sigma-\Sigma$, choose blocks of size at most $s$ supporting the off-diagonal entries of its two summands, and let $T$ be their union. Then $|T|\le2s$, entries between $T$ and $T^c$ vanish, and the block on $T^c$ is diagonal. Thus $A$ is block diagonal on $\mathbb R^T\oplus\mathbb R^{T^c}$, with symmetric block $A_T$ and diagonal block $D$ on $T^c$. Its operator norm is the larger block norm: for $x=x_T+x_{T^c}$, $\|Ax\|_2^2$ is the sum of the squared norms of the two block outputs, and a norm-maximizing vector in either nonempty finite-dimensional block attains its block norm. If $T\ne\varnothing$ and either $T^c=\varnothing$ or $\|A_T\|_{\rm op}\ge\|D\|_{\rm op}$, [F5] gives a unit eigenvector attaining $\|A_T\|_{\rm op}$, supported in $T$. If $T=\varnothing$ and $\|D\|_{\rm op}=0$, then $A=0$, and any coordinate unit vector belongs to $U_s$ because $p\ge2s$; it attains $\|A\|_{\rm op}=0$. In every remaining case $T^c\ne\varnothing$ and $\|D\|_{\rm op}>\|A_T\|_{\rm op}$ (with the empty-block norm set to zero). Write $D=\operatorname{diag}(d_i:i\in T^c)$. By [F10] choose $j\in T^c$ with $|d_j|=\max_{i\in T^c}|d_i|$. For every unit $x\in\mathbb R^{T^c}$, $|x^TDx|=|\sum_i d_ix_i^2|\le\max_i|d_i|\sum_i x_i^2=|d_j|$, and the coordinate vector $e_j$ attains equality. By [F5], $e_j$ therefore attains $\|D\|_{\rm op}$. In either case some unit vector attaining $\|A\|_{\rm op}$ has support of size at most $2s$. Since $p\ge2s$, its support extends to a set of size exactly $2s$, so the vector belongs to $U_s$. Conversely every unit vector in $U_s$ is among all unit vectors, hence $\|A\|_{\rm op}=\sup_{u\in U_s}|u^TAu|$ by [F5]. Finally, $$2s+\log(m/\delta)\le4s\log(ep/s)+\log(1/\delta) \le4\bigl(s\log(ep/s)+\log(1/\delta)\bigr).$$ Squaring [F1]'s bound proves the displayed upper rate after adjusting $C_M$. [F1, F5, F6, F7, F8, F9, F10, algebra]

1.2 By [F2], the clean lower premise holds at $M_0=b_Ms\log(ep/s)/n$ for sufficiently small $s\log(ep/s)/n$, with a fixed positive probability $b_0$. By [F3], the contamination modulus is at least $d_M\epsilon^2$. It is finite because $\|\Sigma_0-\Sigma_1\|_{\rm op}^2\le4M^2$ for all pairs in the bounded class. [F2, F3, F6, algebra]

2.1 Apply [F4] with these clean and modulus bounds and the unrestricted matrix-valued estimator class in the Statement. Its threshold $\frac1{16}(M_0\vee\omega)$ is at least a constant multiple of $s\log(ep/s)/n\vee\epsilon^2$, and the probability lower bound is $\min(b_0,1/2)$. Lowering the threshold only enlarges the event, which proves the lower assertion for the event probabilities in the Statement. [F2, F3, F4, step 1.2, algebra] ∎
## Authoring status

The lower proof uses the current batch-17 and batch-31 supplier bodies. The local measurable-selection proof discharges the selector-existence obligation for both global and bounded-class matrix-depth versions.
