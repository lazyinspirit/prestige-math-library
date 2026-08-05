# Citation-precision audit — everything that cites `thm-continuous-image-of-a-compact-space-is-compact`

## The target, as it actually stands on disk

`items/thm-continuous-image-of-a-compact-space-is-compact.md` — theorem — The image of a compact metric space under a continuous map is compact, and so is the image of any compact subset

#### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be continuous ([[def-metric-continuity]]). Then:

1. If $(X,d_X)$ is compact ([[def-metric-compactness]]), the image
   $f[X] \subseteq Y$ is a compact subset of $Y$.
2. More generally, if $K \subseteq X$ is a compact subset of $X$, then $f[K]$ is
   a compact subset of $Y$.

No choice principle is used.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- ([[thm-continuous-image-of-a-compact-space-is-compact]]), which is false for a

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L4] The continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]], claim 2).
