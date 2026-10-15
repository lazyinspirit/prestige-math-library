---
id: thm-fourier-transform-maps-schwartz-space-continuously-to-itself
kind: theorem
title: Fourier transform acts continuously on Schwartz space
deps: ["thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-dominated-convergence", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Theorem 11.6 and Proposition 11.7, pp.121–122
---

## Statement

Assume countable choice. The negative-sign, $2\pi$-normalized Fourier transform is continuous $\mathcal F:\mathcal S\to\mathcal S$, and
$$\mathcal F(\partial^\alpha f)(\xi)=(2\pi i\xi)^\alpha\widehat f(\xi),\qquad \partial^\beta\widehat f=\mathcal F((-2\pi ix)^\beta f).$$

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]) for the integral and integration-by-parts interfaces. Euler's formula and the sine/cosine derivatives give the derivative of $e^{it}$ ([[thm-sine-and-cosine-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F1] Polynomial multiplication and differentiation are continuous on Schwartz space ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

[F2] Every weighted Schwartz derivative is integrable with a finite-seminorm norm bound ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F3] The integral Fourier transform is bounded continuous with supremum at most its input norm ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F4] Dominated convergence applies ([[thm-dominated-convergence]]).

[F5] Absolute integrability permits Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Whole-line complex integration by parts holds when both derivative products are integrable and the endpoint products vanish ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

## Proof

**Proof technique:** direct.

1.1 The interval FTC for $e^{it}$ gives $|e^{it}-1|\le|t|$. Thus the difference quotient in frequency coordinate $j$ is dominated in absolute value by $2\pi|x_jf(x)|$, integrable by [F2]. By [F4] its limit is $\mathcal F(-2\pi ix_jf)$. The convergence for arbitrary real increments follows either directly from the dominated estimate by truncating the majorant to a finite box and using uniform convergence there, or by the sequential criterion under the stated countable choice. The derivative is continuous by [F3]. Repeating for each weighted function, which remains Schwartz by [F1], proves all ordered derivatives and the second formula. [F1, F2, F3, F4, F6, given] 

1.2 Fix the other coordinates and integrate in coordinate $j$. For $u=f$ restricted to this line and $v=e^{-2\pi ix\cdot\xi}$, both $u'v$ and $uv'$ are integrable on the line: multiply $u,u'$ by $1+x_j^2$ and use their bounded Schwartz seminorms. Also $uv\to0$ at both ends, since $x_ju$ is bounded. [F6] therefore gives the derivative identity in that coordinate. Integrating over the other coordinates is legitimate by [F2] and [F5], since the full integrals of $|\partial_jf|$ and $|f|$ are finite. Iteration using [F1] proves the first formula, including zero components of $\xi$ without division by them. [F1, F2, F5, F6, given] 

2.1 Combine the two identities to obtain $$\xi^\alpha\partial^\beta\widehat f=(2\pi i)^{-|\alpha|}\mathcal F\bigl(\partial^\alpha((-2\pi ix)^\beta f)\bigr).$$ By [F3], its supremum is at most $(2\pi)^{-|\alpha|}\|\partial^\alpha((-2\pi ix)^\beta f)\|_1$. By [F2] and the explicit operation bounds in [F1], this is a finite linear combination of input Schwartz seminorms. Thus every output seminorm is finite, and the finite-neighbourhood definition proves continuity. [step 1.1, step 1.2, F1, F2, F3] ∎

