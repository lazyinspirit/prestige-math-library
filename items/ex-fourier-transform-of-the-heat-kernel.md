---
id: ex-fourier-transform-of-the-heat-kernel
kind: example
title: "The Fourier transform of the heat kernel"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - def-heat-kernel
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-heat-kernel-normalisation-scaling-and-derivatives
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.4, printed p. 129, formula (5.4) (heat multiplier); Definition 5.64, p. 168, (5.73), and Example 5.65, p. 169 (forward transform includes $(2\\pi)^{-n}$)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 151, formulas (6.34)–(6.36) (the transform of the fundamental solution)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Remark 3.1.5, printed p. 103 (the same formulae recovered by Fourier transform)"
---

## Example

Assume Countable Choice and let $n\ge1$, and use the library's
$2\pi$-normalised transform
$\mathcal Ff(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi ix\cdot\xi}\,dx$ of
[[def-fourier-transform-on-l-one-of-rn]]. Then for every $t>0$ the heat kernel
$\Gamma_t$ of [[def-heat-kernel]] is the $L^1$ function with
$$\mathcal F\Gamma_t(\xi)=e^{-4\pi^2t|\xi|^2},\qquad \xi\in\mathbb R^n.$$
In the unnormalised convention
$\mathcal Gf(\xi)=\int_{\mathbb R^n}f(x)e^{-ix\cdot\xi}\,dx$ the same
computation reads $\mathcal G\Gamma_t(\xi)=e^{-t|\xi|^2}$. The heat-flow multiplier
$e^{-t|\xi|^2}$ alone does not determine the forward normalization: Hunter
uses $(2\pi)^{-n}\mathcal G$, whose transform of $\Gamma_t$ is
$(2\pi)^{-n}e^{-t|\xi|^2}$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$ and $\xi\in\mathbb R^n$.

[A1] Countable Choice is the hypothesis of the Gaussian transform lemma below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is $\Gamma_t(x)=(4\pi t)^{-n/2}\exp(-|x|^2/(4t))>0$ on $\mathbb R^n$ ([[def-heat-kernel]]).

[F2] $\Gamma_t\in L^1(\mathbb R^n)$ with $\|\Gamma_t\|_1=1$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] For $f\in L^1(\mathbb R^n;\mathbb C)$ the $2\pi$-normalised Fourier transform is $\mathcal Ff(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi ix\cdot\xi}\,dx$, defined at every frequency ([[def-fourier-transform-on-l-one-of-rn]]).

[F4] Assume countable choice. For $n\ge1$, $s>0$ and $\xi\in\mathbb R^n$, $\mathcal F(e^{-\pi s|x|^2})(\xi)=s^{-n/2}e^{-\pi|\xi|^2/s}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).



## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2] the kernel satisfies $\Gamma_t(x)=(4\pi t)^{-n/2}e^{-|x|^2/(4t)}$ with $\Gamma_t\in L^1(\mathbb R^n)$, so its transform of [F3] is defined at every $\xi$ by the absolutely convergent integral $\mathcal F\Gamma_t(\xi)=(4\pi t)^{-n/2}\int_{\mathbb R^n}e^{-|x|^2/(4t)}e^{-2\pi ix\cdot\xi}\,dx$. [A1, F1, F2, F3, given]

2.1 Writing $s:=1/(4\pi t)>0$, the identity $-\frac{|x|^2}{4t}=-\pi s|x|^2$ holds, so $\Gamma_t(x)=(4\pi t)^{-n/2}e^{-\pi s|x|^2}$ and $(4\pi t)^{-n/2}=s^{n/2}$. [step 1.1, given, algebra]

3.1 Applying the Gaussian transform [F4] with this $s$ and factoring the constant out of the integral gives $\mathcal F\Gamma_t(\xi)=(4\pi t)^{-n/2}s^{-n/2}e^{-\pi|\xi|^2/s}=e^{-\pi|\xi|^2/s}$, and substituting $s=1/(4\pi t)$ yields $-\pi|\xi|^2/s=-4\pi^2t|\xi|^2$, so $\mathcal F\Gamma_t(\xi)=e^{-4\pi^2t|\xi|^2}$ for every $\xi$. [step 1.1, step 2.1, F3, F4, given, algebra]

4.1 For the unnormalised convention, the definition gives $\mathcal G\Gamma_t(\xi)=\int\Gamma_t(x)e^{-ix\cdot\xi}\,dx=\mathcal F\Gamma_t\bigl(\xi/(2\pi)\bigr)$ because $e^{-ix\cdot\xi}=e^{-2\pi ix\cdot(\xi/(2\pi))}$; substituting $\xi/(2\pi)$ in step 3.1 gives $\mathcal G\Gamma_t(\xi)=e^{-4\pi^2t|\xi/(2\pi)|^2}=e^{-t|\xi|^2}$. [step 3.1, F3, given, algebra]

5.1 Steps 1.1, 2.1, 3.1 and 4.1 establish $\mathcal F\Gamma_t(\xi)=e^{-4\pi^2t|\xi|^2}$ in the normalisation of [F3] and $\mathcal G\Gamma_t(\xi)=e^{-t|\xi|^2}$ in the unnormalised convention, which is the whole example. [step 1.1, step 3.1, step 4.1, given] ∎
