---
id: "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions"
kind: "proposition"
title: "Pullback of a riemannian metric is riemannian exactly for immersions"
deps: ["def-pullback-riemannian-metric", "prop-pullback-of-covariant-tensors-is-smooth-and-functorial", "def-immersion-submersion-and-constant-rank-map"]
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

$F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and a Riemannian metric $h$.

[F1] [[def-pullback-riemannian-metric]]: For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$, its **pullback tensor** is $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$. This is def-pullback-of-a-covariant-tensor-field for the tensor in def-riemannian-metric-and-riemannian-manifold. It is always symmetric and positive semidefinite; the name does not assert positive definiteness. Smoothness and the precise immersion criterion are established next.

[F2] [[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]]: If $F:M\to N$ is smooth and $T$ is a smooth covariant tensor field on $N$, then $F^*T$ is a smooth covariant tensor field on $M$. Moreover, $$ (\operatorname{id}_M)^*T=T,\qquad (G\circ F)^*T=F^*(G^*T) $$ for every composable smooth map $G$.

[F3] [[def-immersion-submersion-and-constant-rank-map]]: Let $F:M^m\to N^n$ be a smooth map. - $F$ is an **immersion at $p\in M$** when $dF_p$ is injective. - $F$ is a **submersion at $p\in M$** when $dF_p$ is surjective. - $F$ has **constant rank $r$ on $A\subseteq M$** when $\operatorname{rank}_pF=r$ for every $p\in A$ (def-rank-of-a-smooth-map-at-a-point). The map is an **immersion** or **submersion** without qualification when the corresponding pointwise condition holds at every point of $M$.

## Proof

**Proof technique:** direct.

1.1 Tensor pullback is smooth, and $(F^*h)_p(v,v)=h_{F(p)}(dF_pv,dF_pv)\ge0$, with equality exactly when $dF_pv=0$. If $dF_p$ is injective at every point, the value is positive for every nonzero $v$, so the pullback is Riemannian. [F1, F2, F3, given]

2.1 Conversely, positive definiteness forces $dF_pv=0$ to imply $v=0$, hence $F$ is an immersion. A vector in $\ker dF_p$ pairs to zero with every vector; if it is in the radical, its pairing with itself is zero, so the preceding equality forces it into $\ker dF_p$. This proves the radical assertion as well. [F1, F3, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
