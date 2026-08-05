# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `thm-cardinal-power-set-and-cantor`

## The target, as it actually stands on disk

`items/thm-cardinal-power-set-and-cantor.md` — theorem — Assuming the Axiom of Choice, $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$, and Cantor's theorem in cardinal form: $\\kappa < 2^{\\kappa}$

#### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a
cardinality ([[thm-well-ordering-theorem]],
[[lem-cardinality-of-a-well-orderable-set]]). Let $\kappa$ be a cardinal
([[def-cardinal]]) and read $2 = \{0,1\}$ as a cardinal. Then:

**(a)** $2^{\kappa} = \lvert \mathcal{P}(\kappa) \rvert$
([[def-cardinal-arithmetic]]), and more generally
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A) \rvert$ for every set $A$;

**(b)** $\kappa < 2^{\kappa}$.

Clause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The
underlying combinatorial fact — that there is no surjection $A \to \mathcal{P}(A)$
— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys
here is only the right to write $\lvert \mathcal{P}(A) \rvert$ and $2^{\kappa}$
as cardinals in the first place.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-a-ccc-nonseparable-cantor-cube` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Under choice, a concrete ccc nonseparable Cantor cube indexed above $2^{\\aleph_0}$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- [L2] The binary sequences have cardinality $2^{\aleph_0}$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).


---

# Citation-precision audit — everything that cites `thm-one-point-compactification-properties`

## The target, as it actually stands on disk

`items/thm-one-point-compactification-properties.md` — theorem — $X^{*}$ is compact and contains $X$ as an open subspace; $X$ is dense in $X^{*}$ exactly when $X$ is not compact; and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point
$\infty$ ([[def-one-point-compactification]]). Then:

1. **$X^{*}$ is compact** ([[def-compact-space]]).
2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the
   subspace topology that $X$ inherits from $X^{*}$
   ([[def-subspace-topology-top]]) is $\mathcal{T}$ itself.
3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not
   compact.**
4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is
   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**

In particular, a locally compact Hausdorff space is an open subspace of a compact
Hausdorff space, which is the reason the construction is made. **No choice
principle is used**: the only cover thinned below is thinned by the indexed form
of [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L1] The one-point compactification $D^*$ is compact and contains $D$ as an open subspace ([[thm-one-point-compactification-properties]]).


---

# Citation-precision audit — everything that cites `lem-product-topology-on-rn`

## The target, as it actually stands on disk

`items/lem-product-topology-on-rn.md` — lemma — For $n \\ge 1$ the product topology on $n$ copies of the usual topology of $\\mathbb{R}$ is the metric topology of $d_\\infty$ on $\\mathbb{R}^n$, and hence also of $d_1$ and $d_2$, so $\\mathbb{R}^n$ as a product and $\\mathbb{R}^n$ as a metric space are one space

#### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, and give $\mathbb{R}$ its usual topology,
the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$\mathbb{R}^n \;=\; \prod_{k < n} \mathbb{R}$$

be the product of $n$ copies of $\mathbb{R}$ ([[def-product-topology]]). As a
**set** this is literally the $\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being
the set of functions $n \to \mathbb{R}$; and $d_1$, $d_2$, $d_\infty$ are the
three metrics defined there. Then:

1. The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$
   ([[def-metric-topology]]). The key computation is that a $d_\infty$-ball is a
   box:
   $$B_{d_\infty}(x, r) \;=\; \prod_{k<n} (x_k - r,\ x_k + r) \qquad (r > 0),$$
   a product of bounded open intervals ([[def-interval]]).
2. $d_\infty \le d_1 \le n\, d_\infty$ and $d_\infty \le d_2 \le n\, d_\infty$
   pointwise, so $d_1$ and $d_2$ are each Lipschitz equivalent to $d_\infty$
   ([[def-equivalent-metrics]]); here $n$ denotes the canonical natural
   $n \cdot 1_{\mathbb{R}}$.
3. Consequently all three metrics induce the product topology
   ([[thm-metric-equivalence-hierarchy]]). So $\mathbb{R}^n$ carrying the product
   topology and $\mathbb{R}^n$ carrying the topology of any one of $d_1$, $d_2$,
   $d_\infty$ are **one topological space**, and it is metrizable
   ([[def-metrizable-space]]).

**Why $n \ge 1$.** The metric $d_\infty$ is a maximum over $n$ terms, which does
not exist for $n = 0$; [[lem-metrics-on-rn]] carries the same hypothesis, and it
is carried here for the same reason. For $n = 0$ the product is a one-point space
and there is nothing to compare.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

### `rem-euclidean-topology-dictionary` (published-backward, page the-topology-of-euclidean-space)

Title: The product, Euclidean-metric and norm topologies on $\\mathbb{R}^n$ agree, and for $n=1$ they agree with the real-line topology

- For $n \ge 1$, the product topology on $\mathbb{R}^n$ is the metric topology of each of $d_1$, $d_2$, and $d_\infty$ ([[lem-product-topology-on-rn]]). Every norm on $\mathbb{R}^n$ is equivalent to the Euclidean norm, hence induces that same topology ([[thm-all-norms-on-rn-are-equivalent]]). Thus open, closed, compact, connected, and continuous below have one unambiguous Euclidean meaning.


---

# Citation-precision audit — everything that cites `lem-real-and-metric-notions-agree`

## The target, as it actually stands on disk

`items/lem-real-and-metric-notions-agree.md` — lemma — Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace

#### Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## The 2 citing use(s), quoted verbatim from the citing items

### `rem-euclidean-topology-dictionary` (published-backward, page the-topology-of-euclidean-space)

Title: The product, Euclidean-metric and norm topologies on $\\mathbb{R}^n$ agree, and for $n=1$ they agree with the real-line topology

- When $n=1$, the Euclidean metric is the usual metric $d_{\mathbb{R}}(s,t)=|s-t|$, and the metric and real-line formulations of continuity and compactness agree ([[lem-real-and-metric-notions-agree]]). This page works throughout with $n \ge 1$.

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L6] If $U\subseteq\mathbb R$ is open and $x\in U$, then some open interval about $x$ is contained in $U$ ([[lem-real-and-metric-notions-agree]]).
