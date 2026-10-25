---
id: cex-intrinsic-variance-alone-does-not-control-covariance-pilot
kind: counterexample
title: "Intrinsic matrix variance alone does not control pilot-centered covariance truncation"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - alg-adaptive-truncated-covariance-estimator
  - def-matrix-variance-of-a-random-vector
  - def-covariance-matrix-of-a-random-vector
  - def-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Minsker and Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions"
      url: "https://arxiv.org/pdf/1708.00502"
---


## Statement refuted

There is a universal $C$ such that every clean iid finite-fourth-moment law
with nonzero covariance, intrinsic matrix-variance ratio
$d=\sigma_0^2/\|\Sigma\|_{\rm op}^2$ and $m\ge Cd\beta$ has the
following guarantees for the same-sample geometric-median pilot procedure:
the fixed-scale error is at most $3\sigma\sqrt{\beta/m}$, with failure
at most $5d e^{-\beta}$, and the adaptive error is at most
$18\sigma_0\sqrt{\beta/m}$, with failure at most
$5d\log_2(2\sigma_{\max}/\sigma_{\min})e^{-\beta}$.
Even replacing the failure prefactor $d$ by ambient dimension $p$ does not
make the $Cd\beta$ sample condition sufficient in general.

## Facts & Assumptions

**Given:** Countable Choice for the specified minimum-norm pilot; a proposed universal $C$; the exact prescribed procedure and any deterministic balanced blocks.

[F1] The covariance algorithm uses the geometric median of its balanced block means, rank-one radial truncation with $\psi(t)=\min(t,1)$ for $t\ge0$, and a fixed dyadic scale grid. [[alg-adaptive-truncated-covariance-estimator]].

[F2] For a centered vector, covariance is $\Sigma=E[XX^{\mathsf T}]$. [[def-covariance-matrix-of-a-random-vector]].

[F3] Matrix variance is $\sigma_0^2=\|E[\|X\|^2XX^{\mathsf T}]\|_{\rm op}$. [[def-matrix-variance-of-a-random-vector]].

## Counterexample

1.1 Fix $\beta=10$, so $k=36$, and choose a fixed integer $m$ arbitrarily large with $m\ge2C\beta$, $b_{\min}=\lfloor m/k\rfloor\ge2$, $k(2/3)^{b_{\min}}<1/100$ and $18\sqrt{2\beta/m}<1/2$. For each $p\ge2$, set $\lambda_1=1$, $\lambda_j=p^{-1/2}$ for $j\ge2$, $S_p=\sum_j\lambda_j^2=2-1/p$, and $q_j=\lambda_j^2/S_p$. Let $X$ take $\pm\sqrt{\lambda_j/q_j}\,e_j$, each with probability $q_j/2$. It is centered and finitely supported. Direct summation gives $\Sigma_p=\operatorname{diag}(\lambda_j)$, $\|\Sigma_p\|_{\rm op}=1$, $E[\|X\|^2XX^{\mathsf T}]=S_p I_p$ and $\sigma_0^2=d=S_p<2$. Thus $m\ge Cd\beta$ for all $p$, but $\operatorname{tr}\Sigma_p\to\infty$. Tail-axis observations $j\ge2$ have common squared radius $R_p^2=S_p\sqrt p$. [given, F2, F3, algebra, construct]

2.1 Let $E_p$ be the event that every block contains at least one tail-axis draw and that all sampled tail axes are distinct. A block has no tail draw with probability $(1/S_p)^{b_j}$; conditional tail-axis labels are uniform on $p-1$ coordinates. Union bounds give $P(E_p)\ge1-k(1/S_p)^{b_{\min}}-m(m-1)/(2(p-1))>49/50$ for large $p$. Every geometric median of finite points lies in their convex hull: if $x$ lies outside that compact hull and $z$ is a closest hull point, differentiating the squared distance along the segment from $z$ to any hull point $q$ gives $\langle x-z,q-z\rangle\le0$. Expanding the square then gives $\|x-q\|^2\ge\|x-z\|^2+\|z-q\|^2>\|z-q\|^2$, so replacing $x$ by $z$ strictly reduces every summand, contradicting median minimality. Write therefore $\widehat\mu=\sum_l w_lM_l$ with $w_l\ge0$, $\sum_lw_l=1$. On $E_p$ the tail parts of the block means have disjoint supports and norms at least $R_p/b_{\max}$, where $b_{\max}=\lceil m/k\rceil$. Thus $\|\widehat\mu_{\rm tail}\|^2\ge R_p^2\sum_lw_l^2/b_{\max}^2\ge R_p^2/(kb_{\max}^2)$, and $|\widehat\mu_1|\le\sqrt{S_p}$. [given, F1, step 1.1, algebra]

3.1 For an axis-one sample, $\|X_i-\widehat\mu\|^2\ge\|\widehat\mu_{\rm tail}\|^2$. For a tail draw in block $l$, its unique tail coordinate in the pilot is exactly $w_l/b_l$ times its sample coordinate, so the difference has magnitude at least $R_p(1-w_l/b_l)\ge R_p/2$. Hence uniformly in $i$, $\|X_i-\widehat\mu\|^2\ge c_mR_p^2$, with $c_m=\min\{1/(kb_{\max}^2),1/4\}>0$, whereas $|(X_i-\widehat\mu)_1|\le2\sqrt{S_p}$. Choose the exact scale bracket $\sigma_{\min}=\sigma_{\max}=\sigma_0=\sqrt{S_p}$. Its grid is $\{0\}$, so adaptive and fixed-scale estimates coincide. With $\theta=\sigma_0^{-1}\sqrt{\beta/m}$, all centered samples are clipped for large $p$, and their rank-one formula gives $e_1^{\mathsf T}\widehat\Sigma e_1\le4S_p/(\theta c_mR_p^2)=4/(\theta c_m\sqrt p)\to0$. The true entry is one, so operator error exceeds $1/2$ on $E_p$ eventually. Both claimed thresholds are below $1/2$ by step 1.1, whereas their claimed failure budget is $5d e^{-10}<10e^{-10}<1/1000$. This contradicts $P(E_p)>49/50$. Since $m$ was chosen after an arbitrary proposed $C$, no universal such $C$ exists. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 To obtain a nonvacuous contradiction even with the corrected ambient prefactor, let an integer $b\to\infty$ satisfy $b\ge C$, and take $\beta_b=2^{b/2}/100$, $k_b=\lfloor(7/2)\beta_b\rfloor+1$, $m_b=k_bb$ and $p_b=\lceil e^{\beta_b/2}\rceil$. These satisfy $\beta_b>1$ eventually, $m_b>(7/2)b\beta_b\ge Cd\beta_b$ and balanced blocks all of size $b$. The no-tail-block error in step 2.1 is at most $(9/2)\beta_b(2/3)^b=(9/200)(2\sqrt2/3)^b\to0$; the collision error is $O(\beta_b^2b^2e^{-\beta_b/2})\to0$. Here $c_{m_b}=1/(k_bb^2)$ eventually and $1/\theta=\sqrt{S_{p_b}k_bb/\beta_b}=O(\sqrt b)$. Thus the upper bound for the estimated leading entry in step 3.1 is $O(\beta_bb^{5/2}e^{-\beta_b/4})\to0$, whereas its true entry remains one. The larger advertised error radius is at most $18\sqrt{4/(7b)}\to0$, while $5p_b e^{-\beta_b}\le10e^{-\beta_b/2}\to0$. Both failures therefore occur with probability tending to one even though the ambient-prefactor bound would require it to tend to zero. Each asserted vanishing follows since $\beta_b$ grows exponentially in $b$ and $e^{-c\beta_b}$ dominates every fixed power of $\beta_b,b$; taking logarithms proves these limits directly. This also disproves the dimension-uniform source-shaped guarantee under only $m\ge Cd\beta$. [given, F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎


## Remarks

The distinct two-axis counterexample
[[cex-matrix-variance-does-not-dominate-trace-covariance-product]] refutes
the source's auxiliary trace comparison. This family proves failure of the
unknown-mean estimator guarantee itself under only the intrinsic-ratio
sample condition. It does not refute a correctly proved known-mean bound,
a uniform pilot-accuracy interface, or a trace-aware sample requirement.
