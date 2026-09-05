---
id: cor-path-connected-spaces-have-zero-reduced-zero-th-homology
kind: corollary
title: "Path-connected spaces have zero reduced zero-th homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-zero-th-singular-homology-is-free-on-path-components, def-zero-simplex-augmentation-and-reduced-singular-homology, lem-singular-augmentation-commutes-with-boundary]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: frontier-30
---

## Statement

If $X$ is nonempty and path-connected, then
$$\widetilde H_0^{\mathrm{sing}}(X;\mathbb Z)=0.$$

## Facts & Assumptions

**Given:** A nonempty path-connected topological space $X$.

[L1] $H_0^{\mathrm{sing}}(X;\mathbb Z)$ is the free abelian group on the path components of $X$ ([[prop-zero-th-singular-homology-is-free-on-path-components]]).

[L2] Reduced degree-zero singular homology is the homology of the augmentation kernel in degree $0$ ([[def-zero-simplex-augmentation-and-reduced-singular-homology]]).

[L3] Every singular $1$-boundary lies in the augmentation kernel ([[lem-singular-augmentation-commutes-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Since $X$ is nonempty and path-connected, it has exactly one path component. By [L1], $$H_0^{\mathrm{sing}}(X;\mathbb Z)\cong\mathbb Z.$$ [L1, given]

2.1 Let $z=\sum_{k=1}^m a_k\sigma_k\in C_0(X;\mathbb Z)$. Under the isomorphism of step 1.1, the class $[z]$ maps to $\sum_{k=1}^m a_k\in\mathbb Z$, which is exactly $\varepsilon_X(z)$. Therefore $z\in\ker\varepsilon_X$ if and only if $[z]=0$ in $H_0^{\mathrm{sing}}(X;\mathbb Z)$, equivalently if and only if $z\in B_0(X;\mathbb Z)$. By [L3], every $0$-boundary lies in $\ker\varepsilon_X$, so $$\ker\varepsilon_X=B_0(X;\mathbb Z).$$ [L3, step 1.1, algebra]

3.1 By [L2], reduced degree-zero homology is $$\widetilde H_0^{\mathrm{sing}}(X;\mathbb Z)=\ker\varepsilon_X\big/\operatorname{im}\partial_1=\ker\varepsilon_X\big/B_0(X;\mathbb Z)=0.$$ [L2, step 2.1] ∎
