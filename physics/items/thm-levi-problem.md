---
id: thm-levi-problem
kind: theorem
title: "The Levi problem: pseudoconvexity, domains of holomorphy, and holomorphic convexity"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity
  - thm-cartan-thullen-theorem
  - thm-domains-of-holomorphy-are-hartogs-pseudoconvex
  - lem-basic-properties-of-the-holomorphic-hull
  - rem-complex-euclidean-space-dictionary
  - thm-heine-borel-rn
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. I §7.A, Theorem 7.2(c)⇒(e), printed pp. 54-55; Ch. VIII §9, Theorem 9.11(a) and proof, printed pp. 392-393. The latter uses Skoda's Theorem 9.10 to prove pseudoconvexity implies domain of holomorphy."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $\Omega\subseteq\mathbb C^n$ be a domain,
$n\ge1$. Then the following three conditions are equivalent:

1. $\Omega$ is Hartogs pseudoconvex
   ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]);
2. $\Omega$ is a domain of holomorphy
   ([[def-holomorphic-extension-and-domain-of-holomorphy]]);
3. $\Omega$ is holomorphically convex, that is,
   $\widehat K_\Omega\Subset\Omega$ for every compact $K\Subset\Omega$
   ([[def-holomorphically-convex-hull-and-domain]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and a domain $\Omega\subseteq\mathbb C^n$, $n\ge1$.

[F1] Hartogs pseudoconvexity gives a continuous plurisubharmonic exhaustion on $\Omega$ ([[thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity]]).

[F2] In Demailly, *Complex Analytic and Differential Geometry*, Ch. I §7.A, Theorem 7.2(c) implies (e): a plurisubharmonic exhaustion on a proper open subset of $\mathbb C^n$ makes $-\log d(z,\mathbb C^n\setminus\Omega)$ plurisubharmonic, which is his pseudoconvexity criterion. Ch. VIII §9, Theorem 9.11(a), printed pp. 392–393, says that an open subset of $\mathbb C^n$ is a domain of holomorphy if and only if it is pseudoconvex. Its proof of the forward implication used here applies Skoda's Theorem 9.10 to the coordinate functions $z_j-a_j$ at a boundary point $a$ with a plurisubharmonic distance weight; the resulting identity $\sum_j(z_j-a_j)h_j=1$ prevents common holomorphic continuation across $a$.

[F3] For a domain in $\mathbb C^n$, being a domain of holomorphy is equivalent to holomorphic convexity ([[thm-cartan-thullen-theorem]]).

[F4] Every domain of holomorphy in $\mathbb C^n$ is Hartogs pseudoconvex ([[thm-domains-of-holomorphy-are-hartogs-pseudoconvex]]).

[F5] The holomorphic hull of a compact set is closed in its ambient domain and bounded in each coordinate ([[lem-basic-properties-of-the-holomorphic-hull]]). A closed bounded subset of $\mathbb C^n\cong\mathbb R^{2n}$ is compact ([[rem-complex-euclidean-space-dictionary]], [[thm-heine-borel-rn]]).

[F6] AC supplies the ambient choice assumptions of the source theorem and the cited library interfaces ([[def-axiom-of-choice]]).

**Choice use.** AC is the stated ambient hypothesis. The proof itself makes no new arbitrary selection; the nontrivial existence theorem imported in [F2] is used under its classical choice setting.

## Proof

**Proof technique:** direct application of the cited Levi theorem and Cartan–Thullen.

1.1 Suppose $\Omega$ is Hartogs pseudoconvex and proper in $\mathbb C^n$. By [F1] it has a continuous plurisubharmonic exhaustion. Demailly's pseudoconvexity equivalence in [F2] makes it pseudoconvex in his sense; his Levi theorem in [F2] then gives that $\Omega$ is a domain of holomorphy. [F1, F2, F6, given]

1.2 If $\Omega=\mathbb C^n$, then for every compact $K\subseteq\Omega$ its holomorphic hull is closed in $\mathbb C^n$ and coordinate-bounded by [F5], hence compact. Thus $\mathbb C^n$ is holomorphically convex and therefore a domain of holomorphy by [F3]. This covers the whole-space convention separately. [F3, F5]

2.1 By [F3], the domain-of-holomorphy conclusion of steps 1.1–1.2 is equivalent to holomorphic convexity. Conversely, either of those conditions gives Hartogs pseudoconvexity by [F4]. Hence all three conditions in the Statement are equivalent. [F3, F4, step 1.1, step 1.2] ∎
