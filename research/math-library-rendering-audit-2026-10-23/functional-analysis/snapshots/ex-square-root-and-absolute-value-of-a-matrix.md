---
id: ex-square-root-and-absolute-value-of-a-matrix
kind: example
title: Square root and absolute value of a matrix
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-positive-square-root, def-absolute-value-of-a-bounded-operator, def-axiom-of-choice, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, def-order-on-bounded-self-adjoint-operators]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. On the two-dimensional complex inner-product space with orthonormal basis $(e_1,e_2)$ let $T=\begin{pmatrix}0&2\\0&0\end{pmatrix}$, so that $Te_1=0$ and $Te_2=2e_1$. Then $|T|=\operatorname{diag}(0,2)$; in particular the positive square root of $\operatorname{diag}(1,4)$ is $\operatorname{diag}(1,2)$.

## Facts & Assumptions

[A1] For a bounded operator on a nonzero complex Hilbert space, $T^*$ is characterised by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ ([[def-hilbert-space-adjoint]]).

[A2] $|T|=(T^*T)^{1/2}$, this square root is positive, $|T|^2=T^*T$ and $\ker|T|=\ker T$ ([[def-absolute-value-of-a-bounded-operator]]).

[A3] Every bounded positive operator has a unique bounded positive square root, and positivity of a self-adjoint operator is the quadratic-form condition $\langle Cx,x\rangle\ge0$ for every $x$ ([[thm-positive-square-root]], [[def-order-on-bounded-self-adjoint-operators]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A4] AC is the hypothesis of the square-root supplier ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The setting of the example, with diagonal operators written in the orthonormal basis and $\operatorname{diag}(a,b)e_1=ae_1$, $\operatorname{diag}(a,b)e_2=be_2$.

1.1 $T^*=\begin{pmatrix}0&0\\2&0\end{pmatrix}$ and $T^*T=\operatorname{diag}(0,4)$: indeed $\langle Te_1,e_1\rangle=\langle Te_1,e_2\rangle=0$, $\langle Te_2,e_1\rangle=2$, $\langle Te_2,e_2\rangle=0$, so the adjoint has the displayed matrix and the product is diagonal with entries $\|Te_1\|^2=0$ and $\|Te_2\|^2=4$. [A1]

1.2 $\operatorname{diag}(0,4)$ is self-adjoint and positive, as is $\operatorname{diag}(0,2)$: for $x=x_1e_1+x_2e_2$ one has $\langle\operatorname{diag}(0,4)x,x\rangle=4|x_2|^2\ge0$ and $\langle\operatorname{diag}(0,2)x,x\rangle=2|x_2|^2\ge0$. [A1, A3]

2.1 $\operatorname{diag}(0,2)^2=\operatorname{diag}(0,4)=T^*T$, so by uniqueness of the positive square root $|T|=(T^*T)^{1/2}=\operatorname{diag}(0,2)$. [step 1.1, step 1.2, A2, A3]

2.2 Likewise $\operatorname{diag}(1,4)$ is positive with positive square root $\operatorname{diag}(1,2)$, since $\operatorname{diag}(1,2)^2=\operatorname{diag}(1,4)$ and $\langle\operatorname{diag}(1,2)x,x\rangle=|x_1|^2+2|x_2|^2\ge0$, uniqueness again identifying the square root. [step 1.2, A3]

3.1 Hence $|T|=\operatorname{diag}(0,2)$ as claimed, and the positive square root of $\operatorname{diag}(1,4)$ is $\operatorname{diag}(1,2)$. [step 2.1, step 2.2, A4] ∎
