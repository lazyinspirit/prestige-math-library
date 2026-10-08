---
id: def-spectral-gap-for-a-unitary-representation
kind: definition
title: Spectral gap for a unitary representation
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-weak-containment-of-unitary-representations
  - def-strongly-continuous-unitary-representation
  - def-orthogonality-and-orthogonal-complement
  - def-hilbert-space
  - def-locally-compact-space
  - def-hausdorff-space
  - lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "The invariant-vector subspace, its orthogonal complement, and the weak-containment definition are choice-free. The displacement characterization is invoked only for LCH groups under the explicit Axiom of Choice hypothesis of the published weak-containment lemma. No countable-choice projection or orthogonal-decomposition result is used."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.1.1, printed p. 32; Appendix F, §F.1, Corollary F.1.5 and proof of Proposition F.1.4, printed pp. 423–424"
---

## Definition

Let $G$ be a topological group and let $(\pi,H)$ be a strongly continuous unitary representation ([[def-strongly-continuous-unitary-representation]]) on a Hilbert space $H$ ([[def-hilbert-space]]). Put
$$H^G:=\{\xi\in H:\pi(g)\xi=\xi\text{ for every }g\in G\}.$$
This is a closed invariant subspace: if $\xi_n\in H^G$ and $\xi_n\to\xi$, then for every $g$ the isometry $\pi(g)$ gives $\|\pi(g)\xi-\xi\|\le2\|\xi-\xi_n\|\to0$. Its orthogonal complement $H^G{}^\perp$ ([[def-orthogonality-and-orthogonal-complement]]) is also closed and $G$-invariant by [[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]], so the restriction $\pi|_{H^G{}^\perp}$ is a strongly continuous unitary representation. The representation $\pi$ has **spectral gap** if
$$1_G\not\prec\pi|_{H^G{}^\perp},$$
where $1_G$ is the trivial representation and $\prec$ is weak containment ([[def-weak-containment-of-unitary-representations]]).

If $G$ is locally compact Hausdorff ([[def-locally-compact-space]], [[def-hausdorff-space]]) and AC is assumed ([[def-axiom-of-choice]]), this is equivalent by [[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]] to the existence of a compact $Q\subseteq G$ containing the identity and an $\varepsilon>0$ such that
$$\sup_{g\in Q}\|\pi(g)\xi-\xi\|\ge\varepsilon\|\xi\|\qquad\text{for every }\xi\in H^G{}^\perp.$$
No displacement equivalence is asserted for general topological groups.

## Remarks

The weak-containment lemma says, under its LCH and AC hypotheses, that $1_G\prec\pi|_{H^G{}^\perp}$ exactly when every compact $Q$ and every $\delta>0$ admit a unit vector in $H^G{}^\perp$ with displacement $<\delta$. Negating this statement gives one compact $Q$ and one $\varepsilon>0$ for which every unit vector has displacement at least $\varepsilon$. Rescaling gives the displayed bound for every nonzero vector, and for $\xi=0$ both sides are zero. Replacing $Q$ by $Q\cup\{e\}$ preserves the bound and ensures the compact set is nonempty. If $H^G{}^\perp=\{0\}$, the weak-containment condition fails and the displacement inequality holds vacuously apart from its true zero-vector equality.
