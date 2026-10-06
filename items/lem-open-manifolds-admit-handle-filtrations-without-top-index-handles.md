---
id: lem-open-manifolds-admit-handle-filtrations-without-top-index-handles
kind: lemma
title: "Open manifolds admit handle filtrations without top-index handles"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-open-manifolds-admit-exhaustions-with-no-caps, prop-dual-elimination-of-top-index-handles, def-handle-decomposition-relative-to-the-incoming-boundary, def-smooth-cobordism-triad-for-morse-theory, def-countable-choice, def-locally-connected, thm-collar-neighborhood-theorem, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-embedded-smooth-submanifold-with-boundary, def-compact-space]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
dependency_level: 8
---

## Statement

Assume the axiom of countable choice. Let $M$ be a nonempty connected open smooth $m$-manifold without boundary (no compact component, hence noncompact). Then there is a sequence $M_0\subseteq M_1\subseteq M_2\subseteq\cdots$ of compact $m$-submanifolds with boundary with $M_j\subseteq\operatorname{int}M_{j+1}$ and $M=\bigcup_jM_j$ such that for every $j$ the band $M_{j+1}\setminus\operatorname{int}M_j$ has the following presentation: each connected component $C$ of the band has nonempty outgoing boundary $\partial^+C=C\cap\partial M_{j+1}$ and admits a handle decomposition relative to $\partial^-C=C\cap\partial M_j$ with no handles of index $m$. Equivalently, $M_{j+1}$ is obtained from $M_j$ by first extending the boundary through a collar, then adding finitely many disjoint components by $0$-handles and attaching finitely many further handles of index at most $m-1$; no $m$-handle is ever needed. Countable choice also selects one finite handle presentation for each band component; the bands are fixed before these independent selections.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a connected open smooth $m$-manifold $M$ without boundary and with no compact component.

[F1] The cap-free exhaustion: there are compact $m$-submanifolds with boundary $M_0\subseteq M_1\subseteq\cdots$ with $M_j\subseteq\operatorname{int}M_{j+1}$ and $M=\bigcup_jM_j$, such that no $M_j$ has a cap and every connected component of every band $M_{j+1}\setminus\operatorname{int}M_j$ has nonempty outgoing boundary ([[lem-open-manifolds-admit-exhaustions-with-no-caps]]).

[L1] DT-6 dual elimination: a compact connected triad $(W;M_0,M_1)$ with $M_1\neq\varnothing$ admits a handle decomposition relative to $M_0$ with no handles of index $\dim W$, and the conventions of the relative handle decomposition and of a smooth cobordism triad allow the empty incoming face and the empty outgoing face ([[prop-dual-elimination-of-top-index-handles]], [[def-handle-decomposition-relative-to-the-incoming-boundary]], [[def-smooth-cobordism-triad-for-morse-theory]]); the proposition assumes $\mathrm{AC}_\omega$.

[L2] Every compact manifold with boundary has a collar, its boundary is a closed embedded submanifold, and a compact locally connected space has finitely many components ([[thm-collar-neighborhood-theorem]], [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]], [[def-embedded-smooth-submanifold-with-boundary]], [[def-locally-connected]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j$ and a connected component $C$ of the band $M_{j+1}\setminus\operatorname{int}M_j$. The band is a compact $m$-manifold with boundary and $C$ is a compact connected component of it; the boundary of $C$ is the disjoint union of the faces $C\cap\partial M_j$ and $C\cap\partial M_{j+1}$, each a closed embedded submanifold of the corresponding boundary, and [L2] supplies collars of both. Hence $(C;C\cap\partial M_j,C\cap\partial M_{j+1})$ is a compact connected smooth cobordism triad, and its outgoing face $C\cap\partial M_{j+1}$ is nonempty by the cap-freeness in [F1]. [F1, L2, given, construct]

2.1 Apply [L1] to this triad: because the outgoing face is nonempty, $C$ admits a handle decomposition relative to the incoming face $C\cap\partial M_j$ with no handles of index $m=\dim C$. When the incoming face is empty, the same proposition is applied with the empty incoming face convention, so the presentation begins with $0$-handles and again uses no $m$-handle. [L1, step 1.1]

3.1 The band has finitely many connected components by compactness and local connectedness [L2]. Assembling the presentations of its components and the collar $\partial M_j\times[0,\varepsilon]$ implicit in the relative convention gives a presentation of $M_{j+1}$ from $M_j$: extend the boundary through the collar, then add each component by $0$-handles and further handles of index at most $m-1$. In particular no $m$-handle is ever needed. [F1, L1, L2, step 2.1, construct]

4.1 The only in-run suppliers used are [F1] and [L1], both of which assume $\mathrm{AC}_\omega$, and the standard collar and boundary items of [L2]; no handle cancellation, Whitney trick or later page is invoked. The bands have already been fixed; each has finitely many components. Index a band component $C$ by its band number and the least member of a fixed countable coordinate basis contained in $\operatorname{int}_M C$. Each component has a nonempty ambient interior, so such a member exists. Distinct components of one band have disjoint interiors and therefore cannot receive the same nonempty basis member. This gives an injection into $\mathbb N\times\mathbb N$. Countable choice selects a complete finite handle presentation for each of this at-most-countable family of nonempty witness sets. This proves the claimed filtration and the stated description of the band presentations. [F1, L1, L2, step 3.1] ∎
