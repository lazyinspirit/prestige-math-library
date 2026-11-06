---
id: lem-st-c2-periodic-fourier-expansion
kind: lemma
title: Absolutely convergent Fourier reconstruction for C2 periodic functions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§1.4, printed pp. 25–27: periodic classical mode expansions; the local proof supplies the convergence details for C2 data."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.1 and §24.6, printed pp. 570 and 583–587: classical string modes and the Polyakov formulation; the local proof supplies the C2 Fourier reconstruction argument."
---

## Statement

Let $f:\mathbb R\to\mathbb C$ be twice continuously differentiable and $2\pi$-periodic. For each $n\in\mathbb Z$, define its Fourier coefficient by $c_n=(2\pi)^{-1}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx$. The normalized exponentials are orthonormal: $(2\pi)^{-1}\int_{-\pi}^{\pi}e^{i(k-n)x}\,dx$ is $1$ for $k=n$ and $0$ otherwise. Also $\sum_{n\in\mathbb Z}|c_n|<\infty$, the Fourier series $\sum_{n\in\mathbb Z}c_ne^{inx}$ converges absolutely and uniformly to $f$, and the symmetric partial sums $\sum_{|n|\le N}in c_ne^{inx}$ of the Fourier series of $f'$ converge to $f'$ in the normalized $L^2$ norm $\|q\|_2^2=(2\pi)^{-1}\int_{-\pi}^{\pi}|q(x)|^2\,dx$.

## Facts & Assumptions

**Given:** A twice continuously differentiable $2\pi$-periodic function $f:\mathbb R\to\mathbb C$.

[A1] Periodicity and $C^2$ regularity imply $f(\pi)=f(-\pi)$ and $f'(\pi)=f'(-\pi)$; all integrals below are over the compact interval $[-\pi,\pi]$.

[A2] For a continuous periodic function $q$, write $\|q\|_\infty:=\sup_{x\in[-\pi,\pi]}|q(x)|$.

## Proof

**Proof technique:** direct Fourier coefficient estimates followed by a Fejér-kernel uniqueness argument.

1.1 For $n\ne0$, integrate by parts twice in the definition of $c_n$. The boundary terms vanish because $f$ and $f'$ have matching endpoint values and $e^{in\pi}=e^{-in\pi}$, so $\widehat{f''}(n)=-n^2c_n$, where $\widehat{f''}(n)=(2\pi)^{-1}\int_{-\pi}^{\pi}f''(x)e^{-inx}\,dx$. Thus $|c_n|\le (2\pi n^2)^{-1}\int_{-\pi}^{\pi}|f''(x)|\,dx$. The comparison $\sum_{n\ge1}n^{-2}\le1+\int_1^\infty x^{-2}\,dx<\infty$, together with finite $c_0$, gives $\sum_n|c_n|<\infty$. [given, A1, algebra]

2.1 The bound $\sup_x|\sum_{N<|n|\le M}c_ne^{inx}|\le\sum_{|n|>N}|c_n|$ makes the partial sums uniformly Cauchy. They converge uniformly to a continuous periodic function $g$; integrating the uniformly convergent series term by term shows $\widehat g(n)=c_n$: for integer $\ell=k-n$, the normalized integral of $e^{i\ell x}$ is $1$ if $\ell=0$, while if $\ell\ne0$ its antiderivative is $e^{i\ell x}/(i\ell)$ and its endpoint values at $-\pi,\pi$ agree, so the integral is $0$. Hence $h=f-g$ is continuous, periodic, and all its Fourier coefficients vanish. [step 1.1, algebra]

3.1 For an integer $N\ge0$, put $K_N(t)=(N+1)^{-1}|\sum_{j=0}^{N}e^{ijt}|^2$. Expanding the finite square gives $K_N(t)=\sum_{|k|\le N}(1-|k|/(N+1))e^{ikt}$; therefore $K_N\ge0$ and $(2\pi)^{-1}\int_{-\pi}^{\pi}K_N(t)\,dt=1$. For a continuous periodic $q$, define $\sigma_Nq(x)=(2\pi)^{-1}\int_{-\pi}^{\pi}q(x-t)K_N(t)\,dt$. The finite expansion shows that if every Fourier coefficient of $q$ is zero, then $\sigma_Nq(x)=0$ for every $x$. [step 2.1, algebra]

4.1 Given $\varepsilon>0$, uniform continuity of $q$ gives $0<\delta<\pi$ such that $|q(x-t)-q(x)|<\varepsilon$ whenever $|t|<\delta$, uniformly in $x$. For $\delta\le|t|\le\pi$, the geometric-sum identity gives $K_N(t)=(N+1)^{-1}|\sin((N+1)t/2)/\sin(t/2)|^2\le((N+1)\sin^2(\delta/2))^{-1}$. Splitting the convolution integral at $\delta$, positivity and unit mass of $K_N$ bound $\sup_x|\sigma_Nq(x)-q(x)|$ by $\varepsilon+2\|q\|_\infty((N+1)\sin^2(\delta/2))^{-1}$. Thus $\sigma_Nq\to q$ uniformly. Applying this to $h$, whose Fejér means vanish by step 3.1, gives $h=0$, so $g=f$ and the Fourier series reconstructs $f$ absolutely and uniformly. [step 3.1, algebra]

5.1 Integration by parts once gives the $n$-th Fourier coefficient of $f'$ as $in c_n$. The Fejér means $\sigma_N f'$ are trigonometric polynomials of degree at most $N$ and converge uniformly to $f'$ by step 4.1. The symmetric Fourier partial sum $S_Nf'=\sum_{|n|\le N}in c_ne^{inx}$ is the orthogonal projection onto that finite span, since the exponentials are orthonormal by the elementary integral in step 2.1. Therefore $\|f'-S_Nf'\|_2\le\|f'-\sigma_Nf'\|_2\le\|f'-\sigma_Nf'\|_\infty\to0$, proving the stated $L^2$ convergence. [A1, step 4.1, step 2.1, algebra] ∎
