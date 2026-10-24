---
id: lem-jordans-lemma-rational-functions
kind: lemma
title: "Jordan's lemma for rational functions of one complex variable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       lem-large-semicircle-vanishing,
       cor-second-derivative-characterises-convexity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3 §2.1"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: null
---

## Statement

Let $\lambda>0$, let $R$ be a rational function, and let
$\gamma_T^+(t)=Te^{it}$ for $0\le t\le\pi$. Assume that $\gamma_T^+$ meets no
pole of $R$ for all sufficiently large $T$, and that

$\sup_{0\le t\le\pi}|\,\gamma_T^+(t)\,R(\gamma_T^+(t))\,|\longrightarrow0 \qquad(T\to\infty).$

Then

$\int_{\gamma_T^+}e^{i\lambda z}R(z)\,dz\longrightarrow0 \qquad(T\to\infty).$

## Facts & Assumptions

**Given:** A real number $\lambda>0$, a rational function $R$, and the upper semicircles $\gamma_T^+(t)=Te^{it}$.

[L1] If a twice differentiable function on an interval has nonnegative second derivative, then it is convex ([[cor-second-derivative-characterises-convexity]]).

## Proof

**Proof technique:** direct.

1.1 For $z=Te^{it}$ on the upper semicircle, $|e^{i\lambda z}|=|e^{i\lambda T(\cos t+i\sin t)}|=e^{-\lambda T\sin t}.$ [given, algebra]

1.2 On $[0,\pi/2]$ the function $g(t)=-\sin t$ has [L1, algebra] $g''(t)=\sin t\ge0$, so makes $g$ convex there. A convex graph lies below the chord joining its endpoint values, hence $-\sin t\le-2t/\pi$ and therefore $\sin t\ge\frac{2t}{\pi}\qquad\left(0\le t\le\frac{\pi}{2}\right).$ By symmetry, also $\sin t\ge\frac{2(\pi-t)}{\pi}\qquad\left(\frac{\pi}{2}\le t\le\pi\right).$ [L1]

2.1 Put $M_T:=\sup_{0\le t\le\pi}|\,\gamma_T^+(t)R(\gamma_T^+(t))\,|.$ Then along the arc $|e^{i\lambda z}R(z)\,dz| \le e^{-\lambda T\sin t}\frac{M_T}{T}\,T\,dt =M_Te^{-\lambda T\sin t}\,dt.$ So $\left|\int_{\gamma_T^+}e^{i\lambda z}R(z)\,dz\right| \le M_T\int_0^\pi e^{-\lambda T\sin t}\,dt.$ [step 1.1, given]

3.1 Splitting the integral at $\pi/2$ and using step 1.2 gives $\int_0^\pi e^{-\lambda T\sin t}\,dt \le 2\int_0^{\pi/2}e^{-2\lambda Tt/\pi}\,dt =\frac{\pi}{\lambda T}\left(1-e^{-\lambda T}\right) \le\frac{\pi}{\lambda T}.$ Hence $\left|\int_{\gamma_T^+}e^{i\lambda z}R(z)\,dz\right| \le\frac{\pi M_T}{\lambda T}.$ [step 2.1, step 1.2, algebra]

4.1 Since $M_T\to0$, the bound in step 3.1 tends to $0$. Therefore the arc integral tends to $0$. [step 3.1] ∎
