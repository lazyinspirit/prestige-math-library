---
id: "prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms"
kind: "proposition"
title: "Riemannian isometries form a group and local isometries are local diffeomorphisms"
deps: ["def-riemannian-isometry-and-local-isometry", "prop-pullback-of-covariant-tensors-is-smooth-and-functorial", "thm-smooth-inverse-function-theorem-on-manifolds"]
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

Isometries of a fixed Riemannian manifold form a group. A metric-preserving smooth map between equal-dimensional boundaryless Riemannian manifolds is a local diffeomorphism.

## Facts & Assumptions

**Given:** Isometries of $(M,g)$, and a smooth $F:(P,g_P)\to(Q,g_Q)$ with $F^*g_Q=g_P$ and equal dimensions for the second assertion.

[F1] [[def-riemannian-isometry-and-local-isometry]]: An **isometry** $F:(M,g)\to(N,h)$ is a diffeomorphism with $F^*h=g$. A **local isometry** is a smooth local diffeomorphism with $F^*h=g$. An **isometric immersion** is a smooth immersion satisfying that same pullback identity. Use def-pullback-riemannian-metric and def-diffeomorphism-and-local-diffeomorphism-of-manifolds. Positivity forces injective differential by prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions. In equal dimensions on boundaryless manifolds, the inverse function theorem as applied in the next proposition makes a metric-preserving smooth map a local isometry. At a boundary the definition retains the local-diffeomorphism requirement. An isometric immersion need not have equal source and target dimensions.

[F2] [[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]]: If $F:M\to N$ is smooth and $T$ is a smooth covariant tensor field on $N$, then $F^*T$ is a smooth covariant tensor field on $M$. Moreover, $$ (\operatorname{id}_M)^*T=T,\qquad (G\circ F)^*T=F^*(G^*T) $$ for every composable smooth map $G$.

[F3] [[thm-smooth-inverse-function-theorem-on-manifolds]]: Let $F:M\to N$ be a smooth map and let $p\in M$. If $dF_p:T_pM\to T_{F(p)}N$ is an isomorphism, then there are open neighbourhoods $U$ of $p$ and $V$ of $F(p)$ such that $F|_U:U\to V$ is a diffeomorphism.

## Proof

**Proof technique:** direct.

1.1 Identity preserves $g$, and if $a^*g=b^*g=g$ then $(b\circ a)^*g=a^*b^*g=g$. For an isometry $a$, $(a^{-1})^*g=(a^{-1})^*a^*g=(a\circ a^{-1})^*g=g$. Composition of diffeomorphisms is associative, so these identities give the group laws. [F1, F2, given]

2.1 If $dF_pv=0$, then $g_P(v,v)=g_Q(dF_pv,dF_pv)=0$, hence $v=0$. Equal finite dimensions make $dF_p$ an isomorphism. The smooth inverse function theorem on the boundaryless manifolds supplies a diffeomorphism on a neighbourhood of each point, exactly the local-diffeomorphism conclusion. This includes dimension zero. [F1, F3, given] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
