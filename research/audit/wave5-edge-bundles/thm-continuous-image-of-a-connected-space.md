# Citation-precision audit — everything that cites `thm-continuous-image-of-a-connected-space`

## The target, as it actually stands on disk

`items/thm-continuous-image-of-a-connected-space.md` — theorem — A continuous image of a connected space is connected, and connectedness is a topological property

#### Statement

Let $X$ and $Y$ be topological spaces and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Subsets carry the subspace topology
([[def-subspace-topology-top]]). Then:

1. **Images.** If $A \subseteq X$ is a connected subset of $X$
   ([[def-connected-space]]) then $f[A]$ is a connected subset of $Y$. In
   particular, if $X$ is connected then $f[X]$ is connected, and if $f$ is
   moreover surjective then $Y$ is connected.
2. **Topological invariance.** If $h : X \to Y$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]) then $X$ is connected if and only if
   $Y$ is. So connectedness is a **topological property**.

Nothing is assumed about $f$ beyond continuity: it need not be injective, open,
closed or surjective. Note the direction — a continuous **image** of a connected
space is connected, while a continuous **preimage** need not be, since a constant
map from a disconnected space is continuous.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$

- [L2] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).
