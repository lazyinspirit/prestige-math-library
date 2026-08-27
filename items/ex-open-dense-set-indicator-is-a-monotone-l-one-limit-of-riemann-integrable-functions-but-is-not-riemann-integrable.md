---
id: ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable
kind: example
title: "An open dense set of measure less than $1$ is the monotone $L^1$-limit of Riemann integrable indicators, but its indicator is not Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-finite-and-countable-subadditivity-of-measures, thm-geometric-series, thm-continuity-from-below-for-measures, thm-finitely-many-discontinuities-integrable, cor-riemann-integrability-and-lebesgue-null-discontinuity-sets, prop-measure-of-a-set-difference, thm-lebesgue-measure-of-a-box-of-every-kind, thm-borel-sets-are-lebesgue-measurable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Section 9.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

Assume the Axiom of Countable Choice. There exist open sets
$U_1\subseteq U_2\subseteq\cdots\subseteq(0,1)$ such that, with
$U:=\bigcup_{n\ge1}U_n$,

1. each $\mathbf 1_{U_n}$ is Riemann integrable on $[0,1]$;
2. $\mathbf 1_{U_n}\uparrow \mathbf 1_U$ pointwise and
   $$\int_{[0,1]}|\mathbf 1_U-\mathbf 1_{U_n}|\,d\lambda_1\to0;$$
3. $U$ is open and dense with $\lambda_1(U)<1$;
4. $\mathbf 1_U$ is not Riemann integrable on $[0,1]$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] The rationals are countably infinite, and both the rationals and the irrationals are dense in $\mathbb R$. ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]])

[L2] Countable subadditivity bounds the measure of a countable union by the sum of the individual measures. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L3] The geometric series satisfies $$\sum_{k=0}^{\infty}2^{-k}=2.$$ ([[thm-geometric-series]])

[L4] For an increasing sequence of measurable sets $(E_n)$, $$\lambda_1\!\left(\bigcup_n E_n\right)=\sup_n\lambda_1(E_n).$$ ([[thm-continuity-from-below-for-measures]])

[L5] A bounded function on $[0,1]$ that is continuous except at finitely many points is Riemann integrable. ([[thm-finitely-many-discontinuities-integrable]])

[L6] A bounded function on $[0,1]$ is Riemann integrable exactly when its discontinuity set has Lebesgue measure $0$. ([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]])

[L7] If $A\subseteq B$ are measurable with $\lambda_1(A)<+\infty$, then $$\lambda_1(B\setminus A)=\lambda_1(B)-\lambda_1(A).$$ ([[prop-measure-of-a-set-difference]])

[L8] The interval $[0,1]$ has Lebesgue measure $1$, and every open interval has its usual length. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[L9] Every Borel subset of $\mathbb R$ is Lebesgue measurable. ([[thm-borel-sets-are-lebesgue-measurable]])

## Verification

**Proof technique:** direct.

1.1 By [L1], fix an enumeration $(q_k)_{k\ge0}$ of $\mathbb Q\cap(0,1)$. For each $k\ge0$, let $$I_k:=\bigl(q_k-2^{-k-4},\,q_k+2^{-k-4}\bigr)\cap(0,1),$$ put $U_n:=\bigcup_{k<n}I_k$ for $n\ge1$, and put $U:=\bigcup_{k\ge0}I_k$. Each $U_n$ and $U$ is open, and every rational point of $(0,1)$ lies in $U$, so $U$ is dense in $(0,1)$ and hence in $[0,1]$. Each interval $I_k$ has length at most $2^{-k-3}$, so [L2], [L3], [L8], and [L9] give $$\lambda_1(U)\le\sum_{k=0}^{\infty}\lambda_1(I_k)\le\sum_{k=0}^{\infty}2^{-k-3} =2^{-3}\sum_{k=0}^{\infty}2^{-k}=1/4<1.$$ [L1, L2, L3, L8, L9, construct]

2.1 Each $U_n$ is a finite union of open intervals, so $\mathbf 1_{U_n}$ is continuous away from the finitely many endpoints of those intervals. Thus [L5] makes every $\mathbf 1_{U_n}$ Riemann integrable on $[0,1]$. Also $U_n\uparrow U$, so $\mathbf 1_{U_n}\uparrow\mathbf 1_U$ pointwise and $$|\mathbf 1_U-\mathbf 1_{U_n}|=\mathbf 1_{U\setminus U_n}.$$ By [L4] and [L7], $$\int_{[0,1]}|\mathbf 1_U-\mathbf 1_{U_n}|\,d\lambda_1 =\lambda_1(U\setminus U_n)=\lambda_1(U)-\lambda_1(U_n)\to0.$$ [step 1.1, L4, L5, L7]

3.1 Let $C:=[0,1]\setminus U$. Step 1.1 and [L8] give $$\lambda_1(C)=\lambda_1([0,1])-\lambda_1(U)=1-\lambda_1(U)>0.$$ Because $U$ is open, every point of $U$ is a continuity point of $\mathbf 1_U$. Because $U$ is dense, every point of $C$ is a boundary point of $U$, hence every neighbourhood of such a point meets both $U$ and $C$; so $\mathbf 1_U$ is discontinuous at every point of $C$. Therefore the discontinuity set of $\mathbf 1_U$ contains the positive-measure set $C$, and [L6] shows that $\mathbf 1_U$ is not Riemann integrable on $[0,1]$. [step 1.1, step 2.1, L6, L7, L8] ∎
