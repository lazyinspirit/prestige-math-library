# Adversarial proof reading — `lem-euclidean-polygonal-paths-are-continuous`

## The item under review, in full

`items/lem-euclidean-polygonal-paths-are-continuous.md`

```markdown
---
id: lem-euclidean-polygonal-paths-are-continuous
kind: lemma
title: "A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-continuity-is-local-and-pastes, thm-componentwise-limits-and-continuity, def-subspace-topology-top]
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Pasting lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pasting_lemma"
    - title: "Polygonal chain"
      url: "https://en.wikipedia.org/wiki/Polygonal_chain"
pipeline_run: null
---

## Statement

Let $v_0,\ldots,v_m\in\mathbb{R}^n$ and $0=t_0<\cdots<t_m=1$. The affine pieces joining $v_{i-1}$ to $v_i$ define a continuous map $[0,1]\to\mathbb{R}^n$. If every piece lies in a subset $A$, the map is a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $A$ from $v_0$ to $v_m$.

## Facts & Assumptions

**Given:** Vertices $v_0,\ldots,v_m\in\mathbb{R}^n$ and a partition $0=t_0<\cdots<t_m=1$.

[L1] A finite family of closed sets covering a space pastes continuous restrictions to a continuous map ([[lem-continuity-is-local-and-pastes]], claim 3).

[L2] A map whose values lie in a subspace is continuous into that subspace exactly when its composite with the inclusion into the ambient space is continuous ([[def-subspace-topology-top]]).

[L3] A map into $\mathbb{R}^n$ is continuous if and only if all of its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]], clause 1).

## Proof

**Proof technique:** constructive.

1.1 On $[t_{i-1},t_i]$ define $\gamma_i(t):=((t_i-t)/(t_i-t_{i-1}))v_{i-1}+((t-t_{i-1})/(t_i-t_{i-1}))v_i$. Each coordinate is an affine real function of $t$, hence continuous. [L3, construct]

2.1 At every shared endpoint $t_i$, the adjacent formulas both give $v_i$, so the pieces define one function $\gamma:[0,1]\to\mathbb{R}^n$. [step 1.1, construct]

3.1 Each interval $[t_{i-1},t_i]$ is closed in $[0,1]$, the finitely many intervals cover it, and each restriction of $\gamma$ is continuous by step 1.1. Thus $\gamma$ is continuous by [L1]. [L1, step 1.1, step 2.1]

4.1 If the pieces lie in $A$, then $\gamma$ takes values in $A$. Its composite with the inclusion $A\hookrightarrow\mathbb R^n$ is the continuous map of step 3.1, so [L2] makes it continuous into the subspace $A$. Its endpoints are $v_0,v_m$, hence it is a path in $A$. [step 3.1, L2, discharge-construct] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-polygonal-path-and-polygonal-connectedness` — definition — Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Definition

Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

$$\gamma(t)=\frac{t_i-t}{t_i-t_{i-1}}v_{i-1}+\frac{t-t_{i-1}}{t_i-t_{i-1}}v_i\quad\text{when }t_{i-1}\le t\le t_i.$$

The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

The subset $A$ is **polygonally connected** when every pair of its points is joined by a polygonal path in $A$.

### `lem-continuity-is-local-and-pastes` — lemma — Continuity may be checked on any open cover, and on any finite closed cover; composites of continuous maps are continuous

(statement provenance: ai-altered)

### Statement

Let $X$, $Y$ and $Z$ be topological spaces, with subspaces carrying the subspace
topology ([[def-subspace-topology-top]]). Then:

1. **Composites.** If $f : X \to Y$ and $g : Y \to Z$ are continuous
   ([[def-continuous-map-top]]) then $g \circ f : X \to Z$ is continuous.
2. **Open cover.** Let $f : X \to Y$ be a function and let
   $\{\, U_i : i \in I \,\}$ be a family of open subsets of $X$ with
   $\bigcup_{i \in I} U_i = X$. If $f|_{U_i} : U_i \to Y$ is continuous for every
   $i \in I$, then $f$ is continuous.
3. **Finite closed cover.** Let $f : X \to Y$ be a function, let $n \ge 1$ and
   let $F_1, \dots, F_n$ be closed subsets of $X$ with
   $F_1 \cup \dots \cup F_n = X$. If $f|_{F_k} : F_k \to Y$ is continuous for
   every $k$, then $f$ is continuous.

The converses of claims 2 and 3 hold with no hypothesis on the cover at all:
every restriction of a continuous map to a subspace is continuous
([[def-subspace-topology-top]]). The finiteness in claim 3 is not removable; see
the remarks.

### `thm-componentwise-limits-and-continuity` — theorem — A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions

(statement provenance: untagged)

### Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

### `def-subspace-topology-top` — definition — Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## What to return

Read `lem-euclidean-polygonal-paths-are-continuous` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
