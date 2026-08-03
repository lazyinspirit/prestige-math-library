---
id: thm-compact-implies-complete-and-totally-bounded
kind: theorem
title: "A compact metric space is complete and totally bounded, and neither implication uses any choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-totally-bounded, def-complete-metric-space, def-cauchy-in-metric, thm-compact-iff-finite-intersection-property, def-finite-intersection-property, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-convergence, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, lem-finite-set-has-max, def-max-min, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order, def-metric-space]
justified_by: []
forward_refs: [cex-totally-bounded-not-compact]
aliases: []
landmark: true
short: "compact implies complete and totally bounded"
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
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]). Then $(X,d)$ is totally bounded
([[def-totally-bounded]]) and complete ([[def-complete-metric-space]]).

**Both implications are theorems of ZF.** Completeness is obtained here from the
finite intersection characterisation ([[thm-compact-iff-finite-intersection-property]])
applied to the closures of the tails of a Cauchy sequence, and not from the
extraction of a convergent subsequence, which would route the argument through
sequential compactness. What matters for the ledger is that the route taken below
selects nothing at all; the first remark below says why the other route was not
taken.

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$.

[L1] Open balls are open ([[thm-metric-open-set-algebra]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] $(X,d)$ is totally bounded exactly when for every real $\varepsilon > 0$ there is a finite $F \subseteq X$ with $X = \bigcup_{y \in F} B(y,\varepsilon)$ ([[def-totally-bounded]]).

[L3] $X$ is a compact subset of itself, and for every family $(U_i)_{i \in I}$ of open subsets of $X$ with $X = \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $X = U_{i_0} \cup \dots \cup U_{i_n}$, unless $X = \emptyset$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L4] $(X,d)$ is complete when every Cauchy sequence converges to a point of $X$; $(x_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $K$ with $d(x_m,x_l) < \varepsilon$ for all $m,l \ge K$; and $x_k \to p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for all $k \ge K$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L5] The closure $\overline{S}$ of $S \subseteq X$ is closed, contains $S$, and is contained in every closed superset of $S$; and $x \in \overline{S}$ exactly when $B(x,r) \cap S \ne \emptyset$ for every real $r > 0$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L6] $(X,d)$ is compact exactly when every family of closed subsets of $X$ with the finite intersection property has nonempty intersection, the empty finite list having intersection $X$ ([[thm-compact-iff-finite-intersection-property]], [[def-finite-intersection-property]]).

[L7] A metric satisfies the triangle inequality and is symmetric ([[def-metric-space]]).

[L8] A finite list $n_0, \dots, n_p$ of natural numbers has a greatest member. Indeed the reals $\iota(n_0+1), \dots, \iota(n_p+1)$, with $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), form a nonempty finite set of reals and so have a maximum, which is one of them, say $\iota(n_j+1)$ ([[lem-finite-set-has-max]], [[def-max-min]]); the map $m \mapsto \iota(m)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), so $n_j < n_i$ would force $\iota(n_j+1) < \iota(n_i+1)$, which the maximality forbids, and the order of $\mathbb{N}$ is linear ([[thm-nat-linear-order]]), whence $n_i \le n_j$ for every $i \le p$.

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be real; the family $(B(x,\varepsilon))_{x \in X}$ consists of open subsets of $X$ and has union $X$, since $x \in B(x,\varepsilon)$ for every $x$. [L1, L2]

2.1 If $X = \emptyset$ the empty set is a finite $\varepsilon$-net; otherwise the indexed characterisation gives $n \in \mathbb{N}$ and $x_0, \dots, x_n \in X$ with $X = B(x_0,\varepsilon) \cup \dots \cup B(x_n,\varepsilon)$, so $\{x_0, \dots, x_n\}$ is a finite $\varepsilon$-net; as $\varepsilon$ was arbitrary, $(X,d)$ is totally bounded. [L2, L3, step 1.1]

3.1 Total boundedness being settled, take up completeness: let $(x_k)$ be a Cauchy sequence in $X$ and put $T_n := \overline{\{\, x_k : k \ge n \,\}}$ for $n \in \mathbb{N}$, a definition by a rule and not by a selection. [L4, L5, step 2.1]

4.1 Each $T_n$ is closed and nonempty, containing $x_n$; and $T_m \subseteq T_n$ whenever $m \ge n$, since then $\{x_k : k \ge m\} \subseteq \{x_k : k \ge n\} \subseteq T_n$ and $T_m$ is the smallest closed superset of the first of these sets. [L5, step 3.1]

5.1 The family $\mathcal{A} := \{\, T_n : n \in \mathbb{N} \,\}$ of closed sets has the finite intersection property: the empty list has intersection $X$, which contains $x_0$; and for a list $T_{n_0}, \dots, T_{n_p}$ take a greatest member $n_j$ of the list of indices, so that $T_{n_j} \subseteq T_{n_i}$ for every $i \le p$ and $x_{n_j}$ lies in every one of them. [L6, L8, step 4.1]

6.1 By the finite intersection characterisation of compactness there is a point $p \in \bigcap \mathcal{A}$, that is $p \in T_n$ for every $n \in \mathbb{N}$. [L6, step 5.1]

7.1 Let $\varepsilon > 0$ be rational and take $K \in \mathbb{N}$ with $d(x_m,x_l) < \varepsilon/2$ for all $m,l \ge K$; since $p \in T_K$, the ball $B(p,\varepsilon/2)$ meets $\{x_k : k \ge K\}$, so there is $j \ge K$ with $d(p,x_j) < \varepsilon/2$, and then $d(x_k,p) \le d(x_k,x_j) + d(x_j,p) < \varepsilon/2 + \varepsilon/2 = \varepsilon$ for every $k \ge K$. [L4, L5, L7, step 6.1]

8.1 Hence $x_k \to p$ with $p \in X$; every Cauchy sequence in $X$ converges, so $(X,d)$ is complete, and with step 2.1 the theorem is proved. [L4, step 2.1, step 7.1] ∎

## Remarks

**Why the textbook route is avoided.** The usual proof of completeness takes a Cauchy sequence, extracts a convergent subsequence and appeals to [[lem-metric-cauchy-with-convergent-subsequence]]. That is correct, but it goes through sequential compactness, and the reader tracking the ledger then has to check the cost of *that* implication before believing this one. The tail-closure argument above is shorter and manifestly selects nothing: the sets $T_n$ are given by a formula, the point $p$ is produced by one existential instantiation, and the index $j$ in step 7.1 by another.

**Neither converse holds.** A complete metric space need not be totally bounded and need not be compact ($\mathbb{R}$ is complete and unbounded), and a totally bounded space need not be compact ([[fs-totally-bounded-implies-compact]], [[cex-totally-bounded-not-compact]]). What is true is that the two together are equivalent to compactness, and the missing direction is [[thm-complete-and-totally-bounded-implies-compact]], which is where a choice principle finally has to be spent.
