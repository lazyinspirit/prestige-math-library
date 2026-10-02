---
id: "def-invertible-sheaf-of-cartier-divisor"
kind: "definition"
title: "Invertible sheaf of cartier divisor"
status: "draft"
origin: "pipeline"
pipeline_run: "frontier-37-owner-30"
deps: ["def-cartier-divisor", "def-sheaf-total-quotient-rings", "def-effective-cartier-divisor", "def-invertible-sheaf", "def-sheaf-on-topological-space"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {"precheck": "n/a", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02}}
sources:
  references:
    - title: "The Stacks Project, Definition 111.49.1(6)-(7), meromorphic functions and Cartier divisors"
      url: "https://stacks.math.columbia.edu/tag/02AR"
    - title: "The Stacks Project, Effective Cartier divisors, Definition31.14.1 and Lemma31.14.2"
      url: "https://stacks.math.columbia.edu/tag/01WQ"
    - title: "The Stacks Project, Effective Cartier divisors and invertible sheaves, Definition31.15.1"
      url: "https://stacks.math.columbia.edu/tag/0C4S"
---

## Definition

Let $D$ be a Cartier divisor on a scheme $X$, represented by
meromorphic units $f_i\in\mathcal K_X(U_i)^\times$ with regular-unit
ratios on the overlaps ([[def-cartier-divisor]]). The subsheaf
$\mathcal O_X\subseteq\mathcal K_X$ is the one of
[[def-sheaf-total-quotient-rings]]. Define an $\mathcal O_X$-submodule
sheaf of $\mathcal K_X$ by
$$\mathcal O_X(D)(V):=\{g\in\mathcal K_X(V): f_i g|_{V\cap U_i}\in\mathcal O_X(V\cap U_i)\text{ for every }i\}.$$
Equivalently, on each chart,
$$\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}\subseteq\mathcal K_X|_{U_i}.$$
These are meromorphic functions whose possible poles are cancelled by
the local equation of $D$.

This construction is well defined. It is closed under addition and
regular scalar multiplication. The condition is local, so compatible
sections glue in $\mathcal K_X$ and retain it by the sheaf locality
axiom ([[def-sheaf-on-topological-space]]). On an overlap the unit
$f_i/f_j$ gives
$f_i^{-1}\mathcal O_X=f_j^{-1}\mathcal O_X$. Replacing equations by
unit multiples or restricting to a refinement gives the same subsheaf;
any two representations of the same Cartier divisor agree locally
in precisely this sense.

On $U_i$, the map
$\mathcal O_{U_i}\to f_i^{-1}\mathcal O_{U_i}$,
$a\mapsto f_i^{-1}a$, has inverse multiplication by $f_i$.
It is injective because $f_i$ is a unit in $\mathcal K_X$ and
$\mathcal O_X\to\mathcal K_X$ is injective, and it is surjective by
the defining formula. Thus the sheaf is locally free of rank one,
hence **invertible** ([[def-invertible-sheaf]]).

The sign convention allows poles along an effective divisor:
$\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$, whereas
$\mathcal O_X(-D)|_{U_i}=f_i\mathcal O_{U_i}$.
If $D$ is effective this last subsheaf is exactly its ideal sheaf
$\mathcal I_D$ of [[def-effective-cartier-divisor]].
For the zero divisor the equation is $1$ and
$\mathcal O_X(0)=\mathcal O_X$. On the empty scheme the formula gives
its unique module sheaf, which satisfies the local rank-one condition
vacuously.
