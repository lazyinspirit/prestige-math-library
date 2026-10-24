---
id: cex-global-sections-not-right-exact
kind: counterexample
title: "Global sections need not preserve surjections"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-global-sections-left-exact]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.6.F"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 17.3"
      url: "https://stacks.math.columbia.edu/tag/01AF"
---

## Statement refuted

If $\varphi:\mathcal F\to\mathcal G$ is an epimorphism of sheaves of abelian
groups on a space $X$, then the induced map on global sections
$$
\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal G)
$$
is always surjective.

## Facts & Assumptions

**Given:** The circle $X=S^1$.

[F1] Global sections need not preserve epimorphisms in general ([[lem-global-sections-left-exact]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $\mathcal C$ be the sheaf of continuous real-valued functions on $S^1$, and let $\underline{\mathbb Z}$ be the subsheaf of locally constant integer-valued functions. Let $\mathcal Q$ be the sheafification of the presheaf quotient $V\mapsto \mathcal C(V)/\underline{\mathbb Z}(V)$. Every germ of $\mathcal Q$ is represented locally by a continuous function, so the canonical map $\mathcal C\to\mathcal Q$ is locally surjective and hence an epimorphism of sheaves. [construct]

1.2 Cover the circle by the two arcs $U_0=S^1\setminus\{(-1,0)\}$ and $U_1=S^1\setminus\{(1,0)\}$. Choose continuous angle functions $\theta_0:U_0\to(-1/2,1/2)$ and $\theta_1:U_1\to(0,1)$ with $e^{2\pi i\theta_i(z)}=z$. Their quotient classes agree on $U_0\cap U_1$, because the difference $\theta_1-\theta_0$ is locally constant integer-valued there. Thus they glue to a section $q\in\Gamma(S^1,\mathcal Q)$. If $q$ came from a global continuous real function $g$, then $g-\theta_i$ would be an integer-valued continuous function on the connected set $U_i$, hence constant. On the two connected components of $U_0\cap U_1$ this would force the same constant difference to be both $0$ and $1$, which is impossible. So $\Gamma(S^1,\mathcal C)\to\Gamma(S^1,\mathcal Q)$ is not surjective. [construct, contradiction]

2.1 Therefore an epimorphism of sheaves can fail to become surjective on global sections. This is exactly the phenomenon asserted in [F1], so the statement is refuted. [F1, step 1.1, step 1.2] ∎
