---
id: thm-maximal-tori-exist-in-compact-lie-groups
kind: theorem
title: Existence of maximal tori
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group, def-immersed-embedded-and-closed-lie-subgroup, thm-smooth-inverse-function-theorem-on-manifolds, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, existence and maximality of tori"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§7–§8"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every compact Lie group contains a maximal torus,
and every torus of $G$ is contained in a maximal torus.

## Facts & Assumptions

**Given:** The Axiom of Choice, a compact Lie group $G$, and a torus $T_0\le G$.

[F1] A torus is a compact connected abelian Lie group, and a torus of $G$ is an embedded closed Lie subgroup; maximality is inclusion-maximality among these subgroups ([[def-torus-and-maximal-torus-in-a-compact-lie-group]], [[def-immersed-embedded-and-closed-lie-subgroup]]). Only these defining clauses, not the additional classification assertion, are used.

[F2] A smooth map with invertible differential at a point is a diffeomorphism between suitable neighborhoods of that point and its image ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[A1] The Axiom of Choice is retained as a hypothesis ([[def-axiom-of-choice]]). The argument below uses no choice from an infinite family and no Haar or exponential theory; choosing one torus whose dimension is an attained maximum requires no choice axiom.

## Proof

**Proof technique:** direct.

1.1 Consider the torus subgroups $T$ of $G$ containing $T_0$. Their dimensions form a nonempty subset of $\{0,\ldots,\dim G\}$: it contains $\dim T_0$, and an embedded submanifold has dimension at most that of its ambient manifold. This finite set has a largest member $d$, and by its definition there exists a torus $T$ containing $T_0$ with dimension $d$. Fix one such $T$. [F1, given]

2.1 Let $S$ be any torus of $G$ containing $T$. The inclusion $j:T\to S$ is smooth: in any submanifold chart for the embedded $S\subseteq G$, the smooth inclusion of $T$ into $G$ has zero transverse coordinates and its remaining coordinates give a smooth map into $S$. Its differential is injective because composition with the inclusion $S\to G$ is the immersion $T\to G$. Therefore $\dim T\le\dim S$. Since $S$ also contains $T_0$, maximality of $d$ gives $\dim S\le d=\dim T$; thus $dj_e$ is an isomorphism. [F1, step 1.1]

3.1 By [F2], $T$ contains an open neighborhood of $e$ in $S$. Its translates by elements of $T$ show that $T$ is open in $S$. Each other coset is also open by translation, so the complement of $T$ is open. Connectedness of $S$ and nonemptiness of $T$ force $T=S$. Consequently $T$ is a maximal torus containing $T_0$. [F1, F2, step 2.1]

4.1 The trivial subgroup $\{e\}$, with its zero-dimensional embedded Lie group structure, is compact, connected and abelian, hence is a torus. Taking it for $T_0$ proves existence for every compact $G$, including disconnected and zero-dimensional groups. The argument for arbitrary $T_0$ proves the containment assertion. No axiom of choice is needed by this proof beyond the retained, unused hypothesis [A1]. [A1, F1, step 1.1, step 3.1] ∎
