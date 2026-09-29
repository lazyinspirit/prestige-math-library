---
id: ex-nevanlinna-characteristics-of-elementary-functions
kind: example
title: "Characteristics of a monomial, an exponential and a tangent"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-characteristic-elementary-laws, def-order-of-growth-meromorphic-function, thm-complex-exponential-addition-and-real-extension, def-complex-trigonometric-and-hyperbolic-functions, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives, thm-ftc-second-part, cor-differentiable-implies-continuous, thm-continuous-implies-integrable, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-chain-rule-for-holomorphic-maps-in-several-variables, thm-isolated-zeros-holomorphic-function, thm-zero-order-factorization-holomorphic-function]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §2, Exercise 2*"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §6, Theorems 6.1–6.2 and Corollary (6.26)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Example

For each integer $d\ge1$,
$$T(r,z^d)=d\log r+O(1),\qquad T(r,\exp z)=\frac r\pi+O(1),\qquad T(r,\tan z)=\frac{2r}{\pi}+O(1)$$
as $r\to\infty$, using the normalized chordal characteristic. Here
$\tan z$ means the meromorphic quotient of complex sine by complex cosine.
Their Nevanlinna orders are respectively $0,1,1$.

## Verification

**Given:** The characteristic and order conventions, the fixed-rational
composition law, complex sine and cosine defined from the complex exponential,
the exponential modulus formula, and the stated real trigonometric facts.

[F1] For a meromorphic $h$,
$T(r,h)=m(r,\infty;h)+N(r,\infty;h)$, where the chordal proximity is the
circular mean of $\log(1/\delta(h,\infty))$
([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] If $R$ is a fixed rational map of degree $q\ge1$ and $h$ is nonconstant
meromorphic, then $T(r,R(h))=qT(r,h)+O_{R,h}(1)$
([[thm-nevanlinna-characteristic-elementary-laws]]).

[F3] For a nonconstant meromorphic $h$, its order and lower order are the
limsup and liminf of $\log T(r,h)/\log r$ on the eventual domain $r>1$,
$T(r,h)>1$ ([[def-order-of-growth-meromorphic-function]]).

[F4] $\exp(u+v)=\exp u\exp v$ for all complex $u,v$, and $\exp x=e^x$ for
real $x$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F5] For complex $z$,
$$\sin z=\frac{\exp(iz)-\exp(-iz)}{2i},\qquad \cos z=\frac{\exp(iz)+\exp(-iz)}2$$
([[def-complex-trigonometric-and-hyperbolic-functions]]).

[F6] For real $x,y$,
$\exp(x+iy)=e^x(\cos y+i\sin y)$ and
$|\exp(x+iy)|=e^x$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] Sine is strictly increasing on
$[-\pi/2+2m\pi,\pi/2+2m\pi]$ and strictly decreasing on
$[\pi/2+2m\pi,3\pi/2+2m\pi]$; cosine is strictly decreasing on
$[2m\pi,(2m+1)\pi]$ and strictly increasing on
$[(2m+1)\pi,(2m+2)\pi]$
([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F8] For real $x$,
$\sin(x+\pi/2)=\cos x$, $\cos(x+\pi/2)=-\sin x$,
$\sin(x+\pi)=-\sin x$, and $\cos(x+\pi)=-\cos x$; in particular
$\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, and $\cos\pi=-1$
([[thm-quarter-turn-values-and-shift-formulas]]).

[F9] $\sin' =\cos$, $\cos'=-\sin$, $\sin0=0$, and $\cos0=1$
([[thm-sine-and-cosine-derivatives]]).

[F10] If $G'=f$ on a compact interval and $f$ is integrable there, then
$\int_a^b f=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F11] A differentiable real function is continuous at each point where it is
differentiable ([[cor-differentiable-implies-continuous]]).

[F12] A continuous real function on a compact interval is Riemann integrable
([[thm-continuous-implies-integrable]]).

[F13] The complex exponential is defined by $\exp z=\sum_{n\ge0}z^n/n!$,
so $\exp0=1$ ([[def-complex-exponential]]).

[F14] The complex exponential is entire and its derivative is itself
([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F15] A composite of holomorphic maps is holomorphic, and its derivative is
the product of the derivatives ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[F16] A complex polynomial is entire
([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[F17] A nonzero holomorphic function has isolated zeros
([[thm-isolated-zeros-holomorphic-function]]).

[F18] A finite-order zero has a local factorization
$f(z)=(z-a)^m g(z)$ with $g(a)\ne0$
([[thm-zero-order-factorization-holomorphic-function]]).

1.1 Put $m_0(r,h)=(2\pi)^{-1}\int_0^{2\pi}\log^+|h(re^{it})|\,dt$ for an entire $h$. Since such $h$ has no poles, [F1] gives $T(r,h)=m(r,\infty;h)$. For every finite $w$, $$\log^+|w|\le\frac12\log(1+|w|^2) \le\log^+|w|+\frac12\log2.$$ Thus $m_0(r,h)\le T(r,h)\le m_0(r,h)+\frac12\log2$. [F1, algebra]
1.2 For $h(z)=z^d$, the pole count is zero and $|h(re^{it})|=r^d$ at every angle. Hence $$T(r,z^d)=\frac12\log(1+r^{2d}) =d\log r+\frac12\log(1+r^{-2d})=d\log r+O(1).$$ [F1, algebra]
1.3 Set $E(z)=\exp(2iz)$. The linear polynomial $z\mapsto2iz$ is entire by [F16], the complex exponential is entire by [F14], and [F15] shows $E$ is entire with $E'(0)=\exp'(0)\,2i=2i\exp0=2i\ne0$, using [F13]. Thus $E$ is nonconstant. [F13, F14, F15, F16, algebra]
2.1 On $|z|=r$, Euler's formula in [F6] gives $z=re^{it}=r(\cos t+i\sin t)$, so $$|\exp(\lambda re^{it})|=e^{\lambda r\cos t}\qquad(\lambda>0).$$ The logarithmic positive part is therefore $(\lambda r\cos t)^+$. From [F7], cosine is strictly decreasing on $[0,\pi]$ and strictly increasing on $[\pi,2\pi]$. By [F8] and [F9], it has values $1,0,-1,0,1$ at $0,\pi/2,\pi,3\pi/2,2\pi$, respectively. These facts show cosine is positive on $[0,\pi/2)\cup(3\pi/2,2\pi]$ and negative on $(\pi/2,3\pi/2)$. By [F11], [F12], and [F10], the cosine integrals below exist and are evaluated using the primitive $\sin t$: $$\int_0^{2\pi}(\cos t)^+\,dt =\int_0^{\pi/2}\cos t\,dt+\int_{3\pi/2}^{2\pi}\cos t\,dt =(\sin\tfrac\pi2-\sin0)+(\sin2\pi-\sin\tfrac{3\pi}2)=2.$$ Consequently $m_0(r,\exp(\lambda z))=\lambda r/\pi$. Step 1.1 now gives $T(r,\exp(\lambda z))=\lambda r/\pi+O(1)$, in particular the asserted formula for $\exp z$. [F6, F7, F8, F9, F10, F11, F12, step 1.1, algebra]
2.2 Let $R(w)=-i(w-1)/(w+1)$. This is a degree-one rational map. By [F2], $R(E)$ is the meromorphic composition to which the characteristic law applies. The definitions in [F5] and the addition law [F4] give, wherever $\cos z\ne0$, $$\frac{\sin z}{\cos z} =-i\frac{\exp(2iz)-1}{\exp(2iz)+1} =-i\frac{E(z)-1}{E(z)+1}.$$ Indeed [F4] and [F13] give $\exp(iz)\exp(-iz)=1$, so multiplying the numerator and denominator in [F5] by $\exp(iz)$ is legitimate. They give $$\cos z=\frac{\exp(-iz)(E(z)+1)}2,\qquad \sin z=\frac{\exp(-iz)(E(z)-1)}{2i}.$$ Thus $\cos z=0$ exactly when $E(z)=-1$. Since $E$ is nonconstant by step 1.3, [F17] makes each zero of $E+1$ isolated, and [F18] factors it with a finite positive order there. At such a point $E-1=-2$, so $R(E)$ has a pole of that order, while the quotient has the same pole because its numerator is nonzero. At every other point the quotient equals $R(E)$. Hence $R(E)$ is precisely the meromorphic continuation of $\sin z/\cos z$, the complex tangent used here. [F2, F4, F5, F13, F17, F18, step 1.3, algebra]
3.1 For $z=re^{it}$, [F6] and the decomposition in step 2.1 give $$\log^+|E(re^{it})|=(-2r\sin t)^+.$$ By [F7], [F8], and [F9], sine increases from $0$ to $1$ on $[0,\pi/2]$, decreases to $0$ on $[\pi/2,\pi]$, and its shift by $\pi$ changes sign. Thus it is positive on $(0,\pi)$ and negative on $(\pi,2\pi)$. By [F11], [F12], and [F10], $-\sin t$ is integrable and has primitive $\cos t$. Hence $$\int_0^{2\pi}(-\sin t)^+\,dt =\int_\pi^{2\pi}-\sin t\,dt =\cos2\pi-\cos\pi=2,$$ and $m_0(r,E)=2r/\pi$. Step 1.1 gives $T(r,E)=2r/\pi+O(1)$. [F6, F7, F8, F9, F10, F11, F12, step 1.1, step 2.1, algebra]
4.1 The numerator and denominator of $R$ are coprime linear polynomials, so $R$ has degree one. By [F2], step 1.3, step 2.2, and step 3.1, $$T(r,\tan z)=T(r,R(E(z)))=T(r,E)+O(1) =\frac{2r}{\pi}+O(1).$$ [F2, step 1.3, step 2.2, step 3.1, algebra]
5.1 For each $d\ge1$, step 1.2 has $T(r,z^d)=d\log r+O(1)>1$ eventually, so $\log T(r,z^d)/\log r\to0$. Steps 2.1 and 4.1 give positive linear growth for $\exp z$ and $\tan z$, so for either function $\log T(r,h)=\log r+O(1)$ and the ratio tends to $1$. The three functions are nonconstant (the monomial has $d\ge1$, $\exp z$ has derivative $1$ at zero by [F14], and step 1.3 shows $E$ is nonconstant; the positive linear growth of $R(E)$ in step 4.1 also rules out a constant tangent). Thus [F3] applies; in each case the limsup and liminf agree with the computed limit. [F3, F14, step 1.2, step 2.1, step 1.3, step 4.1, algebra] ∎
