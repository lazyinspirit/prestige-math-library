---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product,
       def-properties-of-a-relation-on-a-set, def-power-set, def-function,
       def-axiom-schema-of-separation, def-injection-surjection-bijection]
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
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

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$
([[def-relation-domain-range-and-field]], [[def-cartesian-product]]); we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive
on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that
is, when it is

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

a subset of the power set of $A$ ([[def-power-set]]). The map
$\pi : A \to A/{\sim}$ ([[def-function]]) with $\pi(a) = [a]$ is the **quotient
map**; it is surjective by construction ([[def-injection-surjection-bijection]]).

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. The general statement of that
  obligation, with the uniqueness of the induced function, is
  [[thm-universal-property-of-the-quotient]]. The constructions of $\mathbb{Z}$
  and of $\mathbb{Q}$ discharge it for their own operations
  ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]],
  [[lem-rat-ops-well-defined]]).

- **Where the general notion is used.** The construction of $\mathbb{Z}$ verifies
  the three properties for the concrete relation
  $(a,b) \sim (c,d) \iff a + d = b + c$ ([[lem-int-equivalence]]), and the
  construction of $\mathbb{Q}$ does the same for its own relation
  ([[lem-rat-equivalence]]). Each of those items settles one relation and defines
  no general notion. Cosets, quotient groups, congruence classes and quotient
  rings are further instances of the definition given here.
