---
id: thm-automorphisms-punctured-plane
kind: theorem
title: "Every biholomorphic self-map of the punctured plane is of the form az or a/z"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-entire-biholomorphisms-are-affine, thm-biholomorphic-self-maps-riemann-sphere-are-mobius, thm-meromorphic-functions-riemann-sphere-are-rational, thm-rational-map-fibre-count-degree, thm-removable-singularity-characterizations, thm-one-point-compactification-properties, def-one-point-compactification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Every biholomorphic self-map of the punctured plane $\mathbb C^\times$ has the
form $z\mapsto az$ or $z\mapsto a/z$ with $a\in\mathbb C^\times$.

## Facts & Assumptions

**Given:** A biholomorphic map $f:\mathbb C^\times\to\mathbb C^\times$.

[L1] Meromorphic self-maps of the sphere are rational, and a bijective rational sphere map has degree $1$ ([[thm-meromorphic-functions-riemann-sphere-are-rational]], [[thm-rational-map-fibre-count-degree]]).

[L2] A bounded holomorphic function on a punctured disc has a removable singularity ([[thm-removable-singularity-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 If $z_n\to0$ in $\mathbb C^\times$ and $f(z_n)\to a\in\mathbb C^\times$, continuity of $f^{-1}$ on $\mathbb C^\times$ forces $z_n=f^{-1}(f(z_n))\to f^{-1}(a)\in\mathbb C^\times$, a contradiction. Hence every cluster value of $f(z)$ as $z\to0$ lies in $\{0,\infty\}$. If both $0$ and $\infty$ were cluster values, then every sufficiently small punctured disc would have image meeting both $\{|w|<1\}$ and $\{|w|>1\}$; connectedness of that image would then produce points with $|f(z)|=1$ approaching $0$, giving a finite nonzero cluster value after all. Therefore $f(z)$ tends to a single limit $\ell_0\in\{0,\infty\}$ as $z\to0$. The same argument applied to $z\mapsto f(1/z)$ shows that $f(z)$ tends to a single limit $\ell_\infty\in\{0,\infty\}$ as $z\to\infty$. [given, assume-contra, choose, algebra, discharge-contradiction]

2.1 Let $F$ be the extension of $f$ to $\widehat{\mathbb C}$ with $F(0)=\ell_0$ and $F(\infty)=\ell_\infty$, and let $G$ be the analogous extension of $f^{-1}$. Step 1.1 gives continuity of both extensions at the added points, and on the dense subset $\mathbb C^\times$ one has $G\circ F=\operatorname{id}=F\circ G$. By continuity the same identities hold on all of $\widehat{\mathbb C}$, so $F$ is a sphere homeomorphism and $F(\{0,\infty\})=\{0,\infty\}$. [step 1.1, given]

3.1 Near each of $0$ and $\infty$, the homeomorphism $F$ lands either in a bounded finite chart or in a neighbourhood of $\infty$. In the first case the corresponding chart expression is bounded near the puncture and extends holomorphically by [L2]; in the second case its reciprocal is bounded and again extends holomorphically by [L2]. Thus $F$ is meromorphic at both added points, and therefore on the whole sphere. [L2, step 2.1, given]

4.1 Fact [L1] makes $F$ a rational sphere map of degree $1$, hence Möbius. A Möbius map preserving the set $\{0,\infty\}$ is either $z\mapsto az$ or $z\mapsto a/z$ with $a\neq0$, and restricting back to $\mathbb C^\times$ gives exactly the claimed automorphisms. [L1, step 2.1, given, algebra] ∎
