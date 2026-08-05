# Adversarial proof reading — `ex-arens-space-is-sequential-not-frechet-urysohn`

## The item under review, in full

`items/ex-arens-space-is-sequential-not-frechet-urysohn.md`

```markdown
---
id: ex-arens-space-is-sequential-not-frechet-urysohn
kind: example
title: "Arens space $S_2$ is sequential but not Fréchet–Urysohn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-frechet-urysohn-and-sequential-spaces, def-sequence-convergence-top, thm-closure-characterisation-top, lem-finite-set-has-max, thm-well-ordering-principle, thm-recursion]
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
    - title: "Arens' space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "D. Ma, A note about the Arens space (Dan Ma's Topology Blog)"
      url: "https://dantopology.wordpress.com/2010/08/18/a-note-about-the-arens-space/"
    - title: "D. Ma, Sequential spaces, I (Dan Ma's Topology Blog)"
      url: "https://dantopology.wordpress.com/2010/06/21/sequential-spaces-i/"
pipeline_run: null
---

## Example

Let $S_2=\{\infty\}\cup\{x_n:n\in\mathbb N\}\cup\{x_{n,m}:n,m\in\mathbb N\}$. The $x_{n,m}$ are isolated; neighbourhoods of $x_n$ contain a tail of its row; a neighbourhood of $\infty$ contains neighbourhoods of all but finitely many $x_n$. Then $S_2$ is sequential, but is not Fréchet–Urysohn.

## Facts & Assumptions

**Given:** The displayed topology on $S_2$ and $A=\{x_{n,m}:n,m\in\mathbb N\}$.

[A1] Fréchet–Urysohn and sequential spaces have the closure and sequential-closed meanings in [[def-frechet-urysohn-and-sequential-spaces]].

[L1] Closure is characterized by meeting every neighbourhood, and convergence by eventual membership in every neighbourhood ([[thm-closure-characterisation-top]], [[def-sequence-convergence-top]]).

[L2] Finite subsets of $\mathbb N$ have maxima, nonempty subsets have least members, and recursion produces sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).


## Verification

**Proof technique:** constructive.

1.1 Every neighbourhood of $\infty$ meets $A$, so $\infty\in\overline A$ by [L1]. No sequence in $A$ converges to $\infty$: if it visits a row infinitely often, a neighbourhood omitting that row defeats convergence. If it visits every row finitely, use [L2] to put the threshold on each visited row one above the maximum selected second coordinate, and threshold $0$ on every unvisited row. The resulting neighbourhood omits the whole sequence. [L1, L2, construct]

1.2 Let $C$ be sequentially closed. An isolated closure point lies in $C$. If $x_n\in\overline C$, then $C$ meets its $n$-th row arbitrarily far out; recursion and least elements from [L2] give a sequence of row points in $C$ converging to $x_n$, so $x_n\in C$. If $\infty\in\overline C$, then infinitely many $x_n$ lie in $C$: otherwise omit the finitely many rows whose centres lie in $C$. In every remaining row, the preceding conclusion shows that $C$ has only finitely many points; using their maximum as in [L2] gives a canonical tail disjoint from $C$. These tails form a neighbourhood of $\infty$ disjoint from $C$, contradicting $\infty\in\overline C$. [A1, L1, L2]

2.1 Hence $S_2$ is not Fréchet–Urysohn. [step 1.1, A1]

2.2 The indices $n$ with $x_n\in C$ form an infinite subset of $\mathbb N$; list them increasingly using [L2]. The resulting sequence of row centres converges to $\infty$, so sequential closedness puts $\infty$ in $C$. Thus every sequentially closed $C$ contains all its closure points and is closed. Therefore $S_2$ is sequential. [step 1.2, A1, L2]

3.1 The two conclusions prove the example. [step 2.1, step 2.2, discharge-construct] ∎
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

### `def-sequence-convergence-top` — definition — Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

### `thm-closure-characterisation-top` — theorem — A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

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

### `thm-recursion` — theorem — The recursion theorem

(statement provenance: literature-derived)

### Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## What to return

Read `ex-arens-space-is-sequential-not-frechet-urysohn` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
