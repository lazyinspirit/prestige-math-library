---
id: thm-yangian-periodic-transfer-matrices-commute
kind: theorem
title: "Finite periodic transfer matrices commute"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-yangian-periodic-fundamental-chain, lem-yangian-periodic-monodromy-satisfies-rtt, prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (44)–(47): monodromy RTT and commutativity of the transfer traces."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§5.3: periodic transfer matrices commute as a consequence of monodromy RTT."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§5.1: trace construction and the invertibility condition in the transfer-matrix commutation argument."
---

## Statement

For every finite chain in [[def-yangian-periodic-fundamental-chain]], its ordinary un-twisted transfer matrices satisfy $[\tau(u),\tau(v)]=0$ for every $u,v\in\mathbb C$. No genericity condition on the inhomogeneities is needed. The proof uses invertibility only for $u-v\notin\{i,-i\}$ and then extends the resulting polynomial identity to all spectral pairs.

## Facts & Assumptions

**Given:** The finite-dimensional periodic chain, its polynomial monodromy and trace, and the monodromy RTT relation.

[F1] [[def-yangian-periodic-fundamental-chain]]: $\mathcal H$ is finite dimensional, $M_0(u)$ is polynomial in $u$, and $\tau(u)=\operatorname{tr}_0M_0(u)$ is the ordinary auxiliary trace.

[F2] [[lem-yangian-periodic-monodromy-satisfies-rtt]]: $R_{00'}(u-v)M_0(u)M_{0'}(v)=M_{0'}(v)M_0(u)R_{00'}(u-v)$ for every $u,v$.

[F3] [[prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]]: $R_N(d)$ has a two-sided inverse if $d\notin\{i,-i\}$.

## Proof

1.1 Suppose $u-v\notin\{i,-i\}$. Multiplying the RTT identity [F2] on the right by $R_{00'}(u-v)^{-1}$, which exists by [F3], gives $R_{00'}M_0(u)M_{0'}(v)R_{00'}^{-1}=M_{0'}(v)M_0(u)$. Take the ordinary trace over the two auxiliary spaces. For a finite-dimensional auxiliary matrix $X$ with coefficients in $\operatorname{End}(\mathcal H)$ and an invertible scalar auxiliary matrix $R$, $\operatorname{tr}(RXR^{-1})=\operatorname{tr}(X)$: writing entries, $\sum_{i,j,k}R_{ij}X_{jk}(R^{-1})_{ki}=\sum_{j,k}X_{jk}\sum_i(R^{-1})_{ki}R_{ij}=\sum_jX_{jj}$, since scalar entries commute with the coefficients and $R^{-1}R=I$. Thus the trace of the left side is $\operatorname{tr}_{00'}(M_0(u)M_{0'}(v))$. [given, F1, F2, F3, algebra]

2.1 The tensor-space trace of $M_0(u)M_{0'}(v)$ equals $\tau(u)\tau(v)$, since the two auxiliary factors are independent and the coefficient order is $u$ then $v$. The trace of $M_{0'}(v)M_0(u)$ equals $\tau(v)\tau(u)$ by the same index expansion with the coefficient order reversed. Step 1.1 therefore proves $[\tau(u),\tau(v)]=0$ whenever $u-v\notin\{i,-i\}$. [given, F1, step 1.1, algebra]

3.1 Each matrix entry of $[\tau(u),\tau(v)]$ is a polynomial in $u,v$ by [F1]. For every fixed $v$, it vanishes for all but at most two values of $u$ by step 2.1, hence is the zero polynomial in $u$; consequently it vanishes for all $u,v$. This proves the assertion also at $u-v=\pm i$, where the auxiliary $R$ is singular. [given, F1, step 2.1, algebra] ∎
