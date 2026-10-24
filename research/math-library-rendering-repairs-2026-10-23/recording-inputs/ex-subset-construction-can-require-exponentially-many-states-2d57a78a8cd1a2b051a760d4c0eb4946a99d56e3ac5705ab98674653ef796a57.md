---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-subset-construction-can-require-exponentially-many-states.json
  precheck: pass
id: ex-subset-construction-can-require-exponentially-many-states
kind: example
title: "A three-state NFA whose equivalent DFA needs four states"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-subset-construction-dfa, prop-subset-construction-can-require-exponentially-many-states]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Let $L\subseteq\{0,1\}^*$ be the language of words whose second symbol from the
end is $1$.

An NFA for $L$ has three states: a start state that loops on both symbols, a
state entered when the machine guesses that two symbols remain and the current
symbol is $1$, and an accepting state reached after one more symbol. The subset
construction on this NFA produces four reachable subsets.

## Facts & Assumptions

**Given:** The language of words over $\{0,1\}$ whose second symbol from the end is $1$.

[L1] By [[def-subset-construction-dfa]], the subset construction turns each reachable set of NFA states into a DFA state.

[L2] By [[prop-subset-construction-can-require-exponentially-many-states]], nondeterministic branching can force a deterministic simulation to keep track of several possibilities at once.

## Verification

**Proof technique:** direct.

1.1 The three NFA states represent "still guessing", "just guessed the penultimate 1", and "accepted after one more symbol". On a word such as $010$, the machine may stay in the guessing state for the first symbol and then branch correctly at the second symbol, where the symbol $1$ really is penultimate. [given]

2.1 The reachable subsets are the four nonempty sets $\{q_0\}$, $\{q_0,q_1\}$, $\{q_0,q_2\}$, and $\{q_0,q_1,q_2\}$. They have different future acceptance behavior: the two sets containing $q_2$ accept $\varepsilon$ while the other two do not; $\{q_0,q_1\}$ accepts the one-letter suffix $0$ while $\{q_0\}$ does not; and $\{q_0,q_1,q_2\}$ accepts $0$ while $\{q_0,q_2\}$ does not. Therefore [L1] makes them four distinct DFA states. [L1, step 1.1]

3.1 This concrete four-state DFA illustrates the general phenomenon from [L2]: subset states encode simultaneous NFA possibilities. [L2, step 2.1] ∎


## Remarks

The first diagram names the three NFA states from step 1.1. An incoming arrow
marks the start state, and a double circle marks an accepting state. All NFA
transitions are shown; in particular, $q_2$ has no outgoing transitions.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,circle,minimum size=9mm] (q0) at (0,0) {$q_0$};
\node[draw,circle,minimum size=9mm] (q1) at (2.6,0) {$q_1$};
\node[draw,circle,double,minimum size=9mm] (q2) at (5.2,0) {$q_2$};
\draw[->] (-1,0) -- (q0);
\draw[->] (q0) edge[loop above] node {$0,1$} (q0);
\draw[->] (q0) -- node[above] {$1$} (q1);
\draw[->] (q1) -- node[above] {$0,1$} (q2);
\end{tikzpicture}
```

For the reachable part of its subset DFA, abbreviate
$A=\{q_0\}$, $B=\{q_0,q_1\}$, $C=\{q_0,q_2\}$, and
$D=\{q_0,q_1,q_2\}$. Each arrow applies the union-of-successors rule
from [L1]; there are no epsilon-moves here. The start state is $A$, and
exactly $C$ and $D$ accept, since exactly those subsets contain $q_2$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,circle,minimum size=9mm] (A) at (0,0) {$A$};
\node[draw,circle,minimum size=9mm] (B) at (3.6,0) {$B$};
\node[draw,circle,double,minimum size=9mm] (C) at (0,-2.6) {$C$};
\node[draw,circle,double,minimum size=9mm] (D) at (3.6,-2.6) {$D$};
\draw[->] (-1,0) -- (A);
\draw[->] (A) edge[loop above] node {$0$} (A);
\draw[->] (A) -- node[above] {$1$} (B);
\draw[->] (B) edge[bend left=15] node[above right] {$0$} (C);
\draw[->] (B) -- node[right] {$1$} (D);
\draw[->] (C) -- node[left] {$0$} (A);
\draw[->] (C) edge[bend left=15] node[below left] {$1$} (B);
\draw[->] (D) -- node[below] {$0$} (C);
\draw[->] (D) edge[loop right] node {$1$} (D);
\end{tikzpicture}
```

The prefixes $\varepsilon$, $1$, $10$, and $11$ reach $A$, $B$, $C$,
and $D$, respectively. The diagrams illustrate the state bookkeeping;
the verification above remains independent of them.
