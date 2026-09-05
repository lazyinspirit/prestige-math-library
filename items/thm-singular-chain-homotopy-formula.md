---
id: thm-singular-chain-homotopy-formula
kind: theorem
title: "The singular chain homotopy formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prism-operator-for-a-homotopy, lem-the-prism-triangulation-has-the-stated-oriented-boundary, def-induced-singular-chain-map, def-singular-boundary-operator]
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
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Haynes Miller, Algebraic Topology I, Lecture 6"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/87a1ec7a7bcb92c59881ab6a8e70e0c2_MIT18_905F16_lec6.pdf"
pipeline_run: frontier-30
---

## Statement

Let $H:X\times I\to Y$ be a homotopy from $f$ to $g$. Then the prism operator
$P_H$ of [[def-prism-operator-for-a-homotopy]] satisfies
$$g_\#-f_\#=\partial P_H+P_H\partial$$
as homomorphisms $C_n(X;G)\to C_n(Y;G)$ for every $n\geq 1$ and every abelian
group $G$. In degree $0$, the same identity reduces to
$$g_{\#,0}-f_{\#,0}=\partial P_H:C_0(X;G)\to C_0(Y;G).$$

## Facts & Assumptions

**Given:** A homotopy $H:X\times I\to Y$ from $f$ to $g$, an abelian group $G$, and an integer $n\geq 0$.

[L1] The prism operator is $$P_H(\sigma)=\sum_{i=0}^n(-1)^iH\circ(\sigma\times\operatorname{id}_I)\circ\lambda_i$$ on a singular $n$-simplex $\sigma$ ([[def-prism-operator-for-a-homotopy]]).

[L2] The prism chain $\Pi_n=\sum(-1)^i\lambda_i$ has boundary $$\partial\Pi_n=\iota_1-\iota_0-\sum_{j=0}^n(-1)^j(\delta_j\times\operatorname{id}_I)_\#\Pi_{n-1}$$ ([[lem-the-prism-triangulation-has-the-stated-oriented-boundary]]).

[L3] The induced singular map of a continuous map is obtained by postcomposition on singular simplices ([[def-induced-singular-chain-map]]).

[L4] The singular boundary is the alternating sum of affine face restrictions ([[def-singular-boundary-operator]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$ and $\sigma:\Delta^0\to X$ is a singular $0$-simplex, then [L2] gives $\partial\Pi_0=\iota_1-\iota_0$. Composing with $H\circ(\sigma\times\operatorname{id}_I)$ and using [L1] and [L3] yields $$\partial P_H(\sigma)=g_\#(\sigma)-f_\#(\sigma).$$ [L1, L2, L3, given]

1.2 Assume $n\geq 1$ and let $\sigma:\Delta^n\to X$ be a singular $n$-simplex. Compose the boundary formula [L2] with the continuous map $$H\circ(\sigma\times\operatorname{id}_I):\Delta^n\times I\to Y.$$ By [L1] and [L3], the image of $\Pi_n$ is $P_H(\sigma)$, the image of $\iota_1$ is $g_\#(\sigma)$, and the image of $\iota_0$ is $f_\#(\sigma)$. [L1, L2, L3, given]

2.1 Again using [L1], [L3], and [L4], the image of the side-prism term $\sum_{j=0}^n(-1)^j(\delta_j\times\operatorname{id}_I)_\#\Pi_{n-1}$ under $H\circ(\sigma\times\operatorname{id}_I)$ is exactly $P_H(\partial\sigma)$. Therefore step 1.2 becomes $$\partial P_H(\sigma)=g_\#(\sigma)-f_\#(\sigma)-P_H(\partial\sigma),$$ or equivalently $$g_\#(\sigma)-f_\#(\sigma)=\partial P_H(\sigma)+P_H(\partial\sigma).$$ [L1, L3, L4, step 1.2, algebra]

3.1 Singular simplices generate $C_n(X;\mathbb Z)$, and the coefficient-$G$ version is obtained by tensor extension, so step 2.1 holds on all chains for every $n\geq 1$, while step 1.1 handles degree $0$. Hence the stated identities hold in all degrees. [step 1.1, step 2.1] ∎
