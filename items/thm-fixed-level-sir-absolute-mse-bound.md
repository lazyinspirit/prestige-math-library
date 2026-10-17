---
id: thm-fixed-level-sir-absolute-mse-bound
kind: theorem
title: Fixed-level SIR has an absolute O(L/N) mean-square bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-fixed-level-sir-splitting
  - thm-fixed-level-sir-estimator-unbiased
  - lem-sir-bounded-potential-unnormalized-update-variance
  - def-nested-rare-event-levels
  - def-feynman-kac-path-targets-and-normalizers
  - thm-iid-monte-carlo-mean-moments
  - def-moments-variance-and-covariance
  - cor-conditional-variance-decomposition
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the Feynman–Kac, canonical SIR unbiasedness, and conditional-variance suppliers. The bounded-potential recursion adds no further choice."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, Theorem 1.5 and §5"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Statement

Assume AC. Use the full-resampling fixed-level SIR model of [[alg-fixed-level-sir-splitting]] on nested levels $A_0\supseteq\cdots\supseteq A_L$, with $N\ge1$ particles and positive finite prefixes $Z_p=P(A_p)>0$. Its event potentials satisfy $0\le G_p\le1$. Then
$
\mathbb E[\widehat p]=P(A_L),\qquad
\mathbb E[(\widehat p-P(A_L))^2]
=\operatorname{Var}(\widehat p)
\le\frac{L+1}{4N}.
$
The bound is an absolute mean-square error bound for fixed $L$; it is not a relative-efficiency claim.

## Facts & Assumptions

**Given:** The nested event model, $L\ge1$, $N\ge1$, full multinomial resampling, transitions $M_p$, and indicator potentials $G_p=\mathbf1_{A_p}$ in [[alg-fixed-level-sir-splitting]].

[A1] [[def-axiom-of-choice]]: AC is inherited through the canonical Feynman–Kac, SIR, and conditional-variance suppliers.

[F1] [[def-nested-rare-event-levels]]: $Z_p=P(A_p)\in(0,1]$ for each prefix, and the target is $P(A_L)$.

[F2] [[alg-fixed-level-sir-splitting]]: The particle normalizer is multiplied at step $p$ by the empirical mean of $G_p$; full multinomial resampling followed by $M_p$ supplies conditionally independent proposals from the current weighted empirical law followed by $M_p$.

[F3] [[lem-sir-bounded-potential-unnormalized-update-variance]]: Given $z\in[0,1]$, a probability law $\nu$, transition $M_p$, potential $G_p\in[0,1]$, and test $f\in[0,1]$, the unnormalized update has conditional mean $z\nu M_p(G_pf)$ and conditional variance at most $z^2/(4N)$.

[F4] [[thm-fixed-level-sir-estimator-unbiased]]: Under positive prefixes and full resampling, $\mathbb E[\widehat p]=Z_L=P(A_L)$.

[F5] [[def-feynman-kac-path-targets-and-normalizers]]: The finite-horizon normalizer is the integral of the ordered product of potentials against the initial law and transition kernels.

[F6] [[thm-iid-monte-carlo-mean-moments]]: The mean of $N$ IID square-integrable variables has variance equal to the common variance divided by $N$.

[F7] [[cor-conditional-variance-decomposition]]: For square-integrable $X$, $\operatorname{Var}(X)=\mathbb E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(\mathbb E[X\mid\mathcal G])$.

[F8] [[def-moments-variance-and-covariance]]: Variance is the expectation of the centered square.

## Proof

1.1 By [F4], the estimate is unbiased for $Z_L=P(A_L)$, so its mean-square error equals its variance. [A1, F1, F4, given]

1.2 Set $Q_L\equiv1$, and recursively $Q_{p-1}=M_p(G_pQ_p)$ for $p=L,\ldots,1$. Since $M_p$ is a probability kernel and $0\le G_p\le1$, backward induction gives $0\le Q_p\le1$. By [F5], $Z_L=P(A_L)=\int Q_0\,dP$. [F1, F2, F5, given, induction]

2.1 Let $\Gamma_p^N=\widehat Z_p\eta_p^N$ be the unnormalized weighted empirical measure after level $p$, and put $U_p=\Gamma_p^N(Q_p)$. Conditional on the particle history through level $p-1$, [F2] gives IID proposals from $\eta_{p-1}^NM_p$; applying [F3] with $z=\widehat Z_{p-1}$, $\nu=\eta_{p-1}^N$, and $f=Q_p$ yields $ \mathbb E[U_p\mid\mathcal F_{p-1}] =\widehat Z_{p-1}\eta_{p-1}^N(M_p(G_pQ_p)) =U_{p-1}, \quad \operatorname{Var}(U_p\mid\mathcal F_{p-1}) \le\frac{\widehat Z_{p-1}^{\,2}}{4N} \le\frac1{4N}. $ Here the final inequality holds because $\widehat Z_{p-1}$ is a product of averages of potentials in $[0,1]$. [A1, F2, F3, step 1.2, given, algebra]

3.1 The initial particles are IID from $P$, so $U_0=N^{-1}\sum_{i=1}^NQ_0(X_0^i)$. Since $Q_0^2\le Q_0$, [F8] gives $\operatorname{Var}(Q_0(X_0))\le\mathbb E Q_0-(\mathbb E Q_0)^2\le1/4$; [F6] then gives $\operatorname{Var}(U_0)\le1/(4N)$. Iterating [F7] with the conditional mean identity from step 2.1 gives $ \operatorname{Var}(U_L) =\operatorname{Var}(U_0)+\sum_{p=1}^L \mathbb E[\operatorname{Var}(U_p\mid\mathcal F_{p-1})] \le\frac{L+1}{4N}. $ [A1, F2, F6, F7, F8, step 2.1, given, induction]

4.1 Since $Q_L\equiv1$, $U_L=\Gamma_L^N(1)=\widehat Z_L=\widehat p$. Step 1.1 and step 3.1 prove both assertions. The constant does not involve $P(A_L)$, so no lower bound on the event probability is needed for this absolute error bound. [F4, step 1.1, step 3.1, algebra] ∎

## Boundary notes

The bound uses indicator potentials in $[0,1]$, full multinomial resampling, and positive finite prefixes. It does not bound relative error or a family with unbounded numbers of levels.

## Source notes

The cited SMC paper treats related nonasymptotic variance bounds with additional domination assumptions. The absolute $(L+1)/(4N)$ estimate here is proved locally from the one-step lemma and bounded-potential backward recursion; the citation is context, not a claim that the source states this exact bound.
