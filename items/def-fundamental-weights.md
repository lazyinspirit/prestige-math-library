---
id: def-fundamental-weights
kind: definition
title: Fundamental weights
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, fundamental weights, printed p. 165"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system with simple
roots $\Delta=\{\alpha_1,\dots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]]) and lattices
$Q,Q^{\vee},P,P^{\vee}$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).
The **fundamental weights** $\omega_1,\dots,\omega_r$ are the vectors of $E$
dual to the simple coroots:
$$(\omega_i,\alpha_j^{\vee})=\delta_{ij}\qquad(1\le i,j\le r).$$
They are well defined and unique because the $\alpha_j^{\vee}$ form a basis of
$E$, the inner product is nondegenerate, and the linear functionals
$\alpha_j^{\vee}\mapsto\delta_{ij}$ extend uniquely. The fundamental weights
form a basis of $P$, called the **fundamental weight basis**: indeed
$(\omega_i,\alpha_j^{\vee})=\delta_{ij}$ shows $\omega_i\in P$, and for
$\lambda\in P$ the coefficients $c_i=(\lambda,\alpha_i^{\vee})\in\mathbb Z$ in
$\lambda=\sum_ic_i\omega_i$ are integers, so $P=\bigoplus_i\mathbb Z\omega_i$.
Symmetrically, the **fundamental coweights** $\omega_i^{\vee}$, dual to the
simple roots, form a basis of $P^{\vee}$.
