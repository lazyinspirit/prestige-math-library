---
id: lem-fresnel-series-geometric-tail
kind: lemma
title: Fresnel series geometric tail bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fresnel-erf-and-hypergeometric-series, def-complex-trigonometric-and-hyperbolic-functions, thm-complex-trigonometric-and-hyperbolic-power-series, thm-termwise-differentiation-of-complex-power-series, cor-complex-differentiability-implies-continuity, thm-ftc-second-part, thm-continuous-implies-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.6(i), equations 7.6.4 and 7.6.6
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Statement

For the terms $c_k$ of $C$ and $s_k$ of $S$ in
[[def-fresnel-erf-and-hypergeometric-series]],

$$\frac{|c_{k+1}|}{|c_k|}\le \frac{\pi^2|z|^4/4}{(2k+1)(2k+2)}, \qquad \frac{|s_{k+1}|}{|s_k|}\le \frac{\pi^2|z|^4/4}{(2k+2)(2k+3)}.$$

Each displayed quotient is asserted only when its denominator is nonzero. At $z=0$, every $c_k=s_k=0$, so both series and every tail are zero. The corresponding division-free inequalities obtained by multiplying by $|c_k|$ or $|s_k|$ hold for every $z$.

Once the applicable bound is at most $q<1$ for all terms after a first
omitted term, the absolute tail is bounded by that term divided by $1-q$.
Both series converge locally uniformly on $\mathbb C$ and equal the integrals
of $\cos(\pi t^2/2)$ and $\sin(\pi t^2/2)$ from $0$ to $z$.

## Facts & Assumptions

**Given:** The series definitions of $C,S$ in
[[def-fresnel-erf-and-hypergeometric-series]].

[F1] [[def-fresnel-erf-and-hypergeometric-series]]: $c_k=(-1)^k(\pi/2)^{2k}
z^{4k+1}/((2k)!(4k+1))$ and
$s_k=(-1)^k(\pi/2)^{2k+1}z^{4k+3}/((2k+1)!(4k+3))$.

[F2] [[def-complex-trigonometric-and-hyperbolic-functions]] and
[[thm-complex-trigonometric-and-hyperbolic-power-series]]:
complex sine and cosine are given by their entire factorial power series.

[F3] [[thm-termwise-differentiation-of-complex-power-series]]:
an entire power series may be differentiated term by term.

[F4] [[thm-ftc-second-part]] and
[[cor-complex-differentiability-implies-continuity]] and
[[thm-continuous-implies-integrable]]: along each compact smooth path piece,
the real and imaginary parts of a continuously differentiable function
integrate to their endpoint differences.

## Proof
1.1 If $z=0$, all terms in [F1] vanish, and their division-free bounds and zero tails hold directly. For $z\ne0$, every term is nonzero, and taking ratios in [F1] gives $$\frac{|c_{k+1}|}{|c_k|}=\frac{\pi^2|z|^4}{4} \frac{4k+1}{(2k+1)(2k+2)(4k+5)},\qquad \frac{|s_{k+1}|}{|s_k|}=\frac{\pi^2|z|^4}{4} \frac{4k+3}{(2k+2)(2k+3)(4k+7)}.$$ The omitted factors are each less than $1$, yielding the displayed bounds. [F1, algebra]


2.1 The denominators in the bounds grow quadratically in $k$, so the ratios tend to zero; summing the resulting geometric majorant gives the stated tail bound and uniform convergence on every disk. [step 1.1, algebra]


3.1 The infinite-radius power series in [F1] may be differentiated termwise by [F3]. The resulting derivatives are $$C'(z)=\sum_{k=0}^{\infty}\frac{(-1)^k(\pi/2)^{2k}z^{4k}}{(2k)!}=\cos(\pi z^2/2),\qquad S'(z)=\sum_{k=0}^{\infty}\frac{(-1)^k(\pi/2)^{2k+1}z^{4k+2}}{(2k+1)!}=\sin(\pi z^2/2),$$ where the last equalities use [F2]. [F1, F2, F3, step 2.1, algebra]


4.1 Both $C$ and $S$ are entire primitives of their displayed integrands. For any piecewise continuously differentiable path $\gamma$ from $0$ to $z$, put $\eta_h=\gamma(s+h)-\gamma(s)$ on each smooth piece. Complex differentiability gives $C(\gamma(s)+\eta_h)-C(\gamma(s))=C'(\gamma(s))\eta_h+ \eta_h\epsilon_C(\eta_h)$ with $\epsilon_C(\eta)\to0$ as $\eta\to0$; take $\epsilon_C(0)=0$. Since $\eta_h/h\to\gamma'(s)$, division by $h$ makes the remainder tend to zero, and hence $(C\circ\gamma)'(s)=C'(\gamma(s))\gamma'(s)$. The same calculation gives $(S\circ\gamma)'(s)=S'(\gamma(s))\gamma'(s)$. These derivatives are continuous on compact path pieces and integrable by [F4]. The componentwise fundamental theorem and finite additivity therefore give the endpoint differences $C(z)-C(0)=C(z)$ and $S(z)-S(0)=S(z)$. Hence the integrals are path-independent and, in particular, equal the integrals along the segment from $0$ to $z$. [F4, step 3.1, algebra] ∎

