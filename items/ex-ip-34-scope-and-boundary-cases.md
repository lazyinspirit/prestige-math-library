---
id: ex-ip-34-scope-and-boundary-cases
kind: example
title: "Bounded noise, compressible truth, and a large nullspace component"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
axiom_base: "No additional axiom; exact finite-dimensional real calculations."
deps:
  - def-ip-robust-nullspace-property
  - def-ip-best-s-term-l1-error
  - lem-ip-largest-s-coordinates-attain-best-s-term-l1-error
  - alg-ip-basis-pursuit-denoising
  - thm-ip-robust-nsp-noisy-recovery-bound
  - def-p-norms-on-rn
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
generation:
  role: example
---

## Example

In the first two cases take $A=I_2:\mathbb R^2\to\mathbb R^2$, $s=1$, $\rho=\tfrac12$, and $\tau=1$. This matrix satisfies the robust nullspace property for every vector: for each $S\subseteq\{1,2\}$ with $|S|\le1$, $\|h_S\|_2\le\|h\|_2=\|Ah\|_2$, while the other term on the right side of the robust inequality is nonnegative.

1. **Bounded noise.** Let $x^\dagger=(1,0)$, $e=(0,\tfrac1{10})$, $y=(1,\tfrac1{10})$, and $\epsilon=\tfrac1{10}$. The truth is feasible, the noise bound is attained, and $\sigma_1(x^\dagger)_1=0$. Every minimizer therefore obeys the recovery bounds with $C_1=8$, $C_2=12$, $C_3=6$, and $C_4=8$.

2. **Compressible truth.** Let $x^\dagger=(1,\tfrac15)$, $e=(0,\tfrac1{100})$, $y=(1,\tfrac{21}{100})$, and $\epsilon=\tfrac1{100}$. The truth is feasible and $\sigma_1(x^\dagger)_1=\tfrac15$. Every minimizer obeys the same constants and hence
$$\|\widehat x-x^\dagger\|_2\le\tfrac{43}{25},\qquad \|\widehat x-x^\dagger\|_1\le\tfrac{32}{25}.$$

3. **A large nullspace component outside the theorem's hypothesis.** Let $A_0:\mathbb R^2\to\mathbb R$ be $A_0(z_1,z_2)=z_1$, take $s=1$, $x^\dagger=(0,M)$ for any $M>0$, $e=0$, $\epsilon=0$, and $y=0$. The only minimum-$\ell^1$ feasible vector is $\widehat x=(0,0)$, so $\|\widehat x-x^\dagger\|_2=M$ while $\sigma_1(x^\dagger)_1=0$. The robust nullspace property fails for $A_0$, witnessed by $h=(0,1)$ and $S=\{2\}$; this case is outside the theorem and shows why its matrix hypothesis cannot be omitted.

## Example references

[[thm-ip-robust-nsp-noisy-recovery-bound|Robust nullspace noisy recovery bound]]

[[def-ip-robust-nullspace-property|Robust nullspace hypothesis]]

[[def-ip-best-s-term-l1-error|Best s-term ℓ1 error]]

[[alg-ip-basis-pursuit-denoising|Certified BPDN procedure and its conditional success status]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Facts & Assumptions

**Given:** The three finite-dimensional examples in the Example section and the constants and conclusions stated there.

[F1] [[def-ip-robust-nullspace-property]]: the inequality must hold for every vector and every coordinate set of size at most $s$.

[F2] [[def-ip-best-s-term-l1-error]] and [[lem-ip-largest-s-coordinates-attain-best-s-term-l1-error]]: $\sigma_s(x)_1$ is the least coordinate-tail $\ell^1$ error and is obtained by retaining the largest $s$ coordinates.

[F3] [[thm-ip-robust-nsp-noisy-recovery-bound]]: under the robust property, every BPDN minimizer obeys the two displayed error bounds with the stated constants.

[F4] [[def-p-norms-on-rn]]: for $s=1$, the scalar $\sqrt{s}=1$ and the displayed coordinate norms are the usual absolute-value and Euclidean norms.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]] and [[lem-finite-sum-laws]]: Euclidean norms are nonnegative, and finite coordinate sums preserve the stated inequalities.

## Verification

1.1 For $A=I_2$ and any $h,S$ in the first two cases, coordinate restriction gives $\|h_S\|_2\le\|h\|_2$, and $Ah=h$. Since $\rho\|h_{S^c}\|_1\ge0$, the robust inequality holds with $\rho=1/2,\tau=1$. The best-term lemma gives $\sigma_1(1,0)_1=0$ and $\sigma_1(1,1/5)_1=1/5$. [F1, F2, F4, F5, algebra]

1.2 In case 1, $y-x^\dagger=e$ and $\|e\|_2=1/10=\epsilon$. The theorem constants evaluate to $(8,12,6,8)$; with $\sigma_1=0$ its bounds are $\|\widehat x-x^\dagger\|_2\le12/10=6/5$ and $\|\widehat x-x^\dagger\|_1\le8/10=4/5$. In case 2, $\|e\|_2=1/100=\epsilon$ and $y=x^\dagger+e$. The theorem gives $8(1/5)+12(1/100)=43/25,\qquad 6(1/5)+8(1/100)=32/25,$ for the two respective bounds. [F2, F3, given, algebra]

2.1 In case 3, feasibility at radius zero is $z_1=0$. Its objective is then $|z_2|$, whose unique minimum is zero at $z=(0,0)$. For $h=(0,1)$ and $S=\{2\}$, $\|h_S\|_2=1$, $\|h_{S^c}\|_1=0$, and $A_0h=0$, so the robust inequality would require $1\le0$; it fails for every $0<\rho<1$ and every $\tau>0$. The reconstruction error and best one-term tail have the stated values. [F1, F2, given, algebra] ∎