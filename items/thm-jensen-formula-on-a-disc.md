---
id: thm-jensen-formula-on-a-disc
kind: theorem
title: "Jensen's formula on a disc"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cauchy-integral-formula-circle, thm-zero-order-factorization-holomorphic-function, thm-holomorphic-logarithms-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $f$ be holomorphic on a neighbourhood of the closed disc $\{|z|\le R\}$,
assume $f(0)\ne0$, and let $a_1,\dots,a_N$ be the zeros of $f$ in $|z|<R$,
counted with multiplicity. If $f$ has no zero on $|z|=R$, then

$$\log|f(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|f(Re^{it})|\,dt-\sum_{k=1}^{N}\log\frac{R}{|a_k|}.$$

For a radius meeting boundary zeros, the same identity is recovered by taking
$r\uparrow R$ through radii that avoid zeros on $|z|=r$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a neighbourhood of the closed disc $\{|z|\le R\}$, with $f(0)\ne0$.

[F1] Cauchy's integral formula on a circle recovers the value at the centre
([[thm-cauchy-integral-formula-circle]]).

[F2] A zero of multiplicity $m$ can be factored as $(z-a)^m$ times a
holomorphic nonvanishing factor
([[thm-zero-order-factorization-holomorphic-function]]).

[F3] A nowhere-zero holomorphic function on a disc has a holomorphic logarithm,
because discs are star-shaped and homologically simply connected
([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-holomorphic-logarithms-homologically-simply-connected-domains]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $f$ has no zero on $|z|=R$. Because the closed disc is compact, $f$ has only finitely many zeros in $|z|<R$; applying [F2] repeatedly gives $f(z)=\prod_{k=1}^{N}(z-a_k)g(z)$ on a neighbourhood of the closed disc, where $g$ is holomorphic and zero-free there. [F2, given, algebra]

2.1 By [F3], choose a holomorphic logarithm $L$ of $g$ on $|z|<R$. Applying [F1] to $L$ on the circle $|z|=R$ and taking real parts yields $\log|g(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|g(Re^{it})|\,dt$. [F1, F3, step 1.1, algebra]

3.1 For each zero $a_k$ with $|a_k|<R$, write $Re^{it}-a_k=Re^{it}(1-a_kR^{-1}e^{-it})$. The factor $1-a_kR^{-1}z$ is zero-free on the closed unit disc, so the same argument as in step 2.1 shows $\frac{1}{2\pi}\int_0^{2\pi}\log|1-a_kR^{-1}e^{-it}|\,dt=0$; hence $\frac{1}{2\pi}\int_0^{2\pi}\log|Re^{it}-a_k|\,dt=\log R$. [F1, F3, step 2.1, algebra]

4.1 Taking logarithms of the factorization in step 1.1 on the boundary circle and averaging, step 2.1 gives the mean for $g$ and step 3.1 contributes one $\log R$ for each zero. Rearranging yields $\log|f(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|f(Re^{it})|\,dt-\sum_{k=1}^{N}\log(R/|a_k|)$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 If $f$ has zeros on $|z|=R$, apply step 4.1 to radii $r<R$ with no zero on $|z|=r$; as $r\uparrow R$, the zero list inside $|z|<r$ stabilizes except when $r$ crosses one of finitely many zero moduli, and the boundary integral converges to the stated radial limit. [step 4.1, algebra] ∎
