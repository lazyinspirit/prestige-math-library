---
id: thm-voronoi-divisor-summation-for-smooth-compact-support
kind: theorem
title: "Weighted divisor Voronoï formula for smooth compactly supported tests"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: [thm-voronoi-divisor-weighted-k0-y0-summation-formula]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A Simple Proof of Voronoi's Identity"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "printed pp. 265–267, formulas (1.2) and the stated Bessel evaluation"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formula (3.2) and kernel (3.3), printed p. 47"
verification:
  precheck: pending
---

## Statement

For a positive integer $n$, let $d(n)$ be its number of positive divisors. For $u>0$ define
$$\delta_0(u):=4K_0(4\pi\sqrt u)-2\pi Y_0(4\pi\sqrt u),$$
where $K_0,Y_0$ are the functions defined for $z>0$ by
$$K_0(z):=-\bigl(\log(z/2)+\gamma\bigr)I_0(z)+\sum_{m=1}^{\infty}\frac{H_m(z^2/4)^m}{(m!)^2},$$
$$Y_0(z):=\frac2\pi\bigl(\log(z/2)+\gamma\bigr)J_0(z)+\frac2\pi\sum_{m=1}^{\infty}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2},$$
with $H_m=\sum_{j=1}^m j^{-1}$, $J_0(z)=\sum_{m=0}^{\infty}(-1)^m(z^2/4)^m/(m!)^2$, and $I_0(z)=\sum_{m=0}^{\infty}(z^2/4)^m/(m!)^2$, where $\gamma$ is the Euler–Mascheroni constant and $\log$ is the natural logarithm. Let $f\in C_c^\infty((0,\infty))$, meaning a complex-valued smooth function whose support is a compact subset of $(0,\infty)$. Then
$$\sum_{n=1}^{\infty}d(n)f(n) =\int_0^{\infty}f(x)(\log x+2\gamma)\,dx +\lim_{M\to\infty}\sum_{m=1}^{M}d(m)\int_0^{\infty}f(x)\delta_0(mx)\,dx.$$
The limit on the right is the initial-segment interpretation of the weighted kernel series.

## Statement references

[Ivić, Chapter 3, §1, formulas (3.2)–(3.3)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Meurman, printed pp. 265–267, formulas (1.2) and the stated Bessel evaluation](https://numdam.org/item/AST_1992__209__265_0.pdf)

## Facts & Assumptions

**Given:** The test function and divisor/Bessel conventions in the statement.

[F1] [[thm-voronoi-divisor-weighted-k0-y0-summation-formula]] gives the stated kernel identity on every finite $[a,b]\subset(0,\infty)$ for every complex $C^2$ test, with initial-segment kernel sums and half weights at integer endpoints.

## Proof

**Given:** $f\in C_c^\infty((0,\infty))$.

1.1 Since the support of $f$ is a compact subset of $(0,\infty)$, choose $0<a<b$ with the support contained in $(a,b)$. Its restriction to $[a,b]$ is $C^2$ and is zero near both endpoints. Thus its values at integer endpoints are zero, and every divisor term outside $[a,b]$ is zero. [given, choose]

2.1 Apply [F1] to this restriction. The primed finite sum is the full divisor sum because the endpoint terms vanish. Every displayed integral can be extended from $[a,b]$ to $(0,\infty)$ because $f=0$ outside its support, including each finite kernel sum before taking its initial-segment limit. This gives precisely the asserted compact-support formula and its convergence interpretation. [F1, step 1.1, algebra] ∎
