---
id: def-a-sieve-family-and-its-intersections
kind: definition
title: "A finite family $(A_i)_{i \\in I}$ of subsets of a finite set $X$, the intersections $A_J$ for $J \\subseteq I$, and the convention $A_\\varnothing = X$"
status: published
origin: session
deps: [def-finite-cardinality, thm-subset-of-a-finite-set, cor-cardinality-of-the-power-set,
       def-binomial-coefficient, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 2"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

A **sieve family** consists of a finite set $X$, called the **ambient set**, a
finite set $I$, called the **index set**, and a family $(A_i)_{i \in I}$ of
subsets of $X$, that is a function $I \to \mathcal{P}(X)$
([[def-countable]], [[def-finite-cardinality]]). For $J \subseteq I$ set

$$A_J \;:=\; \begin{cases} \displaystyle\bigcap_{i \in J} A_i, & J \ne \varnothing,\\[4pt] X, & J = \varnothing,\end{cases}$$

and write $U := \bigcup_{i \in I} A_i$ for the union of the family.

**Why the ambient set has to be named, and why $A_\varnothing := X$ is a
stipulation.** For $J \ne \varnothing$ the intersection $\bigcap_{i \in J}A_i$ is
the set of elements belonging to every $A_i$ with $i \in J$, and it is determined
by the family alone. For $J = \varnothing$ that description is satisfied by every
set whatsoever, so it determines nothing; an intersection of no subsets of $X$ is
$X$ only *relative to $X$*. Naming $X$ as part of the data and stipulating
$A_\varnothing = X$ is what makes the symbol $A_J$ defined for **all**
$J \subseteq I$, which is what the complementary form of the sieve identity
requires.

**(a) Every $A_J$ is a finite subset of $X$.** For $J \ne \varnothing$ pick
$i \in J$; then $A_J \subseteq A_i \subseteq X$. For $J = \varnothing$,
$A_J = X$. In both cases $A_J \subseteq X$ is finite by clause 1 of
[[thm-subset-of-a-finite-set]], and so is $U \subseteq X$; hence
$\lvert A_J\rvert$ and $\lvert U\rvert$ are natural numbers
([[def-finite-cardinality]]).

**(b) The index sets of the sieve's sums are finite.** $\mathcal{P}(I)$ is finite
with $\lvert\mathcal{P}(I)\rvert = 2^{\lvert I\rvert}$
([[cor-cardinality-of-the-power-set]]); the set
$\mathcal{P}(I) \setminus \{\varnothing\}$ of nonempty subsets of $I$ and the set
$[I]^{j}$ of $j$-element subsets of $I$ are subsets of $\mathcal{P}(I)$, hence
finite ([[thm-subset-of-a-finite-set]]), and $\lvert [I]^{j}\rvert =
\binom{\lvert I\rvert}{j}$ ([[def-binomial-coefficient]]).

**(c) Monotonicity.** If $J \subseteq J' \subseteq I$ then
$A_{J'} \subseteq A_J$. For $J = \varnothing$ this is clause (a); otherwise an
element lying in every $A_i$ with $i \in J'$ lies in every $A_i$ with $i \in J$.

**(d) The trace of a point.** For $x \in X$ put

$$T(x) \;:=\; \{\, i \in I \ :\ x \in A_i \,\} \subseteq I ,$$

a finite set. For every **nonempty** $J \subseteq I$,

$$x \in A_J \iff J \subseteq T(x) ,$$

both sides saying that $x \in A_i$ for every $i \in J$. And $x \in U$ if and only
if $T(x) \ne \varnothing$. Writing $t(x) := \lvert T(x)\rvert$, clause (b)
applied to $T(x)$ gives $\lvert [T(x)]^{j}\rvert = \binom{t(x)}{j}$, and for
nonempty $J$ the condition $x \in A_J$ with $\lvert J\rvert = j$ says exactly
that $J \in [T(x)]^{j}$.

## Remarks

- **The counts stay in $\mathbb{N}$; the identities do not.** Each
  $\lvert A_J\rvert$ is a natural number. Every identity that sieves them carries
  a minus sign, and $\mathbb{N}$ has no subtraction, so those identities are
  stated in $\mathbb{R}$ through the canonical natural and read back by its
  injectivity. That is a property of the identities, not of this definition,
  which introduces no arithmetic at all.

- **$I$ is an arbitrary finite index set, not a natural number.** Nothing below
  numbers the sets $A_0, A_1, \dots$; the subsets $J \subseteq I$ are the objects
  the sums run over, and $\lvert J\rvert$ rather than any position is what carries
  the sign.

- **The clause $A_\varnothing = X$ is used in exactly one place**, the term of
  the complementary form at $J = \varnothing$, where it contributes
  $\lvert X\rvert$. Removing the stipulation would leave that term undefined and
  the complementary form unstatable.
