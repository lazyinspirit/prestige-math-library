---
id: def-balls-and-polydiscs-in-complex-euclidean-space
kind: definition
title: "Balls, polydiscs and the distinguished boundary in $\\mathbb{C}^m$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-metric-ball, def-euclidean-spheres-and-closed-balls, def-convex-subset-of-euclidean-space, def-star-shaped-open-subset-of-rn, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Fix $m\ge1$ and read $\mathbb C^m$ through
[[rem-complex-euclidean-space-dictionary]]. A **polyradius** is a function
$r:m\to\mathbb R$ with $r_k>0$ for every $k<m$; a single positive real $r$
abbreviates the constant polyradius with every $r_k=r$.

For $a\in\mathbb C^m$ and a polyradius $r$, the **open polydisc**, the **closed
polydisc** and the **distinguished boundary** are

$$\Delta_r(a):=\{z:|z_k-a_k|<r_k\ \text{for every }k<m\},$$
$$\overline\Delta_r(a):=\{z:|z_k-a_k|\le r_k\ \text{for every }k<m\},$$
$$\Gamma_r(a):=\{z:|z_k-a_k|=r_k\ \text{for every }k<m\}.$$

Thus $\Gamma_r(a)$ is the set of points all of whose coordinates lie on their own
circle: it is the product of the $m$ circles $\{|\zeta_k-a_k|=r_k\}$.

The **open ball** and **closed ball** of centre $a$ and radius $\rho>0$ are those
of the norm $\lVert\cdot\rVert$ of the dictionary, that is the sets
$B(a,\rho)=\{z:\lVert z-a\rVert<\rho\}$ and
$\overline B(a,\rho)=\{z:\lVert z-a\rVert\le\rho\}$ of
[[def-metric-ball]] and [[def-euclidean-spheres-and-closed-balls]].

## Remarks

**The distinguished boundary is not the topological boundary when $m\ge2$.** The
topological boundary of $\overline\Delta_r(a)$ consists of the points where at
least one coordinate satisfies $|z_k-a_k|=r_k$, whereas $\Gamma_r(a)$ requires
**every** coordinate to do so. For $m=1$ the two coincide. For $m\ge2$ the
inclusion $\Gamma_r(a)\subseteq\partial\overline\Delta_r(a)$ is proper: the point
whose first coordinate is $a_0+r_0$ and whose remaining coordinates are $a_k$
lies in the topological boundary and not in $\Gamma_r(a)$.

**Polydiscs are open and convex.** Openness is coordinatewise: if
$|z_k-a_k|<r_k$ for every $k$, then $B(z,\rho)\subseteq\Delta_r(a)$ for
$\rho=\min_{k<m}(r_k-|z_k-a_k|)>0$, because
$|w_k-z_k|\le\lVert w-z\rVert$ by the dictionary. Convexity in the sense of
[[def-convex-subset-of-euclidean-space]] is also coordinatewise: for $z,w$ in
$\Delta_r(a)$ and $t\in[0,1]$,
$|(1-t)z_k+tw_k-a_k|\le(1-t)|z_k-a_k|+t|w_k-a_k|<r_k$ by
[[lem-complex-conjugation-and-modulus-laws]]. Hence a polydisc is star-shaped
with respect to each of its points ([[def-star-shaped-open-subset-of-rn]]). The
same computation gives convexity of the closed polydisc.

**Slices are discs.** Fixing all coordinates but the $k$th at values $a'_j$ with
$|a'_j-a_j|<r_j$, the set of $\zeta$ with the resulting point in $\Delta_r(a)$
is exactly the open disc $\{\zeta:|\zeta-a_k|<r_k\}$; this is what makes the
one-variable theory applicable one coordinate at a time. Moduli, real and
imaginary parts are those of
[[def-complex-conjugate-real-imaginary-part-and-modulus]].
