---
id: lem-binet-loggamma-right-halfplane-identity
kind: lemma
title: Binet integral identity for the right-half-plane log-Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-loggamma-right-halfplane-branch, lem-loggamma-series-convergence-and-gamma-identity, def-euler-mascheroni-constant, thm-euler-mascheroni-constant-and-harmonic-asymptotic, thm-real-stirling-formula, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-ftc-second-part, thm-continuous-implies-integrable, thm-integration-by-parts, thm-logarithm-derivative-and-integral, def-natural-logarithm, thm-natural-logarithm-laws, lem-changing-a-function-at-finitely-many-points, thm-additivity-over-subintervals]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, Stirling's formula and Binet's integral
      url: https://dlmf.nist.gov/5.11
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For $\operatorname{Re}z>0$, let $\ell_+(z)$ be the branch in
[[def-loggamma-right-halfplane-branch]]. Define
$$\Phi(u)=\int_0^u\bigl(\lfloor v\rfloor-v+1/2\bigr)\,dv.$$
Then the absolutely convergent integral satisfies
$$\ell_+(z)=\left(z-\frac12\right)\operatorname{Log}z-z+ \frac12\log(2\pi)+\int_0^\infty\frac{\Phi(u)}{(u+z)^2}\,du.$$
On each unit interval, $\Phi(n+t)=t(1-t)/2$ for $0\le t\le1$; hence
$0\le\Phi(u)\le1/8$.

## Facts & Assumptions

**Given:** $\operatorname{Re}z>0$ and an integer $N\ge2$ tending to
infinity in the proof.

[F1] [[def-loggamma-right-halfplane-branch]]: $\ell_+$ is defined by
$$-\operatorname{Log}z-\gamma_Ez+ \sum_{k=1}^{\infty}\left(\frac zk-\operatorname{Log}(1+z/k)\right).$$

[F2] [[lem-loggamma-series-convergence-and-gamma-identity]]: the defining
series converges locally uniformly on the right half-plane.

[F3] [[def-euler-mascheroni-constant]] and
[[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]:
$\gamma_E=\gamma=\lim_{n\to\infty}(H_n-\log n)$.

[F4] [[thm-real-stirling-formula]]:
$n!\sim\sqrt{2\pi n}(n/e)^n$ as $n\to\infty$ through positive integers.

[F5] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}'(w)=1/w$ on the slit plane.

[F6] [[thm-continuous-implies-integrable]] and
[[thm-ftc-second-part]]: continuous functions on compact intervals are
integrable, and an integrable derivative integrates to its endpoint
difference; the real statement applies to real and imaginary parts of a
complex-valued path.

[F7] [[thm-integration-by-parts]],
[[lem-changing-a-function-at-finitely-many-points]], and
[[thm-additivity-over-subintervals]]: on each unit interval, integration by
parts applies to the continuous polynomial restrictions of $\Phi$; changing
the derivative integrand at the finitely many endpoints does not change its
integral, and the panel integrals add.

[F8] [[thm-logarithm-derivative-and-integral]]: the real logarithm is
continuous on $(0,\infty)$ and satisfies $\log'(x)=1/x$.

[F9] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]:
writing $e=\exp(1)$ gives $\log e=1$, and
$\log(xy)=\log x+\log y$ for positive $x,y$.

## Proof
1.1 Define $f(u)=\lfloor u\rfloor-u+1/2$. For $u=n+t$ with integer $n\ge0$ and $0\le t<1$, $f(u)=1/2-t$. Each full unit interval has integral zero, and its partial integral is $t(1-t)/2$. Therefore $\Phi(n+t)=t(1-t)/2$, $\Phi(n)=0$, and $0\le\Phi\le1/8$. [given, F7, algebra]

2.1 On $[n,n+1]$, $\Phi'=f$ and [F7] gives $$\int_n^{n+1}\frac{f(u)}{u+z}\,du =\left[\frac{\Phi(u)}{u+z}\right]_{n}^{n+1} +\int_n^{n+1}\frac{\Phi(u)}{(u+z)^2}\,du =\int_n^{n+1}\frac{\Phi(u)}{(u+z)^2}\,du,$$ since $\Phi(n)=\Phi(n+1)=0$. Summing over $n<N$ gives $$I_N(z):=\int_0^N\frac{f(u)}{u+z}\,du =\int_0^N\frac{\Phi(u)}{(u+z)^2}\,du.$$ Because $|u+z|\ge u+\operatorname{Re}z$ and $\Phi\le1/8$, the right-hand side converges absolutely as $N\to\infty$. [F5, F6, F7, step 1.1, algebra]

2.2 On each $[n,n+1]$, write $f(u)=n+\tfrac12-u=(n+z+\tfrac12)-(u+z)$. By [F5] the function $(n+z+\tfrac12)\operatorname{Log}(u+z)-u$ has derivative $f(u)/(u+z)$; its derivative is continuous and integrable on the compact interval by [F6]. Applying [F6] and summing the resulting endpoint differences yields $$I_N(z)=(N+z-\tfrac12)\operatorname{Log}(N+z) -(z+\tfrac12)\operatorname{Log}z-N-\log((N-1)!) -zH_{N-1}+\sum_{k=1}^{N-1}\left(\frac zk-\operatorname{Log}(1+z/k)\right).$$ The coefficient of each internal $\operatorname{Log}(k+z)$ in the endpoint sum is $-1$. For $k\ge1$, $\operatorname{Log}(k+z)=\log k+\operatorname{Log}(1+z/k)$ because $k>0$ is real and multiplication by it preserves the principal argument; [F9] gives $\sum_{k=1}^{N-1}\log k=\log((N-1)!)$. These identities give the displayed form. [given, F5, F6, F9, step 1.1, algebra]

3.1 Add $-\operatorname{Log}z-\gamma_Ez$ to the finite sum in step 2.2. By [F1]--[F3], the resulting left side converges to $\ell_+(z)$, while $$\ell_+(z)=I_N(z)-(N+z-\tfrac12)\operatorname{Log}(N+z) +(z-\tfrac12)\operatorname{Log}z+N+\log((N-1)!) +z(H_{N-1}-\gamma_E)+o(1).$$ [F1, F2, F3, step 2.2, algebra]

4.1 Taking logarithms in [F4] is valid by continuity [F8]. The laws [F9] and $e=\exp(1)$ give $$\log(n!)=(n+\tfrac12)\log n-n+\tfrac12\log(2\pi)+o(1).$$ At $n=N-1$, since $\log(1-1/N)=-1/N+O(N^{-2})$, this becomes $$\log((N-1)!)=(N-\tfrac12)\log N-N+\tfrac12\log(2\pi)+o(1).$$ The logarithm estimate follows by integrating $1/(1-t)$ on $[0,1/N]$; the difference from $1/N$ is bounded by $1/(N^2(1-1/N))$. Also [F3] gives $H_{N-1}-\gamma_E=\log N+o(1)$. Finally, for fixed $z$ and $N>2|z|$, $$\operatorname{Log}(N+z)=\log N+z/N+O_z(N^{-2}),$$ since $N>0$ and $1+z/N,N+z$ lie in the right half-plane, so $\operatorname{Log}(N+z)=\log N+\operatorname{Log}(1+z/N)$. By [F5] and [F6], $\operatorname{Log}(1+w)-w=-\int_0^1tw^2/(1+tw)\,dt$ for $w=z/N$; here $|1+tw|\ge1$ when $\operatorname{Re}z>0$. Therefore $(N+z-\tfrac12)\operatorname{Log}(N+z) =(N+z-\tfrac12)\log N+z+o(1)$. [F3, F4, F5, F6, F8, F9, step 3.1, algebra]

5.1 Substitute these asymptotics into step 3.1. The coefficients of $\log N$ cancel, and $N$ cancels the $-N$ in the factorial term, leaving $$\ell_+(z)=\lim_{N\to\infty}I_N(z) +(z-\tfrac12)\operatorname{Log}z-z+\tfrac12\log(2\pi).$$ By step 2.1, the limit is the absolutely convergent integral of $\Phi(u)/(u+z)^2$. This is the claimed identity. [step 2.1, step 3.1, step 4.1, algebra] ∎