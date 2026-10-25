---
id: "lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative"
kind: "lemma"
title: "The tangent space of a regular level set is the kernel of the constraint derivative"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-axiom-of-choice"
  - "def-c-k-map-between-banach-spaces"
  - "def-frechet-derivative-between-banach-spaces"
  - "lem-regular-banach-constraint-directions-are-realised-by-level-set-curves"
  - "lem-standard-basis-of-f-n"
  - "thm-banach-implicit-function-theorem-for-a-split-surjective-derivative"
  - "thm-chain-sum-product-and-composition-rules-for-banach-derivatives"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Theorem 13.6 and its proof: the admissible directions at a regular constrained extremum are the kernel of the constraint derivative)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-71 (finite-dimensional Lagrange multipliers; the tangent space of a regular level set)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach space, let $U\subseteq X$ be open, let $G:U\to\mathbb R^m$ be of class $C^1$ ([[def-c-k-map-between-banach-spaces]], [[def-frechet-derivative-between-banach-spaces]]), let $u\in U$, and suppose $DG(u):X\to\mathbb R^m$ is surjective. Then the set of derivatives $\gamma'(0)$ of $C^1$ curves $\gamma:(-\varepsilon,\varepsilon)\to X$ with $\gamma(0)=u$ and $G\circ\gamma$ constant equals $\ker DG(u)$; that is, $\ker DG(u)$ is exactly the tangent space of the level set $G^{-1}(G(u))$ at $u$.

## Facts & Assumptions

**Given:** A real Banach space $X$, an open set $U\subseteq X$, a $C^1$ map $G:U\to\mathbb R^m$ with $DG(u)$ surjective at $u\in U$, under the Axiom of Choice.

[F1] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-c-k-map-between-banach-spaces]]: if $\gamma$ is $C^1$ near $0$ with $\gamma(0)=u$ and $G$ is $C^1$ near $u$, then $G\circ\gamma$ is differentiable at $0$ with $(G\circ\gamma)'(0)=DG(u)\gamma'(0)$; a constant function has derivative $0$, and a bounded linear map is its own derivative.

[F2] [[lem-regular-banach-constraint-directions-are-realised-by-level-set-curves]]: under AC, given the chart $Y,A,B,\varphi$ of [[thm-banach-implicit-function-theorem-for-a-split-surjective-derivative]] (which requires $m\ge1$), every $h\in\ker DG(u)$ is realised by a $C^1$ curve $c(t)=u+th+\varphi(th)$ with $c(0)=u$, $c'(0)=h$ and $G(c(t))=G(u)$.

[F3] [[lem-standard-basis-of-f-n]]: $\mathbb R^0$ is the zero space, so every map into it is constant.

## Proof

**Proof technique:** direct.

**Given:** A real Banach space $X$, an open set $U\subseteq X$, a $C^1$ map $G:U\to\mathbb R^m$ with $DG(u)$ surjective at $u\in U$.

1.1 Let $\gamma:(-\varepsilon,\varepsilon)\to X$ be $C^1$ with $\gamma(0)=u$ and $G\circ\gamma$ constant. Then $G\circ\gamma$ has derivative $0$ at every $t$, and the chain rule [F1] gives $0=(G\circ\gamma)'(0)=DG(u)\gamma'(0)$; hence $\gamma'(0)\in\ker DG(u)$. [given, F1]

1.2 Conversely, let $h\in\ker DG(u)$. If $m=0$, then $G$ is constant by [F3] and $\ker DG(u)=X$. Choose $r>0$ with $B(u,r)\subseteq U$ and set $\varepsilon=r/(2(1+\|h\|))$; the affine curve $c(t)=u+th$ lies in $U$ for $|t|<\varepsilon$, is $C^1$, and has $c'(0)=h$ by [F1]. If $m\ge1$, surjectivity and AC give the chart $Y,A,B,\varphi$ of the implicit-function theorem in [F2]; applying the realization lemma to this chart gives a $C^1$ curve $c$ with $c(0)=u$, $c'(0)=h$ and $G\circ c$ constant. In either case $h$ is a derivative of the required kind. [given, F1, F2, F3, choose]

2.1 Step 1.1 shows that every such derivative lies in $\ker DG(u)$ and step 1.2 shows that every element of $\ker DG(u)$ occurs, so the two sets are equal; this is the assertion, and the Axiom of Choice was used only through the chart and realization lemma in the case $m\ge1$ [F2]. [step 1.1, step 1.2, F2] ∎ 