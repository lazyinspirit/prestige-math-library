---
id: lem-selected-sample-size-conditionally-superuniform-pvalue
kind: lemma
title: "Selected-size conditional validity yields a conditionally superuniform p-value"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-p-value
  - def-probability-measure
  - def-measure
  - cor-expectation-of-an-indicator-is-probability
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Kenkichi Sugiura and Hiroyuki Uesaka, Theoretical Basis of Adaptive Designs for Clinical Trials in Phase II and III, Japanese Journal of Biometrics 29, Special Issue 1 (2008), S33–S52"
      url: "https://www.jstage.jst.go.jp/article/jjb/29/Special_Issue_1/29_Special_Issue_1_S33/_pdf/-char/en"
      locator: "§2, PDF pp.2–3 (printed S34–S35), distinct new participants at stage 2; §5.1.2, PDF p.8 (printed S40), conditional null law and sample-size-dependent combination weights."
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, University of Warwick (2013)"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
      locator: "Chapter 5 §5.4.1, printed pp.74–77 = PDF pp.95–98: after interim adaptation the conditional null distribution of the selected stage-2 p-value must remain the calibrated distribution; §5.5, printed pp.79–81 = PDF pp.100–102, sample-size and other design modifications."
---

## Statement

Assume AC. Let $(\Omega,\mathcal F,P_0)$ be a probability space, let
$\mathcal F_1\subseteq\mathcal F$ be the interim sigma-algebra, let
$N$ be an $\mathcal F_1$-measurable sample size taking values in a nonempty
set $M\subseteq\mathbb N_{>0}$, and let $p_N$ be the selected stage-2 p-value. For
$m\in M$, put $D_m=\{N=m\}$. Suppose that for every $m\in M$, every fixed
$u\in[0,1]$, and every $H\in\mathcal F_1$,
$$P_0(H\cap D_m\cap\{p_N\le u\})\le uP_0(H\cap D_m).$$
Then for every fixed $u\in[0,1]$,
$$E_0[\mathbf1_{\{p_N\le u\}}\mid\mathcal F_1]\le u\quad\text{almost surely}.$$
Thus conditional validity within each selected-size stratum implies
conditional superuniformity after an interim-measurable finite sample size is
selected, even when the set of allowed sample sizes is countably infinite.

## Facts & Assumptions

**Given:** AC; a probability space $(\Omega,\mathcal F,P_0)$; a sub-sigma-algebra $\mathcal F_1$; a nonempty set $M\subseteq\mathbb N_{>0}$; an $\mathcal F_1$-measurable map $N:\Omega\to M$; a measurable p-value $p_N:\Omega\to[0,1]$; and the displayed event inequality for every $m,u,H$.

[A1] AC is assumed for the library's conditional-expectation existence interface. [[def-axiom-of-choice]]

[F1] Under AC, $E_0[X\mid\mathcal F_1]$ is the unique almost-sure class of integrable $\mathcal F_1$-measurable versions satisfying the event-integral identities. [[def-conditional-expectation-as-an-ae-class]]

[F2] A p-value is a measurable statistic with values in $[0,1]$; its null validity is the superuniform event inequality for each fixed $u$. [[def-p-value]]

[F3] A probability measure is a countably additive measure of total mass one. [[def-probability-measure]] [[def-measure]]

[F4] The integral of an event indicator is its probability. [[cor-expectation-of-an-indicator-is-probability]]

[F5] Conditional expectation preserves nonnegativity and order. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F6] The nonnegative integral is monotone: if $f\le g$, then $\int f\,d\mu\le\int g\,d\mu$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

## Proof

**Proof technique:** partition the event by selected sample size, then use the defining event integrals to verify the conditional bound.

1.1 Fix $u\in[0,1]$ and $H\in\mathcal F_1$. The event $\{p_N\le u\}$ is measurable by the p-value statistic definition [F2]. The events $D_m$, $m\in M$, are pairwise disjoint and partition $\Omega$. Countable additivity [F3] gives $P_0(H\cap\{p_N\le u\})=\sum_{m\in M}P_0(H\cap D_m\cap\{p_N\le u\})$ and $P_0(H)=\sum_{m\in M}P_0(H\cap D_m)$. Summing the assumed stratum inequalities over the increasing enumeration of $M$ (equivalently, taking finite partial sums and then their limits) yields $P_0(H\cap\{p_N\le u\})\le uP_0(H)$. [given, F2, F3]

2.1 Let $Y_u$ be a version of $E_0[\mathbf1_{\{p_N\le u\}}\mid\mathcal F_1]$, which exists by [A1] and [F1]. The event identities in [F1] and [F4] turn step 1.1 into $\int_HY_u\,dP_0\le uP_0(H)$ for every $H\in\mathcal F_1$. Also $Y_u\ge0$ almost surely by [F5]. If $P_0(Y_u>u)>0$, then for some integer $k\ge1$ the set $H_k=\{Y_u\ge u+1/k\}\in\mathcal F_1$ has positive probability, because $\{Y_u>u\}=\bigcup_{k\ge1}H_k$. Monotonicity [F6] gives $\int_{H_k}Y_u\,dP_0\ge(u+1/k)P_0(H_k)>uP_0(H_k)$, contradicting the preceding event-integral bound. Thus $Y_u\le u$ almost surely. The argument is for each fixed $u$ and does not assert a common exceptional set over uncountably many thresholds. [A1, F1, F4, F5, F6, step 1.1, choose, algebra] ∎

## Source notes

The lemma is the local countable-stratification argument that makes the selected-size conditional law explicit. Sugiura–Uesaka describe fresh nonoverlapping stage samples and warn that the selected stage-2 sample size cannot simply replace the prespecified value in inverse-normal weights; Minas states conditional invariance for the stage-2 p-value after adaptation. Neither citation replaces the event-partition proof above.
