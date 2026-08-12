---
id: thm-substitution-with-riemann-integrable-inner-derivative
kind: theorem
title: "Substitution for a continuous inner map with a Riemann-integrable extension of its interior derivative, without monotonicity or injectivity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-newton-leibniz-with-interior-derivative, thm-ftc-first-part, thm-chain-rule, thm-continuous-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations, def-oriented-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: reduction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Theorem 12.12"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf"
    - title: "J. Lebl, Basic Analysis I & II, Theorem 5.3.5"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $c<d$, let $J=[p,q]$ with $p<q$, and let $f:J\to\mathbb R$ be continuous. Suppose $\varphi:[c,d]\to J$ is continuous on $[c,d]$ and differentiable on $(c,d)$, and that the interior derivative has a Riemann-integrable extension $h:[c,d]\to\mathbb R$. Then $(f\circ\varphi)h$ is Riemann integrable and

$$\int_c^d f(\varphi(t))h(t)\,dt=\int_{\varphi(c)}^{\varphi(d)}f(x)\,dx.$$

The limits on the right are oriented. No injectivity or monotonicity of $\varphi$ is required; the identity also covers $\varphi(c)>\varphi(d)$ and $\varphi(c)=\varphi(d)$.

## Facts & Assumptions

**Given:** The functions and intervals in the statement.

[L1] A continuous integrand has an integral function differentiable at every point, with derivative equal to that integrand ([[thm-ftc-first-part]]).

[L2] The chain rule gives $(H\circ\varphi)'=(H'\circ\varphi)\varphi'$ on the interior ([[thm-chain-rule]]).

[L3] Continuous functions on a compact interval are Riemann integrable, and products of Riemann-integrable functions are Riemann integrable ([[thm-continuous-implies-integrable]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L4] A continuous function with an interior derivative admitting an integrable extension satisfies Newton--Leibniz ([[thm-newton-leibniz-with-interior-derivative]]).

[L5] Oriented integrals satisfy $\int_u^u f=0$ and $\int_v^u f=-\int_u^v f$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** reduction.

1.1 Fix $r\in J$ and define $H(x):=\int_r^x f$ with oriented limits. By [L1], $H$ is differentiable on $J$ and $H'=f$, including relative endpoint derivatives. [given, L1, L5]

1.2 The composite $f\circ\varphi$ is continuous and hence integrable; its product with the integrable $h$ is integrable by [L3]. [given, L3]

2.1 The composite $H\circ\varphi$ is continuous on $[c,d]$, differentiable on $(c,d)$, and [L2] gives $(H\circ\varphi)'(t)=f(\varphi(t))h(t)$ there. [given, step 1.1, L2]

3.1 Applying [L4] to $H\circ\varphi$ gives $\int_c^d(f\circ\varphi)h=H(\varphi(d))-H(\varphi(c))$. [step 2.1, step 1.2, L4]

4.1 The oriented definition in [L5] gives $H(v)-H(u)=\int_u^v f$ for every $u,v\in J$, whether $u<v$, $u=v$, or $u>v$. Taking $u=\varphi(c)$ and $v=\varphi(d)$ completes all three endpoint-order cases. [step 1.1, L5, algebra] ∎
