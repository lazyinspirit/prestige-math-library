---
id: def-kleene-t-predicate-and-output-function
kind: definition
title: "Kleene's T-predicate and output function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-effective-encoding-of-turing-machines, def-natural-number-coding-of-finite-sequences, def-halting-computation-and-divergence, thm-sequence-length-and-coordinate-functions-are-primitive-recursive, lem-turing-step-coding-is-primitive-recursive, prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Richard Zach, Computability Theory"
      url: "https://builds.openlogicproject.org/content/computability/computability-theory/computability-theory.pdf"
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
---

## Definition

Fix the machine coding from [[def-effective-encoding-of-turing-machines]] and
the sequence coding from [[def-natural-number-coding-of-finite-sequences]].

For natural numbers $e,x,s$, define **Kleene's $T$-predicate**
$$ T(e,x,s) $$
to hold exactly when $s$ codes a finite sequence of configurations
$$ C_0,\dots,C_r $$
such that:

- $e$ decodes to a machine $M$,
- $C_0$ is the initial configuration of $M$ on input $x$,
- $C_{j+1}$ is obtained from $C_j$ by the coded one-step update for every
  $j<r$, and
- $C_r$ is halting.

Define the **output function**
$$ U(s) $$
as follows. If $s$ decodes to a nonempty sequence whose final entry is a
well-formed configuration code and the tape in that configuration contains a
canonical binary numeral followed by blanks, let $U(s)$ be the natural number
represented by that numeral. On every other input, set $U(s)=0$. Thus $U$
only extracts data from the final coded configuration; it does not first test
an unbounded existential claim about whether some machine and input have that
history. The output-word convention is the one fixed in
[[def-halting-computation-and-divergence]].

Define the numeric **zero-test for $T$** by
$$\tau_T(e,x,s):=\begin{cases}0,&T(e,x,s),\\1,&\text{otherwise}.\end{cases}$$

The primitive-recursive readers of
[[thm-sequence-length-and-coordinate-functions-are-primitive-recursive]] parse
the history and every configuration coordinate. A bounded universal check over
the decoded list verifies the initial configuration, each update using
[[lem-turing-step-coding-is-primitive-recursive]], and the final halting state.
Equality tests, composition, bounded search, and bounded universal
quantification preserve primitive recursiveness by
[[prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]].
The same readers locate the final configuration and perform a bounded scan of
its finitely encoded tape segment, checking and evaluating the canonical binary
numeral. Consequently the combined history-validity zero-test $\tau_T$ and the
final-output reader $U$ are primitive recursive, and $T$ is a
primitive-recursive relation through its zero-test.

## Remarks

- $T(e,x,s)$ says that $s$ is a complete halting computation history, not just
  one legal step.

- The least $s$ satisfying $T(e,x,s)$ is the first successful coded history in
  the usual numeric order, not necessarily the shortest history.
