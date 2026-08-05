# Citation-precision audit — everything that cites `def-complete-metric-space`

## The target, as it actually stands on disk

`items/def-complete-metric-space.md` — definition — Complete metric space: every Cauchy sequence converges in the space

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
([[def-cauchy-in-metric]]) converges to a point of $X$
([[def-metric-convergence]]).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete ([[def-isometry-and-metric-embedding]]); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
([[lem-metric-limits-unique]]), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of [[fs-completeness-is-a-topological-property]] and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[def-complete-metric-space]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- ([[def-complete-metric-space]]) and let $\bar\rho$ be the uniform metric on
- [L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).
- - **Completeness is a property of the metric, not of the topology** ([[def-complete-metric-space]]), and the metric here is $\bar\rho$, built from the truncation $\bar d = \min\{d,1\}$. A different metric inducing the same topology on $Y$ need not make $Y$ complete, and then nothing above applies; the hypothesis is that $(Y,d)$ itself is complete.
