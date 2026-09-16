---
id: def-weyl-vector-rho
kind: definition
title: The Weyl vector
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-system-and-base-of-simple-roots, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3, (5.7) and (5.8)"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§7.5, (7.7)"
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system in the real
inner product space $E$
([[def-reduced-crystallographic-euclidean-root-system]]) with a chosen positive
system $\Phi^+$ ([[def-positive-system-and-base-of-simple-roots]]). The
**Weyl vector** of this choice is
$$\rho=\frac12\sum_{\alpha\in\Phi^+}\alpha\in E .$$
The sum is finite because a root system is finite, and it is taken in the real
vector space $E$, so the factor $\frac12$ is the real scalar $\frac12$; no
integrality of $\rho$ is asserted. Since every positive root lies in the root
lattice $Q$, one has $2\rho=\sum_{\alpha\in\Phi^+}\alpha\in Q$, so $\rho$ lies
in $\frac12Q$.

Replacing the positive system by its opposite replaces $\rho$ by
$$\frac12\sum_{\alpha\in\Phi^+}(-\alpha)=-\rho ,$$
so the Weyl vector depends on the choice of positive system and is not an
invariant of the root system alone.
