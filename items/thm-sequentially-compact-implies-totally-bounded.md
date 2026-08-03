---
id: thm-sequentially-compact-implies-totally-bounded
kind: theorem
title: "A sequentially compact metric space is totally bounded, proved from the axiom of dependent choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness-variants, def-totally-bounded, def-dependent-choice, cor-archimedean-reciprocal, thm-of-archimedean, def-metric-ball, def-cauchy-in-metric, lem-metric-convergent-implies-cauchy, def-metric-convergence, def-sequence, lem-index-map-grows, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "sequentially compact implies totally bounded (DC)"
proof_strategy: contradiction
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let $(X,d)$
be a sequentially compact metric space ([[def-metric-compactness-variants]],
[[def-metric-space]]). Then $(X,d)$ is totally bounded
([[def-totally-bounded]]).

**What is claimed about the cost, and what is not.** Claimed: the proof below is
carried out in $\mathrm{ZF} + \mathrm{DC}$, and $\mathrm{DC}$ is used exactly
once, at step 5.1. Not claimed: that $\mathrm{DC}$ is *necessary* for the
statement. Establishing necessity would mean separating the statement from ZF,
which is an independence result, and this library proves none. The reason
countable choice is not used instead is that the point added at each stage has to
be at distance at least $\varepsilon$ from the points already produced, so the
set it is drawn from depends on the earlier stages; the first remark below spells
that out.

## Facts & Assumptions

**Given:** A sequentially compact metric space $(X,d)$, and the Axiom of Dependent Choice.

[L1] $(X,d)$ is sequentially compact: every sequence in $X$ has a subsequence converging to a point of $X$, along a strictly increasing index map ([[def-metric-compactness-variants]], [[def-sequence]], [[def-metric-convergence]], [[lem-index-map-grows]]).

[L2] $(X,d)$ is totally bounded when for every real $\varepsilon > 0$ there is a finite $F \subseteq X$, empty or listable, with $X = \bigcup_{y \in F} B(y,\varepsilon)$; equivalently, when for every real $\varepsilon > 0$ some finite list $y_0, \dots, y_{m-1}$ of points of $X$ satisfies: every $x \in X$ has $d(x,y_i) < \varepsilon$ for some $i < m$ ([[def-totally-bounded]], [[def-metric-ball]]).

[L3] Dependent choice: for a nonempty set $S$, a relation $R$ on $S$ with every element $R$-related to some element, and any $a \in S$, there is a sequence $(t_n)$ in $S$ with $t_0 = a$ and $t_n \mathbin{R} t_{n+1}$ for every $n$ ([[def-dependent-choice]]).

[L4] A convergent sequence is Cauchy: if $y_{n_j} \to p$ then for every rational $\varepsilon > 0$ there is $K$ with $d(y_{n_j}, y_{n_l}) < \varepsilon$ for all $j,l \ge K$ ([[lem-metric-convergent-implies-cauchy]], [[def-cauchy-in-metric]]).

[L5] A metric is symmetric, nonnegative and satisfies the triangle inequality ([[def-metric-space]]).

[L6] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$, and $1/N$ is a positive rational ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(X,d)$ is sequentially compact and not totally bounded, and fix a real $\varepsilon > 0$ for which no finite subset of $X$ is an $\varepsilon$-net. [L1, L2, assume-contra]

2.1 Then $X \ne \emptyset$, since for $X = \emptyset$ the empty set is an $\varepsilon$-net. [L2, step 1.1]

3.1 Let $S$ be the set of $\varepsilon$-separated finite tuples in $X$, that is of functions $t : m \to X$ with $m \in \mathbb{N}$ and $d(t(i),t(j)) \ge \varepsilon$ whenever $i < j < m$; the empty function, with $m = 0$, lies in $S$, so $S \ne \emptyset$. [L5, step 2.1]

4.1 Let $t \mathbin{R} t'$ mean that $t' : m+1 \to X$ extends $t : m \to X$ by one term with $d(t'(m), t(i)) \ge \varepsilon$ for every $i < m$; then $R$ is a relation on $S$ and every $t \in S$ is $R$-related to some element of $S$, because the finite set $\{t(0), \dots, t(m-1)\}$ is not an $\varepsilon$-net, so some $x \in X$ has $d(x,t(i)) \ge \varepsilon$ for every $i < m$, and the extension of $t$ by $x$ lies in $S$. [L2, L5, step 3.1]

5.1 Dependent choice, applied to $S$, to $R$ and to the empty function as starting point, yields a sequence $(t_n)$ in $S$ with $t_0$ the empty function and $t_n \mathbin{R} t_{n+1}$ for every $n$; this is the only appeal to a choice principle in the proof. [L3, step 4.1]

6.1 Each $t_n$ has domain $n$ and $t_{n+1}$ restricted to $n$ is $t_n$, both by induction on $n$ from the definition of $R$; so $y_n := t_{n+1}(n)$ defines a sequence $(y_n)$ in $X$, and for $i < j$ both $y_i = t_{j+1}(i)$ and $y_j = t_{j+1}(j)$ hold, whence $d(y_i,y_j) \ge \varepsilon$. [L5, step 5.1]

7.1 Sequential compactness gives a strictly increasing $j \mapsto n_j$ and $p \in X$ with $y_{n_j} \to p$; that subsequence is therefore Cauchy, so, taking a natural $N \ge 1$ with $1/N < \varepsilon$ and testing the Cauchy condition at the positive rational $1/N$, there is $K \in \mathbb{N}$ with $d(y_{n_j}, y_{n_l}) < 1/N < \varepsilon$ for all $j,l \ge K$. [L1, L4, L6, step 6.1]

8.1 But $n_K < n_{K+1}$, so step 6.1 gives $d(y_{n_K}, y_{n_{K+1}}) \ge \varepsilon$, contradicting step 7.1; the assumption of step 1.1 is therefore untenable, every real $\varepsilon > 0$ admits a finite $\varepsilon$-net, and $(X,d)$ is totally bounded. [L2, step 6.1, step 7.1, discharge-contradiction] ∎

## Remarks

**Why countable choice is not what this proof uses.** A natural attempt is to apply $\mathrm{AC}_\omega$ to the family whose $n$-th member is the set of $\varepsilon$-separated $n$-tuples, each of which is nonempty by the argument of step 4.1. What that returns is one $\varepsilon$-separated $n$-tuple for each $n$, with no relation whatever between the tuple chosen at $n$ and the one chosen at $n+1$: the tuples need not extend one another, need not share a single point, and nothing in the data assembles them into one $\varepsilon$-separated sequence. The relation $R$ of step 4.1 is precisely the coherence that is missing, and building a sequence along a relation is what [[def-dependent-choice]] is. This is an observation about the argument given here; it is not a proof that $\mathrm{AC}_\omega$ is insufficient for the theorem.

**The passage to a rational $\varepsilon$ in step 7.1.** Convergence and the Cauchy condition are tested against rational $\varepsilon$ in this library ([[def-metric-convergence]], [[def-cauchy-in-metric]]), while the $\varepsilon$ of step 1.1 is an arbitrary positive real. The reciprocal form of the Archimedean property supplies a positive rational $1/N$ below it ([[cor-archimedean-reciprocal]]), and the contradiction is unaffected: a Cauchy estimate at $1/N \le \varepsilon$ still contradicts a separation of at least $\varepsilon$.

**This is the only implication on the page that costs dependent choice**, and it is the reason [[thm-metric-compactness-equivalences]] carries $\mathrm{DC}$ among its hypotheses. The full accounting is [[rem-compactness-choice-ledger-metric]].
