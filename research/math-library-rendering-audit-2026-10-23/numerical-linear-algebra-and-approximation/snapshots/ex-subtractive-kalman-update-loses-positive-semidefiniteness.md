---
id: ex-subtractive-kalman-update-loses-positive-semidefiniteness
kind: example
title: "A rounded subtractive covariance update can become indefinite"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-kalman-filter
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-square-root-kalman-measurement-block-factor-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Use binary floating-point arithmetic with precision $p=24$, round-to-nearest
ties-to-even, and a normal exponent range containing the values below. Let
$$c=1-2^{-24},\qquad P^-=\begin{bmatrix}1&c\\c&1\end{bmatrix},\qquad H=\begin{bmatrix}1&1\end{bmatrix},\qquad R=2^{-22}.$$
Compute $B= P^-H^T$, then $S=HB+R$, then $K=B/S$, and finally
$P_{\rm sub}=P^- - (KS)K^T$, rounding every displayed operation in the
specified format.

## Facts & Assumptions

**Given:** The stated real matrices and the binary floating-point model.

[F1] The operationwise model uses round-to-nearest, ties-to-even on normal
results, and sign changes are exact.
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]

[F2] The canonical covariance map uses
$P^+=P^- -KS K^T$ with innovation $S=HP^-H^T+R$ and
$K=P^-H^TS^{-1}$.
[[alg-kalman-filter]]

[F3] Any successful square-root block update represents its posterior
covariance as $L_{22}L_{22}^T$, an exact positive-semidefinite product, though
this does not certify a separately rounded materialization.
[[lem-square-root-kalman-measurement-block-factor-identity]]

## Proof

**Given:** The data and rounding rule in the Example.

1.1 Since $0<c<1$, for $(x_1,x_2)\ne(0,0)$, $$(x_1,x_2)P^-(x_1,x_2)^T=(x_1+cx_2)^2+(1-c^2)x_2^2>0.$$ Thus $P^-$ is positive definite. Also $1-c^2=2^{-23}-2^{-48}>0$. The exact innovation is $$S=HP^-H^T+R=4-2^{-23}+2^{-22}=4+2^{-23}>0.$$ [F2, given, algebra]

2.1 In precision $p=24$, the exact sum $1+c=2-2^{-24}$ is halfway between the representable predecessor $2-2^{-23}$ and $2$; ties-to-even rounds it to $2$. Hence the computed $B$ is $(2,2)^T$. The next exact addition is $4+2^{-22}$, halfway between $4$ and its next representable successor $4+2^{-21}$; ties-to-even rounds it to $S_{\rm fl}=4$. All these operands and results are normal. [F1, step 1.1, algebra]

3.1 The computed gain is $K=(1/2,1/2)^T$. Multiplication gives $(KS)K^T=\begin{bmatrix}1&1\\1&1\end{bmatrix}$ exactly, so the rounded subtractive update is $$P_{\rm sub}= \begin{bmatrix}0&-2^{-24}\\-2^{-24}&0\end{bmatrix}.$$ Its eigenvalues are $2^{-24}$ and $-2^{-24}$, so it is indefinite. This shows cancellation can lose positive semidefiniteness even with an exact positive-definite prior and positive measurement variance. By contrast, when the factor procedure succeeds, [F3] gives a represented covariance that is an exact factor product; this example makes no claim that rounding a later materialization of that product preserves the property. [F1, F2, F3, step 2.1, algebra] ∎

