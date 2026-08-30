---
id: thm-euler-reflection-formula
kind: theorem
title: "Euler's reflection formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-weierstrass-product,
       thm-sine-has-its-weierstrass-product,
       thm-euler-mascheroni-constant-and-harmonic-asymptotic]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C\setminus\mathbb Z$,

$$\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}.$$

The identity extends meromorphically to all $z\in\mathbb C$.

## Facts & Assumptions

**Given:** The reciprocal-Gamma product and the sine product.

[L1] Reciprocal Gamma has the product $1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$ ([[thm-gamma-weierstrass-product]]).

[L2] Sine has the product $\sin(\pi z)=\pi z\prod_{n\ge1}(1-z^2/n^2)$ ([[thm-sine-has-its-weierstrass-product]]).

[L3] Harmonic numbers satisfy $H_n=\log n+\gamma+o(1)$ ([[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at $1-z$. For the $N$th partial product, $$\frac{1}{\Gamma(1-z)} =(1-z)e^{\gamma(1-z)}\lim_{N\to\infty}\prod_{n=1}^{N}\left(1+\frac{1-z}{n}\right)e^{-(1-z)/n}.$$ The identity $$\left(1-z\right)\prod_{n=1}^{N}\left(1+\frac{1-z}{n}\right)=(N+1)\prod_{n=1}^{N+1}\left(1-\frac{z}{n}\right)$$ therefore gives $$\frac{1}{\Gamma(1-z)} =e^{-\gamma z}\lim_{N\to\infty}(N+1)e^{\gamma-H_N}e^{-z/(N+1)}\prod_{n=1}^{N+1}\left(1-\frac{z}{n}\right)e^{z/n}.$$ By [L3], the scalar prefactor tends to $1$, so $$\frac{1}{\Gamma(1-z)} =e^{-\gamma z}\prod_{n\ge1}\left(1-\frac{z}{n}\right)e^{z/n}.$$ [L1, L3, algebra]

2.1 Multiplying step 1.1 by the product for $1/\Gamma(z)$ from [L1], the exponential factors cancel and one gets $$\frac{1}{\Gamma(z)\Gamma(1-z)} =z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right).$$ By [L2], the product on the right is $\sin(\pi z)/\pi$. Therefore $$\frac{1}{\Gamma(z)\Gamma(1-z)}=\frac{\sin(\pi z)}{\pi}$$ on $\mathbb C\setminus\mathbb Z$, which is equivalent to the displayed formula. [step 1.1, L1, L2, algebra] ∎
