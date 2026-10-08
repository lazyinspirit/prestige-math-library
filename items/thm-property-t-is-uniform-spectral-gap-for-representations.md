---
status: published
id: thm-property-t-is-uniform-spectral-gap-for-representations
kind: theorem
title: Property (T) is a uniform spectral gap over all representations
deps:
  - cor-inner-product-induces-a-norm
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-compact-space
  - def-countable-choice
  - def-continuous-map-top
  - def-hausdorff-space
  - def-hilbert-space
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-locally-compact-space
  - def-orthogonality-and-orthogonal-complement
  - def-spectral-gap-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-compactness-under-continuous-maps
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. The property-(T)-to-Kazhdan-pair supplier uses AC for set-sized coefficient choices and GNS/direct-sum constructions. AC implies Countable Choice through the declared theorem, which the projection and orthogonal-decomposition suppliers require in the converse. No further choice is used."
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
      locator: "Chapter 1, Proposition 1.1.9 and Remark 1.1.10, complete proof, printed p. 36/PDF p. 42: a Kazhdan pair controls distance to the invariant subspace; for compact Q the strict endpoint follows directly."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2 I.1, printed pp. 2–3/PDF pp. 32–33: a finitely generated discrete-group distance estimate, posed as an exercise without proof; supplementary only."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $G$ be a
topological group ([[def-topological-group]]). Then $G$ has property (T)
([[def-kazhdans-property-t]]) if and only if there are a compact
$Q\subseteq G$ and $\varepsilon>0$ such that for every strongly continuous
unitary representation $(\pi,H)$ of $G$ and every
$$\xi\in (H^G)^\perp:=\{v\in H:\langle v,w\rangle=0\text{ for every }w\in H^G\},\qquad H^G:=\{v\in H:\pi(g)v=v\text{ for every }g\in G\},$$
one has
$$\sup_{x\in Q}\lVert\pi(x)\xi-\xi\rVert\ge\varepsilon\lVert\xi\rVert.$$
When $Q=\varnothing$, interpret the left side as $0$, matching the
displacement convention in [[def-kazhdan-pair-and-kazhdan-constant]]. In the
property-(T) direction, $Q$ may be chosen to contain the identity. Conversely,
any such uniform pair is a Kazhdan pair
([[def-kazhdan-pair-and-kazhdan-constant]]). For locally compact Hausdorff
$G$ ([[def-locally-compact-space]], [[def-hausdorff-space]]), this is
equivalently one compact set and one constant witnessing spectral gap for every
unitary representation simultaneously
([[def-spectral-gap-for-a-unitary-representation]]).

## Facts & Assumptions

**Given:** AC; a topological group $G$; a strongly continuous unitary representation $(\pi,H)$; its fixed subspace $M=H^G$; and, as needed, a compact set $Q$ and $\varepsilon>0$.

[F1] Property (T) is equivalent under AC to the existence of a compact Kazhdan pair. ([[def-axiom-of-choice]], [[thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair]])

[F2] A Kazhdan pair $(Q,\varepsilon)$ means that every strongly continuous unitary representation with a $(Q,\varepsilon)$-invariant unit vector has a nonzero invariant vector. Property (T) is the same implication when the representation has almost invariant vectors. ([[def-kazhdan-pair-and-kazhdan-constant]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-kazhdans-property-t]])

[F3] The subspace $M=H^G$ is closed and invariant, its orthogonal complement is closed and invariant, and the restriction to $M^\perp$ has no nonzero invariant vector. ([[def-spectral-gap-for-a-unitary-representation]], [[def-orthogonality-and-orthogonal-complement]])

[F4] AC implies Countable Choice; under Countable Choice, $H=M\oplus M^\perp$ and the orthogonal projection $P$ satisfies $P\xi\in M$ and $\xi-P\xi\in M^\perp$. Orthogonality gives $\lVert\xi\rVert^2=\lVert P\xi\rVert^2+\lVert\xi-P\xi\rVert^2$. ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]], [[lem-pythagorean-theorem-and-finite-orthogonal-sums]])

[F5] For compact nonempty $Q$, the function $x\mapsto\lVert\pi(x)\xi-\xi\rVert$ is continuous and attains its maximum. Therefore if it is strictly less than $\varepsilon\lVert\xi\rVert$ at every $x\in Q$, its supremum is strictly less than that bound. ([[def-compact-space]], [[def-continuous-map-top]], [[def-strongly-continuous-unitary-representation]], [[cor-inner-product-induces-a-norm]], [[thm-compactness-under-continuous-maps]])

[F6] In a locally compact Hausdorff group under AC, spectral gap for a single representation is equivalent to a displacement lower bound on some compact set containing the identity. ([[def-spectral-gap-for-a-unitary-representation]], [[def-locally-compact-space]], [[def-hausdorff-space]], [[def-axiom-of-choice]])

[F7] For the empty set, the displacement is defined as $0$; adjoining the identity to a compact set preserves compactness and does not weaken a displacement lower bound. ([[def-kazhdan-pair-and-kazhdan-constant]], [[def-compact-space]], [[def-topological-group]])

## Proof

**Proof technique:** Use a compact Kazhdan pair for the forward direction. For the converse, project a near-invariant unit vector onto the fixed subspace and show its invariant component is nonzero.

1.1 Suppose $G$ has property (T). By [F1] choose a compact Kazhdan pair $(Q_0,\varepsilon)$. Put $Q=Q_0\cup\{e\}$; this is compact because a cover has a finite subcover on $Q_0$ and one additional member covering $e$, and it is still a Kazhdan pair because $(Q,\varepsilon)$-invariance implies $(Q_0,\varepsilon)$-invariance. Let $\pi$ be any strongly continuous unitary representation and $\xi\in(H^G)^\perp$. The assertion is immediate for $\xi=0$. If $\xi\ne0$ and the displayed supremum were less than $\varepsilon\lVert\xi\rVert$, then $\xi/\lVert\xi\rVert$ would be a $(Q,\varepsilon)$-invariant unit vector in the restriction to $(H^G)^\perp$. By [F3] that restriction has no nonzero invariant vector, contradicting the pair property. Thus the uniform lower bound holds for every $\pi$ and $\xi$. [F1, F2, F3, F7]

1.2 Conversely, assume a compact $Q$ and $\varepsilon>0$ satisfy the uniform bound. Let $(\pi,H)$ have a $(Q,\varepsilon)$-invariant unit vector $\xi$. By [F4], write $\xi=P\xi+\xi''$ with $\xi''\in(H^G)^\perp$. If $\xi''=0$, then $P\xi=\xi$ is already a nonzero invariant vector. If $\xi''\ne0$ and $Q=\varnothing$, the uniform inequality reads $0\ge\varepsilon\lVert\xi''\rVert$, a contradiction; so $Q$ is nonempty. Since $P\xi$ is fixed, $\lVert\pi(x)\xi''-\xi''\rVert=\lVert\pi(x)\xi-\xi\rVert<\varepsilon$ for every $x\in Q$. By [F5] the compact-set supremum is a maximum $D<\varepsilon$. Applying the uniform bound to $\xi''$ gives $\varepsilon\lVert\xi''\rVert\le D<\varepsilon$, so $\lVert\xi''\rVert<1$. Orthogonality in [F4] now gives $\lVert P\xi\rVert^2=1-\lVert\xi''\rVert^2>0$. Thus $P\xi$ is a nonzero invariant vector, and $(Q,\varepsilon)$ is a Kazhdan pair. [F2, F4, F5, F7, algebra]

2.1 Let $\pi$ be any strongly continuous unitary representation of $G$ with almost invariant vectors. Since the Kazhdan pair from step 1.2 has compact $Q$, almost invariance supplies a $(Q,\varepsilon)$-invariant unit vector; step 1.2 then gives a nonzero invariant vector. This is property (T) by [F2]. [F2, step 1.2]

3.1 Steps 1.1–2.1 prove the equivalence and show that a compact Kazhdan pair is itself a uniform spectral-gap witness. For the locally compact Hausdorff clause, apply [F6] to each representation. If a uniform witness has empty $Q$, the bound forces every fixed-space complement to be zero and $\{e\}$ is then a common witness; otherwise adjoining $e$ preserves the lower bound by [F7]. Thus a single compact set and constant witness spectral gap simultaneously for all representations exactly when $G$ has property (T). AC is used through the pair-equivalence theorem and, via Countable Choice, by the orthogonal-decomposition/projection suppliers. [F1, F4, F6, F7, step 1.1, step 1.2, step 2.1] ∎
