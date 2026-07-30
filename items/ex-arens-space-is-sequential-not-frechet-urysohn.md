---
id: ex-arens-space-is-sequential-not-frechet-urysohn
kind: example
title: "Arens space $S_2$ is sequential but not Fréchet–Urysohn"
status: published
origin: session
deps: [def-frechet-urysohn-and-sequential-spaces, def-sequence-convergence-top, thm-closure-characterisation-top, lem-finite-set-has-max, thm-well-ordering-principle, thm-recursion]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Arens' space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Example

Let $S_2=\{\infty\}\cup\{x_n:n\in\mathbb N\}\cup\{x_{n,m}:n,m\in\mathbb N\}$. The $x_{n,m}$ are isolated; neighbourhoods of $x_n$ contain a tail of its row; a neighbourhood of $\infty$ contains neighbourhoods of all but finitely many $x_n$. Then $S_2$ is sequential, but is not Fréchet–Urysohn.

## Facts & Assumptions

**Given:** The displayed topology on $S_2$ and $A=\{x_{n,m}:n,m\in\mathbb N\}$.

[A1] Fréchet–Urysohn and sequential spaces have the closure and sequential-closed meanings in [[def-frechet-urysohn-and-sequential-spaces]].

[L1] Closure is characterized by meeting every neighbourhood, and convergence by eventual membership in every neighbourhood ([[thm-closure-characterisation-top]], [[def-sequence-convergence-top]]).

[L2] Finite subsets of $\mathbb N$ have maxima, nonempty subsets have least members, and recursion produces sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).


## Verification

**Proof technique:** constructive.

1.1 Every neighbourhood of $\infty$ meets $A$, so $\infty\in\overline A$ by [L1]. No sequence in $A$ converges to $\infty$: if it visits a row infinitely often, a neighbourhood omitting that row defeats convergence. If it visits every row finitely, use [L2] to put the threshold on each visited row one above the maximum selected second coordinate, and threshold $0$ on every unvisited row. The resulting neighbourhood omits the whole sequence. [L1, L2, construct]

1.2 Let $C$ be sequentially closed. An isolated closure point lies in $C$. If $x_n\in\overline C$, then $C$ meets its $n$-th row arbitrarily far out; recursion and least elements from [L2] give a sequence of row points in $C$ converging to $x_n$, so $x_n\in C$. If $\infty\in\overline C$, then infinitely many $x_n$ lie in $C$: otherwise omit the finitely many rows whose centres lie in $C$. In every remaining row, the preceding conclusion shows that $C$ has only finitely many points; using their maximum as in [L2] gives a canonical tail disjoint from $C$. These tails form a neighbourhood of $\infty$ disjoint from $C$, contradicting $\infty\in\overline C$. [A1, L1, L2]

2.1 Hence $S_2$ is not Fréchet–Urysohn. [step 1.1, A1]

2.2 The indices $n$ with $x_n\in C$ form an infinite subset of $\mathbb N$; list them increasingly using [L2]. The resulting sequence of row centres converges to $\infty$, so sequential closedness puts $\infty$ in $C$. Thus every sequentially closed $C$ contains all its closure points and is closed. Therefore $S_2$ is sequential. [step 1.2, A1, L2]

3.1 The two conclusions prove the example. [step 2.1, step 2.2, discharge-construct] ∎
