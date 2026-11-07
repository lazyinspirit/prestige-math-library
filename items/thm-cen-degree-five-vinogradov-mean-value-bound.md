---
id: thm-cen-degree-five-vinogradov-mean-value-bound
kind: theorem
title: "Cen Degree-Five Vinogradov Mean-Value Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps: [thm-bourgain-demeter-guth-sharp-moment-curve-decoupling, lem-positive-fourier-majorant-bump, def-l2-decoupling-constant-for-moment-curve, def-moment-curve-extension-operator, def-polynomial-decoupling-weight-and-norm, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is assumed by the endpoint decoupling supplier and Fourier-majorant construction; the local finite discretization and expansion use no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean Bourgain, Ciprian Demeter, and Larry Guth, “Proof of the Main Conjecture in Vinogradov’s Mean Value Theorem for Degrees Higher than Three”"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "Theorem 1.1 and the critical case s=15,n=5"
    - title: "Xi Cen et al., “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "Appendix B, degree-five input"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Write $\Gamma_5(t)=(t,t^2,t^3,t^4,t^5)$ and $e(u)=e^{2\pi i u}$. For $g\in L^1([0,1])$ and a measurable interval $J\subseteq[0,1]$, put $E_J^{(5)}g(x)=\int_Jg(t)e(x\cdot\Gamma_5(t))\,dt$. If $B=B(c,R)\subset\mathbb R^5$ and $E>5$, put $w_{B,E}(x)=(1+|x-c|/R)^{-E}$ and $\|F\|_{L^p(w_{B,E})}=(\int|F|^pw_{B,E})^{1/p}$. For $N\ge2$, let $\mathcal P_{1/N}$ be the consecutive partition of $[0,1]$ into intervals $((i-1)/N,i/N]$, with endpoint overlaps ignored in integrals. Define $J_{15,5}(N)$ to be the number of ordered tuples $(u_1,\ldots,u_{30})\in\{1,\ldots,N\}^{30}$ satisfying
$$\sum_{j=1}^{15}u_j^k=\sum_{j=16}^{30}u_j^k\qquad (k=1,2,3,4,5).$$
Then for every $\varepsilon>0$ there is $C_\varepsilon>0$ such that
$$J_{15,5}(N)\le C_\varepsilon N^{15+\varepsilon}\qquad(N\ge2).$$

## Statement references

[Jean Bourgain, Ciprian Demeter, and Larry Guth, “Proof of the Main Conjecture in Vinogradov’s Mean Value Theorem for Degrees Higher than Three”](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Xi Cen et al., “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

## Facts & Assumptions

**Given:** Countable Choice and an integer $N\ge2$.

[A1] [[def-countable-choice]]: Every countable family of nonempty sets has a choice function.

[F1] [[thm-bourgain-demeter-guth-sharp-moment-curve-decoupling]]: Assuming Countable Choice, for $n\ge2$, $E\ge100n$, $0<\delta\le1$, $\varepsilon>0$, and $p=n(n+1)$, every ball $B\subset\mathbb R^n$ of radius $\delta^{-n}$ and every $g\in L^1([0,1])$ satisfy
$$\|E^{(n)}g\|_{L^p(w_{B,E})}\le C_{n,E,\varepsilon}\,\delta^{-\varepsilon}\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/2},$$
where $C_{n,E,\varepsilon}$ is independent of $\delta$, $B$, and $g$.

[F2] [[lem-positive-fourier-majorant-bump]]: Assuming Countable Choice, there is a real-valued nonnegative infinitely differentiable compactly supported function $\phi:\mathbb R^5\to\mathbb R$ whose Fourier transform is nonnegative everywhere and at least $1$ on $[-1,1]^5$.

[F3] [[def-l2-decoupling-constant-for-moment-curve]]: The interval family $\mathcal P_\delta$ is the finite consecutive step-$\delta$ partition of $[0,1]$, with a final shorter interval allowed and endpoint overlaps ignored in Lebesgue integrals.

[F4] [[def-moment-curve-extension-operator]]: $E_J^{(5)}g(x)=\int_Jg(t)e(x\cdot\Gamma_5(t))\,dt$ and $E^{(5)}=E_{[0,1]}^{(5)}$.

[F5] [[def-polynomial-decoupling-weight-and-norm]]: For $B=B(c,R)$, $w_{B,E}(x)=(1+|x-c|/R)^{-E}$ and $\|F\|_{L^p(w_{B,E})}=(\int|F|^pw_{B,E})^{1/p}$.

## Proof

1.1 Fix $\varepsilon_0>0$, set $\delta=N^{-1}$, $E=500$, $p=30$, and $B=B(0,N^5)$. For any complex $a_1,\ldots,a_N$ and any $t_i\in((i-1)/N,i/N]$, choose $0<\tau<1/(2N)$ smaller than every positive distance $t_i-(i-1)/N$, and set $g_\tau(t)=\sum_{i=1}^N a_i\tau^{-1}\mathbf 1_{[t_i-\tau,t_i]}(t)$. Each summand is supported in its own interval $J_i\in\mathcal P_\delta$. Apply [F1] with $n=5$, so $p=n(n+1)$ and $E=100n$. [given, A1, F1, F3, F4, F5, construct]

2.1 As $\tau\downarrow0$, $E^{(5)}g_\tau(x)\to S_t(x):=\sum_i a_i e(x\cdot\Gamma_5(t_i))$, and $E_{J_i}^{(5)}g_\tau(x)\to a_i e(x\cdot\Gamma_5(t_i))$. The convergence is pointwise; each sum is bounded by $\sum_i|a_i|$. Since $w_{B,500}$ is integrable, dominated convergence passes [F1] to the limit. Each limiting exponential has modulus one, so its $L^{30}(w_{B,500})$ norm is $|a_i|(\int w_{B,500})^{1/30}$. Scaling $x=N^5y$ gives $|B|^{-1}\int w_{B,500}=c_{5,500}<\infty$; finiteness follows by summing the annuli $2^m\le|y|<2^{m+1}$, whose integrals are $O(2^{(5-500)m})$. Consequently $(|B|^{-1}\int_{\mathbb R^5}|S_t(x)|^{30}w_{B,500}(x)\,dx)^{1/30}\le C_{\varepsilon_0}N^{\varepsilon_0}(\sum_{i=1}^N|a_i|^2)^{1/2}$. [given, F1, F5, step 1.1, algebra]

3.1 Take $t_i=i/N$ and $a_i=1$, and put $S_N(x)=\sum_{i=1}^Ne(\sum_{k=1}^5x_k(i/N)^k)$. Step 2.1 gives $\int_{\mathbb R^5}|S_N(x)|^{30}w_{B,500}(x)\,dx\le C_{\varepsilon_0}N^{15+30\varepsilon_0}|B|\le C'_{\varepsilon_0}N^{40+30\varepsilon_0}$, because $|B|=|B(0,1)|N^{25}$. [given, F5, step 2.1, algebra]

4.1 Let $\phi$ be supplied by [F2] and define $\phi_N(x)=\phi(x/N^5)$. Its support lies in a fixed dilation of $B$, on which $w_{B,500}$ is bounded below by a positive constant independent of $N\ge2$. Since $\phi$ is bounded, $0\le\phi_N(x)\le Cw_{B,500}(x)$. Therefore $I_N:=\int_{\mathbb R^5}\phi_N(x)|S_N(x)|^{30}\,dx\le C_{\varepsilon_0}N^{40+30\varepsilon_0}$. [F2, F5, step 3.1, algebra]

5.1 Expand the finite power $|S_N|^{30}$. For a resulting ordered tuple let $Z_k=\sum_{j=1}^{15}u_j^k-\sum_{j=16}^{30}u_j^k$. The Fourier convention in the Statement and the change of variables $x=N^5y$ give $I_N=N^{25}\sum_{(u_1,\ldots,u_{30})\in\{1,\ldots,N\}^{30}}\widehat\phi(-N^4Z_1,-N^3Z_2,-N^2Z_3,-NZ_4,-Z_5)$. Every summand is nonnegative by [F2]. If the tuple satisfies the five equalities in the Statement, then every $Z_k=0$ and its term is at least $N^{25}$ because $\widehat\phi(0)\ge1$. Thus $N^{25}J_{15,5}(N)\le I_N$. [F2, step 4.1, algebra]

6.1 Combining steps 4.1 and 5.1 yields $J_{15,5}(N)\le C_{\varepsilon_0}N^{15+30\varepsilon_0}$. Given $\varepsilon>0$, choose $\varepsilon_0=\varepsilon/30$. This proves the asserted bound for every integer $N\ge2$. [given, step 4.1, step 5.1, algebra] ∎
