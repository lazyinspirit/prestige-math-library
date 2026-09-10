---
id: "cex-the-pullback-on-cohomology-reverses-composition-order"
kind: "counterexample"
title: "The pullback on cohomology reverses composition order"
deps: ["prop-de-rham-cohomology-is-a-contravariant-functor", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Pullback composition can be treated as covariant, so $(G\circ F)^*=G^*F^*$.

## Facts & Assumptions

**Given:** $X=\{1,2,3\}$ discrete, $F=(12)$, $G=(23)$, and $u=1_{\{1\}}$.

[F1] [[prop-de-rham-cohomology-is-a-contravariant-functor]]: De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

[F2] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

## Counterexample

**Proof technique:** direct.

1.1 All functions are locally constant, hence identify with their $H^0$ classes. At the point $2$, $F^*G^*u=u\circ G\circ F$ has value $u(1)=1$, whereas $G^*F^*u=u\circ F\circ G$ has value $u(3)=0$. [F2, given, algebra]

2.1 The actual functoriality identity is $(G\circ F)^*=F^*G^*$, so the two displayed values refute the proposed covariant ordering even when all sources and targets coincide. [F1, step 1.1] ∎

## Source locator

Lee, Proposition 17.2(a) and Corollary 17.3, p.442; the noncommuting finite permutations are computed explicitly.
