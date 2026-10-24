---
id: rem-real-arithmetic-graph-versus-rounded-execution
kind: remark
title: "Real-arithmetic graph derivatives and rounded execution are different objects"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, thm-graph-gradient-error-from-local-jacobian-perturbations, lem-certified-linear-solve-jacobian-and-pullback-error, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §2"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
dependency_level: 4
---

## Remarks

The exact AD identities refer to the real-arithmetic graph and its exact primitive derivatives. A floating execution uses rounded primal values and derivative arithmetic; its returned AD quantity is not asserted to be the ordinary derivative of the end-to-end rounded machine map. The theorem [[thm-graph-gradient-error-from-local-jacobian-perturbations]] propagates specified local Jacobian discrepancies with exact accumulation and excludes rounding in reverse accumulation additions.

For a concrete mathematical solve primitive, [[lem-certified-linear-solve-jacobian-and-pullback-error]] supplies those discrepancies. With stored primal $\widehat x$, fixed approximate inverse $B$ assembled from basis solves, certified $\|I-AB\|_2\le d<1$, $\|b-A\widehat x\|_2\le\rho$, $\|B\|_2\le M$, and $K=M/(1-d)$, the vector and matrix edges have $\eta_b=Kd$ and $\eta_A=Kd\|\widehat x\|+K^2\rho$. Its additional explicit dot/outer-product allowances cover rounded pullback evaluation. Triangular, successful Cholesky, and QR backends are admissible once those residuals are certified; a small factorization residual alone is insufficient. The lemma includes the derivative-evaluation-point error, conditioning, arithmetic success and replay hypotheses.

For the implicit example, specify $A(\theta)=\begin{bmatrix}1&\theta\\0&1\end{bmatrix}$, $b=(2,1)^T$, $x(\theta)=A(\theta)^{-1}b$, and objective $J(\theta)=(1,1)x(\theta)$. Then $x(\theta)=(2-\theta,1)^T$ and $J'(0)=-1$. At $\theta=0$, ordinary triangular substitution for the primal and basis solves gives $\widehat x=(2,1)^T$, $B=I$, and $d=\rho=0$. In [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], assume $1,2,3$ are normal representable numbers. The solves, sequential dot products for $B^Tc$ with $c=(1,1)^T$, and outer product $-(B^Tc)\widehat x^T$ have only representable results $0,\pm1,\pm2$. Round-to-nearest therefore leaves every result exact. Contracting the matrix cotangent $-\begin{bmatrix}2&1\\2&1\end{bmatrix}$ with $A'(0)=\begin{bmatrix}0&1\\0&0\end{bmatrix}$ returns $-1$. This exactness follows from the specified operations and rounding rule; zero solve defects alone only remove the fixed-map discrepancy.

A Cholesky or QR factor-output primitive is a different smooth map from the mathematical solve. Its derivative must be evaluated on one fixed strict branch, with its own local derivative errors, or its finite loop must be expanded into the scalar primitives of the graph. The solve bound does not identify a factorization residual with a factor-output derivative bound.
