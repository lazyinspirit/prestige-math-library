---
id: def-motzkin-and-schroder-paths
kind: definition
title: "Motzkin paths, Schröder paths, the Motzkin numbers $M_n$, the large Schröder numbers $R_n$, and their generating functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lattice-path-and-step-set, lem-lattice-paths-are-determined-by-their-step-words, thm-subset-of-a-finite-set, def-finite-cardinality, def-formal-power-series-and-coefficient-extraction, prop-coefficient-extraction-linearity-and-extensionality, def-catalan-generating-function, thm-sum-rule, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §§10.8–10.9'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Definition

Put $U=(1,1)$, $D=(1,-1)$, $L=(1,0)$ and $L_2=(2,0)$, and recall the lattice
paths of [[def-lattice-path-and-step-set]]. For a lattice path $v$ of length
$\ell$ write $h(i)$ for the second coordinate of $v(i)$ and $x(i)$ for its first
coordinate.

**Definition.** Let $n\in\mathbb{N}$.

- A **Motzkin path of length $n$** is a lattice path of length $n$ with steps in
  $\{U,D,L\}$ from $(0,0)$ to $(n,0)$ with $h(i)\ge0$ for every $i\le n$. Write
  $\mathrm{Mot}_n$ for the set of them.
- A **Schröder path of half-length $n$** is a lattice path with steps in
  $\{U,D,L_2\}$ from $(0,0)$ to $(2n,0)$, of any length, with $h(i)\ge0$ for
  every index $i$. Write $\mathrm{Sch}_n$ for the set of them.

Each step of a Motzkin path advances the first coordinate by exactly $1$, so a
Motzkin path of length $n$ automatically ends at first coordinate $n$; this is the
same induction as in [[def-diagonal-lattice-path-and-its-height]]. A Schröder
path has a step of width $2$, so its length is not determined by $n$ and is
recorded below.

**Counting the steps of a Schröder path.** Let $v\in\mathrm{Sch}_n$ have $k$ up
steps, $k'$ down steps and $m$ level steps. Each $U$ raises $h$ by $1$, each $D$
lowers it by $1$ and each $L_2$ leaves it unchanged, so induction on the index
([[thm-induction-principle]]) gives $h(i)$ as the number of $U$ steps among the
first $i$ minus the number of $D$ steps among them; from $h=0$ at the last index
we get $k'=k$. Likewise the first coordinate of $v(i)$ is the number of $U$ and
$D$ steps among the first $i$ plus twice the number of $L_2$ steps among them, so
$2n=2k+2m$ and $m=n-k$. Hence

$$0\le k\le n, \qquad \text{and } v \text{ has exactly } n+k \text{ steps},$$

of which $2k$ are not level. In particular the length of a Schröder path of
half-length $n$ is at most $2n$.

**Both sets are finite, and the two counts are therefore defined.** By
[[lem-lattice-paths-are-determined-by-their-step-words]] the paths of a given
length $\ell$ from $(0,0)$ with steps in a three-element step set form a finite
set of $3^{\ell}$ elements. So $\mathrm{Mot}_n$ is a subset of a finite set and is
finite ([[thm-subset-of-a-finite-set]]); and $\mathrm{Sch}_n$ is a subset of the
union of the finitely many sets of paths of length $\ell$ for $\ell\le 2n$, which
is finite by [[thm-sum-rule]] because paths of different lengths are functions
with different domains, so $\mathrm{Sch}_n$ is finite as well. Define

$$M_n := \lvert\mathrm{Mot}_n\rvert, \qquad R_n := \lvert\mathrm{Sch}_n\rvert$$

([[def-finite-cardinality]]), the **Motzkin numbers** and the **large Schröder
numbers**. Both are defined as counts, and every formula for them below is a
theorem.

**Small values, read off the definition.** At $n=0$ both conditions leave only the
empty path at $(0,0)$, so $M_0=1$ and $R_0=1$. For $M_1$: a single step from
$(0,0)$ to $(1,0)$ must be $L$, since $U$ ends at height $1$ and $D$ at height
$-1$, so $M_1=1$. For $M_2$: the words $LL$ and $UD$ qualify, and $DU$ fails the
height condition at the middle vertex, so $M_2=2$. For $R_1$: a path from $(0,0)$
to $(2,0)$ is $L_2$ or $UD$, and $DU$ fails the height condition, so $R_1=2$.

**The two generating functions.** In $\mathbb{Q}\llbracket x\rrbracket$
([[def-formal-power-series-and-coefficient-extraction]]) put

$$M(x) := \sum_{n\ge0}M_nx^{n}, \qquad R(x) := \sum_{n\ge0}R_nx^{n},$$

each count read as a rational coefficient exactly as in
[[def-catalan-generating-function]]; two series are equal exactly when all their
coefficients agree ([[prop-coefficient-extraction-linearity-and-extensionality]]).

## Remarks

- **The indeterminate marks length in $M(x)$ and half-length in $R(x)$.** That is
  the indexing of the source, and it is what makes the two functional equations
  below differ in the power of $x$ multiplying the square: a $U$ and a $D$ consume
  two units of length but only one unit of half-length. Reading either series with
  the other convention gives a false equation.

- **The letter $R$ for the large Schröder numbers is a deliberate departure.**
  The source writes $S_n$; here $S$ already names a step set
  ([[def-lattice-path-and-step-set]]) and $S_a$ the periodic partial-sum function
  ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]), so the numbers are
  written $R_n$ and the paths $\mathrm{Sch}_n$. Nothing else about the source's
  convention is changed: $R_n$ counts the Schröder paths of half-length $n$, so
  $R_0=1$ and $R_1=2$.

- **Why the finiteness clause treats the two cases differently.** A Motzkin path
  of length $n$ has exactly $n$ steps, so one word length suffices. A Schröder
  path of half-length $n$ has $n+k$ steps, and $k$ is not determined by $n$; the
  bound $2n$ is what makes the union above finite, and it is attained exactly when
  the path has no level step.
