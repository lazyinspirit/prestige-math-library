# Citation-precision audit — everything that cites `thm-metric-sequential-closure`

## The target, as it actually stands on disk

`items/thm-metric-sequential-closure.md` — theorem — A point lies in the closure of $A$ iff some sequence in $A$ converges to it, and a set is closed iff it is sequentially closed

#### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$, let
$x \in X$ and let $F \subseteq X$. Call $F$ **sequentially closed** when every
sequence in $F$ that converges in $X$ has its limit in $F$. Then:

1. $x \in \overline{A}$ ([[def-metric-interior-closure-boundary]]) if and only if
   there is a sequence $(a_k)$ with $a_k \in A$ for every $k$ and $a_k \to x$ in
   $(X,d)$ ([[def-metric-convergence]]).
2. $F$ is closed ([[def-metric-topology]]) if and only if $F$ is sequentially
   closed.

**The Axiom of Countable Choice is used, once.** The direction of claim 1 that
manufactures a sequence out of adherence makes one choice per natural number, and
that is exactly $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The converse
direction, and the direction of claim 2 that goes from closed to sequentially
closed, are choice free. This is flagged at the step that spends it.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- argument through [[thm-metric-sequential-closure]] would spend the Axiom of
- - **Why the choice-free route was taken.** The usual proof of claim 3 shows that $C(X,Y)$ is sequentially closed and then invokes [[thm-metric-sequential-closure]] to conclude closedness; that item's forward direction spends the Axiom of Countable Choice, since it manufactures a sequence out of adherence. The argument above instead works with the distance to the set directly and instantiates a single $g$ at each $\varepsilon$, so claim 3 is a theorem of ZF.
