---
id: def-commutative-hopf-algebra-over-a-field
kind: definition
title: Commutative Hopf algebras over a field
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-commutative-ring
  - def-field
  - def-finite-type-and-module-finite-algebras
  - def-ring-homomorphism
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-coproduct-property-of-tensor-products-of-commutative-algebras
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 3 §3(b), Definition 3.3 and paragraph 3.4, printed pp. 65-66 (PDF 76-77); display (17)-(18) and identity (19) read in full."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "September 26th lecture, Definition 14 and Remark 15, printed pp. 4-5; comultiplication, counit and antipode axioms read in full."
---

## Definition

Let $k$ be a field ([[def-field]]). A **commutative Hopf algebra over $k$** is a commutative unital $k$-algebra $A$ ([[def-algebra-over-a-commutative-ring]], [[def-commutative-ring]]) together with $k$-algebra homomorphisms ([[def-ring-homomorphism]])
$$\Delta\colon A\to A\otimes_kA,\qquad \varepsilon\colon A\to k,\qquad S\colon A\to A,$$
called the **comultiplication**, the **counit** and the **antipode**, such that, with $m_A$ the multiplication of $A$, with $u_A\colon k\to A$ the unit of $A$, and with the canonical identifications $k\otimes_kA\cong A\cong A\otimes_kk$, the following identities hold.

1. $(\operatorname{id}_A\otimes\Delta)\Delta=(\Delta\otimes\operatorname{id}_A)\Delta$ (coassociativity).
2. $(\varepsilon\otimes\operatorname{id}_A)\Delta=\operatorname{id}_A=(\operatorname{id}_A\otimes\varepsilon)\Delta$ (counit identities).
3. $m_A(S\otimes\operatorname{id}_A)\Delta=u_A\varepsilon=m_A(\operatorname{id}_A\otimes S)\Delta$ (antipode identities).

Here $A\otimes_kA$ is the tensor product of $A$ with itself over $k$ ([[def-tensor-product-of-modules-by-generators-and-relations]]), whose elements are finite sums $\sum_ia_i\otimes b_i$; it carries the $k$-algebra structure making it the coproduct of $A$ with itself among commutative $k$-algebras, so that a $k$-algebra homomorphism out of $A\otimes_kA$ is exactly a pair of $k$-algebra homomorphisms out of $A$ ([[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]).

A **morphism of commutative Hopf algebras** $f\colon(A,\Delta_A,\varepsilon_A,S_A)\to(B,\Delta_B,\varepsilon_B,S_B)$ is a $k$-algebra homomorphism with $(f\otimes f)\Delta_A=\Delta_Bf$, $\varepsilon_Bf=\varepsilon_A$ and $fS_A=S_Bf$; morphisms are required to preserve all three structure maps, not only the comultiplication.

The Hopf algebra is **finitely generated** if $A$ is a finitely generated $k$-algebra ([[def-finite-type-and-module-finite-algebras]]). Neither reducedness, nor smoothness, nor finite generation is imposed by the definition, and $k$ is an arbitrary field.
