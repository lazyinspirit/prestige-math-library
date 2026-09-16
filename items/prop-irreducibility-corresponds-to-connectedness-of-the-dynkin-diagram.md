---
id: prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram
kind: proposition
title: Irreducibility equals connectedness of the diagram
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-systems-decompose-uniquely-into-irreducible-components, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-reducible-and-irreducible-root-system, def-cartan-matrix-of-a-based-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
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
and only if $\Gamma$ is connected.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ and its Dynkin diagram $\Gamma$, whose vertex set is $\Delta$ and in which $\alpha_i,\alpha_j$ are joined exactly when $(\alpha_i,\alpha_j)\ne0$.

[L1] $\Phi$ is the disjoint union of irreducible root systems spanning pairwise orthogonal nonzero subspaces, and this decomposition is unique and consists of the connected components of the nonorthogonality graph on $\Phi$ ([[prop-root-systems-decompose-uniquely-into-irreducible-components]], [[def-reducible-and-irreducible-root-system]]).

[L2] The simple roots form a basis of $E$; every root is an integral combination of simple roots with all nonzero coefficients of one sign ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L3] The Cartan matrix entry $a_{ij}$ vanishes exactly when $(\alpha_i,\alpha_j)=0$ ([[def-cartan-matrix-of-a-based-root-system]]).

## Proof

**Proof technique:** direct.

1.1 If $\Gamma$ is disconnected, write $\Delta=S\sqcup T$ for its vertex sets of connected components, so that $(S,T)=0$ by [L3] and the subspaces $U=\operatorname{span}S$, $W=\operatorname{span}T$ are nonzero and orthogonal. Every root has support in $S$ or in $T$: if a positive root $\gamma$ had support meeting both, then writing $\gamma=\gamma_U+\gamma_W$ with $\gamma_U\ne0$, $\gamma_W\ne0$ and $(\gamma_U,\gamma_W)=0$ gives $(\gamma,\gamma_U)=(\gamma_U,\gamma_U)>0$, so $\gamma-\gamma_U=\gamma_W\in\Phi$; but the positive root $\gamma$ is a nonnegative integral combination of $\Delta$ and its restriction to $T$ has smaller height, so iterating this descent with respect to each simple root in its support would produce a positive root of height zero, a contradiction. Hence $\Phi=(\Phi\cap U)\sqcup(\Phi\cap W)$ is an orthogonal splitting with both parts nonempty, and $\Phi$ is reducible. [L1, L2, L3, algebra]

2.1 If $\Phi$ is reducible, write $\Phi=\Phi_1\sqcup\Phi_2$ as an orthogonal union of nonempty subsystems spanning orthogonal nonzero subspaces by [L1]. Let $\Delta_i=\Delta\cap\Phi_i$; then $\Delta=\Delta_1\sqcup\Delta_2$: every simple root belongs to exactly one $\Phi_i$ (it lies in one of the two orthogonal parts), the $\Delta_i$ are nonempty because each $\Phi_i$ has positive roots, and the positive roots of $\Phi_i$ are exactly the nonnegative integral combinations of $\Delta_i$, by the argument of step 1.1 applied inside the subsystem $\Phi_i$. Since $(\Phi_1,\Phi_2)=0$, the inner products between the two bases vanish by [L3], so no edge of $\Gamma$ joins $\Delta_1$ to $\Delta_2$ and $\Gamma$ is disconnected. [L1, L2, L3, algebra]

3.1 Steps 1.1 and 2.1 prove the two implications; hence irreducibility is equivalent to connectedness of the Dynkin diagram. [step 1.1, step 2.1, algebra] ∎
