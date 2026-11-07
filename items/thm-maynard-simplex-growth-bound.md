---
dependency_level: 2
id: thm-maynard-simplex-growth-bound
kind: theorem
title: "Maynard’s logarithmic lower bound for M_k"
status: draft
origin: pipeline
proof_strategy: direct
deps: [def-maynard-variational-quantity-mk, thm-multidimensional-riemann-criterion, thm-riemann-fubini-on-product-rectangles, thm-substitution-with-riemann-integrable-inner-derivative, thm-newton-leibniz-with-interior-derivative, thm-multidimensional-integral-properties, def-natural-logarithm, def-real-exponential-function-and-e]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Statement

There is an integer $k_0$ such that for every integer $k\ge k_0$,
$$M_k>\log k-2\log\log k-2.$$


## Statement references

[[def-maynard-variational-quantity-mk|Definition of M_k]]

[[thm-multidimensional-riemann-criterion|Riemann integrability criterion]]

[[thm-riemann-fubini-on-product-rectangles|Iterated Riemann integrals]]

[[thm-substitution-with-riemann-integrable-inner-derivative|One-dimensional substitution]]

[[thm-newton-leibniz-with-interior-derivative|Newton–Leibniz formula]]


## Facts & Assumptions

**Given:** An integer $k$ sufficiently large, the standard simplex $R_k$, and the functionals in the definition of $M_k$.

[F1] $I_k(F)=\int_{R_k}F^2$, $J_{k,i}(F)=\int_{[0,1]^{k-1}}(\int_0^1F\,dt_i)^2$, and $M_k=\sup_{I_k(F)>0}\sum_iJ_{k,i}(F)/I_k(F)$ ([[def-maynard-variational-quantity-mk]]).

[F2] A bounded function on a rectangle is Riemann integrable when its Darboux gaps can be made arbitrarily small ([[thm-multidimensional-riemann-criterion]]).

[F3] For Riemann-integrable functions on a product rectangle, the iterated and multiple integrals agree ([[thm-riemann-fubini-on-product-rectangles]]).

[F4] Continuous substitution $u=kt$ carries $\int_0^{T/k}g(kt)^r\,dt$ to $k^{-1}\int_0^Tg(u)^r\,du$ for $r=1,2$ ([[thm-substitution-with-riemann-integrable-inner-derivative]]).

[F5] Newton–Leibniz evaluates the displayed elementary antiderivatives ([[thm-newton-leibniz-with-interior-derivative]]).

[F6] The multidimensional Riemann integral is monotone and additive on integrable functions ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=\log k-2\log\log k$, $T=(e^A-1)/A$, and $g(u)=(1+Au)^{-1}$ on $[0,T]$, with $g(u)=0$ for $u>T$. Define $F(t)=\prod_{i=1}^kg(kt_i)$ on $R_k$ and $F(t)=0$ off $R_k$. This is bounded with compact support; its discontinuities lie in the coordinate hyperplanes $t_i=T/k$ and the simplex face $\sum_i t_i=1$. On a grid of mesh $\delta$, each such hyperplane meets $O_k(\delta^{1-k})$ cells, so their total volume is $O_k(\delta)$ and [F2] makes $F$ Riemann integrable. For each $i$, writing $s_i=\sum_{j\ne i}t_j$, its section integral is zero for $s_i>1$ and otherwise equals $\prod_{j\ne i}g(kt_j)\int_0^{\min(T/k,1-s_i)}g(ku)\,du$. This is piecewise continuous with possible jumps only at the finitely many coordinate support hyperplanes, so its square is Riemann integrable by [F2]. Since $e^A=k/(\log k)^2$, $T/k=(1/(\log k)^2-1/k)/A\to0$ and $T\to\infty$; for large $k$, $T>1/2$, and $F>0$ on $[0,1/(2k)]^k$. This gives $I_k(F)>0$ and makes every marginal integral positive on $[0,1/(2k)]^{k-1}$, so every $J_{k,i}(F)>0$ and $F\in\mathcal F_k$. [given, F1, F2, construct]

2.1 Set $\gamma=\int_0^Tg(u)^2du$. By monotonicity and product integration, followed by the substitution $u=kt$, [given, F1, F2, F3, F4, F6, step 1.1, algebra]
$$0<I_k(F)\le\left(\int_0^{T/k}g(kt)^2dt\right)^k=k^{-k}\gamma^k.$$ Symmetry gives $J_{k,i}(F)=J_k$ for every $i$. [given, F1, F2, F3, F4, F6, step 1.1, algebra]

3.1 Using $\gamma$ from step 2.1, let $G=\int_0^Tg(u)du$ and $\mu=\gamma^{-1}\int_0^Tu g(u)^2du$. Newton–Leibniz and $1+AT=e^A$ give [given, F5, step 2.1, algebra]
$$G=1,\qquad \gamma=\frac{1-e^{-A}}A,\qquad \mu=\frac1{1-e^{-A}}-\frac1A.$$
Since $T\le e^A/A$ and $e^A=k/(\log k)^2$, for sufficiently large $k$,
$$1-\frac Tk-\mu\ge\frac1A\left(1-\frac{A}{e^A-1}-\frac{e^A}{k}\right)>0,$$
and $0<\mu<1$. [given, F5, step 2.1, algebra]

4.1 Restrict the outer integral defining $J_k$ to $\sum_{i=2}^kt_i\le1-T/k$, so every supported $t_1$ is allowed. The unrestricted product integral is $J'_k=k^{-k-1}G^2\gamma^{k-1}$; the removed tail is $E_k$. After $u_i=kt_i$, that tail has $\sum_{i=2}^ku_i>k-T$. Put $B=1-T/k-\mu>0$ and $\eta=(k-T)/(k-1)-\mu=(kB+\mu)/(k-1)\ge kB/(k-1)$. On the tail, $1\le\eta^{-2}(\frac1{k-1}\sum_{i=2}^ku_i-\mu)^2$. Expanding and integrating against $\prod_{i=2}^kg(u_i)^2$, the cross terms vanish by the definition of $\mu$, while $u_i^2\le Tu_i$ gives the diagonal bound $T\mu\gamma^{k-1}/(k-1)$. The tail integrand is bounded and has only the hyperplane $\sum_{i=2}^ku_i=k-T$ as a new discontinuity, so it is Riemann integrable by [F2]; every coordinate section is piecewise continuous, and [F3] permits the iterated integration. Fubini and scaling therefore yield [given, F1, F2, F3, F4, F6, step 2.1, step 3.1, algebra]
$$J_k\ge J'_k-E_k\ge k^{-k-1}G^2\gamma^{k-1}\left(1-\frac{T}{kB^2}\right).$$
Indeed, the tail ratio is at most $T\mu/((k-1)\eta^2)\le T\mu(k-1)/(k^2B^2)\le T/(kB^2)$, using $0<\mu<1$. Combining with step 2.1 gives
$$M_k\ge\frac{kJ_k}{I_k(F)}\ge\frac{G^2}{\gamma}\left(1-\frac{T}{kB^2}\right).$$ [given, F1, F2, F3, F4, F6, step 2.1, step 3.1, algebra]

5.1 Put $C_k=1-A/(e^A-1)-e^A/k$. Step 3.1 gives $B\ge C_k/A$, with $C_k\to1$, and $T\le e^A/A$. Thus $T/(kB^2)\le Ae^A/(kC_k^2)\to0$, so the parenthesis in step 4.1 is positive for large $k$. Since $G^2/\gamma=A/(1-e^{-A})\ge A$, step 4.1 yields [step 3.1, step 4.1, algebra]
$$M_k\ge A\left(1-\frac{Ae^A}{kC_k^2}\right)=A-\frac{A^2e^A}{kC_k^2}.$$
The absolute loss here is $A^2e^A/(kC_k^2)=(A/\log k)^2/C_k^2=1+o(1)$, because $A=\log k-2\log\log k$ and $e^A=k/(\log k)^2$. Hence $M_k\ge\log k-2\log\log k-1+o(1)$, which is strictly greater than $\log k-2\log\log k-2$ for all sufficiently large $k$. [step 3.1, step 4.1, algebra] ∎

