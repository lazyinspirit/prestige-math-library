# Citation-precision audit — everything that cites `ex-nested-intervals-single-point`

## The target, as it actually stands on disk

`items/ex-nested-intervals-single-point.md` — example — The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

#### Example

For $k \ge 1$ let $I_k := [0, 1/k]$, a nonempty closed bounded interval
([[def-interval]]). The family is nested, its lengths tend to $0$, and

$$\bigcap_{k \ge 1} \Big[0, \frac{1}{k}\Big] = \{0\}.$$

This is the standard instance of the single-point case of
[[thm-nested-interval-property]], and the intersection is computed twice over:
once by the theorem, which says the intersection *is* a single point, and once by
inspection, which says that point is $0$.

**Indexing.** Written on $\mathbb{N}$, the family is $J_j := [0, 1/(j+1)]$ for
$j \in \mathbb{N}$, which is the same family under the substitution $k = j+1$
([[def-sequence]]). The verification uses $(J_j)$.

## The 2 citing use(s), quoted verbatim from the citing items

### `fs-nested-open-intervals-nonempty` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- $[0, 1/(k+1)]$ is $\{0\}$ ([[ex-nested-intervals-single-point]]), which is the

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [[ex-nested-intervals-single-point]].
