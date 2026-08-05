# Citation-precision audit — everything that cites `lem-metric-limits-unique`

## The target, as it actually stands on disk

`items/lem-metric-limits-unique.md` — lemma — A sequence in a metric space has at most one limit

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ ([[def-metric-convergence]]). If $x_k \to p$ and $x_k \to q$,
then $p = q$.

So a convergent sequence in a metric space has exactly one limit, and the
notation $\lim_k x_k$ is unambiguous.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- ([[lem-metric-limits-unique]]), so $x \mapsto \lim_k f_k(x)$ is a function, and
- [L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).
