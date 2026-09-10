---
id: "thm-de-rham-cohomology-of-a-contractible-smooth-manifold"
kind: "theorem"
title: "De rham cohomology of a contractible smooth manifold"
deps: ["cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds", "prop-zero-and-out-of-range-de-rham-cohomology", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions", "def-nullhomotopic-map-and-contractible-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice. A nonempty contractible smooth manifold $M$ has $H^0_{\mathrm{dR}}(M)\cong\mathbb R$ and $H^k_{\mathrm{dR}}(M)=0$ for every $k>0$.

## Facts & Assumptions

**Given:** A nonempty contractible smooth manifold $M$ and countable choice.

[F1] [[cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds]]: Assume countable choice $\mathrm{AC}_\omega$. Continuously homotopic smooth maps induce equal de Rham maps. Continuous homotopy equivalences between smooth manifolds induce inverse de Rham graded algebra maps via smooth representatives, independently of those representatives.

[F2] [[prop-zero-and-out-of-range-de-rham-cohomology]]: $H^k_{\mathrm{dR}}(M)=0$ if $k<0$ or $k>\dim M$. If $M=\varnothing$, its cohomology vanishes in every degree.

[F3] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

[F4] [[def-nullhomotopic-map-and-contractible-space]]: Let $f:X\to Y$ be continuous. The map $f$ is **nullhomotopic** if there is a point $y_0\in Y$ such that $f$ is homotopic to the constant map $c_{y_0}:X\to Y$, $c_{y_0}(x)=y_0$ (def-homotopy-relative-and-path-homotopy). A nonempty topological space $X$ is **contractible** if every continuous map $f:X\to Y$ to every topological space $Y$ is nullhomotopic. This definition separates the property of the space from the particular map $\operatorname{id}_X$. The next corollary proves that it is equivalent to the familiar condition that the identity map be nullhomotopic.

## Proof

**Proof technique:** direct.

1.1 Apply contractibility to the identity map to obtain a continuous homotopy from $\operatorname{id}_M$ to a constant $c_p$ for some $p\in M$. Let $a:M\to\{p\}$ and $b:\{p\}\to M$ be the unique map and inclusion. Then $ab=\operatorname{id}_{\{p\}}$ and $ba=c_p\simeq\operatorname{id}_M$, so these are continuous homotopy inverses. [F4, given]

2.1 Continuous homotopy invariance identifies the de Rham groups with those of the point. Its zero-degree functions are precisely $\mathbb R$, and all positive-degree form spaces vanish by dimension. Hence its positive-degree cohomology vanishes and its degree-zero cohomology is $\mathbb R$, giving the asserted groups of $M$. [F1, F2, F3, step 1.1] ∎

## Source locator

Lee, Theorem 17.13, pp.446–447; continuous smoothing is supplied by the preceding fully local corollary.
