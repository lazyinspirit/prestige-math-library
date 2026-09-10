---
id: "fs-de-rham-cohomology-is-a-covariant-functor"
kind: "false-statement"
title: "De rham cohomology is a covariant functor"
deps: ["prop-de-rham-cohomology-is-a-contravariant-functor"]
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

## Statement

False claim: the pullback construction makes de Rham cohomology covariant.

## Facts & Assumptions

**Given:** On the discrete three-point manifold $X=\{1,2,3\}$, let $F$ swap $1,2$ and $G$ swap $2,3$. Let $u$ be the indicator of $\{1\}$.

[F1] [[prop-de-rham-cohomology-is-a-contravariant-functor]]: De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

## Refutation

**Proof technique:** direct.

1.1 Every function on $X$ is smooth and closed, with no nonzero degree-zero boundaries, so $u$ represents itself in $H^0$. Pullback is composition. Hence $(F^*G^*u)(2)=u(G(F(2)))=u(1)=1$, while $(G^*F^*u)(2)=u(F(G(2)))=u(3)=0$. [F1, given]

2.1 Thus these pullback operators do not commute, and $(G\circ F)^*=F^*G^*$ cannot be replaced by $G^*F^*$. In general $F:M\to N$ induces $F^*:H^\bullet(N)\to H^\bullet(M)$, with the reversed source and target, exactly as the contravariant functor theorem states. [F1, step 1.1] ∎

## Source locator

Lee, Proposition 17.2(a) and Corollary 17.3, p.442; explicit noncommuting permutation pullbacks supply the witness.
