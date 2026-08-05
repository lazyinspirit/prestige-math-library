# Citation-precision audit — everything that cites `thm-compactness-under-continuous-maps`

## The target, as it actually stands on disk

`items/thm-compactness-under-continuous-maps.md` — theorem — A continuous image of a compact space is compact; a continuous real-valued map on a nonempty compact space attains a maximum and a minimum; and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism

#### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), and let $\mathbb{R}$ carry its usual topology, the
metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). Then:

1. **Continuous images.** If $f : X \to Y$ is continuous
   ([[def-continuous-map-top]]) and $(X, \mathcal{T}_X)$ is compact
   ([[def-compact-space]]), then $f[X]$ is a compact subset of $Y$. More
   generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a
   compact subset of $Y$.
2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and
   $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum
   ([[def-max-min]]): there are $x_{\max}, x_{\min} \in X$ with
   $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$
3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y,
   \mathcal{T}_Y)$ is Hausdorff ([[def-hausdorff-space]]) and $f : X \to Y$ is a
   continuous bijection, then $f$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]).

Nonemptiness in claim 2 is a hypothesis and not an oversight: for
$X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No
choice principle is used**: the one selection made below is over a finite index
set, where [[lem-finite-choice]] is a theorem of ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (published-backward, page the-topology-of-euclidean-space)

Title: For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent

- [L3] A continuous real-valued map on a nonempty compact topological space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]], claim 2).
