---
id: ex-qa-22-product-error
kind: example
title: Product block error in a two-factor instance
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - thm-qa-22-product-block-encoding-correctness
  - def-real-and-complex-inner-product-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 53
      url: https://arxiv.org/pdf/1806.01838
---

## Example

Let $A=\operatorname{diag}(1/2,0)$ and $B=\operatorname{diag}(1,0)$, with $\alpha_A=1$, $\alpha_B=2$, $\varepsilon_A=1/10$, and $\varepsilon_B=1/5$. Use the compressed blocks $C_A=\operatorname{diag}(3/5,0)$ and $C_B=\operatorname{diag}(7/10,0)$. The example evaluates both the normalized product-error formula and its unnormalized version.

## Facts & Assumptions

**Given:** The matrices and compressed blocks in the Example section, and the normalized product theorem [[thm-qa-22-product-block-encoding-correctness]].

[F1] [[thm-qa-22-product-block-encoding-correctness]]: the normalized two-factor product error is bounded by $\varepsilon_A\|B\|/\alpha_B+\varepsilon_B\|A\|/\alpha_A+\varepsilon_A\varepsilon_B$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm of a diagonal matrix on the standard inner product space is its maximum action on a unit vector.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary is an invertible linear isometry.

## Verification

1.1 The errors are $E_A=C_A-A/\alpha_A=\operatorname{diag}(1/10,0)$ and $E_B=C_B-B/\alpha_B=\operatorname{diag}(1/5,0)$. For a diagonal $D=\operatorname{diag}(d_1,d_2)$, $\|Dx\|^2=|d_1|^2|x_1|^2+|d_2|^2|x_2|^2$, so the maximum on unit vectors is $\max(|d_1|,|d_2|)$, attained at the corresponding basis vector. Hence $\|E_A\|=1/10$, $\|E_B\|=1/5$, $\|A\|_{\rm op}=1/2$, and $\|B\|_{\rm op}=1$. For each of $C_A,C_B$, put $S=\sqrt{I-C^2}$ and $D(C)=\begin{pmatrix}C&S\\S&-C\end{pmatrix}$. The diagonal matrices $C,S$ commute and satisfy $C^2+S^2=I$, so block multiplication gives $D(C)^*=D(C)$ and $D(C)^2=I$. Then [F3] gives $\|D(C)x\|^2=\langle x,D(C)^*D(C)x\rangle=\|x\|^2$, and [F4] makes $D(C)$ unitary; its top-left block is $C$. Thus both chosen compressed blocks have exact unitary dilations. [given, F2, F3, F4, construct, algebra]

2.1 The theorem's normalized bound is $(1/10)(1/2)+(1/5)(1/2)+(1/10)(1/5)=17/100$. The actual product block is $C_AC_B=\operatorname{diag}(21/50,0)$, whereas $AB/(\alpha_A\alpha_B)=\operatorname{diag}(1/4,0)$; their difference has norm $21/50-1/4=17/100$, so this instance attains that bound. [F1, F2, step 1.1, algebra]

3.1 Multiplying the normalized error by $\alpha_A\alpha_B=2$ gives unnormalized error $17/50$. The looser universal normalized estimate is $\varepsilon_A+\varepsilon_B+\varepsilon_A\varepsilon_B=8/25$; after scaling by $2$, its unnormalized counterpart is $16/25$. Neither bound is tight here. [F1, step 2.1, algebra] ∎
