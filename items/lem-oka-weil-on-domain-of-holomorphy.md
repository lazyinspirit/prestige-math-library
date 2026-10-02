---
id: lem-oka-weil-on-domain-of-holomorphy
kind: lemma
title: "Oka-Weil approximation on a domain of holomorphy (host-domain lemma)"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-holomorphically-convex-hull-and-domain
  - thm-cartan-thullen-theorem
  - thm-domains-of-holomorphy-are-hartogs-pseudoconvex
  - thm-pseudoconvex-domain-smooth-psh-exhaustion
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-stability-operations-for-plurisubharmonic-functions
  - def-holomorphic-function-in-several-complex-variables
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - thm-holomorphic-if-and-only-if-analytic
  - cor-cauchy-estimates-taylor-coefficients
  - thm-power-series-define-holomorphic-functions-in-several-variables
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - lem-test-function-cutoffs-and-euclidean-localization
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.2, Theorem 21 with its complete proof, printed pp. 78-79: the analytic-polyhedron reduction, Oka's graph lift, the cutoff correction, the Maclaurin expansion in the graph variable, and the telescoping exhaustion."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I (6.13)(a), printed p. 50, and Ch. VIII (5.1), printed p. 375 (weak pseudoconvexity); Ch. VIII §6, Theorem 6.5 with its proof, printed pp. 377-379 (the $C^\\infty$ solvability branch used for the graph correction)."
    - title: "Jiri Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §2.6, Theorem 2.6.2 statement and the Oka-Weil discussion; its reverse Levi direction is expressly omitted there, so the host-domain argument is taken from Boas."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $D\subseteq\mathbb C^n$ be a domain of
holomorphy ([[def-holomorphic-extension-and-domain-of-holomorphy]]), let
$K\Subset D$ be compact and convex with respect to the holomorphic functions
on $D$, i.e. $\widehat K_D=K$
([[def-holomorphically-convex-hull-and-domain]]), and let $f$ be holomorphic
in an open neighbourhood of $K$. Then for every $\varepsilon>0$ there is
$F\in\mathcal O(D)$ with
$$\sup_{z\in K}|F(z)-f(z)|<\varepsilon .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; a domain $D\subseteq\mathbb C^n$ of holomorphy; a compact $K\Subset D$ with $\widehat K_D=K$; a function $f$ holomorphic on an open neighbourhood of $K$; and $\varepsilon>0$.

[F1] The holomorphic hull is $$\widehat E_D:=\{a\in D: |g(a)|\le\sup_{z\in E}|g(z)|\text{ for every }g\in\mathcal O(D)\}$$ ([[def-holomorphically-convex-hull-and-domain]]). Thus $\widehat K_D=K$ is exactly the compact $\mathcal O(D)$-convexity hypothesis.

[F2] (Harold P. Boas, *Lecture Notes on Multidimensional Complex Analysis*, §3.3.2, Theorem 21, printed p. 79, with proof on printed pp. 79–80.) If $G$ is a domain of holomorphy in $\mathbb C^n$ and $K_0\Subset G$ is compact and convex with respect to $\mathcal O(G)$, then every function holomorphic in a neighbourhood of $K_0$ is uniformly approximable on $K_0$ by functions in $\mathcal O(G)$. The proof uses finite analytic-polyhedron reduction, Oka's graph lift and a $\bar\partial$ correction, a power-series approximation, and a telescoping exhaustion.

[F3] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F3]. No additional choice is made in applying [F2].

## Proof

**Proof technique:** direct application of the cited approximation theorem.

1.1 If $K=\varnothing$, take $F=0$, since the supremum of the nonnegative empty family is $0$ in the convention of [F1]. Otherwise the hypotheses of Boas's Theorem 21 [F2] hold with $G:=D$ and $K_0:=K$: $D$ is a domain of holomorphy, and $\widehat K_D=K$ is the required $\mathcal O(D)$-convexity condition by [F1]. The given $f$ is holomorphic in a neighbourhood of $K$. [F1, F2, given]

2.1 For nonempty $K$, apply [F2] with approximation tolerance $\varepsilon$. It gives $F\in\mathcal O(D)$ with $\sup_{z\in K}|F(z)-f(z)|<\varepsilon$, which is the Statement under the ambient AC assumption [F3]. [F2, F3, step 1.1, given] ∎
