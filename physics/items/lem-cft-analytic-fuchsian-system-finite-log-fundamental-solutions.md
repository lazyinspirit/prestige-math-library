---
id: lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions
kind: lemma
title: Convergent finite-log fundamental solutions of an analytic Fuchsian system
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let A(q)=Σ_{j≥0}A_jq^j be a holomorphic d-by-d complex matrix on |q|<R, R>0. On the universal cover of 0<|q|<R, the system

$$q\frac{dY}{dq}=A(q)Y$$

has d linearly independent convergent solutions of the form

$$Y(q)=q^r\sum_{n≥0}q^nP_n(\log q),$$

where the P_n are vector-valued polynomials whose degrees have one bound independent of n. The exponent r belongs to a finite set obtained by choosing, in each equivalence class modulo Z of eigenvalues of A_0, the lowest eigenvalue under integer translation. The coefficient series converge absolutely and locally uniformly on the universal cover, and uniformly for |q|≤ρ<R after bounding log q on a compact sector away from its vertex. Their columns form an invertible fundamental matrix at every q≠0. Every analytic solution germ is a unique constant linear combination of these columns. No parameter-family or simultaneous-normal-crossing assertion is included.

## Facts & Assumptions

**Given:** The finite matrix and its holomorphic power series are as in the Statement. A fixed logarithm is used on each simply connected sector. Finite-dimensional complex Jordan decomposition and power-series algebra are used below.

## Proof

1.1 Partition the finite spectrum of A_0 by λ∼μ if λ−μ∈Z. In one class choose r so every eigenvalue in the class is r+n with n a nonnegative integer and r itself occurs. Such a choice exists by taking the least integer shift in the finite class. Substitute the proposed expansion into the equation and compare q^{r+n}. With t=log q the resulting polynomial equation is $$ (\partial_t+r+n-A_0)P_n(t)=\sum_{j=1}^{n}A_jP_{n-j}(t)=:B_n(t).$$ The empty sum for n=0 is zero. The resonant indices n, for which r+n is an eigenvalue of A_0, form a finite set. For an eigenvalue outside this class no nonnegative integer n is resonant. [given, algebra]

2.1 Decompose C^d into the generalized eigenspaces of A_0. On a component with r+n−λ≠0, the constant matrix C_n=r+n−A_0 is invertible, and the polynomial equation (∂_t+C_n)P=B has the unique polynomial solution $$P=\sum_{j=0}^{\deg B}(-C_n^{-1}\partial_t)^j C_n^{-1}B.$$ For B=0 this is zero. On the resonant generalized eigenspace, write A_0=(r+n)I+J with J nilpotent. Every polynomial solution of P'−JP=B is $$P(t)=e^{Jt}\left(C+\int_0^t e^{-Ju}B(u)\,du\right),$$ where C is an arbitrary vector of that generalized eigenspace. These are polynomials because both nilpotent exponentials are finite sums. Differentiation verifies the formula, and multiplying any solution by e^{-Jt} proves it is exhaustive. [step 1.1, algebra]

3.1 Construct P_n successively. At every resonant index choose one free vector C_n; at nonresonant indices the solution is forced. The recursion is linear in these finitely many choices. A nonresonant inverse in step 2.1 never raises polynomial degree. A resonant step raises degree by at most 2d−1 relative to its inhomogeneous term, and its free term has degree at most d−1. Since there are at most d resonant indices, all resulting P_n have a common degree bound K, for example K=2d²+d suffices. The total dimension of the free-vector space in this exponent class is the sum of the algebraic multiplicities of its eigenvalues. The formal construction is injective in its free data: if all P_n vanish, the formula at every resonant step has zero inhomogeneous term and gives C_n=0. Summing over exponent classes yields exactly d formal vector solutions, independent over C as formal finite-log series. [step 2.1, algebra]

4.1 We prove their convergence. Give the finite space of vector polynomials of degree at most K any norm, and let ∂_t have norm C_K. For n large enough, C_n^{-1} exists with norm at most C/n, by the convergent finite-dimensional Neumann expansion (nI+(rI−A_0))^{-1}. The inverse in step 2.1 therefore has norm at most C'/n, uniformly on this polynomial space, since its finite sum is bounded by a geometric series with ratio CC_K/n. Fix 0<ρ<R_1<R. Cauchy estimates on the circle |q|=R_1 give ||A_j||≤M R_1^{-j}. Put p_n=||P_n||. Beyond the finitely many resonances and inverse-bound exceptions, $$p_n≤\frac{C'M}{n}\sum_{j=1}^nR_1^{-j}p_{n-j}.$$ Choose n_0 so (C'M/n)Σ_{j≥1}(ρ/R_1)^j≤1 for n≥n_0. Enlarge H so p_n≤Hρ^{-n} for the finitely many n<n_0. Induction using the displayed inequality proves the same bound for every n. Since ρ can be any number smaller than R, the coefficient series for each power of t converge on |q|<R. On compact subsets of the universal cover t is bounded, giving absolute local uniform convergence; differentiating the power series is justified on smaller disks by the same exponential bound. Thus each constructed series is an actual analytic solution of the differential system. [step 3.1, algebra]

5.1 Within a single exponent class, an actual linear combination of the constructed solutions cannot vanish unless its formal series vanishes. Indeed if n_0 is its first nonzero polynomial coefficient, on a fixed radial ray with q→0 the sum is q^{r+n_0}(P_{n_0}(log q)+O(|q|(1+|log q|^K))). The remainder estimate follows from step 4.1 on a smaller disk. A nonzero polynomial cannot be exponentially smaller than every power of |log q| on that ray, so the expression is nonzero for sufficiently small q. Consequently its free data are zero only for the zero solution. Between distinct exponent classes the monodromy eigenvalues e^{2πir} are distinct. On each class continuation t↦t+2πi acts as that eigenvalue times a unipotent operator: finite differences of a polynomial of degree at most K vanish after K+1 iterations, and q^n is single-valued. Polynomials in monodromy isolate the finitely many distinct generalized eigenspaces, by the elementary Chinese remainder identity for powers of distinct linear factors. Hence an identically zero combination across classes also has each class zero. The d actual solutions are therefore linearly independent over C. [step 4.1, algebra]

6.1 At any q_0≠0, the equation is an ordinary holomorphic first-order linear system Y'=q^{-1}A(q)Y. Initial value uniqueness follows directly from its power-series recurrence: if the constant term is zero, all Taylor coefficients are zero. For local existence, bound B(q)=q^{-1}A(q) by M on a disk not meeting 0. Put Z_0(q)=I and Z_{n+1}(q)=∫_{q_0}^q B(u)Z_n(u)du, using holomorphic primitives in that disk. Induction along straight radii gives ||Z_n(q)||≤M^n|q−q_0|^n/n!, so Σ_n Z_n converges normally, has value I at q_0 and solves Z'=BZ by termwise differentiation. Multiplying it by any prescribed initial vector gives existence. Thus the solution-germ space at q_0 has dimension d. If the values of the d constructed solutions were dependent at q_0, their constant linear combination would have zero initial value and hence vanish locally, and then everywhere on the connected universal cover by analytic continuation. This contradicts step 5.1. Their value matrix is invertible at every q_0, and every analytic solution germ has unique coordinates in that basis by its initial value. This proves the fundamental-solution and spanning assertions. [step 5.1, algebra] ∎
