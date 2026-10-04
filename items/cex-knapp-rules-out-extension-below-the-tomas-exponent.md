---
id: cex-knapp-rules-out-extension-below-the-tomas-exponent
kind: counterexample
title: Knapp rules out extension below the Tomas exponent
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-spherical-cap-and-dual-slab-scales
- lem-cap-wave-packet-has-dual-tube-concentration
- thm-knapp-necessary-condition-for-spherical-ltwo-restriction
- def-conjugate-exponents
- def-real-power
- def-natural-logarithm
- thm-natural-logarithm-laws
- thm-exponential-limits-and-range
- def-nonnegative-lebesgue-integral
- lem-restriction-and-extension-estimates-are-dual
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.2, printed p.8: spherical cap scales, dual tube and necessary exponent comparison; the exact constants and cap formula are computed locally.'
---

## Statement refuted

Assume Countable Choice. Let $n\ge2$ and let $1\le q<2(n+1)/(n-1)$. For every $C>0$ there is $\delta\in(0,1]$ such that the spherical cap data $g=\mathbf 1_{C_\delta}\in L^2(\sigma)$ satisfy $\|Eg\|_{L^q(\mathbb R^n)}>C\|g\|_{L^2(\sigma)}$. Hence no extension estimate $E:L^2(S^{n-1})\to L^q(\mathbb R^n)$ holds below the Stein-Tomas exponent, and consequently no restriction estimate $R:L^p(\mathbb R^n)\to L^2(S^{n-1})$ holds for $p>2(n+1)/(n+3)$.

## Facts & Assumptions

[F1] Cap and tube scales: $c'\delta^{n-1}\le\sigma(C_\delta)\le C'\delta^{n-1}$ and $\lambda_n(T_\delta)=(2c_n)^n\delta^{-(n+1)}$ for $\delta\in(0,1]$. ([[lem-spherical-cap-and-dual-slab-scales]])

[F2] Concentration: $|Eg_\delta(x)|\ge\tfrac12\sigma(C_\delta)$ for every $x\in T_\delta$, so $\|Eg_\delta\|_q^q\ge(\tfrac12\sigma(C_\delta))^q\lambda_n(T_\delta)$; moreover $\|g_\delta\|_{L^2(\sigma)}=\sigma(C_\delta)^{1/2}$. ([[lem-cap-wave-packet-has-dual-tube-concentration]], [[def-nonnegative-lebesgue-integral]])

[F3] The exponent relation $q<2(n+1)/(n-1)$ is equivalent to $a:=(n-1)/2-(n+1)/q<0$. Then $\delta^a=\exp(a\log\delta)\to\infty$ as $\delta\downarrow0$: for any $M>0$, $0<\delta<\exp(-M)$ implies $\log\delta<-M$ by the inverse identity and strict monotonicity, so $a\log\delta\to\infty$, and the exponential diverges there. The Knapp theorem also rules out the restriction endpoint $p=\infty$. ([[def-conjugate-exponents]], [[thm-knapp-necessary-condition-for-spherical-ltwo-restriction]], [[def-real-power]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-exponential-limits-and-range]])

[F4] Duality: for $1<p<\infty$, the restriction estimate at exponent $p$ is equivalent to the extension estimate at $q=p'$ with the same constant. ([[lem-restriction-and-extension-estimates-are-dual]])

## Counterexample

**Given:** Countable Choice, $n\ge2$, $1\le q<2(n+1)/(n-1)$, $C>0$, the caps $C_\delta=\{\omega\in S^{n-1}:1-\omega\cdot e_n\le\delta^2\}$, the boxes $T_\delta=\{x:|x_n|\le c_n\delta^{-2},\ |x_j|\le c_n\delta^{-1}\ (j<n)\}$, where $a_n>0$ is a constant furnished by [[lem-cap-wave-packet-has-dual-tube-concentration]] and $c_n=a_n/\sqrt{n-1}$, the extension $E$ of [[def-fourier-restriction-and-adjoint-extension-operators]], and $g_\delta:=\mathbf 1_{C_\delta}$.

**Proof technique:** direct; evaluate the extension on the cap family and observe that the quotient of norms diverges as $\delta\downarrow0$ below the Tomas exponent.

1.1 On the coordinate box $T_\delta$, $|(x_1,\dots,x_{n-1})|\le\sqrt{n-1}c_n\delta^{-1}=a_n\delta^{-1}$ and $|x_n|\le c_n\delta^{-2}\le a_n\delta^{-2}$, so this box lies in the cylindrical tube supplied by [F2]. Therefore [F1] and [F2] give $\|Eg_\delta\|_q/\|g_\delta\|_2\ge\tfrac12\sigma(C_\delta)^{1/2}\lambda_n(T_\delta)^{1/q}\ge\tfrac12(c')^{1/2}(2c_n)^{n/q}\delta^{(n-1)/2-(n+1)/q}$. This is an inequality with an explicit positive constant, and its exponent $a=(n-1)/2-(n+1)/q$ is negative by [F3]. [F1, F2, F3, algebra]

2.1 Divergence. Since $a<0$, $\delta^a\to+\infty$ as $\delta\downarrow0$; hence for every $C>0$ there is $\delta\in(0,1]$ with $\|Eg_\delta\|_q>C\|g_\delta\|_2$, which refutes the existence of any finite extension constant $\|E\|_{L^2(\sigma)\to L^q}$ for $q$ below the Tomas exponent. [F3, step 1.1]

3.1 The restriction form. If a restriction estimate at some finite $p>1$ held with constant $R$, then by the duality of restriction and extension estimates the extension estimate would hold at $q_0=p'$ with the same constant; for $p>2(n+1)/(n+3)$ one has $p'<2(n+1)/(n-1)$, which step 2.1 rules out. At $p=\infty$, the Knapp theorem [F3] also rules out the estimate by its compact norm tests. Hence no restriction estimate exists for $p\in(2(n+1)/(n+3),\infty]$, as asserted. [F1, F2, F3, F4, step 2.1]

4.1 Conclusion. Steps 1.1–3.1 exhibit the cap family $g_\delta$ whose extension norms exceed any proposed constant below the exponent $2(n+1)/(n-1)$, and step 3.1 transfers the failure to the restriction side for $p>2(n+1)/(n+3)$. [step 1.1, step 2.1, step 3.1] ∎
