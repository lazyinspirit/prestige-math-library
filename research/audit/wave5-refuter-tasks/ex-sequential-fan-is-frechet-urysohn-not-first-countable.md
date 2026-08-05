# Adversarial proof reading — `ex-sequential-fan-is-frechet-urysohn-not-first-countable`

## The item under review, in full

`items/ex-sequential-fan-is-frechet-urysohn-not-first-countable.md`

```markdown
---
id: ex-sequential-fan-is-frechet-urysohn-not-first-countable
kind: example
title: "The sequential fan is Fréchet–Urysohn and not first countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-frechet-urysohn-and-sequential-spaces, def-first-countable-top, def-topology-basis-subbasis, thm-recursion, lem-finite-set-has-max, thm-well-ordering-principle]
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
    - title: "D. Ma, A note on products of sequential fans (Dan Ma's Topology Blog)"
      url: "https://dantopology.wordpress.com/2015/07/01/a-note-on-products-of-sequential-fans/"
    - title: "Fréchet–Urysohn space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space"
pipeline_run: null
---

## Example

Let $S_\omega=(\mathbb N\times\mathbb N)\cup\{\infty\}$, with all $(n,m)$ isolated. A neighbourhood of $\infty$ contains $\infty$ and, for every $n$, all but finitely many $(n,m)$ on the $n$-th spoke. This is the sequential fan. It is Fréchet–Urysohn but not first countable.

## Facts & Assumptions

**Given:** The sequential fan and a subset $A\subseteq S_\omega$.

[A1] A space is Fréchet–Urysohn when closure points are limits of sequences from the set, and first countability means a countable local base ([[def-frechet-urysohn-and-sequential-spaces]], [[def-first-countable-top]]).

[L1] Every nonempty finite subset of $\mathbb N$ has a maximum, every nonempty subset of $\mathbb N$ has a least member, and recursion defines sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).


## Verification

**Proof technique:** constructive.

1.1 Suppose $\infty\in\overline A$. If every spoke met $A$ only finitely, define $$ f(n)= \begin{cases} 0,&\{m:(n,m)\in A\}=\varnothing,\\ 1+\max\{m:(n,m)\in A\},&\text{otherwise}. \end{cases} $$ This is a canonically defined function by [L1], and the neighbourhood containing on spoke $n$ exactly the points $(n,m)$ with $m\ge f(n)$ misses $A$, a contradiction. Hence one spoke meets $A$ infinitely. [A1, L1, construct]

1.2 Suppose $(B_k)$ were a countable neighbourhood base at $\infty$. For each $k,n$, let $f_k(n)$ be the least threshold such that $(n,m)\in B_k$ for every $m\ge f_k(n)$; it exists and is unique by [L1]. Form the neighbourhood whose threshold on spoke $k$ is $g(k)=f_k(k)+1$. [A1, L1, construct]

2.1 On the infinite spoke supplied by step 1.1, recursion and least elements from [L1] list the second coordinates increasingly. The resulting sequence in $A$ is eventually beyond every threshold on that spoke, hence converges to $\infty$. Isolated closure points already lie in $A$, so $S_\omega$ is Fréchet–Urysohn. [step 1.1, A1, L1]

2.2 The point $(k,f_k(k))$ lies in $B_k$ but not in this neighbourhood, so no $B_k$ is contained in it. This contradicts the base property. [step 1.2, A1]

3.1 Therefore the sequential fan is Fréchet–Urysohn and not first countable. [step 2.1, step 2.2, discharge-construct] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-frechet-urysohn-and-sequential-spaces` — definition — Fréchet–Urysohn spaces and sequential spaces

(statement provenance: literature-derived)

### Definition

A topological space $X$ is **Fréchet–Urysohn** if, whenever $p\in\overline A$, there is a sequence in $A$ converging to $p$. Equivalently, $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$, since sequential closure is always contained in closure ([[lem-sequential-closure-inside-closure]]).

A subset $C\subseteq X$ is **sequentially closed** if every sequence in $C$ that converges in $X$ has its limit in $C$. The space is **sequential** if every sequentially closed subset is closed. Equivalently, $\operatorname{seqcl}(A)=A$ implies $\overline A=A$ for every $A\subseteq X$.

### `def-first-countable-top` — definition — First countable space: a countable neighbourhood base at every point

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **first
countable** if every point of $X$ has an at most countable neighbourhood base:
for each $x \in X$ there is a family
$\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable
([[def-countable]], [[def-equinumerous]]) and such that every neighbourhood of
$x$ contains a member of $\mathcal{B}_x$ ([[def-neighbourhood-top]]).

**"Countable" here means "at most countable"**, as everywhere in this library
([[def-countable]]), so a *finite* neighbourhood base is permitted. That is not a
degenerate case: in a discrete space the one-element family $\{\{x\}\}$ is a
neighbourhood base at $x$, so every discrete space is first countable, and in an
indiscrete space $\{X\}$ is a neighbourhood base at every point.

**The base may be taken to consist of open sets, and it may be taken
decreasing.** If $\mathcal{B}_x$ is an at most countable neighbourhood base at
$x$, then replacing each $N \in \mathcal{B}_x$ by an open $U_N$ with
$x \in U_N \subseteq N$ gives an at most countable neighbourhood base of open
sets. Making the base decreasing, that is arranging
$M_0 \supseteq M_1 \supseteq \dots$, requires enumerating it and forming the
running finite intersections; both operations are carried out inside the proof of
the theorem that uses them, the next item, where the enumeration and the
recursion are cited explicitly rather than assumed here.

**First countability is a topological property**
([[def-homeomorphism-and-open-maps]]): a homeomorphism $h : X \to Y$ carries a
neighbourhood base at $x$ to a neighbourhood base at $h(x)$, since
$N \mapsto h[N]$ is a bijection between the neighbourhood filters preserving
inclusion, and a bijection preserves at most countability
([[def-equinumerous]]).

### `def-topology-basis-subbasis` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

### `thm-recursion` — theorem — The recursion theorem

(statement provenance: literature-derived)

### Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

### `lem-finite-set-has-max` — lemma — Every nonempty finite set of reals has a maximum and a minimum

(statement provenance: ai-altered)

### Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

### `thm-well-ordering-principle` — theorem — The well-ordering principle

(statement provenance: literature-derived)

### Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## What to return

Read `ex-sequential-fan-is-frechet-urysohn-not-first-countable` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
