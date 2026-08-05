# Citation-precision audit — everything that cites `cex-nested-open-intervals-empty`

## The target, as it actually stands on disk

`items/cex-nested-open-intervals-empty.md` — counterexample — The nested open intervals $(0, 1/k)$ have empty intersection

#### Statement refuted

**Refuted claim:** a nested sequence of nonempty bounded **open** intervals has
nonempty intersection ([[fs-nested-open-intervals-nonempty]],
[[def-interval]]).

The witness is $J_k = (0, 1/k)$ for $k \ge 1$: each is a nonempty bounded open
interval, the family is nested, and

$$\bigcap_{k \ge 1}\Big(0, \frac{1}{k}\Big) = \emptyset .$$

The refutation is carried out in full in
[[fs-nested-open-intervals-nonempty]] and is recorded here as the named
counterexample. The comparison worth keeping in view is the closed family $[0, 1/k]$, which
differs only by the inclusion of the left endpoint and intersects in $\{0\}$;
that computation is the preceding example on this page.

## The 2 citing use(s), quoted verbatim from the citing items

### `fs-nested-open-intervals-nonempty` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [[cex-nested-open-intervals-empty]].

### `thm-nested-interval-property` (forward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [[cex-nested-open-intervals-empty]], which keeps boundedness and drops
