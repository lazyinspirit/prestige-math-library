---
id: thm-connectedness-characterisations
kind: theorem
title: "For a topological space the following agree: no separation exists, the only clopen subsets are $\\varnothing$ and $X$, and every continuous map to the two-point discrete space is constant"
status: draft
origin: session
deps: [def-connected-space, def-topological-space, def-standard-topologies,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-subspace-topology-top, def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §23"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbf{2} = \{0,1\}$ carry the discrete topology ([[def-standard-topologies]]).
Call a map $\chi : X \to \mathbf{2}$ **constant** when $\chi(x) = \chi(y)$ for all
$x, y \in X$.

**1.** The following four conditions are equivalent.

- **(a)** $X$ is connected: no separation of $X$ exists ([[def-connected-space]]).
- **(b)** The only clopen subsets of $X$ are $\varnothing$ and $X$.
- **(c)** Every continuous map $\chi : X \to \mathbf{2}$ is constant
  ([[def-continuous-map-top]]).
- **(d)** The only subsets of $X$ with empty boundary are $\varnothing$ and $X$
  ([[def-interior-closure-boundary-top]]).

**2.** For $A \subseteq X$ with the subspace topology
([[def-subspace-topology-top]]), $A$ is a connected subset of $X$ if and only if
the only subsets of $A$ that are clopen in $(A, \mathcal{T}_A)$ are $\varnothing$
and $A$, if and only if every continuous map $A \to \mathbf{2}$ is constant.

Claim 2 is claim 1 applied to the space $(A, \mathcal{T}_A)$ and is stated
separately because it is the form used in every later proof on this page: a
connected set is tested by showing that a continuous two-valued function on it
cannot take both values.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$ and the two-point discrete space $\mathbf{2} = \{0,1\}$.

[A1] A separation of $X$ is a pair $(U,V)$ of open, nonempty, disjoint sets with $U \cup V = X$; $X$ is connected when none exists; a subset carries the subspace topology and is connected when it is connected as a space ([[def-connected-space]], [[def-subspace-topology-top]]).

[A2] A set is closed exactly when its complement is open, clopen when it is both open and closed; $\varnothing$ and $X$ are clopen ([[def-topological-space]]).

[A3] Every subset of $\mathbf{2}$ is open, hence also closed; the subsets of $\mathbf{2}$ are $\varnothing$, $\{0\}$, $\{1\}$ and $\mathbf{2}$ ([[def-standard-topologies]]).

[A4] A map is continuous exactly when the preimage of every open set is open, equivalently exactly when the preimage of every closed set is closed ([[thm-continuity-characterisations-top]], clauses (b) and (c), and [[def-continuous-map-top]]).

[A5] $\operatorname{int}(A) \subseteq A \subseteq \overline{A}$ and $\partial A = \overline{A} \setminus \operatorname{int}(A)$; $A$ is open exactly when $A = \operatorname{int}(A)$ and closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 If $C \subseteq X$ is clopen with $C \ne \varnothing$ and $C \ne X$, then $C$ and $X \setminus C$ are both open by [A2], both nonempty, disjoint, and their union is $X$; so $(C, X \setminus C)$ is a separation of $X$. [A1, A2]

1.2 If $\chi : X \to \mathbf{2}$ is continuous, then $\chi^{-1}[\{0\}]$ and $\chi^{-1}[\{1\}]$ are clopen in $X$, since $\{0\}$ and $\{1\}$ are both open and closed in $\mathbf{2}$ by [A3] and preimages of open sets are open and of closed sets closed by [A4]. [A3, A4]

1.3 If $(U,V)$ is a separation of $X$, then $\chi_{U,V} : X \to \mathbf{2}$ taking the value $0$ on $U$ and $1$ on $V$ is a well-defined function, because $U$ and $V$ are disjoint and cover $X$ by [A1]; it is continuous, because the preimages of $\varnothing$, $\{0\}$, $\{1\}$, $\mathbf{2}$ are $\varnothing$, $U$, $V$, $X$, all open by [A1] and [A2], so [A4] and [A3] apply; and it is not constant, because $U$ and $V$ are nonempty. [A1, A2, A3, A4]

1.4 For $A \subseteq X$ the conditions $\partial A = \varnothing$ and "$A$ is clopen" agree: by [A5] $\partial A = \varnothing$ says $\overline{A} = \operatorname{int}(A)$, which together with $\operatorname{int}(A) \subseteq A \subseteq \overline{A}$ forces $A = \operatorname{int}(A) = \overline{A}$, that is $A$ open and closed; conversely if $A$ is clopen then $\operatorname{int}(A) = A = \overline{A}$ and $\partial A = \varnothing$. [A5]

2.1 (a) implies (b): if (b) fails there is a clopen $C \notin \{\varnothing, X\}$, and step 1.1 turns it into a separation of $X$, so (a) fails. [step 1.1]

2.2 (b) implies (c): let $\chi : X \to \mathbf{2}$ be continuous; by step 1.2 the set $\chi^{-1}[\{0\}]$ is clopen, hence by (b) it is $\varnothing$ or $X$; in the first case $\chi$ takes only the value $1$ and in the second only the value $0$, so $\chi$ is constant. [step 1.2]

2.3 (c) implies (a): if (a) fails there is a separation $(U,V)$ of $X$, and step 1.3 produces a continuous $\chi_{U,V} : X \to \mathbf{2}$ that is not constant, so (c) fails. [step 1.3]

2.4 (b) and (d) are the same condition, by step 1.4 applied to each subset of $X$. [step 1.4]

3.1 Steps 2.1, 2.2 and 2.3 give (a) implies (b) implies (c) implies (a), so (a), (b) and (c) are equivalent, and step 2.4 adjoins (d); this is claim 1. [step 2.1, step 2.2, step 2.3, step 2.4]

4.1 Claim 2 is claim 1 applied to the topological space $(A, \mathcal{T}_A)$, whose connectedness is by [A1] the definition of $A$ being a connected subset of $X$. [step 3.1, A1] ∎

## Remarks

- **Which clause is used where.** Clause (c) is the workhorse: it converts a connectedness claim into a statement about functions, so it composes with continuous maps and with unions, which is what makes the theorems after it short. Clause (b) is the one to use when a candidate clopen set is already in hand. Clause (d) is stated because a boundary computation is often the quickest route in a concrete space.

- **Why $\mathbf{2}$ and not an arbitrary discrete space.** Any discrete space with at least two points would serve for clause (c), since a non-constant map into it composes with a retraction onto two of its points. Fixing $\mathbf{2}$ avoids having to say which two, and every use below needs no more.

- **The empty space satisfies all four clauses.** Its only subset is $\varnothing = X$, which is clopen and has empty boundary; the unique map $\varnothing \to \mathbf{2}$ is constant vacuously; and no separation exists, since a separation needs a nonempty piece. So the convention of [[def-connected-space]] is consistent with every clause here rather than being an exception to them.
