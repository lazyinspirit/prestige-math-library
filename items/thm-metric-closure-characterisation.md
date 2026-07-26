---
id: thm-metric-closure-characterisation
kind: theorem
title: "The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset"
status: published
origin: session
deps: [def-metric-interior-closure-boundary, def-metric-bounded-diameter,
       thm-metric-open-set-algebra, lem-inf-epsilon, def-metric-topology,
       def-metric-ball, def-infimum, lem-metric-nonnegativity, def-metric-space,
       thm-infimum-property, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "closure = zero-distance set = smallest closed superset"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Distance from a point to a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a closed set $F \subseteq X$ with $A \subseteq F$; when $A \ne \emptyset$, the set $E(x) := \{\, d(x,a) : a \in A \,\}$, whose infimum is $d(x,A)$.

[A1] Closure and derived set: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every $r > 0$; $x \in A'$ means $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r > 0$ ([[def-metric-interior-closure-boundary]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L1] For nonempty $A$, the set $E(x)$ is nonempty and bounded below by $0$, so $d(x,A) = \inf E(x)$ exists and is a lower bound of $E(x)$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $S \subseteq \mathbb{R}$ bounded below and a lower bound $\ell$ of $S$, one has $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] Balls are open, so a point of a ball has a ball around it inside that ball ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L4] Membership in a ball: $a \in B(x,r)$ means $d(x,a) < r$, and $x \in B(x,r)$ always ([[def-metric-ball]]); trichotomy of the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \ne \emptyset$ and $x \in \overline{A}$, and let $\varepsilon > 0$ be arbitrary; then $B(x,\varepsilon) \cap A \ne \emptyset$, so there is $a \in A$ with $d(x,a) < \varepsilon = 0 + \varepsilon$, and $0$ is a lower bound of $E(x)$, so $d(x,A) = 0$ by the epsilon characterisation. [A1, L1, L2, L4]

1.2 Conversely suppose $A \ne \emptyset$ and $d(x,A) = 0$, and let $r > 0$ be arbitrary; the epsilon characterisation supplies $a \in A$ with $d(x,a) < 0 + r = r$, that is $a \in B(x,r) \cap A$, so $x \in \overline{A}$. [A1, L1, L2, L4]

1.3 $A \subseteq \overline{A}$ and $A' \subseteq \overline{A}$: a point $a \in A$ lies in $B(a,r) \cap A$ for every $r$, and a ball meeting $A \setminus \{x\}$ meets $A$. [A1, L4]

1.4 If $x \in \overline{A}$ and $x \notin A$, then for every $r$ the nonempty set $B(x,r) \cap A$ equals $B(x,r) \cap (A \setminus \{x\})$, since $x$ is not a member of $A$; hence $x \in A'$. [A1]

1.5 $\overline{A}$ is closed: let $x \in X \setminus \overline{A}$ and fix $r$ with $B(x,r) \cap A = \emptyset$; for $y \in B(x,r)$ there is $s$ with $B(y,s) \subseteq B(x,r)$, so $B(y,s) \cap A = \emptyset$ and $y \notin \overline{A}$, whence $B(x,r) \subseteq X \setminus \overline{A}$ and $X \setminus \overline{A}$ is open. [A1, A2, L3]

1.6 $\overline{A} \subseteq F$ for every closed $F \supseteq A$: if $x \in \overline{A}$ had $x \notin F$, then $X \setminus F$ open would give $r$ with $B(x,r) \subseteq X \setminus F \subseteq X \setminus A$, so $B(x,r) \cap A = \emptyset$, contradicting $x \in \overline{A}$. [A1, A2, given]

2.1 Claim 1 follows: by step 1.1 every adherent point of a nonempty $A$ satisfies $d(x,A) = 0$, and by step 1.2 every $x$ with $d(x,A) = 0$ is adherent. [step 1.1, step 1.2]

2.2 Claim 2 follows: $A \cup A' \subseteq \overline{A}$ by step 1.3, and $\overline{A} \subseteq A \cup A'$ by step 1.4, since a point of $\overline{A}$ either lies in $A$ or, not lying in $A$, lies in $A'$. [step 1.3, step 1.4]

2.3 Claim 3 follows: $\overline{A}$ is closed by step 1.5, contains $A$ by step 1.3, and sits inside every closed superset of $A$ by step 1.6; in particular if $A$ is closed then $\overline{A} \subseteq A \subseteq \overline{A}$, so $A = \overline{A}$, and conversely if $A = \overline{A}$ then $A$ is closed. [step 1.3, step 1.5, step 1.6]

3.1 Claims 1, 2 and 3 are therefore all established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Claim 1 is where the infimum does the work.** Reading it right to left,
  $d(x,A) = 0$ says that $A$ has points arbitrarily close to $x$ without saying
  that any of them is $x$; reading it left to right, adherence says the same
  thing in the language of balls. The equivalence is exactly the epsilon
  characterisation of the infimum ([[lem-inf-epsilon]]) with the lower bound $0$.
- **The distance function is $1$-Lipschitz** ([[lem-distance-to-set-is-lipschitz]]),
  so claim 1 exhibits $\overline{A}$ as the zero set of a function that does not
  increase distances. That is not used above and is recorded only as
  orientation.
- **Claim 3 is the form that transfers to general topology**, where no metric is
  available and the closure is defined outright as the intersection of all
  closed supersets. Claim 1 is the specifically metric statement, and claim 2
  sits between them.
