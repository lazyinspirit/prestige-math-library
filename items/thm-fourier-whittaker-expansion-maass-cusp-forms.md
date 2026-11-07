---
id: thm-fourier-whittaker-expansion-maass-cusp-forms
kind: theorem
title: "Fourier–Whittaker Expansion of a Maass Cusp Form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-maass-spectral-parameter
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed p. 28, formula (4.8): the Fourier–Whittaker expansion at infinity for a weight-zero Maass cusp form."
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§§3.3–3.4: Maass forms, Whittaker expansions, and the Fourier–Whittaker formula."
---

## Statement

Let $u$ be a weight-zero Maass cusp form of level $N$ and even unitary
nebentypus $\chi$, with eigenvalue $\lambda\ge0$ and spectral parameter $t$
given by $\lambda=1/4+t^2$, $t\in\mathbb R\cup i[0,1/2]$. At the cusp
$\infty$, for every $z=x+iy\in\mathbb H$,
$$u(x+iy)=\sum_{n\in\mathbb Z\setminus\{0\}}\rho_u(n)\sqrt y\,K_{it}(2\pi|n|y)e^{2\pi inx},$$
where $\rho_u(n)\in\mathbb C$ are constants and
$$K_{it}(r)=\int_0^\infty e^{-r\cosh v}\cos(tv)\,dv\qquad(r>0)$$
is the decaying modified-Bessel solution of order $it$. The series converges
absolutely and uniformly in $x$ for each fixed $y>0$.

## Statement references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-maass-spectral-parameter]]

## Facts & Assumptions

**Given:** A smooth $1$-periodic $L^2$-function $u$ on $\mathbb H$ satisfying
$\Delta_{\mathbb H}u=(1/4+t^2)u$, with zero constant Fourier coefficient at
$\infty$.

[F1] A weight-zero Maass cusp form is smooth, transforms by its level character,
is square-integrable, satisfies $\Delta_{\mathbb H}u=\lambda u$, and has
zero constant coefficient at the singular cusp $\infty$.
([[def-weight-zero-maass-form-on-gamma0n]])

[F2] Its spectral parameter satisfies $\lambda=1/4+t^2$ with
$t\in\mathbb R\cup i[0,1/2]$.
([[def-maass-spectral-parameter]])

[F3] The Fejér means of a continuous one-periodic function converge uniformly
to that function. ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]])

## Proof

1.1 For each $y>0$ define the Fourier coefficient $a_n(y)=\int_0^1u(x+iy)e^{-2\pi inx}\,dx$. The translation matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ lies in $\Gamma_0(N)$ and its lower-right entry is $1$, so [F1] makes $x\mapsto u(x+iy)$ continuous and one-periodic. Twice integrating by parts in $x$ gives $a_n(y)=O_y(|n|^{-2})$ for $n\ne0$; therefore its Fourier series is absolutely and uniformly convergent in $x$. [given, F1, algebra]

2.1 The uniformly convergent series in step 1.1 has the same Fourier coefficients as $u(\cdot+iy)$. Its Fejér means therefore equal those of $u(\cdot+iy)$; by [F3] both sequences of means converge uniformly to their respective continuous limits. The limits agree, so the Fourier series reconstructs $u(x+iy)$ for every $x$. [F3, step 1.1, algebra]

2.2 Applying $\Delta_{\mathbb H}u=(1/4+t^2)u$ to the $n$th Fourier coefficient and integrating twice by parts in $x$ gives $a_n''(y)+\left(\frac{1/4+t^2}{y^2}-(2\pi n)^2\right)a_n(y)=0.$ The boundary terms vanish because $u$ and its first $x$-derivative are one-periodic. [given, F1, F2, step 1.1, algebra]

3.1 For $n=0$, the two independent solutions of the equation in step 2.2 are $y^{1/2+it}$ and $y^{1/2-it}$, with $y^{1/2}\log y$ replacing their difference when $t=0$. The zero constant-term condition in [F1] sets $a_0(y)=0$ for every $y>0$. [F1, step 2.2, algebra]

3.2 Fix $n\ne0$, put $r=2\pi|n|y$, and write $a_n(y)=\sqrt y\,v_n(r)$. Direct differentiation in the equation of step 2.2 gives $r^2v_n''(r)+rv_n'(r)-(r^2+(it)^2)v_n(r)=0.$ [F2, step 2.2, algebra]

4.1 For $r>0$, differentiating under the integral defining $K_{it}(r)$ is valid because $e^{-r\cosh v}$ dominates every fixed exponential in $v$. Writing $g(v)=e^{-r\cosh v}$, direct differentiation gives $r^2K_{it}''+rK_{it}'-r^2K_{it}= \int_0^\infty(r^2\sinh^2v-r\cosh v)g(v)\cos(tv)\,dv.$ Since $\frac{d}{dv}(\sinh v\,g(v))=(\cosh v-r\sinh^2v)g(v)$, integration by parts has zero boundary terms at $0$ and $\infty$ and changes the right-hand side to $-rt\int_0^\infty\sinh v\,g(v)\sin(tv)\,dv$. Using $g'(v)=-r\sinh v\,g(v)$ and integrating by parts again gives $-t^2\int_0^\infty g(v)\cos(tv)\,dv=-t^2K_{it}(r)$, proving $r^2K_{it}''(r)+rK_{it}'(r)-(r^2+(it)^2)K_{it}(r)=0.$ For the large-$r$ behavior, substitute $w=\sqrt r\,v$ to obtain $e^r\sqrt r\,K_{it}(r)=\int_0^\infty e^{-r(\cosh(w/\sqrt r)-1)}\cos(tw/\sqrt r)\,dw.$ For $t\in\mathbb R$, the integrand is dominated by $e^{-w^2/2}$; for $t=i\tau$, $0\le\tau\le1/2$, it is dominated for $r\ge1$ by $e^{-w^2/2+\tau w}$, which is integrable. Dominated convergence therefore gives $\lim_{r\to\infty}e^r\sqrt r\,K_{it}(r)= \int_0^\infty e^{-w^2/2}\,dw=\sqrt{\pi/2}.$ Thus $K_{it}$ is a nonzero decaying solution of the same equation as $v_n$. [step 3.2, construct, algebra]

5.1 The positive asymptotic in step 4.1 makes $K_{it}$ nonzero for all sufficiently large $r$. On such a half-line, reduction of order gives a second solution $K_{it}(r)\int_{r_0}^{r}\frac{ds}{sK_{it}(s)^2}.$ The asymptotic in step 4.1 shows this solution grows like a nonzero constant times $r^{-1/2}e^r$. On the other hand, Cauchy–Schwarz and the $L^2$ condition in [F1] give $\int_{Y}^{\infty}|a_n(y)|^2y^{-2}\,dy<\infty$; the growing solution violates this bound. Hence $v_n$ is a scalar multiple of $K_{it}$. [F1, step 4.1, algebra]

6.1 For each $n\ne0$, let $\rho_u(n)$ be the scalar from step 5.1. Then $a_n(y)=\rho_u(n)\sqrt yK_{it}(2\pi|n|y)$; step 3.1 supplies the zero coefficient. Substitution in the uniformly convergent Fourier series established in step 2.1 gives the stated expansion. [step 2.1, step 3.1, step 5.1, algebra] ∎
