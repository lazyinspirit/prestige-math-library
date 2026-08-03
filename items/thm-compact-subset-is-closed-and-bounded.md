---
id: thm-compact-subset-is-closed-and-bounded
kind: theorem
title: "A compact subset of a metric space is closed and bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-metric-hausdorff-separation, thm-metric-open-set-algebra, def-metric-topology, def-metric-bounded-diameter, def-metric-ball, lem-finite-set-has-max, def-max-min, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "compact implies closed and bounded"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $K \subseteq X$ be a
compact subset ([[def-metric-compactness]]). Then $K$ is closed in $X$
([[def-metric-topology]]) and bounded ([[def-metric-bounded-diameter]]).

No choice principle is used: both covers below are given by a rule, and the
indexed form of [[lem-compactness-is-intrinsic]] returns indices rather than
sets.

**The converse is false in general.** A closed and bounded subset of an arbitrary
metric space need not be compact
([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]); it is exactly
in $\mathbb{R}^n$ that the converse holds ([[thm-heine-borel-rn]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and a compact subset $K \subseteq X$.

[L1] $K$ is a compact subset exactly when for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $K \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $K \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $K = \emptyset$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L2] For $p \ne x$ in $X$ and $r := d(p,x)/2$ one has $r > 0$ and $B(p,r) \cap B(x,r) = \emptyset$ ([[thm-metric-hausdorff-separation]]).

[L3] Open balls are open, $X$ is open, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-metric-ball]]).

[L4] A nonempty finite set of reals has a maximum and a minimum, each one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] A subset is bounded when it is empty or contained in some ball $B(x_0,r)$ with $r > 0$; and $B(x_0,s) \subseteq B(x_0,r)$ whenever $0 < s \le r$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 If $K = \emptyset$ then $K$ is bounded by the first clause of the definition, and it is closed because $X \setminus K = X$ is open. [L3, L5]

1.2 Assume from now on that $K \ne \emptyset$ and fix $p \in K$; the family $(B(p,r))_{r \in P}$ indexed by the set $P$ of positive reals consists of open sets and covers $K$, since every $x \in K$ satisfies $d(p,x) < d(p,x) + 1$ and so lies in $B(p, d(p,x)+1)$. [L3, L5]

2.1 The indexed characterisation gives $n \in \mathbb{N}$ and positive reals $r_0, \dots, r_n$ with $K \subseteq B(p,r_0) \cup \dots \cup B(p,r_n)$; putting $R := \max\{r_0, \dots, r_n\}$, a positive real, the balls with common centre $p$ are nested, so $K \subseteq B(p,R)$ and $K$ is bounded. [L1, L4, L5, step 1.2]

3.1 Boundedness being settled, take up closedness: let $q \in X \setminus K$ and for each $x \in K$ put $r_x := d(q,x)/2$, which is a positive real because $q \ne x$, and which satisfies $B(q,r_x) \cap B(x,r_x) = \emptyset$. [L2, step 2.1]

4.1 The family $(B(x,r_x))_{x \in K}$ consists of open subsets of $X$ and covers $K$, since $x \in B(x,r_x)$; so there are $n \in \mathbb{N}$ and $x_0, \dots, x_n \in K$ with $K \subseteq B(x_0, r_{x_0}) \cup \dots \cup B(x_n, r_{x_n})$. [L1, L3, step 3.1]

5.1 Put $r := \min\{r_{x_0}, \dots, r_{x_n}\}$, a positive real. [L4, step 4.1]

6.1 Then $B(q,r) \cap K = \emptyset$: a point $y$ of the intersection would lie in $B(x_i, r_{x_i})$ for some $i \le n$ by step 4.1, and also in $B(q,r) \subseteq B(q, r_{x_i})$ by step 5.1, whereas those two balls are disjoint by step 3.1. [L5, step 3.1, step 4.1, step 5.1]

7.1 So every point of $X \setminus K$ has a ball around it inside $X \setminus K$, that set is open, and $K$ is closed; together with steps 1.1 and 2.1 this proves the theorem. [L3, step 1.1, step 2.1, step 6.1] ∎

## Remarks

**Both conclusions use compactness through the same characterisation.** The first cover is by concentric balls of every positive radius, which is what boundedness is about; the second is by balls small enough to keep a fixed outside point away, which is what closedness is about. In each case what compactness returns is a finite list of indices, and a maximum or a minimum of finitely many positive reals then does the rest.

**Hausdorffness is what makes the second argument work**, and every metric space has it ([[thm-metric-hausdorff-separation]]). The statement is false for topological spaces without that separation property, which is why the proof cites the separation lemma rather than the metric axioms directly.
