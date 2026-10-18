---
id: ex-c2-trivial-and-sign-modules-under-diagonal-tensor-action
kind: example
title: The diagonal tensor action of $\mathbb C[C_2]$ on trivial and sign modules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-unital-associative-algebra-representation
  - thm-associative-algebra-representations-are-unital-modules
  - lem-hh-group-and-polynomial-hopf-algebras-exist
  - def-hh-hopf-algebra-and-antipode
  - def-hh-module-category-and-tensor-action
  - thm-symmetry-and-associativity-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Tensor Categories, MIT 18.769 complete course notes, Examples 1.3.4 and §§1.21.2–1.21.3, printed pp. 10 and 44–45"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations, Example 3.28 and §§3.5–3.6, printed pp. 39–43"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
---

## Example

Let $C_2=\{1,s\}$ with $s^2=1$, and let $H=\mathbb C[C_2]$. Let $V=\mathbb C$
be the trivial representation and $W=\mathbb C$ the sign representation, so
$s$ acts by $+1$ on $V$ and by $-1$ on $W$. Use the group-algebra Hopf structure
and its induced tensor action.

## Facts & Assumptions

**Given:** The group $C_2$, its group algebra $H$, the one-dimensional vector
spaces $V,W$, and the actions just stated.

[F1] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: for every group $G$, $kG$ is a Hopf algebra with multiplication extending the group law and $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, and $S(g)=g^{-1}$ on basis elements.

[F2] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra is a bialgebra together with an antipode.

[F3] [[def-unital-associative-algebra-representation]]: a representation is a $k$-linear map preserving multiplication and the unit.

[F4] [[thm-associative-algebra-representations-are-unital-modules]]: these representations correspond to unital left-module actions by $a\cdot v=\rho(a)(v)$.

[F5] [[def-hh-module-category-and-tensor-action]]: for left modules over a bialgebra, the tensor action is $h\cdot(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$ when $\Delta(h)=\sum h_{(1)}\otimes h_{(2)}$.

[F6] [[thm-symmetry-and-associativity-over-a-commutative-ring]]: the canonical flip $v\otimes w\mapsto w\otimes v$ is an isomorphism of tensor products of modules over a commutative ring.

## Verification

1.1 Define $\rho_V(1)=\rho_W(1)=1$, $\rho_V(s)=1$, and $\rho_W(s)=-1$, and extend linearly from the basis $\{1,s\}$. These maps preserve products because the only nontrivial basis relation is $s^2=1$ and both $1^2=(-1)^2=1$. Thus they are unital representations by [F3], hence left $H$-modules by [F4]. [given, F3, F4, algebra, construct]

2.1 By [F1]–[F2], $H$ is a bialgebra with $\Delta(1)=1\otimes1$ and $\Delta(s)=s\otimes s$. The action in [F5] sends $1$ to the identity and sends $s$ to $-\operatorname{id}_{V\otimes W}$, since $s\cdot(v\otimes w)=(s\cdot v)\otimes(s\cdot w)=v\otimes(-w)$. This operator squares to the identity, so the algebra homomorphism $H\to\operatorname{End}_{\mathbb C}(V\otimes W)$ determined on the basis $1,s$ gives a unital module action and agrees with the coproduct formula on that basis, hence on all of $H$. [given, F1, F2, F5, step 1.1, algebra]

3.1 The vector-space flip $\tau(v\otimes w)=w\otimes v$ is an isomorphism by [F6]. It is $H$-linear: for $s$, both $\tau(s\cdot(v\otimes w))$ and $s\cdot\tau(v\otimes w)$ equal $-w\otimes v$, while $1$ acts identically. Linearity and the basis $\{1,s\}$ give the intertwining identity for every $h\in H$. This is a symmetric swap for this example, not a claim that every bialgebra-module category is symmetric. [given, F5, F6, step 2.1, algebra] ∎
