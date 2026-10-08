---
status: published
id: thm-property-t-passes-to-quotients
kind: theorem
title: Property (T) passes to Hausdorff quotients
deps:
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-compact-space
  - def-hausdorff-space
  - def-kazhdans-property-t
  - def-locally-compact-space
  - def-normal-subgroup
  - def-product-topology
  - def-quotient-group
  - def-quotient-topology
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - def-homeomorphism-and-open-maps
  - lem-open-or-closed-surjection-is-quotient
  - lem-topological-group-translations-and-inversion
  - thm-compactness-under-continuous-maps
  - thm-product-universal-property
  - thm-quotient-group-laws
  - thm-quotient-universal-property
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC as in the dispatched statement. This proof uses no choice principle: quotient representatives are used only by existential instantiation, and compact images and quotient maps are handled directly."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Theorem 1.3.4 and complete proof, printed p. 43/PDF p. 49. The source proves the stronger result for a continuous homomorphism with dense image; this item retains the dispatched closed-normal quotient claim and proves it directly by pulling representations back along the quotient map."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, printed pp. 3–5/PDF pp. 10–12: supplementary countable/discrete context; not used for the quotient implication."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally
compact Hausdorff topological group ([[def-locally-compact-space]],
[[def-hausdorff-space]], [[def-topological-group]]) with Kazhdan's property
(T) ([[def-kazhdans-property-t]]), and let $N\trianglelefteq G$ be a closed
normal subgroup ([[def-normal-subgroup]]). Then the Hausdorff quotient
topological group $G/N$ with the quotient topology
([[def-quotient-group]], [[def-quotient-topology]]) has property (T).

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff topological group $G$ with property (T); a closed normal subgroup $N$; the algebraic quotient $G/N$ with its quotient topology and quotient map $q:G\to G/N$.

[F1] Property (T) says that every strongly continuous unitary representation with almost invariant unit vectors has a nonzero invariant vector. Almost invariance tests every compact subset of the group and every positive tolerance. ([[def-kazhdans-property-t]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]])

[F2] The quotient group has coset product $(gN)(hN)=ghN$ and inverse $(gN)^{-1}=g^{-1}N$; the canonical map $q(g)=gN$ is a continuous surjection and is a quotient map for the quotient topology. ([[def-normal-subgroup]], [[def-quotient-group]], [[def-quotient-topology]], [[thm-quotient-group-laws]], [[lem-open-or-closed-surjection-is-quotient]])

[F3] Left and right translations and inversion in $G$ are homeomorphisms, so translating an open subset of $G$ by a fixed element preserves openness. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[def-homeomorphism-and-open-maps]])

[F4] In the product topology, basic open sets in $G\times G$ are rectangles; a map into a product is continuous when its coordinate maps are continuous. An open continuous surjection is a quotient map, and a map out of a quotient map is continuous exactly when its composite is continuous. ([[def-product-topology]], [[thm-product-universal-property]], [[lem-open-or-closed-surjection-is-quotient]], [[thm-quotient-universal-property]])

[F5] The continuous image of a compact subset is compact. ([[def-compact-space]], [[thm-compactness-under-continuous-maps]])

[F6] A space is Hausdorff when every two distinct points have disjoint open neighborhoods. ([[def-hausdorff-space]])

[F7] AC means every set-indexed family of nonempty sets has a choice function; the proof below makes no such selection. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** Pull a representation of $G/N$ back along the quotient map. Compact subsets of $G$ have compact images, so almost invariance pulls back, and surjectivity transfers invariant vectors back to the quotient.

1.1 The quotient map $q:G\to G/N$ is continuous and surjective by [F2]. If $U\subseteq G$ is open, then $q^{-1}(q(U))=UN=\bigcup_{n\in N}Un$; every $Un$ is open by [F3], so the quotient topology makes $q(U)$ open. Thus $q$ is open. [F2, F3]

2.1 Let $gN\ne hN$. Then $g^{-1}h\notin N$, so closedness of $N$ gives an open set $W$ containing $g^{-1}h$ and disjoint from $N$. The map $(u,v)\mapsto u^{-1}v$ is continuous by the topological-group operations [F3] and the product topology [F4]; hence there are open neighborhoods $U\ni g$ and $V\ni h$ with $U^{-1}V\subseteq W$. Their images $q(U)$ and $q(V)$ are open by step 1.1. They are disjoint, since a common coset would give $u\in U$, $v\in V$ with $u^{-1}v\in N\cap W$. Therefore $G/N$ is Hausdorff. [F2, F3, F4, F6, step 1.1]

2.2 The map $q\times q:G\times G\to(G/N)\times(G/N)$ is continuous by [F4]. It is open: each basic rectangle $U\times V$ maps to the open rectangle $q(U)\times q(V)$ by step 1.1, and every open set is a union of basic rectangles. It is surjective since $q$ is. Hence $q\times q$ is a quotient map by [F4]. The quotient multiplication $m_{G/N}$ satisfies $m_{G/N}\circ(q\times q)=q\circ m_G$, and quotient inversion $i_{G/N}$ satisfies $i_{G/N}\circ q=q\circ i_G$. The right sides are continuous, so the quotient universal property [F4] makes both quotient operations continuous. Thus $G/N$ is a topological group. [F2, F3, F4, step 1.1]

3.1 Let $\sigma$ be any strongly continuous unitary representation of $G/N$ with almost invariant vectors, and put $\pi:=\sigma\circ q$. This is a strongly continuous unitary representation of $G$, since each orbit map is the composite of the continuous orbit map for $\sigma$ with $q$. Given a compact $K\subseteq G$ and $\varepsilon>0$, [F5] makes $q(K)$ compact; almost invariance of $\sigma$ supplies a unit vector $\xi$ with $\lVert\sigma(y)\xi-\xi\rVert<\varepsilon$ for every $y\in q(K)$. Thus $\lVert\pi(g)\xi-\xi\rVert<\varepsilon$ for every $g\in K$. This proves that $\pi$ has almost invariant vectors. [F1, F2, F5, step 2.2]

4.1 Since $G$ has property (T), [F1] gives a nonzero vector $\xi$ invariant under $\pi(G)$. Surjectivity of $q$ gives $\pi(G)=\sigma(G/N)$, so $\xi$ is invariant under $\sigma(G/N)$. As $\sigma$ was arbitrary, $G/N$ has property (T). The Axiom of Choice is included as in the dispatched statement but is not used in this proof. [F1, F2, F7, step 3.1] ∎
