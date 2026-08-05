# Citation-precision audit — everything that cites `thm-subspace-closure-and-interior`

## The target, as it actually stands on disk

`items/thm-subspace-closure-and-interior.md` — theorem — For $A \\subseteq S \\subseteq X$ the closure of $A$ in $S$ is $\\overline{A}^{X} \\cap S$, while the interior only contains $\\operatorname{int}^{X}(A) \\cap S$, with equality when $S$ is open; and a dense subset of $X$ traces to a dense subset of every open $S$

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$S \subseteq X$ carry the subspace topology $\mathcal{T}_S$
([[def-subspace-topology-top]]) and let $A \subseteq S$. Write $\overline{A}$ and
$\operatorname{int}(A)$ for the closure and the interior of $A$ in $X$, and
$\operatorname{cl}_S(A)$ and $\operatorname{int}_S(A)$ for those taken in the
space $(S, \mathcal{T}_S)$ ([[def-interior-closure-boundary-top]]). Then:

1. **Closure traces exactly.**
   $$\operatorname{cl}_S(A) \;=\; \overline{A} \cap S .$$
2. **Interior traces only one way.** $\operatorname{int}(A) \subseteq S$, so
   $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, and
   $$\operatorname{int}(A) \;\subseteq\; \operatorname{int}_S(A) ,$$
   an inclusion that may be strict.
3. **Equality for an open subspace.** If $S \in \mathcal{T}$ then
   $\operatorname{int}_S(A) = \operatorname{int}(A)$.
4. **Density traces to open subspaces only.** If $D \subseteq X$ is dense in $X$
   ([[def-dense-top]]) and $S \in \mathcal{T}$, then $D \cap S$ is dense in
   $(S, \mathcal{T}_S)$. Without the hypothesis $S \in \mathcal{T}$ this fails.

Both failures are witnessed inside the proof, in Sierpinski space
([[def-standard-topologies]]): the unqualified forms of claims 2 and 3 and of
claim 4 are false, and the counterexamples are two lines each rather than
deferred.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [A3] The open sets of $T$ are the traces $U' \cap T$ of the open sets of $W \times Z$, the closed sets of $T$ are the traces of the closed sets, and the traces of a basis form a basis ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- ([[thm-subspace-closure-and-interior]], claim 1), so
