---
id: thm-villes-inequality
kind: theorem
title: Ville's inequality for nonnegative test supermartingales
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-nonnegative-test-supermartingale
  - def-discrete-stopping-time
  - thm-optional-sampling-for-bounded-stopping-times
  - thm-continuity-from-below-for-measures
  - def-axiom-of-choice
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §2.5"
      url: https://arxiv.org/pdf/2210.01948
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Lemma 2 and Appendix A.3"
      url: https://arxiv.org/pdf/1810.08240
    - title: "Robert L. Wolpert, STA 711 Martingales lecture notes, §1"
      url: https://www2.stat.duke.edu/courses/Fall18/sta711/lec/topics/mg.pdf
---

## Statement

Assume AC. Let $\mathcal P_0$ be a family of probability laws on a common
discrete filtered measurable space and let $E=(E_t)_{t\ge0}$ be a nonnegative
test supermartingale for $\mathcal P_0$
[[def-nonnegative-test-supermartingale]]. For every $P\in\mathcal P_0$ and
every $\alpha\in(0,1)$,
$$P\!\left(\sup_{t\ge0}E_t\ge\frac1\alpha\right)\le\alpha.$$

## Facts & Assumptions

**Given:** Assume AC. If $\mathcal P_0$ is empty the conclusion is vacuous;
otherwise fix $P\in\mathcal P_0$, $\alpha\in(0,1)$, and the nonnegative test
supermartingale $E$. All stopping times below use the discrete filtration and
time starts at zero.

[F1] [[def-nonnegative-test-supermartingale]]: under every null law $P$, $E$ is adapted, integrable, nonnegative almost surely at each time, a supermartingale, and $\mathbb E_P E_0\le1$.

[F2] [[def-discrete-stopping-time]]: a map into $\mathbb N_0\cup\{\infty\}$ is a stopping time when $\{\tau\le n\}\in\mathcal F_n$ for each $n$, and it is bounded if some deterministic $N$ satisfies $\tau\le N$ almost surely.

[F3] [[thm-optional-sampling-for-bounded-stopping-times]]: under AC, for bounded stopping times and a supermartingale the expectation inequality points downward.

[F4] [[thm-continuity-from-below-for-measures]]: for an increasing sequence of measurable events, the measure of the union is the limit of their measures.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation clauses used by the supermartingale definition and bounded optional-sampling theorem.

## Proof

1.1 Fix any $\gamma\in(0,1)$ and define $\tau_\gamma=\inf\{t\ge0:E_t\ge1/\gamma\}$, with $\inf\varnothing=\infty$. For every $n$, $\{\tau_\gamma\le n\}=\bigcup_{k=0}^n\{E_k\ge1/\gamma\}\in\mathcal F_n$, so $\tau_\gamma$ is a stopping time. Also $\{\tau_\gamma\wedge N\le n\}=\{\tau_\gamma\le n\}$ for $n<N$ and is the whole space for $n\ge N$, so each $\tau_\gamma\wedge N$ is a bounded stopping time. [given, F1, F2, choose]

2.1 The constant time $0$ is a stopping time bounded by $0$, and step 1.1 shows $\tau_\gamma\wedge N$ is a bounded stopping time. Bounded optional sampling therefore gives $\mathbb E_P E_{\tau_\gamma\wedge N}\le\mathbb E_P E_0\le1$. [F1, F2, F3, A1, step 1.1]

3.1 On $\{\tau_\gamma\le N\}$, $E_{\tau_\gamma\wedge N}\ge1/\gamma$; on its complement the stopped value is $E_N\ge0$ almost surely. Hence $\mathbb E_P E_{\tau_\gamma\wedge N}\ge\gamma^{-1}P(\tau_\gamma\le N)$, and step 2.1 yields $P(\tau_\gamma\le N)\le\gamma$. [F1, step 2.1, algebra]

4.1 The events $\{\tau_\gamma\le N\}$ increase with $N$ and their union is $\{\tau_\gamma<\infty\}=\bigcup_{t\ge0}\{E_t\ge1/\gamma\}$. Continuity from below and step 3.1 therefore give $P(\exists t\ge0:E_t\ge1/\gamma)\le\gamma$. [F4, step 3.1]

5.1 Let $H=\{\sup_{t\ge0}E_t\ge1/\alpha\}$ and suppose $q=P(H)>\alpha$. Since $q\le1$, $\beta=(\alpha+q)/2$ lies in $(\alpha,1)$, so $1/\beta<1/\alpha$. If every $E_t\le1/\beta$, then $\sup_tE_t\le1/\beta<1/\alpha$, contrary to $H$; hence $H\subseteq\{\exists t:E_t\ge1/\beta\}$ even if the supremum is not attained. Step 4.1 with $\gamma=\beta$ gives $q\le\beta<q$, a contradiction. Therefore $P(H)\le\alpha$, and since $P$ was arbitrary, the bound holds under every null law. [step 4.1, algebra, assume-contra, choose, contradiction, discharge-contradiction] ∎
