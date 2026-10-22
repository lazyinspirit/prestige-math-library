---
id: lem-diagonal-strip-cauchy-riemann-fredholm-index
kind: lemma
title: "The Fredholm index of a strip operator with real diagonal limits"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - lem-transverse-linear-strip-cauchy-riemann-isomorphism
  - lem-variable-zero-order-strip-cauchy-riemann-fredholm
proof_strategy: direct
axiom_use: "Countable Choice only, through the stated Hilbert strip suppliers and their orthogonal-projection/parametrix proofs. No general Banach Fredholm-index theorem or stronger choice principle is imported."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2, printed pp.20–22"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §4.1, printed pp.972–974"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. Let $m\ge1$ and $0<\theta_j<\pi$. Let $X=H^1_\theta$ be the real Hilbert completion, in the norm $(\|u\|_2^2+\|u_s\|_2^2+\|u_t\|_2^2)^{1/2}$, of smooth maps on $\mathbb R_s\times[0,1]_t$ compactly supported in $s$ and satisfying $u(s,0)\in\mathbb R^m$, $u(s,1)\in\prod_j e^{i\theta_j}\mathbb R$. Put $Y=L^2(\mathbb R\times[0,1];\mathbb C^m)$, regarded as a real Hilbert space. Suppose $B(s,t)$ is an essentially bounded measurable real linear endomorphism and has real diagonal limits $B_\pm=\operatorname{diag}(b_{\pm,j})$ uniformly in essential supremum as $s\to\pm\infty$, with $\theta_j-b_{\pm,j}\notin\pi\mathbb Z$. Then the bounded Fredholm operator
$$T=\partial_s+i\partial_t+B:X\longrightarrow Y$$
has real index
$$\operatorname{ind}_{\mathbb R}T=\sum_{j=1}^m\left(\left\lfloor\frac{\theta_j-b_{-,j}}\pi\right\rfloor-\left\lfloor\frac{\theta_j-b_{+,j}}\pi\right\rfloor\right).$$
For the diagonal step function $B^0(s)=B_-$ for $s<0$ and $B_+$ for $s\ge0$, the kernel has one real generator for every $(j,n)\in\{1,\ldots,m\}\times\mathbb Z$ with $\lambda_{-,j,n}<0<\lambda_{+,j,n}$, and the cokernel has one for every pair with $\lambda_{-,j,n}>0>\lambda_{+,j,n}$, where $\lambda_{\pm,j,n}=\pi n-\theta_j+b_{\pm,j}$.

The same index holds on the two-sided weighted spaces $X_\delta=\{u:e^{\delta|s|}u\in X\}$ and $Y_\delta=\{f:e^{\delta|s|}f\in Y\}$ whenever $0\le\delta<\min_{j,\pm,n}|\lambda_{\pm,j,n}|$. This is an index theorem for this specified strip operator and product-line domain; it does not identify the pullback operator of a general geometric strip or assert a Heegaard-domain Maslov formula.

## Statement references

[[def-countable-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]

[[lem-variable-zero-order-strip-cauchy-riemann-fredholm]]

## Facts & Assumptions

**Given:** Countable Choice, $X,Y,B,B_\pm,\theta_j$ and the nonzero limiting eigenvalues in the Statement.

[F1] The real modes $e_{j,n}(t)=e^{-i(\pi n-\theta_j)t}$ give a complete orthonormal basis in each complex component viewed as a real $L^2([0,1])$ space. They identify $X$ with real coefficient families of finite norm $\sum_{j,n}(\|a'_{j,n}\|_2^2+(1+(\pi n-\theta_j)^2)\|a_{j,n}\|_2^2)$, and $D=\partial_s+i\partial_t$ acts as $a'_{j,n}+(\pi n-\theta_j)a_{j,n}$ ([[lem-transverse-linear-strip-cauchy-riemann-isomorphism]], complete modal proof).

[F2] Each operator satisfying the hypotheses on $B$ is Fredholm, has parametrices with norm limits of finite-rank errors, and satisfies a lower bound $\|Tv\|\ge c_T\|v\|_X$ on $(\ker T)^\perp$. Its proof constructs orthogonal projections onto closed Hilbert subspaces and proves this lower bound under Countable Choice ([[lem-variable-zero-order-strip-cauchy-riemann-fredholm]], parametrix and closed-range proof).

[F3] The real Fredholm index is $\dim_{\mathbb R}\ker T-\dim_{\mathbb R}(Y/\operatorname{ran}T)$ ([[def-fredholm-operator-cokernel-and-index]]).

## Proof

1.1 **A local index calculation for perturbations.** Fix any operator $A:X\to Y$ in [F2]. Write $K=\ker A$, $Z=K^\perp$, $R=\operatorname{ran}A$ and $C=R^\perp$. These orthogonal decompositions exist under the choice hypothesis by [F2]; $K,C$ are finite dimensional. The restriction $A_Z:Z\to R$ is bijective: subtracting the kernel projection from a preimage proves surjectivity, and injectivity follows from $Z\cap K=0$. The bound in [F2] makes its inverse bounded, with norm at most $c_A^{-1}$. For a bounded perturbation $E:X\to Y$ of norm less than $c_A$, order the source as $Z\oplus K$ and target as $R\oplus C$. The first block $L=A_Z+E_{RZ}$ is invertible by the norm-convergent Neumann series for $1+A_Z^{-1}E_{RZ}$. The full matrix is $\begin{pmatrix}L&E_{RK}\\E_{CZ}&E_{CK}\end{pmatrix}$. The invertible source change $(z,k)\mapsto(z+L^{-1}E_{RK}k,k)$ and target change $(r,c)\mapsto(r,c-E_{CZ}L^{-1}r)$ reduce it to $\operatorname{diag}(L,F)$, where $F=E_{CK}-E_{CZ}L^{-1}E_{RK}:K\to C$. Its kernel and cokernel are those of this finite-dimensional $F$. Rank-nullity gives $\dim\ker F-\dim(C/\operatorname{ran}F)=\dim K-\dim C$. Thus every sufficiently small bounded perturbation has the same index as $A$, with an explicit finite-dimensional proof. [F2, F3, given, construct, algebra]

1.2 **The step operator's kernel.** For the diagonal step operator $D+B^0$ from the Statement, [F1] diagonalizes the operator on the real modes. Put $\lambda_- =\pi n-\theta_j+b_{-,j}$ and $\lambda_+=\pi n-\theta_j+b_{+,j}$ for one mode. A weak solution of $a'+\lambda(s)a=0$ equals $c e^{-\lambda_-s}$ on $s<0$ and $c e^{-\lambda_+s}$ on $s>0$. Indeed multiplication by the smooth integrating factor on either half-line leaves a distribution with zero derivative, hence a constant; a distribution annihilating derivatives is constant because every compactly supported smooth test of integral zero is the derivative of another such test. The constants agree at zero, since a jump would contribute a point mass to $a'$ whereas $-\lambda(s)a$ is locally integrable. This solution is in $L^2(\mathbb R)$ precisely when $\lambda_-<0<\lambda_+$, or $c=0$. In the nonzero case its derivative is bounded in absolute value by $\max\{|\lambda_-|,|\lambda_+|\}|a|$, so it is in $H^1$ and gives a vector in $X$. Only finitely many $(j,n)$ can have this sign pattern, as $m$ is finite and $\pi n$ tends to the respective infinities. Orthogonality of the modes gives exactly one independent real generator per such pair, and no other kernel vectors. [F1, F2, construct, algebra]

2.1 **Reduction to a diagonal step operator.** Let $B^0$ be the step function in the Statement and set $B^r=(1-r)B+rB^0$ for $0\le r\le1$. Every $B^r$ has exactly the same diagonal limits and nondegeneracy; hence $T_r=D+B^r$ is Fredholm by [F2]. Also $\|T_r-T_q\|_{X\to Y}\le |r-q|\|B^0-B\|_\infty$, so this is a norm-continuous path. At each parameter, step 1.1 makes its integer index locally constant. A locally constant function on the connected interval $[0,1]$ is constant: the inverse image of one value and its complement would otherwise be two disjoint nonempty open subsets. Consequently $\operatorname{ind}T=\operatorname{ind}(D+B^0)$. No compact-perturbation or general Banach open-mapping theorem is used. [F2, step 1.1, construct, algebra]

2.2 **The step operator's cokernel.** Since its range is closed, the orthogonal projection in [F2] identifies the cokernel with the vectors $g\in Y$ orthogonal to its range. Test this orthogonality on $a(s)e_{j,n}(t)$ with $a$ real, smooth and compactly supported. For the real modal coefficient $g_{j,n}$ it says $\int g_{j,n}(a'+\lambda(s)a)=0$, equivalently $-g'_{j,n}+\lambda(s)g_{j,n}=0$ in distributions. The integrating-factor argument of step 1.2 gives $g_{j,n}(s)=c e^{\lambda_-s}$ on $s<0$ and $c e^{\lambda_+s}$ on $s>0$, with one common constant. It is in $L^2$ precisely when $\lambda_->0>\lambda_+$, or $c=0$. There are finitely many such pairs. Conversely each of these coefficient functions is orthogonal to the image of every smooth finite modal sum, by integration by parts in $s$. Such sums are dense in $X$ by [F1], and the operator is bounded, so it is orthogonal to the whole range. Thus these are exactly the claimed real cokernel generators. [F1, F2, F3, step 1.2, algebra, construct]

3.1 **Counting the signs.** For one $(j,n)$, its contribution to kernel dimension minus cokernel dimension is $\mathbf1_{\lambda_{-,j,n}<0}-\mathbf1_{\lambda_{+,j,n}<0}$. The two indicators agree for all sufficiently large positive or negative $n$. Since neither limiting eigenvalue vanishes, $\lambda_{\pm,j,n}<0$ is exactly $n<(\theta_j-b_{\pm,j})/\pi$, whose threshold is not an integer. Summing the finite difference of these two integer half-lines gives $\lfloor(\theta_j-b_{-,j})/\pi\rfloor-\lfloor(\theta_j-b_{+,j})/\pi\rfloor$. Summing over the finitely many components, and using the preceding kernel, cokernel and continuation calculations and [F3], proves the displayed index formula for the original real-linear $B$ as well as the step model. The calculation allows either index sign and zero index, including the constant case $B_-=B_+$. [F3, step 2.1, step 1.2, step 2.2, algebra]

4.1 **Fixed-end weights.** For $w=e^{\delta|s|}$, the weak product rule gives $wT(w^{-1}v)=Dv+(B-\delta\operatorname{sign}(s))v$. This identity follows by splitting integration by parts into the two half-strips; there is no point mass at zero because $w$ is continuous. Multiplication by $w$ identifies the specified weighted spaces isometrically with $X,Y$, and the new diagonal limits are $b_{-,j}+\delta$ and $b_{+,j}-\delta$. The minimum limiting spectral gap is positive: for each of finitely many nonintegral thresholds its distance to the integer lattice is positive. Under the bound on $\delta$, none of the corresponding limiting modal eigenvalues changes sign. Hence the new operator satisfies [F2] and its two floor terms in step 3.1 are unchanged. The weighted index is therefore the same. These arguments prove the stated fixed-end operator result; no geometric bundle or Maslov identification has entered the proof. [F1, F2, step 3.1, construct, algebra] ∎
