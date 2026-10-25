---
id: thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set
kind: theorem
title: "Under dependent choice a space is perfectly normal if and only if it is normal and every closed set is a zero set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-normal-and-t4-spaces,
       def-dependent-choice, def-countable-choice, def-series, thm-geometric-series,
       def-continuous-map-top, thm-continuity-characterisations-top, lem-of-abs-value,
       lem-of-sequence-basics, thm-nonnegative-series-bounded-partial-sums]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal iff normal + closed sets are zero sets (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Perfectly normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space#Perfectly_normal_spaces_and_completely_normal_spaces"
    - title: "J. Munkres, Topology, 2nd ed., §33, Exercise 6"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space. Then $X$ is perfectly normal
([[def-completely-normal-and-perfectly-normal-spaces]]) if and only if $X$ is
normal ([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a zero
set ([[def-zero-sets-and-cozero-sets]]).

**Only the forward direction spends a choice principle beyond the dependent
choice already inside Urysohn's lemma.** Producing a Urysohn function for
every level of a countable presentation $C = \bigcap_n U_n$, all at once, is in
form an application of the Axiom of Countable Choice ([[def-countable-choice]]);
the argument below performs it as a direct instance of dependent choice itself,
using a relation that does not depend on the previous term, so no hypothesis
beyond DC is added and none is hidden. The converse direction uses no choice
principle at all.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for the forward direction, $X$ perfectly normal; for the converse, $X$ normal with every closed subset a zero set.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] $X$ is perfectly normal exactly when $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A \subseteq X$ is a $G_\delta$ set when $A = \bigcap_{n \in \mathbb{N}} V_n$ for some open sets $V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] For continuous $k : X \to \mathbb{R}$, $Z(k) := k^{-1}(\{0\})$; every zero set is closed and a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]).

[L4] The geometric series: $\sum_{k \ge 0} r^k = 1/(1-r)$ for real $|r|<1$ ([[thm-geometric-series]]); in particular $\sum_{k=0}^{\infty} 2^{-(k+1)} = \tfrac12 \sum_{k=0}^{\infty} 2^{-k} = \tfrac12 \cdot \dfrac{1}{1-\frac12} = 1$, a convergent series of positive reals ([[def-series]]).

[L5] The $M$-test: if $(g_n)$ are continuous real-valued functions on $X$, $(M_n)$ nonnegative reals with $|g_n(x)| \le M_n$ for every $x$ and $n$, and $\sum M_n$ converges, then $\sum g_n(x)$ converges for every $x \in X$ and $F := \sum_n g_n$ is continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Scalar multiple of a continuous map is continuous: for continuous $h : X \to \mathbb{R}$ and real $c > 0$, $x \mapsto c\, h(x)$ is continuous — given $x_0 \in X$ and real $\varepsilon>0$, continuity of $h$ at $x_0$ with tolerance $\varepsilon/c$ gives open $U \ni x_0$ with $|h(x)-h(x_0)| < \varepsilon/c$ on $U$, whence $|c\,h(x) - c\,h(x_0)| = c\,|h(x)-h(x_0)| < \varepsilon$ on $U$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[lem-of-abs-value]]).

[L7] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \ge c$ for all $k$ beyond some index, then $a \ge c$ ([[lem-of-sequence-basics]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is perfectly normal. [assume-hyp]

1.2 Assume instead that $X$ is normal and every closed subset of $X$ is a zero set. [assume-hyp]

2.1 Under step 1.1: by [A2], $X$ is normal and every closed subset of $X$ is a $G_\delta$; in particular $X$ is normal. [step 1.1, A2]

2.2 Under step 1.2: let $C \subseteq X$ be closed; by hypothesis $C$ is a zero set, hence $G_\delta$ by [L3]. Since $C$ was arbitrary, every closed subset of $X$ is $G_\delta$; with $X$ normal by hypothesis, $X$ is perfectly normal by [A2]. [step 1.2, L3, A2]

3.1 Under step 1.1: let $C \subseteq X$ be closed; by step 2.1, $C$ is $G_\delta$, so by [L1] fix open sets $(U_n)_{n \in \mathbb{N}}$ with $C = \bigcap_{n} U_n$. [step 2.1, L1, choose]

4.1 Under step 1.1: put $P := \{\, (n,h) : n \in \mathbb{N},\ h : X \to [0,1] \text{ continuous},\ C \subseteq h^{-1}(\{0\}),\ X \setminus U_n \subseteq h^{-1}(\{1\}) \,\}$, and for $(n,h), (n',h') \in P$ say $(n,h) \mathbin{R} (n',h')$ when $n'=n+1$. Since $C \subseteq U_0$ (step 3.1), $C$ and $X \setminus U_0$ are disjoint closed sets ($X \setminus U_0$ closed, $U_0$ being open); by [L2] and step 2.1, fix $h_0$ with $(0,h_0) \in P$. [step 2.1, step 3.1, L2, choose, construct]

4.2 Under step 1.1: for every $(n,h) \in P$: $C \subseteq U_{n+1}$ (step 3.1), so $C$ and $X \setminus U_{n+1}$ are disjoint closed sets; by [L2] and step 2.1 there is $h'$ with $(n+1,h') \in P$, so $(n,h) \mathbin{R} (n+1,h')$. Hence $R$ is entire on $P$. [step 2.1, step 3.1, L2, choose]

5.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 4.2; by [A1] applied with $a := (0,h_0)$, there is a sequence $\big((m_k,H_k)\big)_{k \in \mathbb{N}}$ with $(m_0,H_0) = (0,h_0)$ and $(m_k,H_k) \mathbin{R} (m_{k+1},H_{k+1})$ for every $k$. As $(n,h) \mathbin{R} (n',h')$ forces $n'=n+1$, induction gives $m_k = k$ for every $k$; so $H_k : X \to [0,1]$ is continuous with $C \subseteq H_k^{-1}(\{0\})$ and $X \setminus U_k \subseteq H_k^{-1}(\{1\})$, for every $k \in \mathbb{N}$. [step 4.1, step 4.2, A1, construct]

6.1 Under step 1.1: for $k \in \mathbb{N}$ put $g_k := 2^{-(k+1)} H_k$; by [L6] each $g_k$ is continuous, and $|g_k(x)| = 2^{-(k+1)} H_k(x) \le 2^{-(k+1)} =: M_k$ for every $x \in X$, since $H_k(x) \in [0,1]$; and $\sum M_k$ converges by [L4]. [step 5.1, L4, L6, construct]

7.1 Under step 1.1: by [L5] applied to $(g_k)$ and $(M_k)$ of step 6.1: for every $x \in X$ the series $\sum g_k(x)$ converges, and $f := \sum_{k=0}^{\infty} g_k$ is a continuous map $X \to \mathbb{R}$. [step 6.1, L5, construct]

7.2 Under step 1.1: for $x \notin C$: since $C = \bigcap_n U_n$ (step 3.1), there is a natural $m$ with $x \notin U_m$, so $x \in X \setminus U_m \subseteq H_m^{-1}(\{1\})$ (step 5.1), giving $H_m(x)=1$ and $g_m(x) = 2^{-(m+1)}$. [step 3.1, step 5.1, step 6.1, choose]

8.1 Under step 1.1: for $x \in C$: $H_k(x) = 0$ for every $k$ (step 5.1), so $g_k(x)=0$ for every $k$ (step 6.1), and $f(x) = \sum_k 0 = 0$. [step 5.1, step 6.1, step 7.1]

8.2 Under step 1.1, continuing from step 7.2: every term $g_k(x) \ge 0$, since $H_k(x) \in [0,1]$; so by [L8] the partial sums $s_N(x) := \sum_{k<N} g_k(x)$ satisfy $s_N(x) \ge g_m(x) = 2^{-(m+1)}$ for every $N > m$, and $s_N(x) \to f(x)$ by step 7.1; so [L7] gives $f(x) \ge 2^{-(m+1)} > 0$. [step 7.2, step 7.1, L7, L8]

9.1 Under step 1.1: steps 8.1 and 8.2 give $f(x)=0$ for $x \in C$ and $f(x) \ne 0$ for $x \notin C$, so $C = f^{-1}(\{0\}) = Z(f)$, a zero set by [L3]. Since $C$ was an arbitrary closed subset of $X$, every closed subset of $X$ is a zero set. [step 8.1, step 8.2, L3]

10.1 Steps 2.1 and 9.1 show that, under the hypothesis of step 1.1, $X$ is normal and every closed subset of $X$ is a zero set. [step 2.1, step 9.1]

11.1 Steps 10.1 and 2.2 establish the two directions of the stated equivalence. [step 10.1, step 2.2, discharge-construct] ∎

## Remarks

- **The construction of step 4.1–5.1 is exactly the standard proof that dependent choice implies countable choice**, specialised to the family of admissible Urysohn functions at each level: the relation $R$ never looks at the first coordinate's function, only at its index, so any admissible successor is accepted. This is why the theorem needs no hypothesis beyond DC, even though the step it performs — choosing one function per natural number, all at once — is the shape of $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

- **The series $\sum 2^{-(k+1)} H_k$, not $\sum 2^{-k} H_k$, is what starts at value $1$.** Indexing from $k=0$ with weight $2^{-(k+1)}$ makes the total weight exactly $1$ and keeps every weight strictly positive, which is what step 8.2 needs to conclude $f(x) > 0$ off $C$ from a single nonzero term.

- **The converse costs nothing beyond what is already on the separation-axioms page.** "Every zero set is a $G_\delta$" is proved as part of [[def-zero-sets-and-cozero-sets]]; step 2.2 only specialises it to the closed sets that the hypothesis already promises are zero sets.
