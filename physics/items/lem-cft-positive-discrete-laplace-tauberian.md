---
id: lem-cft-positive-discrete-laplace-tauberian
kind: lemma
title: A positive discrete Laplace asymptotic determines cumulative growth
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-euler-gamma-function
  - cor-weierstrass-approximation-on-the-unit-interval
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-euler-gamma-function: mathematical-premise
  cor-weierstrass-approximation-on-the-unit-interval: mathematical-premise
axiom_use: "No choice principle is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Duccio Pappadopulo, Slava Rychkov, Johnny Espin, Riccardo Rattazzi, OPE Convergence in Conformal Field Theory, arXiv:1208.6449v3
      url: https://arxiv.org/pdf/1208.6449v3
      locator: "§4.2, equations (4.5)–(4.13), PDF pp. 14–16: the positive weighted spectral Laplace transform and Hardy–Littlewood asymptotic."
---

## Statement

Let $\alpha>0$. Let $(E_n)_{n\ge0}$ and $(a_n)_{n\ge0}$ be real sequences with $E_n\ge0$ and $a_n\ge0$, and define the nonnegative series
$$L(s):=\sum_{n=0}^{\infty}a_n e^{-sE_n}\qquad (s>0)$$
as the increasing limit of its finite partial sums. Assume $L(s)<\infty$ for every $s>0$ and $\lim_{s\downarrow0}s^\alpha L(s)=1$. For $R>0$ put $F(R):=\sum_{E_n\le R}a_n$, again as a nonnegative sum. Then
$$\lim_{R\to\infty}\frac{F(R)}{R^\alpha}=\frac{1}{\Gamma(\alpha+1)}.$$
Here $\Gamma$ is Euler's integral on the positive real axis ([[def-euler-gamma-function]]). This is the exact positive-discrete special case required by the selected CFT spectral channel; it assumes neither smoothness nor a density for the weights $a_n$.

## Statement references

[[def-euler-gamma-function]]

[[cor-weierstrass-approximation-on-the-unit-interval]]

## Facts & Assumptions

**Given:** $\alpha>0$, nonnegative energies $E_n$, nonnegative weights $a_n$, a finite Laplace series $L(s)$ for all $s>0$, and $s^\alpha L(s)\to1$ as $s\downarrow0$.

[F1] [[def-euler-gamma-function]]: for $\alpha>0$,
$$\Gamma(\alpha)=\int_0^\infty t^{\alpha-1}e^{-t}\,dt,$$
with the real logarithm convention in the power.

[F2] [[cor-weierstrass-approximation-on-the-unit-interval]]: every continuous real function on $[0,1]$ is uniformly approximable by polynomials.

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 For $R>0$, $F(R)\le e\,L(1/R)<\infty$, because every term with $E_n\le R$ obeys $e^{-E_n/R}\ge e^{-1}$. Define the positive linear functional on bounded real functions $f:[0,1]\to\mathbb R$ by $$\Lambda_R(f):=R^{-\alpha}\sum_{n=0}^{\infty}a_n e^{-E_n/R}f(e^{-E_n/R}).$$ The series is absolutely convergent since its absolute value is at most $\|f\|_\infty R^{-\alpha}L(1/R)$, and $\Lambda_R(1)=R^{-\alpha}L(1/R)\to1$. [given, algebra]

2.1 For every integer $k\ge0$, the moment identity $$\Lambda_R(u^k)=R^{-\alpha}L((k+1)/R)$$ holds term by term. The assumed small-$s$ asymptotic therefore gives $\Lambda_R(u^k)\to(k+1)^{-\alpha}$. [step 1.1, given, algebra]

3.1 Define $$\Lambda_0(f):=\frac1{\Gamma(\alpha)}\int_0^\infty e^{-x}x^{\alpha-1}f(e^{-x})\,dx$$ for bounded continuous $f$. Its absolute value is at most $\|f\|_\infty$, because the positive density has integral $\Gamma(\alpha)$. Substitution $t=(k+1)x$ in the Euler integral gives $$\Lambda_0(u^k)=\frac1{\Gamma(\alpha)}\int_0^\infty e^{-(k+1)x}x^{\alpha-1}\,dx=(k+1)^{-\alpha},$$ so the moments in step 2.1 converge to the moments of $\Lambda_0$. [F1, step 2.1, algebra]

4.1 For any polynomial $p$, step 2.1 gives $\Lambda_R(p)\to\Lambda_0(p)$ by linearity and the finitely many monomial moments. For continuous $f:[0,1]\to\mathbb R$ and $\varepsilon>0$, choose $p$ with $\|f-p\|_\infty<\varepsilon$ by [F2]. Since $\Lambda_R(1)\to1$, the positive-functional bounds $$|\Lambda_R(f-p)|\le\varepsilon\Lambda_R(1),\qquad |\Lambda_0(f-p)|\le\varepsilon$$ show $\Lambda_R(f)\to\Lambda_0(f)$. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Put $a=e^{-1}$. Let $g:[0,1]\to(0,\infty)$ equal $2/a$ on $[0,a/2]$ and $1/u$ on $[a/2,1]$; it is continuous. For $0<\delta<a/2$, let $\chi^-_\delta$ be $0$ on $[0,a]$, linear from $0$ to $1$ on $[a,a+\delta]$, and $1$ on $[a+\delta,1]$. Let $\chi^+_\delta$ be $0$ on $[0,a-\delta]$, linear from $0$ to $1$ on $[a-\delta,a]$, and $1$ on $[a,1]$. Then $g\chi^-_\delta\le g\mathbf1_{[a,1]}\le g\chi^+_\delta$. By step 4.1 their $\Lambda_R$-limits are their $\Lambda_0$-values; the difference of these two limiting integrals tends to zero as $\delta\downarrow0$, since the corresponding $x$-intervals shrink to $x=1$ and the density $e^{-x}x^{\alpha-1}/\Gamma(\alpha)$ is bounded in a neighborhood of $1$. Therefore $\Lambda_R(g\mathbf1_{[a,1]})\to\Lambda_0(g\mathbf1_{[a,1]})$. [step 4.1, algebra]

6.1 In the series for $\Lambda_R(g\mathbf1_{[a,1]})$, the indicator selects exactly $E_n\le R$, and $g(e^{-E_n/R})=e^{E_n/R}$ on that set. The exponential factors cancel, giving $$\Lambda_R(g\mathbf1_{[a,1]})=R^{-\alpha}F(R).$$ The candidate limit is $$\Lambda_0(g\mathbf1_{[a,1]})=\frac1{\Gamma(\alpha)}\int_0^1x^{\alpha-1}\,dx=\frac{1}{\alpha\Gamma(\alpha)}.$$ Integration by parts in the Euler integral gives $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$: the endpoint terms $t^\alpha e^{-t}$ vanish at $0$ because $\alpha>0$, and at $+\infty$ by exponential decay. Thus the limit is $1/\Gamma(\alpha+1)$, proving the statement. [F1, step 5.1, algebra] ∎
