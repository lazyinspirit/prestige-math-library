---
id: def-global-power-residue-symbol
kind: definition
title: "Global power-residue symbols"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-number-field
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-roots-of-unity-in-a-field
  - lem-prime-to-n-roots-of-unity-reduce-injectively
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-global-field-element-integral-at-all-but-finitely-many-places
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  AC is inherited from place classification and Countable Choice from the
  completion convention. No additional choice is used in the finite products.
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter VIII §5"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "§5.11, definition of the n-th power-residue symbol before Theorem 5.11, printed pp.247–248."
    - title: "J. Neukirch, Algebraic Number Theory, English translation, Chapter VI §8"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Definition (8.2), reciprocity law for power residues, printed p.415."
verification:
  precheck: n/a
---

## Definition

Assume AC and Countable Choice. Let $K$ be a number field, let $n\ge1$,
and suppose that the group $\mu_n(K)=\{\zeta\in K^\times:\zeta^n=1\}$
has exactly $n$ elements. Let $v$ be a finite place of $K$ at which $n$ is
a unit, let $\kappa(v)$ be its finite residue field, and put
$q_v=|\kappa(v)|$. The reduction map on $\mu_n(K)$ is injective and
$n\mid(q_v-1)$. If $u\in K^\times$ has $v(u)=0$, define
$(u/v)_n$ to be the unique element of $\mu_n(K)$ whose reduction is
$\bar u^{(q_v-1)/n}$. For $a\in K^\times$, set
$$S_n(a)=\{v:v\text{ is archimedean or }n\text{ is not a unit at }v\}\cup
\{v\text{ finite}:v(a)\ne0\}.$$
For $b\in K^\times$, define the global power-residue symbol
$$\left(\frac{a}{b}\right)_n:=\prod_{v\notin S_n(a)}\left(\frac{a}{v}\right)_n^{v(b)}.$$
The product is finite because $v(b)=0$ at all but finitely many finite
places. Negative valuations use the inverse power in $\mu_n(K)$.

## Definition references

[[def-number-field]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-roots-of-unity-in-a-field]]

[[lem-prime-to-n-roots-of-unity-reduce-injectively]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[[thm-global-field-element-integral-at-all-but-finitely-many-places]]
