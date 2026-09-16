---
id: ex-unitization-corresponds-to-one-point-compactification
kind: example
title: Unitization corresponds to one point compactification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-zero-and-ell-infinity, thm-minimal-c-star-unitization, thm-one-point-compactification-properties, def-compact-support-c-c-and-c-zero-on-an-lch-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 3.1.16 and §3.1, printed pp. 60–61"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Example

Let $c_0(\mathbb N)$ be the C\*-algebra of null sequences with the supremum norm
([[def-c-zero-and-ell-infinity]]), which is complete because a Cauchy sequence of
null sequences has coordinatewise limits, the limit is null, and the convergence
is uniform. Then its minimal
unitization is the C\*-algebra of convergent sequences,
$c_0(\mathbb N)^+ \cong C(\mathbb N^+)$, where $\mathbb N^+ = \mathbb N \cup
\{\infty\}$ is the one-point compactification of discrete $\mathbb N$
([[thm-minimal-c-star-unitization]],
[[thm-one-point-compactification-properties]]); under this isomorphism the
quotient character $\chi_\infty$ is evaluation at $\infty$, that is, the map
sending a convergent sequence to its limit. More generally, for a noncompact
locally compact Hausdorff space $X$ one has the canonical isometric
$\ast$-isomorphism

$$C_0(X)^+ \;\cong\; C(X^+), \qquad (f,\lambda) \mapsto f + \lambda\mathbf 1,$$

with $\chi_\infty$ corresponding to evaluation at the added point.

## Facts & Assumptions

**Given:** A noncompact locally compact Hausdorff space $X$, its one-point compactification $X^+$, and the algebra $C_0(X)$ of continuous functions vanishing at infinity.

[L1] $C_0(X)$ is a closed two-sided ideal of $C(X^+)$ of codimension one: every $g \in C(X^+)$ is $g = f + \lambda\mathbf 1$ with $f := g - g(\infty)\mathbf 1 \in C_0(X)$ and $\lambda := g(\infty)$, and products of elements of $C_0(X)$ with bounded continuous functions lie in $C_0(X)$ ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-one-point-compactification-properties]]).

[L2] Genuinely nonunital nonzero C\*-algebras have a minimal unitization, unique among C\*-norms extending the norm of the algebra ([[thm-minimal-c-star-unitization]]).

[L3] For discrete $\mathbb N$ one has $c_0(\mathbb N) = C_0(\mathbb N)$ with the supremum norm, and $\mathbb N^+ = \mathbb N \cup \{\infty\}$ with the one-point compactification topology ([[def-c-zero-and-ell-infinity]], [[thm-one-point-compactification-properties]]).

## Verification

**Proof technique:** direct.

1.1 $C(X^+)$ is a unital commutative C\*-algebra containing $C_0(X)$ as a closed two-sided $\ast$-ideal of codimension one by [L1], and $X^+$ is compact Hausdorff with $X$ open and dense by [L3] and [L1] respectively; in particular $C_0(X)$ is genuinely nonunital when $X$ is noncompact, since a unit of $C_0(X)$ would be a function equal to $1$ on all of $X$, which is not in $C_0(X)$ for noncompact $X$. [L1, L3]

1.2 By the uniqueness statement of [L2] the canonical algebraic isomorphism $C_0(X)^+ \to C(X^+)$, $(f,\lambda) \mapsto f+\lambda\mathbf 1$, is an isometric $\ast$-isomorphism: both sides are C\*-algebras with the same underlying algebra over $C_0(X)$, and the norm of $C(X^+)$ restricts to the norm of $C_0(X)$. [1.1, L2, algebra]

1.3 Under this isomorphism the quotient character $\chi_\infty(f,\lambda) = \lambda$ corresponds to evaluation at $\infty$, because $(f+\lambda\mathbf 1)(\infty) = f(\infty) + \lambda = \lambda$ for $f \in C_0(X)$. [1.1, 2.1, algebra]

2.1 Specialising to $X = \mathbb N$ discrete: $C_0(\mathbb N) = c_0(\mathbb N)$ by [L3] and $C(\mathbb N^+)$ is the algebra of convergent sequences with the supremum norm, evaluation at $\infty$ being the limit functional; hence the minimal unitization of $c_0(\mathbb N)$ is the algebra of convergent sequences and the quotient character is the limit at infinity. [step 1.2, step 1.3, L3, algebra] ∎

## Remarks

- **The example identifies the point at infinity twice**: topologically as the added point of $X^+$, and algebraically as the kernel of $\chi_\infty$.
- **The compact case is excluded**: for compact $X$ the space $C_0(X) = C(X)$ is already unital and the unitization is not the one-point compactification construction; the general statement [[thm-character-space-of-the-unitization-is-one-point-compactification]] is stated only for genuinely nonunital algebras.
