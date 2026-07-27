---
id: def-quaternions
kind: definition
title: "The quaternions $\\mathbb{H}$: real quadruples with componentwise addition and the multiplication extended from the table on $1, i, j, k$"
status: draft
origin: session
deps: [def-ring, def-binary-operation, def-identity-element, def-field, thm-reals-field, def-real-numbers, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-hamilton-quaternions]
landmark: false
short: "$\\mathbb{H}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Quaternion (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quaternion"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the field of real numbers ([[def-real-numbers]],
[[thm-reals-field]], [[def-field]]) and let $4 = \{0,1,2,3\}$ be the von Neumann
natural number $4$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).
The set of **quaternions** is the set of all functions $4 \to \mathbb{R}$,

$$\mathbb{H} \;:=\; \mathbb{R}^{4} \;=\; \{\, x : 4 \to \mathbb{R} \,\},$$

whose members are written as quadruples $x = (x_0, x_1, x_2, x_3)$ with
$x_p \in \mathbb{R}$ for $p \in 4$. Note that the coordinates are indexed from
$0$, because $4$ is the set $\{0,1,2,3\}$.

**Addition** is componentwise:

$$x + y \;:=\; (x_0 + y_0,\; x_1 + y_1,\; x_2 + y_2,\; x_3 + y_3).$$

**Multiplication** is given by the explicit formula

$$xy \;:=\; \bigl(\, x_0y_0 - x_1y_1 - x_2y_2 - x_3y_3,\;\; x_0y_1 + x_1y_0 + x_2y_3 - x_3y_2,\;\; x_0y_2 + x_2y_0 + x_3y_1 - x_1y_3,\;\; x_0y_3 + x_3y_0 + x_1y_2 - x_2y_1 \,\bigr).$$

The distinguished elements are

$$0_{\mathbb{H}} \;:=\; (0,0,0,0), \qquad 1_{\mathbb{H}} \;:=\; (1,0,0,0).$$

Both rules are functions $\mathbb{H} \times \mathbb{H} \to \mathbb{H}$, since
every coordinate on the right is a real number formed from real numbers by the
field operations of $\mathbb{R}$; so each is a binary operation on $\mathbb{H}$
([[def-binary-operation]]), and no separate well-definedness question arises.
That these data satisfy the ring axioms ([[def-ring]]), with $1_{\mathbb{H}}$ a
two-sided identity ([[def-identity-element]]), is proved in
[[thm-quaternions-form-a-division-ring]] and is not assumed here.

**The basis quaternions and the table.** Write

$$e_0 = 1 = (1,0,0,0), \quad e_1 = i = (0,1,0,0), \quad e_2 = j = (0,0,1,0), \quad e_3 = k = (0,0,0,1),$$

and for a real $\lambda$ write $\hat{\lambda} := (\lambda,0,0,0)$, so that
$\hat{1} = 1$ and $\hat{0} = 0_{\mathbb{H}}$. Evaluating the multiplication
formula on these sixteen pairs gives the table

$$i^{2} = j^{2} = k^{2} = -1, \qquad ij = k, \quad jk = i, \quad ki = j, \qquad ji = -k, \quad kj = -i, \quad ik = -j,$$

together with $1x = x1 = x$ for $x \in \{1,i,j,k\}$, where $-1$ abbreviates
$\widehat{-1} = (-1,0,0,0)$ and similarly for $-i$, $-j$, $-k$. In the usual
notation $x = x_0 + x_1 i + x_2 j + x_3 k$, and the displayed product formula is
precisely what the table forces once products are expanded and real coefficients
are collected; but the formula, not the table, is the definition, so nothing is
"extended by linearity" and no unproved notion is used.

**Conjugate and norm.** For $x \in \mathbb{H}$ put

$$\bar{x} \;:=\; (x_0,\; -x_1,\; -x_2,\; -x_3), \qquad N(x) \;:=\; x_0^{2} + x_1^{2} + x_2^{2} + x_3^{2} \;\in\; \mathbb{R}.$$

Both are defined by explicit real formulas; $\bar{x} \in \mathbb{H}$ and
$N(x) \in \mathbb{R}$, and $N$ is a function $\mathbb{H} \to \mathbb{R}$, not a
quaternion.

## Remarks

- **Why $\mathbb{H}$ is defined on this page rather than among the examples.**
  It is a division ring that is not a field
  ([[thm-quaternions-form-a-division-ring]]), so it is the witness that
  [[def-division-ring]] is strictly weaker than [[def-field]], and it is a ring
  whose multiplication is not commutative. Companion pages are leaves in the
  reading order, so no later page may cite an item homed on one; $\mathbb{H}$ is
  placed here so that later pages can use it.

- **Indexing from $0$ is not a stylistic choice.** A quaternion is a function on
  the von Neumann natural $4$, which *is* the set $\{0,1,2,3\}$
  ([[lem-nat-order-is-membership]]), so its coordinates are $x_0, x_1, x_2, x_3$
  and the real part is $x_0$. Every sum over basis indices below runs over
  $p \in 4$, that is over $p = 0, 1, 2, 3$.

- **The map $\lambda \mapsto \hat{\lambda}$ is how real scalars enter.** There is
  no separate scalar multiplication in the definition: multiplying by a real
  number means multiplying by the quaternion $\hat{\lambda}$, and the formula
  shows at once that $\hat{\lambda}x = x\hat{\lambda} = (\lambda x_0, \lambda x_1, \lambda x_2, \lambda x_3)$.
  This is used throughout the proof of
  [[thm-quaternions-form-a-division-ring]] and is what keeps that proof free of
  any notion of linearity.
