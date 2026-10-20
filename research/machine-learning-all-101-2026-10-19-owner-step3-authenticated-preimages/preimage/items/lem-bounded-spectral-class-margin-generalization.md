---
id: lem-bounded-spectral-class-margin-generalization
kind: lemma
title: "Margin generalization for a bounded spectral-complexity class"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-multiclass-margin-ramp-loss
  - def-spectral-network-complexity
  - lem-spectral-network-output-covering-entropy
  - lem-empirical-rademacher-covering-integral
  - lem-multiclass-margin-rademacher-generalization
  - def-axiom-of-choice
  - def-frobenius-matrix-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, Theorem 1.1 and Appendix A.6"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Statement

Assume the axiom of choice.

Fix a finite network architecture with $L\ge1$, widths $d_0,\ldots,d_L\ge1$, output size $K=d_L\ge2$, activations, and reference matrices as in the spectral-network-complexity definition. Let $s_i>0$, $b_i\ge0$, and let $\mathcal F$ be the nonempty class with layer constraints $\lVert A_i\rVert_\sigma\le s_i$ and $\lVert A_i^\top-M_i^\top\rVert_{2,1}\le b_i$. Let $S=((x_1,y_1),\ldots,(x_n,y_n))$ be an iid sample from any Borel probability measure on $\mathbb R^{d_0}\times\{1,\ldots,K\}$, let $X$ be its input matrix with rows $x_i^\top$, and fix $n\ge1$, $\gamma>0$, and $0<\delta<1$. Set $W:=\max_{0\le i\le L}d_i$. With probability at least $1-\delta$, every $F_A\in\mathcal F$ satisfies
$$L_0(F_A)\le\widehat L_{\gamma,S}(F_A)+\frac8n+\frac{36\sqrt{20}\,\lVert X\rVert_F\sqrt{\log(2W^2)}\log n}{\gamma n}\left(\prod_{i=1}^L\rho_i s_i\right)\left(\sum_{i=1}^L(b_i/s_i)^{2/3}\right)^{3/2}+3\sqrt{\frac{\log(2/\delta)}{2n}}.$$
All logarithms are natural. The matrix norm on $X$ is the Frobenius norm, and the empirical margin loss uses the threshold convention $m_{F_A}(x_i,y_i)\le\gamma$.

## Statement references

[[def-multiclass-margin-ramp-loss]]: defines population error, ramp loss, and empirical margin loss.

[[def-spectral-network-complexity]]: fixes the architecture and mixed-norm/spectral-norm conventions.

[[lem-spectral-network-output-covering-entropy]]: bounds the proper Frobenius entropy of the sample score matrices.

[[lem-empirical-rademacher-covering-integral]]: bounds empirical Rademacher complexity by a truncated covering integral.

[[lem-multiclass-margin-rademacher-generalization]]: converts empirical loss-class complexity to a uniform margin-risk bound.

## Facts & Assumptions

**Given:** The nonempty bounded layer class, iid sample, sample matrix, fixed positive margin, and confidence level in the Statement.

[F1] For fixed sample inputs, the score matrices form the class covered in the output-entropy lemma, whose logarithmic covering bound has coefficient $5\lVert X\rVert_F^2\log(2W^2)\prod_i(\rho_i s_i)^2(\sum_i(b_i/s_i)^{2/3})^3$. [[lem-spectral-network-output-covering-entropy]]

[F2] At a fixed example the margin is the true-label score minus the maximum competing score, and the ramp is the stated piecewise-linear function with breakpoints $-\gamma$ and $0$. [[def-multiclass-margin-ramp-loss]]

[F3] For any nonempty $[0,1]$-valued loss class on the fixed sample and $0<\alpha\le\sqrt n$, its one-sided empirical Rademacher complexity is bounded by the truncated proper-covering integral. [[lem-empirical-rademacher-covering-integral]]

[F4] Under the axiom of choice, with probability at least $1-\delta$, the zero-one risk is bounded by the empirical margin loss, twice the loss-class empirical Rademacher complexity, and the stated confidence term. [[lem-multiclass-margin-rademacher-generalization]] [[def-axiom-of-choice]]

[F5] The Frobenius norm is the Euclidean norm of all matrix entries. [[def-frobenius-matrix-norm]]

[F6] The natural logarithm is increasing and obeys its product law. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]


## Proof
1.1 Fix a realized sample and let $\mathcal U_X$ be its set of score matrices. For score matrices $P,Q$ and example $(x_i,y_i)$, the true-label coordinate changes by at most $\lVert P_{i\cdot}-Q_{i\cdot}\rVert_2$, and the maximum competing coordinate changes by at most the same amount, so [F2] gives margin change at most twice this row norm. On each linear piece of the ramp the absolute slope is either $0$ or $1/\gamma$; the pieces meet continuously at $-\gamma$ and $0$, so summing the changes over the at most three pieces between any two inputs proves $|\ell_\gamma(a)-\ell_\gamma(b)|\le|a-b|/\gamma$. Thus the corresponding loss-vector distance is at most $(2/\gamma)\lVert P-Q\rVert_F$. Mapping the centers of a proper $\gamma\epsilon/2$-cover of $\mathcal U_X$ to their loss vectors therefore gives a proper $\epsilon$-cover of the empirical loss-vector class. [F2, F5, given, algebra, construct]

2.1 Apply [F1] at radius $\gamma\epsilon/2$ and use step 1.1. For every $\epsilon>0$, $\log N_F(\mathcal L_\gamma|S,\epsilon)\le\frac{20\lVert X\rVert_F^2\log(2W^2)}{\gamma^2\epsilon^2}\left(\prod_i(\rho_i s_i)^2\right)\left(\sum_i(b_i/s_i)^{2/3}\right)^3=:\frac{K_\gamma}{\epsilon^2}.$ Here $\mathcal L_\gamma|S$ is the set of vectors of ramp-loss values on the fixed sample. [F1, step 1.1, given, algebra]

3.1 Use the truncated-integral bound [F3] with $\alpha=1/n$, which satisfies $0<1/n\le\sqrt n$. From step 2.1, $\sqrt{\log N_F(\mathcal L_\gamma|S,\epsilon)}\le\sqrt{K_\gamma}/\epsilon$. Since $\int_{1/n}^{\sqrt n}d\epsilon/\epsilon=\log(n\sqrt n)=\tfrac32\log n$, it follows that $\widehat{\mathfrak R}_S(\mathcal L_\gamma)\le\frac4{n\sqrt n}+\frac{18\sqrt{K_\gamma}\log n}{n}.$ When $n=1$ the integral is zero and the same expression holds. [F3, F6, step 2.1, given, algebra]

4.1 Apply [F4] and substitute step 3.1. The term twice $4/(n\sqrt n)$ is at most $8/n$ because $n\ge1$. Also $\sqrt{K_\gamma}=\sqrt{20}\,\lVert X\rVert_F\sqrt{\log(2W^2)}\,\gamma^{-1}(\prod_i\rho_i s_i)(\sum_i(b_i/s_i)^{2/3})^{3/2}$. This yields exactly the stated inequality. [F4, F5, step 3.1, given, algebra] ∎

## Source reference

[Bartlett, Foster, and Telgarsky, *Spectrally-normalized margin bounds for neural networks*, Theorem 1.1 and Appendix A.6](https://arxiv.org/pdf/1706.08498).
