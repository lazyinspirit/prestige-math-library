---
id: def-incomplete-tensor-product-with-reference-vector
kind: definition
title: Incomplete tensor product of one-mode Hilbert spaces with a reference vector
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is assumed for the Hilbert completion; the finite-coordinate isometries and local projection calculations use no choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---
## Definition



Let $H=L^2(\mathbb R)$, let $\Omega\in H$ have norm one, and let
$H_n=L^2(\mathbb R^n)$ for $n\ge0$, where $H_0=\mathbb C$. For $m\ge n$
define $J_{n,m}:H_n\to H_m$ by

$$\big(J_{n,m}f\big)(x_1,\ldots,x_m)=f(x_1,\ldots,x_n)\prod_{j=n+1}^m\Omega(x_j).$$
The incomplete tensor product with reference vector $\Omega$ is the Hilbert completion of the compatible union of the $H_n$ under these maps. The vector $\Omega^{\infty}$ is the image of $1\in H_0$; more generally, the image of $f\in H_n$ has all coordinates after $n$ fixed at $\Omega$. For any unit vector $\Phi\in H$ and coordinate $j\ge1$, the **local rank-one projection** $P_j^\Phi$ applies $f\mapsto\langle f,\Phi\rangle\Phi$ in coordinate $j$ and the identity in the other coordinates. The proof verifies that the embeddings are well-defined and isometric and that $P_j^\Phi$ extends to an orthogonal projection on the completion.

## Facts & Assumptions

**Given:** The complex Hilbert space $L^2(\mathbb R)$, a unit vector $\Omega$, and Countable Choice.

[F1] $L^2$ functions modulo equality almost everywhere form a Hilbert space; Fubini evaluates integrable product functions, and Cauchy--Schwarz bounds their inner products ([[def-hilbert-space]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice permits the Hilbert completion used in this definition ([[def-countable-choice]]).

## Proof



**Proof technique:** direct.

**Given:** The data in the Definition.

1.1 For $m\ge n$, Fubini and $\|\Omega\|_2=1$ give$\|J_{n,m}f\|_2^2=\int_{\mathbb R^n}|f(x)|^2\,dx\prod_{j=n+1}^m\int_{\mathbb R}|\Omega(y)|^2\,dy=\|f\|_2^2.$Thus $J_{n,m}$ is an isometry. Direct substitution gives $J_{m,r}J_{n,m}=J_{n,r}$ for $n\le m\le r$. Identify each vector with its images under these isometries. For two representatives from $H_n$ and $H_m$, their inner product is computed after mapping both to $H_{\max(n,m)}$; the isometry and coherence just proved make it independent of a larger common index. This defines a positive-definite inner product on the compatible union. [A1, F1, given, construct]

1.2 For $n\ge j$, on $H_n$ set$\big(P_{j,n}^\Phi f\big)(x)=\Phi(x_j)\int_{\mathbb R}f(x_1,\ldots,x_{j-1},y,x_{j+1},\ldots,x_n)\overline{\Phi(y)}\,dy.$ For almost every fixed choice of the other coordinates, Cauchy--Schwarz shows the integral exists and the one-coordinate map is the orthogonal projection onto $\mathbb C\Phi$. Fubini then gives $\|P_{j,n}^\Phi f\|_2\le\|f\|_2$, $(P_{j,n}^\Phi)^2=P_{j,n}^\Phi$, and $\langle P_{j,n}^\Phi f,g\rangle=\langle f,P_{j,n}^\Phi g\rangle$. Consequently it is an orthogonal projection on $H_n$. [F1, given, algebra]

2.1 If $r\ge n\ge j$, the formula in step 1.2 acts on one of the first $n$ coordinates, while $J_{n,r}$ appends only factors $\Omega$ after coordinate $n$. Substitution in the integral formula gives $P_{j,r}^\Phi J_{n,r}=J_{n,r}P_{j,n}^\Phi$. For a vector initially represented in $H_n$ with $n<j$, first embed it in $H_j$; the compatibility identity shows that this and every later representation give the same image. Hence the projections define a contraction $P_j^\Phi$ on the compatible union. It extends uniquely by continuity to the Hilbert completion, and the identities of step 1.2 pass to limits, so the extension remains an orthogonal projection. [step 1.1, step 1.2, algebra, construct]

3.1 The compatible union is dense in its Hilbert completion by construction. Steps 1.1 and 2.1 prove, respectively, the well-defined incomplete tensor product and every stated local-projection property. [step 1.1, step 2.1] ∎
## Boundary cases



- $n=0$ is the one-dimensional space $\mathbb C$ and the empty product in
  $J_{0,0}$ is $1$.
- If $\Phi=\Omega$, $P_j^\Phi$ fixes the reference vector; no assumption that
  $\Phi$ equals $\Omega$ is needed for its definition on the completion.
- The formula applies to every coordinate $j$ and is independent of the
  chosen representative in the compatible union by step 3.1.

## Sources



Roland Speicher, *Mathematical Aspects of Quantum Mechanics*, Chapter X,
§§X.1–X.2, PDF pp. 54–58, supplies the incomplete tensor product construction;
the local coordinate projections and compatibility checks above are proved
directly here.
