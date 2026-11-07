---
id: lem-vmvt-critical-mean-value-bound-from-decoupling
kind: lemma
title: Critical Mean-Value Bound from Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
- def-countable-choice
- def-exponential-character-e
- def-vinogradov-mean-value-Jsk
- thm-vinogradov-mean-value-is-solution-count
- def-moment-curve
- def-moment-curve-extension-operator
- def-polynomial-decoupling-weight-and-norm
- def-l2-decoupling-constant-for-moment-curve
- thm-bourgain-demeter-guth-sharp-moment-curve-decoupling
- lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- lem-complex-conjugation-and-modulus-laws
- thm-dominated-convergence
- thm-lebesgue-measure-of-a-box-of-every-kind
- thm-finite-and-countable-subadditivity-of-measures
- thm-complex-exponential-is-entire-with-derivative-itself
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§4, Theorem 4.1 and Corollary 4.2, printed pp. 637–639: discrete restriction
      and the smoothed solution-count deduction'
  - title: Lillian B. Pierce, The Vinogradov Mean Value Theorem [after Wooley, and
      Bourgain, Demeter and Guth]
    url: https://arxiv.org/pdf/1707.00119v2
    locator: '§§6.2–6.3: discrete decoupling and its deduction of the Vinogradov mean-value
      estimate'
---

## Statement

Assume countable choice. For every integer $k\ge2$, put $K=k(k+1)/2$. For every $\varepsilon>0$ there is a constant $C_{k,\varepsilon}>0$ such that, for every real $X\ge1$,
$$J_{K,k}(X)\le C_{k,\varepsilon}X^{K+\varepsilon},$$
where, with $N$ the integer satisfying $N\le X<N+1$ and $e(t)=\exp(2\pi i t)$,
$$J_{K,k}(X)=\int_{[0,1]^k}\left|\sum_{n=1}^Ne\!\left(\sum_{j=1}^k\alpha_jn^j\right)\right|^{2K}\,d\alpha$$
is the ordinary multiple Riemann integral.

## Statement references

[BDG, §4](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Pierce, §§6.2–6.3](https://arxiv.org/pdf/1707.00119v2)

## Facts & Assumptions

**Given:** Countable choice; an integer $k\ge2$; $K=k(k+1)/2$; a real $X\ge1$; and $N$ with $N\le X<N+1$.

[A1] Countable choice is assumed for the Lebesgue measure and Gaussian-transform suppliers used below ([[def-countable-choice]]).

[F1] For $0<\delta\le1$, $E\ge100k$, $p=k(k+1)$, and a ball $B\subset\mathbb R^k$ of radius $\delta^{-k}$, let $\mathcal P_\delta$ be the canonical consecutive step-$\delta$ partition of $[0,1]$, with at most one final shorter interval ([[def-l2-decoupling-constant-for-moment-curve]]). The extension operator satisfies
$$\|E^{(k)}g\|_{L^p(w_{B,E})}\le C_{k,E,\eta}\delta^{-\eta}\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(k)}g\|_{L^p(w_{B,E})}^2\right)^{1/2}$$
for every $g\in L^1([0,1])$ and $\eta>0$ ([[thm-bourgain-demeter-guth-sharp-moment-curve-decoupling]], [[def-moment-curve-extension-operator]], [[def-polynomial-decoupling-weight-and-norm]]). The cited weighted inequality has a complete local proof; the argument below applies its exact hypotheses and does not use an imported theorem.

[F2] Under [A1] and with $\widehat h(\xi)=\int_{\mathbb R^k}h(x)e^{-2\pi i x\cdot\xi}\,dx$, the Gaussian transform is $\widehat{e^{-\pi t|x|^2}}(\xi)=t^{-k/2}e^{-\pi|\xi|^2/t}$ for $t>0$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] Under [A1], the Lebesgue measure of a box is its product side-length, and Lebesgue measure is countably subadditive ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F4] $J_{K,k}(X)$ is exactly the number of integer tuples $(x_1,\ldots,x_K,y_1,\ldots,y_K)\in\{1,\ldots,N\}^{2K}$ with $\sum_i x_i^j=\sum_i y_i^j$ for $1\le j\le k$ ([[thm-vinogradov-mean-value-is-solution-count]]).

[F5] The exponential is continuous because it is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]); $e(u+v)=e(u)e(v)$ and $|e(u)|=1$ for real $u,v$ ([[def-exponential-character-e]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]).

[F6] If $h_\tau\to h$ pointwise and $|h_\tau|^p$ is bounded by an integrable majorant, then the integrals of $|h_\tau|^p$ converge to that of $|h|^p$ ([[thm-dominated-convergence]]).

[F7] $\Gamma_k(t)=(t,t^2,\ldots,t^k)$ ([[def-moment-curve]]).

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 Put $R=N^k$. On $|x|<R$ the weight $w_{B(0,R),E}$ is at most $1$, while on $2^mR\le|x|<2^{m+1}R$ it is at most $2^{-mE}$. Each such annulus lies in a box of volume at most $C_k(2^{m+1}R)^k$ by [F3]. Thus $\int w_{B(0,R),E}\le C_{k,E}R^k=C_{k,E}N^{k^2}$, because $E>k$ makes the geometric series converge. Also $e^{-\pi|x|^2/R^2}\le C_{k,E}w_{B(0,R),E}(x)$, since $e^{-\pi u^2}(1+u)^E$ is bounded for $u\ge0$. [A1, F3, algebra]

2.1 Put $p=2K=k(k+1)$, $t_i=i/N$ for $1\le i\le N$, and $F_N(x)=\sum_{i=1}^Ne(\sum_{j=1}^kx_jt_i^j)$. Fix $E\ge100k$, $B=B(0,N^k)$, and $0<\tau<1/(2N)$. The functions $g_\tau(t)=\tau^{-1}\sum_{i=1}^N\mathbf1_{[t_i-\tau,t_i]}(t)$ have each summand supported in its partition interval $J_i=[(i-1)/N,i/N]$. Apply [F1] with $\delta=N^{-1}$. For every fixed $x$, $E_{J_i}^{(k)}g_\tau(x)\to e(x\cdot\Gamma_k(t_i))$ as $\tau\downarrow0$; the integrable majorant needed for weighted norm convergence follows from $|E_{J_i}^{(k)}g_\tau(x)|\le1$ and step 1.1. Thus [F6] passes the finitely many weighted norms to the limit, and their limits all equal $(\int w_{B,E})^{1/p}$. Consequently $\int_{\mathbb R^k}|F_N(x)|^p w_{B,E}(x)\,dx\le C_{k,E,\eta}N^{K+p\eta}\int_{\mathbb R^k}w_{B,E}(x)\,dx$. Here [F7] gives the displayed curve, and $N^K=(\sum_{i=1}^N1^2)^{p/2}$. Combining this inequality with step 1.1 and the Gaussian comparison there gives, for $I_N=\int_{\mathbb R^k}e^{-\pi|x|^2/N^{2k}}|F_N(x)|^{2K}\,dx$, the bound $I_N\le C_{k,E,\eta}N^{k^2+K+p\eta}$. [A1, F1, F5, F6, F7, given, step 1.1]

3.1 Expand the finite power $|F_N|^{2K}$. For each tuple $u,v\in\{1,\ldots,N\}^K$, set $Z_j=\sum_{a=1}^Ku_a^j-\sum_{a=1}^Kv_a^j$. The corresponding phase is $e(\sum_{j=1}^kx_jZ_j/N^j)$. By [A1], [F2], and step 2.1, scaling the Gaussian in each coordinate gives $I_N=N^{k^2}\sum_{u,v\in\{1,\ldots,N\}^K}\exp\!\left(-\pi\sum_{j=1}^kN^{2(k-j)}Z_j^2\right)$. Every summand in this expression is positive. [A1, F2, F5, step 2.1, algebra]

4.1 Let $T_N$ be the number of these tuples satisfying $|Z_j|\le N^{j-k}$ for every $1\le j\le k$. Each such tuple contributes at least $e^{-\pi k}N^{k^2}$ to $I_N$, so $T_N\le e^{\pi k}N^{-k^2}I_N\le C_{k,\varepsilon}N^{K+\varepsilon}$ after choosing $\eta=\varepsilon/(2p)$ in step 2.1. Every exact solution has $Z_j=0$, hence belongs to $T_N$; [F4] gives $J_{K,k}(X)\le T_N$. Finally $N\le X$ and $K+\varepsilon>0$, so $N^{K+\varepsilon}\le X^{K+\varepsilon}$. [F4, step 2.1, step 3.1, algebra] ∎
