---
id: ex-fourier-series-of-a-sawtooth
kind: example
title: The Fourier series of a sawtooth and the Basel sum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fourier-coefficients-and-trigonometric-polynomials, thm-l-two-fourier-series-converges-in-mean-square, thm-parseval-identity-for-fourier-series, def-countable-choice, thm-integration-by-parts, thm-ftc-second-part, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, lem-derivative-of-a-power, thm-sine-and-cosine-derivatives, thm-chain-rule, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, def-square-summable-family-on-an-arbitrary-index-set]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Henri P. Gavin, Dynamic Periodic Response to Periodic Forcing, System Identification course notes, Fall 2013 — §4.2, p.7"
      url: "https://people.duke.edu/~hpgavin/SystemID/CourseNotes/Fourier.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.64–66"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $f$ be the
class in $L^2(\mathbb T;\mathbb C)$ represented on the fundamental domain
$[0,1)$ by $f(t)=t$ for $0\le t<\tfrac12$ and $f(t)=t-1$ for
$\tfrac12\le t<1$; this is the $1$-periodic extension of $x\mapsto x$ on
$(-\tfrac12,\tfrac12)$, and the values at the endpoints may be chosen
arbitrarily, as they do not change the class. Then

$$\widehat f(0)=0,\qquad \widehat f(k)=\frac{(-1)^{k+1}}{2\pi ik}\quad(k\ne0),$$

the Fourier series of $f$ converges to $f$ in mean square
([[thm-l-two-fourier-series-converges-in-mean-square]]), and Parseval's identity
gives the Basel sum $\sum_{k=1}^{\infty}k^{-2}=\pi^2/6$. Only $L^2$ convergence
is asserted; no pointwise claim is made at the discontinuity.

## Facts & Assumptions

[A1] $\widehat f(k)=\int_{\mathbb T}f\,e_{-k}\,dm_{\mathbb T}$ and the torus integral is represented on $[0,1)$, so $\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}\,dt$ for the representative above; Parseval's identity holds in the form $\|f\|_2^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-parseval-identity-for-fourier-series]]).

[A2] For real $u,v$ differentiable with integrable derivatives, $\int_a^bu\,v'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$; and $\int_a^bG'=G(b)-G(a)$ for differentiable $G$ with integrable derivative ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

[A3] The derivatives of sine and cosine are cosine and minus sine, the chain rule gives the derivatives of $t\mapsto\sin(ct)$ and $t\mapsto\cos(ct)$, and power functions have the expected derivatives; continuous functions on a closed interval are Riemann integrable, and a bounded Riemann integrable function on $[a,b]$ is Lebesgue measurable with the same integral ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[lem-derivative-of-a-power]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A4] $\sin(m\pi)=0$ and $\cos(m\pi)=(-1)^m$ for integers $m$: the zero-set theorem gives the sine values, while $\cos(x+\pi)=-\cos x$ and $\cos0=1$ give the cosine values by integer induction ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[A5] The characters satisfy $\int_{\mathbb T}e_m\,dm_{\mathbb T}=1$ for $m=0$ and $0$ otherwise; the coefficient family is square-summable and its total square sum is the supremum of the symmetric partial sums ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

## Verification

**Proof technique:** direct.

**Given:** The class $f$ represented by $t\mapsto t$ on $[0,\tfrac12)$ and $t\mapsto t-1$ on $[\tfrac12,1)$.

1.1 The zeroth coefficient vanishes: $\widehat f(0)=\int_0^1f(t)\,dt=\int_0^{1/2}t\,dt+\int_{1/2}^1(t-1)\,dt=\frac18+\bigl[\frac{t^2}{2}-t\bigr]_{1/2}^1=\frac18-\frac12+\frac38=0$. [A1, A3, algebra]

1.2 For $k\ne0$, write $e^{-2\pi ikt}=\cos(2\pi kt)-i\sin(2\pi kt)$ and integrate by parts on the two halves. Integrating $t\cos(2\pi kt)$ and $(t-1)\cos(2\pi kt)$ with antiderivatives $\frac{\sin(2\pi kt)}{2\pi k}$ and $\frac{\cos(2\pi kt)}{4\pi^2k^2}$ gives $$\int_0^{1/2}t\cos(2\pi kt)\,dt=\frac{\sin(\pi k)}{4\pi k}+\frac{\cos(\pi k)-1}{4\pi^2k^2},\qquad \int_{1/2}^{1}(t-1)\cos(2\pi kt)\,dt=\frac{\sin(\pi k)}{4\pi k}+\frac{1-\cos(\pi k)}{4\pi^2k^2},$$ so $\int_0^1f(t)\cos(2\pi kt)\,dt=\frac{\sin(\pi k)}{2\pi k}=0$; and integrating $t\sin(2\pi kt)$ and $(t-1)\sin(2\pi kt)$ with antiderivatives $-\frac{t\cos(2\pi kt)}{2\pi k}+\frac{\sin(2\pi kt)}{4\pi^2k^2}$ and $-\frac{(t-1)\cos(2\pi kt)}{2\pi k}+\frac{\sin(2\pi kt)}{4\pi^2k^2}$ gives $$\int_0^{1/2}t\sin(2\pi kt)\,dt=-\frac{\cos(\pi k)}{4\pi k}+\frac{\sin(\pi k)}{4\pi^2k^2},\qquad \int_{1/2}^{1}(t-1)\sin(2\pi kt)\,dt=-\frac{\cos(\pi k)}{4\pi k},$$ so $\int_0^1f(t)\sin(2\pi kt)\,dt=-\frac{\cos(\pi k)}{2\pi k}=-\frac{(-1)^k}{2\pi k}$. [A2, A3, A4, algebra]

2.1 Adding the real and imaginary contributions, $\widehat f(k)=-i\int_0^1f(t)\sin(2\pi kt)\,dt=\frac{i(-1)^k}{2\pi k}=\frac{(-1)^{k+1}}{2\pi ik}$ for every $k\ne0$. [step 1.2, A4, algebra]

3.1 Parseval's identity gives $\frac{1}{12}=\|f\|_2^2=\sum_{k\ne0}\frac{1}{4\pi^2k^2}=\frac{1}{2\pi^2}\sum_{k\ge1}\frac{1}{k^2}$, where $\|f\|_2^2=\int_0^1f(t)^2\,dt=2\int_0^{1/2}t^2\,dt=\frac{1}{12}$; multiplying by $2\pi^2$ gives $\sum_{k\ge1}k^{-2}=\pi^2/6$. [step 1.1, step 2.1, A1, A5, algebra]

4.1 The coefficients of steps 1.1 and 2.1 are the displayed ones, the Fourier series converges to $f$ in mean square, and the Parseval computation of step 3.1 yields the Basel sum; the endpoint values of the representative are irrelevant, and the claim is an $L^2$ statement only. [step 1.1, step 2.1, step 3.1, A5] ∎
