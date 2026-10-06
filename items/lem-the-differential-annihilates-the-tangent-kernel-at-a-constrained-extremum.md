---
id: "lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum"
kind: "lemma"
title: "The differential annihilates the tangent kernel at a constrained extremum"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 3
deps:
  - "def-axiom-of-choice"
  - "def-c-k-map-between-banach-spaces"
  - "def-frechet-derivative-between-banach-spaces"
  - "lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative"
  - "thm-chain-sum-product-and-composition-rules-for-banach-derivatives"
  - "thm-fermat-interior-extremum"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Theorem 13.6: the derived constrained stationarity along level-set curves)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-68 (the finite-dimensional first-order condition along admissible directions)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach space, let $U\subseteq X$ be open, let $I:U\to\mathbb R$ be Fréchet differentiable at $u\in U$ ([[def-frechet-derivative-between-banach-spaces]]), and let $G:U\to\mathbb R^m$ be of class $C^1$ ([[def-c-k-map-between-banach-spaces]]) with $DG(u)$ surjective. If $u$ is a local minimiser or a local maximiser of $I$ on the level set $\{G=G(u)\}$, then $DI(u)h=0$ for every $h\in\ker DG(u)$.

## Facts & Assumptions

**Given:** A real Banach space $X$, open $U\subseteq X$, a map $I$ differentiable at $u$ with differential $DI(u)\in X^*$, a $C^1$ map $G$ with $DG(u)$ surjective, and the assumption that $u$ is a local minimiser or local maximiser of $I$ on the level set $\{G=G(u)\}$, meaning that for some radius $\delta>0$ one has $I(u)\le I(z)$ (respectively $I(u)\ge I(z)$) for every $z\in U$ with $\|z-u\|<\delta$ and $G(z)=G(u)$.

[F1] [[lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative]]: for every $h\in\ker DG(u)$ there are $\varepsilon>0$ and a $C^1$ curve $\gamma:(-\varepsilon,\varepsilon)\to X$ with $\gamma(0)=u$, $\gamma'(0)=h$ and $G(\gamma(t))=G(u)$ for all $t$.

[F2] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-frechet-derivative-between-banach-spaces]]: the composition $t\mapsto I(\gamma(t))$ is differentiable at $0$ with derivative $DI(u)\gamma'(0)=DI(u)h$.

[F3] [[thm-fermat-interior-extremum]]: a real function on an open interval that is differentiable at an interior point and has a local minimum or local maximum there has derivative $0$ at that point.

[A1] [[def-axiom-of-choice]]: the hypothesis under which the level-set parametrisation of [F1] is available.

## Proof

**Proof technique:** direct.

**Given:** The setting above and a vector $h\in\ker DG(u)$.

1.1 By [F1] choose $\varepsilon>0$ and a $C^1$ curve $\gamma:(-\varepsilon,\varepsilon)\to X$ with $\gamma(0)=u$, $\gamma'(0)=h$ and $G(\gamma(t))=G(u)$ for every $t$; by continuity of $\gamma$ at $0$ and the strict positive radius $\delta$ of the local extremum hypothesis, we may shrink $\varepsilon$ so that $\|\gamma(t)-u\|<\delta$ for all $t$. [given, A1, F1]

2.1 The function $\varphi(t):=I(\gamma(t))$ is defined on the open interval $(-\varepsilon,\varepsilon)$, is differentiable at $0$ with $\varphi'(0)=DI(u)h$ by [F2], and has a local minimum (respectively local maximum) at $t=0$: for $|t|<\varepsilon$ the curve lies in the level set and within distance $\delta$ of $u$, so $\varphi(0)=I(u)\le I(\gamma(t))=\varphi(t)$ (respectively $\ge$). [step 1.1, F2]

3.1 Fermat's interior extremum theorem [F3] applied to $\varphi$ at the interior point $0$ gives $\varphi'(0)=0$, that is, $DI(u)h=0$. [step 2.1, F3]

4.1 Since $h\in\ker DG(u)$ was arbitrary, $DI(u)$ vanishes on all of $\ker DG(u)$, which is the assertion; the Axiom of Choice was used only through [F1] [A1]. [step 3.1, A1] ∎

