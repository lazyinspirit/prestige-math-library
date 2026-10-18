---
id: def-nitsche-restriction-bessel-potential-sobolev-spaces
kind: definition
title: Restriction Bessel-potential spaces on polyhedral domains
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [ def-real-order-bessel-potential-sobolev-space, thm-bessel-potential-completions-embed-in-tempered-distributions, thm-plancherel, def-countable-choice ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
    - title: Leszek F. Demkowicz, Lecture Notes on Energy Spaces
      url: https://users.ices.utexas.edu/~leszek/classes/CSE393/book.pdf
      locator: §3.1, p. 50, “Fractional Sobolev spaces on an arbitrary domain” (restriction definition and minimum-energy extension norm).
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $s\ge0$ and let $D\subset\mathbb R^d$ be a nonempty open set. Use $H^s(\mathbb R^d)$ with the Bessel-potential completion convention of [[def-real-order-bessel-potential-sobolev-space]]. Realize this completion in $L^2(\mathbb R^d)$ by the canonical injection
$$\iota_sU:=\mathcal F_2^{-1}\bigl(\langle\xi\rangle^{-s}J_sU\bigr),$$
where $J_s:H^s(\mathbb R^d)\to L^2(\mathbb R^d)$ is the weighted Fourier isometry of [[thm-bessel-potential-completions-embed-in-tempered-distributions]] and $\mathcal F_2$ is the unitary transform of [[thm-plancherel]]. Since $s\ge0$, multiplication by $\langle\xi\rangle^{-s}$ is bounded on $L^2$ with norm at most one and is injective. Hence $\iota_s$ is linear, injective, and satisfies $\|\iota_sU\|_2\le\|U\|_{H^s}$; it sends each canonical Schwartz class to that function's almost-everywhere class. Equivalently, for a Cauchy representative $[u_j]$, $\iota_s[u_j]=\lim_j u_j$ in $L^2$, because $\widehat u_j=\langle\xi\rangle^{-s}J_su_j$ converges in $L^2$ and $\mathcal F_2^{-1}$ is continuous. Identify $U$ with this $L^2$ class, and write $U|_D:=(\iota_sU)|_D$. Define the **restriction space**
$$H^s(D):=\{U|_D:U\in H^s(\mathbb R^d)\},\qquad \|u\|_{H^s(D)}:=\inf\{\|U\|_{H^s(\mathbb R^d)}:U|_D=u\text{ a.e. on }D\}.$$
Two extensions represent the same element exactly when their restrictions agree almost everywhere on $D$. This is the convention for fractional-order spaces on the polyhedral domain and its affine simplex cells used in the Nitsche items on this page. No $C^1$ boundary or trace theorem is part of this definition.
