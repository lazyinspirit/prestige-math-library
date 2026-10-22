---
id: thm-qsmx-klr-character-specialization
kind: theorem
title: KLR grading gives integral multiplicity bookkeeping
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum
  - def-qsmx-spin-weight-and-hall-realization
  - thm-klr-categorification-of-the-negative-quantum-half
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum: mathematical-premise
  def-qsmx-spin-weight-and-hall-realization: mathematical-premise
  thm-klr-categorification-of-the-negative-quantum-half: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Theorem 1.1, PDF pp. 2–3, and §3.2, PDF pp. 39–43: the divided-power Grothendieck map and its isomorphism."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, arXiv:0804.2080v1"
      url: "https://arxiv.org/pdf/0804.2080"
      locator: "Theorem 8, PDF pp. 13–14: the divided-power Grothendieck isomorphism for arbitrary Cartan datum and arbitrary ground field."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "§9.1, Theorem 9.1, printed pp. 39–40: an independent symmetric-group/Hecke realization of the divided-power isomorphism on the graded projective Grothendieck group."
verification:
  precheck: pass
---

## Statement

Let $D$ be a KLR datum on a symmetrizable Cartan datum with no imaginary
simple roots, over a field $k$, in the conventions of
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]. Let $R_D$
be the resulting graded KLR algebra, and let $K_0(R_D)$ be the Grothendieck
group of its graded projectives. Put
$\mathcal A=\mathbb Z[q_{\mathrm{gr}},q_{\mathrm{gr}}^{-1}]$, where
$q_{\mathrm{gr}}$ is the Laurent grading variable denoted by $q$ in the
divided-power integral form, and let $\mathcal A f_D$ be the integral
negative quantum half. The canonical map
$\gamma_D:\mathcal A f_D\to K_0(R_D)$ is an isomorphism of
$\mathcal A$-algebras and graded twisted bialgebras; $q_{\mathrm{gr}}$ records
the grading shift. Assume the Axiom of Choice inherited through this supplier.

For each integer $n\geq1$, the irreducible highest-weight-$n$ module $V(n)$
defined by homogeneous polynomials of degree $n$ has $H$-weights
$n,n-2,\ldots,-n$, each with multiplicity one. The diagonal
$\mathfrak{sl}_2$-module
$V(1)^{\otimes n}$ has $H$-weight $n-2k$ with multiplicity
$\binom nk$ for $0\leq k\leq n$. Here $H=2S^z$.

For real $h$ and $\beta$, define the zero-exchange finite matrix
$H_n^{(0)}=-hS_n^z$ on $V(1)^{\otimes n}$ and its partition trace
$Z_n(\beta)=\operatorname{Tr}\exp(-\beta H_n^{(0)})$. Then
$$ Z_n(\beta)=\bigl(2\cosh(\beta h/2)\bigr)^n, \qquad \cosh x:=\frac{e^x+e^{-x}}2. $$
For a Gibbs interpretation, $h$ is an energy coefficient, $S_n^z$ is
dimensionless, and $\beta$ has inverse-energy units. The KLR isomorphism
supplies the negative-half categorification stated above; it supplies no
identification with either finite-dimensional spin module, no
tensor-product categorical realization, and no spin-chain energy spectrum.

## Statement references

[[def-axiom-of-choice]]

[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]

[[def-qsmx-spin-weight-and-hall-realization]]

[[thm-klr-categorification-of-the-negative-quantum-half]]

[Khovanov–Lauda, Theorem 1.1 and §3.2](https://arxiv.org/pdf/0803.4121)

[Khovanov–Lauda II, Theorem 8](https://arxiv.org/pdf/0804.2080)

[Kleshchev, §9.1, Theorem 9.1](https://arxiv.org/pdf/0909.4844)

## Facts & Assumptions

**Given:** An integer $n\geq1$, a KLR datum and ground field satisfying the
stated imported theorem, and real scalars $h,\beta$. For a physical
interpretation of the Gibbs trace, $h$ is measured in joules and $\beta$ in
inverse joules; the algebraic identity itself is dimensionally expressed by
the product $\beta h$.

[A1] Adopt the Axiom of Choice ([[def-axiom-of-choice]]). In the cited KLR
supplier its exact use is the nondegeneracy of the form used in the proof of
injectivity; no arbitrary family choice is used in the finite-dimensional
calculations below.

[F1] [[thm-klr-categorification-of-the-negative-quantum-half]]: for the
stated KLR datum over a field, the canonical map from the divided-power
integral negative half to the graded projective Grothendieck group is an isomorphism
of $\mathcal A$-algebras and graded twisted bialgebras. Its proof uses [A1] through the
nondegeneracy supplier for the injectivity step.

[F2] [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]: this
KLR datum has a symmetrizable Cartan datum with no imaginary simple roots, a
field $k$, and polynomials $Q_{ij}$ satisfying the stated (Q1)–(Q4)
conditions; $R_D$ is the graded algebra with the displayed idempotent, dot,
and crossing generators and relations.

[F3] [[def-qsmx-spin-weight-and-hall-realization]]: on $V=\mathbb C^2$ the
generators are $E,F,H$ as displayed there, $V(r)=\mathbb C[x,y]_r$ with
$E=x\partial_y$, $F=y\partial_x$, $H=x\partial_x-y\partial_y$, and the
tensor-product action is the sum over factors.

## Proof

1.1 Under [A1], apply [F1] to the KLR datum in the Given. Its hypotheses are
the datum and field specified in [F2], and its conclusion is exactly the
isomorphism $\gamma_D:A f_D\to K_0(R_D)$ with the Laurent grading parameter
$q_{\mathrm{gr}}$. This use makes no claim about a representation on the
spin spaces. [given, A1, F1, F2]

1.2 In $V(1)$, $H$ has eigenvalue $1$ on $|\uparrow\rangle$ and $-1$ on
$|\downarrow\rangle$. The elementary tensor basis of $V(1)^{\otimes n}$
therefore consists of $H$-eigenvectors. A tensor with exactly $k$ down
factors has eigenvalue $n-2k$, and there are exactly $\binom nk$ such
tensors. Hence its weight character is
$(z+z^{-1})^n=\sum_{k=0}^n\binom nk z^{n-2k}$. [given, F3, algebra]

1.3 The monomials $x^{n-k}y^k$ form a basis of $V(n)$. Applying
$H=x\partial_x-y\partial_y$ gives
$H(x^{n-k}y^k)=(n-2k)x^{n-k}y^k$, so each listed weight space is
one-dimensional. For $k>0$, $E(x^{n-k}y^k)=k x^{n-k+1}y^{k-1}$ is nonzero;
for $k<n$, $F(x^{n-k}y^k)=(n-k)x^{n-k-1}y^{k+1}$ is nonzero. Any nonzero
submodule has a nonzero $H$-weight vector, since the eigenvalues are distinct
and the corresponding projections are polynomials in $H$. Repeated $E$
then reaches $x^n$, and repeated $F$ from $x^n$ reaches every basis
monomial. Thus $V(n)$ is irreducible and its weights have multiplicity one.
[given, F3, algebra]

2.1 On a tensor basis vector with $k$ down factors,
$S_n^z$ has eigenvalue $(n-2k)/2$, so $H_n^{(0)}$ has eigenvalue
$-h(n-2k)/2$. Summing the exponentials over the basis gives
$$ Z_n(\beta)=\sum_{k=0}^n\binom nk e^{\beta h(n-2k)/2} =\bigl(e^{\beta h/2}+e^{-\beta h/2}\bigr)^n =\bigl(2\cosh(\beta h/2)\bigr)^n. $$
This is an exact finite-matrix trace identity for the stated operator.
[given, F3, step 1.2, algebra]

3.1 The isomorphism in [F1] identifies $A f_D$ with $K_0(R_D)$ only.
For $n\geq2$, the weight $n-2$ has multiplicity $n$ in step 1.2 and
multiplicity one in step 1.3, so the two characters differ; for $n=1$ they
coincide. The map in [F1] assigns neither module to its Grothendieck group.
Likewise, [F1] has no Hamiltonian operator, while step 2.1 computes the trace
only after $H_n^{(0)}$ is specified. A tensor-product categorical action or
a spin-chain spectrum therefore requires additional data. [F1, step 1.2, step 1.3, step 2.1] ∎

## Remarks

The KLR Laurent variable $q_{\mathrm{gr}}$ records internal grading shifts.
It is distinct from the finite-field cardinality $q_H$ and from the Hall
parameter $\nu=\sqrt{q_H}$ in [[def-qsmx-spin-weight-and-hall-realization]].
The character and trace computations are finite-dimensional algebraic
identities; their physical interpretation is conditional on the stated
Hamiltonian convention.
