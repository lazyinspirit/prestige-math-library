# Citation-precision audit — everything that cites `cor-connected-subsets-of-the-line`

## The target, as it actually stands on disk

`items/cor-connected-subsets-of-the-line.md` — corollary — The connected subspaces of $\\mathbb{R}$ with its usual topology are exactly the order-convex subsets, the published characterisation transported by the identification of the two descriptions of \"open in $\\mathbb{R}$\"

#### Statement

Give $\mathbb{R}$ its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metric-topology]], [[def-metrizable-space]]), and let $E \subseteq
\mathbb{R}$ carry the subspace topology ([[def-subspace-topology-top]]). Then $E$
is a connected subset of $\mathbb{R}$ ([[def-connected-space]]) if and only if
$E$ is **order-convex** ([[def-interval]],
[[def-order-topology-on-a-linearly-ordered-set]]), that is

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

In particular each of the nine interval forms of [[def-interval]] is connected,
and so are $\varnothing$ and every singleton.

**What has to be checked, and it is not the mathematics.** The characterisation
itself is the published [[thm-connected-subsets-of-r-are-intervals]], which is
stated for the connectedness of [[def-connected-r]] — a condition phrased with
the open sets of [[def-open-and-closed-in-r]] and the closure of
[[def-interior-closure-boundary-r]]. The present corollary says the same thing
for the connectedness of [[def-connected-space]] in the topological space
$\mathbb{R}$. What licenses the transport is that the two descriptions of "open
in $\mathbb{R}$" are the same condition word for word, which is unfolded in the
proof rather than quoted.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-punctured-line-versus-punctured-plane` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $GL_1(\\mathbb{R})=\\mathbb{R}\\setminus\\{0\\}$ is disconnected, whereas $\\mathbb{R}^2\\setminus\\{0\\}$ is polygonally connected

- The invertible $1\times1$ real matrices are the nonzero real numbers, so $GL_1(\mathbb R)=\mathbb R\setminus\{0\}$. This set is disconnected: it contains $-1$ and $1$ but not the intermediate point $0$, so it is not order-convex and cannot be connected by [[cor-connected-subsets-of-the-line]]. In contrast, [[lem-punctured-rn-is-polygonally-connected]] gives polygonal connectedness of $\mathbb R^2\setminus\{0\}$. Connectedness is understood through [[def-connected-space]].

### `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$

- [L3] A connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).
