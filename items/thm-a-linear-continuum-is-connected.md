---
id: thm-a-linear-continuum-is-connected
kind: theorem
title: "A linear continuum is connected in its order topology, and so is every order-convex subset of it"
status: draft
origin: session
deps: [def-order-topology-on-a-linearly-ordered-set, def-connected-space,
       def-upper-bound, def-partial-order, def-topological-space,
       def-subspace-topology-top, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Linear continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_continuum"
    - title: "J. R. Munkres, Topology, 2nd ed., §24"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $(L, \le)$ be a **linear continuum**: a linearly ordered set with at least
two elements that is order-dense and has the least upper bound property
([[def-order-topology-on-a-linearly-ordered-set]]). Give $L$ its order topology.
Then:

1. $L$ is connected ([[def-connected-space]]).
2. Every order-convex $C \subseteq L$, with the subspace topology, is connected.
   In particular every interval $[a,b]$, $(a,b)$, $[a,b)$, $(a,b]$ and every ray
   of $L$ is connected.

Claim 2 covers the degenerate cases: $\varnothing$ and every singleton are
order-convex and connected.

## Facts & Assumptions

**Given:** A linear continuum $(L, \le)$ with its order topology, and an order-convex $C \subseteq L$.

[A1] The order is linear, so any two elements are comparable and exactly one of $x < y$, $x = y$, $y < x$ holds; $\le$ is transitive and antisymmetric ([[def-partial-order]]).

[A2] Order-density: for $x < y$ in $L$ there is $z$ with $x < z < y$. Least upper bound property: a nonempty subset with an upper bound has a least upper bound $\sup$, which is an upper bound and is $\le$ every upper bound ([[def-order-topology-on-a-linearly-ordered-set]], [[def-upper-bound]]).

[A3] $\{L\} \cup \{L_{<q}\} \cup \{L_{>p}\} \cup \{(p,q)\}$ is a basis for the order topology, so every open set containing a point contains a member of that family containing it ([[def-order-topology-on-a-linearly-ordered-set]], [[def-topology-basis-subbasis]]).

[A4] A separation of a space is a pair of open, nonempty, disjoint sets whose union is the space; a space is connected when none exists; $\varnothing$ and every one-point space are connected ([[def-connected-space]], [[def-topological-space]]).

[A5] For an order-convex $C \subseteq L$ the subspace topology on $C$ is the order topology of the restricted order ([[def-order-topology-on-a-linearly-ordered-set]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $(U,V)$ is a separation of $L$: both open and nonempty, disjoint, with $U \cup V = L$. [assume-contra, A4]

2.1 Fix $a \in U$ and $b \in V$. They are distinct, $U$ and $V$ being disjoint, so by [A1] one is below the other; relabelling $U$ and $V$ if necessary, which is legitimate because the hypothesis of step 1.1 is symmetric in them, assume $a < b$. [step 1.1, A1]

3.1 Put $S := \{\, t \in U : a \le t \le b \,\}$. It is nonempty, containing $a$, and $b$ is an upper bound of it, so $c := \sup S$ exists by [A2] and satisfies $a \le c \le b$, since $a \in S$ and $b$ is an upper bound. [step 2.1, A2]

4.1 Suppose $c \in V$. Then $c \ne a$, since $a \in U$ and the two sets are disjoint, so $a < c$ by [A1] and $a \le c$. By [A3] there is a basic open $W$ with $c \in W \subseteq V$; $W$ is neither $L$ nor a set $L_{<q}$, since either would contain $a$, giving $a \in V$. So $W$ is $L_{>p}$ or $(p,q)$ with $p < c$, and in both cases $(p, c] \subseteq W \subseteq V$. [step 1.1, step 3.1, A1, A3]

4.2 Suppose instead $c \in U$. Then $c \ne b$, so $c < b$ by [A1] and $c \le b$. By [A3] there is a basic open $W$ with $c \in W \subseteq U$; $W$ is neither $L$ nor a set $L_{>p}$, since either would contain $b$, giving $b \in U$. So $W$ is $L_{<q}$ or $(p,q)$ with $c < q$, and in both cases $[c, q) \subseteq W \subseteq U$; moreover $q \le b$, since $b \notin U$ and $c < b$ would otherwise put $b$ in $[c,q)$. [step 1.1, step 3.1, A1, A3]

5.1 In the case of step 4.1, $p < c = \sup S$, so $p$ is not an upper bound of $S$ by [A2] and there is $s \in S$ with $p < s \le c$; then $s \in (p,c] \subseteq V$ and $s \in U$, contradicting $U \cap V = \varnothing$. [step 1.1, step 3.1, step 4.1, A2]

5.2 In the case of step 4.2, order-density gives $z$ with $c < z < q$ by [A2]; then $z \in [c,q) \subseteq U$, and $a \le c < z < q \le b$, so $z \in S$ while $z > c = \sup S$, contradicting that $\sup S$ is an upper bound of $S$. [step 3.1, step 4.2, A2]

6.1 By step 1.1 the point $c$ lies in $U \cup V = L$, so one of the two cases applies, and each is contradictory by steps 5.1 and 5.2. Hence no separation of $L$ exists and $L$ is connected; this is claim 1. [step 1.1, step 5.1, step 5.2, A4]

7.1 For claim 2 let $C \subseteq L$ be order-convex. If $C$ has at most one element it is connected by [A4]. Otherwise $C$ carries the order topology of its restricted order by [A5], and $C$ is itself a linear continuum: it has at least two elements; it is order-dense, because for $x < y$ in $C$ the element $z$ with $x < z < y$ given by [A2] lies in $C$ by order-convexity; and it has the least upper bound property, because a nonempty $S \subseteq C$ with an upper bound $u \in C$ has $\sup S$ in $L$ by [A2], and $s \le \sup S \le u$ for any $s \in S$ puts $\sup S$ in $C$ by order-convexity, where it is again the least upper bound. So claim 1 applies to $C$. [step 6.1, A2, A4, A5, discharge-contradiction] ∎

## Remarks

- **Both hypotheses are spent, each exactly once.** The least upper bound property produces $c$ at step 3.1, and order-density produces the point $z$ at step 5.2. Neither may be dropped. An ordered set with a jump, a pair $x < y$ with $(x,y) = \varnothing$, is separated by the two open sets $L_{<y}$ and $L_{>x}$, which is what density forbids; and the rationals, which are order-dense but lack the least upper bound property, are separated by $\{q : q^2 < 2 \text{ or } q < 0\}$ and its complement, both open.

- **Why the argument is asymmetric between the two cases.** Case 4.1 needs only that $c$ is a least upper bound; case 4.2 needs a point strictly above $c$ inside $U$, and only density supplies one. That asymmetry is intrinsic: a supremum can be approached from below in any ordered set, and stepping strictly above it while staying inside a small open set is what requires there to be no gaps.

- **Claim 2 is proved by re-reading $C$ as a continuum, not by a second argument.** The two facts that make this legal are that an order-convex subset carries its own order topology as a subspace, and that order-density and the least upper bound property are inherited by order-convex subsets. Both are established at step 7.1 rather than assumed.
