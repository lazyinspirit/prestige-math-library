---
id: thm-kleene-normal-form
kind: theorem
title: "Kleene normal form for partial recursive functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mu-minimization-and-partial-recursive-function, def-kleene-t-predicate-and-output-function]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Zach, Computability Theory"
      url: "https://builds.openlogicproject.org/content/computability/computability-theory/computability-theory.pdf"
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
---

## Statement

For every partial recursive function $f:\mathbb N\rightharpoonup\mathbb N$,
there exists a natural number $e$ such that for every input $x$:

- if $f(x)$ is defined, then
  $$ f(x)=U\bigl(\mu s\,\tau_T(e,x,s)\bigr), $$
- and if $f(x)$ is undefined, then there is no $s$ with $T(e,x,s)$.

Here $T$, its numeric zero-test $\tau_T$, and $U$ are the primitive recursive objects from
[[def-kleene-t-predicate-and-output-function]].

## Facts & Assumptions

**Given:** A partial recursive function $f:\mathbb N\rightharpoonup\mathbb N$.

[L1] Partial recursive functions are generated from the initial arithmetic functions by composition, primitive recursion, and unbounded minimization, by [[def-mu-minimization-and-partial-recursive-function]].

[L2] The relation $T(e,x,s)$ says that $s$ codes a complete halting computation history for the machine coded by $e$ on input $x$; its numeric zero-test satisfies $\tau_T(e,x,s)=0$ exactly when $T(e,x,s)$; and $U(s)$ reads the halting output from that history, by [[def-kleene-t-predicate-and-output-function]].

## Proof

**Proof technique:** direct.

1.1 By [L1], the function $f$ is presented by a finite derivation from the initial functions using composition, primitive recursion, and minimization. Build a machine for that derivation by structural induction. The zero, successor, and projection functions have immediate machines. For composition, run the machines for the inner functions in sequence and feed their outputs to the outer machine; divergence of any required subcomputation propagates. For primitive recursion, store the parameters and previous value and iterate the step machine from $0$ to the recursion argument. For minimization, evaluate the search function at $0,1,2,\dots$ in order and halt at the first zero; if an earlier required value is undefined, the machine diverges as prescribed by partial minimization. Since the derivation is finite, this yields one machine code $e$ computing $f$. [L1, given, construct]

2.1 For this fixed code $e$, the predicate from [L2] recognizes exactly the coded halting histories of that machine. Therefore, if $f(x)=y$, there is at least one code $s$ with $T(e,x,s)$, and every such successful history has halting output $y$, so $U(s)=y$. If the minimization search never finds a zero or some earlier subcomputation diverges, then the machine has no halting history on $x$, so there is no $s$ with $T(e,x,s)$. [L2, step 1.1]

3.1 In the defined case, the least successful history code $\mu s\,\tau_T(e,x,s)$ exists, and step 2.1 gives $f(x)=U(\mu s\,\tau_T(e,x,s))$. In the undefined case, step 2.1 gives the second clause of the statement. [L2, step 2.1] ∎
