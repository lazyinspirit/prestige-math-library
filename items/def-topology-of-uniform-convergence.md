---
id: def-topology-of-uniform-convergence
kind: definition
title: "Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$"
status: draft
origin: session
deps: [lem-uniform-metric-on-a-function-space, def-metric-topology, def-metrizable-space,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-continuous-map-top, def-metric-space, def-metric-ball,
       def-topology-of-pointwise-convergence, def-equivalent-metrics]
justified_by: [lem-uniform-convergence-in-the-uniform-metric]
aliases: [def-uniform-convergence, def-uniform-topology]
landmark: true
short: "uniform convergence; the uniform topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a nonempty set and let $(Y,d)$ be a metric space
([[def-metric-space]]).

**Uniform convergence.** A sequence $(f_k)$ in $Y^{X}$
([[def-topology-of-pointwise-convergence]]) **converges uniformly** to
$f \in Y^{X}$ if for every real $\varepsilon > 0$ there is $K \in \mathbb{N}$
such that

$$d\big(f_k(x), f(x)\big) < \varepsilon \qquad \text{for every } x \in X \text{ and every } k \ge K .$$

The whole content is the quantifier order: one index $K$ must serve **every**
point of $X$ at once, whereas pointwise convergence allows $K$ to depend on the
point as well as on $\varepsilon$. As everywhere in this library $\mathbb{N}$
contains $0$ and a sequence is indexed from $0$
([[def-topology-of-pointwise-convergence]]).

**The topology.** The **topology of uniform convergence** (the *uniform
topology*) on $Y^{X}$ is the metric topology $\mathcal{T}_{\bar\rho}$
([[def-metric-topology]]) of the uniform metric

$$\bar\rho(f,g) = \sup_{x \in X} \min\{\, d(f(x),g(x)),\ 1 \,\}$$

of [[lem-uniform-metric-on-a-function-space]]. Its basic open sets are the balls
$B_{\bar\rho}(f,\varepsilon)$ ([[def-metric-ball]]), and $Y^{X}$ with this
topology is a metrizable space ([[def-metrizable-space]]).

**On $C(X,Y)$.** If $X$ carries a topology, the **topology of uniform
convergence on $C(X,Y)$** ([[def-continuous-map-top]]) is the subspace topology
inherited from $Y^{X}$ ([[def-subspace-topology-top]]). It is the metric topology
of the restriction of $\bar\rho$ to $C(X,Y) \times C(X,Y)$: the subspace topology
of a metric topology is the metric topology of the subspace metric
([[def-isometry-and-metric-embedding]], [[def-metrizable-space]]). So the two
readings of the phrase agree, and $C(X,Y)$ carrying it is again metrizable.

**The name is justified by the next item.** That convergence in
$\mathcal{T}_{\bar\rho}$ is exactly uniform convergence in the sense defined above
is not part of the definition; it is
[[lem-uniform-convergence-in-the-uniform-metric]], and it is what entitles the
topology to the name.

**$X$ is nonempty throughout.** The uniform metric is defined only for nonempty
$X$ ([[lem-uniform-metric-on-a-function-space]]), so the topology of uniform
convergence is defined only there. The notion of uniform convergence itself makes
sense for $X = \varnothing$ and is vacuous, every sequence converging uniformly
to the unique element of $Y^{\varnothing}$; nothing below uses that case.

## Remarks

- **Uniform convergence is a property of the metric $d$, not of the topology of
  $Y$.** Both quantifiers above are about distances. Two metrics inducing the same
  topology on $Y$ can disagree about which sequences of functions converge
  uniformly, exactly as they can disagree about which sequences are Cauchy
  ([[def-equivalent-metrics]]). Read *uniformly convergent* as an abbreviation for
  *uniformly convergent with respect to this metric*, always.

- **The truncation at $1$ does not affect the notion.** The uniform metric
  truncates distances at $1$ so that a supremum exists without a boundedness
  hypothesis, and the next item shows that the truncation is invisible to
  convergence: below the threshold $1$ the truncated and untruncated distances
  agree, and convergence is a statement about arbitrarily small distances.

- **Uniform convergence is strictly stronger than pointwise convergence.** Taking
  $K$ from the uniform condition serves at each individual point, so a uniformly
  convergent sequence converges pointwise; the converse fails, and the companion
  page exhibits a sequence of continuous functions on $[0,1]$ converging pointwise
  to $0$ with $\bar\rho(f_k, 0) = 1$ for every $k$.
