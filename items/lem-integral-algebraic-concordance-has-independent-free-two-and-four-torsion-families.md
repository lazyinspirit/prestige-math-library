---
id: lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families
kind: lemma
title: "Independent free, two-torsion, and four-torsion integral concordance classes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - thm-integral-seifert-witt-group-injects-into-rational-isometric-group
  - thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition
  - thm-rational-primary-isometric-classes-are-hermitian-witt-classes
  - lem-isotropic-reduction-of-rational-isometric-structures
  - thm-lagrange-four-square-theorem
  - lem-euler-four-square-product-identity
  - lem-three-mod-four-prime-dividing-two-square-sum
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Neal W. Stoltzfus, Algebraic Computations of the Integral Concordance and Double Null Concordance Group of Knots"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/stoltzfus2.pdf"
      locator: "§II, printed p.276 (infinitely many elements of each possible order); Quadratic Coupling Theorem2.19, printed p.282. The explicit genus-one families and their independent elementary proof are supplied here."
---

## Statement

In the integral algebraic concordance group put
$$
F_b=\begin{pmatrix}1&1\\0&b\end{pmatrix},\qquad P_n=\begin{pmatrix}1&1\\0&-n^2\end{pmatrix},\qquad Q_q=\begin{pmatrix}1&1\\0&-(3q-1)/4\end{pmatrix},
$$
where $b,n$ range over positive integers and $q$ ranges over primes congruent to $3$ modulo $4$ other than $3$. The classes $[F_b]$ are independent of infinite order, each $[P_n]$ has exact order two, and each $[Q_q]$ has exact order four. The three families together generate their direct sum, isomorphic to
$$
\mathbb Z^{(\mathbb N)}\oplus(\mathbb Z/2\mathbb Z)^{(\mathbb N)}\oplus(\mathbb Z/4\mathbb Z)^{(\mathbb N)}.
$$
Moreover the classes $[P_n]$ have linearly independent images in $G_{\mathbb Z}/2G_{\mathbb Z}$. These are pure algebraic assertions about the displayed forms; no choice principle is required.

## Statement references

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|Integral Seifert forms and algebraic concordance]]

## Facts & Assumptions

**Given:** The displayed matrices, positive indices, and primes $q\equiv3\pmod4$, $q\ne3$.

[F1] Integral classes inject into rational isometric classes, and zero integral class is equivalent to an actual integral metabolizer. [[thm-integral-seifert-witt-group-injects-into-rational-isometric-group]]

[F2] Distinct reciprocal primary polynomials give independent rational Witt components. Each semisimple quadratic component is the hermitian Witt group of its quadratic field, with the nontrivial field involution, via field trace. [[thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition]], [[thm-rational-primary-isometric-classes-are-hermitian-witt-classes]]

[F3] Rational isotropic reduction preserves metabolicity, and zero rational isometric class is equivalent to an invariant metabolizer. [[lem-isotropic-reduction-of-rational-isometric-structures]]

[F4] A positive integer is a sum of four integer squares. Euler's product identity gives, for any such representation $d=\sum r_i^2$, an integer matrix $R$ with $R^TR=dI_4$. [[thm-lagrange-four-square-theorem]], [[lem-euler-four-square-product-identity]]

[F5] If a prime congruent to $3$ modulo $4$ divides a sum of two integer squares, it divides each coordinate. [[lem-three-mod-four-prime-dividing-two-square-sum]]

## Proof

**Given:** The matrices and indices in the Statement.

1.1 Every displayed matrix has skew part $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, so is an integral Seifert form, and all are invertible. For $V_a=\begin{pmatrix}1&1\\0&-a\end{pmatrix}$, $a>0$, its isometry has characteristic polynomial $p_a(t)=t^2-(2+1/a)t+1$ with discriminant $(4a+1)/a^2$. When $d=4a+1$ is not a rational square, this is irreducible, and its field is $E=\mathbb Q(\sqrt d)$ with involution $\sqrt d\mapsto-\sqrt d$. The primary structure has $E$-dimension one, so its hermitian form is $\langle c\rangle$ for some $c\in\mathbb Q^\times$ by [F2]. This class is nonzero: a nonsingular rank-one hermitian form has no half-dimensional metabolizer, and [F2]–[F3] detect zero by an actual metabolizer. [F1, F2, F3, given, algebra]

2.1 For a quadratic extension $E=\mathbb Q(\sqrt d)$, a hermitian form $h$ is metabolic if and only if its underlying rational quadratic form $v\mapsto h(v,v)$ is metabolic. One implication follows by restricting scalars on an $E$-metabolizer. For the other, if the rational form is metabolic and nonzero-dimensional, it has a nonzero isotropic vector $v$, hence $h(v,v)=0$. Choose $w$ with $h(v,w)=1$ and replace it by $w-h(w,w)v/2$, making both $v,w$ isotropic while preserving that pairing. This splits off a hermitian hyperbolic plane. Its rational form is metabolic, with the rational two-dimensional subspace $Ev$ as metabolizer. Reduction of the full rational metabolic form by $Ev$ leaves the rational form of the hermitian orthogonal complement, still metabolic by [F3] applied with isometry $-I$. Induction on hermitian rank proves the reverse implication. For $4\langle c\rangle$, this rational form, in the coordinates $x_i+y_i\sqrt d$, is $c(\sum x_i^2-d\sum y_i^2)$. If $d>0$ is an integer, choose $R$ from [F4]; its graph $x=Ry$ is a rational four-dimensional metabolizer. Thus $4\langle c\rangle$ is metabolic. On the other hand, $2\langle c\rangle$ is metabolic precisely when $-1$ is a field norm: an isotropic pair $u,v\in E$, not both zero, satisfies $N(u)+N(v)=0$, and $v\ne0$, so $N(u/v)=-1$. Conversely an element of norm $-1$ supplies that isotropic line. [F2, F3, F4, step 1.1, construct, algebra]

3.1 For $P_n$ take $a=n^2$. The integer $d=4n^2+1$ lies strictly between $(2n)^2$ and $(2n+1)^2$, so is not a square, while $2n+\sqrt d$ has norm $-1$. Steps 1.1–2.1 show that its rational class has exact order two, and [F1] gives the same order integrally. For $Q_q$ take $d=3q$ and $a=(3q-1)/4$. These are positive integers and $d$ is nonsquare because $q\ne3$. If $x^2-3q y^2=-1$ had a rational solution, $y\ne0$ and $3q$ would be a sum of two rational squares. Clearing denominators gives $X^2+Z^2=3qY^2$ with a primitive integer triple. By [F5], $3$ divides $X,Z$; since $q\ne3$, the equation then implies $3\mid Y$, contradicting primitivity. Thus $-1$ is not a norm. Steps 1.1–2.1 show exact rational order four and [F1] gives exact integral order four. [F1, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 The symmetric matrix $F_b+F_b^T=\begin{pmatrix}2&1\\1&2b\end{pmatrix}$ is positive definite: its first pivot is positive and its determinant is $4b-1>0$. Its isometry has irreducible characteristic polynomial $r_b(t)=t^2-(2-1/b)t+1$, whose discriminant $(1-4b)/b^2$ is negative. For every positive integer $k$, the orthogonal sum of $k$ copies of this symmetric form is positive definite, and its negative is negative definite. Neither admits a nonzero isotropic subspace, so neither is metabolic. By [F1]–[F3], no nonzero integer multiple of $[F_b]$ vanishes. Thus $[F_b]$ has infinite order. The polynomials $r_b$ are distinct for distinct $b$, the polynomials $p_{n^2}$ are distinct for distinct $n$, and the polynomials $p_{(3q-1)/4}$ are distinct for distinct $q$. The $r_b$ have trace coefficient less than two and the others have trace coefficient greater than two. Finally $n^2=(3q-1)/4$ is impossible because it would give $n^2\equiv2\pmod3$. Thus all primary polynomials in the three families are pairwise distinct. Projecting any finite relation to each primary component, using the exact finite orders and the infinite-order conclusion, proves that the subgroup generated by these families is their direct sum. [F1, F2, F3, step 1.1, step 3.1, algebra]

5.1 Each quadratic hermitian component has the homomorphism rank modulo two, well-defined since every metabolic hermitian form has even rank. On the component belonging to $P_n$, this invariant takes value one on $[P_n]$, zero on the other $[P_m]$, and zero on every double of any rational Witt class. Composing with the injection [F1] and primary projection [F2] therefore proves that the images of $[P_n]$ are linearly independent in $G_{\mathbb Z}/2G_{\mathbb Z}$. There are infinitely many admissible primes $q$: if their full list together with $3$ were $q_1,\ldots,q_k$, the positive odd number $4q_1\cdots q_k-1\equiv3\pmod4$ would have a prime divisor congruent to $3$ modulo $4$, and none of the listed primes divides it. This is a contradiction. Their increasing enumeration is consequently a countably infinite sequence, defined by taking successive least primes and requiring no choice. The three families are therefore countably infinite and have all the asserted properties. [F1, F2, step 3.1, step 4.1, algebra] ∎
