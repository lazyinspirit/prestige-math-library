# Adversarial proof reading — `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space`

## The item under review, in full

`items/thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space.md`

```markdown
---
id: thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space
kind: theorem
title: "$\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-punctured-rn-is-polygonally-connected, thm-path-connected-implies-connected, cor-connected-subsets-of-the-line, thm-continuous-image-of-a-connected-space, def-homeomorphism-and-open-maps]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Invariance of domain"
      url: "https://en.wikipedia.org/wiki/Invariance_of_domain"
pipeline_run: null
---

## Statement

For every $n\ge2$, there is no homeomorphism $\mathbb R\to\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge2$.

[L1] The punctured space $\mathbb R^n\setminus\{0\}$ is polygonally connected, hence connected ([[lem-punctured-rn-is-polygonally-connected]], [[thm-path-connected-implies-connected]]).

[L2] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[L3] A connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L4] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $h:\mathbb R\to\mathbb R^n$ is a homeomorphism, and put $a:=h^{-1}(0)$. [assume-contra, L4, choose]

1.2 Restricting $h^{-1}$ to $\mathbb R^n\setminus\{0\}$ gives a continuous surjection onto $\mathbb R\setminus\{a\}$. The source is connected by [L1], so the target is connected by [L2]. [L1, L2, L4]

1.3 Choose $a-1<a<a+1$. Both endpoints lie in $\mathbb R\setminus\{a\}$, but $a$ does not, so this subset is not order-convex and therefore not connected by [L3]. [L3]

2.1 Steps 1.2 and 1.3 contradict one another. Thus no such homeomorphism exists. [step 1.2, step 1.3, discharge-contradiction] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-punctured-rn-is-polygonally-connected` — lemma — For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected

(statement provenance: ai-altered)

### Statement

For $n\ge2$, $\mathbb R^n\setminus\{0\}$ is polygonally connected.

### `thm-path-connected-implies-connected` — theorem — Every path-connected space is connected, and every path component lies inside a component

(statement provenance: ai-altered)

### Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

### `cor-connected-subsets-of-the-line` — corollary — The connected subspaces of $\\mathbb{R}$ with its usual topology are exactly the order-convex subsets, the published characterisation transported by the identification of the two descriptions of \"open in $\\mathbb{R}$\"

(statement provenance: ai-altered)

### Statement

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

### `thm-continuous-image-of-a-connected-space` — theorem — A continuous image of a connected space is connected, and connectedness is a topological property

(statement provenance: ai-altered)

### Statement

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

### `def-homeomorphism-and-open-maps` — definition — Homeomorphism, open map, closed map, embedding, and what it means for a property to be topological

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let
$f : X \to Y$ be a function. Continuity is as in [[def-continuous-map-top]],
injections, surjections and bijections as in
[[def-injection-surjection-bijection]].

- $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U \subseteq X$.
- $f$ is a **closed map** if $f[F]$ is closed in $Y$ for every closed
  $F \subseteq X$.
- $f$ is a **homeomorphism** if $f$ is a continuous bijection whose inverse
  $f^{-1} : Y \to X$ is also continuous. The spaces are **homeomorphic**, written
  $X \cong Y$, when a homeomorphism $X \to Y$ exists.
- $f$ is an **embedding** if $f$ is injective and the corestriction
  $f_0 : X \to f[X]$, $f_0(x) = f(x)$, is a homeomorphism onto $f[X]$ carrying
  the subspace topology inherited from $Y$ ([[def-subspace-topology-top]]).

**The inverse in the third clause exists because $f$ is a bijection**, and it is
the unique two-sided inverse ([[def-injection-surjection-bijection]]); no choice
principle is involved. Continuity of $f^{-1}$ is a genuine additional demand: a
continuous bijection need not be a homeomorphism, and this page records that
failure as a false statement with a two-point witness.

**Open, closed and homeomorphism are three different conditions.** A
homeomorphism is continuous by definition, but an open map need not be continuous
and a closed map need not be continuous; and continuity implies neither openness
nor closedness. An open map need
not be closed and a closed map need not be open, and Sierpinski space
$S = \{a,b\}$ with open point $b$ ([[def-standard-topologies]]) witnesses both
failures at once: the constant map $S \to S$ with value $b$ is open, since the
image of every nonempty set is the open set $\{b\}$, and is not closed, since the
image of the closed set $\{a\}$ is $\{b\}$, whose complement $\{a\}$ is not open;
the constant map with value $a$ is closed and not open by the same computation
read the other way. What is true
is that for a **continuous bijection** the three notions collapse: it is a
homeomorphism exactly when it is open, exactly when it is closed. That is proved
in the next item and is not assumed here.

**Topological properties.** A **property of topological spaces** is a condition
$P$ that is either true or false of each space. $P$ is a **topological property**
(one is also said to be *preserved by homeomorphism*, or *invariant*) when
$X \cong Y$ implies that $P(X)$ and $P(Y)$ have the same truth value. Since
$\cong$ is an equivalence relation on spaces — the identity is a homeomorphism,
inverses and composites of homeomorphisms are homeomorphisms, all three verified
in the next item — a topological property is exactly one that is constant on each
$\cong$-class.

**What a homeomorphism transports.** If $h : X \to Y$ is a homeomorphism then
$U \mapsto h[U]$ is a bijection from $\mathcal{T}_X$ onto $\mathcal{T}_Y$, with
inverse $V \mapsto h^{-1}[V]$: both maps are well defined because $h$ and
$h^{-1}$ are continuous, and they are mutually inverse because $h$ is a
bijection. So a homeomorphism is an isomorphism of the structure "a set together
with a distinguished family of subsets", and every notion defined from the open
sets alone — closed, closure, interior, boundary, dense, convergence of
sequences, continuity of maps into and out of the space — is carried across by
it. Anything defined from extra data, such as a metric or an order, is not, and
that distinction is exactly what the phrase *topological property* is for.

## What to return

Read `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
