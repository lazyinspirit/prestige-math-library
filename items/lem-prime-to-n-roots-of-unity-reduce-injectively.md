---
id: lem-prime-to-n-roots-of-unity-reduce-injectively
kind: lemma
title: "Roots of unity of order prime to the residue characteristic reduce injectively"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-roots-of-unity-in-a-field
  - def-finite-field-and-its-order
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-lagrange
proof_strategy: direct
axiom_use: >-
  The valuation and finite-field arguments are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §5.11, definition of the power-residue symbol and its residue roots, printed pp.247–248."
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter IV §5.1, local roots of unity and the Hilbert pairing, printed pp.143–144."
verification: {}
---

## Statement

Let $K$ be a complete discretely valued field with valuation ring $\mathcal O_K$,
maximal ideal $\mathfrak m_K$, and finite residue field $k=\mathcal O_K/\mathfrak m_K$
of order $q$. Let $n\ge1$ be a unit in $\mathcal O_K$, and suppose the group
$\mu_n(K)=\{\zeta\in K^\times:\zeta^n=1\}$ has exactly $n$ elements. Then
the residue map $\mu_n(K)\to k^\times$ is injective, its image has order
$n$, and $n\mid(q-1)$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-roots-of-unity-in-a-field]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[Milne, *Class Field Theory*, VIII §5.11](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Fesenko–Vostokov, *Local Fields and Their Extensions*, IV §5.1](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** A complete discretely valued field $K$, its valuation ring and
residue field, an integer $n$ which is a unit in the valuation ring, and
$|\mu_n(K)|=n$.

[A1] The integer $n$ has valuation zero in $K$. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F1] The maximal ideal is the set of positive-valuation elements, and the
residue map has kernel $\mathfrak m_K$ on $\mathcal O_K$.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] The group $\mu_n(K)$ consists of the elements of $K^\times$ whose
$n$-th power is $1$; it has $n$ elements by the stated hypothesis.
[[def-roots-of-unity-in-a-field]]

[F3] The finite residue field has multiplicative group of order $q-1$.
[[def-finite-field-and-its-order]]
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F4] The order of a subgroup of a finite group divides the order of the
group. [[thm-lagrange]]

## Proof

**Proof technique:** use the valuation of the binomial expansion at the
identity, then count the image in the finite residue group.

**Given:** The data above.

1.1 Suppose $\xi\in\mu_n(K)$ reduces to $1$ and $\xi\ne1$. Put
$\delta=\xi-1$. Then $\delta\in\mathfrak m_K$ and $v_K(\delta)>0$ by [F1].
The binomial expansion gives
$$0=\xi^n-1=n\delta+\sum_{j=2}^{n}\binom nj\delta^j.$$
The first term has valuation $v_K(\delta)$ because $n$ is a unit by [A1].
Every other term has valuation at least $jv_K(\delta)>v_K(\delta)$, since
$\binom nj\in\mathbb Z\subseteq\mathcal O_K$. In a nonarchimedean valued
field a sum with a unique term of least valuation is nonzero: the ultrametric
inequality makes the valuation of the sum equal to that least valuation.
This contradicts the displayed equality, so the only root reducing to $1$
is $1$. If two roots have the same residue, their quotient is an $n$-th
root reducing to $1$; hence they are equal, and the reduction map is
injective. [A1, F1, F2, given, algebra]

2.1 By [F2], the injective image has exactly $n$ elements. By [F3],
$|k^\times|=q-1$; [F4] therefore gives $n\mid(q-1)$.
[F2, F3, F4, step 1.1, algebra] ∎
