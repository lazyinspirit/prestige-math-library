---
id: prop-first-order-star-commutator-is-a-poisson-bracket
kind: proposition
title: The first-order commutator of an associative deformation is Poisson
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-general-poisson-bivector-and-bracket
  - def-formal-associative-deformation-of-a-commutative-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 5, §§5.1 and 5.3, equations (5.1.5)–(5.1.9) and Definition 5.3.2
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: "§1.2, first approximation: Poisson structures (PDF pp. 2–3)"
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.1.4, Exercise 4.1.15 and Remark 4.1.16 (PDF p. 88)
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Let $A$ be a commutative unital real algebra and let $\star$ be a formal
associative deformation of $A$ as in
[[def-formal-associative-deformation-of-a-commutative-algebra]]. For
$f,g\in A$, define
$$\beta(f,g):=B_1(f,g)-B_1(g,f).$$
Then $\beta$ is a real Poisson-algebra bracket on $A$. Thus the
first-order skew part of an associative deformation necessarily satisfies
the Lie and biderivation axioms; this is a necessary compatibility statement,
not an existence theorem for a prescribed bracket.

## Facts & Assumptions

**Given:** A commutative unital real algebra $A$, a coefficientwise
associative unital product $\star$ on $A\llbracket\hbar\rrbracket$, and its first
coefficient $B_1$.

[F1] [[def-formal-associative-deformation-of-a-commutative-algebra]]:
$f\star g=fg+\hbar B_1(f,g)+\hbar^2B_2(f,g)+\cdots$, and $\star$ is
associative.

[F2] [[def-general-poisson-bivector-and-bracket]]: a real Poisson-algebra
bracket is bilinear, skew, Jacobi, and a derivation in each argument.

## Proof

1.1 For any associative product, the commutator $[a,b]_\star=a\star b-b\star a$ satisfies the Jacobi identity. Expanding $[\,[f,g]_\star,k]_\star$ gives $(f\star g)\star k-(g\star f)\star k-k\star(f\star g)+k\star(g\star f)$. After reassociating each term, this is $f\star g\star k-g\star f\star k-k\star f\star g+k\star g\star f$; the two cyclic rotations are $g\star k\star f-k\star g\star f-f\star g\star k+f\star k\star g$ and $k\star f\star g-f\star k\star g-g\star k\star f+g\star f\star k$. Their sum is zero by pairwise cancellation. [given, F1, algebra]

1.2 Associativity also gives the exact derivation identity $[f,g\star k]_\star=[f,g]_\star\star k+g\star[f,k]_\star$: expanding both sides and reassociating the four triple products leaves the same expression. Comparing coefficients of $\hbar$ gives $\beta(f,gk)=\beta(f,g)k+g\beta(f,k)$. [given, F1, algebra]

2.1 Since $fg=gf$, the coefficient of $\hbar$ in $[f,g]_\star$ is exactly $\beta(f,g)$. The coefficient of $\hbar^2$ in the commutator Jacobi identity from step 1.1 is $\beta(\beta(f,g),k)+\beta(\beta(g,k),f)+\beta(\beta(k,f),g)=0$. Skew-symmetry of $\beta$ converts this to the Jacobi identity in [F2]. [given, F1, F2, step 1.1, algebra]

3.1 By definition, $\beta$ is real-bilinear and skew-symmetric. The derivation rule in step 1.2 and skew-symmetry give the derivation rule in the first entry; step 2.1 gives Jacobi. These are exactly the Poisson-algebra axioms in [F2]. [given, F2, step 2.1, step 1.2, algebra] ∎
