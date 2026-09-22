---
id: thm-ito-isometry-for-elementary-integrands
kind: theorem
title: "Ito isometry for elementary integrands"
status: draft
origin: pipeline
deps: [def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, lem-elementary-ito-integral-is-independent-of-the-step-representation, def-continuous-time-adapted-process-and-martingale, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-taking-out-what-is-known, thm-tower-property-of-conditional-expectation, thm-factorization-of-expectations-for-independent-variables, def-independent-sigma-algebras-and-events, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, lem-gaussian-even-moment-bound-for-brownian-increments, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 3.2.1"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be an elementary
predictable integrand on $[0,T]$ with representation
$H_s=\sum_{k=0}^{m-1}\xi_k1_{(t_k,t_{k+1}]}(s)$ and defining sums $I_t(H)$
[[def-ito-integral-of-an-elementary-predictable-process]]. Extend those sums to
$[0,\infty)$ by setting $I_t(H):=I_T(H)$ for $t\ge T$. Then
$t\mapsto I_t(H)$ is a continuous square-integrable martingale relative to
$(\mathcal F_t)$ [[def-continuous-time-adapted-process-and-martingale]], and
for every $t\in[0,T]$
$$E\bigl[I_t(H)^2\bigr]=E\int_0^tH_s^2\,ds=\sum_{k=0}^{m-1}E[\xi_k^2]\,\bigl(t\wedge t_{k+1}-t\wedge t_k\bigr).$$
By the representation independence of
[[lem-elementary-ito-integral-is-independent-of-the-step-representation]] both
sides depend only on the $(\mathrm dt\otimes P)$-class of $H$.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a horizon $T>0$, an elementary representation $H_s=\sum_{k=0}^{m-1}\xi_k1_{(t_k,t_{k+1}]}(s)$ with bounded $\mathcal F_{t_k}$-measurable $\xi_k$, its defining sums $I_t(H)$, and $0\le s\le t\le T$.

[F1] For $0\le u<v$, the increment $B_v-B_u$ is independent of $\mathcal F_u$ and has law $N(0,v-u)$, hence mean $0$ and second moment $v-u$; for bounded $\mathcal F_u$-measurable $Z$, $E[Z(B_v-B_u)\mid\mathcal F_u]=0$ and $E[Z(B_v-B_u)^2\mid\mathcal F_u]=Z(v-u)$ almost surely. [[def-elementary-predictable-brownian-integrand]] [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]] [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[thm-taking-out-what-is-known]]

[F2] If $Y\in L^1(P)$ is independent of a sub-sigma-algebra $\mathcal G$ then $E[Y\mid\mathcal G]=EY$ almost surely; here $Y=B_v-B_u$ and $\mathcal G=\mathcal F_u$ qualify by [F1]. [[def-independent-sigma-algebras-and-events]] [[thm-factorization-of-expectations-for-independent-variables]] [[lem-conditional-expectation-is-unique-almost-surely]]

[F3] $I(H)$ is adapted, $I_0(H)=0$, and each $I_t(H)$ is a finite sum of products of bounded coefficients with Gaussian increments, so $E|I_t(H)|<\infty$ and $EI_t(H)^2<\infty$; path continuity holds on the Brownian continuity event. [[def-ito-integral-of-an-elementary-predictable-process]]

[F4] For $\mathcal H\subseteq\mathcal G$ and integrable $Z$, $E[E[Z\mid\mathcal G]\mid\mathcal H]=E[Z\mid\mathcal H]$, and $E[ZW\mid\mathcal G]=ZE[W\mid\mathcal G]$ whenever $W\in L^1(P)$, $Z$ is finite real and $\mathcal G$-measurable, and both $ZW$ and $ZE[W\mid\mathcal G]$ are integrable. [[thm-tower-property-of-conditional-expectation]] [[thm-taking-out-what-is-known]]

[F5] A martingale is exactly an adapted process with $E|M_t|<\infty$ and $E[M_t\mid\mathcal F_r]=M_r$ almost surely for all $r\le t$. [[def-continuous-time-adapted-process-and-martingale]]

[F6] AC is declared for the conditional-expectation interface. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Refining the partition of $H$ if necessary so that $s$ is a partition point, write the increments of the defining sum between the deterministic times $s\le t$ as $I_t(H)-I_s(H)=\sum_{k}\xi_k\bigl(B_{t\wedge u_{k+1}}-B_{t\wedge u_k}\bigr)-\sum_k\xi_k\bigl(B_{s\wedge u_{k+1}}-B_{s\wedge u_k}\bigr)$ over the refined partition $0=u_0<\cdots<u_n=T$; this is a finite rearrangement and does not change the values by the definition of the sums. Term by term, a block with $u_{k+1}\le s$ contributes $0$, a block with $u_k\ge t$ contributes $0$, and every remaining block contributes $\xi_k(B_{a_k}-B_{b_k})$ with $b_k=\max(s,u_k)$ and $a_k=t\wedge u_{k+1}$, so that $s\le b_k\le a_k\le T$ and $\xi_k$ is $\mathcal F_{u_k}$-measurable with $\mathcal F_{u_k}\subseteq\mathcal F_{b_k}$. [F3, given]

1.2 For each such block, $B_{a_k}-B_{b_k}$ is independent of $\mathcal F_{b_k}$ with mean $0$ and second moment $a_k-b_k$ by (H): $E[B_{a_k}-B_{b_k}\mid\mathcal F_{b_k}]=0$ and $E[(B_{a_k}-B_{b_k})^2\mid\mathcal F_{b_k}]=a_k-b_k$ almost surely. [F1, F2, given]

2.1 For every remaining block, $E[\xi_k(B_{a_k}-B_{b_k})\mid\mathcal F_s]=E\bigl[\xi_kE[B_{a_k}-B_{b_k}\mid\mathcal F_{b_k}]\bigm|\mathcal F_s\bigr]=0$ almost surely, because $\mathcal F_s\subseteq\mathcal F_{b_k}$, $\xi_k$ is bounded and $\mathcal F_{b_k}$-measurable, and the inner conditional expectation vanishes by step 1.2; summing the finitely many blocks gives $E[I_t(H)-I_s(H)\mid\mathcal F_s]=0$, so $E[I_t(H)\mid\mathcal F_s]=I_s(H)$ almost surely by linearity of conditional expectation and the $\mathcal F_s$-measurability of $I_s(H)$. [F4, step 1.1, step 1.2]

2.2 For the variance, write $\Delta_k^t:=B_{t\wedge t_{k+1}}-B_{t\wedge t_k}$ for the blocks of the original partition, so that $I_t(H)=\sum_k\xi_k\Delta_k^t$. For $k<l$ the random variable $\Delta_k^t$ is $\mathcal F_{t_l}$-measurable, because $t\wedge t_{k+1}\le t_{k+1}\le t_l$, and $\xi_k,\xi_l\in\mathcal F_{t_l}$; Each increment is in $L^2$, and $2|ab|\le a^2+b^2$ shows that a product of two increments is integrable; bounded coefficients preserve these bounds. In the off-diagonal use of [F4], take $W=\Delta_l^t$ and $Z=\xi_k\Delta_k^t\xi_l$; $W\in L^1$, $ZW\in L^1$, and $ZE[W\mid\mathcal F_{t_l}]=0$ is integrable. In the diagonal use, $W=(\Delta_k^t)^2\in L^1$ and $Z=\xi_k^2$ is bounded. By (H) applied to the increment over the interval $(t_l,t\wedge t_{l+1}]$ (which is empty, hence contributes $0$, when $t\le t_l$), $E[\Delta_l^t\mid\mathcal F_{t_l}]=0$ almost surely, so the tower property and taking out what is known give $E[\xi_k\Delta_k^t\xi_l\Delta_l^t]=E\bigl[\xi_k\Delta_k^t\xi_lE[\Delta_l^t\mid\mathcal F_{t_l}]\bigr]=0$. For the diagonal terms, the same identity gives $E[\xi_k^2(\Delta_k^t)^2]=E\bigl[\xi_k^2E[(\Delta_k^t)^2\mid\mathcal F_{t_k}]\bigr]=E[\xi_k^2]\,(t\wedge t_{k+1}-t\wedge t_k)$, where the block contributes $0$ when $t\le t_k$. [F1, F4, step 1.2]

3.1 Summing the diagonal terms of step 2.2 and using $H_s^2=\sum_k\xi_k^21_{(t_k,t_{k+1}]}(s)$ gives $EI_t(H)^2=\sum_{k=0}^{m-1}E[\xi_k^2](t\wedge t_{k+1}-t\wedge t_k)=E\int_0^tH_s^2\,ds$, finite because there are finitely many bounded coefficients. [step 2.2, F3]

4.1 Steps 2.1, 3.1 and [F3] show the martingale and isometry assertions on $[0,T]$.  The constant extension from the statement is adapted and continuous; if $s<T<t$, the already proved identity gives $E[I_t(H)\mid\mathcal F_s]=E[I_T(H)\mid\mathcal F_s]=I_s(H)$, while for $T\le s\le t$ both sides equal $I_T(H)$.  Thus [F5] makes the extended process a continuous square-integrable martingale on $[0,\infty)$. Independence of the representation is the content of item 6. AC is used only through the conditional-expectation facts [F2], [F4] and the Brownian interface (H); the partition, the blocks and the sums are fixed by the representation. [step 2.1, step 3.1, F3, F5, F6, given] ∎

## Source notes

Lawler, Proposition 3.2.1, proves precisely this package for simple processes: the integral is a martingale, and its variance is the integral of the square of the integrand (Proposition 3.2.1(iii)). The proof here separates the conditional-centering identity from the variance expansion; both use only independence and mean zero of future increments, not their full Gaussian law beyond the second moment.
