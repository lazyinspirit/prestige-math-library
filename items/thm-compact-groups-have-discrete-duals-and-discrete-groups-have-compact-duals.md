---
id: thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
kind: theorem
title: Compact groups have discrete duals and discrete groups have compact duals
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-compact-open-character-group-operations-are-continuous
- lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- lem-unit-circle-is-a-compact-metrizable-topological-group
- thm-tychonoff
- thm-closed-subspace-of-a-compact-space-is-compact
- def-compact-space
- def-product-topology
- def-standard-topologies
- def-topology-of-pointwise-convergence
- lem-topological-group-translations-and-inversion
- def-axiom-of-choice
- def-subspace-topology-top
- lem-pointwise-limits-of-characters-are-characters
- def-continuous-map-top
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Dikran D. Dikranjan, Introduction to Topological Groups (author lecture
      notes, Universita di Udine / Universidad Complutense de Madrid, 2007)
    url: http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf
    locator: 'Section 7.1 (printed p. 46), Example 7.1(1)-(2): a compact abelian group
      has discrete dual, a discrete abelian group has compact dual.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards
      Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Lemma C.7, printed pp. 434-435: the two implications;
      its compact-group proof uses Fourier orthogonality. The product-closedness
      proof for discrete groups is supplied here and in Dikranjan Example 7.1(2).'
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: "Sections 34C-34D give the dual-topology background. The compact/discrete implications are proved here and stated in Dikranjan Example 7.1 and EW Lemma C.7."
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement

(1) If $G$ is a compact abelian topological group, then $\widehat G$ is discrete.
(2) If $G$ is a discrete abelian group, then, assuming the Axiom of Choice
([[def-axiom-of-choice]]) used only through Tychonoff's theorem, $\widehat G$ is
compact ([[def-compact-space]]).

## Facts & Assumptions

[F1] $\widehat G$ is a Hausdorff topological abelian group, so translations are homeomorphisms; its compact-open subbasis is $S(K,V)=\{\gamma:\gamma[K]\subseteq V\}$ for compact $K\subseteq G$ and open $V\subseteq\mathbb T$. ([[lem-compact-open-character-group-operations-are-continuous]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-subspace-topology-top]])

[F2] The arc $D=\{z\in\mathbb T:|z-1|<1\}$ contains no nontrivial subgroup of $\mathbb T$; the image of a homomorphism is a subgroup. ([[lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup]])

[F3] On a discrete domain the compact-open topology agrees with the topology of pointwise convergence, and on every subset of $C(G,\mathbb T)$ the compact-open subspace topology is the topology inherited from the product $\mathbb T^{G}$. ([[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]], [[def-topology-of-pointwise-convergence]])

[F4] Every function from a discrete space is continuous, so for discrete $G$ the dual is the set $\operatorname{Hom}(G,\mathbb T)$ of all homomorphisms, and this set is closed in $\mathbb T^{G}$ for the product topology. ([[def-standard-topologies]], [[def-continuous-map-top]], [[lem-pointwise-limits-of-characters-are-characters]])

[F5] Assume the Axiom of Choice: an arbitrary product of compact spaces is compact, and a closed subspace of a compact space is compact. ([[thm-tychonoff]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-product-topology]], [[def-axiom-of-choice]])

[F6] $\mathbb T$ is compact and Hausdorff and $1\in D$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]])

## Proof

**Given:** An abelian topological group $G$, compact in case (1) and discrete in case (2).

1.1 Under the hypothesis of (1), $S(G,D)=\{\gamma\in\widehat G:\gamma[G]\subseteq D\}$ is open in $\widehat G$ by [F1], since $G$ is compact and $D$ is open and contains $1$ by [F6]; it contains the identity character because $1[G]=\{1\}\subseteq D$. If $\gamma\in S(G,D)$, then $\gamma[G]$ is a subgroup of $\mathbb T$ contained in $D$, hence trivial by [F2], so $\gamma=1$; therefore $S(G,D)=\{1\}$ and $\{1\}$ is open in $\widehat G$. [F1, F2, F6]

1.2 Under the hypothesis of (2), for every $f:G\to\mathbb T$ and every open target set $V$, the preimage $f^{-1}[V]$ is open because every subset of the discrete source $G$ is open. At any $x$ with $f(x)\in V$ this preimage is the required source neighbourhood, so every such function is continuous by [F4], so the dual is $\operatorname{Hom}(G,\mathbb T)$ with the compact-open topology, which by [F3] is the subspace topology inherited from the product $\mathbb T^{G}$; by [F4] the set $\operatorname{Hom}(G,\mathbb T)$ is closed in $\mathbb T^{G}$. [F3, F4]

2.1 Hence $\widehat G$ is discrete: for any $\gamma_{0}\in\widehat G$ the translation $\gamma\mapsto\gamma_{0}\gamma$ is a homeomorphism of $\widehat G$ by [F1] carrying $1$ to $\gamma_{0}$, so $\{\gamma_{0}\}$ is the image of the open set $\{1\}$ and is open; every singleton is open, which is discreteness. [step 1.1, F1]

2.2 The product $\mathbb T^{G}$ is compact by Tychonoff's theorem under the Axiom of Choice by [F5], and the closed subspace $\widehat G=\operatorname{Hom}(G,\mathbb T)$ of a compact space is compact by [F5]. This completes (2). [step 1.2, F5]

3.1 Clause (1) is step 2.1 and clause (2) is step 2.2, so the theorem is proved. [step 2.1, step 2.2] ∎
