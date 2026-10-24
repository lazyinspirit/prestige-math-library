---
id: thm-realified-dense-residual-certificate
kind: theorem
title: "A specified realified dense residual check bounds the exact residual"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-abs-value
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-matrix-product-and-identity-matrix
  - def-standard-relative-floating-point-model-and-unit-roundoff
  - thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Bindel, CS 6210: Matrix Computations, Sums, Dots, and Error in
        Linear Systems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
verification:
  precheck: pass
---

## Statement

Let $s\ge1$, $A\in\mathbb R^{s\times s}$, $x,b\in\mathbb R^s$, and let each row dot product be evaluated left to right: round each product, then accumulate the rounded products from the first term onward. After computing $\widehat p=\operatorname{fl}(Ax)$, compute $\widehat r=\operatorname{fl}(b-\widehat p)$ componentwise. Assume the standard relative model with unit roundoff $u$, all products, intermediate sums and subtractions are zero or in the normal range, and $(s+1)u<1$. Put $\gamma_q:=qu/(1-qu)$.

For the exact residual $r=b-Ax$, the specified operation DAG satisfies
$$|r-\widehat r|\le\gamma_{s+1}\bigl(|b|+|A||x|\bigr)$$
componentwise, and therefore
$$\|r\|_\infty\le\|\widehat r\|_\infty+ \gamma_{s+1}\bigl(\|b\|_\infty+\|A\|_\infty\|x\|_\infty\bigr),$$
where $\|A\|_\infty:=\max_i\sum_j|A_{ij}|$ and $\|x\|_\infty:=\max_i|x_i|$. If $d:=\|A\|_\infty\|x\|_\infty+\|b\|_\infty>0$, the normwise backward-error ratio $\eta_\infty:=\|r\|_\infty/d$ is at most $\gamma_{s+1}+\|\widehat r\|_\infty/d$; if $d=0$, then $r=0$.

For $n\ge1$, complex $A\in\mathbb C^{n\times n}$ and $x,b\in\mathbb C^n$, define $R_nz:=(\operatorname{Re}z,\operatorname{Im}z)^T\in\mathbb R^{2n}$ and $\mathcal R(A)=\begin{pmatrix}\operatorname{Re}A&-\operatorname{Im}A\\\operatorname{Im}A&\operatorname{Re}A\end{pmatrix}$; put $\widetilde x=R_nx$ and $\widetilde b=R_nb$. The following square expresses the realification identity proved by direct multiplication in step 1.1.

```tikzcd
\begin{tikzcd}
\mathbb C^n \arrow[r,"A"] \arrow[d,"R_n"'] & \mathbb C^n \arrow[d,"R_n"] \\
\mathbb R^{2n} \arrow[r,"\mathcal R(A)"] & \mathbb R^{2n}
\end{tikzcd}
```

Applying the same real DAG to $\mathcal R(A),\widetilde x,\widetilde b$ gives the same componentwise bound with $s=2n$ and the realified residual. This is a certificate for that explicit realified residual check; it is not a bound for an unspecified native complex-operation DAG or a solver-stability theorem.

## Facts & Assumptions

**Given:** The realified matrix $A$, realified vectors $x,b$, the left-to-right dot-product and subtraction DAG in the Statement, and a unit roundoff $u$ with $(s+1)u<1$.

[F1] A left-to-right real dot product with $s$ rounded products and rounded additions, under the stated normal-range hypotheses and $su<1$, has componentwise coefficients $1+\delta_j$ with $|\delta_j|\le\gamma_s=su/(1-su)$. [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]

[F2] Each product, addition, or subtraction obeys $\operatorname{fl}(z) = z(1+\delta)$ with $|\delta|\le u$ when its exact result is zero or normal; exact zero is preserved. [[def-standard-relative-floating-point-model-and-unit-roundoff]]

[F3] Real and imaginary coordinates and complex conjugation have the meanings in the standard complex representation. [[def-complex-conjugate-real-imaginary-part-and-modulus]]

## Proof

1.1 In the real case set $\widetilde A=A$, $\widetilde x=x$, and $\widetilde b=b$, retaining the given dimension $s$. In the complex case write $A=A_R+iA_I$, $x=x_R+ix_I$, $b=b_R+ib_I$ and set $\widetilde A=\begin{pmatrix}A_R&-A_I\\A_I&A_R\end{pmatrix}$, $\widetilde x=(x_R,x_I)^T$, $\widetilde b=(b_R,b_I)^T$, and $s=2n$. Direct multiplication gives $\widetilde A\widetilde x=(\operatorname{Re}(Ax),\operatorname{Im}(Ax))^T$, so the realified residual is exactly the stacked residual for the original real or complex system. [given, F3, algebra]

1.2 Fix a row $i$ of $\widetilde A$ and put $q_i=\sum_{j<s}|\widetilde A_{ij}\widetilde x_j|$. To include zeros in [F1], apply [F2] to every product and addition, taking its relative error to be zero whenever its exact result is zero. Unrolling the accumulation as in the proof of [F1], each exact term acquires at most $s$ factors $1+\varepsilon$ with $|\varepsilon|\le u$. For $m\le s$ such factors, expansion and the triangle inequality give $|\prod_{\ell=1}^m(1+\varepsilon_\ell)-1|\le(1+u)^m-1\le mu/(1-mu)\le\gamma_s$; the middle bound follows by induction from $(1+u)^m\le(1-mu)^{-1}$. Thus $|\widehat p_i-(\widetilde A\widetilde x)_i|\le\gamma_s q_i$ and $|\widehat p_i|\le(1+\gamma_s)q_i$. [given, F1, F2, algebra]

2.1 By [F2], the rounded subtraction error is at most $u|\widetilde b_i-\widehat p_i|\le u(|\widetilde b_i|+|\widehat p_i|)$. Combining with step 1.2 gives $|(\widetilde b_i-(\widetilde A\widetilde x)_i)-\widehat r_i| \le[\gamma_s+u(1+\gamma_s)]q_i+u|\widetilde b_i|$. [given, F2, step 1.2, algebra]

3.1 The coefficient satisfies $\gamma_s+u(1+\gamma_s)=(s+1)u/(1-su)\le(s+1)u/(1-(s+1)u)=\gamma_{s+1}$, since $(s+1)u<1$; also $u\le\gamma_{s+1}$. Thus step 2.1 is at most $\gamma_{s+1}(q_i+|\widetilde b_i|)$. Doing this for every row proves the componentwise bound. [given, step 2.1, algebra]

4.1 By the triangle inequality, $\|\widetilde r\|_\infty\le\|\widehat r\|_\infty+\gamma_{s+1}\||\widetilde b|+|\widetilde A||\widetilde x|\|_\infty$. For each row, $\sum_j|\widetilde A_{ij}||\widetilde x_j|\le(\sum_j|\widetilde A_{ij}|)\|\widetilde x\|_\infty$; taking maxima gives the normwise bound. [step 3.1, algebra]

5.1 If $d>0$, divide the normwise bound by $d$ to obtain $\eta_\infty\le\gamma_{s+1}+\|\widehat r\|_\infty/d$. If $d=0$, then $\widetilde b=0$ and either $\widetilde A=0$ or $\widetilde x=0$, so $\widetilde b-\widetilde A\widetilde x=0$. [step 4.1, algebra] ∎

## Remarks

The complex branch uses the explicit $2n$-dimensional realification DAG, so its parameter is $\gamma_{2n+1}$. It does not treat one complex multiply-add as one real operation. A different residual evaluator needs its own operation-DAG analysis.
