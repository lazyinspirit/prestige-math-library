# Citation-precision audit — everything that cites `def-equivalent-metrics`

## The target, as it actually stands on disk

`items/def-equivalent-metrics.md` — definition — Topologically, uniformly and Lipschitz equivalent metrics on a set

#### Definition

Let $X$ be a set and let $d$ and $d'$ both be metrics on $X$
([[def-metric-space]]). Note that the underlying set is the same; nothing below
compares metrics on different sets.

- $d$ and $d'$ are **topologically equivalent** if they have the same metric
  topology ([[def-metric-topology]]):
  $$\mathcal{T}_d = \mathcal{T}_{d'} .$$
- $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$
  there are reals $\delta > 0$ and $\delta' > 0$ such that, for all
  $x, y \in X$,
  $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon .$$
- $d$ and $d'$ are **Lipschitz equivalent** if there are reals
  $\alpha, \beta > 0$ with
  $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X .$$

**What the middle condition says in words.** It is the statement that both
identity maps $\mathrm{id} : (X,d) \to (X,d')$ and
$\mathrm{id} : (X,d') \to (X,d)$ are *uniformly* continuous: the same $\delta$
works at every pair of points, not merely at each point separately as in
[[def-metric-continuity]]. Uniform continuity has no definition of its own at
this point in the reading order, so the condition is written out in full above;
a later page defines it, and until then this write-out is what earlier pages
quote.

**Each of the three is an equivalence relation on the metrics on $X$.**
Reflexivity is immediate ($\delta = \varepsilon$, and $\alpha = \beta = 1$);
symmetry is built into the statements, the uniform one being symmetric by
construction and the Lipschitz one because
$\alpha d \le d' \le \beta d$ gives $\beta^{-1} d' \le d \le \alpha^{-1} d'$;
and transitivity follows by composing the $\delta$s and multiplying the
constants.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- ([[def-equivalent-metrics]]). Read *uniformly convergent* as an abbreviation for

### `ex-continuous-functions-on-the-unit-interval-with-the-sup-metric` (published-backward, page function-space-topologies-examples)

Title: $C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology

- ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]);
- [L5] Uniform equivalence of two metrics on one set, and the implication uniform $\Rightarrow$ topological ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]], claim 2).
