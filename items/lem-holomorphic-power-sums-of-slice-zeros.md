---
id: lem-holomorphic-power-sums-of-slice-zeros
kind: lemma
title: "The power sums of the slice zeros vary holomorphically"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-stability-of-slice-zero-count-under-holomorphic-parameters, def-logarithmic-derivative-meromorphic-function, thm-contour-parameter-integrals-are-holomorphic, thm-weighted-argument-principle, cor-holomorphic-functions-in-several-variables-are-smooth, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, prop-algebra-of-holomorphic-functions-in-several-variables, thm-locally-bounded-separate-holomorphy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.3"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.4"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Under the neighbourhood and radius supplied by
[[lem-stability-of-slice-zero-count-under-holomorphic-parameters]], define for
each integer $k\ge0$

$$p_k(z'):=\frac{1}{2\pi i}\int_{|\zeta|=r}\zeta^k\frac{\partial f/\partial z_m(z',\zeta)}{f(z',\zeta)}\,d\zeta.$$

Then $p_k$ is holomorphic in $z'$. If
$\lambda_1(z'),\dots,\lambda_d(z')$ are the zeros of
$\zeta\mapsto f(z',\zeta)$ in $|\zeta|<r$, counted with multiplicity, then

$$p_k(z')=\lambda_1(z')^k+\cdots+\lambda_d(z')^k.$$

## Facts & Assumptions

**Given:** A representative of $f$ on a neighbourhood of the closed cylinder $V\times\{|\zeta|\le r\}$ and the radius $r$ and neighbourhood $V$ from [[lem-stability-of-slice-zero-count-under-holomorphic-parameters]].

[L1] Every slice $\zeta\mapsto f(z',\zeta)$ has no zero on $|\zeta|=r$ and has exactly $d$ interior zeros counted with multiplicity ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[L2] The derivative $\partial f/\partial z_m$ is holomorphic, holomorphic functions are separately holomorphic and continuous, and quotients by nonvanishing holomorphic functions stay holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]], [[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]], [[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L3] A contour integral with continuous integrand that is holomorphic in one complex parameter is holomorphic in that parameter ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L4] A locally bounded separately holomorphic function is holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

[L5] The weighted argument principle gives $$\frac{1}{2\pi i}\int_\Gamma g(\zeta)\frac{h'(\zeta)}{h(\zeta)}\,d\zeta =\sum \operatorname{ord}_a(h)\,g(a)$$ for a holomorphic test function $g$ and a zero-free boundary ([[thm-weighted-argument-principle]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the denominator $f(z',\zeta)$ is nonzero on $V\times\{|\zeta|=r\}$. Hence [L2] makes $$\Phi_k(z',\zeta):=\zeta^k\frac{\partial f/\partial z_m(z',\zeta)}{f(z',\zeta)}$$ continuous on that compact cylinder. Fixing all coordinates of $z'$ except one, [L2] makes $\Phi_k$ holomorphic in the remaining coordinate and [L3] makes the corresponding slice of $p_k$ holomorphic. The same compact continuity gives a uniform bound on $\Phi_k$, so the ML estimate makes $p_k$ locally bounded on $V$. Therefore [L4] makes $p_k$ holomorphic on $V$. [L1, L2, L3, L4]

2.1 Fix $z'\in V$ and apply [L5] to the one-variable holomorphic function $h(\zeta):=f(z',\zeta)$ on the disc $|\zeta|<r$ with test function $g(\zeta)=\zeta^k$. By [L1], the boundary circle is zero-free and the only singularities of $h'/h$ inside are the zeros $\lambda_j(z')$, counted with their multiplicities. Thus $$p_k(z')=\sum_{j=1}^d \lambda_j(z')^k.$$ [given, L1, L5] ∎
