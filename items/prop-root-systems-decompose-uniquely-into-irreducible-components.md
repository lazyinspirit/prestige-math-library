---
id: prop-root-systems-decompose-uniquely-into-irreducible-components
kind: proposition
title: Unique irreducible decomposition
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reducible-and-irreducible-root-system, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Propositions 2.54-2.55 and their combinatorial content, printed pp. 158-159"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-in-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Proposition 23.3 area"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system. Then $\Phi$ is
the disjoint union $\Phi=\Phi_1\sqcup\cdots\sqcup\Phi_m$ of root systems
$\Phi_i\subseteq E_i:=\operatorname{span}\Phi_i$ that are irreducible, pairwise
orthogonal, and span $E$ as an orthogonal direct sum
$E=E_1\oplus\cdots\oplus E_m$. Moreover this decomposition is unique up to the
order of its terms: if $\Phi=\Psi_1\sqcup\cdots\sqcup\Psi_k$ is a second
decomposition into pairwise orthogonal root systems $\Psi_j$ spanning pairwise
orthogonal subspaces $F_j$ with $E=\bigoplus_jF_j$, then each $\Psi_j$ is a
union of some of the $\Phi_i$, and each $\Phi_i$ is contained in some
$\Psi_j$.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ in the finite-dimensional real inner product space $E$.

[L1] $\Phi$ is finite, spans $E$, $0\notin\Phi$, $s_\alpha(\Phi)=\Phi$ for all $\alpha\in\Phi$, every Cartan integer $2(\beta,\alpha)/(\alpha,\alpha)$ is an integer, and $\mathbb R\alpha\cap\Phi=\{\pm\alpha\}$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[L2] $\Phi$ is reducible when $\Phi=(\Phi\cap E_1)\sqcup(\Phi\cap E_2)$ for an orthogonal direct decomposition $E=E_1\oplus E_2$ with both $E_i$ nonzero, and irreducible otherwise; each part of such a decomposition spans its subspace ([[def-reducible-and-irreducible-root-system]]).

[L3] For a linear subspace $V\subseteq E$ with $\Phi\cap V\ne\varnothing$, the set $\Phi\cap V$ is a reduced crystallographic root system in $\operatorname{span}(\Phi\cap V)$: it is finite, $0\notin$ it, reducibility and integrality are inherited, and for $\alpha,\beta\in\Phi\cap V$ one has $s_\alpha(\beta)\in\Phi\cap V$ because $s_\alpha$ preserves $\Phi$ and maps $V$ into $V$. ([[def-reduced-crystallographic-euclidean-root-system]])

## Proof

**Proof technique:** direct.

1.1 Define a graph $G$ with vertex set $\Phi$, two distinct vertices $\alpha,\beta$ being joined by an edge exactly when $(\alpha,\beta)\ne0$. Let $C_1,\dots,C_m$ be the connected components of $G$, so that $\Phi=C_1\sqcup\cdots\sqcup C_m$ and every $C_i$ is nonempty. [given, algebra]

2.1 If $\alpha\in C_i$ and $\beta\in C_j$ with $i\ne j$, then $(\alpha,\beta)=0$, since otherwise an edge would join the two vertices and they would lie in one component. Consequently $\operatorname{span}C_i\perp\operatorname{span}C_j$ for $i\ne j$, and $E=\operatorname{span}\Phi=\operatorname{span}C_1\oplus\cdots\oplus\operatorname{span}C_m$ is an orthogonal direct sum. [L1, step 1.1, algebra]

2.2 For uniqueness, let $\Phi=\Psi_1\sqcup\cdots\sqcup\Psi_k$ with each $\Psi_j$ a reduced crystallographic root system in $F_j=\operatorname{span}\Psi_j$, the $F_j$ pairwise orthogonal, and $E=\bigoplus_jF_j$. If $\alpha\in\Psi_j$ and $\beta\in\Psi_{j'}$ with $j\ne j'$ then $(\alpha,\beta)=0$ because $F_j\perp F_{j'}$; hence no edge of $G$ joins distinct parts, and each connected component $C_i$ of $G$ is contained in a single $\Psi_j$. [given, step 1.1, algebra]

3.1 For each $i$ one has $C_i=\Phi\cap\operatorname{span}C_i$. Indeed, if $\gamma\in\Phi\cap\operatorname{span}C_i$ then $\gamma=\sum_{\alpha\in C_i}c_\alpha\alpha$; if $\gamma\notin C_i$ then $(\gamma,\alpha)=0$ for every $\alpha\in C_i$ by step 2.1 applied to the components, whence $(\gamma,\gamma)=\sum_\alpha c_\alpha(\gamma,\alpha)=0$ and $\gamma=0$, contradicting $0\notin\Phi$. [L1, step 2.1, algebra]

4.1 Each $C_i$ is a reduced crystallographic root system in $E_i=\operatorname{span}C_i$: this is [L3] applied to $V=E_i$, whose intersection with $\Phi$ is $C_i$ by step 3.1, and $C_i$ spans $E_i$ by definition. Moreover $C_i$ is irreducible: if $C_i= (C_i\cap U)\sqcup(C_i\cap V)$ came from an orthogonal decomposition $E_i=U\oplus V$ with both summands nonzero, then no edge of $G$ would join a vertex in $C_i\cap U$ to a vertex in $C_i\cap V$, so the graph $G$ restricted to $C_i$ would be disconnected, contradicting that $C_i$ is a component of $G$. [L2, step 1.1, step 3.1, algebra]

4.2 Conversely each $\Psi_j$ is a union of components: if $\gamma\in\Psi_j$ then by the argument of step 3.1 applied inside the subsystem $\Psi_j$, the whole component $C_i\ni\gamma$ of the graph $G$ lies in $\Psi_j$, since a root of $\Phi$ nonorthogonal to $\gamma$ must lie in $F_j$ (it is orthogonal to every other $F_{j'}$). Hence $\Psi_j=\bigcup\{C_i:C_i\subseteq\Psi_j\}$. [step 2.1, step 3.1, step 2.2, algebra]

5.1 Steps 3.1 and 4.1 exhibit $\Phi$ as the disjoint union of the irreducible root systems $C_1,\dots,C_m$, whose spans are pairwise orthogonal and span $E$; this is the asserted decomposition. [step 3.1, step 4.1]

6.1 If each $\Psi_j$ is irreducible, then by step 4.2 each $\Psi_j$ is a nonempty union of components, and by step 4.1 each component is irreducible; an irreducible root system cannot be the orthogonal disjoint union of two nonempty root subsystems, so $\Psi_j$ contains exactly one component. Therefore the components $C_1,\dots,C_m$ are a permutation of the parts $\Psi_1,\dots,\Psi_k$, and the decomposition is unique up to order. [L2, step 4.1, step 2.2, step 4.2] ∎
