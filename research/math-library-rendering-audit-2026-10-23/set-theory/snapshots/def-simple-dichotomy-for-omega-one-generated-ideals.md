---
id: def-simple-dichotomy-for-omega-one-generated-ideals
kind: definition
title: The simple dichotomy for omega-one-generated ideals
status: published
origin: pipeline
deps:
  - def-cardinal
  - def-countable
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Abraham, Three applications of ideal dichotomy, slides 2–4"
      url: https://www.winterschool.eu/files/4-P-Ideal_Dichotomy_III.pdf
    - title: "Abraham, Lecture notes on the P-ideal dichotomy, Definitions preceding Theorems 1.3–1.4"
      url: https://paperzz.com/doc/7877075/lecture-notes-on-the-p-ideal-dichotomy
---

## Definition

Work in ZFC.  Let $S$ be uncountable.  An **ideal of countable subsets of
$S$** is a family $\mathcal I\subseteq[S]^{\leq\omega}$ that contains every
finite subset of $S$ and is closed under taking subsets and finite unions.
For $a,b\subseteq S$, write $a\subseteq^*b$ when $a\setminus b$ is finite.

The ideal $\mathcal I$ is **generated modulo finite by $\omega_1$ members** if
there are $A_\xi\in\mathcal I$ for $\xi<\omega_1$ such that

$$a\in\mathcal I\quad\Longleftrightarrow\quad\exists u\in[\omega_1]^{<\omega}\ \ a\subseteq^*\bigcup_{\xi\in u}A_\xi$$

for every countable $a\subseteq S$.  This is equivalent to having an
explicit family closed under finite unions: replace the displayed family by
the sets $\bigcup_{\xi\in u}A_\xi$ for finite $u\subseteq\omega_1$.  The
resulting family has cardinality at most $\omega_1$ in ZFC; if an
$\omega_1$-indexed family is desired, repeat members to pad the enumeration.
Membership in $\mathcal I$ then means almost containment in one member of
that family.  No
increasing sequence is asserted: an ideal need not contain the union of
countably many of its members.

For $X\subseteq S$:

- $X$ is **inside** $\mathcal I$ when $[X]^{\leq\omega}\subseteq\mathcal I$;
- $X$ is **outside**, or **orthogonal to**, $\mathcal I$ when
  $|X\cap a|<\omega$ for every $a\in\mathcal I$.

Equivalently, $X$ is outside exactly when its intersection with every chosen
generator is finite: one direction uses that generators belong to the ideal;
the other uses the finite-union and finite-error formula above.  Also
$\mathcal I\restriction X=\{a\cap X:a\in\mathcal I\}$ then consists only of
finite sets.

The **simple dichotomy for $\omega_1$-generated ideals** is the assertion that
for every such $S$ and $\mathcal I$, either some uncountable $X\subseteq S$ is
inside $\mathcal I$, or some uncountable $X\subseteq S$ is outside
$\mathcal I$.  “Either” is inclusive: different witnesses can in principle
satisfy the two clauses.  One uncountable $X$ cannot satisfy both in ZFC,
because AC gives a countably infinite $a\subseteq X$; inside gives
$a\in\mathcal I$, while outside says $X\cap a=a$ is finite.  This extraction
of $a$ is the only choice used in the definitional discussion.  Empty and
finite $X$ are allowed by the two local predicates but are not witnesses to
the dichotomy.
