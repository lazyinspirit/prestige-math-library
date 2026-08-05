# Adversarial proof reading — `ex-neighbourhood-indexed-net-converging-to-a-closure-point`

## The item under review, in full

`items/ex-neighbourhood-indexed-net-converging-to-a-closure-point.md`

```markdown
---
id: ex-neighbourhood-indexed-net-converging-to-a-closure-point
kind: example
title: "A neighbourhood-indexed net in $A$ converges to each point of $\\overline{A}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-closure-characterised-by-nets, def-neighbourhood-top, def-directed-set-and-net, def-net-convergence-and-cluster-point]
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "net (nLab)"
      url: "https://ncatlab.org/nlab/show/net"
pipeline_run: null
---

## Example

Let $p\in\overline A\subseteq X$. The pairs $(N,a)$ with $N$ a neighbourhood of $p$ and $a\in N\cap A$, directed by reverse inclusion of $N$, form an index set. The net $(N,a)\mapsto a$ lies in $A$ and converges to $p$.

## Facts & Assumptions

**Given:** A point $p\in\overline A$ in a topological space $X$.

[L1] Every neighbourhood of $p$ meets $A$ ([[thm-closure-characterised-by-nets]]).

[L2] Finite intersections of neighbourhoods of $p$ are neighbourhoods ([[def-neighbourhood-top]]).

[L3] Net convergence means eventual membership in each neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Verification

**Proof technique:** constructive.

1.1 Let $E=\{(N,a):N\in\mathcal N(p),\ a\in N\cap A\}$ and order it by $(N,a)\preceq(M,b)$ when $M\subseteq N$. [L1, construct]

2.1 For two indices, [L2] and [L1] give $c\in(N\cap M)\cap A$; $(N\cap M,c)$ is above both. Thus $E$ is directed. [step 1.1, L1, L2]

2.2 The net $x_{(N,a)}=a$ is eventually in every neighbourhood $N$ of $p$, since any pair with first coordinate $N$ is a threshold. Hence $x\to p$. [step 1.1, L3]

3.1 This is the asserted net in $A$. [step 2.2, discharge-construct] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-closure-characterised-by-nets` — theorem — A point lies in the closure of a set if and only if a net in the set converges to it

(statement provenance: literature-derived)

### Statement

For $A\subseteq X$ and $p\in X$, one has $p\in\overline A$ if and only if there is a net in $A$ converging to $p$.

### `def-neighbourhood-top` — definition — Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

### `def-directed-set-and-net` — definition — Directed preorders and nets

(statement provenance: literature-derived)

### Definition

A **directed preorder** is a nonempty set $D$ with a reflexive, transitive relation $\le$ such that every $d,e\in D$ have a common upper bound: some $f\in D$ satisfies $d\le f$ and $e\le f$. Antisymmetry is not required; thus this is a preorder obtained by omitting antisymmetry from the partial-order axioms of [[def-partial-order]].

If $X$ is the underlying set of a topological space ([[def-topological-space]]), a **net in $X$** indexed by $D$ is a function $x:D\to X$, written $(x_d)_{d\in D}$. The order on $D$ records which indices are sufficiently far along; it need not be a linear order.

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

## What to return

Read `ex-neighbourhood-indexed-net-converging-to-a-closure-point` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
