---
id: cex-componentwise-algebra-action-need-not-define-a-tensor-action
kind: counterexample
title: The componentwise formula can fail to define a tensor action
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-unital-associative-algebra-representation
  - thm-associative-algebra-representations-are-unital-modules
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-hh-module-category-and-tensor-action
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Tensor Categories, MIT 18.769 complete course notes, §§1.21.2–1.21.3, printed pp. 44–45"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations, §3.5, printed pp. 41–42"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
---

## Statement refuted

For every unital associative $k$-algebra $A$ and every pair of left $A$-modules
$M,N$, the formula
$$a\cdot(m\otimes n)=(am)\otimes(an)$$
defines a left $A$-module action on $M\otimes_kN$.

## Facts & Assumptions

**Given:** The algebra $A=k=\mathbb C$, the left modules $M=N=\mathbb C$ with
their usual scalar actions, and the componentwise formula in the Statement.

[F1] [[def-unital-associative-algebra-representation]]: a representation of a unital associative $k$-algebra is a $k$-linear map to $\operatorname{End}_k(V)$ preserving multiplication and the unit.

[F2] [[thm-associative-algebra-representations-are-unital-modules]]: the representation $\rho(a)$ acts by $a\cdot v=\rho(a)(v)$ and gives a unital left module.

[F3] [[thm-unit-isomorphisms-for-module-tensor-products]]: multiplication $\lambda_N:k\otimes_kN\to N$, $c\otimes n\mapsto cn$, is an isomorphism with inverse $n\mapsto1\otimes n$.

[F4] [[def-hh-module-category-and-tensor-action]]: the bialgebra tensor action uses extra coproduct data, $h\cdot(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$.

## Counterexample

1.1 The identity map $\rho:\mathbb C\to\operatorname{End}_{\mathbb C}(\mathbb C)$, $a\mapsto a\operatorname{id}$, is a unital representation. Thus $M$ and $N$ are unital left $A$-modules by [F1]–[F2]. [given, F1, F2, construct]

2.1 Put $u=1\otimes1\in\mathbb C\otimes_{\mathbb C}\mathbb C$. By [F3], multiplication sends $u$ to $1$, so $u\ne0$. The proposed formula sends $u$ to $a^2u$ for $a\in\mathbb C$. [given, F3, step 1.1, algebra]

3.1 If this formula were an $A$-module action, it would be additive in $a$. But it gives $2\cdot u=4u$ from the formula for $a=2$, whereas additivity and $2=1+1$ require $2\cdot u=1\cdot u+1\cdot u=2u$. Since $u\ne0$ and $4u\ne2u$ over $\mathbb C$, the formula fails the module axiom. The coproduct-based formula in [F4] is a distinct construction requiring additional bialgebra data. [given, F4, step 2.1, algebra] ∎

The example refutes this componentwise formula; it does not rule out other
actions on a tensor product. A coproduct, when supplied as part of a bialgebra,
gives the distinct action in [F4].
