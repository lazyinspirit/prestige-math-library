---
id: def-almost-invariant-vectors-for-a-unitary-representation
kind: definition
title: Almost invariant vectors for a unitary representation
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-compact-space
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - def-weak-containment-of-unitary-representations
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - def-axiom-of-choice
  - def-matrix-coefficient-of-a-unitary-representation
  - def-continuous-function-of-positive-type
  - lem-diagonal-unitary-coefficients-have-positive-type
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "The definition, its scaling property, and the implication from almost invariant vectors to weak containment are choice-free. The locally compact Hausdorff equivalence with weak containment and the cited general-group counterexample are invoked from the published lemma under AC; the counterexample uses Tychonoff and recursive compact-stage neighbourhood selections. Consumers inherit AC when they use either assertion."
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definition 1.1.1, printed p. 32; Remark 1.1.2"
---

## Definition

Let $G$ be a topological group and let $(\pi,H)$ be a strongly continuous unitary representation of $G$ ([[def-strongly-continuous-unitary-representation]]) on a Hilbert space $H$ ([[def-hilbert-space]]). For a subset $Q\subseteq G$ and a real number $\varepsilon>0$, a vector $\xi\in H$ is **$(Q,\varepsilon)$-invariant** if
$$\|\pi(x)\xi-\xi\|<\varepsilon\|\xi\|\qquad\text{for every }x\in Q.$$
The condition is vacuous when $Q=\varnothing$; the definition of almost invariant vectors below still tests the compact singleton containing the identity. For $Q=\{e\}$, every unit vector is $(Q,\varepsilon)$-invariant because $\pi(e)=I$. The representation $\pi$ **has almost invariant vectors** if for every compact $Q\subseteq G$ ([[def-compact-space]]) and every $\varepsilon>0$, it has a $(Q,\varepsilon)$-invariant unit vector. The representation has a **nonzero invariant vector** if there is $\xi\ne0$ such that $\pi(g)\xi=\xi$ for every $g\in G$. In particular, the zero representation has no almost invariant vectors because it has no unit vectors. For a nonzero $\xi$, the $(Q,\varepsilon)$-condition is unchanged by multiplying $\xi$ by a nonzero scalar, so it may be normalized to a unit vector.

## Remarks

For any topological group, almost invariant vectors imply $1_G\prec\pi$ in the finite-sum coefficient sense of [[def-weak-containment-of-unitary-representations]]. Indeed, every coefficient of the trivial representation is a nonnegative constant $c$. If $c>0$, choose a unit vector $\xi$ that is $(Q,\delta)$-invariant, where $\delta=\eta/c$ for a requested approximation tolerance $\eta>0$, and use $\sqrt c\,\xi$ as a vector for $\pi$. For every $x\in Q$, Cauchy–Schwarz gives
$$\left|c-\langle\pi(x)(\sqrt c\,\xi),\sqrt c\,\xi\rangle\right|=c\left|\langle\xi-\pi(x)\xi,\xi\rangle\right|\le c\|\pi(x)\xi-\xi\|<\eta.$$
This diagonal coefficient is continuous and of positive type by [[def-matrix-coefficient-of-a-unitary-representation]] and [[lem-diagonal-unitary-coefficients-have-positive-type]], so it is an allowed one-term approximant; the zero coefficient ($c=0$) is represented by the zero vector. No choice is used, since a witness is selected separately for each given compact set and tolerance.

When $G$ is locally compact Hausdorff ([[def-locally-compact-space]], [[def-hausdorff-space]]) and AC is assumed ([[def-axiom-of-choice]]), [[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]] proves the converse as well: $1_G\prec\pi$ is equivalent to almost invariant vectors. Under AC, the converse fails for general topological groups; that published lemma gives a counterexample in its final remarks, using Tychonoff and recursive compact-stage neighbourhood selections. The LCH equivalence and that counterexample are the two assertions invoked here under AC; the definition and the forward implication above are choice-free.
