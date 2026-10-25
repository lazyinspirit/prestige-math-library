---
id: ex-su2-ell-three-modular-data
kind: example
title: "The sl2 modular data at ell=3"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 16
deps: [thm-temperley-lieb-rank-one-tilting-quotient-fusion-category, thm-su2-root-unity-ribbon-category-is-modular, lem-su2-hopf-link-sine-data-from-truncated-fusion, cor-rt-torus-and-state-dimension-formula, def-axiom-of-choice, def-countable-choice, thm-weighted-rt-tqft-and-factorization]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.3"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

Assume full AC, inherited from the weighted RT torus-space construction. For the established standard $\ell=3$ root-of-unity ribbon quotient, the labels are $0,1$, both dimensions are $1$, and

$$S=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}, \qquad(\theta_0,\theta_1)=(1,i),\qquad 1\otimes1=0.$$

The torus state dimension is $2$.

## Facts & Assumptions

**Given:** Full AC, $\ell=3$, $q=e^{\pi i/3}$, and the positive-trace convention.

[F1] The actual quotient has $d_a=\sin((a+1)\pi/3)/\sin(\pi/3)$ and $\theta_a=q^{a(a+2)/2}$ by [[thm-su2-root-unity-ribbon-category-is-modular]]. Applying the conditional sine calculation to these established data gives $S_{ab}=\sqrt{2/3}\sin((a+1)(b+1)\pi/3)$ ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[F2] The actual quotient has the truncated fusion rule of [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]]; its retained range for $a=b=1$, $\ell=3$ is just $c=0$. The torus dimension formula is [[cor-rt-torus-and-state-dimension-formula]].

[A1] Full AC ([[def-axiom-of-choice]]) is assumed for the weighted RT functor and its state-space construction; it supplies the inherited countable choice. The actual tilting quotient and full weighted RT functor are established by their exact suppliers ([[thm-su2-root-unity-ribbon-category-is-modular]], [[thm-weighted-rt-tqft-and-factorization]]).

## Proof

1.1 The dimension formula gives $d_0=d_1=1$. The twist exponents are $0$ and $3/2$, so $\theta_0=1$ and $\theta_1=e^{\pi i/2}=i$. Substitution in the sine formula gives $S_{00}=S_{01}=S_{10}=1/\sqrt2$ and $S_{11}=-1/\sqrt2$. The truncated fusion range for $1\otimes1$ contains only $0$. [F1, F2, given, algebra]

2.1 There are exactly two labels; hence the torus dimension formula gives $\dim V(T^2)=2$. Also $S^2=I$ by direct multiplication of the displayed matrix, verifying nondegeneracy in this finite case. [F2, A1, step 1.1, algebra] ∎
