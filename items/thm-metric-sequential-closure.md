---
id: thm-metric-sequential-closure
kind: theorem
title: "A point lies in the closure of $A$ iff some sequence in $A$ converges to it, and a set is closed iff it is sequentially closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-closure-characterisation, def-metric-convergence,
       lem-metric-ball-neighbourhood-base, def-countable-choice, def-metric-topology,
       def-metric-interior-closure-boundary, thm-metric-open-set-algebra,
       def-metric-ball, lem-of-inverse-positive, lem-of-naturals-positive,
       lem-metric-nonnegativity, def-natural-numbers, def-metric-space,
       lem-rat-embeds-dense, def-real-limit]
justified_by: []
aliases: []
landmark: true
short: "closure = sequential closure"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Sequentially closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$, let
$x \in X$ and let $F \subseteq X$. Call $F$ **sequentially closed** when every
sequence in $F$ that converges in $X$ has its limit in $F$. Then:

1. $x \in \overline{A}$ ([[def-metric-interior-closure-boundary]]) if and only if
   there is a sequence $(a_k)$ with $a_k \in A$ for every $k$ and $a_k \to x$ in
   $(X,d)$ ([[def-metric-convergence]]).
2. $F$ is closed ([[def-metric-topology]]) if and only if $F$ is sequentially
   closed.

**The Axiom of Countable Choice is used, once.** The direction of claim 1 that
manufactures a sequence out of adherence makes one choice per natural number, and
that is exactly $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The converse
direction, and the direction of claim 2 that goes from closed to sequentially
closed, are choice free. This is flagged at the step that spends it.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a subset $F \subseteq X$; for $n \in \mathbb{N}$ write $A_n := B\big(x, 1/(n+1)\big) \cap A$.

[A1] Closure: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every real $r > 0$ ([[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[A2] Convergence in $(X,d)$: $a_k \to x$ means that for every rational $\varepsilon > 0$ there is $K$ with $d(a_k,x) < \varepsilon$ for all $k \ge K$, and it is enough to produce such a $K$ for every REAL $\varepsilon > 0$, since below any positive real lies a positive rational ([[def-metric-convergence]], [[def-real-limit]], [[lem-rat-embeds-dense]], [[lem-metric-nonnegativity]]); and $d(u,v) = d(v,u)$ for all $u, v \in X$, which is the symmetry axiom (M2) ([[def-metric-space]]).

[L1] The balls $B(x,1/n)$, $n \ge 1$, are open, contain $x$, and form a neighbourhood base at $x$: every open $U \ni x$ contains one of them ([[lem-metric-ball-neighbourhood-base]]).

[L2] Balls are open ([[thm-metric-open-set-algebra]]), and $B(x,s) \subseteq B(x,t)$ for $0 < s \le t$ ([[def-metric-ball]]).

[L3] Canonical naturals and reciprocals: for naturals $1 \le m \le p$ one has $0 < m \cdot 1_{\mathbb{R}} \le p \cdot 1_{\mathbb{R}}$ and hence $0 < 1/p \le 1/m$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]); and $\mathbb{N}$ contains $0$, so $n + 1 \ge 1$ for every $n \in \mathbb{N}$ ([[def-natural-numbers]]).

[L4] Countable choice: for a family $(A_n)_{n \in \mathbb{N}}$ of nonempty sets there is a function $n \mapsto a_n$ with $a_n \in A_n$ for every $n$ ([[def-countable-choice]]).

[L5] The closure is the smallest closed superset, so $F$ is closed if and only if $F = \overline{F}$ ([[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a_k)$ is a sequence with $a_k \in A$ for every $k$ and $a_k \to x$, and let $r > 0$ be an arbitrary real; then there is $K$ with $d(a_k,x) < r$ for all $k \ge K$, so $d(x,a_K) = d(a_K,x) < r$ by the symmetry axiom (M2) of [A2] and hence $a_K \in B(x,r) \cap A$, and since $r$ was arbitrary $x \in \overline{A}$. [A1, A2]

1.2 Suppose $x \in \overline{A}$; then for every $n \in \mathbb{N}$ the radius $1/(n+1)$ is a positive real and $A_n = B(x,1/(n+1)) \cap A$ is nonempty, so countable choice supplies a sequence $(a_n)$ with $a_n \in A_n \subseteq A$ for every $n$. [A1, L3, L4, choose]

2.1 That sequence converges to $x$: given a real $\varepsilon > 0$, the ball $B(x,\varepsilon)$ is open and contains $x$, so there is a natural $N \ge 1$ with $B(x,1/N) \subseteq B(x,\varepsilon)$; for every $n \ge N$ we have $n + 1 \ge N$, hence $1/(n+1) \le 1/N$ and $a_n \in B(x,1/(n+1)) \subseteq B(x,1/N) \subseteq B(x,\varepsilon)$, that is $d(x,a_n) < \varepsilon$. [step 1.2, A2, L1, L2, L3]

2.2 If $F$ is closed and $(a_k)$ is a sequence in $F$ converging to some $x \in X$, then $x \in \overline{F}$ by step 1.1 applied with $A = F$, and $\overline{F} = F$ because $F$ is closed; so $x \in F$ and $F$ is sequentially closed. [step 1.1, L5]

3.1 Claim 1 holds: step 1.1 gives the implication from a convergent sequence in $A$ to adherence, and steps 1.2 and 2.1 give the converse by producing such a sequence. [step 1.1, step 1.2, step 2.1]

4.1 If $F$ is sequentially closed, let $x \in \overline{F}$; by claim 1 there is a sequence in $F$ converging to $x$, so $x \in F$, whence $\overline{F} \subseteq F$; the reverse inclusion always holds, so $F = \overline{F}$ and $F$ is closed. [step 3.1, L5]

5.1 Claim 2 holds by steps 2.2 and 4.1, and claim 1 by step 3.1. [step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Where first countability enters.** Step 2.1 is the only place, and it uses [[lem-metric-ball-neighbourhood-base]] to convert an arbitrary ball around $x$ into one of the countably many balls $B(x,1/N)$. Nothing here should be read as saying that sequences describe the closure in a general topological space; the tool that always works there is the net, and that is a later page.
- **The indexing is from $0$.** The radii used are $1/(n+1)$ for $n \in \mathbb{N}$, not $1/n$, precisely because $\mathbb{N}$ contains $0$ here ([[def-natural-numbers]], [[def-sequence]]) and $1/0$ does not exist. A version of this proof copied from a text that indexes sequences from $1$ has to be reindexed, and this is the reindexing.
- **The use of choice is not concealed.** It enters at exactly one place, namely step 1.2, which makes one selection per natural number, and that is what $\mathrm{AC}_\omega$ licenses ([[def-countable-choice]]). Whether some proof in ZF alone reaches the same conclusion for arbitrary metric spaces is a question this library does not settle; what it does is record the assumption at the step that spends it.
