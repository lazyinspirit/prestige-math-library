---
id: rem-expander-sync-critical-window-discussion
title: Critical-window gap and vanishing epsilon in the authors’ method
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - thm-expander-sync-thm-1-2
  - thm-expander-prereq-connectivity-window-input
  - def-expander-sync-erdos-renyi
  - def-expander-sync-global-synchrony
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - math:def-natural-logarithm
  - math:thm-natural-logarithm-laws
  - math:thm-logarithm-slower-than-every-positive-power
dependency_roles:
  thm-expander-sync-thm-1-2: mathematical-premise
  thm-expander-prereq-connectivity-window-input: mathematical-premise
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
formulation_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-global-synchrony
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - math:def-natural-logarithm
argument_deps:
  - thm-expander-sync-thm-1-2
  - thm-expander-prereq-connectivity-window-input
  - def-expander-sync-erdos-renyi
  - def-expander-sync-global-synchrony
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - math:thm-natural-logarithm-laws
  - math:thm-logarithm-slower-than-every-positive-power
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 38, Section 7, opening paragraph
      statement: The authors identify closing the gap between connectivity and
        synchronization at pn = log n + c_n with c_n much larger than 1 as a
        challenge. Their theorem uses c_n = epsilon log n for fixed positive
        epsilon; they say careful examination of their computations allows
        epsilon to tend to zero, but they establish no rate and say this would
        not be sharp.
      hypotheses: The discussion concerns the Erdős–Rényi graph G(n,p), with n tending
        to infinity and the stated parameter regimes.
      reading_limits: Inspected the original PDF text on page 38 for this discussion.
        The citation attributes the authors’ remarks; the diagonal argument
        below is local and does not assert that their computations were checked.
dependency_level: 12
---

## Statement

Assume countable choice. Write $G(n,p)$ for the simple graph on $n$ labelled vertices whose possible edges are independently present with probability $p$. A graph is globally synchronizing when, for the homogeneous Kuramoto system in the rotating frame, a uniformly chosen initial phase state converges to a fully synchronized state with probability one. An event holds with high probability when its probability tends to one as $n\to\infty$.

There is a positive sequence $\varepsilon_n\to0$ for which $c_n=\varepsilon_n\log n\to+\infty$ and $G(n,(\log n+c_n)/n)$ is globally synchronizing with high probability. This is an existence statement; it supplies no convergence rate and does not establish synchronization for every sequence $c_n\to+\infty$.

The authors identify closing the gap between connectivity and synchronization at $pn=\log n+c_n$ with $c_n\gg1$ as a natural challenge. Their theorem uses $c_n=\varepsilon\log n$ for fixed $\varepsilon>0$. They say that a careful look at their computations allows $\varepsilon$ to tend to zero, but they establish no convergence rate and say that this would not be sharp. Here $c_n\gg1$ means $c_n\to+\infty$.

## Statement references

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[math:def-countable-choice]]

[[math:def-connected-graph-and-connected-component]]

[[math:def-natural-logarithm]]

## Facts & Assumptions

[F1] Under countable choice, for every fixed $\varepsilon>0$ and every admissible sequence $p(n)\ge(1+\varepsilon)\log n/n$ eventually, $G(n,p(n))$ is globally synchronizing with high probability ([[thm-expander-sync-thm-1-2]]).

[F2] If $p_n=(\log n+c_n)/n\in[0,1]$ eventually and $c_n\to+\infty$, then $G(n,p_n)$ is connected with high probability ([[thm-expander-prereq-connectivity-window-input]]). Connectedness has the path-based meaning of [[math:def-connected-graph-and-connected-component]].

[F3] The graph law, global-synchrony convention and high-probability limit are those specified in the Statement ([[def-expander-sync-erdos-renyi]], [[def-expander-sync-global-synchrony]], [[def-expander-prereq-asymptotic-quantifiers]]).

[F4] Countable choice permits simultaneous selection of one sufficiently large integer from each of the countably many nonempty sets of valid cutoffs ([[math:def-countable-choice]]).

[F5] The symbol $\log$ denotes the natural logarithm, the inverse of the real exponential on $(0,\infty)$ ([[math:def-natural-logarithm]]).

[F6] The natural logarithm is strictly increasing on $(0,\infty)$, maps this interval onto $\mathbb R$, and satisfies $\log 1=0$ ([[math:thm-natural-logarithm-laws]]).

[F7] One has $\log n/n\to0$ as $n\to\infty$, by the logarithm growth theorem with exponent $1$ ([[math:thm-logarithm-slower-than-every-positive-power]]).

## Proof

**Given:** Countable choice and the fixed-$\varepsilon$ theorem in [F1].

**Goal:** Construct the sequence in the Statement and identify the scope of the connectivity comparison.

1.1 For each positive integer $k$, [F6] gives $\log n\ge0$ for $n\ge1$, and [F7] gives $(1+1/k)\log n/n\to0$; hence these quantities belong to $[0,1]$ eventually. Put $p_{n,k}=(1+1/k)\log n/n$ for all sufficiently large $n$, and choose any values in $[0,1]$ at earlier indices. By [F1], the probability that $G(n,p_{n,k})$ is not globally synchronizing tends to zero. Thus there is a cutoff $M_k$ beyond which this probability is at most $1/k$ and $p_{n,k}\in[0,1]$. By [F4], choose such cutoffs for all $k$. For each $k$, the range assertion in [F6] supplies a real $x_k>0$ with $\log x_k=k^2$, and monotonicity gives $\log n\ge k^2$ for every integer $n\ge x_k$. Thus we can choose strictly increasing integers $N_k\ge M_k$ with $N_k\ge k$ and $\log N_k\ge k^2$. [F1, F3, F4, F6, F7, choose]

2.1 For $N_k\le n<N_{k+1}$ set $\varepsilon_n=1/k$; define the finitely many earlier terms to be any positive values giving admissible probabilities. Since $N_k$ is strictly increasing and unbounded, the corresponding $k$ tends to infinity with $n$. Therefore $\varepsilon_n\to0$, while monotonicity in [F6] gives $\varepsilon_n\log n\ge(\log N_k)/k\ge k$ on the $k$th block. On that block the failure probability is at most $1/k$, so it tends to zero. This proves the asserted synchronization and $c_n\to+\infty$; [F2] also gives connectivity with high probability along this particular sequence. The choices of cutoffs give no explicit rate and make no assertion for an arbitrary diverging $c_n$. [F2, F3, F6, step 1.1, algebra] ∎

## Source notes

The final paragraph of the Statement attributes the authors’ discussion to the cited article. The proof above is a diagonal consequence of the completed fixed-$\varepsilon$ theorem; it does not reconstruct or verify the authors’ proposed use of their computations. Connectivity is used only for comparison, not as a premise implying synchronization.
