---
id: lem-a-generic-projection-can-preserve-properness
kind: lemma
title: "A generic projection can preserve properness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-a-generic-projection-can-preserve-properness). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 6.14"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let
$$ F=(g,\rho):M\to\mathbb R^N\times\mathbb R $$
be a smooth embedding such that $g(M)$ is bounded and $\rho$ is proper. If a
unit vector $u\in S^N$ is not parallel to the last-coordinate axis and lies
outside the secant and tangent direction images of $F$, then the orthogonal
projection $P_u\circ F$ is a proper injective immersion.

## Facts & Assumptions

**Given:** A smooth embedding $F=(g,\rho):M\to\mathbb R^N\times\mathbb R$ with $g(M)$ bounded and $\rho$ proper.

[F1] Secant directions are normalized differences of distinct image points, and tangent directions are normalized images of nonzero tangent vectors ([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]]).

## Proof
**Proof technique:** direct.

1.1 The kernel of the orthogonal projection $P_u$ is $\mathbb Ru$. If distinct points $p,q$ collapsed, then $F(p)-F(q)$ would be a nonzero scalar multiple of $u$, making $u$ a secant direction up to sign, contrary to the hypothesis. If the differential killed a nonzero tangent vector $v$, then $dF_p(v)$ would lie in $\mathbb Ru$; since $F$ is an immersion, this vector is nonzero and makes $u$ a tangent direction up to sign. Thus $P_u\circ F$ is injective and immersive directly from [F1], with no generic-existence theorem invoked. [F1, given, algebra]

1.2 Let $e=(0,1)$ be the last-coordinate unit vector and put $e':=P_u(e)$. The hypothesis that $u$ is not parallel to $e$ is exactly $e'\ne0$. Decompose $u^\perp=\mathbb Re'\oplus(e')^\perp$. Since $$P_u(F(p))=P_u(g(p),0)+\rho(p)e',$$ its $(e')^\perp$-component is bounded. Its scalar component along $e'/\|e'\|$ is $$\rho'(p)=\|e'\|\rho(p)+b(p),$$ where $b$ is bounded. [given, construct, algebra]

2.1 The function $\rho'$ is proper. Indeed, if $J\subseteq\mathbb R$ is compact and $|b|\le B$, then $\rho'(p)\in J$ forces $\rho(p)$ into a bounded closed interval because $\|e'\|>0$. Thus $(\rho')^{-1}(J)$ is a closed subset of the inverse image under the proper map $\rho$ of a compact interval. [step 1.2, given]

3.1 If $K\subseteq u^\perp$ is compact, its image under the linear coordinate along $e'$ is compact. Hence $(P_u\circ F)^{-1}(K)$ is a closed subset of the compact set $(\rho')^{-1}(\operatorname{pr}_{e'}K)$ and is compact. Therefore $P_u\circ F$ is proper. Together with step 1.1, it is a proper injective immersion. [step 1.1, step 2.1] ∎
