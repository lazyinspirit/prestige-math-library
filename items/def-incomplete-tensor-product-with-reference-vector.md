---
id: def-incomplete-tensor-product-with-reference-vector
kind: definition
title: Incomplete tensor product of one-mode Hilbert spaces with a reference vector
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-hilbert-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-countable-choice
  - thm-metric-completion-exists
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-completion-measurable-functions-have-base-measurable-representatives
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice supplies the L² Hilbert structures, Borel representatives and Hilbert completion; no stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---
## Definition

Assume Countable Choice.

Let $H=L^2(\mathbb R)$, let $\Omega\in H$ have norm one, and let
$H_n=L^2(\mathbb R^n)$ for $n\ge0$, where $H_0=\mathbb C$. For $m\ge n$
define $J_{n,m}:H_n\to H_m$ by

$$\big(J_{n,m}f\big)(x_1,\ldots,x_m)=f(x_1,\ldots,x_n)\prod_{j=n+1}^m\Omega(x_j).$$
The incomplete tensor product with reference vector $\Omega$ is the Hilbert completion of the compatible union of the $H_n$ under these maps. The vector $\Omega^{\infty}$ is the image of $1\in H_0$; more generally, the image of $f\in H_n$ has all coordinates after $n$ fixed at $\Omega$. For any unit vector $\Phi\in H$ and coordinate $j\ge1$, the **local rank-one projection** $P_j^\Phi$ applies $f\mapsto\langle f,\Phi\rangle\Phi$ in coordinate $j$ and the identity in the other coordinates. The proof verifies that the embeddings are well-defined and isometric and that $P_j^\Phi$ extends to an orthogonal projection on the completion.

## Facts & Assumptions

**Given:** The complex Hilbert space $L^2(\mathbb R)$, a unit vector $\Omega$, and Countable Choice.

[F1] Under Countable Choice, each $L^2(\mathbb R^n)$ with its integral pairing is a complex Hilbert space; Fubini evaluates integrals already known to be integrable, and Cauchy--Schwarz bounds the inner products ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-holder-inequality-for-integrals]]).

[F2] Under Countable Choice, Lebesgue measure is the completion of its Borel restriction, and completion-measurable real functions have base-measurable representatives. Applying this to real and imaginary parts gives finite Borel representatives of $L^2$ classes, after setting exceptional infinite values to zero ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]).

[F3] Lebesgue measure on each positive-dimensional Euclidean space is sigma-finite; Euclidean Borel sigma-algebras are the products of the factor Borel sigma-algebras, and product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]). The zero-dimensional factor is the one-point probability space.

[F4] Tonelli gives measurable section integrals and equality of iterated and product integrals for nonnegative product-measurable functions, without assuming integrability ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[A1] Countable Choice gives the norm completion of the compatible inner-product union, and the completion results make it a Hilbert space ([[def-countable-choice]], [[thm-metric-completion-exists]], [[thm-metric-completion-carries-a-unique-banach-space-structure]], [[thm-completion-of-an-inner-product-space-is-hilbert]]).

## Proof



**Proof technique:** direct.

**Given:** The data in the Definition.

1.1 Use finite Borel representatives as in [F2]. By [F3], the nonnegative function $|f(x)|^2\prod_{j=n+1}^m|\Omega(x_j)|^2$ is product-measurable, and Tonelli gives $\|J_{n,m}f\|_2^2=\|f\|_2^2\prod_{j=n+1}^m\|\Omega\|_2^2=\|f\|_2^2<\infty$. For $n=0$ the first factor is $|f|^2$, and $m=n$ is the identity map. Applying the same calculation to a difference shows independence of the representative of $f$; changing a representative of $\Omega$ changes the product only on finitely many null-coordinate cylinders, which are null by Tonelli and sigma-finiteness. Thus $J_{n,m}$ is a well-defined linear isometry on classes. Substitution gives $J_{m,r}J_{n,m}=J_{n,r}$. Computing two vectors' inner product at a common index is independent of a larger common index, since linear isometries preserve inner products by polarization. This defines a positive-definite inner product on the compatible union. [F1, F2, F3, F4, given, construct]

1.2 For $n\ge j$, write $x=(z,y)$ with $y=x_j$ and the other coordinates denoted by $z$. This coordinate permutation preserves Euclidean measure: on Borel rectangles both measures give the product of the side measures, so [F3] applies in this order too. Tonelli gives $\int\|f(z,\cdot)\|_2^2\,dz=\|f\|_2^2$, so almost every section lies in $L^2(\mathbb R)$. Set $a_f(z)=\int f(z,y)\overline{\Phi(y)}\,dy$ on those sections, and zero on the exceptional set. Cauchy--Schwarz gives $|a_f(z)|^2\le\|f(z,\cdot)\|_2^2$. Tonelli applied to the positive and negative parts of the real and imaginary integrand makes $a_f$ measurable; its section integral is finite almost everywhere by this estimate. Define $(P_{j,n}^\Phi f)(z,y)=a_f(z)\Phi(y)$. Tonelli now gives $\|P_{j,n}^\Phi f\|_2^2=\int|a_f|^2\le\|f\|_2^2$, and the same estimate for differences makes the map well-defined on classes. Since $\|\Phi\|_2=1$, section integration gives $a_{P_{j,n}^\Phi f}=a_f$, hence idempotence. The products $(P_{j,n}^\Phi f)\overline g$ and $f\overline{P_{j,n}^\Phi g}$ are integrable by Cauchy--Schwarz on $\mathbb R^n$; Fubini therefore yields $\langle P_{j,n}^\Phi f,g\rangle=\int a_f\overline{a_g}=\langle f,P_{j,n}^\Phi g\rangle$. Thus $P_{j,n}^\Phi$ is an orthogonal projection. When $n=j=1$, the $z$-space is the one-point space and the same formulas hold. [F1, F2, F3, F4, given, algebra]

2.1 If $r\ge n\ge j$, the formula in step 1.2 acts on one of the first $n$ coordinates, while $J_{n,r}$ appends only factors $\Omega$ after coordinate $n$. Substitution in the integral formula gives $P_{j,r}^\Phi J_{n,r}=J_{n,r}P_{j,n}^\Phi$. For a vector initially represented in $H_n$ with $n<j$, first embed it in $H_j$; the compatibility identity shows that this and every later representation give the same image. Hence the projections define a contraction $P_j^\Phi$ on the compatible union. It extends uniquely by continuity to the Hilbert completion, and the identities of step 1.2 pass to limits, so the extension remains an orthogonal projection. [step 1.1, step 1.2, algebra, construct]

3.1 The compatible union is dense in its Hilbert completion by construction. Steps 1.1 and 2.1 prove, respectively, the well-defined incomplete tensor product and every stated local-projection property. [A1, step 1.1, step 2.1] ∎
## Boundary cases



- $n=0$ is the one-dimensional space $\mathbb C$ and the empty product in $J_{0,0}$ is $1$.
- If $\Phi=\Omega$, $P_j^\Phi$ fixes the reference vector; no assumption that $\Phi$ equals $\Omega$ is needed for its definition on the completion.
- The formula applies to every coordinate $j$ and is independent of the chosen representative in the compatible union by step 3.1.

## Sources



Roland Speicher, *Mathematical Aspects of Quantum Mechanics*, Chapter X, §§X.1–X.2, PDF pp. 54–58, supplies the incomplete tensor product construction; the local coordinate projections and compatibility checks above are proved directly here.
