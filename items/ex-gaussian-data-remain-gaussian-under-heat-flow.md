---
id: ex-gaussian-data-remain-gaussian-under-heat-flow
kind: example
title: "Gaussian data remain Gaussian under the heat flow"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-heat-kernel-semigroup-identity
  - lem-first-and-second-moments-of-the-heat-kernel
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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
      locator: "printed p. 130, formula (5.6) (the Gaussian kernel being convolved)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.36)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2.4, printed p. 111, formula (3.2.24)"
---

## Example

Assume Countable Choice. Let $n\ge1$, $\sigma>0$, and let
$f(x)=(2\pi\sigma^2)^{-n/2}e^{-|x|^2/(2\sigma^2)}$ be the density of the
centred Gaussian law with covariance $\sigma^2I_n$. Then
$f\in L^1\cap L^\infty$ and for every $t>0$ the heat evolution is the centred
Gaussian density with covariance $(\sigma^2+2t)I_n$,
$$H_tf(x)=\bigl(2\pi(\sigma^2+2t)\bigr)^{-n/2}e^{-|x|^2/(2(\sigma^2+2t))},\qquad x\in\mathbb R^n.$$

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $\sigma>0$, $t>0$ and $x\in\mathbb R^n$.

[A1] The cited kernel and evolution interfaces carry Countable Choice ([[def-countable-choice]]).

[F1] For $s>0$ the heat kernel is $\Gamma(x,s)=(4\pi s)^{-n/2}e^{-|x|^2/(4s)}$ with unit mass, and $\Gamma_t*\Gamma_s=\Gamma_{t+s}$ for all $s,t>0$ ([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]], [[lem-heat-kernel-semigroup-identity]]).

[F2] For bounded measurable data $g$ the heat evolution $H_tg$ is the everywhere-defined bounded representative $x\mapsto\int_{\mathbb R^n}\Gamma(x-y,t)g(y)\,dy$, and for $g\in L^1(\mathbb R^n)$ it is the class of the same convolution ([[def-heat-evolution-of-initial-data]]).

[F3] The first and second moments of $\Gamma_s$ are absolutely integrable, with $\int x_i\Gamma(x,s)\,dx=0$ and $\int x_ix_j\Gamma(x,s)\,dx=2s\delta_{ij}$ ([[lem-first-and-second-moments-of-the-heat-kernel]]). Thus the unit-mass Gaussian density $\Gamma_s$ is centred with covariance $2sI_n$.

## Verification

**Proof technique:** direct.

1.1 Comparing the two formulas, $f(x)=(2\pi\sigma^2)^{-n/2}e^{-|x|^2/(2\sigma^2)}=\Gamma(x,\sigma^2/2)$ for every $x$, because $(4\pi\cdot\sigma^2/2)^{-n/2}=(2\pi\sigma^2)^{-n/2}$ and $4\cdot(\sigma^2/2)=2\sigma^2$. [A1, F1, given, algebra]

2.1 Hence $f\in L^1(\mathbb R^n)$ with $\|f\|_1=1$ by unit mass in [F1], and $f\in L^\infty(\mathbb R^n)$ because $f$ is continuous with finite supremum $(2\pi\sigma^2)^{-n/2}$ attained at $0$; so $f$ belongs to $L^1\cap L^\infty$. [step 1.1, F1, given, algebra]

2.2 Since $f$ is bounded, [F2] gives $H_tf(x)=\int\Gamma(x-y,t)f(y)\,dy$ for every $x$, and step 1.1 turns this into the convolution $(\Gamma_t*\Gamma_{\sigma^2/2})(x)=\Gamma_{t+\sigma^2/2}(x)$ by the semigroup identity of [F1]. [step 1.1, F1, F2, given]

3.1 Substituting $s=t+\sigma^2/2$ in the explicit formula of [F1] gives $\Gamma_{t+\sigma^2/2}(x)=(4\pi(t+\sigma^2/2))^{-n/2}e^{-|x|^2/(4(t+\sigma^2/2))}=(2\pi(\sigma^2+2t))^{-n/2}e^{-|x|^2/(2(\sigma^2+2t))}$, which is the density of the centred Gaussian law with covariance $(\sigma^2+2t)I_n$ by the first and second moments in [F3] with $s=t+\sigma^2/2$. [step 2.2, F1, F3, given, algebra]

4.1 Steps 1.1, 2.1, 2.2 and 3.1 show $f\in L^1\cap L^\infty$ and identify the heat evolution pointwise with the centred Gaussian density of covariance $(\sigma^2+2t)I_n$, which is the example. [step 2.1, step 3.1, given] ∎
