# Citation-precision audit — everything that cites `lem-metric-ball-neighbourhood-base`

## The target, as it actually stands on disk

`items/lem-metric-ball-neighbourhood-base.md` — lemma — The balls $B(x, 1/n)$, $n \\ge 1$, form a countable neighbourhood base at $x$, so every metric space is first countable

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $x \in X$. For a
natural $n \ge 1$ write $1/n$ for the inverse of the canonical natural
$n \cdot 1_{\mathbb{R}}$, a positive real, and put

$$\beta_n := B\big(x, 1/n\big), \qquad \mathcal{B}_x := \{\, \beta_n : n \in \mathbb{N},\ n \ge 1 \,\}.$$

Then:

1. $\mathcal{B}_x$ is at most countable ([[def-countable]]).
2. Every $\beta_n$ is an open subset of $X$ containing $x$.
3. For every open $U \subseteq X$ with $x \in U$ there is $n \ge 1$ with
   $\beta_n \subseteq U$.

**The two names used in the title are introduced by this statement, not cited
from elsewhere.** A family of open sets each containing $x$, such that every open
set containing $x$ contains a member of the family, is a **neighbourhood base at
$x$**; a space in which every point has an at most countable neighbourhood base
is **first countable**. Claims 1 to 3 say that $\mathcal{B}_x$ is an at most
countable neighbourhood base at $x$, so **every metric space is first
countable**.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- [L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).
