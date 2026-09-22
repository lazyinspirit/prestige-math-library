---
id: prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram
kind: proposition
title: Irreducibility and connected Dynkin diagrams
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-systems-decompose-uniquely-into-irreducible-components, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-reducible-and-irreducible-root-system, def-cartan-matrix-of-a-based-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-positive-system-and-base-of-simple-roots, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Proposition 2.54, printed pp. 158-159"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Lemma 23.2 and the connectedness remark after Proposition 23.4"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with base
$\Delta$ and Dynkin diagram
$\Gamma$ ([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).
Then $\Phi$ is irreducible ([[def-reducible-and-irreducible-root-system]]) if
and only if $\Gamma$ is empty or connected. In particular, for a nonempty
root system irreducibility is equivalent to connectedness of the diagram.
The empty alternative follows the local convention that the rank-zero root
system is irreducible.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ and its Dynkin diagram $\Gamma$, whose vertex set is $\Delta$ and in which $\alpha_i,\alpha_j$ are joined exactly when $(\alpha_i,\alpha_j)\ne0$.

[L1] $\Phi$ is the disjoint union of irreducible root systems spanning pairwise orthogonal nonzero subspaces, and this decomposition is unique up to order for its nonempty components ([[prop-root-systems-decompose-uniquely-into-irreducible-components]], [[def-reducible-and-irreducible-root-system]]).

[L2] The simple roots form a basis of $E$; every root is an integral combination of simple roots with all nonzero coefficients of one sign ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L3] The Cartan matrix entry $a_{ij}$ vanishes exactly when $(\alpha_i,\alpha_j)=0$ ([[def-cartan-matrix-of-a-based-root-system]]).

[L4] A positive root is simple exactly when it is not a sum of two positive roots; every root reflection preserves $\Phi$ ([[def-positive-system-and-base-of-simple-roots]], [[def-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\Phi\ne\varnothing$. If $\Gamma$ is disconnected, partition its vertices as $\Delta=S\sqcup T$ into two nonempty unions of connected components. Then $(S,T)=0$ by [L3], and $U=\operatorname{span}S$, $W=\operatorname{span}T$ are nonzero orthogonal subspaces with $E=U\oplus W$ by [L2]. Every root has support in just one side. Otherwise, after replacing a root by its negative if necessary, choose a positive root $\beta$ of least height whose support meets both $S$ and $T$. It is not simple, so [L4] writes $\beta=\gamma+\delta$ for positive roots $\gamma,\delta$. Minimality makes each summand supported on one side, and because $\beta$ is mixed they lie on opposite sides; hence $(\gamma,\delta)=0$. Reflection in $\gamma$ then gives $$s_\gamma(\beta)=\beta-\frac{2(\beta,\gamma)}{(\gamma,\gamma)}\gamma=\delta-\gamma\in\Phi,$$ but $\delta-\gamma$ has nonzero simple-root coefficients of both signs, contradicting [L2]. Thus $\Phi=(\Phi\cap U)\sqcup(\Phi\cap W)$ is an orthogonal splitting with both parts nonempty, and $\Phi$ is reducible. [L2, L3, L4, algebra]

1.2 If $\Phi$ is reducible, write $\Phi=\Phi_1\sqcup\Phi_2$ as an orthogonal union of nonempty subsystems spanning orthogonal nonzero subspaces by [L1]. Put $\Delta_i=\Delta\cap\Phi_i$. Every simple root belongs to exactly one $\Phi_i$, so $\Delta=\Delta_1\sqcup\Delta_2$. Each $\Delta_i$ is nonempty: choose a positive root $\beta\in\Phi_i$ and expand it in the basis $\Delta$ using [L2]; orthogonal projection to the other component, together with linear independence of the simple roots there, forces all coefficients from $\Delta_{3-i}$ to vanish, while $\beta\ne0$ leaves a coefficient from $\Delta_i$. Since $(\Phi_1,\Phi_2)=0$, no edge of $\Gamma$ joins $\Delta_1$ to $\Delta_2$, and $\Gamma$ is disconnected. [L1, L2, L3, algebra]

2.1 For $\Phi\ne\varnothing$, steps 1.1 and 1.2 prove the two implications by contraposition, so irreducibility is equivalent to connectedness of $\Gamma$. For $\Phi=\varnothing$, the spanning axiom gives $E=0$ and the base and diagram are empty; the zero space has no splitting into two nonzero subspaces, so this root system is irreducible by [L1]. Conversely an empty diagram gives $E=0$ by [L2], hence $\Phi=\varnothing$. Thus in all ranks irreducibility is equivalent to the diagram being empty or connected. [L1, L2, step 1.1, step 1.2, algebra] ∎
