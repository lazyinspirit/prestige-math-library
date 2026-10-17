---
id: thm-derivative-of-matrix-inversion
kind: theorem
title: "On the invertible locus, $D\\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-matrix-differentials-obey-sum-product-and-adjoint-rules,
       def-invertible-matrix-and-general-linear-group,
       def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       def-frobenius-matrix-norm,
       def-operator-norm-on-a-finite-dimensional-inner-product-space,
       cor-operator-norm-submultiplicative-and-t-star-t-identity,
       thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison,
       thm-singular-value-decomposition,
       thm-determinant-differential-and-jacobis-formula,
       def-trace-of-a-square-matrix,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       lem-field-is-a-commutative-ring,
       prop-field-and-ring-matrix-interfaces-agree,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-published-matrix-calculus/application-4/repair.json
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $A$ be invertible. Then the inversion map is real Fr\'echet differentiable
at $A$, and for every direction $H$,

$$D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}.$$

## Facts & Assumptions

**Given:** An invertible matrix $A$ and a perturbation direction $H$.

[L1] Matrix differentials satisfy the product rule $d(AB)=dA\,B+A\,dB$ ([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

[L2] Matrix real Fr\'echet differentiability is the normwise remainder estimate, including a zero-entry source ([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]). The Frobenius norm is the Euclidean entry norm ([[def-frobenius-matrix-norm]]).

[L3] The operator norm on finite-dimensional real or complex inner-product spaces bounds $\|Xv\|_2$ by $\|X\|_2\|v\|_2$ by rescaling a nonzero $v$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). It is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]). Singular-value formulas give $\|X\|_2\le\|X\|_F$ and unitary invariance of both norms ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]); a singular value decomposition exists over both fields ([[thm-singular-value-decomposition]]).

[L4] For positive-sized real or complex matrices, determinant has the real Fr\'echet derivative $D\det(A)[K]=\operatorname{tr}(\operatorname{adj}(A)K)$ ([[thm-determinant-differential-and-jacobis-formula]]). Trace is the finite diagonal sum ([[def-trace-of-a-square-matrix]]). A positive-sized square matrix over a commutative ring is invertible exactly when its determinant is a unit ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]); in a field the units are exactly the nonzero elements ([[lem-field-is-a-commutative-ring]]). The ring and field matrix/inverse interfaces agree exactly ([[prop-field-and-ring-matrix-interfaces-agree]]). Scalar modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof
**Proof technique:** direct.

1.1 If $A$ has size zero, the unique empty matrix is its own inverse. Inversion is a map on the zero matrix space and its normwise remainder is identically zero; its unique real-linear derivative and $-A^{-1}HA^{-1}$ are both the empty zero matrix. Hence the full conclusion holds in that case. For the remainder let the size be $n\ge1$. [given, L2, algebra]

1.2 The norm estimates needed below hold over either field. Zero-domain cases have zero norm directly; in the following unit-vector argument the domain is nonzero. For compatible $X,Y$, applying [L3] to each column of $Y$ and summing squares gives $\|XY\|_F\le\|X\|_2\|Y\|_F$. For the right-hand estimate write $Y=U\Sigma V^*$ using [L3]. Unitary Frobenius invariance gives $\|XY\|_F=\|(XU)\Sigma\|_F$; multiplying columns by the singular values, each at most $\|Y\|_2$, gives $\|XY\|_F\le\|XU\|_F\|Y\|_2=\|X\|_F\|Y\|_2$. Thus also $\|XY\|_F\le\|X\|_F\|Y\|_F$. The operator triangle inequality follows by applying the vector triangle inequality at each unit vector and taking the maximum. [L2, L3, algebra]

1.3 Invertibility gives $\det A\ne0$ by [L4]. That supplier also supplies determinant's bounded first-order expansion. Explicitly, $|\operatorname{tr}(\operatorname{adj}(A)K)|\le C_A\|K\|_F$, where $C_A:=\sum_{i,j}|\operatorname{adj}(A)_{ij}|$, by the finite trace formula, scalar triangle inequality and $|K_{ij}|\le\|K\|_F$. Hence $|\det(A+K)-\det A|\to0$ as $\|K\|_F\to0$ by the normwise remainder estimate. Choose $\delta>0$ so that this difference is less than $|\det A|/2$ when $\|K\|_F<\delta$. Then $\det(A+K)\ne0$, and [L4] makes $A+K$ invertible. The inverse domain is therefore open, over both real and complex matrices. For such $K$, the inverse identities give $(A+K)^{-1}-A^{-1}=-A^{-1}K(A+K)^{-1}$ and consequently $(A+K)^{-1}-A^{-1}+A^{-1}KA^{-1}=A^{-1}KA^{-1}K(A+K)^{-1}$. [given, L2, L4, algebra]

2.1 Put $a:=\|A^{-1}\|_2$ and shrink $\delta$ so that $a\|K\|_F\le1/2$ whenever $\|K\|_F<\delta$. Taking operator norms in the first inverse identity, using [L3] and step 1.2, gives $\|(A+K)^{-1}\|_2\le a+a\|K\|_F\|(A+K)^{-1}\|_2$, hence $\|(A+K)^{-1}\|_2\le2a$. For the second identity write its remainder as $A^{-1}(KA^{-1})(K(A+K)^{-1})$. Step 1.2 bounds its Frobenius norm by $a(\|K\|_F a)(\|K\|_F\,2a)=2a^3\|K\|_F^2$. The candidate $K\mapsto-A^{-1}KA^{-1}$ is real-linear and has Frobenius bound $a^2\|K\|_F$, again by step 1.2. The remainder estimate is therefore $o(\|K\|_F)$ and proves the full real Fr\'echet derivative by [L2]. [L2, L3, step 1.2, step 1.3, algebra]

3.1 Differentiating the identity $A\,A^{-1}=I$ and using the product rule [L1] gives $H\,A^{-1}+A\,D\operatorname{inv}(A)[H]=0$. Left-multiplying by $A^{-1}$ recovers $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$, which is the formula claimed in the statement; step 1.1 handles the empty matrix as well. [L1, step 1.1, step 2.1, algebra] ∎
