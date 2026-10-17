---
id: thm-zero-compatible-modified-patankar-euler-admissibility
kind: theorem
title: "The factorized zero-state step is well-defined, nonnegative, conservative, and locally first order"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-zero-compatible-modified-patankar-euler
  - def-source-factored-production-destruction-rates
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the proof is finite-dimensional matrix algebra and local Taylor expansion."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let a finite conservative PDS have a source-factored representation on an open neighborhood $U\subseteq\Omega$ of a compact set $K\subseteq[0,\infty)^m$, with factors that are multivariable $C^2$ on $U$ and nonnegative on $U\cap[0,\infty)^m$, as in [[def-source-factored-production-destruction-rates]]. For every $y^n\in K$ and $h>0$, [[alg-zero-compatible-modified-patankar-euler]] has a unique output $y^{n+1}\ge0$ and conserves $\sum_i y_i$. For the accuracy clause, fix a compact set $K_*\subset U$ containing $K$ and all exact solution segments under consideration, and define the $C^2$ extension $\widetilde F_i(y):=\sum_{j\ne i}(y_j a_{ij}(y)-y_i a_{ji}(y))$ on $U$. If those exact segments remain in $K_*\cap[0,\infty)^m$, then the exact-start local defect is uniformly $O(h^2)$ as $h\downarrow0$, including when some coordinates of $y^n$ are zero. The claim is local; no global error bound at the boundary is asserted.

## Facts & Assumptions

**Given:** A finite conservative PDS, a source-factored representation on a neighborhood of $K$, $y^n\in K\subseteq[0,\infty)^m$, $h>0$, and the fixed compact tube $K_*\subset U$ from the defect clause when local accuracy is asserted.

[F1] [[def-finite-conservative-production-destruction-system]]: $F_i(y)=\sum_{j\ne i}(p_{ij}(y)-d_{ij}(y))$ and the pair rates satisfy $p_{ij}=d_{ji}$.

[F2] [[def-source-factored-production-destruction-rates]]: $p_{ij}(y)=y_j a_{ij}(y)$ and $d_{ij}(y)=y_i a_{ji}(y)$ with $C^2$ factors that are nonnegative on admissible nonnegative states, including at zero coordinates.

[F3] [[alg-zero-compatible-modified-patankar-euler]]: the output solves $(I-hB(y^n))y^{n+1}=y^n$, where $B_{ij}=a_{ij}$ for $i\ne j$ and $B_{jj}=-\sum_{i\ne j}a_{ij}$.

[F4] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: a strict column-diagonally-dominant matrix with positive diagonal and nonpositive off-diagonal entries has an entrywise nonnegative inverse.

[F5] [[def-first-order-ode-initial-value-problem-and-solution]]: an exact trajectory satisfies $y'=F(y)$ on its interval.

[F6] [[def-ck-and-multi-index-notation-in-several-variables]] and [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous first partials give a total derivative, and the $C^2$ factors give continuous first derivatives.

[F7] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] and [[thm-chain-rule-for-total-derivatives]]: products of differentiable coordinate maps obey the bounded-bilinear product rule, and composition obeys the total chain rule.

[F8] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^2$ solution curve on a time interval has a first-order Taylor expansion with remainder bounded by its second derivative on that interval.

[F9] [[def-one-step-ode-method-local-defect-order-and-stability]]: the exact-start local defect is the method output minus the exact next state.

## Proof


1.1 For each column $j$, $B_{jj}=-\sum_{i\ne j}a_{ij}\le0$, $B_{ij}=a_{ij}\ge0$ off the diagonal, and $\sum_iB_{ij}=0$. Therefore $M:=I-hB(y^n)$ has $M_{jj}=1+h\sum_{i\ne j}a_{ij}(y^n)>0$, $M_{ij}=-ha_{ij}(y^n)\le0$ for $i\ne j$, and $M_{jj}-\sum_{i\ne j}|M_{ij}|=1$. By [F4], $M^{-1}\ge0$; hence the unique solution $y^{n+1}=M^{-1}y^n$ exists and is nonnegative, including for zero coordinates in $y^n$. [given, F2, F3, F4, algebra]

2.1 The column sums of $M$ equal one, so $\sum_i y_i^n=\sum_i(My^{n+1})_i=\sum_j(\sum_iM_{ij})y_j^{n+1}=\sum_jy_j^{n+1}$. [F3, step 1.1, algebra]

2.2 The factorization [F2] gives $B(y)y=F(y)$ for every $y\in K$: its $i$-th component is $\sum_{j\ne i}a_{ij}(y)y_j-y_i\sum_{j\ne i}a_{ji}(y)=\sum_{j\ne i}(p_{ij}(y)-d_{ij}(y))$. The matrix identity used in step 1.1 also gives $(I-hB(y))^{-1}=I+hB(y)+h^2B(y)^2(I-hB(y))^{-1}$. [F1, F2, F3, algebra]

3.1 The factors are $C^2$ on $U$, so the coordinate products $y_j a_{ij}(y)$ and $y_i a_{ji}(y)$ have continuous partial derivatives through order two by applying the bounded-bilinear product rule [F7] twice. Applying the continuous-partials theorem [F6] to these components and their first partials shows that $\widetilde F$ is $C^2$ and has continuous first total derivative on $U$. On the compact set $[0,h_0]\times K$ of admissible nonnegative starting states, $B$ is bounded and $I-hB(y^n)$ is invertible by step 1.1 for $h>0$ and equals $I$ at $h=0$. Its inverse is continuous there, hence uniformly bounded for sufficiently small $h$. The matrix identity from step 2.2 then yields $y^{n+1}=y^n+hF(y^n)+O(h^2)$ uniformly, without dividing by any coordinate of $y^n$. On the nonnegative exact path, the PDS field equals the $C^2$ extension $\widetilde F$ defined in the Statement, so [F5]–[F7] give $y'=\widetilde F(y)$ and bounded $y''=D\widetilde F(y)\widetilde F(y)$ on $K_*$. Applying [F8] to the time curve gives the same expansion uniformly. Their difference is therefore $O(h^2)$ uniformly, which is the local-defect bound specified by [F9]. [given, F2, F5, F6, F7, F8, F9, step 2.2, algebra] ∎
