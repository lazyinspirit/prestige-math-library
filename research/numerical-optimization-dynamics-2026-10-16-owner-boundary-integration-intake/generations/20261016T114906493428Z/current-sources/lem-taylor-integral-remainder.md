---
id: lem-taylor-integral-remainder
kind: lemma
title: Taylor's theorem with an integral remainder
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-and-derivative-on-real-interval, lem-fundamental-theorem-and-integration-by-parts, lem-riemann-integral-linearity, lem-continuous-functions-riemann-integrable, lem-real-and-complex-modulus-rules]
sources:
  references:
    - title: "Siegfried M. Rump, Verification Methods: Rigorous Results Using Floating-Point Arithmetic, §11.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.3"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

Let $n\ge0$, let $f$ have continuous derivatives through order $n+1$ on an
open interval containing the segment between $c$ and $x$, and put
$$
P_n(x)=\sum_{j=0}^n\frac{f^{(j)}(c)}{j!}(x-c)^j.
$$
Then
$$
f(x)-P_n(x)=\frac1{n!}\int_c^x f^{(n+1)}(t)(x-t)^n\,dt.
$$
If $M\ge0$ and $|f^{(n+1)}(t)|\le M$ between $c$ and $x$, then
$$
|f(x)-P_n(x)|\le\frac{M|x-c|^{n+1}}{(n+1)!}.
$$
The formula and bound include $x=c$ and oriented endpoints.

## Facts & Assumptions

**Given:** Derivatives defined by difference quotients, the oriented
Riemann integral of continuous functions, and the stated derivative bound.

[F1] [[def-continuity-and-derivative-on-real-interval]]: higher derivatives
are defined recursively; $C^{n+1}$ means they exist and are continuous.

[L1] [[lem-fundamental-theorem-and-integration-by-parts]]: for $C^1$ functions,
$\int f'=f(b)-f(a)$ and
$\int uv'=u(b)v(b)-u(a)v(a)-\int u'v$.

[L2] [[lem-riemann-integral-linearity]]: integrals are homogeneous and
additive in the integrand.

[L3] [[lem-real-and-complex-modulus-rules]]: $|uv|=|u||v|$ and the triangle
inequality holds for real values.

[L4] [[lem-continuous-functions-riemann-integrable]]: the integral is
monotone in the integrand on a forward interval.

## Proof

1.1 For fixed $f,c,x$, define $I_m=\frac1{m!}\int_c^x f^{(m+1)}(t)(x-t)^m\,dt$ for $0\le m\le n$. For $m=0$, [L1] gives $I_0=f(x)-f(c)$. For $m\ge1$, apply integration by parts [L1] to $u(t)=f^{(m)}(t)$ and $v(t)=(x-t)^m/m!$. Since $v(x)=0$, $v(c)=(x-c)^m/m!$, and $v'(t)=-(x-t)^{m-1}/(m-1)!$, it gives $$ I_m=I_{m-1}-\frac{f^{(m)}(c)(x-c)^m}{m!}. $$ Induction from $I_0$ yields $I_n=f(x)-\sum_{j=0}^n f^{(j)}(c)(x-c)^j/j!=f(x)-P_n(x)$. The oriented integration-by-parts identity makes the same recurrence valid when $x<c$; if $x=c$, both sides are zero. [given, F1, L1, algebra, induction]

2.1 Let $d=|x-c|$ and $\psi(t)=f^{(n+1)}(t)(x-t)^n/n!$. This is continuous. The triangle inequality in [L3], applied in both directions, gives $\bigl||\psi(s)|-|\psi(t)|\bigr|\le|\psi(s)-\psi(t)|$, so $|\psi|$ is continuous too and both functions are integrable. By [L2] and [L4], the integral is monotone in the integrand, so $$\left|\int_c^x\psi(t)\,dt\right| \le\int_{\min(c,x)}^{\max(c,x)}|\psi(t)|\,dt \le\frac{M}{n!}\int_{\min(c,x)}^{\max(c,x)}|x-t|^n\,dt.$$ The first inequality follows by integrating $-|\psi|\le\psi\le|\psi|$ on the forward interval and using $\int(-|\psi|)=-\int|\psi|$; orientation does not change the absolute value. The last power integral is $d^{n+1}/(n+1)$ by [L1], using its polynomial antiderivative on the segment to either side of $x$. Thus the bound is $Md^{n+1}/(n+1)!$. Combining this with step 1.1 proves the result. [given, L1, L2, L3, L4, step 1.1, algebra] ∎

