---
id: thm-metric-open-set-algebra
kind: theorem
title: "Arbitrary unions and finite intersections of open sets are open, open balls are open and closed balls are closed"
status: published
origin: session
deps: [def-metric-topology, def-metric-ball, lem-finite-set-has-max, def-max-min,
       lem-of-add-order, def-metric-space, lem-metric-reverse-triangle,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "the open sets form a topology"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open and closed sets
as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. Then:

1. **Balls are open.** $B(x,r)$ is open, for every $x \in X$ and every $r > 0$.
2. **Arbitrary unions.** If $\mathcal{U}$ is any collection of open subsets of
   $X$, then $\bigcup \mathcal{U}$ is open.
3. **Finite intersections.** If $n \ge 1$ and $U_0, \dots, U_{n-1}$ are open,
   then $U_0 \cap \dots \cap U_{n-1}$ is open.
4. **Closed balls are closed.** $\bar B(x,r)$ is closed, for every $x \in X$ and
   every $r > 0$.

Together with the fact that $\emptyset$ and $X$ are open, recorded already in
[[def-metric-topology]], claims 2 and 3 say that $\mathcal{T}_d$ has exactly the
closure properties that the word *topology* names.

## Facts & Assumptions

**Given:** A metric space $(X,d)$; a point $x \in X$ and a real $r > 0$; a collection $\mathcal{U}$ of open subsets of $X$; a natural $n \ge 1$ and open sets $U_0, \dots, U_{n-1} \subseteq X$.

[A1] Open: $U$ is open when every $u \in U$ admits $t > 0$ with $B(u,t) \subseteq U$; closed means the complement is open ([[def-metric-topology]]).

[A2] Balls: $B(u,t) = \{w : d(u,w) < t\}$ and $\bar B(u,t) = \{w : d(u,w) \le t\}$, and $B(u,t) \subseteq B(u,t')$ whenever $0 < t \le t'$ ([[def-metric-ball]]).

[L1] Triangle inequality and symmetry of $d$ ([[def-metric-space]]).

[L2] Reverse triangle inequality: $|d(a,c) - d(b,c)| \le d(a,b)$, so in particular $d(a,c) - d(b,c) \le d(a,b)$ ([[lem-metric-reverse-triangle]]).

[L3] A nonempty finite set of reals has a minimum, which belongs to the set and is a lower bound of it ([[lem-finite-set-has-max]], [[def-max-min]]).

[L4] Order arithmetic: a constant may be added to both sides of an inequality and inequalities may be chained by transitivity, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality, in the nonstrict form ([[def-ordered-field]], [[def-complete-ordered-field]]); and by trichotomy $a < b$ and $b \le a$ cannot both hold.

## Proof

**Proof technique:** direct.

1.1 Claim 1: let $y \in B(x,r)$, so $d(x,y) < r$, and put $s := r - d(x,y) > 0$; for $z \in B(y,s)$ the triangle inequality gives $d(x,z) \le d(x,y) + d(y,z) < d(x,y) + s = r$, so $B(y,s) \subseteq B(x,r)$, and since $y$ was arbitrary $B(x,r)$ is open. [A1, A2, L1, L4]

1.2 Claim 2: let $y \in \bigcup \mathcal{U}$, so $y \in U$ for some $U \in \mathcal{U}$; as $U$ is open there is $t > 0$ with $B(y,t) \subseteq U \subseteq \bigcup \mathcal{U}$, and since $y$ was arbitrary the union is open. [A1]

1.3 Claim 3: let $y \in U_0 \cap \dots \cap U_{n-1}$ and for each $k < n$ pick $t_k > 0$ with $B(y,t_k) \subseteq U_k$, which is possible because each $U_k$ is open and $y$ lies in it. [A1, choose]

1.4 Claim 4: let $y \in X \setminus \bar B(x,r)$, so $d(x,y) > r$, and put $s := d(x,y) - r > 0$; for $z \in B(y,s)$ the reverse triangle inequality applied to the points $y, z, x$ gives $d(y,x) - d(z,x) \le d(y,z) < s$, hence $d(z,x) > d(y,x) - s = r$, so $d(x,z) > r$ by symmetry and $z \notin \bar B(x,r)$. [A2, L1, L2, L4]

2.1 Since $n \ge 1$, the set $\{t_0, \dots, t_{n-1}\}$ is a nonempty finite set of reals, so $t := \min\{t_0, \dots, t_{n-1}\}$ exists, equals some $t_j$ and is therefore $> 0$, and satisfies $t \le t_k$ for every $k < n$. [step 1.3, L3]

2.2 Step 1.4 shows $B(y,s) \subseteq X \setminus \bar B(x,r)$ for the $y$ and $s$ chosen there, and $y$ was an arbitrary point of $X \setminus \bar B(x,r)$; hence $X \setminus \bar B(x,r)$ is open and $\bar B(x,r)$ is closed, which is claim 4. [step 1.4, A1]

3.1 By step 2.1, $B(y,t) \subseteq B(y,t_k) \subseteq U_k$ for every $k < n$, so $B(y,t) \subseteq U_0 \cap \dots \cap U_{n-1}$; as $y$ was arbitrary that intersection is open, which is claim 3. [step 2.1, A1, A2]

4.1 Claims 1, 2, 3 and 4 are established by steps 1.1, 1.2, 3.1 and 2.2 respectively. [step 1.1, step 1.2, step 2.2, step 3.1] ∎

## Remarks

- **Finiteness in claim 3 is essential and is exactly what step 2.1 uses.** An
  infinite family of positive radii need have no positive lower bound, and the
  minimum of an infinite set of reals need not exist at all
  ([[lem-finite-set-has-max]] is stated for finite sets for that reason). The
  intersection of the balls $B(x,1/n)$ over all $n \ge 1$ is a standard example
  of an intersection of open sets that need not be open.
- **The empty intersection is not covered and does not need to be.** Claim 3 is
  stated for $n \ge 1$; the conventional value of an empty intersection is $X$,
  which is open anyway ([[def-metric-topology]]).
- **Claim 4 is not the statement that $\bar B(x,r)$ is the closure of
  $B(x,r)$**, which is false in general
  ([[fs-closed-ball-is-the-closure-of-the-open-ball]]). All that is proved here
  is that the closed ball is a closed set.
