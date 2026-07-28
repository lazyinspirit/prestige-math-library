---
id: ex-coordinates-depend-on-the-ordered-basis
kind: example
title: "The vector $(1,2) \\in \\mathbb{R}^{2}$ has coordinate list $(1,2)$ in the standard ordered basis, $(2,1)$ in its reversal, and $(2,-1)$ in the ordered basis $\\bigl((1,1),(1,0)\\bigr)$"
status: draft
origin: session
deps: [thm-unique-coordinates-with-respect-to-an-ordered-basis, lem-standard-basis-of-f-n, def-linear-basis, def-linear-independence, def-function-space, def-linear-combination-and-span, def-monoid-finite-product, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-reals-field, def-real-numbers, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "coordinates depend on the ordering"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Coordinate vector (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coordinate_vector"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ be the real numbers ([[def-real-numbers]]), a field
([[thm-reals-field]]), and let $\mathbb{R}^{2}$ be the function space on the von
Neumann natural $2 = \{0,1\}$ with the pointwise operations
([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). We write $(y_0, y_1)$ for the element $y$ of
$\mathbb{R}^{2}$ with $y(0) = y_0$ and $y(1) = y_1$, so that $e_0 = (1,0)$ and
$e_1 = (0,1)$ are the standard unit vectors ([[lem-standard-basis-of-f-n]]).

Put $x := (1,2)$ and consider three ordered bases of $\mathbb{R}^{2}$
([[def-linear-basis]]):

- $e = (e_0, e_1)$, the standard ordered basis;
- $e' = (e_1, e_0)$, its reversal, which has the **same image** $\{e_0, e_1\}$;
- $v = (v_0, v_1)$ with $v_0 := (1,1)$ and $v_1 := (1,0)$.

Then the coordinate list of $x$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]])
is

$$(1,2) \ \text{ in } e, \qquad (2,1) \ \text{ in } e', \qquad (2,-1) \ \text{ in } v .$$

Three different lists for one vector, and the first two differ although the two
ordered bases have the same image. Coordinates are attached to an **ordered**
basis, not to a basis.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the vector space $\mathbb{R}^{2}$ with pointwise operations, the vector $x = (1,2)$, and the three lists $e$, $e'$ and $v$ above.

[L1] $F^{X}$ is a vector space over $F$ with pointwise operations, and two elements are equal exactly when they agree at every point ([[def-function-space]], [[def-vector-space]]).

[L2] $e : 2 \to \mathbb{R}^{2}$ is an ordered basis, and $\bigl(\sum_{i<2}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $\lambda : 2 \to \mathbb{R}$ and $j < 2$ ([[lem-standard-basis-of-f-n]], claims 2 and 3).

[L3] A list $w : n \to V$ is an ordered basis if and only if every $y \in V$ is $\sum_{i<n}\lambda_i w_i$ for exactly one $\lambda : n \to F$, and that $\lambda$ is then the coordinate list of $y$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]]).

[L4] Finite sums: $\sum_{i<2}u_i = (0_V + u_0) + u_1 = u_0 + u_1$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L5] The vector space axioms and the field axioms of $\mathbb{R}$: (V2) $\lambda(y+z) = \lambda y + \lambda z$, (V3) $(\lambda+\mu)y = \lambda y + \mu y$, (V5) $1y = y$; $(V,+,0_V)$ is abelian; $0y = 0_V$; and $\mathbb{R}$ is a field ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]], [[thm-reals-field]]).

[L6] Injectivity and images are as in [[def-injection-surjection-bijection]].

## Verification

**Proof technique:** direct.

1.1 Coordinates in $e$. By the standard basis lemma, $e$ is an ordered basis of $\mathbb{R}^{2}$ and the coordinate list of $y \in \mathbb{R}^{2}$ is $i \mapsto y(i)$; for $x = (1,2)$ that list is $(1,2)$. [L2, L3]

1.2 $e'$ is an ordered basis. The list $e' = (e_1, e_0)$ is injective, since $e_0 \ne e_1$ ($e_0$ takes the value $1$ at $0$ and $e_1$ takes the value $0$ there), and its image is $\{e_0, e_1\} = e[2]$, which is a basis of $\mathbb{R}^{2}$; so $e'$ is an injective list whose image is a basis. [L1, L2, L6]

1.3 Coordinates in $e'$. For $\lambda : 2 \to \mathbb{R}$, $\sum_{i<2}\lambda_i e'_i = \lambda_0 e_1 + \lambda_1 e_0 = \lambda_1 e_0 + \lambda_0 e_1 = \sum_{i<2}\mu_i e_i$ with $\mu_0 = \lambda_1$ and $\mu_1 = \lambda_0$; evaluating with the standard basis, this vector is $(\lambda_1, \lambda_0)$. It equals $x = (1,2)$ exactly when $\lambda_1 = 1$ and $\lambda_0 = 2$, so the coordinate list of $x$ in $e'$ is $(2,1)$. [L2, L4, L5]

1.4 $v$ is an ordered basis and the coordinates of a general vector in it. Note $v_0 = (1,1) = e_0 + e_1$ and $v_1 = (1,0) = e_0$. For $\lambda : 2 \to \mathbb{R}$, $\sum_{i<2}\lambda_i v_i = \lambda_0(e_0+e_1) + \lambda_1 e_0 = (\lambda_0 e_0 + \lambda_0 e_1) + \lambda_1 e_0 = (\lambda_0 + \lambda_1)e_0 + \lambda_0 e_1$, using (V2), (V3) and the abelian group laws; by the standard basis this vector is $(\lambda_0 + \lambda_1,\ \lambda_0)$. Given $y = (y_0, y_1)$, the equations $\lambda_0 + \lambda_1 = y_0$ and $\lambda_0 = y_1$ have the unique solution $\lambda_0 = y_1$, $\lambda_1 = y_0 - y_1$, so every $y$ is $\sum_{i<2}\lambda_i v_i$ for exactly one $\lambda$ and $v$ is an ordered basis. [L2, L3, L4, L5]

2.1 Coordinates of $x$ in $v$. Taking $y = x = (1,2)$ in step 1.4 gives $\lambda_0 = 2$ and $\lambda_1 = 1 - 2 = -1$, so the coordinate list of $x$ in $v$ is $(2,-1)$; and $2(1,1) + (-1)(1,0) = (2,2) + (-1,0) = (1,2) = x$ confirms it. [step 1.4, L1, L5]

3.1 The three coordinate lists of the single vector $x$ are therefore $(1,2)$, $(2,1)$ and $(2,-1)$, computed in steps 1.1, 1.3 and 2.1; the first two are different although $e$ and $e'$ have the same image, so the coordinate list depends on the ordered basis and not merely on the underlying set. [step 1.1, step 1.3, step 2.1] ∎

## Remarks

- **What is and is not being said.** Uniqueness of the coordinate list ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is uniqueness for a **fixed** ordered basis. Nothing there says that different ordered bases give the same list, and this example shows they do not, even when they differ only in the order. Reordering the list permutes the coordinates of every vector at once.

- **The third basis is not a reordering of the first.** Its image $\{(1,1),(1,0)\}$ is a different set from $\{(1,0),(0,1)\}$, and its coordinates differ for a further reason: the vectors themselves are different. The passage between coordinate lists of two ordered bases is a change of basis, taken up on a later page once linear maps are available; the point here is only that the two lists differ.

- **The arithmetic was recomputed, not copied.** With $v_0 = (1,1)$ and $v_1 = (1,0)$, matching $(1,2)$ forces the second coordinate first: $\lambda_0$ is the second entry, so $\lambda_0 = 2$, and then $\lambda_1 = 1 - 2 = -1$. Reading the pair off in the other order would give $(-1,2)$, which is wrong.
