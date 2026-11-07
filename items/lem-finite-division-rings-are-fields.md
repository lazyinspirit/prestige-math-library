---
id: lem-finite-division-rings-are-fields
kind: lemma
title: Finite division rings are commutative
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-division-ring
- thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
- thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
justified_by: []
proof_strategy: direct
axiom_use: 'No choice principle is used: a least finite counterexample and finite
  algebraic choices suffice.'
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §4, Theorem 4.1; alternative class-equation/cyclotomic proof,
      not Milne’s maximal-subfield proof.
verification: {}
---

## Statement

Every finite division ring is a field.

## Statement references

[[def-division-ring]]

[[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]

[[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]

## Facts & Assumptions

**Given:** A finite division ring.

[F1] The monic integer cyclotomic polynomials satisfy $T^n-1=\prod_{d\mid n}\Phi_d(T)$. [[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]

[F2] The roots of $\Phi_n$ in $\mathbb C$ are precisely the primitive $n$th roots of unity. [[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Suppose a counterexample exists and choose one, $D$, of least cardinality. Its center is a finite field $k$ of order $q$; put $r=\dim_kD>1$. For a noncentral $x$, its centralizer $C_D(x)$ is a proper smaller division ring, hence is a commutative field by minimality. If its dimension over $k$ is $d_x$, freeness of $D$ over that field gives $d_x\mid r$ and $d_x<r$. [given, choose, induction, algebra]

1.2 The class equation of the finite group $D^\times$ now says
$$q^r-1=q-1+\sum_x\frac{q^r-1}{q^{d_x}-1},$$
with one summand for each noncentral conjugacy class. By [F1], $\Phi_r(T)$ divides $(T^r-1)/(T^{d_x}-1)$ in $\mathbb Z[T]$ whenever $d_x$ is a proper divisor of $r$. Thus the positive integer $\Phi_r(q)$ divides $q-1$. [F1, step 1.1, algebra]

2.1 For every primitive $r$th root $\zeta$, $r>1$ gives $\zeta\ne1$, so $|q-\zeta|>q-1$. By [F2], $\Phi_r(q)$ is their product; conjugate roots pair to positive real factors, and the only possible real primitive root is $-1$, also giving a positive factor. Hence $\Phi_r(q)>q-1$: if $q=2$ every factor exceeds $1$; if $q>2$ their product exceeds $(q-1)^{\varphi(r)}\ge q-1$. This contradicts step 1.2. A commutative division ring is a field, proving the claim. [F2, step 1.2, algebra] ∎
