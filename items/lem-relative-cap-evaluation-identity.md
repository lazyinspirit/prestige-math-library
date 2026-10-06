---
id: lem-relative-cap-evaluation-identity
kind: lemma
title: "Relative cap and cup evaluation identity"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-cap-product, def-singular-cup-product-on-cochains, lem-relative-kronecker-evaluation-is-well-defined-and-natural, def-relative-fundamental-class-and-boundary-orientation, thm-cap-product-boundary-identity]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, the identity <a cup x, [M]> = <x, a cap [M]> for the cohomology-first cap product, printed pp. 239-241"
    - title: "Glen E. Bredon, Topology and Geometry, Graduate Texts in Mathematics 139, Chapter VI (relative cap and cup products)"
      url: "https://link.springer.com/book/10.1007/978-1-4757-6848-0"
      locator: "relative cap products and the evaluation pairing"
---

## Statement

Let $W$ be a compact oriented $R$-oriented smooth $n$-manifold with boundary
$M=\partial W$, let $a\in H^p(W,M;R)$ and $x\in H^{n-p}(W;R)$, and let
$[W,M]\in H_n(W,M;R)$ be the relative fundamental class of
[[def-relative-fundamental-class-and-boundary-orientation]]. Then, in the
cohomology-first convention of [[def-relative-cap-product]],
$$\langle a\smile x,[W,M]\rangle=\langle x,a\cap[W,M]\rangle,$$
where the left product is the relative/absolute cup product evaluated by
relative Kronecker evaluation and the right pairing is absolute Kronecker
evaluation.

## Facts & Assumptions

**Given:** A compact oriented $n$-manifold $W$ with boundary $M=\partial W$, a relative cohomology class $a\in H^p(W,M;R)$ and an absolute class $x\in H^{n-p}(W;R)$.

[L1] The cohomology-first cap formula sends a $p$-cochain $\varphi$ and an $n$-simplex $\sigma$ to $\varphi\cap\sigma=\varphi(\sigma[0,\dots,p])\,\sigma[p,\dots,n]$, extended linearly; for $B=\varnothing$ the relative cap product is $H^p(X,A;R)\otimes_R H_n(X,A;R)\to H_{n-p}(X;R)$, and its descent is proved from the boundary identity and the quotient comparisons ([[def-relative-cap-product]]).

[L2] The singular cup product is $(\varphi\smile\xi)(\sigma)=\varphi(\sigma[0,\dots,p])\xi(\sigma[p,\dots,n])$, $R$-bilinear on cochains ([[def-singular-cup-product-on-cochains]]).

[L3] Relative Kronecker evaluation $\langle-,-\rangle:H^k(X,A;G)\times H_k(X,A;\mathbb Z)\to G$ and the absolute pairing are well defined, biadditive and natural ([[lem-relative-kronecker-evaluation-is-well-defined-and-natural]]).

[L4] The relative fundamental class $[W,M]$ restricts to the given local orientation at every interior point and satisfies $\partial[W,M]=[M]$ ([[def-relative-fundamental-class-and-boundary-orientation]]).

[L5] For a cocycle $\varphi$, the cap product satisfies the boundary identity $\partial(\varphi\cap c)=(-1)^p\varphi\cap\partial c$ ([[thm-cap-product-boundary-identity]]).

## Proof

**Proof technique:** direct.

1.1 Choose a relative $p$-cocycle $\alpha$ representing $a$ (vanishing on $C_*(M)$), an absolute $(n-p)$-cocycle $\xi$ representing $x$, and a relative $n$-cycle represented by $c$ for $[W,M]$. For these representatives, the front/back formulas of [L1] and [L2] give $(\alpha\smile\xi)(c)=\sum_\sigma a_\sigma\alpha(\sigma[0,\dots,p])\xi(\sigma[p,\dots,n])=\xi(\alpha\cap c)$, an identity of cochains on $W$. [L1, L2, given]

2.1 If $\alpha$ is a relative cocycle and $c$ a relative $n$-cycle with $\partial c\in C_{n-1}(M)$, then $\partial(\alpha\cap c)=(-1)^p\alpha\cap\partial c$ by [L5], and this vanishes because $\alpha$ vanishes on chains in $M$; moreover replacing $c$ by $c+\partial b+c_M$ or $\alpha$ by $\alpha+\delta u$ changes $\alpha\cap c$ by an absolute boundary, so $\alpha\cap c$ determines a well-defined class $a\cap[W,M]\in H_{n-p}(W;R)$. [step 1.1, L1, L5]

3.1 The cochain $\alpha\smile\xi$ is a relative cocycle and its class is the relative/absolute cup product $a\smile x$, so by the well-definedness of relative evaluation [L3] the left side of the statement is $\xi(\alpha\cap c)$ for any representatives; by step 1.1 this equals the absolute evaluation on the right, and step 2.1 shows the right side is the class of $\alpha\cap c$. [step 2.1, L2, L3]

4.1 Therefore $\langle a\smile x,[W,M]\rangle=\langle x,a\cap[W,M]\rangle$; the conventions are exactly the cohomology-first ones fixed in [L1] and [L3], with no extra sign, and the degenerate cases $p=0$, $p=n$, $M=\varnothing$ or $a=0$ follow from the same computation. [step 3.1, L1, L3, L4] ∎
