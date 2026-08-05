# Citation-precision audit — everything that cites `lem-metric-nonnegativity`

## The target, as it actually stands on disk

`items/lem-metric-nonnegativity.md` — lemma — Nonnegativity of a metric is a consequence of the other axioms, not an axiom

#### Statement

Let $X$ be a set and let $p : X \times X \to \mathbb{R}$ satisfy the reflexivity
axiom (M1') $p(x,x) = 0$ and the symmetry axiom (M2) $p(x,y) = p(y,x)$ of
[[def-metric-space]]. Then:

1. If $p$ satisfies the triangle inequality (M3), then $p(x,y) \ge 0$ for all
   $x, y \in X$.
2. If $p$ satisfies the strong triangle inequality (M3'), then
   $p(x,y) \ge 0$ for all $x, y \in X$.

In particular every metric, every pseudometric and every ultrametric
([[def-metric-space]]) takes only nonnegative values. Nonnegativity is therefore
a theorem about the axiom list this library uses, not a fourth axiom, and no
statement on this page needs to assume it separately.

## The 2 citing use(s), quoted verbatim from the citing items

### `lem-uniform-metric-on-a-function-space` (published-backward, page function-space-topologies)

Title: For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

- [L1] $\bar d = \min\{d,1\}$ is a metric on $Y$: it satisfies (M1), (M2) and (M3) of [[def-metric-space]], and $0 \le \bar d(u,v) \le 1$ for all $u,v$ ([[lem-bounded-remetrisation]], claims 1 and 2, [[lem-metric-nonnegativity]]).

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).
