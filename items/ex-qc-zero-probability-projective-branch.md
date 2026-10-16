---
id: ex-qc-zero-probability-projective-branch
kind: example
title: "A projective measurement branch with probability zero"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [thm-qc-zero-probability-branch-has-no-conditioned-state, def-qc-projective-measurement, def-qc-povm-and-outcome-law, def-qc-instrument-and-conditional-state, thm-qc-projective-measurement-outcome-law, thm-qc-luders-instrument-of-a-povm-is-valid, def-qc-density-operator, def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, thm-non-negative-square-root-exists-and-is-unique, def-dimension, def-real-and-complex-inner-product-space, prop-standard-coordinate-inner-products, def-matrix-product-and-identity-matrix, def-adjoint-of-a-linear-map-between-inner-product-spaces]
justified_by: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Example

On $H=\mathbb C^2$ with its standard inner product, consider

$$P_0=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad P_1=\begin{pmatrix}0&0\\0&1\end{pmatrix},\qquad \rho=P_0.$$

For the two-outcome projective measurement $(P_0,P_1)$, the outcome probabilities are $1$ and $0$. Its Lüders instrument has a zero output on outcome $1$, so that branch has no conditioned density operator.

## Facts & Assumptions

**Given:** The standard complex inner product on $H=\mathbb C^2$, the displayed matrices, and the definitions and results cited below.

[F1] [[prop-standard-coordinate-inner-products]]: on $\mathbb C^2$, $\langle x,y\rangle=x_0\overline{y_0}+x_1\overline{y_1}$, linear in the first argument.

[F2] [[def-dimension]]: $\mathbb C^2$ is a nonzero finite-dimensional space of dimension two.

[F3] [[def-matrix-product-and-identity-matrix]]: matrix products use row-by-column sums and the identity matrix acts as the identity.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $T^*$ is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F5] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F6] [[def-qc-density-operator]]: on nonzero finite-dimensional $H$, a density operator is nonnegative and has trace one.

[F7] [[def-qc-projective-measurement]]: a projective measurement is a finite family of pairwise orthogonal self-adjoint projections summing to the identity.

[F8] [[def-qc-povm-and-outcome-law]]: a finite POVM is a family of nonnegative operators summing to the identity, with weights $\operatorname{tr}(\rho E_a)$.

[F9] [[thm-qc-projective-measurement-outcome-law]]: the projective outcome weights $\operatorname{tr}(\rho P_a)$ form a probability distribution.

[F10] [[thm-qc-luders-instrument-of-a-povm-is-valid]]: the maps $X\mapsto E_a^{1/2}XE_a^{1/2}$ form an instrument for a finite POVM.

[F11] [[def-qc-instrument-and-conditional-state]]: the conditional value is the normalized branch output for positive weight and $\bot$ at zero weight.

[F12] [[thm-qc-zero-probability-branch-has-no-conditioned-state]]: a zero-weight instrument branch has zero output and no conditioned density operator.

[F13] [[def-trace-of-an-endomorphism]]: the trace is the sum of the diagonal entries of an endomorphism matrix.

[F14] [[thm-non-negative-square-root-exists-and-is-unique]]: every nonnegative operator has a unique nonnegative square root.

## Verification

1.1 For $x=(x_0,x_1)$ and $y=(y_0,y_1)$, [F1] gives $\langle P_0x,y\rangle=x_0\overline{y_0}=\langle x,P_0y\rangle$ and $\langle P_1x,y\rangle=x_1\overline{y_1}=\langle x,P_1y\rangle$. By [F4], both matrices are self-adjoint. Direct multiplication [F3] gives $P_0^2=P_0$, $P_1^2=P_1$, $P_0P_1=P_1P_0=0$, and $P_0+P_1=I$. Their quadratic forms are $|x_0|^2$ and $|x_1|^2$, which are nonnegative by [F1]; hence both are nonnegative by [F5]. [given, F1, F3, F4, F5]

2.1 The matrix $\rho=P_0$ is nonnegative by step 1.1 and has trace $1$ by [F13]. Since $H$ is nonzero and finite-dimensional by [F2], [F6] makes $\rho$ a density operator. [given, F2, F6, F13, step 1.1]

2.2 The identities in step 1.1 show that $(P_0,P_1)$ is a projective measurement by [F7]. Each $P_a$ is nonnegative and the pair sums to $I$, so $E_a=P_a$ is also a finite POVM by [F8]. [given, F5, F7, F8, step 1.1]

3.1 The outcome weights are $p_0=\operatorname{tr}(\rho P_0)=\operatorname{tr}(P_0^2)=1$ and $p_1=\operatorname{tr}(\rho P_1)=\operatorname{tr}(P_0P_1)=0$, using [F3] and [F13]. They are probabilities by [F9]. [given, F3, F9, F13, step 2.1]

3.2 Since each $P_a$ is nonnegative and satisfies $P_a^2=P_a$ by step 1.1, uniqueness of the nonnegative square root [F14] gives $P_a^{1/2}=P_a$. Applying [F10] to $E_a=P_a$ therefore gives the Lüders branch maps $\mathcal I_a(X)=P_aXP_a$ and proves that they form an instrument. [given, F8, F10, F14, step 1.1, step 2.2]

4.1 Matrix multiplication [F3] gives $\mathcal I_0(\rho)=P_0$ and $\mathcal I_1(\rho)=P_1P_0P_1=0$. Thus $\mathcal I_0(\rho)/p_0=P_0$ is a density operator by steps 2.1 and 3.1, whereas [F11] assigns $\bot$ to the outcome-$1$ conditional value because $p_1=0$. The zero-branch theorem [F12] confirms that no conditional density operator is assigned there. [given, F3, F11, F12, step 2.1, step 3.1, step 3.2] ∎
