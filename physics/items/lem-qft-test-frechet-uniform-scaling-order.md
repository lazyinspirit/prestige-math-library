---
id: lem-qft-test-frechet-uniform-scaling-order
kind: lemma
title: Complete test Frechet space and uniform scaling order
status: published
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-fixed-support-test-function-frechet-space
  - def-qft-distribution-scaling-degree
  - lem-fixed-support-test-function-spaces-are-complete
  - thm-baire-category-for-complete-metric-spaces
  - thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-fixed-support-test-function-frechet-space: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  lem-fixed-support-test-function-spaces-are-complete: mathematical-premise
  thm-baire-category-for-complete-metric-spaces: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, §5.1–§5.2"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, §I.1"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 1
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, $U=\mathbb R^n\setminus\{0\}$, and $t\in\mathcal D'(U)$ have finite real scaling degree $\delta$. For every compact $K\subset U$ and every real $\omega>\delta$, there are an integer $m\ge0$ and $C<\infty$ such that

$$|\langle t_\rho,\psi\rangle|\le C\rho^{-\omega}p_m(\psi)\qquad(0<\rho\le1,\ \psi\in\mathcal D_K),$$

where $\mathcal D_K$ and $p_m(\psi)=\max_{|\alpha|\le m}\sup_{x\in K}|\partial^\alpha\psi(x)|$ are the fixed-support test-function space and seminorms of [[def-fixed-support-test-function-frechet-space]]. The estimate is uniform over the entire moving-scale family, not merely over each fixed test separately.

## Facts & Assumptions

**Given:** $n\ge1$, $U=\mathbb R^n\setminus\{0\}$, $t\in\mathcal D'(U)$ with $\operatorname{sd}_0(t)=\delta\in\mathbb R$, a compact $K\subset U$, and $\omega>\delta$. Assume the Axiom of Choice.

[F1] [[def-qft-distribution-scaling-degree]]: $t_\rho(\psi)=\rho^{-n}t(\psi(\cdot/\rho))$, and $\delta$ is the infimum of the real exponents for which $\rho^\eta t_\rho\to0$ on every fixed test.

[F2] [[def-fixed-support-test-function-frechet-space]]: $\mathcal D_K$ has increasing derivative seminorms $p_m$ and the compatible metric $d(\psi,\xi)=\sum_{m\ge0}2^{-m-1}\min(1,p_m(\psi-\xi))$.

[F3] [[lem-fixed-support-test-function-spaces-are-complete]]: this metric on $\mathcal D_K$ is complete and induces the seminorm topology, without a choice axiom.

[F4] [[def-dependent-choice]]: DC supplies an $\mathbb N$-indexed chain for any serial relation and prescribed initial point.

[F5] [[def-axiom-of-choice]]: AC selects an element from every set-indexed family of nonempty sets.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, AC implies DC.

[F7] [[thm-baire-category-for-complete-metric-spaces]]: under DC, a nonempty complete metric space cannot be a countable union of closed sets with empty interior.

[F8] [[def-countable-choice]]: AC$_\omega$ selects a point from each sequence of nonempty sets.

[A1] The Axiom of Choice is assumed.

## Proof

**Given:** The hypotheses in the statement.

1.1 Let $X=\mathcal D_K$ with the metric of [F2]. It is nonempty because it contains $0$, and it is complete by [F3]. AC supplies DC by [F4]–[F6], so the Baire theorem [F7] applies. The proof of [F7] also chooses centers for its recursively constructed balls; that countable family of nonempty balls is covered by AC$_\omega$ from [F6] and [F8]. [given, F2, F3, F4, F5, F6, F7, F8, A1]

1.2 For fixed $\psi\in X$, set $L_\rho(\psi)=\rho^\omega\langle t_\rho,\psi\rangle$. The exponents $\eta$ for which $\rho^\eta t_\rho(\psi)\to0$ for every fixed test form an upward-closed set: if the limit holds at $\eta$, then for $\omega>\eta$ multiply by $\rho^{\omega-\eta}\le1$. Since its infimum is $\delta<\omega$, some such $\eta$ is below $\omega$, and consequently $L_\rho(\psi)\to0$ as $\rho\downarrow0$. [F1, given, algebra]

2.1 On any compact scale interval $[\epsilon,1]$ with $\epsilon>0$, the tests $\psi(\cdot/\rho)$ have support in one compact subset of $U$ and vary continuously in every derivative seminorm by the chain rule. Continuity of the distribution $t$ therefore makes $\rho\mapsto L_\rho(\psi)$ continuous there. Together with step 1.2 this proves $\sup_{0<\rho\le1}|L_\rho(\psi)|<\infty$ for every $\psi\in X$. [F1, F2, step 1.2]

3.1 For each positive integer $N$, let $E_N=\{\psi\in X:\sup_{0<\rho\le1}|L_\rho(\psi)|\le N\}$. Each $E_N$ is closed because every $L_\rho$ is a continuous linear functional on $X$. Step 2.1 gives $X=\bigcup_{N\ge1}E_N$. By [F7], some $E_N$ has nonempty interior. [step 1.1, step 2.1, F7]

4.1 The topology of $X$ is generated by the increasing seminorms in [F2], so for some $\psi_0\in E_N$, $m\ge0$, and $\varepsilon>0$, the set $\psi_0+\{\zeta:p_m(\zeta)<\varepsilon\}$ lies in $E_N$. For every such $\zeta$, subtracting the two bounds for $\psi_0+\zeta$ and $\psi_0$ gives $|L_\rho(\zeta)|\le2N$ for all $\rho$. If $p_m(\psi)>0$, apply this to $\zeta=\varepsilon\psi/(2p_m(\psi))$; if $p_m(\psi)=0$, then $p_0(\psi)=0$ and hence $\psi=0$. Thus $|L_\rho(\psi)|\le(4N/\varepsilon)p_m(\psi)$ for every $\psi$ and every $0<\rho\le1$. Replacing $L_\rho$ by its definition proves the claimed uniform order estimate. [F2, step 3.1, algebra] ∎
