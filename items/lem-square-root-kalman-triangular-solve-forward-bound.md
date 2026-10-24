---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-square-root-kalman-triangular-solve-forward-bound.json
  precheck: pass
id: lem-square-root-kalman-triangular-solve-forward-bound
kind: lemma
title: "An innovation solve residual gives a singular-value forward bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§3.2–3.4, triangular innovation solves; the residual-to-forward-error inequality is proved locally here."
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "§3.3.1, square-root measurement update; the singular-value residual bound is proved locally here."

---

## Statement

Let $p\ge1$ and $T\in\mathbb R^{p\times p}$ be nonsingular, define
$$
\sigma_{\min}(T):=\min_{\|x\|_2=1}\|Tx\|_2,
$$
and let $z_*=T^{-1}y$. For any computed vector $\widehat z$ with residual
$r=T\widehat z-y$,
$$
\|\widehat z-z_*\|_2\le\frac{\|r\|_2}{\sigma_{\min}(T)}.
$$
If $S=TT^T$ also satisfies $x^TSx\ge\nu\|x\|_2^2$ for all $x$, with
$\nu>0$, then $\sigma_{\min}(T)\ge\sqrt\nu$ and therefore
$$
\|\widehat z-z_*\|_2\le\frac{\|r\|_2}{\sqrt\nu}.
$$

## Facts & Assumptions

**Given:** The real nonsingular matrix $T$, vector $y$, computed vector
$\widehat z$, and, for the second bound, the stated quadratic lower bound
$\nu>0$.

[F1] The operator norm is the maximum Euclidean stretch on unit vectors.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F2] For every linear map $A$, $\|A^TA\|_2=\|A\|_2^2$.
[[cor-operator-norm-submultiplicative-and-t-star-t-identity|The operator norm is submultiplicative and satisfies $\lVert T^*T\rVert=\lVert T\rVert^2$]]

[F3] Euclidean inner products satisfy $|x^Ty|\le\|x\|_2\|y\|_2$.
[[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Set $M=\|T^{-1}\|_2$. For any vector $w$, $\|w\|_2=\|T^{-1}Tw\|_2\le M\|Tw\|_2$ by the operator norm definition. Thus $\|Tw\|_2\ge\|w\|_2/M$. [F1, given, algebra]

1.2 Suppose $S=TT^T$ has the stated lower bound. If $b=Sx$, then $\nu\|x\|_2^2\le x^TSx=x^Tb\le\|x\|_2\|b\|_2$ by [F3]. For $x\ne0$ this yields $\|S^{-1}b\|_2\le\|b\|_2/\nu$; it is also true for $x=0$. Thus $\|S^{-1}\|_2\le1/\nu$. [F3, given, algebra]

2.1 Since $p\ge1$ and $T^{-1}$ is invertible, $M>0$. By [F1], the maximum defining $M$ is attained at a unit vector $u$. Set $v=T^{-1}u/M$. Then $\|v\|_2=1$ and $\|Tv\|_2=1/M$. Combining this with step 1.1 shows that the minimum in the definition of $\sigma_{\min}(T)$ exists and equals $1/M$. [F1, step 1.1, given, algebra]

3.1 Since $Tz_*=y$, $r=T(\widehat z-z_*)$. Step 1.1 gives $\|\widehat z-z_*\|_2\le M\|r\|_2$, and step 2.1 gives $M=1/\sigma_{\min}(T)$. This proves the first residual bound. [step 1.1, step 2.1, given, algebra]

4.1 Since $(T^{-1})^TT^{-1}=(TT^T)^{-1}=S^{-1}$, [F2] and step 1.2 give $$ \|T^{-1}\|_2^2=\|S^{-1}\|_2\le1/\nu. $$ Step 2.1 then yields $\sigma_{\min}(T)=1/\|T^{-1}\|_2\ge\sqrt\nu$. Substituting this lower bound into step 3.1 proves the final residual estimate. [F2, step 2.1, step 3.1, step 1.2, algebra] ∎

