---
id: alg-relative-koopman-von-neumann-energy-increment
kind: algorithm
title: "Relative Koopman–von Neumann energy-increment procedure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-k-pseudorandom-measure
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
aliases: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§6–8, especially Proposition 8.1, Proposition 8.2, and the proof of Theorem 3.5, printed pp. 504–522"
---

## Definition

Input a fixed integer $k\ge3$, a prime $p$, nonnegative functions $\nu,f:F_p\to[0,\infty)$ with $0\le f\le\nu$, parameters $0<\epsilon<\epsilon_k:=2^{-(2^{k+1}+8)}$ and $0<\eta<1/2$, and the finite averages on $F_p$. A partition $\mathcal B$ of $F_p$ is a finite collection of disjoint nonempty cells whose union is $F_p$. For a function $u:F_p\to\mathbb R$, let $\mathbb E(u\mid\mathcal B)$ be constant on each cell $A\in\mathcal B$ with value $|A|^{-1}\sum_{x\in A}u(x)$. For $F:F_p\to\mathbb R$, define its $(k-1)$-dimensional dual function by

$$D F(x)=\mathbb E_{h_1,\ldots,h_{k-1}\in F_p}\prod_{\substack{\omega\in\{0,1\}^{k-1}\\\omega\ne0}}F(x+\omega\cdot h).$$

The procedure returns either a partition $\mathcal B$, a union of its cells $\Omega$, and residual $F_U=(1-1_\Omega)(f-\mathbb E(f\mid\mathcal B))$, or the explicit failure value `exhausted`. Execute the following finite instructions.

1. Set $K_0=\lceil 2^{2^{k+1}+8}/\epsilon\rceil$, $\mathcal B_0=\{F_p\}$, and $\Omega_0=\varnothing$.
2. For $K=0,1,\ldots,K_0$, compute $F_K=(1-1_{\Omega_K})(f-\mathbb E(f\mid\mathcal B_K))$. If $\|F_K\|_{U^{k-1}(F_p)}\le\epsilon^{1/2^k}$, return $(\mathcal B_K,\Omega_K,F_K)$.
3. Otherwise set $G_K=DF_K$. Among the finite breakpoints and interval midpoints determined by the fractional parts of $G_K(x)/\epsilon\pm\eta$ for $x\in F_p$, choose the least $\alpha\in[0,1)$ for which the set of points within $\eta\epsilon$ of a bin boundary $\epsilon(n+\alpha)$ has $(\nu+1)$-weighted average at most $2\eta\mathbb E(\nu+1)$. Partition the range of $G_K$ into the half-open bins $[\epsilon(n+\alpha),\epsilon(n+1+\alpha))$, refine $\mathcal B_K$ by their inverse images, and call the resulting partition $\mathcal B_{K+1}$.
4. Let $\Omega_{K+1}$ be $\Omega_K$ together with every cell $A$ of $\mathcal B_{K+1}$ for which $\mathbb E((\nu+1)1_A)<\eta^{1/2}$. Continue to step 2 with $K+1$.
5. If no return has occurred by the end of the loop, return `exhausted`.

The finite-offset selection in step 3 is well-defined: as $\alpha$ varies, the boundary weight is piecewise constant with breakpoints in the displayed finite set, and its average over $\alpha\in[0,1)$ is $2\eta\mathbb E(\nu+1)$.

## Definition references

[[def-k-pseudorandom-measure|$k$-pseudorandom measure in the Green–Tao convention]]

[[def-gowers-uniformity-norm-on-finite-cyclic-groups|Gowers $U^d$ norm on finite cyclic groups]]

[[thm-integers-modulo-n-basic-algebra|For every natural $n$, $(\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold]]

[[thm-standard-representatives-modulo-n|For $n\ge 1$, every class in $\mathbb{Z}/n$ has one representative $r$ with $0\le r<n$, so $\lvert\mathbb{Z}/n\rvert=n$; while $\mathbb{Z}/0$ is in bijection with $\mathbb{Z}$]]

[Green and Tao, §8, Propositions 8.1–8.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

