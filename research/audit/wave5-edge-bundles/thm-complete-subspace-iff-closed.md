# Citation-precision audit — everything that cites `thm-complete-subspace-iff-closed`

## The target, as it actually stands on disk

`items/thm-complete-subspace-iff-closed.md` — theorem — A subspace of a complete metric space is complete iff it is closed, and a complete subspace of any metric space is closed

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$
carry the subspace metric $d_A$ ([[def-isometry-and-metric-embedding]]). Then:

1. If $(A,d_A)$ is complete ([[def-complete-metric-space]]), then $A$ is closed
   in $(X,d)$ ([[def-metric-topology]]). **No hypothesis on $X$ is needed.**
2. If $(X,d)$ is complete and $A$ is closed in $(X,d)$, then $(A,d_A)$ is
   complete.

Consequently, for a complete $(X,d)$ a subset $A \subseteq X$ is complete if and
only if it is closed.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L7] A closed subset of a complete metric space is complete in the subspace metric ([[thm-complete-subspace-iff-closed]], claim 2, [[def-isometry-and-metric-embedding]]).
