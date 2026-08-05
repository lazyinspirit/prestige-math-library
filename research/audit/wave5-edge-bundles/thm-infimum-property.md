# Citation-precision audit — everything that cites `thm-infimum-property`

## The target, as it actually stands on disk

`items/thm-infimum-property.md` — theorem — Every nonempty set bounded below has an infimum

#### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## The 3 citing use(s), quoted verbatim from the citing items

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- first and [[thm-infimum-property]] the second, and each is unique
- [L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).
- $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).
