---
status: published
id: thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair
kind: theorem
title: Property (T) is equivalent to the existence of a compact Kazhdan pair
deps:
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-compact-space
  - def-continuous-function-of-positive-type
  - def-countable-choice
  - def-hilbert-direct-sum-of-unitary-representations
  - def-hilbert-space
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-matrix-coefficient-of-a-unitary-representation
  - def-orthogonality-and-orthogonal-complement
  - def-spectral-gap-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - lem-diagonal-unitary-coefficients-have-positive-type
  - lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-orthogonal-decomposition-by-a-closed-subspace
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. Use AC to choose, for each compact Q and positive tolerance, a normalized diagonal coefficient from a nonempty subset of the set of functions C(G) witnessing failure of a Kazhdan pair; then use the canonical GNS construction and the set-indexed Hilbert direct sum. AC implies Countable Choice through the declared theorem, which is used by the orthogonal-decomposition and projection suppliers. No representations or Hilbert spaces are selected from a proper class."
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
      locator: "Chapter 1, Proposition 1.1.9 and Remark 1.1.10, printed p. 36; Proposition 1.2.1 and complete proof, printed pp. 36–37/PDF pp. 42–43. The proof here replaces its choice of witness representations over all compact tests by a set-sized choice of coefficient functions and canonical GNS representations."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, printed pp. 3–5/PDF pp. 10–12: the countable discrete-group discussion of finite Kazhdan sets; supplementary only. The exercise-sheet analogue in §2 I.1 is posed as an exercise and is not used as proof of the general topological-group theorem."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $G$ be a
topological group ([[def-topological-group]]). The following are equivalent:

(i) $G$ has Kazhdan's property (T) ([[def-kazhdans-property-t]]).

(ii) There are a compact set $Q\subseteq G$ ([[def-compact-space]]) and
$\varepsilon>0$ such that $(Q,\varepsilon)$ is a Kazhdan pair
([[def-kazhdan-pair-and-kazhdan-constant]]).

(iii) There is a compact $Q\subseteq G$ with $\kappa(G,Q)>0$
([[def-kazhdan-pair-and-kazhdan-constant]]).

Moreover, if $(Q,\varepsilon)$ is any Kazhdan pair, $\pi$ is a strongly
continuous unitary representation on a Hilbert space $H$, and $\xi\in H$ is
$(Q,\delta\varepsilon)$-invariant for some $0<\delta\le1$, then
$$\lVert\xi-P\xi\rVert\le\delta\lVert\xi\rVert,$$
where $P$ is the orthogonal projection onto the closed subspace
$$H^G:=\{v\in H:\pi(g)v=v\text{ for every }g\in G\}$$
([[def-spectral-gap-for-a-unitary-representation]],
[[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

## Facts & Assumptions

**Given:** AC; a topological group $G$; the property-(T), almost-invariant-vector, and Kazhdan-pair notions; a strongly continuous unitary representation $\pi$ on $H$; and, for the quantitative clause, a pair $(Q,\varepsilon)$ and $\xi\in H$ that is $(Q,\delta\varepsilon)$-invariant.

[F1] Property (T) says that every strongly continuous unitary representation with almost invariant unit vectors has a nonzero invariant vector; the zero representation has no almost invariant vectors. Almost invariance tests every compact set and every positive tolerance. ([[def-kazhdans-property-t]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]])

[F2] A Kazhdan pair $(Q,\varepsilon)$ means every strongly continuous unitary representation having a $(Q,\varepsilon)$-invariant unit vector has a nonzero invariant vector. Its admissible positive tolerances are downward closed; for compact $Q$, $(Q,\varepsilon)$ is a pair exactly when $\kappa(G,Q)\ge\varepsilon$, and every positive tolerance below $\kappa(G,Q)$ is admissible. ([[def-kazhdan-pair-and-kazhdan-constant]])

[F3] A diagonal coefficient of a unitary representation is continuous and of positive type; if its vector is unit, the function is normalized. Conversely, every normalized continuous positive-type function has a pointed cyclic GNS representation, and any pointed cyclic representation with that coefficient is unitarily equivalent to its GNS representation. ([[def-matrix-coefficient-of-a-unitary-representation]], [[lem-diagonal-unitary-coefficients-have-positive-type]], [[def-continuous-function-of-positive-type]], [[cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations]])

[F4] Under AC, a set-indexed Hilbert direct sum of strongly continuous unitary representations is strongly continuous, the coordinate inclusions and projections intertwine the actions, and a vector is invariant exactly when each coordinate is invariant. ([[def-axiom-of-choice]], [[def-hilbert-direct-sum-of-unitary-representations]])

[F5] For a unitary representation, $M=H^G$ is a closed invariant subspace and $M^\perp$ is closed and invariant; the restricted representation on $M^\perp$ has no nonzero invariant vector. ([[def-spectral-gap-for-a-unitary-representation]], [[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]], [[def-orthogonality-and-orthogonal-complement]])

[F6] AC implies Countable Choice; under Countable Choice a closed subspace of a Hilbert space has the orthogonal decomposition $H=M\oplus M^\perp$ and its orthogonal projection $P$ satisfies $P\xi\in M$ and $\xi-P\xi\in M^\perp$. ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]])

## Proof

**Proof technique:** For property (T) implying a compact Kazhdan pair, use a set-sized family of normalized coefficient functions and their canonical GNS representations. For the quantitative estimate, decompose orthogonally into the invariant subspace and its complement.

1.1 Assume (ii), and let $\pi$ have almost invariant vectors. Choose the compact $Q$ and $\varepsilon>0$ from (ii). By [F1], $\pi$ has a $(Q,\varepsilon)$-invariant unit vector, so the pair property [F2] supplies a nonzero invariant vector. Hence $G$ has property (T). [F1, F2]

1.2 Assume (i) and suppose, for contradiction, that no compact Kazhdan pair exists. Let $I$ be the set of pairs $(Q,\eta)$ with $Q$ compact in $G$ and $\eta>0$. For each $i=(Q,\eta)\in I$, let $C_i$ be the subset of the set $\mathbb C^G$ consisting of normalized diagonal coefficients of unit vectors in strongly continuous representations with no nonzero invariant vector that are $(Q,\eta)$-invariant. Failure of $(Q,\eta)$ to be a pair makes $C_i$ nonempty. AC chooses one function $\varphi_i\in C_i$ for each $i\in I$; this is a choice from subsets of the set $\mathbb C^G$, not from the class of all representations. [F1, F2, F3, choose]

1.3 If (ii) holds for a compact $Q$ and $\varepsilon>0$, [F2] gives $\kappa(G,Q)\ge\varepsilon>0$, so (iii) holds. Conversely, if (iii) holds for a compact $Q$, choose $\alpha>0$ strictly below $\kappa(G,Q)$ (choose $\alpha=1$ when the threshold is $+\infty$); [F2] says $(Q,\alpha)$ is a Kazhdan pair. Hence (ii) and (iii) are equivalent. [F2, choose]

1.4 For the quantitative clause put $M=H^G$. By [F5] it is closed and invariant, its orthogonal complement is invariant, and the restricted representation on $M^\perp$ has no nonzero invariant vector. By [F6], write $\xi=P\xi+\xi''$ with $\xi''=\xi-P\xi\in M^\perp$. If $\xi''=0$, the claimed estimate is immediate. If $\xi''\ne0$ and $Q=\varnothing$, then $\xi''/\lVert\xi''\rVert$ is vacuously $(Q,\varepsilon)$-invariant, so the pair would force an invariant vector in the restricted representation, a contradiction. [F2, F5, F6]

2.1 For each $i$, let $(\rho_i,K_i,\zeta_i)$ be the canonical pointed cyclic GNS representation of $\varphi_i$ from [F3]. This representation has no nonzero invariant vector: a witness in the definition of $C_i$ has a closed cyclic subspace generated by its unit vector; that subspace has no invariant vector, and its pointed cyclic representation has coefficient $\varphi_i$, so [F3] identifies it unitarily with the GNS representation. In particular, $\|\zeta_i\|=1$ and $\zeta_i$ is $(Q,\eta)$-invariant in $\rho_i$. [F3, step 1.2]

2.2 Thus in the remaining case $Q\ne\varnothing$ and $\xi''\ne0$. The unit vector $\xi''/\lVert\xi''\rVert$ cannot be $(Q,\varepsilon)$-invariant, because the restricted representation has no nonzero invariant vector and $(Q,\varepsilon)$ is a Kazhdan pair. Hence some $q\in Q$ satisfies $\lVert\pi(q)\xi''-\xi''\rVert\ge\varepsilon\lVert\xi''\rVert$. Since $P\xi\in H^G$, this displacement equals $\lVert\pi(q)\xi-\xi\rVert$, which is strictly less than $\delta\varepsilon\lVert\xi\rVert$ by the assumed invariance of $\xi$. Canceling $\varepsilon>0$ gives $\lVert\xi-P\xi\rVert=\lVert\xi''\rVert<\delta\lVert\xi\rVert$, and therefore the stated weak inequality. [F2, F5, F6, step 1.4, algebra]

3.1 Form the set-indexed Hilbert direct sum $\rho=\widehat\bigoplus_{i\in I} \rho_i$. Given any compact $Q$ and $\epsilon>0$, the coordinate indexed by $(Q,\epsilon/2)$ contains a unit vector that is $(Q,\epsilon/2)$-invariant; its image under the coordinate inclusion is $(Q,\epsilon)$-invariant in $\rho$. Thus $\rho$ has almost invariant vectors. By (i) it has a nonzero invariant vector, but each coordinate of an invariant vector is invariant in its summand by [F4], and every $\rho_i$ has no such vector by step 2.1. All coordinates must therefore vanish, a contradiction. This proves (i)$\Rightarrow$(ii). [F1, F4, step 2.1, construct]

4.1 Steps 1.1 and 3.1 prove (i)$\Longleftrightarrow$(ii), step 1.3 proves (ii)$\Longleftrightarrow$(iii), and steps 1.4 and 2.2 prove the quantitative clause, including the zero vector, zero representation and empty-$Q$ cases. AC is used for the set-indexed coefficient selection, GNS/direct-sum constructions, and through Countable Choice in the orthogonal-decomposition and projection suppliers; no proper-class selection is used. [F3, F4, F6, step 1.2, step 3.1, step 1.3, step 1.4, step 2.2] ∎
