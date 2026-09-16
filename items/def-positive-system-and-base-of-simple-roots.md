---
id: def-positive-system-and-base-of-simple-roots
kind: definition
title: Positive systems and simple roots
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
      locator: "Chapter II, §5, positivity and simple roots, printed pp. 154-156"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system
([[def-reduced-crystallographic-euclidean-root-system]]). A vector
$v\in E$ is **regular** (for $\Phi$) if $(v,\alpha)\ne0$ for every
$\alpha\in\Phi$; such vectors exist because $\Phi$ is finite, the finitely
many hyperplanes $\alpha^{\perp}$ are proper subspaces of the
finite-dimensional real vector space $E$, and $E$ is not the union of
finitely many proper subspaces
([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

Fix a regular $v\in E$. A root $\alpha\in\Phi$ is **positive** (with respect
to $v$) if $(v,\alpha)>0$, and **negative** if $(v,\alpha)<0$. Write
$$\Phi^{+}=\{\alpha\in\Phi:(v,\alpha)>0\},\qquad \Phi^{-}=\{\alpha\in\Phi:(v,\alpha)<0\},$$
so that $\Phi=\Phi^{+}\sqcup\Phi^{-}$ and $\Phi^{-}=-\Phi^{+}$; every root is
positive or negative, since $v$ is regular. A positive root $\alpha\in\Phi^{+}$
is **simple** if it is not a sum $\alpha=\beta+\gamma$ of two positive roots
$\beta,\gamma\in\Phi^{+}$; we write $\Delta$ for the set of simple roots.

The set $\Delta$ depends on the choice of the regular vector $v$; the
subsequent theorem proves that $\Delta$ is a basis of $E$ and that every root
is an integral combination of $\Delta$ whose nonzero coefficients all have one
sign.
