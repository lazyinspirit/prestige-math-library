---
id: ex-a-character-is-positive-definite
kind: example
title: A character is positive definite
dependency_level: 10
deps:
- def-integral-of-a-nonnegative-simple-function
- def-nonnegative-lebesgue-integral
- thm-linearity-of-the-lebesgue-integral-on-l-one
- def-positive-definite-function-on-an-abelian-group
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
- def-dirac-measure
- def-probability-measure
- def-radon-measure-on-an-lch-space
- def-regular-complex-borel-measure-on-an-lch-space
- lem-complex-conjugation-and-modulus-laws
- prop-dirac-measure-is-a-probability-measure
- lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite
- thm-bochner-theorem-for-lca-groups
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $G$ be an abelian topological group and $\gamma\in\widehat G$ a character. Then $\gamma$ is positive definite, $\gamma(0)=1$, and for every nonempty finite family the matrix $[\gamma(x_j-x_k)]_{j,k}$ is the rank-one positive semidefinite matrix with entries $u_j\overline{u_k}$, $u_j=\gamma(x_j)$, since $\gamma(x_j-x_k)=\gamma(x_j)\overline{\gamma(x_k)}$. The empty test matrix has rank zero and quadratic form zero. If $G$ is locally compact Hausdorff and the Axiom of Choice and Dependent Choice are assumed, then under Bochner's theorem [[thm-bochner-theorem-for-lca-groups]], the representing probability measure of $\gamma$ is the point mass $\delta_\gamma$ at $\gamma$.

## Facts & Assumptions

**Given:** An abelian topological group $G$, a character $\gamma\in\widehat G$, and (for the Bochner step) that $G$ is locally compact Hausdorff with dual $\widehat G$ and that Dependent Choice and the Axiom of Choice are available.

[F1] A character $\gamma\in\widehat G$ is a continuous group homomorphism $G\to\mathbb T$, so $\gamma(x_j-x_k)=\gamma(x_j)\gamma(-x_k)$ and $\gamma(0)=1$ ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-complex-conjugation-and-modulus-laws]]); a function $\phi$ is positive definite when $\sum_{j,k}c_j\overline{c_k}\phi(x_j-x_k)\ge0$ for all finite families and coefficients ([[def-positive-definite-function-on-an-abelian-group]]).

[F2] Bochner's theorem: a continuous positive definite function on a locally compact Hausdorff abelian group has a unique representing finite positive Radon measure on the dual, of total mass equal to its value at $0$ ([[thm-bochner-theorem-for-lca-groups]], [[def-radon-measure-on-an-lch-space]]).

[F3] For $x_0$ in a set $X$, the Dirac set function $\delta_{x_0}$ is a probability measure assigning mass $1$ to $\{x_0\}$ and $0$ to its complement ([[def-dirac-measure]], [[def-probability-measure]], [[prop-dirac-measure-is-a-probability-measure]]); consequently $\int f\,d\delta_{x_0}=f(x_0)$ for every $\delta_{x_0}$-integrable $f$, because $f$ agrees with the constant $f(x_0)$ off the $\delta_{x_0}$-null set $X\setminus\{x_0\}$ and the integral of a constant is computed from simple functions ([[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]). On a locally compact Hausdorff space, $\delta_{x_0}$ is a finite regular Borel measure, hence a Radon measure: outer regularity at a Borel set $E$ not containing $x_0$ is witnessed by the open set $X\setminus\{x_0\}$, and for an open set $U$ containing $x_0$ the compact set $\{x_0\}$ witnesses inner regularity ([[def-regular-complex-borel-measure-on-an-lch-space]], [[def-radon-measure-on-an-lch-space]]).

[F4] The Fourier-Stieltjes transform of a finite positive Radon measure is continuous and positive definite ([[lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite]]); the present example uses only the explicit computation with the Dirac measure.

## Proof

**Proof technique:** direct.

1.1 (Rank-one positivity.) For every finite family $x_1,\dots,x_n\in G$ and coefficients $c_1,\dots,c_n\in\mathbb C$, put $u_j:=\gamma(x_j)$. Since $\gamma$ is a homomorphism into the unit circle, $\gamma(x_j-x_k)=\gamma(x_j)\gamma(-x_k)=\gamma(x_j)\overline{\gamma(x_k)}=u_j\overline{u_k}$; consequently $$\sum_{j,k}c_j\overline{c_k}\,\gamma(x_j-x_k)=\sum_{j,k}c_j\overline{c_k}\,u_j\overline{u_k}=\Bigl|\sum_jc_j u_j\Bigr|^2\ge0 .$$ For $n\ge1$ the vector $u$ is nonzero because every $u_j$ has modulus one, so the matrix $u u^*$ is positive semidefinite of rank one. For $n=0$ its rank and quadratic form are zero. Thus $\gamma$ is positive definite and $\gamma(0)=1$. [F1]

1.2 (The point mass represents the character.) Assume now that $G$ is locally compact Hausdorff abelian, so that Bochner's theorem applies. The point mass $\delta_\gamma$ at the point $\gamma\in\widehat G$ is a probability measure and, by [F3], a finite positive Radon measure on $\widehat G$. Its inverse (Fourier-Stieltjes) transform is $$\int_{\widehat G}\eta(x)\,d\delta_\gamma(\eta)=\gamma(x)\qquad(x\in G),$$ because the function $\eta\mapsto\eta(x)$ agrees with the constant $\gamma(x)$ off the $\delta_\gamma$-null set $\widehat G\setminus\{\gamma\}$ (evaluation formula of [F3]; the coordinate functions are measurable by joint continuity). By [F4] this transform is continuous and positive definite, so the computation identifies $\gamma$ as the Fourier-Stieltjes transform of the finite positive Radon measure $\delta_\gamma$; by uniqueness in Bochner's theorem [F2] the point mass is the representing measure of $\gamma$, and its total mass is $\delta_\gamma(\widehat G)=1=\gamma(0)$. [F2, F3, F4]

2.1 Step 1.1 proves that a character is positive definite with $\gamma(0)=1$ and exhibits its rank-one nonempty test matrices and rank-zero empty matrix; step 1.2 identifies the representing probability measure as the point mass $\delta_\gamma$. [step 1.1, step 1.2] ∎
