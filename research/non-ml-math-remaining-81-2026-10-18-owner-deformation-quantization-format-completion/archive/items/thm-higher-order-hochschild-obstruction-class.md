---
id: thm-higher-order-hochschild-obstruction-class
kind: theorem
title: The order-n Hochschild obstruction to extending a partial star product
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-smooth-manifold
  - def-formal-associative-deformation-of-a-commutative-algebra
  - def-hh-cochain-complex-and-gerstenhaber-bracket
  - prop-hochschild-cochains-form-a-differential-graded-lie-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 5, §5.1, equations (5.1.8)–(5.1.9), and §5.3, equations (5.3.1) and (5.1.6)
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.2.5, Hochschild differential and DGLA (PDF pp. 96–98)
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Let $M$ be a smooth manifold ([[def-smooth-manifold]]) and
$A=C^\infty(M,\mathbb R)$, and let
$n\geq2$. Suppose $B_1,\ldots,B_{n-1}$ are normalized
bidifferential 2-cochains and that the truncated product
$$f\star_{<n}g=fg+\sum_{r=1}^{n-1}\hbar^rB_r(f,g)$$
is associative modulo $\hbar^n$. For $i+j=n$, put
$$O_n(f,g,h):=\sum_{i=1}^{n-1} \Bigl(B_i(B_{n-i}(f,g),h)-B_i(f,B_{n-i}(g,h))\Bigr).$$
Then $O_n$ is a normalized multidifferential Hochschild 3-cocycle. The
truncated product extends associatively modulo $\hbar^{n+1}$ by a
normalized bidifferential coefficient $B_n$ exactly when
$[O_n]=0$ in the cohomology $HH^3_{\mathrm{diff,norm}}(A,A)$ defined in
[[def-hh-cochain-complex-and-gerstenhaber-bracket]]. Equivalently,
$$\delta B_n=O_n.$$
With the Gerstenhaber bracket convention in that definition,
$$O_n=\frac12\sum_{i+j=n}[B_i,B_j]_G,$$
where both indices range from $1$ to $n-1$. In particular,
$O_2=\tfrac12[B_1,B_1]_G$. This is a coefficientwise extension criterion at
one finite order; it gives no automatic extension at later orders and no
general existence or formality theorem.

## Facts & Assumptions

**Given:** A smooth manifold $M$, $A=C^\infty(M,\mathbb R)$, $n\geq2$, normalized
bidifferential cochains $B_1,\ldots,B_{n-1}$, and associativity of
$\star_{<n}$ through all powers below $\hbar^n$.

[A1] $n$ is an integer at least $2$; all coefficients and cochains are
over $\mathbb R$, so $2$ and $3$ are invertible.

[F1] [[def-formal-associative-deformation-of-a-commutative-algebra]]:
the coefficientwise product uses finite sums at each formal order and
associativity is equality of each coefficient.

[F2] [[def-hh-cochain-complex-and-gerstenhaber-bracket]]: the Hochschild
differential $\delta$, normalized multidifferential subcomplex, and
Gerstenhaber insertion bracket have the displayed formulas.

[F3] [[prop-hochschild-cochains-form-a-differential-graded-lie-algebra]]:
with $\partial=[m,-]_G$, the shifted cochains form a differential graded
Lie algebra and $\partial B_r=-\delta B_r$ for 2-cochains, while
$\partial O_n=\delta O_n$ for 3-cochains.

## Proof

1.1 Let $m(f,g)=fg$ and
$x=\sum_{r=1}^{n-1}\hbar^rB_r$, so $m+x$ is the truncated product.
For arity-two cochains the insertion formula gives
$\tfrac12[m+x,m+x]_G(f,g,h)=( (f\star_{<n}g)\star_{<n}h)-
f\star_{<n}(g\star_{<n}h)$. Thus its coefficient at order $n$, where
there is no $B_n$ term, is precisely the displayed $O_n$; all lower
coefficients vanish by the assumed partial associativity. The same insertion
formula gives
$\tfrac12\sum_{i+j=n}[B_i,B_j]_G=\sum_{i+j=n}B_i\circ B_j=O_n$, because
the bracket of two 2-cochains is symmetric. [given, A1, F1, F2, algebra]

1.2 In the shifted Hochschild DGLA put
$R=\partial x+\tfrac12[x,x]_G=\tfrac12[m+x,m+x]_G$; the last equality
uses $[m,m]_G=0$. The DGLA identities give the Bianchi identity
$$\partial R+[x,R]_G =\tfrac12\partial[x,x]_G+[x,\partial x]_G +\tfrac12[x,[x,x]_G]_G=0.$$
Indeed, the derivation rule and graded skew-symmetry make the first two terms
cancel, and graded Jacobi gives $3[x,[x,x]_G]_G=0$, hence the last term
vanishes over $\mathbb R$. By step 1.1, $R$ starts at order
$\hbar^n$ with coefficient $O_n$, while $x$ starts at order
$\hbar$; therefore the coefficient of $\hbar^n$ in the Bianchi
identity is $\partial O_n=0$. [A1, F3, step 1.1, algebra]

1.3 By [F3], $\partial$ on 3-cochains is $\delta$, so
$\delta O_n=0$. Each summand of $O_n$ is a composition of normalized
bidifferential cochains. An input equal to $1$ either makes the inner
cochain vanish or remains a unit input of the outer cochain; composition
also preserves finite differential order. Thus $O_n$ lies in the stated
normalized multidifferential subcomplex. [A1, F2, F3, step 1.1, algebra]

2.1 Add $\hbar^nB_n$ to the truncated product. The order-$n$ terms
in its associator that are linear in $B_n$ are
$$B_n(f,g)h+B_n(fg,h)-fB_n(g,h)-B_n(f,gh)=-(\delta B_n)(f,g,h).$$
No term quadratic in $B_n$, or involving $B_n$ and a positive-order
coefficient, contributes at order $n$, since those terms have order at
least $2n$ or $n+1$. Hence the new order-$n$ associator coefficient
is $O_n-\delta B_n$. [A1, F1, F2, step 1.1, algebra]

2.2 The lower associator coefficients already vanish. Therefore
$\star_{<n}+\hbar^nB_n$ is associative modulo $\hbar^{n+1}$ exactly
when $\delta B_n=O_n$. By step 1.3, $O_n$ is a cocycle in the
normalized multidifferential complex; such a $B_n$ exists precisely when
its cohomology class is zero. For $n=2$, the defining sum has only
$(i,j)=(1,1)$, yielding $O_2=\tfrac12[B_1,B_1]_G$. This proves the
finite-order criterion without asserting that later obstruction classes
vanish. [F2, step 1.3, step 2.1, algebra] ∎
