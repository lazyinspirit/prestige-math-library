---
id: thm-lp-to-lq-heat-kernel-estimate
kind: theorem
title: "$L^p$ to $L^q$ smoothing estimate for the heat flow"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-young-convolution-inequality
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
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
      locator: "printed p. 131 (the smoothing statement for $f\\in L^p$ derived from the explicit kernel)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.40): $|u(t,x)|\\le(4\\pi t)^{-n/2}\\|f\\|_1$ (the $p=1$, $q=\\infty$ case)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2.4, printed p. 111 (the $n$-dimensional kernel used in the scaling)"
---

## Statement

Assume Countable Choice, let $n\ge1$ and $1\le p\le q\le\infty$, and let
$Q\in[1,\infty]$ be determined by $\frac1Q=1+\frac1q-\frac1p$. Then for every
$f\in L^p(\mathbb R^n)$ and every $t>0$,
$$\|H_tf\|_q\le C_{n,p,q}\,t^{-\frac n2(\frac1p-\frac1q)}\|f\|_p,\qquad C_{n,p,q}:=(4\pi)^{-\frac n2(\frac1p-\frac1q)}Q^{-\frac{n}{2Q}},$$
with the endpoint $Q=\infty$ (which occurs exactly at $p=1$, $q=\infty$) read
as $Q^{-n/(2Q)}\to1$; for $p=q$ the constant is $1$ and the estimate is the
contraction clause.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le q\le\infty$, the exponent
$Q$ with $1/Q=1+1/q-1/p$, $f\in L^p(\mathbb R^n)$ and $t>0$.

[A1] Countable Choice is the hypothesis carried by the convolution and
integration suppliers below ([[def-countable-choice]]).

[F1] For $1\le p\le\infty$ and $f\in L^p(\mathbb R^n)$, $H_tf$ is the $L^p$
class of the convolution $\Gamma_t*f$
([[def-heat-evolution-of-initial-data]]).

[F2] For every $s>0$ the kernel satisfies
$\Gamma(x,s)=(4\pi s)^{-n/2}e^{-|x|^2/(4s)}$, the scaling identity
$\Gamma(\lambda x,\lambda^2s)=\lambda^{-n}\Gamma(x,s)$, and unit mass
$\int_{\mathbb R^n}\Gamma(x,s)\,dx=1$
([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] Assume Countable Choice; if $1\le p,q,r\le\infty$ satisfy
$1/r=1/p+1/q-1$ and $f\in L^p$, $g\in L^q$, then
$\|f*g\|_r\le\|f\|_p\|g\|_q$
([[thm-young-convolution-inequality]]).



## Proof

**Proof technique:** direct.

1.1 Young estimate: the triple $(p,Q,q)$ is admissible because $1/Q=1+1/q-1/p$ means exactly $1/q=1/p+1/Q-1$, and $Q\in[1,\infty]$ lies in the Young range since $0\le1/p-1/q\le1$; hence, by [F3] applied to $f$ and $\Gamma_t\in L^Q$, $\|H_tf\|_q\le\|\Gamma_t\|_Q\|f\|_p$ for every $t>0$. [A1, F1, F3, given]

2.1 Scaling of the kernel norm: the scaling identity of [F2] with $\lambda=\sqrt t$ gives $\Gamma_t(x)=t^{-n/2}\Gamma_1(x/\sqrt t)$, so the substitution $x=\sqrt t\,z$ yields $\|\Gamma_t\|_Q=t^{-n/2}t^{n/(2Q)}\|\Gamma_1\|_Q=t^{-\frac n2(1-\frac1Q)}\|\Gamma_1\|_Q$ for $Q<\infty$, and for $Q=\infty$ the same substitution gives $\|\Gamma_t\|_\infty=t^{-n/2}\|\Gamma_1\|_\infty$. [step 1.1, F2, given, algebra]

3.1 Gaussian norm: by [F2] with $s=1$, $\Gamma_1(x)=(4\pi)^{-n/2}e^{-|x|^2/4}$, and for $Q<\infty$ the identity $e^{-Q|x|^2/4}=(4\pi/Q)^{n/2}\Gamma(x,1/Q)$ holds by the explicit formula, so unit mass gives $\|\Gamma_1\|_Q=(4\pi)^{-n/2}\Bigl(\int e^{-Q|x|^2/4}dx\Bigr)^{1/Q}=(4\pi)^{-n/2}(4\pi/Q)^{n/(2Q)}$; for $Q=\infty$ the same formula is read as $\|\Gamma_1\|_\infty=(4\pi)^{-n/2}$. [step 2.1, F2, given, algebra]

4.1 Assembling the estimate: since $1-\frac1Q=\frac1p-\frac1q$ by the definition of $Q$, steps 1.1, 2.1 and 3.1 give $\|H_tf\|_q\le t^{-\frac n2(\frac1p-\frac1q)}(4\pi)^{-n/2}(4\pi/Q)^{n/(2Q)}\|f\|_p$, and $(4\pi)^{-n/2}(4\pi/Q)^{n/(2Q)}=(4\pi)^{-\frac n2(1-\frac1Q)}Q^{-n/(2Q)}=(4\pi)^{-\frac n2(\frac1p-\frac1q)}Q^{-n/(2Q)}=C_{n,p,q}$, which is the displayed estimate. [step 1.1, step 2.1, step 3.1, given, algebra]

5.1 Endpoints: if $p=q$ then $1/Q=1$ and $Q=1$, so $C_{n,p,q}=1$ and the estimate reads $\|H_tf\|_p\le\|f\|_p$; if $Q=\infty$ then $1/p-1/q=1$, which forces $p=1$ and $q=\infty$, and the factor $Q^{-n/(2Q)}$ tends to $1$ while the exponent is $t^{-n/2}$, so the estimate reads $\|H_tf\|_\infty\le(4\pi t)^{-n/2}\|f\|_1$. [step 4.1, given, algebra]

6.1 Steps 1.1, 2.1, 3.1, 4.1 and 5.1 prove the displayed $L^p$ to $L^q$ estimate with the stated constant, including the endpoint conventions and the $p=q$ contraction case. [step 4.1, step 5.1, given] ∎
