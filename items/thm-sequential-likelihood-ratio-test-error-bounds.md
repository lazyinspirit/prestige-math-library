---
id: thm-sequential-likelihood-ratio-test-error-bounds
kind: theorem
title: Terminal error bounds for a sequential likelihood-ratio test
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-sequential-likelihood-ratio-test
  - def-axiom-of-choice
  - def-adapted-and-integrable-stochastic-process
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-discrete-stopping-time
  - def-filtration-and-filtered-probability-space
  - def-likelihood-ratio-as-rn-derivative
  - def-martingale-submartingale-and-supermartingale
  - def-nonnegative-test-supermartingale
  - def-probability-measure
  - lem-conditional-expectation-is-unique-almost-surely
  - thm-conditional-expectation-exists-by-radon-nikodym
  - thm-likelihood-ratio-change-of-measure
  - thm-villes-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Robert L. Wolpert, Introduction to Martingales, STA 711 course notes, §1.2, PDF pp. 4–5"
      url: "https://www2.stat.duke.edu/courses/Fall18/sta711/lec/topics/mg.pdf"
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-uniform Chernoff bounds via nonnegative supermartingales, Probability Surveys 17 (2020), Lemma 1 and proof, PDF pp. 15 and 45"
      url: "https://arxiv.org/pdf/1808.03204"
---

## Statement

Assume AC. Under the hypotheses of [[alg-sequential-likelihood-ratio-test]], the boundary rule $\tau$ is a stopping time and, for the specified decisions,
$$P_0(\tau<\infty,\ L_\tau\ge1/\alpha)\le\alpha,\qquad P_1(\tau<\infty,\ L_\tau\le\beta)\le\beta.$$
These bounds concern terminal errors and do not assume that $\tau$ is finite almost surely.

## Facts & Assumptions

**Given:** Assume AC. Let $P_0,P_1$ be probability measures on $(\Omega,\mathcal F)$ with a common discrete filtration $(\mathcal F_t)_{t\ge0}$, equivalent restrictions at each finite $t$, and likelihood-ratio density representatives $L_t=d(P_1|_{\mathcal F_t})/d(P_0|_{\mathcal F_t})$. Let $\alpha,\beta\in(0,1)$ and let $\tau$ and the terminal decisions be as in the algorithm.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function; the supplied likelihood-ratio and conditional-expectation constructions use AC.

[F1] [[def-probability-measure]]: each $P_j$ is a probability measure, so $P_j(\Omega)=1$.

[F2] [[alg-sequential-likelihood-ratio-test]]: the rule stops at the first $t\ge1$ with $L_t\ge1/\alpha$ or $L_t\le\beta$, decides $H_1$ at the upper boundary and $H_0$ at the lower.

[F3] [[def-likelihood-ratio-as-rn-derivative]]: $L_t$ is a nonnegative measurable representative of the finite-time Radon–Nikodym density.

[F4] [[thm-likelihood-ratio-change-of-measure]]: if $P_1|_{\mathcal F_t}\ll P_0|_{\mathcal F_t}$, then $\int gL_t\,dP_0=\int g\,dP_1$ on $\mathcal F_t$ for every nonnegative measurable $g$.

[F5] [[def-filtration-and-filtered-probability-space]] and [[def-adapted-and-integrable-stochastic-process]]: $\mathcal F_t$ is increasing, and an adapted process has each $L_t$ measurable with respect to $\mathcal F_t$.

[F6] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is integrable, measurable with respect to the conditioning sigma-algebra, and has the same integrals on its events.

[F7] [[thm-conditional-expectation-exists-by-radon-nikodym]]: under AC, conditional-expectation versions exist for integrable random variables and sub-sigma-algebras.

[F8] [[lem-conditional-expectation-is-unique-almost-surely]]: two versions with the same event integrals agree almost surely.

[F9] [[def-conditional-expectation-as-an-ae-class]] and [[def-martingale-submartingale-and-supermartingale]]: the martingale condition is the almost-sure conditional-expectation identity at each adjacent time.

[F10] [[def-nonnegative-test-supermartingale]]: for a singleton null family, a nonnegative adapted integrable martingale with initial expectation at most one is a test supermartingale.

[F11] [[thm-villes-inequality]]: for such a process $M_t$ and $c\in(0,1)$, $P(\sup_{t\ge0}M_t\ge1/c)\le c$.

[F12] [[def-discrete-stopping-time]]: $\tau$ is a stopping time when $\{\tau\le n\}\in\mathcal F_n$ for each $n\ge0$.

## Proof

1.1 Each $L_t$ is nonnegative by [F3] and $\mathcal F_t$-measurable by [F2]. Applying [F4] with $g=1$ gives $\mathbb E_{P_0}L_t=P_1(\Omega)=1$ for every $t\ge0$, so $\{L_t=\infty\}$ is $P_0$-null. Define $M_t=L_t$ where $L_t<\infty$ and $M_t=0$ otherwise. This modification on an $\mathcal F_t$-measurable null set preserves the density class. Thus $M$ is a real-valued nonnegative adapted process with $\mathbb E_{P_0}M_t=1$, and each $M_t$ has the same density event integrals as $L_t$. [A1, F1, F2, F3, F4, F5]

1.2 For $n\ge1$, $\{\tau\le n\}=\bigcup_{t=1}^n(\{L_t\ge1/\alpha\}\cup\{L_t\le\beta\})\in\mathcal F_n$, because each $L_t$ is $\mathcal F_t$-measurable and the filtration is increasing; $\{\tau\le0\}=\varnothing$. Hence [F12] makes $\tau$ a stopping time. [F2, F5, F12]

2.1 Fix $t\ge1$ and $A\in\mathcal F_{t-1}$. Since $A\in\mathcal F_t$, [F4] applied to the density representatives $M_t$ and $M_{t-1}$ gives $\mathbb E_{P_0}[\mathbf1_A M_t]=P_1(A)=\mathbb E_{P_0}[\mathbf1_A M_{t-1}]$. By [F7], choose a version $Y_t$ of $\mathbb E_{P_0}[M_t\mid\mathcal F_{t-1}]$. Its defining event-integral identities [F6] show that $Y_t$ and $M_{t-1}$ are versions of that conditional expectation; [F8] makes them equal almost surely. Thus $M$ is a nonnegative $P_0$-martingale by [F9]. [A1, F2, F4, F6, F7, F8, F9, step 1.1]

2.2 For each $t\ge0$, step 1.1 and equivalence of the restrictions give $P_0(L_t=\infty)=P_1(L_t=\infty)=0$. Moreover, [F4] gives $P_1(L_t=0)=\int_{\{L_t=0\}}L_t\,dP_0=0$, so equivalence gives $P_0(L_t=0)=0$. Thus $N_t=\{L_t=0\}\cup\{L_t=\infty\}\in\mathcal F_t$ is null under both laws. Define the real nonnegative $R_t=1/L_t$ where $0<L_t<\infty$ and set it to $0$ on $N_t$. It is $\mathcal F_t$-measurable, and $R_tM_t=1$ off $N_t$. Applying [F4] with density $M_t$ and $g=\mathbf1_A R_t$ for $A\in\mathcal F_t$ gives $\mathbb E_{P_1}[\mathbf1_A R_t]=\mathbb E_{P_0}[\mathbf1_A R_tM_t]=P_0(A)$, so $R_t$ is integrable with mean one. [A1, F2, F3, F4, F5, step 1.1]

3.1 For $t\ge1$ and $A\in\mathcal F_{t-1}$, step 2.2 at times $t$ and $t-1$ gives $\mathbb E_{P_1}[\mathbf1_A R_t]=P_0(A)=\mathbb E_{P_1}[\mathbf1_A R_{t-1}]$. Existence [F7], the defining conditional-expectation identity [F6], and uniqueness [F8] identify $\mathbb E_{P_1}[R_t\mid\mathcal F_{t-1}]=R_{t-1}$ almost surely. Thus $R$ is a nonnegative $P_1$-martingale by [F9]. [A1, F2, F6, F7, F8, F9, step 2.2]

4.1 By steps 1.1 and 2.1, $M$ is a real nonnegative martingale under $P_0$ with $\mathbb E_{P_0}M_0=1$; by [F10] it is a nonnegative test supermartingale for the singleton null $\{P_0\}$. By steps 2.2 and 3.1, $R$ is a real nonnegative test supermartingale for $\{P_1\}$. Applying [F11] gives $P_0(\sup_{t\ge0}M_t\ge1/\alpha)\le\alpha$ and $P_1(\sup_{t\ge0}R_t\ge1/\beta)\le\beta$. [A1, F10, F11, step 1.1, step 2.1, step 2.2, step 3.1]

5.1 The measurable set $N=\bigcup_{t\ge0}N_t$ is null under both laws by countable subadditivity. Outside $N$, simultaneously for every $t$, $M_t=L_t$ and $R_t=1/L_t$. Hence the terminal $H_1$ event is contained in $N\cup\{\sup_{t\ge0}M_t\ge1/\alpha\}$, and the terminal $H_0$ event is contained in $N\cup\{\sup_{t\ge0}R_t\ge1/\beta\}$. These terminal events are measurable countable unions of $\{\tau=t\}$ intersected with the corresponding boundary events. Since $P_0(N)=P_1(N)=0$, step 4.1 proves both terminal-error inequalities. [F2, step 1.1, step 1.2, step 2.2, step 4.1, algebra] ∎

## Source notes

Wolpert §1.2, PDF p. 4, gives the iid likelihood-ratio process and exact martingale maximal-inequality error control. His commonly quoted Wald boundary formulas and expected sample-size expressions are approximate and are not used here. Howard et al., Lemma 1 and its proof (PDF pp. 15 and 45), prove the nonnegative-supermartingale crossing bound through bounded stopping and a limiting argument. The local proof uses the published Ville supplier and does not apply optional stopping at the possibly unbounded $\tau$.
