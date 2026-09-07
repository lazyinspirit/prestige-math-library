---
id: lem-zeta-logarithmic-derivative-zero-bound
title: "Zeta logarithmic derivative zero bound"
kind: lemma
status: draft
origin: pipeline
deps: [thm-hadamard-product-for-riemann-xi, def-riemann-xi-function, thm-stirling-formula-gamma, thm-cauchy-integral-formula-higher-derivatives, cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a78.3, Hadamard calculation in proof of Theorem 8.8"
      url: https://kskedlaya.org/ant/chap-zeroes.html
proof_strategy: direct argument
---

## Statement

Write $s=\sigma+it$ and let $\rho$ range over nontrivial zeta zeros with multiplicity. With the Hadamard constant $B$,
$$\frac{\zeta'}{\zeta}(s)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right)-\frac1{s-1}+\frac{\log\pi}{2}-\frac{\Gamma'(1+s/2)}{2\Gamma(1+s/2)}.$$
This is a meromorphic identity, using convergent genus-one terms. Uniformly for $-1\le\sigma\le2$, $|t|\ge3$ and $\zeta(s)\ne0$,
$$\operatorname{Re}\frac{\zeta'}\zeta(s)=\sum_\rho\operatorname{Re}\frac1{s-\rho}-\frac12\log|t|+O(1),$$
and this real series is absolutely convergent.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-hadamard-product-for-riemann-xi]]: There exist constants $A,B\in\mathbb C$ such that $\xi(s)=e^{A+Bs}\prod_\rho E_1(s/\rho),$ where the product runs over the nontrivial zeros $\rho$ of $\zeta$, counted with multiplicity, and $E_1(w)=(1-w)e^w.$ The product converges in the genus-one canonical sense.

[F2] [[def-riemann-xi-function]]: The completed function extends meromorphically with simple poles at $0$ and $1$ by thm-completed-riemann-zeta-functional-equation. The **Riemann xi function** is defined on $\mathbb C$ by $\xi(s):=\frac12 s(s-1)\Lambda(s)=\frac12 s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s).$ The role of the factor $\tfrac12 s(s-1)$ is to cancel the two simple poles of the completed function $\Lambda$. Thus $\xi$ is the entire completion, while $\Lambda$ remains meromorphic.

[F3] [[thm-stirling-formula-gamma]]: Fix $\delta$ with $0<\delta<\pi$. On the closed sector $|\arg z|\le\pi-\delta$, using the principal logarithm in $z^{z-1/2}:=\exp((z-1/2)\operatorname{Log} z)$, one has $\Gamma(z)=\sqrt{2\pi}\,z^{z-1/2}e^{-z}\left(1+O_\delta(|z|^{-1})\right)$ as $|z|\to\infty$.

[F4] [[thm-cauchy-integral-formula-higher-derivatives]]: Let $f$ be holomorphic on $D(a,R)$, let $0<r<R$, and let $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$. Define $f^{(0)}=f$ and, whenever it exists, $f^{(n+1)}=(f^{(n)})'$. Then every $f^{(n)}$ exists on $D(a,r)$ and, for every $z\in D(a,r)$ and $n\in\mathbb N$, $f^{(n)}(z)=\frac{n!}{2\pi i}\int_\gamma\frac{f(\zeta)}{(\zeta-z)^{n+1}}\,d\zeta.$ In particular, every holomorphic function has complex derivatives of all orders locally.

[F5] [[cor-zeta-zero-count-unit-interval]]: The number of nontrivial zeta zeros, with multiplicity, whose ordinates lie in $[T,T+1]$ is $O(\log(T+2))$ for $T\ge0$.

[F6] [[thm-trivial-zeros-and-critical-strip]]: For each integer $m\ge1$, $\zeta(-2m)=0.$ These are the only zeros of $\zeta$ on the nonpositive real axis. Every other zero $\rho$ of $\zeta$ satisfies $0<\operatorname{Re}\rho<1$. Moreover, if $\rho$ is a nontrivial zero, then so are $1-\rho$ and $\overline{\rho}$.

## Proof

1.1 For bounded $s$ away from zeros, the terms $1/(s-\rho)+1/\rho$ are $O_s(|\rho|^{-2})$. The unit-interval count, reflected using conjugate zeros, makes their tails normally convergent. Logarithmically differentiating the canonical product therefore gives $\xi'/\xi=B+\sum_\rho(1/(s-\rho)+1/\rho)$. [F1, F5, F6]

1.2 Put $z=1+s/2$. In a wider fixed sector containing these high-height points, Stirling gives $\Gamma(z)=\sqrt{2\pi}\exp((z-1/2)\operatorname{Log}z-z)(1+r(z))$ with $r(z)=O(|z|^{-1})$. On discs of radius $\epsilon|z|$ in that sector, Cauchy gives $r'(z)=O(|z|^{-2})$. Thus $\Gamma'/\Gamma(z)=\operatorname{Log}z-1/(2z)+O(|z|^{-2})$, whose real part is $\log|t|-\log2+O(1/|t|)$. Remaining bounded heights are compact. [F3, F4]

2.1 In the defining formula for $\xi$, use $\Gamma(1+s/2)=(s/2)\Gamma(s/2)$ to write $\xi=(s-1)\pi^{-s/2}\Gamma(1+s/2)\zeta(s)$. The Gamma recurrence follows by integration by parts on its defining integral and meromorphic continuation. Differentiating this equality proves the first formula wherever its factors are nonzero, hence meromorphically. [F2, step 1.1, algebra]

3.1 For fixed $s$ the real summands have tails $O_s(|\operatorname{Im}\rho|^{-2})$, since $0<\operatorname{Re}\rho<1$. The same estimate applies to $\operatorname{Re}(1/\rho)$. Their absolute convergence follows from the unit-band count. Absorb the constant $\operatorname{Re}B+\sum\operatorname{Re}(1/\rho)$ and the bounded pole term into $O(1)$, obtaining the second formula. [F5, F6, step 2.1, step 1.2] ∎
