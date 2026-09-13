---
id: fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup
kind: false-statement
title: A Lie subalgebra need not integrate to a closed subgroup
status: published
origin: pipeline
deps: [def-countable-choice, thm-lie-subgroup-lie-subalgebra-correspondence, lem-irrational-torus-flow-is-free-with-dense-orbits, prop-components-of-a-topological-manifold-are-open-and-at-most-countable, thm-components-partition-and-are-closed, thm-product-of-connected-spaces, thm-continuous-image-of-a-connected-space]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Lie subgroup–subalgebra theorem, Theorem 19.26, printed pages 506–507; irrational torus flow, Example 21.3, printed page 542
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Lie subgroups and subalgebras, Proposition 4.7, printed page 30
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: counterexample
---

## Statement

**False claim:** every Lie subalgebra of the Lie algebra of a Lie group is the
Lie algebra of a closed Lie subgroup.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an irrational real number $\alpha$, the torus
$G=\mathbb T^2$, and the line

$$\mathfrak h=\mathbb R(1,\alpha)\subseteq\operatorname{Lie}(\mathbb T^2)\cong\mathbb R^2.$$

[F1] Under $\mathrm{AC}_\omega$, every Lie subalgebra has a unique connected
immersed integral Lie subgroup. [[def-countable-choice]],
[[thm-lie-subgroup-lie-subalgebra-correspondence]].

[F2] The irrational winding
$i(t)=(e^{2\pi i t},e^{2\pi i\alpha t})$ is an injectively immersed
Lie-group homomorphism into $\mathbb T^2$, and its image is dense.
[[lem-irrational-torus-flow-is-free-with-dense-orbits]].

[F3] Connected components of a topological manifold are open, and connected
components in any space are closed.
[[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]],
[[thm-components-partition-and-are-closed]].

[F4] Finite products of connected spaces are connected, and continuous images
of connected spaces are connected. [[thm-product-of-connected-spaces]],
[[thm-continuous-image-of-a-connected-space]].

## Refutation

**Proof technique:** counterexample.

1.1 The torus Lie algebra is abelian, so every linear subspace is bracket closed; in particular $\mathfrak h$ is a Lie subalgebra. The derivative of the winding $i$ at $0$ has image $\mathbb R(1,\alpha)=\mathfrak h$, and its source $\mathbb R$ is connected. Thus [F2] makes $i(\mathbb R)$ a connected immersed integral subgroup for $\mathfrak h$. It is not all of $\mathbb T^2$: its intersection with $\{1\}\times S^1$ is the countable set $\{(1,e^{2\pi i\alpha n}):n\in\mathbb Z\}$, not the whole circle. Since [F2] also makes it dense, it is not closed. [given, F2, algebra]

1.2 Suppose, for contradiction, that a closed Lie subgroup $K\subseteq\mathbb T^2$ has Lie algebra $\mathfrak h$. Let $K^0$ be the connected component of its identity. By [F3], $K^0$ is open and closed in $K$. It is a subgroup: multiplication maps the connected space $K^0\times K^0$ continuously into a connected subset containing the identity, and inversion does the same to $K^0$, so [F4] puts both images in the identity component. With the open submanifold structure, $K^0$ has $T_eK^0=T_eK=\mathfrak h$ and is a connected immersed Lie subgroup of $\mathbb T^2$. [F3, F4, assume-contra, algebra]

2.1 Uniqueness in [F1], applied to steps 1.1 and 1.2, identifies $K^0$ as an immersed subgroup with $i(\mathbb R)$. But $K^0$ is closed in $K$ by [F3] and $K$ is closed in $\mathbb T^2$ by the assumption in step 1.2, so $K^0=i(\mathbb R)$ is closed in $\mathbb T^2$, contradicting step 1.1. [F1, F2, F3, step 1.1, step 1.2]

3.1 Therefore the irrational line $\mathfrak h$ is not the Lie algebra of any closed Lie subgroup, even though [F1] integrates it uniquely to the connected immersed winding. This refutes the claim. The argument assumes only the stated $\mathrm{AC}_\omega$, inherited by the correspondence theorem. [F1, step 1.1, step 2.1, discharge-contradiction] ∎
