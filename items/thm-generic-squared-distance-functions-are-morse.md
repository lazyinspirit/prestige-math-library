---
id: thm-generic-squared-distance-functions-are-morse
kind: theorem
title: "For a compact manifold embedded in Euclidean space, the squared-distance function from a generic center is Morse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, thm-parametric-transversality, prop-the-zero-section-is-a-smooth-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Let $M\subseteq\mathbb R^N$ be a compact embedded smooth manifold. Then there
is a null subset $E\subseteq\mathbb R^N$ such that for every
$p\in\mathbb R^N\setminus E$, the squared-distance function
$$d_p:M\to\mathbb R,\qquad d_p(x)=\|x-p\|^2$$
is Morse.

## Facts & Assumptions

**Given:** A compact embedded smooth manifold $M\subseteq\mathbb R^N$.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] Parametric transversality makes the set of bad parameters null once the total family is transverse to the target submanifold ([[thm-parametric-transversality]]).

[L2] The zero section of the cotangent bundle is an embedded submanifold ([[prop-the-zero-section-is-a-smooth-embedding]]).

[A1] For fixed $p\in\mathbb R^N$ and $x\in M$, the differential of $d_p$ at $x$ is the cotangent vector $v\mapsto 2(x-p)\cdot v$ on $T_xM$. Varying the parameter $p$ changes this differential by $v\mapsto -2w\cdot v$, and as $w$ ranges over $\mathbb R^N$ these restrictions realize every cotangent vector on $T_xM$.

## Proof

**Proof technique:** direct.

1.1 Define a smooth family of cotangent sections by $$\mathcal D:M\times\mathbb R^N\to T^*M,\qquad \mathcal D(x,p)=d(d_p)_x.$$ By [L2], the zero section is an embedded submanifold of the target bundle. At any zero $(x,p)$, the parameter-derivative description in [A1] spans the full fibre $T_x^*M$, so $\mathcal D$ is transverse to the zero section. [L2, A1, given, construct]

2.1 Apply [L1] to the family $\mathcal D$. The bad centers $p$ for which $d(d_p)$ is not transverse to the zero section form a null subset $E\subseteq\mathbb R^N$. For every $p\notin E$, [F1] turns this transversality conclusion into the statement that $d_p$ is Morse. [F1, L1, step 1.1]

3.1 Therefore squared-distance functions are Morse for generic centers in the ambient Euclidean space. [step 2.1] ∎
