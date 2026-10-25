---
id: ex-it-gaussian-distortion-waterline
kind: example
title: "Finite Gaussian-vector distortion waterline"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-axiom-of-choice
  - lem-it-finite-vector-gaussian-water-level-allocation
  - thm-it-gaussian-vector-squared-error-rate-distortion
  - def-it-general-mutual-information
  - def-kullback-leibler-divergence
  - def-standard-normal-and-normal-laws
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is inherited from the Gaussian and KL suppliers; it implies Countable Choice for change of variables."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§10.3.3, Theorem 10.3.3, printed pp. 312–314: vector Gaussian water-filling example."
---

## Statement

Assume AC. Let $X_1\sim N(0,4)$ and $X_2\sim N(0,1)$ be independent, and use total squared-error budget $D=5/2$. The water level is $\theta=3/2$, the optimal coordinate distortions are $(3/2,1)$, and the information rate is $\frac12\log_2(8/3)$ bits per vector. An attaining reconstruction is $Y_1=\sqrt{5/2}U$, $Y_2=0$, where $X_1=\sqrt{5/2}U+\sqrt{3/2}V$ for standard normals $U,V$ that are mutually independent and jointly independent of $X_2$.

## Facts & Assumptions

**Given:** Independent centered Gaussian coordinates of variances 4 and 1, squared-error budget $5/2$, and AC.

[F1] [[lem-it-finite-vector-gaussian-water-level-allocation]]: the optimum allocates $\min(\lambda_i,\theta)$ with unique $\theta$ satisfying the total-distortion equation.

[F2] [[thm-it-gaussian-vector-squared-error-rate-distortion]]: for independent Gaussian coordinates, the standard-Borel information rate in bits is the half-sum of positive log variance-to-water-level ratios.

[F3] [[def-it-general-mutual-information]] and [[def-kullback-leibler-divergence]]: mutual information in nats is joint-law KL from the product of the marginals, computed as the joint expectation of the log Radon–Nikodym density.

[F4] [[def-standard-normal-and-normal-laws]] and [[thm-orthogonal-transform-preserves-standard-normal-product-law]]: normal laws are scaled standard-normal laws, and orthogonal transforms preserve independent standard normals under AC.

[F5] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: finite independent product laws exist; independent variables with densities have the product density, as verified by integration on rectangles and uniqueness.

[F6] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: an invertible linear change of variables transforms densities by the absolute inverse determinant. Its Countable Choice hypothesis follows from AC by restricting a choice function to a countable family.

## Proof

1.1 Since $1<\theta<4$, the water-level equation is $\min(4,\theta)+\min(1,\theta)=\theta+1=5/2$, so $\theta=3/2$. The allocated distortions are $(\min(4,3/2),\min(1,3/2))=(3/2,1)$. By [F1]–[F2], $$ R(5/2)=\frac12\left(\log_2\frac4{3/2}+\log_2^+\frac1{3/2}\right)=\frac12\log_2\frac83. $$ [F1, F2, given, algebra]

1.2 Put $a=\sqrt{5/2}$ and $b=\sqrt{3/2}$. Choose independent standard normals $U,V,X_2$ by [F5], and set $X_1=aU+bV$, $Y_1=aU$, $Y_2=0$. The matrix with rows $(a,b)/2$ and $(b,-a)/2$ is orthogonal, so [F4] gives $X_1\sim N(0,4)$, independently of $X_2$. The errors are $bV$ and $X_2$, with total mean square $b^2+1=5/2$. [F4, F5, given, construct, algebra]

2.1 Write $f_s(t)=(2\pi s)^{-1/2}\exp(-t^2/(2s))$ for the $N(0,s)$ density. By [F4]–[F6], $(X_1,Y_1)$ has density $f_{a^2}(y)f_{b^2}(x-y)$. Relative to Lebesgue measure in $(x_1,x_2,y_1)$ times the point mass at $y_2=0$, the joint law and product of the marginals therefore have respective positive densities $f_{a^2}(y_1)f_{b^2}(x_1-y_1)f_1(x_2)$ and $f_4(x_1)f_1(x_2)f_{a^2}(y_1)$. Their log ratio is $$\frac12\ln\frac4{b^2}-\frac{(x_1-y_1)^2}{2b^2}+\frac{x_1^2}{8}.$$ It is integrable since both quadratic terms have finite expectations. By [F3] and step 1.2 its joint expectation is $\frac12\ln(8/3)-\frac12+\frac12=\frac12\ln(8/3)$ nats. Dividing by $\ln2$ yields the rate in step 1.1, proving attainment without assuming a Lebesgue density for the constant reconstruction coordinate. [F3, F4, F5, F6, step 1.1, step 1.2, algebra] ∎

## Remarks

The bars show coordinate variances; the shaded portions show the allocated distortions $\delta_i=\min(\lambda_i,\theta)$. The dashed waterline meets the first bar at $\delta_1=3/2$ and lies above the entire second bar, which saturates at $\delta_2=\lambda_2=1$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,every node/.style={font=\small}]
\draw[->] (0,0) -- (0,4.5) node[above] {variance};
\draw (0,0) -- (5.2,0);
\node[left] at (0,0) {$0$};
\fill[blue!25] (0.8,0) rectangle (2,1.5);
\fill[gray!15] (0.8,1.5) rectangle (2,4);
\draw (0.8,0) rectangle (2,4);
\fill[blue!25] (3.3,0) rectangle (4.5,1);
\draw (3.3,0) rectangle (4.5,1);
\draw[dashed] (0,1.5) -- (5.2,1.5) node[right] {$\theta=3/2$};
\node[above] at (1.4,4) {$\lambda_1=4$};
\node[above] at (3.9,1) {$\lambda_2=1$};
\node at (1.4,0.6) {$\delta_1=3/2$};
\node at (3.9,0.4) {$\delta_2=1$};
\node[below] at (1.4,0) {coordinate 1};
\node[below] at (3.9,0) {coordinate 2};
\end{tikzpicture}
```

Thus $\delta_1+\delta_2=5/2=D$. Only coordinate 1 contributes a positive rate: $R(5/2)=\frac12\log_2(8/3)$ bits per vector, as established in step 1.1. The proof is independent of the illustration.
