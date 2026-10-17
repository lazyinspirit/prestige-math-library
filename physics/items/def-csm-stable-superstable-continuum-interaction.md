---
id: def-csm-stable-superstable-continuum-interaction
kind: definition
title: "Stability, superstability and regular tails"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Complete PDF, especially printed pp. 128–134 / PDF pp. 1–6."
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
---

## Definition

Fix $d\geq1$. A pair potential is an even Borel function $\phi:\mathbb R^d\to\mathbb R\cup\{+\infty\}$. For a finite list of positions $X=(x_1,\ldots,x_N)$, set $U_0=U_1=0$ and
$$U_N(X)=\sum_{1\leq i<j\leq N}\phi(x_i-x_j).$$
The value $+\infty$ is allowed and represents a forbidden configuration; $-\infty$ is not allowed.

The potential is **stable** if some finite $B\geq0$ satisfies $U_N(X)\geq-BN$ for every $N$ and every $X$. Fix a cell side $\ell>0$ and the half-open cubic tiling $C_k=\ell(k+[0,1)^d)$, $k\in\mathbb Z^d$, and let $n_k(X)$ count the positions of $X$ in $C_k$. The potential is **cell-superstable** if there are constants $A_*>0$ and $B_*\geq0$ such that
$$U_N(X)\geq A_*\sum_{k\in\mathbb Z^d}n_k(X)^2-B_*N$$
for every finite configuration; the sum is finite for finite $X$.

For disjoint finite cell-index sets $I,J$, let $W_{I,J}(X)$ be the sum of pair terms with one point in a cell indexed by $I$ and the other in a cell indexed by $J$. The potential is **lower regular** for this tiling if a nonnegative envelope $\Psi:\mathbb Z^d\setminus\{0\}\to[0,\infty)$ exists with $\sum_{k\ne0}\Psi(k)<\infty$ and
$$W_{I,J}(X)\geq-\sum_{k\in I}\sum_{l\in J}\Psi(k-l)n_k(X)n_l(X)$$
for all such $I,J,X$. The ordered-pair convention in this formula is fixed as written.

A **decreasing-integrable tail bound** means that for some $R_0\geq0$ there is a nonnegative nonincreasing function $\psi:[R_0,\infty)\to[0,\infty)$ such that $|\phi(x)|\leq\psi(|x|)$ for $|x|\geq R_0$ and $\int_{R_0}^{\infty}\psi(r)r^{d-1}\,dr<\infty$. This explicit envelope condition is stronger than bare Lebesgue integrability of an arbitrary signed tail. Stability, cell-superstability, lower regularity, and a tail bound are separate properties; none is inferred from finite range alone.
