---
id: def-compactly-generated-conventions-for-based-homotopy
kind: definition
title: Compactly generated conventions for based homotopy
deps: ["def-homotopy-relative-and-path-homotopy", "def-compact-space", "def-hausdorff-space", "thm-quotient-universal-property"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 5 §§1–2, pp.39–41
    - title: N. P. Strickland, The category of CGWH spaces
      url: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf
      locator: Definitions1.1–1.2 and2.8, pp.1,4; May p39 explicitly uses compact Hausdorff convention
status: published
origin: pipeline
---

## Definition

A space $X$ is **weak Hausdorff** (WH) if every continuous map $u:K\to X$ from a compact Hausdorff space has closed image. Here compactness and Hausdorffness are separate requirements.

A subset $F\subseteq X$ is **k-closed** if $u^{-1}(F)$ is closed for every such test $u$. The space $kX$ has the same underlying set as $X$ and these closed sets. A space is **compactly generated** (CG) if $kX=X$, and **CGWH** if it is both CG and WH. The topology and mapping properties are established in the following lemmas.

For CG spaces put $X\times_k Y=k(X\times Y)$. Let $C_0(Y,Z)$ be the continuous maps with subbasic opens
$$W(u,K,O)=\{f:Y\to Z\text{ continuous}:f(u(K))\subseteq O\},$$
where $K$ is compact Hausdorff, $u:K\to Y$ is continuous, and $O$ is open in $Z$. Put $C(Y,Z)=kC_0(Y,Z)$. For based spaces, $C_*(Y,Z)$ is the kification of the subspace of basepoint-preserving maps. Put $\Omega Z=C_*((I,\{0,1\}),(Z,z_0))$, meaning the kified subspace of maps whose two endpoint values are $z_0$.

Categorical products and based constructions below use CGWH spaces unless explicitly stated otherwise. Cubical homotopy classes are still defined for arbitrary topological spaces. Homotopies relative to a subspace have the meaning of [[def-homotopy-relative-and-path-homotopy]]. For WH domains the test-image mapping topology equals the compact-Hausdorff-subspace convention; no analogous identification with arbitrary compact subsets is asserted here.
