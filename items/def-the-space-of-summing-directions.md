---
id: def-the-space-of-summing-directions
kind: definition
title: "The subspace $\\Gamma$ of directions along which a series converges absolutely, and its orthogonal complement $\\Gamma^{\\perp}$"
status: draft
origin: session
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-absolute-convergence-in-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, def-linear-subspace, lem-linear-subspace-criterion, lem-intersection-of-linear-subspaces, def-vector-space, def-series, lem-series-linearity, thm-direct-comparison-test, lem-standard-basis-of-f-n, def-absolute-and-conditional-convergence, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ ([[def-series-of-vectors-and-rearrangement]]). Define

$$\Gamma \;:=\; \Bigl\{\, a \in \mathbb{R}^{n} \;:\; \sum_k \bigl|\langle a, x_k\rangle\bigr| \text{ converges} \,\Bigr\}, \qquad \Gamma^{\perp} \;:=\; \bigl\{\, y \in \mathbb{R}^{n} \;:\; \langle a, y\rangle = 0 \text{ for every } a \in \Gamma \,\bigr\},$$

the inner product being the Euclidean one ([[def-euclidean-inner-product]]) and
the series that of [[def-series]]. Elements of $\Gamma$ are the **summing
directions** of $(x_k)$: those $a$ for which the real series of the projections
$\langle a, x_k\rangle$ converges absolutely
([[def-absolute-and-conditional-convergence]]). Both sets depend on the sequence
$(x_k)$; when several are in play the notation is $\Gamma(x)$ and
$\Gamma(x)^{\perp}$.

**Phrased with the inner product, deliberately.** The classical statement uses
linear functionals and the dual space. This library has no definition of a linear
map at this point in the reading order — the page that introduces linear maps,
rank-nullity and quotient spaces comes **earlier in the plan order** and is not
yet built — so writing $\Gamma$ with functionals would mint that page's canonical
object here. The two descriptions agree on $\mathbb{R}^{n}$, and nothing on this
page depends on their agreement.

### Both are linear subspaces

**$\Gamma$ is a linear subspace of $\mathbb{R}^{n}$** ([[def-linear-subspace]]).
It is nonempty: $\langle 0, x_k\rangle = 0$ for every $k$ by bilinearity, and the
series with all terms $0$ converges. For $\lambda \in \mathbb{R}$ and
$a, b \in \Gamma$, bilinearity and the absolute value laws give

$$\bigl|\langle \lambda a + b, x_k\rangle\bigr| \;=\; \bigl|\lambda\langle a,x_k\rangle + \langle b,x_k\rangle\bigr| \;\le\; |\lambda|\,\bigl|\langle a,x_k\rangle\bigr| + \bigl|\langle b,x_k\rangle\bigr|$$

([[lem-of-abs-value]]), and the series of the right-hand side converges by
[[lem-series-linearity]] clauses 1 and 2, so the left-hand series converges by
the comparison test ([[thm-direct-comparison-test]], the terms being
nonnegative). By the one-step subspace test
([[lem-linear-subspace-criterion]]), $\Gamma$ is a linear subspace.

**$\Gamma^{\perp}$ is a linear subspace of $\mathbb{R}^{n}$.** It contains $0$,
and for $\lambda \in \mathbb{R}$, $y, z \in \Gamma^{\perp}$ and $a \in \Gamma$,
bilinearity gives $\langle a, \lambda y + z\rangle = \lambda\langle a,y\rangle + \langle a,z\rangle = 0$;
again [[lem-linear-subspace-criterion]] applies. Equivalently $\Gamma^{\perp}$ is
the intersection of the linear subspaces
$\{y : \langle a,y\rangle = 0\}$ over $a \in \Gamma$, a nonempty family since
$0 \in \Gamma$, and [[lem-intersection-of-linear-subspaces]] gives the same
conclusion.

### $\Gamma$ is everything exactly when the series converges absolutely

**If $\sum x_k$ converges absolutely then $\Gamma = \mathbb{R}^{n}$.** For any
$a$, Cauchy-Schwarz gives
$|\langle a,x_k\rangle| \le \lVert a\rVert_2\lVert x_k\rVert_2$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]), and
$\sum_k \lVert a\rVert_2\lVert x_k\rVert_2$ converges by
[[lem-series-linearity]] clause 2; the comparison test gives $a \in \Gamma$.

**Conversely, if $\Gamma = \mathbb{R}^{n}$ then $\sum x_k$ converges
absolutely.** Each standard basis vector $e_j$ lies in $\Gamma$, and
$\langle e_j, x_k\rangle = (x_k)_j$ ([[lem-standard-basis-of-f-n]],
[[def-euclidean-inner-product]]), so each real series $\sum_k |(x_k)_j|$
converges. A finite sum of convergent series converges, by
[[lem-series-linearity]] clause 1 and induction on the number of summands
([[thm-induction-principle]], [[lem-finite-sum-laws]], [[def-finite-sum]]), so
$\sum_k \sum_{j<n}|(x_k)_j| = \sum_k \lVert x_k\rVert_1$ converges; and
$\lVert x_k\rVert_2 \le \lVert x_k\rVert_1$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3,
[[def-p-norms-on-rn]]), so $\sum_k\lVert x_k\rVert_2$ converges by the comparison
test.

**That equivalence is what makes the containment theorem below contain
[[thm-absolute-convergence-in-rn]] as a special case**: absolute convergence
gives $\Gamma = \mathbb{R}^{n}$, hence $\Gamma^{\perp} = \{0\}$ (any
$y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and so $y = 0$ by
positive definiteness), and the affine subspace below collapses to a point.

### Affine subspaces

The library has no notion of an affine subspace, so one is fixed here. For a
linear subspace $W \subseteq \mathbb{R}^{n}$ and $s \in \mathbb{R}^{n}$, the
**affine subspace through $s$ with direction $W$** is the coset

$$s + W \;:=\; \{\, s + w \;:\; w \in W \,\} .$$

**A coset is determined by $W$ together with any one of its points.** If
$p \in s + W$, say $p = s + w_0$ with $w_0 \in W$, then $p + W = s + W$: every
$p + w = s + (w_0 + w)$ lies in $s+W$ because $W$ is closed under addition, and
every $s + w = p + (w - w_0)$ lies in $p + W$ because $W$ is closed under
addition and under multiplication by $-1$ ([[def-linear-subspace]],
[[def-vector-space]]). In particular $s + W = s' + W$ if and only if
$s - s' \in W$.

## Remarks

- **$0 \in \Gamma$ always, so $\Gamma$ is never empty and $\Gamma^{\perp}$ is
  never larger than $\mathbb{R}^{n}$ by accident.** At the other extreme, if
  $\Gamma = \{0\}$ then $\Gamma^{\perp} = \mathbb{R}^{n}$, the condition on $y$
  being vacuous apart from $a = 0$.

- **The definition does not presuppose convergence of $\sum x_k$**, and neither
  $\Gamma$ nor $\Gamma^{\perp}$ mentions the sum. Convergence is a hypothesis of
  the theorems that use them, not of the definition.

- **No orthogonal decomposition is claimed.** Nothing here asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$, or that
  $(\Gamma^{\perp})^{\perp} = \Gamma$. Those are statements of the theory of
  inner product spaces and orthogonality, which is planned for a page earlier in
  the plan order that is not yet built, and **no item on this page uses them**.
  What is used is only that $\Gamma^{\perp}$ is a linear subspace and that
  $\langle a, y\rangle = 0$ for $a \in \Gamma$, $y \in \Gamma^{\perp}$.

- **The name.** $\Gamma$ is the set of directions in which the series is
  absolutely summable; along a direction outside $\Gamma$ the projected real
  series converges conditionally at best, and it is exactly there that
  rearrangement can move the sum.
