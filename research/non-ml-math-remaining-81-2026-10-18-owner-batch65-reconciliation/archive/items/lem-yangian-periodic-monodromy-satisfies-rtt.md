---
id: lem-yangian-periodic-monodromy-satisfies-rtt
kind: lemma
title: "The periodic fundamental monodromy satisfies RTT"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-yangian-periodic-fundamental-chain, prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]
justified_by: [thm-yangian-periodic-transfer-matrices-commute]
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (40)–(52): local RLL, ordered products, and monodromy RTT."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§5.2, equations for monodromy RTT and transfer-matrix commutativity."
---

## Statement

For the chain in [[def-yangian-periodic-fundamental-chain]], let $0,0'$ be two auxiliary copies and define $M_{0'}(v)$ by the same ordered product as $M_0(u)$. For all $u,v\in\mathbb C$,

$$R_{00'}(u-v)M_0(u)M_{0'}(v)=M_{0'}(v)M_0(u)R_{00'}(u-v).$$

## Facts & Assumptions

**Given:** A finite chain with the local Lax operators and order specified in [[def-yangian-periodic-fundamental-chain]], and the polynomial spectral Yang–Baxter identity.

[F1] [[def-yangian-periodic-fundamental-chain]]: $M_0(u)=\prod_{j=1}^m L_{0j}(u)$ in increasing site order, $L_{0j}(u)=R_{0j}(u-a_j)$, and different quantum sites are distinct tensor factors.

[F2] [[prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]]: the polynomial $R$-matrix satisfies the spectral Yang–Baxter identity for all complex parameters.

## Proof

1.1 On a fixed site $j$, apply [F2] to auxiliary spectral points $u,v$ and the site parameter $a_j$. By the indexed-basis convention of [F1], the local relation is $R_{00'}(u-v)L_{0j}(u)L_{0'j}(v)=L_{0'j}(v)L_{0j}(u)R_{00'}(u-v)$. If $j\ne k$, then $L_{0j}(u)$ and $L_{0'k}(v)$ act on disjoint auxiliary and quantum tensor factors, so their coefficients commute and their operators commute. [given, F1, F2, algebra]

1.2 For $m=1$, the required equation is exactly step 1.1. Assume it holds for $m-1$, and write $M_0^{(m)}=M_0^{(m-1)}L_{0m}$ and $M_{0'}^{(m)}=M_{0'}^{(m-1)}L_{0'm}$. Moving $L_{0m}$ past $M_{0'}^{(m-1)}$ is valid by step 1.1. The induction hypothesis gives $R M_0^{(m)}M_{0'}^{(m)}=M_{0'}^{(m-1)}M_0^{(m-1)}R L_{0m}L_{0'm}$. Apply the local relation at site $m$, then commute $L_{0'm}$ past $M_0^{(m-1)}$ because they act on distinct sites. The result is $M_{0'}^{(m)}M_0^{(m)}R$, proving the induction step and the claim for every finite $m$. [given, F1, step 1.1, induction, algebra] ∎

