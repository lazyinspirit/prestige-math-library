---
id: cor-conditionally-superuniform-stage-two-pvalue
kind: corollary
title: "A conditionally superuniform stage-2 p-value preserves conditional error"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - thm-conditional-error-budget-two-stage-adaptation
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-p-value
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - thm-conditional-monotone-convergence
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
      locator: "§5.1.3, PDF pp.8–9 (printed S40–S41): conditional-error integration; §5.1.2, PDF p.8 (printed S40): inverse-normal conditional rejection probability."
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, University of Warwick (2013)"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
      locator: "Complete Chapter 5 §5.4.2, printed pp.77–79 = PDF pp.98–100: for each interim value, conditional superuniformity of p2 bounds the rejection probability of p2 <= A, whose expectation is bounded by alpha."
---

## Statement

Under the hypotheses and notation of
[[thm-conditional-error-budget-two-stage-adaptation]], let $p_2$ be a
measurable stage-2 p-value with values in $[0,1]$. Choose an
$\mathcal F_1$-measurable representative $A$ of the original conditional-error
class that takes values in $[0,1]$ everywhere; such a representative exists by
clipping any version on its null exceptional set. Changing to this version
changes $R_2$ only on a null set. Suppose that for every
fixed $u\in[0,1]$,
$$E_0[\mathbf1_{\{p_2\le u\}}\mid\mathcal F_1]\le u\quad\text{almost surely}.$$
Then the adapted rejection event $R_2=\{p_2\le A\}$ satisfies
$$E_0[\mathbf1_{R_2}\mid\mathcal F_1]\le A\quad\text{almost surely},$$
and hence $P_0(R_2)\le\alpha$. The conditional p-value inequality is assumed
separately for each fixed $u$; no common exceptional set over all
$u\in[0,1]$ is required.

## Facts & Assumptions

**Given:** AC; one fixed null law $P_0$; a sub-sigma-algebra $\mathcal F_1$; an original rejection event with a conditional-error version $A$ chosen to take values in $[0,1]$ everywhere, and $E_0A=P_0(R_0)\le\alpha$; and a measurable stage-2 p-value $p_2$ satisfying the displayed conditional inequality for every fixed $u\in[0,1]$.

[A1] AC supplies the conditional-expectation existence interface used for $A$ and the rejection-event conditional expectation. [[def-axiom-of-choice]]

[F1] Conditional-expectation classes have measurable integrable versions satisfying the event-integral identities and are unique almost surely. [[def-conditional-expectation-as-an-ae-class]]

[F2] A p-value statistic is measurable and takes values in $[0,1]$. [[def-p-value]]

[F3] If $Z$ is bounded and $\mathcal F_1$-measurable, then $E_0[ZX\mid\mathcal F_1]=ZE_0[X\mid\mathcal F_1]$. [[thm-taking-out-what-is-known]]

[F4] Conditional expectation preserves increasing limits of nonnegative variables and decreasing limits of integrable variables. [[thm-conditional-monotone-convergence]]

[F5] Conditional expectation is linear, preserves constants, and preserves order. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F6] If the adapted conditional rejection probability is at most $A$ almost surely and $E_0A\le\alpha$, then the adapted null rejection probability is at most $\alpha$. [[thm-conditional-error-budget-two-stage-adaptation]]

## Proof

**Proof technique:** approximate the interim-measurable threshold from above by finite-valued thresholds, then pass to the decreasing limit.

1.1 Conditional order and the constant rule [F5] give $0\le A\le1$ almost surely. Clipping a version on the measurable null set where it leaves $[0,1]$ preserves its conditional-expectation class and changes $R_2$ only on a null set, so take $0\le A\le1$ everywhere. For each integer $n\ge1$, define $A_n=2^{-n}\lceil2^nA\rceil$. Its level sets are $\{A_n=0\}=\{A=0\}$ and $\{A_n=k2^{-n}\}=\{(k-1)2^{-n}<A\le k2^{-n}\}$ for $1\le k\le2^n$, so they are in $\mathcal F_1$. The inequality $\lceil2x\rceil\le2\lceil x\rceil$ shows $A_{n+1}\le A_n$, and $0\le A_n-A<2^{-n}$, hence $A_n$ is finite-valued and $A_n\downarrow A$. Write its values as $t_{n,k}=k2^{-n}$, $k=0,\ldots,2^n$, and put $S_{n,k}=\{A_n=t_{n,k}\}$. By [F2], the events $\{p_2\le t_{n,k}\}$ are measurable. Let $Q_n=E_0[\mathbf1_{\{p_2\le A_n\}}\mid\mathcal F_1]$. The disjoint partition by $S_{n,k}$, linearity [F5], and taking out the bounded known indicator [F3] give $Q_n=\sum_{k=0}^{2^n}\mathbf1_{S_{n,k}}E_0[\mathbf1_{\{p_2\le t_{n,k}\}}\mid\mathcal F_1]\le\sum_{k=0}^{2^n}t_{n,k}\mathbf1_{S_{n,k}}=A_n$ almost surely. For all $n$ these inequalities hold on one probability-one set, because only countably many fixed dyadic thresholds occur. [A1, F1, F2, F3, F5, given, choose, algebra]

2.1 The events $B_n=\{p_2\le A_n\}$ decrease to $B=\{p_2\le A\}$. Their complement indicators are bounded and hence integrable, and increase to $\mathbf1_{B^c}$. Thus [F4] gives $E_0[\mathbf1_{B_n^c}\mid\mathcal F_1]\uparrow E_0[\mathbf1_{B^c}\mid\mathcal F_1]$ almost surely. By linearity and the constant rule [F5], this is equivalent to $Q_n\downarrow Q:=E_0[\mathbf1_B\mid\mathcal F_1]$. Taking limits in step 1.1 and using $A_n\downarrow A$ yields $Q\le A$ almost surely. [F4, F5, step 1.1, algebra]

3.1 Apply [F6] to $R_2=B$: its conditional rejection probability is the $Q$ of step 2.1 and is at most $A$, while the original conditional-error budget has expectation at most $\alpha$. Therefore $P_0(R_2)\le\alpha$. [F6, step 2.1] ∎

## Source notes

The dyadic argument handles the random threshold without assuming a regular conditional distribution or a jointly chosen version of all fixed-threshold conditional probabilities. Conditional superuniformity at each fixed threshold is sufficient because the approximating thresholds use only countably many dyadic values.
