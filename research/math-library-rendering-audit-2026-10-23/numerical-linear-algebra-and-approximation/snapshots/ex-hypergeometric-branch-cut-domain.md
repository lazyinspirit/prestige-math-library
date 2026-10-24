---
id: ex-hypergeometric-branch-cut-domain
kind: example
title: The Gauss series disk and a continued logarithmic branch have different domains
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fresnel-erf-and-hypergeometric-series, alg-certified-fresnel-erf-hypergeometric-series, thm-certified-fresnel-erf-hypergeometric-enclosures, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-ftc-second-part, thm-continuous-implies-integrable, cor-termwise-integration-of-a-real-power-series]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §15.2(i), Gauss series
      url: https://dlmf.nist.gov/15.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 4
---

## Statement

For $a=b=1$ and $c=2$, the Gauss-series branch in
[[def-fresnel-erf-and-hypergeometric-series]] is defined for $|z|<1$ and
there equals
$${}_2F_1(1,1;2;z)=\sum_{k=0}^\infty\frac{z^k}{k+1} =-\frac{\operatorname{Log}(1-z)}{z},$$
with value $1$ at $z=0$. The right side has a principal analytic
continuation to $\mathbb C\setminus[1,\infty)$, which includes $z=-2$; the
series evaluator correctly returns `domain` at $z=-2$ because this input lies
outside the defined power-series branch. This example distinguishes the
series branch's disk from the continuation branch's slit domain.

## Facts & Assumptions

**Given:** The exact parameters $a=b=1$, $c=2$.

[F1] [[def-fresnel-erf-and-hypergeometric-series]]: the Gauss branch is the
stated power series on $|z|<1$ with $c$ not a nonpositive integer.

[F2] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
$\operatorname{Log}'(w)=1/w$ away from the nonpositive real axis.

[F3] [[thm-ftc-second-part]]: a continuously differentiable complex path
satisfies the fundamental theorem of calculus by applying the real theorem to
its real and imaginary parts.

[F4] [[thm-continuous-implies-integrable]] and
[[cor-termwise-integration-of-a-real-power-series]]: a continuous integrand
on $[0,1]$ is integrable and a real power series may be integrated termwise
strictly inside its radius; apply the latter to both real and imaginary
component power series along the segment.

[F5] [[alg-certified-fresnel-erf-hypergeometric-series]]: its Gauss-series
branch returns `domain` unless $c$ avoids the excluded integers and $|z|<1$.

## Proof
1.1 For $a=b=1,c=2$, the Pochhammer products give $(1)_k=k!$ and $(2)_k=(k+1)!$, so each coefficient is $1/(k+1)$. For $|z|<1$, the geometric series converges uniformly along the segment $sz$ ($0\le s\le1$). Parameterizing the path and integrating the real and imaginary component power series termwise by [F4] gives $$\sum_{k=0}^\infty\frac{z^{k+1}}{k+1} =\int_0^1\frac{z}{1-sz}\,ds=-\operatorname{Log}(1-z),$$ where [F2], [F3], and [F4] justify the path integral identity since $\operatorname{Re}(1-sz)>0$ along the segment. Dividing by $z$ gives the formula, and the series gives value $1$ at $z=0$. [F1, F2, F3, F4, algebra]

2.1 The principal logarithm is holomorphic when $1-z$ avoids the nonpositive real axis, that is, when $z\notin[1,\infty)$. The quotient has a removable value at $z=0$ by step 1.1, so it defines the stated continuation domain, which contains $-2$. [F2, step 1.1, algebra]

3.1 Since $|-2|>1$, the defined Gauss-series branch fails its domain check and [F5] returns `domain`; this does not contradict the continued formula in step 2.1, which is a separately declared branch. [F1, F5, step 2.1] ∎