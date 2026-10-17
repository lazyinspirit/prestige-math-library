---
id: def-self-consistent-projector-response-map
kind: definition
title: The occupied-projector response map on its strict-gap domain
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rank-r-orthogonal-projector-domain, thm-complex-spectral-theorem-for-normal-endomorphisms]
justified_by:
  - lem-gapped-projector-map-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §§1.3–1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.1–§2.2
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $n\ge2$, $1\le r<n$, and use the real Hermitian matrix space $\mathbb H_n$
and projector set $\mathcal P_r$ of
[[def-rank-r-orthogonal-projector-domain]]. Let $U\subseteq\mathbb H_n$ be open
and let $F:U\to\mathbb H_n$ be a specified map. For a Hermitian matrix $H$,
write its eigenvalues with multiplicity in ascending order as
$$\lambda_1(H)\le\cdots\le\lambda_n(H).$$
Write $\sigma(H):=\{\lambda_j(H):1\le j\le n\}$ for its finite spectrum,
with multiplicity omitted in this set notation.
For any Hermitian $H$ with $\lambda_r(H)<\lambda_{r+1}(H)$, write $\Pi_r(H)$
for the orthogonal projector onto the sum of eigenspaces belonging to its $r$
lowest eigenvalues. At a point $X\in U$ where
$$\lambda_r(F(X))<\lambda_{r+1}(F(X)),$$
define $\Phi(X):=\Pi_r(F(X))$. The strict gap separates the occupied cluster
from the unoccupied cluster; eigenvalue multiplicities within either cluster
are allowed. The construction's well-definedness as a unique member of
$\mathcal P_r$ is proved in [[lem-gapped-projector-map-well-defined]].

A set $K\subseteq U$ has a **uniform occupied/unoccupied gap** $g>0$ when the
displayed gap is at least $g$ for every $X\in K$. A self-consistent fixed point
is a point $X_*$ with $\Phi(X_*)=X_*$. Its fixed-point residual is
$\rho(X):=\|X-\Phi(X)\|_F$ whenever $\Phi(X)$ is defined. The map is not
asserted to be contractive merely because its gap is positive.
