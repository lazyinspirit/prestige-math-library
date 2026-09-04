---
id: thm-normal-equations-for-best-affine-l2-prediction
kind: theorem
title: "Normal equations for best affine $L^2$ prediction"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables, cor-cauchy-schwarz-for-random-variables, def-l-p-space-as-a-quotient-by-null-functions, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, thm-orthogonal-projection-is-the-unique-nearest-point, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.2.2"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Statement

Let $X,Y_1,\dots,Y_n$ be square-integrable real random variables on one
probability space, and write
$$W:=\operatorname{span}\big([1],[Y_1],\dots,[Y_n]\big)\subseteq L^2(\mathbb P),$$
where $[\cdot]$ denotes the almost-everywhere class from
[[def-l-p-space-as-a-quotient-by-null-functions]].

Then there is a unique class $[Z_*]\in W$ minimizing $\|[X]-[Z]\|_2$ over
$[Z]\in W$. This minimizing class has an affine representative
$Z_*=a_0+\sum_{j=1}^n a_jY_j$, and its coefficients satisfy
$$a_0=\mathbb E[X]-\sum_{j=1}^n a_j\mathbb E[Y_j],$$
$$\sum_{j=1}^n \operatorname{Cov}(Y_i,Y_j)a_j=\operatorname{Cov}(X,Y_i)\qquad(1\le i\le n).$$

The class $[Z_*]$ is unique. If the covariance matrix
$\Gamma=(\operatorname{Cov}(Y_i,Y_j))_{i,j}$ is singular, the coefficient vector
need not be uniquely determined by the normal equations, but any two solutions
yield the same predictor almost surely.

## Facts & Assumptions

**Given:** Square-integrable real random variables $X,Y_1,\dots,Y_n$.

[L1] Variance and covariance are given by centered expectations, satisfy the identities $$\operatorname{Var}(U)=\mathbb E[U^2]-\mathbb E[U]^2,\qquad \operatorname{Cov}(U,V)=\mathbb E[UV]-\mathbb E[U]\mathbb E[V],$$ and are bilinear on finite linear combinations ([[def-moments-variance-and-covariance]], [[lem-variance-and-covariance-identities-for-random-variables]]).

[L2] Cauchy-Schwarz gives integrability of products of square-integrable random variables ([[cor-cauchy-schwarz-for-random-variables]]).

[L3] $L^2(\mathbb P)$ is the quotient by almost-sure equality, and the span of a set is exactly the set of finite linear combinations ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-linear-combination-and-span]], [[lem-span-is-the-set-of-linear-combinations]]).

[L4] In a finite-dimensional inner product space, the orthogonal projection onto any subspace is the unique nearest point in that subspace ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[L5] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Let $$V:=\operatorname{span}\big([X],[1],[Y_1],\dots,[Y_n]\big)\subseteq L^2(\mathbb P).$$ This space is finite-dimensional because it is spanned by $n+2$ vectors, and $W$ is a subspace of $V$. Equip $V$ with the usual $L^2$ inner product. Applying [L4] to the vector $[X]\in V$ and the subspace $W\subseteq V$ gives a unique class $[Z_*]\in W$ minimizing $\|[X]-[Z]\|_2$ over $[Z]\in W$. [L3, L4]

2.1 By [L3], every class in $W$ has an affine representative of the form $Z=a_0+\sum_{j=1}^n a_jY_j$. Put $\widetilde X:=X-\mathbb E[X]$ and $\widetilde Y_j:=Y_j-\mathbb E[Y_j]$. Then $$X-Z=\widetilde X-\sum_{j=1}^n a_j\widetilde Y_j+\left(\mathbb E[X]-a_0-\sum_{j=1}^n a_j\mathbb E[Y_j]\right).$$ Expanding the square and using [L1] shows that the mixed term with the final constant vanishes, so $$\mathbb E[(X-Z)^2]=\mathbb E\left[\left(\widetilde X-\sum_{j=1}^n a_j\widetilde Y_j\right)^2\right]+\left(\mathbb E[X]-a_0-\sum_{j=1}^n a_j\mathbb E[Y_j]\right)^2.$$ Hence every affine representative of the minimizing class must satisfy $$a_0=\mathbb E[X]-\sum_{j=1}^n a_j\mathbb E[Y_j].$$ [L1, L3, step 1.1, algebra]

3.1 After imposing the intercept from step 2.1, define $$Q(a_1,\dots,a_n):=\mathbb E\left[\left(\widetilde X-\sum_{j=1}^n a_j\widetilde Y_j\right)^2\right].$$ Using [L1] and [L2], $$Q(a)=\operatorname{Var}(X)-2\sum_{j=1}^n a_j\operatorname{Cov}(X,Y_j)+\sum_{i=1}^n\sum_{j=1}^n a_ia_j\operatorname{Cov}(Y_i,Y_j).$$ [L1, L2, step 2.1, algebra]

4.1 Let $h=(h_1,\dots,h_n)\in\mathbb R^n$. Substituting $a+h$ into step 3.1 and subtracting gives $$Q(a+h)-Q(a)=\mathbb E\left[\left(\sum_{j=1}^n h_j\widetilde Y_j\right)^2\right]+2\sum_{i=1}^n h_i\left(\sum_{j=1}^n\operatorname{Cov}(Y_i,Y_j)a_j-\operatorname{Cov}(X,Y_i)\right).$$ Therefore, if $a$ satisfies the normal equations, then $Q(a+h)-Q(a)\ge0$ for every $h$, so $a$ minimizes $Q$. [step 3.1, L1, algebra]

5.1 Conversely, suppose $a$ minimizes $Q$. Fix $i$ and take $h=te_i$, where $e_i$ is the $i$th standard basis vector. Then step 4.1 gives $$Q(a+te_i)-Q(a)=t^2\operatorname{Var}(Y_i)+2t\left(\sum_{j=1}^n\operatorname{Cov}(Y_i,Y_j)a_j-\operatorname{Cov}(X,Y_i)\right)\ge0$$ for every real $t$. The coefficient of $t$ must therefore be $0$, since the same inequality holds for both signs of $t$. This is exactly the $i$th normal equation, and $i$ was arbitrary. [step 4.1, given, algebra]

6.1 Let $a$ and $b$ be two coefficient vectors satisfying the normal equations, and let $$D:=\sum_{j=1}^n (a_j-b_j)\widetilde Y_j.$$ Subtracting the two linear systems gives $\sum_j \operatorname{Cov}(Y_i,Y_j)(a_j-b_j)=0$ for every $i$. Multiplying the $i$th equation by $a_i-b_i$ and summing over $i$, then using bilinearity from [L1], yields $$\mathbb E[D^2]=\sum_{i=1}^n\sum_{j=1}^n (a_i-b_i)(a_j-b_j)\operatorname{Cov}(Y_i,Y_j)=0.$$ Because $D^2\ge0$, [L5] gives $D=0$ almost surely. Thus the corresponding predictors agree almost surely, so the minimizing class in $L^2(\mathbb P)$ is unique even when the coefficient vector is not. [L1, L5, step 5.1, algebra]

7.1 Step 1.1 gives existence and uniqueness of the minimizing class, step 2.1 identifies the optimal intercept, steps 4.1 and 5.1 characterize the optimal centered coefficients by the covariance normal equations, and step 6.1 proves that all coefficient solutions yield the same predictor almost surely. This is exactly the best affine $L^2$ prediction statement. [step 1.1, step 2.1, step 4.1, step 5.1, step 6.1] ∎
