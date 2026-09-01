---
id: def-dtime-ntime-dspace-and-nspace
kind: definition
title: "The classes DTIME, NTIME, DSPACE, and NSPACE"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-asymptotic-resource-comparison, def-time-and-space-constructible-function, def-multitape-and-nondeterministic-machines, def-nondeterministic-accepting-computation]
justified_by: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Eric Blais, Models of Computation, 7. Time Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/time"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Definition

Let $t,s:\mathbb N\to\mathbb N$.

A language $L\subseteq\Sigma^*$ belongs to **DTIME$(t(n))$** when there exists
a deterministic multitape Turing machine deciding $L$ in time $O(t(n))$.

A **nondeterministic $k$-tape Turing machine** is obtained from the deterministic
$k$-tape model of [[def-multitape-and-nondeterministic-machines]] by replacing
its transition function with a finite-valued transition map
$$\Delta_k:(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma^k\longrightarrow\mathcal P_{\mathrm{fin}}(Q\times\Gamma^k\times\{L,R\}^k).$$
One branch chooses one instruction from the finite set at each step.

A language $L\subseteq\Sigma^*$ belongs to **NTIME$(t(n))$** when there exists
such a nondeterministic $k$-tape machine $N$ for which:

- every branch of $N$ on every input of length $n$ halts within $O(t(n))$
  steps, and
- some branch of $N$ accepts exactly on the words of $L$, in the same
  existential sense as [[def-nondeterministic-accepting-computation]].

A language $L\subseteq\Sigma^*$ belongs to **DSPACE$(s(n))$** when a
deterministic multitape decider uses worst-case space $O(s(n))$. It belongs to
**NSPACE$(s(n))$** when a nondeterministic multitape machine accepts exactly the
words in $L$, every branch halts, and the maximum number of visited cells over
all branches and inputs of length $n$ is $O(s(n))$.

## Remarks

- These are language classes. Function classes are expressed separately by
  saying that a machine computing the function does so within a stated bound.

- The chosen machine model is multitape because it is convenient for
  programming; later theorems show that polynomial-time and polynomial-space
  notions do not depend on that choice.
