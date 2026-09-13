---
id: def-compactly-supported-cohomology-with-local-coefficients
kind: definition
title: Compactly supported cohomology with local coefficients
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-homology-and-cohomology-with-local-coefficients, def-compactly-supported-singular-cohomology-of-a-locally-compact-space, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, pp.334–335
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a locally compact Hausdorff space and let $\mathcal L$ be a left $R$-module local system on $X$. Its **compactly supported cohomology with local coefficients** is
$$H_c^k(X;\mathcal L)=\varinjlim_{K\subseteq X\text{ compact}}H^k(X,X\setminus K;\mathcal L).$$
For compact sets $K\subseteq K'$, the identity is a map of pairs $(X,X\setminus K')\to(X,X\setminus K)$; contravariance gives the displayed system's transition $H^k(X,X\setminus K;\mathcal L)\to H^k(X,X\setminus K';\mathcal L)$. Thus the coefficient system is always the restriction of one ambient system, and no extension from $X\setminus K$ is being assumed.

Equivalently, an element is represented by $(K,a)$ with $K$ compact and $a\in H^k(X,X\setminus K;\mathcal L)$. Two representatives $(K,a)$ and $(K',a')$ are equal precisely when their images agree for some compact $N\supseteq K\cup K'$. Compact union makes the support poset filtered, so this relation is transitive and addition is performed after transition to $K\cup K'$. This is the same explicit filtered-colimit construction as [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]], now applied to the relative local-cochain groups.

If $f:X\to Y$ is proper, $\mathcal K$ is a local system on $Y$, and $\theta:f^*\mathcal K\to\mathcal L$ is a coefficient morphism, then each compact $K\subseteq Y$ has compact inverse image and [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] gives
$$H^k(Y,Y\setminus K;\mathcal K)\longrightarrow H^k(X,X\setminus f^{-1}K;\mathcal L).$$
These maps commute with enlargement of supports and hence induce the proper pullback $f^*:H_c^k(Y;\mathcal K)\to H_c^k(X;\mathcal L)$. Identity and composite proper maps give identity and composite pullbacks because both assertions already hold before taking the colimit.

When $X$ is compact, $K=X$ is terminal and yields $H_c^k(X;\mathcal L)\cong H^k(X;\mathcal L)$. For $X=\varnothing$, for the zero system, and in negative degrees the group is zero. Local compactness permits the cofinal use of closures of relatively compact open sets exactly as in the published constant-coefficient definition. No simultaneous selection of supports or neighborhoods is made, so the construction is choice-free.
