---
id: thm-anytime-validity
kind: theorem
title: A test supermartingale gives anytime-valid p-values
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-nonnegative-test-supermartingale
  - thm-villes-inequality
  - def-anytime-valid-p-value-process
  - def-axiom-of-choice
  - def-p-value
proof_strategy: direct
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
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Lemma 3 and §6"
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §§2.5 and 2.7"
      url: https://arxiv.org/pdf/2210.01948
---

## Statement

Assume AC. Let $E=(E_t)_{t\ge0}$ be a nonnegative test supermartingale
[[def-nonnegative-test-supermartingale]] for a null family $\mathcal P_0$.
Define
$$p_t=\begin{cases}1,&E_t\le0,\\\min(1,1/E_t),&E_t>0.\end{cases}$$
Then $p=(p_t)_{t\ge0}$ is an anytime-valid p-value process for $\mathcal P_0$
[[def-anytime-valid-p-value-process]]. For every $P\in\mathcal P_0$, fixed
$t\ge0$, and $u\in[0,1]$, $P(p_t\le u)\le u$. For every possibly unbounded
stopping time $\tau$ and $u\in[0,1]$,
$$P(\tau<\infty,\ p_\tau\le u)\le u\qquad(P\in\mathcal P_0).$$

## Facts & Assumptions

**Given:** Assume AC. Let $\mathcal P_0$ be a null family, $E$ a nonnegative
test supermartingale for that family, and $p_t$ the process in the Statement.

[F1] [[def-nonnegative-test-supermartingale]]: under every $P\in\mathcal P_0$, each $E_t$ is a finite real-valued measurable random variable and is nonnegative almost surely.

[F2] [[def-anytime-valid-p-value-process]]: an adapted $[0,1]$-valued process is anytime-valid when every null law bounds its all-times crossing event by the threshold.

[F3] [[thm-villes-inequality]]: for every null law $P$ and $\alpha\in(0,1)$, $P(\sup_{t\ge0}E_t\ge1/\alpha)\le\alpha$.

[F4] [[def-p-value]]: a measurable $[0,1]$-valued statistic is a valid p-value for a nonempty null when every null law satisfies $P(p\le u)\le u$ for all $u\in[0,1]$.

[A1] [[def-axiom-of-choice]]: AC is the assumption used by the supermartingale conditional-expectation convention and Ville's bounded optional-sampling proof.

## Proof

1.1 The map $g:\mathbb R\to[0,1]$ defined by $g(x)=1$ for $x\le0$ and $g(x)=\min(1,1/x)$ for $x>0$ is Borel measurable. Thus $p_t=g(E_t)$ is $\mathcal F_t$-measurable and $[0,1]$-valued. For $0<\alpha<1$, the threshold $1/\alpha>1$, so $p_t\le\alpha$ holds exactly when $E_t\ge1/\alpha$. [F1, given, construct]

2.1 Taking the union over all $t$ in the equivalence of step 1.1 and applying F3 gives $P(\exists t\ge0:p_t\le\alpha)=P(\exists t\ge0:E_t\ge1/\alpha)\le P(\sup_{t\ge0}E_t\ge1/\alpha)\le\alpha$ for every $P\in\mathcal P_0$. This is the defining anytime-valid condition. [F2, F3, A1, step 1.1]

3.1 For a fixed $t$ and $0<u<1$, $\{p_t\le u\}\subseteq\{\exists s:p_s\le u\}$, so its probability is at most $u$ by step 2.1. Since $E_t$ is finite, $p_t>0$; hence the bound at $u=0$ is zero, and at $u=1$ it is trivial. For any stopping time $\tau$, $\{\tau<\infty,\ p_\tau\le u\}=\bigcup_{t\ge0}(\{\tau=t\}\cap\{p_t\le u\})$ is contained in the all-times crossing event for $0<u<1$; the endpoints follow as above. Thus fixed-time and stopping-time validity both hold. [F1, F2, step 2.1]

4.1 If $\mathcal P_0$ is nonempty, form the fixed-time experiment with data space $(\Omega,\mathcal F_t)$, parameter set $\Theta=\mathcal P_0$, laws given by restriction to $\mathcal F_t$, and null set $\Theta_0=\Theta$. The observation is the identity map from the original sample space to this data space. Step 1.1 makes $p_t$ a statistic and step 3.1 gives its superuniform inequality under every law in $\Theta_0$, so F4 makes it a valid p-value in this experiment. If $\mathcal P_0$ is empty, all lawwise assertions are vacuous. [F4, step 1.1, step 3.1, given] ∎
