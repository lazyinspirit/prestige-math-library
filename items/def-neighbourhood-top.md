---
id: def-neighbourhood-top
kind: definition
title: "Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open"
status: draft
origin: session
deps: [def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: [def-neighbourhood-base-top]
landmark: false
short: "neighbourhood, neighbourhood base"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "Neighbourhood system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_system"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

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

## Remarks

- **The convention costs nothing and buys one thing.** Every statement of the
  form "for every neighbourhood $N$ of $x$ ... " is equivalent to the statement
  with $N$ restricted to open neighbourhoods, by consequence 2 above in one
  direction and by the definition in the other, so no theorem below is sensitive
  to the fork. What the wider notion buys is that $\mathcal{N}(x)$ is a filter on
  $X$ in the sense of [[def-filter]]: consequence 1 is (F1), consequence 3 is
  (F3), consequence 2 is (F4), and (F2) holds because $x \in U \subseteq \varnothing$
  is impossible, so $\varnothing$ is a neighbourhood of no point. Under the
  narrower convention the family of open sets containing $x$ fails (F4) as soon
  as some non-open set contains an open set around $x$, so the name
  "neighbourhood filter" would not be available.

- **A neighbourhood base is not required to be closed under intersection**, and
  the bases used below usually are not; what is required is only that its members
  be cofinal downwards among neighbourhoods.
