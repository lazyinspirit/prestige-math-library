---
id: thm-milstein-mlmc-level-variance-and-cost
kind: theorem
title: "Milstein MLMC correction variance and inverse-epsilon-squared cost"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-milstein-scheme-and-iterated-integrals
  - thm-commutative-milstein-strong-order-one
  - def-mlmc-hierarchy-and-coupled-corrections
  - thm-mlmc-complexity-under-rate-assumptions
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Sections 10.3 and 10.6, printed pp. 345-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 6.4"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Assume AC and the scalar or commutative-noise SDE hypotheses of [[thm-commutative-milstein-strong-order-one]]. Let $T>0$, use dyadic step sizes $h_\ell=T2^{-\ell}$, and let $\psi:\mathbb R^d\to\mathbb R$ be Lipschitz. At each level form the Milstein approximation $Y_\ell(T)$; couple adjacent levels by using the same Brownian path, so each coarse increment is the sum of its two fine increments. Put $P_\ell=\psi(Y_\ell(T))$ and let $\Delta_\ell=P_\ell^f-P_{\ell-1}^c$ for $\ell\ge1$, as in [[def-mlmc-hierarchy-and-coupled-corrections]]. For fixed finite $d,m$ and bounded-cost coefficient and derivative evaluations, constants independent of $\ell$ satisfy
$$|\mathbb E P_\ell-\mathbb E\psi(X_T)|\le C_bh_\ell,\qquad \operatorname{Var}(\Delta_\ell)\le C_vh_\ell^2,\qquad C_\ell\le C_ch_\ell^{-1}.$$
The exact statement and proof of [[thm-mlmc-complexity-under-rate-assumptions]] then give an MLMC estimator with root-mean-square error at most $\epsilon$ and total work $O(\epsilon^{-2})$ for all sufficiently small $\epsilon>0$. The variance statement is for Lipschitz terminal payoffs and the stated nested coupling; no Euler correction-rate theorem or area-sampling cost is substituted.

## Facts & Assumptions

**Given:** The SDE and Milstein hypotheses, a fixed finite horizon $T$, a Lipschitz payoff $\psi$, the dyadic hierarchy, nested Brownian coupling, and bounded work per Milstein step.

[L1] [[def-milstein-scheme-and-iterated-integrals]]: under commutative noise the Milstein update uses Brownian increments and coefficient derivatives, with no iterated-area samples.

[L2] [[thm-commutative-milstein-strong-order-one]]: on a shared Brownian path, $\mathbb E|Y_h(T)-X_T|^2\le Ch^2$ for all sufficiently small grid steps $h$.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: dyadic levels use $h_\ell=T2^{-\ell}$, a fine/coarse coupling, and correction $\Delta_\ell=P_\ell^f-P_{\ell-1}^c$.

[F2] [[thm-mlmc-complexity-under-rate-assumptions]]: if bias is $O(h^\alpha)$ with $\alpha\ge1/2$, correction variance is $O(h^\beta)$ with $\beta>0$, and one correction sample costs $O(h^{-1})$, then the MLMC work is $O(\epsilon^{-2})$ when $\beta>1$.

[F3] [[cor-cauchy-schwarz-for-random-variables]]: $\mathbb E|UV|\le(\mathbb E|U|^2)^{1/2}(\mathbb E|V|^2)^{1/2}$ for square-integrable real variables; applied to norms it gives the $L^2$ triangle bound and $\mathbb E|U|\le\|U\|_2$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Brownian and strong Milstein interfaces; no additional choice is used in the coupling or rate argument.

## Proof

**Given:** The hypotheses above.

1.1 For all sufficiently fine levels, [L2] gives $\|Y_\ell(T)-X_T\|_2\le C h_\ell$, where $\|Z\|_2=(\mathbb E|Z|^2)^{1/2}$. There are only finitely many coarser dyadic levels; each has finitely many steps and finite second moments because the coefficients and derivatives are bounded. Enlarging $C$ therefore makes the same error bound valid for every level. The same argument gives $\mathbb E|\psi(Y_\ell(T))|^2<\infty$, since $|\psi(x)|\le |\psi(0)|+\operatorname{Lip}(\psi)|x|$. [L1, L2, given]

1.2 A level-$\ell$ fine path has $T/h_\ell=2^\ell$ steps and its coarse companion has $2^{\ell-1}$ steps. Each commutative Milstein step uses a fixed finite number of coefficient/derivative evaluations and Gaussian vector samples for fixed $d,m$; [L1] requires no Lévy-area sampler. Thus one correction sample has work at most $C(2^\ell+2^{\ell-1})\le C_ch_\ell^{-1}$, including the finitely many coarse initial levels after increasing $C_c$. [L1, F1, given, algebra]

2.1 The fine and coarse approximations in $\Delta_\ell$ use the same Brownian path and hence the same exact terminal value $X_T$. By [F3], $\|U+V\|_2\le\|U\|_2+\|V\|_2$; with $h_{\ell-1}=2h_\ell$ this gives $$\|Y_\ell^f(T)-Y_{\ell-1}^c(T)\|_2\le\|Y_\ell^f(T)-X_T\|_2+\|Y_{\ell-1}^c(T)-X_T\|_2\le C(h_\ell+h_{\ell-1})\le C'h_\ell.$$ For each $\ell\ge1$, the Lipschitz property yields $\operatorname{Var}(\Delta_\ell)\le\mathbb E|\Delta_\ell|^2\le\operatorname{Lip}(\psi)^2\mathbb E|Y_\ell^f(T)-Y_{\ell-1}^c(T)|^2\le C_vh_\ell^2$. At level zero, $\Delta_0=P_0$ by [F1] and has finite variance by step 1.1; increasing $C_v$ to also dominate $\operatorname{Var}(P_0)/h_0^2$ makes the same envelope hold there. [given, L2, F1, F3, step 1.1, algebra]

2.2 Again by the Lipschitz property and [F3], $$|\mathbb E P_\ell-\mathbb E\psi(X_T)|\le\mathbb E|\psi(Y_\ell(T))-\psi(X_T)|\le\operatorname{Lip}(\psi)\|Y_\ell(T)-X_T\|_2\le C_bh_\ell.$$ The finite-level second-moment statement in step 1.1 verifies the square-integrability premise of [F1]. [L2, F1, F3, step 1.1, algebra]

3.1 The estimates in steps 2.1, 2.2, and 1.2 verify [F2] with $\alpha=1$ and $\beta=2$. Since $2>1$ and $1\ge1/2$, applying [F2] proves the stated $O(\epsilon^{-2})$ MLMC work bound. The local variance argument uses only the strong order-one result [L2] for nested commutative-Milstein paths; AC is inherited as stated in [A1]. [F2, L2, A1, step 2.1, step 2.2, step 1.2] ∎

