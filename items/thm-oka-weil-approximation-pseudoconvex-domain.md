---
id: thm-oka-weil-approximation-pseudoconvex-domain
kind: theorem
title: "Oka-Weil approximation on a pseudoconvex domain"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-levi-problem
  - lem-oka-weil-on-domain-of-holomorphy
  - def-holomorphically-convex-hull-and-domain
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
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
      locator: "§3.3.2, Theorem 21, printed pp. 78-79: Oka-Weil approximation on a domain of holomorphy, combined with the solution of the Levi problem on printed pp. 79-80."
    - title: "Jiri Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §2.6, Theorem 2.6.2 and the Oka-Weil discussion: statement and scope cross-check."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $\Omega\subseteq\mathbb C^n$ be a domain
that is Hartogs pseudoconvex
([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]), let
$K\Subset\Omega$ be compact with $\widehat K_\Omega=K$
([[def-holomorphically-convex-hull-and-domain]]), and let $f$ be holomorphic
in an open neighbourhood of $K$. Then for every $\varepsilon>0$ there is
$F\in\mathcal O(\Omega)$ with
$$\sup_{z\in K}|F(z)-f(z)|<\varepsilon .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; a Hartogs pseudoconvex domain $\Omega\subseteq\mathbb C^n$; a compact $K\Subset\Omega$ with $\widehat K_\Omega=K$; a holomorphic $f$ on an open neighbourhood of $K$; a real number $\varepsilon>0$.

[F1] For a domain $\Omega\subseteq\mathbb C^n$ the following three conditions are equivalent: $\Omega$ is Hartogs pseudoconvex; $\Omega$ is a domain of holomorphy; $\Omega$ is holomorphically convex ([[thm-levi-problem]]).

[F2] If $G$ is a domain of holomorphy, $A\Subset G$ is compact with $\widehat A_G=A$, and $g$ is holomorphic in an open neighbourhood of $A$, then for every $\delta>0$ there is $H\in\mathcal O(G)$ with $\sup_A|H-g|<\delta$ ([[lem-oka-weil-on-domain-of-holomorphy]]).

[F3] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F3]; it is consumed only inside the suppliers [F1] and [F2], each of which carries its own choice hypotheses. The proof selects nothing.

## Proof

**Proof technique:** direct.

1.1 By [F1] the Hartogs pseudoconvex domain $\Omega$ is a domain of holomorphy. [F1, given]

2.1 Applying [F2] with $G:=\Omega$, $A:=K$, $\widehat A_G=A$ and $g:=f$, and with $\delta:=\varepsilon$, gives $F\in\mathcal O(\Omega)$ with $\sup_K|F-f|<\varepsilon$, which is the assertion of the Statement under the ambient Axiom of Choice cited as [F3]. [F2, F3, step 1.1, given] ∎
