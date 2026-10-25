---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa.json
  precheck: pass
id: ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa
kind: example
title: "Adding a sink turns the published prefix automaton for avoiding `11` into a DFA"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-published-prefix-automata-extend-to-factor-avoidance-dfas]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.7 and Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Example

Let $B=\{11\}$ over the alphabet $\{0,1\}$. The published proper-prefix state
set is
$$ S_B=\{\varepsilon,1\}. $$
Adjoin a sink state $\bot$, keep $\varepsilon$ and $1$ accepting, and define
the transitions by
$$ \delta(\varepsilon,0)=\varepsilon,\qquad \delta(\varepsilon,1)=1, $$
$$ \delta(1,0)=\varepsilon,\qquad \delta(1,1)=\bot,\qquad \delta(\bot,0)=\bot,\qquad \delta(\bot,1)=\bot. $$

This DFA accepts exactly the binary words with no factor `11`.

## Facts & Assumptions

**Given:** The forbidden-factor set $B=\{11\}$ over $\{0,1\}$.

[L1] The published prefix automaton extends canonically to a DFA for the factor-avoidance language by adjoining a sink and declaring the states in $S_B$ accepting, by [[prop-published-prefix-automata-extend-to-factor-avoidance-dfas]].

## Verification

**Proof technique:** direct.

1.1 The only proper prefixes of the forbidden word `11` are $\varepsilon$ and `1`, so these are exactly the nonsink states. The missing transition is from `1` on input `1`, and it must go to the sink because the extended word `11` already contains the forbidden factor. [given]

1.2 Once the machine reaches $\bot$, the forbidden factor has already appeared, so looping at $\bot$ on both letters is the correct total completion. The words $\varepsilon$, `1`, `10`, and `1010` stay in the accepting states, while `11` and `1011` reach $\bot$. [given]

2.1 This is exactly the sink-state completion described by [L1], so the resulting DFA recognizes the binary words avoiding `11`. [L1, step 1.1, step 1.2] ∎

## Remarks

The arrow entering $\varepsilon$ marks the initial state; double circles mark
accepting states. The single-circle state $\bot$ is the rejecting sink.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,circle,double,double distance=2pt,minimum size=11mm] (e) at (0,0) {$\varepsilon$};
\node[draw,circle,double,double distance=2pt,minimum size=11mm] (one) at (3,0) {$1$};
\node[draw,circle,minimum size=11mm] (sink) at (6,0) {$\bot$};
\draw[->] (-1.5,0) -- (e);
\path[->] (e) edge[loop above] node {$0$} (e)
               edge[bend left=20] node[above] {$1$} (one)
          (one) edge[bend left=20] node[below] {$0$} (e)
                 edge node[above] {$1$} (sink)
          (sink) edge[loop above] node {$0,1$} (sink);
\end{tikzpicture}
```

These are exactly the six transitions displayed in the example: the two
letters share the sink loop. Reading a second consecutive $1$ enters $\bot$,
and subsequent letters keep the run there. The verification above is
independent of this illustration.
