---
id: def-artin-conductor-of-a-global-ray-class-character
kind: definition
title: "Artin conductor of a global ray-class character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-ray-class-character
  - def-herbrand-function-and-upper-ramification-numbering
  - thm-hasse-arftheorem-for-finite-abelian-local-extensions
  - cor-only-finitely-many-primes-ramify
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "VII §11, especially (11.3), (11.6), printed pp. 531–534"
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "V §3, conductor statement; proof omitted there"
verification: {}
---

## Definition
Assume Countable Choice (CC). 
Let $L/K$ be a finite abelian extension of number fields, $G=\operatorname{Gal}(L/K)$, and $\chi:G\to\mathbb C^\times$ a character. For each finite prime $\mathfrak p$ of $K$, choose a prime $\mathfrak P$ of $L$ above it and let $D_i(\mathfrak P/\mathfrak p)$ be the lower ramification groups of the local decomposition group, with $D_0$ the inertia subgroup. Restrict the one-dimensional representation $V_\chi$ to this decomposition group and set

$$a_{\mathfrak p}(\chi)=\sum_{i\ge 0}\frac{|D_i|}{|D_0|}\dim_{\mathbb C}\bigl(V_\chi/V_\chi^{D_i}\bigr).$$

Define the finite Artin conductor ideal by $\mathfrak f(\chi)=\prod_{\mathfrak p}\mathfrak p^{a_{\mathfrak p}(\chi)}$. The value is independent of the chosen prime above $\mathfrak p$. Hasse–Arf makes each exponent an integer for this abelian, one-dimensional character; unramified primes have exponent zero. 
## Definition references

[[def-ray-class-character]]

[[def-herbrand-function-and-upper-ramification-numbering]]

[[thm-hasse-arftheorem-for-finite-abelian-local-extensions]]

[Neukirch, *Algebraic Number Theory*, VII §11](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

[Milne, *Class Field Theory*, V §3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** Countable Choice (CC); A finite abelian extension $L/K$ of number fields and a character $\chi$.

[F1] For a finite abelian local extension, each upper ramification break is an integer. [[thm-hasse-arftheorem-for-finite-abelian-local-extensions]]

[F2] Lower and upper ramification numberings are defined from the normalized valuation, and the lower groups eventually become trivial. [[def-herbrand-function-and-upper-ramification-numbering]]

[F3] A finite-order character of a finite abelian group is a one-dimensional representation over $\mathbb C$. [[def-ray-class-character]]

[F4] A finite extension of number fields ramifies at only finitely many finite places. [[cor-only-finitely-many-primes-ramify]]


[A1] Countable Choice is an explicit hypothesis of the Hasse–Arf supplier [F1], used in step 2.1. [[def-countable-choice]] [[thm-hasse-arftheorem-for-finite-abelian-local-extensions]]
## Proof

**Given:** The data above.

1.1 If $\mathfrak P$ and $\mathfrak P'$ lie over $\mathfrak p$, their decomposition groups and lower filtrations are conjugate. Since $G$ is abelian, conjugation fixes each element of $G$, so the restricted character representations have the same fixed-space dimensions for corresponding filtration groups. Thus the finite sum defining $a_{\mathfrak p}(\chi)$ does not depend on $\mathfrak P$. Only ramified primes contribute, and there are finitely many by [F4]. [given, F2, F3, F4, algebra]

2.1 The lower-group conductor formula is the integral of the codimension function on the upper filtration, together with the inertia codimension term. In a one-dimensional abelian representation that function is constant between upper breaks; [F1] says every break is integral. Hence $a_{\mathfrak p}(\chi)\in\mathbb Z_{\ge0}$, and it vanishes at unramified primes because inertia acts trivially. Therefore the product is a well-defined integral ideal. [given, F1, F2, F3, step 1.1, algebra, A1] ∎
