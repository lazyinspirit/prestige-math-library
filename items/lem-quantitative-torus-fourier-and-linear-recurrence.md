---
dependency_level: 4
id: lem-quantitative-torus-fourier-and-linear-recurrence
kind: lemma
title: Quantitative torus Fourier criterion and linear recurrence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-total-equidistribution-of-a-nil-orbit
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Section 3, Proposition 3.1 and Lemma 3.2; corrected small-N alternative
---

## Statement

Put $e(t)=\exp(2\pi i t)$, $\mathbb T=\mathbb R/\mathbb Z$, and $\|t\|_{\mathbb T}=\min_{a\in\mathbb Z}|t-a|$. Give $\mathbb T^r$ its quotient maximum metric, probability Lebesgue measure, and Lipschitz norm $\|F\|_{\mathrm{Lip}}=\|F\|_\infty+\operatorname{Lip}(F)$. For each integer $r\geq1$ there are constants $C_r,A_r\geq1$ such that, for every $N\geq1$, $0<\delta<1/2$, and sequence $x_1,\ldots,x_N\in\mathbb T^r$ failing $\delta$-equidistribution for that norm, some $k\in\mathbb Z^r$ satisfies

$$0<|k|_\infty\leq C_r\delta^{-A_r},\qquad \left|\frac1N\sum_{n=1}^Ne(k\cdot x_n)\right|\geq C_r^{-1}\delta^{A_r}.$$

If $x_n=n\alpha$ for $\alpha\in\mathbb R^r$, the same conclusion can be chosen to satisfy $\|k\cdot\alpha\|_{\mathbb T}\leq C_r\delta^{-A_r}/N$, after enlarging $C_r,A_r$. There are also absolute constants $C,A\geq1$ such that whenever $0<\rho<1/2$, $0<\eta\leq\rho/2$, $\alpha\in\mathbb R$, and at least $\rho N$ integers $n\in[N]=\{1,\ldots,N\}$ have $n\alpha\bmod1$ in a fixed circle interval of length $\eta$, either $N\leq C\rho^{-A}$ or some integer $1\leq q\leq C\rho^{-A}$ satisfies

$$\|q\alpha\|_{\mathbb T}\leq C\eta\rho^{-A}/N.$$

All these constants are independent of $N$, the points, $\alpha$, and the interval. An interval containing the observed values of $n\alpha+\beta$ is allowed too: translating it by $-\beta$ reduces to the displayed hypothesis.

## Statement references

[[def-total-equidistribution-of-a-nil-orbit]]

[Green and Tao, Proposition 3.1 and Lemma 3.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

[F1] The Lipschitz-test definition of equidistribution is [[def-total-equidistribution-of-a-nil-orbit]], specialized to the stated torus metric. No assertion about total equidistribution on shorter progressions is assumed.

## Proof

**Given:** The parameters and sequences in the statement. Integrals on tori use probability Lebesgue measure. All Fourier coefficients below are defined by $\widehat F(k)=\int F(x)e(-k\cdot x)\,dx$.

1.1 Divide a witnessing Lipschitz test by its original Lipschitz norm and subtract its integral. The resulting function $F$ has integral zero, Lipschitz seminorm at most one, supremum norm at most two, and empirical average of modulus greater than $\delta$. Put $h=\delta/16$, let $B_h=(2h)^{-r}1_{[-h,h]^r}$ on $\mathbb T^r$, and set $K=B_h*B_h$. This kernel is nonnegative, has integral one and is supported within maximum distance $2h$ of zero. Hence $\|F-F*K\|_\infty\leq2h$. Direct integration gives $\widehat K(k)=\prod_{j=1}^r(\sin(2\pi hk_j)/(2\pi hk_j))^2$, with factor one when $k_j=0$. Each factor is bounded by $\min(1,C/(h^2k_j^2))$. Summing this bound over integers, by separating $|k_j|\leq1/h$ from its complement, bounds its total by $C/h$; summing for $|k_j|>R$ bounds its tail by $C/(h^2R)$. A union bound over the coordinates therefore gives $\sum_{|k|_\infty>R}|\widehat K(k)|\leq C_rh^{-r-1}/R$. Since $|\widehat F(k)|\leq2$, take $R=\lceil C'_r\delta^{-r-2}\rceil$ with $C'_r$ sufficiently large that the corresponding Fourier tail for $F*K$ is at most $\delta/8$. [F1, algebra]

2.1 The Fourier series with coefficients $\widehat F(k)\widehat K(k)$ is absolutely and uniformly convergent. It equals $F*K$: both are continuous and have those same coefficients by integration of the uniformly convergent series and the convolution identity. Here is a proof of the uniqueness assertion being used. The elementary kernels $\Phi_L(t)=L^{-1}|\sum_{j=0}^{L-1}e(jt)|^2$ are nonnegative, have integral one and have finite Fourier support. For any continuous function $D$ with zero Fourier coefficients, $D*\Phi_L^{\otimes r}=0$. If $0<a<1/2$, the geometric sum bounds $\Phi_L(t)$ by $1/(L\sin^2(\pi a))$ when $\|t\|_{\mathbb T}\geq a$. The product kernel consequently has integral tending to zero outside the maximum ball of radius $a$, by the union bound and its unit one-dimensional integrals. Uniform continuity of $D$ now implies $D*\Phi_L^{\otimes r}\to D$ uniformly: the integral of $|D(x-y)-D(x)|$ is uniformly small inside a sufficiently small ball, and bounded by $2\|D\|_\infty$ times a vanishing mass outside it. Thus $D=0$, proving uniqueness without assuming a Fourier inversion theorem. [step 1.1, algebra]

3.1 Omit the constant coefficient, which is zero, and truncate to $F_R(x)=\sum_{0<|k|_\infty\leq R}\widehat F(k)\widehat K(k)e(k\cdot x)$. The previous two steps give $\|F-F_R\|_\infty\leq\delta/4$, so the empirical average of $F_R$ has modulus greater than $3\delta/4$. There are at most $(2R+1)^r$ terms and each coefficient has modulus at most two, since $|\widehat K(k)|\leq\int K=1$. One of the nonzero frequencies therefore has character average at least $3\delta/(8(2R+1)^r)$. As $R\leq C_r\delta^{-r-2}$, this proves both power bounds in the Fourier conclusion. For a linear orbit, summing a geometric progression gives $|N^{-1}\sum_{n=1}^Ne(nt)|\leq\min(1,1/(2N\|t\|_{\mathbb T}))$, because $|1-e(t)|\geq4\|t\|_{\mathbb T}$ and the numerator has modulus at most two. If $t$ is integral the desired approximation is exact. Apply this estimate with $t=k\cdot\alpha$ to obtain the linear conclusion. [step 2.1, algebra]

4.1 For the recurrence assertion, let $I$ be the interval in its hypothesis, set $s=\rho/16$, and put $H(x)=\max(1-\operatorname{dist}(x,I)/s,0)$. Its empirical average is at least $\rho$, its integral is at most $\eta+2s\leq5\rho/8$, and its Lipschitz norm is at most $1+16/\rho$. Thus the orbit fails $c\rho^2$-equidistribution for an absolute $c>0$. The linear conclusion proved above supplies absolute $D,a\geq1$ and an integer $1\leq q\leq D\rho^{-a}$ with $\beta=\|q\alpha\|_{\mathbb T}\leq D\rho^{-a}/N$. If $\beta=0$, the claimed bound holds. Otherwise split $[N]$ into its residue progressions modulo $q$ and then into consecutive blocks of $\lceil1/\beta\rceil$ terms and a final shorter block. There are at most $q+\beta N$ blocks, since a residue progression of $m$ terms needs at most $1+m\beta$ blocks. A block lifts to a real arithmetic progression with fixed signed step of modulus $\beta$ and span at most $(\lceil1/\beta\rceil-1)\beta<1$. Its intersection with the periodically repeated interval $I$ consists of at most two pieces with total length at most $\eta$: if both pieces occur, the gap between them has length $1-\eta$, and the whole span is less than one. Such a grid has at most $2+\eta/\beta$ points in those pieces, including endpoints. Consequently $\rho N\leq(2+\eta/\beta)(q+\beta N)=2q+\eta q/\beta+2\beta N+\eta N$. [step 3.1, F1, algebra]

5.1 If $N>16D\rho^{-a-1}$, then $2q+2\beta N\leq\rho N/4$, while $\eta N\leq\rho N/2$. The last inequality therefore gives $\beta\leq4\eta q/(\rho N)\leq4D\eta\rho^{-a-1}/N$. Taking sufficiently large absolute $C,A$ proves the recurrence conclusion in this case. Otherwise $N\leq16D\rho^{-a-1}$ is the stated small-$N$ alternative. Enlarging the fixed constants finitely many times proves all bounds simultaneously. [step 4.1, algebra] ∎

## Remarks

The small-$N$ alternative is essential for the epsilon-sensitive assertion. For $N=1$, any irrational $\alpha$ lies in intervals of arbitrarily small positive length, while finitely many bounded nonzero multipliers have a positive minimum distance from integers. Thus the literal all-$N$ formulation of Green and Tao's Lemma 3.2 cannot supply that assertion without an alternative.

The source reading for this reconstruction comprised Section 3 from its opening through the complete proof of Lemma 3.2 in the local full-text extraction. The kernel convergence and corrected counting argument above are supplied locally. This is no assertion of independently reading the complete paper or checking its PDF pages. No external theorem is imported and no choice principle is used.
