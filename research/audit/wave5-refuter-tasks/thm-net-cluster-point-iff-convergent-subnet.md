# Adversarial proof reading — `thm-net-cluster-point-iff-convergent-subnet`

## The item under review, in full

`items/thm-net-cluster-point-iff-convergent-subnet.md`

```markdown
---
id: thm-net-cluster-point-iff-convergent-subnet
kind: theorem
title: "A point is a cluster point of a net if and only if some subnet converges to it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subnet, def-net-convergence-and-cluster-point, def-neighbourhood-top]
aliases: []
landmark: true
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
    - title: "Schlumprecht, Math 655 notes"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Statement

For a net $x:D\to X$ and $p\in X$, $p$ is a cluster point of $x$ if and only if $x$ has a subnet converging to $p$.

## Facts & Assumptions

**Given:** A net $x:D\to X$ in a topological space and a point $p\in X$.

[A1] A cluster point is one for which every neighbourhood is visited frequently, and convergence means eventual membership in every neighbourhood ([[def-net-convergence-and-cluster-point]]).

[A2] Intersections of finitely many neighbourhoods of $p$ are neighbourhoods of $p$ ([[def-neighbourhood-top]]).

[A3] A subnet is given by an eventually cofinal index map ([[def-subnet]]).



## Proof

**Proof technique:** constructive.

1.1 Suppose $p$ is a cluster point. Let $E=\{(d,N):N\in\mathcal N(p),\ d\in D,\ x_d\in N\}$, ordered by $(d,N)\preceq(e,M)$ when $d\le e$ and $M\subseteq N$. [A1, construct]

1.2 Conversely, suppose a subnet $y_e=x_{\phi(e)}$ converges to $p$. Given a neighbourhood $N$ and $d\in D$, choose $e_0$ after which $y$ lies in $N$ and choose $e_1$ after which $\phi(e)\ge d$; a common upper bound $e$ of $e_0,e_1$ gives $\phi(e)\ge d$ and $x_{\phi(e)}=y_e\in N$. Hence $x$ is frequently in $N$. [A1, A3]

2.1 The set $E$ is directed: for $(d,N),(e,M)\in E$, take $h\ge d,e$ in $D$; frequent membership in $N\cap M$ gives $k\ge h$ with $x_k\in N\cap M$, and $(k,N\cap M)$ is above both pairs. [step 1.1, A1, A2]

2.2 Put $y_{(d,N)}=x_d$ and $\phi(d,N)=d$. For every $d_0\in D$, the pair $(d_0,X)$ lies in $E$, and every later pair has first coordinate at least $d_0$. Thus $\phi$ is eventually cofinal and $y$ is a subnet of $x$. [step 1.1, A3]

2.3 For a neighbourhood $N$ of $p$, choose $(d,N)\in E$ using frequent membership in $N$. Every pair later than it has second coordinate contained in $N$, hence its $y$-value lies in $N$. Thus $y\to p$. [step 1.1, A1]

3.1 Steps 1.1 and 2.1--2.3 construct a convergent subnet from a cluster point, and step 1.2 gives the converse. [step 2.2, step 2.3, step 1.2, discharge-construct] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-subnet` — definition — Subnet via an eventually cofinal index map

(statement provenance: ai-altered)

### Definition

Let $x:D\to X$ be a net. A net $y:E\to X$ is a **subnet** of $x$ if $E$ is a directed preorder and there is a map $\phi:E\to D$ such that $y_e=x_{\phi(e)}$ for every $e\in E$ and

$$\text{for every }d\in D\text{ there is }e_0\in E\text{ such that }e\ge e_0\Longrightarrow\phi(e)\ge d.$$

The displayed condition says that $\phi$ is **eventually cofinal**. No order-preservation condition is imposed on $\phi$.

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

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

## What to return

Read `thm-net-cluster-point-iff-convergent-subnet` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
