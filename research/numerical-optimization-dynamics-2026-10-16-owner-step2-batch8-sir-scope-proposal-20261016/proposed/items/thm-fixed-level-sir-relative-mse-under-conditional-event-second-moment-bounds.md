---
id: thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds
kind: theorem
title: "Conditional event second moments give a finite-particle SIR relative MSE bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-fixed-level-sir-splitting
  - thm-fixed-level-sir-estimator-unbiased
  - thm-fixed-level-sir-absolute-mse-bound
  - lem-sir-bounded-potential-unnormalized-update-variance
  - thm-iid-monte-carlo-mean-moments
  - def-moments-variance-and-covariance
  - cor-conditional-variance-decomposition
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the canonical SIR, Feynman–Kac, and conditional-variance suppliers; the finite second-moment recursion adds no choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Cérou, Del Moral and Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Statement

Use the full-multinomial-resampling event model of [[alg-fixed-level-sir-splitting]] with $L\ge1$, $N\ge1$ and positive prefix normalizers. Put $Z=Z_L=P(A_L)>0$, define $q_L=1$ and $q_{p-1}=M_p(G_pq_p)$ for $1\le p\le L$, and let $\eta_p^N$ denote the weighted empirical state law after selection at level $p$. Suppose deterministic finite constants $B_0,\ldots,B_L\ge1$ satisfy $P(q_0^2)\le B_0Z^2$ and, almost surely on $\{\widehat Z_{p-1}>0\}$,
$$\eta_{p-1}^NM_p[(G_pq_p)^2]\le B_p\{\eta_{p-1}^NM_p(G_pq_p)\}^2,\qquad1\le p\le L.$$
Then
$$\mathbb E[(\widehat Z_L-Z)^2]\le Z^2\left\{\prod_{p=0}^L\left(1+\frac{B_p-1}{N}\right)-1\right\}.$$
If $B_0=1$ and $B_p\le B$ for $1\le p\le L$, this is at most $Z^2[(1+(B-1)/N)^L-1]$. The conditions involve actual conditional event second moments under random empirical predictive laws. Bounds on squared conditional future means under the deterministic target laws alone do not imply them.

## Facts & Assumptions

**Given:** The full-resampling event model, finite constants and conditional bounds in the Statement.

[A1] [[def-axiom-of-choice]] is inherited through the general SIR and conditional-expectation suppliers.

[F1] [[alg-fixed-level-sir-splitting]] and [[lem-sir-bounded-potential-unnormalized-update-variance]] give conditionally IID next proposals from $\eta_{p-1}^NM_p$ and the identity $\widehat Z_p\eta_p^N(f)=\widehat Z_{p-1}N^{-1}\sum_i G_p(X_p^i)f(X_p^i)$, including zero weights.

[F2] [[thm-fixed-level-sir-absolute-mse-bound]] gives $0\le q_p\le1$, $P(q_0)=Z$, and the conditional-mean martingale identity for $U_p=\widehat Z_p\eta_p^N(q_p)$.

[F3] [[thm-iid-monte-carlo-mean-moments]] gives variance of a mean as common variance divided by $N$. [[def-moments-variance-and-covariance]] gives $\mathbb EH^2=\operatorname{Var}(H)+(\mathbb EH)^2$; [[cor-conditional-variance-decomposition]] supplies conditional second-moment decomposition.

[F4] [[thm-fixed-level-sir-estimator-unbiased]] gives $\mathbb E\widehat Z_L=Z$.

## Proof

1.1 Write $\alpha_p=1+(B_p-1)/N$. The initial particles are IID from $P$, $\widehat Z_0=1$ and $G_0=1$, so $U_0=N^{-1}\sum_iq_0(X_0^i)$ has mean $Z$ and second moment $Z^2+[P(q_0^2)-Z^2]/N\le\alpha_0Z^2$. All $U_p$ lie in $[0,1]$ by [F2], so all following conditional second moments exist. [given, A1, F1, F2, F3, algebra]

2.1 Conditional on the particle history $\mathcal F_{p-1}$, put $z=\widehat Z_{p-1}$, $a=\eta_{p-1}^NM_p(G_pq_p)$ and $b=\eta_{p-1}^NM_p[(G_pq_p)^2]$. By [F1] and [F3], $\mathbb E[U_p^2\mid\mathcal F_{p-1}]=z^2[a^2+(b-a^2)/N]$. On $z>0$, the hypothesis $b\le B_pa^2$ bounds this by $\alpha_p z^2a^2=\alpha_pU_{p-1}^2$, using $q_{p-1}=M_p(G_pq_p)$. If $a=0$ this same calculation gives zero, without division by $a$. If $z=0$, the zero-normalizer branch makes $U_p=U_{p-1}=0$, so the inequality also holds without a hypothesis on the fallback empirical law. [given, F1, F2, F3, algebra]

3.1 Taking expectations in step 2.1 and iterating over $p=1,\ldots,L$ yields $\mathbb EU_L^2\le\prod_{p=1}^L\alpha_p\,\mathbb EU_0^2\le Z^2\prod_{p=0}^L\alpha_p$. Since $q_L=1$, $U_L=\widehat Z_L$. Its mean is $Z$ by [F4], so subtracting $Z^2$ proves the claimed MSE bound. If $B_0=1$ then $\alpha_0=1$; if every remaining $B_p\le B$, each remaining factor is at most $1+(B-1)/N$, giving the specialization. [step 1.1, step 2.1, F3, F4, algebra, induction] ∎

## Source notes

The stated bound is proved here from the explicit conditional moment hypotheses, not attributed to the cited paper as an identical theorem. No new source reading is asserted. The cited nonasymptotic particle analysis is source context; its separate domination hypotheses are not inferred from these conditions.
