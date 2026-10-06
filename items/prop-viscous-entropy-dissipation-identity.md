---
id: prop-viscous-entropy-dissipation-identity
kind: proposition
title: The viscous entropy dissipation identity
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-convex-entropy-entropy-flux-pair, def-laplacian-of-a-c2-function, thm-chain-rule, thm-algebra-of-derivatives, def-divergence-and-curl-of-a-c1-vector-field]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, convex-entropy testing leading to (4.23), p. 236"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, (5.40)--(5.42), pp. 48--49"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, $\varepsilon>0$, $f\in C^1(\mathbb R;\mathbb R^n)$ and let
$u^\varepsilon\in C^{1,2}(\Pi_T)$ be a classical solution of the viscous
conservation law
$$u^\varepsilon_t+\operatorname{div}_x f(u^\varepsilon)=\varepsilon\Delta u^\varepsilon\qquad\text{in }\Pi_T$$
([[def-scalar-conservation-law-and-flux]],
[[def-laplacian-of-a-c2-function]]). For every convex $\eta\in C^2(\mathbb R)$
and entropy flux $q$ with $q'(s)=\eta'(s)f'(s)$, the pointwise viscous entropy
balance is
$$\eta(u^\varepsilon)_t+\operatorname{div}_x q(u^\varepsilon)=\varepsilon\Delta_x\eta(u^\varepsilon)-\varepsilon\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2\le\varepsilon\Delta_x\eta(u^\varepsilon).$$
The nonpositive term is the entropy dissipation; for fixed $\varepsilon>0$
this is a balance with diffusion, not the first-order entropy inequality
([[def-convex-entropy-entropy-flux-pair]],
[[def-divergence-and-curl-of-a-c1-vector-field]]).

## Facts & Assumptions

**Given:** $n\ge1$, $\varepsilon>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, a classical solution $u^\varepsilon\in C^{1,2}(\Pi_T)$ of the viscous conservation law, and a convex $\eta\in C^2(\mathbb R)$ with entropy flux $q$, $q'=\eta'f'$.

[F1] Chain rules for a $C^1$ function of a $C^{1,2}$ function: the composition $\eta(u^\varepsilon)$ is $C^{1,2}$, while $q(u^\varepsilon)$ and $f(u^\varepsilon)$ are $C^1$, with $\partial_t\eta(u^\varepsilon)=\eta'(u^\varepsilon)u^\varepsilon_t$, and $\operatorname{div}_x q(u^\varepsilon)=q'(u^\varepsilon)\cdot\nabla_xu^\varepsilon=\eta'(u^\varepsilon)f'(u^\varepsilon)\cdot\nabla_xu^\varepsilon$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-convex-entropy-entropy-flux-pair]]).

[F2] Laplacian of a composition: $\Delta_x\eta(u^\varepsilon)=\eta'(u^\varepsilon)\Delta u^\varepsilon+\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2$, obtained by applying the chain rule and the product rule to the components $\partial_i(\eta(u^\varepsilon))=\eta'(u^\varepsilon)\partial_iu^\varepsilon$ and summing in $i$ ([[def-laplacian-of-a-c2-function]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the two left-hand terms are $\eta(u^\varepsilon)_t=\eta'(u^\varepsilon)u^\varepsilon_t$ and $\operatorname{div}_xq(u^\varepsilon)=\eta'(u^\varepsilon)f'(u^\varepsilon)\cdot\nabla_xu^\varepsilon$, and by [F2] the diffusion term is $\Delta_x\eta(u^\varepsilon)=\eta'(u^\varepsilon)\Delta u^\varepsilon+\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2$. [F1, F2]


2.1 Multiplying the viscous equation pointwise by $\eta'(u^\varepsilon)$ and adding the second identity of step 1.1 gives $\eta(u^\varepsilon)_t+\operatorname{div}_xq(u^\varepsilon)=\eta'(u^\varepsilon)\bigl(u^\varepsilon_t+\operatorname{div}_xf(u^\varepsilon)-\varepsilon\Delta u^\varepsilon\bigr)+\varepsilon\Delta_x\eta(u^\varepsilon)-\varepsilon\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2=\varepsilon\Delta_x\eta(u^\varepsilon)-\varepsilon\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2$, which is the asserted balance. [step 1.1, F1, algebra]


3.1 The convexity assumption gives $\eta''\ge0$, so the dissipation term $-\varepsilon\eta''(u^\varepsilon)|\nabla_xu^\varepsilon|^2$ is nonpositive pointwise and the balance implies the stated inequality; the term $\varepsilon\Delta_x\eta(u^\varepsilon)$ may change sign and cannot be dropped pointwise for fixed $\varepsilon>0$. [step 2.1, F2] ∎
