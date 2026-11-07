---
id: lem-mellin-inversion-for-smooth-compact-support
kind: lemma
title: "Mellin inversion for smooth compactly supported tests"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-dirichlet-character-von-mangoldt-sum
  - lem-fourier-transform-of-a-gaussian
  - thm-riemann-fubini-on-product-rectangles
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Green, The Prime Number Theorem, Chapter 7, §§7.1–7.3"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf"
---

## Statement

Let $W:(0,\infty)\to\mathbb C$ be infinitely differentiable and vanish
outside a compact subset of $(0,\infty)$, and let $\widetilde W$ be its Mellin
transform. Then $\widetilde W$ is entire, it decays faster than every inverse
power of $|\operatorname{Im}s|$ on every fixed vertical line, and for every
$\sigma\in\mathbb R$ and $y>0$,

$$W(y)=\frac1{2\pi i}\int_{\sigma-i\infty}^{\sigma+i\infty}\widetilde W(s)y^{-s}\,ds.$$

The displayed integral converges absolutely.

## Statement references

[[def-dirichlet-character-von-mangoldt-sum]].

[[lem-fourier-transform-of-a-gaussian]].

[[thm-riemann-fubini-on-product-rectangles]].

## Facts & Assumptions

**Given:** A smooth compactly supported $W:(0,\infty)\to\mathbb C$, a real
$\sigma$, and $y>0$.

[F1] The Mellin transform is $\widetilde W(s)=\int_0^\infty W(u)u^{s-1}\,du$
([[def-dirichlet-character-von-mangoldt-sum]]).

[F2] With $\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi ix\xi}\,dx$,
$\widehat{e^{-\pi t x^2}}(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$ for $t>0$
([[lem-fourier-transform-of-a-gaussian]]).

[F3] A continuous function on a compact rectangle is Riemann integrable and
its iterated integrals in either order equal its rectangle integral
([[thm-riemann-fubini-on-product-rectangles]]).

## Proof

**Given:** $W$, $\sigma$, and $y$ as above.

1.1 Choose $0<A<B<\infty$ with $\operatorname{supp}W\subset[A,B]$, and put $h_\sigma(v)=e^{\sigma v}W(e^v)$. Then $h_\sigma$ is smooth and compactly supported, and [F1] gives $\widetilde W(\sigma+it)=\int_{\mathbb R}h_\sigma(v)e^{itv}\,dv$. Differentiation under this compactly supported integral shows that $\widetilde W$ is entire. Integration by parts $N$ times gives $|\widetilde W(\sigma+it)|\le |t|^{-N}\|h_\sigma^{(N)}\|_1$ for $|t|\ge1$; for $|t|\le1$ it is bounded by $\|h_\sigma\|_1$. Thus it decays faster than every inverse power on the line $\operatorname{Re}s=\sigma$. [F1, given, algebra]

2.1 Write $u=\log y$. For $\varepsilon>0$ let $J_\varepsilon(u)=(2\pi)^{-1}\int_{\mathbb R}\widetilde W(\sigma+it)e^{-itu}e^{-\varepsilon t^2/2}\,dt$. On $[\log A,\log B]\times[-R,R]$, the real and imaginary parts of the integrand are continuous, so [F3] applied to each permits exchanging the two finite integrals. Letting $R\to\infty$ is justified on both sides by the Gaussian tail bound and $\|h_\sigma\|_1$; with $a=\varepsilon/(2\pi)$ and $\xi=(v-u)/(2\pi)$, [F2] gives $(2\pi)^{-1}\int_{\mathbb R}e^{it(v-u)}e^{-\varepsilon t^2/2}\,dt=(2\pi\varepsilon)^{-1/2}e^{-(v-u)^2/(2\varepsilon)}$, hence $J_\varepsilon(u)=\int_{\mathbb R}h_\sigma(v)e^{-(v-u)^2/(2\varepsilon)}(2\pi\varepsilon)^{-1/2}\,dv$. [F1, F2, F3, step 1.1, algebra]

3.1 The Gaussian kernel in step 2.1 has integral $1$. Given $\eta>0$, uniform continuity of $h_\sigma$ gives $\delta>0$ such that $|h_\sigma(v)-h_\sigma(u)|<\eta$ when $|v-u|<\delta$. The contribution of that interval to $|J_\varepsilon(u)-h_\sigma(u)|$ is at most $\eta$; the remaining contribution is at most $2\|h_\sigma\|_\infty\int_{|z|\ge\delta}(2\pi\varepsilon)^{-1/2}e^{-z^2/(2\varepsilon)}\,dz$, which tends to $0$ by $z=\sqrt\varepsilon w$. Hence $J_\varepsilon(u)\to h_\sigma(u)$. [step 2.1, F2, algebra]

4.1 By step 1.1, $\widetilde W(\sigma+it)$ is integrable. To remove the Gaussian damping from $J_\varepsilon$, first make the integral of $|\widetilde W(\sigma+it)|$ over $|t|>R$ small, and then use uniform convergence of $e^{-\varepsilon t^2/2}$ to $1$ on $[-R,R]$. Thus $h_\sigma(u)=(2\pi)^{-1}\int_{\mathbb R}\widetilde W(\sigma+it)e^{-itu}\,dt$. Since $h_\sigma(u)=e^{\sigma u}W(e^u)$, multiplication by $e^{-\sigma u}$ and $s=\sigma+it$ give the stated Mellin inversion formula, including absolute convergence. [step 1.1, step 3.1, algebra] ∎
