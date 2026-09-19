---
id: ex-fourier-series-of-a-square-wave
kind: example
title: The Fourier series of a square wave and the odd reciprocal-square sum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fourier-coefficients-and-trigonometric-polynomials, thm-l-two-fourier-series-converges-in-mean-square, thm-parseval-identity-for-fourier-series, def-countable-choice, thm-ftc-second-part, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-sine-and-cosine-derivatives, thm-chain-rule, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, def-square-summable-family-on-an-arbitrary-index-set]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Henri P. Gavin, Dynamic Periodic Response to Periodic Forcing, System Identification course notes, Fall 2013 — §4.1, p.6"
      url: "https://people.duke.edu/~hpgavin/SystemID/CourseNotes/Fourier.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.64–66"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $s$ be the
class in $L^2(\mathbb T;\mathbb C)$ represented on $[0,1)$ by $s(t)=1$ for
$0\le t<\tfrac12$ and $s(t)=-1$ for $\tfrac12\le t<1$, the $1$-periodic
extension of the sign function on $(-\tfrac12,\tfrac12)$; the endpoint values
are immaterial for the class. Then

$$\widehat s(0)=0,\qquad \widehat s(k)=\frac{1-(-1)^k}{\pi ik}\quad(k\ne0),$$

the Fourier series of $s$ converges to $s$ in mean square
([[thm-l-two-fourier-series-converges-in-mean-square]]), and Parseval's identity
gives $\sum_{k\ \text{odd},\,k\ge1}k^{-2}=\pi^2/8$. The example deliberately
claims **norm** convergence and nothing else: it asserts no pointwise
convergence of the series to the values of this representative at the jump,
and no endpoint statement is made.

## Facts & Assumptions

[A1] $\widehat s(k)=\int_{\mathbb T}s\,e_{-k}\,dm_{\mathbb T}$ is represented on $[0,1)$ by the Riemann integral of the representative against $e^{-2\pi ikt}$, and Parseval's identity reads $\|s\|_2^2=\sum_{k\in\mathbb Z}|\widehat s(k)|^2$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-parseval-identity-for-fourier-series]]).

[A2] With sine and cosine having the stated derivatives and the chain rule applying, $\int_a^bG'=G(b)-G(a)$ for differentiable $G$ with integrable derivative; continuous functions on a closed interval are Riemann integrable, and a bounded Riemann integrable function is Lebesgue measurable with the same integral ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A3] $\sin(m\pi)=0$ and $\cos(m\pi)=(-1)^m$ for integers $m$: the zero-set theorem gives the sine values, while $\cos(x+\pi)=-\cos x$ and $\cos0=1$ give the cosine values by integer induction ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[A4] The averaged character integrals are $\int_0^{1/2}e^{-2\pi ikt}\,dt=\frac{1-(-1)^k}{2\pi ik}$ and $\int_{1/2}^1e^{-2\pi ikt}\,dt=\frac{(-1)^k-1}{2\pi ik}$ for $k\ne0$ ([[def-fourier-coefficients-and-trigonometric-polynomials]]).

[A5] The coefficient family is square-summable in the finite-subset sense, and its total square sum is the supremum of the symmetric partial sums ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-parseval-identity-for-fourier-series]]).

## Verification

**Proof technique:** direct.

**Given:** The class $s$ represented by $1$ on $[0,\tfrac12)$ and by $-1$ on $[\tfrac12,1)$.

1.1 The mean vanishes: $\widehat s(0)=\int_0^1s(t)\,dt=\frac12-\frac12=0$. [A1, A2, algebra]

1.2 For $k\ne0$ write $e^{-2\pi ikt}=\cos(2\pi kt)-i\sin(2\pi kt)$. The cosine part vanishes: $\int_0^{1/2}\cos(2\pi kt)\,dt=\frac{\sin(\pi k)}{2\pi k}=0$ and $\int_{1/2}^1\cos(2\pi kt)\,dt=\frac{\sin(2\pi k)-\sin(\pi k)}{2\pi k}=0$, and the signs $\pm1$ of $s$ multiply these to give $\int_0^1s(t)\cos(2\pi kt)\,dt=0$ as well. For the sine part, the antiderivative $-\frac{\cos(2\pi kt)}{2\pi k}$ gives $$\int_0^1s(t)\sin(2\pi kt)\,dt=\frac{1-(-1)^k}{2\pi k}-\frac{(-1)^k-1}{2\pi k}=\frac{1-(-1)^k}{\pi k} .$$ [A2, A3, algebra]

2.1 Therefore $\widehat s(k)=-i\int_0^1s(t)\sin(2\pi kt)\,dt=-\frac{i(1-(-1)^k)}{\pi k}=\frac{1-(-1)^k}{\pi ik}$ for every $k\ne0$; the coefficient vanishes exactly for even $k$ and is nonzero for odd $k$. [step 1.2, A4, algebra]

3.1 Parseval's identity gives $1=\|s\|_2^2=\sum_{k\in\mathbb Z}|\widehat s(k)|^2$, because $|s|=1$ and the domain has measure one; and $|\widehat s(k)|^2=\frac{(1-(-1)^k)^2}{\pi^2k^2}$ equals $\frac{4}{\pi^2k^2}$ for odd $k$ and $0$ for even $k$. Hence $1=\frac{4}{\pi^2}\sum_{k\ \text{odd}}\frac{1}{k^2}=\frac{8}{\pi^2}\sum_{k\ \text{odd},\,k\ge1}\frac{1}{k^2}$, and multiplying by $\pi^2/8$ gives $\sum_{k\ \text{odd},\,k\ge1}k^{-2}=\pi^2/8$. [step 1.1, step 2.1, A1, A5, algebra]

4.1 The coefficients of steps 1.1 and 2.1 are the displayed ones, the Fourier series converges to $s$ in mean square, and step 3.1 evaluates the associated square sum as $\pi^2/8$; all statements are about the $L^2$ class, and no pointwise or endpoint convergence is asserted. [step 1.1, step 2.1, step 3.1] ∎
