---
id: lem-erf-series-geometric-tail
kind: lemma
title: Error-function series geometric tail bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fresnel-erf-and-hypergeometric-series, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-termwise-differentiation-of-complex-power-series, cor-complex-differentiability-implies-continuity, thm-ftc-second-part, thm-continuous-implies-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.6(i), equation 7.6.1
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

For the $k$th term $e_k$ of the $\operatorname{erf}$ series in
[[def-fresnel-erf-and-hypergeometric-series]],

$$\frac{|e_{k+1}|}{|e_k|} =\frac{|z|^2}{k+1}\frac{2k+1}{2k+3} \le\frac{|z|^2}{k+1}.$$

Thus, if $|z|^2/(K+2)=q<1$, the tail after terms $0,\ldots,K$ is bounded by
$|e_{K+1}|/(1-q)$. The series converges locally uniformly and equals
$2/\sqrt\pi$ times the integral of $e^{-t^2}$ from $0$ to $z$.

## Facts & Assumptions

**Given:** The $\operatorname{erf}$ series in
[[def-fresnel-erf-and-hypergeometric-series]].

[F1] [[def-fresnel-erf-and-hypergeometric-series]]:
$e_k=(2/\sqrt\pi)(-1)^kz^{2k+1}/(k!(2k+1))$.

[F2] [[def-complex-exponential]] and
[[lem-complex-exponential-series-converges-everywhere]]:
$\exp w=\sum_{k\ge0}w^k/k!$ with absolute convergence for every complex $w$.

[F3] [[thm-termwise-differentiation-of-complex-power-series]]:
an entire power series may be differentiated term by term.

[F4] [[thm-ftc-second-part]] and
[[cor-complex-differentiability-implies-continuity]] and
[[thm-continuous-implies-integrable]]: the real and imaginary parts of a
continuously differentiable path satisfy the fundamental theorem of calculus;
continuous derivatives on a compact parameter interval are integrable.

## Proof
1.1 Dividing successive absolute terms in [F1] gives the stated ratio. For $k\ge K+1$ it is at most $q<1$, so the tail is dominated by $|e_{K+1}|\sum_{j\ge0}q^j=|e_{K+1}|/(1-q)$. On every disk the ratio is eventually below $1$, proving local uniform convergence. [F1, algebra]


2.1 The series in [F1] has infinite radius by step 1.1, so [F3] gives $$\operatorname{erf}'(z)=\frac{2}{\sqrt\pi}\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k}}{k!}=\frac{2}{\sqrt\pi}\exp(-z^2),$$ using [F2] and the definition of the exponential series. Thus erf is an entire primitive of the stated integrand and $\operatorname{erf}(0)=0$. [F1, F2, F3, step 1.1, algebra]


3.1 Let $\gamma:[0,1]\to\mathbb C$ be any piecewise continuously differentiable path with $\gamma(0)=0$ and $\gamma(1)=z$. On a smooth piece, put $\eta_h=\gamma(s+h)-\gamma(s)$. Complex differentiability gives $\operatorname{erf}(\gamma(s)+\eta_h)-\operatorname{erf}(\gamma(s)) =\operatorname{erf}'(\gamma(s))\eta_h+\eta_h\epsilon(\eta_h)$ with $\epsilon(\eta)\to0$ as $\eta\to0$; take $\epsilon(0)=0$. Since $\eta_h/h\to\gamma'(s)$, division by $h$ makes the remainder tend to zero and proves $(\operatorname{erf}\circ\gamma)'(s)=\operatorname{erf}'(\gamma(s))\gamma'(s)$. The derivative is continuous on that compact piece and its real and imaginary parts are integrable by [F4]. Applying [F4] componentwise and adding over the finitely many pieces gives $$\int_{\gamma}\frac{2}{\sqrt\pi}e^{-t^2}\,dt=\operatorname{erf}(z)-\operatorname{erf}(0)=\operatorname{erf}(z).$$ This proves the segment identity and path independence without interchanging a series limit with a line integral. [F4, step 2.1, algebra] ∎

