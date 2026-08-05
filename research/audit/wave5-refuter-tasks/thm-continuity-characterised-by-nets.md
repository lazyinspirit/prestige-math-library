# Adversarial proof reading — `thm-continuity-characterised-by-nets`

## The item under review, in full

`items/thm-continuity-characterised-by-nets.md`

```markdown
---
id: thm-continuity-characterised-by-nets
kind: theorem
title: "A map of topological spaces is continuous at a point if and only if it preserves every net converging to that point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-closure-characterised-by-nets, def-net-convergence-and-cluster-point, def-continuous-map-top, thm-continuity-characterisations-top]
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Statement

Let $f:X\to Y$ and $p\in X$. Then $f$ is continuous at $p$ if and only if, for every net $x_d\to p$ in $X$, the net $f(x_d)$ converges to $f(p)$ in $Y$.

## Facts & Assumptions

**Given:** A function $f:X\to Y$ and a point $p\in X$.

[A1] $f$ is continuous at $p$ exactly when every neighbourhood $V$ of $f(p)$ has $f^{-1}[V]$ as a neighbourhood of $p$ ([[def-continuous-map-top]]).

[A2] A point is in the closure of a set exactly when a net in that set converges to it ([[thm-closure-characterised-by-nets]]).

[A3] A net converges exactly when it is eventually in every neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** contradiction.

1.1 If $f$ is continuous at $p$ and $x_d\to p$, then for every neighbourhood $V$ of $f(p)$ the net is eventually in $f^{-1}[V]$ by [A1], hence $f(x_d)$ is eventually in $V$ and converges to $f(p)$. [A1, A3]

1.2 Conversely, assume every net converging to $p$ has image converging to $f(p)$, and assume for a contradiction that $f$ is not continuous at $p$. Then some neighbourhood $V$ of $f(p)$ has $f^{-1}[V]$ not a neighbourhood of $p$. [A1, assume-contra]

2.1 Put $A=X\setminus f^{-1}[V]$. Every neighbourhood of $p$ meets $A$, for otherwise it would be contained in $f^{-1}[V]$; hence $p\in\overline A$ and [A2] gives a net $x_d$ in $A$ converging to $p$. [step 1.2, A2]

3.1 Every $f(x_d)$ lies outside $V$, so its image net is not eventually in the neighbourhood $V$ of $f(p)$ and cannot converge to $f(p)$, contradicting the assumption of step 1.2. [step 2.1, A3]

4.1 Therefore $f$ is continuous at $p$; together with step 1.1 this proves the equivalence. [step 1.1, step 3.1, discharge-contradiction] ∎
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

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

### `def-continuous-map-top` — definition — Continuity of a map of topological spaces at a point and globally

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

### `thm-continuity-characterisations-top` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## What to return

Read `thm-continuity-characterised-by-nets` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
