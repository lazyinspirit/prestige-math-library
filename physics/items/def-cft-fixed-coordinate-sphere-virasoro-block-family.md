---
id: def-cft-fixed-coordinate-sphere-virasoro-block-family
kind: definition
title: Fixed-coordinate sphere Virasoro block family
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-virasoro-algebra
  - def-virasoro-highest-weight-module
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Belavin, Polyakov, and Zamolodchikov, Infinite Conformal Symmetry in Two-Dimensional Quantum Field Theory
      url: https://qft.itp.ac.ru/BPZ.pdf
      locator: §2 stress-tensor Ward identities; §§4–5 degenerate representations and differential equations.
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: §4.5 and §5.2, primary Ward identities and Ising BPZ blocks.
---

## Definition

Fix $c\in\mathbb C$, $n\ge1$, and the configuration space
$$\operatorname{Conf}_n(\mathbb C)=\{\mathbf z=(z_1,\ldots,z_n)\in\mathbb C^n:z_i\ne z_j\text{ for }i\ne j\}.$$
For each $j$, let $U_j$ be a representation of the Virasoro algebra in which the central element acts by $c\operatorname{id}_{U_j}$. At every $\mathbf z\in\operatorname{Conf}_n(\mathbb C)$, specify a linear functional
$$\Phi_{\mathbf z}\in\left(U_1\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}U_n\right)^*,$$
where the tensor product is algebraic and $E^*:=\operatorname{Hom}_{\mathbb C}(E,\mathbb C)$ denotes the algebraic dual. The family is weakly holomorphic: for every fixed $u_j\in U_j$, the scalar function $\mathbf z\mapsto\Phi_{\mathbf z}(u_1\otimes\cdots\otimes u_n)$ is holomorphic on $\operatorname{Conf}_n(\mathbb C)$. Choose primary states $v_j\in U_j$ of weights $h_j\in\mathbb C$, meaning $L_0v_j=h_jv_j$ and $L_mv_j=0$ for every $m>0$, and define
$$F(\mathbf z):=\Phi_{\mathbf z}(v_1\otimes\cdots\otimes v_n).$$

Translation covariance is required for every fixed tuple $u_j\in U_j$:
$$\partial_{z_j}\Phi_{\mathbf z}(u_1\otimes\cdots\otimes u_n)=\Phi_{\mathbf z}(u_1\otimes\cdots\otimes L_{-1}u_j\otimes\cdots\otimes u_n).$$
In particular, the $L_{-1}$ insertion differentiates $F$. Use the fixed local coordinates $t_j=w-z_j$ at the marked points and $1/w$ at infinity. As part of the family data, specify a meromorphic function $G_{\mathbf z}$ on $\mathbb P^1$ whose Laurent expansion at each $z_j$ is
$$G_{\mathbf z}(z_j+t_j)=\sum_{m\in\mathbb Z}\Phi_{\mathbf z}(v_1\otimes\cdots\otimes L_mv_j\otimes\cdots\otimes v_n)t_j^{-m-2}.$$
Thus $G_{\mathbf z}$ is the stress-tensor matrix element on the chosen primary insertions; the Laurent expansion above defines its mode indexing locally. Require that it have no finite poles other than the $z_j$, depend holomorphically on $(\mathbf z,w)$ away from the incidence divisors $w=z_j$, and be $O(w^{-4})$ as $w\to\infty$. The primary and translation conditions give its principal part at $z_j$ as $h_jF/(w-z_j)^2+(\partial_{z_j}F)/(w-z_j)$. Finally require the global sphere Ward identities:
$$\sum_j\partial_{z_j}F=0,\quad \sum_j(z_j\partial_{z_j}+h_j)F=0,\quad \sum_j(z_j^2\partial_{z_j}+2h_jz_j)F=0.$$

This is a conditional local interface, not an existence theorem for nonzero functionals or blocks. Coordinates are fixed, so fractional $L_0$-weights are allowed; no exponentiation to $\operatorname{Aut}\mathcal O$, generic coinvariant equivalence, or full CFT is asserted.



## Definition references

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

**Given:** The Virasoro algebra and highest-weight module conventions of [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] and [[def-virasoro-highest-weight-module]], and the listed point/coordinate data.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] defines the generators $L_m$, their Virasoro brackets and scalar central charge. Here $T(t):=\sum_{m\in\mathbb Z}L_m t^{-m-2}$ is formal notation with the mode indexing adopted in the Definition; no field construction is attributed to that supplier.

[F2] [[def-virasoro-highest-weight-module]] defines a highest-weight vector and the module it generates, with arbitrary complex highest weight; it asserts neither irreducibility nor a simple quotient.

## Proof

1.1 For fixed modules and points, set every $\Phi_{\mathbf z}$ equal to the zero functional and every $G_{\mathbf z}$ equal to zero. The Laurent coefficient conditions, holomorphy, translation covariance and global Ward identities all hold. Thus the definition makes no nonzero existence claim. [F1, F2, given]

2.1 The fixed local coordinates allow the Laurent modes in [F1] to be used directly even when $h_j\notin\mathbb Z$; no scaling action $a^{L_0}$ or coordinate descent is part of this definition. Thus this interface can be used for fractional-weight examples without asserting an integral-grade block construction. [F1, F2, step 1.1] ∎

## Remarks

The generic integral-$L_0$ block carrier [[def-cft-coinvariants-and-conformal-blocks]] is a separate interface; no equivalence is asserted here.


