---
id: def-reducible-and-irreducible-root-system
kind: definition
title: Reducible and irreducible root systems
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, reducible and irreducible abstract root systems, printed p. 150"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system in the
finite-dimensional real inner product space $E$
([[def-reduced-crystallographic-euclidean-root-system]]).

Then $\Phi$ is **reducible** if there are linear subspaces $E_1,E_2\subseteq E$
with $E=E_1\oplus E_2$, $(E_1,E_2)=0$, both $E_i$ nonzero, and
$$\Phi=(\Phi\cap E_1)\sqcup(\Phi\cap E_2),$$
the union being disjoint. Otherwise $\Phi$ is **irreducible**.

Equivalently, $\Phi$ is reducible if it is the disjoint union of two nonempty
subsets $\Phi_1,\Phi_2$ with $(\Phi_1,\Phi_2)=0$, in which case one may take
$E_i=\operatorname{span}\Phi_i$: indeed if $\Phi=(\Phi\cap E_1)\sqcup(\Phi\cap E_2)$
then $\Phi$ spans $E_1$ and $E_2$ separately, because otherwise a nonzero
vector of $E_i$ orthogonal to $\Phi\cap E_i$ and to $E_{3-i}$ would be
orthogonal to all of $\Phi$ and hence zero. Consequently both $\Phi\cap E_i$
are nonempty, and each of them is itself a reduced crystallographic root
system in $E_i$ whose roots are those of $\Phi$ lying in $E_i$.

A one-element root system is impossible: if $\alpha\in\Phi$, reflection in
$\alpha$ sends $\alpha$ to the distinct root $-\alpha$, because
$\alpha\ne0$. The zero vector space carries the empty root system under the
stated root-system axioms; it is irreducible by the definition above, since
the zero space has no orthogonal direct-sum decomposition into two nonzero
subspaces. Every rank-one root system $\{\pm\alpha\}$ is likewise
irreducible.
