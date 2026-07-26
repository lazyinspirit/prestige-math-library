---
page: completeness-and-uniform-continuity-examples
title: "Completeness, Completion, and Uniform Continuity: Examples and Counterexamples"
status: draft
items: []
examples: [ex-completion-of-q-is-r, ex-banach-fixed-point-for-square-roots,
           ex-lipschitz-extension-from-the-rationals, ex-square-root-is-half-holder,
           ex-bounded-functions-with-sup-metric-are-complete,
           cex-contraction-on-an-incomplete-space,
           cex-strict-contraction-without-a-fixed-point,
           cex-cantor-intersection-needs-vanishing-diameters,
           cex-completeness-is-not-topological,
           cex-same-topology-different-cauchy-sequences,
           cex-continuous-map-destroying-cauchyness,
           cex-uniform-bijection-with-non-uniform-inverse]
---

**Objective.** This page is the worked companion to Completeness, Completion, and
Uniform Continuity, linked under Prerequisites above. That page proves the
general theory and states four false statements without dwelling on them; this
one carries out the verifications. Five examples run the machinery on concrete
spaces, and seven counterexamples supply the witnesses for the hypotheses the
general page was careful to keep.

**The examples.** [[ex-completion-of-q-is-r]] identifies the completion of
$\mathbb{Q}$: the real line, with the canonical embedding, is complete and has
$\mathbb{Q}$ densely inside it, so it *is* a completion, and uniqueness does the
rest. That is the metric statement of what the construction pages of this library
did by hand, and no separate identification of the abstract completion is needed
once uniqueness is available. [[ex-banach-fixed-point-for-square-roots]] runs the
fixed point theorem on $f(x) = (x + 2/x)/2$ over $[1,2]$: the contraction
constant $1/2$ comes from the algebraic identity
$f(x) - f(y) = (x-y)\big(1/2 - 1/(xy)\big)$ and the bound $1 \le xy \le 4$, with
no derivative anywhere, since the mean value theorem belongs to a later page. The
fixed point is $\sqrt 2$, and from the starting point $1$ the a priori bound
reads $|\sqrt 2 - x_n| \le 2^{-n}$.

[[ex-lipschitz-extension-from-the-rationals]] applies the extension theorem to a
Lipschitz function on $\mathbb{Q}$ and then recovers the constant, which the
extension theorem does not hand over: a non-strict inequality valid on a dense
set and continuous on both sides passes to the whole line.
[[ex-square-root-is-half-holder]] pins down the exact Hölder exponent of the
square root on $[0,\infty)$: it is $1/2$-Hölder with constant $1$, that constant
is attained, and it is $\alpha$-Hölder for **no** rational $\alpha$ with
$1/2 < \alpha \le 1$, so in particular it is not Lipschitz. The obstruction sits
at $0$, and away from $0$ the square root is Lipschitz.
[[ex-bounded-functions-with-sup-metric-are-complete]] proves that the bounded
real-valued functions on a nonempty set are complete in the supremum metric,
building the limit pointwise, checking that it is bounded, and only then showing
that the convergence is uniform in the point.

**The counterexamples, in pairs with what they defeat.** Two concern Banach's
theorem. [[cex-contraction-on-an-incomplete-space]] drops completeness only:
$x \mapsto x/2$ on $(0,1]$ is a $1/2$-contraction of a nonempty space into
itself with no fixed point, and the missing point is exactly the fixed point of
the same formula on $\mathbb{R}$. [[cex-strict-contraction-without-a-fixed-point]]
keeps completeness and weakens the constant: $x \mapsto x + 1/x$ on $[1,\infty)$
shrinks every distance strictly, has no fixed point, and admits no contraction
constant at all, the shrinking factor $1 - 1/(n(n+1))$ climbing to $1$.

[[cex-cantor-intersection-needs-vanishing-diameters]] attacks the nested-set
theorem. On $\mathbb{N}$ with $d(m,n) = 1 + 1/(m+n)$ for $m \ne n$ the tails
$\{n, n+1, \dots\}$ are nested, nonempty, closed, bounded and complete, and their
intersection is empty; the diameters are $1 + 1/(2n+1)$ and never approach $0$.
The metric takes values in $\{0\} \cup (1,2]$, so its topology is discrete and
closedness carries no information at all.

Three counterexamples make the failure of topological invariance concrete.
[[cex-completeness-is-not-topological]] puts $|m-n|$ and $|1/m - 1/n|$ on the
positive integers: both topologies are discrete, hence equal, and only the first
metric is complete. [[cex-same-topology-different-cauchy-sequences]] does the
same on $(0,\infty)$ and shows the failure is symmetric: $1/(k+2)$ is Cauchy for
$|x-y|$ and not for $|1/x - 1/y|$, while $k+2$ is Cauchy for the second and not
for the first, so neither metric's Cauchy sequences contain the other's. Both
items close by observing that uniform equivalence would have preserved
Cauchyness, so these pairs are also witnesses that topological equivalence is
strictly weaker than uniform equivalence.

The last two concern maps. [[cex-continuous-map-destroying-cauchyness]] is the
witness that continuity does not suffice in
[[thm-uniform-continuity-preserves-cauchy]]: $x \mapsto 1/x$ is continuous on
$(0,1)$ and sends the Cauchy sequence $1/(k+2)$ to the unbounded sequence $k+2$.
[[cex-uniform-bijection-with-non-uniform-inverse]] shows that uniform continuity
is not inherited by inverses: $x \mapsto \sqrt x$ is a uniformly continuous
bijection of $[0,\infty)$ onto itself, and its inverse $x \mapsto x^2$ is
defeated at $\varepsilon = 2$ by the pairs $n + 1/n$ and $n$, whose squares
differ by $2 + 1/n^2$.

**Indexing, throughout.** $\mathbb{N}$ contains $0$ in this library, so every
sequence here starts at $k = 0$ and every reciprocal is shifted far enough to
stay inside its space: $1/(k+2)$ rather than $1/k$ for a sequence in $(0,1)$,
$k+1$ rather than $k$ for a sequence of positive integers, and $m + n$ rather
than $mn$ in the metric on $\mathbb{N}$ above. Each item says which shift it
needs and why.
