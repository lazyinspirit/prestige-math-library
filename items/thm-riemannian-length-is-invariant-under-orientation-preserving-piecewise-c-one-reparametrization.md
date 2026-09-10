---
id: "thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization"
kind: "theorem"
title: "Riemannian length is invariant under orientation preserving piecewise c one reparametrization"
deps: ["lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision", "thm-substitution-with-riemann-integrable-inner-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $\varphi:[c,d]\to[a,b]$ is a continuous nondecreasing surjection, piecewise $C^1$, and $\gamma$ is piecewise $C^1$, then $\gamma\circ\varphi$ is piecewise $C^1$ and $L_g(\gamma\circ\varphi)=L_g(\gamma)$. Constant intervals of $\varphi$ are allowed.

## Facts & Assumptions

**Given:** The maps in the statement, with compact parameter intervals.

[F1] [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]]: Riemannian length is independent of admissible finite subdivision and of corner derivative conventions.

[F2] [[thm-substitution-with-riemann-integrable-inner-derivative]]: Let $c<d$, let $J=[p,q]$ with $p<q$, and let $f:J\to\mathbb R$ be continuous. Suppose $\varphi:[c,d]\to J$ is continuous on $[c,d]$ and differentiable on $(c,d)$, and that the interior derivative has a Riemann-integrable extension $h:[c,d]\to\mathbb R$. Then $(f\circ\varphi)h$ is Riemann integrable and $$\int_c^d f(\varphi(t))h(t)\,dt=\int_{\varphi(c)}^{\varphi(d)}f(x)\,dx.$$ The limits on the right are oriented. No injectivity or monotonicity of $\varphi$ is required; the identity also covers $\varphi(c)>\varphi(d)$ and $\varphi(c)=\varphi(d)$.

## Proof

**Proof technique:** direct.

1.1 For each of the finitely many breakpoints $t_j$ of $\gamma$, its fibre under $\varphi$ is a closed interval or singleton by monotonicity and continuity. Refine $[c,d]$ at their endpoints and at the breakpoints of $\varphi$. Each remaining piece either maps into one $C^1$ piece of $\gamma$ or is a constant fibre; thus the composition is piecewise $C^1$. [given, construct]

2.1 On a nonconstant piece $[u,v]$, the chain rule and $\varphi\prime\ge0$ give $|\frac{d}{dt}(\gamma\circ\varphi)|_g=|\dot\gamma(\varphi(t))|_g\varphi\prime(t)$. Speed on the target piece is continuous and the derivative of $\varphi$ is continuous up to one-sided endpoints, so the substitution theorem applies and gives length $\int_{\varphi(u)}^{\varphi(v)}|\dot\gamma(s)|_gds$. Constant fibres have zero speed and zero endpoint difference. Summing gives the full target integral because monotone surjectivity sends $c$ to $a$ and $d$ to $b$. Partition independence removes the refinements. Degenerate singleton intervals give zero on both sides. [F1, F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
