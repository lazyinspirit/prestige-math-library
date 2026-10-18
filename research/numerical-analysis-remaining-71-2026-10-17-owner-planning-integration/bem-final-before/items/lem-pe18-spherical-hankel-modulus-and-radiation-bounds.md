---
id: lem-pe18-spherical-hankel-modulus-and-radiation-bounds
kind: lemma
title: Spherical Hankel modulus and uniform radial bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions]
justified_by: []
proof_strategy: direct
axiom_use: "No axiom is used; all sums are finite and all estimates are coefficientwise."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §§10.49–10.52"
      url: "https://dlmf.nist.gov/10"
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, graduate lecture notes"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
---

## Statement

For integers $\ell\ge0$ and real $z>0$, write $h_\ell=h_\ell^{(1)}$ using [[def-spherical-bessel-and-hankel-functions]]. Then
$$|h_\ell(z)|^2=\sum_{m=0}^{\ell}S_{\ell m}z^{-2m-2},\qquad S_{\ell m}=\frac{(2m)!(\ell+m)!}{4^m(m!)^2(\ell-m)!}.$$
Consequently $|h_\ell(z)|$ is nonincreasing in $z$, $|h_{\ell-1}(z)|\le|h_\ell(z)|$ for $\ell\ge1$, and $|h_\ell'(z)|\le(1+(\ell+1)/z)|h_\ell(z)|$. For every fixed $z_0>0$ and all $z\ge z_0$,
$$\frac{|z(h_\ell'(z)-ih_\ell(z))|}{|h_\ell(z_0)|}\le(\ell+1)e^{2z_0}.$$

## Facts & Assumptions

**Given:** The finite-derivative outgoing Hankel convention and its radial recurrences.

[F1] [[def-spherical-bessel-and-hankel-functions]]: $h_\ell=(-z)^\ell(z^{-1}d/dz)^\ell(-ie^{iz}/z)$.

[F2] [[lem-spherical-bessel-and-hankel-radial-solutions]]: $h_{\ell+1}=\ell h_\ell/z-h_\ell'$ and $h_\ell'=h_{\ell-1}-(\ell+1)h_\ell/z$ for $\ell\ge1$.

## Proof

**Given:** Integer $\ell\ge0$, real $z>0$, and [F1]–[F2].

1.1 Direct differentiation of $h_0=-ie^{iz}/z$ gives the finite expression $h_\ell(z)=(-i)^{\ell+1}e^{iz}\sum_{m=0}^{\ell}i^m A_{\ell m}z^{-m-1},\qquad A_{\ell m}=\frac{(\ell+m)!}{m!(\ell-m)!2^m}.$ Indeed it holds at $\ell=0$; substituting this expression in $h_{\ell+1}=\ell h_\ell/z-h_\ell'$ gives $A_{\ell+1,m}=A_{\ell m}+(\ell+m)A_{\ell,m-1}$ (out-of-range coefficients are zero), and the displayed factorial formula satisfies that recurrence and the $m=0$ base. [F1, F2, algebra]

2.1 Let $F_\ell=|h_\ell|^2$. The radial recurrence gives $h_{\ell+1}=(2\ell+1)h_\ell/z-h_{\ell-1}$. Also $F_\ell'=2\operatorname{Re}(\bar h_\ell h_{\ell-1})-2(\ell+1)F_\ell/z$ by [F2]. Expanding the squared modulus and eliminating the real cross term yields $F_{\ell+1}=F_{\ell-1}-(2\ell+1)F_\ell'/z-(2\ell+1)F_\ell/z^2.$ From $F_0=z^{-2}$ and $F_1=z^{-2}+z^{-4}$, coefficient comparison yields $S_{\ell+1,0}=S_{\ell-1,0}=1$ and, for $1\le q\le\ell$, $S_{\ell+1,q}=S_{\ell-1,q}+(2\ell+1)(2q-1)S_{\ell,q-1}$. The displayed factorial coefficients satisfy this: the ratios are $S_{\ell-1,q}/S_{\ell+1,q}=(\ell-q)(\ell-q+1)/[(\ell+q)(\ell+q+1)]$ and $S_{\ell+1,q}/S_{\ell,q-1}=(2q-1)(\ell+q)(\ell+q+1)/(2q)$, whose difference gives the recurrence. At the top index $q=\ell+1$, $S_{\ell+1,\ell+1}=(2\ell+1)^2S_{\ell,\ell}$; thus induction proves the stated sum at every degree. [F1, F2, step 1.1, algebra]

3.1 Every $S_{\ell m}$ is positive, so differentiating the finite sum gives $F_\ell'(z)<0$. For $0\le m\le\ell-1$, $S_{\ell m}/S_{\ell-1,m}=(\ell+m)/(\ell-m)\ge1$, and the degree-$\ell$ sum has one additional positive term. Hence $|h_\ell|$ decreases with $z$ and $|h_{\ell-1}|\le|h_\ell|$. For $\ell\ge1$, [F2] now implies $|h_\ell'|\le|h_{\ell-1}|+(\ell+1)|h_\ell|/z\le(1+(\ell+1)/z)|h_\ell|$; for $\ell=0$ the same bound follows by differentiating $h_0=-ie^{iz}/z$. [step 2.1, F2, algebra]

4.1 Differentiating the finite sum in step 1.1 cancels its $ie^{iz}$ derivative in $h_\ell'-ih_\ell$, so $|z(h_\ell'-ih_\ell)|\le\sum_{m=0}^{\ell}(m+1)A_{\ell m}z^{-m-1}$. The lowest-power term of the positive modulus sum gives $|h_\ell(z_0)|\ge A_{\ell\ell}z_0^{-\ell-1}$. For $j=\ell-m$, factorial cancellation gives $\frac{A_{\ell,\ell-j}}{A_{\ell\ell}}=\frac{2^j}{j!}\prod_{s=0}^{j-1}\frac{\ell-s}{2\ell-s}\le\frac{2^j}{j!}.$ Using $z\ge z_0$ and $m+1\le\ell+1$, the quotient in the claim is at most $(\ell+1)\sum_{j=0}^{\ell}(2z_0)^j/j!\le(\ell+1)e^{2z_0}$. [step 1.1, step 2.1, algebra] ∎
