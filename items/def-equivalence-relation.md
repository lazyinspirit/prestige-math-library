---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
deps: []
justified_by: []
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers as a quotient)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$; we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is

- **reflexive**: $a \sim a$ for every $a \in A$;
- **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$;
- **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all
  $a, b, c \in A$.

Let $\sim$ be an equivalence relation on $A$. For $a \in A$, the **equivalence
class** of $a$ is the subset

$$[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A,$$

and any $b$ with $[b] = C$ is called a **representative** of the class $C$. The
**quotient set** is the set of all classes,

$$A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\},$$

a subset of the power set of $A$. The map $\pi : A \to A/{\sim}$ with
$\pi(a) = [a]$ is the **quotient map**; it is surjective by construction.

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. This is the obligation the
  library has already discharged case by case for the constructions of
  $\mathbb{Z}$ and $\mathbb{Q}$ ([[lem-int-add-well-defined]],
  [[lem-int-mul-well-defined]], [[lem-rat-ops-well-defined]]); it is stated here
  once, in general.

- **Why this item exists so late.** The library has used specific equivalence
  relations from the start: [[lem-int-equivalence]] proves that
  $(a,b) \sim (c,d) \iff a + d = b + c$ is one, and [[lem-rat-equivalence]] does
  the same for the relation defining $\mathbb{Q}$. Each of those items proves the
  three properties for one concrete relation and defines no general notion. The
  general notion is introduced here because the algebra track needs it uniformly:
  cosets, quotient groups, congruence classes and quotient rings are all
  instances, and each would otherwise re-prove the same three lines.
